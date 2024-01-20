define(['exports', 'preact/jsx-runtime', 'preact/hooks', 'css!./PRIVATE_SelectCommon.css', './UNSAFE_HighlightText', './PRIVATE_List', './UNSAFE_Flex', './UNSAFE_Skeleton', './utils/UNSAFE_logger', './Flex-cc4e4675', './HighlightText-bfc808b6', './List-b3266ee0', './SkeletonContainer-9733c82c', './Skeleton-c9a7cd89', './UNSAFE_Floating', './UNSAFE_Layer', './PRIVATE_SelectCommon/themes/dropdownStyles.css', './utils/UNSAFE_arrayUtils', './Floating-2186bfdd', './hooks/UNSAFE_usePress', './PRIVATE_ThemedIcons/DropdownArrowIcon', './utils/UNSAFE_classNames', './classNames-bd4a4c19', './hooks/PRIVATE_useCollectionGestureContext', './hooks/UNSAFE_useFormFieldContext', './UNSAFE_UserAssistance', './hooks/UNSAFE_useTranslationBundle', './UNSAFE_WindowOverlay', './PRIVATE_SelectCommon/themes/mobileDropdownStyles.css', './UNSAFE_Divider', './PRIVATE_SelectCommon/themes/selectMobileDropdownStyles.css', './Divider-e1dee0ca', './utils/PRIVATE_clientHints', './clientHints-dd589985', './utils/UNSAFE_keys', './hooks/UNSAFE_useId', './hooks/UNSAFE_useViewportIntersect', './hooks/UNSAFE_useTabbableMode', 'preact', './hooks/UNSAFE_useComponentTheme', './_curry1-4d9a6584', './_curry2-99f10bc7', './hooks/UNSAFE_useInteractionStyle', './utils/UNSAFE_mergeProps', './hooks/UNSAFE_useHover', './hooks/UNSAFE_useToggle', './hooks/UNSAFE_useActive', './utils/UNSAFE_mergeInterpolations', './_curry3-963d734c', './_has-77ad1af6', './utils/UNSAFE_interpolations/flexitem', './flexitem-70c06ae3', './keys-78ca48b9', './PRIVATE_List/themes/ListStyles.css', 'css!./ListStyles.styles.css', './vanilla-extract-recipes-createRuntimeFn.esm-84f316bc', './UNSAFE_GroupedList/themes/redwood/GroupedListTheme', './UNSAFE_GroupedList/themes/GroupedListStyles.css', 'css!./GroupedListStyles.styles.css', './UNSAFE_GroupedList/themes/redwood/GroupedListBaseTheme.css', 'module', './PRIVATE_LoadMoreCollection', './LoadMoreCollection-03bfa7e9', './PRIVATE_Collection', './Collection-cb886825', './PRIVATE_VirtualizedCollection', './VirtualizedCollection-1ded33d9', 'preact/compat', './UNSAFE_FocusTrap', './FocusTrap-47f31a06', './utils/PRIVATE_tabbableUtils', './_arity-39916028', './hooks/PRIVATE_useSelection', './hooks/UNSAFE_useUser', './index-abd879ef', './Common', './Common/themes', './Common/themes/redwood/theme', './Common/themes/themeContract.css', './utils/PRIVATE_collectionUtils', './hooks/PRIVATE_useCurrentKey', './hooks/PRIVATE_useCollectionFocusRing', './hooks/PRIVATE_useTabbableModeSet', './hooks/PRIVATE_useItemAction', './UNSAFE_Selector', './PRIVATE_ThemedIcons/CheckboxOffIcon', './PRIVATE_Icons/CheckboxOff', './UNSAFE_Icon', './Icon-3dc6de20', './utils/UNSAFE_size', './UNSAFE_Theme', './utils-b994552d', './hooks/UNSAFE_useTooltip', './hooks/UNSAFE_useFocus', './hooks/UNSAFE_useTouch', './hooks/UNSAFE_useAnimation', './useAnimation-bc5efb9f', './hooks/UNSAFE_useThemeInterpolations', './useThemeInterpolations-35281d48', './hooks/UNSAFE_useColorScheme', './hooks/UNSAFE_useScale', './utils/UNSAFE_interpolations/theme', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', 'css!./TooltipContentStyles.styles.css', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./TooltipContentVariants.styles2.css', './index-2e7587a5', './utils/PRIVATE_floatingUtils', './utils/PRIVATE_refUtils', './hooks/UNSAFE_useOutsideClick', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-dynamic.esm-1a9ba437', './UNSAFE_Floating/themes/FloatingContract.css', './UNSAFE_Icon/themes/IconStyle.css', 'css!./IconStyle.styles.css', './PRIVATE_ThemedIcons/CheckboxOnIcon', './PRIVATE_Icons/CheckboxOn', './PRIVATE_ThemedIcons/CheckboxMixedIcon', './PRIVATE_Icons/CheckboxMixed', './UNSAFE_Selector/themes/SelectorStyles.css', 'css!./SelectorStyles.styles.css', './UNSAFE_Radio/themes/redwood/RadioIconTheme', './UNSAFE_Radio/themes/RadioIconStyles.css', 'css!./RadioIconStyles.styles.css', './UNSAFE_Radio/themes/redwood/RadioIconBaseTheme.css', 'module', './UNSAFE_Radio/themes/redwood/RadioIconVariants.css', 'css!./RadioIconVariants.styles2.css', './utils/UNSAFE_interpolations/dimensions', './utils/UNSAFE_interpolations/boxalignment', './utils/UNSAFE_interpolations/flexbox', './flexbox-46d184cc', './utils/UNSAFE_interpolations/borders', './UNSAFE_Skeleton/themes/redwood/SkeletonTheme', './UNSAFE_Skeleton/themes/SkeletonStyles.css', 'css!./SkeletonStyles.styles.css', './UNSAFE_Skeleton/themes/redwood/SkeletonBaseTheme.css', 'module', './UNSAFE_Skeleton/themes/redwood/SkeletonVariants.css', 'css!./dropdownStyles.styles.css', './InlineHelpSource-c14cf7c7', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceTheme', './UNSAFE_UserAssistance/themes/UserAssistanceStyles.css', 'css!./UserAssistanceStyles.styles.css', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceBaseTheme.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './UNSAFE_ComponentMessage', './ComponentMessage-927aa23c', './PRIVATE_Message', './utils/PRIVATE_timer', './PRIVATE_Message/themes/MessageStyles.css', 'css!./MessageStyles.styles.css', './MessageCloseButton-9a221db8', './UNSAFE_IconButton', './IconButton-e8c0693d', './UNSAFE_BaseButton', './BaseButton-ae9a6dc8', './UNSAFE_ButtonLayout', './ButtonLayout-eec8ddcf', './UNSAFE_Text', './Text-d9e2e519', './UNSAFE_Text/themes/TextStyles.css', 'css!./TextStyles.styles.css', './PRIVATE_ThemedIcons/CloseIcon', './MessageDetail-9011f942', './MessageFormattingUtils-604638f0', './utils/UNSAFE_getLocale', './utils/UNSAFE_stringUtils', './stringUtils-62244dce', './Message.types-003fd957', './MessageStartIcon-79e8fcf1', './PRIVATE_ThemedIcons/MessageConfirmationIcon', './PRIVATE_ThemedIcons/MessageErrorIcon', './PRIVATE_ThemedIcons/MessageInfoIcon', './PRIVATE_ThemedIcons/MessageWarningIcon', './MessageSummary-1e459b81', './MessageTimestamp-1a0d1118', './MessageUtils-75fa8dae', './utils/UNSAFE_soundUtils', './UNSAFE_MessageBanner/themes/redwood/MessageBannerTheme', './UNSAFE_MessageBanner/themes/MessageBannerStyles.css', 'css!./MessageBannerStyles.styles.css', './UNSAFE_MessageBanner/themes/redwood/MessageBannerBaseTheme.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', 'css!./MessageBannerVariants.styles2.css', './MessagesManager-d1ae0a38', './PRIVATE_TransitionGroup', './hooks/UNSAFE_useMessagesContext', './UNSAFE_HiddenAccessible', './HiddenAccessible-c7d035a7', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageTheme', './UNSAFE_ComponentMessage/themes/ComponentMessageStyles.css', 'css!./ComponentMessageStyles.styles.css', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageBaseTheme.css', 'module', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageVariants.css', './ComponentMessageContainer-b6c2ccd6', './hooks/UNSAFE_useFormContext', './hooks/UNSAFE_useInputGroupContext', './UNSAFE_Popup', './hooks/PRIVATE_useAnimationStatus', './UNSAFE_Popup/themes/PopupContract.css', './UNSAFE_Popup/themes/redwood/PopupTheme', './UNSAFE_Popup/themes/redwood/PopupBaseTheme.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', 'css!./PopupStyles.styles.css', './CompactHelpSource-1e95c783', './PRIVATE_ThemedIcons/HelpIcon', './hooks/UNSAFE_useFocusWithin', './useFocusWithin-e6cf986b', './UNSAFE_Label/themes/redwood/LabelTheme', './UNSAFE_Label/themes/LabelStyles.css', 'css!./LabelStyles.styles.css', './UNSAFE_Label/themes/redwood/LabelBaseTheme.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './UNSAFE_Divider/themes/DividerStyles.css', 'css!./DividerStyles.styles.css', './UNSAFE_WindowOverlay/themes/WindowOverlayStyles.css', 'css!./WindowOverlayStyles.styles.css', './UNSAFE_WindowOverlay/themes/WindowOverlayContract.css', './UNSAFE_WindowOverlay/themes/redwood/WindowOverlayTheme', './UNSAFE_WindowOverlay/themes/redwood/WindowOverlayBaseTheme.css', 'module', './UNSAFE_WindowOverlay/themes/redwood/WindowOverlayVariants.css', 'css!./mobileDropdownStyles.styles.css', 'css!./selectMobileDropdownStyles.styles.css'], (function(e,s,t,o,n,a,i,l,r,c,d,u,h,m,S,A,E,_,F,p,T,U,y,N,w,g,f,C,b,I,x,k,R,P,M,v,D,L,V,B,O,j,H,K,W,G,z,q,Y,$,J,Q,X,Z,ee,se,te,oe,ne,ae,ie,le,re,ce,de,ue,he,me,Se,Ae,Ee,_e,Fe,pe,Te,Ue,ye,Ne,we,ge,fe,Ce,be,Ie,xe,ke,Re,Pe,Me,ve,De,Le,Ve,Be,Oe,je,He,Ke,We,Ge,ze,qe,Ye,$e,Je,Qe,Xe,Ze,es,ss,ts,os,ns,as,is,ls,rs,cs,ds,us,hs,ms,Ss,As,Es,_s,Fs,ps,Ts,Us,ys,Ns,ws,gs,fs,Cs,bs,Is,xs,ks,Rs,Ps,Ms,vs,Ds,Ls,Vs,Bs,Os,js,Hs,Ks,Ws,Gs,zs,qs,Ys,$s,Js,Qs,Xs,Zs,et,st,tt,ot,nt,at,it,lt,rt,ct,dt,ut,ht,mt,St,At,Et,_t,Ft,pt,Tt,Ut,yt,Nt,wt,gt,ft,Ct,bt,It,xt,kt,Rt,Pt,Mt,vt,Dt,Lt,Vt,Bt,Ot,jt,Ht,Kt,Wt,Gt,zt,qt,Yt,$t,Jt,Qt,Xt,Zt,eo,so,to,oo,no,ao,io,lo,ro,co,uo,ho,mo,So,Ao,Eo,_o,Fo,po,To,Uo,yo){"use strict";function No(e,s){if("string"!=typeof s)return s(e);if(e.data?.hasOwnProperty(s)){const t=e.data[s];return String(t)}r.Logger.error("SelectMultiple: itemText specifies field that does not exist: "+s)}const wo=()=>{};const go=s.jsx(h.SkeletonContainer,{minimumCount:3,children:()=>s.jsx(c.Flex,{height:"12x",align:"center",children:s.jsx(m.Skeleton,{height:"4x"})})}),fo={TAB:"Tab",ENTER:"Enter",NUMPAD_ENTER:"NumpadEnter",ESC:"Escape",SPACE:"Space",LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",DOWN:"ArrowDown",SHIFT_LEFT:"ShiftLeft",SHIFT_RIGHT:"ShiftRight",CTRL_LEFT:"ControlLeft",CTRL_RIGHT:"ControlRight",ALT_LEFT:"AltLeft",ALT_RIGHT:"AltRight",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",HOME:"Home",END:"End",BACKSPACE:"Backspace",DELETE:"Delete"},Co=e=>{switch(e.code){case fo.SHIFT_LEFT:case fo.SHIFT_RIGHT:case fo.CTRL_LEFT:case fo.CTRL_RIGHT:case fo.ALT_LEFT:case fo.ALT_RIGHT:return!0;default:return e.metaKey||e.ctrlKey}},bo=e=>/\bF([1-9]|1[0-2])\b/i.test(e.code),Io=e=>Co(e)||bo(e),xo=e=>0===e.button&&!e.ctrlKey,ko=e=>{e.currentTarget===e.target&&e.preventDefault()},Ro=e=>e?.ownerDocument??document,Po=({isDisabled:e=!1,ref:s,handler:o})=>{t.useEffect((()=>{const t=_.coerceArray(s);if(!o||e||t.length>0&&t.findIndex((e=>null===e.current))>-1)return;const n=e=>{((e,s)=>{const t=e.target;if(t&&!Ro(t).contains(t))return!1;return s.every((e=>!e.current?.contains(t)))})(e,t)&&o?.(e)},a=t[0],i=Ro(a.current);return i?(i.addEventListener("mousedown",n,!0),()=>{i.removeEventListener("mousedown",n,!0)}):void 0}),[e,o,s])},Mo="bottom-start";const vo="_1cviboh",Do="_1rveoj5",Lo="bo21hz",Vo="_8yoz1b",Bo="_7d8ezb",Oo=()=>{};const jo="olmai",Ho="wbmd60",Ko="no1r22",Wo="wapw62";function Go({children:e,id:t,isOpen:o}){return o?s.jsx(A.Layer,{children:s.jsx(C.WindowOverlay,{children:s.jsx("div",{id:t,class:b.mobileDropdownStyles.base,role:"dialog","aria-modal":"true",children:s.jsx(c.Flex,{width:"100%",height:"100%",maxHeight:"100%",direction:"column",children:e})})})}):null}e.DefaultList=function({"aria-label":e,currentItemVariant:o,currentKey:n,data:a,itemRenderer:i,itemText:l,onCurrentKeyChange:r,onItemAction:h,onLoadRange:m=wo,onSelectionChange:S,searchText:A,selectedKeys:E,selectionMode:_}){const F=t.useCallback((e=>{const t={data:e.data,index:e.index,metadata:e.metadata,selector:e.selector,searchText:A,selectedKeys:E,onSelectionChange:({target:e,value:s})=>{S?.({target:e,value:{all:!1,keys:s}})}},o={data:e.data,key:e.metadata.key,metadata:e.metadata};return i?i(t):s.jsxs(c.Flex,{children:[e.selector&&e.selector(),s.jsx("div",{class:"_18ig55r",children:s.jsx(d.HighlightText,{matchText:A,children:No(o,l)})})]})}),[i,l,S,A,E]),p=t.useMemo((()=>({all:!1,keys:E??new Set})),[E]);return s.jsx(u.List,{"aria-label":e,allowTabbableMode:!1,currentItemVariant:o,currentKey:n,data:a??null,loadingIndicator:go,onCurrentKeyChange:r,onItemAction:h,onLoadRange:m,onSelectionChange:S,role:"listbox",selectedKeys:p,selectionMode:_,children:e=>F(e)})},e.Dropdown=function({anchorRef:e,children:o,dropdownRef:n,id:a,isOpen:i,onAutoDismiss:l,onPosition:r}){const[c,d]=t.useState(Mo);t.useEffect((()=>{i||d(Mo)}),[i,d]);const u=t.useCallback((e=>{d(e.placement),r?.(e)}),[r,d]),h=t.useCallback((e=>{l?.(e)}),[l]),m=t.useCallback((e=>{if(!e.defaultPrevented&&!Io(e))switch(e.code){case fo.ESC:case fo.TAB:h(e)}}),[h]);Po({isDisabled:!i,ref:[e,n],handler:h});const S=i?{minWidth:`${e.current?.offsetWidth}px`}:{};return i?s.jsx(A.Layer,{logicalParentRef:e,children:s.jsx(F.Floating,{anchorRef:e,sizeOptions:{isMaxHeightAdjusted:!0,maxHeightCeiling:400},ref:n,placement:c,offsetValue:{mainAxis:4,crossAxis:0},onPosition:u,children:s.jsx("div",{class:E.dropdownStyles.base,id:a,style:S,onKeyDown:m,onMouseDown:ko,children:o})})}):null},e.DropdownArrow=function({isDisabled:e=!1,onClick:o,size:n="md"}){const a=t.useCallback((e=>{e.preventDefault()}),[]),{pressProps:i}=p.usePress(o??Oo,{isDisabled:e}),l=y.classNames([vo,"sm"===n?Lo:Do,e?Bo:Vo]);return s.jsx("span",{"aria-hidden":"true",class:l,tabIndex:-1,onMouseDown:a,...i,children:s.jsx(T.DropdownArrowIcon,{})})},e.DropdownList=function({children:e,hasBottomGap:t=!0,isLoading:o=!1}){const n=y.classNames([jo,Ho,t&&Ko,o&&Wo]);return s.jsx(N.CollectionGestureContext.Provider,{value:"embedded",children:s.jsx("div",{class:n,onMouseDown:ko,children:e})})},e.DropdownUserAssistance=function(e){const o=t.useCallback((e=>{"A"!==e.target?.tagName&&e.preventDefault()}),[]);return s.jsx(w.FormFieldContext.Provider,{value:{isFocused:!0},children:s.jsx("div",{class:"xmhexc",onMouseDown:o,children:s.jsx(g.InlineUserAssistance,{...e})})})},e.EmptyResults=function(){const e=f.useTranslationBundle("@oracle/oraclejet-preact");return s.jsx("div",{class:"_1h7kb4",onMouseDown:ko,children:e.select_noMatchesFound()})},e.KEYS=fo,e.MobileDropdown=Go,e.SelectMobileDropdown=function({children:e,footer:t,header:o,id:n,isOpen:a}){return s.jsxs(Go,{id:n,isOpen:a,children:[o,s.jsx(k.Divider,{}),s.jsx("div",{class:x.selectMobileDropdownStyles.content,children:e}),s.jsx(k.Divider,{}),t]})},e.isBeforeDataFetch=function(e){return"atLeast"===e.sizePrecision&&0===e.totalSize},e.isControlKey=Co,e.isControlOrFunctionKey=Io,e.isFunctionKey=bo,e.isMobile=function(){const e=P.getClientHints().deviceType;return"phone"===e||"tablet"===e},e.isPhone=function(){return"phone"===P.getClientHints().deviceType},e.isSimpleClick=xo,e.isTablet=function(){return"tablet"===P.getClientHints().deviceType},e.preventDefault=e=>{e.preventDefault()},e.preventDefaultForCurrentTarget=ko,e.renderItemText=No,e.useSelectCommon=function({data:e,inputRef:s,isFocused:o,onFilter:n}){const a=t.useRef(null),i=t.useRef(null),[l,r]=t.useState(!1),[c,d]=t.useState(!1),[u,h]=t.useState({rowKey:void 0}),[m,S]=t.useState(),[A,E]=t.useState(!1),[_,F]=t.useState(),[p,T]=t.useState(),U=t.useCallback((e=>{!e.defaultPrevented&&xo(e)&&(l||r(!0),setTimeout((function(){s.current?.focus()}),0))}),[s,l]),y=t.useCallback((()=>{r(!l),s.current?.focus()}),[s,l]),N=t.useCallback((e=>{if(l)switch(r(!1),e?.type){case"keydown":if(e.code===fo.ESC)s.current?.focus();break;case"mousedown":i.current?.contains(document.activeElement)&&s.current?.focus()}}),[s,l]),w=t.useCallback((e=>{d(e.placement.startsWith("top"))}),[]),g=t.useCallback((s=>{if(l){const s=i.current?.querySelector('[tabindex="0"]');s?.focus(),void 0!==e&&void 0===u.rowKey&&h({rowKey:e?.data?.[0]?.metadata?.key})}else r(!0);s.preventDefault()}),[u,e,l]),f=t.useCallback((e=>{if(!Io(e))switch(e.code){case fo.PAGE_UP:case fo.PAGE_DOWN:return void e.preventDefault();case fo.UP:case fo.DOWN:e.preventDefault();break;case fo.ESC:l&&(r(!1),e.preventDefault(),e.stopPropagation())}}),[l]),C=t.useCallback((e=>{if(!Io(e))switch(e.code){case fo.UP:case fo.DOWN:g(e)}}),[g]),b=t.useCallback((e=>{l||r(!0),E(!0),F(e.value);const s=e.value?.trim();T(s),n?.({searchText:s})}),[l,n]),I=t.useCallback((e=>{h({rowKey:e.value})}),[]),x=t.useCallback((()=>{E(!1),F(""),T("")}),[]);return t.useEffect((()=>{l||o||!A||x()}),[l,o,A,x]),t.useEffect((()=>{l&&!A&&n?.({searchText:void 0})}),[l,A,n]),t.useEffect((()=>{l||d(!1)}),[l]),{currentRow:u,dropdownRef:i,handleDropdownArrowClick:y,handleDropdownAutoDismiss:N,handleDropdownPosition:w,handleInput:b,handleMainFieldKeyDown:f,handleMainFieldKeyUp:C,handleUpDownArrowKeys:g,isDropdownAbove:c,isDropdownOpen:l,isFocused:o||l,isUserFiltering:A,mainFieldRef:a,onCurrentKeyChange:I,onMouseDown:U,searchText:p,selectedKeys:m,setCurrentRow:h,setDropdownOpen:r,setSelectedKeys:S,setUserInput:F,stopFiltering:x,userInput:_}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=PRIVATE_SelectCommon.js.map
