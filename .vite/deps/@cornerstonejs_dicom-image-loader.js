import {
  canRenderFloatTextures,
  enums_exports,
  eventTarget_default,
  expose,
  getWebWorkerManager,
  imageRetrievalPoolManager_default,
  metaData_exports,
  registerImageLoader,
  triggerEvent,
  utilities_exports
} from "./chunk-JW6DGSZT.js";
import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-G3PMV62Z.js";

// browser-external:zlib
var require_zlib = __commonJS({
  "browser-external:zlib"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "zlib" has been externalized for browser compatibility. Cannot access "zlib.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/dicom-parser/dist/dicomParser.min.js
var require_dicomParser_min = __commonJS({
  "node_modules/dicom-parser/dist/dicomParser.min.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t(require_zlib()) : "function" == typeof define && define.amd ? define("dicom-parser", ["zlib"], t) : "object" == typeof exports ? exports["dicom-parser"] = t(require_zlib()) : e.dicomParser = t(e.zlib);
    }(exports, function(r) {
      return a = [function(e, t) {
        e.exports = r;
      }, function(e, t, s) {
        "use strict";
        s.r(t), s.d(t, "isStringVr", function() {
          return d;
        }), s.d(t, "isPrivateTag", function() {
          return f;
        }), s.d(t, "parsePN", function() {
          return a2;
        }), s.d(t, "parseTM", function() {
          return n2;
        }), s.d(t, "parseDA", function() {
          return o;
        }), s.d(t, "explicitElementToString", function() {
          return l;
        }), s.d(t, "explicitDataSetToJS", function() {
          return u;
        }), s.d(t, "createJPEGBasicOffsetTable", function() {
          return p;
        }), s.d(t, "parseDicomDataSetExplicit", function() {
          return q;
        }), s.d(t, "parseDicomDataSetImplicit", function() {
          return T;
        }), s.d(t, "readFixedString", function() {
          return b;
        }), s.d(t, "alloc", function() {
          return k;
        }), s.d(t, "version", function() {
          return L;
        }), s.d(t, "bigEndianByteArrayParser", function() {
          return N;
        }), s.d(t, "ByteStream", function() {
          return J;
        }), s.d(t, "sharedCopy", function() {
          return j;
        }), s.d(t, "DataSet", function() {
          return w;
        }), s.d(t, "findAndSetUNElementLength", function() {
          return y;
        }), s.d(t, "findEndOfEncapsulatedElement", function() {
          return g;
        }), s.d(t, "findItemDelimitationItemAndSetElementLength", function() {
          return x;
        }), s.d(t, "littleEndianByteArrayParser", function() {
          return M;
        }), s.d(t, "parseDicom", function() {
          return V;
        }), s.d(t, "readDicomElementExplicit", function() {
          return B;
        }), s.d(t, "readDicomElementImplicit", function() {
          return A;
        }), s.d(t, "readEncapsulatedImageFrame", function() {
          return W;
        }), s.d(t, "readEncapsulatedPixelData", function() {
          return K;
        }), s.d(t, "readEncapsulatedPixelDataFromFragments", function() {
          return _;
        }), s.d(t, "readPart10Header", function() {
          return G;
        }), s.d(t, "readSequenceItemsExplicit", function() {
          return I;
        }), s.d(t, "readSequenceItemsImplicit", function() {
          return F;
        }), s.d(t, "readSequenceItem", function() {
          return S;
        }), s.d(t, "readTag", function() {
          return h;
        });
        var r2 = { AE: true, AS: true, AT: false, CS: true, DA: true, DS: true, DT: true, FL: false, FD: false, IS: true, LO: true, LT: true, OB: false, OD: false, OF: false, OW: false, PN: true, SH: true, SL: false, SQ: false, SS: false, ST: true, TM: true, UI: true, UL: false, UN: void 0, UR: true, US: false, UT: true }, d = function(e2) {
          return r2[e2];
        }, f = function(e2) {
          e2 = parseInt(e2[4], 16);
          if (isNaN(e2)) throw "dicomParser.isPrivateTag: cannot parse last character of group";
          return e2 % 2 == 1;
        }, a2 = function(e2) {
          if (void 0 !== e2) {
            e2 = e2.split("^");
            return { familyName: e2[0], givenName: e2[1], middleName: e2[2], prefix: e2[3], suffix: e2[4] };
          }
        };
        function n2(e2, t2) {
          if (2 <= e2.length) {
            var r3 = parseInt(e2.substring(0, 2), 10), a3 = 4 <= e2.length ? parseInt(e2.substring(2, 4), 10) : void 0, n3 = 6 <= e2.length ? parseInt(e2.substring(4, 6), 10) : void 0, i3 = 8 <= e2.length ? e2.substring(7, 13) : void 0, i3 = i3 ? parseInt(i3, 10) * Math.pow(10, 6 - i3.length) : void 0;
            if (t2 && (isNaN(r3) || void 0 !== a3 && isNaN(a3) || void 0 !== n3 && isNaN(n3) || void 0 !== i3 && isNaN(i3) || r3 < 0 || 23 < r3 || a3 && (a3 < 0 || 59 < a3) || n3 && (n3 < 0 || 59 < n3) || i3 && (i3 < 0 || 999999 < i3))) throw "invalid TM '".concat(e2, "'");
            return { hours: r3, minutes: a3, seconds: n3, fractionalSeconds: i3 };
          }
          if (t2) throw "invalid TM '".concat(e2, "'");
        }
        function i2(e2, t2, r3) {
          return !isNaN(r3) && (0 < t2 && t2 <= 12 && 0 < e2 && e2 <= function(e3, t3) {
            switch (e3) {
              case 2:
                return t3 % 4 == 0 && t3 % 100 || t3 % 400 == 0 ? 29 : 28;
              case 9:
              case 4:
              case 6:
              case 11:
                return 30;
              default:
                return 31;
            }
          }(t2, r3));
        }
        function o(e2, t2) {
          if (e2 && 8 === e2.length) {
            var r3 = parseInt(e2.substring(0, 4), 10), a3 = parseInt(e2.substring(4, 6), 10), n3 = parseInt(e2.substring(6, 8), 10);
            if (t2 && true !== i2(n3, a3, r3)) throw "invalid DA '".concat(e2, "'");
            return { year: r3, month: a3, day: n3 };
          }
          if (t2) throw "invalid DA '".concat(e2, "'");
        }
        function l(n3, e2) {
          if (void 0 === n3 || void 0 === e2) throw "dicomParser.explicitElementToString: missing required parameters";
          if (void 0 === e2.vr) throw "dicomParser.explicitElementToString: cannot convert implicit element to string";
          var t2, r3 = e2.vr, i3 = e2.tag;
          function a3(e3, t3) {
            for (var r4 = "", a4 = 0; a4 < e3; a4++) 0 !== a4 && (r4 += "/"), r4 += t3.call(n3, i3, a4).toString();
            return r4;
          }
          if (true === d(r3)) t2 = n3.string(i3);
          else {
            if ("AT" === r3) {
              var o2 = n3.uint32(i3);
              return void 0 === o2 ? void 0 : "x".concat((o2 = o2 < 0 ? 4294967295 + o2 + 1 : o2).toString(16).toUpperCase());
            }
            "US" === r3 ? t2 = a3(e2.length / 2, n3.uint16) : "SS" === r3 ? t2 = a3(e2.length / 2, n3.int16) : "UL" === r3 ? t2 = a3(e2.length / 4, n3.uint32) : "SL" === r3 ? t2 = a3(e2.length / 4, n3.int32) : "FD" === r3 ? t2 = a3(e2.length / 8, n3.double) : "FL" === r3 && (t2 = a3(e2.length / 4, n3.float));
          }
          return t2;
        }
        function u(e2, t2) {
          if (void 0 === e2) throw "dicomParser.explicitDataSetToJS: missing required parameter dataSet";
          t2 = t2 || { omitPrivateAttibutes: true, maxElementLength: 128 };
          var r3, a3 = {};
          for (r3 in e2.elements) {
            var n3 = e2.elements[r3];
            if (true !== t2.omitPrivateAttibutes || !f(r3)) if (n3.items) {
              for (var i3 = [], o2 = 0; o2 < n3.items.length; o2++) i3.push(u(n3.items[o2].dataSet, t2));
              a3[r3] = i3;
            } else {
              var s2 = void 0;
              n3.length < t2.maxElementLength && (s2 = l(e2, n3)), a3[r3] = void 0 !== s2 ? s2 : { dataOffset: n3.dataOffset, length: n3.length };
            }
          }
          return a3;
        }
        function c(e2, t2) {
          return 255 === e2.byteArray[t2] && 217 === e2.byteArray[t2 + 1];
        }
        function m(e2, t2, r3) {
          for (var a3, n3, i3 = r3; i3 < t2.fragments.length; i3++) if (a3 = e2, n3 = i3, n3 = t2.fragments[n3], !(!c(a3, n3.position + n3.length - 2) && !c(a3, n3.position + n3.length - 3))) return i3;
        }
        function p(e2, t2, r3) {
          if (void 0 === e2) throw "dicomParser.createJPEGBasicOffsetTable: missing required parameter dataSet";
          if (void 0 === t2) throw "dicomParser.createJPEGBasicOffsetTable: missing required parameter pixelDataElement";
          if ("x7fe00010" !== t2.tag) throw "dicomParser.createJPEGBasicOffsetTable: parameter 'pixelDataElement' refers to non pixel data tag (expected tag = x7fe00010'";
          if (true !== t2.encapsulatedPixelData) throw "dicomParser.createJPEGBasicOffsetTable: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (true !== t2.hadUndefinedLength) throw "dicomParser.createJPEGBasicOffsetTable: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (void 0 === t2.basicOffsetTable) throw "dicomParser.createJPEGBasicOffsetTable: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (void 0 === t2.fragments) throw "dicomParser.createJPEGBasicOffsetTable: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (t2.fragments.length <= 0) throw "dicomParser.createJPEGBasicOffsetTable: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (r3 && r3.length <= 0) throw "dicomParser.createJPEGBasicOffsetTable: parameter 'fragments' must not be zero length";
          r3 = r3 || t2.fragments;
          for (var a3 = [], n3 = 0; ; ) {
            a3.push(t2.fragments[n3].offset);
            var i3 = m(e2, t2, n3);
            if (void 0 === i3 || i3 === t2.fragments.length - 1) return a3;
            n3 = i3 + 1;
          }
        }
        function h(e2) {
          if (void 0 === e2) throw "dicomParser.readTag: missing required parameter 'byteStream'";
          var t2 = 256 * e2.readUint16() * 256, e2 = e2.readUint16();
          return "x".concat("00000000".concat((t2 + e2).toString(16)).substr(-8));
        }
        function g(e2, t2, r3) {
          if (void 0 === e2) throw "dicomParser.findEndOfEncapsulatedElement: missing required parameter 'byteStream'";
          if (void 0 === t2) throw "dicomParser.findEndOfEncapsulatedElement: missing required parameter 'element'";
          if (t2.encapsulatedPixelData = true, t2.basicOffsetTable = [], t2.fragments = [], "xfffee000" !== h(e2)) throw "dicomParser.findEndOfEncapsulatedElement: basic offset table not found";
          for (var a3 = e2.readUint32() / 4, n3 = 0; n3 < a3; n3++) {
            var i3 = e2.readUint32();
            t2.basicOffsetTable.push(i3);
          }
          for (var o2 = e2.position; e2.position < e2.byteArray.length; ) {
            var s2 = h(e2), d2 = e2.readUint32();
            if ("xfffee0dd" === s2) return e2.seek(d2), void (t2.length = e2.position - t2.dataOffset);
            if ("xfffee000" !== s2) return r3 && r3.push("unexpected tag ".concat(s2, " while searching for end of pixel data element with undefined length")), d2 > e2.byteArray.length - e2.position && (d2 = e2.byteArray.length - e2.position), t2.fragments.push({ offset: e2.position - o2 - 8, position: e2.position, length: d2 }), e2.seek(d2), void (t2.length = e2.position - t2.dataOffset);
            t2.fragments.push({ offset: e2.position - o2 - 8, position: e2.position, length: d2 }), e2.seek(d2);
          }
          r3 && r3.push("pixel data element ".concat(t2.tag, " missing sequence delimiter tag xfffee0dd"));
        }
        function y(e2, t2) {
          if (void 0 === e2) throw "dicomParser.findAndSetUNElementLength: missing required parameter 'byteStream'";
          for (var r3 = e2.byteArray.length - 8; e2.position <= r3; ) if (65534 === e2.readUint16()) {
            var a3 = e2.readUint16();
            if (57565 === a3) return 0 !== e2.readUint32() && e2.warnings("encountered non zero length following item delimiter at position ".concat(e2.position - 4, " while reading element of undefined length with tag ").concat(t2.tag)), void (t2.length = e2.position - t2.dataOffset);
          }
          t2.length = e2.byteArray.length - t2.dataOffset, e2.seek(e2.byteArray.length - e2.position);
        }
        function b(e2, t2, r3) {
          if (r3 < 0) throw "dicomParser.readFixedString - length cannot be less than 0";
          if (t2 + r3 > e2.length) throw "dicomParser.readFixedString: attempt to read past end of buffer";
          for (var a3, n3 = "", i3 = 0; i3 < r3; i3++) {
            if (0 === (a3 = e2[t2 + i3])) return t2 += r3, n3;
            n3 += String.fromCharCode(a3);
          }
          return n3;
        }
        function v(e2, t2) {
          for (var r3 = 0; r3 < t2.length; r3++) {
            var a3 = t2[r3];
            a3.enumerable = a3.enumerable || false, a3.configurable = true, "value" in a3 && (a3.writable = true), Object.defineProperty(e2, a3.key, a3);
          }
        }
        function P(e2, t2) {
          return void 0 !== e2.parser ? e2.parser : t2;
        }
        var w = function() {
          function a3(e3, t3, r4) {
            !function(e4, t4) {
              if (!(e4 instanceof t4)) throw new TypeError("Cannot call a class as a function");
            }(this, a3), this.byteArrayParser = e3, this.byteArray = t3, this.elements = r4;
          }
          var e2, t2, r3;
          return e2 = a3, (t2 = [{ key: "uint16", value: function(e3, t3) {
            e3 = this.elements[e3];
            if (t3 = void 0 !== t3 ? t3 : 0, e3 && 0 !== e3.length) return P(e3, this.byteArrayParser).readUint16(this.byteArray, e3.dataOffset + 2 * t3);
          } }, { key: "int16", value: function(e3, t3) {
            e3 = this.elements[e3];
            if (t3 = void 0 !== t3 ? t3 : 0, e3 && 0 !== e3.length) return P(e3, this.byteArrayParser).readInt16(this.byteArray, e3.dataOffset + 2 * t3);
          } }, { key: "uint32", value: function(e3, t3) {
            e3 = this.elements[e3];
            if (t3 = void 0 !== t3 ? t3 : 0, e3 && 0 !== e3.length) return P(e3, this.byteArrayParser).readUint32(this.byteArray, e3.dataOffset + 4 * t3);
          } }, { key: "int32", value: function(e3, t3) {
            e3 = this.elements[e3];
            if (t3 = void 0 !== t3 ? t3 : 0, e3 && 0 !== e3.length) return P(e3, this.byteArrayParser).readInt32(this.byteArray, e3.dataOffset + 4 * t3);
          } }, { key: "float", value: function(e3, t3) {
            e3 = this.elements[e3];
            if (t3 = void 0 !== t3 ? t3 : 0, e3 && 0 !== e3.length) return P(e3, this.byteArrayParser).readFloat(this.byteArray, e3.dataOffset + 4 * t3);
          } }, { key: "double", value: function(e3, t3) {
            e3 = this.elements[e3];
            if (t3 = void 0 !== t3 ? t3 : 0, e3 && 0 !== e3.length) return P(e3, this.byteArrayParser).readDouble(this.byteArray, e3.dataOffset + 8 * t3);
          } }, { key: "numStringValues", value: function(e3) {
            e3 = this.elements[e3];
            if (e3 && 0 < e3.length) {
              e3 = b(this.byteArray, e3.dataOffset, e3.length).match(/\\/g);
              return null === e3 ? 1 : e3.length + 1;
            }
          } }, { key: "string", value: function(e3, t3) {
            e3 = this.elements[e3];
            if (e3 && e3.Value) return e3.Value;
            if (e3 && 0 < e3.length) {
              e3 = b(this.byteArray, e3.dataOffset, e3.length);
              return 0 <= t3 ? e3.split("\\")[t3].trim() : e3.trim();
            }
          } }, { key: "text", value: function(e3, t3) {
            e3 = this.elements[e3];
            if (e3 && 0 < e3.length) {
              e3 = b(this.byteArray, e3.dataOffset, e3.length);
              return 0 <= t3 ? e3.split("\\")[t3].replace(/ +$/, "") : e3.replace(/ +$/, "");
            }
          } }, { key: "floatString", value: function(e3, t3) {
            var r4 = this.elements[e3];
            if (r4 && 0 < r4.length) {
              t3 = this.string(e3, t3 = void 0 !== t3 ? t3 : 0);
              if (void 0 !== t3) return parseFloat(t3);
            }
          } }, { key: "intString", value: function(e3, t3) {
            var r4 = this.elements[e3];
            if (r4 && 0 < r4.length) {
              t3 = this.string(e3, t3 = void 0 !== t3 ? t3 : 0);
              if (void 0 !== t3) return parseInt(t3);
            }
          } }, { key: "attributeTag", value: function(e3) {
            var t3 = this.elements[e3];
            if (t3 && 4 === t3.length) {
              var r4 = P(t3, this.byteArrayParser).readUint16, e3 = this.byteArray, t3 = t3.dataOffset;
              return "x".concat("00000000".concat((256 * r4(e3, t3) * 256 + r4(e3, t3 + 2)).toString(16)).substr(-8));
            }
          } }]) && v(e2.prototype, t2), r3 && v(e2, r3), Object.defineProperty(e2, "prototype", { writable: false }), a3;
        }();
        function x(e2, t2) {
          if (void 0 === e2) throw "dicomParser.readDicomElementImplicit: missing required parameter 'byteStream'";
          for (var r3 = e2.byteArray.length - 8; e2.position <= r3; ) if (65534 === e2.readUint16()) {
            var a3 = e2.readUint16();
            if (57357 === a3) return 0 !== e2.readUint32() && e2.warnings("encountered non zero length following item delimiter at position ".concat(e2.position - 4, " while reading element of undefined length with tag ").concat(t2.tag)), void (t2.length = e2.position - t2.dataOffset);
          }
          t2.length = e2.byteArray.length - t2.dataOffset, e2.seek(e2.byteArray.length - e2.position);
        }
        var E = function(e2, t2) {
          if (void 0 !== e2.vr) return "SQ" === e2.vr;
          if (t2.position + 4 <= t2.byteArray.length) {
            e2 = h(t2);
            return t2.seek(-4), "xfffee000" === e2 || "xfffee0dd" === e2;
          }
          return t2.warnings.push("eof encountered before finding sequence item tag or sequence delimiter tag in peeking to determine VR"), false;
        };
        function A(e2, t2, r3) {
          if (void 0 === e2) throw "dicomParser.readDicomElementImplicit: missing required parameter 'byteStream'";
          var a3 = h(e2), a3 = { tag: a3, vr: void 0 !== r3 ? r3(a3) : void 0, length: e2.readUint32(), dataOffset: e2.position };
          return 4294967295 === a3.length && (a3.hadUndefinedLength = true), a3.tag === t2 || (!E(a3, e2) || f(a3.tag) && !a3.hadUndefinedLength ? a3.hadUndefinedLength ? x(e2, a3) : e2.seek(a3.length) : (F(e2, a3, r3), f(a3.tag) && (a3.items = void 0))), a3;
        }
        function S(e2) {
          if (void 0 === e2) throw "dicomParser.readSequenceItem: missing required parameter 'byteStream'";
          var t2 = { tag: h(e2), length: e2.readUint32(), dataOffset: e2.position };
          if ("xfffee000" !== t2.tag) throw "dicomParser.readSequenceItem: item tag (FFFE,E000) not found at offset ".concat(e2.position);
          return t2;
        }
        function D(e2, t2) {
          var r3 = S(e2);
          return 4294967295 === r3.length ? (r3.hadUndefinedLength = true, r3.dataSet = function(e3, t3) {
            for (var r4 = {}; e3.position < e3.byteArray.length; ) {
              var a3 = A(e3, void 0, t3);
              if ("xfffee00d" === (r4[a3.tag] = a3).tag) return new w(e3.byteArrayParser, e3.byteArray, r4);
            }
            return e3.warnings.push("eof encountered before finding sequence item delimiter in sequence item of undefined length"), new w(e3.byteArrayParser, e3.byteArray, r4);
          }(e2, t2), r3.length = e2.position - r3.dataOffset) : (r3.dataSet = new w(e2.byteArrayParser, e2.byteArray, {}), T(r3.dataSet, e2, e2.position + r3.length, { vrCallback: t2 })), r3;
        }
        function F(e2, t2, r3) {
          if (void 0 === e2) throw "dicomParser.readSequenceItemsImplicit: missing required parameter 'byteStream'";
          if (void 0 === t2) throw "dicomParser.readSequenceItemsImplicit: missing required parameter 'element'";
          t2.items = [], (4294967295 === t2.length ? function(e3, t3, r4) {
            for (; e3.position + 4 <= e3.byteArray.length; ) {
              var a3 = h(e3);
              if (e3.seek(-4), "xfffee0dd" === a3) return t3.length = e3.position - t3.dataOffset, e3.seek(8);
              a3 = D(e3, r4);
              t3.items.push(a3);
            }
            e3.warnings.push("eof encountered before finding sequence delimiter in sequence of undefined length"), t3.length = e3.byteArray.length - t3.dataOffset;
          } : function(e3, t3, r4) {
            for (var a3 = t3.dataOffset + t3.length; e3.position < a3; ) {
              var n3 = D(e3, r4);
              t3.items.push(n3);
            }
          })(e2, t2, r3);
        }
        function O(e2, t2) {
          var r3 = S(e2);
          return 4294967295 === r3.length ? (r3.hadUndefinedLength = true, r3.dataSet = function(e3, t3) {
            for (var r4 = {}; e3.position < e3.byteArray.length; ) {
              var a3 = B(e3, t3);
              if ("xfffee00d" === (r4[a3.tag] = a3).tag) return new w(e3.byteArrayParser, e3.byteArray, r4);
            }
            return t3.push("eof encountered before finding item delimiter tag while reading sequence item of undefined length"), new w(e3.byteArrayParser, e3.byteArray, r4);
          }(e2, t2), r3.length = e2.position - r3.dataOffset) : (r3.dataSet = new w(e2.byteArrayParser, e2.byteArray, {}), q(r3.dataSet, e2, e2.position + r3.length)), r3;
        }
        function I(e2, t2, r3) {
          if (void 0 === e2) throw "dicomParser.readSequenceItemsExplicit: missing required parameter 'byteStream'";
          if (void 0 === t2) throw "dicomParser.readSequenceItemsExplicit: missing required parameter 'element'";
          t2.items = [], (4294967295 === t2.length ? function(e3, t3, r4) {
            for (; e3.position + 4 <= e3.byteArray.length; ) {
              var a3 = h(e3);
              if (e3.seek(-4), "xfffee0dd" === a3) return t3.length = e3.position - t3.dataOffset, e3.seek(8);
              a3 = O(e3, r4);
              t3.items.push(a3);
            }
            r4.push("eof encountered before finding sequence delimitation tag while reading sequence of undefined length"), t3.length = e3.position - t3.dataOffset;
          } : function(e3, t3, r4) {
            for (var a3 = t3.dataOffset + t3.length; e3.position < a3; ) {
              var n3 = O(e3, r4);
              t3.items.push(n3);
            }
          })(e2, t2, r3);
        }
        var U = function(e2) {
          return "OB" === e2 || "OD" === e2 || "OL" === e2 || "OW" === e2 || "SQ" === e2 || "OF" === e2 || "UC" === e2 || "UR" === e2 || "UT" === e2 || "UN" === e2 ? 4 : 2;
        };
        function B(e2, t2, r3) {
          if (void 0 === e2) throw "dicomParser.readDicomElementExplicit: missing required parameter 'byteStream'";
          var a3 = { tag: h(e2), vr: e2.readFixedString(2) };
          return 2 === U(a3.vr) ? a3.length = e2.readUint16() : (e2.seek(2), a3.length = e2.readUint32()), a3.dataOffset = e2.position, 4294967295 === a3.length && (a3.hadUndefinedLength = true), a3.tag === r3 || ("SQ" === a3.vr ? I(e2, a3, t2) : 4294967295 === a3.length ? "x7fe00010" === a3.tag ? g(e2, a3, t2) : ("UN" === a3.vr ? F : x)(e2, a3) : e2.seek(a3.length)), a3;
        }
        function q(e2, t2, r3) {
          var a3 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
          if (r3 = void 0 === r3 ? t2.byteArray.length : r3, void 0 === t2) throw "dicomParser.parseDicomDataSetExplicit: missing required parameter 'byteStream'";
          if (r3 < t2.position || r3 > t2.byteArray.length) throw "dicomParser.parseDicomDataSetExplicit: invalid value for parameter 'maxP osition'";
          for (var n3 = e2.elements; t2.position < r3; ) {
            var i3 = B(t2, e2.warnings, a3.untilTag);
            if ((n3[i3.tag] = i3).tag === a3.untilTag) return;
          }
          if (t2.position > r3) throw "dicomParser:parseDicomDataSetExplicit: buffer overrun";
        }
        function T(e2, t2, r3) {
          var a3 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
          if (r3 = void 0 === r3 ? e2.byteArray.length : r3, void 0 === t2) throw "dicomParser.parseDicomDataSetImplicit: missing required parameter 'byteStream'";
          if (r3 < t2.position || r3 > t2.byteArray.length) throw "dicomParser.parseDicomDataSetImplicit: invalid value for parameter 'maxPosition'";
          for (var n3 = e2.elements; t2.position < r3; ) {
            var i3 = A(t2, a3.untilTag, a3.vrCallback);
            if ((n3[i3.tag] = i3).tag === a3.untilTag) return;
          }
        }
        function k(e2, t2) {
          if ("undefined" != typeof Buffer && e2 instanceof Buffer) return Buffer.alloc(t2);
          if (e2 instanceof Uint8Array) return new Uint8Array(t2);
          throw "dicomParser.alloc: unknown type for byteArray";
        }
        var L = "1.8.12", N = { readUint16: function(e2, t2) {
          if (t2 < 0) throw "bigEndianByteArrayParser.readUint16: position cannot be less than 0";
          if (t2 + 2 > e2.length) throw "bigEndianByteArrayParser.readUint16: attempt to read past end of buffer";
          return (e2[t2] << 8) + e2[t2 + 1];
        }, readInt16: function(e2, t2) {
          if (t2 < 0) throw "bigEndianByteArrayParser.readInt16: position cannot be less than 0";
          if (t2 + 2 > e2.length) throw "bigEndianByteArrayParser.readInt16: attempt to read past end of buffer";
          t2 = (e2[t2] << 8) + e2[t2 + 1];
          return t2 = 32768 & t2 ? t2 - 65535 - 1 : t2;
        }, readUint32: function(e2, t2) {
          if (t2 < 0) throw "bigEndianByteArrayParser.readUint32: position cannot be less than 0";
          if (t2 + 4 > e2.length) throw "bigEndianByteArrayParser.readUint32: attempt to read past end of buffer";
          return 256 * (256 * (256 * e2[t2] + e2[t2 + 1]) + e2[t2 + 2]) + e2[t2 + 3];
        }, readInt32: function(e2, t2) {
          if (t2 < 0) throw "bigEndianByteArrayParser.readInt32: position cannot be less than 0";
          if (t2 + 4 > e2.length) throw "bigEndianByteArrayParser.readInt32: attempt to read past end of buffer";
          return (e2[t2] << 24) + (e2[t2 + 1] << 16) + (e2[t2 + 2] << 8) + e2[t2 + 3];
        }, readFloat: function(e2, t2) {
          if (t2 < 0) throw "bigEndianByteArrayParser.readFloat: position cannot be less than 0";
          if (t2 + 4 > e2.length) throw "bigEndianByteArrayParser.readFloat: attempt to read past end of buffer";
          var r3 = new Uint8Array(4);
          return r3[3] = e2[t2], r3[2] = e2[t2 + 1], r3[1] = e2[t2 + 2], r3[0] = e2[t2 + 3], new Float32Array(r3.buffer)[0];
        }, readDouble: function(e2, t2) {
          if (t2 < 0) throw "bigEndianByteArrayParser.readDouble: position cannot be less than 0";
          if (t2 + 8 > e2.length) throw "bigEndianByteArrayParser.readDouble: attempt to read past end of buffer";
          var r3 = new Uint8Array(8);
          return r3[7] = e2[t2], r3[6] = e2[t2 + 1], r3[5] = e2[t2 + 2], r3[4] = e2[t2 + 3], r3[3] = e2[t2 + 4], r3[2] = e2[t2 + 5], r3[1] = e2[t2 + 6], r3[0] = e2[t2 + 7], new Float64Array(r3.buffer)[0];
        } };
        function j(e2, t2, r3) {
          if ("undefined" != typeof Buffer && e2 instanceof Buffer) return e2.slice(t2, t2 + r3);
          if (e2 instanceof Uint8Array) return new Uint8Array(e2.buffer, e2.byteOffset + t2, r3);
          throw "dicomParser.from: unknown type for byteArray";
        }
        function C(e2, t2) {
          for (var r3 = 0; r3 < t2.length; r3++) {
            var a3 = t2[r3];
            a3.enumerable = a3.enumerable || false, a3.configurable = true, "value" in a3 && (a3.writable = true), Object.defineProperty(e2, a3.key, a3);
          }
        }
        var J = function() {
          function a3(e3, t3, r4) {
            if (!function(e4, t4) {
              if (!(e4 instanceof t4)) throw new TypeError("Cannot call a class as a function");
            }(this, a3), void 0 === e3) throw "dicomParser.ByteStream: missing required parameter 'byteArrayParser'";
            if (void 0 === t3) throw "dicomParser.ByteStream: missing required parameter 'byteArray'";
            if (t3 instanceof Uint8Array == false && ("undefined" == typeof Buffer || t3 instanceof Buffer == false)) throw "dicomParser.ByteStream: parameter byteArray is not of type Uint8Array or Buffer";
            if (r4 < 0) throw "dicomParser.ByteStream: parameter 'position' cannot be less than 0";
            if (r4 >= t3.length) throw "dicomParser.ByteStream: parameter 'position' cannot be greater than or equal to 'byteArray' length";
            this.byteArrayParser = e3, this.byteArray = t3, this.position = r4 || 0, this.warnings = [];
          }
          var e2, t2, r3;
          return e2 = a3, (t2 = [{ key: "seek", value: function(e3) {
            if (this.position + e3 < 0) throw "dicomParser.ByteStream.prototype.seek: cannot seek to position < 0";
            this.position += e3;
          } }, { key: "readByteStream", value: function(e3) {
            if (this.position + e3 > this.byteArray.length) throw "dicomParser.ByteStream.prototype.readByteStream: readByteStream - buffer overread";
            var t3 = j(this.byteArray, this.position, e3);
            return this.position += e3, new a3(this.byteArrayParser, t3);
          } }, { key: "getSize", value: function() {
            return this.byteArray.length;
          } }, { key: "readUint16", value: function() {
            var e3 = this.byteArrayParser.readUint16(this.byteArray, this.position);
            return this.position += 2, e3;
          } }, { key: "readUint32", value: function() {
            var e3 = this.byteArrayParser.readUint32(this.byteArray, this.position);
            return this.position += 4, e3;
          } }, { key: "readFixedString", value: function(e3) {
            var t3 = b(this.byteArray, this.position, e3);
            return this.position += e3, t3;
          } }]) && C(e2.prototype, t2), r3 && C(e2, r3), Object.defineProperty(e2, "prototype", { writable: false }), a3;
        }(), M = { readUint16: function(e2, t2) {
          if (t2 < 0) throw "littleEndianByteArrayParser.readUint16: position cannot be less than 0";
          if (t2 + 2 > e2.length) throw "littleEndianByteArrayParser.readUint16: attempt to read past end of buffer";
          return e2[t2] + 256 * e2[t2 + 1];
        }, readInt16: function(e2, t2) {
          if (t2 < 0) throw "littleEndianByteArrayParser.readInt16: position cannot be less than 0";
          if (t2 + 2 > e2.length) throw "littleEndianByteArrayParser.readInt16: attempt to read past end of buffer";
          t2 = e2[t2] + (e2[t2 + 1] << 8);
          return t2 = 32768 & t2 ? t2 - 65535 - 1 : t2;
        }, readUint32: function(e2, t2) {
          if (t2 < 0) throw "littleEndianByteArrayParser.readUint32: position cannot be less than 0";
          if (t2 + 4 > e2.length) throw "littleEndianByteArrayParser.readUint32: attempt to read past end of buffer";
          return e2[t2] + 256 * e2[t2 + 1] + 256 * e2[t2 + 2] * 256 + 256 * e2[t2 + 3] * 256 * 256;
        }, readInt32: function(e2, t2) {
          if (t2 < 0) throw "littleEndianByteArrayParser.readInt32: position cannot be less than 0";
          if (t2 + 4 > e2.length) throw "littleEndianByteArrayParser.readInt32: attempt to read past end of buffer";
          return e2[t2] + (e2[t2 + 1] << 8) + (e2[t2 + 2] << 16) + (e2[t2 + 3] << 24);
        }, readFloat: function(e2, t2) {
          if (t2 < 0) throw "littleEndianByteArrayParser.readFloat: position cannot be less than 0";
          if (t2 + 4 > e2.length) throw "littleEndianByteArrayParser.readFloat: attempt to read past end of buffer";
          var r3 = new Uint8Array(4);
          return r3[0] = e2[t2], r3[1] = e2[t2 + 1], r3[2] = e2[t2 + 2], r3[3] = e2[t2 + 3], new Float32Array(r3.buffer)[0];
        }, readDouble: function(e2, t2) {
          if (t2 < 0) throw "littleEndianByteArrayParser.readDouble: position cannot be less than 0";
          if (t2 + 8 > e2.length) throw "littleEndianByteArrayParser.readDouble: attempt to read past end of buffer";
          var r3 = new Uint8Array(8);
          return r3[0] = e2[t2], r3[1] = e2[t2 + 1], r3[2] = e2[t2 + 2], r3[3] = e2[t2 + 3], r3[4] = e2[t2 + 4], r3[5] = e2[t2 + 5], r3[6] = e2[t2 + 6], r3[7] = e2[t2 + 7], new Float64Array(r3.buffer)[0];
        } };
        function G(e2) {
          var i3 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
          if (void 0 === e2) throw "dicomParser.readPart10Header: missing required parameter 'byteArray'";
          var o2 = i3.TransferSyntaxUID, s2 = new J(M, e2);
          return function() {
            var e3 = function() {
              if (s2.getSize() <= 132 && o2) return false;
              if (s2.seek(128), "DICM" === s2.readFixedString(4)) return true;
              if (!(i3 || {}).TransferSyntaxUID) throw "dicomParser.readPart10Header: DICM prefix not found at location 132 - this is not a valid DICOM P10 file.";
              return s2.seek(0), false;
            }(), t2 = [], r3 = {};
            if (!e3) return s2.position = 0, { elements: { x00020010: { tag: "x00020010", vr: "UI", Value: o2 } }, warnings: t2 };
            for (; s2.position < s2.byteArray.length; ) {
              var a3 = s2.position, n3 = B(s2, t2);
              if ("x0002ffff" < n3.tag) {
                s2.position = a3;
                break;
              }
              n3.parser = M, r3[n3.tag] = n3;
            }
            return (e3 = new w(s2.byteArrayParser, s2.byteArray, r3)).warnings = s2.warnings, e3.position = s2.position, e3;
          }();
        }
        var z = "1.2.840.10008.1.2.2";
        function V(i3) {
          var o2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
          if (void 0 === i3) throw new Error("dicomParser.parseDicom: missing required parameter 'byteArray'");
          var e2, a3 = function(e3) {
            if (void 0 === e3.elements.x00020010) throw new Error("dicomParser.parseDicom: missing required meta header attribute 0002,0010");
            e3 = e3.elements.x00020010;
            return e3 && e3.Value || b(i3, e3.dataOffset, e3.length);
          };
          function t2(t3) {
            var e3 = a3(t3), r3 = "1.2.840.10008.1.2" !== e3, e3 = function(e4, t4) {
              var r4 = "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0);
              if ("1.2.840.10008.1.2.1.99" !== e4) return new J(e4 === z ? N : M, i3, t4);
              if (o2 && o2.inflater) {
                e4 = o2.inflater(i3, t4);
                return new J(M, e4, 0);
              }
              if (true == r4) {
                var a4 = s(0), n3 = j(i3, t4, i3.length - t4), a4 = a4.inflateRawSync(n3), n3 = k(i3, a4.length + t4);
                return i3.copy(n3, 0, 0, t4), a4.copy(n3, t4), new J(M, n3, 0);
              }
              if ("undefined" == typeof pako) throw "dicomParser.parseDicom: no inflater available to handle deflate transfer syntax";
              return a4 = i3.slice(t4), n3 = pako.inflateRaw(a4), (a4 = k(i3, n3.length + t4)).set(i3.slice(0, t4), 0), a4.set(n3, t4), new J(M, a4, 0);
            }(e3, t3.position), t3 = new w(e3.byteArrayParser, e3.byteArray, {});
            t3.warnings = e3.warnings;
            try {
              (r3 ? q : T)(t3, e3, e3.byteArray.length, o2);
            } catch (e4) {
              throw { exception: e4, dataSet: t3 };
            }
            return t3;
          }
          return function(e3, t3) {
            for (var r3 in e3.elements) e3.elements.hasOwnProperty(r3) && (t3.elements[r3] = e3.elements[r3]);
            return void 0 !== e3.warnings && (t3.warnings = e3.warnings.concat(t3.warnings)), t3;
          }(e2 = G(i3, o2), t2(e2));
        }
        var R = function(e2, t2, r3) {
          for (var a3 = 0, n3 = t2; n3 < t2 + r3; n3++) a3 += e2[n3].length;
          return a3;
        };
        function _(e2, t2, r3, a3, n3) {
          if (n3 = n3 || t2.fragments, void 0 === e2) throw "dicomParser.readEncapsulatedPixelDataFromFragments: missing required parameter 'dataSet'";
          if (void 0 === t2) throw "dicomParser.readEncapsulatedPixelDataFromFragments: missing required parameter 'pixelDataElement'";
          if (void 0 === r3) throw "dicomParser.readEncapsulatedPixelDataFromFragments: missing required parameter 'startFragmentIndex'";
          if (void 0 === (a3 = a3 || 1)) throw "dicomParser.readEncapsulatedPixelDataFromFragments: missing required parameter 'numFragments'";
          if ("x7fe00010" !== t2.tag) throw "dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'pixelDataElement' refers to non pixel data tag (expected tag = x7fe00010";
          if (true !== t2.encapsulatedPixelData) throw "dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (true !== t2.hadUndefinedLength) throw "dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (void 0 === t2.basicOffsetTable) throw "dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (void 0 === t2.fragments) throw "dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (t2.fragments.length <= 0) throw "dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (r3 < 0) throw "dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'startFragmentIndex' must be >= 0";
          if (r3 >= t2.fragments.length) throw "dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'startFragmentIndex' must be < number of fragments";
          if (a3 < 1) throw "dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'numFragments' must be > 0";
          if (r3 + a3 > t2.fragments.length) throw "dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'startFragment' + 'numFragments' < number of fragments";
          var i3 = new J(e2.byteArrayParser, e2.byteArray, t2.dataOffset), t2 = S(i3);
          if ("xfffee000" !== t2.tag) throw "dicomParser.readEncapsulatedPixelData: missing basic offset table xfffee000";
          i3.seek(t2.length);
          var o2 = i3.position;
          if (1 === a3) return j(i3.byteArray, o2 + n3[r3].offset + 8, n3[r3].length);
          for (var t2 = R(n3, r3, a3), s2 = k(i3.byteArray, t2), d2 = 0, f2 = r3; f2 < r3 + a3; f2++) for (var l2 = o2 + n3[f2].offset + 8, u2 = 0; u2 < n3[f2].length; u2++) s2[d2++] = i3.byteArray[l2++];
          return s2;
        }
        var H = function(e2, t2) {
          for (var r3 = 0; r3 < e2.length; r3++) if (e2[r3].offset === t2) return r3;
        }, Q = function(e2, t2, r3, a3) {
          if (e2 === t2.length - 1) return r3.length - a3;
          for (var n3 = t2[e2 + 1], i3 = a3 + 1; i3 < r3.length; i3++) if (r3[i3].offset === n3) return i3 - a3;
          throw "dicomParser.calculateNumberOfFragmentsForFrame: could not find fragment with offset matching basic offset table";
        };
        function W(e2, t2, r3, a3, n3) {
          if (a3 = a3 || t2.basicOffsetTable, n3 = n3 || t2.fragments, void 0 === e2) throw "dicomParser.readEncapsulatedImageFrame: missing required parameter 'dataSet'";
          if (void 0 === t2) throw "dicomParser.readEncapsulatedImageFrame: missing required parameter 'pixelDataElement'";
          if (void 0 === r3) throw "dicomParser.readEncapsulatedImageFrame: missing required parameter 'frameIndex'";
          if (void 0 === a3) throw "dicomParser.readEncapsulatedImageFrame: parameter 'pixelDataElement' does not have basicOffsetTable";
          if ("x7fe00010" !== t2.tag) throw "dicomParser.readEncapsulatedImageFrame: parameter 'pixelDataElement' refers to non pixel data tag (expected tag = x7fe00010)";
          if (true !== t2.encapsulatedPixelData) throw "dicomParser.readEncapsulatedImageFrame: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (true !== t2.hadUndefinedLength) throw "dicomParser.readEncapsulatedImageFrame: parameter 'pixelDataElement' refers to pixel data element that does not have undefined length";
          if (void 0 === t2.fragments) throw "dicomParser.readEncapsulatedImageFrame: parameter 'pixelDataElement' refers to pixel data element that does not have fragments";
          if (0 === a3.length) throw "dicomParser.readEncapsulatedImageFrame: basicOffsetTable has zero entries";
          if (r3 < 0) throw "dicomParser.readEncapsulatedImageFrame: parameter 'frameIndex' must be >= 0";
          if (r3 >= a3.length) throw "dicomParser.readEncapsulatedImageFrame: parameter 'frameIndex' must be < basicOffsetTable.length";
          var i3 = a3[r3], i3 = H(n3, i3);
          if (void 0 === i3) throw "dicomParser.readEncapsulatedImageFrame: unable to find fragment that matches basic offset table entry";
          return _(e2, t2, i3, Q(r3, a3, n3, i3), n3);
        }
        var $ = false;
        function K(e2, t2, r3) {
          if ($ || ($ = true, console && console.log && console.log("WARNING: dicomParser.readEncapsulatedPixelData() has been deprecated")), void 0 === e2) throw "dicomParser.readEncapsulatedPixelData: missing required parameter 'dataSet'";
          if (void 0 === t2) throw "dicomParser.readEncapsulatedPixelData: missing required parameter 'element'";
          if (void 0 === r3) throw "dicomParser.readEncapsulatedPixelData: missing required parameter 'frame'";
          if ("x7fe00010" !== t2.tag) throw "dicomParser.readEncapsulatedPixelData: parameter 'element' refers to non pixel data tag (expected tag = x7fe00010)";
          if (true !== t2.encapsulatedPixelData) throw "dicomParser.readEncapsulatedPixelData: parameter 'element' refers to pixel data element that does not have encapsulated pixel data";
          if (true !== t2.hadUndefinedLength) throw "dicomParser.readEncapsulatedPixelData: parameter 'element' refers to pixel data element that does not have encapsulated pixel data";
          if (void 0 === t2.basicOffsetTable) throw "dicomParser.readEncapsulatedPixelData: parameter 'element' refers to pixel data element that does not have encapsulated pixel data";
          if (void 0 === t2.fragments) throw "dicomParser.readEncapsulatedPixelData: parameter 'element' refers to pixel data element that does not have encapsulated pixel data";
          if (r3 < 0) throw "dicomParser.readEncapsulatedPixelData: parameter 'frame' must be >= 0";
          return 0 !== t2.basicOffsetTable.length ? W(e2, t2, r3) : _(e2, t2, 0, t2.fragments.length);
        }
        t.default = { isStringVr: d, isPrivateTag: f, parsePN: a2, parseTM: n2, parseDA: o, explicitElementToString: l, explicitDataSetToJS: u, createJPEGBasicOffsetTable: p, parseDicomDataSetExplicit: q, parseDicomDataSetImplicit: T, readFixedString: b, alloc: k, version: L, bigEndianByteArrayParser: N, ByteStream: J, sharedCopy: j, DataSet: w, findAndSetUNElementLength: y, findEndOfEncapsulatedElement: g, findItemDelimitationItemAndSetElementLength: x, littleEndianByteArrayParser: M, parseDicom: V, readDicomElementExplicit: B, readDicomElementImplicit: A, readEncapsulatedImageFrame: W, readEncapsulatedPixelData: K, readEncapsulatedPixelDataFromFragments: _, readPart10Header: G, readSequenceItemsExplicit: I, readSequenceItemsImplicit: F, readSequenceItem: S, readTag: h, LEI: "1.2.840.10008.1.2", LEE: "1.2.840.10008.1.2.1" };
      }], i = {}, n.m = a, n.c = i, n.d = function(e, t, r2) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: true, get: r2 });
      }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: true });
      }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r2 = /* @__PURE__ */ Object.create(null);
        if (n.r(r2), Object.defineProperty(r2, "default", { enumerable: true, value: t }), 2 & e && "string" != typeof t) for (var a2 in t) n.d(r2, a2, (function(e2) {
          return t[e2];
        }).bind(null, a2));
        return r2;
      }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
          return e.default;
        } : function() {
          return e;
        };
        return n.d(t, "a", t), t;
      }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, n.p = "", n(n.s = 1);
      function n(e) {
        if (i[e]) return i[e].exports;
        var t = i[e] = { i: e, l: false, exports: {} };
        return a[e].call(t.exports, t, t.exports, n), t.l = true, t.exports;
      }
      var a, i;
    });
  }
});

// browser-external:fs
var require_fs = __commonJS({
  "browser-external:fs"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "fs" has been externalized for browser compatibility. Cannot access "fs.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:path
var require_path = __commonJS({
  "browser-external:path"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "path" has been externalized for browser compatibility. Cannot access "path.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/@cornerstonejs/codec-libjpeg-turbo-8bit/dist/libjpegturbowasm_decode.js
var require_libjpegturbowasm_decode = __commonJS({
  "node_modules/@cornerstonejs/codec-libjpeg-turbo-8bit/dist/libjpegturbowasm_decode.js"(exports, module) {
    var libjpegturbowasm_decode = (() => {
      var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
      if (typeof __filename !== "undefined") _scriptDir = _scriptDir || __filename;
      return function(libjpegturbowasm_decode2) {
        libjpegturbowasm_decode2 = libjpegturbowasm_decode2 || {};
        var Module = typeof libjpegturbowasm_decode2 != "undefined" ? libjpegturbowasm_decode2 : {};
        var readyPromiseResolve, readyPromiseReject;
        Module["ready"] = new Promise(function(resolve, reject) {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        var moduleOverrides = Object.assign({}, Module);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow) => {
          throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = typeof window == "object";
        var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
        var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
        var scriptDirectory = "";
        function locateFile(path) {
          if (Module["locateFile"]) {
            return Module["locateFile"](path, scriptDirectory);
          }
          return scriptDirectory + path;
        }
        var read_, readAsync, readBinary, setWindowTitle;
        function logExceptionOnExit(e) {
          if (e instanceof ExitStatus) return;
          let toLog = e;
          err("exiting due to exception: " + toLog);
        }
        if (ENVIRONMENT_IS_NODE) {
          var fs = require_fs();
          var nodePath = require_path();
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = nodePath.dirname(scriptDirectory) + "/";
          } else {
            scriptDirectory = __dirname + "/";
          }
          read_ = (filename, binary) => {
            filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
            return fs.readFileSync(filename, binary ? void 0 : "utf8");
          };
          readBinary = (filename) => {
            var ret = read_(filename, true);
            if (!ret.buffer) {
              ret = new Uint8Array(ret);
            }
            return ret;
          };
          readAsync = (filename, onload, onerror) => {
            filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
            fs.readFile(filename, function(err2, data) {
              if (err2) onerror(err2);
              else onload(data.buffer);
            });
          };
          if (process["argv"].length > 1) {
            thisProgram = process["argv"][1].replace(/\\/g, "/");
          }
          arguments_ = process["argv"].slice(2);
          process["on"]("uncaughtException", function(ex) {
            if (!(ex instanceof ExitStatus)) {
              throw ex;
            }
          });
          process["on"]("unhandledRejection", function(reason) {
            throw reason;
          });
          quit_ = (status, toThrow) => {
            if (keepRuntimeAlive()) {
              process["exitCode"] = status;
              throw toThrow;
            }
            logExceptionOnExit(toThrow);
            process["exit"](status);
          };
          Module["inspect"] = function() {
            return "[Emscripten Module object]";
          };
        } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
          } else if (typeof document != "undefined" && document.currentScript) {
            scriptDirectory = document.currentScript.src;
          }
          if (_scriptDir) {
            scriptDirectory = _scriptDir;
          }
          if (scriptDirectory.indexOf("blob:") !== 0) {
            scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
          } else {
            scriptDirectory = "";
          }
          {
            read_ = (url) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              xhr.send(null);
              return xhr.responseText;
            };
            if (ENVIRONMENT_IS_WORKER) {
              readBinary = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
              };
            }
            readAsync = (url, onload, onerror) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.onload = () => {
                if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                  onload(xhr.response);
                  return;
                }
                onerror();
              };
              xhr.onerror = onerror;
              xhr.send(null);
            };
          }
          setWindowTitle = (title) => document.title = title;
        } else {
        }
        var out = Module["print"] || console.log.bind(console);
        var err = Module["printErr"] || console.warn.bind(console);
        Object.assign(Module, moduleOverrides);
        moduleOverrides = null;
        if (Module["arguments"]) arguments_ = Module["arguments"];
        if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
        if (Module["quit"]) quit_ = Module["quit"];
        var wasmBinary;
        if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
        var noExitRuntime = Module["noExitRuntime"] || true;
        if (typeof WebAssembly != "object") {
          abort("no native wasm support detected");
        }
        var wasmMemory;
        var ABORT = false;
        var EXITSTATUS;
        function assert(condition, text) {
          if (!condition) {
            abort(text);
          }
        }
        var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
        function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
          var endIdx = idx + maxBytesToRead;
          var endPtr = idx;
          while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
          if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
            return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
          }
          var str = "";
          while (idx < endPtr) {
            var u0 = heapOrArray[idx++];
            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
              str += String.fromCharCode((u0 & 31) << 6 | u1);
              continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
              u0 = (u0 & 15) << 12 | u1 << 6 | u2;
            } else {
              u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
            }
            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            }
          }
          return str;
        }
        function UTF8ToString(ptr, maxBytesToRead) {
          return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        }
        function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
          if (!(maxBytesToWrite > 0)) return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = 65536 + ((u & 1023) << 10) | u1 & 1023;
            }
            if (u <= 127) {
              if (outIdx >= endIdx) break;
              heap[outIdx++] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx) break;
              heap[outIdx++] = 192 | u >> 6;
              heap[outIdx++] = 128 | u & 63;
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx) break;
              heap[outIdx++] = 224 | u >> 12;
              heap[outIdx++] = 128 | u >> 6 & 63;
              heap[outIdx++] = 128 | u & 63;
            } else {
              if (outIdx + 3 >= endIdx) break;
              heap[outIdx++] = 240 | u >> 18;
              heap[outIdx++] = 128 | u >> 12 & 63;
              heap[outIdx++] = 128 | u >> 6 & 63;
              heap[outIdx++] = 128 | u & 63;
            }
          }
          heap[outIdx] = 0;
          return outIdx - startIdx;
        }
        function stringToUTF8(str, outPtr, maxBytesToWrite) {
          return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        }
        function lengthBytesUTF8(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var c = str.charCodeAt(i);
            if (c <= 127) {
              len++;
            } else if (c <= 2047) {
              len += 2;
            } else if (c >= 55296 && c <= 57343) {
              len += 4;
              ++i;
            } else {
              len += 3;
            }
          }
          return len;
        }
        var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateGlobalBufferAndViews(buf) {
          buffer = buf;
          Module["HEAP8"] = HEAP8 = new Int8Array(buf);
          Module["HEAP16"] = HEAP16 = new Int16Array(buf);
          Module["HEAP32"] = HEAP32 = new Int32Array(buf);
          Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
          Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
          Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
          Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
          Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
        }
        var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 52428800;
        var wasmTable;
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        function keepRuntimeAlive() {
          return noExitRuntime;
        }
        function preRun() {
          if (Module["preRun"]) {
            if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
            while (Module["preRun"].length) {
              addOnPreRun(Module["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          runtimeInitialized = true;
          callRuntimeCallbacks(__ATINIT__);
        }
        function postRun() {
          if (Module["postRun"]) {
            if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
            while (Module["postRun"].length) {
              addOnPostRun(Module["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
          __ATINIT__.unshift(cb);
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function addRunDependency(id) {
          runDependencies++;
          if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
          }
        }
        function removeRunDependency(id) {
          runDependencies--;
          if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
          }
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        function abort(what) {
          if (Module["onAbort"]) {
            Module["onAbort"](what);
          }
          what = "Aborted(" + what + ")";
          err(what);
          ABORT = true;
          EXITSTATUS = 1;
          what += ". Build with -sASSERTIONS for more info.";
          var e = new WebAssembly.RuntimeError(what);
          readyPromiseReject(e);
          throw e;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) {
          return filename.startsWith(dataURIPrefix);
        }
        function isFileURI(filename) {
          return filename.startsWith("file://");
        }
        var wasmBinaryFile;
        wasmBinaryFile = "libjpegturbowasm_decode.wasm";
        if (!isDataURI(wasmBinaryFile)) {
          wasmBinaryFile = locateFile(wasmBinaryFile);
        }
        function getBinary(file) {
          try {
            if (file == wasmBinaryFile && wasmBinary) {
              return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
              return readBinary(file);
            }
            throw "both async and sync fetching of the wasm failed";
          } catch (err2) {
            abort(err2);
          }
        }
        function getBinaryPromise() {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
            if (typeof fetch == "function" && !isFileURI(wasmBinaryFile)) {
              return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
                if (!response["ok"]) {
                  throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
                }
                return response["arrayBuffer"]();
              }).catch(function() {
                return getBinary(wasmBinaryFile);
              });
            } else {
              if (readAsync) {
                return new Promise(function(resolve, reject) {
                  readAsync(wasmBinaryFile, function(response) {
                    resolve(new Uint8Array(response));
                  }, reject);
                });
              }
            }
          }
          return Promise.resolve().then(function() {
            return getBinary(wasmBinaryFile);
          });
        }
        function createWasm() {
          var info = { "a": asmLibraryArg };
          function receiveInstance(instance, module2) {
            var exports3 = instance.exports;
            Module["asm"] = exports3;
            wasmMemory = Module["asm"]["K"];
            updateGlobalBufferAndViews(wasmMemory.buffer);
            wasmTable = Module["asm"]["M"];
            addOnInit(Module["asm"]["L"]);
            removeRunDependency("wasm-instantiate");
          }
          addRunDependency("wasm-instantiate");
          function receiveInstantiationResult(result) {
            receiveInstance(result["instance"]);
          }
          function instantiateArrayBuffer(receiver) {
            return getBinaryPromise().then(function(binary) {
              return WebAssembly.instantiate(binary, info);
            }).then(function(instance) {
              return instance;
            }).then(receiver, function(reason) {
              err("failed to asynchronously prepare wasm: " + reason);
              abort(reason);
            });
          }
          function instantiateAsync() {
            if (!wasmBinary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(wasmBinaryFile) && !isFileURI(wasmBinaryFile) && !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
              return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
                var result = WebAssembly.instantiateStreaming(response, info);
                return result.then(receiveInstantiationResult, function(reason) {
                  err("wasm streaming compile failed: " + reason);
                  err("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(receiveInstantiationResult);
                });
              });
            } else {
              return instantiateArrayBuffer(receiveInstantiationResult);
            }
          }
          if (Module["instantiateWasm"]) {
            try {
              var exports2 = Module["instantiateWasm"](info, receiveInstance);
              return exports2;
            } catch (e) {
              err("Module.instantiateWasm callback failed with error: " + e);
              readyPromiseReject(e);
            }
          }
          instantiateAsync().catch(readyPromiseReject);
          return {};
        }
        function ExitStatus(status) {
          this.name = "ExitStatus";
          this.message = "Program terminated with exit(" + status + ")";
          this.status = status;
        }
        function callRuntimeCallbacks(callbacks) {
          while (callbacks.length > 0) {
            callbacks.shift()(Module);
          }
        }
        function ExceptionInfo(excPtr) {
          this.excPtr = excPtr;
          this.ptr = excPtr - 24;
          this.set_type = function(type) {
            HEAPU32[this.ptr + 4 >> 2] = type;
          };
          this.get_type = function() {
            return HEAPU32[this.ptr + 4 >> 2];
          };
          this.set_destructor = function(destructor) {
            HEAPU32[this.ptr + 8 >> 2] = destructor;
          };
          this.get_destructor = function() {
            return HEAPU32[this.ptr + 8 >> 2];
          };
          this.set_refcount = function(refcount) {
            HEAP32[this.ptr >> 2] = refcount;
          };
          this.set_caught = function(caught) {
            caught = caught ? 1 : 0;
            HEAP8[this.ptr + 12 >> 0] = caught;
          };
          this.get_caught = function() {
            return HEAP8[this.ptr + 12 >> 0] != 0;
          };
          this.set_rethrown = function(rethrown) {
            rethrown = rethrown ? 1 : 0;
            HEAP8[this.ptr + 13 >> 0] = rethrown;
          };
          this.get_rethrown = function() {
            return HEAP8[this.ptr + 13 >> 0] != 0;
          };
          this.init = function(type, destructor) {
            this.set_adjusted_ptr(0);
            this.set_type(type);
            this.set_destructor(destructor);
            this.set_refcount(0);
            this.set_caught(false);
            this.set_rethrown(false);
          };
          this.add_ref = function() {
            var value = HEAP32[this.ptr >> 2];
            HEAP32[this.ptr >> 2] = value + 1;
          };
          this.release_ref = function() {
            var prev = HEAP32[this.ptr >> 2];
            HEAP32[this.ptr >> 2] = prev - 1;
            return prev === 1;
          };
          this.set_adjusted_ptr = function(adjustedPtr) {
            HEAPU32[this.ptr + 16 >> 2] = adjustedPtr;
          };
          this.get_adjusted_ptr = function() {
            return HEAPU32[this.ptr + 16 >> 2];
          };
          this.get_exception_ptr = function() {
            var isPointer = ___cxa_is_pointer_type(this.get_type());
            if (isPointer) {
              return HEAPU32[this.excPtr >> 2];
            }
            var adjusted = this.get_adjusted_ptr();
            if (adjusted !== 0) return adjusted;
            return this.excPtr;
          };
        }
        var exceptionLast = 0;
        var uncaughtExceptionCount = 0;
        function ___cxa_throw(ptr, type, destructor) {
          var info = new ExceptionInfo(ptr);
          info.init(type, destructor);
          exceptionLast = ptr;
          uncaughtExceptionCount++;
          throw ptr;
        }
        var structRegistrations = {};
        function runDestructors(destructors) {
          while (destructors.length) {
            var ptr = destructors.pop();
            var del = destructors.pop();
            del(ptr);
          }
        }
        function simpleReadValueFromPointer(pointer) {
          return this["fromWireType"](HEAP32[pointer >> 2]);
        }
        var awaitingDependencies = {};
        var registeredTypes = {};
        var typeDependencies = {};
        var char_0 = 48;
        var char_9 = 57;
        function makeLegalFunctionName(name) {
          if (void 0 === name) {
            return "_unknown";
          }
          name = name.replace(/[^a-zA-Z0-9_]/g, "$");
          var f = name.charCodeAt(0);
          if (f >= char_0 && f <= char_9) {
            return "_" + name;
          }
          return name;
        }
        function createNamedFunction(name, body) {
          name = makeLegalFunctionName(name);
          return new Function("body", "return function " + name + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(body);
        }
        function extendError(baseErrorType, errorName) {
          var errorClass = createNamedFunction(errorName, function(message) {
            this.name = errorName;
            this.message = message;
            var stack = new Error(message).stack;
            if (stack !== void 0) {
              this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "");
            }
          });
          errorClass.prototype = Object.create(baseErrorType.prototype);
          errorClass.prototype.constructor = errorClass;
          errorClass.prototype.toString = function() {
            if (this.message === void 0) {
              return this.name;
            } else {
              return this.name + ": " + this.message;
            }
          };
          return errorClass;
        }
        var InternalError = void 0;
        function throwInternalError(message) {
          throw new InternalError(message);
        }
        function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
          myTypes.forEach(function(type) {
            typeDependencies[type] = dependentTypes;
          });
          function onComplete(typeConverters2) {
            var myTypeConverters = getTypeConverters(typeConverters2);
            if (myTypeConverters.length !== myTypes.length) {
              throwInternalError("Mismatched type converter count");
            }
            for (var i = 0; i < myTypes.length; ++i) {
              registerType(myTypes[i], myTypeConverters[i]);
            }
          }
          var typeConverters = new Array(dependentTypes.length);
          var unregisteredTypes = [];
          var registered = 0;
          dependentTypes.forEach((dt, i) => {
            if (registeredTypes.hasOwnProperty(dt)) {
              typeConverters[i] = registeredTypes[dt];
            } else {
              unregisteredTypes.push(dt);
              if (!awaitingDependencies.hasOwnProperty(dt)) {
                awaitingDependencies[dt] = [];
              }
              awaitingDependencies[dt].push(() => {
                typeConverters[i] = registeredTypes[dt];
                ++registered;
                if (registered === unregisteredTypes.length) {
                  onComplete(typeConverters);
                }
              });
            }
          });
          if (0 === unregisteredTypes.length) {
            onComplete(typeConverters);
          }
        }
        function __embind_finalize_value_object(structType) {
          var reg = structRegistrations[structType];
          delete structRegistrations[structType];
          var rawConstructor = reg.rawConstructor;
          var rawDestructor = reg.rawDestructor;
          var fieldRecords = reg.fields;
          var fieldTypes = fieldRecords.map((field) => field.getterReturnType).concat(fieldRecords.map((field) => field.setterArgumentType));
          whenDependentTypesAreResolved([structType], fieldTypes, (fieldTypes2) => {
            var fields = {};
            fieldRecords.forEach((field, i) => {
              var fieldName = field.fieldName;
              var getterReturnType = fieldTypes2[i];
              var getter = field.getter;
              var getterContext = field.getterContext;
              var setterArgumentType = fieldTypes2[i + fieldRecords.length];
              var setter = field.setter;
              var setterContext = field.setterContext;
              fields[fieldName] = { read: (ptr) => {
                return getterReturnType["fromWireType"](getter(getterContext, ptr));
              }, write: (ptr, o) => {
                var destructors = [];
                setter(setterContext, ptr, setterArgumentType["toWireType"](destructors, o));
                runDestructors(destructors);
              } };
            });
            return [{ name: reg.name, "fromWireType": function(ptr) {
              var rv = {};
              for (var i in fields) {
                rv[i] = fields[i].read(ptr);
              }
              rawDestructor(ptr);
              return rv;
            }, "toWireType": function(destructors, o) {
              for (var fieldName in fields) {
                if (!(fieldName in o)) {
                  throw new TypeError('Missing field:  "' + fieldName + '"');
                }
              }
              var ptr = rawConstructor();
              for (fieldName in fields) {
                fields[fieldName].write(ptr, o[fieldName]);
              }
              if (destructors !== null) {
                destructors.push(rawDestructor, ptr);
              }
              return ptr;
            }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: rawDestructor }];
          });
        }
        function __embind_register_bigint(primitiveType, name, size, minRange, maxRange) {
        }
        function getShiftFromSize(size) {
          switch (size) {
            case 1:
              return 0;
            case 2:
              return 1;
            case 4:
              return 2;
            case 8:
              return 3;
            default:
              throw new TypeError("Unknown type size: " + size);
          }
        }
        function embind_init_charCodes() {
          var codes = new Array(256);
          for (var i = 0; i < 256; ++i) {
            codes[i] = String.fromCharCode(i);
          }
          embind_charCodes = codes;
        }
        var embind_charCodes = void 0;
        function readLatin1String(ptr) {
          var ret = "";
          var c = ptr;
          while (HEAPU8[c]) {
            ret += embind_charCodes[HEAPU8[c++]];
          }
          return ret;
        }
        var BindingError = void 0;
        function throwBindingError(message) {
          throw new BindingError(message);
        }
        function registerType(rawType, registeredInstance, options2 = {}) {
          if (!("argPackAdvance" in registeredInstance)) {
            throw new TypeError("registerType registeredInstance requires argPackAdvance");
          }
          var name = registeredInstance.name;
          if (!rawType) {
            throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
          }
          if (registeredTypes.hasOwnProperty(rawType)) {
            if (options2.ignoreDuplicateRegistrations) {
              return;
            } else {
              throwBindingError("Cannot register type '" + name + "' twice");
            }
          }
          registeredTypes[rawType] = registeredInstance;
          delete typeDependencies[rawType];
          if (awaitingDependencies.hasOwnProperty(rawType)) {
            var callbacks = awaitingDependencies[rawType];
            delete awaitingDependencies[rawType];
            callbacks.forEach((cb) => cb());
          }
        }
        function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, { name, "fromWireType": function(wt) {
            return !!wt;
          }, "toWireType": function(destructors, o) {
            return o ? trueValue : falseValue;
          }, "argPackAdvance": 8, "readValueFromPointer": function(pointer) {
            var heap;
            if (size === 1) {
              heap = HEAP8;
            } else if (size === 2) {
              heap = HEAP16;
            } else if (size === 4) {
              heap = HEAP32;
            } else {
              throw new TypeError("Unknown boolean type size: " + name);
            }
            return this["fromWireType"](heap[pointer >> shift]);
          }, destructorFunction: null });
        }
        function ClassHandle_isAliasOf(other) {
          if (!(this instanceof ClassHandle)) {
            return false;
          }
          if (!(other instanceof ClassHandle)) {
            return false;
          }
          var leftClass = this.$$.ptrType.registeredClass;
          var left = this.$$.ptr;
          var rightClass = other.$$.ptrType.registeredClass;
          var right = other.$$.ptr;
          while (leftClass.baseClass) {
            left = leftClass.upcast(left);
            leftClass = leftClass.baseClass;
          }
          while (rightClass.baseClass) {
            right = rightClass.upcast(right);
            rightClass = rightClass.baseClass;
          }
          return leftClass === rightClass && left === right;
        }
        function shallowCopyInternalPointer(o) {
          return { count: o.count, deleteScheduled: o.deleteScheduled, preservePointerOnDelete: o.preservePointerOnDelete, ptr: o.ptr, ptrType: o.ptrType, smartPtr: o.smartPtr, smartPtrType: o.smartPtrType };
        }
        function throwInstanceAlreadyDeleted(obj2) {
          function getInstanceTypeName(handle) {
            return handle.$$.ptrType.registeredClass.name;
          }
          throwBindingError(getInstanceTypeName(obj2) + " instance already deleted");
        }
        var finalizationRegistry = false;
        function detachFinalizer(handle) {
        }
        function runDestructor($$) {
          if ($$.smartPtr) {
            $$.smartPtrType.rawDestructor($$.smartPtr);
          } else {
            $$.ptrType.registeredClass.rawDestructor($$.ptr);
          }
        }
        function releaseClassHandle($$) {
          $$.count.value -= 1;
          var toDelete = 0 === $$.count.value;
          if (toDelete) {
            runDestructor($$);
          }
        }
        function downcastPointer(ptr, ptrClass, desiredClass) {
          if (ptrClass === desiredClass) {
            return ptr;
          }
          if (void 0 === desiredClass.baseClass) {
            return null;
          }
          var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
          if (rv === null) {
            return null;
          }
          return desiredClass.downcast(rv);
        }
        var registeredPointers = {};
        function getInheritedInstanceCount() {
          return Object.keys(registeredInstances).length;
        }
        function getLiveInheritedInstances() {
          var rv = [];
          for (var k in registeredInstances) {
            if (registeredInstances.hasOwnProperty(k)) {
              rv.push(registeredInstances[k]);
            }
          }
          return rv;
        }
        var deletionQueue = [];
        function flushPendingDeletes() {
          while (deletionQueue.length) {
            var obj2 = deletionQueue.pop();
            obj2.$$.deleteScheduled = false;
            obj2["delete"]();
          }
        }
        var delayFunction = void 0;
        function setDelayFunction(fn) {
          delayFunction = fn;
          if (deletionQueue.length && delayFunction) {
            delayFunction(flushPendingDeletes);
          }
        }
        function init_embind() {
          Module["getInheritedInstanceCount"] = getInheritedInstanceCount;
          Module["getLiveInheritedInstances"] = getLiveInheritedInstances;
          Module["flushPendingDeletes"] = flushPendingDeletes;
          Module["setDelayFunction"] = setDelayFunction;
        }
        var registeredInstances = {};
        function getBasestPointer(class_, ptr) {
          if (ptr === void 0) {
            throwBindingError("ptr should not be undefined");
          }
          while (class_.baseClass) {
            ptr = class_.upcast(ptr);
            class_ = class_.baseClass;
          }
          return ptr;
        }
        function getInheritedInstance(class_, ptr) {
          ptr = getBasestPointer(class_, ptr);
          return registeredInstances[ptr];
        }
        function makeClassHandle(prototype, record) {
          if (!record.ptrType || !record.ptr) {
            throwInternalError("makeClassHandle requires ptr and ptrType");
          }
          var hasSmartPtrType = !!record.smartPtrType;
          var hasSmartPtr = !!record.smartPtr;
          if (hasSmartPtrType !== hasSmartPtr) {
            throwInternalError("Both smartPtrType and smartPtr must be specified");
          }
          record.count = { value: 1 };
          return attachFinalizer(Object.create(prototype, { $$: { value: record } }));
        }
        function RegisteredPointer_fromWireType(ptr) {
          var rawPointer = this.getPointee(ptr);
          if (!rawPointer) {
            this.destructor(ptr);
            return null;
          }
          var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
          if (void 0 !== registeredInstance) {
            if (0 === registeredInstance.$$.count.value) {
              registeredInstance.$$.ptr = rawPointer;
              registeredInstance.$$.smartPtr = ptr;
              return registeredInstance["clone"]();
            } else {
              var rv = registeredInstance["clone"]();
              this.destructor(ptr);
              return rv;
            }
          }
          function makeDefaultHandle() {
            if (this.isSmartPointer) {
              return makeClassHandle(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: rawPointer, smartPtrType: this, smartPtr: ptr });
            } else {
              return makeClassHandle(this.registeredClass.instancePrototype, { ptrType: this, ptr });
            }
          }
          var actualType = this.registeredClass.getActualType(rawPointer);
          var registeredPointerRecord = registeredPointers[actualType];
          if (!registeredPointerRecord) {
            return makeDefaultHandle.call(this);
          }
          var toType;
          if (this.isConst) {
            toType = registeredPointerRecord.constPointerType;
          } else {
            toType = registeredPointerRecord.pointerType;
          }
          var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass);
          if (dp === null) {
            return makeDefaultHandle.call(this);
          }
          if (this.isSmartPointer) {
            return makeClassHandle(toType.registeredClass.instancePrototype, { ptrType: toType, ptr: dp, smartPtrType: this, smartPtr: ptr });
          } else {
            return makeClassHandle(toType.registeredClass.instancePrototype, { ptrType: toType, ptr: dp });
          }
        }
        function attachFinalizer(handle) {
          if ("undefined" === typeof FinalizationRegistry) {
            attachFinalizer = (handle2) => handle2;
            return handle;
          }
          finalizationRegistry = new FinalizationRegistry((info) => {
            releaseClassHandle(info.$$);
          });
          attachFinalizer = (handle2) => {
            var $$ = handle2.$$;
            var hasSmartPtr = !!$$.smartPtr;
            if (hasSmartPtr) {
              var info = { $$ };
              finalizationRegistry.register(handle2, info, handle2);
            }
            return handle2;
          };
          detachFinalizer = (handle2) => finalizationRegistry.unregister(handle2);
          return attachFinalizer(handle);
        }
        function ClassHandle_clone() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.preservePointerOnDelete) {
            this.$$.count.value += 1;
            return this;
          } else {
            var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), { $$: { value: shallowCopyInternalPointer(this.$$) } }));
            clone.$$.count.value += 1;
            clone.$$.deleteScheduled = false;
            return clone;
          }
        }
        function ClassHandle_delete() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
            throwBindingError("Object already scheduled for deletion");
          }
          detachFinalizer(this);
          releaseClassHandle(this.$$);
          if (!this.$$.preservePointerOnDelete) {
            this.$$.smartPtr = void 0;
            this.$$.ptr = void 0;
          }
        }
        function ClassHandle_isDeleted() {
          return !this.$$.ptr;
        }
        function ClassHandle_deleteLater() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
            throwBindingError("Object already scheduled for deletion");
          }
          deletionQueue.push(this);
          if (deletionQueue.length === 1 && delayFunction) {
            delayFunction(flushPendingDeletes);
          }
          this.$$.deleteScheduled = true;
          return this;
        }
        function init_ClassHandle() {
          ClassHandle.prototype["isAliasOf"] = ClassHandle_isAliasOf;
          ClassHandle.prototype["clone"] = ClassHandle_clone;
          ClassHandle.prototype["delete"] = ClassHandle_delete;
          ClassHandle.prototype["isDeleted"] = ClassHandle_isDeleted;
          ClassHandle.prototype["deleteLater"] = ClassHandle_deleteLater;
        }
        function ClassHandle() {
        }
        function ensureOverloadTable(proto, methodName, humanName) {
          if (void 0 === proto[methodName].overloadTable) {
            var prevFunc = proto[methodName];
            proto[methodName] = function() {
              if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
                throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
              }
              return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
            };
            proto[methodName].overloadTable = [];
            proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
          }
        }
        function exposePublicSymbol(name, value, numArguments) {
          if (Module.hasOwnProperty(name)) {
            if (void 0 === numArguments || void 0 !== Module[name].overloadTable && void 0 !== Module[name].overloadTable[numArguments]) {
              throwBindingError("Cannot register public name '" + name + "' twice");
            }
            ensureOverloadTable(Module, name, name);
            if (Module.hasOwnProperty(numArguments)) {
              throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
            }
            Module[name].overloadTable[numArguments] = value;
          } else {
            Module[name] = value;
            if (void 0 !== numArguments) {
              Module[name].numArguments = numArguments;
            }
          }
        }
        function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
          this.name = name;
          this.constructor = constructor;
          this.instancePrototype = instancePrototype;
          this.rawDestructor = rawDestructor;
          this.baseClass = baseClass;
          this.getActualType = getActualType;
          this.upcast = upcast;
          this.downcast = downcast;
          this.pureVirtualFunctions = [];
        }
        function upcastPointer(ptr, ptrClass, desiredClass) {
          while (ptrClass !== desiredClass) {
            if (!ptrClass.upcast) {
              throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name);
            }
            ptr = ptrClass.upcast(ptr);
            ptrClass = ptrClass.baseClass;
          }
          return ptr;
        }
        function constNoSmartPtrRawPointerToWireType(destructors, handle) {
          if (handle === null) {
            if (this.isReference) {
              throwBindingError("null is not a valid " + this.name);
            }
            return 0;
          }
          if (!handle.$$) {
            throwBindingError('Cannot pass "' + embindRepr(handle) + '" as a ' + this.name);
          }
          if (!handle.$$.ptr) {
            throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
          }
          var handleClass = handle.$$.ptrType.registeredClass;
          var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
          return ptr;
        }
        function genericPointerToWireType(destructors, handle) {
          var ptr;
          if (handle === null) {
            if (this.isReference) {
              throwBindingError("null is not a valid " + this.name);
            }
            if (this.isSmartPointer) {
              ptr = this.rawConstructor();
              if (destructors !== null) {
                destructors.push(this.rawDestructor, ptr);
              }
              return ptr;
            } else {
              return 0;
            }
          }
          if (!handle.$$) {
            throwBindingError('Cannot pass "' + embindRepr(handle) + '" as a ' + this.name);
          }
          if (!handle.$$.ptr) {
            throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
          }
          if (!this.isConst && handle.$$.ptrType.isConst) {
            throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
          }
          var handleClass = handle.$$.ptrType.registeredClass;
          ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
          if (this.isSmartPointer) {
            if (void 0 === handle.$$.smartPtr) {
              throwBindingError("Passing raw pointer to smart pointer is illegal");
            }
            switch (this.sharingPolicy) {
              case 0:
                if (handle.$$.smartPtrType === this) {
                  ptr = handle.$$.smartPtr;
                } else {
                  throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
                }
                break;
              case 1:
                ptr = handle.$$.smartPtr;
                break;
              case 2:
                if (handle.$$.smartPtrType === this) {
                  ptr = handle.$$.smartPtr;
                } else {
                  var clonedHandle = handle["clone"]();
                  ptr = this.rawShare(ptr, Emval.toHandle(function() {
                    clonedHandle["delete"]();
                  }));
                  if (destructors !== null) {
                    destructors.push(this.rawDestructor, ptr);
                  }
                }
                break;
              default:
                throwBindingError("Unsupporting sharing policy");
            }
          }
          return ptr;
        }
        function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
          if (handle === null) {
            if (this.isReference) {
              throwBindingError("null is not a valid " + this.name);
            }
            return 0;
          }
          if (!handle.$$) {
            throwBindingError('Cannot pass "' + embindRepr(handle) + '" as a ' + this.name);
          }
          if (!handle.$$.ptr) {
            throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
          }
          if (handle.$$.ptrType.isConst) {
            throwBindingError("Cannot convert argument of type " + handle.$$.ptrType.name + " to parameter type " + this.name);
          }
          var handleClass = handle.$$.ptrType.registeredClass;
          var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
          return ptr;
        }
        function RegisteredPointer_getPointee(ptr) {
          if (this.rawGetPointee) {
            ptr = this.rawGetPointee(ptr);
          }
          return ptr;
        }
        function RegisteredPointer_destructor(ptr) {
          if (this.rawDestructor) {
            this.rawDestructor(ptr);
          }
        }
        function RegisteredPointer_deleteObject(handle) {
          if (handle !== null) {
            handle["delete"]();
          }
        }
        function init_RegisteredPointer() {
          RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
          RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
          RegisteredPointer.prototype["argPackAdvance"] = 8;
          RegisteredPointer.prototype["readValueFromPointer"] = simpleReadValueFromPointer;
          RegisteredPointer.prototype["deleteObject"] = RegisteredPointer_deleteObject;
          RegisteredPointer.prototype["fromWireType"] = RegisteredPointer_fromWireType;
        }
        function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
          this.name = name;
          this.registeredClass = registeredClass;
          this.isReference = isReference;
          this.isConst = isConst;
          this.isSmartPointer = isSmartPointer;
          this.pointeeType = pointeeType;
          this.sharingPolicy = sharingPolicy;
          this.rawGetPointee = rawGetPointee;
          this.rawConstructor = rawConstructor;
          this.rawShare = rawShare;
          this.rawDestructor = rawDestructor;
          if (!isSmartPointer && registeredClass.baseClass === void 0) {
            if (isConst) {
              this["toWireType"] = constNoSmartPtrRawPointerToWireType;
              this.destructorFunction = null;
            } else {
              this["toWireType"] = nonConstNoSmartPtrRawPointerToWireType;
              this.destructorFunction = null;
            }
          } else {
            this["toWireType"] = genericPointerToWireType;
          }
        }
        function replacePublicSymbol(name, value, numArguments) {
          if (!Module.hasOwnProperty(name)) {
            throwInternalError("Replacing nonexistant public symbol");
          }
          if (void 0 !== Module[name].overloadTable && void 0 !== numArguments) {
            Module[name].overloadTable[numArguments] = value;
          } else {
            Module[name] = value;
            Module[name].argCount = numArguments;
          }
        }
        function dynCallLegacy(sig, ptr, args) {
          var f = Module["dynCall_" + sig];
          return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr);
        }
        var wasmTableMirror = [];
        function getWasmTableEntry(funcPtr) {
          var func = wasmTableMirror[funcPtr];
          if (!func) {
            if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
            wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
          }
          return func;
        }
        function dynCall(sig, ptr, args) {
          if (sig.includes("j")) {
            return dynCallLegacy(sig, ptr, args);
          }
          var rtn = getWasmTableEntry(ptr).apply(null, args);
          return rtn;
        }
        function getDynCaller(sig, ptr) {
          var argCache = [];
          return function() {
            argCache.length = 0;
            Object.assign(argCache, arguments);
            return dynCall(sig, ptr, argCache);
          };
        }
        function embind__requireFunction(signature, rawFunction) {
          signature = readLatin1String(signature);
          function makeDynCaller() {
            if (signature.includes("j")) {
              return getDynCaller(signature, rawFunction);
            }
            return getWasmTableEntry(rawFunction);
          }
          var fp = makeDynCaller();
          if (typeof fp != "function") {
            throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
          }
          return fp;
        }
        var UnboundTypeError = void 0;
        function getTypeName(type) {
          var ptr = ___getTypeName(type);
          var rv = readLatin1String(ptr);
          _free(ptr);
          return rv;
        }
        function throwUnboundTypeError(message, types) {
          var unboundTypes = [];
          var seen = {};
          function visit(type) {
            if (seen[type]) {
              return;
            }
            if (registeredTypes[type]) {
              return;
            }
            if (typeDependencies[type]) {
              typeDependencies[type].forEach(visit);
              return;
            }
            unboundTypes.push(type);
            seen[type] = true;
          }
          types.forEach(visit);
          throw new UnboundTypeError(message + ": " + unboundTypes.map(getTypeName).join([", "]));
        }
        function __embind_register_class(rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) {
          name = readLatin1String(name);
          getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
          if (upcast) {
            upcast = embind__requireFunction(upcastSignature, upcast);
          }
          if (downcast) {
            downcast = embind__requireFunction(downcastSignature, downcast);
          }
          rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
          var legalFunctionName = makeLegalFunctionName(name);
          exposePublicSymbol(legalFunctionName, function() {
            throwUnboundTypeError("Cannot construct " + name + " due to unbound types", [baseClassRawType]);
          });
          whenDependentTypesAreResolved([rawType, rawPointerType, rawConstPointerType], baseClassRawType ? [baseClassRawType] : [], function(base) {
            base = base[0];
            var baseClass;
            var basePrototype;
            if (baseClassRawType) {
              baseClass = base.registeredClass;
              basePrototype = baseClass.instancePrototype;
            } else {
              basePrototype = ClassHandle.prototype;
            }
            var constructor = createNamedFunction(legalFunctionName, function() {
              if (Object.getPrototypeOf(this) !== instancePrototype) {
                throw new BindingError("Use 'new' to construct " + name);
              }
              if (void 0 === registeredClass.constructor_body) {
                throw new BindingError(name + " has no accessible constructor");
              }
              var body = registeredClass.constructor_body[arguments.length];
              if (void 0 === body) {
                throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!");
              }
              return body.apply(this, arguments);
            });
            var instancePrototype = Object.create(basePrototype, { constructor: { value: constructor } });
            constructor.prototype = instancePrototype;
            var registeredClass = new RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast);
            var referenceConverter = new RegisteredPointer(name, registeredClass, true, false, false);
            var pointerConverter = new RegisteredPointer(name + "*", registeredClass, false, false, false);
            var constPointerConverter = new RegisteredPointer(name + " const*", registeredClass, false, true, false);
            registeredPointers[rawType] = { pointerType: pointerConverter, constPointerType: constPointerConverter };
            replacePublicSymbol(legalFunctionName, constructor);
            return [referenceConverter, pointerConverter, constPointerConverter];
          });
        }
        function heap32VectorToArray(count, firstElement) {
          var array = [];
          for (var i = 0; i < count; i++) {
            array.push(HEAPU32[firstElement + i * 4 >> 2]);
          }
          return array;
        }
        function new_(constructor, argumentList) {
          if (!(constructor instanceof Function)) {
            throw new TypeError("new_ called with constructor type " + typeof constructor + " which is not a function");
          }
          var dummy = createNamedFunction(constructor.name || "unknownFunctionName", function() {
          });
          dummy.prototype = constructor.prototype;
          var obj2 = new dummy();
          var r = constructor.apply(obj2, argumentList);
          return r instanceof Object ? r : obj2;
        }
        function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
          var argCount = argTypes.length;
          if (argCount < 2) {
            throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
          }
          var isClassMethodFunc = argTypes[1] !== null && classType !== null;
          var needsDestructorStack = false;
          for (var i = 1; i < argTypes.length; ++i) {
            if (argTypes[i] !== null && argTypes[i].destructorFunction === void 0) {
              needsDestructorStack = true;
              break;
            }
          }
          var returns = argTypes[0].name !== "void";
          var argsList = "";
          var argsListWired = "";
          for (var i = 0; i < argCount - 2; ++i) {
            argsList += (i !== 0 ? ", " : "") + "arg" + i;
            argsListWired += (i !== 0 ? ", " : "") + "arg" + i + "Wired";
          }
          var invokerFnBody = "return function " + makeLegalFunctionName(humanName) + "(" + argsList + ") {\nif (arguments.length !== " + (argCount - 2) + ") {\nthrowBindingError('function " + humanName + " called with ' + arguments.length + ' arguments, expected " + (argCount - 2) + " args!');\n}\n";
          if (needsDestructorStack) {
            invokerFnBody += "var destructors = [];\n";
          }
          var dtorStack = needsDestructorStack ? "destructors" : "null";
          var args1 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
          var args2 = [throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, argTypes[0], argTypes[1]];
          if (isClassMethodFunc) {
            invokerFnBody += "var thisWired = classParam.toWireType(" + dtorStack + ", this);\n";
          }
          for (var i = 0; i < argCount - 2; ++i) {
            invokerFnBody += "var arg" + i + "Wired = argType" + i + ".toWireType(" + dtorStack + ", arg" + i + "); // " + argTypes[i + 2].name + "\n";
            args1.push("argType" + i);
            args2.push(argTypes[i + 2]);
          }
          if (isClassMethodFunc) {
            argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired;
          }
          invokerFnBody += (returns ? "var rv = " : "") + "invoker(fn" + (argsListWired.length > 0 ? ", " : "") + argsListWired + ");\n";
          if (needsDestructorStack) {
            invokerFnBody += "runDestructors(destructors);\n";
          } else {
            for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
              var paramName = i === 1 ? "thisWired" : "arg" + (i - 2) + "Wired";
              if (argTypes[i].destructorFunction !== null) {
                invokerFnBody += paramName + "_dtor(" + paramName + "); // " + argTypes[i].name + "\n";
                args1.push(paramName + "_dtor");
                args2.push(argTypes[i].destructorFunction);
              }
            }
          }
          if (returns) {
            invokerFnBody += "var ret = retType.fromWireType(rv);\nreturn ret;\n";
          } else {
          }
          invokerFnBody += "}\n";
          args1.push(invokerFnBody);
          var invokerFunction = new_(Function, args1).apply(null, args2);
          return invokerFunction;
        }
        function __embind_register_class_constructor(rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) {
          assert(argCount > 0);
          var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
          invoker = embind__requireFunction(invokerSignature, invoker);
          whenDependentTypesAreResolved([], [rawClassType], function(classType) {
            classType = classType[0];
            var humanName = "constructor " + classType.name;
            if (void 0 === classType.registeredClass.constructor_body) {
              classType.registeredClass.constructor_body = [];
            }
            if (void 0 !== classType.registeredClass.constructor_body[argCount - 1]) {
              throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount - 1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
            }
            classType.registeredClass.constructor_body[argCount - 1] = () => {
              throwUnboundTypeError("Cannot construct " + classType.name + " due to unbound types", rawArgTypes);
            };
            whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
              argTypes.splice(1, 0, null);
              classType.registeredClass.constructor_body[argCount - 1] = craftInvokerFunction(humanName, argTypes, null, invoker, rawConstructor);
              return [];
            });
            return [];
          });
        }
        function __embind_register_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual) {
          var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
          methodName = readLatin1String(methodName);
          rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
          whenDependentTypesAreResolved([], [rawClassType], function(classType) {
            classType = classType[0];
            var humanName = classType.name + "." + methodName;
            if (methodName.startsWith("@@")) {
              methodName = Symbol[methodName.substring(2)];
            }
            if (isPureVirtual) {
              classType.registeredClass.pureVirtualFunctions.push(methodName);
            }
            function unboundTypesHandler() {
              throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes);
            }
            var proto = classType.registeredClass.instancePrototype;
            var method = proto[methodName];
            if (void 0 === method || void 0 === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2) {
              unboundTypesHandler.argCount = argCount - 2;
              unboundTypesHandler.className = classType.name;
              proto[methodName] = unboundTypesHandler;
            } else {
              ensureOverloadTable(proto, methodName, humanName);
              proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
            }
            whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
              var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);
              if (void 0 === proto[methodName].overloadTable) {
                memberFunction.argCount = argCount - 2;
                proto[methodName] = memberFunction;
              } else {
                proto[methodName].overloadTable[argCount - 2] = memberFunction;
              }
              return [];
            });
            return [];
          });
        }
        var emval_free_list = [];
        var emval_handle_array = [{}, { value: void 0 }, { value: null }, { value: true }, { value: false }];
        function __emval_decref(handle) {
          if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
            emval_handle_array[handle] = void 0;
            emval_free_list.push(handle);
          }
        }
        function count_emval_handles() {
          var count = 0;
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== void 0) {
              ++count;
            }
          }
          return count;
        }
        function get_first_emval() {
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== void 0) {
              return emval_handle_array[i];
            }
          }
          return null;
        }
        function init_emval() {
          Module["count_emval_handles"] = count_emval_handles;
          Module["get_first_emval"] = get_first_emval;
        }
        var Emval = { toValue: (handle) => {
          if (!handle) {
            throwBindingError("Cannot use deleted val. handle = " + handle);
          }
          return emval_handle_array[handle].value;
        }, toHandle: (value) => {
          switch (value) {
            case void 0:
              return 1;
            case null:
              return 2;
            case true:
              return 3;
            case false:
              return 4;
            default: {
              var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
              emval_handle_array[handle] = { refcount: 1, value };
              return handle;
            }
          }
        } };
        function __embind_register_emval(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, { name, "fromWireType": function(handle) {
            var rv = Emval.toValue(handle);
            __emval_decref(handle);
            return rv;
          }, "toWireType": function(destructors, value) {
            return Emval.toHandle(value);
          }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: null });
        }
        function embindRepr(v) {
          if (v === null) {
            return "null";
          }
          var t = typeof v;
          if (t === "object" || t === "array" || t === "function") {
            return v.toString();
          } else {
            return "" + v;
          }
        }
        function floatReadValueFromPointer(name, shift) {
          switch (shift) {
            case 2:
              return function(pointer) {
                return this["fromWireType"](HEAPF32[pointer >> 2]);
              };
            case 3:
              return function(pointer) {
                return this["fromWireType"](HEAPF64[pointer >> 3]);
              };
            default:
              throw new TypeError("Unknown float type: " + name);
          }
        }
        function __embind_register_float(rawType, name, size) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, { name, "fromWireType": function(value) {
            return value;
          }, "toWireType": function(destructors, value) {
            return value;
          }, "argPackAdvance": 8, "readValueFromPointer": floatReadValueFromPointer(name, shift), destructorFunction: null });
        }
        function integerReadValueFromPointer(name, shift, signed) {
          switch (shift) {
            case 0:
              return signed ? function readS8FromPointer(pointer) {
                return HEAP8[pointer];
              } : function readU8FromPointer(pointer) {
                return HEAPU8[pointer];
              };
            case 1:
              return signed ? function readS16FromPointer(pointer) {
                return HEAP16[pointer >> 1];
              } : function readU16FromPointer(pointer) {
                return HEAPU16[pointer >> 1];
              };
            case 2:
              return signed ? function readS32FromPointer(pointer) {
                return HEAP32[pointer >> 2];
              } : function readU32FromPointer(pointer) {
                return HEAPU32[pointer >> 2];
              };
            default:
              throw new TypeError("Unknown integer type: " + name);
          }
        }
        function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
          name = readLatin1String(name);
          if (maxRange === -1) {
            maxRange = 4294967295;
          }
          var shift = getShiftFromSize(size);
          var fromWireType = (value) => value;
          if (minRange === 0) {
            var bitshift = 32 - 8 * size;
            fromWireType = (value) => value << bitshift >>> bitshift;
          }
          var isUnsignedType = name.includes("unsigned");
          var checkAssertions = (value, toTypeName) => {
          };
          var toWireType;
          if (isUnsignedType) {
            toWireType = function(destructors, value) {
              checkAssertions(value, this.name);
              return value >>> 0;
            };
          } else {
            toWireType = function(destructors, value) {
              checkAssertions(value, this.name);
              return value;
            };
          }
          registerType(primitiveType, { name, "fromWireType": fromWireType, "toWireType": toWireType, "argPackAdvance": 8, "readValueFromPointer": integerReadValueFromPointer(name, shift, minRange !== 0), destructorFunction: null });
        }
        function __embind_register_memory_view(rawType, dataTypeIndex, name) {
          var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
          var TA = typeMapping[dataTypeIndex];
          function decodeMemoryView(handle) {
            handle = handle >> 2;
            var heap = HEAPU32;
            var size = heap[handle];
            var data = heap[handle + 1];
            return new TA(buffer, data, size);
          }
          name = readLatin1String(name);
          registerType(rawType, { name, "fromWireType": decodeMemoryView, "argPackAdvance": 8, "readValueFromPointer": decodeMemoryView }, { ignoreDuplicateRegistrations: true });
        }
        function __embind_register_std_string(rawType, name) {
          name = readLatin1String(name);
          var stdStringIsUTF8 = name === "std::string";
          registerType(rawType, { name, "fromWireType": function(value) {
            var length = HEAPU32[value >> 2];
            var payload = value + 4;
            var str;
            if (stdStringIsUTF8) {
              var decodeStartPtr = payload;
              for (var i = 0; i <= length; ++i) {
                var currentBytePtr = payload + i;
                if (i == length || HEAPU8[currentBytePtr] == 0) {
                  var maxRead = currentBytePtr - decodeStartPtr;
                  var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                  if (str === void 0) {
                    str = stringSegment;
                  } else {
                    str += String.fromCharCode(0);
                    str += stringSegment;
                  }
                  decodeStartPtr = currentBytePtr + 1;
                }
              }
            } else {
              var a = new Array(length);
              for (var i = 0; i < length; ++i) {
                a[i] = String.fromCharCode(HEAPU8[payload + i]);
              }
              str = a.join("");
            }
            _free(value);
            return str;
          }, "toWireType": function(destructors, value) {
            if (value instanceof ArrayBuffer) {
              value = new Uint8Array(value);
            }
            var length;
            var valueIsOfTypeString = typeof value == "string";
            if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
              throwBindingError("Cannot pass non-string to std::string");
            }
            if (stdStringIsUTF8 && valueIsOfTypeString) {
              length = lengthBytesUTF8(value);
            } else {
              length = value.length;
            }
            var base = _malloc(4 + length + 1);
            var ptr = base + 4;
            HEAPU32[base >> 2] = length;
            if (stdStringIsUTF8 && valueIsOfTypeString) {
              stringToUTF8(value, ptr, length + 1);
            } else {
              if (valueIsOfTypeString) {
                for (var i = 0; i < length; ++i) {
                  var charCode = value.charCodeAt(i);
                  if (charCode > 255) {
                    _free(ptr);
                    throwBindingError("String has UTF-16 code units that do not fit in 8 bits");
                  }
                  HEAPU8[ptr + i] = charCode;
                }
              } else {
                for (var i = 0; i < length; ++i) {
                  HEAPU8[ptr + i] = value[i];
                }
              }
            }
            if (destructors !== null) {
              destructors.push(_free, base);
            }
            return base;
          }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: function(ptr) {
            _free(ptr);
          } });
        }
        var UTF16Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : void 0;
        function UTF16ToString(ptr, maxBytesToRead) {
          var endPtr = ptr;
          var idx = endPtr >> 1;
          var maxIdx = idx + maxBytesToRead / 2;
          while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
          endPtr = idx << 1;
          if (endPtr - ptr > 32 && UTF16Decoder) return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
          var str = "";
          for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
            var codeUnit = HEAP16[ptr + i * 2 >> 1];
            if (codeUnit == 0) break;
            str += String.fromCharCode(codeUnit);
          }
          return str;
        }
        function stringToUTF16(str, outPtr, maxBytesToWrite) {
          if (maxBytesToWrite === void 0) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 2) return 0;
          maxBytesToWrite -= 2;
          var startPtr = outPtr;
          var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
          for (var i = 0; i < numCharsToWrite; ++i) {
            var codeUnit = str.charCodeAt(i);
            HEAP16[outPtr >> 1] = codeUnit;
            outPtr += 2;
          }
          HEAP16[outPtr >> 1] = 0;
          return outPtr - startPtr;
        }
        function lengthBytesUTF16(str) {
          return str.length * 2;
        }
        function UTF32ToString(ptr, maxBytesToRead) {
          var i = 0;
          var str = "";
          while (!(i >= maxBytesToRead / 4)) {
            var utf32 = HEAP32[ptr + i * 4 >> 2];
            if (utf32 == 0) break;
            ++i;
            if (utf32 >= 65536) {
              var ch = utf32 - 65536;
              str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            } else {
              str += String.fromCharCode(utf32);
            }
          }
          return str;
        }
        function stringToUTF32(str, outPtr, maxBytesToWrite) {
          if (maxBytesToWrite === void 0) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 4) return 0;
          var startPtr = outPtr;
          var endPtr = startPtr + maxBytesToWrite - 4;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) {
              var trailSurrogate = str.charCodeAt(++i);
              codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
            }
            HEAP32[outPtr >> 2] = codeUnit;
            outPtr += 4;
            if (outPtr + 4 > endPtr) break;
          }
          HEAP32[outPtr >> 2] = 0;
          return outPtr - startPtr;
        }
        function lengthBytesUTF32(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
            len += 4;
          }
          return len;
        }
        function __embind_register_std_wstring(rawType, charSize, name) {
          name = readLatin1String(name);
          var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
          if (charSize === 2) {
            decodeString = UTF16ToString;
            encodeString = stringToUTF16;
            lengthBytesUTF = lengthBytesUTF16;
            getHeap = () => HEAPU16;
            shift = 1;
          } else if (charSize === 4) {
            decodeString = UTF32ToString;
            encodeString = stringToUTF32;
            lengthBytesUTF = lengthBytesUTF32;
            getHeap = () => HEAPU32;
            shift = 2;
          }
          registerType(rawType, { name, "fromWireType": function(value) {
            var length = HEAPU32[value >> 2];
            var HEAP = getHeap();
            var str;
            var decodeStartPtr = value + 4;
            for (var i = 0; i <= length; ++i) {
              var currentBytePtr = value + 4 + i * charSize;
              if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                var maxReadBytes = currentBytePtr - decodeStartPtr;
                var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
                if (str === void 0) {
                  str = stringSegment;
                } else {
                  str += String.fromCharCode(0);
                  str += stringSegment;
                }
                decodeStartPtr = currentBytePtr + charSize;
              }
            }
            _free(value);
            return str;
          }, "toWireType": function(destructors, value) {
            if (!(typeof value == "string")) {
              throwBindingError("Cannot pass non-string to C++ string type " + name);
            }
            var length = lengthBytesUTF(value);
            var ptr = _malloc(4 + length + charSize);
            HEAPU32[ptr >> 2] = length >> shift;
            encodeString(value, ptr + 4, length + charSize);
            if (destructors !== null) {
              destructors.push(_free, ptr);
            }
            return ptr;
          }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: function(ptr) {
            _free(ptr);
          } });
        }
        function __embind_register_value_object(rawType, name, constructorSignature, rawConstructor, destructorSignature, rawDestructor) {
          structRegistrations[rawType] = { name: readLatin1String(name), rawConstructor: embind__requireFunction(constructorSignature, rawConstructor), rawDestructor: embind__requireFunction(destructorSignature, rawDestructor), fields: [] };
        }
        function __embind_register_value_object_field(structType, fieldName, getterReturnType, getterSignature, getter, getterContext, setterArgumentType, setterSignature, setter, setterContext) {
          structRegistrations[structType].fields.push({ fieldName: readLatin1String(fieldName), getterReturnType, getter: embind__requireFunction(getterSignature, getter), getterContext, setterArgumentType, setter: embind__requireFunction(setterSignature, setter), setterContext });
        }
        function __embind_register_void(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, { isVoid: true, name, "argPackAdvance": 0, "fromWireType": function() {
            return void 0;
          }, "toWireType": function(destructors, o) {
            return void 0;
          } });
        }
        function __emscripten_throw_longjmp() {
          throw Infinity;
        }
        var emval_symbols = {};
        function getStringOrSymbol(address) {
          var symbol = emval_symbols[address];
          if (symbol === void 0) {
            return readLatin1String(address);
          }
          return symbol;
        }
        function emval_get_global() {
          if (typeof globalThis == "object") {
            return globalThis;
          }
          return (/* @__PURE__ */ function() {
            return Function;
          }())("return this")();
        }
        function __emval_get_global(name) {
          if (name === 0) {
            return Emval.toHandle(emval_get_global());
          } else {
            name = getStringOrSymbol(name);
            return Emval.toHandle(emval_get_global()[name]);
          }
        }
        function __emval_incref(handle) {
          if (handle > 4) {
            emval_handle_array[handle].refcount += 1;
          }
        }
        function requireRegisteredType(rawType, humanName) {
          var impl = registeredTypes[rawType];
          if (void 0 === impl) {
            throwBindingError(humanName + " has unknown type " + getTypeName(rawType));
          }
          return impl;
        }
        function craftEmvalAllocator(argCount) {
          var argsList = "";
          for (var i = 0; i < argCount; ++i) {
            argsList += (i !== 0 ? ", " : "") + "arg" + i;
          }
          var getMemory = () => HEAPU32;
          var functionBody = "return function emval_allocator_" + argCount + "(constructor, argTypes, args) {\n  var HEAPU32 = getMemory();\n";
          for (var i = 0; i < argCount; ++i) {
            functionBody += "var argType" + i + " = requireRegisteredType(HEAPU32[((argTypes)>>2)], 'parameter " + i + "');\nvar arg" + i + " = argType" + i + ".readValueFromPointer(args);\nargs += argType" + i + "['argPackAdvance'];\nargTypes += 4;\n";
          }
          functionBody += "var obj = new constructor(" + argsList + ");\nreturn valueToHandle(obj);\n}\n";
          return new Function("requireRegisteredType", "Module", "valueToHandle", "getMemory", functionBody)(requireRegisteredType, Module, Emval.toHandle, getMemory);
        }
        var emval_newers = {};
        function __emval_new(handle, argCount, argTypes, args) {
          handle = Emval.toValue(handle);
          var newer = emval_newers[argCount];
          if (!newer) {
            newer = craftEmvalAllocator(argCount);
            emval_newers[argCount] = newer;
          }
          return newer(handle, argTypes, args);
        }
        function __emval_take_value(type, arg) {
          type = requireRegisteredType(type, "_emval_take_value");
          var v = type["readValueFromPointer"](arg);
          return Emval.toHandle(v);
        }
        function _abort() {
          abort("");
        }
        function _emscripten_memcpy_big(dest, src, num) {
          HEAPU8.copyWithin(dest, src, src + num);
        }
        function getHeapMax() {
          return 2147483648;
        }
        function emscripten_realloc_buffer(size) {
          try {
            wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
            updateGlobalBufferAndViews(wasmMemory.buffer);
            return 1;
          } catch (e) {
          }
        }
        function _emscripten_resize_heap(requestedSize) {
          var oldSize = HEAPU8.length;
          requestedSize = requestedSize >>> 0;
          var maxHeapSize = getHeapMax();
          if (requestedSize > maxHeapSize) {
            return false;
          }
          let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
            var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
            var replacement = emscripten_realloc_buffer(newSize);
            if (replacement) {
              return true;
            }
          }
          return false;
        }
        var ENV = {};
        function getExecutableName() {
          return thisProgram || "./this.program";
        }
        function getEnvStrings() {
          if (!getEnvStrings.strings) {
            var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
            var env = { "USER": "web_user", "LOGNAME": "web_user", "PATH": "/", "PWD": "/", "HOME": "/home/web_user", "LANG": lang, "_": getExecutableName() };
            for (var x in ENV) {
              if (ENV[x] === void 0) delete env[x];
              else env[x] = ENV[x];
            }
            var strings = [];
            for (var x in env) {
              strings.push(x + "=" + env[x]);
            }
            getEnvStrings.strings = strings;
          }
          return getEnvStrings.strings;
        }
        function writeAsciiToMemory(str, buffer2, dontAddNull) {
          for (var i = 0; i < str.length; ++i) {
            HEAP8[buffer2++ >> 0] = str.charCodeAt(i);
          }
          if (!dontAddNull) HEAP8[buffer2 >> 0] = 0;
        }
        var SYSCALLS = { varargs: void 0, get: function() {
          SYSCALLS.varargs += 4;
          var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
          return ret;
        }, getStr: function(ptr) {
          var ret = UTF8ToString(ptr);
          return ret;
        } };
        function _environ_get(__environ, environ_buf) {
          var bufSize = 0;
          getEnvStrings().forEach(function(string, i) {
            var ptr = environ_buf + bufSize;
            HEAPU32[__environ + i * 4 >> 2] = ptr;
            writeAsciiToMemory(string, ptr);
            bufSize += string.length + 1;
          });
          return 0;
        }
        function _environ_sizes_get(penviron_count, penviron_buf_size) {
          var strings = getEnvStrings();
          HEAPU32[penviron_count >> 2] = strings.length;
          var bufSize = 0;
          strings.forEach(function(string) {
            bufSize += string.length + 1;
          });
          HEAPU32[penviron_buf_size >> 2] = bufSize;
          return 0;
        }
        function _proc_exit(code) {
          EXITSTATUS = code;
          if (!keepRuntimeAlive()) {
            if (Module["onExit"]) Module["onExit"](code);
            ABORT = true;
          }
          quit_(code, new ExitStatus(code));
        }
        function exitJS(status, implicit) {
          EXITSTATUS = status;
          _proc_exit(status);
        }
        var _exit = exitJS;
        function _fd_close(fd) {
          return 52;
        }
        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
          return 70;
        }
        var printCharBuffers = [null, [], []];
        function printChar(stream, curr) {
          var buffer2 = printCharBuffers[stream];
          if (curr === 0 || curr === 10) {
            (stream === 1 ? out : err)(UTF8ArrayToString(buffer2, 0));
            buffer2.length = 0;
          } else {
            buffer2.push(curr);
          }
        }
        function _fd_write(fd, iov, iovcnt, pnum) {
          var num = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAPU32[iov >> 2];
            var len = HEAPU32[iov + 4 >> 2];
            iov += 8;
            for (var j = 0; j < len; j++) {
              printChar(fd, HEAPU8[ptr + j]);
            }
            num += len;
          }
          HEAPU32[pnum >> 2] = num;
          return 0;
        }
        function getCFunc(ident) {
          var func = Module["_" + ident];
          return func;
        }
        function writeArrayToMemory(array, buffer2) {
          HEAP8.set(array, buffer2);
        }
        function ccall(ident, returnType, argTypes, args, opts) {
          var toC = { "string": (str) => {
            var ret2 = 0;
            if (str !== null && str !== void 0 && str !== 0) {
              var len = (str.length << 2) + 1;
              ret2 = stackAlloc(len);
              stringToUTF8(str, ret2, len);
            }
            return ret2;
          }, "array": (arr) => {
            var ret2 = stackAlloc(arr.length);
            writeArrayToMemory(arr, ret2);
            return ret2;
          } };
          function convertReturnValue(ret2) {
            if (returnType === "string") {
              return UTF8ToString(ret2);
            }
            if (returnType === "boolean") return Boolean(ret2);
            return ret2;
          }
          var func = getCFunc(ident);
          var cArgs = [];
          var stack = 0;
          if (args) {
            for (var i = 0; i < args.length; i++) {
              var converter = toC[argTypes[i]];
              if (converter) {
                if (stack === 0) stack = stackSave();
                cArgs[i] = converter(args[i]);
              } else {
                cArgs[i] = args[i];
              }
            }
          }
          var ret = func.apply(null, cArgs);
          function onDone(ret2) {
            if (stack !== 0) stackRestore(stack);
            return convertReturnValue(ret2);
          }
          ret = onDone(ret);
          return ret;
        }
        InternalError = Module["InternalError"] = extendError(Error, "InternalError");
        embind_init_charCodes();
        BindingError = Module["BindingError"] = extendError(Error, "BindingError");
        init_ClassHandle();
        init_embind();
        init_RegisteredPointer();
        UnboundTypeError = Module["UnboundTypeError"] = extendError(Error, "UnboundTypeError");
        init_emval();
        var asmLibraryArg = { "g": ___cxa_throw, "A": __embind_finalize_value_object, "w": __embind_register_bigint, "F": __embind_register_bool, "u": __embind_register_class, "t": __embind_register_class_constructor, "c": __embind_register_class_function, "E": __embind_register_emval, "m": __embind_register_float, "b": __embind_register_integer, "a": __embind_register_memory_view, "l": __embind_register_std_string, "h": __embind_register_std_wstring, "J": __embind_register_value_object, "d": __embind_register_value_object_field, "G": __embind_register_void, "x": __emscripten_throw_longjmp, "i": __emval_decref, "r": __emval_get_global, "p": __emval_incref, "q": __emval_new, "s": __emval_take_value, "j": _abort, "D": _emscripten_memcpy_big, "y": _emscripten_resize_heap, "z": _environ_get, "B": _environ_sizes_get, "I": _exit, "C": _fd_close, "v": _fd_seek, "k": _fd_write, "o": invoke_ii, "n": invoke_iii, "H": invoke_iiii, "f": invoke_vi, "e": invoke_viii };
        var asm = createWasm();
        var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
          return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["L"]).apply(null, arguments);
        };
        var _malloc = Module["_malloc"] = function() {
          return (_malloc = Module["_malloc"] = Module["asm"]["N"]).apply(null, arguments);
        };
        var _free = Module["_free"] = function() {
          return (_free = Module["_free"] = Module["asm"]["O"]).apply(null, arguments);
        };
        var ___getTypeName = Module["___getTypeName"] = function() {
          return (___getTypeName = Module["___getTypeName"] = Module["asm"]["P"]).apply(null, arguments);
        };
        var __embind_initialize_bindings = Module["__embind_initialize_bindings"] = function() {
          return (__embind_initialize_bindings = Module["__embind_initialize_bindings"] = Module["asm"]["Q"]).apply(null, arguments);
        };
        var _setThrew2 = Module["_setThrew"] = function() {
          return (_setThrew2 = Module["_setThrew"] = Module["asm"]["R"]).apply(null, arguments);
        };
        var stackSave = Module["stackSave"] = function() {
          return (stackSave = Module["stackSave"] = Module["asm"]["S"]).apply(null, arguments);
        };
        var stackRestore = Module["stackRestore"] = function() {
          return (stackRestore = Module["stackRestore"] = Module["asm"]["T"]).apply(null, arguments);
        };
        var stackAlloc = Module["stackAlloc"] = function() {
          return (stackAlloc = Module["stackAlloc"] = Module["asm"]["U"]).apply(null, arguments);
        };
        var ___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = function() {
          return (___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = Module["asm"]["V"]).apply(null, arguments);
        };
        var dynCall_jiji = Module["dynCall_jiji"] = function() {
          return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["W"]).apply(null, arguments);
        };
        function invoke_vi(index, a1) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew2(1, 0);
          }
        }
        function invoke_ii(index, a1) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew2(1, 0);
          }
        }
        function invoke_viii(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew2(1, 0);
          }
        }
        function invoke_iiii(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew2(1, 0);
          }
        }
        function invoke_iii(index, a1, a2) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew2(1, 0);
          }
        }
        Module["ccall"] = ccall;
        var calledRun;
        dependenciesFulfilled = function runCaller() {
          if (!calledRun) run();
          if (!calledRun) dependenciesFulfilled = runCaller;
        };
        function run(args) {
          args = args || arguments_;
          if (runDependencies > 0) {
            return;
          }
          preRun();
          if (runDependencies > 0) {
            return;
          }
          function doRun() {
            if (calledRun) return;
            calledRun = true;
            Module["calledRun"] = true;
            if (ABORT) return;
            initRuntime();
            readyPromiseResolve(Module);
            if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
            postRun();
          }
          if (Module["setStatus"]) {
            Module["setStatus"]("Running...");
            setTimeout(function() {
              setTimeout(function() {
                Module["setStatus"]("");
              }, 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
        }
        if (Module["preInit"]) {
          if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
          while (Module["preInit"].length > 0) {
            Module["preInit"].pop()();
          }
        }
        run();
        return libjpegturbowasm_decode2.ready;
      };
    })();
    if (typeof exports === "object" && typeof module === "object")
      module.exports = libjpegturbowasm_decode;
    else if (typeof define === "function" && define["amd"])
      define([], function() {
        return libjpegturbowasm_decode;
      });
    else if (typeof exports === "object")
      exports["libjpegturbowasm_decode"] = libjpegturbowasm_decode;
  }
});

// node_modules/@cornerstonejs/codec-charls/dist/charlswasm_decode.js
var require_charlswasm_decode = __commonJS({
  "node_modules/@cornerstonejs/codec-charls/dist/charlswasm_decode.js"(exports, module) {
    var CharLSWASM = (() => {
      var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
      if (typeof __filename !== "undefined") _scriptDir = _scriptDir || __filename;
      return function(CharLSWASM2) {
        CharLSWASM2 = CharLSWASM2 || {};
        var Module = typeof CharLSWASM2 != "undefined" ? CharLSWASM2 : {};
        var readyPromiseResolve, readyPromiseReject;
        Module["ready"] = new Promise(function(resolve, reject) {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        var moduleOverrides = Object.assign({}, Module);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow) => {
          throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = typeof window == "object";
        var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
        var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
        var scriptDirectory = "";
        function locateFile(path) {
          if (Module["locateFile"]) {
            return Module["locateFile"](path, scriptDirectory);
          }
          return scriptDirectory + path;
        }
        var read_, readAsync, readBinary, setWindowTitle;
        function logExceptionOnExit(e) {
          if (e instanceof ExitStatus) return;
          let toLog = e;
          err("exiting due to exception: " + toLog);
        }
        if (ENVIRONMENT_IS_NODE) {
          var fs = require_fs();
          var nodePath = require_path();
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = nodePath.dirname(scriptDirectory) + "/";
          } else {
            scriptDirectory = __dirname + "/";
          }
          read_ = (filename, binary) => {
            filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
            return fs.readFileSync(filename, binary ? void 0 : "utf8");
          };
          readBinary = (filename) => {
            var ret = read_(filename, true);
            if (!ret.buffer) {
              ret = new Uint8Array(ret);
            }
            return ret;
          };
          readAsync = (filename, onload, onerror) => {
            filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
            fs.readFile(filename, function(err2, data) {
              if (err2) onerror(err2);
              else onload(data.buffer);
            });
          };
          if (process["argv"].length > 1) {
            thisProgram = process["argv"][1].replace(/\\/g, "/");
          }
          arguments_ = process["argv"].slice(2);
          process["on"]("uncaughtException", function(ex) {
            if (!(ex instanceof ExitStatus)) {
              throw ex;
            }
          });
          process["on"]("unhandledRejection", function(reason) {
            throw reason;
          });
          quit_ = (status, toThrow) => {
            if (keepRuntimeAlive()) {
              process["exitCode"] = status;
              throw toThrow;
            }
            logExceptionOnExit(toThrow);
            process["exit"](status);
          };
          Module["inspect"] = function() {
            return "[Emscripten Module object]";
          };
        } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
          } else if (typeof document != "undefined" && document.currentScript) {
            scriptDirectory = document.currentScript.src;
          }
          if (_scriptDir) {
            scriptDirectory = _scriptDir;
          }
          if (scriptDirectory.indexOf("blob:") !== 0) {
            scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
          } else {
            scriptDirectory = "";
          }
          {
            read_ = (url) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              xhr.send(null);
              return xhr.responseText;
            };
            if (ENVIRONMENT_IS_WORKER) {
              readBinary = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
              };
            }
            readAsync = (url, onload, onerror) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.onload = () => {
                if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                  onload(xhr.response);
                  return;
                }
                onerror();
              };
              xhr.onerror = onerror;
              xhr.send(null);
            };
          }
          setWindowTitle = (title) => document.title = title;
        } else {
        }
        var out = Module["print"] || console.log.bind(console);
        var err = Module["printErr"] || console.warn.bind(console);
        Object.assign(Module, moduleOverrides);
        moduleOverrides = null;
        if (Module["arguments"]) arguments_ = Module["arguments"];
        if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
        if (Module["quit"]) quit_ = Module["quit"];
        var wasmBinary;
        if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
        var noExitRuntime = Module["noExitRuntime"] || true;
        if (typeof WebAssembly != "object") {
          abort("no native wasm support detected");
        }
        var wasmMemory;
        var ABORT = false;
        var EXITSTATUS;
        function assert(condition, text) {
          if (!condition) {
            abort(text);
          }
        }
        var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
        function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
          var endIdx = idx + maxBytesToRead;
          var endPtr = idx;
          while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
          if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
            return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
          }
          var str = "";
          while (idx < endPtr) {
            var u0 = heapOrArray[idx++];
            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
              str += String.fromCharCode((u0 & 31) << 6 | u1);
              continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
              u0 = (u0 & 15) << 12 | u1 << 6 | u2;
            } else {
              u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
            }
            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            }
          }
          return str;
        }
        function UTF8ToString(ptr, maxBytesToRead) {
          return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        }
        function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
          if (!(maxBytesToWrite > 0)) return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = 65536 + ((u & 1023) << 10) | u1 & 1023;
            }
            if (u <= 127) {
              if (outIdx >= endIdx) break;
              heap[outIdx++] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx) break;
              heap[outIdx++] = 192 | u >> 6;
              heap[outIdx++] = 128 | u & 63;
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx) break;
              heap[outIdx++] = 224 | u >> 12;
              heap[outIdx++] = 128 | u >> 6 & 63;
              heap[outIdx++] = 128 | u & 63;
            } else {
              if (outIdx + 3 >= endIdx) break;
              heap[outIdx++] = 240 | u >> 18;
              heap[outIdx++] = 128 | u >> 12 & 63;
              heap[outIdx++] = 128 | u >> 6 & 63;
              heap[outIdx++] = 128 | u & 63;
            }
          }
          heap[outIdx] = 0;
          return outIdx - startIdx;
        }
        function stringToUTF8(str, outPtr, maxBytesToWrite) {
          return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        }
        function lengthBytesUTF8(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var c = str.charCodeAt(i);
            if (c <= 127) {
              len++;
            } else if (c <= 2047) {
              len += 2;
            } else if (c >= 55296 && c <= 57343) {
              len += 4;
              ++i;
            } else {
              len += 3;
            }
          }
          return len;
        }
        var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateGlobalBufferAndViews(buf) {
          buffer = buf;
          Module["HEAP8"] = HEAP8 = new Int8Array(buf);
          Module["HEAP16"] = HEAP16 = new Int16Array(buf);
          Module["HEAP32"] = HEAP32 = new Int32Array(buf);
          Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
          Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
          Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
          Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
          Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
        }
        var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 52428800;
        var wasmTable;
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        function keepRuntimeAlive() {
          return noExitRuntime;
        }
        function preRun() {
          if (Module["preRun"]) {
            if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
            while (Module["preRun"].length) {
              addOnPreRun(Module["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          runtimeInitialized = true;
          callRuntimeCallbacks(__ATINIT__);
        }
        function postRun() {
          if (Module["postRun"]) {
            if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
            while (Module["postRun"].length) {
              addOnPostRun(Module["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
          __ATINIT__.unshift(cb);
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function addRunDependency(id) {
          runDependencies++;
          if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
          }
        }
        function removeRunDependency(id) {
          runDependencies--;
          if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
          }
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        function abort(what) {
          if (Module["onAbort"]) {
            Module["onAbort"](what);
          }
          what = "Aborted(" + what + ")";
          err(what);
          ABORT = true;
          EXITSTATUS = 1;
          what += ". Build with -sASSERTIONS for more info.";
          var e = new WebAssembly.RuntimeError(what);
          readyPromiseReject(e);
          throw e;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) {
          return filename.startsWith(dataURIPrefix);
        }
        function isFileURI(filename) {
          return filename.startsWith("file://");
        }
        var wasmBinaryFile;
        wasmBinaryFile = "charlswasm_decode.wasm";
        if (!isDataURI(wasmBinaryFile)) {
          wasmBinaryFile = locateFile(wasmBinaryFile);
        }
        function getBinary(file) {
          try {
            if (file == wasmBinaryFile && wasmBinary) {
              return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
              return readBinary(file);
            }
            throw "both async and sync fetching of the wasm failed";
          } catch (err2) {
            abort(err2);
          }
        }
        function getBinaryPromise() {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
            if (typeof fetch == "function" && !isFileURI(wasmBinaryFile)) {
              return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
                if (!response["ok"]) {
                  throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
                }
                return response["arrayBuffer"]();
              }).catch(function() {
                return getBinary(wasmBinaryFile);
              });
            } else {
              if (readAsync) {
                return new Promise(function(resolve, reject) {
                  readAsync(wasmBinaryFile, function(response) {
                    resolve(new Uint8Array(response));
                  }, reject);
                });
              }
            }
          }
          return Promise.resolve().then(function() {
            return getBinary(wasmBinaryFile);
          });
        }
        function createWasm() {
          var info = { "a": asmLibraryArg };
          function receiveInstance(instance, module2) {
            var exports3 = instance.exports;
            Module["asm"] = exports3;
            wasmMemory = Module["asm"]["z"];
            updateGlobalBufferAndViews(wasmMemory.buffer);
            wasmTable = Module["asm"]["C"];
            addOnInit(Module["asm"]["A"]);
            removeRunDependency("wasm-instantiate");
          }
          addRunDependency("wasm-instantiate");
          function receiveInstantiationResult(result) {
            receiveInstance(result["instance"]);
          }
          function instantiateArrayBuffer(receiver) {
            return getBinaryPromise().then(function(binary) {
              return WebAssembly.instantiate(binary, info);
            }).then(function(instance) {
              return instance;
            }).then(receiver, function(reason) {
              err("failed to asynchronously prepare wasm: " + reason);
              abort(reason);
            });
          }
          function instantiateAsync() {
            if (!wasmBinary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(wasmBinaryFile) && !isFileURI(wasmBinaryFile) && !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
              return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
                var result = WebAssembly.instantiateStreaming(response, info);
                return result.then(receiveInstantiationResult, function(reason) {
                  err("wasm streaming compile failed: " + reason);
                  err("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(receiveInstantiationResult);
                });
              });
            } else {
              return instantiateArrayBuffer(receiveInstantiationResult);
            }
          }
          if (Module["instantiateWasm"]) {
            try {
              var exports2 = Module["instantiateWasm"](info, receiveInstance);
              return exports2;
            } catch (e) {
              err("Module.instantiateWasm callback failed with error: " + e);
              readyPromiseReject(e);
            }
          }
          instantiateAsync().catch(readyPromiseReject);
          return {};
        }
        function ExitStatus(status) {
          this.name = "ExitStatus";
          this.message = "Program terminated with exit(" + status + ")";
          this.status = status;
        }
        function callRuntimeCallbacks(callbacks) {
          while (callbacks.length > 0) {
            callbacks.shift()(Module);
          }
        }
        function ExceptionInfo(excPtr) {
          this.excPtr = excPtr;
          this.ptr = excPtr - 24;
          this.set_type = function(type) {
            HEAPU32[this.ptr + 4 >> 2] = type;
          };
          this.get_type = function() {
            return HEAPU32[this.ptr + 4 >> 2];
          };
          this.set_destructor = function(destructor) {
            HEAPU32[this.ptr + 8 >> 2] = destructor;
          };
          this.get_destructor = function() {
            return HEAPU32[this.ptr + 8 >> 2];
          };
          this.set_refcount = function(refcount) {
            HEAP32[this.ptr >> 2] = refcount;
          };
          this.set_caught = function(caught) {
            caught = caught ? 1 : 0;
            HEAP8[this.ptr + 12 >> 0] = caught;
          };
          this.get_caught = function() {
            return HEAP8[this.ptr + 12 >> 0] != 0;
          };
          this.set_rethrown = function(rethrown) {
            rethrown = rethrown ? 1 : 0;
            HEAP8[this.ptr + 13 >> 0] = rethrown;
          };
          this.get_rethrown = function() {
            return HEAP8[this.ptr + 13 >> 0] != 0;
          };
          this.init = function(type, destructor) {
            this.set_adjusted_ptr(0);
            this.set_type(type);
            this.set_destructor(destructor);
            this.set_refcount(0);
            this.set_caught(false);
            this.set_rethrown(false);
          };
          this.add_ref = function() {
            var value = HEAP32[this.ptr >> 2];
            HEAP32[this.ptr >> 2] = value + 1;
          };
          this.release_ref = function() {
            var prev = HEAP32[this.ptr >> 2];
            HEAP32[this.ptr >> 2] = prev - 1;
            return prev === 1;
          };
          this.set_adjusted_ptr = function(adjustedPtr) {
            HEAPU32[this.ptr + 16 >> 2] = adjustedPtr;
          };
          this.get_adjusted_ptr = function() {
            return HEAPU32[this.ptr + 16 >> 2];
          };
          this.get_exception_ptr = function() {
            var isPointer = ___cxa_is_pointer_type(this.get_type());
            if (isPointer) {
              return HEAPU32[this.excPtr >> 2];
            }
            var adjusted = this.get_adjusted_ptr();
            if (adjusted !== 0) return adjusted;
            return this.excPtr;
          };
        }
        var exceptionLast = 0;
        var uncaughtExceptionCount = 0;
        function ___cxa_throw(ptr, type, destructor) {
          var info = new ExceptionInfo(ptr);
          info.init(type, destructor);
          exceptionLast = ptr;
          uncaughtExceptionCount++;
          throw ptr;
        }
        var structRegistrations = {};
        function runDestructors(destructors) {
          while (destructors.length) {
            var ptr = destructors.pop();
            var del = destructors.pop();
            del(ptr);
          }
        }
        function simpleReadValueFromPointer(pointer) {
          return this["fromWireType"](HEAP32[pointer >> 2]);
        }
        var awaitingDependencies = {};
        var registeredTypes = {};
        var typeDependencies = {};
        var char_0 = 48;
        var char_9 = 57;
        function makeLegalFunctionName(name) {
          if (void 0 === name) {
            return "_unknown";
          }
          name = name.replace(/[^a-zA-Z0-9_]/g, "$");
          var f = name.charCodeAt(0);
          if (f >= char_0 && f <= char_9) {
            return "_" + name;
          }
          return name;
        }
        function createNamedFunction(name, body) {
          name = makeLegalFunctionName(name);
          return new Function("body", "return function " + name + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(body);
        }
        function extendError(baseErrorType, errorName) {
          var errorClass = createNamedFunction(errorName, function(message) {
            this.name = errorName;
            this.message = message;
            var stack = new Error(message).stack;
            if (stack !== void 0) {
              this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "");
            }
          });
          errorClass.prototype = Object.create(baseErrorType.prototype);
          errorClass.prototype.constructor = errorClass;
          errorClass.prototype.toString = function() {
            if (this.message === void 0) {
              return this.name;
            } else {
              return this.name + ": " + this.message;
            }
          };
          return errorClass;
        }
        var InternalError = void 0;
        function throwInternalError(message) {
          throw new InternalError(message);
        }
        function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
          myTypes.forEach(function(type) {
            typeDependencies[type] = dependentTypes;
          });
          function onComplete(typeConverters2) {
            var myTypeConverters = getTypeConverters(typeConverters2);
            if (myTypeConverters.length !== myTypes.length) {
              throwInternalError("Mismatched type converter count");
            }
            for (var i = 0; i < myTypes.length; ++i) {
              registerType(myTypes[i], myTypeConverters[i]);
            }
          }
          var typeConverters = new Array(dependentTypes.length);
          var unregisteredTypes = [];
          var registered = 0;
          dependentTypes.forEach((dt, i) => {
            if (registeredTypes.hasOwnProperty(dt)) {
              typeConverters[i] = registeredTypes[dt];
            } else {
              unregisteredTypes.push(dt);
              if (!awaitingDependencies.hasOwnProperty(dt)) {
                awaitingDependencies[dt] = [];
              }
              awaitingDependencies[dt].push(() => {
                typeConverters[i] = registeredTypes[dt];
                ++registered;
                if (registered === unregisteredTypes.length) {
                  onComplete(typeConverters);
                }
              });
            }
          });
          if (0 === unregisteredTypes.length) {
            onComplete(typeConverters);
          }
        }
        function __embind_finalize_value_object(structType) {
          var reg = structRegistrations[structType];
          delete structRegistrations[structType];
          var rawConstructor = reg.rawConstructor;
          var rawDestructor = reg.rawDestructor;
          var fieldRecords = reg.fields;
          var fieldTypes = fieldRecords.map((field) => field.getterReturnType).concat(fieldRecords.map((field) => field.setterArgumentType));
          whenDependentTypesAreResolved([structType], fieldTypes, (fieldTypes2) => {
            var fields = {};
            fieldRecords.forEach((field, i) => {
              var fieldName = field.fieldName;
              var getterReturnType = fieldTypes2[i];
              var getter = field.getter;
              var getterContext = field.getterContext;
              var setterArgumentType = fieldTypes2[i + fieldRecords.length];
              var setter = field.setter;
              var setterContext = field.setterContext;
              fields[fieldName] = { read: (ptr) => {
                return getterReturnType["fromWireType"](getter(getterContext, ptr));
              }, write: (ptr, o) => {
                var destructors = [];
                setter(setterContext, ptr, setterArgumentType["toWireType"](destructors, o));
                runDestructors(destructors);
              } };
            });
            return [{ name: reg.name, "fromWireType": function(ptr) {
              var rv = {};
              for (var i in fields) {
                rv[i] = fields[i].read(ptr);
              }
              rawDestructor(ptr);
              return rv;
            }, "toWireType": function(destructors, o) {
              for (var fieldName in fields) {
                if (!(fieldName in o)) {
                  throw new TypeError('Missing field:  "' + fieldName + '"');
                }
              }
              var ptr = rawConstructor();
              for (fieldName in fields) {
                fields[fieldName].write(ptr, o[fieldName]);
              }
              if (destructors !== null) {
                destructors.push(rawDestructor, ptr);
              }
              return ptr;
            }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: rawDestructor }];
          });
        }
        function __embind_register_bigint(primitiveType, name, size, minRange, maxRange) {
        }
        function getShiftFromSize(size) {
          switch (size) {
            case 1:
              return 0;
            case 2:
              return 1;
            case 4:
              return 2;
            case 8:
              return 3;
            default:
              throw new TypeError("Unknown type size: " + size);
          }
        }
        function embind_init_charCodes() {
          var codes = new Array(256);
          for (var i = 0; i < 256; ++i) {
            codes[i] = String.fromCharCode(i);
          }
          embind_charCodes = codes;
        }
        var embind_charCodes = void 0;
        function readLatin1String(ptr) {
          var ret = "";
          var c = ptr;
          while (HEAPU8[c]) {
            ret += embind_charCodes[HEAPU8[c++]];
          }
          return ret;
        }
        var BindingError = void 0;
        function throwBindingError(message) {
          throw new BindingError(message);
        }
        function registerType(rawType, registeredInstance, options2 = {}) {
          if (!("argPackAdvance" in registeredInstance)) {
            throw new TypeError("registerType registeredInstance requires argPackAdvance");
          }
          var name = registeredInstance.name;
          if (!rawType) {
            throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
          }
          if (registeredTypes.hasOwnProperty(rawType)) {
            if (options2.ignoreDuplicateRegistrations) {
              return;
            } else {
              throwBindingError("Cannot register type '" + name + "' twice");
            }
          }
          registeredTypes[rawType] = registeredInstance;
          delete typeDependencies[rawType];
          if (awaitingDependencies.hasOwnProperty(rawType)) {
            var callbacks = awaitingDependencies[rawType];
            delete awaitingDependencies[rawType];
            callbacks.forEach((cb) => cb());
          }
        }
        function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, { name, "fromWireType": function(wt) {
            return !!wt;
          }, "toWireType": function(destructors, o) {
            return o ? trueValue : falseValue;
          }, "argPackAdvance": 8, "readValueFromPointer": function(pointer) {
            var heap;
            if (size === 1) {
              heap = HEAP8;
            } else if (size === 2) {
              heap = HEAP16;
            } else if (size === 4) {
              heap = HEAP32;
            } else {
              throw new TypeError("Unknown boolean type size: " + name);
            }
            return this["fromWireType"](heap[pointer >> shift]);
          }, destructorFunction: null });
        }
        function ClassHandle_isAliasOf(other) {
          if (!(this instanceof ClassHandle)) {
            return false;
          }
          if (!(other instanceof ClassHandle)) {
            return false;
          }
          var leftClass = this.$$.ptrType.registeredClass;
          var left = this.$$.ptr;
          var rightClass = other.$$.ptrType.registeredClass;
          var right = other.$$.ptr;
          while (leftClass.baseClass) {
            left = leftClass.upcast(left);
            leftClass = leftClass.baseClass;
          }
          while (rightClass.baseClass) {
            right = rightClass.upcast(right);
            rightClass = rightClass.baseClass;
          }
          return leftClass === rightClass && left === right;
        }
        function shallowCopyInternalPointer(o) {
          return { count: o.count, deleteScheduled: o.deleteScheduled, preservePointerOnDelete: o.preservePointerOnDelete, ptr: o.ptr, ptrType: o.ptrType, smartPtr: o.smartPtr, smartPtrType: o.smartPtrType };
        }
        function throwInstanceAlreadyDeleted(obj2) {
          function getInstanceTypeName(handle) {
            return handle.$$.ptrType.registeredClass.name;
          }
          throwBindingError(getInstanceTypeName(obj2) + " instance already deleted");
        }
        var finalizationRegistry = false;
        function detachFinalizer(handle) {
        }
        function runDestructor($$) {
          if ($$.smartPtr) {
            $$.smartPtrType.rawDestructor($$.smartPtr);
          } else {
            $$.ptrType.registeredClass.rawDestructor($$.ptr);
          }
        }
        function releaseClassHandle($$) {
          $$.count.value -= 1;
          var toDelete = 0 === $$.count.value;
          if (toDelete) {
            runDestructor($$);
          }
        }
        function downcastPointer(ptr, ptrClass, desiredClass) {
          if (ptrClass === desiredClass) {
            return ptr;
          }
          if (void 0 === desiredClass.baseClass) {
            return null;
          }
          var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
          if (rv === null) {
            return null;
          }
          return desiredClass.downcast(rv);
        }
        var registeredPointers = {};
        function getInheritedInstanceCount() {
          return Object.keys(registeredInstances).length;
        }
        function getLiveInheritedInstances() {
          var rv = [];
          for (var k in registeredInstances) {
            if (registeredInstances.hasOwnProperty(k)) {
              rv.push(registeredInstances[k]);
            }
          }
          return rv;
        }
        var deletionQueue = [];
        function flushPendingDeletes() {
          while (deletionQueue.length) {
            var obj2 = deletionQueue.pop();
            obj2.$$.deleteScheduled = false;
            obj2["delete"]();
          }
        }
        var delayFunction = void 0;
        function setDelayFunction(fn) {
          delayFunction = fn;
          if (deletionQueue.length && delayFunction) {
            delayFunction(flushPendingDeletes);
          }
        }
        function init_embind() {
          Module["getInheritedInstanceCount"] = getInheritedInstanceCount;
          Module["getLiveInheritedInstances"] = getLiveInheritedInstances;
          Module["flushPendingDeletes"] = flushPendingDeletes;
          Module["setDelayFunction"] = setDelayFunction;
        }
        var registeredInstances = {};
        function getBasestPointer(class_, ptr) {
          if (ptr === void 0) {
            throwBindingError("ptr should not be undefined");
          }
          while (class_.baseClass) {
            ptr = class_.upcast(ptr);
            class_ = class_.baseClass;
          }
          return ptr;
        }
        function getInheritedInstance(class_, ptr) {
          ptr = getBasestPointer(class_, ptr);
          return registeredInstances[ptr];
        }
        function makeClassHandle(prototype, record) {
          if (!record.ptrType || !record.ptr) {
            throwInternalError("makeClassHandle requires ptr and ptrType");
          }
          var hasSmartPtrType = !!record.smartPtrType;
          var hasSmartPtr = !!record.smartPtr;
          if (hasSmartPtrType !== hasSmartPtr) {
            throwInternalError("Both smartPtrType and smartPtr must be specified");
          }
          record.count = { value: 1 };
          return attachFinalizer(Object.create(prototype, { $$: { value: record } }));
        }
        function RegisteredPointer_fromWireType(ptr) {
          var rawPointer = this.getPointee(ptr);
          if (!rawPointer) {
            this.destructor(ptr);
            return null;
          }
          var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
          if (void 0 !== registeredInstance) {
            if (0 === registeredInstance.$$.count.value) {
              registeredInstance.$$.ptr = rawPointer;
              registeredInstance.$$.smartPtr = ptr;
              return registeredInstance["clone"]();
            } else {
              var rv = registeredInstance["clone"]();
              this.destructor(ptr);
              return rv;
            }
          }
          function makeDefaultHandle() {
            if (this.isSmartPointer) {
              return makeClassHandle(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: rawPointer, smartPtrType: this, smartPtr: ptr });
            } else {
              return makeClassHandle(this.registeredClass.instancePrototype, { ptrType: this, ptr });
            }
          }
          var actualType = this.registeredClass.getActualType(rawPointer);
          var registeredPointerRecord = registeredPointers[actualType];
          if (!registeredPointerRecord) {
            return makeDefaultHandle.call(this);
          }
          var toType;
          if (this.isConst) {
            toType = registeredPointerRecord.constPointerType;
          } else {
            toType = registeredPointerRecord.pointerType;
          }
          var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass);
          if (dp === null) {
            return makeDefaultHandle.call(this);
          }
          if (this.isSmartPointer) {
            return makeClassHandle(toType.registeredClass.instancePrototype, { ptrType: toType, ptr: dp, smartPtrType: this, smartPtr: ptr });
          } else {
            return makeClassHandle(toType.registeredClass.instancePrototype, { ptrType: toType, ptr: dp });
          }
        }
        function attachFinalizer(handle) {
          if ("undefined" === typeof FinalizationRegistry) {
            attachFinalizer = (handle2) => handle2;
            return handle;
          }
          finalizationRegistry = new FinalizationRegistry((info) => {
            releaseClassHandle(info.$$);
          });
          attachFinalizer = (handle2) => {
            var $$ = handle2.$$;
            var hasSmartPtr = !!$$.smartPtr;
            if (hasSmartPtr) {
              var info = { $$ };
              finalizationRegistry.register(handle2, info, handle2);
            }
            return handle2;
          };
          detachFinalizer = (handle2) => finalizationRegistry.unregister(handle2);
          return attachFinalizer(handle);
        }
        function ClassHandle_clone() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.preservePointerOnDelete) {
            this.$$.count.value += 1;
            return this;
          } else {
            var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), { $$: { value: shallowCopyInternalPointer(this.$$) } }));
            clone.$$.count.value += 1;
            clone.$$.deleteScheduled = false;
            return clone;
          }
        }
        function ClassHandle_delete() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
            throwBindingError("Object already scheduled for deletion");
          }
          detachFinalizer(this);
          releaseClassHandle(this.$$);
          if (!this.$$.preservePointerOnDelete) {
            this.$$.smartPtr = void 0;
            this.$$.ptr = void 0;
          }
        }
        function ClassHandle_isDeleted() {
          return !this.$$.ptr;
        }
        function ClassHandle_deleteLater() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
            throwBindingError("Object already scheduled for deletion");
          }
          deletionQueue.push(this);
          if (deletionQueue.length === 1 && delayFunction) {
            delayFunction(flushPendingDeletes);
          }
          this.$$.deleteScheduled = true;
          return this;
        }
        function init_ClassHandle() {
          ClassHandle.prototype["isAliasOf"] = ClassHandle_isAliasOf;
          ClassHandle.prototype["clone"] = ClassHandle_clone;
          ClassHandle.prototype["delete"] = ClassHandle_delete;
          ClassHandle.prototype["isDeleted"] = ClassHandle_isDeleted;
          ClassHandle.prototype["deleteLater"] = ClassHandle_deleteLater;
        }
        function ClassHandle() {
        }
        function ensureOverloadTable(proto, methodName, humanName) {
          if (void 0 === proto[methodName].overloadTable) {
            var prevFunc = proto[methodName];
            proto[methodName] = function() {
              if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
                throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
              }
              return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
            };
            proto[methodName].overloadTable = [];
            proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
          }
        }
        function exposePublicSymbol(name, value, numArguments) {
          if (Module.hasOwnProperty(name)) {
            if (void 0 === numArguments || void 0 !== Module[name].overloadTable && void 0 !== Module[name].overloadTable[numArguments]) {
              throwBindingError("Cannot register public name '" + name + "' twice");
            }
            ensureOverloadTable(Module, name, name);
            if (Module.hasOwnProperty(numArguments)) {
              throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
            }
            Module[name].overloadTable[numArguments] = value;
          } else {
            Module[name] = value;
            if (void 0 !== numArguments) {
              Module[name].numArguments = numArguments;
            }
          }
        }
        function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
          this.name = name;
          this.constructor = constructor;
          this.instancePrototype = instancePrototype;
          this.rawDestructor = rawDestructor;
          this.baseClass = baseClass;
          this.getActualType = getActualType;
          this.upcast = upcast;
          this.downcast = downcast;
          this.pureVirtualFunctions = [];
        }
        function upcastPointer(ptr, ptrClass, desiredClass) {
          while (ptrClass !== desiredClass) {
            if (!ptrClass.upcast) {
              throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name);
            }
            ptr = ptrClass.upcast(ptr);
            ptrClass = ptrClass.baseClass;
          }
          return ptr;
        }
        function constNoSmartPtrRawPointerToWireType(destructors, handle) {
          if (handle === null) {
            if (this.isReference) {
              throwBindingError("null is not a valid " + this.name);
            }
            return 0;
          }
          if (!handle.$$) {
            throwBindingError('Cannot pass "' + embindRepr(handle) + '" as a ' + this.name);
          }
          if (!handle.$$.ptr) {
            throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
          }
          var handleClass = handle.$$.ptrType.registeredClass;
          var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
          return ptr;
        }
        function genericPointerToWireType(destructors, handle) {
          var ptr;
          if (handle === null) {
            if (this.isReference) {
              throwBindingError("null is not a valid " + this.name);
            }
            if (this.isSmartPointer) {
              ptr = this.rawConstructor();
              if (destructors !== null) {
                destructors.push(this.rawDestructor, ptr);
              }
              return ptr;
            } else {
              return 0;
            }
          }
          if (!handle.$$) {
            throwBindingError('Cannot pass "' + embindRepr(handle) + '" as a ' + this.name);
          }
          if (!handle.$$.ptr) {
            throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
          }
          if (!this.isConst && handle.$$.ptrType.isConst) {
            throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
          }
          var handleClass = handle.$$.ptrType.registeredClass;
          ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
          if (this.isSmartPointer) {
            if (void 0 === handle.$$.smartPtr) {
              throwBindingError("Passing raw pointer to smart pointer is illegal");
            }
            switch (this.sharingPolicy) {
              case 0:
                if (handle.$$.smartPtrType === this) {
                  ptr = handle.$$.smartPtr;
                } else {
                  throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
                }
                break;
              case 1:
                ptr = handle.$$.smartPtr;
                break;
              case 2:
                if (handle.$$.smartPtrType === this) {
                  ptr = handle.$$.smartPtr;
                } else {
                  var clonedHandle = handle["clone"]();
                  ptr = this.rawShare(ptr, Emval.toHandle(function() {
                    clonedHandle["delete"]();
                  }));
                  if (destructors !== null) {
                    destructors.push(this.rawDestructor, ptr);
                  }
                }
                break;
              default:
                throwBindingError("Unsupporting sharing policy");
            }
          }
          return ptr;
        }
        function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
          if (handle === null) {
            if (this.isReference) {
              throwBindingError("null is not a valid " + this.name);
            }
            return 0;
          }
          if (!handle.$$) {
            throwBindingError('Cannot pass "' + embindRepr(handle) + '" as a ' + this.name);
          }
          if (!handle.$$.ptr) {
            throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
          }
          if (handle.$$.ptrType.isConst) {
            throwBindingError("Cannot convert argument of type " + handle.$$.ptrType.name + " to parameter type " + this.name);
          }
          var handleClass = handle.$$.ptrType.registeredClass;
          var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
          return ptr;
        }
        function RegisteredPointer_getPointee(ptr) {
          if (this.rawGetPointee) {
            ptr = this.rawGetPointee(ptr);
          }
          return ptr;
        }
        function RegisteredPointer_destructor(ptr) {
          if (this.rawDestructor) {
            this.rawDestructor(ptr);
          }
        }
        function RegisteredPointer_deleteObject(handle) {
          if (handle !== null) {
            handle["delete"]();
          }
        }
        function init_RegisteredPointer() {
          RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
          RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
          RegisteredPointer.prototype["argPackAdvance"] = 8;
          RegisteredPointer.prototype["readValueFromPointer"] = simpleReadValueFromPointer;
          RegisteredPointer.prototype["deleteObject"] = RegisteredPointer_deleteObject;
          RegisteredPointer.prototype["fromWireType"] = RegisteredPointer_fromWireType;
        }
        function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
          this.name = name;
          this.registeredClass = registeredClass;
          this.isReference = isReference;
          this.isConst = isConst;
          this.isSmartPointer = isSmartPointer;
          this.pointeeType = pointeeType;
          this.sharingPolicy = sharingPolicy;
          this.rawGetPointee = rawGetPointee;
          this.rawConstructor = rawConstructor;
          this.rawShare = rawShare;
          this.rawDestructor = rawDestructor;
          if (!isSmartPointer && registeredClass.baseClass === void 0) {
            if (isConst) {
              this["toWireType"] = constNoSmartPtrRawPointerToWireType;
              this.destructorFunction = null;
            } else {
              this["toWireType"] = nonConstNoSmartPtrRawPointerToWireType;
              this.destructorFunction = null;
            }
          } else {
            this["toWireType"] = genericPointerToWireType;
          }
        }
        function replacePublicSymbol(name, value, numArguments) {
          if (!Module.hasOwnProperty(name)) {
            throwInternalError("Replacing nonexistant public symbol");
          }
          if (void 0 !== Module[name].overloadTable && void 0 !== numArguments) {
            Module[name].overloadTable[numArguments] = value;
          } else {
            Module[name] = value;
            Module[name].argCount = numArguments;
          }
        }
        function dynCallLegacy(sig, ptr, args) {
          var f = Module["dynCall_" + sig];
          return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr);
        }
        var wasmTableMirror = [];
        function getWasmTableEntry(funcPtr) {
          var func = wasmTableMirror[funcPtr];
          if (!func) {
            if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
            wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
          }
          return func;
        }
        function dynCall(sig, ptr, args) {
          if (sig.includes("j")) {
            return dynCallLegacy(sig, ptr, args);
          }
          var rtn = getWasmTableEntry(ptr).apply(null, args);
          return rtn;
        }
        function getDynCaller(sig, ptr) {
          var argCache = [];
          return function() {
            argCache.length = 0;
            Object.assign(argCache, arguments);
            return dynCall(sig, ptr, argCache);
          };
        }
        function embind__requireFunction(signature, rawFunction) {
          signature = readLatin1String(signature);
          function makeDynCaller() {
            if (signature.includes("j")) {
              return getDynCaller(signature, rawFunction);
            }
            return getWasmTableEntry(rawFunction);
          }
          var fp = makeDynCaller();
          if (typeof fp != "function") {
            throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
          }
          return fp;
        }
        var UnboundTypeError = void 0;
        function getTypeName(type) {
          var ptr = ___getTypeName(type);
          var rv = readLatin1String(ptr);
          _free(ptr);
          return rv;
        }
        function throwUnboundTypeError(message, types) {
          var unboundTypes = [];
          var seen = {};
          function visit(type) {
            if (seen[type]) {
              return;
            }
            if (registeredTypes[type]) {
              return;
            }
            if (typeDependencies[type]) {
              typeDependencies[type].forEach(visit);
              return;
            }
            unboundTypes.push(type);
            seen[type] = true;
          }
          types.forEach(visit);
          throw new UnboundTypeError(message + ": " + unboundTypes.map(getTypeName).join([", "]));
        }
        function __embind_register_class(rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) {
          name = readLatin1String(name);
          getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
          if (upcast) {
            upcast = embind__requireFunction(upcastSignature, upcast);
          }
          if (downcast) {
            downcast = embind__requireFunction(downcastSignature, downcast);
          }
          rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
          var legalFunctionName = makeLegalFunctionName(name);
          exposePublicSymbol(legalFunctionName, function() {
            throwUnboundTypeError("Cannot construct " + name + " due to unbound types", [baseClassRawType]);
          });
          whenDependentTypesAreResolved([rawType, rawPointerType, rawConstPointerType], baseClassRawType ? [baseClassRawType] : [], function(base) {
            base = base[0];
            var baseClass;
            var basePrototype;
            if (baseClassRawType) {
              baseClass = base.registeredClass;
              basePrototype = baseClass.instancePrototype;
            } else {
              basePrototype = ClassHandle.prototype;
            }
            var constructor = createNamedFunction(legalFunctionName, function() {
              if (Object.getPrototypeOf(this) !== instancePrototype) {
                throw new BindingError("Use 'new' to construct " + name);
              }
              if (void 0 === registeredClass.constructor_body) {
                throw new BindingError(name + " has no accessible constructor");
              }
              var body = registeredClass.constructor_body[arguments.length];
              if (void 0 === body) {
                throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!");
              }
              return body.apply(this, arguments);
            });
            var instancePrototype = Object.create(basePrototype, { constructor: { value: constructor } });
            constructor.prototype = instancePrototype;
            var registeredClass = new RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast);
            var referenceConverter = new RegisteredPointer(name, registeredClass, true, false, false);
            var pointerConverter = new RegisteredPointer(name + "*", registeredClass, false, false, false);
            var constPointerConverter = new RegisteredPointer(name + " const*", registeredClass, false, true, false);
            registeredPointers[rawType] = { pointerType: pointerConverter, constPointerType: constPointerConverter };
            replacePublicSymbol(legalFunctionName, constructor);
            return [referenceConverter, pointerConverter, constPointerConverter];
          });
        }
        function heap32VectorToArray(count, firstElement) {
          var array = [];
          for (var i = 0; i < count; i++) {
            array.push(HEAPU32[firstElement + i * 4 >> 2]);
          }
          return array;
        }
        function new_(constructor, argumentList) {
          if (!(constructor instanceof Function)) {
            throw new TypeError("new_ called with constructor type " + typeof constructor + " which is not a function");
          }
          var dummy = createNamedFunction(constructor.name || "unknownFunctionName", function() {
          });
          dummy.prototype = constructor.prototype;
          var obj2 = new dummy();
          var r = constructor.apply(obj2, argumentList);
          return r instanceof Object ? r : obj2;
        }
        function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
          var argCount = argTypes.length;
          if (argCount < 2) {
            throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
          }
          var isClassMethodFunc = argTypes[1] !== null && classType !== null;
          var needsDestructorStack = false;
          for (var i = 1; i < argTypes.length; ++i) {
            if (argTypes[i] !== null && argTypes[i].destructorFunction === void 0) {
              needsDestructorStack = true;
              break;
            }
          }
          var returns = argTypes[0].name !== "void";
          var argsList = "";
          var argsListWired = "";
          for (var i = 0; i < argCount - 2; ++i) {
            argsList += (i !== 0 ? ", " : "") + "arg" + i;
            argsListWired += (i !== 0 ? ", " : "") + "arg" + i + "Wired";
          }
          var invokerFnBody = "return function " + makeLegalFunctionName(humanName) + "(" + argsList + ") {\nif (arguments.length !== " + (argCount - 2) + ") {\nthrowBindingError('function " + humanName + " called with ' + arguments.length + ' arguments, expected " + (argCount - 2) + " args!');\n}\n";
          if (needsDestructorStack) {
            invokerFnBody += "var destructors = [];\n";
          }
          var dtorStack = needsDestructorStack ? "destructors" : "null";
          var args1 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
          var args2 = [throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, argTypes[0], argTypes[1]];
          if (isClassMethodFunc) {
            invokerFnBody += "var thisWired = classParam.toWireType(" + dtorStack + ", this);\n";
          }
          for (var i = 0; i < argCount - 2; ++i) {
            invokerFnBody += "var arg" + i + "Wired = argType" + i + ".toWireType(" + dtorStack + ", arg" + i + "); // " + argTypes[i + 2].name + "\n";
            args1.push("argType" + i);
            args2.push(argTypes[i + 2]);
          }
          if (isClassMethodFunc) {
            argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired;
          }
          invokerFnBody += (returns ? "var rv = " : "") + "invoker(fn" + (argsListWired.length > 0 ? ", " : "") + argsListWired + ");\n";
          if (needsDestructorStack) {
            invokerFnBody += "runDestructors(destructors);\n";
          } else {
            for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
              var paramName = i === 1 ? "thisWired" : "arg" + (i - 2) + "Wired";
              if (argTypes[i].destructorFunction !== null) {
                invokerFnBody += paramName + "_dtor(" + paramName + "); // " + argTypes[i].name + "\n";
                args1.push(paramName + "_dtor");
                args2.push(argTypes[i].destructorFunction);
              }
            }
          }
          if (returns) {
            invokerFnBody += "var ret = retType.fromWireType(rv);\nreturn ret;\n";
          } else {
          }
          invokerFnBody += "}\n";
          args1.push(invokerFnBody);
          var invokerFunction = new_(Function, args1).apply(null, args2);
          return invokerFunction;
        }
        function __embind_register_class_constructor(rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) {
          assert(argCount > 0);
          var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
          invoker = embind__requireFunction(invokerSignature, invoker);
          whenDependentTypesAreResolved([], [rawClassType], function(classType) {
            classType = classType[0];
            var humanName = "constructor " + classType.name;
            if (void 0 === classType.registeredClass.constructor_body) {
              classType.registeredClass.constructor_body = [];
            }
            if (void 0 !== classType.registeredClass.constructor_body[argCount - 1]) {
              throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount - 1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
            }
            classType.registeredClass.constructor_body[argCount - 1] = () => {
              throwUnboundTypeError("Cannot construct " + classType.name + " due to unbound types", rawArgTypes);
            };
            whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
              argTypes.splice(1, 0, null);
              classType.registeredClass.constructor_body[argCount - 1] = craftInvokerFunction(humanName, argTypes, null, invoker, rawConstructor);
              return [];
            });
            return [];
          });
        }
        function __embind_register_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual) {
          var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
          methodName = readLatin1String(methodName);
          rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
          whenDependentTypesAreResolved([], [rawClassType], function(classType) {
            classType = classType[0];
            var humanName = classType.name + "." + methodName;
            if (methodName.startsWith("@@")) {
              methodName = Symbol[methodName.substring(2)];
            }
            if (isPureVirtual) {
              classType.registeredClass.pureVirtualFunctions.push(methodName);
            }
            function unboundTypesHandler() {
              throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes);
            }
            var proto = classType.registeredClass.instancePrototype;
            var method = proto[methodName];
            if (void 0 === method || void 0 === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2) {
              unboundTypesHandler.argCount = argCount - 2;
              unboundTypesHandler.className = classType.name;
              proto[methodName] = unboundTypesHandler;
            } else {
              ensureOverloadTable(proto, methodName, humanName);
              proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
            }
            whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
              var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);
              if (void 0 === proto[methodName].overloadTable) {
                memberFunction.argCount = argCount - 2;
                proto[methodName] = memberFunction;
              } else {
                proto[methodName].overloadTable[argCount - 2] = memberFunction;
              }
              return [];
            });
            return [];
          });
        }
        var emval_free_list = [];
        var emval_handle_array = [{}, { value: void 0 }, { value: null }, { value: true }, { value: false }];
        function __emval_decref(handle) {
          if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
            emval_handle_array[handle] = void 0;
            emval_free_list.push(handle);
          }
        }
        function count_emval_handles() {
          var count = 0;
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== void 0) {
              ++count;
            }
          }
          return count;
        }
        function get_first_emval() {
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== void 0) {
              return emval_handle_array[i];
            }
          }
          return null;
        }
        function init_emval() {
          Module["count_emval_handles"] = count_emval_handles;
          Module["get_first_emval"] = get_first_emval;
        }
        var Emval = { toValue: (handle) => {
          if (!handle) {
            throwBindingError("Cannot use deleted val. handle = " + handle);
          }
          return emval_handle_array[handle].value;
        }, toHandle: (value) => {
          switch (value) {
            case void 0:
              return 1;
            case null:
              return 2;
            case true:
              return 3;
            case false:
              return 4;
            default: {
              var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
              emval_handle_array[handle] = { refcount: 1, value };
              return handle;
            }
          }
        } };
        function __embind_register_emval(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, { name, "fromWireType": function(handle) {
            var rv = Emval.toValue(handle);
            __emval_decref(handle);
            return rv;
          }, "toWireType": function(destructors, value) {
            return Emval.toHandle(value);
          }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: null });
        }
        function embindRepr(v) {
          if (v === null) {
            return "null";
          }
          var t = typeof v;
          if (t === "object" || t === "array" || t === "function") {
            return v.toString();
          } else {
            return "" + v;
          }
        }
        function floatReadValueFromPointer(name, shift) {
          switch (shift) {
            case 2:
              return function(pointer) {
                return this["fromWireType"](HEAPF32[pointer >> 2]);
              };
            case 3:
              return function(pointer) {
                return this["fromWireType"](HEAPF64[pointer >> 3]);
              };
            default:
              throw new TypeError("Unknown float type: " + name);
          }
        }
        function __embind_register_float(rawType, name, size) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, { name, "fromWireType": function(value) {
            return value;
          }, "toWireType": function(destructors, value) {
            return value;
          }, "argPackAdvance": 8, "readValueFromPointer": floatReadValueFromPointer(name, shift), destructorFunction: null });
        }
        function __embind_register_function(name, argCount, rawArgTypesAddr, signature, rawInvoker, fn) {
          var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
          name = readLatin1String(name);
          rawInvoker = embind__requireFunction(signature, rawInvoker);
          exposePublicSymbol(name, function() {
            throwUnboundTypeError("Cannot call " + name + " due to unbound types", argTypes);
          }, argCount - 1);
          whenDependentTypesAreResolved([], argTypes, function(argTypes2) {
            var invokerArgsArray = [argTypes2[0], null].concat(argTypes2.slice(1));
            replacePublicSymbol(name, craftInvokerFunction(name, invokerArgsArray, null, rawInvoker, fn), argCount - 1);
            return [];
          });
        }
        function integerReadValueFromPointer(name, shift, signed) {
          switch (shift) {
            case 0:
              return signed ? function readS8FromPointer(pointer) {
                return HEAP8[pointer];
              } : function readU8FromPointer(pointer) {
                return HEAPU8[pointer];
              };
            case 1:
              return signed ? function readS16FromPointer(pointer) {
                return HEAP16[pointer >> 1];
              } : function readU16FromPointer(pointer) {
                return HEAPU16[pointer >> 1];
              };
            case 2:
              return signed ? function readS32FromPointer(pointer) {
                return HEAP32[pointer >> 2];
              } : function readU32FromPointer(pointer) {
                return HEAPU32[pointer >> 2];
              };
            default:
              throw new TypeError("Unknown integer type: " + name);
          }
        }
        function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
          name = readLatin1String(name);
          if (maxRange === -1) {
            maxRange = 4294967295;
          }
          var shift = getShiftFromSize(size);
          var fromWireType = (value) => value;
          if (minRange === 0) {
            var bitshift = 32 - 8 * size;
            fromWireType = (value) => value << bitshift >>> bitshift;
          }
          var isUnsignedType = name.includes("unsigned");
          var checkAssertions = (value, toTypeName) => {
          };
          var toWireType;
          if (isUnsignedType) {
            toWireType = function(destructors, value) {
              checkAssertions(value, this.name);
              return value >>> 0;
            };
          } else {
            toWireType = function(destructors, value) {
              checkAssertions(value, this.name);
              return value;
            };
          }
          registerType(primitiveType, { name, "fromWireType": fromWireType, "toWireType": toWireType, "argPackAdvance": 8, "readValueFromPointer": integerReadValueFromPointer(name, shift, minRange !== 0), destructorFunction: null });
        }
        function __embind_register_memory_view(rawType, dataTypeIndex, name) {
          var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
          var TA = typeMapping[dataTypeIndex];
          function decodeMemoryView(handle) {
            handle = handle >> 2;
            var heap = HEAPU32;
            var size = heap[handle];
            var data = heap[handle + 1];
            return new TA(buffer, data, size);
          }
          name = readLatin1String(name);
          registerType(rawType, { name, "fromWireType": decodeMemoryView, "argPackAdvance": 8, "readValueFromPointer": decodeMemoryView }, { ignoreDuplicateRegistrations: true });
        }
        function __embind_register_std_string(rawType, name) {
          name = readLatin1String(name);
          var stdStringIsUTF8 = name === "std::string";
          registerType(rawType, { name, "fromWireType": function(value) {
            var length = HEAPU32[value >> 2];
            var payload = value + 4;
            var str;
            if (stdStringIsUTF8) {
              var decodeStartPtr = payload;
              for (var i = 0; i <= length; ++i) {
                var currentBytePtr = payload + i;
                if (i == length || HEAPU8[currentBytePtr] == 0) {
                  var maxRead = currentBytePtr - decodeStartPtr;
                  var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                  if (str === void 0) {
                    str = stringSegment;
                  } else {
                    str += String.fromCharCode(0);
                    str += stringSegment;
                  }
                  decodeStartPtr = currentBytePtr + 1;
                }
              }
            } else {
              var a = new Array(length);
              for (var i = 0; i < length; ++i) {
                a[i] = String.fromCharCode(HEAPU8[payload + i]);
              }
              str = a.join("");
            }
            _free(value);
            return str;
          }, "toWireType": function(destructors, value) {
            if (value instanceof ArrayBuffer) {
              value = new Uint8Array(value);
            }
            var length;
            var valueIsOfTypeString = typeof value == "string";
            if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
              throwBindingError("Cannot pass non-string to std::string");
            }
            if (stdStringIsUTF8 && valueIsOfTypeString) {
              length = lengthBytesUTF8(value);
            } else {
              length = value.length;
            }
            var base = _malloc(4 + length + 1);
            var ptr = base + 4;
            HEAPU32[base >> 2] = length;
            if (stdStringIsUTF8 && valueIsOfTypeString) {
              stringToUTF8(value, ptr, length + 1);
            } else {
              if (valueIsOfTypeString) {
                for (var i = 0; i < length; ++i) {
                  var charCode = value.charCodeAt(i);
                  if (charCode > 255) {
                    _free(ptr);
                    throwBindingError("String has UTF-16 code units that do not fit in 8 bits");
                  }
                  HEAPU8[ptr + i] = charCode;
                }
              } else {
                for (var i = 0; i < length; ++i) {
                  HEAPU8[ptr + i] = value[i];
                }
              }
            }
            if (destructors !== null) {
              destructors.push(_free, base);
            }
            return base;
          }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: function(ptr) {
            _free(ptr);
          } });
        }
        var UTF16Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : void 0;
        function UTF16ToString(ptr, maxBytesToRead) {
          var endPtr = ptr;
          var idx = endPtr >> 1;
          var maxIdx = idx + maxBytesToRead / 2;
          while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
          endPtr = idx << 1;
          if (endPtr - ptr > 32 && UTF16Decoder) return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
          var str = "";
          for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
            var codeUnit = HEAP16[ptr + i * 2 >> 1];
            if (codeUnit == 0) break;
            str += String.fromCharCode(codeUnit);
          }
          return str;
        }
        function stringToUTF16(str, outPtr, maxBytesToWrite) {
          if (maxBytesToWrite === void 0) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 2) return 0;
          maxBytesToWrite -= 2;
          var startPtr = outPtr;
          var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
          for (var i = 0; i < numCharsToWrite; ++i) {
            var codeUnit = str.charCodeAt(i);
            HEAP16[outPtr >> 1] = codeUnit;
            outPtr += 2;
          }
          HEAP16[outPtr >> 1] = 0;
          return outPtr - startPtr;
        }
        function lengthBytesUTF16(str) {
          return str.length * 2;
        }
        function UTF32ToString(ptr, maxBytesToRead) {
          var i = 0;
          var str = "";
          while (!(i >= maxBytesToRead / 4)) {
            var utf32 = HEAP32[ptr + i * 4 >> 2];
            if (utf32 == 0) break;
            ++i;
            if (utf32 >= 65536) {
              var ch = utf32 - 65536;
              str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            } else {
              str += String.fromCharCode(utf32);
            }
          }
          return str;
        }
        function stringToUTF32(str, outPtr, maxBytesToWrite) {
          if (maxBytesToWrite === void 0) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 4) return 0;
          var startPtr = outPtr;
          var endPtr = startPtr + maxBytesToWrite - 4;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) {
              var trailSurrogate = str.charCodeAt(++i);
              codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
            }
            HEAP32[outPtr >> 2] = codeUnit;
            outPtr += 4;
            if (outPtr + 4 > endPtr) break;
          }
          HEAP32[outPtr >> 2] = 0;
          return outPtr - startPtr;
        }
        function lengthBytesUTF32(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
            len += 4;
          }
          return len;
        }
        function __embind_register_std_wstring(rawType, charSize, name) {
          name = readLatin1String(name);
          var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
          if (charSize === 2) {
            decodeString = UTF16ToString;
            encodeString = stringToUTF16;
            lengthBytesUTF = lengthBytesUTF16;
            getHeap = () => HEAPU16;
            shift = 1;
          } else if (charSize === 4) {
            decodeString = UTF32ToString;
            encodeString = stringToUTF32;
            lengthBytesUTF = lengthBytesUTF32;
            getHeap = () => HEAPU32;
            shift = 2;
          }
          registerType(rawType, { name, "fromWireType": function(value) {
            var length = HEAPU32[value >> 2];
            var HEAP = getHeap();
            var str;
            var decodeStartPtr = value + 4;
            for (var i = 0; i <= length; ++i) {
              var currentBytePtr = value + 4 + i * charSize;
              if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                var maxReadBytes = currentBytePtr - decodeStartPtr;
                var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
                if (str === void 0) {
                  str = stringSegment;
                } else {
                  str += String.fromCharCode(0);
                  str += stringSegment;
                }
                decodeStartPtr = currentBytePtr + charSize;
              }
            }
            _free(value);
            return str;
          }, "toWireType": function(destructors, value) {
            if (!(typeof value == "string")) {
              throwBindingError("Cannot pass non-string to C++ string type " + name);
            }
            var length = lengthBytesUTF(value);
            var ptr = _malloc(4 + length + charSize);
            HEAPU32[ptr >> 2] = length >> shift;
            encodeString(value, ptr + 4, length + charSize);
            if (destructors !== null) {
              destructors.push(_free, ptr);
            }
            return ptr;
          }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: function(ptr) {
            _free(ptr);
          } });
        }
        function __embind_register_value_object(rawType, name, constructorSignature, rawConstructor, destructorSignature, rawDestructor) {
          structRegistrations[rawType] = { name: readLatin1String(name), rawConstructor: embind__requireFunction(constructorSignature, rawConstructor), rawDestructor: embind__requireFunction(destructorSignature, rawDestructor), fields: [] };
        }
        function __embind_register_value_object_field(structType, fieldName, getterReturnType, getterSignature, getter, getterContext, setterArgumentType, setterSignature, setter, setterContext) {
          structRegistrations[structType].fields.push({ fieldName: readLatin1String(fieldName), getterReturnType, getter: embind__requireFunction(getterSignature, getter), getterContext, setterArgumentType, setter: embind__requireFunction(setterSignature, setter), setterContext });
        }
        function __embind_register_void(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, { isVoid: true, name, "argPackAdvance": 0, "fromWireType": function() {
            return void 0;
          }, "toWireType": function(destructors, o) {
            return void 0;
          } });
        }
        var emval_symbols = {};
        function getStringOrSymbol(address) {
          var symbol = emval_symbols[address];
          if (symbol === void 0) {
            return readLatin1String(address);
          }
          return symbol;
        }
        function emval_get_global() {
          if (typeof globalThis == "object") {
            return globalThis;
          }
          return (/* @__PURE__ */ function() {
            return Function;
          }())("return this")();
        }
        function __emval_get_global(name) {
          if (name === 0) {
            return Emval.toHandle(emval_get_global());
          } else {
            name = getStringOrSymbol(name);
            return Emval.toHandle(emval_get_global()[name]);
          }
        }
        function __emval_incref(handle) {
          if (handle > 4) {
            emval_handle_array[handle].refcount += 1;
          }
        }
        function requireRegisteredType(rawType, humanName) {
          var impl = registeredTypes[rawType];
          if (void 0 === impl) {
            throwBindingError(humanName + " has unknown type " + getTypeName(rawType));
          }
          return impl;
        }
        function craftEmvalAllocator(argCount) {
          var argsList = "";
          for (var i = 0; i < argCount; ++i) {
            argsList += (i !== 0 ? ", " : "") + "arg" + i;
          }
          var getMemory = () => HEAPU32;
          var functionBody = "return function emval_allocator_" + argCount + "(constructor, argTypes, args) {\n  var HEAPU32 = getMemory();\n";
          for (var i = 0; i < argCount; ++i) {
            functionBody += "var argType" + i + " = requireRegisteredType(HEAPU32[((argTypes)>>2)], 'parameter " + i + "');\nvar arg" + i + " = argType" + i + ".readValueFromPointer(args);\nargs += argType" + i + "['argPackAdvance'];\nargTypes += 4;\n";
          }
          functionBody += "var obj = new constructor(" + argsList + ");\nreturn valueToHandle(obj);\n}\n";
          return new Function("requireRegisteredType", "Module", "valueToHandle", "getMemory", functionBody)(requireRegisteredType, Module, Emval.toHandle, getMemory);
        }
        var emval_newers = {};
        function __emval_new(handle, argCount, argTypes, args) {
          handle = Emval.toValue(handle);
          var newer = emval_newers[argCount];
          if (!newer) {
            newer = craftEmvalAllocator(argCount);
            emval_newers[argCount] = newer;
          }
          return newer(handle, argTypes, args);
        }
        function __emval_take_value(type, arg) {
          type = requireRegisteredType(type, "_emval_take_value");
          var v = type["readValueFromPointer"](arg);
          return Emval.toHandle(v);
        }
        function _abort() {
          abort("");
        }
        function _emscripten_memcpy_big(dest, src, num) {
          HEAPU8.copyWithin(dest, src, src + num);
        }
        function getHeapMax() {
          return 2147483648;
        }
        function emscripten_realloc_buffer(size) {
          try {
            wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
            updateGlobalBufferAndViews(wasmMemory.buffer);
            return 1;
          } catch (e) {
          }
        }
        function _emscripten_resize_heap(requestedSize) {
          var oldSize = HEAPU8.length;
          requestedSize = requestedSize >>> 0;
          var maxHeapSize = getHeapMax();
          if (requestedSize > maxHeapSize) {
            return false;
          }
          let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
            var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
            var replacement = emscripten_realloc_buffer(newSize);
            if (replacement) {
              return true;
            }
          }
          return false;
        }
        function getCFunc(ident) {
          var func = Module["_" + ident];
          return func;
        }
        function writeArrayToMemory(array, buffer2) {
          HEAP8.set(array, buffer2);
        }
        function ccall(ident, returnType, argTypes, args, opts) {
          var toC = { "string": (str) => {
            var ret2 = 0;
            if (str !== null && str !== void 0 && str !== 0) {
              var len = (str.length << 2) + 1;
              ret2 = stackAlloc(len);
              stringToUTF8(str, ret2, len);
            }
            return ret2;
          }, "array": (arr) => {
            var ret2 = stackAlloc(arr.length);
            writeArrayToMemory(arr, ret2);
            return ret2;
          } };
          function convertReturnValue(ret2) {
            if (returnType === "string") {
              return UTF8ToString(ret2);
            }
            if (returnType === "boolean") return Boolean(ret2);
            return ret2;
          }
          var func = getCFunc(ident);
          var cArgs = [];
          var stack = 0;
          if (args) {
            for (var i = 0; i < args.length; i++) {
              var converter = toC[argTypes[i]];
              if (converter) {
                if (stack === 0) stack = stackSave();
                cArgs[i] = converter(args[i]);
              } else {
                cArgs[i] = args[i];
              }
            }
          }
          var ret = func.apply(null, cArgs);
          function onDone(ret2) {
            if (stack !== 0) stackRestore(stack);
            return convertReturnValue(ret2);
          }
          ret = onDone(ret);
          return ret;
        }
        InternalError = Module["InternalError"] = extendError(Error, "InternalError");
        embind_init_charCodes();
        BindingError = Module["BindingError"] = extendError(Error, "BindingError");
        init_ClassHandle();
        init_embind();
        init_RegisteredPointer();
        UnboundTypeError = Module["UnboundTypeError"] = extendError(Error, "UnboundTypeError");
        init_emval();
        var asmLibraryArg = { "h": ___cxa_throw, "q": __embind_finalize_value_object, "r": __embind_register_bigint, "w": __embind_register_bool, "p": __embind_register_class, "o": __embind_register_class_constructor, "c": __embind_register_class_function, "v": __embind_register_emval, "k": __embind_register_float, "e": __embind_register_function, "b": __embind_register_integer, "a": __embind_register_memory_view, "j": __embind_register_std_string, "g": __embind_register_std_wstring, "u": __embind_register_value_object, "d": __embind_register_value_object_field, "x": __embind_register_void, "i": __emval_decref, "m": __emval_get_global, "l": __emval_incref, "y": __emval_new, "n": __emval_take_value, "f": _abort, "t": _emscripten_memcpy_big, "s": _emscripten_resize_heap };
        var asm = createWasm();
        var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
          return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["A"]).apply(null, arguments);
        };
        var _malloc = Module["_malloc"] = function() {
          return (_malloc = Module["_malloc"] = Module["asm"]["B"]).apply(null, arguments);
        };
        var ___getTypeName = Module["___getTypeName"] = function() {
          return (___getTypeName = Module["___getTypeName"] = Module["asm"]["D"]).apply(null, arguments);
        };
        var __embind_initialize_bindings = Module["__embind_initialize_bindings"] = function() {
          return (__embind_initialize_bindings = Module["__embind_initialize_bindings"] = Module["asm"]["E"]).apply(null, arguments);
        };
        var _free = Module["_free"] = function() {
          return (_free = Module["_free"] = Module["asm"]["F"]).apply(null, arguments);
        };
        var stackSave = Module["stackSave"] = function() {
          return (stackSave = Module["stackSave"] = Module["asm"]["G"]).apply(null, arguments);
        };
        var stackRestore = Module["stackRestore"] = function() {
          return (stackRestore = Module["stackRestore"] = Module["asm"]["H"]).apply(null, arguments);
        };
        var stackAlloc = Module["stackAlloc"] = function() {
          return (stackAlloc = Module["stackAlloc"] = Module["asm"]["I"]).apply(null, arguments);
        };
        var ___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = function() {
          return (___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = Module["asm"]["J"]).apply(null, arguments);
        };
        Module["ccall"] = ccall;
        var calledRun;
        dependenciesFulfilled = function runCaller() {
          if (!calledRun) run();
          if (!calledRun) dependenciesFulfilled = runCaller;
        };
        function run(args) {
          args = args || arguments_;
          if (runDependencies > 0) {
            return;
          }
          preRun();
          if (runDependencies > 0) {
            return;
          }
          function doRun() {
            if (calledRun) return;
            calledRun = true;
            Module["calledRun"] = true;
            if (ABORT) return;
            initRuntime();
            readyPromiseResolve(Module);
            if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
            postRun();
          }
          if (Module["setStatus"]) {
            Module["setStatus"]("Running...");
            setTimeout(function() {
              setTimeout(function() {
                Module["setStatus"]("");
              }, 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
        }
        if (Module["preInit"]) {
          if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
          while (Module["preInit"].length > 0) {
            Module["preInit"].pop()();
          }
        }
        run();
        return CharLSWASM2.ready;
      };
    })();
    if (typeof exports === "object" && typeof module === "object")
      module.exports = CharLSWASM;
    else if (typeof define === "function" && define["amd"])
      define([], function() {
        return CharLSWASM;
      });
    else if (typeof exports === "object")
      exports["CharLSWASM"] = CharLSWASM;
  }
});

// node_modules/@cornerstonejs/codec-openjpeg/dist/openjpegwasm_decode.js
var require_openjpegwasm_decode = __commonJS({
  "node_modules/@cornerstonejs/codec-openjpeg/dist/openjpegwasm_decode.js"(exports, module) {
    var OpenJPEGWASM = (() => {
      var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
      if (typeof __filename !== "undefined") _scriptDir = _scriptDir || __filename;
      return function(OpenJPEGWASM2) {
        OpenJPEGWASM2 = OpenJPEGWASM2 || {};
        var Module = typeof OpenJPEGWASM2 != "undefined" ? OpenJPEGWASM2 : {};
        var readyPromiseResolve, readyPromiseReject;
        Module["ready"] = new Promise(function(resolve, reject) {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        var moduleOverrides = Object.assign({}, Module);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow) => {
          throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = typeof window == "object";
        var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
        var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
        var scriptDirectory = "";
        function locateFile(path) {
          if (Module["locateFile"]) {
            return Module["locateFile"](path, scriptDirectory);
          }
          return scriptDirectory + path;
        }
        var read_, readAsync, readBinary, setWindowTitle;
        function logExceptionOnExit(e) {
          if (e instanceof ExitStatus) return;
          let toLog = e;
          err("exiting due to exception: " + toLog);
        }
        if (ENVIRONMENT_IS_NODE) {
          var fs = require_fs();
          var nodePath = require_path();
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = nodePath.dirname(scriptDirectory) + "/";
          } else {
            scriptDirectory = __dirname + "/";
          }
          read_ = (filename, binary) => {
            filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
            return fs.readFileSync(filename, binary ? void 0 : "utf8");
          };
          readBinary = (filename) => {
            var ret = read_(filename, true);
            if (!ret.buffer) {
              ret = new Uint8Array(ret);
            }
            return ret;
          };
          readAsync = (filename, onload, onerror) => {
            filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
            fs.readFile(filename, function(err2, data) {
              if (err2) onerror(err2);
              else onload(data.buffer);
            });
          };
          if (process["argv"].length > 1) {
            thisProgram = process["argv"][1].replace(/\\/g, "/");
          }
          arguments_ = process["argv"].slice(2);
          process["on"]("uncaughtException", function(ex) {
            if (!(ex instanceof ExitStatus)) {
              throw ex;
            }
          });
          process["on"]("unhandledRejection", function(reason) {
            throw reason;
          });
          quit_ = (status, toThrow) => {
            if (keepRuntimeAlive()) {
              process["exitCode"] = status;
              throw toThrow;
            }
            logExceptionOnExit(toThrow);
            process["exit"](status);
          };
          Module["inspect"] = function() {
            return "[Emscripten Module object]";
          };
        } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
          } else if (typeof document != "undefined" && document.currentScript) {
            scriptDirectory = document.currentScript.src;
          }
          if (_scriptDir) {
            scriptDirectory = _scriptDir;
          }
          if (scriptDirectory.indexOf("blob:") !== 0) {
            scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
          } else {
            scriptDirectory = "";
          }
          {
            read_ = (url) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              xhr.send(null);
              return xhr.responseText;
            };
            if (ENVIRONMENT_IS_WORKER) {
              readBinary = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
              };
            }
            readAsync = (url, onload, onerror) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.onload = () => {
                if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                  onload(xhr.response);
                  return;
                }
                onerror();
              };
              xhr.onerror = onerror;
              xhr.send(null);
            };
          }
          setWindowTitle = (title) => document.title = title;
        } else {
        }
        var out = Module["print"] || console.log.bind(console);
        var err = Module["printErr"] || console.warn.bind(console);
        Object.assign(Module, moduleOverrides);
        moduleOverrides = null;
        if (Module["arguments"]) arguments_ = Module["arguments"];
        if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
        if (Module["quit"]) quit_ = Module["quit"];
        var wasmBinary;
        if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
        var noExitRuntime = Module["noExitRuntime"] || true;
        if (typeof WebAssembly != "object") {
          abort("no native wasm support detected");
        }
        var wasmMemory;
        var ABORT = false;
        var EXITSTATUS;
        function assert(condition, text) {
          if (!condition) {
            abort(text);
          }
        }
        var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
        function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
          var endIdx = idx + maxBytesToRead;
          var endPtr = idx;
          while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
          if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
            return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
          }
          var str = "";
          while (idx < endPtr) {
            var u0 = heapOrArray[idx++];
            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
              str += String.fromCharCode((u0 & 31) << 6 | u1);
              continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
              u0 = (u0 & 15) << 12 | u1 << 6 | u2;
            } else {
              u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
            }
            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            }
          }
          return str;
        }
        function UTF8ToString(ptr, maxBytesToRead) {
          return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        }
        function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
          if (!(maxBytesToWrite > 0)) return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = 65536 + ((u & 1023) << 10) | u1 & 1023;
            }
            if (u <= 127) {
              if (outIdx >= endIdx) break;
              heap[outIdx++] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx) break;
              heap[outIdx++] = 192 | u >> 6;
              heap[outIdx++] = 128 | u & 63;
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx) break;
              heap[outIdx++] = 224 | u >> 12;
              heap[outIdx++] = 128 | u >> 6 & 63;
              heap[outIdx++] = 128 | u & 63;
            } else {
              if (outIdx + 3 >= endIdx) break;
              heap[outIdx++] = 240 | u >> 18;
              heap[outIdx++] = 128 | u >> 12 & 63;
              heap[outIdx++] = 128 | u >> 6 & 63;
              heap[outIdx++] = 128 | u & 63;
            }
          }
          heap[outIdx] = 0;
          return outIdx - startIdx;
        }
        function stringToUTF8(str, outPtr, maxBytesToWrite) {
          return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        }
        function lengthBytesUTF8(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var c = str.charCodeAt(i);
            if (c <= 127) {
              len++;
            } else if (c <= 2047) {
              len += 2;
            } else if (c >= 55296 && c <= 57343) {
              len += 4;
              ++i;
            } else {
              len += 3;
            }
          }
          return len;
        }
        var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateGlobalBufferAndViews(buf) {
          buffer = buf;
          Module["HEAP8"] = HEAP8 = new Int8Array(buf);
          Module["HEAP16"] = HEAP16 = new Int16Array(buf);
          Module["HEAP32"] = HEAP32 = new Int32Array(buf);
          Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
          Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
          Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
          Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
          Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
        }
        var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 52428800;
        var wasmTable;
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        function keepRuntimeAlive() {
          return noExitRuntime;
        }
        function preRun() {
          if (Module["preRun"]) {
            if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
            while (Module["preRun"].length) {
              addOnPreRun(Module["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          runtimeInitialized = true;
          callRuntimeCallbacks(__ATINIT__);
        }
        function postRun() {
          if (Module["postRun"]) {
            if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
            while (Module["postRun"].length) {
              addOnPostRun(Module["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
          __ATINIT__.unshift(cb);
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function addRunDependency(id) {
          runDependencies++;
          if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
          }
        }
        function removeRunDependency(id) {
          runDependencies--;
          if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
          }
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        function abort(what) {
          if (Module["onAbort"]) {
            Module["onAbort"](what);
          }
          what = "Aborted(" + what + ")";
          err(what);
          ABORT = true;
          EXITSTATUS = 1;
          what += ". Build with -sASSERTIONS for more info.";
          var e = new WebAssembly.RuntimeError(what);
          readyPromiseReject(e);
          throw e;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) {
          return filename.startsWith(dataURIPrefix);
        }
        function isFileURI(filename) {
          return filename.startsWith("file://");
        }
        var wasmBinaryFile;
        wasmBinaryFile = "openjpegwasm_decode.wasm";
        if (!isDataURI(wasmBinaryFile)) {
          wasmBinaryFile = locateFile(wasmBinaryFile);
        }
        function getBinary(file) {
          try {
            if (file == wasmBinaryFile && wasmBinary) {
              return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
              return readBinary(file);
            }
            throw "both async and sync fetching of the wasm failed";
          } catch (err2) {
            abort(err2);
          }
        }
        function getBinaryPromise() {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
            if (typeof fetch == "function" && !isFileURI(wasmBinaryFile)) {
              return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
                if (!response["ok"]) {
                  throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
                }
                return response["arrayBuffer"]();
              }).catch(function() {
                return getBinary(wasmBinaryFile);
              });
            } else {
              if (readAsync) {
                return new Promise(function(resolve, reject) {
                  readAsync(wasmBinaryFile, function(response) {
                    resolve(new Uint8Array(response));
                  }, reject);
                });
              }
            }
          }
          return Promise.resolve().then(function() {
            return getBinary(wasmBinaryFile);
          });
        }
        function createWasm() {
          var info = { "a": asmLibraryArg };
          function receiveInstance(instance, module2) {
            var exports3 = instance.exports;
            Module["asm"] = exports3;
            wasmMemory = Module["asm"]["E"];
            updateGlobalBufferAndViews(wasmMemory.buffer);
            wasmTable = Module["asm"]["G"];
            addOnInit(Module["asm"]["F"]);
            removeRunDependency("wasm-instantiate");
          }
          addRunDependency("wasm-instantiate");
          function receiveInstantiationResult(result) {
            receiveInstance(result["instance"]);
          }
          function instantiateArrayBuffer(receiver) {
            return getBinaryPromise().then(function(binary) {
              return WebAssembly.instantiate(binary, info);
            }).then(function(instance) {
              return instance;
            }).then(receiver, function(reason) {
              err("failed to asynchronously prepare wasm: " + reason);
              abort(reason);
            });
          }
          function instantiateAsync() {
            if (!wasmBinary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(wasmBinaryFile) && !isFileURI(wasmBinaryFile) && !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
              return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
                var result = WebAssembly.instantiateStreaming(response, info);
                return result.then(receiveInstantiationResult, function(reason) {
                  err("wasm streaming compile failed: " + reason);
                  err("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(receiveInstantiationResult);
                });
              });
            } else {
              return instantiateArrayBuffer(receiveInstantiationResult);
            }
          }
          if (Module["instantiateWasm"]) {
            try {
              var exports2 = Module["instantiateWasm"](info, receiveInstance);
              return exports2;
            } catch (e) {
              err("Module.instantiateWasm callback failed with error: " + e);
              readyPromiseReject(e);
            }
          }
          instantiateAsync().catch(readyPromiseReject);
          return {};
        }
        function ExitStatus(status) {
          this.name = "ExitStatus";
          this.message = "Program terminated with exit(" + status + ")";
          this.status = status;
        }
        function callRuntimeCallbacks(callbacks) {
          while (callbacks.length > 0) {
            callbacks.shift()(Module);
          }
        }
        function ExceptionInfo(excPtr) {
          this.excPtr = excPtr;
          this.ptr = excPtr - 24;
          this.set_type = function(type) {
            HEAPU32[this.ptr + 4 >> 2] = type;
          };
          this.get_type = function() {
            return HEAPU32[this.ptr + 4 >> 2];
          };
          this.set_destructor = function(destructor) {
            HEAPU32[this.ptr + 8 >> 2] = destructor;
          };
          this.get_destructor = function() {
            return HEAPU32[this.ptr + 8 >> 2];
          };
          this.set_refcount = function(refcount) {
            HEAP32[this.ptr >> 2] = refcount;
          };
          this.set_caught = function(caught) {
            caught = caught ? 1 : 0;
            HEAP8[this.ptr + 12 >> 0] = caught;
          };
          this.get_caught = function() {
            return HEAP8[this.ptr + 12 >> 0] != 0;
          };
          this.set_rethrown = function(rethrown) {
            rethrown = rethrown ? 1 : 0;
            HEAP8[this.ptr + 13 >> 0] = rethrown;
          };
          this.get_rethrown = function() {
            return HEAP8[this.ptr + 13 >> 0] != 0;
          };
          this.init = function(type, destructor) {
            this.set_adjusted_ptr(0);
            this.set_type(type);
            this.set_destructor(destructor);
            this.set_refcount(0);
            this.set_caught(false);
            this.set_rethrown(false);
          };
          this.add_ref = function() {
            var value = HEAP32[this.ptr >> 2];
            HEAP32[this.ptr >> 2] = value + 1;
          };
          this.release_ref = function() {
            var prev = HEAP32[this.ptr >> 2];
            HEAP32[this.ptr >> 2] = prev - 1;
            return prev === 1;
          };
          this.set_adjusted_ptr = function(adjustedPtr) {
            HEAPU32[this.ptr + 16 >> 2] = adjustedPtr;
          };
          this.get_adjusted_ptr = function() {
            return HEAPU32[this.ptr + 16 >> 2];
          };
          this.get_exception_ptr = function() {
            var isPointer = ___cxa_is_pointer_type(this.get_type());
            if (isPointer) {
              return HEAPU32[this.excPtr >> 2];
            }
            var adjusted = this.get_adjusted_ptr();
            if (adjusted !== 0) return adjusted;
            return this.excPtr;
          };
        }
        var exceptionLast = 0;
        var uncaughtExceptionCount = 0;
        function ___cxa_throw(ptr, type, destructor) {
          var info = new ExceptionInfo(ptr);
          info.init(type, destructor);
          exceptionLast = ptr;
          uncaughtExceptionCount++;
          throw ptr;
        }
        var structRegistrations = {};
        function runDestructors(destructors) {
          while (destructors.length) {
            var ptr = destructors.pop();
            var del = destructors.pop();
            del(ptr);
          }
        }
        function simpleReadValueFromPointer(pointer) {
          return this["fromWireType"](HEAP32[pointer >> 2]);
        }
        var awaitingDependencies = {};
        var registeredTypes = {};
        var typeDependencies = {};
        var char_0 = 48;
        var char_9 = 57;
        function makeLegalFunctionName(name) {
          if (void 0 === name) {
            return "_unknown";
          }
          name = name.replace(/[^a-zA-Z0-9_]/g, "$");
          var f = name.charCodeAt(0);
          if (f >= char_0 && f <= char_9) {
            return "_" + name;
          }
          return name;
        }
        function createNamedFunction(name, body) {
          name = makeLegalFunctionName(name);
          return new Function("body", "return function " + name + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(body);
        }
        function extendError(baseErrorType, errorName) {
          var errorClass = createNamedFunction(errorName, function(message) {
            this.name = errorName;
            this.message = message;
            var stack = new Error(message).stack;
            if (stack !== void 0) {
              this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "");
            }
          });
          errorClass.prototype = Object.create(baseErrorType.prototype);
          errorClass.prototype.constructor = errorClass;
          errorClass.prototype.toString = function() {
            if (this.message === void 0) {
              return this.name;
            } else {
              return this.name + ": " + this.message;
            }
          };
          return errorClass;
        }
        var InternalError = void 0;
        function throwInternalError(message) {
          throw new InternalError(message);
        }
        function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
          myTypes.forEach(function(type) {
            typeDependencies[type] = dependentTypes;
          });
          function onComplete(typeConverters2) {
            var myTypeConverters = getTypeConverters(typeConverters2);
            if (myTypeConverters.length !== myTypes.length) {
              throwInternalError("Mismatched type converter count");
            }
            for (var i = 0; i < myTypes.length; ++i) {
              registerType(myTypes[i], myTypeConverters[i]);
            }
          }
          var typeConverters = new Array(dependentTypes.length);
          var unregisteredTypes = [];
          var registered = 0;
          dependentTypes.forEach((dt, i) => {
            if (registeredTypes.hasOwnProperty(dt)) {
              typeConverters[i] = registeredTypes[dt];
            } else {
              unregisteredTypes.push(dt);
              if (!awaitingDependencies.hasOwnProperty(dt)) {
                awaitingDependencies[dt] = [];
              }
              awaitingDependencies[dt].push(() => {
                typeConverters[i] = registeredTypes[dt];
                ++registered;
                if (registered === unregisteredTypes.length) {
                  onComplete(typeConverters);
                }
              });
            }
          });
          if (0 === unregisteredTypes.length) {
            onComplete(typeConverters);
          }
        }
        function __embind_finalize_value_object(structType) {
          var reg = structRegistrations[structType];
          delete structRegistrations[structType];
          var rawConstructor = reg.rawConstructor;
          var rawDestructor = reg.rawDestructor;
          var fieldRecords = reg.fields;
          var fieldTypes = fieldRecords.map((field) => field.getterReturnType).concat(fieldRecords.map((field) => field.setterArgumentType));
          whenDependentTypesAreResolved([structType], fieldTypes, (fieldTypes2) => {
            var fields = {};
            fieldRecords.forEach((field, i) => {
              var fieldName = field.fieldName;
              var getterReturnType = fieldTypes2[i];
              var getter = field.getter;
              var getterContext = field.getterContext;
              var setterArgumentType = fieldTypes2[i + fieldRecords.length];
              var setter = field.setter;
              var setterContext = field.setterContext;
              fields[fieldName] = { read: (ptr) => {
                return getterReturnType["fromWireType"](getter(getterContext, ptr));
              }, write: (ptr, o) => {
                var destructors = [];
                setter(setterContext, ptr, setterArgumentType["toWireType"](destructors, o));
                runDestructors(destructors);
              } };
            });
            return [{ name: reg.name, "fromWireType": function(ptr) {
              var rv = {};
              for (var i in fields) {
                rv[i] = fields[i].read(ptr);
              }
              rawDestructor(ptr);
              return rv;
            }, "toWireType": function(destructors, o) {
              for (var fieldName in fields) {
                if (!(fieldName in o)) {
                  throw new TypeError('Missing field:  "' + fieldName + '"');
                }
              }
              var ptr = rawConstructor();
              for (fieldName in fields) {
                fields[fieldName].write(ptr, o[fieldName]);
              }
              if (destructors !== null) {
                destructors.push(rawDestructor, ptr);
              }
              return ptr;
            }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: rawDestructor }];
          });
        }
        function __embind_register_bigint(primitiveType, name, size, minRange, maxRange) {
        }
        function getShiftFromSize(size) {
          switch (size) {
            case 1:
              return 0;
            case 2:
              return 1;
            case 4:
              return 2;
            case 8:
              return 3;
            default:
              throw new TypeError("Unknown type size: " + size);
          }
        }
        function embind_init_charCodes() {
          var codes = new Array(256);
          for (var i = 0; i < 256; ++i) {
            codes[i] = String.fromCharCode(i);
          }
          embind_charCodes = codes;
        }
        var embind_charCodes = void 0;
        function readLatin1String(ptr) {
          var ret = "";
          var c = ptr;
          while (HEAPU8[c]) {
            ret += embind_charCodes[HEAPU8[c++]];
          }
          return ret;
        }
        var BindingError = void 0;
        function throwBindingError(message) {
          throw new BindingError(message);
        }
        function registerType(rawType, registeredInstance, options2 = {}) {
          if (!("argPackAdvance" in registeredInstance)) {
            throw new TypeError("registerType registeredInstance requires argPackAdvance");
          }
          var name = registeredInstance.name;
          if (!rawType) {
            throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
          }
          if (registeredTypes.hasOwnProperty(rawType)) {
            if (options2.ignoreDuplicateRegistrations) {
              return;
            } else {
              throwBindingError("Cannot register type '" + name + "' twice");
            }
          }
          registeredTypes[rawType] = registeredInstance;
          delete typeDependencies[rawType];
          if (awaitingDependencies.hasOwnProperty(rawType)) {
            var callbacks = awaitingDependencies[rawType];
            delete awaitingDependencies[rawType];
            callbacks.forEach((cb) => cb());
          }
        }
        function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, { name, "fromWireType": function(wt) {
            return !!wt;
          }, "toWireType": function(destructors, o) {
            return o ? trueValue : falseValue;
          }, "argPackAdvance": 8, "readValueFromPointer": function(pointer) {
            var heap;
            if (size === 1) {
              heap = HEAP8;
            } else if (size === 2) {
              heap = HEAP16;
            } else if (size === 4) {
              heap = HEAP32;
            } else {
              throw new TypeError("Unknown boolean type size: " + name);
            }
            return this["fromWireType"](heap[pointer >> shift]);
          }, destructorFunction: null });
        }
        function ClassHandle_isAliasOf(other) {
          if (!(this instanceof ClassHandle)) {
            return false;
          }
          if (!(other instanceof ClassHandle)) {
            return false;
          }
          var leftClass = this.$$.ptrType.registeredClass;
          var left = this.$$.ptr;
          var rightClass = other.$$.ptrType.registeredClass;
          var right = other.$$.ptr;
          while (leftClass.baseClass) {
            left = leftClass.upcast(left);
            leftClass = leftClass.baseClass;
          }
          while (rightClass.baseClass) {
            right = rightClass.upcast(right);
            rightClass = rightClass.baseClass;
          }
          return leftClass === rightClass && left === right;
        }
        function shallowCopyInternalPointer(o) {
          return { count: o.count, deleteScheduled: o.deleteScheduled, preservePointerOnDelete: o.preservePointerOnDelete, ptr: o.ptr, ptrType: o.ptrType, smartPtr: o.smartPtr, smartPtrType: o.smartPtrType };
        }
        function throwInstanceAlreadyDeleted(obj2) {
          function getInstanceTypeName(handle) {
            return handle.$$.ptrType.registeredClass.name;
          }
          throwBindingError(getInstanceTypeName(obj2) + " instance already deleted");
        }
        var finalizationRegistry = false;
        function detachFinalizer(handle) {
        }
        function runDestructor($$) {
          if ($$.smartPtr) {
            $$.smartPtrType.rawDestructor($$.smartPtr);
          } else {
            $$.ptrType.registeredClass.rawDestructor($$.ptr);
          }
        }
        function releaseClassHandle($$) {
          $$.count.value -= 1;
          var toDelete = 0 === $$.count.value;
          if (toDelete) {
            runDestructor($$);
          }
        }
        function downcastPointer(ptr, ptrClass, desiredClass) {
          if (ptrClass === desiredClass) {
            return ptr;
          }
          if (void 0 === desiredClass.baseClass) {
            return null;
          }
          var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
          if (rv === null) {
            return null;
          }
          return desiredClass.downcast(rv);
        }
        var registeredPointers = {};
        function getInheritedInstanceCount() {
          return Object.keys(registeredInstances).length;
        }
        function getLiveInheritedInstances() {
          var rv = [];
          for (var k in registeredInstances) {
            if (registeredInstances.hasOwnProperty(k)) {
              rv.push(registeredInstances[k]);
            }
          }
          return rv;
        }
        var deletionQueue = [];
        function flushPendingDeletes() {
          while (deletionQueue.length) {
            var obj2 = deletionQueue.pop();
            obj2.$$.deleteScheduled = false;
            obj2["delete"]();
          }
        }
        var delayFunction = void 0;
        function setDelayFunction(fn) {
          delayFunction = fn;
          if (deletionQueue.length && delayFunction) {
            delayFunction(flushPendingDeletes);
          }
        }
        function init_embind() {
          Module["getInheritedInstanceCount"] = getInheritedInstanceCount;
          Module["getLiveInheritedInstances"] = getLiveInheritedInstances;
          Module["flushPendingDeletes"] = flushPendingDeletes;
          Module["setDelayFunction"] = setDelayFunction;
        }
        var registeredInstances = {};
        function getBasestPointer(class_, ptr) {
          if (ptr === void 0) {
            throwBindingError("ptr should not be undefined");
          }
          while (class_.baseClass) {
            ptr = class_.upcast(ptr);
            class_ = class_.baseClass;
          }
          return ptr;
        }
        function getInheritedInstance(class_, ptr) {
          ptr = getBasestPointer(class_, ptr);
          return registeredInstances[ptr];
        }
        function makeClassHandle(prototype, record) {
          if (!record.ptrType || !record.ptr) {
            throwInternalError("makeClassHandle requires ptr and ptrType");
          }
          var hasSmartPtrType = !!record.smartPtrType;
          var hasSmartPtr = !!record.smartPtr;
          if (hasSmartPtrType !== hasSmartPtr) {
            throwInternalError("Both smartPtrType and smartPtr must be specified");
          }
          record.count = { value: 1 };
          return attachFinalizer(Object.create(prototype, { $$: { value: record } }));
        }
        function RegisteredPointer_fromWireType(ptr) {
          var rawPointer = this.getPointee(ptr);
          if (!rawPointer) {
            this.destructor(ptr);
            return null;
          }
          var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
          if (void 0 !== registeredInstance) {
            if (0 === registeredInstance.$$.count.value) {
              registeredInstance.$$.ptr = rawPointer;
              registeredInstance.$$.smartPtr = ptr;
              return registeredInstance["clone"]();
            } else {
              var rv = registeredInstance["clone"]();
              this.destructor(ptr);
              return rv;
            }
          }
          function makeDefaultHandle() {
            if (this.isSmartPointer) {
              return makeClassHandle(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: rawPointer, smartPtrType: this, smartPtr: ptr });
            } else {
              return makeClassHandle(this.registeredClass.instancePrototype, { ptrType: this, ptr });
            }
          }
          var actualType = this.registeredClass.getActualType(rawPointer);
          var registeredPointerRecord = registeredPointers[actualType];
          if (!registeredPointerRecord) {
            return makeDefaultHandle.call(this);
          }
          var toType;
          if (this.isConst) {
            toType = registeredPointerRecord.constPointerType;
          } else {
            toType = registeredPointerRecord.pointerType;
          }
          var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass);
          if (dp === null) {
            return makeDefaultHandle.call(this);
          }
          if (this.isSmartPointer) {
            return makeClassHandle(toType.registeredClass.instancePrototype, { ptrType: toType, ptr: dp, smartPtrType: this, smartPtr: ptr });
          } else {
            return makeClassHandle(toType.registeredClass.instancePrototype, { ptrType: toType, ptr: dp });
          }
        }
        function attachFinalizer(handle) {
          if ("undefined" === typeof FinalizationRegistry) {
            attachFinalizer = (handle2) => handle2;
            return handle;
          }
          finalizationRegistry = new FinalizationRegistry((info) => {
            releaseClassHandle(info.$$);
          });
          attachFinalizer = (handle2) => {
            var $$ = handle2.$$;
            var hasSmartPtr = !!$$.smartPtr;
            if (hasSmartPtr) {
              var info = { $$ };
              finalizationRegistry.register(handle2, info, handle2);
            }
            return handle2;
          };
          detachFinalizer = (handle2) => finalizationRegistry.unregister(handle2);
          return attachFinalizer(handle);
        }
        function ClassHandle_clone() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.preservePointerOnDelete) {
            this.$$.count.value += 1;
            return this;
          } else {
            var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), { $$: { value: shallowCopyInternalPointer(this.$$) } }));
            clone.$$.count.value += 1;
            clone.$$.deleteScheduled = false;
            return clone;
          }
        }
        function ClassHandle_delete() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
            throwBindingError("Object already scheduled for deletion");
          }
          detachFinalizer(this);
          releaseClassHandle(this.$$);
          if (!this.$$.preservePointerOnDelete) {
            this.$$.smartPtr = void 0;
            this.$$.ptr = void 0;
          }
        }
        function ClassHandle_isDeleted() {
          return !this.$$.ptr;
        }
        function ClassHandle_deleteLater() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
            throwBindingError("Object already scheduled for deletion");
          }
          deletionQueue.push(this);
          if (deletionQueue.length === 1 && delayFunction) {
            delayFunction(flushPendingDeletes);
          }
          this.$$.deleteScheduled = true;
          return this;
        }
        function init_ClassHandle() {
          ClassHandle.prototype["isAliasOf"] = ClassHandle_isAliasOf;
          ClassHandle.prototype["clone"] = ClassHandle_clone;
          ClassHandle.prototype["delete"] = ClassHandle_delete;
          ClassHandle.prototype["isDeleted"] = ClassHandle_isDeleted;
          ClassHandle.prototype["deleteLater"] = ClassHandle_deleteLater;
        }
        function ClassHandle() {
        }
        function ensureOverloadTable(proto, methodName, humanName) {
          if (void 0 === proto[methodName].overloadTable) {
            var prevFunc = proto[methodName];
            proto[methodName] = function() {
              if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
                throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
              }
              return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
            };
            proto[methodName].overloadTable = [];
            proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
          }
        }
        function exposePublicSymbol(name, value, numArguments) {
          if (Module.hasOwnProperty(name)) {
            if (void 0 === numArguments || void 0 !== Module[name].overloadTable && void 0 !== Module[name].overloadTable[numArguments]) {
              throwBindingError("Cannot register public name '" + name + "' twice");
            }
            ensureOverloadTable(Module, name, name);
            if (Module.hasOwnProperty(numArguments)) {
              throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
            }
            Module[name].overloadTable[numArguments] = value;
          } else {
            Module[name] = value;
            if (void 0 !== numArguments) {
              Module[name].numArguments = numArguments;
            }
          }
        }
        function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
          this.name = name;
          this.constructor = constructor;
          this.instancePrototype = instancePrototype;
          this.rawDestructor = rawDestructor;
          this.baseClass = baseClass;
          this.getActualType = getActualType;
          this.upcast = upcast;
          this.downcast = downcast;
          this.pureVirtualFunctions = [];
        }
        function upcastPointer(ptr, ptrClass, desiredClass) {
          while (ptrClass !== desiredClass) {
            if (!ptrClass.upcast) {
              throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name);
            }
            ptr = ptrClass.upcast(ptr);
            ptrClass = ptrClass.baseClass;
          }
          return ptr;
        }
        function constNoSmartPtrRawPointerToWireType(destructors, handle) {
          if (handle === null) {
            if (this.isReference) {
              throwBindingError("null is not a valid " + this.name);
            }
            return 0;
          }
          if (!handle.$$) {
            throwBindingError('Cannot pass "' + embindRepr(handle) + '" as a ' + this.name);
          }
          if (!handle.$$.ptr) {
            throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
          }
          var handleClass = handle.$$.ptrType.registeredClass;
          var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
          return ptr;
        }
        function genericPointerToWireType(destructors, handle) {
          var ptr;
          if (handle === null) {
            if (this.isReference) {
              throwBindingError("null is not a valid " + this.name);
            }
            if (this.isSmartPointer) {
              ptr = this.rawConstructor();
              if (destructors !== null) {
                destructors.push(this.rawDestructor, ptr);
              }
              return ptr;
            } else {
              return 0;
            }
          }
          if (!handle.$$) {
            throwBindingError('Cannot pass "' + embindRepr(handle) + '" as a ' + this.name);
          }
          if (!handle.$$.ptr) {
            throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
          }
          if (!this.isConst && handle.$$.ptrType.isConst) {
            throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
          }
          var handleClass = handle.$$.ptrType.registeredClass;
          ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
          if (this.isSmartPointer) {
            if (void 0 === handle.$$.smartPtr) {
              throwBindingError("Passing raw pointer to smart pointer is illegal");
            }
            switch (this.sharingPolicy) {
              case 0:
                if (handle.$$.smartPtrType === this) {
                  ptr = handle.$$.smartPtr;
                } else {
                  throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
                }
                break;
              case 1:
                ptr = handle.$$.smartPtr;
                break;
              case 2:
                if (handle.$$.smartPtrType === this) {
                  ptr = handle.$$.smartPtr;
                } else {
                  var clonedHandle = handle["clone"]();
                  ptr = this.rawShare(ptr, Emval.toHandle(function() {
                    clonedHandle["delete"]();
                  }));
                  if (destructors !== null) {
                    destructors.push(this.rawDestructor, ptr);
                  }
                }
                break;
              default:
                throwBindingError("Unsupporting sharing policy");
            }
          }
          return ptr;
        }
        function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
          if (handle === null) {
            if (this.isReference) {
              throwBindingError("null is not a valid " + this.name);
            }
            return 0;
          }
          if (!handle.$$) {
            throwBindingError('Cannot pass "' + embindRepr(handle) + '" as a ' + this.name);
          }
          if (!handle.$$.ptr) {
            throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
          }
          if (handle.$$.ptrType.isConst) {
            throwBindingError("Cannot convert argument of type " + handle.$$.ptrType.name + " to parameter type " + this.name);
          }
          var handleClass = handle.$$.ptrType.registeredClass;
          var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
          return ptr;
        }
        function RegisteredPointer_getPointee(ptr) {
          if (this.rawGetPointee) {
            ptr = this.rawGetPointee(ptr);
          }
          return ptr;
        }
        function RegisteredPointer_destructor(ptr) {
          if (this.rawDestructor) {
            this.rawDestructor(ptr);
          }
        }
        function RegisteredPointer_deleteObject(handle) {
          if (handle !== null) {
            handle["delete"]();
          }
        }
        function init_RegisteredPointer() {
          RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
          RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
          RegisteredPointer.prototype["argPackAdvance"] = 8;
          RegisteredPointer.prototype["readValueFromPointer"] = simpleReadValueFromPointer;
          RegisteredPointer.prototype["deleteObject"] = RegisteredPointer_deleteObject;
          RegisteredPointer.prototype["fromWireType"] = RegisteredPointer_fromWireType;
        }
        function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
          this.name = name;
          this.registeredClass = registeredClass;
          this.isReference = isReference;
          this.isConst = isConst;
          this.isSmartPointer = isSmartPointer;
          this.pointeeType = pointeeType;
          this.sharingPolicy = sharingPolicy;
          this.rawGetPointee = rawGetPointee;
          this.rawConstructor = rawConstructor;
          this.rawShare = rawShare;
          this.rawDestructor = rawDestructor;
          if (!isSmartPointer && registeredClass.baseClass === void 0) {
            if (isConst) {
              this["toWireType"] = constNoSmartPtrRawPointerToWireType;
              this.destructorFunction = null;
            } else {
              this["toWireType"] = nonConstNoSmartPtrRawPointerToWireType;
              this.destructorFunction = null;
            }
          } else {
            this["toWireType"] = genericPointerToWireType;
          }
        }
        function replacePublicSymbol(name, value, numArguments) {
          if (!Module.hasOwnProperty(name)) {
            throwInternalError("Replacing nonexistant public symbol");
          }
          if (void 0 !== Module[name].overloadTable && void 0 !== numArguments) {
            Module[name].overloadTable[numArguments] = value;
          } else {
            Module[name] = value;
            Module[name].argCount = numArguments;
          }
        }
        function dynCallLegacy(sig, ptr, args) {
          var f = Module["dynCall_" + sig];
          return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr);
        }
        var wasmTableMirror = [];
        function getWasmTableEntry(funcPtr) {
          var func = wasmTableMirror[funcPtr];
          if (!func) {
            if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
            wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
          }
          return func;
        }
        function dynCall(sig, ptr, args) {
          if (sig.includes("j")) {
            return dynCallLegacy(sig, ptr, args);
          }
          var rtn = getWasmTableEntry(ptr).apply(null, args);
          return rtn;
        }
        function getDynCaller(sig, ptr) {
          var argCache = [];
          return function() {
            argCache.length = 0;
            Object.assign(argCache, arguments);
            return dynCall(sig, ptr, argCache);
          };
        }
        function embind__requireFunction(signature, rawFunction) {
          signature = readLatin1String(signature);
          function makeDynCaller() {
            if (signature.includes("j")) {
              return getDynCaller(signature, rawFunction);
            }
            return getWasmTableEntry(rawFunction);
          }
          var fp = makeDynCaller();
          if (typeof fp != "function") {
            throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
          }
          return fp;
        }
        var UnboundTypeError = void 0;
        function getTypeName(type) {
          var ptr = ___getTypeName(type);
          var rv = readLatin1String(ptr);
          _free(ptr);
          return rv;
        }
        function throwUnboundTypeError(message, types) {
          var unboundTypes = [];
          var seen = {};
          function visit(type) {
            if (seen[type]) {
              return;
            }
            if (registeredTypes[type]) {
              return;
            }
            if (typeDependencies[type]) {
              typeDependencies[type].forEach(visit);
              return;
            }
            unboundTypes.push(type);
            seen[type] = true;
          }
          types.forEach(visit);
          throw new UnboundTypeError(message + ": " + unboundTypes.map(getTypeName).join([", "]));
        }
        function __embind_register_class(rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) {
          name = readLatin1String(name);
          getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
          if (upcast) {
            upcast = embind__requireFunction(upcastSignature, upcast);
          }
          if (downcast) {
            downcast = embind__requireFunction(downcastSignature, downcast);
          }
          rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
          var legalFunctionName = makeLegalFunctionName(name);
          exposePublicSymbol(legalFunctionName, function() {
            throwUnboundTypeError("Cannot construct " + name + " due to unbound types", [baseClassRawType]);
          });
          whenDependentTypesAreResolved([rawType, rawPointerType, rawConstPointerType], baseClassRawType ? [baseClassRawType] : [], function(base) {
            base = base[0];
            var baseClass;
            var basePrototype;
            if (baseClassRawType) {
              baseClass = base.registeredClass;
              basePrototype = baseClass.instancePrototype;
            } else {
              basePrototype = ClassHandle.prototype;
            }
            var constructor = createNamedFunction(legalFunctionName, function() {
              if (Object.getPrototypeOf(this) !== instancePrototype) {
                throw new BindingError("Use 'new' to construct " + name);
              }
              if (void 0 === registeredClass.constructor_body) {
                throw new BindingError(name + " has no accessible constructor");
              }
              var body = registeredClass.constructor_body[arguments.length];
              if (void 0 === body) {
                throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!");
              }
              return body.apply(this, arguments);
            });
            var instancePrototype = Object.create(basePrototype, { constructor: { value: constructor } });
            constructor.prototype = instancePrototype;
            var registeredClass = new RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast);
            var referenceConverter = new RegisteredPointer(name, registeredClass, true, false, false);
            var pointerConverter = new RegisteredPointer(name + "*", registeredClass, false, false, false);
            var constPointerConverter = new RegisteredPointer(name + " const*", registeredClass, false, true, false);
            registeredPointers[rawType] = { pointerType: pointerConverter, constPointerType: constPointerConverter };
            replacePublicSymbol(legalFunctionName, constructor);
            return [referenceConverter, pointerConverter, constPointerConverter];
          });
        }
        function heap32VectorToArray(count, firstElement) {
          var array = [];
          for (var i = 0; i < count; i++) {
            array.push(HEAPU32[firstElement + i * 4 >> 2]);
          }
          return array;
        }
        function new_(constructor, argumentList) {
          if (!(constructor instanceof Function)) {
            throw new TypeError("new_ called with constructor type " + typeof constructor + " which is not a function");
          }
          var dummy = createNamedFunction(constructor.name || "unknownFunctionName", function() {
          });
          dummy.prototype = constructor.prototype;
          var obj2 = new dummy();
          var r = constructor.apply(obj2, argumentList);
          return r instanceof Object ? r : obj2;
        }
        function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
          var argCount = argTypes.length;
          if (argCount < 2) {
            throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
          }
          var isClassMethodFunc = argTypes[1] !== null && classType !== null;
          var needsDestructorStack = false;
          for (var i = 1; i < argTypes.length; ++i) {
            if (argTypes[i] !== null && argTypes[i].destructorFunction === void 0) {
              needsDestructorStack = true;
              break;
            }
          }
          var returns = argTypes[0].name !== "void";
          var argsList = "";
          var argsListWired = "";
          for (var i = 0; i < argCount - 2; ++i) {
            argsList += (i !== 0 ? ", " : "") + "arg" + i;
            argsListWired += (i !== 0 ? ", " : "") + "arg" + i + "Wired";
          }
          var invokerFnBody = "return function " + makeLegalFunctionName(humanName) + "(" + argsList + ") {\nif (arguments.length !== " + (argCount - 2) + ") {\nthrowBindingError('function " + humanName + " called with ' + arguments.length + ' arguments, expected " + (argCount - 2) + " args!');\n}\n";
          if (needsDestructorStack) {
            invokerFnBody += "var destructors = [];\n";
          }
          var dtorStack = needsDestructorStack ? "destructors" : "null";
          var args1 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
          var args2 = [throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, argTypes[0], argTypes[1]];
          if (isClassMethodFunc) {
            invokerFnBody += "var thisWired = classParam.toWireType(" + dtorStack + ", this);\n";
          }
          for (var i = 0; i < argCount - 2; ++i) {
            invokerFnBody += "var arg" + i + "Wired = argType" + i + ".toWireType(" + dtorStack + ", arg" + i + "); // " + argTypes[i + 2].name + "\n";
            args1.push("argType" + i);
            args2.push(argTypes[i + 2]);
          }
          if (isClassMethodFunc) {
            argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired;
          }
          invokerFnBody += (returns ? "var rv = " : "") + "invoker(fn" + (argsListWired.length > 0 ? ", " : "") + argsListWired + ");\n";
          if (needsDestructorStack) {
            invokerFnBody += "runDestructors(destructors);\n";
          } else {
            for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
              var paramName = i === 1 ? "thisWired" : "arg" + (i - 2) + "Wired";
              if (argTypes[i].destructorFunction !== null) {
                invokerFnBody += paramName + "_dtor(" + paramName + "); // " + argTypes[i].name + "\n";
                args1.push(paramName + "_dtor");
                args2.push(argTypes[i].destructorFunction);
              }
            }
          }
          if (returns) {
            invokerFnBody += "var ret = retType.fromWireType(rv);\nreturn ret;\n";
          } else {
          }
          invokerFnBody += "}\n";
          args1.push(invokerFnBody);
          var invokerFunction = new_(Function, args1).apply(null, args2);
          return invokerFunction;
        }
        function __embind_register_class_constructor(rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) {
          assert(argCount > 0);
          var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
          invoker = embind__requireFunction(invokerSignature, invoker);
          whenDependentTypesAreResolved([], [rawClassType], function(classType) {
            classType = classType[0];
            var humanName = "constructor " + classType.name;
            if (void 0 === classType.registeredClass.constructor_body) {
              classType.registeredClass.constructor_body = [];
            }
            if (void 0 !== classType.registeredClass.constructor_body[argCount - 1]) {
              throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount - 1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
            }
            classType.registeredClass.constructor_body[argCount - 1] = () => {
              throwUnboundTypeError("Cannot construct " + classType.name + " due to unbound types", rawArgTypes);
            };
            whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
              argTypes.splice(1, 0, null);
              classType.registeredClass.constructor_body[argCount - 1] = craftInvokerFunction(humanName, argTypes, null, invoker, rawConstructor);
              return [];
            });
            return [];
          });
        }
        function __embind_register_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual) {
          var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
          methodName = readLatin1String(methodName);
          rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
          whenDependentTypesAreResolved([], [rawClassType], function(classType) {
            classType = classType[0];
            var humanName = classType.name + "." + methodName;
            if (methodName.startsWith("@@")) {
              methodName = Symbol[methodName.substring(2)];
            }
            if (isPureVirtual) {
              classType.registeredClass.pureVirtualFunctions.push(methodName);
            }
            function unboundTypesHandler() {
              throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes);
            }
            var proto = classType.registeredClass.instancePrototype;
            var method = proto[methodName];
            if (void 0 === method || void 0 === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2) {
              unboundTypesHandler.argCount = argCount - 2;
              unboundTypesHandler.className = classType.name;
              proto[methodName] = unboundTypesHandler;
            } else {
              ensureOverloadTable(proto, methodName, humanName);
              proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
            }
            whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
              var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);
              if (void 0 === proto[methodName].overloadTable) {
                memberFunction.argCount = argCount - 2;
                proto[methodName] = memberFunction;
              } else {
                proto[methodName].overloadTable[argCount - 2] = memberFunction;
              }
              return [];
            });
            return [];
          });
        }
        var emval_free_list = [];
        var emval_handle_array = [{}, { value: void 0 }, { value: null }, { value: true }, { value: false }];
        function __emval_decref(handle) {
          if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
            emval_handle_array[handle] = void 0;
            emval_free_list.push(handle);
          }
        }
        function count_emval_handles() {
          var count = 0;
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== void 0) {
              ++count;
            }
          }
          return count;
        }
        function get_first_emval() {
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== void 0) {
              return emval_handle_array[i];
            }
          }
          return null;
        }
        function init_emval() {
          Module["count_emval_handles"] = count_emval_handles;
          Module["get_first_emval"] = get_first_emval;
        }
        var Emval = { toValue: (handle) => {
          if (!handle) {
            throwBindingError("Cannot use deleted val. handle = " + handle);
          }
          return emval_handle_array[handle].value;
        }, toHandle: (value) => {
          switch (value) {
            case void 0:
              return 1;
            case null:
              return 2;
            case true:
              return 3;
            case false:
              return 4;
            default: {
              var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
              emval_handle_array[handle] = { refcount: 1, value };
              return handle;
            }
          }
        } };
        function __embind_register_emval(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, { name, "fromWireType": function(handle) {
            var rv = Emval.toValue(handle);
            __emval_decref(handle);
            return rv;
          }, "toWireType": function(destructors, value) {
            return Emval.toHandle(value);
          }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: null });
        }
        function embindRepr(v) {
          if (v === null) {
            return "null";
          }
          var t = typeof v;
          if (t === "object" || t === "array" || t === "function") {
            return v.toString();
          } else {
            return "" + v;
          }
        }
        function floatReadValueFromPointer(name, shift) {
          switch (shift) {
            case 2:
              return function(pointer) {
                return this["fromWireType"](HEAPF32[pointer >> 2]);
              };
            case 3:
              return function(pointer) {
                return this["fromWireType"](HEAPF64[pointer >> 3]);
              };
            default:
              throw new TypeError("Unknown float type: " + name);
          }
        }
        function __embind_register_float(rawType, name, size) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, { name, "fromWireType": function(value) {
            return value;
          }, "toWireType": function(destructors, value) {
            return value;
          }, "argPackAdvance": 8, "readValueFromPointer": floatReadValueFromPointer(name, shift), destructorFunction: null });
        }
        function integerReadValueFromPointer(name, shift, signed) {
          switch (shift) {
            case 0:
              return signed ? function readS8FromPointer(pointer) {
                return HEAP8[pointer];
              } : function readU8FromPointer(pointer) {
                return HEAPU8[pointer];
              };
            case 1:
              return signed ? function readS16FromPointer(pointer) {
                return HEAP16[pointer >> 1];
              } : function readU16FromPointer(pointer) {
                return HEAPU16[pointer >> 1];
              };
            case 2:
              return signed ? function readS32FromPointer(pointer) {
                return HEAP32[pointer >> 2];
              } : function readU32FromPointer(pointer) {
                return HEAPU32[pointer >> 2];
              };
            default:
              throw new TypeError("Unknown integer type: " + name);
          }
        }
        function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
          name = readLatin1String(name);
          if (maxRange === -1) {
            maxRange = 4294967295;
          }
          var shift = getShiftFromSize(size);
          var fromWireType = (value) => value;
          if (minRange === 0) {
            var bitshift = 32 - 8 * size;
            fromWireType = (value) => value << bitshift >>> bitshift;
          }
          var isUnsignedType = name.includes("unsigned");
          var checkAssertions = (value, toTypeName) => {
          };
          var toWireType;
          if (isUnsignedType) {
            toWireType = function(destructors, value) {
              checkAssertions(value, this.name);
              return value >>> 0;
            };
          } else {
            toWireType = function(destructors, value) {
              checkAssertions(value, this.name);
              return value;
            };
          }
          registerType(primitiveType, { name, "fromWireType": fromWireType, "toWireType": toWireType, "argPackAdvance": 8, "readValueFromPointer": integerReadValueFromPointer(name, shift, minRange !== 0), destructorFunction: null });
        }
        function __embind_register_memory_view(rawType, dataTypeIndex, name) {
          var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
          var TA = typeMapping[dataTypeIndex];
          function decodeMemoryView(handle) {
            handle = handle >> 2;
            var heap = HEAPU32;
            var size = heap[handle];
            var data = heap[handle + 1];
            return new TA(buffer, data, size);
          }
          name = readLatin1String(name);
          registerType(rawType, { name, "fromWireType": decodeMemoryView, "argPackAdvance": 8, "readValueFromPointer": decodeMemoryView }, { ignoreDuplicateRegistrations: true });
        }
        function __embind_register_std_string(rawType, name) {
          name = readLatin1String(name);
          var stdStringIsUTF8 = name === "std::string";
          registerType(rawType, { name, "fromWireType": function(value) {
            var length = HEAPU32[value >> 2];
            var payload = value + 4;
            var str;
            if (stdStringIsUTF8) {
              var decodeStartPtr = payload;
              for (var i = 0; i <= length; ++i) {
                var currentBytePtr = payload + i;
                if (i == length || HEAPU8[currentBytePtr] == 0) {
                  var maxRead = currentBytePtr - decodeStartPtr;
                  var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                  if (str === void 0) {
                    str = stringSegment;
                  } else {
                    str += String.fromCharCode(0);
                    str += stringSegment;
                  }
                  decodeStartPtr = currentBytePtr + 1;
                }
              }
            } else {
              var a = new Array(length);
              for (var i = 0; i < length; ++i) {
                a[i] = String.fromCharCode(HEAPU8[payload + i]);
              }
              str = a.join("");
            }
            _free(value);
            return str;
          }, "toWireType": function(destructors, value) {
            if (value instanceof ArrayBuffer) {
              value = new Uint8Array(value);
            }
            var length;
            var valueIsOfTypeString = typeof value == "string";
            if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
              throwBindingError("Cannot pass non-string to std::string");
            }
            if (stdStringIsUTF8 && valueIsOfTypeString) {
              length = lengthBytesUTF8(value);
            } else {
              length = value.length;
            }
            var base = _malloc(4 + length + 1);
            var ptr = base + 4;
            HEAPU32[base >> 2] = length;
            if (stdStringIsUTF8 && valueIsOfTypeString) {
              stringToUTF8(value, ptr, length + 1);
            } else {
              if (valueIsOfTypeString) {
                for (var i = 0; i < length; ++i) {
                  var charCode = value.charCodeAt(i);
                  if (charCode > 255) {
                    _free(ptr);
                    throwBindingError("String has UTF-16 code units that do not fit in 8 bits");
                  }
                  HEAPU8[ptr + i] = charCode;
                }
              } else {
                for (var i = 0; i < length; ++i) {
                  HEAPU8[ptr + i] = value[i];
                }
              }
            }
            if (destructors !== null) {
              destructors.push(_free, base);
            }
            return base;
          }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: function(ptr) {
            _free(ptr);
          } });
        }
        var UTF16Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : void 0;
        function UTF16ToString(ptr, maxBytesToRead) {
          var endPtr = ptr;
          var idx = endPtr >> 1;
          var maxIdx = idx + maxBytesToRead / 2;
          while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
          endPtr = idx << 1;
          if (endPtr - ptr > 32 && UTF16Decoder) return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
          var str = "";
          for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
            var codeUnit = HEAP16[ptr + i * 2 >> 1];
            if (codeUnit == 0) break;
            str += String.fromCharCode(codeUnit);
          }
          return str;
        }
        function stringToUTF16(str, outPtr, maxBytesToWrite) {
          if (maxBytesToWrite === void 0) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 2) return 0;
          maxBytesToWrite -= 2;
          var startPtr = outPtr;
          var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
          for (var i = 0; i < numCharsToWrite; ++i) {
            var codeUnit = str.charCodeAt(i);
            HEAP16[outPtr >> 1] = codeUnit;
            outPtr += 2;
          }
          HEAP16[outPtr >> 1] = 0;
          return outPtr - startPtr;
        }
        function lengthBytesUTF16(str) {
          return str.length * 2;
        }
        function UTF32ToString(ptr, maxBytesToRead) {
          var i = 0;
          var str = "";
          while (!(i >= maxBytesToRead / 4)) {
            var utf32 = HEAP32[ptr + i * 4 >> 2];
            if (utf32 == 0) break;
            ++i;
            if (utf32 >= 65536) {
              var ch = utf32 - 65536;
              str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            } else {
              str += String.fromCharCode(utf32);
            }
          }
          return str;
        }
        function stringToUTF32(str, outPtr, maxBytesToWrite) {
          if (maxBytesToWrite === void 0) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 4) return 0;
          var startPtr = outPtr;
          var endPtr = startPtr + maxBytesToWrite - 4;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) {
              var trailSurrogate = str.charCodeAt(++i);
              codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
            }
            HEAP32[outPtr >> 2] = codeUnit;
            outPtr += 4;
            if (outPtr + 4 > endPtr) break;
          }
          HEAP32[outPtr >> 2] = 0;
          return outPtr - startPtr;
        }
        function lengthBytesUTF32(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
            len += 4;
          }
          return len;
        }
        function __embind_register_std_wstring(rawType, charSize, name) {
          name = readLatin1String(name);
          var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
          if (charSize === 2) {
            decodeString = UTF16ToString;
            encodeString = stringToUTF16;
            lengthBytesUTF = lengthBytesUTF16;
            getHeap = () => HEAPU16;
            shift = 1;
          } else if (charSize === 4) {
            decodeString = UTF32ToString;
            encodeString = stringToUTF32;
            lengthBytesUTF = lengthBytesUTF32;
            getHeap = () => HEAPU32;
            shift = 2;
          }
          registerType(rawType, { name, "fromWireType": function(value) {
            var length = HEAPU32[value >> 2];
            var HEAP = getHeap();
            var str;
            var decodeStartPtr = value + 4;
            for (var i = 0; i <= length; ++i) {
              var currentBytePtr = value + 4 + i * charSize;
              if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                var maxReadBytes = currentBytePtr - decodeStartPtr;
                var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
                if (str === void 0) {
                  str = stringSegment;
                } else {
                  str += String.fromCharCode(0);
                  str += stringSegment;
                }
                decodeStartPtr = currentBytePtr + charSize;
              }
            }
            _free(value);
            return str;
          }, "toWireType": function(destructors, value) {
            if (!(typeof value == "string")) {
              throwBindingError("Cannot pass non-string to C++ string type " + name);
            }
            var length = lengthBytesUTF(value);
            var ptr = _malloc(4 + length + charSize);
            HEAPU32[ptr >> 2] = length >> shift;
            encodeString(value, ptr + 4, length + charSize);
            if (destructors !== null) {
              destructors.push(_free, ptr);
            }
            return ptr;
          }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: function(ptr) {
            _free(ptr);
          } });
        }
        function __embind_register_value_object(rawType, name, constructorSignature, rawConstructor, destructorSignature, rawDestructor) {
          structRegistrations[rawType] = { name: readLatin1String(name), rawConstructor: embind__requireFunction(constructorSignature, rawConstructor), rawDestructor: embind__requireFunction(destructorSignature, rawDestructor), fields: [] };
        }
        function __embind_register_value_object_field(structType, fieldName, getterReturnType, getterSignature, getter, getterContext, setterArgumentType, setterSignature, setter, setterContext) {
          structRegistrations[structType].fields.push({ fieldName: readLatin1String(fieldName), getterReturnType, getter: embind__requireFunction(getterSignature, getter), getterContext, setterArgumentType, setter: embind__requireFunction(setterSignature, setter), setterContext });
        }
        function __embind_register_void(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, { isVoid: true, name, "argPackAdvance": 0, "fromWireType": function() {
            return void 0;
          }, "toWireType": function(destructors, o) {
            return void 0;
          } });
        }
        var emval_symbols = {};
        function getStringOrSymbol(address) {
          var symbol = emval_symbols[address];
          if (symbol === void 0) {
            return readLatin1String(address);
          }
          return symbol;
        }
        function emval_get_global() {
          if (typeof globalThis == "object") {
            return globalThis;
          }
          return (/* @__PURE__ */ function() {
            return Function;
          }())("return this")();
        }
        function __emval_get_global(name) {
          if (name === 0) {
            return Emval.toHandle(emval_get_global());
          } else {
            name = getStringOrSymbol(name);
            return Emval.toHandle(emval_get_global()[name]);
          }
        }
        function __emval_incref(handle) {
          if (handle > 4) {
            emval_handle_array[handle].refcount += 1;
          }
        }
        function requireRegisteredType(rawType, humanName) {
          var impl = registeredTypes[rawType];
          if (void 0 === impl) {
            throwBindingError(humanName + " has unknown type " + getTypeName(rawType));
          }
          return impl;
        }
        function craftEmvalAllocator(argCount) {
          var argsList = "";
          for (var i = 0; i < argCount; ++i) {
            argsList += (i !== 0 ? ", " : "") + "arg" + i;
          }
          var getMemory = () => HEAPU32;
          var functionBody = "return function emval_allocator_" + argCount + "(constructor, argTypes, args) {\n  var HEAPU32 = getMemory();\n";
          for (var i = 0; i < argCount; ++i) {
            functionBody += "var argType" + i + " = requireRegisteredType(HEAPU32[((argTypes)>>2)], 'parameter " + i + "');\nvar arg" + i + " = argType" + i + ".readValueFromPointer(args);\nargs += argType" + i + "['argPackAdvance'];\nargTypes += 4;\n";
          }
          functionBody += "var obj = new constructor(" + argsList + ");\nreturn valueToHandle(obj);\n}\n";
          return new Function("requireRegisteredType", "Module", "valueToHandle", "getMemory", functionBody)(requireRegisteredType, Module, Emval.toHandle, getMemory);
        }
        var emval_newers = {};
        function __emval_new(handle, argCount, argTypes, args) {
          handle = Emval.toValue(handle);
          var newer = emval_newers[argCount];
          if (!newer) {
            newer = craftEmvalAllocator(argCount);
            emval_newers[argCount] = newer;
          }
          return newer(handle, argTypes, args);
        }
        function __emval_take_value(type, arg) {
          type = requireRegisteredType(type, "_emval_take_value");
          var v = type["readValueFromPointer"](arg);
          return Emval.toHandle(v);
        }
        function _abort() {
          abort("");
        }
        function getHeapMax() {
          return 2147483648;
        }
        function _emscripten_get_heap_max() {
          return getHeapMax();
        }
        function _emscripten_memcpy_big(dest, src, num) {
          HEAPU8.copyWithin(dest, src, src + num);
        }
        function emscripten_realloc_buffer(size) {
          try {
            wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
            updateGlobalBufferAndViews(wasmMemory.buffer);
            return 1;
          } catch (e) {
          }
        }
        function _emscripten_resize_heap(requestedSize) {
          var oldSize = HEAPU8.length;
          requestedSize = requestedSize >>> 0;
          var maxHeapSize = getHeapMax();
          if (requestedSize > maxHeapSize) {
            return false;
          }
          let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
            var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
            var replacement = emscripten_realloc_buffer(newSize);
            if (replacement) {
              return true;
            }
          }
          return false;
        }
        var ENV = {};
        function getExecutableName() {
          return thisProgram || "./this.program";
        }
        function getEnvStrings() {
          if (!getEnvStrings.strings) {
            var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
            var env = { "USER": "web_user", "LOGNAME": "web_user", "PATH": "/", "PWD": "/", "HOME": "/home/web_user", "LANG": lang, "_": getExecutableName() };
            for (var x in ENV) {
              if (ENV[x] === void 0) delete env[x];
              else env[x] = ENV[x];
            }
            var strings = [];
            for (var x in env) {
              strings.push(x + "=" + env[x]);
            }
            getEnvStrings.strings = strings;
          }
          return getEnvStrings.strings;
        }
        function writeAsciiToMemory(str, buffer2, dontAddNull) {
          for (var i = 0; i < str.length; ++i) {
            HEAP8[buffer2++ >> 0] = str.charCodeAt(i);
          }
          if (!dontAddNull) HEAP8[buffer2 >> 0] = 0;
        }
        var SYSCALLS = { varargs: void 0, get: function() {
          SYSCALLS.varargs += 4;
          var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
          return ret;
        }, getStr: function(ptr) {
          var ret = UTF8ToString(ptr);
          return ret;
        } };
        function _environ_get(__environ, environ_buf) {
          var bufSize = 0;
          getEnvStrings().forEach(function(string, i) {
            var ptr = environ_buf + bufSize;
            HEAPU32[__environ + i * 4 >> 2] = ptr;
            writeAsciiToMemory(string, ptr);
            bufSize += string.length + 1;
          });
          return 0;
        }
        function _environ_sizes_get(penviron_count, penviron_buf_size) {
          var strings = getEnvStrings();
          HEAPU32[penviron_count >> 2] = strings.length;
          var bufSize = 0;
          strings.forEach(function(string) {
            bufSize += string.length + 1;
          });
          HEAPU32[penviron_buf_size >> 2] = bufSize;
          return 0;
        }
        function _fd_close(fd) {
          return 52;
        }
        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
          return 70;
        }
        var printCharBuffers = [null, [], []];
        function printChar(stream, curr) {
          var buffer2 = printCharBuffers[stream];
          if (curr === 0 || curr === 10) {
            (stream === 1 ? out : err)(UTF8ArrayToString(buffer2, 0));
            buffer2.length = 0;
          } else {
            buffer2.push(curr);
          }
        }
        function _fd_write(fd, iov, iovcnt, pnum) {
          var num = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAPU32[iov >> 2];
            var len = HEAPU32[iov + 4 >> 2];
            iov += 8;
            for (var j = 0; j < len; j++) {
              printChar(fd, HEAPU8[ptr + j]);
            }
            num += len;
          }
          HEAPU32[pnum >> 2] = num;
          return 0;
        }
        function getCFunc(ident) {
          var func = Module["_" + ident];
          return func;
        }
        function writeArrayToMemory(array, buffer2) {
          HEAP8.set(array, buffer2);
        }
        function ccall(ident, returnType, argTypes, args, opts) {
          var toC = { "string": (str) => {
            var ret2 = 0;
            if (str !== null && str !== void 0 && str !== 0) {
              var len = (str.length << 2) + 1;
              ret2 = stackAlloc(len);
              stringToUTF8(str, ret2, len);
            }
            return ret2;
          }, "array": (arr) => {
            var ret2 = stackAlloc(arr.length);
            writeArrayToMemory(arr, ret2);
            return ret2;
          } };
          function convertReturnValue(ret2) {
            if (returnType === "string") {
              return UTF8ToString(ret2);
            }
            if (returnType === "boolean") return Boolean(ret2);
            return ret2;
          }
          var func = getCFunc(ident);
          var cArgs = [];
          var stack = 0;
          if (args) {
            for (var i = 0; i < args.length; i++) {
              var converter = toC[argTypes[i]];
              if (converter) {
                if (stack === 0) stack = stackSave();
                cArgs[i] = converter(args[i]);
              } else {
                cArgs[i] = args[i];
              }
            }
          }
          var ret = func.apply(null, cArgs);
          function onDone(ret2) {
            if (stack !== 0) stackRestore(stack);
            return convertReturnValue(ret2);
          }
          ret = onDone(ret);
          return ret;
        }
        InternalError = Module["InternalError"] = extendError(Error, "InternalError");
        embind_init_charCodes();
        BindingError = Module["BindingError"] = extendError(Error, "BindingError");
        init_ClassHandle();
        init_embind();
        init_RegisteredPointer();
        UnboundTypeError = Module["UnboundTypeError"] = extendError(Error, "UnboundTypeError");
        init_emval();
        var asmLibraryArg = { "D": ___cxa_throw, "e": __embind_finalize_value_object, "t": __embind_register_bigint, "B": __embind_register_bool, "r": __embind_register_class, "q": __embind_register_class_constructor, "b": __embind_register_class_function, "A": __embind_register_emval, "l": __embind_register_float, "d": __embind_register_integer, "a": __embind_register_memory_view, "k": __embind_register_std_string, "f": __embind_register_std_wstring, "g": __embind_register_value_object, "c": __embind_register_value_object_field, "C": __embind_register_void, "h": __emval_decref, "o": __emval_get_global, "m": __emval_incref, "n": __emval_new, "p": __emval_take_value, "i": _abort, "v": _emscripten_get_heap_max, "z": _emscripten_memcpy_big, "u": _emscripten_resize_heap, "w": _environ_get, "x": _environ_sizes_get, "y": _fd_close, "s": _fd_seek, "j": _fd_write };
        var asm = createWasm();
        var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
          return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["F"]).apply(null, arguments);
        };
        var _malloc = Module["_malloc"] = function() {
          return (_malloc = Module["_malloc"] = Module["asm"]["H"]).apply(null, arguments);
        };
        var _free = Module["_free"] = function() {
          return (_free = Module["_free"] = Module["asm"]["I"]).apply(null, arguments);
        };
        var ___getTypeName = Module["___getTypeName"] = function() {
          return (___getTypeName = Module["___getTypeName"] = Module["asm"]["J"]).apply(null, arguments);
        };
        var __embind_initialize_bindings = Module["__embind_initialize_bindings"] = function() {
          return (__embind_initialize_bindings = Module["__embind_initialize_bindings"] = Module["asm"]["K"]).apply(null, arguments);
        };
        var stackSave = Module["stackSave"] = function() {
          return (stackSave = Module["stackSave"] = Module["asm"]["L"]).apply(null, arguments);
        };
        var stackRestore = Module["stackRestore"] = function() {
          return (stackRestore = Module["stackRestore"] = Module["asm"]["M"]).apply(null, arguments);
        };
        var stackAlloc = Module["stackAlloc"] = function() {
          return (stackAlloc = Module["stackAlloc"] = Module["asm"]["N"]).apply(null, arguments);
        };
        var ___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = function() {
          return (___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = Module["asm"]["O"]).apply(null, arguments);
        };
        var dynCall_iji = Module["dynCall_iji"] = function() {
          return (dynCall_iji = Module["dynCall_iji"] = Module["asm"]["P"]).apply(null, arguments);
        };
        var dynCall_jji = Module["dynCall_jji"] = function() {
          return (dynCall_jji = Module["dynCall_jji"] = Module["asm"]["Q"]).apply(null, arguments);
        };
        var dynCall_iiji = Module["dynCall_iiji"] = function() {
          return (dynCall_iiji = Module["dynCall_iiji"] = Module["asm"]["R"]).apply(null, arguments);
        };
        var dynCall_jiji = Module["dynCall_jiji"] = function() {
          return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["S"]).apply(null, arguments);
        };
        Module["ccall"] = ccall;
        var calledRun;
        dependenciesFulfilled = function runCaller() {
          if (!calledRun) run();
          if (!calledRun) dependenciesFulfilled = runCaller;
        };
        function run(args) {
          args = args || arguments_;
          if (runDependencies > 0) {
            return;
          }
          preRun();
          if (runDependencies > 0) {
            return;
          }
          function doRun() {
            if (calledRun) return;
            calledRun = true;
            Module["calledRun"] = true;
            if (ABORT) return;
            initRuntime();
            readyPromiseResolve(Module);
            if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
            postRun();
          }
          if (Module["setStatus"]) {
            Module["setStatus"]("Running...");
            setTimeout(function() {
              setTimeout(function() {
                Module["setStatus"]("");
              }, 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
        }
        if (Module["preInit"]) {
          if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
          while (Module["preInit"].length > 0) {
            Module["preInit"].pop()();
          }
        }
        run();
        return OpenJPEGWASM2.ready;
      };
    })();
    if (typeof exports === "object" && typeof module === "object")
      module.exports = OpenJPEGWASM;
    else if (typeof define === "function" && define["amd"])
      define([], function() {
        return OpenJPEGWASM;
      });
    else if (typeof exports === "object")
      exports["OpenJPEGWASM"] = OpenJPEGWASM;
  }
});

// node_modules/@cornerstonejs/codec-openjph/dist/openjphjs.js
var require_openjphjs = __commonJS({
  "node_modules/@cornerstonejs/codec-openjph/dist/openjphjs.js"(exports, module) {
    var Module = (() => {
      var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
      if (typeof __filename !== "undefined") _scriptDir = _scriptDir || __filename;
      return function(Module2) {
        Module2 = Module2 || {};
        var Module2 = typeof Module2 != "undefined" ? Module2 : {};
        var readyPromiseResolve, readyPromiseReject;
        Module2["ready"] = new Promise(function(resolve, reject) {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        var moduleOverrides = Object.assign({}, Module2);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow) => {
          throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = typeof window == "object";
        var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
        var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
        var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
        var scriptDirectory = "";
        function locateFile(path) {
          if (Module2["locateFile"]) {
            return Module2["locateFile"](path, scriptDirectory);
          }
          return scriptDirectory + path;
        }
        var read_, readAsync, readBinary, setWindowTitle;
        function logExceptionOnExit(e) {
          if (e instanceof ExitStatus) return;
          let toLog = e;
          err("exiting due to exception: " + toLog);
        }
        if (ENVIRONMENT_IS_NODE) {
          var fs = require_fs();
          var nodePath = require_path();
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = nodePath.dirname(scriptDirectory) + "/";
          } else {
            scriptDirectory = __dirname + "/";
          }
          read_ = (filename, binary) => {
            filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
            return fs.readFileSync(filename, binary ? void 0 : "utf8");
          };
          readBinary = (filename) => {
            var ret = read_(filename, true);
            if (!ret.buffer) {
              ret = new Uint8Array(ret);
            }
            return ret;
          };
          readAsync = (filename, onload, onerror) => {
            filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
            fs.readFile(filename, function(err2, data) {
              if (err2) onerror(err2);
              else onload(data.buffer);
            });
          };
          if (process["argv"].length > 1) {
            thisProgram = process["argv"][1].replace(/\\/g, "/");
          }
          arguments_ = process["argv"].slice(2);
          process["on"]("uncaughtException", function(ex) {
            if (!(ex instanceof ExitStatus)) {
              throw ex;
            }
          });
          process["on"]("unhandledRejection", function(reason) {
            throw reason;
          });
          quit_ = (status, toThrow) => {
            if (keepRuntimeAlive()) {
              process["exitCode"] = status;
              throw toThrow;
            }
            logExceptionOnExit(toThrow);
            process["exit"](status);
          };
          Module2["inspect"] = function() {
            return "[Emscripten Module object]";
          };
        } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
          } else if (typeof document != "undefined" && document.currentScript) {
            scriptDirectory = document.currentScript.src;
          }
          if (_scriptDir) {
            scriptDirectory = _scriptDir;
          }
          if (scriptDirectory.indexOf("blob:") !== 0) {
            scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
          } else {
            scriptDirectory = "";
          }
          {
            read_ = (url) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              xhr.send(null);
              return xhr.responseText;
            };
            if (ENVIRONMENT_IS_WORKER) {
              readBinary = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(
                  /** @type{!ArrayBuffer} */
                  xhr.response
                );
              };
            }
            readAsync = (url, onload, onerror) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.onload = () => {
                if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                  onload(xhr.response);
                  return;
                }
                onerror();
              };
              xhr.onerror = onerror;
              xhr.send(null);
            };
          }
          setWindowTitle = (title) => document.title = title;
        } else {
        }
        var out = Module2["print"] || console.log.bind(console);
        var err = Module2["printErr"] || console.warn.bind(console);
        Object.assign(Module2, moduleOverrides);
        moduleOverrides = null;
        if (Module2["arguments"]) arguments_ = Module2["arguments"];
        if (Module2["thisProgram"]) thisProgram = Module2["thisProgram"];
        if (Module2["quit"]) quit_ = Module2["quit"];
        var STACK_ALIGN = 16;
        var POINTER_SIZE = 4;
        function getNativeTypeSize(type) {
          switch (type) {
            case "i1":
            case "i8":
            case "u8":
              return 1;
            case "i16":
            case "u16":
              return 2;
            case "i32":
            case "u32":
              return 4;
            case "i64":
            case "u64":
              return 8;
            case "float":
              return 4;
            case "double":
              return 8;
            default: {
              if (type[type.length - 1] === "*") {
                return POINTER_SIZE;
              }
              if (type[0] === "i") {
                const bits = Number(type.substr(1));
                assert(bits % 8 === 0, "getNativeTypeSize invalid bits " + bits + ", type " + type);
                return bits / 8;
              }
              return 0;
            }
          }
        }
        var wasmBinary;
        if (Module2["wasmBinary"]) wasmBinary = Module2["wasmBinary"];
        var noExitRuntime = Module2["noExitRuntime"] || true;
        if (typeof WebAssembly != "object") {
          abort("no native wasm support detected");
        }
        var wasmMemory;
        var ABORT = false;
        var EXITSTATUS;
        function assert(condition, text) {
          if (!condition) {
            abort(text);
          }
        }
        var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
        function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
          var endIdx = idx + maxBytesToRead;
          var endPtr = idx;
          while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
          if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
            return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
          }
          var str = "";
          while (idx < endPtr) {
            var u0 = heapOrArray[idx++];
            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
              str += String.fromCharCode((u0 & 31) << 6 | u1);
              continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
              u0 = (u0 & 15) << 12 | u1 << 6 | u2;
            } else {
              u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
            }
            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            }
          }
          return str;
        }
        function UTF8ToString(ptr, maxBytesToRead) {
          return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        }
        function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
          if (!(maxBytesToWrite > 0))
            return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = 65536 + ((u & 1023) << 10) | u1 & 1023;
            }
            if (u <= 127) {
              if (outIdx >= endIdx) break;
              heap[outIdx++] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx) break;
              heap[outIdx++] = 192 | u >> 6;
              heap[outIdx++] = 128 | u & 63;
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx) break;
              heap[outIdx++] = 224 | u >> 12;
              heap[outIdx++] = 128 | u >> 6 & 63;
              heap[outIdx++] = 128 | u & 63;
            } else {
              if (outIdx + 3 >= endIdx) break;
              heap[outIdx++] = 240 | u >> 18;
              heap[outIdx++] = 128 | u >> 12 & 63;
              heap[outIdx++] = 128 | u >> 6 & 63;
              heap[outIdx++] = 128 | u & 63;
            }
          }
          heap[outIdx] = 0;
          return outIdx - startIdx;
        }
        function stringToUTF8(str, outPtr, maxBytesToWrite) {
          return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        }
        function lengthBytesUTF8(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var c = str.charCodeAt(i);
            if (c <= 127) {
              len++;
            } else if (c <= 2047) {
              len += 2;
            } else if (c >= 55296 && c <= 57343) {
              len += 4;
              ++i;
            } else {
              len += 3;
            }
          }
          return len;
        }
        var HEAP, buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateGlobalBufferAndViews(buf) {
          buffer = buf;
          Module2["HEAP8"] = HEAP8 = new Int8Array(buf);
          Module2["HEAP16"] = HEAP16 = new Int16Array(buf);
          Module2["HEAP32"] = HEAP32 = new Int32Array(buf);
          Module2["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
          Module2["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
          Module2["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
          Module2["HEAPF32"] = HEAPF32 = new Float32Array(buf);
          Module2["HEAPF64"] = HEAPF64 = new Float64Array(buf);
        }
        var STACK_SIZE = 65536;
        var INITIAL_MEMORY = Module2["INITIAL_MEMORY"] || 52428800;
        var wasmTable;
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATEXIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        function keepRuntimeAlive() {
          return noExitRuntime;
        }
        function preRun() {
          if (Module2["preRun"]) {
            if (typeof Module2["preRun"] == "function") Module2["preRun"] = [Module2["preRun"]];
            while (Module2["preRun"].length) {
              addOnPreRun(Module2["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          runtimeInitialized = true;
          callRuntimeCallbacks(__ATINIT__);
        }
        function postRun() {
          if (Module2["postRun"]) {
            if (typeof Module2["postRun"] == "function") Module2["postRun"] = [Module2["postRun"]];
            while (Module2["postRun"].length) {
              addOnPostRun(Module2["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
          __ATINIT__.unshift(cb);
        }
        function addOnExit(cb) {
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function getUniqueRunDependency(id) {
          return id;
        }
        function addRunDependency(id) {
          runDependencies++;
          if (Module2["monitorRunDependencies"]) {
            Module2["monitorRunDependencies"](runDependencies);
          }
        }
        function removeRunDependency(id) {
          runDependencies--;
          if (Module2["monitorRunDependencies"]) {
            Module2["monitorRunDependencies"](runDependencies);
          }
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        function abort(what) {
          if (Module2["onAbort"]) {
            Module2["onAbort"](what);
          }
          what = "Aborted(" + what + ")";
          err(what);
          ABORT = true;
          EXITSTATUS = 1;
          what += ". Build with -sASSERTIONS for more info.";
          var e = new WebAssembly.RuntimeError(what);
          readyPromiseReject(e);
          throw e;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) {
          return filename.startsWith(dataURIPrefix);
        }
        function isFileURI(filename) {
          return filename.startsWith("file://");
        }
        var wasmBinaryFile;
        wasmBinaryFile = "openjphjs.wasm";
        if (!isDataURI(wasmBinaryFile)) {
          wasmBinaryFile = locateFile(wasmBinaryFile);
        }
        function getBinary(file) {
          try {
            if (file == wasmBinaryFile && wasmBinary) {
              return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
              return readBinary(file);
            }
            throw "both async and sync fetching of the wasm failed";
          } catch (err2) {
            abort(err2);
          }
        }
        function getBinaryPromise() {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
            if (typeof fetch == "function" && !isFileURI(wasmBinaryFile)) {
              return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
                if (!response["ok"]) {
                  throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
                }
                return response["arrayBuffer"]();
              }).catch(function() {
                return getBinary(wasmBinaryFile);
              });
            } else {
              if (readAsync) {
                return new Promise(function(resolve, reject) {
                  readAsync(wasmBinaryFile, function(response) {
                    resolve(new Uint8Array(
                      /** @type{!ArrayBuffer} */
                      response
                    ));
                  }, reject);
                });
              }
            }
          }
          return Promise.resolve().then(function() {
            return getBinary(wasmBinaryFile);
          });
        }
        function createWasm() {
          var info = {
            "env": asmLibraryArg,
            "wasi_snapshot_preview1": asmLibraryArg
          };
          function receiveInstance(instance, module2) {
            var exports3 = instance.exports;
            Module2["asm"] = exports3;
            wasmMemory = Module2["asm"]["memory"];
            updateGlobalBufferAndViews(wasmMemory.buffer);
            wasmTable = Module2["asm"]["__indirect_function_table"];
            addOnInit(Module2["asm"]["__wasm_call_ctors"]);
            removeRunDependency("wasm-instantiate");
          }
          addRunDependency("wasm-instantiate");
          function receiveInstantiationResult(result) {
            receiveInstance(result["instance"]);
          }
          function instantiateArrayBuffer(receiver) {
            return getBinaryPromise().then(function(binary) {
              return WebAssembly.instantiate(binary, info);
            }).then(function(instance) {
              return instance;
            }).then(receiver, function(reason) {
              err("failed to asynchronously prepare wasm: " + reason);
              abort(reason);
            });
          }
          function instantiateAsync() {
            if (!wasmBinary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(wasmBinaryFile) && // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
            !isFileURI(wasmBinaryFile) && // Avoid instantiateStreaming() on Node.js environment for now, as while
            // Node.js v18.1.0 implements it, it does not have a full fetch()
            // implementation yet.
            //
            // Reference:
            //   https://github.com/emscripten-core/emscripten/pull/16917
            !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
              return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
                var result = WebAssembly.instantiateStreaming(response, info);
                return result.then(
                  receiveInstantiationResult,
                  function(reason) {
                    err("wasm streaming compile failed: " + reason);
                    err("falling back to ArrayBuffer instantiation");
                    return instantiateArrayBuffer(receiveInstantiationResult);
                  }
                );
              });
            } else {
              return instantiateArrayBuffer(receiveInstantiationResult);
            }
          }
          if (Module2["instantiateWasm"]) {
            try {
              var exports2 = Module2["instantiateWasm"](info, receiveInstance);
              return exports2;
            } catch (e) {
              err("Module.instantiateWasm callback failed with error: " + e);
              readyPromiseReject(e);
            }
          }
          instantiateAsync().catch(readyPromiseReject);
          return {};
        }
        var tempDouble;
        var tempI64;
        var ASM_CONSTS = {};
        function ExitStatus(status) {
          this.name = "ExitStatus";
          this.message = "Program terminated with exit(" + status + ")";
          this.status = status;
        }
        function callRuntimeCallbacks(callbacks) {
          while (callbacks.length > 0) {
            callbacks.shift()(Module2);
          }
        }
        function getValue3(ptr, type = "i8") {
          if (type.endsWith("*")) type = "*";
          switch (type) {
            case "i1":
              return HEAP8[ptr >> 0];
            case "i8":
              return HEAP8[ptr >> 0];
            case "i16":
              return HEAP16[ptr >> 1];
            case "i32":
              return HEAP32[ptr >> 2];
            case "i64":
              return HEAP32[ptr >> 2];
            case "float":
              return HEAPF32[ptr >> 2];
            case "double":
              return HEAPF64[ptr >> 3];
            case "*":
              return HEAPU32[ptr >> 2];
            default:
              abort("invalid type for getValue: " + type);
          }
          return null;
        }
        function setValue(ptr, value, type = "i8") {
          if (type.endsWith("*")) type = "*";
          switch (type) {
            case "i1":
              HEAP8[ptr >> 0] = value;
              break;
            case "i8":
              HEAP8[ptr >> 0] = value;
              break;
            case "i16":
              HEAP16[ptr >> 1] = value;
              break;
            case "i32":
              HEAP32[ptr >> 2] = value;
              break;
            case "i64":
              tempI64 = [value >>> 0, (tempDouble = value, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[ptr >> 2] = tempI64[0], HEAP32[ptr + 4 >> 2] = tempI64[1];
              break;
            case "float":
              HEAPF32[ptr >> 2] = value;
              break;
            case "double":
              HEAPF64[ptr >> 3] = value;
              break;
            case "*":
              HEAPU32[ptr >> 2] = value;
              break;
            default:
              abort("invalid type for setValue: " + type);
          }
        }
        function ___assert_fail(condition, filename, line, func) {
          abort("Assertion failed: " + UTF8ToString(condition) + ", at: " + [filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function"]);
        }
        var exceptionCaught = [];
        function exception_addRef(info) {
          info.add_ref();
        }
        var uncaughtExceptionCount = 0;
        function ___cxa_begin_catch(ptr) {
          var info = new ExceptionInfo(ptr);
          if (!info.get_caught()) {
            info.set_caught(true);
            uncaughtExceptionCount--;
          }
          info.set_rethrown(false);
          exceptionCaught.push(info);
          exception_addRef(info);
          return info.get_exception_ptr();
        }
        var exceptionLast = 0;
        var wasmTableMirror = [];
        function getWasmTableEntry(funcPtr) {
          var func = wasmTableMirror[funcPtr];
          if (!func) {
            if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
            wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
          }
          return func;
        }
        function exception_decRef(info) {
          if (info.release_ref() && !info.get_rethrown()) {
            var destructor = info.get_destructor();
            if (destructor) {
              getWasmTableEntry(destructor)(info.excPtr);
            }
            ___cxa_free_exception(info.excPtr);
          }
        }
        function ___cxa_end_catch() {
          _setThrew(0);
          var info = exceptionCaught.pop();
          exception_decRef(info);
          exceptionLast = 0;
        }
        function ExceptionInfo(excPtr) {
          this.excPtr = excPtr;
          this.ptr = excPtr - 24;
          this.set_type = function(type) {
            HEAPU32[this.ptr + 4 >> 2] = type;
          };
          this.get_type = function() {
            return HEAPU32[this.ptr + 4 >> 2];
          };
          this.set_destructor = function(destructor) {
            HEAPU32[this.ptr + 8 >> 2] = destructor;
          };
          this.get_destructor = function() {
            return HEAPU32[this.ptr + 8 >> 2];
          };
          this.set_refcount = function(refcount) {
            HEAP32[this.ptr >> 2] = refcount;
          };
          this.set_caught = function(caught) {
            caught = caught ? 1 : 0;
            HEAP8[this.ptr + 12 >> 0] = caught;
          };
          this.get_caught = function() {
            return HEAP8[this.ptr + 12 >> 0] != 0;
          };
          this.set_rethrown = function(rethrown) {
            rethrown = rethrown ? 1 : 0;
            HEAP8[this.ptr + 13 >> 0] = rethrown;
          };
          this.get_rethrown = function() {
            return HEAP8[this.ptr + 13 >> 0] != 0;
          };
          this.init = function(type, destructor) {
            this.set_adjusted_ptr(0);
            this.set_type(type);
            this.set_destructor(destructor);
            this.set_refcount(0);
            this.set_caught(false);
            this.set_rethrown(false);
          };
          this.add_ref = function() {
            var value = HEAP32[this.ptr >> 2];
            HEAP32[this.ptr >> 2] = value + 1;
          };
          this.release_ref = function() {
            var prev = HEAP32[this.ptr >> 2];
            HEAP32[this.ptr >> 2] = prev - 1;
            return prev === 1;
          };
          this.set_adjusted_ptr = function(adjustedPtr) {
            HEAPU32[this.ptr + 16 >> 2] = adjustedPtr;
          };
          this.get_adjusted_ptr = function() {
            return HEAPU32[this.ptr + 16 >> 2];
          };
          this.get_exception_ptr = function() {
            var isPointer = ___cxa_is_pointer_type(this.get_type());
            if (isPointer) {
              return HEAPU32[this.excPtr >> 2];
            }
            var adjusted = this.get_adjusted_ptr();
            if (adjusted !== 0) return adjusted;
            return this.excPtr;
          };
        }
        function ___resumeException(ptr) {
          if (!exceptionLast) {
            exceptionLast = ptr;
          }
          throw ptr;
        }
        function ___cxa_find_matching_catch_2() {
          var thrown = exceptionLast;
          if (!thrown) {
            setTempRet0(0);
            return 0;
          }
          var info = new ExceptionInfo(thrown);
          info.set_adjusted_ptr(thrown);
          var thrownType = info.get_type();
          if (!thrownType) {
            setTempRet0(0);
            return thrown;
          }
          for (var i = 0; i < arguments.length; i++) {
            var caughtType = arguments[i];
            if (caughtType === 0 || caughtType === thrownType) {
              break;
            }
            var adjusted_ptr_addr = info.ptr + 16;
            if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
              setTempRet0(caughtType);
              return thrown;
            }
          }
          setTempRet0(thrownType);
          return thrown;
        }
        function ___cxa_find_matching_catch_3() {
          var thrown = exceptionLast;
          if (!thrown) {
            setTempRet0(0);
            return 0;
          }
          var info = new ExceptionInfo(thrown);
          info.set_adjusted_ptr(thrown);
          var thrownType = info.get_type();
          if (!thrownType) {
            setTempRet0(0);
            return thrown;
          }
          for (var i = 0; i < arguments.length; i++) {
            var caughtType = arguments[i];
            if (caughtType === 0 || caughtType === thrownType) {
              break;
            }
            var adjusted_ptr_addr = info.ptr + 16;
            if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
              setTempRet0(caughtType);
              return thrown;
            }
          }
          setTempRet0(thrownType);
          return thrown;
        }
        function ___cxa_throw(ptr, type, destructor) {
          var info = new ExceptionInfo(ptr);
          info.init(type, destructor);
          exceptionLast = ptr;
          uncaughtExceptionCount++;
          throw ptr;
        }
        var structRegistrations = {};
        function runDestructors(destructors) {
          while (destructors.length) {
            var ptr = destructors.pop();
            var del = destructors.pop();
            del(ptr);
          }
        }
        function simpleReadValueFromPointer(pointer) {
          return this["fromWireType"](HEAP32[pointer >> 2]);
        }
        var awaitingDependencies = {};
        var registeredTypes = {};
        var typeDependencies = {};
        var char_0 = 48;
        var char_9 = 57;
        function makeLegalFunctionName(name) {
          if (void 0 === name) {
            return "_unknown";
          }
          name = name.replace(/[^a-zA-Z0-9_]/g, "$");
          var f = name.charCodeAt(0);
          if (f >= char_0 && f <= char_9) {
            return "_" + name;
          }
          return name;
        }
        function createNamedFunction(name, body) {
          name = makeLegalFunctionName(name);
          return new Function(
            "body",
            "return function " + name + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n'
          )(body);
        }
        function extendError(baseErrorType, errorName) {
          var errorClass = createNamedFunction(errorName, function(message) {
            this.name = errorName;
            this.message = message;
            var stack = new Error(message).stack;
            if (stack !== void 0) {
              this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "");
            }
          });
          errorClass.prototype = Object.create(baseErrorType.prototype);
          errorClass.prototype.constructor = errorClass;
          errorClass.prototype.toString = function() {
            if (this.message === void 0) {
              return this.name;
            } else {
              return this.name + ": " + this.message;
            }
          };
          return errorClass;
        }
        var InternalError = void 0;
        function throwInternalError(message) {
          throw new InternalError(message);
        }
        function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
          myTypes.forEach(function(type) {
            typeDependencies[type] = dependentTypes;
          });
          function onComplete(typeConverters2) {
            var myTypeConverters = getTypeConverters(typeConverters2);
            if (myTypeConverters.length !== myTypes.length) {
              throwInternalError("Mismatched type converter count");
            }
            for (var i = 0; i < myTypes.length; ++i) {
              registerType(myTypes[i], myTypeConverters[i]);
            }
          }
          var typeConverters = new Array(dependentTypes.length);
          var unregisteredTypes = [];
          var registered = 0;
          dependentTypes.forEach((dt, i) => {
            if (registeredTypes.hasOwnProperty(dt)) {
              typeConverters[i] = registeredTypes[dt];
            } else {
              unregisteredTypes.push(dt);
              if (!awaitingDependencies.hasOwnProperty(dt)) {
                awaitingDependencies[dt] = [];
              }
              awaitingDependencies[dt].push(() => {
                typeConverters[i] = registeredTypes[dt];
                ++registered;
                if (registered === unregisteredTypes.length) {
                  onComplete(typeConverters);
                }
              });
            }
          });
          if (0 === unregisteredTypes.length) {
            onComplete(typeConverters);
          }
        }
        function __embind_finalize_value_object(structType) {
          var reg = structRegistrations[structType];
          delete structRegistrations[structType];
          var rawConstructor = reg.rawConstructor;
          var rawDestructor = reg.rawDestructor;
          var fieldRecords = reg.fields;
          var fieldTypes = fieldRecords.map((field) => field.getterReturnType).concat(fieldRecords.map((field) => field.setterArgumentType));
          whenDependentTypesAreResolved([structType], fieldTypes, (fieldTypes2) => {
            var fields = {};
            fieldRecords.forEach((field, i) => {
              var fieldName = field.fieldName;
              var getterReturnType = fieldTypes2[i];
              var getter = field.getter;
              var getterContext = field.getterContext;
              var setterArgumentType = fieldTypes2[i + fieldRecords.length];
              var setter = field.setter;
              var setterContext = field.setterContext;
              fields[fieldName] = {
                read: (ptr) => {
                  return getterReturnType["fromWireType"](
                    getter(getterContext, ptr)
                  );
                },
                write: (ptr, o) => {
                  var destructors = [];
                  setter(setterContext, ptr, setterArgumentType["toWireType"](destructors, o));
                  runDestructors(destructors);
                }
              };
            });
            return [{
              name: reg.name,
              "fromWireType": function(ptr) {
                var rv = {};
                for (var i in fields) {
                  rv[i] = fields[i].read(ptr);
                }
                rawDestructor(ptr);
                return rv;
              },
              "toWireType": function(destructors, o) {
                for (var fieldName in fields) {
                  if (!(fieldName in o)) {
                    throw new TypeError('Missing field:  "' + fieldName + '"');
                  }
                }
                var ptr = rawConstructor();
                for (fieldName in fields) {
                  fields[fieldName].write(ptr, o[fieldName]);
                }
                if (destructors !== null) {
                  destructors.push(rawDestructor, ptr);
                }
                return ptr;
              },
              "argPackAdvance": 8,
              "readValueFromPointer": simpleReadValueFromPointer,
              destructorFunction: rawDestructor
            }];
          });
        }
        function __embind_register_bigint(primitiveType, name, size, minRange, maxRange) {
        }
        function getShiftFromSize(size) {
          switch (size) {
            case 1:
              return 0;
            case 2:
              return 1;
            case 4:
              return 2;
            case 8:
              return 3;
            default:
              throw new TypeError("Unknown type size: " + size);
          }
        }
        function embind_init_charCodes() {
          var codes = new Array(256);
          for (var i = 0; i < 256; ++i) {
            codes[i] = String.fromCharCode(i);
          }
          embind_charCodes = codes;
        }
        var embind_charCodes = void 0;
        function readLatin1String(ptr) {
          var ret = "";
          var c = ptr;
          while (HEAPU8[c]) {
            ret += embind_charCodes[HEAPU8[c++]];
          }
          return ret;
        }
        var BindingError = void 0;
        function throwBindingError(message) {
          throw new BindingError(message);
        }
        function registerType(rawType, registeredInstance, options2 = {}) {
          if (!("argPackAdvance" in registeredInstance)) {
            throw new TypeError("registerType registeredInstance requires argPackAdvance");
          }
          var name = registeredInstance.name;
          if (!rawType) {
            throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
          }
          if (registeredTypes.hasOwnProperty(rawType)) {
            if (options2.ignoreDuplicateRegistrations) {
              return;
            } else {
              throwBindingError("Cannot register type '" + name + "' twice");
            }
          }
          registeredTypes[rawType] = registeredInstance;
          delete typeDependencies[rawType];
          if (awaitingDependencies.hasOwnProperty(rawType)) {
            var callbacks = awaitingDependencies[rawType];
            delete awaitingDependencies[rawType];
            callbacks.forEach((cb) => cb());
          }
        }
        function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            "fromWireType": function(wt) {
              return !!wt;
            },
            "toWireType": function(destructors, o) {
              return o ? trueValue : falseValue;
            },
            "argPackAdvance": 8,
            "readValueFromPointer": function(pointer) {
              var heap;
              if (size === 1) {
                heap = HEAP8;
              } else if (size === 2) {
                heap = HEAP16;
              } else if (size === 4) {
                heap = HEAP32;
              } else {
                throw new TypeError("Unknown boolean type size: " + name);
              }
              return this["fromWireType"](heap[pointer >> shift]);
            },
            destructorFunction: null
            // This type does not need a destructor
          });
        }
        function ClassHandle_isAliasOf(other) {
          if (!(this instanceof ClassHandle)) {
            return false;
          }
          if (!(other instanceof ClassHandle)) {
            return false;
          }
          var leftClass = this.$$.ptrType.registeredClass;
          var left = this.$$.ptr;
          var rightClass = other.$$.ptrType.registeredClass;
          var right = other.$$.ptr;
          while (leftClass.baseClass) {
            left = leftClass.upcast(left);
            leftClass = leftClass.baseClass;
          }
          while (rightClass.baseClass) {
            right = rightClass.upcast(right);
            rightClass = rightClass.baseClass;
          }
          return leftClass === rightClass && left === right;
        }
        function shallowCopyInternalPointer(o) {
          return {
            count: o.count,
            deleteScheduled: o.deleteScheduled,
            preservePointerOnDelete: o.preservePointerOnDelete,
            ptr: o.ptr,
            ptrType: o.ptrType,
            smartPtr: o.smartPtr,
            smartPtrType: o.smartPtrType
          };
        }
        function throwInstanceAlreadyDeleted(obj2) {
          function getInstanceTypeName(handle) {
            return handle.$$.ptrType.registeredClass.name;
          }
          throwBindingError(getInstanceTypeName(obj2) + " instance already deleted");
        }
        var finalizationRegistry = false;
        function detachFinalizer(handle) {
        }
        function runDestructor($$) {
          if ($$.smartPtr) {
            $$.smartPtrType.rawDestructor($$.smartPtr);
          } else {
            $$.ptrType.registeredClass.rawDestructor($$.ptr);
          }
        }
        function releaseClassHandle($$) {
          $$.count.value -= 1;
          var toDelete = 0 === $$.count.value;
          if (toDelete) {
            runDestructor($$);
          }
        }
        function downcastPointer(ptr, ptrClass, desiredClass) {
          if (ptrClass === desiredClass) {
            return ptr;
          }
          if (void 0 === desiredClass.baseClass) {
            return null;
          }
          var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
          if (rv === null) {
            return null;
          }
          return desiredClass.downcast(rv);
        }
        var registeredPointers = {};
        function getInheritedInstanceCount() {
          return Object.keys(registeredInstances).length;
        }
        function getLiveInheritedInstances() {
          var rv = [];
          for (var k in registeredInstances) {
            if (registeredInstances.hasOwnProperty(k)) {
              rv.push(registeredInstances[k]);
            }
          }
          return rv;
        }
        var deletionQueue = [];
        function flushPendingDeletes() {
          while (deletionQueue.length) {
            var obj2 = deletionQueue.pop();
            obj2.$$.deleteScheduled = false;
            obj2["delete"]();
          }
        }
        var delayFunction = void 0;
        function setDelayFunction(fn) {
          delayFunction = fn;
          if (deletionQueue.length && delayFunction) {
            delayFunction(flushPendingDeletes);
          }
        }
        function init_embind() {
          Module2["getInheritedInstanceCount"] = getInheritedInstanceCount;
          Module2["getLiveInheritedInstances"] = getLiveInheritedInstances;
          Module2["flushPendingDeletes"] = flushPendingDeletes;
          Module2["setDelayFunction"] = setDelayFunction;
        }
        var registeredInstances = {};
        function getBasestPointer(class_, ptr) {
          if (ptr === void 0) {
            throwBindingError("ptr should not be undefined");
          }
          while (class_.baseClass) {
            ptr = class_.upcast(ptr);
            class_ = class_.baseClass;
          }
          return ptr;
        }
        function getInheritedInstance(class_, ptr) {
          ptr = getBasestPointer(class_, ptr);
          return registeredInstances[ptr];
        }
        function makeClassHandle(prototype, record) {
          if (!record.ptrType || !record.ptr) {
            throwInternalError("makeClassHandle requires ptr and ptrType");
          }
          var hasSmartPtrType = !!record.smartPtrType;
          var hasSmartPtr = !!record.smartPtr;
          if (hasSmartPtrType !== hasSmartPtr) {
            throwInternalError("Both smartPtrType and smartPtr must be specified");
          }
          record.count = { value: 1 };
          return attachFinalizer(Object.create(prototype, {
            $$: {
              value: record
            }
          }));
        }
        function RegisteredPointer_fromWireType(ptr) {
          var rawPointer = this.getPointee(ptr);
          if (!rawPointer) {
            this.destructor(ptr);
            return null;
          }
          var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
          if (void 0 !== registeredInstance) {
            if (0 === registeredInstance.$$.count.value) {
              registeredInstance.$$.ptr = rawPointer;
              registeredInstance.$$.smartPtr = ptr;
              return registeredInstance["clone"]();
            } else {
              var rv = registeredInstance["clone"]();
              this.destructor(ptr);
              return rv;
            }
          }
          function makeDefaultHandle() {
            if (this.isSmartPointer) {
              return makeClassHandle(this.registeredClass.instancePrototype, {
                ptrType: this.pointeeType,
                ptr: rawPointer,
                smartPtrType: this,
                smartPtr: ptr
              });
            } else {
              return makeClassHandle(this.registeredClass.instancePrototype, {
                ptrType: this,
                ptr
              });
            }
          }
          var actualType = this.registeredClass.getActualType(rawPointer);
          var registeredPointerRecord = registeredPointers[actualType];
          if (!registeredPointerRecord) {
            return makeDefaultHandle.call(this);
          }
          var toType;
          if (this.isConst) {
            toType = registeredPointerRecord.constPointerType;
          } else {
            toType = registeredPointerRecord.pointerType;
          }
          var dp = downcastPointer(
            rawPointer,
            this.registeredClass,
            toType.registeredClass
          );
          if (dp === null) {
            return makeDefaultHandle.call(this);
          }
          if (this.isSmartPointer) {
            return makeClassHandle(toType.registeredClass.instancePrototype, {
              ptrType: toType,
              ptr: dp,
              smartPtrType: this,
              smartPtr: ptr
            });
          } else {
            return makeClassHandle(toType.registeredClass.instancePrototype, {
              ptrType: toType,
              ptr: dp
            });
          }
        }
        function attachFinalizer(handle) {
          if ("undefined" === typeof FinalizationRegistry) {
            attachFinalizer = (handle2) => handle2;
            return handle;
          }
          finalizationRegistry = new FinalizationRegistry((info) => {
            releaseClassHandle(info.$$);
          });
          attachFinalizer = (handle2) => {
            var $$ = handle2.$$;
            var hasSmartPtr = !!$$.smartPtr;
            if (hasSmartPtr) {
              var info = { $$ };
              finalizationRegistry.register(handle2, info, handle2);
            }
            return handle2;
          };
          detachFinalizer = (handle2) => finalizationRegistry.unregister(handle2);
          return attachFinalizer(handle);
        }
        function ClassHandle_clone() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.preservePointerOnDelete) {
            this.$$.count.value += 1;
            return this;
          } else {
            var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), {
              $$: {
                value: shallowCopyInternalPointer(this.$$)
              }
            }));
            clone.$$.count.value += 1;
            clone.$$.deleteScheduled = false;
            return clone;
          }
        }
        function ClassHandle_delete() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
            throwBindingError("Object already scheduled for deletion");
          }
          detachFinalizer(this);
          releaseClassHandle(this.$$);
          if (!this.$$.preservePointerOnDelete) {
            this.$$.smartPtr = void 0;
            this.$$.ptr = void 0;
          }
        }
        function ClassHandle_isDeleted() {
          return !this.$$.ptr;
        }
        function ClassHandle_deleteLater() {
          if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
          }
          if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
            throwBindingError("Object already scheduled for deletion");
          }
          deletionQueue.push(this);
          if (deletionQueue.length === 1 && delayFunction) {
            delayFunction(flushPendingDeletes);
          }
          this.$$.deleteScheduled = true;
          return this;
        }
        function init_ClassHandle() {
          ClassHandle.prototype["isAliasOf"] = ClassHandle_isAliasOf;
          ClassHandle.prototype["clone"] = ClassHandle_clone;
          ClassHandle.prototype["delete"] = ClassHandle_delete;
          ClassHandle.prototype["isDeleted"] = ClassHandle_isDeleted;
          ClassHandle.prototype["deleteLater"] = ClassHandle_deleteLater;
        }
        function ClassHandle() {
        }
        function ensureOverloadTable(proto, methodName, humanName) {
          if (void 0 === proto[methodName].overloadTable) {
            var prevFunc = proto[methodName];
            proto[methodName] = function() {
              if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
                throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
              }
              return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
            };
            proto[methodName].overloadTable = [];
            proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
          }
        }
        function exposePublicSymbol(name, value, numArguments) {
          if (Module2.hasOwnProperty(name)) {
            if (void 0 === numArguments || void 0 !== Module2[name].overloadTable && void 0 !== Module2[name].overloadTable[numArguments]) {
              throwBindingError("Cannot register public name '" + name + "' twice");
            }
            ensureOverloadTable(Module2, name, name);
            if (Module2.hasOwnProperty(numArguments)) {
              throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
            }
            Module2[name].overloadTable[numArguments] = value;
          } else {
            Module2[name] = value;
            if (void 0 !== numArguments) {
              Module2[name].numArguments = numArguments;
            }
          }
        }
        function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
          this.name = name;
          this.constructor = constructor;
          this.instancePrototype = instancePrototype;
          this.rawDestructor = rawDestructor;
          this.baseClass = baseClass;
          this.getActualType = getActualType;
          this.upcast = upcast;
          this.downcast = downcast;
          this.pureVirtualFunctions = [];
        }
        function upcastPointer(ptr, ptrClass, desiredClass) {
          while (ptrClass !== desiredClass) {
            if (!ptrClass.upcast) {
              throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name);
            }
            ptr = ptrClass.upcast(ptr);
            ptrClass = ptrClass.baseClass;
          }
          return ptr;
        }
        function constNoSmartPtrRawPointerToWireType(destructors, handle) {
          if (handle === null) {
            if (this.isReference) {
              throwBindingError("null is not a valid " + this.name);
            }
            return 0;
          }
          if (!handle.$$) {
            throwBindingError('Cannot pass "' + embindRepr(handle) + '" as a ' + this.name);
          }
          if (!handle.$$.ptr) {
            throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
          }
          var handleClass = handle.$$.ptrType.registeredClass;
          var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
          return ptr;
        }
        function genericPointerToWireType(destructors, handle) {
          var ptr;
          if (handle === null) {
            if (this.isReference) {
              throwBindingError("null is not a valid " + this.name);
            }
            if (this.isSmartPointer) {
              ptr = this.rawConstructor();
              if (destructors !== null) {
                destructors.push(this.rawDestructor, ptr);
              }
              return ptr;
            } else {
              return 0;
            }
          }
          if (!handle.$$) {
            throwBindingError('Cannot pass "' + embindRepr(handle) + '" as a ' + this.name);
          }
          if (!handle.$$.ptr) {
            throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
          }
          if (!this.isConst && handle.$$.ptrType.isConst) {
            throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
          }
          var handleClass = handle.$$.ptrType.registeredClass;
          ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
          if (this.isSmartPointer) {
            if (void 0 === handle.$$.smartPtr) {
              throwBindingError("Passing raw pointer to smart pointer is illegal");
            }
            switch (this.sharingPolicy) {
              case 0:
                if (handle.$$.smartPtrType === this) {
                  ptr = handle.$$.smartPtr;
                } else {
                  throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
                }
                break;
              case 1:
                ptr = handle.$$.smartPtr;
                break;
              case 2:
                if (handle.$$.smartPtrType === this) {
                  ptr = handle.$$.smartPtr;
                } else {
                  var clonedHandle = handle["clone"]();
                  ptr = this.rawShare(
                    ptr,
                    Emval.toHandle(function() {
                      clonedHandle["delete"]();
                    })
                  );
                  if (destructors !== null) {
                    destructors.push(this.rawDestructor, ptr);
                  }
                }
                break;
              default:
                throwBindingError("Unsupporting sharing policy");
            }
          }
          return ptr;
        }
        function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
          if (handle === null) {
            if (this.isReference) {
              throwBindingError("null is not a valid " + this.name);
            }
            return 0;
          }
          if (!handle.$$) {
            throwBindingError('Cannot pass "' + embindRepr(handle) + '" as a ' + this.name);
          }
          if (!handle.$$.ptr) {
            throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
          }
          if (handle.$$.ptrType.isConst) {
            throwBindingError("Cannot convert argument of type " + handle.$$.ptrType.name + " to parameter type " + this.name);
          }
          var handleClass = handle.$$.ptrType.registeredClass;
          var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
          return ptr;
        }
        function RegisteredPointer_getPointee(ptr) {
          if (this.rawGetPointee) {
            ptr = this.rawGetPointee(ptr);
          }
          return ptr;
        }
        function RegisteredPointer_destructor(ptr) {
          if (this.rawDestructor) {
            this.rawDestructor(ptr);
          }
        }
        function RegisteredPointer_deleteObject(handle) {
          if (handle !== null) {
            handle["delete"]();
          }
        }
        function init_RegisteredPointer() {
          RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
          RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
          RegisteredPointer.prototype["argPackAdvance"] = 8;
          RegisteredPointer.prototype["readValueFromPointer"] = simpleReadValueFromPointer;
          RegisteredPointer.prototype["deleteObject"] = RegisteredPointer_deleteObject;
          RegisteredPointer.prototype["fromWireType"] = RegisteredPointer_fromWireType;
        }
        function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
          this.name = name;
          this.registeredClass = registeredClass;
          this.isReference = isReference;
          this.isConst = isConst;
          this.isSmartPointer = isSmartPointer;
          this.pointeeType = pointeeType;
          this.sharingPolicy = sharingPolicy;
          this.rawGetPointee = rawGetPointee;
          this.rawConstructor = rawConstructor;
          this.rawShare = rawShare;
          this.rawDestructor = rawDestructor;
          if (!isSmartPointer && registeredClass.baseClass === void 0) {
            if (isConst) {
              this["toWireType"] = constNoSmartPtrRawPointerToWireType;
              this.destructorFunction = null;
            } else {
              this["toWireType"] = nonConstNoSmartPtrRawPointerToWireType;
              this.destructorFunction = null;
            }
          } else {
            this["toWireType"] = genericPointerToWireType;
          }
        }
        function replacePublicSymbol(name, value, numArguments) {
          if (!Module2.hasOwnProperty(name)) {
            throwInternalError("Replacing nonexistant public symbol");
          }
          if (void 0 !== Module2[name].overloadTable && void 0 !== numArguments) {
            Module2[name].overloadTable[numArguments] = value;
          } else {
            Module2[name] = value;
            Module2[name].argCount = numArguments;
          }
        }
        function dynCallLegacy(sig, ptr, args) {
          var f = Module2["dynCall_" + sig];
          return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr);
        }
        function dynCall(sig, ptr, args) {
          if (sig.includes("j")) {
            return dynCallLegacy(sig, ptr, args);
          }
          var rtn = getWasmTableEntry(ptr).apply(null, args);
          return rtn;
        }
        function getDynCaller(sig, ptr) {
          var argCache = [];
          return function() {
            argCache.length = 0;
            Object.assign(argCache, arguments);
            return dynCall(sig, ptr, argCache);
          };
        }
        function embind__requireFunction(signature, rawFunction) {
          signature = readLatin1String(signature);
          function makeDynCaller() {
            if (signature.includes("j")) {
              return getDynCaller(signature, rawFunction);
            }
            return getWasmTableEntry(rawFunction);
          }
          var fp = makeDynCaller();
          if (typeof fp != "function") {
            throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
          }
          return fp;
        }
        var UnboundTypeError = void 0;
        function getTypeName(type) {
          var ptr = ___getTypeName(type);
          var rv = readLatin1String(ptr);
          _free(ptr);
          return rv;
        }
        function throwUnboundTypeError(message, types) {
          var unboundTypes = [];
          var seen = {};
          function visit(type) {
            if (seen[type]) {
              return;
            }
            if (registeredTypes[type]) {
              return;
            }
            if (typeDependencies[type]) {
              typeDependencies[type].forEach(visit);
              return;
            }
            unboundTypes.push(type);
            seen[type] = true;
          }
          types.forEach(visit);
          throw new UnboundTypeError(message + ": " + unboundTypes.map(getTypeName).join([", "]));
        }
        function __embind_register_class(rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) {
          name = readLatin1String(name);
          getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
          if (upcast) {
            upcast = embind__requireFunction(upcastSignature, upcast);
          }
          if (downcast) {
            downcast = embind__requireFunction(downcastSignature, downcast);
          }
          rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
          var legalFunctionName = makeLegalFunctionName(name);
          exposePublicSymbol(legalFunctionName, function() {
            throwUnboundTypeError("Cannot construct " + name + " due to unbound types", [baseClassRawType]);
          });
          whenDependentTypesAreResolved(
            [rawType, rawPointerType, rawConstPointerType],
            baseClassRawType ? [baseClassRawType] : [],
            function(base) {
              base = base[0];
              var baseClass;
              var basePrototype;
              if (baseClassRawType) {
                baseClass = base.registeredClass;
                basePrototype = baseClass.instancePrototype;
              } else {
                basePrototype = ClassHandle.prototype;
              }
              var constructor = createNamedFunction(legalFunctionName, function() {
                if (Object.getPrototypeOf(this) !== instancePrototype) {
                  throw new BindingError("Use 'new' to construct " + name);
                }
                if (void 0 === registeredClass.constructor_body) {
                  throw new BindingError(name + " has no accessible constructor");
                }
                var body = registeredClass.constructor_body[arguments.length];
                if (void 0 === body) {
                  throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!");
                }
                return body.apply(this, arguments);
              });
              var instancePrototype = Object.create(basePrototype, {
                constructor: { value: constructor }
              });
              constructor.prototype = instancePrototype;
              var registeredClass = new RegisteredClass(
                name,
                constructor,
                instancePrototype,
                rawDestructor,
                baseClass,
                getActualType,
                upcast,
                downcast
              );
              var referenceConverter = new RegisteredPointer(
                name,
                registeredClass,
                true,
                false,
                false
              );
              var pointerConverter = new RegisteredPointer(
                name + "*",
                registeredClass,
                false,
                false,
                false
              );
              var constPointerConverter = new RegisteredPointer(
                name + " const*",
                registeredClass,
                false,
                true,
                false
              );
              registeredPointers[rawType] = {
                pointerType: pointerConverter,
                constPointerType: constPointerConverter
              };
              replacePublicSymbol(legalFunctionName, constructor);
              return [referenceConverter, pointerConverter, constPointerConverter];
            }
          );
        }
        function heap32VectorToArray(count, firstElement) {
          var array = [];
          for (var i = 0; i < count; i++) {
            array.push(HEAPU32[firstElement + i * 4 >> 2]);
          }
          return array;
        }
        function new_(constructor, argumentList) {
          if (!(constructor instanceof Function)) {
            throw new TypeError("new_ called with constructor type " + typeof constructor + " which is not a function");
          }
          var dummy = createNamedFunction(constructor.name || "unknownFunctionName", function() {
          });
          dummy.prototype = constructor.prototype;
          var obj2 = new dummy();
          var r = constructor.apply(obj2, argumentList);
          return r instanceof Object ? r : obj2;
        }
        function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
          var argCount = argTypes.length;
          if (argCount < 2) {
            throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
          }
          var isClassMethodFunc = argTypes[1] !== null && classType !== null;
          var needsDestructorStack = false;
          for (var i = 1; i < argTypes.length; ++i) {
            if (argTypes[i] !== null && argTypes[i].destructorFunction === void 0) {
              needsDestructorStack = true;
              break;
            }
          }
          var returns = argTypes[0].name !== "void";
          var argsList = "";
          var argsListWired = "";
          for (var i = 0; i < argCount - 2; ++i) {
            argsList += (i !== 0 ? ", " : "") + "arg" + i;
            argsListWired += (i !== 0 ? ", " : "") + "arg" + i + "Wired";
          }
          var invokerFnBody = "return function " + makeLegalFunctionName(humanName) + "(" + argsList + ") {\nif (arguments.length !== " + (argCount - 2) + ") {\nthrowBindingError('function " + humanName + " called with ' + arguments.length + ' arguments, expected " + (argCount - 2) + " args!');\n}\n";
          if (needsDestructorStack) {
            invokerFnBody += "var destructors = [];\n";
          }
          var dtorStack = needsDestructorStack ? "destructors" : "null";
          var args1 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
          var args2 = [throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, argTypes[0], argTypes[1]];
          if (isClassMethodFunc) {
            invokerFnBody += "var thisWired = classParam.toWireType(" + dtorStack + ", this);\n";
          }
          for (var i = 0; i < argCount - 2; ++i) {
            invokerFnBody += "var arg" + i + "Wired = argType" + i + ".toWireType(" + dtorStack + ", arg" + i + "); // " + argTypes[i + 2].name + "\n";
            args1.push("argType" + i);
            args2.push(argTypes[i + 2]);
          }
          if (isClassMethodFunc) {
            argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired;
          }
          invokerFnBody += (returns ? "var rv = " : "") + "invoker(fn" + (argsListWired.length > 0 ? ", " : "") + argsListWired + ");\n";
          if (needsDestructorStack) {
            invokerFnBody += "runDestructors(destructors);\n";
          } else {
            for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
              var paramName = i === 1 ? "thisWired" : "arg" + (i - 2) + "Wired";
              if (argTypes[i].destructorFunction !== null) {
                invokerFnBody += paramName + "_dtor(" + paramName + "); // " + argTypes[i].name + "\n";
                args1.push(paramName + "_dtor");
                args2.push(argTypes[i].destructorFunction);
              }
            }
          }
          if (returns) {
            invokerFnBody += "var ret = retType.fromWireType(rv);\nreturn ret;\n";
          } else {
          }
          invokerFnBody += "}\n";
          args1.push(invokerFnBody);
          var invokerFunction = new_(Function, args1).apply(null, args2);
          return invokerFunction;
        }
        function __embind_register_class_constructor(rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) {
          assert(argCount > 0);
          var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
          invoker = embind__requireFunction(invokerSignature, invoker);
          var args = [rawConstructor];
          var destructors = [];
          whenDependentTypesAreResolved([], [rawClassType], function(classType) {
            classType = classType[0];
            var humanName = "constructor " + classType.name;
            if (void 0 === classType.registeredClass.constructor_body) {
              classType.registeredClass.constructor_body = [];
            }
            if (void 0 !== classType.registeredClass.constructor_body[argCount - 1]) {
              throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount - 1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
            }
            classType.registeredClass.constructor_body[argCount - 1] = () => {
              throwUnboundTypeError("Cannot construct " + classType.name + " due to unbound types", rawArgTypes);
            };
            whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
              argTypes.splice(1, 0, null);
              classType.registeredClass.constructor_body[argCount - 1] = craftInvokerFunction(humanName, argTypes, null, invoker, rawConstructor);
              return [];
            });
            return [];
          });
        }
        function __embind_register_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual) {
          var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
          methodName = readLatin1String(methodName);
          rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
          whenDependentTypesAreResolved([], [rawClassType], function(classType) {
            classType = classType[0];
            var humanName = classType.name + "." + methodName;
            if (methodName.startsWith("@@")) {
              methodName = Symbol[methodName.substring(2)];
            }
            if (isPureVirtual) {
              classType.registeredClass.pureVirtualFunctions.push(methodName);
            }
            function unboundTypesHandler() {
              throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes);
            }
            var proto = classType.registeredClass.instancePrototype;
            var method = proto[methodName];
            if (void 0 === method || void 0 === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2) {
              unboundTypesHandler.argCount = argCount - 2;
              unboundTypesHandler.className = classType.name;
              proto[methodName] = unboundTypesHandler;
            } else {
              ensureOverloadTable(proto, methodName, humanName);
              proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
            }
            whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
              var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);
              if (void 0 === proto[methodName].overloadTable) {
                memberFunction.argCount = argCount - 2;
                proto[methodName] = memberFunction;
              } else {
                proto[methodName].overloadTable[argCount - 2] = memberFunction;
              }
              return [];
            });
            return [];
          });
        }
        var emval_free_list = [];
        var emval_handle_array = [{}, { value: void 0 }, { value: null }, { value: true }, { value: false }];
        function __emval_decref(handle) {
          if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
            emval_handle_array[handle] = void 0;
            emval_free_list.push(handle);
          }
        }
        function count_emval_handles() {
          var count = 0;
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== void 0) {
              ++count;
            }
          }
          return count;
        }
        function get_first_emval() {
          for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== void 0) {
              return emval_handle_array[i];
            }
          }
          return null;
        }
        function init_emval() {
          Module2["count_emval_handles"] = count_emval_handles;
          Module2["get_first_emval"] = get_first_emval;
        }
        var Emval = { toValue: (handle) => {
          if (!handle) {
            throwBindingError("Cannot use deleted val. handle = " + handle);
          }
          return emval_handle_array[handle].value;
        }, toHandle: (value) => {
          switch (value) {
            case void 0:
              return 1;
            case null:
              return 2;
            case true:
              return 3;
            case false:
              return 4;
            default: {
              var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
              emval_handle_array[handle] = { refcount: 1, value };
              return handle;
            }
          }
        } };
        function __embind_register_emval(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            "fromWireType": function(handle) {
              var rv = Emval.toValue(handle);
              __emval_decref(handle);
              return rv;
            },
            "toWireType": function(destructors, value) {
              return Emval.toHandle(value);
            },
            "argPackAdvance": 8,
            "readValueFromPointer": simpleReadValueFromPointer,
            destructorFunction: null
            // This type does not need a destructor
            // TODO: do we need a deleteObject here?  write a test where
            // emval is passed into JS via an interface
          });
        }
        function embindRepr(v) {
          if (v === null) {
            return "null";
          }
          var t = typeof v;
          if (t === "object" || t === "array" || t === "function") {
            return v.toString();
          } else {
            return "" + v;
          }
        }
        function floatReadValueFromPointer(name, shift) {
          switch (shift) {
            case 2:
              return function(pointer) {
                return this["fromWireType"](HEAPF32[pointer >> 2]);
              };
            case 3:
              return function(pointer) {
                return this["fromWireType"](HEAPF64[pointer >> 3]);
              };
            default:
              throw new TypeError("Unknown float type: " + name);
          }
        }
        function __embind_register_float(rawType, name, size) {
          var shift = getShiftFromSize(size);
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            "fromWireType": function(value) {
              return value;
            },
            "toWireType": function(destructors, value) {
              return value;
            },
            "argPackAdvance": 8,
            "readValueFromPointer": floatReadValueFromPointer(name, shift),
            destructorFunction: null
            // This type does not need a destructor
          });
        }
        function __embind_register_function(name, argCount, rawArgTypesAddr, signature, rawInvoker, fn) {
          var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
          name = readLatin1String(name);
          rawInvoker = embind__requireFunction(signature, rawInvoker);
          exposePublicSymbol(name, function() {
            throwUnboundTypeError("Cannot call " + name + " due to unbound types", argTypes);
          }, argCount - 1);
          whenDependentTypesAreResolved([], argTypes, function(argTypes2) {
            var invokerArgsArray = [
              argTypes2[0],
              null
              /* no class 'this'*/
            ].concat(
              argTypes2.slice(1)
              /* actual params */
            );
            replacePublicSymbol(name, craftInvokerFunction(name, invokerArgsArray, null, rawInvoker, fn), argCount - 1);
            return [];
          });
        }
        function integerReadValueFromPointer(name, shift, signed) {
          switch (shift) {
            case 0:
              return signed ? function readS8FromPointer(pointer) {
                return HEAP8[pointer];
              } : function readU8FromPointer(pointer) {
                return HEAPU8[pointer];
              };
            case 1:
              return signed ? function readS16FromPointer(pointer) {
                return HEAP16[pointer >> 1];
              } : function readU16FromPointer(pointer) {
                return HEAPU16[pointer >> 1];
              };
            case 2:
              return signed ? function readS32FromPointer(pointer) {
                return HEAP32[pointer >> 2];
              } : function readU32FromPointer(pointer) {
                return HEAPU32[pointer >> 2];
              };
            default:
              throw new TypeError("Unknown integer type: " + name);
          }
        }
        function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
          name = readLatin1String(name);
          if (maxRange === -1) {
            maxRange = 4294967295;
          }
          var shift = getShiftFromSize(size);
          var fromWireType = (value) => value;
          if (minRange === 0) {
            var bitshift = 32 - 8 * size;
            fromWireType = (value) => value << bitshift >>> bitshift;
          }
          var isUnsignedType = name.includes("unsigned");
          var checkAssertions = (value, toTypeName) => {
          };
          var toWireType;
          if (isUnsignedType) {
            toWireType = function(destructors, value) {
              checkAssertions(value, this.name);
              return value >>> 0;
            };
          } else {
            toWireType = function(destructors, value) {
              checkAssertions(value, this.name);
              return value;
            };
          }
          registerType(primitiveType, {
            name,
            "fromWireType": fromWireType,
            "toWireType": toWireType,
            "argPackAdvance": 8,
            "readValueFromPointer": integerReadValueFromPointer(name, shift, minRange !== 0),
            destructorFunction: null
            // This type does not need a destructor
          });
        }
        function __embind_register_memory_view(rawType, dataTypeIndex, name) {
          var typeMapping = [
            Int8Array,
            Uint8Array,
            Int16Array,
            Uint16Array,
            Int32Array,
            Uint32Array,
            Float32Array,
            Float64Array
          ];
          var TA = typeMapping[dataTypeIndex];
          function decodeMemoryView(handle) {
            handle = handle >> 2;
            var heap = HEAPU32;
            var size = heap[handle];
            var data = heap[handle + 1];
            return new TA(buffer, data, size);
          }
          name = readLatin1String(name);
          registerType(rawType, {
            name,
            "fromWireType": decodeMemoryView,
            "argPackAdvance": 8,
            "readValueFromPointer": decodeMemoryView
          }, {
            ignoreDuplicateRegistrations: true
          });
        }
        function __embind_register_std_string(rawType, name) {
          name = readLatin1String(name);
          var stdStringIsUTF8 = name === "std::string";
          registerType(rawType, {
            name,
            "fromWireType": function(value) {
              var length = HEAPU32[value >> 2];
              var payload = value + 4;
              var str;
              if (stdStringIsUTF8) {
                var decodeStartPtr = payload;
                for (var i = 0; i <= length; ++i) {
                  var currentBytePtr = payload + i;
                  if (i == length || HEAPU8[currentBytePtr] == 0) {
                    var maxRead = currentBytePtr - decodeStartPtr;
                    var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                    if (str === void 0) {
                      str = stringSegment;
                    } else {
                      str += String.fromCharCode(0);
                      str += stringSegment;
                    }
                    decodeStartPtr = currentBytePtr + 1;
                  }
                }
              } else {
                var a = new Array(length);
                for (var i = 0; i < length; ++i) {
                  a[i] = String.fromCharCode(HEAPU8[payload + i]);
                }
                str = a.join("");
              }
              _free(value);
              return str;
            },
            "toWireType": function(destructors, value) {
              if (value instanceof ArrayBuffer) {
                value = new Uint8Array(value);
              }
              var length;
              var valueIsOfTypeString = typeof value == "string";
              if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
                throwBindingError("Cannot pass non-string to std::string");
              }
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                length = lengthBytesUTF8(value);
              } else {
                length = value.length;
              }
              var base = _malloc(4 + length + 1);
              var ptr = base + 4;
              HEAPU32[base >> 2] = length;
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                stringToUTF8(value, ptr, length + 1);
              } else {
                if (valueIsOfTypeString) {
                  for (var i = 0; i < length; ++i) {
                    var charCode = value.charCodeAt(i);
                    if (charCode > 255) {
                      _free(ptr);
                      throwBindingError("String has UTF-16 code units that do not fit in 8 bits");
                    }
                    HEAPU8[ptr + i] = charCode;
                  }
                } else {
                  for (var i = 0; i < length; ++i) {
                    HEAPU8[ptr + i] = value[i];
                  }
                }
              }
              if (destructors !== null) {
                destructors.push(_free, base);
              }
              return base;
            },
            "argPackAdvance": 8,
            "readValueFromPointer": simpleReadValueFromPointer,
            destructorFunction: function(ptr) {
              _free(ptr);
            }
          });
        }
        var UTF16Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : void 0;
        ;
        function UTF16ToString(ptr, maxBytesToRead) {
          var endPtr = ptr;
          var idx = endPtr >> 1;
          var maxIdx = idx + maxBytesToRead / 2;
          while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
          endPtr = idx << 1;
          if (endPtr - ptr > 32 && UTF16Decoder)
            return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
          var str = "";
          for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
            var codeUnit = HEAP16[ptr + i * 2 >> 1];
            if (codeUnit == 0) break;
            str += String.fromCharCode(codeUnit);
          }
          return str;
        }
        function stringToUTF16(str, outPtr, maxBytesToWrite) {
          if (maxBytesToWrite === void 0) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 2) return 0;
          maxBytesToWrite -= 2;
          var startPtr = outPtr;
          var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
          for (var i = 0; i < numCharsToWrite; ++i) {
            var codeUnit = str.charCodeAt(i);
            HEAP16[outPtr >> 1] = codeUnit;
            outPtr += 2;
          }
          HEAP16[outPtr >> 1] = 0;
          return outPtr - startPtr;
        }
        function lengthBytesUTF16(str) {
          return str.length * 2;
        }
        function UTF32ToString(ptr, maxBytesToRead) {
          var i = 0;
          var str = "";
          while (!(i >= maxBytesToRead / 4)) {
            var utf32 = HEAP32[ptr + i * 4 >> 2];
            if (utf32 == 0) break;
            ++i;
            if (utf32 >= 65536) {
              var ch = utf32 - 65536;
              str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            } else {
              str += String.fromCharCode(utf32);
            }
          }
          return str;
        }
        function stringToUTF32(str, outPtr, maxBytesToWrite) {
          if (maxBytesToWrite === void 0) {
            maxBytesToWrite = 2147483647;
          }
          if (maxBytesToWrite < 4) return 0;
          var startPtr = outPtr;
          var endPtr = startPtr + maxBytesToWrite - 4;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) {
              var trailSurrogate = str.charCodeAt(++i);
              codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
            }
            HEAP32[outPtr >> 2] = codeUnit;
            outPtr += 4;
            if (outPtr + 4 > endPtr) break;
          }
          HEAP32[outPtr >> 2] = 0;
          return outPtr - startPtr;
        }
        function lengthBytesUTF32(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
            len += 4;
          }
          return len;
        }
        function __embind_register_std_wstring(rawType, charSize, name) {
          name = readLatin1String(name);
          var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
          if (charSize === 2) {
            decodeString = UTF16ToString;
            encodeString = stringToUTF16;
            lengthBytesUTF = lengthBytesUTF16;
            getHeap = () => HEAPU16;
            shift = 1;
          } else if (charSize === 4) {
            decodeString = UTF32ToString;
            encodeString = stringToUTF32;
            lengthBytesUTF = lengthBytesUTF32;
            getHeap = () => HEAPU32;
            shift = 2;
          }
          registerType(rawType, {
            name,
            "fromWireType": function(value) {
              var length = HEAPU32[value >> 2];
              var HEAP2 = getHeap();
              var str;
              var decodeStartPtr = value + 4;
              for (var i = 0; i <= length; ++i) {
                var currentBytePtr = value + 4 + i * charSize;
                if (i == length || HEAP2[currentBytePtr >> shift] == 0) {
                  var maxReadBytes = currentBytePtr - decodeStartPtr;
                  var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
                  if (str === void 0) {
                    str = stringSegment;
                  } else {
                    str += String.fromCharCode(0);
                    str += stringSegment;
                  }
                  decodeStartPtr = currentBytePtr + charSize;
                }
              }
              _free(value);
              return str;
            },
            "toWireType": function(destructors, value) {
              if (!(typeof value == "string")) {
                throwBindingError("Cannot pass non-string to C++ string type " + name);
              }
              var length = lengthBytesUTF(value);
              var ptr = _malloc(4 + length + charSize);
              HEAPU32[ptr >> 2] = length >> shift;
              encodeString(value, ptr + 4, length + charSize);
              if (destructors !== null) {
                destructors.push(_free, ptr);
              }
              return ptr;
            },
            "argPackAdvance": 8,
            "readValueFromPointer": simpleReadValueFromPointer,
            destructorFunction: function(ptr) {
              _free(ptr);
            }
          });
        }
        function __embind_register_value_object(rawType, name, constructorSignature, rawConstructor, destructorSignature, rawDestructor) {
          structRegistrations[rawType] = {
            name: readLatin1String(name),
            rawConstructor: embind__requireFunction(constructorSignature, rawConstructor),
            rawDestructor: embind__requireFunction(destructorSignature, rawDestructor),
            fields: []
          };
        }
        function __embind_register_value_object_field(structType, fieldName, getterReturnType, getterSignature, getter, getterContext, setterArgumentType, setterSignature, setter, setterContext) {
          structRegistrations[structType].fields.push({
            fieldName: readLatin1String(fieldName),
            getterReturnType,
            getter: embind__requireFunction(getterSignature, getter),
            getterContext,
            setterArgumentType,
            setter: embind__requireFunction(setterSignature, setter),
            setterContext
          });
        }
        function __embind_register_void(rawType, name) {
          name = readLatin1String(name);
          registerType(rawType, {
            isVoid: true,
            // void return values can be optimized out sometimes
            name,
            "argPackAdvance": 0,
            "fromWireType": function() {
              return void 0;
            },
            "toWireType": function(destructors, o) {
              return void 0;
            }
          });
        }
        function __emval_incref(handle) {
          if (handle > 4) {
            emval_handle_array[handle].refcount += 1;
          }
        }
        function requireRegisteredType(rawType, humanName) {
          var impl = registeredTypes[rawType];
          if (void 0 === impl) {
            throwBindingError(humanName + " has unknown type " + getTypeName(rawType));
          }
          return impl;
        }
        function __emval_take_value(type, arg) {
          type = requireRegisteredType(type, "_emval_take_value");
          var v = type["readValueFromPointer"](arg);
          return Emval.toHandle(v);
        }
        function _abort() {
          abort("");
        }
        function _emscripten_memcpy_big(dest, src, num) {
          HEAPU8.copyWithin(dest, src, src + num);
        }
        function getHeapMax() {
          return 2147483648;
        }
        function emscripten_realloc_buffer(size) {
          try {
            wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
            updateGlobalBufferAndViews(wasmMemory.buffer);
            return 1;
          } catch (e) {
          }
        }
        function _emscripten_resize_heap(requestedSize) {
          var oldSize = HEAPU8.length;
          requestedSize = requestedSize >>> 0;
          var maxHeapSize = getHeapMax();
          if (requestedSize > maxHeapSize) {
            return false;
          }
          let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
            var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
            var replacement = emscripten_realloc_buffer(newSize);
            if (replacement) {
              return true;
            }
          }
          return false;
        }
        var SYSCALLS = { varargs: void 0, get: function() {
          SYSCALLS.varargs += 4;
          var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
          return ret;
        }, getStr: function(ptr) {
          var ret = UTF8ToString(ptr);
          return ret;
        } };
        function _fd_close(fd) {
          return 52;
        }
        function convertI32PairToI53Checked(lo, hi) {
          return hi + 2097152 >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN;
        }
        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
          return 70;
        }
        var printCharBuffers = [null, [], []];
        function printChar(stream, curr) {
          var buffer2 = printCharBuffers[stream];
          if (curr === 0 || curr === 10) {
            (stream === 1 ? out : err)(UTF8ArrayToString(buffer2, 0));
            buffer2.length = 0;
          } else {
            buffer2.push(curr);
          }
        }
        function flush_NO_FILESYSTEM() {
          if (printCharBuffers[1].length) printChar(1, 10);
          if (printCharBuffers[2].length) printChar(2, 10);
        }
        function _fd_write(fd, iov, iovcnt, pnum) {
          var num = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAPU32[iov >> 2];
            var len = HEAPU32[iov + 4 >> 2];
            iov += 8;
            for (var j = 0; j < len; j++) {
              printChar(fd, HEAPU8[ptr + j]);
            }
            num += len;
          }
          HEAPU32[pnum >> 2] = num;
          return 0;
        }
        function _llvm_eh_typeid_for(type) {
          return type;
        }
        function getCFunc(ident) {
          var func = Module2["_" + ident];
          return func;
        }
        function writeArrayToMemory(array, buffer2) {
          HEAP8.set(array, buffer2);
        }
        function ccall(ident, returnType, argTypes, args, opts) {
          var toC = {
            "string": (str) => {
              var ret2 = 0;
              if (str !== null && str !== void 0 && str !== 0) {
                var len = (str.length << 2) + 1;
                ret2 = stackAlloc(len);
                stringToUTF8(str, ret2, len);
              }
              return ret2;
            },
            "array": (arr) => {
              var ret2 = stackAlloc(arr.length);
              writeArrayToMemory(arr, ret2);
              return ret2;
            }
          };
          function convertReturnValue(ret2) {
            if (returnType === "string") {
              return UTF8ToString(ret2);
            }
            if (returnType === "boolean") return Boolean(ret2);
            return ret2;
          }
          var func = getCFunc(ident);
          var cArgs = [];
          var stack = 0;
          if (args) {
            for (var i = 0; i < args.length; i++) {
              var converter = toC[argTypes[i]];
              if (converter) {
                if (stack === 0) stack = stackSave();
                cArgs[i] = converter(args[i]);
              } else {
                cArgs[i] = args[i];
              }
            }
          }
          var ret = func.apply(null, cArgs);
          function onDone(ret2) {
            if (stack !== 0) stackRestore(stack);
            return convertReturnValue(ret2);
          }
          ret = onDone(ret);
          return ret;
        }
        InternalError = Module2["InternalError"] = extendError(Error, "InternalError");
        ;
        embind_init_charCodes();
        BindingError = Module2["BindingError"] = extendError(Error, "BindingError");
        ;
        init_ClassHandle();
        init_embind();
        ;
        init_RegisteredPointer();
        UnboundTypeError = Module2["UnboundTypeError"] = extendError(Error, "UnboundTypeError");
        ;
        init_emval();
        ;
        var ASSERTIONS = false;
        var asmLibraryArg = {
          "__assert_fail": ___assert_fail,
          "__cxa_begin_catch": ___cxa_begin_catch,
          "__cxa_end_catch": ___cxa_end_catch,
          "__cxa_find_matching_catch_2": ___cxa_find_matching_catch_2,
          "__cxa_find_matching_catch_3": ___cxa_find_matching_catch_3,
          "__cxa_throw": ___cxa_throw,
          "__resumeException": ___resumeException,
          "_embind_finalize_value_object": __embind_finalize_value_object,
          "_embind_register_bigint": __embind_register_bigint,
          "_embind_register_bool": __embind_register_bool,
          "_embind_register_class": __embind_register_class,
          "_embind_register_class_constructor": __embind_register_class_constructor,
          "_embind_register_class_function": __embind_register_class_function,
          "_embind_register_emval": __embind_register_emval,
          "_embind_register_float": __embind_register_float,
          "_embind_register_function": __embind_register_function,
          "_embind_register_integer": __embind_register_integer,
          "_embind_register_memory_view": __embind_register_memory_view,
          "_embind_register_std_string": __embind_register_std_string,
          "_embind_register_std_wstring": __embind_register_std_wstring,
          "_embind_register_value_object": __embind_register_value_object,
          "_embind_register_value_object_field": __embind_register_value_object_field,
          "_embind_register_void": __embind_register_void,
          "_emval_decref": __emval_decref,
          "_emval_incref": __emval_incref,
          "_emval_take_value": __emval_take_value,
          "abort": _abort,
          "emscripten_memcpy_big": _emscripten_memcpy_big,
          "emscripten_resize_heap": _emscripten_resize_heap,
          "fd_close": _fd_close,
          "fd_seek": _fd_seek,
          "fd_write": _fd_write,
          "invoke_i": invoke_i,
          "invoke_ii": invoke_ii,
          "invoke_iii": invoke_iii,
          "invoke_iiii": invoke_iiii,
          "invoke_v": invoke_v,
          "invoke_vi": invoke_vi,
          "invoke_viiii": invoke_viiii,
          "invoke_viiiiii": invoke_viiiiii,
          "llvm_eh_typeid_for": _llvm_eh_typeid_for
        };
        var asm = createWasm();
        var ___wasm_call_ctors = Module2["___wasm_call_ctors"] = function() {
          return (___wasm_call_ctors = Module2["___wasm_call_ctors"] = Module2["asm"]["__wasm_call_ctors"]).apply(null, arguments);
        };
        var _malloc = Module2["_malloc"] = function() {
          return (_malloc = Module2["_malloc"] = Module2["asm"]["malloc"]).apply(null, arguments);
        };
        var _free = Module2["_free"] = function() {
          return (_free = Module2["_free"] = Module2["asm"]["free"]).apply(null, arguments);
        };
        var ___cxa_free_exception = Module2["___cxa_free_exception"] = function() {
          return (___cxa_free_exception = Module2["___cxa_free_exception"] = Module2["asm"]["__cxa_free_exception"]).apply(null, arguments);
        };
        var ___getTypeName = Module2["___getTypeName"] = function() {
          return (___getTypeName = Module2["___getTypeName"] = Module2["asm"]["__getTypeName"]).apply(null, arguments);
        };
        var __embind_initialize_bindings = Module2["__embind_initialize_bindings"] = function() {
          return (__embind_initialize_bindings = Module2["__embind_initialize_bindings"] = Module2["asm"]["_embind_initialize_bindings"]).apply(null, arguments);
        };
        var ___errno_location = Module2["___errno_location"] = function() {
          return (___errno_location = Module2["___errno_location"] = Module2["asm"]["__errno_location"]).apply(null, arguments);
        };
        var setTempRet0 = Module2["setTempRet0"] = function() {
          return (setTempRet0 = Module2["setTempRet0"] = Module2["asm"]["setTempRet0"]).apply(null, arguments);
        };
        var stackSave = Module2["stackSave"] = function() {
          return (stackSave = Module2["stackSave"] = Module2["asm"]["stackSave"]).apply(null, arguments);
        };
        var stackRestore = Module2["stackRestore"] = function() {
          return (stackRestore = Module2["stackRestore"] = Module2["asm"]["stackRestore"]).apply(null, arguments);
        };
        var stackAlloc = Module2["stackAlloc"] = function() {
          return (stackAlloc = Module2["stackAlloc"] = Module2["asm"]["stackAlloc"]).apply(null, arguments);
        };
        var ___cxa_can_catch = Module2["___cxa_can_catch"] = function() {
          return (___cxa_can_catch = Module2["___cxa_can_catch"] = Module2["asm"]["__cxa_can_catch"]).apply(null, arguments);
        };
        var ___cxa_is_pointer_type = Module2["___cxa_is_pointer_type"] = function() {
          return (___cxa_is_pointer_type = Module2["___cxa_is_pointer_type"] = Module2["asm"]["__cxa_is_pointer_type"]).apply(null, arguments);
        };
        var dynCall_ji = Module2["dynCall_ji"] = function() {
          return (dynCall_ji = Module2["dynCall_ji"] = Module2["asm"]["dynCall_ji"]).apply(null, arguments);
        };
        var dynCall_iiji = Module2["dynCall_iiji"] = function() {
          return (dynCall_iiji = Module2["dynCall_iiji"] = Module2["asm"]["dynCall_iiji"]).apply(null, arguments);
        };
        var dynCall_jiji = Module2["dynCall_jiji"] = function() {
          return (dynCall_jiji = Module2["dynCall_jiji"] = Module2["asm"]["dynCall_jiji"]).apply(null, arguments);
        };
        function invoke_ii(index, a1) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_vi(index, a1) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiii(index, a1, a2, a3, a4) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_v(index) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)();
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iiii(index, a1, a2, a3) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2, a3);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_i(index) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)();
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
          var sp = stackSave();
          try {
            getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        function invoke_iii(index, a1, a2) {
          var sp = stackSave();
          try {
            return getWasmTableEntry(index)(a1, a2);
          } catch (e) {
            stackRestore(sp);
            if (e !== e + 0) throw e;
            _setThrew(1, 0);
          }
        }
        Module2["ccall"] = ccall;
        var calledRun;
        dependenciesFulfilled = function runCaller() {
          if (!calledRun) run();
          if (!calledRun) dependenciesFulfilled = runCaller;
        };
        function run(args) {
          args = args || arguments_;
          if (runDependencies > 0) {
            return;
          }
          preRun();
          if (runDependencies > 0) {
            return;
          }
          function doRun() {
            if (calledRun) return;
            calledRun = true;
            Module2["calledRun"] = true;
            if (ABORT) return;
            initRuntime();
            readyPromiseResolve(Module2);
            if (Module2["onRuntimeInitialized"]) Module2["onRuntimeInitialized"]();
            postRun();
          }
          if (Module2["setStatus"]) {
            Module2["setStatus"]("Running...");
            setTimeout(function() {
              setTimeout(function() {
                Module2["setStatus"]("");
              }, 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
        }
        if (Module2["preInit"]) {
          if (typeof Module2["preInit"] == "function") Module2["preInit"] = [Module2["preInit"]];
          while (Module2["preInit"].length > 0) {
            Module2["preInit"].pop()();
          }
        }
        run();
        return Module2.ready;
      };
    })();
    if (typeof exports === "object" && typeof module === "object")
      module.exports = Module;
    else if (typeof define === "function" && define["amd"])
      define([], function() {
        return Module;
      });
    else if (typeof exports === "object")
      exports["Module"] = Module;
  }
});

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/colorSpaceConverters/convertRGBColorByPixel.js
function convertRGBColorByPixel_default(imageFrame, colorBuffer, useRGBA) {
  if (imageFrame === void 0) {
    throw new Error("decodeRGB: rgbBuffer must be defined");
  }
  if (imageFrame.length % 3 !== 0) {
    throw new Error(`decodeRGB: rgbBuffer length ${imageFrame.length} must be divisible by 3`);
  }
  const numPixels = imageFrame.length / 3;
  let rgbIndex = 0;
  let bufferIndex = 0;
  if (useRGBA) {
    for (let i = 0; i < numPixels; i++) {
      colorBuffer[bufferIndex++] = imageFrame[rgbIndex++];
      colorBuffer[bufferIndex++] = imageFrame[rgbIndex++];
      colorBuffer[bufferIndex++] = imageFrame[rgbIndex++];
      colorBuffer[bufferIndex++] = 255;
    }
    return;
  }
  colorBuffer.set(imageFrame);
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/colorSpaceConverters/convertRGBColorByPlane.js
function convertRGBColorByPlane_default(imageFrame, colorBuffer, useRGBA) {
  if (imageFrame === void 0) {
    throw new Error("decodeRGB: rgbBuffer must be defined");
  }
  if (imageFrame.length % 3 !== 0) {
    throw new Error(`decodeRGB: rgbBuffer length ${imageFrame.length} must be divisible by 3`);
  }
  const numPixels = imageFrame.length / 3;
  let bufferIndex = 0;
  let rIndex = 0;
  let gIndex = numPixels;
  let bIndex = numPixels * 2;
  if (useRGBA) {
    for (let i = 0; i < numPixels; i++) {
      colorBuffer[bufferIndex++] = imageFrame[rIndex++];
      colorBuffer[bufferIndex++] = imageFrame[gIndex++];
      colorBuffer[bufferIndex++] = imageFrame[bIndex++];
      colorBuffer[bufferIndex++] = 255;
    }
  } else {
    for (let i = 0; i < numPixels; i++) {
      colorBuffer[bufferIndex++] = imageFrame[rIndex++];
      colorBuffer[bufferIndex++] = imageFrame[gIndex++];
      colorBuffer[bufferIndex++] = imageFrame[bIndex++];
    }
  }
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/colorSpaceConverters/convertYBRFullByPixel.js
function convertYBRFullByPixel_default(imageFrame, colorBuffer, useRGBA) {
  if (imageFrame === void 0) {
    throw new Error("convertYBRFullByPixel: ybrBuffer must be defined");
  }
  if (imageFrame.length % 3 !== 0) {
    throw new Error(`convertYBRFullByPixel: ybrBuffer length ${imageFrame.length} must be divisible by 3`);
  }
  const numPixels = imageFrame.length / 3;
  let ybrIndex = 0;
  let bufferIndex = 0;
  if (useRGBA) {
    for (let i = 0; i < numPixels; i++) {
      const y = imageFrame[ybrIndex++];
      const cb = imageFrame[ybrIndex++];
      const cr = imageFrame[ybrIndex++];
      colorBuffer[bufferIndex++] = y + 1.402 * (cr - 128);
      colorBuffer[bufferIndex++] = y - 0.34414 * (cb - 128) - 0.71414 * (cr - 128);
      colorBuffer[bufferIndex++] = y + 1.772 * (cb - 128);
      colorBuffer[bufferIndex++] = 255;
    }
    return;
  }
  for (let i = 0; i < numPixels; i++) {
    const y = imageFrame[ybrIndex++];
    const cb = imageFrame[ybrIndex++];
    const cr = imageFrame[ybrIndex++];
    colorBuffer[bufferIndex++] = y + 1.402 * (cr - 128);
    colorBuffer[bufferIndex++] = y - 0.34414 * (cb - 128) - 0.71414 * (cr - 128);
    colorBuffer[bufferIndex++] = y + 1.772 * (cb - 128);
  }
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/colorSpaceConverters/convertYBRFullByPlane.js
function convertYBRFullByPlane_default(imageFrame, colorBuffer, useRGBA) {
  if (imageFrame === void 0) {
    throw new Error("convertYBRFullByPlane: ybrBuffer must be defined");
  }
  if (imageFrame.length % 3 !== 0) {
    throw new Error(`convertYBRFullByPlane: ybrBuffer length ${imageFrame.length} must be divisible by 3`);
  }
  const numPixels = imageFrame.length / 3;
  let bufferIndex = 0;
  let yIndex = 0;
  let cbIndex = numPixels;
  let crIndex = numPixels * 2;
  if (useRGBA) {
    for (let i = 0; i < numPixels; i++) {
      const y = imageFrame[yIndex++];
      const cb = imageFrame[cbIndex++];
      const cr = imageFrame[crIndex++];
      colorBuffer[bufferIndex++] = y + 1.402 * (cr - 128);
      colorBuffer[bufferIndex++] = y - 0.34414 * (cb - 128) - 0.71414 * (cr - 128);
      colorBuffer[bufferIndex++] = y + 1.772 * (cb - 128);
      colorBuffer[bufferIndex++] = 255;
    }
    return;
  }
  for (let i = 0; i < numPixels; i++) {
    const y = imageFrame[yIndex++];
    const cb = imageFrame[cbIndex++];
    const cr = imageFrame[crIndex++];
    colorBuffer[bufferIndex++] = y + 1.402 * (cr - 128);
    colorBuffer[bufferIndex++] = y - 0.34414 * (cb - 128) - 0.71414 * (cr - 128);
    colorBuffer[bufferIndex++] = y + 1.772 * (cb - 128);
  }
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/colorSpaceConverters/convertYBRFull422ByPixel.js
function convertYBRFull422ByPixel_default(imageFrame, colorBuffer, useRGBA) {
  if (imageFrame === void 0) {
    throw new Error("convertYBRFull422ByPixel: ybrBuffer must be defined");
  }
  if (imageFrame.length % 2 !== 0) {
    throw new Error(`convertYBRFull422ByPixel: ybrBuffer length ${imageFrame.length} must be divisible by 2`);
  }
  const numPixels = imageFrame.length / 2;
  let ybrIndex = 0;
  let bufferIndex = 0;
  if (useRGBA) {
    for (let i = 0; i < numPixels; i += 2) {
      const y1 = imageFrame[ybrIndex++];
      const y2 = imageFrame[ybrIndex++];
      const cb = imageFrame[ybrIndex++];
      const cr = imageFrame[ybrIndex++];
      colorBuffer[bufferIndex++] = y1 + 1.402 * (cr - 128);
      colorBuffer[bufferIndex++] = y1 - 0.34414 * (cb - 128) - 0.71414 * (cr - 128);
      colorBuffer[bufferIndex++] = y1 + 1.772 * (cb - 128);
      colorBuffer[bufferIndex++] = 255;
      colorBuffer[bufferIndex++] = y2 + 1.402 * (cr - 128);
      colorBuffer[bufferIndex++] = y2 - 0.34414 * (cb - 128) - 0.71414 * (cr - 128);
      colorBuffer[bufferIndex++] = y2 + 1.772 * (cb - 128);
      colorBuffer[bufferIndex++] = 255;
    }
    return;
  }
  for (let i = 0; i < numPixels; i += 2) {
    const y1 = imageFrame[ybrIndex++];
    const y2 = imageFrame[ybrIndex++];
    const cb = imageFrame[ybrIndex++];
    const cr = imageFrame[ybrIndex++];
    colorBuffer[bufferIndex++] = y1 + 1.402 * (cr - 128);
    colorBuffer[bufferIndex++] = y1 - 0.34414 * (cb - 128) - 0.71414 * (cr - 128);
    colorBuffer[bufferIndex++] = y1 + 1.772 * (cb - 128);
    colorBuffer[bufferIndex++] = y2 + 1.402 * (cr - 128);
    colorBuffer[bufferIndex++] = y2 - 0.34414 * (cb - 128) - 0.71414 * (cr - 128);
    colorBuffer[bufferIndex++] = y2 + 1.772 * (cb - 128);
  }
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/colorSpaceConverters/convertPALETTECOLOR.js
function convertLUTto8Bit(lut, shift) {
  const numEntries = lut.length;
  const cleanedLUT = new Uint8ClampedArray(numEntries);
  for (let i = 0; i < numEntries; ++i) {
    cleanedLUT[i] = lut[i] >> shift;
  }
  return cleanedLUT;
}
function fetchPaletteData(imageFrame, color, fallback) {
  const data = imageFrame[`${color}PaletteColorLookupTableData`];
  if (data) {
    return Promise.resolve(data);
  }
  const result = metaData_exports.get("imagePixelModule", imageFrame.imageId);
  if (result && typeof result.then === "function") {
    return result.then((module) => module ? module[`${color}PaletteColorLookupTableData`] : fallback);
  } else {
    return Promise.resolve(result ? result[`${color}PaletteColorLookupTableData`] : fallback);
  }
}
function convertPALETTECOLOR_default(imageFrame, colorBuffer, useRGBA) {
  const numPixels = imageFrame.columns * imageFrame.rows;
  const pixelData = imageFrame.pixelData;
  Promise.all([
    fetchPaletteData(imageFrame, "red", null),
    fetchPaletteData(imageFrame, "green", null),
    fetchPaletteData(imageFrame, "blue", null)
  ]).then(([rData, gData, bData]) => {
    if (!rData || !gData || !bData) {
      throw new Error("The image does not have a complete color palette. R, G, and B palette data are required.");
    }
    const len = rData.length;
    let palIndex = 0;
    let bufferIndex = 0;
    const start = imageFrame.redPaletteColorLookupTableDescriptor[1];
    const shift = imageFrame.redPaletteColorLookupTableDescriptor[2] === 8 ? 0 : 8;
    const rDataCleaned = convertLUTto8Bit(rData, shift);
    const gDataCleaned = convertLUTto8Bit(gData, shift);
    const bDataCleaned = convertLUTto8Bit(bData, shift);
    if (useRGBA) {
      for (let i = 0; i < numPixels; ++i) {
        let value = pixelData[palIndex++];
        if (value < start) {
          value = 0;
        } else if (value > start + len - 1) {
          value = len - 1;
        } else {
          value -= start;
        }
        colorBuffer[bufferIndex++] = rDataCleaned[value];
        colorBuffer[bufferIndex++] = gDataCleaned[value];
        colorBuffer[bufferIndex++] = bDataCleaned[value];
        colorBuffer[bufferIndex++] = 255;
      }
      return;
    }
    for (let i = 0; i < numPixels; ++i) {
      let value = pixelData[palIndex++];
      if (value < start) {
        value = 0;
      } else if (value > start + len - 1) {
        value = len - 1;
      } else {
        value -= start;
      }
      colorBuffer[bufferIndex++] = rDataCleaned[value];
      colorBuffer[bufferIndex++] = gDataCleaned[value];
      colorBuffer[bufferIndex++] = bDataCleaned[value];
    }
  });
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/metaData/getImagePixelModule.js
function getLutDescriptor(dataSet, tag) {
  if (!dataSet.elements[tag] || dataSet.elements[tag].length !== 6) {
    return;
  }
  return [
    dataSet.uint16(tag, 0),
    dataSet.uint16(tag, 1),
    dataSet.uint16(tag, 2)
  ];
}
function getLutData(lutDataSet, tag, lutDescriptor) {
  const lut = [];
  const lutData = lutDataSet.elements[tag];
  for (let i = 0; i < lutDescriptor[0]; i++) {
    if (lutDescriptor[2] === 16) {
      lut[i] = lutDataSet.uint16(tag, i);
    } else {
      lut[i] = lutDataSet.byteArray[i + lutData.dataOffset];
    }
  }
  return lut;
}
function populatePaletteColorLut(dataSet, imagePixelModule) {
  imagePixelModule.redPaletteColorLookupTableDescriptor = getLutDescriptor(dataSet, "x00281101");
  imagePixelModule.greenPaletteColorLookupTableDescriptor = getLutDescriptor(dataSet, "x00281102");
  imagePixelModule.bluePaletteColorLookupTableDescriptor = getLutDescriptor(dataSet, "x00281103");
  if (imagePixelModule.redPaletteColorLookupTableDescriptor[0] === 0) {
    imagePixelModule.redPaletteColorLookupTableDescriptor[0] = 65536;
    imagePixelModule.greenPaletteColorLookupTableDescriptor[0] = 65536;
    imagePixelModule.bluePaletteColorLookupTableDescriptor[0] = 65536;
  }
  const numLutEntries = imagePixelModule.redPaletteColorLookupTableDescriptor[0];
  const lutData = dataSet.elements.x00281201;
  const lutBitsAllocated = lutData.length === numLutEntries ? 8 : 16;
  if (imagePixelModule.redPaletteColorLookupTableDescriptor[2] !== lutBitsAllocated) {
    imagePixelModule.redPaletteColorLookupTableDescriptor[2] = lutBitsAllocated;
    imagePixelModule.greenPaletteColorLookupTableDescriptor[2] = lutBitsAllocated;
    imagePixelModule.bluePaletteColorLookupTableDescriptor[2] = lutBitsAllocated;
  }
  imagePixelModule.redPaletteColorLookupTableData = getLutData(dataSet, "x00281201", imagePixelModule.redPaletteColorLookupTableDescriptor);
  imagePixelModule.greenPaletteColorLookupTableData = getLutData(dataSet, "x00281202", imagePixelModule.greenPaletteColorLookupTableDescriptor);
  imagePixelModule.bluePaletteColorLookupTableData = getLutData(dataSet, "x00281203", imagePixelModule.bluePaletteColorLookupTableDescriptor);
}
function populateSmallestLargestPixelValues(dataSet, imagePixelModule) {
  const pixelRepresentation = dataSet.uint16("x00280103");
  if (pixelRepresentation === 0) {
    imagePixelModule.smallestPixelValue = dataSet.uint16("x00280106");
    imagePixelModule.largestPixelValue = dataSet.uint16("x00280107");
  } else {
    imagePixelModule.smallestPixelValue = dataSet.int16("x00280106");
    imagePixelModule.largestPixelValue = dataSet.int16("x00280107");
  }
}
function getImagePixelModule(dataSet) {
  const imagePixelModule = {
    samplesPerPixel: dataSet.uint16("x00280002"),
    photometricInterpretation: dataSet.string("x00280004"),
    rows: dataSet.uint16("x00280010"),
    columns: dataSet.uint16("x00280011"),
    bitsAllocated: dataSet.uint16("x00280100"),
    bitsStored: dataSet.uint16("x00280101"),
    highBit: dataSet.uint16("x00280102"),
    pixelRepresentation: dataSet.uint16("x00280103"),
    planarConfiguration: dataSet.uint16("x00280006"),
    pixelAspectRatio: dataSet.string("x00280034")
  };
  populateSmallestLargestPixelValues(dataSet, imagePixelModule);
  if (imagePixelModule.photometricInterpretation === "PALETTE COLOR" && dataSet.elements.x00281101) {
    populatePaletteColorLut(dataSet, imagePixelModule);
  }
  return imagePixelModule;
}
var getImagePixelModule_default = getImagePixelModule;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/metaData/getLUTs.js
function getLUT(pixelRepresentation, lutDataSet) {
  let numLUTEntries = lutDataSet.uint16("x00283002", 0);
  if (numLUTEntries === 0) {
    numLUTEntries = 65535;
  }
  let firstValueMapped = 0;
  if (pixelRepresentation === 0) {
    firstValueMapped = lutDataSet.uint16("x00283002", 1);
  } else {
    firstValueMapped = lutDataSet.int16("x00283002", 1);
  }
  const numBitsPerEntry = lutDataSet.uint16("x00283002", 2);
  const lut = {
    id: "1",
    firstValueMapped,
    numBitsPerEntry,
    lut: []
  };
  for (let i = 0; i < numLUTEntries; i++) {
    if (pixelRepresentation === 0) {
      lut.lut[i] = lutDataSet.uint16("x00283006", i);
    } else {
      lut.lut[i] = lutDataSet.int16("x00283006", i);
    }
  }
  return lut;
}
function getLUTs(pixelRepresentation, lutSequence) {
  if (!lutSequence || !lutSequence.items || !lutSequence.items.length) {
    return;
  }
  const luts = [];
  for (let i = 0; i < lutSequence.items.length; i++) {
    const lutDataSet = lutSequence.items[i].dataSet;
    const lut = getLUT(pixelRepresentation, lutDataSet);
    if (lut) {
      luts.push(lut);
    }
  }
  return luts;
}
var getLUTs_default = getLUTs;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/metaData/getModalityLUTOutputPixelRepresentation.js
function getMinStoredPixelValue(dataSet) {
  const pixelRepresentation = dataSet.uint16("x00280103");
  const bitsStored = dataSet.uint16("x00280101");
  if (pixelRepresentation === 0) {
    return 0;
  }
  return -1 << bitsStored - 1;
}
function getModalityLUTOutputPixelRepresentation(dataSet) {
  const sopClassUID = dataSet.string("x00080016");
  if (sopClassUID === "1.2.840.10008.5.1.4.1.1.2" || sopClassUID === "1.2.840.10008.5.1.4.1.1.2.1") {
    return 1;
  }
  const rescaleIntercept = dataSet.floatString("x00281052");
  const rescaleSlope = dataSet.floatString("x00281053");
  if (rescaleIntercept !== void 0 && rescaleSlope !== void 0) {
    const minStoredPixelValue = getMinStoredPixelValue(dataSet);
    const minModalityLutValue = minStoredPixelValue * rescaleSlope + rescaleIntercept;
    if (minModalityLutValue < 0) {
      return 1;
    }
    return 0;
  }
  if (dataSet.elements.x00283000 && dataSet.elements.x00283000.length > 0) {
    return 0;
  }
  return dataSet.uint16("x00280103");
}
var getModalityLUTOutputPixelRepresentation_default = getModalityLUTOutputPixelRepresentation;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/metaData/getNumberValues.js
function getNumberValues(dataSet, tag, minimumLength) {
  const values = [];
  const valueAsString = dataSet.string(tag);
  if (!valueAsString) {
    return;
  }
  const split = valueAsString.split("\\");
  if (minimumLength && split.length < minimumLength) {
    return;
  }
  for (let i = 0; i < split.length; i++) {
    values.push(parseFloat(split[i]));
  }
  return values;
}
var getNumberValues_default = getNumberValues;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/metaData/metaDataProvider.js
var dicomParser3 = __toESM(require_dicomParser_min());

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/parseImageId.js
function parseImageId(imageId) {
  const firstColonIndex = imageId.indexOf(":");
  let url = imageId.substring(firstColonIndex + 1);
  const frameIndex = url.indexOf("frame=");
  let frame;
  if (frameIndex !== -1) {
    const frameStr = url.substring(frameIndex + 6);
    frame = parseInt(frameStr, 10);
    url = url.substring(0, frameIndex - 1);
  }
  const scheme = imageId.substring(0, firstColonIndex);
  const adjustedFrame = frame !== void 0 ? frame - 1 : void 0;
  return {
    scheme,
    url,
    frame,
    pixelDataFrame: adjustedFrame
  };
}
var parseImageId_default = parseImageId;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/dataSetCacheManager.js
var dicomParser2 = __toESM(require_dicomParser_min());

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/internal/options.js
var options = {
  open(xhr, url) {
    xhr.open("get", url, true);
  },
  beforeSend() {
  },
  beforeProcessing(xhr) {
    return Promise.resolve(xhr.response);
  },
  imageCreated() {
  },
  strict: false
};
function setOptions(newOptions) {
  options = Object.assign(options, newOptions);
}
function getOptions() {
  return options;
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/internal/xhrRequest.js
function xhrRequest(url, imageId, defaultHeaders = {}, params = {}) {
  const options2 = getOptions();
  const errorInterceptor = (xhr2) => {
    if (typeof options2.errorInterceptor === "function") {
      const error = new Error("request failed");
      error.request = xhr2;
      error.response = xhr2.response;
      error.status = xhr2.status;
      options2.errorInterceptor(error);
    }
  };
  const xhr = new XMLHttpRequest();
  const promise = new Promise((resolve, reject) => {
    options2.open(xhr, url, defaultHeaders, params);
    const beforeSendHeaders = options2.beforeSend(xhr, imageId, defaultHeaders, params);
    xhr.responseType = "arraybuffer";
    const headers = Object.assign({}, defaultHeaders, beforeSendHeaders);
    Object.keys(headers).forEach(function(key) {
      if (headers[key] === null) {
        return;
      }
      if (key === "Accept" && url.indexOf("accept=") !== -1) {
        return;
      }
      xhr.setRequestHeader(key, headers[key]);
    });
    params.deferred = {
      resolve,
      reject
    };
    params.url = url;
    params.imageId = imageId;
    xhr.onloadstart = function(event) {
      if (options2.onloadstart) {
        options2.onloadstart(event, params);
      }
      const eventData = {
        url,
        imageId
      };
      triggerEvent(eventTarget_default, "cornerstoneimageloadstart", eventData);
    };
    xhr.onloadend = function(event) {
      if (options2.onloadend) {
        options2.onloadend(event, params);
      }
      const eventData = {
        url,
        imageId
      };
      triggerEvent(eventTarget_default, "cornerstoneimageloadend", eventData);
    };
    xhr.onreadystatechange = function(event) {
      if (options2.onreadystatechange) {
        options2.onreadystatechange(event, params);
      }
      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 206) {
          options2.beforeProcessing(xhr).then(resolve).catch(() => {
            errorInterceptor(xhr);
            reject(xhr);
          });
        } else {
          errorInterceptor(xhr);
          reject(xhr);
        }
      }
    };
    xhr.onprogress = function(oProgress) {
      const loaded = oProgress.loaded;
      let total;
      let percentComplete;
      if (oProgress.lengthComputable) {
        total = oProgress.total;
        percentComplete = Math.round(loaded / total * 100);
      }
      const eventData = {
        url,
        imageId,
        loaded,
        total,
        percentComplete
      };
      triggerEvent(eventTarget_default, "cornerstoneimageloadprogress", eventData);
      if (options2.onprogress) {
        options2.onprogress(oProgress, params);
      }
    };
    xhr.onerror = function() {
      errorInterceptor(xhr);
      reject(xhr);
    };
    xhr.onabort = function() {
      errorInterceptor(xhr);
      reject(xhr);
    };
    xhr.send();
  });
  promise.xhr = xhr;
  return promise;
}
var xhrRequest_default = xhrRequest;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/findIndexOfString.js
function checkToken(token, data, dataOffset) {
  if (dataOffset + token.length > data.length) {
    return false;
  }
  let endIndex = dataOffset;
  for (let i = 0; i < token.length; i++) {
    if (token[i] !== data[endIndex++]) {
      return false;
    }
  }
  return true;
}
function stringToUint8Array(str) {
  const uint = new Uint8Array(str.length);
  for (let i = 0, j = str.length; i < j; i++) {
    uint[i] = str.charCodeAt(i);
  }
  return uint;
}
function findIndexOfString(data, str, offset) {
  offset = offset || 0;
  const token = stringToUint8Array(str);
  for (let i = offset; i < data.length; i++) {
    if (token[0] === data[i]) {
      if (checkToken(token, data, i)) {
        return i;
      }
    }
  }
  return -1;
}
var findIndexOfString_default = findIndexOfString;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/extractMultipart.js
var { ImageQualityStatus } = enums_exports;
function extractMultipart(contentType, imageFrameAsArrayBuffer, options2) {
  options2 ||= {};
  const response = new Uint8Array(imageFrameAsArrayBuffer);
  const isPartial = !!options2?.isPartial;
  if (contentType.indexOf("multipart") === -1) {
    return {
      contentType,
      imageQualityStatus: isPartial ? ImageQualityStatus.SUBRESOLUTION : ImageQualityStatus.FULL_RESOLUTION,
      pixelData: response
    };
  }
  let { tokenIndex, responseHeaders, boundary, multipartContentType } = options2;
  tokenIndex ||= findIndexOfString_default(response, "\r\n\r\n");
  if (tokenIndex === -1) {
    throw new Error("invalid response - no multipart mime header");
  }
  if (!boundary) {
    const header = uint8ArrayToString(response, 0, tokenIndex);
    responseHeaders = header.split("\r\n");
    boundary = findBoundary(responseHeaders);
    if (!boundary) {
      throw new Error("invalid response - no boundary marker");
    }
  }
  const offset = tokenIndex + 4;
  const endIndex = findIndexOfString_default(response, boundary, offset);
  if (endIndex === -1 && !isPartial) {
    throw new Error("invalid response - terminating boundary not found");
  }
  multipartContentType ||= findContentType(responseHeaders);
  options2.tokenIndex = tokenIndex;
  options2.boundary = boundary;
  options2.responseHeaders = responseHeaders;
  options2.multipartContentType = multipartContentType;
  options2.isPartial = endIndex === -1;
  return {
    contentType: multipartContentType,
    extractDone: !isPartial || endIndex !== -1,
    tokenIndex,
    responseHeaders,
    boundary,
    multipartContentType,
    pixelData: imageFrameAsArrayBuffer.slice(offset, endIndex - 2)
  };
}
function findBoundary(header) {
  for (let i = 0; i < header.length; i++) {
    if (header[i].substr(0, 2) === "--") {
      return header[i];
    }
  }
}
function findContentType(header) {
  for (let i = 0; i < header.length; i++) {
    if (header[i].substr(0, 13) === "Content-Type:") {
      return header[i].substr(13).trim();
    }
  }
}
function uint8ArrayToString(data, offset, length) {
  offset = offset || 0;
  length = length || data.length - offset;
  let str = "";
  for (let i = offset; i < offset + length; i++) {
    str += String.fromCharCode(data[i]);
  }
  return str;
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/getImageQualityStatus.js
var { ImageQualityStatus: ImageQualityStatus2 } = enums_exports;
function getImageQualityStatus(retrieveOptions, done = true) {
  if (!done) {
    return ImageQualityStatus2.SUBRESOLUTION;
  }
  return retrieveOptions.imageQualityStatus ?? ImageQualityStatus2.FULL_RESOLUTION;
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/internal/streamRequest.js
var { ProgressiveIterator } = utilities_exports;
function streamRequest(url, imageId, defaultHeaders = {}, options2 = {}) {
  const globalOptions = getOptions();
  const { retrieveOptions = {}, streamingData = {} } = options2;
  const minChunkSize = retrieveOptions.minChunkSize || 128 * 1024;
  const errorInterceptor = (err) => {
    if (typeof globalOptions.errorInterceptor === "function") {
      const error = new Error("request failed");
      globalOptions.errorInterceptor(error);
    }
  };
  const loadIterator = new ProgressiveIterator("streamRequest");
  loadIterator.generate(async (iterator, reject) => {
    const beforeSendHeaders = globalOptions.beforeSend?.(null, url, defaultHeaders, {});
    const headers = Object.assign({}, defaultHeaders, beforeSendHeaders);
    Object.keys(headers).forEach(function(key) {
      if (headers[key] === null) {
        headers[key] = void 0;
      }
      if (key === "Accept" && url.indexOf("accept=") !== -1) {
        headers[key] = void 0;
      }
    });
    try {
      const response = await fetch(url, {
        headers,
        signal: void 0
      });
      if (response.status !== 200) {
        throw new Error(`Couldn't retrieve ${url} got status ${response.status}`);
      }
      const responseReader = response.body.getReader();
      const responseHeaders = response.headers;
      const contentType = responseHeaders.get("content-type");
      const totalBytes = Number(responseHeaders.get("Content-Length"));
      let readDone = false;
      let encodedData = streamingData.encodedData;
      let lastSize = streamingData.lastSize || 0;
      streamingData.isPartial = true;
      while (!readDone) {
        const { done, value } = await responseReader.read();
        encodedData = appendChunk(encodedData, value);
        if (!encodedData) {
          if (readDone) {
            throw new Error(`Done but no image frame available ${imageId}`);
          }
          continue;
        }
        readDone = done || encodedData.byteLength === totalBytes;
        if (!readDone && encodedData.length < lastSize + minChunkSize) {
          continue;
        }
        lastSize = encodedData.length;
        streamingData.isPartial = !done;
        const extracted = extractMultipart(contentType, encodedData, streamingData);
        const imageQualityStatus = getImageQualityStatus(retrieveOptions, readDone);
        const detail = {
          url,
          imageId,
          ...extracted,
          percentComplete: done ? 100 : extracted.pixelData?.length * 100 / totalBytes,
          imageQualityStatus,
          done: readDone
        };
        iterator.add(detail, readDone);
      }
    } catch (err) {
      errorInterceptor(err);
      console.error(err);
      reject(err);
    }
  });
  return loadIterator.getNextPromise();
}
function appendChunk(existing, chunk) {
  if (!existing) {
    return chunk;
  }
  if (!chunk) {
    return existing;
  }
  const newDataArray = new Uint8Array(existing.length + chunk.length);
  newDataArray.set(existing, 0);
  newDataArray.set(chunk, existing.length);
  return newDataArray;
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/internal/index.js
var internal = {
  xhrRequest: xhrRequest_default,
  streamRequest,
  setOptions,
  getOptions
};

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/dataset-from-partial-content.js
var dicomParser = __toESM(require_dicomParser_min());
function fixFragments(dataSet) {
  const fragments = dataSet.elements.x7fe00010.fragments;
  const totalLength = dataSet.byteArray.length;
  for (const fragment of fragments) {
    const { position, length } = fragment;
    if (length > totalLength - position) {
      console.log(`Truncated fragment, changing fragment length from ${fragment.length} to ${totalLength - position}`);
      fragment.length = totalLength - position;
    }
  }
  return dataSet;
}
function parsePartialByteArray(byteArray) {
  let dataSet = dicomParser.parseDicom(byteArray, {
    untilTag: "x7fe00010"
  });
  if (!dataSet.elements.x7fe00010) {
    console.warn("Pixel data not found!");
  }
  let pixelDataSet;
  try {
    pixelDataSet = dicomParser.parseDicom(byteArray);
  } catch (err) {
    console.error(err);
    console.log("pixel data dataset:", err.dataSet);
    pixelDataSet = err.dataSet;
  }
  dataSet.elements.x7fe00010 = pixelDataSet.elements.x7fe00010;
  dataSet = fixFragments(dataSet);
  return dataSet;
}
async function dataSetFromPartialContent(byteArray, loadRequest, metadata) {
  const dataSet = parsePartialByteArray(byteArray);
  const { uri, imageId, fileTotalLength } = metadata;
  dataSet.fetchMore = async function(fetchOptions) {
    const _options = Object.assign({
      uri,
      imageId,
      fetchedLength: byteArray.length,
      lengthToFetch: fileTotalLength - byteArray.length
    }, fetchOptions);
    const { fetchedLength, lengthToFetch } = _options;
    const { arrayBuffer } = await loadRequest(uri, imageId, {
      byteRange: `${fetchedLength}-${fetchedLength + lengthToFetch}`
    });
    const byteArrayToAppend = new Uint8Array(arrayBuffer);
    const combinedByteArray = new Uint8Array(dataSet.byteArray.length + byteArrayToAppend.length);
    combinedByteArray.set(dataSet.byteArray);
    combinedByteArray.set(byteArrayToAppend, dataSet.byteArray.length);
    return dataSetFromPartialContent(combinedByteArray, loadRequest, metadata);
  };
  return dataSet;
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/combineFrameInstanceDataset.js
function getDirectFrameInformation(dataSet, frame) {
  if (!dataSet) {
    return;
  }
  const { NumberOfFrames, PerFrameFunctionalGroupsSequence, SharedFunctionalGroupsSequence } = getMultiframeInformation(dataSet);
  if (PerFrameFunctionalGroupsSequence || NumberOfFrames > 1) {
    const { shared, perFrame } = getFrameInformation(PerFrameFunctionalGroupsSequence, SharedFunctionalGroupsSequence, frame);
    return {
      NumberOfFrames,
      PerFrameFunctionalInformation: perFrame,
      SharedFunctionalInformation: shared
    };
  }
  return {
    NumberOfFrames
  };
}
function getFrameInformation(PerFrameFunctionalGroupsSequence, SharedFunctionalGroupsSequence, frameNumber) {
  const shared = {};
  (SharedFunctionalGroupsSequence ? Object.values(SharedFunctionalGroupsSequence.items[0].dataSet.elements) : []).map((it) => shared[it.tag] = it);
  const perFrame = {};
  (PerFrameFunctionalGroupsSequence ? Object.values(PerFrameFunctionalGroupsSequence.items[frameNumber - 1].dataSet.elements) : []).map((it) => perFrame[it.tag] = it);
  return {
    shared,
    perFrame
  };
}
function getMultiframeInformation(dataSet) {
  if (!dataSet) {
    return;
  }
  const { elements, ...otherAttributtes } = dataSet;
  const { x52009230: PerFrameFunctionalGroupsSequence, x52009229: SharedFunctionalGroupsSequence, ...otherElements } = elements;
  const NumberOfFrames = dataSet.intString("x00280008");
  return {
    NumberOfFrames,
    PerFrameFunctionalGroupsSequence,
    SharedFunctionalGroupsSequence,
    otherElements,
    otherAttributtes
  };
}
function combineFrameInstanceDataset(frameNumber, dataSet) {
  if (!dataSet) {
    return;
  }
  const { NumberOfFrames, PerFrameFunctionalGroupsSequence, SharedFunctionalGroupsSequence, otherElements } = getMultiframeInformation(dataSet);
  if (PerFrameFunctionalGroupsSequence || NumberOfFrames > 1) {
    const { shared, perFrame } = getFrameInformation(PerFrameFunctionalGroupsSequence, SharedFunctionalGroupsSequence, frameNumber);
    const newElements = {
      elements: {
        ...otherElements,
        ...shared,
        ...perFrame
      }
    };
    const clonedDataset = Object.create(dataSet);
    const newDataset = Object.assign(clonedDataset, newElements);
    return newDataset;
  }
  return dataSet;
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/loadedDataSets.js
var loadedDataSets = {};
var purgeLoadedDataSets = () => {
  loadedDataSets = {};
};

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/retrieveMultiframeDataset.js
function _get(uri) {
  if (!loadedDataSets[uri]) {
    return;
  }
  return loadedDataSets[uri];
}
function isMultiframeDataset(uri) {
  const dataSet = _get(uri);
  return _isMultiframeDataset(dataSet);
}
function _isMultiframeDataset(dataSet) {
  if (!dataSet) {
    return false;
  }
  const numberOfFrames = dataSet.intString("x00280008");
  return numberOfFrames && numberOfFrames > 1;
}
function retrieveFrameParameterIndex(uri) {
  return uri.indexOf("&frame=");
}
function retrieveMultiframeDataset(uri) {
  const frameParameterIndex = retrieveFrameParameterIndex(uri);
  const multiframeURI = frameParameterIndex === -1 ? uri : uri.slice(0, frameParameterIndex);
  const frame = parseInt(uri.slice(frameParameterIndex + 7), 10) || 1;
  let dataSet;
  if (loadedDataSets[multiframeURI]) {
    dataSet = loadedDataSets[multiframeURI].dataSet;
  } else {
    dataSet = void 0;
  }
  return {
    dataSet,
    frame
  };
}
function generateMultiframeWADOURIs(uri) {
  const listWADOURIs = [];
  const dataSet = _get(uri);
  if (_isMultiframeDataset(dataSet)) {
    const numberOfFrames = dataSet.intString("x00280008");
    for (let i = 1; i <= numberOfFrames; i++) {
      listWADOURIs.push(`${uri}&frame=${i}`);
    }
  } else {
    listWADOURIs.push(uri);
  }
  return listWADOURIs;
}
var retrieveMultiframeDataset_default = {
  _get,
  generateMultiframeWADOURIs,
  retrieveMultiframeDataset,
  isMultiframeDataset
};

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/dataSetCacheManager.js
var cacheSizeInBytes = 0;
var promises = {};
function isLoaded(uri) {
  return loadedDataSets[uri] !== void 0;
}
function get(uri) {
  let dataSet;
  if (uri.includes("&frame=")) {
    const { frame, dataSet: multiframeDataSet } = retrieveMultiframeDataset_default.retrieveMultiframeDataset(uri);
    dataSet = combineFrameInstanceDataset(frame, multiframeDataSet);
  } else if (loadedDataSets[uri]) {
    dataSet = loadedDataSets[uri].dataSet;
  }
  return dataSet;
}
function update(uri, dataSet) {
  const loadedDataSet = loadedDataSets[uri];
  if (!loadedDataSet) {
    console.error(`No loaded dataSet for uri ${uri}`);
    return;
  }
  cacheSizeInBytes -= loadedDataSet.dataSet.byteArray.length;
  loadedDataSet.dataSet = dataSet;
  cacheSizeInBytes += dataSet.byteArray.length;
  triggerEvent(eventTarget_default, "datasetscachechanged", {
    uri,
    action: "updated",
    cacheInfo: getInfo()
  });
}
function load(uri, loadRequest = xhrRequest_default, imageId) {
  if (loadedDataSets[uri]) {
    return new Promise((resolve) => {
      loadedDataSets[uri].cacheCount++;
      resolve(loadedDataSets[uri].dataSet);
    });
  }
  if (promises[uri]) {
    promises[uri].cacheCount++;
    return promises[uri];
  }
  const loadDICOMPromise = loadRequest(uri, imageId);
  const promise = new Promise((resolve, reject) => {
    loadDICOMPromise.then(async function(dicomPart10AsArrayBuffer) {
      const partialContent = {
        isPartialContent: false,
        fileTotalLength: null
      };
      if (!(dicomPart10AsArrayBuffer instanceof ArrayBuffer)) {
        if (!dicomPart10AsArrayBuffer.arrayBuffer) {
          return reject(new Error("If not returning ArrayBuffer, must return object with `arrayBuffer` parameter"));
        }
        partialContent.isPartialContent = dicomPart10AsArrayBuffer.flags.isPartialContent;
        partialContent.fileTotalLength = dicomPart10AsArrayBuffer.flags.fileTotalLength;
        dicomPart10AsArrayBuffer = dicomPart10AsArrayBuffer.arrayBuffer;
      }
      const byteArray = new Uint8Array(dicomPart10AsArrayBuffer);
      let dataSet;
      try {
        if (partialContent.isPartialContent) {
          dataSet = await dataSetFromPartialContent(byteArray, loadRequest, {
            uri,
            imageId,
            fileTotalLength: partialContent.fileTotalLength
          });
        } else {
          dataSet = dicomParser2.parseDicom(byteArray);
        }
      } catch (error) {
        return reject(error);
      }
      loadedDataSets[uri] = {
        dataSet,
        cacheCount: promise.cacheCount
      };
      cacheSizeInBytes += dataSet.byteArray.length;
      resolve(dataSet);
      triggerEvent(eventTarget_default, "datasetscachechanged", {
        uri,
        action: "loaded",
        cacheInfo: getInfo()
      });
    }, reject).then(() => {
      delete promises[uri];
    }, () => {
      delete promises[uri];
    });
  });
  promise.cacheCount = 1;
  promises[uri] = promise;
  return promise;
}
function unload(uri) {
  if (loadedDataSets[uri]) {
    loadedDataSets[uri].cacheCount--;
    if (loadedDataSets[uri].cacheCount === 0) {
      cacheSizeInBytes -= loadedDataSets[uri].dataSet.byteArray.length;
      delete loadedDataSets[uri];
      triggerEvent(eventTarget_default, "datasetscachechanged", {
        uri,
        action: "unloaded",
        cacheInfo: getInfo()
      });
    }
  }
}
function getInfo() {
  return {
    cacheSizeInBytes,
    numberOfDataSetsCached: Object.keys(loadedDataSets).length
  };
}
function purge() {
  purgeLoadedDataSets();
  promises = {};
  cacheSizeInBytes = 0;
}
var dataSetCacheManager_default = {
  isLoaded,
  load,
  unload,
  getInfo,
  purge,
  get,
  update
};

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/metaData/getOverlayPlaneModule.js
function getOverlayPlaneModule(dataSet) {
  const overlays = [];
  for (let overlayGroup = 0; overlayGroup <= 30; overlayGroup += 2) {
    let groupStr = `x60${overlayGroup.toString(16)}`;
    if (groupStr.length === 4) {
      groupStr = `x600${overlayGroup.toString(16)}`;
    }
    const data = dataSet.elements[`${groupStr}3000`];
    if (!data) {
      continue;
    }
    const pixelData = [];
    for (let i = 0; i < data.length; i++) {
      for (let k = 0; k < 8; k++) {
        const byte_as_int = dataSet.byteArray[data.dataOffset + i];
        pixelData[i * 8 + k] = byte_as_int >> k & 1;
      }
    }
    overlays.push({
      rows: dataSet.uint16(`${groupStr}0010`),
      columns: dataSet.uint16(`${groupStr}0011`),
      type: dataSet.string(`${groupStr}0040`),
      x: dataSet.int16(`${groupStr}0050`, 1) - 1,
      y: dataSet.int16(`${groupStr}0050`, 0) - 1,
      pixelData,
      description: dataSet.string(`${groupStr}0022`),
      label: dataSet.string(`${groupStr}1500`),
      roiArea: dataSet.string(`${groupStr}1301`),
      roiMean: dataSet.string(`${groupStr}1302`),
      roiStandardDeviation: dataSet.string(`${groupStr}1303`)
    });
  }
  return {
    overlays
  };
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/isNMReconstructable.js
function isNMReconstructable(imageSubType) {
  return imageSubType === "RECON TOMO" || imageSubType === "RECON GATED TOMO";
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/metaData/extractPositioningFromDataset.js
function getImageTypeSubItemFromDataset(dataSet, index) {
  const imageType = dataSet.string("x00080008");
  if (imageType) {
    const subTypes = imageType.split("\\");
    if (subTypes.length > index) {
      return subTypes[index];
    }
  }
  return void 0;
}
function extractOrientationFromNMMultiframeDataset(dataSet) {
  let imageOrientationPatient;
  const modality = dataSet.string("x00080060");
  if (modality?.includes("NM")) {
    const imageSubType = getImageTypeSubItemFromDataset(dataSet, 2);
    if (imageSubType && isNMReconstructable(imageSubType)) {
      if (dataSet.elements.x00540022) {
        imageOrientationPatient = getNumberValues_default(dataSet.elements.x00540022.items[0].dataSet, "x00200037", 6);
      }
    }
  }
  return imageOrientationPatient;
}
function extractPositionFromNMMultiframeDataset(dataSet) {
  let imagePositionPatient;
  const modality = dataSet.string("x00080060");
  if (modality?.includes("NM")) {
    const imageSubType = getImageTypeSubItemFromDataset(dataSet, 2);
    if (imageSubType && isNMReconstructable(imageSubType)) {
      if (dataSet.elements.x00540022) {
        imagePositionPatient = getNumberValues_default(dataSet.elements.x00540022.items[0].dataSet, "x00200032", 3);
      }
    }
  }
  return imagePositionPatient;
}
function extractOrientationFromDataset(dataSet) {
  let imageOrientationPatient = getNumberValues_default(dataSet, "x00200037", 6);
  if (!imageOrientationPatient && dataSet.elements.x00209116) {
    imageOrientationPatient = getNumberValues_default(dataSet.elements.x00209116.items[0].dataSet, "x00200037", 6);
  }
  if (!imageOrientationPatient) {
    imageOrientationPatient = extractOrientationFromNMMultiframeDataset(dataSet);
  }
  return imageOrientationPatient;
}
function extractPositionFromDataset(dataSet) {
  let imagePositionPatient = getNumberValues_default(dataSet, "x00200032", 3);
  if (!imagePositionPatient && dataSet.elements.x00209113) {
    imagePositionPatient = getNumberValues_default(dataSet.elements.x00209113.items[0].dataSet, "x00200032", 3);
  }
  if (!imagePositionPatient) {
    imagePositionPatient = extractPositionFromNMMultiframeDataset(dataSet);
  }
  return imagePositionPatient;
}
function extractSpacingFromDataset(dataSet) {
  let pixelSpacing = getNumberValues_default(dataSet, "x00280030", 2);
  if (!pixelSpacing && dataSet.elements.x00289110) {
    pixelSpacing = getNumberValues_default(dataSet.elements.x00289110.items[0].dataSet, "x00280030", 2);
  }
  return pixelSpacing;
}
function extractSliceThicknessFromDataset(dataSet) {
  let sliceThickness;
  if (dataSet.elements.x00180050) {
    sliceThickness = dataSet.floatString("x00180050");
  } else if (dataSet.elements.x00289110 && dataSet.elements.x00289110.items.length && dataSet.elements.x00289110.items[0].dataSet.elements.x00180050) {
    sliceThickness = dataSet.elements.x00289110.items[0].dataSet.floatString("x00180050");
  }
  return sliceThickness;
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/getInstanceModule.js
function getInstanceModule(imageId, metaDataProvider3, types) {
  const result = {};
  for (const t of types) {
    try {
      const data = metaDataProvider3(t, imageId);
      if (data) {
        const capitalizedData = {};
        for (const key in data) {
          if (key in data) {
            const capitalizedKey = capitalizeTag(key);
            capitalizedData[capitalizedKey] = data[key];
          }
        }
        Object.assign(result, capitalizedData);
      }
    } catch (error) {
      console.error(`Error retrieving ${t} data:`, error);
    }
  }
  return result;
}
var capitalizeTag = (tag) => tag.charAt(0).toUpperCase() + tag.slice(1);
var instanceModuleNames = [
  "multiframeModule",
  "generalSeriesModule",
  "patientStudyModule",
  "imagePlaneModule",
  "nmMultiframeGeometryModule",
  "imagePixelModule",
  "modalityLutModule",
  "voiLutModule",
  "sopCommonModule",
  "petIsotopeModule",
  "overlayPlaneModule",
  "transferSyntax",
  "petSeriesModule",
  "petImageModule"
];

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/metaData/USHelpers.js
function getUSEnhancedRegions(metadata) {
  const sequence = metadata.elements["x00186011"];
  if (!sequence || !sequence.items) {
    return [];
  }
  const regions = sequence.items.map((item) => {
    const physicalDeltaX = item.dataSet.double("x0018602c");
    const physicalDeltaY = item.dataSet.double("x0018602e");
    const physicalUnitsXDirection = item.dataSet.uint16("x00186024");
    const physicalUnitsYDirection = item.dataSet.uint16("x00186026");
    const regionLocationMinY0 = item.dataSet.uint16("x0018601a");
    const regionLocationMaxY1 = item.dataSet.uint16("x0018601e");
    const regionLocationMinX0 = item.dataSet.uint16("x00186018");
    const regionLocationMaxX1 = item.dataSet.uint16("x0018601c");
    const referencePixelX0 = item.dataSet.int32("x00186020") || null;
    const referencePixelY0 = item.dataSet.int32("x00186022") || null;
    const referencePhysicalPixelValueY = item.dataSet.uint16("x0018602a");
    const referencePhysicalPixelValueX = item.dataSet.uint16("x00186028");
    const regionSpatialFormat = item.dataSet.uint16("x00186012");
    const regionDataType = item.dataSet.uint16("x00186014");
    const regionFlags = item.dataSet.uint16("x00186016");
    const transducerFrequency = item.dataSet.uint16("x00186030");
    return {
      regionLocationMinY0,
      regionLocationMaxY1,
      regionLocationMinX0,
      regionLocationMaxX1,
      referencePixelX0,
      referencePixelY0,
      physicalDeltaX,
      physicalDeltaY,
      physicalUnitsXDirection,
      physicalUnitsYDirection,
      referencePhysicalPixelValueY,
      referencePhysicalPixelValueX,
      regionSpatialFormat,
      regionDataType,
      regionFlags,
      transducerFrequency
    };
  });
  return regions;
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/metaData/metaDataProvider.js
function metaDataProvider(type, imageId) {
  const { MetadataModules } = enums_exports;
  if (Array.isArray(imageId)) {
    return;
  }
  const parsedImageId = parseImageId_default(imageId);
  if (type === MetadataModules.MULTIFRAME) {
    const multiframeData = retrieveMultiframeDataset_default.retrieveMultiframeDataset(parsedImageId.url);
    if (!multiframeData.dataSet) {
      return;
    }
    const multiframeInfo = getDirectFrameInformation(multiframeData.dataSet, multiframeData.frame);
    return multiframeInfo;
  }
  let url = parsedImageId.url;
  if (parsedImageId.frame) {
    url = `${url}&frame=${parsedImageId.frame}`;
  }
  const dataSet = dataSetCacheManager_default.get(url);
  if (!dataSet) {
    return;
  }
  return metadataForDataset(type, imageId, dataSet);
}
function metadataForDataset(type, imageId, dataSet) {
  const { MetadataModules } = enums_exports;
  if (type === MetadataModules.GENERAL_STUDY) {
    return {
      studyDescription: dataSet.string("x00081030"),
      studyDate: dicomParser3.parseDA(dataSet.string("x00080020")),
      studyTime: dicomParser3.parseTM(dataSet.string("x00080030") || ""),
      accessionNumber: dataSet.string("x00080050")
    };
  }
  if (type === MetadataModules.GENERAL_SERIES) {
    return {
      modality: dataSet.string("x00080060"),
      seriesInstanceUID: dataSet.string("x0020000e"),
      seriesDescription: dataSet.string("x0008103e"),
      seriesNumber: dataSet.intString("x00200011"),
      studyInstanceUID: dataSet.string("x0020000d"),
      seriesDate: dicomParser3.parseDA(dataSet.string("x00080021")),
      seriesTime: dicomParser3.parseTM(dataSet.string("x00080031") || ""),
      acquisitionDate: dicomParser3.parseDA(dataSet.string("x00080022")),
      acquisitionTime: dicomParser3.parseTM(dataSet.string("x00080032") || "")
    };
  }
  if (type === MetadataModules.GENERAL_IMAGE) {
    return {
      sopInstanceUID: dataSet.string("x00080018"),
      instanceNumber: dataSet.intString("x00200013"),
      lossyImageCompression: dataSet.string("x00282110"),
      lossyImageCompressionRatio: dataSet.floatString("x00282112"),
      lossyImageCompressionMethod: dataSet.string("x00282114")
    };
  }
  if (type === MetadataModules.PATIENT) {
    return {
      patientID: dataSet.string("x00100020"),
      patientName: dataSet.string("x00100010")
    };
  }
  if (type === MetadataModules.PATIENT_STUDY) {
    return {
      patientAge: dataSet.intString("x00101010"),
      patientSize: dataSet.floatString("x00101020"),
      patientSex: dataSet.string("x00100040"),
      patientWeight: dataSet.floatString("x00101030")
    };
  }
  if (type === MetadataModules.NM_MULTIFRAME_GEOMETRY) {
    const modality = dataSet.string("x00080060");
    const imageSubType = getImageTypeSubItemFromDataset(dataSet, 2);
    return {
      modality,
      imageType: dataSet.string("x00080008"),
      imageSubType,
      imageOrientationPatient: extractOrientationFromDataset(dataSet),
      imagePositionPatient: extractPositionFromDataset(dataSet),
      sliceThickness: extractSliceThicknessFromDataset(dataSet),
      pixelSpacing: extractSpacingFromDataset(dataSet),
      numberOfFrames: dataSet.uint16("x00280008"),
      isNMReconstructable: isNMReconstructable(imageSubType) && modality.includes("NM")
    };
  }
  if (type === MetadataModules.IMAGE_PLANE) {
    const imageOrientationPatient = extractOrientationFromDataset(dataSet);
    const imagePositionPatient = extractPositionFromDataset(dataSet);
    const pixelSpacing = extractSpacingFromDataset(dataSet);
    const sliceThickness = extractSliceThicknessFromDataset(dataSet);
    let columnPixelSpacing = null;
    let rowPixelSpacing = null;
    if (pixelSpacing) {
      rowPixelSpacing = pixelSpacing[0];
      columnPixelSpacing = pixelSpacing[1];
    }
    let rowCosines = null;
    let columnCosines = null;
    if (imageOrientationPatient) {
      rowCosines = [
        parseFloat(imageOrientationPatient[0]),
        parseFloat(imageOrientationPatient[1]),
        parseFloat(imageOrientationPatient[2])
      ];
      columnCosines = [
        parseFloat(imageOrientationPatient[3]),
        parseFloat(imageOrientationPatient[4]),
        parseFloat(imageOrientationPatient[5])
      ];
    }
    return {
      frameOfReferenceUID: dataSet.string("x00200052"),
      rows: dataSet.uint16("x00280010"),
      columns: dataSet.uint16("x00280011"),
      imageOrientationPatient,
      rowCosines,
      columnCosines,
      imagePositionPatient,
      sliceThickness,
      sliceLocation: dataSet.floatString("x00201041"),
      pixelSpacing,
      rowPixelSpacing,
      columnPixelSpacing
    };
  }
  if (type === MetadataModules.CINE) {
    return {
      frameTime: dataSet.floatString("x00181063")
    };
  }
  if (type === MetadataModules.IMAGE_PIXEL) {
    return getImagePixelModule_default(dataSet);
  }
  if (type === MetadataModules.VOI_LUT) {
    const modalityLUTOutputPixelRepresentation = getModalityLUTOutputPixelRepresentation_default(dataSet);
    return {
      windowCenter: getNumberValues_default(dataSet, "x00281050", 1),
      windowWidth: getNumberValues_default(dataSet, "x00281051", 1),
      voiLUTSequence: getLUTs_default(modalityLUTOutputPixelRepresentation, dataSet.elements.x00283010),
      voiLUTFunction: dataSet.string("x00281056")
    };
  }
  if (type === MetadataModules.MODALITY_LUT) {
    return {
      rescaleIntercept: dataSet.floatString("x00281052"),
      rescaleSlope: dataSet.floatString("x00281053"),
      rescaleType: dataSet.string("x00281054"),
      modalityLUTSequence: getLUTs_default(dataSet.uint16("x00280103"), dataSet.elements.x00283000)
    };
  }
  if (type === MetadataModules.SOP_COMMON) {
    return {
      sopClassUID: dataSet.string("x00080016"),
      sopInstanceUID: dataSet.string("x00080018")
    };
  }
  if (type === MetadataModules.PET_ISOTOPE) {
    const radiopharmaceuticalInfo = dataSet.elements.x00540016;
    if (radiopharmaceuticalInfo === void 0) {
      return;
    }
    const firstRadiopharmaceuticalInfoDataSet = radiopharmaceuticalInfo.items[0].dataSet;
    return {
      radiopharmaceuticalInfo: {
        radiopharmaceuticalStartTime: dicomParser3.parseTM(firstRadiopharmaceuticalInfoDataSet.string("x00181072") || ""),
        radionuclideTotalDose: firstRadiopharmaceuticalInfoDataSet.floatString("x00181074"),
        radionuclideHalfLife: firstRadiopharmaceuticalInfoDataSet.floatString("x00181075")
      }
    };
  }
  if (type === MetadataModules.OVERLAY_PLANE) {
    return getOverlayPlaneModule(dataSet);
  }
  if (type === "transferSyntax") {
    let transferSyntaxUID;
    try {
      transferSyntaxUID = dataSet.string("x00020010");
    } catch (error) {
    }
    return {
      transferSyntaxUID
    };
  }
  if (type === MetadataModules.PET_SERIES) {
    return {
      correctedImage: dataSet.string("x00280051"),
      units: dataSet.string("x00541001"),
      decayCorrection: dataSet.string("x00541102")
    };
  }
  if (type === MetadataModules.PET_IMAGE) {
    return {
      frameReferenceTime: dataSet.floatString(dataSet.string("x00541300") || ""),
      actualFrameDuration: dataSet.intString(dataSet.string("x00181242"))
    };
  }
  if (type === MetadataModules.ULTRASOUND_ENHANCED_REGION) {
    return getUSEnhancedRegions(dataSet);
  }
  if (type === MetadataModules.CALIBRATION) {
    const modality = dataSet.string("x00080060");
    if (modality === "US") {
      const enhancedRegion = getUSEnhancedRegions(dataSet);
      return {
        sequenceOfUltrasoundRegions: enhancedRegion
      };
    }
  }
  if (type === "instance") {
    return getInstanceModule(imageId, metaDataProvider, instanceModuleNames);
  }
}
var metaDataProvider_default = metaDataProvider;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/fileManager.js
var files = [];
function add(file) {
  const fileIndex = files.push(file);
  return `dicomfile:${fileIndex - 1}`;
}
function get2(index) {
  return files[index];
}
function remove(index) {
  files[index] = void 0;
}
function purge2() {
  files = [];
}
var fileManager_default = {
  add,
  get: get2,
  remove,
  purge: purge2
};

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/getEncapsulatedImageFrame.js
var dicomParser4 = __toESM(require_dicomParser_min());
function framesAreFragmented(dataSet) {
  const numberOfFrames = dataSet.intString("x00280008");
  const pixelDataElement = dataSet.elements.x7fe00010;
  return numberOfFrames !== pixelDataElement.fragments.length;
}
function getEncapsulatedImageFrame(dataSet, frameIndex) {
  if (dataSet.elements.x7fe00010 && dataSet.elements.x7fe00010.basicOffsetTable.length) {
    return dicomParser4.readEncapsulatedImageFrame(dataSet, dataSet.elements.x7fe00010, frameIndex);
  }
  if (framesAreFragmented(dataSet)) {
    const basicOffsetTable2 = dicomParser4.createJPEGBasicOffsetTable(dataSet, dataSet.elements.x7fe00010);
    return dicomParser4.readEncapsulatedImageFrame(dataSet, dataSet.elements.x7fe00010, frameIndex, basicOffsetTable2);
  }
  const fragments = dataSet.elements.x7fe00010.fragments;
  const byteStream = new dicomParser4.ByteStream(dataSet.byteArrayParser, dataSet.byteArray, dataSet.elements.x7fe00010.dataOffset);
  const basicOffsetTable = dicomParser4.readSequenceItem(byteStream);
  if (basicOffsetTable.tag !== "xfffee000") {
    throw "dicomParser.readEncapsulatedPixelData: missing basic offset table xfffee000";
  }
  byteStream.seek(basicOffsetTable.length);
  const fragmentZeroPosition = byteStream.position;
  if (frameIndex + 1 > fragments.length) {
    throw "dicomParser.readEncapsulatedPixelData: frame exceeds number of fragments";
  }
  const fragmentHeaderSize = 8;
  const byteOffset = fragmentZeroPosition + fragments[frameIndex].offset + fragmentHeaderSize;
  const length = fragments[frameIndex].length;
  return new Uint8Array(byteStream.byteArray.buffer.slice(byteStream.byteArray.byteOffset + byteOffset, byteStream.byteArray.byteOffset + byteOffset + length));
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/unpackBinaryFrame.js
function isBitSet(byte, bitPos) {
  return byte & 1 << bitPos;
}
function unpackBinaryFrame(byteArray, frameOffset, pixelsPerFrame) {
  const pixelData = new Uint8Array(pixelsPerFrame);
  for (let i = 0; i < pixelsPerFrame; i++) {
    const bytePos = Math.floor(i / 8);
    const byte = byteArray[bytePos + frameOffset];
    const bitPos = i % 8;
    pixelData[i] = isBitSet(byte, bitPos) ? 1 : 0;
  }
  return pixelData;
}
var unpackBinaryFrame_default = unpackBinaryFrame;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/getUncompressedImageFrame.js
function getUncompressedImageFrame(dataSet, frameIndex) {
  const pixelDataElement = dataSet.elements.x7fe00010 || dataSet.elements.x7fe00008;
  const bitsAllocated = dataSet.uint16("x00280100");
  const rows = dataSet.uint16("x00280010");
  const columns = dataSet.uint16("x00280011");
  let samplesPerPixel = dataSet.uint16("x00280002");
  const photometricInterpretation = dataSet.string("x00280004");
  if (photometricInterpretation === "YBR_FULL_422") {
    samplesPerPixel = 2;
    console.warn(`Using SamplesPerPixel of 2 for YBR_FULL_422 photometric interpretation.
      See http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.6.3.html for more information.`);
  }
  const pixelDataOffset = pixelDataElement.dataOffset;
  const pixelsPerFrame = rows * columns * samplesPerPixel;
  let frameOffset;
  if (bitsAllocated === 8) {
    frameOffset = pixelDataOffset + frameIndex * pixelsPerFrame;
    if (frameOffset >= dataSet.byteArray.length) {
      throw new Error("frame exceeds size of pixelData");
    }
    return new Uint8Array(dataSet.byteArray.buffer.slice(frameOffset, frameOffset + pixelsPerFrame));
  } else if (bitsAllocated === 16) {
    frameOffset = pixelDataOffset + frameIndex * pixelsPerFrame * 2;
    if (frameOffset >= dataSet.byteArray.length) {
      throw new Error("frame exceeds size of pixelData");
    }
    return new Uint8Array(dataSet.byteArray.buffer.slice(frameOffset, frameOffset + pixelsPerFrame * 2));
  } else if (bitsAllocated === 1) {
    frameOffset = pixelDataOffset + frameIndex * pixelsPerFrame * 0.125;
    if (frameOffset >= dataSet.byteArray.length) {
      throw new Error("frame exceeds size of pixelData");
    }
    return unpackBinaryFrame_default(dataSet.byteArray, frameOffset, pixelsPerFrame);
  } else if (bitsAllocated === 32) {
    frameOffset = pixelDataOffset + frameIndex * pixelsPerFrame * 4;
    if (frameOffset >= dataSet.byteArray.length) {
      throw new Error("frame exceeds size of pixelData");
    }
    return new Uint8Array(dataSet.byteArray.buffer.slice(frameOffset, frameOffset + pixelsPerFrame * 4));
  }
  throw new Error("unsupported pixel format");
}
var getUncompressedImageFrame_default = getUncompressedImageFrame;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/loadFileRequest.js
function loadFileRequest(uri) {
  const parsedImageId = parseImageId_default(uri);
  const fileIndex = parseInt(parsedImageId.url, 10);
  const file = fileManager_default.get(fileIndex);
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const dicomPart10AsArrayBuffer = e.target.result;
      resolve(dicomPart10AsArrayBuffer);
    };
    fileReader.onerror = reject;
    fileReader.readAsArrayBuffer(file);
  });
}
var loadFileRequest_default = loadFileRequest;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/getPixelData.js
function getPixelData(dataSet, frameIndex = 0) {
  const pixelDataElement = dataSet.elements.x7fe00010 || dataSet.elements.x7fe00008;
  if (!pixelDataElement) {
    return null;
  }
  if (pixelDataElement.encapsulatedPixelData) {
    return getEncapsulatedImageFrame(dataSet, frameIndex);
  }
  return getUncompressedImageFrame_default(dataSet, frameIndex);
}
var getPixelData_default = getPixelData;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/shared/getMinMax.js
function getMinMax(storedPixelData) {
  let min = storedPixelData[0];
  let max = storedPixelData[0];
  let storedPixel;
  const numPixels = storedPixelData.length;
  for (let index = 1; index < numPixels; index++) {
    storedPixel = storedPixelData[index];
    min = Math.min(min, storedPixel);
    max = Math.max(max, storedPixel);
  }
  return {
    min,
    max
  };
}
var getMinMax_default = getMinMax;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/convertColorSpace.js
function convertRGB(imageFrame, colorBuffer, useRGBA) {
  if (imageFrame.planarConfiguration === 0) {
    convertRGBColorByPixel_default(imageFrame.pixelData, colorBuffer, useRGBA);
  } else {
    convertRGBColorByPlane_default(imageFrame.pixelData, colorBuffer, useRGBA);
  }
}
function convertYBRFull(imageFrame, colorBuffer, useRGBA) {
  if (imageFrame.planarConfiguration === 0) {
    convertYBRFullByPixel_default(imageFrame.pixelData, colorBuffer, useRGBA);
  } else {
    convertYBRFullByPlane_default(imageFrame.pixelData, colorBuffer, useRGBA);
  }
}
function convertColorSpace(imageFrame, colorBuffer, useRGBA) {
  if (imageFrame.photometricInterpretation === "RGB") {
    convertRGB(imageFrame, colorBuffer, useRGBA);
  } else if (imageFrame.photometricInterpretation === "YBR_RCT") {
    convertRGB(imageFrame, colorBuffer, useRGBA);
  } else if (imageFrame.photometricInterpretation === "YBR_ICT") {
    convertRGB(imageFrame, colorBuffer, useRGBA);
  } else if (imageFrame.photometricInterpretation === "PALETTE COLOR") {
    convertPALETTECOLOR_default(imageFrame, colorBuffer, useRGBA);
  } else if (imageFrame.photometricInterpretation === "YBR_FULL_422") {
    convertYBRFull422ByPixel_default(imageFrame.pixelData, colorBuffer, useRGBA);
  } else if (imageFrame.photometricInterpretation === "YBR_FULL") {
    convertYBRFull(imageFrame, colorBuffer, useRGBA);
  } else {
    throw new Error(`No color space conversion for photometric interpretation ${imageFrame.photometricInterpretation}`);
  }
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/isColorConversionRequired.js
function isColorConversionRequired(imageFrame) {
  if (imageFrame === void 0) {
    return false;
  }
  const { rows, columns, photometricInterpretation, pixelDataLength, planarConfiguration } = imageFrame;
  if (pixelDataLength === 4 * columns * rows) {
    return false;
  }
  if (photometricInterpretation === "PALETTE COLOR") {
    return true;
  }
  if (photometricInterpretation.endsWith("420")) {
    return pixelDataLength === (3 * Math.ceil(columns / 2) + Math.floor(columns / 2)) * rows;
  } else if (photometricInterpretation.endsWith("422")) {
    return pixelDataLength === (3 * Math.ceil(columns / 2) + Math.floor(columns / 2)) * Math.ceil(rows / 2) + Math.floor(rows / 2) * columns;
  } else {
    return photometricInterpretation !== "RGB" || planarConfiguration === 1;
  }
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/decodeJPEGBaseline8BitColor.js
function arrayBufferToString(buffer) {
  return binaryToString(String.fromCharCode.apply(null, Array.prototype.slice.apply(new Uint8Array(buffer))));
}
function binaryToString(binary) {
  let error;
  try {
    return decodeURIComponent(escape(binary));
  } catch (_error) {
    error = _error;
    if (error instanceof URIError) {
      return binary;
    }
    throw error;
  }
}
function decodeJPEGBaseline8BitColor(imageFrame, pixelData, canvas) {
  const start = (/* @__PURE__ */ new Date()).getTime();
  const imgBlob = new Blob([pixelData], { type: "image/jpeg" });
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    if (fileReader.readAsBinaryString === void 0) {
      fileReader.readAsArrayBuffer(imgBlob);
    } else {
      fileReader.readAsBinaryString(imgBlob);
    }
    fileReader.onload = function() {
      const img = new Image();
      img.onload = function() {
        canvas.height = img.height;
        canvas.width = img.width;
        imageFrame.rows = img.height;
        imageFrame.columns = img.width;
        const context = canvas.getContext("2d");
        context.drawImage(this, 0, 0);
        const imageData = context.getImageData(0, 0, img.width, img.height);
        const end = (/* @__PURE__ */ new Date()).getTime();
        imageFrame.pixelData = new Uint8Array(imageData.data.buffer);
        imageFrame.imageData = imageData;
        imageFrame.decodeTimeInMS = end - start;
        const minMax = getMinMax_default(imageFrame.pixelData);
        imageFrame.smallestPixelValue = minMax.min;
        imageFrame.largestPixelValue = minMax.max;
        imageFrame.pixelDataLength = imageFrame.pixelData.length;
        resolve(imageFrame);
      };
      img.onerror = function(error) {
        reject(error);
      };
      if (fileReader.readAsBinaryString === void 0) {
        img.src = `data:image/jpeg;base64,${window.btoa(arrayBufferToString(fileReader.result))}`;
      } else {
        img.src = `data:image/jpeg;base64,${window.btoa(fileReader.result)}`;
      }
    };
    fileReader.onerror = (e) => {
      reject(e);
    };
  });
}
var decodeJPEGBaseline8BitColor_default = decodeJPEGBaseline8BitColor;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/decodeImageFrame.js
function processDecodeTask(imageFrame, transferSyntax, pixelData, srcOptions, decodeConfig) {
  const options2 = { ...srcOptions };
  delete options2.loader;
  delete options2.streamingData;
  const webWorkerManager = getWebWorkerManager();
  const priority = options2.priority || void 0;
  const transferList = options2.transferPixelData ? [pixelData.buffer] : void 0;
  return webWorkerManager.executeTask("dicomImageLoader", "decodeTask", {
    imageFrame,
    transferSyntax,
    pixelData,
    options: options2,
    decodeConfig
  }, {
    priority,
    requestType: options2?.requestType
  });
}
function decodeImageFrame(imageFrame, transferSyntax, pixelData, canvas, options2 = {}, decodeConfig) {
  switch (transferSyntax) {
    case "1.2.840.10008.1.2":
      return processDecodeTask(imageFrame, transferSyntax, pixelData, options2, decodeConfig);
    case "1.2.840.10008.1.2.1":
      return processDecodeTask(imageFrame, transferSyntax, pixelData, options2, decodeConfig);
    case "1.2.840.10008.1.2.2":
      return processDecodeTask(imageFrame, transferSyntax, pixelData, options2, decodeConfig);
    case "1.2.840.10008.1.2.1.99":
      return processDecodeTask(imageFrame, transferSyntax, pixelData, options2, decodeConfig);
    case "1.2.840.10008.1.2.5":
      return processDecodeTask(imageFrame, transferSyntax, pixelData, options2, decodeConfig);
    case "1.2.840.10008.1.2.4.50":
      if (imageFrame.bitsAllocated === 8 && (imageFrame.samplesPerPixel === 3 || imageFrame.samplesPerPixel === 4)) {
        return decodeJPEGBaseline8BitColor_default(imageFrame, pixelData, canvas);
      }
      return processDecodeTask(imageFrame, transferSyntax, pixelData, options2, decodeConfig);
    case "1.2.840.10008.1.2.4.51":
      return processDecodeTask(imageFrame, transferSyntax, pixelData, options2, decodeConfig);
    case "1.2.840.10008.1.2.4.57":
      return processDecodeTask(imageFrame, transferSyntax, pixelData, options2, decodeConfig);
    case "1.2.840.10008.1.2.4.70":
      return processDecodeTask(imageFrame, transferSyntax, pixelData, options2, decodeConfig);
    case "1.2.840.10008.1.2.4.80":
      return processDecodeTask(imageFrame, transferSyntax, pixelData, options2, decodeConfig);
    case "1.2.840.10008.1.2.4.81":
      return processDecodeTask(imageFrame, transferSyntax, pixelData, options2, decodeConfig);
    case "1.2.840.10008.1.2.4.90":
      return processDecodeTask(imageFrame, transferSyntax, pixelData, options2, decodeConfig);
    case "1.2.840.10008.1.2.4.91":
      return processDecodeTask(imageFrame, transferSyntax, pixelData, options2, decodeConfig);
    case "3.2.840.10008.1.2.4.96":
    case "1.2.840.10008.1.2.4.201":
    case "1.2.840.10008.1.2.4.202":
    case "1.2.840.10008.1.2.4.203":
      return processDecodeTask(imageFrame, transferSyntax, pixelData, options2, decodeConfig);
  }
  return Promise.reject(new Error(`No decoder for transfer syntax ${transferSyntax}`));
}
var decodeImageFrame_default = decodeImageFrame;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/getImageFrame.js
function getImageFrame(imageId) {
  const imagePixelModule = metaData_exports.get("imagePixelModule", imageId);
  return {
    samplesPerPixel: imagePixelModule.samplesPerPixel,
    photometricInterpretation: imagePixelModule.photometricInterpretation,
    planarConfiguration: imagePixelModule.planarConfiguration,
    rows: imagePixelModule.rows,
    columns: imagePixelModule.columns,
    bitsAllocated: imagePixelModule.bitsAllocated,
    bitsStored: imagePixelModule.bitsStored,
    pixelRepresentation: imagePixelModule.pixelRepresentation,
    smallestPixelValue: imagePixelModule.smallestPixelValue,
    largestPixelValue: imagePixelModule.largestPixelValue,
    redPaletteColorLookupTableDescriptor: imagePixelModule.redPaletteColorLookupTableDescriptor,
    greenPaletteColorLookupTableDescriptor: imagePixelModule.greenPaletteColorLookupTableDescriptor,
    bluePaletteColorLookupTableDescriptor: imagePixelModule.bluePaletteColorLookupTableDescriptor,
    redPaletteColorLookupTableData: imagePixelModule.redPaletteColorLookupTableData,
    greenPaletteColorLookupTableData: imagePixelModule.greenPaletteColorLookupTableData,
    bluePaletteColorLookupTableData: imagePixelModule.bluePaletteColorLookupTableData,
    pixelData: void 0,
    imageId
  };
}
var getImageFrame_default = getImageFrame;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/getScalingParameters.js
function getScalingParameters(metaData3, imageId) {
  const modalityLutModule = metaData3.get("modalityLutModule", imageId) || {};
  const generalSeriesModule = metaData3.get("generalSeriesModule", imageId) || {};
  const { modality } = generalSeriesModule;
  const scalingParameters = {
    rescaleSlope: modalityLutModule.rescaleSlope,
    rescaleIntercept: modalityLutModule.rescaleIntercept,
    modality
  };
  const scalingModules = metaData3.get("scalingModule", imageId) || {};
  return {
    ...scalingParameters,
    ...modality === "PT" && { suvbw: scalingModules.suvbw },
    ...modality === "RTDOSE" && {
      doseGridScaling: scalingModules.DoseGridScaling,
      doseSummation: scalingModules.DoseSummation,
      doseType: scalingModules.DoseType,
      doseUnit: scalingModules.DoseUnit
    }
  };
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/shared/isColorImage.js
function isColorImage_default(photoMetricInterpretation) {
  return photoMetricInterpretation === "RGB" || photoMetricInterpretation === "PALETTE COLOR" || photoMetricInterpretation === "YBR_FULL" || photoMetricInterpretation === "YBR_FULL_422" || photoMetricInterpretation === "YBR_PARTIAL_422" || photoMetricInterpretation === "YBR_PARTIAL_420" || photoMetricInterpretation === "YBR_RCT" || photoMetricInterpretation === "YBR_ICT";
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/removeAFromRGBA.js
function removeAFromRGBA(pixelData, targetBuffer) {
  const numPixels = pixelData.length / 4;
  let rgbIndex = 0;
  let bufferIndex = 0;
  for (let i = 0; i < numPixels; i++) {
    targetBuffer[bufferIndex++] = pixelData[rgbIndex++];
    targetBuffer[bufferIndex++] = pixelData[rgbIndex++];
    targetBuffer[bufferIndex++] = pixelData[rgbIndex++];
    rgbIndex++;
  }
  return targetBuffer;
}
var removeAFromRGBA_default = removeAFromRGBA;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/isModalityLutForDisplay.js
function isModalityLUTForDisplay(sopClassUid) {
  return sopClassUid !== "1.2.840.10008.5.1.4.1.1.12.1" && sopClassUid !== "1.2.840.10008.5.1.4.1.1.12.2.1";
}
var isModalityLutForDisplay_default = isModalityLUTForDisplay;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/shared/getPixelDataTypeFromMinMax.js
function getPixelDataTypeFromMinMax(min, max) {
  let pixelDataType;
  if (Number.isInteger(min) && Number.isInteger(max)) {
    if (min >= 0) {
      if (max <= 255) {
        pixelDataType = Uint8Array;
      } else if (max <= 65535) {
        pixelDataType = Uint16Array;
      } else if (max <= 4294967295) {
        pixelDataType = Uint32Array;
      }
    } else {
      if (min >= -128 && max <= 127) {
        pixelDataType = Int8Array;
      } else if (min >= -32768 && max <= 32767) {
        pixelDataType = Int16Array;
      }
    }
  }
  return pixelDataType || Float32Array;
}
function validatePixelDataType(min, max, type) {
  const pixelDataType = getPixelDataTypeFromMinMax(min, max);
  return pixelDataType === type;
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/setPixelDataType.js
function setPixelDataType(imageFrame) {
  const minValue = imageFrame.smallestPixelValue;
  const maxValue = imageFrame.largestPixelValue;
  const TypedArray = getPixelDataTypeFromMinMax(minValue, maxValue);
  if (TypedArray) {
    const typedArray = new TypedArray(imageFrame.pixelData);
    imageFrame.pixelData = typedArray;
  } else {
    throw new Error("Could not apply a typed array to the pixel data");
  }
}
var setPixelDataType_default = setPixelDataType;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/createImage.js
var lastImageIdDrawn = "";
function createImage(imageId, pixelData, transferSyntax, options2 = {}) {
  const useRGBA = options2.useRGBA;
  options2.preScale = {
    enabled: options2.preScale && options2.preScale.enabled !== void 0 ? options2.preScale.enabled : true
  };
  if (!pixelData?.length) {
    return Promise.reject(new Error("The pixel data is missing"));
  }
  const { MetadataModules } = enums_exports;
  const canvas = document.createElement("canvas");
  const imageFrame = getImageFrame_default(imageId);
  imageFrame.decodeLevel = options2.decodeLevel;
  options2.allowFloatRendering = canRenderFloatTextures();
  if (options2.preScale.enabled) {
    const scalingParameters = getScalingParameters(metaData_exports, imageId);
    if (scalingParameters) {
      options2.preScale = {
        ...options2.preScale,
        scalingParameters
      };
    }
  }
  const { decodeConfig } = getOptions();
  Object.keys(imageFrame).forEach((key) => {
    if (typeof imageFrame[key] === "function" || imageFrame[key] instanceof Promise) {
      delete imageFrame[key];
    }
  });
  const decodePromise = decodeImageFrame_default(imageFrame, transferSyntax, pixelData, canvas, options2, decodeConfig);
  const isColorImage = isColorImage_default(imageFrame.photometricInterpretation);
  return new Promise((resolve, reject) => {
    decodePromise.then(function(imageFrame2) {
      let alreadyTyped = false;
      if (options2.targetBuffer && options2.targetBuffer.type && !isColorImage) {
        const { arrayBuffer, type, offset: rawOffset = 0, length: rawLength } = options2.targetBuffer;
        const imageFrameLength = imageFrame2.pixelDataLength;
        const offset = rawOffset;
        const length = rawLength !== null && rawLength !== void 0 ? rawLength : imageFrameLength - offset;
        const typedArrayConstructors2 = {
          Uint8Array,
          Uint16Array,
          Int16Array,
          Float32Array,
          Uint32Array
        };
        if (length !== imageFrame2.pixelDataLength) {
          throw new Error(`target array for image does not have the same length (${length}) as the decoded image length (${imageFrame2.pixelDataLength}).`);
        }
        const TypedArrayConstructor = typedArrayConstructors2[type];
        const typedArray = arrayBuffer ? new TypedArrayConstructor(arrayBuffer, offset, length) : new TypedArrayConstructor(imageFrame2.pixelData);
        if (length !== imageFrame2.pixelDataLength) {
          throw new Error("target array for image does not have the same length as the decoded image length.");
        }
        imageFrame2.pixelData = typedArray;
        alreadyTyped = true;
      }
      if (!alreadyTyped) {
        setPixelDataType_default(imageFrame2);
      }
      const imagePlaneModule = metaData_exports.get(MetadataModules.IMAGE_PLANE, imageId) || {};
      const voiLutModule = metaData_exports.get(MetadataModules.VOI_LUT, imageId) || {};
      const modalityLutModule = metaData_exports.get(MetadataModules.MODALITY_LUT, imageId) || {};
      const sopCommonModule = metaData_exports.get(MetadataModules.SOP_COMMON, imageId) || {};
      const calibrationModule = metaData_exports.get(MetadataModules.CALIBRATION, imageId) || {};
      const { rows, columns } = imageFrame2;
      if (isColorImage) {
        if (isColorConversionRequired(imageFrame2)) {
          canvas.height = imageFrame2.rows;
          canvas.width = imageFrame2.columns;
          const context = canvas.getContext("2d");
          let imageData = context.createImageData(imageFrame2.columns, imageFrame2.rows);
          if (!useRGBA) {
            imageData = {
              ...imageData,
              data: new Uint8ClampedArray(3 * imageFrame2.columns * imageFrame2.rows)
            };
          }
          convertColorSpace(imageFrame2, imageData.data, useRGBA);
          imageFrame2.imageData = imageData;
          imageFrame2.pixelData = imageData.data;
          imageFrame2.pixelDataLength = imageData.data.length;
        } else if (!useRGBA && imageFrame2.pixelDataLength === 4 * rows * columns) {
          const colorBuffer = new Uint8Array(imageFrame2.pixelData.length / 4 * 3);
          imageFrame2.pixelData = removeAFromRGBA_default(imageFrame2.pixelData, colorBuffer);
          imageFrame2.pixelDataLength = imageFrame2.pixelData.length;
        }
        const minMax = getMinMax_default(imageFrame2.pixelData);
        imageFrame2.smallestPixelValue = minMax.min;
        imageFrame2.largestPixelValue = minMax.max;
      }
      let numberOfComponents = imageFrame2.samplesPerPixel;
      if (imageFrame2.photometricInterpretation === "PALETTE COLOR") {
        numberOfComponents = useRGBA ? 4 : 3;
      }
      const voxelManager = utilities_exports.VoxelManager.createImageVoxelManager({
        scalarData: imageFrame2.pixelData,
        width: imageFrame2.columns,
        height: imageFrame2.rows,
        numberOfComponents
      });
      const image = {
        imageId,
        dataType: imageFrame2.pixelData.constructor.name,
        color: isColorImage,
        calibration: calibrationModule,
        columnPixelSpacing: imagePlaneModule.columnPixelSpacing,
        columns: imageFrame2.columns,
        height: imageFrame2.rows,
        preScale: imageFrame2.preScale,
        intercept: modalityLutModule.rescaleIntercept ? modalityLutModule.rescaleIntercept : 0,
        slope: modalityLutModule.rescaleSlope ? modalityLutModule.rescaleSlope : 1,
        invert: imageFrame2.photometricInterpretation === "MONOCHROME1",
        minPixelValue: imageFrame2.smallestPixelValue,
        maxPixelValue: imageFrame2.largestPixelValue,
        rowPixelSpacing: imagePlaneModule.rowPixelSpacing,
        rows: imageFrame2.rows,
        sizeInBytes: imageFrame2.pixelData.byteLength,
        width: imageFrame2.columns,
        windowCenter: voiLutModule.windowCenter ? voiLutModule.windowCenter[0] : void 0,
        windowWidth: voiLutModule.windowWidth ? voiLutModule.windowWidth[0] : void 0,
        voiLUTFunction: voiLutModule.voiLUTFunction ? voiLutModule.voiLUTFunction : void 0,
        decodeTimeInMS: imageFrame2.decodeTimeInMS,
        floatPixelData: void 0,
        imageFrame: imageFrame2,
        voxelManager,
        rgba: isColorImage && useRGBA,
        getPixelData: () => imageFrame2.pixelData,
        getCanvas: void 0,
        numberOfComponents
      };
      if (image.color) {
        image.getCanvas = function() {
          if (lastImageIdDrawn === imageId) {
            return canvas;
          }
          const width = image.columns;
          const height = image.rows;
          canvas.height = height;
          canvas.width = width;
          const ctx = canvas.getContext("2d");
          const imageData = ctx.createImageData(width, height);
          const arr = imageFrame2.pixelData;
          if (arr.length === width * height * 4) {
            for (let i = 0; i < arr.length; i++) {
              imageData.data[i] = arr[i];
            }
          } else if (arr.length === width * height * 3) {
            let j = 0;
            for (let i = 0; i < arr.length; i += 3) {
              imageData.data[j++] = arr[i];
              imageData.data[j++] = arr[i + 1];
              imageData.data[j++] = arr[i + 2];
              imageData.data[j++] = 255;
            }
          }
          imageFrame2.pixelData = imageData.data;
          imageFrame2.pixelDataLength = imageData.data.length;
          imageFrame2.imageData = imageData;
          ctx.putImageData(imageFrame2.imageData, 0, 0);
          lastImageIdDrawn = imageId;
          return canvas;
        };
      }
      if (modalityLutModule.modalityLUTSequence && modalityLutModule.modalityLUTSequence.length > 0 && isModalityLutForDisplay_default(sopCommonModule.sopClassUID)) {
        image.modalityLUT = modalityLutModule.modalityLUTSequence[0];
      }
      if (voiLutModule.voiLUTSequence && voiLutModule.voiLUTSequence.length > 0) {
        image.voiLUT = voiLutModule.voiLUTSequence[0];
      }
      if (image.color) {
        image.windowWidth = 256;
        image.windowCenter = 128;
      }
      if (image.windowCenter === void 0 || image.windowWidth === void 0) {
        const windowLevel = utilities_exports.windowLevel.toWindowLevel(image.imageFrame.smallestPixelValue, image.imageFrame.largestPixelValue);
        image.windowWidth = windowLevel.windowWidth;
        image.windowCenter = windowLevel.windowCenter;
      }
      resolve(image);
    }, reject);
  });
}
var createImage_default = createImage;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/loadImage.js
var { ImageQualityStatus: ImageQualityStatus3 } = enums_exports;
function addDecache(imageLoadObject, imageId) {
  imageLoadObject.decache = function() {
    const parsedImageId = parseImageId_default(imageId);
    dataSetCacheManager_default.unload(parsedImageId.url);
  };
}
function loadImageFromPromise(dataSetPromise, imageId, frame = 0, sharedCacheKey, options2, callbacks) {
  const start = (/* @__PURE__ */ new Date()).getTime();
  const imageLoadObject = {
    cancelFn: void 0,
    promise: void 0
  };
  imageLoadObject.promise = new Promise((resolve, reject) => {
    dataSetPromise.then((dataSet) => {
      const pixelData = getPixelData_default(dataSet, frame);
      const transferSyntax = dataSet.string("x00020010");
      const loadEnd = (/* @__PURE__ */ new Date()).getTime();
      const imagePromise = createImage_default(imageId, pixelData, transferSyntax, options2);
      addDecache(imageLoadObject, imageId);
      imagePromise.then((image) => {
        image = image;
        image.data = dataSet;
        image.sharedCacheKey = sharedCacheKey;
        const end = (/* @__PURE__ */ new Date()).getTime();
        image.loadTimeInMS = loadEnd - start;
        image.totalTimeInMS = end - start;
        image.imageQualityStatus = ImageQualityStatus3.FULL_RESOLUTION;
        if (callbacks !== void 0 && callbacks.imageDoneCallback !== void 0) {
          callbacks.imageDoneCallback(image);
        }
        resolve(image);
      }, function(error) {
        reject({
          error,
          dataSet
        });
      });
    }, function(error) {
      reject({
        error
      });
    });
  });
  return imageLoadObject;
}
function loadImageFromDataSet(dataSet, imageId, frame = 0, sharedCacheKey, options2) {
  const start = (/* @__PURE__ */ new Date()).getTime();
  const promise = new Promise((resolve, reject) => {
    const loadEnd = (/* @__PURE__ */ new Date()).getTime();
    let imagePromise;
    try {
      const pixelData = getPixelData_default(dataSet, frame);
      const transferSyntax = dataSet.string("x00020010");
      imagePromise = createImage_default(imageId, pixelData, transferSyntax, options2);
    } catch (error) {
      reject({
        error,
        dataSet
      });
      return;
    }
    imagePromise.then((image) => {
      image = image;
      image.data = dataSet;
      const end = (/* @__PURE__ */ new Date()).getTime();
      image.loadTimeInMS = loadEnd - start;
      image.totalTimeInMS = end - start;
      image.imageQualityStatus = ImageQualityStatus3.FULL_RESOLUTION;
      resolve(image);
    }, reject);
  });
  return {
    promise,
    cancelFn: void 0
  };
}
function getLoaderForScheme(scheme) {
  if (scheme === "dicomweb" || scheme === "wadouri") {
    return xhrRequest_default;
  } else if (scheme === "dicomfile") {
    return loadFileRequest_default;
  }
}
function loadImage(imageId, options2 = {}) {
  const parsedImageId = parseImageId_default(imageId);
  options2 = Object.assign({}, options2);
  delete options2.loader;
  const schemeLoader = getLoaderForScheme(parsedImageId.scheme);
  if (dataSetCacheManager_default.isLoaded(parsedImageId.url)) {
    const dataSet = dataSetCacheManager_default.get(parsedImageId.url, schemeLoader, imageId);
    return loadImageFromDataSet(dataSet, imageId, parsedImageId.pixelDataFrame, parsedImageId.url, options2);
  }
  const dataSetPromise = dataSetCacheManager_default.load(parsedImageId.url, schemeLoader, imageId);
  return loadImageFromPromise(dataSetPromise, imageId, parsedImageId.frame, parsedImageId.url, options2);
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/register.js
function register_default() {
  registerImageLoader("dicomweb", loadImage);
  registerImageLoader("wadouri", loadImage);
  registerImageLoader("dicomfile", loadImage);
  metaData_exports.addProvider(metaDataProvider_default);
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadouri/index.js
var metaData = {
  getImagePixelModule: getImagePixelModule_default,
  getLUTs: getLUTs_default,
  getModalityLUTOutputPixelRepresentation: getModalityLUTOutputPixelRepresentation_default,
  getNumberValues: getNumberValues_default,
  metaDataProvider: metaDataProvider_default,
  metadataForDataset
};
var wadouri_default = {
  metaData,
  dataSetCacheManager: dataSetCacheManager_default,
  fileManager: fileManager_default,
  getEncapsulatedImageFrame,
  getUncompressedImageFrame: getUncompressedImageFrame_default,
  loadFileRequest: loadFileRequest_default,
  loadImageFromPromise,
  getLoaderForScheme,
  getPixelData: getPixelData_default,
  loadImage,
  parseImageId: parseImageId_default,
  unpackBinaryFrame: unpackBinaryFrame_default,
  register: register_default
};

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/metaData/getValue.js
function getValue(element, index, defaultValue) {
  index = index || 0;
  if (!element) {
    return defaultValue;
  }
  if (!element.Value) {
    return defaultValue;
  }
  if (Array.isArray(element.Value) && element.Value.length <= index) {
    return defaultValue;
  }
  return element.Value[index];
}
var getValue_default = getValue;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/metaData/getNumberString.js
function getNumberString(element, index, defaultValue) {
  const value = getValue_default(element, index, defaultValue);
  if (value === void 0) {
    return;
  }
  return parseFloat(String(value));
}
var getNumberString_default = getNumberString;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/metaData/getNumberValue.js
function getNumberValue(element, index) {
  const value = getValue_default(element, index);
  if (value === void 0) {
    return;
  }
  return parseFloat(value);
}
var getNumberValue_default = getNumberValue;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/metaData/getNumberValues.js
function getNumberValues2(element, minimumLength) {
  if (!element) {
    return;
  }
  if (!element.Value) {
    return;
  }
  if (!Array.isArray(element.Value)) {
    return;
  }
  if (minimumLength && element.Value.length < minimumLength) {
    return;
  }
  const values = [];
  for (let i = 0; i < element.Value.length; i++) {
    values.push(parseFloat(element.Value[i]));
  }
  return values;
}
var getNumberValues_default2 = getNumberValues2;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/metaData/metaDataProvider.js
var dicomParser5 = __toESM(require_dicomParser_min());

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/metaData/getOverlayPlaneModule.js
function getOverlayPlaneModule2(metaData3) {
  const overlays = [];
  for (let overlayGroup = 0; overlayGroup <= 30; overlayGroup += 2) {
    let groupStr = `x60${overlayGroup.toString(16)}`;
    if (groupStr.length === 4) {
      groupStr = `x600${overlayGroup.toString(16)}`;
    }
    const data = getValue_default(metaData3[`${groupStr}3000`]);
    if (!data) {
      continue;
    }
    const pixelData = [];
    for (let i = 0; i < data.length; i++) {
      for (let k = 0; k < 8; k++) {
        const byte_as_int = metaData3.Value[data.dataOffset + i];
        pixelData[i * 8 + k] = byte_as_int >> k & 1;
      }
    }
    overlays.push({
      rows: getNumberValue_default(metaData3[`${groupStr}0010`]),
      columns: getNumberValue_default(metaData3[`${groupStr}0011`]),
      type: getValue_default(metaData3[`${groupStr}0040`]),
      x: getNumberValue_default(metaData3[`${groupStr}0050`], 1) - 1,
      y: getNumberValue_default(metaData3[`${groupStr}0050`], 0) - 1,
      pixelData,
      description: getValue_default(metaData3[`${groupStr}0022`]),
      label: getValue_default(metaData3[`${groupStr}1500`]),
      roiArea: getValue_default(metaData3[`${groupStr}1301`]),
      roiMean: getValue_default(metaData3[`${groupStr}1302`]),
      roiStandardDeviation: getValue_default(metaData3[`${groupStr}1303`])
    });
  }
  return {
    overlays
  };
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/imageIdToURI.js
function imageIdToURI(imageId) {
  const colonIndex = imageId.indexOf(":");
  return imageId.substring(colonIndex + 1);
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/getTagValue.js
function getTagValue(tag, justElement = true) {
  if (tag && tag.Value) {
    if (tag.Value[0] && justElement) {
      return tag.Value[0];
    }
    return tag.Value;
  }
  return tag;
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/combineFrameInstance.js
function getFrameInformation2(PerFrameFunctionalGroupsSequence, SharedFunctionalGroupsSequence, frameNumber) {
  const shared = (SharedFunctionalGroupsSequence ? Object.values(SharedFunctionalGroupsSequence[0]) : []).map((it) => it["Value"]?.[0]).filter((it) => it !== void 0 && typeof it === "object");
  const perFrame = (PerFrameFunctionalGroupsSequence ? Object.values(PerFrameFunctionalGroupsSequence[frameNumber - 1]) : []).map((it) => it["Value"]?.[0]).filter((it) => it !== void 0 && typeof it === "object");
  return {
    shared,
    perFrame
  };
}
function getMultiframeInformation2(metaData3) {
  let { 52009230: PerFrameFunctionalGroupsSequence, 52009229: SharedFunctionalGroupsSequence, "00280008": NumberOfFrames, ...rest } = metaData3;
  PerFrameFunctionalGroupsSequence = getTagValue(PerFrameFunctionalGroupsSequence, false);
  SharedFunctionalGroupsSequence = getTagValue(SharedFunctionalGroupsSequence, false);
  NumberOfFrames = getTagValue(NumberOfFrames);
  return {
    PerFrameFunctionalGroupsSequence,
    SharedFunctionalGroupsSequence,
    NumberOfFrames,
    rest
  };
}
function combineFrameInstance(frameNumber, instance) {
  const { PerFrameFunctionalGroupsSequence, SharedFunctionalGroupsSequence, NumberOfFrames, rest } = getMultiframeInformation2(instance);
  if (PerFrameFunctionalGroupsSequence || NumberOfFrames > 1) {
    const { shared, perFrame } = getFrameInformation2(PerFrameFunctionalGroupsSequence, SharedFunctionalGroupsSequence, frameNumber);
    const newInstance = Object.assign(instance, { frameNumber });
    [...shared, ...perFrame].forEach((item) => {
      Object.entries(item).forEach(([key, value]) => {
        newInstance[key] = value;
      });
    });
    return Object.assign(rest, { "00280008": NumberOfFrames }, newInstance);
  }
  return instance;
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/metaDataManager.js
var metadataByImageURI = [];
var multiframeMetadataByImageURI = {};
function _retrieveMultiframeMetadataImageURI(imageURI) {
  const lastSlashIdx = imageURI.indexOf("/frames/") + 8;
  const imageIdFrameless = imageURI.slice(0, lastSlashIdx);
  const frame = parseInt(imageURI.slice(lastSlashIdx), 10);
  const metadata = metadataByImageURI[`${imageIdFrameless}1`];
  return {
    metadata,
    frame
  };
}
function retrieveMultiframeMetadataImageId(imageId) {
  const imageURI = imageIdToURI(imageId);
  return _retrieveMultiframeMetadataImageURI(imageURI);
}
function isMultiframe(metadata) {
  if (metadata["52009230"] !== void 0 || metadata["52009229"] !== void 0) {
    return true;
  }
  const numberOfFrames = getValue_default(metadata["00280008"]);
  return numberOfFrames && numberOfFrames > 1;
}
function add2(imageId, metadata) {
  const imageURI = imageIdToURI(imageId);
  Object.defineProperty(metadata, "isMultiframe", {
    value: isMultiframe(metadata),
    enumerable: false
  });
  metadataByImageURI[imageURI] = metadata;
}
function get3(imageId) {
  const imageURI = imageIdToURI(imageId);
  const metadata = metadataByImageURI[imageURI];
  if (metadata && !metadata?.isMultiframe) {
    return metadata;
  }
  const cachedMetadata = multiframeMetadataByImageURI[imageURI];
  if (cachedMetadata) {
    return cachedMetadata;
  }
  const retrievedMetadata = _retrieveMultiframeMetadataImageURI(imageURI);
  if (!retrievedMetadata || !retrievedMetadata.metadata) {
    return;
  }
  const { metadata: firstFrameMetadata, frame } = retrievedMetadata;
  if (firstFrameMetadata) {
    const combined = combineFrameInstance(frame, firstFrameMetadata);
    multiframeMetadataByImageURI[imageURI] = combined;
    return combined;
  }
}
function remove2(imageId) {
  const imageURI = imageIdToURI(imageId);
  metadataByImageURI[imageURI] = void 0;
  multiframeMetadataByImageURI[imageURI] = void 0;
}
function purge3() {
  metadataByImageURI = [];
  multiframeMetadataByImageURI = {};
}
var metaDataManager_default = {
  add: add2,
  get: get3,
  remove: remove2,
  purge: purge3
};

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/metaData/NMHelpers.js
function isNMModality(metaData3) {
  const modality = getValue_default(metaData3["00080060"]);
  return modality.includes("NM");
}
function getImageTypeSubItemFromMetadata(metaData3, index) {
  const imageType = getTagValue(metaData3["00080008"], false);
  if (imageType) {
    return imageType[index];
  }
  return void 0;
}
function extractOrientationFromNMMultiframeMetadata(metaData3) {
  let imageOrientationPatient;
  const imageSubType = getImageTypeSubItemFromMetadata(metaData3, 2);
  if (imageSubType && isNMReconstructable(imageSubType)) {
    const detectorInformationSequence = getTagValue(metaData3["00540022"]);
    if (detectorInformationSequence) {
      imageOrientationPatient = getNumberValues_default2(detectorInformationSequence["00200037"], 6);
    }
  }
  return imageOrientationPatient;
}
function extractPositionFromNMMultiframeMetadata(metaData3) {
  let imagePositionPatient;
  const imageSubType = getImageTypeSubItemFromMetadata(metaData3, 2);
  if (imageSubType && isNMReconstructable(imageSubType)) {
    const detectorInformationSequence = getTagValue(metaData3["00540022"]);
    if (detectorInformationSequence) {
      imagePositionPatient = getNumberValues_default2(detectorInformationSequence["00200032"], 3);
    }
  }
  return imagePositionPatient;
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/metaData/extractPositioningFromMetadata.js
function extractOrientationFromMetadata(metaData3) {
  let imageOrientationPatient = getNumberValues_default2(metaData3["00200037"], 6);
  if (!imageOrientationPatient && isNMModality(metaData3)) {
    imageOrientationPatient = extractOrientationFromNMMultiframeMetadata(metaData3);
  }
  return imageOrientationPatient;
}
function extractPositionFromMetadata(metaData3) {
  let imagePositionPatient = getNumberValues_default2(metaData3["00200032"], 3);
  if (!imagePositionPatient && isNMModality(metaData3)) {
    imagePositionPatient = extractPositionFromNMMultiframeMetadata(metaData3);
  }
  return imagePositionPatient;
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/metaData/getFirstNumberValue.js
function getFirstNumberValue(sequence, key) {
  const values = getNumberValues_default2(sequence[key]);
  return values ? values[0] : null;
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/metaData/getSequenceItems.js
function getSequenceItems(element) {
  if (!element?.Value?.length) {
    return [];
  }
  if (!Array.isArray(element.Value)) {
    if (typeof element.Value === "object") {
      console.warn("Warning: Value should be an array, but an object was found. Encapsulating the object in an array.");
      return [element.Value];
    }
    return [];
  }
  return element.Value;
}
var getSequenceItems_default = getSequenceItems;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/metaData/USHelpers.js
function getUSEnhancedRegions2(metadata) {
  const sequenceOfUltrasoundRegions = getSequenceItems_default(metadata["00186011"]);
  if (!sequenceOfUltrasoundRegions || !sequenceOfUltrasoundRegions.length) {
    return null;
  }
  const regions = sequenceOfUltrasoundRegions.map((sequence) => {
    const physicalDeltaX = getFirstNumberValue(sequence, "0018602C");
    const physicalDeltaY = getFirstNumberValue(sequence, "0018602E");
    const physicalUnitsXDirection = getFirstNumberValue(sequence, "00186024");
    const physicalUnitsYDirection = getFirstNumberValue(sequence, "00186026");
    const regionLocationMinY0 = getFirstNumberValue(sequence, "0018601A");
    const regionLocationMaxY1 = getFirstNumberValue(sequence, "0018601E");
    const regionLocationMinX0 = getFirstNumberValue(sequence, "00186018");
    const regionLocationMaxX1 = getFirstNumberValue(sequence, "0018601C");
    const referencePixelX0 = getFirstNumberValue(sequence, "00186020");
    const referencePixelY0 = getFirstNumberValue(sequence, "00186022");
    const referencePhysicalPixelValueY = getFirstNumberValue(sequence, "0018602A");
    const referencePhysicalPixelValueX = getFirstNumberValue(sequence, "00186028");
    const regionSpatialFormat = getFirstNumberValue(sequence, "00186012");
    const regionDataType = getFirstNumberValue(sequence, "00186014");
    const regionFlags = getFirstNumberValue(sequence, "00186016");
    const transducerFrequency = getFirstNumberValue(sequence, "00186030");
    return {
      regionLocationMinY0,
      regionLocationMaxY1,
      regionLocationMinX0,
      regionLocationMaxX1,
      referencePixelX0,
      referencePixelY0,
      physicalDeltaX,
      physicalDeltaY,
      physicalUnitsXDirection,
      physicalUnitsYDirection,
      referencePhysicalPixelValueY,
      referencePhysicalPixelValueX,
      regionSpatialFormat,
      regionDataType,
      regionFlags,
      transducerFrequency
    };
  });
  return regions;
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/metaData/metaDataProvider.js
function metaDataProvider2(type, imageId) {
  const { MetadataModules } = enums_exports;
  if (type === MetadataModules.MULTIFRAME) {
    const { metadata, frame } = retrieveMultiframeMetadataImageId(imageId);
    if (!metadata) {
      return;
    }
    const { PerFrameFunctionalGroupsSequence, SharedFunctionalGroupsSequence, NumberOfFrames } = getMultiframeInformation2(metadata);
    if (PerFrameFunctionalGroupsSequence || NumberOfFrames > 1) {
      const { shared, perFrame } = getFrameInformation2(PerFrameFunctionalGroupsSequence, SharedFunctionalGroupsSequence, frame);
      return {
        NumberOfFrames,
        PerFrameFunctionalInformation: perFrame,
        SharedFunctionalInformation: shared
      };
    }
    return {
      NumberOfFrames
    };
  }
  const metaData3 = metaDataManager_default.get(imageId);
  if (!metaData3) {
    return;
  }
  if (type === MetadataModules.GENERAL_STUDY) {
    return {
      studyDescription: getValue_default(metaData3["00081030"]),
      studyDate: dicomParser5.parseDA(getValue_default(metaData3["00080020"])),
      studyTime: dicomParser5.parseTM(getValue_default(metaData3["00080030"], 0, "")),
      accessionNumber: getValue_default(metaData3["00080050"])
    };
  }
  if (type === MetadataModules.GENERAL_SERIES) {
    return {
      modality: getValue_default(metaData3["00080060"]),
      seriesInstanceUID: getValue_default(metaData3["0020000E"]),
      seriesDescription: getValue_default(metaData3["0008103E"]),
      seriesNumber: getNumberValue_default(metaData3["00200011"]),
      studyInstanceUID: getValue_default(metaData3["0020000D"]),
      seriesDate: dicomParser5.parseDA(getValue_default(metaData3["00080021"])),
      seriesTime: dicomParser5.parseTM(getValue_default(metaData3["00080031"], 0, "")),
      acquisitionDate: dicomParser5.parseDA(getValue_default(metaData3["00080022"])),
      acquisitionTime: dicomParser5.parseTM(getValue_default(metaData3["00080032"], 0, ""))
    };
  }
  if (type === MetadataModules.GENERAL_IMAGE) {
    return {
      sopInstanceUID: getValue_default(metaData3["00080018"]),
      instanceNumber: getNumberValue_default(metaData3["00200013"]),
      lossyImageCompression: getValue_default(metaData3["00282110"]),
      lossyImageCompressionRatio: getNumberValue_default(metaData3["00282112"]),
      lossyImageCompressionMethod: getValue_default(metaData3["00282114"])
    };
  }
  if (type === MetadataModules.PATIENT) {
    return {
      patientID: getValue_default(metaData3["00100020"]),
      patientName: getValue_default(metaData3["00100010"])
    };
  }
  if (type === MetadataModules.PATIENT_STUDY) {
    return {
      patientAge: getNumberValue_default(metaData3["00101010"]),
      patientSize: getNumberValue_default(metaData3["00101020"]),
      patientSex: getValue_default(metaData3["00100040"]),
      patientWeight: getNumberValue_default(metaData3["00101030"])
    };
  }
  if (type === MetadataModules.NM_MULTIFRAME_GEOMETRY) {
    const modality = getValue_default(metaData3["00080060"]);
    const imageSubType = getImageTypeSubItemFromMetadata(metaData3, 2);
    return {
      modality,
      imageType: getValue_default(metaData3["00080008"]),
      imageSubType,
      imageOrientationPatient: extractOrientationFromMetadata(metaData3),
      imagePositionPatient: extractPositionFromMetadata(metaData3),
      sliceThickness: getNumberValue_default(metaData3["00180050"]),
      spacingBetweenSlices: getNumberValue_default(metaData3["00180088"]),
      pixelSpacing: getNumberValues_default2(metaData3["00280030"], 2),
      numberOfFrames: getNumberValue_default(metaData3["00280008"]),
      isNMReconstructable: isNMReconstructable(imageSubType) && modality.includes("NM")
    };
  }
  if (type === MetadataModules.IMAGE_PLANE) {
    let imageOrientationPatient = extractOrientationFromMetadata(metaData3);
    let imagePositionPatient = extractPositionFromMetadata(metaData3);
    const pixelSpacing = getNumberValues_default2(metaData3["00280030"], 2);
    let columnPixelSpacing = null;
    let rowPixelSpacing = null;
    let rowCosines = null;
    let columnCosines = null;
    let usingDefaultValues = false;
    if (pixelSpacing) {
      rowPixelSpacing = pixelSpacing[0];
      columnPixelSpacing = pixelSpacing[1];
    } else {
      usingDefaultValues = true;
      rowPixelSpacing = 1;
      columnPixelSpacing = 1;
    }
    if (imageOrientationPatient) {
      rowCosines = [
        parseFloat(imageOrientationPatient[0]),
        parseFloat(imageOrientationPatient[1]),
        parseFloat(imageOrientationPatient[2])
      ];
      columnCosines = [
        parseFloat(imageOrientationPatient[3]),
        parseFloat(imageOrientationPatient[4]),
        parseFloat(imageOrientationPatient[5])
      ];
    } else {
      rowCosines = [1, 0, 0];
      columnCosines = [0, 1, 0];
      usingDefaultValues = true;
      imageOrientationPatient = [...rowCosines, ...columnCosines];
    }
    if (!imagePositionPatient) {
      imagePositionPatient = [0, 0, 0];
      usingDefaultValues = true;
    }
    return {
      frameOfReferenceUID: getValue_default(metaData3["00200052"]),
      rows: getNumberValue_default(metaData3["00280010"]),
      columns: getNumberValue_default(metaData3["00280011"]),
      imageOrientationPatient,
      rowCosines,
      columnCosines,
      imagePositionPatient,
      sliceThickness: getNumberValue_default(metaData3["00180050"]),
      sliceLocation: getNumberValue_default(metaData3["00201041"]),
      pixelSpacing,
      rowPixelSpacing,
      columnPixelSpacing,
      usingDefaultValues
    };
  }
  if (type === MetadataModules.ULTRASOUND_ENHANCED_REGION) {
    return getUSEnhancedRegions2(metaData3);
  }
  if (type === MetadataModules.CALIBRATION) {
    const modality = getValue_default(metaData3["00080060"]);
    if (modality === "US") {
      const enhancedRegion = getUSEnhancedRegions2(metaData3);
      return {
        sequenceOfUltrasoundRegions: enhancedRegion
      };
    }
  }
  if (type === MetadataModules.IMAGE_URL) {
    return getImageUrlModule(imageId, metaData3);
  }
  if (type === MetadataModules.CINE) {
    return getCineModule(imageId, metaData3);
  }
  if (type === MetadataModules.IMAGE_PIXEL) {
    return {
      samplesPerPixel: getNumberValue_default(metaData3["00280002"]),
      photometricInterpretation: getValue_default(metaData3["00280004"]),
      rows: getNumberValue_default(metaData3["00280010"]),
      columns: getNumberValue_default(metaData3["00280011"]),
      bitsAllocated: getNumberValue_default(metaData3["00280100"]),
      bitsStored: getNumberValue_default(metaData3["00280101"]),
      highBit: getValue_default(metaData3["00280102"]),
      pixelRepresentation: getNumberValue_default(metaData3["00280103"]),
      planarConfiguration: getNumberValue_default(metaData3["00280006"]),
      pixelAspectRatio: getValue_default(metaData3["00280034"]),
      smallestPixelValue: getNumberValue_default(metaData3["00280106"]),
      largestPixelValue: getNumberValue_default(metaData3["00280107"]),
      redPaletteColorLookupTableDescriptor: getNumberValues_default2(metaData3["00281101"]),
      greenPaletteColorLookupTableDescriptor: getNumberValues_default2(metaData3["00281102"]),
      bluePaletteColorLookupTableDescriptor: getNumberValues_default2(metaData3["00281103"]),
      redPaletteColorLookupTableData: getNumberValues_default2(metaData3["00281201"]),
      greenPaletteColorLookupTableData: getNumberValues_default2(metaData3["00281202"]),
      bluePaletteColorLookupTableData: getNumberValues_default2(metaData3["00281203"])
    };
  }
  if (type === MetadataModules.VOI_LUT) {
    return {
      windowCenter: getNumberValues_default2(metaData3["00281050"], 1),
      windowWidth: getNumberValues_default2(metaData3["00281051"], 1),
      voiLUTFunction: getValue_default(metaData3["00281056"])
    };
  }
  if (type === MetadataModules.MODALITY_LUT) {
    return {
      rescaleIntercept: getNumberValue_default(metaData3["00281052"]),
      rescaleSlope: getNumberValue_default(metaData3["00281053"]),
      rescaleType: getValue_default(metaData3["00281054"])
    };
  }
  if (type === MetadataModules.SOP_COMMON) {
    return {
      sopClassUID: getValue_default(metaData3["00080016"]),
      sopInstanceUID: getValue_default(metaData3["00080018"])
    };
  }
  if (type === MetadataModules.PET_ISOTOPE) {
    const radiopharmaceuticalInfo = getValue_default(metaData3["00540016"]);
    if (radiopharmaceuticalInfo === void 0) {
      return;
    }
    return {
      radiopharmaceuticalInfo: {
        radiopharmaceuticalStartTime: dicomParser5.parseTM(getValue_default(radiopharmaceuticalInfo["00181072"], 0, "")),
        radiopharmaceuticalStartDateTime: getValue_default(radiopharmaceuticalInfo["00181078"], 0, ""),
        radionuclideTotalDose: getNumberValue_default(radiopharmaceuticalInfo["00181074"]),
        radionuclideHalfLife: getNumberValue_default(radiopharmaceuticalInfo["00181075"])
      }
    };
  }
  if (type === MetadataModules.OVERLAY_PLANE) {
    return getOverlayPlaneModule2(metaData3);
  }
  if (type === "transferSyntax") {
    return getTransferSyntax(imageId, metaData3);
  }
  if (type === MetadataModules.PET_SERIES) {
    return {
      correctedImage: getValue_default(metaData3["00280051"]),
      units: getValue_default(metaData3["00541001"]),
      decayCorrection: getValue_default(metaData3["00541102"])
    };
  }
  if (type === MetadataModules.PET_IMAGE) {
    return {
      frameReferenceTime: getNumberValue_default(metaData3["00541300"]),
      actualFrameDuration: getNumberValue_default(metaData3["00181242"])
    };
  }
  if (type === "instance") {
    return getInstanceModule(imageId, metaDataProvider2, instanceModuleNames);
  }
}
function getImageUrlModule(imageId, metaData3) {
  const { transferSyntaxUID } = getTransferSyntax(imageId, metaData3);
  const isVideo = utilities_exports.isVideoTransferSyntax(transferSyntaxUID);
  const imageUrl = imageId.substring(7);
  const thumbnail = imageUrl.replace("/frames/", "/thumbnail/");
  let rendered = imageUrl.replace("/frames/", "/rendered/");
  if (isVideo) {
    rendered = rendered.replace("/rendered/1", "/rendered");
  }
  return {
    isVideo,
    rendered,
    thumbnail
  };
}
function getCineModule(imageId, metaData3) {
  const cineRate = getValue_default(metaData3["00180040"]);
  return {
    cineRate,
    numberOfFrames: getNumberValue_default(metaData3["00280008"])
  };
}
function getTransferSyntax(imageId, metaData3) {
  return {
    transferSyntaxUID: getValue_default(metaData3["00020010"]) || getValue_default(metaData3["00083002"])
  };
}
var metaDataProvider_default2 = metaDataProvider2;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/internal/rangeRequest.js
function rangeRequest(url, imageId, defaultHeaders = {}, options2 = {}) {
  const globalOptions = getOptions();
  const { retrieveOptions = {}, streamingData } = options2;
  const chunkSize = streamingData.chunkSize || getValue2(imageId, retrieveOptions, "chunkSize") || 65536;
  const errorInterceptor = (err) => {
    if (typeof globalOptions.errorInterceptor === "function") {
      const error = new Error("request failed");
      globalOptions.errorInterceptor(error);
    } else {
      console.warn("rangeRequest:Caught", err);
    }
  };
  const promise = new Promise(async (resolve, reject) => {
    const headers = Object.assign({}, defaultHeaders);
    Object.keys(headers).forEach(function(key) {
      if (headers[key] === null || headers[key] === void 0) {
        delete headers[key];
      }
    });
    try {
      if (!streamingData.encodedData) {
        streamingData.chunkSize = chunkSize;
        streamingData.rangesFetched = 0;
      }
      const byteRange = getByteRange(streamingData, retrieveOptions);
      const { encodedData, responseHeaders } = await fetchRangeAndAppend(url, headers, byteRange, streamingData);
      const contentType = responseHeaders.get("content-type");
      const { totalBytes } = streamingData;
      const doneAllBytes = totalBytes === encodedData.byteLength;
      const extract = extractMultipart(contentType, encodedData, {
        isPartial: true
      });
      const imageQualityStatus = getImageQualityStatus(retrieveOptions, doneAllBytes || extract.extractDone);
      resolve({
        ...extract,
        imageQualityStatus,
        percentComplete: extract.extractDone ? 100 : chunkSize * 100 / totalBytes
      });
    } catch (err) {
      errorInterceptor(err);
      console.error(err);
      reject(err);
    }
  });
  return promise;
}
async function fetchRangeAndAppend(url, headers, range, streamingData) {
  if (range) {
    headers = Object.assign(headers, {
      Range: `bytes=${range[0]}-${range[1]}`
    });
  }
  let { encodedData } = streamingData;
  if (range[1] && encodedData?.byteLength > range[1]) {
    return streamingData;
  }
  const response = await fetch(url, {
    headers,
    signal: void 0
  });
  const responseArrayBuffer = await response.arrayBuffer();
  const responseTypedArray = new Uint8Array(responseArrayBuffer);
  const { status } = response;
  let newByteArray;
  if (encodedData) {
    newByteArray = new Uint8Array(encodedData.length + responseTypedArray.length);
    newByteArray.set(encodedData, 0);
    newByteArray.set(responseTypedArray, encodedData.length);
    streamingData.rangesFetched = 1;
  } else {
    newByteArray = new Uint8Array(responseTypedArray.length);
    newByteArray.set(responseTypedArray, 0);
    streamingData.rangesFetched++;
  }
  streamingData.encodedData = encodedData = newByteArray;
  streamingData.responseHeaders = response.headers;
  const contentRange = response.headers.get("Content-Range");
  if (contentRange) {
    streamingData.totalBytes = Number(contentRange.split("/")[1]);
  } else if (status !== 206 || !range) {
    streamingData.totalBytes = encodedData?.byteLength;
  } else if (range[1] === "" || encodedData?.length < range[1]) {
    streamingData.totalBytes = encodedData.byteLength;
  } else {
    streamingData.totalBytes = Number.MAX_SAFE_INTEGER;
  }
  return streamingData;
}
function getValue2(imageId, src, attr) {
  const value = src[attr];
  if (typeof value !== "function") {
    return value;
  }
  const metaData3 = metaDataManager_default.get(imageId);
  return value(metaData3, imageId);
}
function getByteRange(streamingData, retrieveOptions) {
  const { totalBytes, encodedData, chunkSize = 65536 } = streamingData;
  const { rangeIndex = 0 } = retrieveOptions;
  if (rangeIndex === -1 && (!totalBytes || !encodedData)) {
    return [0, ""];
  }
  if (rangeIndex === -1 || encodedData?.byteLength > totalBytes - chunkSize) {
    return [encodedData?.byteLength || 0, ""];
  }
  return [encodedData?.byteLength || 0, chunkSize * (rangeIndex + 1) - 1];
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/getPixelData.js
function getPixelData2(uri, imageId, mediaType2 = "application/octet-stream", options2) {
  const { streamingData, retrieveOptions = {} } = options2 || {};
  const headers = {
    Accept: mediaType2
  };
  let url = retrieveOptions.urlArguments ? `${uri}${uri.indexOf("?") === -1 ? "?" : "&"}${retrieveOptions.urlArguments}` : uri;
  if (retrieveOptions.framesPath) {
    url = url.replace("/frames/", retrieveOptions.framesPath);
  }
  if (streamingData?.url !== url) {
    options2.streamingData = { url };
  }
  if (retrieveOptions.rangeIndex !== void 0) {
    return rangeRequest(url, imageId, headers, options2);
  }
  if (retrieveOptions.streaming) {
    return streamRequest(url, imageId, headers, options2);
  }
  const loadPromise = xhrRequest_default(url, imageId, headers);
  const { xhr } = loadPromise;
  return loadPromise.then(function(imageFrameAsArrayBuffer) {
    const contentType = xhr.getResponseHeader("Content-Type") || "application/octet-stream";
    const extracted = extractMultipart(contentType, new Uint8Array(imageFrameAsArrayBuffer));
    extracted.imageQualityStatus = getImageQualityStatus(retrieveOptions, true);
    return extracted;
  });
}
var getPixelData_default2 = getPixelData2;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/loadImage.js
var { ProgressiveIterator: ProgressiveIterator2 } = utilities_exports;
var { ImageQualityStatus: ImageQualityStatus4 } = enums_exports;
var streamableTransferSyntaxes = /* @__PURE__ */ new Set([
  "3.2.840.10008.1.2.4.96",
  "1.2.840.10008.1.2.4.202",
  "1.2.840.10008.1.2.4.203"
]);
function getTransferSyntaxForContentType(contentType) {
  const defaultTransferSyntax = "1.2.840.10008.1.2";
  if (!contentType) {
    return defaultTransferSyntax;
  }
  const parameters = contentType.split(";");
  const params = {};
  parameters.forEach((parameter) => {
    const parameterValues = parameter.split("=");
    if (parameterValues.length !== 2) {
      return;
    }
    const value = parameterValues[1].trim().replace(/"/g, "");
    params[parameterValues[0].trim()] = value;
  });
  const defaultTransferSyntaxByType = {
    "image/jpeg": "1.2.840.10008.1.2.4.50",
    "image/x-dicom-rle": "1.2.840.10008.1.2.5",
    "image/x-jls": "1.2.840.10008.1.2.4.80",
    "image/jls": "1.2.840.10008.1.2.4.80",
    "image/jll": "1.2.840.10008.1.2.4.70",
    "image/jp2": "1.2.840.10008.1.2.4.90",
    "image/jpx": "1.2.840.10008.1.2.4.92",
    "image/jphc": "3.2.840.10008.1.2.4.96",
    "image/jxl": "1.2.840.10008.1.2.4.140"
  };
  if (params["transfer-syntax"]) {
    return params["transfer-syntax"];
  } else if (contentType && !Object.keys(params).length && defaultTransferSyntaxByType[contentType]) {
    return defaultTransferSyntaxByType[contentType];
  } else if (params.type && defaultTransferSyntaxByType[params.type]) {
    return defaultTransferSyntaxByType[params.type];
  } else if (defaultTransferSyntaxByType[contentType]) {
    return defaultTransferSyntaxByType[contentType];
  }
  return defaultTransferSyntax;
}
function getImageRetrievalPool() {
  return imageRetrievalPoolManager_default;
}
var mediaType = "multipart/related; type=application/octet-stream; transfer-syntax=*";
function loadImage2(imageId, options2 = {}) {
  const imageRetrievalPool = getImageRetrievalPool();
  const start = (/* @__PURE__ */ new Date()).getTime();
  const uncompressedIterator = new ProgressiveIterator2("decompress");
  async function sendXHR(imageURI, imageId2, mediaType2) {
    uncompressedIterator.generate(async (it) => {
      const compressedIt = ProgressiveIterator2.as(getPixelData_default2(imageURI, imageId2, mediaType2, options2));
      let lastDecodeLevel = 10;
      for await (const result of compressedIt) {
        const { pixelData, imageQualityStatus = ImageQualityStatus4.FULL_RESOLUTION, percentComplete, done = true, extractDone = true } = result;
        const transferSyntax = getTransferSyntaxForContentType(result.contentType);
        if (!extractDone && !streamableTransferSyntaxes.has(transferSyntax)) {
          continue;
        }
        const decodeLevel = result.decodeLevel ?? (imageQualityStatus === ImageQualityStatus4.FULL_RESOLUTION ? 0 : decodeLevelFromComplete(percentComplete, options2.retrieveOptions?.decodeLevel));
        if (!done && lastDecodeLevel <= decodeLevel) {
          continue;
        }
        try {
          const useOptions = {
            ...options2,
            decodeLevel
          };
          const image = await createImage_default(imageId2, pixelData, transferSyntax, useOptions);
          const end = (/* @__PURE__ */ new Date()).getTime();
          image.loadTimeInMS = end - start;
          image.transferSyntaxUID = transferSyntax;
          image.imageQualityStatus = imageQualityStatus;
          it.add(image, done);
          lastDecodeLevel = decodeLevel;
        } catch (e) {
          if (extractDone) {
            console.warn("Couldn't decode", e);
            throw e;
          }
        }
      }
    });
  }
  const requestType = options2.requestType || enums_exports.RequestType.Interaction;
  const additionalDetails = options2.additionalDetails || { imageId };
  const priority = options2.priority === void 0 ? 5 : options2.priority;
  const uri = imageId.substring(7);
  imageRetrievalPool.addRequest(sendXHR.bind(this, uri, imageId, mediaType), requestType, additionalDetails, priority);
  return {
    promise: uncompressedIterator.getDonePromise(),
    cancelFn: void 0
  };
}
function decodeLevelFromComplete(percent, retrieveDecodeLevel = 4) {
  const testSize = percent / 100 - 0.02;
  if (testSize > 1 / 4) {
    return Math.min(retrieveDecodeLevel, 0);
  }
  if (testSize > 1 / 16) {
    return Math.min(retrieveDecodeLevel, 1);
  }
  if (testSize > 1 / 64) {
    return Math.min(retrieveDecodeLevel, 2);
  }
  return Math.min(retrieveDecodeLevel, 3);
}
var loadImage_default = loadImage2;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/register.js
function register_default2() {
  registerImageLoader("wadors", loadImage_default);
  metaData_exports.addProvider(metaDataProvider_default2);
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/wadors/index.js
var metaData2 = {
  getNumberString: getNumberString_default,
  getNumberValue: getNumberValue_default,
  getNumberValues: getNumberValues_default2,
  getValue: getValue_default,
  metaDataProvider: metaDataProvider_default2
};
var wadors_default = {
  metaData: metaData2,
  findIndexOfString: findIndexOfString_default,
  getPixelData: getPixelData_default2,
  loadImage: loadImage_default,
  metaDataManager: metaDataManager_default,
  register: register_default2
};

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/registerLoaders.js
function registerLoaders() {
  register_default2();
  register_default();
}
var registerLoaders_default = registerLoaders;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/init.js
var workerFn = () => {
  const instance = new Worker(new URL("./decodeImageFrameWorker.js", import.meta.url), { type: "module" });
  return instance;
};
function init(options2 = {}) {
  setOptions(options2);
  registerLoaders_default();
  const workerManager = getWebWorkerManager();
  const maxWorkers = options2?.maxWebWorkers || getReasonableWorkerCount();
  workerManager.registerWorker("dicomImageLoader", workerFn, {
    maxWorkerInstances: maxWorkers
  });
}
function getReasonableWorkerCount() {
  if (typeof navigator !== "undefined" && navigator.hardwareConcurrency) {
    return Math.max(1, Math.floor(navigator.hardwareConcurrency / 2));
  }
  return 1;
}
var init_default = init;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/imageLoader/isJPEGBaseline8BitColor.js
function isJPEGBaseline8BitColor(imageFrame, transferSyntax) {
  transferSyntax = transferSyntax || imageFrame.transferSyntax;
  if (imageFrame.bitsAllocated === 8 && transferSyntax === "1.2.840.10008.1.2.4.50" && (imageFrame.samplesPerPixel === 3 || imageFrame.samplesPerPixel === 4)) {
    return true;
  }
}
var isJPEGBaseline8BitColor_default = isJPEGBaseline8BitColor;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/constants/index.js
var constants_exports = {};
__export(constants_exports, {
  transferSyntaxes: () => transferSyntaxes_default
});

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/constants/transferSyntaxes.js
var transferSyntaxes = {
  IMPLICIT_VR_LITTLE_ENDIAN: "1.2.840.10008.1.2",
  EXPLICIT_VR_LITTLE_ENDIAN: "1.2.840.10008.1.2.1",
  DEFLATED_EXPLICIT_VR_LITTLE_ENDIAN: "1.2.840.10008.1.2.1.99",
  EXPLICIT_VR_BIG_ENDIAN: "1.2.840.10008.1.2.2",
  JPEG_BASELINE_PROCESS_1: "1.2.840.10008.1.2.4.50",
  JPEG_EXTENDED_PROCESS_2_4: "1.2.840.10008.1.2.4.51",
  JPEG_EXTENDED_PROCESSES_3_5: "1.2.840.10008.1.2.4.52",
  JPEG_SPECTRAL_SELECTION_NONHIERARCHICAL_PROCESSES_6_8: "1.2.840.10008.1.2.4.53",
  JPEG_SPECTRAL_SELECTION_NONHIERARCHICAL_PROCESSES_7_9: "1.2.840.10008.1.2.4.54",
  JPEG_FULL_PROGRESSION_NONHIERARCHICAL_PROCESSES_10_12: "1.2.840.10008.1.2.4.55",
  JPEG_FULL_PROGRESSION_NONHIERARCHICAL_PROCESSES_11_13: "1.2.840.10008.1.2.4.56",
  JPEG_LOSSLESS_NONHIERARCHICAL_PROCESS_14: "1.2.840.10008.1.2.4.57",
  JPEG_LOSSLESS_NONHIERARCHICAL_PROCESS_15: "1.2.840.10008.1.2.4.58",
  JPEG_EXTENDED_HIERARCHICAL_PROCESSES_16_18: "1.2.840.10008.1.2.4.59",
  JPEG_EXTENDED_HIERARCHICAL_PROCESSES_17_19: "1.2.840.10008.1.2.4.60",
  JPEG_SPECTRAL_SELECTION_HIERARCHICAL_PROCESSES_20_22: "1.2.840.10008.1.2.4.61",
  JPEG_SPECTRAL_SELECTION_HIERARCHICAL_PROCESSES_21_23: "1.2.840.10008.1.2.4.62",
  JPEG_FULL_PROGRESSION_HIERARCHICAL_PROCESSES_24_26: "1.2.840.10008.1.2.4.63",
  JPEG_FULL_PROGRESSION_HIERARCHICAL_PROCESSES_25_27: "1.2.840.10008.1.2.4.64",
  JPEG_LOSSLESS_NONHIERARCHICAL_PROCESS_28: "1.2.840.10008.1.2.4.65",
  JPEG_LOSSLESS_NONHIERARCHICAL_PROCESS_29: "1.2.840.10008.1.2.4.66",
  JPEG_LOSSLESS_NONHIERARCHICAL_FIRST_ORDER_PREDICTION_PROCESS_14: "1.2.840.10008.1.2.4.70",
  JPEG_LS_LOSSLESS_IMAGE_COMPRESSION: "1.2.840.10008.1.2.4.80",
  JPEG_LS_LOSSY_NEAR_LOSSLESS_IMAGE_COMPRESSION: "1.2.840.10008.1.2.4.81",
  JPEG_2000_IMAGE_COMPRESSION_LOSSLESS_ONLY: "1.2.840.10008.1.2.4.90",
  JPEG_2000_IMAGE_COMPRESSION: "1.2.840.10008.1.2.4.91",
  JPEG_2000_PART_2_MULTICOMPONENT_IMAGE_COMPRESSION_LOSSLESS_ONLY: "1.2.840.10008.1.2.4.92",
  JPEG_2000_PART_2_MULTICOMPONENT_IMAGE_COMPRESSION: "1.2.840.10008.1.2.4.93",
  JPIP_REFERENCED: "1.2.840.10008.1.2.4.94",
  JPIP_REFERENCED_DEFLATE: "1.2.840.10008.1.2.4.95",
  MPEG2_MAIN_PROFILE_MAIN_LEVEL: "1.2.840.10008.1.2.4.100",
  MPEG4_AVC_H264_HIGH_PROFILE_LEVEL_4_1: "1.2.840.10008.1.2.4.101",
  MPEG4_AVC_H264_BD_COMPATIBLE_HIGH_PROFILE_LEVEL_4_1: "1.2.840.10008.1.2.4.102",
  MPEG4_AVC_H264_HIGH_PROFILE_FOR_2D_VIDEO: "1.2.840.10008.1.2.4.103",
  MPEG4_AVC_H264_HIGH_PROFILE_FOR_3D_VIDEO: "1.2.840.10008.1.2.4.104",
  JPIP_LOSSLESS: "1.2.840.10008.1.2.4.96",
  JPIP_PART2_MULTICOMPONENT_IMAGE_COMPRESSION: "1.2.840.10008.1.2.4.97",
  RFC_2557_MIME_ENCAPSULATION: "1.2.840.10008.1.2.6.1",
  JPEG_XR_IMAGE_COMPRESSION: "1.2.840.10008.1.2.6.2",
  JPEG_2000_IMAGE_COMPRESSION_LOSSLESS_ONLY_RETIRED: "1.2.840.10008.1.2.4.90R",
  JPEG_2000_IMAGE_COMPRESSION_RETIRED: "1.2.840.10008.1.2.4.91R",
  JPEG_2000_PART_2_MULTICOMPONENT_IMAGE_COMPRESSION_LOSSLESS_ONLY_RETIRED: "1.2.840.10008.1.2.4.92R",
  JPEG_2000_PART_2_MULTICOMPONENT_IMAGE_COMPRESSION_RETIRED: "1.2.840.10008.1.2.4.93R"
};
var transferSyntaxes_default = transferSyntaxes;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/shared/scaling/bilinear.js
function bilinear(src, dest) {
  const { rows: srcRows, columns: srcColumns, data: srcData } = src;
  const { rows, columns, data } = dest;
  const xSrc1Off = [];
  const xSrc2Off = [];
  const xFrac = [];
  for (let x = 0; x < columns; x++) {
    const xSrc = x * (srcColumns - 1) / (columns - 1);
    xSrc1Off[x] = Math.floor(xSrc);
    xSrc2Off[x] = Math.min(xSrc1Off[x] + 1, srcColumns - 1);
    xFrac[x] = xSrc - xSrc1Off[x];
  }
  for (let y = 0; y < rows; y++) {
    const ySrc = y * (srcRows - 1) / (rows - 1);
    const ySrc1Off = Math.floor(ySrc) * srcColumns;
    const ySrc2Off = Math.min(ySrc1Off + srcColumns, (srcRows - 1) * srcColumns);
    const yFrac = ySrc - Math.floor(ySrc);
    const yFracInv = 1 - yFrac;
    const yOff = y * columns;
    for (let x = 0; x < columns; x++) {
      const p00 = srcData[ySrc1Off + xSrc1Off[x]];
      const p10 = srcData[ySrc1Off + xSrc2Off[x]];
      const p01 = srcData[ySrc2Off + xSrc1Off[x]];
      const p11 = srcData[ySrc2Off + xSrc2Off[x]];
      const xFracInv = 1 - xFrac[x];
      data[yOff + x] = (p00 * xFracInv + p10 * xFrac[x]) * yFracInv + (p01 * xFracInv + p11 * xFrac[x]) * yFrac;
    }
  }
  return data;
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/shared/scaling/replicate.js
function replicate(src, dest) {
  const { rows: srcRows, columns: srcColumns, pixelData: srcData, samplesPerPixel = 1 } = src;
  const { rows, columns, pixelData } = dest;
  const xSrc1Off = [];
  for (let x = 0; x < columns; x++) {
    const xSrc = x * (srcColumns - 1) / (columns - 1);
    xSrc1Off[x] = Math.floor(xSrc) * samplesPerPixel;
  }
  for (let y = 0; y < rows; y++) {
    const ySrc = y * (srcRows - 1) / (rows - 1);
    const ySrc1Off = Math.floor(ySrc) * srcColumns * samplesPerPixel;
    const yOff = y * columns;
    for (let x = 0; x < columns; x++) {
      for (let sample = 0; sample < samplesPerPixel; sample++) {
        pixelData[yOff + x + sample] = srcData[ySrc1Off + xSrc1Off[x] + sample];
      }
    }
  }
  return pixelData;
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/shared/decoders/decodeLittleEndian.js
async function decodeLittleEndian(imageFrame, pixelData) {
  let arrayBuffer = pixelData.buffer;
  let offset = pixelData.byteOffset;
  const length = pixelData.length;
  if (imageFrame.bitsAllocated === 16) {
    if (offset % 2) {
      arrayBuffer = arrayBuffer.slice(offset);
      offset = 0;
    }
    if (imageFrame.pixelRepresentation === 0) {
      imageFrame.pixelData = new Uint16Array(arrayBuffer, offset, length / 2);
    } else {
      imageFrame.pixelData = new Int16Array(arrayBuffer, offset, length / 2);
    }
  } else if (imageFrame.bitsAllocated === 8 || imageFrame.bitsAllocated === 1) {
    imageFrame.pixelData = pixelData;
  } else if (imageFrame.bitsAllocated === 32) {
    if (offset % 2) {
      arrayBuffer = arrayBuffer.slice(offset);
      offset = 0;
    }
    if (imageFrame.floatPixelData || imageFrame.doubleFloatPixelData) {
      throw new Error("Float pixel data is not supported for parsing into ImageFrame");
    }
    if (imageFrame.pixelRepresentation === 0) {
      imageFrame.pixelData = new Uint32Array(arrayBuffer, offset, length / 4);
    } else if (imageFrame.pixelRepresentation === 1) {
      imageFrame.pixelData = new Int32Array(arrayBuffer, offset, length / 4);
    } else {
      imageFrame.pixelData = new Float32Array(arrayBuffer, offset, length / 4);
    }
  }
  return imageFrame;
}
var decodeLittleEndian_default = decodeLittleEndian;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/shared/decoders/decodeBigEndian.js
function swap16(val) {
  return (val & 255) << 8 | val >> 8 & 255;
}
async function decodeBigEndian(imageFrame, pixelData) {
  if (imageFrame.bitsAllocated === 16) {
    let arrayBuffer = pixelData.buffer;
    let offset = pixelData.byteOffset;
    const length = pixelData.length;
    if (offset % 2) {
      arrayBuffer = arrayBuffer.slice(offset);
      offset = 0;
    }
    if (imageFrame.pixelRepresentation === 0) {
      imageFrame.pixelData = new Uint16Array(arrayBuffer, offset, length / 2);
    } else {
      imageFrame.pixelData = new Int16Array(arrayBuffer, offset, length / 2);
    }
    for (let i = 0; i < imageFrame.pixelData.length; i++) {
      imageFrame.pixelData[i] = swap16(imageFrame.pixelData[i]);
    }
  } else if (imageFrame.bitsAllocated === 8) {
    imageFrame.pixelData = pixelData;
  }
  return imageFrame;
}
var decodeBigEndian_default = decodeBigEndian;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/shared/decoders/decodeRLE.js
async function decodeRLE(imageFrame, pixelData) {
  if (imageFrame.bitsAllocated === 8) {
    if (imageFrame.planarConfiguration) {
      return decode8Planar(imageFrame, pixelData);
    }
    return decode8(imageFrame, pixelData);
  } else if (imageFrame.bitsAllocated === 16) {
    return decode16(imageFrame, pixelData);
  }
  throw new Error("unsupported pixel format for RLE");
}
function decode8(imageFrame, pixelData) {
  const frameData = pixelData;
  const frameSize = imageFrame.rows * imageFrame.columns;
  const outFrame = new ArrayBuffer(frameSize * imageFrame.samplesPerPixel);
  const header = new DataView(frameData.buffer, frameData.byteOffset);
  const data = new Int8Array(frameData.buffer, frameData.byteOffset);
  const out = new Int8Array(outFrame);
  let outIndex = 0;
  const numSegments = header.getInt32(0, true);
  for (let s = 0; s < numSegments; ++s) {
    outIndex = s;
    let inIndex = header.getInt32((s + 1) * 4, true);
    let maxIndex = header.getInt32((s + 2) * 4, true);
    if (maxIndex === 0) {
      maxIndex = frameData.length;
    }
    const endOfSegment = frameSize * numSegments;
    while (inIndex < maxIndex) {
      const n = data[inIndex++];
      if (n >= 0 && n <= 127) {
        for (let i = 0; i < n + 1 && outIndex < endOfSegment; ++i) {
          out[outIndex] = data[inIndex++];
          outIndex += imageFrame.samplesPerPixel;
        }
      } else if (n <= -1 && n >= -127) {
        const value = data[inIndex++];
        for (let j = 0; j < -n + 1 && outIndex < endOfSegment; ++j) {
          out[outIndex] = value;
          outIndex += imageFrame.samplesPerPixel;
        }
      }
    }
  }
  imageFrame.pixelData = new Uint8Array(outFrame);
  return imageFrame;
}
function decode8Planar(imageFrame, pixelData) {
  const frameData = pixelData;
  const frameSize = imageFrame.rows * imageFrame.columns;
  const outFrame = new ArrayBuffer(frameSize * imageFrame.samplesPerPixel);
  const header = new DataView(frameData.buffer, frameData.byteOffset);
  const data = new Int8Array(frameData.buffer, frameData.byteOffset);
  const out = new Int8Array(outFrame);
  let outIndex = 0;
  const numSegments = header.getInt32(0, true);
  for (let s = 0; s < numSegments; ++s) {
    outIndex = s * frameSize;
    let inIndex = header.getInt32((s + 1) * 4, true);
    let maxIndex = header.getInt32((s + 2) * 4, true);
    if (maxIndex === 0) {
      maxIndex = frameData.length;
    }
    const endOfSegment = frameSize * numSegments;
    while (inIndex < maxIndex) {
      const n = data[inIndex++];
      if (n >= 0 && n <= 127) {
        for (let i = 0; i < n + 1 && outIndex < endOfSegment; ++i) {
          out[outIndex] = data[inIndex++];
          outIndex++;
        }
      } else if (n <= -1 && n >= -127) {
        const value = data[inIndex++];
        for (let j = 0; j < -n + 1 && outIndex < endOfSegment; ++j) {
          out[outIndex] = value;
          outIndex++;
        }
      }
    }
  }
  imageFrame.pixelData = new Uint8Array(outFrame);
  return imageFrame;
}
function decode16(imageFrame, pixelData) {
  const frameData = pixelData;
  const frameSize = imageFrame.rows * imageFrame.columns;
  const outFrame = new ArrayBuffer(frameSize * imageFrame.samplesPerPixel * 2);
  const header = new DataView(frameData.buffer, frameData.byteOffset);
  const data = new Int8Array(frameData.buffer, frameData.byteOffset);
  const out = new Int8Array(outFrame);
  const numSegments = header.getInt32(0, true);
  for (let s = 0; s < numSegments; ++s) {
    let outIndex = 0;
    const highByte = s === 0 ? 1 : 0;
    let inIndex = header.getInt32((s + 1) * 4, true);
    let maxIndex = header.getInt32((s + 2) * 4, true);
    if (maxIndex === 0) {
      maxIndex = frameData.length;
    }
    while (inIndex < maxIndex) {
      const n = data[inIndex++];
      if (n >= 0 && n <= 127) {
        for (let i = 0; i < n + 1 && outIndex < frameSize; ++i) {
          out[outIndex * 2 + highByte] = data[inIndex++];
          outIndex++;
        }
      } else if (n <= -1 && n >= -127) {
        const value = data[inIndex++];
        for (let j = 0; j < -n + 1 && outIndex < frameSize; ++j) {
          out[outIndex * 2 + highByte] = value;
          outIndex++;
        }
      }
    }
  }
  if (imageFrame.pixelRepresentation === 0) {
    imageFrame.pixelData = new Uint16Array(outFrame);
  } else {
    imageFrame.pixelData = new Int16Array(outFrame);
  }
  return imageFrame;
}
var decodeRLE_default = decodeRLE;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/shared/decoders/decodeJPEGBaseline8Bit.js
var import_decodewasmjs = __toESM(require_libjpegturbowasm_decode());
var libjpegTurboWasm = new URL("@cornerstonejs/codec-libjpeg-turbo-8bit/decodewasm", import.meta.url);
var local = {
  codec: void 0,
  decoder: void 0
};
function initLibjpegTurbo() {
  if (local.codec) {
    return Promise.resolve();
  }
  const libjpegTurboModule = (0, import_decodewasmjs.default)({
    locateFile: (f) => {
      if (f.endsWith(".wasm")) {
        return libjpegTurboWasm.toString();
      }
      return f;
    }
  });
  return new Promise((resolve, reject) => {
    libjpegTurboModule.then((instance) => {
      local.codec = instance;
      local.decoder = new instance.JPEGDecoder();
      resolve();
    }, reject);
  });
}
async function decodeAsync(compressedImageFrame, imageInfo) {
  await initLibjpegTurbo();
  const decoder = local.decoder;
  const encodedBufferInWASM = decoder.getEncodedBuffer(compressedImageFrame.length);
  encodedBufferInWASM.set(compressedImageFrame);
  decoder.decode();
  const frameInfo = decoder.getFrameInfo();
  const decodedPixelsInWASM = decoder.getDecodedBuffer();
  const encodedImageInfo = {
    columns: frameInfo.width,
    rows: frameInfo.height,
    bitsPerPixel: frameInfo.bitsPerSample,
    signed: imageInfo.signed,
    bytesPerPixel: imageInfo.bytesPerPixel,
    componentsPerPixel: frameInfo.componentCount
  };
  const pixelData = getPixelData3(frameInfo, decodedPixelsInWASM);
  const encodeOptions = {
    frameInfo
  };
  return {
    ...imageInfo,
    pixelData,
    imageInfo: encodedImageInfo,
    encodeOptions,
    ...encodeOptions,
    ...encodedImageInfo
  };
}
function getPixelData3(frameInfo, decodedBuffer) {
  if (frameInfo.isSigned) {
    return new Int8Array(decodedBuffer.buffer, decodedBuffer.byteOffset, decodedBuffer.byteLength);
  }
  return new Uint8Array(decodedBuffer.buffer, decodedBuffer.byteOffset, decodedBuffer.byteLength);
}
var decodeJPEGBaseline8Bit_default = decodeAsync;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/shared/decoders/decodeJPEGBaseline12Bit-js.js
var local2 = {
  JpegImage: void 0,
  decodeConfig: {}
};
function initialize(decodeConfig) {
  local2.decodeConfig = decodeConfig;
  if (local2.JpegImage) {
    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    import("./jpeg-FBXPXFYA.js").then((module) => {
      local2.JpegImage = module.default;
      resolve();
    }).catch(reject);
  });
}
async function decodeJPEGBaseline12BitAsync(imageFrame, pixelData) {
  await initialize();
  if (typeof local2.JpegImage === "undefined") {
    throw new Error("No JPEG Baseline decoder loaded");
  }
  const jpeg = new local2.JpegImage();
  jpeg.parse(pixelData);
  jpeg.colorTransform = false;
  if (imageFrame.bitsAllocated === 8) {
    imageFrame.pixelData = jpeg.getData(imageFrame.columns, imageFrame.rows);
    return imageFrame;
  } else if (imageFrame.bitsAllocated === 16) {
    imageFrame.pixelData = jpeg.getData16(imageFrame.columns, imageFrame.rows);
    return imageFrame;
  }
}
var decodeJPEGBaseline12Bit_js_default = decodeJPEGBaseline12BitAsync;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/shared/decoders/decodeJPEGLossless.js
var local3 = {
  jpeg: void 0,
  decodeConfig: {}
};
function initialize2(decodeConfig) {
  local3.decodeConfig = decodeConfig;
  if (local3.jpeg) {
    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    import("./lossless-2HB6EIOE.js").then(({ Decoder }) => {
      const decoder = new Decoder();
      local3.jpeg = decoder;
      resolve();
    }, reject);
  });
}
async function decodeJPEGLossless(imageFrame, pixelData) {
  await initialize2();
  if (typeof local3.jpeg === "undefined") {
    throw new Error("No JPEG Lossless decoder loaded");
  }
  const byteOutput = imageFrame.bitsAllocated <= 8 ? 1 : 2;
  const buffer = pixelData.buffer;
  const decompressedData = local3.jpeg.decode(buffer, pixelData.byteOffset, pixelData.length, byteOutput);
  if (imageFrame.pixelRepresentation === 0) {
    if (imageFrame.bitsAllocated === 16) {
      imageFrame.pixelData = new Uint16Array(decompressedData.buffer);
      return imageFrame;
    }
    imageFrame.pixelData = new Uint8Array(decompressedData.buffer);
    return imageFrame;
  }
  imageFrame.pixelData = new Int16Array(decompressedData.buffer);
  return imageFrame;
}
var decodeJPEGLossless_default = decodeJPEGLossless;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/shared/decoders/decodeJPEGLS.js
var import_decodewasmjs2 = __toESM(require_charlswasm_decode());
var charlsWasm = new URL("@cornerstonejs/codec-charls/decodewasm", import.meta.url);
var local4 = {
  codec: void 0,
  decoder: void 0,
  decodeConfig: {}
};
function getExceptionMessage(exception) {
  return typeof exception === "number" ? local4.codec.getExceptionMessage(exception) : exception;
}
function initialize3(decodeConfig) {
  local4.decodeConfig = decodeConfig;
  if (local4.codec) {
    return Promise.resolve();
  }
  const charlsModule = (0, import_decodewasmjs2.default)({
    locateFile: (f) => {
      if (f.endsWith(".wasm")) {
        return charlsWasm.toString();
      }
      return f;
    }
  });
  return new Promise((resolve, reject) => {
    charlsModule.then((instance) => {
      local4.codec = instance;
      local4.decoder = new instance.JpegLSDecoder();
      resolve();
    }, reject);
  });
}
async function decodeAsync2(compressedImageFrame, imageInfo) {
  try {
    await initialize3();
    const decoder = local4.decoder;
    const encodedBufferInWASM = decoder.getEncodedBuffer(compressedImageFrame.length);
    encodedBufferInWASM.set(compressedImageFrame);
    decoder.decode();
    const frameInfo = decoder.getFrameInfo();
    const interleaveMode = decoder.getInterleaveMode();
    const nearLossless = decoder.getNearLossless();
    const decodedPixelsInWASM = decoder.getDecodedBuffer();
    const encodedImageInfo = {
      columns: frameInfo.width,
      rows: frameInfo.height,
      bitsPerPixel: frameInfo.bitsPerSample,
      signed: imageInfo.signed,
      bytesPerPixel: imageInfo.bytesPerPixel,
      componentsPerPixel: frameInfo.componentCount
    };
    const pixelData = getPixelData4(frameInfo, decodedPixelsInWASM, imageInfo.signed);
    const encodeOptions = {
      nearLossless,
      interleaveMode,
      frameInfo
    };
    return {
      ...imageInfo,
      pixelData,
      imageInfo: encodedImageInfo,
      encodeOptions,
      ...encodeOptions,
      ...encodedImageInfo
    };
  } catch (error) {
    throw getExceptionMessage(error);
  }
}
function getPixelData4(frameInfo, decodedBuffer, signed) {
  if (frameInfo.bitsPerSample > 8) {
    if (signed) {
      return new Int16Array(decodedBuffer.buffer, decodedBuffer.byteOffset, decodedBuffer.byteLength / 2);
    }
    return new Uint16Array(decodedBuffer.buffer, decodedBuffer.byteOffset, decodedBuffer.byteLength / 2);
  }
  if (signed) {
    return new Int8Array(decodedBuffer.buffer, decodedBuffer.byteOffset, decodedBuffer.byteLength);
  }
  return new Uint8Array(decodedBuffer.buffer, decodedBuffer.byteOffset, decodedBuffer.byteLength);
}
var decodeJPEGLS_default = decodeAsync2;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/shared/decoders/decodeJPEG2000.js
var import_decodewasmjs3 = __toESM(require_openjpegwasm_decode());
var openjpegWasm = new URL("@cornerstonejs/codec-openjpeg/decodewasm", import.meta.url);
var local5 = {
  codec: void 0,
  decoder: void 0,
  decodeConfig: {}
};
function initialize4(decodeConfig) {
  local5.decodeConfig = decodeConfig;
  if (local5.codec) {
    return Promise.resolve();
  }
  const openJpegModule = (0, import_decodewasmjs3.default)({
    locateFile: (f) => {
      if (f.endsWith(".wasm")) {
        return openjpegWasm.toString();
      }
      return f;
    }
  });
  return new Promise((resolve, reject) => {
    openJpegModule.then((instance) => {
      local5.codec = instance;
      local5.decoder = new instance.J2KDecoder();
      resolve();
    }, reject);
  });
}
async function decodeAsync3(compressedImageFrame, imageInfo) {
  await initialize4();
  const decoder = local5.decoder;
  const encodedBufferInWASM = decoder.getEncodedBuffer(compressedImageFrame.length);
  encodedBufferInWASM.set(compressedImageFrame);
  decoder.decode();
  const frameInfo = decoder.getFrameInfo();
  const decodedBufferInWASM = decoder.getDecodedBuffer();
  const imageFrame = new Uint8Array(decodedBufferInWASM.length);
  imageFrame.set(decodedBufferInWASM);
  const imageOffset = `x: ${decoder.getImageOffset().x}, y: ${decoder.getImageOffset().y}`;
  const numDecompositions = decoder.getNumDecompositions();
  const numLayers = decoder.getNumLayers();
  const progessionOrder = ["unknown", "LRCP", "RLCP", "RPCL", "PCRL", "CPRL"][decoder.getProgressionOrder() + 1];
  const reversible = decoder.getIsReversible();
  const blockDimensions = `${decoder.getBlockDimensions().width} x ${decoder.getBlockDimensions().height}`;
  const tileSize = `${decoder.getTileSize().width} x ${decoder.getTileSize().height}`;
  const tileOffset = `${decoder.getTileOffset().x}, ${decoder.getTileOffset().y}`;
  const colorTransform = decoder.getColorSpace();
  const decodedSize = `${decodedBufferInWASM.length.toLocaleString()} bytes`;
  const compressionRatio = `${(decodedBufferInWASM.length / encodedBufferInWASM.length).toFixed(2)}:1`;
  const encodedImageInfo = {
    columns: frameInfo.width,
    rows: frameInfo.height,
    bitsPerPixel: frameInfo.bitsPerSample,
    signed: frameInfo.isSigned,
    bytesPerPixel: imageInfo.bytesPerPixel,
    componentsPerPixel: frameInfo.componentCount
  };
  const pixelData = getPixelData5(frameInfo, decodedBufferInWASM);
  const encodeOptions = {
    imageOffset,
    numDecompositions,
    numLayers,
    progessionOrder,
    reversible,
    blockDimensions,
    tileSize,
    tileOffset,
    colorTransform,
    decodedSize,
    compressionRatio
  };
  return {
    ...imageInfo,
    pixelData,
    imageInfo: encodedImageInfo,
    encodeOptions,
    ...encodeOptions,
    ...encodedImageInfo
  };
}
function getPixelData5(frameInfo, decodedBuffer) {
  if (frameInfo.bitsPerSample > 8) {
    if (frameInfo.isSigned) {
      return new Int16Array(decodedBuffer.buffer, decodedBuffer.byteOffset, decodedBuffer.byteLength / 2);
    }
    return new Uint16Array(decodedBuffer.buffer, decodedBuffer.byteOffset, decodedBuffer.byteLength / 2);
  }
  if (frameInfo.isSigned) {
    return new Int8Array(decodedBuffer.buffer, decodedBuffer.byteOffset, decodedBuffer.byteLength);
  }
  return new Uint8Array(decodedBuffer.buffer, decodedBuffer.byteOffset, decodedBuffer.byteLength);
}
var decodeJPEG2000_default = decodeAsync3;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/shared/decoders/decodeHTJ2K.js
var import_wasmjs = __toESM(require_openjphjs());
var openjphWasm = new URL("@cornerstonejs/codec-openjph/wasm", import.meta.url);
var local6 = {
  codec: void 0,
  decoder: void 0,
  decodeConfig: {}
};
function calculateSizeAtDecompositionLevel(decompositionLevel, frameWidth, frameHeight) {
  const result = { width: frameWidth, height: frameHeight };
  while (decompositionLevel > 0) {
    result.width = Math.ceil(result.width / 2);
    result.height = Math.ceil(result.height / 2);
    decompositionLevel--;
  }
  return result;
}
function initialize5(decodeConfig) {
  local6.decodeConfig = decodeConfig;
  if (local6.codec) {
    return Promise.resolve();
  }
  const openJphModule = (0, import_wasmjs.default)({
    locateFile: (f) => {
      if (f.endsWith(".wasm")) {
        return openjphWasm.toString();
      }
      return f;
    }
  });
  return new Promise((resolve, reject) => {
    openJphModule.then((instance) => {
      local6.codec = instance;
      local6.decoder = new instance.HTJ2KDecoder();
      resolve();
    }, reject);
  });
}
async function decodeAsync4(compressedImageFrame, imageInfo) {
  await initialize5();
  const decoder = new local6.codec.HTJ2KDecoder();
  const encodedBufferInWASM = decoder.getEncodedBuffer(compressedImageFrame.length);
  encodedBufferInWASM.set(compressedImageFrame);
  const decodeLevel = imageInfo.decodeLevel || 0;
  decoder.decodeSubResolution(decodeLevel);
  const frameInfo = decoder.getFrameInfo();
  if (imageInfo.decodeLevel > 0) {
    const { width, height } = calculateSizeAtDecompositionLevel(imageInfo.decodeLevel, frameInfo.width, frameInfo.height);
    frameInfo.width = width;
    frameInfo.height = height;
  }
  const decodedBufferInWASM = decoder.getDecodedBuffer();
  const imageFrame = new Uint8Array(decodedBufferInWASM.length);
  imageFrame.set(decodedBufferInWASM);
  const imageOffset = `x: ${decoder.getImageOffset().x}, y: ${decoder.getImageOffset().y}`;
  const numDecompositions = decoder.getNumDecompositions();
  const numLayers = decoder.getNumLayers();
  const progessionOrder = ["unknown", "LRCP", "RLCP", "RPCL", "PCRL", "CPRL"][decoder.getProgressionOrder() + 1];
  const reversible = decoder.getIsReversible();
  const blockDimensions = `${decoder.getBlockDimensions().width} x ${decoder.getBlockDimensions().height}`;
  const tileSize = `${decoder.getTileSize().width} x ${decoder.getTileSize().height}`;
  const tileOffset = `${decoder.getTileOffset().x}, ${decoder.getTileOffset().y}`;
  const decodedSize = `${decodedBufferInWASM.length.toLocaleString()} bytes`;
  const compressionRatio = `${(decodedBufferInWASM.length / encodedBufferInWASM.length).toFixed(2)}:1`;
  const encodedImageInfo = {
    columns: frameInfo.width,
    rows: frameInfo.height,
    bitsPerPixel: frameInfo.bitsPerSample,
    signed: frameInfo.isSigned,
    bytesPerPixel: imageInfo.bytesPerPixel,
    componentsPerPixel: frameInfo.componentCount
  };
  let pixelData = getPixelData6(frameInfo, decodedBufferInWASM);
  const { buffer: b, byteOffset, byteLength } = pixelData;
  const pixelDataArrayBuffer = b.slice(byteOffset, byteOffset + byteLength);
  pixelData = new pixelData.constructor(pixelDataArrayBuffer);
  const encodeOptions = {
    imageOffset,
    numDecompositions,
    numLayers,
    progessionOrder,
    reversible,
    blockDimensions,
    tileSize,
    tileOffset,
    decodedSize,
    compressionRatio
  };
  return {
    ...imageInfo,
    pixelData,
    imageInfo: encodedImageInfo,
    encodeOptions,
    ...encodeOptions,
    ...encodedImageInfo
  };
}
function getPixelData6(frameInfo, decodedBuffer) {
  if (frameInfo.bitsPerSample > 8) {
    if (frameInfo.isSigned) {
      return new Int16Array(decodedBuffer.buffer, decodedBuffer.byteOffset, decodedBuffer.byteLength / 2);
    }
    return new Uint16Array(decodedBuffer.buffer, decodedBuffer.byteOffset, decodedBuffer.byteLength / 2);
  }
  if (frameInfo.isSigned) {
    return new Int8Array(decodedBuffer.buffer, decodedBuffer.byteOffset, decodedBuffer.byteLength);
  }
  return new Uint8Array(decodedBuffer.buffer, decodedBuffer.byteOffset, decodedBuffer.byteLength);
}
var decodeHTJ2K_default = decodeAsync4;

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/shared/scaling/scaleArray.js
function scaleArray(array, scalingParameters) {
  const arrayLength = array.length;
  const { rescaleSlope, rescaleIntercept, suvbw, doseGridScaling } = scalingParameters;
  if (scalingParameters.modality === "PT" && typeof suvbw === "number" && !isNaN(suvbw)) {
    for (let i = 0; i < arrayLength; i++) {
      array[i] = suvbw * (array[i] * rescaleSlope + rescaleIntercept);
    }
  } else if (scalingParameters.modality === "RTDOSE" && typeof doseGridScaling === "number" && !isNaN(doseGridScaling)) {
    for (let i = 0; i < arrayLength; i++) {
      array[i] = array[i] * doseGridScaling;
    }
  } else {
    for (let i = 0; i < arrayLength; i++) {
      array[i] = array[i] * rescaleSlope + rescaleIntercept;
    }
  }
  return true;
}

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/decodeImageFrameWorker.js
var imageUtils = {
  bilinear,
  replicate
};
var typedArrayConstructors = {
  Uint8Array,
  Uint16Array,
  Int16Array,
  Float32Array,
  Uint32Array
};
function postProcessDecodedPixels(imageFrame, options2, start, decodeConfig) {
  const shouldShift = imageFrame.pixelRepresentation !== void 0 && imageFrame.pixelRepresentation === 1;
  const shift = shouldShift && imageFrame.bitsStored !== void 0 ? 32 - imageFrame.bitsStored : void 0;
  if (shouldShift && shift !== void 0) {
    for (let i = 0; i < imageFrame.pixelData.length; i++) {
      imageFrame.pixelData[i] = imageFrame.pixelData[i] << shift >> shift;
    }
  }
  let pixelDataArray = imageFrame.pixelData;
  imageFrame.pixelDataLength = imageFrame.pixelData.length;
  const { min: minBeforeScale, max: maxBeforeScale } = getMinMax_default(imageFrame.pixelData);
  const canRenderFloat = typeof options2.allowFloatRendering !== "undefined" ? options2.allowFloatRendering : true;
  let invalidType = isColorImage_default(imageFrame.photometricInterpretation) && options2.targetBuffer?.offset === void 0;
  const willScale = options2.preScale?.enabled;
  const hasFloatRescale = willScale && Object.values(options2.preScale.scalingParameters).some((v) => typeof v === "number" && !Number.isInteger(v));
  const disableScale = !options2.preScale.enabled || !canRenderFloat && hasFloatRescale;
  const type = options2.targetBuffer?.type;
  if (type && options2.preScale.enabled && !disableScale) {
    const scalingParameters = options2.preScale.scalingParameters;
    const scaledValues = _calculateScaledMinMax(minBeforeScale, maxBeforeScale, scalingParameters);
    invalidType = !validatePixelDataType(scaledValues.min, scaledValues.max, typedArrayConstructors[type]);
  }
  if (type && !invalidType) {
    pixelDataArray = _handleTargetBuffer(options2, imageFrame, typedArrayConstructors, pixelDataArray);
  } else if (options2.preScale.enabled && !disableScale) {
    pixelDataArray = _handlePreScaleSetup(options2, minBeforeScale, maxBeforeScale, imageFrame);
  } else {
    pixelDataArray = _getDefaultPixelDataArray(minBeforeScale, maxBeforeScale, imageFrame);
  }
  let minAfterScale = minBeforeScale;
  let maxAfterScale = maxBeforeScale;
  if (options2.preScale.enabled && !disableScale) {
    const scalingParameters = options2.preScale.scalingParameters;
    _validateScalingParameters(scalingParameters);
    const isRequiredScaling = _isRequiredScaling(scalingParameters);
    if (isRequiredScaling) {
      scaleArray(pixelDataArray, scalingParameters);
      imageFrame.preScale = {
        ...options2.preScale,
        scaled: true
      };
      const scaledValues = _calculateScaledMinMax(minBeforeScale, maxBeforeScale, scalingParameters);
      minAfterScale = scaledValues.min;
      maxAfterScale = scaledValues.max;
    }
  } else if (disableScale) {
    imageFrame.preScale = {
      enabled: true,
      scaled: false
    };
    minAfterScale = minBeforeScale;
    maxAfterScale = maxBeforeScale;
  }
  imageFrame.pixelData = pixelDataArray;
  imageFrame.smallestPixelValue = minAfterScale;
  imageFrame.largestPixelValue = maxAfterScale;
  const end = (/* @__PURE__ */ new Date()).getTime();
  imageFrame.decodeTimeInMS = end - start;
  return imageFrame;
}
function _isRequiredScaling(scalingParameters) {
  const { rescaleSlope, rescaleIntercept, modality, doseGridScaling, suvbw } = scalingParameters;
  const hasRescaleValues = typeof rescaleSlope === "number" && typeof rescaleIntercept === "number";
  const isRTDOSEWithScaling = modality === "RTDOSE" && typeof doseGridScaling === "number";
  const isPTWithSUV = modality === "PT" && typeof suvbw === "number";
  return hasRescaleValues || isRTDOSEWithScaling || isPTWithSUV;
}
function _handleTargetBuffer(options2, imageFrame, typedArrayConstructors2, pixelDataArray) {
  const { arrayBuffer, type, offset: rawOffset = 0, length: rawLength, rows } = options2.targetBuffer;
  const TypedArrayConstructor = typedArrayConstructors2[type];
  if (!TypedArrayConstructor) {
    throw new Error(`target array ${type} is not supported, or doesn't exist.`);
  }
  if (rows && rows != imageFrame.rows) {
    scaleImageFrame(imageFrame, options2.targetBuffer, TypedArrayConstructor);
  }
  const imageFrameLength = imageFrame.pixelDataLength;
  const offset = rawOffset;
  const length = rawLength !== null && rawLength !== void 0 ? rawLength : imageFrameLength - offset;
  const imageFramePixelData = imageFrame.pixelData;
  if (length !== imageFramePixelData.length) {
    throw new Error(`target array for image does not have the same length (${length}) as the decoded image length (${imageFramePixelData.length}).`);
  }
  const typedArray = arrayBuffer ? new TypedArrayConstructor(arrayBuffer, offset, length) : new TypedArrayConstructor(length);
  typedArray.set(imageFramePixelData, 0);
  pixelDataArray = typedArray;
  return pixelDataArray;
}
function _handlePreScaleSetup(options2, minBeforeScale, maxBeforeScale, imageFrame) {
  const scalingParameters = options2.preScale.scalingParameters;
  _validateScalingParameters(scalingParameters);
  const scaledValues = _calculateScaledMinMax(minBeforeScale, maxBeforeScale, scalingParameters);
  return _getDefaultPixelDataArray(scaledValues.min, scaledValues.max, imageFrame);
}
function _getDefaultPixelDataArray(min, max, imageFrame) {
  const TypedArrayConstructor = getPixelDataTypeFromMinMax(min, max);
  const typedArray = new TypedArrayConstructor(imageFrame.pixelData.length);
  typedArray.set(imageFrame.pixelData, 0);
  return typedArray;
}
function _calculateScaledMinMax(minValue, maxValue, scalingParameters) {
  const { rescaleSlope, rescaleIntercept, modality, doseGridScaling, suvbw } = scalingParameters;
  if (modality === "PT" && typeof suvbw === "number" && !isNaN(suvbw)) {
    return {
      min: suvbw * (minValue * rescaleSlope + rescaleIntercept),
      max: suvbw * (maxValue * rescaleSlope + rescaleIntercept)
    };
  } else if (modality === "RTDOSE" && typeof doseGridScaling === "number" && !isNaN(doseGridScaling)) {
    return {
      min: minValue * doseGridScaling,
      max: maxValue * doseGridScaling
    };
  } else if (typeof rescaleSlope === "number" && typeof rescaleIntercept === "number") {
    return {
      min: rescaleSlope * minValue + rescaleIntercept,
      max: rescaleSlope * maxValue + rescaleIntercept
    };
  } else {
    return {
      min: minValue,
      max: maxValue
    };
  }
}
function _validateScalingParameters(scalingParameters) {
  if (!scalingParameters) {
    throw new Error("options.preScale.scalingParameters must be defined if preScale.enabled is true, and scalingParameters cannot be derived from the metadata providers.");
  }
}
function createDestinationImage(imageFrame, targetBuffer, TypedArrayConstructor) {
  const { samplesPerPixel } = imageFrame;
  const { rows, columns } = targetBuffer;
  const typedLength = rows * columns * samplesPerPixel;
  const pixelData = new TypedArrayConstructor(typedLength);
  const bytesPerPixel = pixelData.byteLength / typedLength;
  return {
    pixelData,
    rows,
    columns,
    frameInfo: {
      ...imageFrame.frameInfo,
      rows,
      columns
    },
    imageInfo: {
      ...imageFrame.imageInfo,
      rows,
      columns,
      bytesPerPixel
    }
  };
}
function scaleImageFrame(imageFrame, targetBuffer, TypedArrayConstructor) {
  const dest = createDestinationImage(imageFrame, targetBuffer, TypedArrayConstructor);
  const { scalingType = "replicate" } = targetBuffer;
  imageUtils[scalingType](imageFrame, dest);
  Object.assign(imageFrame, dest);
  imageFrame.pixelDataLength = imageFrame.pixelData.length;
  return imageFrame;
}
async function decodeImageFrame2(imageFrame, transferSyntax, pixelData, decodeConfig, options2, callbackFn) {
  const start = (/* @__PURE__ */ new Date()).getTime();
  let decodePromise = null;
  let opts;
  switch (transferSyntax) {
    case "1.2.840.10008.1.2":
    case "1.2.840.10008.1.2.1":
      decodePromise = decodeLittleEndian_default(imageFrame, pixelData);
      break;
    case "1.2.840.10008.1.2.2":
      decodePromise = decodeBigEndian_default(imageFrame, pixelData);
      break;
    case "1.2.840.10008.1.2.1.99":
      decodePromise = decodeLittleEndian_default(imageFrame, pixelData);
      break;
    case "1.2.840.10008.1.2.5":
      decodePromise = decodeRLE_default(imageFrame, pixelData);
      break;
    case "1.2.840.10008.1.2.4.50":
      opts = {
        ...imageFrame
      };
      decodePromise = decodeJPEGBaseline8Bit_default(pixelData, opts);
      break;
    case "1.2.840.10008.1.2.4.51":
      decodePromise = decodeJPEGBaseline12Bit_js_default(imageFrame, pixelData);
      break;
    case "1.2.840.10008.1.2.4.57":
      decodePromise = decodeJPEGLossless_default(imageFrame, pixelData);
      break;
    case "1.2.840.10008.1.2.4.70":
      decodePromise = decodeJPEGLossless_default(imageFrame, pixelData);
      break;
    case "1.2.840.10008.1.2.4.80":
      opts = {
        signed: imageFrame.pixelRepresentation === 1,
        bytesPerPixel: imageFrame.bitsAllocated <= 8 ? 1 : 2,
        ...imageFrame
      };
      decodePromise = decodeJPEGLS_default(pixelData, opts);
      break;
    case "1.2.840.10008.1.2.4.81":
      opts = {
        signed: imageFrame.pixelRepresentation === 1,
        bytesPerPixel: imageFrame.bitsAllocated <= 8 ? 1 : 2,
        ...imageFrame
      };
      decodePromise = decodeJPEGLS_default(pixelData, opts);
      break;
    case "1.2.840.10008.1.2.4.90":
      opts = {
        ...imageFrame
      };
      decodePromise = decodeJPEG2000_default(pixelData, opts);
      break;
    case "1.2.840.10008.1.2.4.91":
      opts = {
        ...imageFrame
      };
      decodePromise = decodeJPEG2000_default(pixelData, opts);
      break;
    case "3.2.840.10008.1.2.4.96":
    case "1.2.840.10008.1.2.4.201":
    case "1.2.840.10008.1.2.4.202":
    case "1.2.840.10008.1.2.4.203":
      opts = {
        ...imageFrame
      };
      decodePromise = decodeHTJ2K_default(pixelData, opts);
      break;
    default:
      throw new Error(`no decoder for transfer syntax ${transferSyntax}`);
  }
  if (!decodePromise) {
    throw new Error("decodePromise not defined");
  }
  const decodedFrame = await decodePromise;
  const postProcessed = postProcessDecodedPixels(decodedFrame, options2, start, decodeConfig);
  callbackFn?.(postProcessed);
  return postProcessed;
}
var obj = {
  decodeTask({ imageFrame, transferSyntax, decodeConfig, options: options2, pixelData, callbackFn }) {
    return decodeImageFrame2(imageFrame, transferSyntax, pixelData, decodeConfig, options2, callbackFn);
  }
};
expose(obj);

// node_modules/@cornerstonejs/dicom-image-loader/dist/esm/index.js
var cornerstoneDICOMImageLoader = {
  constants: constants_exports,
  convertRGBColorByPixel: convertRGBColorByPixel_default,
  convertRGBColorByPlane: convertRGBColorByPlane_default,
  convertYBRFullByPixel: convertYBRFullByPixel_default,
  convertYBRFullByPlane: convertYBRFullByPlane_default,
  convertPALETTECOLOR: convertPALETTECOLOR_default,
  wadouri: wadouri_default,
  wadors: wadors_default,
  init: init_default,
  convertColorSpace,
  createImage: createImage_default,
  decodeJPEGBaseline8BitColor: decodeJPEGBaseline8BitColor_default,
  getImageFrame: getImageFrame_default,
  getPixelData: getPixelData_default2,
  getMinMax: getMinMax_default,
  isColorImage: isColorImage_default,
  isJPEGBaseline8BitColor: isJPEGBaseline8BitColor_default,
  internal,
  decodeImageFrame: decodeImageFrame2
};
var esm_default = cornerstoneDICOMImageLoader;
export {
  constants_exports as constants,
  convertColorSpace,
  convertPALETTECOLOR_default as convertPALETTECOLOR,
  convertRGBColorByPixel_default as convertRGBColorByPixel,
  convertRGBColorByPlane_default as convertRGBColorByPlane,
  convertYBRFullByPixel_default as convertYBRFullByPixel,
  convertYBRFullByPlane_default as convertYBRFullByPlane,
  createImage_default as createImage,
  decodeImageFrame2 as decodeImageFrame,
  decodeJPEGBaseline8BitColor_default as decodeJPEGBaseline8BitColor,
  esm_default as default,
  getImageFrame_default as getImageFrame,
  getMinMax_default as getMinMax,
  getPixelData_default2 as getPixelData,
  init_default as init,
  internal,
  isColorImage_default as isColorImage,
  isJPEGBaseline8BitColor_default as isJPEGBaseline8BitColor,
  wadors_default as wadors,
  wadouri_default as wadouri
};
/*! Bundled license information:

dicom-parser/dist/dicomParser.min.js:
  (*! dicom-parser - 1.8.12 - 2023-02-20 | (c) 2017 Chris Hafey | https://github.com/cornerstonejs/dicomParser *)
*/
//# sourceMappingURL=@cornerstonejs_dicom-image-loader.js.map
