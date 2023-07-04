(()=>{
    "use strict";
    function t() {
        var e = ["moregame", "playEffectSke", "dragonbones/Effect_Play_tex.json", "key", "bitmapFont", "@@iterator", "addImage", "7aYDAlC", "checkImageKey", "checkBitmapFontKey", "defineProperty", "image", "dragonbones/Effect_Play_ske.json", "xmlPath", "229485QqIJmA", "atlas/shopScreen/shop.json", "invite_popup_bg", "atlas/lobbyScreen/lobbyScreen.png", "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.", "hasLoaded", "5hacElO", "constructor", "playEffectAtlas", "checkJSONKey", "configurable", "bigImage/share_image.jpg", "emoEffectAtlas", "next", "dragonbones/Effect_Play_tex.png", "length", "done", "value", "1561290qtfyZq", "dragonbones/Effect_ALL_Copy_tex.json", "addJSON", "isDragonBonesReady", "dragonbones/Icon_All_backup_ske.json", "atlas/lobbyScreen/lobbyScreen.json", "playEffectImage", "37114PVhamH", "addBitmapFont", "bigImage/invite_popup_bg.png", "IOS", "push", "715640OYfITo", "iterator", "atlas/shopScreen/shop.png", "toString", "load", "prototype", "return", "cache", "name", "writable", "homeScreenBG2", "test", "dragonbones/Icon_All_backup_tex.json", "allEffectAtlas", "type", "atlas", "allEffectImage", "call", "Arguments", "1424756JbnZwR", "9365092SIvQMA", "shareImage", "img", "addPriorityAtlas", "json", "175RbHHHS", "shopScreen", "emoEffectSke", "Set", "start", "197576nziSRy", "dragonbones/Icon_All_backup_tex.png", "isArray", "dragonbones/Effect_ALL_Copy_tex.png", "Object", "atlas/spin/spin.png", "path", "allEffectSke", "number", "addAtlas", "isGameReady", "63nHgGeU", "bigImage/homeScreenBG2.jpg", "preload", "from", "atlas/spin/spin.json"];
        return (t = function() {
            return e
        }
        )()
    }
    function e(n, r) {
        var i = t();
        return (e = function(t, e) {
            return i[t -= 124]
        }
        )(n, r)
    }
    function n(t, n) {
        (null == n || n > t[e(143)]) && (n = t.length);
        for (var r = 0, i = new Array(n); r < n; r++)
            i[r] = t[r];
        return i
    }
    function r(t, n) {
        for (var r = e, i = 0; i < n[r(143)]; i++) {
            var a = n[i];
            a.enumerable = a.enumerable || !1,
            a[r(138)] = !0,
            "value"in a && (a[r(167)] = !0),
            Object[r(124)](t, a[r(207)], a)
        }
    }
    !function(t, n) {
        for (var r = e, i = t(); ; )
            try {
                if (432527 == parseInt(r(211)) / 1 * (-parseInt(r(153)) / 2) + -parseInt(r(128)) / 3 + parseInt(r(177)) / 4 * (-parseInt(r(134)) / 5) + parseInt(r(146)) / 6 + -parseInt(r(183)) / 7 * (parseInt(r(188)) / 8) + -parseInt(r(199)) / 9 * (-parseInt(r(158)) / 10) + parseInt(r(178)) / 11)
                    break;
                i.push(i.shift())
            } catch (t) {
                i.push(i.shift())
            }
    }(t);
    var i = 0
      , a = []
      , o = new Map;
    const s = function() {
        var t, s, c, u = e;
        function h() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, h)
        }
        return t = h,
        null,
        c = e,
        (s = [{
            key: u(181),
            value: function(t, e, n) {
                !o.has(t) && o.set(t, {
                    type: 3,
                    key: t,
                    img: e,
                    json: n
                })
            }
        }, {
            key: u(210),
            value: function(t, e) {
                a[u(157)]({
                    type: 1,
                    key: t,
                    path: e
                })
            }
        }, {
            key: u(148),
            value: function(t, e) {
                a[u(157)]({
                    type: 2,
                    key: t,
                    path: e
                })
            }
        }, {
            key: u(197),
            value: function(t, e, n) {
                a[u(157)]({
                    type: 3,
                    key: t,
                    img: e,
                    json: n
                })
            }
        }, {
            key: u(154),
            value: function(t, e, n) {
                a[u(157)]({
                    type: 4,
                    key: t,
                    img: e,
                    xmlPath: n
                })
            }
        }, {
            key: u(201),
            value: function(t) {
                var r = u;
                if (i = 0,
                o.size > 0) {
                    var s, c = function(t, r) {
                        var i = e
                          , a = "undefined" != typeof Symbol && t[Symbol[i(159)]] || t[i(209)];
                        if (!a) {
                            if (Array[i(190)](t) || (a = function(t, r) {
                                var i = e;
                                if (t) {
                                    if ("string" == typeof t)
                                        return n(t, r);
                                    var a = Object[i(163)][i(161)][i(175)](t).slice(8, -1);
                                    return a === i(192) && t[i(135)] && (a = t[i(135)][i(166)]),
                                    "Map" === a || a === i(186) ? Array[i(202)](t) : a === i(176) || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/[i(169)](a) ? n(t, r) : void 0
                                }
                            }(t)) || r && t && typeof t.length === i(196)) {
                                a && (t = a);
                                var o = 0
                                  , s = function() {};
                                return {
                                    s,
                                    n: function() {
                                        return o >= t[i(143)] ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[o++]
                                        }
                                    },
                                    e: function(t) {
                                        throw t
                                    },
                                    f: s
                                }
                            }
                            throw new TypeError(i(132))
                        }
                        var c, u = !0, h = !1;
                        return {
                            s: function() {
                                a = a[i(175)](t)
                            },
                            n: function() {
                                var t = i
                                  , e = a[t(141)]();
                                return u = e[t(144)],
                                e
                            },
                            e: function(t) {
                                h = !0,
                                c = t
                            },
                            f: function() {
                                var t = i;
                                try {
                                    u || null == a[t(164)] || a[t(164)]()
                                } finally {
                                    if (h)
                                        throw c
                                }
                            }
                        }
                    }(o.values());
                    try {
                        for (c.s(); !(s = c.n())[r(144)]; ) {
                            var l = s[r(145)];
                            1 == l[r(172)] ? h[r(125)](l[r(207)], l[r(194)]) : 2 == l[r(172)] ? h.json(l[r(207)], l.path) : 3 == l.type && h[r(173)](l[r(207)], l[r(180)], l[r(182)])
                        }
                    } catch (t) {
                        c.e(t)
                    } finally {
                        c.f()
                    }
                }
                if (h[r(125)](r(168), r(200)),
                h[r(125)](r(179), r(139)),
                h[r(125)](r(130), r(155)),
                h[r(173)]("lobbyScreen", r(131), r(151)),
                h[r(173)]("spinAtlas", r(193), r(203)),
                h[r(173)](r(184), r(160), r(129)),
                a[r(143)] > 0)
                    for (var f = 0; f < a[r(143)]; f++) {
                        var p = a[f];
                        1 == p[r(172)] ? h.image(p[r(207)], p[r(194)]) : 2 == p[r(172)] ? h.json(p[r(207)], p[r(194)]) : 3 == p[r(172)] ? h[r(173)](p[r(207)], p[r(180)], p.json) : 4 == p[r(172)] && h[r(208)](p[r(207)], p.img, p[r(127)])
                    }
                h[r(182)]("allEffectAtlas", r(147)),
                h.json(r(195), "dragonbones/Effect_ALL_Copy_ske.json"),
                h.image(r(174), r(191)),
                h[r(182)](r(140), r(170)),
                h.json(r(185), r(150)),
                h.image("emoEffectImage", r(189)),
                h[r(182)](r(136), r(206)),
                h.json(r(205), r(126)),
                h[r(125)]("playEffectImage", r(142)),
                FBInstant.getPlatform() != r(156) && h[r(173)](r(204), "atlas/homeScreen/moregame.png", "atlas/homeScreen/moregame.json"),
                i > 0 && (!0 === t ? game[r(162)][r(133)] && game.load[r(187)]() : game.load.start())
            }
        }, {
            key: u(125),
            value: function(t, e) {
                var n = u;
                !game[n(165)][n(212)](t) && (game[n(162)][n(125)](t, assetUrl + "/" + e),
                i++)
            }
        }, {
            key: u(173),
            value: function(t, e, n) {
                var r = u;
                !game[r(165)][r(212)](t) && (game[r(162)][r(173)](t, assetUrl + "/" + e, assetUrl + "/" + n),
                i++)
            }
        }, {
            key: u(182),
            value: function(t, e) {
                var n = u;
                !game[n(165)].checkJSONKey(t) && (game[n(162)].json(t, assetUrl + "/" + e),
                i++)
            }
        }, {
            key: u(208),
            value: function(t, e, n) {
                var r = u;
                !game[r(165)][r(213)](t) && (game[r(162)][r(208)](t, e, n),
                i++)
            }
        }, {
            key: u(198),
            value: function() {
                for (var t = u, e = 0; e < a[t(143)]; e++) {
                    var n = a[e];
                    if (1 == n[t(172)] || 3 == n[t(172)]) {
                        if (!game[t(165)][t(212)](n[t(207)]))
                            return !1
                    } else if (2 == n[t(172)]) {
                        if (!game.cache[t(137)](n[t(207)]))
                            return !1
                    } else if (4 == n[t(172)] && !game[t(165)][t(213)](n[t(207)]))
                        return !1
                }
                return !!h[t(149)]()
            }
        }, {
            key: u(149),
            value: function() {
                var t = u;
                return !!(game.cache[t(212)](t(174)) && game[t(165)][t(212)]("emoEffectImage") && game[t(165)][t(212)](t(152)) && game[t(165)].checkJSONKey(t(171)) && game[t(165)].checkJSONKey(t(195)) && game[t(165)][t(137)]("emoEffectAtlas") && game.cache[t(137)](t(185)) && game.cache[t(137)]("playEffectAtlas") && game[t(165)][t(137)]("playEffectSke"))
            }
        }]) && r(t, s),
        Object[c(124)](t, "prototype", {
            writable: !1
        }),
        h
    }();
    function c(t, e) {
        var n = l();
        return (c = function(t, e) {
            return n[t -= 231]
        }
        )(t, e)
    }
    function u(t, e) {
        for (var n = c, r = 0; r < e[n(249)]; r++) {
            var i = e[r];
            i[n(245)] = i.enumerable || !1,
            i.configurable = !0,
            n(272)in i && (i[n(260)] = !0),
            Object.defineProperty(t, i[n(257)], i)
        }
    }
    !function(t, e) {
        for (var n = c, r = t(); ; )
            try {
                if (650880 == parseInt(n(250)) / 1 + -parseInt(n(273)) / 2 * (-parseInt(n(243)) / 3) + -parseInt(n(269)) / 4 + parseInt(n(236)) / 5 * (-parseInt(n(278)) / 6) + -parseInt(n(271)) / 7 * (parseInt(n(242)) / 8) + -parseInt(n(233)) / 9 * (-parseInt(n(253)) / 10) + -parseInt(n(265)) / 11 * (-parseInt(n(232)) / 12))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(l);
    const h = function() {
        var t, e, n, r = c;
        function i() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(c(277))
            }(this, i)
        }
        return t = i,
        null,
        n = c,
        (e = [{
            key: r(237),
            value: function(t, e, n) {
                var i = r;
                if (t[i(249)] > e) {
                    var a = t[i(268)](0, e);
                    return !1 === n ? a : a[i(256)]()
                }
                return t
            }
        }, {
            key: r(258),
            value: function(t, e) {
                for (var n, i = r, a = ["K", "M"], o = a[i(249)] - 1; o >= 0; o--)
                    if (t <= -(n = Math[i(274)](1e3, o + 1)) || t >= n)
                        return +(t / n).toFixed(e) + a[o];
                return t
            }
        }, {
            key: r(270),
            value: function(t) {
                var e = r;
                return t[e(254)]()[e(231)](/\B(?=(\d{3})+(?!\d))/g, ",")
            }
        }, {
            key: r(251),
            value: function(t, e) {
                t || (t = 0),
                e || (e = 1);
                var n = 10 * (e * (e + 1) * (e + 2) + 5 * e);
                return 1 === e && (n = 0),
                e++,
                parseInt((t - n) / (10 * (e * (e + 1) * (e + 2) + 5 * e) - n) * 100)
            }
        }, {
            key: r(261),
            value: function() {
                var t = r
                  , e = (new Date)[t(261)]()
                  , n = e < 0 ? "+" : "-"
                  , i = (e = Math[t(246)](e)) / 60 | 0;
                return "+" == n ? i : -i
            }
        }, {
            key: "createDOMText",
            value: function(t, e, n) {
                var i = r
                  , a = document[i(240)](i(239));
                return a[i(255)]("type", i(252)),
                a.setAttribute("id", t),
                a[i(255)](i(238), e),
                a[i(255)]("maxLength", n),
                a
            }
        }, {
            key: "createDOMButton",
            value: function(t, e) {
                var n = r
                  , i = document.createElement(n(279));
                return i[n(255)](n(263), n(259)),
                i.setAttribute("id", t),
                e && i.appendChild(document.createTextNode(e)),
                i
            }
        }, {
            key: r(264),
            value: function(t, e) {
                var n = r
                  , i = document[n(240)](n(234));
                return t && i[n(255)]("id", t),
                e && i.classList[n(276)](e),
                i
            }
        }, {
            key: r(262),
            value: function(t) {
                var e = r
                  , n = document[e(240)]("I");
                return n.appendChild(document[e(275)](t)),
                n
            }
        }, {
            key: r(267),
            value: function(t) {
                var e = document.getElementById(t);
                e && e.parentNode.removeChild(e)
            }
        }, {
            key: r(235),
            value: function(t, e) {
                var n = r;
                document[n(247)](t)[n(266)][n(276)](e)
            }
        }, {
            key: r(241),
            value: function(t) {
                var e = r
                  , n = Math[e(248)](t / 864e5)
                  , i = Math[e(248)](t % 864e5 / 36e5)
                  , a = Math[e(248)](t % 36e5 / 6e4) + ""
                  , o = Math[e(248)](t % 6e4 / 1e3) + "";
                return 1 == a[e(249)] && (a = "0" + a),
                1 == o[e(249)] && (o = "0" + o),
                0 == n ? i > 0 ? i + ":" + a + ":" + o : a + ":" + o : n + "d " + i + ":" + a + ":" + o
            }
        }]) && u(t, e),
        Object[n(280)](t, n(244), {
            writable: !1
        }),
        i
    }();
    function l() {
        var t = ["formatCoinWithCommas", "7XlTLiz", "value", "1554648QpZDOh", "pow", "createTextNode", "add", "Cannot call a class as a function", "3683142dwCeuQ", "BUTTON", "defineProperty", "replace", "156xNbIKz", "198rwYysi", "DIV", "addDOMClass", "5ICZtGE", "formatName", "placeholder", "INPUT", "createElement", "formatTimeV2", "6422648kwZPna", "3HDOSnF", "prototype", "enumerable", "abs", "getElementById", "floor", "length", "978509kAxBkI", "convertExpToPercent", "text", "19790TcHWLj", "toString", "setAttribute", "trim", "key", "shortenLargeNumber", "button", "writable", "getTimezoneOffset", "createDOMItalicText", "type", "createDOMDiv", "1149049zGmpEE", "classList", "removeDOMElement", "substring", "4359080tYTEFr"];
        return (l = function() {
            return t
        }
        )()
    }
    function f(t, e) {
        var n = y();
        return (f = function(t, e) {
            return n[t -= 358]
        }
        )(t, e)
    }
    function p(t, e) {
        for (var n = f, r = 0; r < e[n(364)]; r++) {
            var i = e[r];
            i.enumerable = i[n(358)] || !1,
            i.configurable = !0,
            n(368)in i && (i.writable = !0),
            Object.defineProperty(t, i[n(372)], i)
        }
    }
    function y() {
        var t = ["apply", "458968wDBSXf", "Cannot call a class as a function", "key", "prototype", "1672544uGTioa", "enumerable", "10272330QVHnog", "762CGcyYZ", "8336624OeAYzp", "defineProperty", "445772tBzsgF", "length", "5208490WvSVHy", "45157aVCnGQ", "3FzJBty", "value"];
        return (y = function() {
            return t
        }
        )()
    }
    !function(t, e) {
        for (var n = f, r = t(); ; )
            try {
                if (777230 == -parseInt(n(370)) / 1 + -parseInt(n(374)) / 2 + -parseInt(n(367)) / 3 * (-parseInt(n(363)) / 4) + -parseInt(n(365)) / 5 + parseInt(n(360)) / 6 * (parseInt(n(366)) / 7) + parseInt(n(361)) / 8 + parseInt(n(359)) / 9)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(y);
    var d = function() {
        function t() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(f(371))
            }(this, t)
        }
        return e = t,
        null,
        n = [{
            key: "dispatchEvent",
            value: function(t) {
                function e(e) {
                    var n = f;
                    return t[n(369)](this, arguments)
                }
                return e.toString = function() {
                    return t.toString()
                }
                ,
                e
            }((function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (e) {
                    var n = new CustomEvent(t,{
                        detail: {
                            value: e
                        }
                    });
                    dispatchEvent(n)
                } else
                    dispatchEvent(new CustomEvent(t))
            }
            ))
        }],
        r = f,
        n && p(e, n),
        Object[r(362)](e, r(373), {
            writable: !1
        }),
        t;
        var e, n, r
    }();
    function v(t, e) {
        var n = b();
        return (v = function(t, e) {
            return n[t -= 381]
        }
        )(t, e)
    }
    function b() {
        var t = ["centerX", "disconnect", "enumerable", "Cannot call a class as a function", "add", "sprite", "setTo", "close", "prototype", "overlay", "closeTimer", "centerY", "preloadBg", "inputEnabled", "anchor", "disconnectTime", "time", "width", "88ssiulX", "writable", "4mBFbUR", "loop", "events", "destroy", "image", "defineProperty", "4314513dXeLKg", "length", "42TyKpwx", "292122GyIsjO", "2420550ZblCQp", "remove", "1114479NwrLuI", "world", "game", "2673850GuChxO", "connector", "height", "angle", "1378770WofLkQ", "value", "rotatorTimer", "log", "overlayTexture", "preloadIcon", "109716bjPVNl"];
        return (b = function() {
            return t
        }
        )()
    }
    function m(t, e) {
        for (var n = v, r = 0; r < e[n(403)]; r++) {
            var i = e[r];
            i[n(424)] = i.enumerable || !1,
            i.configurable = !0,
            n(416)in i && (i[n(395)] = !0),
            Object[n(401)](t, i.key, i)
        }
    }
    !function(t, e) {
        for (var n = v, r = t(); ; )
            try {
                if (788509 == parseInt(n(415)) / 1 + -parseInt(n(421)) / 2 + parseInt(n(402)) / 3 * (-parseInt(n(396)) / 4) + -parseInt(n(406)) / 5 + parseInt(n(405)) / 6 * (parseInt(n(404)) / 7) + parseInt(n(394)) / 8 * (parseInt(n(408)) / 9) + -parseInt(n(411)) / 10)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(b);
    const g = function() {
        var t, e, n, r = v;
        function i(t, e) {
            var n = v
              , r = this;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(v(425))
            }
            )(this, i),
            this.game = t,
            e && e[n(386)] && (this[n(386)] = this[n(410)][n(392)].events[n(426)](e.closeTimer, (function() {
                return r[n(383)]()
            }
            ))),
            e && e[n(391)] && (this[n(386)] = this[n(410)][n(392)][n(398)][n(426)](e[n(391)], (function() {
                return r[n(423)]()
            }
            )))
        }
        return t = i,
        n = v,
        (e = [{
            key: r(423),
            value: function() {
                var t = r;
                try {
                    CyberInstance[t(412)].disconnect()
                } catch (e) {
                    console[t(418)](e)
                }
            }
        }, {
            key: "open",
            value: function() {
                var t = r
                  , e = this;
                this.overlay = this[t(410)][t(426)][t(381)](0, 0, CyberGlobalData[t(419)]),
                this[t(385)][t(393)] = this[t(410)][t(393)],
                this[t(385)].height = this.game[t(413)],
                this[t(385)].alpha = .5,
                this[t(385)][t(389)] = !0,
                this[t(420)] = this[t(410)].add[t(400)](this[t(410)].world[t(422)], this[t(410)][t(409)][t(387)], t(388)),
                this.preloadIcon[t(390)][t(382)](.5),
                this.rotatorTimer = this[t(410)].time[t(398)][t(397)](30, (function() {
                    var n = t;
                    return e.preloadIcon[n(414)] += 10
                }
                ))
            }
        }, {
            key: r(383),
            value: function() {
                var t = r;
                this[t(386)] && (this[t(410)].time[t(398)][t(407)](this.closeTimer),
                this[t(386)] = null),
                this[t(417)] && (this[t(410)][t(392)][t(398)][t(407)](this[t(417)]),
                this[t(417)] = null),
                this[t(385)] && (this[t(385)][t(399)](),
                this[t(385)] = null),
                this[t(420)] && (this.preloadIcon.destroy(),
                this.preloadIcon = null)
            }
        }]) && m(t[n(384)], e),
        Object[n(401)](t, n(384), {
            writable: !1
        }),
        i
    }();
    var w = T;
    function I(t) {
        var e = T;
        return (I = e(406) == typeof Symbol && e(412) == typeof Symbol[e(407)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(406) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(363)] ? n(412) : typeof t
        }
        )(t)
    }
    function S(t, e) {
        for (var n = T, r = 0; r < e[n(402)]; r++) {
            var i = e[r];
            i.enumerable = i.enumerable || !1,
            i[n(391)] = !0,
            n(416)in i && (i[n(403)] = !0),
            Object[n(422)](t, i[n(409)], i)
        }
    }
    function O() {
        var t = ["add", "open", "this hasn't been initialised - super() hasn't been called", "setPrototypeOf", "2dtGkEZ", "game", "bind", "Cannot call a class as a function", "Easing", "loop", "isAssetReady", "getPrototypeOf", "48774oNAqLb", "addOnce", "time", "addBackground", "removeAutoDestroyTask", "constructor", "3WbJTjH", "create", "destroy", "height", "Group", "width", "configurable", "playButtonSound", "autoDestroyTask", "onDestroy", "6407205tCvKih", "createView", "onAssetReady", "178407xzmipt", "3773680pnqDPL", "Super expression must either be null or a function", "closeButton", "length", "writable", "3265364yhavwZ", "185yeRuEb", "function", "iterator", "sound", "key", "617068hiIGQJ", "construct", "symbol", "inputEnabled", "background", "createTransition", "value", "options", "16796021VMRFQn", "checkAssetTask", "20IAYzDT", "remove", "defineProperty", "undefined", "__proto__", "events", "overlay", "call", "close", "addCloseButton", "removeAssetTask", "onInputDown", "button_close", "Out", "prototype", "closeLoadingPopup", "sham", "loadingPopup"];
        return (O = function() {
            return t
        }
        )()
    }
    function k(t, e) {
        var n = T;
        return (k = Object.setPrototypeOf ? Object.setPrototypeOf[n(373)]() : function(t, e) {
            return t[n(424)] = e,
            t
        }
        )(t, e)
    }
    function C(t, e) {
        var n = T;
        if (e && ("object" === I(e) || typeof e === n(406)))
            return e;
        if (void 0 !== e)
            throw new TypeError("Derived constructors may only return object or undefined");
        return P(t)
    }
    function P(t) {
        if (void 0 === t)
            throw new ReferenceError(T(369));
        return t
    }
    function T(t, e) {
        var n = O();
        return (T = function(t, e) {
            return n[t -= 354]
        }
        )(t, e)
    }
    function x(t) {
        var e = T;
        return (x = Object[e(370)] ? Object.getPrototypeOf[e(373)]() : function(t) {
            var n = e;
            return t[n(424)] || Object[n(378)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = T, r = t(); ; )
            try {
                if (543614 == -parseInt(n(371)) / 1 * (-parseInt(n(410)) / 2) + -parseInt(n(385)) / 3 * (parseInt(n(404)) / 4) + parseInt(n(405)) / 5 * (-parseInt(n(379)) / 6) + -parseInt(n(395)) / 7 + parseInt(n(399)) / 8 + parseInt(n(398)) / 9 * (-parseInt(n(420)) / 10) + parseInt(n(418)) / 11)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(O);
    const _ = function(t) {
        var e = T;
        !function(t, e) {
            var n = T;
            if (typeof e !== n(406) && null !== e)
                throw new TypeError(n(400));
            t[n(363)] = Object[n(386)](e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(422)](t, n(363), {
                writable: !1
            }),
            e && k(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = T;
            if (typeof Reflect === t(423) || !Reflect[t(411)])
                return !1;
            if (Reflect[t(411)][t(365)])
                return !1;
            if (typeof Proxy === t(406))
                return !0;
            try {
                return Boolean[t(363)].valueOf[t(356)](Reflect[t(411)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = T, n = x(a);
            if (o) {
                var r = x(this)[e(384)];
                t = Reflect[e(411)](n, arguments, r)
            } else
                t = n.apply(this, arguments);
            return C(this, t)
        }
        );
        function c(t, e) {
            var n, r = T;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(T(374))
            }(this, c),
            (n = s[r(356)](this, t))[r(417)] = e,
            n.checkAssetTask = null,
            n.autoDestroyTask = null,
            n.isAssetReady() ? n[r(396)]() : (n.openLoadingPopup(),
            n.checkAssetTask = n[r(372)][r(381)].events[r(376)](150, (function() {
                n[r(377)]() && n.onAssetReady()
            }
            ), P(n)),
            n[r(393)] = n[r(372)].time[r(354)][r(367)](15e3, (function() {
                var t = r;
                n[t(359)](),
                n[t(364)](),
                n.close()
            }
            )),
            n[r(394)][r(380)]((function() {
                var t = r;
                n[t(364)](),
                n[t(359)](),
                n[t(383)]()
            }
            ))),
            n
        }
        return n = c,
        i = T,
        (r = [{
            key: e(397),
            value: function() {
                var t = e;
                this[t(359)](),
                this[t(383)](),
                this.closeLoadingPopup(),
                this[t(396)]()
            }
        }, {
            key: e(359),
            value: function() {
                var t = e;
                this[t(419)] && (this.game[t(381)].events.remove(this.checkAssetTask),
                this[t(419)] = null)
            }
        }, {
            key: e(383),
            value: function() {
                var t = e;
                this.autoDestroyTask && (this[t(372)][t(381)][t(354)][t(421)](this[t(393)]),
                this[t(393)] = null)
            }
        }, {
            key: e(396),
            value: function() {}
        }, {
            key: e(377),
            value: function() {
                return !0
            }
        }, {
            key: e(415),
            value: function() {
                var t = e;
                if (this[t(414)]) {
                    var n = this[t(414)].y;
                    this.background.y = this.background.y - 100,
                    this[t(372)][t(367)].tween(this.background).to({
                        y: n
                    }, 500, Phaser[t(375)].Back[t(362)], !0)
                }
            }
        }, {
            key: e(382),
            value: function(t, n) {
                var r = e;
                this[r(414)] = this[r(386)](0, 0, t, n),
                this[r(414)].x = this[r(372)][r(390)] / 2 - this.background[r(390)] / 2,
                this.background.y = this[r(372)][r(388)] / 2 - this[r(414)][r(388)] / 2
            }
        }, {
            key: "addOverlay",
            value: function(t) {
                var n = e;
                this[n(355)] = this[n(386)](0, 0, CyberGlobalData.overlayTexture),
                this.overlay.alpha = typeof t != n(423) ? t : .5,
                this[n(355)][n(413)] = !0
            }
        }, {
            key: e(358),
            value: function() {
                var t = e
                  , n = this
                  , r = this[t(386)](0, 0, "homeScreen", t(361));
                r.x = this.background.x + this[t(414)].width - r[t(390)] / 2 - 10,
                r.y = this.background.y - 12,
                r[t(413)] = !0,
                r[t(354)][t(360)][t(380)]((function() {
                    var e = t;
                    CyberInstance[e(408)][e(392)](),
                    n.close()
                }
                ), this),
                this[t(401)] = r
            }
        }, {
            key: "openLoadingPopup",
            value: function(t) {
                var n = e;
                this[n(366)] = new g(game,t),
                this[n(366)][n(368)]()
            }
        }, {
            key: e(364),
            value: function() {
                var t = e;
                this[t(366)] && (this[t(366)][t(357)](),
                this[t(366)] = null)
            }
        }, {
            key: "close",
            value: function() {
                this[e(387)](!0)
            }
        }]) && S(n.prototype, r),
        Object[i(422)](n, "prototype", {
            writable: !1
        }),
        c
    }(Phaser[w(389)]);
    function j() {
        var t = ["2317662nJMYhf", "3845824riCRif", "43389390TeVhmX", "86hXEFLc", "5191704PbMcuM", "220zxVCIX", "85182kIVOLN", "10838268TUbSyq", "7Aydssh", "19307lGAWdn", "10JMwhDn"];
        return (j = function() {
            return t
        }
        )()
    }
    function R(t, e) {
        var n = j();
        return (R = function(t, e) {
            return n[t -= 408]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = R, r = t(); ; )
            try {
                if (944953 == -parseInt(n(415)) / 1 * (parseInt(n(409)) / 2) + -parseInt(n(417)) / 3 + -parseInt(n(410)) / 4 + -parseInt(n(411)) / 5 * (-parseInt(n(412)) / 6) + parseInt(n(414)) / 7 * (parseInt(n(418)) / 8) + -parseInt(n(413)) / 9 * (parseInt(n(416)) / 10) + parseInt(n(408)) / 11)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(j);
    var E = Object.freeze({
        GIFT_TIME: 10800,
        MIN_BET: 5e3
    });
    function B(t) {
        var e = F;
        return (B = "function" == typeof Symbol && e(525) == typeof Symbol[e(546)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(541) == typeof Symbol && t[n(512)] === Symbol && t !== Symbol.prototype ? n(525) : typeof t
        }
        )(t)
    }
    function A() {
        var t = ["state", "THONG_BAO", "length", "width", "game", "events", "951648OXEhCh", "onInputDown", "closeButton", "apply", "replace", "setTo", "function", "normal", "configurable", "Derived constructors may only return object or undefined", "createTransition", "iterator", "background", "bold", "5490hBBvsA", "button_close", "buttonText", "ADD_CHIP", "__proto__", "lang", "defineProperty", "addBackground", "bg_popup_medium_484x292", "playButtonSound", "make", "sound", "addButton", "enumerable", "Cannot call a class as a function", "openCreateGamePopup", "addTitle", "center", "sham", "key", "MIN_BET", "bind", "prototype", "setPrototypeOf", "openIAP", "3407232uNGWoK", "shortenLargeNumber", "hideTransition", "showNotEnoughMoneyToPlay", "writable", "call", "198QXAWca", "addContent", "showNotEnoughMoneyToJoin", "log", "NOT_ENOUGH_CHIP_TO_JOIN", "getCurrentState", "miniumMoneyCondition", "onAction", "valueOf", "button_green_197x64", "close", "addChild", "height", "text", "27106RMifKi", "5074076qdJzKa", "constructor", "construct", "49760vwdgUC", "2871195aAWQrw", "inputEnabled", "callback", "addOverlay", "277973dnglVK", "actionId", "middle", "homeScreen", "addOnce", "sprite", "symbol", "getPrototypeOf", "NOT_ENOUGH_CHIP_TO_PLAY", "anchor"];
        return (A = function() {
            return t
        }
        )()
    }
    function D(t, e) {
        for (var n = F, r = 0; r < e[n(531)]; r++) {
            var i = e[r];
            i.enumerable = i[n(562)] || !1,
            i[n(543)] = !0,
            "value"in i && (i[n(578)] = !0),
            Object[n(555)](t, i[n(568)], i)
        }
    }
    function F(t, e) {
        var n = A();
        return (F = function(t, e) {
            return n[t -= 499]
        }
        )(t, e)
    }
    function N(t, e) {
        var n = F;
        return (N = Object[n(572)] ? Object[n(572)][n(570)]() : function(t, e) {
            return t[n(553)] = e,
            t
        }
        )(t, e)
    }
    function L(t, e) {
        var n = F;
        if (e && ("object" === B(e) || typeof e === n(541)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(544));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t)
    }
    function G(t) {
        var e = F;
        return (G = Object[e(572)] ? Object.getPrototypeOf[e(570)]() : function(t) {
            var n = e;
            return t[n(553)] || Object[n(526)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = F, r = t(); ; )
            try {
                if (516838 == -parseInt(n(519)) / 1 + parseInt(n(510)) / 2 * (-parseInt(n(580)) / 3) + -parseInt(n(535)) / 4 + -parseInt(n(515)) / 5 + -parseInt(n(574)) / 6 + -parseInt(n(511)) / 7 + -parseInt(n(514)) / 8 * (-parseInt(n(549)) / 9))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(A);
    const M = function(t) {
        var e = F;
        !function(t, e) {
            var n = F;
            if (typeof e !== n(541) && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t[n(571)] = Object.create(e && e[n(571)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(555)](t, n(571), {
                writable: !1
            }),
            e && N(t, e)
        }(u, t);
        var n, r, i, a, o, s, c = (o = u,
        s = function() {
            var t = F;
            if ("undefined" == typeof Reflect || !Reflect[t(513)])
                return !1;
            if (Reflect.construct[t(567)])
                return !1;
            if (typeof Proxy === t(541))
                return !0;
            try {
                return Boolean[t(571)][t(504)][t(579)](Reflect[t(513)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = F, n = G(o);
            if (s) {
                var r = G(this)[e(512)];
                t = Reflect[e(513)](n, arguments, r)
            } else
                t = n[e(538)](this, arguments);
            return L(this, t)
        }
        );
        function u(t, e) {
            var n, r = F;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(F(563))
            }(this, u),
            (n = c[r(579)](this, t, e))[r(518)](),
            n[r(556)](r(522), r(557)),
            n.addTitle(),
            n[r(581)](e[r(509)]),
            n.addButton(e),
            e.hideCloseButton || n.addCloseButton(),
            !0 !== e[r(576)] && n[r(545)](),
            n
        }
        return n = u,
        r = [{
            key: e(561),
            value: function(t) {
                var n = e
                  , r = this[n(533)][n(559)].sprite(0, 0, n(522), n(505));
                r.x = this[n(547)][n(532)] / 2 - r.width / 2,
                r.y = this[n(547)][n(508)] - r[n(508)] - 30,
                this[n(547)][n(507)](r);
                var i = this[n(533)].add.text(r[n(532)] / 2, r[n(508)] / 2, t[n(551)], {
                    font: APP_FONT,
                    fontSize: 24,
                    fill: "#ffffff",
                    fontWeight: "normal"
                });
                i[n(528)][n(540)](.5),
                r[n(507)](i),
                t[n(520)] && (r.actionId = t[n(520)]),
                r.inputEnabled = !0,
                t[n(517)] && r[n(534)].onInputDown[n(523)](t[n(517)], t.context),
                r[n(534)][n(536)][n(523)](this[n(503)], this)
            }
        }, {
            key: "onAction",
            value: function(t) {
                var n = e;
                CyberInstance[n(560)][n(558)]();
                try {
                    1 === t[n(520)] ? this[n(533)][n(529)][n(501)]()[n(573)]() : 2 === t[n(520)] ? this[n(533)][n(529)][n(501)]()[n(564)]() : 3 === t.actionId && CyberInstance.connector.disconnect()
                } catch (t) {
                    console[n(499)]("Popup.onAction: ", t)
                }
                this[n(506)]()
            }
        }, {
            key: e(581),
            value: function(t) {
                var n = e
                  , r = this.game.add[n(509)](30, 70, t, {
                    font: APP_FONT,
                    fontSize: 24,
                    fill: "#f59eac",
                    fontWeight: n(542),
                    wordWrap: !0,
                    wordWrapWidth: this.background[n(532)] - 60,
                    align: n(566),
                    boundsAlignH: n(566),
                    boundsAlignV: n(521)
                });
                r.setTextBounds(0, 0, this.background[n(532)] - 60, 100),
                this.background[n(507)](r)
            }
        }, {
            key: e(565),
            value: function() {
                var t = e
                  , n = this[t(533)].add.text(this.background[t(532)] / 2, 15, CyberInstance[t(554)][t(530)].toUpperCase(), {
                    font: APP_FONT,
                    fontSize: 30,
                    fill: "#ebdac0",
                    fontWeight: t(548)
                });
                n.anchor.setTo(.5, 0),
                this[t(547)][t(507)](n)
            }
        }, {
            key: "addCloseButton",
            value: function() {
                var t = e
                  , n = this
                  , r = this[t(533)].make[t(524)](0, 0, "homeScreen", t(550));
                r.x = this.background[t(532)] - r.width / 2 - 10,
                r.y = -12,
                r[t(516)] = !0,
                r.events[t(536)][t(523)]((function() {
                    var e = t;
                    CyberInstance.sound[e(558)](),
                    n[e(506)]()
                }
                ), this),
                this[t(537)] = r,
                this[t(547)][t(507)](this[t(537)])
            }
        }],
        i = [{
            key: e(577),
            value: function() {
                var t = e
                  , n = CyberInstance[t(554)][t(527)][t(539)]("%s", h[t(575)](CyberInstance[t(502)] * E[t(569)]));
                new u(game,{
                    actionId: 1,
                    text: n,
                    buttonText: CyberInstance[t(554)].ADD_CHIP
                })
            }
        }, {
            key: e(582),
            value: function(t) {
                var n = e
                  , r = CyberInstance.lang[n(500)][n(539)]("%s", h[n(575)](CyberInstance[n(502)] * t));
                new u(game,{
                    actionId: 1,
                    text: r,
                    buttonText: CyberInstance[n(554)][n(552)]
                })
            }
        }],
        a = F,
        r && D(n.prototype, r),
        i && D(n, i),
        Object[a(555)](n, a(571), {
            writable: !1
        }),
        u
    }(_);
    function W(t, e) {
        var n = z();
        return (W = function(t, e) {
            return n[t -= 120]
        }
        )(t, e)
    }
    function z() {
        var t = ["open", "1491287TmTBol", "20bnrDPt", "close", "enumerable", "_instance", "getInt", "send", "gift.code", "ExtensionRequest", "state", "instance", "removeDOMElement", "body", "initialize", "Mã code không hợp lệ", "6450770mdTxSu", "2004660yNtywo", "msg", "focus", "Cannot call a class as a function", "codeButton", "getCurrentState", "codeInput", "CLOSE", "getElementById", "468QsHGzu", "SFSEvent", "params", "IP của bạn đã sử dụng mã code trước đó", "NHAP", "closeOverlay", "68176PrhdYX", "onExtensionResponse", "2986446YUHRKY", "code", "value", "120808BTUPBv", "configurable", "inited", "EXTENSION_RESPONSE", "errorCode", "sfs", "SFSObject", "toUpperCase", "key", "writable", "lang", "addEventListener", "80097ckirqc", "prototype", "defineProperty", "onclick", "4lsgyDV", "length", "playButtonSound"];
        return (z = function() {
            return t
        }
        )()
    }
    function U(t, e) {
        for (var n = W, r = 0; r < e[n(156)]; r++) {
            var i = e[r];
            i[n(162)] = i.enumerable || !1,
            i[n(140)] = !0,
            "value"in i && (i[n(148)] = !0),
            Object[n(153)](t, i[n(147)], i)
        }
    }
    !function(t, e) {
        for (var n = W, r = t(); ; )
            try {
                if (267194 == parseInt(n(155)) / 1 * (parseInt(n(139)) / 2) + -parseInt(n(151)) / 3 * (-parseInt(n(160)) / 4) + parseInt(n(175)) / 5 + -parseInt(n(136)) / 6 + -parseInt(n(159)) / 7 + parseInt(n(134)) / 8 * (-parseInt(n(128)) / 9) + parseInt(n(174)) / 10)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(z);
    var V = function() {
        var t, e, n, r, i = W;
        function a() {
            var t = W;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(W(122))
            }
            )(this, a),
            this[t(141)] = !1
        }
        return t = a,
        e = [{
            key: i(172),
            value: function(t) {
                var e = i;
                !this[e(141)] && (this[e(141)] = !0,
                this[e(144)] = t,
                this[e(144)][e(150)](SFS2X[e(129)][e(142)], this[e(135)], this))
            }
        }, {
            key: i(135),
            value: function(t) {
                var e = i;
                if (t.cmd == e(166)) {
                    var n = t[e(130)].containsKey(e(120)) ? t[e(130)].getUtfString(e(120)) : null;
                    if (null == n && t[e(130)].containsKey("errorCode")) {
                        var r = t[e(130)][e(164)](e(143));
                        1 == r ? n = "Chúng tôi tạm khóa tính năng nạp Code tài khoản của bạn vì nạp sai quá 5 lần liên tiếp. Tính năng này sẽ được mở lại vào ngày mai." : 2 == r ? n = e(173) : 5 == r ? n = "Mã code đã hết hiệu lực vì vượt quá số lượt sử dụng" : 6 == r ? n = "Mã code đã quá hạn sử dụng hoặc chưa được kích hoạt" : 7 == r ? n = "Tài khoản này đã sử dụng mã code trước đó" : 8 == r && (n = e(131))
                    }
                    n && new M(game,{
                        text: n,
                        buttonText: CyberInstance.lang.CLOSE,
                        hideCloseButton: !0
                    })
                }
            }
        }, {
            key: i(158),
            value: function() {
                var t = i;
                if (this.inited) {
                    game[t(168)][t(124)]().addOverlay(this.close, this);
                    var e = h.createDOMText(t(125), "Enter Code", 12);
                    document[t(171)].appendChild(e);
                    var n = h.createDOMButton(t(123), CyberInstance[t(149)][t(132)][t(146)]());
                    n[t(154)] = function() {
                        var e = t;
                        CyberInstance.sound[e(157)](),
                        a[e(169)].send()
                    }
                    ,
                    document.body.appendChild(n),
                    document[t(127)](t(125))[t(121)]()
                }
            }
        }, {
            key: i(165),
            value: function() {
                var t = i
                  , e = document[t(127)](t(125))[t(138)];
                if (e && e[t(156)] > 0) {
                    if (e[t(156)] < 8)
                        return this[t(161)](),
                        void new M(game,{
                            text: "Mã code không hợp lệ",
                            buttonText: CyberInstance.lang[t(126)],
                            hideCloseButton: !0
                        });
                    var n = new (SFS2X[t(145)]);
                    n.putUtfString(t(137), e),
                    this[t(144)][t(165)](new (SFS2X[t(167)])(t(166),n))
                }
                this.close()
            }
        }, {
            key: "close",
            value: function() {
                var t = i;
                h[t(170)](t(125)),
                h.removeDOMElement(t(123)),
                game[t(168)][t(124)]()[t(133)]()
            }
        }],
        n = [{
            key: i(169),
            get: function() {
                var t = i;
                return a[t(163)] || (a[t(163)] = new a),
                a[t(163)]
            }
        }],
        r = W,
        e && U(t[r(152)], e),
        n && U(t, n),
        Object[r(153)](t, "prototype", {
            writable: !1
        }),
        a
    }()
      , H = X;
    function X(t, e) {
        var n = Y();
        return (X = function(t, e) {
            return n[t -= 409]
        }
        )(t, e)
    }
    function Y() {
        var t = ["15802992QcPEpR", "avatar29", "avatar0", "Noel", "avatar10", "1705539wOZfCy", "Mặc định", "Naga", "Hambuger", "4743656BKBMeX", "21894DZTTMz", "avatar30", "198575YoMlMj", "10aVHZpH", "AVATAR", "Flower", "24154MEPPga", "avatar28", "avatar9", "847RggClO", "avatar11", "9OTQSSh", "9965drqwKp", "129JtYhGD", "928XIVUmW"];
        return (Y = function() {
            return t
        }
        )()
    }
    !function(t, e) {
        for (var n = X, r = t(); ; )
            try {
                if (382891 == parseInt(n(412)) / 1 + -parseInt(n(416)) / 2 * (-parseInt(n(423)) / 3) + -parseInt(n(424)) / 4 * (parseInt(n(422)) / 5) + -parseInt(n(410)) / 6 * (parseInt(n(419)) / 7) + parseInt(n(409)) / 8 * (-parseInt(n(421)) / 9) + parseInt(n(413)) / 10 * (-parseInt(n(430)) / 11) + parseInt(n(425)) / 12)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Y);
    var q = {
        0: {
            icon: H(427),
            id: 0,
            type: H(414),
            name: H(431),
            ads: 2,
            quantity: 1,
            vip: !0
        },
        9: {
            icon: H(418),
            id: 9,
            type: H(414),
            name: "Flower",
            ads: 2,
            quantity: 1,
            vip: !1
        },
        10: {
            icon: H(429),
            id: 10,
            type: H(414),
            name: H(433),
            ads: 2,
            quantity: 1,
            vip: !1
        },
        11: {
            icon: H(420),
            id: 11,
            type: H(414),
            name: "Thần Tài",
            ads: 2,
            quantity: 1,
            vip: !1
        },
        28: {
            icon: H(417),
            id: 28,
            type: "AVATAR",
            name: H(428),
            ads: 2,
            quantity: 1,
            vip: !0
        },
        29: {
            icon: H(426),
            id: 29,
            type: H(414),
            name: H(415),
            ads: 2,
            quantity: 1,
            vip: !0
        },
        30: {
            icon: H(411),
            id: 30,
            type: H(414),
            name: H(432),
            ads: 2,
            quantity: 1,
            vip: !0
        }
    }
      , K = {}
      , J = Z;
    !function(t, e) {
        for (var n = Z, r = t(); ; )
            try {
                if (162839 == parseInt(n(494)) / 1 + parseInt(n(497)) / 2 + -parseInt(n(496)) / 3 * (parseInt(n(487)) / 4) + -parseInt(n(485)) / 5 + -parseInt(n(484)) / 6 + -parseInt(n(486)) / 7 * (-parseInt(n(498)) / 8) + -parseInt(n(491)) / 9)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }($);
    var Q = {
        12: {
            icon: J(488),
            id: 12,
            type: "GIFT",
            name: J(500),
            ads: 10,
            quantity: 1
        },
        13: {
            icon: J(499),
            id: 13,
            type: J(502),
            name: J(495),
            ads: 10,
            quantity: 1
        },
        14: {
            chip: 1e4,
            icon: J(503),
            id: 14,
            type: J(502),
            name: "Chó Cắn"
        },
        15: {
            chip: 5e3,
            icon: J(492),
            id: 15,
            type: J(502),
            name: J(493)
        },
        16: {
            chip: 1e4,
            icon: J(501),
            id: 16,
            type: J(502),
            name: "Ném Chuối"
        },
        17: {
            chip: 5e3,
            icon: "dorac",
            id: 17,
            type: "GIFT",
            name: "Đổ Rác"
        },
        18: {
            chip: 5e3,
            icon: "damboc",
            id: 18,
            type: J(502),
            name: "Đấm Bốc"
        },
        19: {
            chip: 1e4,
            icon: J(490),
            id: 19,
            type: J(502),
            name: J(489)
        }
    };
    function Z(t, e) {
        var n = $();
        return (Z = function(t, e) {
            return n[t -= 484]
        }
        )(t, e)
    }
    function $() {
        var t = ["Sầu Riêng", "saurieng", "242496PvXwgm", "chao", "Chảo", "264346oqDWZX", "Like", "3kGpiEg", "438052FYOtXU", "72qIzzul", "emolike", "Bắn Súng", "nemchuoi", "GIFT", "chocan", "1547910LWTLlq", "13800cyufqW", "180943VMtaSj", "1061940Spieww", "bansung"];
        return ($ = function() {
            return t
        }
        )()
    }
    var tt = nt;
    !function(t, e) {
        for (var n = nt, r = t(); ; )
            try {
                if (807539 == parseInt(n(467)) / 1 + parseInt(n(471)) / 2 * (parseInt(n(469)) / 3) + parseInt(n(468)) / 4 + parseInt(n(472)) / 5 + -parseInt(n(475)) / 6 * (parseInt(n(473)) / 7) + parseInt(n(464)) / 8 * (parseInt(n(466)) / 9) + -parseInt(n(474)) / 10)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(rt);
    var et = {
        0: {
            icon: tt(470),
            id: 0,
            type: tt(463),
            name: "",
            vip: !1
        },
        60: {
            icon: tt(465),
            id: 60,
            type: tt(463),
            name: "",
            vip: !0
        }
    };
    function nt(t, e) {
        var n = rt();
        return (nt = function(t, e) {
            return n[t -= 463]
        }
        )(t, e)
    }
    function rt() {
        var t = ["6CySDza", "4702315vysaDe", "378WYTHoe", "49694770IRygBJ", "25350iQQsEL", "TIMER", "1192wWdJpr", "timer60", "56421uKuLhX", "1250169nqoyDE", "5766528RVstHo", "1438821OKzLuC", "timer0"];
        return (rt = function() {
            return t
        }
        )()
    }
    function it(t, e) {
        for (var n = at, r = 0; r < e[n(274)]; r++) {
            var i = e[r];
            i[n(242)] = i[n(242)] || !1,
            i.configurable = !0,
            n(249)in i && (i[n(255)] = !0),
            Object[n(261)](t, i[n(240)], i)
        }
    }
    function at(t, e) {
        var n = st();
        return (at = function(t, e) {
            return n[t -= 228]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = at, r = t(); ; )
            try {
                if (858506 == parseInt(n(236)) / 1 + -parseInt(n(247)) / 2 + -parseInt(n(230)) / 3 * (-parseInt(n(254)) / 4) + -parseInt(n(234)) / 5 + -parseInt(n(277)) / 6 + parseInt(n(232)) / 7 * (parseInt(n(246)) / 8) + parseInt(n(237)) / 9 * (parseInt(n(228)) / 10))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(st);
    var ot = function() {
        var t, e, n, r, i = at;
        function a() {
            var t = at;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            )(this, a),
            this[t(252)] = !1,
            this[t(260)] = new Map,
            this.avatars = new Map,
            this.watchItems = new Map
        }
        return t = a,
        e = [{
            key: "initialize",
            value: function(t) {
                var e = at;
                this[e(245)] = t,
                this.sfs[e(275)](SFS2X[e(281)][e(282)], this[e(229)], this)
            }
        }, {
            key: i(262),
            value: function() {
                var t = i;
                this.inited || this[t(245)][t(235)](new (SFS2X[t(253)])(t(270)))
            }
        }, {
            key: i(229),
            value: function(t) {
                var e = i
                  , n = this;
                if (t[e(264)] == e(270)) {
                    if (t[e(266)][e(231)]("error"))
                        return void setTimeout((function() {
                            n.getOrders()
                        }
                        ), 3e3);
                    this[e(260)].clear(),
                    this[e(239)].clear(),
                    this[e(279)].clear(),
                    this[e(252)] = !0;
                    var r = t.params.getSFSArray("avatars")
                      , a = t[e(266)].getSFSArray(e(260))
                      , o = t[e(266)][e(238)](e(279));
                    if (a.size() > 0)
                        for (var s = 0; s < a[e(263)](); s++) {
                            var c = a[e(267)](s);
                            this[e(260)][e(273)](c.getInt("id"), c[e(271)](e(251)))
                        }
                    if (o[e(263)]() > 0)
                        for (var u = 0; u < o[e(263)](); u++) {
                            var h = o.getSFSObject(u);
                            this.watchItems[e(273)](h[e(271)]("id"), h.getInt("times"))
                        }
                    if (r[e(263)]() > 0) {
                        for (var l = !1, f = !1, p = 0; p < r[e(263)](); p++) {
                            var y = r[e(267)](p)
                              , d = y.getInt("id");
                            this[e(239)][e(272)](d) ? this[e(239)][e(273)](d, this.avatars.get(d) + y[e(283)](e(250))) : this.avatars[e(273)](d, y.getLong(e(250))),
                            d === CyberGlobalData.defaultAvatarId && (l = !0),
                            d === CyberGlobalData[e(276)] && (f = !0)
                        }
                        if (l) {
                            var v = new (SFS2X[e(269)]);
                            v.putInt("id", CyberGlobalData[e(233)]),
                            this[e(245)][e(235)](new (SFS2X[e(253)])("shop.setDefaultAvatar",v))
                        } else
                            CyberGlobalData[e(233)] = 0,
                            FBInstant[e(280)][e(244)]({
                                avatar: CyberGlobalData[e(233)]
                            });
                        f || (CyberGlobalData[e(276)] = 0,
                        FBInstant.player.setDataAsync({
                            clock: CyberGlobalData[e(276)]
                        }))
                    } else
                        CyberGlobalData.defaultClockId = 0,
                        CyberGlobalData[e(233)] = 0,
                        FBInstant[e(280)].setDataAsync({
                            avatar: CyberGlobalData[e(233)],
                            clock: CyberGlobalData.defaultClockId
                        })
                }
            }
        }, {
            key: i(259),
            value: function(t) {
                var e = i;
                return this[e(239)][e(257)](t)
            }
        }, {
            key: i(268),
            value: function(t, e) {
                var n = i;
                this[n(239)].has(t) ? this[n(239)][n(273)](t, this[n(239)][n(257)](t) + e) : this[n(239)][n(273)](t, e)
            }
        }, {
            key: i(248),
            value: function(t) {
                return this[i(260)].get(t)
            }
        }, {
            key: i(258),
            value: function(t, e) {
                var n = i;
                if (this.items[n(272)](t)) {
                    var r = this[n(260)][n(257)](t) + e;
                    r >= 0 && this[n(260)][n(273)](t, r)
                } else
                    this.items[n(273)](t, e)
            }
        }, {
            key: "getWatchCount",
            value: function(t) {
                var e = i
                  , n = this.watchItems[e(257)](t);
                return n || (n = 0),
                n
            }
        }, {
            key: "updateWatchCount",
            value: function(t, e) {
                var n = i;
                this[n(279)][n(273)](t, e)
            }
        }, {
            key: "getItems",
            value: function() {
                return this.items
            }
        }],
        n = [{
            key: i(278),
            get: function() {
                return a[i(243)] || (a._instance = new a),
                a._instance
            }
        }, {
            key: i(241),
            value: function() {
                return Q
            }
        }, {
            key: "getAvatarItems",
            value: function() {
                return q
            }
        }, {
            key: i(256),
            value: function() {
                return K
            }
        }, {
            key: i(265),
            value: function() {
                return et
            }
        }],
        r = at,
        e && it(t[r(284)], e),
        n && it(t, n),
        Object.defineProperty(t, r(284), {
            writable: !1
        }),
        a
    }();
    function st() {
        var t = ["key", "getGiftItems", "enumerable", "_instance", "setDataAsync", "sfs", "7288TzGrcL", "3344378rJCJyM", "getItem", "value", "duration", "quantity", "inited", "ExtensionRequest", "748316AEQVZP", "writable", "getEmoItems", "get", "updateGift", "getAvatar", "items", "defineProperty", "getOrders", "size", "cmd", "getClockItems", "params", "getSFSObject", "updateAvatar", "SFSObject", "shop.getOrders", "getInt", "has", "set", "length", "addEventListener", "defaultClockId", "856308YUVDfS", "instance", "watchItems", "player", "SFSEvent", "EXTENSION_RESPONSE", "getLong", "prototype", "359230bBvqwX", "onExtensionResponse", "27QjVOze", "containsKey", "5726MeiDkv", "defaultAvatarId", "5309680vfuorY", "send", "1198671xVJbgI", "27PECxLT", "getSFSArray", "avatars"];
        return (st = function() {
            return t
        }
        )()
    }
    function ct(t, e) {
        var n = lt();
        return (ct = function(t, e) {
            return n[t -= 219]
        }
        )(t, e)
    }
    function ut(t, e) {
        for (var n = ct, r = 0; r < e[n(252)]; r++) {
            var i = e[r];
            i.enumerable = i[n(250)] || !1,
            i.configurable = !0,
            "value"in i && (i[n(229)] = !0),
            Object[n(236)](t, i[n(254)], i)
        }
    }
    !function(t, e) {
        for (var n = ct, r = t(); ; )
            try {
                if (853184 == -parseInt(n(257)) / 1 * (-parseInt(n(232)) / 2) + parseInt(n(237)) / 3 * (parseInt(n(224)) / 4) + -parseInt(n(221)) / 5 + -parseInt(n(242)) / 6 + -parseInt(n(253)) / 7 + parseInt(n(234)) / 8 + parseInt(n(228)) / 9)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(lt);
    var ht = function() {
        var t, e, n, r = ct;
        function i(t) {
            var e = ct
              , n = this;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(ct(235))
            }
            )(this, i),
            this[e(241)] = Date[e(227)](),
            this.duration = t[e(243)]("duration"),
            this[e(219)] = new Map;
            var r = new Map
              , a = [e(249), e(240), e(233), e(258), e(223)];
            a.forEach((function(i) {
                var a = e;
                if (t[a(226)](i) && i) {
                    var o = t[a(245)](i);
                    n[a(219)].set(i, o),
                    r[a(251)](o) ? r.set(o, r[a(225)](o) + 1) : r[a(220)](o, 1)
                }
            }
            )),
            r[e(251)](100) && r[e(225)](100) == a[e(252)] && (this._isP100 = !0),
            r.has(80) && r.get(80) == a[e(252)] && (this._isP80 = !0),
            r[e(251)](50) && r[e(225)](50) == a.length && (this._isP50 = !0)
        }
        return t = i,
        n = ct,
        (e = [{
            key: r(256),
            value: function() {
                return !!this[r(248)]
            }
        }, {
            key: r(255),
            value: function() {
                return !!this[r(231)]
            }
        }, {
            key: r(247),
            value: function() {
                return !!this[r(222)]
            }
        }, {
            key: r(246),
            value: function() {
                var t = r
                  , e = Date.now() - this[t(241)];
                return this.duration - e
            }
        }, {
            key: "getPromoMap",
            value: function() {
                return this.promoMap
            }
        }, {
            key: r(239),
            value: function(t) {
                var e = r;
                return this[e(219)].has(t) ? this[e(219)][e(225)](t) : 0
            }
        }, {
            key: r(230),
            value: function() {
                var t = r
                  , e = new Date
                  , n = e[t(238)]();
                return 11 == e.getMonth() && n >= 23 && n <= 26
            }
        }]) && ut(t[n(244)], e),
        Object[n(236)](t, "prototype", {
            writable: !1
        }),
        i
    }();
    function lt() {
        var t = ["3559716TGfLij", "getLong", "prototype", "getInt", "getDuration", "isP50", "_isP100", "0_99", "enumerable", "has", "length", "10735445cChBeE", "key", "isP80", "isP100", "374jLIlgr", "4_99", "promoMap", "set", "4460395wiOQxN", "_isP50", "9_99", "4twtmVD", "get", "containsKey", "now", "7122060qeYmtV", "writable", "isNoel", "_isP80", "5294KOVxeu", "2_99", "6058392xLEKwF", "Cannot call a class as a function", "defineProperty", "4000701tEEctX", "getDate", "getPromoValue", "1_99", "createdDate"];
        return (lt = function() {
            return t
        }
        )()
    }
    var ft = pt;
    function pt(t, e) {
        var n = yt();
        return (pt = function(t, e) {
            return n[t -= 144]
        }
        )(t, e)
    }
    function yt() {
        var t = ["getUtfString", "getLong", "getCatalogAsync", "Signal", "clear", "1_99", "dailyPackInited", "8225dlrYWt", "send", "xm199", "Cyber", "verifyPayment", "inited", "errorCode", "0_99", "sfs", "icon_chip4", "containsKey", "84DvhMtB", "9_99", "purchaseToken", "addProducts", "dailyPack", "_products", "getInt", "877168wxPAYJ", "size", "message", "icon_chip5", "chip", "EXTENSION_RESPONSE", "cmd", "keys", "prototype", "addEventListener", "$ 4.99", "NewYearPack", "$ 9.99", "payments", "560702pVDmHP", "SFSEvent", "dispatch", "writable", "_view", "coin", "_instance", "productID", "xm599", "Tính năng này không hỗ trợ trên thiết bị của bạn!", "getBool", "Cannot call a class as a function", "errorMsg", "developerPayload", "then", "xmas_1_99", "isConsumed", "payment.getDailyPack", "getSFSArray", "getPurchasesAsync", "onDailyPackUpdate", "success", "consumePurchaseAsync", "3472899ydxvSL", "enumerable", "$ 2.99", "set", "icon_chip2", "1969156MABEAg", "signedRequest", "getFullYear", "restore", "4_99", "defineProperty", "1270978FrZLSp", "view", "payment.verify", "_inited", "onExtensionResponse", "price", "params", "$ 1.99", "putUtfString", "xmas_5_99", "onPurchaseProduct", "player", "products", "handlePromotion", "catch", "ExtensionRequest", "instance", "purchase", "purchases", "promotionEntry", "2848136cJrOFK", "icon_chip3", "error", "hasOwnProperty", "length", "setDataAsync"];
        return (yt = function() {
            return t
        }
        )()
    }
    function dt(t, e) {
        for (var n = pt, r = 0; r < e[n(191)]; r++) {
            var i = e[r];
            i.enumerable = i[n(157)] || !1,
            i.configurable = !0,
            "value"in i && (i[n(235)] = !0),
            Object[n(166)](t, i.key, i)
        }
    }
    !function(t, e) {
        for (var n = pt, r = t(); ; )
            try {
                if (641783 == parseInt(n(232)) / 1 + -parseInt(n(167)) / 2 + parseInt(n(156)) / 3 + parseInt(n(218)) / 4 + -parseInt(n(200)) / 5 * (parseInt(n(211)) / 6) + -parseInt(n(161)) / 7 + -parseInt(n(187)) / 8)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(yt);
    var vt = {
        "0_99": {
            chip: 15e5,
            price: "$ 0.99",
            icon: "icon_chip1",
            productID: ft(207)
        },
        "1_99": {
            chip: 45e5,
            price: ft(174),
            icon: ft(160),
            productID: ft(198)
        },
        "2_99": {
            chip: 69e5,
            price: ft(158),
            icon: ft(188),
            productID: "2_99"
        },
        "4_99": {
            chip: 12e6,
            price: ft(228),
            icon: ft(209),
            productID: ft(165)
        },
        "9_99": {
            chip: 25e6,
            price: ft(230),
            icon: ft(221),
            productID: ft(212)
        }
    }
      , bt = function() {
        var t, e, n, r, i = ft;
        function a() {
            var t = pt;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(pt(144))
            }
            )(this, a),
            this[t(205)] = !1,
            this[t(179)] = null,
            this.promotionEntry = null,
            this[t(177)] = new (Phaser[t(196)]),
            this.onDailyPackUpdate = new (Phaser[t(196)]),
            this[t(185)] = new Map,
            this[t(199)] = !1,
            this.dailyPack = new Map,
            this.xm199 = null,
            this[t(240)] = null
        }
        return t = a,
        e = [{
            key: "initialize",
            value: function(t) {
                var e = pt
                  , n = this;
                !this.inited && (this[e(205)] = !0,
                this[e(208)] = t,
                this.sfs[e(227)](SFS2X[e(233)][e(223)], this[e(171)], this),
                FBInstant[e(231)][e(195)]()[e(147)]((function(t) {
                    var r = e;
                    if (t[r(191)] > 0)
                        for (var i = 0; i < t[r(191)]; i++) {
                            var a = t[i].productID;
                            n[r(179)][r(190)](a) && (n[r(179)][a][r(172)] = t[i][r(172)]),
                            a == r(148) && (n[r(202)] = t[i][r(172)]),
                            a == r(176) && (n[r(240)] = t[i].price)
                        }
                }
                )),
                FBInstant[e(231)][e(152)]()[e(147)]((function(t) {
                    var r = e;
                    if (n[r(185)][r(197)](),
                    t && t[r(191)] > 0)
                        for (var i = 0; i < t.length; i++) {
                            var a = t[i];
                            n[r(185)].set(a[r(239)], a)
                        }
                }
                )))
            }
        }, {
            key: i(180),
            value: function(t) {
                this.promotionEntry = new ht(t)
            }
        }, {
            key: "getPromotion",
            value: function() {
                return this[i(186)]
            }
        }, {
            key: i(171),
            value: function(t) {
                var e = i;
                if ("payment.verify" == t.cmd) {
                    var n = t[e(173)].containsKey("productID") ? t[e(173)][e(193)](e(239)) : ""
                      , r = t.params.containsKey(e(146)) ? t[e(173)][e(193)]("developerPayload") : ""
                      , a = t[e(173)][e(242)](e(154));
                    a ? (r == e(229) && this[e(215)][e(159)](n, !0),
                    this[e(177)][e(234)]({
                        coin: t[e(173)][e(194)](e(237)),
                        productID: n
                    })) : this[e(177)][e(234)]({
                        error: !0,
                        errorMsg: t.params[e(193)](e(145))
                    }),
                    (a || t[e(173)][e(210)](e(206)) && 6 == t[e(173)][e(217)]("errorCode")) && FBInstant[e(231)][e(155)](t.params[e(193)](e(213)))[e(147)]((function() {
                        var t = e;
                        n == t(148) && (noel_1_99 = (new Date)[t(163)](),
                        FBInstant.player[t(192)]({
                            noel_1_99
                        })),
                        n == t(176) && (noel_5_99 = (new Date)[t(163)](),
                        FBInstant[t(178)][t(192)]({
                            noel_5_99
                        }))
                    }
                    ))
                } else if (t[e(224)] == e(150) && !t[e(173)][e(210)](e(189))) {
                    this.dailyPack[e(197)]();
                    var o = t[e(173)][e(151)]("purchases");
                    if (o[e(219)]() > 0)
                        for (var s = 0; s < o[e(219)](); s++) {
                            var c = o.getSFSObject(s);
                            this[e(215)].set(c.getUtfString("product_id"), c)
                        }
                    this[e(153)][e(234)](this[e(215)]),
                    this[e(199)] = !0
                }
            }
        }, {
            key: i(184),
            value: function(t, e) {
                var n = i;
                this[n(205)] ? FBInstant[n(231)].purchaseAsync({
                    productID: t,
                    developerPayload: e || n(203)
                })[n(147)]((function(t) {
                    var e = n;
                    a[e(183)][e(204)](t)
                }
                ))[n(181)]((function(t) {
                    var e = n;
                    a[e(183)].onPurchaseProduct[e(234)]({
                        error: !0,
                        errorMsg: t[e(220)]
                    })
                }
                )) : this[n(177)][n(234)]({
                    error: !0,
                    errorMsg: n(241)
                })
            }
        }, {
            key: i(164),
            value: function(t) {
                var e = i;
                FBInstant[e(231)][e(152)]()[e(147)]((function(n) {
                    var r = e;
                    if (n && n[r(191)])
                        for (var i in n) {
                            var o = n[i];
                            if (o[r(239)] == t && 0 == o[r(149)]) {
                                a[r(183)][r(204)](o);
                                break
                            }
                        }
                }
                ))[e(181)]((function(t) {
                    var n = e;
                    a[n(183)][n(177)][n(234)]({
                        error: !0,
                        errorMsg: t.message + " " + t.code
                    })
                }
                ))
            }
        }, {
            key: i(204),
            value: function(t) {
                var e = i;
                if (this[e(208)].isConnected) {
                    var n = new SFS2X.SFSObject;
                    n[e(175)](e(162), t[e(162)]),
                    this.sfs[e(201)](new (SFS2X[e(182)])(e(169),n))
                }
            }
        }, {
            key: "sendGetDailyPackInfoRequest",
            value: function() {
                var t = i;
                this[t(199)] || this[t(208)][t(201)](new (SFS2X[t(182)])("payment.getDailyPack"))
            }
        }, {
            key: i(214),
            value: function(t) {
                var e = i;
                if (null == this.products)
                    if (this[e(179)] = {},
                    t)
                        for (var n = Object[e(225)](t), r = 0; r < n[e(191)]; r++) {
                            var a = n[r];
                            this[e(179)][a] = vt[a],
                            this[e(179)][a][e(222)] = t[a]
                        }
                    else
                        this[e(179)] = vt
            }
        }, {
            key: i(179),
            get: function() {
                return this[i(216)]
            },
            set: function(t) {
                this[i(216)] = t
            }
        }, {
            key: "inited",
            get: function() {
                return this[i(170)]
            },
            set: function(t) {
                this[i(170)] = t
            }
        }, {
            key: i(168),
            get: function() {
                return this[i(236)]
            },
            set: function(t) {
                this[i(236)] = t
            }
        }],
        n = [{
            key: i(183),
            get: function() {
                var t = i;
                return a[t(238)] || (a[t(238)] = new a),
                a[t(238)]
            }
        }],
        r = pt,
        e && dt(t[r(226)], e),
        n && dt(t, n),
        Object[r(166)](t, "prototype", {
            writable: !1
        }),
        a
    }();
    function mt(t, e) {
        for (var n = gt, r = 0; r < e[n(170)]; r++) {
            var i = e[r];
            i[n(279)] = i.enumerable || !1,
            i[n(271)] = !0,
            n(225)in i && (i.writable = !0),
            Object[n(221)](t, i[n(247)], i)
        }
    }
    function gt(t, e) {
        var n = wt();
        return (gt = function(t, e) {
            return n[t -= 150]
        }
        )(t, e)
    }
    function wt() {
        var t = ["logged", "getName", "getLong", "10838856yBiLjB", "instance", "enumerable", "isHomeScreenStarted", "startTime", "LOGIN_ERROR", "getUtfString", "profile.updateAsid", "onConnectionLost", "indexOf", "log", "getASIDAsync", "errorCode", "lastJoinedRoomId", "addEventListener", "removeHearBeat", "loggedTime", "CONNECTION_LOST", "sendLoginRequest", "enableLagMonitor", "Cannot call a class as a function", "updateProfileInTheFirstLogin", "405308PhdsSI", "containsKey", "354780MyqknZ", "onUserVariablesUpdate", "length", "6NHkojo", "connect", "logConnectTime", "collectTime", "username", "BẢO TRÌ MÁY CHỦ!", "mySelf", "UNDEF", "sfs", "guserid", "onConnectionSuccess_9_10", "name", "setDataAsync", "USER_VARIABLES_UPDATE", "promotion", "connected", "updateServerTime", "getPlatform", "\nFB Player ID: ", "45hleyoB", "heartBeat", "playerId", "handlePromotion", "port", "194447hSwCVm", "GIFT_TIME", "msg", "entryPointDataHandled", "1077486NPPlmA", "\nGame ID: ", "serverTime", "onConnectionSuccess_4_5", "putLong", "params", "maintenanceMsg", "onConnectionSuccess_2_3", "call", "player", "user", "ExtensionRequest", "data", "DisconnectScreen", "SFSObject", "initHeartBeat", "11hYXvWC", "connectionErrorCount", "getInt", "loginErrorCount", "zone", "onLogin", "defineProperty", "handleEntryPointData", "profile.update", "profile.updateAvatar", "value", "roomId", "prototype", "isNewUser", "close", "SFSEvent", "LOGIN", "avatar", "onExtensionResponse", "fbinstant.invite", "signature", "errorMessage", "282032hUbznL", "onConnection", "appId", "maintenance", "14VoNQdM", "onLoginError", "getID", "1630890EfWKRH", "canShowFlashSale", "onConnectionSuccess_5_6", "key", "EXTENSION_RESPONSE", "onConnectionSuccess", "getTimezoneOffset", "platform", "dailyPackInited", "2TKPzCE", "CONNECTION", "handleEntryPointData error", "onExtensionResponse exception: ", "send", "undefined", "variableUpdated", "putUtfString", "onConnectionSuccess_6_7", "spinWatched", "asid", "assets/images/no_avatar.png", "getVariable", "refreshSpinTime", "token", "host", "getTime", "onConnectionSuccess_10plus", "configurable", "multiGroupDisabled", "disconnect"];
        return (wt = function() {
            return t
        }
        )()
    }
    !function(t, e) {
        for (var n = gt, r = t(); ; )
            try {
                if (204750 == parseInt(n(195)) / 1 * (-parseInt(n(253)) / 2) + -parseInt(n(171)) / 3 * (parseInt(n(166)) / 4) + parseInt(n(168)) / 5 + parseInt(n(199)) / 6 * (-parseInt(n(241)) / 7) + parseInt(n(237)) / 8 * (-parseInt(n(190)) / 9) + -parseInt(n(244)) / 10 * (-parseInt(n(215)) / 11) + parseInt(n(277)) / 12)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(wt);
    const It = function() {
        var t, e, n, r = gt;
        function i(t) {
            var e = gt;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(gt(164))
            }
            )(this, i),
            this[e(179)] = t,
            this[e(179)][e(158)](SFS2X[e(230)][e(254)], this[e(238)], this),
            this[e(179)][e(158)](SFS2X[e(230)][e(161)], this[e(152)], this),
            this[e(179)].addEventListener(SFS2X[e(230)][e(231)], this[e(220)], this),
            this[e(179)][e(158)](SFS2X[e(230)][e(282)], this.onLoginError, this),
            this[e(179)][e(158)](SFS2X.SFSEvent[e(184)], this[e(169)], this),
            this.sfs[e(158)](SFS2X[e(230)][e(248)], this[e(233)], this),
            this[e(274)] = !1,
            this[e(259)] = !1,
            this[e(198)] = !1,
            this.connectionErrorCount = 0,
            this[e(218)] = 0,
            this[e(201)] = 0,
            this[e(160)] = 0
        }
        return t = i,
        n = gt,
        (e = [{
            key: r(172),
            value: function() {
                var t = r;
                this[t(281)] = (new Date)[t(269)](),
                this.connected = void 0,
                this[t(179)].connect(CyberInstance[t(268)], CyberInstance[t(194)])
            }
        }, {
            key: r(238),
            value: function(t) {
                var e = r
                  , n = this;
                if (this[e(186)] = t.success,
                this.connected)
                    this[e(218)] = 0,
                    this.sendLoginRequest();
                else {
                    var i = 0 == this[e(216)] ? 100 : 1e3;
                    setTimeout((function() {
                        n[e(172)]()
                    }
                    ), i),
                    this[e(216)]++
                }
            }
        }, {
            key: "sendLoginRequest",
            value: function() {
                var t = r
                  , e = new SFS2X.SFSObject;
                e[t(203)](t(180), parseInt(CyberInstance.guserid)),
                e[t(260)](t(267), CyberInstance[t(235)]),
                e.putUtfString(t(251), this[t(188)]()),
                e.putBool("v8", !0),
                typeof FB_APP_ID != t(258) && e[t(203)](t(239), FB_APP_ID),
                this[t(179)][t(257)](new SFS2X.LoginRequest(CyberInstance.playerId,"",e,CyberInstance[t(219)]))
            }
        }, {
            key: "onConnectionLost",
            value: function() {
                var t = r
                  , e = this;
                if (this[t(186)] = !1,
                this[t(274)] = !1,
                this[t(259)] = !1,
                this[t(159)](),
                CyberInstance[t(280)]) {
                    try {
                        CyberGlobalData[t(262)] = !1,
                        V[t(278)][t(229)]()
                    } catch (e) {
                        console[t(154)](e)
                    }
                    game.state.start(t(212), !0, !1)
                } else {
                    if (1 === this[t(240)])
                        return;
                    setTimeout((function() {
                        e[t(172)]()
                    }
                    ), 100)
                }
            }
        }, {
            key: "onLogin",
            value: function(t) {
                var e = r;
                if (ot[e(278)].inited = !1,
                bt[e(278)][e(252)] = !1,
                this[e(274)] = !0,
                t[e(209)] && t.user[e(182)] && (CyberInstance.guserid = parseInt(t[e(209)][e(182)])),
                CyberGlobalData.collectTime = t[e(211)][e(217)]("collectTime"),
                CyberGlobalData[e(272)] = !!t[e(211)][e(167)](e(272)),
                this.initHeartBeat(),
                t[e(211)].containsKey(e(228)) && (CyberGlobalData[e(245)] = !1,
                this[e(222)]()),
                t[e(211)].containsKey(e(185))) {
                    var n = t.data.getSFSObject(e(185));
                    bt[e(278)][e(193)](n)
                }
                t[e(211)][e(167)]("t") && this[e(187)](t.data[e(276)]("t")),
                CyberGlobalData[e(157)] = t[e(211)][e(167)](e(226)) ? t[e(211)].getInt(e(226)) : -1,
                this.sfs[e(163)](!0, 2),
                this[e(216)] = 0
            }
        }, {
            key: r(187),
            value: function(t) {
                var e = r;
                this.loggedTime = (new Date)[e(269)](),
                this[e(201)] = t
            }
        }, {
            key: r(169),
            value: function(t) {
                var e = r
                  , n = this;
                t[e(209)].isItMe && -1 != t.changedVars[e(153)](e(180)) && (CyberInstance.guserid = t[e(209)].getVariable(e(180))[e(225)],
                FBInstant[e(208)][e(183)]({
                    guserid: CyberInstance[e(180)]
                }),
                this[e(165)](),
                this.variableUpdated = !0,
                FBInstant[e(208)].getDataAsync([e(263)]).then((function(t) {
                    var r = e;
                    !t[r(263)] && FBInstant.player[r(155)]().then((function(t) {
                        var e = r
                          , i = new (SFS2X[e(213)]);
                        i[e(260)](e(263), t),
                        n[e(179)][e(257)](new (SFS2X[e(210)])(e(151),i)),
                        FBInstant[e(208)][e(183)]({
                            asid: t
                        })
                    }
                    ))
                }
                )))
            }
        }, {
            key: "updateProfileInTheFirstLogin",
            value: function() {
                var t = this
                  , e = function() {
                    var e = gt
                      , n = t.sfs[e(177)][e(265)](e(175)).value;
                    if (n == FBInstant[e(208)][e(243)]()) {
                        var r = new (SFS2X[e(213)]);
                        r.putUtfString("username", FBInstant[e(208)][e(275)]()),
                        r.putInt("timezone", h[e(250)]()),
                        t[e(179)].send(new SFS2X.ExtensionRequest("profile.update",r))
                    } else if (n != FBInstant.player[e(275)]()) {
                        var i = new SFS2X.SFSObject;
                        i.putUtfString(e(175), FBInstant[e(208)].getName()),
                        t.sfs[e(257)](new (SFS2X[e(210)])(e(223),i))
                    }
                    if (CyberInstance[e(232)] != e(264)) {
                        var a = new (SFS2X[e(213)]);
                        a[e(260)]("avatar", CyberInstance[e(232)]),
                        t[e(179)][e(257)](new (SFS2X[e(210)])(e(224),a))
                    }
                };
                if (globalStartGameAsyncResolved)
                    e[r(207)](this);
                else
                    var n = setInterval((function() {
                        globalStartGameAsyncResolved && (clearInterval(n),
                        e.call(t))
                    }
                    ), 10)
            }
        }, {
            key: r(222),
            value: function() {
                var t = r;
                try {
                    if (!this[t(198)]) {
                        var e = FBInstant.getEntryPointData();
                        if (e && e[t(180)]) {
                            var n = new (SFS2X[t(213)]);
                            n[t(260)]("inviter", e[t(180)] + ""),
                            this[t(179)].send(new (SFS2X[t(210)])(t(234),n)) && (this.entryPointDataHandled = !0)
                        }
                    }
                } catch (e) {
                    console[t(154)](t(255), e)
                }
            }
        }, {
            key: r(233),
            value: function(t) {
                var e = r;
                try {
                    t.cmd == e(240) && (this[e(240)] = 1,
                    t[e(204)][e(167)](e(197)) ? this[e(205)] = t[e(204)][e(150)](e(197)) : this[e(205)] = "BẢO TRÌ MÁY CHỦ!")
                } catch (t) {
                    console[e(154)](e(256), t)
                }
            }
        }, {
            key: r(242),
            value: function(t) {
                var e = r
                  , n = this;
                if (t.errorMessage && "MAINTENANCE" === t[e(236)])
                    return this[e(240)] = 1,
                    void (this[e(205)] = e(176));
                if (4 === t[e(156)]) {
                    this[e(240)] = 1,
                    this.maintenanceMsg = "Tài khoản của bạn đã bị khóa";
                    var i = parseInt(CyberInstance[e(180)]);
                    return i > 0 && (this[e(205)] += e(200) + i),
                    void (this[e(205)] += e(189) + CyberInstance[e(192)])
                }
                this[e(218)] < 4 && (this[e(218)]++,
                1 == this[e(218)] && (CyberInstance[e(180)] = 0),
                setTimeout((function() {
                    var t = e;
                    n[t(186)] && n[t(162)]()
                }
                ), 500))
            }
        }, {
            key: "getPlatform",
            value: function() {
                var t = r
                  , e = FBInstant.getPlatform();
                if (null == e || typeof e == t(258))
                    try {
                        e = navigator ? navigator.appName : "UNDEF"
                    } catch (n) {
                        e = t(178)
                    }
                return e + ""
            }
        }, {
            key: "disconnect",
            value: function() {
                var t = r;
                this.sfs[t(273)]()
            }
        }, {
            key: r(173),
            value: function() {
                var t = r
                  , e = (new Date)[t(269)]() - this[t(281)];
                t(249),
                e > 1e3 && e <= 2e3 || (e > 2e3 && e <= 3e3 ? t(206) : e > 3e3 && e <= 4e3 || (e > 4e3 && e <= 5e3 ? t(202) : e > 5e3 && e <= 6e3 ? t(246) : e > 6e3 && e <= 7e3 ? t(261) : e > 7e3 && e <= 8e3 || e > 8e3 && e <= 9e3 || (e > 9e3 && e <= 1e4 ? t(181) : e > 1e4 && t(270))))
            }
        }, {
            key: r(214),
            value: function() {
                var t = r
                  , e = this;
                this[t(159)](),
                CyberGlobalData[t(174)] > E[t(196)] - 60 && CyberGlobalData[t(174)] < E.GIFT_TIME && (CyberGlobalData.collectTime = E[t(196)] - 60),
                CyberGlobalData[t(174)] < E.GIFT_TIME && (this[t(191)] = setInterval((function() {
                    var n = t;
                    try {
                        CyberGlobalData[n(174)] < E[n(196)] ? CyberGlobalData[n(174)] = CyberGlobalData[n(174)] + 60 : e[n(159)](),
                        d.dispatchEvent(n(266), CyberGlobalData[n(174)])
                    } catch (t) {
                        console.log(t)
                    }
                }
                ), 6e4))
            }
        }, {
            key: r(159),
            value: function() {
                var t = r;
                this[t(191)] && (clearInterval(this[t(191)]),
                this[t(191)] = null)
            }
        }]) && mt(t[n(227)], e),
        Object[n(221)](t, "prototype", {
            writable: !1
        }),
        i
    }();
    var St = Tt;
    function Ot(t) {
        var e = Tt;
        return (Ot = e(250) == typeof Symbol && e(254) == typeof Symbol[e(277)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(250) == typeof Symbol && t[n(241)] === Symbol && t !== Symbol[n(247)] ? n(254) : typeof t
        }
        )(t)
    }
    function kt(t, e) {
        for (var n = Tt, r = 0; r < e.length; r++) {
            var i = e[r];
            i[n(274)] = i.enumerable || !1,
            i[n(270)] = !0,
            "value"in i && (i[n(294)] = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function Ct(t, e) {
        var n = Tt;
        return (Ct = Object.setPrototypeOf ? Object[n(258)].bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function Pt(t, e) {
        var n = Tt;
        if (e && (Ot(e) === n(283) || typeof e === n(250)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(252));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t)
    }
    function Tt(t, e) {
        var n = xt();
        return (Tt = function(t, e) {
            return n[t -= 237]
        }
        )(t, e)
    }
    function xt() {
        var t = ["create", "events", "make", "79803ioyyIU", "isClickOnce", "addIcon", "getPrototypeOf", "setText", "buttonText", "addChild", "27947194SuwGRg", "dispatch", "Cannot call a class as a function", "constructor", "apply", "sound", "setTo", "sham", "371656NQGxQh", "prototype", "defineProperty", "game", "function", "anchor", "Derived constructors may only return object or undefined", "12DKXrxO", "symbol", "enableButton", "19222RMJoTU", "addText", "setPrototypeOf", "playButtonSound", "tween", "onClick", "width", "click", "onButtonClick", "onInputDown", "height", "268kqLWJM", "soundEnabled", "1510UdzZCy", "configurable", "undefined", "inputEnabled", "alpha", "enumerable", "2484708FkglUx", "147HjgrNB", "iterator", "bind", "15726OPpatO", "dispatchAllowed", "call", "Sprite", "object", "Super expression must either be null or a function", "147lnrHYv", "Text", "#ffffff", "visible", "add", "construct", "disableTimeout", "1551245VLuaOq", "effectEnabled", "writable", "removeAll", "Linear", "__proto__"];
        return (xt = function() {
            return t
        }
        )()
    }
    function _t(t) {
        var e = Tt;
        return (_t = Object.setPrototypeOf ? Object[e(304)][e(278)]() : function(t) {
            return t[e(297)] || Object.getPrototypeOf(t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = Tt, r = t(); ; )
            try {
                if (939332 == -parseInt(n(285)) / 1 * (-parseInt(n(256)) / 2) + -parseInt(n(279)) / 3 * (parseInt(n(267)) / 4) + -parseInt(n(292)) / 5 + parseInt(n(275)) / 6 + parseInt(n(276)) / 7 * (parseInt(n(246)) / 8) + -parseInt(n(301)) / 9 * (-parseInt(n(269)) / 10) + parseInt(n(238)) / 11 * (-parseInt(n(253)) / 12))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(xt);
    const jt = function(t) {
        var e = Tt;
        !function(t, e) {
            var n = Tt;
            if (typeof e !== n(250) && null !== e)
                throw new TypeError(n(284));
            t[n(247)] = Object[n(298)](e && e[n(247)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(248)](t, n(247), {
                writable: !1
            }),
            e && Ct(t, e)
        }(s, t);
        var n, r, i, a, o = (i = s,
        a = function() {
            var t = Tt;
            if (typeof Reflect === t(271) || !Reflect.construct)
                return !1;
            if (Reflect[t(290)][t(245)])
                return !1;
            if (typeof Proxy === t(250))
                return !0;
            try {
                return Boolean[t(247)].valueOf[t(281)](Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Tt, n = _t(i);
            if (a) {
                var r = _t(this)[e(241)];
                t = Reflect.construct(n, arguments, r)
            } else
                t = n[e(242)](this, arguments);
            return Pt(this, t)
        }
        );
        function s(t, e, n, r, i) {
            var a, c = Tt;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Tt(240))
            }(this, s),
            (a = o.call(this, t, e, n, r, i))[c(268)] = !0,
            a.isClickOnce = !1,
            a[c(293)] = !1,
            a.disableTimeout = !1,
            a
        }
        return n = s,
        (r = [{
            key: e(257),
            value: function(t, n) {
                var r = e;
                if (this[r(306)])
                    n && this[r(306)].setStyle(n),
                    this[r(306)][r(305)](t);
                else {
                    var i = new (Phaser[r(286)])(this[r(249)],this[r(262)] / 2,this[r(266)] / 2 + 2,t,void 0 !== n ? n : {
                        font: APP_FONT,
                        fill: r(287),
                        fontWeight: 400,
                        fontSize: 24
                    });
                    i[r(251)][r(244)](.5),
                    this[r(237)](i),
                    this[r(306)] = i
                }
            }
        }, {
            key: e(303),
            value: function(t, n) {
                var r = e
                  , i = this[r(249)][r(300)].sprite(this.width / 2, this.height / 2, t, n);
                i[r(251)][r(244)](.5),
                i.scale[r(244)](.85),
                this[r(237)](i)
            }
        }, {
            key: "onButtonClick",
            value: function() {
                var t = e
                  , n = this;
                this[t(268)] && CyberInstance[t(243)][t(259)](),
                this[t(280)] && (this[t(280)] = !1,
                this[t(261)][t(239)](this),
                this[t(302)] ? (this[t(272)] = !1,
                this[t(261)][t(295)](),
                this[t(261)] = null,
                this[t(299)].onInputDown[t(295)]()) : this[t(291)] ? this.dispatchAllowed = !0 : setTimeout((function() {
                    n.dispatchAllowed = !0
                }
                ), 300))
            }
        }, {
            key: e(263),
            value: function(t, n) {
                var r = e;
                !this[r(261)] && (this.inputEnabled = !0,
                this.dispatchAllowed = !0,
                this[r(261)] = new Phaser.Signal,
                this.onClick.add(t, n),
                this[r(299)][r(265)][r(289)](this[r(264)], this))
            }
        }, {
            key: "clickOnce",
            value: function(t, n) {
                this[e(263)](t, n),
                this.isClickOnce = !0
            }
        }, {
            key: "alphaButton",
            value: function() {
                var t = e;
                this[t(293)] && .5 != this.alpha && this[t(249)][t(289)].tween(this).to({
                    alpha: .5
                }, 400, t(296), !0),
                this[t(272)] = !1,
                this[t(288)] = !0
            }
        }, {
            key: "disableButton",
            value: function() {
                var t = e;
                this.effectEnabled && 0 != this[t(273)] && this.game.add[t(260)](this).to({
                    alpha: 0
                }, 400, t(296), !0),
                this[t(272)] = !1,
                this[t(288)] = !1
            }
        }, {
            key: e(255),
            value: function() {
                var t = e;
                this.effectEnabled && this[t(273)] < 1 && this[t(249)][t(289)][t(260)](this).to({
                    alpha: 1
                }, 400, t(296), !0),
                this.inputEnabled = !0,
                this[t(288)] = !0
            }
        }]) && kt(n[Tt(247)], r),
        Object.defineProperty(n, "prototype", {
            writable: !1
        }),
        s
    }(Phaser[St(282)]);
    function Rt() {
        var t = ["30tylkoP", "3332022wYbqMx", "handleLoadError", "message", "handleLoadSuccess", "onLoadError", "value", "showAsync", "lang", "getRewardedVideoAsync", "2467752cSeATc", "Cannot call a class as a function", "CLOSE", "writable", "585711sAwopC", "showErrorPopup", "loadAsync", "Signal", "102826AsjmfZ", "handleAdsNoFill", "adLoaded", "6rdtITR", "adInstance", "dispatch", "blocked", "prototype", "length", "key", "preload", "isAnyPrice", "506256qCdFtD", "defineProperty", "enumerable", "catch", "8BhCAiM", "onShow", "then", "onLoad", "858893tRNIoJ", "171940tdVxwX"];
        return (Rt = function() {
            return t
        }
        )()
    }
    function Et(t, e) {
        var n = Rt();
        return (Et = function(t, e) {
            return n[t -= 399]
        }
        )(t, e)
    }
    function Bt(t, e) {
        for (var n = Et, r = 0; r < e[n(403)]; r++) {
            var i = e[r];
            i[n(409)] = i[n(409)] || !1,
            i.configurable = !0,
            n(423)in i && (i[n(430)] = !0),
            Object[n(408)](t, i[n(404)], i)
        }
    }
    !function(t, e) {
        for (var n = Et, r = t(); ; )
            try {
                if (555615 == -parseInt(n(435)) / 1 * (parseInt(n(411)) / 2) + parseInt(n(418)) / 3 + parseInt(n(407)) / 4 + -parseInt(n(416)) / 5 + -parseInt(n(438)) / 6 * (parseInt(n(415)) / 7) + -parseInt(n(427)) / 8 + -parseInt(n(431)) / 9 * (-parseInt(n(417)) / 10))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Rt);
    const At = function() {
        var t, e, n, r = Et;
        function i(t, e) {
            var n = Et;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Et(428))
            }
            )(this, i),
            this.id = t,
            this[n(401)] = !1,
            this.adLoaded = !1,
            this[n(399)] = null,
            this[n(406)] = e,
            this[n(422)] = new (Phaser[n(434)]),
            this[n(414)] = new (Phaser[n(434)]),
            this.onShow = new Phaser.Signal
        }
        return t = i,
        n = Et,
        (e = [{
            key: r(405),
            value: function() {
                var t = r
                  , e = this;
                null !== this[t(399)] ? this[t(399)].loadAsync()[t(413)]((function() {
                    e[t(421)]()
                }
                ))[t(410)]((function(t) {
                    e.handleLoadError(t, 2)
                }
                )) : FBInstant[t(426)](this.id)[t(413)]((function(n) {
                    var r = t;
                    return e[r(399)] = n,
                    e.adInstance[r(433)]()
                }
                ))[t(413)]((function() {
                    e[t(421)]()
                }
                ))[t(410)]((function(n) {
                    e[t(419)](n, 2)
                }
                ))
            }
        }, {
            key: "handleLoadSuccess",
            value: function() {
                var t = r;
                this.adLoaded = !0,
                this[t(414)][t(400)](this)
            }
        }, {
            key: r(419),
            value: function(t, e) {
                var n = r
                  , i = this;
                this[n(406)] ? setTimeout((function() {
                    null != i[n(399)] && i.handleAdsNoFill(e)
                }
                ), 3e4) : this[n(401)] = !0,
                this[n(422)][n(400)](this, t)
            }
        }, {
            key: r(436),
            value: function(t) {
                var e = r
                  , n = this;
                t > 3 ? this[e(401)] = !0 : this[e(399)].loadAsync()[e(413)]((function() {
                    n.handleLoadSuccess()
                }
                ))[e(410)]((function(r) {
                    n[e(419)](r, t + 1)
                }
                ))
            }
        }, {
            key: "show",
            value: function() {
                var t = r
                  , e = this;
                this[t(399)][t(424)]()[t(413)]((function() {
                    var n = t;
                    e[n(399)] = null,
                    e.adLoaded = !1,
                    e[n(412)].dispatch(e.id),
                    setTimeout((function() {
                        e[n(405)]()
                    }
                    ), 1e3)
                }
                ))[t(410)]((function(n) {
                    var r = t;
                    e[r(399)] = null,
                    e[r(437)] = !1,
                    e[r(432)](n),
                    setTimeout((function() {
                        e.preload()
                    }
                    ), 1e3)
                }
                ))
            }
        }, {
            key: r(432),
            value: function(t) {
                var e = r;
                t && new M(game,{
                    text: t[e(420)],
                    buttonText: CyberInstance[e(425)][e(429)]
                })
            }
        }]) && Bt(t[n(402)], e),
        Object[n(408)](t, n(402), {
            writable: !1
        }),
        i
    }();
    function Dt() {
        var t = ["REWARD_ARRAY", "onReady", "OUT_OFF_MONEY_POSITION", "184766GBYcmy", "7XcogeB", "split", "preload", "adEnabled", "setTo", "494640RjtCaK", "getTime", "testMode", "player", "onReward", "DAILY_POSITION", "init", "ready", "SPIN_POSITION", "onLoad", "add", "897256WAJWhN", "FAKE AD IS SHOWING ON CENTER OF SCREEN...", "blocked", "anyPriceInstance", "centerX", "currentDate", "inited", "image", "Cannot call a class as a function", "prototype", "BUY_EMO", "show", "#ffffff", "spinCounter", "type", "extraCounter", "destroy", "dispatch", "game", "RV2Instance", "then", "REWARDED_POPUP_POSITION", "maxVideos", "key", "defineProperty", "centerY", "enumerable", "watchCounter", "getTimezoneOffset", "getRewardedVideoAsync", "make", "getDataAsync", "BUY_AVATAR", "world", "1123200lxckju", "increaseSpinCounter", "toISOString", "push", "BUY_GIFT", "catch", "setDataAsync", "onShow", "RV3Instance", "166146NcwZYL", "value", "ads", "2332542FVdBjz", "enableTestMode", "adTestModeScreen", "rvids", "indexOf", "1142168gEZcOp", "length", "Signal", "onLoadError", "configurable"];
        return (Dt = function() {
            return t
        }
        )()
    }
    function Ft(t, e) {
        for (var n = Nt, r = 0; r < e.length; r++) {
            var i = e[r];
            i.enumerable = i[n(171)] || !1,
            i[n(200)] = !0,
            n(189)in i && (i.writable = !0),
            Object[n(169)](t, i[n(168)], i)
        }
    }
    function Nt(t, e) {
        var n = Dt();
        return (Nt = function(t, e) {
            return n[t -= 145]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = Nt, r = t(); ; )
            try {
                if (322888 == parseInt(n(204)) / 1 + parseInt(n(196)) / 2 + -parseInt(n(188)) / 3 + parseInt(n(210)) / 4 + -parseInt(n(179)) / 5 + -parseInt(n(191)) / 6 * (parseInt(n(205)) / 7) + parseInt(n(145)) / 8)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Dt);
    var Lt = Object.freeze([5e4, 1e5, 2e5, 3e5, 5e5])
      , Gt = null;
    const Mt = function() {
        var t, e, n, r, i = Nt;
        function a() {
            var t = Nt;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Nt(153))
            }
            )(this, a),
            this[t(151)] = !1,
            this[t(217)] = !1,
            this[t(212)] = !1,
            this.watchCounter = 0,
            this.extraCounter = 0,
            this[t(158)] = 0,
            this[t(167)] = 10,
            this[t(202)] = new Phaser.Signal,
            this[t(214)] = new (Phaser[t(198)]),
            this[t(190)] = [];
            for (var e = 0; e < CyberInstance[t(194)].length; e++) {
                var n = new At(CyberInstance[t(194)][e],0 == e);
                n[t(199)][t(220)](this[t(199)], this),
                n.onLoad[t(220)](this[t(219)], this),
                n.onShow[t(220)](this[t(186)], this),
                this[t(190)][t(182)](n)
            }
        }
        return t = a,
        e = [{
            key: i(216),
            value: function() {
                var t = i
                  , e = this;
                !this[t(151)] && -1 != FBInstant.getSupportedAPIs()[t(195)](t(174)) && CyberInstance[t(208)] && 0 != CyberInstance.rvids[t(197)] && this[t(176)]((function() {
                    var n = t;
                    CyberInstance[n(194)].length > 1 ? e[n(187)][n(147)] ? e[n(164)][n(147)] ? e.anyPriceInstance.preload() : e[n(164)][n(207)]() : e[n(187)][n(207)]() : e[n(148)][n(207)]()
                }
                ))
            }
        }, {
            key: i(192),
            value: function() {
                var t = i
                  , e = this;
                !this[t(151)] && this[t(176)]((function() {
                    var n = t;
                    e[n(212)] = !0,
                    setTimeout((function() {
                        e[n(219)]()
                    }
                    ), 3e3)
                }
                ))
            }
        }, {
            key: i(176),
            value: function(t) {
                var e = i
                  , n = this;
                FBInstant[e(213)][e(176)]([e(150), e(172), "spinCounter", e(160)])[e(165)]((function(r) {
                    var i, a, o = e;
                    n[o(150)] = (i = Nt,
                    a = new Date,
                    new Date(a[i(211)]() - 6e4 * a[i(173)]())[i(181)]()[i(206)]("T")[0]),
                    r[o(172)] && (n[o(172)] = parseInt(r[o(172)])),
                    r.extraCounter && (n.extraCounter = parseInt(r[o(160)])),
                    r[o(158)] != n[o(150)] && (n[o(158)] = parseInt(r[o(158)])),
                    r[o(150)] !== n[o(150)] && (n[o(172)] = 0,
                    n[o(158)] = 0,
                    n[o(160)] = 0),
                    FBInstant[o(213)].setDataAsync({
                        currentDate: n.currentDate,
                        watchCounter: n[o(172)],
                        spinCounter: n[o(158)],
                        extraCounter: n[o(160)]
                    }),
                    n.inited = !0,
                    t()
                }
                ))[e(184)]((function(e) {
                    setTimeout((function() {
                        n[Nt(176)](t)
                    }
                    ), 5e3)
                }
                ))
            }
        }, {
            key: "onLoad",
            value: function() {
                var t = i;
                !this[t(217)] && (this[t(217)] = !0,
                this[t(202)][t(162)]())
            }
        }, {
            key: i(199),
            value: function(t) {
                var e = i;
                CyberInstance[e(194)][e(197)] > 1 && (t.id == this[e(187)].id ? this[e(164)][e(207)]() : t.id == this.RV2Instance.id && this[e(148)][e(207)]())
            }
        }, {
            key: i(156),
            value: function(t) {
                var e = i
                  , n = this;
                if (this[e(217)])
                    if (this.type = t,
                    this[e(212)]) {
                        this[e(193)] = CyberInstance[e(163)][e(220)][e(152)](0, 0, CyberGlobalData.overlayTexture);
                        var r = CyberInstance[e(163)][e(175)].text(CyberInstance[e(163)][e(178)][e(149)], CyberInstance.game[e(178)][e(170)], e(146), {
                            font: APP_FONT,
                            fill: e(157),
                            fontWeight: 500,
                            fontSize: 40
                        });
                        r.anchor[e(209)](.5),
                        this[e(193)].addChild(r),
                        setTimeout((function() {
                            var t = e;
                            n[t(193)][t(161)](),
                            n[t(186)]("fakeid")
                        }
                        ), 5e3)
                    } else
                        for (var a = 0; a < CyberInstance[e(194)][e(197)]; a++)
                            if (this[e(190)][a].adLoaded) {
                                this.ads[a].show();
                                break
                            }
            }
        }, {
            key: i(186),
            value: function(t) {
                var e = i
                  , n = this;
                if (this[e(217)] = !1,
                this[e(202)].dispatch(),
                this[e(159)] == a[e(166)]) {
                    this[e(172)] = this[e(172)] + 1,
                    FBInstant[e(213)][e(185)]({
                        watchCounter: this.watchCounter
                    });
                    var r = this.watchCounter <= 5 ? Lt[this[e(172)] - 1] : Lt[4];
                    this[e(214)][e(162)]({
                        id: t,
                        type: this[e(159)],
                        coin: r,
                        currentDate: this[e(150)],
                        watchCounter: this.watchCounter
                    })
                } else
                    this.type == a[e(218)] ? this[e(214)][e(162)]({
                        id: t,
                        type: this[e(159)]
                    }) : this[e(159)] == a.OUT_OFF_MONEY_POSITION ? (this[e(160)] = this[e(160)] + 1,
                    FBInstant[e(213)][e(185)]({
                        extraCounter: this[e(160)]
                    }),
                    this[e(214)][e(162)]({
                        id: t,
                        type: this.type
                    })) : this.type == a[e(215)] ? this[e(214)][e(162)]({
                        id: t,
                        type: this.type
                    }) : this.type == a.BUY_GIFT ? this.onReward.dispatch({
                        id: t,
                        type: this.type
                    }) : this[e(159)] == a[e(177)] ? this[e(214)][e(162)]({
                        id: t,
                        type: this[e(159)]
                    }) : this[e(159)] == a[e(155)] && this[e(214)][e(162)]({
                        id: t,
                        type: this.type
                    });
                this[e(212)] && setTimeout((function() {
                    n[e(219)]()
                }
                ), 3e3)
            }
        }, {
            key: i(180),
            value: function() {
                var t = i;
                this.spinCounter = this.spinCounter + 1,
                FBInstant[t(213)][t(185)]({
                    spinCounter: this.spinCounter
                })
            }
        }, {
            key: i(148),
            get: function() {
                return this[i(190)][0]
            }
        }, {
            key: "RV2Instance",
            get: function() {
                return this[i(190)][1]
            }
        }, {
            key: i(187),
            get: function() {
                return this[i(190)][2]
            }
        }],
        n = [{
            key: "instance",
            get: function() {
                return Gt || (Gt = new a),
                Gt
            }
        }, {
            key: i(166),
            get: function() {
                return 1
            }
        }, {
            key: i(203),
            get: function() {
                return 3
            }
        }, {
            key: i(218),
            get: function() {
                return 4
            }
        }, {
            key: i(215),
            get: function() {
                return 5
            }
        }, {
            key: i(183),
            get: function() {
                return 6
            }
        }, {
            key: i(177),
            get: function() {
                return 7
            }
        }, {
            key: i(155),
            get: function() {
                return 8
            }
        }, {
            key: i(201),
            get: function() {
                return Lt
            }
        }],
        r = Nt,
        e && Ft(t[r(154)], e),
        n && Ft(t, n),
        Object[r(169)](t, r(154), {
            writable: !1
        }),
        a
    }();
    function Wt(t) {
        var e = Ut;
        return (Wt = e(328) == typeof Symbol && e(317) == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(328) == typeof Symbol && t[n(325)] === Symbol && t !== Symbol[n(387)] ? n(317) : typeof t
        }
        )(t)
    }
    function zt(t, e) {
        for (var n = Ut, r = 0; r < e[n(316)]; r++) {
            var i = e[r];
            i[n(378)] = i.enumerable || !1,
            i[n(340)] = !0,
            n(377)in i && (i[n(348)] = !0),
            Object[n(371)](t, i.key, i)
        }
    }
    function Ut(t, e) {
        var n = Xt();
        return (Ut = function(t, e) {
            return n[t -= 310]
        }
        )(t, e)
    }
    function Vt(t, e) {
        var n = Ut;
        return (Vt = Object[n(345)] ? Object[n(345)][n(343)]() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function Ht(t, e) {
        var n = Ut;
        if (e && (Wt(e) === n(310) || typeof e === n(328)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(342));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(Ut(318));
            return t
        }(t)
    }
    function Xt() {
        var t = ["background", "2twTjUm", "onInputDown", "setTo", "defineProperty", "149859hMNqUX", "homeScreen", "Super expression must either be null or a function", "NHAN_QUA", "643751ejbDql", "value", "enumerable", "add", "rw_icon", "addButton", "make", "show", "width", "setTextBounds", "170429JGVaOc", "prototype", "216cIPldR", "#ebdac0", "object", "button_close", "__proto__", "4PMDtMw", "toUpperCase", "undefined", "length", "symbol", "this hasn't been initialised - super() hasn't been called", "ready", "getPrototypeOf", "height", "closeButton", "anchor", "addCloseButton", "constructor", "addText", "createTransition", "function", "addChild", "text", "middle", "3939870MdoaaI", "valueOf", "addContent", "NOT_ENOUGH_CHIP_TO_CONTINUE", "Cannot call a class as a function", "addBackground", "addTitle", "CLOSE", "configurable", "sprite", "Derived constructors may only return object or undefined", "bind", "close", "setPrototypeOf", "call", "370ZsvfiR", "writable", "buttonText", "game", "lang", "onWatchClick", "instance", "addOverlay", "addOnce", "playButtonSound", "1773156UUbImU", "6356141NRjPtL", "sham", "787278kJjhDl", "click", "apply", "OUT_OFF_MONEY_POSITION", "24ypQpGW", "construct", "center"];
        return (Xt = function() {
            return t
        }
        )()
    }
    function Yt(t) {
        var e = Ut;
        return (Yt = Object[e(345)] ? Object[e(320)][e(343)]() : function(t) {
            return t[e(312)] || Object.getPrototypeOf(t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = Ut, r = t(); ; )
            try {
                if (618902 == parseInt(n(376)) / 1 * (-parseInt(n(368)) / 2) + -parseInt(n(357)) / 3 + parseInt(n(313)) / 4 * (parseInt(n(332)) / 5) + -parseInt(n(360)) / 6 + -parseInt(n(386)) / 7 * (-parseInt(n(388)) / 8) + parseInt(n(372)) / 9 * (-parseInt(n(347)) / 10) + -parseInt(n(358)) / 11 * (-parseInt(n(364)) / 12))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Xt);
    const qt = function(t) {
        var e = Ut;
        !function(t, e) {
            var n = Ut;
            if (typeof e !== n(328) && null !== e)
                throw new TypeError(n(374));
            t[n(387)] = Object.create(e && e[n(387)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(371)](t, "prototype", {
                writable: !1
            }),
            e && Vt(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = Ut;
            if (typeof Reflect === t(315) || !Reflect[t(365)])
                return !1;
            if (Reflect.construct[t(359)])
                return !1;
            if (typeof Proxy === t(328))
                return !0;
            try {
                return Boolean[t(387)][t(333)][t(346)](Reflect[t(365)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Ut, n = Yt(a);
            if (o) {
                var r = Yt(this).constructor;
                t = Reflect[e(365)](n, arguments, r)
            } else
                t = n[e(362)](this, arguments);
            return Ht(this, t)
        }
        );
        function c(t, e) {
            var n, r = Ut;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Ut(336))
            }(this, c),
            (n = s.call(this, t, e))[r(354)](),
            n[r(337)]("homeScreen", "bg_popup_medium_484x292"),
            n[r(338)](),
            n.addContent(CyberInstance[r(351)][r(335)]),
            n[r(381)](e),
            n[r(324)](),
            n[r(327)](),
            n
        }
        return n = c,
        i = Ut,
        (r = [{
            key: e(381),
            value: function() {
                var t = e
                  , n = new jt(this[t(350)],0,0,t(373),"button_green_197x64");
                n.x = this.background[t(384)] / 2 - n[t(384)] / 2,
                n.y = this.background[t(321)] - n.height - 30,
                n[t(326)](CyberInstance[t(351)][t(375)]),
                this.background[t(329)](n),
                n[t(349)][t(323)].setTo(0, .5);
                var r = this.game.make[t(341)](10, 10, t(373), t(380));
                n[t(329)](r),
                n[t(349)].x = r.x + r[t(384)] + 10,
                n[t(361)](this[t(352)], this)
            }
        }, {
            key: e(352),
            value: function() {
                var t = e;
                Mt[t(353)][t(319)] ? Mt.instance[t(383)](Mt[t(363)]) : new M(game,{
                    text: CyberInstance[t(351)].ADS_NOT_READY,
                    buttonText: CyberInstance[t(351)][t(339)],
                    hideCloseButton: !0
                }),
                this[t(344)]()
            }
        }, {
            key: e(334),
            value: function(t) {
                var n = e
                  , r = this[n(350)].add[n(330)](30, 70, t, {
                    font: APP_FONT,
                    fontSize: 24,
                    fill: "#f59eac",
                    fontWeight: "normal",
                    wordWrap: !0,
                    wordWrapWidth: this[n(367)][n(384)] - 60,
                    align: n(366),
                    boundsAlignH: n(366),
                    boundsAlignV: n(331)
                });
                r[n(385)](0, 0, this[n(367)][n(384)] - 60, 100),
                this.background[n(329)](r)
            }
        }, {
            key: e(338),
            value: function() {
                var t = e
                  , n = this[t(350)][t(379)][t(330)](this.background[t(384)] / 2, 15, CyberInstance.lang.THONG_BAO[t(314)](), {
                    font: APP_FONT,
                    fontSize: 30,
                    fill: t(389),
                    fontWeight: "bold"
                });
                n.anchor[t(370)](.5, 0),
                this[t(367)][t(329)](n)
            }
        }, {
            key: e(324),
            value: function() {
                var t = e
                  , n = this
                  , r = this.game[t(382)][t(341)](0, 0, t(373), t(311));
                r.x = this[t(367)][t(384)] - r[t(384)] / 2 - 10,
                r.y = -12,
                r.inputEnabled = !0,
                r.events[t(369)][t(355)]((function() {
                    var e = t;
                    CyberInstance.sound[e(356)](),
                    n[e(344)]()
                }
                ), this),
                this[t(322)] = r,
                this[t(367)].addChild(this[t(322)])
            }
        }]) && zt(n[i(387)], r),
        Object[i(371)](n, i(387), {
            writable: !1
        }),
        c
    }(_);
    function Kt(t, e) {
        var n = Qt();
        return (Kt = function(t, e) {
            return n[t -= 118]
        }
        )(t, e)
    }
    function Jt(t, e) {
        for (var n = Kt, r = 0; r < e[n(165)]; r++) {
            var i = e[r];
            i[n(127)] = i.enumerable || !1,
            i.configurable = !0,
            n(126)in i && (i[n(167)] = !0),
            Object.defineProperty(t, i[n(172)], i)
        }
    }
    function Qt() {
        var t = ["defineProperty", "200280FYHekJ", "blocked", "show", "toISOString", "interids", "inited", "ready", "5281326usMrxi", "interstitialDate", "co the nhan dc inter rewarded", "send", "44kcicZF", "getSupportedAPIs", "lastShowingTime", "7fkgdUQ", "Rewarded interstitial preloaded success", "1347366UegFEY", "loadNormalInterstitial", "6468720qDowwm", "instance", "init", "Rewarded interstitial preloading error", "handleLoadError", "ads.rewardedInterstitial", "handleAdsNoFill", "catch", "loadAsync", "prototype", "log", "ExtensionRequest", "getInterstitialAdAsync", "length", "maxShow", "writable", "player", "getDataAsync", "getRewardedInterstitialAsync", "869295dwhfbm", "key", "CLIENT_UNSUPPORTED_OPERATION getRewardedInterstitialAsync", "split", "340125SSZhXR", "getTime", "Cannot call a class as a function", "adEnabled", "indexOf", "then", "1483455IuwxWf", "getTimezoneOffset", "loading", "value", "enumerable", "interstitialCounter", "setDataAsync", "isRewared", "load", "adInstance"];
        return (Qt = function() {
            return t
        }
        )()
    }
    !function(t, e) {
        for (var n = Kt, r = t(); ; )
            try {
                if (447960 == parseInt(n(148)) / 1 * (parseInt(n(134)) / 2) + parseInt(n(123)) / 3 + parseInt(n(145)) / 4 * (parseInt(n(175)) / 5) + -parseInt(n(150)) / 6 + parseInt(n(171)) / 7 + -parseInt(n(152)) / 8 + -parseInt(n(141)) / 9)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Qt);
    var Zt = null;
    const $t = function() {
        var t, e, n, r, i = Kt;
        function a() {
            var t = Kt;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Kt(119))
            }
            )(this, a),
            this[t(139)] = !1,
            this[t(132)] = null,
            this.ready = !1,
            this.isRewared = !1,
            this[t(125)] = !1,
            this[t(135)] = !1,
            this[t(128)] = 0,
            this[t(147)] = 0,
            this[t(166)] = 50
        }
        return t = a,
        n = [{
            key: "instance",
            get: function() {
                return Zt || (Zt = new a),
                Zt
            }
        }],
        r = Kt,
        (e = [{
            key: "init",
            value: function() {
                var t = Kt
                  , e = this;
                0 != CyberInstance[t(138)][t(165)] && 0 != CyberInstance[t(120)] && (this.inited ? this[t(131)]() : FBInstant[t(168)][t(169)](["interstitialDate", "interstitialCounter", t(147)])[t(122)]((function(n) {
                    var r, i, a = t;
                    if (!e[a(139)]) {
                        e.inited = !0,
                        e[a(142)] = (r = Kt,
                        i = new Date,
                        new Date(i[r(118)]() - 6e4 * i[r(124)]())[r(137)]()[r(174)]("T")[0]);
                        var o = !1;
                        n.lastShowingTime && (e.lastShowingTime = parseInt(n[a(147)])),
                        n[a(142)] ? (n[a(128)] && (e[a(128)] = parseInt(n[a(128)])),
                        n[a(142)] != e[a(142)] && (e[a(128)] = 0,
                        o = !0)) : o = !0,
                        o && FBInstant[a(168)].setDataAsync({
                            interstitialDate: e[a(142)],
                            interstitialCounter: e.interstitialCounter
                        }),
                        e[a(131)]()
                    }
                }
                )).catch((function() {
                    setTimeout((function() {
                        var t = Kt;
                        a[t(153)][t(154)]()
                    }
                    ), 5e3)
                }
                )))
            }
        }, {
            key: i(131),
            value: function() {
                var t = i
                  , e = this;
                this[t(128)] >= this[t(166)] || !this[t(140)] && !this[t(125)] && (this.loading = !0,
                this[t(128)] % 2 == 0 ? this.loadNormalInterstitial() : -1 == FBInstant[t(146)]()[t(121)]("getRewardedInterstitialAsync") ? (this[t(151)](),
                console[t(162)](t(173))) : FBInstant[t(170)]("553431568952213_739110390384329")[t(122)]((function(n) {
                    var r = t;
                    return e[r(132)] = n,
                    e[r(132)][r(160)]()
                }
                )).then((function() {
                    var n = t;
                    e[n(125)] = !1,
                    e[n(140)] = !0,
                    e[n(130)] = !0,
                    console[n(162)](n(149))
                }
                ))[t(159)]((function(n) {
                    var r = t;
                    console[r(162)](r(155), n),
                    e[r(151)]()
                }
                )))
            }
        }, {
            key: i(151),
            value: function() {
                var t = i
                  , e = this;
                FBInstant[t(164)](CyberInstance[t(138)][0]).then((function(n) {
                    var r = t;
                    return e[r(132)] = n,
                    e[r(132)][r(160)]()
                }
                ))[t(122)]((function() {
                    e[t(125)] = !1,
                    e.ready = !0
                }
                )).catch((function(n) {
                    var r = t;
                    e[r(156)](n, 2),
                    console[r(162)]("loadNormalInterstitial error", n)
                }
                ))
            }
        }, {
            key: i(156),
            value: function(t, e) {
                var n = this;
                setTimeout((function() {
                    var t = Kt;
                    null != n[t(132)] && n[t(158)](e)
                }
                ), 3e4)
            }
        }, {
            key: i(158),
            value: function(t) {
                var e = i
                  , n = this;
                t > 3 ? this[e(135)] = !0 : this[e(132)][e(160)]()[e(122)]((function() {
                    var t = e;
                    n.loading = !1,
                    n[t(140)] = !0
                }
                ))[e(159)]((function(r) {
                    n[e(156)](r, t + 1)
                }
                ))
            }
        }, {
            key: i(136),
            value: function() {
                var t = i
                  , e = this;
                this[t(128)] >= this[t(166)] || this[t(140)] && this[t(132)].showAsync().then((function() {
                    var n = t;
                    e[n(132)] = null,
                    e[n(140)] = !1,
                    e[n(128)] = e.interstitialCounter + 1,
                    e[n(147)] = (new Date)[n(118)](),
                    FBInstant.player[n(129)]({
                        interstitialCounter: e[n(128)],
                        lastShowingTime: e.lastShowingTime
                    }),
                    e[n(130)] && (CyberInstance.socket[n(144)](new (SFS2X[n(163)])(n(157))),
                    e[n(130)] = !1,
                    console.log(n(143)))
                }
                ))[t(159)]((function() {
                    var n = t;
                    e[n(132)] = null,
                    e[n(140)] = !1,
                    e[n(130)] && (e[n(130)] = !1,
                    e.interstitialCounter = e[n(128)] + 1,
                    e[n(147)] = (new Date)[n(118)](),
                    FBInstant.player[n(129)]({
                        interstitialCounter: e[n(128)],
                        lastShowingTime: e[n(147)]
                    }))
                }
                ))
            }
        }]) && Jt(t[r(161)], e),
        n && Jt(t, n),
        Object[r(133)](t, "prototype", {
            writable: !1
        }),
        a
    }();
    function te(t, e) {
        for (var n = ne, r = 0; r < e[n(397)]; r++) {
            var i = e[r];
            i[n(407)] = i.enumerable || !1,
            i[n(403)] = !0,
            n(400)in i && (i[n(442)] = !0),
            Object[n(444)](t, i[n(420)], i)
        }
    }
    function ee() {
        var t = ["MIN_BET", "sfs", "getDisplayName", "start", "canPlay", "3858480IACfAa", "708990PFWVpP", "ROOM_JOIN", "roomId", "avatarId", "coin", "username", "5480577ciqYZO", "guserid", "resumeRoom", "writable", "time", "defineProperty", "6499152HRYkoc", "putInt", "10owzQKm", "level", "1157660ZqzqJk", "addEventListener", "putBool", "joinPrivateRoom", "mySelf", "sendFindGameRequest", "instance", "show", "_sfs", "collectFreeChip", "joinGame", "412JDSEPm", "getExp", "32NKhRxS", "gift.outOfMoney", "create", "getAvatarItemId", "miniumMoneyCondition", "onUserExitRoom", "Cannot call a class as a function", "log", "length", "sendRequest", "loop", "value", "GameController.resumeGame", "onRoomJoin", "configurable", "getGuserid", "ExtensionRequest", "getVariable", "enumerable", "send", "containsVariable", "2631642soikwb", "friendMode", "initialize", "isItMe", "dailyPack", "prototype", "SFSEvent", "user", "resumeGame", "40Mkxdmy", "key", "6106jwvQjq", "getCoin", "isGameReady", "joinRoom", "SFSObject", "undefined"];
        return (ee = function() {
            return t
        }
        )()
    }
    function ne(t, e) {
        var n = ee();
        return (ne = function(t, e) {
            return n[t -= 378]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = ne, r = t(); ; )
            try {
                if (698097 == parseInt(n(387)) / 1 * (parseInt(n(421)) / 2) + -parseInt(n(410)) / 3 + -parseInt(n(389)) / 4 * (parseInt(n(433)) / 5) + parseInt(n(432)) / 6 + parseInt(n(449)) / 7 * (parseInt(n(419)) / 8) + -parseInt(n(439)) / 9 * (parseInt(n(447)) / 10) + parseInt(n(445)) / 11)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(ee);
    var re = null;
    const ie = function() {
        var t, e, n, r, i = ne;
        function a() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(ne(395))
            }(this, a)
        }
        return t = a,
        e = [{
            key: i(412),
            value: function(t) {
                var e = i;
                !this[e(428)] && (this.sfs = t,
                this[e(428)][e(450)](SFS2X[e(416)][e(434)], this[e(402)], this),
                this[e(428)][e(450)](SFS2X.SFSEvent.USER_EXIT_ROOM, this.onUserExitRoom, this))
            }
        }, {
            key: "onRoomJoin",
            value: function() {
                $t[i(382)].init()
            }
        }, {
            key: i(394),
            value: function(t) {
                var e = i;
                t[e(417)][e(413)] && !0 === CyberGlobalData.interstitialShowingAllowed && (CyberGlobalData.interstitialShowingAllowed = !1,
                $t[e(382)][e(383)]())
            }
        }, {
            key: i(431),
            value: function(t) {
                var e = i
                  , n = typeof t == e(426) || null == t ? E[e(427)] : t;
                return this[e(422)]() >= n * CyberInstance[e(393)]
            }
        }, {
            key: i(381),
            value: function() {
                var t = this;
                a[i(398)]((function() {
                    t.sfs.send(new SFS2X.ExtensionRequest("findGame"))
                }
                ))
            }
        }, {
            key: i(424),
            value: function(t) {
                var e = i
                  , n = this;
                a[e(398)]((function() {
                    var r = e;
                    try {
                        var i = new (SFS2X[r(425)]);
                        i.putInt(r(435), parseInt(t)),
                        n.sfs.send(new (SFS2X[r(405)])(r(386),i))
                    } catch (t) {
                        console[r(396)]("GameController.joinRoom", t)
                    }
                }
                ))
            }
        }, {
            key: i(441),
            value: function(t) {
                var e = i
                  , n = this;
                a[e(398)]((function() {
                    var r = e;
                    try {
                        var i = new (SFS2X[r(425)]);
                        i[r(446)](r(435), parseInt(t)),
                        n[r(428)].send(new (SFS2X[r(405)])(r(418),i))
                    } catch (t) {
                        console.log(r(401), t)
                    }
                }
                ))
            }
        }, {
            key: i(379),
            value: function(t, e) {
                var n = i
                  , r = this;
                a[n(398)]((function() {
                    var i = n
                      , a = new (SFS2X[i(425)]);
                    a.putInt(i(435), t),
                    a.putBool(i(411), !0),
                    a[i(378)]("slient", e),
                    r[i(428)][i(408)](new SFS2X.ExtensionRequest(i(386),a))
                }
                ))
            }
        }, {
            key: i(385),
            value: function() {
                var t = i;
                this[t(428)][t(408)](new (SFS2X[t(405)])(t(390)))
            }
        }, {
            key: "collectFreeChipV2",
            value: function() {
                var t = i
                  , e = new (SFS2X[t(425)]);
                e[t(378)](t(414), !0),
                this[t(428)][t(408)](new (SFS2X[t(405)])(t(390),e))
            }
        }, {
            key: i(422),
            value: function() {
                var t = i;
                try {
                    return this[t(428)][t(380)][t(406)](t(437))[t(400)]
                } catch (t) {
                    return 0
                }
            }
        }, {
            key: i(404),
            value: function() {
                var t = i;
                try {
                    return this[t(428)][t(380)].name
                } catch (e) {
                    return CyberInstance[t(440)] + ""
                }
            }
        }, {
            key: i(388),
            value: function() {
                var t = i;
                try {
                    return this[t(428)].mySelf[t(406)]("exp")[t(400)]
                } catch (t) {
                    return 0
                }
            }
        }, {
            key: "getLevel",
            value: function() {
                var t = i;
                try {
                    return this[t(428)][t(380)].getVariable(t(448)).value
                } catch (t) {
                    return 1
                }
            }
        }, {
            key: i(429),
            value: function() {
                var t = i;
                try {
                    return this[t(428)][t(380)][t(406)](t(438))[t(400)]
                } catch (t) {
                    return ""
                }
            }
        }, {
            key: i(392),
            value: function() {
                var t = i;
                try {
                    return this[t(428)][t(380)][t(409)]("avatarId") ? this[t(428)][t(380)].getVariable(t(436))[t(400)] : 0
                } catch (t) {
                    return 0
                }
            }
        }, {
            key: "sfs",
            get: function() {
                return this[i(384)]
            },
            set: function(t) {
                this[i(384)] = t
            }
        }],
        n = [{
            key: i(382),
            get: function() {
                return re || (re = new a),
                re
            }
        }, {
            key: i(398),
            value: function(t) {
                var e = i;
                if (s[e(423)]())
                    t();
                else {
                    var n = game[e(443)][e(391)](!0);
                    n[e(399)](100, (function() {
                        s[e(423)]() && (n.stop(),
                        n.destroy(),
                        t())
                    }
                    ), this),
                    n[e(430)]()
                }
            }
        }],
        r = ne,
        e && te(t.prototype, e),
        n && te(t, n),
        Object[r(444)](t, r(415), {
            writable: !1
        }),
        a
    }();
    var ae = oe;
    function oe(t, e) {
        var n = se();
        return (oe = function(t, e) {
            return n[t -= 253]
        }
        )(t, e)
    }
    function se() {
        var t = ["handleOutOfMoney", "#FFFFFF", "__proto__", "13504540xpflEO", "setPrototypeOf", "Cannot call a class as a function", "construct", "debug", "canPlay", "game", "inputEnabled", "configurable", "collectFreeChip", "bind", "openLoadingPopup", "prototype", "collectFreeChipV2", "controller", "State", "setGameSize", "overlay", "3197672GIQLix", "getPrototypeOf", "width", "key", "apply", "advancedTiming", "close", "function", "height", "10760EkJxWx", "renderer", "screenReady", "instance", "roundPixels", "ready", "devEnabled", "2496pjdFCM", "_screenReady", "destroy", "extraCounter", "length", "iterator", "outOfMoney", "defineProperty", "render", "notEnoughMoneyPopup", "writable", "closeLoadingPopup", "text", "loadingPopup", "2244501OmwkZX", "hideContainer", "1213456DewNfd", "create", "Derived constructors may only return object or undefined", "7831647YTxFfh", "call", "innerHeight", "addOnce", "closeOverlay", "6886ASfIur", "image", "symbol", "undefined", "71izBBmv", "open", "time", "ceil", "dailyPack", "this hasn't been initialised - super() hasn't been called", "setOutOfMoney", "valueOf", "scale", "Super expression must either be null or a function", "enumerable", "sham", "layout", "7peSpKR", "events", "min", "overlayTexture", "_controller"];
        return (se = function() {
            return t
        }
        )()
    }
    function ce(t) {
        var e = oe;
        return (ce = e(326) == typeof Symbol && "symbol" == typeof Symbol[e(257)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(326) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(313)] ? n(278) : typeof t
        }
        )(t)
    }
    function ue(t, e) {
        for (var n = oe, r = 0; r < e[n(256)]; r++) {
            var i = e[r];
            i.enumerable = i[n(290)] || !1,
            i[n(309)] = !0,
            "value"in i && (i[n(262)] = !0),
            Object[n(259)](t, i[n(322)], i)
        }
    }
    function he(t, e) {
        var n = oe;
        return (he = Object[n(302)] ? Object.setPrototypeOf.bind() : function(t, e) {
            return t[n(300)] = e,
            t
        }
        )(t, e)
    }
    function le(t, e) {
        var n = oe;
        if (e && ("object" === ce(e) || typeof e === n(326)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(270));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(oe(285));
            return t
        }(t)
    }
    function fe(t) {
        var e = oe;
        return (fe = Object[e(302)] ? Object[e(320)][e(311)]() : function(t) {
            var n = e;
            return t[n(300)] || Object[n(320)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = oe, r = t(); ; )
            try {
                if (479228 == -parseInt(n(280)) / 1 * (parseInt(n(276)) / 2) + -parseInt(n(266)) / 3 + -parseInt(n(268)) / 4 + parseInt(n(328)) / 5 * (parseInt(n(335)) / 6) + -parseInt(n(293)) / 7 * (-parseInt(n(319)) / 8) + -parseInt(n(271)) / 9 + parseInt(n(301)) / 10)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(se);
    const pe = function(t) {
        var e = oe;
        !function(t, e) {
            var n = oe;
            if (typeof e !== n(326) && null !== e)
                throw new TypeError(n(289));
            t.prototype = Object[n(269)](e && e[n(313)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, n(313), {
                writable: !1
            }),
            e && he(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = oe;
            if (typeof Reflect === t(279) || !Reflect[t(304)])
                return !1;
            if (Reflect[t(304)][t(291)])
                return !1;
            if (typeof Proxy === t(326))
                return !0;
            try {
                return Boolean[t(313)][t(287)][t(272)](Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = oe, n = fe(a);
            if (o) {
                var r = fe(this).constructor;
                t = Reflect.construct(n, arguments, r)
            } else
                t = n[e(323)](this, arguments);
            return le(this, t)
        }
        );
        function c() {
            var t = oe;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(oe(303))
            }(this, c),
            s[t(272)](this)
        }
        return n = c,
        i = oe,
        (r = [{
            key: e(267),
            value: function() {}
        }, {
            key: "showContainer",
            value: function() {}
        }, {
            key: "init",
            value: function() {
                var t = e;
                this[t(307)][t(329)].renderSession[t(332)] = !0,
                this[t(330)] = !1,
                CyberInstance[t(334)] && (this.game.time[t(324)] = !0)
            }
        }, {
            key: e(260),
            value: function() {
                var t = e;
                CyberInstance[t(334)] && this[t(307)][t(305)][t(264)](this[t(307)][t(282)].fps || "--", 50, 100, t(299))
            }
        }, {
            key: "shutdown",
            value: function() {
                var t = e;
                this[t(330)] = !1,
                this[t(318)] && (this.overlay = null)
            }
        }, {
            key: e(292),
            value: function() {
                var t = e
                  , n = 1136
                  , r = window.innerWidth / window[t(273)];
                if (r > 1.775) {
                    var i = Math[t(295)](1920, Math.ceil(640 * r));
                    this[t(307)][t(288)][t(317)](i, 640)
                } else if (r < 1.775) {
                    var a = Math[t(295)](750, Math[t(283)](n / r));
                    this[t(307)][t(288)][t(317)](n, a)
                } else
                    this[t(307)][t(288)][t(317)](n, 640)
            }
        }, {
            key: e(298),
            value: function() {
                var t = e;
                if (!0 === CyberInstance[t(258)]) {
                    if (CyberInstance[t(286)](!1),
                    CyberGlobalData[t(284)])
                        return void ie[t(331)][t(314)]();
                    var n = !1;
                    ie[t(331)][t(306)]() ? n = !0 : (this.openLoadingPopup({
                        closeTimer: 1e4
                    }),
                    ie[t(331)][t(310)]()),
                    n && Mt[t(331)][t(333)] && Mt[t(331)][t(255)] < 5 && (this[t(261)] = new qt(this[t(307)]))
                }
            }
        }, {
            key: e(312),
            value: function(t) {
                var n = e;
                this.loadingPopup && this.closeLoadingPopup(),
                this[n(265)] = new g(this[n(307)],t),
                this[n(265)][n(281)]()
            }
        }, {
            key: e(263),
            value: function() {
                var t = e;
                this.loadingPopup && (this[t(265)][t(325)](),
                this[t(265)] = null)
            }
        }, {
            key: "addOverlay",
            value: function(t, n) {
                var r = e;
                if (!this.overlay) {
                    var i = this[r(307)].add[r(277)](0, 0, CyberGlobalData[r(296)]);
                    i[r(308)] = !0,
                    i[r(294)].onInputDown[r(274)](t, n),
                    i[r(321)] = this.game[r(321)],
                    i[r(327)] = this.game[r(327)],
                    i.alpha = .5,
                    this[r(318)] = i
                }
            }
        }, {
            key: e(275),
            value: function() {
                var t = e;
                this.overlay && (this.overlay[t(254)](),
                this.overlay = null)
            }
        }, {
            key: e(315),
            get: function() {
                return this[e(297)]
            },
            set: function(t) {
                this._controller = t
            }
        }, {
            key: e(330),
            get: function() {
                return this[e(253)]
            },
            set: function(t) {
                this[e(253)] = t
            }
        }]) && ue(n[i(313)], r),
        Object[i(259)](n, "prototype", {
            writable: !1
        }),
        c
    }(Phaser[ae(316)]);
    function ye(t, e) {
        var n = ve();
        return (ye = function(t, e) {
            return n[t -= 292]
        }
        )(t, e)
    }
    function de(t) {
        var e = ye;
        return (de = e(305) == typeof Symbol && e(341) == typeof Symbol[e(359)] ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function ve() {
        var t = ["width", "Super expression must either be null or a function", "rw_icon", "createTransition", "bg_popup_medium_484x292", "199544FcBrQu", "enumerable", "sprite", "prototype", "27350bpptMa", "Derived constructors may only return object or undefined", "addTitle", "valueOf", "button_close", "2483285YXXQzR", "undefined", "iterator", "middle", "addContent", "add", "setTextBounds", "bind", "key", "117WCKbpI", "length", "text", "getPrototypeOf", "button_green_197x64", "2806770qcGxSj", "instance", "1047237etpiye", "defineProperty", "addText", "constructor", "addCloseButton", "events", "closeButton", "construct", "click", "2ovbSJV", "Cannot call a class as a function", "function", "onWatchClick", "show", "__proto__", "THONG_BAO", "onInputDown", "height", "addButton", "lang", "make", "72430FWflsP", "writable", "close", "game", "addOnce", "anchor", "playButtonSound", "NOT_ENOUGH_CHIP_TO_CONTINUE2", "#f59eac", "28etfQxV", "buttonText", "homeScreen", "275GIUaiG", "inputEnabled", "value", "normal", "addChild", "call", "create", "setPrototypeOf", "object", "background", "sham", "238518JGjkTo", "this hasn't been initialised - super() hasn't been called", "#ebdac0", "symbol", "sound"];
        return (ve = function() {
            return t
        }
        )()
    }
    function be(t, e) {
        for (var n = ye, r = 0; r < e[n(367)]; r++) {
            var i = e[r];
            i.enumerable = i[n(349)] || !1,
            i.configurable = !0,
            n(329)in i && (i[n(316)] = !0),
            Object.defineProperty(t, i[n(365)], i)
        }
    }
    function me(t, e) {
        var n = ye;
        return (me = Object.setPrototypeOf ? Object.setPrototypeOf[n(364)]() : function(t, e) {
            return t[n(308)] = e,
            t
        }
        )(t, e)
    }
    function ge(t, e) {
        var n = ye;
        if (e && (de(e) === n(335) || typeof e === n(305)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(353));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(ye(339));
            return t
        }(t)
    }
    function we(t) {
        var e = ye;
        return (we = Object[e(334)] ? Object[e(369)][e(364)]() : function(t) {
            var n = e;
            return t[n(308)] || Object[n(369)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = ye, r = t(); ; )
            try {
                if (243443 == parseInt(n(338)) / 1 + -parseInt(n(303)) / 2 * (parseInt(n(294)) / 3) + -parseInt(n(324)) / 4 * (parseInt(n(352)) / 5) + -parseInt(n(292)) / 6 + parseInt(n(357)) / 7 + parseInt(n(348)) / 8 * (parseInt(n(366)) / 9) + -parseInt(n(315)) / 10 * (-parseInt(n(327)) / 11))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(ve);
    const Ie = function(t) {
        var e = ye;
        !function(t, e) {
            var n = ye;
            if (typeof e !== n(305) && null !== e)
                throw new TypeError(n(344));
            t[n(351)] = Object[n(333)](e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && me(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = ye;
            if (typeof Reflect === t(358) || !Reflect[t(301)])
                return !1;
            if (Reflect.construct[t(337)])
                return !1;
            if (typeof Proxy === t(305))
                return !0;
            try {
                return Boolean[t(351)][t(355)][t(332)](Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = ye, n = we(a);
            if (o) {
                var r = we(this)[e(297)];
                t = Reflect[e(301)](n, arguments, r)
            } else
                t = n.apply(this, arguments);
            return ge(this, t)
        }
        );
        function c(t, e) {
            var n, r = ye;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(ye(304))
            }(this, c),
            (n = s[r(332)](this, t, e)).addOverlay(),
            n.addBackground("homeScreen", r(347)),
            n[r(354)](),
            n.addContent(CyberInstance[r(313)][r(322)]),
            n[r(312)](e),
            n.addCloseButton(),
            n[r(346)](),
            n
        }
        return n = c,
        i = ye,
        (r = [{
            key: e(312),
            value: function() {
                var t = e
                  , n = new jt(this[t(318)],0,0,t(326),t(370));
                n.x = this[t(336)][t(343)] / 2 - n[t(343)] / 2,
                n.y = this.background.height - n[t(311)] - 30,
                n[t(296)](CyberInstance[t(313)].NHAN_QUA),
                this[t(336)][t(331)](n),
                n[t(325)][t(320)].setTo(0, .5);
                var r = this.game[t(314)][t(350)](10, 10, t(326), t(345));
                n[t(331)](r),
                r.x = 10,
                n[t(325)].x = r.x + r[t(343)] + 10,
                n[t(302)](this[t(306)], this)
            }
        }, {
            key: "onWatchClick",
            value: function() {
                var t = e;
                Mt[t(293)].ready ? Mt[t(293)][t(307)](Mt.OUT_OFF_MONEY_POSITION) : new M(game,{
                    text: CyberInstance[t(313)].ADS_NOT_READY,
                    buttonText: CyberInstance[t(313)].CLOSE,
                    hideCloseButton: !0
                }),
                this[t(317)]()
            }
        }, {
            key: e(361),
            value: function(t) {
                var n = e
                  , r = this[n(318)].add[n(368)](30, 70, t, {
                    font: APP_FONT,
                    fontSize: 24,
                    fill: n(323),
                    fontWeight: n(330),
                    wordWrap: !0,
                    wordWrapWidth: this.background[n(343)] - 60,
                    align: "center",
                    boundsAlignH: "center",
                    boundsAlignV: n(360)
                });
                r[n(363)](0, 0, this[n(336)][n(343)] - 60, 100),
                this[n(336)].addChild(r)
            }
        }, {
            key: e(354),
            value: function() {
                var t = e
                  , n = this[t(318)][t(362)][t(368)](this.background[t(343)] / 2, 15, CyberInstance[t(313)][t(309)].toUpperCase(), {
                    font: APP_FONT,
                    fontSize: 30,
                    fill: t(340),
                    fontWeight: "bold"
                });
                n[t(320)].setTo(.5, 0),
                this[t(336)].addChild(n)
            }
        }, {
            key: e(298),
            value: function() {
                var t = e
                  , n = this
                  , r = this[t(318)][t(314)][t(350)](0, 0, t(326), t(356));
                r.x = this[t(336)][t(343)] - r[t(343)] / 2 - 10,
                r.y = -12,
                r[t(328)] = !0,
                r[t(299)][t(310)][t(319)]((function() {
                    var e = t;
                    CyberInstance[e(342)][e(321)](),
                    n.close()
                }
                ), this),
                this[t(300)] = r,
                this[t(336)][t(331)](this[t(300)])
            }
        }]) && be(n[i(351)], r),
        Object[i(295)](n, i(351), {
            writable: !1
        }),
        c
    }(_);
    function Se(t) {
        var e = xe;
        return (Se = e(211) == typeof Symbol && "symbol" == typeof Symbol[e(241)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && "function" == typeof Symbol && t[n(242)] === Symbol && t !== Symbol[n(273)] ? "symbol" : typeof t
        }
        )(t)
    }
    function Oe(t, e) {
        for (var n = xe, r = 0; r < e.length; r++) {
            var i = e[r];
            i[n(243)] = i[n(243)] || !1,
            i[n(202)] = !0,
            "value"in i && (i[n(203)] = !0),
            Object.defineProperty(t, i[n(206)], i)
        }
    }
    function ke(t, e) {
        var n = xe;
        return (ke = Object.setPrototypeOf ? Object.setPrototypeOf[n(204)]() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function Ce(t, e) {
        var n = xe;
        if (e && (Se(e) === n(267) || "function" == typeof e))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(249));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t)
    }
    function Pe(t) {
        var e = xe;
        return (Pe = Object[e(217)] ? Object[e(209)][e(204)]() : function(t) {
            var n = e;
            return t[n(248)] || Object[n(209)](t)
        }
        )(t)
    }
    function Te() {
        var t = ["addBackground", "2699553zefVcK", "addTitle", "#f59eac", "1798188RkRYJy", "159720yfdCxO", "2eczNUn", "CLOSE", "defineProperty", "make", "height", "homeScreen", "addContent", "YOU_CAN_GET_MORE_CHIP", "events", "Cannot call a class as a function", "dailyPack", "object", "inputEnabled", "#ffffff", "sham", "openIAP", "sound", "prototype", "replace", "undefined", "sprite", "ready", "click", "anchor", "background", "addChild", "addText", "addButton", "configurable", "writable", "bind", "instance", "key", "NHAN_QUA", "setTextBounds", "getPrototypeOf", "428951WEnQII", "function", "valueOf", "addOnce", "21333285BzwRvR", "apply", "construct", "setPrototypeOf", "2374584bDdoZv", "create", "YOU_GOT_FREE_CHIP2", "coin", "4053860VMVumA", "state", "addOverlay", "onInputDown", "lang", " Chip", "THONG_BAO", "getCurrentState", "addCloseButton", "bg_popup_medium_484x292", "width", "text", "224BaGXoy", "game", "ADS_NOT_READY", "formatCoinWithCommas", "center", "onWatchClick", "setTo", "iterator", "constructor", "enumerable", "add", "#ebdac0", "close", "toUpperCase", "__proto__", "Derived constructors may only return object or undefined"];
        return (Te = function() {
            return t
        }
        )()
    }
    function xe(t, e) {
        var n = Te();
        return (xe = function(t, e) {
            return n[t -= 195]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = xe, r = t(); ; )
            try {
                if (509517 == -parseInt(n(210)) / 1 * (parseInt(n(256)) / 2) + parseInt(n(251)) / 3 + parseInt(n(254)) / 4 + parseInt(n(222)) / 5 + -parseInt(n(255)) / 6 * (-parseInt(n(234)) / 7) + parseInt(n(218)) / 8 + -parseInt(n(214)) / 9)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Te);
    const _e = function(t) {
        var e = xe;
        !function(t, e) {
            var n = xe;
            if (typeof e !== n(211) && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object[n(219)](e && e[n(273)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(258)](t, "prototype", {
                writable: !1
            }),
            e && ke(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = xe;
            if (typeof Reflect === t(275) || !Reflect[t(216)])
                return !1;
            if (Reflect.construct[t(270)])
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean[t(273)][t(212)].call(Reflect[t(216)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = xe, n = Pe(a);
            if (o) {
                var r = Pe(this).constructor;
                t = Reflect[e(216)](n, arguments, r)
            } else
                t = n[e(215)](this, arguments);
            return Ce(this, t)
        }
        );
        function c(t, e) {
            var n, r = xe;
            if (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(xe(265))
            }(this, c),
            (n = s.call(this, t, e))[r(224)](),
            n[r(250)](r(261), r(231)),
            n.addTitle(),
            e[r(266)])
                n[r(262)](CyberInstance[r(226)][r(220)][r(274)]("%s", h[r(237)](e[r(221)]) + r(227)));
            else {
                var i = CyberInstance[r(226)].YOU_GOT_FREE_CHIP[r(274)]("%s", h[r(237)](e[r(221)]) + " Chip");
                n[r(262)](i[r(274)]("%s", 5 - e.sentCount))
            }
            return n.addButton(e),
            n[r(230)](),
            n.createTransition(),
            n
        }
        return n = c,
        i = xe,
        (r = [{
            key: e(201),
            value: function() {
                var t = e
                  , n = new jt(this[t(235)],0,0,"homeScreen","button_green_197x64");
                n.x = this[t(198)].width / 2 - n[t(232)] / 2,
                n.y = this[t(198)][t(260)] - n[t(260)] - 30,
                n[t(200)](CyberInstance[t(226)][t(207)]),
                n[t(196)](this[t(239)], this),
                this[t(198)].addChild(n)
            }
        }, {
            key: "onWatchClick",
            value: function() {
                var t = e;
                Mt.instance[t(195)] ? Mt[t(205)].ready && Mt[t(205)].extraCounter < 5 ? new Ie(game) : game[t(223)][t(229)]()[t(271)]() : new M(game,{
                    text: CyberInstance[t(226)][t(236)],
                    buttonText: CyberInstance[t(226)][t(257)],
                    hideCloseButton: !0
                }),
                this[t(246)]()
            }
        }, {
            key: e(262),
            value: function(t) {
                var n = e
                  , r = this.game[n(259)][n(233)](30, 70, t, {
                    font: APP_FONT,
                    fontSize: 22,
                    fill: n(253),
                    fontWeight: "normal",
                    wordWrap: !0,
                    wordWrapWidth: this[n(198)].width - 60,
                    align: n(238)
                });
                r[n(208)](0, 0, this[n(198)][n(232)] - 60, 100),
                this[n(198)][n(199)](r);
                var i = this[n(235)].make[n(233)](this[n(198)].width / 2, 160, CyberInstance[n(226)][n(263)], {
                    font: APP_FONT,
                    fontSize: 20,
                    fill: n(269),
                    fontWeight: "normal"
                });
                i[n(197)][n(240)](.5, 0),
                this[n(198)][n(199)](i)
            }
        }, {
            key: e(252),
            value: function() {
                var t = e
                  , n = this[t(235)][t(244)][t(233)](this[t(198)].width / 2, 15, CyberInstance[t(226)][t(228)][t(247)](), {
                    font: APP_FONT,
                    fontSize: 30,
                    fill: t(245),
                    fontWeight: "bold"
                });
                n[t(197)][t(240)](.5, 0),
                this.background.addChild(n)
            }
        }, {
            key: e(230),
            value: function() {
                var t = e
                  , n = this
                  , r = this.game[t(259)][t(276)](0, 0, t(261), "button_close");
                r.x = this.background.width - r[t(232)] / 2 - 10,
                r.y = -12,
                r[t(268)] = !0,
                r[t(264)][t(225)][t(213)]((function() {
                    CyberInstance[t(272)].playButtonSound(),
                    n.close()
                }
                ), this),
                this.closeButton = r,
                this[t(198)][t(199)](this.closeButton)
            }
        }]) && Oe(n.prototype, r),
        Object[i(258)](n, "prototype", {
            writable: !1
        }),
        c
    }(_);
    function je(t, e) {
        for (var n = Ee, r = 0; r < e[n(418)]; r++) {
            var i = e[r];
            i[n(454)] = i[n(454)] || !1,
            i[n(399)] = !0,
            n(462)in i && (i[n(355)] = !0),
            Object.defineProperty(t, i[n(468)], i)
        }
    }
    function Re() {
        var t = ["onMessage", "error", "openLoadingPopup", "player", "resumeRoom", "Homescreencontroller.addProfileCoin", "getCoin", "indexOf", "avatarId", "bottomMenuView", "updateLevel", "extraCounter", "29656xGkDTS", "bind", "onUserVariablesUpdate", "canRetry", "dailyGift.getInfo", "user", "errorCode", "Homescreencontroller.handleUpdateChip", "ROOM_NOT_FOUND", "USER_VARIABLES_UPDATE", "sentCount", "iapView", "onExtensionResponse", "getInt", "ads", "instance", "onAdReady", "20600KPYteL", "level", "onAdReward", "ROOM_FULL", "showChatBadge", "configurable", "isEntryPointData", "addEventListener", "handleUpdateChip", "formatCoinWithCommas", "changedVars", "SPIN_POSITION", "type", "send", "SFSEvent", "CLOSE", "dailyPack", "joinGame", "lang", "detail", "updateSpinTimer", "dailyAutoShowEnabled", "dailyCollected", "EXTENSION_RESPONSE", "length", "roomId", "bet", "coin", "refreshSpinTime", "OUT_OFF_MONEY_POSITION", "putLong", "sfs", "code", "1242930DHTtoc", "onReady", "notEnoughMoneyPopup", "collectTime", "screenReady", "handleResumeGameError", "updateProgressBar", "474XEkuNu", "handleSpin", "handleOutOfMoney", "DAILY_POSITION", "ads.rewardedInterstitial", "replace", "updateVideoBadge", "cmd", "230067TIwKER", "8SgIKAA", "getBool", "prototype", "connector", "exp", "defineProperty", "containsKey", "onDailyPackUpdate", "controllerName", "updateCoin", "dispatchEvent", "enumerable", "openSpinPopup", "slient", "increaseSpinCounter", "putBool", "Cannot call a class as a function", "gift.code", "ExtensionRequest", "value", "YOU_GOT_CHIP", "add", "ready", "SFSObject", "getVariable", "key", "WATCH_VIDEO_SUCCESS", "gift.outOfMoney", "1133262XWWEZa", "openDailyPopup", "profileView", "entryPointDataProcessed", "updateAvatarItem", "ads.rewardedExtra", "days", "canPlay", "776530JyNOTc", "getLong", "isItMe", "handleScreenReady", "4rtgrwf", "HomeScreenController", "closeLoadingPopup", "params", "screen", "dailyGift.collect", "11KZhrQb", "socket", "8652HijOAa", "enableNewYearPack", "addProfileCoin", "writable", "handleJoinGameError", "shortenLargeNumber", "success", "spinWatched", "findGame", "putUtfString", "noplay1day", "luckywheels.spin", "friendMode"];
        return (Re = function() {
            return t
        }
        )()
    }
    function Ee(t, e) {
        var n = Re();
        return (Ee = function(t, e) {
            return n[t -= 339]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = Ee, r = t(); ; )
            try {
                if (103509 == parseInt(n(443)) / 1 * (parseInt(n(394)) / 2) + -parseInt(n(442)) / 3 * (-parseInt(n(344)) / 4) + -parseInt(n(340)) / 5 + parseInt(n(434)) / 6 * (parseInt(n(352)) / 7) + parseInt(n(377)) / 8 + -parseInt(n(471)) / 9 + parseInt(n(427)) / 10 * (parseInt(n(350)) / 11))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Re);
    const Be = function() {
        var t, e, n, r = Ee;
        function i(t) {
            var e = Ee;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Ee(459))
            }
            )(this, i),
            this[e(451)] = e(345),
            this[e(348)] = t,
            this[e(425)] = CyberInstance[e(351)],
            this[e(425)][e(401)](SFS2X[e(408)][e(417)], this[e(389)], this),
            this[e(425)][e(401)](SFS2X[e(408)][e(386)], this[e(379)], this),
            Mt[e(392)].onReward[e(464)](this[e(396)], this),
            Mt[e(392)][e(428)][e(464)](this[e(393)], this),
            bt[e(392)].onDailyPackUpdate.add(this[e(450)], this),
            addEventListener("refreshSpinTime", this[e(422)].bind(this)),
            addEventListener(e(354), this[e(354)][e(378)](this))
        }
        return t = i,
        n = Ee,
        (e = [{
            key: r(365),
            value: function() {
                var t = r;
                this[t(431)]() && this.screen[t(374)][t(398)]()
            }
        }, {
            key: r(389),
            value: function(t) {
                var e = r;
                if (this.screenReady())
                    if (t[e(441)] == e(363))
                        this.handleSpin(t[e(347)]);
                    else if (t.cmd == e(411))
                        0 == t[e(347)].getBool(e(358)) && this.handleJoinGameError(t[e(347)]);
                    else if (t.cmd == e(360))
                        this[e(348)].closeLoadingPopup(),
                        1 === t[e(347)].getInt(e(383)) && this.screen.openIAP();
                    else if ("freeChip" == t[e(441)])
                        this[e(402)](t.params);
                    else if (t.cmd == e(470))
                        this[e(436)](t.params);
                    else if ("resumeGameError" == t[e(441)])
                        this[e(432)](t[e(347)]);
                    else if (t[e(441)] == e(381))
                        CyberGlobalData.dailyDays = t.params.getInt(e(477)),
                        CyberGlobalData[e(416)] = t[e(347)][e(444)]("collected"),
                        !CyberGlobalData[e(416)] && CyberGlobalData[e(415)] && this[e(348)][e(374)][e(472)]();
                    else if (t[e(441)] == e(349)) {
                        if (this.screen[e(374)].resetDailyPopup(),
                        t.params[e(444)](e(358))) {
                            CyberGlobalData[e(416)] = !0;
                            var n = t[e(347)].getLong("coin");
                            new M(game,{
                                text: CyberInstance.lang[e(463)][e(439)]("%s", h[e(357)](n)),
                                buttonText: CyberInstance.lang.CLOSE,
                                hideCloseButton: !0
                            })
                        }
                    } else if (t[e(441)] == e(438)) {
                        var i = t[e(347)][e(341)]("coin");
                        new M(game,{
                            text: CyberInstance[e(412)][e(463)].replace("%s", h[e(357)](i)),
                            buttonText: CyberInstance.lang[e(409)],
                            hideCloseButton: !0
                        })
                    }
            }
        }, {
            key: r(450),
            value: function() {
                var t = r;
                this[t(431)]() && this[t(348)][t(353)]()
            }
        }, {
            key: r(432),
            value: function(t) {
                var e = r;
                if (t[e(449)](e(380))) {
                    var n = t[e(390)](e(419));
                    ie.instance[e(369)](n)
                } else
                    this.screen[e(346)]()
            }
        }, {
            key: r(435),
            value: function(t) {
                var e = r;
                t.containsKey("ad") ? (CyberGlobalData[e(359)] = !1,
                Mt[e(392)][e(457)]()) : (CyberGlobalData[e(430)] = 0,
                CyberInstance[e(446)].initHeartBeat()),
                d[e(453)](e(422), CyberGlobalData[e(430)]),
                this.screen[e(374)].spin({
                    value: t[e(390)]("value"),
                    coin: t.getLong("coin"),
                    days: t[e(390)](e(477))
                })
            }
        }, {
            key: r(356),
            value: function(t) {
                var e = r;
                this[e(348)][e(346)]();
                var n = t.getInt(e(383));
                if (t[e(449)](e(420)))
                    0 == n ? M.showNotEnoughMoneyToJoin(t[e(341)](e(420))) : 2 == n && new M(game,{
                        text: CyberInstance[e(412)][e(397)],
                        buttonText: CyberInstance[e(412)][e(409)]
                    });
                else {
                    var i = !!t[e(449)](e(456)) && t[e(444)]("slient");
                    15 == n && !i && new M(game,{
                        text: CyberInstance[e(412)][e(385)],
                        buttonText: CyberInstance[e(412)][e(409)]
                    })
                }
            }
        }, {
            key: r(379),
            value: function(t) {
                var e = r;
                this[e(431)]() && t[e(382)][e(342)] && (-1 != t.changedVars[e(372)](e(447)) && this[e(348)][e(473)][e(433)](t[e(382)].getVariable(e(447))[e(462)], t[e(382)][e(467)](e(395))[e(462)]),
                -1 != t.changedVars[e(372)](e(395)) && this[e(348)].profileView[e(375)](t[e(382)][e(467)]("level")[e(462)]),
                -1 != t[e(404)][e(372)](e(421)) && this[e(348)][e(388)].updateCoin(t[e(382)].getVariable(e(421))[e(462)]),
                -1 != t.changedVars[e(372)]("avatarId") && this[e(348)].profileView[e(475)](t.user[e(467)](e(373)).value))
            }
        }, {
            key: r(422),
            value: function(t) {
                var e = r;
                this.screenReady() && (t[e(413)] && t[e(413)][e(462)] ? this[e(348)].bottomMenuView[e(414)](t[e(413)].value) : this[e(348)][e(374)].updateSpinTimer(0))
            }
        }, {
            key: r(354),
            value: function(t) {
                var e = r;
                if (this.screenReady() && t[e(413)] && t[e(413)][e(462)])
                    try {
                        this[e(348)][e(388)].updateCoin(ie[e(392)][e(371)]() + t.detail[e(462)]),
                        new M(game,{
                            text: CyberInstance[e(412)][e(463)][e(439)]("%s", h.shortenLargeNumber(t[e(413)][e(462)])),
                            buttonText: CyberInstance[e(412)][e(409)],
                            hideCloseButton: !0
                        })
                    } catch (t) {
                        console.log(e(370), t)
                    }
            }
        }, {
            key: r(343),
            value: function() {
                var t = r;
                if (!this[t(474)]) {
                    var e = FBInstant.getEntryPointData();
                    if (e)
                        if (e[t(364)] && e[t(419)] && e.bet) {
                            var n = parseInt(e[t(420)])
                              , i = parseInt(e[t(419)]);
                            ie[t(392)][t(339)](n) && (ie[t(392)].joinPrivateRoom(i, !0),
                            CyberGlobalData[t(415)] = !1)
                        } else if (e.type === t(362)) {
                            var a = new (SFS2X[t(466)]);
                            e.coin ? a[t(424)]("coin", parseInt(e[t(421)])) : a.putLong("coin", 1e6),
                            this[t(425)][t(407)](new (SFS2X[t(461)])("gift.freeChip",a)),
                            CyberGlobalData[t(415)] = !1
                        } else if (e.giftcode)
                            try {
                                var o = e.giftcode + "";
                                if (o[t(418)] >= 8) {
                                    var s = new SFS2X.SFSObject;
                                    s[t(361)](t(426), o),
                                    s[t(458)](t(400), !0),
                                    this[t(425)][t(407)](new (SFS2X[t(461)])(t(460),s)),
                                    CyberGlobalData[t(415)] = !1
                                }
                            } catch (t) {}
                    this.entryPointDataProcessed = !0
                }
                -1 == CyberGlobalData.dailyDays && this[t(425)].send(new (SFS2X[t(461)])(t(381))),
                -1 != CyberGlobalData.lastJoinedRoomId && (this[t(348)][t(367)](),
                setTimeout((function() {
                    ie[t(392)].resumeRoom(CyberGlobalData.lastJoinedRoomId)
                }
                ), 300))
            }
        }, {
            key: r(402),
            value: function(t) {
                var e = r;
                if (t.containsKey(e(421)))
                    try {
                        this[e(348)].closeLoadingPopup(),
                        this.screen.iapView[e(452)](t[e(341)]("total")),
                        new M(game,{
                            text: CyberInstance.lang[e(463)][e(439)]("%s", h[e(357)](t[e(341)](e(421)))),
                            buttonText: CyberInstance[e(412)][e(409)],
                            hideCloseButton: !0
                        })
                    } catch (t) {
                        console.log(e(384), t)
                    }
                else
                    t.containsKey(e(358)) && this.screen.closeLoadingPopup()
            }
        }, {
            key: r(436),
            value: function(t) {
                var e = r;
                this[e(348)][e(346)](),
                t[e(449)](e(410)) ? t[e(449)](e(421)) ? new _e(game,{
                    coin: t[e(390)](e(421)),
                    dailyPack: !0
                }) : !t[e(449)](e(366)) && (CyberGlobalData[e(410)] = 0,
                FBInstant[e(368)].setDataAsync({
                    dailyPack: CyberGlobalData[e(410)]
                })) : t[e(449)](e(421)) && t.containsKey(e(387)) ? new _e(game,{
                    coin: t[e(390)]("coin"),
                    sentCount: t[e(390)]("sentCount")
                }) : Mt[e(392)][e(465)] && Mt[e(392)][e(376)] < 5 && (this[e(348)][e(429)] = new qt(game))
            }
        }, {
            key: r(396),
            value: function(t) {
                var e = r;
                if (t[e(421)])
                    this.sfs.send(new (SFS2X[e(461)])("ads.rewarded")),
                    new M(game,{
                        text: CyberInstance[e(412)][e(469)][e(439)]("%s", h[e(403)](t[e(421)])),
                        buttonText: CyberInstance[e(412)][e(409)],
                        hideCloseButton: !0
                    });
                else if (t[e(406)] == Mt[e(405)])
                    CyberGlobalData.spinWatched = !0,
                    this[e(431)]() && this.screen.bottomMenuView[e(455)]();
                else if (t.type == Mt[e(423)])
                    this[e(425)][e(407)](new SFS2X.ExtensionRequest(e(476))),
                    new M(game,{
                        text: CyberInstance[e(412)].WATCH_VIDEO_SUCCESS.replace("%s", h[e(403)](1e5)),
                        buttonText: CyberInstance.lang[e(409)],
                        hideCloseButton: !0
                    });
                else if (t[e(406)] == Mt[e(437)]) {
                    var n = new (SFS2X[e(466)]);
                    n[e(458)](e(391), !0),
                    this[e(425)][e(407)](new (SFS2X[e(461)])(e(349),n))
                }
            }
        }, {
            key: r(393),
            value: function() {
                var t = r;
                this[t(431)]() && this[t(348)][t(374)][t(440)]()
            }
        }, {
            key: r(431),
            value: function() {
                var t = r;
                return this.screen[t(431)]
            }
        }]) && je(t[n(445)], e),
        Object[n(448)](t, n(445), {
            writable: !1
        }),
        i
    }();
    function Ae(t, e) {
        for (var n = De, r = 0; r < e.length; r++) {
            var i = e[r];
            i[n(331)] = i[n(331)] || !1,
            i[n(337)] = !0,
            "value"in i && (i[n(307)] = !0),
            Object[n(292)](t, i[n(326)], i)
        }
    }
    function De(t, e) {
        var n = Fe();
        return (De = function(t, e) {
            return n[t -= 281]
        }
        )(t, e)
    }
    function Fe() {
        var t = ["start", "getName", "2454wjZswo", "no_avatar", "setTo", "level_bar_inner", "remove", "convertExpToPercent", "1512072vgDxtJ", "5530491LwYkXt", "width", "applyTexture", "icon_star", "defineProperty", "cache", "image", "236sKjHKz", "anchor", "crop", "player", "container", "updateLevel", "load", "424iXKrSH", "avatar", "add", "#FFFFFF", "text", "writable", "height", "shopScreen", "4644040XtIsZj", "alphaMask", "getLevel", "game", "38770cGHcZw", "avatarKey", "checkImageKey", "progressBar", "bitmapData", "maskHeight", "level", "Cannot call a class as a function", "2567112OJnUoF", "level_bar_bg", "create", "onFileComplete", "key", "make", "homeScreen", "getGuserid", "500", "enumerable", "loadTexture", "avatarItem", "Rectangle", "1858386HWnAJw", "visible", "configurable", "instance", "destroy", "events", "hasLoaded", "14GrwMLi", "prototype", "updateProgressBar", "updateAvatarItem", "setText", "scale"];
        return (Fe = function() {
            return t
        }
        )()
    }
    !function(t, e) {
        for (var n = De, r = t(); ; )
            try {
                if (601104 == -parseInt(n(302)) / 1 * (-parseInt(n(281)) / 2) + -parseInt(n(287)) / 3 + -parseInt(n(295)) / 4 * (-parseInt(n(314)) / 5) + -parseInt(n(335)) / 6 + parseInt(n(342)) / 7 * (-parseInt(n(322)) / 8) + parseInt(n(288)) / 9 + parseInt(n(310)) / 10)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Fe);
    const Ne = function() {
        var t, e, n, r = De;
        function i(t) {
            var e = De;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(De(321))
            }
            )(this, i),
            this.state = t,
            this[e(313)] = t[e(313)],
            this[e(299)] = t[e(299)],
            this[e(315)] = "avatar" + ie[e(338)][e(329)](),
            this[e(313)][e(293)][e(316)](this[e(315)]) ? (this[e(303)] = this[e(313)].make[e(294)](15, 15, this.avatarKey),
            this[e(290)]()) : (this[e(303)] = this[e(313)][e(327)][e(294)](15, 15, e(328), e(282)),
            this.avatar[e(289)] = 70,
            this.avatar.height = 70,
            globalStartGameAsyncResolved && (this[e(341)] = !0,
            this.game[e(301)][e(325)][e(304)](this.onFileComplete, this),
            this[e(313)].load.image(this[e(315)], CyberInstance[e(303)]),
            this.game[e(301)][e(348)]())),
            this[e(299)].add(this[e(303)]),
            this.avatarItem = this[e(313)][e(327)].image(50, 50, e(328), e(282)),
            this[e(333)][e(296)].setTo(.5),
            this.avatarItem.visible = !1,
            this[e(299)][e(304)](this.avatarItem);
            var n = ie[e(338)].getAvatarItemId();
            n > 0 && this.game[e(293)][e(316)](e(309)) && (this.avatarItem.loadTexture(e(309), e(303) + n),
            this.avatarItem[e(347)][e(283)](.83),
            this[e(333)][e(336)] = !0);
            var r = this[e(313)][e(304)][e(306)](this[e(303)].x + this[e(303)].width + 25, 18, FBInstant[e(298)][e(349)](), {
                font: APP_FONT,
                fontSize: 20,
                fill: e(305),
                fontWeight: e(330)
            });
            this[e(299)][e(304)](r);
            var a = this[e(299)][e(324)](r.x, 55, e(328), e(291))
              , o = this.game[e(304)].text(a.x + a[e(289)] + 5, a.y - 4, ie[e(338)][e(312)](), {
                font: APP_FONT,
                fontSize: 20,
                fill: "#FFFFFF",
                fontWeight: e(330)
            });
            this[e(299)].add(o),
            this.level = o;
            var s = this.container[e(324)](o.x + o.canvas[e(289)] + 10, a.y + 3, "homeScreen", e(323));
            this[e(317)] = this[e(299)][e(324)](s.x + 1, s.y + 1, e(328), e(284)),
            this.maskWidth = this[e(317)].width,
            this.maskHeight = this[e(317)][e(308)],
            this[e(344)](ie[e(338)].getExp(), ie.instance[e(312)]())
        }
        return t = i,
        n = De,
        (e = [{
            key: "updateProgressBar",
            value: function(t, e) {
                var n = De
                  , r = h[n(286)](t, e)
                  , i = new (Phaser[n(334)])(0,0,this.maskWidth / 100 * r,this[n(319)]);
                this[n(317)][n(297)](i)
            }
        }, {
            key: r(300),
            value: function(t) {
                var e = r;
                this[e(320)][e(346)](t)
            }
        }, {
            key: r(325),
            value: function(t, e, n) {
                var i = r;
                n && e == this.avatarKey && this[i(290)]()
            }
        }, {
            key: r(345),
            value: function(t) {
                var e = r
                  , n = this;
                t > 0 && (this[e(313)].cache[e(316)](e(309)) ? (this[e(333)].loadTexture("shopScreen", e(303) + t),
                this[e(333)][e(347)][e(283)](.83),
                this[e(333)][e(336)] = !0) : this[e(313)].time[e(340)][e(304)](2e3, (function() {
                    n[e(345)](t)
                }
                )))
            }
        }, {
            key: r(290),
            value: function() {
                var t = r
                  , e = 70
                  , n = new (Phaser[t(334)])(0,0,e,e)
                  , i = game[t(327)][t(294)](0, 0, "homeScreen", "no_avatar");
                i[t(289)] = e,
                i[t(308)] = e;
                var a = game[t(327)][t(318)]();
                a[t(301)](i),
                i[t(339)]();
                var o = this[t(313)][t(327)][t(318)](e, e);
                o[t(311)](this[t(315)], a, n),
                this[t(303)][t(332)](o),
                this[t(303)][t(289)] = e,
                this.avatar[t(308)] = e
            }
        }, {
            key: r(339),
            value: function() {
                var t = r;
                !0 === this[t(341)] && this[t(313)][t(301)][t(325)][t(285)](this.onFileComplete, this),
                this[t(303)] = null,
                this[t(317)] = null,
                this.level = null
            }
        }]) && Ae(t[n(343)], e),
        Object.defineProperty(t, n(343), {
            writable: !1
        }),
        i
    }();
    function Le(t) {
        var e = Ve;
        return (Le = e(396) == typeof Symbol && e(394) == typeof Symbol[e(405)] ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && e(396) == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function Ge(t, e) {
        for (var n = Ve, r = 0; r < e[n(403)]; r++) {
            var i = e[r];
            i.enumerable = i[n(407)] || !1,
            i.configurable = !0,
            n(383)in i && (i[n(386)] = !0),
            Object[n(423)](t, i[n(382)], i)
        }
    }
    function Me(t, e) {
        var n = Ve;
        return (Me = Object[n(421)] ? Object[n(421)].bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function We(t, e) {
        var n = Ve;
        if (e && ("object" === Le(e) || typeof e === n(396)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(411));
        return ze(t)
    }
    function ze(t) {
        if (void 0 === t)
            throw new ReferenceError(Ve(390));
        return t
    }
    function Ue() {
        var t = ["make", "text", "icon_chip_new", "width", "583832FDvDaP", "key", "value", "updateCoin", "4GEmFZI", "writable", "13xjPpcW", "sham", "12126192ZQxyns", "this hasn't been initialised - super() hasn't been called", "Cannot call a class as a function", "socket", "prototype", "symbol", "coin", "function", "ShopScreen", "mySelf", "#f5c78a", "homeScreen", "11hPHcVh", "undefined", "length", "Super expression must either be null or a function", "iterator", "396ByBdVT", "enumerable", "6ivtVWd", "chip", "valueOf", "Derived constructors may only return object or undefined", "state", "getPrototypeOf", "__proto__", "inited", "8077599hXuupj", "create", "setTo", "apply", "getVariable", "setPrototypeOf", "9040NlqyPF", "defineProperty", "formatCoinWithCommas", "setText", "game", "addChild", "10eiMTub", "6053470Arlnay", "34719iLBlmG", "iapPopup", "2618ogGqBq", "bind", "18087636DVBMmN", "add", "construct", "isConnected", "call"];
        return (Ue = function() {
            return t
        }
        )()
    }
    function Ve(t, e) {
        var n = Ue();
        return (Ve = function(t, e) {
            return n[t -= 374]
        }
        )(t, e)
    }
    function He(t) {
        var e = Ve;
        return (He = Object[e(421)] ? Object[e(413)][e(433)]() : function(t) {
            return t[e(414)] || Object.getPrototypeOf(t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = Ve, r = t(); ; )
            try {
                if (746704 == -parseInt(n(381)) / 1 * (-parseInt(n(385)) / 2) + -parseInt(n(430)) / 3 * (-parseInt(n(406)) / 4) + -parseInt(n(429)) / 5 * (-parseInt(n(408)) / 6) + parseInt(n(432)) / 7 * (parseInt(n(422)) / 8) + parseInt(n(416)) / 9 * (-parseInt(n(428)) / 10) + parseInt(n(401)) / 11 * (-parseInt(n(389)) / 12) + parseInt(n(387)) / 13 * (-parseInt(n(434)) / 14))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Ue);
    const Xe = function(t) {
        var e = Ve;
        !function(t, e) {
            var n = Ve;
            if (typeof e !== n(396) && null !== e)
                throw new TypeError(n(404));
            t[n(393)] = Object[n(417)](e && e[n(393)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, n(393), {
                writable: !1
            }),
            e && Me(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = Ve;
            if (typeof Reflect === t(402) || !Reflect[t(374)])
                return !1;
            if (Reflect[t(374)][t(388)])
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean[t(393)][t(410)][t(376)](Reflect[t(374)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Ve, n = He(a);
            if (o) {
                var r = He(this).constructor;
                t = Reflect.construct(n, arguments, r)
            } else
                t = n[e(419)](this, arguments);
            return We(this, t)
        }
        );
        function c(t) {
            var e, n = Ve;
            if (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Ve(391))
            }(this, c),
            (e = s[n(376)](this, t[n(426)], 0, 24, n(400), n(379))).game[n(435)].existing(ze(e)),
            e.x = e.game[n(380)] / 2 - e[n(380)] / 2,
            e[n(409)] = e[n(426)][n(377)][n(378)](126, 13, "", {
                font: APP_FONT,
                fontSize: 20,
                fill: n(399),
                fontWeight: 400
            }),
            e[n(409)].anchor[n(418)](.5, 0),
            e[n(427)](e[n(409)]),
            CyberInstance.socket[n(375)]) {
                var r = CyberInstance[n(392)][n(398)][n(420)](n(395)).value;
                e[n(384)](h[n(424)](r))
            }
            return e
        }
        return n = c,
        i = Ve,
        (r = [{
            key: "openIAPPopup",
            value: function() {
                var t = Ve;
                ot.instance[t(415)] && this.game[t(412)].start(t(397), !0, !1)
            }
        }, {
            key: e(384),
            value: function(t) {
                var n = e;
                this.chip[n(425)](h[n(424)](t)),
                this[n(431)] && this.iapPopup[n(384)](t)
            }
        }, {
            key: "onAdReward",
            value: function(t) {
                var n = e;
                this[n(431)] && this[n(431)].onAdReward(t)
            }
        }]) && Ge(n[i(393)], r),
        Object[i(423)](n, i(393), {
            writable: !1
        }),
        c
    }(jt);
    function Ye(t) {
        var e = qe;
        return (Ye = e(458) == typeof Symbol && e(484) == typeof Symbol[e(479)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(458) == typeof Symbol && t[n(467)] === Symbol && t !== Symbol[n(483)] ? n(484) : typeof t
        }
        )(t)
    }
    function qe(t, e) {
        var n = Je();
        return (qe = function(t, e) {
            return n[t -= 452]
        }
        )(t, e)
    }
    function Ke(t, e) {
        for (var n = qe, r = 0; r < e[n(468)]; r++) {
            var i = e[r];
            i[n(487)] = i[n(487)] || !1,
            i[n(477)] = !0,
            n(475)in i && (i[n(472)] = !0),
            Object[n(486)](t, i[n(497)], i)
        }
    }
    function Je() {
        var t = ["1036725SNQDGN", "1991684KqDkjx", "onInputDown", "valueOf", "function", "sham", "6CnrxrI", "events", "344NALVci", "playButtonSound", "dispatch", "258881SOYXdg", "allowClick", "constructor", "length", "call", "bind", "undefined", "writable", "checkIMg", "2582448FvXNyx", "value", "atlas", "configurable", "sound", "iterator", "5098505VmWrzq", "removeAll", "onChange", "prototype", "symbol", "Super expression must either be null or a function", "defineProperty", "enumerable", "getPrototypeOf", "__proto__", "11787741TQGXEY", "7064564hRApLa", "setPrototypeOf", "checked", "Derived constructors may only return object or undefined", "uncheckImg", "create", "key", "add", "frameName", "Cannot call a class as a function", "construct", "inputEnabled", "this hasn't been initialised - super() hasn't been called", "loadTexture", "onCheck"];
        return (Je = function() {
            return t
        }
        )()
    }
    function Qe(t, e) {
        var n = qe;
        return (Qe = Object[n(492)] ? Object[n(492)][n(470)]() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function Ze(t, e) {
        var n = qe;
        if (e && ("object" === Ye(e) || typeof e === n(458)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(494));
        return $e(t)
    }
    function $e(t) {
        if (void 0 === t)
            throw new ReferenceError(qe(503));
        return t
    }
    function tn(t) {
        var e = qe;
        return (tn = Object[e(492)] ? Object[e(488)][e(470)]() : function(t) {
            return t[e(489)] || Object.getPrototypeOf(t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = qe, r = t(); ; )
            try {
                if (934109 == -parseInt(n(454)) / 1 + parseInt(n(455)) / 2 + parseInt(n(474)) / 3 + -parseInt(n(491)) / 4 + parseInt(n(480)) / 5 * (-parseInt(n(460)) / 6) + -parseInt(n(465)) / 7 * (-parseInt(n(462)) / 8) + parseInt(n(490)) / 9)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Je);
    const en = function(t) {
        var e = qe;
        !function(t, e) {
            var n = qe;
            if (typeof e !== n(458) && null !== e)
                throw new TypeError(n(485));
            t[n(483)] = Object[n(496)](e && e[n(483)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(486)](t, n(483), {
                writable: !1
            }),
            e && Qe(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = qe;
            if (typeof Reflect === t(471) || !Reflect[t(501)])
                return !1;
            if (Reflect[t(501)][t(459)])
                return !1;
            if (typeof Proxy === t(458))
                return !0;
            try {
                return Boolean[t(483)][t(457)][t(469)](Reflect[t(501)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = qe, n = tn(a);
            if (o) {
                var r = tn(this)[e(467)];
                t = Reflect.construct(n, arguments, r)
            } else
                t = n.apply(this, arguments);
            return Ze(this, t)
        }
        );
        function c(t, e, n, r, i, a) {
            var o, u = qe;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(qe(500))
            }(this, c),
            (o = s.call(this, t, e, n, r, i))[u(476)] = r,
            o[u(473)] = i,
            o.uncheckImg = a,
            o.inputEnabled = !0,
            o[u(461)][u(456)][u(498)](o[u(453)], $e(o)),
            o.onChange = new Phaser.Signal,
            o[u(466)] = !1,
            o
        }
        return n = c,
        i = qe,
        (r = [{
            key: "disableClick",
            value: function() {
                var t = qe;
                this[t(502)] = !1,
                this[t(461)].onInputDown[t(481)]()
            }
        }, {
            key: e(453),
            value: function() {
                var t = e
                  , n = this;
                !this.allowClick && (this.allowClick = !0,
                this[t(499)] == this.checkIMg ? (this[t(452)](this.atlas, this[t(495)]),
                this[t(482)][t(464)](!1, this)) : (this[t(452)](this.atlas, this[t(473)]),
                this.onChange[t(464)](!0, this)),
                CyberInstance[t(478)][t(463)](),
                setTimeout((function() {
                    n.allowClick = !1
                }
                ), 300))
            }
        }, {
            key: e(493),
            get: function() {
                var t = e;
                return this.frameName === this[t(473)]
            },
            set: function(t) {
                var n = e;
                t ? this[n(452)](this.atlas, this[n(473)]) : this[n(452)](this[n(476)], this.uncheckImg)
            }
        }]) && Ke(n.prototype, r),
        Object[i(486)](n, i(483), {
            writable: !1
        }),
        c
    }(Phaser.Sprite);
    function nn(t) {
        var e = rn;
        return (nn = e(367) == typeof Symbol && "symbol" == typeof Symbol[e(385)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(367) == typeof Symbol && t[n(340)] === Symbol && t !== Symbol[n(359)] ? n(376) : typeof t
        }
        )(t)
    }
    function rn(t, e) {
        var n = sn();
        return (rn = function(t, e) {
            return n[t -= 302]
        }
        )(t, e)
    }
    function an(t, e) {
        for (var n = rn, r = 0; r < e[n(375)]; r++) {
            var i = e[r];
            i[n(321)] = i[n(321)] || !1,
            i[n(345)] = !0,
            n(314)in i && (i[n(372)] = !0),
            Object[n(326)](t, i.key, i)
        }
    }
    function on(t, e) {
        var n = rn;
        return (on = Object[n(305)] ? Object[n(305)].bind() : function(t, e) {
            return t[n(363)] = e,
            t
        }
        )(t, e)
    }
    function sn() {
        var t = ["bind", "checkbox", "button_green_175x56", "setTo", "closeButton", "en_US", "square_check", "prototype", "CONFIRM", "anchor", "76714TghxQr", "__proto__", "construct", "5512674aFmmjq", "addText", "function", "height", "7YcRuHF", "addOnce", "background", "writable", "click", "button_close", "length", "symbol", "5QPeTQA", "2780610vBDTfR", "object", "32110663ZFEoVy", "bg_popup_medium_484x292", "2568ZodKaS", "text", "vi_VN", "iterator", "close", "addCloseButton", "3BaFofb", "add", "setPrototypeOf", "enFlag", "valueOf", "310354hBlcMf", "make", "addChild", "sound", "game", "onLanguageChange", "value", "this hasn't been initialised - super() hasn't been called", "setDefaultLanguage", "toUpperCase", "buttonText", "homeScreen", "call", "enumerable", "addOverlay", "getPrototypeOf", "languageCode", "setDataAsync", "defineProperty", "44qCICry", "undefined", "2671264cwlmhW", "width", "Tiếng Việt", "12azKBdy", "createTransition", "Derived constructors may only return object or undefined", "inputEnabled", "26460FYYYQv", "vnFlag", "showCloseButton", "#f5c78a", "constructor", "create", "player", "addFlag", "lang", "configurable", "English", "scale", "onConfirm", "onInputDown", "langCode", "Cannot call a class as a function"];
        return (sn = function() {
            return t
        }
        )()
    }
    function cn(t, e) {
        var n = rn;
        if (e && (nn(e) === n(379) || typeof e === n(367)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(334));
        return un(t)
    }
    function un(t) {
        if (void 0 === t)
            throw new ReferenceError(rn(315));
        return t
    }
    function hn(t) {
        var e = rn;
        return (hn = Object[e(305)] ? Object[e(323)][e(352)]() : function(t) {
            var n = e;
            return t.__proto__ || Object[n(323)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = rn, r = t(); ; )
            try {
                if (896921 == parseInt(n(362)) / 1 + -parseInt(n(308)) / 2 * (-parseInt(n(303)) / 3) + parseInt(n(329)) / 4 * (-parseInt(n(377)) / 5) + -parseInt(n(365)) / 6 * (-parseInt(n(369)) / 7) + -parseInt(n(382)) / 8 * (parseInt(n(336)) / 9) + parseInt(n(378)) / 10 * (-parseInt(n(327)) / 11) + parseInt(n(332)) / 12 * (parseInt(n(380)) / 13))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(sn);
    const ln = function(t) {
        var e = rn;
        !function(t, e) {
            var n = rn;
            if (typeof e !== n(367) && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t[n(359)] = Object.create(e && e[n(359)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(326)](t, n(359), {
                writable: !1
            }),
            e && on(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = rn;
            if (typeof Reflect === t(328) || !Reflect.construct)
                return !1;
            if (Reflect[t(364)].sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype[t(307)][t(320)](Reflect[t(364)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = rn, n = hn(a);
            if (o) {
                var r = hn(this)[e(340)];
                t = Reflect.construct(n, arguments, r)
            } else
                t = n.apply(this, arguments);
            return cn(this, t)
        }
        );
        function c(t, e) {
            var n, r = rn;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(rn(351))
            }
            )(this, c),
            (n = s.call(this, t))[r(324)] = CyberInstance[r(350)],
            n[r(313)] = new Phaser.Signal,
            n[r(322)](),
            n.background = n[r(341)](0, 0, "homeScreen", r(381)),
            n[r(371)].x = n.game[r(330)] / 2 - n[r(371)][r(330)] / 2,
            n[r(371)].y = n.game[r(368)] / 2 - n[r(371)][r(368)] / 2;
            var i = n[r(312)][r(304)][r(383)](n[r(371)][r(330)] / 2, 11, CyberInstance[r(344)].LANGUAGE, {
                font: APP_FONT,
                fontWeight: 700,
                fontSize: 30,
                fill: r(339)
            });
            i[r(361)][r(355)](.5, 0),
            n.background.addChild(i);
            var a = n[r(343)]("en", r(346))
              , o = n.addFlag("vn", r(331));
            a.x = n.background[r(330)] / 2 - (2 * a.width + 50) / 2,
            o.x = a.x + a[r(330)] + 50,
            n[r(306)] = a,
            n[r(337)] = o,
            n.checkbox = n[r(312)][r(309)].sprite(0, a.y + a[r(368)] + 10, r(319), r(358)),
            n[r(353)][r(347)][r(355)](.7),
            n[r(353)].x = "en" == CyberInstance[r(350)] ? n[r(306)].x : n.vnFlag.x,
            n[r(371)][r(310)](n[r(353)]);
            var u = new jt(n[r(312)],0,0,r(319),r(354));
            return u.x = n[r(371)][r(330)] / 2 - u[r(330)] / 2,
            u.y = n[r(371)][r(368)] - u[r(368)] - 15,
            u[r(366)](CyberInstance.lang[r(360)][r(317)]()),
            u[r(373)](n[r(348)], un(n)),
            n[r(371)][r(310)](u),
            e && !0 === e[r(338)] && n[r(302)](),
            n[r(333)](),
            n
        }
        return n = c,
        i = rn,
        (r = [{
            key: "addFlag",
            value: function(t, e) {
                var n = rn
                  , r = this
                  , i = new jt(this[n(312)],0,65,n(319),t);
                return i[n(330)] = 165,
                i[n(368)] = 100,
                i[n(324)] = t,
                i.click((function(t) {
                    var e = n;
                    r[e(324)] = t[e(324)],
                    r[e(353)].x = "en" == r.languageCode ? r[e(306)].x : r[e(337)].x
                }
                )),
                i[n(366)](e),
                i[n(318)].y = "en" == t ? i[n(368)] + 27 : i.height + 31,
                this[n(371)][n(310)](i),
                i
            }
        }, {
            key: "onConfirm",
            value: function() {
                var t = rn;
                if (!gameLocaleInited || CyberInstance[t(350)] != this.languageCode) {
                    var e = "en" == this[t(324)] ? t(357) : t(384);
                    CyberInstance[t(316)](e),
                    this[t(313)].dispatch(),
                    FBInstant[t(342)][t(325)]({
                        gameLocale: e
                    })
                }
                this[t(386)]()
            }
        }, {
            key: e(302),
            value: function() {
                var t = e
                  , n = this
                  , r = this.create(0, 0, t(319), t(374));
                r.x = this.background[t(330)] - r[t(330)] / 2 - 10,
                r.y = -12,
                r[t(335)] = !0,
                r.events[t(349)][t(370)]((function() {
                    CyberInstance[t(311)].playButtonSound(),
                    n.close()
                }
                ), this),
                this[t(371)][t(310)](r),
                this[t(356)] = r
            }
        }]) && an(n[i(359)], r),
        Object[i(326)](n, i(359), {
            writable: !1
        }),
        c
    }(_);
    var fn = gn;
    function pn(t) {
        var e = gn;
        return (pn = e(136) == typeof Symbol && e(147) == typeof Symbol[e(170)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(136) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(141)] ? n(147) : typeof t
        }
        )(t)
    }
    function yn(t, e) {
        for (var n = gn, r = 0; r < e.length; r++) {
            var i = e[r];
            i.enumerable = i.enumerable || !1,
            i[n(172)] = !0,
            n(202)in i && (i[n(154)] = !0),
            Object.defineProperty(t, i[n(168)], i)
        }
    }
    function dn() {
        var t = ["transferCode", "overlay", "hasChanged", "disableClick", "writable", "open", "Tiếng Việt", "Version: ", "checkbox", "square_uncheck", "SETTING", "icon_sound", "restart", "setTo", "height", "Group", "isSoundOn", "21073TDVEIQ", "key", "alpha", "iterator", "text", "configurable", "onInputDown", "icon_language", "bg_popup_setting", "add", "toUpperCase", "events", "width", "#ffffff", "instance", "giftcode", "homeScreen", "click", "onChange", "3307284TtSlOX", "constructor", "createInTransition", "languageEnabled", "background", "bind", "getPrototypeOf", "setPrototypeOf", "lang", "create", "undefined", "GIFT_CODE", "#ebdac0", "call", "anchor", "addCheckBox", "value", "1688jQdqwJ", "SOUND", "createOutTransition", "object", "onCheck", "language", "valueOf", "#ee9dab", "Out", "this hasn't been initialised - super() hasn't been called", "Derived constructors may only return object or undefined", "make", "square_check", "apply", "addText", "Back", "addChild", "inputEnabled", "game", "kill", "9431307uHhUcP", "icon_code", "construct", "defineProperty", "54068TMckBS", "addEntry", "Super expression must either be null or a function", "708294TXpmjZ", "193620kIkyCW", "buttonIcon", "__proto__", "function", "Text", "callAll", "23840UHtlnh", "close", "prototype", "295WdjlOy", "visible", "addOverlay", "langCode", "setting_entry", "symbol", "tween", "sound"];
        return (dn = function() {
            return t
        }
        )()
    }
    function vn(t, e) {
        var n = gn;
        return (vn = Object[n(193)] ? Object[n(193)][n(191)]() : function(t, e) {
            return t[n(135)] = e,
            t
        }
        )(t, e)
    }
    function bn(t, e) {
        var n = gn;
        if (e && (pn(e) === n(206) || typeof e === n(136)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(213));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(gn(212));
            return t
        }(t)
    }
    function mn(t) {
        var e = gn;
        return (mn = Object[e(193)] ? Object[e(192)].bind() : function(t) {
            var n = e;
            return t.__proto__ || Object[n(192)](t)
        }
        )(t)
    }
    function gn(t, e) {
        var n = dn();
        return (gn = function(t, e) {
            return n[t -= 119]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = gn, r = t(); ; )
            try {
                if (925139 == -parseInt(n(167)) / 1 + -parseInt(n(132)) / 2 + parseInt(n(186)) / 3 + -parseInt(n(139)) / 4 * (parseInt(n(142)) / 5) + -parseInt(n(133)) / 6 + -parseInt(n(129)) / 7 * (-parseInt(n(203)) / 8) + -parseInt(n(125)) / 9)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(dn);
    const wn = function(t) {
        var e = gn;
        !function(t, e) {
            var n = gn;
            if (typeof e !== n(136) && null !== e)
                throw new TypeError(n(131));
            t.prototype = Object.create(e && e[n(141)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, n(141), {
                writable: !1
            }),
            e && vn(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = gn;
            if (typeof Reflect === t(196) || !Reflect[t(127)])
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if (typeof Proxy === t(136))
                return !0;
            try {
                return Boolean[t(141)][t(209)][t(199)](Reflect[t(127)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = gn, n = mn(a);
            if (o) {
                var r = mn(this)[e(187)];
                t = Reflect[e(127)](n, arguments, r)
            } else
                t = n[e(216)](this, arguments);
            return bn(this, t)
        }
        );
        function c(t) {
            var e, n = gn;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            )(this, c),
            (e = s[n(199)](this, t))[n(151)] = e[n(144)]();
            var r = e[n(195)](0, 0, "homeScreen", n(175));
            r[n(122)] = !0,
            r.x = e[n(123)][n(179)] - r[n(179)] - 15,
            r.y = e[n(123)][n(164)] / 2 - r[n(164)] / 2;
            var i = e[n(123)][n(214)].text(r[n(179)] / 2, 13, CyberInstance[n(194)][n(160)], {
                font: APP_FONT,
                fill: n(198),
                fontWeight: 700,
                fontSize: 24
            });
            i[n(200)].setTo(.5, 0),
            r[n(121)](i),
            e[n(149)] = e[n(130)](CyberInstance[n(194)][n(204)], n(161)),
            e[n(149)].y = 50,
            e[n(201)](e[n(149)], CyberInstance[n(166)], (function(t) {
                var r = n;
                e[r(152)] = !0,
                CyberInstance[r(166)] = t
            }
            )),
            r.addChild(e[n(149)]),
            e[n(182)] = e[n(130)](CyberInstance.lang[n(197)], n(126)),
            e[n(182)].y = e[n(149)].y + e[n(149)][n(164)] + 10,
            r[n(121)](e.giftcode);
            var a = new jt(e[n(123)],0,0,n(183),"button_green_138x41");
            if (a[n(119)](CyberInstance[n(194)].NHAP[n(177)](), {
                font: APP_FONT,
                fontSize: 20,
                fill: n(180),
                fontWeight: 400
            }),
            a.x = e[n(182)][n(179)] - a.width - 10,
            a.y = e[n(182)][n(164)] / 2 - a[n(164)] / 2,
            a[n(184)]((function() {
                var t = n;
                e.close(),
                V[t(181)][t(155)]()
            }
            )),
            e[n(182)][n(121)](a),
            CyberInstance[n(189)]) {
                e.language = e.addEntry(CyberInstance[n(194)].LANG, n(174)),
                e[n(208)].y = e[n(182)].y + e[n(182)].height + 10,
                r[n(121)](e[n(208)]);
                var o = new jt(e[n(123)],0,0,n(183),"button_green_138x41")
                  , u = "en" == CyberInstance[n(145)] ? "English" : n(156);
                o[n(119)](u[n(177)](), {
                    font: APP_FONT,
                    fontSize: 20,
                    fill: n(180),
                    fontWeight: 400
                }),
                o.x = e[n(208)][n(179)] - o.width - 10,
                o.y = e[n(208)][n(164)] / 2 - o.height / 2,
                o[n(184)]((function() {
                    var r = n;
                    e[r(140)](),
                    new ln(t,{
                        showCloseButton: !0
                    }).onLanguageChange[r(176)]((function() {
                        var e = r;
                        t.state[e(162)]()
                    }
                    ))
                }
                )),
                e[n(208)][n(121)](o)
            }
            var h = e.game.add[n(171)](r[n(179)] / 2, r[n(164)] - 55, "ID: " + CyberInstance.guserid, {
                font: APP_FONT,
                fontSize: 20,
                fill: n(210),
                fontWeight: 400
            });
            h[n(200)].setTo(.5),
            r[n(121)](h);
            var l = e[n(123)][n(176)][n(171)](r[n(179)] / 2, r[n(164)] - 30, n(157) + CyberInstance.version, {
                font: APP_FONT,
                fontSize: 14,
                fill: n(210),
                fontWeight: 400
            });
            return l[n(200)].setTo(.5, 0),
            r[n(121)](l),
            e[n(190)] = r,
            e.createInTransition(),
            e
        }
        return n = c,
        i = gn,
        (r = [{
            key: "addEntry",
            value: function(t, e) {
                var n = gn
                  , r = this[n(195)](0, 0, n(183), n(146))
                  , i = this.create(15, r[n(164)] / 2, n(183), e);
                i[n(200)][n(163)](0, .5),
                r.addChild(i),
                r[n(134)] = i;
                var a = new (Phaser[n(137)])(this[n(123)],80,r.height / 2 + 2,t,{
                    font: APP_FONT,
                    fill: "#edc5b9",
                    fontWeight: 400,
                    fontSize: 22
                });
                if (a.anchor[n(163)](0, .5),
                r[n(121)](a),
                e == n(126) && null != CyberGlobalData[n(150)]) {
                    a[n(200)].setTo(0),
                    a.y = 10;
                    var o = this[n(123)][n(214)].text(80, 40, CyberGlobalData[n(150)], {
                        font: APP_FONT,
                        fontSize: 18,
                        fill: "#2fec0a",
                        fontWeight: 400
                    });
                    r[n(121)](o)
                }
                return r
            }
        }, {
            key: e(201),
            value: function(t, n, r) {
                var i = e
                  , a = new en(this.game,0,t[i(164)] / 2,"homeScreen",i(215),i(159));
                a.x = t.width - a[i(179)] - 10,
                a.anchor[i(163)](0, .5),
                a.checked = n,
                a[i(153)](),
                t[i(121)](a),
                t[i(158)] = a,
                t[i(122)] = !0,
                t[i(178)][i(173)][i(176)]((function(t) {
                    var e = i;
                    t[e(158)][e(207)]()
                }
                ), this),
                a[i(185)][i(176)](r, this)
            }
        }, {
            key: "addOverlay",
            value: function() {
                var t = e
                  , n = this[t(195)](0, 0, CyberGlobalData.overlayTexture);
                return n[t(169)] = .5,
                n[t(122)] = !0,
                n[t(178)][t(173)][t(176)](this[t(140)], this),
                n
            }
        }, {
            key: e(188),
            value: function() {
                var t = e;
                if (this.background) {
                    var n = this.game.width - this[t(190)].width - 15;
                    this.background.x = this[t(123)][t(179)] - 15,
                    this[t(123)][t(176)][t(148)](this[t(190)]).to({
                        x: n
                    }, 500, Phaser.Easing[t(120)][t(211)], !0)
                }
            }
        }, {
            key: e(205),
            value: function() {
                var t = e
                  , n = this;
                if (this[t(190)]) {
                    var r = this[t(123)][t(179)];
                    this[t(123)].add[t(148)](this[t(190)]).to({
                        x: r
                    }, 500, Phaser.Easing[t(120)].Out, !0).onComplete[t(176)]((function() {
                        var e = t;
                        n[e(138)](e(124)),
                        n[e(143)] = !1
                    }
                    ))
                }
            }
        }, {
            key: "open",
            value: function() {
                var t = e;
                0 == this[t(143)] && (this.hasChanged = !1,
                this[t(143)] = !0,
                this.callAll("revive"),
                this[t(188)]())
            }
        }, {
            key: e(140),
            value: function() {
                var t = e;
                1 == this.visible && (this[t(151)][t(124)](),
                this[t(205)]())
            }
        }]) && yn(n.prototype, r),
        Object[i(128)](n, i(141), {
            writable: !1
        }),
        c
    }(Phaser[fn(165)]);
    function In(t) {
        var e = Sn;
        return (In = e(238) == typeof Symbol && "symbol" == typeof Symbol[e(241)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(238) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(265)] ? n(245) : typeof t
        }
        )(t)
    }
    function Sn(t, e) {
        var n = Tn();
        return (Sn = function(t, e) {
            return n[t -= 226]
        }
        )(t, e)
    }
    function On(t, e) {
        for (var n = Sn, r = 0; r < e[n(255)]; r++) {
            var i = e[r];
            i[n(227)] = i[n(227)] || !1,
            i[n(226)] = !0,
            n(251)in i && (i[n(244)] = !0),
            Object[n(266)](t, i[n(256)], i)
        }
    }
    function kn(t, e) {
        var n = Sn;
        return (kn = Object[n(260)] ? Object.setPrototypeOf[n(270)]() : function(t, e) {
            return t[n(261)] = e,
            t
        }
        )(t, e)
    }
    function Cn(t, e) {
        var n = Sn;
        if (e && (In(e) === n(232) || typeof e === n(238)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(234));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(Sn(267));
            return t
        }(t)
    }
    function Pn(t) {
        var e = Sn;
        return (Pn = Object[e(260)] ? Object.getPrototypeOf.bind() : function(t) {
            return t[e(261)] || Object.getPrototypeOf(t)
        }
        )(t)
    }
    function Tn() {
        var t = ["this hasn't been initialised - super() hasn't been called", "3342200xFpAWd", "8709400aTeexG", "bind", "configurable", "enumerable", "valueOf", "distanceBetweenRows", "constructor", "undefined", "object", "638502FYHSQs", "Derived constructors may only return object or undefined", "7696719pIsKtS", "Super expression must either be null or a function", "floor", "function", "7735APGjYv", "call", "iterator", "10OAIlwV", "3018zbyHuO", "writable", "symbol", "42244235KomxDo", "distanceBetweenColumns", "columnNumber", "viewWidth", "construct", "value", "leftDistance", "height", "7jtwPXe", "length", "key", "columnWidth", "Cannot call a class as a function", "addChild", "setPrototypeOf", "__proto__", "width", "1688202tyOsYL", "4FvnNSN", "prototype", "defineProperty"];
        return (Tn = function() {
            return t
        }
        )()
    }
    !function(t, e) {
        for (var n = Sn, r = t(); ; )
            try {
                if (888442 == -parseInt(n(263)) / 1 + parseInt(n(268)) / 2 + -parseInt(n(233)) / 3 * (parseInt(n(264)) / 4) + parseInt(n(239)) / 5 * (-parseInt(n(243)) / 6) + parseInt(n(254)) / 7 * (-parseInt(n(269)) / 8) + parseInt(n(235)) / 9 * (-parseInt(n(242)) / 10) + parseInt(n(246)) / 11)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Tn);
    const xn = function(t) {
        var e = Sn;
        !function(t, e) {
            var n = Sn;
            if ("function" != typeof e && null !== e)
                throw new TypeError(n(236));
            t[n(265)] = Object.create(e && e[n(265)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && kn(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = Sn;
            if (typeof Reflect === t(231) || !Reflect[t(250)])
                return !1;
            if (Reflect[t(250)].sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean[t(265)][t(228)][t(240)](Reflect[t(250)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Sn, n = Pn(a);
            if (o) {
                var r = Pn(this)[e(230)];
                t = Reflect[e(250)](n, arguments, r)
            } else
                t = n.apply(this, arguments);
            return Cn(this, t)
        }
        );
        function c(t, e, n, r, i) {
            var a = Sn;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Sn(258))
            }(this, c),
            s[a(240)](this, t, e, n, r, i)
        }
        return n = c,
        i = Sn,
        (r = [{
            key: "setViewList",
            value: function(t) {
                for (var e = Sn, n = 0; n < t.length; n++) {
                    n % this.columnNumber == 0 ? t[n].x = this[e(252)] : this[e(257)] ? t[n].x = t[n - 1].x + this[e(257)] + this[e(247)] : t[n].x = t[n - 1].x + t[n - 1][e(262)] + this.distanceBetweenColumns;
                    var r = Math[e(237)](n / this[e(248)]);
                    t[n].y = 0 === r ? 0 : t[n - this[e(248)]].y + t[n - this[e(248)]][e(253)] + this[e(229)],
                    this[e(259)](t[n])
                }
            }
        }, {
            key: e(253),
            get: function() {
                return this.viewHeight
            }
        }, {
            key: e(262),
            get: function() {
                return this[e(249)]
            }
        }]) && On(n[i(265)], r),
        Object[i(266)](n, i(265), {
            writable: !1
        }),
        c
    }(Phaser.Sprite);
    function _n() {
        var t = ["5000ohdBsi", "88mEdnPi", "2382GDmWaw", "5425noXiIF", "12294PyoACD", "776160nwVUNQ", "7810680zkRvSW", "355OOPonj", "33lOnAYF", "70915HQeMEQ", "18bOJOXo", "253060lWpgAD"];
        return (_n = function() {
            return t
        }
        )()
    }
    function jn(t, e) {
        var n = _n();
        return (jn = function(t, e) {
            return n[t -= 345]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = jn, r = t(); ; )
            try {
                if (372460 == -parseInt(n(356)) / 1 * (-parseInt(n(351)) / 2) + -parseInt(n(345)) / 3 * (-parseInt(n(348)) / 4) + -parseInt(n(346)) / 5 * (-parseInt(n(347)) / 6) + parseInt(n(352)) / 7 * (parseInt(n(349)) / 8) + -parseInt(n(353)) / 9 + -parseInt(n(354)) / 10 * (parseInt(n(350)) / 11) + -parseInt(n(355)) / 12)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(_n);
    const Rn = {
        AUTO_DETECT_THRESHOLD: 8
    };
    function En(t) {
        var e = Fn;
        return t.x = t.x ? t.x : 0,
        t.y = t.y ? t.y : 0,
        t[e(301)] <= 0 ? console[e(300)](e(294)) : t[e(285)] <= 0 && console.warn(e(311)),
        t
    }
    function Bn(t, e) {
        var n, r, i = Fn;
        return t[i(290)[i(298)]((n = e,
        r = Fn,
        n.charAt(0)[r(293)]() + n[r(309)](1)))] || t[e]
    }
    function An() {
        var t = ["nominal", "onInputUp", "positionDown", "toUpperCase", "PhaserListView: bounds.width <= 0", "AUTO_DETECT_THRESHOLD", "102lezjBd", "20880jNNylD", "concat", "495iEYbMI", "warn", "width", "472262rpcLWr", "1490132ibVdlW", "length", "abs", "anchor", "call", "351472ZJnmeP", "slice", "positionUp", "PhaserListView: bounds.height <= 0", "inputEnabled", "dispatch", "worldPosition", "children", "contains", "3qBspYH", "pivot", "events", "height", "timeUp", "629636WrbTwX", "19060kNqbpv", "2254776uTUyJj"];
        return (An = function() {
            return t
        }
        )()
    }
    function Dn(t, e) {
        var n = Fn
          , r = arguments[n(304)] > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!t)
            return !1;
        for (var i = 0; i < t[n(304)]; i++) {
            var a = t[i];
            if (a) {
                if (e[n(307)](r, a))
                    return a;
                var o = Dn(a[n(315)], e, r);
                if (o)
                    return o
            }
        }
        return !1
    }
    function Fn(t, e) {
        var n = An();
        return (Fn = function(t, e) {
            return n[t -= 282]
        }
        )(t, e)
    }
    function Nn(t, e, n) {
        var r = Fn;
        if (!(n == r(291) && (i = t,
        a = Fn,
        o = Math[a(305)](i[a(292)].x - i[a(310)].x),
        s = Math.abs(i[a(292)].y - i[a(310)].y),
        i[a(286)],
        i.timeDown,
        o > Rn[a(295)] || s > Rn.AUTO_DETECT_THRESHOLD))) {
            var i, a, o, s, c = Dn(e, (function(e) {
                var n = r
                  , i = e[n(314)]
                  , a = e[n(306)]
                  , o = e[n(283)]
                  , s = e[n(301)]
                  , c = e[n(285)]
                  , u = e.scale
                  , h = i.x - (a ? a.x * s : 0) - o.x * u.x
                  , l = i.y - (a ? a.y * c : 0) - o.y * u.y;
                return e[n(312)] && new Phaser.Rectangle(h,l,e[n(301)],e[n(285)])[n(316)](t.x, t.y)
            }
            ));
            return c && c[r(284)] && c[r(284)][n] && c.events[n][r(313)] && c[r(284)][n][r(313)](c, t, !0),
            c
        }
    }
    function Ln() {
        var t = ["graphics", "8NPSAlm", "onAdded", "options", "tweenToPosition", "Signal", "grp", "remove", "game", "prototype", "scroller", "padding", "indexOf", "Cannot call a class as a function", "children", "setTo", "alpha", "drawRect", "bounds", "getChildAt", "kill", "registerClickables", "dispatch", "16928300VkRrdO", "removeAll", "dispose", "55203hiEeWw", "push", "337IzkpNW", "49iJPZBF", "autocull", "group", "3086TtpoTu", "3951999rFFhDk", "cull", "setPosition", "_setPosition", "items", "394806IuagFp", "beginFill", "moveToPosition", "length", "mask", "assign", "_addMask", "740205IBjxai", "tweenToItem", "writable", "configurable", "destroy", "height", "events", "addChild", "moveToItem", "position", "direction", "enumerable", "addMultiple", "set", "getPositionByItemIndex", "add", "key", "parent", "width", "forEach", "4947696oXUJaa"];
        return (Ln = function() {
            return t
        }
        )()
    }
    function Gn(t, e) {
        if (!(t instanceof e))
            throw new TypeError(Wn(332))
    }
    function Mn(t, e) {
        for (var n = Wn, r = 0; r < e.length; r++) {
            var i = e[r];
            i[n(309)] = i.enumerable || !1,
            i[n(301)] = !0,
            "value"in i && (i[n(300)] = !0),
            Object.defineProperty(t, i[n(314)], i)
        }
    }
    function Wn(t, e) {
        var n = Ln();
        return (Wn = function(t, e) {
            return n[t -= 295]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = Fn, r = t(); ; )
            try {
                if (258124 == parseInt(n(302)) / 1 + -parseInt(n(308)) / 2 + parseInt(n(282)) / 3 * (-parseInt(n(287)) / 4) + parseInt(n(288)) / 5 * (-parseInt(n(296)) / 6) + -parseInt(n(303)) / 7 + parseInt(n(289)) / 8 + -parseInt(n(299)) / 9 * (-parseInt(n(297)) / 10))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(An),
    function(t, e) {
        for (var n = Wn, r = t(); ; )
            try {
                if (348038 == parseInt(n(347)) / 1 * (-parseInt(n(351)) / 2) + -parseInt(n(345)) / 3 * (parseInt(n(320)) / 4) + -parseInt(n(298)) / 5 + -parseInt(n(357)) / 6 * (parseInt(n(348)) / 7) + -parseInt(n(318)) / 8 + parseInt(n(352)) / 9 + parseInt(n(342)) / 10)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Ln);
    var zn = {
        direction: "y",
        autocull: !0,
        padding: 10
    }
      , Un = function() {
        var t, e, n = Wn;
        function r(t, e, n) {
            var i = Wn
              , a = arguments[i(360)] > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            Gn(this, r),
            this[i(327)] = t,
            this.parent = e,
            this[i(337)] = n,
            this.o = this[i(322)] = Object[i(296)]({}, zn, a),
            this[i(356)] = [],
            "y" == this.o[i(308)] ? this.p = {
                xy: "y",
                wh: i(303)
            } : this.p = {
                xy: "x",
                wh: i(316)
            },
            this[i(325)] = this[i(327)][i(313)][i(350)](e),
            this.grp[i(307)][i(311)](n.x, n.y),
            this[i(304)] = {
                onAdded: new (Phaser[i(324)])
            },
            this.position = 0,
            a.disableMask || (this[i(325)][i(295)] = this[i(297)](n))
        }
        return t = r,
        e = [{
            key: "add",
            value: function(t) {
                var e = Wn;
                this.items[e(346)](t);
                var n = 0;
                if (this.grp[e(333)].length > 0) {
                    var r = this[e(325)][e(338)](this.grp.children.length - 1);
                    n = r[this.p.xy] + Bn(r, this.p.wh) + this.o[e(330)]
                }
                return t[this.p.xy] = n,
                this[e(325)][e(305)](t),
                this[e(360)] = n + Bn(t, this.p.wh),
                this[e(304)][e(321)][e(341)](this[e(360)] - this[e(337)][this.p.wh]),
                t
            }
        }, {
            key: n(310),
            value: function() {
                for (var t = n, e = arguments[t(360)], r = new Array(e), i = 0; i < e; i++)
                    r[i] = arguments[i];
                r[t(317)](this[t(313)], this)
            }
        }, {
            key: "remove",
            value: function(t) {
                var e = n
                  , r = 0
                  , i = 0;
                if (this[e(325)].children[e(360)] > 0) {
                    var a = this[e(325)][e(338)](this[e(325)].children[e(360)] - 1);
                    i = Bn(a, this.p.wh),
                    r = a[this.p.xy] + i + this.o.padding
                }
                t[e(302)](),
                this[e(325)].removeChild(t);
                var o = this.items[e(331)](t);
                if (-1 != o)
                    return this[e(356)].splice(o, 1),
                    this.length = r - i,
                    this[e(304)][e(321)][e(341)](this[e(360)] - this[e(337)][this.p.wh]),
                    t
            }
        }, {
            key: "removeLast",
            value: function() {
                var t = n;
                if (this[t(325)].children[t(360)] > 0) {
                    var e = this.grp[t(338)](this[t(325)][t(333)][t(360)] - 1);
                    this[t(326)](e)
                }
            }
        }, {
            key: n(302),
            value: function() {
                var t = n;
                null != this[t(304)] && (this.events[t(321)][t(344)](),
                this[t(304)] = null),
                null !== this[t(325)] && (this[t(325)].destroy(),
                this[t(325)] = null),
                this.game = null,
                this[t(315)] = null,
                this.items = null
            }
        }, {
            key: n(343),
            value: function() {
                var t = n;
                if (null !== this[t(325)]) {
                    for (; this[t(325)].children[t(360)] > 0; )
                        this.remove(this[t(325)][t(333)][0]);
                    this[t(325)].removeAll()
                }
                this[t(356)] = []
            }
        }, {
            key: n(353),
            value: function() {
                for (var t = n, e = [], r = 0; r < this[t(356)].length; r++) {
                    var i = this[t(356)][r];
                    i[this.p.xy] + Bn(i, this.p.wh) + this[t(325)][this.p.xy] < this[t(337)][this.p.xy] || i[this.p.xy] + this[t(325)][this.p.xy] > this.bounds[this.p.xy] + this.bounds[this.p.wh] ? i[t(339)]() : (i.revive(),
                    e[t(346)](i))
                }
                this[t(329)][t(340)](e)
            }
        }, {
            key: "getCurrentIndex",
            value: function() {
                for (var t = n, e = 0, r = 0; r < this.items[t(360)]; r++) {
                    var i = this[t(356)][r];
                    if (i[this.p.xy] + Bn(i, this.p.wh) + this[t(325)][this.p.xy] < this.bounds[this.p.xy])
                        ;
                    else if (!(i[this.p.xy] + this[t(325)][this.p.xy] > this[t(337)][this.p.xy] + this[t(337)][this.p.wh])) {
                        e = r;
                        break
                    }
                }
                return e
            }
        }, {
            key: n(312),
            value: function(t) {
                return -this[n(356)][t][this.p.xy]
            }
        }, {
            key: n(354),
            value: function(t) {
                this[n(359)](t)
            }
        }, {
            key: n(359),
            value: function(t) {
                var e = n;
                this.scroller[e(334)](t)
            }
        }, {
            key: n(306),
            value: function(t) {
                var e = n;
                this[e(329)][e(334)](this[e(312)](t))
            }
        }, {
            key: n(323),
            value: function(t) {
                var e = n
                  , r = arguments[e(360)] > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                this[e(329)].tweenTo(r, t)
            }
        }, {
            key: n(299),
            value: function(t) {
                var e = n
                  , r = arguments[e(360)] > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                this[e(329)].tweenTo(r, this[e(312)](t))
            }
        }, {
            key: n(355),
            value: function(t) {
                var e = n;
                this[e(307)] = t,
                this[e(325)][this.p.xy] = this[e(337)][this.p.xy] + t,
                this.o[e(349)] && this[e(353)]()
            }
        }, {
            key: n(297),
            value: function(t) {
                var e = n
                  , r = this[e(327)][e(313)][e(319)](0, 0, this[e(315)]);
                return r[e(358)](16711680)[e(336)](t.x, t.y, t[e(316)], t[e(303)]),
                r[e(335)] = 0,
                r
            }
        }],
        e && Mn(t[Wn(328)], e),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        r
    }();
    function Vn() {
        var t = ["1456595KsHzAR", "round", "45573LFOSWo", "157969EiVJAH", "1976784ySulYu", "6HlcerN", "114paDLBw", "16139565QswFjR", "3992576DmwTEi", "62192HkSrhC"];
        return (Vn = function() {
            return t
        }
        )()
    }
    function Hn(t, e) {
        var n = Vn();
        return (Hn = function(t, e) {
            return n[t -= 413]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = Hn, r = t(); ; )
            try {
                if (251310 == parseInt(n(421)) / 1 * (parseInt(n(417)) / 2) + -parseInt(n(414)) / 3 + -parseInt(n(416)) / 4 + -parseInt(n(422)) / 5 + parseInt(n(418)) / 6 * (-parseInt(n(415)) / 7) + -parseInt(n(420)) / 8 + parseInt(n(419)) / 9)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Vn);
    const Xn = {
        nearestMultiple: function(t, e) {
            return Math[Hn(413)](t / e) * e
        },
        scaleBetween: function(t, e, n) {
            return t + (e - t) * n
        },
        percentageBetween2: function(t, e, n) {
            return (t - e) / (n - e)
        }
    };
    function Yn() {
        var t = ["28CzoTYf", "registerClickables", "old", "enabled", "duration", "add", "step", "acc", "down", "time", "remove", "scrollObject", "multiplier", "_calculateDuration", "configurable", "forward", "target", "move", "_updateMinMax", "diff", "addMoveCallback", "30266yrszKk", "direction", "length", "14637711MbNLlj", "dispatchValues", "from", "speedLimit", "removeListeners", "writable", "addListeners", "2313tVGDWO", "pow", "timeUp", "timeDown", "handleUp", "onInputUp", "hasOwnProperty", "onComplete", "tweens", "destroyed", "tweenTo", "destroy", "Easing", "events", "Signal", "onSwipe", "_addLimits", "handleComplete", "577416znkHmd", "isScrolling", "Point", "_addSwiping", "pendingDelete", "cancel", "dispose", "requested", "minDuration", "_requestDiff", "backward", "_addSnapping", "handleMove", "offsetThreshold", "deleteMoveCallback", "maxOffset", "enable", "disable", "stop", "infinite", "init", "onUpdateCallback", "setTo", "maskLimits", "maxAcceleration", "56620qPKUfq", "total", "nearestMultiple", "accelerationT", "assign", "172341niXGPR", "swipeEnabled", "3120vhxtjO", "enumerable", "value", "snapStep", "wrap", "19JWPEgx", "136qRGmgz", "handleDown", "tween", "previousTotal", "2676IaahZR", "dispatch", "Math", "flickTimeThreshold", "acceleration", "isTweening", "isRunning", "abs", "Out", "pause", "percent", "handleUpdate", "_addMomentum", "Quartic", "percentageBetween2", "inputEnabled", "tweenScroll", "209046YiRYEZ", "start", "setFromTo", "defineProperty", "current", "clickables", "input", "clickObject", "onInputDown", "onInputMove", "game", "min", "options", "isDown", "max", "prototype", "6575DCcBGE"];
        return (Yn = function() {
            return t
        }
        )()
    }
    function qn(t, e) {
        var n = Yn();
        return (qn = function(t, e) {
            return n[t -= 154]
        }
        )(t, e)
    }
    var Kn = qn;
    function Jn(t, e, n) {
        return e in t ? Object[qn(230)](t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
    function Qn(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function Zn(t, e) {
        for (var n = qn, r = 0; r < e[n(267)]; r++) {
            var i = e[r];
            i[n(201)] = i[n(201)] || !1,
            i[n(258)] = !0,
            n(202)in i && (i[n(273)] = !0),
            Object[n(230)](t, i.key, i)
        }
    }
    !function(t, e) {
        for (var n = qn, r = t(); ; )
            try {
                if (748267 == -parseInt(n(205)) / 1 * (parseInt(n(265)) / 2) + parseInt(n(227)) / 3 * (parseInt(n(244)) / 4) + -parseInt(n(243)) / 5 * (parseInt(n(200)) / 6) + parseInt(n(168)) / 7 * (parseInt(n(206)) / 8) + parseInt(n(275)) / 9 * (parseInt(n(193)) / 10) + parseInt(n(268)) / 11 + parseInt(n(210)) / 12 * (-parseInt(n(198)) / 13))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Yn);
    var $n = new (Phaser[Kn(170)])
      , tr = {
        from: 0,
        to: 200,
        direction: "y",
        momentum: !1,
        snapping: !1,
        bouncing: !1,
        deceleration: .5,
        overflow: 20,
        snapStep: 10,
        emitMoving: !1,
        duration: 2,
        speedLimit: 3,
        flickTimeThreshold: 100,
        offsetThreshold: 30,
        acceleration: .5,
        accelerationT: 250,
        maxAcceleration: 4,
        time: {},
        multiplier: 1,
        swipeEnabled: !1,
        swipeThreshold: 5,
        swipeTimeThreshold: 250,
        minDuration: .5,
        addListeners: !0
    }
      , er = function() {
        var t, e, n, r = Kn;
        function i(t, e) {
            var n = qn
              , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , a = arguments[n(267)] > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            Qn(this, i),
            this[n(237)] = t,
            this[n(234)] = e,
            this.maskLimits = r,
            this.o = this.options = Object[n(197)]({}, tr, a),
            this[n(262)](),
            this[n(269)] = {
                step: 0,
                total: 0,
                percent: 0
            },
            this[n(274)](),
            this[n(232)] = [],
            this[n(240)] = !1,
            this[n(169)] = !1,
            this.scrollObject = {},
            this[n(188)](),
            this[n(226)] = this[n(237)].add[n(208)](this[n(255)]).to({}, 0, Phaser.Easing[n(223)][n(218)]),
            this[n(226)][n(189)](this[n(221)], this),
            this[n(226)].onComplete[n(249)](this[n(167)], this)
        }
        return t = i,
        n = qn,
        (e = [{
            key: "destroy",
            value: function() {
                var t = qn;
                this[t(226)][t(186)](),
                this.removeListeners(),
                this[t(234)][t(161)](),
                this[t(232)] = null,
                this[t(239)] = this.o = null,
                this[t(191)] = null,
                this.enabled = !1,
                this[t(237)] = null,
                this.dispatchValues = null,
                this[t(240)] = null,
                this[t(260)] = null,
                this[t(159)] = !0
            }
        }, {
            key: r(274),
            value: function() {
                var t = r;
                this[t(163)] = {
                    onUpdate: new (Phaser[t(164)]),
                    onInputUp: new (Phaser[t(164)]),
                    onInputDown: new Phaser.Signal,
                    onInputMove: new (Phaser[t(164)]),
                    onComplete: new (Phaser[t(164)]),
                    onSwipe: new (Phaser[t(164)])
                },
                this.o[t(274)] && (this[t(234)][t(225)] = !0,
                this[t(234)][t(163)][t(235)].add(this[t(207)], this),
                this[t(234)].events[t(155)][t(249)](this.handleUp, this))
            }
        }, {
            key: r(272),
            value: function() {
                var t = r;
                for (var e in this.o[t(274)] && (this[t(234)][t(163)][t(235)][t(254)](this[t(207)], this),
                this[t(234)][t(163)][t(155)][t(254)](this[t(154)], this)),
                this[t(163)])
                    this[t(163)][t(156)](e) && this[t(163)][e][t(174)]()
            }
        }, {
            key: r(184),
            value: function() {
                this[r(247)] = !0
            }
        }, {
            key: r(185),
            value: function() {
                this.enabled = !1
            }
        }, {
            key: r(188),
            value: function() {
                var t = r;
                this[t(255)][this.o[t(266)]] = this.o.from,
                this[t(183)] = this[t(191)][this.o[t(266)]] * this.o[t(271)],
                this[t(184)]()
            }
        }, {
            key: "reset",
            value: function() {
                var t = r;
                this.tweenScroll[t(219)](),
                this.o.multiplier = 1,
                this[t(188)]()
            }
        }, {
            key: r(229),
            value: function(t, e) {
                this.o.from = t,
                this.o.to = e,
                this._updateMinMax()
            }
        }, {
            key: r(215),
            value: function() {
                var t = r;
                return this[t(226)][t(216)]
            }
        }, {
            key: r(245),
            value: function(t) {
                this[r(232)] = t
            }
        }, {
            key: r(207),
            value: function(t, e) {
                var n = r;
                this[n(247)] && (this.isDown = !0,
                this[n(260)] = this[n(175)] = this[n(255)][this.o.direction],
                this.o.time[n(252)] = e[n(278)],
                this.o[n(274)] && this[n(237)][n(233)][n(264)](this[n(180)], this),
                this[n(215)]() && this.o[n(253)].down - this.o[n(253)].up < this.o.accelerationT ? this.o[n(256)] += this.o[n(214)] : this.o[n(256)] = 1,
                this.tweenScroll[n(186)](),
                this[n(226)][n(172)] = !1,
                Nn(e, this[n(232)], n(235)),
                this.events.onInputDown[n(211)](t, e))
            }
        }, {
            key: r(180),
            value: function(t, e, n) {
                var i = r;
                this[i(247)] && (this.isScrolling = !0,
                $n.set(e, n),
                this[i(263)] = this.old - $n[this.o.direction],
                this[i(263)] = this[i(177)](this.diff, this.target, this[i(238)], this[i(241)], this.o.overflow),
                this[i(260)] -= this[i(263)],
                this[i(246)] = $n[this.o[i(266)]],
                this.o.time.move = this[i(237)].time[i(253)],
                this.acc = Math[i(238)](Math[i(217)](this[i(263)] / 30), this.o[i(192)]),
                this[i(255)][this.o[i(266)]] = this[i(260)],
                this[i(221)](),
                this.o.emitMoving && this[i(163)][i(236)][i(211)](t, e, n))
            }
        }, {
            key: r(154),
            value: function(t, e) {
                var n = r;
                this[n(240)] = !1,
                this.o[n(274)] && this[n(237)][n(233)][n(182)](this.handleMove, this),
                this.o.time.up = e[n(277)],
                this.o[n(253)].up - this.o[n(253)].down > this.o[n(196)] && (this.o[n(256)] = 1);
                var i = {
                    duration: .5,
                    target: this.target
                };
                this.o.bouncing || (i[n(248)] = .01),
                !this.o[n(187)] && this[n(255)][this.o[n(266)]] > this[n(241)] ? (this[n(260)] = this[n(241)],
                this.tweenTo(i[n(248)], this[n(260)])) : !this.o[n(187)] && this[n(255)][this.o[n(266)]] < this[n(238)] ? (this[n(260)] = this[n(238)],
                this[n(160)](i[n(248)], this[n(260)])) : (this[n(222)](i),
                this[n(171)](i, e),
                this[n(179)](i),
                this._addLimits(i),
                this._calculateDuration(i),
                this[n(160)](i[n(248)], i[n(260)])),
                Nn(e, this[n(232)], n(155)),
                this.events[n(155)][n(211)](t, e, Nn)
            }
        }, {
            key: r(222),
            value: function(t) {
                var e = r;
                if (!this.o.momentum)
                    return t.target;
                var n = Math[e(276)](this[e(251)], 2) * this.maskLimits[this.o[e(266)]];
                return n = Math[e(238)](this.maxOffset, n),
                n = this[e(263)] > 0 ? -this.o[e(256)] * n : this.o[e(256)] * n,
                this.o[e(253)].up - this.o.time[e(261)] < this.o[e(213)] && 0 !== n && Math[e(217)](n) > this.o[e(181)] && (t[e(260)] += n),
                t
            }
        }, {
            key: r(171),
            value: function(t, e) {
                var n = r
                  , i = Math[n(217)](this[n(252)] - this[n(231)]);
                if (this.o[n(199)] && this.o[n(253)].up - this.o[n(253)][n(252)] < this.o.swipeTimeThreshold && i > this.o.swipeThreshold) {
                    var a = e[this.o.direction] < this[n(252)] ? n(259) : n(178);
                    a == n(259) ? t[n(260)] -= this.o.snapStep / 2 : t[n(260)] += this.o[n(203)] / 2,
                    this.events[n(165)][n(211)](a)
                }
                return t
            }
        }, {
            key: r(179),
            value: function(t) {
                var e = r;
                return this.o.snapping ? (t[e(260)] = Xn[e(195)](t.target, this.o[e(203)]),
                t) : t
            }
        }, {
            key: r(166),
            value: function(t) {
                var e = r;
                return this.o.infinite || (t[e(260)] = Math.max(t.target, this.min),
                t[e(260)] = Math[e(238)](t.target, this[e(241)])),
                t
            }
        }, {
            key: r(257),
            value: function(t) {
                var e = r
                  , n = Math[e(217)](t.target - this[e(255)][this.o[e(266)]]);
                return t.duration = this.o[e(248)] * n / this[e(183)],
                t[e(248)] = Math[e(241)](this.o[e(176)], t[e(248)]),
                t
            }
        }, {
            key: "_requestDiff",
            value: function(t, e, n, r, i) {
                return this.o.infinite || (e > r ? t *= (r + i - e) / i : e < n && (t *= -(n - i - e) / i)),
                t
            }
        }, {
            key: "tweenToSnap",
            value: function(t, e) {
                var n = r
                  , i = this.o[n(270)] - this.o[n(203)] * e;
                this[n(160)](t, i)
            }
        }, {
            key: r(160),
            value: function(t, e) {
                var n = r;
                if (0 === t)
                    return this[n(190)](e);
                Jn({}, this.o.direction, e),
                e > this.max && (e = this[n(241)]),
                e < this[n(238)] && (e = this[n(238)]),
                this[n(226)][n(186)](),
                this.game[n(158)][n(254)](this[n(226)]),
                this.tweenScroll = this[n(237)][n(249)][n(208)](this[n(255)]).to(Jn({}, this.o[n(266)], e), 1e3 * t, Phaser[n(162)][n(223)][n(218)]),
                this[n(226)][n(189)](this.handleUpdate, this),
                this.tweenScroll[n(157)][n(249)](this[n(167)], this),
                this[n(226)][n(228)]()
            }
        }, {
            key: r(173),
            value: function() {
                this[r(240)] = !1
            }
        }, {
            key: "setTo",
            value: function(t) {
                var e = r;
                t > this[e(241)] && (t = this.max),
                t < this[e(238)] && (t = this[e(238)]),
                this.scrollObject[this.o[e(266)]] = t,
                this[e(226)][e(186)](),
                this[e(221)](),
                this[e(167)]()
            }
        }, {
            key: r(221),
            value: function() {
                var t = r;
                if (this[t(247)]) {
                    this.o[t(187)] ? this[t(269)][t(194)] = Phaser[t(212)][t(204)](this[t(255)][this.o[t(266)]], this.min, this[t(241)]) : this[t(269)][t(194)] = this[t(255)][this.o[t(266)]];
                    var e = this[t(269)][t(194)] - this[t(209)];
                    e < -this.length / 2 ? e += this[t(267)] : e > this[t(267)] / 2 && (e -= this.length),
                    this[t(269)][t(250)] = e,
                    this[t(269)][t(220)] = Xn[t(224)](this[t(269)][t(194)], this.o.from, this.o.to),
                    this.events.onUpdate[t(211)](this[t(269)]),
                    this[t(209)] = this.dispatchValues[t(194)]
                }
            }
        }, {
            key: r(167),
            value: function() {
                var t = r;
                this[t(247)] && (this[t(169)] = !1,
                this.o[t(256)] = 1,
                this[t(163)][t(157)].dispatch())
            }
        }, {
            key: "_updateMinMax",
            value: function() {
                var t = r;
                this[t(238)] = Math.min(this.o.from, this.o.to),
                this[t(241)] = Math[t(241)](this.o[t(270)], this.o.to),
                this.length = Math.abs(this[t(241)] - this.min),
                this[t(209)] = this.o[t(270)]
            }
        }]) && Zn(t[n(242)], e),
        Object.defineProperty(t, n(242), {
            writable: !1
        }),
        i
    }();
    function nr(t, e) {
        var n = hr();
        return (nr = function(t, e) {
            return n[t -= 298]
        }
        )(t, e)
    }
    function rr(t) {
        var e = nr;
        return (rr = e(311) == typeof Symbol && e(322) == typeof Symbol[e(320)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && "function" == typeof Symbol && t[n(314)] === Symbol && t !== Symbol.prototype ? n(322) : typeof t
        }
        )(t)
    }
    function ir(t, e) {
        if (!(t instanceof e))
            throw new TypeError(nr(317))
    }
    function ar(t, e) {
        for (var n = nr, r = 0; r < e[n(318)]; r++) {
            var i = e[r];
            i.enumerable = i[n(327)] || !1,
            i[n(323)] = !0,
            n(305)in i && (i[n(338)] = !0),
            Object[n(332)](t, i.key, i)
        }
    }
    function or() {
        var t = nr;
        return or = "undefined" != typeof Reflect && Reflect[t(337)] ? Reflect[t(337)].bind() : function(e, n, r) {
            var i = t
              , a = sr(e, n);
            if (a) {
                var o = Object[i(306)](a, n);
                return o.get ? o[i(337)][i(334)](arguments.length < 3 ? e : r) : o[i(305)]
            }
        }
        ,
        or[t(329)](this, arguments)
    }
    function sr(t, e) {
        for (var n = nr; !Object[n(336)][n(339)][n(334)](t, e) && null !== (t = lr(t)); )
            ;
        return t
    }
    function cr(t, e) {
        var n = nr;
        return (cr = Object.setPrototypeOf ? Object.setPrototypeOf[n(309)]() : function(t, e) {
            return t[n(333)] = e,
            t
        }
        )(t, e)
    }
    function ur(t, e) {
        var n = nr;
        if (e && ("object" === rr(e) || typeof e === n(311)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(312));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t)
    }
    function hr() {
        var t = ["apply", "construct", "width", "defineProperty", "__proto__", "call", "379iQZQdg", "prototype", "get", "writable", "hasOwnProperty", "9780024fJnNCn", "getPrototypeOf", "create", "9UTJZyh", "sham", "direction", "139088ipljLh", "Super expression must either be null or a function", "handleDown", "value", "getOwnPropertyDescriptor", "12zjMaAX", "22334213oapuTJ", "bind", "2574hCmCbO", "function", "Derived constructors may only return object or undefined", "9409813GHWNuv", "constructor", "down", "45dVIuLY", "Cannot call a class as a function", "length", "51zoCvbu", "iterator", "10599480wlgRoh", "symbol", "configurable", "201198YOBOpR", "valueOf", "handleUp", "enumerable", "old"];
        return (hr = function() {
            return t
        }
        )()
    }
    function lr(t) {
        var e = nr;
        return (lr = Object.setPrototypeOf ? Object[e(341)][e(309)]() : function(t) {
            var n = e;
            return t[n(333)] || Object[n(341)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = nr, r = t(); ; )
            try {
                if (857125 == parseInt(n(335)) / 1 * (parseInt(n(310)) / 2) + -parseInt(n(319)) / 3 * (-parseInt(n(302)) / 4) + parseInt(n(316)) / 5 * (parseInt(n(324)) / 6) + parseInt(n(313)) / 7 + parseInt(n(340)) / 8 + -parseInt(n(299)) / 9 * (parseInt(n(321)) / 10) + parseInt(n(308)) / 11 * (-parseInt(n(307)) / 12))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(hr);
    var fr = function(t) {
        !function(t, e) {
            var n = nr;
            if (typeof e !== n(311) && null !== e)
                throw new TypeError(n(303));
            t[n(336)] = Object[n(298)](e && e[n(336)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && cr(t, e)
        }(s, t);
        var e, n, r, i, a, o = (i = s,
        a = function() {
            var t = nr;
            if ("undefined" == typeof Reflect || !Reflect[t(330)])
                return !1;
            if (Reflect[t(330)][t(300)])
                return !1;
            if (typeof Proxy === t(311))
                return !0;
            try {
                return Boolean[t(336)][t(325)][t(334)](Reflect[t(330)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = nr, n = lr(i);
            if (a) {
                var r = lr(this)[e(314)];
                t = Reflect[e(330)](n, arguments, r)
            } else
                t = n[e(329)](this, arguments);
            return ur(this, t)
        }
        );
        function s(t, e) {
            var n = nr
              , r = arguments[n(318)] > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return ir(this, s),
            o[n(334)](this, t, e, {
                x: e[n(331)],
                y: e.height
            }, r)
        }
        return e = s,
        r = nr,
        (n = [{
            key: "handleDown",
            value: function(t, e) {
                var n = nr;
                this[n(328)] = this[n(315)] = e[this.o[n(301)]],
                or(lr(s[n(336)]), n(304), this)[n(334)](this, t, e)
            }
        }, {
            key: "handleUp",
            value: function(t, e) {
                var n = nr;
                this.current = e[this.o.direction],
                or(lr(s[n(336)]), n(326), this)[n(334)](this, t, e)
            }
        }]) && ar(e.prototype, n),
        Object.defineProperty(e, r(336), {
            writable: !1
        }),
        s
    }(er);
    function pr(t) {
        var e = mr;
        return (pr = e(127) == typeof Symbol && "symbol" == typeof Symbol[e(159)] ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && e(127) == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function yr(t, e) {
        if (!(t instanceof e))
            throw new TypeError(mr(135))
    }
    function dr(t, e) {
        for (var n = mr, r = 0; r < e[n(124)]; r++) {
            var i = e[r];
            i[n(148)] = i[n(148)] || !1,
            i.configurable = !0,
            n(128)in i && (i[n(133)] = !0),
            Object[n(123)](t, i[n(151)], i)
        }
    }
    function vr() {
        var t = mr;
        return vr = typeof Reflect !== t(162) && Reflect[t(155)] ? Reflect.get.bind() : function(e, n, r) {
            var i = t
              , a = br(e, n);
            if (a) {
                var o = Object.getOwnPropertyDescriptor(a, n);
                return o[i(155)] ? o.get[i(137)](arguments[i(124)] < 3 ? e : r) : o[i(128)]
            }
        }
        ,
        vr[t(136)](this, arguments)
    }
    function br(t, e) {
        for (var n = mr; !Object.prototype[n(140)].call(t, e) && null !== (t = Sr(t)); )
            ;
        return t
    }
    function mr(t, e) {
        var n = Ir();
        return (mr = function(t, e) {
            return n[t -= 123]
        }
        )(t, e)
    }
    function gr(t, e) {
        var n = mr;
        return (gr = Object.setPrototypeOf ? Object[n(160)].bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function wr(t, e) {
        var n = mr;
        if (e && ("object" === pr(e) || typeof e === n(127)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(130));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t)
    }
    function Ir() {
        var t = ["6591861LtMeQZ", "Derived constructors may only return object or undefined", "prototype", "1699bGSBdJ", "writable", "Super expression must either be null or a function", "Cannot call a class as a function", "apply", "call", "_setPosition", "assign", "hasOwnProperty", "bind", "2702008mzdzCz", "items", "construct", "385cjpLLE", "destroy", "onUpdate", "enumerable", "3778870ryLYGr", "1169871GMGJAY", "key", "setFromTo", "options", "getPrototypeOf", "get", "total", "add", "searchForClicks", "iterator", "setPrototypeOf", "events", "undefined", "constructor", "sham", "_addMask", "scroller", "min", "valueOf", "create", "4bUJwBr", "__proto__", "reset", "registerClickables", "7cSnvwA", "826klGKrv", "defineProperty", "length", "1165572NReoOV", "611130dqNAOM", "function", "value"];
        return (Ir = function() {
            return t
        }
        )()
    }
    function Sr(t) {
        var e = mr;
        return (Sr = Object[e(160)] ? Object[e(154)][e(141)]() : function(t) {
            var n = e;
            return t[n(171)] || Object[n(154)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = mr, r = t(); ; )
            try {
                if (482511 == -parseInt(n(132)) / 1 * (parseInt(n(175)) / 2) + -parseInt(n(150)) / 3 * (-parseInt(n(170)) / 4) + -parseInt(n(149)) / 5 + -parseInt(n(125)) / 6 + -parseInt(n(174)) / 7 * (-parseInt(n(142)) / 8) + -parseInt(n(129)) / 9 + parseInt(n(126)) / 10 * (parseInt(n(145)) / 11))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Ir);
    var Or = {
        direction: "y",
        autocull: !0,
        momentum: !0,
        bouncing: !0,
        snapping: !1,
        overflow: 100,
        padding: 10,
        searchForClicks: !1
    }
      , kr = function(t) {
        var e = mr;
        !function(t, e) {
            var n = mr;
            if ("function" != typeof e && null !== e)
                throw new TypeError(n(134));
            t[n(131)] = Object[n(169)](e && e[n(131)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, n(131), {
                writable: !1
            }),
            e && gr(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = mr;
            if (typeof Reflect === t(162) || !Reflect.construct)
                return !1;
            if (Reflect[t(144)][t(164)])
                return !1;
            if (typeof Proxy === t(127))
                return !0;
            try {
                return Boolean[t(131)][t(168)].call(Reflect[t(144)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = mr, n = Sr(a);
            if (o) {
                var r = Sr(this)[e(163)];
                t = Reflect[e(144)](n, arguments, r)
            } else
                t = n[e(136)](this, arguments);
            return wr(this, t)
        }
        );
        function c(t, e, n) {
            var r, i = mr, a = arguments[i(124)] > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return yr(this, c),
            (r = s.call(this, t, e, En(n), Object[i(139)]({}, Or, a)))[i(166)] = new fr(r.game,r[i(165)](n),Object.assign({
                from: 0,
                to: 0
            }, r[i(153)])),
            r.scroller[i(161)][i(147)][i(157)]((function(t) {
                var e = i;
                r[e(138)](t[e(156)])
            }
            )),
            r[i(161)].onAdded[i(157)]((function(t) {
                var e = i
                  , n = Math[e(167)](-t, 0);
                r[e(166)][e(152)](0, n),
                r.options[e(158)] && r[e(166)][e(173)](r[e(143)])
            }
            )),
            r
        }
        return n = c,
        i = mr,
        (r = [{
            key: e(146),
            value: function() {
                var t = e;
                null !== this.scroller && (this[t(166)][t(146)](),
                this[t(166)] = null),
                vr(Sr(c[t(131)]), t(146), this).call(this)
            }
        }, {
            key: e(172),
            value: function() {
                var t = e;
                this[t(138)](0),
                this[t(166)][t(172)]()
            }
        }]) && dr(n[i(131)], r),
        Object[i(123)](n, i(131), {
            writable: !1
        }),
        c
    }(Un)
      , Cr = Br;
    function Pr(t) {
        var e = Br;
        return (Pr = e(139) == typeof Symbol && e(144) == typeof Symbol[e(175)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(139) == typeof Symbol && t[n(159)] === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function Tr(t, e) {
        if (!(t instanceof e))
            throw new TypeError(Br(165))
    }
    function xr(t, e) {
        for (var n = Br, r = 0; r < e[n(140)]; r++) {
            var i = e[r];
            i.enumerable = i.enumerable || !1,
            i[n(125)] = !0,
            n(124)in i && (i[n(129)] = !0),
            Object[n(158)](t, i[n(160)], i)
        }
    }
    function _r(t, e) {
        var n = Br;
        return (_r = Object.setPrototypeOf ? Object[n(151)][n(161)]() : function(t, e) {
            return t[n(149)] = e,
            t
        }
        )(t, e)
    }
    function jr(t, e) {
        var n = Br;
        if (e && ("object" === Pr(e) || typeof e === n(139)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(155));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(Br(179));
            return t
        }(t)
    }
    function Rr(t) {
        var e = Br;
        return (Rr = Object[e(151)] ? Object[e(176)].bind() : function(t) {
            var n = e;
            return t[n(149)] || Object[n(176)](t)
        }
        )(t)
    }
    function Er() {
        var t = ["columnNumber", "apply", "8sUdgMh", "leftDistance", "1041675iKAUaz", "distanceBetweenColumns", "7ygglAY", "create", "function", "length", "viewList", "construct", "2247410ToyFGM", "symbol", "Super expression must either be null or a function", "addChild", "rowHeight", "direction", "__proto__", "1104256KbbJdm", "setPrototypeOf", "setViewList", "columnWidth", "1018218KLYzxp", "Derived constructors may only return object or undefined", "Rectangle", "viewWidth", "defineProperty", "constructor", "key", "bind", "458DDRSGa", "call", "column", "Cannot call a class as a function", "rowNumber", "Group", "scroll", "push", "3070512eIgZFu", "distanceBetweenRows", "add", "2801xtfgKD", "Sprite", "iterator", "getPrototypeOf", "prototype", "removeAll", "this hasn't been initialised - super() hasn't been called", "6671220IUsWfX", "destroy", "sham", "value", "configurable", "viewHeight", "game", "list", "writable", "undefined"];
        return (Er = function() {
            return t
        }
        )()
    }
    function Br(t, e) {
        var n = Er();
        return (Br = function(t, e) {
            return n[t -= 121]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = Br, r = t(); ; )
            try {
                if (623873 == -parseInt(n(173)) / 1 * (-parseInt(n(162)) / 2) + -parseInt(n(135)) / 3 + -parseInt(n(150)) / 4 + parseInt(n(143)) / 5 + -parseInt(n(154)) / 6 * (parseInt(n(137)) / 7) + -parseInt(n(133)) / 8 * (parseInt(n(170)) / 9) + parseInt(n(121)) / 10)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Er);
    var Ar = function(t) {
        var e = Br;
        !function(t, e) {
            var n = Br;
            if (typeof e !== n(139) && null !== e)
                throw new TypeError(n(145));
            t[n(177)] = Object[n(138)](e && e[n(177)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, n(177), {
                writable: !1
            }),
            e && _r(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = Br;
            if (typeof Reflect === t(130) || !Reflect[t(142)])
                return !1;
            if (Reflect[t(142)][t(123)])
                return !1;
            if (typeof Proxy === t(139))
                return !0;
            try {
                return Boolean[t(177)].valueOf[t(163)](Reflect[t(142)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Br, n = Rr(a);
            if (o) {
                var r = Rr(this)[e(159)];
                t = Reflect[e(142)](n, arguments, r)
            } else
                t = n[e(132)](this, arguments);
            return jr(this, t)
        }
        );
        function c(t, e) {
            var n, r = Br, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, o = arguments[r(140)] > 4 && void 0 !== arguments[4] ? arguments[4] : null, u = arguments[r(140)] > 5 && void 0 !== arguments[5] ? arguments[5] : null;
            Tr(this, c),
            n = s.call(this, e, i, a, o, u),
            t && (n.x = t.x,
            n.y = t.y,
            n.columnNumber = t[r(164)],
            n.viewWidth = t.width,
            n[r(126)] = t.height,
            n.rowHeight = t[r(147)],
            n[r(153)] = t[r(153)],
            n[r(134)] = t[r(134)],
            n.direction = t.direction,
            n.distanceBetweenColumns = t[r(136)],
            n[r(171)] = t[r(171)]);
            var h = new (Phaser[r(167)])(game)
              , l = new (Phaser[r(156)])(0,0,n[r(157)],n.viewHeight);
            return "x" === n[r(148)] ? n[r(168)] = new kr(n[r(127)],h,l,{
                direction: n[r(148)],
                searchForClicks: !0,
                padding: n[r(136)]
            }) : n.scroll = new kr(n[r(127)],h,l,{
                direction: n[r(148)],
                searchForClicks: !0,
                padding: n.distanceBetweenRows
            }),
            n[r(146)](h),
            n
        }
        return n = c,
        i = Br,
        (r = [{
            key: "add",
            value: function(t) {
                var e = Br;
                this[e(168)][e(172)](t)
            }
        }, {
            key: e(178),
            value: function() {
                var t = e;
                this.scroll[t(178)]()
            }
        }, {
            key: e(141),
            set: function(t) {
                var n, r = e;
                if (this[r(178)](),
                this[r(128)])
                    for (var i = 0; i < this[r(128)][r(140)]; i++)
                        this.list[i][r(122)]();
                for (this[r(128)] = t,
                i = 0; i < t[r(140)]; i++)
                    if (i % this.columnNumber == 0 && (n = []),
                    n[r(169)](t[i]),
                    n[r(140)] === this[r(131)] || i === t.length - 1) {
                        var a = new xn(this.game);
                        a.columnNumber = this[r(131)],
                        a[r(166)] = 1,
                        a.viewWidth = this[r(157)],
                        1 === this[r(131)] && "x" === this[r(148)] && (a[r(157)] = this[r(153)]),
                        a[r(153)] = this[r(153)],
                        a[r(126)] = this[r(147)],
                        a[r(134)] = this[r(134)],
                        a.distanceBetweenColumns = this[r(136)],
                        a.distanceBetweenRows = this[r(171)],
                        a[r(152)](n),
                        this[r(168)].add(a)
                    }
            }
        }]) && xr(n.prototype, r),
        Object[i(158)](n, i(177), {
            writable: !1
        }),
        c
    }(Phaser[Cr(174)])
      , Dr = zr;
    function Fr(t) {
        var e = zr;
        return (Fr = "function" == typeof Symbol && "symbol" == typeof Symbol[e(242)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && "function" == typeof Symbol && t[n(245)] === Symbol && t !== Symbol[n(241)] ? "symbol" : typeof t
        }
        )(t)
    }
    function Nr(t, e) {
        for (var n = zr, r = 0; r < e[n(228)]; r++) {
            var i = e[r];
            i[n(272)] = i[n(272)] || !1,
            i.configurable = !0,
            n(250)in i && (i[n(235)] = !0),
            Object[n(232)](t, i[n(254)], i)
        }
    }
    function Lr(t, e) {
        var n = zr;
        return (Lr = Object.setPrototypeOf ? Object[n(258)][n(238)]() : function(t, e) {
            return t[n(253)] = e,
            t
        }
        )(t, e)
    }
    function Gr(t, e) {
        var n = zr;
        if (e && (Fr(e) === n(252) || typeof e === n(236)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(239));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(zr(229));
            return t
        }(t)
    }
    function Mr(t) {
        var e = zr;
        return (Mr = Object.setPrototypeOf ? Object[e(244)][e(238)]() : function(t) {
            var n = e;
            return t[n(253)] || Object[n(244)](t)
        }
        )(t)
    }
    function Wr() {
        var t = ["Group", "setPrototypeOf", "284018qNdPvc", "sham", "make", "drawGroup", "base64Image", "toDataURL", "create", "36586BDbrnf", "9RxzjLS", "canvas", "12AaRuWy", "call", "671oeJUwT", "enumerable", "Cannot call a class as a function", "55535dejaNu", "updateTransform", "length", "this hasn't been initialised - super() hasn't been called", "game", "image/png", "defineProperty", "36ALzevY", "shareImage", "writable", "function", "undefined", "bind", "Derived constructors may only return object or undefined", "construct", "prototype", "iterator", "74179rNApvE", "getPrototypeOf", "constructor", "114hJDzhv", "67240FNwXvd", "13561639pCXQKb", "bitmapData", "value", "apply", "object", "__proto__", "key", "889496PKkQhs", "12RbYmFP"];
        return (Wr = function() {
            return t
        }
        )()
    }
    function zr(t, e) {
        var n = Wr();
        return (zr = function(t, e) {
            return n[t -= 228]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = zr, r = t(); ; )
            try {
                if (420236 == -parseInt(n(243)) / 1 + -parseInt(n(266)) / 2 * (parseInt(n(267)) / 3) + parseInt(n(269)) / 4 * (-parseInt(n(274)) / 5) + -parseInt(n(246)) / 6 * (-parseInt(n(259)) / 7) + parseInt(n(255)) / 8 * (parseInt(n(233)) / 9) + -parseInt(n(247)) / 10 * (-parseInt(n(271)) / 11) + -parseInt(n(256)) / 12 * (parseInt(n(248)) / 13))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Wr);
    const Ur = function(t) {
        !function(t, e) {
            var n = zr;
            if (typeof e !== n(236) && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e[n(241)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(232)](t, n(241), {
                writable: !1
            }),
            e && Lr(t, e)
        }(s, t);
        var e, n, r, i, a, o = (i = s,
        a = function() {
            var t = zr;
            if (typeof Reflect === t(237) || !Reflect.construct)
                return !1;
            if (Reflect[t(240)][t(260)])
                return !1;
            if (typeof Proxy === t(236))
                return !0;
            try {
                return Boolean.prototype.valueOf[t(270)](Reflect[t(240)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = zr, n = Mr(i);
            if (a) {
                var r = Mr(this)[e(245)];
                t = Reflect[e(240)](n, arguments, r)
            } else
                t = n[e(251)](this, arguments);
            return Gr(this, t)
        }
        );
        function s(t) {
            var e = zr;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(zr(273))
            }(this, s),
            o[e(270)](this, t)
        }
        return e = s,
        r = zr,
        (n = [{
            key: "drawShareImage",
            value: function() {
                var t = zr;
                this[t(265)](0, 0, t(234)),
                this[t(230)].stage[t(275)]();
                var e = this[t(230)][t(261)][t(249)](800, 436);
                return e[t(262)](this),
                this[t(263)] = e[t(268)][t(264)](t(231), 1),
                this[t(263)]
            }
        }]) && Nr(e[r(241)], n),
        Object[r(232)](e, r(241), {
            writable: !1
        }),
        s
    }(Phaser[Dr(257)]);
    function Vr() {
        var t = ["key", "load", "closeLoadingPopup", "length", "SHARE", "openLoadingPopup", "no_avatar", "joinRoom", "Text", "game", "288315tquRjl", "bind", "Cannot call a class as a function", "shareAsync", "getPrototypeOf", "cache", "normal", "10duZYqu", "friend_rounded", "state", "viewList", "icon_close", "homeScreen", "getPhoto", "sound", "connectedFriends", "player", "instance", "configurable", "constructor", "undefined", "addOnce", "FRIENDS", "INVITED_TO_PLAY", "then", "photo", "addChild", "1015XDdTHh", "CALL_FRIEND", "#f59eac", "createView", "width", "JOIN", "create", "4662780FQGHZH", "Super expression must either be null or a function", "showContainer", "events", "isArray", "text", "updateAsync", "onFileComplete", "world", "playButtonSound", "this hasn't been initialised - super() hasn't been called", "Back", "symbol", "height", "2ZaPMNJ", "construct", "Easing", "Derived constructors may only return object or undefined", "homeScreenBG2", "tween", "canPlay", "name", "10492614yqcwVj", "showNotEnoughMoneyToJoin", "add", "#000000", "Offline", "defineProperty", "online", "click", "centerX", "addFriendToList", "prototype", "addText", "destroy", "iterator", "7496krdzQi", "remove", "isOnline", "paused", "7036tYPZnH", "#ffffff", "avatarKey", "loadTexture", "setTo", "lang", "listView", "inviteButton", "#f5c78a", "close", "function", "Play", "inputEnabled", "onFriendAction", "getID", "apply", "coin", "drawShareImage", "shortenLargeNumber", "Image", "anchor", "valueOf", "__proto__", "enumerable", "value", "roomId", "#FFFFFF", "push", "roomBet", "NO_PUSH", "challenge", "toUpperCase", "onInviteClick", "getCurrentState", "checkImageKey", "getConnectedPlayersAsync", "INVITE_MORE_FRIEND", "catch", "setPrototypeOf", "269225qslVfq", "writable", "CUSTOM", "1497PPsRQN", "sham", "friendList", "guserid", "isAssetReady", "981911hlMMdW", "playerId", "getName"];
        return (Vr = function() {
            return t
        }
        )()
    }
    function Hr(t) {
        var e = Xr;
        return (Hr = e(273) == typeof Symbol && e(235) == typeof Symbol[e(258)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && "function" == typeof Symbol && t[n(208)] === Symbol && t !== Symbol.prototype ? n(235) : typeof t
        }
        )(t)
    }
    function Xr(t, e) {
        var n = Vr();
        return (Xr = function(t, e) {
            return n[t -= 186]
        }
        )(t, e)
    }
    function Yr(t, e) {
        for (var n = Xr, r = 0; r < e[n(316)]; r++) {
            var i = e[r];
            i[n(286)] = i.enumerable || !1,
            i[n(207)] = !0,
            n(287)in i && (i[n(303)] = !0),
            Object[n(250)](t, i[n(313)], i)
        }
    }
    function qr(t, e) {
        var n = Xr;
        return (qr = Object[n(301)] ? Object[n(301)].bind() : function(t, e) {
            return t[n(285)] = e,
            t
        }
        )(t, e)
    }
    function Kr(t, e) {
        var n = Xr;
        if (e && ("object" === Hr(e) || typeof e === n(273)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(240));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(Xr(233));
            return t
        }(t)
    }
    function Jr(t) {
        var e = Xr;
        return (Jr = Object[e(301)] ? Object.getPrototypeOf[e(190)]() : function(t) {
            var n = e;
            return t[n(285)] || Object[n(193)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = Xr, r = t(); ; )
            try {
                if (502659 == -parseInt(n(310)) / 1 * (-parseInt(n(237)) / 2) + -parseInt(n(305)) / 3 * (parseInt(n(263)) / 4) + parseInt(n(302)) / 5 + -parseInt(n(223)) / 6 + parseInt(n(216)) / 7 * (parseInt(n(259)) / 8) + parseInt(n(189)) / 9 * (parseInt(n(196)) / 10) + parseInt(n(245)) / 11)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Vr);
    const Qr = function(t) {
        var e = Xr;
        !function(t, e) {
            var n = Xr;
            if (typeof e !== n(273) && null !== e)
                throw new TypeError(n(224));
            t[n(255)] = Object[n(222)](e && e[n(255)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(250)](t, "prototype", {
                writable: !1
            }),
            e && qr(t, e)
        }(s, t);
        var n, r, i, a, o = (i = s,
        a = function() {
            var t = Xr;
            if (typeof Reflect === t(209) || !Reflect.construct)
                return !1;
            if (Reflect[t(238)][t(306)])
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean[t(255)][t(284)].call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Xr, n = Jr(i);
            if (a) {
                var r = Jr(this)[e(208)];
                t = Reflect[e(238)](n, arguments, r)
            } else
                t = n[e(278)](this, arguments);
            return Kr(this, t)
        }
        );
        function s(t) {
            var e, n = Xr;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Xr(191))
            }(this, s),
            e = o.call(this, t),
            FBInstant.player[n(298)]()[n(213)]((function(t) {
                var r = n;
                e[r(204)] = t,
                Array[r(227)](e.connectedFriends) || (e[r(204)] = [])
            }
            )),
            e
        }
        return n = s,
        (r = [{
            key: e(309),
            value: function() {
                var t = e;
                return this[t(188)][t(194)][t(297)](t(241)) && Array[t(227)](this.connectedFriends)
            }
        }, {
            key: e(219),
            value: function() {
                var t = e
                  , n = this[t(222)](0, 0, t(241));
                n[t(220)] = this[t(188)].width,
                n[t(236)] = this[t(188)][t(236)],
                n[t(275)] = !0;
                var r = this[t(188)][t(247)][t(228)](this.game[t(231)][t(253)], 20, CyberInstance[t(268)][t(211)][t(294)](), {
                    font: APP_FONT,
                    fontWeight: 700,
                    fontSize: 40,
                    fill: t(271)
                });
                if (r.anchor[t(267)](.5, 0),
                this.add(r),
                this.connectedFriends.length > 0) {
                    var i = this.game.height - 200
                      , a = this[t(188)][t(220)] / 2 - 431.5;
                    for (var o in this[t(269)] = new Ar({
                        x: a,
                        y: 100,
                        column: 3,
                        width: 863,
                        height: i,
                        rowHeight: 156,
                        columnWidth: 271,
                        row: 1,
                        leftDistance: 0,
                        rightDistance: 0,
                        distanceBetweenColumns: 25,
                        distanceBetweenRows: 10,
                        direction: "y"
                    },this[t(188)]),
                    this.add(this.listView),
                    this.friendList = [],
                    this.connectedFriends) {
                        var s = this[t(204)][o]
                          , c = {
                            playerId: s[t(277)](),
                            isOnline: !1,
                            name: s[t(312)](),
                            avatar: s[t(202)](),
                            coin: -1
                        };
                        this[t(307)][t(290)](this.addFriendToList(c))
                    }
                    this[t(269)][t(199)] = this[t(307)],
                    this[t(188)][t(314)][t(230)][t(247)](this[t(230)], this),
                    this.game.load.start()
                }
                this[t(270)] = new jt(this[t(188)],0,15,t(201),"button_green_257x63"),
                this[t(270)][t(256)](CyberInstance[t(268)][t(299)]),
                this[t(270)].x = this[t(188)][t(220)] / 2 - this[t(270)].width / 2,
                this[t(270)].y = this[t(188)][t(236)] - this[t(270)].height - 20,
                this.inviteButton[t(252)](this[t(295)], this),
                this.add(this[t(270)]);
                var u = this[t(222)](0, 0, t(201), t(200));
                u.x = this[t(188)][t(220)] - u[t(220)] - 15,
                u.y = 15,
                u[t(275)] = !0,
                u[t(226)].onInputDown[t(210)](this[t(272)], this),
                this.createTransition()
            }
        }, {
            key: "createTransition",
            value: function() {
                var t = e;
                this.y = -100,
                this[t(188)][t(247)][t(242)](this).to({
                    y: 0
                }, 500, Phaser[t(239)][t(234)].Out, !0)
            }
        }, {
            key: e(254),
            value: function(t) {
                var n = e
                  , r = new (Phaser[n(282)])(this[n(188)],10,10,n(201),n(197));
                r[n(265)] = "avt" + t[n(311)];
                var i = new (Phaser[n(282)])(this[n(188)],10,10,n(201),n(319));
                r.addChild(i),
                t.avatar && (r.photo = i,
                this[n(188)][n(194)][n(297)](r.avatarKey) ? i.loadTexture(r[n(265)]) : this[n(188)][n(314)].image(r[n(265)], t.avatar)),
                i[n(220)] = 60,
                i[n(236)] = 60;
                var a = new (Phaser[n(187)])(this[n(188)],i.x + i[n(220)] + 15,i.y,t[n(244)],{
                    font: APP_FONT,
                    fontWeight: "normal",
                    fontSize: 20,
                    fill: n(289)
                });
                if (r.addChild(a),
                t[n(261)]) {
                    var o = new (Phaser[n(282)])(this[n(188)],a.x,a.y + 35,n(201),n(251));
                    if (r[n(215)](o),
                    t[n(279)] >= 0) {
                        var s = new Phaser.Text(this[n(188)],o.x + o[n(220)] + 5,a.y + 30,h[n(281)](t[n(279)]),{
                            font: APP_FONT,
                            fontWeight: n(195),
                            fontSize: 20,
                            fill: n(271)
                        });
                        r.addChild(s)
                    }
                    if (t.roomInfo) {
                        var c = new (Phaser[n(187)])(this[n(188)],135.5,a.y + 60,t.roomInfo,{
                            font: APP_FONT,
                            fontWeight: n(195),
                            fontSize: 20,
                            fill: n(218)
                        });
                        c[n(283)].setTo(.5, 0),
                        r[n(215)](c)
                    }
                } else {
                    var u = new (Phaser[n(187)])(this.game,a.x,a.y + 30,n(249),{
                        font: APP_FONT,
                        fontWeight: n(195),
                        fontSize: 20,
                        fill: "#81425c"
                    });
                    r.addChild(u)
                }
                var l = new jt(this[n(188)],0,15,n(201),"friend_invite");
                return l[n(256)](t[n(288)] ? CyberInstance.lang[n(221)] : CyberInstance[n(268)][n(217)], {
                    font: APP_FONT,
                    fill: t[n(288)] ? n(248) : n(264),
                    fontWeight: 500,
                    fontSize: 17
                }),
                l[n(252)](this[n(276)], this),
                l.x = 271 - l[n(220)] - 10,
                l.y = 156 - l[n(236)] - 10,
                l[n(311)] = t[n(311)],
                r.addChild(l),
                t[n(288)] && (l.roomId = t[n(288)],
                l[n(291)] = t[n(291)],
                l[n(266)](n(201), "friend_join")),
                r
            }
        }, {
            key: e(276),
            value: function(t) {
                var n = e
                  , r = this;
                CyberInstance[n(262)] && (CyberInstance.paused = !1),
                t[n(288)] && t.roomBet ? ie[n(206)][n(243)](t[n(291)]) ? (this[n(188)][n(314)].onFileComplete[n(260)](this[n(230)], this),
                this[n(188)].state[n(296)]()[n(318)](),
                ie[n(206)][n(186)](parseInt(t[n(288)]))) : M[n(246)](t.roomBet) : FBInstant.context.createAsync(t[n(311)].toString()).then((function() {
                    r[n(229)]()
                }
                ))
            }
        }, {
            key: "updateAsync",
            value: function() {
                var t = e
                  , n = new Ur(this[t(188)])
                  , r = n[t(280)]();
                n[t(257)]();
                var i = {
                    action: t(304),
                    cta: t(274),
                    image: r,
                    text: '"' + FBInstant[t(205)][t(312)]() + '" ' + CyberInstance.lang[t(212)],
                    template: t(293),
                    data: {
                        guserid: CyberInstance.guserid
                    },
                    strategy: "IMMEDIATE",
                    notification: t(292)
                };
                FBInstant[t(229)](i)[t(213)]((function() {}
                ))
            }
        }, {
            key: "onInviteClick",
            value: function() {
                var t = e
                  , n = this;
                if (CyberInstance.paused && (CyberInstance[t(262)] = !1),
                CyberInstance[t(203)][t(232)](),
                this[t(318)]({
                    closeTimer: 15e3
                }),
                this.game[t(194)][t(297)]("shareImage")) {
                    var r = new Ur(this[t(188)])
                      , i = r.drawShareImage();
                    r.destroy(),
                    FBInstant[t(192)]({
                        intent: t(317),
                        image: i,
                        text: "",
                        data: {
                            dataType: "share",
                            guserId: CyberInstance[t(308)]
                        }
                    })[t(213)]((function() {
                        n[t(315)]()
                    }
                    ))[t(300)]((function() {
                        n.closeLoadingPopup()
                    }
                    ))
                }
            }
        }, {
            key: "onFileComplete",
            value: function(t, n, r) {
                var i = e;
                if (r)
                    for (var a in this.friendList) {
                        var o = this.friendList[a];
                        if (o[i(265)] == n) {
                            o[i(214)].loadTexture(n),
                            o[i(214)][i(220)] = 60,
                            o[i(214)].height = 60;
                            break
                        }
                    }
            }
        }, {
            key: e(272),
            value: function() {
                var t = e;
                this[t(188)][t(198)].getCurrentState()[t(225)](),
                CyberInstance[t(203)].playButtonSound(),
                this.game[t(314)][t(230)][t(260)](this.onFileComplete, this),
                this[t(257)](!0),
                this[t(204)] = null
            }
        }]) && Yr(n[Xr(255)], r),
        Object.defineProperty(n, "prototype", {
            writable: !1
        }),
        s
    }(_);
    function Zr() {
        var t = ["addChild", "events", "233523042137965", "bg_popup_large", "valueOf", "anchor", "isAssetReady", "522834rnxQzt", "defineProperty", "bind", "MORE GAME", "61644soDyqj", "Derived constructors may only return object or undefined", "addGameIcons", "enumerable", "sprite", "addIconCommingSoon", "close", "undefined", "configurable", "sham", "inputEnabled", "GAME KHÁC", "homeScreen", "addOverlay", "326856qYreOe", "length", "width", "createTransition", "_commingsoon", "symbol", "game", "19917GcidBw", "image", "switchGameAsync", "createView", "414883896633176", "object", "icon_close", "prototype", "196644DryKJo", "key", "50zethXK", "checkImageKey", "height", "setPrototypeOf", "call", "Cannot call a class as a function", "text", "background", "addIcon", "276502267440986", "16eGGjvB", "writable", "playButtonSound", "setTo", "443vgrqIU", "game_pusoy_icon", "487455162408511", "iterator", "12172ypJiWv", "make", "game_pokdeng_icon", "185YZVRHe", "log", "function", "__proto__", "create", "constructor", "7vKCero", "game_lucky9_icon", "construct", "12vQSJNS", "32cThEGC", "moregame"];
        return (Zr = function() {
            return t
        }
        )()
    }
    function $r(t) {
        var e = ti;
        return ($r = e(215) == typeof Symbol && e(180) == typeof Symbol[e(209)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(215) == typeof Symbol && t[n(143)] === Symbol && t !== Symbol[n(189)] ? n(180) : typeof t
        }
        )(t)
    }
    function ti(t, e) {
        var n = Zr();
        return (ti = function(t, e) {
            return n[t -= 142]
        }
        )(t, e)
    }
    function ei(t, e) {
        for (var n = ti, r = 0; r < e[n(176)]; r++) {
            var i = e[r];
            i[n(164)] = i.enumerable || !1,
            i[n(169)] = !0,
            "value"in i && (i[n(203)] = !0),
            Object.defineProperty(t, i[n(191)], i)
        }
    }
    function ni(t, e) {
        var n = ti;
        return (ni = Object[n(195)] ? Object[n(195)][n(159)]() : function(t, e) {
            return t[n(216)] = e,
            t
        }
        )(t, e)
    }
    function ri(t, e) {
        var n = ti;
        if (e && ($r(e) === n(187) || typeof e === n(215)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(162));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t)
    }
    function ii(t) {
        var e = ti;
        return (ii = Object[e(195)] ? Object.getPrototypeOf[e(159)]() : function(t) {
            return t[e(216)] || Object.getPrototypeOf(t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = ti, r = t(); ; )
            try {
                if (108803 == -parseInt(n(206)) / 1 * (parseInt(n(148)) / 2) + parseInt(n(190)) / 3 + parseInt(n(210)) / 4 * (parseInt(n(213)) / 5) + -parseInt(n(175)) / 6 * (parseInt(n(144)) / 7) + parseInt(n(202)) / 8 * (parseInt(n(182)) / 9) + parseInt(n(192)) / 10 * (parseInt(n(161)) / 11) + parseInt(n(147)) / 12 * (-parseInt(n(157)) / 13))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Zr);
    const ai = function(t) {
        var e = ti;
        !function(t, e) {
            var n = ti;
            if (typeof e !== n(215) && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t[n(189)] = Object[n(142)](e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(158)](t, n(189), {
                writable: !1
            }),
            e && ni(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = ti;
            if (typeof Reflect === t(168) || !Reflect.construct)
                return !1;
            if (Reflect.construct[t(170)])
                return !1;
            if (typeof Proxy === t(215))
                return !0;
            try {
                return Boolean[t(189)][t(154)][t(196)](Reflect[t(146)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = ti, n = ii(a);
            if (o) {
                var r = ii(this)[e(143)];
                t = Reflect[e(146)](n, arguments, r)
            } else
                t = n.apply(this, arguments);
            return ri(this, t)
        }
        );
        function c(t) {
            var e = ti;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(ti(197))
            }(this, c),
            s[e(196)](this, t)
        }
        return n = c,
        i = ti,
        (r = [{
            key: e(156),
            value: function() {
                var t = e;
                return this[t(181)].cache[t(193)]("moregame")
            }
        }, {
            key: e(185),
            value: function() {
                var t = e
                  , n = this;
                this[t(174)](),
                this[t(199)] = this.create(0, 0, t(173), t(153)),
                this[t(199)].x = this[t(181)][t(177)] / 2 - this[t(199)][t(177)] / 2,
                this[t(199)].y = this[t(181)].height / 2 - this[t(199)][t(194)] / 2;
                var r = this.game[t(211)][t(198)](this.background[t(177)] / 2, 20, "vn" == CyberInstance.langCode ? t(172) : t(160), {
                    font: APP_FONT,
                    fill: "#ebdac0",
                    fontWeight: 700,
                    fontSize: 30
                });
                r[t(155)][t(205)](.5, 0),
                this.background[t(150)](r);
                var i = this[t(181)][t(211)][t(165)](0, 15, "homeScreen", t(188));
                i.x = this[t(199)].width - i.width - 15,
                i[t(171)] = !0,
                i[t(151)].onInputDown.addOnce((function() {
                    var e = t;
                    CyberInstance.sound[e(204)](),
                    n[e(167)]()
                }
                )),
                this[t(199)][t(150)](i),
                this[t(163)](),
                this[t(178)]()
            }
        }, {
            key: e(163),
            value: function() {
                var t = e
                  , n = 80
                  , r = this[t(200)]("game_sam_icon", "1411421055858193", 60, n)
                  , i = this.addIcon(t(212), "253585709796815", r.x + r.width + 40, n);
                this[t(200)]("game_phom_icon", t(201), i.x + i[t(177)] + 40, n),
                n += r.height + 15,
                r = this[t(200)]("game_yatzy_icon", t(186), 60, n),
                i = this.addIcon(t(145), t(208), r.x + r[t(177)] + 40, n),
                this[t(200)](t(207), t(152), i.x + i.width + 40, n)
            }
        }, {
            key: e(200),
            value: function(t, n, r, i) {
                var a = e
                  , o = new jt(this.game,r,i,a(149),t);
                return o.click((function() {
                    var t = a;
                    FBInstant[t(184)](n).catch((function(e) {
                        console[t(214)](e)
                    }
                    ))
                }
                )),
                this[a(199)].addChild(o),
                o
            }
        }, {
            key: e(166),
            value: function(t, n, r, i) {
                var a = e
                  , o = this.game[a(211)][a(183)](r, i, "moregame", t + a(179));
                return this[a(199)].addChild(o),
                o
            }
        }]) && ei(n.prototype, r),
        Object.defineProperty(n, i(189), {
            writable: !1
        }),
        c
    }(_);
    function oi(t, e) {
        var n = ci();
        return (oi = function(t, e) {
            return n[t -= 186]
        }
        )(t, e)
    }
    function si(t, e) {
        for (var n = oi, r = 0; r < e[n(191)]; r++) {
            var i = e[r];
            i[n(223)] = i[n(223)] || !1,
            i[n(212)] = !0,
            n(209)in i && (i[n(197)] = !0),
            Object[n(206)](t, i[n(202)], i)
        }
    }
    function ci() {
        var t = ["destroy", "809152qWBzSz", "12447729wHWFAN", "5369788cCzdaf", "homeScreen", "enumerable", "11476620MQGPUh", "444594UYjnYa", "dispatch", "settingPopup", "open", "length", "openMoreGame", "9240AlRFLV", "game", "friendPopup", "icon_moregame", "writable", "icon_help", "1300430gyCyCs", "openSettingPopup", "onHelpClick", "key", "21lojfIK", "screen", "prototype", "defineProperty", "412zwktvt", "Cannot call a class as a function", "value", "getPlatform", "add", "configurable", "width", "click", "container", "25pmuWRV", "icon_setting"];
        return (ci = function() {
            return t
        }
        )()
    }
    !function(t, e) {
        for (var n = oi, r = t(); ; )
            try {
                if (760819 == parseInt(n(199)) / 1 + -parseInt(n(207)) / 2 * (-parseInt(n(193)) / 3) + -parseInt(n(221)) / 4 + parseInt(n(216)) / 5 * (-parseInt(n(187)) / 6) + -parseInt(n(203)) / 7 * (-parseInt(n(219)) / 8) + parseInt(n(220)) / 9 + -parseInt(n(186)) / 10)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(ci);
    const ui = function() {
        var t, e, n, r = oi;
        function i(t) {
            var e = oi;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(oi(208))
            }
            )(this, i),
            this[e(204)] = t;
            var n = new jt(this[e(204)][e(194)],0,15,e(222),e(217));
            n.x = this[e(204)][e(194)][e(213)] - n.width - 15,
            n.click(this[e(200)], this),
            this[e(204)][e(215)][e(211)](n);
            var r = new jt(this[e(204)].game,0,15,e(222),e(198));
            r.x = n.x - r[e(213)] - 15,
            r.click(this.openHelpPopup, this),
            this.screen.container[e(211)](r);
            var a = new jt(this[e(204)][e(194)],0,15,"homeScreen","icon_friend");
            if (a.x = r.x - a.width - 15,
            a[e(214)](this.openFriendPopup, this),
            this.screen[e(215)][e(211)](a),
            "IOS" != FBInstant[e(210)]()) {
                var o = new jt(this[e(204)][e(194)],0,15,e(222),e(196));
                o.x = a.x - a.width - 15,
                o[e(214)](this[e(192)], this),
                this[e(204)][e(215)][e(211)](o)
            }
        }
        return t = i,
        n = oi,
        (e = [{
            key: r(200),
            value: function() {
                var t = r;
                this[t(189)] ? this[t(189)][t(190)]() : this[t(189)] = new wn(this.screen.game)
            }
        }, {
            key: "openFriendPopup",
            value: function() {
                var t = r;
                this.screen.hideContainer(),
                this[t(195)] = new Qr(this[t(204)][t(194)])
            }
        }, {
            key: "openHelpPopup",
            value: function() {
                var t = r;
                CyberInstance[t(201)][t(188)]()
            }
        }, {
            key: r(192),
            value: function() {
                var t = r;
                new ai(this[t(204)][t(194)])
            }
        }, {
            key: r(218),
            value: function() {
                var t = r;
                this[t(204)] = null,
                this.friendPopup = null,
                this[t(189)] = null
            }
        }]) && si(t.prototype, e),
        Object.defineProperty(t, n(205), {
            writable: !1
        }),
        i
    }();
    function hi(t) {
        var e = vi;
        return (hi = e(448) == typeof Symbol && e(449) == typeof Symbol[e(428)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(434)] ? n(449) : typeof t
        }
        )(t)
    }
    function li(t, e) {
        for (var n = vi, r = 0; r < e[n(377)]; r++) {
            var i = e[r];
            i[n(352)] = i[n(352)] || !1,
            i[n(446)] = !0,
            n(440)in i && (i[n(340)] = !0),
            Object[n(445)](t, i[n(411)], i)
        }
    }
    function fi(t, e) {
        var n = vi;
        return (fi = Object.setPrototypeOf ? Object.setPrototypeOf[n(359)]() : function(t, e) {
            return t[n(452)] = e,
            t
        }
        )(t, e)
    }
    function pi() {
        var t = ["events", "spinBtn", "days", "addOnce", "onInputDown", "set", "addTextField", "game", "2418424ERjSEs", "enumerable", "anchor", "2372530iTSuoi", "spin_bg_1", "addOverlay", "text", "indexOf", "bind", "Derived constructors may only return object or undefined", "spinPointer", "close", "NGAY_LIEN_TIEP", "centerX", "construct", "height", "prize", "SFSObject", "stop", "879paseXU", "closeButton", "send", "sound", "highLightEffect", "spin_bg_2", "cache", "length", "spin_bg", "1046CUggRn", "Super expression must either be null or a function", "checkImageKey", "socket", "onSpinWheelResponse", "lang", "object", "dispatchEvent", "#f59eac", "500", "homeScreen", "valueOf", "playButtonSound", "76238tzSkLY", "setTo", "21aCgdWs", "SPIN", "isAssetReady", "2061960AVErGR", "click", "#ffffff", "setPrototypeOf", "maxTextHeight", "rePositionSpinHighLight", "spin_highlight", "coin", "width", "getPrototypeOf", "spinMain", "createView", "colorAnim", "scale", "key", "centerY", "LUCKY_WHEEL", "spinAtlas", "spinHighLight", "play", "call", "4335543ZjFUcd", "log", "tween", "spin_highlight_1", "animations", "spin_main", "add", "ExtensionRequest", "createView2", "icon_close", "iterator", "visible", "start", "Cannot call a class as a function", "putBool", "text_bg_136x49", "prototype", "constructor", "world", "NHAN", "Quadratic", "winPrize", "value", "spinWatched", "create", "pin_pointer", "Out", "defineProperty", "configurable", "apply", "function", "symbol", "luckywheels.spin", "randomDirection", "__proto__", "1004118GQRIEQ", "formatCoinWithCommas", "addChild", "Easing", "spinAnim", "destroy", "sham", "clickOnce", "writable", "button_green_257x63", "onSpinBtnClick"];
        return (pi = function() {
            return t
        }
        )()
    }
    function yi(t, e) {
        var n = vi;
        if (e && (hi(e) === n(385) || typeof e === n(448)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(360));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t)
    }
    function di(t) {
        var e = vi;
        return (di = Object[e(400)] ? Object[e(406)][e(359)]() : function(t) {
            var n = e;
            return t.__proto__ || Object[n(406)](t)
        }
        )(t)
    }
    function vi(t, e) {
        var n = pi();
        return (vi = function(t, e) {
            return n[t -= 333]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = vi, r = t(); ; )
            try {
                if (444514 == -parseInt(n(392)) / 1 + -parseInt(n(379)) / 2 * (-parseInt(n(370)) / 3) + parseInt(n(351)) / 4 + -parseInt(n(354)) / 5 + parseInt(n(453)) / 6 * (-parseInt(n(394)) / 7) + parseInt(n(397)) / 8 + parseInt(n(418)) / 9)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(pi);
    const bi = function(t) {
        var e = vi;
        !function(t, e) {
            var n = vi;
            if (typeof e !== n(448) && null !== e)
                throw new TypeError(n(380));
            t.prototype = Object.create(e && e[n(434)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(445)](t, n(434), {
                writable: !1
            }),
            e && fi(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = vi;
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect[t(365)][t(338)])
                return !1;
            if (typeof Proxy === t(448))
                return !0;
            try {
                return Boolean.prototype[t(390)][t(417)](Reflect[t(365)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = vi, n = di(a);
            if (o) {
                var r = di(this)[e(435)];
                t = Reflect[e(365)](n, arguments, r)
            } else
                t = n[e(447)](this, arguments);
            return yi(this, t)
        }
        );
        function c(t) {
            var e = vi;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(vi(431))
            }(this, c),
            s[e(417)](this, t)
        }
        return n = c,
        i = vi,
        (r = [{
            key: e(396),
            value: function() {
                var t = e;
                return game[t(376)][t(381)](t(414))
            }
        }, {
            key: e(408),
            value: function() {
                var t = e
                  , n = this;
                this[t(356)](),
                this.bg = this.create(this.game.world[t(364)], this[t(350)].world.centerY, t(414), t(378)),
                this.bg[t(353)][t(393)](.5),
                this.bg.animations[t(424)]("spinAnim", [t(355), t(375)]),
                this[t(407)] = this[t(442)](0, 0, t(414), t(423)),
                this[t(407)].anchor[t(348)](.5),
                this.bg[t(334)](this[t(407)]),
                this[t(415)] = this[t(442)](0, 0, "spinAtlas", t(403)),
                this[t(415)][t(353)][t(348)](.5, 0),
                this[t(415)].y = 8 - this.spinHighLight[t(366)],
                this[t(415)].animations.add(t(409), [t(403), t(421)]),
                this[t(415)][t(429)] = !1,
                this.bg[t(334)](this[t(415)]),
                this[t(344)] = this[t(442)](0, 0, t(414), "button_spin2"),
                this[t(344)][t(353)][t(393)](.5),
                this[t(344)].inputEnabled = !0,
                this[t(344)][t(343)].onInputDown.addOnce(this[t(342)], this),
                this.bg.addChild(this[t(344)]);
                var r = this[t(350)].add.text(0, 0, CyberInstance[t(384)][t(395)], {
                    font: APP_FONT,
                    fontSize: 35,
                    fill: t(399),
                    fontWeight: 900
                });
                r.anchor.setTo(.5),
                this.spinBtn.addChild(r),
                this.spinPointer = this[t(442)](0, 0, t(414), t(443)),
                this[t(361)].y = -this.bg[t(366)] / 2 - 2,
                this[t(361)].anchor.setTo(.5, 0),
                this.bg[t(334)](this.spinPointer),
                this.closeButton = new jt(this[t(350)],0,15,t(389),t(427)),
                this.closeButton.x = this.game[t(405)] / 2 + this[t(407)][t(405)] / 2,
                this[t(371)].click((function() {
                    n[t(337)]()
                }
                )),
                this[t(424)](this[t(371)]),
                this.randomDirection = 0,
                this[t(401)] = 290,
                this.bg[t(410)][t(393)](.6),
                this[t(350)][t(424)][t(420)](this.bg[t(410)]).to({
                    x: 1,
                    y: 1
                }, 1e3, Phaser[t(335)].Elastic[t(444)], !0)
            }
        }, {
            key: e(426),
            value: function() {
                var t = e
                  , n = this;
                this[t(356)](),
                this.bg = this[t(442)](0, 0, t(414), t(378)),
                this.bg.x = this.game[t(405)] / 2 - this.bg[t(405)] / 2,
                this.bg.y = this.game[t(366)] / 2 - this.bg[t(366)] / 2,
                this.bg[t(422)][t(424)](t(336), [t(355), t(375)]),
                this[t(407)] = this[t(442)](0, 0, t(414), "spin_main"),
                this[t(407)].x = this[t(350)].world.centerX,
                this[t(407)].y = this[t(350)][t(436)][t(412)],
                this[t(407)][t(353)].set(.5),
                this[t(415)] = this[t(442)](0, 0, "spinAtlas", t(403)),
                this[t(415)][t(353)][t(348)](.5, 0),
                this[t(415)].x = this.game[t(436)][t(364)],
                this[t(415)].y = this[t(350)][t(436)][t(412)] - this.spinHighLight[t(366)] + 8,
                this[t(415)].animations[t(424)](t(409), [t(403), t(421)]),
                this[t(415)].visible = !1,
                this[t(344)] = this[t(442)](0, 0, t(414), "button_spin2"),
                this.spinBtn.x = this[t(350)][t(436)][t(364)] - this[t(344)].width / 2,
                this[t(344)].y = this[t(350)][t(436)].centerY - this[t(344)][t(366)] / 2,
                this[t(344)].inputEnabled = !0,
                this[t(344)][t(343)][t(347)][t(346)](this.onSpinBtnClick, this);
                var r = this[t(350)].add.text(this[t(344)].width / 2, this[t(344)][t(366)] / 2, CyberInstance[t(384)][t(395)], {
                    font: APP_FONT,
                    fontSize: 35,
                    fill: t(399),
                    fontWeight: 900
                });
                r.anchor[t(393)](.5),
                this[t(344)][t(334)](r),
                this[t(361)] = this[t(442)](0, 0, t(414), t(443)),
                this[t(361)].x = this[t(350)][t(436)][t(364)] - this[t(361)][t(405)] / 2,
                this[t(361)].y = this.bg.y - 2,
                this[t(371)] = new jt(this[t(350)],0,15,t(389),t(427)),
                this[t(371)].x = this[t(350)][t(405)] / 2 + this.spinMain[t(405)] / 2,
                this[t(371)][t(398)]((function() {
                    n[t(337)]()
                }
                )),
                this.add(this.closeButton),
                this[t(451)] = 0,
                this[t(401)] = 290
            }
        }, {
            key: "onSpinBtnClick",
            value: function() {
                var t = e;
                if (this[t(371)][t(429)] = !1,
                CyberInstance[t(373)][t(391)](),
                !0 === CyberGlobalData[t(441)]) {
                    var n = new (SFS2X[t(368)]);
                    n[t(432)]("ad", !0),
                    CyberInstance.socket[t(372)](new (SFS2X[t(425)])("luckywheels.spin",n))
                } else
                    CyberInstance[t(382)][t(372)](new (SFS2X[t(425)])(t(450)))
            }
        }, {
            key: e(383),
            value: function(t) {
                var n = e;
                this[n(367)] = t,
                this.randomDirection = 0;
                var r = 24 * -[2e4, 1e5, 5e4, 2e4, 2e5, 5e4, 2e4, 5e5, 1e5, 2e4, 5e4, 1e5, 2e4, 5e4, 3e5][n(358)](t[n(440)]) + 2 * this.randomDirection
                  , i = game.add[n(420)](this[n(407)]).to({
                    angle: 1440 + r
                }, 1300, Phaser[n(335)][n(438)].Out, !1)
                  , a = game[n(424)][n(420)](i).to({
                    timeScale: .1
                }, 1950, "Linear", !1);
                i.onComplete[n(424)](this[n(439)], this),
                i.start(),
                a[n(430)](),
                this.bg[n(422)][n(416)]("spinAnim", 4, !0)
            }
        }, {
            key: e(439),
            value: function() {
                var t = e
                  , n = this;
                this.bg.animations[t(369)](),
                this[t(402)](),
                setTimeout((function() {
                    var e = t;
                    try {
                        n.openSpinPrizeMenu()
                    } catch (t) {
                        console[e(419)](t),
                        n[e(362)]()
                    }
                }
                ), 600)
            }
        }, {
            key: "openSpinPrizeMenu",
            value: function() {
                var t = e
                  , n = this
                  , r = this.create(0, 0, t(414), "bg_claim");
                r.x = this[t(350)][t(436)][t(364)] - r[t(405)] / 2,
                r.y = this[t(350)][t(436)].centerY + 40;
                var i = r.x + 100;
                this[t(349)](h[t(333)](this[t(367)].value), CyberInstance[t(384)][t(413)], i, r.y + 30);
                var a = [0, 10, 20, 30, 40, 50];
                i += 200;
                var o = this[t(367)][t(345)] > a[t(377)] ? a[a[t(377)] - 1] : a[this[t(367)].days - 1];
                this[t(349)]("+" + o + "%", this[t(367)][t(345)] + " " + CyberInstance[t(384)][t(363)], i, r.y + 30),
                i += 200,
                this[t(349)]("= " + h[t(333)](this[t(367)][t(404)]), null, i, r.y + 30);
                var s = new jt(this.game,0,15,t(389),t(341));
                s.addText(CyberInstance[t(384)][t(437)].toUpperCase()),
                s.x = r.x + r[t(405)] / 2 - s.width / 2,
                s.y = r.y + r.height - s[t(366)] - 25,
                s[t(339)]((function() {
                    var e = t;
                    d[e(386)]("addProfileCoin", n.prize[e(404)]),
                    CyberInstance[e(382)].isConnected && CyberInstance[e(382)][e(372)](new (SFS2X[e(425)])("profile.refreshCoin")),
                    n.close()
                }
                )),
                this.add(s)
            }
        }, {
            key: e(349),
            value: function(t, n, r, i) {
                var a = e
                  , o = this.create(r, i, "homeScreen", a(433))
                  , s = this[a(350)].add[a(357)](o[a(405)] / 2, o[a(366)] / 2, t, {
                    font: APP_FONT,
                    fontSize: 20,
                    fill: "#FFFFFF",
                    fontWeight: "500"
                });
                if (s[a(353)][a(393)](.5),
                o[a(334)](s),
                n) {
                    var c = this[a(350)][a(424)].text(o.x + o.width / 2, o.y + o[a(366)] + 10, n, {
                        font: APP_FONT,
                        fontSize: 16,
                        fill: a(387),
                        fontWeight: a(388)
                    });
                    c[a(353)].setTo(.5, 0),
                    this[a(424)](c)
                }
            }
        }, {
            key: "rePositionSpinHighLight",
            value: function() {
                var t = e;
                0 !== this.randomDirection && (this[t(415)].angle = 5 * this[t(451)],
                this.spinHighLight.x = this[t(415)].x + 19.261 * this[t(451)],
                this[t(415)].y += .159),
                this.highLightEffect()
            }
        }, {
            key: e(374),
            value: function() {
                var t = e;
                this.spinHighLight[t(429)] = !0,
                this[t(415)][t(416)](t(409), 4, !0)
            }
        }]) && li(n[i(434)], r),
        Object[i(445)](n, i(434), {
            writable: !1
        }),
        c
    }(_);
    function mi() {
        var t = ["2355504idjFYk", "iterator", "Play", "addCloseButton", "closeButton", "bold", "apply", "addOverlay", "CUSTOM", "getName", "invite_popup_bg", "anchor", "chooseAsync", "getPrototypeOf", "guserid", "width", "Cannot call a class as a function", "Text", "make", "height", "cache", "1822338ihZWZY", "addOnce", "configurable", "challenge", "703992gBSclh", "function", "drawShareImage", "replace", "destroy", "catch", "call", "button_close", "469203RkLgRq", "addText", "inputEnabled", "onInvite", "center", "60xfFNwR", "INVITED_TO_PLAY", "player", "createView", "then", "166065HqufzV", "formatCoinWithCommas", "construct", "createTransition", "__proto__", "IMMEDIATE", "constructor", "homeScreen", "click", "game", "checkImageKey", "prototype", "955395VnryYl", "bind", "symbol", "Derived constructors may only return object or undefined", "lang", "sprite", "inviteButton", "context", "openLoadingPopup", "setPrototypeOf", "value", "9229848utsAGL", "closeLoadingPopup", "playButtonSound", "addChild", "FB_INVITE_DESC", "create", "log", "Super expression must either be null or a function", "background", "setTo", "updateAsync", "undefined", "defineProperty", "length", "sham", "close", "enumerable"];
        return (mi = function() {
            return t
        }
        )()
    }
    function gi(t) {
        var e = wi;
        return (gi = e(115) == typeof Symbol && e(146) == typeof Symbol[e(173)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(115) == typeof Symbol && t[n(138)] === Symbol && t !== Symbol.prototype ? n(146) : typeof t
        }
        )(t)
    }
    function wi(t, e) {
        var n = mi();
        return (wi = function(t, e) {
            return n[t -= 107]
        }
        )(t, e)
    }
    function Ii(t, e) {
        for (var n = wi, r = 0; r < e[n(168)]; r++) {
            var i = e[r];
            i[n(171)] = i.enumerable || !1,
            i[n(112)] = !0,
            n(154)in i && (i.writable = !0),
            Object[n(167)](t, i.key, i)
        }
    }
    function Si(t, e) {
        var n = wi;
        return (Si = Object[n(153)] ? Object[n(153)][n(145)]() : function(t, e) {
            return t[n(136)] = e,
            t
        }
        )(t, e)
    }
    function Oi(t, e) {
        var n = wi;
        if (e && ("object" === gi(e) || typeof e === n(115)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(147));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t)
    }
    function ki(t) {
        var e = wi;
        return (ki = Object[e(153)] ? Object[e(185)][e(145)]() : function(t) {
            var n = e;
            return t[n(136)] || Object[n(185)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = wi, r = t(); ; )
            try {
                if (335871 == parseInt(n(132)) / 1 + -parseInt(n(114)) / 2 + parseInt(n(110)) / 3 + parseInt(n(172)) / 4 + -parseInt(n(144)) / 5 + parseInt(n(127)) / 6 * (parseInt(n(122)) / 7) + -parseInt(n(155)) / 8)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(mi);
    var Ci = 1e6;
    const Pi = function(t) {
        var e = wi;
        !function(t, e) {
            var n = wi;
            if (typeof e !== n(115) && null !== e)
                throw new TypeError(n(162));
            t.prototype = Object[n(160)](e && e[n(143)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(167)](t, "prototype", {
                writable: !1
            }),
            e && Si(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = wi;
            if (typeof Reflect === t(166) || !Reflect[t(134)])
                return !1;
            if (Reflect.construct[t(169)])
                return !1;
            if (typeof Proxy === t(115))
                return !0;
            try {
                return Boolean[t(143)].valueOf[t(120)](Reflect[t(134)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = wi, n = ki(a);
            if (o) {
                var r = ki(this).constructor;
                t = Reflect[e(134)](n, arguments, r)
            } else
                t = n[e(178)](this, arguments);
            return Oi(this, t)
        }
        );
        function c(t) {
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(wi(188))
            }(this, c),
            s.call(this, t)
        }
        return n = c,
        i = wi,
        (r = [{
            key: "isAssetReady",
            value: function() {
                var t = wi;
                return this[t(141)][t(109)][t(142)](t(182)) && this[t(141)][t(109)].checkImageKey("shareImage")
            }
        }, {
            key: e(130),
            value: function() {
                var t = e;
                this[t(179)](),
                this.background = this[t(160)](0, 0, "invite_popup_bg"),
                this[t(163)].x = this.game[t(187)] / 2 - this[t(163)].width / 2,
                this[t(163)].y = this[t(141)][t(108)] / 2 - this[t(163)].height / 2,
                this[t(150)] = new jt(this[t(141)],0,0,t(139),"button_green_257x63"),
                this[t(150)][t(123)](CyberInstance[t(148)].INVITE_BUTTON.toUpperCase()),
                this[t(150)].x = this[t(163)][t(187)] / 2 - this[t(150)].width / 2,
                this[t(150)].y = this[t(163)][t(108)] - this[t(150)].height - 30,
                this[t(150)][t(140)](this[t(125)], this),
                this[t(163)][t(158)](this.inviteButton);
                var n = new Phaser.Text(this[t(141)],125,123,"+" + h[t(133)](Ci),{
                    font: APP_FONT,
                    fontWeight: t(177),
                    fontSize: 24,
                    fill: "#ecbe01",
                    align: t(126)
                });
                n[t(183)][t(164)](.5, 0),
                this[t(163)][t(158)](n);
                var r = CyberInstance[t(148)][t(159)][t(117)]("%s", h[t(133)](Ci))
                  , i = new (Phaser[t(189)])(this[t(141)],this.background[t(187)] / 2,259,r,{
                    font: APP_FONT,
                    fontWeight: 500,
                    fontSize: 20,
                    fill: "#eaa2ad",
                    align: t(126)
                });
                i[t(183)].setTo(.5, 0),
                this[t(163)][t(158)](i),
                this.addCloseButton(),
                this[t(135)]()
            }
        }, {
            key: e(125),
            value: function() {
                var t = e
                  , n = this;
                this.close(),
                this[t(152)]({
                    closeTimer: 15e3
                }),
                FBInstant[t(151)][t(184)]()[t(131)]((function() {
                    var e = t;
                    n[e(156)](),
                    n[e(165)]()
                }
                ))[t(119)]((function(e) {
                    n[t(156)]()
                }
                ))
            }
        }, {
            key: e(165),
            value: function() {
                var t = e
                  , n = new Ur(game)
                  , r = n[t(116)]();
                n[t(118)](),
                FBInstant[t(165)]({
                    action: t(180),
                    cta: t(174),
                    image: r,
                    text: '"' + FBInstant[t(129)][t(181)]() + '" ' + CyberInstance[t(148)][t(128)],
                    template: t(113),
                    data: {
                        guserid: CyberInstance[t(186)]
                    },
                    strategy: t(137),
                    notification: "NO_PUSH"
                })[t(119)]((function(e) {
                    console[t(161)](e)
                }
                ))
            }
        }, {
            key: e(175),
            value: function() {
                var t = e
                  , n = this
                  , r = this.game[t(107)][t(149)](0, 0, t(139), t(121));
                r.x = this[t(163)][t(187)] - r[t(187)] / 2 - 10,
                r.y = -12,
                r[t(124)] = !0,
                r.events.onInputDown[t(111)]((function() {
                    var e = t;
                    CyberInstance.sound[e(157)](),
                    n[e(170)]()
                }
                ), this),
                this[t(176)] = r,
                this.background[t(158)](this.closeButton)
            }
        }]) && Ii(n[i(143)], r),
        Object[i(167)](n, i(143), {
            writable: !1
        }),
        c
    }(_);
    function Ti(t, e) {
        var n = xi();
        return (Ti = function(t, e) {
            return n[t -= 206]
        }
        )(t, e)
    }
    function xi() {
        var t = ["instance", "constructor", "scale", "icon_chip5", "push", "sprite", "18SRrWMn", "object", "apply", "maxVideos", "#ffcaca", "ready", "Daily ads limit reached. Come back later for more!", "updateData", "sham", "128946CWiSMP", "setTo", "click", "kill", "button_green_257x63", "Cannot call a class as a function", "toUpperCase", "setText", "icon_chip2", "formatCoinWithCommas", "addEntry", "watchButton", "events", "enumerable", "icon_chip1", "iterator", "make", "width", "1674990wZVXkN", "3vINMUG", "sound", "getPrototypeOf", "addOverlay", "adsLeft", "call", "Derived constructors may only return object or undefined", "662350UOiKIb", "updateEntry", "isAssetReady", "REWARDED_POPUP_POSITION", "onInputDown", "watchCounter", "#ebdac0", "ADS_NOT_READY", "onWatchClick", "italic ", "icon_chip4", "height", "add", "defineProperty", "bg_popup_large", "function", "valueOf", "create", "addText", "1050665ARUYoo", "icon_chip3", "icon", "6844428HjyUgL", "text", "entries", "addChild", "callAll", "game", "button_gray_257x63", "prototype", "this hasn't been initialised - super() hasn't been called", "7680424xgfhhk", "REWARD_ARRAY", "visible", "revive", "switchToCompleteStyle", "value", "construct", "68948KtnVks", "rw_icon", "vid_complete", "ADS_LEFT", "buttonText", "undefined", "writable", "symbol", "background", "lang", "icon_close", "bind", "setPrototypeOf", "createTransition", "close", "__proto__", "anchor", "loadTexture", "inputEnabled", "homeScreen"];
        return (xi = function() {
            return t
        }
        )()
    }
    function _i(t) {
        var e = Ti;
        return (_i = e(265) == typeof Symbol && e(295) == typeof Symbol[e(239)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(265) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(279)] ? n(295) : typeof t
        }
        )(t)
    }
    function ji(t, e) {
        for (var n = Ti, r = 0; r < e.length; r++) {
            var i = e[r];
            i[n(237)] = i.enumerable || !1,
            i.configurable = !0,
            n(286)in i && (i[n(294)] = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function Ri(t, e) {
        var n = Ti;
        return (Ri = Object[n(300)] ? Object[n(300)][n(299)]() : function(t, e) {
            return t[n(303)] = e,
            t
        }
        )(t, e)
    }
    function Ei(t, e) {
        var n = Ti;
        if (e && (_i(e) === n(216) || typeof e === n(265)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(249));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(Ti(280));
            return t
        }(t)
    }
    function Bi(t) {
        var e = Ti;
        return (Bi = Object[e(300)] ? Object[e(245)][e(299)]() : function(t) {
            return t[e(303)] || Object.getPrototypeOf(t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = Ti, r = t(); ; )
            try {
                if (828581 == -parseInt(n(215)) / 1 * (-parseInt(n(224)) / 2) + -parseInt(n(243)) / 3 * (-parseInt(n(288)) / 4) + -parseInt(n(250)) / 5 + -parseInt(n(272)) / 6 + parseInt(n(269)) / 7 + parseInt(n(281)) / 8 + -parseInt(n(242)) / 9)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(xi);
    const Ai = function(t) {
        var e = Ti;
        !function(t, e) {
            var n = Ti;
            if (typeof e !== n(265) && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t[n(279)] = Object[n(267)](e && e[n(279)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && Ri(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = Ti;
            if (typeof Reflect === t(293) || !Reflect[t(287)])
                return !1;
            if (Reflect[t(287)][t(223)])
                return !1;
            if (typeof Proxy === t(265))
                return !0;
            try {
                return Boolean.prototype[t(266)][t(248)](Reflect[t(287)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Ti, n = Bi(a);
            if (o) {
                var r = Bi(this)[e(210)];
                t = Reflect[e(287)](n, arguments, r)
            } else
                t = n[e(217)](this, arguments);
            return Ei(this, t)
        }
        );
        function c(t) {
            var e = Ti;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Ti(229))
            }(this, c),
            s[e(248)](this, t)
        }
        return n = c,
        i = Ti,
        (r = [{
            key: e(252),
            value: function() {
                return !0
            }
        }, {
            key: "createView",
            value: function() {
                var t = e
                  , n = this;
                this[t(246)](),
                this[t(296)] = this[t(267)](0, 0, "homeScreen", t(264)),
                this[t(296)].x = this[t(277)][t(241)] / 2 - this[t(296)].width / 2,
                this[t(296)].y = this.game.height / 2 - this.background.height / 2;
                var r = this.game.make[t(273)](this[t(296)][t(241)] / 2, 20, CyberInstance[t(297)].NHAN_THUONG[t(230)](), {
                    font: APP_FONT,
                    fill: t(256),
                    fontWeight: 700,
                    fontSize: 30
                });
                r[t(304)][t(225)](.5, 0),
                this[t(296)][t(275)](r);
                var i = this[t(277)][t(240)][t(273)](this.background[t(241)] / 2, 70, CyberInstance[t(297)].NHAN_THUONG_DESC, {
                    font: t(259) + APP_FONT,
                    fill: "#ebdac0",
                    fontWeight: 400,
                    fontSize: 16
                });
                i[t(304)].setTo(.5, 0),
                this[t(296)][t(275)](i),
                this.adsLeft = this[t(277)][t(240)][t(273)](this.background[t(241)] / 2, 100, CyberInstance[t(297)].ADS_LEFT + Mt[t(209)][t(218)], {
                    font: APP_FONT,
                    fill: t(256),
                    fontWeight: 500,
                    fontSize: 24
                }),
                this[t(247)].anchor[t(225)](.5, 0),
                this[t(296)][t(275)](this[t(247)]);
                var a = this[t(277)][t(240)][t(214)](0, 15, t(208), t(298));
                a.x = this.background[t(241)] - a.width - 15,
                a[t(207)] = !0,
                a[t(236)][t(254)][t(262)]((function() {
                    var e = t;
                    CyberInstance[e(244)].playButtonSound(),
                    n[e(302)]()
                }
                )),
                this[t(296)][t(275)](a);
                var o = new jt(this.game,0,0,t(208),t(278));
                o.x = this.background.width / 2 - o[t(241)] / 2,
                o.y = this[t(296)][t(261)] - o[t(261)] - 30,
                o[t(268)](CyberInstance[t(297)].WATCH_AD[t(230)](), {
                    font: APP_FONT,
                    fill: "#ffffff",
                    fontWeight: 400,
                    fontSize: 26
                }),
                o[t(292)][t(304)][t(225)](0, .5);
                var s = this[t(277)].make[t(214)](10, 10, t(208), t(289));
                o[t(275)](s),
                s.x = 40,
                o[t(292)].x = s.x + s[t(241)] + 10,
                o[t(226)](this[t(258)], this),
                this[t(296)].addChild(o),
                this.watchButton = o;
                var c = this[t(267)](0, 0, t(208), "vid_line");
                c.x = this.background[t(241)] / 2 - c.width / 2,
                c.y = this[t(296)][t(261)] / 2 - c.height / 2 + 25,
                this[t(296)].addChild(c),
                this[t(274)] = [];
                for (var u = 0; u < 5; u++) {
                    var h = this[t(234)]();
                    this[t(274)][t(213)](h)
                }
                var l = this[t(296)][t(241)] / 2 - (5 * this.entries[0][t(241)] + 80) / 2;
                for (u = 0; u < 5; u++)
                    this.entries[u].x = l,
                    l += this[t(274)][u][t(241)] + 20;
                this[t(222)](),
                this.createTransition()
            }
        }, {
            key: e(258),
            value: function() {
                var t = e;
                Mt[t(209)][t(220)] ? this.watchCounter < Mt[t(209)][t(218)] ? (Mt[t(209)].show(Mt[t(253)]),
                this[t(302)]()) : new M(game,{
                    text: t(221),
                    buttonText: CyberInstance[t(297)].CLOSE,
                    hideCloseButton: !0
                }) : (new M(game,{
                    text: CyberInstance[t(297)][t(257)],
                    buttonText: CyberInstance[t(297)].CLOSE,
                    hideCloseButton: !0
                }),
                this[t(302)]())
            }
        }, {
            key: e(222),
            value: function() {
                var t = e;
                this[t(255)] = Mt.instance[t(255)],
                this[t(255)] > Mt[t(209)].maxVideos && (this[t(255)] = Mt[t(209)][t(218)]);
                var n = this[t(255)] < 5 ? 0 : this[t(255)] - 4;
                this[t(255)] == Mt[t(209)][t(218)] && (n = this[t(255)] - 5);
                for (var r = 0; r < 5; ) {
                    var i = n < 5 ? Mt[t(282)][n] : Mt[t(282)][4];
                    this.updateEntry(r, i),
                    n <= this[t(255)] - 1 && this[t(285)](r),
                    r++,
                    n++
                }
                this[t(247)].setText(CyberInstance[t(297)][t(291)] + (Mt[t(209)].maxVideos - this.watchCounter)),
                this[t(235)].loadTexture(t(208), Mt[t(209)].ready ? t(228) : t(278))
            }
        }, {
            key: e(251),
            value: function(t, n) {
                var r = e;
                if (t < 5) {
                    var i = r(238);
                    switch (n) {
                    case 5e4:
                        i = r(238);
                        break;
                    case 1e5:
                        i = r(232);
                        break;
                    case 2e5:
                        i = r(270);
                        break;
                    case 3e5:
                        i = r(260);
                        break;
                    case 5e5:
                        i = r(212)
                    }
                    this[r(274)][t].chip[r(206)]("homeScreen", i),
                    this[r(274)][t].text[r(231)](h[r(233)](n))
                }
            }
        }, {
            key: e(285),
            value: function(t) {
                var n = e;
                this[n(274)][t][n(271)][n(206)](n(208), n(290))
            }
        }, {
            key: e(234),
            value: function() {
                var t = e
                  , n = this.game[t(240)][t(214)](0, 0, "homeScreen", "vid_item");
                n.y = this[t(296)][t(261)] / 2 - n.height / 2 + 25,
                this[t(296)][t(275)](n);
                var r = this[t(277)].make[t(214)](0, 0, t(208), "vid_lock");
                r.x = n[t(241)] / 2 - r[t(241)] / 2,
                r.y = 10 - r.height,
                n.addChild(r),
                n[t(271)] = r;
                var i = this[t(277)].make.sprite(n.width / 2, n[t(261)] / 2 - 6, t(208), "icon_chip1");
                i[t(211)][t(225)](.9),
                i.anchor[t(225)](.5),
                n.addChild(i),
                n.chip = i;
                var a = this.game[t(240)][t(273)](n[t(241)] / 2, n[t(261)] - 26, "", {
                    font: APP_FONT,
                    fill: t(219),
                    fontWeight: 500,
                    fontSize: 18
                });
                return a[t(304)][t(225)](.5, 0),
                n[t(275)](a),
                n[t(273)] = a,
                n
            }
        }, {
            key: "open",
            value: function() {
                var t = e;
                0 == this[t(283)] && (this[t(283)] = !0,
                this[t(276)](t(284)),
                this.updateData(),
                this[t(301)]())
            }
        }, {
            key: "close",
            value: function() {
                var t = e;
                1 == this[t(283)] && (this[t(276)](t(227)),
                this[t(283)] = !1)
            }
        }]) && ji(n[i(279)], r),
        Object[i(263)](n, i(279), {
            writable: !1
        }),
        c
    }(_);
    function Di(t) {
        var e = Ni;
        return (Di = e(275) == typeof Symbol && e(266) == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(275) == typeof Symbol && t[n(237)] === Symbol && t !== Symbol.prototype ? n(266) : typeof t
        }
        )(t)
    }
    function Fi(t, e) {
        for (var n = Ni, r = 0; r < e[n(235)]; r++) {
            var i = e[r];
            i[n(253)] = i[n(253)] || !1,
            i.configurable = !0,
            n(263)in i && (i[n(207)] = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function Ni(t, e) {
        var n = Mi();
        return (Ni = function(t, e) {
            return n[t -= 207]
        }
        )(t, e)
    }
    function Li(t, e) {
        var n = Ni;
        return (Li = Object[n(234)] ? Object.setPrototypeOf[n(251)]() : function(t, e) {
            return t[n(215)] = e,
            t
        }
        )(t, e)
    }
    function Gi(t, e) {
        var n = Ni;
        if (e && ("object" === Di(e) || typeof e === n(275)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(271));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(Ni(238));
            return t
        }(t)
    }
    function Mi() {
        var t = ["setPrototypeOf", "length", "add", "constructor", "this hasn't been initialised - super() hasn't been called", "1322110NVbKWJ", "center", "background", "CLOSE", "instance", "sham", "18FhvZKi", "apply", "#f59eac", "addText", "12DMEgPV", "88lXhonC", "bind", "addOnce", "enumerable", "undefined", "172902eFeKIU", "addChild", "463340KbFSiO", "2311968IkxKxL", "prototype", "normal", "212pcvHKY", "click", "value", "addBackground", "442602SfhiSC", "symbol", "height", "playButtonSound", "FREE_SPIN", "icon_close", "Derived constructors may only return object or undefined", "ADS_NOT_READY", "watchButton", "setTextBounds", "function", "sound", "writable", "homeScreen", "21KHDFeF", "getPrototypeOf", "1986936jrBKEk", "width", "onInputDown", "game", "__proto__", "WATCH_AD", "text", "middle", "defineProperty", "close", "valueOf", "onWatchClick", "isAssetReady", "show", "ready", "inputEnabled", "createTransition", "bg_popup_medium_484x292", "call", "construct", "toUpperCase", "3079wyBcSJ", "lang"];
        return (Mi = function() {
            return t
        }
        )()
    }
    function Wi(t) {
        var e = Ni;
        return (Wi = Object[e(234)] ? Object[e(210)].bind() : function(t) {
            return t[e(215)] || Object.getPrototypeOf(t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = Ni, r = t(); ; )
            try {
                if (401103 == -parseInt(n(232)) / 1 * (parseInt(n(261)) / 2) + parseInt(n(265)) / 3 * (-parseInt(n(249)) / 4) + -parseInt(n(239)) / 5 + -parseInt(n(255)) / 6 * (parseInt(n(209)) / 7) + parseInt(n(258)) / 8 + -parseInt(n(245)) / 9 * (parseInt(n(257)) / 10) + -parseInt(n(250)) / 11 * (-parseInt(n(211)) / 12))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Mi);
    const zi = function(t) {
        var e = Ni;
        !function(t, e) {
            var n = Ni;
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(219)](t, n(259), {
                writable: !1
            }),
            e && Li(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = Ni;
            if (typeof Reflect === t(254) || !Reflect[t(230)])
                return !1;
            if (Reflect.construct[t(244)])
                return !1;
            if (typeof Proxy === t(275))
                return !0;
            try {
                return Boolean[t(259)][t(221)].call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Ni, n = Wi(a);
            if (o) {
                var r = Wi(this)[e(237)];
                t = Reflect.construct(n, arguments, r)
            } else
                t = n[e(246)](this, arguments);
            return Gi(this, t)
        }
        );
        function c(t) {
            var e = Ni;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, c),
            s[e(229)](this, t)
        }
        return n = c,
        i = Ni,
        (r = [{
            key: "createView",
            value: function() {
                var t = Ni
                  , e = this;
                this.addOverlay(.7),
                this[t(264)](t(208), t(228));
                var n = this[t(214)][t(236)][t(217)](30, 50, CyberInstance.lang[t(269)], {
                    font: APP_FONT,
                    fontSize: 24,
                    fill: t(247),
                    fontWeight: t(260),
                    wordWrap: !0,
                    wordWrapWidth: this[t(241)][t(212)] - 60,
                    align: "center",
                    boundsAlignH: t(240),
                    boundsAlignV: t(218)
                });
                n[t(274)](0, 0, this[t(241)][t(212)] - 60, 100),
                this[t(241)][t(256)](n),
                this[t(273)] = new jt(this[t(214)],0,0,t(208),"button_green_197x64"),
                this[t(273)].x = this[t(241)][t(212)] / 2 - this.watchButton.width / 2,
                this.watchButton.y = this[t(241)][t(267)] - this[t(273)][t(267)] - 50,
                this[t(273)][t(248)](CyberInstance[t(233)][t(216)][t(231)]()),
                this[t(273)][t(262)](this[t(222)], this),
                this[t(241)].addChild(this.watchButton);
                var r = this.create(0, 0, t(208), t(270));
                r.x = this[t(241)][t(212)] + this.background.x + 20,
                r.y = this[t(241)].y - 50,
                r[t(226)] = !0,
                r.events[t(213)][t(252)]((function() {
                    var n = t;
                    CyberInstance[n(276)][n(268)](),
                    e[n(220)]()
                }
                )),
                this[t(227)]()
            }
        }, {
            key: e(222),
            value: function() {
                var t = e;
                Mt[t(243)][t(225)] ? Mt[t(243)][t(224)](Mt.SPIN_POSITION) : new M(game,{
                    text: CyberInstance[t(233)][t(272)],
                    buttonText: CyberInstance[t(233)][t(242)],
                    hideCloseButton: !0
                }),
                this.close()
            }
        }, {
            key: e(223),
            value: function() {
                return !0
            }
        }]) && Fi(n[i(259)], r),
        Object[i(219)](n, i(259), {
            writable: !1
        }),
        c
    }(_);
    function Ui(t) {
        var e = Ki;
        return (Ui = e(463) == typeof Symbol && e(461) == typeof Symbol[e(491)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && "function" == typeof Symbol && t[n(417)] === Symbol && t !== Symbol.prototype ? n(461) : typeof t
        }
        )(t)
    }
    function Vi(t, e) {
        for (var n = Ki, r = 0; r < e[n(424)]; r++) {
            var i = e[r];
            i[n(415)] = i[n(415)] || !1,
            i.configurable = !0,
            n(409)in i && (i[n(477)] = !0),
            Object[n(476)](t, i[n(441)], i)
        }
    }
    function Hi(t, e) {
        var n = Ki;
        return (Hi = Object[n(446)] ? Object.setPrototypeOf[n(407)]() : function(t, e) {
            return t[n(416)] = e,
            t
        }
        )(t, e)
    }
    function Xi(t, e) {
        var n = Ki;
        if (e && ("object" === Ui(e) || typeof e === n(463)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(426));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(Ki(499));
            return t
        }(t)
    }
    function Yi(t) {
        var e = Ki;
        return (Yi = Object[e(446)] ? Object[e(465)][e(407)]() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    function qi() {
        var t = ["function", "undefined", "getPrototypeOf", "dailyCollected", "create", "Cannot call a class as a function", "inputEnabled", "height", "visible", "#f5c78a", "scale", "click", "revive", "defineProperty", "writable", "openLoadingPopup", "addText", "collect_button", "make", "homeScreen", "_title", "ADS_NOT_READY", "3daYHXh", "dailyGift.collect", "callAll", "708XLpYaq", "onInputDown", "add", "iterator", "collectButton", "Double", "anchor", "#fbb5b2", "call", "#ffffff", "entries", "this hasn't been initialised - super() hasn't been called", "onCollect", "open", "createTransition", "game", "sound", "ExtensionRequest", "langCode", "Nhận", "Super expression must either be null or a function", "setTo", "formatCoinWithCommas", "prototype", "bind", "14539Vfjifh", "value", "construct", "Gấp đôi", "onWatchClick", "width", "dailybonus", "enumerable", "__proto__", "constructor", "image", "Đăng nhập mỗi ngày để nhận thưởng hấp dẫn", "day", "Ngày ", "CLOSE", "playButtonSound", "length", "lang", "Derived constructors may only return object or undefined", "12euLigd", "close", "4DLMRtP", "DAILY_POSITION", "2272330GWTbNm", "events", "background", "addChild", "instance", "item_bg_overlay", "show", "1692984qrTdrW", "170zRmjSW", "valueOf", "key", "watchButton", "buttonText", "send", "169713pcURga", "setPrototypeOf", "1377033MpOvhJ", "video_button", "item_bg3", "dailyDays", "8445173MrVCcM", "addOverlay", "icon_close", "kill", "alpha", "Day ", "socket", "119598QrVgWu", "text", "sprite", "symbol", "Receive"];
        return (qi = function() {
            return t
        }
        )()
    }
    function Ki(t, e) {
        var n = qi();
        return (Ki = function(t, e) {
            return n[t -= 405]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = Ki, r = t(); ; )
            try {
                if (305785 == parseInt(n(485)) / 1 * (-parseInt(n(458)) / 2) + parseInt(n(447)) / 3 + parseInt(n(429)) / 4 * (-parseInt(n(431)) / 5) + -parseInt(n(488)) / 6 * (-parseInt(n(408)) / 7) + -parseInt(n(438)) / 8 + parseInt(n(445)) / 9 * (-parseInt(n(439)) / 10) + -parseInt(n(451)) / 11 * (-parseInt(n(427)) / 12))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(qi);
    const Ji = function(t) {
        var e = Ki;
        !function(t, e) {
            var n = Ki;
            if (typeof e !== n(463) && null !== e)
                throw new TypeError(n(508));
            t[n(406)] = Object[n(467)](e && e[n(406)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(476)](t, n(406), {
                writable: !1
            }),
            e && Hi(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = Ki;
            if (typeof Reflect === t(464) || !Reflect[t(410)])
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype[t(440)][t(496)](Reflect[t(410)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Ki, n = Yi(a);
            if (o) {
                var r = Yi(this).constructor;
                t = Reflect[e(410)](n, arguments, r)
            } else
                t = n.apply(this, arguments);
            return Xi(this, t)
        }
        );
        function c(t) {
            var e = Ki;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Ki(468))
            }(this, c),
            s[e(496)](this, t)
        }
        return n = c,
        r = [{
            key: "isAssetReady",
            value: function() {
                return -1 != CyberGlobalData[Ki(450)]
            }
        }, {
            key: "createView",
            value: function() {
                var t = Ki
                  , e = this;
                this[t(452)](.8),
                this[t(433)] = this[t(467)](0, 0, "dailybonus", "bg"),
                this[t(433)].x = this[t(503)].width / 2 - this[t(433)][t(413)] / 2,
                this[t(433)].y = this[t(503)][t(470)] / 2 - this[t(433)].height / 2 + 20;
                var n = this[t(503)].make[t(418)](0, -87, "dailybonus", "header_bg");
                n.x = this[t(433)][t(413)] / 2 - n[t(413)] / 2,
                this[t(433)][t(434)](n);
                var r = this.game[t(481)][t(418)](n[t(413)] / 2 + 27, 75, t(414), CyberInstance.langCode + t(483));
                r[t(494)][t(509)](.5),
                n[t(434)](r);
                var i = this[t(503)][t(481)][t(459)](this[t(433)][t(413)] / 2, 30, "vn" == CyberInstance[t(506)] ? t(419) : "Log in every day to receive rewards", {
                    font: APP_FONT,
                    fill: t(495),
                    fontWeight: 400,
                    fontSize: 22
                });
                i.anchor[t(509)](.5, 0),
                this[t(433)][t(434)](i);
                var a = this[t(503)][t(481)][t(460)](0, 0, t(482), t(453));
                a.x = this[t(433)][t(413)] + 15,
                a.y = -a.height / 2,
                a[t(469)] = !0,
                a[t(432)][t(489)][t(490)]((function() {
                    var n = t;
                    CyberInstance[n(504)][n(423)](),
                    e.close()
                }
                )),
                this[t(433)].addChild(a),
                this[t(498)] = [];
                for (var o = 75, s = 82, c = [3e4, 4e4, 1e5, 5e4, 75e3, 15e4, 2e5], u = 0; u < 7; u++) {
                    3 == u ? (o = 75,
                    s = 245) : 6 == u && (o = 550,
                    s = 82);
                    var l = this[t(503)].make[t(418)](o, s, t(414), u < 6 ? "item_bg" : t(449));
                    this[t(433)][t(434)](l),
                    this[t(498)][u] = l,
                    o += l.width + 15;
                    var f = !1;
                    if (CyberGlobalData[t(450)] > u + 1)
                        f = !0;
                    else if (CyberGlobalData[t(450)] == u + 1)
                        if (0 == CyberGlobalData.dailyCollected) {
                            var p = this.game.make[t(418)](l[t(413)] / 2, l[t(470)] / 2, "dailybonus", "light");
                            p[t(494)][t(509)](.5),
                            l[t(434)](p),
                            6 == u && p[t(473)][t(509)](1.5)
                        } else
                            f = !0;
                    if (f) {
                        var y = this[t(503)][t(481)].image(l.x + 5, l.y + 5, "dailybonus", u < 6 ? t(436) : "item_bg3_overlay");
                        6 == u && (y.x = l.x - 8),
                        this[t(433)][t(434)](y);
                        var d = this[t(503)][t(481)][t(418)](y[t(413)] / 2 + 7, y[t(470)] / 2, t(414), "icon_complete");
                        d[t(494)][t(509)](.5),
                        y.addChild(d)
                    }
                    var v = this[t(503)][t(481)].image(l[t(413)] / 2, l.height / 2, "dailybonus", t(420) + (u + 1));
                    v[t(494)][t(509)](.5),
                    l[t(434)](v);
                    var b = this[t(503)][t(481)][t(459)](l[t(413)] / 2, u < 6 ? 10 : 20, "vn" == CyberInstance[t(506)] ? t(421) + (u + 1) : t(456) + (u + 1), {
                        font: APP_FONT,
                        fill: t(495),
                        fontWeight: 400,
                        fontSize: u < 6 ? 20 : 24
                    });
                    b[t(494)][t(509)](.5, 0),
                    l.addChild(b);
                    var m = this[t(503)][t(481)][t(459)](l[t(413)] / 2, u < 6 ? l.height - 35 : l[t(470)] - 50, h[t(405)](c[u]), {
                        font: APP_FONT,
                        fill: t(472),
                        fontWeight: 400,
                        fontSize: u < 6 ? 22 : 24
                    });
                    m.anchor[t(509)](.5, 0),
                    l[t(434)](m)
                }
                this[t(492)] = new jt(this.game,0,0,"dailybonus",t(480)),
                this.collectButton.y = this[t(433)][t(470)] - this.collectButton[t(470)] - 25,
                this[t(492)][t(479)]("vn" == CyberInstance.langCode ? t(507) : t(462), {
                    font: APP_FONT,
                    fill: "#591e01",
                    fontWeight: 400,
                    fontSize: 26
                }),
                this[t(433)][t(434)](this.collectButton),
                this.watchButton = new jt(this[t(503)],0,0,"dailybonus",t(448)),
                this[t(442)].y = this[t(433)][t(470)] - this[t(442)].height - 25,
                this[t(442)].addText("vn" == CyberInstance[t(506)] ? t(411) : t(493), {
                    font: APP_FONT,
                    fill: t(497),
                    fontWeight: 400,
                    fontSize: 26
                }),
                this[t(442)][t(443)][t(494)][t(509)](0, .5),
                this.watchButton.buttonText.x = 55,
                this[t(433)][t(434)](this[t(442)]),
                this[t(492)].x = this[t(433)].width / 2 - (this[t(492)][t(413)] + this[t(442)].width + 25) / 2,
                this.watchButton.x = this[t(492)].x + this[t(492)].width + 25,
                CyberGlobalData[t(466)] ? (this.collectButton[t(455)] = .5,
                this[t(442)].alpha = .5) : (this[t(492)].click(this[t(500)], this),
                this[t(442)][t(474)](this.onWatchClick, this)),
                this.createTransition()
            }
        }, {
            key: e(500),
            value: function() {
                var t = e;
                CyberInstance[t(457)][t(444)](new (SFS2X[t(505)])(t(486))),
                this[t(428)](),
                this[t(478)]({
                    closeTimer: 15e3
                })
            }
        }, {
            key: e(412),
            value: function() {
                var t = e;
                Mt[t(435)].ready ? (Mt.instance[t(437)](Mt[t(430)]),
                this[t(428)](),
                this[t(478)]()) : new M(game,{
                    text: CyberInstance[t(425)][t(484)],
                    buttonText: CyberInstance[t(425)][t(422)],
                    hideCloseButton: !0
                })
            }
        }, {
            key: e(501),
            value: function() {
                var t = e;
                0 == this[t(471)] && (this[t(471)] = !0,
                this[t(487)](t(475)),
                this[t(502)]())
            }
        }, {
            key: "close",
            value: function() {
                var t = e;
                1 == this[t(471)] && (this[t(487)](t(454)),
                this[t(471)] = !1)
            }
        }],
        i = Ki,
        r && Vi(n[i(406)], r),
        Object[i(476)](n, i(406), {
            writable: !1
        }),
        c
    }(_);
    function Qi(t, e) {
        var n = $i();
        return (Qi = function(t, e) {
            return n[t -= 184]
        }
        )(t, e)
    }
    function Zi(t, e) {
        for (var n = Qi, r = 0; r < e.length; r++) {
            var i = e[r];
            i.enumerable = i[n(217)] || !1,
            i[n(284)] = !0,
            n(251)in i && (i.writable = !0),
            Object[n(234)](t, i[n(256)], i)
        }
    }
    function $i() {
        var t = ["joinOfficialGroupAsync", "ready", "4160430pTKuVC", "defineProperty", "bottom_bg", "alpha", "13646FhfbVg", "open", "openSpinPopup", "fbgroup", "maxVideos", "_lobby_button", "openInvitePopup", "135079CzyxtU", "rewardVideoButton", "videoPopup", "spinCounter", "chat", "dailyPopup", "icon_khodo_en", "value", "prototype", "929451OiJFYm", "click", "instance", "key", "654536easULN", "Cannot call a class as a function", "icon_gift_en", "SPIN", "icon_leaderboard_en", "icon_invite", "state", "watchCounter", "spin_", "sprite", "spinBtn", "openPublicChatScreen", "formatTime", "text", "lang", "updateVideoBadge", "chatBadge", "visible", "height", "spin", "openLoaderboardPopup", "27cucsye", "9807974IauzLl", "closeLoadingPopup", "start", "closeVideoLoading", "spinText", "configurable", "homeScreen", "rewardVideoBadge", "icon_khodo", "onSpinWheelResponse", "177YMkCgu", " : ", "setText", "floor", "add", "anim", "canFollowOfficialPageAsync", "icon_gift", "344RlXrOf", "shop_icon_en", "animations", "Animation", "collectTime", "#FFFFFF", "spinWatched", "langCode", "icon_invite_en", "dailyDays", "openLobbyScreen", "spin_1", "showChatBadge", "shop_icon", "500", "circle_37x37", "icon_fb", "openPublicChat", "WATCH AD", "width", "make", "current", "ShopScreen", "addChild", "inited", "rewardVideoCount", "game", "2380340wkJwan", "anchor", "spinPopup", "openDailyPopup", "enumerable", "community", "icon_daily_en", "openShop", "substr", "GIFT_TIME", "setTo", "spinAnim", "container", "followOfficialPageAsync", "hideChatBadge", "LobbyScreen", "resetDailyPopup", "35BqblcK"];
        return ($i = function() {
            return t
        }
        )()
    }
    !function(t, e) {
        for (var n = Qi, r = t(); ; )
            try {
                if (651466 == -parseInt(n(253)) / 1 + parseInt(n(237)) / 2 * (-parseInt(n(289)) / 3) + parseInt(n(257)) / 4 * (-parseInt(n(230)) / 5) + parseInt(n(233)) / 6 + parseInt(n(244)) / 7 * (parseInt(n(186)) / 8) + -parseInt(n(278)) / 9 * (-parseInt(n(213)) / 10) + parseInt(n(279)) / 11)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }($i);
    var ta = function() {
        var t, e, n, r = Qi;
        function i(t) {
            var e = Qi
              , n = this;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Qi(258))
            }
            )(this, i),
            this[e(263)] = t,
            this[e(212)] = t[e(212)],
            this[e(225)] = t.container;
            var r = this[e(225)].create(0, 0, e(285), e(235));
            r[e(205)] = this[e(212)][e(205)] - 240,
            r.x = this[e(212)][e(205)] / 2 - r.width / 2,
            r.y = this.game.height - r[e(275)];
            var a = new jt(this[e(212)],0,0,e(285),"vn" == CyberInstance[e(193)] ? e(199) : e(187));
            a.x = 60 - a.width / 2,
            a.y = this[e(212)][e(275)] - a.height - 20,
            a[e(254)](this[e(220)], this),
            this[e(225)][e(293)](a);
            var o = r.x + 35;
            "en" == CyberInstance[e(193)] && (o += 10);
            var s = new jt(this[e(212)],o,0,e(285),"vn" == CyberInstance[e(193)] ? e(262) : e(194));
            s.y = this.game.height - s.height - 15,
            s[e(254)](this[e(243)], this),
            this[e(225)][e(293)](s),
            o += s.width + 30,
            "en" == CyberInstance.langCode && (o += 10);
            var c = new jt(this.game,o,0,e(285),"vn" == CyberInstance[e(193)] ? e(185) : e(259));
            c.y = this.game[e(275)] - c.height - 15,
            c.click(this.openRewardVideoPopup, this),
            this[e(225)].add(c),
            this[e(245)] = c,
            this[e(245)][e(236)] = .5,
            this[e(286)] = this[e(212)][e(206)][e(266)](0, 0, "homeScreen", e(201)),
            this[e(286)].x = c.x + c[e(205)] - this[e(286)][e(205)] / 2 - 10,
            this[e(286)].y = c.y - this.rewardVideoBadge[e(275)] / 2,
            this[e(225)][e(293)](this[e(286)]),
            this[e(211)] = this[e(212)][e(293)][e(270)](this[e(286)].width / 2, this.rewardVideoBadge[e(275)] / 2 + 2, "0", {
                font: APP_FONT,
                fontSize: 22,
                fill: e(191),
                fontWeight: 500
            }),
            this[e(211)][e(214)][e(223)](.5),
            this[e(286)][e(209)](this[e(211)]),
            this[e(286)][e(274)] = !1,
            o += c[e(205)] + 30,
            "en" == CyberInstance[e(193)] && (o += 10);
            var u = new jt(this[e(212)],o,0,e(285),"vn" == CyberInstance[e(193)] ? "icon_daily" : e(219));
            u.y = this[e(212)][e(275)] - u[e(275)] - 15,
            u[e(254)](this[e(216)], this),
            this[e(225)].add(u),
            "en" == CyberInstance.langCode && (s.y = s.y - 4,
            c.y = c.y - 4,
            this[e(286)].x = this[e(286)].x + 20);
            var h = new jt(this[e(212)],0,0,e(285),CyberInstance[e(193)] + e(242));
            h.x = this[e(212)][e(205)] - h[e(205)] - 15,
            h.y = this[e(212)][e(275)] - h[e(275)] - 15,
            h[e(254)](this[e(196)], this),
            this[e(225)][e(293)](h);
            var l = new jt(this[e(212)],0,0,e(285),"vn" == CyberInstance[e(193)] ? e(287) : e(250));
            l.x = r.x + r[e(205)] - 25 - l[e(205)],
            "en" == CyberInstance[e(193)] && (l.x = l.x + 10),
            l.y = this[e(212)][e(275)] - l[e(275)] - 19,
            l[e(254)]((function() {
                var t = e;
                ot[t(255)][t(210)] && n.game[t(263)][t(281)]("BackpackScreen", !0, !1)
            }
            )),
            this.container[e(293)](l);
            var f = new jt(this[e(212)],0,0,e(285),"vn" == CyberInstance[e(193)] ? "icon_leaderboard" : e(261));
            f.x = l.x - f[e(205)] - 25,
            f.y = this.game[e(275)] - f.height - 19,
            f.click(this[e(277)], this),
            this[e(225)][e(293)](f);
            var p = new jt(this[e(212)],0,0,e(285),e(240));
            p.x = f.x - p[e(205)] - 25,
            p.y = this[e(212)][e(275)] - p[e(275)] - 15,
            p[e(254)]((function() {
                var t = e;
                FBInstant[t(218)].canJoinOfficialGroupAsync().then((function(e) {
                    var n = t;
                    e && FBInstant[n(218)][n(231)]()
                }
                ))
            }
            )),
            this[e(225)].add(p);
            var y = new jt(this[e(212)],0,0,e(285),e(202));
            if (y.x = p.x - y.width - 25,
            y.y = this[e(212)][e(275)] - y.height - 15,
            y[e(254)]((function() {
                var t = e;
                FBInstant[t(218)][t(184)]().then((function(e) {
                    var n = t;
                    e && FBInstant[n(218)][n(226)]()
                }
                ))
            }
            )),
            this[e(225)][e(293)](y),
            "en" == CyberInstance.langCode && (f.y = f.y + 4,
            l.y = l.y + 4),
            this[e(267)] = new jt(this[e(212)],0,0,e(285),e(197)),
            this.spinBtn.x = this.game[e(205)] / 2 - this[e(267)][e(205)] / 2,
            this[e(267)].y = this.game[e(275)] - this[e(267)][e(275)],
            this[e(267)][e(294)] = this.spinBtn.animations[e(293)](e(224), Phaser[e(189)].generateFrameNames(e(265), 1, 2)),
            this[e(267)][e(188)].play(e(224), 4, !0),
            this[e(267)].click(this[e(239)], this),
            this[e(225)].add(this[e(267)]),
            this.spinText = this[e(212)][e(293)][e(270)](this.game[e(205)] / 2, this[e(212)][e(275)] - 39, CyberInstance[e(271)][e(260)], {
                font: APP_FONT,
                fontSize: 20,
                fill: "#f8d172",
                fontWeight: e(200)
            }),
            this[e(283)][e(214)][e(223)](.5, 0),
            this.container[e(293)](this[e(283)]),
            CyberGlobalData.collectTime < E[e(222)]) {
                var d = E[e(222)] - CyberGlobalData.collectTime;
                this[e(283)][e(291)](this[e(269)](d))
            }
            Mt[e(255)][e(232)] && Mt[e(255)][e(247)] < 2 && E.GIFT_TIME - CyberGlobalData[e(190)] > 500 && this[e(283)][e(291)](e(204)),
            this[e(272)]()
        }
        return t = i,
        n = Qi,
        (e = [{
            key: r(220),
            value: function() {
                var t = r;
                ot.instance[t(210)] && this.game.state.start(t(208), !0, !1)
            }
        }, {
            key: r(216),
            value: function() {
                var t = r;
                -1 != CyberGlobalData[t(195)] && (this[t(249)] ? this[t(249)][t(238)]() : this[t(249)] = new Ji(this[t(212)]))
            }
        }, {
            key: r(229),
            value: function() {
                var t = r;
                this.dailyPopup[t(280)](),
                this[t(249)].destroy(),
                this[t(249)] = null
            }
        }, {
            key: "updateSpinTimer",
            value: function(t) {
                var e = r;
                t < E[e(222)] ? this[e(283)][e(291)](this[e(269)](E[e(222)] - t)) : this[e(283)].setText(CyberInstance[e(271)][e(260)])
            }
        }, {
            key: "openSpinPopup",
            value: function() {
                var t = r;
                if (CyberGlobalData.collectTime < E[t(222)]) {
                    var e = E[t(222)] - CyberGlobalData.collectTime;
                    this[t(283)][t(291)](this.formatTime(e))
                }
                !0 === CyberGlobalData[t(192)] ? this[t(215)] = new bi(this.game) : CyberGlobalData.collectTime >= E[t(222)] ? this.spinPopup = new bi(this[t(212)]) : Mt[t(255)][t(232)] && Mt[t(255)][t(247)] < 2 && E[t(222)] - CyberGlobalData.collectTime > 500 && new zi(game)
            }
        }, {
            key: r(276),
            value: function(t) {
                var e = r;
                this[e(215)] && this[e(215)][e(288)](t)
            }
        }, {
            key: r(198),
            value: function() {
                var t = r;
                this[t(273)][t(274)] || (this.chatBadge.visible = !0)
            }
        }, {
            key: r(227),
            value: function() {
                var t = r;
                this.chatBadge[t(274)] = !1
            }
        }, {
            key: r(203),
            value: function() {
                var t = r;
                CyberInstance[t(248)][t(268)]()
            }
        }, {
            key: r(196),
            value: function() {
                var t = r;
                this[t(212)][t(263)][t(207)] != t(228) && this[t(212)].state.start(t(228), !0, !1)
            }
        }, {
            key: r(243),
            value: function() {
                new Pi(this[r(212)])
            }
        }, {
            key: r(277),
            value: function() {
                var t = r;
                "LeaderboardScreen" != this[t(212)][t(263)][t(207)] && this[t(212)].state[t(281)]("LeaderboardScreen", !0, !1)
            }
        }, {
            key: "openRewardVideoPopup",
            value: function() {
                var t = r;
                this.videoPopup ? this[t(246)][t(238)]() : this[t(246)] = new Ai(this[t(212)])
            }
        }, {
            key: "updateVideoBadge",
            value: function() {
                var t = r;
                Mt[t(255)].ready ? Mt[t(255)][t(241)] - Mt[t(255)].watchCounter > 0 ? (this[t(211)][t(291)](Mt[t(255)][t(241)] - Mt.instance[t(264)]),
                0 == this.rewardVideoBadge[t(274)] && (this.rewardVideoBadge[t(274)] = !0,
                this[t(245)][t(236)] = 1)) : (this.rewardVideoBadge.visible = !1,
                this[t(245)][t(236)] = .5) : (this[t(286)][t(274)] = !1,
                this[t(245)][t(236)] = .5)
            }
        }, {
            key: r(282),
            value: function() {
                var t = r;
                this[t(246)] && this[t(246)][t(280)]()
            }
        }, {
            key: r(269),
            value: function(t) {
                var e = r
                  , n = "0" + Math[e(292)](t / 60 / 60)
                  , i = "0" + Math[e(292)]((t - 60 * n * 60) / 60);
                return n[e(221)](-2) + e(290) + i[e(221)](-2)
            }
        }]) && Zi(t.prototype, e),
        Object[n(234)](t, n(252), {
            writable: !1
        }),
        i
    }();
    function ea(t) {
        var e = ha;
        return (ea = e(166) == typeof Symbol && e(172) == typeof Symbol[e(124)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(166) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(155)] ? n(172) : typeof t
        }
        )(t)
    }
    function na(t, e) {
        for (var n = ha, r = 0; r < e[n(118)]; r++) {
            var i = e[r];
            i.enumerable = i[n(145)] || !1,
            i[n(142)] = !0,
            n(149)in i && (i[n(165)] = !0),
            Object[n(137)](t, i[n(148)], i)
        }
    }
    function ra() {
        var t = ["sham", "defineProperty", "destroy", "79410XabYog", "4VCWqKo", "hasOwnProperty", "configurable", "Super expression must either be null or a function", "Image", "enumerable", "add", "Signal", "key", "value", "6OUdXwR", "onButtonUp", "addIcon", "construct", "5074660ddWFUC", "prototype", "events", "addText", "21nnzuDO", "Cannot call a class as a function", "setPrototypeOf", "game", "293340SuTALm", "apply", "constructor", "writable", "function", "addChild", "bind", "2539744KepVCX", "this hasn't been initialised - super() hasn't been called", "getPrototypeOf", "symbol", "removeAll", "__proto__", "dispatchAllowed", "anchor", "enableTimeout", "scale", "valueOf", "263601LhczZS", "get", "height", "length", "getOwnPropertyDescriptor", "object", "onButtonDown", "1776078rrJvxE", "homeScreen", "iterator", "#ffffff", "buttonText", "674694XjSCFa", "playnow_bg", "call", "click", "setTo", "onClick", "dispatch", "onInputDown", "Derived constructors may only return object or undefined"];
        return (ra = function() {
            return t
        }
        )()
    }
    function ia() {
        var t = ha;
        return ia = "undefined" != typeof Reflect && Reflect[t(116)] ? Reflect[t(116)][t(168)]() : function(e, n, r) {
            var i = t
              , a = aa(e, n);
            if (a) {
                var o = Object[i(119)](a, n);
                return o[i(116)] ? o.get[i(129)](arguments[i(118)] < 3 ? e : r) : o.value
            }
        }
        ,
        ia.apply(this, arguments)
    }
    function aa(t, e) {
        for (var n = ha; !Object[n(155)][n(141)][n(129)](t, e) && null !== (t = ua(t)); )
            ;
        return t
    }
    function oa(t, e) {
        var n = ha;
        return (oa = Object[n(160)] ? Object[n(160)][n(168)]() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function sa(t, e) {
        var n = ha;
        if (e && (ea(e) === n(120) || "function" == typeof e))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(135));
        return ca(t)
    }
    function ca(t) {
        if (void 0 === t)
            throw new ReferenceError(ha(170));
        return t
    }
    function ua(t) {
        var e = ha;
        return (ua = Object[e(160)] ? Object.getPrototypeOf.bind() : function(t) {
            var n = e;
            return t[n(174)] || Object[n(171)](t)
        }
        )(t)
    }
    function ha(t, e) {
        var n = ra();
        return (ha = function(t, e) {
            return n[t -= 115]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = ha, r = t(); ; )
            try {
                if (217436 == -parseInt(n(150)) / 1 * (-parseInt(n(139)) / 2) + parseInt(n(115)) / 3 * (parseInt(n(140)) / 4) + -parseInt(n(162)) / 5 + parseInt(n(127)) / 6 * (parseInt(n(158)) / 7) + parseInt(n(169)) / 8 + -parseInt(n(122)) / 9 + -parseInt(n(154)) / 10)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(ra);
    const la = function(t) {
        var e = ha;
        !function(t, e) {
            var n = ha;
            if ("function" != typeof e && null !== e)
                throw new TypeError(n(143));
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(137)](t, n(155), {
                writable: !1
            }),
            e && oa(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = ha;
            if ("undefined" == typeof Reflect || !Reflect[t(153)])
                return !1;
            if (Reflect[t(153)][t(136)])
                return !1;
            if (typeof Proxy === t(166))
                return !0;
            try {
                return Boolean.prototype[t(179)][t(129)](Reflect[t(153)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = ha, n = ua(a);
            if (o) {
                var r = ua(this)[e(164)];
                t = Reflect.construct(n, arguments, r)
            } else
                t = n[e(163)](this, arguments);
            return sa(this, t)
        }
        );
        function c(t, e, n) {
            var r, i = ha;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(ha(159))
            }(this, c),
            (r = s[i(129)](this, t, e, n, i(123), i(128)))[i(175)] = !0,
            r.inputEnabled = !0,
            r.onClick = new (Phaser[i(147)]),
            r[i(177)] = null,
            r[i(156)][i(134)].add((function() {
                var t = i;
                r[t(175)] && (r[t(175)] = !1,
                r[t(132)][t(133)](ca(r)),
                r.enableTimeout = setTimeout((function() {
                    var e = t;
                    r.enableTimeout = null,
                    r[e(175)] = !0
                }
                ), 1e3))
            }
            )),
            r[i(156)][i(134)][i(146)](r[i(121)], ca(r)),
            r[i(156)].onInputUp[i(146)](r[i(151)], ca(r)),
            r
        }
        return n = c,
        i = ha,
        (r = [{
            key: e(152),
            value: function(t) {
                var n = e
                  , r = new (Phaser[n(144)])(this[n(161)],0,-35,n(123),t);
                r[n(176)][n(131)](.5),
                this.addChild(r)
            }
        }, {
            key: e(157),
            value: function(t, n) {
                var r = e
                  , i = new Phaser.Text(this[r(161)],0,this[r(117)] / 2 - 25,t,void 0 !== n ? n : {
                    font: APP_FONT,
                    fill: r(125),
                    fontWeight: 700,
                    fontSize: 24
                });
                i[r(176)][r(131)](.5),
                this[r(167)](i),
                this[r(126)] = i
            }
        }, {
            key: e(130),
            value: function(t, n) {
                var r = e;
                this[r(132)][r(173)](),
                this[r(132)][r(146)](t, n)
            }
        }, {
            key: e(121),
            value: function() {
                var t = e;
                CyberInstance.sound.playButtonSound(),
                this[t(178)][t(131)](.95)
            }
        }, {
            key: e(151),
            value: function() {
                var t = e;
                this.scale[t(131)](1)
            }
        }, {
            key: "anchorButton",
            value: function() {
                var t = e;
                this.x = this.centerX,
                this.y = this.centerY,
                this[t(176)][t(131)](.5)
            }
        }, {
            key: e(138),
            value: function() {
                var t = e;
                ia(ua(c.prototype), t(138), this)[t(129)](this, !0),
                this[t(132)][t(173)](),
                this[t(132)] = null,
                null != this[t(177)] && (clearTimeout(this[t(177)]),
                this[t(177)] = null)
            }
        }]) && na(n.prototype, r),
        Object[i(137)](n, i(155), {
            writable: !1
        }),
        c
    }(Phaser.Sprite);
    function fa(t) {
        var e = va;
        return (fa = "function" == typeof Symbol && e(507) == typeof Symbol[e(479)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(467) == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? n(507) : typeof t
        }
        )(t)
    }
    function pa(t, e) {
        for (var n = va, r = 0; r < e[n(506)]; r++) {
            var i = e[r];
            i.enumerable = i[n(477)] || !1,
            i[n(498)] = !0,
            "value"in i && (i[n(502)] = !0),
            Object[n(482)](t, i[n(533)], i)
        }
    }
    function ya(t, e) {
        var n = va;
        return (ya = Object[n(486)] ? Object[n(486)].bind() : function(t, e) {
            return t[n(494)] = e,
            t
        }
        )(t, e)
    }
    function da(t, e) {
        var n = va;
        if (e && (fa(e) === n(534) || typeof e === n(467)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(475));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(va(529));
            return t
        }(t)
    }
    function va(t, e) {
        var n = ba();
        return (va = function(t, e) {
            return n[t -= 462]
        }
        )(t, e)
    }
    function ba() {
        var t = ["getCurrentDragX", "input", "text", "construct", "__proto__", "priorityID", "apply", "height", "configurable", "create", "atlasName", "sliderControl", "writable", "fullWidth", "max", "1853091vKdamh", "length", "symbol", "visible", "activePointer", "bind", "min", "prototype", "323279BtKjsW", "updateSlider", "width", "slideType", "round", "updateScoreSlider", "updateBetSlider", "24OHEhSO", "Super expression must either be null or a function", "maxValue", "events", "value", "sliderRectangle", "onSlideChange", "currentIndex", "crop", "this hasn't been initialised - super() hasn't been called", "createUI", "add", "19497590pAYAEM", "key", "object", "isArray", "getPrototypeOf", "sliderSpriteBar", "game", "minValue", "slideParams", "valueOf", "2664JhUSNC", "Rectangle", "undefined", "function", "2384331aJQtQH", "10094FBcFhC", "sham", "2vxHhVe", "440170NwgaOq", "358232BQkTJQ", "ratioPoints", "Derived constructors may only return object or undefined", "contains", "enumerable", "call", "iterator", "#fff", "sliderSprite", "defineProperty", "dispatch", "addRatioInfo", "getBounds", "setPrototypeOf", "onDragStop", "onDragUpdate", "canvas"];
        return (ba = function() {
            return t
        }
        )()
    }
    function ma(t) {
        var e = va;
        return (ma = Object.setPrototypeOf ? Object[e(536)][e(510)]() : function(t) {
            var n = e;
            return t[n(494)] || Object[n(536)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = va, r = t(); ; )
            try {
                if (427766 == -parseInt(n(513)) / 1 * (-parseInt(n(471)) / 2) + parseInt(n(468)) / 3 + parseInt(n(473)) / 4 + -parseInt(n(472)) / 5 + -parseInt(n(464)) / 6 * (-parseInt(n(469)) / 7) + -parseInt(n(520)) / 8 * (-parseInt(n(505)) / 9) + -parseInt(n(532)) / 10)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(ba);
    var ga = function(t) {
        var e = va;
        !function(t, e) {
            var n = va;
            if ("function" != typeof e && null !== e)
                throw new TypeError(n(521));
            t[n(512)] = Object[n(499)](e && e[n(512)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(482)](t, n(512), {
                writable: !1
            }),
            e && ya(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = va;
            if (typeof Reflect === t(466) || !Reflect[t(493)])
                return !1;
            if (Reflect[t(493)][t(470)])
                return !1;
            if (typeof Proxy === t(467))
                return !0;
            try {
                return Boolean[t(512)][t(463)][t(478)](Reflect[t(493)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = va, n = ma(a);
            if (o) {
                var r = ma(this).constructor;
                t = Reflect[e(493)](n, arguments, r)
            } else
                t = n[e(496)](this, arguments);
            return da(this, t)
        }
        );
        function c(t, e, n, r) {
            var i, a = va;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, c),
            (i = s[a(478)](this, t)).x = e,
            i.y = n,
            i[a(462)] = r,
            i.minValue = r.minValue || 5,
            i.maxValue = r[a(522)] || 500,
            i[a(516)] = r[a(516)] || 1,
            i.onSlideChange = new Phaser.Signal,
            i[a(530)](),
            i[a(527)] = 0,
            i.atlasName = r[a(500)],
            i
        }
        return n = c,
        i = va,
        (r = [{
            key: "createUI",
            value: function() {
                var t = va;
                this[t(481)] = this[t(499)](0, 0, this[t(462)][t(533)], this[t(462)][t(481)]),
                this[t(537)] = this.create(this[t(481)].x + 2, this.sliderSprite.y + 3, this.slideParams.key, this[t(462)][t(537)]),
                this[t(503)] = this[t(537)][t(515)],
                this[t(525)] = new (Phaser[t(465)])(0,0,0,this[t(537)][t(497)]),
                this[t(537)][t(528)](this.sliderRectangle),
                this[t(501)] = this[t(499)](this[t(537)].x - 1, 0, this[t(462)][t(533)], this.slideParams.sliderControl),
                this[t(501)].y = this[t(537)][t(497)] / 2 - this[t(501)].height / 2,
                this[t(501)].inputEnabled = !0,
                this[t(501)][t(491)].enableDrag(!1),
                this[t(501)][t(491)].allowVerticalDrag = !1,
                this.sliderControl.input[t(495)] = 1;
                var e = new (Phaser[t(465)])(this[t(501)].x,this.sliderControl.y,this[t(503)] + 2,this.sliderControl[t(497)]);
                if (this[t(501)].input.boundsRect = e,
                this[t(501)][t(523)].onDragUpdate[t(531)](this[t(488)], this),
                this.sliderControl[t(523)][t(487)][t(531)](this[t(487)], this),
                this[t(503)] = this.fullWidth - this[t(501)][t(515)],
                1 == this.slideType) {
                    var n = this.game[t(531)][t(492)](this.sliderSprite.x + 12, this[t(501)].y + this[t(501)].height, this[t(539)], {
                        font: APP_FONT,
                        fontWeight: "bold",
                        fontSize: 20,
                        fill: t(480)
                    });
                    this[t(531)](n);
                    var r = this.game[t(531)].text(this[t(481)].x, n.y, this[t(522)], {
                        font: APP_FONT,
                        fontWeight: "bold",
                        fontSize: 20,
                        fill: "#fff"
                    });
                    this.add(r),
                    r.x = this[t(481)][t(515)] - r[t(489)].width
                } else
                    2 == this.slideType && this[t(484)]()
            }
        }, {
            key: e(484),
            value: function() {
                var t = e
                  , n = this[t(462)].ratioMap
                  , r = n[t(506)] - 1
                  , i = 0
                  , a = Math.floor((this[t(503)] + this[t(501)][t(515)]) / r);
                this.ratioPoints = [];
                for (var o = 0; o < n[t(506)]; o++) {
                    var s = {
                        value: n[o][t(524)]
                    };
                    o == r ? (s.x = i - this.sliderControl[t(515)] + 3,
                    i -= 20) : s.x = o > 0 ? i - this[t(501)][t(515)] / 2 : i,
                    this[t(474)].push(s),
                    i += a
                }
            }
        }, {
            key: e(488),
            value: function(t, n, r, i, a) {
                var o = e;
                1 == this[o(516)] ? this.updateBetSlider(r) : 2 == this[o(516)] && this[o(518)](r)
            }
        }, {
            key: e(487),
            value: function() {
                var t = e;
                1 == this[t(516)] ? this[t(519)](this[t(501)].x) : 2 == this[t(516)] && this[t(518)](this[t(501)].x)
            }
        }, {
            key: "onBarClick",
            value: function() {
                var t = e;
                if (1 == this[t(508)]) {
                    var n = this.sliderSprite[t(485)]();
                    if (n.y = n.y - 50,
                    n[t(497)] = n[t(497)] + 100,
                    n[t(476)](this[t(538)][t(491)].activePointer.x, this.game[t(491)].activePointer.y)) {
                        var r = this[t(538)][t(491)][t(509)].x - this[t(481)][t(485)]().x;
                        r > 0 && r < this.sliderSprite.width && (r > this.fullWidth && (r = this[t(503)]),
                        this.sliderControl.x = r,
                        1 == this[t(516)] ? this[t(519)](r) : 2 == this[t(516)] && this[t(518)](r))
                    }
                }
            }
        }, {
            key: "updateBetSlider",
            value: function(t) {
                var n = e;
                this[n(525)].width = Math[n(504)](0, t),
                this.sliderSpriteBar[n(528)](this[n(525)]);
                var r = Math[n(517)](this[n(525)][n(515)] / this.fullWidth * 100)
                  , i = Math[n(517)](r * this[n(522)] / 100);
                i <= 0 ? i = this.minValue : i > this[n(522)] && (i = this[n(522)]),
                i <= this.maxValue && this.onSlideChange[n(483)](i)
            }
        }, {
            key: "updateScoreSlider",
            value: function(t) {
                var n = e;
                if (Array[n(535)](this[n(474)]) && this[n(474)][n(506)] > 0) {
                    for (var r = null, i = 0; i < this[n(474)][n(506)]; i++) {
                        if (i == this[n(474)][n(506)] - 1) {
                            this.sliderControl.x = this[n(474)][i].x,
                            r = this[n(474)][i],
                            this[n(527)] = i;
                            break
                        }
                        if (t >= this[n(474)][i].x && t < this.ratioPoints[i + 1].x) {
                            t - this[n(474)][i].x < this.ratioPoints[i + 1].x - t ? (this[n(501)].x = this[n(474)][i].x,
                            r = this[n(474)][i],
                            this[n(527)] = i) : (this[n(501)].x = this.ratioPoints[i + 1].x,
                            r = this.ratioPoints[i + 1],
                            this[n(527)] = i + 1);
                            break
                        }
                        t < 12 && (this[n(501)].x = this[n(474)][0].x + 12,
                        r = this[n(474)][0],
                        this[n(527)] = 0)
                    }
                    this[n(525)][n(515)] = Math[n(504)](0, this.sliderControl.x),
                    this[n(537)][n(528)](this[n(525)]),
                    this[n(526)].dispatch(r)
                }
            }
        }, {
            key: e(490),
            value: function() {
                return this[e(501)].x
            }
        }, {
            key: e(514),
            value: function(t) {
                var n = e;
                if (Array[n(535)](this.ratioPoints) && this[n(474)][n(506)] > 0) {
                    var r, i = this[n(474)][n(506)] - 1;
                    this[n(527)] += 1 * t,
                    this[n(527)] = Math[n(504)](0, this[n(527)]),
                    this[n(527)] = Math[n(511)](i, this[n(527)]),
                    this[n(501)].x = this.ratioPoints[this.currentIndex].x,
                    r = this[n(474)][this.currentIndex],
                    this[n(525)][n(515)] = Math[n(504)](0, this[n(501)].x),
                    this[n(537)][n(528)](this[n(525)]),
                    this[n(526)][n(483)](r)
                }
            }
        }]) && pa(n[i(512)], r),
        Object[i(482)](n, i(512), {
            writable: !1
        }),
        c
    }(Phaser.Group);
    function wa(t) {
        var e = Ia;
        return (wa = e(409) == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(409) == typeof Symbol && t[n(429)] === Symbol && t !== Symbol[n(394)] ? n(408) : typeof t
        }
        )(t)
    }
    function Ia(t, e) {
        var n = Oa();
        return (Ia = function(t, e) {
            return n[t -= 393]
        }
        )(t, e)
    }
    function Sa(t, e) {
        for (var n = Ia, r = 0; r < e[n(447)]; r++) {
            var i = e[r];
            i[n(430)] = i.enumerable || !1,
            i[n(410)] = !0,
            "value"in i && (i[n(399)] = !0),
            Object[n(403)](t, i[n(398)], i)
        }
    }
    function Oa() {
        var t = ["setPrototypeOf", "apply", "constructor", "enumerable", "onCheck", "game", "addChild", "29598QpaWEU", "call", "#f7e1b3", "addColorStop", "onInputDown", "context", "create", "inputEnabled", "5217867QssiJs", "check", "frameName", "this hasn't been initialised - super() hasn't been called", "fill", "length", "Derived constructors may only return object or undefined", "2443220mpFLOs", "10069776TawVQp", "207GoThYa", "undefined", "createLinearGradient", "bind", "checked", "getValue", "prototype", "existing", "2206828kTsRPv", "__proto__", "key", "writable", "input", "useHandCursor", "object", "defineProperty", "label", "construct", "radioGroup", "getPrototypeOf", "symbol", "function", "configurable", "width", "disable", "#fef38a", "isChecked", "radioValue", "Super expression must either be null or a function", "27042qxZfNR", "1351MEuQlY", "atlasName", "sham", "uncheck", "radio_uncheck", "1077483RtezYu", "add", "Cannot call a class as a function", "bold"];
        return (Oa = function() {
            return t
        }
        )()
    }
    function ka(t, e) {
        var n = Ia;
        return (ka = Object[n(427)] ? Object.setPrototypeOf[n(454)]() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function Ca(t, e) {
        var n = Ia;
        if (e && (wa(e) === n(402) || typeof e === n(409)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(448));
        return Pa(t)
    }
    function Pa(t) {
        if (void 0 === t)
            throw new ReferenceError(Ia(445));
        return t
    }
    function Ta(t) {
        var e = Ia;
        return (Ta = Object.setPrototypeOf ? Object[e(407)][e(454)]() : function(t) {
            var n = e;
            return t[n(397)] || Object[n(407)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = Ia, r = t(); ; )
            try {
                if (905811 == parseInt(n(423)) / 1 + parseInt(n(434)) / 2 * (-parseInt(n(451)) / 3) + parseInt(n(396)) / 4 + parseInt(n(449)) / 5 + -parseInt(n(417)) / 6 * (parseInt(n(418)) / 7) + parseInt(n(450)) / 8 + -parseInt(n(442)) / 9)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Oa);
    var xa = function(t) {
        var e = Ia;
        !function(t, e) {
            var n = Ia;
            if (typeof e !== n(409) && null !== e)
                throw new TypeError(n(416));
            t[n(394)] = Object[n(440)](e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && ka(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = Ia;
            if (typeof Reflect === t(452) || !Reflect[t(405)])
                return !1;
            if (Reflect[t(405)][t(420)])
                return !1;
            if (typeof Proxy === t(409))
                return !0;
            try {
                return Boolean[t(394)].valueOf[t(435)](Reflect[t(405)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Ia, n = Ta(a);
            if (o) {
                var r = Ta(this)[e(429)];
                t = Reflect[e(405)](n, arguments, r)
            } else
                t = n[e(428)](this, arguments);
            return Ca(this, t)
        }
        );
        function c(t, e, n, r, i, a, o, u) {
            var h, l = Ia;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Ia(425))
            }(this, c),
            (h = s[l(435)](this, t, e, n, r, l(422)))[l(419)] = r,
            h[l(432)].add[l(395)](Pa(h)),
            typeof i != l(452) && (h[l(415)] = i,
            e = h[l(411)] + 35,
            void 0 !== u && (e = h[l(411)] + u),
            h.label = h[l(432)][l(424)].text(e, 3, a, {
                font: APP_FONT,
                fontSize: 31.35,
                fontWeight: l(426),
                fill: l(436)
            }),
            h[l(433)](h[l(404)])),
            h.inputEnabled = !0,
            h[l(400)][l(401)] = !0,
            h.events[l(438)][l(424)](h[l(431)], Pa(h)),
            h[l(406)] = o,
            h
        }
        return n = c,
        i = Ia,
        (r = [{
            key: e(431),
            value: function() {
                var t = e;
                if (!this[t(455)]) {
                    if (void 0 !== this[t(406)])
                        for (var n in this[t(406)])
                            this.radioGroup[n].uncheck();
                    this[t(443)]()
                }
            }
        }, {
            key: e(414),
            value: function() {
                return this[e(455)]
            }
        }, {
            key: e(421),
            value: function() {
                var t = e;
                this[t(455)] = !1,
                this[t(444)] = t(422)
            }
        }, {
            key: "check",
            value: function() {
                var t = e;
                this[t(455)] = !0,
                this[t(444)] = "radio_check"
            }
        }, {
            key: e(393),
            value: function() {
                return this.radioValue
            }
        }, {
            key: "createGradient",
            value: function(t, n) {
                var r = e
                  , i = this[r(404)][r(439)][r(453)](0, 0, 0, this[r(404)].height);
                i[r(437)](0, t || r(413)),
                i[r(437)](1, n || "#fdd043"),
                this[r(404)][r(446)] = i
            }
        }, {
            key: e(412),
            value: function() {
                var t = e;
                this[t(441)] = !1,
                this.frameName = t(422),
                this[t(404)][t(446)] = "#7f7f7f"
            }
        }]) && Sa(n.prototype, r),
        Object[i(403)](n, i(394), {
            writable: !1
        }),
        c
    }(Phaser.Sprite)
      , _a = Ea;
    function ja(t) {
        var e = Ea;
        return (ja = e(244) == typeof Symbol && e(259) == typeof Symbol[e(258)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(244) == typeof Symbol && t[n(223)] === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function Ra(t, e) {
        for (var n = Ea, r = 0; r < e[n(270)]; r++) {
            var i = e[r];
            i.enumerable = i.enumerable || !1,
            i[n(256)] = !0,
            n(234)in i && (i[n(233)] = !0),
            Object[n(278)](t, i[n(255)], i)
        }
    }
    function Ea(t, e) {
        var n = Fa();
        return (Ea = function(t, e) {
            return n[t -= 206]
        }
        )(t, e)
    }
    function Ba(t, e) {
        var n = Ea;
        return (Ba = Object[n(212)] ? Object[n(212)].bind() : function(t, e) {
            return t[n(211)] = e,
            t
        }
        )(t, e)
    }
    function Aa(t, e) {
        var n = Ea;
        if (e && (ja(e) === n(242) || "function" == typeof e))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(224));
        return Da(t)
    }
    function Da(t) {
        if (void 0 === t)
            throw new ReferenceError(Ea(208));
        return t
    }
    function Fa() {
        var t = ["create", "1689352BLAzbG", "shortenLargeNumber", "betValueBg", "setText", "increaseBet", "852858uZtYSV", "key", "configurable", "betSliderBg", "iterator", "symbol", "maxUsers", "btn_plus", "check", "prototype", "atlasName", "1884526oqRHKd", "game", "onRadioCheck", "playerCountData", "slider_bg", "length", "getPrototypeOf", "call", "anchor", "901650UMWVha", "updateSlider", "construct", "lang", "defineProperty", "260346ureedW", "undefined", "playerCount", "this hasn't been initialised - super() hasn't been called", "betTitle", "playButtonSound", "__proto__", "setPrototypeOf", "btnDecreaseBet", "btn_minus", "betValue", "add", "betValueText", "height", "events", "1183160tBowBM", "sound", "playerCounts", "constructor", "Derived constructors may only return object or undefined", "3VIDTQA", "onSlideChange", "BET", "betSlider", "slider_bar", "slider_control", "onInputDown", "PLAYER_COUNT", "writable", "value", "decreaseBet", "slider_trail", "#f7e1b3", "Group", "btnIncreaseBet", "playerCountTitle", "Cannot call a class as a function", "object", "width", "function", "79010aIYfSM", "inputEnabled", "9ylTIDs"];
        return (Fa = function() {
            return t
        }
        )()
    }
    function Na(t) {
        var e = Ea;
        return (Na = Object[e(212)] ? Object.getPrototypeOf.bind() : function(t) {
            var n = e;
            return t[n(211)] || Object[n(271)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = Ea, r = t(); ; )
            try {
                if (148391 == parseInt(n(245)) / 1 + -parseInt(n(279)) / 2 * (parseInt(n(225)) / 3) + parseInt(n(220)) / 4 + -parseInt(n(274)) / 5 + parseInt(n(254)) / 6 + -parseInt(n(265)) / 7 + parseInt(n(249)) / 8 * (parseInt(n(247)) / 9))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Fa);
    const La = function(t) {
        var e = Ea;
        !function(t, e) {
            var n = Ea;
            if (typeof e !== n(244) && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t[n(263)] = Object.create(e && e[n(263)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, n(263), {
                writable: !1
            }),
            e && Ba(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = Ea;
            if (typeof Reflect === t(206) || !Reflect[t(276)])
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if (typeof Proxy === t(244))
                return !0;
            try {
                return Boolean[t(263)].valueOf[t(272)](Reflect[t(276)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Ea, n = Na(a);
            if (o) {
                var r = Na(this)[e(223)];
                t = Reflect[e(276)](n, arguments, r)
            } else
                t = n.apply(this, arguments);
            return Aa(this, t)
        }
        );
        function c(t) {
            var e, n = Ea;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Ea(241))
            }
            )(this, c),
            (e = s.call(this, t)).atlasName = "lobbyScreen",
            e.betValue = 5e3,
            e[n(207)] = CyberInstance[n(260)],
            e[n(209)] = new Phaser.Text(e[n(266)],0,0,CyberInstance.lang[n(227)] + ":",{
                font: APP_FONT,
                fontWeight: 500,
                fontSize: 24,
                fill: n(237)
            }),
            e[n(216)](e[n(209)]),
            e[n(257)] = e[n(248)](0, e[n(209)].y + e[n(209)][n(218)] + 10, e.atlasName, n(269)),
            e[n(251)] = e[n(248)](0, e[n(257)].y + 10, e[n(264)], "value_bg"),
            e[n(251)].x = e[n(257)][n(243)] / 2 - e.betValueBg[n(243)] / 2,
            e[n(217)] = e[n(266)][n(216)].text(e.betSliderBg[n(243)] / 2, e[n(251)].y + 6, h.shortenLargeNumber(5e3), {
                font: APP_FONT,
                fontWeight: 500,
                fontSize: 20,
                fill: "#f7e1b3"
            }),
            e[n(217)][n(273)].set(.5, 0),
            e.add(e[n(217)]),
            e[n(213)] = e[n(248)](e[n(257)].x + 22, e[n(257)].y + 40, e[n(264)], n(214)),
            e.btnIncreaseBet = e.create(e[n(257)].x + e.betSliderBg.width - 22 - e[n(213)].width, e.betSliderBg.y + 40, e.atlasName, n(261)),
            e.btnDecreaseBet[n(246)] = !0,
            e[n(239)].inputEnabled = !0,
            e[n(213)][n(219)].onInputDown[n(216)](e[n(235)], Da(e)),
            e.btnIncreaseBet[n(219)][n(231)].add(e[n(253)], Da(e)),
            e[n(228)] = new ga(e[n(266)],e[n(257)][n(243)] / 2 - 289,e[n(257)].y + 65,{
                key: e.atlasName,
                sliderSprite: n(236),
                sliderSpriteBar: n(229),
                sliderControl: n(230),
                minValue: 5e3,
                maxValue: 1e6,
                slideType: 2,
                ratioMap: [{
                    value: 5e3
                }, {
                    value: 1e4
                }, {
                    value: 2e4
                }, {
                    value: 5e4
                }, {
                    value: 1e5
                }, {
                    value: 2e5
                }, {
                    value: 3e5
                }, {
                    value: 5e5
                }, {
                    value: 1e6
                }, {
                    value: 2e6
                }, {
                    value: 5e6
                }]
            }),
            e.add(e.betSlider),
            e[n(228)][n(226)].add((function(t) {
                var r = n;
                e.betValueText[r(252)](h[r(250)](t.value)),
                e[r(215)] = t[r(234)]
            }
            ), Da(e)),
            e[n(240)] = e.game[n(216)].text(0, e[n(257)].y + e.betSliderBg[n(218)] + 40, CyberInstance[n(277)][n(232)] + ":", {
                font: APP_FONT,
                fontWeight: 500,
                fontSize: 24,
                fill: n(237)
            }),
            e.add(e[n(240)]),
            e[n(222)] = [],
            e[n(268)] = [];
            for (var r = 2; r <= CyberInstance[n(260)]; r++)
                e.playerCountData.push(r);
            var i = 140
              , a = e[n(240)].y - 8;
            for (r = 0; r < e[n(268)][n(270)]; r++) {
                var o = new xa(e.game,i,a,e[n(264)],e[n(268)][r],e.playerCountData[r],e.playerCounts,35);
                o.events.onInputDown[n(216)](e[n(267)], Da(e)),
                e.add(o),
                e[n(222)].push(o),
                e.playerCountData[r] == CyberInstance[n(260)] && o[n(262)](),
                i += 170
            }
            return e.x = e[n(266)][n(243)] / 2 - e[n(257)][n(243)] / 2,
            e
        }
        return n = c,
        i = Ea,
        (r = [{
            key: e(235),
            value: function() {
                var t = e;
                CyberInstance[t(221)][t(210)](),
                this.betSlider[t(275)](-1)
            }
        }, {
            key: "increaseBet",
            value: function() {
                var t = e;
                CyberInstance.sound.playButtonSound(),
                this[t(228)].updateSlider(1)
            }
        }, {
            key: e(267),
            value: function(t) {
                this[e(207)] = t.getValue()
            }
        }]) && Ra(n[i(263)], r),
        Object[i(278)](n, i(263), {
            writable: !1
        }),
        c
    }(Phaser[_a(238)]);
    var Ga = za;
    function Ma(t) {
        var e = za;
        return (Ma = e(359) == typeof Symbol && "symbol" == typeof Symbol[e(349)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && "function" == typeof Symbol && t[n(286)] === Symbol && t !== Symbol[n(339)] ? n(313) : typeof t
        }
        )(t)
    }
    function Wa(t, e) {
        for (var n = za, r = 0; r < e[n(362)]; r++) {
            var i = e[r];
            i.enumerable = i[n(307)] || !1,
            i[n(335)] = !0,
            n(350)in i && (i[n(354)] = !0),
            Object[n(316)](t, i[n(344)], i)
        }
    }
    function za(t, e) {
        var n = Ya();
        return (za = function(t, e) {
            return n[t -= 283]
        }
        )(t, e)
    }
    function Ua(t, e) {
        var n = za;
        return (Ua = Object[n(361)] ? Object[n(361)].bind() : function(t, e) {
            return t[n(333)] = e,
            t
        }
        )(t, e)
    }
    function Va(t, e) {
        var n = za;
        if (e && ("object" === Ma(e) || "function" == typeof e))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(312));
        return Ha(t)
    }
    function Ha(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function Xa(t) {
        var e = za;
        return (Xa = Object.setPrototypeOf ? Object[e(299)].bind() : function(t) {
            var n = e;
            return t[n(333)] || Object[n(299)](t)
        }
        )(t)
    }
    function Ya() {
        var t = ["closeLoadingPopup", "toUpperCase", "22ALewnz", "apply", "Group", "homeScreen", "enumerable", "230456GcaaoR", "text", "Super expression must either be null or a function", "inputEnabled", "Derived constructors may only return object or undefined", "symbol", "button_close", "1620590QZuXOs", "defineProperty", "click", "VAO_PHONG", "10WgeJga", "joinPrivateRoom", "inputText", "number", "inputTextValue", "visible", "3175120uvLyzE", "3nrmbtU", "joinRoom", "state", "valueOf", "sound", "1613472HcyHSQ", "NHAP_MA_PHONG", "__proto__", "sham", "configurable", "anchor", "#81425c", "call", "prototype", "button_gray_197x64", "button_green_197x64", "showNotEnoughMoneyToPlay", "height", "key", "14970cljoip", "add", "create", "instance", "iterator", "value", "log", "3990339pVDiLx", "2556995AioLjA", "writable", "construct", "undefined", "slice", "loadTexture", "function", "addText", "setPrototypeOf", "length", "setText", "make", "game", "Cannot call a class as a function", "scale", "constructor", "playButtonSound", "#fbafb3", "createButton", "sprite", "width", "addChild", "getCurrentState", "events", "setTo", "canPlay", "clearButton", "submitButton", "getPrototypeOf", "lang"];
        return (Ya = function() {
            return t
        }
        )()
    }
    !function(t, e) {
        for (var n = za, r = t(); ; )
            try {
                if (225110 == -parseInt(n(303)) / 1 * (-parseInt(n(345)) / 2) + parseInt(n(326)) / 3 * (-parseInt(n(308)) / 4) + parseInt(n(315)) / 5 + parseInt(n(331)) / 6 + parseInt(n(353)) / 7 + -parseInt(n(325)) / 8 + -parseInt(n(352)) / 9 * (parseInt(n(319)) / 10))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Ya);
    const qa = function(t) {
        var e = za;
        !function(t, e) {
            var n = za;
            if (typeof e !== n(359) && null !== e)
                throw new TypeError(n(310));
            t.prototype = Object[n(347)](e && e[n(339)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(316)](t, n(339), {
                writable: !1
            }),
            e && Ua(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = za;
            if (typeof Reflect === t(356) || !Reflect.construct)
                return !1;
            if (Reflect[t(355)][t(334)])
                return !1;
            if (typeof Proxy === t(359))
                return !0;
            try {
                return Boolean[t(339)][t(329)][t(338)](Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = za, n = Xa(a);
            if (o) {
                var r = Xa(this)[e(286)];
                t = Reflect[e(355)](n, arguments, r)
            } else
                t = n[e(304)](this, arguments);
            return Va(this, t)
        }
        );
        function c(t) {
            var e, n = za;
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(za(284))
            }(this, c);
            var r = (e = s[n(338)](this, t))[n(347)](0, 0, "homeScreen", "find_room_input");
            e[n(323)] = "",
            e.inputText = e[n(283)][n(364)][n(309)](r.width / 2, r[n(343)] / 2 + 2, CyberInstance[n(300)][n(332)], {
                font: APP_FONT,
                fontWeight: 400,
                fontSize: 26,
                fill: n(337)
            }),
            e[n(321)][n(336)][n(295)](.5),
            e.add(e[n(321)]),
            e.clearButton = new jt(e[n(283)],0,0,"homeScreen",n(314)),
            e[n(297)][n(285)][n(295)](.7),
            e[n(297)].x = r[n(291)] - e[n(297)][n(291)] - 10,
            e[n(297)].y = r[n(343)] / 2 - e[n(297)][n(343)] / 2,
            e.clearButton[n(317)]((function() {
                var t = n;
                e[t(323)][t(362)] > 0 && (e[t(323)] = e[t(323)][t(357)](0, e[t(323)].length - 1),
                0 == e[t(323)].length ? (e[t(321)].setText(CyberInstance[t(300)][t(332)]),
                e[t(297)][t(324)] = !1,
                e[t(298)][t(358)](t(306), t(340))) : e.inputText[t(363)](e[t(323)]))
            }
            ), Ha(e)),
            e[n(346)](e[n(297)]),
            e[n(297)][n(324)] = !1;
            for (var i = 0, a = r.y + r.height + 25, o = 1; o <= 12; o++) {
                if (o < 10)
                    var u = e.createButton(o);
                else
                    10 == o ? u = e[n(289)]("*") : 11 == o ? u = e[n(289)]("0") : 12 == o && (u = e.createButton("#"));
                u.x = i,
                u.y = a,
                3 == o || 6 == o || 9 == o ? (i = 0,
                a += 59) : i += 229
            }
            return a += 59,
            e.submitButton = new jt(e[n(283)],0,a + 50,n(306),"button_gray_197x64"),
            e.submitButton.x = r[n(291)] / 2 - e[n(298)][n(291)] / 2,
            e[n(298)][n(360)](CyberInstance[n(300)][n(318)][n(302)]()),
            e[n(298)][n(317)](e[n(327)], Ha(e)),
            e[n(346)](e[n(298)]),
            e.x = e[n(283)].width / 2 - r[n(291)] / 2,
            e
        }
        return n = c,
        i = za,
        (r = [{
            key: e(327),
            value: function() {
                var t = e;
                if (this.inputTextValue[t(362)] > 0)
                    try {
                        if (ie.instance[t(296)]()) {
                            this[t(283)][t(328)][t(293)]().openLoadingPopup();
                            var n = parseInt(this.inputTextValue);
                            ie[t(348)][t(320)](n, !1)
                        } else
                            M[t(342)]()
                    } catch (e) {
                        this.game.state[t(293)]()[t(301)](),
                        console[t(351)](e)
                    }
            }
        }, {
            key: e(289),
            value: function(t) {
                var n = e
                  , r = this
                  , i = this[n(283)].make[n(290)](0, 0, n(306), "cg_tab");
                i[n(322)] = t;
                var a = this[n(283)][n(364)][n(309)](i[n(291)] / 2, i[n(343)] / 2 + 2, t, {
                    font: APP_FONT,
                    fontWeight: 900,
                    fontSize: 20,
                    fill: n(288)
                });
                return a[n(336)][n(295)](.5),
                i[n(292)](a),
                i[n(311)] = !0,
                i[n(294)].onInputDown[n(346)]((function(t) {
                    var e = n;
                    CyberInstance[e(330)][e(287)](),
                    r[e(323)][e(362)] < 20 && (0 == r[e(323)].length && (r[e(297)][e(324)] = !0,
                    r.submitButton[e(358)](e(306), e(341))),
                    r[e(323)] += t[e(322)],
                    r.inputText[e(363)](r.inputTextValue))
                }
                )),
                this[n(346)](i),
                i
            }
        }]) && Wa(n[i(339)], r),
        Object.defineProperty(n, i(339), {
            writable: !1
        }),
        c
    }(Phaser[Ga(305)]);
    function Ka(t) {
        var e = eo;
        return (Ka = e(197) == typeof Symbol && e(141) == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(197) == typeof Symbol && t[n(138)] === Symbol && t !== Symbol[n(199)] ? n(141) : typeof t
        }
        )(t)
    }
    function Ja(t, e) {
        for (var n = eo, r = 0; r < e[n(173)]; r++) {
            var i = e[r];
            i[n(129)] = i[n(129)] || !1,
            i[n(140)] = !0,
            n(163)in i && (i[n(158)] = !0),
            Object[n(126)](t, i.key, i)
        }
    }
    function Qa(t, e) {
        var n = eo;
        return (Qa = Object[n(177)] ? Object[n(177)][n(185)]() : function(t, e) {
            return t[n(146)] = e,
            t
        }
        )(t, e)
    }
    function Za(t, e) {
        var n = eo;
        if (e && ("object" === Ka(e) || typeof e === n(197)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(172));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t)
    }
    function $a() {
        var t = ["bet", "Super expression must either be null or a function", "create", "Derived constructors may only return object or undefined", "length", "56JtXNdk", "playerCount", "createView", "setPrototypeOf", "text", "createGameForm", "add", "cg_tab", "onCreate", "closeButton", "30GMtILw", "bind", "friendMode", "height", "6975747xeKyBG", "frameName", "undefined", "searchRoomTab", "225nQqDRO", "width", "checkImageKey", "inputEnabled", "CREATE_ROOM", "function", "124018AjEsPY", "prototype", "events", "canPlay", "homeScreen", "putLong", "440qIEUJm", "addText", "click", "icon_close", "getPrototypeOf", "createTransition", "instance", "isAssetReady", "paused", "openLoadingPopup", "375740XIzQvY", "createRoomTab", "btnCreate", "sendRequest", "44948hDXJwU", "state", "Easing", "defineProperty", "options", "cg_tab2", "enumerable", "apply", "game", "open", "betValue", "lang", "anchor", "780392QluxMi", "maxUsers", "constructor", "606230AHzOss", "configurable", "symbol", "addChild", "Cannot call a class as a function", "#fbafb3", "addTabs", "__proto__", "#f7e1b3", "sound", "close", "call", "playButtonSound", "showNotEnoughMoneyToJoin", "getCurrentState", "onInputDown", "toUpperCase", "5095356TCRIdZ", "send", "writable", "addTextForTab", "ExtensionRequest", "cache", "loadTexture", "value", "button_green_197x64", "findGameForm", "homeScreenBG2", "visible", "construct"];
        return ($a = function() {
            return t
        }
        )()
    }
    function to(t) {
        var e = eo;
        return (to = Object.setPrototypeOf ? Object[e(113)][e(185)]() : function(t) {
            var n = e;
            return t[n(146)] || Object[n(113)](t)
        }
        )(t)
    }
    function eo(t, e) {
        var n = $a();
        return (eo = function(t, e) {
            return n[t -= 112]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = eo, r = t(); ; )
            try {
                if (469946 == parseInt(n(119)) / 1 + -parseInt(n(198)) / 2 * (-parseInt(n(184)) / 3) + parseInt(n(123)) / 4 * (-parseInt(n(192)) / 5) + parseInt(n(156)) / 6 + parseInt(n(174)) / 7 * (parseInt(n(136)) / 8) + parseInt(n(188)) / 9 + -parseInt(n(139)) / 10 * (parseInt(n(204)) / 11))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }($a);
    const no = function(t) {
        var e = eo;
        !function(t, e) {
            var n = eo;
            if (typeof e !== n(197) && null !== e)
                throw new TypeError(n(170));
            t[n(199)] = Object.create(e && e[n(199)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(126)](t, n(199), {
                writable: !1
            }),
            e && Qa(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = eo;
            if (typeof Reflect === t(190) || !Reflect[t(168)])
                return !1;
            if (Reflect[t(168)].sham)
                return !1;
            if (typeof Proxy === t(197))
                return !0;
            try {
                return Boolean.prototype.valueOf[t(150)](Reflect[t(168)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = eo, n = to(a);
            if (o) {
                var r = to(this)[e(138)];
                t = Reflect[e(168)](n, arguments, r)
            } else
                t = n[e(130)](this, arguments);
            return Za(this, t)
        }
        );
        function c(t, e) {
            var n = eo;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(eo(143))
            }(this, c),
            s[n(150)](this, t, e)
        }
        return n = c,
        i = eo,
        (r = [{
            key: e(116),
            value: function() {
                var t = e;
                return this.game.cache[t(194)]("lobbyScreen") && this[t(131)][t(161)].checkImageKey(t(166))
            }
        }, {
            key: e(176),
            value: function() {
                var t = e
                  , n = this
                  , r = this[t(171)](0, 0, t(166));
                r.width = this.game.width,
                r[t(187)] = this[t(131)][t(187)],
                r.inputEnabled = !0;
                var i = this[t(131)][t(180)][t(178)](this[t(131)][t(193)] / 2, 50, CyberInstance[t(134)].CREATE_GAME_TITLE[t(155)](), {
                    font: APP_FONT,
                    fontWeight: 500,
                    fontSize: 36.92,
                    fill: t(147)
                });
                i.anchor.setTo(.5),
                this[t(180)](i);
                var a = 119;
                this[t(127)] && !0 === this[t(127)][t(186)] && (a = 90,
                this[t(145)](a),
                a += 75),
                this[t(179)] = new La(this.game),
                this[t(179)].y = a,
                this[t(180)](this[t(179)]),
                this.findGameForm = new qa(this[t(131)]),
                this[t(165)].y = a,
                this[t(180)](this.findGameForm),
                this[t(165)][t(167)] = !1,
                this.btnCreate = new jt(this[t(131)],0,this[t(131)][t(187)] - 100,t(202),t(164)),
                this[t(121)][t(205)](CyberInstance.lang[t(196)][t(155)]()),
                this.btnCreate.x = this.game.width / 2 - this[t(121)].width / 2,
                this[t(121)][t(206)](this[t(182)], this),
                this[t(180)](this[t(121)]);
                var o = this[t(171)](0, 0, t(202), t(112));
                o.x = this[t(131)][t(193)] - o[t(193)] - 15,
                o.y = 15,
                o[t(195)] = !0,
                o.events[t(154)][t(180)]((function() {
                    var e = t;
                    CyberInstance[e(148)][e(151)](),
                    n[e(149)]()
                }
                )),
                this[t(183)] = o,
                this[t(114)]()
            }
        }, {
            key: "createTransition",
            value: function() {
                var t = e;
                this.y = -100,
                this[t(131)][t(180)].tween(this).to({
                    y: 0
                }, 500, Phaser[t(125)].Back.Out, !0)
            }
        }, {
            key: e(132),
            value: function() {
                var t = e;
                !this[t(167)] && (this[t(114)](),
                this[t(167)] = !0)
            }
        }, {
            key: e(149),
            value: function() {
                var t = e;
                this[t(167)] && (this[t(167)] = !1)
            }
        }, {
            key: e(182),
            value: function() {
                var t = e
                  , n = this;
                CyberInstance[t(117)] && (CyberInstance[t(117)] = !1);
                var r = parseInt(this[t(179)][t(133)]);
                ie[t(115)][t(201)](r) ? (this[t(131)][t(124)][t(153)]()[t(118)]({
                    disconnectTime: 15e3
                }),
                ie[t(122)]((function() {
                    var e = t
                      , r = new SFS2X.SFSObject;
                    r[e(203)](e(169), parseInt(n[e(179)][e(133)])),
                    n[e(179)].playerCount < 4 && r.putInt(e(137), n[e(179)][e(175)]),
                    n[e(127)] && !0 === n[e(127)][e(186)] && r.putBool("friendMode", !0),
                    ie.instance.sfs[e(157)](new (SFS2X[e(160)])("createGame",r))
                }
                ))) : M[t(152)](r)
            }
        }, {
            key: e(145),
            value: function(t) {
                var n = e
                  , r = this;
                this[n(120)] = this.create(0, t, n(202), n(181)),
                this[n(159)](this[n(120)], CyberInstance[n(134)][n(196)]),
                this.createRoomTab[n(195)] = !0,
                this[n(120)][n(200)][n(154)].add((function() {
                    var t = n;
                    r.createRoomTab[t(189)] == t(128) && (CyberInstance.sound[t(151)](),
                    r[t(120)].loadTexture(t(202), t(181)),
                    r[t(191)][t(162)]("homeScreen", t(128)),
                    r[t(179)][t(167)] = !0,
                    r.btnCreate.visible = !0,
                    r[t(165)][t(167)] = !1)
                }
                )),
                this[n(191)] = this.create(0, t, n(202), n(128)),
                this[n(159)](this[n(191)], CyberInstance[n(134)].SEARCH_ROOM),
                this[n(191)][n(195)] = !0,
                this[n(191)][n(200)][n(154)][n(180)]((function() {
                    var t = n;
                    r[t(191)][t(189)] == t(128) && (CyberInstance[t(148)][t(151)](),
                    r[t(120)][t(162)](t(202), "cg_tab2"),
                    r[t(191)].loadTexture(t(202), t(181)),
                    r[t(179)][t(167)] = !1,
                    r.btnCreate.visible = !1,
                    r[t(165)][t(167)] = !0)
                }
                )),
                this[n(120)].x = this[n(131)][n(193)] / 2 - (this.createRoomTab[n(193)] + this[n(191)][n(193)]) / 2,
                this[n(191)].x = this[n(120)].x + this[n(120)][n(193)]
            }
        }, {
            key: e(159),
            value: function(t, n) {
                var r = e
                  , i = new Phaser.Text(this[r(131)],t[r(193)] / 2,t[r(187)] / 2 + 2,n,{
                    font: APP_FONT,
                    fontWeight: 400,
                    fontSize: 20,
                    fill: r(144)
                });
                i[r(135)].setTo(.5),
                t[r(142)](i)
            }
        }]) && Ja(n[i(199)], r),
        Object[i(126)](n, i(199), {
            writable: !1
        }),
        c
    }(_);
    function ro(t) {
        var e = so;
        return (ro = e(342) == typeof Symbol && e(314) == typeof Symbol[e(309)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(342) == typeof Symbol && t[n(341)] === Symbol && t !== Symbol[n(366)] ? n(314) : typeof t
        }
        )(t)
    }
    function io(t, e) {
        for (var n = so, r = 0; r < e.length; r++) {
            var i = e[r];
            i[n(323)] = i[n(323)] || !1,
            i[n(301)] = !0,
            n(307)in i && (i.writable = !0),
            Object[n(331)](t, i[n(319)], i)
        }
    }
    function ao(t, e) {
        var n = so;
        return (ao = Object[n(361)] ? Object[n(361)][n(346)]() : function(t, e) {
            return t[n(305)] = e,
            t
        }
        )(t, e)
    }
    function oo() {
        var t = ["formatTimeV2", "inited", "getDuration", "background", "Derived constructors may only return object or undefined", "353685EUDpQW", "width", "1696YuvBep", "sound", "durationTimer", "setText", "getPromotion", "scale", "setPrototypeOf", "flashsale", "Super expression must either be null or a function", "height", "game", "prototype", "#fcf8de", "createView", "start", "click", "this hasn't been initialised - super() hasn't been called", "flashSaleDurationText", "remove", "configurable", "time", "7707790CpLzGA", "2976120DonrkJ", "__proto__", "loop", "value", "create", "iterator", "construct", "onInputDown", "buy_button", "close", "symbol", "inputEnabled", "ShopScreen", "valueOf", "9MYNiek", "key", "apply", "instance", "41pbnOsi", "enumerable", "playButtonSound", "25802fsJSev", "setTo", "Cannot call a class as a function", "call", "getPrototypeOf", "500", "defineProperty", "add", "addChild", "Còn lại: ", "49398eNoCJu", "undefined", "object", "Linear", "60652cuVRWI", "events", "constructor", "function", "3593964LQxZrh", "text", "anchor", "bind", "visible"];
        return (oo = function() {
            return t
        }
        )()
    }
    function so(t, e) {
        var n = oo();
        return (so = function(t, e) {
            return n[t -= 296]
        }
        )(t, e)
    }
    function co(t, e) {
        var n = so;
        if (e && (ro(e) === n(337) || typeof e === n(342)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(352));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(so(298));
            return t
        }(t)
    }
    function uo(t) {
        var e = so;
        return (uo = Object[e(361)] ? Object[e(329)].bind() : function(t) {
            var n = e;
            return t.__proto__ || Object[n(329)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = so, r = t(); ; )
            try {
                if (630335 == -parseInt(n(322)) / 1 * (parseInt(n(339)) / 2) + parseInt(n(343)) / 3 + parseInt(n(304)) / 4 + -parseInt(n(353)) / 5 + -parseInt(n(335)) / 6 + parseInt(n(325)) / 7 * (parseInt(n(355)) / 8) + parseInt(n(318)) / 9 * (-parseInt(n(303)) / 10))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(oo);
    const ho = function(t) {
        var e = so;
        !function(t, e) {
            var n = so;
            if (typeof e !== n(342) && null !== e)
                throw new TypeError(n(363));
            t[n(366)] = Object[n(308)](e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, n(366), {
                writable: !1
            }),
            e && ao(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = so;
            if (typeof Reflect === t(336) || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if (typeof Proxy === t(342))
                return !0;
            try {
                return Boolean[t(366)][t(317)][t(328)](Reflect[t(310)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = so, n = uo(a);
            if (o) {
                var r = uo(this)[e(341)];
                t = Reflect.construct(n, arguments, r)
            } else
                t = n[e(320)](this, arguments);
            return co(this, t)
        }
        );
        function c(t) {
            var e = so;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(so(327))
            }(this, c),
            s[e(328)](this, t)
        }
        return n = c,
        i = so,
        (r = [{
            key: e(368),
            value: function() {
                var t = e
                  , n = this;
                this.addOverlay(.8),
                this[t(351)] = this.create(0, 0, t(362), "bg"),
                this[t(351)].x = this[t(365)][t(354)] / 2 - this[t(351)].width / 2,
                this.background.y = this.game[t(364)] / 2 - this[t(351)][t(364)] / 2;
                var r = new jt(this.game,274,396,t(362),t(312));
                r.x = r.x + r.width / 2,
                r.y = r.y + r.height / 2,
                r[t(345)][t(326)](.5),
                r[t(297)]((function() {
                    var e = t;
                    ot[e(321)][e(349)] && (n[e(357)] && n[e(365)][e(302)].events[e(300)](n[e(357)]),
                    n.game.state[e(296)](e(316), !0, !1))
                }
                )),
                this[t(351)][t(333)](r),
                this.game[t(332)].tween(r[t(360)]).to({
                    x: .94,
                    y: .94
                }, 1e3, t(338), !0, 0, -1).yoyo(!0, 0);
                var i = this[t(308)](0, 0, t(362), t(313));
                i.x = this[t(351)].x + this[t(351)].width - i[t(354)] - 70,
                i.y = this[t(351)].y + 25,
                i[t(315)] = !0,
                i[t(340)][t(311)][t(332)](this[t(313)], this);
                var a = bt[t(321)][t(359)]();
                a && a[t(350)]() > 5e3 && (this[t(299)] = this.game[t(332)][t(344)](r.x, 370, t(334) + h[t(348)](a[t(350)]()), {
                    font: APP_FONT,
                    fontSize: 20,
                    fill: t(367),
                    fontWeight: t(330)
                }),
                this.flashSaleDurationText[t(345)][t(326)](.5, 0),
                this[t(351)][t(333)](this[t(299)]),
                this[t(357)] = this[t(365)][t(302)][t(340)][t(306)](1e3, (function() {
                    var e = t
                      , r = a[e(350)]();
                    r > 0 ? n.flashSaleDurationText[e(358)]("Còn lại: " + h[e(348)](r)) : (n.game[e(302)][e(340)].remove(n[e(357)]),
                    n[e(299)][e(347)] = !1)
                }
                )))
            }
        }, {
            key: "open",
            value: function() {
                var t = e
                  , n = this;
                !this[t(347)] && (this[t(347)] = !0,
                this[t(357)] = this[t(365)][t(302)][t(340)][t(306)](1e3, (function() {
                    var e = t
                      , r = bt[e(321)][e(359)]()[e(350)]();
                    r > 0 ? n[e(299)].setText(e(334) + h.formatTimeV2(r)) : (n[e(365)][e(302)][e(340)].remove(n.durationTimer),
                    n[e(299)][e(347)] = !1)
                }
                )))
            }
        }, {
            key: e(313),
            value: function() {
                var t = e;
                this[t(347)] && (CyberInstance[t(356)][t(324)](),
                this.durationTimer && this[t(365)][t(302)].events[t(300)](this.durationTimer),
                this[t(347)] = !1)
            }
        }]) && io(n[i(366)], r),
        Object[i(331)](n, i(366), {
            writable: !1
        }),
        c
    }(_);
    function lo(t) {
        var e = yo;
        return (lo = e(280) == typeof Symbol && e(333) == typeof Symbol[e(302)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(280) == typeof Symbol && t[n(338)] === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function fo(t, e) {
        for (var n = yo, r = 0; r < e.length; r++) {
            var i = e[r];
            i[n(350)] = i.enumerable || !1,
            i[n(328)] = !0,
            n(319)in i && (i.writable = !0),
            Object[n(326)](t, i.key, i)
        }
    }
    function po() {
        var t = ["bind", "function", "onInputDown", "Còn lại: ", "sham", "76888dXYYbY", "14HulmSE", "getPrototypeOf", "162827ZmnUxb", "add", "loop", "9602252HAJwzJ", "undefined", "formatTimeV2", "addChild", "events", "construct", "remove", "close", "valueOf", "sound", "amazingsale", "ShopScreen", "iterator", "setTo", "scale", "instance", "88gMbYFd", "create", "state", "click", "142275YugbWu", "durationTimer", "start", "width", "getDuration", "call", "211323HAfcmR", "text", "Super expression must either be null or a function", "value", "#fcf8de", "game", "Cannot call a class as a function", "getPromotion", "inputEnabled", "__proto__", "defineProperty", "setPrototypeOf", "configurable", "addOverlay", "apply", "prototype", "this hasn't been initialised - super() hasn't been called", "symbol", "500", "Linear", "height", "3762522xAKXtI", "constructor", "anchor", "21YIDJtL", "Derived constructors may only return object or undefined", "visible", "flashSaleDurationText", "background", "yoyo", "open", "createView", "playButtonSound", "33760PHuNER", "enumerable", "1449QwMKRI", "time", "setText"];
        return (po = function() {
            return t
        }
        )()
    }
    function yo(t, e) {
        var n = po();
        return (yo = function(t, e) {
            return n[t -= 280]
        }
        )(t, e)
    }
    function vo(t, e) {
        var n = yo;
        return (vo = Object[n(327)] ? Object[n(327)][n(354)]() : function(t, e) {
            return t[n(325)] = e,
            t
        }
        )(t, e)
    }
    function bo(t, e) {
        var n = yo;
        if (e && ("object" === lo(e) || typeof e === n(280)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(341));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(yo(332));
            return t
        }(t)
    }
    function mo(t) {
        var e = yo;
        return (mo = Object.setPrototypeOf ? Object[e(286)][e(354)]() : function(t) {
            var n = e;
            return t[n(325)] || Object[n(286)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = yo, r = t(); ; )
            try {
                if (463710 == parseInt(n(287)) / 1 + -parseInt(n(285)) / 2 * (-parseInt(n(316)) / 3) + parseInt(n(306)) / 4 * (parseInt(n(310)) / 5) + parseInt(n(337)) / 6 + parseInt(n(340)) / 7 * (-parseInt(n(284)) / 8) + parseInt(n(351)) / 9 * (-parseInt(n(349)) / 10) + -parseInt(n(290)) / 11)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(po);
    const go = function(t) {
        var e = yo;
        !function(t, e) {
            var n = yo;
            if (typeof e !== n(280) && null !== e)
                throw new TypeError(n(318));
            t[n(331)] = Object[n(307)](e && e[n(331)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, n(331), {
                writable: !1
            }),
            e && vo(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = yo;
            if (typeof Reflect === t(291) || !Reflect[t(295)])
                return !1;
            if (Reflect[t(295)][t(283)])
                return !1;
            if (typeof Proxy === t(280))
                return !0;
            try {
                return Boolean[t(331)][t(298)][t(315)](Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = yo, n = mo(a);
            if (o) {
                var r = mo(this).constructor;
                t = Reflect.construct(n, arguments, r)
            } else
                t = n[e(330)](this, arguments);
            return bo(this, t)
        }
        );
        function c(t) {
            var e = yo;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(yo(322))
            }(this, c),
            s[e(315)](this, t)
        }
        return n = c,
        i = yo,
        (r = [{
            key: e(347),
            value: function() {
                var t = e
                  , n = this;
                this[t(329)](.8),
                this.background = this[t(307)](0, 0, t(300), "bg"),
                this[t(344)].x = this[t(321)][t(313)] / 2 - this[t(344)][t(313)] / 2,
                this.background.y = this[t(321)][t(336)] / 2 - this[t(344)].height / 2 - 20;
                var r = new jt(this[t(321)],274,396,"amazingsale","button");
                r.x = this[t(344)][t(313)] / 2,
                r.y = this[t(344)][t(336)] - 90,
                r.anchor.setTo(.5),
                r[t(309)]((function() {
                    var e = t;
                    ot.instance.inited && (n[e(311)] && n[e(321)][e(352)][e(294)][e(296)](n.durationTimer),
                    n.game[e(308)][e(312)](e(301), !0, !1))
                }
                )),
                this[t(344)][t(293)](r),
                this[t(321)][t(288)].tween(r[t(304)]).to({
                    x: .94,
                    y: .94
                }, 1e3, t(335), !0, 0, -1)[t(345)](!0, 0);
                var i = this[t(307)](this[t(344)].x + 730, this.background.y + 110, t(300), t(297));
                i[t(324)] = !0,
                i[t(294)][t(281)][t(288)](this[t(297)], this);
                var a = bt[t(305)].getPromotion();
                a && a.getDuration() > 5e3 && (this[t(343)] = this.game[t(288)][t(317)](r.x, this[t(344)][t(336)] - 20, t(282) + h[t(292)](a[t(314)]()), {
                    font: APP_FONT,
                    fontSize: 20,
                    fill: t(320),
                    fontWeight: t(334)
                }),
                this[t(343)][t(339)][t(303)](.5, 0),
                this[t(344)][t(293)](this.flashSaleDurationText),
                this[t(311)] = this[t(321)][t(352)].events[t(289)](1e3, (function() {
                    var e = t
                      , r = a[e(314)]();
                    r > 0 ? n[e(343)][e(353)](e(282) + h[e(292)](r)) : (n[e(321)][e(352)][e(294)][e(296)](n.durationTimer),
                    n.flashSaleDurationText.visible = !1)
                }
                )))
            }
        }, {
            key: e(346),
            value: function() {
                var t = e
                  , n = this;
                !this[t(342)] && (this[t(342)] = !0,
                this[t(311)] = this[t(321)].time[t(294)][t(289)](1e3, (function() {
                    var e = t
                      , r = bt[e(305)][e(323)]()[e(314)]();
                    r > 0 ? n.flashSaleDurationText.setText("Còn lại: " + h[e(292)](r)) : (n.game[e(352)].events.remove(n[e(311)]),
                    n[e(343)][e(342)] = !1)
                }
                )))
            }
        }, {
            key: e(297),
            value: function() {
                var t = e;
                this[t(342)] && (CyberInstance[t(299)][t(348)](),
                this[t(311)] && this.game.time[t(294)][t(296)](this[t(311)]),
                this[t(342)] = !1)
            }
        }]) && fo(n[i(331)], r),
        Object[i(326)](n, i(331), {
            writable: !1
        }),
        c
    }(_);
    function wo(t) {
        var e = ko;
        return (wo = e(521) == typeof Symbol && e(502) == typeof Symbol[e(479)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(521) == typeof Symbol && t[n(462)] === Symbol && t !== Symbol[n(415)] ? n(502) : typeof t
        }
        )(t)
    }
    function Io(t, e) {
        for (var n = ko, r = 0; r < e[n(469)]; r++) {
            var i = e[r];
            i.enumerable = i[n(411)] || !1,
            i[n(520)] = !0,
            "value"in i && (i[n(498)] = !0),
            Object[n(512)](t, i[n(523)], i)
        }
    }
    function So() {
        var t = ko;
        return So = typeof Reflect !== t(449) && Reflect.get ? Reflect[t(514)][t(496)]() : function(e, n, r) {
            var i = t
              , a = Oo(e, n);
            if (a) {
                var o = Object[i(494)](a, n);
                return o[i(514)] ? o.get[i(447)](arguments[i(469)] < 3 ? e : r) : o[i(455)]
            }
        }
        ,
        So[t(408)](this, arguments)
    }
    function Oo(t, e) {
        for (var n = ko; !Object[n(415)].hasOwnProperty.call(t, e) && null !== (t = _o(t)); )
            ;
        return t
    }
    function ko(t, e) {
        var n = xo();
        return (ko = function(t, e) {
            return n[t -= 406]
        }
        )(t, e)
    }
    function Co(t, e) {
        var n = ko;
        return (Co = Object.setPrototypeOf ? Object[n(431)].bind() : function(t, e) {
            return t[n(532)] = e,
            t
        }
        )(t, e)
    }
    function Po(t, e) {
        var n = ko;
        if (e && (wo(e) === n(444) || typeof e === n(521)))
            return e;
        if (void 0 !== e)
            throw new TypeError("Derived constructors may only return object or undefined");
        return To(t)
    }
    function To(t) {
        if (void 0 === t)
            throw new ReferenceError(ko(511));
        return t
    }
    function xo() {
        var t = ["prototype", "9636NDefaK", "click", "construct", "tween", "rightarrow", "updateGift", "7 ngày", "addOverlay", "valueOf", "#e46f4b", "formatCoinWithCommas", "onPurchaseProduct", "rightButton", "xm599", "start", "setPrototypeOf", "game", "10025838symtoL", "leftButton", "avatar10", "30 ngày", "2297238myZvWZ", "image", "addOnce", "height", "28M", "visible", "getFullYear", "object", "CLOSE", "coin", "call", "212644pxpALR", "undefined", "createSecond", "createBox", "createView", "updateAvatar", "1244164sELgrY", "value", "box", "purchase", "getPrototypeOf", "openLoadingPopup", "createBuyButton", "width", "constructor", "destroy", "add", "lang", "getYear", "Free", "productId", "length", "1.99$", "create", "25YWlbZa", "alpha", "Cannot call a class as a function", "yoyo", "#ffffff", "Text", "has", "iterator", "9jgcMgJ", "events", "5.99$", "scale", "buttonText", "21qnNvkw", "error", "firstBackground", "durationTimer", "Linear", "leftarrow", "setTo", "second", "getDeveloperPayload", "getOwnPropertyDescriptor", "sung", "bind", "8784328SVThjY", "writable", "xmas_1_99", "replace", "150M", "symbol", "x10", "PAYMENT_SUCCESS", "inputEnabled", "make", "first_percent", "setText", "onInputDown", "secondBackground", "this hasn't been initialised - super() hasn't been called", "defineProperty", "remove", "get", "xm199", "651154OypNuO", "destroyNoelPack", "productID", "anchor", "configurable", "function", "noelpack", "key", "isScling", "verifyPayment", "onComplete", "state", "close", "sham", "xmas_5_99", "#4ea1ff", "__proto__", "createFirst", "addChild", "apply", "19370zZRVHM", "sound", "enumerable", "second_percent", "purchases", "instance"];
        return (xo = function() {
            return t
        }
        )()
    }
    function _o(t) {
        var e = ko;
        return (_o = Object[e(431)] ? Object[e(458)][e(496)]() : function(t) {
            var n = e;
            return t[n(532)] || Object[n(458)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = ko, r = t(); ; )
            try {
                if (861495 == parseInt(n(516)) / 1 + -parseInt(n(448)) / 2 * (-parseInt(n(480)) / 3) + parseInt(n(454)) / 4 * (parseInt(n(472)) / 5) + -parseInt(n(437)) / 6 * (parseInt(n(485)) / 7) + -parseInt(n(497)) / 8 + -parseInt(n(433)) / 9 + parseInt(n(409)) / 10 * (parseInt(n(416)) / 11))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(xo);
    const jo = function(t) {
        var e = ko;
        !function(t, e) {
            var n = ko;
            if (typeof e !== n(521) && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t[n(415)] = Object[n(471)](e && e[n(415)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, n(415), {
                writable: !1
            }),
            e && Co(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = ko;
            if (typeof Reflect === t(449) || !Reflect[t(418)])
                return !1;
            if (Reflect.construct[t(529)])
                return !1;
            if (typeof Proxy === t(521))
                return !0;
            try {
                return Boolean[t(415)][t(424)][t(447)](Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = ko, n = _o(a);
            if (o) {
                var r = _o(this)[e(462)];
                t = Reflect[e(418)](n, arguments, r)
            } else
                t = n.apply(this, arguments);
            return Po(this, t)
        }
        );
        function c(t) {
            var e, n = ko;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(ko(474))
            }(this, c),
            e = s[n(447)](this, t),
            bt[n(414)][n(427)].add(e[n(427)], To(e)),
            e
        }
        return n = c,
        i = ko,
        (r = [{
            key: e(463),
            value: function() {
                var t = e;
                So(_o(c[t(415)]), t(463), this)[t(447)](this),
                bt.instance[t(427)][t(513)](this[t(427)], this)
            }
        }, {
            key: e(427),
            value: function(t) {
                var n = e;
                if (this.closeLoadingPopup(),
                t[n(486)])
                    new M(game,{
                        text: t.errorMsg,
                        buttonText: CyberInstance[n(465)][n(445)],
                        hideCloseButton: !0
                    });
                else {
                    var r = CyberInstance[n(465)][n(504)][n(500)]("%s", h[n(426)](t.coin));
                    t[n(518)] == n(499) ? (ot[n(414)][n(421)](12, 10),
                    ot.instance[n(453)](10, 6048e5)) : t[n(518)] == n(530) && (ot.instance[n(421)](12, 20),
                    ot.instance[n(453)](28, 2592e6)),
                    new M(game,{
                        text: r,
                        buttonText: CyberInstance[n(465)][n(445)],
                        hideCloseButton: !0
                    }),
                    this[n(432)][n(527)].getCurrentState()[n(517)](t[n(518)])
                }
            }
        }, {
            key: e(452),
            value: function() {
                var t = e
                  , n = this;
                if (this[t(423)](.8),
                noel_1_99 == this.getYear())
                    this[t(510)] = this.createSecond(!1);
                else {
                    this[t(524)] = !1,
                    this[t(487)] = this[t(406)](),
                    this[t(510)] = this[t(450)](!0),
                    this.secondBackground.x = this[t(432)][t(461)];
                    var r = new jt(this[t(432)],0,0,t(522),t(490));
                    r.x = this[t(487)].x / 2 - r[t(461)] / 2,
                    r.y = this.game.height / 2 - r[t(440)] / 2,
                    r[t(417)]((function() {
                        var e = t;
                        if (!n[e(524)]) {
                            n[e(524)] = !0,
                            n[e(432)][e(464)][e(419)](n[e(487)]).to({
                                x: n[e(432)][e(461)] / 2 - n[e(487)][e(461)] / 2
                            }, 300, e(489))[e(430)]();
                            var r = n.game[e(464)].tween(n[e(510)]).to({
                                x: n.game[e(461)]
                            }, 300, "Linear");
                            r[e(430)](),
                            r[e(526)][e(439)]((function() {
                                var t = e;
                                n.isScling = !1,
                                n.rightButton[t(442)] = !0
                            }
                            )),
                            n[e(434)][e(442)] = !1
                        }
                    }
                    )),
                    this[t(464)](r),
                    this[t(434)] = r,
                    this[t(434)].visible = !1;
                    var i = new jt(this[t(432)],0,0,"noelpack",t(420));
                    i.x = this.game[t(461)] - r.x - r[t(461)],
                    i.y = r.y,
                    i[t(417)]((function() {
                        var e = t;
                        if (!n[e(524)]) {
                            n[e(524)] = !0,
                            n[e(432)][e(464)][e(419)](n.firstBackground).to({
                                x: -n.firstBackground[e(461)]
                            }, 300, e(489)).start();
                            var r = n[e(432)].add.tween(n[e(510)]).to({
                                x: n.game.width / 2 - n.secondBackground[e(461)] / 2
                            }, 300, e(489));
                            r[e(430)](),
                            r[e(526)].addOnce((function() {
                                var t = e;
                                n.isScling = !1,
                                n.leftButton[t(442)] = !0
                            }
                            )),
                            n[e(428)][e(442)] = !1
                        }
                    }
                    )),
                    this[t(464)](i),
                    this[t(428)] = i
                }
            }
        }, {
            key: e(451),
            value: function(t, n) {
                var r = e
                  , i = this[r(432)][r(506)].image(228, 208, r(522), r(456));
                if (t) {
                    var a = this[r(432)][r(506)][r(438)](i[r(461)] / 2, 68, r(522), t);
                    a[r(519)][r(491)](.5),
                    i[r(407)](a)
                }
                if (n) {
                    var o = new (Phaser[r(477)])(this.game,i.width / 2,i[r(440)] - 30,n,{
                        font: APP_FONT,
                        fill: r(425),
                        fontWeight: 500,
                        fontSize: 24
                    });
                    o[r(519)].setTo(.5),
                    i[r(407)](o)
                }
                return i
            }
        }, {
            key: e(406),
            value: function() {
                var t = e
                  , n = this[t(471)](0, 0, t(522), "bg");
                n.x = this[t(432)][t(461)] / 2 - n[t(461)] / 2,
                n.y = this.game.height / 2 - n[t(440)] / 2;
                var r = this.game[t(506)].image(288, 48, t(522), "fist");
                r.anchor.setTo(.5),
                n.addChild(r);
                var i = this[t(451)](t(435), t(422));
                n[t(407)](i);
                var a = this[t(451)](t(446), t(441));
                a.x = i.x + i[t(461)] - 1,
                n[t(407)](a);
                var o = this.createBox("sung", t(503));
                o.x = a.x + a.width - 1,
                n[t(407)](o);
                var s = this.game.make[t(438)](660, 36, t(522), "close");
                s[t(505)] = !0,
                s[t(481)][t(509)][t(464)](this[t(528)], this),
                n[t(407)](s);
                var c = this[t(460)](t(499), t(470), !1);
                c[t(468)] = t(499),
                n[t(407)](c);
                var u = this.game[t(506)].image(c.x + 20, 0, t(522), t(507));
                return u.y = c.y - 55,
                n.addChild(u),
                this[t(432)].add[t(419)](c[t(483)]).to({
                    x: .94,
                    y: .94
                }, 1e3, t(489), !0, 0, -1)[t(475)](!0, 0),
                n
            }
        }, {
            key: e(450),
            value: function(t) {
                var n = e
                  , r = this.create(0, 0, n(522), "bg");
                r.x = this[n(432)][n(461)] / 2 - r.width / 2,
                r.y = this[n(432)][n(440)] / 2 - r.height / 2;
                var i = this.game.make[n(438)](288, 48, n(522), n(492));
                i[n(519)][n(491)](.5),
                r[n(407)](i);
                var a = this[n(451)]("avatar", n(436));
                r[n(407)](a);
                var o = this.createBox(n(446), n(501));
                o.x = a.x + a.width - 1,
                r[n(407)](o);
                var s = this[n(451)](n(495), "x20");
                s.x = o.x + o.width - 1,
                r[n(407)](s);
                var c = this[n(432)][n(506)].image(660, 36, "noelpack", n(528));
                c[n(505)] = !0,
                c[n(481)][n(509)][n(464)](this[n(528)], this),
                r[n(407)](c);
                var u = this[n(460)](n(530), n(482), t);
                u[n(468)] = "xmas_5_99",
                r[n(407)](u);
                var h = this[n(432)][n(506)][n(438)](u.x + 20, 0, "noelpack", n(412));
                return h.y = u.y - 55,
                r[n(407)](h),
                t || this[n(432)].add[n(419)](u[n(483)]).to({
                    x: .94,
                    y: .94
                }, 1e3, n(489), !0, 0, -1)[n(475)](!0, 0),
                r
            }
        }, {
            key: e(460),
            value: function(t, n, r) {
                var i = e
                  , a = this
                  , o = new jt(this[i(432)],448,450,"noelpack","buy_button");
                o.anchor.setTo(.5),
                r ? o[i(473)] = .6 : o.click((function(t) {
                    var e = i;
                    if (a[e(459)](),
                    bt.instance[e(413)][e(478)](t[e(468)])) {
                        var n = bt.instance[e(413)][e(514)](t[e(468)]);
                        bt[e(414)][e(525)](n)
                    } else
                        bt[e(414)][e(457)](t[e(468)], CyberInstance[e(493)]())
                }
                ));
                var s = new (Phaser[i(477)])(this.game,0,0,n,{
                    font: APP_FONT,
                    fill: i(476),
                    fontWeight: 700,
                    fontSize: 34,
                    stroke: i(531),
                    strokeThickness: 4
                });
                return t == i(499) && bt[i(414)][i(515)] && s[i(508)](bt[i(414)][i(515)]),
                t == i(530) && bt[i(414)][i(429)] && s.setText(bt.instance[i(429)]),
                bt.instance[i(413)].has(t) && s.setText(i(467)),
                s[i(519)].setTo(.5),
                o[i(484)] = s,
                o[i(407)](s),
                o
            }
        }, {
            key: "open",
            value: function() {
                var t = e;
                !this[t(442)] && (this[t(524)] = !1,
                this.visible = !0)
            }
        }, {
            key: "close",
            value: function() {
                var t = e;
                this[t(442)] && (CyberInstance[t(410)].playButtonSound(),
                this[t(488)] && this[t(432)].time[t(481)][t(513)](this[t(488)]),
                this[t(442)] = !1)
            }
        }, {
            key: e(466),
            value: function() {
                var t = e;
                return (new Date)[t(443)]()
            }
        }]) && Io(n.prototype, r),
        Object[i(512)](n, i(415), {
            writable: !1
        }),
        c
    }(_);
    function Ro() {
        var t = ["click", "14115GjBwdC", "defineProperty", "symbol", "undefined", "1139030FUDJcb", "game", "visible", "instance", "setText", "close", "valueOf", "width", "add", "configurable", "Còn lại: ", "setPrototypeOf", "button", "prototype", "noelsale", "formatTimeV2", "Super expression must either be null or a function", "6sRxUub", "316104ZNkxrA", "1107404oRqxZX", "Cannot call a class as a function", "inited", "sham", "function", "16dBjWQm", "time", "constructor", "Derived constructors may only return object or undefined", "getDuration", "open", "flashSaleDurationText", "state", "getPromotion", "Linear", "getPrototypeOf", "1464sYMzig", "inputEnabled", "18iXkmqN", "this hasn't been initialised - super() hasn't been called", "start", "durationTimer", "bind", "tween", "3256396vRrwsV", "length", "iterator", "key", "ShopScreen", "background", "setTo", "yoyo", "events", "1654401MIdmku", "construct", "height", "call", "playButtonSound", "#fcf8de", "__proto__", "enumerable", "anchor", "createView", "value", "text", "create", "966qaPYcF", "remove", "addOverlay", "500"];
        return (Ro = function() {
            return t
        }
        )()
    }
    function Eo(t) {
        var e = Bo;
        return (Eo = "function" == typeof Symbol && e(532) == typeof Symbol[e(505)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && "function" == typeof Symbol && t[n(486)] === Symbol && t !== Symbol.prototype ? n(532) : typeof t
        }
        )(t)
    }
    function Bo(t, e) {
        var n = Ro();
        return (Bo = function(t, e) {
            return n[t -= 470]
        }
        )(t, e)
    }
    function Ao(t, e) {
        for (var n = Bo, r = 0; r < e[n(504)]; r++) {
            var i = e[r];
            i[n(519)] = i[n(519)] || !1,
            i[n(543)] = !0,
            n(522)in i && (i.writable = !0),
            Object.defineProperty(t, i[n(506)], i)
        }
    }
    function Do(t, e) {
        var n = Bo;
        return (Do = Object[n(471)] ? Object[n(471)][n(501)]() : function(t, e) {
            return t[n(518)] = e,
            t
        }
        )(t, e)
    }
    function Fo(t, e) {
        var n = Bo;
        if (e && ("object" === Eo(e) || "function" == typeof e))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(487));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(Bo(498));
            return t
        }(t)
    }
    function No(t) {
        var e = Bo;
        return (No = Object[e(471)] ? Object[e(494)][e(501)]() : function(t) {
            return t[e(518)] || Object.getPrototypeOf(t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = Bo, r = t(); ; )
            try {
                if (282201 == -parseInt(n(495)) / 1 + -parseInt(n(479)) / 2 + parseInt(n(477)) / 3 * (-parseInt(n(478)) / 4) + parseInt(n(530)) / 5 * (parseInt(n(525)) / 6) + parseInt(n(512)) / 7 * (parseInt(n(484)) / 8) + -parseInt(n(497)) / 9 * (parseInt(n(534)) / 10) + parseInt(n(503)) / 11)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Ro);
    const Lo = function(t) {
        var e = Bo;
        !function(t, e) {
            var n = Bo;
            if (typeof e !== n(483) && null !== e)
                throw new TypeError(n(476));
            t[n(473)] = Object[n(524)](e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, n(473), {
                writable: !1
            }),
            e && Do(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = Bo;
            if (typeof Reflect === t(533) || !Reflect[t(513)])
                return !1;
            if (Reflect[t(513)][t(482)])
                return !1;
            if (typeof Proxy === t(483))
                return !0;
            try {
                return Boolean[t(473)][t(540)][t(515)](Reflect[t(513)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Bo, n = No(a);
            if (o) {
                var r = No(this)[e(486)];
                t = Reflect[e(513)](n, arguments, r)
            } else
                t = n.apply(this, arguments);
            return Fo(this, t)
        }
        );
        function c(t) {
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Bo(480))
            }(this, c),
            s.call(this, t)
        }
        return n = c,
        i = Bo,
        (r = [{
            key: e(521),
            value: function() {
                var t = e
                  , n = this;
                this[t(527)](.8),
                this[t(508)] = this[t(524)](0, 0, t(474), "bg"),
                this.background.x = this[t(535)][t(541)] / 2 - this[t(508)].width / 2,
                this[t(508)].y = this[t(535)].height / 2 - this[t(508)][t(514)] / 2 - 20;
                var r = new jt(this[t(535)],274,396,"noelsale",t(472));
                r.x = this.background[t(541)] / 2,
                r.y = this[t(508)][t(514)] - 90,
                r[t(520)][t(509)](.5),
                r[t(529)]((function() {
                    var e = t;
                    ot[e(537)][e(481)] && (n[e(500)] && n[e(535)][e(485)][e(511)][e(526)](n[e(500)]),
                    n[e(535)][e(491)][e(499)](e(507), !0, !1))
                }
                )),
                this[t(508)].addChild(r),
                this.game[t(542)][t(502)](r.scale).to({
                    x: .94,
                    y: .94
                }, 1e3, t(493), !0, 0, -1)[t(510)](!0, 0);
                var i = this.create(this[t(508)].x + 788, this[t(508)].y + 142, t(474), t(539));
                i[t(496)] = !0,
                i[t(511)].onInputDown[t(542)](this[t(539)], this);
                var a = bt.instance.getPromotion();
                a && a[t(488)]() > 5e3 && (this[t(490)] = this[t(535)][t(542)][t(523)](r.x, this[t(508)][t(514)] - 20, t(470) + h[t(475)](a.getDuration()), {
                    font: APP_FONT,
                    fontSize: 20,
                    fill: t(517),
                    fontWeight: t(528)
                }),
                this[t(490)].anchor[t(509)](.5, 0),
                this[t(508)].addChild(this[t(490)]),
                this[t(500)] = this[t(535)][t(485)][t(511)].loop(1e3, (function() {
                    var e = t
                      , r = a[e(488)]();
                    r > 0 ? n[e(490)][e(538)](e(470) + h[e(475)](r)) : (n[e(535)].time.events.remove(n[e(500)]),
                    n[e(490)][e(536)] = !1)
                }
                )))
            }
        }, {
            key: e(489),
            value: function() {
                var t = e
                  , n = this;
                !this[t(536)] && (this.visible = !0,
                this.durationTimer = this.game[t(485)][t(511)].loop(1e3, (function() {
                    var e = t
                      , r = bt[e(537)][e(492)]()[e(488)]();
                    r > 0 ? n[e(490)][e(538)](e(470) + h[e(475)](r)) : (n[e(535)][e(485)][e(511)][e(526)](n[e(500)]),
                    n.flashSaleDurationText[e(536)] = !1)
                }
                )))
            }
        }, {
            key: "close",
            value: function() {
                var t = e;
                this[t(536)] && (CyberInstance.sound[t(516)](),
                this[t(500)] && this[t(535)][t(485)][t(511)][t(526)](this.durationTimer),
                this[t(536)] = !1)
            }
        }]) && Ao(n[i(473)], r),
        Object[i(531)](n, i(473), {
            writable: !1
        }),
        c
    }(_);
    function Go(t) {
        var e = Yo;
        return (Go = e(238) == typeof Symbol && e(340) == typeof Symbol[e(262)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(238) == typeof Symbol && t[n(338)] === Symbol && t !== Symbol.prototype ? n(340) : typeof t
        }
        )(t)
    }
    function Mo(t, e) {
        for (var n = Yo, r = 0; r < e[n(322)]; r++) {
            var i = e[r];
            i.enumerable = i[n(313)] || !1,
            i[n(295)] = !0,
            n(364)in i && (i[n(348)] = !0),
            Object[n(305)](t, i[n(334)], i)
        }
    }
    function Wo() {
        var t = Yo;
        return Wo = typeof Reflect !== t(284) && Reflect.get ? Reflect[t(260)][t(278)]() : function(e, n, r) {
            var i = t
              , a = zo(e, n);
            if (a) {
                var o = Object[i(310)](a, n);
                return o[i(260)] ? o.get.call(arguments[i(322)] < 3 ? e : r) : o.value
            }
        }
        ,
        Wo[t(257)](this, arguments)
    }
    function zo(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Xo(t)); )
            ;
        return t
    }
    function Uo(t, e) {
        var n = Yo;
        return (Uo = Object[n(352)] ? Object[n(352)][n(278)]() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function Vo(t, e) {
        var n = Yo;
        if (e && (Go(e) === n(282) || typeof e === n(238)))
            return e;
        if (void 0 !== e)
            throw new TypeError("Derived constructors may only return object or undefined");
        return Ho(t)
    }
    function Ho(t) {
        if (void 0 === t)
            throw new ReferenceError(Yo(361));
        return t
    }
    function Xo(t) {
        var e = Yo;
        return (Xo = Object.setPrototypeOf ? Object[e(333)][e(278)]() : function(t) {
            var n = e;
            return t[n(253)] || Object[n(333)](t)
        }
        )(t)
    }
    function Yo(t, e) {
        var n = Ko();
        return (Yo = function(t, e) {
            return n[t -= 225]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = Yo, r = t(); ; )
            try {
                if (417185 == parseInt(n(301)) / 1 + parseInt(n(255)) / 2 * (parseInt(n(289)) / 3) + -parseInt(n(275)) / 4 * (-parseInt(n(261)) / 5) + -parseInt(n(288)) / 6 + parseInt(n(276)) / 7 * (parseInt(n(373)) / 8) + parseInt(n(242)) / 9 * (parseInt(n(319)) / 10) + -parseInt(n(254)) / 11)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Ko);
    const qo = function(t) {
        var e = Yo;
        !function(t, e) {
            var n = Yo;
            if ("function" != typeof e && null !== e)
                throw new TypeError(n(243));
            t[n(286)] = Object[n(230)](e && e[n(286)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, n(286), {
                writable: !1
            }),
            e && Uo(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = Yo;
            if (typeof Reflect === t(284) || !Reflect[t(341)])
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if (typeof Proxy === t(238))
                return !0;
            try {
                return Boolean[t(286)].valueOf[t(349)](Reflect[t(341)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Yo, n = Xo(a);
            if (o) {
                var r = Xo(this)[e(338)];
                t = Reflect[e(341)](n, arguments, r)
            } else
                t = n[e(257)](this, arguments);
            return Vo(this, t)
        }
        );
        function c(t) {
            var e, n = Yo;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Yo(300))
            }(this, c),
            e = s[n(349)](this, t),
            bt.instance[n(232)][n(331)](e[n(232)], Ho(e)),
            e
        }
        return n = c,
        i = Yo,
        (r = [{
            key: "destroy",
            value: function() {
                var t = Yo;
                Wo(Xo(c[t(286)]), t(312), this)[t(349)](this),
                bt[t(266)][t(232)][t(265)](this[t(232)], this)
            }
        }, {
            key: e(232),
            value: function(t) {
                var n = e;
                if (this[n(365)](),
                t.error)
                    new M(game,{
                        text: t[n(315)],
                        buttonText: CyberInstance[n(358)][n(259)],
                        hideCloseButton: !0
                    });
                else {
                    var r = CyberInstance.lang[n(355)].replace("%s", h.formatCoinWithCommas(t[n(356)]));
                    if (t.productID == n(271))
                        ot[n(266)][n(318)](12, 10);
                    else if (t[n(248)] == n(306))
                        ot[n(266)][n(318)](12, 15),
                        ot[n(266)][n(308)](29, 1296e6);
                    else if (t[n(248)] == n(287)) {
                        ot[n(266)].updateGift(12, 30);
                        var i = 2592e6;
                        ot[n(266)][n(308)](30, i),
                        ot[n(266)][n(308)](60, i),
                        CyberGlobalData[n(252)] = 60,
                        FBInstant[n(304)][n(343)]({
                            clock: CyberGlobalData[n(252)]
                        })
                    }
                    new M(game,{
                        text: r,
                        buttonText: CyberInstance[n(358)][n(259)],
                        hideCloseButton: !0
                    }),
                    CyberGlobalData[n(323)] = 1,
                    FBInstant[n(304)][n(343)]({
                        dailyPack: CyberGlobalData[n(323)]
                    }),
                    this[n(244)][n(292)].getCurrentState().destroyNewYearPack(t[n(248)])
                }
            }
        }, {
            key: e(291),
            value: function() {
                var t = e
                  , n = this;
                this[t(302)](.5),
                this[t(296)] = [];
                var r = bt[t(266)][t(323)];
                if (0 == r[t(369)] ? (this[t(320)] = this[t(234)](),
                this[t(303)] = this[t(239)](!0),
                this[t(303)].x = this[t(244)].width,
                this[t(279)] = this[t(353)](!0),
                this.threeBackground.x = this[t(244)].width,
                this.threeBackground[t(272)] = !1,
                this[t(303)][t(272)] = !1,
                this[t(296)][t(372)](this[t(320)]),
                this[t(296)].push(this.secondBackground),
                this[t(296)][t(372)](this.threeBackground)) : 1 == r.size ? (this[t(303)] = this.createSecond(!1),
                this.threeBackground = this.createThree(!0),
                this.threeBackground.x = this[t(244)][t(354)],
                this[t(279)][t(272)] = !1,
                this[t(296)][t(372)](this.secondBackground),
                this.contents[t(372)](this[t(279)])) : this.contents.push(this.createThree(!1)),
                this.contents[t(322)] > 1) {
                    this.currentTab = 0,
                    this[t(345)] = !1;
                    var i = new jt(this[t(244)],0,0,t(246),"leftarrow");
                    i.x = this[t(296)][0].x / 2 - i[t(354)] / 2,
                    i.y = this[t(244)][t(263)] / 2 - i[t(263)] / 2,
                    i.click(this[t(316)], this),
                    this[t(331)](i),
                    this[t(327)] = i,
                    this[t(327)].visible = !1;
                    var a = new jt(this.game,0,0,"newyear","rightarrow");
                    a.x = this[t(244)][t(354)] - i.x - i[t(354)],
                    a.y = i.y,
                    a[t(245)](this[t(357)], this),
                    this[t(331)](a),
                    this[t(235)] = a
                }
                this[t(244)][t(233)].events[t(227)](1e3, (function() {
                    var e = t
                      , r = n[e(268)]();
                    if (r > 0)
                        for (var i = 0; i < n[e(296)][e(322)]; i++)
                            n[e(296)][i][e(350)][e(270)](e(337) + h[e(277)](r));
                    else
                        n[e(312)]()
                }
                ))
            }
        }, {
            key: "onLeftClick",
            value: function() {
                var t = e
                  , n = this;
                if (!this.isScling) {
                    this[t(345)] = !0;
                    var r = null
                      , i = null;
                    if (1 == this[t(256)] ? ((r = this[t(296)][0]).x = -r[t(354)],
                    r[t(272)] = !0,
                    i = this[t(296)][1]) : 2 == this[t(256)] && ((r = this[t(296)][1]).x = -r.width,
                    r[t(272)] = !0,
                    i = this[t(296)][2]),
                    r) {
                        this[t(244)][t(331)][t(280)](r).to({
                            x: this.game[t(354)] / 2 - r[t(354)] / 2
                        }, 300, t(307)).start();
                        var a = this[t(244)].add[t(280)](i).to({
                            x: this[t(244)][t(354)]
                        }, 300, "Linear");
                        a[t(267)](),
                        a[t(250)][t(309)]((function() {
                            var e = t;
                            n[e(345)] = !1,
                            n[e(235)][e(272)] = !0
                        }
                        ))
                    }
                    this.currentTab > 0 && this[t(256)]--,
                    0 == this[t(256)] && (this[t(327)][t(272)] = !1)
                }
            }
        }, {
            key: e(357),
            value: function() {
                var t = e
                  , n = this;
                if (!this[t(345)]) {
                    this[t(345)] = !0;
                    var r = null
                      , i = null;
                    if (0 == this[t(256)] ? (r = this.contents[0],
                    (i = this.contents[1])[t(272)] = !0,
                    i.x = this.game[t(354)]) : 1 == this[t(256)] && (r = this[t(296)][1],
                    (i = this.contents[2])[t(272)] = !0,
                    i.x = this[t(244)][t(354)]),
                    r) {
                        var a = this[t(244)].add[t(280)](r).to({
                            x: -r[t(354)]
                        }, 300, t(307));
                        a.start(),
                        a[t(250)][t(309)]((function() {
                            r[t(272)] = !1
                        }
                        ));
                        var o = this[t(244)][t(331)][t(280)](i).to({
                            x: this[t(244)][t(354)] / 2 - i[t(354)] / 2
                        }, 300, "Linear");
                        o[t(267)](),
                        o[t(250)].addOnce((function() {
                            var e = t;
                            n[e(345)] = !1,
                            n[e(327)][e(272)] = !0
                        }
                        ))
                    }
                    this[t(256)] < this[t(296)][t(322)] - 1 && this.currentTab++,
                    this.currentTab == this.contents[t(322)] - 1 && (this[t(235)][t(272)] = !1)
                }
            }
        }, {
            key: e(324),
            value: function(t, n) {
                var r = e
                  , i = this[r(244)].make.image(228, 300, r(246), r(317));
                if (t) {
                    var a = this[r(244)].make[r(236)](i.width / 2, 42, r(246), t);
                    a[r(241)].setTo(.5),
                    i[r(269)](a)
                }
                if (n) {
                    var o = new (Phaser[r(370)])(this.game,i[r(354)] / 2,i[r(263)] - 20,n,{
                        font: APP_FONT,
                        fill: r(247),
                        fontWeight: 500,
                        fontSize: 20
                    });
                    o[r(241)][r(228)](.5),
                    i[r(269)](o)
                }
                return i
            }
        }, {
            key: e(234),
            value: function() {
                var t = e
                  , n = this.create(0, 0, "newyear", "bg");
                n.x = this.game.width / 2 - n[t(354)] / 2,
                n.y = this[t(244)][t(263)] / 2 - n.height / 2 - 30;
                var r = this[t(244)][t(330)][t(236)](86, 142, t(246), "75");
                r[t(241)][t(228)](.5),
                n[t(269)](r);
                var i = new (Phaser[t(370)])(this[t(244)],377,248,h[t(293)](28e6),{
                    font: APP_FONT,
                    fill: "#e36b14",
                    fontWeight: 700,
                    fontSize: 36
                });
                i[t(241)][t(228)](.5),
                n.addChild(i);
                var a = this[t(324)](t(229), t(298));
                n[t(269)](a),
                a.x = 378 - (2 * a.width + 30) / 2;
                var o = this[t(324)]("chip", t(371));
                o.x = a.x + a.width + 30,
                n[t(269)](o);
                var s = this.game[t(330)][t(236)](697, 43, "newyear", t(225));
                s[t(351)] = !0,
                s[t(329)][t(346)][t(331)](this[t(225)], this),
                n[t(269)](s);
                var c = this.createBuyButton(t(271), t(336), !1);
                c[t(325)] = t(271),
                n[t(269)](c),
                this[t(244)][t(331)].tween(c[t(326)]).to({
                    x: .94,
                    y: .94
                }, 1e3, t(307), !0, 0, -1)[t(344)](!0, 0);
                var u = this[t(244)][t(330)][t(367)](379, 62, t(337) + h[t(277)](this.getDuration()), {
                    font: APP_FONT,
                    fontSize: 18,
                    fill: t(359),
                    fontWeight: t(375)
                });
                return u[t(241)].setTo(.5),
                n[t(269)](u),
                n.durationText = u,
                n
            }
        }, {
            key: e(239),
            value: function(t) {
                var n = e
                  , r = this[n(230)](0, 0, "newyear", "bg");
                r.x = this.game[n(354)] / 2 - r[n(354)] / 2,
                r.y = this[n(244)].height / 2 - r[n(263)] / 2 - 30;
                var i = this[n(244)][n(330)][n(236)](86, 142, "newyear", "90");
                i[n(241)].setTo(.5),
                r[n(269)](i);
                var a = new (Phaser[n(370)])(this[n(244)],377,248,h[n(293)](11e7),{
                    font: APP_FONT,
                    fill: n(362),
                    fontWeight: 700,
                    fontSize: 36
                });
                a[n(241)][n(228)](.5),
                r[n(269)](a);
                var o = this[n(324)]("avatar", n(311));
                r[n(269)](o),
                o.x = 378 - (3 * o[n(354)] + 60) / 2;
                var s = this[n(324)](n(229), n(274));
                s.x = o.x + o[n(354)] + 30,
                r[n(269)](s);
                var c = this[n(324)](n(374), n(283));
                c.x = s.x + s[n(354)] + 30,
                r[n(269)](c);
                var u = this.game[n(330)][n(236)](697, 43, n(246), n(225));
                u[n(351)] = !0,
                u[n(329)].onInputDown[n(331)](this.close, this),
                r.addChild(u);
                var l = this[n(285)](n(306), n(294), t);
                l[n(325)] = n(306),
                r[n(269)](l),
                t || this.game[n(331)][n(280)](l.scale).to({
                    x: .94,
                    y: .94
                }, 1e3, n(307), !0, 0, -1)[n(344)](!0, 0);
                var f = this.game[n(330)][n(367)](379, 62, n(337) + h[n(277)](this[n(268)]()), {
                    font: APP_FONT,
                    fontSize: 18,
                    fill: n(359),
                    fontWeight: n(375)
                });
                return f.anchor.setTo(.5),
                r.addChild(f),
                r[n(350)] = f,
                r
            }
        }, {
            key: e(353),
            value: function(t) {
                var n = e
                  , r = this[n(230)](0, 0, n(246), "bg");
                r.x = this.game[n(354)] / 2 - r[n(354)] / 2,
                r.y = this[n(244)].height / 2 - r.height / 2 - 30;
                var i = this.game[n(330)][n(236)](86, 142, n(246), n(339));
                i.anchor[n(228)](.5),
                r.addChild(i);
                var a = new (Phaser[n(370)])(this[n(244)],377,248,h.formatCoinWithCommas(29e7),{
                    font: APP_FONT,
                    fill: n(362),
                    fontWeight: 700,
                    fontSize: 36
                });
                a[n(241)].setTo(.5),
                r[n(269)](a);
                var o = this[n(324)](n(363), n(321));
                r.addChild(o),
                o.x = 378 - (4 * o.width + 45) / 2;
                var s = this[n(324)](n(366), n(321));
                s.x = o.x + o[n(354)] + 15,
                r[n(269)](s);
                var c = this[n(324)](n(229), n(258));
                c.x = s.x + s[n(354)] + 15,
                r.addChild(c);
                var u = this[n(324)]("chip", n(299));
                u.x = c.x + c[n(354)] + 15,
                r.addChild(u);
                var l = this[n(244)][n(330)][n(236)](697, 43, n(246), n(225));
                l[n(351)] = !0,
                l[n(329)].onInputDown[n(331)](this[n(225)], this),
                r[n(269)](l);
                var f = this[n(285)](n(287), n(360), t);
                f[n(325)] = n(287),
                r[n(269)](f),
                t || this.game[n(331)][n(280)](f[n(326)]).to({
                    x: .94,
                    y: .94
                }, 1e3, "Linear", !0, 0, -1).yoyo(!0, 0);
                var p = this[n(244)][n(330)].text(379, 62, n(337) + h[n(277)](this.getDuration()), {
                    font: APP_FONT,
                    fontSize: 18,
                    fill: n(359),
                    fontWeight: "400"
                });
                return p[n(241)][n(228)](.5),
                r[n(269)](p),
                r[n(350)] = p,
                r
            }
        }, {
            key: e(285),
            value: function(t, n, r) {
                var i = e
                  , a = this
                  , o = new jt(this[i(244)],373,495,i(246),i(332));
                o[i(241)][i(228)](.5),
                r ? o.alpha = .6 : o[i(245)]((function(t) {
                    var e = i;
                    if (a[e(240)](),
                    bt[e(266)][e(231)][e(226)](t[e(325)])) {
                        var n = bt[e(266)][e(231)][e(260)](t[e(325)]);
                        bt[e(266)][e(368)](n)
                    } else
                        bt[e(266)].purchase(t[e(325)], "NewYearPack")
                }
                ));
                var s = new Phaser.Text(this[i(244)],0,0,n,{
                    font: APP_FONT,
                    fill: i(251),
                    fontWeight: 700,
                    fontSize: 34
                });
                return !r && (s[i(347)] = i(314),
                s[i(342)] = 4),
                s[i(270)](bt[i(266)][i(335)][t].price),
                bt.instance[i(231)][i(226)](t) && s[i(270)]("Free"),
                s[i(241)][i(228)](.5),
                o[i(281)] = s,
                o[i(269)](s),
                o
            }
        }, {
            key: "getDuration",
            value: function() {
                var t = e
                  , n = (new Date)[t(264)]() - CyberInstance[t(237)][t(297)]
                  , r = CyberInstance[t(237)][t(290)] + n
                  , i = new Date(r);
                return i[t(273)](23, 55, 0, 0),
                i[t(264)]() - r
            }
        }, {
            key: "open",
            value: function() {
                var t = e;
                !this.visible && (this.isScling = !1,
                this[t(272)] = !0)
            }
        }, {
            key: e(225),
            value: function() {
                var t = e;
                this.visible && (CyberInstance.sound[t(249)](),
                this[t(328)] && this[t(244)][t(233)][t(329)].remove(this[t(328)]),
                this[t(272)] = !1)
            }
        }]) && Mo(n[i(286)], r),
        Object.defineProperty(n, i(286), {
            writable: !1
        }),
        c
    }(_);
    function Ko() {
        var t = ["onComplete", "#ffffff", "defaultClockId", "__proto__", "20590141CalwRO", "4292yExmvk", "currentTab", "apply", "x30", "CLOSE", "get", "5sCLGik", "iterator", "height", "getTime", "remove", "instance", "start", "getDuration", "addChild", "setText", "1_99", "visible", "setHours", "x15", "1790728WwYMAp", "42htkNxd", "formatTimeV2", "bind", "threeBackground", "tween", "buttonText", "object", "2M x 2", "undefined", "createBuyButton", "prototype", "9_99", "4093500vcckJs", "1041uuoMKN", "serverTime", "createView", "state", "formatCoinWithCommas", "4.99$", "configurable", "contents", "loggedTime", "x10", "5M x 2", "Cannot call a class as a function", "591684UtoVvW", "addOverlay", "secondBackground", "player", "defineProperty", "4_99", "Linear", "updateAvatar", "addOnce", "getOwnPropertyDescriptor", "15 ngày", "destroy", "enumerable", "#e7ac2d", "errorMsg", "onLeftClick", "box", "updateGift", "60xaBTIJ", "firstBackground", "30 ngày", "length", "dailyPack", "createBox", "productId", "scale", "leftButton", "durationTimer", "events", "make", "add", "button", "getPrototypeOf", "key", "products", "1.99$", "Còn lại: ", "constructor", "125", "symbol", "construct", "strokeThickness", "setDataAsync", "yoyo", "isScling", "onInputDown", "stroke", "writable", "call", "durationText", "inputEnabled", "setPrototypeOf", "createThree", "width", "PAYMENT_SUCCESS", "coin", "onRightClick", "lang", "#fff", "9.99$", "this hasn't been initialised - super() hasn't been called", "#e36b14", "avatar1", "value", "closeLoadingPopup", "clock", "text", "verifyPayment", "size", "Text", "1.5M", "push", "780008INvgOQ", "chip", "400", "close", "has", "loop", "setTo", "sung", "create", "purchases", "onPurchaseProduct", "time", "createFirst", "rightButton", "image", "connector", "function", "createSecond", "openLoadingPopup", "anchor", "903348DvmxNM", "Super expression must either be null or a function", "game", "click", "newyear", "#e46f4b", "productID", "playButtonSound"];
        return (Ko = function() {
            return t
        }
        )()
    }
    function Jo(t) {
        var e = rs;
        return (Jo = e(280) == typeof Symbol && e(211) == typeof Symbol[e(157)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(280) == typeof Symbol && t[n(325)] === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function Qo(t, e) {
        for (var n = rs, r = 0; r < e.length; r++) {
            var i = e[r];
            i[n(185)] = i.enumerable || !1,
            i.configurable = !0,
            n(226)in i && (i[n(283)] = !0),
            Object[n(271)](t, i[n(168)], i)
        }
    }
    function Zo() {
        var t = rs;
        return Zo = "undefined" != typeof Reflect && Reflect[t(152)] ? Reflect[t(152)].bind() : function(e, n, r) {
            var i = t
              , a = $o(e, n);
            if (a) {
                var o = Object[i(312)](a, n);
                return o.get ? o[i(152)].call(arguments[i(225)] < 3 ? e : r) : o[i(226)]
            }
        }
        ,
        Zo[t(262)](this, arguments)
    }
    function $o(t, e) {
        for (var n = rs; !Object[n(204)][n(302)][n(241)](t, e) && null !== (t = ns(t)); )
            ;
        return t
    }
    function ts(t, e) {
        var n = rs;
        return (ts = Object[n(179)] ? Object[n(179)][n(288)]() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function es(t, e) {
        var n = rs;
        if (e && (Jo(e) === n(296) || "function" == typeof e))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(193));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t)
    }
    function ns(t) {
        var e = rs;
        return (ns = Object[e(179)] ? Object[e(242)][e(288)]() : function(t) {
            var n = e;
            return t[n(223)] || Object[n(242)](t)
        }
        )(t)
    }
    function rs(t, e) {
        var n = is();
        return (rs = function(t, e) {
            return n[t -= 146]
        }
        )(t, e)
    }
    function is() {
        var t = ["group", "object", "inited", "getNewYearDuration", "/atlas/homeScreen/amazingsale.json", "destroyNewYearPack", "closeLoadingPopup", "hasOwnProperty", "500", "noelTxt", "anchor", "openLoadingPopup", "setText", "lang", "enableNewYearPack", "openIAP", "canShowFlashSale", "getOwnPropertyDescriptor", "dailyPack", "atlasJSONHash", "canShowNoelPack", "onScreenReady", "destroy", "481660yAjWUV", "openNoelPackPopup", "clear", "undefined", "screenReady", "onPlayNowClick", "noelsale", "constructor", "enableNoelPack", "cricle", "getOrders", "noelSale", "preload", "handleScreenReady", "get", "controller", "text", "openPromoPopup", "PLAY_WITH_FRIEND", "iterator", "Super expression must either be null or a function", "addIcon", "yoyo", "instance", "/atlas/homeScreen/noelpack.json", "589moLXZe", "126fApTFP", "getDate", "10104ABxHkC", "anchorButton", "key", "playfriendicon", "dailyPackInited", "getMonth", "isP100", "click", "tween", "6204QRQdqs", "/atlas/homeScreen/noelsale.json", "paused", "noelDurationText", "setPrototypeOf", "has", "getFullYear", "playnowicon", "destroyNoelPack", "getDuration", "enumerable", "game", "promoPopupMap", "events", "/atlas/homeScreen/homeScreen.json", "load", "init", "width", "Derived constructors may only return object or undefined", "2370AVtIvw", "set", "9kAUoRN", "amazingsale", "friendPopup", "6zJvMLt", "/atlas/homeScreen/newyear.png", "formatTimeV2", "open", "amazingSale", "prototype", "getPromotion", "setTo", "make", "flashSaleDurationText", "scale", "getTime", "symbol", "icon_flashsale", "connector", "isP50", "container", "visible", "newYearPopup", "topPackY", "5313tNSPJM", "flashSale", "rightMenuView", "PLAY_NOW", "__proto__", "add", "length", "value", "construct", "flashsale", "14003BYSOpm", "dispatch", "size", "8428840fypwOi", "noelpack", "playFriendButton", "/atlas/homeScreen/flashsale.json", "profileView", "/atlas/homeScreen/noelsale.png", "hideContainer", "3povQWN", "Cannot call a class as a function", "call", "getPrototypeOf", "loop", "iapView", "noelCricle", "canShowNewYear", "showContainer", "checkImageKey", "sprite", "openRewardVideoPopup", "noel_icon", "newyear", "playNowButton", "setHours", "/atlas/homeScreen/amazingsale.png", "handleOutOfMoney", "cache", "Signal", "createGamePopup", "/atlas/homeScreen/homeScreen.png", "noelIcon", "apply", "newyar_icon_bg", "showNotEnoughMoneyToPlay", "14641490tanuXC", "newyar_icon_badge", "/atlas/homeScreen/noelpack.png", "sendFindGameRequest", "Linear", "homeScreen", "defineProperty", "createPlayButtons", "isHomeScreenStarted", "background", "/atlas/homeScreen/dailybonus.png", "onPlayWithFriend", "flashsale_text", "openNewYearPackPopup", "enableFlashSale", "function", "time", "create", "writable", "4279717xoDSZd", "bottomMenuView", "image", "height", "bind", "serverTime", "valueOf", "noelPopup", "dailybonus", "noeltxt", "loggedTime"];
        return (is = function() {
            return t
        }
        )()
    }
    !function(t, e) {
        for (var n = rs, r = t(); ; )
            try {
                if (852172 == parseInt(n(163)) / 1 * (-parseInt(n(194)) / 2) + parseInt(n(239)) / 3 * (parseInt(n(318)) / 4) + -parseInt(n(232)) / 5 * (parseInt(n(199)) / 6) + -parseInt(n(219)) / 7 * (-parseInt(n(166)) / 8) + parseInt(n(196)) / 9 * (-parseInt(n(265)) / 10) + -parseInt(n(229)) / 11 * (-parseInt(n(175)) / 12) + parseInt(n(284)) / 13 * (parseInt(n(164)) / 14))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(is);
    const as = function(t) {
        var e = rs;
        !function(t, e) {
            var n = rs;
            if (typeof e !== n(280) && null !== e)
                throw new TypeError(n(158));
            t[n(204)] = Object.create(e && e[n(204)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(271)](t, n(204), {
                writable: !1
            }),
            e && ts(t, e)
        }(u, t);
        var n, r, i, a, o, c = (a = u,
        o = function() {
            var t = rs;
            if (typeof Reflect === t(321) || !Reflect[t(227)])
                return !1;
            if (Reflect[t(227)].sham)
                return !1;
            if (typeof Proxy === t(280))
                return !0;
            try {
                return Boolean[t(204)][t(290)][t(241)](Reflect[t(227)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = rs, n = ns(a);
            if (o) {
                var r = ns(this)[e(325)];
                t = Reflect.construct(n, arguments, r)
            } else
                t = n[e(262)](this, arguments);
            return es(this, t)
        }
        );
        function u() {
            var t = rs;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(rs(240))
            }(this, u),
            c[t(241)](this)
        }
        return n = u,
        i = rs,
        (r = [{
            key: e(191),
            value: function() {
                var t = e;
                Zo(ns(u[t(204)]), t(191), this)[t(241)](this),
                CyberInstance.isHomeScreenStarted || (CyberInstance[t(273)] = !0),
                this[t(316)] || (this.onScreenReady = new (Phaser[t(258)])),
                !this[t(153)] && (this[t(153)] = new Be(this),
                this.onScreenReady.add(this[t(153)][t(151)], this[t(153)])),
                CyberGlobalData.lobbyScreen = "HomeScreen",
                this[t(274)] = this[t(224)][t(286)](0, 0, "homeScreenBG1"),
                this[t(274)][t(192)] = this[t(186)][t(192)],
                this.background.height = this[t(186)][t(287)],
                this[t(215)] = this[t(224)][t(295)](),
                ot.instance[t(148)](),
                this[t(187)] = new Map
            }
        }, {
            key: e(150),
            value: function() {
                var t = e
                  , n = !1;
                if ((!this[t(186)].cache.checkImageKey("homeScreen") || !this[t(186)].cache[t(248)](t(292))) && (this.load[t(314)](t(270), assetUrl + t(260), assetUrl + t(189)),
                this[t(190)].atlasJSONHash(t(292), assetUrl + t(275), assetUrl + "/atlas/homeScreen/dailybonus.json"),
                n = !0),
                "IOS" != FBInstant.getPlatform()) {
                    var r = bt[t(161)][t(205)]();
                    r && (r[t(172)]() ? r.isNoel() ? !this[t(186)][t(257)][t(248)](t(324)) && (this[t(190)][t(314)]("noelsale", assetUrl + t(237), assetUrl + t(176)),
                    n = !0) : !this[t(186)][t(257)][t(248)](t(228)) && (this.load[t(314)](t(228), assetUrl + "/atlas/homeScreen/flashsale.png", assetUrl + t(235)),
                    n = !0) : r[t(214)]() && !this[t(186)][t(257)][t(248)]("amazingsale") && (this[t(190)][t(314)](t(197), assetUrl + t(255), assetUrl + t(299)),
                    n = !0)),
                    this[t(315)]() && !this[t(186)].cache[t(248)](t(233)) && (this.load[t(314)](t(233), assetUrl + t(267), assetUrl + t(162)),
                    n = !0),
                    this[t(246)]() && !this[t(186)][t(257)].checkImageKey(t(252)) && (this[t(190)][t(314)](t(252), assetUrl + t(200), assetUrl + "/atlas/homeScreen/newyear.json"),
                    n = !0)
                }
                n && this.openLoadingPopup()
            }
        }, {
            key: e(282),
            value: function() {
                var t = e;
                if (this[t(301)](),
                this[t(236)] = new Ne(this),
                this[t(244)] = new Xe(this),
                this[t(215)][t(224)](this[t(244)]),
                this[t(221)] = new ui(this),
                this[t(285)] = new ta(this),
                this.createPlayButtons(),
                this[t(256)](),
                this[t(186)][t(281)].events.add(100, (function() {
                    s.preload()
                }
                )),
                bt[t(161)][t(297)]) {
                    this.topPackY = 180,
                    this[t(315)]() && this[t(146)]();
                    var n = bt[t(161)][t(205)]();
                    n && n[t(184)]() > 3e4 && this[t(279)](),
                    this[t(246)]() && (bt[t(161)][t(170)] ? this[t(309)]() : bt[t(161)].sendGetDailyPackInfoRequest())
                }
                this[t(322)] = !0,
                this[t(316)][t(230)]()
            }
        }, {
            key: e(246),
            value: function() {
                var t = e;
                if (CyberInstance[t(213)][t(289)] > 0) {
                    var n = (new Date)[t(210)]() - CyberInstance[t(213)][t(294)]
                      , r = CyberInstance.connector[t(289)] + n
                      , i = new Date(r)
                      , a = i[t(165)]()
                      , o = i.getMonth();
                    if (11 == o && a >= 29)
                        return !(this.getNewYearDuration() < 3e4);
                    if (0 == o && a <= 3)
                        return !(this[t(298)]() < 3e4);
                    if (0 == o && a >= 20 && a <= 30)
                        return !(this[t(298)]() < 3e4)
                }
                return !1
            }
        }, {
            key: "getNewYearDuration",
            value: function() {
                var t = e
                  , n = (new Date)[t(210)]() - CyberInstance[t(213)][t(294)]
                  , r = CyberInstance[t(213)][t(289)] + n
                  , i = new Date(r);
                return i[t(254)](23, 55, 0, 0),
                i[t(210)]() - r
            }
        }, {
            key: e(309),
            value: function() {
                var t = e
                  , n = this;
                if (3 != bt[t(161)][t(313)].size) {
                    var r = new jt(this[t(186)],64,this[t(218)],t(292),t(263));
                    r[t(305)][t(206)](.5),
                    r.click((function() {
                        n[t(278)]()
                    }
                    )),
                    this[t(215)][t(224)](r);
                    var i = this[t(186)][t(207)][t(249)](118, this.topPackY - 15, "dailybonus", t(266));
                    i.anchor[t(206)](.5),
                    this[t(215)][t(224)](i),
                    this[t(218)] += 130,
                    CyberGlobalData[t(311)] && !bt.instance[t(205)]() && (this[t(278)](),
                    CyberGlobalData[t(311)] = !1)
                }
            }
        }, {
            key: e(278),
            value: function() {
                var t = e;
                CyberInstance[t(177)] && (CyberInstance[t(177)] = !1),
                3 != bt[t(161)][t(313)][t(231)] && this.canShowNewYear() && (this[t(217)] ? this[t(217)][t(202)]() : this[t(217)] = new qo(this[t(186)]))
            }
        }, {
            key: e(300),
            value: function() {
                var t = e;
                this[t(217)] && (this[t(217)][t(317)](),
                this[t(217)] = null)
            }
        }, {
            key: "canShowNoelPack",
            value: function() {
                var t = e
                  , n = new Date;
                if (noel_1_99 == n[t(181)]() && noel_5_99 == n.getFullYear())
                    return !1;
                var r = n[t(165)]();
                return 11 == n[t(171)]() && r >= 20 && r < 26
            }
        }, {
            key: e(146),
            value: function() {
                var t = e
                  , n = this
                  , r = this[t(186)][t(207)][t(249)](64, this[t(218)], "dailybonus", t(147));
                r[t(305)][t(206)](.5),
                this[t(215)].add(r);
                var i = new jt(this[t(186)],64,this[t(218)],t(292),t(251));
                i[t(305)][t(206)](.5),
                i.click((function() {
                    n[t(319)]()
                }
                )),
                this[t(215)][t(224)](i);
                var a = this[t(186)][t(207)].sprite(64, this[t(218)] + 40, t(292), t(293));
                a[t(305)][t(206)](.5),
                this.container[t(224)](a),
                this.noelDurationText = this[t(186)][t(224)][t(154)](64, this[t(218)] + 50, h[t(201)](this[t(184)]()), {
                    font: APP_FONT,
                    fontSize: 16,
                    fill: "#f5edbb",
                    fontWeight: t(303)
                }),
                this[t(178)][t(305)].setTo(.5, 0),
                this[t(215)].add(this[t(178)]),
                this[t(186)].time[t(188)][t(243)](1e3, (function() {
                    var e = t
                      , o = n[e(184)]();
                    o > 0 ? n[e(178)][e(307)](h[e(201)](o)) : (i.visible = !1,
                    a[e(216)] = !1,
                    r[e(216)] = !1,
                    n[e(178)][e(216)] = !1)
                }
                )),
                this[t(178)][t(245)] = r,
                this[t(178)][t(261)] = i,
                this[t(178)][t(304)] = a,
                setTimeout((function() {
                    var e = t;
                    n.game.add.tween(i[e(209)]).to({
                        x: .9,
                        y: .9
                    }, 1e3, e(269), !0, 0, -1)[e(160)](!0, 250)
                }
                ), 300),
                this[t(218)] += 130,
                CyberGlobalData[t(311)] && !bt.instance[t(205)]() && (this[t(319)](),
                CyberGlobalData[t(311)] = !1)
            }
        }, {
            key: e(183),
            value: function() {
                var t = e;
                this[t(291)] && (this[t(291)][t(317)](),
                this.noelPopup = null)
            }
        }, {
            key: e(319),
            value: function() {
                var t = e;
                CyberInstance.paused && (CyberInstance[t(177)] = !1),
                this[t(315)]() && (this[t(291)] ? this.noelPopup[t(202)]() : this[t(291)] = new jo(this[t(186)]))
            }
        }, {
            key: "getDuration",
            value: function() {
                var t = e
                  , n = new Date
                  , r = n[t(181)]()
                  , i = n[t(171)]();
                return new Date(r,i,25,23,59,59)[t(210)]() - n.getTime()
            }
        }, {
            key: "enableFlashSale",
            value: function() {
                var t = e
                  , n = this
                  , r = new jt(this[t(186)],64,this[t(218)],t(292),t(212));
                r.anchor.setTo(.5),
                r[t(173)]((function() {
                    n[t(155)]()
                }
                ));
                var i = this[t(186)][t(207)][t(249)](26, this[t(218)] + 13, t(292), t(277));
                this[t(215)][t(224)](r),
                this[t(215)][t(224)](i);
                var a = bt[t(161)][t(205)]();
                this[t(208)] = this[t(186)][t(224)].text(i.x + i.width / 2, this[t(218)] + 35, h[t(201)](a[t(184)]()), {
                    font: APP_FONT,
                    fontSize: 16,
                    fill: "#f5edbb",
                    fontWeight: t(303)
                }),
                this[t(208)][t(305)][t(206)](.5, 0),
                this[t(215)].add(this[t(208)]),
                this[t(186)][t(281)][t(188)][t(243)](1e3, (function() {
                    var e = t
                      , a = bt[e(161)][e(205)]().getDuration();
                    a > 0 ? n[e(208)][e(307)](h.formatTimeV2(a)) : (r[e(216)] = !1,
                    i[e(216)] = !1,
                    n[e(208)][e(216)] = !1)
                }
                )),
                this.game[t(224)][t(174)](r.scale).to({
                    x: .9,
                    y: .9
                }, 1e3, t(269), !0, 0, -1)[t(160)](!0, 250),
                CyberGlobalData.canShowFlashSale && (this[t(155)](),
                CyberGlobalData[t(311)] = !1),
                this[t(218)] += 110
            }
        }, {
            key: e(155),
            value: function() {
                var t = e
                  , n = bt[t(161)][t(205)]();
                n && n[t(172)]() ? n.isNoel() ? this[t(187)].has(t(149)) ? this[t(187)].get(t(149))[t(202)]() : this[t(187)][t(195)]("noelSale", new Lo(this[t(186)])) : this[t(187)][t(180)]("flashSale") ? this[t(187)].get(t(220))[t(202)]() : this[t(187)].set(t(220), new ho(this[t(186)])) : n && n[t(214)]() && (this[t(187)][t(180)](t(203)) ? this[t(187)][t(152)](t(203))[t(202)]() : this[t(187)][t(195)]("amazingSale", new go(this[t(186)])))
            }
        }, {
            key: e(323),
            value: function() {
                var t = e;
                CyberInstance[t(177)] && (CyberInstance.paused = !1),
                ie.instance.canPlay() ? (this[t(306)]({
                    disconnectTime: 15e3
                }),
                ie.instance[t(268)]()) : M[t(264)]()
            }
        }, {
            key: e(276),
            value: function() {
                var t = e;
                CyberInstance[t(177)] && (CyberInstance[t(177)] = !1),
                this.createGamePopup ? this[t(259)][t(202)]() : this.createGamePopup = new no(this.game,{
                    friendMode: !0
                })
            }
        }, {
            key: e(310),
            value: function() {
                this[e(250)]()
            }
        }, {
            key: e(250),
            value: function() {
                this.screenReady && this.bottomMenuView.openRewardVideoPopup()
            }
        }, {
            key: e(238),
            value: function() {
                var t = e;
                this[t(215)][t(216)] = !1
            }
        }, {
            key: e(247),
            value: function() {
                var t = e;
                this[t(215)][t(216)] = !0
            }
        }, {
            key: e(301),
            value: function() {
                var t = e;
                Zo(ns(u[t(204)]), t(301), this)[t(241)](this),
                this[t(221)] && this[t(221)].friendPopup && this.rightMenuView[t(198)].closeLoadingPopup()
            }
        }, {
            key: e(272),
            value: function() {
                var t = e;
                this[t(253)] = new la(this.game,0,0),
                this[t(253)].addText(CyberInstance.lang[t(222)]),
                this.playNowButton[t(159)](t(182)),
                this[t(215)][t(224)](this[t(253)]),
                this.playFriendButton = new la(this[t(186)],0,0),
                this.playFriendButton.addText(CyberInstance[t(308)][t(156)]),
                this[t(234)].addIcon(t(169)),
                this[t(215)][t(224)](this.playFriendButton),
                this[t(253)].y = this[t(186)][t(287)] / 2 - this[t(253)].height / 2,
                this.playFriendButton.y = this[t(253)].y,
                this[t(253)].x = this.game[t(192)] / 2 - (2 * this[t(253)][t(192)] + 50) / 2,
                this[t(234)].x = this.playNowButton.x + this[t(253)].width + 50,
                this.playNowButton[t(167)](),
                this[t(234)].anchorButton(),
                this[t(253)][t(173)](this[t(323)], this),
                this[t(234)].click(this[t(276)], this)
            }
        }, {
            key: "shutdown",
            value: function() {
                var t = e;
                Zo(ns(u.prototype), "shutdown", this)[t(241)](this),
                this[t(236)][t(317)](),
                this[t(221)][t(317)](),
                this[t(187)][t(320)](),
                this[t(259)] = null,
                this.iapView = null,
                this[t(236)] = null,
                this[t(221)] = null,
                this[t(285)] = null,
                this[t(253)] = null,
                this[t(234)],
                this[t(215)] = null,
                this[t(274)] = null,
                this[t(291)] = null,
                this.newYearPopup = null
            }
        }]) && Qo(n.prototype, r),
        Object.defineProperty(n, i(204), {
            writable: !1
        }),
        u
    }(pe);
    function os(t, e) {
        var n = ps();
        return (os = function(t, e) {
            return n[t -= 139]
        }
        )(t, e)
    }
    function ss(t) {
        var e = os;
        return (ss = e(160) == typeof Symbol && e(178) == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(160) == typeof Symbol && t[n(244)] === Symbol && t !== Symbol.prototype ? n(178) : typeof t
        }
        )(t)
    }
    function cs(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function us(t, e) {
        for (var n = os, r = 0; r < e[n(172)]; r++) {
            var i = e[r];
            i.enumerable = i[n(195)] || !1,
            i[n(173)] = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i[n(191)], i)
        }
    }
    function hs() {
        var t = os;
        return hs = typeof Reflect !== t(157) && Reflect[t(204)] ? Reflect.get[t(155)]() : function(e, n, r) {
            var i = t
              , a = ls(e, n);
            if (a) {
                var o = Object[i(212)](a, n);
                return o.get ? o[i(204)][i(198)](arguments.length < 3 ? e : r) : o[i(239)]
            }
        }
        ,
        hs[t(187)](this, arguments)
    }
    function ls(t, e) {
        for (var n = os; !Object[n(163)][n(225)].call(t, e) && null !== (t = ds(t)); )
            ;
        return t
    }
    function fs(t, e) {
        var n = os;
        return (fs = Object[n(177)] ? Object[n(177)].bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function ps() {
        var t = ["anchor", "__proto__", "generateTexture", "image", "object", "defineProperty", "centerX", "create", "remove", "startGameAsync", "subscribeBotAsync", "height", "396204gWPuFH", "17096963uDwlSG", "/atlas/homeScreen/homeScreen.json", "bind", "connector", "undefined", "getPrototypeOf", "preloadBg", "function", "logged", "overlayTexture", "prototype", "catch", "avatar", "454yGChJZ", "variableUpdated", "preload", "width", "game", "sound", "length", "configurable", "487040ODGPHl", "construct", "isGameAssetPreloaded", "setPrototypeOf", "symbol", "desc", "getPhoto", "addOnce", "/atlas/homeScreen/dailybonus.json", "world", "enableTestMode", "11810UUojBl", "3WABCKG", "apply", "player", "onFileComplete", "onDestroy", "key", "destroy", "events", "failedCount", "enumerable", "lang", "start", "call", "time", "graphics", "homeScreenBG1", "authenticateTimer", "atlasJSONHash", "get", "quit", "state", "3113DQqkHU", "valueOf", "loadSounds", "HomeScreen", "percent", "getOwnPropertyDescriptor", "load", "then", "DisconnectScreen", "setDefaultLanguage", "instance", "preloadIcon", "init", "angle", "endFill", "/atlas/homeScreen/dailybonus.png", "setTo", "18CIWJHP", "hasOwnProperty", "canSubscribeBotAsync", "this hasn't been initialised - super() hasn't been called", "LOADING_DATA", "14sgpZir", "Derived constructors may only return object or undefined", "loop", "CONNECTING_TO_SERVER", "300160XawHTc", "log", "setText", "187WWQATG", "adEnabled", "text", "value", "make", "1196232tEJcjL", "add", "7sJFGEI", "constructor", "centerY", "1902TzRKpT"];
        return (ps = function() {
            return t
        }
        )()
    }
    function ys(t, e) {
        var n = os;
        if (e && (ss(e) === n(144) || typeof e === n(160)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(230));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(os(227));
            return t
        }(t)
    }
    function ds(t) {
        var e = os;
        return (ds = Object.setPrototypeOf ? Object[e(158)][e(155)]() : function(t) {
            var n = e;
            return t[n(141)] || Object[n(158)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = os, r = t(); ; )
            try {
                if (799560 == parseInt(n(207)) / 1 * (parseInt(n(166)) / 2) + parseInt(n(186)) / 3 * (-parseInt(n(174)) / 4) + -parseInt(n(185)) / 5 * (parseInt(n(139)) / 6) + parseInt(n(243)) / 7 * (parseInt(n(241)) / 8) + parseInt(n(224)) / 9 * (parseInt(n(233)) / 10) + -parseInt(n(236)) / 11 * (parseInt(n(152)) / 12) + parseInt(n(153)) / 13 * (parseInt(n(229)) / 14))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(ps);
    const vs = function(t) {
        var e = os;
        !function(t, e) {
            var n = os;
            if (typeof e !== n(160) && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t[n(163)] = Object.create(e && e[n(163)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(145)](t, n(163), {
                writable: !1
            }),
            e && fs(t, e)
        }(u, t);
        var n, r, i, a, o, c = (a = u,
        o = function() {
            var t = os;
            if ("undefined" == typeof Reflect || !Reflect[t(175)])
                return !1;
            if (Reflect[t(175)].sham)
                return !1;
            if (typeof Proxy === t(160))
                return !0;
            try {
                return Boolean[t(163)][t(208)].call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = os, n = ds(a);
            if (o) {
                var r = ds(this).constructor;
                t = Reflect[e(175)](n, arguments, r)
            } else
                t = n[e(187)](this, arguments);
            return ys(this, t)
        }
        );
        function u() {
            var t = os;
            return cs(this, u),
            c[t(187)](this, arguments)
        }
        return n = u,
        i = os,
        (r = [{
            key: e(219),
            value: function() {
                var t = e;
                hs(ds(u[t(163)]), t(219), this)[t(198)](this),
                this.layout(),
                this.startGameAsync(),
                CyberInstance[t(216)](gameLocale)
            }
        }, {
            key: "preload",
            value: function() {
                var t = e
                  , n = this
                  , r = this[t(242)][t(143)](0, 0, t(201));
                r[t(169)] = this[t(170)][t(169)],
                r.height = this[t(170)][t(151)],
                this[t(218)] = this[t(242)][t(143)](this[t(170)][t(183)].centerX, this[t(170)].world[t(245)], t(159)),
                this[t(218)][t(140)].setTo(.5),
                this[t(179)] = this[t(170)][t(242)][t(238)](this[t(170)][t(183)].centerX, this[t(170)][t(183)].centerY + 80, CyberInstance[t(196)][t(228)], {
                    fontSize: 18,
                    fill: "#ffffff",
                    fontWeight: "500"
                }),
                this.desc[t(140)][t(223)](.5),
                this[t(211)] = this.game[t(242)][t(238)](this[t(170)][t(183)][t(146)], this[t(170)][t(183)][t(245)] + 2, "0%", {
                    fontSize: 16,
                    fill: "#ffffff",
                    fontWeight: "500"
                }),
                this[t(211)][t(140)][t(223)](.5);
                var i = this[t(170)][t(199)][t(147)](!0);
                i[t(231)](30, (function() {
                    var e = t;
                    n[e(218)][e(220)] += 10
                }
                )),
                i[t(197)](),
                this[t(213)][t(189)][t(242)](this[t(189)], this),
                this[t(213)][t(203)]("homeScreen", assetUrl + "/atlas/homeScreen/homeScreen.png", assetUrl + t(154)),
                this.load[t(203)]("dailybonus", assetUrl + t(222), assetUrl + t(182));
                var a = game[t(240)][t(200)](0, 0);
                a.beginFill(0),
                a.drawRect(0, 0, this.game[t(169)], this[t(170)][t(151)]),
                a[t(221)](),
                CyberGlobalData[t(162)] = a[t(142)](),
                a[t(192)]()
            }
        }, {
            key: "create",
            value: function() {
                var t = e
                  , n = this;
                this[t(179)][t(235)](CyberInstance.lang[t(232)]),
                this[t(213)][t(189)][t(148)](this[t(189)], this),
                CyberInstance[t(237)] ? Mt[t(217)][t(219)]() : Mt[t(217)][t(184)](),
                this[t(176)] = !1,
                this.authenticateTimer = this[t(170)].time[t(193)][t(231)](30, (function() {
                    var e = t;
                    if (CyberInstance[e(156)][e(161)] && CyberInstance.connector[e(167)] && globalStartGameAsyncResolved)
                        n[e(199)][e(193)][e(148)](n[e(202)]),
                        n[e(197)]();
                    else {
                        if (1 === CyberInstance[e(156)].maintenance)
                            return n.time[e(193)][e(148)](n[e(202)]),
                            void n[e(206)][e(197)](e(215), !0, !1);
                        !n[e(176)] && (n[e(176)] = !0,
                        s[e(168)]())
                    }
                }
                ))
            }
        }, {
            key: e(197),
            value: function() {
                var t = e;
                CyberInstance[t(171)][t(209)](),
                gameLocaleInited ? game.state.start("HomeScreen", !0, !1) : new ln(this[t(170)])[t(190)][t(181)]((function() {
                    var e = t;
                    game[e(206)][e(197)](e(210), !0, !1)
                }
                ))
            }
        }, {
            key: e(189),
            value: function(t, n, r) {
                var i = e;
                r ? this[i(211)][i(235)](t + "%") : console[i(234)](n)
            }
        }, {
            key: "startGameAsync",
            value: function() {
                var t = e
                  , n = this;
                globalStartGameAsyncResolved || (5 === this[t(194)] && FBInstant[t(205)](),
                FBInstant[t(149)]()[t(214)]((function() {
                    var e = t;
                    if (!globalStartGameAsyncResolved) {
                        globalStartGameAsyncResolved = !0,
                        clearInterval(globalProgressLoop);
                        var n = FBInstant[e(188)][e(180)]();
                        n && (CyberInstance[e(165)] = n),
                        !CyberInstance.devEnabled && FBInstant.player[e(226)]().then((function() {
                            var t = e;
                            FBInstant[t(188)][t(150)]()
                        }
                        ))
                    }
                }
                ))[t(164)]((function(e) {
                    var r = t;
                    console.log(e),
                    n[r(194)] ? n[r(194)]++ : n[r(194)] = 1,
                    setTimeout((function() {
                        n[r(149)]()
                    }
                    ), 500)
                }
                )))
            }
        }]) && us(n[i(163)], r),
        Object[i(145)](n, i(163), {
            writable: !1
        }),
        u
    }(pe);
    var bs = ms;
    function ms(t, e) {
        var n = ws();
        return (ms = function(t, e) {
            return n[t -= 172]
        }
        )(t, e)
    }
    function gs(t) {
        return (gs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            var e = ms;
            return t && e(201) == typeof Symbol && t[e(242)] === Symbol && t !== Symbol[e(226)] ? e(185) : typeof t
        }
        )(t)
    }
    function ws() {
        var t = ["background", "6OYSUZl", "8234480hKAuhK", "constructor", "#f59eac", "width", "setTextBounds", "defineProperty", "2218334JhaJGJ", "THONG_BAO", "Cannot call a class as a function", "addOnce", "call", "424351yMffCc", "key", "connector", "start", "add", "163287zOZaWq", "create", "bind", "lang", "value", "symbol", "HomeScreen", "stop", "enumerable", "Super expression must either be null or a function", "setTo", "text", "7527TSZwmv", "configurable", "homeScreenBG1", "showMaintenance", "maintenance", "RECONNECTING", "356cRGQmN", "quit", "valueOf", "function", "center", "loop", "preloadBg", "#ffffff", "destroy", "toUpperCase", "inputEnabled", "angle", "1120735hUZfAE", "State", "game", "preloadIcon", "sham", "5473100pGjbnk", "normal", "undefined", "world", "writable", "object", "512LptHLp", "connect", "500", "centerY", "time", "prototype", "centerX", "construct", "paused", "height", "#ebdac0", "maintenanceMsg", "logged", "setPrototypeOf", "anchor", "image", "icon_close", "getPrototypeOf"];
        return (ws = function() {
            return t
        }
        )()
    }
    function Is(t, e) {
        for (var n = ms, r = 0; r < e.length; r++) {
            var i = e[r];
            i[n(188)] = i[n(188)] || !1,
            i[n(193)] = !0,
            n(184)in i && (i[n(219)] = !0),
            Object[n(246)](t, i[n(176)], i)
        }
    }
    function Ss(t, e) {
        var n = ms;
        return (Ss = Object[n(234)] ? Object.setPrototypeOf[n(182)]() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function Os(t, e) {
        var n = ms;
        if (e && (gs(e) === n(220) || typeof e === n(201)))
            return e;
        if (void 0 !== e)
            throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t)
    }
    function ks(t) {
        var e = ms;
        return (ks = Object.setPrototypeOf ? Object[e(238)][e(182)]() : function(t) {
            var n = e;
            return t.__proto__ || Object[n(238)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = ms, r = t(); ; )
            try {
                if (684312 == parseInt(n(175)) / 1 + -parseInt(n(247)) / 2 + -parseInt(n(192)) / 3 * (parseInt(n(198)) / 4) + parseInt(n(215)) / 5 + parseInt(n(240)) / 6 * (parseInt(n(210)) / 7) + -parseInt(n(221)) / 8 * (-parseInt(n(180)) / 9) + -parseInt(n(241)) / 10)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(ws);
    const Cs = function(t) {
        var e = ms;
        !function(t, e) {
            var n = ms;
            if ("function" != typeof e && null !== e)
                throw new TypeError(n(189));
            t.prototype = Object[n(181)](e && e[n(226)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(246)](t, n(226), {
                writable: !1
            }),
            e && Ss(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = ms;
            if (typeof Reflect === t(217) || !Reflect[t(228)])
                return !1;
            if (Reflect[t(228)][t(214)])
                return !1;
            if (typeof Proxy === t(201))
                return !0;
            try {
                return Boolean[t(226)][t(200)][t(174)](Reflect[t(228)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = ms, n = ks(a);
            if (o) {
                var r = ks(this)[e(242)];
                t = Reflect[e(228)](n, arguments, r)
            } else
                t = n.apply(this, arguments);
            return Os(this, t)
        }
        );
        function c() {
            var t = ms;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(ms(172))
            }(this, c),
            s[t(174)](this)
        }
        return n = c,
        i = ms,
        (r = [{
            key: e(181),
            value: function() {
                var t = e;
                this.background = this[t(179)].image(0, 0, t(194)),
                this.background.width = this[t(212)][t(244)],
                this[t(239)].height = this[t(212)][t(230)],
                1 === CyberInstance[t(177)][t(196)] ? this.showMaintenance(CyberInstance[t(177)][t(232)]) : new M(this[t(212)],{
                    text: CyberInstance[t(183)].CONNECTION_LOST,
                    buttonText: CyberInstance[t(183)].CONNECT,
                    hideCloseButton: !0,
                    callback: this.connect,
                    context: this
                })
            }
        }, {
            key: e(222),
            value: function() {
                var t = e;
                CyberInstance[t(229)] = !1,
                CyberInstance[t(177)][t(222)](),
                this[t(213)] = this.add[t(236)](this[t(212)].world[t(227)], this[t(212)][t(218)][t(224)], t(204)),
                this[t(213)][t(235)][t(190)](.5),
                this[t(212)][t(179)][t(191)](this[t(212)].world.centerX, this[t(212)][t(218)][t(224)] + 80, CyberInstance[t(183)][t(197)], {
                    fontSize: 18,
                    fill: t(205),
                    fontWeight: t(223)
                })[t(235)].setTo(.5);
                var n = this[t(212)][t(225)][t(181)](!0);
                n[t(203)](30, (function() {
                    var e = t;
                    this[e(213)][e(209)] += 10,
                    CyberInstance[e(177)][e(233)] && CyberInstance[e(177)].variableUpdated && (n[e(187)](),
                    n[e(206)](),
                    this[e(212)].state[e(178)](e(186), !0, !1))
                }
                ), this),
                n[t(178)]()
            }
        }, {
            key: e(195),
            value: function(t) {
                var n = e;
                this[n(212)][n(179)].text(this.game.width / 2, 30, CyberInstance[n(183)][n(248)][n(207)](), {
                    font: APP_FONT,
                    fontSize: 40,
                    fill: n(231),
                    fontWeight: "bold"
                })[n(235)][n(190)](.5, 0),
                this.game[n(179)][n(191)](100, 100, t, {
                    font: APP_FONT,
                    fontSize: 24,
                    fill: n(243),
                    fontWeight: n(216),
                    wordWrap: !0,
                    wordWrapWidth: this[n(212)][n(244)] - 200,
                    boundsAlignH: n(202),
                    boundsAlignV: "middle"
                })[n(245)](0, 0, this[n(212)][n(244)] - 200, this[n(212)][n(230)] - 200);
                var r = this[n(212)][n(179)].sprite(0, 0, "homeScreen", n(237));
                r.x = this[n(239)][n(244)] - r[n(244)] - 15,
                r.y = 15,
                r[n(208)] = !0,
                r.events.onInputDown[n(173)]((function() {
                    FBInstant[n(199)]()
                }
                ), this)
            }
        }]) && Is(n[i(226)], r),
        Object[i(246)](n, "prototype", {
            writable: !1
        }),
        c
    }(Phaser[bs(211)]);
    function Ps(t) {
        var e = Ts;
        return (Ps = "function" == typeof Symbol && "symbol" == typeof Symbol[e(545)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && "function" == typeof Symbol && t[n(533)] === Symbol && t !== Symbol[n(514)] ? n(528) : typeof t
        }
        )(t)
    }
    function Ts(t, e) {
        var n = _s();
        return (Ts = function(t, e) {
            return n[t -= 497]
        }
        )(t, e)
    }
    function xs(t, e) {
        for (var n = Ts, r = 0; r < e[n(508)]; r++) {
            var i = e[r];
            i[n(503)] = i.enumerable || !1,
            i[n(547)] = !0,
            n(537)in i && (i.writable = !0),
            Object.defineProperty(t, i[n(512)], i)
        }
    }
    function _s() {
        var t = ["anchor", "revive", "bitmapData", "9196944LbTaWa", "defineProperty", "create", "Cannot call a class as a function", "avatarSize", "applyTexture", "8106104vxGbDQ", "9yNYknb", "symbol", "22077IPuTNo", "rank", "leaderboardScreen", "setPrototypeOf", "constructor", "guserid", "__proto__", "homeScreen", "value", "image", "cache", "setTo", "4393270CQzScR", "game", "18993216mOcdds", "formatCoinWithCommas", "iterator", "text", "configurable", "c48", "this hasn't been initialised - super() hasn't been called", "width", "canvas", "500", "getPrototypeOf", "object", "height", "Rectangle", "call", "add", "65vmuERW", "656OSHlwK", "Super expression must either be null or a function", "valueOf", "alphaMask", "score", "updateAvatar", "load", "#fbafb3", "coin_icon", "name", "12bYEBQH", "42MqVtpT", "construct", "no_avatar", "Derived constructors may only return object or undefined", "make", "10DbKNop", "enumerable", "row", "kill", "#f5c78a", "loadTexture", "length", "27999ZeNDCB", "callAll", "9257332LFlsVh", "key", "checkImageKey", "prototype", "bind", "avatar"];
        return (_s = function() {
            return t
        }
        )()
    }
    function js(t, e) {
        var n = Ts;
        return (js = Object.setPrototypeOf ? Object[n(532)][n(515)]() : function(t, e) {
            return t[n(535)] = e,
            t
        }
        )(t, e)
    }
    function Rs(t, e) {
        var n = Ts;
        if (e && (Ps(e) === n(554) || "function" == typeof e))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(500));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(Ts(549));
            return t
        }(t)
    }
    function Es(t) {
        var e = Ts;
        return (Es = Object[e(532)] ? Object[e(553)].bind() : function(t) {
            var n = e;
            return t[n(535)] || Object[n(553)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = Ts, r = t(); ; )
            try {
                if (908076 == -parseInt(n(509)) / 1 * (-parseInt(n(497)) / 2) + -parseInt(n(529)) / 3 * (parseInt(n(560)) / 4) + parseInt(n(541)) / 5 * (parseInt(n(570)) / 6) + -parseInt(n(511)) / 7 + -parseInt(n(526)) / 8 * (parseInt(n(527)) / 9) + parseInt(n(502)) / 10 * (-parseInt(n(543)) / 11) + parseInt(n(520)) / 12 * (parseInt(n(559)) / 13))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(_s);
    var Bs = function(t) {
        var e = Ts;
        !function(t, e) {
            var n = Ts;
            if ("function" != typeof e && null !== e)
                throw new TypeError(n(561));
            t[n(514)] = Object[n(522)](e && e[n(514)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(521)](t, n(514), {
                writable: !1
            }),
            e && js(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = Ts;
            if ("undefined" == typeof Reflect || !Reflect[t(498)])
                return !1;
            if (Reflect[t(498)].sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean[t(514)][t(562)][t(557)](Reflect[t(498)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Es(a);
            if (o) {
                var n = Es(this).constructor;
                t = Reflect.construct(e, arguments, n)
            } else
                t = e.apply(this, arguments);
            return Rs(this, t)
        }
        );
        function c(t, e, n, r) {
            var i, a = Ts;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Ts(523))
            }
            )(this, c),
            (i = s[a(557)](this, t, 0, 0))[a(569)] = "a" + e[a(534)];
            var o, u = i.create(0, 0, a(531), a(504));
            if (u.x = n[a(550)] / 2 - u[a(550)] / 2 - 3,
            (o = e[a(530)] > 3 ? i[a(542)][a(558)][a(546)](60, i[a(555)] / 2, e.rank, {
                font: APP_FONT,
                fontSize: 28,
                fill: "#faa8b6",
                fontWeight: a(552)
            }) : i.create(60, u[a(555)] / 2 - 2, a(531), "r" + e[a(530)]))[a(517)][a(540)](.5),
            i[a(558)](o),
            i[a(516)] = i.create(114, 0, a(536), a(499)),
            i.avatar[a(550)] = i[a(524)],
            i[a(516)][a(555)] = i[a(524)],
            i[a(516)].y = u[a(555)] / 2 - i[a(516)][a(555)] / 2 - 2,
            i[a(542)][a(539)][a(513)](i.name) ? i.applyTexture(i[a(569)]) : i.game.load[a(538)](i[a(569)], e[a(516)]),
            e[a(530)] >= 1 && e[a(530)] <= 3) {
                var h = i[a(522)](0, i.avatar.y, "leaderboardScreen", "ar" + e[a(530)]);
                h.x = i[a(516)].x + i.avatarSize / 2 - h[a(550)] / 2
            }
            var l = i[a(542)][a(558)][a(546)](i.avatar.x + i[a(524)] + 20, u.height / 2 + 2, e.name, {
                font: APP_FONT,
                fontSize: 22,
                fill: a(567),
                fontWeight: 400
            });
            l[a(517)][a(540)](0, .5),
            i[a(558)](l);
            var f = i[a(522)](2, 0, a(531), r);
            f.x = u.x + u[a(550)] - f[a(550)] - 20,
            f.y = u[a(555)] / 2 - f[a(555)] / 2,
            r == a(568) && (f.y = f.y - 2);
            var p = i.game[a(558)].text(0, i[a(555)] / 2, CyberHelper[a(544)](e[a(564)]), {
                font: APP_FONT,
                fontSize: 22,
                fill: a(506),
                fontWeight: 400
            });
            return p[a(517)][a(540)](0, .5),
            i.add(p),
            p.x = f.x - 15 - p[a(551)].width,
            i
        }
        return n = c,
        i = Ts,
        (r = [{
            key: e(565),
            value: function(t) {
                var n = e;
                this[n(516)][n(507)](t),
                this[n(516)][n(550)] = this[n(524)],
                this[n(516)][n(555)] = this[n(524)]
            }
        }, {
            key: e(525),
            value: function(t) {
                var n = e;
                try {
                    var r = new (Phaser[n(556)])(0,0,this[n(524)],this[n(524)])
                      , i = game[n(501)][n(538)](0, 0, n(531), n(548));
                    i[n(550)] = this[n(524)],
                    i[n(555)] = this[n(524)];
                    var a = game[n(501)][n(519)]();
                    a[n(566)](i),
                    i.destroy();
                    var o = this[n(542)][n(501)].bitmapData(this[n(524)], this[n(524)]);
                    o[n(563)](t, a, r),
                    this[n(516)][n(507)](o)
                } catch (e) {
                    this.avatar[n(507)](t)
                }
                this[n(516)][n(550)] = this.avatarSize,
                this[n(516)][n(555)] = this[n(524)]
            }
        }, {
            key: e(505),
            value: function() {
                var t = e;
                this[t(510)](t(505))
            }
        }, {
            key: e(518),
            value: function() {
                this.callAll("revive")
            }
        }, {
            key: e(555),
            get: function() {
                return 80
            }
        }, {
            key: e(524),
            get: function() {
                return 48
            }
        }]) && xs(n[i(514)], r),
        Object[i(521)](n, i(514), {
            writable: !1
        }),
        c
    }(Phaser.Group);
    function As(t) {
        var e = zs;
        return (As = e(490) == typeof Symbol && e(537) == typeof Symbol[e(584)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(490) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(618)] ? n(537) : typeof t
        }
        )(t)
    }
    function Ds(t, e) {
        for (var n = zs, r = 0; r < e.length; r++) {
            var i = e[r];
            i[n(491)] = i[n(491)] || !1,
            i[n(474)] = !0,
            "value"in i && (i.writable = !0),
            Object[n(566)](t, i[n(563)], i)
        }
    }
    function Fs() {
        var t = zs;
        return Fs = typeof Reflect !== t(594) && Reflect[t(471)] ? Reflect[t(471)][t(502)]() : function(e, n, r) {
            var i = t
              , a = Ns(e, n);
            if (a) {
                var o = Object[i(574)](a, n);
                return o.get ? o.get[i(523)](arguments[i(541)] < 3 ? e : r) : o[i(551)]
            }
        }
        ,
        Fs.apply(this, arguments)
    }
    function Ns(t, e) {
        for (var n = zs; !Object[n(618)][n(498)][n(523)](t, e) && null !== (t = Ms(t)); )
            ;
        return t
    }
    function Ls(t, e) {
        var n = zs;
        return (Ls = Object[n(588)] ? Object[n(588)][n(502)]() : function(t, e) {
            return t[n(489)] = e,
            t
        }
        )(t, e)
    }
    function Gs(t, e) {
        var n = zs;
        if (e && (As(e) === n(559) || typeof e === n(490)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(599));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(zs(552));
            return t
        }(t)
    }
    function Ms(t) {
        var e = zs;
        return (Ms = Object[e(588)] ? Object[e(529)].bind() : function(t) {
            var n = e;
            return t[n(489)] || Object[n(529)](t)
        }
        )(t)
    }
    function Ws() {
        var t = ["create", "#f1ad0a", "langCode", "getLong", "getSFSArray", "object", "push", "text", "homeScreenBG1", "key", "leaderboard.getTopIncome", "add", "defineProperty", "putInt", "inputEnabled", "TOP_WON", "leaderboardName", "2592770lwYDiD", "addColor", "checkImageKey", "getOwnPropertyDescriptor", "total", "events", "floor", "1214479uslWAT", "104238rlNcMJ", "init", "4958370HuHigi", "Rectangle", "TopWin", "iterator", "loadTexture", "containsKey", "MINS", "setPrototypeOf", "remove", "12CLTWIj", "listViewGroup", "params", "icon_close", "undefined", "state", "40pczkdc", "SFSObject", "cmd", "Derived constructors may only return object or undefined", "sham", "/atlas/leaderboardScreenV2/leaderboardScreen.json", "playButtonSound", "apply", "screenReady", "game", "image", "background", "leaderboardScreen", "height", "click", "shutdown", "HOURS", "SFSEvent", "TopIncome", "leaderboard.getTopWinner", "showEntries", "getByName", "prototype", "group", "make", "leaderboard.getDuration", "37594mDsPKr", "get", "addOnce", "dispatchValues", "configurable", "closeLoadingPopup", "assetUrl", "atlasJSONHash", "getInt", "onLeaderboardChange", "RESET_IN", "round", "game_win", "topExpButton", "name", "destroy", "entries", "viewport", "preload", "__proto__", "function", "enumerable", "leftbar_active", "scroller", "openLoadingPopup", "#ebdac0", "726700VnQlOQ", "container", "hasOwnProperty", "3135489sbBfdR", "sound", "setTo", "bind", "DAYS", "LEADERBOARD", "onScrollerComplete", "width", "won_icon", "EXTENSION_RESPONSE", "guserid", "/atlas/leaderboardScreenV2/leaderboardScreen.png", "centerX", "getTime", "socket", "world", "formatTime", "homeScreenBG2", "updateDuration", "#e3d5cc", "start", "load", "onComplete", "ExtensionRequest", "call", "coin_win", "anchor", "1110MPjwhm", "lang", "leftbar_button", "getPrototypeOf", "thu_nhap", "send", "getLeaderboardAsync", "getUtfString", "grp", "avatar", "addChild", "symbol", "replace", "cao_thu", "assets/images/no_avatar.png", "length", "duration", "log", "removeAll", "size", "onExtensionResponse", "onFileComplete", "construct", "listRanking", "topWinButton", "value", "this hasn't been initialised - super() hasn't been called", "constructor"];
        return (Ws = function() {
            return t
        }
        )()
    }
    function zs(t, e) {
        var n = Ws();
        return (zs = function(t, e) {
            return n[t -= 469]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = zs, r = t(); ; )
            try {
                if (525570 == parseInt(n(470)) / 1 * (parseInt(n(590)) / 2) + parseInt(n(499)) / 3 + parseInt(n(496)) / 4 + -parseInt(n(571)) / 5 + -parseInt(n(581)) / 6 + -parseInt(n(578)) / 7 * (parseInt(n(596)) / 8) + parseInt(n(579)) / 9 * (parseInt(n(526)) / 10))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Ws);
    var Us = null
      , Vs = "TopIncome"
      , Hs = 0
      , Xs = 0
      , Ys = !1
      , qs = function(t) {
        return (new Date).getTime() - t >= 12e4
    };
    const Ks = function(t) {
        var e = zs;
        !function(t, e) {
            var n = zs;
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t[n(618)] = Object[n(554)](e && e[n(618)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, n(618), {
                writable: !1
            }),
            e && Ls(t, e)
        }(u, t);
        var n, r, i, a, o, c = (a = u,
        o = function() {
            var t = zs;
            if (typeof Reflect === t(594) || !Reflect.construct)
                return !1;
            if (Reflect[t(548)][t(600)])
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean[t(618)].valueOf.call(Reflect[t(548)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = zs, n = Ms(a);
            if (o) {
                var r = Ms(this)[e(553)];
                t = Reflect[e(548)](n, arguments, r)
            } else
                t = n[e(603)](this, arguments);
            return Gs(this, t)
        }
        );
        function u() {
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, u),
            c.call(this)
        }
        return n = u,
        i = zs,
        (r = [{
            key: e(580),
            value: function() {
                var t = e;
                Fs(Ms(u[t(618)]), t(580), this).call(this),
                null == Us ? Us = {
                    TopWin: [],
                    TopIncome: []
                } : (Hs > 0 && qs(Hs) && (Us[t(583)][t(541)] = 0),
                Xs > 0 && qs(Xs) && (Us[t(614)][t(541)] = 0)),
                Ys = !1,
                this[t(497)] = this[t(565)].group(),
                this[t(607)] = this[t(565)][t(606)](0, 0, t(562)),
                this.background.width = this[t(605)][t(506)],
                this.background[t(609)] = this[t(605)][t(609)],
                this[t(497)][t(565)](this[t(607)]),
                CyberInstance[t(513)].addEventListener(SFS2X[t(613)][t(508)], this.onExtensionResponse, this)
            }
        }, {
            key: e(488),
            value: function() {
                var t = e;
                this.openLoadingPopup(),
                s[t(488)](),
                this[t(605)].cache[t(573)](t(608)) || this[t(520)][t(477)](t(608), window[t(476)] + t(510), window[t(476)] + t(601))
            }
        }, {
            key: e(554),
            value: function() {
                var t = e;
                this[t(520)][t(547)][t(565)](this.onFileComplete, this),
                this.background[t(585)](t(516)),
                this[t(607)][t(506)] = this[t(605)][t(506)],
                this[t(607)][t(609)] = this[t(605)].height;
                var n = this.game[t(565)][t(561)](this[t(605)][t(514)][t(511)], 20, CyberInstance[t(527)][t(504)], {
                    font: APP_FONT,
                    fontWeight: 900,
                    fontSize: 40,
                    fill: t(495)
                });
                n[t(525)][t(501)](.5, 0),
                this.container.add(n);
                var r = this[t(497)].create(0, 0, "homeScreen", t(593));
                r.x = this[t(605)][t(506)] - r[t(506)] - 15,
                r.y = 15,
                r[t(568)] = !0,
                r[t(576)].onInputDown[t(472)]((function() {
                    var e = t;
                    CyberInstance[e(500)][e(602)](),
                    this[e(605)][e(595)][e(519)]("HomeScreen", !0, !1)
                }
                ), this);
                var i = new jt(this[t(605)],2,2,t(608),Vs == t(583) ? t(492) : t(528))
                  , a = this[t(605)][t(565)][t(606)](i.width / 2, 13, t(608), t(539));
                a[t(525)][t(501)](.5, 0),
                i[t(536)](a);
                var o = this[t(605)].make[t(561)](78, i[t(609)] - 35, CyberInstance[t(527)][t(569)], {
                    font: APP_FONT,
                    fontWeight: 400,
                    fontSize: 22,
                    fill: t(518)
                });
                o.anchor[t(501)](.5, 0),
                i[t(536)](o),
                this[t(497)][t(565)](i);
                var s = new jt(this[t(605)],2,2,"leaderboardScreen","TopIncome" == Vs ? t(492) : "leftbar_button")
                  , c = this[t(605)][t(565)][t(606)](s[t(506)] / 2, 16, t(608), t(530));
                c[t(525)][t(501)](.5, 0),
                s[t(536)](c);
                var u = this[t(605)][t(620)][t(561)](78, s[t(609)] - 35, CyberInstance.lang.TOP_INCOME, {
                    font: APP_FONT,
                    fontWeight: 400,
                    fontSize: 22,
                    fill: t(518)
                });
                u[t(525)][t(501)](.5, 0),
                s.addChild(u),
                this[t(497)][t(565)](s),
                i[t(570)] = t(583),
                i[t(610)](this.onLeaderboardChange, this),
                this[t(550)] = i,
                s[t(570)] = t(614),
                s.click(this.onLeaderboardChange, this),
                this[t(483)] = s;
                var h = this[t(497)][t(554)](0, 0, t(608), "bg");
                h.y = this[t(605)].height - h[t(609)] - 35,
                s.y = h.y + 6,
                s.x = this[t(605)][t(506)] / 2 - (s.width + h[t(506)] - 2) / 2,
                h.x = s.x + s[t(506)] - 2,
                i.x = s.x,
                i.y = s.y + s[t(609)] + 15,
                this[t(487)] = {
                    width: h[t(506)],
                    height: h[t(609)] - 25
                },
                this[t(591)] = this[t(605)].add[t(619)](),
                this[t(591)].x = h.x,
                this[t(591)].y = h.y + 10,
                this[t(549)] = new kr(this[t(605)],this[t(591)],new (Phaser[t(582)])(0,0,this.viewport[t(506)],this[t(487)][t(609)]),{
                    direction: "y",
                    padding: 5,
                    searchForClicks: !0
                }),
                this[t(549)][t(493)][t(576)][t(521)][t(565)](this[t(505)], this),
                this[t(604)] = !0,
                this[t(532)](Vs, !0),
                CyberInstance[t(513)][t(531)](new (SFS2X[t(522)])(t(469)))
            }
        }, {
            key: e(546),
            value: function(t) {
                var n = e;
                if (this[n(604)] && t[n(592)].containsKey("entries")) {
                    var r = t.params[n(558)](n(486));
                    if (r[n(545)]() > 0) {
                        for (var i = "leaderboard.getTopIncome" == t.cmd ? n(614) : n(583), a = Us[i].length, o = 0; o < r[n(545)](); o++) {
                            var s = r.getSFSObject(o);
                            Us[i][n(560)]({
                                guserid: s[n(557)](n(509)),
                                name: s[n(533)](n(484)),
                                avatar: s[n(586)](n(535)) ? s[n(533)](n(535)) : n(540),
                                rank: a + o + 1,
                                score: s[n(586)](n(482)) ? s[n(478)](n(482)) : s[n(557)](n(524))
                            })
                        }
                        i == Vs && this[n(616)](a),
                        t[n(598)] == n(615) ? Hs = (new Date)[n(512)]() : t[n(598)] == n(564) && (Xs = (new Date)[n(512)]()),
                        Ys = !1
                    }
                    this[n(475)]()
                }
                this.screenReady && t[n(598)] == n(469) && this[n(517)](t[n(592)][n(557)](n(542)))
            }
        }, {
            key: e(532),
            value: function(t, n) {
                var r = e;
                if (0 != Us[t].length && n)
                    this[r(616)](0),
                    this[r(475)]();
                else if (!Ys && Us[t].length < 50) {
                    Ys = !0;
                    var i = new (SFS2X[r(597)]);
                    i[r(567)]("idx", Us[t][r(541)]),
                    "TopWin" == t ? CyberInstance[r(513)][r(531)](new (SFS2X[r(522)])(r(615),i)) : t == r(614) && CyberInstance[r(513)].send(new SFS2X.ExtensionRequest("leaderboard.getTopIncome",i))
                }
            }
        }, {
            key: e(616),
            value: function(t) {
                var n = e
                  , r = Us[Vs];
                if (r && r[n(541)] > 0) {
                    for (var i = t; i < r[n(541)]; i++)
                        this[n(549)][n(565)](new Bs(this[n(605)],r[i],this[n(487)],Vs == n(583) ? n(507) : "coin_icon"));
                    this[n(520)].start()
                }
            }
        }, {
            key: e(479),
            value: function(t) {
                var n = e
                  , r = this;
                t[n(570)] && t[n(570)] != Vs && (Vs = t.leaderboardName,
                t[n(585)](n(608), "leftbar_active"),
                Vs == n(583) ? this[n(483)][n(585)](n(608), n(528)) : this[n(550)].loadTexture(n(608), n(528)),
                this[n(549)][n(544)](),
                this[n(549)].reset(),
                this[n(494)]({
                    closeTimer: 1e4
                }),
                setTimeout((function() {
                    Ys && (Ys = !1),
                    r[n(532)](Vs, !0)
                }
                ), 300))
            }
        }, {
            key: e(505),
            value: function() {
                var t = e;
                if (this[t(549)])
                    try {
                        if (!Ys && Us[Vs].length > 0 && Us[Vs].length < 50) {
                            var n = parseInt(this[t(549)].scroller[t(473)][t(575)]);
                            if (n < 0) {
                                var r = Us[Vs][t(541)]
                                  , i = 80 * r + 5 * (r - 1) - this[t(487)][t(609)];
                                (n = -n) >= i - 70 && this[t(532)](Vs, !1)
                            }
                        }
                    } catch (e) {
                        console[t(543)](e)
                    }
            }
        }, {
            key: e(517),
            value: function(t) {
                var n = e;
                try {
                    var r = CyberInstance[n(527)][n(480)][n(538)]("%s", this[n(515)](t))
                      , i = this[n(605)].add[n(561)](this.game.width / 2, 80, r, {
                        font: APP_FONT,
                        fontSize: 20,
                        fill: n(495),
                        fontWeight: 400,
                        wordWrapWidth: this[n(605)][n(506)]
                    });
                    "vn" == CyberInstance[n(556)] && i[n(572)](n(555), 28),
                    i[n(525)][n(501)](.5, 0),
                    this.container.add(i)
                } catch (t) {
                    console.log(t)
                }
            }
        }, {
            key: e(515),
            value: function(t) {
                var n, r = e, i = 864e5, a = 36e5, o = Math[r(577)](t / i), s = Math.floor((t - o * i) / a), c = Math[r(481)]((t - o * i - s * a) / 6e4);
                return 60 === c && (s++,
                c = 0),
                24 === s && (o++,
                s = 0),
                o > 0 ? (n = o + " " + CyberInstance[r(527)][r(503)],
                s > 0 ? n += " " + s + " " + CyberInstance[r(527)][r(612)] : c > 0 && (n += " " + c + " " + CyberInstance[r(527)][r(587)])) : s > 0 ? (n = s + " " + CyberInstance.lang[r(612)],
                c > 0 && (n += " " + c + " " + CyberInstance[r(527)].MINS)) : n = c + " " + CyberInstance.lang[r(587)],
                n
            }
        }, {
            key: e(547),
            value: function(t, n, r) {
                var i = e;
                if (this.screenReady && r) {
                    var a = this[i(549)][i(534)][i(617)](n);
                    a && a.applyTexture(n)
                }
            }
        }, {
            key: e(611),
            value: function() {
                var t = e;
                Fs(Ms(u[t(618)]), t(611), this)[t(523)](this),
                CyberInstance[t(513)].removeEventListener(SFS2X.SFSEvent[t(508)], this[t(546)]),
                this[t(520)][t(547)][t(589)](this[t(547)], this),
                this[t(497)].destroy(),
                this[t(591)][t(485)](),
                this[t(591)] = null,
                this.container = null,
                this.viewport = null
            }
        }]) && Ds(n[i(618)], r),
        Object[i(566)](n, i(618), {
            writable: !1
        }),
        u
    }(pe);
    function Js(t, e) {
        for (var n = Zs, r = 0; r < e[n(184)]; r++) {
            var i = e[r];
            i.enumerable = i[n(206)] || !1,
            i.configurable = !0,
            n(214)in i && (i[n(174)] = !0),
            Object[n(244)](t, i[n(218)], i)
        }
    }
    function Qs() {
        var t = ["onExtensionResponse", "onRoomCreationError", "cmd", "errorCode", "user", "openIAP", "size", "userCount", "enumerable", "random", "3327804XKuvly", "ROOM_FULL", "closeLoadingPopup", "USER_VARIABLES_UPDATE", "handleJoinRoomError", "showNotEnoughMoneyToJoin", "value", "onJoinRoomError", "instance", "ROOM_CREATION_ERROR", "key", "dailyPack", "putUtfString", "488006wqbPVR", "socket", "2ZzeaEm", "getInt", "gift.outOfMoney", "floor", "Cannot call a class as a function", "lang", "screenReady", "success", "prototype", "addEventListener", "sfs", "2018940GbISqA", "CLOSE", "isItMe", "handleOutOfMoney", "findGame", "screen", "4153120AIYIdl", "shuffleArray", "send", "error", "defineProperty", "createGameError", "bet", "822690RwVpFk", "notEnoughMoneyPopup", "ROOM_JOIN_ERROR", "extraCounter", "SFSEvent", "5280891WUYQDh", "writable", "errorMessage", "sentCount", "coin", "shortenLargeNumber", "updateProfileCoin", "ads.rewardedInterstitial", "roomList", "EXTENSION_RESPONSE", "player", "length", "changedVars", "indexOf", "sendSubscribeRequest", "548082NcduIH", "updateRoomList", "getRoomList", "gameGroup", "params", "containsKey", "joinGame", "maxUsers", "getLong", "setDataAsync"];
        return (Qs = function() {
            return t
        }
        )()
    }
    function Zs(t, e) {
        var n = Qs();
        return (Zs = function(t, e) {
            return n[t -= 170]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = Zs, r = t(); ; )
            try {
                if (488214 == parseInt(n(223)) / 1 * (-parseInt(n(221)) / 2) + -parseInt(n(188)) / 3 + -parseInt(n(234)) / 4 + -parseInt(n(247)) / 5 + parseInt(n(208)) / 6 + parseInt(n(173)) / 7 + parseInt(n(240)) / 8)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Qs);
    const $s = function() {
        var t, e, n, r = Zs;
        function i(t) {
            var e = Zs;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Zs(227))
            }
            )(this, i),
            this[e(239)] = t,
            this[e(233)] = CyberInstance[e(222)],
            this[e(233)][e(232)](SFS2X[e(172)][e(170)], this.onJoinRoomError, this),
            this.sfs.addEventListener(SFS2X.SFSEvent[e(217)], this[e(199)], this),
            this[e(233)][e(232)](SFS2X[e(172)][e(182)], this[e(198)], this),
            this[e(233)][e(232)](SFS2X[e(172)][e(211)], this.onUserVariablesUpdate, this)
        }
        return t = i,
        n = Zs,
        (e = [{
            key: "onExtensionResponse",
            value: function(t) {
                var e = Zs;
                if (this.screenReady())
                    if (t.cmd == e(194))
                        this.handleJoinRoomError(t);
                    else if (t.cmd == e(238))
                        this.screen[e(210)](),
                        1 === t.params[e(224)](e(201)) && this[e(239)][e(203)]();
                    else if (t[e(200)] == e(245))
                        try {
                            this[e(239)][e(210)](),
                            t.params.containsKey(e(201)) && 1 == t[e(192)][e(224)]("errorCode") && this[e(239)][e(203)]()
                        } catch (t) {
                            console[e(243)](t)
                        }
                    else if (t.cmd == e(225))
                        this[e(237)](t[e(192)]);
                    else if (t[e(200)] == e(190))
                        this[e(189)](t.params);
                    else if (t[e(200)] == e(180)) {
                        var n = t[e(192)][e(196)](e(177));
                        new M(game,{
                            text: CyberInstance[e(228)].YOU_GOT_CHIP.replace("%s", h[e(178)](n)),
                            buttonText: CyberInstance.lang[e(235)],
                            hideCloseButton: !0
                        })
                    }
            }
        }, {
            key: r(189),
            value: function(t) {
                var e = r;
                if (this.screenReady()) {
                    var n = [];
                    if (t[e(193)](e(181))) {
                        var i = t.getSFSArray(e(181));
                        if (i[e(204)]() > 0)
                            for (var a = 0; a < i[e(204)](); a++) {
                                var o = i.getSFSObject(a)
                                  , s = {
                                    id: o[e(224)]("id"),
                                    userCount: o[e(224)]("userCount"),
                                    maxUsers: o.getInt(e(195)),
                                    bet: o[e(196)](e(246))
                                };
                                0 == s[e(205)] && (s[e(205)] = 1),
                                s.isFull = s[e(205)] == s.maxUsers ? 1 : 0,
                                n.push(s)
                            }
                    }
                    n[e(184)] > 1 && (n = this[e(241)](n)),
                    this[e(239)][e(189)](n)
                }
            }
        }, {
            key: "onUserVariablesUpdate",
            value: function(t) {
                var e = r;
                t[e(202)][e(236)] && this[e(229)]() && -1 != t[e(185)][e(186)]("coin") && this[e(239)][e(179)](t[e(202)].getVariable("coin")[e(214)])
            }
        }, {
            key: r(212),
            value: function(t) {
                var e = r;
                if (!1 === t[e(192)].getBool(e(230)) && (this[e(239)][e(210)](),
                t[e(192)][e(193)](e(246)))) {
                    var n = t.params[e(224)]("errorCode");
                    0 == n ? M[e(213)](params.getLong("bet")) : 2 == n && new M(game,{
                        text: CyberInstance.lang[e(209)],
                        buttonText: CyberInstance.lang.CLOSE
                    })
                }
            }
        }, {
            key: "handleOutOfMoney",
            value: function(t) {
                var e = r;
                this.screen[e(210)](),
                t[e(193)]("dailyPack") ? t.containsKey(e(177)) ? new _e(game,{
                    coin: t.getInt(e(177)),
                    dailyPack: !0
                }) : !t[e(193)](e(243)) && (CyberGlobalData.dailyPack = 0,
                FBInstant[e(183)][e(197)]({
                    dailyPack: CyberGlobalData[e(219)]
                })) : t[e(193)](e(177)) && t[e(193)]("sentCount") ? new _e(game,{
                    coin: t[e(224)](e(177)),
                    sentCount: t[e(224)](e(176))
                }) : Mt[e(216)].ready && Mt[e(216)][e(171)] < 5 && (this[e(239)][e(248)] = new qt(game))
            }
        }, {
            key: r(215),
            value: function(t) {
                var e = r;
                this[e(229)]() && (this[e(239)][e(210)](),
                new M(game,{
                    text: t[e(175)],
                    buttonText: CyberInstance[e(228)][e(235)]
                }))
            }
        }, {
            key: "onRoomCreationError",
            value: function(t) {
                var e = r;
                this[e(229)]() && (this[e(239)][e(210)](),
                new M(game,{
                    text: t[e(175)],
                    buttonText: CyberInstance[e(228)][e(235)]
                }))
            }
        }, {
            key: r(187),
            value: function(t) {
                var e = r;
                if (this.screenReady() && this[e(233)].isConnected) {
                    var n = new SFS2X.SFSObject;
                    n[e(220)](e(191), t),
                    this.sfs[e(242)](new SFS2X.ExtensionRequest(e(190),n))
                }
            }
        }, {
            key: r(229),
            value: function() {
                return this[r(239)].screenReady
            }
        }, {
            key: r(241),
            value: function(t) {
                var e, n, i, a = r;
                for (i = t[a(184)] - 1; i > 0; i--)
                    e = Math[a(226)](Math[a(207)]() * (i + 1)),
                    n = t[i],
                    t[i] = t[e],
                    t[e] = n;
                return t
            }
        }]) && Js(t[n(231)], e),
        Object[n(244)](t, "prototype", {
            writable: !1
        }),
        i
    }();
    function tc(t) {
        var e = ac;
        return (tc = e(245) == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && "function" == typeof Symbol && t[n(234)] === Symbol && t !== Symbol[n(221)] ? "symbol" : typeof t
        }
        )(t)
    }
    function ec(t, e) {
        if (!(t instanceof e))
            throw new TypeError(ac(236))
    }
    function nc(t, e) {
        for (var n = ac, r = 0; r < e[n(175)]; r++) {
            var i = e[r];
            i[n(190)] = i[n(190)] || !1,
            i[n(256)] = !0,
            n(186)in i && (i[n(201)] = !0),
            Object[n(228)](t, i[n(182)], i)
        }
    }
    function rc() {
        var t = ["roomId", "function", "143969cSKSeM", "1631972VSzcca", "heart_active", "create", "userCountX", "miniumMoneyCondition", "__proto__", "maxUsers", "getPrototypeOf", "add", "configurable", "7687287Bfdndp", "#ffffff", "lang", "join", "joinRoom", "playButtonSound", "length", "Super expression must either be null or a function", "348303klyxoT", "4182bnxQjt", "lobbyScreen", "bind", "valueOf", "key", "addHearts", "loadTexture", "openLoadingPopup", "value", "userCount", "addText", "click", "enumerable", "9700tabvGw", "full", "shortenLargeNumber", "bet", "12lUvTKq", "setTo", "1367549tplGLi", "callAll", "onJoinRequest", "JOIN", "writable", "700", "inputEnabled", "FULL", "construct", "call", "revive", "sound", "#FFFFFF", "text", "updateUserCount", "row", "setPrototypeOf", "heart", "getCurrentState", "20185ZWvJUG", "height", "apply", "betConditionX", "game", "prototype", "maxUser", "anchor", "width", "272XWcKYJ", "5015aToeaX", "instance", "defineProperty", "log", "canPlay", "setText", "joinButton", "sham", "constructor", "this hasn't been initialised - super() hasn't been called", "Cannot call a class as a function", "hearts", "Image", "visible", "name", "betCondition", "removeChild", "betValue"];
        return (rc = function() {
            return t
        }
        )()
    }
    function ic(t, e) {
        var n = ac;
        return (ic = Object.setPrototypeOf ? Object[n(213)][n(180)]() : function(t, e) {
            return t[n(252)] = e,
            t
        }
        )(t, e)
    }
    function ac(t, e) {
        var n = rc();
        return (ac = function(t, e) {
            return n[t -= 175]
        }
        )(t, e)
    }
    function oc(t, e) {
        var n = ac;
        if (e && ("object" === tc(e) || typeof e === n(245)))
            return e;
        if (void 0 !== e)
            throw new TypeError("Derived constructors may only return object or undefined");
        return sc(t)
    }
    function sc(t) {
        if (void 0 === t)
            throw new ReferenceError(ac(235));
        return t
    }
    function cc(t) {
        var e = ac;
        return (cc = Object.setPrototypeOf ? Object[e(254)][e(180)]() : function(t) {
            return t[e(252)] || Object.getPrototypeOf(t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = ac, r = t(); ; )
            try {
                if (798674 == -parseInt(n(197)) / 1 + -parseInt(n(247)) / 2 + parseInt(n(177)) / 3 * (parseInt(n(195)) / 4) + parseInt(n(226)) / 5 * (parseInt(n(178)) / 6) + parseInt(n(246)) / 7 * (-parseInt(n(225)) / 8) + parseInt(n(257)) / 9 + parseInt(n(191)) / 10 * (parseInt(n(216)) / 11))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(rc);
    var uc = function(t) {
        var e = ac;
        !function(t, e) {
            var n = ac;
            if (typeof e !== n(245) && null !== e)
                throw new TypeError(n(176));
            t.prototype = Object[n(249)](e && e[n(221)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && ic(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = ac;
            if ("undefined" == typeof Reflect || !Reflect[t(205)])
                return !1;
            if (Reflect[t(205)][t(233)])
                return !1;
            if (typeof Proxy === t(245))
                return !0;
            try {
                return Boolean[t(221)][t(181)][t(206)](Reflect[t(205)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = ac, n = cc(a);
            if (o) {
                var r = cc(this)[e(234)];
                t = Reflect[e(205)](n, arguments, r)
            } else
                t = n[e(218)](this, arguments);
            return oc(this, t)
        }
        );
        function c(t) {
            var e, n = ac, r = arguments[n(175)] > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments[n(175)] > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a = arguments[n(175)] > 3 ? arguments[3] : void 0;
            ec(this, c),
            (e = s[n(206)](this, t[n(220)], r, i)).name = a.id;
            var o = e[n(249)](0, 0, "lobbyScreen", n(212));
            return o[n(224)] = e[n(220)].width - 60,
            o[n(217)] = e[n(217)],
            e.x = e[n(220)].width / 2 - o.width / 2,
            e[n(244)] = e[n(220)][n(255)].text(20, e.height / 2 + 2, a.id, {
                font: APP_FONT,
                fontSize: 24,
                fill: n(209),
                fontWeight: "500"
            }),
            e[n(244)][n(223)][n(196)](0, .5),
            e[n(255)](e[n(244)]),
            e[n(243)] = a[n(194)],
            e.bet = e[n(220)][n(255)][n(210)](t.betX - 25, e[n(217)] / 2 + 2, h[n(193)](a.bet), {
                font: APP_FONT,
                fontSize: 30,
                fill: "#ffcf00",
                fontWeight: "700"
            }),
            e[n(194)][n(223)][n(196)](0, .5),
            e[n(255)](e[n(194)]),
            e[n(241)] = e[n(220)][n(255)][n(210)](t[n(219)] - 30, e[n(217)] / 2 + 2, h[n(193)](a[n(194)] * CyberInstance[n(251)]), {
                font: APP_FONT,
                fontSize: 30,
                fill: "#ffcf00",
                fontWeight: n(202)
            }),
            e.betCondition[n(223)][n(196)](0, .5),
            e.add(e[n(241)]),
            e.maxUsers = a[n(253)],
            e.addHearts(a.userCount, t[n(250)]),
            e[n(232)] = new jt(e[n(220)],0,0,n(179),a[n(187)] != a[n(253)] ? n(260) : n(192)),
            e[n(232)].x = o[n(224)] - e[n(232)][n(224)] - 12,
            e.joinButton.y = e[n(217)] / 2 - e[n(232)].height / 2,
            e[n(232)][n(188)](a.userCount != a[n(253)] ? CyberInstance.lang[n(200)] : CyberInstance[n(259)][n(204)], {
                font: APP_FONT,
                fontSize: 21,
                fill: n(258),
                fontWeight: 500
            }),
            e[n(232)][n(189)](e[n(199)], sc(e)),
            e[n(232)][n(203)] = a[n(187)] < e[n(253)],
            e[n(255)](e[n(232)]),
            e
        }
        return n = c,
        i = ac,
        (r = [{
            key: e(183),
            value: function(t, n) {
                var r = e;
                this[r(237)] = [];
                for (var i = n - 84.5, a = 0; a < CyberInstance.maxUsers; a++)
                    this[r(237)][a] = new (Phaser[r(238)])(this[r(220)],i,0,r(179),r(a <= t - 1 ? 248 : 214)),
                    this.hearts[a].y = this[r(217)] / 2 - this[r(237)][a][r(217)] / 2,
                    i += this[r(237)][a][r(224)] + 15,
                    a <= this.maxUsers - 1 && this[r(255)](this[r(237)][a])
            }
        }, {
            key: e(211),
            value: function(t) {
                for (var n = e, r = 0; r < this[n(237)].length; r++)
                    this.hearts[r][n(184)]("lobbyScreen", r <= t - 1 ? "heart_active" : n(214));
                this.joinButton && (this[n(232)][n(184)](n(179), t < this[n(253)] ? n(260) : "full"),
                this.joinButton[n(188)](t < this[n(253)] ? CyberInstance[n(259)][n(200)] : CyberInstance[n(259)][n(204)]),
                this[n(232)][n(203)] = t < this[n(253)])
            }
        }, {
            key: "refreshData",
            value: function(t) {
                var n = e;
                this[n(240)] = t.id,
                this.roomId[n(231)](this[n(240)]),
                this.betValue = t[n(194)],
                this[n(194)][n(231)](h[n(193)](t[n(194)])),
                this[n(241)][n(231)](h[n(193)](t.bet * CyberInstance[n(251)])),
                this[n(253)] = t[n(222)];
                for (var r = 0; r < CyberInstance[n(253)]; r++)
                    r > 1 && (this[n(242)](this[n(237)][r]),
                    r <= this[n(253)] - 1 && this[n(255)](this[n(237)][r]));
                this.updateUserCount(t.userCount)
            }
        }, {
            key: e(199),
            value: function() {
                var t = e;
                CyberInstance.paused && (CyberInstance.paused = !1),
                CyberInstance[t(208)][t(262)]();
                try {
                    ie[t(227)][t(230)](this.betValue) ? (this.game.state[t(215)]()[t(185)](),
                    ie.instance[t(261)](this[t(240)])) : M.showNotEnoughMoneyToJoin(this.betValue)
                } catch (e) {
                    console[t(229)](e)
                }
            }
        }, {
            key: "kill",
            value: function() {
                var t = e;
                1 == this.visible && (this.callAll("kill"),
                this[t(239)] = !1)
            }
        }, {
            key: "revive",
            value: function() {
                var t = e;
                0 == this[t(239)] && (this[t(198)](t(207)),
                this[t(239)] = !0)
            }
        }, {
            key: e(217),
            get: function() {
                return 74
            }
        }]) && nc(n[i(221)], r),
        Object[i(228)](n, "prototype", {
            writable: !1
        }),
        c
    }(Phaser.Group);
    function hc(t) {
        var e = fc;
        return (hc = e(315) == typeof Symbol && e(353) == typeof Symbol[e(369)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(315) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(289)] ? "symbol" : typeof t
        }
        )(t)
    }
    function lc(t, e) {
        for (var n = fc, r = 0; r < e.length; r++) {
            var i = e[r];
            i[n(301)] = i[n(301)] || !1,
            i[n(413)] = !0,
            n(388)in i && (i[n(311)] = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function fc(t, e) {
        var n = vc();
        return (fc = function(t, e) {
            return n[t -= 235]
        }
        )(t, e)
    }
    function pc() {
        var t = fc;
        return pc = typeof Reflect !== t(303) && Reflect[t(322)] ? Reflect[t(322)][t(287)]() : function(e, n, r) {
            var i = t
              , a = yc(e, n);
            if (a) {
                var o = Object[i(375)](a, n);
                return o.get ? o.get[i(238)](arguments[i(306)] < 3 ? e : r) : o[i(388)]
            }
        }
        ,
        pc[t(362)](this, arguments)
    }
    function yc(t, e) {
        for (var n = fc; !Object.prototype[n(270)][n(238)](t, e) && null !== (t = mc(t)); )
            ;
        return t
    }
    function dc(t, e) {
        var n = fc;
        return (dc = Object[n(390)] ? Object.setPrototypeOf[n(287)]() : function(t, e) {
            return t[n(244)] = e,
            t
        }
        )(t, e)
    }
    function vc() {
        var t = ["BET", "getDisplayName", "listHeader", "grp", "STATUS", "betX", "3052670YVyufx", "onInputDown", "angle", "36640ApNYuM", "click", "enumerable", "toUpperCase", "undefined", "preload", "controller", "length", "42ZTxwzt", "image", "currentRoomGroup", "userCount", "writable", "events", "bet", "LOADING_LOBBY_DATA", "function", "ShopScreen", "removeRoomFromList", "sound", "paused", "setTo", "listView", "get", "shutdown", "make", "4VStvLb", "start", "game", "alphaMask", "getPrototypeOf", "#f5c78a", "init", "sham", "roomList", "removeAll", "master", "floor", "visible", "getCoin", "eventUpdater", "loadingText", "PLAY_NOW", "ROOM", "#200403", "showNotEnoughMoneyToPlay", "updateUserCount", "maxUsers", "constructor", "canPlay", "openCreateGamePopup", "remove", "playButtonSound", "getGuserid", "symbol", "4878168jPgRne", "stop", "indexOf", "amateur", "instance", "PLAYER_COUNT", "splice", "quickplay", "apply", "avatarKey", "Cannot call a class as a function", "atlas/lobbyScreen/lobbyScreen.png", "construct", "professionalButton", "avatar", "iterator", "getVariable", "masterButton", "multiGroupDisabled", "formatCoinWithCommas", "homeScreenBG1", "getOwnPropertyDescriptor", "homeBtn", "height", "open", "223410dVbuuC", "creategame", "updateProfileCoin", "3147279glRGDg", "world", "beginner", "userCountX", "beginnerButton", "addOnce", "value", "sectionMap", "setPrototypeOf", "header", "videoPopup", "atlas/lobbyScreen/lobbyScreen.json", "gameGroup", "profileCoin", "anchor", "addAndSortRoom", "bringToTop", "setText", "#ffffff", "onQuickPlayRequest", "text", "#fbafb3", "addText", "reset", "MASTER", "loadTexture", "group", "createGamePopup", "close", "avatar_bg", "2872944phHrSl", "configurable", "destroy", "existing", "create", "LobbyScreen", "call", "amateurButton", "object", "professional", "roomGroupActive", "atlas", "__proto__", "handleOutOfMoney", "log", "preloadBg", "quickJoinBtn", "isFull", "addRoomToScroller", "loop", "openIAP", "openLoadingPopup", "profileGroup", "closeLoadingPopup", "Rectangle", "sendSubscribeRequest", "roomGroup", "HomeScreen", "no_avatar", "createGameBtn", "load", "valueOf", "add", "width", "push", "268582HBMRKZ", "home", "lang", "hasOwnProperty", "state", "1260vdvKPF", "groupId", "lobbyScreen", "onGroupChangeClick", "screenReady", "getByName", "cache", "inited", "betConditionX", "time", "defineProperty", "checkImageKey", "homeScreen", "bitmapData", "CHUYEN_NGHIEP", "bind", "preloadIcon", "prototype"];
        return (vc = function() {
            return t
        }
        )()
    }
    function bc(t, e) {
        var n = fc;
        if (e && (hc(e) === n(240) || typeof e === n(315)))
            return e;
        if (void 0 !== e)
            throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t)
    }
    function mc(t) {
        var e = fc;
        return (mc = Object[e(390)] ? Object[e(329)][e(287)]() : function(t) {
            var n = e;
            return t[n(244)] || Object[n(329)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = fc, r = t(); ; )
            try {
                if (745747 == parseInt(n(267)) / 1 * (parseInt(n(325)) / 2) + -parseInt(n(382)) / 3 + parseInt(n(354)) / 4 + -parseInt(n(296)) / 5 + -parseInt(n(379)) / 6 * (parseInt(n(307)) / 7) + parseInt(n(412)) / 8 + -parseInt(n(272)) / 9 * (-parseInt(n(299)) / 10))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(vc);
    const gc = function(t) {
        var e = fc;
        !function(t, e) {
            var n = fc;
            if (typeof e !== n(315) && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object[n(236)](e && e[n(289)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(282)](t, n(289), {
                writable: !1
            }),
            e && dc(t, e)
        }(u, t);
        var n, r, i, a, o, c = (a = u,
        o = function() {
            var t = fc;
            if (typeof Reflect === t(303) || !Reflect[t(366)])
                return !1;
            if (Reflect[t(366)][t(332)])
                return !1;
            if (typeof Proxy === t(315))
                return !0;
            try {
                return Boolean[t(289)][t(263)].call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = fc, n = mc(a);
            if (o) {
                var r = mc(this)[e(347)];
                t = Reflect[e(366)](n, arguments, r)
            } else
                t = n[e(362)](this, arguments);
            return bc(this, t)
        }
        );
        function u() {
            var t = fc;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(fc(364))
            }(this, u),
            c[t(238)](this)
        }
        return n = u,
        i = fc,
        (r = [{
            key: e(331),
            value: function() {
                var t = e;
                pc(mc(u[t(289)]), t(331), this)[t(238)](this),
                this[t(305)] || (this.controller = new $s(this)),
                this[t(309)] || (this[t(309)] = "beginner"),
                CyberGlobalData[t(274)] = t(237),
                this.roomList = []
            }
        }, {
            key: "preload",
            value: function() {
                var t = e
                  , n = this
                  , r = this.add[t(308)](0, 0, t(374));
                if (r[t(265)] = this.game[t(265)],
                r[t(377)] = this.game.height,
                !this.game[t(278)][t(283)](t(274))) {
                    s[t(243)](t(274), t(365), t(393)),
                    this[t(288)] = this[t(264)][t(308)](this[t(327)][t(383)].centerX, this[t(327)][t(383)].centerY, t(247)),
                    this[t(288)][t(396)][t(320)](.5);
                    var i = this[t(327)].time[t(236)](!0);
                    i[t(251)](30, (function() {
                        var e = t;
                        n[e(288)][e(298)] += 10,
                        1 == n[e(276)] && (n[e(288)].destroy(),
                        i[e(355)](!0),
                        i[e(414)]())
                    }
                    )),
                    i[t(326)]()
                }
            }
        }, {
            key: e(236),
            value: function() {
                var t = e
                  , n = this
                  , r = this[t(327)][t(264)][t(408)]();
                this.quickJoinBtn = new jt(this[t(327)],0,12,t(274),t(361)),
                this[t(248)][t(404)](CyberInstance[t(269)][t(341)], {
                    font: APP_FONT,
                    fontSize: 21,
                    fill: t(343),
                    fontWeight: 700
                }),
                this[t(248)][t(300)](this[t(401)], this),
                r[t(264)](this[t(248)]),
                this[t(261)] = new jt(this[t(327)],0,12,t(274),t(380)),
                this[t(261)].addText(CyberInstance[t(269)].CREATE_ROOM[t(302)](), {
                    font: APP_FONT,
                    fontSize: 21,
                    fill: "#200403",
                    fontWeight: 700
                }),
                this[t(261)][t(300)](this[t(349)], this),
                r[t(264)](this.createGameBtn),
                this[t(248)].x = this[t(327)][t(265)] / 2 - (this[t(248)][t(265)] + this[t(261)][t(265)] + 12) / 2,
                this.createGameBtn.x = this.quickJoinBtn.x + this[t(248)][t(265)] + 12,
                this[t(376)] = r[t(236)](0, 0, "lobbyScreen", t(268)),
                this.homeBtn.x = this[t(327)].width - this[t(376)][t(265)] - 15,
                this[t(376)].inputEnabled = !0,
                this[t(376)][t(312)][t(297)][t(387)]((function() {
                    var e = t;
                    CyberInstance[e(318)][e(351)](),
                    this[e(327)].state[e(326)](e(259), !0, !1)
                }
                ), this);
                var i = r[t(236)](0, this[t(248)].y + this.quickJoinBtn.height + 12, t(274), t(391));
                i[t(265)] = this[t(327)].width - 60,
                i[t(377)] = 52,
                i.x = this.game.width / 2 - i[t(265)] / 2;
                var a = this[t(327)][t(264)][t(402)](i.x + 65, i.y + i[t(377)] / 2 + 1, CyberInstance.lang[t(342)], {
                    font: APP_FONT,
                    fontSize: 21,
                    fill: "#fbafb3",
                    fontWeight: 400
                });
                a[t(396)].setTo(.5),
                r[t(264)](a);
                var o = this[t(327)].add.text(i.x + 200, i.y + i[t(377)] / 2 + 1, CyberInstance[t(269)][t(290)], {
                    font: APP_FONT,
                    fontSize: 21,
                    fill: t(403),
                    fontWeight: 400
                });
                o.anchor[t(320)](.5),
                r[t(264)](o);
                var c = this[t(327)].add.text(i.x + 414, i.y + i.height / 2 + 1, CyberInstance.lang[t(359)], {
                    font: APP_FONT,
                    fontSize: 21,
                    fill: t(403),
                    fontWeight: 400
                });
                c[t(396)][t(320)](.5),
                r[t(264)](c);
                var u = this[t(327)][t(264)][t(402)](i.x + 705, i.y + i.height / 2 + 1, CyberInstance[t(269)].TOI_THIEU, {
                    font: APP_FONT,
                    fontSize: 21,
                    fill: t(403),
                    fontWeight: 400
                });
                u.anchor[t(320)](.5),
                r.add(u);
                var l = this[t(327)][t(264)].text(i.x + i.width - 135, i.y + i[t(377)] / 2 + 1, CyberInstance[t(269)][t(294)], {
                    font: APP_FONT,
                    fontSize: 21,
                    fill: t(403),
                    fontWeight: 400
                });
                l[t(396)][t(320)](0, .5),
                r[t(264)](l);
                var f = i[t(265)] - 336;
                this[t(295)] = 150 + Math[t(336)](30 * f / 100) / 2,
                o.x = i.x + this[t(295)],
                this[t(385)] = 150 + Math[t(336)](30 * f / 100) + Math[t(336)](40 * f / 100) / 2,
                c.x = i.x + this.userCountX,
                this[t(280)] = 150 + Math[t(336)](30 * f / 100) + Math[t(336)](40 * f / 100) + Math[t(336)](30 * f / 100) / 2,
                u.x = i.x + this[t(280)];
                var p = CyberGlobalData[t(372)] ? 6 : 5
                  , y = 74 * p + (p - 1) * p
                  , d = this.game[t(264)][t(408)]();
                if (this[t(321)] = new kr(this[t(327)],d,new (Phaser[t(256)])(0,0,this[t(327)][t(265)],y),{
                    direction: "y",
                    padding: 5,
                    searchForClicks: !0
                }),
                d.x = 0,
                d.y = i.y + i[t(377)] + 5,
                !CyberGlobalData[t(372)]) {
                    this[t(386)] = new jt(this[t(327)],600,12,t(274),this[t(309)] == t(384) ? "roomGroupActive" : t(258)),
                    this[t(386)].gameGroup = "beginner",
                    this[t(386)].y = this[t(327)].height - this[t(386)][t(377)] - 18,
                    this[t(386)].x = this[t(327)].width - 30 - 4 * this.beginnerButton.width,
                    this[t(386)][t(404)](CyberInstance.lang.TAP_SU, {
                        font: APP_FONT,
                        fontSize: 21,
                        fill: t(400),
                        fontWeight: 400
                    }),
                    this[t(386)][t(300)](this[t(275)], this),
                    this[t(327)][t(264)].existing(this[t(386)]),
                    this.amateurButton = new jt(this[t(327)],600,this[t(386)].y,t(274),this.currentRoomGroup == t(357) ? t(242) : t(258)),
                    this.amateurButton[t(394)] = t(357),
                    this[t(239)].x = this.beginnerButton.x + this[t(386)].width,
                    this[t(239)].addText(CyberInstance.lang.NGHIEP_DU, {
                        font: APP_FONT,
                        fontSize: 21,
                        fill: t(400),
                        fontWeight: 400
                    }),
                    this[t(239)][t(300)](this[t(275)], this),
                    this.game.add[t(235)](this[t(239)]),
                    this[t(367)] = new jt(this[t(327)],600,this[t(239)].y,t(274),this.currentRoomGroup == t(241) ? t(242) : t(258)),
                    this[t(367)][t(394)] = t(241),
                    this[t(367)].x = this[t(239)].x + this[t(239)].width - 1,
                    this[t(367)].addText(CyberInstance[t(269)][t(286)], {
                        font: APP_FONT,
                        fontSize: 21,
                        fill: t(400),
                        fontWeight: 400
                    }),
                    this[t(367)].click(this.onGroupChangeClick, this),
                    this[t(327)][t(264)].existing(this[t(367)]),
                    this[t(371)] = new jt(this.game,600,this[t(367)].y,t(274),"master" == this[t(309)] ? t(242) : "roomGroup"),
                    this[t(371)][t(394)] = t(335),
                    this[t(371)].x = this[t(367)].x + this[t(367)][t(265)] - 1,
                    this.masterButton[t(404)](CyberInstance[t(269)][t(406)], {
                        font: APP_FONT,
                        fontSize: 21,
                        fill: t(400),
                        fontWeight: 400
                    }),
                    this.masterButton.click(this[t(275)], this),
                    this.game.add[t(235)](this[t(371)]),
                    this[t(254)] = this[t(327)][t(264)][t(408)]();
                    var v = this.profileGroup[t(236)](30, 0, t(274), t(411));
                    v.y = this[t(327)][t(377)] - v[t(377)] - 5;
                    var b = this[t(327)][t(264)][t(402)](v.x + 105, v.y + 15, ie[t(358)][t(291)](), {
                        font: APP_FONT,
                        fontSize: 26,
                        fill: t(403),
                        fontWeight: 400
                    });
                    this[t(254)].add(b),
                    this.profileCoin = this.game[t(264)][t(402)](b.x, b.y + 35, h[t(373)](ie.instance[t(338)]()), {
                        font: APP_FONT,
                        fontSize: 24,
                        fill: t(330),
                        fontWeight: 400
                    }),
                    this[t(254)].add(this[t(395)]),
                    this[t(363)] = t(368) + ie[t(358)][t(352)](),
                    this[t(327)][t(278)].checkImageKey(this[t(363)]) ? (this[t(368)] = this[t(327)][t(324)][t(308)](15, 15, this[t(363)]),
                    this.applyTexture(88)) : (this.avatar = this[t(327)][t(324)][t(308)](15, 15, t(284), "no_avatar"),
                    this[t(368)][t(265)] = 88,
                    this[t(368)][t(377)] = 88,
                    this[t(327)][t(262)].image(this[t(363)], CyberInstance[t(368)]),
                    this[t(327)][t(262)].start()),
                    this[t(368)].x = v.x + 2,
                    this[t(368)].y = v.y + 2,
                    this[t(254)][t(264)](this[t(368)])
                }
                this[t(327)].world[t(398)](r),
                this[t(292)] = r,
                this[t(409)] = new no(this.game,{
                    friendMode: !1
                }),
                this[t(409)].close(),
                this[t(327)][t(281)].events.add(100, (function() {
                    s[t(304)]()
                }
                )),
                this[t(340)] = this.game[t(264)][t(402)](this[t(327)][t(265)] / 2, this[t(327)][t(377)] / 2, CyberInstance[t(269)][t(314)][t(302)](), {
                    font: APP_FONT,
                    fontSize: 30,
                    fill: "#FFFFFF",
                    fontWeight: 500
                }),
                this[t(340)][t(396)].setTo(.5),
                this[t(292)].visible = !1,
                this[t(248)][t(337)] = !1,
                this[t(261)][t(337)] = !1,
                this[t(376)].visible = !1,
                !CyberGlobalData[t(372)] && (this.beginnerButton[t(337)] = !1,
                this[t(239)][t(337)] = !1,
                this[t(367)].visible = !1,
                this[t(371)][t(337)] = !1,
                this.profileGroup[t(337)] = !1),
                this[t(327)][t(281)][t(312)][t(264)](300, (function() {
                    var e = t;
                    n[e(276)] = !0,
                    n.controller.sendSubscribeRequest(n[e(309)])
                }
                )),
                this[t(327)][t(281)][t(312)].add(600, (function() {
                    n[t(245)]()
                }
                ))
            }
        }, {
            key: "updateRoomList",
            value: function(t) {
                var n = e;
                0 == this[n(292)][n(337)] && (this[n(327)].time.events[n(350)](this[n(339)]),
                this[n(292)].visible = !0,
                this.quickJoinBtn[n(337)] = !0,
                this[n(261)][n(337)] = !0,
                this[n(376)][n(337)] = !0,
                !CyberGlobalData[n(372)] && (this[n(386)][n(337)] = !0,
                this.amateurButton[n(337)] = !0,
                this[n(367)][n(337)] = !0,
                this[n(371)][n(337)] = !0,
                this[n(254)][n(337)] = !0),
                this[n(340)].destroy());
                try {
                    if (this[n(333)][n(306)] = 0,
                    t[n(306)] > 0) {
                        this[n(333)] = t;
                        for (var r = 0; r < this.roomList[n(306)]; r++)
                            this[n(250)](this[n(333)][r])
                    }
                    this[n(255)]()
                } catch (t) {
                    console[n(246)](t),
                    this[n(255)]()
                }
            }
        }, {
            key: e(397),
            value: function(t) {
                var n = e;
                -1 != CyberInstance[n(389)].get(this[n(309)])[n(356)](t[n(273)]) && (this[n(333)][n(266)](t),
                this[n(250)](t))
            }
        }, {
            key: e(250),
            value: function(t) {
                var n = e;
                this[n(321)][n(264)](new uc(this,0,0,t))
            }
        }, {
            key: e(345),
            value: function(t, n) {
                var r = e
                  , i = this[r(321)][r(293)][r(277)](t.id);
                if (i) {
                    for (var a = 0; a < this.roomList[r(306)]; a++)
                        if (this.roomList[a].id == t.id) {
                            this.roomList[a][r(310)] = n,
                            this.roomList[a][r(249)] = n == t.maxUsers ? 1 : 0;
                            break
                        }
                    i.updateUserCount(n)
                } else {
                    if (-1 == CyberInstance[r(389)].get(this.currentRoomGroup)[r(356)](t[r(273)]))
                        return;
                    t[r(310)] < t[r(346)] && this[r(397)]({
                        id: t.id,
                        bet: t[r(370)](r(313)).value,
                        userCount: t[r(310)] > 0 ? t[r(310)] : 1,
                        maxUsers: t.maxUsers,
                        isFull: t[r(310)] == t[r(346)] ? 1 : 0,
                        groupId: t[r(273)]
                    })
                }
            }
        }, {
            key: e(317),
            value: function(t) {
                var n = e;
                if (-1 != CyberInstance.sectionMap[n(322)](this[n(309)])[n(356)](t[n(273)])) {
                    for (var r = 0; r < this[n(333)][n(306)]; r++)
                        if (this[n(333)][r].id == t.id) {
                            this[n(333)][n(360)](r, 1);
                            break
                        }
                    for (this.roomList.sort((function(t, e) {
                        var r = n;
                        return t[r(249)] - e[r(249)]
                    }
                    )),
                    this.listView.removeAll(),
                    r = 0; r < this[n(333)][n(306)]; r++)
                        this.addRoomToScroller(this[n(333)][r])
                }
            }
        }, {
            key: "onGroupChangeClick",
            value: function(t) {
                var n = e
                  , r = this;
                t[n(394)] != this[n(309)] && (this[n(321)][n(334)](),
                this[n(321)][n(405)](),
                this[n(253)]({
                    closeTimer: 15e3
                }),
                this.currentRoomGroup = t.gameGroup,
                t[n(394)] == n(384) ? (this.beginnerButton[n(407)](n(274), n(242)),
                this[n(239)][n(407)](n(274), "roomGroup"),
                this.professionalButton[n(407)](n(274), n(258)),
                this[n(371)][n(407)]("lobbyScreen", n(258))) : "amateur" == t.gameGroup ? (this[n(386)].loadTexture(n(274), n(258)),
                this[n(239)][n(407)]("lobbyScreen", n(242)),
                this[n(367)][n(407)](n(274), n(258)),
                this[n(371)][n(407)](n(274), n(258))) : t[n(394)] == n(241) ? (this[n(386)][n(407)](n(274), "roomGroup"),
                this[n(239)][n(407)](n(274), n(258)),
                this[n(367)][n(407)](n(274), "roomGroupActive"),
                this.masterButton[n(407)](n(274), n(258))) : "master" == t.gameGroup && (this.beginnerButton[n(407)]("lobbyScreen", "roomGroup"),
                this.amateurButton[n(407)](n(274), n(258)),
                this[n(367)][n(407)](n(274), n(258)),
                this[n(371)].loadTexture(n(274), "roomGroupActive")),
                this[n(327)][n(281)].events[n(264)](300, (function() {
                    var e = n;
                    r[e(305)][e(257)](t.gameGroup)
                }
                )))
            }
        }, {
            key: e(401),
            value: function() {
                var t = e;
                CyberInstance[t(319)] && (CyberInstance[t(319)] = !1),
                ie[t(358)][t(348)]() ? (this[t(253)](),
                ie.instance.sendFindGameRequest()) : M[t(344)]()
            }
        }, {
            key: e(349),
            value: function() {
                var t = e;
                this[t(409)][t(378)]()
            }
        }, {
            key: e(252),
            value: function() {
                var t = e;
                this[t(409)] && this.createGamePopup[t(410)](),
                bt[t(358)][t(279)] && ot[t(358)].inited ? this[t(327)][t(271)][t(326)](t(316), !0, !1) : Mt.instance[t(279)] && (this[t(392)] ? this[t(392)][t(378)]() : this[t(392)] = new Ai(game))
            }
        }, {
            key: "applyTexture",
            value: function(t) {
                var n = e
                  , r = new (Phaser[n(256)])(0,0,t,t)
                  , i = game[n(324)].image(0, 0, n(284), n(260));
                i.width = t,
                i[n(377)] = t;
                var a = game.make[n(285)]();
                a[n(262)](i),
                i[n(414)]();
                var o = this[n(327)][n(324)][n(285)](t, t);
                o[n(328)](this[n(363)], a, r),
                this[n(368)][n(407)](o),
                this[n(368)].width = t,
                this[n(368)].height = t
            }
        }, {
            key: e(381),
            value: function(t) {
                var n = e;
                this[n(395)] && this[n(395)][n(399)](h[n(373)](t))
            }
        }, {
            key: e(323),
            value: function() {
                var t = e;
                pc(mc(u.prototype), t(323), this)[t(238)](this),
                this.listView[t(414)](),
                this[t(392)] = null,
                this.roomList = null,
                this[t(321)] = null
            }
        }]) && lc(n[i(289)], r),
        Object[i(282)](n, i(289), {
            writable: !1
        }),
        u
    }(pe);
    function wc(t, e) {
        var n = Cc();
        return (wc = function(t, e) {
            return n[t -= 297]
        }
        )(t, e)
    }
    function Ic(t) {
        var e = wc;
        return (Ic = "function" == typeof Symbol && e(305) == typeof Symbol[e(388)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(315) == typeof Symbol && t[n(355)] === Symbol && t !== Symbol.prototype ? n(305) : typeof t
        }
        )(t)
    }
    function Sc(t, e) {
        for (var n = wc, r = 0; r < e[n(363)]; r++) {
            var i = e[r];
            i[n(361)] = i[n(361)] || !1,
            i[n(353)] = !0,
            n(369)in i && (i[n(321)] = !0),
            Object.defineProperty(t, i[n(354)], i)
        }
    }
    function Oc(t, e) {
        var n = wc;
        return (Oc = Object[n(307)] ? Object.setPrototypeOf[n(316)]() : function(t, e) {
            return t[n(346)] = e,
            t
        }
        )(t, e)
    }
    function kc(t, e) {
        var n = wc;
        if (e && ("object" === Ic(e) || typeof e === n(315)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(371));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(wc(378));
            return t
        }(t)
    }
    function Cc() {
        var t = ["3554680KpEOVk", "type", "onInputDown", "shopScreen", "40119HIDcjk", "Cannot call a class as a function", "__proto__", "#fff6dc", "clickOnce", "duration", "1ZCuYWj", " ngày", "green_button", "configurable", "key", "constructor", "BackpackScreen", "defineProperty", "construct", "addText", "sprite", "enumerable", "getAvatarItems", "length", "addCloseButton", "setText", "close", "sound", "onAction", "value", "then", "Derived constructors may only return object or undefined", "Text", "socket", "prototype", "873081iagZAt", "Bạn đã nhận được khung Avatar ", "getGiftItems", "this hasn't been initialised - super() hasn't been called", "Super expression must either be null or a function", "Kho đồ", "300846rKmNIj", "8167180NQTMZM", "2336165ojJihv", "addOverlay", "addBackground", "name", "undefined", "iterator", "anchor", "defaultAvatarId", "shop.setDefaultAvatar", "playButtonSound", "972674kpUXNW", "start", "AVATAR", "hideTransition", "symbol", "addContent", "setPrototypeOf", "scale", "ExtensionRequest", "SFSObject", "GIFT", "make", "Dùng ngay", "add", "function", "bind", "game", "apply", "background", "28tOYjiW", "writable", "Bạn đã nhận được quà tặng ", "7bbkzVd", "width", "call", "buy_gift_button", "getPrototypeOf", "#f5c78a", "state", "player", "text", "addChild", "setTo", "#692700", "buyresultbg", "height", "icon", "image", "setDataAsync"];
        return (Cc = function() {
            return t
        }
        )()
    }
    function Pc(t) {
        var e = wc;
        return (Pc = Object.setPrototypeOf ? Object[e(327)].bind() : function(t) {
            var n = e;
            return t[n(346)] || Object[n(327)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = wc, r = t(); ; )
            try {
                if (253944 == parseInt(n(350)) / 1 * (-parseInt(n(301)) / 2) + -parseInt(n(344)) / 3 * (-parseInt(n(320)) / 4) + -parseInt(n(383)) / 5 + -parseInt(n(381)) / 6 + -parseInt(n(323)) / 7 * (-parseInt(n(340)) / 8) + -parseInt(n(375)) / 9 + parseInt(n(382)) / 10)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Cc);
    const Tc = function(t) {
        var e = wc;
        !function(t, e) {
            var n = wc;
            if (typeof e !== n(315) && null !== e)
                throw new TypeError(n(379));
            t[n(374)] = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(357)](t, "prototype", {
                writable: !1
            }),
            e && Oc(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = wc;
            if (typeof Reflect === t(387) || !Reflect[t(358)])
                return !1;
            if (Reflect[t(358)].sham)
                return !1;
            if (typeof Proxy === t(315))
                return !0;
            try {
                return Boolean[t(374)].valueOf[t(325)](Reflect[t(358)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = wc, n = Pc(a);
            if (o) {
                var r = Pc(this).constructor;
                t = Reflect.construct(n, arguments, r)
            } else
                t = n[e(318)](this, arguments);
            return kc(this, t)
        }
        );
        function c(t, e) {
            var n, r = wc;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(wc(345))
            }(this, c),
            (n = s.call(this, t, e))[r(384)](.85),
            n[r(385)](r(343), r(335)),
            n.addContent(e),
            n[r(364)](),
            !0 !== e[r(304)] && n.createTransition(),
            n
        }
        return n = c,
        i = wc,
        (r = [{
            key: e(368),
            value: function() {
                var t = e;
                CyberInstance[t(367)][t(300)](),
                this[t(366)]()
            }
        }, {
            key: e(306),
            value: function(t) {
                var n, r = e, i = this;
                "GIFT" == t[r(341)] ? n = ot[r(377)]()[t.id + ""] : "AVATAR" == t[r(341)] && (n = ot[r(362)]()[t.id + ""]);
                var a = this.game[r(312)].sprite(0, 0, r(343), "gift_item")
                  , o = this[r(317)].make[r(331)](a.width / 2, 11, n[r(386)], {
                    font: APP_FONT,
                    fontWeight: 400,
                    fontSize: 19,
                    fill: "#f5a3b1"
                });
                o[r(297)][r(333)](.5, 0),
                a[r(332)](o);
                var s = this.game[r(312)][r(338)](a[r(324)] / 2, a[r(336)] / 2 - 10, "shopScreen", n[r(337)]);
                15 == n.id ? s.scale[r(333)](.7) : 17 == n.id && s[r(308)][r(333)](.85),
                s.anchor.setTo(.5),
                a[r(332)](s);
                var c, u = new (Phaser[r(372)])(this[r(317)],a[r(324)] / 2,164,"",{
                    font: APP_FONT,
                    fontWeight: 500,
                    fontSize: 18,
                    fill: r(328)
                });
                u.anchor.setTo(.5, 0),
                a[r(332)](u),
                "GIFT" == t[r(341)] ? u.setText("x" + t.quantity) : u[r(365)](t[r(349)] + r(351)),
                a.x = this[r(319)].width / 2 - a.width / 2 + 17,
                a.y = this[r(319)][r(336)] / 2 - a.height / 2,
                this[r(319)][r(332)](a),
                t.type == r(311) ? c = r(322) + n[r(386)] + "!" : t[r(341)] == r(303) && (c = r(376) + n.name + "!");
                var h = this[r(317)][r(312)].text(this[r(319)].width / 2 + 17, a.y + a[r(336)] + 20, c, {
                    font: APP_FONT,
                    fontWeight: 400,
                    fontSize: 22,
                    fill: r(347)
                });
                h[r(297)][r(333)](.5, 0),
                this[r(319)][r(332)](h);
                var l = new jt(this[r(317)],410,h.y + 50,r(343),r(352));
                if (l[r(359)](r(380)),
                l[r(348)]((function() {
                    var t = r;
                    i[t(317)][t(329)][t(302)](t(356), !0, !1)
                }
                )),
                this[r(319)][r(332)](l),
                "GIFT" == t[r(341)])
                    l.x = this[r(319)][r(324)] / 2 + 17 - l[r(324)] / 2;
                else {
                    var f = new jt(this[r(317)],121,h.y + 50,"shopScreen",r(326));
                    f.addText(r(313), {
                        font: APP_FONT,
                        fill: r(334),
                        fontWeight: 400,
                        fontSize: 24
                    }),
                    f[r(348)]((function() {
                        var t = r;
                        FBInstant[t(330)][t(339)]({
                            avatar: n.id
                        })[t(370)]((function() {
                            var e = t;
                            CyberGlobalData[e(298)] = n.id;
                            var r = new (SFS2X[e(310)]);
                            r.putInt("id", CyberGlobalData[e(298)]),
                            CyberInstance[e(373)].send(new (SFS2X[e(309)])(e(299),r))
                        }
                        )),
                        i[t(366)]()
                    }
                    )),
                    this[r(319)][r(332)](f)
                }
            }
        }, {
            key: e(364),
            value: function() {
                var t = e
                  , n = this
                  , r = this[t(317)][t(312)][t(360)](0, 50, t(343), "close_icon");
                r.x = this[t(317)][t(324)] - r.width - 50,
                r.inputEnabled = !0,
                r.events[t(342)].addOnce((function() {
                    var e = t;
                    CyberInstance.sound[e(300)](),
                    n[e(366)]()
                }
                ), this),
                this[t(314)](r)
            }
        }]) && Sc(n[i(374)], r),
        Object.defineProperty(n, i(374), {
            writable: !1
        }),
        c
    }(_);
    function xc(t, e) {
        for (var n = jc, r = 0; r < e[n(171)]; r++) {
            var i = e[r];
            i[n(168)] = i[n(168)] || !1,
            i[n(149)] = !0,
            n(191)in i && (i[n(170)] = !0),
            Object[n(186)](t, i.key, i)
        }
    }
    function _c() {
        var t = ["prototype", "onExtensionResponse", "success", "9078138IwWZAT", "onBuyGift", "quantity", "3905608aMErvF", "params", "enumerable", "CLOSE", "writable", "length", "lang", "BUY_GIFT", "SFSEvent", "instance", "getVariable", "onAdReward", "sfs", "Cannot call a class as a function", "Bạn không đủ chip!", "addEventListener", "isItMe", "GIFT", "onReward", "changedVars", "defineProperty", "updateProfileCoin", "onWatchEmo", "BUY_AVATAR", "containsKey", "value", "type", "2633981YEwkCa", "EXTENSION_RESPONSE", "screen", "830gVqeAR", "shop.buyGift", "6ZxqVIT", "2036007HdXlGV", "cmd", "130205gTWspI", "user", "getInt", "onUserVariablesUpdate", "899000VMUHTL", "coin", "BUY_EMO", "shop.watchEmo", "emoContent", "configurable", "onWatchGift", "10812YoTurj", "shop.watchAvatar", "closeLoadingPopup", "USER_VARIABLES_UPDATE", "indexOf", "avatarContent", "onWatchAvatar", "screenReady", "giftContent"];
        return (_c = function() {
            return t
        }
        )()
    }
    function jc(t, e) {
        var n = _c();
        return (jc = function(t, e) {
            return n[t -= 137]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = jc, r = t(); ; )
            try {
                if (472566 == parseInt(n(140)) / 1 * (parseInt(n(137)) / 2) + parseInt(n(138)) / 3 + parseInt(n(144)) / 4 + parseInt(n(196)) / 5 * (parseInt(n(151)) / 6) + parseInt(n(193)) / 7 + -parseInt(n(166)) / 8 + -parseInt(n(163)) / 9)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(_c);
    const Rc = function() {
        var t, e, n, r = jc;
        function i(t) {
            var e = jc;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(jc(179))
            }
            )(this, i),
            this[e(195)] = t,
            this[e(178)] = CyberInstance.socket,
            this.sfs[e(181)](SFS2X[e(174)][e(194)], this.onExtensionResponse, this),
            this[e(178)][e(181)](SFS2X.SFSEvent[e(154)], this[e(143)], this),
            Mt[e(175)][e(184)].add(this[e(177)], this)
        }
        return t = i,
        n = jc,
        (e = [{
            key: r(161),
            value: function(t) {
                var e = r;
                this[e(158)]() && (t[e(139)] == e(197) ? this[e(164)](t[e(167)]) : "shop.watchGift" == t[e(139)] ? this[e(150)](t[e(167)]) : t[e(139)] == e(152) ? this[e(157)](t[e(167)]) : t.cmd == e(147) && this[e(188)](t[e(167)]))
            }
        }, {
            key: r(164),
            value: function(t) {
                var e = r;
                if (this[e(195)][e(153)](),
                t[e(190)](e(162))) {
                    var n = t[e(142)]("id")
                      , i = t[e(142)](e(165));
                    ot[e(175)].updateGift(n, i),
                    new Tc(game,{
                        type: e(183),
                        id: n,
                        quantity: i
                    })
                } else
                    new M(game,{
                        text: e(180),
                        buttonText: CyberInstance[e(172)][e(169)],
                        hideCloseButton: !0
                    })
            }
        }, {
            key: r(150),
            value: function(t) {
                var e = r;
                this[e(195)].closeLoadingPopup(),
                this.screen[e(159)][e(150)](t)
            }
        }, {
            key: r(157),
            value: function(t) {
                var e = r;
                this[e(195)].closeLoadingPopup(),
                this[e(195)][e(156)][e(157)](t)
            }
        }, {
            key: r(188),
            value: function(t) {
                var e = r;
                this[e(195)][e(153)](),
                this[e(195)][e(148)][e(188)](t)
            }
        }, {
            key: "onAdReward",
            value: function(t) {
                var e = r;
                t[e(192)] == Mt[e(173)] ? this[e(195)][e(159)].onAdReward() : t[e(192)] == Mt[e(189)] ? this.screen[e(156)].onAdReward() : t[e(192)] == Mt[e(146)] && this.screen.emoContent.onAdReward()
            }
        }, {
            key: r(143),
            value: function(t) {
                var e = r;
                t[e(141)][e(182)] && this[e(158)]() && -1 != t[e(185)][e(155)]("coin") && this[e(195)][e(187)](t.user[e(176)](e(145))[e(191)])
            }
        }, {
            key: r(158),
            value: function() {
                return this[r(195)].screenReady
            }
        }]) && xc(t[n(160)], e),
        Object[n(186)](t, n(160), {
            writable: !1
        }),
        i
    }();
    function Ec(t) {
        var e = Gc;
        return (Ec = e(384) == typeof Symbol && e(412) == typeof Symbol[e(356)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(384) == typeof Symbol && t[n(378)] === Symbol && t !== Symbol[n(365)] ? "symbol" : typeof t
        }
        )(t)
    }
    function Bc(t, e) {
        for (var n = Gc, r = 0; r < e.length; r++) {
            var i = e[r];
            i[n(347)] = i[n(347)] || !1,
            i[n(348)] = !0,
            n(398)in i && (i[n(368)] = !0),
            Object[n(331)](t, i[n(367)], i)
        }
    }
    function Ac() {
        var t = Gc;
        return Ac = "undefined" != typeof Reflect && Reflect[t(401)] ? Reflect.get[t(415)]() : function(e, n, r) {
            var i = t
              , a = Dc(e, n);
            if (a) {
                var o = Object[i(390)](a, n);
                return o[i(401)] ? o[i(401)].call(arguments[i(359)] < 3 ? e : r) : o[i(398)]
            }
        }
        ,
        Ac.apply(this, arguments)
    }
    function Dc(t, e) {
        for (var n = Gc; !Object[n(365)].hasOwnProperty.call(t, e) && null !== (t = Mc(t)); )
            ;
        return t
    }
    function Fc(t, e) {
        var n = Gc;
        return (Fc = Object[n(351)] ? Object.setPrototypeOf[n(415)]() : function(t, e) {
            return t[n(414)] = e,
            t
        }
        )(t, e)
    }
    function Nc(t, e) {
        var n = Gc;
        if (e && ("object" === Ec(e) || typeof e === n(384)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(329));
        return Lc(t)
    }
    function Lc(t) {
        if (void 0 === t)
            throw new ReferenceError(Gc(407));
        return t
    }
    function Gc(t, e) {
        var n = Wc();
        return (Gc = function(t, e) {
            return n[t -= 329]
        }
        )(t, e)
    }
    function Mc(t) {
        var e = Gc;
        return (Mc = Object[e(351)] ? Object.getPrototypeOf.bind() : function(t) {
            var n = e;
            return t[n(414)] || Object[n(353)](t)
        }
        )(t)
    }
    function Wc() {
        var t = ["9svbAqL", "isConsumed", "3085068uDmuWB", "9_99", "click", "Text", "constructor", "507885rLartx", "error", "instance", "verifyPayment", "PAYMENT_SUCCESS", "function", "image", "Cannot call a class as a function", "purchase", "game", "percent50", "getOwnPropertyDescriptor", "closeLoadingPopup", "valueOf", "make", "234110QlFFqw", "productID", "remove", "getDeveloperPayload", "value", "openLoadingPopup", "39250fHFDGd", "get", "1918536trksnw", "close", "4ysQovW", "chip_icon", "getPromoMap", "this hasn't been initialised - super() hasn't been called", "anchor", "undefined", "formatCoinWithCommas", "height", "symbol", "round", "__proto__", "bind", "chip_item", "7yTglMF", "Derived constructors may only return object or undefined", "replace", "defineProperty", "create", "width", "errorMsg", "percent100", "font_undercenter", "construct", "CLOSE", "addChild", "getPromotion", "buy_button", "italic", "then", "add", "lang", "products", "enumerable", "configurable", "setTo", "addText", "setPrototypeOf", "loadingPopup", "getPrototypeOf", "shopScreen", "restore", "iterator", "call", "366180UkJqPr", "length", "addItem", "onPurchaseProduct", "chip", "#f5c78a", "price", "prototype", "destroy", "key", "writable", "getDuration", "onBuyClick", "2856360dQLYKW"];
        return (Wc = function() {
            return t
        }
        )()
    }
    !function(t, e) {
        for (var n = Gc, r = t(); ; )
            try {
                if (257793 == parseInt(n(417)) / 1 * (-parseInt(n(400)) / 2) + parseInt(n(379)) / 3 * (parseInt(n(404)) / 4) + -parseInt(n(394)) / 5 + parseInt(n(402)) / 6 + -parseInt(n(374)) / 7 + -parseInt(n(371)) / 8 * (-parseInt(n(372)) / 9) + parseInt(n(358)) / 10)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Wc);
    const zc = function(t) {
        var e = Gc;
        !function(t, e) {
            var n = Gc;
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t[n(365)] = Object[n(332)](e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, n(365), {
                writable: !1
            }),
            e && Fc(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = Gc;
            if (typeof Reflect === t(409) || !Reflect[t(337)])
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean[t(365)][t(392)][t(357)](Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Gc, n = Mc(a);
            if (o) {
                var r = Mc(this).constructor;
                t = Reflect[e(337)](n, arguments, r)
            } else
                t = n.apply(this, arguments);
            return Nc(this, t)
        }
        );
        function c(t, e, n) {
            var r, i = Gc;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Gc(386))
            }
            )(this, c),
            r = s[i(357)](this, t);
            var a = e
              , o = n
              , u = 0;
            for (var h in bt[i(381)][i(346)])
                4 == u && (a = e,
                o = o + 210 + 5),
                u++,
                a = a + r[i(360)](bt[i(381)][i(346)][h], a, o, i(405) + u)[i(333)] + 26;
            return bt[i(381)].onPurchaseProduct[i(344)](r[i(361)], Lc(r)),
            bt[i(381)].inited && FBInstant.payments.getPurchasesAsync()[i(343)]((function(t) {
                var e = i;
                if (t[e(359)] > 0)
                    for (var n = 0; n < t[e(359)]; n++)
                        if (0 == t[n][e(373)]) {
                            r[e(355)](t[n]);
                            break
                        }
            }
            )),
            r
        }
        return n = c,
        i = Gc,
        (r = [{
            key: "onPurchaseProduct",
            value: function(t) {
                var e = Gc;
                if (this[e(391)](),
                t[e(380)])
                    new M(game,{
                        text: t[e(334)],
                        buttonText: CyberInstance[e(345)][e(338)],
                        hideCloseButton: !0
                    });
                else {
                    var n = CyberInstance[e(345)][e(383)][e(330)]("%s", h[e(410)](t.coin));
                    new M(game,{
                        text: n,
                        buttonText: CyberInstance[e(345)][e(338)],
                        hideCloseButton: !0
                    })
                }
            }
        }, {
            key: "onBuyClick",
            value: function(t) {
                var e = Gc;
                this[e(399)](),
                bt[e(381)][e(387)](t[e(395)] + "", CyberInstance[e(397)]())
            }
        }, {
            key: e(355),
            value: function(t) {
                var n = e;
                this.openLoadingPopup(),
                bt[n(381)][n(382)](t)
            }
        }, {
            key: e(366),
            value: function() {
                var t = e;
                Ac(Mc(c.prototype), t(366), this).call(this),
                bt[t(381)][t(361)][t(396)](this[t(361)], this)
            }
        }, {
            key: e(360),
            value: function(t, n, r, i) {
                var a = e
                  , o = this.create(n, r, a(354), a(416))
                  , s = this[a(388)][a(393)].image(o.width / 2, o[a(411)] / 2 - 15, a(354), i);
                s[a(408)][a(349)](.5),
                o[a(339)](s);
                var c = 0
                  , u = t[a(362)]
                  , l = bt[a(381)][a(340)]();
                if (l && l[a(369)]() > 0 && (c = l[a(406)]()[a(401)](t[a(395)])) && c > 0) {
                    var f = Math[a(413)](t.chip * c / 100);
                    u = t[a(362)] + f
                }
                var p = new (Phaser[a(377)])(this[a(388)],o[a(333)] / 2,9,h[a(410)](u),{
                    font: APP_FONT,
                    fontWeight: 400,
                    fontSize: 22,
                    fill: a(363)
                });
                if (p.anchor.setTo(.5, 0),
                o[a(339)](p),
                c && c > 0) {
                    var y = new (Phaser[a(377)])(this.game,o[a(333)] - 20,45,h[a(410)](t[a(362)]),{
                        font: APP_FONT,
                        fontWeight: 400,
                        fontSize: 16,
                        fill: "#f8e1d6",
                        fontStyle: a(342)
                    });
                    y[a(408)][a(349)](1, 0),
                    o[a(339)](y);
                    var d = this[a(388)].make[a(385)](o.width - 20, 53, a(354), a(336));
                    y[a(333)] > 0 && (d.width = y.width),
                    d.anchor[a(349)](1, 0),
                    o[a(339)](d)
                }
                if (c)
                    if (100 == c) {
                        var v = this[a(388)].make.image(-20, 20, a(354), a(335));
                        o[a(339)](v),
                        t.productID == a(375) && (s.y = o.height / 2 - 10)
                    } else if (50 == c) {
                        var b = this[a(388)][a(393)][a(385)](-20, 20, a(354), a(389));
                        o.addChild(b),
                        "9_99" == t[a(395)] && (s.y = o[a(411)] / 2 - 10)
                    }
                var m = new jt(this[a(388)],0,0,"shopScreen",a(341));
                return m[a(350)](t[a(364)], {
                    font: APP_FONT,
                    fontWeight: 500,
                    fontSize: 21,
                    fill: "#692700"
                }),
                m.x = o[a(333)] / 2 - m[a(333)] / 2,
                m.y = o.height - m[a(411)] - 20,
                m.inputEnabled = !0,
                m[a(395)] = t.productID,
                m[a(376)](this[a(370)], this),
                o.addChild(m),
                o
            }
        }, {
            key: e(399),
            value: function(t) {
                var n = e;
                this[n(352)] = new g(game,t),
                this[n(352)].open()
            }
        }, {
            key: e(391),
            value: function() {
                var t = e;
                this[t(352)] && (this[t(352)][t(403)](),
                this[t(352)] = null)
            }
        }]) && Bc(n[i(365)], r),
        Object[i(331)](n, i(365), {
            writable: !1
        }),
        c
    }(Phaser.Group);
    function Uc() {
        var t = ["events", "width", "this hasn't been initialised - super() hasn't been called", "inputEnabled", "apply", "value", "6921ykIAVM", "close", "callback", "writable", "function", "bind", "key", "705744UmVvHQ", "Cannot call a class as a function", "configurable", "toUpperCase", "sham", "Super expression must either be null or a function", "normal", "addOnce", "symbol", "bold", "make", "button_close", "add", "333924jIUzTC", "game", "269776eaZxFz", "scale", "create", "hideCloseButton", "valueOf", "setPrototypeOf", "onAction", "prototype", "sprite", "closeButton", "button_green_197x64", "actionId", "addContent", "166666JkrLlC", "addBackground", "lang", "anchor", "bg_popup_medium_484x292", "addCloseButton", "hideTransition", "#ebdac0", "getPrototypeOf", "addTitle", "1528940dvPPbk", "296658nMFZrY", "image", "defineProperty", "iterator", "height", "homeScreen", "playButtonSound", "__proto__", "call", "THONG_BAO", "construct", "Derived constructors may only return object or undefined", "object", "addChild", "quantity", "enumerable", "addButton", "setTo", "#f59eac", "constructor", "buttonText", "createTransition", "sound", "length", "addOverlay", "background", "onInputDown", "text", "3936vIcqXY", "10ZfQecf"];
        return (Uc = function() {
            return t
        }
        )()
    }
    function Vc(t) {
        var e = Kc;
        return (Vc = e(267) == typeof Symbol && "symbol" == typeof Symbol[e(230)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(267) == typeof Symbol && t[n(246)] === Symbol && t !== Symbol[n(210)] ? n(196) : typeof t
        }
        )(t)
    }
    function Hc(t, e) {
        for (var n = Kc, r = 0; r < e[n(250)]; r++) {
            var i = e[r];
            i[n(242)] = i[n(242)] || !1,
            i[n(272)] = !0,
            n(262)in i && (i[n(266)] = !0),
            Object[n(229)](t, i[n(269)], i)
        }
    }
    function Xc(t, e) {
        var n = Kc;
        return (Xc = Object[n(208)] ? Object[n(208)].bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function Yc(t, e) {
        var n = Kc;
        if (e && (Vc(e) === n(239) || typeof e === n(267)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(238));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(Kc(259));
            return t
        }(t)
    }
    function qc(t) {
        var e = Kc;
        return (qc = Object.setPrototypeOf ? Object.getPrototypeOf[e(268)]() : function(t) {
            var n = e;
            return t[n(234)] || Object[n(224)](t)
        }
        )(t)
    }
    function Kc(t, e) {
        var n = Uc();
        return (Kc = function(t, e) {
            return n[t -= 194]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = Kc, r = t(); ; )
            try {
                if (140300 == parseInt(n(203)) / 1 + parseInt(n(216)) / 2 + -parseInt(n(270)) / 3 + parseInt(n(201)) / 4 + -parseInt(n(256)) / 5 * (-parseInt(n(227)) / 6) + parseInt(n(226)) / 7 + -parseInt(n(255)) / 8 * (parseInt(n(263)) / 9))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Uc);
    const Jc = function(t) {
        var e = Kc;
        !function(t, e) {
            var n = Kc;
            if ("function" != typeof e && null !== e)
                throw new TypeError(n(275));
            t[n(210)] = Object[n(205)](e && e[n(210)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(229)](t, "prototype", {
                writable: !1
            }),
            e && Xc(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = Kc;
            if ("undefined" == typeof Reflect || !Reflect[t(237)])
                return !1;
            if (Reflect[t(237)][t(274)])
                return !1;
            if (typeof Proxy === t(267))
                return !0;
            try {
                return Boolean.prototype[t(207)][t(235)](Reflect[t(237)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Kc, n = qc(a);
            if (o) {
                var r = qc(this)[e(246)];
                t = Reflect.construct(n, arguments, r)
            } else
                t = n[e(261)](this, arguments);
            return Yc(this, t)
        }
        );
        function c(t, e) {
            var n, r = Kc;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Kc(271))
            }(this, c),
            (n = s.call(this, t, e))[r(251)](),
            n[r(217)](r(232), r(220)),
            n[r(225)](),
            n[r(215)](e[r(254)], e.icon, e.id, e[r(241)]),
            n.addButton(e),
            e[r(206)] || n[r(221)](),
            !0 !== e[r(222)] && n[r(248)](),
            n
        }
        return n = c,
        i = Kc,
        (r = [{
            key: e(243),
            value: function(t) {
                var n = e
                  , r = this[n(202)][n(198)].sprite(0, 0, n(232), n(213));
                r.x = this[n(252)].width / 2 - r[n(258)] / 2,
                r.y = this.background.height - r.height - 15,
                this.background[n(240)](r);
                var i = this[n(202)].add.text(r[n(258)] / 2, r[n(231)] / 2, t[n(247)], {
                    font: APP_FONT,
                    fontSize: 24,
                    fill: "#ffffff",
                    fontWeight: n(194)
                });
                i[n(219)].setTo(.5),
                r[n(240)](i),
                t[n(214)] && (r[n(214)] = t[n(214)]),
                r[n(260)] = !0,
                t[n(265)] && r.events[n(253)].addOnce(t[n(265)], t.context),
                r[n(257)][n(253)][n(195)](this[n(209)], this)
            }
        }, {
            key: e(209),
            value: function() {
                var t = e;
                CyberInstance.sound[t(233)](),
                this.close()
            }
        }, {
            key: e(215),
            value: function(t, n, r, i) {
                var a = e
                  , o = this[a(202)][a(200)][a(254)](this.background[a(258)] / 2, 65, t, {
                    font: APP_FONT,
                    fontSize: 22,
                    fill: a(245),
                    fontWeight: 400
                });
                o[a(219)][a(244)](.5, 0),
                this[a(252)][a(240)](o);
                var s = this[a(202)][a(198)][a(228)](this[a(252)][a(258)] / 2, 148, "shopScreen", n);
                if (15 == r ? s[a(204)][a(244)](.7) : 17 == r && s[a(204)].setTo(.8),
                s[a(219)][a(244)](0, .5),
                s.x = this[a(252)][a(258)] / 2 - s.width / 2,
                this.background[a(240)](s),
                i > 1) {
                    var c = this[a(202)].add[a(254)](s.x + s[a(258)] + 20, 148, "x" + i, {
                        font: APP_FONT,
                        fontSize: 26,
                        fill: "#f59eac",
                        fontWeight: 400
                    });
                    c[a(219)][a(244)](0, .5),
                    this[a(252)][a(240)](c)
                }
            }
        }, {
            key: "addTitle",
            value: function() {
                var t = e
                  , n = this[t(202)][t(200)][t(254)](this[t(252)][t(258)] / 2, 13, CyberInstance[t(218)][t(236)][t(273)](), {
                    font: APP_FONT,
                    fontSize: 30,
                    fill: t(223),
                    fontWeight: t(197)
                });
                n.anchor[t(244)](.5, 0),
                this[t(252)][t(240)](n)
            }
        }, {
            key: "addCloseButton",
            value: function() {
                var t = e
                  , n = this
                  , r = this[t(202)].make[t(211)](0, 0, t(232), t(199));
                r.x = this.background[t(258)] - r[t(258)] / 2 - 10,
                r.y = -12,
                r[t(260)] = !0,
                r[t(257)].onInputDown[t(195)]((function() {
                    var e = t;
                    CyberInstance[e(249)][e(233)](),
                    n[e(264)]()
                }
                ), this),
                this[t(212)] = r,
                this[t(252)][t(240)](this[t(212)])
            }
        }]) && Hc(n.prototype, r),
        Object[i(229)](n, i(210), {
            writable: !1
        }),
        c
    }(_);
    function Qc(t) {
        var e = $c;
        return (Qc = e(412) == typeof Symbol && e(378) == typeof Symbol[e(382)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(412) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(442)] ? "symbol" : typeof t
        }
        )(t)
    }
    function Zc(t, e) {
        for (var n = $c, r = 0; r < e[n(345)]; r++) {
            var i = e[r];
            i[n(365)] = i[n(365)] || !1,
            i[n(358)] = !0,
            "value"in i && (i[n(432)] = !0),
            Object[n(450)](t, i[n(440)], i)
        }
    }
    function $c(t, e) {
        var n = uu();
        return ($c = function(t, e) {
            return n[t -= 334]
        }
        )(t, e)
    }
    function tu() {
        var t = $c;
        return tu = "undefined" != typeof Reflect && Reflect[t(437)] ? Reflect[t(437)][t(469)]() : function(e, n, r) {
            var i = t
              , a = eu(e, n);
            if (a) {
                var o = Object[i(476)](a, n);
                return o.get ? o[i(437)][i(390)](arguments[i(345)] < 3 ? e : r) : o[i(397)]
            }
        }
        ,
        tu[t(339)](this, arguments)
    }
    function eu(t, e) {
        for (var n = $c; !Object.prototype[n(406)][n(390)](t, e) && null !== (t = au(t)); )
            ;
        return t
    }
    function nu(t, e) {
        var n = $c;
        return (nu = Object[n(428)] ? Object[n(428)].bind() : function(t, e) {
            return t[n(454)] = e,
            t
        }
        )(t, e)
    }
    function ru(t, e) {
        var n = $c;
        if (e && (Qc(e) === n(364) || typeof e === n(412)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(477));
        return iu(t)
    }
    function iu(t) {
        if (void 0 === t)
            throw new ReferenceError($c(443));
        return t
    }
    function au(t) {
        var e = $c;
        return (au = Object[e(428)] ? Object[e(472)].bind() : function(t) {
            var n = e;
            return t.__proto__ || Object[n(472)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = $c, r = t(); ; )
            try {
                if (403007 == -parseInt(n(458)) / 1 * (-parseInt(n(447)) / 2) + parseInt(n(446)) / 3 * (parseInt(n(384)) / 4) + parseInt(n(352)) / 5 * (parseInt(n(439)) / 6) + -parseInt(n(356)) / 7 * (parseInt(n(452)) / 8) + parseInt(n(340)) / 9 * (-parseInt(n(473)) / 10) + -parseInt(n(403)) / 11 * (parseInt(n(359)) / 12) + parseInt(n(466)) / 13 * (parseInt(n(371)) / 14))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(uu);
    var ou = null
      , su = 12;
    const cu = function(t) {
        var e = $c;
        !function(t, e) {
            var n = $c;
            if (typeof e !== n(412) && null !== e)
                throw new TypeError(n(404));
            t[n(442)] = Object[n(346)](e && e[n(442)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(450)](t, n(442), {
                writable: !1
            }),
            e && nu(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = $c;
            if (typeof Reflect === t(424) || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean[t(442)][t(427)][t(390)](Reflect[t(400)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = $c, n = au(a);
            if (o) {
                var r = au(this).constructor;
                t = Reflect[e(400)](n, arguments, r)
            } else
                t = n[e(339)](this, arguments);
            return ru(this, t)
        }
        );
        function c(t, e, n, r) {
            var i, a = $c;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError($c(376))
            }
            )(this, c),
            (i = s[a(390)](this, t))[a(435)] = r;
            var o = e
              , u = n;
            for (var h in i[a(399)] = new Ar({
                x: o,
                y: u,
                column: 4,
                width: 638,
                height: 434,
                rowHeight: 213,
                columnWidth: 155,
                row: 1,
                leftDistance: 0,
                rightDistance: 0,
                distanceBetweenColumns: 6,
                distanceBetweenRows: 4,
                direction: "y"
            },i[a(366)]),
            i[a(341)](i[a(399)]),
            null == ou && (ou = ot[a(463)]()),
            i.giftItems = [],
            ou)
                i[a(357)][a(408)](i[a(348)](ou[h]));
            i.listView[a(396)] = i[a(357)],
            i[a(351)] = a(388) + ie[a(344)].getGuserid(),
            i[a(366)][a(385)].checkImageKey(i[a(351)]) ? (i.avatar = i[a(366)][a(347)].image(57, 40, i[a(351)]),
            i[a(409)](116)) : (i[a(388)] = i[a(366)].make[a(418)](57, 40, "shopScreen", a(353)),
            i.avatar[a(415)] = 116,
            i[a(388)].height = 116),
            i.avatar.x = i.screen[a(470)].x + i[a(388)].x,
            i[a(388)].y = i[a(435)][a(470)].y + i[a(388)].y,
            i.add(i[a(388)]),
            i[a(411)] = new (Phaser[a(449)])(i[a(366)],i[a(388)].x + i[a(388)][a(415)] / 2,i[a(388)].y + i.avatar.width + 30,"",{
                font: APP_FONT,
                fontWeight: 400,
                fontSize: 24,
                fill: a(363)
            }),
            i.selectedName[a(368)][a(455)](.5, 0),
            i[a(341)](i.selectedName),
            i[a(430)] = i[a(366)].make.image(i[a(388)].x + i[a(388)][a(415)] / 2, i[a(388)].y + i[a(388)][a(415)] / 2, "shopScreen", "no_avatar"),
            i[a(430)][a(368)][a(455)](.5),
            i[a(341)](i.selectedItem);
            var l = i[a(366)].make.image(i[a(388)].x + i[a(388)][a(415)] / 2, i[a(411)].y + 70, "shopScreen", a(377));
            l.anchor[a(455)](.5, 0),
            i.add(l);
            var f = new jt(i[a(366)],0,l.y - 1,a(360),a(462));
            f.disableTimeout = !0,
            f.x = l.x - l[a(415)] / 2 - 10,
            f.click(i[a(374)], iu(i)),
            i[a(341)](f);
            var p = new jt(i.game,0,l.y - 1,a(360),a(417));
            return p[a(355)] = !0,
            p.x = l.x + p[a(415)] / 2 + p[a(415)] / 2,
            p[a(381)](i.onIncAmount, iu(i)),
            i[a(341)](p),
            i[a(350)] = new Phaser.Text(i[a(366)],i[a(388)].x + i[a(388)].width / 2 - 3,l.y + l[a(459)] / 2,1,{
                font: APP_FONT,
                fontWeight: 700,
                fontSize: 24,
                fill: a(363)
            }),
            i.textAmount[a(368)][a(455)](.5),
            i[a(341)](i[a(350)]),
            i[a(369)] = i.game.make[a(444)](0, l.y + 75, "", {
                font: APP_FONT,
                fontWeight: 500,
                fontSize: 20,
                fill: a(343)
            }),
            i[a(341)](i.chipText),
            i.chipIcon = i[a(366)][a(347)][a(418)](0, l.y + 73, a(360), a(478)),
            i.add(i[a(423)]),
            i[a(349)] = new jt(i[a(366)],0,0,a(360),"buy_button"),
            i[a(349)][a(461)](a(464), {
                font: APP_FONT,
                fontWeight: 700,
                fontSize: 22,
                fill: a(431)
            }),
            i.buyButton.x = i.avatar.x + i[a(388)][a(415)] / 2 - 5 - i[a(349)][a(415)] / 2,
            i.buyButton.y = i[a(435)][a(470)].y + i[a(435)][a(470)][a(459)] - i[a(349)].height - 20,
            i.add(i.buyButton),
            i[a(349)].click(i[a(383)], iu(i)),
            i[a(342)] = i[a(366)][a(347)][a(418)](i[a(388)].x + i[a(388)][a(415)] / 2 - 5, i.selectedName.y + 100, a(360), a(342)),
            i[a(342)].anchor[a(455)](.5),
            i[a(341)](i[a(342)]),
            i.watch_gift_desc_text = new (Phaser[a(449)])(i[a(366)],0,0,"",{
                font: APP_FONT,
                fontWeight: 400,
                fontSize: 17,
                fill: a(363),
                align: a(456)
            }),
            i[a(405)][a(368)].setTo(.5),
            i.watch_gift_desc.addChild(i[a(405)]),
            i.watchButton = new jt(i.game,i[a(388)].x + i[a(388)][a(415)] / 2 - 5,0,a(360),a(334)),
            i[a(401)][a(368)][a(455)](.5, 0),
            i[a(401)].y = i[a(435)][a(470)].y + i[a(435)].rightBg[a(459)] - i.watchButton[a(459)] - 20,
            i.watchButton[a(381)](i.onWatchClick, iu(i)),
            i[a(341)](i[a(401)]),
            i[a(471)] = l,
            i[a(391)] = f,
            i[a(379)] = p,
            i[a(386)](su),
            i
        }
        return n = c,
        i = $c,
        (r = [{
            key: e(436),
            value: function() {
                var t = e;
                Mt[t(344)].ready ? Mt[t(344)].show(Mt[t(375)]) : new M(game,{
                    text: CyberInstance[t(387)][t(354)],
                    buttonText: CyberInstance[t(387)][t(394)],
                    hideCloseButton: !0
                })
            }
        }, {
            key: e(465),
            value: function() {
                var t = e
                  , n = new (SFS2X[t(402)]);
                n.putInt("id", su),
                CyberInstance[t(367)][t(395)](new (SFS2X[t(420)])("shop.watchGift",n)),
                this.screen[t(372)]()
            }
        }, {
            key: e(453),
            value: function(t) {
                for (var n, r = e, i = t.getInt("id"), a = ou[i + ""], o = 0; o < this.giftItems[r(345)]; o++)
                    if (this[r(357)][o][r(474)] == i) {
                        n = this.giftItems[o];
                        break
                    }
                if (t.getBool(r(433))) {
                    var s = t[r(421)](r(468));
                    ot[r(344)].updateGift(i, s);
                    var c = ot[r(344)][r(422)](i) + 1;
                    ot[r(344)].updateWatchCount(i, c),
                    new Tc(game,{
                        type: r(429),
                        id: i,
                        quantity: s
                    }),
                    ot[r(344)][r(422)](i) == a[r(441)] && (n[r(370)].visible = !1,
                    n[r(416)][r(426)] = !0)
                }
                this[r(386)](i)
            }
        }, {
            key: e(383),
            value: function() {
                var t = e
                  , n = ou[su + ""]
                  , r = t(467) + h[t(393)](n[t(362)] * parseInt(this[t(350)][t(444)])) + t(392);
                new Jc(game,{
                    text: r,
                    icon: n.icon,
                    id: su,
                    quantity: parseInt(this.textAmount.text),
                    buttonText: t(434),
                    hideCloseButton: !1,
                    callback: this[t(410)],
                    context: this
                })
            }
        }, {
            key: e(410),
            value: function() {
                var t = e
                  , n = new (SFS2X[t(402)]);
                n.putInt("id", su),
                n[t(413)](t(468), parseInt(this.textAmount[t(444)])),
                CyberInstance[t(367)].send(new (SFS2X[t(420)])(t(337),n)),
                this[t(435)].openLoadingPopup()
            }
        }, {
            key: e(374),
            value: function() {
                var t = e
                  , n = parseInt(this[t(350)][t(444)]);
                if (n > 1) {
                    n -= n <= 10 ? 1 : 5,
                    this.textAmount.setText(n);
                    var r = ou[su + ""]
                      , i = parseInt(this.textAmount[t(444)]);
                    this.chipText[t(451)](h[t(373)](r[t(362)] * i))
                }
            }
        }, {
            key: e(414),
            value: function() {
                var t = e
                  , n = parseInt(this[t(350)][t(444)]);
                n < 1e4 && (n += n < 10 ? 1 : 5,
                this[t(350)][t(451)](n));
                var r = ou[su + ""]
                  , i = parseInt(this[t(350)].text);
                this[t(369)][t(451)](h[t(373)](r[t(362)] * i))
            }
        }, {
            key: e(348),
            value: function(t) {
                var n = e
                  , r = new jt(this.game,0,0,"shopScreen",n(361));
                r[n(474)] = t.id,
                r[n(381)](this[n(425)], this);
                var i = this.game.make.image(0, 0, n(360), n(445));
                i[n(426)] = su == t.id,
                r[n(398)](i),
                r[n(460)] = i;
                var a = new (Phaser[n(449)])(this[n(366)],r[n(415)] / 2,11,t[n(419)],{
                    font: APP_FONT,
                    fontWeight: 400,
                    fontSize: 19,
                    fill: n(363)
                });
                a[n(368)][n(455)](.5, 0),
                r[n(398)](a);
                var o = this[n(366)][n(347)][n(418)](r[n(415)] / 2, r[n(459)] / 2 - 10, n(360), t[n(448)]);
                if (15 == t.id ? o[n(338)][n(455)](.7) : 17 == t.id && o[n(338)][n(455)](.85),
                o.anchor[n(455)](.5),
                r[n(398)](o),
                t[n(362)]) {
                    var s = new (Phaser[n(449)])(this[n(366)],r[n(415)] / 2,164,h[n(373)](t[n(362)]),{
                        font: APP_FONT,
                        fontWeight: 500,
                        fontSize: 18,
                        fill: "#f5c78a"
                    });
                    r[n(398)](s);
                    var c = s[n(415)]
                      , u = this[n(366)][n(347)][n(418)](r[n(415)] / 2 - c, 162, n(360), n(478));
                    r[n(398)](u),
                    c > 0 ? (u.x = r.width / 2 - (u[n(415)] + 10 + c) / 2,
                    s.x = u.x + u[n(415)] + 10) : (u.x = 30,
                    s.x = u.x + u.width + 10)
                } else {
                    var l = this[n(366)][n(347)][n(418)](0, 158, n(360), n(336));
                    l.x = r[n(415)] / 2 - l[n(415)] / 2,
                    r[n(398)](l),
                    l[n(426)] = !1,
                    r[n(416)] = l;
                    var f = this.game[n(347)].image(0, 166, n(360), n(438));
                    f.x = r[n(415)] / 2 - f[n(415)] / 2,
                    r[n(398)](f);
                    var p = ot[n(344)][n(422)](t.id);
                    r[n(370)] = f,
                    p >= t[n(441)] && (l[n(426)] = !0,
                    f.visible = !1)
                }
                return r
            }
        }, {
            key: "onBoxClick",
            value: function(t) {
                for (var n = e, r = 0; r < this[n(357)].length; r++)
                    if (this[n(357)][r][n(474)] == su) {
                        this[n(357)][r][n(460)][n(426)] = !1;
                        break
                    }
                su = t[n(474)],
                t.overlay[n(426)] = !0,
                this[n(386)](t.itemId)
            }
        }, {
            key: e(386),
            value: function(t) {
                var n = e
                  , r = ou[t + ""];
                if (this.selectedItem.loadTexture("shopScreen", r[n(448)]),
                this[n(411)][n(451)](r[n(419)]),
                r.chip) {
                    this[n(379)][n(426)] = !0,
                    this.decButton[n(426)] = !0,
                    this[n(471)].visible = !0,
                    this[n(350)][n(426)] = !0,
                    this[n(423)][n(426)] = !0,
                    this[n(369)][n(426)] = !0,
                    this[n(342)].visible = !1,
                    this[n(401)][n(426)] = !1,
                    this[n(349)][n(426)] = !0;
                    var i = parseInt(this[n(350)][n(444)]);
                    this.chipText.setText(h[n(373)](r[n(362)] * i));
                    var a = this[n(369)][n(415)];
                    a > 0 ? (this[n(423)].x = this[n(435)][n(470)].x + this.screen[n(470)].width / 2 - (this[n(423)][n(415)] + 15 + a) / 2 - 10,
                    this[n(369)].x = this.chipIcon.x + this[n(423)][n(415)] + 15) : (this[n(423)].x = this[n(435)][n(470)].x + 50,
                    this.chipText.x = this.chipIcon.x + this[n(423)][n(415)] + 15)
                } else {
                    this[n(379)][n(426)] = !1,
                    this[n(391)][n(426)] = !1,
                    this[n(471)][n(426)] = !1,
                    this[n(350)][n(426)] = !1,
                    this.chipIcon.visible = !1,
                    this[n(369)][n(426)] = !1,
                    this[n(349)][n(426)] = !1;
                    var o = ot[n(344)].getWatchCount(r.id);
                    if (r.ads - o > 0) {
                        var s = "Xem một đoạn video\nquảng cáo ngắn bạn sẽ\nnhận ngay 1 quà tặng\n" + r[n(419)];
                        this[n(405)][n(451)](s),
                        this.watch_gift_desc[n(426)] = !0,
                        this[n(401)][n(426)] = !0
                    } else
                        this.watchButton.visible = !1,
                        this[n(342)][n(426)] = !1
                }
            }
        }, {
            key: "applyTexture",
            value: function(t) {
                var n = e
                  , r = new (Phaser[n(475)])(0,0,t,t)
                  , i = game[n(347)][n(418)](0, 0, "shopScreen", n(353));
                i[n(415)] = t,
                i[n(459)] = t;
                var a = game[n(347)].bitmapData();
                a[n(457)](i),
                i[n(335)]();
                var o = this[n(366)][n(347)][n(380)](t, t);
                o[n(407)](this[n(351)], a, r),
                this[n(388)][n(389)](o),
                this[n(388)].width = t,
                this[n(388)][n(459)] = t
            }
        }, {
            key: e(335),
            value: function() {
                var t = e;
                tu(au(c[t(442)]), t(335), this)[t(390)](this)
            }
        }]) && Zc(n[i(442)], r),
        Object.defineProperty(n, i(442), {
            writable: !1
        }),
        c
    }(Phaser.Group);
    function uu() {
        var t = ["25rwyqzk", "no_avatar", "ADS_NOT_READY", "disableTimeout", "7uAOngA", "giftItems", "configurable", "123960GGRoPq", "shopScreen", "gift_item", "chip", "#f5a3b1", "object", "enumerable", "game", "socket", "anchor", "chipText", "watch", "90076uPeaOC", "openLoadingPopup", "formatCoinWithCommas", "onDecAmount", "BUY_GIFT", "Cannot call a class as a function", "input_amout_bg", "symbol", "incButton", "bitmapData", "click", "iterator", "onBuyItemClick", "44BENjoT", "cache", "updateSelectedItem", "lang", "avatar", "loadTexture", "call", "decButton", " chip để mua vật phẩm", "shortenLargeNumber", "CLOSE", "send", "viewList", "value", "addChild", "listView", "construct", "watchButton", "SFSObject", "198wuGEXt", "Super expression must either be null or a function", "watch_gift_desc_text", "hasOwnProperty", "alphaMask", "push", "applyTexture", "onSendBuyItemRequest", "selectedName", "function", "putInt", "onIncAmount", "width", "completeIcon", "inc_button", "image", "name", "ExtensionRequest", "getInt", "getWatchCount", "chipIcon", "undefined", "onBoxClick", "visible", "valueOf", "setPrototypeOf", "GIFT", "selectedItem", "#692700", "writable", "success", "Xác nhận", "screen", "onWatchClick", "get", "xemvideo", "540264Uvjrle", "key", "ads", "prototype", "this hasn't been initialised - super() hasn't been called", "text", "gift_item_active", "166497vPGaSL", "4vstKjB", "icon", "Text", "defineProperty", "setText", "3157408AfCfKR", "onWatchGift", "__proto__", "setTo", "center", "load", "264709ltzpxq", "height", "overlay", "addText", "dec_button", "getGiftItems", "MUA NGAY", "onAdReward", "26gMwDAO", "Bạn sử dụng ", "quantity", "bind", "rightBg", "inputBg", "getPrototypeOf", "11080HZJjgS", "itemId", "Rectangle", "getOwnPropertyDescriptor", "Derived constructors may only return object or undefined", "coin_icon", "watch_button", "destroy", "icon_complete", "shop.buyGift", "scale", "apply", "5031IXXHTn", "add", "watch_gift_desc", "#f5c78a", "instance", "length", "create", "make", "addItem", "buyButton", "textAmount", "avatarKey"];
        return (uu = function() {
            return t
        }
        )()
    }
    function hu(t) {
        var e = gu;
        return (hu = e(265) == typeof Symbol && "symbol" == typeof Symbol[e(167)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(265) == typeof Symbol && t[n(281)] === Symbol && t !== Symbol[n(217)] ? n(245) : typeof t
        }
        )(t)
    }
    function lu(t, e) {
        for (var n = gu, r = 0; r < e[n(246)]; r++) {
            var i = e[r];
            i[n(181)] = i.enumerable || !1,
            i.configurable = !0,
            n(157)in i && (i[n(184)] = !0),
            Object[n(162)](t, i[n(155)], i)
        }
    }
    function fu() {
        var t = gu;
        return fu = typeof Reflect !== t(166) && Reflect[t(174)] ? Reflect[t(174)][t(266)]() : function(e, n, r) {
            var i = t
              , a = pu(e, n);
            if (a) {
                var o = Object[i(203)](a, n);
                return o.get ? o[i(174)][i(274)](arguments[i(246)] < 3 ? e : r) : o[i(157)]
            }
        }
        ,
        fu[t(204)](this, arguments)
    }
    function pu(t, e) {
        for (var n = gu; !Object[n(217)].hasOwnProperty[n(274)](t, e) && null !== (t = bu(t)); )
            ;
        return t
    }
    function yu(t, e) {
        var n = gu;
        return (yu = Object[n(197)] ? Object[n(197)].bind() : function(t, e) {
            return t[n(159)] = e,
            t
        }
        )(t, e)
    }
    function du(t, e) {
        var n = gu;
        if (e && (hu(e) === n(277) || "function" == typeof e))
            return e;
        if (void 0 !== e)
            throw new TypeError("Derived constructors may only return object or undefined");
        return vu(t)
    }
    function vu(t) {
        if (void 0 === t)
            throw new ReferenceError(gu(200));
        return t
    }
    function bu(t) {
        var e = gu;
        return (bu = Object.setPrototypeOf ? Object[e(272)].bind() : function(t) {
            var n = e;
            return t.__proto__ || Object[n(272)](t)
        }
        )(t)
    }
    function mu() {
        var t = ["undefined", "iterator", "loadTexture", "selectedItem", "screen", "gift_item_active", "691598aHXeTL", "make", "get", "add", "setTo", "scale", "game", "avatarKey", "addChild", "enumerable", "formatCoinWithCommas", "addText", "writable", "buy_button", "2077074voOolf", "instance", "decButton", "avatar", "click", "textAmount", "263735aKIOKY", " quà tặng", "listView", "watchButton", "Rectangle", "setPrototypeOf", "overlay", "checkImageKey", "this hasn't been initialised - super() hasn't been called", "inc_button", "433160mwvlLf", "getOwnPropertyDescriptor", "apply", "height", "image", "incButton", "success", "name", "icon", "load", "openLoadingPopup", "159400pTmPxY", "ExtensionRequest", "getWatchCount", "onDecAmount", "prototype", "watch_gift_desc_text", "selectedName", "center", "giftItems", "chipText", "onBoxClick", "getEmoItems", "completeIcon", "77wdLdln", "push", "watch", " video để\nnhận ngay ", "viewList", "cache", "gift_item", "12DXoKqu", "110wSoBxM", "Text", "ready", "onBuyItemClick", "create", "watchText", "1UQChPH", "send", "socket", "shopScreen", "updateSelectedItem", "symbol", "length", "bitmapData", "shop.watchEmo", "10PmJRxQ", "applyTexture", "destroy", "watch_gift_desc", "coin_icon", "updateGift", "onIncAmount", "currentItemId", "#f5a3b1", "watch_bage", "CLOSE", "itemId", "icon_complete", "#f5c78a", "no_avatar", "SFSObject", "function", "bind", "142884isgudv", "ADS_NOT_READY", "#ffffff", "rightBg", "anchor", "getPrototypeOf", "getInt", "call", "getBool", "chipIcon", "object", "91644ssvrul", "show", "chip", "constructor", "lang", "52KzPbNm", "Bạn nhận vật phẩm thành công!", "ads", "width", "Super expression must either be null or a function", "alphaMask", "text", "setText", "valueOf", "30dGFrey", "addItem", "dec_button", "construct", "quantity", "onAdReward", "key", "onWatchClick", "value", "getGuserid", "__proto__", "visible", "MUA NGAY", "defineProperty", "buyButton", "Đây là phần quà miễn\nphí xem ", "putInt"];
        return (mu = function() {
            return t
        }
        )()
    }
    function gu(t, e) {
        var n = mu();
        return (gu = function(t, e) {
            return n[t -= 153]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = gu, r = t(); ; )
            try {
                if (177623 == parseInt(n(240)) / 1 * (-parseInt(n(172)) / 2) + -parseInt(n(267)) / 3 * (parseInt(n(233)) / 4) + -parseInt(n(192)) / 5 * (-parseInt(n(292)) / 6) + -parseInt(n(226)) / 7 * (-parseInt(n(213)) / 8) + parseInt(n(186)) / 9 * (parseInt(n(249)) / 10) + parseInt(n(234)) / 11 * (parseInt(n(278)) / 12) + -parseInt(n(283)) / 13 * (parseInt(n(202)) / 14))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(mu);
    var wu = null;
    const Iu = function(t) {
        var e = gu;
        !function(t, e) {
            var n = gu;
            if (typeof e !== n(265) && null !== e)
                throw new TypeError(n(287));
            t.prototype = Object[n(238)](e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, n(217), {
                writable: !1
            }),
            e && yu(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = gu;
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if (typeof Proxy === t(265))
                return !0;
            try {
                return Boolean.prototype[t(291)][t(274)](Reflect[t(295)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = gu, n = bu(a);
            if (o) {
                var r = bu(this)[e(281)];
                t = Reflect[e(295)](n, arguments, r)
            } else
                t = n[e(204)](this, arguments);
            return du(this, t)
        }
        );
        function c(t, e, n, r) {
            var i, a = gu;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            )(this, c),
            (i = s[a(274)](this, t))[a(170)] = r,
            i[a(256)] = 12;
            var o = e
              , u = n;
            for (var h in i[a(194)] = new Ar({
                x: o,
                y: u,
                column: 4,
                width: 638,
                height: 434,
                rowHeight: 213,
                columnWidth: 155,
                row: 1,
                leftDistance: 0,
                rightDistance: 0,
                distanceBetweenColumns: 6,
                distanceBetweenRows: 4,
                direction: "y"
            },i[a(178)]),
            i[a(175)](i.listView),
            null == wu && (wu = ot[a(224)]()),
            i[a(221)] = [],
            wu)
                i[a(221)][a(227)](i[a(293)](wu[h]));
            i[a(194)][a(230)] = i[a(221)],
            i[a(179)] = "avatar" + ie[a(187)][a(158)](),
            i[a(178)][a(231)][a(199)](i[a(179)]) ? (i[a(189)] = i[a(178)][a(173)][a(206)](57, 40, i[a(179)]),
            i[a(250)](116)) : (i[a(189)] = i[a(178)].make[a(206)](57, 40, a(243), a(263)),
            i.avatar[a(286)] = 116,
            i[a(189)][a(205)] = 116),
            i.avatar.x = i.screen[a(270)].x + i.avatar.x,
            i[a(189)].y = i.screen[a(270)].y + i[a(189)].y,
            i.add(i[a(189)]),
            i.selectedName = new (Phaser[a(235)])(i[a(178)],i.avatar.x + i[a(189)].width / 2,i[a(189)].y + i.avatar[a(286)] + 30,"",{
                font: APP_FONT,
                fontWeight: 400,
                fontSize: 24,
                fill: "#f5a3b1"
            }),
            i[a(219)][a(271)][a(176)](.5, 0),
            i[a(175)](i.selectedName),
            i.selectedItem = i.game[a(173)][a(206)](i[a(189)].x + i[a(189)].width / 2, i[a(189)].y + i[a(189)][a(286)] / 2, a(243), a(263)),
            i[a(169)][a(271)][a(176)](.5),
            i[a(175)](i[a(169)]);
            var l = i[a(178)][a(173)][a(206)](i[a(189)].x + i[a(189)][a(286)] / 2, i[a(219)].y + 70, a(243), "input_amout_bg");
            l[a(271)].setTo(.5, 0),
            i.add(l);
            var f = new jt(i[a(178)],0,l.y - 1,a(243),a(294));
            f.x = l.x - l[a(286)] / 2 - 10,
            f[a(190)](i[a(216)], vu(i)),
            i.add(f);
            var p = new jt(i[a(178)],0,l.y - 1,a(243),a(201));
            return p.x = l.x + p[a(286)] / 2 + p[a(286)] / 2,
            p[a(190)](i[a(255)], vu(i)),
            i[a(175)](p),
            i[a(191)] = new (Phaser[a(235)])(i[a(178)],i.avatar.x + i[a(189)][a(286)] / 2 - 3,l.y + l[a(205)] / 2,10,{
                font: APP_FONT,
                fontWeight: 700,
                fontSize: 24,
                fill: "#f5a3b1"
            }),
            i.textAmount[a(271)].setTo(.5),
            i[a(175)](i[a(191)]),
            i.chipText = i[a(178)][a(173)][a(289)](0, l.y + 75, "", {
                font: APP_FONT,
                fontWeight: 500,
                fontSize: 20,
                fill: a(262)
            }),
            i[a(175)](i[a(222)]),
            i[a(276)] = i[a(178)][a(173)].image(0, l.y + 73, a(243), a(253)),
            i[a(175)](i[a(276)]),
            i[a(163)] = new jt(i[a(178)],0,0,a(243),a(185)),
            i[a(163)][a(183)](a(161), {
                font: APP_FONT,
                fontWeight: 700,
                fontSize: 22,
                fill: "#692700"
            }),
            i[a(163)].x = i[a(189)].x + i[a(189)][a(286)] / 2 - 5 - i[a(163)][a(286)] / 2,
            i[a(163)].y = i.screen[a(270)].y + i[a(170)][a(270)][a(205)] - i[a(163)][a(205)] - 20,
            i[a(175)](i[a(163)]),
            i[a(163)][a(190)](i.onBuyItemClick, vu(i)),
            i[a(252)] = i[a(178)][a(173)][a(206)](i[a(189)].x + i[a(189)][a(286)] / 2 - 5, i[a(219)].y + 100, a(243), a(252)),
            i[a(252)].anchor[a(176)](.5),
            i[a(175)](i[a(252)]),
            i.watch_gift_desc_text = new Phaser.Text(i.game,0,0,"",{
                font: APP_FONT,
                fontWeight: 400,
                fontSize: 17,
                fill: a(257),
                align: a(220)
            }),
            i.watch_gift_desc_text[a(271)][a(176)](.5),
            i[a(252)][a(180)](i[a(218)]),
            i[a(195)] = new jt(i[a(178)],i[a(189)].x + i[a(189)][a(286)] / 2 - 5,0,a(243),"watch_button"),
            i[a(195)][a(271)].setTo(.5, 0),
            i[a(195)].y = i[a(170)][a(270)].y + i[a(170)][a(270)][a(205)] - i[a(195)][a(205)] - 20,
            i.watchButton[a(190)](i[a(156)], vu(i)),
            i[a(175)](i[a(195)]),
            i.inputBg = l,
            i.decButton = f,
            i[a(207)] = p,
            i[a(221)].length > 0 && i.updateSelectedItem(i.currentItemId),
            i
        }
        return n = c,
        i = gu,
        (r = [{
            key: e(156),
            value: function() {
                var t = e;
                Mt.instance[t(236)] ? Mt[t(187)][t(279)](Mt.BUY_EMO) : new M(game,{
                    text: CyberInstance[t(282)][t(268)],
                    buttonText: CyberInstance[t(282)][t(259)],
                    hideCloseButton: !0
                })
            }
        }, {
            key: e(154),
            value: function() {
                var t = e
                  , n = new SFS2X.SFSObject;
                n.putInt("id", this.currentItemId),
                CyberInstance[t(242)][t(241)](new (SFS2X[t(214)])(t(248),n)),
                this[t(170)][t(212)]()
            }
        }, {
            key: "onWatchEmo",
            value: function(t) {
                for (var n, r = e, i = t[r(273)]("id"), a = wu[i + ""], o = 0; o < this[r(221)].length; o++)
                    if (this[r(221)][o][r(260)] == i) {
                        n = this.giftItems[o];
                        break
                    }
                if (t[r(275)](r(208))) {
                    var s = t.getInt("quantity");
                    ot[r(187)][r(254)](i, s);
                    var c = ot[r(187)].getWatchCount(i) + 1;
                    ot.instance.updateWatchCount(i, c),
                    n.watchText[r(290)](a[r(285)] - ot[r(187)][r(215)](i)),
                    new M(game,{
                        text: r(284),
                        buttonText: CyberInstance[r(282)].CLOSE,
                        hideCloseButton: !0
                    }),
                    ot.instance[r(215)](i) == a.ads && (n.watch[r(160)] = !1,
                    n[r(225)].visible = !0)
                }
                this[r(244)](i)
            }
        }, {
            key: e(237),
            value: function() {
                var t = e
                  , n = new (SFS2X[t(264)]);
                n[t(165)]("id", this[t(256)]),
                n[t(165)](t(153), parseInt(this[t(191)][t(289)])),
                CyberInstance[t(242)][t(241)](new (SFS2X[t(214)])("shop.buyGift",n)),
                this.screen[t(212)]()
            }
        }, {
            key: e(216),
            value: function() {
                var t = e
                  , n = parseInt(this.textAmount[t(289)]);
                if (n > 0) {
                    n -= n <= 10 ? 1 : 5,
                    this[t(191)][t(290)](n);
                    var r = wu[this[t(256)] + ""]
                      , i = parseInt(this.textAmount[t(289)]);
                    this[t(222)][t(290)](h[t(182)](r[t(280)] * i))
                }
            }
        }, {
            key: e(255),
            value: function() {
                var t = e
                  , n = parseInt(this.textAmount.text);
                n < 1e4 && (n += n < 10 ? 1 : 5,
                this[t(191)][t(290)](n));
                var r = wu[this[t(256)] + ""]
                  , i = parseInt(this[t(191)][t(289)]);
                this.chipText[t(290)](h.formatCoinWithCommas(r[t(280)] * i))
            }
        }, {
            key: e(293),
            value: function(t) {
                var n = e
                  , r = new jt(this[n(178)],0,0,n(243),n(232));
                r.itemId = t.id,
                r[n(190)](this[n(223)], this);
                var i = this.game[n(173)][n(206)](0, 0, n(243), n(171));
                i[n(160)] = this[n(256)] == t.id,
                r[n(180)](i),
                r[n(198)] = i;
                var a = new Phaser.Text(this[n(178)],r[n(286)] / 2,11,t[n(209)],{
                    font: APP_FONT,
                    fontWeight: 400,
                    fontSize: 19,
                    fill: n(257)
                });
                a[n(271)][n(176)](.5, 0),
                r[n(180)](a);
                var o = this[n(178)][n(173)].image(r.width / 2, r[n(205)] / 2 - 10, "shopScreen", t[n(210)]);
                if (15 == t.id ? o[n(177)][n(176)](.7) : 17 == t.id && o[n(177)].setTo(.85),
                o[n(271)][n(176)](.5),
                r[n(180)](o),
                t.chip) {
                    var s = new (Phaser[n(235)])(this.game,r[n(286)] / 2,164,h[n(182)](t[n(280)]),{
                        font: APP_FONT,
                        fontWeight: 500,
                        fontSize: 18,
                        fill: "#f5c78a"
                    });
                    r[n(180)](s);
                    var c = s[n(286)]
                      , u = this[n(178)][n(173)].image(r[n(286)] / 2 - c, 162, n(243), "coin_icon");
                    r.addChild(u),
                    c > 0 ? (u.x = r[n(286)] / 2 - (u[n(286)] + 10 + c) / 2,
                    s.x = u.x + u.width + 10) : (u.x = 30,
                    s.x = u.x + u.width + 10)
                } else {
                    var l = this.game.make.image(0, 158, n(243), n(261));
                    l.x = r.width / 2 - l.width / 2,
                    r[n(180)](l),
                    l[n(160)] = !1,
                    r[n(225)] = l;
                    var f = this[n(178)][n(173)][n(206)](0, 162, n(243), n(258));
                    f.x = r[n(286)] / 2 - f[n(286)] / 2,
                    r.addChild(f);
                    var p = ot.instance.getWatchCount(t.id)
                      , y = new Phaser.Text(this.game,106,17,t.ads - p,{
                        font: APP_FONT,
                        fontWeight: 500,
                        fontSize: 18,
                        fill: n(269)
                    });
                    y[n(271)][n(176)](.5),
                    f[n(180)](y),
                    r[n(239)] = y,
                    r[n(228)] = f,
                    p >= t[n(285)] && (l[n(160)] = !0,
                    f[n(160)] = !1)
                }
                return r
            }
        }, {
            key: "onBoxClick",
            value: function(t) {
                for (var n = e, r = 0; r < this[n(221)][n(246)]; r++)
                    if (this[n(221)][r].itemId == this[n(256)]) {
                        this[n(221)][r][n(198)][n(160)] = !1;
                        break
                    }
                this[n(256)] = t[n(260)],
                t[n(198)].visible = !0,
                this[n(244)](t[n(260)])
            }
        }, {
            key: e(244),
            value: function(t) {
                var n = e
                  , r = wu[t + ""];
                if (this[n(169)][n(168)]("shopScreen", r[n(210)]),
                this.selectedName[n(290)](r[n(209)]),
                r.chip) {
                    this[n(207)][n(160)] = !0,
                    this[n(188)][n(160)] = !0,
                    this.inputBg.visible = !0,
                    this[n(191)].visible = !0,
                    this[n(276)][n(160)] = !0,
                    this[n(222)][n(160)] = !0,
                    this.watch_gift_desc.visible = !1,
                    this[n(195)][n(160)] = !1,
                    this[n(163)].visible = !0;
                    var i = parseInt(this.textAmount[n(289)]);
                    this[n(222)][n(290)](h[n(182)](r[n(280)] * i));
                    var a = this[n(222)][n(286)];
                    a > 0 ? (this.chipIcon.x = this[n(170)][n(270)].x + this[n(170)][n(270)][n(286)] / 2 - (this[n(276)][n(286)] + 15 + a) / 2 - 10,
                    this[n(222)].x = this.chipIcon.x + this.chipIcon[n(286)] + 15) : (this[n(276)].x = this[n(170)][n(270)].x + 50,
                    this.chipText.x = this[n(276)].x + this[n(276)][n(286)] + 15)
                } else {
                    this[n(207)][n(160)] = !1,
                    this[n(188)][n(160)] = !1,
                    this.inputBg[n(160)] = !1,
                    this[n(191)][n(160)] = !1,
                    this.chipIcon[n(160)] = !1,
                    this[n(222)][n(160)] = !1,
                    this[n(163)].visible = !1;
                    var o = ot[n(187)][n(215)](r.id)
                      , s = r.ads - o;
                    if (s > 0) {
                        var c = n(164) + s + n(229) + r[n(153)] * s + n(193);
                        this[n(218)][n(290)](c),
                        this[n(252)][n(160)] = !0,
                        this[n(195)].visible = !0
                    } else
                        this[n(195)][n(160)] = !1,
                        this[n(252)][n(160)] = !1
                }
            }
        }, {
            key: e(250),
            value: function(t) {
                var n = e
                  , r = new (Phaser[n(196)])(0,0,t,t)
                  , i = game[n(173)][n(206)](0, 0, n(243), "no_avatar");
                i[n(286)] = t,
                i[n(205)] = t;
                var a = game[n(173)].bitmapData();
                a[n(211)](i),
                i[n(251)]();
                var o = this[n(178)][n(173)][n(247)](t, t);
                o[n(288)](this[n(179)], a, r),
                this.avatar[n(168)](o),
                this[n(189)].width = t,
                this[n(189)][n(205)] = t
            }
        }, {
            key: e(251),
            value: function() {
                var t = e;
                fu(bu(c[t(217)]), t(251), this).call(this)
            }
        }]) && lu(n.prototype, r),
        Object[i(162)](n, "prototype", {
            writable: !1
        }),
        c
    }(Phaser.Group);
    var Su = xu;
    function Ou() {
        var t = ["addItem", "watch", "call", "#f5a3b1", "constructor", "157326kfAhSZ", "success", "itemId", "bind", "putInt", "CLOSE", "writable", "overlay", "lang", "sham", " video quảng cáo\nngắn bạn sẽ nhận ngay\nkhung avatar ", "checkImageKey", "chipText", "23525480ZUxDDG", "no_avatar", "watchButton", "addText", "ready", "alphaMask", "height", "loadTexture", "BUY_AVATAR", "3764304cVAMPY", "instance", "watch_gift_desc", "anchor", "value", "width", "avatar", "setTo", "currentItemId", "chip", "openLoadingPopup", "getAvatar", "text", "visible", "onWatchAvatar", "game", "#692700", "gift_item_active", "watchText", "getPrototypeOf", "show", "#f5c78a", "bitmapData", "\nsử dụng trong ", "119oJJrPc", "undefined", "3723985xAgMru", "applyTexture", "inputBg", "hasOwnProperty", "SFSObject", "Group", "chipIcon", "setText", "completeIcon", "listView", "push", " ngày", "selectedItem", "882652aBvPSp", "valueOf", "apply", "buyButton", "click", "Text", "watch_gift_desc_text", "object", "onWatchClick", "setPrototypeOf", "containsKey", "updateAvatar", "center", "rightBg", "icon_complete", "688826XujFxw", "length", "coin_icon", "quantity", "951262dhOXQF", "icon", "viewList", "name", "scale", "image", "cache", "__proto__", "addChild", "updateSelectedItem", "watch_button", "Rectangle", "screen", "make", "configurable", "3KRRemz", "16yHFCNW", "ads", "#ffffff", "selectedName", "destroy", "getAvatarItems", "construct", "prototype", "getWatchCount", "defineProperty", "onBoxClick", "giftItems", "Derived constructors may only return object or undefined", "avatarKey", "socket", "function", "formatCoinWithCommas", "add", "shop.watchAvatar", "ExtensionRequest", "ADS_NOT_READY", "get", "enumerable", "Super expression must either be null or a function", "load", "shopScreen", "send"];
        return (Ou = function() {
            return t
        }
        )()
    }
    function ku(t) {
        var e = xu;
        return (ku = e(302) == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(302) == typeof Symbol && t[n(318)] === Symbol && t !== Symbol[n(294)] ? "symbol" : typeof t
        }
        )(t)
    }
    function Cu(t, e) {
        for (var n = xu, r = 0; r < e[n(268)]; r++) {
            var i = e[r];
            i[n(309)] = i[n(309)] || !1,
            i[n(285)] = !0,
            n(345)in i && (i[n(325)] = !0),
            Object[n(296)](t, i.key, i)
        }
    }
    function Pu() {
        var t = xu;
        return Pu = typeof Reflect !== t(366) && Reflect[t(308)] ? Reflect[t(308)][t(322)]() : function(e, n, r) {
            var i = t
              , a = Tu(e, n);
            if (a) {
                var o = Object.getOwnPropertyDescriptor(a, n);
                return o[i(308)] ? o[i(308)][i(316)](arguments.length < 3 ? e : r) : o[i(345)]
            }
        }
        ,
        Pu[t(382)](this, arguments)
    }
    function Tu(t, e) {
        for (var n = xu; !Object[n(294)][n(370)].call(t, e) && null !== (t = Eu(t)); )
            ;
        return t
    }
    function xu(t, e) {
        var n = Ou();
        return (xu = function(t, e) {
            return n[t -= 260]
        }
        )(t, e)
    }
    function _u(t, e) {
        var n = xu;
        return (_u = Object[n(261)] ? Object[n(261)].bind() : function(t, e) {
            return t[n(278)] = e,
            t
        }
        )(t, e)
    }
    function ju(t, e) {
        var n = xu;
        if (e && (ku(e) === n(387) || typeof e === n(302)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(299));
        return Ru(t)
    }
    function Ru(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function Eu(t) {
        var e = xu;
        return (Eu = Object[e(261)] ? Object[e(360)].bind() : function(t) {
            var n = e;
            return t[n(278)] || Object[n(360)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = xu, r = t(); ; )
            try {
                if (429956 == -parseInt(n(267)) / 1 + parseInt(n(271)) / 2 * (-parseInt(n(286)) / 3) + -parseInt(n(380)) / 4 + parseInt(n(367)) / 5 + -parseInt(n(319)) / 6 * (parseInt(n(365)) / 7) + parseInt(n(287)) / 8 * (-parseInt(n(341)) / 9) + parseInt(n(332)) / 10)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Ou);
    var Bu = null;
    const Au = function(t) {
        var e = xu;
        !function(t, e) {
            var n = xu;
            if (typeof e !== n(302) && null !== e)
                throw new TypeError(n(310));
            t[n(294)] = Object.create(e && e[n(294)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(296)](t, n(294), {
                writable: !1
            }),
            e && _u(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = xu;
            if ("undefined" == typeof Reflect || !Reflect[t(293)])
                return !1;
            if (Reflect[t(293)][t(328)])
                return !1;
            if (typeof Proxy === t(302))
                return !0;
            try {
                return Boolean[t(294)][t(381)][t(316)](Reflect[t(293)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = xu, n = Eu(a);
            if (o) {
                var r = Eu(this)[e(318)];
                t = Reflect.construct(n, arguments, r)
            } else
                t = n[e(382)](this, arguments);
            return ju(this, t)
        }
        );
        function c(t, e, n, r) {
            var i, a = xu;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            )(this, c),
            (i = s[a(316)](this, t))[a(283)] = r,
            i[a(349)] = 9;
            var o = e
              , u = n;
            for (var h in i[a(376)] = new Ar({
                x: o,
                y: u,
                column: 4,
                width: 638,
                height: 434,
                rowHeight: 213,
                columnWidth: 155,
                row: 1,
                leftDistance: 0,
                rightDistance: 0,
                distanceBetweenColumns: 6,
                distanceBetweenRows: 4,
                direction: "y"
            },i[a(356)]),
            i[a(304)](i[a(376)]),
            null == Bu && (Bu = ot[a(292)]()),
            i[a(298)] = [],
            Bu)
                Bu[h].vip || i[a(298)][a(377)](i.addItem(Bu[h]));
            i[a(376)][a(273)] = i[a(298)],
            i[a(300)] = "avatar" + ie[a(342)].getGuserid(),
            i[a(356)][a(277)][a(330)](i.avatarKey) ? (i[a(347)] = i[a(356)][a(284)][a(276)](57, 40, i.avatarKey),
            i[a(368)](116)) : (i[a(347)] = i.game[a(284)][a(276)](57, 40, "shopScreen", a(333)),
            i.avatar[a(346)] = 116,
            i.avatar[a(338)] = 116),
            i.avatar.x = i[a(283)][a(265)].x + i[a(347)].x,
            i[a(347)].y = i[a(283)][a(265)].y + i[a(347)].y,
            i.add(i.avatar),
            i.selectedName = new (Phaser[a(385)])(i[a(356)],i.avatar.x + i[a(347)][a(346)] / 2,i[a(347)].y + i.avatar[a(346)] + 15,"",{
                font: APP_FONT,
                fontWeight: 400,
                fontSize: 24,
                fill: a(317)
            }),
            i[a(290)][a(344)].setTo(.5, 0),
            i[a(304)](i[a(290)]),
            i[a(379)] = i.game[a(284)][a(276)](i[a(347)].x + i.avatar[a(346)] / 2, i.avatar.y + i.avatar[a(346)] / 2, a(312), a(333)),
            i.selectedItem[a(344)].setTo(.5),
            i[a(304)](i[a(379)]);
            var l = i[a(356)].make[a(276)](i[a(347)].x + i[a(347)][a(346)] / 2, i[a(290)].y + 40, "shopScreen", a(343));
            return l[a(344)][a(348)](.5, 0),
            i[a(304)](l),
            i.chipText = i[a(356)][a(284)][a(353)](0, l.y + l[a(338)] + 14, "", {
                font: APP_FONT,
                fontWeight: 500,
                fontSize: 20,
                fill: a(362)
            }),
            i[a(304)](i.chipText),
            i[a(373)] = i.game[a(284)][a(276)](0, l.y + l[a(338)] + 12, a(312), "coin_icon"),
            i.add(i.chipIcon),
            i.buyButton = new jt(i.game,0,0,a(312),"buy_button"),
            i[a(383)][a(335)]("MUA NGAY", {
                font: APP_FONT,
                fontWeight: 700,
                fontSize: 22,
                fill: a(357)
            }),
            i[a(383)].x = i.avatar.x + i[a(347)][a(346)] / 2 - 5 - i[a(383)][a(346)] / 2,
            i[a(383)].y = i[a(283)].rightBg.y + i[a(283)][a(265)][a(338)] - i[a(383)].height - 20,
            i.add(i.buyButton),
            i[a(343)] = i.game[a(284)][a(276)](i[a(347)].x + i[a(347)][a(346)] / 2 - 5, i.selectedName.y + 100, a(312), a(343)),
            i.watch_gift_desc.anchor[a(348)](.5),
            i[a(304)](i[a(343)]),
            i[a(386)] = new (Phaser[a(385)])(i[a(356)],0,0,"",{
                font: APP_FONT,
                fontWeight: 400,
                fontSize: 17,
                fill: a(317),
                align: a(264)
            }),
            i[a(386)].anchor[a(348)](.5),
            i[a(343)][a(279)](i[a(386)]),
            i[a(334)] = new jt(i[a(356)],i[a(347)].x + i[a(347)].width / 2 - 5,0,a(312),a(281)),
            i[a(334)][a(344)][a(348)](.5, 0),
            i[a(334)].y = i.screen[a(265)].y + i.screen[a(265)][a(338)] - i[a(334)][a(338)] - 20,
            i[a(334)].click(i[a(260)], Ru(i)),
            i.add(i.watchButton),
            i[a(369)] = l,
            i.updateSelectedItem(i[a(349)]),
            i
        }
        return n = c,
        i = xu,
        (r = [{
            key: e(260),
            value: function() {
                var t = e;
                Mt[t(342)][t(336)] ? Mt[t(342)][t(361)](Mt[t(340)]) : new M(game,{
                    text: CyberInstance[t(327)][t(307)],
                    buttonText: CyberInstance[t(327)][t(324)],
                    hideCloseButton: !0
                })
            }
        }, {
            key: "onAdReward",
            value: function() {
                var t = e
                  , n = new (SFS2X[t(371)]);
                n[t(323)]("id", this[t(349)]),
                CyberInstance[t(301)][t(313)](new (SFS2X[t(306)])(t(305),n)),
                this.screen[t(351)]()
            }
        }, {
            key: e(355),
            value: function(t) {
                for (var n, r = e, i = t.getInt("id"), a = Bu[i + ""], o = 0; o < this[r(298)][r(268)]; o++)
                    if (this.giftItems[o][r(321)] == i) {
                        n = this[r(298)][o];
                        break
                    }
                if (t[r(262)](r(320))) {
                    n.watch.visible = !1,
                    n[r(375)].visible = !0;
                    var s = 864e5 * a[r(270)];
                    ot[r(342)][r(263)](i, s),
                    new Tc(game,{
                        type: "AVATAR",
                        id: i,
                        duration: a.quantity
                    })
                } else {
                    var c = ot[r(342)][r(295)](i) + 1;
                    ot[r(342)].updateWatchCount(i, c),
                    n[r(359)][r(374)](a[r(288)] - ot[r(342)][r(295)](i))
                }
                this.updateSelectedItem(i)
            }
        }, {
            key: e(314),
            value: function(t) {
                var n = e
                  , r = new jt(this[n(356)],0,0,n(312),"gift_item");
                r[n(321)] = t.id,
                r[n(384)](this[n(297)], this);
                var i = this[n(356)][n(284)][n(276)](0, 0, n(312), n(358));
                i[n(354)] = this[n(349)] == t.id,
                r[n(279)](i),
                r[n(326)] = i;
                var a = new (Phaser[n(385)])(this[n(356)],r[n(346)] / 2,11,t.name,{
                    font: APP_FONT,
                    fontWeight: 400,
                    fontSize: 19,
                    fill: n(317)
                });
                a.anchor.setTo(.5, 0),
                r.addChild(a);
                var o = this[n(356)][n(284)][n(276)](r[n(346)] / 2, r.height / 2 - 10, n(312), t[n(272)]);
                if (o[n(344)][n(348)](.5),
                r[n(279)](o),
                t[n(350)]) {
                    var s = new (Phaser[n(385)])(this[n(356)],r[n(346)] / 2,164,h[n(303)](t[n(350)]),{
                        font: APP_FONT,
                        fontWeight: 500,
                        fontSize: 18,
                        fill: n(362)
                    });
                    r[n(279)](s);
                    var c = s[n(346)]
                      , u = this[n(356)][n(284)].image(r[n(346)] / 2 - c, 162, n(312), n(269));
                    r[n(279)](u),
                    c > 0 ? (u.x = r[n(346)] / 2 - (u.width + 10 + c) / 2,
                    s.x = u.x + u[n(346)] + 10) : (u.x = 30,
                    s.x = u.x + u[n(346)] + 10)
                } else {
                    var l = this[n(356)].make[n(276)](0, 158, n(312), n(266));
                    if (l.x = r.width / 2 - l.width / 2,
                    r.addChild(l),
                    r[n(375)] = l,
                    ot[n(342)][n(352)](t.id))
                        l[n(354)] = !0;
                    else {
                        var f = this.game[n(284)][n(276)](0, 162, n(312), "watch_bage");
                        f.x = r[n(346)] / 2 - f[n(346)] / 2,
                        r[n(279)](f);
                        var p = ot[n(342)][n(295)](t.id)
                          , y = new (Phaser[n(385)])(this[n(356)],106,17,t.ads - p,{
                            font: APP_FONT,
                            fontWeight: 500,
                            fontSize: 18,
                            fill: n(289)
                        });
                        y[n(344)][n(348)](.5),
                        f.addChild(y),
                        r.watchText = y,
                        r[n(315)] = f,
                        l[n(354)] = !1
                    }
                }
                return r
            }
        }, {
            key: e(297),
            value: function(t) {
                for (var n = e, r = 0; r < this[n(298)][n(268)]; r++)
                    if (this[n(298)][r][n(321)] == this[n(349)]) {
                        this[n(298)][r].overlay[n(354)] = !1;
                        break
                    }
                this.currentItemId = t.itemId,
                t[n(326)].visible = !0,
                this[n(280)](t[n(321)])
            }
        }, {
            key: e(280),
            value: function(t) {
                var n = e
                  , r = Bu[t + ""];
                if (this[n(379)][n(339)]("shopScreen", r[n(272)]),
                this[n(290)][n(374)](r.name),
                this[n(379)][n(275)].setTo(1.35),
                r.chip) {
                    this.inputBg.visible = !0,
                    this[n(373)].visible = !0,
                    this[n(331)][n(354)] = !0,
                    this[n(343)][n(354)] = !1,
                    this[n(334)][n(354)] = !1,
                    this.chipText.setText(h.formatCoinWithCommas(r[n(350)]));
                    var i = this[n(331)][n(346)];
                    i > 0 ? (this[n(373)].x = this[n(283)][n(265)].x + this[n(283)][n(265)][n(346)] / 2 - (this[n(373)][n(346)] + 15 + i) / 2 - 10,
                    this[n(331)].x = this[n(373)].x + this[n(373)][n(346)] + 15) : (this[n(373)].x = this[n(283)][n(265)].x + 50,
                    this.chipText.x = this[n(373)].x + this[n(373)][n(346)] + 15)
                } else if (this.inputBg[n(354)] = !1,
                this[n(373)].visible = !1,
                this[n(331)].visible = !1,
                this[n(383)].visible = !1,
                ot[n(342)][n(352)](r.id)) {
                    this[n(334)][n(354)] = !1;
                    var a = "Xem " + r[n(288)] + n(329) + r[n(274)] + n(364) + r[n(270)] + n(378);
                    this.watch_gift_desc_text[n(374)](a)
                } else {
                    this[n(343)][n(354)] = !0,
                    this[n(334)][n(354)] = !0;
                    var o = "Xem " + r.ads + n(329) + r[n(274)] + "\nsử dụng trong " + r[n(270)] + n(378);
                    this[n(386)][n(374)](o)
                }
            }
        }, {
            key: e(368),
            value: function(t) {
                var n = e
                  , r = new (Phaser[n(282)])(0,0,t,t)
                  , i = game[n(284)][n(276)](0, 0, n(312), n(333));
                i[n(346)] = t,
                i[n(338)] = t;
                var a = game.make[n(363)]();
                a[n(311)](i),
                i.destroy();
                var o = this[n(356)].make[n(363)](t, t);
                o[n(337)](this[n(300)], a, r),
                this[n(347)].loadTexture(o),
                this[n(347)][n(346)] = t,
                this.avatar.height = t
            }
        }, {
            key: e(291),
            value: function() {
                var t = e;
                Pu(Eu(c[t(294)]), t(291), this)[t(316)](this)
            }
        }]) && Cu(n[i(294)], r),
        Object[i(296)](n, i(294), {
            writable: !1
        }),
        c
    }(Phaser[Su(372)]);
    function Du(t) {
        var e = zu;
        return (Du = e(586) == typeof Symbol && e(492) == typeof Symbol[e(512)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(586) == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? n(492) : typeof t
        }
        )(t)
    }
    function Fu(t, e) {
        for (var n = zu, r = 0; r < e[n(474)]; r++) {
            var i = e[r];
            i.enumerable = i[n(485)] || !1,
            i[n(527)] = !0,
            n(591)in i && (i[n(583)] = !0),
            Object.defineProperty(t, i[n(506)], i)
        }
    }
    function Nu() {
        var t = zu;
        return Nu = typeof Reflect !== t(499) && Reflect[t(529)] ? Reflect.get[t(575)]() : function(e, n, r) {
            var i = t
              , a = Lu(e, n);
            if (a) {
                var o = Object[i(516)](a, n);
                return o[i(529)] ? o[i(529)][i(541)](arguments[i(474)] < 3 ? e : r) : o[i(591)]
            }
        }
        ,
        Nu[t(514)](this, arguments)
    }
    function Lu(t, e) {
        for (var n = zu; !Object[n(480)][n(486)][n(541)](t, e) && null !== (t = Wu(t)); )
            ;
        return t
    }
    function Gu(t, e) {
        var n = zu;
        return (Gu = Object[n(603)] ? Object[n(603)].bind() : function(t, e) {
            return t[n(545)] = e,
            t
        }
        )(t, e)
    }
    function Mu(t, e) {
        var n = zu;
        if (e && (Du(e) === n(539) || "function" == typeof e))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(488));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(zu(487));
            return t
        }(t)
    }
    function Wu(t) {
        var e = zu;
        return (Wu = Object[e(603)] ? Object.getPrototypeOf[e(575)]() : function(t) {
            return t[e(545)] || Object.getPrototypeOf(t)
        }
        )(t)
    }
    function zu(t, e) {
        var n = Uu();
        return (zu = function(t, e) {
            return n[t -= 473]
        }
        )(t, e)
    }
    function Uu() {
        var t = ["1400040COMbMw", "3gXmNqA", "setPrototypeOf", "profileGroup", "length", "emoji_tab_active", "setText", "add", "no_avatar", "avatarKey", "prototype", "addChild", "init", "click", "text", "enumerable", "hasOwnProperty", "this hasn't been initialised - super() hasn't been called", "Derived constructors may only return object or undefined", "currentTab", "chip_tab", "destroy", "symbol", "Cannot call a class as a function", "emoContent", "checkImageKey", "#f5c78a", "addContents", "#bc6f80", "undefined", "avatar", "visible", "applyTexture", "homeScreenBG2", "avatar_tab_active", "buttonText", "key", "alphaMask", "setStyle", "loadTexture", "updateContent", "rightBg", "iterator", "Tương tác", "apply", "events", "getOwnPropertyDescriptor", "avatar_bg", "emoTab", "instance", "playButtonSound", "55JMIIPO", "height", "homeScreenBG1", "atlasJSONHash", "emoji_tab", "avatarTab", "configurable", "3026247RBpuGU", "get", "close_icon", "/bigImage/homeScreenBG2.jpg", "wrapBg", "addText", "world", "shopScreen", "#fbafb3", "Khung hình\nđại diện", "18438570ZHzjnL", "object", "profileCoin", "call", "screenReady", "gift_tab_active", "start", "__proto__", "bitmapData", "group", "openLoadingPopup", "chipTab", "onInputDown", "cache", "2101734AXVKvO", "load", "create", "chip_tab_active", "construct", "gift_tab", "tabIdx", "addProfileInfo", "assetUrl", "giftTab", "getCoin", "iapContent", "wrap", "image", "make", "Quà tặng", "defineProperty", "controller", "width", "preload", "#ffc6b7", "closeLoadingPopup", "setTo", "bind", "529027bbwnAF", "formatCoinWithCommas", "HomeScreen", "updateProfileCoin", "getGuserid", "/atlas/shopScreen/shop.png", "valueOf", "writable", "getDisplayName", "background", "function", "348188iEmQhQ", "sound", "sham", "addTabs", "value", "game", "avatarContent", "1954454vyKEZu", "giftContent", "Rectangle", "shutdown", "center", "inited", "onTabClick"];
        return (Uu = function() {
            return t
        }
        )()
    }
    !function(t, e) {
        for (var n = zu, r = t(); ; )
            try {
                if (542378 == -parseInt(n(576)) / 1 + -parseInt(n(594)) / 2 * (parseInt(n(602)) / 3) + -parseInt(n(587)) / 4 * (-parseInt(n(521)) / 5) + -parseInt(n(552)) / 6 + -parseInt(n(528)) / 7 + -parseInt(n(601)) / 8 + parseInt(n(538)) / 9)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Uu);
    const Vu = function(t) {
        var e = zu;
        !function(t, e) {
            var n = zu;
            if (typeof e !== n(586) && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t[n(480)] = Object[n(554)](e && e[n(480)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(568)](t, n(480), {
                writable: !1
            }),
            e && Gu(t, e)
        }(u, t);
        var n, r, i, a, o, c = (a = u,
        o = function() {
            var t = zu;
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect[t(556)][t(589)])
                return !1;
            if (typeof Proxy === t(586))
                return !0;
            try {
                return Boolean[t(480)][t(582)][t(541)](Reflect[t(556)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = zu, n = Wu(a);
            if (o) {
                var r = Wu(this).constructor;
                t = Reflect[e(556)](n, arguments, r)
            } else
                t = n.apply(this, arguments);
            return Mu(this, t)
        }
        );
        function u() {
            var t = zu;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(zu(493))
            }(this, u),
            c[t(541)](this)
        }
        return n = u,
        i = zu,
        (r = [{
            key: e(482),
            value: function() {
                var t = e;
                Nu(Wu(u[t(480)]), "init", this)[t(541)](this),
                this[t(569)] || (this[t(569)] = new Rc(this)),
                bt[t(519)].inited ? this[t(489)] = 1 : this[t(489)] = 2,
                this[t(585)] = this.add[t(565)](0, 0, t(523)),
                this.background[t(570)] = this[t(592)][t(570)],
                this[t(585)][t(522)] = this[t(592)][t(522)]
            }
        }, {
            key: e(571),
            value: function() {
                var t = e;
                this[t(548)](),
                this.game[t(551)][t(495)](t(503)) || this[t(553)][t(565)](t(503), window[t(560)] + t(531)),
                this[t(592)][t(551)][t(495)]("shopScreen") || this[t(553)][t(524)](t(535), window.assetUrl + t(581), window.assetUrl + "/atlas/shopScreen/shop.json")
            }
        }, {
            key: "create",
            value: function() {
                var t = e;
                this[t(573)](),
                this[t(585)][t(509)]("homeScreenBG2"),
                this.background[t(570)] = this[t(592)][t(570)],
                this[t(585)][t(522)] = this.game[t(522)],
                this[t(477)][t(565)](this[t(592)].width / 2, 20, t(535), CyberInstance.langCode + "_title").anchor[t(574)](.5, 0);
                var n = this[t(477)][t(565)](0, 20, t(535), t(530));
                n.x = this[t(592)][t(570)] - n[t(570)] - 20,
                n.inputEnabled = !0,
                n[t(515)][t(550)].addOnce((function() {
                    var e = t;
                    CyberInstance[e(588)][e(520)](),
                    this[e(592)].state[e(544)](e(578), !0, !1)
                }
                ), this),
                this[t(532)] = this[t(477)][t(565)](0, 0, "shopScreen", t(564)),
                this.wrapBg.y = this.game[t(522)] / 2 - this[t(532)][t(522)] / 2,
                this[t(511)] = this[t(477)][t(565)](0, this[t(532)].y, t(535), "right_bg"),
                this.addTabs(),
                this[t(497)](),
                this[t(559)](),
                this[t(592)].time[t(515)][t(477)](100, (function() {
                    s[t(571)]()
                }
                )),
                this[t(542)] = !0
            }
        }, {
            key: e(497),
            value: function() {
                var t = e;
                this.iapContent = new zc(this[t(592)],this[t(532)].x + 30,this[t(532)].y + 16),
                this[t(563)][t(501)] = !1,
                this[t(592)][t(534)].add(this[t(563)]),
                this[t(595)] = new cu(this[t(592)],this[t(532)].x + 11,this[t(532)].y + 16,this),
                this[t(595)].visible = !1,
                this[t(592)][t(534)][t(477)](this[t(595)]),
                this[t(593)] = new Au(this[t(592)],this[t(532)].x + 11,this[t(532)].y + 16,this),
                this[t(593)][t(501)] = !1,
                this[t(592)][t(534)][t(477)](this[t(593)]),
                this.emoContent = new Iu(this[t(592)],this[t(532)].x + 11,this[t(532)].y + 16,this),
                this.emoContent[t(501)] = !1,
                this.game[t(534)][t(477)](this[t(494)]),
                this[t(511)][t(501)] = !1,
                this.updateContent()
            }
        }, {
            key: e(590),
            value: function() {
                var t = e
                  , n = this.wrapBg.y + 25;
                this[t(549)] = new jt(this[t(592)],0,n,t(535),1 == this[t(489)] ? t(555) : "chip_tab"),
                this[t(549)][t(533)]("Chip", {
                    font: APP_FONT,
                    fill: 1 == this[t(489)] ? t(572) : t(498),
                    fontWeight: 400,
                    fontSize: 24
                }),
                this[t(549)].buttonText.x = 140,
                this.chipTab[t(558)] = 1,
                this[t(549)][t(483)](this[t(600)], this),
                this[t(592)].world[t(481)](this.chipTab),
                this[t(549)].x = this[t(592)].width / 2 - (this[t(549)][t(570)] + this[t(532)].width) / 2,
                this[t(532)].x = this[t(549)].x + this.chipTab[t(570)],
                this.rightBg.x = this[t(532)].x + this[t(532)][t(570)] - this[t(511)][t(570)],
                bt[t(519)][t(599)] ? n += this[t(549)][t(522)] + 10 : this[t(549)][t(501)] = !1,
                this[t(561)] = new jt(this[t(592)],this[t(549)].x,n,t(535),2 == this[t(489)] ? t(543) : "gift_tab"),
                this.giftTab[t(533)](t(567), {
                    font: APP_FONT,
                    fill: 2 == this.currentTab ? "#ffc6b7" : t(498),
                    fontWeight: 400,
                    fontSize: 24
                }),
                this.giftTab[t(558)] = 2,
                this[t(561)][t(505)].x = 140,
                this[t(561)][t(483)](this[t(600)], this),
                this[t(592)].world[t(481)](this[t(561)]),
                n += this[t(549)][t(522)] + 10,
                this[t(518)] = new jt(this[t(592)],this[t(549)].x,n,"shopScreen",3 == this[t(489)] ? "emoji_tab_active" : t(525)),
                this[t(518)].addText(t(513), {
                    font: APP_FONT,
                    fill: 3 == this.currentTab ? t(572) : t(498),
                    fontWeight: 400,
                    fontSize: 24
                }),
                this[t(518)][t(558)] = 3,
                this[t(518)].buttonText.x = 140,
                this.emoTab.click(this[t(600)], this),
                this.game[t(534)][t(481)](this.emoTab),
                this[t(518)][t(501)] = !1,
                this[t(526)] = new jt(this[t(592)],this[t(549)].x,n,t(535),4 == this[t(489)] ? t(504) : "avatar_tab"),
                this[t(526)].addText(t(537), {
                    font: APP_FONT,
                    fill: 4 == this[t(489)] ? "#ffc6b7" : t(498),
                    fontWeight: 400,
                    fontSize: 24,
                    align: t(598)
                }),
                this[t(526)].tabIdx = 4,
                this[t(526)][t(505)].x = 140,
                this[t(526)][t(483)](this[t(600)], this),
                this[t(592)].world[t(481)](this[t(526)]),
                n += this[t(549)][t(522)] + 10
            }
        }, {
            key: e(600),
            value: function(t) {
                var n = e;
                t.tabIdx != this[n(489)] && (this[n(489)] = t[n(558)],
                this.chipTab[n(509)]("shopScreen", 1 == this[n(489)] ? "chip_tab_active" : n(490)),
                this[n(561)][n(509)](n(535), 2 == this[n(489)] ? "gift_tab_active" : n(557)),
                this[n(518)][n(509)](n(535), 3 == this[n(489)] ? n(475) : n(525)),
                this.avatarTab[n(509)](n(535), 4 == this[n(489)] ? n(504) : "avatar_tab"),
                this[n(549)][n(505)][n(508)]({
                    font: APP_FONT,
                    fill: 1 == this.currentTab ? n(572) : n(498),
                    fontWeight: 400,
                    fontSize: 24
                }),
                this[n(561)].buttonText[n(508)]({
                    font: APP_FONT,
                    fill: 2 == this[n(489)] ? n(572) : n(498),
                    fontWeight: 400,
                    fontSize: 24
                }),
                this[n(518)][n(505)][n(508)]({
                    font: APP_FONT,
                    fill: 3 == this[n(489)] ? n(572) : n(498),
                    fontWeight: 400,
                    fontSize: 24
                }),
                this[n(526)][n(505)].setStyle({
                    font: APP_FONT,
                    fill: 4 == this[n(489)] ? n(572) : n(498),
                    fontWeight: 400,
                    fontSize: 24
                }),
                this[n(510)]())
            }
        }, {
            key: e(510),
            value: function() {
                var t = e;
                this.iapContent[t(501)] = 1 == this.currentTab,
                this[t(595)][t(501)] = 2 == this[t(489)],
                this[t(494)][t(501)] = 3 == this[t(489)],
                this[t(593)][t(501)] = 4 == this[t(489)],
                this[t(511)][t(501)] = 1 != this[t(489)]
            }
        }, {
            key: e(559),
            value: function() {
                var t = e;
                this.profileGroup = this[t(592)][t(477)][t(547)]();
                var n = this[t(473)].create(15, 0, "shopScreen", t(517));
                n.y = this[t(592)][t(522)] - n.height - 5;
                var r = this[t(592)][t(477)][t(484)](n.x + 105, n.y + 15, ie[t(519)][t(584)](), {
                    font: APP_FONT,
                    fontSize: 26,
                    fill: t(536),
                    fontWeight: 400
                });
                this.profileGroup[t(477)](r),
                this[t(540)] = this[t(592)][t(477)][t(484)](r.x, r.y + 35, h[t(577)](ie[t(519)][t(562)]()), {
                    font: APP_FONT,
                    fontSize: 24,
                    fill: t(496),
                    fontWeight: 400
                }),
                this[t(473)].add(this[t(540)]),
                this[t(479)] = t(500) + ie[t(519)][t(580)](),
                this[t(592)][t(551)][t(495)](this.avatarKey) ? (this[t(500)] = this[t(592)].make[t(565)](15, 15, this[t(479)]),
                this[t(502)](88)) : (this[t(500)] = this[t(592)][t(566)][t(565)](15, 15, t(535), "no_avatar"),
                this[t(500)].width = 88,
                this.avatar[t(522)] = 88,
                this.game[t(553)][t(565)](this[t(479)], CyberInstance[t(500)]),
                this.game.load[t(544)]()),
                this[t(500)].x = n.x + 2,
                this[t(500)].y = n.y + 2,
                this[t(473)].add(this[t(500)])
            }
        }, {
            key: e(502),
            value: function(t) {
                var n = e
                  , r = new (Phaser[n(596)])(0,0,t,t)
                  , i = game.make.image(0, 0, n(535), n(478));
                i[n(570)] = t,
                i[n(522)] = t;
                var a = game[n(566)][n(546)]();
                a[n(553)](i),
                i[n(491)]();
                var o = this[n(592)].make[n(546)](t, t);
                o[n(507)](this[n(479)], a, r),
                this[n(500)][n(509)](o),
                this.avatar[n(570)] = t,
                this[n(500)].height = t
            }
        }, {
            key: e(579),
            value: function(t) {
                var n = e;
                this[n(540)] && this[n(540)][n(476)](h[n(577)](t))
            }
        }, {
            key: e(597),
            value: function() {
                var t = e;
                Nu(Wu(u[t(480)]), t(597), this).call(this)
            }
        }]) && Fu(n.prototype, r),
        Object[i(568)](n, i(480), {
            writable: !1
        }),
        u
    }(pe);
    var Hu = th;
    function Xu(t) {
        var e = th;
        return (Xu = e(158) == typeof Symbol && e(180) == typeof Symbol[e(145)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(158) == typeof Symbol && t[n(189)] === Symbol && t !== Symbol[n(126)] ? n(180) : typeof t
        }
        )(t)
    }
    function Yu(t, e) {
        for (var n = th, r = 0; r < e[n(124)]; r++) {
            var i = e[r];
            i.enumerable = i[n(197)] || !1,
            i[n(174)] = !0,
            n(142)in i && (i.writable = !0),
            Object.defineProperty(t, i[n(161)], i)
        }
    }
    function qu() {
        var t = th;
        return qu = "undefined" != typeof Reflect && Reflect.get ? Reflect[t(199)].bind() : function(e, n, r) {
            var i = t
              , a = Ku(e, n);
            if (a) {
                var o = Object[i(183)](a, n);
                return o[i(199)] ? o[i(199)][i(146)](arguments.length < 3 ? e : r) : o[i(142)]
            }
        }
        ,
        qu[t(194)](this, arguments)
    }
    function Ku(t, e) {
        for (var n = th; !Object[n(126)][n(109)].call(t, e) && null !== (t = $u(t)); )
            ;
        return t
    }
    function Ju() {
        var t = ["destroy", "shopScreen", "selectedName", "rightBg", "create", "configurable", "image", "undefined", "loadTexture", "getGuserid", "make", "symbol", "game", "viewList", "getOwnPropertyDescriptor", "itemId", "no_avatar", "screen", "6451zYkbrd", "1257IjyIOx", "constructor", "getPrototypeOf", "add", "Super expression must either be null or a function", "object", "apply", "push", "Group", "enumerable", "setText", "get", "262clNSRW", "selectedItem", "hasOwnProperty", "11fUWVyf", "sham", "currentItemId", "listView", "cache", "click", "222DAoGkc", "icon", "9036qQdgEM", "Derived constructors may only return object or undefined", "valueOf", "Cannot call a class as a function", "overlay", "gift_item", "length", "addChild", "prototype", "checkImageKey", "items", "Số lượng: ", "866500MVEFpD", "bitmapData", "this hasn't been initialised - super() hasn't been called", "addItem", "applyTexture", "giftItems", "bind", "height", "#f5c78a", "defineProperty", "18kVXyDV", "instance", "value", "gift_item_active", "setPrototypeOf", "iterator", "call", "scale", "width", "1336304hndTmY", "setTo", "load", "alphaMask", "138327eEcQyh", "construct", "508332zTvAmz", "onBoxClick", "avatarKey", "function", "name", "visible", "key", "Text", "1329905bpyXNr", "updateSelectedItem", "avatar", "Rectangle", "__proto__", "anchor"];
        return (Ju = function() {
            return t
        }
        )()
    }
    function Qu(t, e) {
        var n = th;
        return (Qu = Object[n(144)] ? Object[n(144)][n(136)]() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function Zu(t, e) {
        var n = th;
        if (e && (Xu(e) === n(193) || typeof e === n(158)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(119));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(th(132));
            return t
        }(t)
    }
    function $u(t) {
        var e = th;
        return ($u = Object.setPrototypeOf ? Object[e(190)].bind() : function(t) {
            var n = e;
            return t[n(167)] || Object[n(190)](t)
        }
        )(t)
    }
    function th(t, e) {
        var n = Ju();
        return (th = function(t, e) {
            return n[t -= 109]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = th, r = t(); ; )
            try {
                if (496487 == parseInt(n(187)) / 1 * (parseInt(n(200)) / 2) + parseInt(n(188)) / 3 * (parseInt(n(118)) / 4) + -parseInt(n(163)) / 5 + -parseInt(n(116)) / 6 * (parseInt(n(153)) / 7) + -parseInt(n(149)) / 8 + -parseInt(n(140)) / 9 * (parseInt(n(130)) / 10) + parseInt(n(110)) / 11 * (parseInt(n(155)) / 12))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Ju);
    var eh = null;
    const nh = function(t) {
        var e = th;
        !function(t, e) {
            var n = th;
            if (typeof e !== n(158) && null !== e)
                throw new TypeError(n(192));
            t.prototype = Object[n(173)](e && e[n(126)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(139)](t, n(126), {
                writable: !1
            }),
            e && Qu(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = th;
            if (typeof Reflect === t(176) || !Reflect[t(154)])
                return !1;
            if (Reflect[t(154)][t(111)])
                return !1;
            if (typeof Proxy === t(158))
                return !0;
            try {
                return Boolean[t(126)][t(120)].call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = th, n = $u(a);
            if (o) {
                var r = $u(this)[e(189)];
                t = Reflect[e(154)](n, arguments, r)
            } else
                t = n[e(194)](this, arguments);
            return Zu(this, t)
        }
        );
        function c(t, e, n, r) {
            var i, a = th;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(th(121))
            }
            )(this, c),
            (i = s[a(146)](this, t)).screen = r,
            i[a(112)] = 20;
            var o = e
              , u = n;
            i.listView = new Ar({
                x: o,
                y: u,
                column: 4,
                width: 638,
                height: 434,
                rowHeight: 213,
                columnWidth: 155,
                row: 1,
                leftDistance: 0,
                rightDistance: 0,
                distanceBetweenColumns: 6,
                distanceBetweenRows: 4,
                direction: "y"
            },i[a(181)]),
            i[a(191)](i[a(113)]),
            null == eh && (eh = ot.getGiftItems()),
            i[a(135)] = [];
            var h = 0;
            for (var l in eh) {
                var f = eh[l];
                ot[a(141)][a(128)][a(199)](f.id) && (0 == h && (i[a(112)] = f.id),
                i[a(135)][a(195)](i.addItem(f)),
                h++)
            }
            return i[a(113)][a(182)] = i.giftItems,
            i[a(157)] = a(165) + ie[a(141)][a(178)](),
            i[a(181)][a(114)][a(127)](i[a(157)]) ? (i[a(165)] = i[a(181)].make[a(175)](57, 90, i[a(157)]),
            i[a(134)](116)) : (i[a(165)] = i.game.make[a(175)](57, 90, a(170), a(185)),
            i.avatar[a(148)] = 116,
            i[a(165)][a(137)] = 116),
            i[a(165)].x = i.screen.rightBg.x + i[a(165)].x,
            i[a(165)].y = i[a(186)][a(172)].y + i[a(165)].y,
            i[a(191)](i[a(165)]),
            i[a(171)] = new (Phaser[a(162)])(i[a(181)],i[a(165)].x + i.avatar[a(148)] / 2,i[a(165)].y + i[a(165)][a(148)] + 30,"",{
                font: APP_FONT,
                fontWeight: 400,
                fontSize: 24,
                fill: "#f5a3b1"
            }),
            i.selectedName[a(168)][a(150)](.5, 0),
            i[a(191)](i[a(171)]),
            i[a(201)] = i[a(181)].make[a(175)](i.avatar.x + i[a(165)][a(148)] / 2, i[a(165)].y + i[a(165)][a(148)] / 2, a(170), a(185)),
            i.selectedItem[a(168)][a(150)](.5),
            i[a(191)](i.selectedItem),
            0 == h ? (i[a(201)][a(160)] = !1,
            i[a(201)][a(160)] = !1,
            i[a(165)][a(160)] = !1) : i[a(164)](i.currentItemId),
            i
        }
        return n = c,
        i = th,
        (r = [{
            key: e(133),
            value: function(t) {
                var n = e
                  , r = new jt(this.game,0,0,n(170),n(123));
                r[n(184)] = t.id,
                r[n(115)](this[n(156)], this);
                var i = this[n(181)].make[n(175)](0, 0, "shopScreen", n(143));
                i[n(160)] = this[n(112)] == t.id,
                r[n(125)](i),
                r[n(122)] = i;
                var a = new (Phaser[n(162)])(this[n(181)],r[n(148)] / 2,11,t[n(159)],{
                    font: APP_FONT,
                    fontWeight: 400,
                    fontSize: 19,
                    fill: "#f5a3b1"
                });
                a[n(168)].setTo(.5, 0),
                r.addChild(a);
                var o = this[n(181)].make[n(175)](r.width / 2, r.height / 2 - 10, "shopScreen", t[n(117)]);
                15 == t.id ? o[n(147)][n(150)](.7) : 17 == t.id && o.scale[n(150)](.85),
                o[n(168)].setTo(.5),
                r[n(125)](o);
                var s = ot[n(141)][n(128)].get(t.id);
                s || (s = 0);
                var c = new Phaser.Text(this[n(181)],r.width / 2,164,n(129) + s,{
                    font: APP_FONT,
                    fontWeight: 500,
                    fontSize: 18,
                    fill: n(138)
                });
                return c.anchor.setTo(.5, 0),
                r[n(125)](c),
                r
            }
        }, {
            key: e(156),
            value: function(t) {
                for (var n = e, r = 0; r < this.giftItems[n(124)]; r++)
                    if (this.giftItems[r][n(184)] == this[n(112)]) {
                        this[n(135)][r][n(122)].visible = !1;
                        break
                    }
                this.currentItemId = t[n(184)],
                t[n(122)][n(160)] = !0,
                this[n(164)](t[n(184)])
            }
        }, {
            key: e(164),
            value: function(t) {
                var n = e
                  , r = eh[t + ""];
                this[n(201)][n(177)]("shopScreen", r[n(117)]),
                this[n(171)][n(198)](r[n(159)])
            }
        }, {
            key: e(134),
            value: function(t) {
                var n = e
                  , r = new (Phaser[n(166)])(0,0,t,t)
                  , i = game[n(179)].image(0, 0, n(170), n(185));
                i.width = t,
                i.height = t;
                var a = game[n(179)].bitmapData();
                a[n(151)](i),
                i[n(169)]();
                var o = this[n(181)][n(179)][n(131)](t, t);
                o[n(152)](this[n(157)], a, r),
                this.avatar[n(177)](o),
                this[n(165)][n(148)] = t,
                this.avatar.height = t
            }
        }, {
            key: e(169),
            value: function() {
                var t = e;
                qu($u(c[t(126)]), t(169), this)[t(146)](this)
            }
        }]) && Yu(n.prototype, r),
        Object[i(139)](n, i(126), {
            writable: !1
        }),
        c
    }(Phaser[Hu(196)]);
    var rh = ch;
    function ih(t) {
        var e = ch;
        return (ih = e(576) == typeof Symbol && e(515) == typeof Symbol[e(577)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(576) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(562)] ? n(515) : typeof t
        }
        )(t)
    }
    function ah(t, e) {
        for (var n = ch, r = 0; r < e[n(537)]; r++) {
            var i = e[r];
            i[n(549)] = i.enumerable || !1,
            i.configurable = !0,
            n(561)in i && (i[n(540)] = !0),
            Object[n(541)](t, i[n(550)], i)
        }
    }
    function oh() {
        var t = ch;
        return oh = typeof Reflect !== t(475) && Reflect[t(530)] ? Reflect[t(530)][t(485)]() : function(e, n, r) {
            var i = t
              , a = sh(e, n);
            if (a) {
                var o = Object[i(524)](a, n);
                return o.get ? o[i(530)].call(arguments[i(537)] < 3 ? e : r) : o[i(561)]
            }
        }
        ,
        oh[t(551)](this, arguments)
    }
    function sh(t, e) {
        for (var n = ch; !Object[n(562)][n(552)][n(477)](t, e) && null !== (t = fh(t)); )
            ;
        return t
    }
    function ch(t, e) {
        var n = ph();
        return (ch = function(t, e) {
            return n[t -= 471]
        }
        )(t, e)
    }
    function uh(t, e) {
        var n = ch;
        return (uh = Object[n(497)] ? Object[n(497)][n(485)]() : function(t, e) {
            return t[n(486)] = e,
            t
        }
        )(t, e)
    }
    function hh(t, e) {
        var n = ch;
        if (e && (ih(e) === n(522) || "function" == typeof e))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(570));
        return lh(t)
    }
    function lh(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function fh(t) {
        var e = ch;
        return (fh = Object[e(497)] ? Object[e(478)][e(485)]() : function(t) {
            var n = e;
            return t[n(486)] || Object[n(478)](t)
        }
        )(t)
    }
    function ph() {
        var t = ["Super expression must either be null or a function", "#f5c78a", "Cannot call a class as a function", "getAvatarItems", "SFSObject", "destroy", "click", "onChangeDefault", "player", "then", "loadTexture", "height", "sham", "image", "36XbtjAm", "symbol", "slice", "giftItems", "HOURS", "overlay", "confirmButton", "construct", "object", "toISOString", "getOwnPropertyDescriptor", "alphaMask", "avatar", "applyTexture", "Text", "load", "get", "viewList", "width", "ExtensionRequest", "screen", "catch", "cache", "length", "903807BQoPwo", "putInt", "writable", "defineProperty", "bitmapData", "dangdung", "formatTime", "3DQwbVb", "socket", "checkImageKey", "push", "enumerable", "key", "apply", "hasOwnProperty", "listView", "floor", "Rectangle", "#f5a3b1", "gift_item_active", "gift_item", "updateSelectedItem", "getAvatar", "value", "prototype", "addItem", "setDataAsync", "itemId", "2776902MeflQx", "setTo", "icon", "valueOf", "Derived constructors may only return object or undefined", "setText", "game", "anchor", "5076988omciTA", "3368680eqZYLg", "function", "iterator", "avatarKey", "closeLoadingPopup", "onBoxClick", "make", "selectedName", "name", "undefined", "lang", "call", "getPrototypeOf", "addChild", "763776BvqjzP", "MINS", "rightBg", "defaultAvatar", "create", "bind", "__proto__", "instance", "shopScreen", "Group", "scale", "4441384eXSQbY", "selectedItem", "no_avatar", "currentItemId", "visible", "8336202DKOrJS", "setPrototypeOf", "defaultAvatarId", "add"];
        return (ph = function() {
            return t
        }
        )()
    }
    !function(t, e) {
        for (var n = ch, r = t(); ; )
            try {
                if (856655 == parseInt(n(538)) / 1 + -parseInt(n(566)) / 2 + parseInt(n(545)) / 3 * (-parseInt(n(574)) / 4) + -parseInt(n(575)) / 5 + -parseInt(n(480)) / 6 + parseInt(n(496)) / 7 + -parseInt(n(491)) / 8 * (-parseInt(n(514)) / 9))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(ph);
    var yh = null;
    const dh = function(t) {
        var e = ch;
        !function(t, e) {
            var n = ch;
            if ("function" != typeof e && null !== e)
                throw new TypeError(n(500));
            t[n(562)] = Object[n(484)](e && e[n(562)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(541)](t, n(562), {
                writable: !1
            }),
            e && uh(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = ch;
            if (typeof Reflect === t(475) || !Reflect[t(521)])
                return !1;
            if (Reflect[t(521)][t(512)])
                return !1;
            if (typeof Proxy === t(576))
                return !0;
            try {
                return Boolean.prototype[t(569)].call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = ch, n = fh(a);
            if (o) {
                var r = fh(this).constructor;
                t = Reflect[e(521)](n, arguments, r)
            } else
                t = n.apply(this, arguments);
            return hh(this, t)
        }
        );
        function c(t, e, n, r) {
            var i, a = ch;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(ch(502))
            }
            )(this, c),
            (i = s[a(477)](this, t))[a(534)] = r,
            i.currentItemId = 0;
            var o = e
              , u = n;
            i[a(553)] = new Ar({
                x: o,
                y: u,
                column: 4,
                width: 638,
                height: 434,
                rowHeight: 213,
                columnWidth: 155,
                row: 1,
                leftDistance: 0,
                rightDistance: 0,
                distanceBetweenColumns: 6,
                distanceBetweenRows: 4,
                direction: "y"
            },i[a(572)]),
            i[a(499)](i[a(553)]),
            null == yh && (yh = ot[a(503)]()),
            i[a(517)] = [];
            var h = 0;
            for (var l in yh) {
                var f = yh[l];
                ot[a(487)][a(560)](f.id) ? (i[a(517)].push(i[a(563)](f)),
                h++) : 0 == f.id && (i.giftItems[a(548)](i[a(563)](f)),
                h++)
            }
            return i[a(553)][a(531)] = i[a(517)],
            i[a(578)] = "avatar" + ie.instance.getGuserid(),
            i[a(572)][a(536)][a(547)](i[a(578)]) ? (i[a(526)] = i[a(572)][a(472)].image(57, 90, i.avatarKey),
            i[a(527)](116)) : (i[a(526)] = i.game[a(472)][a(513)](57, 90, a(488), a(493)),
            i[a(526)][a(532)] = 116,
            i[a(526)][a(511)] = 116),
            i[a(526)].x = i.screen[a(482)].x + i[a(526)].x,
            i.avatar.y = i[a(534)][a(482)].y + i.avatar.y,
            i[a(499)](i[a(526)]),
            i[a(473)] = new (Phaser[a(528)])(i[a(572)],i[a(526)].x + i[a(526)][a(532)] / 2,i.avatar.y + i[a(526)][a(532)] + 30,"",{
                font: APP_FONT,
                fontWeight: 400,
                fontSize: 24,
                fill: "#f5a3b1"
            }),
            i[a(473)][a(573)][a(567)](.5, 0),
            i.add(i[a(473)]),
            i[a(492)] = i[a(572)][a(472)][a(513)](i[a(526)].x + i.avatar[a(532)] / 2, i[a(526)].y + i[a(526)].width / 2, "shopScreen", a(493)),
            i[a(492)][a(573)][a(567)](.5),
            i[a(499)](i[a(492)]),
            i[a(520)] = new jt(i[a(572)],0,0,a(488),"sudung"),
            i.confirmButton.x = i[a(526)].x + i[a(526)][a(532)] / 2 - 5 - i.confirmButton[a(532)] / 2,
            i[a(520)].y = i[a(534)][a(482)].y + i[a(534)][a(482)][a(511)] - i[a(520)][a(511)] - 50,
            i.confirmButton[a(506)](i[a(507)], lh(i)),
            i[a(499)](i[a(520)]),
            0 == h ? (i.confirmButton[a(495)] = !1,
            i[a(492)][a(495)] = !1,
            i.selectedItem[a(495)] = !1,
            i[a(526)][a(495)] = !1) : i[a(559)](i[a(494)]),
            i
        }
        return n = c,
        i = ch,
        (r = [{
            key: e(507),
            value: function() {
                var t = e
                  , n = this;
                this[t(534)].openLoadingPopup(),
                FBInstant[t(508)][t(564)]({
                    avatar: this[t(494)]
                })[t(509)]((function() {
                    var e = t;
                    CyberGlobalData[e(498)] = n[e(494)],
                    n[e(534)][e(579)](),
                    n.updateSelectedItem(n[e(494)]);
                    var r = new (SFS2X[e(504)]);
                    r[e(539)]("id", CyberGlobalData[e(498)]),
                    CyberInstance[e(546)].send(new (SFS2X[e(533)])("shop.setDefaultAvatar",r));
                    for (var i = 0; i < n.giftItems[e(537)]; i++)
                        n[e(517)][i][e(565)] === CyberGlobalData.defaultAvatarId ? n.giftItems[i][e(483)][e(495)] = !0 : n.giftItems[i][e(483)][e(495)] = !1
                }
                ))[t(535)]((function() {
                    var e = t;
                    n[e(534)][e(579)]()
                }
                ))
            }
        }, {
            key: e(505),
            value: function() {
                var t = e;
                oh(fh(c[t(562)]), t(505), this)[t(477)](this)
            }
        }, {
            key: "addItem",
            value: function(t) {
                var n = e
                  , r = new jt(this[n(572)],0,0,n(488),n(558));
                r.itemId = t.id,
                r[n(506)](this[n(471)], this);
                var i = this[n(572)].make[n(513)](0, 0, "shopScreen", n(557));
                i[n(495)] = this.currentItemId == t.id,
                r.addChild(i),
                r[n(519)] = i;
                var a = new Phaser.Text(this[n(572)],r[n(532)] / 2,11,t.name,{
                    font: APP_FONT,
                    fontWeight: 400,
                    fontSize: 19,
                    fill: n(556)
                });
                a[n(573)].setTo(.5, 0),
                r[n(479)](a);
                var o = this[n(572)][n(472)][n(513)](r[n(532)] / 2, r[n(511)] / 2 - 10, n(488), t[n(568)]);
                o[n(573)].setTo(.5),
                r[n(479)](o);
                var s = this[n(572)][n(472)].image(r.width / 2, r[n(511)] / 2 - 10, n(488), n(543));
                if (s[n(573)].setTo(.5),
                r[n(479)](s),
                s[n(495)] = !1,
                r[n(483)] = s,
                CyberGlobalData[n(498)] === t.id && (s[n(495)] = !0),
                t.id > 0) {
                    var c = ot[n(487)].getAvatar(t.id)
                      , u = this[n(544)](c)
                      , h = new (Phaser[n(528)])(this[n(572)],r.width / 2,164,u,{
                        font: APP_FONT,
                        fontWeight: 400,
                        fontSize: 18,
                        fill: n(501)
                    });
                    h[n(573)][n(567)](.5, 0),
                    r.addChild(h)
                }
                return r
            }
        }, {
            key: e(471),
            value: function(t) {
                for (var n = e, r = 0; r < this[n(517)][n(537)]; r++)
                    if (this[n(517)][r][n(565)] == this[n(494)]) {
                        this.giftItems[r][n(519)][n(495)] = !1;
                        break
                    }
                this[n(494)] = t[n(565)],
                t[n(519)][n(495)] = !0,
                this[n(559)](t[n(565)])
            }
        }, {
            key: e(559),
            value: function(t) {
                var n = e
                  , r = yh[t + ""];
                this[n(492)].loadTexture(n(488), r[n(568)]),
                this[n(492)][n(490)][n(567)](1.35),
                this[n(473)][n(571)](r[n(474)]),
                CyberGlobalData[n(498)] === t ? this[n(520)][n(495)] = !1 : this.confirmButton[n(495)] = !0
            }
        }, {
            key: "applyTexture",
            value: function(t) {
                var n = e
                  , r = new (Phaser[n(555)])(0,0,t,t)
                  , i = game[n(472)][n(513)](0, 0, n(488), n(493));
                i[n(532)] = t,
                i[n(511)] = t;
                var a = game[n(472)][n(542)]();
                a[n(529)](i),
                i[n(505)]();
                var o = this.game[n(472)][n(542)](t, t);
                o[n(525)](this[n(578)], a, r),
                this[n(526)][n(510)](o),
                this[n(526)][n(532)] = t,
                this[n(526)][n(511)] = t
            }
        }, {
            key: e(544),
            value: function(t) {
                var n, r = e, i = 864e5, a = 36e5, o = Math[r(554)](t / i), s = Math[r(554)]((t - o * i) / a), c = Math.round((t - o * i - s * a) / 6e4);
                return 60 === c && (s++,
                c = 0),
                24 === s && (o++,
                s = 0),
                o > 0 ? (n = o + " " + CyberInstance[r(476)].DAYS,
                s > 0 ? n += " " + s + " " + CyberInstance[r(476)][r(518)] : c > 0 && (n += " " + c + " " + CyberInstance.lang[r(481)]),
                n) : new Date(t)[r(523)]()[r(516)](11, 19)
            }
        }]) && ah(n[i(562)], r),
        Object[i(541)](n, i(562), {
            writable: !1
        }),
        c
    }(Phaser[rh(489)]);
    var vh = gh;
    function bh(t) {
        var e = gh;
        return (bh = "function" == typeof Symbol && e(162) == typeof Symbol[e(138)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && "function" == typeof Symbol && t[n(147)] === Symbol && t !== Symbol[n(129)] ? "symbol" : typeof t
        }
        )(t)
    }
    function mh(t, e) {
        for (var n = gh, r = 0; r < e[n(111)]; r++) {
            var i = e[r];
            i[n(128)] = i.enumerable || !1,
            i.configurable = !0,
            n(208)in i && (i.writable = !0),
            Object[n(198)](t, i[n(112)], i)
        }
    }
    function gh(t, e) {
        var n = wh();
        return (gh = function(t, e) {
            return n[t -= 105]
        }
        )(t, e)
    }
    function wh() {
        var t = ["icon", "HOURS", "dangdung", "getPrototypeOf", "Mặc định", "card_back", "closeLoadingPopup", "value", "get", "#f5a3b1", "__proto__", "setTo", "Super expression must either be null or a function", "defaultClockId", "alphaMask", "bind", "updateSelectedItem", "length", "key", "274305hLKgLY", "loadTexture", "getOwnPropertyDescriptor", "setDataAsync", "selectedItem", "catch", "getAvatar", "applyTexture", "object", "make", "Cannot call a class as a function", "avatar", "giftItems", "formatTime", "confirmButton", "enumerable", "prototype", "construct", "6110646AeFVde", "shopScreen", "height", "instance", "202643lQotlQ", "anchor", "#f5c78a", "iterator", "valueOf", "#ca902f", "hasOwnProperty", "visible", "text", "onChangeDefault", "bitmapData", "floor", "constructor", "onBoxClick", "openLoadingPopup", "Group", "2303204uGSuxC", "DAYS", "itemId", "Roboto", "addItem", "sham", "241859kraHen", "counterText", "addChild", "16979508vHijwI", "function", "symbol", "639900FkSLRC", "#FFFFFF", "click", "listView", "load", "lang", "Derived constructors may only return object or undefined", "apply", "timer0", "viewList", "gift_item", "no_avatar", "add", "sudung", "200AckWSr", "setStyle", "getClockItems", "avatarKey", "game", "setPrototypeOf", "rightBg", "round", "call", "currentItemId", "#d35127", "slice", "this hasn't been initialised - super() hasn't been called", "width", "screen", "destroy", "push", "image", "defaultAvatar", "Text", "8BmZbgQ", "defineProperty", "overlay", "Rectangle"];
        return (wh = function() {
            return t
        }
        )()
    }
    function Ih() {
        var t = gh;
        return Ih = "undefined" != typeof Reflect && Reflect[t(209)] ? Reflect[t(209)][t(109)]() : function(e, n, r) {
            var i = t
              , a = Sh(e, n);
            if (a) {
                var o = Object[i(115)](a, n);
                return o.get ? o.get[i(185)](arguments[i(111)] < 3 ? e : r) : o[i(208)]
            }
        }
        ,
        Ih[t(170)](this, arguments)
    }
    function Sh(t, e) {
        for (var n = gh; !Object.prototype[n(141)].call(t, e) && null !== (t = Ph(t)); )
            ;
        return t
    }
    function Oh(t, e) {
        var n = gh;
        return (Oh = Object[n(182)] ? Object[n(182)][n(109)]() : function(t, e) {
            return t[n(211)] = e,
            t
        }
        )(t, e)
    }
    function kh(t, e) {
        var n = gh;
        if (e && (bh(e) === n(121) || "function" == typeof e))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(169));
        return Ch(t)
    }
    function Ch(t) {
        if (void 0 === t)
            throw new ReferenceError(gh(189));
        return t
    }
    function Ph(t) {
        var e = gh;
        return (Ph = Object[e(182)] ? Object.getPrototypeOf[e(109)]() : function(t) {
            var n = e;
            return t[n(211)] || Object[n(204)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = gh, r = t(); ; )
            try {
                if (737043 == parseInt(n(157)) / 1 + -parseInt(n(151)) / 2 + -parseInt(n(113)) / 3 * (-parseInt(n(197)) / 4) + -parseInt(n(163)) / 5 + -parseInt(n(131)) / 6 + -parseInt(n(135)) / 7 * (-parseInt(n(177)) / 8) + parseInt(n(160)) / 9)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(wh);
    var Th = null;
    const xh = function(t) {
        var e = gh;
        !function(t, e) {
            var n = gh;
            if (typeof e !== n(161) && null !== e)
                throw new TypeError(n(106));
            t[n(129)] = Object.create(e && e[n(129)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, n(129), {
                writable: !1
            }),
            e && Oh(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = gh;
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect[t(130)][t(156)])
                return !1;
            if (typeof Proxy === t(161))
                return !0;
            try {
                return Boolean.prototype[t(139)][t(185)](Reflect[t(130)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = gh, n = Ph(a);
            if (o) {
                var r = Ph(this).constructor;
                t = Reflect[e(130)](n, arguments, r)
            } else
                t = n[e(170)](this, arguments);
            return kh(this, t)
        }
        );
        function c(t, e, n, r) {
            var i, a = gh;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(gh(123))
            }
            )(this, c),
            (i = s[a(185)](this, t)).screen = r,
            i[a(186)] = 0;
            var o = e
              , u = n;
            i[a(166)] = new Ar({
                x: o,
                y: u,
                column: 4,
                width: 638,
                height: 434,
                rowHeight: 213,
                columnWidth: 155,
                row: 1,
                leftDistance: 0,
                rightDistance: 0,
                distanceBetweenColumns: 6,
                distanceBetweenRows: 4,
                direction: "y"
            },i.game),
            i[a(175)](i[a(166)]),
            null == Th && (Th = ot[a(179)]()),
            i.giftItems = [];
            var h = 0;
            for (var l in Th) {
                var f = Th[l];
                ot[a(134)][a(119)](f.id) ? (i.giftItems[a(193)](i.addItem(f)),
                h++) : 0 == f.id && (i[a(125)][a(193)](i[a(155)](f)),
                h++)
            }
            i.listView[a(172)] = i.giftItems;
            var p = i[a(181)].make[a(194)](0, i.screen.rightBg.y + 90, a(132), a(206));
            p.x = i[a(191)][a(183)].x + i[a(191)][a(183)][a(190)] / 2 - p[a(190)] / 2,
            i[a(175)](p),
            i[a(117)] = i[a(181)][a(122)][a(194)](p.x + p[a(190)] - 10, p.y + p[a(133)] - 10, "shopScreen", a(171)),
            i[a(117)].anchor[a(105)](.5),
            i[a(175)](i.selectedItem);
            var y = i[a(181)].add[a(143)](i[a(117)].x, i[a(117)].y + 2, 20, {
                font: a(154),
                fontSize: 26,
                fontWeight: 900,
                fill: a(140)
            });
            return y.anchor[a(105)](.5),
            i[a(158)] = y,
            i[a(175)](y),
            i[a(127)] = new jt(i[a(181)],0,0,a(132),a(176)),
            i.confirmButton.x = i[a(191)].rightBg.x + i[a(191)].rightBg[a(190)] / 2 - i[a(127)][a(190)] / 2,
            i[a(127)].y = i[a(191)][a(183)].y + i[a(191)][a(183)][a(133)] - i[a(127)][a(133)] - 50,
            i[a(127)][a(165)](i[a(144)], Ch(i)),
            i[a(175)](i.confirmButton),
            0 == h ? (i[a(127)][a(142)] = !1,
            i[a(117)][a(142)] = !1,
            i[a(117)][a(142)] = !1) : i[a(110)](i.currentItemId),
            i
        }
        return n = c,
        i = gh,
        (r = [{
            key: "onChangeDefault",
            value: function() {
                var t = gh
                  , e = this;
                this[t(191)][t(149)](),
                FBInstant.player[t(116)]({
                    clock: this[t(186)]
                }).then((function() {
                    var n = t;
                    CyberGlobalData[n(107)] = e.currentItemId,
                    e[n(191)][n(207)](),
                    e[n(110)](e[n(186)]);
                    for (var r = 0; r < e[n(125)][n(111)]; r++)
                        e[n(125)][r][n(153)] === CyberGlobalData[n(107)] ? e[n(125)][r].defaultAvatar.visible = !0 : e[n(125)][r][n(195)][n(142)] = !1
                }
                ))[t(118)]((function() {
                    e.screen.closeLoadingPopup()
                }
                ))
            }
        }, {
            key: e(192),
            value: function() {
                var t = e;
                Ih(Ph(c[t(129)]), t(192), this)[t(185)](this)
            }
        }, {
            key: e(155),
            value: function(t) {
                var n = e
                  , r = new jt(this[n(181)],0,0,n(132),n(173));
                r[n(153)] = t.id,
                r[n(165)](this[n(148)], this);
                var i = this.game[n(122)][n(194)](0, 0, n(132), "gift_item_active");
                i.visible = this.currentItemId == t.id,
                r[n(159)](i),
                r[n(199)] = i;
                var a = new (Phaser[n(196)])(this.game,r[n(190)] / 2,11,t.name,{
                    font: APP_FONT,
                    fontWeight: 400,
                    fontSize: 19,
                    fill: n(210)
                });
                a[n(136)][n(105)](.5, 0),
                r[n(159)](a);
                var o = this[n(181)][n(122)].image(r[n(190)] / 2, r.height / 2 - 10, n(132), t[n(201)]);
                o[n(136)].setTo(.5),
                r[n(159)](o);
                var s = this[n(181)][n(122)][n(194)](r.width / 2, r[n(133)] / 2 - 10, n(132), n(203));
                s.anchor[n(105)](.5),
                r[n(159)](s),
                s.visible = !1,
                r[n(195)] = s,
                CyberGlobalData[n(107)] === t.id && (s[n(142)] = !0);
                var c = "";
                if (t.id > 0) {
                    var u = ot[n(134)][n(119)](t.id);
                    c = this[n(126)](u)
                } else
                    c = n(205);
                var h = new (Phaser[n(196)])(this[n(181)],r[n(190)] / 2,164,c,{
                    font: APP_FONT,
                    fontWeight: 400,
                    fontSize: 18,
                    fill: n(137)
                });
                return h[n(136)][n(105)](.5, 0),
                r.addChild(h),
                r
            }
        }, {
            key: "onBoxClick",
            value: function(t) {
                for (var n = e, r = 0; r < this[n(125)][n(111)]; r++)
                    if (this.giftItems[r].itemId == this[n(186)]) {
                        this[n(125)][r][n(199)].visible = !1;
                        break
                    }
                this[n(186)] = t.itemId,
                t[n(199)][n(142)] = !0,
                this[n(110)](t[n(153)])
            }
        }, {
            key: e(110),
            value: function(t) {
                var n = e
                  , r = Th[t + ""];
                this[n(117)][n(114)](n(132), r[n(201)]),
                0 == t ? this.counterText[n(178)]({
                    font: "Roboto",
                    fontSize: 26,
                    fontWeight: 900,
                    fill: n(140)
                }) : this[n(158)][n(178)]({
                    font: n(154),
                    fontSize: 26,
                    fontWeight: 900,
                    fill: n(164),
                    stroke: n(187),
                    strokeThickness: 4
                }),
                CyberGlobalData[n(107)] === t ? this[n(127)].visible = !1 : this.confirmButton[n(142)] = !0
            }
        }, {
            key: e(120),
            value: function(t) {
                var n = e
                  , r = new (Phaser[n(200)])(0,0,t,t)
                  , i = game.make[n(194)](0, 0, n(132), n(174));
                i[n(190)] = t,
                i[n(133)] = t;
                var a = game[n(122)][n(145)]();
                a[n(167)](i),
                i.destroy();
                var o = this[n(181)][n(122)][n(145)](t, t);
                o[n(108)](this[n(180)], a, r),
                this[n(124)][n(114)](o),
                this[n(124)][n(190)] = t,
                this.avatar[n(133)] = t
            }
        }, {
            key: e(126),
            value: function(t) {
                var n, r = e, i = 864e5, a = 36e5, o = Math.floor(t / i), s = Math[r(146)]((t - o * i) / a), c = Math[r(184)]((t - o * i - s * a) / 6e4);
                return 60 === c && (s++,
                c = 0),
                24 === s && (o++,
                s = 0),
                o > 0 ? (n = o + " " + CyberInstance[r(168)][r(152)],
                s > 0 ? n += " " + s + " " + CyberInstance[r(168)][r(202)] : c > 0 && (n += " " + c + " " + CyberInstance[r(168)].MINS),
                n) : new Date(t).toISOString()[r(188)](11, 19)
            }
        }]) && mh(n.prototype, r),
        Object[i(198)](n, i(129), {
            writable: !1
        }),
        c
    }(Phaser[vh(150)]);
    function _h(t) {
        return (_h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            var e = Eh;
            return t && e(237) == typeof Symbol && t[e(327)] === Symbol && t !== Symbol[e(330)] ? "symbol" : typeof t
        }
        )(t)
    }
    function jh() {
        var t = ["avatar_tab_active", "apply", "no_avatar", "screenReady", "#fbafb3", "2486304VlSnAu", "setStyle", "Đồng hồ", "Khung hình\nđại diện", "openLoadingPopup", "avatarTab", "3298555YHfjHS", "tabIdx", "khodo", "enumerable", "profileGroup", "#f5c78a", "Derived constructors may only return object or undefined", "object", "load", "3285740vJlfJV", "width", "emoContent", "game", "undefined", "avatarKey", "destroy", "timer_tab", "background", "bitmapData", "key", "constructor", "rightBg", "setPrototypeOf", "prototype", "/atlas/shopScreen/shop.json", "add", "giftTab", "buttonText", "valueOf", "checkImageKey", "getCoin", "instance", "homeScreenBG2", "updateContent", "bind", "create", "getOwnPropertyDescriptor", "wrapBg", "timer_tab_active", "11182381oPimaW", "height", "close_icon", "configurable", "image", "value", "formatCoinWithCommas", "addOnce", "profileCoin", "right_bg", "setText", "#ffc6b7", "gift_tab", "function", "click", "currentTab", "alphaMask", "addChild", "call", "center", "make", "HomeScreen", "world", "197470BnptXZ", "avatar_bg", "loadTexture", "256746fnbZKY", "addContents", "2384805tsWuEO", "construct", "updateProfileCoin", "defineProperty", "giftContent", "length", "preload", "avatarContent", "Super expression must either be null or a function", "Cannot call a class as a function", "init", "anchor", "visible", "avatar", "getDisplayName", "addTabs", "time", "homeScreenBG1", "__proto__", "applyTexture", "atlasJSONHash", "addText", "/bigImage/homeScreenBG2.jpg", "addProfileInfo", "start", "wrap", "gift_tab_active", "#bc6f80", "get", "writable", "shutdown", "group", "getPrototypeOf", "playButtonSound", "text", "inputEnabled", "onTabClick", "Rectangle", "cache", "emoTab", "assetUrl", "shopScreen", "events", "state"];
        return (jh = function() {
            return t
        }
        )()
    }
    function Rh(t, e) {
        for (var n = Eh, r = 0; r < e[n(257)]; r++) {
            var i = e[r];
            i[n(310)] = i[n(310)] || !1,
            i[n(227)] = !0,
            n(229)in i && (i[n(281)] = !0),
            Object[n(255)](t, i[n(326)], i)
        }
    }
    function Eh(t, e) {
        var n = jh();
        return (Eh = function(t, e) {
            return n[t -= 213]
        }
        )(t, e)
    }
    function Bh() {
        var t = Eh;
        return Bh = typeof Reflect !== t(320) && Reflect[t(280)] ? Reflect[t(280)][t(219)]() : function(e, n, r) {
            var i = t
              , a = Ah(e, n);
            if (a) {
                var o = Object[i(221)](a, n);
                return o[i(280)] ? o.get[i(242)](arguments[i(257)] < 3 ? e : r) : o[i(229)]
            }
        }
        ,
        Bh[t(297)](this, arguments)
    }
    function Ah(t, e) {
        for (var n = Eh; !Object.prototype.hasOwnProperty[n(242)](t, e) && null !== (t = Nh(t)); )
            ;
        return t
    }
    function Dh(t, e) {
        var n = Eh;
        return (Dh = Object[n(329)] ? Object[n(329)][n(219)]() : function(t, e) {
            return t[n(270)] = e,
            t
        }
        )(t, e)
    }
    function Fh(t, e) {
        var n = Eh;
        if (e && (_h(e) === n(314) || typeof e === n(237)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(313));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t)
    }
    function Nh(t) {
        var e = Eh;
        return (Nh = Object[e(329)] ? Object[e(284)][e(219)]() : function(t) {
            var n = e;
            return t[n(270)] || Object[n(284)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = Eh, r = t(); ; )
            try {
                if (885863 == -parseInt(n(247)) / 1 + -parseInt(n(301)) / 2 + -parseInt(n(252)) / 3 + parseInt(n(316)) / 4 + parseInt(n(307)) / 5 + parseInt(n(250)) / 6 + parseInt(n(224)) / 7)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(jh);
    const Lh = function(t) {
        var e = Eh;
        !function(t, e) {
            var n = Eh;
            if (typeof e !== n(237) && null !== e)
                throw new TypeError(n(260));
            t.prototype = Object[n(220)](e && e[n(330)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, n(330), {
                writable: !1
            }),
            e && Dh(t, e)
        }(u, t);
        var n, r, i, a, o, c = (a = u,
        o = function() {
            var t = Eh;
            if (typeof Reflect === t(320) || !Reflect[t(253)])
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if (typeof Proxy === t(237))
                return !0;
            try {
                return Boolean[t(330)][t(213)][t(242)](Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Eh, n = Nh(a);
            if (o) {
                var r = Nh(this)[e(327)];
                t = Reflect[e(253)](n, arguments, r)
            } else
                t = n[e(297)](this, arguments);
            return Fh(this, t)
        }
        );
        function u() {
            var t = Eh;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Eh(261))
            }(this, u),
            c[t(242)](this)
        }
        return n = u,
        i = Eh,
        (r = [{
            key: e(262),
            value: function() {
                var t = e;
                Bh(Nh(u[t(330)]), "init", this)[t(242)](this),
                !this[t(239)] && (this[t(239)] = 2),
                this[t(324)] = this[t(332)][t(228)](0, 0, t(269)),
                this[t(324)][t(317)] = this[t(319)][t(317)],
                this[t(324)][t(225)] = this[t(319)][t(225)]
            }
        }, {
            key: e(258),
            value: function() {
                var t = e;
                this[t(305)](),
                this.game[t(290)][t(214)](t(217)) || this.load[t(228)](t(217), window[t(292)] + t(274)),
                this[t(319)][t(290)][t(214)](t(293)) || this[t(315)][t(272)]("shopScreen", window.assetUrl + "/atlas/shopScreen/shop.png", window.assetUrl + t(331))
            }
        }, {
            key: "create",
            value: function() {
                var t = e;
                this.closeLoadingPopup(),
                this[t(324)][t(249)](t(217)),
                this[t(324)][t(317)] = this[t(319)].width,
                this[t(324)][t(225)] = this[t(319)][t(225)],
                this[t(332)].image(this[t(319)][t(317)] / 2, 20, t(293), t(309))[t(263)].setTo(.5, 0);
                var n = this.add.image(0, 20, t(293), t(226));
                n.x = this[t(319)][t(317)] - n.width - 20,
                n[t(287)] = !0,
                n[t(294)].onInputDown.addOnce((function() {
                    var e = t;
                    CyberInstance.sound[e(285)](),
                    this[e(319)].state[e(276)](e(245), !0, !1)
                }
                ), this);
                var r = this.add[t(228)](0, 20, "shopScreen", "shop_button");
                r.x = this[t(319)].width - r.width - 20,
                r.y = this.game[t(225)] - r[t(225)] - 11,
                r.inputEnabled = !0,
                r[t(294)].onInputDown[t(231)]((function() {
                    var e = t;
                    CyberInstance.sound[e(285)](),
                    this.game[e(295)].start("ShopScreen", !0, !1)
                }
                ), this),
                this[t(222)] = this[t(332)].image(0, 0, "shopScreen", t(277)),
                this.wrapBg.y = this.game.height / 2 - this[t(222)].height / 2,
                this.rightBg = this[t(332)][t(228)](0, this[t(222)].y, t(293), t(233)),
                this[t(267)](),
                this[t(251)](),
                this[t(275)](),
                this.game[t(268)].events[t(332)](100, (function() {
                    s.preload()
                }
                )),
                this[t(299)] = !0
            }
        }, {
            key: e(251),
            value: function() {
                var t = e;
                this.giftContent = new nh(this[t(319)],this.wrapBg.x + 11,this[t(222)].y + 16,this),
                this.giftContent[t(264)] = !1,
                this[t(319)][t(246)][t(332)](this[t(256)]),
                this[t(259)] = new dh(this.game,this.wrapBg.x + 11,this.wrapBg.y + 16,this),
                this.avatarContent[t(264)] = !1,
                this[t(319)].world.add(this[t(259)]),
                this[t(318)] = new xh(this[t(319)],this[t(222)].x + 11,this[t(222)].y + 16,this),
                this[t(318)][t(264)] = !1,
                this[t(319)].world.add(this[t(318)]),
                this[t(328)][t(264)] = !0,
                this[t(218)]()
            }
        }, {
            key: e(267),
            value: function() {
                var t = e
                  , n = this.wrapBg.y + 25;
                this[t(333)] = new jt(this[t(319)],0,n,t(293),2 == this[t(239)] ? t(278) : t(236)),
                this[t(333)].addText("Quà tặng", {
                    font: APP_FONT,
                    fill: 2 == this[t(239)] ? t(235) : "#bc6f80",
                    fontWeight: 400,
                    fontSize: 24
                }),
                this[t(333)][t(308)] = 2,
                this[t(333)][t(334)].x = 140,
                this[t(333)][t(238)](this.onTabClick, this),
                this[t(319)][t(246)].addChild(this.giftTab),
                this[t(333)].x = this[t(319)][t(317)] / 2 - (this[t(333)][t(317)] + this[t(222)].width) / 2,
                this.wrapBg.x = this[t(333)].x + this[t(333)][t(317)],
                this[t(328)].x = this.wrapBg.x + this[t(222)].width - this[t(328)][t(317)],
                n += this[t(333)][t(225)] + 10,
                this[t(291)] = new jt(this[t(319)],this[t(333)].x,n,t(293),3 == this[t(239)] ? t(223) : t(323)),
                this[t(291)][t(273)](t(303), {
                    font: APP_FONT,
                    fill: 3 == this[t(239)] ? "#ffc6b7" : t(279),
                    fontWeight: 400,
                    fontSize: 24
                }),
                this[t(291)][t(308)] = 3,
                this[t(291)][t(334)].x = 140,
                this[t(291)].click(this.onTabClick, this),
                this[t(319)][t(246)][t(241)](this[t(291)]),
                n += this[t(291)][t(225)] + 10,
                this[t(306)] = new jt(this[t(319)],this.giftTab.x,n,"shopScreen",4 == this[t(239)] ? "avatar_tab_active" : "avatar_tab"),
                this.avatarTab[t(273)](t(304), {
                    font: APP_FONT,
                    fill: 4 == this[t(239)] ? t(235) : "#bc6f80",
                    fontWeight: 400,
                    fontSize: 24,
                    align: t(243)
                }),
                this[t(306)][t(308)] = 4,
                this[t(306)][t(334)].x = 140,
                this[t(306)][t(238)](this[t(288)], this),
                this[t(319)][t(246)][t(241)](this[t(306)])
            }
        }, {
            key: e(288),
            value: function(t) {
                var n = e;
                t.tabIdx != this.currentTab && (this[n(239)] = t[n(308)],
                this[n(333)].loadTexture(n(293), 2 == this.currentTab ? n(278) : n(236)),
                this[n(291)][n(249)]("shopScreen", 3 == this[n(239)] ? n(223) : n(323)),
                this.avatarTab.loadTexture(n(293), 4 == this[n(239)] ? n(296) : "avatar_tab"),
                this[n(333)][n(334)][n(302)]({
                    font: APP_FONT,
                    fill: 2 == this[n(239)] ? n(235) : n(279),
                    fontWeight: 400,
                    fontSize: 24
                }),
                this[n(291)][n(334)][n(302)]({
                    font: APP_FONT,
                    fill: 3 == this[n(239)] ? n(235) : "#bc6f80",
                    fontWeight: 400,
                    fontSize: 24
                }),
                this[n(306)][n(334)].setStyle({
                    font: APP_FONT,
                    fill: 4 == this[n(239)] ? n(235) : "#bc6f80",
                    fontWeight: 400,
                    fontSize: 24
                }),
                this.updateContent())
            }
        }, {
            key: e(218),
            value: function() {
                var t = e;
                this[t(256)][t(264)] = 2 == this[t(239)],
                this[t(318)][t(264)] = 3 == this[t(239)],
                this[t(259)][t(264)] = 4 == this.currentTab
            }
        }, {
            key: "addProfileInfo",
            value: function() {
                var t = e;
                this.profileGroup = this.game[t(332)][t(283)]();
                var n = this[t(311)].create(15, 0, t(293), t(248));
                n.y = this.game[t(225)] - n[t(225)] - 5;
                var r = this[t(319)][t(332)][t(286)](n.x + 105, n.y + 15, ie[t(216)][t(266)](), {
                    font: APP_FONT,
                    fontSize: 26,
                    fill: t(300),
                    fontWeight: 400
                });
                this[t(311)][t(332)](r),
                this.profileCoin = this[t(319)][t(332)][t(286)](r.x, r.y + 35, h.formatCoinWithCommas(ie[t(216)][t(215)]()), {
                    font: APP_FONT,
                    fontSize: 24,
                    fill: t(312),
                    fontWeight: 400
                }),
                this[t(311)][t(332)](this[t(232)]),
                this[t(321)] = "avatar" + ie[t(216)].getGuserid(),
                this[t(319)][t(290)][t(214)](this[t(321)]) ? (this.avatar = this[t(319)][t(244)][t(228)](15, 15, this[t(321)]),
                this[t(271)](88)) : (this.avatar = this[t(319)][t(244)].image(15, 15, t(293), t(298)),
                this[t(265)][t(317)] = 88,
                this[t(265)][t(225)] = 88,
                this[t(319)][t(315)][t(228)](this[t(321)], CyberInstance[t(265)]),
                this[t(319)][t(315)][t(276)]()),
                this[t(265)].x = n.x + 2,
                this[t(265)].y = n.y + 2,
                this[t(311)].add(this.avatar)
            }
        }, {
            key: e(271),
            value: function(t) {
                var n = e
                  , r = new (Phaser[n(289)])(0,0,t,t)
                  , i = game.make.image(0, 0, "shopScreen", n(298));
                i.width = t,
                i[n(225)] = t;
                var a = game[n(244)][n(325)]();
                a[n(315)](i),
                i[n(322)]();
                var o = this[n(319)][n(244)][n(325)](t, t);
                o[n(240)](this[n(321)], a, r),
                this.avatar[n(249)](o),
                this[n(265)].width = t,
                this.avatar[n(225)] = t
            }
        }, {
            key: e(254),
            value: function(t) {
                var n = e;
                this[n(232)] && this[n(232)][n(234)](h[n(230)](t))
            }
        }, {
            key: e(282),
            value: function() {
                var t = e;
                Bh(Nh(u[t(330)]), t(282), this)[t(242)](this)
            }
        }]) && Rh(n[i(330)], r),
        Object[i(255)](n, i(330), {
            writable: !1
        }),
        u
    }(pe);
    function Gh(t) {
        var e = Vh;
        return (Gh = e(203) == typeof Symbol && e(167) == typeof Symbol[e(214)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(203) == typeof Symbol && t[n(206)] === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function Mh(t, e) {
        for (var n = Vh, r = 0; r < e[n(197)]; r++) {
            var i = e[r];
            i[n(218)] = i[n(218)] || !1,
            i[n(229)] = !0,
            n(176)in i && (i[n(212)] = !0),
            Object[n(210)](t, i[n(187)], i)
        }
    }
    function Wh(t, e) {
        var n = Vh;
        return (Wh = Object.setPrototypeOf ? Object[n(207)][n(171)]() : function(t, e) {
            return t[n(216)] = e,
            t
        }
        )(t, e)
    }
    function zh(t, e) {
        var n = Vh;
        if (e && (Gh(e) === n(208) || typeof e === n(203)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(224));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(Vh(169));
            return t
        }(t)
    }
    function Uh(t) {
        var e = Vh;
        return (Uh = Object[e(207)] ? Object[e(204)][e(171)]() : function(t) {
            var n = e;
            return t[n(216)] || Object[n(204)](t)
        }
        )(t)
    }
    function Vh(t, e) {
        var n = Hh();
        return (Vh = function(t, e) {
            return n[t -= 166]
        }
        )(t, e)
    }
    function Hh() {
        var t = ["add", "2tAQcGb", "homeScreenBG1", "create", "call", "Super expression must either be null or a function", "3053940IuXhvi", "isGameAssetPreloaded", "game", "length", "state", "payments", "enableVisibilityChange", "image", "pageAlignVertically", "function", "getPrototypeOf", "crossOrigin", "constructor", "setPrototypeOf", "object", "ScaleManager", "defineProperty", "6090490DGaqYM", "writable", "lobbyScreen", "iterator", "assets/images", "__proto__", "408EjzBaN", "enumerable", "start", "sham", "/bigImage/homeScreenBG1.jpg", "disableVisibilityChange", "load", "Derived constructors may only return object or undefined", "startPreloader", "17236980qCJxBw", "424FjCCam", "init", "configurable", "preload", "15485wMLBLz", "symbol", "pageAlignHorizontally", "this hasn't been initialised - super() hasn't been called", "Cannot call a class as a function", "bind", "instance", "Roboto", "initialize", "6212154BCKLGl", "value", "PreloaderScreen", "scaleMode", "scale", "construct", "stage", "prototype", "assetUrl", "DisconnectScreen", "33957vleavJ", "615470lgJrOS", "key"];
        return (Hh = function() {
            return t
        }
        )()
    }
    !function(t, e) {
        for (var n = Vh, r = t(); ; )
            try {
                if (590904 == parseInt(n(189)) / 1 * (parseInt(n(186)) / 2) + parseInt(n(194)) / 3 + -parseInt(n(217)) / 4 * (-parseInt(n(166)) / 5) + parseInt(n(175)) / 6 + -parseInt(n(211)) / 7 + -parseInt(n(227)) / 8 * (-parseInt(n(185)) / 9) + -parseInt(n(226)) / 10)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Hh);
    const Xh = function(t) {
        var e = Vh;
        !function(t, e) {
            var n = Vh;
            if ("function" != typeof e && null !== e)
                throw new TypeError(n(193));
            t[n(182)] = Object[n(191)](e && e[n(182)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, n(182), {
                writable: !1
            }),
            e && Wh(t, e)
        }(u, t);
        var n, r, i, a, o, c = (a = u,
        o = function() {
            var t = Vh;
            if ("undefined" == typeof Reflect || !Reflect[t(180)])
                return !1;
            if (Reflect[t(180)][t(220)])
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean[t(182)].valueOf[t(192)](Reflect[t(180)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Vh, n = Uh(a);
            if (o) {
                var r = Uh(this)[e(206)];
                t = Reflect.construct(n, arguments, r)
            } else
                t = n.apply(this, arguments);
            return zh(this, t)
        }
        );
        function u() {
            var t = Vh;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Vh(170))
            }(this, u),
            c[t(192)](this)
        }
        return n = u,
        i = Vh,
        (r = [{
            key: e(228),
            value: function() {
                var t = e;
                this.scale[t(178)] = Phaser[t(209)].SHOW_ALL,
                this[t(179)][t(168)] = !0,
                this.scale[t(202)] = !0,
                this[t(181)][t(222)] = !0,
                this[t(223)][t(205)] = "anonymous",
                window.APP_FONT = t(173),
                window[t(183)] = t(215),
                CyberGlobalData[t(213)] = "HomeScreen",
                this[t(196)][t(198)][t(188)](t(177), vs),
                this[t(196)].state[t(188)]("HomeScreen", as),
                this[t(196)].state.add("LobbyScreen", gc),
                this[t(196)][t(198)][t(188)](t(184), Cs),
                this.game.state[t(188)]("LeaderboardScreen", Ks),
                this[t(196)][t(198)][t(188)]("ShopScreen", Vu),
                this[t(196)][t(198)][t(188)]("BackpackScreen", Lh),
                CyberInstance[t(200)]()
            }
        }, {
            key: e(230),
            value: function() {
                var t = e;
                this[t(223)][t(201)](t(190), assetUrl + t(221)),
                this.load.image("preloadBg", assetUrl + "/bigImage/preload.png")
            }
        }, {
            key: e(191),
            value: function() {
                var t = e
                  , n = this;
                if (fbInitializeAsyncResolved && null != gameLocale)
                    this[t(225)]();
                else {
                    this[t(195)] = !1;
                    var r = setInterval((function() {
                        var e = t;
                        if (fbInitializeAsyncResolved && null != gameLocale)
                            return clearInterval(r),
                            void n[e(225)]();
                        !n.isGameAssetPreloaded && (n[e(195)] = !0,
                        s[e(230)]())
                    }
                    ), 60)
                }
            }
        }, {
            key: e(225),
            value: function() {
                var t = this;
                this.layout(),
                setTimeout((function() {
                    var e = Vh;
                    FBInstant[e(199)].onReady((function() {
                        var t = e;
                        bt[t(172)][t(174)](CyberInstance.socket)
                    }
                    )),
                    t[e(196)][e(198)][e(219)](e(177), !0, !1)
                }
                ), 20)
            }
        }]) && Mh(n[i(182)], r),
        Object[i(210)](n, i(182), {
            writable: !1
        }),
        u
    }(pe);
    function Yh(t, e) {
        var n = Kh;
        if (t) {
            if ("string" == typeof t)
                return qh(t, e);
            var r = Object[n(497)].toString[n(475)](t)[n(463)](8, -1);
            return "Object" === r && t[n(478)] && (r = t[n(478)].name),
            "Map" === r || r === n(494) ? Array[n(461)](t) : r === n(503) || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/[n(489)](r) ? qh(t, e) : void 0
        }
    }
    function qh(t, e) {
        var n = Kh;
        (null == e || e > t.length) && (e = t[n(467)]);
        for (var r = 0, i = new Array(e); r < e; r++)
            i[r] = t[r];
        return i
    }
    function Kh(t, e) {
        var n = Qh();
        return (Kh = function(t, e) {
            return n[t -= 455]
        }
        )(t, e)
    }
    function Jh(t, e) {
        for (var n = Kh, r = 0; r < e[n(467)]; r++) {
            var i = e[r];
            i[n(456)] = i[n(456)] || !1,
            i[n(469)] = !0,
            "value"in i && (i[n(507)] = !0),
            Object[n(481)](t, i[n(506)], i)
        }
    }
    function Qh() {
        var t = ["iterator", "playJoinRoomSound", "prototype", "7312998ebWYHw", "gift5", "937951AhcAOK", "gift3", "set", "Arguments", "isArray", "assets/sound/gift/beer1.mp3", "key", "writable", "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.", "button", "danhbai", "add", "2225583sEapqT", "gift8", "assets/sound/gift/tomato.mp3", "playLoseSound", "gift1", "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.", "gift2", "denluot", "sounds", "1195770OaeSEn", "assets/sound/button/button1.mp3", "isSoundOn", "assets/sound/gift/eggs.mp3", "assets/sound/gift/water.mp3", "undefined", "assets/sound/gift/kiss.mp3", "enumerable", "8YdOhNj", "gift7", "gift6", "log", "from", "clock", "slice", "next", "@@iterator", "assets/sound/gift/brick.mp3", "length", "get", "configurable", "Cannot call a class as a function", "6303820TeHsGX", "value", "win", "playSound", "call", "return", "1evxQFO", "constructor", "3faAxUN", "playDiscard", "defineProperty", "playButtonSound", "125tWItlP", "number", "assets", "assets/sound/gift/Bom.mp3", "773888aKWUrz", "gift4", "test", "has", "loadSounds", "done", "84396wXOfMK", "Set"];
        return (Qh = function() {
            return t
        }
        )()
    }
    !function(t, e) {
        for (var n = Kh, r = t(); ; )
            try {
                if (409219 == parseInt(n(477)) / 1 * (parseInt(n(521)) / 2) + parseInt(n(479)) / 3 * (-parseInt(n(487)) / 4) + parseInt(n(483)) / 5 * (parseInt(n(493)) / 6) + -parseInt(n(500)) / 7 * (parseInt(n(457)) / 8) + -parseInt(n(512)) / 9 + -parseInt(n(471)) / 10 + parseInt(n(498)) / 11)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Qh);
    const Zh = function() {
        var t, e, n, r = Kh;
        function i() {
            var t = Kh;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Kh(470))
            }
            )(this, i),
            this[t(520)] = new Map,
            this.assets = new Map,
            this.add(t(509), t(522)),
            this[t(511)](t(516), t(525)),
            this[t(511)](t(518), "assets/sound/gift/kiss_flowers.mp3"),
            this.add(t(501), t(466)),
            this.add(t(488), t(455)),
            this[t(511)](t(499), t(514)),
            this.add(t(459), t(486)),
            this[t(511)](t(458), t(505)),
            this[t(511)](t(513), t(524))
        }
        return t = i,
        e = [{
            key: "add",
            value: function(t, e) {
                var n = Kh;
                this[n(485)][n(502)](t, e)
            }
        }, {
            key: r(491),
            value: function() {
                var t, e, n = r;
                if (typeof Howl != n(526) && null !== this[n(485)]) {
                    var i, a = function(t, e) {
                        var n = Kh
                          , r = typeof Symbol !== n(526) && t[Symbol[n(495)]] || t[n(465)];
                        if (!r) {
                            if (Array[n(504)](t) || (r = Yh(t))) {
                                r && (t = r);
                                var i = 0
                                  , a = function() {};
                                return {
                                    s: a,
                                    n: function() {
                                        return i >= t[n(467)] ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[i++]
                                        }
                                    },
                                    e: function(t) {
                                        throw t
                                    },
                                    f: a
                                }
                            }
                            throw new TypeError(n(517))
                        }
                        var o, s = !0, c = !1;
                        return {
                            s: function() {
                                r = r[n(475)](t)
                            },
                            n: function() {
                                var t = n
                                  , e = r[t(464)]();
                                return s = e[t(492)],
                                e
                            },
                            e: function(t) {
                                c = !0,
                                o = t
                            },
                            f: function() {
                                try {
                                    s || null == r.return || r.return()
                                } finally {
                                    if (c)
                                        throw o
                                }
                            }
                        }
                    }(this[n(485)]);
                    try {
                        for (a.s(); !(i = a.n())[n(492)]; ) {
                            var o = (t = i[n(472)],
                            e = 2,
                            function(t) {
                                if (Array[Kh(504)](t))
                                    return t
                            }(t) || function(t, e) {
                                var n = Kh
                                  , r = null == t ? null : typeof Symbol !== n(526) && t[Symbol[n(495)]] || t[n(465)];
                                if (null != r) {
                                    var i, a, o = [], s = !0, c = !1;
                                    try {
                                        for (r = r[n(475)](t); !(s = (i = r[n(464)]())[n(492)]) && (o.push(i[n(472)]),
                                        !e || o[n(467)] !== e); s = !0)
                                            ;
                                    } catch (t) {
                                        c = !0,
                                        a = t
                                    } finally {
                                        try {
                                            s || null == r[n(476)] || r[n(476)]()
                                        } finally {
                                            if (c)
                                                throw a
                                        }
                                    }
                                    return o
                                }
                            }(t, e) || Yh(t, e) || function() {
                                throw new TypeError(Kh(508))
                            }())
                              , s = o[0]
                              , c = o[1];
                            if (!this[n(520)][n(490)](s)) {
                                var u = new Howl({
                                    src: c,
                                    volume: s != n(473) ? 1 : .5
                                });
                                this[n(520)][n(502)](s, u)
                            }
                        }
                    } catch (t) {
                        a.e(t)
                    } finally {
                        a.f()
                    }
                    this[n(485)].clear(),
                    this.assets = null
                }
            }
        }, {
            key: "playSound",
            value: function(t) {
                var e = r;
                try {
                    CyberInstance[e(523)] && this[e(520)].has(t) && this[e(520)][e(468)](t).play()
                } catch (t) {
                    console[e(460)]("playSound error", t)
                }
            }
        }, {
            key: "playClockSound",
            value: function() {
                var t = r;
                this[t(474)](t(462))
            }
        }, {
            key: r(496),
            value: function() {
                this[r(474)]("joinRoom")
            }
        }, {
            key: r(515),
            value: function() {
                this[r(474)]("lose")
            }
        }, {
            key: "playWinSound",
            value: function() {
                var t = r;
                this[t(474)](t(473))
            }
        }, {
            key: r(482),
            value: function() {
                var t = r;
                this[t(474)](t(509))
            }
        }, {
            key: "playYourTurn",
            value: function() {
                var t = r;
                this[t(474)](t(519))
            }
        }, {
            key: r(480),
            value: function() {
                var t = r;
                this[t(474)](t(510))
            }
        }],
        n = Kh,
        e && Jh(t.prototype, e),
        Object[n(481)](t, n(497), {
            writable: !1
        }),
        i
    }();
    function $h() {
        var t = ["cloneNode", "WRITE_A_MESSAGE", "firstChild", "createElement", "messages", "insertBefore", "7OWbbyl", "DIV", "onSendMessage", "68EExdjq", "add", "lastSent", "click", "key", "chat-room", "6132kNYqdt", "3dCwMeV", "6894JGxPYS", "sender-avatar", "sound", "610XawriW", "Cannot call a class as a function", "chat-room__messages", "lang", "chat-room-header", "length", "trim", "innerHTML", "14782LwwWrv", "last-consecutive", "_controller", "publicChatWrapper", "playButtonSound", "height", "appendChild", "scrollToLatestMessage", "countMessage", "createDOMText", "innerHeight", "input", "prototype", "35932gEnHrj", "noAvatar", "remove", "hide", "chatRoomHeader", "2944HZCuaP", "screenReady", "Send", "inited", "body", "send-button", "keyup", "SPAN", "innerWidth", "addEventListener", "classList", "sendButton", "src", "controller", "init", "defineProperty", "onPublicChatClose", "createDOMDiv", "getElementById", "text-area-type", "createDOMButton", "85602npBJum", "getTime", "writable", "value", "publicOverlay", "chatInputText", "hasMessage", "chat-page-message-content", "preventDefault", "149535GvhsRW", "1101006SqeadS", "setAttribute", "dispatchEvent", "chat", "keyCode", "style", "name", "scrollTop", "floor", "contains", "appendMessage", "layout", "create", "enumerable", "47798AUJUHC", "offsetHeight", "IMG", "show"];
        return ($h = function() {
            return t
        }
        )()
    }
    function tl(t, e) {
        for (var n = el, r = 0; r < e[n(341)]; r++) {
            var i = e[r];
            i.enumerable = i[n(311)] || !1,
            i.configurable = !0,
            n(291)in i && (i[n(290)] = !0),
            Object.defineProperty(t, i[n(329)], i)
        }
    }
    function el(t, e) {
        var n = $h();
        return (el = function(t, e) {
            return n[t -= 265]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = el, r = t(); ; )
            try {
                if (386085 == parseInt(n(312)) / 1 + parseInt(n(344)) / 2 * (parseInt(n(332)) / 3) + -parseInt(n(325)) / 4 * (parseInt(n(297)) / 5) + parseInt(n(298)) / 6 * (parseInt(n(322)) / 7) + -parseInt(n(267)) / 8 * (parseInt(n(333)) / 9) + -parseInt(n(336)) / 10 * (parseInt(n(288)) / 11) + -parseInt(n(331)) / 12 * (-parseInt(n(357)) / 13))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }($h);
    var nl = null;
    const rl = function() {
        var t, e, n, r = el;
        function i(t) {
            var e = el;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(el(337))
            }(this, i),
            !nl && (this[e(270)] = !1,
            nl = this),
            nl[e(280)] = t,
            nl
        }
        return t = i,
        n = el,
        (e = [{
            key: r(281),
            value: function() {
                var t = r;
                !this[t(270)] && (this[t(310)](),
                this[t(352)] = 0,
                this[t(270)] = !0,
                this[t(327)] = (new Date)[t(289)]())
            }
        }, {
            key: r(315),
            value: function() {
                var t = r;
                document.getElementById(t(347))[t(277)].add("show"),
                document[t(285)](t(292))[t(277)][t(326)](t(315)),
                nl[t(309)](),
                nl[t(351)]()
            }
        }, {
            key: r(265),
            value: function() {
                var t = r;
                CyberInstance[t(335)][t(348)](),
                CyberInstance[t(301)][t(294)] = !1,
                document[t(285)](t(347))[t(277)][t(359)]("show"),
                document[t(285)](t(292))[t(277)][t(359)](t(315)),
                d[t(300)](t(283))
            }
        }, {
            key: r(310),
            value: function() {
                var t = r;
                document.body.appendChild(h[t(284)](t(292))),
                document[t(271)][t(350)](h[t(284)]("publicChatWrapper", t(330)));
                var e = h[t(284)](null, "chat-input")
                  , n = h[t(284)](t(266), t(340));
                n[t(350)](e),
                document[t(285)](t(347)).appendChild(n);
                var i = h[t(284)](t(320), t(338));
                i.classList.add(t(295)),
                document[t(285)](t(347)).appendChild(i);
                var a = h[t(353)](t(293), CyberInstance[t(339)][t(317)], 100);
                a[t(299)]("name", "chat-content"),
                a[t(277)][t(326)](t(355)),
                a[t(277)][t(326)](t(286)),
                e[t(350)](a);
                var o = h[t(287)](t(278), null);
                o[t(277)][t(326)](t(272));
                var s = document.createElement(t(314));
                s.setAttribute(t(279), "assets/css/images/send.png"),
                s[t(299)]("alt", t(269)),
                s[t(277)][t(326)]("sendImg"),
                o[t(350)](s),
                e[t(350)](o),
                document[t(285)](t(347))[t(303)].width = window.innerWidth + "px",
                document.getElementById(t(347))[t(303)].height = window.innerHeight + "px",
                o[t(276)](t(328), (function() {
                    nl[t(324)]()
                }
                )),
                document[t(285)](t(292)).addEventListener(t(328), (function() {
                    nl.hide()
                }
                )),
                document[t(285)](t(293))[t(276)](t(273), (function(e) {
                    var n = t;
                    13 === e[n(302)] && (e[n(296)](),
                    document[n(285)](n(278))[n(328)]())
                }
                )),
                this[t(268)] = !0
            }
        }, {
            key: r(309),
            value: function() {
                var t = r;
                document[t(285)](t(347)).style.width = Math[t(306)](window[t(275)] / 2.2) + "px",
                document[t(285)](t(347))[t(303)][t(349)] = window.innerHeight + "px";
                var e = document[t(285)](t(266))[t(313)];
                document[t(285)](t(320))[t(303)][t(349)] = window[t(354)] - e - 20 + "px"
            }
        }, {
            key: r(324),
            value: function() {
                var t = r;
                if (!((new Date)[t(289)]() - this.lastSent < 2e3)) {
                    var e = document.getElementById(t(293))[t(291)];
                    if (!e || 0 == e[t(342)]()[t(341)])
                        return !1;
                    document[t(285)](t(293)).value = "",
                    nl[t(280)].sendPublicMessage(e),
                    this[t(327)] = (new Date)[t(289)]()
                }
            }
        }, {
            key: r(308),
            value: function(t, e, n) {
                var i = r
                  , a = document[i(319)](i(323))
                  , o = document.createElement(i(274));
                if (o[i(343)] = e,
                a[i(350)](o),
                a[i(277)][i(326)]("text"),
                n)
                    a[i(277)].add("my-message");
                else if (a[i(277)][i(326)]("their-message"),
                a[i(277)][i(326)](i(345)),
                a[i(321)](h.createDOMItalicText(t[i(304)]), a[i(318)]),
                t.avatar) {
                    var s = document[i(319)]("img");
                    s.src = t.avatar,
                    s.setAttribute("class", i(334)),
                    a.appendChild(s[i(316)](!0))
                } else
                    a[i(277)][i(326)](i(358));
                document[i(285)](i(320))[i(350)](a),
                this[i(352)] >= 200 && document[i(285)]("messages").firstElementChild[i(359)](),
                n && this[i(351)](),
                this[i(352)]++
            }
        }, {
            key: "scrollToLatestMessage",
            value: function() {
                var t = r;
                document[t(285)]("publicChatWrapper").classList[t(307)](t(315)) && (document[t(285)](t(320))[t(305)] = document[t(285)](t(320)).scrollHeight)
            }
        }, {
            key: "controller",
            get: function() {
                return this[r(346)]
            },
            set: function(t) {
                this[r(346)] = t
            }
        }]) && tl(t[n(356)], e),
        Object[n(282)](t, "prototype", {
            writable: !1
        }),
        i
    }();
    function il(t, e) {
        for (var n = al, r = 0; r < e[n(301)]; r++) {
            var i = e[r];
            i.enumerable = i[n(264)] || !1,
            i.configurable = !0,
            "value"in i && (i[n(216)] = !0),
            Object.defineProperty(t, i[n(286)], i)
        }
    }
    function al(t, e) {
        var n = sl();
        return (al = function(t, e) {
            return n[t -= 193]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = al, r = t(); ; )
            try {
                if (978591 == -parseInt(n(272)) / 1 * (-parseInt(n(292)) / 2) + -parseInt(n(201)) / 3 * (-parseInt(n(305)) / 4) + parseInt(n(280)) / 5 + -parseInt(n(202)) / 6 * (parseInt(n(289)) / 7) + -parseInt(n(197)) / 8 * (-parseInt(n(261)) / 9) + -parseInt(n(281)) / 10 + -parseInt(n(300)) / 11)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(sl);
    var ol = null;
    function sl() {
        var t = ["src", "chat-page-message-content", "chatHistory", "3965324HNMibW", "length", "chatButtons", "Tưởng thế nào :v", "Send", "6269876zANUtf", "body", "removeChild", "Chơi hay nghỉ đây", ".footer-button", "overlay", "chatGameHeader", "getTime", "remove", "Đánh thế ai chơi!", "hide", "3832SAYigS", "data-msg", "createQuickButton", "assets/css/images/send.png", "3KcXOtr", "3163326yUEtvS", "text-area-type", "layoured", "appendChild", "alt", "text", "addEventListener", "chat-history", "chat-game-wrapper", "_controller", "lastSent", "Hay không bằng hên!", "innerWidth", "create", "writable", "trim", "Chat", "chat-game-footer", "scrollHeight", "querySelectorAll", "chat-buttons", "img", "offsetHeight", "gameMessages", "add", "cloneNode", "button-text", "createElement", "data-tabid", "history", "sendGameMessage", "Ahihi Đồ Ngốc!", "createButtons", "addDEvents", "getElementById", "clear-fix", "showChat", "createTextNode", "show", ".button-text", "noAvatar", "defineProperty", "setAttribute", "wrapper", "gameChatInputText", "createDOMDiv", "click", "dataset", "Cao thủ !!!", "WRITE_A_MESSAGE", "chat-button-row", "lang", "prototype", "avatar", "showHistory", "DIV", "scrollToLatestMessage", "chat-input", "controller", "5112qQyYOM", "createDOMButton", "onSendMessage", "enumerable", "gameSendButton", "preventDefault", "sender-avatar", "last-consecutive", "sendImg", "classList", "Cannot call a class as a function", "1CMwqSy", "destroy", "chat", "footer-button-active", "IMG", "createDOMText", "style", "HISTORY", "5924815kPdeVf", "1586270djyRBb", "height", "width", "chatGameWrapper", "firstChild", "key", "footerWrapper", "name", "21JuNVry", "class", "contains", "109722EUVHDG", "countMessage", "my-message", "value", "footer-button"];
        return (sl = function() {
            return t
        }
        )()
    }
    const cl = function() {
        var t, e, n, r = al;
        function i(t) {
            var e = al;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(al(271))
            }
            )(this, i),
            this.controller = t,
            this[e(293)] = 0,
            this[e(215)](),
            this[e(235)](),
            this[e(212)] = (new Date)[e(193)](),
            ol = this
        }
        return t = i,
        n = al,
        (e = [{
            key: r(215),
            value: function() {
                var t = r;
                document[t(306)].appendChild(h[t(247)](t(284), t(210))),
                this[t(245)][t(278)][t(283)] = window[t(214)] + "px",
                this[t(245)][t(205)](h[t(247)](t(310)));
                var e = h[t(247)](null, t(259))
                  , n = h[t(247)](t(311), "chat-game-header");
                n[t(270)][t(226)](t(237)),
                n[t(205)](e),
                this[t(245)][t(205)](n);
                var i = h[t(277)](t(246), CyberInstance[t(253)][t(251)], 100);
                i[t(270)].add("input"),
                i[t(270)].add(t(203)),
                e[t(205)](i);
                var a = h[t(262)](t(265), null);
                a.classList[t(226)]("send-button");
                var o = document[t(229)](t(276));
                o[t(244)](t(297), t(200)),
                o[t(244)](t(206), t(304)),
                o[t(270)][t(226)](t(269)),
                a[t(205)](o),
                e[t(205)](a);
                var s = h[t(247)]("chatButtons", t(222));
                s.appendChild(this[t(234)](["Thua đi cưng!", t(233), t(195)])),
                s[t(205)](this[t(234)](["Nhanh lên má!", t(213), t(303)])),
                s.appendChild(this.createButtons([t(308), "Bình tĩnh nào, không nóng!", t(250)])),
                this[t(245)].appendChild(s);
                var c = h[t(247)](t(299), t(209));
                c.classList.add(t(196));
                var u = h[t(247)]("gameMessages", "chat-game-messages");
                u[t(270)].add(t(298)),
                c[t(205)](u),
                this[t(245)][t(205)](c);
                var l = h.createDOMDiv(t(287), t(219));
                l.classList.add(t(237));
                var f = document[t(229)](t(257));
                f[t(270)][t(226)](t(296)),
                f[t(270)][t(226)](t(275)),
                f[t(244)](t(230), t(274)),
                f[t(205)](document[t(239)](t(218))),
                l[t(205)](f);
                var p = document[t(229)](t(257));
                p[t(270)][t(226)](t(296)),
                p[t(244)](t(230), t(231)),
                p.appendChild(document.createTextNode(CyberInstance[t(253)][t(279)])),
                l.appendChild(p),
                this[t(245)][t(205)](l)
            }
        }, {
            key: "layout",
            value: function() {
                var t = r;
                if (!this.layoured) {
                    var e = document[t(236)](t(311))[t(224)] + document[t(236)](t(302))[t(224)];
                    document[t(236)](t(225))[t(278)][t(282)] = e + "px";
                    for (var n = (parseFloat(getComputedStyle(this[t(245)], null)[t(283)].replace("px", "")) - 40) / 3 - 30, i = document[t(221)](".button-text"), a = 0; a < i.length; a++)
                        i[a][t(278)][t(283)] = n + "px";
                    var o = document.getElementById("footerWrapper")[t(224)];
                    document.getElementById("chatHistory")[t(278)].bottom = o + "px",
                    document.getElementById(t(302))[t(278)].bottom = o + "px",
                    this[t(204)] = !0
                }
            }
        }, {
            key: r(240),
            value: function() {
                var t = r;
                !this[t(245)][t(270)][t(291)](t(240)) && (this[t(310)].classList.add(t(240)),
                this.wrapper[t(270)][t(226)]("show"),
                this[t(238)](),
                ol.layout())
            }
        }, {
            key: r(196),
            value: function() {
                var t = r;
                this.wrapper.classList[t(194)]("show"),
                this[t(310)][t(270)][t(194)](t(240))
            }
        }, {
            key: r(273),
            value: function() {
                var t = r;
                this[t(245)].parentNode[t(307)](this[t(245)]),
                ol = null
            }
        }, {
            key: "showChat",
            value: function() {
                var t = r;
                document[t(236)](t(299)).classList[t(226)]("hide"),
                document[t(236)](t(302))[t(270)][t(194)](t(196))
            }
        }, {
            key: r(256),
            value: function() {
                var t = r;
                document.getElementById(t(299)).classList[t(194)](t(196)),
                document.getElementById(t(302)).classList[t(226)]("hide"),
                this.scrollToLatestMessage()
            }
        }, {
            key: r(235),
            value: function() {
                var t = r;
                document[t(236)](t(265))[t(208)](t(248), (function() {
                    var e = t;
                    ol[e(263)](),
                    ol[e(196)]()
                }
                )),
                document[t(236)]("gameChatInputText")[t(208)]("keyup", (function(e) {
                    var n = t;
                    13 === e.keyCode && (e[n(266)](),
                    document[n(236)]("gameSendButton").click())
                }
                )),
                this[t(310)][t(208)](t(248), (function() {
                    ol[t(196)]()
                }
                ));
                for (var e = document[t(221)](t(241)), n = 0; n < e[t(301)]; n++)
                    e[n].addEventListener(t(248), (function() {
                        var e = t
                          , n = this[e(249)].msg;
                        ol.controller[e(232)](n),
                        ol[e(196)]()
                    }
                    ));
                var i = document.querySelectorAll(".footer-button");
                for (n = 0; n < i[t(301)]; n++)
                    i[n][t(208)](t(248), (function() {
                        var e = t;
                        this.dataset.tabid === e(274) ? ol[e(238)]() : ol[e(256)]();
                        for (var n = document[e(221)](e(309)), r = 0; r < n[e(301)]; r++)
                            n[r][e(270)][e(291)](e(275)) && n[r].classList.remove(e(275));
                        this[e(270)].add(e(275))
                    }
                    ))
            }
        }, {
            key: r(263),
            value: function() {
                var t = r;
                if (!((new Date).getTime() - this.lastSent < 2e3)) {
                    var e = document[t(236)]("gameChatInputText")[t(295)];
                    if (!e || 0 == e[t(217)]()[t(301)])
                        return !1;
                    document.getElementById(t(246))[t(295)] = "",
                    ol.controller[t(232)](e),
                    this[t(212)] = (new Date)[t(193)]()
                }
            }
        }, {
            key: "appendMessage",
            value: function(t, e, n) {
                var i = r
                  , a = document[i(229)](i(257))
                  , o = document.createElement("SPAN");
                if (o.innerHTML = e,
                a[i(205)](o),
                a[i(270)][i(226)](i(207)),
                n)
                    a[i(270)][i(226)](i(294));
                else if (a[i(270)][i(226)]("their-message"),
                a.classList.add(i(268)),
                a.insertBefore(h.createDOMItalicText(t[i(288)]), a[i(285)]),
                t[i(255)]) {
                    var s = document[i(229)](i(223));
                    s[i(297)] = t[i(255)],
                    s[i(244)](i(290), i(267)),
                    a.appendChild(s[i(227)](!0))
                } else
                    a[i(270)][i(226)](i(242));
                document.getElementById(i(225))[i(205)](a),
                this[i(293)] >= 200 && document[i(236)](i(225)).firstElementChild.remove(),
                this.scrollToLatestMessage(),
                this[i(293)]++
            }
        }, {
            key: r(258),
            value: function() {
                var t = r;
                document[t(236)]("gameMessages").scrollTop = document[t(236)]("gameMessages")[t(220)]
            }
        }, {
            key: "createButtons",
            value: function(t) {
                var e = r
                  , n = document[e(229)](e(257));
                n.classList[e(226)](e(237)),
                n[e(270)][e(226)](e(252));
                for (var i = 0; i < t[e(301)]; i++) {
                    var a = this[e(199)](t[i]);
                    n[e(205)](a)
                }
                return n
            }
        }, {
            key: r(199),
            value: function(t) {
                var e = r
                  , n = document[e(229)](e(257));
                return n.classList[e(226)](e(228)),
                n[e(244)](e(198), t),
                n.appendChild(document.createTextNode(t)),
                n
            }
        }, {
            key: "wrapper",
            get: function() {
                var t = r;
                return document[t(236)](t(284))
            }
        }, {
            key: r(310),
            get: function() {
                return document[r(236)]("overlay")
            }
        }, {
            key: r(260),
            get: function() {
                return this[r(211)]
            },
            set: function(t) {
                this[r(211)] = t
            }
        }]) && il(t[n(254)], e),
        Object[n(243)](t, n(254), {
            writable: !1
        }),
        i
    }();
    function ul() {
        var t = ["lồn", "USER_EXIT_ROOM", "640eFTdSv", "isGame", "Lồn", "value", "3070152iTFAOx", "onJoinRoom", "170892gtylWE", "onUserExitRoom", "812135ZNTDEl", "addEventListener", "8VxFWTY", "dispatch", "chatScreen", "91479Rfppth", "toUpperCase", "onPublicMessage", "writable", "length", "defineProperty", "Buồi", "key", "show", "sender", "room", "địt", "send", "join", "split", "isItMe", "cặc", "configurable", "lastJoinedRoom", "onGameRoomMsg", "sfs", "SFSEvent", "openChatScreen", "appendMessage", "***", "LỒn", "buồi", "guserid", "avatar", "onMessage", "enumerable", "Địt", "6wTfvcU", "username", "7414197RnIQiB", "Cặc", "assets/images/no_avatar.png", "mySelf", "prototype", "sendPublicMessage", "closeChatScreen", "containsVariable", "2044830hCJbfg", "hide", "1586170woVDOc", "PUBLIC_MESSAGE", "getVariable"];
        return (ul = function() {
            return t
        }
        )()
    }
    function hl(t, e) {
        var n = ul();
        return (hl = function(t, e) {
            return n[t -= 440]
        }
        )(t, e)
    }
    function ll(t, e) {
        for (var n = hl, r = 0; r < e[n(478)]; r++) {
            var i = e[r];
            i.enumerable = i[n(442)] || !1,
            i[n(491)] = !0,
            "value"in i && (i[n(477)] = !0),
            Object[n(479)](t, i[n(481)], i)
        }
    }
    !function(t, e) {
        for (var n = hl, r = t(); ; )
            try {
                if (626822 == -parseInt(n(469)) / 1 + parseInt(n(444)) / 2 * (-parseInt(n(474)) / 3) + -parseInt(n(465)) / 4 + -parseInt(n(456)) / 5 + parseInt(n(454)) / 6 + -parseInt(n(446)) / 7 * (-parseInt(n(471)) / 8) + -parseInt(n(467)) / 9 * (-parseInt(n(461)) / 10))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(ul);
    var fl = function() {
        var t, e, n, r = hl;
        function i(t) {
            var e = hl;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            )(this, i),
            this[e(494)] = t,
            this[e(494)][e(470)](SFS2X.SFSEvent[e(457)], this[e(476)], this),
            this.sfs[e(470)](SFS2X[e(495)].ROOM_JOIN, this[e(466)], this),
            this[e(494)][e(470)](SFS2X[e(495)][e(460)], this.onUserExitRoom, this),
            this.publicChatScreen = new rl(this),
            this[e(473)] = null,
            this[e(493)] = new Phaser.Signal
        }
        return t = i,
        n = hl,
        (e = [{
            key: "openPublicChatScreen",
            value: function() {}
        }, {
            key: r(496),
            value: function() {
                var t = r;
                this[t(473)] && this[t(473)][t(482)]()
            }
        }, {
            key: r(452),
            value: function() {
                var t = r;
                this[t(473)] && this.chatScreen[t(455)]()
            }
        }, {
            key: r(466),
            value: function(t) {
                var e = r;
                t.room[e(462)] && (this.chatScreen = new cl(this))
            }
        }, {
            key: r(468),
            value: function(t) {
                var e = r;
                t.user[e(489)] && t[e(484)].isGame && (null != this[e(473)] && (this.chatScreen.destroy(),
                this[e(473)] = null),
                this[e(493)].removeAll())
            }
        }, {
            key: r(441),
            value: function(t) {}
        }, {
            key: "onPublicMessage",
            value: function(t) {
                var e = r
                  , n = this[e(494)][e(449)][e(458)](e(501))[e(464)]
                  , i = t[e(483)][e(458)](e(501))[e(464)];
                t[e(484)][e(462)] && this.chatScreen && (this[e(473)][e(497)]({
                    guserid: i,
                    avatar: t[e(483)][e(453)](e(440)) ? t[e(483)][e(458)](e(440))[e(464)] : e(448),
                    name: t[e(483)][e(453)](e(445)) ? t[e(483)][e(458)](e(445))[e(464)] : ""
                }, t.message, i === n),
                this[e(493)][e(472)](t))
            }
        }, {
            key: r(451),
            value: function(t) {}
        }, {
            key: "sendGameMessage",
            value: function(t) {
                for (var e = r, n = [e(459), e(463), e(499), e(485), e(443), "ĐỊt", e(500), e(480), e(490), e(447)], i = 0; i < n[e(478)]; i++)
                    t = (t = t[e(488)](n[i])[e(487)](e(498)))[e(488)](n[i][e(475)]())[e(487)](e(498));
                this[e(494)][e(486)](new SFS2X.PublicMessageRequest(t), null, this[e(494)][e(492)])
            }
        }]) && ll(t[n(450)], e),
        Object[n(479)](t, n(450), {
            writable: !1
        }),
        i
    }();
    function pl() {
        var t = ["bind", "7463619TYgtpQ", "object", "function", "addOnce", "symbol", "70644aSfgqR", "getPrototypeOf", "7905168aJQDUJ", "2356539bitryY", "apply", "Text", "enumerable", "__proto__", "2629988veLjXG", "TAP_TO_RESUME", "add", "549804HoagiP", "70eYVXwJ", "2IgRlNQ", "setTo", "defineProperty", "iterator", "lang", "prototype", "dispatch", "Super expression must either be null or a function", "this hasn't been initialised - super() hasn't been called", "configurable", "paused", "782035hBluoR", "key", "setPrototypeOf", "value", "call", "width", "game", "onResume", "construct", "length", "constructor", "existing", "inputEnabled", "valueOf", "height", "Derived constructors may only return object or undefined", "Cannot call a class as a function"];
        return (pl = function() {
            return t
        }
        )()
    }
    function yl(t) {
        var e = vl;
        return (yl = e(221) == typeof Symbol && e(223) == typeof Symbol[e(240)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(221) == typeof Symbol && t[n(258)] === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function dl(t, e) {
        for (var n = vl, r = 0; r < e[n(257)]; r++) {
            var i = e[r];
            i.enumerable = i[n(230)] || !1,
            i[n(246)] = !0,
            n(251)in i && (i.writable = !0),
            Object[n(239)](t, i[n(249)], i)
        }
    }
    function vl(t, e) {
        var n = pl();
        return (vl = function(t, e) {
            return n[t -= 213]
        }
        )(t, e)
    }
    function bl(t, e) {
        var n = vl;
        return (bl = Object[n(250)] ? Object[n(250)].bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function ml(t, e) {
        var n = vl;
        if (e && (yl(e) === n(220) || typeof e === n(221)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(216));
        return gl(t)
    }
    function gl(t) {
        if (void 0 === t)
            throw new ReferenceError(vl(245));
        return t
    }
    function wl(t) {
        var e = vl;
        return (wl = Object[e(250)] ? Object[e(225)][e(218)]() : function(t) {
            var n = e;
            return t[n(231)] || Object[n(225)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = vl, r = t(); ; )
            try {
                if (687318 == parseInt(n(224)) / 1 + -parseInt(n(237)) / 2 * (parseInt(n(227)) / 3) + parseInt(n(232)) / 4 + -parseInt(n(248)) / 5 + parseInt(n(235)) / 6 * (-parseInt(n(236)) / 7) + parseInt(n(226)) / 8 + parseInt(n(219)) / 9)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(pl);
    const Il = function(t) {
        var e = vl;
        !function(t, e) {
            var n = vl;
            if (typeof e !== n(221) && null !== e)
                throw new TypeError(n(244));
            t[n(242)] = Object.create(e && e[n(242)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(239)](t, n(242), {
                writable: !1
            }),
            e && bl(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = vl;
            if ("undefined" == typeof Reflect || !Reflect[t(256)])
                return !1;
            if (Reflect[t(256)].sham)
                return !1;
            if (typeof Proxy === t(221))
                return !0;
            try {
                return Boolean[t(242)][t(214)].call(Reflect[t(256)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = vl, n = wl(a);
            if (o) {
                var r = wl(this)[e(258)];
                t = Reflect[e(256)](n, arguments, r)
            } else
                t = n[e(228)](this, arguments);
            return ml(this, t)
        }
        );
        function c(t) {
            var e, n = vl;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(vl(217))
            }
            )(this, c),
            (e = s[n(252)](this, t, 0, 0, CyberGlobalData.overlayTexture))[n(253)] = e.game[n(253)],
            e.height = e[n(254)].height,
            e.alpha = .85,
            e[n(213)] = !0;
            var r = new (Phaser[n(229)])(e[n(254)],e[n(253)] / 2,e[n(215)] / 2,CyberInstance[n(241)][n(233)].toUpperCase(),{
                font: APP_FONT,
                fill: "#ffffff",
                fontWeight: 400,
                fontSize: 60
            });
            return r.anchor[n(238)](.5),
            e.addChild(r),
            e.events.onInputDown[n(222)](e[n(255)], gl(e)),
            e.game[n(234)][n(259)](gl(e)),
            e
        }
        return n = c,
        i = vl,
        (r = [{
            key: e(255),
            value: function() {
                var t = e;
                CyberInstance[t(247)] = !1,
                CyberInstance[t(255)][t(243)](),
                this.destroy(!0)
            }
        }]) && dl(n[i(242)], r),
        Object[i(239)](n, "prototype", {
            writable: !1
        }),
        c
    }(Phaser.Sprite);
    function Sl() {
        var t = ["construct", "63RNuaDf", "base", "__proto__", "this hasn't been initialised - super() hasn't been called", "hasOwnProperty", "destroy", "img", "create", "valueOf", "Sprite", "1iTdpvL", "key", "cache", "parseDragonBonesData", "sham", "defineProperty", "anim", "addChild", "play", "function", "389484tcGaSV", "getPrototypeOf", "getOwnPropertyDescriptor", "symbol", "17129844tShbwq", "Derived constructors may only return object or undefined", "constructor", "bind", "game", "length", "value", "200SDyKiB", "setPrototypeOf", "writable", "ske", "factory", "594566XjqmgU", "205583zJPpOX", "configurable", "10XoONJK", "anchor", "iterator", "444070FpdbHi", "163896uBUPdh", "animName", "undefined", "get", "60IvHkDi", "parseTextureAtlasData", "apply", "armature", "prototype", "4169341aqqLtu", "PhaserFactory", "getJSON", "stop", "call", "setTo", "enumerable", "options", "animation"];
        return (Sl = function() {
            return t
        }
        )()
    }
    var Ol = Tl;
    function kl(t) {
        var e = Tl;
        return (kl = e(479) == typeof Symbol && e(483) == typeof Symbol[e(501)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(479) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(511)] ? n(483) : typeof t
        }
        )(t)
    }
    function Cl(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function Pl(t, e) {
        for (var n = Tl, r = 0; r < e[n(489)]; r++) {
            var i = e[r];
            i[n(456)] = i[n(456)] || !1,
            i[n(498)] = !0,
            "value"in i && (i[n(493)] = !0),
            Object[n(475)](t, i[n(471)], i)
        }
    }
    function Tl(t, e) {
        var n = Sl();
        return (Tl = function(t, e) {
            return n[t -= 454]
        }
        )(t, e)
    }
    function xl() {
        var t = Tl;
        return xl = typeof Reflect !== t(505) && Reflect[t(506)] ? Reflect[t(506)][t(487)]() : function(e, n, r) {
            var i = t
              , a = _l(e, n);
            if (a) {
                var o = Object[i(482)](a, n);
                return o[i(506)] ? o[i(506)][i(454)](arguments[i(489)] < 3 ? e : r) : o[i(490)]
            }
        }
        ,
        xl[t(509)](this, arguments)
    }
    function _l(t, e) {
        for (var n = Tl; !Object[n(511)][n(464)][n(454)](t, e) && null !== (t = El(t)); )
            ;
        return t
    }
    function jl(t, e) {
        var n = Tl;
        return (jl = Object[n(492)] ? Object[n(492)][n(487)]() : function(t, e) {
            return t[n(462)] = e,
            t
        }
        )(t, e)
    }
    function Rl(t, e) {
        var n = Tl;
        if (e && ("object" === kl(e) || typeof e === n(479)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(485));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError(Tl(463));
            return t
        }(t)
    }
    function El(t) {
        var e = Tl;
        return (El = Object[e(492)] ? Object[e(481)][e(487)]() : function(t) {
            var n = e;
            return t[n(462)] || Object[n(481)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = Tl, r = t(); ; )
            try {
                if (621511 == -parseInt(n(470)) / 1 * (-parseInt(n(496)) / 2) + parseInt(n(507)) / 3 * (parseInt(n(503)) / 4) + parseInt(n(499)) / 5 * (parseInt(n(480)) / 6) + -parseInt(n(497)) / 7 * (-parseInt(n(491)) / 8) + parseInt(n(460)) / 9 * (-parseInt(n(502)) / 10) + parseInt(n(512)) / 11 + -parseInt(n(484)) / 12)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Sl);
    var Bl = {};
    const Al = function(t) {
        var e = Tl;
        !function(t, e) {
            var n = Tl;
            if (typeof e !== n(479) && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t[n(511)] = Object[n(467)](e && e[n(511)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(475)](t, "prototype", {
                writable: !1
            }),
            e && jl(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = Tl;
            if (typeof Reflect === t(505) || !Reflect[t(459)])
                return !1;
            if (Reflect[t(459)][t(474)])
                return !1;
            if (typeof Proxy === t(479))
                return !0;
            try {
                return Boolean[t(511)][t(468)][t(454)](Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Tl, n = El(a);
            if (o) {
                var r = El(this)[e(486)];
                t = Reflect[e(459)](n, arguments, r)
            } else
                t = n[e(509)](this, arguments);
            return Rl(this, t)
        }
        );
        function c(t, e) {
            var n, r = Tl, i = arguments[r(489)] > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, o = arguments[r(489)] > 4 && void 0 !== arguments[4] ? arguments[4] : null, u = arguments[r(489)] > 5 && void 0 !== arguments[5] ? arguments[5] : null;
            Cl(this, c),
            (n = s[r(454)](this, e, i, a, o, u))[r(457)] = t;
            var h = dragonBones[r(513)][r(495)];
            return !Bl[n[r(457)].armature] && (h[r(473)](n[r(488)][r(472)][r(514)](n[r(457)][r(494)])),
            h[r(508)](n[r(488)][r(472)][r(514)](n[r(457)].atlas), n[r(488)][r(472)].getImage(n[r(457)][r(466)], !0)[r(461)]),
            Bl[n[r(457)][r(510)]] = n[r(457)].armature),
            n[r(476)] = h.buildArmatureDisplay(n[r(457)][r(510)]),
            n[r(476)].x = n.options.x,
            n[r(476)].y = n[r(457)].y,
            n[r(476)][r(500)][r(455)](.5),
            n[r(477)](n[r(476)]),
            n
        }
        return n = c,
        r = [{
            key: "play",
            value: function() {
                var t = Tl
                  , e = arguments[t(489)] > 0 && void 0 !== arguments[0] && arguments[0]
                  , n = arguments[t(489)] > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                this.anim.animation[t(478)](this.options[t(504)]),
                e || this.anim.addDBEventListener(dragonBones.EventObject.LOOP_COMPLETE, n)
            }
        }, {
            key: e(515),
            value: function() {
                var t = e;
                this[t(476)][t(458)].stop(this[t(457)][t(504)])
            }
        }, {
            key: e(465),
            value: function() {
                var t = e;
                xl(El(c[t(511)]), "destroy", this)[t(454)](this, !0)
            }
        }],
        i = Tl,
        r && Pl(n[i(511)], r),
        Object[i(475)](n, i(511), {
            writable: !1
        }),
        c
    }(Phaser[Ol(469)]);
    var Dl = Wl;
    function Fl(t) {
        var e = Wl;
        return (Fl = e(184) == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(184) == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? n(189) : typeof t
        }
        )(t)
    }
    function Nl(t, e) {
        for (var n = Wl, r = 0; r < e[n(194)]; r++) {
            var i = e[r];
            i[n(191)] = i.enumerable || !1,
            i[n(185)] = !0,
            n(179)in i && (i.writable = !0),
            Object[n(201)](t, i[n(180)], i)
        }
    }
    function Ll() {
        var t = ["2438550pWIEsK", "langCode", "doGetFrame", "valueOf", "Derived constructors may only return object or undefined", "38ZXaUxj", "defineProperty", "prototype", "Cannot call a class as a function", "4831386SewsNO", "20465rPMQFG", "setPrototypeOf", "getPrototypeOf", "sham", "45bMenVj", "249900QnSkVT", "Sprite", "11053989hgAhUw", "value", "key", "7303696ACkTsV", "create", "constructor", "function", "configurable", "call", "__proto__", "construct", "symbol", "object", "enumerable", "2965815HisOmk", "undefined", "length"];
        return (Ll = function() {
            return t
        }
        )()
    }
    function Gl(t, e) {
        var n = Wl;
        return (Gl = Object[n(172)] ? Object[n(172)].bind() : function(t, e) {
            return t[n(187)] = e,
            t
        }
        )(t, e)
    }
    function Ml(t, e) {
        var n = Wl;
        if (e && (Fl(e) === n(190) || typeof e === n(184)))
            return e;
        if (void 0 !== e)
            throw new TypeError(n(199));
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t)
    }
    function Wl(t, e) {
        var n = Ll();
        return (Wl = function(t, e) {
            return n[t -= 168]
        }
        )(t, e)
    }
    function zl(t) {
        var e = Wl;
        return (zl = Object[e(172)] ? Object.getPrototypeOf.bind() : function(t) {
            var n = e;
            return t[n(187)] || Object[n(173)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = Wl, r = t(); ; )
            try {
                if (507241 == -parseInt(n(171)) / 1 * (-parseInt(n(200)) / 2) + parseInt(n(175)) / 3 * (parseInt(n(176)) / 4) + parseInt(n(192)) / 5 + -parseInt(n(195)) / 6 + -parseInt(n(170)) / 7 + parseInt(n(181)) / 8 + -parseInt(n(178)) / 9)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(Ll);
    const Ul = function(t) {
        var e = Wl;
        !function(t, e) {
            var n = Wl;
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object[n(182)](e && e[n(168)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(201)](t, n(168), {
                writable: !1
            }),
            e && Gl(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = Wl;
            if (typeof Reflect === t(193) || !Reflect.construct)
                return !1;
            if (Reflect[t(188)][t(174)])
                return !1;
            if (typeof Proxy === t(184))
                return !0;
            try {
                return Boolean[t(168)][t(198)][t(186)](Reflect[t(188)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Wl, n = zl(a);
            if (o) {
                var r = zl(this)[e(183)];
                t = Reflect.construct(n, arguments, r)
            } else
                t = n.apply(this, arguments);
            return Ml(this, t)
        }
        );
        function c(t, e, n, r, i) {
            var a = Wl;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Wl(169))
            }(this, c),
            s[a(186)](this, t, e, n, r, i)
        }
        return n = c,
        i = Wl,
        (r = [{
            key: e(197),
            value: function(t) {
                return CyberInstance[e(196)] + "_" + t
            }
        }]) && Nl(n[i(168)], r),
        Object[i(201)](n, i(168), {
            writable: !1
        }),
        c
    }(Phaser[Dl(177)]);
    var Vl = Xl;
    function Hl(t) {
        var e = Xl;
        return (Hl = e(348) == typeof Symbol && e(356) == typeof Symbol[e(331)] ? function(t) {
            return typeof t
        }
        : function(t) {
            var n = e;
            return t && n(348) == typeof Symbol && t[n(319)] === Symbol && t !== Symbol[n(317)] ? n(356) : typeof t
        }
        )(t)
    }
    function Xl(t, e) {
        var n = tf();
        return (Xl = function(t, e) {
            return n[t -= 304]
        }
        )(t, e)
    }
    function Yl(t, e) {
        for (var n = Xl, r = 0; r < e[n(306)]; r++) {
            var i = e[r];
            i[n(354)] = i.enumerable || !1,
            i[n(324)] = !0,
            n(345)in i && (i.writable = !0),
            Object[n(312)](t, i[n(310)], i)
        }
    }
    function ql(t, e) {
        var n = Xl;
        return (ql = Object.setPrototypeOf ? Object.setPrototypeOf[n(328)]() : function(t, e) {
            return t[n(329)] = e,
            t
        }
        )(t, e)
    }
    function Kl(t, e) {
        var n = Xl;
        if (e && (Hl(e) === n(313) || "function" == typeof e))
            return e;
        if (void 0 !== e)
            throw new TypeError("Derived constructors may only return object or undefined");
        return Jl(t)
    }
    function Jl(t) {
        if (void 0 === t)
            throw new ReferenceError(Xl(340));
        return t
    }
    function Ql(t) {
        var e = Xl;
        return (Ql = Object[e(347)] ? Object[e(307)][e(328)]() : function(t) {
            var n = e;
            return t[n(329)] || Object[n(307)](t)
        }
        )(t)
    }
    !function(t, e) {
        for (var n = Xl, r = t(); ; )
            try {
                if (959877 == -parseInt(n(352)) / 1 + parseInt(n(349)) / 2 + -parseInt(n(353)) / 3 * (parseInt(n(344)) / 4) + parseInt(n(338)) / 5 + parseInt(n(326)) / 6 + parseInt(n(327)) / 7 + -parseInt(n(341)) / 8)
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(tf);
    var Zl = null;
    const $l = function(t) {
        var e = Xl;
        !function(t, e) {
            var n = Xl;
            if ("function" != typeof e && null !== e)
                throw new TypeError(n(337));
            t[n(317)] = Object[n(323)](e && e[n(317)], {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object[n(312)](t, n(317), {
                writable: !1
            }),
            e && ql(t, e)
        }(c, t);
        var n, r, i, a, o, s = (a = c,
        o = function() {
            var t = Xl;
            if (typeof Reflect === t(333) || !Reflect.construct)
                return !1;
            if (Reflect[t(314)][t(325)])
                return !1;
            if (typeof Proxy === t(348))
                return !0;
            try {
                return Boolean.prototype[t(311)][t(308)](Reflect[t(314)](Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }(),
        function() {
            var t, e = Xl, n = Ql(a);
            if (o) {
                var r = Ql(this)[e(319)];
                t = Reflect.construct(n, arguments, r)
            } else
                t = n[e(330)](this, arguments);
            return Kl(this, t)
        }
        );
        function c(t, e, n) {
            var r, i = Xl;
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(Xl(355))
            }
            )(this, c),
            (r = s.call(this, t)).y = -75,
            r[i(323)](0, 0, c[i(322)](t))[i(336)] = .65;
            var a = new Phaser.Text(r[i(351)],r.game[i(339)] / 2,37.5,e,{
                font: APP_FONT,
                fill: i(305),
                fontWeight: 400,
                fontSize: 26
            });
            return a[i(320)][i(316)](.5),
            r[i(343)](a),
            r.game[i(343)][i(318)](Jl(r)).to({
                y: 0
            }, 200, i(315), !0),
            void 0 !== n ? r[i(351)][i(350)][i(309)][i(343)](n, r.destroy, Jl(r)) : r[i(351)][i(350)][i(309)][i(343)](2e3, r.destroy, Jl(r)),
            r
        }
        return n = c,
        null,
        i = Xl,
        (r = [{
            key: e(322),
            value: function(t) {
                var n = e;
                if (!Zl) {
                    var r = t[n(321)][n(346)](0, 0);
                    r[n(304)](0),
                    r[n(332)](0, 0, t[n(339)], 75),
                    r[n(334)](),
                    Zl = r[n(342)](),
                    r.destroy()
                }
                return Zl
            }
        }]) && Yl(n, r),
        Object[i(312)](n, "prototype", {
            writable: !1
        }),
        c
    }(Phaser[Vl(335)]);
    function tf() {
        var t = ["Group", "alpha", "Super expression must either be null or a function", "8341410tNpuAH", "width", "this hasn't been initialised - super() hasn't been called", "4990944VdfzQq", "generateTexture", "add", "409588knBYWv", "value", "graphics", "setPrototypeOf", "function", "2050024VTqFbg", "time", "game", "1547476zWznhz", "24pAfgKX", "enumerable", "Cannot call a class as a function", "symbol", "beginFill", "#FFFFFF", "length", "getPrototypeOf", "call", "events", "key", "valueOf", "defineProperty", "object", "construct", "Linear", "setTo", "prototype", "tween", "constructor", "anchor", "make", "createTexture", "create", "configurable", "sham", "5480862jHTrTq", "2405382bVYNuX", "bind", "__proto__", "apply", "iterator", "drawRect", "undefined", "endFill"];
        return (tf = function() {
            return t
        }
        )()
    }
    var ef = rf;
    function nf(t, e) {
        for (var n = rf, r = 0; r < e.length; r++) {
            var i = e[r];
            i.enumerable = i.enumerable || !1,
            i[n(419)] = !0,
            n(426)in i && (i[n(448)] = !0),
            Object.defineProperty(t, i[n(395)], i)
        }
    }
    function rf(t, e) {
        var n = sf();
        return (rf = function(t, e) {
            return n[t -= 332]
        }
        )(t, e)
    }
    !function(t, e) {
        for (var n = rf, r = t(); ; )
            try {
                if (284617 == parseInt(n(348)) / 1 + -parseInt(n(417)) / 2 * (-parseInt(n(370)) / 3) + parseInt(n(391)) / 4 * (parseInt(n(366)) / 5) + -parseInt(n(399)) / 6 + -parseInt(n(450)) / 7 + -parseInt(n(334)) / 8 + parseInt(n(349)) / 9 * (-parseInt(n(368)) / 10))
                    break;
                r.push(r.shift())
            } catch (t) {
                r.push(r.shift())
            }
    }(sf);
    var af = null
      , of = function() {
        var t, e, n, r = rf;
        function i() {
            var t = rf;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError(rf(359))
            }(this, i),
            !af && (this.inited = !1,
            this[t(373)] = !1,
            this[t(447)] = !0,
            this.isSoundOn = !0,
            this[t(333)] = 3,
            this[t(441)] = !1,
            this.avatar = t(443),
            this.version = t(435),
            this[t(350)] = null,
            this[t(365)] = null,
            this[t(372)] = null,
            af = this),
            af
        }
        return t = i,
        n = rf,
        (e = [{
            key: r(438),
            value: function() {
                var t = r;
                this[t(361)] || (this[t(416)](),
                this.socket = new (SFS2X[t(425)])({
                    useSSL: !0,
                    debug: !1
                }),
                this[t(413)] = new It(this[t(362)]),
                V[t(354)][t(438)](this[t(362)]),
                ie[t(354)][t(438)](this[t(362)]),
                ot.instance[t(438)](this.socket),
                this.sound = new Zh,
                this.chat = new fl(this[t(362)]),
                this[t(338)] = new Map,
                this[t(338)][t(424)](t(337), []),
                this[t(338)][t(424)](t(420), []),
                this[t(338)][t(424)](t(414), []),
                this.sectionMap.set("master", []),
                this[t(404)] = new (Phaser[t(375)]),
                this[t(405)] = new Map,
                this[t(361)] = !0)
            }
        }, {
            key: r(416),
            value: function() {
                var t = r;
                this[t(340)] = new (Phaser[t(422)])(1136,640,FBInstant[t(398)]() === t(401) ? Phaser.CANVAS : Phaser.AUTO),
                this[t(340)][t(356)][t(384)](t(388), Xh),
                this[t(389)] = !1,
                window[t(340)] = this[t(340)]
            }
        }, {
            key: r(436),
            value: function() {
                var t = this
                  , e = setInterval((function() {
                    var n = rf;
                    signedPlayerInfo.signature && signedPlayerInfo.playerId && void 0 !== signedPlayerInfo[n(376)] && t[n(372)] && t[n(365)] && t[n(350)] && (clearInterval(e),
                    t[n(408)] = signedPlayerInfo[n(408)],
                    t.signature = signedPlayerInfo[n(400)],
                    t[n(376)] = signedPlayerInfo[n(376)],
                    CyberGlobalData[n(339)] = signedPlayerInfo.avatar,
                    CyberGlobalData[n(363)] = signedPlayerInfo[n(336)],
                    CyberGlobalData.dailyPack = signedPlayerInfo[n(406)],
                    signedPlayerInfo = null,
                    console[n(397)](t[n(376)]),
                    t.connector[n(402)]())
                }
                ), 60)
            }
        }, {
            key: "enableVisibilityChange",
            value: function() {
                var t = r
                  , e = this;
                this[t(344)] = !1,
                this[t(335)] = new Phaser.Signal,
                this.onPause = new (Phaser[t(375)]),
                FBInstant[t(434)]((function() {
                    var n = t;
                    e[n(344)] || typeof CyberGlobalData.overlayTexture == n(353) || (e[n(344)] = !0,
                    e[n(434)][n(403)](),
                    e[n(340)][n(356)][n(374)] === e.gameScreenKey && new Il(e.game))
                }
                ))
            }
        }, {
            key: r(378),
            value: function(t) {
                var e = r;
                return ie[e(354)][e(378)](t)
            }
        }, {
            key: "startGame",
            value: function() {
                var t = r;
                this[t(340)][t(356)][t(360)](t(388))
            }
        }, {
            key: r(421),
            value: function() {
                var t = r;
                this[t(340)][t(356)][t(360)](CyberGlobalData[t(409)], !0, !1)
            }
        }, {
            key: r(364),
            value: function() {
                var t = r;
                this[t(340)][t(356)][t(360)](this.gameScreenKey, !0, !1)
            }
        }, {
            key: r(346),
            value: function() {
                this[r(386)] = !0
            }
        }, {
            key: r(412),
            value: function(t) {
                return this[r(372)] = t,
                this
            }
        }, {
            key: r(430),
            value: function(t) {
                return this.host = t,
                this
            }
        }, {
            key: r(381),
            value: function(t) {
                return this.port = t,
                this
            }
        }, {
            key: r(418),
            value: function(t) {
                return this[r(385)] = t,
                this
            }
        }, {
            key: "setMiniumMoneyCondition",
            value: function(t) {
                return this[r(352)] = t,
                this
            }
        }, {
            key: r(387),
            value: function(t, e) {
                var n = r;
                !this[n(394)] && (this[n(394)] = t,
                Object.freeze(this[n(394)]),
                game[n(356)].add(t, e))
            }
        }, {
            key: r(379),
            value: function(t) {
                bt[r(354)].addProducts(t)
            }
        }, {
            key: r(371),
            value: function(t) {
                var e = r;
                return this[e(390)] = t,
                Object[e(396)](this[e(390)]),
                this
            }
        }, {
            key: "setInterstitialIDs",
            value: function(t, e) {
                var n = r;
                return this[n(440)] = t,
                Object[n(396)](this.interids),
                void 0 !== e && (this[n(333)] = e),
                this
            }
        }, {
            key: "setDeveloperPayload",
            value: function(t) {
                return this[r(415)] = t,
                this
            }
        }, {
            key: r(341),
            value: function() {
                return this[r(415)]
            }
        }, {
            key: r(392),
            value: function(t) {
                return this
            }
        }, {
            key: r(407),
            value: function(t, e) {
                var n = r;
                this[n(338)][n(347)](t) && this[n(338)][n(357)](t)[n(369)](e)
            }
        }, {
            key: r(449),
            value: function(t, e) {
                return s[r(449)](t, e),
                this
            }
        }, {
            key: "addJSON",
            value: function(t, e) {
                return s[r(439)](t, e),
                this
            }
        }, {
            key: r(429),
            value: function(t, e, n) {
                return s[r(429)](t, e, n),
                this
            }
        }, {
            key: "addBitmapFont",
            value: function(t, e, n) {
                return s[r(332)](t, e, n),
                this
            }
        }, {
            key: "addSound",
            value: function(t, e) {
                return this[r(433)].add(t, e),
                this
            }
        }, {
            key: "isDragonBonesReady",
            value: function() {
                return s.isDragonBonesReady()
            }
        }, {
            key: "setOutOfMoney",
            value: function(t) {
                this[r(377)] = t
            }
        }, {
            key: "addLanguage",
            value: function(t, e) {
                var n = r;
                return this[n(405)][n(424)](t, e),
                this
            }
        }, {
            key: r(444),
            value: function(t) {
                var e = r;
                this[e(405)].has(t) && (this[e(345)] = this[e(405)][e(357)](t),
                this.langCode = t == e(343) ? "vn" : "en")
            }
        }, {
            key: r(431),
            value: function() {
                return this[r(441)] = !0,
                this
            }
        }, {
            key: r(428),
            value: function() {
                this.devEnabled = !0
            }
        }, {
            key: r(342),
            value: function() {
                this[r(447)] = !1
            }
        }, {
            key: r(411),
            value: function(t) {
                this[r(358)] = t
            }
        }, {
            key: r(389),
            get: function() {
                return this[r(432)]
            },
            set: function(t) {
                this[r(432)] = t
            }
        }]) && nf(t[n(446)], e),
        Object[n(410)](t, n(446), {
            writable: !1
        }),
        i
    }();
    function sf() {
        var t = ["492157WZkBhp", "2160FoTAHo", "host", "Popup", "miniumMoneyCondition", "undefined", "instance", "BotImage", "state", "get", "version", "Cannot call a class as a function", "start", "inited", "socket", "defaultClockId", "switchToGameScreen", "port", "1366330ypFuyE", "BasePopup", "10550cFrpEI", "push", "117501dpPkDC", "setRVPlacementIDs", "zone", "devEnabled", "current", "Signal", "guserid", "outOfMoney", "canPlay", "initIAP", "ShopController", "setPort", "CyberHelper", "BaseCheckBox", "add", "maxUsers", "switchGameEnabled", "setGameScreen", "BootScreen", "isHomeScreenStarted", "rvids", "4vzAoPM", "setChatURL", "BaseDragonBonesAnim", "gameScreenKey", "key", "freeze", "log", "getPlatform", "385200GCynMZ", "signature", "WEB", "connect", "dispatch", "onHelpClick", "languageMap", "dailyPack", "addLobbySection", "playerId", "lobbyScreen", "defineProperty", "setVersion", "setZone", "connector", "professional", "developerPayload", "initPhaser", "10lyHSAH", "setMaxUsers", "configurable", "amateur", "switchToLobbyScreen", "Game", "Notification", "set", "SmartFox", "value", "BaseScreen", "enableDev", "addAtlas", "setHost", "enableLanguage", "_isHomeScreenStarted", "sound", "onPause", "0.9.1", "connectAsyncV2", "BaseSprite", "initialize", "addJSON", "interids", "languageEnabled", "LoadingPopup", "assets/images/no_avatar.png", "setDefaultLanguage", "BaseButton", "prototype", "adEnabled", "writable", "addImage", "297150BoBOMC", "CyberGlobalData", "addBitmapFont", "maxInterShowAsyncAllowed", "2534328chsYIK", "onResume", "clock", "beginner", "sectionMap", "defaultAvatarId", "game", "getDeveloperPayload", "disableAd", "vi_VN", "paused", "lang", "enableSwitchGameAsync", "has"];
        return (sf = function() {
            return t
        }
        )()
    }
    window[ef(451)] = {
        dailyDays: -1,
        dailyCollected: !1,
        dailyAutoShowEnabled: !0,
        canShowFlashSale: !0
    },
    window.CyberInstance = new of,
    window[ef(382)] = h,
    CyberInstance[ef(367)] = _,
    CyberInstance[ef(351)] = M,
    CyberInstance[ef(442)] = g,
    CyberInstance.ListView = kr,
    CyberInstance[ef(427)] = pe,
    CyberInstance[ef(355)] = Ur,
    CyberInstance[ef(445)] = jt,
    CyberInstance[ef(383)] = en,
    CyberInstance[ef(437)] = Ul,
    CyberInstance[ef(423)] = $l,
    CyberInstance[ef(393)] = Al,
    CyberInstance[ef(380)] = ot,
    CyberInstance.NewScrollViewYun = Ar,
    CyberInstance[ef(438)](),
    CyberInstance[ef(436)]()
}
)();
