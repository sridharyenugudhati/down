define(['exports', 'preact/jsx-runtime', './utils/UNSAFE_arrayUtils', './UNSAFE_Flex', './UNSAFE_WindowOverlay', './hooks/UNSAFE_useUser', './UNSAFE_Layer', './Flex-cc4e4675'], (function(t,o,e,s,r,i,a,n){"use strict";const l=e.stringLiteralArray(["top","top-left","top-right","top-start","top-end","bottom","bottom-left","bottom-right","bottom-start","bottom-end"]),c=({children:t,offset:e,testId:s,position:l="bottom"})=>{const c=l.split("-")[0];let d;d="number"==typeof e?{mainAxis:e,crossAxis:e}:"top"==c||"bottom"==c?{mainAxis:e?.vertical,crossAxis:e?.horizontal}:{mainAxis:e?.horizontal,crossAxis:e?.vertical};const{direction:p}=i.useUser(),m="ltr"===p;let b;switch(l){case"top-left":b=m?"top-start":"top-end";break;case"top-right":b=m?"top-end":"top-start";break;case"bottom-left":b=m?"bottom-start":"bottom-end";break;case"bottom-right":b=m?"bottom-end":"bottom-start";break;default:b=l}return o.jsx(a.Layer,{children:o.jsx(r.WindowOverlay,{placement:b,offset:d,children:o.jsx("div",{"data-testid":s,children:o.jsx(n.Flex,{direction:"column",gap:"2x",children:t})})})})};var d={__proto__:null,MessageLayer:c,positions:l};t.MessageLayer=c,t.MessageLayerModule=d,t.positions=l}));
//# sourceMappingURL=index-76b9d04f.js.map