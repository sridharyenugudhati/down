define(['exports', 'preact/hooks', '../utils/UNSAFE_keys', './UNSAFE_useUser', '../index-abd879ef', 'preact', '../Common', '../Common/themes', '../Common/themes/redwood/theme', '../Common/themes/themeContract.css', 'preact/jsx-runtime', 'preact/compat'], (function(e,t,o,r,s,n,i,c,u,a,l,f){"use strict";e.useCurrentKey=function(e,s,n,i,c,u,a,l,f){const{direction:m}=r.useUser(),y="rtl"===m,d=t.useCallback(((e,t)=>f?f(e,t):e===t),[f]),p=t.useCallback((e=>{if(l&&o.isKeyDefined(a)){const t={ArrowUp:n,ArrowDown:i,ArrowLeft:y?u:c,ArrowRight:y?c:u};if(Object.keys(t).includes(e.key)&&(s||!e.shiftKey)){const r=t[e.key]?.();o.isKeyDefined(r)&&!d(a,r)&&l({value:r}),e.preventDefault()}}}),[a,l,n,i,c,u,d]),C=t.useCallback((t=>{if(l&&!t.shiftKey){const r=e(t.target);o.isKeyDefined(r)&&!d(a,r)&&l({value:r})}}),[a,e,l,d]);return{currentKeyProps:null==l?{}:{onClickCapture:C,onKeyDown:p}}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=PRIVATE_useCurrentKey.js.map
