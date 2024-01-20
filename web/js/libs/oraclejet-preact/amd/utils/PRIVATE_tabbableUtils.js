define(['exports', '../_curry1-4d9a6584', '../_curry2-99f10bc7', '../_arity-39916028', '../_curry3-963d734c'], (function(r,t,e,n,u){"use strict";var o=function(r){return"[object String]"===Object.prototype.toString.call(r)},c=e._curry2_1,a=o,i=c((function(r,t){var e=r<0?t.length+r:r;return a(t)?t.charAt(e):t[e]})),l=i(0),f=i(-1);var s=function(r,t){return function(){return t.call(this,r.apply(this,arguments))}},d=Array.isArray||function(r){return null!=r&&r.length>=0&&"[object Array]"===Object.prototype.toString.call(r)},y=t._curry1_1,p=d,b=o,h=y((function(r){return!!p(r)||!!r&&("object"==typeof r&&(!b(r)&&(1===r.nodeType?!!r.length:0===r.length||r.length>0&&(r.hasOwnProperty(0)&&r.hasOwnProperty(r.length-1)))))})),_=function(){function r(r){this.f=r}return r.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},r.prototype["@@transducer/result"]=function(r){return r},r.prototype["@@transducer/step"]=function(r,t){return this.f(r,t)},r}();var v=function(r){return new _(r)},g=n._arity_1,m=(0,e._curry2_1)((function(r,t){return g(r.length,(function(){return r.apply(t,arguments)}))})),w=h,x=v,A=m;function O(r,t,e){for(var n=e.next();!n.done;){if((t=r["@@transducer/step"](t,n.value))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}n=e.next()}return r["@@transducer/result"](t)}function S(r,t,e,n){return r["@@transducer/result"](e[n](A(r["@@transducer/step"],r),t))}var j="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";var E=function(r,t,e){if("function"==typeof r&&(r=x(r)),w(e))return function(r,t,e){for(var n=0,u=e.length;n<u;){if((t=r["@@transducer/step"](t,e[n]))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}n+=1}return r["@@transducer/result"](t)}(r,t,e);if("function"==typeof e["fantasy-land/reduce"])return S(r,t,e,"fantasy-land/reduce");if(null!=e[j])return O(r,t,e[j]());if("function"==typeof e.next)return O(r,t,e);if("function"==typeof e.reduce)return S(r,t,e,"reduce");throw new TypeError("reduce: list must be array or iterable")},I=(0,u._curry3_1)(E),P=d;var T=function(r,t){return function(){var e=arguments.length;if(0===e)return t();var n=arguments[e-1];return P(n)||"function"!=typeof n[r]?t.apply(this,arguments):n[r].apply(n,Array.prototype.slice.call(arguments,0,e-1))}},k=T,q=(0,u._curry3_1)(k("slice",(function(r,t,e){return Array.prototype.slice.call(e,r,t)}))),W=T,D=(0,t._curry1_1)(W("tail",q(1,1/0))),M=n._arity_1,X=s,z=I,B=D;var C=function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return M(arguments[0].length,z(X,arguments[0],B(arguments)))},F=(0,e._curry2_1)((function(r,t){return Array.prototype.slice.call(t,0).sort(r)}));const G=["a:not([name]):not([disabled])","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])","[tabIndex]:not([tabIndex='-1'])"].join(", "),H=(r,t)=>(r.tabIndex??0)-(t.tabIndex??0),J=r=>{const t=(e=r,Array.from(e.querySelectorAll(G)).filter((r=>null!==r.offsetParent&&-1!==r.tabIndex)));var e;return t.length?t:[r]},K=C(J,F(H),l),L=r=>{r.focus({preventScroll:!0})},N=C(J,F(H),l,L),Q=C(J,F(H),f,L);r.focusOn=L,r.focusOnEnd=Q,r.focusOnStart=N,r.focusWithin=r=>{const t=K(r);L(t)},r.getActiveElement=r=>(r?.ownerDocument??document).activeElement,r.isTabbableElement=r=>r.matches(G),Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=PRIVATE_tabbableUtils.js.map
