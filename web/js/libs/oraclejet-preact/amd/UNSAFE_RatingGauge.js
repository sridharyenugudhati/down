define(['exports', 'preact/jsx-runtime', 'preact', 'preact/hooks', './utils/UNSAFE_classNames', './UNSAFE_RatingGauge/themes/RatingGaugeContract.css', './hooks/UNSAFE_useComponentTheme', './hooks/UNSAFE_useUser', './vanilla-extract-dynamic.esm-1a9ba437', './UNSAFE_RatingGauge/themes/redwood/RatingGaugeTheme', './classNames-bd4a4c19', './hooks/PRIVATE_useDvtMeterEvents', './utils/PRIVATE_meterUtils', './hooks/UNSAFE_useTooltip', './utils/UNSAFE_mergeProps', './hooks/UNSAFE_useTabbableMode', './utils/UNSAFE_logger', './_curry1-4d9a6584', './_curry2-99f10bc7', './index-abd879ef', './Common', './Common/themes', './Common/themes/redwood/theme', './Common/themes/themeContract.css', 'preact/compat', './UNSAFE_RatingGauge/themes/RatingGaugeStyles.css', 'css!./RatingGaugeStyles.styles.css', './UNSAFE_RatingGauge/themes/redwood/RatingGaugeBaseTheme.css', 'module', './UNSAFE_RatingGauge/themes/redwood/RatingGaugeVariants.css', 'css!./RatingGaugeVariants.styles2.css', './vanilla-extract-recipes-createRuntimeFn.esm-84f316bc', './hooks/UNSAFE_useId', './UNSAFE_Floating', './Floating-2186bfdd', './index-2e7587a5', './utils/PRIVATE_floatingUtils', './utils/PRIVATE_refUtils', './hooks/UNSAFE_useOutsideClick', './utils/UNSAFE_arrayUtils', './utils-b994552d', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './UNSAFE_Floating/themes/FloatingContract.css', './UNSAFE_Layer', './useThemeInterpolations-35281d48', './hooks/UNSAFE_useColorScheme', './hooks/UNSAFE_useScale', './utils/UNSAFE_interpolations/theme', './UNSAFE_Theme', './utils/UNSAFE_mergeInterpolations', './_curry3-963d734c', './_has-77ad1af6', './hooks/UNSAFE_useHover', './hooks/UNSAFE_useToggle', './hooks/UNSAFE_useFocus', './hooks/UNSAFE_useTouch', './hooks/UNSAFE_useAnimation', './useAnimation-bc5efb9f', './hooks/UNSAFE_useThemeInterpolations', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', 'css!./TooltipContentStyles.styles.css', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./TooltipContentVariants.styles2.css', './utils/UNSAFE_dvtCommonUtils'], (function(e,t,s,o,a,i,n,l,r,d,c,u,h,m,g,S,p,y,F,U,b,N,A,_,E,R,T,C,f,x,v,w,k,G,D,j,P,B,V,M,I,O,z,H,K,$,L,X,q,J,Q,W,Y,Z,ee,te,se,oe,ae,ie,ne,le,re,de,ce,ue,he,me,ge,Se,pe,ye){"use strict";function Fe(e,t,s,o,a){const i=o.current;if(!i||0===i.width)return-1;const n=e-i.x,l=t*(a?i.width-n:n)/i.width/s;return l<.5?0:Math.min(t,Math.ceil(l)*s)}function Ue(e){if(!e)return{width:0,x:0};const t=e.getBoundingClientRect();return{width:t.width,x:t.x+window.scrollX}}const be=({isSelected:e,isDisabled:s,isReadOnly:o,color:a="neutral"})=>{const{forcedColors:u}=l.useUser(),h="active"===u,m=h&&s,g=function(e){return"neutral"===e||"gold"===e||"danger"===e||"warning"===e||"success"===e?e:void 0}(a),S=r.assignInlineVars({[i.ratingGaugeVars.colorSelected]:a,[i.ratingGaugeVars.borderColorSelected]:a,[i.ratingGaugeVars.colorSelectedReadonly]:a}),{variantClasses:p,styles:{ratingStarBaseStyle:y,innerRatingStarColor:F,outerRatingStarColor:U,outerDisabledHighContrastBaseStyle:b,outerDisabledHighContrastSelectedStyle:N,outerDisabledHighContrastUnselectedStyle:A}}=n.useComponentTheme(d.RatingGaugeRedwoodTheme,{color:g,selectionState:e?"isSelected":"isNotSelected",disabledState:s?"isDisabled":"isNotDisabled",readonlyState:o?"isReadonly":"isNotReadonly",highContrastState:h?"isHighContrast":"isNotHighContrast"});return t.jsx("svg",{viewBox:"0 0 36 36",height:"100%",width:"100%",style:g?void 0:S,class:c.classNames([y,g?p:""]),children:t.jsxs("g",{children:[t.jsx("path",{class:F,d:"m18 1 5.0061 11.9524 12.9939 1.0344-9.9 8.4215 3.0246 12.5917-11.1246-6.7476-11.12461 6.7476 3.02461-12.5917-9.9-8.4215 12.9939-1.0344z"}),t.jsx("path",{class:c.classNames([U,m?b:"",m?e?N:A:""]),d:"m23.0061 12.9524-5.0061-11.9524-5.0061 11.9524-12.9939 1.0344 9.9 8.4215-3.02461 12.5917 11.12461-6.7476 11.1246 6.7476-3.0246-12.5917 9.9-8.4215zm10.5043 1.8394-8.5262 7.2528 2.6077 10.8562-9.5919-5.818-9.59192 5.818 2.60772-10.8562-8.52615-7.2528 11.19115-.891 4.3192-10.31227 4.3192 10.31227z"})]})})},Ne=({fillRatio:e,isDisabled:o,isReadonly:a,color:i})=>{const{direction:r}=l.useUser(),c="rtl"===r;if(1===e||0===e)return t.jsx(be,{isSelected:1===e,isDisabled:o,isReadOnly:a,color:i});const{styles:{fractionalStarBaseStyle:u}}=n.useComponentTheme(d.RatingGaugeRedwoodTheme);return t.jsxs(s.Fragment,{children:[t.jsx("div",{class:u,style:{clipPath:`inset(0% ${c?100*(1-e):0}% 0% ${c?0:100*e}%)`},children:t.jsx(be,{isSelected:!1,isDisabled:o,isReadOnly:a,color:i})}),t.jsx("div",{class:u,style:{clipPath:`inset(0% ${c?0:100*(1-e)}% 0% ${c?100*(1-e):0}%)`},children:t.jsx(be,{isSelected:!0,isDisabled:o,isReadOnly:a,color:i})})]})};e.RatingGauge=function({max:e=5,value:a=0,size:i,color:r="neutral",step:p=1,isReadonly:y,isDisabled:F,...U}){h.validateRange(0,e,a,p);const b=o.useRef(null),N=o.useRef(Ue(null)),A=!y&&!F;o.useEffect((()=>{N.current=Ue(b.current)}),[i,e]);const _=((e,t,s,a,i,n,r,d)=>{const c=o.useRef(),{direction:h}=l.useUser();if(!n)return{};const m="rtl"===h,g=e=>{d?.({value:e}),c.current=e},S=u.useKeyboardEvents(s,0,e,t,c,r,d);return{onPointerUp:s=>{const o=Fe(s.pageX,e,t,i,m);-1!==o&&r?.({value:o})},onBlur:()=>{r?.({value:s})},onPointerMove:s=>{const o=Fe(s.pageX,e,t,i,m);-1!==o&&o!=c.current&&g(o)},onKeyUp:S.onKeyUp,onKeyDown:S.onKeyDown,onPointerLeave:()=>{g(void 0)},onPointerEnter:()=>{i.current=Ue(a.current)}}})(e,p,a,b,N,A,U.onCommit,U.onInput),{tooltipContent:E,tooltipProps:R}=function({max:e,value:t,isReadonly:s,isDisabled:a,tooltip:i,datatip:n,thresholds:l,ariaDescribedBy:r,width:d}){const[c,u]=o.useState(!1),g=s&&!a?"tooltip":"datatip";let S=a||!("tooltip"===g&&i||"datatip"===g&&n);const p=Math.max(1,Math.ceil(t)),y="tooltip"===g?0:(p-Math.ceil(e/2))*d/e;let F="tooltip"===g?i:n;F||!l||a||(F=h.findThreshold(t,l)?.accessibleLabel,S=!1);const{tooltipContent:U,tooltipProps:b}=m.useTooltipControlled({text:F,isOpen:c,anchor:{x:"element",y:"element"},position:"bottom",offset:{mainAxis:8,crossAxis:y},isDisabled:S,onToggle:({value:e})=>u(e),variant:g});return b["aria-describedby"]=[r,b["aria-describedby"]].filter(Boolean).join(" "),{tooltipContent:U,tooltipProps:b}}({max:e,value:a,isReadonly:y,isDisabled:F,tooltip:U.tooltip,datatip:U.datatip,thresholds:U.thresholds,width:N.current.width,ariaDescribedBy:U["aria-describedby"]}),T=h.getMeterAriaProps(a,0,e,U["aria-label"],U["aria-labelledby"],U.thresholds,F,y,U.tooltip),C=g.mergeProps(_,R),f=h.getThresholdColorFromValue(a,r,U.thresholds),{isTabbable:x}=S.useTabbableMode(),{classes:v,styles:{baseStyle:w,interactiveStyle:k,itemStyle:G,sizeStyle:D}}=n.useComponentTheme(d.RatingGaugeRedwoodTheme,{size:i});return t.jsxs(s.Fragment,{children:[t.jsx("div",{...T,ref:b,class:c.classNames([v,w,A?k:void 0]),tabIndex:x&&!F?0:-1,...C,children:[...Array(e)].map(((e,s)=>{const o=Math.min(Math.max(0,a-s),1);return t.jsx("div",{className:c.classNames([D,G]),children:t.jsx(Ne,{fillRatio:o,isDisabled:F,isReadonly:y,color:f})})}))}),E]})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_RatingGauge.js.map