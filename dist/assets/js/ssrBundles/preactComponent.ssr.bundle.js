var dr=Object.create,ce=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,hr=Object.getOwnPropertyNames,yr=Object.getPrototypeOf,mr=Object.prototype.hasOwnProperty,X=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),br=(e,t)=>{for(var n in t)ce(e,n,{get:t[n],enumerable:!0})},ot=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of hr(t))!mr.call(e,o)&&o!==n&&ce(e,o,{get:()=>t[o],enumerable:!(r=vr(t,o))||r.enumerable});return e},gr=(e,t,n)=>(n=null!=e?dr(yr(e)):{},ot(!t&&e&&e.__esModule?n:ce(n,"default",{value:e,enumerable:!0}),e)),Er=e=>ot(ce({},"__esModule",{value:!0}),e),Ft=X((e=>{"use strict";var t="function"==typeof Symbol&&Symbol.for,n=t?Symbol.for("react.element"):60103,r=t?Symbol.for("react.portal"):60106,o=t?Symbol.for("react.fragment"):60107,i=t?Symbol.for("react.strict_mode"):60108,a=t?Symbol.for("react.profiler"):60114,c=t?Symbol.for("react.provider"):60109,u=t?Symbol.for("react.context"):60110,l=t?Symbol.for("react.async_mode"):60111,_=t?Symbol.for("react.concurrent_mode"):60111,s=t?Symbol.for("react.forward_ref"):60112,f=t?Symbol.for("react.suspense"):60113,p=t?Symbol.for("react.suspense_list"):60120,d=t?Symbol.for("react.memo"):60115,y=t?Symbol.for("react.lazy"):60116,h=t?Symbol.for("react.block"):60121,m=t?Symbol.for("react.fundamental"):60117,v=t?Symbol.for("react.responder"):60118,b=t?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case _:case o:case a:case i:case f:return e;default:switch(e=e&&e.$$typeof){case u:case s:case y:case d:case c:return e;default:return t}}case r:return t}}}function w(e){return g(e)===_}e.AsyncMode=l,e.ConcurrentMode=_,e.ContextConsumer=u,e.ContextProvider=c,e.Element=n,e.ForwardRef=s,e.Fragment=o,e.Lazy=y,e.Memo=d,e.Portal=r,e.Profiler=a,e.StrictMode=i,e.Suspense=f,e.isAsyncMode=function(e){return w(e)||g(e)===l},e.isConcurrentMode=w,e.isContextConsumer=function(e){return g(e)===u},e.isContextProvider=function(e){return g(e)===c},e.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},e.isForwardRef=function(e){return g(e)===s},e.isFragment=function(e){return g(e)===o},e.isLazy=function(e){return g(e)===y},e.isMemo=function(e){return g(e)===d},e.isPortal=function(e){return g(e)===r},e.isProfiler=function(e){return g(e)===a},e.isStrictMode=function(e){return g(e)===i},e.isSuspense=function(e){return g(e)===f},e.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===_||e===a||e===i||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===d||e.$$typeof===c||e.$$typeof===u||e.$$typeof===s||e.$$typeof===m||e.$$typeof===v||e.$$typeof===b||e.$$typeof===h)},e.typeOf=g})),Nt=X((e=>{"use strict";"production"!==process.env.NODE_ENV&&function(){var t="function"==typeof Symbol&&Symbol.for,n=t?Symbol.for("react.element"):60103,r=t?Symbol.for("react.portal"):60106,o=t?Symbol.for("react.fragment"):60107,i=t?Symbol.for("react.strict_mode"):60108,a=t?Symbol.for("react.profiler"):60114,c=t?Symbol.for("react.provider"):60109,u=t?Symbol.for("react.context"):60110,l=t?Symbol.for("react.async_mode"):60111,_=t?Symbol.for("react.concurrent_mode"):60111,s=t?Symbol.for("react.forward_ref"):60112,f=t?Symbol.for("react.suspense"):60113,p=t?Symbol.for("react.suspense_list"):60120,d=t?Symbol.for("react.memo"):60115,y=t?Symbol.for("react.lazy"):60116,h=t?Symbol.for("react.block"):60121,m=t?Symbol.for("react.fundamental"):60117,v=t?Symbol.for("react.responder"):60118,b=t?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case l:case _:case o:case a:case i:case f:return p;default:var h=p&&p.$$typeof;switch(h){case u:case s:case y:case d:case c:return h;default:return t}}case r:return t}}}var w=l,x=_,k=u,S=c,P=n,O=s,E=o,T=y,j=d,C=r,$=a,N=i,L=f,U=!1;function A(e){return g(e)===_}e.AsyncMode=w,e.ConcurrentMode=x,e.ContextConsumer=k,e.ContextProvider=S,e.Element=P,e.ForwardRef=O,e.Fragment=E,e.Lazy=T,e.Memo=j,e.Portal=C,e.Profiler=$,e.StrictMode=N,e.Suspense=L,e.isAsyncMode=function(e){return U||(U=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||g(e)===l},e.isConcurrentMode=A,e.isContextConsumer=function(e){return g(e)===u},e.isContextProvider=function(e){return g(e)===c},e.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},e.isForwardRef=function(e){return g(e)===s},e.isFragment=function(e){return g(e)===o},e.isLazy=function(e){return g(e)===y},e.isMemo=function(e){return g(e)===d},e.isPortal=function(e){return g(e)===r},e.isProfiler=function(e){return g(e)===a},e.isStrictMode=function(e){return g(e)===i},e.isSuspense=function(e){return g(e)===f},e.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===_||e===a||e===i||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===d||e.$$typeof===c||e.$$typeof===u||e.$$typeof===s||e.$$typeof===m||e.$$typeof===v||e.$$typeof===b||e.$$typeof===h)},e.typeOf=g}()})),Qe=X(((e,t)=>{"use strict";"production"===process.env.NODE_ENV?t.exports=Ft():t.exports=Nt()})),Yt=X(((e,t)=>{"use strict";var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch{return!1}}()?Object.assign:function(e,t){for(var i,a,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var l in i=Object(arguments[u]))r.call(i,l)&&(c[l]=i[l]);if(n){a=n(i);for(var _=0;_<a.length;_++)o.call(i,a[_])&&(c[a[_]]=i[a[_]])}}return c}})),Oe=X(((e,t)=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"})),Ve=X(((e,t)=>{t.exports=Function.call.bind(Object.prototype.hasOwnProperty)})),Qt=X(((e,t)=>{"use strict";var n,r,o,i=function(){};function a(e,t,a,c,u){if("production"!==process.env.NODE_ENV)for(var l in e)if(o(e,l)){var _;try{if("function"!=typeof e[l]){var s=Error((c||"React class")+": "+a+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw s.name="Invariant Violation",s}_=e[l](t,l,c,a,null,n)}catch(e){_=e}if(_&&!(_ instanceof Error)&&i((c||"React class")+": type specification of "+a+" `"+l+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof _+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),_ instanceof Error&&!(_.message in r)){r[_.message]=!0;var f=u?u():"";i("Failed "+a+" type: "+_.message+(f??""))}}}"production"!==process.env.NODE_ENV&&(n=Oe(),r={},o=Ve(),i=function(e){var t="Warning: "+e;typeof console<"u"&&console.error(t);try{throw new Error(t)}catch{}}),a.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},t.exports=a})),er=X(((e,t)=>{"use strict";var n=Qe(),r=Yt(),o=Oe(),i=Ve(),a=Qt(),c=function(){};function u(){return null}"production"!==process.env.NODE_ENV&&(c=function(e){var t="Warning: "+e;typeof console<"u"&&console.error(t);try{throw new Error(t)}catch{}}),t.exports=function(e,t){var l="function"==typeof Symbol&&Symbol.iterator,_="<<anonymous>>",s={array:y("array"),bigint:y("bigint"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:d(u),arrayOf:function(e){return d((function(t,n,r,i,a){if("function"!=typeof e)return new p("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var c=t[n];if(!Array.isArray(c))return new p("Invalid "+i+" `"+a+"` of type `"+v(c)+"` supplied to `"+r+"`, expected an array.");for(var u=0;u<c.length;u++){var l=e(c,u,r,i,a+"["+u+"]",o);if(l instanceof Error)return l}return null}))},element:d((function(t,n,r,o,i){var a=t[n];return e(a)?null:new p("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:d((function(e,t,r,o,i){var a=e[t];return n.isValidElementType(a)?null:new p("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return d((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||_,c=function(e){return e.constructor&&e.constructor.name?e.constructor.name:_}(t[n]);return new p("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}))},node:d((function(e,t,n,r,o){return m(e[t])?null:new p("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return d((function(t,n,r,a,c){if("function"!=typeof e)return new p("Property `"+c+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],l=v(u);if("object"!==l)return new p("Invalid "+a+" `"+c+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var _ in u)if(i(u,_)){var s=e(u,_,r,a,c+"."+_,o);if(s instanceof Error)return s}return null}))},oneOf:function(e){return Array.isArray(e)?d((function(t,n,r,o,i){for(var a=t[n],c=0;c<e.length;c++)if(f(a,e[c]))return null;var u=JSON.stringify(e,(function(e,t){return"symbol"===b(t)?String(t):t}));return new p("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+u+".")})):("production"!==process.env.NODE_ENV&&c(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),u)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&c("Invalid argument supplied to oneOfType, expected an instance of array."),u;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+g(n)+" at index "+t+"."),u}return d((function(t,n,r,a,c){for(var u=[],l=0;l<e.length;l++){var _=(0,e[l])(t,n,r,a,c,o);if(null==_)return null;_.data&&i(_.data,"expectedType")&&u.push(_.data.expectedType)}return new p("Invalid "+a+" `"+c+"` supplied to `"+r+"`"+(u.length>0?", expected one of type ["+u.join(", ")+"]":"")+".")}))},shape:function(e){return d((function(t,n,r,i,a){var c=t[n],u=v(c);if("object"!==u)return new p("Invalid "+i+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var _=e[l];if("function"!=typeof _)return h(r,i,a,l,b(_));var s=_(c,l,r,i,a+"."+l,o);if(s)return s}return null}))},exact:function(e){return d((function(t,n,a,c,u){var l=t[n],_=v(l);if("object"!==_)return new p("Invalid "+c+" `"+u+"` of type `"+_+"` supplied to `"+a+"`, expected `object`.");var s=r({},t[n],e);for(var f in s){var d=e[f];if(i(e,f)&&"function"!=typeof d)return h(a,c,u,f,b(d));if(!d)return new p("Invalid "+c+" `"+u+"` key `"+f+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=d(l,f,a,c,u+"."+f,o);if(y)return y}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function d(e){if("production"!==process.env.NODE_ENV)var n={},r=0;function i(i,a,u,l,s,f,d){if(l=l||_,f=f||u,d!==o){if(t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("production"!==process.env.NODE_ENV&&typeof console<"u"){var h=l+":"+u;!n[h]&&r<3&&(c("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[h]=!0,r++)}}return null==a[u]?i?null===a[u]?new p("The "+s+" `"+f+"` is marked as required in `"+l+"`, but its value is `null`."):new p("The "+s+" `"+f+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(a,u,l,s,f)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function y(e){return d((function(t,n,r,o,i,a){var c=t[n];return v(c)!==e?new p("Invalid "+o+" `"+i+"` of type `"+b(c)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function h(e,t,n,r,o){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function m(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(m);if(null===t||e(t))return!0;var n=function(e){var t=e&&(l&&e[l]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!m(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!m(i[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function b(e){if(typeof e>"u"||null===e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function g(e){var t=b(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,s.checkPropTypes=a,s.resetWarningCache=a.resetWarningCache,s.PropTypes=s,s}})),or=X(((e,t)=>{"use strict";var n=Oe();function r(){}function o(){}o.resetWarningCache=r,t.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return i.PropTypes=i,i}})),ur=X(((e,t)=>{var n;"production"!==process.env.NODE_ENV?(n=Qe(),t.exports=er()(n.isElement,!0)):t.exports=or()()})),nn={};br(nn,{default:()=>rn}),module.exports=Er(nn);var Ue,P,st,xr,re,it,ct,je,He,$e,De,Tr,Ie={},ft=[],wr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Fe=Array.isArray;function te(e,t){for(var n in t)e[n]=t[n];return e}function lt(e){var t=e.parentNode;t&&t.removeChild(e)}function Z(e,t,n){var r,o,i,a={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:a[i]=t[i];if(arguments.length>2&&(a.children=arguments.length>3?Ue.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===a[i]&&(a[i]=e.defaultProps[i]);return le(e,a,r,o,null)}function le(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++st,__i:-1,__u:0};return null==o&&null!=P.vnode&&P.vnode(i),i}function G(e){return e.children}function pe(e,t){this.props=e,this.context=t}function ne(e,t){if(null==t)return e.__?ne(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?ne(e):null}function pt(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return pt(e)}}function at(e){(!e.__d&&(e.__d=!0)&&re.push(e)&&!de.__r++||it!==P.debounceRendering)&&((it=P.debounceRendering)||ct)(de)}function de(){var e,t,n,r,o,i,a,c;for(re.sort(je);e=re.shift();)e.__d&&(t=re.length,r=void 0,i=(o=(n=e).__v).__e,a=[],c=[],n.__P&&((r=te({},o)).__v=o.__v+1,P.vnode&&P.vnode(r),ht(n.__P,r,o,n.__n,n.__P.namespaceURI,32&o.__u?[i]:null,a,i??ne(o),!!(32&o.__u),c),r.__v=o.__v,r.__.__k[r.__i]=r,Pr(a,r,c),r.__e!=i&&pt(r)),re.length>t&&re.sort(je));de.__r=0}function dt(e,t,n,r,o,i,a,c,u,l,_){var s,f,p,d,y,h=r&&r.__k||ft,m=t.length;for(n.__d=u,Cr(n,t,h),u=n.__d,s=0;s<m;s++)null!=(p=n.__k[s])&&"boolean"!=typeof p&&"function"!=typeof p&&(f=-1===p.__i?Ie:h[p.__i]||Ie,p.__i=s,ht(e,p,f,o,i,a,c,u,l,_),d=p.__e,p.ref&&f.ref!=p.ref&&(f.ref&&Ne(f.ref,null,p),_.push(p.ref,p.__c||d,p)),null==y&&null!=d&&(y=d),65536&p.__u||f.__k===p.__k?(u&&!u.isConnected&&(u=ne(f)),u=vt(p,u,e)):"function"==typeof p.type&&void 0!==p.__d?u=p.__d:d&&(u=d.nextSibling),p.__d=void 0,p.__u&=-196609);n.__d=u,n.__e=y}function Cr(e,t,n){var r,o,i,a,c,u=t.length,l=n.length,_=l,s=0;for(e.__k=[],r=0;r<u;r++)a=r+s,null!=(o=e.__k[r]=null==(o=t[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?le(null,o,null,null,null):Fe(o)?le(G,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?le(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,c=Sr(o,n,a,_),o.__i=c,i=null,-1!==c&&(_--,(i=n[c])&&(i.__u|=131072)),null==i||null===i.__v?(-1==c&&s--,"function"!=typeof o.type&&(o.__u|=65536)):c!==a&&(c===a+1?s++:c>a?_>u-a?s+=c-a:s--:c<a?c==a-1&&(s=c-a):s=0,c!==r+s&&(o.__u|=65536))):(i=n[a])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=ne(i)),Le(i,i,!1),n[a]=null,_--);if(_)for(r=0;r<l;r++)null!=(i=n[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=ne(i)),Le(i,i))}function vt(e,t,n){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=vt(r[o],t,n));return t}e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e);do{t=t&&t.nextSibling}while(null!=t&&8===t.nodeType);return t}function Sr(e,t,n,r){var o=e.key,i=e.type,a=n-1,c=n+1,u=t[n];if(null===u||u&&o==u.key&&i===u.type&&!(131072&u.__u))return n;if(r>(null==u||131072&u.__u?0:1))for(;a>=0||c<t.length;){if(a>=0){if((u=t[a])&&!(131072&u.__u)&&o==u.key&&i===u.type)return a;a--}if(c<t.length){if((u=t[c])&&!(131072&u.__u)&&o==u.key&&i===u.type)return c;c++}}return-1}function ut(e,t,n){"-"===t[0]?e.setProperty(t,n??""):e[t]=null==n?"":"number"!=typeof n||wr.test(t)?n:n+"px"}function fe(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||ut(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||ut(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||"onFocusOut"===t||"onFocusIn"===t?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r?n.u=r.u:(n.u=He,e.addEventListener(t,i?De:$e,i)):e.removeEventListener(t,i?De:$e,i);else{if("http://www.w3.org/2000/svg"==o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=t&&"height"!=t&&"href"!=t&&"list"!=t&&"form"!=t&&"tabIndex"!=t&&"download"!=t&&"rowSpan"!=t&&"colSpan"!=t&&"role"!=t&&t in e)try{e[t]=n??"";break e}catch{}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function _t(e){return function(t){if(this.l){var n=this.l[t.type+e];if(null==t.t)t.t=He++;else if(t.t<n.u)return;return n(P.event?P.event(t):t)}}}function ht(e,t,n,r,o,i,a,c,u,l){var _,s,f,p,d,y,h,m,v,b,g,w,x,k,S,O=t.type;if(void 0!==t.constructor)return null;128&n.__u&&(u=!!(32&n.__u),i=[c=t.__e=n.__e]),(_=P.__b)&&_(t);e:if("function"==typeof O)try{if(m=t.props,v=(_=O.contextType)&&r[_.__c],b=_?v?v.props.value:_.__:r,n.__c?h=(s=t.__c=n.__c).__=s.__E:("prototype"in O&&O.prototype.render?t.__c=s=new O(m,b):(t.__c=s=new pe(m,b),s.constructor=O,s.render=Or),v&&v.sub(s),s.props=m,s.state||(s.state={}),s.context=b,s.__n=r,f=s.__d=!0,s.__h=[],s._sb=[]),null==s.__s&&(s.__s=s.state),null!=O.getDerivedStateFromProps&&(s.__s==s.state&&(s.__s=te({},s.__s)),te(s.__s,O.getDerivedStateFromProps(m,s.__s))),p=s.props,d=s.state,s.__v=t,f)null==O.getDerivedStateFromProps&&null!=s.componentWillMount&&s.componentWillMount(),null!=s.componentDidMount&&s.__h.push(s.componentDidMount);else{if(null==O.getDerivedStateFromProps&&m!==p&&null!=s.componentWillReceiveProps&&s.componentWillReceiveProps(m,b),!s.__e&&(null!=s.shouldComponentUpdate&&!1===s.shouldComponentUpdate(m,s.__s,b)||t.__v===n.__v)){for(t.__v!==n.__v&&(s.props=m,s.state=s.__s,s.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),g=0;g<s._sb.length;g++)s.__h.push(s._sb[g]);s._sb=[],s.__h.length&&a.push(s);break e}null!=s.componentWillUpdate&&s.componentWillUpdate(m,s.__s,b),null!=s.componentDidUpdate&&s.__h.push((function(){s.componentDidUpdate(p,d,y)}))}if(s.context=b,s.props=m,s.__P=e,s.__e=!1,w=P.__r,x=0,"prototype"in O&&O.prototype.render){for(s.state=s.__s,s.__d=!1,w&&w(t),_=s.render(s.props,s.state,s.context),k=0;k<s._sb.length;k++)s.__h.push(s._sb[k]);s._sb=[]}else do{s.__d=!1,w&&w(t),_=s.render(s.props,s.state,s.context),s.state=s.__s}while(s.__d&&++x<25);s.state=s.__s,null!=s.getChildContext&&(r=te(te({},r),s.getChildContext())),f||null==s.getSnapshotBeforeUpdate||(y=s.getSnapshotBeforeUpdate(p,d)),dt(e,Fe(S=null!=_&&_.type===G&&null==_.key?_.props.children:_)?S:[S],t,n,r,o,i,a,c,u,l),s.base=t.__e,t.__u&=-161,s.__h.length&&a.push(s),h&&(s.__E=s.__=null)}catch(e){t.__v=null,u||null!=i?(t.__e=c,t.__u|=u?160:32,i[i.indexOf(c)]=null):(t.__e=n.__e,t.__k=n.__k),P.__e(e,t,n)}else null==i&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=kr(n.__e,t,n,r,o,i,a,u,l);(_=P.diffed)&&_(t)}function Pr(e,t,n){t.__d=void 0;for(var r=0;r<n.length;r++)Ne(n[r],n[++r],n[++r]);P.__c&&P.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){P.__e(e,t.__v)}}))}function kr(e,t,n,r,o,i,a,c,u){var l,_,s,f,p,d,y,h=n.props,m=t.props,v=t.type;if("svg"===v?o="http://www.w3.org/2000/svg":"math"===v?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=i)for(l=0;l<i.length;l++)if((p=i[l])&&"setAttribute"in p==!!v&&(v?p.localName===v:3===p.nodeType)){e=p,i[l]=null;break}if(null==e){if(null===v)return document.createTextNode(m);e=document.createElementNS(o,v,m.is&&m),i=null,c=!1}if(null===v)h===m||c&&e.data===m||(e.data=m);else{if(i=i&&Ue.call(e.childNodes),h=n.props||Ie,!c&&null!=i)for(h={},l=0;l<e.attributes.length;l++)h[(p=e.attributes[l]).name]=p.value;for(l in h)if(p=h[l],"children"!=l)if("dangerouslySetInnerHTML"==l)s=p;else if("key"!==l&&!(l in m)){if("value"==l&&"defaultValue"in m||"checked"==l&&"defaultChecked"in m)continue;fe(e,l,null,p,o)}for(l in m)p=m[l],"children"==l?f=p:"dangerouslySetInnerHTML"==l?_=p:"value"==l?d=p:"checked"==l?y=p:"key"===l||c&&"function"!=typeof p||h[l]===p||fe(e,l,p,h[l],o);if(_)c||s&&(_.__html===s.__html||_.__html===e.innerHTML)||(e.innerHTML=_.__html),t.__k=[];else if(s&&(e.innerHTML=""),dt(e,Fe(f)?f:[f],t,n,r,"foreignObject"===v?"http://www.w3.org/1999/xhtml":o,i,a,i?i[0]:n.__k&&ne(n,0),c,u),null!=i)for(l=i.length;l--;)null!=i[l]&&lt(i[l]);c||(l="value",void 0!==d&&(d!==e[l]||"progress"===v&&!d||"option"===v&&d!==h[l])&&fe(e,l,d,h[l],o),l="checked",void 0!==y&&y!==e[l]&&fe(e,l,y,h[l],o))}return e}function Ne(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){P.__e(e,n)}}function Le(e,t,n){var r,o;if(P.unmount&&P.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Ne(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){P.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&Le(r[o],t,n||"function"!=typeof e.type);n||null==e.__e||lt(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function Or(e,t,n){return this.constructor(e,n)}Ue=ft.slice,P={__e:function(e,t,n,r){for(var o,i,a;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),a=o.__d),a)return o.__E=o}catch(t){e=t}throw e}},st=0,xr=function(e){return null!=e&&null==e.constructor},pe.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=te({},this.state),"function"==typeof e&&(e=e(te({},n),this.props)),e&&te(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),at(this))},pe.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),at(this))},pe.prototype.render=G,re=[],ct="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,je=function(e,t){return e.__v.__b-t.__v.__b},de.__r=0,He=0,$e=_t(!1),De=_t(!0),Tr=0;var yt=/[\s\n\\/='"\0<>]/,mt=/^(xlink|xmlns|xml)([A-Z])/,Ar=/^accessK|^auto[A-Z]|^ch|^col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|readO|rowS|spellC|src[A-Z]|tabI|item[A-Z]/,Rr=/^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,Mr=/["&<]/;function ve(e){if(0===e.length||!1===Mr.test(e))return e;for(var t=0,n=0,r="",o="";n<e.length;n++){switch(e.charCodeAt(n)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}n!==t&&(r+=e.slice(t,n)),r+=o,t=n+1}return n!==t&&(r+=e.slice(t,n)),r}var qe,oe,_e,ie,bt={},jr=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),$r=/[A-Z]/g;function Dr(e){var t="";for(var n in e){var r=e[n];if(null!=r&&""!==r){var o="-"==n[0]?n:bt[n]||(bt[n]=n.replace($r,"-$&").toLowerCase()),i=";";"number"!=typeof r||o.startsWith("--")||jr.has(o)||(i="px;"),t=t+o+":"+r+i}}return t||void 0}var gt=[],Et=Array.isArray,We=Object.assign;function Ir(e,t){var n=P.__s;P.__s=!0,qe=P.__b,oe=P.diffed,_e=P.__r,ie=P.unmount;var r=Z(G,null);r.__k=[e];try{return V(e,t||wt,!1,void 0,r,!1)}catch(e){throw e.then?new Error('Use "renderToStringAsync" for suspenseful rendering.'):e}finally{P.__c&&P.__c(e,gt),P.__s=n,gt.length=0}}function xt(){this.__d=!0}var wt={};function Tt(e,t){var n,r=e.type,o=!0;return e.__c?(o=!1,(n=e.__c).state=n.__s):n=new r(e.props,t),e.__c=n,n.__v=e,n.props=e.props,n.context=t,n.__d=!0,null==n.state&&(n.state=wt),null==n.__s&&(n.__s=n.state),r.getDerivedStateFromProps?n.state=We({},n.state,r.getDerivedStateFromProps(n.props,n.state)):o&&n.componentWillMount?(n.componentWillMount(),n.state=n.__s!==n.state?n.__s:n.state):!o&&n.componentWillUpdate&&n.componentWillUpdate(),_e&&_e(e),n.render(n.props,n.state,t)}function V(e,t,n,r,o,i){if(null==e||!0===e||!1===e||""===e)return"";if("object"!=typeof e)return"function"==typeof e?"":ve(e+"");if(Et(e)){var a,c="";o.__k=e;for(var u=0;u<e.length;u++){var l=e[u];if(null!=l&&"boolean"!=typeof l){var _,s=V(l,t,n,r,o,i);"string"==typeof s?c+=s:(a=a||[],c&&a.push(c),c="",Array.isArray(s)?(_=a).push.apply(_,s):a.push(s))}}return a?(c&&a.push(c),a):c}if(void 0!==e.constructor)return"";e.__=o,qe&&qe(e);var f,p,d,y=e.type,h=e.props,m=t;if("function"==typeof y){if(y===G){if(h.tpl){for(var v="",b=0;b<h.tpl.length;b++)if(v+=h.tpl[b],h.exprs&&b<h.exprs.length){var g=h.exprs[b];if(null==g)continue;"object"!=typeof g||void 0!==g.constructor&&!Et(g)?v+=g:v+=V(g,t,n,r,e,i)}return v}if(h.UNSTABLE_comment)return"\x3c!--"+ve(h.UNSTABLE_comment||"")+"--\x3e";p=h.children}else{if(null!=(f=y.contextType)){var w=t[f.__c];m=w?w.props.value:f.__}if(y.prototype&&"function"==typeof y.prototype.render)p=Tt(e,m),d=e.__c;else{e.__c=d={__v:e,props:h,context:m,setState:xt,forceUpdate:xt,__d:!0,__h:[]};for(var x=0;d.__d&&x++<25;)d.__d=!1,_e&&_e(e),p=y.call(d,h,m);d.__d=!0}if(null!=d.getChildContext&&(t=We({},t,d.getChildContext())),(y.getDerivedStateFromError||d.componentDidCatch)&&P.errorBoundaries){var k="";p=null!=p&&p.type===G&&null==p.key?p.props.children:p;try{return k=V(p,t,n,r,e,i)}catch(o){return y.getDerivedStateFromError&&(d.__s=y.getDerivedStateFromError(o)),d.componentDidCatch&&d.componentDidCatch(o,{}),d.__d&&(p=Tt(e,t),null!=(d=e.__c).getChildContext&&(t=We({},t,d.getChildContext())),k=V(p=null!=p&&p.type===G&&null==p.key?p.props.children:p,t,n,r,e,i)),k}finally{oe&&oe(e),e.__=null,ie&&ie(e)}}}p=null!=p&&p.type===G&&null==p.key&&null==p.props.tpl?p.props.children:p;try{var S=V(p,t,n,r,e,i);return oe&&oe(e),e.__=null,ie&&ie(e),S}catch(o){if(!i||!o||"function"!=typeof o.then)throw o;var O=function o(){try{return V(p,t,n,r,e,i)}catch(a){if(!a||"function"!=typeof a.then)throw a;return a.then((function(){return V(p,t,n,r,e,i)}),(function(){return o()}))}};return o.then((function(){return O()}))}}var E,T="<"+y,j="";for(var C in h){var $=h[C];switch(C){case"children":E=$;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in h)continue;C="for";break;case"className":if("class"in h)continue;C="class";break;case"defaultChecked":C="checked";break;case"defaultSelected":C="selected";break;case"defaultValue":case"value":switch(C="value",y){case"textarea":E=$;continue;case"select":r=$;continue;case"option":r!=$||"selected"in h||(T+=" selected")}break;case"dangerouslySetInnerHTML":j=$&&$.__html;continue;case"style":"object"==typeof $&&($=Dr($));break;case"acceptCharset":C="accept-charset";break;case"httpEquiv":C="http-equiv";break;default:if(mt.test(C))C=C.replace(mt,"$1:$2").toLowerCase();else{if(yt.test(C))continue;"-"!==C[4]&&"draggable"!==C||null==$?n?Rr.test(C)&&(C="panose1"===C?"panose-1":C.replace(/([A-Z])/g,"-$1").toLowerCase()):Ar.test(C)&&(C=C.toLowerCase()):$+=""}}null!=$&&!1!==$&&"function"!=typeof $&&(T=!0===$||""===$?T+" "+C:T+" "+C+'="'+ve($+"")+'"')}if(yt.test(y))throw new Error(y+" is not a valid HTML tag name in "+T+">");if(j||("string"==typeof E?j=ve(E):null!=E&&!1!==E&&!0!==E&&(j=V(E,t,"svg"===y||"foreignObject"!==y&&n,r,e,i))),oe&&oe(e),e.__=null,ie&&ie(e),!j&&Lr.has(y))return T+"/>";var N="</"+y+">",L=T+">";return Array.isArray(j)?[L].concat(j,[N]):"string"!=typeof j?[L,j,N]:L+j+N}var me,L,Ye,St,Lr=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),Ct=Ir,ze=0,$t=[],he=[],U=P,Pt=U.__b,kt=U.__r,Ot=U.diffed,At=U.__c,Rt=U.unmount,Mt=U.__;function Dt(e,t){U.__h&&U.__h(L,e,ze||t),ze=0;var n=L.__H||(L.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:he}),n.__[e]}function It(e){return ze=1,Ur(Ut,e)}function Ur(e,t,n){var r=Dt(me++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Ut(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=L,!L.u)){var o=function(e,t,n){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!i||i.call(this,e,t,n);var a=!1;return o.forEach((function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(a=!0)}})),!(!a&&r.__c.props===e)&&(!i||i.call(this,e,t,n))};L.u=!0;var i=L.shouldComponentUpdate,a=L.componentWillUpdate;L.componentWillUpdate=function(e,t,n){if(this.__e){var r=i;i=void 0,o(e,t,n),i=r}a&&a.call(this,e,t,n)},L.shouldComponentUpdate=o}return r.__N||r.__}function Lt(e,t){var n=Dt(me++,3);!U.__s&&Nr(n.__H,t)&&(n.__=e,n.i=t,L.__H.__h.push(n))}function Hr(){for(var e;e=$t.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ye),e.__H.__h.forEach(Be),e.__H.__h=[]}catch(t){e.__H.__h=[],U.__e(t,e.__v)}}U.__b=function(e){L=null,Pt&&Pt(e)},U.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Mt&&Mt(e,t)},U.__r=function(e){kt&&kt(e),me=0;var t=(L=e.__c).__H;t&&(Ye===L?(t.__h=[],L.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=he,e.__N=e.i=void 0}))):(t.__h.forEach(ye),t.__h.forEach(Be),t.__h=[],me=0)),Ye=L},U.diffed=function(e){Ot&&Ot(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==$t.push(t)&&St===U.requestAnimationFrame||((St=U.requestAnimationFrame)||Fr)(Hr)),t.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==he&&(e.__=e.__V),e.i=void 0,e.__V=he}))),Ye=L=null},U.__c=function(e,t){t.some((function(e){try{e.__h.forEach(ye),e.__h=e.__h.filter((function(e){return!e.__||Be(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],U.__e(n,e.__v)}})),At&&At(e,t)},U.unmount=function(e){Rt&&Rt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{ye(e)}catch(e){t=e}})),n.__H=void 0,t&&U.__e(t,n.__v))};var jt="function"==typeof requestAnimationFrame;function Fr(e){var t,n=function(){clearTimeout(r),jt&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);jt&&(t=requestAnimationFrame(n))}function ye(e){var t=L,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),L=t}function Be(e){var t=L;e.__c=e.__(),L=t}function Nr(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function Ut(e,t){return"function"==typeof t?t(e):t}var _r=gr(ur()),rt=e=>{let[t,n]=It(!1);return Lt((()=>{n(!0)}),[]),Z(G,null,Z("p",null,"Scaffold component. This component contains a hydration example."),t&&Z("p",{className:"p-3 bg-slate-700 text-white inline-flex"},"↪ This gets injected with useEffect on page render.↩"),Z("button",{onClick:()=>{alert(new Date)}}),Z("p",null,"All props:"),Z("pre",null,Z("code",null,JSON.stringify(e,null,2))))};rt.propTypes={_:_r.default.object};var tn=async e=>await Ct(Z(rt,{...e})),rn=tn;