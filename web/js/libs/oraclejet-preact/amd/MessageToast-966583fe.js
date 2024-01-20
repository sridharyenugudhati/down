define(['exports', 'preact/jsx-runtime', 'preact/hooks', './index-abd879ef', './hooks/PRIVATE_useMessagesFocusManager', './hooks/UNSAFE_useBreakpointValues', './hooks/UNSAFE_useMessagesContext', './hooks/UNSAFE_useTranslationBundle', './PRIVATE_Message', './index-76b9d04f', './UNSAFE_Flex', './UNSAFE_FocusTrap', './UNSAFE_LiveRegion', './utils/UNSAFE_arrayUtils', './hooks/UNSAFE_useComponentTheme', './UNSAFE_MessageToast/themes/redwood/MessageToastTheme', './FocusTrap-47f31a06', './Flex-cc4e4675', './MessagesManager-d1ae0a38', './MessageUtils-75fa8dae'], (function(e,t,s,o,n,a,r,i,l,c,u,d,g,m,h,f,p,x,R,M){"use strict";m.stringLiteralArray(["top","top-left","top-right","top-start","top-end","bottom","bottom-left","bottom-right","bottom-start","bottom-end"]);const y={entering:e=>({from:{transform:`translate(0, ${e.offsetHeight}px)`,opacity:1},to:{transform:"translate(0, 0)",opacity:1},end:{transform:"unset",opacity:1},options:{duration:250}}),exiting:{from:{opacity:1},to:{opacity:0},end:{opacity:0},options:{duration:250}}},F={opacity:0};e.MessageToast=function({data:e,detailRendererKey:u,iconRendererKey:d,renderers:m,onClose:T,offset:E,position:v}){const S=s.useRef(new Map),k=s.useRef(null),b=s.useRef(null),A=s.useRef(null),[U,_]=s.useState(),[j,N]=s.useState(e.length>0),[C,I]=s.useState(!1),w=i.useTranslationBundle("@oracle/oraclejet-preact"),{UNSAFE_messagesLayerId:V}=r.useMessagesContext(),L=s.useRef(e.length),P=s.useRef(0);L.current=e.length,s.useImperativeHandle(A,(()=>({focus:()=>!!e.length&&(k.current=S.current.get(e[0].key)??null,I(!0),!0),contains:t=>!(!e.length||!t)&&(b.current?.contains(t)??!1)})),[e]);const{controller:O,handlers:z}=n.useMessageFocusManager(A,{onFocus:s.useCallback((()=>{_(w.message_navigationFromMessagesRegion())}),[w]),onFocusLeave:s.useCallback((()=>{I(!1)}),[])},{handleEscapeKey:!1}),B=s.useCallback(((t,s,o)=>{const n=o?.contains(document.activeElement);if(0===L.current)return N(!1),I(!1),void(n&&setImmediate((()=>O.restorePriorFocus())));const a=s+1<e.length?s+1:s-1;if(a>-1&&n){const t=e[a].key;S.current.get(t)?.focus()}}),[O,e]),D=s.useCallback((e=>t=>S.current.set(e,t)),[]);s.useEffect((()=>{const t=P.current;if(P.current=e.length,e.length)return N(!0),e.length>t&&_(w.message_navigationToMessagesRegion()),void O.prioritize();_(t?w.messageToast_allMessagesClosed():"")}),[O,e.length,w]);const W=a.useBreakpointValues({sm:"--oj-c-PRIVATE-DO-NOT-USE-message-toast-max-width-sm",md:"--oj-c-PRIVATE-DO-NOT-USE-message-toast-max-width-md",lg:"--oj-c-PRIVATE-DO-NOT-USE-message-toast-max-width-lg"}),K=a.useBreakpointValues({sm:{horizontal:"number"==typeof E?E:E?.horizontal??0,vertical:16+("number"==typeof E?E:E?.vertical??0)},lg:{horizontal:"number"==typeof E?E:E?.horizontal??0,vertical:24+("number"==typeof E?E:E?.vertical??0)}}),H=s.useMemo((()=>({close:w.close(),confirmation:w.confirmation(),error:w.error(),info:w.info(),warning:w.warn()})),[w]),{classes:$}=h.useComponentTheme(f.MessageToastRedwoodTheme);return j||0!==e.length?t.jsxs(o.EnvironmentProvider,{environment:{colorScheme:"dark"},children:[t.jsx(c.MessageLayer,{offset:K,position:v,children:t.jsx("div",{class:$,ref:b,tabIndex:-1,id:V,...z,children:t.jsx(p.FocusTrap,{autoFocusRef:k,isDisabled:!C,children:t.jsx(x.Flex,{direction:"column",gap:"1x",align:"center",maxWidth:W,children:t.jsx(R.MessagesManager,{animationStates:y,initialAnimationStyles:F,data:e,onMessageWillRemove:B,children:({index:e,item:s})=>t.jsx(l.Message,{messageRef:D(s.key),item:s,detailRenderer:M.getRendererWithoutIndex(s,u,m),iconRenderer:M.getRendererWithoutIndex(s,d,m),index:e,onClose:T,translations:H,variant:"toast"},s.key)})})})})}),t.jsx(g.LiveRegion,{children:U})]}):t.jsx(g.LiveRegion,{children:U})}}));
//# sourceMappingURL=MessageToast-966583fe.js.map