define(['exports'], (function(e){"use strict";let t;function o(){if(t)return t;if(null===t)throw new Error("Browser does not support WebAudio API");try{t=new(window.AudioContext||window.webkitAudioContext)}catch(e){throw t=null,new Error("Browser does not support WebAudio API")}return t}e.playAudioFromURL=function(e){let t,o;const r=new Promise(((e,r)=>{t=e,o=r})),n=document.createElement("audio");return n.src=e,n.addEventListener("error",o),(n.play()||Promise.resolve()).then(t,o).catch(o),r},e.playDefaultNotificationSound=function(){const e=o(),t=e.createOscillator();t.connect(e.destination),t.start(0),t.stop(e.currentTime+.1)},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_soundUtils.js.map
