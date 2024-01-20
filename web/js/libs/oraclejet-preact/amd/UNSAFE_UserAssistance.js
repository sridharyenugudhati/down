define(['exports', 'preact/jsx-runtime', './hooks/UNSAFE_useComponentTheme', './InlineHelpSource-c14cf7c7', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceTheme', './hooks/UNSAFE_useTranslationBundle', './UNSAFE_ComponentMessage', './hooks/UNSAFE_useFormContext', './hooks/UNSAFE_useFormFieldContext', './utils/UNSAFE_classNames', './hooks/UNSAFE_useInputGroupContext', './classNames-bd4a4c19', './ComponentMessageContainer-b6c2ccd6', './UNSAFE_Popup', './UNSAFE_Divider', './CompactHelpSource-1e95c783', './UNSAFE_UserAssistance/themes/UserAssistanceStyles.css', './Divider-e1dee0ca', './hooks/UNSAFE_useTooltip', 'preact/hooks', './hooks/UNSAFE_usePress', './hooks/UNSAFE_useToggle', './PRIVATE_ThemedIcons/HelpIcon', './UNSAFE_Popup/themes/redwood/PopupTheme', './utils/UNSAFE_logger', './_curry1-4d9a6584', './_curry2-99f10bc7', './hooks/UNSAFE_useTabbableMode', 'preact', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceBaseTheme.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', 'css!./UserAssistanceStyles.styles.css', './vanilla-extract-recipes-createRuntimeFn.esm-84f316bc', './index-abd879ef', './Common', './Common/themes', './Common/themes/redwood/theme', './Common/themes/themeContract.css', 'preact/compat', './ComponentMessage-927aa23c', './PRIVATE_Message', './UNSAFE_Flex', './Flex-cc4e4675', './utils/UNSAFE_interpolations/dimensions', './utils/UNSAFE_arrayUtils', './utils/UNSAFE_size', './UNSAFE_Theme', './utils-b994552d', './utils/UNSAFE_mergeInterpolations', './_curry3-963d734c', './_has-77ad1af6', 'module', './utils/UNSAFE_interpolations/boxalignment', './keys-78ca48b9', './utils/UNSAFE_interpolations/flexbox', './flexbox-46d184cc', './utils/UNSAFE_interpolations/flexitem', './flexitem-70c06ae3', './utils/PRIVATE_timer', './PRIVATE_Message/themes/MessageStyles.css', 'css!./MessageStyles.styles.css', './MessageCloseButton-9a221db8', './UNSAFE_IconButton', './IconButton-e8c0693d', './UNSAFE_BaseButton', './BaseButton-ae9a6dc8', './hooks/UNSAFE_useHover', './hooks/UNSAFE_useActive', './utils/PRIVATE_clientHints', './clientHints-dd589985', './utils/UNSAFE_mergeProps', './UNSAFE_ButtonLayout', './ButtonLayout-eec8ddcf', './UNSAFE_Text', './Text-d9e2e519', './UNSAFE_Text/themes/TextStyles.css', 'css!./TextStyles.styles.css', './PRIVATE_ThemedIcons/CloseIcon', './UNSAFE_Icon', './Icon-3dc6de20', './UNSAFE_Icon/themes/IconStyle.css', 'css!./IconStyle.styles.css', './MessageDetail-9011f942', './MessageFormattingUtils-604638f0', './utils/UNSAFE_getLocale', './utils/UNSAFE_stringUtils', './stringUtils-62244dce', './Message.types-003fd957', './MessageStartIcon-79e8fcf1', './PRIVATE_ThemedIcons/MessageConfirmationIcon', './PRIVATE_ThemedIcons/MessageErrorIcon', './PRIVATE_ThemedIcons/MessageInfoIcon', './PRIVATE_ThemedIcons/MessageWarningIcon', './MessageSummary-1e459b81', './MessageTimestamp-1a0d1118', './MessageUtils-75fa8dae', './utils/UNSAFE_soundUtils', './UNSAFE_MessageBanner/themes/redwood/MessageBannerTheme', './UNSAFE_MessageBanner/themes/MessageBannerStyles.css', 'css!./MessageBannerStyles.styles.css', './UNSAFE_MessageBanner/themes/redwood/MessageBannerBaseTheme.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', 'css!./MessageBannerVariants.styles2.css', './MessagesManager-d1ae0a38', './PRIVATE_TransitionGroup', './hooks/UNSAFE_useAnimation', './useAnimation-bc5efb9f', './hooks/UNSAFE_useMessagesContext', './UNSAFE_HiddenAccessible', './HiddenAccessible-c7d035a7', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageTheme', './UNSAFE_ComponentMessage/themes/ComponentMessageStyles.css', 'css!./ComponentMessageStyles.styles.css', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageBaseTheme.css', 'module', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageVariants.css', './UNSAFE_Floating', './Floating-2186bfdd', './index-2e7587a5', './hooks/UNSAFE_useUser', './utils/PRIVATE_floatingUtils', './utils/PRIVATE_refUtils', './hooks/UNSAFE_useOutsideClick', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-dynamic.esm-1a9ba437', './UNSAFE_Floating/themes/FloatingContract.css', './utils/PRIVATE_tabbableUtils', './_arity-39916028', './UNSAFE_FocusTrap', './FocusTrap-47f31a06', './UNSAFE_Layer', './useThemeInterpolations-35281d48', './hooks/UNSAFE_useColorScheme', './hooks/UNSAFE_useScale', './utils/UNSAFE_interpolations/theme', './hooks/PRIVATE_useAnimationStatus', './UNSAFE_Popup/themes/PopupContract.css', './hooks/UNSAFE_useFocusWithin', './useFocusWithin-e6cf986b', './UNSAFE_Label/themes/redwood/LabelTheme', './UNSAFE_Label/themes/LabelStyles.css', 'css!./LabelStyles.styles.css', './UNSAFE_Label/themes/redwood/LabelBaseTheme.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './UNSAFE_Divider/themes/DividerStyles.css', 'css!./DividerStyles.styles.css', './hooks/UNSAFE_useId', './hooks/UNSAFE_useFocus', './hooks/UNSAFE_useTouch', './hooks/UNSAFE_useThemeInterpolations', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', 'css!./TooltipContentStyles.styles.css', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./TooltipContentVariants.styles2.css', './UNSAFE_Popup/themes/redwood/PopupBaseTheme.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', 'css!./PopupStyles.styles.css'], (function(e,s,o,t,n,a,i,l,c,r,d,u,m,h,p,A,S,F,U,_,E,T,g,N,x,y,C,I,b,f,M,B,P,k,w,j,R,v,L,V,H,D,q,O,W,G,z,$,J,K,Q,X,Y,Z,ee,se,oe,te,ne,ae,ie,le,ce,re,de,ue,me,he,pe,Ae,Se,Fe,Ue,_e,Ee,Te,ge,Ne,xe,ye,Ce,Ie,be,fe,Me,Be,Pe,ke,we,je,Re,ve,Le,Ve,He,De,qe,Oe,We,Ge,ze,$e,Je,Ke,Qe,Xe,Ye,Ze,es,ss,os,ts,ns,as,is,ls,cs,rs,ds,us,ms,hs,ps,As,Ss,Fs,Us,_s,Es,Ts,gs,Ns,xs,ys,Cs,Is,bs,fs,Ms,Bs,Ps,ks,ws,js,Rs,vs,Ls,Vs,Hs,Ds,qs,Os,Ws,Gs,zs,$s,Js,Ks,Qs,Xs,Ys,Zs,eo,so,oo,to,no,ao,io){"use strict";function lo({assistiveText:e,sourceLink:a,sourceText:i}){const{styles:{helpTextStyles:l}}=o.useComponentTheme(n.UserAssistanceRedwoodTheme);return s.jsxs("div",{children:[e&&a?s.jsx("span",{class:l,children:e}):e,a&&s.jsx(t.InlineHelpSource,{source:a,children:i})]})}function co({align:e="end",hasHelp:t=!1,hasMessages:i=!1}){const{classes:l}=o.useComponentTheme(n.UserAssistanceRedwoodTheme,{align:e,visible:t||i?"hide":"show"}),c=a.useTranslationBundle("@oracle/oraclejet-preact").userAssistance_required();return s.jsx("div",{class:l,children:c})}function ro({variant:e="reflow",children:t,id:a}){const{classes:i,styles:{inlineContainerBaseStyles:l}}=o.useComponentTheme(n.UserAssistanceRedwoodTheme,{container:e});if(null!==d.useInputGroupContext())return null;return s.jsx("div",{class:u.classNames([i,l]),id:a,children:t})}e.InlineHelpSource=t.InlineHelpSource,e.CompactLabelAssistance=({helpIconId:e,helpSourceLink:o,helpSourceText:t,isRequiredShown:n,labelEdge:i})=>{const l=a.useTranslationBundle("@oracle/oraclejet-preact").userAssistance_required(),{tooltipContent:c,tooltipProps:r}=U.useTooltip({text:l,offset:{mainAxis:8}}),d=u.classNames([S.requiredIconBase,"start"===i&&S.requiredIconLabelEdgeStart]),m=n&&s.jsxs("span",{children:[s.jsx("span",{class:d,...r}),c]}),h=(o||t)&&s.jsx(A.CompactHelpSource,{id:e,labelEdge:i,source:o,children:t});return s.jsxs(s.Fragment,{children:["start"!==i&&m,h,"start"===i&&m]})},e.CompactUserAssistance=function({anchorRef:e,assistiveText:t,fieldLabel:a,id:i,messages:l=[]}){const{isInputFocused:r,isReadonly:d}=c.useFormFieldContext(),{isFocused:u,popupProps:p}=A.usePopupFocusWithin(),U=!0===r||!0===u,{baseTheme:_}=o.useComponentTheme(n.UserAssistanceRedwoodTheme);return!0!==d&&(l.length>0||t)?s.jsx(h.Popup,{...p,placement:"end-top-corner",isOpen:U,anchorRef:e,flipOptions:{mainAxis:!0,crossAxis:!1},tail:"simple",children:s.jsxs("div",{id:i,class:_,children:[l.length>0&&s.jsx(m.ComponentMessageContainer,{fieldLabel:a,messages:l}),l.length>0&&t&&s.jsx("span",{class:S.dividerStyle,children:s.jsx(F.Divider,{})}),t&&s.jsx("span",{class:S.assistiveStyles,children:t})]})}):null},e.IconUserAssistance=({assistiveText:e,helpSourceLink:t,helpSourceText:n,isTabbable:i=!0,id:l})=>{const{bool:c,setFalse:r,setTrue:d}=T.useToggle(!1),m=a.useTranslationBundle("@oracle/oraclejet-preact").userAssistance_learnMore(),p=t&&(n||m),{baseTheme:A}=o.useComponentTheme(N.PopupRedwoodTheme),{pressProps:F}=E.usePress((e=>{e.preventDefault(),d()})),U=_.useRef(null),x=u.classNames([A,S.iconUserAssistancePopupFocus]);return t||e?s.jsxs(s.Fragment,{children:[s.jsx("span",{...F,ref:U,tabIndex:i?0:-1,class:S.iconUserAssistanceIcon,id:`${l}-help-icon`,children:s.jsx(g.HelpIcon,{})}),s.jsx(h.Popup,{placement:"top",isOpen:c,anchorRef:U,onClose:r,onClickOutside:r,shiftOptions:{mainAxis:!0,crossAxis:!1},initialFocus:"firstFocusable",children:s.jsx("div",{id:l,tabIndex:0,class:x,children:s.jsx(lo,{assistiveText:e,sourceLink:t,sourceText:p})})})]}):null},e.InlineHelp=lo,e.InlineRequired=co,e.InlineUserAssistance=function({assistiveText:e,fieldLabel:o,helpSourceLink:t,helpSourceText:n,id:a,isRequiredShown:i,requiredAlignment:r,messages:d=[],userAssistanceDensity:u}){const{isReadonly:h}=l.useFormContext(),p="efficient"===u&&!1===h,{isFocused:A}=c.useFormFieldContext(),S=d.length>0?s.jsx(m.ComponentMessageContainer,{fieldLabel:o,messages:d}):(e||t)&&A?s.jsx(lo,{assistiveText:e,sourceLink:t,sourceText:n}):i?s.jsx(co,{align:r}):null;return S||p?s.jsx(ro,{id:a,variant:u,children:S}):null},e.InlineUserAssistanceContainer=ro,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_UserAssistance.js.map