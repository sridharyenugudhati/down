define(['exports', 'preact/jsx-runtime', 'preact', 'preact/compat', './PRIVATE_SelectCommon', './UNSAFE_Label', './UNSAFE_TextField', './UNSAFE_UserAssistance', './UNSAFE_View', './hooks/UNSAFE_useFocusableTextField', './hooks/UNSAFE_useFormContext', './hooks/UNSAFE_useFormFieldContext', './hooks/UNSAFE_useLoadingIndicatorTimer', './hooks/UNSAFE_useTextField', './hooks/UNSAFE_useTranslationBundle', './UNSAFE_Button', './UNSAFE_SelectMultiple/themes/MobileDropdownFooterStyles.css', './Button-3d411b51', './UNSAFE_Flex', 'css!./UNSAFE_SelectMultiple.css', './UNSAFE_Chip', './Chip-8f67070d', './UNSAFE_IconButton', './UNSAFE_Icon', './Icon-3dc6de20', './IconButton-e8c0693d', './Flex-cc4e4675', 'preact/hooks', './hooks/UNSAFE_useFocusWithin', './hooks/UNSAFE_useUser', './utils/PRIVATE_keyboardUtils', './utils/UNSAFE_arrayUtils', './utils/UNSAFE_classNames', './utils/UNSAFE_interpolations/dimensions', './utils/UNSAFE_mergeInterpolations', './UNSAFE_HiddenAccessible', './UNSAFE_Text', './PRIVATE_ThemedIcons/CloseIcon', './hooks/UNSAFE_useTabbableMode', './UNSAFE_SelectMultiple/themes/TextTagStyles.css', './classNames-bd4a4c19', './Text-d9e2e519', './HiddenAccessible-c7d035a7', './UNSAFE_SelectMultiple/themes/TextTagListStyles.css', './useFocusWithin-e6cf986b', './UNSAFE_LiveRegion', './TextFieldInput-eb38253d', './utils/UNSAFE_interpolations/text', './hooks/UNSAFE_useComponentTheme', './UNSAFE_SelectMultiple/themes/SelectMultipleMobileFieldInputStyles.css', './hooks/UNSAFE_useAccessibleContext', './utils/UNSAFE_stringUtils', './UNSAFE_TextField/themes/redwood/TextFieldInputTheme', './stringUtils-62244dce', './index-de482f6e', './utils/UNSAFE_mergeProps', './hooks/PRIVATE_useEffectEvent', './Label-1f0a7c60', './ReadonlyTextFieldInput-ab75ae72', './UNSAFE_HighlightText', './HighlightText-bfc808b6', './PRIVATE_List', './List-b3266ee0', './utils/UNSAFE_keys', './PRIVATE_LoadMoreCollection', './LoadMoreCollection-03bfa7e9', './PRIVATE_Collection', './Collection-cb886825', './hooks/UNSAFE_useViewportIntersect', './PRIVATE_VirtualizedCollection', './VirtualizedCollection-1ded33d9', './UNSAFE_FocusTrap', './FocusTrap-47f31a06', './utils/PRIVATE_tabbableUtils', './_curry1-4d9a6584', './_curry2-99f10bc7', './_arity-39916028', './_curry3-963d734c', './hooks/UNSAFE_useId', './hooks/UNSAFE_useInteractionStyle', './utils/PRIVATE_clientHints', './clientHints-dd589985', './hooks/UNSAFE_useHover', './hooks/UNSAFE_useToggle', './hooks/UNSAFE_useActive', './utils/UNSAFE_interpolations/flexitem', './flexitem-70c06ae3', './keys-78ca48b9', './_has-77ad1af6', './PRIVATE_List/themes/ListStyles.css', 'css!./ListStyles.styles.css', './vanilla-extract-recipes-createRuntimeFn.esm-84f316bc', './hooks/PRIVATE_useSelection', './utils/PRIVATE_collectionUtils', './index-abd879ef', './Common', './Common/themes', './Common/themes/redwood/theme', './Common/themes/themeContract.css', './hooks/PRIVATE_useCurrentKey', './hooks/PRIVATE_useCollectionFocusRing', './hooks/PRIVATE_useTabbableModeSet', './hooks/PRIVATE_useItemAction', './SkeletonContainer-9733c82c', './UNSAFE_Skeleton', './Skeleton-c9a7cd89', './utils/UNSAFE_interpolations/borders', './UNSAFE_Skeleton/themes/redwood/SkeletonTheme', './UNSAFE_Skeleton/themes/SkeletonStyles.css', 'css!./SkeletonStyles.styles.css', './UNSAFE_Skeleton/themes/redwood/SkeletonBaseTheme.css', 'module', './UNSAFE_Skeleton/themes/redwood/SkeletonVariants.css', './utils/UNSAFE_size', './UNSAFE_Theme', './utils-b994552d', './utils/UNSAFE_logger', './UNSAFE_Selector', './PRIVATE_ThemedIcons/CheckboxOffIcon', './PRIVATE_Icons/CheckboxOff', './hooks/UNSAFE_useTooltip', './UNSAFE_Floating', './Floating-2186bfdd', './index-2e7587a5', './utils/PRIVATE_floatingUtils', './utils/PRIVATE_refUtils', './hooks/UNSAFE_useOutsideClick', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-dynamic.esm-1a9ba437', './UNSAFE_Floating/themes/FloatingContract.css', './UNSAFE_Layer', './useThemeInterpolations-35281d48', './hooks/UNSAFE_useColorScheme', './hooks/UNSAFE_useScale', './utils/UNSAFE_interpolations/theme', './hooks/UNSAFE_useFocus', './hooks/UNSAFE_useTouch', './hooks/UNSAFE_useAnimation', './useAnimation-bc5efb9f', './hooks/UNSAFE_useThemeInterpolations', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', 'css!./TooltipContentStyles.styles.css', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./TooltipContentVariants.styles2.css', './UNSAFE_Icon/themes/IconStyle.css', 'css!./IconStyle.styles.css', './PRIVATE_ThemedIcons/CheckboxOnIcon', './PRIVATE_Icons/CheckboxOn', './PRIVATE_ThemedIcons/CheckboxMixedIcon', './PRIVATE_Icons/CheckboxMixed', './UNSAFE_Selector/themes/SelectorStyles.css', 'css!./SelectorStyles.styles.css', './UNSAFE_Radio/themes/redwood/RadioIconTheme', './UNSAFE_Radio/themes/RadioIconStyles.css', 'css!./RadioIconStyles.styles.css', './UNSAFE_Radio/themes/redwood/RadioIconBaseTheme.css', 'module', './UNSAFE_Radio/themes/redwood/RadioIconVariants.css', 'css!./RadioIconVariants.styles2.css', './utils/UNSAFE_interpolations/boxalignment', './utils/UNSAFE_interpolations/flexbox', './flexbox-46d184cc', './hooks/PRIVATE_useCollectionGestureContext', './UNSAFE_GroupedList/themes/redwood/GroupedListTheme', './UNSAFE_GroupedList/themes/GroupedListStyles.css', 'css!./GroupedListStyles.styles.css', './UNSAFE_GroupedList/themes/redwood/GroupedListBaseTheme.css', 'module', './PRIVATE_SelectCommon/themes/dropdownStyles.css', 'css!./dropdownStyles.styles.css', './hooks/UNSAFE_usePress', './PRIVATE_ThemedIcons/DropdownArrowIcon', './UNSAFE_WindowOverlay', './UNSAFE_WindowOverlay/themes/WindowOverlayStyles.css', 'css!./WindowOverlayStyles.styles.css', './UNSAFE_WindowOverlay/themes/WindowOverlayContract.css', './UNSAFE_WindowOverlay/themes/redwood/WindowOverlayTheme', './UNSAFE_WindowOverlay/themes/redwood/WindowOverlayBaseTheme.css', 'module', './UNSAFE_WindowOverlay/themes/redwood/WindowOverlayVariants.css', './PRIVATE_SelectCommon/themes/mobileDropdownStyles.css', 'css!./mobileDropdownStyles.styles.css', './UNSAFE_Divider', './Divider-e1dee0ca', './UNSAFE_Divider/themes/DividerStyles.css', 'css!./DividerStyles.styles.css', './PRIVATE_SelectCommon/themes/selectMobileDropdownStyles.css', 'css!./selectMobileDropdownStyles.styles.css', './InlineHelpSource-c14cf7c7', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceTheme', './UNSAFE_UserAssistance/themes/UserAssistanceStyles.css', 'css!./UserAssistanceStyles.styles.css', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceBaseTheme.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './UNSAFE_ComponentMessage', './ComponentMessage-927aa23c', './PRIVATE_Message', './utils/PRIVATE_timer', './PRIVATE_Message/themes/MessageStyles.css', 'css!./MessageStyles.styles.css', './MessageCloseButton-9a221db8', './MessageDetail-9011f942', './MessageFormattingUtils-604638f0', './utils/UNSAFE_getLocale', './Message.types-003fd957', './MessageStartIcon-79e8fcf1', './PRIVATE_ThemedIcons/MessageConfirmationIcon', './PRIVATE_ThemedIcons/MessageErrorIcon', './PRIVATE_ThemedIcons/MessageInfoIcon', './PRIVATE_ThemedIcons/MessageWarningIcon', './MessageSummary-1e459b81', './MessageTimestamp-1a0d1118', './MessageUtils-75fa8dae', './utils/UNSAFE_soundUtils', './UNSAFE_MessageBanner/themes/redwood/MessageBannerTheme', './UNSAFE_MessageBanner/themes/MessageBannerStyles.css', 'css!./MessageBannerStyles.styles.css', './UNSAFE_MessageBanner/themes/redwood/MessageBannerBaseTheme.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', 'css!./MessageBannerVariants.styles2.css', './MessagesManager-d1ae0a38', './PRIVATE_TransitionGroup', './hooks/UNSAFE_useMessagesContext', './UNSAFE_BaseButton', './BaseButton-ae9a6dc8', './UNSAFE_ButtonLayout', './ButtonLayout-eec8ddcf', './UNSAFE_Text/themes/TextStyles.css', 'css!./TextStyles.styles.css', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageTheme', './UNSAFE_ComponentMessage/themes/ComponentMessageStyles.css', 'css!./ComponentMessageStyles.styles.css', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageBaseTheme.css', 'module', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageVariants.css', './ComponentMessageContainer-b6c2ccd6', './hooks/UNSAFE_useInputGroupContext', './UNSAFE_Popup', './hooks/PRIVATE_useAnimationStatus', './UNSAFE_Popup/themes/PopupContract.css', './UNSAFE_Popup/themes/redwood/PopupTheme', './UNSAFE_Popup/themes/redwood/PopupBaseTheme.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', 'css!./PopupStyles.styles.css', './CompactHelpSource-1e95c783', './PRIVATE_ThemedIcons/HelpIcon', './UNSAFE_Label/themes/redwood/LabelTheme', './UNSAFE_Label/themes/LabelStyles.css', 'css!./LabelStyles.styles.css', './UNSAFE_Label/themes/redwood/LabelBaseTheme.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './UNSAFE_TextField/themes/redwood/TextFieldTheme', './UNSAFE_TextField/themes/TextFieldStyles.css', 'css!./TextFieldLoadingStyles.styles.css', 'css!./TextFieldStyles.styles.css', './UNSAFE_TextField/themes/redwood/TextFieldBaseTheme.css', 'module', './UNSAFE_TextField/themes/redwood/TextFieldVariants.css', 'css!./TextFieldVariants.styles.css', './UNSAFE_LabelValueLayout', 'css!./LabelValueLayoutStyles.styles.css', './UNSAFE_Radio/themes/redwood/RadioTheme', './UNSAFE_Radio/themes/RadioStyles.css', 'css!./RadioStyles.styles.css', './UNSAFE_Radio/themes/redwood/RadioBaseTheme.css', 'module', './UNSAFE_Radio/themes/redwood/RadioVariants.css', './UNSAFE_TextField/themes/redwood/FormLayoutTheme', './UNSAFE_TextField/themes/FormLayoutStyles.css', './UNSAFE_TextField/themes/redwood/FormLayoutBaseTheme.css', 'module', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldTheme', './UNSAFE_TextField/themes/ReadonlyTextFieldStyles.css', 'css!./ReadonlyTextFieldStyles.styles.css', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldVariants.css', 'css!./ReadonlyTextFieldVariants.styles.css', './hooks/UNSAFE_useDebounce', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldInputTheme', './UNSAFE_TextField/themes/ReadonlyTextFieldInputStyles.css', 'css!./ReadonlyTextFieldInputStyles.styles.css', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldInputVariants.css', './hooks/UNSAFE_useTextFieldInputHandlers', './UNSAFE_TextField/themes/TextFieldInputStyles.css', 'css!./TextFieldInputStyles.styles.css', './UNSAFE_TextField/themes/redwood/TextFieldInputVariants.css', './utils/UNSAFE_interpolations/colors', './utils/UNSAFE_interpolations/padding', './utils/UNSAFE_interpolations/aria', './hooks/UNSAFE_useTimer', './hooks/PRIVATE_useMessageSeverity', './hooks/UNSAFE_useFormFieldContextProps', 'css!./MobileDropdownFooterStyles.styles.css', './hooks/UNSAFE_useActionable', './UNSAFE_Chip/themes/ChipStyles.css', 'css!./ChipStyles.styles.css', 'css!./TextTagStyles.styles.css', 'css!./TextTagListStyles.styles.css', 'css!./SelectMultipleMobileFieldInputStyles.styles.css'], (function(e,s,t,o,n,l,a,i,r,d,c,u,h,p,S,m,F,y,A,T,E,b,x,w,U,_,g,f,v,I,C,N,R,k,V,L,D,M,P,B,j,K,O,W,H,z,G,q,Y,$,Z,J,Q,X,ee,se,te,oe,ne,le,ae,ie,re,de,ce,ue,he,pe,Se,me,Fe,ye,Ae,Te,Ee,be,xe,we,Ue,_e,ge,fe,ve,Ie,Ce,Ne,Re,ke,Ve,Le,De,Me,Pe,Be,je,Ke,Oe,We,He,ze,Ge,qe,Ye,$e,Ze,Je,Qe,Xe,es,ss,ts,os,ns,ls,as,is,rs,ds,cs,us,hs,ps,Ss,ms,Fs,ys,As,Ts,Es,bs,xs,ws,Us,_s,gs,fs,vs,Is,Cs,Ns,Rs,ks,Vs,Ls,Ds,Ms,Ps,Bs,js,Ks,Os,Ws,Hs,zs,Gs,qs,Ys,$s,Zs,Js,Qs,Xs,et,st,tt,ot,nt,lt,at,it,rt,dt,ct,ut,ht,pt,St,mt,Ft,yt,At,Tt,Et,bt,xt,wt,Ut,_t,gt,ft,vt,It,Ct,Nt,Rt,kt,Vt,Lt,Dt,Mt,Pt,Bt,jt,Kt,Ot,Wt,Ht,zt,Gt,qt,Yt,$t,Zt,Jt,Qt,Xt,eo,so,to,oo,no,lo,ao,io,ro,co,uo,ho,po,So,mo,Fo,yo,Ao,To,Eo,bo,xo,wo,Uo,_o,go,fo,vo,Io,Co,No,Ro,ko,Vo,Lo,Do,Mo,Po,Bo,jo,Ko,Oo,Wo,Ho,zo,Go,qo,Yo,$o,Zo,Jo,Qo,Xo,en,sn,tn,on,nn,ln,an,rn,dn,cn,un,hn,pn,Sn,mn,Fn,yn,An,Tn,En,bn,xn,wn,Un,_n,gn,fn,vn,In,Cn,Nn,Rn,kn,Vn,Ln,Dn,Mn,Pn,Bn,jn,Kn){"use strict";function On({onApply:e}){const t=S.useTranslationBundle("@oracle/oraclejet-preact");return s.jsx("div",{class:F.mobileDropdownFooterStyles.base,children:s.jsx(y.Button,{display:"label",edge:"bottom",label:t.selectMultiple_apply(),size:"sm",variant:"callToAction",onAction:e})})}const Wn="p7gqs6";function Hn({"aria-label":e,count:t=0,onKeyDown:o,onKeyUp:n,onMouseDown:l,...a}){const i=S.useTranslationBundle("@oracle/oraclejet-preact"),r=i.selectMultiple_showSelectedValues(),d=e?`${e}. `:"",c=i.selectMultiple_countPlus({COUNT:"99"}),u=t>99?`${c}`:`${t}`,h=`${d}${i.selectMultiple_valuesSelected({VALUE_COUNT:`${t}`})} ${r}`;return s.jsx("div",{class:Wn,onKeyDown:o,onKeyUp:n,onMouseDown:l,children:s.jsx(b.Chip,{"aria-label":h,...a,children:u})})}const zn=e=>s.jsx(U.Icon,{viewBox:"0 0 24 24",...e,children:s.jsx("g",{fill:"none",children:s.jsx("path",{d:"m9.414 12 7.293-7.293-1.414-1.414L6.586 12l8.707 8.707 1.414-1.414L9.414 12z",fill:"currentcolor"})})}),Gn=e=>s.jsx(U.Icon,{viewBox:"0 0 24 24",...e,children:s.jsx("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm3.498 5L12 10.498 8.502 7 7 8.502 10.498 12 7 15.498 8.502 17 12 13.502 15.498 17 17 15.498 13.502 12 17 8.502z",fill:"currentcolor",fillRule:"evenodd"})});function qn({children:e,fieldLabel:t,hasInsideLabel:o,isBackButtonShown:l,isClearButtonShown:i,isDropdownArrowShown:r,isDropdownSelectedOnlyView:d,isSelectedValuesCountShown:c,selectedValuesCount:h,onBackButtonClick:p,onClearButtonClick:m,onDropdownArrowClick:F,onSelectedValuesCountKeyDown:y,onSelectedValuesCountKeyUp:A,onSelectedValuesCountMouseDown:T,onSelectedValuesCountToggle:E,...b}){const{isDisabled:x,isLoading:w}=u.useFormFieldContext(),U=S.useTranslationBundle("@oracle/oraclejet-preact"),f=s.jsx(_.IconButton,{"aria-label":U.selectMultiple_back(),variant:"borderless",onAction:p,children:s.jsx(zn,{})}),v=s.jsx(_.IconButton,{"aria-label":U.formControl_clear(),size:o?"md":"sm",variant:"borderless",onAction:m,children:s.jsx(Gn,{})}),I=s.jsx(n.DropdownArrow,{isDisabled:x,size:o?"md":"sm",onClick:F}),C=w?void 0:c?s.jsxs(g.Flex,{align:"center",justify:"center",gap:[0,"1x"],children:[s.jsx(Hn,{"aria-label":t,count:h,isDisabled:x,isSelected:d,onKeyDown:y,onKeyUp:A,onMouseDown:T,onToggle:E}),i&&v,r&&I]}):s.jsxs(s.Fragment,{children:[i&&v,r&&I]});return s.jsx(a.TextField,{startContent:l&&f,mainContent:e,endContent:C,...b})}function Yn({children:e,removeIcon:t="never",isSelected:o=!1,onRemoveAction:l,onSelect:a,onRemoveIconClick:i,isFocused:r,value:d}){const c=S.useTranslationBundle("@oracle/oraclejet-preact"),u=f.useRef(null),h=f.useId(),p=j.classNames([B.textTagStyles.base,o&&B.textTagStyles.selected]),m=f.useCallback((()=>{l?.(d)}),[d,l]),F=f.useCallback((()=>{a?.(d)}),[d,a]),y=f.useCallback((()=>{i?.(d)}),[d,i]),A=f.useCallback((e=>{C.isBackspaceOrDelete(e)&&m()}),[m]);return f.useEffect((()=>{r&&o&&(u.current?.focus(),u.current?.scrollIntoView({block:"nearest"}))}),[r,o]),s.jsxs(s.Fragment,{children:[s.jsxs("span",{ref:u,class:p,tabIndex:-1,onClick:F,onKeyUp:A,onMouseDown:n.preventDefault,role:"option","aria-describedby":h,"aria-selected":o?"true":"false",children:[s.jsx(K.Text,{size:"md",variant:"inherit",children:e}),"always"===t&&s.jsx(P.TabbableModeContext.Provider,{value:{isTabbable:!1},children:s.jsx(_.IconButton,{size:"xs",variant:"ghost",onAction:y,children:s.jsx(M.CloseIcon,{})})})]}),s.jsx(O.HiddenAccessible,{id:h,children:c.selectMultiple_removeSelectedTagInstructionText()})]})}const $n=N.stringLiteralArray(["maxWidth"]),Zn=Array.from($n,(e=>k.dimensionInterpolations[e])),Jn=V.mergeInterpolations(Zn);const Qn=o.forwardRef((function(e,t=(()=>{})){const{"aria-label":o,data:n,hasInsideLabel:l=!1,removeIcon:a="never",onExitNavigation:i,onRemove:r}=e,d=f.useRef(null),[c,u]=f.useState([]),{direction:h}=I.useUser(),p=f.useRef(-1),S=n.at(-1)?.value,m=f.useRef({value:S,index:n.length-1});m.current={value:S,index:n.length-1};const F=f.useCallback((e=>{const s=n.at(e)?.value;null!=s&&u([s])}),[n]),y=f.useCallback((()=>{u((e=>(p.current=-1,e.length?[]:e)))}),[]),A=f.useCallback((e=>{r?.([e]),i?.(),y()}),[y,i,r]),T=f.useCallback((e=>{const s=[...c];c.includes(e)||s.push(e),r?.(s),i?.(),y()}),[c,y,i,r]),E=f.useCallback((e=>{u([e]),p.current=n.findIndex((s=>s.value===e))}),[n,u]),b=f.useCallback((e=>{if(0!==n.length){if("ltr"===h&&"ArrowLeft"===e.code||"rtl"===h&&"ArrowRight"===e.code){if(0===p.current)return;return p.current-=1,void F(p.current)}return"ltr"===h&&"ArrowRight"===e.code||"rtl"===h&&"ArrowLeft"===e.code?p.current===n.length-1?void i?.():(p.current+=1,void F(p.current)):"Home"===e.code?(p.current=0,void F(p.current)):"End"===e.code?(p.current=n.length-1,void F(p.current)):C.isSelectAll(e)?(u(n.map((e=>e.value))),void e.preventDefault()):void 0}}),[n,h,i,F,u]),x=f.useCallback((()=>{u((e=>e.length||void 0===m.current.value?e:(p.current=m.current.index,[m.current.value])))}),[]),w=f.useCallback((()=>{y()}),[y]),{focusProps:U}=H.useFocusWithin({onBlurWithin:w});f.useImperativeHandle(t,(()=>({blur:w,focus:x})),[w,x]),f.useEffect((()=>{d.current?.scrollTo({left:d.current.scrollWidth*("ltr"===h?1:-1)})}),[n,h]);const _=Jn(e),g=j.classNames([W.textTagListStyles.textTagListBase,l&&W.textTagListStyles.textTagListInsideLabel]);return s.jsx("div",{class:g,ref:d,tabIndex:-1,onKeyDown:b,role:"listbox","aria-label":o,"aria-multiselectable":"true",style:_,...U,children:n.map(((e,t)=>s.jsx(Yn,{isFocused:p.current===t,isSelected:c.includes(e.value),onRemoveAction:T,onSelect:E,onRemoveIconClick:A,removeIcon:a,value:e.value,children:e.label},e.value)))})}));function Xn({displayValue:e,isTextTagListShown:t,isUserFiltering:o,liveRegionText:n,onExitNavigation:l,onRemove:a,removeIcon:i,selectedValuesDescriptionId:r,textTagListData:d,textTagListRef:c,userInput:u,virtualKeyboard:h,...p}){const m=S.useTranslationBundle("@oracle/oraclejet-preact");return s.jsxs(s.Fragment,{children:[t&&s.jsx(Qn,{"aria-label":m.selectMultiple_selectedValues(),data:d,hasInsideLabel:p.hasInsideLabel,maxWidth:"50%",onExitNavigation:l,onRemove:a,ref:c,removeIcon:i}),s.jsx(g.Flex,{flex:1,children:s.jsx(G.TextFieldInput,{"aria-autocomplete":"list",autoComplete:"off",hasPrefix:t,role:"combobox",spellcheck:!1,type:"auto"===h?"search":h,value:o||t?u:e,...p})}),t&&s.jsx(O.HiddenAccessible,{id:r,isHidden:!0,children:e}),s.jsx(z.LiveRegion,{children:n})]})}const el=[...Object.values(q.textInterpolations)],sl=V.mergeInterpolations(el),tl=o.forwardRef((({"aria-controls":e,"aria-describedby":t,"aria-expanded":o,"aria-invalid":n,"aria-label":l,"aria-labelledby":a,displayValue:i,hasEmptyLabel:r,hasInsideLabel:d=!1,isRequired:c,onBlur:h,onFocus:p,placeholder:S,textAlign:m,variant:F="default"},y)=>{const{isDisabled:A,isFocused:T,hasValue:E=!1}=u.useFormFieldContext(),{isTabbable:b,tabbableModeProps:x}=P.useTabbableMode(),w=G.isInputPlaceholderShown(d,E,T)?S:void 0,{UNSAFE_ariaLabelledBy:U}=Z.useAccessibleContext(),_=r?X.merge([a,U]):a,{class:g}=sl({textAlign:m}),{classes:f}=Y.useComponentTheme(Q.TextFieldInputRedwoodTheme,{type:"notPassword",styleVariant:F,textarea:"notTextArea",input:"isInput",prefix:"noPrefix",suffix:"noSuffix",startContent:"noStartContent",endContent:"hasEndContent",insideLabel:d?"hasInsideLabel":"noInsideLabel",value:E?"hasValue":"noValue",focused:T?"isFocused":"notFocused",disabled:A?"isDisabled":"notDisabled"}),v=j.classNames([$.selectMultipleMobileFieldInputStyles.base,g,f]);return s.jsx("div",{"aria-autocomplete":"list","aria-controls":e,"aria-describedby":t,"aria-expanded":o,"aria-invalid":n,"aria-label":l,"aria-labelledby":_,"aria-required":c?"true":void 0,class:v,onBlur:h,onFocus:p,ref:y,role:"combobox",...b&&x,children:s.jsx("div",{class:$.selectMultipleMobileFieldInputStyles.content,children:s.jsx(K.Text,{variant:i?"inherit":"secondary",children:i||w})})})}));function ol(e,s){const t=S.useTranslationBundle("@oracle/oraclejet-preact").plural_separator();return{displayValue:f.useMemo((()=>{if(void 0===s)return"";const o=function(e,s){const t=s?[...s?.values()]:[],o=s=>n.renderItemText(s,e),l=t.map(o);return new Set(l)}(e,s),l=function(e,s){return Array.from(e.values()).join(s)}(o,t);return l}),[e,t,s]),textTags:f.useMemo((()=>void 0===s?[]:function(e,s=[]){return s.map((s=>({label:n.renderItemText(s,e)??"",value:s.key})))}(e,s)),[e,s])}}function nl({isDropdownSelectedOnlyView:e,valueItems:s}){const t=f.useRef(s),o=f.useRef(e);t.current=o.current!==e?s:t.current,o.current=e;return{data:f.useMemo((()=>e&&t.current&&0!==t.current.length?{offset:0,totalSize:t.current.length??0,sizePrecision:"exact",data:t.current.map((e=>({data:e.data,metadata:e.metadata??{key:e.key}})))}:void 0),[e]),onLoadRange:void 0}}const ll=(e,s,t)=>s.data.forEach((s=>{t.has(s.metadata.key)&&e.set(s.metadata.key,{data:s.data,key:s.metadata.key,metadata:s.metadata})})),al=e=>new Set(e.map((e=>e.key)));const il=o.forwardRef((({"aria-describedby":e,assistiveText:o,data:l,helpSourceLink:m,helpSourceText:F,isDisabled:y,isLoading:A,isReadonly:T,isRequired:E,isRequiredShown:b,itemRenderer:x,itemText:w,label:U,labelEdge:_,labelStartWidth:g,messages:v,onCommit:C,onFilter:N,onLoadRange:R,placeholder:k,textAlign:V,userAssistanceDensity:L,valueItems:D,variant:M="default",virtualKeyboard:P},B)=>{const{isDisabled:j,isReadonly:K,labelEdge:O,labelStartWidth:W,textAlign:H,userAssistanceDensity:z}=c.useFormContext(),G=y??j,q=T??K,Y=_??O,$=g??W,Z=V??H,J=L??z,{enabledElementRef:Q,focusProps:le,isFocused:ae,readonlyElementRef:ie}=d.useFocusableTextField({isDisabled:G,isReadonly:q,ref:B}),{ariaProps:re,collectionProps:de,data:ce,dropdownArrowEventHandlers:ue,dropdownEventHandlers:he,dropdownRef:pe,hasSelectedValuesCount:Se,inputEventHandlers:me,isDropdownAbove:Fe,isDropdownOpen:ye,isDropdownSelectedOnlyView:Ae,isFocused:Te,isUserFiltering:Ee,mainFieldRef:be,mouseProps:xe,searchText:we,selectedValuesCountProps:Ue,selectedValuesDescriptionId:_e,setDropdownOpen:ge,setUserInput:fe,stopFiltering:ve,textTagListProps:Ie,userInput:Ce}=function({ariaDescribedBy:e,data:s,inputRef:t,isDisabled:o,isFocused:l,isReadonly:a,onCommit:i,onFilter:r,onLoadRange:d,valueItems:c}){const[u,h]=f.useState(!1),p=c?.length,S=void 0!==p&&p>0||u,m=nl({isDropdownSelectedOnlyView:u,valueItems:c}),F=u?m.data:s,y=u?m.onLoadRange:d,A=f.useCallback((e=>{X.isEmptyOrUndefined(e.searchText)||h(!1),r?.(e)}),[r]),{currentRow:T,dropdownRef:E,handleDropdownArrowClick:b,handleDropdownAutoDismiss:x,handleDropdownPosition:w,handleInput:U,handleMainFieldKeyDown:_,handleMainFieldKeyUp:g,handleUpDownArrowKeys:v,isDropdownAbove:C,isDropdownOpen:N,isFocused:R,isUserFiltering:k,mainFieldRef:V,onCurrentKeyChange:L,onMouseDown:D,searchText:M,selectedKeys:P,setCurrentRow:B,setDropdownOpen:j,setSelectedKeys:K,setUserInput:O,stopFiltering:W,userInput:H}=n.useSelectCommon({data:F,inputRef:t,isFocused:l,onFilter:A}),z=f.useRef(null),{direction:G}=I.useUser(),q=f.useId(),Y=X.merge([R&&q,e]),$=f.useCallback((()=>{E.current?.parentElement?.removeChild(E.current)}),[E]),Z=f.useCallback((e=>k&&N&&!X.isEmptyOrUndefined(H)&&(F?.data.length??0)>0&&void 0!==e.rowKey),[F,N,k,H]),J=f.useCallback((e=>{if(P?.has(e))return;const s=void 0===P?new Set([e]):new Set([...P.values(),e]);i({previousValue:P,value:s}),K(s)}),[i,P,K]),Q=f.useCallback((e=>{if(N&&"keydown"===e?.type){const s=e;s.code===n.KEYS.TAB&&(s.shiftKey||!S?t.current?.focus():oe.current?.focus(),$())}}),[S,t,N,$]),ee=f.useCallback((e=>{if(!n.isControlOrFunctionKey(e))switch(e.code){case n.KEYS.TAB:N&&(e.shiftKey||!S&&!e.shiftKey)&&($(),j(!1)),S&&!e.shiftKey&&e.stopPropagation();break;case n.KEYS.LEFT:"ltr"===G&&t.current instanceof HTMLInputElement&&0===t.current?.selectionStart&&0===t.current?.selectionEnd&&z.current?.focus();break;case n.KEYS.RIGHT:"rtl"===G&&t.current instanceof HTMLInputElement&&0===t.current?.selectionStart&&0===t.current?.selectionEnd&&z.current?.focus();break;case n.KEYS.ENTER:case n.KEYS.NUMPAD_ENTER:Z(T)&&(j(!1),W(),J(T.rowKey))}}),[T,G,S,t,N,$,J,j,Z,W]);f.useEffect((()=>{const e=c?.reduce(((e,s)=>(e.add(s.key),e)),new Set);K(e)}),[K,c]);const oe=f.useRef(null);f.useEffect((()=>{oe.current=S&&V.current?.querySelector?V.current.querySelector('[role="switch"]'):null}),[S,o,a,V]);const ne=f.useCallback((e=>{switch(e.code){case n.KEYS.TAB:N&&!e.shiftKey&&($(),j(!1)),e.shiftKey&&e.stopPropagation();break;case n.KEYS.UP:case n.KEYS.DOWN:e.preventDefault();break;case n.KEYS.ESC:N&&(j(!1),e.preventDefault(),e.stopPropagation());break;case n.KEYS.ENTER:e.stopPropagation()}}),[N,$,j]),le=f.useCallback((e=>{switch(e.code){case n.KEYS.UP:case n.KEYS.DOWN:v(e)}}),[v]),ae=f.useCallback((e=>{e.preventDefault(),t.current?.focus()}),[t]),ie=f.useCallback((e=>{N||j(!0);const s=e.value??!1;s!==u&&(h(s),s&&W())}),[N,u,j,W]);f.useEffect((()=>{!N&&u&&h(!1)}),[N,u]);const re=f.useCallback((e=>{const s=new Set(e.value.keys?.values());K(s),O(""),i?.({value:s,previousValue:P})}),[i,P,K,O]),de=f.useCallback((()=>{setTimeout((()=>t.current?.focus()),0)}),[t]),ce=f.useCallback((e=>{const s=P,t=new Set(P);e.forEach((e=>t.delete(e))),i?.({previousValue:s,value:t})}),[i,P]),ue=f.useMemo((()=>se.mergeProps({onAutoDismiss:x,onPosition:w},{onAutoDismiss:Q})),[x,w,Q]),he=f.useMemo((()=>se.mergeProps({onInput:U,onKeyDown:_,onKeyUp:g},{onKeyDown:ee})),[_,U,g,ee]),pe=f.useMemo((()=>({textTagListRef:z,onExitNavigation:de,onRemove:ce})),[de,ce]);f.useEffect((()=>{N&&B({rowKey:void 0})}),[N,B]);const Se=te.useEffectEvent((e=>{const s=e?.data[0]?.metadata.key;N&&k&&null!=s&&0===F?.offset&&B({rowKey:X.isEmptyOrUndefined(M)?void 0:s})}));return f.useEffect((()=>{Se(F)}),[Se,F]),{ariaProps:{ariaDescribedBy:Y},collectionProps:{currentKey:T.rowKey,data:F,onCurrentKeyChange:L,onSelectionChange:re,onLoadRange:y,selectedKeys:P},data:F,dropdownArrowEventHandlers:{onClick:b},dropdownEventHandlers:ue,dropdownRef:E,hasSelectedValuesCount:S,inputEventHandlers:he,inputRef:t,isDropdownAbove:C,isDropdownOpen:N,isDropdownSelectedOnlyView:u,isFocused:R,isUserFiltering:k,mainFieldRef:V,mouseProps:o||a?{}:{onMouseDown:D},searchText:M,selectedValuesCountProps:{onKeyDown:ne,onKeyUp:le,onMouseDown:ae,onToggle:ie},selectedValuesDescriptionId:q,setDropdownOpen:j,setUserInput:O,stopFiltering:W,textTagListProps:pe,userInput:H}}({ariaDescribedBy:e,data:l,inputRef:Q,isDisabled:G,isFocused:ae,isReadonly:q,onCommit:C,onFilter:N,onLoadRange:R,valueItems:D}),{collectionProps:Ne,footerProps:Re,selectMultipleFieldInputProps:ke,selectMultipleFieldProps:Ve}=function({data:e,inputRef:s,isDropdownOpen:t,isDropdownSelectedOnlyView:o,itemText:n,textTagListRef:l,userInput:a,valueItems:i=[],onCommit:r,onLoadRange:d,setDropdownOpen:c,setUserInput:u,stopFiltering:h}){const[p,S]=f.useState({rowKey:void 0}),[m,F]=f.useState(al(i)),y=f.useRef(new Map),A=f.useMemo((()=>{const e=[];return m.forEach((s=>{const t=i.find((e=>e.key===s));t?e.push(t):y.current.has(s)&&e.push(y.current.get(s))})),e}),[m,i]),{textTags:T,displayValue:E}=ol(n,A),b=f.useRef(null),{data:x,onLoadRange:w}=nl({isDropdownSelectedOnlyView:o,valueItems:A}),U=f.useCallback((e=>{S({rowKey:e.value})}),[S]),_=f.useCallback((s=>{const t=new Set(s.value.keys?.values());F(t),u(""),e&&ll(y.current,e,t)}),[e,F,u]),g=f.useCallback((()=>{F(new Set(i.map((e=>e.key)))),y.current.clear(),c(!1),h(),s.current?.focus()}),[s,c,h,i]),v=f.useCallback((()=>{r({previousValue:al(i),value:m}),g()}),[m,i,g,r]),I=f.useCallback((()=>{g()}),[g]),C=f.useCallback((()=>{F(new Set),h()}),[h]),N=f.useCallback((e=>{const s=new Set(m);e.forEach((e=>s.delete(e))),F(s)}),[m]),R=f.useCallback((()=>{setTimeout((()=>b.current?.focus()),0)}),[]),k=f.useRef(t);return f.useEffect((()=>{if(t){if(k.current)return;return setTimeout((()=>b.current?.focus()),0),void(k.current=!0)}F((e=>{const s=al(i);return ee.equals(e,s)?e:s})),k.current=!1}),[t,i]),{collectionProps:{currentKey:p.rowKey,data:o?x:e,selectedKeys:m,onCurrentKeyChange:U,onLoadRange:o?w:d,onSelectionChange:_},footerProps:{onApply:v},selectMultipleFieldInputProps:{displayValue:E,hasEmptyLabel:!1,hasInsideLabel:!0,inputRef:b,isTextTagListShown:T.length>0,isUserFiltering:!0,removeIcon:"always",userInput:a,textTagListData:T,textTagListRef:l,onExitNavigation:R,onRemove:N},selectMultipleFieldProps:{hasInsideLabel:!0,isBackButtonShown:!0,isClearButtonShown:!X.isEmptyOrUndefined(a)||0!==T.length,isDropdownArrowShown:!1,isDropdownSelectedOnlyView:o,isSelectedValuesCountShown:m.size>0||o,selectedValuesCount:m.size,styleVariant:"embedded",onBackButtonClick:I,onClearButtonClick:C}}}({data:ce,inputRef:Q,isDropdownOpen:ye,isDropdownSelectedOnlyView:Ae,itemText:w,textTagListRef:Ie.textTagListRef,userInput:Ce,valueItems:D,onCommit:C,onLoadRange:R,setDropdownOpen:ge,setUserInput:fe,stopFiltering:ve}),Le=h.useLoadingIndicatorTimer(A??!1),{baseId:De,formFieldContext:Me,inputProps:Pe,labelProps:Be,textFieldProps:je,userAssistanceProps:Ke}=p.useTextField({ariaDescribedBy:re.ariaDescribedBy,helpSourceLink:m,helpSourceText:F,isDisabled:G,isFocused:Te,isLoading:Le,isReadonly:q,isRequiredShown:b,labelEdge:Y,messages:v,styleVariant:M,userAssistanceDensity:J,value:void 0!==D&&D.length>0||void 0}),{formFieldContext:Oe,inputProps:We,labelProps:He,textFieldProps:ze,userAssistanceProps:Ge}=p.useTextField({ariaDescribedBy:re.ariaDescribedBy,helpSourceLink:m,helpSourceText:F,isDisabled:!1,isFocused:Te,isLoading:Le,isReadonly:!1,isRequiredShown:!1,labelEdge:"inside",styleVariant:"default",value:Ve.selectedValuesCount>0||void 0});Me.hasValue=A||Me.hasValue,Oe.hasValue=A||Oe.hasValue;const qe=`${De}-dropdown`,{displayValue:Ye,textTags:$e}=ol(w,D),Ze=s.jsx(oe.Label,{...Be,...n.isPhone()?{forId:void 0}:{},children:U}),Je={label:"none"!==Y?Ze:void 0,labelEdge:"none"!==Y?Y:void 0,labelStartWidth:"none"!==Y?$:void 0},Qe={label:s.jsx(oe.Label,{...He,children:U}),labelEdge:"inside"},Xe="none"===Y?U:void 0,es="efficient"===J||"reflow"===J?G||q?"efficient"!==J?void 0:s.jsx(i.InlineUserAssistance,{userAssistanceDensity:J,...Ke}):s.jsx(i.InlineUserAssistance,{assistiveText:o,fieldLabel:U,helpSourceLink:m,helpSourceText:F,messages:v,isRequiredShown:b,userAssistanceDensity:J,...Ke}):void 0,ss="compact"===J?s.jsx(i.CompactUserAssistance,{anchorRef:be,messages:v,assistiveText:o,...Ke}):void 0,ts=S.useTranslationBundle("@oracle/oraclejet-preact");if(q)return s.jsx(u.FormFieldContext.Provider,{value:Me,children:s.jsx(a.ReadonlyTextField,{role:"presentation",compactUserAssistance:ss,inlineUserAssistance:es,onBlur:le.onfocusout,onFocus:le.onfocusin,ref:be,...Je,children:s.jsx(ne.ReadonlyTextFieldInput,{"aria-describedby":Pe["aria-describedby"],"aria-label":Xe,"aria-labelledby":Be.id,as:"div",elementRef:ie,hasEmptyLabel:""===U&&"none"===Y,hasInsideLabel:void 0!==U&&"inside"===Y,textAlign:Z,value:Ye})})});const os=null!=ce&&!n.isBeforeDataFetch(ce),ns="inside"===Y,ls=ye&&os?0===ce?.totalSize?ts.select_noMatchesFound():1===ce?.totalSize?ts.select_oneMatchFound():"exact"===ce?.sizePrecision?ts.select_sizeMatchesFound({TOTAL_SIZE:`${ce?.totalSize}`}):ts.select_sizeOrMoreMatchesFound({TOTAL_SIZE:`${ce?.totalSize}`}):"",as=!ye||Fe||G||q||!o&&!m||"efficient"!==J&&"reflow"!==J?void 0:s.jsx(n.DropdownUserAssistance,{assistiveText:o,fieldLabel:U,helpSourceLink:m,helpSourceText:F,userAssistanceDensity:J,...n.isPhone()?Ge:{}}),is=os&&0===ce?.totalSize,rs=is?s.jsx(n.EmptyResults,{}):s.jsx(n.DefaultList,{...n.isPhone()?Ne:de,"aria-label":U??"",currentItemVariant:"highlight",itemRenderer:x,itemText:w,searchText:Ae?void 0:Ee?we:void 0,selectionMode:"multiple"}),ds=ye&&void 0!==ce&&(null===ce||ce.totalSize>0||n.isBeforeDataFetch(ce)||is),cs=""===U&&"none"===Y,us=s.jsx(Xn,{"aria-controls":qe,"aria-expanded":ye,"aria-label":Xe,displayValue:Ye,hasEmptyLabel:cs,hasInsideLabel:ns,inputRef:Q,isRequired:E,isTextTagListShown:Te&&0!==$e.length,isUserFiltering:Ee,liveRegionText:ls,placeholder:k,removeIcon:n.isTablet()?"always":"never",selectedValuesDescriptionId:_e,textAlign:Z,textTagListData:$e,userInput:Ce,virtualKeyboard:n.isTablet()?P:void 0,...me,...Pe,...Ie}),hs=s.jsx(tl,{"aria-controls":qe,"aria-describedby":Pe["aria-describedby"],"aria-expanded":ye,"aria-invalid":Pe["aria-invalid"],"aria-label":Xe,"aria-labelledby":Be.id,displayValue:Ye,hasEmptyLabel:cs,hasInsideLabel:ns,isRequired:E,onBlur:Pe.onBlur,onFocus:Pe.onFocus,placeholder:k,ref:Q,textAlign:Z,variant:Pe.variant});return s.jsxs(t.Fragment,{children:[s.jsx(u.FormFieldContext.Provider,{value:Me,children:s.jsx(qn,{compactUserAssistance:ss,fieldLabel:U,hasInsideLabel:ns,inlineUserAssistance:es,isDropdownArrowShown:!0,isDropdownSelectedOnlyView:Ae,isSelectedValuesCountShown:Se,mainFieldRef:be,onBlur:le.onfocusout,onFocus:le.onfocusin,onDropdownArrowClick:ue.onClick,onSelectedValuesCountKeyDown:Ue.onKeyDown,onSelectedValuesCountKeyUp:Ue.onKeyUp,onSelectedValuesCountMouseDown:Ue.onMouseDown,onSelectedValuesCountToggle:Ue.onToggle,selectedValuesCount:D?.length,...Je,...xe,...je,children:n.isPhone()&&!G?hs:us})}),n.isPhone()?s.jsx(n.SelectMobileDropdown,{header:s.jsxs(u.FormFieldContext.Provider,{value:Oe,children:[s.jsx(r.View,{children:s.jsx(qn,{fieldLabel:U,onBlur:le.onfocusout,onFocus:le.onfocusin,onDropdownArrowClick:ue.onClick,onSelectedValuesCountKeyDown:Ue.onKeyDown,onSelectedValuesCountKeyUp:Ue.onKeyUp,onSelectedValuesCountMouseDown:Ue.onMouseDown,onSelectedValuesCountToggle:Ue.onToggle,...Qe,...ze,...Ve,children:s.jsx(Xn,{"aria-controls":qe,"aria-expanded":ye,"aria-label":Xe,isRequired:E,liveRegionText:ls,placeholder:k,selectedValuesDescriptionId:_e,textAlign:Z,virtualKeyboard:P,...me,...We,...ke})})}),as]}),footer:s.jsx(On,{...Re}),id:qe,isOpen:ds,children:s.jsx(n.DropdownList,{hasBottomGap:!0,isLoading:null===ce,children:rs})}):s.jsxs(n.Dropdown,{dropdownRef:pe,id:qe,isOpen:ds,anchorRef:be,...he,children:[s.jsx(n.DropdownList,{hasBottomGap:void 0===as,isLoading:null===ce,children:rs}),as]})]})}));e.SelectMultiple=il,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_SelectMultiple.js.map
