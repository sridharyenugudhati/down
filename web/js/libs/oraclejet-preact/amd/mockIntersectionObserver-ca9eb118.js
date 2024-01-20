define(['exports'], (function(e){"use strict";e.setupIntersectionObserverMock=()=>{const e=jest.fn();e.mockReturnValue({observe:()=>null,unobserve:()=>null,disconnect:()=>null}),Object.defineProperty(global,"IntersectionObserver",{writable:!0,configurable:!0,value:e})}}));
//# sourceMappingURL=mockIntersectionObserver-ca9eb118.js.map
