define(['exports', 'preact/jsx-runtime', 'module', './utils/UNSAFE_classNames', './UNSAFE_Text', './classNames-bd4a4c19', './Text-d9e2e519'], (function(s,n,t,c,a,e,l){"use strict";const i="j1g06y",o="zctsmc",d="_1fcmayi",r="_1lewpdq",u="rk3fti",x="_104fatz",f="kqik4d",h="_1wdo27t",j="_1t99p7n",m=s=>null==s;s.ButtonLayout=function({size:s="md",display:t="all",styling:c="default",...a}){const p="all"===t||"icons"===t,I="all"===t||"label"===t,y=j,b=a.startIcon&&("icons"===t||!a.children)&&!a.endIcon,N="embedded"===c,_=!m(a.startIcon)&&"all"===t,$=!m(a.endIcon)&&"all"===t,g=!m(a.startIcon)&&!m(a.endIcon),k=g&&"icons"===t,w=`${d} oj-c-button-layout-${s} ${h}`,z=e.classNames([d,N?`oj-c-button-layout-embedded-${s}`:`oj-c-button-layout-${s}`,!b&&x,k&&f]),T=e.classNames([i,_&&!a.suffix&&!g&&u,$&&!g&&r]),q=e.classNames([o,_&&!g&&u]);return n.jsxs("span",{class:y,children:[p&&a.startIcon&&n.jsx("span",{class:z,children:a.startIcon}),I&&a.children&&n.jsxs("span",{class:T,children:[" ",a.children," "]}),I&&a.suffix&&n.jsx("span",{class:q,children:n.jsx(l.Text,{truncation:"ellipsis",weight:"inherit",children:a.suffix})}),p&&a.endIcon&&n.jsx("span",{class:w,children:a.endIcon})]})}}));
//# sourceMappingURL=ButtonLayout-eec8ddcf.js.map
