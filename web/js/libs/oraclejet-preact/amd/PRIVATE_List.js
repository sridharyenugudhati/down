define(['exports', './List-b3266ee0', 'preact/jsx-runtime', 'preact/hooks', './utils/UNSAFE_classNames', './utils/UNSAFE_keys', './hooks/UNSAFE_useId', './hooks/UNSAFE_useViewportIntersect', './hooks/UNSAFE_useTabbableMode', './hooks/UNSAFE_useComponentTheme', './hooks/UNSAFE_useInteractionStyle', './utils/UNSAFE_mergeInterpolations', './utils/UNSAFE_interpolations/flexitem', './PRIVATE_List/themes/ListStyles.css', './UNSAFE_GroupedList/themes/redwood/GroupedListTheme', './classNames-bd4a4c19', './flexitem-70c06ae3', './SkeletonContainer-9733c82c', './UNSAFE_Flex', './UNSAFE_Skeleton', './Flex-cc4e4675', './Skeleton-c9a7cd89', './utils/UNSAFE_mergeProps', './PRIVATE_LoadMoreCollection', './LoadMoreCollection-03bfa7e9', 'preact', './PRIVATE_Collection', './Collection-cb886825', './PRIVATE_VirtualizedCollection', './VirtualizedCollection-1ded33d9', './utils/UNSAFE_arrayUtils', 'preact/compat', './UNSAFE_FocusTrap', './FocusTrap-47f31a06', 'module', './utils/PRIVATE_tabbableUtils', './_curry1-4d9a6584', './_curry2-99f10bc7', './_arity-39916028', './_curry3-963d734c', './hooks/PRIVATE_useSelection', './hooks/UNSAFE_useUser', './index-abd879ef', './Common', './Common/themes', './Common/themes/redwood/theme', './Common/themes/themeContract.css', './utils/PRIVATE_collectionUtils', './utils/PRIVATE_clientHints', './clientHints-dd589985', './hooks/PRIVATE_useCurrentKey', './hooks/PRIVATE_useCollectionFocusRing', './hooks/PRIVATE_useTabbableModeSet', './hooks/PRIVATE_useItemAction', './UNSAFE_Selector', './PRIVATE_ThemedIcons/CheckboxOffIcon', './PRIVATE_Icons/CheckboxOff', './UNSAFE_Icon', './Icon-3dc6de20', './utils/UNSAFE_size', './UNSAFE_Theme', './utils-b994552d', './hooks/UNSAFE_useTooltip', './UNSAFE_Floating', './Floating-2186bfdd', './index-2e7587a5', './utils/PRIVATE_floatingUtils', './utils/PRIVATE_refUtils', './hooks/UNSAFE_useOutsideClick', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-recipes-createRuntimeFn.esm-84f316bc', './vanilla-extract-dynamic.esm-1a9ba437', './UNSAFE_Floating/themes/FloatingContract.css', './utils/UNSAFE_logger', './UNSAFE_Layer', './useThemeInterpolations-35281d48', './hooks/UNSAFE_useColorScheme', './hooks/UNSAFE_useScale', './utils/UNSAFE_interpolations/theme', './_has-77ad1af6', './hooks/UNSAFE_useHover', './hooks/UNSAFE_useToggle', './hooks/UNSAFE_useFocus', './hooks/UNSAFE_useTouch', './hooks/UNSAFE_useAnimation', './useAnimation-bc5efb9f', './hooks/UNSAFE_useThemeInterpolations', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', 'css!./TooltipContentStyles.styles.css', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./TooltipContentVariants.styles2.css', './UNSAFE_Icon/themes/IconStyle.css', 'css!./IconStyle.styles.css', './PRIVATE_ThemedIcons/CheckboxOnIcon', './PRIVATE_Icons/CheckboxOn', './PRIVATE_ThemedIcons/CheckboxMixedIcon', './PRIVATE_Icons/CheckboxMixed', './UNSAFE_Selector/themes/SelectorStyles.css', 'css!./SelectorStyles.styles.css', './UNSAFE_Radio/themes/redwood/RadioIconTheme', './UNSAFE_Radio/themes/RadioIconStyles.css', 'css!./RadioIconStyles.styles.css', './UNSAFE_Radio/themes/redwood/RadioIconBaseTheme.css', 'module', './UNSAFE_Radio/themes/redwood/RadioIconVariants.css', 'css!./RadioIconVariants.styles2.css', './hooks/PRIVATE_useCollectionGestureContext', './hooks/UNSAFE_useActive', './keys-78ca48b9', 'css!./ListStyles.styles.css', './UNSAFE_GroupedList/themes/GroupedListStyles.css', 'css!./GroupedListStyles.styles.css', './UNSAFE_GroupedList/themes/redwood/GroupedListBaseTheme.css', 'module', './utils/UNSAFE_interpolations/dimensions', './utils/UNSAFE_interpolations/boxalignment', './utils/UNSAFE_interpolations/flexbox', './flexbox-46d184cc', './utils/UNSAFE_interpolations/borders', './UNSAFE_Skeleton/themes/redwood/SkeletonTheme', './UNSAFE_Skeleton/themes/SkeletonStyles.css', 'css!./SkeletonStyles.styles.css', './UNSAFE_Skeleton/themes/redwood/SkeletonBaseTheme.css', 'module', './UNSAFE_Skeleton/themes/redwood/SkeletonVariants.css'], (function(e,s,o,t,i,l,n,a,c,r,d,S,u,h,m,_,A,E,F,p,y,N,T,U,k,I,b,x,C,R,g,V,f,v,w,P,L,G,j,H,B,M,O,K,z,Y,D,q,J,Q,W,X,Z,$,ee,se,oe,te,ie,le,ne,ae,ce,re,de,Se,ue,he,me,_e,Ae,Ee,Fe,pe,ye,Ne,Te,Ue,ke,Ie,be,xe,Ce,Re,ge,Ve,fe,ve,we,Pe,Le,Ge,je,He,Be,Me,Oe,Ke,ze,Ye,De,qe,Je,Qe,We,Xe,Ze,$e,es,ss,os,ts,is,ls,ns,as,cs,rs,ds,Ss,us,hs,ms,_s,As,Es,Fs,ps,ys,Ns,Ts,Us,ks){"use strict";const Is="oj-c-listview-group",bs="."+Is,xs="oj-c-listview-sticky";e.List=s.List,e.SkeletonContainer=E.SkeletonContainer,e.GROUP_SELECTOR=bs,e.GroupLoadingIndicator=()=>o.jsx(E.SkeletonContainer,{minimumCount:3,children:e=>{const s={paddingLeft:10*e+"px"};return o.jsxs(y.Flex,{height:"12x",align:"center",children:[o.jsx("span",{style:s}),o.jsx(N.Skeleton,{height:"4x"})]})}}),e.ListGroupHeader=function({ariaDescribedBy:e,children:i,itemKey:u,itemIndex:E,itemDepth:F,isFocused:p,isFocusRingVisible:y,isActive:N,isGridlineVisible:T,isExpandable:U,expandedKeys:k,viewportConfig:I}){const[b,x]=t.useState(!1),{classes:C,styles:R}=r.useComponentTheme(m.GroupedListRedwoodTheme),{interactionProps:g,applyHoverStyle:V,applyPseudoHoverStyle:f,applyActiveStyle:v}=d.useInteractionStyle(),w=h.listGroupHeaderMultiVariantStyles({expandable:U?"isExpandable":"notExpandable",needsEventsHover:V?"isNeedsEventsHover":"notNeedsEventsHover",pseudoHover:f?"isPseudoHover":"notPseudoHover",active:v||N?"isActive":"notActive",focusRingVisible:y&&p?"isFocusRingVisible":"notFocusRingVisible",gridlineTop:E>0?"visible":"hidden",gridlineBottom:T?"visible":"hidden"}),P=[s.ITEM_STYLE_CLASS,Is,w];b&&(P.push(C),P.push(R.stuckHeader),P.push(xs));const L=_.classNames(P),G=S.mergeInterpolations([...Object.values(A.flexitemInterpolations)]),{class:j,...H}=G({alignSelf:"center",flex:"1 0 auto"});return a.useViewportIntersect({scroller:()=>U?null:null==I?document.body:I.scroller()},0,1,"[data-oj-key="+u+"]",(()=>{x(!1)}),(e=>{e.boundingClientRect.y!==e.intersectionRect.y&&x(!0)})),o.jsx("div",{id:n.useId(),role:"row","aria-rowindex":E+1,"aria-level":isNaN(F)?void 0:F+1,"data-oj-key":u,class:L,..."number"==typeof u&&{"data-oj-key-type":"number"},...g,children:o.jsx("div",{id:n.useId(),role:"gridcell","aria-describedby":e,"aria-colindex":1,"aria-expanded":l.containsKey(k,u),style:H,children:o.jsx(c.TabbableModeContext.Provider,{value:{isTabbable:!1},children:i})})})},e.STICKY_STYLE_CLASS=xs,e.excludeGroup=(e,s)=>{if(!s.all){const o=e.data.filter((e=>!e.metadata.isLeaf)).map((e=>e.metadata.key)),t=Array.from(s.keys.values()).filter((e=>!o.includes(e)));return{...s,keys:new Set(t)}}return s},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=PRIVATE_List.js.map
