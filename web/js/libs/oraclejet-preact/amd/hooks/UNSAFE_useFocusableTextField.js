define(['exports', 'preact/hooks', './UNSAFE_useFocusWithin', '../useFocusWithin-e6cf986b'], (function(e,u,s,r){"use strict";e.useFocusableTextField=function({isReadonly:e,ref:s=(()=>{}),...t}){const{focusProps:c,isFocused:n}=r.useFocusWithin(t),o=u.useRef(n),f=u.useRef(null),i=u.useRef(null);return u.useEffect((()=>{o.current&&(e?setTimeout((()=>i.current?.focus())):setTimeout((()=>f.current?.focus())))}),[e]),u.useEffect((()=>{o.current=n}),[n]),u.useImperativeHandle(s,(()=>({focus:()=>{e?i.current?.focus():f.current?.focus()},blur:()=>{e?i.current?.blur():f.current?.blur()}})),[e]),{enabledElementRef:f,readonlyElementRef:i,isFocused:n,focusProps:c}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_useFocusableTextField.js.map
