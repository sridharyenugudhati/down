define(['exports', 'preact/jsx-runtime', 'preact', 'preact/compat', './hooks/UNSAFE_useFormContext', './hooks/UNSAFE_useFormFieldContext', './hooks/UNSAFE_useFocusableTextField', './UNSAFE_Label', './UNSAFE_TextField', './hooks/UNSAFE_useTextField', './UNSAFE_UserAssistance', './hooks/UNSAFE_useLengthFilter', 'preact/hooks', './hooks/UNSAFE_useCurrentValueReducer', './UNSAFE_TextArea', './Label-1f0a7c60', './ReadonlyTextFieldInput-ab75ae72', './TextFieldInput-eb38253d', './TextArea-7bda05a7'], (function(e,t,s,a,n,i,o,l,r,d,u,c,x,m,p,h,F,b,g){"use strict";const f=({isReadonly:e,enabledElementRef:t,readonlyElementRef:s,minRows:a=2,maxRows:n,value:i})=>{x.useLayoutEffect((()=>{const i=e?s:t;if(null===i.current)return;if(i.current instanceof HTMLDivElement)return;const o=i.current,l=(e=>{const t=window.getComputedStyle(e),s=t.lineHeight;if("normal"===s)return 1.2*parseFloat(t.fontSize);return parseFloat(s)})(o);o.style.height="0";const{paddingHeight:r,borderHeight:d}=(e=>{const t=window.getComputedStyle(e);return{paddingHeight:parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),borderHeight:parseFloat(t.borderTop)+parseFloat(t.borderBottom)}})(o),u=l*a+r+d,c=o.scrollHeight+d;let x=0;if(void 0===n)x=c<u?u:c;else if(n>a){const e=l*n+r+d;x=c>e?e:c<u?u:c}else x=u;o.style.height=x+.5+"px"}),[i,a,n,e])},v=a.forwardRef((({"aria-describedby":e,assistiveText:l,autoComplete:x="off",autoFocus:p=!1,helpSourceLink:v,helpSourceText:R,isDisabled:y,isReadonly:A,isRequired:L=!1,isRequiredShown:E,label:S,labelEdge:C,labelStartWidth:T,maxLength:U,maxLengthCounter:w="remaining",maxLengthUnit:j,maxRows:k,messages:I,minRows:D=2,placeholder:N,role:_,textAlign:H,userAssistanceDensity:P,value:V,variant:q="default",onInput:M,onCommit:B},W)=>{const{currentCommitValue:z,dispatch:G}=m.useCurrentValueReducer({value:V}),J=a.useCallback((e=>{G({type:"input",payload:e.value}),M?.(e)}),[M]),K=a.useCallback((e=>{G({type:"commit",payload:e.value}),B?.(e)}),[B]),{isDisabled:O,isReadonly:Q,labelEdge:X,labelStartWidth:Y,textAlign:Z,userAssistanceDensity:$}=n.useFormContext(),ee=y??O,te=A??Q,se=C??X,ae=T??Y,ne=H??Z,ie=P??$,{enabledElementRef:oe,readonlyElementRef:le,focusProps:re,isFocused:de}=o.useFocusableTextField({isDisabled:ee,isReadonly:te,ref:W}),{formFieldContext:ue,inputProps:ce,labelProps:xe,textFieldProps:me,userAssistanceProps:pe}=d.useTextField({ariaDescribedBy:e,contentVariant:"textarea",helpSourceLink:v,helpSourceText:R,isDisabled:ee,isFocused:de,isReadonly:te,isRequiredShown:E,labelEdge:se,messages:I,styleVariant:q,userAssistanceDensity:ie,value:V}),{isMaxLengthExceeded:he,valueLength:Fe,onFilteredInput:be}=c.useLengthFilter({maxLength:U,maxLengthUnit:j,value:V,onInput:J,onCommit:K}),ge="none"!==se?t.jsx(h.Label,{...xe,children:S}):void 0,fe={label:"none"!==se?ge:void 0,labelEdge:"none"!==se?se:void 0,labelStartWidth:"none"!==se?ae:void 0},ve="none"===se?S:void 0,Re="efficient"===ie||"reflow"===ie?ee||te?"efficient"!==ie?void 0:t.jsx(u.InlineUserAssistance,{userAssistanceDensity:ie,...pe}):t.jsx(u.InlineUserAssistance,{assistiveText:l,fieldLabel:S,helpSourceLink:v,helpSourceText:R,messages:I,isRequiredShown:E,userAssistanceDensity:ie,...pe}):void 0,ye=a.useRef(null),Ae="compact"===ie?t.jsx(u.CompactUserAssistance,{anchorRef:ye,messages:I,assistiveText:l,...pe}):void 0;if(f({isReadonly:te,enabledElementRef:oe,readonlyElementRef:le,minRows:D,maxRows:k,value:V}),te)return t.jsx(i.FormFieldContext.Provider,{value:ue,children:t.jsx(r.ReadonlyTextField,{role:"presentation",compactUserAssistance:Ae,inlineUserAssistance:Re,variant:"textarea",ref:ye,...fe,children:t.jsx(F.ReadonlyTextFieldInput,{"aria-describedby":ce["aria-describedby"],"aria-label":ve,"aria-labelledby":xe.id,elementRef:le,...k?{as:"textarea",rows:D}:{as:"div"},autoFocus:p,textAlign:ne,value:V,variant:"textarea",hasEmptyLabel:""===S&&"none"===se,hasInsideLabel:void 0!==S&&"inside"===se})})});const Le=a.useCallback((()=>{const e=oe.current,t=e?e.value.length:null;oe.current?.setSelectionRange(t,t),oe.current?.focus()}),[]),Ee=t.jsxs(s.Fragment,{children:[t.jsx(b.TextFieldInput,{as:"textarea","aria-label":ve,autoComplete:x,autoFocus:p,currentCommitValue:z,hasEmptyLabel:""===S&&"none"===se,hasInsideLabel:void 0!==ge&&"inside"===se,isRequired:L,inputRef:oe,onCommit:K,onInput:be,placeholder:N,role:_,rows:D,textAlign:ne,value:V,...ce}),"remaining"===w&&void 0!==U&&t.jsx(g.MaxLengthCounter,{maxLength:U,valueLength:Fe,parentHasFocus:de,onClick:Le}),void 0!==U&&t.jsx(r.MaxLengthLiveRegion,{isMaxLengthExceeded:he,maxLength:U,valueLength:Fe})]});return t.jsx(i.FormFieldContext.Provider,{value:ue,children:t.jsx(r.TextField,{mainContent:Ee,compactUserAssistance:Ae,inlineUserAssistance:Re,onBlur:re?.onfocusout,onFocus:re?.onfocusin,mainFieldRef:ye,...me,...fe})})}));e.TextAreaAutosize=v}));
//# sourceMappingURL=TextAreaAutosize-f05aacb0.js.map
