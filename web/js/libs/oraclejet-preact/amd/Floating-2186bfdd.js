define(['exports', 'preact/jsx-runtime', 'preact/hooks', 'preact/compat', './index-2e7587a5', './utils/PRIVATE_refUtils', './hooks/UNSAFE_useOutsideClick', './hooks/UNSAFE_useUser', './hooks/UNSAFE_useComponentTheme', './utils/UNSAFE_classNames', './utils-b994552d', './Common/themes/themeContract.css', './UNSAFE_Floating/themes/redwood/FloatingTheme', './classNames-bd4a4c19', './UNSAFE_Floating/themes/FloatingStyles.css', './vanilla-extract-dynamic.esm-1a9ba437', './UNSAFE_Floating/themes/FloatingContract.css'], (function(t,e,n,s,i,o,r,a,l,c,u,f,d,m,g,h,p){"use strict";const b=s.forwardRef((({data:t,anchorRef:s,tail:i,isRtl:r,backgroundColor:a},c)=>{const{styles:g,baseTheme:h}=l.useComponentTheme(d.FloatingRedwoodTheme),{baseStyle:p}=g,b=n.useRef(null),[x,y]=n.useState({arrowStyle:{visibility:"hidden"},arrowInnerStyle:{visibility:"hidden"}});n.useLayoutEffect((()=>{if(null==b.current)return;const{isCornerVerticalPlacement:e,isCornerHorizontalPlacement:n}=function(t,e,n){if("simple"===e&&n&&n.arrow){const{centerOffset:e}=n.arrow,s=7;let i=0,o=0;const r=t.current,a=void 0===r?.x&&void 0===r?.y;a&&(i=Math.round(r.getBoundingClientRect().height),o=Math.round(t.current?.getBoundingClientRect().width));return{isCornerVerticalPlacement:a?Math.abs(e)>=i/2-s/2:["start-top-corner","start-bottom-corner","end-top-corner","end-bottom-corner"].includes(n.origPlacement),isCornerHorizontalPlacement:a?Math.abs(e)>=o/2-s/2:["top-start-corner","top-end-corner","bottom-start-corner","bottom-end-corner"].includes(n.origPlacement)}}return{isCornerVerticalPlacement:!1,isCornerHorizontalPlacement:!1}}(s,i,t);y(function(t,e,n,s,i,o){const r={visibility:"visible"},a={visibility:"visible"};if("simple"===t&&i&&i.arrow){const{x:l,y:c,centerOffset:d}=i.arrow,m=7,g=6,h=5,p=5,b=0===d,x=d>0;function y(t){const e=t?g:m;A({borderTop:`${w(e)} solid ${u.rgba(f.colorSchemeVars.palette.neutral[90],.1)}`,borderRight:k(e),borderLeft:k(e)},r);const n=t?p:h;C({borderTop:`${w(n)} solid ${o}`,borderRight:`${k(n)}`,borderLeft:`${k(n)}`},a)}function A(t,e){Object.assign(e,t)}function C(t,e){Object.assign(e,t)}function S(t){return`rotate(${45*t}deg)`}function w(t){return`${t}px`}function k(t){return`${w(t)} solid transparent`}y(n||s);switch(i.placement.split("-")[0]){case"top":R();break;case"end":e?j():v();break;case"bottom":F();break;case"start":e?v():j()}function R(){null!=l&&(s?(A({top:"",bottom:w(2-m),left:w(l+(x?5:-5)),transform:S(x?5:3)},r),E()):(A({top:"",bottom:w(-m),left:w(b?l:l+(x?1:-1)),transform:S(0)},r),M()))}function v(){null!=c&&(n?(A({top:w(c+(x?2:-2)),right:"",left:w(-m-1),transform:S(x?7:5)},r),E()):(A({top:w(b?c:c+(x?-2:2)),right:"",left:w(1.5*-m),transform:S(2)},r),M()))}function F(){null!=l&&(s?(A({top:w(3-m),bottom:"",left:w(l+(x?4:-4)),transform:S(x?2:6)},r),C({top:w(-h),left:w((x?1:-1)-h)},a)):(A({top:w(-m),bottom:"",left:w(b?l:l+(x?1:-1)),transform:S(4)},r),M()))}function j(){null!=c&&(n?(A({top:w(c+(x?2:-2)),right:w(-m-1),left:"",transform:S(x?1:3)},r),C({top:w(-h),left:w((x?-2:2)-h)},a)):(A({top:w(b?c:c+(x?-2:2)),right:w(1.5*-m),left:"",transform:S(6)},r),M()))}function E(){C({top:w(-h),left:w((x?2:-2)-h)},a)}function M(){C({top:w(-h-2),left:w(-h)},a)}}return{arrowStyle:r,arrowInnerStyle:a}}(i,r,e,n,t,a))}),[t?.placement,t?.x,t?.y,t?.offset,t?.arrow,i,r,s]);const A=n.useMemo((()=>o.mergeRefs(c,b)),[c,b]);return"simple"===i&&e.jsxs("div",{ref:A,class:m.classNames([h,p]),style:x.arrowStyle,children:[" ",e.jsx("div",{class:m.classNames([p]),style:x.arrowInnerStyle})," "]})}));const x=s.forwardRef((({children:t,backgroundColor:s,onClickOutside:l,placement:c="bottom",anchorRef:u,offsetValue:f,class:d,tail:x="none",flipOptions:y={mainAxis:!0,crossAxis:!1},shiftOptions:A={mainAxis:!0,crossAxis:!1},sizeOptions:C={isMaxHeightAdjusted:!1,isMaxWidthAdjusted:!1},boundaryOptions:S={padding:0},onPosition:w},k)=>{const R=n.useRef(null),[v,F]=n.useState(),[j,E]=n.useState(null);n.useLayoutEffect((()=>{E(u.current)}),[]),u.current!==j&&E(u.current);const{direction:M}=a.useUser(),N="rtl"===M,O=n.useCallback((t=>{F(t),w?.(t)}),[c,u,x,w]),P=[i.offset(f),i.b({mainAxis:y.mainAxis,crossAxis:y.crossAxis,fallbackPlacements:y.fallbackPlacements?.map((t=>i.logicalSide(t,M))),padding:S.padding}),i.D({mainAxis:A.mainAxis,crossAxis:A.crossAxis,limiter:i.L({mainAxis:A.mainAxis,crossAxis:A.crossAxis})}),...R.current?[i.m({element:R.current})]:[]];(C.isMaxHeightAdjusted||C.isMaxWidthAdjusted)&&P.push(i.k({apply({availableWidth:t,availableHeight:e,elements:n}){C.isMaxHeightAdjusted&&parseInt(n.floating.style.maxHeight)!==e&&Object.assign(n.floating.style,{maxHeight:`${Math.min(e,C.maxHeightCeiling||e)}px`}),C.isMaxWidthAdjusted&&parseInt(n.floating.style.maxWidth)!==t&&Object.assign(n.floating.style,{maxWidth:`${Math.min(t,C.maxWidthCeiling||t)}px`})},padding:S.padding}));const{x:$,y:H,reference:U,floating:V,refs:T,update:_}=i.useFloating({placement:c,middleware:P,onPosition:O}),[I,W]=n.useState(!1);n.useEffect((()=>{if(T.reference.current&&T.floating.current&&!0===I)return i.N(T.reference.current,T.floating.current,_)}),[T.floating,T.reference,_,I]),n.useEffect((()=>{null!=$&&null!=H&&W(!0)}),[$,H]),r.useOutsideClick({isDisabled:!1,ref:T.floating,handler:l}),n.useLayoutEffect((()=>{if(j instanceof Element){return void U(j)}const t=j,e={getBoundingClientRect:()=>({width:0,height:0,x:t.x,y:t.y,top:t.y,left:t.x,right:t.x,bottom:t.y})};t&&null!=t.x&&U(e)}),[j,U]);const L=n.useMemo((()=>o.mergeRefs(k,V)),[k,V]),z={top:H,left:$};let B={};s&&(B=h.assignInlineVars({[p.floatingVars.backgroundColor]:s}));const D=null==$&&null==H?g.floatingVisibilityStyles.hidden:g.floatingVisibilityStyles.visible,q=m.classNames([d,g.floatingStyle,D]);return e.jsxs("div",{class:q,ref:L,style:{...z,...B},children:[t,e.jsx(b,{ref:R,backgroundColor:s,data:v,anchorRef:u,tail:x,isRtl:N})]})}));t.Floating=x}));
//# sourceMappingURL=Floating-2186bfdd.js.map
