define(['exports', 'preact/hooks', '../utils/UNSAFE_keys'], (function(e,t,a){"use strict";e.useTabbableModeSet=function(e,o,r,s,n){const[l,c]=t.useState(),u=t.useCallback(((e,t=!1)=>{c(void 0),s&&s(e,t)}),[s,c]),i=t.useCallback((e=>{c(e),n&&n(e)}),[n,c]),d=t.useCallback((e=>e===l),[l]),k={onFocus:e=>{const t=o(e.target);a.isKeyDefined(t)&&!d(t)&&i(t)},onBlur:t=>{t.relatedTarget&&e(t.relatedTarget)||u(t.relatedTarget)},onKeyDown:t.useCallback((e=>{"F2"===e.key&&(void 0===r||d(r)?u(e.target,!0):i(r)),"Esc"!==e.key&&"Escape"!==e.key||u(e.target,!0)}),[r,u,i,d]),onPointerDown:e=>{const t=o(e.target);void 0===l||d(t)||u(e.target)}};return[d,k]},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=PRIVATE_useTabbableModeSet.js.map
