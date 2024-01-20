define(['exports', 'preact/jsx-runtime', 'css!./UNSAFE_AspectRatio.css', './utils/UNSAFE_interpolations/dimensions', './utils/UNSAFE_mergeInterpolations', './utils/UNSAFE_classNames', './utils/UNSAFE_arrayUtils', './classNames-bd4a4c19', './utils/UNSAFE_size', './UNSAFE_Theme', './utils-b994552d', './Common/themes/themeContract.css', './_curry1-4d9a6584', './_curry3-963d734c', './_curry2-99f10bc7', './_has-77ad1af6'], (function(s,t,e,i,r,a,n,o,c,l,d,m,u,_,p,A){"use strict";const N=n.stringLiteralArray(["9/16","1/1","6/5","5/4","4/3","11/8","1.43/1","3/2","14/9","16/10","1.6180/1","5/3","16/9","1.85/1","1.9/1","2/1","2.2/1","64/21","2.4/1","2.414/1","2.76/1","32/9","18/5","4/1"]),h=n.stringLiteralArray(["maxWidth","minWidth","width"]),y=Array.from(h,(s=>i.dimensionInterpolations[s])),E=r.mergeInterpolations(y);s.AspectRatio=function({children:s,ratio:e="1/1",...i}){const{class:r,...a}=E(i),n={...a,"--oj-c-PRIVATE-DO-NOT-USE-aspect-ratio":e};return t.jsx("div",{class:o.classNames(["_1pti2pj",r]),style:n,children:s})},s.ratios=N,Object.defineProperty(s,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_AspectRatio.js.map