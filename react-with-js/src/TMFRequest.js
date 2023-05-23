/* eslint-disable */
// eslint-disable-next-line vue/no-setup-props-destructure
!
    function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).TMFRequest = e()
    }(this, (function () {

        var t = function (t) {
            throw new Error(t)
        };
        function e(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        function r(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
            }
        }
        function i(t, e, i) {
            return e && r(t.prototype, e),
                i && r(t, i),
                t
        }
        function n(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
                t
        }
        function o(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))),
                    r.push.apply(r, i)
            }
            return r
        }
        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(r), !0).forEach((function (e) {
                    n(t, e, r[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }))
            }
            return t
        }
        function h(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
                e && a(t, e)
        }
        function u(t) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }
        function a(t, e) {
            return (a = Object.setPrototypeOf ||
                function (t, e) {
                    return t.__proto__ = e,
                        t
                })(t, e)
        }
        function f(t, e) {
            return !e || "object" != typeof e && "function" != typeof e ?
                function (t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
        }
        function l(t) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))),
                        !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var r, i = u(t);
                if (e) {
                    var n = u(this).constructor;
                    r = Reflect.construct(i, arguments, n)
                } else r = i.apply(this, arguments);
                return f(this, r)
            }
        }
        function c(t, e) {
            // console.log(777, t, e)
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) ||
                function (t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var r = [],
                        i = !0,
                        n = !1,
                        o = void 0;
                    try {
                        for (var s, h = t[Symbol.iterator](); !(i = (s = h.next()).done) && (r.push(s.value), !e || r.length !== e); i = !0);
                    } catch (t) {
                        n = !0,
                            o = t
                    } finally {
                        try {
                            i || null == h
                                .return || h
                                    .return()
                        } finally {
                            if (n) throw o
                        }
                    }
                    return r
                }(t, e) ||
                function (t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return p(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return p(t, e)
                }(t, e) ||
                function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }
        function p(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0,
                i = new Array(e); r < e; r++) i[r] = t[r];
            return i
        }
        var d = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
            m = [],
            y = [],
            g = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            v = !1;
        function w() {
            v = !0;
            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                e = 0,
                r = t.length; e < r; ++e) m[e] = t[e],
                    y[t.charCodeAt(e)] = e;
            y["-".charCodeAt(0)] = 62,
                y["_".charCodeAt(0)] = 63
        }
        function b(t, e, r) {
            for (var i, n, o = [], s = e; s < r; s += 3) i = (t[s] << 16) + (t[s + 1] << 8) + t[s + 2],
                o.push(m[(n = i) >> 18 & 63] + m[n >> 12 & 63] + m[n >> 6 & 63] + m[63 & n]);
            return o.join("")
        }
        function M(t) {
            var e;
            v || w();
            for (var r = t.length,
                i = r % 3,
                n = "",
                o = [], s = 16383, h = 0, u = r - i; h < u; h += s) o.push(b(t, h, h + s > u ? u : h + s));
            return 1 === i ? (e = t[r - 1], n += m[e >> 2], n += m[e << 4 & 63], n += "==") : 2 === i && (e = (t[r - 2] << 8) + t[r - 1], n += m[e >> 10], n += m[e >> 4 & 63], n += m[e << 2 & 63], n += "="),
                o.push(n),
                o.join("")
        }
        function T(t, e, r, i, n) {
            var o, s, h = 8 * n - i - 1,
                u = (1 << h) - 1,
                a = u >> 1,
                f = -7,
                l = r ? n - 1 : 0,
                c = r ? -1 : 1,
                p = t[e + l];
            for (l += c, o = p & (1 << -f) - 1, p >>= -f, f += h; f > 0; o = 256 * o + t[e + l], l += c, f -= 8);
            for (s = o & (1 << -f) - 1, o >>= -f, f += i; f > 0; s = 256 * s + t[e + l], l += c, f -= 8);
            if (0 === o) o = 1 - a;
            else {
                if (o === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                s += Math.pow(2, i),
                    o -= a
            }
            return (p ? -1 : 1) * s * Math.pow(2, o - i)
        }
        function _(t, e, r, i, n, o) {
            var s, h, u, a = 8 * o - n - 1,
                f = (1 << a) - 1,
                l = f >> 1,
                c = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = i ? 0 : o - 1,
                d = i ? 1 : -1,
                m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (h = isNaN(e) ? 1 : 0, s = f) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + l >= 1 ? c / u : c * Math.pow(2, 1 - l)) * u >= 2 && (s++, u /= 2), s + l >= f ? (h = 0, s = f) : s + l >= 1 ? (h = (e * u - 1) * Math.pow(2, n), s += l) : (h = e * Math.pow(2, l - 1) * Math.pow(2, n), s = 0)); n >= 8; t[r + p] = 255 & h, p += d, h /= 256, n -= 8);
            for (s = s << n | h, a += n; a > 0; t[r + p] = 255 & s, p += d, s /= 256, a -= 8);
            t[r + p - d] |= 128 * m
        }
        var E = {}.toString,
            A = Array.isArray ||
                function (t) {
                    return "[object Array]" == E.call(t)
                };
        R.TYPED_ARRAY_SUPPORT = void 0 === d.TYPED_ARRAY_SUPPORT || d.TYPED_ARRAY_SUPPORT;
        var S = B();
        function B() {
            return R.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }
        function k(t, e) {
            if (B() < e) throw new RangeError("Invalid typed array length");
            return R.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = R.prototype : (null === t && (t = new R(e)), t.length = e),
                t
        }
        function R(t, e, r) {
            if (!(R.TYPED_ARRAY_SUPPORT || this instanceof R)) return new R(t, e, r);
            if ("number" == typeof t) {
                if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                return D(this, t)
            }
            return F(this, t, e, r)
        }
        function F(t, e, r, i) {
            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ?
                function (t, e, r, i) {
                    if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");
                    if (e.byteLength < r + (i || 0)) throw new RangeError("'length' is out of bounds");
                    e = void 0 === r && void 0 === i ? new Uint8Array(e) : void 0 === i ? new Uint8Array(e, r) : new Uint8Array(e, r, i);
                    R.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = R.prototype : t = O(t, e);
                    return t
                }(t, e, r, i) : "string" == typeof e ?
                    function (t, e, r) {
                        "string" == typeof r && "" !== r || (r = "utf8");
                        if (!R.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                        var i = 0 | j(e, r),
                            n = (t = k(t, i)).write(e, r);
                        n !== i && (t = t.slice(0, n));
                        return t
                    }(t, e, r) : function (t, e) {
                        if (P(e)) {
                            var r = 0 | x(e.length);
                            return 0 === (t = k(t, r)).length || e.copy(t, 0, 0, r),
                                t
                        }
                        if (e) {
                            if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (i = e.length) != i ? k(t, 0) : O(t, e);
                            if ("Buffer" === e.type && A(e.data)) return O(t, e.data)
                        }
                        var i;
                        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }(t, e)
        }
        function C(t) {
            if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
            if (t < 0) throw new RangeError('"size" argument must not be negative')
        }
        function D(t, e) {
            if (C(e), t = k(t, e < 0 ? 0 : 0 | x(e)), !R.TYPED_ARRAY_SUPPORT) for (var r = 0; r < e; ++r) t[r] = 0;
            return t
        }
        function O(t, e) {
            var r = e.length < 0 ? 0 : 0 | x(e.length);
            t = k(t, r);
            for (var i = 0; i < r; i += 1) t[i] = 255 & e[i];
            return t
        }
        function x(t) {
            if (t >= B()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + B().toString(16) + " bytes");
            return 0 | t
        }
        function P(t) {
            return !(null == t || !t._isBuffer)
        }
        function j(t, e) {
            if (P(t)) return t.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
            "string" != typeof t && (t = "" + t);
            var r = t.length;
            if (0 === r) return 0;
            for (var i = !1; ;) switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                case void 0:
                    return at(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                case "base64":
                    return ft(t).length;
                default:
                    if (i) return at(t).length;
                    e = ("" + e).toLowerCase(),
                        i = !0
            }
        }
        function U(t, e, r) {
            var i = !1;
            if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
            if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
            if ((r >>>= 0) <= (e >>>= 0)) return "";
            for (t || (t = "utf8"); ;) switch (t) {
                case "hex":
                    return Q(this, e, r);
                case "utf8":
                case "utf-8":
                    return H(this, e, r);
                case "ascii":
                    return J(this, e, r);
                case "latin1":
                case "binary":
                    return $(this, e, r);
                case "base64":
                    return V(this, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return W(this, e, r);
                default:
                    if (i) throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(),
                        i = !0
            }
        }
        function I(t, e, r) {
            var i = t[e];
            t[e] = t[r],
                t[r] = i
        }
        function N(t, e, r, i, n) {
            if (0 === t.length) return - 1;
            if ("string" == typeof r ? (i = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = n ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                if (n) return - 1;
                r = t.length - 1
            } else if (r < 0) {
                if (!n) return - 1;
                r = 0
            }
            if ("string" == typeof e && (e = R.from(e, i)), P(e)) return 0 === e.length ? -1 : q(t, e, r, i, n);
            if ("number" == typeof e) return e &= 255,
                R.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : q(t, [e], r, i, n);
            throw new TypeError("val must be string, number or Buffer")
        }
        function q(t, e, r, i, n) {
            var o, s = 1,
                h = t.length,
                u = e.length;
            if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                if (t.length < 2 || e.length < 2) return - 1;
                s = 2,
                    h /= 2,
                    u /= 2,
                    r /= 2
            }
            function a(t, e) {
                return 1 === s ? t[e] : t.readUInt16BE(e * s)
            }
            if (n) {
                var f = -1;
                for (o = r; o < h; o++) if (a(t, o) === a(e, -1 === f ? 0 : o - f)) {
                    if (- 1 === f && (f = o), o - f + 1 === u) return f * s
                } else - 1 !== f && (o -= o - f),
                    f = -1
            } else for (r + u > h && (r = h - u), o = r; o >= 0; o--) {
                for (var l = !0,
                    c = 0; c < u; c++) if (a(t, o + c) !== a(e, c)) {
                        l = !1;
                        break
                    }
                if (l) return o
            }
            return - 1
        }
        function L(t, e, r, i) {
            r = Number(r) || 0;
            var n = t.length - r;
            i ? (i = Number(i)) > n && (i = n) : i = n;
            var o = e.length;
            if (o % 2 != 0) throw new TypeError("Invalid hex string");
            i > o / 2 && (i = o / 2);
            for (var s = 0; s < i; ++s) {
                var h = parseInt(e.substr(2 * s, 2), 16);
                if (isNaN(h)) return s;
                t[r + s] = h
            }
            return s
        }
        function Y(t, e, r, i) {
            return lt(at(e, t.length - r), t, r, i)
        }
        function z(t, e, r, i) {
            return lt(function (t) {
                for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                return e
            }(e), t, r, i)
        }
        function K(t, e, r, i) {
            return z(t, e, r, i)
        }
        function X(t, e, r, i) {
            return lt(ft(e), t, r, i)
        }
        function Z(t, e, r, i) {
            return lt(function (t, e) {
                for (var r, i, n, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) i = (r = t.charCodeAt(s)) >> 8,
                    n = r % 256,
                    o.push(n),
                    o.push(i);
                return o
            }(e, t.length - r), t, r, i)
        }
        function V(t, e, r) {
            return 0 === e && r === t.length ? M(t) : M(t.slice(e, r))
        }
        function H(t, e, r) {
            r = Math.min(t.length, r);
            for (var i = [], n = e; n < r;) {
                var o, s, h, u, a = t[n],
                    f = null,
                    l = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
                if (n + l <= r) switch (l) {
                    case 1:
                        a < 128 && (f = a);
                        break;
                    case 2:
                        128 == (192 & (o = t[n + 1])) && (u = (31 & a) << 6 | 63 & o) > 127 && (f = u);
                        break;
                    case 3:
                        o = t[n + 1],
                            s = t[n + 2],
                            128 == (192 & o) && 128 == (192 & s) && (u = (15 & a) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (f = u);
                        break;
                    case 4:
                        o = t[n + 1],
                            s = t[n + 2],
                            h = t[n + 3],
                            128 == (192 & o) && 128 == (192 & s) && 128 == (192 & h) && (u = (15 & a) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & h) > 65535 && u < 1114112 && (f = u)
                }
                null === f ? (f = 65533, l = 1) : f > 65535 && (f -= 65536, i.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f),
                    i.push(f),
                    n += l
            }
            return function (t) {
                var e = t.length;
                if (e <= G) return String.fromCharCode.apply(String, t);
                var r = "",
                    i = 0;
                for (; i < e;) r += String.fromCharCode.apply(String, t.slice(i, i += G));
                return r
            }(i)
        }
        R.poolSize = 8192,
            R._augment = function (t) {
                return t.__proto__ = R.prototype,
                    t
            },
            R.from = function (t, e, r) {
                return F(null, t, e, r)
            },
            R.TYPED_ARRAY_SUPPORT && (R.prototype.__proto__ = Uint8Array.prototype, R.__proto__ = Uint8Array),
            R.alloc = function (t, e, r) {
                return function (t, e, r, i) {
                    return C(e),
                        e <= 0 ? k(t, e) : void 0 !== r ? "string" == typeof i ? k(t, e).fill(r, i) : k(t, e).fill(r) : k(t, e)
                }(null, t, e, r)
            },
            R.allocUnsafe = function (t) {
                return D(null, t)
            },
            R.allocUnsafeSlow = function (t) {
                return D(null, t)
            },
            R.isBuffer = ct,
            R.compare = function (t, e) {
                if (!P(t) || !P(e)) throw new TypeError("Arguments must be Buffers");
                if (t === e) return 0;
                for (var r = t.length,
                    i = e.length,
                    n = 0,
                    o = Math.min(r, i); n < o; ++n) if (t[n] !== e[n]) {
                        r = t[n],
                            i = e[n];
                        break
                    }
                return r < i ? -1 : i < r ? 1 : 0
            },
            R.isEncoding = function (t) {
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
            },
            R.concat = function (t, e) {
                if (!A(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return R.alloc(0);
                var r;
                if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
                var i = R.allocUnsafe(e),
                    n = 0;
                for (r = 0; r < t.length; ++r) {
                    var o = t[r];
                    if (!P(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                    o.copy(i, n),
                        n += o.length
                }
                return i
            },
            R.byteLength = j,
            R.prototype._isBuffer = !0,
            R.prototype.swap16 = function () {
                var t = this.length;
                if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < t; e += 2) I(this, e, e + 1);
                return this
            },
            R.prototype.swap32 = function () {
                var t = this.length;
                if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < t; e += 4) I(this, e, e + 3),
                    I(this, e + 1, e + 2);
                return this
            },
            R.prototype.swap64 = function () {
                var t = this.length;
                if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < t; e += 8) I(this, e, e + 7),
                    I(this, e + 1, e + 6),
                    I(this, e + 2, e + 5),
                    I(this, e + 3, e + 4);
                return this
            },
            R.prototype.toString = function () {
                var t = 0 | this.length;
                return 0 === t ? "" : 0 === arguments.length ? H(this, 0, t) : U.apply(this, arguments)
            },
            R.prototype.equals = function (t) {
                if (!P(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === R.compare(this, t)
            },
            R.prototype.inspect = function () {
                var t = "";
                return this.length > 0 && (t = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (t += " ... ")),
                    "<Buffer " + t + ">"
            },
            R.prototype.compare = function (t, e, r, i, n) {
                if (!P(t)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === i && (i = 0), void 0 === n && (n = this.length), e < 0 || r > t.length || i < 0 || n > this.length) throw new RangeError("out of range index");
                if (i >= n && e >= r) return 0;
                if (i >= n) return - 1;
                if (e >= r) return 1;
                if (this === t) return 0;
                for (var o = (n >>>= 0) - (i >>>= 0), s = (r >>>= 0) - (e >>>= 0), h = Math.min(o, s), u = this.slice(i, n), a = t.slice(e, r), f = 0; f < h; ++f) if (u[f] !== a[f]) {
                    o = u[f],
                        s = a[f];
                    break
                }
                return o < s ? -1 : s < o ? 1 : 0
            },
            R.prototype.includes = function (t, e, r) {
                return - 1 !== this.indexOf(t, e, r)
            },
            R.prototype.indexOf = function (t, e, r) {
                return N(this, t, e, r, !0)
            },
            R.prototype.lastIndexOf = function (t, e, r) {
                return N(this, t, e, r, !1)
            },
            R.prototype.write = function (t, e, r, i) {
                if (void 0 === e) i = "utf8",
                    r = this.length,
                    e = 0;
                else if (void 0 === r && "string" == typeof e) i = e,
                    r = this.length,
                    e = 0;
                else {
                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e |= 0,
                        isFinite(r) ? (r |= 0, void 0 === i && (i = "utf8")) : (i = r, r = void 0)
                }
                var n = this.length - e;
                if ((void 0 === r || r > n) && (r = n), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                i || (i = "utf8");
                for (var o = !1; ;) switch (i) {
                    case "hex":
                        return L(this, t, e, r);
                    case "utf8":
                    case "utf-8":
                        return Y(this, t, e, r);
                    case "ascii":
                        return z(this, t, e, r);
                    case "latin1":
                    case "binary":
                        return K(this, t, e, r);
                    case "base64":
                        return X(this, t, e, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return Z(this, t, e, r);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + i);
                        i = ("" + i).toLowerCase(),
                            o = !0
                }
            },
            R.prototype.toJSON = function () {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
        var G = 4096;
        function J(t, e, r) {
            var i = "";
            r = Math.min(t.length, r);
            for (var n = e; n < r; ++n) i += String.fromCharCode(127 & t[n]);
            return i
        }
        function $(t, e, r) {
            var i = "";
            r = Math.min(t.length, r);
            for (var n = e; n < r; ++n) i += String.fromCharCode(t[n]);
            return i
        }
        function Q(t, e, r) {
            var i = t.length; (!e || e < 0) && (e = 0),
                (!r || r < 0 || r > i) && (r = i);
            for (var n = "",
                o = e; o < r; ++o) n += ut(t[o]);
            return n
        }
        function W(t, e, r) {
            for (var i = t.slice(e, r), n = "", o = 0; o < i.length; o += 2) n += String.fromCharCode(i[o] + 256 * i[o + 1]);
            return n
        }
        function tt(t, e, r) {
            if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
            if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
        }
        function et(t, e, r, i, n, o) {
            if (!P(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e > n || e < o) throw new RangeError('"value" argument is out of bounds');
            if (r + i > t.length) throw new RangeError("Index out of range")
        }
        function rt(t, e, r, i) {
            e < 0 && (e = 65535 + e + 1);
            for (var n = 0,
                o = Math.min(t.length - r, 2); n < o; ++n) t[r + n] = (e & 255 << 8 * (i ? n : 1 - n)) >>> 8 * (i ? n : 1 - n)
        }
        function it(t, e, r, i) {
            e < 0 && (e = 4294967295 + e + 1);
            for (var n = 0,
                o = Math.min(t.length - r, 4); n < o; ++n) t[r + n] = e >>> 8 * (i ? n : 3 - n) & 255
        }
        function nt(t, _e, r, i, n, o) {
            if (r + i > t.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("Index out of range")
        }
        function ot(t, e, r, i, n) {
            return n || nt(t, 0, r, 4),
                _(t, e, r, i, 23, 4),
                r + 4
        }
        function st(t, e, r, i, n) {
            return n || nt(t, 0, r, 8),
                _(t, e, r, i, 52, 8),
                r + 8
        }
        R.prototype.slice = function (t, e) {
            var r, i = this.length;
            if ((t = ~~t) < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i), (e = void 0 === e ? i : ~~e) < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i), e < t && (e = t), R.TYPED_ARRAY_SUPPORT) (r = this.subarray(t, e)).__proto__ = R.prototype;
            else {
                var n = e - t;
                r = new R(n, void 0);
                for (var o = 0; o < n; ++o) r[o] = this[o + t]
            }
            return r
        },
            R.prototype.readUIntLE = function (t, e, r) {
                t |= 0,
                    e |= 0,
                    r || tt(t, e, this.length);
                for (var i = this[t], n = 1, o = 0; ++o < e && (n *= 256);) i += this[t + o] * n;
                return i
            },
            R.prototype.readUIntBE = function (t, e, r) {
                t |= 0,
                    e |= 0,
                    r || tt(t, e, this.length);
                for (var i = this[t + --e], n = 1; e > 0 && (n *= 256);) i += this[t + --e] * n;
                return i
            },
            R.prototype.readUInt8 = function (t, e) {
                return e || tt(t, 1, this.length),
                    this[t]
            },
            R.prototype.readUInt16LE = function (t, e) {
                return e || tt(t, 2, this.length),
                    this[t] | this[t + 1] << 8
            },
            R.prototype.readUInt16BE = function (t, e) {
                return e || tt(t, 2, this.length),
                    this[t] << 8 | this[t + 1]
            },
            R.prototype.readUInt32LE = function (t, e) {
                return e || tt(t, 4, this.length),
                    (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            },
            R.prototype.readUInt32BE = function (t, e) {
                return e || tt(t, 4, this.length),
                    16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            },
            R.prototype.readIntLE = function (t, e, r) {
                t |= 0,
                    e |= 0,
                    r || tt(t, e, this.length);
                for (var i = this[t], n = 1, o = 0; ++o < e && (n *= 256);) i += this[t + o] * n;
                return i >= (n *= 128) && (i -= Math.pow(2, 8 * e)),
                    i
            },
            R.prototype.readIntBE = function (t, e, r) {
                t |= 0,
                    e |= 0,
                    r || tt(t, e, this.length);
                for (var i = e,
                    n = 1,
                    o = this[t + --i]; i > 0 && (n *= 256);) o += this[t + --i] * n;
                return o >= (n *= 128) && (o -= Math.pow(2, 8 * e)),
                    o
            },
            R.prototype.readInt8 = function (t, e) {
                return e || tt(t, 1, this.length),
                    128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            },
            R.prototype.readInt16LE = function (t, e) {
                e || tt(t, 2, this.length);
                var r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            },
            R.prototype.readInt16BE = function (t, e) {
                e || tt(t, 2, this.length);
                var r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 4294901760 | r : r
            },
            R.prototype.readInt32LE = function (t, e) {
                return e || tt(t, 4, this.length),
                    this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            },
            R.prototype.readInt32BE = function (t, e) {
                return e || tt(t, 4, this.length),
                    this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            },
            R.prototype.readFloatLE = function (t, e) {
                return e || tt(t, 4, this.length),
                    T(this, t, !0, 23, 4)
            },
            R.prototype.readFloatBE = function (t, e) {
                return e || tt(t, 4, this.length),
                    T(this, t, !1, 23, 4)
            },
            R.prototype.readDoubleLE = function (t, e) {
                return e || tt(t, 8, this.length),
                    T(this, t, !0, 52, 8)
            },
            R.prototype.readDoubleBE = function (t, e) {
                return e || tt(t, 8, this.length),
                    T(this, t, !1, 52, 8)
            },
            R.prototype.writeUIntLE = function (t, e, r, i) {
                (t = +t, e |= 0, r |= 0, i) || et(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var n = 1,
                    o = 0;
                for (this[e] = 255 & t; ++o < r && (n *= 256);) this[e + o] = t / n & 255;
                return e + r
            },
            R.prototype.writeUIntBE = function (t, e, r, i) {
                (t = +t, e |= 0, r |= 0, i) || et(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var n = r - 1,
                    o = 1;
                for (this[e + n] = 255 & t; --n >= 0 && (o *= 256);) this[e + n] = t / o & 255;
                return e + r
            },
            R.prototype.writeUInt8 = function (t, e, r) {
                return t = +t,
                    e |= 0,
                    r || et(this, t, e, 1, 255, 0),
                    R.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                    this[e] = 255 & t,
                    e + 1
            },
            R.prototype.writeUInt16LE = function (t, e, r) {
                return t = +t,
                    e |= 0,
                    r || et(this, t, e, 2, 65535, 0),
                    R.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : rt(this, t, e, !0),
                    e + 2
            },
            R.prototype.writeUInt16BE = function (t, e, r) {
                return t = +t,
                    e |= 0,
                    r || et(this, t, e, 2, 65535, 0),
                    R.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : rt(this, t, e, !1),
                    e + 2
            },
            R.prototype.writeUInt32LE = function (t, e, r) {
                return t = +t,
                    e |= 0,
                    r || et(this, t, e, 4, 4294967295, 0),
                    R.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : it(this, t, e, !0),
                    e + 4
            },
            R.prototype.writeUInt32BE = function (t, e, r) {
                return t = +t,
                    e |= 0,
                    r || et(this, t, e, 4, 4294967295, 0),
                    R.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : it(this, t, e, !1),
                    e + 4
            },
            R.prototype.writeIntLE = function (t, e, r, i) {
                if (t = +t, e |= 0, !i) {
                    var n = Math.pow(2, 8 * r - 1);
                    et(this, t, e, r, n - 1, -n)
                }
                var o = 0,
                    s = 1,
                    h = 0;
                for (this[e] = 255 & t; ++o < r && (s *= 256);) t < 0 && 0 === h && 0 !== this[e + o - 1] && (h = 1),
                    this[e + o] = (t / s >> 0) - h & 255;
                return e + r
            },
            R.prototype.writeIntBE = function (t, e, r, i) {
                if (t = +t, e |= 0, !i) {
                    var n = Math.pow(2, 8 * r - 1);
                    et(this, t, e, r, n - 1, -n)
                }
                var o = r - 1,
                    s = 1,
                    h = 0;
                for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) t < 0 && 0 === h && 0 !== this[e + o + 1] && (h = 1),
                    this[e + o] = (t / s >> 0) - h & 255;
                return e + r
            },
            R.prototype.writeInt8 = function (t, e, r) {
                return t = +t,
                    e |= 0,
                    r || et(this, t, e, 1, 127, -128),
                    R.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                    t < 0 && (t = 255 + t + 1),
                    this[e] = 255 & t,
                    e + 1
            },
            R.prototype.writeInt16LE = function (t, e, r) {
                return t = +t,
                    e |= 0,
                    r || et(this, t, e, 2, 32767, -32768),
                    R.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : rt(this, t, e, !0),
                    e + 2
            },
            R.prototype.writeInt16BE = function (t, e, r) {
                return t = +t,
                    e |= 0,
                    r || et(this, t, e, 2, 32767, -32768),
                    R.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : rt(this, t, e, !1),
                    e + 2
            },
            R.prototype.writeInt32LE = function (t, e, r) {
                return t = +t,
                    e |= 0,
                    r || et(this, t, e, 4, 2147483647, -2147483648),
                    R.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : it(this, t, e, !0),
                    e + 4
            },
            R.prototype.writeInt32BE = function (t, e, r) {
                return t = +t,
                    e |= 0,
                    r || et(this, t, e, 4, 2147483647, -2147483648),
                    t < 0 && (t = 4294967295 + t + 1),
                    R.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : it(this, t, e, !1),
                    e + 4
            },
            R.prototype.writeFloatLE = function (t, e, r) {
                return ot(this, t, e, !0, r)
            },
            R.prototype.writeFloatBE = function (t, e, r) {
                return ot(this, t, e, !1, r)
            },
            R.prototype.writeDoubleLE = function (t, e, r) {
                return st(this, t, e, !0, r)
            },
            R.prototype.writeDoubleBE = function (t, e, r) {
                return st(this, t, e, !1, r)
            },
            R.prototype.copy = function (t, e, r, i) {
                if (r || (r = 0), i || 0 === i || (i = this.length), e >= t.length && (e = t.length), e || (e = 0), i > 0 && i < r && (i = r), i === r) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                if (i < 0) throw new RangeError("sourceEnd out of bounds");
                i > this.length && (i = this.length),
                    t.length - e < i - r && (i = t.length - e + r);
                var n, o = i - r;
                if (this === t && r < e && e < i) for (n = o - 1; n >= 0; --n) t[n + e] = this[n + r];
                else if (o < 1e3 || !R.TYPED_ARRAY_SUPPORT) for (n = 0; n < o; ++n) t[n + e] = this[n + r];
                else Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e);
                return o
            },
            R.prototype.fill = function (t, e, r, i) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (i = e, e = 0, r = this.length) : "string" == typeof r && (i = r, r = this.length), 1 === t.length) {
                        var n = t.charCodeAt(0);
                        n < 256 && (t = n)
                    }
                    if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                    if ("string" == typeof i && !R.isEncoding(i)) throw new TypeError("Unknown encoding: " + i)
                } else "number" == typeof t && (t &= 255);
                if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                if (r <= e) return this;
                var o;
                if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t) for (o = e; o < r; ++o) this[o] = t;
                else {
                    var s = P(t) ? t : at(new R(t, i).toString()),
                        h = s.length;
                    for (o = 0; o < r - e; ++o) this[o + e] = s[o % h]
                }
                return this
            };
        var ht = /[^+/0-9A-Za-z-_]/g;
        function ut(t) {
            return t < 16 ? "0" + t.toString(16) : t.toString(16)
        }
        function at(t, e) {
            var r;
            e = e || 1 / 0;
            for (var i = t.length,
                n = null,
                o = [], s = 0; s < i; ++s) {
                if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
                    if (!n) {
                        if (r > 56319) {
                            (e -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (s + 1 === i) {
                            (e -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        n = r;
                        continue
                    }
                    if (r < 56320) {
                        (e -= 3) > -1 && o.push(239, 191, 189),
                            n = r;
                        continue
                    }
                    r = 65536 + (n - 55296 << 10 | r - 56320)
                } else n && (e -= 3) > -1 && o.push(239, 191, 189);
                if (n = null, r < 128) {
                    if ((e -= 1) < 0) break;
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
        function ft(t) {
            return function (t) {
                var e, r, i, n, o, s;
                v || w();
                var h = t.length;
                if (h % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                o = "=" === t[h - 2] ? 2 : "=" === t[h - 1] ? 1 : 0,
                    s = new g(3 * h / 4 - o),
                    i = o > 0 ? h - 4 : h;
                var u = 0;
                for (e = 0, r = 0; e < i; e += 4, r += 3) n = y[t.charCodeAt(e)] << 18 | y[t.charCodeAt(e + 1)] << 12 | y[t.charCodeAt(e + 2)] << 6 | y[t.charCodeAt(e + 3)],
                    s[u++] = n >> 16 & 255,
                    s[u++] = n >> 8 & 255,
                    s[u++] = 255 & n;
                return 2 === o ? (n = y[t.charCodeAt(e)] << 2 | y[t.charCodeAt(e + 1)] >> 4, s[u++] = 255 & n) : 1 === o && (n = y[t.charCodeAt(e)] << 10 | y[t.charCodeAt(e + 1)] << 4 | y[t.charCodeAt(e + 2)] >> 2, s[u++] = n >> 8 & 255, s[u++] = 255 & n),
                    s
            }(function (t) {
                if ((t = function (t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                }(t).replace(ht, "")).length < 2) return "";
                for (; t.length % 4 != 0;) t += "=";
                return t
            }(t))
        }
        function lt(t, e, r, i) {
            for (var n = 0; n < i && !(n + r >= e.length || n >= t.length); ++n) e[n + r] = t[n];
            return n
        }
        function ct(t) {
            return null != t && (!!t._isBuffer || pt(t) ||
                function (t) {
                    return "function" == typeof t.readFloatLE && "function" == typeof t.slice && pt(t.slice(0, 0))
                }(t))
        }
        function pt(t) {
            return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        }
        var dt = Object.freeze({
            __proto__: null,
            Buffer: R,
            INSPECT_MAX_BYTES: 50,
            SlowBuffer: function (t) {
                return + t != t && (t = 0),
                    R.alloc(+ t)
            },
            isBuffer: ct,
            kMaxLength: S
        }),
            mt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
        function yt(t) {
            if (t.__esModule) return t;
            var e = Object.defineProperty({},
                "__esModule", {
                value: !0
            });
            return Object.keys(t).forEach((function (r) {
                var i = Object.getOwnPropertyDescriptor(t, r);
                Object.defineProperty(e, r, i.get ? i : {
                    enumerable: !0,
                    get: function () {
                        return t[r]
                    }
                })
            })),
                e
        }
        function gt(t) {
            var e = {
                exports: {}
            };
            return t(e, e.exports),
                e.exports
        }
        var vt = gt((function (t, e) {
            (function () {
                var e;
                function r(t, e, r) {
                    null != t && ("number" == typeof t ? this.fromNumber(t, e, r) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
                }
                function i() {
                    return new r(null)
                }
                var n = "undefined" != typeof navigator;
                n && "Microsoft Internet Explorer" == navigator.appName ? (r.prototype.am = function (t, e, r, i, n, o) {
                    for (var s = 32767 & e,
                        h = e >> 15; --o >= 0;) {
                        var u = 32767 & this[t],
                            a = this[t++] >> 15,
                            f = h * u + a * s;
                        n = ((u = s * u + ((32767 & f) << 15) + r[i] + (1073741823 & n)) >>> 30) + (f >>> 15) + h * a + (n >>> 30),
                            r[i++] = 1073741823 & u
                    }
                    return n
                },
                    e = 30) : n && "Netscape" != navigator.appName ? (r.prototype.am = function (t, e, r, i, n, o) {
                        for (; --o >= 0;) {
                            var s = e * this[t++] + r[i] + n;
                            n = Math.floor(s / 67108864),
                                r[i++] = 67108863 & s
                        }
                        return n
                    },
                        e = 26) : (r.prototype.am = function (t, e, r, i, n, o) {
                            for (var s = 16383 & e,
                                h = e >> 14; --o >= 0;) {
                                var u = 16383 & this[t],
                                    a = this[t++] >> 14,
                                    f = h * u + a * s;
                                n = ((u = s * u + ((16383 & f) << 14) + r[i] + n) >> 28) + (f >> 14) + h * a,
                                    r[i++] = 268435455 & u
                            }
                            return n
                        },
                            e = 28),
                    r.prototype.DB = e,
                    r.prototype.DM = (1 << e) - 1,
                    r.prototype.DV = 1 << e;
                r.prototype.FV = Math.pow(2, 52),
                    r.prototype.F1 = 52 - e,
                    r.prototype.F2 = 2 * e - 52;
                var o, s, h = new Array();
                for (o = "0".charCodeAt(0), s = 0; s <= 9; ++s) h[o++] = s;
                for (o = "a".charCodeAt(0), s = 10; s < 36; ++s) h[o++] = s;
                for (o = "A".charCodeAt(0), s = 10; s < 36; ++s) h[o++] = s;
                function u(t) {
                    return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)
                }
                function a(t, e) {
                    var r = h[t.charCodeAt(e)];
                    return null == r ? -1 : r
                }
                function f(t) {
                    var e = i();
                    return e.fromInt(t),
                        e
                }
                function l(t) {
                    var e, r = 1;
                    return 0 != (e = t >>> 16) && (t = e, r += 16),
                        0 != (e = t >> 8) && (t = e, r += 8),
                        0 != (e = t >> 4) && (t = e, r += 4),
                        0 != (e = t >> 2) && (t = e, r += 2),
                        0 != (e = t >> 1) && (t = e, r += 1),
                        r
                }
                function c(t) {
                    this.m = t
                }
                function p(t) {
                    this.m = t,
                        this.mp = t.invDigit(),
                        this.mpl = 32767 & this.mp,
                        this.mph = this.mp >> 15,
                        this.um = (1 << t.DB - 15) - 1,
                        this.mt2 = 2 * t.t
                }
                function d(t, e) {
                    return t & e
                }
                function m(t, e) {
                    return t | e
                }
                function y(t, e) {
                    return t ^ e
                }
                function g(t, e) {
                    return t & ~e
                }
                function v(t) {
                    if (0 == t) return - 1;
                    var e = 0;
                    return 0 == (65535 & t) && (t >>= 16, e += 16),
                        0 == (255 & t) && (t >>= 8, e += 8),
                        0 == (15 & t) && (t >>= 4, e += 4),
                        0 == (3 & t) && (t >>= 2, e += 2),
                        0 == (1 & t) && ++e,
                        e
                }
                function w(t) {
                    for (var e = 0; 0 != t;) t &= t - 1,
                        ++e;
                    return e
                }
                function b() { }
                function M(t) {
                    return t
                }
                function T(t) {
                    this.r2 = i(),
                        this.q3 = i(),
                        r.ONE.dlShiftTo(2 * t.t, this.r2),
                        this.mu = this.r2.divide(t),
                        this.m = t
                }
                c.prototype.convert = function (t) {
                    return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
                },
                    c.prototype.revert = function (t) {
                        return t
                    },
                    c.prototype.reduce = function (t) {
                        t.divRemTo(this.m, null, t)
                    },
                    c.prototype.mulTo = function (t, e, r) {
                        t.multiplyTo(e, r),
                            this.reduce(r)
                    },
                    c.prototype.sqrTo = function (t, e) {
                        t.squareTo(e),
                            this.reduce(e)
                    },
                    p.prototype.convert = function (t) {
                        var e = i();
                        return t.abs().dlShiftTo(this.m.t, e),
                            e.divRemTo(this.m, null, e),
                            t.s < 0 && e.compareTo(r.ZERO) > 0 && this.m.subTo(e, e),
                            e
                    },
                    p.prototype.revert = function (t) {
                        var e = i();
                        return t.copyTo(e),
                            this.reduce(e),
                            e
                    },
                    p.prototype.reduce = function (t) {
                        for (; t.t <= this.mt2;) t[t.t++] = 0;
                        for (var e = 0; e < this.m.t; ++e) {
                            var r = 32767 & t[e],
                                i = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                            for (t[r = e + this.m.t] += this.m.am(0, i, t, e, 0, this.m.t); t[r] >= t.DV;) t[r] -= t.DV,
                                t[++r]++
                        }
                        t.clamp(),
                            t.drShiftTo(this.m.t, t),
                            t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
                    },
                    p.prototype.mulTo = function (t, e, r) {
                        t.multiplyTo(e, r),
                            this.reduce(r)
                    },
                    p.prototype.sqrTo = function (t, e) {
                        t.squareTo(e),
                            this.reduce(e)
                    },
                    r.prototype.copyTo = function (t) {
                        for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
                        t.t = this.t,
                            t.s = this.s
                    },
                    r.prototype.fromInt = function (t) {
                        this.t = 1,
                            this.s = t < 0 ? -1 : 0,
                            t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
                    },
                    r.prototype.fromString = function (t, e) {
                        var i;
                        if (16 == e) i = 4;
                        else if (8 == e) i = 3;
                        else if (256 == e) i = 8;
                        else if (2 == e) i = 1;
                        else if (32 == e) i = 5;
                        else {
                            if (4 != e) return void this.fromRadix(t, e);
                            i = 2
                        }
                        this.t = 0,
                            this.s = 0;
                        for (var n = t.length,
                            o = !1,
                            s = 0; --n >= 0;) {
                            var h = 8 == i ? 255 & t[n] : a(t, n);
                            h < 0 ? "-" == t.charAt(n) && (o = !0) : (o = !1, 0 == s ? this[this.t++] = h : s + i > this.DB ? (this[this.t - 1] |= (h & (1 << this.DB - s) - 1) << s, this[this.t++] = h >> this.DB - s) : this[this.t - 1] |= h << s, (s += i) >= this.DB && (s -= this.DB))
                        }
                        8 == i && 0 != (128 & t[0]) && (this.s = -1, s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)),
                            this.clamp(),
                            o && r.ZERO.subTo(this, this)
                    },
                    r.prototype.clamp = function () {
                        for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;)--this.t
                    },
                    r.prototype.dlShiftTo = function (t, e) {
                        var r;
                        for (r = this.t - 1; r >= 0; --r) e[r + t] = this[r];
                        for (r = t - 1; r >= 0; --r) e[r] = 0;
                        e.t = this.t + t,
                            e.s = this.s
                    },
                    r.prototype.drShiftTo = function (t, e) {
                        for (var r = t; r < this.t; ++r) e[r - t] = this[r];
                        e.t = Math.max(this.t - t, 0),
                            e.s = this.s
                    },
                    r.prototype.lShiftTo = function (t, e) {
                        var r, i = t % this.DB,
                            n = this.DB - i,
                            o = (1 << n) - 1,
                            s = Math.floor(t / this.DB),
                            h = this.s << i & this.DM;
                        for (r = this.t - 1; r >= 0; --r) e[r + s + 1] = this[r] >> n | h,
                            h = (this[r] & o) << i;
                        for (r = s - 1; r >= 0; --r) e[r] = 0;
                        e[s] = h,
                            e.t = this.t + s + 1,
                            e.s = this.s,
                            e.clamp()
                    },
                    r.prototype.rShiftTo = function (t, e) {
                        e.s = this.s;
                        var r = Math.floor(t / this.DB);
                        if (r >= this.t) e.t = 0;
                        else {
                            var i = t % this.DB,
                                n = this.DB - i,
                                o = (1 << i) - 1;
                            e[0] = this[r] >> i;
                            for (var s = r + 1; s < this.t; ++s) e[s - r - 1] |= (this[s] & o) << n,
                                e[s - r] = this[s] >> i;
                            i > 0 && (e[this.t - r - 1] |= (this.s & o) << n),
                                e.t = this.t - r,
                                e.clamp()
                        }
                    },
                    r.prototype.subTo = function (t, e) {
                        for (var r = 0,
                            i = 0,
                            n = Math.min(t.t, this.t); r < n;) i += this[r] - t[r],
                                e[r++] = i & this.DM,
                                i >>= this.DB;
                        if (t.t < this.t) {
                            for (i -= t.s; r < this.t;) i += this[r],
                                e[r++] = i & this.DM,
                                i >>= this.DB;
                            i += this.s
                        } else {
                            for (i += this.s; r < t.t;) i -= t[r],
                                e[r++] = i & this.DM,
                                i >>= this.DB;
                            i -= t.s
                        }
                        e.s = i < 0 ? -1 : 0,
                            i < -1 ? e[r++] = this.DV + i : i > 0 && (e[r++] = i),
                            e.t = r,
                            e.clamp()
                    },
                    r.prototype.multiplyTo = function (t, e) {
                        var i = this.abs(),
                            n = t.abs(),
                            o = i.t;
                        for (e.t = o + n.t; --o >= 0;) e[o] = 0;
                        for (o = 0; o < n.t; ++o) e[o + i.t] = i.am(0, n[o], e, o, 0, i.t);
                        e.s = 0,
                            e.clamp(),
                            this.s != t.s && r.ZERO.subTo(e, e)
                    },
                    r.prototype.squareTo = function (t) {
                        for (var e = this.abs(), r = t.t = 2 * e.t; --r >= 0;) t[r] = 0;
                        for (r = 0; r < e.t - 1; ++r) {
                            var i = e.am(r, e[r], t, 2 * r, 0, 1); (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, i, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, t[r + e.t + 1] = 1)
                        }
                        t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)),
                            t.s = 0,
                            t.clamp()
                    },
                    r.prototype.divRemTo = function (t, e, n) {
                        var o = t.abs();
                        if (!(o.t <= 0)) {
                            var s = this.abs();
                            if (s.t < o.t) return null != e && e.fromInt(0),
                                void (null != n && this.copyTo(n));
                            null == n && (n = i());
                            var h = i(),
                                u = this.s,
                                a = t.s,
                                f = this.DB - l(o[o.t - 1]);
                            f > 0 ? (o.lShiftTo(f, h), s.lShiftTo(f, n)) : (o.copyTo(h), s.copyTo(n));
                            var c = h.t,
                                p = h[c - 1];
                            if (0 != p) {
                                var d = p * (1 << this.F1) + (c > 1 ? h[c - 2] >> this.F2 : 0),
                                    m = this.FV / d,
                                    y = (1 << this.F1) / d,
                                    g = 1 << this.F2,
                                    v = n.t,
                                    w = v - c,
                                    b = null == e ? i() : e;
                                for (h.dlShiftTo(w, b), n.compareTo(b) >= 0 && (n[n.t++] = 1, n.subTo(b, n)), r.ONE.dlShiftTo(c, b), b.subTo(h, h); h.t < c;) h[h.t++] = 0;
                                for (; --w >= 0;) {
                                    var M = n[--v] == p ? this.DM : Math.floor(n[v] * m + (n[v - 1] + g) * y);
                                    if ((n[v] += h.am(0, M, n, w, 0, c)) < M) for (h.dlShiftTo(w, b), n.subTo(b, n); n[v] < --M;) n.subTo(b, n)
                                }
                                null != e && (n.drShiftTo(c, e), u != a && r.ZERO.subTo(e, e)),
                                    n.t = c,
                                    n.clamp(),
                                    f > 0 && n.rShiftTo(f, n),
                                    u < 0 && r.ZERO.subTo(n, n)
                            }
                        }
                    },
                    r.prototype.invDigit = function () {
                        if (this.t < 1) return 0;
                        var t = this[0];
                        if (0 == (1 & t)) return 0;
                        var e = 3 & t;
                        return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e
                    },
                    r.prototype.isEven = function () {
                        return 0 == (this.t > 0 ? 1 & this[0] : this.s)
                    },
                    r.prototype.exp = function (t, e) {
                        if (t > 4294967295 || t < 1) return r.ONE;
                        var n = i(),
                            o = i(),
                            s = e.convert(this),
                            h = l(t) - 1;
                        for (s.copyTo(n); --h >= 0;) if (e.sqrTo(n, o), (t & 1 << h) > 0) e.mulTo(o, s, n);
                        else {
                            var u = n;
                            n = o,
                                o = u
                        }
                        return e.revert(n)
                    },
                    r.prototype.toString = function (t) {
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
                        var r, i = (1 << e) - 1,
                            n = !1,
                            o = "",
                            s = this.t,
                            h = this.DB - s * this.DB % e;
                        if (s-- > 0) for (h < this.DB && (r = this[s] >> h) > 0 && (n = !0, o = u(r)); s >= 0;) h < e ? (r = (this[s] & (1 << h) - 1) << e - h, r |= this[--s] >> (h += this.DB - e)) : (r = this[s] >> (h -= e) & i, h <= 0 && (h += this.DB, --s)),
                            r > 0 && (n = !0),
                            n && (o += u(r));
                        return n ? o : "0"
                    },
                    r.prototype.negate = function () {
                        var t = i();
                        return r.ZERO.subTo(this, t),
                            t
                    },
                    r.prototype.abs = function () {
                        return this.s < 0 ? this.negate() : this
                    },
                    r.prototype.compareTo = function (t) {
                        var e = this.s - t.s;
                        if (0 != e) return e;
                        var r = this.t;
                        if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
                        for (; --r >= 0;) if (0 != (e = this[r] - t[r])) return e;
                        return 0
                    },
                    r.prototype.bitLength = function () {
                        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + l(this[this.t - 1] ^ this.s & this.DM)
                    },
                    r.prototype.mod = function (t) {
                        var e = i();
                        return this.abs().divRemTo(t, null, e),
                            this.s < 0 && e.compareTo(r.ZERO) > 0 && t.subTo(e, e),
                            e
                    },
                    r.prototype.modPowInt = function (t, e) {
                        var r;
                        return r = t < 256 || e.isEven() ? new c(e) : new p(e),
                            this.exp(t, r)
                    },
                    r.ZERO = f(0),
                    r.ONE = f(1),
                    b.prototype.convert = M,
                    b.prototype.revert = M,
                    b.prototype.mulTo = function (t, e, r) {
                        t.multiplyTo(e, r)
                    },
                    b.prototype.sqrTo = function (t, e) {
                        t.squareTo(e)
                    },
                    T.prototype.convert = function (t) {
                        if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
                        if (t.compareTo(this.m) < 0) return t;
                        var e = i();
                        return t.copyTo(e),
                            this.reduce(e),
                            e
                    },
                    T.prototype.revert = function (t) {
                        return t
                    },
                    T.prototype.reduce = function (t) {
                        for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
                        for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) t.subTo(this.m, t)
                    },
                    T.prototype.mulTo = function (t, e, r) {
                        t.multiplyTo(e, r),
                            this.reduce(r)
                    },
                    T.prototype.sqrTo = function (t, e) {
                        t.squareTo(e),
                            this.reduce(e)
                    };
                var _, E, A, S = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
                    B = (1 << 26) / S[S.length - 1];
                function k() {
                    var t;
                    t = (new Date()).getTime(),
                        E[A++] ^= 255 & t,
                        E[A++] ^= t >> 8 & 255,
                        E[A++] ^= t >> 16 & 255,
                        E[A++] ^= t >> 24 & 255,
                        A >= P && (A -= P)
                }
                if (r.prototype.chunkSize = function (t) {
                    return Math.floor(Math.LN2 * this.DB / Math.log(t))
                },
                    r.prototype.toRadix = function (t) {
                        if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
                        var e = this.chunkSize(t),
                            r = Math.pow(t, e),
                            n = f(r),
                            o = i(),
                            s = i(),
                            h = "";
                        for (this.divRemTo(n, o, s); o.signum() > 0;) h = (r + s.intValue()).toString(t).substr(1) + h,
                            o.divRemTo(n, o, s);
                        return s.intValue().toString(t) + h
                    },
                    r.prototype.fromRadix = function (t, e) {
                        this.fromInt(0),
                            null == e && (e = 10);
                        for (var i = this.chunkSize(e), n = Math.pow(e, i), o = !1, s = 0, h = 0, u = 0; u < t.length; ++u) {
                            var f = a(t, u);
                            f < 0 ? "-" == t.charAt(u) && 0 == this.signum() && (o = !0) : (h = e * h + f, ++s >= i && (this.dMultiply(n), this.dAddOffset(h, 0), s = 0, h = 0))
                        }
                        s > 0 && (this.dMultiply(Math.pow(e, s)), this.dAddOffset(h, 0)),
                            o && r.ZERO.subTo(this, this)
                    },
                    r.prototype.fromNumber = function (t, e, i) {
                        if ("number" == typeof e) if (t < 2) this.fromInt(1);
                        else for (this.fromNumber(t, i), this.testBit(t - 1) || this.bitwiseTo(r.ONE.shiftLeft(t - 1), m, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e);) this.dAddOffset(2, 0),
                            this.bitLength() > t && this.subTo(r.ONE.shiftLeft(t - 1), this);
                        else {
                            var n = new Array(),
                                o = 7 & t;
                            n.length = 1 + (t >> 3),
                                e.nextBytes(n),
                                o > 0 ? n[0] &= (1 << o) - 1 : n[0] = 0,
                                this.fromString(n, 256)
                        }
                    },
                    r.prototype.bitwiseTo = function (t, e, r) {
                        var i, n, o = Math.min(t.t, this.t);
                        for (i = 0; i < o; ++i) r[i] = e(this[i], t[i]);
                        if (t.t < this.t) {
                            for (n = t.s & this.DM, i = o; i < this.t; ++i) r[i] = e(this[i], n);
                            r.t = this.t
                        } else {
                            for (n = this.s & this.DM, i = o; i < t.t; ++i) r[i] = e(n, t[i]);
                            r.t = t.t
                        }
                        r.s = e(this.s, t.s),
                            r.clamp()
                    },
                    r.prototype.changeBit = function (t, e) {
                        var i = r.ONE.shiftLeft(t);
                        return this.bitwiseTo(i, e, i),
                            i
                    },
                    r.prototype.addTo = function (t, e) {
                        for (var r = 0,
                            i = 0,
                            n = Math.min(t.t, this.t); r < n;) i += this[r] + t[r],
                                e[r++] = i & this.DM,
                                i >>= this.DB;
                        if (t.t < this.t) {
                            for (i += t.s; r < this.t;) i += this[r],
                                e[r++] = i & this.DM,
                                i >>= this.DB;
                            i += this.s
                        } else {
                            for (i += this.s; r < t.t;) i += t[r],
                                e[r++] = i & this.DM,
                                i >>= this.DB;
                            i += t.s
                        }
                        e.s = i < 0 ? -1 : 0,
                            i > 0 ? e[r++] = i : i < -1 && (e[r++] = this.DV + i),
                            e.t = r,
                            e.clamp()
                    },
                    r.prototype.dMultiply = function (t) {
                        this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
                            ++this.t,
                            this.clamp()
                    },
                    r.prototype.dAddOffset = function (t, e) {
                        if (0 != t) {
                            for (; this.t <= e;) this[this.t++] = 0;
                            for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV,
                                ++e >= this.t && (this[this.t++] = 0),
                                ++this[e]
                        }
                    },
                    r.prototype.multiplyLowerTo = function (t, e, r) {
                        var i, n = Math.min(this.t + t.t, e);
                        for (r.s = 0, r.t = n; n > 0;) r[--n] = 0;
                        for (i = r.t - this.t; n < i; ++n) r[n + this.t] = this.am(0, t[n], r, n, 0, this.t);
                        for (i = Math.min(t.t, e); n < i; ++n) this.am(0, t[n], r, n, 0, e - n);
                        r.clamp()
                    },
                    r.prototype.multiplyUpperTo = function (t, e, r) {
                        --e;
                        var i = r.t = this.t + t.t - e;
                        for (r.s = 0; --i >= 0;) r[i] = 0;
                        for (i = Math.max(e - this.t, 0); i < t.t; ++i) r[this.t + i - e] = this.am(e - i, t[i], r, 0, 0, this.t + i - e);
                        r.clamp(),
                            r.drShiftTo(1, r)
                    },
                    r.prototype.modInt = function (t) {
                        if (t <= 0) return 0;
                        var e = this.DV % t,
                            r = this.s < 0 ? t - 1 : 0;
                        if (this.t > 0) if (0 == e) r = this[0] % t;
                        else for (var i = this.t - 1; i >= 0; --i) r = (e * r + this[i]) % t;
                        return r
                    },
                    r.prototype.millerRabin = function (t) {
                        var e = this.subtract(r.ONE),
                            n = e.getLowestSetBit();
                        if (n <= 0) return !1;
                        var o = e.shiftRight(n); (t = t + 1 >> 1) > S.length && (t = S.length);
                        for (var s = i(), h = 0; h < t; ++h) {
                            s.fromInt(S[Math.floor(Math.random() * S.length)]);
                            var u = s.modPow(o, this);
                            if (0 != u.compareTo(r.ONE) && 0 != u.compareTo(e)) {
                                for (var a = 1; a++ < n && 0 != u.compareTo(e);) if (0 == (u = u.modPowInt(2, this)).compareTo(r.ONE)) return !1;
                                if (0 != u.compareTo(e)) return !1
                            }
                        }
                        return !0
                    },
                    r.prototype.clone = function () {
                        var t = i();
                        return this.copyTo(t),
                            t
                    },
                    r.prototype.intValue = function () {
                        if (this.s < 0) {
                            if (1 == this.t) return this[0] - this.DV;
                            if (0 == this.t) return - 1
                        } else {
                            if (1 == this.t) return this[0];
                            if (0 == this.t) return 0
                        }
                        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
                    },
                    r.prototype.byteValue = function () {
                        return 0 == this.t ? this.s : this[0] << 24 >> 24
                    },
                    r.prototype.shortValue = function () {
                        return 0 == this.t ? this.s : this[0] << 16 >> 16
                    },
                    r.prototype.signum = function () {
                        return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
                    },
                    r.prototype.toByteArray = function () {
                        var t = this.t,
                            e = new Array();
                        e[0] = this.s;
                        var r, i = this.DB - t * this.DB % 8,
                            n = 0;
                        if (t-- > 0) for (i < this.DB && (r = this[t] >> i) != (this.s & this.DM) >> i && (e[n++] = r | this.s << this.DB - i); t >= 0;) i < 8 ? (r = (this[t] & (1 << i) - 1) << 8 - i, r |= this[--t] >> (i += this.DB - 8)) : (r = this[t] >> (i -= 8) & 255, i <= 0 && (i += this.DB, --t)),
                            0 != (128 & r) && (r |= -256),
                            0 == n && (128 & this.s) != (128 & r) && ++n,
                            (n > 0 || r != this.s) && (e[n++] = r);
                        return e
                    },
                    r.prototype.equals = function (t) {
                        return 0 == this.compareTo(t)
                    },
                    r.prototype.min = function (t) {
                        return this.compareTo(t) < 0 ? this : t
                    },
                    r.prototype.max = function (t) {
                        return this.compareTo(t) > 0 ? this : t
                    },
                    r.prototype.and = function (t) {
                        var e = i();
                        return this.bitwiseTo(t, d, e),
                            e
                    },
                    r.prototype.or = function (t) {
                        var e = i();
                        return this.bitwiseTo(t, m, e),
                            e
                    },
                    r.prototype.xor = function (t) {
                        var e = i();
                        return this.bitwiseTo(t, y, e),
                            e
                    },
                    r.prototype.andNot = function (t) {
                        var e = i();
                        return this.bitwiseTo(t, g, e),
                            e
                    },
                    r.prototype.not = function () {
                        for (var t = i(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
                        return t.t = this.t,
                            t.s = ~this.s,
                            t
                    },
                    r.prototype.shiftLeft = function (t) {
                        var e = i();
                        return t < 0 ? this.rShiftTo(- t, e) : this.lShiftTo(t, e),
                            e
                    },
                    r.prototype.shiftRight = function (t) {
                        var e = i();
                        return t < 0 ? this.lShiftTo(- t, e) : this.rShiftTo(t, e),
                            e
                    },
                    r.prototype.getLowestSetBit = function () {
                        for (var t = 0; t < this.t; ++t) if (0 != this[t]) return t * this.DB + v(this[t]);
                        return this.s < 0 ? this.t * this.DB : -1
                    },
                    r.prototype.bitCount = function () {
                        for (var t = 0,
                            e = this.s & this.DM,
                            r = 0; r < this.t; ++r) t += w(this[r] ^ e);
                        return t
                    },
                    r.prototype.testBit = function (t) {
                        var e = Math.floor(t / this.DB);
                        return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
                    },
                    r.prototype.setBit = function (t) {
                        return this.changeBit(t, m)
                    },
                    r.prototype.clearBit = function (t) {
                        return this.changeBit(t, g)
                    },
                    r.prototype.flipBit = function (t) {
                        return this.changeBit(t, y)
                    },
                    r.prototype.add = function (t) {
                        var e = i();
                        return this.addTo(t, e),
                            e
                    },
                    r.prototype.subtract = function (t) {
                        var e = i();
                        return this.subTo(t, e),
                            e
                    },
                    r.prototype.multiply = function (t) {
                        var e = i();
                        return this.multiplyTo(t, e),
                            e
                    },
                    r.prototype.divide = function (t) {
                        var e = i();
                        return this.divRemTo(t, e, null),
                            e
                    },
                    r.prototype.remainder = function (t) {
                        var e = i();
                        return this.divRemTo(t, null, e),
                            e
                    },
                    r.prototype.divideAndRemainder = function (t) {
                        var e = i(),
                            r = i();
                        return this.divRemTo(t, e, r),
                            new Array(e, r)
                    },
                    r.prototype.modPow = function (t, e) {
                        var r, n, o = t.bitLength(),
                            s = f(1);
                        if (o <= 0) return s;
                        r = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6,
                            n = o < 8 ? new c(e) : e.isEven() ? new T(e) : new p(e);
                        var h = new Array(),
                            u = 3,
                            a = r - 1,
                            d = (1 << r) - 1;
                        if (h[1] = n.convert(this), r > 1) {
                            var m = i();
                            for (n.sqrTo(h[1], m); u <= d;) h[u] = i(),
                                n.mulTo(m, h[u - 2], h[u]),
                                u += 2
                        }
                        var y, g, v = t.t - 1,
                            w = !0,
                            b = i();
                        for (o = l(t[v]) - 1; v >= 0;) {
                            for (o >= a ? y = t[v] >> o - a & d : (y = (t[v] & (1 << o + 1) - 1) << a - o, v > 0 && (y |= t[v - 1] >> this.DB + o - a)), u = r; 0 == (1 & y);) y >>= 1,
                                --u;
                            if ((o -= u) < 0 && (o += this.DB, --v), w) h[y].copyTo(s),
                                w = !1;
                            else {
                                for (; u > 1;) n.sqrTo(s, b),
                                    n.sqrTo(b, s),
                                    u -= 2;
                                u > 0 ? n.sqrTo(s, b) : (g = s, s = b, b = g),
                                    n.mulTo(b, h[y], s)
                            }
                            for (; v >= 0 && 0 == (t[v] & 1 << o);) n.sqrTo(s, b),
                                g = s,
                                s = b,
                                b = g,
                                --o < 0 && (o = this.DB - 1, --v)
                        }
                        return n.revert(s)
                    },
                    r.prototype.modInverse = function (t) {
                        var e = t.isEven();
                        if (this.isEven() && e || 0 == t.signum()) return r.ZERO;
                        for (var i = t.clone(), n = this.clone(), o = f(1), s = f(0), h = f(0), u = f(1); 0 != i.signum();) {
                            for (; i.isEven();) i.rShiftTo(1, i),
                                e ? (o.isEven() && s.isEven() || (o.addTo(this, o), s.subTo(t, s)), o.rShiftTo(1, o)) : s.isEven() || s.subTo(t, s),
                                s.rShiftTo(1, s);
                            for (; n.isEven();) n.rShiftTo(1, n),
                                e ? (h.isEven() && u.isEven() || (h.addTo(this, h), u.subTo(t, u)), h.rShiftTo(1, h)) : u.isEven() || u.subTo(t, u),
                                u.rShiftTo(1, u);
                            i.compareTo(n) >= 0 ? (i.subTo(n, i), e && o.subTo(h, o), s.subTo(u, s)) : (n.subTo(i, n), e && h.subTo(o, h), u.subTo(s, u))
                        }
                        return 0 != n.compareTo(r.ONE) ? r.ZERO : u.compareTo(t) >= 0 ? u.subtract(t) : u.signum() < 0 ? (u.addTo(t, u), u.signum() < 0 ? u.add(t) : u) : u
                    },
                    r.prototype.pow = function (t) {
                        return this.exp(t, new b())
                    },
                    r.prototype.gcd = function (t) {
                        var e = this.s < 0 ? this.negate() : this.clone(),
                            r = t.s < 0 ? t.negate() : t.clone();
                        if (e.compareTo(r) < 0) {
                            var i = e;
                            e = r,
                                r = i
                        }
                        var n = e.getLowestSetBit(),
                            o = r.getLowestSetBit();
                        if (o < 0) return e;
                        for (n < o && (o = n), o > 0 && (e.rShiftTo(o, e), r.rShiftTo(o, r)); e.signum() > 0;)(n = e.getLowestSetBit()) > 0 && e.rShiftTo(n, e),
                            (n = r.getLowestSetBit()) > 0 && r.rShiftTo(n, r),
                            e.compareTo(r) >= 0 ? (e.subTo(r, e), e.rShiftTo(1, e)) : (r.subTo(e, r), r.rShiftTo(1, r));
                        return o > 0 && r.lShiftTo(o, r),
                            r
                    },
                    r.prototype.isProbablePrime = function (t) {
                        var e, r = this.abs();
                        if (1 == r.t && r[0] <= S[S.length - 1]) {
                            for (e = 0; e < S.length; ++e) if (r[0] == S[e]) return !0;
                            return !1
                        }
                        if (r.isEven()) return !1;
                        for (e = 1; e < S.length;) {
                            for (var i = S[e], n = e + 1; n < S.length && i < B;) i *= S[n++];
                            for (i = r.modInt(i); e < n;) if (i % S[e++] == 0) return !1
                        }
                        return r.millerRabin(t)
                    },
                    r.prototype.square = function () {
                        var t = i();
                        return this.squareTo(t),
                            t
                    },
                    r.prototype.Barrett = T, null == E) {
                    var R;
                    if (E = new Array(), A = 0, "undefined" != typeof window && window.crypto) if (window.crypto.getRandomValues) {
                        var F = new Uint8Array(32);
                        for (window.crypto.getRandomValues(F), R = 0; R < 32; ++R) E[A++] = F[R]
                    } else if ("Netscape" == navigator.appName && navigator.appVersion < "5") {
                        var C = window.crypto.random(32);
                        for (R = 0; R < C.length; ++R) E[A++] = 255 & C.charCodeAt(R)
                    }
                    for (; A < P;) R = Math.floor(65536 * Math.random()),
                        E[A++] = R >>> 8,
                        E[A++] = 255 & R;
                    A = 0,
                        k()
                }
                function D() {
                    if (null == _) {
                        for (k(), (_ = new x()).init(E), A = 0; A < E.length; ++A) E[A] = 0;
                        A = 0
                    }
                    return _.next()
                }
                function O() { }
                function x() {
                    this.i = 0,
                        this.j = 0,
                        this.S = new Array()
                }
                O.prototype.nextBytes = function (t) {
                    var e;
                    for (e = 0; e < t.length; ++e) t[e] = D()
                },
                    x.prototype.init = function (t) {
                        var e, r, i;
                        for (e = 0; e < 256; ++e) this.S[e] = e;
                        for (r = 0, e = 0; e < 256; ++e) r = r + this.S[e] + t[e % t.length] & 255,
                            i = this.S[e],
                            this.S[e] = this.S[r],
                            this.S[r] = i;
                        this.i = 0,
                            this.j = 0
                    },
                    x.prototype.next = function () {
                        var t;
                        return this.i = this.i + 1 & 255,
                            this.j = this.j + this.S[this.i] & 255,
                            t = this.S[this.i],
                            this.S[this.i] = this.S[this.j],
                            this.S[this.j] = t,
                            this.S[t + this.S[this.i] & 255]
                    };
                var P = 256;
                t.exports = {
                    default:
                        r,
                    BigInteger: r,
                    SecureRandom: O
                }
            }).call(mt)
        }));
        const {
            BigInteger: wt
        } = vt;
        var bt = class {
            constructor() {
                this.p = new wt("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF", 16),
                    this.a = new wt("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC", 16),
                    this.b = new wt("28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93", 16),
                    this.Gx = new wt("32C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7", 16),
                    this.Gy = new wt("BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0", 16),
                    this.n = new wt("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123", 16),
                    this.h = new wt("1", 16)
            }
        };
        const {
            BigInteger: Mt
        } = vt;
        for (var Tt = class {
            constructor(t, e) {
                "string" == typeof t && "string" == typeof e ? (this.X = new Mt(t, 16), this.Y = new Mt(e, 16)) : (this.X = t, this.Y = e)
            }
        },
            _t = function (t) {
                var e = Dt(t),
                    r = e[0],
                    i = e[1];
                return 3 * (r + i) / 4 - i
            },
            Et = function (t) {
                var e, r, i = Dt(t),
                    n = i[0],
                    o = i[1],
                    s = new kt(function (t, e, r) {
                        return 3 * (e + r) / 4 - r
                    }(0, n, o)),
                    h = 0,
                    u = o > 0 ? n - 4 : n;
                for (r = 0; r < u; r += 4) e = Bt[t.charCodeAt(r)] << 18 | Bt[t.charCodeAt(r + 1)] << 12 | Bt[t.charCodeAt(r + 2)] << 6 | Bt[t.charCodeAt(r + 3)],
                    s[h++] = e >> 16 & 255,
                    s[h++] = e >> 8 & 255,
                    s[h++] = 255 & e;
                2 === o && (e = Bt[t.charCodeAt(r)] << 2 | Bt[t.charCodeAt(r + 1)] >> 4, s[h++] = 255 & e);
                1 === o && (e = Bt[t.charCodeAt(r)] << 10 | Bt[t.charCodeAt(r + 1)] << 4 | Bt[t.charCodeAt(r + 2)] >> 2, s[h++] = e >> 8 & 255, s[h++] = 255 & e);
                return s
            },
            At = function (t) {
                for (var e, r = t.length,
                    i = r % 3,
                    n = [], o = 16383, s = 0, h = r - i; s < h; s += o) n.push(Ot(t, s, s + o > h ? h : s + o));
                1 === i ? (e = t[r - 1], n.push(St[e >> 2] + St[e << 4 & 63] + "==")) : 2 === i && (e = (t[r - 2] << 8) + t[r - 1], n.push(St[e >> 10] + St[e >> 4 & 63] + St[e << 2 & 63] + "="));
                return n.join("")
            },
            St = [], Bt = [], kt = "undefined" != typeof Uint8Array ? Uint8Array : Array, Rt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ft = 0, Ct = Rt.length; Ft < Ct; ++Ft) St[Ft] = Rt[Ft],
                Bt[Rt.charCodeAt(Ft)] = Ft;
        function Dt(t) {
            var e = t.length;
            if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var r = t.indexOf("=");
            return - 1 === r && (r = e),
                [r, r === e ? 0 : 4 - r % 4]
        }
        function Ot(t, e, r) {
            for (var i, n, o = [], s = e; s < r; s += 3) i = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]),
                o.push(St[(n = i) >> 18 & 63] + St[n >> 12 & 63] + St[n >> 6 & 63] + St[63 & n]);
            return o.join("")
        }
        Bt["-".charCodeAt(0)] = 62,
            Bt["_".charCodeAt(0)] = 63;
        var xt = {
            byteLength: _t,
            toByteArray: Et,
            fromByteArray: At
        };
        function Pt() { }
        function jt() { }
        Pt.prototype.encode = function (t) {
            const e = [],
                {
                    length: r
                } = t;
            let i = 0;
            for (; i < r;) {
                const r = t.codePointAt(i);
                let n = 0,
                    o = 0;
                for (r <= 127 ? (n = 0, o = 0) : r <= 2047 ? (n = 6, o = 192) : r <= 65535 ? (n = 12, o = 224) : r <= 2097151 && (n = 18, o = 240), e.push(o | r >> n), n -= 6; n >= 0;) e.push(128 | r >> n & 63),
                    n -= 6;
                i += r >= 65536 ? 2 : 1
            }
            return e
        },
            jt.prototype.decode = function (t) {
                let e = "",
                    r = 0;
                for (; r < t.length;) {
                    let i = t[r],
                        n = 0,
                        o = 0;
                    if (i <= 127 ? (n = 0, o = 255 & i) : i <= 223 ? (n = 1, o = 31 & i) : i <= 239 ? (n = 2, o = 15 & i) : i <= 244 && (n = 3, o = 7 & i), t.length - r - n > 0) {
                        let e = 0;
                        for (; e < n;) i = t[r + e + 1],
                            o = o << 6 | 63 & i,
                            e += 1
                    } else o = 65533,
                        n = t.length - r;
                    e += String.fromCodePoint(o),
                        r += n + 1
                }
                return e
            };
        var Ut = {
            TextDecoder: jt,
            TextEncoder: Pt
        };
        var It = {
            stringToByteArrayInUtf8: function (t) {
                return function (t) {
                    if ("undefined" != typeof window && window.TextEncoder) return new window.TextEncoder("utf-8").encode(t);
                    const {
                        TextEncoder: e
                    } = Ut;
                    return (new e()).encode(t)
                }(t)
            },
            utf8ByteArrayToString: function (t) {
                if (- 1 !== t) return Array.isArray(t) && (t = new Uint8Array(t)),
                    function (t) {
                        if ("undefined" != typeof window && window.TextDecoder) return new window.TextDecoder("utf-8").decode(t);
                        const {
                            TextDecoder: e
                        } = Ut;
                        return (new e()).decode(t)
                    }(t)
            },
            byteArrayToBase64: function (t) {
                return xt.fromByteArray(t)
            },
            base64ToByteArray: function (t) {
                return xt.toByteArray(t)
            },
            byteArrayToHex: function (t) {
                for (let e = 0; e < t.length; e++) t[e] = (t[e] >>> 0) % 256;
                const e = [];
                let r = 0;
                for (let i = 0; i < 2 * t.length; i += 2) e[i >>> 3] |= parseInt(t[r], 10) << 24 - i % 8 * 4,
                    r++;
                const i = [];
                for (let r = 0; r < t.length; r++) {
                    const t = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                    i.push((t >>> 4).toString(16)),
                        i.push((15 & t).toString(16))
                }
                return i.join("")
            },
            hexToByteArray: function (t) {
                if ("string" != typeof t) throw new TypeError("Expected input to be a string");
                if (t.length % 2 != 0) throw new RangeError("Expected string to be an even number of characters");
                const e = new Uint8Array(t.length / 2);
                for (let r = 0; r < t.length; r += 2) e[r / 2] = parseInt(t.substring(r, r + 2), 16);
                return e
            }
        };
        const Nt = [2043430169, 4086860338, 3878753381, 3462539467, 2630111639, 965255983, 1930511966, 3861023932, 3427080569, 2559193843, 823420391, 1646840782, 3293681564, 2292395833, 289824371, 579648742, 2643098247, 991229199, 1982458398, 3964916796, 3634866297, 2974765299, 1654563303, 3309126606, 2323285917, 351604539, 703209078, 1406418156, 2812836312, 1330705329, 2661410658, 1027854021, 2055708042, 4111416084, 3927864873, 3560762451, 2826557607, 1358147919, 2716295838, 1137624381, 2275248762, 255530229, 511060458, 1022120916, 2044241832, 4088483664, 3882000033, 3469032771, 2643098247, 991229199, 1982458398, 3964916796, 3634866297, 2974765299, 1654563303, 3309126606, 2323285917, 351604539, 703209078, 1406418156, 2812836312, 1330705329, 2661410658, 1027854021],
            qt = 64,
            Lt = new Array(68);
        function Yt(t, e) {
            return t << e | t >>> 32 - e
        }
        function zt(t) {
            return t ^ Yt(t, 15) ^ Yt(t, 23)
        }
        function Kt(t, e, r, i, n, o, s, h, u) {
            let a = Yt(e, 12);
            const f = Yt(a + o + Nt[t], 7);
            return a ^= f,
                t <= 15 ? (n = n + (e ^ r ^ i) + a + (Lt[t] ^ Lt[t + 4]), u = u +
                    function (t, e, r) {
                        return t ^ e ^ r
                    }(o, s, h) + f + Lt[t]) : (n = n +
                        function (t, e, r) {
                            return t & e | t & r | e & r
                        }(e, r, i) + a + (Lt[t] ^ Lt[t + 4]), u = u +
                        function (t, e, r) {
                            return t & e | ~t & r
                        }(o, s, h) + f + Lt[t]),
                [r = Yt(r, 9), n, s = Yt(s, 19), u = function (t) {
                    return t ^ Yt(t, 9) ^ Yt(t, 17)
                }(u)]
        }
        var Xt = class {
            constructor() {
                this.digest = new Array(8),
                    this.nblocks = 0,
                    this.block = new Array(64),
                    this.num = 0
            }
            init() {
                this.digest[0] = 1937774191,
                    this.digest[1] = 1226093241,
                    this.digest[2] = 388252375,
                    this.digest[3] = 3666478592,
                    this.digest[4] = 2842636476,
                    this.digest[5] = 372324522,
                    this.digest[6] = 3817729613,
                    this.digest[7] = 2969243214;
                for (let t = 0; t < 64; t++) this.block[t] = 0;
                this.nblocks = 0,
                    this.num = 0
            }
            SM3Compress(t) {
                let e = 0,
                    r = new Array(4),
                    i = this.digest[0],
                    n = this.digest[1],
                    o = this.digest[2],
                    s = this.digest[3],
                    h = this.digest[4],
                    u = this.digest[5],
                    a = this.digest[6],
                    f = this.digest[7];
                const l = new Array(16);
                for (let e = 0; e + 3 < 64; e += 4) l[e / 4] = (t[e] << 24) + (t[e + 1] << 16) + (t[e + 2] << 8) + t[e + 3];
                for (e = 0; e < 4; e++) Lt[e] = l[e];
                for (e = 0; e <= 8; e += 4) Lt[e + 4] = l[e + 4],
                    r = Kt(e, i, n, o, s, h, u, a, f),
                    n = r[0],
                    s = r[1],
                    u = r[2],
                    f = r[3],
                    Lt[e + 5] = l[e + 5],
                    r = Kt(e + 1, s, i, n, o, f, h, u, a),
                    i = r[0],
                    o = r[1],
                    h = r[2],
                    a = r[3],
                    Lt[e + 6] = l[e + 6],
                    r = Kt(e + 2, o, s, i, n, a, f, h, u),
                    s = r[0],
                    n = r[1],
                    f = r[2],
                    u = r[3],
                    Lt[e + 7] = l[e + 7],
                    r = Kt(e + 3, n, o, s, i, u, a, f, h),
                    o = r[0],
                    i = r[1],
                    a = r[2],
                    h = r[3];
                for (e = 12; e <= 60; e += 4) Lt[e + 4] = zt(Lt[e - 12] ^ Lt[e - 5] ^ Yt(Lt[e + 1], 15)) ^ Yt(Lt[e - 9], 7) ^ Lt[e - 2],
                    r = Kt(e, i, n, o, s, h, u, a, f),
                    n = r[0],
                    s = r[1],
                    u = r[2],
                    f = r[3],
                    Lt[e + 5] = zt(Lt[e - 11] ^ Lt[e - 4] ^ Yt(Lt[e + 2], 15)) ^ Yt(Lt[e - 8], 7) ^ Lt[e - 1],
                    r = Kt(e + 1, s, i, n, o, f, h, u, a),
                    i = r[0],
                    o = r[1],
                    h = r[2],
                    a = r[3],
                    Lt[e + 6] = zt(Lt[e - 10] ^ Lt[e - 3] ^ Yt(Lt[e + 3], 15)) ^ Yt(Lt[e - 7], 7) ^ Lt[e],
                    r = Kt(e + 2, o, s, i, n, a, f, h, u),
                    s = r[0],
                    n = r[1],
                    f = r[2],
                    u = r[3],
                    Lt[e + 7] = zt(Lt[e - 9] ^ Lt[e - 2] ^ Yt(Lt[e + 4], 15)) ^ Yt(Lt[e - 6], 7) ^ Lt[e + 1],
                    r = Kt(e + 3, n, o, s, i, u, a, f, h),
                    o = r[0],
                    i = r[1],
                    a = r[2],
                    h = r[3];
                this.digest[0] ^= i,
                    this.digest[1] ^= n,
                    this.digest[2] ^= o,
                    this.digest[3] ^= s,
                    this.digest[4] ^= h,
                    this.digest[5] ^= u,
                    this.digest[6] ^= a,
                    this.digest[7] ^= f;
                for (let t = 0; t < 8; t++) this.digest[t] = this.digest[t] >>> 0
            }
            update(t) {
                let e = t.length;
                for (let r = 0; r < e; r++) t[r] = (t[r] >>> 0) % 256;
                if (this.num) {
                    const r = qt - this.num;
                    if (e < r) {
                        for (let r = 0; r < e; r++) this.block[this.num + r] = t[r];
                        return void (this.num += e)
                    }
                    for (let e = 0; e < r; e++) this.block[this.num + e] = t[e];
                    this.SM3Compress(this.block),
                        this.nblocks++,
                        t = t.slice(r),
                        e -= r
                }
                for (; e >= qt;) this.SM3Compress(t),
                    this.nblocks++,
                    t = t.slice(qt),
                    e -= qt;
                if (this.num = e, e) for (let r = 0; r < e; r++) this.block[r] = t[r]
            }
            final() {
                if (this.block[this.num] = 128, this.num + 9 <= qt) for (let t = 0; t < qt - this.num - 9; t++) this.block[this.num + 1 + t] = 0;
                else {
                    for (let t = 0; t < qt - this.num - 1; t++) this.block[this.num + 1 + t] = 0;
                    this.SM3Compress(this.block);
                    for (let t = 0; t < 56; t++) this.block[t] = 0
                }
                const t = this.nblocks >>> 23,
                    e = (this.nblocks << 9) + (this.num << 3);
                this.block[56] = (t >>> 24) % 256,
                    this.block[57] = (t >>> 16) % 256,
                    this.block[58] = (t >>> 8) % 256,
                    this.block[59] = (t >>> 0) % 256,
                    this.block[60] = (e >>> 24) % 256,
                    this.block[61] = (e >>> 16) % 256,
                    this.block[62] = (e >>> 8) % 256,
                    this.block[63] = (e >>> 0) % 256;
                const r = new Array(32);
                this.SM3Compress(this.block);
                for (let t = 0; t < 8; t++) r[4 * t] = (this.digest[t] >>> 24) % 256,
                    r[4 * t + 1] = (this.digest[t] >>> 16) % 256,
                    r[4 * t + 2] = (this.digest[t] >>> 8) % 256,
                    r[4 * t + 3] = (this.digest[t] >>> 0) % 256;
                return r
            }
            hashForBinaryArray(t) {
                this.init(),
                    this.update(t);
                const e = this.final();
                return It.byteArrayToHex(e)
            }
            hashForUTF8String(t) {
                const e = It.stringToByteArrayInUtf8(t);
                return this.hashForBinaryArray(e)
            }
        };
        var Zt = {
            normalize: function (t) {
                let e = [...t];
                if (e.length > 32) e = e.slice(e.length - 32, e.length);
                else if (e.length < 32) for (let t = 0; t < 32 - e.length; t++) e.unshift(0);
                return e
            },
            leftPad: function (t, e) {
                return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
            }
        };
        const Vt = new bt(),
            Ht = new Xt();
        function Gt(t, e) {
            const r = new Array(2 + t.length + 192),
                i = 8 * t.length;
            r[0] = i >> 8 & 255,
                r[1] = 255 & i;
            for (let e = 0; e < t.length; e++) r[2 + e] = t[e];
            let n = 2 + t.length;
            const o = Zt.normalize(Vt.a.toByteArray());
            for (let t = 0; t < o.length; t++) r[n + t] = (o[t] >>> 0) % 256;
            n += o.length;
            const s = Zt.normalize(Vt.b.toByteArray());
            for (let t = 0; t < s.length; t++) r[n + t] = (s[t] >>> 0) % 256;
            n += s.length;
            const h = Zt.normalize(Vt.Gx.toByteArray());
            for (let t = 0; t < h.length; t++) r[n + t] = (h[t] >>> 0) % 256;
            n += h.length;
            const u = Zt.normalize(Vt.Gy.toByteArray());
            for (let t = 0; t < u.length; t++) r[n + t] = (u[t] >>> 0) % 256;
            n += u.length;
            const a = Zt.normalize(e.X.toByteArray());
            for (let t = 0; t < a.length; t++) r[n + t] = (a[t] >>> 0) % 256;
            n += a.length;
            const f = Zt.normalize(e.Y.toByteArray());
            for (let t = 0; t < f.length; t++) r[n + t] = (f[t] >>> 0) % 256;
            return n += f.length,
                Ht.init(),
                Ht.update(r),
                Ht.final()
        }
        var Jt = {
            SM2MessageDigest: function (t, e, r) {
                const i = Gt(e, r);
                return Ht.init(),
                    Ht.update(i),
                    Ht.update(t),
                    Ht.final()
            },
            SM2GetZ: Gt,
            kdf: function (t, e) {
                if (e > 137438953440) return - 1;
                if (t.length > 1024) return - 1;
                let r,
                    i = 1,
                    n = e;
                const o = [];
                let s = 0;
                for (t.push((i >>> 24) % 256), t.push((i >>> 16) % 256), t.push((i >>> 8) % 256), t.push((i >>> 0) % 256); n > 0;) {
                    if (Ht.init(), Ht.update(t), r = Ht.final(), n <= 32) for (let t = 0; t < n; t++) o[s + t] = r[t];
                    else {
                        const t = e >= 32 ? 32 : e;
                        for (let e = 0; e < t; e++) o[s + e] = r[e]
                    }
                    n -= 32,
                        s += 32,
                        i++,
                        t[t.length - 4] = (i >>> 24) % 256,
                        t[t.length - 3] = (i >>> 16) % 256,
                        t[t.length - 2] = (i >>> 8) % 256,
                        t[t.length - 1] = (i >>> 0) % 256
                }
                return o
            }
        };
        const {
            BigInteger: $t
        } = vt;
        var Qt = class {
            constructor() {
                this.curve = new bt(),
                    this.G = new Tt("32C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7", "BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0"),
                    this.zero = new $t("0"),
                    this.one = new $t("1"),
                    this.two = new $t("2"),
                    this.three = new $t("3")
            }
            GetSlopeEqual(t) {
                const e = t.X.square().mod(this.curve.p).multiply(this.three).add(this.curve.a).mod(this.curve.p),
                    r = t.Y.multiply(this.two).modInverse(this.curve.p).mod(this.curve.p);
                return e.multiply(r).mod(this.curve.p)
            }
            GetSlopeOther(t, e) {
                const r = t.Y.negate().add(e.Y),
                    i = t.X.negate().add(e.X).mod(this.curve.p).modInverse(this.curve.p);
                return r.multiply(i).mod(this.curve.p)
            }
            CalculateXr(t, e, r) {
                return t.square().mod(this.curve.p).add(e.X.negate()).add(r.X.negate()).mod(this.curve.p)
            }
            CalculateYr(t, e, r) {
                return r.X.add(e.negate()).multiply(t).mod(this.curve.p).add(r.Y.negate()).mod(this.curve.p)
            }
            ECPointAdd(t, e) {
                const r = e.Y.negate().mod(this.curve.p);
                if (t.X.equals(this.zero) && t.Y.equals(this.zero)) return e;
                if (e.X.equals(this.zero) && e.Y.equals(this.zero)) return t;
                if (t.X.equals(e.X) && t.Y.equals(r)) return new Tt("0", "0");
                let i;
                i = t.X.equals(e.X) && t.Y.equals(e.Y) ? this.GetSlopeEqual(t) : this.GetSlopeOther(t, e);
                const n = this.CalculateXr(i, t, e),
                    o = this.CalculateYr(i, n, t);
                return new Tt(n, o)
            }
            ECPointDoubling(t) {
                if (t.X.equals(this.zero) && t.Y.equals(this.zero)) return t;
                const e = this.GetSlopeEqual(t),
                    r = e.square().mod(this.curve.p).add(t.X.negate()).add(t.X.negate()).mod(this.curve.p),
                    i = t.X.add(r.negate()).multiply(e).mod(this.curve.p).add(t.Y.negate()).mod(this.curve.p);
                return new Tt(r, i)
            }
            ECPointMultiply(t, e) {
                if (e.equals(this.one)) return t;
                const r = e.divide(this.two);
                let i = this.ECPointMultiply(t, r);
                i = this.ECPointDoubling(i);
                return 0 != e.modInt(2) && (i = this.ECPointAdd(i, t)),
                    i
            }
            ECPointMultiplyG(t) {
                if (t.equals(this.one)) return this.G;
                const e = t.divide(this.two);
                let r = this.ECPointMultiplyG(e);
                r = this.ECPointDoubling(r);
                return 0 != t.modInt(2) && (r = this.ECPointAdd(r, this.G)),
                    r
            }
            ECPointIsOnCurve(t) {
                const e = t.Y.multiply(t.Y).mod(this.curve.p),
                    r = t.X.multiply(t.X).multiply(t.X).add(t.X.multiply(this.curve.a)).add(this.curve.b).mod(this.curve.p);
                return e.equals(r)
            }
        },
            Wt = yt(dt),
            te = gt((function (t) {
                !
                    function (t, e) {
                        function r(t, e) {
                            if (!t) throw new Error(e || "Assertion failed")
                        }
                        function i(t, e) {
                            t.super_ = e;
                            var r = function () { };
                            r.prototype = e.prototype,
                                t.prototype = new r(),
                                t.prototype.constructor = t
                        }
                        function n(t, e, r) {
                            if (n.isBN(t)) return t;
                            this.negative = 0,
                                this.words = null,
                                this.length = 0,
                                this.red = null,
                                null !== t && ("le" !== e && "be" !== e || (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                        }
                        var o;
                        "object" == typeof t ? t.exports = n : e.BN = n,
                            n.BN = n,
                            n.wordSize = 26;
                        try {
                            o = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : Wt.Buffer
                        } catch (t) { }
                        function s(t, e) {
                            var r = t.charCodeAt(e);
                            return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15
                        }
                        function h(t, e, r) {
                            var i = s(t, r);
                            return r - 1 >= e && (i |= s(t, r - 1) << 4),
                                i
                        }
                        function u(t, e, r, i) {
                            for (var n = 0,
                                o = Math.min(t.length, r), s = e; s < o; s++) {
                                var h = t.charCodeAt(s) - 48;
                                n *= i,
                                    n += h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h
                            }
                            return n
                        }
                        n.isBN = function (t) {
                            return t instanceof n || null !== t && "object" == typeof t && t.constructor.wordSize === n.wordSize && Array.isArray(t.words)
                        },
                            n.max = function (t, e) {
                                return t.cmp(e) > 0 ? t : e
                            },
                            n.min = function (t, e) {
                                return t.cmp(e) < 0 ? t : e
                            },
                            n.prototype._init = function (t, e, i) {
                                if ("number" == typeof t) return this._initNumber(t, e, i);
                                if ("object" == typeof t) return this._initArray(t, e, i);
                                "hex" === e && (e = 16),
                                    r(e === (0 | e) && e >= 2 && e <= 36);
                                var n = 0;
                                "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1),
                                    n < t.length && (16 === e ? this._parseHex(t, n, i) : (this._parseBase(t, e, n), "le" === i && this._initArray(this.toArray(), e, i)))
                            },
                            n.prototype._initNumber = function (t, e, i) {
                                t < 0 && (this.negative = 1, t = -t),
                                    t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (r(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3),
                                    "le" === i && this._initArray(this.toArray(), e, i)
                            },
                            n.prototype._initArray = function (t, e, i) {
                                if (r("number" == typeof t.length), t.length <= 0) return this.words = [0],
                                    this.length = 1,
                                    this;
                                this.length = Math.ceil(t.length / 3),
                                    this.words = new Array(this.length);
                                for (var n = 0; n < this.length; n++) this.words[n] = 0;
                                var o, s, h = 0;
                                if ("be" === i) for (n = t.length - 1, o = 0; n >= 0; n -= 3) s = t[n] | t[n - 1] << 8 | t[n - 2] << 16,
                                    this.words[o] |= s << h & 67108863,
                                    this.words[o + 1] = s >>> 26 - h & 67108863,
                                    (h += 24) >= 26 && (h -= 26, o++);
                                else if ("le" === i) for (n = 0, o = 0; n < t.length; n += 3) s = t[n] | t[n + 1] << 8 | t[n + 2] << 16,
                                    this.words[o] |= s << h & 67108863,
                                    this.words[o + 1] = s >>> 26 - h & 67108863,
                                    (h += 24) >= 26 && (h -= 26, o++);
                                return this.strip()
                            },
                            n.prototype._parseHex = function (t, e, r) {
                                this.length = Math.ceil((t.length - e) / 6),
                                    this.words = new Array(this.length);
                                for (var i = 0; i < this.length; i++) this.words[i] = 0;
                                var n, o = 0,
                                    s = 0;
                                if ("be" === r) for (i = t.length - 1; i >= e; i -= 2) n = h(t, e, i) << o,
                                    this.words[s] |= 67108863 & n,
                                    o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                                else for (i = (t.length - e) % 2 == 0 ? e + 1 : e; i < t.length; i += 2) n = h(t, e, i) << o,
                                    this.words[s] |= 67108863 & n,
                                    o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                                this.strip()
                            },
                            n.prototype._parseBase = function (t, e, r) {
                                this.words = [0],
                                    this.length = 1;
                                for (var i = 0,
                                    n = 1; n <= 67108863; n *= e) i++;
                                i--,
                                    n = n / e | 0;
                                for (var o = t.length - r,
                                    s = o % i,
                                    h = Math.min(o, o - s) + r, a = 0, f = r; f < h; f += i) a = u(t, f, f + i, e),
                                        this.imuln(n),
                                        this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
                                if (0 !== s) {
                                    var l = 1;
                                    for (a = u(t, f, t.length, e), f = 0; f < s; f++) l *= e;
                                    this.imuln(l),
                                        this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a)
                                }
                                this.strip()
                            },
                            n.prototype.copy = function (t) {
                                t.words = new Array(this.length);
                                for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                                t.length = this.length,
                                    t.negative = this.negative,
                                    t.red = this.red
                            },
                            n.prototype.clone = function () {
                                var t = new n(null);
                                return this.copy(t),
                                    t
                            },
                            n.prototype._expand = function (t) {
                                for (; this.length < t;) this.words[this.length++] = 0;
                                return this
                            },
                            n.prototype.strip = function () {
                                for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                                return this._normSign()
                            },
                            n.prototype._normSign = function () {
                                return 1 === this.length && 0 === this.words[0] && (this.negative = 0),
                                    this
                            },
                            n.prototype.inspect = function () {
                                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                            };
                        var a = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                            f = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                            l = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                        function c(t, e, r) {
                            r.negative = e.negative ^ t.negative;
                            var i = t.length + e.length | 0;
                            r.length = i,
                                i = i - 1 | 0;
                            var n = 0 | t.words[0],
                                o = 0 | e.words[0],
                                s = n * o,
                                h = 67108863 & s,
                                u = s / 67108864 | 0;
                            r.words[0] = h;
                            for (var a = 1; a < i; a++) {
                                for (var f = u >>> 26,
                                    l = 67108863 & u,
                                    c = Math.min(a, e.length - 1), p = Math.max(0, a - t.length + 1); p <= c; p++) {
                                    var d = a - p | 0;
                                    f += (s = (n = 0 | t.words[d]) * (o = 0 | e.words[p]) + l) / 67108864 | 0,
                                        l = 67108863 & s
                                }
                                r.words[a] = 0 | l,
                                    u = 0 | f
                            }
                            return 0 !== u ? r.words[a] = 0 | u : r.length--,
                                r.strip()
                        }
                        n.prototype.toString = function (t, e) {
                            var i;
                            if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                                i = "";
                                for (var n = 0,
                                    o = 0,
                                    s = 0; s < this.length; s++) {
                                    var h = this.words[s],
                                        u = (16777215 & (h << n | o)).toString(16);
                                    i = 0 !== (o = h >>> 24 - n & 16777215) || s !== this.length - 1 ? a[6 - u.length] + u + i : u + i,
                                        (n += 2) >= 26 && (n -= 26, s--)
                                }
                                for (0 !== o && (i = o.toString(16) + i); i.length % e != 0;) i = "0" + i;
                                return 0 !== this.negative && (i = "-" + i),
                                    i
                            }
                            if (t === (0 | t) && t >= 2 && t <= 36) {
                                var c = f[t],
                                    p = l[t];
                                i = "";
                                var d = this.clone();
                                for (d.negative = 0; !d.isZero();) {
                                    var m = d.modn(p).toString(t);
                                    i = (d = d.idivn(p)).isZero() ? m + i : a[c - m.length] + m + i
                                }
                                for (this.isZero() && (i = "0" + i); i.length % e != 0;) i = "0" + i;
                                return 0 !== this.negative && (i = "-" + i),
                                    i
                            }
                            r(!1, "Base should be between 2 and 36")
                        },
                            n.prototype.toNumber = function () {
                                var t = this.words[0];
                                return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"),
                                    0 !== this.negative ? -t : t
                            },
                            n.prototype.toJSON = function () {
                                return this.toString(16)
                            },
                            n.prototype.toBuffer = function (t, e) {
                                return r(void 0 !== o),
                                    this.toArrayLike(o, t, e)
                            },
                            n.prototype.toArray = function (t, e) {
                                return this.toArrayLike(Array, t, e)
                            },
                            n.prototype.toArrayLike = function (t, e, i) {
                                var n = this.byteLength(),
                                    o = i || Math.max(1, n);
                                r(n <= o, "byte array longer than desired length"),
                                    r(o > 0, "Requested array length <= 0"),
                                    this.strip();
                                var s, h, u = "le" === e,
                                    a = new t(o),
                                    f = this.clone();
                                if (u) {
                                    for (h = 0; !f.isZero(); h++) s = f.andln(255),
                                        f.iushrn(8),
                                        a[h] = s;
                                    for (; h < o; h++) a[h] = 0
                                } else {
                                    for (h = 0; h < o - n; h++) a[h] = 0;
                                    for (h = 0; !f.isZero(); h++) s = f.andln(255),
                                        f.iushrn(8),
                                        a[o - h - 1] = s
                                }
                                return a
                            },
                            Math.clz32 ? n.prototype._countBits = function (t) {
                                return 32 - Math.clz32(t)
                            } : n.prototype._countBits = function (t) {
                                var e = t,
                                    r = 0;
                                return e >= 4096 && (r += 13, e >>>= 13),
                                    e >= 64 && (r += 7, e >>>= 7),
                                    e >= 8 && (r += 4, e >>>= 4),
                                    e >= 2 && (r += 2, e >>>= 2),
                                    r + e
                            },
                            n.prototype._zeroBits = function (t) {
                                if (0 === t) return 26;
                                var e = t,
                                    r = 0;
                                return 0 == (8191 & e) && (r += 13, e >>>= 13),
                                    0 == (127 & e) && (r += 7, e >>>= 7),
                                    0 == (15 & e) && (r += 4, e >>>= 4),
                                    0 == (3 & e) && (r += 2, e >>>= 2),
                                    0 == (1 & e) && r++,
                                    r
                            },
                            n.prototype.bitLength = function () {
                                var t = this.words[this.length - 1],
                                    e = this._countBits(t);
                                return 26 * (this.length - 1) + e
                            },
                            n.prototype.zeroBits = function () {
                                if (this.isZero()) return 0;
                                for (var t = 0,
                                    e = 0; e < this.length; e++) {
                                    var r = this._zeroBits(this.words[e]);
                                    if (t += r, 26 !== r) break
                                }
                                return t
                            },
                            n.prototype.byteLength = function () {
                                return Math.ceil(this.bitLength() / 8)
                            },
                            n.prototype.toTwos = function (t) {
                                return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                            },
                            n.prototype.fromTwos = function (t) {
                                return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                            },
                            n.prototype.isNeg = function () {
                                return 0 !== this.negative
                            },
                            n.prototype.neg = function () {
                                return this.clone().ineg()
                            },
                            n.prototype.ineg = function () {
                                return this.isZero() || (this.negative ^= 1),
                                    this
                            },
                            n.prototype.iuor = function (t) {
                                for (; this.length < t.length;) this.words[this.length++] = 0;
                                for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                                return this.strip()
                            },
                            n.prototype.ior = function (t) {
                                return r(0 == (this.negative | t.negative)),
                                    this.iuor(t)
                            },
                            n.prototype.or = function (t) {
                                return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                            },
                            n.prototype.uor = function (t) {
                                return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                            },
                            n.prototype.iuand = function (t) {
                                var e;
                                e = this.length > t.length ? t : this;
                                for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                                return this.length = e.length,
                                    this.strip()
                            },
                            n.prototype.iand = function (t) {
                                return r(0 == (this.negative | t.negative)),
                                    this.iuand(t)
                            },
                            n.prototype.and = function (t) {
                                return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                            },
                            n.prototype.uand = function (t) {
                                return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                            },
                            n.prototype.iuxor = function (t) {
                                var e, r;
                                this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                                for (var i = 0; i < r.length; i++) this.words[i] = e.words[i] ^ r.words[i];
                                if (this !== e) for (; i < e.length; i++) this.words[i] = e.words[i];
                                return this.length = e.length,
                                    this.strip()
                            },
                            n.prototype.ixor = function (t) {
                                return r(0 == (this.negative | t.negative)),
                                    this.iuxor(t)
                            },
                            n.prototype.xor = function (t) {
                                return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                            },
                            n.prototype.uxor = function (t) {
                                return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                            },
                            n.prototype.inotn = function (t) {
                                r("number" == typeof t && t >= 0);
                                var e = 0 | Math.ceil(t / 26),
                                    i = t % 26;
                                this._expand(e),
                                    i > 0 && e--;
                                for (var n = 0; n < e; n++) this.words[n] = 67108863 & ~this.words[n];
                                return i > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - i),
                                    this.strip()
                            },
                            n.prototype.notn = function (t) {
                                return this.clone().inotn(t)
                            },
                            n.prototype.setn = function (t, e) {
                                r("number" == typeof t && t >= 0);
                                var i = t / 26 | 0,
                                    n = t % 26;
                                return this._expand(i + 1),
                                    this.words[i] = e ? this.words[i] | 1 << n : this.words[i] & ~(1 << n),
                                    this.strip()
                            },
                            n.prototype.iadd = function (t) {
                                var e, r, i;
                                if (0 !== this.negative && 0 === t.negative) return this.negative = 0,
                                    e = this.isub(t),
                                    this.negative ^= 1,
                                    this._normSign();
                                if (0 === this.negative && 0 !== t.negative) return t.negative = 0,
                                    e = this.isub(t),
                                    t.negative = 1,
                                    e._normSign();
                                this.length > t.length ? (r = this, i = t) : (r = t, i = this);
                                for (var n = 0,
                                    o = 0; o < i.length; o++) e = (0 | r.words[o]) + (0 | i.words[o]) + n,
                                        this.words[o] = 67108863 & e,
                                        n = e >>> 26;
                                for (; 0 !== n && o < r.length; o++) e = (0 | r.words[o]) + n,
                                    this.words[o] = 67108863 & e,
                                    n = e >>> 26;
                                if (this.length = r.length, 0 !== n) this.words[this.length] = n,
                                    this.length++;
                                else if (r !== this) for (; o < r.length; o++) this.words[o] = r.words[o];
                                return this
                            },
                            n.prototype.add = function (t) {
                                var e;
                                return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                            },
                            n.prototype.isub = function (t) {
                                if (0 !== t.negative) {
                                    t.negative = 0;
                                    var e = this.iadd(t);
                                    return t.negative = 1,
                                        e._normSign()
                                }
                                if (0 !== this.negative) return this.negative = 0,
                                    this.iadd(t),
                                    this.negative = 1,
                                    this._normSign();
                                var r, i, n = this.cmp(t);
                                if (0 === n) return this.negative = 0,
                                    this.length = 1,
                                    this.words[0] = 0,
                                    this;
                                n > 0 ? (r = this, i = t) : (r = t, i = this);
                                for (var o = 0,
                                    s = 0; s < i.length; s++) o = (e = (0 | r.words[s]) - (0 | i.words[s]) + o) >> 26,
                                        this.words[s] = 67108863 & e;
                                for (; 0 !== o && s < r.length; s++) o = (e = (0 | r.words[s]) + o) >> 26,
                                    this.words[s] = 67108863 & e;
                                if (0 === o && s < r.length && r !== this) for (; s < r.length; s++) this.words[s] = r.words[s];
                                return this.length = Math.max(this.length, s),
                                    r !== this && (this.negative = 1),
                                    this.strip()
                            },
                            n.prototype.sub = function (t) {
                                return this.clone().isub(t)
                            };
                        var p = function (t, e, r) {
                            var i, n, o, s = t.words,
                                h = e.words,
                                u = r.words,
                                a = 0,
                                f = 0 | s[0],
                                l = 8191 & f,
                                c = f >>> 13,
                                p = 0 | s[1],
                                d = 8191 & p,
                                m = p >>> 13,
                                y = 0 | s[2],
                                g = 8191 & y,
                                v = y >>> 13,
                                w = 0 | s[3],
                                b = 8191 & w,
                                M = w >>> 13,
                                T = 0 | s[4],
                                _ = 8191 & T,
                                E = T >>> 13,
                                A = 0 | s[5],
                                S = 8191 & A,
                                B = A >>> 13,
                                k = 0 | s[6],
                                R = 8191 & k,
                                F = k >>> 13,
                                C = 0 | s[7],
                                D = 8191 & C,
                                O = C >>> 13,
                                x = 0 | s[8],
                                P = 8191 & x,
                                j = x >>> 13,
                                U = 0 | s[9],
                                I = 8191 & U,
                                N = U >>> 13,
                                q = 0 | h[0],
                                L = 8191 & q,
                                Y = q >>> 13,
                                z = 0 | h[1],
                                K = 8191 & z,
                                X = z >>> 13,
                                Z = 0 | h[2],
                                V = 8191 & Z,
                                H = Z >>> 13,
                                G = 0 | h[3],
                                J = 8191 & G,
                                $ = G >>> 13,
                                Q = 0 | h[4],
                                W = 8191 & Q,
                                tt = Q >>> 13,
                                et = 0 | h[5],
                                rt = 8191 & et,
                                it = et >>> 13,
                                nt = 0 | h[6],
                                ot = 8191 & nt,
                                st = nt >>> 13,
                                ht = 0 | h[7],
                                ut = 8191 & ht,
                                at = ht >>> 13,
                                ft = 0 | h[8],
                                lt = 8191 & ft,
                                ct = ft >>> 13,
                                pt = 0 | h[9],
                                dt = 8191 & pt,
                                mt = pt >>> 13;
                            r.negative = t.negative ^ e.negative,
                                r.length = 19;
                            var yt = (a + (i = Math.imul(l, L)) | 0) + ((8191 & (n = (n = Math.imul(l, Y)) + Math.imul(c, L) | 0)) << 13) | 0;
                            a = ((o = Math.imul(c, Y)) + (n >>> 13) | 0) + (yt >>> 26) | 0,
                                yt &= 67108863,
                                i = Math.imul(d, L),
                                n = (n = Math.imul(d, Y)) + Math.imul(m, L) | 0,
                                o = Math.imul(m, Y);
                            var gt = (a + (i = i + Math.imul(l, K) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, X) | 0) + Math.imul(c, K) | 0)) << 13) | 0;
                            a = ((o = o + Math.imul(c, X) | 0) + (n >>> 13) | 0) + (gt >>> 26) | 0,
                                gt &= 67108863,
                                i = Math.imul(g, L),
                                n = (n = Math.imul(g, Y)) + Math.imul(v, L) | 0,
                                o = Math.imul(v, Y),
                                i = i + Math.imul(d, K) | 0,
                                n = (n = n + Math.imul(d, X) | 0) + Math.imul(m, K) | 0,
                                o = o + Math.imul(m, X) | 0;
                            var vt = (a + (i = i + Math.imul(l, V) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, H) | 0) + Math.imul(c, V) | 0)) << 13) | 0;
                            a = ((o = o + Math.imul(c, H) | 0) + (n >>> 13) | 0) + (vt >>> 26) | 0,
                                vt &= 67108863,
                                i = Math.imul(b, L),
                                n = (n = Math.imul(b, Y)) + Math.imul(M, L) | 0,
                                o = Math.imul(M, Y),
                                i = i + Math.imul(g, K) | 0,
                                n = (n = n + Math.imul(g, X) | 0) + Math.imul(v, K) | 0,
                                o = o + Math.imul(v, X) | 0,
                                i = i + Math.imul(d, V) | 0,
                                n = (n = n + Math.imul(d, H) | 0) + Math.imul(m, V) | 0,
                                o = o + Math.imul(m, H) | 0;
                            var wt = (a + (i = i + Math.imul(l, J) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, $) | 0) + Math.imul(c, J) | 0)) << 13) | 0;
                            a = ((o = o + Math.imul(c, $) | 0) + (n >>> 13) | 0) + (wt >>> 26) | 0,
                                wt &= 67108863,
                                i = Math.imul(_, L),
                                n = (n = Math.imul(_, Y)) + Math.imul(E, L) | 0,
                                o = Math.imul(E, Y),
                                i = i + Math.imul(b, K) | 0,
                                n = (n = n + Math.imul(b, X) | 0) + Math.imul(M, K) | 0,
                                o = o + Math.imul(M, X) | 0,
                                i = i + Math.imul(g, V) | 0,
                                n = (n = n + Math.imul(g, H) | 0) + Math.imul(v, V) | 0,
                                o = o + Math.imul(v, H) | 0,
                                i = i + Math.imul(d, J) | 0,
                                n = (n = n + Math.imul(d, $) | 0) + Math.imul(m, J) | 0,
                                o = o + Math.imul(m, $) | 0;
                            var bt = (a + (i = i + Math.imul(l, W) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, tt) | 0) + Math.imul(c, W) | 0)) << 13) | 0;
                            a = ((o = o + Math.imul(c, tt) | 0) + (n >>> 13) | 0) + (bt >>> 26) | 0,
                                bt &= 67108863,
                                i = Math.imul(S, L),
                                n = (n = Math.imul(S, Y)) + Math.imul(B, L) | 0,
                                o = Math.imul(B, Y),
                                i = i + Math.imul(_, K) | 0,
                                n = (n = n + Math.imul(_, X) | 0) + Math.imul(E, K) | 0,
                                o = o + Math.imul(E, X) | 0,
                                i = i + Math.imul(b, V) | 0,
                                n = (n = n + Math.imul(b, H) | 0) + Math.imul(M, V) | 0,
                                o = o + Math.imul(M, H) | 0,
                                i = i + Math.imul(g, J) | 0,
                                n = (n = n + Math.imul(g, $) | 0) + Math.imul(v, J) | 0,
                                o = o + Math.imul(v, $) | 0,
                                i = i + Math.imul(d, W) | 0,
                                n = (n = n + Math.imul(d, tt) | 0) + Math.imul(m, W) | 0,
                                o = o + Math.imul(m, tt) | 0;
                            var Mt = (a + (i = i + Math.imul(l, rt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, it) | 0) + Math.imul(c, rt) | 0)) << 13) | 0;
                            a = ((o = o + Math.imul(c, it) | 0) + (n >>> 13) | 0) + (Mt >>> 26) | 0,
                                Mt &= 67108863,
                                i = Math.imul(R, L),
                                n = (n = Math.imul(R, Y)) + Math.imul(F, L) | 0,
                                o = Math.imul(F, Y),
                                i = i + Math.imul(S, K) | 0,
                                n = (n = n + Math.imul(S, X) | 0) + Math.imul(B, K) | 0,
                                o = o + Math.imul(B, X) | 0,
                                i = i + Math.imul(_, V) | 0,
                                n = (n = n + Math.imul(_, H) | 0) + Math.imul(E, V) | 0,
                                o = o + Math.imul(E, H) | 0,
                                i = i + Math.imul(b, J) | 0,
                                n = (n = n + Math.imul(b, $) | 0) + Math.imul(M, J) | 0,
                                o = o + Math.imul(M, $) | 0,
                                i = i + Math.imul(g, W) | 0,
                                n = (n = n + Math.imul(g, tt) | 0) + Math.imul(v, W) | 0,
                                o = o + Math.imul(v, tt) | 0,
                                i = i + Math.imul(d, rt) | 0,
                                n = (n = n + Math.imul(d, it) | 0) + Math.imul(m, rt) | 0,
                                o = o + Math.imul(m, it) | 0;
                            var Tt = (a + (i = i + Math.imul(l, ot) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, st) | 0) + Math.imul(c, ot) | 0)) << 13) | 0;
                            a = ((o = o + Math.imul(c, st) | 0) + (n >>> 13) | 0) + (Tt >>> 26) | 0,
                                Tt &= 67108863,
                                i = Math.imul(D, L),
                                n = (n = Math.imul(D, Y)) + Math.imul(O, L) | 0,
                                o = Math.imul(O, Y),
                                i = i + Math.imul(R, K) | 0,
                                n = (n = n + Math.imul(R, X) | 0) + Math.imul(F, K) | 0,
                                o = o + Math.imul(F, X) | 0,
                                i = i + Math.imul(S, V) | 0,
                                n = (n = n + Math.imul(S, H) | 0) + Math.imul(B, V) | 0,
                                o = o + Math.imul(B, H) | 0,
                                i = i + Math.imul(_, J) | 0,
                                n = (n = n + Math.imul(_, $) | 0) + Math.imul(E, J) | 0,
                                o = o + Math.imul(E, $) | 0,
                                i = i + Math.imul(b, W) | 0,
                                n = (n = n + Math.imul(b, tt) | 0) + Math.imul(M, W) | 0,
                                o = o + Math.imul(M, tt) | 0,
                                i = i + Math.imul(g, rt) | 0,
                                n = (n = n + Math.imul(g, it) | 0) + Math.imul(v, rt) | 0,
                                o = o + Math.imul(v, it) | 0,
                                i = i + Math.imul(d, ot) | 0,
                                n = (n = n + Math.imul(d, st) | 0) + Math.imul(m, ot) | 0,
                                o = o + Math.imul(m, st) | 0;
                            var _t = (a + (i = i + Math.imul(l, ut) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, at) | 0) + Math.imul(c, ut) | 0)) << 13) | 0;
                            a = ((o = o + Math.imul(c, at) | 0) + (n >>> 13) | 0) + (_t >>> 26) | 0,
                                _t &= 67108863,
                                i = Math.imul(P, L),
                                n = (n = Math.imul(P, Y)) + Math.imul(j, L) | 0,
                                o = Math.imul(j, Y),
                                i = i + Math.imul(D, K) | 0,
                                n = (n = n + Math.imul(D, X) | 0) + Math.imul(O, K) | 0,
                                o = o + Math.imul(O, X) | 0,
                                i = i + Math.imul(R, V) | 0,
                                n = (n = n + Math.imul(R, H) | 0) + Math.imul(F, V) | 0,
                                o = o + Math.imul(F, H) | 0,
                                i = i + Math.imul(S, J) | 0,
                                n = (n = n + Math.imul(S, $) | 0) + Math.imul(B, J) | 0,
                                o = o + Math.imul(B, $) | 0,
                                i = i + Math.imul(_, W) | 0,
                                n = (n = n + Math.imul(_, tt) | 0) + Math.imul(E, W) | 0,
                                o = o + Math.imul(E, tt) | 0,
                                i = i + Math.imul(b, rt) | 0,
                                n = (n = n + Math.imul(b, it) | 0) + Math.imul(M, rt) | 0,
                                o = o + Math.imul(M, it) | 0,
                                i = i + Math.imul(g, ot) | 0,
                                n = (n = n + Math.imul(g, st) | 0) + Math.imul(v, ot) | 0,
                                o = o + Math.imul(v, st) | 0,
                                i = i + Math.imul(d, ut) | 0,
                                n = (n = n + Math.imul(d, at) | 0) + Math.imul(m, ut) | 0,
                                o = o + Math.imul(m, at) | 0;
                            var Et = (a + (i = i + Math.imul(l, lt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, ct) | 0) + Math.imul(c, lt) | 0)) << 13) | 0;
                            a = ((o = o + Math.imul(c, ct) | 0) + (n >>> 13) | 0) + (Et >>> 26) | 0,
                                Et &= 67108863,
                                i = Math.imul(I, L),
                                n = (n = Math.imul(I, Y)) + Math.imul(N, L) | 0,
                                o = Math.imul(N, Y),
                                i = i + Math.imul(P, K) | 0,
                                n = (n = n + Math.imul(P, X) | 0) + Math.imul(j, K) | 0,
                                o = o + Math.imul(j, X) | 0,
                                i = i + Math.imul(D, V) | 0,
                                n = (n = n + Math.imul(D, H) | 0) + Math.imul(O, V) | 0,
                                o = o + Math.imul(O, H) | 0,
                                i = i + Math.imul(R, J) | 0,
                                n = (n = n + Math.imul(R, $) | 0) + Math.imul(F, J) | 0,
                                o = o + Math.imul(F, $) | 0,
                                i = i + Math.imul(S, W) | 0,
                                n = (n = n + Math.imul(S, tt) | 0) + Math.imul(B, W) | 0,
                                o = o + Math.imul(B, tt) | 0,
                                i = i + Math.imul(_, rt) | 0,
                                n = (n = n + Math.imul(_, it) | 0) + Math.imul(E, rt) | 0,
                                o = o + Math.imul(E, it) | 0,
                                i = i + Math.imul(b, ot) | 0,
                                n = (n = n + Math.imul(b, st) | 0) + Math.imul(M, ot) | 0,
                                o = o + Math.imul(M, st) | 0,
                                i = i + Math.imul(g, ut) | 0,
                                n = (n = n + Math.imul(g, at) | 0) + Math.imul(v, ut) | 0,
                                o = o + Math.imul(v, at) | 0,
                                i = i + Math.imul(d, lt) | 0,
                                n = (n = n + Math.imul(d, ct) | 0) + Math.imul(m, lt) | 0,
                                o = o + Math.imul(m, ct) | 0;
                            var At = (a + (i = i + Math.imul(l, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, mt) | 0) + Math.imul(c, dt) | 0)) << 13) | 0;
                            a = ((o = o + Math.imul(c, mt) | 0) + (n >>> 13) | 0) + (At >>> 26) | 0,
                                At &= 67108863,
                                i = Math.imul(I, K),
                                n = (n = Math.imul(I, X)) + Math.imul(N, K) | 0,
                                o = Math.imul(N, X),
                                i = i + Math.imul(P, V) | 0,
                                n = (n = n + Math.imul(P, H) | 0) + Math.imul(j, V) | 0,
                                o = o + Math.imul(j, H) | 0,
                                i = i + Math.imul(D, J) | 0,
                                n = (n = n + Math.imul(D, $) | 0) + Math.imul(O, J) | 0,
                                o = o + Math.imul(O, $) | 0,
                                i = i + Math.imul(R, W) | 0,
                                n = (n = n + Math.imul(R, tt) | 0) + Math.imul(F, W) | 0,
                                o = o + Math.imul(F, tt) | 0,
                                i = i + Math.imul(S, rt) | 0,
                                n = (n = n + Math.imul(S, it) | 0) + Math.imul(B, rt) | 0,
                                o = o + Math.imul(B, it) | 0,
                                i = i + Math.imul(_, ot) | 0,
                                n = (n = n + Math.imul(_, st) | 0) + Math.imul(E, ot) | 0,
                                o = o + Math.imul(E, st) | 0,
                                i = i + Math.imul(b, ut) | 0,
                                n = (n = n + Math.imul(b, at) | 0) + Math.imul(M, ut) | 0,
                                o = o + Math.imul(M, at) | 0,
                                i = i + Math.imul(g, lt) | 0,
                                n = (n = n + Math.imul(g, ct) | 0) + Math.imul(v, lt) | 0,
                                o = o + Math.imul(v, ct) | 0;
                            var St = (a + (i = i + Math.imul(d, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, mt) | 0) + Math.imul(m, dt) | 0)) << 13) | 0;
                            a = ((o = o + Math.imul(m, mt) | 0) + (n >>> 13) | 0) + (St >>> 26) | 0,
                                St &= 67108863,
                                i = Math.imul(I, V),
                                n = (n = Math.imul(I, H)) + Math.imul(N, V) | 0,
                                o = Math.imul(N, H),
                                i = i + Math.imul(P, J) | 0,
                                n = (n = n + Math.imul(P, $) | 0) + Math.imul(j, J) | 0,
                                o = o + Math.imul(j, $) | 0,
                                i = i + Math.imul(D, W) | 0,
                                n = (n = n + Math.imul(D, tt) | 0) + Math.imul(O, W) | 0,
                                o = o + Math.imul(O, tt) | 0,
                                i = i + Math.imul(R, rt) | 0,
                                n = (n = n + Math.imul(R, it) | 0) + Math.imul(F, rt) | 0,
                                o = o + Math.imul(F, it) | 0,
                                i = i + Math.imul(S, ot) | 0,
                                n = (n = n + Math.imul(S, st) | 0) + Math.imul(B, ot) | 0,
                                o = o + Math.imul(B, st) | 0,
                                i = i + Math.imul(_, ut) | 0,
                                n = (n = n + Math.imul(_, at) | 0) + Math.imul(E, ut) | 0,
                                o = o + Math.imul(E, at) | 0,
                                i = i + Math.imul(b, lt) | 0,
                                n = (n = n + Math.imul(b, ct) | 0) + Math.imul(M, lt) | 0,
                                o = o + Math.imul(M, ct) | 0;
                            var Bt = (a + (i = i + Math.imul(g, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(g, mt) | 0) + Math.imul(v, dt) | 0)) << 13) | 0;
                            a = ((o = o + Math.imul(v, mt) | 0) + (n >>> 13) | 0) + (Bt >>> 26) | 0,
                                Bt &= 67108863,
                                i = Math.imul(I, J),
                                n = (n = Math.imul(I, $)) + Math.imul(N, J) | 0,
                                o = Math.imul(N, $),
                                i = i + Math.imul(P, W) | 0,
                                n = (n = n + Math.imul(P, tt) | 0) + Math.imul(j, W) | 0,
                                o = o + Math.imul(j, tt) | 0,
                                i = i + Math.imul(D, rt) | 0,
                                n = (n = n + Math.imul(D, it) | 0) + Math.imul(O, rt) | 0,
                                o = o + Math.imul(O, it) | 0,
                                i = i + Math.imul(R, ot) | 0,
                                n = (n = n + Math.imul(R, st) | 0) + Math.imul(F, ot) | 0,
                                o = o + Math.imul(F, st) | 0,
                                i = i + Math.imul(S, ut) | 0,
                                n = (n = n + Math.imul(S, at) | 0) + Math.imul(B, ut) | 0,
                                o = o + Math.imul(B, at) | 0,
                                i = i + Math.imul(_, lt) | 0,
                                n = (n = n + Math.imul(_, ct) | 0) + Math.imul(E, lt) | 0,
                                o = o + Math.imul(E, ct) | 0;
                            var kt = (a + (i = i + Math.imul(b, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(b, mt) | 0) + Math.imul(M, dt) | 0)) << 13) | 0;
                            a = ((o = o + Math.imul(M, mt) | 0) + (n >>> 13) | 0) + (kt >>> 26) | 0,
                                kt &= 67108863,
                                i = Math.imul(I, W),
                                n = (n = Math.imul(I, tt)) + Math.imul(N, W) | 0,
                                o = Math.imul(N, tt),
                                i = i + Math.imul(P, rt) | 0,
                                n = (n = n + Math.imul(P, it) | 0) + Math.imul(j, rt) | 0,
                                o = o + Math.imul(j, it) | 0,
                                i = i + Math.imul(D, ot) | 0,
                                n = (n = n + Math.imul(D, st) | 0) + Math.imul(O, ot) | 0,
                                o = o + Math.imul(O, st) | 0,
                                i = i + Math.imul(R, ut) | 0,
                                n = (n = n + Math.imul(R, at) | 0) + Math.imul(F, ut) | 0,
                                o = o + Math.imul(F, at) | 0,
                                i = i + Math.imul(S, lt) | 0,
                                n = (n = n + Math.imul(S, ct) | 0) + Math.imul(B, lt) | 0,
                                o = o + Math.imul(B, ct) | 0;
                            var Rt = (a + (i = i + Math.imul(_, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, mt) | 0) + Math.imul(E, dt) | 0)) << 13) | 0;
                            a = ((o = o + Math.imul(E, mt) | 0) + (n >>> 13) | 0) + (Rt >>> 26) | 0,
                                Rt &= 67108863,
                                i = Math.imul(I, rt),
                                n = (n = Math.imul(I, it)) + Math.imul(N, rt) | 0,
                                o = Math.imul(N, it),
                                i = i + Math.imul(P, ot) | 0,
                                n = (n = n + Math.imul(P, st) | 0) + Math.imul(j, ot) | 0,
                                o = o + Math.imul(j, st) | 0,
                                i = i + Math.imul(D, ut) | 0,
                                n = (n = n + Math.imul(D, at) | 0) + Math.imul(O, ut) | 0,
                                o = o + Math.imul(O, at) | 0,
                                i = i + Math.imul(R, lt) | 0,
                                n = (n = n + Math.imul(R, ct) | 0) + Math.imul(F, lt) | 0,
                                o = o + Math.imul(F, ct) | 0;
                            var Ft = (a + (i = i + Math.imul(S, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(S, mt) | 0) + Math.imul(B, dt) | 0)) << 13) | 0;
                            a = ((o = o + Math.imul(B, mt) | 0) + (n >>> 13) | 0) + (Ft >>> 26) | 0,
                                Ft &= 67108863,
                                i = Math.imul(I, ot),
                                n = (n = Math.imul(I, st)) + Math.imul(N, ot) | 0,
                                o = Math.imul(N, st),
                                i = i + Math.imul(P, ut) | 0,
                                n = (n = n + Math.imul(P, at) | 0) + Math.imul(j, ut) | 0,
                                o = o + Math.imul(j, at) | 0,
                                i = i + Math.imul(D, lt) | 0,
                                n = (n = n + Math.imul(D, ct) | 0) + Math.imul(O, lt) | 0,
                                o = o + Math.imul(O, ct) | 0;
                            var Ct = (a + (i = i + Math.imul(R, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(R, mt) | 0) + Math.imul(F, dt) | 0)) << 13) | 0;
                            a = ((o = o + Math.imul(F, mt) | 0) + (n >>> 13) | 0) + (Ct >>> 26) | 0,
                                Ct &= 67108863,
                                i = Math.imul(I, ut),
                                n = (n = Math.imul(I, at)) + Math.imul(N, ut) | 0,
                                o = Math.imul(N, at),
                                i = i + Math.imul(P, lt) | 0,
                                n = (n = n + Math.imul(P, ct) | 0) + Math.imul(j, lt) | 0,
                                o = o + Math.imul(j, ct) | 0;
                            var Dt = (a + (i = i + Math.imul(D, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(D, mt) | 0) + Math.imul(O, dt) | 0)) << 13) | 0;
                            a = ((o = o + Math.imul(O, mt) | 0) + (n >>> 13) | 0) + (Dt >>> 26) | 0,
                                Dt &= 67108863,
                                i = Math.imul(I, lt),
                                n = (n = Math.imul(I, ct)) + Math.imul(N, lt) | 0,
                                o = Math.imul(N, ct);
                            var Ot = (a + (i = i + Math.imul(P, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(P, mt) | 0) + Math.imul(j, dt) | 0)) << 13) | 0;
                            a = ((o = o + Math.imul(j, mt) | 0) + (n >>> 13) | 0) + (Ot >>> 26) | 0,
                                Ot &= 67108863;
                            var xt = (a + (i = Math.imul(I, dt)) | 0) + ((8191 & (n = (n = Math.imul(I, mt)) + Math.imul(N, dt) | 0)) << 13) | 0;
                            return a = ((o = Math.imul(N, mt)) + (n >>> 13) | 0) + (xt >>> 26) | 0,
                                xt &= 67108863,
                                u[0] = yt,
                                u[1] = gt,
                                u[2] = vt,
                                u[3] = wt,
                                u[4] = bt,
                                u[5] = Mt,
                                u[6] = Tt,
                                u[7] = _t,
                                u[8] = Et,
                                u[9] = At,
                                u[10] = St,
                                u[11] = Bt,
                                u[12] = kt,
                                u[13] = Rt,
                                u[14] = Ft,
                                u[15] = Ct,
                                u[16] = Dt,
                                u[17] = Ot,
                                u[18] = xt,
                                0 !== a && (u[19] = a, r.length++),
                                r
                        };
                        function d(t, e, r) {
                            return (new m()).mulp(t, e, r)
                        }
                        function m(t, e) {
                            this.x = t,
                                this.y = e
                        }
                        Math.imul || (p = c),
                            n.prototype.mulTo = function (t, e) {
                                var r = this.length + t.length;
                                return 10 === this.length && 10 === t.length ? p(this, t, e) : r < 63 ? c(this, t, e) : r < 1024 ?
                                    function (t, e, r) {
                                        r.negative = e.negative ^ t.negative,
                                            r.length = t.length + e.length;
                                        for (var i = 0,
                                            n = 0,
                                            o = 0; o < r.length - 1; o++) {
                                            var s = n;
                                            n = 0;
                                            for (var h = 67108863 & i,
                                                u = Math.min(o, e.length - 1), a = Math.max(0, o - t.length + 1); a <= u; a++) {
                                                var f = o - a,
                                                    l = (0 | t.words[f]) * (0 | e.words[a]),
                                                    c = 67108863 & l;
                                                h = 67108863 & (c = c + h | 0),
                                                    n += (s = (s = s + (l / 67108864 | 0) | 0) + (c >>> 26) | 0) >>> 26,
                                                    s &= 67108863
                                            }
                                            r.words[o] = h,
                                                i = s,
                                                s = n
                                        }
                                        return 0 !== i ? r.words[o] = i : r.length--,
                                            r.strip()
                                    }(this, t, e) : d(this, t, e)
                            },
                            m.prototype.makeRBT = function (t) {
                                for (var e = new Array(t), r = n.prototype._countBits(t) - 1, i = 0; i < t; i++) e[i] = this.revBin(i, r, t);
                                return e
                            },
                            m.prototype.revBin = function (t, e, r) {
                                if (0 === t || t === r - 1) return t;
                                for (var i = 0,
                                    n = 0; n < e; n++) i |= (1 & t) << e - n - 1,
                                        t >>= 1;
                                return i
                            },
                            m.prototype.permute = function (t, e, r, i, n, o) {
                                for (var s = 0; s < o; s++) i[s] = e[t[s]],
                                    n[s] = r[t[s]]
                            },
                            m.prototype.transform = function (t, e, r, i, n, o) {
                                this.permute(o, t, e, r, i, n);
                                for (var s = 1; s < n; s <<= 1) for (var h = s << 1,
                                    u = Math.cos(2 * Math.PI / h), a = Math.sin(2 * Math.PI / h), f = 0; f < n; f += h) for (var l = u,
                                        c = a,
                                        p = 0; p < s; p++) {
                                        var d = r[f + p],
                                            m = i[f + p],
                                            y = r[f + p + s],
                                            g = i[f + p + s],
                                            v = l * y - c * g;
                                        g = l * g + c * y,
                                            y = v,
                                            r[f + p] = d + y,
                                            i[f + p] = m + g,
                                            r[f + p + s] = d - y,
                                            i[f + p + s] = m - g,
                                            p !== h && (v = u * l - a * c, c = u * c + a * l, l = v)
                                    }
                            },
                            m.prototype.guessLen13b = function (t, e) {
                                var r = 1 | Math.max(e, t),
                                    i = 1 & r,
                                    n = 0;
                                for (r = r / 2 | 0; r; r >>>= 1) n++;
                                return 1 << n + 1 + i
                            },
                            m.prototype.conjugate = function (t, e, r) {
                                if (!(r <= 1)) for (var i = 0; i < r / 2; i++) {
                                    var n = t[i];
                                    t[i] = t[r - i - 1],
                                        t[r - i - 1] = n,
                                        n = e[i],
                                        e[i] = -e[r - i - 1],
                                        e[r - i - 1] = -n
                                }
                            },
                            m.prototype.normalize13b = function (t, e) {
                                for (var r = 0,
                                    i = 0; i < e / 2; i++) {
                                    var n = 8192 * Math.round(t[2 * i + 1] / e) + Math.round(t[2 * i] / e) + r;
                                    t[i] = 67108863 & n,
                                        r = n < 67108864 ? 0 : n / 67108864 | 0
                                }
                                return t
                            },
                            m.prototype.convert13b = function (t, e, i, n) {
                                for (var o = 0,
                                    s = 0; s < e; s++) o += 0 | t[s],
                                        i[2 * s] = 8191 & o,
                                        o >>>= 13,
                                        i[2 * s + 1] = 8191 & o,
                                        o >>>= 13;
                                for (s = 2 * e; s < n; ++s) i[s] = 0;
                                r(0 === o),
                                    r(0 == (- 8192 & o))
                            },
                            m.prototype.stub = function (t) {
                                for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
                                return e
                            },
                            m.prototype.mulp = function (t, e, r) {
                                var i = 2 * this.guessLen13b(t.length, e.length),
                                    n = this.makeRBT(i),
                                    o = this.stub(i),
                                    s = new Array(i),
                                    h = new Array(i),
                                    u = new Array(i),
                                    a = new Array(i),
                                    f = new Array(i),
                                    l = new Array(i),
                                    c = r.words;
                                c.length = i,
                                    this.convert13b(t.words, t.length, s, i),
                                    this.convert13b(e.words, e.length, a, i),
                                    this.transform(s, o, h, u, i, n),
                                    this.transform(a, o, f, l, i, n);
                                for (var p = 0; p < i; p++) {
                                    var d = h[p] * f[p] - u[p] * l[p];
                                    u[p] = h[p] * l[p] + u[p] * f[p],
                                        h[p] = d
                                }
                                return this.conjugate(h, u, i),
                                    this.transform(h, u, c, o, i, n),
                                    this.conjugate(c, o, i),
                                    this.normalize13b(c, i),
                                    r.negative = t.negative ^ e.negative,
                                    r.length = t.length + e.length,
                                    r.strip()
                            },
                            n.prototype.mul = function (t) {
                                var e = new n(null);
                                return e.words = new Array(this.length + t.length),
                                    this.mulTo(t, e)
                            },
                            n.prototype.mulf = function (t) {
                                var e = new n(null);
                                return e.words = new Array(this.length + t.length),
                                    d(this, t, e)
                            },
                            n.prototype.imul = function (t) {
                                return this.clone().mulTo(t, this)
                            },
                            n.prototype.imuln = function (t) {
                                r("number" == typeof t),
                                    r(t < 67108864);
                                for (var e = 0,
                                    i = 0; i < this.length; i++) {
                                    var n = (0 | this.words[i]) * t,
                                        o = (67108863 & n) + (67108863 & e);
                                    e >>= 26,
                                        e += n / 67108864 | 0,
                                        e += o >>> 26,
                                        this.words[i] = 67108863 & o
                                }
                                return 0 !== e && (this.words[i] = e, this.length++),
                                    this
                            },
                            n.prototype.muln = function (t) {
                                return this.clone().imuln(t)
                            },
                            n.prototype.sqr = function () {
                                return this.mul(this)
                            },
                            n.prototype.isqr = function () {
                                return this.imul(this.clone())
                            },
                            n.prototype.pow = function (t) {
                                var e = function (t) {
                                    for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                                        var i = r / 26 | 0,
                                            n = r % 26;
                                        e[r] = (t.words[i] & 1 << n) >>> n
                                    }
                                    return e
                                }(t);
                                if (0 === e.length) return new n(1);
                                for (var r = this,
                                    i = 0; i < e.length && 0 === e[i]; i++, r = r.sqr());
                                if (++i < e.length) for (var o = r.sqr(); i < e.length; i++, o = o.sqr()) 0 !== e[i] && (r = r.mul(o));
                                return r
                            },
                            n.prototype.iushln = function (t) {
                                r("number" == typeof t && t >= 0);
                                var e, i = t % 26,
                                    n = (t - i) / 26,
                                    o = 67108863 >>> 26 - i << 26 - i;
                                if (0 !== i) {
                                    var s = 0;
                                    for (e = 0; e < this.length; e++) {
                                        var h = this.words[e] & o,
                                            u = (0 | this.words[e]) - h << i;
                                        this.words[e] = u | s,
                                            s = h >>> 26 - i
                                    }
                                    s && (this.words[e] = s, this.length++)
                                }
                                if (0 !== n) {
                                    for (e = this.length - 1; e >= 0; e--) this.words[e + n] = this.words[e];
                                    for (e = 0; e < n; e++) this.words[e] = 0;
                                    this.length += n
                                }
                                return this.strip()
                            },
                            n.prototype.ishln = function (t) {
                                return r(0 === this.negative),
                                    this.iushln(t)
                            },
                            n.prototype.iushrn = function (t, e, i) {
                                var n;
                                r("number" == typeof t && t >= 0),
                                    n = e ? (e - e % 26) / 26 : 0;
                                var o = t % 26,
                                    s = Math.min((t - o) / 26, this.length),
                                    h = 67108863 ^ 67108863 >>> o << o,
                                    u = i;
                                if (n -= s, n = Math.max(0, n), u) {
                                    for (var a = 0; a < s; a++) u.words[a] = this.words[a];
                                    u.length = s
                                }
                                if (0 === s);
                                else if (this.length > s) for (this.length -= s, a = 0; a < this.length; a++) this.words[a] = this.words[a + s];
                                else this.words[0] = 0,
                                    this.length = 1;
                                var f = 0;
                                for (a = this.length - 1; a >= 0 && (0 !== f || a >= n); a--) {
                                    var l = 0 | this.words[a];
                                    this.words[a] = f << 26 - o | l >>> o,
                                        f = l & h
                                }
                                return u && 0 !== f && (u.words[u.length++] = f),
                                    0 === this.length && (this.words[0] = 0, this.length = 1),
                                    this.strip()
                            },
                            n.prototype.ishrn = function (t, e, i) {
                                return r(0 === this.negative),
                                    this.iushrn(t, e, i)
                            },
                            n.prototype.shln = function (t) {
                                return this.clone().ishln(t)
                            },
                            n.prototype.ushln = function (t) {
                                return this.clone().iushln(t)
                            },
                            n.prototype.shrn = function (t) {
                                return this.clone().ishrn(t)
                            },
                            n.prototype.ushrn = function (t) {
                                return this.clone().iushrn(t)
                            },
                            n.prototype.testn = function (t) {
                                r("number" == typeof t && t >= 0);
                                var e = t % 26,
                                    i = (t - e) / 26,
                                    n = 1 << e;
                                return !(this.length <= i) && !!(this.words[i] & n)
                            },
                            n.prototype.imaskn = function (t) {
                                r("number" == typeof t && t >= 0);
                                var e = t % 26,
                                    i = (t - e) / 26;
                                if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= i) return this;
                                if (0 !== e && i++, this.length = Math.min(i, this.length), 0 !== e) {
                                    var n = 67108863 ^ 67108863 >>> e << e;
                                    this.words[this.length - 1] &= n
                                }
                                return this.strip()
                            },
                            n.prototype.maskn = function (t) {
                                return this.clone().imaskn(t)
                            },
                            n.prototype.iaddn = function (t) {
                                return r("number" == typeof t),
                                    r(t < 67108864),
                                    t < 0 ? this.isubn(- t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                            },
                            n.prototype._iaddn = function (t) {
                                this.words[0] += t;
                                for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864,
                                    e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                                return this.length = Math.max(this.length, e + 1),
                                    this
                            },
                            n.prototype.isubn = function (t) {
                                if (r("number" == typeof t), r(t < 67108864), t < 0) return this.iaddn(- t);
                                if (0 !== this.negative) return this.negative = 0,
                                    this.iaddn(t),
                                    this.negative = 1,
                                    this;
                                if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0],
                                    this.negative = 1;
                                else for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864,
                                    this.words[e + 1] -= 1;
                                return this.strip()
                            },
                            n.prototype.addn = function (t) {
                                return this.clone().iaddn(t)
                            },
                            n.prototype.subn = function (t) {
                                return this.clone().isubn(t)
                            },
                            n.prototype.iabs = function () {
                                return this.negative = 0,
                                    this
                            },
                            n.prototype.abs = function () {
                                return this.clone().iabs()
                            },
                            n.prototype._ishlnsubmul = function (t, e, i) {
                                var n, o, s = t.length + i;
                                this._expand(s);
                                var h = 0;
                                for (n = 0; n < t.length; n++) {
                                    o = (0 | this.words[n + i]) + h;
                                    var u = (0 | t.words[n]) * e;
                                    h = ((o -= 67108863 & u) >> 26) - (u / 67108864 | 0),
                                        this.words[n + i] = 67108863 & o
                                }
                                for (; n < this.length - i; n++) h = (o = (0 | this.words[n + i]) + h) >> 26,
                                    this.words[n + i] = 67108863 & o;
                                if (0 === h) return this.strip();
                                for (r(- 1 === h), h = 0, n = 0; n < this.length; n++) h = (o = -(0 | this.words[n]) + h) >> 26,
                                    this.words[n] = 67108863 & o;
                                return this.negative = 1,
                                    this.strip()
                            },
                            n.prototype._wordDiv = function (t, e) {
                                var r = (this.length, t.length),
                                    i = this.clone(),
                                    o = t,
                                    s = 0 | o.words[o.length - 1];
                                0 !== (r = 26 - this._countBits(s)) && (o = o.ushln(r), i.iushln(r), s = 0 | o.words[o.length - 1]);
                                var h, u = i.length - o.length;
                                if ("mod" !== e) {
                                    (h = new n(null)).length = u + 1,
                                        h.words = new Array(h.length);
                                    for (var a = 0; a < h.length; a++) h.words[a] = 0
                                }
                                var f = i.clone()._ishlnsubmul(o, 1, u);
                                0 === f.negative && (i = f, h && (h.words[u] = 1));
                                for (var l = u - 1; l >= 0; l--) {
                                    var c = 67108864 * (0 | i.words[o.length + l]) + (0 | i.words[o.length + l - 1]);
                                    for (c = Math.min(c / s | 0, 67108863), i._ishlnsubmul(o, c, l); 0 !== i.negative;) c--,
                                        i.negative = 0,
                                        i._ishlnsubmul(o, 1, l),
                                        i.isZero() || (i.negative ^= 1);
                                    h && (h.words[l] = c)
                                }
                                return h && h.strip(),
                                    i.strip(),
                                    "div" !== e && 0 !== r && i.iushrn(r),
                                {
                                    div: h || null,
                                    mod: i
                                }
                            },
                            n.prototype.divmod = function (t, e, i) {
                                return r(!t.isZero()),
                                    this.isZero() ? {
                                        div: new n(0),
                                        mod: new n(0)
                                    } : 0 !== this.negative && 0 === t.negative ? (h = this.neg().divmod(t, e), "mod" !== e && (o = h.div.neg()), "div" !== e && (s = h.mod.neg(), i && 0 !== s.negative && s.iadd(t)), {
                                        div: o,
                                        mod: s
                                    }) : 0 === this.negative && 0 !== t.negative ? (h = this.divmod(t.neg(), e), "mod" !== e && (o = h.div.neg()), {
                                        div: o,
                                        mod: h.mod
                                    }) : 0 != (this.negative & t.negative) ? (h = this.neg().divmod(t.neg(), e), "div" !== e && (s = h.mod.neg(), i && 0 !== s.negative && s.isub(t)), {
                                        div: h.div,
                                        mod: s
                                    }) : t.length > this.length || this.cmp(t) < 0 ? {
                                        div: new n(0),
                                        mod: this
                                    } : 1 === t.length ? "div" === e ? {
                                        div: this.divn(t.words[0]),
                                        mod: null
                                    } : "mod" === e ? {
                                        div: null,
                                        mod: new n(this.modn(t.words[0]))
                                    } : {
                                        div: this.divn(t.words[0]),
                                        mod: new n(this.modn(t.words[0]))
                                    } : this._wordDiv(t, e);
                            }, n.prototype.div = function (t) {
                                return this.divmod(t, "div", !1).div
                            },
                            n.prototype.mod = function (t) {
                                return this.divmod(t, "mod", !1).mod
                            },
                            n.prototype.umod = function (t) {
                                return this.divmod(t, "mod", !0).mod
                            },
                            n.prototype.divRound = function (t) {
                                var e = this.divmod(t);
                                if (e.mod.isZero()) return e.div;
                                var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                                    i = t.ushrn(1),
                                    n = t.andln(1),
                                    o = r.cmp(i);
                                return o < 0 || 1 === n && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                            },
                            n.prototype.modn = function (t) {
                                r(t <= 67108863);
                                for (var e = (1 << 26) % t, i = 0, n = this.length - 1; n >= 0; n--) i = (e * i + (0 | this.words[n])) % t;
                                return i
                            },
                            n.prototype.idivn = function (t) {
                                r(t <= 67108863);
                                for (var e = 0,
                                    i = this.length - 1; i >= 0; i--) {
                                    var n = (0 | this.words[i]) + 67108864 * e;
                                    this.words[i] = n / t | 0,
                                        e = n % t
                                }
                                return this.strip()
                            },
                            n.prototype.divn = function (t) {
                                return this.clone().idivn(t)
                            },
                            n.prototype.egcd = function (t) {
                                r(0 === t.negative),
                                    r(!t.isZero());
                                var e = this,
                                    i = t.clone();
                                e = 0 !== e.negative ? e.umod(t) : e.clone();
                                for (var o = new n(1), s = new n(0), h = new n(0), u = new n(1), a = 0; e.isEven() && i.isEven();) e.iushrn(1),
                                    i.iushrn(1),
                                    ++a;
                                for (var f = i.clone(), l = e.clone(); !e.isZero();) {
                                    for (var c = 0,
                                        p = 1; 0 == (e.words[0] & p) && c < 26; ++c, p <<= 1);
                                    if (c > 0) for (e.iushrn(c); c-- > 0;)(o.isOdd() || s.isOdd()) && (o.iadd(f), s.isub(l)),
                                        o.iushrn(1),
                                        s.iushrn(1);
                                    for (var d = 0,
                                        m = 1; 0 == (i.words[0] & m) && d < 26; ++d, m <<= 1);
                                    if (d > 0) for (i.iushrn(d); d-- > 0;)(h.isOdd() || u.isOdd()) && (h.iadd(f), u.isub(l)),
                                        h.iushrn(1),
                                        u.iushrn(1);
                                    e.cmp(i) >= 0 ? (e.isub(i), o.isub(h), s.isub(u)) : (i.isub(e), h.isub(o), u.isub(s))
                                }
                                return {
                                    a: h,
                                    b: u,
                                    gcd: i.iushln(a)
                                }
                            },
                            n.prototype._invmp = function (t) {
                                r(0 === t.negative),
                                    r(!t.isZero());
                                var e = this,
                                    i = t.clone();
                                e = 0 !== e.negative ? e.umod(t) : e.clone();
                                for (var o, s = new n(1), h = new n(0), u = i.clone(); e.cmpn(1) > 0 && i.cmpn(1) > 0;) {
                                    for (var a = 0,
                                        f = 1; 0 == (e.words[0] & f) && a < 26; ++a, f <<= 1);
                                    if (a > 0) for (e.iushrn(a); a-- > 0;) s.isOdd() && s.iadd(u),
                                        s.iushrn(1);
                                    for (var l = 0,
                                        c = 1; 0 == (i.words[0] & c) && l < 26; ++l, c <<= 1);
                                    if (l > 0) for (i.iushrn(l); l-- > 0;) h.isOdd() && h.iadd(u),
                                        h.iushrn(1);
                                    e.cmp(i) >= 0 ? (e.isub(i), s.isub(h)) : (i.isub(e), h.isub(s))
                                }
                                return (o = 0 === e.cmpn(1) ? s : h).cmpn(0) < 0 && o.iadd(t),
                                    o
                            },
                            n.prototype.gcd = function (t) {
                                if (this.isZero()) return t.abs();
                                if (t.isZero()) return this.abs();
                                var e = this.clone(),
                                    r = t.clone();
                                e.negative = 0,
                                    r.negative = 0;
                                for (var i = 0; e.isEven() && r.isEven(); i++) e.iushrn(1),
                                    r.iushrn(1);
                                for (; ;) {
                                    for (; e.isEven();) e.iushrn(1);
                                    for (; r.isEven();) r.iushrn(1);
                                    var n = e.cmp(r);
                                    if (n < 0) {
                                        var o = e;
                                        e = r,
                                            r = o
                                    } else if (0 === n || 0 === r.cmpn(1)) break;
                                    e.isub(r)
                                }
                                return r.iushln(i)
                            },
                            n.prototype.invm = function (t) {
                                return this.egcd(t).a.umod(t)
                            },
                            n.prototype.isEven = function () {
                                return 0 == (1 & this.words[0])
                            },
                            n.prototype.isOdd = function () {
                                return 1 == (1 & this.words[0])
                            },
                            n.prototype.andln = function (t) {
                                return this.words[0] & t
                            },
                            n.prototype.bincn = function (t) {
                                r("number" == typeof t);
                                var e = t % 26,
                                    i = (t - e) / 26,
                                    n = 1 << e;
                                if (this.length <= i) return this._expand(i + 1),
                                    this.words[i] |= n,
                                    this;
                                for (var o = n,
                                    s = i; 0 !== o && s < this.length; s++) {
                                    var h = 0 | this.words[s];
                                    o = (h += o) >>> 26,
                                        h &= 67108863,
                                        this.words[s] = h
                                }
                                return 0 !== o && (this.words[s] = o, this.length++),
                                    this
                            },
                            n.prototype.isZero = function () {
                                return 1 === this.length && 0 === this.words[0]
                            },
                            n.prototype.cmpn = function (t) {
                                var e, i = t < 0;
                                if (0 !== this.negative && !i) return - 1;
                                if (0 === this.negative && i) return 1;
                                if (this.strip(), this.length > 1) e = 1;
                                else {
                                    i && (t = -t),
                                        r(t <= 67108863, "Number is too big");
                                    var n = 0 | this.words[0];
                                    e = n === t ? 0 : n < t ? -1 : 1
                                }
                                return 0 !== this.negative ? 0 | -e : e
                            },
                            n.prototype.cmp = function (t) {
                                if (0 !== this.negative && 0 === t.negative) return - 1;
                                if (0 === this.negative && 0 !== t.negative) return 1;
                                var e = this.ucmp(t);
                                return 0 !== this.negative ? 0 | -e : e
                            },
                            n.prototype.ucmp = function (t) {
                                if (this.length > t.length) return 1;
                                if (this.length < t.length) return - 1;
                                for (var e = 0,
                                    r = this.length - 1; r >= 0; r--) {
                                    var i = 0 | this.words[r],
                                        n = 0 | t.words[r];
                                    if (i !== n) {
                                        i < n ? e = -1 : i > n && (e = 1);
                                        break
                                    }
                                }
                                return e
                            },
                            n.prototype.gtn = function (t) {
                                return 1 === this.cmpn(t)
                            },
                            n.prototype.gt = function (t) {
                                return 1 === this.cmp(t)
                            },
                            n.prototype.gten = function (t) {
                                return this.cmpn(t) >= 0
                            },
                            n.prototype.gte = function (t) {
                                return this.cmp(t) >= 0
                            },
                            n.prototype.ltn = function (t) {
                                return - 1 === this.cmpn(t)
                            },
                            n.prototype.lt = function (t) {
                                return - 1 === this.cmp(t)
                            },
                            n.prototype.lten = function (t) {
                                return this.cmpn(t) <= 0
                            },
                            n.prototype.lte = function (t) {
                                return this.cmp(t) <= 0
                            },
                            n.prototype.eqn = function (t) {
                                return 0 === this.cmpn(t)
                            },
                            n.prototype.eq = function (t) {
                                return 0 === this.cmp(t)
                            },
                            n.red = function (t) {
                                return new T(t)
                            },
                            n.prototype.toRed = function (t) {
                                return r(!this.red, "Already a number in reduction context"),
                                    r(0 === this.negative, "red works only with positives"),
                                    t.convertTo(this)._forceRed(t)
                            },
                            n.prototype.fromRed = function () {
                                return r(this.red, "fromRed works only with numbers in reduction context"),
                                    this.red.convertFrom(this)
                            },
                            n.prototype._forceRed = function (t) {
                                return this.red = t,
                                    this
                            },
                            n.prototype.forceRed = function (t) {
                                return r(!this.red, "Already a number in reduction context"),
                                    this._forceRed(t)
                            },
                            n.prototype.redAdd = function (t) {
                                return r(this.red, "redAdd works only with red numbers"),
                                    this.red.add(this, t)
                            },
                            n.prototype.redIAdd = function (t) {
                                return r(this.red, "redIAdd works only with red numbers"),
                                    this.red.iadd(this, t)
                            },
                            n.prototype.redSub = function (t) {
                                return r(this.red, "redSub works only with red numbers"),
                                    this.red.sub(this, t)
                            },
                            n.prototype.redISub = function (t) {
                                return r(this.red, "redISub works only with red numbers"),
                                    this.red.isub(this, t)
                            },
                            n.prototype.redShl = function (t) {
                                return r(this.red, "redShl works only with red numbers"),
                                    this.red.shl(this, t)
                            },
                            n.prototype.redMul = function (t) {
                                return r(this.red, "redMul works only with red numbers"),
                                    this.red._verify2(this, t),
                                    this.red.mul(this, t)
                            },
                            n.prototype.redIMul = function (t) {
                                return r(this.red, "redMul works only with red numbers"),
                                    this.red._verify2(this, t),
                                    this.red.imul(this, t)
                            },
                            n.prototype.redSqr = function () {
                                return r(this.red, "redSqr works only with red numbers"),
                                    this.red._verify1(this),
                                    this.red.sqr(this)
                            },
                            n.prototype.redISqr = function () {
                                return r(this.red, "redISqr works only with red numbers"),
                                    this.red._verify1(this),
                                    this.red.isqr(this)
                            },
                            n.prototype.redSqrt = function () {
                                return r(this.red, "redSqrt works only with red numbers"),
                                    this.red._verify1(this),
                                    this.red.sqrt(this)
                            },
                            n.prototype.redInvm = function () {
                                return r(this.red, "redInvm works only with red numbers"),
                                    this.red._verify1(this),
                                    this.red.invm(this)
                            },
                            n.prototype.redNeg = function () {
                                return r(this.red, "redNeg works only with red numbers"),
                                    this.red._verify1(this),
                                    this.red.neg(this)
                            },
                            n.prototype.redPow = function (t) {
                                return r(this.red && !t.red, "redPow(normalNum)"),
                                    this.red._verify1(this),
                                    this.red.pow(this, t)
                            };
                        var y = {
                            k256: null,
                            p224: null,
                            p192: null,
                            p25519: null
                        };
                        function g(t, e) {
                            this.name = t,
                                this.p = new n(e, 16),
                                this.n = this.p.bitLength(),
                                this.k = new n(1).iushln(this.n).isub(this.p),
                                this.tmp = this._tmp()
                        }
                        function v() {
                            g.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                        }
                        function w() {
                            g.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                        }
                        function b() {
                            g.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                        }
                        function M() {
                            g.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                        }
                        function T(t) {
                            if ("string" == typeof t) {
                                var e = n._prime(t);
                                this.m = e.p,
                                    this.prime = e
                            } else r(t.gtn(1), "modulus must be greater than 1"),
                                this.m = t,
                                this.prime = null
                        }
                        function _(t) {
                            T.call(this, t),
                                this.shift = this.m.bitLength(),
                                this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26),
                                this.r = new n(1).iushln(this.shift),
                                this.r2 = this.imod(this.r.sqr()),
                                this.rinv = this.r._invmp(this.m),
                                this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
                                this.minv = this.minv.umod(this.r),
                                this.minv = this.r.sub(this.minv)
                        }
                        g.prototype._tmp = function () {
                            var t = new n(null);
                            return t.words = new Array(Math.ceil(this.n / 13)),
                                t
                        },
                            g.prototype.ireduce = function (t) {
                                var e, r = t;
                                do {
                                    this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                                } while (e > this.n);
                                var i = e < this.n ? -1 : r.ucmp(this.p);
                                return 0 === i ? (r.words[0] = 0, r.length = 1) : i > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(),
                                    r
                            },
                            g.prototype.split = function (t, e) {
                                t.iushrn(this.n, 0, e)
                            },
                            g.prototype.imulK = function (t) {
                                return t.imul(this.k)
                            },
                            i(v, g),
                            v.prototype.split = function (t, e) {
                                for (var r = 4194303,
                                    i = Math.min(t.length, 9), n = 0; n < i; n++) e.words[n] = t.words[n];
                                if (e.length = i, t.length <= 9) return t.words[0] = 0,
                                    void (t.length = 1);
                                var o = t.words[9];
                                for (e.words[e.length++] = o & r, n = 10; n < t.length; n++) {
                                    var s = 0 | t.words[n];
                                    t.words[n - 10] = (s & r) << 4 | o >>> 22,
                                        o = s
                                }
                                o >>>= 22,
                                    t.words[n - 10] = o,
                                    0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9
                            },
                            v.prototype.imulK = function (t) {
                                t.words[t.length] = 0,
                                    t.words[t.length + 1] = 0,
                                    t.length += 2;
                                for (var e = 0,
                                    r = 0; r < t.length; r++) {
                                    var i = 0 | t.words[r];
                                    e += 977 * i,
                                        t.words[r] = 67108863 & e,
                                        e = 64 * i + (e / 67108864 | 0)
                                }
                                return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--),
                                    t
                            },
                            i(w, g),
                            i(b, g),
                            i(M, g),
                            M.prototype.imulK = function (t) {
                                for (var e = 0,
                                    r = 0; r < t.length; r++) {
                                    var i = 19 * (0 | t.words[r]) + e,
                                        n = 67108863 & i;
                                    i >>>= 26,
                                        t.words[r] = n,
                                        e = i
                                }
                                return 0 !== e && (t.words[t.length++] = e),
                                    t
                            },
                            n._prime = function (t) {
                                if (y[t]) return y[t];
                                var e;
                                if ("k256" === t) e = new v();
                                else if ("p224" === t) e = new w();
                                else if ("p192" === t) e = new b();
                                else {
                                    if ("p25519" !== t) throw new Error("Unknown prime " + t);
                                    e = new M()
                                }
                                return y[t] = e,
                                    e
                            },
                            T.prototype._verify1 = function (t) {
                                r(0 === t.negative, "red works only with positives"),
                                    r(t.red, "red works only with red numbers")
                            },
                            T.prototype._verify2 = function (t, e) {
                                r(0 == (t.negative | e.negative), "red works only with positives"),
                                    r(t.red && t.red === e.red, "red works only with red numbers")
                            },
                            T.prototype.imod = function (t) {
                                return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
                            },
                            T.prototype.neg = function (t) {
                                return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                            },
                            T.prototype.add = function (t, e) {
                                this._verify2(t, e);
                                var r = t.add(e);
                                return r.cmp(this.m) >= 0 && r.isub(this.m),
                                    r._forceRed(this)
                            },
                            T.prototype.iadd = function (t, e) {
                                this._verify2(t, e);
                                var r = t.iadd(e);
                                return r.cmp(this.m) >= 0 && r.isub(this.m),
                                    r
                            },
                            T.prototype.sub = function (t, e) {
                                this._verify2(t, e);
                                var r = t.sub(e);
                                return r.cmpn(0) < 0 && r.iadd(this.m),
                                    r._forceRed(this)
                            },
                            T.prototype.isub = function (t, e) {
                                this._verify2(t, e);
                                var r = t.isub(e);
                                return r.cmpn(0) < 0 && r.iadd(this.m),
                                    r
                            },
                            T.prototype.shl = function (t, e) {
                                return this._verify1(t),
                                    this.imod(t.ushln(e))
                            },
                            T.prototype.imul = function (t, e) {
                                return this._verify2(t, e),
                                    this.imod(t.imul(e))
                            },
                            T.prototype.mul = function (t, e) {
                                return this._verify2(t, e),
                                    this.imod(t.mul(e))
                            },
                            T.prototype.isqr = function (t) {
                                return this.imul(t, t.clone())
                            },
                            T.prototype.sqr = function (t) {
                                return this.mul(t, t)
                            },
                            T.prototype.sqrt = function (t) {
                                if (t.isZero()) return t.clone();
                                var e = this.m.andln(3);
                                if (r(e % 2 == 1), 3 === e) {
                                    var i = this.m.add(new n(1)).iushrn(2);
                                    return this.pow(t, i)
                                }
                                for (var o = this.m.subn(1), s = 0; !o.isZero() && 0 === o.andln(1);) s++,
                                    o.iushrn(1);
                                r(!o.isZero());
                                var h = new n(1).toRed(this),
                                    u = h.redNeg(),
                                    a = this.m.subn(1).iushrn(1),
                                    f = this.m.bitLength();
                                for (f = new n(2 * f * f).toRed(this); 0 !== this.pow(f, a).cmp(u);) f.redIAdd(u);
                                for (var l = this.pow(f, o), c = this.pow(t, o.addn(1).iushrn(1)), p = this.pow(t, o), d = s; 0 !== p.cmp(h);) {
                                    for (var m = p,
                                        y = 0; 0 !== m.cmp(h); y++) m = m.redSqr();
                                    r(y < d);
                                    var g = this.pow(l, new n(1).iushln(d - y - 1));
                                    c = c.redMul(g),
                                        l = g.redSqr(),
                                        p = p.redMul(l),
                                        d = y
                                }
                                return c
                            },
                            T.prototype.invm = function (t) {
                                var e = t._invmp(this.m);
                                return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                            },
                            T.prototype.pow = function (t, e) {
                                if (e.isZero()) return new n(1).toRed(this);
                                if (0 === e.cmpn(1)) return t.clone();
                                var r = new Array(16);
                                r[0] = new n(1).toRed(this),
                                    r[1] = t;
                                for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], t);
                                var o = r[0],
                                    s = 0,
                                    h = 0,
                                    u = e.bitLength() % 26;
                                for (0 === u && (u = 26), i = e.length - 1; i >= 0; i--) {
                                    for (var a = e.words[i], f = u - 1; f >= 0; f--) {
                                        var l = a >> f & 1;
                                        o !== r[0] && (o = this.sqr(o)),
                                            0 !== l || 0 !== s ? (s <<= 1, s |= l, (4 === ++h || 0 === i && 0 === f) && (o = this.mul(o, r[s]), h = 0, s = 0)) : h = 0
                                    }
                                    u = 26
                                }
                                return o
                            },
                            T.prototype.convertTo = function (t) {
                                var e = t.umod(this.m);
                                return e === t ? e.clone() : e
                            },
                            T.prototype.convertFrom = function (t) {
                                var e = t.clone();
                                return e.red = null,
                                    e
                            },
                            n.mont = function (t) {
                                return new _(t)
                            },
                            i(_, T),
                            _.prototype.convertTo = function (t) {
                                return this.imod(t.ushln(this.shift))
                            },
                            _.prototype.convertFrom = function (t) {
                                var e = this.imod(t.mul(this.rinv));
                                return e.red = null,
                                    e
                            },
                            _.prototype.imul = function (t, e) {
                                if (t.isZero() || e.isZero()) return t.words[0] = 0,
                                    t.length = 1,
                                    t;
                                var r = t.imul(e),
                                    i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                                    n = r.isub(i).iushrn(this.shift),
                                    o = n;
                                return n.cmp(this.m) >= 0 ? o = n.isub(this.m) : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
                                    o._forceRed(this)
                            },
                            _.prototype.mul = function (t, e) {
                                if (t.isZero() || e.isZero()) return new n(0)._forceRed(this);
                                var r = t.mul(e),
                                    i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                                    o = r.isub(i).iushrn(this.shift),
                                    s = o;
                                return o.cmp(this.m) >= 0 ? s = o.isub(this.m) : o.cmpn(0) < 0 && (s = o.iadd(this.m)),
                                    s._forceRed(this)
                            },
                            _.prototype.invm = function (t) {
                                return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                            }
                    }(t, mt)
            })),
            ee = gt((function (t) {
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
                    if (e) {
                        t.super_ = e;
                        var r = function () { };
                        r.prototype = e.prototype,
                            t.prototype = new r(),
                            t.prototype.constructor = t
                    }
                }
            }));
        function re() {
            throw new Error("setTimeout has not been defined")
        }
        function ie() {
            throw new Error("clearTimeout has not been defined")
        }
        var ne = re,
            oe = ie;
        function se(t) {
            if (ne === setTimeout) return setTimeout(t, 0);
            if ((ne === re || !ne) && setTimeout) return ne = setTimeout,
                setTimeout(t, 0);
            try {
                return ne(t, 0)
            } catch (e) {
                try {
                    return ne.call(null, t, 0)
                } catch (e) {
                    return ne.call(this, t, 0)
                }
            }
        }
        "function" == typeof d.setTimeout && (ne = setTimeout),
            "function" == typeof d.clearTimeout && (oe = clearTimeout);
        var he, ue = [],
            ae = !1,
            fe = -1;
        function le() {
            ae && he && (ae = !1, he.length ? ue = he.concat(ue) : fe = -1, ue.length && ce())
        }
        function ce() {
            if (!ae) {
                var t = se(le);
                ae = !0;
                for (var e = ue.length; e;) {
                    for (he = ue, ue = []; ++fe < e;) he && he[fe].run();
                    fe = -1,
                        e = ue.length
                }
                he = null,
                    ae = !1,
                    function (t) {
                        if (oe === clearTimeout) return clearTimeout(t);
                        if ((oe === ie || !oe) && clearTimeout) return oe = clearTimeout,
                            clearTimeout(t);
                        try {
                            oe(t)
                        } catch (e) {
                            try {
                                return oe.call(null, t)
                            } catch (e) {
                                return oe.call(this, t)
                            }
                        }
                    }(t)
            }
        }
        function pe(t, e) {
            this.fun = t,
                this.array = e
        }
        pe.prototype.run = function () {
            this.fun.apply(null, this.array)
        };
        function de() { }
        var me = de,
            ye = de,
            ge = de,
            ve = de,
            we = de,
            be = de,
            Me = de;
        var Te = d.performance || {},
            _e = Te.now || Te.mozNow || Te.msNow || Te.oNow || Te.webkitNow ||
                function () {
                    return (new Date()).getTime()
                };
        var Ee = new Date();
        var Ae, Se = {
            nextTick: function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                ue.push(new pe(t, e)),
                    1 !== ue.length || ae || se(ce)
            },
            title: "browser",
            browser: !0,
            env: {},
            argv: [],
            version: "",
            versions: {},
            on: me,
            addListener: ye,
            once: ge,
            off: ve,
            removeListener: we,
            removeAllListeners: be,
            emit: Me,
            binding: function (t) {
                throw new Error("process.binding is not supported")
            },
            cwd: function () {
                return "/"
            },
            chdir: function (t) {
                throw new Error("process.chdir is not supported")
            },
            umask: function () {
                return 0
            },
            hrtime: function (t) {
                var e = .001 * _e.call(Te),
                    r = Math.floor(e),
                    i = Math.floor(e % 1 * 1e9);
                return t && (r -= t[0], (i -= t[1]) < 0 && (r--, i += 1e9)),
                    [r, i]
            },
            platform: "browser",
            release: {},
            config: {},
            uptime: function () {
                return (new Date() - Ee) / 1e3
            }
        },
            Be = Wt.Buffer,
            ke = {};
        for (Ae in Wt) Wt.hasOwnProperty(Ae) && "SlowBuffer" !== Ae && "Buffer" !== Ae && (ke[Ae] = Wt[Ae]);
        var Re = ke.Buffer = {};
        for (Ae in Be) Be.hasOwnProperty(Ae) && "allocUnsafe" !== Ae && "allocUnsafeSlow" !== Ae && (Re[Ae] = Be[Ae]);
        if (ke.Buffer.prototype = Be.prototype, Re.from && Re.from !== Uint8Array.from || (Re.from = function (t, e, r) {
            if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof t);
            if (t && void 0 === t.length) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
            return Be(t, e, r)
        }), Re.alloc || (Re.alloc = function (t, e, r) {
            if ("number" != typeof t) throw new TypeError('The "size" argument must be of type number. Received type ' + typeof t);
            if (t < 0 || t >= 2 * (1 << 30)) throw new RangeError('The value "' + t + '" is invalid for option "size"');
            var i = Be(t);
            return e && 0 !== e.length ? "string" == typeof r ? i.fill(e, r) : i.fill(e) : i.fill(0),
                i
        }), !ke.kStringMaxLength) try {
            ke.kStringMaxLength = Se.binding("buffer").kStringMaxLength
        } catch (t) { }
        ke.constants || (ke.constants = {
            MAX_LENGTH: ke.kMaxLength
        },
            ke.kStringMaxLength && (ke.constants.MAX_STRING_LENGTH = ke.kStringMaxLength));
        var Fe = ke;
        function Ce(t) {
            this._reporterState = {
                obj: null,
                path: [],
                options: t || {},
                errors: []
            }
        }
        var De = Ce;
        function Oe(t, e) {
            this.path = t,
                this.rethrow(e)
        }
        Ce.prototype.isError = function (t) {
            return t instanceof Oe
        },
            Ce.prototype.save = function () {
                const t = this._reporterState;
                return {
                    obj: t.obj,
                    pathLen: t.path.length
                }
            },
            Ce.prototype.restore = function (t) {
                const e = this._reporterState;
                e.obj = t.obj,
                    e.path = e.path.slice(0, t.pathLen)
            },
            Ce.prototype.enterKey = function (t) {
                return this._reporterState.path.push(t)
            },
            Ce.prototype.exitKey = function (t) {
                const e = this._reporterState;
                e.path = e.path.slice(0, t - 1)
            },
            Ce.prototype.leaveKey = function (t, e, r) {
                const i = this._reporterState;
                this.exitKey(t),
                    null !== i.obj && (i.obj[e] = r)
            },
            Ce.prototype.path = function () {
                return this._reporterState.path.join("/")
            },
            Ce.prototype.enterObject = function () {
                const t = this._reporterState,
                    e = t.obj;
                return t.obj = {},
                    e
            },
            Ce.prototype.leaveObject = function (t) {
                const e = this._reporterState,
                    r = e.obj;
                return e.obj = t,
                    r
            },
            Ce.prototype.error = function (t) {
                let e;
                const r = this._reporterState,
                    i = t instanceof Oe;
                if (e = i ? t : new Oe(r.path.map((function (t) {
                    return "[" + JSON.stringify(t) + "]"
                })).join(""), t.message || t, t.stack), !r.options.partial) throw e;
                return i || r.errors.push(e),
                    e
            },
            Ce.prototype.wrapResult = function (t) {
                const e = this._reporterState;
                return e.options.partial ? {
                    result: this.isError(t) ? null : t,
                    errors: e.errors
                } : t
            },
            ee(Oe, Error),
            Oe.prototype.rethrow = function (t) {
                if (this.message = t + " at: " + (this.path || "(shallow)"), Error.captureStackTrace && Error.captureStackTrace(this, Oe), !this.stack) try {
                    throw new Error(this.message)
                } catch (t) {
                    this.stack = t.stack
                }
                return this
            };
        var xe = {
            Reporter: De
        };
        const Pe = xe.Reporter,
            je = Fe.Buffer;
        function Ue(t, e) {
            Pe.call(this, e),
                je.isBuffer(t) ? (this.base = t, this.offset = 0, this.length = t.length) : this.error("Input not Buffer")
        }
        ee(Ue, Pe);
        var Ie = Ue;
        function Ne(t, e) {
            if (Array.isArray(t)) this.length = 0,
                this.value = t.map((function (t) {
                    return Ne.isEncoderBuffer(t) || (t = new Ne(t, e)),
                        this.length += t.length,
                        t
                }), this);
            else if ("number" == typeof t) {
                if (!(0 <= t && t <= 255)) return e.error("non-byte EncoderBuffer value");
                this.value = t,
                    this.length = 1
            } else if ("string" == typeof t) this.value = t,
                this.length = je.byteLength(t);
            else {
                if (!je.isBuffer(t)) return e.error("Unsupported type: " + typeof t);
                this.value = t,
                    this.length = t.length
            }
        }
        Ue.isDecoderBuffer = function (t) {
            if (t instanceof Ue) return !0;
            return "object" == typeof t && je.isBuffer(t.base) && "DecoderBuffer" === t.constructor.name && "number" == typeof t.offset && "number" == typeof t.length && "function" == typeof t.save && "function" == typeof t.restore && "function" == typeof t.isEmpty && "function" == typeof t.readUInt8 && "function" == typeof t.skip && "function" == typeof t.raw
        },
            Ue.prototype.save = function () {
                return {
                    offset: this.offset,
                    reporter: Pe.prototype.save.call(this)
                }
            },
            Ue.prototype.restore = function (t) {
                const e = new Ue(this.base);
                return e.offset = t.offset,
                    e.length = this.offset,
                    this.offset = t.offset,
                    Pe.prototype.restore.call(this, t.reporter),
                    e
            },
            Ue.prototype.isEmpty = function () {
                return this.offset === this.length
            },
            Ue.prototype.readUInt8 = function (t) {
                return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(t || "DecoderBuffer overrun")
            },
            Ue.prototype.skip = function (t, e) {
                if (!(this.offset + t <= this.length)) return this.error(e || "DecoderBuffer overrun");
                const r = new Ue(this.base);
                return r._reporterState = this._reporterState,
                    r.offset = this.offset,
                    r.length = this.offset + t,
                    this.offset += t,
                    r
            },
            Ue.prototype.raw = function (t) {
                return this.base.slice(t ? t.offset : this.offset, this.length)
            };
        var qe = Ne;
        Ne.isEncoderBuffer = function (t) {
            if (t instanceof Ne) return !0;
            return "object" == typeof t && "EncoderBuffer" === t.constructor.name && "number" == typeof t.length && "function" == typeof t.join
        },
            Ne.prototype.join = function (t, e) {
                return t || (t = je.alloc(this.length)),
                    e || (e = 0),
                    0 === this.length || (Array.isArray(this.value) ? this.value.forEach((function (r) {
                        r.join(t, e),
                            e += r.length
                    })) : ("number" == typeof this.value ? t[e] = this.value : "string" == typeof this.value ? t.write(this.value, e) : je.isBuffer(this.value) && this.value.copy(t, e), e += this.length)),
                    t
            };
        var Le = {
            DecoderBuffer: Ie,
            EncoderBuffer: qe
        },
            Ye = ze;
        function ze(t, e) {
            if (!t) throw new Error(e || "Assertion failed")
        }
        ze.equal = function (t, e, r) {
            if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e)
        };
        const Ke = xe.Reporter,
            Xe = Le.EncoderBuffer,
            Ze = Le.DecoderBuffer,
            Ve = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"],
            He = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(Ve);
        function Ge(t, e, r) {
            const i = {};
            this._baseState = i,
                i.name = r,
                i.enc = t,
                i.parent = e || null,
                i.children = null,
                i.tag = null,
                i.args = null,
                i.reverseArgs = null,
                i.choice = null,
                i.optional = !1,
                i.any = !1,
                i.obj = !1,
                i.use = null,
                i.useDecoder = null,
                i.key = null,
                i
                    .default = null,
                i.explicit = null,
                i.implicit = null,
                i.contains = null,
                i.parent || (i.children = [], this._wrap())
        }
        var Je = Ge;
        const $e = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
        Ge.prototype.clone = function () {
            const t = this._baseState,
                e = {};
            $e.forEach((function (r) {
                e[r] = t[r]
            }));
            const r = new this.constructor(e.parent);
            return r._baseState = e,
                r
        },
            Ge.prototype._wrap = function () {
                const t = this._baseState;
                He.forEach((function (e) {
                    this[e] = function () {
                        const r = new this.constructor(this);
                        return t.children.push(r),
                            r[e].apply(r, arguments)
                    }
                }), this)
            },
            Ge.prototype._init = function (t) {
                const e = this._baseState;
                Ye(null === e.parent),
                    t.call(this),
                    e.children = e.children.filter((function (t) {
                        return t._baseState.parent === this
                    }), this),
                    Ye.equal(e.children.length, 1, "Root node can have only one child")
            },
            Ge.prototype._useArgs = function (t) {
                const e = this._baseState,
                    r = t.filter((function (t) {
                        return t instanceof this.constructor
                    }), this);
                t = t.filter((function (t) {
                    return !(t instanceof this.constructor)
                }), this),
                    0 !== r.length && (Ye(null === e.children), e.children = r, r.forEach((function (t) {
                        t._baseState.parent = this
                    }), this)),
                    0 !== t.length && (Ye(null === e.args), e.args = t, e.reverseArgs = t.map((function (t) {
                        if ("object" != typeof t || t.constructor !== Object) return t;
                        const e = {};
                        return Object.keys(t).forEach((function (r) {
                            r == (0 | r) && (r |= 0);
                            const i = t[r];
                            e[i] = r
                        })),
                            e
                    })))
            },
            ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"].forEach((function (t) {
                Ge.prototype[t] = function () {
                    const e = this._baseState;
                    throw new Error(t + " not implemented for encoding: " + e.enc)
                }
            })),
            Ve.forEach((function (t) {
                Ge.prototype[t] = function () {
                    const e = this._baseState,
                        r = Array.prototype.slice.call(arguments);
                    return Ye(null === e.tag),
                        e.tag = t,
                        this._useArgs(r),
                        this
                }
            })),
            Ge.prototype.use = function (t) {
                Ye(t);
                const e = this._baseState;
                return Ye(null === e.use),
                    e.use = t,
                    this
            },
            Ge.prototype.optional = function () {
                return this._baseState.optional = !0,
                    this
            },
            Ge.prototype.def = function (t) {
                const e = this._baseState;
                return Ye(null === e
                    .default),
                    e
                        .default = t,
                    e.optional = !0,
                    this
            },
            Ge.prototype.explicit = function (t) {
                const e = this._baseState;
                return Ye(null === e.explicit && null === e.implicit),
                    e.explicit = t,
                    this
            },
            Ge.prototype.implicit = function (t) {
                const e = this._baseState;
                return Ye(null === e.explicit && null === e.implicit),
                    e.implicit = t,
                    this
            },
            Ge.prototype.obj = function () {
                const t = this._baseState,
                    e = Array.prototype.slice.call(arguments);
                return t.obj = !0,
                    0 !== e.length && this._useArgs(e),
                    this
            },
            Ge.prototype.key = function (t) {
                const e = this._baseState;
                return Ye(null === e.key),
                    e.key = t,
                    this
            },
            Ge.prototype.any = function () {
                return this._baseState.any = !0,
                    this
            },
            Ge.prototype.choice = function (t) {
                const e = this._baseState;
                return Ye(null === e.choice),
                    e.choice = t,
                    this._useArgs(Object.keys(t).map((function (e) {
                        return t[e]
                    }))),
                    this
            },
            Ge.prototype.contains = function (t) {
                const e = this._baseState;
                return Ye(null === e.use),
                    e.contains = t,
                    this
            },
            Ge.prototype._decode = function (t, e) {
                const r = this._baseState;
                if (null === r.parent) return t.wrapResult(r.children[0]._decode(t, e));
                let i,
                    n = r
                        .default,
                    o = !0,
                    s = null;
                if (null !== r.key && (s = t.enterKey(r.key)), r.optional) {
                    let i = null;
                    if (null !== r.explicit ? i = r.explicit : null !== r.implicit ? i = r.implicit : null !== r.tag && (i = r.tag), null !== i || r.any) {
                        if (o = this._peekTag(t, i, r.any), t.isError(o)) return o
                    } else {
                        const i = t.save();
                        try {
                            null === r.choice ? this._decodeGeneric(r.tag, t, e) : this._decodeChoice(t, e),
                                o = !0
                        } catch (t) {
                            o = !1
                        }
                        t.restore(i)
                    }
                }
                if (r.obj && o && (i = t.enterObject()), o) {
                    if (null !== r.explicit) {
                        const e = this._decodeTag(t, r.explicit);
                        if (t.isError(e)) return e;
                        t = e
                    }
                    const i = t.offset;
                    if (null === r.use && null === r.choice) {
                        let e;
                        r.any && (e = t.save());
                        const i = this._decodeTag(t, null !== r.implicit ? r.implicit : r.tag, r.any);
                        if (t.isError(i)) return i;
                        r.any ? n = t.raw(e) : t = i
                    }
                    if (e && e.track && null !== r.tag && e.track(t.path(), i, t.length, "tagged"), e && e.track && null !== r.tag && e.track(t.path(), t.offset, t.length, "content"), r.any || (n = null === r.choice ? this._decodeGeneric(r.tag, t, e) : this._decodeChoice(t, e)), t.isError(n)) return n;
                    if (r.any || null !== r.choice || null === r.children || r.children.forEach((function (r) {
                        r._decode(t, e)
                    })), r.contains && ("octstr" === r.tag || "bitstr" === r.tag)) {
                        const i = new Ze(n);
                        n = this._getUse(r.contains, t._reporterState.obj)._decode(i, e)
                    }
                }
                return r.obj && o && (n = t.leaveObject(i)),
                    null === r.key || null === n && !0 !== o ? null !== s && t.exitKey(s) : t.leaveKey(s, r.key, n),
                    n
            },
            Ge.prototype._decodeGeneric = function (t, e, r) {
                const i = this._baseState;
                return "seq" === t || "set" === t ? null : "seqof" === t || "setof" === t ? this._decodeList(e, t, i.args[0], r) : /str$/.test(t) ? this._decodeStr(e, t, r) : "objid" === t && i.args ? this._decodeObjid(e, i.args[0], i.args[1], r) : "objid" === t ? this._decodeObjid(e, null, null, r) : "gentime" === t || "utctime" === t ? this._decodeTime(e, t, r) : "null_" === t ? this._decodeNull(e, r) : "bool" === t ? this._decodeBool(e, r) : "objDesc" === t ? this._decodeStr(e, t, r) : "int" === t || "enum" === t ? this._decodeInt(e, i.args && i.args[0], r) : null !== i.use ? this._getUse(i.use, e._reporterState.obj)._decode(e, r) : e.error("unknown tag: " + t)
            },
            Ge.prototype._getUse = function (t, e) {
                const r = this._baseState;
                return r.useDecoder = this._use(t, e),
                    Ye(null === r.useDecoder._baseState.parent),
                    r.useDecoder = r.useDecoder._baseState.children[0],
                    r.implicit !== r.useDecoder._baseState.implicit && (r.useDecoder = r.useDecoder.clone(), r.useDecoder._baseState.implicit = r.implicit),
                    r.useDecoder
            },
            Ge.prototype._decodeChoice = function (t, e) {
                const r = this._baseState;
                let i = null,
                    n = !1;
                return Object.keys(r.choice).some((function (o) {
                    const s = t.save(),
                        h = r.choice[o];
                    try {
                        const r = h._decode(t, e);
                        if (t.isError(r)) return !1;
                        i = {
                            type: o,
                            value: r
                        },
                            n = !0
                    } catch (e) {
                        return t.restore(s),
                            !1
                    }
                    return !0
                }), this),
                    n ? i : t.error("Choice not matched")
            },
            Ge.prototype._createEncoderBuffer = function (t) {
                return new Xe(t, this.reporter)
            },
            Ge.prototype._encode = function (t, e, r) {
                const i = this._baseState;
                if (null !== i
                    .default && i
                        .default === t) return;
                const n = this._encodeValue(t, e, r);
                return void 0 === n || this._skipDefault(n, e, r) ? void 0 : n
            },
            Ge.prototype._encodeValue = function (t, e, r) {
                const i = this._baseState;
                if (null === i.parent) return i.children[0]._encode(t, e || new Ke());
                let n = null;
                if (this.reporter = e, i.optional && void 0 === t) {
                    if (null === i
                        .default) return;
                    t = i
                        .default
                }
                let o = null,
                    s = !1;
                if (i.any) n = this._createEncoderBuffer(t);
                else if (i.choice) n = this._encodeChoice(t, e);
                else if (i.contains) o = this._getUse(i.contains, r)._encode(t, e),
                    s = !0;
                else if (i.children) o = i.children.map((function (r) {
                    if ("null_" === r._baseState.tag) return r._encode(null, e, t);
                    if (null === r._baseState.key) return e.error("Child should have a key");
                    const i = e.enterKey(r._baseState.key);
                    if ("object" != typeof t) return e.error("Child expected, but input is not object");
                    const n = r._encode(t[r._baseState.key], e, t);
                    return e.leaveKey(i),
                        n
                }), this).filter((function (t) {
                    return t
                })),
                    o = this._createEncoderBuffer(o);
                else if ("seqof" === i.tag || "setof" === i.tag) {
                    if (!i.args || 1 !== i.args.length) return e.error("Too many args for : " + i.tag);
                    if (!Array.isArray(t)) return e.error("seqof/setof, but data is not Array");
                    const r = this.clone();
                    r._baseState.implicit = null,
                        o = this._createEncoderBuffer(t.map((function (r) {
                            const i = this._baseState;
                            return this._getUse(i.args[0], t)._encode(r, e)
                        }), r))
                } else null !== i.use ? n = this._getUse(i.use, r)._encode(t, e) : (o = this._encodePrimitive(i.tag, t), s = !0);
                if (!i.any && null === i.choice) {
                    const t = null !== i.implicit ? i.implicit : i.tag,
                        r = null === i.implicit ? "universal" : "context";
                    null === t ? null === i.use && e.error("Tag could be omitted only for .use()") : null === i.use && (n = this._encodeComposite(t, s, r, o))
                }
                return null !== i.explicit && (n = this._encodeComposite(i.explicit, !1, "context", n)),
                    n
            },
            Ge.prototype._encodeChoice = function (t, e) {
                const r = this._baseState,
                    i = r.choice[t.type];
                return i || Ye(!1, t.type + " not found in " + JSON.stringify(Object.keys(r.choice))),
                    i._encode(t.value, e)
            },
            Ge.prototype._encodePrimitive = function (t, e) {
                const r = this._baseState;
                if (/str$/.test(t)) return this._encodeStr(e, t);
                if ("objid" === t && r.args) return this._encodeObjid(e, r.reverseArgs[0], r.args[1]);
                if ("objid" === t) return this._encodeObjid(e, null, null);
                if ("gentime" === t || "utctime" === t) return this._encodeTime(e, t);
                if ("null_" === t) return this._encodeNull();
                if ("int" === t || "enum" === t) return this._encodeInt(e, r.args && r.reverseArgs[0]);
                if ("bool" === t) return this._encodeBool(e);
                if ("objDesc" === t) return this._encodeStr(e, t);
                throw new Error("Unsupported tag: " + t)
            },
            Ge.prototype._isNumstr = function (t) {
                return /^[0-9 ]*$/.test(t)
            },
            Ge.prototype._isPrintstr = function (t) {
                return /^[A-Za-z0-9 '()+,-./: =?] * $ /.test(t)
            };
        var Qe = gt((function (t, e) {
            function r(t) {
                const e = {};
                return Object.keys(t).forEach((function (r) {
                    (0 | r) == r && (r |= 0);
                    const i = t[r];
                    e[i] = r
                })),
                    e
            }
            e.tagClass = {
                0: "universal",
                1: "application",
                2: "context",
                3: "private"
            },
                e.tagClassByName = r(e.tagClass),
                e.tag = {
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
                },
                e.tagByName = r(e.tag)
        })); const We = Fe.Buffer;
        function tr(t) {
            this.enc = "der",
                this.name = t.name,
                this.entity = t,
                this.tree = new rr(),
                this.tree._init(t.body)
        }
        var er = tr;
        function rr(t) {
            Je.call(this, "der", t)
        }
        function ir(t) {
            return t < 10 ? "0" + t : t
        }
        function nr(t) {
            er.call(this, t),
                this.enc = "pem"
        }
        tr.prototype.encode = function (t, e) {
            return this.tree._encode(t, e).join()
        },
            ee(rr, Je), rr.prototype._encodeComposite = function (t, e, r, i) {
                const n = function (t, e, r, i) {
                    let n;
                    "seqof" === t ? t = "seq" : "setof" === t && (t = "set");
                    if (Qe.tagByName.hasOwnProperty(t)) n = Qe.tagByName[t];
                    else {
                        if ("number" != typeof t || (0 | t) !== t) return i.error("Unknown tag: " + t);
                        n = t
                    }
                    if (n >= 31) return i.error("Multi-octet tag encoding unsupported");
                    e || (n |= 32);
                    return n |= Qe.tagClassByName[r || "universal"] << 6,
                        n
                }(t, e, r, this.reporter);
                if (i.length < 128) {
                    const t = We.alloc(2);
                    return t[0] = n,
                        t[1] = i.length,
                        this._createEncoderBuffer([t, i])
                }
                let o = 1;
                for (let t = i.length; t >= 256; t >>= 8) o++;
                const s = We.alloc(2 + o);
                s[0] = n,
                    s[1] = 128 | o;
                for (let t = 1 + o, e = i.length; e > 0; t--, e >>= 8) s[t] = 255 & e;
                return this._createEncoderBuffer([s, i])
            },
            rr.prototype._encodeStr = function (t, e) {
                if ("bitstr" === e) return this._createEncoderBuffer([0 | t.unused, t.data]);
                if ("bmpstr" === e) {
                    const e = We.alloc(2 * t.length);
                    for (let r = 0; r < t.length; r++) e.writeUInt16BE(t.charCodeAt(r), 2 * r);
                    return this._createEncoderBuffer(e)
                }
                return "numstr" === e ? this._isNumstr(t) ? this._createEncoderBuffer(t) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : "printstr" === e ? this._isPrintstr(t) ? this._createEncoderBuffer(t) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : /str$/.test(e) || "objDesc" === e ? this._createEncoderBuffer(t) : this.reporter.error("Encoding of string type: " + e + " unsupported")
            },
            rr.prototype._encodeObjid = function (t, e, r) {
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
                    if (t[1] >= 40) return this.reporter.error("Second objid identifier OOB");
                    t.splice(0, 2, 40 * t[0] + t[1])
                }
                let i = 0;
                for (let e = 0; e < t.length; e++) {
                    let r = t[e];
                    for (i++; r >= 128; r >>= 7) i++
                }
                const n = We.alloc(i);
                let o = n.length - 1;
                for (let e = t.length - 1; e >= 0; e--) {
                    let r = t[e];
                    for (n[o--] = 127 & r; (r >>= 7) > 0;) n[o--] = 128 | 127 & r
                }
                return this._createEncoderBuffer(n)
            },
            rr.prototype._encodeTime = function (t, e) {
                let r;
                const i = new Date(t);
                return "gentime" === e ? r = [ir(i.getUTCFullYear()), ir(i.getUTCMonth() + 1), ir(i.getUTCDate()), ir(i.getUTCHours()), ir(i.getUTCMinutes()), ir(i.getUTCSeconds()), "Z"].join("") : "utctime" === e ? r = [ir(i.getUTCFullYear() % 100), ir(i.getUTCMonth() + 1), ir(i.getUTCDate()), ir(i.getUTCHours()), ir(i.getUTCMinutes()), ir(i.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + e + " time is not supported yet"),
                    this._encodeStr(r, "octstr")
            },
            rr.prototype._encodeNull = function () {
                return this._createEncoderBuffer("")
            },
            rr.prototype._encodeInt = function (t, e) {
                if ("string" == typeof t) {
                    if (!e) return this.reporter.error("String int or enum given, but no values map");
                    if (!e.hasOwnProperty(t)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(t));
                    t = e[t]
                }
                if ("number" != typeof t && !We.isBuffer(t)) {
                    const e = t.toArray(); !t.sign && 128 & e[0] && e.unshift(0),
                        t = We.from(e)
                }
                if (We.isBuffer(t)) {
                    let e = t.length;
                    0 === t.length && e++;
                    const r = We.alloc(e);
                    return t.copy(r),
                        0 === t.length && (r[0] = 0),
                        this._createEncoderBuffer(r)
                }
                if (t < 128) return this._createEncoderBuffer(t);
                if (t < 256) return this._createEncoderBuffer([0, t]);
                let r = 1;
                for (let e = t; e >= 256; e >>= 8) r++;
                const i = new Array(r);
                for (let e = i.length - 1; e >= 0; e--) i[e] = 255 & t,
                    t >>= 8;
                return 128 & i[0] && i.unshift(0),
                    this._createEncoderBuffer(We.from(i))
            },
            rr.prototype._encodeBool = function (t) {
                return this._createEncoderBuffer(t ? 255 : 0)
            },
            rr.prototype._use = function (t, e) {
                return "function" == typeof t && (t = t(e)),
                    t._getEncoder("der").tree
            },
            rr.prototype._skipDefault = function (t, e, r) {
                const i = this._baseState;
                let n;
                if (null === i
                    .default) return !1;
                const o = t.join();
                if (void 0 === i.defaultBuffer && (i.defaultBuffer = this._encodeValue(i
                    .default, e, r).join()), o.length !== i.defaultBuffer.length) return !1;
                for (n = 0; n < o.length; n++) if (o[n] !== i.defaultBuffer[n]) return !1;
                return !0
            },
            ee(nr, er);
        var or = nr; nr.prototype.encode = function (t, e) {
            const r = er.prototype.encode.call(this, t).toString("base64"),
                i = ["-----BEGIN " + e.label + "-----"];
            for (let t = 0; t < r.length; t += 64) i.push(r.slice(t, t + 64));
            return i.push("-----END " + e.label + "-----"),
                i.join("\n")
        };
        var sr = gt((function (t, e) {
            const r = e;
            r.der = er,
                r.pem = or
        })); const hr = Le.DecoderBuffer;
        function ur(t) {
            this.enc = "der",
                this.name = t.name,
                this.entity = t,
                this.tree = new fr(),
                this.tree._init(t.body)
        }
        var ar = ur;
        function fr(t) {
            Je.call(this, "der", t)
        }
        function lr(t, e) {
            let r = t.readUInt8(e);
            if (t.isError(r)) return r;
            const i = Qe.tagClass[r >> 6],
                n = 0 == (32 & r);
            if (31 == (31 & r)) {
                let i = r;
                for (r = 0; 128 == (128 & i);) {
                    if (i = t.readUInt8(e), t.isError(i)) return i;
                    r <<= 7,
                        r |= 127 & i
                }
            } else r &= 31;
            return {
                cls: i,
                primitive: n,
                tag: r,
                tagStr: Qe.tag[r]
            }
        }
        function cr(t, e, r) {
            let i = t.readUInt8(r);
            if (t.isError(i)) return i;
            if (!e && 128 === i) return null;
            if (0 == (128 & i)) return i;
            const n = 127 & i;
            if (n > 4) return t.error("length octect is too long");
            i = 0;
            for (let e = 0; e < n; e++) {
                i <<= 8;
                const e = t.readUInt8(r);
                if (t.isError(e)) return e;
                i |= e
            }
            return i
        }
        ur.prototype.decode = function (t, e) {
            return hr.isDecoderBuffer(t) || (t = new hr(t, e)),
                this.tree._decode(t, e)
        },
            ee(fr, Je), fr.prototype._peekTag = function (t, e, r) {
                if (t.isEmpty()) return !1;
                const i = t.save(),
                    n = lr(t, 'Failed to peek tag: "' + e + '"');
                return t.isError(n) ? n : (t.restore(i), n.tag === e || n.tagStr === e || n.tagStr + "of" === e || r)
            },
            fr.prototype._decodeTag = function (t, e, r) {
                const i = lr(t, 'Failed to decode tag of "' + e + '"');
                if (t.isError(i)) return i;
                let n = cr(t, i.primitive, 'Failed to get length of "' + e + '"');
                if (t.isError(n)) return n;
                if (!r && i.tag !== e && i.tagStr !== e && i.tagStr + "of" !== e) return t.error('Failed to match tag: "' + e + '"');
                if (i.primitive || null !== n) return t.skip(n, 'Failed to match body of: "' + e + '"');
                const o = t.save(),
                    s = this._skipUntilEnd(t, 'Failed to skip indefinite length body: "' + this.tag + '"');
                return t.isError(s) ? s : (n = t.offset - o.offset, t.restore(o), t.skip(n, 'Failed to match body of: "' + e + '"'))
            },
            fr.prototype._skipUntilEnd = function (t, e) {
                for (; ;) {
                    const r = lr(t, e);
                    if (t.isError(r)) return r;
                    const i = cr(t, r.primitive, e);
                    if (t.isError(i)) return i;
                    let n;
                    if (n = r.primitive || null !== i ? t.skip(i) : this._skipUntilEnd(t, e), t.isError(n)) return n;
                    if ("end" === r.tagStr) break
                }
            },
            fr.prototype._decodeList = function (t, e, r, i) {
                const n = [];
                for (; !t.isEmpty();) {
                    const e = this._peekTag(t, "end");
                    if (t.isError(e)) return e;
                    const o = r.decode(t, "der", i);
                    if (t.isError(o) && e) break;
                    n.push(o)
                }
                return n
            },
            fr.prototype._decodeStr = function (t, e) {
                if ("bitstr" === e) {
                    const e = t.readUInt8();
                    return t.isError(e) ? e : {
                        unused: e,
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
                if ("numstr" === e) {
                    const e = t.raw().toString("ascii");
                    return this._isNumstr(e) ? e : t.error("Decoding of string type: numstr unsupported characters")
                }
                if ("octstr" === e) return t.raw();
                if ("objDesc" === e) return t.raw();
                if ("printstr" === e) {
                    const e = t.raw().toString("ascii");
                    return this._isPrintstr(e) ? e : t.error("Decoding of string type: printstr unsupported characters")
                }
                return /str$/.test(e) ? t.raw().toString() : t.error("Decoding of string type: " + e + " unsupported")
            },
            fr.prototype._decodeObjid = function (t, e, r) {
                let i;
                const n = [];
                let o = 0,
                    s = 0;
                for (; !t.isEmpty();) s = t.readUInt8(),
                    o <<= 7,
                    o |= 127 & s,
                    0 == (128 & s) && (n.push(o), o = 0);
                128 & s && n.push(o);
                const h = n[0] / 40 | 0,
                    u = n[0] % 40;
                if (i = r ? n : [h, u].concat(n.slice(1)), e) {
                    let t = e[i.join(" ")];
                    void 0 === t && (t = e[i.join(".")]),
                        void 0 !== t && (i = t)
                }
                return i
            },
            fr.prototype._decodeTime = function (t, e) {
                const r = t.raw().toString();
                let i,
                    n,
                    o,
                    s,
                    h,
                    u;
                if ("gentime" === e) i = 0 | r.slice(0, 4),
                    n = 0 | r.slice(4, 6),
                    o = 0 | r.slice(6, 8),
                    s = 0 | r.slice(8, 10),
                    h = 0 | r.slice(10, 12),
                    u = 0 | r.slice(12, 14);
                else {
                    if ("utctime" !== e) return t.error("Decoding " + e + " time is not supported yet");
                    i = 0 | r.slice(0, 2),
                        n = 0 | r.slice(2, 4),
                        o = 0 | r.slice(4, 6),
                        s = 0 | r.slice(6, 8),
                        h = 0 | r.slice(8, 10),
                        u = 0 | r.slice(10, 12),
                        i = i < 70 ? 2e3 + i : 1900 + i
                }
                return Date.UTC(i, n - 1, o, s, h, u, 0)
            },
            fr.prototype._decodeNull = function () {
                return null
            },
            fr.prototype._decodeBool = function (t) {
                const e = t.readUInt8();
                return t.isError(e) ? e : 0 !== e
            },
            fr.prototype._decodeInt = function (t, e) {
                const r = t.raw();
                let i = new te(r);
                return e && (i = e[i.toString(10)] || i),
                    i
            },
            fr.prototype._use = function (t, e) {
                return "function" == typeof t && (t = t(e)),
                    t._getDecoder("der").tree
            }; const pr = Fe.Buffer;
        function dr(t) {
            ar.call(this, t),
                this.enc = "pem"
        }
        ee(dr, ar);
        var mr = dr; dr.prototype.decode = function (t, e) {
            const r = t.toString().split(/[\r\n]+/g),
                i = e.label.toUpperCase(),
                n = /^-----(BEGIN|END) ([^-]+)-----$/;
            let o = -1,
                s = -1;
            for (let t = 0; t < r.length; t++) {
                const e = r[t].match(n);
                if (null !== e && e[2] === i) {
                    if (- 1 !== o) {
                        if ("END" !== e[1]) break;
                        s = t;
                        break
                    }
                    if ("BEGIN" !== e[1]) break;
                    o = t
                }
            }
            if (- 1 === o || -1 === s) throw new Error("PEM section not found for: " + i);
            const h = r.slice(o + 1, s).join("");
            h.replace(/[^a-z0-9+/ = ] + /gi, ""); const u = pr.from(h, "base64"); return ar.prototype.decode.call(this, u, e)
        }; var yr = gt((function (t, e) { const r = e; r.der = ar, r.pem = mr })), gr = gt((function (t, e) { function r(t, e) { this.name = t, this.body = e, this.decoders = {}, this.encoders = {} } e.define = function (t, e) { return new r(t, e) }, r.prototype._createNamed = function (t) { const e = this.name; function r(t) { this._initNamed(t, e) } return ee(r, t), r.prototype._initNamed = function (e, r) { t.call(this, e, r) }, new r(this) }, r.prototype._getDecoder = function (t) { return t = t || "der", this.decoders.hasOwnProperty(t) || (this.decoders[t] = this._createNamed(yr[t])), this.decoders[t] }, r.prototype.decode = function (t, e, r) { return this._getDecoder(e).decode(t, r) }, r.prototype._getEncoder = function (t) { return t = t || "der", this.encoders.hasOwnProperty(t) || (this.encoders[t] = this._createNamed(sr[t])), this.encoders[t] }, r.prototype.encode = function (t, e, r) { return this._getEncoder(e).encode(t, r) } })), vr = gt((function (t, e) { const r = e; r.Reporter = xe.Reporter, r.DecoderBuffer = Le.DecoderBuffer, r.EncoderBuffer = Le.EncoderBuffer, r.Node = Je })), wr = gt((function (t, e) { const r = e; r._reverse = function (t) { const e = {}; return Object.keys(t).forEach((function (r) { (0 | r) == r && (r |= 0); const i = t[r]; e[i] = r })), e }, r.der = Qe })), br = gt((function (t, e) { const r = e; r.bignum = te, r.define = gr.define, r.base = vr, r.constants = wr, r.decoders = yr, r.encoders = sr })); const { BigInteger: Mr, SecureRandom: Tr } = vt, _r = br.bignum, Er = new Tr(), Ar = br.define("ASN1_SM2EncryptFormat", (function () { this.seq().obj(this.key("X").int(), this.key("Y").int(), this.key("Hash").octstr(), this.key("Cipher").octstr()) })), Sr = br.define("ASN1_SM2SignFormat", (function () { this.seq().obj(this.key("R").int(), this.key("S").int()) })); var Br = class { constructor() { this.curve = new bt(), this.ecmath = new Qt(), this.sm3 = new Xt() } encrypt(t, e) { const r = new Mr(this.curve.n.bitLength(), Er).mod(this.curve.n.subtract(Mr.ONE)).add(Mr.ONE), i = this.ecmath.ECPointMultiplyG(r), n = Zt.normalize(i.X.toByteArray()), o = Zt.normalize(i.Y.toByteArray()), s = new Tt(t.substr(2, 64), t.substr(66, 64)), h = this.ecmath.ECPointMultiply(s, r), u = Zt.normalize(h.X.toByteArray()), a = Zt.normalize(h.Y.toByteArray()), f = u.concat(a), l = Jt.kdf(f, e.length); let c = !0; for (let t = 0; t < l.length; t++)if (0 != l[t]) { c = !1; break } if (c) return this.encrypt(t, e); const p = new Array(e.length); for (let t = 0; t < e.length; t++)p[t] = e[t] ^ l[t]; const d = u.concat(Array.prototype.slice.call(e)).concat(a); this.sm3.init(), this.sm3.update(d); const m = this.sm3.final(), y = Ar.encode({ X: new _r(It.byteArrayToHex(n), 16), Y: new _r(It.byteArrayToHex(o), 16), Hash: m, Cipher: p }, "der"); return It.byteArrayToHex(y) } decrypt(t, e) { const r = R.from(It.hexToByteArray(e)), i = Ar.decode(r, "der"), n = new Tt(i.X.toString(16), i.Y.toString(16)), o = new Mr(t, 16), s = this.ecmath.ECPointMultiply(n, o), h = Zt.normalize(s.X.toByteArray()), u = Zt.normalize(s.Y.toByteArray()), a = h.concat(u), f = Jt.kdf(a, i.Cipher.length); let l = !0; for (let t = 0; t < f.length; t++)if (0 != f[t]) { l = !1; break } if (l) return -1; const c = new Array(i.Cipher.length); for (let t = 0; t < i.Cipher.length; t++)c[t] = i.Cipher[t] ^ f[t]; const p = h.concat(c).concat(u); this.sm3.init(), this.sm3.update(p); return R.from(this.sm3.final()).equals(i.Hash) ? c : -1 } sign(t, e, r, i) { const n = new Tt(t.substr(2, 64), t.substr(66, 64)), o = Jt.SM2MessageDigest(r, i, n), s = new Mr(this.curve.n.bitLength(), Er).mod(this.curve.n.subtract(Mr.ONE)).add(Mr.ONE), h = this.ecmath.ECPointMultiplyG(s), u = new Mr(It.byteArrayToHex(o), 16).add(h.X).mod(this.curve.n); if (u.equals(this.ecmath.zero)) return this.sign(t, e, r, i); if (u.add(s).equals(this.curve.n)) return this.sign(t, e, r, i); const a = new Mr(e, 16), f = a.add(this.ecmath.one).modInverse(this.curve.n), l = u.multiply(a), c = f.multiply(s.add(l.negate())).mod(this.curve.n); if (c.equals(this.ecmath.zero)) return this.sign(t, e, r, i); const p = Sr.encode({ R: new _r(u.toString(16), 16), S: new _r(c.toString(16), 16) }, "der"); return It.byteArrayToHex(p) } verify(t, e, r, i) { const n = R.from(It.hexToByteArray(i)), o = Sr.decode(n, "der"), s = new Mr(o.R.toString(16), 16), h = new Mr(o.S.toString(16), 16); if (!(s.compareTo(this.ecmath.zero) > 0 && s.compareTo(this.curve.n) < 0)) return !1; if (!(h.compareTo(this.ecmath.zero) > 0 && h.compareTo(this.curve.n) < 0)) return !1; const u = s.add(h).mod(this.curve.n); if (u.equals(this.ecmath.zero)) return !1; const a = this.ecmath.ECPointMultiplyG(h), f = new Tt(t.substr(2, 64), t.substr(66, 64)), l = this.ecmath.ECPointMultiply(f, u), c = this.ecmath.ECPointAdd(a, l), p = Jt.SM2MessageDigest(e, r, f); return !!new Mr(It.byteArrayToHex(p), 16).add(c.X).mod(this.curve.n).equals(s) } genKeyPair() { const t = new Mr(this.curve.n.bitLength(), Er).mod(this.curve.n.subtract(Mr.ONE)).add(Mr.ONE), e = this.ecmath.ECPointMultiplyG(t), r = Zt.normalize(e.X.toByteArray()), i = Zt.normalize(e.Y.toByteArray()), n = It.byteArrayToHex([4, ...r, ...i]); return { privateKey: Zt.leftPad(t.toString(16), 64), publicKey: n } } getPublicKeyFromPrivateKey(t) { const e = this.ecmath.ECPointMultiplyG(new Mr(t, 16)), r = Zt.normalize(e.X.toByteArray()), i = Zt.normalize(e.Y.toByteArray()); return It.byteArrayToHex([4, ...r, ...i]) } kdf(t, e) { return Jt.kdf(t, e) } }; const kr = 16, Rr = Uint8Array.from([214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5, 43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153, 156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98, 228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166, 71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168, 104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53, 30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135, 212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158, 234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161, 224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227, 29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111, 213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81, 141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216, 10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176, 137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132, 24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72]), Fr = Uint32Array.from([462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337, 4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753, 1213159005, 1684763257]), Cr = Uint32Array.from([2746333894, 1453994832, 1736282519, 2993693404]); var Dr = {
            SM2: Br, SM3: Xt, SM4: class {
                constructor(t) { let e = t.key; if ("string" == typeof e && (e = It.stringToByteArrayInUtf8(e)), 16 !== e.length) throw new Error("key should be a 16 bytes string"); this.key = e; let r = new Uint8Array(0); if (void 0 !== t.iv && null !== t.iv && (r = t.iv, "string" == typeof r && (r = It.stringToByteArrayInUtf8(r)), 16 !== r.length)) throw new Error("iv should be a 16 bytes string"); this.iv = r, this.mode = "cbc", ["cbc", "ecb"].indexOf(t.mode) >= 0 && (this.mode = t.mode), this.paddingMode = "PKCS7", ["PKCS7"].indexOf(t.padding) >= 0 && (this.paddingMode = t.padding), this.cipherType = "hex", ["base64", "text", "hex"].indexOf(t.cipherType) >= 0 && (this.cipherType = t.cipherType), this.encryptRoundKeys = new Uint32Array(32), this.spawnEncryptRoundKeys(), this.decryptRoundKeys = Uint32Array.from(this.encryptRoundKeys), this.decryptRoundKeys.reverse() } doBlockCrypt(t, e) { const r = new Uint32Array(36); r.set(t, 0); for (let t = 0; t < 32; t++)r[t + 4] = r[t] ^ this.tTransform1(r[t + 1] ^ r[t + 2] ^ r[t + 3] ^ e[t]); const i = new Uint32Array(4); return i[0] = r[35], i[1] = r[34], i[2] = r[33], i[3] = r[32], i } spawnEncryptRoundKeys() { const t = new Uint32Array(4); t[0] = this.key[0] << 24 | this.key[1] << 16 | this.key[2] << 8 | this.key[3], t[1] = this.key[4] << 24 | this.key[5] << 16 | this.key[6] << 8 | this.key[7], t[2] = this.key[8] << 24 | this.key[9] << 16 | this.key[10] << 8 | this.key[11], t[3] = this.key[12] << 24 | this.key[13] << 16 | this.key[14] << 8 | this.key[15]; const e = new Uint32Array(36); e[0] = t[0] ^ Cr[0], e[1] = t[1] ^ Cr[1], e[2] = t[2] ^ Cr[2], e[3] = t[3] ^ Cr[3]; for (let t = 0; t < 32; t++)e[t + 4] = e[t] ^ this.tTransform2(e[t + 1] ^ e[t + 2] ^ e[t + 3] ^ Fr[t]), this.encryptRoundKeys[t] = e[t + 4] } rotateLeft(t, e) { return t << e | t >>> 32 - e } linearTransform1(t) { return t ^ this.rotateLeft(t, 2) ^ this.rotateLeft(t, 10) ^ this.rotateLeft(t, 18) ^ this.rotateLeft(t, 24) } linearTransform2(t) { return t ^ this.rotateLeft(t, 13) ^ this.rotateLeft(t, 23) } tauTransform(t) { return Rr[t >>> 24 & 255] << 24 | Rr[t >>> 16 & 255] << 16 | Rr[t >>> 8 & 255] << 8 | Rr[255 & t] } tTransform1(t) { const e = this.tauTransform(t); return this.linearTransform1(e) } tTransform2(t) { const e = this.tauTransform(t); return this.linearTransform2(e) } padding(t) { if (null === t) return null; const e = kr - t.length % kr, r = new Uint8Array(t.length + e); return r.set(t, 0), r.fill(e, t.length), r } dePadding(t) { if (null === t) return null; const e = t[t.length - 1]; return t.slice(0, t.length - e) } uint8ToUint32Block(t, e = 0) { const r = new Uint32Array(4); return r[0] = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3], r[1] = t[e + 4] << 24 | t[e + 5] << 16 | t[e + 6] << 8 | t[e + 7], r[2] = t[e + 8] << 24 | t[e + 9] << 16 | t[e + 10] << 8 | t[e + 11], r[3] = t[e + 12] << 24 | t[e + 13] << 16 | t[e + 14] << 8 | t[e + 15], r } encrypt(t) {
                    "string" == typeof t && (t = It.stringToByteArrayInUtf8(t)); const e = this.padding(t), r = e.length / kr,
                        i = new Uint8Array(e.length);
                    if ("cbc" === this.mode) {
                        if (null === this.iv || 16 !== this.iv.length) throw new Error("iv error");
                        let t = this.uint8ToUint32Block(this.iv);
                        for (let n = 0; n < r; n++) {
                            const r = n * kr,
                                o = this.uint8ToUint32Block(e, r);
                            t[0] = t[0] ^ o[0],
                                t[1] = t[1] ^ o[1],
                                t[2] = t[2] ^ o[2],
                                t[3] = t[3] ^ o[3];
                            const s = this.doBlockCrypt(t, this.encryptRoundKeys);
                            t = s;
                            for (let t = 0; t < kr; t++) i[r + t] = s[parseInt(t / 4, 10)] >> (3 - t) % 4 * 8 & 255
                        }
                    } else for (let t = 0; t < r; t++) {
                        const r = t * kr,
                            n = this.uint8ToUint32Block(e, r),
                            o = this.doBlockCrypt(n, this.encryptRoundKeys);
                        for (let t = 0; t < kr; t++) i[r + t] = o[parseInt(t / 4, 10)] >> (3 - t) % 4 * 8 & 255
                    }
                    return "text" === this.cipherType ? It.utf8ByteArrayToString(i) : "hex" === this.cipherType ? It.byteArrayToHex(i) : It.byteArrayToBase64(i)
                }
                decrypt(t) {
                    let e = new Uint8Array();
                    switch (this.cipherType) {
                        case "text":
                            e = It.stringToByteArrayInUtf8(t);
                            break;
                        case "hex":
                            e = It.hexToByteArray(t);
                            break;
                        default:
                            e = It.base64ToByteArray(t)
                    }
                    const r = e.length / kr,
                        i = new Uint8Array(e.length);
                    if ("cbc" === this.mode) {
                        if (null === this.iv || 16 !== this.iv.length) throw new Error("iv error");
                        let t = this.uint8ToUint32Block(this.iv);
                        for (let n = 0; n < r; n++) {
                            const r = n * kr,
                                o = this.uint8ToUint32Block(e, r),
                                s = this.doBlockCrypt(o, this.decryptRoundKeys),
                                h = new Uint32Array(4);
                            h[0] = t[0] ^ s[0],
                                h[1] = t[1] ^ s[1],
                                h[2] = t[2] ^ s[2],
                                h[3] = t[3] ^ s[3],
                                t = o;
                            for (let t = 0; t < kr; t++) i[r + t] = h[parseInt(t / 4, 10)] >> (3 - t) % 4 * 8 & 255
                        }
                    } else for (let t = 0; t < r; t++) {
                        const r = t * kr,
                            n = this.uint8ToUint32Block(e, r),
                            o = this.doBlockCrypt(n, this.decryptRoundKeys);
                        for (let t = 0; t < kr; t++) i[r + t] = o[parseInt(t / 4, 10)] >> (3 - t) % 4 * 8 & 255
                    }
                    const n = this.dePadding(i);
                    return It.utf8ByteArrayToString(n)
                }
            },
            utils: It
        },
            Or = Dr.SM2,
            xr = Dr.SM4,
            Pr = Dr.utils,
            jr = function () {
                function t() {
                    e(this, t)
                }
                return i(t, [{
                    key: "stringToByteArrayInUtf8",
                    value: function (t) {
                        return Pr.stringToByteArrayInUtf8(t)
                    }
                },
                {
                    key: "utf8ByteArrayToString",
                    value: function (t) {
                        return Pr.utf8ByteArrayToString(t)
                    }
                }]),
                    t
            }(),
            Ur = function (t) {
                h(n, t);
                var r = l(n);
                function n() {
                    var t;
                    return e(this, n),
                        (t = r.call(this)).SM2 = new Or(),
                        t
                }
                return i(n, [{
                    key: "encrypt",
                    value: function (t, e) {
                        return this.SM2.encrypt(t, this.stringToByteArrayInUtf8(e))
                    }
                },
                {
                    key: "decrypt",
                    value: function (t, e) {
                        var r = this.SM2.decrypt(t, e);
                        return this.utf8ByteArrayToString(r)
                    }
                },
                {
                    key: "genKeyPair",
                    value: function () {
                        return this.SM2.genKeyPair()
                    }
                }]),
                    n
            }(jr),
            Ir = function (t) {
                h(n, t);
                var r = l(n);
                function n() {
                    return e(this, n),
                        r.apply(this, arguments)
                }
                return i(n, [{
                    key: "encrypt",
                    value: function (t, e) {
                        var r = new xr({
                            key: this.stringToByteArrayInUtf8(t),
                            mode: "ecb"
                        }),
                            i = this.stringToByteArrayInUtf8(e);
                        return r.encrypt(i)
                    }
                },
                {
                    key: "decrypt",
                    value: function (t, e) {
                        return new xr({
                            key: this.stringToByteArrayInUtf8(t),
                            mode: "ecb"
                        }).decrypt(e)
                    }
                }]),
                    n
            }(jr),
            Nr = {
                sm2Crypto: new Ur(),
                sm4Crypto: new Ir()
            },
            qr = Nr.sm2Crypto;
        var Lr = function (t) {
            t.prototype.init = function (t) {
                var e = t.serverPubKey,
                    r = t.tmfProductid,
                    i = t.tmfKeyid,
                    n = qr.genKeyPair(),
                    o = n.privateKey,
                    s = n.publicKey;
                this.clientPriKey = o,
                    this.clientPubKey = s,
                    this.serverPubKey = e,
                    this.baseHeader = {
                        tmf_productid: r,
                        tmf_keyid: i
                    },
                    this.TMFSessionID = "",
                    this.randomKey = ""
            }
        },
            Yr = function (t, e) {
                return function () {
                    for (var r = new Array(arguments.length), i = 0; i < r.length; i++) r[i] = arguments[i];
                    return t.apply(e, r)
                }
            },
            zr = Object.prototype.toString;
        function Kr(t) {
            return "[object Array]" === zr.call(t)
        }
        function Xr(t) {
            return void 0 === t
        }
        function Zr(t) {
            return null !== t && "object" == typeof t
        }
        function Vr(t) {
            if ("[object Object]" !== zr.call(t)) return !1;
            var e = Object.getPrototypeOf(t);
            return null === e || e === Object.prototype
        }
        function Hr(t) {
            return "[object Function]" === zr.call(t)
        }
        function Gr(t, e) {
            if (null != t) if ("object" != typeof t && (t = [t]), Kr(t)) for (var r = 0,
                i = t.length; r < i; r++) e.call(null, t[r], r, t);
            else for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.call(null, t[n], n, t)
        }
        var Jr = {
            isArray: Kr,
            isArrayBuffer: function (t) {
                return "[object ArrayBuffer]" === zr.call(t)
            },
            isBuffer: function (t) {
                return null !== t && !Xr(t) && null !== t.constructor && !Xr(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
            },
            isFormData: function (t) {
                return "undefined" != typeof FormData && t instanceof FormData
            },
            isArrayBufferView: function (t) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
            },
            isString: function (t) {
                return "string" == typeof t
            },
            isNumber: function (t) {
                return "number" == typeof t
            },
            isObject: Zr,
            isPlainObject: Vr,
            isUndefined: Xr,
            isDate: function (t) {
                return "[object Date]" === zr.call(t)
            },
            isFile: function (t) {
                return "[object File]" === zr.call(t)
            },
            isBlob: function (t) {
                return "[object Blob]" === zr.call(t)
            },
            isFunction: Hr,
            isStream: function (t) {
                return Zr(t) && Hr(t.pipe)
            },
            isURLSearchParams: function (t) {
                return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
            },
            isStandardBrowserEnv: function () {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
            },
            forEach: Gr,
            merge: function t() {
                var e = {};
                function r(r, i) {
                    Vr(e[i]) && Vr(r) ? e[i] = t(e[i], r) : Vr(r) ? e[i] = t({},
                        r) : Kr(r) ? e[i] = r.slice() : e[i] = r
                }
                for (var i = 0,
                    n = arguments.length; i < n; i++) Gr(arguments[i], r);
                return e
            },
            extend: function (t, e, r) {
                return Gr(e, (function (e, i) {
                    t[i] = r && "function" == typeof e ? Yr(e, r) : e
                })),
                    t
            },
            trim: function (t) {
                return t.replace(/^\s*/, "").replace(/\s*$/, "")
            },
            stripBOM: function (t) {
                return 65279 === t.charCodeAt(0) && (t = t.slice(1)),
                    t
            }
        };
        function $r(t) {
            return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        var Qr = function (t, e, r) {
            if (!e) return t;
            var i;
            if (r) i = r(e);
            else if (Jr.isURLSearchParams(e)) i = e.toString();
            else {
                var n = [];
                Jr.forEach(e, (function (t, e) {
                    null != t && (Jr.isArray(t) ? e += "[]" : t = [t], Jr.forEach(t, (function (t) {
                        Jr.isDate(t) ? t = t.toISOString() : Jr.isObject(t) && (t = JSON.stringify(t)),
                            n.push($r(e) + "=" + $r(t))
                    })))
                })),
                    i = n.join("&")
            }
            if (i) {
                var o = t.indexOf("#"); - 1 !== o && (t = t.slice(0, o)),
                    t += (- 1 === t.indexOf("?") ? "?" : "&") + i
            }
            return t
        };
        function Wr() {
            this.handlers = []
        }
        Wr.prototype.use = function (t, e) {
            return this.handlers.push({
                fulfilled: t,
                rejected: e
            }),
                this.handlers.length - 1
        },
            Wr.prototype.eject = function (t) {
                this.handlers[t] && (this.handlers[t] = null)
            },
            Wr.prototype.forEach = function (t) {
                Jr.forEach(this.handlers, (function (e) {
                    null !== e && t(e)
                }))
            };
        var ti = Wr,
            ei = function (t, e, r) {
                return Jr.forEach(r, (function (r) {
                    t = r(t, e)
                })),
                    t
            },
            ri = function (t) {
                return !(!t || !t.__CANCEL__)
            },
            ii = function (t, e) {
                Jr.forEach(t, (function (r, i) {
                    i !== e && i.toUpperCase() === e.toUpperCase() && (t[e] = r, delete t[i])
                }))
            },
            ni = function (t, e, r, i, n) {
                return function (t, e, r, i, n) {
                    return t.config = e,
                        r && (t.code = r),
                        t.request = i,
                        t.response = n,
                        t.isAxiosError = !0,
                        t.toJSON = function () {
                            return {
                                message: this.message,
                                name: this.name,
                                description: this.description,
                                number: this.number,
                                fileName: this.fileName,
                                lineNumber: this.lineNumber,
                                columnNumber: this.columnNumber,
                                stack: this.stack,
                                config: this.config,
                                code: this.code
                            }
                        },
                        t
                }(new Error(t), e, r, i, n)
            },
            oi = Jr.isStandardBrowserEnv() ? {
                write: function (t, e, r, i, n, o) {
                    var s = [];
                    s.push(t + "=" + encodeURIComponent(e)),
                        Jr.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()),
                        Jr.isString(i) && s.push("path=" + i),
                        Jr.isString(n) && s.push("domain=" + n),
                        !0 === o && s.push("secure"),
                        document.cookie = s.join("; ")
                },
                read: function (t) {
                    var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                    return e ? decodeURIComponent(e[3]) : null
                },
                remove: function (t) {
                    this.write(t, "", Date.now() - 864e5)
                }
            } : {
                write: function () { },
                read: function () {
                    return null
                },
                remove: function () { }
            },
            si = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"],
            hi = Jr.isStandardBrowserEnv() ?
                function () {
                    var t, e = /(msie|trident)/i.test(navigator.userAgent),
                        r = document.createElement("a");
                    function i(t) {
                        var i = t;
                        return e && (r.setAttribute("href", i), i = r.href),
                            r.setAttribute("href", i),
                        {
                            href: r.href,
                            protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                            host: r.host,
                            search: r.search ? r.search.replace(/^\?/, "") : "",
                            hash: r.hash ? r.hash.replace(/^#/, "") : "",
                            hostname: r.hostname,
                            port: r.port,
                            pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
                        }
                    }
                    return t = i(window.location.href),
                        function (e) {
                            var r = Jr.isString(e) ? i(e) : e;
                            return r.protocol === t.protocol && r.host === t.host
                        }
                }() : function () {
                    return !0
                },
            ui = function (t) {
                return new Promise((function (e, r) {
                    var i = t.data,
                        n = t.headers;
                    Jr.isFormData(i) && delete n["Content-Type"];
                    var o = new XMLHttpRequest();
                    if (t.auth) {
                        var s = t.auth.username || "",
                            h = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                        n.Authorization = "Basic " + btoa(s + ":" + h)
                    }
                    var u, a, f = (u = t.baseURL, a = t.url, u && !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(a) ?
                        function (t, e) {
                            return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
                        }(u, a) : a);
                    if (o.open(t.method.toUpperCase(), Qr(f, t.params, t.paramsSerializer), !0), o.timeout = t.timeout, o.onreadystatechange = function () {
                        if (o && 4 === o.readyState && (0 !== o.status || o.responseURL && 0 === o.responseURL.indexOf("file:"))) {
                            var i = "getAllResponseHeaders" in o ?
                                function (t) {
                                    var e, r, i, n = {};
                                    return t ? (Jr.forEach(t.split("\n"), (function (t) {
                                        if (i = t.indexOf(":"), e = Jr.trim(t.substr(0, i)).toLowerCase(), r = Jr.trim(t.substr(i + 1)), e) {
                                            if (n[e] && si.indexOf(e) >= 0) return;
                                            n[e] = "set-cookie" === e ? (n[e] ? n[e] : []).concat([r]) : n[e] ? n[e] + ", " + r : r
                                        }
                                    })), n) : n
                                }(o.getAllResponseHeaders()) : null,
                                n = {
                                    data: t.responseType && "text" !== t.responseType ? o.response : o.responseText,
                                    status: o.status,
                                    statusText: o.statusText,
                                    headers: i,
                                    config: t,
                                    request: o
                                }; !
                                    function (t, e, r) {
                                        var i = r.config.validateStatus;
                                        r.status && i && !i(r.status) ? e(ni("Request failed with status code " + r.status, r.config, null, r.request, r)) : t(r)
                                    }(e, r, n),
                                    o = null
                        }
                    },
                        o.onabort = function () {
                            o && (r(ni("Request aborted", t, "ECONNABORTED", o)), o = null)
                        },
                        o.onerror = function () {
                            r(ni("Network Error", t, null, o)),
                                o = null
                        },
                        o.ontimeout = function () {
                            var e = "timeout of " + t.timeout + "ms exceeded";
                            t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
                                r(ni(e, t, "ECONNABORTED", o)),
                                o = null
                        },
                        Jr.isStandardBrowserEnv()) {
                        var l = (t.withCredentials || hi(f)) && t.xsrfCookieName ? oi.read(t.xsrfCookieName) : void 0;
                        l && (n[t.xsrfHeaderName] = l)
                    }
                    if ("setRequestHeader" in o && Jr.forEach(n, (function (t, e) {
                        void 0 === i && "content-type" === e.toLowerCase() ? delete n[e] : o.setRequestHeader(e, t)
                    })), Jr.isUndefined(t.withCredentials) || (o.withCredentials = !!t.withCredentials), t.responseType) try {
                        o.responseType = t.responseType
                    } catch (e) {
                        if ("json" !== t.responseType) throw e
                    }
                    "function" == typeof t.onDownloadProgress && o.addEventListener("progress", t.onDownloadProgress),
                        "function" == typeof t.onUploadProgress && o.upload && o.upload.addEventListener("progress", t.onUploadProgress),
                        t.cancelToken && t.cancelToken.promise.then((function (t) {
                            o && (o.abort(), r(t), o = null)
                        })),
                        i || (i = null),
                        o.send(i)
                }))
            },
            ai = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
        function fi(t, e) {
            !Jr.isUndefined(t) && Jr.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
        }
        var li, ci = {
            adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== Se && "[object process]" === Object.prototype.toString.call(Se)) && (li = ui), li),
            transformRequest: [function (t, e) {
                return ii(e, "Accept"),
                    ii(e, "Content-Type"),
                    Jr.isFormData(t) || Jr.isArrayBuffer(t) || Jr.isBuffer(t) || Jr.isStream(t) || Jr.isFile(t) || Jr.isBlob(t) ? t : Jr.isArrayBufferView(t) ? t.buffer : Jr.isURLSearchParams(t) ? (fi(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : Jr.isObject(t) ? (fi(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t
            }],
            transformResponse: [function (t) {
                if ("string" == typeof t) try {
                    t = JSON.parse(t)
                } catch (t) { }
                return t
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            validateStatus: function (t) {
                return t >= 200 && t < 300
            }
        };
        ci.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        },
            Jr.forEach(["delete", "get", "head"], (function (t) {
                ci.headers[t] = {}
            })),
            Jr.forEach(["post", "put", "patch"], (function (t) {
                ci.headers[t] = Jr.merge(ai)
            }));
        var pi = ci;
        function di(t) {
            t.cancelToken && t.cancelToken.throwIfRequested()
        }
        var mi = function (t) {
            return di(t),
                t.headers = t.headers || {},
                t.data = ei(t.data, t.headers, t.transformRequest),
                t.headers = Jr.merge(t.headers.common || {},
                    t.headers[t.method] || {},
                    t.headers),
                Jr.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function (e) {
                    delete t.headers[e]
                })),
                (t.adapter || pi.adapter)(t).then((function (e) {
                    return di(t),
                        e.data = ei(e.data, e.headers, t.transformResponse),
                        e
                }), (function (e) {
                    return ri(e) || (di(t), e && e.response && (e.response.data = ei(e.response.data, e.response.headers, t.transformResponse))),
                        Promise.reject(e)
                }))
        },
            yi = function (t, e) {
                e = e || {};
                var r = {},
                    i = ["url", "method", "data"],
                    n = ["headers", "auth", "proxy", "params"],
                    o = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
                    s = ["validateStatus"];
                function h(t, e) {
                    return Jr.isPlainObject(t) && Jr.isPlainObject(e) ? Jr.merge(t, e) : Jr.isPlainObject(e) ? Jr.merge({},
                        e) : Jr.isArray(e) ? e.slice() : e
                }
                function u(i) {
                    Jr.isUndefined(e[i]) ? Jr.isUndefined(t[i]) || (r[i] = h(void 0, t[i])) : r[i] = h(t[i], e[i])
                }
                Jr.forEach(i, (function (t) {
                    Jr.isUndefined(e[t]) || (r[t] = h(void 0, e[t]))
                })),
                    Jr.forEach(n, u),
                    Jr.forEach(o, (function (i) {
                        Jr.isUndefined(e[i]) ? Jr.isUndefined(t[i]) || (r[i] = h(void 0, t[i])) : r[i] = h(void 0, e[i])
                    })),
                    Jr.forEach(s, (function (i) {
                        i in e ? r[i] = h(t[i], e[i]) : i in t && (r[i] = h(void 0, t[i]))
                    }));
                var a = i.concat(n).concat(o).concat(s),
                    f = Object.keys(t).concat(Object.keys(e)).filter((function (t) {
                        return - 1 === a.indexOf(t)
                    }));
                return Jr.forEach(f, u),
                    r
            };
        function gi(t) {
            this.defaults = t,
                this.interceptors = {
                    request: new ti(),
                    response: new ti()
                }
        }
        gi.prototype.request = function (t) {
            "string" == typeof t ? (t = arguments[1] || {}).url = arguments[0] : t = t || {},
                (t = yi(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
            var e = [mi, void 0],
                r = Promise.resolve(t);
            for (this.interceptors.request.forEach((function (t) {
                e.unshift(t.fulfilled, t.rejected)
            })), this.interceptors.response.forEach((function (t) {
                e.push(t.fulfilled, t.rejected)
            })); e.length;) r = r.then(e.shift(), e.shift());
            return r
        },
            gi.prototype.getUri = function (t) {
                return t = yi(this.defaults, t),
                    Qr(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
            },
            Jr.forEach(["delete", "get", "head", "options"], (function (t) {
                gi.prototype[t] = function (e, r) {
                    return this.request(yi(r || {},
                        {
                            method: t,
                            url: e,
                            data: (r || {}).data
                        }))
                }
            })),
            Jr.forEach(["post", "put", "patch"], (function (t) {
                gi.prototype[t] = function (e, r, i) {
                    return this.request(yi(i || {},
                        {
                            method: t,
                            url: e,
                            data: r
                        }))
                }
            }));
        var vi = gi;
        function wi(t) {
            this.message = t
        }
        wi.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "")
        },
            wi.prototype.__CANCEL__ = !0;
        var bi = wi;
        function Mi(t) {
            if ("function" != typeof t) throw new TypeError("executor must be a function.");
            var e;
            this.promise = new Promise((function (t) {
                e = t
            }));
            var r = this;
            t((function (t) {
                r.reason || (r.reason = new bi(t), e(r.reason))
            }))
        }
        Mi.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason
        },
            Mi.source = function () {
                var t;
                return {
                    token: new Mi((function (e) {
                        t = e
                    })),
                    cancel: t
                }
            };
        var Ti = Mi;
        function _i(t) {
            var e = new vi(t),
                r = Yr(vi.prototype.request, e);
            return Jr.extend(r, vi.prototype, e),
                Jr.extend(r, e),
                r
        }
        var Ei = _i(pi);
        Ei.Axios = vi,
            Ei.create = function (t) {
                return _i(yi(Ei.defaults, t))
            },
            Ei.Cancel = bi,
            Ei.CancelToken = Ti,
            Ei.isCancel = ri,
            Ei.all = function (t) {
                return Promise.all(t)
            },
            Ei.spread = function (t) {
                return function (e) {
                    return t.apply(null, e)
                }
            },
            Ei.isAxiosError = function (t) {
                return "object" == typeof t && !0 === t.isAxiosError
            };
        var Ai = Ei,
            Si = Ei;
        Ai
            .default = Si;
        var Bi = Ai,
            ki = Nr.sm2Crypto,
            Ri = Nr.sm4Crypto;
        function Fi(t) {
            // console.log('t777', t)

            // console.log('t777', c(t.match(/http(s)?:\/\/(.)*?\/v2/), 1))

            var e = this;
            // console.log('111', this)
            var r = c(t.match(/http(s)?:\/\/(.)*?\/v2/), 1)[0]
            var i = ki.encrypt(this.serverPubKey, this.clientPubKey)
            var n = s(s({
                tmf_apiname: "tmf_secret"
            },
                this.baseHeader), {},
                {
                    "Content-Type": "text/plain"
                });

            return Bi.post(r, i, {
                headers: n
            }).then((function (t) {
                if (200 === t.status && t.data && 0 === t.data.eRetCode) {
                    var r = ki.decrypt(e.clientPriKey, t.data.sSecretSession),
                        i = JSON.parse(r),
                        n = i.sSessionId,
                        o = i.sSessionKey;
                    return e.randomKey = o,
                        e.TMFSessionID = n,
                        r
                }
                return Promise.reject(t)
            }))
        }
        function Ci() {
            var t = this,
                e = Bi.create();
            return e.interceptors.request.use((function (e) {
                return e.headers = Object.assign({
                    tmf_sessionid: t.TMFSessionID
                },
                    e.headers),
                    e.data && (e.data = Ri.encrypt(t.randomKey, "string" == typeof e.data ? e.data : JSON.stringify(e.data))),
                    e
            }), (function (t) {
                return Promise.reject(t)
            })),
                e.interceptors.response.use((function (e) {
                    return e.data && (e.data = Ri.decrypt(t.randomKey, e.data)),
                        e
                }), (function (t) {
                    return console.log(t),
                        Promise.reject(t)
                })),
                e
        }
        function Di(t) {
            var e = this,
                r = t.url,
                i = t.headers;
            if (!r) throw new Error("url参数不可为空");
            return t.headers = Object.assign({},
                this.baseHeader, i),
                this.randomKey && this.TMFSessionID ? this._createRequest().request(t)
                    .catch((function (r) {
                        return r.response.data && 5510 == r.response.data.errorCode ? (e.randomKey = "", e.TMFSessionID = "", e.request(t)) : Promise.reject(r)
                    })) : this.fetchRandomKey(r).then((function () {
                        return e.randomKey && e.TMFSessionID ? e.request(t) : Promise.reject("Get random key fail.")
                    }))
        }
        var Oi = function (t) {
            t.prototype.fetchRandomKey = Fi,
                t.prototype._createRequest = Ci,
                t.prototype.request = Di
        },
            xi = t;
        function Pi() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this instanceof Pi || xi("TMFRequest是一个构造函数，不可以直接调用"),
                t = Object.assign({},
                    t, {
                    tmfProductid: 2843,
                    tmfKeyid: "app-64cjnno99y",
                    serverPubKey: "04eabead022061471368fc4d81b7a025cfc33542efea9081ece3c1209f406aaac315d0fbdd10b2deb4a0d26d101fd9e984830bf8e4d5ff0806bedaa5becbcca8c1"
                }),
                this.init(t)
        }
        return Lr(Pi),
            Oi(Pi),
            Pi
    }));
//# sourceMappingURL=bundle.umd.js.map
