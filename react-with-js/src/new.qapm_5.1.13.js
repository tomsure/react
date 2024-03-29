! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.QAPMMonitorJS = e() : t.QAPMMonitorJS = e()
}(window, (function () {
    return e = [
        function (t, e, r) {
            t.exports = r(34)
        },
        function (t, e) {
            function r(t, e, r, n, i, o, s) {
                try {
                    var a = t[o](s),
                        u = a.value
                } catch (t) {
                    return void r(t)
                }
                a.done ? e(u) : Promise.resolve(u).then(n, i)
            }
            t.exports = function (t) {
                return function () {
                    var e = this,
                        n = arguments;
                    return new Promise((function (i, o) {
                        var s = t.apply(e, n);

                        function a(t) {
                            r(s, i, o, a, u, "next", t)
                        }

                        function u(t) {
                            r(s, i, o, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }
        },
        function (t, e, r) {
            function n(t, e) {
                t.constructor == String ? t = (e && "binary" === e.encoding ? a : o).stringToBytes(t) : s(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || t.constructor === Uint8Array || (t = t.toString());
                for (var r = i.bytesToWords(t), u = (t = 8 * t.length, 1732584193), h = -271733879, c = -1732584194, f = 271733878, l = 0; l < r.length; l++) r[l] = 16711935 & (r[l] << 8 | r[l] >>> 24) | 4278255360 & (r[l] << 24 | r[l] >>> 8);
                r[t >>> 5] |= 128 << t % 32, r[14 + (64 + t >>> 9 << 4)] = t;
                var p = n._ff,
                    d = n._gg,
                    g = n._hh,
                    m = n._ii;
                for (l = 0; l < r.length; l += 16) {
                    var y = u,
                        v = h,
                        w = c,
                        b = f;
                    u = p(u, h, c, f, r[l + 0], 7, -680876936), f = p(f, u, h, c, r[l + 1], 12, -389564586), c = p(c, f, u, h, r[l + 2], 17, 606105819), h = p(h, c, f, u, r[l + 3], 22, -1044525330);
                    u = p(u, h, c, f, r[l + 4], 7, -176418897), f = p(f, u, h, c, r[l + 5], 12, 1200080426), c = p(c, f, u, h, r[l + 6], 17, -1473231341), h = p(h, c, f, u, r[l + 7], 22, -45705983), u = p(u, h, c, f, r[l + 8], 7, 1770035416), f = p(f, u, h, c, r[l + 9], 12, -1958414417), c = p(c, f, u, h, r[l + 10], 17, -42063), h = p(h, c, f, u, r[l + 11], 22, -1990404162), u = p(u, h, c, f, r[l + 12], 7, 1804603682), f = p(f, u, h, c, r[l + 13], 12, -40341101), c = p(c, f, u, h, r[l + 14], 17, -1502002290), u = d(u, h = p(h, c, f, u, r[l + 15], 22, 1236535329), c, f, r[l + 1], 5, -165796510), f = d(f, u, h, c, r[l + 6], 9, -1069501632), c = d(c, f, u, h, r[l + 11], 14, 643717713), h = d(h, c, f, u, r[l + 0], 20, -373897302), u = d(u, h, c, f, r[l + 5], 5, -701558691), f = d(f, u, h, c, r[l + 10], 9, 38016083), c = d(c, f, u, h, r[l + 15], 14, -660478335), h = d(h, c, f, u, r[l + 4], 20, -405537848), u = d(u, h, c, f, r[l + 9], 5, 568446438), f = d(f, u, h, c, r[l + 14], 9, -1019803690), c = d(c, f, u, h, r[l + 3], 14, -187363961), h = d(h, c, f, u, r[l + 8], 20, 1163531501), u = d(u, h, c, f, r[l + 13], 5, -1444681467), f = d(f, u, h, c, r[l + 2], 9, -51403784), c = d(c, f, u, h, r[l + 7], 14, 1735328473), u = g(u, h = d(h, c, f, u, r[l + 12], 20, -1926607734), c, f, r[l + 5], 4, -378558), f = g(f, u, h, c, r[l + 8], 11, -2022574463), c = g(c, f, u, h, r[l + 11], 16, 1839030562), h = g(h, c, f, u, r[l + 14], 23, -35309556), u = g(u, h, c, f, r[l + 1], 4, -1530992060), f = g(f, u, h, c, r[l + 4], 11, 1272893353), c = g(c, f, u, h, r[l + 7], 16, -155497632), h = g(h, c, f, u, r[l + 10], 23, -1094730640), u = g(u, h, c, f, r[l + 13], 4, 681279174), f = g(f, u, h, c, r[l + 0], 11, -358537222), c = g(c, f, u, h, r[l + 3], 16, -722521979), h = g(h, c, f, u, r[l + 6], 23, 76029189), u = g(u, h, c, f, r[l + 9], 4, -640364487), f = g(f, u, h, c, r[l + 12], 11, -421815835), c = g(c, f, u, h, r[l + 15], 16, 530742520), u = m(u, h = g(h, c, f, u, r[l + 2], 23, -995338651), c, f, r[l + 0], 6, -198630844), f = m(f, u, h, c, r[l + 7], 10, 1126891415), c = m(c, f, u, h, r[l + 14], 15, -1416354905), h = m(h, c, f, u, r[l + 5], 21, -57434055), u = m(u, h, c, f, r[l + 12], 6, 1700485571), f = m(f, u, h, c, r[l + 3], 10, -1894986606), c = m(c, f, u, h, r[l + 10], 15, -1051523), h = m(h, c, f, u, r[l + 1], 21, -2054922799), u = m(u, h, c, f, r[l + 8], 6, 1873313359), f = m(f, u, h, c, r[l + 15], 10, -30611744), c = m(c, f, u, h, r[l + 6], 15, -1560198380), h = m(h, c, f, u, r[l + 13], 21, 1309151649), u = m(u, h, c, f, r[l + 4], 6, -145523070), f = m(f, u, h, c, r[l + 11], 10, -1120210379), c = m(c, f, u, h, r[l + 2], 15, 718787259), h = m(h, c, f, u, r[l + 9], 21, -343485551), u = u + y >>> 0, h = h + v >>> 0, c = c + w >>> 0, f = f + b >>> 0
                }
                return i.endian([u, h, c, f])
            }
            var i, o, s, a;
            i = r(35), o = r(17).utf8, s = r(36), a = r(17).bin, n._ff = function (t, e, r, n, i, o, s) {
                return ((s = t + (e & r | ~e & n) + (i >>> 0) + s) << o | s >>> 32 - o) + e
            }, n._gg = function (t, e, r, n, i, o, s) {
                return ((s = t + (e & n | r & ~n) + (i >>> 0) + s) << o | s >>> 32 - o) + e
            }, n._hh = function (t, e, r, n, i, o, s) {
                return ((s = t + (e ^ r ^ n) + (i >>> 0) + s) << o | s >>> 32 - o) + e
            }, n._ii = function (t, e, r, n, i, o, s) {
                return ((s = t + (r ^ (e | ~n)) + (i >>> 0) + s) << o | s >>> 32 - o) + e
            }, n._blocksize = 16, n._digestsize = 16, t.exports = function (t, e) {
                if (null == t) throw new Error("Illegal argument " + t);
                return t = i.wordsToBytes(n(t, e)), e && e.asBytes ? t : e && e.asString ? a.bytesToString(t) : i.bytesToHex(t)
            }
        },
        function (t, e) {
            "function" == typeof Object.create ? t.exports = function (t, e) {
                e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : t.exports = function (t, e) {
                var r;
                e && (t.super_ = e, (r = function () { }).prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t)
            }
        },
        function (t, e) {
            function r(e) {
                return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = r = function (t) {
                    return typeof t
                } : t.exports = r = function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, r(e)
            }
            t.exports = r
        },
        function (t, e, r) {
            const n = r(19);
            t.exports = {
                stringToByteArrayInUtf8: function (t) {
                    return function (t) {
                        if ("undefined" != typeof window && window.TextEncoder) return new window.TextEncoder("utf-8").encode(t);
                        return (new (0, r(21).TextEncoder)()).encode(t)
                    }(t)
                },
                utf8ByteArrayToString: function (t) {
                    if (-1 !== t) return function (t) {
                        if ("undefined" != typeof window && window.TextDecoder) return new window.TextDecoder("utf-8").decode(t);
                        return (new (0, r(21).TextDecoder)()).decode(t)
                    }(t = Array.isArray(t) ? new Uint8Array(t) : t)
                },
                byteArrayToBase64: function (t) {
                    return n.fromByteArray(t)
                },
                base64ToByteArray: function (t) {
                    return n.toByteArray(t)
                },
                byteArrayToHex: function (t) {
                    for (let e = 0; e < t.length; e++) t[e] = (t[e] >>> 0) % 256;
                    const e = [];
                    let r = 0;
                    for (let n = 0; n < 2 * t.length; n += 2) e[n >>> 3] |= parseInt(t[r], 10) << 24 - n % 8 * 4, r++;
                    const n = [];
                    for (let r = 0; r < t.length; r++) {
                        var i = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                        n.push((i >>> 4).toString(16)), n.push((15 & i).toString(16))
                    }
                    return n.join("")
                },
                hexToByteArray: function (t) {
                    if ("string" != typeof t) throw new TypeError("Expected input to be a string");
                    if (t.length % 2 != 0) throw new RangeError("Expected string to be an even number of characters");
                    const e = new Uint8Array(t.length / 2);
                    for (let r = 0; r < t.length; r += 2) e[r / 2] = parseInt(t.substring(r, r + 2), 16);
                    return e
                },
                byteArrayToByteArray: function (t) {
                    return t
                }
            }
        },
        function (t, e, r) {
            const n = r(3), i = r(14).Reporter, o = r(12).Buffer;

            function s(t, e) {
                i.call(this, e), o.isBuffer(t) ? (this.base = t, this.offset = 0, this.length = t.length) : this.error("Input not Buffer")
            }

            function a(t, e) {
                if (Array.isArray(t)) this.length = 0, this.value = t.map((function (t) {
                    return a.isEncoderBuffer(t) || (t = new a(t, e)), this.length += t.length, t
                }), this);
                else if ("number" == typeof t) {
                    if (!(0 <= t && t <= 255)) return e.error("non-byte EncoderBuffer value");
                    this.value = t, this.length = 1
                } else if ("string" == typeof t) this.value = t, this.length = o.byteLength(t);
                else {
                    if (!o.isBuffer(t)) return e.error("Unsupported type: " + typeof t);
                    this.value = t, this.length = t.length
                }
            }
            n(s, i), (e.DecoderBuffer = s).isDecoderBuffer = function (t) {
                return t instanceof s || "object" == typeof t && o.isBuffer(t.base) && "DecoderBuffer" === t.constructor.name && "number" == typeof t.offset && "number" == typeof t.length && "function" == typeof t.save && "function" == typeof t.restore && "function" == typeof t.isEmpty && "function" == typeof t.readUInt8 && "function" == typeof t.skip && "function" == typeof t.raw
            }, s.prototype.save = function () {
                return {
                    offset: this.offset,
                    reporter: i.prototype.save.call(this)
                }
            }, s.prototype.restore = function (t) {
                const e = new s(this.base);
                return e.offset = t.offset, e.length = this.offset, this.offset = t.offset, i.prototype.restore.call(this, t.reporter), e
            }, s.prototype.isEmpty = function () {
                return this.offset === this.length
            }, s.prototype.readUInt8 = function (t) {
                return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(t || "DecoderBuffer overrun")
            }, s.prototype.skip = function (t, e) {
                if (!(this.offset + t <= this.length)) return this.error(e || "DecoderBuffer overrun");
                const r = new s(this.base);
                return r._reporterState = this._reporterState, r.offset = this.offset, r.length = this.offset + t, this.offset += t, r
            }, s.prototype.raw = function (t) {
                return this.base.slice((t || this).offset, this.length)
            }, (e.EncoderBuffer = a).isEncoderBuffer = function (t) {
                return t instanceof a || "object" == typeof t && "EncoderBuffer" === t.constructor.name && "number" == typeof t.length && "function" == typeof t.join
            }, a.prototype.join = function (t, e) {
                return t = t || o.alloc(this.length), e = e || 0, 0 === this.length || (Array.isArray(this.value) ? this.value.forEach((function (r) {
                    r.join(t, e), e += r.length
                })) : ("number" == typeof this.value ? t[e] = this.value : "string" == typeof this.value ? t.write(this.value, e) : o.isBuffer(this.value) && this.value.copy(t, e), e += this.length)), t
            }
        },
        function (t, e, r) {
            var n = r(18),
                i = r(11),
                o = r(51),
                s = r(53);
            r = r(5);
            t.exports = {
                SM2: n,
                SM3: i,
                SM4: o,
                CSR: s,
                utils: r
            }
        },
        function (t, e, r) {
            (function () {
                function e(t, e, r) {
                    null != t && ("number" == typeof t ? this.fromNumber(t, e, r) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
                }

                function r() {
                    return new e(null)
                }
                var n = (n = "undefined" != typeof navigator) && "Microsoft Internet Explorer" == navigator.appName ? (e.prototype.am = function (t, e, r, n, i, o) {
                    for (var s = 32767 & e, a = e >> 15; 0 <= --o;) {
                        var u = 32767 & this[t],
                            h = this[t++] >> 15,
                            c = a * u + h * s;
                        i = ((u = s * u + ((32767 & c) << 15) + r[n] + (1073741823 & i)) >>> 30) + (c >>> 15) + a * h + (i >>> 30), r[n++] = 1073741823 & u
                    }
                    return i
                }, 30) : n && "Netscape" != navigator.appName ? (e.prototype.am = function (t, e, r, n, i, o) {
                    for (; 0 <= --o;) {
                        var s = e * this[t++] + r[n] + i;
                        i = Math.floor(s / 67108864), r[n++] = 67108863 & s
                    }
                    return i
                }, 26) : (e.prototype.am = function (t, e, r, n, i, o) {
                    for (var s = 16383 & e, a = e >> 14; 0 <= --o;) {
                        var u = 16383 & this[t],
                            h = this[t++] >> 14,
                            c = a * u + h * s;
                        i = ((u = s * u + ((16383 & c) << 14) + r[n] + i) >> 28) + (c >> 14) + a * h, r[n++] = 268435455 & u
                    }
                    return i
                }, 28);
                e.prototype.DB = n, e.prototype.DM = (1 << n) - 1, e.prototype.DV = 1 << n, e.prototype.FV = Math.pow(2, 52), e.prototype.F1 = 52 - n, e.prototype.F2 = 2 * n - 52;
                for (var i = new Array(), o = "0".charCodeAt(0), s = 0; s <= 9; ++s) i[o++] = s;
                for (o = "a".charCodeAt(0), s = 10; s < 36; ++s) i[o++] = s;
                for (o = "A".charCodeAt(0), s = 10; s < 36; ++s) i[o++] = s;

                function a(t) {
                    return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)
                }

                function u(t, e) {
                    return null == (e = i[t.charCodeAt(e)]) ? -1 : e
                }

                function h(t) {
                    var e = r();
                    return e.fromInt(t), e
                }

                function c(t) {
                    var e, r = 1;
                    return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, r += 1), r
                }

                function f(t) {
                    this.m = t
                }

                function l(t) {
                    this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
                }

                function p(t, e) {
                    return t & e
                }

                function d(t, e) {
                    return t | e
                }

                function g(t, e) {
                    return t ^ e
                }

                function m(t, e) {
                    return t & ~e
                }

                function y() { }

                function v(t) {
                    return t
                }

                function w(t) {
                    this.r2 = r(), this.q3 = r(), e.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t), this.m = t
                }
                f.prototype.convert = function (t) {
                    return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t
                }, f.prototype.revert = function (t) {
                    return t
                }, f.prototype.reduce = function (t) {
                    t.divRemTo(this.m, null, t)
                }, f.prototype.mulTo = function (t, e, r) {
                    t.multiplyTo(e, r), this.reduce(r)
                }, f.prototype.sqrTo = function (t, e) {
                    t.squareTo(e), this.reduce(e)
                }, l.prototype.convert = function (t) {
                    var n = r();
                    return t.abs().dlShiftTo(this.m.t, n), n.divRemTo(this.m, null, n), t.s < 0 && 0 < n.compareTo(e.ZERO) && this.m.subTo(n, n), n
                }, l.prototype.revert = function (t) {
                    var e = r();
                    return t.copyTo(e), this.reduce(e), e
                }, l.prototype.reduce = function (t) {
                    for (; t.t <= this.mt2;) t[t.t++] = 0;
                    for (var e = 0; e < this.m.t; ++e) {
                        var r = 32767 & t[e],
                            n = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                        for (t[r = e + this.m.t] += this.m.am(0, n, t, e, 0, this.m.t); t[r] >= t.DV;) t[r] -= t.DV, t[++r]++
                    }
                    t.clamp(), t.drShiftTo(this.m.t, t), 0 <= t.compareTo(this.m) && t.subTo(this.m, t)
                }, l.prototype.mulTo = function (t, e, r) {
                    t.multiplyTo(e, r), this.reduce(r)
                }, l.prototype.sqrTo = function (t, e) {
                    t.squareTo(e), this.reduce(e)
                }, e.prototype.copyTo = function (t) {
                    for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
                    t.t = this.t, t.s = this.s
                }, e.prototype.fromInt = function (t) {
                    this.t = 1, this.s = t < 0 ? -1 : 0, 0 < t ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
                }, e.prototype.fromString = function (t, r) {
                    var n;
                    if (16 == r) n = 4;
                    else if (8 == r) n = 3;
                    else if (256 == r) n = 8;
                    else if (2 == r) n = 1;
                    else if (32 == r) n = 5;
                    else {
                        if (4 != r) return void this.fromRadix(t, r);
                        n = 2
                    }
                    this.t = 0, this.s = 0;
                    for (var i = t.length, o = !1, s = 0; 0 <= --i;) {
                        var a = 8 == n ? 255 & t[i] : u(t, i);
                        a < 0 ? "-" == t.charAt(i) && (o = !0) : (o = !1, 0 == s ? this[this.t++] = a : s + n > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s, this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s, (s += n) >= this.DB && (s -= this.DB))
                    }
                    8 == n && 0 != (128 & t[0]) && (this.s = -1, 0 < s && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), this.clamp(), o && e.ZERO.subTo(this, this)
                }, e.prototype.clamp = function () {
                    for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t;)--this.t
                }, e.prototype.dlShiftTo = function (t, e) {
                    for (var r = this.t - 1; 0 <= r; --r) e[r + t] = this[r];
                    for (r = t - 1; 0 <= r; --r) e[r] = 0;
                    e.t = this.t + t, e.s = this.s
                }, e.prototype.drShiftTo = function (t, e) {
                    for (var r = t; r < this.t; ++r) e[r - t] = this[r];
                    e.t = Math.max(this.t - t, 0), e.s = this.s
                }, e.prototype.lShiftTo = function (t, e) {
                    for (var r = t % this.DB, n = this.DB - r, i = (1 << n) - 1, o = Math.floor(t / this.DB), s = this.s << r & this.DM, a = this.t - 1; 0 <= a; --a) e[a + o + 1] = this[a] >> n | s, s = (this[a] & i) << r;
                    for (a = o - 1; 0 <= a; --a) e[a] = 0;
                    e[o] = s, e.t = this.t + o + 1, e.s = this.s, e.clamp()
                }, e.prototype.rShiftTo = function (t, e) {
                    e.s = this.s;
                    var r = Math.floor(t / this.DB);
                    if (r >= this.t) e.t = 0;
                    else {
                        var n = t % this.DB,
                            i = this.DB - n,
                            o = (1 << n) - 1;
                        e[0] = this[r] >> n;
                        for (var s = r + 1; s < this.t; ++s) e[s - r - 1] |= (this[s] & o) << i, e[s - r] = this[s] >> n;
                        0 < n && (e[this.t - r - 1] |= (this.s & o) << i), e.t = this.t - r, e.clamp()
                    }
                }, e.prototype.subTo = function (t, e) {
                    for (var r = 0, n = 0, i = Math.min(t.t, this.t); r < i;) n += this[r] - t[r], e[r++] = n & this.DM, n >>= this.DB;
                    if (t.t < this.t) {
                        for (n -= t.s; r < this.t;) n += this[r], e[r++] = n & this.DM, n >>= this.DB;
                        n += this.s
                    } else {
                        for (n += this.s; r < t.t;) n -= t[r], e[r++] = n & this.DM, n >>= this.DB;
                        n -= t.s
                    }
                    e.s = n < 0 ? -1 : 0, n < -1 ? e[r++] = this.DV + n : 0 < n && (e[r++] = n), e.t = r, e.clamp()
                }, e.prototype.multiplyTo = function (t, r) {
                    var n = this.abs(),
                        i = t.abs(),
                        o = n.t;
                    for (r.t = o + i.t; 0 <= --o;) r[o] = 0;
                    for (o = 0; o < i.t; ++o) r[o + n.t] = n.am(0, i[o], r, o, 0, n.t);
                    r.s = 0, r.clamp(), this.s != t.s && e.ZERO.subTo(r, r)
                }, e.prototype.squareTo = function (t) {
                    for (var e = this.abs(), r = t.t = 2 * e.t; 0 <= --r;) t[r] = 0;
                    for (r = 0; r < e.t - 1; ++r) {
                        var n = e.am(r, e[r], t, 2 * r, 0, 1);
                        (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, n, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, t[r + e.t + 1] = 1)
                    }
                    0 < t.t && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp()
                }, e.prototype.divRemTo = function (t, n, i) {
                    var o = t.abs();
                    if (!(o.t <= 0)) {
                        if ((l = this.abs()).t < o.t) return null != n && n.fromInt(0), void (null != i && this.copyTo(i));
                        null == i && (i = r());
                        var s = r(),
                            a = this.s,
                            u = t.s;
                        0 < (t = this.DB - c(o[o.t - 1])) ? (o.lShiftTo(t, s), l.lShiftTo(t, i)) : (o.copyTo(s), l.copyTo(i));
                        var h = s.t,
                            f = s[h - 1];
                        if (0 != f) {
                            var l = f * (1 << this.F1) + (1 < h ? s[h - 2] >> this.F2 : 0),
                                p = this.FV / l,
                                d = (1 << this.F1) / l,
                                g = 1 << this.F2,
                                m = i.t,
                                y = m - h,
                                v = null == n ? r() : n;
                            for (s.dlShiftTo(y, v), 0 <= i.compareTo(v) && (i[i.t++] = 1, i.subTo(v, i)), e.ONE.dlShiftTo(h, v), v.subTo(s, s); s.t < h;) s[s.t++] = 0;
                            for (; 0 <= --y;) {
                                var w = i[--m] == f ? this.DM : Math.floor(i[m] * p + (i[m - 1] + g) * d);
                                if ((i[m] += s.am(0, w, i, y, 0, h)) < w)
                                    for (s.dlShiftTo(y, v), i.subTo(v, i); i[m] < --w;) i.subTo(v, i)
                            }
                            null != n && (i.drShiftTo(h, n), a != u && e.ZERO.subTo(n, n)), i.t = h, i.clamp(), 0 < t && i.rShiftTo(t, i), a < 0 && e.ZERO.subTo(i, i)
                        }
                    }
                }, e.prototype.invDigit = function () {
                    if (this.t < 1) return 0;
                    var t = this[0];
                    if (0 == (1 & t)) return 0;
                    var e = 3 & t;
                    return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e
                }, e.prototype.isEven = function () {
                    return 0 == (0 < this.t ? 1 & this[0] : this.s)
                }, e.prototype.exp = function (t, n) {
                    if (4294967295 < t || t < 1) return e.ONE;
                    var i, o = r(),
                        s = r(),
                        a = n.convert(this),
                        u = c(t) - 1;
                    for (a.copyTo(o); 0 <= --u;) n.sqrTo(o, s), 0 < (t & 1 << u) ? n.mulTo(s, a, o) : (i = o, o = s, s = i);
                    return n.revert(o)
                }, e.prototype.toString = function (t) {
                    if (this.s < 0) return "-" + this.negate().toString(t);
                    var e;
                    if (16 == t) e = 4;
                    else if (8 == t) e = 3;
                    else if (2 == t) e = 1;
                    else if (32 == t) e = 5;
                    else {
                        if (4 != t) return this.toRadix(t);
                        e = 2
                    }
                    var r, n = (1 << e) - 1,
                        i = !1,
                        o = "",
                        s = this.t,
                        u = this.DB - s * this.DB % e;
                    if (0 < s--)
                        for (u < this.DB && 0 < (r = this[s] >> u) && (i = !0, o = a(r)); 0 <= s;) u < e ? (r = (this[s] & (1 << u) - 1) << e - u, r |= this[--s] >> (u += this.DB - e)) : (r = this[s] >> (u -= e) & n, u <= 0 && (u += this.DB, --s)), (i = 0 < r || i) && (o += a(r));
                    return i ? o : "0"
                }, e.prototype.negate = function () {
                    var t = r();
                    return e.ZERO.subTo(this, t), t
                }, e.prototype.abs = function () {
                    return this.s < 0 ? this.negate() : this
                }, e.prototype.compareTo = function (t) {
                    var e = this.s - t.s;
                    if (0 != e) return e;
                    var r = this.t;
                    if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
                    for (; 0 <= --r;)
                        if (0 != (e = this[r] - t[r])) return e;
                    return 0
                }, e.prototype.bitLength = function () {
                    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + c(this[this.t - 1] ^ this.s & this.DM)
                }, e.prototype.mod = function (t) {
                    var n = r();
                    return this.abs().divRemTo(t, null, n), this.s < 0 && 0 < n.compareTo(e.ZERO) && t.subTo(n, n), n
                }, e.prototype.modPowInt = function (t, e) {
                    return e = new (t < 256 || e.isEven() ? f : l)(e), this.exp(t, e)
                }, e.ZERO = h(0), e.ONE = h(1), y.prototype.convert = v, y.prototype.revert = v, y.prototype.mulTo = function (t, e, r) {
                    t.multiplyTo(e, r)
                }, y.prototype.sqrTo = function (t, e) {
                    t.squareTo(e)
                }, w.prototype.convert = function (t) {
                    if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
                    if (t.compareTo(this.m) < 0) return t;
                    var e = r();
                    return t.copyTo(e), this.reduce(e), e
                }, w.prototype.revert = function (t) {
                    return t
                }, w.prototype.reduce = function (t) {
                    for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
                    for (t.subTo(this.r2, t); 0 <= t.compareTo(this.m);) t.subTo(this.m, t)
                }, w.prototype.mulTo = function (t, e, r) {
                    t.multiplyTo(e, r), this.reduce(r)
                }, w.prototype.sqrTo = function (t, e) {
                    t.squareTo(e), this.reduce(e)
                };
                var b, _ = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
                    M = (1 << 26) / _[_.length - 1];

                function S() {
                    var t;
                    t = (new Date()).getTime(), E[T++] ^= 255 & t, E[T++] ^= t >> 8 & 255, E[T++] ^= t >> 16 & 255, E[T++] ^= t >> 24 & 255, R <= T && (T -= R)
                }
                if (e.prototype.chunkSize = function (t) {
                    return Math.floor(Math.LN2 * this.DB / Math.log(t))
                }, e.prototype.toRadix = function (t) {
                    if (null == t && (t = 10), 0 == this.signum() || t < 2 || 36 < t) return "0";
                    var e = this.chunkSize(t),
                        n = Math.pow(t, e),
                        i = h(n),
                        o = r(),
                        s = r(),
                        a = "";
                    for (this.divRemTo(i, o, s); 0 < o.signum();) a = (n + s.intValue()).toString(t).substr(1) + a, o.divRemTo(i, o, s);
                    return s.intValue().toString(t) + a
                }, e.prototype.fromRadix = function (t, r) {
                    this.fromInt(0);
                    for (var n = this.chunkSize(r = null == r ? 10 : r), i = Math.pow(r, n), o = !1, s = 0, a = 0, h = 0; h < t.length; ++h) {
                        var c = u(t, h);
                        c < 0 ? "-" == t.charAt(h) && 0 == this.signum() && (o = !0) : (a = r * a + c, ++s >= n && (this.dMultiply(i), this.dAddOffset(a, 0), a = s = 0))
                    }
                    0 < s && (this.dMultiply(Math.pow(r, s)), this.dAddOffset(a, 0)), o && e.ZERO.subTo(this, this)
                }, e.prototype.fromNumber = function (t, r, n) {
                    if ("number" == typeof r)
                        if (t < 2) this.fromInt(1);
                        else
                            for (this.fromNumber(t, n), this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), d, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(r);) this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(e.ONE.shiftLeft(t - 1), this);
                    else {
                        var i = new Array();
                        n = 7 & t;
                        i.length = 1 + (t >> 3), r.nextBytes(i), 0 < n ? i[0] &= (1 << n) - 1 : i[0] = 0, this.fromString(i, 256)
                    }
                }, e.prototype.bitwiseTo = function (t, e, r) {
                    for (var n, i = Math.min(t.t, this.t), o = 0; o < i; ++o) r[o] = e(this[o], t[o]);
                    if (t.t < this.t) {
                        for (n = t.s & this.DM, o = i; o < this.t; ++o) r[o] = e(this[o], n);
                        r.t = this.t
                    } else {
                        for (n = this.s & this.DM, o = i; o < t.t; ++o) r[o] = e(n, t[o]);
                        r.t = t.t
                    }
                    r.s = e(this.s, t.s), r.clamp()
                }, e.prototype.changeBit = function (t, r) {
                    return t = e.ONE.shiftLeft(t), this.bitwiseTo(t, r, t), t
                }, e.prototype.addTo = function (t, e) {
                    for (var r = 0, n = 0, i = Math.min(t.t, this.t); r < i;) n += this[r] + t[r], e[r++] = n & this.DM, n >>= this.DB;
                    if (t.t < this.t) {
                        for (n += t.s; r < this.t;) n += this[r], e[r++] = n & this.DM, n >>= this.DB;
                        n += this.s
                    } else {
                        for (n += this.s; r < t.t;) n += t[r], e[r++] = n & this.DM, n >>= this.DB;
                        n += t.s
                    }
                    e.s = n < 0 ? -1 : 0, 0 < n ? e[r++] = n : n < -1 && (e[r++] = this.DV + n), e.t = r, e.clamp()
                }, e.prototype.dMultiply = function (t) {
                    this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp()
                }, e.prototype.dAddOffset = function (t, e) {
                    if (0 != t) {
                        for (; this.t <= e;) this[this.t++] = 0;
                        for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), ++this[e]
                    }
                }, e.prototype.multiplyLowerTo = function (t, e, r) {
                    var n, i = Math.min(this.t + t.t, e);
                    for (r.s = 0, r.t = i; 0 < i;) r[--i] = 0;
                    for (n = r.t - this.t; i < n; ++i) r[i + this.t] = this.am(0, t[i], r, i, 0, this.t);
                    for (n = Math.min(t.t, e); i < n; ++i) this.am(0, t[i], r, i, 0, e - i);
                    r.clamp()
                }, e.prototype.multiplyUpperTo = function (t, e, r) {
                    var n = r.t = this.t + t.t - --e;
                    for (r.s = 0; 0 <= --n;) r[n] = 0;
                    for (n = Math.max(e - this.t, 0); n < t.t; ++n) r[this.t + n - e] = this.am(e - n, t[n], r, 0, 0, this.t + n - e);
                    r.clamp(), r.drShiftTo(1, r)
                }, e.prototype.modInt = function (t) {
                    if (t <= 0) return 0;
                    var e = this.DV % t,
                        r = this.s < 0 ? t - 1 : 0;
                    if (0 < this.t)
                        if (0 == e) r = this[0] % t;
                        else
                            for (var n = this.t - 1; 0 <= n; --n) r = (e * r + this[n]) % t;
                    return r
                }, e.prototype.millerRabin = function (t) {
                    var n = this.subtract(e.ONE),
                        i = n.getLowestSetBit();
                    if (i <= 0) return !1;
                    var o = n.shiftRight(i);
                    _.length < (t = t + 1 >> 1) && (t = _.length);
                    for (var s = r(), a = 0; a < t; ++a) {
                        s.fromInt(_[Math.floor(Math.random() * _.length)]);
                        var u = s.modPow(o, this);
                        if (0 != u.compareTo(e.ONE) && 0 != u.compareTo(n)) {
                            for (var h = 1; h++ < i && 0 != u.compareTo(n);)
                                if (0 == (u = u.modPowInt(2, this)).compareTo(e.ONE)) return !1;
                            if (0 != u.compareTo(n)) return !1
                        }
                    }
                    return !0
                }, e.prototype.clone = function () {
                    var t = r();
                    return this.copyTo(t), t
                }, e.prototype.intValue = function () {
                    if (this.s < 0) {
                        if (1 == this.t) return this[0] - this.DV;
                        if (0 == this.t) return -1
                    } else {
                        if (1 == this.t) return this[0];
                        if (0 == this.t) return 0
                    }
                    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
                }, e.prototype.byteValue = function () {
                    return 0 == this.t ? this.s : this[0] << 24 >> 24
                }, e.prototype.shortValue = function () {
                    return 0 == this.t ? this.s : this[0] << 16 >> 16
                }, e.prototype.signum = function () {
                    return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
                }, e.prototype.toByteArray = function () {
                    var t = this.t,
                        e = new Array();
                    e[0] = this.s;
                    var r, n = this.DB - t * this.DB % 8,
                        i = 0;
                    if (0 < t--)
                        for (n < this.DB && (r = this[t] >> n) != (this.s & this.DM) >> n && (e[i++] = r | this.s << this.DB - n); 0 <= t;) n < 8 ? (r = (this[t] & (1 << n) - 1) << 8 - n, r |= this[--t] >> (n += this.DB - 8)) : (r = this[t] >> (n -= 8) & 255, n <= 0 && (n += this.DB, --t)), 0 != (128 & r) && (r |= -256), 0 == i && (128 & this.s) != (128 & r) && ++i, (0 < i || r != this.s) && (e[i++] = r);
                    return e
                }, e.prototype.equals = function (t) {
                    return 0 == this.compareTo(t)
                }, e.prototype.min = function (t) {
                    return this.compareTo(t) < 0 ? this : t
                }, e.prototype.max = function (t) {
                    return 0 < this.compareTo(t) ? this : t
                }, e.prototype.and = function (t) {
                    var e = r();
                    return this.bitwiseTo(t, p, e), e
                }, e.prototype.or = function (t) {
                    var e = r();
                    return this.bitwiseTo(t, d, e), e
                }, e.prototype.xor = function (t) {
                    var e = r();
                    return this.bitwiseTo(t, g, e), e
                }, e.prototype.andNot = function (t) {
                    var e = r();
                    return this.bitwiseTo(t, m, e), e
                }, e.prototype.not = function () {
                    for (var t = r(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
                    return t.t = this.t, t.s = ~this.s, t
                }, e.prototype.shiftLeft = function (t) {
                    var e = r();
                    return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e
                }, e.prototype.shiftRight = function (t) {
                    var e = r();
                    return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e
                }, e.prototype.getLowestSetBit = function () {
                    for (var t = 0; t < this.t; ++t)
                        if (0 != this[t]) return t * this.DB + function (t) {
                            if (0 == t) return -1;
                            var e = 0;
                            return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, e
                        }(this[t]);
                    return this.s < 0 ? this.t * this.DB : -1
                }, e.prototype.bitCount = function () {
                    for (var t = 0, e = this.s & this.DM, r = 0; r < this.t; ++r) t += function (t) {
                        for (var e = 0; 0 != t;) t &= t - 1, ++e;
                        return e
                    }(this[r] ^ e);
                    return t
                }, e.prototype.testBit = function (t) {
                    var e = Math.floor(t / this.DB);
                    return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
                }, e.prototype.setBit = function (t) {
                    return this.changeBit(t, d)
                }, e.prototype.clearBit = function (t) {
                    return this.changeBit(t, m)
                }, e.prototype.flipBit = function (t) {
                    return this.changeBit(t, g)
                }, e.prototype.add = function (t) {
                    var e = r();
                    return this.addTo(t, e), e
                }, e.prototype.subtract = function (t) {
                    var e = r();
                    return this.subTo(t, e), e
                }, e.prototype.multiply = function (t) {
                    var e = r();
                    return this.multiplyTo(t, e), e
                }, e.prototype.divide = function (t) {
                    var e = r();
                    return this.divRemTo(t, e, null), e
                }, e.prototype.remainder = function (t) {
                    var e = r();
                    return this.divRemTo(t, null, e), e
                }, e.prototype.divideAndRemainder = function (t) {
                    var e = r(),
                        n = r();
                    return this.divRemTo(t, e, n), new Array(e, n)
                }, e.prototype.modPow = function (t, e) {
                    var n = t.bitLength(),
                        i = h(1);
                    if (n <= 0) return i;
                    var o = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6,
                        s = new (n < 8 ? f : e.isEven() ? w : l)(e),
                        a = new Array(),
                        u = 3,
                        p = o - 1,
                        d = (1 << o) - 1;
                    if (a[1] = s.convert(this), 1 < o) {
                        var g = r();
                        for (s.sqrTo(a[1], g); u <= d;) a[u] = r(), s.mulTo(g, a[u - 2], a[u]), u += 2
                    }
                    var m, y, v = t.t - 1,
                        b = !0,
                        _ = r();
                    for (n = c(t[v]) - 1; 0 <= v;) {
                        for (p <= n ? m = t[v] >> n - p & d : (m = (t[v] & (1 << n + 1) - 1) << p - n, 0 < v && (m |= t[v - 1] >> this.DB + n - p)), u = o; 0 == (1 & m);) m >>= 1, --u;
                        if ((n -= u) < 0 && (n += this.DB, --v), b) a[m].copyTo(i), b = !1;
                        else {
                            for (; 1 < u;) s.sqrTo(i, _), s.sqrTo(_, i), u -= 2;
                            0 < u ? s.sqrTo(i, _) : (y = i, i = _, _ = y), s.mulTo(_, a[m], i)
                        }
                        for (; 0 <= v && 0 == (t[v] & 1 << n);) s.sqrTo(i, _), y = i, i = _, _ = y, --n < 0 && (n = this.DB - 1, --v)
                    }
                    return s.revert(i)
                }, e.prototype.modInverse = function (t) {
                    var r = t.isEven();
                    if (this.isEven() && r || 0 == t.signum()) return e.ZERO;
                    for (var n = t.clone(), i = this.clone(), o = h(1), s = h(0), a = h(0), u = h(1); 0 != n.signum();) {
                        for (; n.isEven();) n.rShiftTo(1, n), r ? (o.isEven() && s.isEven() || (o.addTo(this, o), s.subTo(t, s)), o.rShiftTo(1, o)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
                        for (; i.isEven();) i.rShiftTo(1, i), r ? (a.isEven() && u.isEven() || (a.addTo(this, a), u.subTo(t, u)), a.rShiftTo(1, a)) : u.isEven() || u.subTo(t, u), u.rShiftTo(1, u);
                        0 <= n.compareTo(i) ? (n.subTo(i, n), r && o.subTo(a, o), s.subTo(u, s)) : (i.subTo(n, i), r && a.subTo(o, a), u.subTo(s, u))
                    }
                    return 0 != i.compareTo(e.ONE) ? e.ZERO : 0 <= u.compareTo(t) ? u.subtract(t) : u.signum() < 0 ? (u.addTo(t, u), u.signum() < 0 ? u.add(t) : u) : u
                }, e.prototype.pow = function (t) {
                    return this.exp(t, new y())
                }, e.prototype.gcd = function (t) {
                    var e = this.s < 0 ? this.negate() : this.clone(),
                        r = t.s < 0 ? t.negate() : t.clone();
                    e.compareTo(r) < 0 && (i = e, e = r, r = i);
                    var n = e.getLowestSetBit(),
                        i = r.getLowestSetBit();
                    if (i < 0) return e;
                    for (0 < (i = n < i ? n : i) && (e.rShiftTo(i, e), r.rShiftTo(i, r)); 0 < e.signum();) 0 < (n = e.getLowestSetBit()) && e.rShiftTo(n, e), 0 < (n = r.getLowestSetBit()) && r.rShiftTo(n, r), 0 <= e.compareTo(r) ? (e.subTo(r, e), e.rShiftTo(1, e)) : (r.subTo(e, r), r.rShiftTo(1, r));
                    return 0 < i && r.lShiftTo(i, r), r
                }, e.prototype.isProbablePrime = function (t) {
                    var e, r = this.abs();
                    if (1 == r.t && r[0] <= _[_.length - 1]) {
                        for (e = 0; e < _.length; ++e)
                            if (r[0] == _[e]) return !0;
                        return !1
                    }
                    if (r.isEven()) return !1;
                    for (e = 1; e < _.length;) {
                        for (var n = _[e], i = e + 1; i < _.length && n < M;) n *= _[i++];
                        for (n = r.modInt(n); e < i;)
                            if (n % _[e++] == 0) return !1
                    }
                    return r.millerRabin(t)
                }, e.prototype.square = function () {
                    var t = r();
                    return this.squareTo(t), t
                }, e.prototype.Barrett = w, null == E) {
                    var E = new Array(),
                        T = 0;
                    if ("undefined" != typeof window && window.crypto)
                        if (window.crypto.getRandomValues) {
                            var A = new Uint8Array(32);
                            for (window.crypto.getRandomValues(A), x = 0; x < 32; ++x) E[T++] = A[x]
                        } else if ("Netscape" == navigator.appName && navigator.appVersion < "5")
                            for (var k = window.crypto.random(32), x = 0; x < k.length; ++x) E[T++] = 255 & k.charCodeAt(x);
                    for (; T < R;) x = Math.floor(65536 * Math.random()), E[T++] = x >>> 8, E[T++] = 255 & x;
                    T = 0, S()
                }

                function B() {
                    if (null == b) {
                        for (S(), (b = new C()).init(E), T = 0; T < E.length; ++T) E[T] = 0;
                        T = 0
                    }
                    return b.next()
                }

                function P() { }

                function C() {
                    this.i = 0, this.j = 0, this.S = new Array()
                }
                P.prototype.nextBytes = function (t) {
                    for (var e = 0; e < t.length; ++e) t[e] = B()
                }, C.prototype.init = function (t) {
                    for (var e, r, n = 0; n < 256; ++n) this.S[n] = n;
                    for (n = e = 0; n < 256; ++n) e = e + this.S[n] + t[n % t.length] & 255, r = this.S[n], this.S[n] = this.S[e], this.S[e] = r;
                    this.i = 0, this.j = 0
                }, C.prototype.next = function () {
                    var t;
                    return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255]
                };
                var R = 256;
                t.exports = {
                    default: e,
                    BigInteger: e,
                    SecureRandom: P
                }
            }).call(this)
        },
        function (t, e, r) {
            const n = r(8).BigInteger;
            t.exports = class {
                constructor() {
                    this.p = new n("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF", 16), this.a = new n("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC", 16), this.b = new n("28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93", 16), this.Gx = new n("32C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7", 16), this.Gy = new n("BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0", 16), this.n = new n("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123", 16), this.h = new n("1", 16)
                }
            }
        },
        function (t, e, r) {
            (function (t) {
                var n = r(19),
                    i = r(38),
                    o = r(39);

                function s() {
                    return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }

                function a(t, e) {
                    if (s() < e) throw new RangeError("Invalid typed array length");
                    return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (t = null === t ? new u(e) : t).length = e, t
                }

                function u(t, e, r) {
                    if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, e, r);
                    if ("number" != typeof t) return h(this, t, e, r);
                    if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                    return f(this, t)
                }

                function h(t, e, r, n) {
                    if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                    return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, r, n) {
                        if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");
                        if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                        return e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n), u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = l(t, e), t
                    }(t, e, r, n) : "string" == typeof e ? function (t, e, r) {
                        if ("string" == typeof r && "" !== r || (r = "utf8"), !u.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                        var n = 0 | d(e, r);
                        return (r = (t = a(t, n)).write(e, r)) !== n && (t = t.slice(0, r)), t
                    }(t, e, r) : function (t, e) {
                        if (u.isBuffer(e)) {
                            var r = 0 | p(e.length);
                            return 0 === (t = a(t, r)).length || e.copy(t, 0, 0, r), t
                        }
                        if (e) {
                            if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || function (t) {
                                return t != t
                            }(e.length) ? a(t, 0) : l(t, e);
                            if ("Buffer" === e.type && o(e.data)) return l(t, e.data)
                        }
                        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }(t, e)
                }

                function c(t) {
                    if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                    if (t < 0) throw new RangeError('"size" argument must not be negative')
                }

                function f(t, e) {
                    if (c(e), t = a(t, e < 0 ? 0 : 0 | p(e)), !u.TYPED_ARRAY_SUPPORT)
                        for (var r = 0; r < e; ++r) t[r] = 0;
                    return t
                }

                function l(t, e) {
                    var r = e.length < 0 ? 0 : 0 | p(e.length);
                    t = a(t, r);
                    for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
                    return t
                }

                function p(t) {
                    if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
                    return 0 | t
                }

                function d(t, e) {
                    if (u.isBuffer(t)) return t.length;
                    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                    var r = (t = "string" != typeof t ? "" + t : t).length;
                    if (0 === r) return 0;
                    for (var n = !1; ;) switch (e) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return r;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return C(t).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * r;
                        case "hex":
                            return r >>> 1;
                        case "base64":
                            return R(t).length;
                        default:
                            if (n) return C(t).length;
                            e = ("" + e).toLowerCase(), n = !0
                    }
                }

                function g(t, e, r) {
                    var i, o, s, a = !1;
                    if ((e = void 0 === e || e < 0 ? 0 : e) > this.length) return "";
                    if ((r = void 0 === r || r > this.length ? this.length : r) <= 0) return "";
                    if ((r >>>= 0) <= (e >>>= 0)) return "";
                    for (t = t || "utf8"; ;) switch (t) {
                        case "hex":
                            return function (t, e, r) {
                                var n = t.length;
                                (!e || e < 0) && (e = 0), (!r || r < 0 || n < r) && (r = n);
                                for (var i = "", o = e; o < r; ++o) i += function (t) {
                                    return t < 16 ? "0" + t.toString(16) : t.toString(16)
                                }(t[o]);
                                return i
                            }(this, e, r);
                        case "utf8":
                        case "utf-8":
                            return _(this, e, r);
                        case "ascii":
                            return function (t, e, r) {
                                var n = "";
                                r = Math.min(t.length, r);
                                for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
                                return n
                            }(this, e, r);
                        case "latin1":
                        case "binary":
                            return function (t, e, r) {
                                var n = "";
                                r = Math.min(t.length, r);
                                for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                                return n
                            }(this, e, r);
                        case "base64":
                            return i = this, s = r, 0 === (o = e) && s === i.length ? n.fromByteArray(i) : n.fromByteArray(i.slice(o, s));
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return function (t, e, r) {
                                for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                                return i
                            }(this, e, r);
                        default:
                            if (a) throw new TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(), a = !0
                    }
                }

                function m(t, e, r) {
                    var n = t[e];
                    t[e] = t[r], t[r] = n
                }

                function y(t, e, r, n, i) {
                    if (0 === t.length) return -1;
                    if ("string" == typeof r ? (n = r, r = 0) : 2147483647 < r ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, (r = (r = isNaN(r) ? i ? 0 : t.length - 1 : r) < 0 ? t.length + r : r) >= t.length) {
                        if (i) return -1;
                        r = t.length - 1
                    } else if (r < 0) {
                        if (!i) return -1;
                        r = 0
                    }
                    if ("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e)) return 0 === e.length ? -1 : v(t, e, r, n, i);
                    if ("number" == typeof e) return e &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? (i ? Uint8Array.prototype.indexOf : Uint8Array.prototype.lastIndexOf).call(t, e, r) : v(t, [e], r, n, i);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function v(t, e, r, n, i) {
                    var o = 1,
                        s = t.length,
                        a = e.length;
                    if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                        if (t.length < 2 || e.length < 2) return -1;
                        s /= o = 2, a /= 2, r /= 2
                    }

                    function u(t, e) {
                        return 1 === o ? t[e] : t.readUInt16BE(e * o)
                    }
                    if (i)
                        for (var h = -1, c = r; c < s; c++)
                            if (u(t, c) === u(e, -1 === h ? 0 : c - h)) {
                                if (c - (h = -1 === h ? c : h) + 1 === a) return h * o
                            } else -1 !== h && (c -= c - h), h = -1;
                    else
                        for (c = r = s < r + a ? s - a : r; 0 <= c; c--) {
                            for (var f = !0, l = 0; l < a; l++)
                                if (u(t, c + l) !== u(e, l)) {
                                    f = !1;
                                    break
                                }
                            if (f) return c
                        }
                    return -1
                }

                function w(t, e, r, n) {
                    return I(function (t) {
                        for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                        return e
                    }(e), t, r, n)
                }

                function b(t, e, r, n) {
                    return I(function (t, e) {
                        for (var r, n, i = [], o = 0; o < t.length && !((e -= 2) < 0); ++o) r = (n = t.charCodeAt(o)) >> 8, n %= 256, i.push(n), i.push(r);
                        return i
                    }(e, t.length - r), t, r, n)
                }

                function _(t, e, r) {
                    r = Math.min(t.length, r);
                    for (var n = [], i = e; i < r;) {
                        var o, s, a, u, h = t[i],
                            c = null,
                            f = 239 < h ? 4 : 223 < h ? 3 : 191 < h ? 2 : 1;
                        if (i + f <= r) switch (f) {
                            case 1:
                                h < 128 && (c = h);
                                break;
                            case 2:
                                128 == (192 & (o = t[i + 1])) && 127 < (u = (31 & h) << 6 | 63 & o) && (c = u);
                                break;
                            case 3:
                                o = t[i + 1], s = t[i + 2], 128 == (192 & o) && 128 == (192 & s) && 2047 < (u = (15 & h) << 12 | (63 & o) << 6 | 63 & s) && (u < 55296 || 57343 < u) && (c = u);
                                break;
                            case 4:
                                o = t[i + 1], s = t[i + 2], a = t[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && 65535 < (u = (15 & h) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) && u < 1114112 && (c = u)
                        }
                        null === c ? (c = 65533, f = 1) : 65535 < c && (c -= 65536, n.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), n.push(c), i += f
                    }
                    return function (t) {
                        var e = t.length;
                        if (e <= M) return String.fromCharCode.apply(String, t);
                        for (var r = "", n = 0; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += M));
                        return r
                    }(n)
                }
                e.Buffer = u, e.SlowBuffer = function (t) {
                    return +t != t && (t = 0), u.alloc(+t)
                }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
                    try {
                        var t = new Uint8Array(1);
                        return t.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function () {
                                return 42
                            }
                        }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                    } catch (t) {
                        return !1
                    }
                }(), e.kMaxLength = s(), u.poolSize = 8192, u._augment = function (t) {
                    return t.__proto__ = u.prototype, t
                }, u.from = function (t, e, r) {
                    return h(null, t, e, r)
                }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
                    value: null,
                    configurable: !0
                })), u.alloc = function (t, e, r) {
                    return n = null, e = e, r = r, c(t = t), t <= 0 || void 0 === e ? a(n, t) : "string" == typeof r ? a(n, t).fill(e, r) : a(n, t).fill(e);
                    var n
                }, u.allocUnsafe = function (t) {
                    return f(null, t)
                }, u.allocUnsafeSlow = function (t) {
                    return f(null, t)
                }, u.isBuffer = function (t) {
                    return !(null == t || !t._isBuffer)
                }, u.compare = function (t, e) {
                    if (!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                    if (t === e) return 0;
                    for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i)
                        if (t[i] !== e[i]) {
                            r = t[i], n = e[i];
                            break
                        }
                    return r < n ? -1 : n < r ? 1 : 0
                }, u.isEncoding = function (t) {
                    switch (String(t).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, u.concat = function (t, e) {
                    if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === t.length) return u.alloc(0);
                    if (void 0 === e)
                        for (i = e = 0; i < t.length; ++i) e += t[i].length;
                    for (var r = u.allocUnsafe(e), n = 0, i = 0; i < t.length; ++i) {
                        var s = t[i];
                        if (!u.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                        s.copy(r, n), n += s.length
                    }
                    return r
                }, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function () {
                    var t = this.length;
                    if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var e = 0; e < t; e += 2) m(this, e, e + 1);
                    return this
                }, u.prototype.swap32 = function () {
                    var t = this.length;
                    if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var e = 0; e < t; e += 4) m(this, e, e + 3), m(this, e + 1, e + 2);
                    return this
                }, u.prototype.swap64 = function () {
                    var t = this.length;
                    if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var e = 0; e < t; e += 8) m(this, e, e + 7), m(this, e + 1, e + 6), m(this, e + 2, e + 5), m(this, e + 3, e + 4);
                    return this
                }, u.prototype.toString = function () {
                    var t = 0 | this.length;
                    return 0 == t ? "" : 0 === arguments.length ? _(this, 0, t) : g.apply(this, arguments)
                }, u.prototype.equals = function (t) {
                    if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    return this === t || 0 === u.compare(this, t)
                }, u.prototype.inspect = function () {
                    var t = "",
                        r = e.INSPECT_MAX_BYTES;
                    return 0 < this.length && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">"
                }, u.prototype.compare = function (t, e, r, n, i) {
                    if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), (e = void 0 === e ? 0 : e) < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                    if (i <= n && r <= e) return 0;
                    if (i <= n) return -1;
                    if (r <= e) return 1;
                    if (this === t) return 0;
                    for (var o = (i >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (e >>>= 0), a = Math.min(o, s), h = this.slice(n, i), c = t.slice(e, r), f = 0; f < a; ++f)
                        if (h[f] !== c[f]) {
                            o = h[f], s = c[f];
                            break
                        }
                    return o < s ? -1 : s < o ? 1 : 0
                }, u.prototype.includes = function (t, e, r) {
                    return -1 !== this.indexOf(t, e, r)
                }, u.prototype.indexOf = function (t, e, r) {
                    return y(this, t, e, r, !0)
                }, u.prototype.lastIndexOf = function (t, e, r) {
                    return y(this, t, e, r, !1)
                }, u.prototype.write = function (t, e, r, n) {
                    if (void 0 === e) n = "utf8", r = this.length, e = 0;
                    else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
                    else {
                        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        e |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                    }
                    var i = this.length - e;
                    if ((void 0 === r || i < r) && (r = i), 0 < t.length && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    n = n || "utf8";
                    for (var o, s, a, u = !1; ;) switch (n) {
                        case "hex":
                            return function (t, e, r, n) {
                                r = Number(r) || 0;
                                var i = t.length - r;
                                if ((!n || i < (n = Number(n))) && (n = i), (i = e.length) % 2 != 0) throw new TypeError("Invalid hex string");
                                i / 2 < n && (n = i / 2);
                                for (var o = 0; o < n; ++o) {
                                    var s = parseInt(e.substr(2 * o, 2), 16);
                                    if (isNaN(s)) return o;
                                    t[r + o] = s
                                }
                                return o
                            }(this, t, e, r);
                        case "utf8":
                        case "utf-8":
                            return s = e, a = r, I(C(t, (o = this).length - s), o, s, a);
                        case "ascii":
                            return w(this, t, e, r);
                        case "latin1":
                        case "binary":
                            return w(this, t, e, r);
                        case "base64":
                            return o = this, s = e, a = r, I(R(t), o, s, a);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return b(this, t, e, r);
                        default:
                            if (u) throw new TypeError("Unknown encoding: " + n);
                            n = ("" + n).toLowerCase(), u = !0
                    }
                }, u.prototype.toJSON = function () {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };
                var M = 4096;

                function S(t, e, r) {
                    if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                    if (r < t + e) throw new RangeError("Trying to access beyond buffer length")
                }

                function E(t, e, r, n, i, o) {
                    if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (i < e || e < o) throw new RangeError('"value" argument is out of bounds');
                    if (r + n > t.length) throw new RangeError("Index out of range")
                }

                function T(t, e, r, n) {
                    e < 0 && (e = 65535 + e + 1);
                    for (var i = 0, o = Math.min(t.length - r, 2); i < o; ++i) t[r + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
                }

                function A(t, e, r, n) {
                    e < 0 && (e = 4294967295 + e + 1);
                    for (var i = 0, o = Math.min(t.length - r, 4); i < o; ++i) t[r + i] = e >>> 8 * (n ? i : 3 - i) & 255
                }

                function k(t, e, r, n) {
                    if (r + n > t.length) throw new RangeError("Index out of range");
                    if (r < 0) throw new RangeError("Index out of range")
                }

                function x(t, e, r, n, o) {
                    return o || k(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4
                }

                function B(t, e, r, n, o) {
                    return o || k(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8
                }
                u.prototype.slice = function (t, e) {
                    var r = this.length;
                    if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : r < t && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : r < e && (e = r), e < t && (e = t), u.TYPED_ARRAY_SUPPORT) (i = this.subarray(t, e)).__proto__ = u.prototype;
                    else
                        for (var n = e - t, i = new u(n, void 0), o = 0; o < n; ++o) i[o] = this[o + t];
                    return i
                }, u.prototype.readUIntLE = function (t, e, r) {
                    t |= 0, e |= 0, r || S(t, e, this.length);
                    for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
                    return n
                }, u.prototype.readUIntBE = function (t, e, r) {
                    t |= 0, e |= 0, r || S(t, e, this.length);
                    for (var n = this[t + --e], i = 1; 0 < e && (i *= 256);) n += this[t + --e] * i;
                    return n
                }, u.prototype.readUInt8 = function (t, e) {
                    return e || S(t, 1, this.length), this[t]
                }, u.prototype.readUInt16LE = function (t, e) {
                    return e || S(t, 2, this.length), this[t] | this[t + 1] << 8
                }, u.prototype.readUInt16BE = function (t, e) {
                    return e || S(t, 2, this.length), this[t] << 8 | this[t + 1]
                }, u.prototype.readUInt32LE = function (t, e) {
                    return e || S(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                }, u.prototype.readUInt32BE = function (t, e) {
                    return e || S(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                }, u.prototype.readIntLE = function (t, e, r) {
                    t |= 0, e |= 0, r || S(t, e, this.length);
                    for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
                    return (i *= 128) <= n && (n -= Math.pow(2, 8 * e)), n
                }, u.prototype.readIntBE = function (t, e, r) {
                    t |= 0, e |= 0, r || S(t, e, this.length);
                    for (var n = e, i = 1, o = this[t + --n]; 0 < n && (i *= 256);) o += this[t + --n] * i;
                    return (i *= 128) <= o && (o -= Math.pow(2, 8 * e)), o
                }, u.prototype.readInt8 = function (t, e) {
                    return e || S(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                }, u.prototype.readInt16LE = function (t, e) {
                    return e || S(t, 2, this.length), 32768 & (t = this[t] | this[t + 1] << 8) ? 4294901760 | t : t
                }, u.prototype.readInt16BE = function (t, e) {
                    return e || S(t, 2, this.length), 32768 & (t = this[t + 1] | this[t] << 8) ? 4294901760 | t : t
                }, u.prototype.readInt32LE = function (t, e) {
                    return e || S(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                }, u.prototype.readInt32BE = function (t, e) {
                    return e || S(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                }, u.prototype.readFloatLE = function (t, e) {
                    return e || S(t, 4, this.length), i.read(this, t, !0, 23, 4)
                }, u.prototype.readFloatBE = function (t, e) {
                    return e || S(t, 4, this.length), i.read(this, t, !1, 23, 4)
                }, u.prototype.readDoubleLE = function (t, e) {
                    return e || S(t, 8, this.length), i.read(this, t, !0, 52, 8)
                }, u.prototype.readDoubleBE = function (t, e) {
                    return e || S(t, 8, this.length), i.read(this, t, !1, 52, 8)
                }, u.prototype.writeUIntLE = function (t, e, r, n) {
                    t = +t, e |= 0, r |= 0, n || E(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                    var i = 1,
                        o = 0;
                    for (this[e] = 255 & t; ++o < r && (i *= 256);) this[e + o] = t / i & 255;
                    return e + r
                }, u.prototype.writeUIntBE = function (t, e, r, n) {
                    t = +t, e |= 0, r |= 0, n || E(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                    var i = r - 1,
                        o = 1;
                    for (this[e + i] = 255 & t; 0 <= --i && (o *= 256);) this[e + i] = t / o & 255;
                    return e + r
                }, u.prototype.writeUInt8 = function (t, e, r) {
                    return t = +t, e |= 0, r || E(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
                }, u.prototype.writeUInt16LE = function (t, e, r) {
                    return t = +t, e |= 0, r || E(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : T(this, t, e, !0), e + 2
                }, u.prototype.writeUInt16BE = function (t, e, r) {
                    return t = +t, e |= 0, r || E(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : T(this, t, e, !1), e + 2
                }, u.prototype.writeUInt32LE = function (t, e, r) {
                    return t = +t, e |= 0, r || E(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : A(this, t, e, !0), e + 4
                }, u.prototype.writeUInt32BE = function (t, e, r) {
                    return t = +t, e |= 0, r || E(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : A(this, t, e, !1), e + 4
                }, u.prototype.writeIntLE = function (t, e, r, n) {
                    t = +t, e |= 0, n || E(this, t, e, r, (n = Math.pow(2, 8 * r - 1)) - 1, -n);
                    var i = 0,
                        o = 1,
                        s = 0;
                    for (this[e] = 255 & t; ++i < r && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
                    return e + r
                }, u.prototype.writeIntBE = function (t, e, r, n) {
                    t = +t, e |= 0, n || E(this, t, e, r, (n = Math.pow(2, 8 * r - 1)) - 1, -n);
                    var i = r - 1,
                        o = 1,
                        s = 0;
                    for (this[e + i] = 255 & t; 0 <= --i && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
                    return e + r
                }, u.prototype.writeInt8 = function (t, e, r) {
                    return t = +t, e |= 0, r || E(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & (t = t < 0 ? 255 + t + 1 : t), e + 1
                }, u.prototype.writeInt16LE = function (t, e, r) {
                    return t = +t, e |= 0, r || E(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : T(this, t, e, !0), e + 2
                }, u.prototype.writeInt16BE = function (t, e, r) {
                    return t = +t, e |= 0, r || E(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : T(this, t, e, !1), e + 2
                }, u.prototype.writeInt32LE = function (t, e, r) {
                    return t = +t, e |= 0, r || E(this, t, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : A(this, t, e, !0), e + 4
                }, u.prototype.writeInt32BE = function (t, e, r) {
                    return t = +t, e |= 0, r || E(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : A(this, t, e, !1), e + 4
                }, u.prototype.writeFloatLE = function (t, e, r) {
                    return x(this, t, e, !0, r)
                }, u.prototype.writeFloatBE = function (t, e, r) {
                    return x(this, t, e, !1, r)
                }, u.prototype.writeDoubleLE = function (t, e, r) {
                    return B(this, t, e, !0, r)
                }, u.prototype.writeDoubleBE = function (t, e, r) {
                    return B(this, t, e, !1, r)
                }, u.prototype.copy = function (t, e, r, n) {
                    if (r = r || 0, n || 0 === n || (n = this.length), e >= t.length && (e = t.length), (n = 0 < n && n < r ? r : n) === r) return 0;
                    if (0 === t.length || 0 === this.length) return 0;
                    if ((e = e || 0) < 0) throw new RangeError("targetStart out of bounds");
                    if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (n < 0) throw new RangeError("sourceEnd out of bounds");
                    n > this.length && (n = this.length);
                    var i, o = (n = t.length - e < n - r ? t.length - e + r : n) - r;
                    if (this === t && r < e && e < n)
                        for (i = o - 1; 0 <= i; --i) t[i + e] = this[i + r];
                    else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                        for (i = 0; i < o; ++i) t[i + e] = this[i + r];
                    else Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e);
                    return o
                }, u.prototype.fill = function (t, e, r, n) {
                    if ("string" == typeof t) {
                        var i;
                        if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 !== t.length || (i = t.charCodeAt(0)) < 256 && (t = i), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                        if ("string" == typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                    } else "number" == typeof t && (t &= 255); if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                    if (r <= e) return this;
                    if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, "number" == typeof (t = t || 0))
                        for (a = e; a < r; ++a) this[a] = t;
                    else
                        for (var o = u.isBuffer(t) ? t : C(new u(t, n).toString()), s = o.length, a = 0; a < r - e; ++a) this[a + e] = o[a % s];
                    return this
                };
                var P = /[^+\/0-9A-Za-z-_]/g;

                function C(t, e) {
                    var r;
                    e = e || 1 / 0;
                    for (var n = t.length, i = null, o = [], s = 0; s < n; ++s) {
                        if (55295 < (r = t.charCodeAt(s)) && r < 57344) {
                            if (!i) {
                                if (56319 < r) {
                                    -1 < (e -= 3) && o.push(239, 191, 189);
                                    continue
                                }
                                if (s + 1 === n) {
                                    -1 < (e -= 3) && o.push(239, 191, 189);
                                    continue
                                }
                                i = r;
                                continue
                            }
                            if (r < 56320) {
                                -1 < (e -= 3) && o.push(239, 191, 189), i = r;
                                continue
                            }
                            r = 65536 + (i - 55296 << 10 | r - 56320)
                        } else i && -1 < (e -= 3) && o.push(239, 191, 189); if (i = null, r < 128) {
                            if (--e < 0) break;
                            o.push(r)
                        } else if (r < 2048) {
                            if ((e -= 2) < 0) break;
                            o.push(r >> 6 | 192, 63 & r | 128)
                        } else if (r < 65536) {
                            if ((e -= 3) < 0) break;
                            o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                        } else {
                            if (!(r < 1114112)) throw new Error("Invalid code point");
                            if ((e -= 4) < 0) break;
                            o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                        }
                    }
                    return o
                }

                function R(t) {
                    return n.toByteArray(function (t) {
                        var e;
                        if ((t = ((e = t).trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")).replace(P, "")).length < 2) return "";
                        for (; t.length % 4 != 0;) t += "=";
                        return t
                    }(t))
                }

                function I(t, e, r, n) {
                    for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
                    return i
                }
            }).call(this, r(37))
        },
        function (t, e, r) {
            const n = r(5), i = [2043430169, 4086860338, 3878753381, 3462539467, 2630111639, 965255983, 1930511966, 3861023932, 3427080569, 2559193843, 823420391, 1646840782, 3293681564, 2292395833, 289824371, 579648742, 2643098247, 991229199, 1982458398, 3964916796, 3634866297, 2974765299, 1654563303, 3309126606, 2323285917, 351604539, 703209078, 1406418156, 2812836312, 1330705329, 2661410658, 1027854021, 2055708042, 4111416084, 3927864873, 3560762451, 2826557607, 1358147919, 2716295838, 1137624381, 2275248762, 255530229, 511060458, 1022120916, 2044241832, 4088483664, 3882000033, 3469032771, 2643098247, 991229199, 1982458398, 3964916796, 3634866297, 2974765299, 1654563303, 3309126606, 2323285917, 351604539, 703209078, 1406418156, 2812836312, 1330705329, 2661410658, 1027854021], o = new Array(68);

            function s(t, e) {
                return t << e | t >>> 32 - e
            }

            function a(t) {
                return t ^ s(t, 15) ^ s(t, 23)
            }

            function u(t, e, r, n, a, u, h, c, f) {
                var l = s(e, 12),
                    p = s(l + u + i[t], 7);
                return l ^= p, f = t <= 15 ? (a = a + (e ^ r ^ n) + l + (o[t] ^ o[t + 4]), f + (u ^ h ^ c) + p + o[t]) : (a = a + (e & r | e & n | r & n) + l + (o[t] ^ o[t + 4]), f + (u & h | ~u & c) + p + o[t]), [r = s(r, 9), a, h = s(h, 19), f = f ^ s(f, 9) ^ s(f, 17)]
            }
            t.exports = class {
                constructor() {
                    this.digest = new Array(8), this.nblocks = 0, this.block = new Array(64), this.num = 0
                }
                init() {
                    this.digest[0] = 1937774191, this.digest[1] = 1226093241, this.digest[2] = 388252375, this.digest[3] = 3666478592, this.digest[4] = 2842636476, this.digest[5] = 372324522, this.digest[6] = 3817729613, this.digest[7] = 2969243214;
                    for (let t = 0; t < 64; t++) this.block[t] = 0;
                    this.nblocks = 0, this.num = 0
                }
                SM3Compress(t) {
                    let e = 0, r = new Array(4), n = this.digest[0], i = this.digest[1], h = this.digest[2], c = this.digest[3], f = this.digest[4], l = this.digest[5], p = this.digest[6], d = this.digest[7];
                    const g = new Array(16);
                    for (let e = 0; e + 3 < 64; e += 4) g[e / 4] = (t[e] << 24) + (t[e + 1] << 16) + (t[e + 2] << 8) + t[e + 3];
                    for (e = 0; e < 4; e++) o[e] = g[e];
                    for (e = 0; e <= 8; e += 4) o[e + 4] = g[e + 4], r = u(e, n, i, h, c, f, l, p, d), i = r[0], c = r[1], l = r[2], d = r[3], o[e + 5] = g[e + 5], r = u(e + 1, c, n, i, h, d, f, l, p), n = r[0], h = r[1], f = r[2], p = r[3], o[e + 6] = g[e + 6], r = u(e + 2, h, c, n, i, p, d, f, l), c = r[0], i = r[1], d = r[2], l = r[3], o[e + 7] = g[e + 7], r = u(e + 3, i, h, c, n, l, p, d, f), h = r[0], n = r[1], p = r[2], f = r[3];
                    for (e = 12; e <= 60; e += 4) o[e + 4] = a(o[e - 12] ^ o[e - 5] ^ s(o[e + 1], 15)) ^ s(o[e - 9], 7) ^ o[e - 2], r = u(e, n, i, h, c, f, l, p, d), i = r[0], c = r[1], l = r[2], d = r[3], o[e + 5] = a(o[e - 11] ^ o[e - 4] ^ s(o[e + 2], 15)) ^ s(o[e - 8], 7) ^ o[e - 1], r = u(e + 1, c, n, i, h, d, f, l, p), n = r[0], h = r[1], f = r[2], p = r[3], o[e + 6] = a(o[e - 10] ^ o[e - 3] ^ s(o[e + 3], 15)) ^ s(o[e - 7], 7) ^ o[e], r = u(e + 2, h, c, n, i, p, d, f, l), c = r[0], i = r[1], d = r[2], l = r[3], o[e + 7] = a(o[e - 9] ^ o[e - 2] ^ s(o[e + 4], 15)) ^ s(o[e - 6], 7) ^ o[e + 1], r = u(e + 3, i, h, c, n, l, p, d, f), h = r[0], n = r[1], p = r[2], f = r[3];
                    this.digest[0] ^= n, this.digest[1] ^= i, this.digest[2] ^= h, this.digest[3] ^= c, this.digest[4] ^= f, this.digest[5] ^= l, this.digest[6] ^= p, this.digest[7] ^= d;
                    for (let t = 0; t < 8; t++) this.digest[t] = this.digest[t] >>> 0
                }
                update(t) {
                    let e = t.length;
                    for (let r = 0; r < e; r++) t[r] = (t[r] >>> 0) % 256;
                    if (this.num) {
                        var r = 64 - this.num;
                        if (e < r) {
                            for (let r = 0; r < e; r++) this.block[this.num + r] = t[r];
                            return void (this.num += e)
                        }
                        for (let e = 0; e < r; e++) this.block[this.num + e] = t[e];
                        this.SM3Compress(this.block), this.nblocks++, t = t.slice(r), e -= r
                    }
                    let n = 0;
                    for (; 64 <= e;) {
                        var i = 64 * n;
                        i = t.slice(i, 64 + i);
                        this.SM3Compress(i), this.nblocks++, n++, e -= 64
                    }
                    this.num = e;
                    var o = 64 * n;
                    if (e)
                        for (let r = 0; r < e; r++) this.block[r] = t[o + r]
                }
                final() {
                    if (this.block[this.num] = 128, this.num + 9 <= 64)
                        for (let t = 0; t < 64 - this.num - 9; t++) this.block[this.num + 1 + t] = 0;
                    else {
                        for (let t = 0; t < 64 - this.num - 1; t++) this.block[this.num + 1 + t] = 0;
                        this.SM3Compress(this.block);
                        for (let t = 0; t < 56; t++) this.block[t] = 0
                    }
                    var t = this.nblocks >>> 23,
                        e = (this.nblocks << 9) + (this.num << 3);
                    this.block[56] = (t >>> 24) % 256, this.block[57] = (t >>> 16) % 256, this.block[58] = (t >>> 8) % 256, this.block[59] = (t >>> 0) % 256, this.block[60] = (e >>> 24) % 256, this.block[61] = (e >>> 16) % 256, this.block[62] = (e >>> 8) % 256, this.block[63] = (e >>> 0) % 256;
                    const r = new Array(32);
                    this.SM3Compress(this.block);
                    for (let t = 0; t < 8; t++) r[4 * t] = (this.digest[t] >>> 24) % 256, r[4 * t + 1] = (this.digest[t] >>> 16) % 256, r[4 * t + 2] = (this.digest[t] >>> 8) % 256, r[4 * t + 3] = (this.digest[t] >>> 0) % 256;
                    return r
                }
                hashForBinaryArray(t) {
                    return this.init(), this.update(t), t = this.final(), n.byteArrayToHex(t)
                }
                hashForUTF8String(t) {
                    return t = n.stringToByteArrayInUtf8(t), this.hashForBinaryArray(t)
                }
            }
        },
        function (t, e, r) {
            (function (e) {
                var n, i = r(10),
                    o = i.Buffer,
                    s = {};
                for (n in i) i.hasOwnProperty(n) && "SlowBuffer" !== n && "Buffer" !== n && (s[n] = i[n]);
                var a = s.Buffer = {};
                for (n in o) o.hasOwnProperty(n) && "allocUnsafe" !== n && "allocUnsafeSlow" !== n && (a[n] = o[n]);
                if (s.Buffer.prototype = o.prototype, a.from && a.from !== Uint8Array.from || (a.from = function (t, e, r) {
                    if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof t);
                    if (t && void 0 === t.length) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                    return o(t, e, r)
                }), a.alloc || (a.alloc = function (t, e, r) {
                    if ("number" != typeof t) throw new TypeError('The "size" argument must be of type number. Received type ' + typeof t);
                    if (t < 0 || 2 * (1 << 30) <= t) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                    return t = o(t), e && 0 !== e.length ? "string" == typeof r ? t.fill(e, r) : t.fill(e) : t.fill(0), t
                }), !s.kStringMaxLength) try {
                    s.kStringMaxLength = e.binding("buffer").kStringMaxLength
                } catch (e) { }
                s.constants || (s.constants = {
                    MAX_LENGTH: s.kMaxLength
                }, s.kStringMaxLength && (s.constants.MAX_STRING_LENGTH = s.kStringMaxLength)), t.exports = s
            }).call(this, r(45))
        },
        function (t, e, r) {
            const n = r(14).Reporter, i = r(6).EncoderBuffer, o = r(6).DecoderBuffer, s = r(46), a = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"], u = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(a);

            function h(t, e, r) {
                const n = {};
                this._baseState = n, n.name = r, n.enc = t, n.parent = e || null, n.children = null, n.tag = null, n.args = null, n.reverseArgs = null, n.choice = null, n.optional = !1, n.any = !1, n.obj = !1, n.use = null, n.useDecoder = null, n.key = null, n.
                    default = null, n.explicit = null, n.implicit = null, n.contains = null, n.parent || (n.children = [], this._wrap())
            }
            t.exports = h;
            const c = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
            h.prototype.clone = function () {
                const t = this._baseState, e = {};
                c.forEach((function (r) {
                    e[r] = t[r]
                }));
                const r = new this.constructor(e.parent);
                return r._baseState = e, r
            }, h.prototype._wrap = function () {
                const t = this._baseState;
                u.forEach((function (e) {
                    this[e] = function () {
                        const r = new this.constructor(this);
                        return t.children.push(r), r[e].apply(r, arguments)
                    }
                }), this)
            }, h.prototype._init = function (t) {
                const e = this._baseState;
                s(null === e.parent), t.call(this), e.children = e.children.filter((function (t) {
                    return t._baseState.parent === this
                }), this), s.equal(e.children.length, 1, "Root node can have only one child")
            }, h.prototype._useArgs = function (t) {
                const e = this._baseState, r = t.filter((function (t) {
                    return t instanceof this.constructor
                }), this);
                t = t.filter((function (t) {
                    return !(t instanceof this.constructor)
                }), this), 0 !== r.length && (s(null === e.children), e.children = r, r.forEach((function (t) {
                    t._baseState.parent = this
                }), this)), 0 !== t.length && (s(null === e.args), e.args = t, e.reverseArgs = t.map((function (t) {
                    if ("object" != typeof t || t.constructor !== Object) return t;
                    const e = {};
                    return Object.keys(t).forEach((function (r) {
                        r == (0 | r) && (r |= 0);
                        var n = t[r];
                        e[n] = r
                    })), e
                })))
            }, ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"].forEach((function (t) {
                h.prototype[t] = function () {
                    var e = this._baseState;
                    throw new Error(t + " not implemented for encoding: " + e.enc)
                }
            })), a.forEach((function (t) {
                h.prototype[t] = function () {
                    const e = this._baseState;
                    var r = Array.prototype.slice.call(arguments);
                    return s(null === e.tag), e.tag = t, this._useArgs(r), this
                }
            })), h.prototype.use = function (t) {
                s(t);
                const e = this._baseState;
                return s(null === e.use), e.use = t, this
            }, h.prototype.optional = function () {
                return this._baseState.optional = !0, this
            }, h.prototype.def = function (t) {
                const e = this._baseState;
                return s(null === e.
                    default), e.
                        default = t, e.optional = !0, this
            }, h.prototype.explicit = function (t) {
                const e = this._baseState;
                return s(null === e.explicit && null === e.implicit), e.explicit = t, this
            }, h.prototype.implicit = function (t) {
                const e = this._baseState;
                return s(null === e.explicit && null === e.implicit), e.implicit = t, this
            }, h.prototype.obj = function () {
                const t = this._baseState;
                var e = Array.prototype.slice.call(arguments);
                return t.obj = !0, 0 !== e.length && this._useArgs(e), this
            }, h.prototype.key = function (t) {
                const e = this._baseState;
                return s(null === e.key), e.key = t, this
            }, h.prototype.any = function () {
                return this._baseState.any = !0, this
            }, h.prototype.choice = function (t) {
                const e = this._baseState;
                return s(null === e.choice), e.choice = t, this._useArgs(Object.keys(t).map((function (e) {
                    return t[e]
                }))), this
            }, h.prototype.contains = function (t) {
                const e = this._baseState;
                return s(null === e.use), e.contains = t, this
            }, h.prototype._decode = function (t, e) {
                const r = this._baseState;
                if (null === r.parent) return t.wrapResult(r.children[0]._decode(t, e));
                let n, i = r.
                    default, s = !0, a = null;
                if (null !== r.key && (a = t.enterKey(r.key)), r.optional) {
                    let n = null;
                    if (null !== r.explicit ? n = r.explicit : null !== r.implicit ? n = r.implicit : null !== r.tag && (n = r.tag), null !== n || r.any) {
                        if (s = this._peekTag(t, n, r.any), t.isError(s)) return s
                    } else {
                        var u = t.save();
                        try {
                            null === r.choice ? this._decodeGeneric(r.tag, t, e) : this._decodeChoice(t, e), s = !0
                        } catch (a) {
                            s = !1
                        }
                        t.restore(u)
                    }
                }
                if (r.obj && s && (n = t.enterObject()), s) {
                    if (null !== r.explicit) {
                        var h = this._decodeTag(t, r.explicit);
                        if (t.isError(h)) return h;
                        t = h
                    }
                    if (u = t.offset, null === r.use && null === r.choice) {
                        let e;
                        if (r.any && (e = t.save()), h = this._decodeTag(t, null !== r.implicit ? r.implicit : r.tag, r.any), t.isError(h)) return h;
                        r.any ? i = t.raw(e) : t = h
                    }
                    if (e && e.track && null !== r.tag && e.track(t.path(), u, t.length, "tagged"), e && e.track && null !== r.tag && e.track(t.path(), t.offset, t.length, "content"), r.any || (i = null === r.choice ? this._decodeGeneric(r.tag, t, e) : this._decodeChoice(t, e)), t.isError(i)) return i;
                    r.any || null !== r.choice || null === r.children || r.children.forEach((function (r) {
                        r._decode(t, e)
                    })), !r.contains || "octstr" !== r.tag && "bitstr" !== r.tag || (u = new o(i), i = this._getUse(r.contains, t._reporterState.obj)._decode(u, e))
                }
                return r.obj && s && (i = t.leaveObject(n)), null === r.key || null === i && !0 !== s ? null !== a && t.exitKey(a) : t.leaveKey(a, r.key, i), i
            }, h.prototype._decodeGeneric = function (t, e, r) {
                var n = this._baseState;
                return "seq" === t || "set" === t ? null : "seqof" === t || "setof" === t ? this._decodeList(e, t, n.args[0], r) : /str$/.test(t) ? this._decodeStr(e, t, r) : "objid" === t && n.args ? this._decodeObjid(e, n.args[0], n.args[1], r) : "objid" === t ? this._decodeObjid(e, null, null, r) : "gentime" === t || "utctime" === t ? this._decodeTime(e, t, r) : "null_" === t ? this._decodeNull(e, r) : "bool" === t ? this._decodeBool(e, r) : "objDesc" === t ? this._decodeStr(e, t, r) : "int" === t || "enum" === t ? this._decodeInt(e, n.args && n.args[0], r) : null !== n.use ? this._getUse(n.use, e._reporterState.obj)._decode(e, r) : e.error("unknown tag: " + t)
            }, h.prototype._getUse = function (t, e) {
                const r = this._baseState;
                return r.useDecoder = this._use(t, e), s(null === r.useDecoder._baseState.parent), r.useDecoder = r.useDecoder._baseState.children[0], r.implicit !== r.useDecoder._baseState.implicit && (r.useDecoder = r.useDecoder.clone(), r.useDecoder._baseState.implicit = r.implicit), r.useDecoder
            }, h.prototype._decodeChoice = function (t, e) {
                const r = this._baseState;
                let n = null, i = !1;
                return Object.keys(r.choice).some((function (o) {
                    var s = t.save();
                    const a = r.choice[o];
                    try {
                        var u = a._decode(t, e);
                        if (t.isError(u)) return !1;
                        n = {
                            type: o,
                            value: u
                        }, i = !0
                    } catch (o) {
                        return t.restore(s), !1
                    }
                    return !0
                }), this), i ? n : t.error("Choice not matched")
            }, h.prototype._createEncoderBuffer = function (t) {
                return new i(t, this.reporter)
            }, h.prototype._encode = function (t, e, r) {
                var n = this._baseState;
                if ((null === n.
                    default || n.
                        default !== t) && void 0 !== (t = this._encodeValue(t, e, r)) && !this._skipDefault(t, e, r)) return t
            }, h.prototype._encodeValue = function (t, e, r) {
                const i = this._baseState;
                if (null === i.parent) return i.children[0]._encode(t, e || new n());
                let o = null;
                if (this.reporter = e, i.optional && void 0 === t) {
                    if (null === i.
                        default) return;
                    t = i.
                        default
                }
                let s = null, a = !1;
                if (i.any) o = this._createEncoderBuffer(t);
                else if (i.choice) o = this._encodeChoice(t, e);
                else if (i.contains) s = this._getUse(i.contains, r)._encode(t, e), a = !0;
                else if (i.children) s = i.children.map((function (r) {
                    if ("null_" === r._baseState.tag) return r._encode(null, e, t);
                    if (null === r._baseState.key) return e.error("Child should have a key");
                    var n = e.enterKey(r._baseState.key);
                    return "object" != typeof t ? e.error("Child expected, but input is not object") : (r = r._encode(t[r._baseState.key], e, t), e.leaveKey(n), r)
                }), this).filter((function (t) {
                    return t
                })), s = this._createEncoderBuffer(s);
                else if ("seqof" === i.tag || "setof" === i.tag) {
                    if (!i.args || 1 !== i.args.length) return e.error("Too many args for : " + i.tag);
                    if (!Array.isArray(t)) return e.error("seqof/setof, but data is not Array");
                    const r = this.clone();
                    r._baseState.implicit = null, s = this._createEncoderBuffer(t.map((function (r) {
                        var n = this._baseState;
                        return this._getUse(n.args[0], t)._encode(r, e)
                    }), r))
                } else null !== i.use ? o = this._getUse(i.use, r)._encode(t, e) : (s = this._encodePrimitive(i.tag, t), a = !0);
                var u;
                return i.any || null !== i.choice || (u = null !== i.implicit ? i.implicit : i.tag, r = null === i.implicit ? "universal" : "context", null === u ? null === i.use && e.error("Tag could be omitted only for .use()") : null === i.use && (o = this._encodeComposite(u, a, r, s))), null !== i.explicit && (o = this._encodeComposite(i.explicit, !1, "context", o)), o
            }, h.prototype._encodeChoice = function (t, e) {
                var r = this._baseState;
                const n = r.choice[t.type];
                return n || s(!1, t.type + " not found in " + JSON.stringify(Object.keys(r.choice))), n._encode(t.value, e)
            }, h.prototype._encodePrimitive = function (t, e) {
                var r = this._baseState;
                if (/str$/.test(t)) return this._encodeStr(e, t);
                if ("objid" === t && r.args) return this._encodeObjid(e, r.reverseArgs[0], r.args[1]);
                if ("objid" === t) return this._encodeObjid(e, null, null);
                if ("gentime" === t || "utctime" === t) return this._encodeTime(e, t);
                if ("null_" === t) return this._encodeNull();
                if ("int" === t || "enum" === t) return this._encodeInt(e, r.args && r.reverseArgs[0]);
                if ("bool" === t) return this._encodeBool(e);
                if ("objDesc" === t) return this._encodeStr(e, t);
                throw new Error("Unsupported tag: " + t)
            }, h.prototype._isNumstr = function (t) {
                return /^[0-9 ]*$/.test(t)
            }, h.prototype._isPrintstr = function (t) {
                return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(t)
            }
        },
        function (t, e, r) {
            const n = r(3);

            function i(t) {
                this._reporterState = {
                    obj: null,
                    path: [],
                    options: t || {},
                    errors: []
                }
            }

            function o(t, e) {
                this.path = t, this.rethrow(e)
            } (e.Reporter = i).prototype.isError = function (t) {
                return t instanceof o
            }, i.prototype.save = function () {
                var t = this._reporterState;
                return {
                    obj: t.obj,
                    pathLen: t.path.length
                }
            }, i.prototype.restore = function (t) {
                const e = this._reporterState;
                e.obj = t.obj, e.path = e.path.slice(0, t.pathLen)
            }, i.prototype.enterKey = function (t) {
                return this._reporterState.path.push(t)
            }, i.prototype.exitKey = function (t) {
                const e = this._reporterState;
                e.path = e.path.slice(0, t - 1)
            }, i.prototype.leaveKey = function (t, e, r) {
                const n = this._reporterState;
                this.exitKey(t), null !== n.obj && (n.obj[e] = r)
            }, i.prototype.path = function () {
                return this._reporterState.path.join("/")
            }, i.prototype.enterObject = function () {
                const t = this._reporterState;
                var e = t.obj;
                return t.obj = {}, e
            }, i.prototype.leaveObject = function (t) {
                const e = this._reporterState;
                var r = e.obj;
                return e.obj = t, r
            }, i.prototype.error = function (t) {
                let e;
                const r = this._reporterState;
                var n = t instanceof o;
                if (e = n ? t : new o(r.path.map((function (t) {
                    return "[" + JSON.stringify(t) + "]"
                })).join(""), t.message || t, t.stack), !r.options.partial) throw e;
                return n || r.errors.push(e), e
            }, i.prototype.wrapResult = function (t) {
                var e = this._reporterState;
                return e.options.partial ? {
                    result: this.isError(t) ? null : t,
                    errors: e.errors
                } : t
            }, n(o, Error), o.prototype.rethrow = function (t) {
                if (this.message = t + " at: " + (this.path || "(shallow)"), Error.captureStackTrace && Error.captureStackTrace(this, o), !this.stack) try {
                    throw new Error(this.message)
                } catch (t) {
                    this.stack = t.stack
                }
                return this
            }
        },
        function (t, e, r) {
            function n(t) {
                const e = {};
                return Object.keys(t).forEach((function (r) {
                    (0 | r) == r && (r |= 0);
                    var n = t[r];
                    e[n] = r
                })), e
            }
            e.tagClass = {
                0: "universal",
                1: "application",
                2: "context",
                3: "private"
            }, e.tagClassByName = n(e.tagClass), e.tag = {
                0: "end",
                1: "bool",
                2: "int",
                3: "bitstr",
                4: "octstr",
                5: "null_",
                6: "objid",
                7: "objDesc",
                8: "external",
                9: "real",
                10: "enum",
                11: "embed",
                12: "utf8str",
                13: "relativeOid",
                16: "seq",
                17: "set",
                18: "numstr",
                19: "printstr",
                20: "t61str",
                21: "videostr",
                22: "ia5str",
                23: "utctime",
                24: "gentime",
                25: "graphstr",
                26: "iso646str",
                27: "genstr",
                28: "unistr",
                29: "charstr",
                30: "bmpstr"
            }, e.tagByName = n(e.tag)
        },
        function (t) {
            t.exports = JSON.parse('{"a":"5.1.13"}')
        },
        function (t, e) {
            var r = {
                utf8: {
                    stringToBytes: function (t) {
                        return r.bin.stringToBytes(unescape(encodeURIComponent(t)))
                    },
                    bytesToString: function (t) {
                        return decodeURIComponent(escape(r.bin.bytesToString(t)))
                    }
                },
                bin: {
                    stringToBytes: function (t) {
                        for (var e = [], r = 0; r < t.length; r++) e.push(255 & t.charCodeAt(r));
                        return e
                    },
                    bytesToString: function (t) {
                        for (var e = [], r = 0; r < t.length; r++) e.push(String.fromCharCode(t[r]));
                        return e.join("")
                    }
                }
            };
            t.exports = r
        },
        function (t, e, r) {
            (function (e) {
                const {
                    BigInteger: n,
                    SecureRandom: i
                } = r(8), o = r(9), s = r(20), a = r(40), u = r(11), h = r(41), c = r(5), f = r(23), l = f.bignum, p = r(22), d = new i(), g = f.define("ASN1_SM2EncryptFormat", (function () {
                    this.seq().obj(this.key("X").int(), this.key("Y").int(), this.key("Hash").octstr(), this.key("Cipher").octstr())
                })), m = f.define("ASN1_SM2SignFormat", (function () {
                    this.seq().obj(this.key("R").int(), this.key("S").int())
                })), y = f.define("ASN1_SM2PublicKeyObjID", (function () {
                    this.seq().obj(this.key("algorithm").objid(), this.key("subAlgorithm").objid())
                })), v = f.define("ASN1_SM2PublicKey", (function () {
                    this.seq().obj(this.key("algorithm").use(y), this.key("key").bitstr())
                }));
                t.exports = class {
                    constructor() {
                        this.curve = new o(), this.ecmath = new h(), this.sm3 = new u()
                    }
                    encodePublicKeyToDer(t) {
                        return t = v.encode({
                            algorithm: {
                                algorithm: "1.2.840.10045.2.1".split("."),
                                subAlgorithm: "1.2.156.10197.1.301".split(".")
                            },
                            key: {
                                data: e.from(t, "hex")
                            }
                        }, "der"), c.byteArrayToHex(t)
                    }
                    decodePublicKeyFromDer(t) {
                        return t = v.decode(e.from(t, "hex"), "der"), c.byteArrayToHex(t.key.data)
                    }
                    encrypt(t, e) {
                        if (e && 0 === e.length) throw new Error("plaintext cannot be an empty string.");
                        var r = new n(this.curve.n.bitLength(), d).mod(this.curve.n.subtract(n.ONE)).add(n.ONE);
                        const i = this.ecmath.ECPointMultiplyG(r);
                        var o = p.normalize(i.getX().toByteArray()),
                            u = p.normalize(i.getY().toByteArray()),
                            h = new s(t.substr(2, 64), t.substr(66, 64));
                        const f = this.ecmath.ECPointMultiply(h, r), m = p.normalize(f.getX().toByteArray());
                        h = p.normalize(f.getY().toByteArray()), r = m.concat(h);
                        var y = a.kdf(r, e.length);
                        let v = !0;
                        for (let t = 0; t < y.length; t++)
                            if (0 != y[t]) {
                                v = !1;
                                break
                            }
                        if (v) return this.encrypt(t, e);
                        const w = new Array(e.length);
                        for (let t = 0; t < e.length; t++) w[t] = e[t] ^ y[t];
                        return h = m.concat(Array.prototype.slice.call(e)).concat(h), this.sm3.init(), this.sm3.update(h), h = this.sm3.final(), h = g.encode({
                            X: new l(c.byteArrayToHex(o), 16),
                            Y: new l(c.byteArrayToHex(u), 16),
                            Hash: h,
                            Cipher: w
                        }, "der"), c.byteArrayToHex(h)
                    }
                    decrypt(t, r) {
                        r = e.from(c.hexToByteArray(r));
                        const i = g.decode(r, "der");
                        r = new s(i.X.toString(16), i.Y.toString(16)), t = new n(t, 16);
                        const o = this.ecmath.ECPointMultiply(r, t), u = p.normalize(o.getX().toByteArray());
                        r = p.normalize(o.getY().toByteArray()), t = u.concat(r);
                        var h = a.kdf(t, i.Cipher.length);
                        let f = !0;
                        for (let t = 0; t < h.length; t++)
                            if (0 != h[t]) {
                                f = !1;
                                break
                            }
                        if (f) return -1;
                        const l = new Array(i.Cipher.length);
                        for (let t = 0; t < i.Cipher.length; t++) l[t] = i.Cipher[t] ^ h[t];
                        r = u.concat(l).concat(r), this.sm3.init(), this.sm3.update(r);
                        return e.from(this.sm3.final()).equals(i.Hash) ? l : -1
                    }
                    sign(t, e, r, i) {
                        t.startsWith("0x") && (t = t.slice(2)), e.startsWith("0x") && (e = e.slice(2));
                        var o = new s(t.substr(2, 64), t.substr(66, 64));
                        o = a.SM2MessageDigest(r, i, o);
                        const u = new n(this.curve.n.bitLength(), d).mod(this.curve.n.subtract(n.ONE)).add(n.ONE), h = this.ecmath.ECPointMultiplyG(u), f = new n(c.byteArrayToHex(o), 16).add(h.getX()).mod(this.curve.n);
                        if (f.equals(this.ecmath.zero)) return this.sign(t, e, r, i);
                        if (f.add(u).equals(this.curve.n)) return this.sign(t, e, r, i);
                        const p = new n(e, 16), g = p.add(this.ecmath.one).modInverse(this.curve.n), y = f.multiply(p), v = g.multiply(u.add(y.negate())).mod(this.curve.n);
                        return v.equals(this.ecmath.zero) ? this.sign(t, e, r, i) : (i = m.encode({
                            R: new l(f.toString(16), 16),
                            S: new l(v.toString(16), 16)
                        }, "der"), c.byteArrayToHex(i))
                    }
                    verify(t, r, i, o) {
                        t.startsWith("0x") && (t = t.slice(2));
                        var u = e.from(c.hexToByteArray(o));
                        const h = m.decode(u, "der"), f = new n(h.R.toString(16), 16), l = new n(h.S.toString(16), 16);
                        if (!(0 < f.compareTo(this.ecmath.zero) && f.compareTo(this.curve.n) < 0)) return !1;
                        if (!(0 < l.compareTo(this.ecmath.zero) && l.compareTo(this.curve.n) < 0)) return !1;
                        const p = f.add(l).mod(this.curve.n);
                        if (p.equals(this.ecmath.zero)) return !1;
                        o = this.ecmath.ECPointMultiplyG(l), u = new s(t.substr(2, 64), t.substr(66, 64)), t = this.ecmath.ECPointMultiply(u, p);
                        const d = this.ecmath.ECPointAdd(o, t);
                        u = a.SM2MessageDigest(r, i, u);
                        return !!new n(c.byteArrayToHex(u), 16).add(d.getX()).mod(this.curve.n).equals(f)
                    }
                    genKeyPair() {
                        const t = new n(this.curve.n.bitLength(), d).mod(this.curve.n.subtract(n.ONE)).add(n.ONE), e = this.ecmath.ECPointMultiplyG(t);
                        var r = p.normalize(e.getX().toByteArray()),
                            i = p.normalize(e.getY().toByteArray());
                        i = c.byteArrayToHex([4, ...r, ...i]);
                        return {
                            privateKey: p.leftPad(t.toString(16), 64),
                            publicKey: i
                        }
                    }
                    getPublicKeyFromPrivateKey(t) {
                        const e = this.ecmath.ECPointMultiplyG(new n(t, 16));
                        var r = p.normalize(e.getX().toByteArray());
                        t = p.normalize(e.getY().toByteArray());
                        return c.byteArrayToHex([4, ...r, ...t])
                    }
                    kdf(t, e) {
                        return a.kdf(t, e)
                    }
                }
            }).call(this, r(10).Buffer)
        },
        function (t, e, r) {
            e.byteLength = function (t) {
                var e;
                return 3 * ((t = (e = h(t))[0]) + (e = e[1])) / 4 - e
            }, e.toByteArray = function (t) {
                var e, r, n = (s = h(t))[0],
                    s = s[1],
                    a = new o(function (t, e) {
                        return 3 * (t + e) / 4 - e
                    }(n, s)),
                    u = 0,
                    c = 0 < s ? n - 4 : n;
                for (r = 0; r < c; r += 4) e = i[t.charCodeAt(r)] << 18 | i[t.charCodeAt(r + 1)] << 12 | i[t.charCodeAt(r + 2)] << 6 | i[t.charCodeAt(r + 3)], a[u++] = e >> 16 & 255, a[u++] = e >> 8 & 255, a[u++] = 255 & e;
                return 2 === s && (e = i[t.charCodeAt(r)] << 2 | i[t.charCodeAt(r + 1)] >> 4, a[u++] = 255 & e), 1 === s && (e = i[t.charCodeAt(r)] << 10 | i[t.charCodeAt(r + 1)] << 4 | i[t.charCodeAt(r + 2)] >> 2, a[u++] = e >> 8 & 255, a[u++] = 255 & e), a
            }, e.fromByteArray = function (t) {
                for (var e, r = t.length, i = r % 3, o = [], s = 0, a = r - i; s < a; s += 16383) o.push(function (t, e, r) {
                    for (var i, o = [], s = e; s < r; s += 3) i = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), o.push(function (t) {
                        return n[t >> 18 & 63] + n[t >> 12 & 63] + n[t >> 6 & 63] + n[63 & t]
                    }(i));
                    return o.join("")
                }(t, s, a < s + 16383 ? a : s + 16383));
                return 1 == i ? (e = t[r - 1], o.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 == i && (e = (t[r - 2] << 8) + t[r - 1], o.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "=")), o.join("")
            };
            for (var n = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) n[a] = s[a], i[s.charCodeAt(a)] = a;

            function h(t) {
                var e = t.length;
                if (0 < e % 4) throw new Error("Invalid string. Length must be a multiple of 4");
                return [t = -1 === (t = t.indexOf("=")) ? e : t, t === e ? 0 : 4 - t % 4]
            }
            i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
        },
        function (t, e, r) {
            const n = r(8).BigInteger, i = r(9);
            t.exports = class {
                constructor(t, e, r) {
                    "string" == typeof t && "string" == typeof e ? (this.X = new n(t, 16), this.Y = new n(e, 16)) : (this.X = t, this.Y = e), this.Z = null == r ? n.ONE : r, this.zinv = null, this.curve = new i()
                }
                getX() {
                    return null === this.zinv && (this.zinv = this.Z.modInverse(this.curve.p)), this.X.multiply(this.zinv).mod(this.curve.p)
                }
                getY() {
                    return null === this.zinv && (this.zinv = this.Z.modInverse(this.curve.p)), this.Y.multiply(this.zinv).mod(this.curve.p)
                }
                isInfinity() {
                    return null === this.X && null === this.Y || this.Z.equals(n.ZERO) && !this.Y.equals(n.ZERO)
                }
            }
        },
        function (t, e) {
            function r() { }

            function n() { }
            r.prototype.encode = function (t) {
                const e = [];
                var r = t.length;
                let n = 0;
                for (; n < r;) {
                    var i = t.codePointAt(n);
                    let r = 0, o = 0;
                    for (i <= 127 ? (r = 0, o = 0) : i <= 2047 ? (r = 6, o = 192) : i <= 65535 ? (r = 12, o = 224) : i <= 2097151 && (r = 18, o = 240), e.push(o | i >> r), r -= 6; 0 <= r;) e.push(128 | i >> r & 63), r -= 6;
                    n += 65536 <= i ? 2 : 1
                }
                return e
            }, n.prototype.decode = function (t) {
                let e = "", r = 0;
                for (; r < t.length;) {
                    let n = t[r], i = 0, o = 0;
                    if (n <= 127 ? (i = 0, o = 255 & n) : n <= 223 ? (i = 1, o = 31 & n) : n <= 239 ? (i = 2, o = 15 & n) : n <= 244 && (i = 3, o = 7 & n), 0 < t.length - r - i) {
                        let e = 0;
                        for (; e < i;) n = t[r + e + 1], o = o << 6 | 63 & n, e += 1
                    } else o = 65533, i = t.length - r;
                    e += String.fromCodePoint(o), r += i + 1
                }
                return e
            }, t.exports = {
                TextDecoder: n,
                TextEncoder: r
            }
        },
        function (t, e) {
            t.exports = {
                normalize: function (t) {
                    let e = [...t];
                    if (32 < e.length) e = e.slice(e.length - 32, e.length);
                    else if (e.length < 32)
                        for (let t = 0; t < 32 - e.length; t++) e.unshift(0);
                    return e
                },
                leftPad: function (t, e) {
                    return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
                }
            }
        },
        function (t, e, r) {
            const n = e;
            n.bignum = r(24), n.define = r(44).define, n.base = r(49), n.constants = r(50), n.decoders = r(27), n.encoders = r(25)
        },
        function (t, e, r) {
            (function (t) {
                ! function (t, e) {
                    function n(t, e) {
                        if (!t) throw new Error(e || "Assertion failed")
                    }

                    function i(t, e) {
                        function r() { }
                        t.super_ = e, r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t
                    }

                    function o(t, e, r) {
                        if (o.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, (this.red = null) !== t && ("le" !== e && "be" !== e || (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                    }
                    var s;
                    "object" == typeof t ? t.exports = o : e.BN = o, (o.BN = o).wordSize = 26;
                    try {
                        s = ("undefined" != typeof window && void 0 !== window.Buffer ? window : r(43)).Buffer
                    } catch (t) { }

                    function a(t, e) {
                        return 65 <= (e = t.charCodeAt(e)) && e <= 70 ? e - 55 : 97 <= e && e <= 102 ? e - 87 : e - 48 & 15
                    }

                    function u(t, e, r) {
                        var n = a(t, r);
                        return e <= r - 1 && (n |= a(t, r - 1) << 4), n
                    }

                    function h(t, e, r, n) {
                        for (var i = 0, o = Math.min(t.length, r), s = e; s < o; s++) {
                            var a = t.charCodeAt(s) - 48;
                            i *= n, i += 49 <= a ? a - 49 + 10 : 17 <= a ? a - 17 + 10 : a
                        }
                        return i
                    }
                    o.isBN = function (t) {
                        return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                    }, o.max = function (t, e) {
                        return 0 < t.cmp(e) ? t : e
                    }, o.min = function (t, e) {
                        return t.cmp(e) < 0 ? t : e
                    }, o.prototype._init = function (t, e, r) {
                        if ("number" == typeof t) return this._initNumber(t, e, r);
                        if ("object" == typeof t) return this._initArray(t, e, r);
                        n((e = "hex" === e ? 16 : e) === (0 | e) && 2 <= e && e <= 36);
                        var i = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < t.length && (16 === e ? this._parseHex(t, i, r) : (this._parseBase(t, e, i), "le" === r && this._initArray(this.toArray(), e, r)))
                    }, o.prototype._initNumber = function (t, e, r) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), e, r)
                    }, o.prototype._initArray = function (t, e, r) {
                        if (n("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                        for (var i, o, s = 0; s < this.length; s++) this.words[s] = 0;
                        var a = 0;
                        if ("be" === r)
                            for (s = t.length - 1, i = 0; 0 <= s; s -= 3) o = t[s] | t[s - 1] << 8 | t[s - 2] << 16, this.words[i] |= o << a & 67108863, this.words[i + 1] = o >>> 26 - a & 67108863, 26 <= (a += 24) && (a -= 26, i++);
                        else if ("le" === r)
                            for (i = s = 0; s < t.length; s += 3) o = t[s] | t[s + 1] << 8 | t[s + 2] << 16, this.words[i] |= o << a & 67108863, this.words[i + 1] = o >>> 26 - a & 67108863, 26 <= (a += 24) && (a -= 26, i++);
                        return this.strip()
                    }, o.prototype._parseHex = function (t, e, r) {
                        this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                        for (var n = 0; n < this.length; n++) this.words[n] = 0;
                        var i, o = 0,
                            s = 0;
                        if ("be" === r)
                            for (n = t.length - 1; e <= n; n -= 2) i = u(t, e, n) << o, this.words[s] |= 67108863 & i, 18 <= o ? (o -= 18, this.words[s += 1] |= i >>> 26) : o += 8;
                        else
                            for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2) i = u(t, e, n) << o, this.words[s] |= 67108863 & i, 18 <= o ? (o -= 18, this.words[s += 1] |= i >>> 26) : o += 8;
                        this.strip()
                    }, o.prototype._parseBase = function (t, e, r) {
                        this.words = [0];
                        for (var n = 0, i = this.length = 1; i <= 67108863; i *= e) n++;
                        i = i / e | 0;
                        for (var o = t.length - r, s = o % --n, a = Math.min(o, o - s) + r, u = 0, c = r; c < a; c += n) u = h(t, c, c + n, e), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
                        if (0 != s) {
                            var f = 1;
                            for (u = h(t, c, t.length, e), c = 0; c < s; c++) f *= e;
                            this.imuln(f), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u)
                        }
                        this.strip()
                    }, o.prototype.copy = function (t) {
                        t.words = new Array(this.length);
                        for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, o.prototype.clone = function () {
                        var t = new o(null);
                        return this.copy(t), t
                    }, o.prototype._expand = function (t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, o.prototype.strip = function () {
                        for (; 1 < this.length && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, o.prototype._normSign = function () {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, o.prototype.inspect = function () {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    };
                    var c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        f = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        l = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                    function p(t, e, r) {
                        r.negative = e.negative ^ t.negative;
                        var n = t.length + e.length | 0,
                            i = (n = (r.length = n) - 1 | 0, (s = (0 | t.words[0]) * (0 | e.words[0])) / 67108864 | 0);
                        r.words[0] = 67108863 & s;
                        for (var o = 1; o < n; o++) {
                            for (var s, a = i >>> 26, u = 67108863 & i, h = Math.min(o, e.length - 1), c = Math.max(0, o - t.length + 1); c <= h; c++) a += (s = (0 | t.words[o - c | 0]) * (0 | e.words[c]) + u) / 67108864 | 0, u = 67108863 & s;
                            r.words[o] = 0 | u, i = 0 | a
                        }
                        return 0 !== i ? r.words[o] = 0 | i : r.length--, r.strip()
                    }
                    o.prototype.toString = function (t, e) {
                        if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                            u = "";
                            for (var r = 0, i = 0, o = 0; o < this.length; o++) {
                                var s = this.words[o],
                                    a = (16777215 & (s << r | i)).toString(16),
                                    u = 0 != (i = s >>> 24 - r & 16777215) || o !== this.length - 1 ? c[6 - a.length] + a + u : a + u;
                                26 <= (r += 2) && (r -= 26, o--)
                            }
                            for (0 !== i && (u = i.toString(16) + u); u.length % e != 0;) u = "0" + u;
                            return 0 !== this.negative ? "-" + u : u
                        }
                        if (t === (0 | t) && 2 <= t && t <= 36) {
                            var h = f[t],
                                p = l[t];
                            for (u = "", (d = this.clone()).negative = 0; !d.isZero();) {
                                var d, g = d.modn(p).toString(t);
                                u = (d = d.idivn(p)).isZero() ? g + u : c[h - g.length] + g + u
                            }
                            for (this.isZero() && (u = "0" + u); u.length % e != 0;) u = "0" + u;
                            return 0 !== this.negative ? "-" + u : u
                        }
                        n(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function () {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : 2 < this.length && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, o.prototype.toJSON = function () {
                        return this.toString(16)
                    }, o.prototype.toBuffer = function (t, e) {
                        return n(void 0 !== s), this.toArrayLike(s, t, e)
                    }, o.prototype.toArray = function (t, e) {
                        return this.toArrayLike(Array, t, e)
                    }, o.prototype.toArrayLike = function (t, e, r) {
                        var i = this.byteLength(),
                            o = r || Math.max(1, i);
                        n(i <= o, "byte array longer than desired length"), n(0 < o, "Requested array length <= 0"), this.strip();
                        e = "le" === e;
                        var s, a, u = new t(o),
                            h = this.clone();
                        if (e) {
                            for (a = 0; !h.isZero(); a++) s = h.andln(255), h.iushrn(8), u[a] = s;
                            for (; a < o; a++) u[a] = 0
                        } else {
                            for (a = 0; a < o - i; a++) u[a] = 0;
                            for (a = 0; !h.isZero(); a++) s = h.andln(255), h.iushrn(8), u[o - a - 1] = s
                        }
                        return u
                    }, Math.clz32 ? o.prototype._countBits = function (t) {
                        return 32 - Math.clz32(t)
                    } : o.prototype._countBits = function (t) {
                        var e = t;
                        t = 0;
                        return 4096 <= e && (t += 13, e >>>= 13), 64 <= e && (t += 7, e >>>= 7), 8 <= e && (t += 4, e >>>= 4), 2 <= e && (t += 2, e >>>= 2), t + e
                    }, o.prototype._zeroBits = function (t) {
                        if (0 === t) return 26;
                        var e = t;
                        t = 0;
                        return 0 == (8191 & e) && (t += 13, e >>>= 13), 0 == (127 & e) && (t += 7, e >>>= 7), 0 == (15 & e) && (t += 4, e >>>= 4), 0 == (3 & e) && (t += 2, e >>>= 2), 0 == (1 & e) && t++, t
                    }, o.prototype.bitLength = function () {
                        var t = this.words[this.length - 1];
                        t = this._countBits(t);
                        return 26 * (this.length - 1) + t
                    }, o.prototype.zeroBits = function () {
                        if (this.isZero()) return 0;
                        for (var t = 0, e = 0; e < this.length; e++) {
                            var r = this._zeroBits(this.words[e]);
                            if (t += r, 26 !== r) break
                        }
                        return t
                    }, o.prototype.byteLength = function () {
                        return Math.ceil(this.bitLength() / 8)
                    }, o.prototype.toTwos = function (t) {
                        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                    }, o.prototype.fromTwos = function (t) {
                        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                    }, o.prototype.isNeg = function () {
                        return 0 !== this.negative
                    }, o.prototype.neg = function () {
                        return this.clone().ineg()
                    }, o.prototype.ineg = function () {
                        return this.isZero() || (this.negative ^= 1), this
                    }, o.prototype.iuor = function (t) {
                        for (; this.length < t.length;) this.words[this.length++] = 0;
                        for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                        return this.strip()
                    }, o.prototype.ior = function (t) {
                        return n(0 == (this.negative | t.negative)), this.iuor(t)
                    }, o.prototype.or = function (t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, o.prototype.uor = function (t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, o.prototype.iuand = function (t) {
                        for (var e = this.length > t.length ? t : this, r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                        return this.length = e.length, this.strip()
                    }, o.prototype.iand = function (t) {
                        return n(0 == (this.negative | t.negative)), this.iuand(t)
                    }, o.prototype.and = function (t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, o.prototype.uand = function (t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, o.prototype.iuxor = function (t) {
                        for (var e, r = this.length > t.length ? (e = this, t) : (e = t, this), n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
                        if (this !== e)
                            for (; n < e.length; n++) this.words[n] = e.words[n];
                        return this.length = e.length, this.strip()
                    }, o.prototype.ixor = function (t) {
                        return n(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, o.prototype.xor = function (t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, o.prototype.uxor = function (t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, o.prototype.inotn = function (t) {
                        n("number" == typeof t && 0 <= t);
                        var e = 0 | Math.ceil(t / 26);
                        t %= 26;
                        this._expand(e), 0 < t && e--;
                        for (var r = 0; r < e; r++) this.words[r] = 67108863 & ~this.words[r];
                        return 0 < t && (this.words[r] = ~this.words[r] & 67108863 >> 26 - t), this.strip()
                    }, o.prototype.notn = function (t) {
                        return this.clone().inotn(t)
                    }, o.prototype.setn = function (t, e) {
                        n("number" == typeof t && 0 <= t);
                        var r = t / 26 | 0;
                        t %= 26;
                        return this._expand(1 + r), this.words[r] = e ? this.words[r] | 1 << t : this.words[r] & ~(1 << t), this.strip()
                    }, o.prototype.iadd = function (t) {
                        var e, r;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                        for (var n = this.length > t.length ? (r = this, t) : (r = t, this), i = 0, o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                        for (; 0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                        if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                        else if (r !== this)
                            for (; o < r.length; o++) this.words[o] = r.words[o];
                        return this
                    }, o.prototype.add = function (t) {
                        var e;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, o.prototype.isub = function (t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var e = this.iadd(t);
                            return t.negative = 1, e._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var r, n = this.cmp(t);
                        if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        for (var i = 0 < n ? (r = this, t) : (r = t, this), o = 0, s = 0; s < i.length; s++) o = (e = (0 | r.words[s]) - (0 | i.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                        for (; 0 !== o && s < r.length; s++) o = (e = (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                        if (0 === o && s < r.length && r !== this)
                            for (; s < r.length; s++) this.words[s] = r.words[s];
                        return this.length = Math.max(this.length, s), r !== this && (this.negative = 1), this.strip()
                    }, o.prototype.sub = function (t) {
                        return this.clone().isub(t)
                    };
                    var d = function (t, e, r) {
                        var n, i, o, s = t.words,
                            a = e.words,
                            u = r.words,
                            h = 8191 & (n = 0 | s[0]),
                            c = n >>> 13,
                            f = 8191 & (Y = 0 | s[1]),
                            l = Y >>> 13,
                            p = 8191 & (G = 0 | s[2]),
                            d = G >>> 13,
                            g = 8191 & (i = 0 | s[3]),
                            m = i >>> 13,
                            y = 8191 & (W = 0 | s[4]),
                            v = W >>> 13,
                            w = 8191 & (J = 0 | s[5]),
                            b = J >>> 13,
                            _ = 8191 & (o = 0 | s[6]),
                            M = o >>> 13,
                            S = 8191 & (V = 0 | s[7]),
                            E = V >>> 13,
                            T = 8191 & (X = 0 | s[8]),
                            A = X >>> 13,
                            k = 8191 & (Z = 0 | s[9]),
                            x = Z >>> 13,
                            B = 8191 & (Q = 0 | a[0]),
                            P = Q >>> 13,
                            C = 0 | a[1],
                            R = 8191 & C,
                            I = C >>> 13,
                            O = 0 | a[2],
                            L = 8191 & O,
                            q = O >>> 13,
                            N = 8191 & ($ = 0 | a[3]),
                            U = $ >>> 13,
                            F = 0 | a[4],
                            D = 8191 & F,
                            j = F >>> 13,
                            H = 0 | a[5],
                            K = 8191 & H,
                            z = H >>> 13,
                            Y = 8191 & (n = 0 | a[6]),
                            G = n >>> 13,
                            W = 8191 & (i = 0 | a[7]),
                            J = i >>> 13,
                            V = 8191 & (o = 0 | a[8]),
                            X = o >>> 13,
                            Z = 8191 & (s = 0 | a[9]),
                            Q = s >>> 13;
                        r.negative = t.negative ^ e.negative, r.length = 19;
                        var $ = (0 + Math.imul(h, B) | 0) + ((8191 & (O = (O = Math.imul(h, P)) + Math.imul(c, B) | 0)) << 13) | 0,
                            tt = ((F = Math.imul(c, P)) + (O >>> 13) | 0) + ($ >>> 26) | 0;
                        return $ &= 67108863, C = Math.imul(f, B), O = (O = Math.imul(f, P)) + Math.imul(l, B) | 0, F = Math.imul(l, P), H = (tt + (C + Math.imul(h, R) | 0) | 0) + ((8191 & (O = (O = O + Math.imul(h, I) | 0) + Math.imul(c, R) | 0)) << 13) | 0, tt = ((F = F + Math.imul(c, I) | 0) + (O >>> 13) | 0) + (H >>> 26) | 0, H &= 67108863, C = Math.imul(p, B), O = (O = Math.imul(p, P)) + Math.imul(d, B) | 0, F = Math.imul(d, P), C = C + Math.imul(f, R) | 0, O = (O = O + Math.imul(f, I) | 0) + Math.imul(l, R) | 0, F = F + Math.imul(l, I) | 0, n = (tt + (C + Math.imul(h, L) | 0) | 0) + ((8191 & (O = (O = O + Math.imul(h, q) | 0) + Math.imul(c, L) | 0)) << 13) | 0, tt = ((F = F + Math.imul(c, q) | 0) + (O >>> 13) | 0) + (n >>> 26) | 0, n &= 67108863, C = Math.imul(g, B), O = (O = Math.imul(g, P)) + Math.imul(m, B) | 0, F = Math.imul(m, P), C = C + Math.imul(p, R) | 0, O = (O = O + Math.imul(p, I) | 0) + Math.imul(d, R) | 0, F = F + Math.imul(d, I) | 0, C = C + Math.imul(f, L) | 0, O = (O = O + Math.imul(f, q) | 0) + Math.imul(l, L) | 0, F = F + Math.imul(l, q) | 0, i = (tt + (C + Math.imul(h, N) | 0) | 0) + ((8191 & (O = (O = O + Math.imul(h, U) | 0) + Math.imul(c, N) | 0)) << 13) | 0, tt = ((F = F + Math.imul(c, U) | 0) + (O >>> 13) | 0) + (i >>> 26) | 0, i &= 67108863, C = Math.imul(y, B), O = (O = Math.imul(y, P)) + Math.imul(v, B) | 0, F = Math.imul(v, P), C = C + Math.imul(g, R) | 0, O = (O = O + Math.imul(g, I) | 0) + Math.imul(m, R) | 0, F = F + Math.imul(m, I) | 0, C = C + Math.imul(p, L) | 0, O = (O = O + Math.imul(p, q) | 0) + Math.imul(d, L) | 0, F = F + Math.imul(d, q) | 0, C = C + Math.imul(f, N) | 0, O = (O = O + Math.imul(f, U) | 0) + Math.imul(l, N) | 0, F = F + Math.imul(l, U) | 0, o = (tt + (C + Math.imul(h, D) | 0) | 0) + ((8191 & (O = (O = O + Math.imul(h, j) | 0) + Math.imul(c, D) | 0)) << 13) | 0, tt = ((F = F + Math.imul(c, j) | 0) + (O >>> 13) | 0) + (o >>> 26) | 0, o &= 67108863, C = Math.imul(w, B), O = (O = Math.imul(w, P)) + Math.imul(b, B) | 0, F = Math.imul(b, P), C = C + Math.imul(y, R) | 0, O = (O = O + Math.imul(y, I) | 0) + Math.imul(v, R) | 0, F = F + Math.imul(v, I) | 0, C = C + Math.imul(g, L) | 0, O = (O = O + Math.imul(g, q) | 0) + Math.imul(m, L) | 0, F = F + Math.imul(m, q) | 0, C = C + Math.imul(p, N) | 0, O = (O = O + Math.imul(p, U) | 0) + Math.imul(d, N) | 0, F = F + Math.imul(d, U) | 0, C = C + Math.imul(f, D) | 0, O = (O = O + Math.imul(f, j) | 0) + Math.imul(l, D) | 0, F = F + Math.imul(l, j) | 0, a = (tt + (C + Math.imul(h, K) | 0) | 0) + ((8191 & (O = (O = O + Math.imul(h, z) | 0) + Math.imul(c, K) | 0)) << 13) | 0, tt = ((F = F + Math.imul(c, z) | 0) + (O >>> 13) | 0) + (a >>> 26) | 0, a &= 67108863, C = Math.imul(_, B), O = (O = Math.imul(_, P)) + Math.imul(M, B) | 0, F = Math.imul(M, P), C = C + Math.imul(w, R) | 0, O = (O = O + Math.imul(w, I) | 0) + Math.imul(b, R) | 0, F = F + Math.imul(b, I) | 0, C = C + Math.imul(y, L) | 0, O = (O = O + Math.imul(y, q) | 0) + Math.imul(v, L) | 0, F = F + Math.imul(v, q) | 0, C = C + Math.imul(g, N) | 0, O = (O = O + Math.imul(g, U) | 0) + Math.imul(m, N) | 0, F = F + Math.imul(m, U) | 0, C = C + Math.imul(p, D) | 0, O = (O = O + Math.imul(p, j) | 0) + Math.imul(d, D) | 0, F = F + Math.imul(d, j) | 0, C = C + Math.imul(f, K) | 0, O = (O = O + Math.imul(f, z) | 0) + Math.imul(l, K) | 0, F = F + Math.imul(l, z) | 0, s = (tt + (C + Math.imul(h, Y) | 0) | 0) + ((8191 & (O = (O = O + Math.imul(h, G) | 0) + Math.imul(c, Y) | 0)) << 13) | 0, tt = ((F = F + Math.imul(c, G) | 0) + (O >>> 13) | 0) + (s >>> 26) | 0, s &= 67108863, C = Math.imul(S, B), O = (O = Math.imul(S, P)) + Math.imul(E, B) | 0, F = Math.imul(E, P), C = C + Math.imul(_, R) | 0, O = (O = O + Math.imul(_, I) | 0) + Math.imul(M, R) | 0, F = F + Math.imul(M, I) | 0, C = C + Math.imul(w, L) | 0, O = (O = O + Math.imul(w, q) | 0) + Math.imul(b, L) | 0, F = F + Math.imul(b, q) | 0, C = C + Math.imul(y, N) | 0, O = (O = O + Math.imul(y, U) | 0) + Math.imul(v, N) | 0, F = F + Math.imul(v, U) | 0, C = C + Math.imul(g, D) | 0, O = (O = O + Math.imul(g, j) | 0) + Math.imul(m, D) | 0, F = F + Math.imul(m, j) | 0, C = C + Math.imul(p, K) | 0, O = (O = O + Math.imul(p, z) | 0) + Math.imul(d, K) | 0, F = F + Math.imul(d, z) | 0, C = C + Math.imul(f, Y) | 0, O = (O = O + Math.imul(f, G) | 0) + Math.imul(l, Y) | 0, F = F + Math.imul(l, G) | 0, t = (tt + (C + Math.imul(h, W) | 0) | 0) + ((8191 & (O = (O = O + Math.imul(h, J) | 0) + Math.imul(c, W) | 0)) << 13) | 0, tt = ((F = F + Math.imul(c, J) | 0) + (O >>> 13) | 0) + (t >>> 26) | 0, t &= 67108863, C = Math.imul(T, B), O = (O = Math.imul(T, P)) + Math.imul(A, B) | 0, F = Math.imul(A, P), C = C + Math.imul(S, R) | 0, O = (O = O + Math.imul(S, I) | 0) + Math.imul(E, R) | 0, F = F + Math.imul(E, I) | 0, C = C + Math.imul(_, L) | 0, O = (O = O + Math.imul(_, q) | 0) + Math.imul(M, L) | 0, F = F + Math.imul(M, q) | 0, C = C + Math.imul(w, N) | 0, O = (O = O + Math.imul(w, U) | 0) + Math.imul(b, N) | 0, F = F + Math.imul(b, U) | 0, C = C + Math.imul(y, D) | 0, O = (O = O + Math.imul(y, j) | 0) + Math.imul(v, D) | 0, F = F + Math.imul(v, j) | 0, C = C + Math.imul(g, K) | 0, O = (O = O + Math.imul(g, z) | 0) + Math.imul(m, K) | 0, F = F + Math.imul(m, z) | 0, C = C + Math.imul(p, Y) | 0, O = (O = O + Math.imul(p, G) | 0) + Math.imul(d, Y) | 0, F = F + Math.imul(d, G) | 0, C = C + Math.imul(f, W) | 0, O = (O = O + Math.imul(f, J) | 0) + Math.imul(l, W) | 0, F = F + Math.imul(l, J) | 0, e = (tt + (C + Math.imul(h, V) | 0) | 0) + ((8191 & (O = (O = O + Math.imul(h, X) | 0) + Math.imul(c, V) | 0)) << 13) | 0, tt = ((F = F + Math.imul(c, X) | 0) + (O >>> 13) | 0) + (e >>> 26) | 0, e &= 67108863, C = Math.imul(k, B), O = (O = Math.imul(k, P)) + Math.imul(x, B) | 0, F = Math.imul(x, P), C = C + Math.imul(T, R) | 0, O = (O = O + Math.imul(T, I) | 0) + Math.imul(A, R) | 0, F = F + Math.imul(A, I) | 0, C = C + Math.imul(S, L) | 0, O = (O = O + Math.imul(S, q) | 0) + Math.imul(E, L) | 0, F = F + Math.imul(E, q) | 0, C = C + Math.imul(_, N) | 0, O = (O = O + Math.imul(_, U) | 0) + Math.imul(M, N) | 0, F = F + Math.imul(M, U) | 0, C = C + Math.imul(w, D) | 0, O = (O = O + Math.imul(w, j) | 0) + Math.imul(b, D) | 0, F = F + Math.imul(b, j) | 0, C = C + Math.imul(y, K) | 0, O = (O = O + Math.imul(y, z) | 0) + Math.imul(v, K) | 0, F = F + Math.imul(v, z) | 0, C = C + Math.imul(g, Y) | 0, O = (O = O + Math.imul(g, G) | 0) + Math.imul(m, Y) | 0, F = F + Math.imul(m, G) | 0, C = C + Math.imul(p, W) | 0, O = (O = O + Math.imul(p, J) | 0) + Math.imul(d, W) | 0, F = F + Math.imul(d, J) | 0, C = C + Math.imul(f, V) | 0, O = (O = O + Math.imul(f, X) | 0) + Math.imul(l, V) | 0, F = F + Math.imul(l, X) | 0, h = (tt + (C + Math.imul(h, Z) | 0) | 0) + ((8191 & (O = (O = O + Math.imul(h, Q) | 0) + Math.imul(c, Z) | 0)) << 13) | 0, tt = ((F = F + Math.imul(c, Q) | 0) + (O >>> 13) | 0) + (h >>> 26) | 0, h &= 67108863, C = Math.imul(k, R), O = (O = Math.imul(k, I)) + Math.imul(x, R) | 0, F = Math.imul(x, I), C = C + Math.imul(T, L) | 0, O = (O = O + Math.imul(T, q) | 0) + Math.imul(A, L) | 0, F = F + Math.imul(A, q) | 0, C = C + Math.imul(S, N) | 0, O = (O = O + Math.imul(S, U) | 0) + Math.imul(E, N) | 0, F = F + Math.imul(E, U) | 0, C = C + Math.imul(_, D) | 0, O = (O = O + Math.imul(_, j) | 0) + Math.imul(M, D) | 0, F = F + Math.imul(M, j) | 0, C = C + Math.imul(w, K) | 0, O = (O = O + Math.imul(w, z) | 0) + Math.imul(b, K) | 0, F = F + Math.imul(b, z) | 0, C = C + Math.imul(y, Y) | 0, O = (O = O + Math.imul(y, G) | 0) + Math.imul(v, Y) | 0, F = F + Math.imul(v, G) | 0, C = C + Math.imul(g, W) | 0, O = (O = O + Math.imul(g, J) | 0) + Math.imul(m, W) | 0, F = F + Math.imul(m, J) | 0, C = C + Math.imul(p, V) | 0, O = (O = O + Math.imul(p, X) | 0) + Math.imul(d, V) | 0, F = F + Math.imul(d, X) | 0, f = (tt + (C + Math.imul(f, Z) | 0) | 0) + ((8191 & (O = (O = O + Math.imul(f, Q) | 0) + Math.imul(l, Z) | 0)) << 13) | 0, tt = ((F = F + Math.imul(l, Q) | 0) + (O >>> 13) | 0) + (f >>> 26) | 0, f &= 67108863, C = Math.imul(k, L), O = (O = Math.imul(k, q)) + Math.imul(x, L) | 0, F = Math.imul(x, q), C = C + Math.imul(T, N) | 0, O = (O = O + Math.imul(T, U) | 0) + Math.imul(A, N) | 0, F = F + Math.imul(A, U) | 0, C = C + Math.imul(S, D) | 0, O = (O = O + Math.imul(S, j) | 0) + Math.imul(E, D) | 0, F = F + Math.imul(E, j) | 0, C = C + Math.imul(_, K) | 0, O = (O = O + Math.imul(_, z) | 0) + Math.imul(M, K) | 0, F = F + Math.imul(M, z) | 0, C = C + Math.imul(w, Y) | 0, O = (O = O + Math.imul(w, G) | 0) + Math.imul(b, Y) | 0, F = F + Math.imul(b, G) | 0, C = C + Math.imul(y, W) | 0, O = (O = O + Math.imul(y, J) | 0) + Math.imul(v, W) | 0, F = F + Math.imul(v, J) | 0, C = C + Math.imul(g, V) | 0, O = (O = O + Math.imul(g, X) | 0) + Math.imul(m, V) | 0, F = F + Math.imul(m, X) | 0, p = (tt + (C + Math.imul(p, Z) | 0) | 0) + ((8191 & (O = (O = O + Math.imul(p, Q) | 0) + Math.imul(d, Z) | 0)) << 13) | 0, tt = ((F = F + Math.imul(d, Q) | 0) + (O >>> 13) | 0) + (p >>> 26) | 0, p &= 67108863, C = Math.imul(k, N), O = (O = Math.imul(k, U)) + Math.imul(x, N) | 0, F = Math.imul(x, U), C = C + Math.imul(T, D) | 0, O = (O = O + Math.imul(T, j) | 0) + Math.imul(A, D) | 0, F = F + Math.imul(A, j) | 0, C = C + Math.imul(S, K) | 0, O = (O = O + Math.imul(S, z) | 0) + Math.imul(E, K) | 0, F = F + Math.imul(E, z) | 0, C = C + Math.imul(_, Y) | 0, O = (O = O + Math.imul(_, G) | 0) + Math.imul(M, Y) | 0, F = F + Math.imul(M, G) | 0, C = C + Math.imul(w, W) | 0, O = (O = O + Math.imul(w, J) | 0) + Math.imul(b, W) | 0, F = F + Math.imul(b, J) | 0, C = C + Math.imul(y, V) | 0, O = (O = O + Math.imul(y, X) | 0) + Math.imul(v, V) | 0, F = F + Math.imul(v, X) | 0, g = (tt + (C + Math.imul(g, Z) | 0) | 0) + ((8191 & (O = (O = O + Math.imul(g, Q) | 0) + Math.imul(m, Z) | 0)) << 13) | 0, tt = ((F = F + Math.imul(m, Q) | 0) + (O >>> 13) | 0) + (g >>> 26) | 0, g &= 67108863, C = Math.imul(k, D), O = (O = Math.imul(k, j)) + Math.imul(x, D) | 0, F = Math.imul(x, j), C = C + Math.imul(T, K) | 0, O = (O = O + Math.imul(T, z) | 0) + Math.imul(A, K) | 0, F = F + Math.imul(A, z) | 0, C = C + Math.imul(S, Y) | 0, O = (O = O + Math.imul(S, G) | 0) + Math.imul(E, Y) | 0, F = F + Math.imul(E, G) | 0, C = C + Math.imul(_, W) | 0, O = (O = O + Math.imul(_, J) | 0) + Math.imul(M, W) | 0, F = F + Math.imul(M, J) | 0, C = C + Math.imul(w, V) | 0, O = (O = O + Math.imul(w, X) | 0) + Math.imul(b, V) | 0, F = F + Math.imul(b, X) | 0, y = (tt + (C + Math.imul(y, Z) | 0) | 0) + ((8191 & (O = (O = O + Math.imul(y, Q) | 0) + Math.imul(v, Z) | 0)) << 13) | 0, tt = ((F = F + Math.imul(v, Q) | 0) + (O >>> 13) | 0) + (y >>> 26) | 0, y &= 67108863, C = Math.imul(k, K), O = (O = Math.imul(k, z)) + Math.imul(x, K) | 0, F = Math.imul(x, z), C = C + Math.imul(T, Y) | 0, O = (O = O + Math.imul(T, G) | 0) + Math.imul(A, Y) | 0, F = F + Math.imul(A, G) | 0, C = C + Math.imul(S, W) | 0, O = (O = O + Math.imul(S, J) | 0) + Math.imul(E, W) | 0, F = F + Math.imul(E, J) | 0, C = C + Math.imul(_, V) | 0, O = (O = O + Math.imul(_, X) | 0) + Math.imul(M, V) | 0, F = F + Math.imul(M, X) | 0, w = (tt + (C + Math.imul(w, Z) | 0) | 0) + ((8191 & (O = (O = O + Math.imul(w, Q) | 0) + Math.imul(b, Z) | 0)) << 13) | 0, tt = ((F = F + Math.imul(b, Q) | 0) + (O >>> 13) | 0) + (w >>> 26) | 0, w &= 67108863, C = Math.imul(k, Y), O = (O = Math.imul(k, G)) + Math.imul(x, Y) | 0, F = Math.imul(x, G), C = C + Math.imul(T, W) | 0, O = (O = O + Math.imul(T, J) | 0) + Math.imul(A, W) | 0, F = F + Math.imul(A, J) | 0, C = C + Math.imul(S, V) | 0, O = (O = O + Math.imul(S, X) | 0) + Math.imul(E, V) | 0, F = F + Math.imul(E, X) | 0, _ = (tt + (C + Math.imul(_, Z) | 0) | 0) + ((8191 & (O = (O = O + Math.imul(_, Q) | 0) + Math.imul(M, Z) | 0)) << 13) | 0, tt = ((F = F + Math.imul(M, Q) | 0) + (O >>> 13) | 0) + (_ >>> 26) | 0, _ &= 67108863, C = Math.imul(k, W), O = (O = Math.imul(k, J)) + Math.imul(x, W) | 0, F = Math.imul(x, J), C = C + Math.imul(T, V) | 0, O = (O = O + Math.imul(T, X) | 0) + Math.imul(A, V) | 0, F = F + Math.imul(A, X) | 0, S = (tt + (C + Math.imul(S, Z) | 0) | 0) + ((8191 & (O = (O = O + Math.imul(S, Q) | 0) + Math.imul(E, Z) | 0)) << 13) | 0, tt = ((F = F + Math.imul(E, Q) | 0) + (O >>> 13) | 0) + (S >>> 26) | 0, S &= 67108863, C = Math.imul(k, V), O = (O = Math.imul(k, X)) + Math.imul(x, V) | 0, F = Math.imul(x, X), T = (tt + (C + Math.imul(T, Z) | 0) | 0) + ((8191 & (O = (O = O + Math.imul(T, Q) | 0) + Math.imul(A, Z) | 0)) << 13) | 0, tt = ((F = F + Math.imul(A, Q) | 0) + (O >>> 13) | 0) + (T >>> 26) | 0, T &= 67108863, Z = (tt + Math.imul(k, Z) | 0) + ((8191 & (O = (O = Math.imul(k, Q)) + Math.imul(x, Z) | 0)) << 13) | 0, tt = ((F = Math.imul(x, Q)) + (O >>> 13) | 0) + (Z >>> 26) | 0, Z &= 67108863, u[0] = $, u[1] = H, u[2] = n, u[3] = i, u[4] = o, u[5] = a, u[6] = s, u[7] = t, u[8] = e, u[9] = h, u[10] = f, u[11] = p, u[12] = g, u[13] = y, u[14] = w, u[15] = _, u[16] = S, u[17] = T, u[18] = Z, 0 != tt && (u[19] = tt, r.length++), r
                    };

                    function g(t, e, r) {
                        return (new m()).mulp(t, e, r)
                    }

                    function m(t, e) {
                        this.x = t, this.y = e
                    }
                    Math.imul || (d = p), o.prototype.mulTo = function (t, e) {
                        var r = this.length + t.length;
                        return e = (10 === this.length && 10 === t.length ? d : r < 63 ? p : r < 1024 ? function (t, e, r) {
                            r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                            for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                                for (var s = i, a = (i = 0, 67108863 & n), u = Math.min(o, e.length - 1), h = Math.max(0, o - t.length + 1); h <= u; h++) {
                                    var c, f = (0 | t.words[o - h]) * (0 | e.words[h]);
                                    a = 67108863 & (c = (c = 67108863 & f) + a | 0);
                                    i += (s = (s = s + (f / 67108864 | 0) | 0) + (c >>> 26) | 0) >>> 26, s &= 67108863
                                }
                                r.words[o] = a, n = s, s = i
                            }
                            return 0 !== n ? r.words[o] = n : r.length--, r.strip()
                        } : g)(this, t, e)
                    }, m.prototype.makeRBT = function (t) {
                        for (var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0; n < t; n++) e[n] = this.revBin(n, r, t);
                        return e
                    }, m.prototype.revBin = function (t, e, r) {
                        if (0 === t || t === r - 1) return t;
                        for (var n = 0, i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;
                        return n
                    }, m.prototype.permute = function (t, e, r, n, i, o) {
                        for (var s = 0; s < o; s++) n[s] = e[t[s]], i[s] = r[t[s]]
                    }, m.prototype.transform = function (t, e, r, n, i, o) {
                        this.permute(o, t, e, r, n, i);
                        for (var s = 1; s < i; s <<= 1)
                            for (var a = s << 1, u = Math.cos(2 * Math.PI / a), h = Math.sin(2 * Math.PI / a), c = 0; c < i; c += a)
                                for (var f = u, l = h, p = 0; p < s; p++) {
                                    var d = r[c + p],
                                        g = n[c + p],
                                        m = r[c + p + s],
                                        y = f * m - l * (v = n[c + p + s]),
                                        v = f * v + l * m;
                                    r[c + p] = d + (m = y), n[c + p] = g + v, r[c + p + s] = d - m, n[c + p + s] = g - v, p !== a && (y = u * f - h * l, l = u * l + h * f, f = y)
                                }
                    }, m.prototype.guessLen13b = function (t, e) {
                        t = 1 & (n = 1 | Math.max(e, t));
                        for (var r = 0, n = n / 2 | 0; n; n >>>= 1) r++;
                        return 1 << r + 1 + t
                    }, m.prototype.conjugate = function (t, e, r) {
                        if (!(r <= 1))
                            for (var n = 0; n < r / 2; n++) {
                                var i = t[n];
                                t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i
                            }
                    }, m.prototype.normalize13b = function (t, e) {
                        for (var r = 0, n = 0; n < e / 2; n++) {
                            var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
                            t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
                        }
                        return t
                    }, m.prototype.convert13b = function (t, e, r, i) {
                        for (var o = 0, s = 0; s < e; s++) o += 0 | t[s], r[2 * s] = 8191 & o, r[2 * s + 1] = 8191 & (o >>>= 13), o >>>= 13;
                        for (s = 2 * e; s < i; ++s) r[s] = 0;
                        n(0 === o), n(0 == (-8192 & o))
                    }, m.prototype.stub = function (t) {
                        for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
                        return e
                    }, m.prototype.mulp = function (t, e, r) {
                        var n = 2 * this.guessLen13b(t.length, e.length),
                            i = this.makeRBT(n),
                            o = this.stub(n),
                            s = new Array(n),
                            a = new Array(n),
                            u = new Array(n),
                            h = new Array(n),
                            c = new Array(n),
                            f = new Array(n),
                            l = r.words;
                        l.length = n, this.convert13b(t.words, t.length, s, n), this.convert13b(e.words, e.length, h, n), this.transform(s, o, a, u, n, i), this.transform(h, o, c, f, n, i);
                        for (var p = 0; p < n; p++) {
                            var d = a[p] * c[p] - u[p] * f[p];
                            u[p] = a[p] * f[p] + u[p] * c[p], a[p] = d
                        }
                        return this.conjugate(a, u, n), this.transform(a, u, l, o, n, i), this.conjugate(l, o, n), this.normalize13b(l, n), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r.strip()
                    }, o.prototype.mul = function (t) {
                        var e = new o(null);
                        return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                    }, o.prototype.mulf = function (t) {
                        var e = new o(null);
                        return e.words = new Array(this.length + t.length), g(this, t, e)
                    }, o.prototype.imul = function (t) {
                        return this.clone().mulTo(t, this)
                    }, o.prototype.imuln = function (t) {
                        n("number" == typeof t), n(t < 67108864);
                        for (var e = 0, r = 0; r < this.length; r++) {
                            var i = (0 | this.words[r]) * t,
                                o = (67108863 & i) + (67108863 & e);
                            e >>= 26, e += i / 67108864 | 0, e += o >>> 26, this.words[r] = 67108863 & o
                        }
                        return 0 !== e && (this.words[r] = e, this.length++), this
                    }, o.prototype.muln = function (t) {
                        return this.clone().imuln(t)
                    }, o.prototype.sqr = function () {
                        return this.mul(this)
                    }, o.prototype.isqr = function () {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function (t) {
                        var e = function (t) {
                            for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                                var n = r % 26;
                                e[r] = (t.words[r / 26 | 0] & 1 << n) >>> n
                            }
                            return e
                        }(t);
                        if (0 === e.length) return new o(1);
                        for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());
                        if (++n < e.length)
                            for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
                        return r
                    }, o.prototype.iushln = function (t) {
                        n("number" == typeof t && 0 <= t);
                        var e = t % 26,
                            r = (t - e) / 26,
                            i = 67108863 >>> 26 - e << 26 - e;
                        if (0 != e) {
                            for (var o = 0, s = 0; s < this.length; s++) {
                                var a = this.words[s] & i,
                                    u = (0 | this.words[s]) - a << e;
                                this.words[s] = u | o, o = a >>> 26 - e
                            }
                            o && (this.words[s] = o, this.length++)
                        }
                        if (0 != r) {
                            for (s = this.length - 1; 0 <= s; s--) this.words[s + r] = this.words[s];
                            for (s = 0; s < r; s++) this.words[s] = 0;
                            this.length += r
                        }
                        return this.strip()
                    }, o.prototype.ishln = function (t) {
                        return n(0 === this.negative), this.iushln(t)
                    }, o.prototype.iushrn = function (t, e, r) {
                        n("number" == typeof t && 0 <= t);
                        var i = e ? (e - e % 26) / 26 : 0,
                            o = t % 26,
                            s = Math.min((t - o) / 26, this.length),
                            a = 67108863 ^ 67108863 >>> o << o,
                            u = r;
                        if (i -= s, i = Math.max(0, i), u) {
                            for (var h = 0; h < s; h++) u.words[h] = this.words[h];
                            u.length = s
                        }
                        if (0 !== s)
                            if (this.length > s)
                                for (this.length -= s, h = 0; h < this.length; h++) this.words[h] = this.words[h + s];
                            else this.words[0] = 0, this.length = 1;
                        var c = 0;
                        for (h = this.length - 1; 0 <= h && (0 !== c || i <= h); h--) {
                            var f = 0 | this.words[h];
                            this.words[h] = c << 26 - o | f >>> o, c = f & a
                        }
                        return u && 0 !== c && (u.words[u.length++] = c), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                    }, o.prototype.ishrn = function (t, e, r) {
                        return n(0 === this.negative), this.iushrn(t, e, r)
                    }, o.prototype.shln = function (t) {
                        return this.clone().ishln(t)
                    }, o.prototype.ushln = function (t) {
                        return this.clone().iushln(t)
                    }, o.prototype.shrn = function (t) {
                        return this.clone().ishrn(t)
                    }, o.prototype.ushrn = function (t) {
                        return this.clone().iushrn(t)
                    }, o.prototype.testn = function (t) {
                        n("number" == typeof t && 0 <= t);
                        var e = t % 26;
                        t = (t - e) / 26;
                        return !(this.length <= t || !(this.words[t] & 1 << e))
                    }, o.prototype.imaskn = function (t) {
                        n("number" == typeof t && 0 <= t);
                        var e = t % 26;
                        t = (t - e) / 26;
                        return n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= t ? this : (0 != e && t++, this.length = Math.min(t, this.length), 0 != e && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> e << e), this.strip())
                    }, o.prototype.maskn = function (t) {
                        return this.clone().imaskn(t)
                    }, o.prototype.iaddn = function (t) {
                        return n("number" == typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(t), this.negative = 1), this) : this._iaddn(t)
                    }, o.prototype._iaddn = function (t) {
                        this.words[0] += t;
                        for (var e = 0; e < this.length && 67108864 <= this.words[e]; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                        return this.length = Math.max(this.length, e + 1), this
                    }, o.prototype.isubn = function (t) {
                        if (n("number" == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, --this.words[e + 1];
                        return this.strip()
                    }, o.prototype.addn = function (t) {
                        return this.clone().iaddn(t)
                    }, o.prototype.subn = function (t) {
                        return this.clone().isubn(t)
                    }, o.prototype.iabs = function () {
                        return this.negative = 0, this
                    }, o.prototype.abs = function () {
                        return this.clone().iabs()
                    }, o.prototype._ishlnsubmul = function (t, e, r) {
                        var i = t.length + r;
                        this._expand(i);
                        for (var o = 0, s = 0; s < t.length; s++) {
                            var a = (0 | this.words[s + r]) + o,
                                u = (0 | t.words[s]) * e;
                            o = ((a -= 67108863 & u) >> 26) - (u / 67108864 | 0);
                            this.words[s + r] = 67108863 & a
                        }
                        for (; s < this.length - r; s++) o = (a = (0 | this.words[s + r]) + o) >> 26, this.words[s + r] = 67108863 & a;
                        if (0 === o) return this.strip();
                        for (n(-1 === o), s = o = 0; s < this.length; s++) o = (a = -(0 | this.words[s]) + o) >> 26, this.words[s] = 67108863 & a;
                        return this.negative = 1, this.strip()
                    }, o.prototype._wordDiv = function (t, e) {
                        var r = (this.length, t.length),
                            n = this.clone(),
                            i = t,
                            s = 0 | i.words[i.length - 1];
                        0 != (r = 26 - this._countBits(s)) && (i = i.ushln(r), n.iushln(r), s = 0 | i.words[i.length - 1]);
                        var a, u = n.length - i.length;
                        if ("mod" !== e) {
                            (a = new o(null)).length = 1 + u, a.words = new Array(a.length);
                            for (var h = 0; h < a.length; h++) a.words[h] = 0
                        }
                        0 === (t = n.clone()._ishlnsubmul(i, 1, u)).negative && (n = t, a && (a.words[u] = 1));
                        for (var c = u - 1; 0 <= c; c--) {
                            var f = 67108864 * (0 | n.words[i.length + c]) + (0 | n.words[i.length + c - 1]);
                            f = Math.min(f / s | 0, 67108863);
                            for (n._ishlnsubmul(i, f, c); 0 !== n.negative;) f--, n.negative = 0, n._ishlnsubmul(i, 1, c), n.isZero() || (n.negative ^= 1);
                            a && (a.words[c] = f)
                        }
                        return a && a.strip(), n.strip(), "div" !== e && 0 != r && n.iushrn(r), {
                            div: a || null,
                            mod: n
                        }
                    }, o.prototype.divmod = function (t, e, r) {
                        return n(!t.isZero()), this.isZero() ? {
                            div: new o(0),
                            mod: new o(0)
                        } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, e), "mod" !== e && (i = a.div.neg()), "div" !== e && (s = a.mod.neg(), r && 0 !== s.negative && s.iadd(t)), {
                            div: i,
                            mod: s
                        }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), e), {
                            div: i = "mod" !== e ? a.div.neg() : i,
                            mod: a.mod
                        }) : 0 != (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), e), "div" !== e && (s = a.mod.neg(), r && 0 !== s.negative && s.isub(t)), {
                            div: a.div,
                            mod: s
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new o(0),
                            mod: this
                        } : 1 === t.length ? "div" === e ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === e ? {
                            div: null,
                            mod: new o(this.modn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new o(this.modn(t.words[0]))
                        } : this._wordDiv(t, e);
                        var i, s, a
                    }, o.prototype.div = function (t) {
                        return this.divmod(t, "div", !1).div
                    }, o.prototype.mod = function (t) {
                        return this.divmod(t, "mod", !1).mod
                    }, o.prototype.umod = function (t) {
                        return this.divmod(t, "mod", !0).mod
                    }, o.prototype.divRound = function (t) {
                        var e = this.divmod(t);
                        if (e.mod.isZero()) return e.div;
                        var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                            n = t.ushrn(1);
                        t = t.andln(1);
                        return (n = r.cmp(n)) < 0 || 1 === t && 0 === n ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                    }, o.prototype.modn = function (t) {
                        n(t <= 67108863);
                        for (var e = (1 << 26) % t, r = 0, i = this.length - 1; 0 <= i; i--) r = (e * r + (0 | this.words[i])) % t;
                        return r
                    }, o.prototype.idivn = function (t) {
                        n(t <= 67108863);
                        for (var e = 0, r = this.length - 1; 0 <= r; r--) {
                            var i = (0 | this.words[r]) + 67108864 * e;
                            this.words[r] = i / t | 0, e = i % t
                        }
                        return this.strip()
                    }, o.prototype.divn = function (t) {
                        return this.clone().idivn(t)
                    }, o.prototype.egcd = function (t) {
                        n(0 === t.negative), n(!t.isZero());
                        for (var e = this, r = t.clone(), i = (e = 0 !== e.negative ? e.umod(t) : e.clone(), new o(1)), s = new o(0), a = new o(0), u = new o(1), h = 0; e.isEven() && r.isEven();) e.iushrn(1), r.iushrn(1), ++h;
                        for (var c = r.clone(), f = e.clone(); !e.isZero();) {
                            for (var l = 0, p = 1; 0 == (e.words[0] & p) && l < 26; ++l, p <<= 1);
                            if (0 < l)
                                for (e.iushrn(l); 0 < l--;)(i.isOdd() || s.isOdd()) && (i.iadd(c), s.isub(f)), i.iushrn(1), s.iushrn(1);
                            for (var d = 0, g = 1; 0 == (r.words[0] & g) && d < 26; ++d, g <<= 1);
                            if (0 < d)
                                for (r.iushrn(d); 0 < d--;)(a.isOdd() || u.isOdd()) && (a.iadd(c), u.isub(f)), a.iushrn(1), u.iushrn(1);
                            0 <= e.cmp(r) ? (e.isub(r), i.isub(a), s.isub(u)) : (r.isub(e), a.isub(i), u.isub(s))
                        }
                        return {
                            a: a,
                            b: u,
                            gcd: r.iushln(h)
                        }
                    }, o.prototype._invmp = function (t) {
                        n(0 === t.negative), n(!t.isZero());
                        for (var e, r = this, i = t.clone(), s = (r = 0 !== r.negative ? r.umod(t) : r.clone(), new o(1)), a = new o(0), u = i.clone(); 0 < r.cmpn(1) && 0 < i.cmpn(1);) {
                            for (var h = 0, c = 1; 0 == (r.words[0] & c) && h < 26; ++h, c <<= 1);
                            if (0 < h)
                                for (r.iushrn(h); 0 < h--;) s.isOdd() && s.iadd(u), s.iushrn(1);
                            for (var f = 0, l = 1; 0 == (i.words[0] & l) && f < 26; ++f, l <<= 1);
                            if (0 < f)
                                for (i.iushrn(f); 0 < f--;) a.isOdd() && a.iadd(u), a.iushrn(1);
                            0 <= r.cmp(i) ? (r.isub(i), s.isub(a)) : (i.isub(r), a.isub(s))
                        }
                        return (e = 0 === r.cmpn(1) ? s : a).cmpn(0) < 0 && e.iadd(t), e
                    }, o.prototype.gcd = function (t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var e = this.clone(),
                            r = t.clone();
                        e.negative = 0;
                        for (var n = r.negative = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
                        for (; ;) {
                            for (; e.isEven();) e.iushrn(1);
                            for (; r.isEven();) r.iushrn(1);
                            var i = e.cmp(r);
                            if (i < 0) {
                                var o = e;
                                e = r, r = o
                            } else if (0 === i || 0 === r.cmpn(1)) break;
                            e.isub(r)
                        }
                        return r.iushln(n)
                    }, o.prototype.invm = function (t) {
                        return this.egcd(t).a.umod(t)
                    }, o.prototype.isEven = function () {
                        return 0 == (1 & this.words[0])
                    }, o.prototype.isOdd = function () {
                        return 1 == (1 & this.words[0])
                    }, o.prototype.andln = function (t) {
                        return this.words[0] & t
                    }, o.prototype.bincn = function (t) {
                        n("number" == typeof t);
                        t = (t - (e = t % 26)) / 26;
                        var e = 1 << e;
                        if (this.length <= t) return this._expand(1 + t), this.words[t] |= e, this;
                        for (var r = e, i = t; 0 !== r && i < this.length; i++) {
                            var o = 0 | this.words[i];
                            r = (o += r) >>> 26;
                            o &= 67108863, this.words[i] = o
                        }
                        return 0 !== r && (this.words[i] = r, this.length++), this
                    }, o.prototype.isZero = function () {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function (t) {
                        var e = t < 0;
                        return 0 === this.negative || e ? 0 === this.negative && e ? 1 : (this.strip(), t = 1 < this.length ? 1 : (n((t = e ? -t : t) <= 67108863, "Number is too big"), (e = 0 | this.words[0]) === t ? 0 : e < t ? -1 : 1), 0 !== this.negative ? 0 | -t : t) : -1
                    }, o.prototype.cmp = function (t) {
                        return 0 !== this.negative && 0 === t.negative ? -1 : 0 === this.negative && 0 !== t.negative ? 1 : (t = this.ucmp(t), 0 !== this.negative ? 0 | -t : t)
                    }, o.prototype.ucmp = function (t) {
                        if (this.length > t.length) return 1;
                        if (this.length < t.length) return -1;
                        for (var e = 0, r = this.length - 1; 0 <= r; r--) {
                            var n = 0 | this.words[r],
                                i = 0 | t.words[r];
                            if (n != i) {
                                n < i ? e = -1 : i < n && (e = 1);
                                break
                            }
                        }
                        return e
                    }, o.prototype.gtn = function (t) {
                        return 1 === this.cmpn(t)
                    }, o.prototype.gt = function (t) {
                        return 1 === this.cmp(t)
                    }, o.prototype.gten = function (t) {
                        return 0 <= this.cmpn(t)
                    }, o.prototype.gte = function (t) {
                        return 0 <= this.cmp(t)
                    }, o.prototype.ltn = function (t) {
                        return -1 === this.cmpn(t)
                    }, o.prototype.lt = function (t) {
                        return -1 === this.cmp(t)
                    }, o.prototype.lten = function (t) {
                        return this.cmpn(t) <= 0
                    }, o.prototype.lte = function (t) {
                        return this.cmp(t) <= 0
                    }, o.prototype.eqn = function (t) {
                        return 0 === this.cmpn(t)
                    }, o.prototype.eq = function (t) {
                        return 0 === this.cmp(t)
                    }, o.red = function (t) {
                        return new S(t)
                    }, o.prototype.toRed = function (t) {
                        return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, o.prototype.fromRed = function () {
                        return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, o.prototype._forceRed = function (t) {
                        return this.red = t, this
                    }, o.prototype.forceRed = function (t) {
                        return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, o.prototype.redAdd = function (t) {
                        return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, o.prototype.redIAdd = function (t) {
                        return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, o.prototype.redSub = function (t) {
                        return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, o.prototype.redISub = function (t) {
                        return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, o.prototype.redShl = function (t) {
                        return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, o.prototype.redMul = function (t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, o.prototype.redIMul = function (t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, o.prototype.redSqr = function () {
                        return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, o.prototype.redISqr = function () {
                        return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, o.prototype.redSqrt = function () {
                        return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, o.prototype.redInvm = function () {
                        return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, o.prototype.redNeg = function () {
                        return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, o.prototype.redPow = function (t) {
                        return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var y = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function v(t, e) {
                        this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function w() {
                        v.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function b() {
                        v.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function _() {
                        v.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function M() {
                        v.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function S(t) {
                        var e;
                        "string" == typeof t ? (e = o._prime(t), this.m = e.p, this.prime = e) : (n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null)
                    }

                    function E(t) {
                        S.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    v.prototype._tmp = function () {
                        var t = new o(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, v.prototype.ireduce = function (t) {
                        for (var e, r = t; this.split(r, this.tmp), (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()) > this.n;);
                        return 0 === (t = e < this.n ? -1 : r.ucmp(this.p)) ? (r.words[0] = 0, r.length = 1) : 0 < t ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                    }, v.prototype.split = function (t, e) {
                        t.iushrn(this.n, 0, e)
                    }, v.prototype.imulK = function (t) {
                        return t.imul(this.k)
                    }, i(w, v), w.prototype.split = function (t, e) {
                        for (var r = Math.min(t.length, 9), n = 0; n < r; n++) e.words[n] = t.words[n];
                        if (e.length = r, t.length <= 9) return t.words[0] = 0, void (t.length = 1);
                        var i = t.words[9];
                        for (e.words[e.length++] = 4194303 & i, n = 10; n < t.length; n++) {
                            var o = 0 | t.words[n];
                            t.words[n - 10] = (4194303 & o) << 4 | i >>> 22, i = o
                        }
                        0 == (t.words[n - 10] = i >>>= 22) && 10 < t.length ? t.length -= 10 : t.length -= 9
                    }, w.prototype.imulK = function (t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var e = 0, r = 0; r < t.length; r++) {
                            var n = 0 | t.words[r];
                            e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, i(b, v), i(_, v), i(M, v), M.prototype.imulK = function (t) {
                        for (var e = 0, r = 0; r < t.length; r++) {
                            var n = 19 * (0 | t.words[r]) + e,
                                i = 67108863 & n;
                            n >>>= 26, t.words[r] = i, e = n
                        }
                        return 0 !== e && (t.words[t.length++] = e), t
                    }, o._prime = function (t) {
                        if (y[t]) return y[t];
                        var e;
                        if ("k256" === t) e = new w();
                        else if ("p224" === t) e = new b();
                        else if ("p192" === t) e = new _();
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            e = new M()
                        }
                        return y[t] = e
                    }, S.prototype._verify1 = function (t) {
                        n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers")
                    }, S.prototype._verify2 = function (t, e) {
                        n(0 == (t.negative | e.negative), "red works only with positives"), n(t.red && t.red === e.red, "red works only with red numbers")
                    }, S.prototype.imod = function (t) {
                        return (this.prime ? this.prime.ireduce(t) : t.umod(this.m))._forceRed(this)
                    }, S.prototype.neg = function (t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, S.prototype.add = function (t, e) {
                        return this._verify2(t, e), 0 <= (e = t.add(e)).cmp(this.m) && e.isub(this.m), e._forceRed(this)
                    }, S.prototype.iadd = function (t, e) {
                        return this._verify2(t, e), 0 <= (e = t.iadd(e)).cmp(this.m) && e.isub(this.m), e
                    }, S.prototype.sub = function (t, e) {
                        return this._verify2(t, e), (e = t.sub(e)).cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this)
                    }, S.prototype.isub = function (t, e) {
                        return this._verify2(t, e), (e = t.isub(e)).cmpn(0) < 0 && e.iadd(this.m), e
                    }, S.prototype.shl = function (t, e) {
                        return this._verify1(t), this.imod(t.ushln(e))
                    }, S.prototype.imul = function (t, e) {
                        return this._verify2(t, e), this.imod(t.imul(e))
                    }, S.prototype.mul = function (t, e) {
                        return this._verify2(t, e), this.imod(t.mul(e))
                    }, S.prototype.isqr = function (t) {
                        return this.imul(t, t.clone())
                    }, S.prototype.sqr = function (t) {
                        return this.mul(t, t)
                    }, S.prototype.sqrt = function (t) {
                        if (t.isZero()) return t.clone();
                        var e = this.m.andln(3);
                        if (n(e % 2 == 1), 3 === e) return e = this.m.add(new o(1)).iushrn(2), this.pow(t, e);
                        for (var r = this.m.subn(1), i = 0; !r.isZero() && 0 === r.andln(1);) i++, r.iushrn(1);
                        n(!r.isZero());
                        for (var s = new o(1).toRed(this), a = s.redNeg(), u = this.m.subn(1).iushrn(1), h = new o(2 * (h = this.m.bitLength()) * h).toRed(this); 0 !== this.pow(h, u).cmp(a);) h.redIAdd(a);
                        for (var c = this.pow(h, r), f = this.pow(t, r.addn(1).iushrn(1)), l = this.pow(t, r), p = i; 0 !== l.cmp(s);) {
                            for (var d = l, g = 0; 0 !== d.cmp(s); g++) d = d.redSqr();
                            n(g < p);
                            var m = this.pow(c, new o(1).iushln(p - g - 1));
                            f = f.redMul(m), c = m.redSqr(), l = l.redMul(c), p = g
                        }
                        return f
                    }, S.prototype.invm = function (t) {
                        return 0 !== (t = t._invmp(this.m)).negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                    }, S.prototype.pow = function (t, e) {
                        if (e.isZero()) return new o(1).toRed(this);
                        if (0 === e.cmpn(1)) return t.clone();
                        var r = new Array(16);
                        r[0] = new o(1).toRed(this), r[1] = t;
                        for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
                        var i = r[0],
                            s = 0,
                            a = 0,
                            u = e.bitLength() % 26;
                        for (0 === u && (u = 26), n = e.length - 1; 0 <= n; n--) {
                            for (var h = e.words[n], c = u - 1; 0 <= c; c--) {
                                var f = h >> c & 1;
                                i !== r[0] && (i = this.sqr(i)), 0 != f || 0 !== s ? (s <<= 1, s |= f, (4 == ++a || 0 === n && 0 === c) && (i = this.mul(i, r[s]), s = a = 0)) : a = 0
                            }
                            u = 26
                        }
                        return i
                    }, S.prototype.convertTo = function (t) {
                        var e = t.umod(this.m);
                        return e === t ? e.clone() : e
                    }, S.prototype.convertFrom = function (t) {
                        return (t = t.clone()).red = null, t
                    }, o.mont = function (t) {
                        return new E(t)
                    }, i(E, S), E.prototype.convertTo = function (t) {
                        return this.imod(t.ushln(this.shift))
                    }, E.prototype.convertFrom = function (t) {
                        return (t = this.imod(t.mul(this.rinv))).red = null, t
                    }, E.prototype.imul = function (t, e) {
                        return t.isZero() || e.isZero() ? (t.words[0] = 0, t.length = 1, t) : (e = (t = t.imul(e)).maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), e = t = t.isub(e).iushrn(this.shift), 0 <= t.cmp(this.m) ? e = t.isub(this.m) : t.cmpn(0) < 0 && (e = t.iadd(this.m)), e._forceRed(this))
                    }, E.prototype.mul = function (t, e) {
                        return t.isZero() || e.isZero() ? new o(0)._forceRed(this) : (e = (t = t.mul(e)).maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), e = t = t.isub(e).iushrn(this.shift), 0 <= t.cmp(this.m) ? e = t.isub(this.m) : t.cmpn(0) < 0 && (e = t.iadd(this.m)), e._forceRed(this))
                    }, E.prototype.invm = function (t) {
                        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, r(42)(t))
        },
        function (t, e, r) {
            const n = e;
            n.der = r(26), n.pem = r(47)
        },
        function (t, e, r) {
            const n = r(3), i = r(12).Buffer, o = r(13), s = r(15);

            function a(t) {
                o.call(this, "der", t)
            }

            function u(t) {
                return t < 10 ? "0" + t : t
            } (t.exports = function (t) {
                this.enc = "der", this.name = t.name, this.entity = t, this.tree = new a(), this.tree._init(t.body)
            }).prototype.encode = function (t, e) {
                return this.tree._encode(t, e).join()
            }, n(a, o), a.prototype._encodeComposite = function (t, e, r, n) {
                if (r = function (t, e, r, n) {
                    let i;
                    if ("seqof" === t ? t = "seq" : "setof" === t && (t = "set"), s.tagByName.hasOwnProperty(t)) i = s.tagByName[t];
                    else {
                        if ("number" != typeof t || (0 | t) !== t) return n.error("Unknown tag: " + t);
                        i = t
                    }
                    return 31 <= i ? n.error("Multi-octet tag encoding unsupported") : (e || (i |= 32), i |= s.tagClassByName[r || "universal"] << 6, i)
                }(t, e, r, this.reporter), n.length < 128) {
                    const t = i.alloc(2);
                    return t[0] = r, t[1] = n.length, this._createEncoderBuffer([t, n])
                }
                let o = 1;
                for (let t = n.length; 256 <= t; t >>= 8) o++;
                const a = i.alloc(2 + o);
                a[0] = r, a[1] = 128 | o;
                for (let t = 1 + o, e = n.length; 0 < e; t--, e >>= 8) a[t] = 255 & e;
                return this._createEncoderBuffer([a, n])
            }, a.prototype._encodeStr = function (t, e) {
                if ("bitstr" === e) return this._createEncoderBuffer([0 | t.unused, t.data]);
                if ("bmpstr" !== e) return "numstr" === e ? this._isNumstr(t) ? this._createEncoderBuffer(t) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : "printstr" === e ? this._isPrintstr(t) ? this._createEncoderBuffer(t) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : /str$/.test(e) || "objDesc" === e ? this._createEncoderBuffer(t) : this.reporter.error("Encoding of string type: " + e + " unsupported"); {
                    const e = i.alloc(2 * t.length);
                    for (let r = 0; r < t.length; r++) e.writeUInt16BE(t.charCodeAt(r), 2 * r);
                    return this._createEncoderBuffer(e)
                }
            }, a.prototype._encodeObjid = function (t, e, r) {
                if ("string" == typeof t) {
                    if (!e) return this.reporter.error("string objid given, but no values map found");
                    if (!e.hasOwnProperty(t)) return this.reporter.error("objid not found in values map");
                    t = e[t].split(/[\s.]+/g);
                    for (let e = 0; e < t.length; e++) t[e] |= 0
                } else if (Array.isArray(t)) {
                    t = t.slice();
                    for (let e = 0; e < t.length; e++) t[e] |= 0
                }
                if (!Array.isArray(t)) return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(t));
                if (!r) {
                    if (40 <= t[1]) return this.reporter.error("Second objid identifier OOB");
                    t.splice(0, 2, 40 * t[0] + t[1])
                }
                let n = 0;
                for (let e = 0; e < t.length; e++) {
                    let r = t[e];
                    for (n++; 128 <= r; r >>= 7) n++
                }
                const o = i.alloc(n);
                let s = o.length - 1;
                for (let e = t.length - 1; 0 <= e; e--) {
                    let r = t[e];
                    for (o[s--] = 127 & r; 0 < (r >>= 7);) o[s--] = 128 | 127 & r
                }
                return this._createEncoderBuffer(o)
            }, a.prototype._encodeTime = function (t, e) {
                let r;
                const n = new Date(t);
                return "gentime" === e ? r = [u(n.getUTCFullYear()), u(n.getUTCMonth() + 1), u(n.getUTCDate()), u(n.getUTCHours()), u(n.getUTCMinutes()), u(n.getUTCSeconds()), "Z"].join("") : "utctime" === e ? r = [u(n.getUTCFullYear() % 100), u(n.getUTCMonth() + 1), u(n.getUTCDate()), u(n.getUTCHours()), u(n.getUTCMinutes()), u(n.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + e + " time is not supported yet"), this._encodeStr(r, "octstr")
            }, a.prototype._encodeNull = function () {
                return this._createEncoderBuffer("")
            }, a.prototype._encodeInt = function (t, e) {
                if ("string" == typeof t) {
                    if (!e) return this.reporter.error("String int or enum given, but no values map");
                    if (!e.hasOwnProperty(t)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(t));
                    t = e[t]
                }
                if ("number" != typeof t && !i.isBuffer(t)) {
                    const e = t.toArray();
                    !t.sign && 128 & e[0] && e.unshift(0), t = i.from(e)
                }
                if (i.isBuffer(t)) {
                    let e = t.length;
                    0 === t.length && e++;
                    const r = i.alloc(e);
                    return t.copy(r), 0 === t.length && (r[0] = 0), this._createEncoderBuffer(r)
                }
                if (t < 128) return this._createEncoderBuffer(t);
                if (t < 256) return this._createEncoderBuffer([0, t]);
                let r = 1;
                for (let e = t; 256 <= e; e >>= 8) r++;
                const n = new Array(r);
                for (let e = n.length - 1; 0 <= e; e--) n[e] = 255 & t, t >>= 8;
                return 128 & n[0] && n.unshift(0), this._createEncoderBuffer(i.from(n))
            }, a.prototype._encodeBool = function (t) {
                return this._createEncoderBuffer(t ? 255 : 0)
            }, a.prototype._use = function (t, e) {
                return (t = "function" == typeof t ? t(e) : t)._getEncoder("der").tree
            }, a.prototype._skipDefault = function (t, e, r) {
                const n = this._baseState;
                let i;
                if (null === n.
                    default) return !1;
                var o = t.join();
                if (void 0 === n.defaultBuffer && (n.defaultBuffer = this._encodeValue(n.
                    default, e, r).join()), o.length !== n.defaultBuffer.length) return !1;
                for (i = 0; i < o.length; i++)
                    if (o[i] !== n.defaultBuffer[i]) return !1;
                return !0
            }
        },
        function (t, e, r) {
            const n = e;
            n.der = r(28), n.pem = r(48)
        },
        function (t, e, r) {
            const n = r(3), i = r(24), o = r(6).DecoderBuffer, s = r(13), a = r(15);

            function u(t) {
                s.call(this, "der", t)
            }

            function h(t, e) {
                let r = t.readUInt8(e);
                if (t.isError(r)) return r;
                var n = a.tagClass[r >> 6],
                    i = 0 == (32 & r);
                if (31 == (31 & r)) {
                    let n = r;
                    for (r = 0; 128 == (128 & n);) {
                        if (n = t.readUInt8(e), t.isError(n)) return n;
                        r <<= 7, r |= 127 & n
                    }
                } else r &= 31;
                return {
                    cls: n,
                    primitive: i,
                    tag: r,
                    tagStr: a.tag[r]
                }
            }

            function c(t, e, r) {
                let n = t.readUInt8(r);
                if (t.isError(n)) return n;
                if (!e && 128 === n) return null;
                if (0 == (128 & n)) return n;
                var i = 127 & n;
                if (4 < i) return t.error("length octect is too long");
                for (let e = n = 0; e < i; e++) {
                    n <<= 8;
                    var o = t.readUInt8(r);
                    if (t.isError(o)) return o;
                    n |= o
                }
                return n
            } (t.exports = function (t) {
                this.enc = "der", this.name = t.name, this.entity = t, this.tree = new u(), this.tree._init(t.body)
            }).prototype.decode = function (t, e) {
                return o.isDecoderBuffer(t) || (t = new o(t, e)), this.tree._decode(t, e)
            }, n(u, s), u.prototype._peekTag = function (t, e, r) {
                if (t.isEmpty()) return !1;
                var n = t.save(),
                    i = h(t, 'Failed to peek tag: "' + e + '"');
                return t.isError(i) ? i : (t.restore(n), i.tag === e || i.tagStr === e || i.tagStr + "of" === e || r)
            }, u.prototype._decodeTag = function (t, e, r) {
                var n = h(t, 'Failed to decode tag of "' + e + '"');
                if (t.isError(n)) return n;
                let i = c(t, n.primitive, 'Failed to get length of "' + e + '"');
                return t.isError(i) ? i : r || n.tag === e || n.tagStr === e || n.tagStr + "of" === e ? n.primitive || null !== i ? t.skip(i, 'Failed to match body of: "' + e + '"') : (r = t.save(), n = this._skipUntilEnd(t, 'Failed to skip indefinite length body: "' + this.tag + '"'), t.isError(n) ? n : (i = t.offset - r.offset, t.restore(r), t.skip(i, 'Failed to match body of: "' + e + '"'))) : t.error('Failed to match tag: "' + e + '"')
            }, u.prototype._skipUntilEnd = function (t, e) {
                for (; ;) {
                    var r = h(t, e);
                    if (t.isError(r)) return r;
                    var n = c(t, r.primitive, e);
                    if (t.isError(n)) return n;
                    let i;
                    if (i = r.primitive || null !== n ? t.skip(n) : this._skipUntilEnd(t, e), t.isError(i)) return i;
                    if ("end" === r.tagStr) break
                }
            }, u.prototype._decodeList = function (t, e, r, n) {
                const i = [];
                for (; !t.isEmpty();) {
                    var o = this._peekTag(t, "end");
                    if (t.isError(o)) return o;
                    var s = r.decode(t, "der", n);
                    if (t.isError(s) && o) break;
                    i.push(s)
                }
                return i
            }, u.prototype._decodeStr = function (t, e) {
                if ("bitstr" === e) {
                    var r = t.readUInt8();
                    return t.isError(r) ? r : {
                        unused: r,
                        data: t.raw()
                    }
                }
                if ("bmpstr" === e) {
                    const e = t.raw();
                    if (e.length % 2 == 1) return t.error("Decoding of string type: bmpstr length mismatch");
                    let r = "";
                    for (let t = 0; t < e.length / 2; t++) r += String.fromCharCode(e.readUInt16BE(2 * t));
                    return r
                }
                return "numstr" === e ? (r = t.raw().toString("ascii"), this._isNumstr(r) ? r : t.error("Decoding of string type: numstr unsupported characters")) : "octstr" === e || "objDesc" === e ? t.raw() : "printstr" !== e ? /str$/.test(e) ? t.raw().toString() : t.error("Decoding of string type: " + e + " unsupported") : (e = t.raw().toString("ascii"), this._isPrintstr(e) ? e : t.error("Decoding of string type: printstr unsupported characters"))
            }, u.prototype._decodeObjid = function (t, e, r) {
                let n;
                const i = [];
                let o = 0, s = 0;
                for (; !t.isEmpty();) s = t.readUInt8(), o <<= 7, o |= 127 & s, 0 == (128 & s) && (i.push(o), o = 0);
                128 & s && i.push(o);
                const a = i[0] / 40 | 0, u = i[0] % 40;
                if (n = r ? i : [a, u].concat(i.slice(1)), e) {
                    let t = e[n.join(" ")];
                    void 0 === t && (t = e[n.join(".")]), void 0 !== t && (n = t)
                }
                return n
            }, u.prototype._decodeTime = function (t, e) {
                const r = t.raw().toString();
                let n, i, o, s, a, u;
                if ("gentime" === e) n = 0 | r.slice(0, 4), i = 0 | r.slice(4, 6), o = 0 | r.slice(6, 8), s = 0 | r.slice(8, 10), a = 0 | r.slice(10, 12), u = 0 | r.slice(12, 14);
                else {
                    if ("utctime" !== e) return t.error("Decoding " + e + " time is not supported yet");
                    n = 0 | r.slice(0, 2), i = 0 | r.slice(2, 4), o = 0 | r.slice(4, 6), s = 0 | r.slice(6, 8), a = 0 | r.slice(8, 10), u = 0 | r.slice(10, 12), n = n < 70 ? 2e3 + n : 1900 + n
                }
                return Date.UTC(n, i - 1, o, s, a, u, 0)
            }, u.prototype._decodeNull = function () {
                return null
            }, u.prototype._decodeBool = function (t) {
                var e = t.readUInt8();
                return t.isError(e) ? e : 0 !== e
            }, u.prototype._decodeInt = function (t, e) {
                t = t.raw();
                let r = new i(t);
                return e && (r = e[r.toString(10)] || r), r
            }, u.prototype._use = function (t, e) {
                return (t = "function" == typeof t ? t(e) : t)._getDecoder("der").tree
            }
        },
        function (t, e) {
            t.exports = {
                bitSlice(t, e, r) {
                    return t = this._shiftRight(t.slice(e / 32), 32 - (31 & e)).slice(1), void 0 === r ? t : this.clamp(t, r - e)
                }, extract(t, e, r) {
                    let n;
                    var i = Math.floor(-e - r & 31);
                    return n = -32 & (e + r - 1 ^ e) ? t[e / 32 | 0] << 32 - i ^ t[e / 32 + 1 | 0] >>> i : t[e / 32 | 0] >>> i, n & (1 << r) - 1
                }, concat(t, e) {
                    if (0 === t.length || 0 === e.length) return t.concat(e);
                    var r = t[t.length - 1],
                        n = this.getPartial(r);
                    return 32 === n ? t.concat(e) : this._shiftRight(e, n, 0 | r, t.slice(0, t.length - 1))
                }, bitLength(t) {
                    var e = t.length;
                    return 0 === e ? 0 : (t = t[e - 1], 32 * (e - 1) + this.getPartial(t))
                }, clamp(t, e) {
                    if (32 * t.length < e) return t;
                    var r = (t = t.slice(0, Math.ceil(e / 32))).length;
                    return e &= 31, 0 < r && e && (t[r - 1] = this.partial(e, t[r - 1] & 2147483648 >> e - 1, 1)), t
                }, partial: (t, e, r) = > 32 === t ? e : (r ? 0 | e : e << 32 - t) + 1099511627776 * t,
                getPartial: t = > Math.round(t / 1099511627776) || 32,
                equal(t, e) {
                    if (this.bitLength(t) !== this.bitLength(e)) return !1;
                    let r, n = 0;
                    for (r = 0; r < t.length; r++) n |= t[r] ^ e[r];
                    return 0 === n
                },
                _shiftRight(t, e, r, n) {
                    let i;
                    var o;
                    for (void 0 === n && (n = []); 32 <= e; e -= 32) n.push(r), r = 0;
                    if (0 === e) return n.concat(t);
                    for (i = 0; i < t.length; i++) n.push(r | t[i] >>> e), r = t[i] << 32 - e;
                    return o = t.length ? t[t.length - 1] : 0, o = this.getPartial(o), n.push(this.partial(e + o & 31, 32 < e + o ? r : n.pop(), 1)), n
                },
                _xor4: (t, e) = > [t[0] ^ e[0], t[1] ^ e[1], t[2] ^ e[2], t[3] ^ e[3]],
                byteswapM(t) {
                    let e;
                    var r;
                    for (e = 0; e < t.length; ++e) r = t[e], t[e] = r >>> 24 | r >>> 8 & 65280 | (65280 & r) << 8 | r << 24;
                    return t
                },
                bytesFromBits(t) {
                    let e = [];
                    var r = this.bitLength(t);
                    let n, i;
                    for (n = 0; n < r / 8; n++) 0 == (3 & n) && (i = t[n / 4]), e.push(i >>> 24), i <<= 8;
                    return e
                },
                bytesToBits(t) {
                    let e, r = [], n = 0;
                    for (e = 0; e < t.length; e++) n = n << 8 | t[e], 3 == (3 & e) && (r.push(n), n = 0);
                    return 3 & e && r.push(this.partial(8 * (3 & e), n)), r
                }
            }
        },
        function (t, e) {
            t.exports = function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
        },
        function (t, e) {
            function r(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            t.exports = function (t, e, n) {
                return e && r(t.prototype, e), n && r(t, n), t
            }
        },
        function (t, e, r) {
            ! function () {
                var e = r(56),
                    n = r(57),
                    i = {
                        deflate: 8
                    }, o = {
                        fat: 0,
                        amiga: 1,
                        vmz: 2,
                        unix: 3,
                        "vm/cms": 4,
                        atari: 5,
                        hpfs: 6,
                        macintosh: 7,
                        "z-system": 8,
                        cplm: 9,
                        "tops-20": 10,
                        ntfs: 11,
                        qdos: 12,
                        acorn: 13,
                        vfat: 14,
                        vms: 15,
                        beos: 16,
                        tandem: 17,
                        theos: 18
                    };

                function s(t, e) {
                    e.push(255 & t)
                }

                function a(t, e) {
                    e.push(255 & t), e.push(t >>> 8)
                }

                function u(t, e) {
                    a(65535 & t, e), a(t >>> 16, e)
                }

                function h(t) {
                    return t.shift()
                }

                function c(t) {
                    return t.shift() | t.shift() << 8
                }

                function f(t) {
                    var e = c(t);
                    return 32768 < (t = c(t)) ? ((t -= 32768) << 16 | e) + 32768 * Math.pow(2, 16) : t << 16 | e
                }

                function l(t) {
                    for (var e = []; 0 !== t[0];) e.push(String.fromCharCode(t.shift()));
                    return t.shift(), e.join("")
                }
                t.exports = {
                    zip: function (t, r) {
                        var a = 0,
                            h = [],
                            c = (r = r || {}).level || 6;
                        return "string" == typeof t && (t = Array.prototype.map.call(t, (function (t) {
                            return t.charCodeAt(0)
                        }))), s(31, h), s(139, h), s(i.deflate, h), r.name && (a |= 8), s(a, h), u(r.timestamp || parseInt(Date.now() / 1e3, 10), h), s(1 === c ? 4 : 9 === c ? 2 : 0, h), s(o.unix, h), r.name && (function (t, e) {
                            for (var r = t.length, n = 0; n < r; n += 1) s(t.charCodeAt(n), e)
                        }(r.name.substring(r.name.lastIndexOf("/") + 1), h), s(0, h)), n.deflate(t, c).forEach((function (t) {
                            s(t, h)
                        })), u(parseInt(e(t), 16), h), u(t.length, h), h
                    },
                    unzip: function (t, r) {
                        var s, a, u, p = Array.prototype.slice.call(t, 0);
                        if (31 !== h(p) || 139 !== h(p)) throw "Not a GZIP file";
                        if (s = h(p), !(s = Object.keys(i).some((function (t) {
                            return i[a = t] === s
                        })))) throw "Unsupported compression method";
                        if (t = h(p), f(p), h(p), s = h(p), Object.keys(o).some((function (t) {
                            if (o[t] === s) return !0
                        })), 4 & t && function (t, e) {
                            for (var r = [], n = 0; n < e; n += 1) r.push(t.shift())
                        }(p, s = c(p)), 8 & t && l(p), 16 & t && l(p), 2 & t && c(p), "deflate" === a && (u = n.inflate(p.splice(0, p.length - 8))), 1 & t && (u = Array.prototype.map.call(u, (function (t) {
                            return String.fromCharCode(t)
                        })).join("")), f(p) !== parseInt(e(u), 16)) throw "Checksum does not match";
                        if (f(p) !== u.length) throw "Size of decompressed file not correct";
                        return u
                    },
                    get DEFAULT_LEVEL() {
                        return 6
                    }
                }
            }()
        },
        function (t, e) {
            t.exports = function (t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
        },
        function (t, e, r) {
            t = function (t) {
                var e, r = Object.prototype,
                    n = r.hasOwnProperty,
                    i = "function" == typeof Symbol ? Symbol : {}, o = i.iterator || "@@iterator",
                    s = i.asyncIterator || "@@asyncIterator",
                    a = i.toStringTag || "@@toStringTag";

                function u(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (r) {
                    u = function (t, e, r) {
                        return t[e] = r
                    }
                }

                function h(t, r, n, i) {
                    var o, s, a, u;
                    r = r && r.prototype instanceof m ? r : m, r = Object.create(r.prototype), i = new T(i || []);
                    return r._invoke = (o = t, s = n, a = i, u = f, function (t, r) {
                        if (u === p) throw new Error("Generator is already running");
                        if (u === d) {
                            if ("throw" === t) throw r;
                            return k()
                        }
                        for (a.method = t, a.arg = r; ;) {
                            var n = a.delegate;
                            if (n) {
                                var i = function t(r, n) {
                                    var i;
                                    if ((i = r.iterator[n.method]) === e) {
                                        if (n.delegate = null, "throw" === n.method) {
                                            if (r.iterator.
                                                return && (n.method = "return", n.arg = e, t(r, n), "throw" === n.method)) return g;
                                            n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                                        }
                                        return g
                                    }
                                    return "throw" === (i = c(i, r.iterator, n.arg)).type ? (n.method = "throw", n.arg = i.arg, n.delegate = null, g) : (i = i.arg) ? i.done ? (n[r.resultName] = i.value, n.next = r.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, g) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g)
                                }(n, a);
                                if (i) {
                                    if (i === g) continue;
                                    return i
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if (u === f) throw u = d, a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg); if (u = p, "normal" === (i = c(o, s, a)).type) {
                                if (u = a.done ? d : l, i.arg !== g) return {
                                    value: i.arg,
                                    done: a.done
                                }
                            } else "throw" === i.type && (u = d, a.method = "throw", a.arg = i.arg)
                        }
                    }), r
                }

                function c(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = h;
                var f = "suspendedStart",
                    l = "suspendedYield",
                    p = "executing",
                    d = "completed",
                    g = {};

                function m() { }

                function y() { }

                function v() { }
                var w = {};
                u(w, o, (function () {
                    return this
                })), (i = (i = Object.getPrototypeOf) && i(i(A([])))) && i !== r && n.call(i, o) && (w = i);
                var b = v.prototype = m.prototype = Object.create(w);

                function _(t) {
                    ["next", "throw", "return"].forEach((function (e) {
                        u(t, e, (function (t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function M(t, e) {
                    var r;
                    this._invoke = function (i, o) {
                        function s() {
                            return new e((function (r, s) {
                                ! function r(i, o, s, a) {
                                    if ("throw" !== (i = c(t[i], t, o)).type) {
                                        var u = i.arg;
                                        return (o = u.value) && "object" == typeof o && n.call(o, "__await") ? e.resolve(o.__await).then((function (t) {
                                            r("next", t, s, a)
                                        }), (function (t) {
                                            r("throw", t, s, a)
                                        })) : e.resolve(o).then((function (t) {
                                            u.value = t, s(u)
                                        }), (function (t) {
                                            return r("throw", t, s, a)
                                        }))
                                    }
                                    a(i.arg)
                                }(i, o, r, s)
                            }))
                        }
                        return r = r ? r.then(s, s) : s()
                    }
                }

                function S(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function E(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function T(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(S, this), this.reset(!0)
                }

                function A(t) {
                    if (t) {
                        if (r = t[o]) return r.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var r, i = -1;
                            return (r = function r() {
                                for (; ++i < t.length;)
                                    if (n.call(t, i)) return r.value = t[i], r.done = !1, r;
                                return r.value = e, r.done = !0, r
                            }).next = r
                        }
                    }
                    return {
                        next: k
                    }
                }

                function k() {
                    return {
                        value: e,
                        done: !0
                    }
                }
                return u(b, "constructor", y.prototype = v), u(v, "constructor", y), y.displayName = u(v, a, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                    return !!(t = "function" == typeof t && t.constructor) && (t === y || "GeneratorFunction" === (t.displayName || t.name))
                }, t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, u(t, a, "GeneratorFunction")), t.prototype = Object.create(b), t
                }, t.awrap = function (t) {
                    return {
                        __await: t
                    }
                }, _(M.prototype), u(M.prototype, s, (function () {
                    return this
                })), t.AsyncIterator = M, t.async = function (e, r, n, i, o) {
                    void 0 === o && (o = Promise);
                    var s = new M(h(e, r, n, i), o);
                    return t.isGeneratorFunction(r) ? s : s.next().then((function (t) {
                        return t.done ? t.value : s.next()
                    }))
                }, _(b), u(b, a, "Generator"), u(b, o, (function () {
                    return this
                })), u(b, "toString", (function () {
                    return "[object Generator]"
                })), t.keys = function (t) {
                    var e, r = [];
                    for (e in t) r.push(e);
                    return r.reverse(),
                        function e() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = A, T.prototype = {
                    constructor: T,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(E), !t)
                            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var r = this;

                        function i(n, i) {
                            return a.type = "throw", a.arg = t, r.next = n, i && (r.method = "next", r.arg = e), !!i
                        }
                        for (var o = this.tryEntries.length - 1; 0 <= o; --o) {
                            var s = this.tryEntries[o],
                                a = s.completion;
                            if ("root" === s.tryLoc) return i("end");
                            if (s.tryLoc <= this.prev) {
                                var u = n.call(s, "catchLoc"),
                                    h = n.call(s, "finallyLoc");
                                if (u && h) {
                                    if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
                                    if (this.prev < s.finallyLoc) return i(s.finallyLoc)
                                } else if (u) {
                                    if (this.prev < s.catchLoc) return i(s.catchLoc, !0)
                                } else {
                                    if (!h) throw new Error("try statement without catch or finally");
                                    if (this.prev < s.finallyLoc) return i(s.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                            var i = this.tryEntries[r];
                            if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        var s = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
                        return s.type = t, s.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, g) : this.complete(s)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), g
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), g
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n, i = r.completion;
                                return "throw" === i.type && (n = i.arg, E(r)), n
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (t, r, n) {
                        return this.delegate = {
                            iterator: A(t),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = e), g
                    }
                }, t
            }(t.exports);
            try {
                regeneratorRuntime = t
            } catch (e) {
                "object" == typeof globalThis ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t)
            }
        },
        function (t, e) {
            var r, n;
            r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
                rotl: function (t, e) {
                    return t << e | t >>> 32 - e
                },
                rotr: function (t, e) {
                    return t << 32 - e | t >>> e
                },
                endian: function (t) {
                    if (t.constructor == Number) return 16711935 & n.rotl(t, 8) | 4278255360 & n.rotl(t, 24);
                    for (var e = 0; e < t.length; e++) t[e] = n.endian(t[e]);
                    return t
                },
                randomBytes: function (t) {
                    for (var e = []; 0 < t; t--) e.push(Math.floor(256 * Math.random()));
                    return e
                },
                bytesToWords: function (t) {
                    for (var e = [], r = 0, n = 0; r < t.length; r++, n += 8) e[n >>> 5] |= t[r] << 24 - n % 32;
                    return e
                },
                wordsToBytes: function (t) {
                    for (var e = [], r = 0; r < 32 * t.length; r += 8) e.push(t[r >>> 5] >>> 24 - r % 32 & 255);
                    return e
                },
                bytesToHex: function (t) {
                    for (var e = [], r = 0; r < t.length; r++) e.push((t[r] >>> 4).toString(16)), e.push((15 & t[r]).toString(16));
                    return e.join("")
                },
                hexToBytes: function (t) {
                    for (var e = [], r = 0; r < t.length; r += 2) e.push(parseInt(t.substr(r, 2), 16));
                    return e
                },
                bytesToBase64: function (t) {
                    for (var e = [], n = 0; n < t.length; n += 3)
                        for (var i = t[n] << 16 | t[n + 1] << 8 | t[n + 2], o = 0; o < 4; o++) 8 * n + 6 * o <= 8 * t.length ? e.push(r.charAt(i >>> 6 * (3 - o) & 63)) : e.push("=");
                    return e.join("")
                },
                base64ToBytes: function (t) {
                    t = t.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var e = [], n = 0, i = 0; n < t.length; i = ++n % 4) 0 != i && e.push((r.indexOf(t.charAt(n - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | r.indexOf(t.charAt(n)) >>> 6 - 2 * i);
                    return e
                }
            }, t.exports = n
        },
        function (t, e) {
            function r(t) {
                return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
            }
            t.exports = function (t) {
                return null != t && (r(t) || "function" == typeof (e = t).readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0)) || !!t._isBuffer);
                var e
            }
        },
        function (t, e) {
            var r = function () {
                return this
            }();
            try {
                r = r || new Function("return this")()
            } catch (t) {
                "object" == typeof window && (r = window)
            }
            t.exports = r
        },
        function (t, e) {
            e.read = function (t, e, r, n, i) {
                var o, s, a = 8 * i - n - 1,
                    u = (1 << a) - 1,
                    h = u >> 1,
                    c = -7,
                    f = r ? i - 1 : 0,
                    l = r ? -1 : 1;
                r = t[e + f];
                for (f += l, o = r & (1 << -c) - 1, r >>= -c, c += a; 0 < c; o = 256 * o + t[e + f], f += l, c -= 8);
                for (s = o & (1 << -c) - 1, o >>= -c, c += n; 0 < c; s = 256 * s + t[e + f], f += l, c -= 8);
                if (0 === o) o = 1 - h;
                else {
                    if (o === u) return s ? NaN : 1 / 0 * (r ? -1 : 1);
                    s += Math.pow(2, n), o -= h
                }
                return (r ? -1 : 1) * s * Math.pow(2, o - n)
            }, e.write = function (t, e, r, n, i, o) {
                var s, a, u = 8 * o - i - 1,
                    h = (1 << u) - 1,
                    c = h >> 1,
                    f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    l = n ? 0 : o - 1,
                    p = n ? 1 : -1;
                o = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (n = Math.pow(2, -s)) < 1 && (s--, n *= 2), 2 <= (e += 1 <= s + c ? f / n : f * Math.pow(2, 1 - c)) * n && (s++, n /= 2), h <= s + c ? (a = 0, s = h) : 1 <= s + c ? (a = (e * n - 1) * Math.pow(2, i), s += c) : (a = e * Math.pow(2, c - 1) * Math.pow(2, i), s = 0)); 8 <= i; t[r + l] = 255 & a, l += p, a /= 256, i -= 8);
                for (s = s << i | a, u += i; 0 < u; t[r + l] = 255 & s, l += p, s /= 256, u -= 8);
                t[r + l - p] |= 128 * o
            }
        },
        function (t, e) {
            var r = {}.toString;
            t.exports = Array.isArray || function (t) {
                return "[object Array]" == r.call(t)
            }
        },
        function (t, e, r) {
            const n = r(11), i = new (r(9))(), o = new n(), s = r(22);

            function a(t, e) {
                const r = new Array(2 + t.length + 192);
                var n = 8 * t.length;
                r[0] = n >> 8 & 255, r[1] = 255 & n;
                for (let e = 0; e < t.length; e++) r[2 + e] = t[e];
                let a = 2 + t.length;
                var u = s.normalize(i.a.toByteArray());
                for (let t = 0; t < u.length; t++) r[a + t] = (u[t] >>> 0) % 256;
                a += u.length;
                var h = s.normalize(i.b.toByteArray());
                for (let t = 0; t < h.length; t++) r[a + t] = (h[t] >>> 0) % 256;
                a += h.length;
                var c = s.normalize(i.Gx.toByteArray());
                for (let t = 0; t < c.length; t++) r[a + t] = (c[t] >>> 0) % 256;
                a += c.length;
                var f = s.normalize(i.Gy.toByteArray());
                for (let t = 0; t < f.length; t++) r[a + t] = (f[t] >>> 0) % 256;
                a += f.length;
                var l = s.normalize(e.getX().toByteArray());
                for (let t = 0; t < l.length; t++) r[a + t] = (l[t] >>> 0) % 256;
                a += l.length;
                var p = s.normalize(e.getY().toByteArray());
                for (let t = 0; t < p.length; t++) r[a + t] = (p[t] >>> 0) % 256;
                return a += p.length, o.init(), o.update(r), o.final()
            }
            t.exports = {
                SM2MessageDigest: function (t, e, r) {
                    return r = a(e, r), o.init(), o.update(r), o.update(t), o.final()
                },
                SM2GetZ: a,
                kdf: function (t, e) {
                    if (137438953440 < e) return -1;
                    if (1024 < t.length) return -1;
                    let r = 1, n = e;
                    var i;
                    const s = [];
                    let a = 0;
                    for (t.push((r >>> 24) % 256), t.push((r >>> 16) % 256), t.push((r >>> 8) % 256), t.push((r >>> 0) % 256); 0 < n;) {
                        if (o.init(), o.update(t), i = o.final(), n <= 32)
                            for (let t = 0; t < n; t++) s[a + t] = i[t];
                        else {
                            var u = 32 <= e ? 32 : e;
                            for (let t = 0; t < u; t++) s[a + t] = i[t]
                        }
                        n -= 32, a += 32, r++, t[t.length - 4] = (r >>> 24) % 256, t[t.length - 3] = (r >>> 16) % 256, t[t.length - 2] = (r >>> 8) % 256, t[t.length - 1] = (r >>> 0) % 256
                    }
                    return s
                }
            }
        },
        function (t, e, r) {
            const n = r(8).BigInteger, i = r(9), o = r(20);
            t.exports = class {
                constructor() {
                    this.curve = new i(), this.G = new o("32C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7", "BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0"), this.zero = new n("0"), this.one = new n("1"), this.two = new n("2"), this.three = new n("3"), this.infinity = new o(null, null), this.preCompute()
                }
                preCompute() {
                    const t = new Map();
                    for (let e = 1; e < 256; e++) t.set("" + e, this.preComputeMultiplyG(new n("" + e)));
                    this.map = t
                }
                preComputeMultiplyG(t) {
                    if (t.equals(this.one)) return this.G;
                    let e = this.G;
                    for (let r = t.bitLength() - 2; 0 <= r; r--) e = this.ECPointDoubling(e), 1 == t.testBit(r) && (e = this.ECPointAdd(e, this.G));
                    return e
                }
                ECPointAdd(t, e) {
                    var r = this.curve.p;
                    if (t.isInfinity()) return e;
                    if (e.isInfinity()) return t;
                    const n = t.X, i = t.Y, s = t.Z, a = e.X, u = e.Y;
                    var h = e.Z;
                    const c = n.multiply(h).mod(r);
                    var f = a.multiply(s).mod(r);
                    const l = c.subtract(f), p = i.multiply(h).mod(r);
                    e = u.multiply(s).mod(r);
                    const d = p.subtract(e);
                    if (this.zero.equals(l)) return this.zero.equals(d) ? this.ECPointDoubling(t) : this.infinity;
                    const g = c.add(f), m = s.multiply(h).mod(r), y = l.square().mod(r), v = l.multiply(y).mod(r);
                    return f = m.multiply(d.square()).subtract(g.multiply(y)).mod(r), h = l.multiply(f).mod(r), f = d.multiply(y.multiply(c).subtract(f)).subtract(p.multiply(v)).mod(r), r = v.multiply(m).mod(r), new o(h, f, r)
                }
                ECPointDoubling(t) {
                    if (t.isInfinity()) return t;
                    if (!t.Y.signum()) return this.infinity;
                    const e = t.X, r = t.Y, n = t.Z;
                    var i = this.curve.p;
                    const s = this.curve.a, a = e.square().multiply(this.three).add(s.multiply(n.square())).mod(i), u = r.shiftLeft(1).multiply(n).mod(i), h = r.square().mod(i), c = h.multiply(e).multiply(n).mod(i), f = u.square().mod(i);
                    var l = a.square().subtract(c.shiftLeft(3)).mod(i);
                    t = u.multiply(l).mod(i), l = a.multiply(c.shiftLeft(2).subtract(l)).subtract(f.shiftLeft(1).multiply(h)).mod(i), i = u.multiply(f).mod(i);
                    return new o(t, l, i)
                }
                ECPointMultiply(t, e) {
                    if (e.equals(this.one)) return t;
                    let r = t;
                    for (let n = e.bitLength() - 2; 0 <= n; n--) r = this.ECPointDoubling(r), 1 == e.testBit(n) && (r = this.ECPointAdd(r, t));
                    return r
                }
                ECPointMultiplyG(t) {
                    if (t.equals(this.one)) return this.G;
                    var e = t.bitLength(),
                        r = e % 8 == 0 ? 8 : e % 8;
                    let n = this.map.get(t.shiftRight(e - r).toString());
                    for (let e = t.bitLength() - r - 1; 0 < e; e -= 8) {
                        n = this.ECPointDoubling(n), n = this.ECPointDoubling(n), n = this.ECPointDoubling(n), n = this.ECPointDoubling(n), n = this.ECPointDoubling(n), n = this.ECPointDoubling(n), n = this.ECPointDoubling(n), n = this.ECPointDoubling(n);
                        let r = 0;
                        for (let n = 0; n < 8; n++) r *= 2, t.testBit(e - n) && (r += 1);
                        0 !== r && (n = this.ECPointAdd(n, this.map.get("" + r)))
                    }
                    return n
                }
                ECPointIsOnCurve(t) {
                    const e = t.Y.multiply(t.Y).mod(this.curve.p);
                    return t = t.X.multiply(t.X).multiply(t.X).add(t.X.multiply(this.curve.a)).add(this.curve.b).mod(this.curve.p), e.equals(t)
                }
            }
        },
        function (t, e) {
            t.exports = function (t) {
                return t.webpackPolyfill || (t.deprecate = function () { }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                    enumerable: !0,
                    get: function () {
                        return t.l
                    }
                }), Object.defineProperty(t, "id", {
                    enumerable: !0,
                    get: function () {
                        return t.i
                    }
                }), t.webpackPolyfill = 1), t
            }
        },
        function (t, e) { },
        function (t, e, r) {
            const n = r(25), i = r(27), o = r(3);

            function s(t, e) {
                this.name = t, this.body = e, this.decoders = {}, this.encoders = {}
            }
            e.define = function (t, e) {
                return new s(t, e)
            }, s.prototype._createNamed = function (t) {
                const e = this.name;

                function r(t) {
                    this._initNamed(t, e)
                }
                return o(r, t), r.prototype._initNamed = function (e, r) {
                    t.call(this, e, r)
                }, new r(this)
            }, s.prototype._getDecoder = function (t) {
                return this.decoders.hasOwnProperty(t = t || "der") || (this.decoders[t] = this._createNamed(i[t])), this.decoders[t]
            }, s.prototype.decode = function (t, e, r) {
                return this._getDecoder(e).decode(t, r)
            }, s.prototype._getEncoder = function (t) {
                return this.encoders.hasOwnProperty(t = t || "der") || (this.encoders[t] = this._createNamed(n[t])), this.encoders[t]
            }, s.prototype.encode = function (t, e, r) {
                return this._getEncoder(e).encode(t, r)
            }
        },
        function (t, e) {
            var r, n;
            t = t.exports = {};

            function i() {
                throw new Error("setTimeout has not been defined")
            }

            function o() {
                throw new Error("clearTimeout has not been defined")
            }

            function s(t) {
                if (r === setTimeout) return setTimeout(t, 0);
                if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);
                try {
                    return r(t, 0)
                } catch (e) {
                    try {
                        return r.call(null, t, 0)
                    } catch (e) {
                        return r.call(this, t, 0)
                    }
                }
            } ! function () {
                try {
                    r = "function" == typeof setTimeout ? setTimeout : i
                } catch (t) {
                    r = i
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (t) {
                    n = o
                }
            }();
            var a, u = [],
                h = !1,
                c = -1;

            function f() {
                h && a && (h = !1, a.length ? u = a.concat(u) : c = -1, u.length && l())
            }

            function l() {
                if (!h) {
                    var t = s(f);
                    h = !0;
                    for (var e = u.length; e;) {
                        for (a = u, u = []; ++c < e;) a && a[c].run();
                        c = -1, e = u.length
                    }
                    a = null, h = !1,
                        function (t) {
                            if (n === clearTimeout) return clearTimeout(t);
                            if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
                            try {
                                n(t)
                            } catch (e) {
                                try {
                                    return n.call(null, t)
                                } catch (e) {
                                    return n.call(this, t)
                                }
                            }
                        }(t)
                }
            }

            function p(t, e) {
                this.fun = t, this.array = e
            }

            function d() { }
            t.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (1 < arguments.length)
                    for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                u.push(new p(t, e)), 1 !== u.length || h || s(l)
            }, p.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, t.title = "browser", t.browser = !0, t.env = {}, t.argv = [], t.version = "", t.versions = {}, t.on = d, t.addListener = d, t.once = d, t.off = d, t.removeListener = d, t.removeAllListeners = d, t.emit = d, t.prependListener = d, t.prependOnceListener = d, t.listeners = function (t) {
                return []
            }, t.binding = function (t) {
                throw new Error("process.binding is not supported")
            }, t.cwd = function () {
                return "/"
            }, t.chdir = function (t) {
                throw new Error("process.chdir is not supported")
            }, t.umask = function () {
                return 0
            }
        },
        function (t, e) {
            (t.exports = function (t, e) {
                if (!t) throw new Error(e || "Assertion failed")
            }).equal = function (t, e, r) {
                if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e)
            }
        },
        function (t, e, r) {
            const n = r(3), i = r(26);

            function o(t) {
                i.call(this, t), this.enc = "pem"
            }
            n(o, i), (t.exports = o).prototype.encode = function (t, e) {
                const r = i.prototype.encode.call(this, t).toString("base64"), n = ["-----BEGIN " + e.label + "-----"];
                for (let t = 0; t < r.length; t += 64) n.push(r.slice(t, t + 64));
                return n.push("-----END " + e.label + "-----"), n.join("\n")
            }
        },
        function (t, e, r) {
            const n = r(3), i = r(12).Buffer, o = r(28);

            function s(t) {
                o.call(this, t), this.enc = "pem"
            }
            n(s, o), (t.exports = s).prototype.decode = function (t, e) {
                const r = t.toString().split(/[\r\n]+/g);
                var n = e.label.toUpperCase(),
                    s = /^-----(BEGIN|END) ([^-]+)-----$/;
                let a = -1, u = -1;
                for (let t = 0; t < r.length; t++) {
                    var h = r[t].match(s);
                    if (null !== h && h[2] === n) {
                        if (-1 !== a) {
                            if ("END" !== h[1]) break;
                            u = t;
                            break
                        }
                        if ("BEGIN" !== h[1]) break;
                        a = t
                    }
                }
                if (-1 === a || -1 === u) throw new Error("PEM section not found for: " + n);
                const c = r.slice(a + 1, u).join("");
                return c.replace(/[^a-z0-9+/=]+/gi, ""), t = i.from(c, "base64"), o.prototype.decode.call(this, t, e)
            }
        },
        function (t, e, r) {
            const n = e;
            n.Reporter = r(14).Reporter, n.DecoderBuffer = r(6).DecoderBuffer, n.EncoderBuffer = r(6).EncoderBuffer, n.Node = r(13)
        },
        function (t, e, r) {
            const n = e;
            n._reverse = function (t) {
                const e = {};
                return Object.keys(t).forEach((function (r) {
                    (0 | r) == r && (r |= 0);
                    var n = t[r];
                    e[n] = r
                })), e
            }, n.der = r(15)
        },
        function (t, e, r) {
            const n = r(52), i = r(29), o = r(5), s = Uint8Array.from([214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5, 43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153, 156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98, 228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166, 71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168, 104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53, 30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135, 212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158, 234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161, 224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227, 29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111, 213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81, 141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216, 10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176, 137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132, 24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72]), a = Uint32Array.from([462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337, 4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753, 1213159005, 1684763257]), u = Uint32Array.from([2746333894, 1453994832, 1736282519, 2993693404]), h = {
                base64: "byteArrayToBase64",
                hex: "byteArrayToHex",
                text: "utf8ByteArrayToString",
                bytes: "byteArrayToByteArray"
            }, c = {
                base64: "base64ToByteArray",
                hex: "hexToByteArray",
                text: "stringToByteArrayInUtf8",
                bytes: "byteArrayToByteArray"
            };
            t.exports = class {
                constructor(t) {
                    let e = t.key;
                    if ("string" == typeof e && (e = o.stringToByteArrayInUtf8(e)), 16 !== e.length) throw new Error("key should be a 16 bytes string");
                    this.key = e;
                    let r = t.adata || "";
                    "string" == typeof r && (r = o.stringToByteArrayInUtf8(r)), this.adata = r, this.tlen = "number" == typeof t.tlen ? t.tlen : 128;
                    let n = new Uint8Array(0);
                    if (void 0 !== t.iv && null !== t.iv && (n = t.iv, "string" == typeof n && (n = o.stringToByteArrayInUtf8(n)), 16 !== n.length)) throw new Error("iv should be a 16 bytes string");
                    this.iv = n, 0 <= [this.mode = "cbc", "ecb", "gcm"].indexOf(t.mode) && (this.mode = t.mode), 0 <= [this.paddingMode = "PKCS7"].indexOf(t.padding) && (this.paddingMode = t.padding), 0 <= ["base64", "text", this.cipherType = "hex", "bytes"].indexOf(t.cipherType) && (this.cipherType = t.cipherType), this.encryptRoundKeys = new Uint32Array(32), this.spawnEncryptRoundKeys(), this.decryptRoundKeys = Uint32Array.from(this.encryptRoundKeys), this.decryptRoundKeys.reverse()
                }
                doBlockCrypt(t, e) {
                    e = e || this.encryptRoundKeys;
                    const r = new Uint32Array(36);
                    r.set(t, 0);
                    for (let t = 0; t < 32; t++) r[t + 4] = r[t] ^ this.tTransform1(r[t + 1] ^ r[t + 2] ^ r[t + 3] ^ e[t]);
                    const n = new Uint32Array(4);
                    return n[0] = r[35], n[1] = r[34], n[2] = r[33], n[3] = r[32], n
                }
                spawnEncryptRoundKeys() {
                    const t = new Uint32Array(4);
                    t[0] = this.key[0] << 24 | this.key[1] << 16 | this.key[2] << 8 | this.key[3], t[1] = this.key[4] << 24 | this.key[5] << 16 | this.key[6] << 8 | this.key[7], t[2] = this.key[8] << 24 | this.key[9] << 16 | this.key[10] << 8 | this.key[11], t[3] = this.key[12] << 24 | this.key[13] << 16 | this.key[14] << 8 | this.key[15];
                    const e = new Uint32Array(36);
                    e[0] = t[0] ^ u[0], e[1] = t[1] ^ u[1], e[2] = t[2] ^ u[2], e[3] = t[3] ^ u[3];
                    for (let t = 0; t < 32; t++) e[t + 4] = e[t] ^ this.tTransform2(e[t + 1] ^ e[t + 2] ^ e[t + 3] ^ a[t]), this.encryptRoundKeys[t] = e[t + 4]
                }
                rotateLeft(t, e) {
                    return t << e | t >>> 32 - e
                }
                linearTransform1(t) {
                    return t ^ this.rotateLeft(t, 2) ^ this.rotateLeft(t, 10) ^ this.rotateLeft(t, 18) ^ this.rotateLeft(t, 24)
                }
                linearTransform2(t) {
                    return t ^ this.rotateLeft(t, 13) ^ this.rotateLeft(t, 23)
                }
                tauTransform(t) {
                    return s[t >>> 24 & 255] << 24 | s[t >>> 16 & 255] << 16 | s[t >>> 8 & 255] << 8 | s[255 & t]
                }
                tTransform1(t) {
                    return t = this.tauTransform(t), this.linearTransform1(t)
                }
                tTransform2(t) {
                    return t = this.tauTransform(t), this.linearTransform2(t)
                }
                padding(t) {
                    if (null === t) return null;
                    var e = 16 - t.length % 16;
                    const r = new Uint8Array(t.length + e);
                    return r.set(t, 0), r.fill(e, t.length), r
                }
                dePadding(t) {
                    if (null === t) return null;
                    var e = t[t.length - 1];
                    return t.slice(0, t.length - e)
                }
                uint8ToUint32Block(t, e = 0) {
                    const r = new Uint32Array(4);
                    return r[0] = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3], r[1] = t[e + 4] << 24 | t[e + 5] << 16 | t[e + 6] << 8 | t[e + 7], r[2] = t[e + 8] << 24 | t[e + 9] << 16 | t[e + 10] << 8 | t[e + 11], r[3] = t[e + 12] << 24 | t[e + 13] << 16 | t[e + 14] << 8 | t[e + 15], r
                }
                encrypt(t) {
                    "string" == typeof t && (t = o.stringToByteArrayInUtf8(t));
                    var e = this.padding(t),
                        r = e.length / 16;
                    const s = new Uint8Array(e.length);
                    let a, u;
                    if ("cbc" === this.mode) {
                        if (null === this.iv || 16 !== this.iv.length) throw new Error("iv error");
                        let t = this.uint8ToUint32Block(this.iv);
                        for (let n = 0; n < r; n++) {
                            var c = 16 * n,
                                f = this.uint8ToUint32Block(e, c);
                            t[0] = t[0] ^ f[0], t[1] = t[1] ^ f[1], t[2] = t[2] ^ f[2], t[3] = t[3] ^ f[3];
                            var l = this.doBlockCrypt(t, this.encryptRoundKeys);
                            t = l;
                            for (let t = 0; t < 16; t++) s[c + t] = l[parseInt(t / 4, 10)] >> (3 - t) % 4 * 8 & 255
                        }
                    } else if ("gcm" === this.mode) t = n.encrypt(this, i.bytesToBits(t), i.bytesToBits(this.iv), i.bytesToBits(this.adata), this.tlen), a = new Uint8Array(i.bytesFromBits(t.data)), u = new Uint8Array(i.bytesFromBits(t.tag));
                    else
                        for (let t = 0; t < r; t++) {
                            var p = 16 * t,
                                d = this.uint8ToUint32Block(e, p),
                                g = this.doBlockCrypt(d, this.encryptRoundKeys);
                            for (let t = 0; t < 16; t++) s[p + t] = g[parseInt(t / 4, 10)] >> (3 - t) % 4 * 8 & 255
                        }
                    return "gcm" === this.mode ? {
                        cipherText: o[h[this.cipherType || "base64"]](a),
                        tag: o[h[this.cipherType || "base64"]](u)
                    } : o[h[this.cipherType || "base64"]](s)
                }
                decrypt(t, e = "") {
                    var r = o[c[this.cipherType || "base64"]](t),
                        s = (e = o[c[this.cipherType || "base64"]](e), r.length / 16);
                    let a = new Uint8Array(r.length);
                    if ("cbc" === this.mode) {
                        if (null === this.iv || 16 !== this.iv.length) throw new Error("iv error");
                        let t = this.uint8ToUint32Block(this.iv);
                        for (let e = 0; e < s; e++) {
                            var u = 16 * e,
                                h = this.uint8ToUint32Block(r, u),
                                f = this.doBlockCrypt(h, this.decryptRoundKeys);
                            const n = new Uint32Array(4);
                            n[0] = t[0] ^ f[0], n[1] = t[1] ^ f[1], n[2] = t[2] ^ f[2], n[3] = t[3] ^ f[3], t = h;
                            for (let t = 0; t < 16; t++) a[u + t] = n[parseInt(t / 4, 10)] >> (3 - t) % 4 * 8 & 255
                        }
                    } else if ("gcm" === this.mode) {
                        var l = n.decrypt(this, i.bytesToBits([...r, ...e]), i.bytesToBits(this.iv), i.bytesToBits(this.adata), this.tlen);
                        a = new Uint8Array(i.bytesFromBits(l))
                    } else
                        for (let t = 0; t < s; t++) {
                            var p = 16 * t,
                                d = this.uint8ToUint32Block(r, p),
                                g = this.doBlockCrypt(d, this.decryptRoundKeys);
                            for (let t = 0; t < 16; t++) a[p + t] = g[parseInt(t / 4, 10)] >> (3 - t) % 4 * 8 & 255
                        }
                    return l = this.dePadding(a), l = "gcm" === this.mode ? a : l, "bytes" === this.cipherType ? l : o.utf8ByteArrayToString(l)
                }
            }
        },
        function (t, e, r) {
            const n = r(29);
            t.exports = {
                name: "gcm",
                encrypt(t, e, r, n, i) {
                    return e = e.slice(0), this._ctrMode(!0, t, e, n = n || [], r, i = i || 128)
                },
                decrypt(t, e, r, i, o) {
                    let s, a = e.slice(0);
                    const u = n;
                    if (i = i || [], a = (o = o || 128) <= (e = u.bitLength(a)) ? (s = u.bitSlice(a, e - o), u.bitSlice(a, 0, e - o)) : (s = a, []), o = this._ctrMode(!1, t, a, i, r, o), !u.equal(o.tag, s)) throw new Error("gcm: tag doesn't match");
                    return o.data
                },
                _galoisMultiply(t, e) {
                    let r, i;
                    var o;
                    let s, a;
                    const u = n._xor4;
                    for (s = [0, 0, 0, 0], a = e.slice(0), r = 0; r < 128; r++) {
                        for (0 != (t[Math.floor(r / 32)] & 1 << 31 - r % 32) && (s = u(s, a)), o = 0 != (1 & a[3]), i = 3; 0 < i; i--) a[i] = a[i] >>> 1 | (1 & a[i - 1]) << 31;
                        a[0] = a[0] >>> 1, o && (a[0] = a[0] ^ 225 << 24)
                    }
                    return s
                },
                _ghash(t, e, r) {
                    let n, i;
                    var o = r.length;
                    for (n = e.slice(0), i = 0; i < o; i += 4) n[0] ^= 4294967295 & r[i], n[1] ^= 4294967295 & r[i + 1], n[2] ^= 4294967295 & r[i + 2], n[3] ^= 4294967295 & r[i + 3], n = this._galoisMultiply(n, t);
                    return n
                },
                _ctrMode(t, e, r, i, o, s) {
                    var a, u, h, c, f;
                    let l, p, d, g, m, y;
                    const v = n;
                    for (u = r.length, h = v.bitLength(r), c = v.bitLength(i), f = v.bitLength(o), a = e.doBlockCrypt(new Uint32Array([0, 0, 0, 0])), l = 96 === f ? (l = o.slice(0), v.concat(l, [1])) : (l = this._ghash(a, [0, 0, 0, 0], o), this._ghash(a, l, [0, 0, Math.floor(f / 4294967296), 4294967295 & f])), p = this._ghash(a, [0, 0, 0, 0], i), m = l.slice(0), y = p.slice(0), t || (y = this._ghash(a, p, r)), g = 0; g < u; g += 4) m[3]++, d = e.doBlockCrypt(new Uint32Array(m)), r[g] ^= d[0], r[g + 1] ^= d[1], r[g + 2] ^= d[2], r[g + 3] ^= d[3];
                    return r = v.clamp(r, h), t && (y = this._ghash(a, p, r)), h = [Math.floor(c / 4294967296), 4294967295 & c, Math.floor(h / 4294967296), 4294967295 & h], y = this._ghash(a, y, h), d = e.doBlockCrypt(new Uint32Array(l)), y[0] ^= d[0], y[1] ^= d[1], y[2] ^= d[2], y[3] ^= d[3], {
                        tag: v.bitSlice(y, 0, s),
                        data: r
                    }
                }
            }
        },
        function (t, e, r) {
            (function (e) {
                const n = r(54), i = r(55), o = r(18), s = r(5);
                t.exports = {
                    genCsr: function ({
                        countryName: t,
                        province: r,
                        localityName: a,
                        organizationName: u,
                        organizationUnitName: h,
                        commonName: c,
                        email: f,
                        challengePassword: l,
                        publicKey: p,
                        privateKey: d
                    }) {
                        const g = {
                            certificationRequestInfo: {
                                version: 0,
                                subject: {
                                    type: "rdnSequence",
                                    value: []
                                },
                                subjectPKInfo: {
                                    algorithm: {
                                        algorithm: n.ECCPubKey.split("."),
                                        subAlgorithm: n.SM2ECC.split(".")
                                    },
                                    subjectPublicKey: {
                                        data: e.from(p, "hex")
                                    }
                                },
                                attributes: {
                                    type: n.ChallengePassword.split("."),
                                    values: []
                                }
                            },
                            signatureAlgorithm: {
                                algorithm: n.SM2SigningWithSM3.split(".")
                            },
                            signature: {
                                data: ""
                            }
                        };
                        return t && (g.certificationRequestInfo.subject.value = [
                            [{
                                type: n.CountryName.split("."),
                                value: {
                                    type: "printableString",
                                    value: t
                                }
                            }]
                        ]), r && g.certificationRequestInfo.subject.value.push([{
                            type: n.StateOrProvinceName.split("."),
                            value: {
                                type: "utf8String",
                                value: r
                            }
                        }]), a && g.certificationRequestInfo.subject.value.push([{
                            type: n.LocalityName.split("."),
                            value: {
                                type: "utf8String",
                                value: a
                            }
                        }]), u && g.certificationRequestInfo.subject.value.push([{
                            type: n.OrganizationName.split("."),
                            value: {
                                type: "utf8String",
                                value: u
                            }
                        }]), h && g.certificationRequestInfo.subject.value.push([{
                            type: n.OrganizationalUnitName.split("."),
                            value: {
                                type: "utf8String",
                                value: h
                            }
                        }]), c && g.certificationRequestInfo.subject.value.push([{
                            type: n.CommonName.split("."),
                            value: {
                                type: "utf8String",
                                value: c
                            }
                        }]), f && g.certificationRequestInfo.subject.value.push([{
                            type: n.Email.split("."),
                            value: {
                                type: "ia5String",
                                value: f
                            }
                        }]), l && (g.certificationRequestInfo.attributes.values = [{
                            type: "utf8String",
                            value: l
                        }]), d = function (t, e, r) {
                            const n = new o(), i = s.stringToByteArrayInUtf8("1234567812345678");
                            return n.sign(t, e, r, i)
                        }(p, d, i.CertificationRequestInfo.encode(g.certificationRequestInfo, "der")), g.signature = {
                            data: e.from(d, "hex")
                        }, d = i.CertificationRequest.encode(g, "der"), `-----BEGIN CERTIFICATE REQUEST-----\n$ {
							s.byteArrayToBase64(d)
						}\
						n-----END CERTIFICATE REQUEST-----`
                    }
                }
            }).call(this, r(10).Buffer)
        },
        function (t, e) {
            t.exports = {
                CommonName: "2.5.4.3",
                CountryName: "2.5.4.6",
                LocalityName: "2.5.4.7",
                StateOrProvinceName: "2.5.4.8",
                StreetAddress: "2.5.4.9",
                OrganizationName: "2.5.4.10",
                OrganizationalUnitName: "2.5.4.11",
                SM2SigningWithSM3: "1.2.156.10197.1.501",
                ECCPubKey: "1.2.840.10045.2.1",
                SM2ECC: "1.2.156.10197.1.301",
                ChallengePassword: "1.2.840.113549.1.9.7",
                Email: "1.2.840.113549.1.9.1",
                SM2KeyExchangeTempPubkey: "1.2.840.113549.1.9.63",
                AuthorityInformationAccess: "1.3.6.1.5.5.7.1.1",
                AuthorityKeyIdentifier: "2.5.29.35",
                SubjectKeyIdentifier: "2.5.29.14",
                keyUsage: "2.5.29.15",
                CRLDistributionPoints: "2.5.29.31",
                BasicConstraints: "2.5.29.19",
                ExtKeyUsage: "2.5.29.37"
            }
        },
        function (t, e, r) {
            const n = r(23), i = e, o = n.define("AlgorithmIdentifier", (function () {
                this.seq().obj(this.key("algorithm").objid(), this.key("subAlgorithm").optional().objid(), this.key("parameters").optional().any())
            }));
            i.AlgorithmIdentifier = o;
            const s = n.define("CertificationRequestInfo", (function () {
                this.seq().obj(this.key("version").use(a), this.key("subject").use(h), this.key("subjectPKInfo").use(u), this.key("attributes").explicit(0).use(p))
            }));
            i.CertificationRequestInfo = s, e = n.define("CertificationRequest", (function () {
                this.seq().obj(this.key("certificationRequestInfo").use(s), this.key("signatureAlgorithm").use(o), this.key("signature").bitstr())
            })), i.CertificationRequest = e;
            const a = n.define("Version", (function () {
                this.int({
                    0: "v1",
                    1: "v2",
                    2: "v3"
                })
            }));
            i.Version = a;
            const u = n.define("SubjectPublicKeyInfo", (function () {
                this.seq().obj(this.key("algorithm").use(o), this.key("subjectPublicKey").bitstr())
            }));
            i.SubjectPublicKeyInfo = u;
            const h = n.define("Name", (function () {
                this.choice({
                    rdnSequence: this.use(c)
                })
            }));
            i.Name = h;
            const c = n.define("RDNSequence", (function () {
                this.seqof(f)
            }));
            i.RDNSequence = c;
            const f = n.define("RelativeDistinguishedName", (function () {
                this.setof(l)
            }));
            i.RelativeDistinguishedName = f;
            const l = n.define("AttributeTypeAndValue", (function () {
                this.seq().obj(this.key("type").use(d), this.key("value").use(g))
            }));
            i.AttributeTypeAndValue = l;
            const p = n.define("Attribute", (function () {
                this.seq().obj(this.key("type").use(d), this.key("values").setof(g))
            })), d = n.define("AttributeType", (function () {
                this.objid()
            }));
            i.AttributeType = d;
            const g = n.define("AttributeValue", (function () {
                this.choice({
                    teletexString: this.t61str(),
                    printableString: this.printstr(),
                    universalString: this.unistr(),
                    utf8String: this.utf8str(),
                    bmpString: this.bmpstr(),
                    ia5String: this.ia5str()
                })
            }));
            i.AttributeValue = g
        },
        function (t, e) {
            ! function () {
                var e = [];

                function r(t) {
                    for (var e, r, n = -1, i = 0, o = t.length; i < o; i += 1) {
                        for (r = 255 & (n ^ t[i]), e = 0; e < 8; e += 1) 1 == (1 & r) ? r = r >>> 1 ^ 3988292384 : r >>>= 1;
                        n = n >>> 8 ^ r
                    }
                    return -1 ^ n
                }

                function n(t, r) {
                    var i, o, s;
                    if (void 0 !== n.crc && r && t || (n.crc = -1, t)) {
                        for (i = n.crc, o = 0, s = t.length; o < s; o += 1) i = i >>> 8 ^ e[255 & (i ^ t[o])];
                        return -1 ^ (n.crc = i)
                    }
                } ! function () {
                    for (var t, r, n = 0; n < 256; n += 1) {
                        for (t = n, r = 0; r < 8; r += 1) 1 & t ? t = 3988292384 ^ t >>> 1 : t >>>= 1;
                        e[n] = t >>> 0
                    }
                }(), t.exports = function (t, e) {
                    return ((e ? r : n)(t = "string" == typeof t ? Array.prototype.map.call(t, (function (t) {
                        return t.charCodeAt(0)
                    })) : t) >>> 0).toString(16)
                }, t.exports.direct = r, t.exports.table = n
            }()
        },
        function (t, e, r) {
            ! function () {
                t.exports = {
                    inflate: r(58),
                    deflate: r(59)
                }
            }()
        },
        function (t, e) {
            function r() {
                this.next = null, this.list = null
            }

            function n() {
                this.e = 0, this.b = 0, this.n = 0, this.t = null
            }

            function i(t, e, i, o, s, a) {
                var u;
                this.BMAX = 16, this.N_MAX = 288, this.status = 0, this.root = null, this.m = 0;
                for (var h, c, f, l, p, d, g, m, y, v, w, b, _, M, S = [], E = [], T = new n(), A = [], k = [], x = [], B = this.root = null, P = 0; P < this.BMAX + 1; P++) S[P] = 0;
                for (P = 0; P < this.BMAX + 1; P++) E[P] = 0;
                for (P = 0; P < this.BMAX; P++) A[P] = null;
                for (P = 0; P < this.N_MAX; P++) k[P] = 0;
                for (P = 0; P < this.BMAX + 1; P++) x[P] = 0;
                for (h = 256 < e ? t[256] : this.BMAX, g = t, m = 0, P = e; S[g[m]]++, m++, 0 < --P;);
                if (S[0] === e) return this.root = null, this.m = 0, void (this.status = 0);
                for (p = 1; p <= this.BMAX && 0 === S[p]; p++);
                for (a < (d = p) && (a = p), P = this.BMAX; 0 !== P && 0 === S[P]; P--);
                for ((f = P) < a && (a = P), b = 1 << p; p < P; p++, b <<= 1)
                    if ((b -= S[p]) < 0) return this.status = 2, void (this.m = a);
                if ((b -= S[P]) < 0) return this.status = 2, void (this.m = a);
                for (S[P] += b, x[1] = p = 0, g = S, m = 1, w = 2; 0 < --P;) x[w++] = p += g[m++];
                for (g = t, P = m = 0; 0 !== (p = g[m++]) && (k[x[p]++] = P), ++P < e;);
                for (e = x[f], g = k, l = -1, y = null, _ = v = E[m = x[0] = P = 0] = 0; d <= f; d++)
                    for (u = S[d]; 0 < u--;) {
                        for (; d > v + E[1 + l];) {
                            if (v += E[1 + l], l++, _ = (_ = f - v) > a ? a : _, (c = 1 << (p = d - v)) > u + 1)
                                for (c -= u + 1, w = d; ++p < _ && !((c <<= 1) <= S[++w]);) c -= S[w];
                            for (_ = 1 << (p = h < v + p && v < h ? h - v : p), E[1 + l] = p, y = [], M = 0; M < _; M++) y[M] = new n();
                            (B = B ? B.next = new r() : this.root = new r()).next = null, B.list = y, A[l] = y, 0 < l && (x[l] = P, T.b = E[l], T.e = 16 + p, T.t = y, p = (P & (1 << v) - 1) >> v - E[l], A[l - 1][p].e = T.e, A[l - 1][p].b = T.b, A[l - 1][p].n = T.n, A[l - 1][p].t = T.t)
                        }
                        for (T.b = d - v, e <= m ? T.e = 99 : g[m] < i ? (T.e = g[m] < 256 ? 16 : 15, T.n = g[m++]) : (T.e = s[g[m] - i], T.n = o[g[m++] - i]), c = 1 << d - v, p = P >> v; p < _; p += c) y[p].e = T.e, y[p].b = T.b, y[p].n = T.n, y[p].t = T.t;
                        for (p = 1 << d - 1; 0 != (P & p); p >>= 1) P ^= p;
                        for (P ^= p;
                            (P & (1 << v) - 1) !== x[l];) v -= E[l], l--
                    }
                this.m = E[1], this.status = 0 !== b && 1 !== f ? 1 : 0
            }

            function o(t) {
                for (; m < t;) g |= (T.length === A ? -1 : 255 & T[A++]) << m, m += 8
            }

            function s(t) {
                return g & O[t]
            }

            function a(t) {
                g >>= t, m -= t
            }

            function u(t, e, r) {
                var n, i, u;
                if (0 === r) return 0;
                for (u = 0; ;) {
                    for (o(S), n = (i = _.list[s(S)]).e; 16 < n;) {
                        if (99 === n) return -1;
                        a(i.b), o(n -= 16), n = (i = i.t[s(n)]).e
                    }
                    if (a(i.b), 16 !== n) {
                        if (15 === n) break;
                        for (o(n), w = i.n + s(n), a(n), o(E), n = (i = M.list[s(E)]).e; 16 < n;) {
                            if (99 === n) return -1;
                            a(i.b), o(n -= 16), n = (i = i.t[s(n)]).e
                        }
                        for (a(i.b), o(n), b = f - i.n - s(n), a(n); 0 < w && u < r;) w--, b &= k - 1, f &= k - 1, t[e + u++] = c[f++] = c[b++];
                        if (u === r) return r
                    } else if (f &= k - 1, t[e + u++] = c[f++] = i.n, u === r) return r
                }
                return y = -1, u
            }

            function h(t, e, r) {
                for (var n, h = 0; h < r;) {
                    if (v && -1 === y) return h;
                    if (0 < w) {
                        if (y !== x)
                            for (; 0 < w && h < r;) w--, b &= k - 1, f &= k - 1, t[e + h++] = c[f++] = c[b++];
                        else {
                            for (; 0 < w && h < r;) w--, f &= k - 1, o(8), t[e + h++] = c[f++] = s(8), a(8);
                            0 === w && (y = -1)
                        } if (h === r) return h
                    }
                    if (-1 === y) {
                        if (v) break;
                        o(1), 0 !== s(1) && (v = !0), a(1), o(2), y = s(2), a(2), _ = null, w = 0
                    }
                    switch (y) {
                        case x:
                            n = function (t, e, r) {
                                var n = 7 & m;
                                if (a(n), o(16), n = s(16), a(16), o(16), n !== (65535 & ~g)) return -1;
                                for (a(16), w = n, n = 0; 0 < w && n < r;) w--, f &= k - 1, o(8), t[e + n++] = c[f++] = s(8), a(8);
                                return 0 === w && (y = -1), n
                            }(t, e + h, r - h);
                            break;
                        case B:
                            n = (_ ? u : function (t, e, r) {
                                if (!I) {
                                    for (var n, o = [], s = 0; s < 144; s++) o[s] = 8;
                                    for (; s < 256; s++) o[s] = 9;
                                    for (; s < 280; s++) o[s] = 7;
                                    for (; s < 288; s++) o[s] = 8;
                                    if (0 !== (n = new i(o, 288, 257, L, q, p = 7)).status) return -1;
                                    for (I = n.root, p = n.m, s = 0; s < 30; s++) o[s] = 5;
                                    if (1 < (n = new i(o, 30, 0, N, U, d = 5)).status) return I = null, -1;
                                    l = n.root, d = n.m
                                }
                                return _ = I, M = l, S = p, E = d, u(t, e, r)
                            })(t, e + h, r - h);
                            break;
                        case P:
                            n = (_ ? u : function (t, e, r) {
                                for (var n, h, c, f, l, p, d, g, m = [], y = 0; y < 316; y++) m[y] = 0;
                                if (o(5), p = 257 + s(5), a(5), o(5), d = 1 + s(5), a(5), o(4), l = 4 + s(4), a(4), 286 < p || 30 < d) return -1;
                                for (n = 0; n < l; n++) o(3), m[F[n]] = s(3), a(3);
                                for (; n < 19; n++) m[F[n]] = 0;
                                if (0 !== (g = new i(m, 19, 19, null, null, S = 7)).status) return -1;
                                for (_ = g.root, S = g.m, c = p + d, y = h = 0; y < c;)
                                    if (o(S), a(n = (f = _.list[s(S)]).b), (n = f.n) < 16) m[y++] = h = n;
                                    else if (16 === n) {
                                        if (o(2), n = 3 + s(2), a(2), c < y + n) return -1;
                                        for (; 0 < n--;) m[y++] = h
                                    } else if (17 === n) {
                                        if (o(3), n = 3 + s(3), a(3), c < y + n) return -1;
                                        for (; 0 < n--;) m[y++] = 0;
                                        h = 0
                                    } else {
                                        if (o(7), n = 11 + s(7), a(7), c < y + n) return -1;
                                        for (; 0 < n--;) m[y++] = 0;
                                        h = 0
                                    } if (g = new i(m, p, 257, L, q, S = C), 0 === S && (g.status = 1), 0 !== g.status && 1 !== g.status) return -1;
                                for (_ = g.root, S = g.m, y = 0; y < d; y++) m[y] = m[y + p];
                                return g = new i(m, d, 0, N, U, E = R), M = g.root, 0 === (E = g.m) && 257 < p || 0 !== g.status ? -1 : u(t, e, r)
                            })(t, e + h, r - h);
                            break;
                        default:
                            n = -1
                    }
                    if (-1 === n) return v ? 0 : -1;
                    h += n
                }
                return h
            }
            var c, f, l, p, d, g, m, y, v, w, b, _, M, S, E, T, A, k, x, B, P, C, R, I, O, L, q, N, U, F;
            k = 32768, I = null, O = [x = 0, B = 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535], L = [3, 4, 5, R = 6, 7, 8, C = 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], q = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, P = 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99], N = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], U = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], F = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], t.exports = function (t) {
                var e = [];
                for (c = c || [], v = !(y = -1), w = b = m = g = f = 0, _ = null, T = t, A = 0; 0 < h(e, e.length, 1024););
                return T = null, e
            }
        },
        function (t, e) {
            function r() {
                this.fc = 0, this.dl = 0
            }

            function n() {
                this.dyn_tree = null, this.static_tree = null, this.extra_bits = null, this.extra_base = 0, this.elems = 0, this.max_length = 0, this.max_code = 0
            }

            function i(t, e, r, n) {
                this.good_length = t, this.max_lazy = e, this.nice_length = r, this.max_chain = n
            }

            function o() {
                this.next = null, this.len = 0, this.ptr = [], this.off = 0
            }

            function s(t) {
                return j[It + t]
            }

            function a(t, e) {
                return j[It + t] = e
            }

            function u(t) {
                se[q + L++] = t, q + L === Nt && function () {
                    var t, e;
                    if (0 !== L) {
                        for (t = function () {
                            var t;
                            return null !== C ? C = (t = C).next : t = new o(), t.next = null, t.len = t.off = 0, t
                        }(), null === R ? R = I = t : I = I.next = t, t.len = L - q, e = 0; e < t.len; e++) t.ptr[e] = se[q + e];
                        L = q = 0
                    }
                }()
            }

            function h(t) {
                t &= 65535, q + L < Nt - 2 ? (se[q + L++] = 255 & t, se[q + L++] = t >>> 8) : (u(255 & t), u(t >>> 8))
            }

            function c() {
                Y = (Y << oe ^ 255 & U[Z + Ft - 1]) & Kt, G = s(Y), j[Z & zt] = G, a(Y, Z)
            }

            function f(t, e) {
                x(e[t].fc, e[t].dl)
            }

            function l(t) {
                return 255 & (t < 256 ? bt[t] : bt[256 + (t >> 7)])
            }

            function p(t, e, r) {
                return t[e].fc < t[r].fc || t[e].fc === t[r].fc && vt[e] <= vt[r]
            }

            function d(t, e, r) {
                for (var n = 0; n < r && Rt < Ct.length; n++) t[e + n] = 255 & Ct[Rt++];
                return n
            }

            function g(t) {
                var e, r, n, i, o = et,
                    s = Z,
                    a = X,
                    u = Jt < Z ? Z - Jt : Yt,
                    h = Z + 258,
                    c = U[s + a - 1],
                    f = U[s + a];
                it <= X && (o >>= 2);
                do {
                    if (U[(e = t) + a] === f && U[e + a - 1] === c && U[e] === U[s] && U[++e] === U[s + 1]) {
                        for (s += 2, e++; s < h;) {
                            for (i = !1, n = 0; n < 8; n += 1)
                                if (e += 1, U[s += 1] !== U[e]) {
                                    i = !0;
                                    break
                                }
                            if (i) break
                        }
                        if (r = 258 - (h - s), s = h - 258, a < r) {
                            if (Q = t, ot <= (a = r)) break;
                            c = U[s + a - 1], f = U[s + a]
                        }
                    }
                } while ((t = j[t & zt]) > u && 0 != --o);
                return a
            }

            function m() {
                var t, e, r = Ut - tt - Z;
                if (-1 === r) r--;
                else if (It + Jt <= Z) {
                    for (t = 0; t < It; t++) U[t] = U[t + It];
                    for (Q -= It, Z -= It, z -= It, t = 0; t < Ht; t++) e = s(t), a(t, It <= e ? e - It : Yt);
                    for (t = 0; t < It; t++) e = j[t], j[t] = It <= e ? e - It : Yt;
                    r += It
                }
                $ || ((t = d(U, Z + tt, r)) <= 0 ? $ = !0 : tt += t)
            }

            function y(t, e, r) {
                var n;
                return O || ($ || (K = H = 0, function () {
                    var t, e, r, n, i;
                    if (0 === ht[0].dl) {
                        for (ft.dyn_tree = st, ft.static_tree = ut, ft.extra_bits = ae, ft.extra_base = $t + 1, ft.elems = ee, ft.max_length = Xt, ft.max_code = 0, lt.dyn_tree = at, lt.static_tree = ht, lt.extra_bits = ue, lt.extra_base = 0, lt.elems = re, lt.max_length = Xt, lt.max_code = 0, pt.dyn_tree = ct, pt.static_tree = null, pt.extra_bits = he, pt.extra_base = 0, pt.elems = ne, pt.max_length = Zt, pt.max_code = 0, n = r = 0; n < Qt - 1; n++)
                            for (_t[n] = r, t = 0; t < 1 << ae[n]; t++) wt[r++] = n;
                        for (wt[r - 1] = n, n = i = 0; n < 16; n++)
                            for (Mt[n] = i, t = 0; t < 1 << ue[n]; t++) bt[i++] = n;
                        for (i >>= 7; n < re; n++)
                            for (Mt[n] = i << 7, t = 0; t < 1 << ue[n] - 7; t++) bt[256 + i++] = n;
                        for (e = 0; e <= Xt; e++) dt[e] = 0;
                        for (t = 0; t <= 143;) ut[t++].dl = 8, dt[8]++;
                        for (; t <= 255;) ut[t++].dl = 9, dt[9]++;
                        for (; t <= 279;) ut[t++].dl = 7, dt[7]++;
                        for (; t <= 287;) ut[t++].dl = 8, dt[8]++;
                        for (_(ut, ee + 1), t = 0; t < re; t++) ht[t].dl = 5, ht[t].fc = B(t, 5);
                        w()
                    }
                }(), function () {
                    for (var t = 0; t < Ht; t++) j[It + t] = 0;
                    if (rt = fe[nt].max_lazy, it = fe[nt].good_length, ot = fe[nt].nice_length, et = fe[nt].max_chain, (tt = d(U, z = Z = 0, 2 * It)) <= 0) return $ = !0, tt = 0;
                    for ($ = !1; tt < Wt && !$;) m();
                    for (t = Y = 0; t < Ft - 1; t++) Y = (Y << oe ^ 255 & U[t]) & Kt
                }(), R = null, q = L = 0, nt <= 3 ? (X = Ft - 1, V = 0) : (V = Ft - 1, J = !1), N = !1), O = !0, 0 !== tt) ? (n = v(t, e, r)) === r ? r : N ? n : ((nt <= 3 ? function () {
                    for (; 0 !== tt && null === R;) {
                        var t;
                        if (c(), G !== Yt && Z - G <= Jt && (V = g(G), tt < V && (V = tt)), Ft <= V)
                            if (t = A(Z - Q, V - Ft), tt -= V, V <= rt) {
                                for (V--; Z++, c(), 0 != --V;);
                                Z++
                            } else Z += V, V = 0, Y = ((Y = 255 & U[Z]) << oe ^ 255 & U[Z + 1]) & Kt;
                        else t = A(0, 255 & U[Z]), tt--, Z++;
                        for (t && (T(0), z = Z); tt < Wt && !$;) m()
                    }
                } : function () {
                    for (; 0 !== tt && null === R;) {
                        if (c(), X = V, W = Q, V = Ft - 1, G !== Yt && X < rt && Z - G <= Jt && (V = g(G), (V = tt < V ? tt : V) === Ft && Gt < Z - Q && V--), Ft <= X && V <= X) {
                            var t = A(Z - 1 - W, X - Ft);
                            for (tt -= X - 1, X -= 2; Z++, c(), 0 != --X;);
                            J = !1, V = Ft - 1, Z++, t && (T(0), z = Z)
                        } else J ? A(0, 255 & U[Z - 1]) && (T(0), z = Z) : J = !0, Z++, tt--;
                        for (; tt < Wt && !$;) m()
                    }
                })(), 0 === tt && (J && A(0, 255 & U[Z - 1]), T(1), N = !0), n + v(t, n + e, r - n)) : (N = !0, 0)
            }

            function v(t, e, r) {
                for (var n, i, o, s = 0; null !== R && s < r;) {
                    for ((n = r - s) > R.len && (n = R.len), i = 0; i < n; i++) t[e + s + i] = R.ptr[R.off + i];
                    R.off += n, R.len -= n, s += n, 0 === R.len && (R = (o = R).next, (o = o).next = C, C = o)
                }
                if (s === r) return s;
                if (q < L) {
                    for (L - q < (n = r - s) && (n = L - q), i = 0; i < n; i++) t[e + s + i] = se[q + i];
                    s += n, L === (q += n) && (L = q = 0)
                }
                return s
            }

            function w() {
                for (var t = 0; t < ee; t++) st[t].fc = 0;
                for (t = 0; t < re; t++) at[t].fc = 0;
                for (t = 0; t < ne; t++) ct[t].fc = 0;
                st[te].fc = 1, Bt = Pt = 0, Et = Tt = At = 0, kt = 0, xt = 1
            }

            function b(t, e) {
                for (var r = gt[e], n = e << 1; n <= mt && (n < mt && p(t, gt[n + 1], gt[n]) && n++, !p(t, r, gt[n]));) gt[e] = gt[n], e = n, n <<= 1;
                gt[e] = r
            }

            function _(t, e) {
                for (var r, n = [], i = 0, o = 1; o <= Xt; o++) i = i + dt[o - 1] << 1, n[o] = i;
                for (r = 0; r <= e; r++) {
                    var s = t[r].dl;
                    0 !== s && (t[r].fc = B(n[s]++, s))
                }
            }

            function M(t) {
                var e, r, n = t.dyn_tree,
                    i = t.static_tree,
                    o = t.elems,
                    s = -1,
                    a = o;
                for (yt = ie, e = mt = 0; e < o; e++) 0 !== n[e].fc ? (gt[++mt] = s = e, vt[e] = 0) : n[e].dl = 0;
                for (; mt < 2;) {
                    var u = gt[++mt] = s < 2 ? ++s : 0;
                    n[u].fc = 1, vt[u] = 0, Bt--, null !== i && (Pt -= i[u].dl)
                }
                for (t.max_code = s, e = mt >> 1; 1 <= e; e--) b(n, e);
                for (; e = gt[Vt], gt[Vt] = gt[mt--], b(n, Vt), r = gt[Vt], gt[--yt] = e, gt[--yt] = r, n[a].fc = n[e].fc + n[r].fc, vt[e] > vt[r] + 1 ? vt[a] = vt[e] : vt[a] = vt[r] + 1, n[e].dl = n[r].dl = a, gt[Vt] = a++, b(n, Vt), 2 <= mt;);
                gt[--yt] = gt[Vt],
                    function (t) {
                        for (var e, r, n, i, o, s = t.dyn_tree, a = t.extra_bits, u = t.extra_base, h = t.max_code, c = t.max_length, f = t.static_tree, l = 0, p = 0; p <= Xt; p++) dt[p] = 0;
                        for (s[gt[yt]].dl = 0, e = yt + 1; e < ie; e++) c < (p = s[s[r = gt[e]].dl].dl + 1) && (p = c, l++), s[r].dl = p, h < r || (dt[p]++, i = 0, u <= r && (i = a[r - u]), o = s[r].fc, Bt += o * (p + i), null !== f && (Pt += o * (f[r].dl + i)));
                        if (0 !== l) {
                            do {
                                for (p = c - 1; 0 === dt[p];) p--
                            } while (dt[p]--, dt[p + 1] += 2, dt[c]--, 0 < (l -= 2));
                            for (p = c; 0 !== p; p--)
                                for (r = dt[p]; 0 !== r;) h < (n = gt[--e]) || (s[n].dl !== p && (Bt += (p - s[n].dl) * s[n].fc, s[n].fc = p), r--)
                        }
                    }(t), _(n, s)
            }

            function S(t, e) {
                var r, n, i = -1,
                    o = t[0].dl,
                    s = 0,
                    a = 7,
                    u = 4;
                for (0 === o && (a = 138, u = 3), t[e + 1].dl = 65535, r = 0; r <= e; r++) n = o, o = t[r + 1].dl, ++s < a && n === o || (s < u ? ct[n].fc += s : 0 !== n ? (n !== i && ct[n].fc++, ct[16].fc++) : s <= 10 ? ct[17].fc++ : ct[18].fc++, i = n, u = (s = 0) === o ? (a = 138, 3) : n === o ? (a = 6, 3) : (a = 7, 4))
            }

            function E(t, e) {
                var r, n, i = -1,
                    o = t[0].dl,
                    s = 0,
                    a = 7,
                    u = 4;
                for (0 === o && (a = 138, u = 3), r = 0; r <= e; r++)
                    if (n = o, o = t[r + 1].dl, !(++s < a && n === o)) {
                        if (s < u)
                            for (; f(n, ct), 0 != --s;);
                        else 0 !== n ? (n !== i && (f(n, ct), s--), f(16, ct), x(s - 3, 2)) : s <= 10 ? (f(17, ct), x(s - 3, 3)) : (f(18, ct), x(s - 11, 7));
                        i = n, u = (s = 0) === o ? (a = 138, 3) : n === o ? (a = 6, 3) : (a = 7, 4)
                    }
            }

            function T(t) {
                var e, r, n, i, o = Z - z;
                if (St[At] = kt, M(ft), M(lt), n = function () {
                    var t;
                    for (S(st, ft.max_code), S(at, lt.max_code), M(pt), t = ne - 1; 3 <= t && 0 === ct[ce[t]].dl; t--);
                    return Bt += 3 * (t + 1) + 5 + 5 + 4, t
                }(), 4 + o <= (e = (r = Pt + 3 + 7 >> 3) <= (e = Bt + 3 + 7 >> 3) ? r : e) && 0 <= z)
                    for (x((Ot << 1) + t, 3), P(), h(o), h(~o), i = 0; i < o; i++) u(U[z + i]);
                else r === e ? (x((Lt << 1) + t, 3), k(ut, ht)) : (x((qt << 1) + t, 3), function (t, e, r) {
                    var n;
                    for (x(t - 257, 5), x(e - 1, 5), x(r - 4, 4), n = 0; n < r; n++) x(ct[ce[n]].dl, 3);
                    E(st, t - 1), E(at, e - 1)
                }(ft.max_code + 1, lt.max_code + 1, n + 1), k(st, at));
                w(), 0 !== t && P()
            }

            function A(t, e) {
                if (D[Et++] = e, 0 === t ? st[e].fc++ : (t--, st[wt[e] + $t + 1].fc++, at[l(t)].fc++, F[Tt++] = t, kt |= xt), xt <<= 1, 0 == (7 & Et) && (St[At++] = kt, kt = 0, xt = 1), 2 < nt && 0 == (4095 & Et)) {
                    for (var r = 8 * Et, n = (t = Z - z, 0); n < re; n++) r += at[n].fc * (5 + ue[n]);
                    if (r >>= 3, Tt < parseInt(Et / 2, 10) && r < parseInt(t / 2, 10)) return !0
                }
                return Et === Dt - 1 || Tt === jt
            }

            function k(t, e) {
                var r, n, i, o = 0,
                    s = 0,
                    a = 0,
                    u = 0;
                if (0 !== Et)
                    for (; 0 == (7 & o) && (u = St[a++]), r = 255 & D[o++], 0 == (1 & u) ? f(r, t) : (f((n = wt[r]) + $t + 1, t), 0 !== (i = ae[n]) && x(r -= _t[n], i), f(n = l(r = F[s++]), e), 0 !== (i = ue[n]) && x(r -= Mt[n], i)), u >>= 1, o < Et;);
                f(te, t)
            }

            function x(t, e) {
                le - e < K ? (h(H |= t << K), H = t >> le - K, K += e - le) : (H |= t << K, K += e)
            }

            function B(t, e) {
                for (var r = 0; r |= 1 & t, t >>= 1, r <<= 1, 0 < --e;);
                return r >> 1
            }

            function P() {
                8 < K ? h(H) : 0 < K && u(H), K = H = 0
            }
            var C, R, I, O, L, q, N, U, F, D, j, H, K, z, Y, G, W, J, V, X, Z, Q, $, tt, et, rt, nt, it, ot, st, at, ut, ht, ct, ft, lt, pt, dt, gt, mt, yt, vt, wt, bt, _t, Mt, St, Et, Tt, At, kt, xt, Bt, Pt, Ct, Rt, It, Ot, Lt, qt, Nt, Ut, Ft, Dt, jt, Ht, Kt, zt, Yt, Gt, Wt, Jt, Vt, Xt, Zt, Qt, $t, te, ee, re, ne, ie, oe, se, ae, ue, he, ce, fe, le;
            Ut = (qt = 2) * (It = 32768), jt = Dt = Nt = 8192, Kt = (Ht = 32768) - (Lt = 1), zt = It - 1, Yt = Ot = 0, Gt = 4096, Jt = It - (Wt = 258 + (Ft = 3) + 1), Xt = 15, Zt = 7, te = $t = 256, re = 30, ne = 19, ie = 2 * (ee = $t + (Vt = 1) + (Qt = 29)) + 1, oe = parseInt((15 + Ft - 1) / Ft, 10), se = null, ae = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], ue = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], he = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], ce = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], fe = [new i(0, 0, 0, 0), new i(4, 4, 8, 4), new i(4, 5, 16, 8), new i(4, 6, 32, 32), new i(4, 4, 16, 16), new i(8, 16, 32, 32), new i(8, 16, 128, 128), new i(8, 32, 128, 256), new i(32, 128, 258, 1024), new i(32, 258, 258, 4096)], le = 16, t.exports = function (t, e) {
                var i;
                for (Ct = t, function (t) {
                    var e;
                    if (t ? t < 1 ? t = 1 : 9 < t && (t = 9) : t = 6, nt = t, $ = O = !1, null === se) {
                        for (C = R = I = null, se = [], U = [], F = [], D = [], j = [], st = [], e = 0; e < ie; e++) st[e] = new r();
                        for (at = [], e = 0; e < 2 * re + 1; e++) at[e] = new r();
                        for (ut = [], e = 0; e < ee + 2; e++) ut[e] = new r();
                        for (ht = [], e = 0; e < re; e++) ht[e] = new r();
                        for (ct = [], e = 0; e < 2 * ne + 1; e++) ct[e] = new r();
                        ft = new n(), lt = new n(), pt = new n(), dt = [], gt = [], vt = [], wt = [], bt = [], _t = [], Mt = [], St = []
                    }
                }(e = void (Rt = 0) === e ? 6 : e), i = []; 0 < y(i, i.length, 1024););
                return Ct = null, i
            }, t.exports.DEFAULT_LEVEL = 6
        },
        function (t, e, r) {
            r.r(e), r.d(e, "resetConfig", (function () {
                return je
            })), r.d(e, "qapmWebSdkStart", (function () {
                return Ke
            })), r.d(e, "qapmMiniSdkStart", (function () {
                return Ye
            })), r.d(e, "qapmCustomTrack", (function () {
                return Je
            })), r.d(e, "qapmSetField", (function () {
                return Ve
            })), r.d(e, "qapmCaptureException", (function () {
                return Xe
            })), r.d(e, "setPageState", (function () {
                return Ze
            }));
            e = r(0);
            var n = r.n(e),
                i = (e = r(1), r.n(e)),
                o = {
                    logLevel: "log",
                    levelMap: {
                        log: 5,
                        debug: 4,
                        info: 3,
                        warn: 2,
                        error: 1,
                        none: 0
                    },
                    enableLogLevel: function (t) {
                        var e = this.levelMap[t];
                        if (null == e) return !1;
                        var r = this.levelMap[this.logLevel];
                        return null != t && e <= r
                    }
                };
            ["debug", "info", "log", "warn", "error"].map((function (t) {
                o[t] = function () {
                    if (this.enableLogLevel(t)) {
                        for (var e, r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                        (e = console)[t].apply(e, ["QAPM, track-js,"].concat(n))
                    }
                }
            }));
            var s = r(16),
                a = (e = r(30), r.n(e)),
                u = (e = r(31), r.n(e)),
                h = (e = r(4), r.n(e)),
                c = "5.1.13";

            function f(t) {
                return !!(t && t.constructor && t.call && t.apply)
            }

            function l(t) {
                var e = [];
                return function t(r) {
                    var n = 0;
                    if ("boolean" == typeof r) n = 4;
                    else if ("string" == typeof r) n = encodeURI(r).split(/%..|./).length - 1;
                    else if ("number" == typeof r) n = 8;
                    else if ("object" === h()(r) && -1 === e.indexOf(r))
                        for (var i in e[e.length] = r) n += 8, n += t(r[i]);
                    return n
                }(t)
            }

            function p() {
                return "undefined" != typeof wx
            }

            function d(t, e) {
                return "string" == typeof t ? t.split(e) : []
            }
            Object.assign;
            e = function () {
                return window.location.href
            };
            var g = function (t, e) {
                t && Object.keys(e).forEach((function (e) {
                    void 0 === t[e] && (t[e] = function () { })
                }))
            }, m = function () {
                function t() {
                    a()(this, t)
                }
                return u()(t, null, [{
                    key: "indexName",
                    value: function (t) {
                        return "fs-".concat(t, "-index")
                    }
                }, {
                    key: "contentKey",
                    value: function (t, e) {
                        return "fs-".concat(t, "-").concat(e)
                    }
                }, {
                    key: "getIndex",
                    value: function (e) {
                        return e = t.indexName(e), null !== (e = p() ? wx.getStorageSync(e) : localStorage.getItem(e)) && "" !== e || (e = -1), parseInt(e)
                    }
                }, {
                    key: "appendString",
                    value: function (e, r) {
                        var n = t.getIndex(e);
                        n += 1, p() ? wx.setStorageSync(t.contentKey(e, n), r) : localStorage.setItem(t.contentKey(e, n), r), p() ? wx.setStorageSync(t.indexName(e), n) : localStorage.setItem(t.indexName(e), n)
                    }
                }, {
                    key: "readAll",
                    value: function (e) {
                        var r = "",
                            n = t.getIndex(e);
                        if (0 <= n)
                            for (var i = 0; i <= n; i++) r += p() ? wx.getStorageSync(t.contentKey(e, i)) : localStorage.getItem(t.contentKey(e, i));
                        return r
                    }
                }, {
                    key: "readItem",
                    value: function (t) {
                        return p() ? wx.getStorageSync(t) : localStorage.getItem(t)
                    }
                }, {
                    key: "getKeysContains",
                    value: function (t) {
                        var e = [];
                        if (p())
                            for (var r = wx.getStorageSync().keys, n = void 0 === r ? [] : r, i = 0; i < n.length; i++) n[i].includes(t) && e.push(n[i]);
                        else
                            for (var o = 0; o < localStorage.length; o++) localStorage.key(o).includes(t) && e.push(localStorage.key(o));
                        return e
                    }
                }, {
                    key: "readItemsContains",
                    value: function (t) {
                        for (var e = this.getKeysContains(t), r = 0; r < e.length; r++) {
                            var n = this.readItem(e[r]);
                            e.push(n)
                        }
                        return []
                    }
                }, {
                    key: "removeItem",
                    value: function (t) {
                        p() ? wx.removeStorageSync(t) : localStorage.removeItem(t)
                    }
                }, {
                    key: "setItem",
                    value: function (t, e) {
                        p() ? wx.setStorageSync(t, e) : localStorage.setItem(t, e)
                    }
                }, {
                    key: "remove",
                    value: function (e) {
                        var r = t.getIndex(e);
                        if (0 <= r)
                            for (var n = 0; n <= r; n++) p() ? wx.removeStorageSync(t.contentKey(e, n)) : localStorage.removeItem(t.contentKey(e, n));
                        p() ? wx.removeStorageSync(t.indexName(e)) : localStorage.removeItem(t.indexName(e))
                    }
                }, {
                    key: "removeItemsContains",
                    value: function (t) {
                        for (var e = this.getKeysContains(t), r = 0; r < e.length; r++) this.removeItem(e[r])
                    }
                }]), t
            }(),
                y = r(7),
                v = (e = r(2), r.n(e)),
                w = r(32),
                b = function () {
                    return new Promise((function (t, e) {
                        (P ? E : S)({
                            config: {
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                method: "GET",
                                isGetToken: !0
                            }
                        }, {
                            onSuccess: function (e) {
                                if ("string" == typeof e.data) try {
                                    e.data = JSON.parse(e.data)
                                } catch (t) {
                                    return void o.info("get token fail", e)
                                }
                                e = e.data.token, t(e)
                            },
                            onError: function (t) {
                                e(t)
                            }
                        })
                    }))
                }, _ = function (t, e) {
                    var r, n, i, o, s, a, u, h = "string" == typeof t.data ? t.data : JSON.stringify(t.data),
                        c = t.config,
                        f = c.isEncrypt,
                        l = c.plugin,
                        p = c.dataLength,
                        d = c.isUBS,
                        g = c.isQAPM,
                        m = c.isAppconfig,
                        y = c.isPubkey,
                        w = "",
                        b = "",
                        _ = "";
                    return c.isGetToken ? _ = function () {
                        var t = ct.app_key.split("-")[0],
                            e = ct.app_key.split("-")[1],
                            r = ct.user_id,
                            n = O(),
                            i = U(),
                            o = j(),
                            s = F(),
                            a = ct.version;
                        return "".concat(pt.qapm, "/entrance/").concat(e, "/authorize/?p_id=").concat(e, "&app_key=").concat(t, "&deviceid=").concat(n, "&uin=").concat(r, "&sdk_ver=").concat("5.1.13", "&device=").concat(i, "&os=").concat(o, "&platform=").concat(s, "&is_main=").concat("no", "&version=").concat(a)
                    }() : y ? (t.config.headers.Authorize = ct.TOKEN, _ = "".concat(pt.qapm, "/entrance/").concat(ct.app_id, "/requestForPubKey/")) : m ? (t.config.headers.Authorize = ct.TOKEN, _ = "".concat(pt.appconfig, "/appconfig/v7/config/").concat(ct.app_id, "/")) : g && ct.debug ? _ = function (t, e) {
                        return "".concat(pt.qapm, "/entrance/v1/uploadData/?app_id=").concat(ct.app_id, "&plugin=").concat(t, "&data_num=").concat(e)
                    }(l, p) : g && f ? (s = "multipart/form-data;boundary=".concat(n = "27182818284590452353602874713526"), c = (r = x("--".concat(n, '\r\nContent-Disposition: form-data; name="json_str"\r\n\r\n').concat(h, "\r\n--27182818284590452353602874713526--\r\n"))).encryptData, y = r.checkCode, m = r.encryptSm4Key, n = r.sm4Iv, i = r.encryptCallback, w = n, b = m, t.data = c, t.config.headers["Check-Code"] = y, t.config.headers["Content-Type"] = s, t.config.headers["Content-Encoding"] = "gzip", o = e.onSuccess, e.onSuccess = function (t) {
                        "function" == typeof o && o(t), i && i(t)
                    }, _ = function (t, e, r, n) {
                        return "".concat(pt.qapm, "/entrance/v4/uploadData/json/?app_id=").concat(ct.app_id, "&plugin=").concat(t, "&data_num=").concat(e, "&iv=").concat(r, "&key=").concat(n, "&needDecode=1&format=2")
                    }(l, p, w, b), t.config.headers.Authorize = ct.TOKEN, t.config.headers.INTCode = v()(h)) : g && !f ? (g = "multipart/form-data;boundary=".concat(s = "27182818284590452353602874713526"), s = "--".concat(s, '\r\nContent-Disposition: form-data; name="json_str"\r\n\r\n').concat(h, "\r\n--27182818284590452353602874713526--\r\n"), t.data = s, t.config.headers["Content-Type"] = g, _ = function (t, e) {
                        return "".concat(pt.qapm, "/entrance/v3/uploadData/?app_id=").concat(ct.app_id, "&plugin=").concat(t, "&data_num=").concat(e, "&needDecode=1")
                    }(l, p), t.config.headers.Authorize = ct.TOKEN, t.config.headers.INTCode = v()(h)) : d && !f ? _ = function () {
                        var t = pt.athena || pt.qapm;
                        return "".concat(t, "/entrance/athena/uploadJson/").concat(ct.app_id, "/").concat(ct.version, "/?format=2&user_id=").concat(ct.user_id)
                    }() : d && f && (p = (l = x(t.data, !1)).encryptData, h = l.checkCode, d = l.encryptSm4Key, f = l.sm4Iv, a = l.encryptCallback, w = f, b = d, t.config.headers["Check-Code"] = h, t.data = p, u = e.onSuccess, e.onSuccess = function (t) {
                        "function" == typeof u && u(t), a && a(t)
                    }, _ = function (t, e) {
                        var r = pt.athena || pt.qapm;
                        return "".concat(r, "/entrance/athena/uploadEncryptedJson/").concat(ct.app_id, "/").concat(ct.version, "/?format=2&user_id=").concat(ct.user_id, "&iv=").concat(t, "&key=").concat(e, "&needDecode=1")
                    }(w, b), t.config.headers["Content-Type"] = "application/octet-stream"), t.config.url = _, t
                }, M = function (t) {
                    var e = tt(),
                        r = "string" == typeof t.data ? t.data : JSON.stringify(t.data),
                        n = (s = t.config).isEncrypt,
                        i = s.plugin,
                        o = s.isUBS,
                        s = (t = s.isQAPM, s.dataLength);
                    o = o ? "athena" : "";
                    t && (o = "plugin:".concat(i)), "android" === e ? window.QAPMAndroidJsBridge.uploadDataByMobile(o, r, n) : "ios" === e && window.webkit.messageHandlers.QAPM.postMessage({
                        functionName: "uploadDataByMobile",
                        dataType: o,
                        jsonStr: r,
                        needEncrpty: n,
                        dataLength: s
                    })
                }, S = function (t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    if (t) {
                        var r = (i = t.config).isUBS,
                            n = i.isQAPM,
                            i = "string" == typeof t.data ? t.data : JSON.stringify(t.data);
                        if (tt() && (n || r) && (window.QAPMAndroidJsBridge && window.QAPMAndroidJsBridge.uploadDataByMobile || window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.QAPM && window.webkit.messageHandlers.QAPM.postMessage)) M(t);
                        else if (r = (n = (t = _(t, e)).config).method, n = n.url) {
                            o.info("webrequest requestConfig", n, t);
                            var s = new XMLHttpRequest(),
                                a = -1;
                            if (s.onreadystatechange = function () {
                                try {
                                    s.readyState === XMLHttpRequest.DONE && (a = s.status, e.hasOwnProperty("onSuccess") && e.onSuccess({
                                        statusCode: a,
                                        header: s.getAllResponseHeaders(),
                                        data: s.response
                                    }))
                                } catch (t) {
                                    e.hasOwnProperty("onError") && e.onError({
                                        statusCode: a,
                                        header: s.getAllResponseHeaders(),
                                        data: t
                                    })
                                }
                                e.hasOwnProperty("onFinally") && e.onFinally({
                                    statusCode: a,
                                    header: s.getAllResponseHeaders(),
                                    data: s.response
                                })
                            }, s.open(r, n, !0), t.config && t.config.headers)
                                for (var u in t.config.headers) "application/x-www-form-urlencoded" !== t.config.headers[u] && s.setRequestHeader(u, t.config.headers[u]);
                            if (t.config && t.config.headers && "application/x-www-form-urlencoded" === t.config.headers["Content-Type"]) return (r = new FormData()).set("json_str", i), void s.send(r);
                            "string" == typeof t.data ? s.send(t.data) : s.send(i)
                        } else o.info("url is empty", n, t)
                    }
                }, E = function (t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    t = _(t, e), P.request({
                        url: t.config.url,
                        method: t.config.method,
                        header: t.config.headers,
                        data: t.data,
                        success: e.onSuccess,
                        fail: e.onError,
                        complete: e.onFinally
                    })
                }, T = "QAPM_SM2_PUB_KEY",
                A = "";

            function k(t) {
                return new Promise((function (e, r) {
                    "" !== t ? (A = t, (P ? E : S)({
                        config: {
                            headers: {},
                            isPubkey: !0,
                            method: "GET"
                        }
                    }, {
                        onSuccess: function (t) {
                            if (200 === t.statusCode) try {
                                var n = t.data;
                                "string" == typeof t.data && (n = JSON.parse(t.data)), m.setItem(T, n.pub_key), e(n.pub_key)
                            } catch (t) {
                                o.info("updateSm2PubKey", t), r(t)
                            }
                        }
                    })) : o.info("qapmBaseUrl or pId is empty, updateSm2PubKey fail")
                }))
            }

            function x(t, e) {
                var r = !(1 < arguments.length && void 0 !== e) || e,
                    n = m.readItem(T);
                if (!n) return !1;
                "string" != typeof t && (t = JSON.stringify(t));
                var i = v()(Z()).substr(0, 16),
                    s = y.utils.stringToByteArrayInUtf8(i),
                    a = v()(Z()).substr(0, 16),
                    u = y.utils.stringToByteArrayInUtf8(a),
                    h = new y.SM4({
                        key: s,
                        mode: "cbc",
                        iv: u
                    });
                i = "", u = "";
                return r ? (r = Object(w.zip)(t), u = v()(r), i = h.encrypt(r)) : (i = h.encrypt(t), u = v()(t)), {
                    encryptData: i,
                    checkCode: u,
                    encryptSm4Key: (new y.SM2()).encrypt(n, s),
                    sm4Iv: a,
                    encryptCallback: function (t) {
                        1415 === t.data.status && k(), 1507 === t.data.status && k(A), 1508 === t.data.status && o.info(t), 1509 === t.data.status && o.info(t)
                    }
                }
            }
            var B = "NoNetwork",
                P = "undefined" != typeof wx ? wx : "undefined" != typeof qq ? qq : void 0;

            function C() {
                return (new Date()).getTime()
            }

            function R() {
                return (new Date()).toISOString()
            }

            function I() {
                try {
                    var t, e = window.navigator.userAgent,
                        r = window.navigator.appVersion,
                        n = gt,
                        i = [{
                            s: "Windows 10",
                            r: /(Windows 10.0|Windows NT 10.0)/
                        }, {
                            s: "Windows 8.1",
                            r: /(Windows 8.1|Windows NT 6.3)/
                        }, {
                            s: "Windows 8",
                            r: /(Windows 8|Windows NT 6.2)/
                        }, {
                            s: "Windows 7",
                            r: /(Windows 7|Windows NT 6.1)/
                        }, {
                            s: "Windows Vista",
                            r: /Windows NT 6.0/
                        }, {
                            s: "Windows XP",
                            r: /(Windows NT 5.1|Windows XP)/
                        }, {
                            s: "Windows 2000",
                            r: /(Windows NT 5.0|Windows 2000)/
                        }, {
                            s: "android",
                            r: /Android/
                        }, {
                            s: "chromeos",
                            r: /CrOS/
                        }, {
                            s: "linux",
                            r: /(Linux|X11(?!.*CrOS))/
                        }, {
                            s: "ios",
                            r: /(iPhone|iPad|iPod)/
                        }, {
                            s: "osx",
                            r: /Mac OS X/
                        }, {
                            s: "macos",
                            r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
                        }, {
                            s: "unix",
                            r: /UNIX/
                        }];
                    for (t in i) {
                        var o = i[t];
                        if (o.r.test(e)) {
                            n = o.s;
                            break
                        }
                    }
                    var s = gt;
                    switch (/Windows/.test(n) && (s = /Windows (.*)/.exec(n)[1], n = "windows"), n) {
                        case "osx":
                            s = /Mac OS X (10[\.\_\d]+)/.exec(e)[1];
                            break;
                        case "android":
                            s = /Android ([\.\_\d]+)/.exec(e)[1];
                            break;
                        case "ios":
                            s = /OS (\d+)_(\d+)_?(\d+)?/.exec(r), s = "".concat(s[1], ".").concat(s[2], ".").concat(0 | s[3])
                    }
                    return {
                        os: n,
                        osVersion: s
                    }
                } catch (t) {
                    return {
                        os: gt,
                        osVersion: gt
                    }
                }
            }

            function O() {
                var t = m.readItem("QAPM_DEVICE_ID");
                return t || (t = "".concat(Z(), "--").concat(C()), m.setItem("QAPM_DEVICE_ID", t)), t
            }

            function L(t) {
                try {
                    return 0 === t ? t : (0 === z && (e = K(), z = e.timing.navigationStart), t + z <= 0 ? 0 : Math.round(t + z));
                    var e
                } catch (e) {
                    return o.error(e), t
                }
            }

            function q(t, e) {
                return Y(t, e, "AND")
            }
            var N = function () {
                if (P) return ot().brand;
                if ("android" === tt() || "ios" === tt()) return ct.brand || gt;
                var t = navigator.userAgent.split("(")[1].split(")")[0],
                    e = "",
                    r = [/IPHONE/gi, /huawei/gi, /mi/gi, /vivo/gi, /OPPO/gi, /samsung/gi, /SONY/gi, /Nokia/gi, /HTC/gi, /ZTE/gi, /Lenovo/gi, /ZUK/gi];
                return r[0].test(t) ? e = "iPhone" : r[1].test(t) ? e = "HUAWEI" : r[2].test(t) ? e = "小米" : r[3].test(t) ? e = "vivo" : r[4].test(t) ? e = "OPPO" : r[5].test(t) ? e = "SAMSUNG" : r[6].test(t) ? e = "SONY" : r[7].test(t) ? e = "Nokia" : r[8].test(t) ? e = "HTC" : r[9].test(t) ? e = "ZTE" : r[10].test(t) || r[11].test(t) ? e = "Lenovo" : function () {
                    try {
                        var t = window.navigator.userAgent;
                        return -1 < t.indexOf("Android") || -1 < t.indexOf("Adr")
                    } catch (t) {
                        return !1
                    }
                }() && (e = "Android"), e || gt
            }, U = function () {
                if (P) return ot().model;
                if ("android" === tt() || "ios" === tt()) return ct.model || gt;
                var t = navigator.userAgent.toLowerCase();
                return /windows/.test(t) ? "Windows pc" : /iphone|ipod/.test(t) && /mobile/.test(t) ? "iPhone" : /ipad/.test(t) && /mobile/.test(t) ? "iPad" : /android/.test(t) && /mobile/.test(t) ? "Android" : /linux/.test(t) ? "Linux pc" : /mac/.test(t) ? "Mac" : dt
            }, F = function () {
                return P ? "wx-mp" : "web"
            }, D = function () {
                return P ? ot().system.split(" ")[0].toLowerCase() : "android" === tt() || "ios" === tt() ? ct.os || gt : I().os
            }, j = function () {
                return P ? ot().system.split(" ")[1].toLowerCase() : "android" === tt() || "ios" === tt() ? ct.osVer || gt : I().osVersion
            }, H = function () {
                return P || "android" !== tt() && "ios" !== tt() ? dt : ct.isRoot || gt
            }, K = function () {
                return window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance
            }, z = 0,
                Y = function (t, e, r) {
                    for (var n = t.toString(2), i = e.toString(2), o = (n = new Array(54 - n.length).join("0") + n, i = new Array(54 - i.length).join("0") + i, ""), s = 0; s < 53; s++) o += "AND" === r && "1" === n[s] && "1" === i[s] || "OR" === r && ("1" === n[s] || "1" === i[s]) ? "1" : "0";
                    return parseInt(o, 2)
                }, G = function () {
                    var t = i()(n.a.mark((function t(e) {
                        var r, i, o, s;
                        return n.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!P) {
                                        t.next = 23;
                                        break
                                    }
                                    if (!e || !e.profile) {
                                        t.next = 16;
                                        break
                                    }
                                    if ("offline" === (r = e.profile.estimate_nettype || "")) return t.abrupt("return", B);
                                    t.next = 5;
                                    break;
                                case 5:
                                    if ("slow 2g" === r || 2 === r || "2" === r) return t.abrupt("return", "2G");
                                    t.next = 7;
                                    break;
                                case 7:
                                    if ("2g" === r || 3 === r || "3" === r) return t.abrupt("return", "2G");
                                    t.next = 9;
                                    break;
                                case 9:
                                    if ("3g" === r || 4 === r || "4" === r) return t.abrupt("return", "3G");
                                    t.next = 11;
                                    break;
                                case 11:
                                    if ("4g" === r || 5 === r || "5" === r) return t.abrupt("return", "4G");
                                    t.next = 13;
                                    break;
                                case 13:
                                    if ("5g" === r || 6 === r || "6" === r) return t.abrupt("return", "5G");
                                    t.next = 15;
                                    break;
                                case 15:
                                    return t.abrupt("return", gt);
                                case 16:
                                    return t.next = 18, wx.getNetworkType();
                                case 18:
                                    if (o = t.sent, "unknown" === (i = o && o.networkType)) return t.abrupt("return", "UnknownNetwork");
                                    t.next = 22;
                                    break;
                                case 22:
                                    return t.abrupt("return", i);
                                case 23:
                                    if ("android" === tt() || "ios" === tt()) return t.abrupt("return", ct.netType || gt);
                                    t.next = 25;
                                    break;
                                case 25:
                                    if (J().includes("Safari")) return t.abrupt("return", "UnknownNetwork");
                                    t.next = 27;
                                    break;
                                case 27:
                                    if (navigator) {
                                        t.next = 29;
                                        break
                                    }
                                    return t.abrupt("return", B);
                                case 29:
                                    if (s = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {
                                        effectiveType: void 0
                                    }, o = s.type && s.type.toLowerCase(), s = s.effectiveType && s.effectiveType.toLowerCase(), "wifi" === o || "wifi" === s) return t.abrupt("return", "WIFI");
                                    t.next = 34;
                                    break;
                                case 34:
                                    if ("slow-2g" === s) return t.abrupt("return", "2G");
                                    t.next = 36;
                                    break;
                                case 36:
                                    if ("2g" === s) return t.abrupt("return", "2G");
                                    t.next = 38;
                                    break;
                                case 38:
                                    if ("3g" === s) return t.abrupt("return", "3G");
                                    t.next = 40;
                                    break;
                                case 40:
                                    if ("4g" === s) return t.abrupt("return", "4G");
                                    t.next = 42;
                                    break;
                                case 42:
                                    if ("5g" === s) return t.abrupt("return", "5G");
                                    t.next = 44;
                                    break;
                                case 44:
                                    return t.abrupt("return", B);
                                case 45:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }(),
                W = function () {
                    return P || "android" !== tt() && "ios" !== tt() ? dt : ct.netOp || gt
                }, J = function () {
                    try {
                        if (P) return dt;
                        var t = navigator.userAgent.match(/(MSIE|(?!Gecko.+)Firefox|(?!AppleWebKit.+Chrome.+)Safari|(?!AppleWebKit.+)Chrome|AppleWebKit(?!.+Chrome|.+Safari)|Gecko(?!.+Firefox))(?: |\/)([\d\.apre]+)/);
                        return t && Array.isArray(t) && 3 <= t.length && "".concat(t[1]) || gt
                    } catch (t) {
                        return gt
                    }
                }, V = function () {
                    try {
                        if (P) return dt;
                        var t = window.navigator.userAgent.match(/(MSIE|(?!Gecko.+)Firefox|(?!AppleWebKit.+Chrome.+)Safari|(?!AppleWebKit.+)Chrome|AppleWebKit(?!.+Chrome|.+Safari)|Gecko(?!.+Firefox))(?: |\/)([\d\.apre]+)/);
                        return t && Array.isArray(t) && 3 <= t.length && "".concat(t[2]) || gt
                    } catch (t) {
                        return gt
                    }
                }, X = function () {
                    try {
                        return navigator.userAgent
                    } catch (t) {
                        return gt
                    }
                }, Z = function t(e) {
                    return e ? (e ^ 16 * Math.random() >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, t)
                }, Q = function () {
                    return window.location.href
                }, $ = function () {
                    var t = Q();
                    return ct.getPageId(t)
                }, tt = function () {
                    return !!window && (window.qapmBaseInfo ? "ios" : !!window.QAPMAndroidJsBridge && "android")
                };

            function et() {
                return +new Date()
            }

            function rt(t, e) {
                var r = t + t.slice(0, e - t.length % e),
                    n = 0;
                r.split("").map((function (t) {
                    n += t.charCodeAt(0)
                }));
                for (var i = "", o = 0; o < e; o++) {
                    for (var s = 0, a = 0; a < r.length / e; a++) s = (33 * (s + r.charCodeAt(a * e + o) ^ a) + n) % 127;
                    s = s % 2 == 1 ? s % 10 + 48 : s % 6 + 97, i += String.fromCharCode(s)
                }
                return i
            }
            var nt, it = function (t) {
                return t instanceof Array ? new Map(t.map((function (t) {
                    return [t, !0]
                }))) : new Map()
            }, ot = function () {
                return nt = nt || P.getSystemInfoSync()
            }, st = "",
                at = function () {
                    var t;
                    return "" === st && (t = ot(), st = t.version), st
                }, ut = "",
                ht = function () {
                    var t;
                    return "" === ut && (t = P.getLaunchOptionsSync(), ut = "".concat(t.scene)), ut
                }, ct = (P && ot().SDKVersion, {
                    app_key: "",
                    app_id: "",
                    device_id: "",
                    user_id: "",
                    build_id: "",
                    version: "",
                    ignoreClasses: [],
                    ignoreIds: [],
                    buckets: [],
                    bucket: "",
                    pubkey: "",
                    exposeThreshold: 500,
                    exposeAreaThreshold: .5,
                    allEventCallback: function (t) {
                        var e = t.view_text;
                        return 3 === t.topic && e && (t.view_text = e.replace(/[\d]/gi, "*"), 1 === e.length && -1 !== ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "[", "]", "{", "}", "#", "%", "^", "*", "+", "=", "_", "\\", "|", "~", "<", ">", "€", "£", "¥", "•", "-", "/", ":", ";", "(", ")", "$", "&", "@", '"', ".", ",", "?", "!", "'", "`", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"].indexOf(e) && (t.view_text = "*")), t
                    },
                    domLengthThreshold: 10,
                    TOKEN: "",
                    netType: "",
                    netOp: "",
                    model: "",
                    isRoot: dt,
                    channel_open: "",
                    channel_install: "",
                    os: "",
                    osVer: "",
                    brand: "",
                    excludeUrlReg: [/entrance/, /appconfig\/v7/],
                    getPageId: function (t) {
                        if (!t) return t;
                        var e = t.split("?");
                        return e && Array.isArray(e) && 1 <= e.length ? e[0] : t
                    },
                    collectReqBody: !1,
                    collectRespBody: !1,
                    allowHeaders: []
                }),
                ft = {
                    SWITCH: 0,
                    ALL: {},
                    UBS: {},
                    USR: {},
                    NETWORK: {},
                    LAUNCH: {},
                    JSERROR: {}
                }, lt = {
                    SWITCH: 0,
                    ALL: {},
                    UBS: {},
                    USR: {},
                    NETWORK: {},
                    PAGE: {},
                    LAUNCH: {},
                    JSERROR: {}
                }, pt = {
                    qapm: "https://ten.sngapm.qq.com",
                    appconfig: "https://ten.sngapm.qq.com"
                }, dt = "unsupported",
                gt = "unknown",
                mt = function (t) {
                    var e = t.category,
                        r = t.plugin;
                    t = t.needTranslate;
                    return {
                        app_id: ct.app_id,
                        ab_factor: dt,
                        device_id: ct.device_id,
                        user_id: ct.user_id,
                        build_id: ct.build_id,
                        version: ct.version,
                        arch: "android" === tt() || "ios" === tt() ? ct.arch || gt : dt,
                        sdk_ver: s.a,
                        platform: F(),
                        distribute_channel: "android" === tt() || "ios" === tt() ? ct.distribute_channel || gt : dt,
                        id: Z(),
                        model: U(),
                        brand: N(),
                        os_ver: j(),
                        is_root: H(),
                        os: D(),
                        category: e,
                        plugin: r,
                        need_translate: t
                    }
                }, yt = function () {
                    var t = i()(n.a.mark((function t() {
                        return n.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.t0 = ct.app_id, t.t1 = ct.version, t.t2 = ct.device_id, t.t3 = function () {
                                        if (P) {
                                            var t = ot();
                                            return "".concat(parseInt(t.pixelRatio * t.windowWidth), ",").concat(parseInt(t.pixelRatio * t.windowHeight))
                                        }
                                        return "".concat(parseInt(window.screen.width), ",").concat(parseInt(window.screen.height))
                                    }(), t.t4 = H(), t.t5 = dt, t.t6 = ct.user_id, t.t7 = ct.build_id, t.t8 = ct.bucket, t.t9 = ct.buckets, t.t10 = U(), t.t11 = j(), t.t12 = F(), t.t13 = s.a, t.t14 = N(), t.t15 = D(), t.t16 = W(), t.next = 19, G();
                                case 19:
                                    return t.t17 = t.sent, t.t18 = "android" === tt() || "ios" === tt() ? ct.channel_open || gt : dt, t.t19 = "android" === tt() || "ios" === tt() ? ct.channel_install || gt : dt, t.t20 = {
                                        platform: t.t12,
                                        sdk_ver: t.t13,
                                        brand: t.t14,
                                        os: t.t15,
                                        net_op: t.t16,
                                        net_type: t.t17,
                                        channel_open: t.t18,
                                        channel_install: t.t19
                                    }, t.abrupt("return", {
                                        app_id: t.t0,
                                        version: t.t1,
                                        device_id: t.t2,
                                        display: t.t3,
                                        is_root: t.t4,
                                        ab_factor: t.t5,
                                        user_id: t.t6,
                                        build_id: t.t7,
                                        bucket: t.t8,
                                        buckets: t.t9,
                                        flag: 0,
                                        model: t.t10,
                                        os: t.t11,
                                        app: t.t20
                                    });
                                case 24:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function () {
                        return t.apply(this, arguments)
                    }
                }(),
                vt = function () {
                    var t = getCurrentPages();
                    return Array.isArray(t) && 0 < t.length ? t[t.length - 1] : {}
                }, wt = function () {
                    var t = vt(),
                        e = t && t.route || "",
                        r = t.options,
                        n = "".concat(e, "?");
                    if (r) {
                        for (var i in r) {
                            var o = r[i];
                            n += "".concat(i, "=").concat(o, "&")
                        }
                        return n.substring(0, n.length - 1)
                    }
                    return e
                }, bt = function () {
                    var t = vt();
                    return t && t.route || ""
                }, _t = function () {
                    return vt().__wxWebviewId__
                }, Mt = "QAPM_EVENT_LIST",
                St = [];

            function Et(t) {
                var e = t.category,
                    r = void 0 === (s = t.tags) ? {} : s,
                    n = void 0 === (i = t.values) ? {} : i,
                    i = void 0 === (s = t.label) ? "" : s,
                    s = void 0 === (s = t.value) ? 0 : s;
                t = void 0 === (t = t.action) ? "" : t;
                try {
                    var a = {};
                    return "APP_LAUNCH" !== e && "PERF_" !== e.substr(0, 5) && (e = "CUSTOM_".concat(e)), a.id = Z(), a.time = R(), a.topic = 7, a.extra = "", a.category = e, a.action = t || "", a.label = i || "", a.value = s || 0, a.tags = Object.assign({}, a.tags, r), a.values = Object.assign({}, a.values, n), !1 === xt(a = Bt(a)) ? void 0 : (o.info("event", a), St.push(a), a)
                } catch (a) {
                    o.error(a)
                }
            }

            function Tt(t) {
                try {
                    var e = {
                        tags: t.tags || {},
                        values: t.values || {}
                    };
                    if (e.id = Z(), e.time = R(), e.topic = 4, e.pre_page_id = t.prePageId, e.pre_page = t.prePageUrl, e.page_id = t.curPageId, e.page = t.curPageUrl, e.pre_page_start = t.prePageStart, e.pre_page_end = t.prePageEnd, e.page_start = t.curPageStart, e.tags.d5 = P ? ht() : document.referrer, e.tags.d6 = P ? at() : dt, !1 === xt(e = Bt(e))) return;
                    St.push(e)
                } catch (e) {
                    o.error(e)
                }
            }

            function At(t) {
                Et(t)
            }

            function kt(t) {
                o.info(t), t.tags = {}, t.id = Z(), t.topic = 3, t.time = R(), t.tags.d11 = P ? ht() : document.referrer, t.tags.d12 = P ? at() : dt, !1 !== xt(t = Bt(t)) && St.push(t)
            }

            function xt(t) {
                var e, r, n = t.category,
                    i = t.tags,
                    s = t.values;
                if (7 === t.topic && !n) return o.info("category MUST set"), !1;
                for (e in i)
                    if ("string" != typeof i[e]) return o.info("qapmCustomTrack error, tags value is not string", i), !1;
                for (r in s)
                    if ("number" != typeof s[r]) return o.error("qapmCustomTrack error, values value is not number", s), !1;
                return !0
            }

            function Bt(t) {
                var e = ct.allEventCallback;
                return (e = window && window.qapmEventCallback && "function" == typeof window.qapmEventCallback ? window.qapmEventCallback : e)(t)
            }

            function Pt() {
                return Ct.apply(this, arguments)
            }

            function Ct() {
                return (Ct = i()(n.a.mark((function t() {
                    var e;
                    return n.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                if (0 === St.length) return o.info("event list is empty"), t.abrupt("return");
                                t.next = 3;
                                break;
                            case 3:
                                return t.next = 5, yt();
                            case 5:
                                t.t0 = t.sent, t.t1 = St, e = {
                                    meta: t.t0,
                                    events: t.t1
                                }, e = {
                                    config: {
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        isEncrypt: "true" === (ft && ft.UBS && ft.UBS.is_encryption) || !1,
                                        method: "POST",
                                        isUBS: !0
                                    },
                                    data: e
                                }, (P ? E : S)(e, {}), St = [];
                            case 11:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function Rt() {
                0 !== St.length && m.setItem(Mt, JSON.stringify(St))
            }

            function It() {
                var t;
                setInterval((function () {
                    Pt()
                }), 6e4), P || (t = "onpagehide" in self ? "pagehide" : "unload", tt() ? window.addEventListener(t, Pt) : (window.addEventListener(t, Rt), setTimeout((function () {
                    St = JSON.parse(m.readItem(Mt)) || [], o.info("eventInit upload eventList from storage", St), Pt(), m.removeItem(Mt)
                }), 2e3)))
            }

            function Ot() {
                return "ios" === tt() ? 54 : "android" === tt() ? 154 : P ? 242 : 342
            }
            var Lt = "QAPM_REQUEST_LIST",
                qt = window && window.fetch,
                Nt = !1,
                Ut = !1,
                Ft = [],
                Dt = {}, jt = {}, Ht = ["age", "allow", "accept-ch", "accept-ch-lifetime", "cache-control", "connection", "", "content-encoding", "content-language", "content-length", "content-location", "content-range", "content-security-policy-report-only", "content-security-policy", "content-type", "date", "device-memory", "digest", "dnt", "dpr", "ect", "etag", "expect-ct", "expect", "expires", "feature-policy", "forwarded", "host", "if-match", "if-modified-since", "if-none-match", "if-range", "if-unmodified-since", "keep-alive", "large-allocation", "last-modified", "link", "location", "nel", "origin", "proxy-authenticate", "permissions-policy", "range", "referer", "referrer-policy", "retry-after", "save-data", "server-timing", "server", "service-worker-navigation-preload", "strict-transport-security", "te", "timing-allow-origin", "tk", "trailer", "transfer-encoding", "upgrade-insecure-requests", "upgrade", "user-agent", "vary", "via", "want-digest", "x-content-type-options", "x-dns-prefetch-control", "x-forwarded-for", "x-forwarded-host", "x-forwarded-proto", "x-frame-options", "x-xss-protection"];

            function Kt(t) {
                if ("string" != typeof t) return "object" === h()(t) ? t : {};
                t = t.trim().split(/[\r\n]+/);
                var e = {};
                return t.forEach((function (t) {
                    t = (r = t.split(": ")).shift();
                    var r = r.join(": ");
                    e[t] = r
                })), e
            }

            function zt(t) {
                var e, r = {};
                for (e in t) ! function (e) {
                    var n = e.toLowerCase(),
                        i = Ht.find((function (t) {
                            return t === n
                        })),
                        o = ct.allowHeaders.find((function (t) {
                            return t === n
                        }));
                    (i || o) && (r[n] = t[e])
                }(e);
                return r
            }

            function Yt(t, e) {
                return P ? function (t) {
                    if (o.info("getMpNetReqProfile", t.profile), t && t.profile) return {
                        conn_start: (t = t.profile).connectStart,
                        conn_end: t.connectEnd,
                        dns_start: t.domainLookupStart,
                        dns_end: t.domainLookupEnd,
                        req_start: t.requestStart,
                        req_end: t.requestEnd,
                        resp_start: t.responseStart,
                        resp_end: t.responseEnd,
                        start_time: t.requestStart,
                        end_time: t.responseEnd,
                        redirect_start: t.redirectStart,
                        redirect_end: t.redirectEnd,
                        ssl_conn_end: t.SSLconnectionEnd,
                        ssl_conn_start: t.SSLconnectionStart,
                        fetch_start: t.fetchStart,
                        rtt: t.rtt,
                        peer_ip: t.peerIP,
                        port: t.port,
                        socket_reused: t.socketReused,
                        estimate_nettype: t.estimate_nettype,
                        http_rtt_estimate: t.httpRttEstimate,
                        transport_rtt_estimate: t.transportRttEstimate,
                        downstream_throughput_kbps_estimate: t.downstreamThroughputKbpsEstimate,
                        throughput_kbps: t.throughputKbps
                    }
                }(e) : function (t) {
                    try {
                        var e = performance.getEntriesByName(t),
                            r = e[e.length - 1];
                        return o.info("getResourcePerformance", t, e, r), r ? {
                            conn_start: L(r.connectStart),
                            conn_end: L(r.connectEnd),
                            dns_start: L(r.domainLookupStart),
                            dns_end: L(r.domainLookupEnd),
                            req_start: L(r.requestStart),
                            req_end: L(r.responseStart),
                            resp_start: L(r.responseStart),
                            resp_end: L(r.responseEnd),
                            start_time: L(r.startTime),
                            end_time: L(r.responseEnd),
                            redirect_start: L(r.redirectStart),
                            redirect_end: L(r.redirectEnd),
                            ssl_conn_end: L(r.connectEnd),
                            ssl_conn_start: L(r.secureConnectionStart)
                        } : void o.info("can not find resourcePerformance", t)
                    } catch (t) {
                        return void o.info(t)
                    }
                }(t)
            }

            function Gt(t) {
                return Wt.apply(this, arguments)
            }

            function Wt() {
                return (Wt = i()(n.a.mark((function t(e) {
                    var r, i, s, a, u, h, c, f, p, d, g, m, y, v, w, b, _, M, S, E, T, A;
                    return n.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                if (r = e.id, i = e.method, s = e.url, a = e.httpStatus, u = e.req, h = e.res, c = e.startTime, function (t) {
                                    return ct.excludeUrlReg.some((function (e) {
                                        return e.test(t)
                                    }))
                                }(s)) return o.info("url is exclude", s, ct.excludeUrlReg), t.abrupt("return");
                                t.next = 4;
                                break;
                            case 4:
                                if (s) {
                                    t.next = 7;
                                    break
                                }
                                return o.info("url is empty", s), t.abrupt("return");
                            case 7:
                                f = e.respHeaders, p = e.reqHeaders, d = C(), g = (g = Yt(s, h)) || {}, p = Kt(p), f = Kt(f), o.info("onRequestComplete headers real", p, f), p = zt(p), f = zt(f), k = s, x = h, k = l(u) + l(k), m = P && x.profile && x.profile.sendBytesCount || k, n = s, x = f, x = l(k = h) + l(n) + l(x), y = P && k.profile && k.profile.receivedBytedCount || x, v = d - c, o.info("onRequestComplete headers filter", p, f), o.info("debug onRequestComplete requestList", Ft), o.info("debug new url ", s), w = "";
                                try {
                                    b = s.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i), w = b && b[1] || new URL(s).hostname
                                } catch (t) {
                                    w = s
                                }
                                return k = v, _ = 51200 < (x = y) && x / (k / 1e3) < 10240 || x <= 51200 && 2e3 < k ? "true" : "false", M = !(k = a) || 400 <= k || -1 === k ? "true" : "false", t.next = 28, G(h);
                            case 28:
                                S = t.sent, E = dt, P && g.peer_ip && g.port && (E = "".concat(g.peer_ip, ":").concat(g.port));
                                try {
                                    "true" !== _ && "true" !== M || (T = {
                                        protocol: "http",
                                        url: s,
                                        browser: J(),
                                        browser_ver: V(),
                                        startTime: c,
                                        endTime: d,
                                        referrer: P ? ht() : document.referrer,
                                        cost: v,
                                        method: i,
                                        status_code: a || -1,
                                        bytes_sent: m,
                                        bytes_received: y,
                                        host_ip: E,
                                        conn_start: g.conn_start || 0,
                                        conn_end: g.conn_end || 0,
                                        dns_start: g.dns_start || 0,
                                        dns_end: g.dns_end || 0,
                                        req_start: g.req_start || 0,
                                        req_end: g.req_end || 0,
                                        resp_start: g.resp_start || 0,
                                        resp_end: g.resp_end || 0,
                                        start_time: g.start_time || c,
                                        end_time: g.end_time || d,
                                        redirect_start: g.redirect_start || 0,
                                        redirect_end: g.redirect_end || 0,
                                        ssl_conn_end: g.ssl_conn_end || 0,
                                        ssl_conn_start: g.ssl_conn_start || 0,
                                        req_headers: p,
                                        resp_headers: f,
                                        req: ct.collectReqBody ? u : {},
                                        res: ct.collectRespBody ? h : {}
                                    }, P && (T = Object.assign({}, T, {
                                        wx_version: at(),
                                        estimate_nettype: g.estimate_nettype || 0,
                                        http_rtt_estimate: g.http_rtt_estimate || 0,
                                        transport_rtt_estimate: g.transport_rtt_estimate || 0,
                                        downstream_throughput_kbps_estimate: g.downstream_throughput_kbps_estimate || 0,
                                        throughput_kbps: g.throughput_kbps || 0
                                    })), A = {
                                        id: r,
                                        time: c,
                                        page_id: (P ? bt : $)(),
                                        battery_level: -1,
                                        net_type: S,
                                        net_op: W(),
                                        service_data: JSON.stringify(T)
                                    }, Ft.push(A)), At({
                                        category: "PERF_NET_REQUEST",
                                        tags: {
                                            d1: s,
                                            d2: w,
                                            d3: "http",
                                            d4: M,
                                            d5: "false",
                                            d6: _,
                                            d7: W(),
                                            d8: dt,
                                            d9: S,
                                            d10: dt,
                                            d11: dt,
                                            d12: E,
                                            d13: (a || -1).toString(),
                                            d14: F(),
                                            d15: P ? ht() : document.referrer,
                                            d16: J(),
                                            d17: V(),
                                            d18: (P ? bt : $)(),
                                            d20: P && g.protocol || dt,
                                            d21: P ? at() : dt
                                        },
                                        values: {
                                            v1: v,
                                            v2: m,
                                            v3: y,
                                            v4: g.dns_end - g.dns_start || 0,
                                            v5: g.conn_end - g.conn_start || 0,
                                            v6: g.ssl_conn_end - g.ssl_conn_start || 0,
                                            v7: g.redirect_end - g.redirect_start || 0,
                                            v8: g.req_end - g.req_start || 0,
                                            v9: !(6e5 < g.resp_end - g.resp_start) && g.resp_end - g.resp_start || 0,
                                            v10: g.rtt || 0,
                                            v11: g.http_rtt_estimate || 0,
                                            v12: g.transport_rtt_estimate || 0,
                                            v13: g.downstream_throughput_kbps_estimate || 0,
                                            v14: g.throughput_kbps || 0
                                        }
                                    })
                                } catch (t) {
                                    o.error("upload network data error:", t)
                                }
                            case 32:
                            case "end":
                                return t.stop()
                        }
                        var n, k, x
                    }), t)
                })))).apply(this, arguments)
            }

            function Jt() {
                ! function () {
                    var t = wx.request;
                    try {
                        Object.defineProperty(P, "request", {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            value: function () {
                                try {
                                    var e = arguments[0] || {}, r = Z(),
                                        n = C(),
                                        i = e.header || {}, s = e.complete;
                                    e.complete = function (t) {
                                        var o = t.header;
                                        if (Gt({
                                            id: r,
                                            startTime: n,
                                            method: e.method || "GET",
                                            url: e.url,
                                            httpStatus: t.statusCode,
                                            req: e,
                                            res: t,
                                            respHeaders: o,
                                            reqHeaders: i
                                        }), s) return s.apply(this, arguments)
                                    }
                                } catch (t) {
                                    o.error("hook wx request error", t)
                                } finally {
                                    return t.apply(this, arguments)
                                }
                            }
                        })
                    } catch (e) {
                        o.error("hook wx request error", e), wx.request = t
                    }
                }()
            }

            function Vt() {
                ! function () {
                    if (!0 !== Ut && window.XMLHttpRequest) {
                        Ut = !0;
                        try {
                            var t = Dt;
                            t.xhrOpen || (t.xhrOpen = XMLHttpRequest.prototype.open, t.xhrSend = XMLHttpRequest.prototype.send, t.xhrSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader, XMLHttpRequest.prototype.send = function () {
                                t.sendArguments = arguments[0], t.xhrSend.apply(this, arguments)
                            }, XMLHttpRequest.prototype.setRequestHeader = function (e, r) {
                                o.info("requestHeaders", e, r), t.xhrSetRequestHeader.apply(this, arguments), this.reqeustHeaders || (this.reqeustHeaders = {}), this.reqeustHeaders[e] ? this.reqeustHeaders[e] += ";".concat(r) : this.reqeustHeaders[e] = r
                            }, XMLHttpRequest.prototype.open = function (e, r) {
                                var n = Z();
                                o.info("debug hookXHR url", e, r), o.info("this requestHeaders", this.reqeustHeaders);
                                var i = C();
                                this.addEventListener("loadend", (function () {
                                    var o = this.getAllResponseHeaders() || {}, s = this.reqeustHeaders;
                                    r.match(/^(https?:)?\/\/([^\/]+)/) || (r = "/" === r[0] ? window.location.origin + r : "".concat(window.location.origin, "/").concat(r)), Gt({
                                        id: n,
                                        startTime: i,
                                        method: e || "GET",
                                        url: r,
                                        httpStatus: this.status,
                                        req: t.sendArguments,
                                        res: this.responseText,
                                        respHeaders: o,
                                        reqHeaders: s
                                    })
                                })), t.xhrOpen.apply(this, arguments)
                            })
                        } catch (t) {
                            o.info(t)
                        }
                    }
                }(),
                    function () {
                        if (!0 !== Nt && window.fetch) {
                            Nt = !0;
                            try {
                                var t = jt;
                                Object.defineProperty(window, "fetch", {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: function () {
                                        return function (e, r) {
                                            o.info("debug hookFetch url", e, r);
                                            var s = Z(),
                                                a = C();
                                            return t.sendArguments = r, qt(e, r).then(function () {
                                                var e = i()(n.a.mark((function e(i) {
                                                    var u, h;
                                                    return n.a.wrap((function (e) {
                                                        for (; ;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.prev = 0, e.next = 3, i.clone().text();
                                                            case 3:
                                                                u = e.sent, h = {}, o.info("debug hookFetch before onRequestComplete", s), Gt({
                                                                    id: s,
                                                                    startTime: a,
                                                                    method: r && r.method || "GET",
                                                                    url: i.url,
                                                                    httpStatus: i.status,
                                                                    req: t.sendArgumentss,
                                                                    res: u,
                                                                    respHeaders: i.headers || {},
                                                                    reqHeaders: h
                                                                }), e.next = 13;
                                                                break;
                                                            case 10:
                                                                e.prev = 10, e.t0 = e.
                                                                    catch(0), o.info(e.t0);
                                                            case 13:
                                                                return e.abrupt("return", i);
                                                            case 14:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e, null, [
                                                        [0, 10]
                                                    ])
                                                })));
                                                return function (t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()).
                                                catch((function (t) {
                                                    throw t
                                                }))
                                        }
                                    },
                                    set: function (t) {
                                        qt = t
                                    }
                                })
                            } catch (t) {
                                o.info(t)
                            }
                        }
                    }()
            }

            function Xt() {
                var t;
                0 !== Ft.length ? (t = {
                    meta: mt({
                        category: "PERF_NET_REQUEST",
                        plugin: Ot(),
                        needTranslate: "false"
                    }),
                    data: Ft
                }, o.info("uploadNetworkData", t), t = {
                    config: {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        isEncrypt: ft && ft.NETWORK && "true" === ft.NETWORK.is_encryption || !1,
                        dataLength: Ft.length,
                        plugin: Ot(),
                        method: "POST",
                        isQAPM: !0
                    },
                    data: t
                }, o.info("debug uploadNetworkData requestConfig", t), (P ? E : S)(t, {}), Ft = []) : o.debug("request list is empty", Ft)
            }

            function Zt() {
                0 !== Ft.length && m.setItem(Lt, JSON.stringify(Ft))
            }

            function Qt() {
                var t;
                (P ? Jt : Vt)(), setInterval((function () {
                    Xt()
                }), 6e4), P || (t = "onpagehide" in self ? "pagehide" : "unload", tt() ? window.addEventListener(t, Xt) : (window.addEventListener(t, Zt), setTimeout((function () {
                    Ft = JSON.parse(m.readItem(Lt)) || [], o.info("netowrkInit upload requestList from storage", Ft), Xt(), m.removeItem(Lt)
                }), 2e3)))
            }

            function $t() {
                return P ? 243 : "android" === tt() ? 143 : "ios" === tt() ? 43 : 343
            }

            function te(t, e) {
                return ee.apply(this, arguments)
            }

            function ee() {
                return (ee = i()(n.a.mark((function t(e, r) {
                    var i, s, a, u, h;
                    return n.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                o.info("debug formatJsErrorData", r), a = s = i = "", u = [];
                                try {
                                    "WebError" === e ? (a = r[4].stack, u = r[4].stack.split("\n"), i = r[0].split(":")[0], s = r[0].split(":").slice(1).join(""), (u[0].includes(i) || u[0].includes(s)) && u.shift()) : s = "MpError" === e ? (u = (a = r).split("\n"), i = u[2].split(":")[0], u[2].split(":").slice(1).join("")) : "PromiseError" === e ? (a = r.reason.stack || r.reason, u = r.reason.stack ? r.reason.stack.split("\n") : [r.reason], i = "PromiseError", dt) : (a = r, u[0] = r, i = "Error", r)
                                } catch (t) {
                                    i = "Error", s = "", u[0] = JSON.stringify(r)
                                }
                                return u.forEach((function (t, e) {
                                    return u[e] = t.trim()
                                })), h = {
                                    browser: J(),
                                    browser_ver: V(),
                                    error_type: i,
                                    error_value: s,
                                    referrer: P ? ht() : document.referrer,
                                    stack: {
                                        time_slices: [{
                                            threads: [{
                                                frame: {
                                                    calls: u
                                                }
                                            }]
                                        }]
                                    }
                                }, P && (h = Object.assign({}, h, {
                                    wx_version: at()
                                })), t.t0 = At, t.t1 = (P ? bt : $)(), t.t2 = i, t.t3 = s, t.t4 = a && a.substring(0, 64), t.t5 = P ? at() : dt, t.t6 = W(), t.t7 = dt, t.next = 19, G({});
                            case 19:
                                t.t8 = t.sent, t.t9 = J(), t.t10 = V(), t.t11 = a, t.t12 = {
                                    d1: t.t1,
                                    d2: t.t2,
                                    d3: t.t3,
                                    d4: t.t4,
                                    d5: t.t5,
                                    d7: t.t6,
                                    d8: t.t7,
                                    d9: t.t8,
                                    d10: t.t9,
                                    d11: t.t10,
                                    info1: t.t11
                                }, t.t13 = {
                                    category: "PERF_JS_ERROR",
                                    tags: t.t12
                                }, (0, t.t0)(t.t13),
                                    function (t) {
                                        re.apply(this, arguments)
                                    }(h);
                            case 27:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function re() {
                return (re = i()(n.a.mark((function t(e) {
                    var r;
                    return n.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                t.next = 2;
                                break;
                            case 2:
                                return t.t0 = mt({
                                    plugin: $t(),
                                    needTranslate: "true",
                                    category: "PERF_JS_ERROR"
                                }), t.t1 = Z(), t.t2 = C(), t.t3 = (P ? bt : $)(), t.t4 = -1, t.next = 9, G({});
                            case 9:
                                t.t5 = t.sent, t.t6 = W(), t.t7 = JSON.stringify(e), t.t8 = {
                                    id: t.t1,
                                    time: t.t2,
                                    page_id: t.t3,
                                    battery_level: t.t4,
                                    net_type: t.t5,
                                    net_op: t.t6,
                                    service_data: t.t7
                                }, t.t9 = [t.t8], r = {
                                    meta: t.t0,
                                    data: t.t9
                                }, r = {
                                    config: {
                                        headers: {
                                            "Content-Type": "application/x-www-form-urlencoded"
                                        },
                                        isEncrypt: ft && ft.JSERROR && "true" === ft.JSERROR.is_encryption || !1,
                                        dataLength: 1,
                                        plugin: $t(),
                                        method: "POST",
                                        isQAPM: !0
                                    },
                                    data: r
                                }, (P ? E : S)(r, {});
                            case 17:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function ne() {
                var t, e;
                P ? (e = P.onError, P.onError((function () {
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    te.apply(void 0, ["MpError"].concat(r)), e && e.call.apply(e, [P].concat(r))
                })), P.onUnhandledRejection && P.onUnhandledRejection((function (t) {
                    te("PromiseError", t)
                }))) : (t = window.onerror, window.onerror = function () {
                    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    te("WebError", r), t && t.call.apply(t, [window].concat(r))
                }, window.addEventListener("unhandledrejection", (function (t) {
                    te("PromiseError", t)
                })))
            }
            var ie = function () {
                return "ios" === tt() ? 41 : "android" === tt() ? 141 : P ? 241 : 341
            };

            function oe() {
                return se.apply(this, arguments)
            }

            function se() {
                return (se = i()(n.a.mark((function t() {
                    var e, r, i, s, a;
                    return n.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                if (P) return t.abrupt("return");
                                t.next = 2;
                                break;
                            case 2:
                                if (i = function () {
                                    try {
                                        var t = K();
                                        if (void 0 === t) return {
                                            timing: {},
                                            performanceEntries: []
                                        };
                                        var e = t.timing,
                                            r = t.getEntriesByType("paint"),
                                            n = {
                                                fp: {},
                                                fcp: {}
                                            };
                                        Array.isArray(r) && r.forEach((function (t) {
                                            "first-paint" === t.name && (n.fp = {
                                                start: L(t.startTime),
                                                end: L(t.startTime) + t.duration,
                                                duration: t.duration
                                            }), "first-contentful-paint" === t.name && (n.fcp = {
                                                start: L(t.startTime),
                                                end: L(t.startTime) + t.duration,
                                                duration: t.duration
                                            })
                                        }));
                                        var i = {
                                            connect_start: e.connectStart,
                                            connect_end: e.connectEnd,
                                            dom_complete: e.domComplete,
                                            dom_content_loaded_event_start: e.domContentLoadedEventStart,
                                            dom_content_loaded_event_end: e.domContentLoadedEventEnd,
                                            dom_interactive: e.domInteractive,
                                            dom_loading: e.domLoading,
                                            domain_lookup_start: e.domainLookupStart,
                                            domain_lookup_end: e.domainLookupEnd,
                                            fetch_start: e.fetchStart,
                                            load_event_start: e.loadEventStart,
                                            load_event_end: e.loadEventEnd,
                                            navigation_start: e.navigationStart,
                                            redirect_start: e.redirectStart,
                                            redirect_end: e.redirectEnd,
                                            request_start: e.requestStart,
                                            response_start: e.responseStart,
                                            response_end: e.responseEnd,
                                            secure_connection_start: e.secureConnectionStart,
                                            unload_event_start: e.unloadEventStart,
                                            unload_event_end: e.unloadEventEnd
                                        }, s = t.getEntries(),
                                            a = [];
                                        return s.forEach((function (t) {
                                            a.push({
                                                url: t.name,
                                                resource_type: t.initiatorType,
                                                next_hop_protocol: t.nextHopProtocol,
                                                host_ip: dt,
                                                domain_look_up_end: L(t.domainLookupEnd),
                                                domain_look_up_start: L(t.domainLookupEnd),
                                                connect_end: L(t.connectEnd),
                                                connect_start: L(t.connectStart),
                                                ssl_connection_end: L(t.secureConnectionStart),
                                                ssl_connection_start: L(t.secureConnectionStart),
                                                fetch_start: L(t.fetchStart),
                                                request_start: L(t.requestStart),
                                                request_end: L(t.responseStart),
                                                response_end: L(t.responseEnd),
                                                response_start: L(t.responseStart),
                                                duration: t.duration,
                                                encoded_body_size: t.encodedBodySize || 0,
                                                transfer_size: t.transferSize || 0,
                                                worker_start: L(t.workerStart),
                                                entry_type: t.entryType,
                                                resource_request_trigger_time: L(t.requestStart),
                                                resource_request_handle_time: L(t.domainLookupEnd),
                                                redirect_start: L(t.redirectStart),
                                                redirect_end: L(t.redirectEnd),
                                                is_first_screen_resource: 1
                                            })
                                        })), {
                                            timing: i,
                                            performanceEntries: a,
                                            paint: n
                                        }
                                    } catch (t) {
                                        return o.info(t), {
                                            timing: {},
                                            performanceEntries: []
                                        }
                                    }
                                }(), r = i.timing, e = void 0 === r ? {} : r, s = i.performanceEntries, r = void 0 === s ? [] : s, s = i.paint, i = void 0 === s ? {} : s, o.info("timing", e), e.load_event_end <= 0 || 2147483647 < e.load_event_end - e.fetch_start) return o.info("timing.load_event_end <= 0 || timing.load_event_end-timing.fetch_start > 2147483647"), t.abrupt("return");
                                t.next = 7;
                                break;
                            case 7:
                                if (e.load_event_start <= 0) return o.info("timing.load_event_start<=0"), t.abrupt("return");
                                t.next = 10;
                                break;
                            case 10:
                                if (e.dom_complete <= 0) return o.info("timing.dom_complete <=0"), t.abrupt("return");
                                t.next = 13;
                                break;
                            case 13:
                                if (e.dom_loading <= 0) return o.info("timing.dom_loading <=0"), t.abrupt("return");
                                t.next = 16;
                                break;
                            case 16:
                                if (e.dom_content_loaded_event_end <= 0) return o.info("timing.dom_content_loaded_event_end <=0"), t.abrupt("return");
                                t.next = 19;
                                break;
                            case 19:
                                if (e.load_event_end - e.navigation_start <= 0 || 1e6 < e.load_event_end - e.navigation_start) return t.abrupt("return");
                                t.next = 21;
                                break;
                            case 21:
                                return s = Q(), a = $(), At({
                                    category: "PERF_WEB_PAGE_LOAD",
                                    tags: {
                                        d1: s,
                                        d2: a,
                                        d3: document.referrer,
                                        d4: "true",
                                        d10: J(),
                                        d11: V()
                                    },
                                    values: {
                                        v1: e.connect_start,
                                        v2: e.connect_end,
                                        v3: e.dom_complete,
                                        v4: e.dom_content_loaded_event_start,
                                        v5: e.dom_content_loaded_event_end,
                                        v6: e.dom_interactive,
                                        v7: e.dom_loading,
                                        v8: e.domain_lookup_start,
                                        v9: e.domain_lookup_end,
                                        v10: e.fetch_start,
                                        v11: e.load_event_start,
                                        v12: e.load_event_end,
                                        v13: e.navigation_start,
                                        v14: e.redirect_start,
                                        v15: e.redirect_end,
                                        v16: e.request_start,
                                        v17: e.response_start,
                                        v18: e.response_end,
                                        v19: e.secure_connection_start,
                                        v20: e.unload_event_start,
                                        v21: e.unload_event_end,
                                        v22: i.fp.start || 0,
                                        v23: i.fp.end || 0,
                                        v24: i.fcp.start || 0,
                                        v25: i.fcp.end || 0
                                    }
                                }), t.t0 = mt({
                                    category: "PERF_WEB_PAGE_LOAD",
                                    plugin: ie(),
                                    needTranslate: "false"
                                }), t.t1 = Z(), t.t2 = C(), t.t3 = a, t.t4 = -1, t.next = 31, G({});
                            case 31:
                                t.t5 = t.sent, t.t6 = W(), t.t7 = JSON.stringify({
                                    referrer: document.referrer,
                                    url: Q(),
                                    browser: J(),
                                    browser_ver: V(),
                                    ua: X(),
                                    performance_timing: e,
                                    performance_entries: r,
                                    paint: i
                                }), t.t8 = {
                                    id: t.t1,
                                    time: t.t2,
                                    page_id: t.t3,
                                    battery_level: t.t4,
                                    net_type: t.t5,
                                    net_op: t.t6,
                                    service_data: t.t7
                                }, t.t9 = [t.t8], a = {
                                    meta: t.t0,
                                    data: t.t9
                                }, a = {
                                    config: {
                                        headers: {
                                            "Content-Type": "application/x-www-form-urlencoded"
                                        },
                                        isEncrypt: ft && ft.LAUNCH && "true" === ft.LAUNCH.is_encryption || !1,
                                        plugin: ie(),
                                        dataLength: 1,
                                        method: "POST",
                                        isQAPM: !0
                                    },
                                    data: a
                                }, o.info("uploadWebLaunchData", a), P || S(a, {});
                            case 40:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function ae() {
                "complete" === document.readyState ? (o.info("document ready!!"), oe()) : window.addEventListener("load", (function () {
                    o.info("document load ready"), oe()
                }))
            }
            var ue = !P;

            function he() {
                ue && setInterval((function () {
                    var t = document.body.querySelectorAll("*").length,
                        e = ct.domLengthThreshold;
                    t < e && (o.info("!!!maybe white screen,domLength is ", t, ",domLengthThreshold is ", e), Et({
                        category: "PERF_WHTIE_SCREEN",
                        values: {
                            v1: t,
                            v2: e
                        },
                        tags: {
                            d1: $(),
                            d4: F(),
                            d10: J(),
                            d11: V()
                        }
                    }))
                }), 1e4)
            }
            var ce = "QAPM_WEB_APPCONFIG_V7",
                fe = {
                    ALL: 193273528320,
                    UBS: 137438953472,
                    NETWORK: 4294967296,
                    LAUNCH: 17179869184,
                    JSERROR: 34359738368
                }, le = {
                    ALL: 8594186240,
                    UBS: 32768,
                    NETWORK: 8192,
                    LAUNCH: 4194304,
                    JSERROR: 16384,
                    PAGE: 8589934592
                };

            function pe(t) {
                try {
                    var e = !1,
                        r = !1,
                        n = !1,
                        i = !1,
                        s = !1,
                        a = 0;
                    return "android" === tt() || "ios" === tt() ? a = ft.SWITCH : P ? (a = t && t.
                        switch || 0, lt.SWITCH = a, lt.UBS = t.data.ubs, lt.USR = t.data.usr, lt.JSERROR = t.data.p_243, lt.NETWORK = t.data.p_242, lt.PAGE = t.data.p_288, lt.LAUNCH = t.data.p_266) : (a = t && t.
                            switch || 0, ft.SWITCH = a, ft.UBS = t.data.ubs, ft.USR = t.data.usr, ft.JSERROR = t.data.p_343, ft.NETWORK = t.data.p_342, ft.LAUNCH = t.data.p_341), P ? (e = 0 !== q(a, le.UBS), r = 0 !== q(a, le.NETWORK), n = 0 !== q(a, le.JSERROR), i = 0 !== q(a, le.LAUNCH), s = 0 !== q(a, le.PAGE)) : (e = 0 !== q(a, fe.UBS), r = 0 !== q(a, fe.NETWORK), n = 0 !== q(a, fe.JSERROR), i = 0 !== q(a, fe.LAUNCH)), {
                        openUBS: e,
                        openNetwork: r,
                        openJsError: n,
                        openLaunch: i,
                        openPage: s
                    }
                } catch (t) {
                    return o.error(t), {}
                }
            }

            function de(t) {
                return new Promise((function (e, r) {
                    try {
                        var n, i = t.app_key.split("-")[1],
                            s = t.version,
                            a = ct.user_id,
                            u = U(),
                            h = j(),
                            f = F(),
                            l = c,
                            p = {
                                data: {
                                    device: u,
                                    user_id: a,
                                    os_ver: h,
                                    device_id: m.readItem("QAPM_DEVICE_ID"),
                                    md5_code: "",
                                    user_switch: (P ? le : fe).ALL,
                                    version: s,
                                    sdk_ver: l,
                                    last_switch: (P ? le : fe).ALL,
                                    app_id: i,
                                    hit: 0,
                                    is_vip: "true",
                                    model: U(),
                                    platform: f
                                },
                                config: {
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    method: "POST",
                                    isAppconfig: !0
                                }
                            }, d = ge();
                        d ? (p.data.md5_code = d.md5, 2592e6 < (n = (new Date()).getTime() - new Date(d.hitTime).getTime()) && d.hitTime && (delete d.hit, delete d.hitTime), p.data.hit = d.hit || 0, p.data.last_switch = d.
                            switch) : (d = {}, o.info("本地appconfig不存在")), (P ? E : S)(p, {
                                onSuccess: function (t) {
                                    var r = d;
                                    if (404 !== t.statusCode && 404 !== t.data) {
                                        if ("string" == typeof t.data) try {
                                            t.data = JSON.parse(t.data)
                                        } catch (r) {
                                            return void o.info("get appconfig fail", t)
                                        }
                                        0 < t.data.
                                            switch && !d.hitTime && (t.data.hit = 1, t.data.hitTime = new Date(), r.hit = 1, r.hitTime = new Date()), d.hitTime && (t.data.hit = 1, t.data.hitTime = d.hitTime, r.hit = 1, r.hitTime = d.hitTime), 1e3 === t.data.status && (t.data.time = new Date(), m.setItem(ce, JSON.stringify(t.data)), e(t.data)), 1200 === t.data.status && (r.
                                                switch = t.data.
                                                    switch, r.time = new Date(), m.setItem(ce, JSON.stringify(r)), e(d))
                                    } else o.info("get appconfig fail", t)
                                }
                            })
                    } catch (n) {
                        o.info(n), r(n)
                    }
                }))
            }

            function ge() {
                try {
                    var t = m.readItem(ce);
                    return t ? "string" == typeof t ? JSON.parse(t) : t : {}
                } catch (t) {
                    return o.info(t), {}
                }
            }
            e = r(33);
            var me = r.n(e),
                ye = {
                    logLevel: "debug",
                    levelMap: {
                        debug: 1,
                        info: 2,
                        log: 3,
                        warn: 4,
                        error: 5,
                        none: 6
                    },
                    enableLogLevel: function (t) {
                        var e = this.levelMap[t];
                        if (null == e) return !1;
                        var r = this.levelMap[this.logLevel];
                        return null != t && r <= e
                    }
                };

            function ve(t, e) {
                var r, n = Object.keys(t);
                return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)), n
            }

            function we(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ve(Object(r), !0).forEach((function (e) {
                        me()(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ve(Object(r)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function be() {
                if (P) return 288
            } ["debug", "info", "log", "warn", "error"].map((function (t) {
                ye[t] = function () {
                    if (this.enableLogLevel(t)) {
                        for (var e, r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                        (e = console)[t].apply(e, ["QAPM, track-js,"].concat(n))
                    }
                }
            }));
            e = "_background_";
            var _e = {
                customState: "stop",
                prePageUrl: "",
                prePageId: "",
                prePageStart: R(),
                prePageEnd: R(),
                curPageUrl: e,
                curPageId: e,
                curPageStart: R()
            }, Me = {
                isFirstPageInit: !1,
                isFirstPageReady: !1,
                firstInitTime: 0,
                firstReadyTime: 0,
                page: ""
            }, Se = {}, Ee = [],
                Te = {
                    on_load: {
                        start_time: 0,
                        end_time: 0
                    },
                    on_ready: {
                        start_time: 0,
                        end_time: 0
                    },
                    on_show: {
                        start_time: 0,
                        end_time: 0
                    },
                    on_hide: {
                        start_time: 0,
                        end_time: 0
                    },
                    on_unload: {
                        start_time: 0,
                        end_time: 0
                    }
                };

            function Ae(t, e, r) {
                var n = Object.assign({}, {
                    data: -1,
                    size: -1,
                    start_time: 0,
                    end_time: 0
                });
                n.size = 2 * JSON.stringify(t).length / 1024, n.data = {}, n.start_time = e, n.end_time = r, Ee.push(n)
            }

            function ke(t, e, r) {
                setTimeout((function () {
                    var n, i;
                    o.info("customPageState", _e.customState), "start" !== _e.customState ? (n = "customPageChange" === t ? r : location.href, _e.curPageUrl !== n ? (_e.prePageUrl = _e.curPageUrl, _e.prePageId = _e.curPageId, _e.prePageStart = _e.curPageStart, _e.prePageEnd = R(), "customPageChange" === t ? (_e.curPageId = e, _e.curPageUrl = r) : (_e.curPageId = $(), _e.curPageUrl = Q()), _e.curPageStart = R(), "ios" === (i = tt()) && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.QAPM && window.webkit.messageHandlers.QAPM.postMessage ? (o.info("send webview pageInfo to native", {
                        functionName: "webviewPageChange",
                        pageId: _e.curPageId,
                        page: _e.curPageUrl,
                        time: et()
                    }), window.webkit.messageHandlers.QAPM.postMessage({
                        functionName: "webviewPageChange",
                        pageId: _e.curPageId,
                        page: _e.curPageUrl,
                        time: et()
                    })) : "android" === i && window.QAPMAndroidJsBridge && window.QAPMAndroidJsBridge.webviewPageChange ? (o.info("send webview pageInfo to native", _e.curPageId, _e.curPageUrl, et()), window.QAPMAndroidJsBridge.webviewPageChange(_e.curPageId, _e.curPageUrl, et())) : Tt(we({
                        eventType: t
                    }, _e))) : o.warn("page change event, url is same", _e.curPageUrl, n)) : o.info("User-defined page id is being used")
                }), 0)
            }

            function xe(t) {
                return Be.apply(this, arguments)
            }

            function Be() {
                return (Be = i()(n.a.mark((function t(e) {
                    var r, i;
                    return n.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                t.next = 2;
                                break;
                            case 2:
                                return r = {
                                    referrer: ht(),
                                    page: bt(),
                                    methods: Te,
                                    setdata_list: Ee,
                                    perfInfo: "{}",
                                    isAppLaunch: "false",
                                    isRoute: "false"
                                }, e && (r.perfInfo = e.perfInfo || "", r.isAppLaunch = e.isAppLaunch, r.isRoute = e.isRoute), P && (r = Object.assign({}, r, {
                                    wx_version: at()
                                })), t.t0 = mt({
                                    plugin: be(),
                                    needTranslate: "false",
                                    category: "PERF_PAGE_LOAD"
                                }), t.t1 = Z(), t.t2 = C(), t.t3 = bt(), t.next = 11, G();
                            case 11:
                                t.t4 = t.sent, t.t5 = W(), t.t6 = -1, t.t7 = JSON.stringify(r), t.t8 = {
                                    id: t.t1,
                                    time: t.t2,
                                    page_id: t.t3,
                                    net_type: t.t4,
                                    net_op: t.t5,
                                    battery_level: t.t6,
                                    service_data: t.t7
                                }, t.t9 = [t.t8], i = {
                                    meta: t.t0,
                                    data: t.t9
                                }, i = {
                                    config: {
                                        headers: {
                                            "Content-Type": "application/x-www-form-urlencoded"
                                        },
                                        isEncrypt: !1,
                                        dataLength: 1,
                                        plugin: be(),
                                        method: "POST",
                                        isQAPM: !0
                                    },
                                    data: i
                                }, E(i);
                            case 20:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function Pe() {
                P ? function () {
                    var t, e;
                    ! function () {
                        o.info("hook wx page");
                        var t = {
                            onLoad: {
                                before: function (t) {
                                    ! function (t) {
                                        if (t && t.setData) {
                                            var e, r = t.setData;
                                            try {
                                                t.setUpdatePerformanceListener ? t.setUpdatePerformanceListener({
                                                    withDataPaths: !0
                                                }, (function (t) {
                                                    o.info("setdata res", t), Ae(t.dataPaths, t.pendingStartTimestamp, t.updateEndTimestamp)
                                                })) : (e = t.setData, t.setData = function () {
                                                    var r = arguments[1],
                                                        n = C(),
                                                        i = arguments[0];
                                                    return e.call(t, i, (function () {
                                                        var e = C();
                                                        return Ae(i, n, e), r && r.apply(t, arguments)
                                                    }))
                                                })
                                            } catch (e) {
                                                o.error("hook setdata error", e), t.setData = r
                                            }
                                        } else o.error("hook set data fail", t)
                                    }(t), Me.isFirstPageInit ? (Te.on_load.start_time = C(), t = _t(), Se[t] = {
                                        initTime: C()
                                    }) : (Me.isFirstPageInit = !0, Me.firstInitTime = C())
                                },
                                after: function () {
                                    Te.on_load.end_time = C()
                                }
                            },
                            onReady: {
                                before: function () {
                                    Me.isFirstPageReady || (Me.isFirstPageReady = !0, Me.firstReadyTime = C()), Te.on_ready.start_time = C()
                                },
                                after: function () {
                                    Te.on_ready.end_time = C(), Me.page = wt()
                                }
                            },
                            onShow: {
                                before: function () {
                                    Te.on_show.start_time = C()
                                },
                                after: function () {
                                    Te.on_show.end_time = C();
                                    var t = _t();
                                    t = Se[t];
                                    o.info(t), _e.prePageUrl = _e.curPageUrl, _e.prePageId = _e.curPageId, _e.prePageStart = _e.curPageStart, _e.curPageId = wt(), _e.curPageUrl = bt(), _e.curPageStart = R(), P.getPerformance || Tt(we({}, _e))
                                }
                            },
                            onHide: {
                                before: function () {
                                    Te.on_hide.start_time = C()
                                },
                                after: function () {
                                    Te.on_hide.end_time = C(), _e.prePageEnd = R(), P.getPerformance || xe()
                                }
                            },
                            onUnload: {
                                before: function () {
                                    Te.on_unload.start_time = C()
                                },
                                after: function () {
                                    Te.on_unload.end_time = C(), _e.prePageEnd = R(), P.getPerformance || xe()
                                }
                            }
                        }, e = this && this.global && this.global.Page || Page;
                        try {
                            var r = this && this.global && this.global.Page || Page;
                            Page = function (e) {
                                var n, i, o;
                                return g(e, t), n = "Page", o = t, (i = e) ? Object.keys(o).forEach((function (t) {
                                    var e, r = i[t];
                                    !f(r) && "onerror" !== n || (e = null, i[t] = function () {
                                        if (f(o[t])) {
                                            try {
                                                o[t].apply(this, arguments)
                                            } catch (i) {
                                                ye.error("hookMethods, exec hook method ".concat(t, " of obj ").concat(n, " raise exception"), i)
                                            }
                                            if (f(r)) return r.apply(this, arguments)
                                        } else if (f(o[t].before) && f(o[t].after)) {
                                            try {
                                                var i = this;
                                                o[t].before.apply(this, [i].concat(Array.prototype.slice.call(arguments)))
                                            } catch (i) {
                                                ye.error("hookMethods, exec hook before method ".concat(t, " of obj ").concat(n, " raise exception"), i)
                                            }
                                            f(r) && (e = r.apply(this, arguments));
                                            try {
                                                o[t].after.apply(this, arguments)
                                            } catch (i) {
                                                ye.error("hookMethods, exec hook after method ".concat(t, " of obj ").concat(n, " raise exception"), i)
                                            }
                                            return e
                                        }
                                    })
                                })) : ye.info("hookMethods reuturn, obj is ", i), r.apply(this, arguments)
                            }
                        } catch (t) {
                            return this && this.global && this.global.Page ? qapmGlobal.Page = e : Page = e, o.info("hook page error", t)
                        }
                    }(), P.getPerformance && (t = P.getPerformance().createObserver((function (t) {
                        o.info("performance entrytype", t.getEntries());
                        var e, r, n = t.getEntries(),
                            i = "false",
                            s = "false",
                            a = t.getEntriesByName("firstRender", "render"),
                            u = t.getEntriesByName("firstPaint", "render"),
                            h = t.getEntriesByName("firstContentfulPaint", "render"),
                            c = t.getEntriesByName("largestContentfulPaint", "render"),
                            f = t.getEntriesByName("evaluateScript", "script"),
                            l = t.getEntriesByName("route", "navigation"),
                            p = t.getEntriesByName("appLaunch", "navigation"),
                            d = we(we({}, _e), {}, {
                                tags: {
                                    d7: "false",
                                    d8: "false"
                                },
                                values: {
                                    v4: 0,
                                    v5: 0,
                                    v6: 0,
                                    v7: 0,
                                    v8: 0,
                                    v9: 0,
                                    v10: 0,
                                    v11: 0,
                                    v12: 0,
                                    v13: 0,
                                    v14: 0
                                }
                            });
                        0 < a.length && (a = (t = a[0]).startTime, t = t.duration, d.values.v4 = a, d.values.v5 = a + t), 0 < u.length && (u = u[0].startTime, d.values.v6 = u), 0 < h.length && (h = h[0].startTime, d.values.v7 = h), 0 < c.length && (e = c[0].startTime, d.values.v8 = e), 0 < f.length && (f = (e = f[0]).startTime, e = e.duration, d.values.v9 = f, d.values.v10 = f + e), 0 < l.length && (l = (r = l[0]).startTime, r = r.duration, s = d.tags.d8 = "true", d.values.v11 = l, d.values.v12 = l + r), 0 < p.length && (p = (r = p[0]).startTime, r = r.duration, d.tags.d7 = i = "true", d.values.v13 = p || 0, d.values.v14 = p + r || 0), Tt(d), xe({
                            perfInfo: JSON.stringify(n),
                            isAppLaunch: i,
                            isRoute: s
                        })
                    })), (e = ["render", "script", "navigation"]).push("loadPackage"), e.push("resource"), t.observe({
                        entryTypes: e
                    }), o.info("observer success", t))
                }() : (function () {
                    function t(t, e) {
                        var r = t[e];
                        return !("function" != typeof r || !/native code/.test(r.toString())) && function () {
                            var t = r.apply(this, arguments),
                                n = null;
                            return "function" == typeof Event ? n = new Event(e) : (n = document.createEvent("HTMLEvents")).initEvent(e, !1, !0), window.dispatchEvent(n), t
                        }
                    }
                    history.pushState = t(history, "pushState") || history.pushState, history.replaceState = t(history, "replaceState") || history.replaceState, ["load", "replaceState", "pushState", "popstate", "pagehide"].forEach((function (t) {
                        window.addEventListener(t, (function () {
                            return ke(t)
                        }))
                    }))
                }(), "complete" === document.readyState ? ke("load") : window.addEventListener("load", (function () {
                    ke("load")
                })))
            }

            function Ce(t) {
                if ("" !== t.id && t.id) return 'id("'.concat(t.id, '")');
                if (t === document.body) return t.tagName;
                if (t === document) return "document";
                var e = 0;
                if (t.parentNode)
                    for (var r = t.parentNode.childNodes, n = 0; n < r.length; n++) {
                        var i = r[n];
                        if (i === t) return "".concat(Ce(t.parentNode), "/").concat(t.tagName, "[").concat(e + 1, "]");
                        1 === i.nodeType && i.tagName === t.tagName && e++
                    }
            }
            var Re = function (t) {
                var e = "",
                    r = t.nodeType;
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) e += getText(t)
                } else if (3 === r || 4 === r) return t.nodeValue;
                return e
            }, Ie = {
                tap: 1,
                longpress: 2
            };

            function Oe() {
                var t = this && this.global && this.global.Page || Page;
                try {
                    var e = this && this.global && this.global.Page || Page;
                    Page = function (t) {
                        var r, n;
                        return n = function (t) {
                            var e, r;
                            1 == (arguments.length <= 1 ? 0 : arguments.length - 1) ? (e = arguments.length <= 1 ? void 0 : arguments[1], "object" === h()(e) && null !== e && e.type && e.target && e.timeStamp && Ie[e.type] && (o.log("Page, ui action in,", t, e.type), r = e.touches[0], r = {
                                op: Ie[e.type],
                                view_pos: "",
                                view_type: "",
                                view_tag: t,
                                view_text: e.target.id,
                                view_desc: "",
                                view_super: "",
                                page: getCurrentPageUrl(),
                                page_id: getCurrentPageUrlWithParams(),
                                data: {
                                    p0: "".concat(parseInt(r.clientX) || -1, ",").concat(parseInt(r.clientY) || -1),
                                    p1: "".concat(parseInt(r.pageX) || -1, ",").concat(parseInt(r.pageY) || -1)
                                }
                            }, o.info("click event", r), kt(r))) : o.info("args.length!==1")
                        }, (r = t) && Object.keys(r).filter((function (t) {
                            return f(r[t])
                        })).forEach((function (t) {
                            var e = r[t];
                            r[t] = function () {
                                try {
                                    n.apply(this, [t].concat(Array.prototype.slice.call(arguments)))
                                } catch (t) { }
                                if (e) return e.apply(this, arguments)
                            }
                        })), e.apply(this, arguments)
                    }
                } catch (e) {
                    return this && this.global && this.global.Page ? qapmGlobal.Page = t : Page = t, void o.info("hook page error", e)
                }
            }

            function Le(t, e, r) {
                function n(t) {
                    var e = document.documentElement;
                    e && r.call(e, t, t.target)
                }
                var i = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3];
                return t.addEventListener(e, n, i), 1
            }

            function qe(t) {
                var e = (n = (n = window.qapmIgnoreClasses ? arrayToMap(window.qapmIgnoreClasses) : ct.ignoreClasses, {
                    ignoreIds: window.qapmIgnoreIds ? arrayToMap(window.qapmIgnoreIds) : ct.ignoreIds,
                    ignoreClasses: n,
                    ignoreTag: "QAPM_IGNORE"
                })).ignoreClasses,
                    r = n.ignoreIds,
                    n = n.ignoreTag,
                    i = !(0 === r.size && 0 === e.size),
                    s = t,
                    a = d(t.getAttribute("id"), " "),
                    u = d(t.getAttribute("class", " ")),
                    h = "此组件命中忽略规则，不做点击事件的采集";
                if (a.includes(n) || u.includes(n)) return o.info(h, n, t), 1;
                for (var c = 0, f = !1; s && i && s.getAttribute;) {
                    if (f) return 1;
                    if (10 <= c) break;
                    a = d(s.getAttribute("id"), " "), u = d(s.getAttribute("class", " ")), a.map((function (e) {
                        r.includes(e) && (o.info(h, r, t, s), f = !0)
                    })), u.map((function (r) {
                        e.includes(r) && (o.info(h, e, t, s), f = !0)
                    })), c++, s = s.parentNode || s.parentElement
                }
            }

            function Ne() {
                var t, e = {
                    click: 1,
                    longpress: 2
                };
                for (t in e) Le(document, t, (function (t, r) {
                    var n, i;
                    o.info("click or longpress event", t), !r || (n = e[t.type]) && (qe(r) || (i = Ce(r), t = Re(r).replace(/^\s+|\s+$/g, ""), r = r.getBoundingClientRect && r.getBoundingClientRect() || {}, kt({
                        op: n,
                        view_pos: "",
                        view_type: "",
                        view_tag: i,
                        view_text: t.slice(0, 127),
                        view_desc: "",
                        view_super: "",
                        page: Q(),
                        page_id: $(),
                        data: {
                            p0: "".concat(parseInt(r.left) || -1, ",").concat(parseInt(r.top) || -1),
                            p1: "".concat(parseInt(r.left + window.scrollX) || -1, ",").concat(parseInt(r.top + window.scrollY) || -1)
                        }
                    })))
                }), !0)
            }

            function Ue() {
                (P ? Oe : Ne)()
            }

            function Fe() {
                P ? P.onMemoryWarning((function (t) {
                    At({
                        category: "PERF_MEMORY_WARN",
                        tags: {
                            d1: bt(),
                            d2: t && t.level && t.level.toString() || ""
                        }
                    })
                })) : performance && performance.memory && setInterval((function () {
                    At({
                        category: "PERF_MEMORY_USED",
                        tags: {
                            d1: $(),
                            d2: J(),
                            d3: V(),
                            d4: F()
                        },
                        values: {
                            v1: performance.memory.jsHeapSizeLimit,
                            v2: performance.memory.totalJSHeapSize,
                            v3: performance.memory.usedJSHeapSize
                        }
                    })
                }), 1e4)
            }
            var De = {}, je = function () {
                if (o.info("isWebview", tt()), "ios" === tt()) try {
                    window.qapmBaseInfo = window.qapmBaseInfo || {}, De.user_id = window.qapmBaseInfo.userId, De.device_id = window.qapmBaseInfo.deviceId, De.app_key = window.qapmBaseInfo.appKey, De.version = window.qapmBaseInfo.version, De.qapm_base_url = window.qapmBaseInfo.qapmUrl, De.athena_base_url = window.qapmBaseInfo.athenaUrl, De.bread_crumb_buckets = window.qapmBaseInfo.breadCrumbBuckets, De.model = window.qapmBaseInfo.model || "", De.os = window.qapmBaseInfo.os || "", De.osVer = window.qapmBaseInfo.osVer || "", De.isRoot = window.qapmBaseInfo.isRoot || "", De.arch = window.qapmBaseInfo.arch || dt, De.distribute_channel = window.qapmBaseInfo.channelInstall || dt, De.logLevel = window.qapmBaseInfo.logLevel, De.
                        switch = window.qapmBaseInfo.
                            switch, De.ubsConfig = window.qapmBaseInfo.ubsConfig, De.usrConfig = window.qapmBaseInfo.usrConfig, De.webLaunchConfig = window.qapmBaseInfo.webLaunchConfig, De.jserrorConfig = window.qapmBaseInfo.jsErrorConfig, De.networkConfig = window.qapmBaseInfo.networkConfig, De.net_op = window.qapmBaseInfo.netOp || "", De.net_type = window.qapmBaseInfo.netType || "", De.brand = window.qapmBaseInfo.brand || "", De.channel_install = window.qapmBaseInfo.channelInstall || "", De.channel_open = window.qapmBaseInfo.channelOpen || ""
                } catch (t) {
                    o.error(t.toString())
                }
                if ("android" === tt()) try {
                    function t(t) {
                        try {
                            var e = window.QAPMAndroidJsBridge;
                            if (e[t]) return e[t]()
                        } catch (t) {
                            o.info(t)
                        }
                    }
                    De.user_id = t("getUin"), De.device_id = t("getDeviceId"), De.app_key = t("getAppkey"), De.version = t("getVersion"), De.qapm_base_url = t("getQAPMUrl"), De.athena_base_url = t("getAthenaUrl"), De.bread_crumb_buckets = t("getBreadCrumbBuckets"), De.model = t("getModel") || "", De.os = t("getOS") || "", De.osVer = t("getOSVer") || "", De.isRoot = t("isRoot") || "", De.arch = t("getArch") || "", De.distribute_channel = t("getDistributeChannel") || dt, De.logLevel = t("getLogLevel"), De.
                        switch = t("getSwitch"), De.ubsConfig = t("getUbsConfig"), De.usrConfig = t("getUsrConfig"), De.webLaunchConfig = t("getWebLaunchConfig"), De.jserrorConfig = t("getJsErrorConfig"), De.networkConfig = t("getNetworkConfig"), De.net_op = t("getNetOp") || "", De.brand = t("getBrand") || "", De.channel_open = t("getOpenChannel") || "", De.channel_install = t("getInstallChannel") || "", De.net_type = t("getNetType") || ""
                } catch (t) {
                    o.error(t.toString())
                }
                return De
            }, He = function (t) {
                tt() && (t = Object.assign({}, t, je()), o.info(t));
                var e = t.app_key.split("-")[1],
                    r = t.version,
                    n = t.user_id,
                    i = t.appconfig_base_url,
                    s = t.athena_base_url,
                    a = t.qapm_base_url,
                    u = t.device_id || O(),
                    h = rt(h = t.app_key + r, 8) + "-" + rt(h, 4) + "-4" + rt(h, 3) + "-a" + rt(h, 6).slice(0, 3) + "-" + rt(h, 12);
                Ve("logLevel", t.logLevel), Ve("app_key", t.app_key), Ve("app_id", e), Ve("version", r), Ve("user_id", n), Ve("device_id", u), Ve("build_id", h), Ve("appconfig_base_url", i), Ve("athena_base_url", s), Ve("qapm_base_url", a), Ve("netType", t.net_type), Ve("netOp", t.net_op), Ve("model", t.model), Ve("getPageId", t.getPageId), Ve("allEventCallback", t.allEventCallback), Ve("channelInstall", t.channel_install), Ve("channelOpen", t.challel_open), Ve("brand", t.brand), Ve("os", t.os), Ve("osVer", t.osVer), Ve("isRoot", t.isRoot), Ve("arch", t.arch), Ve("distribute_channel", t.distribute_channel), Ve("excludeUrlReg", t.excludeUrlReg || window && window.qapmExcludeUrlReg), Ve("excludeUrlRegList", t.excludeUrlRegList || window && window.qapmExcludeUrlRegList), Ve("domLengthThreshold", t.domLengthThreshold), Ve("collectReqBody", t.collectReqBody || !1), Ve("collectRespBody", t.collectRespBody || !1), Ve("allowHeaders", t.allowHeaders || []), tt() && (Ve("switch", t.
                    switch), Ve("ubsConfig", t.ubsConfig), Ve("usrConfig", t.usrConfig), Ve("webLaunchConfig", t.webLaunchConfig), Ve("jserrorConfig", t.jserrorConfig), Ve("networkConfig", t.networkConfig))
            };

            function Ke() {
                return ze.apply(this, arguments)
            }

            function ze() {
                return (ze = i()(n.a.mark((function t() {
                    var e, r, i, s, a, u, h, c = arguments;
                    return n.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                if (e = 0 < c.length && void 0 !== c[0] ? c[0] : De, t.prev = 1, He(e), r = {}, tt()) {
                                    t.next = 19;
                                    break
                                }
                                return a = e.app_key.split("-")[1], t.next = 8, k(a);
                            case 8:
                                return u = t.sent, ct.pubkey = u, o.info("pubkey is ", u), t.next = 13, b();
                            case 13:
                                return h = t.sent, ct.TOKEN = h, t.next = 17, de(e);
                            case 17:
                                r = t.sent, o.info("appconfig is", r);
                            case 19:
                                if (!1 === (i = pe(r))) return t.abrupt("return");
                                t.next = 22;
                                break;
                            case 22:
                                if (e.debug) return Qt(), ne(), ae(), It(), Pe(), Fe(), he(), Ue(), We(), o.info("debug open, web sdk start success，SDK_VER: v".concat("5.1.13", ", app_key is ").concat(e.app_key)), t.abrupt("return");
                                t.next = 34;
                                break;
                            case 34:
                                o.info("function switch is", i), s = i.openUBS, a = i.openNetwork, u = i.openJsError, h = i.openLaunch, a && Qt(), u && ne(), h && ae(), s && It(), s && (Pe(), Ue()), We(), o.info("web sdk start success，SDK_VER: v".concat("5.1.13", ", app_key is ").concat(e.app_key)), t.next = 48;
                                break;
                            case 45:
                                t.prev = 45, t.t0 = t.
                                    catch(1), o.error(t.t0);
                            case 48:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 45]
                    ])
                })))).apply(this, arguments)
            }

            function Ye(t) {
                return Ge.apply(this, arguments)
            }

            function Ge() {
                return (Ge = i()(n.a.mark((function t(e) {
                    var r, i, s, a;
                    return n.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return He(e), n = void 0, n = ge(), o.info("can use page", n), "{}" !== JSON.stringify(n) && 0 === q(n = n.
                                    switch || 0, le.PAGE) || Pe(), t.next = 4, b();
                            case 4:
                                if (i = t.sent, ct.TOKEN = i, e.debug) return Qt(), ne(), It(), Ue(), We(), o.info("debug open, mini sdk start success，SDK_VER: v".concat("5.1.13", ", app_key is ").concat(e.app_key)), t.abrupt("return");
                                t.next = 14;
                                break;
                            case 14:
                                return t.next = 16, de(e);
                            case 16:
                                if (s = t.sent, !1 === (r = pe(s))) return t.abrupt("return");
                                t.next = 20;
                                break;
                            case 20:
                                return o.info("function switch is", r), i = r.openUBS, s = r.openNetwork, a = r.openJsError, i && (It(), Ue()), s && Qt(), a && ne(), We(), a = e.app_key.split("-")[1], t.next = 29, k(a);
                            case 29:
                                a = t.sent, ct.pubkey = a, o.info("pubkey is ", a), o.info("mini sdk start success，v".concat("5.1.13", ", app_key is ").concat(e.app_key));
                            case 33:
                            case "end":
                                return t.stop()
                        }
                        var n
                    }), t)
                })))).apply(this, arguments)
            }

            function We() {
                At({
                    category: "APP_LAUNCH",
                    tags: {
                        d1: P ? ht() : "",
                        d2: dt,
                        d3: "true"
                    }
                })
            }

            function Je(t, e, r, n, i, o) {
                Et({
                    category: t,
                    action: e,
                    label: r,
                    value: n,
                    tags: i,
                    values: o
                })
            }

            function Ve(t, e) {
                if (o.info("qapmSetField", t, e), e) {
                    var r, n, i;
                    if ("appconfig_base_url" === t && (pt.appconfig = e), "qapm_base_url" === t && (pt.qapm = e), "athena_base_url" === t && (pt.athena = e), "app_key" === t && (ct.app_key = e), "app_id" === t && (ct.app_id = e), "user_id" === t && (ct.user_id = e), "version" === t && (ct.version = e), "device_id" === t && (ct.device_id = e), "build_id" === t && (ct.build_id = e), "exposeThreshold" !== t || (r = parseFloat(e)) && 0 <= r && (ct.expose_threshold = r), "excludeUrlReg" === t && ct.excludeUrlReg.push(e), "excludeUrlRegList" === t && Array.isArray(e) && (ct.excludeUrlReg = ct.excludeUrlReg.concat(e)), "exposeAreaThreshold" !== t || (n = parseFloat(e)) && 0 <= n && n <= 1 && (ct.expose_area_threshold = n), "domLengthThreshold" !== t || (n = parseInt(e)) && 0 <= n && (ct.domLengthThreshold = n), "distribute_channel" === t && (ct.distribute_channel = e), "model" === t && (ct.model = e), "arch" === t && (ct.arch = e), "debug" === t && (ct.debug = e), "buckets" === t && (ct.buckets = e), "bucket" === t && (ct.bucket = e), "netOp" === t && (ct.netOp = e), "netType" === t && (ct.netType = e), "brand" === t && (ct.brand = e), "os" === t && (ct.os = e), "osVer" === t && (ct.osVer = e), "isRoot" === t && (ct.isRoot = e), "logLevel" === t)
                        for (var s in o.levelMap)
                            if (o.levelMap[s] === e) return void (o.logLevel = s);
                    "channelInstall" === t && (ct.channel_install = e), "channelOpen" === t && (ct.channel_open = e), "allEventCallback" === t && ("function" == typeof e ? ct[t] = e : o.info("error ", "".concat(e, " is not a function"))), "ignoreIds" === t && e instanceof Array && (i = it(e), ct.ignoreIds = i), "ignoreClassess" === t && e instanceof Array && (i = it(e), ct.ignoreClasses = i), "getPageId" === t && ("function" == typeof e ? ct.getPageId = e : o.info("getPageId ", e, " is not function, please transfer a function")), "switch" === t && (ft.SWITCH = e), "ubsConfig" === t && (ft.UBS = "string" == typeof e ? JSON.parse(e) : e), "usrConfig" === t && (ft.USR = "string" == typeof e ? JSON.parse(e) : e), "webLaunchConfig" === t && (ft.LAUNCH = "string" == typeof e ? JSON.parse(e) : e), "jserrorConfig" === t && (ft.JSERROR = "string" == typeof e ? JSON.parse(e) : e), "networkConfig" === t && (ft.NETWORK = "string" == typeof e ? JSON.parse(e) : e), "collectReqBody" === t && (ct.collectReqBody = e), "collectRespBody" === t && (ct.collectRespBody = e), "allowHeaders" === t && Array.isArray(e) && (e.forEach((function (t, r) {
                        e[r] = t.toLowerCase()
                    })), ct.allowHeaders = e), "option" === t && (ct.option = e || {})
                } else o.info("value is empty, sdk will not set value", t, e)
            }

            function Xe() { }

            function Ze(t, e, r) {
                "start" === t && ke("customPageChange", e, r), _e.customState = t, o.info("custom set page id", void 0, e, r)
            }
            P || (window.QAPM = {}, window.QAPM.qapmWebSdkStart = Ke, window.QAPM.qapmCustomTrack = Je, window.QAPM.customEvent = Et, window.QAPM.qapmSetField = Ve, window.QAPM.qapmCaptureException = Xe, window.QAPM.setFMPEnd = function () { }, window.QAPM.setPageState = Ze)
        }
    ], r = {}, t.m = e, t.c = r, t.d = function (e, r, n) {
        t.o(e, r) || Object.defineProperty(e, r, {
            enumerable: !0,
            get: n
        })
    }, t.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, t.t = function (e, r) {
        if (1 & r && (e = t(e)), 8 & r) return e;
        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (t.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & r && "string" != typeof e)
            for (var i in e) t.d(n, i, function (t) {
                return e[t]
            }.bind(null, i));
        return n
    }, t.n = function (e) {
        var r = e && e.__esModule ? function () {
            return e.
                default
        } : function () {
            return e
        };
        return t.d(r, "a", r), r
    }, t.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, t.p = "", t(t.s = 60);

    function t(n) {
        if (r[n]) return r[n].exports;
        var i = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var e, r
}));
//# sourceMappingURL=new.qapm.js.map
