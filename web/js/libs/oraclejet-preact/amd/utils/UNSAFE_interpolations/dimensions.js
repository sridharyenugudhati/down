define(['exports', '../UNSAFE_arrayUtils', '../UNSAFE_size', '../../_curry1-4d9a6584', '../../UNSAFE_Theme', '../../utils-b994552d', '../../Common/themes/themeContract.css'], (function(e,t,i,n,r,s,o){"use strict";var a=(0,n._curry1_1)((function(e){return null==e}));const c=t.stringLiteralArray(["height","maxHeight","maxWidth","minHeight","minWidth","width"]),u=e=>t=>{const n=t[e];return a(t[e])?{}:{[e]:i.sizeToCSS(n)}},d=c.reduce(((e,t)=>Object.assign(e,{[t]:u(t)})),{});e.dimensionInterpolations=d,e.dimensions=c,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=dimensions.js.map