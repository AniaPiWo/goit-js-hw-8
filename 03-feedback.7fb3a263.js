var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n),(0,n.register)("9OeKo",function(t,r){var n="Expected a function",o=0/0,i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),p=Object.prototype.toString,v=Math.max,m=Math.min,g=function(){return d.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==p.call(t))return o;if(y(e)){var t,r="function"==typeof e.valueOf?e.valueOf():e;e=y(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=u.test(e);return n||f.test(e)?l(e.slice(2),n?2:8):a.test(e)?o:+e}t.exports=function(e,t,r){var o=!0,i=!0;if("function"!=typeof e)throw TypeError(n);return y(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),function(e,t,r){var o,i,a,u,f,l,c=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw TypeError(n);function O(t){var r=o,n=i;return o=i=void 0,c=t,u=e.apply(n,r)}function x(e){var r=e-l,n=e-c;return void 0===l||r>=t||r<0||d&&n>=a}function S(){var e,r,n,o=g();if(x(o))return h(o);f=setTimeout(S,(e=o-l,r=o-c,n=t-e,d?m(n,a-r):n))}function h(e){return(f=void 0,p&&o)?O(e):(o=i=void 0,u)}function j(){var e,r=g(),n=x(r);if(o=arguments,i=this,l=r,n){if(void 0===f)return c=e=l,f=setTimeout(S,t),s?O(e):u;if(d)return f=setTimeout(S,t),O(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=b(t)||0,y(r)&&(s=!!r.leading,a=(d="maxWait"in r)?v(b(r.maxWait)||0,t):a,p="trailing"in r?!!r.trailing:p),j.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},j.flush=function(){return void 0===f?u:h(g())},j}(e,t,{leading:o,maxWait:t,trailing:i})}});var o=n("9OeKo");const i=document.querySelector(".feedback-form"),a=document.querySelector("input"),u=document.querySelector("textarea"),f=document.querySelector("#reload"),l=document.querySelector("#reset");i.addEventListener("input",(o&&o.__esModule?o.default:o)(function(e){e.preventDefault();let t={email:a.value,message:u.value};localStorage.setItem("feedback-form-state",JSON.stringify(t)),console.log(t)},500));const c=localStorage.getItem("feedback-form-state");if(console.log(c),c){let e=JSON.parse(c);a.value=e.email,u.value=e.message}f.addEventListener("click",()=>{location.reload()}),l.addEventListener("click",()=>{localStorage.removeItem("feedback-form-state"),i.reset()});
//# sourceMappingURL=03-feedback.7fb3a263.js.map