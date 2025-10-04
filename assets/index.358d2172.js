function wC(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function Zm(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function xC(){return Boolean(globalThis==null?void 0:globalThis.document)}function Bv(e){return e.parentElement&&Bv(e.parentElement)?!0:e.hidden}function SC(e){const t=e.getAttribute("contenteditable");return t!=="false"&&t!=null}function CC(e){return Boolean(e.getAttribute("disabled"))===!0||Boolean(e.getAttribute("aria-disabled"))===!0}function kC(e){var t,n;return(n=(t=jv(e))==null?void 0:t.defaultView)!=null?n:window}function jv(e){return Zm(e)?e.ownerDocument:document}function FC(e){return jv(e).activeElement}function TC(e,...t){if(e==null)throw new TypeError("Cannot convert undefined or null to object");const n={...e};for(const r of t)if(r!=null)for(const o in r)!Object.prototype.hasOwnProperty.call(r,o)||(o in n&&delete n[o],n[o]=r[o]);return n}const Gt=e=>e?"":void 0,Vd=e=>e?!0:void 0;function _C(e){return Array.isArray(e)}function Zt(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!_C(e)}function EC(e){const t=e==null?0:e.length;return t?e[t-1]:void 0}function PC(e){const t=parseFloat(e.toString()),n=e.toString().replace(String(t),"");return{unitless:!n,value:t,unit:n}}function lp(e){if(e==null)return e;const{unitless:t}=PC(e);return t||typeof e=="number"?`${e}px`:e}const Vv=(e,t)=>parseInt(e[1],10)>parseInt(t[1],10)?1:-1,Qm=e=>Object.fromEntries(Object.entries(e).sort(Vv));function L0(e){const t=Qm(e);return Object.assign(Object.values(t),t)}function AC(e){const t=Object.keys(Qm(e));return new Set(t)}function D0(e){var n;if(!e)return e;e=(n=lp(e))!=null?n:e;const t=-.02;return typeof e=="number"?`${e+t}`:e.replace(/(\d+\.?\d*)/u,r=>`${parseFloat(r)+t}`)}function qi(e,t){const n=["@media screen"];return e&&n.push("and",`(min-width: ${lp(e)})`),t&&n.push("and",`(max-width: ${lp(t)})`),n.join(" ")}function RC(e){var a;if(!e)return null;e.base=(a=e.base)!=null?a:"0px";const t=L0(e),n=Object.entries(e).sort(Vv).map(([i,s],l,u)=>{var d;let[,c]=(d=u[l+1])!=null?d:[];return c=parseFloat(c)>0?D0(c):void 0,{_minW:D0(s),breakpoint:i,minW:s,maxW:c,maxWQuery:qi(null,c),minWQuery:qi(s),minMaxQuery:qi(s,c)}}),r=AC(e),o=Array.from(r.values());return{keys:r,normalized:t,isResponsive(i){const s=Object.keys(i);return s.length>0&&s.every(l=>r.has(l))},asObject:Qm(e),asArray:L0(e),details:n,get(i){return n.find(s=>s.breakpoint===i)},media:[null,...t.map(i=>qi(i)).slice(1)],toArrayValue(i){if(!Zt(i))throw new Error("toArrayValue: value must be an object");const s=o.map(l=>{var u;return(u=i[l])!=null?u:null});for(;EC(s)===null;)s.pop();return s},toObjectValue(i){if(!Array.isArray(i))throw new Error("toObjectValue: value must be an array");return i.reduce((s,l,u)=>{const c=o[u];return c!=null&&l!=null&&(s[c]=l),s},{})}}}function IC(...e){return function(...n){e.forEach(r=>r==null?void 0:r(...n))}}function qn(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}var El=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qC(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var y={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var el=Symbol.for("react.element"),zC=Symbol.for("react.portal"),OC=Symbol.for("react.fragment"),MC=Symbol.for("react.strict_mode"),$C=Symbol.for("react.profiler"),LC=Symbol.for("react.provider"),DC=Symbol.for("react.context"),NC=Symbol.for("react.forward_ref"),BC=Symbol.for("react.suspense"),jC=Symbol.for("react.memo"),VC=Symbol.for("react.lazy"),N0=Symbol.iterator;function WC(e){return e===null||typeof e!="object"?null:(e=N0&&e[N0]||e["@@iterator"],typeof e=="function"?e:null)}var Wv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hv=Object.assign,Uv={};function ni(e,t,n){this.props=e,this.context=t,this.refs=Uv,this.updater=n||Wv}ni.prototype.isReactComponent={};ni.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ni.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gv(){}Gv.prototype=ni.prototype;function Jm(e,t,n){this.props=e,this.context=t,this.refs=Uv,this.updater=n||Wv}var eh=Jm.prototype=new Gv;eh.constructor=Jm;Hv(eh,ni.prototype);eh.isPureReactComponent=!0;var B0=Array.isArray,Kv=Object.prototype.hasOwnProperty,th={current:null},Yv={key:!0,ref:!0,__self:!0,__source:!0};function Xv(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)Kv.call(t,r)&&!Yv.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:el,type:e,key:a,ref:i,props:o,_owner:th.current}}function HC(e,t){return{$$typeof:el,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function nh(e){return typeof e=="object"&&e!==null&&e.$$typeof===el}function UC(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var j0=/\/+/g;function Wd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?UC(""+e.key):t.toString(36)}function du(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case el:case zC:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Wd(i,0):r,B0(o)?(n="",e!=null&&(n=e.replace(j0,"$&/")+"/"),du(o,t,n,"",function(u){return u})):o!=null&&(nh(o)&&(o=HC(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(j0,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",B0(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+Wd(a,s);i+=du(a,t,n,l,o)}else if(l=WC(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+Wd(a,s++),i+=du(a,t,n,l,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Pl(e,t,n){if(e==null)return e;var r=[],o=0;return du(e,r,"","",function(a){return t.call(n,a,o++)}),r}function GC(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ht={current:null},fu={transition:null},KC={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:fu,ReactCurrentOwner:th};function Zv(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Pl,forEach:function(e,t,n){Pl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Pl(e,function(){t++}),t},toArray:function(e){return Pl(e,function(t){return t})||[]},only:function(e){if(!nh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ee.Component=ni;ee.Fragment=OC;ee.Profiler=$C;ee.PureComponent=Jm;ee.StrictMode=MC;ee.Suspense=BC;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KC;ee.act=Zv;ee.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hv({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=th.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Kv.call(t,l)&&!Yv.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:el,type:e.type,key:o,ref:a,props:r,_owner:i}};ee.createContext=function(e){return e={$$typeof:DC,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:LC,_context:e},e.Consumer=e};ee.createElement=Xv;ee.createFactory=function(e){var t=Xv.bind(null,e);return t.type=e,t};ee.createRef=function(){return{current:null}};ee.forwardRef=function(e){return{$$typeof:NC,render:e}};ee.isValidElement=nh;ee.lazy=function(e){return{$$typeof:VC,_payload:{_status:-1,_result:e},_init:GC}};ee.memo=function(e,t){return{$$typeof:jC,type:e,compare:t===void 0?null:t}};ee.startTransition=function(e){var t=fu.transition;fu.transition={};try{e()}finally{fu.transition=t}};ee.unstable_act=Zv;ee.useCallback=function(e,t){return ht.current.useCallback(e,t)};ee.useContext=function(e){return ht.current.useContext(e)};ee.useDebugValue=function(){};ee.useDeferredValue=function(e){return ht.current.useDeferredValue(e)};ee.useEffect=function(e,t){return ht.current.useEffect(e,t)};ee.useId=function(){return ht.current.useId()};ee.useImperativeHandle=function(e,t,n){return ht.current.useImperativeHandle(e,t,n)};ee.useInsertionEffect=function(e,t){return ht.current.useInsertionEffect(e,t)};ee.useLayoutEffect=function(e,t){return ht.current.useLayoutEffect(e,t)};ee.useMemo=function(e,t){return ht.current.useMemo(e,t)};ee.useReducer=function(e,t,n){return ht.current.useReducer(e,t,n)};ee.useRef=function(e){return ht.current.useRef(e)};ee.useState=function(e){return ht.current.useState(e)};ee.useSyncExternalStore=function(e,t,n){return ht.current.useSyncExternalStore(e,t,n)};ee.useTransition=function(){return ht.current.useTransition()};ee.version="18.3.1";(function(e){e.exports=ee})(y);const ho=qC(y.exports),V0=wC({__proto__:null,default:ho},[y.exports]);function Qv(e){return y.exports.Children.toArray(e).filter(t=>y.exports.isValidElement(t))}function Jv(e){const t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function YC(e,t){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function nt(e={}){const{name:t,strict:n=!0,hookName:r="useContext",providerName:o="Provider",errorMessage:a,defaultValue:i}=e,s=y.exports.createContext(i);s.displayName=t;function l(){var c;const u=y.exports.useContext(s);if(!u&&n){const d=new Error(a!=null?a:YC(r,o));throw d.name="ContextError",(c=Error.captureStackTrace)==null||c.call(Error,d,l),d}return u}return[s.Provider,l,s]}const ge=(...e)=>e.filter(Boolean).join(" "),ew=e=>e.hasAttribute("tabindex"),XC=e=>ew(e)&&e.tabIndex===-1;function tw(e){if(!Zm(e)||Bv(e)||CC(e))return!1;const{localName:t}=e;if(["input","select","textarea","button"].indexOf(t)>=0)return!0;const r={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return t in r?r[t]():SC(e)?!0:ew(e)}function ZC(e){return e?Zm(e)&&tw(e)&&!XC(e):!1}const QC=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],JC=QC.join(),e6=e=>e.offsetWidth>0&&e.offsetHeight>0;function t6(e){const t=Array.from(e.querySelectorAll(JC));return t.unshift(e),t.filter(n=>tw(n)&&e6(n))}function n6(e,t,n,r){const o=typeof t=="string"?t.split("."):[t];for(r=0;r<o.length&&e;r+=1)e=e[o[r]];return e===void 0?n:e}const r6=e=>{const t=new WeakMap;return(r,o,a,i)=>{if(typeof r>"u")return e(r,o,a);t.has(r)||t.set(r,new Map);const s=t.get(r);if(s.has(o))return s.get(o);const l=e(r,o,a,i);return s.set(o,l),l}},nw=r6(n6),o6=e=>e.default||e;function a6(e){const{wasSelected:t,enabled:n,isSelected:r,mode:o="unmount"}=e;return!!(!n||r||o==="keepMounted"&&t)}function rw(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}function i6(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}Object.freeze(["base","sm","md","lg","xl","2xl"]);function rh(e,t){return Array.isArray(e)?e.map(n=>n===null?null:t(n)):Zt(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):e!=null?t(e):null}const s6=e=>typeof e=="function";function gn(e,...t){return s6(e)?e(...t):e}function l6(e,...t){const n=Object.getOwnPropertyDescriptors(e),r=Object.keys(n),o=i=>{const s={};for(let l=0;l<i.length;l++){const u=i[l];n[u]&&(Object.defineProperty(s,u,n[u]),delete n[u])}return s},a=i=>o(Array.isArray(i)?i:r.filter(i));return t.map(a).concat(o(r))}function W0(e,t,n={}){const{stop:r,getKey:o}=n;function a(i,s=[]){var l;if(Zt(i)||Array.isArray(i)){const u={};for(const[c,d]of Object.entries(i)){const f=(l=o==null?void 0:o(c))!=null?l:c,p=[...s,f];if(r!=null&&r(i,p))return t(i,s);u[f]=a(d,p)}return u}return t(i,s)}return a(e)}var up={exports:{}};(function(e,t){var n=200,r="__lodash_hash_undefined__",o=800,a=16,i=9007199254740991,s="[object Arguments]",l="[object Array]",u="[object AsyncFunction]",c="[object Boolean]",d="[object Date]",f="[object Error]",p="[object Function]",v="[object GeneratorFunction]",b="[object Map]",w="[object Number]",g="[object Null]",m="[object Object]",h="[object Proxy]",S="[object RegExp]",k="[object Set]",E="[object String]",F="[object Undefined]",P="[object WeakMap]",I="[object ArrayBuffer]",R="[object DataView]",M="[object Float32Array]",te="[object Float64Array]",K="[object Int8Array]",Y="[object Int16Array]",J="[object Int32Array]",X="[object Uint8Array]",O="[object Uint8ClampedArray]",z="[object Uint16Array]",D="[object Uint32Array]",W=/[\\^$.*+?()[\]{}|]/g,ie=/^\[object .+?Constructor\]$/,le=/^(?:0|[1-9]\d*)$/,B={};B[M]=B[te]=B[K]=B[Y]=B[J]=B[X]=B[O]=B[z]=B[D]=!0,B[s]=B[l]=B[I]=B[c]=B[R]=B[d]=B[f]=B[p]=B[b]=B[w]=B[m]=B[S]=B[k]=B[E]=B[P]=!1;var oe=typeof El=="object"&&El&&El.Object===Object&&El,ve=typeof self=="object"&&self&&self.Object===Object&&self,ue=oe||ve||Function("return this")(),Be=t&&!t.nodeType&&t,$e=Be&&!0&&e&&!e.nodeType&&e,gr=$e&&$e.exports===Be,Xr=gr&&oe.process,yr=function(){try{var C=$e&&$e.require&&$e.require("util").types;return C||Xr&&Xr.binding&&Xr.binding("util")}catch{}}(),Zr=yr&&yr.isTypedArray;function No(C,_,A){switch(A.length){case 0:return C.call(_);case 1:return C.call(_,A[0]);case 2:return C.call(_,A[0],A[1]);case 3:return C.call(_,A[0],A[1],A[2])}return C.apply(_,A)}function ui(C,_){for(var A=-1,$=Array(C);++A<C;)$[A]=_(A);return $}function ci(C){return function(_){return C(_)}}function yt(C,_){return C==null?void 0:C[_]}function an(C,_){return function(A){return C(_(A))}}var Sn=Array.prototype,sn=Function.prototype,lt=Object.prototype,br=ue["__core-js_shared__"],Qr=sn.toString,Vt=lt.hasOwnProperty,Bo=function(){var C=/[^.]+$/.exec(br&&br.keys&&br.keys.IE_PROTO||"");return C?"Symbol(src)_1."+C:""}(),di=lt.toString,xl=Qr.call(Object),Sl=RegExp("^"+Qr.call(Vt).replace(W,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Jr=gr?ue.Buffer:void 0,x0=ue.Symbol,S0=ue.Uint8Array,C0=Jr?Jr.allocUnsafe:void 0,k0=an(Object.getPrototypeOf,Object),F0=Object.create,g9=lt.propertyIsEnumerable,y9=Sn.splice,eo=x0?x0.toStringTag:void 0,Cl=function(){try{var C=Od(Object,"defineProperty");return C({},"",{}),C}catch{}}(),b9=Jr?Jr.isBuffer:void 0,T0=Math.max,v9=Date.now,_0=Od(ue,"Map"),fi=Od(Object,"create"),w9=function(){function C(){}return function(_){if(!no(_))return{};if(F0)return F0(_);C.prototype=_;var A=new C;return C.prototype=void 0,A}}();function to(C){var _=-1,A=C==null?0:C.length;for(this.clear();++_<A;){var $=C[_];this.set($[0],$[1])}}function x9(){this.__data__=fi?fi(null):{},this.size=0}function S9(C){var _=this.has(C)&&delete this.__data__[C];return this.size-=_?1:0,_}function C9(C){var _=this.__data__;if(fi){var A=_[C];return A===r?void 0:A}return Vt.call(_,C)?_[C]:void 0}function k9(C){var _=this.__data__;return fi?_[C]!==void 0:Vt.call(_,C)}function F9(C,_){var A=this.__data__;return this.size+=this.has(C)?0:1,A[C]=fi&&_===void 0?r:_,this}to.prototype.clear=x9,to.prototype.delete=S9,to.prototype.get=C9,to.prototype.has=k9,to.prototype.set=F9;function Gn(C){var _=-1,A=C==null?0:C.length;for(this.clear();++_<A;){var $=C[_];this.set($[0],$[1])}}function T9(){this.__data__=[],this.size=0}function _9(C){var _=this.__data__,A=kl(_,C);if(A<0)return!1;var $=_.length-1;return A==$?_.pop():y9.call(_,A,1),--this.size,!0}function E9(C){var _=this.__data__,A=kl(_,C);return A<0?void 0:_[A][1]}function P9(C){return kl(this.__data__,C)>-1}function A9(C,_){var A=this.__data__,$=kl(A,C);return $<0?(++this.size,A.push([C,_])):A[$][1]=_,this}Gn.prototype.clear=T9,Gn.prototype.delete=_9,Gn.prototype.get=E9,Gn.prototype.has=P9,Gn.prototype.set=A9;function jo(C){var _=-1,A=C==null?0:C.length;for(this.clear();++_<A;){var $=C[_];this.set($[0],$[1])}}function R9(){this.size=0,this.__data__={hash:new to,map:new(_0||Gn),string:new to}}function I9(C){var _=Tl(this,C).delete(C);return this.size-=_?1:0,_}function q9(C){return Tl(this,C).get(C)}function z9(C){return Tl(this,C).has(C)}function O9(C,_){var A=Tl(this,C),$=A.size;return A.set(C,_),this.size+=A.size==$?0:1,this}jo.prototype.clear=R9,jo.prototype.delete=I9,jo.prototype.get=q9,jo.prototype.has=z9,jo.prototype.set=O9;function Vo(C){var _=this.__data__=new Gn(C);this.size=_.size}function M9(){this.__data__=new Gn,this.size=0}function $9(C){var _=this.__data__,A=_.delete(C);return this.size=_.size,A}function L9(C){return this.__data__.get(C)}function D9(C){return this.__data__.has(C)}function N9(C,_){var A=this.__data__;if(A instanceof Gn){var $=A.__data__;if(!_0||$.length<n-1)return $.push([C,_]),this.size=++A.size,this;A=this.__data__=new jo($)}return A.set(C,_),this.size=A.size,this}Vo.prototype.clear=M9,Vo.prototype.delete=$9,Vo.prototype.get=L9,Vo.prototype.has=D9,Vo.prototype.set=N9;function B9(C,_){var A=Ld(C),$=!A&&$d(C),ae=!A&&!$&&I0(C),be=!A&&!$&&!ae&&z0(C),_e=A||$||ae||be,ne=_e?ui(C.length,String):[],Ee=ne.length;for(var Wt in C)(_||Vt.call(C,Wt))&&!(_e&&(Wt=="length"||ae&&(Wt=="offset"||Wt=="parent")||be&&(Wt=="buffer"||Wt=="byteLength"||Wt=="byteOffset")||A0(Wt,Ee)))&&ne.push(Wt);return ne}function qd(C,_,A){(A!==void 0&&!_l(C[_],A)||A===void 0&&!(_ in C))&&zd(C,_,A)}function j9(C,_,A){var $=C[_];(!(Vt.call(C,_)&&_l($,A))||A===void 0&&!(_ in C))&&zd(C,_,A)}function kl(C,_){for(var A=C.length;A--;)if(_l(C[A][0],_))return A;return-1}function zd(C,_,A){_=="__proto__"&&Cl?Cl(C,_,{configurable:!0,enumerable:!0,value:A,writable:!0}):C[_]=A}var V9=nC();function Fl(C){return C==null?C===void 0?F:g:eo&&eo in Object(C)?rC(C):uC(C)}function E0(C){return pi(C)&&Fl(C)==s}function W9(C){if(!no(C)||sC(C))return!1;var _=Nd(C)?Sl:ie;return _.test(pC(C))}function H9(C){return pi(C)&&q0(C.length)&&!!B[Fl(C)]}function U9(C){if(!no(C))return lC(C);var _=R0(C),A=[];for(var $ in C)$=="constructor"&&(_||!Vt.call(C,$))||A.push($);return A}function P0(C,_,A,$,ae){C!==_&&V9(_,function(be,_e){if(ae||(ae=new Vo),no(be))G9(C,_,_e,A,P0,$,ae);else{var ne=$?$(Md(C,_e),be,_e+"",C,_,ae):void 0;ne===void 0&&(ne=be),qd(C,_e,ne)}},O0)}function G9(C,_,A,$,ae,be,_e){var ne=Md(C,A),Ee=Md(_,A),Wt=_e.get(Ee);if(Wt){qd(C,A,Wt);return}var Pt=be?be(ne,Ee,A+"",C,_,_e):void 0,mi=Pt===void 0;if(mi){var Bd=Ld(Ee),jd=!Bd&&I0(Ee),$0=!Bd&&!jd&&z0(Ee);Pt=Ee,Bd||jd||$0?Ld(ne)?Pt=ne:mC(ne)?Pt=J9(ne):jd?(mi=!1,Pt=X9(Ee,!0)):$0?(mi=!1,Pt=Q9(Ee,!0)):Pt=[]:hC(Ee)||$d(Ee)?(Pt=ne,$d(ne)?Pt=gC(ne):(!no(ne)||Nd(ne))&&(Pt=oC(Ee))):mi=!1}mi&&(_e.set(Ee,Pt),ae(Pt,Ee,$,be,_e),_e.delete(Ee)),qd(C,A,Pt)}function K9(C,_){return dC(cC(C,_,M0),C+"")}var Y9=Cl?function(C,_){return Cl(C,"toString",{configurable:!0,enumerable:!1,value:bC(_),writable:!0})}:M0;function X9(C,_){if(_)return C.slice();var A=C.length,$=C0?C0(A):new C.constructor(A);return C.copy($),$}function Z9(C){var _=new C.constructor(C.byteLength);return new S0(_).set(new S0(C)),_}function Q9(C,_){var A=_?Z9(C.buffer):C.buffer;return new C.constructor(A,C.byteOffset,C.length)}function J9(C,_){var A=-1,$=C.length;for(_||(_=Array($));++A<$;)_[A]=C[A];return _}function eC(C,_,A,$){var ae=!A;A||(A={});for(var be=-1,_e=_.length;++be<_e;){var ne=_[be],Ee=$?$(A[ne],C[ne],ne,A,C):void 0;Ee===void 0&&(Ee=C[ne]),ae?zd(A,ne,Ee):j9(A,ne,Ee)}return A}function tC(C){return K9(function(_,A){var $=-1,ae=A.length,be=ae>1?A[ae-1]:void 0,_e=ae>2?A[2]:void 0;for(be=C.length>3&&typeof be=="function"?(ae--,be):void 0,_e&&aC(A[0],A[1],_e)&&(be=ae<3?void 0:be,ae=1),_=Object(_);++$<ae;){var ne=A[$];ne&&C(_,ne,$,be)}return _})}function nC(C){return function(_,A,$){for(var ae=-1,be=Object(_),_e=$(_),ne=_e.length;ne--;){var Ee=_e[C?ne:++ae];if(A(be[Ee],Ee,be)===!1)break}return _}}function Tl(C,_){var A=C.__data__;return iC(_)?A[typeof _=="string"?"string":"hash"]:A.map}function Od(C,_){var A=yt(C,_);return W9(A)?A:void 0}function rC(C){var _=Vt.call(C,eo),A=C[eo];try{C[eo]=void 0;var $=!0}catch{}var ae=di.call(C);return $&&(_?C[eo]=A:delete C[eo]),ae}function oC(C){return typeof C.constructor=="function"&&!R0(C)?w9(k0(C)):{}}function A0(C,_){var A=typeof C;return _=_==null?i:_,!!_&&(A=="number"||A!="symbol"&&le.test(C))&&C>-1&&C%1==0&&C<_}function aC(C,_,A){if(!no(A))return!1;var $=typeof _;return($=="number"?Dd(A)&&A0(_,A.length):$=="string"&&_ in A)?_l(A[_],C):!1}function iC(C){var _=typeof C;return _=="string"||_=="number"||_=="symbol"||_=="boolean"?C!=="__proto__":C===null}function sC(C){return!!Bo&&Bo in C}function R0(C){var _=C&&C.constructor,A=typeof _=="function"&&_.prototype||lt;return C===A}function lC(C){var _=[];if(C!=null)for(var A in Object(C))_.push(A);return _}function uC(C){return di.call(C)}function cC(C,_,A){return _=T0(_===void 0?C.length-1:_,0),function(){for(var $=arguments,ae=-1,be=T0($.length-_,0),_e=Array(be);++ae<be;)_e[ae]=$[_+ae];ae=-1;for(var ne=Array(_+1);++ae<_;)ne[ae]=$[ae];return ne[_]=A(_e),No(C,this,ne)}}function Md(C,_){if(!(_==="constructor"&&typeof C[_]=="function")&&_!="__proto__")return C[_]}var dC=fC(Y9);function fC(C){var _=0,A=0;return function(){var $=v9(),ae=a-($-A);if(A=$,ae>0){if(++_>=o)return arguments[0]}else _=0;return C.apply(void 0,arguments)}}function pC(C){if(C!=null){try{return Qr.call(C)}catch{}try{return C+""}catch{}}return""}function _l(C,_){return C===_||C!==C&&_!==_}var $d=E0(function(){return arguments}())?E0:function(C){return pi(C)&&Vt.call(C,"callee")&&!g9.call(C,"callee")},Ld=Array.isArray;function Dd(C){return C!=null&&q0(C.length)&&!Nd(C)}function mC(C){return pi(C)&&Dd(C)}var I0=b9||vC;function Nd(C){if(!no(C))return!1;var _=Fl(C);return _==p||_==v||_==u||_==h}function q0(C){return typeof C=="number"&&C>-1&&C%1==0&&C<=i}function no(C){var _=typeof C;return C!=null&&(_=="object"||_=="function")}function pi(C){return C!=null&&typeof C=="object"}function hC(C){if(!pi(C)||Fl(C)!=m)return!1;var _=k0(C);if(_===null)return!0;var A=Vt.call(_,"constructor")&&_.constructor;return typeof A=="function"&&A instanceof A&&Qr.call(A)==xl}var z0=Zr?ci(Zr):H9;function gC(C){return eC(C,O0(C))}function O0(C){return Dd(C)?B9(C,!0):U9(C)}var yC=tC(function(C,_,A,$){P0(C,_,A,$)});function bC(C){return function(){return C}}function M0(C){return C}function vC(){return!1}e.exports=yC})(up,up.exports);const zn=up.exports;function gs(e,t=[]){const n=y.exports.useRef(e);return y.exports.useEffect(()=>{n.current=e}),y.exports.useCallback((...r)=>{var o;return(o=n.current)==null?void 0:o.call(n,...r)},t)}function u6(e,t,n,r){const o=gs(n);return y.exports.useEffect(()=>{const a=typeof e=="function"?e():e!=null?e:document;if(!(!n||!a))return a.addEventListener(t,o,r),()=>{a.removeEventListener(t,o,r)}},[t,e,r,o,n]),()=>{const a=typeof e=="function"?e():e!=null?e:document;a==null||a.removeEventListener(t,o,r)}}function c6(e){const{isOpen:t,ref:n}=e,[r,o]=y.exports.useState(t),[a,i]=y.exports.useState(!1);return y.exports.useEffect(()=>{a||(o(t),i(!0))},[t,a,r]),u6(()=>n.current,"animationend",()=>{o(t)}),{present:!(t?!1:!r),onComplete(){var c;const l=kC(n.current),u=new l.CustomEvent("animationend",{bubbles:!0});(c=n.current)==null||c.dispatchEvent(u)}}}function ow(e={}){const{onClose:t,onOpen:n,isOpen:r,id:o}=e,a=gs(n),i=gs(t),[s,l]=y.exports.useState(e.defaultIsOpen||!1),u=r!==void 0?r:s,c=r!==void 0,d=y.exports.useId(),f=o!=null?o:`disclosure-${d}`,p=y.exports.useCallback(()=>{c||l(!1),i==null||i()},[c,i]),v=y.exports.useCallback(()=>{c||l(!0),a==null||a()},[c,a]),b=y.exports.useCallback(()=>{u?p():v()},[u,v,p]);function w(m={}){return{...m,"aria-expanded":u,"aria-controls":f,onClick(h){var S;(S=m.onClick)==null||S.call(m,h),b()}}}function g(m={}){return{...m,hidden:!u,id:f}}return{isOpen:u,onOpen:v,onClose:p,onToggle:b,isControlled:c,getButtonProps:w,getDisclosureProps:g}}const Wu=Boolean(globalThis==null?void 0:globalThis.document)?y.exports.useLayoutEffect:y.exports.useEffect,ys=(e,t)=>{const n=y.exports.useRef(!1),r=y.exports.useRef(!1);y.exports.useEffect(()=>{if(n.current&&r.current)return e();r.current=!0},t),y.exports.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[])};function d6(e){const t=e.current;if(!t)return!1;const n=FC(t);return!n||t.contains(n)?!1:!!ZC(n)}function f6(e,t){const{shouldFocus:n,visible:r,focusRef:o}=t,a=n&&!r;ys(()=>{if(!a||d6(e))return;const i=(o==null?void 0:o.current)||e.current;let s;if(i)return s=requestAnimationFrame(()=>{i.focus({preventScroll:!0})}),()=>{cancelAnimationFrame(s)}},[a,e,o])}function p6(e,t){const n=y.exports.useId();return y.exports.useMemo(()=>e||[t,n].filter(Boolean).join("-"),[e,t,n])}function m6(e,...t){const n=p6(e);return y.exports.useMemo(()=>t.map(r=>`${r}-${n}`),[n,t])}function h6(e,t){if(e!=null){if(typeof e=="function"){e(t);return}try{e.current=t}catch{throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function en(...e){return t=>{e.forEach(n=>{h6(n,t)})}}function g6(...e){return y.exports.useMemo(()=>en(...e),e)}function y6(e){const{ref:t,handler:n,enabled:r=!0}=e,o=gs(n),i=y.exports.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}).current;y.exports.useEffect(()=>{if(!r)return;const s=d=>{Hd(d,t)&&(i.isPointerDown=!0)},l=d=>{if(i.ignoreEmulatedMouseEvents){i.ignoreEmulatedMouseEvents=!1;return}i.isPointerDown&&n&&Hd(d,t)&&(i.isPointerDown=!1,o(d))},u=d=>{i.ignoreEmulatedMouseEvents=!0,n&&i.isPointerDown&&Hd(d,t)&&(i.isPointerDown=!1,o(d))},c=aw(t.current);return c.addEventListener("mousedown",s,!0),c.addEventListener("mouseup",l,!0),c.addEventListener("touchstart",s,!0),c.addEventListener("touchend",u,!0),()=>{c.removeEventListener("mousedown",s,!0),c.removeEventListener("mouseup",l,!0),c.removeEventListener("touchstart",s,!0),c.removeEventListener("touchend",u,!0)}},[n,t,o,i,r])}function Hd(e,t){var r,o,a;const n=(o=(r=e.composedPath)==null?void 0:r.call(e)[0])!=null?o:e.target;return n&&!aw(n).contains(n)?!1:!((a=t.current)!=null&&a.contains(n))}function aw(e){var t;return(t=e==null?void 0:e.ownerDocument)!=null?t:document}function b6(e,t){const n=gs(e);y.exports.useEffect(()=>{if(t==null)return;let r=null;return r=window.setTimeout(()=>{n()},t),()=>{r&&window.clearTimeout(r)}},[t,n])}const We={open:(e,t)=>`${e}[data-open], ${e}[open], ${e}[data-state=open] ${t}`,closed:(e,t)=>`${e}[data-closed], ${e}[data-state=closed] ${t}`,hover:(e,t)=>`${e}:hover ${t}, ${e}[data-hover] ${t}`,focus:(e,t)=>`${e}:focus ${t}, ${e}[data-focus] ${t}`,focusVisible:(e,t)=>`${e}:focus-visible ${t}`,focusWithin:(e,t)=>`${e}:focus-within ${t}`,active:(e,t)=>`${e}:active ${t}, ${e}[data-active] ${t}`,disabled:(e,t)=>`${e}:disabled ${t}, ${e}[data-disabled] ${t}`,invalid:(e,t)=>`${e}:invalid ${t}, ${e}[data-invalid] ${t}`,checked:(e,t)=>`${e}:checked ${t}, ${e}[data-checked] ${t}`,indeterminate:(e,t)=>`${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,readOnly:(e,t)=>`${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,expanded:(e,t)=>`${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,placeholderShown:(e,t)=>`${e}:placeholder-shown ${t}`},Cn=e=>iw(t=>e(t,"&"),"[role=group]","[data-group]",".group"),Kn=e=>iw(t=>e(t,"~ &"),"[data-peer]",".peer"),iw=(e,...t)=>t.map(e).join(", "),ba={_hover:"&:hover, &[data-hover]",_active:"&:active, &[data-active]",_focus:"&:focus, &[data-focus]",_highlighted:"&[data-highlighted]",_focusWithin:"&:focus-within, &[data-focus-within]",_focusVisible:"&:focus-visible, &[data-focus-visible]",_disabled:"&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",_readOnly:"&[aria-readonly=true], &[readonly], &[data-readonly]",_before:"&::before",_after:"&::after",_empty:"&:empty, &[data-empty]",_expanded:"&[aria-expanded=true], &[data-expanded], &[data-state=expanded]",_checked:"&[aria-checked=true], &[data-checked], &[data-state=checked]",_grabbed:"&[aria-grabbed=true], &[data-grabbed]",_pressed:"&[aria-pressed=true], &[data-pressed]",_invalid:"&[aria-invalid=true], &[data-invalid]",_valid:"&[data-valid], &[data-state=valid]",_loading:"&[data-loading], &[aria-busy=true]",_selected:"&[aria-selected=true], &[data-selected]",_hidden:"&[hidden], &[data-hidden]",_autofill:"&:-webkit-autofill",_even:"&:nth-of-type(even)",_odd:"&:nth-of-type(odd)",_first:"&:first-of-type",_firstLetter:"&::first-letter",_last:"&:last-of-type",_notFirst:"&:not(:first-of-type)",_notLast:"&:not(:last-of-type)",_visited:"&:visited",_activeLink:"&[aria-current=page]",_activeStep:"&[aria-current=step]",_indeterminate:"&:indeterminate, &[aria-checked=mixed], &[data-indeterminate], &[data-state=indeterminate]",_groupOpen:Cn(We.open),_groupClosed:Cn(We.closed),_groupHover:Cn(We.hover),_peerHover:Kn(We.hover),_groupFocus:Cn(We.focus),_peerFocus:Kn(We.focus),_groupFocusVisible:Cn(We.focusVisible),_peerFocusVisible:Kn(We.focusVisible),_groupActive:Cn(We.active),_peerActive:Kn(We.active),_groupDisabled:Cn(We.disabled),_peerDisabled:Kn(We.disabled),_groupInvalid:Cn(We.invalid),_peerInvalid:Kn(We.invalid),_groupChecked:Cn(We.checked),_peerChecked:Kn(We.checked),_groupFocusWithin:Cn(We.focusWithin),_peerFocusWithin:Kn(We.focusWithin),_peerPlaceholderShown:Kn(We.placeholderShown),_placeholder:"&::placeholder, &[data-placeholder]",_placeholderShown:"&:placeholder-shown, &[data-placeholder-shown]",_fullScreen:"&:fullscreen, &[data-fullscreen]",_selection:"&::selection",_rtl:"[dir=rtl] &, &[dir=rtl]",_ltr:"[dir=ltr] &, &[dir=ltr]",_mediaDark:"@media (prefers-color-scheme: dark)",_mediaReduceMotion:"@media (prefers-reduced-motion: reduce)",_dark:".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",_light:".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",_horizontal:"&[data-orientation=horizontal]",_vertical:"&[data-orientation=vertical]",_open:"&[data-open], &[open], &[data-state=open]",_closed:"&[data-closed], &[data-state=closed]",_complete:"&[data-complete]",_incomplete:"&[data-incomplete]",_current:"&[data-current]"},sw=Object.keys(ba),v6=e=>/!(important)?$/.test(e),H0=e=>typeof e=="string"?e.replace(/!(important)?$/,"").trim():e,w6=(e,t)=>n=>{const r=String(t),o=v6(r),a=H0(r),i=e?`${e}.${a}`:a;let s=Zt(n.__cssMap)&&i in n.__cssMap?n.__cssMap[i].varRef:t;return s=H0(s),o?`${s} !important`:s};function oh(e){const{scale:t,transform:n,compose:r}=e;return(a,i)=>{var u;const s=w6(t,a)(i);let l=(u=n==null?void 0:n(s,i))!=null?u:s;return r&&(l=r(l,i)),l}}const Al=(...e)=>t=>e.reduce((n,r)=>r(n),t);function Ht(e,t){return n=>{const r={property:n,scale:e};return r.transform=oh({scale:e,transform:t}),r}}const x6=({rtl:e,ltr:t})=>n=>n.direction==="rtl"?e:t;function S6(e){const{property:t,scale:n,transform:r}=e;return{scale:n,property:x6(t),transform:n?oh({scale:n,compose:r}):r}}const lw=["rotate(var(--chakra-rotate, 0))","scaleX(var(--chakra-scale-x, 1))","scaleY(var(--chakra-scale-y, 1))","skewX(var(--chakra-skew-x, 0))","skewY(var(--chakra-skew-y, 0))"];function C6(){return["translateX(var(--chakra-translate-x, 0))","translateY(var(--chakra-translate-y, 0))",...lw].join(" ")}function k6(){return["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",...lw].join(" ")}const F6={"--chakra-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-sepia":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-drop-shadow":"var(--chakra-empty,/*!*/ /*!*/)",filter:["var(--chakra-blur)","var(--chakra-brightness)","var(--chakra-contrast)","var(--chakra-grayscale)","var(--chakra-hue-rotate)","var(--chakra-invert)","var(--chakra-saturate)","var(--chakra-sepia)","var(--chakra-drop-shadow)"].join(" ")},T6={backdropFilter:["var(--chakra-backdrop-blur)","var(--chakra-backdrop-brightness)","var(--chakra-backdrop-contrast)","var(--chakra-backdrop-grayscale)","var(--chakra-backdrop-hue-rotate)","var(--chakra-backdrop-invert)","var(--chakra-backdrop-opacity)","var(--chakra-backdrop-saturate)","var(--chakra-backdrop-sepia)"].join(" "),"--chakra-backdrop-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-opacity":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-sepia":"var(--chakra-empty,/*!*/ /*!*/)"};function _6(e){return{"--chakra-ring-offset-shadow":"var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)","--chakra-ring-shadow":"var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)","--chakra-ring-width":e,boxShadow:["var(--chakra-ring-offset-shadow)","var(--chakra-ring-shadow)","var(--chakra-shadow, 0 0 #0000)"].join(", ")}}const E6={"row-reverse":{space:"--chakra-space-x-reverse",divide:"--chakra-divide-x-reverse"},"column-reverse":{space:"--chakra-space-y-reverse",divide:"--chakra-divide-y-reverse"}},cp={"to-t":"to top","to-tr":"to top right","to-r":"to right","to-br":"to bottom right","to-b":"to bottom","to-bl":"to bottom left","to-l":"to left","to-tl":"to top left"},P6=new Set(Object.values(cp)),dp=new Set(["none","-moz-initial","inherit","initial","revert","unset"]),A6=e=>e.trim();function R6(e,t){if(e==null||dp.has(e))return e;if(!(fp(e)||dp.has(e)))return`url('${e}')`;const o=/(^[a-z-A-Z]+)\((.*)\)/g.exec(e),a=o==null?void 0:o[1],i=o==null?void 0:o[2];if(!a||!i)return e;const s=a.includes("-gradient")?a:`${a}-gradient`,[l,...u]=i.split(",").map(A6).filter(Boolean);if((u==null?void 0:u.length)===0)return e;const c=l in cp?cp[l]:l;u.unshift(c);const d=u.map(f=>{if(P6.has(f))return f;const p=f.indexOf(" "),[v,b]=p!==-1?[f.substr(0,p),f.substr(p+1)]:[f],w=fp(b)?b:b&&b.split(" "),g=`colors.${v}`,m=g in t.__cssMap?t.__cssMap[g].varRef:v;return w?[m,...Array.isArray(w)?w:[w]].join(" "):m});return`${s}(${d.join(", ")})`}const fp=e=>typeof e=="string"&&e.includes("(")&&e.includes(")"),I6=(e,t)=>R6(e,t!=null?t:{});function q6(e){return/^var\(--.+\)$/.test(e)}const z6=e=>{const t=parseFloat(e.toString()),n=e.toString().replace(String(t),"");return{unitless:!n,value:t,unit:n}},kn=e=>t=>`${e}(${t})`,re={filter(e){return e!=="auto"?e:F6},backdropFilter(e){return e!=="auto"?e:T6},ring(e){return _6(re.px(e))},bgClip(e){return e==="text"?{color:"transparent",backgroundClip:"text"}:{backgroundClip:e}},transform(e){return e==="auto"?C6():e==="auto-gpu"?k6():e},vh(e){return e==="$100vh"?"var(--chakra-vh)":e},px(e){if(e==null)return e;const{unitless:t}=z6(e);return t||typeof e=="number"?`${e}px`:e},fraction(e){return typeof e!="number"||e>1?e:`${e*100}%`},float(e,t){const n={left:"right",right:"left"};return t.direction==="rtl"?n[e]:e},degree(e){if(q6(e)||e==null)return e;const t=typeof e=="string"&&!e.endsWith("deg");return typeof e=="number"||t?`${e}deg`:e},gradient:I6,blur:kn("blur"),opacity:kn("opacity"),brightness:kn("brightness"),contrast:kn("contrast"),dropShadow:kn("drop-shadow"),grayscale:kn("grayscale"),hueRotate:e=>kn("hue-rotate")(re.degree(e)),invert:kn("invert"),saturate:kn("saturate"),sepia:kn("sepia"),bgImage(e){return e==null||fp(e)||dp.has(e)?e:`url(${e})`},outline(e){const t=String(e)==="0"||String(e)==="none";return e!==null&&t?{outline:"2px solid transparent",outlineOffset:"2px"}:{outline:e}},flexDirection(e){var o;const{space:t,divide:n}=(o=E6[e])!=null?o:{},r={flexDirection:e};return t&&(r[t]=1),n&&(r[n]=1),r}},T={borderWidths:Ht("borderWidths"),borderStyles:Ht("borderStyles"),colors:Ht("colors"),borders:Ht("borders"),gradients:Ht("gradients",re.gradient),radii:Ht("radii",re.px),space:Ht("space",Al(re.vh,re.px)),spaceT:Ht("space",Al(re.vh,re.px)),degreeT(e){return{property:e,transform:re.degree}},prop(e,t,n){return{property:e,scale:t,...t&&{transform:oh({scale:t,transform:n})}}},propT(e,t){return{property:e,transform:t}},sizes:Ht("sizes",Al(re.vh,re.px)),sizesT:Ht("sizes",Al(re.vh,re.fraction)),shadows:Ht("shadows"),logical:S6,blur:Ht("blur",re.blur)},pu={background:T.colors("background"),backgroundColor:T.colors("backgroundColor"),backgroundImage:T.gradients("backgroundImage"),backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundAttachment:!0,backgroundClip:{transform:re.bgClip},bgSize:T.prop("backgroundSize"),bgPosition:T.prop("backgroundPosition"),bg:T.colors("background"),bgColor:T.colors("backgroundColor"),bgPos:T.prop("backgroundPosition"),bgRepeat:T.prop("backgroundRepeat"),bgAttachment:T.prop("backgroundAttachment"),bgGradient:T.gradients("backgroundImage"),bgClip:{transform:re.bgClip}};Object.assign(pu,{bgImage:pu.backgroundImage,bgImg:pu.backgroundImage});const ce={border:T.borders("border"),borderWidth:T.borderWidths("borderWidth"),borderStyle:T.borderStyles("borderStyle"),borderColor:T.colors("borderColor"),borderRadius:T.radii("borderRadius"),borderTop:T.borders("borderTop"),borderBlockStart:T.borders("borderBlockStart"),borderTopLeftRadius:T.radii("borderTopLeftRadius"),borderStartStartRadius:T.logical({scale:"radii",property:{ltr:"borderTopLeftRadius",rtl:"borderTopRightRadius"}}),borderEndStartRadius:T.logical({scale:"radii",property:{ltr:"borderBottomLeftRadius",rtl:"borderBottomRightRadius"}}),borderTopRightRadius:T.radii("borderTopRightRadius"),borderStartEndRadius:T.logical({scale:"radii",property:{ltr:"borderTopRightRadius",rtl:"borderTopLeftRadius"}}),borderEndEndRadius:T.logical({scale:"radii",property:{ltr:"borderBottomRightRadius",rtl:"borderBottomLeftRadius"}}),borderRight:T.borders("borderRight"),borderInlineEnd:T.borders("borderInlineEnd"),borderBottom:T.borders("borderBottom"),borderBlockEnd:T.borders("borderBlockEnd"),borderBottomLeftRadius:T.radii("borderBottomLeftRadius"),borderBottomRightRadius:T.radii("borderBottomRightRadius"),borderLeft:T.borders("borderLeft"),borderInlineStart:{property:"borderInlineStart",scale:"borders"},borderInlineStartRadius:T.logical({scale:"radii",property:{ltr:["borderTopLeftRadius","borderBottomLeftRadius"],rtl:["borderTopRightRadius","borderBottomRightRadius"]}}),borderInlineEndRadius:T.logical({scale:"radii",property:{ltr:["borderTopRightRadius","borderBottomRightRadius"],rtl:["borderTopLeftRadius","borderBottomLeftRadius"]}}),borderX:T.borders(["borderLeft","borderRight"]),borderInline:T.borders("borderInline"),borderY:T.borders(["borderTop","borderBottom"]),borderBlock:T.borders("borderBlock"),borderTopWidth:T.borderWidths("borderTopWidth"),borderBlockStartWidth:T.borderWidths("borderBlockStartWidth"),borderTopColor:T.colors("borderTopColor"),borderBlockStartColor:T.colors("borderBlockStartColor"),borderTopStyle:T.borderStyles("borderTopStyle"),borderBlockStartStyle:T.borderStyles("borderBlockStartStyle"),borderBottomWidth:T.borderWidths("borderBottomWidth"),borderBlockEndWidth:T.borderWidths("borderBlockEndWidth"),borderBottomColor:T.colors("borderBottomColor"),borderBlockEndColor:T.colors("borderBlockEndColor"),borderBottomStyle:T.borderStyles("borderBottomStyle"),borderBlockEndStyle:T.borderStyles("borderBlockEndStyle"),borderLeftWidth:T.borderWidths("borderLeftWidth"),borderInlineStartWidth:T.borderWidths("borderInlineStartWidth"),borderLeftColor:T.colors("borderLeftColor"),borderInlineStartColor:T.colors("borderInlineStartColor"),borderLeftStyle:T.borderStyles("borderLeftStyle"),borderInlineStartStyle:T.borderStyles("borderInlineStartStyle"),borderRightWidth:T.borderWidths("borderRightWidth"),borderInlineEndWidth:T.borderWidths("borderInlineEndWidth"),borderRightColor:T.colors("borderRightColor"),borderInlineEndColor:T.colors("borderInlineEndColor"),borderRightStyle:T.borderStyles("borderRightStyle"),borderInlineEndStyle:T.borderStyles("borderInlineEndStyle"),borderTopRadius:T.radii(["borderTopLeftRadius","borderTopRightRadius"]),borderBottomRadius:T.radii(["borderBottomLeftRadius","borderBottomRightRadius"]),borderLeftRadius:T.radii(["borderTopLeftRadius","borderBottomLeftRadius"]),borderRightRadius:T.radii(["borderTopRightRadius","borderBottomRightRadius"])};Object.assign(ce,{rounded:ce.borderRadius,roundedTop:ce.borderTopRadius,roundedTopLeft:ce.borderTopLeftRadius,roundedTopRight:ce.borderTopRightRadius,roundedTopStart:ce.borderStartStartRadius,roundedTopEnd:ce.borderStartEndRadius,roundedBottom:ce.borderBottomRadius,roundedBottomLeft:ce.borderBottomLeftRadius,roundedBottomRight:ce.borderBottomRightRadius,roundedBottomStart:ce.borderEndStartRadius,roundedBottomEnd:ce.borderEndEndRadius,roundedLeft:ce.borderLeftRadius,roundedRight:ce.borderRightRadius,roundedStart:ce.borderInlineStartRadius,roundedEnd:ce.borderInlineEndRadius,borderStart:ce.borderInlineStart,borderEnd:ce.borderInlineEnd,borderTopStartRadius:ce.borderStartStartRadius,borderTopEndRadius:ce.borderStartEndRadius,borderBottomStartRadius:ce.borderEndStartRadius,borderBottomEndRadius:ce.borderEndEndRadius,borderStartRadius:ce.borderInlineStartRadius,borderEndRadius:ce.borderInlineEndRadius,borderStartWidth:ce.borderInlineStartWidth,borderEndWidth:ce.borderInlineEndWidth,borderStartColor:ce.borderInlineStartColor,borderEndColor:ce.borderInlineEndColor,borderStartStyle:ce.borderInlineStartStyle,borderEndStyle:ce.borderInlineEndStyle});const O6={color:T.colors("color"),textColor:T.colors("color"),fill:T.colors("fill"),stroke:T.colors("stroke"),accentColor:T.colors("accentColor"),textFillColor:T.colors("textFillColor")},Hu={alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:{transform:re.flexDirection},flex:!0,flexFlow:!0,flexGrow:!0,flexShrink:!0,flexBasis:T.sizes("flexBasis"),justifySelf:!0,alignSelf:!0,order:!0,placeItems:!0,placeContent:!0,placeSelf:!0,gap:T.space("gap"),rowGap:T.space("rowGap"),columnGap:T.space("columnGap")};Object.assign(Hu,{flexDir:Hu.flexDirection});const Ut={width:T.sizesT("width"),inlineSize:T.sizesT("inlineSize"),height:T.sizes("height"),blockSize:T.sizes("blockSize"),boxSize:T.sizes(["width","height"]),minWidth:T.sizes("minWidth"),minInlineSize:T.sizes("minInlineSize"),minHeight:T.sizes("minHeight"),minBlockSize:T.sizes("minBlockSize"),maxWidth:T.sizes("maxWidth"),maxInlineSize:T.sizes("maxInlineSize"),maxHeight:T.sizes("maxHeight"),maxBlockSize:T.sizes("maxBlockSize"),overflow:!0,overflowX:!0,overflowY:!0,overscrollBehavior:!0,overscrollBehaviorX:!0,overscrollBehaviorY:!0,display:!0,aspectRatio:!0,hideFrom:{scale:"breakpoints",transform:(e,t)=>{var o,a,i;return{[`@media screen and (min-width: ${(i=(a=(o=t.__breakpoints)==null?void 0:o.get(e))==null?void 0:a.minW)!=null?i:e})`]:{display:"none"}}}},hideBelow:{scale:"breakpoints",transform:(e,t)=>{var o,a,i;return{[`@media screen and (max-width: ${(i=(a=(o=t.__breakpoints)==null?void 0:o.get(e))==null?void 0:a._minW)!=null?i:e})`]:{display:"none"}}}},verticalAlign:!0,boxSizing:!0,boxDecorationBreak:!0,float:T.propT("float",re.float),objectFit:!0,objectPosition:!0,visibility:!0,isolation:!0};Object.assign(Ut,{w:Ut.width,h:Ut.height,minW:Ut.minWidth,maxW:Ut.maxWidth,minH:Ut.minHeight,maxH:Ut.maxHeight,overscroll:Ut.overscrollBehavior,overscrollX:Ut.overscrollBehaviorX,overscrollY:Ut.overscrollBehaviorY});const M6={filter:{transform:re.filter},blur:T.blur("--chakra-blur"),brightness:T.propT("--chakra-brightness",re.brightness),contrast:T.propT("--chakra-contrast",re.contrast),hueRotate:T.propT("--chakra-hue-rotate",re.hueRotate),invert:T.propT("--chakra-invert",re.invert),saturate:T.propT("--chakra-saturate",re.saturate),dropShadow:T.propT("--chakra-drop-shadow",re.dropShadow),backdropFilter:{transform:re.backdropFilter},backdropBlur:T.blur("--chakra-backdrop-blur"),backdropBrightness:T.propT("--chakra-backdrop-brightness",re.brightness),backdropContrast:T.propT("--chakra-backdrop-contrast",re.contrast),backdropHueRotate:T.propT("--chakra-backdrop-hue-rotate",re.hueRotate),backdropInvert:T.propT("--chakra-backdrop-invert",re.invert),backdropSaturate:T.propT("--chakra-backdrop-saturate",re.saturate)},$6={ring:{transform:re.ring},ringColor:T.colors("--chakra-ring-color"),ringOffset:T.prop("--chakra-ring-offset-width"),ringOffsetColor:T.colors("--chakra-ring-offset-color"),ringInset:T.prop("--chakra-ring-inset")},L6={appearance:!0,cursor:!0,resize:!0,userSelect:!0,pointerEvents:!0,outline:{transform:re.outline},outlineOffset:!0,outlineColor:T.colors("outlineColor")},uw={gridGap:T.space("gridGap"),gridColumnGap:T.space("gridColumnGap"),gridRowGap:T.space("gridRowGap"),gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridColumnStart:!0,gridColumnEnd:!0,gridRowStart:!0,gridRowEnd:!0,gridAutoRows:!0,gridTemplate:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0};function D6(e,t,n,r){const o=typeof t=="string"?t.split("."):[t];for(r=0;r<o.length&&e;r+=1)e=e[o[r]];return e===void 0?n:e}const N6=e=>{const t=new WeakMap;return(r,o,a,i)=>{if(typeof r>"u")return e(r,o,a);t.has(r)||t.set(r,new Map);const s=t.get(r);if(s.has(o))return s.get(o);const l=e(r,o,a,i);return s.set(o,l),l}},B6=N6(D6),j6={border:"0px",clip:"rect(0, 0, 0, 0)",width:"1px",height:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},V6={position:"static",width:"auto",height:"auto",clip:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal"},Ud=(e,t,n)=>{const r={},o=B6(e,t,{});for(const a in o)a in n&&n[a]!=null||(r[a]=o[a]);return r},W6={srOnly:{transform(e){return e===!0?j6:e==="focusable"?V6:{}}},layerStyle:{processResult:!0,transform:(e,t,n)=>Ud(t,`layerStyles.${e}`,n)},textStyle:{processResult:!0,transform:(e,t,n)=>Ud(t,`textStyles.${e}`,n)},apply:{processResult:!0,transform:(e,t,n)=>Ud(t,e,n)}},Wi={position:!0,pos:T.prop("position"),zIndex:T.prop("zIndex","zIndices"),inset:T.spaceT("inset"),insetX:T.spaceT(["left","right"]),insetInline:T.spaceT("insetInline"),insetY:T.spaceT(["top","bottom"]),insetBlock:T.spaceT("insetBlock"),top:T.spaceT("top"),insetBlockStart:T.spaceT("insetBlockStart"),bottom:T.spaceT("bottom"),insetBlockEnd:T.spaceT("insetBlockEnd"),left:T.spaceT("left"),insetInlineStart:T.logical({scale:"space",property:{ltr:"left",rtl:"right"}}),right:T.spaceT("right"),insetInlineEnd:T.logical({scale:"space",property:{ltr:"right",rtl:"left"}})};Object.assign(Wi,{insetStart:Wi.insetInlineStart,insetEnd:Wi.insetInlineEnd});const pp={boxShadow:T.shadows("boxShadow"),mixBlendMode:!0,blendMode:T.prop("mixBlendMode"),backgroundBlendMode:!0,bgBlendMode:T.prop("backgroundBlendMode"),opacity:!0};Object.assign(pp,{shadow:pp.boxShadow});const ke={margin:T.spaceT("margin"),marginTop:T.spaceT("marginTop"),marginBlockStart:T.spaceT("marginBlockStart"),marginRight:T.spaceT("marginRight"),marginInlineEnd:T.spaceT("marginInlineEnd"),marginBottom:T.spaceT("marginBottom"),marginBlockEnd:T.spaceT("marginBlockEnd"),marginLeft:T.spaceT("marginLeft"),marginInlineStart:T.spaceT("marginInlineStart"),marginX:T.spaceT(["marginInlineStart","marginInlineEnd"]),marginInline:T.spaceT("marginInline"),marginY:T.spaceT(["marginTop","marginBottom"]),marginBlock:T.spaceT("marginBlock"),padding:T.space("padding"),paddingTop:T.space("paddingTop"),paddingBlockStart:T.space("paddingBlockStart"),paddingRight:T.space("paddingRight"),paddingBottom:T.space("paddingBottom"),paddingBlockEnd:T.space("paddingBlockEnd"),paddingLeft:T.space("paddingLeft"),paddingInlineStart:T.space("paddingInlineStart"),paddingInlineEnd:T.space("paddingInlineEnd"),paddingX:T.space(["paddingInlineStart","paddingInlineEnd"]),paddingInline:T.space("paddingInline"),paddingY:T.space(["paddingTop","paddingBottom"]),paddingBlock:T.space("paddingBlock")};Object.assign(ke,{m:ke.margin,mt:ke.marginTop,mr:ke.marginRight,me:ke.marginInlineEnd,marginEnd:ke.marginInlineEnd,mb:ke.marginBottom,ml:ke.marginLeft,ms:ke.marginInlineStart,marginStart:ke.marginInlineStart,mx:ke.marginX,my:ke.marginY,p:ke.padding,pt:ke.paddingTop,py:ke.paddingY,px:ke.paddingX,pb:ke.paddingBottom,pl:ke.paddingLeft,ps:ke.paddingInlineStart,paddingStart:ke.paddingInlineStart,pr:ke.paddingRight,pe:ke.paddingInlineEnd,paddingEnd:ke.paddingInlineEnd});const H6={scrollBehavior:!0,scrollSnapAlign:!0,scrollSnapStop:!0,scrollSnapType:!0,scrollMargin:T.spaceT("scrollMargin"),scrollMarginTop:T.spaceT("scrollMarginTop"),scrollMarginBottom:T.spaceT("scrollMarginBottom"),scrollMarginLeft:T.spaceT("scrollMarginLeft"),scrollMarginRight:T.spaceT("scrollMarginRight"),scrollMarginX:T.spaceT(["scrollMarginLeft","scrollMarginRight"]),scrollMarginY:T.spaceT(["scrollMarginTop","scrollMarginBottom"]),scrollPadding:T.spaceT("scrollPadding"),scrollPaddingTop:T.spaceT("scrollPaddingTop"),scrollPaddingBottom:T.spaceT("scrollPaddingBottom"),scrollPaddingLeft:T.spaceT("scrollPaddingLeft"),scrollPaddingRight:T.spaceT("scrollPaddingRight"),scrollPaddingX:T.spaceT(["scrollPaddingLeft","scrollPaddingRight"]),scrollPaddingY:T.spaceT(["scrollPaddingTop","scrollPaddingBottom"])},U6={fontFamily:T.prop("fontFamily","fonts"),fontSize:T.prop("fontSize","fontSizes",re.px),fontWeight:T.prop("fontWeight","fontWeights"),lineHeight:T.prop("lineHeight","lineHeights"),letterSpacing:T.prop("letterSpacing","letterSpacings"),textAlign:!0,fontStyle:!0,textIndent:!0,wordBreak:!0,overflowWrap:!0,textOverflow:!0,textTransform:!0,whiteSpace:!0,isTruncated:{transform(e){if(e===!0)return{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}},noOfLines:{static:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"var(--chakra-line-clamp)"},property:"--chakra-line-clamp"}},G6={textDecorationColor:T.colors("textDecorationColor"),textDecoration:!0,textDecor:{property:"textDecoration"},textDecorationLine:!0,textDecorationStyle:!0,textDecorationThickness:!0,textUnderlineOffset:!0,textShadow:T.shadows("textShadow")},K6={clipPath:!0,transform:T.propT("transform",re.transform),transformOrigin:!0,translateX:T.spaceT("--chakra-translate-x"),translateY:T.spaceT("--chakra-translate-y"),skewX:T.degreeT("--chakra-skew-x"),skewY:T.degreeT("--chakra-skew-y"),scaleX:T.prop("--chakra-scale-x"),scaleY:T.prop("--chakra-scale-y"),scale:T.prop(["--chakra-scale-x","--chakra-scale-y"]),rotate:T.degreeT("--chakra-rotate")},Y6={listStyleType:!0,listStylePosition:!0,listStylePos:T.prop("listStylePosition"),listStyleImage:!0,listStyleImg:T.prop("listStyleImage")},X6={transition:!0,transitionDelay:!0,animation:!0,willChange:!0,transitionDuration:T.prop("transitionDuration","transition.duration"),transitionProperty:T.prop("transitionProperty","transition.property"),transitionTimingFunction:T.prop("transitionTimingFunction","transition.easing")},ah=zn({},pu,ce,O6,Hu,Ut,M6,$6,L6,uw,W6,Wi,pp,ke,H6,U6,G6,K6,Y6,X6);Object.assign({},ke,Ut,Hu,uw,Wi);const Z6=[...Object.keys(ah),...sw],Q6={...ah,...ba},J6=e=>e in Q6,e4=e=>t=>{if(!t.__breakpoints)return e;const{isResponsive:n,toArrayValue:r,media:o}=t.__breakpoints,a={};for(const i in e){let s=gn(e[i],t);if(s==null)continue;if(s=Zt(s)&&n(s)?r(s):s,!Array.isArray(s)){a[i]=s;continue}const l=s.slice(0,o.length).length;for(let u=0;u<l;u+=1){const c=o==null?void 0:o[u];if(!c){a[i]=s[u];continue}a[c]=a[c]||{},s[u]!=null&&(a[c][i]=s[u])}}return a};function t4(e){const t=[];let n="",r=!1;for(let o=0;o<e.length;o++){const a=e[o];a==="("?(r=!0,n+=a):a===")"?(r=!1,n+=a):a===","&&!r?(t.push(n),n=""):n+=a}return n=n.trim(),n&&t.push(n),t}function n4(e){return/^var\(--.+\)$/.test(e)}const r4=(e,t)=>e.startsWith("--")&&typeof t=="string"&&!n4(t),o4=(e,t)=>{var i,s;if(t==null)return t;const n=l=>{var u,c;return(c=(u=e.__cssMap)==null?void 0:u[l])==null?void 0:c.varRef},r=l=>{var u;return(u=n(l))!=null?u:l},[o,a]=t4(t);return t=(s=(i=n(o))!=null?i:r(a))!=null?s:r(t),t};function a4(e){const{configs:t={},pseudos:n={},theme:r}=e,o=(a,i=!1)=>{var c,d,f;const s=gn(a,r),l=e4(s)(r);let u={};for(let p in l){const v=l[p];let b=gn(v,r);p in n&&(p=n[p]),r4(p,b)&&(b=o4(r,b));let w=t[p];if(w===!0&&(w={property:p}),Zt(b)){u[p]=(c=u[p])!=null?c:{},u[p]=zn({},u[p],o(b,!0));continue}let g=(f=(d=w==null?void 0:w.transform)==null?void 0:d.call(w,b,r,s))!=null?f:b;g=w!=null&&w.processResult?o(g,!0):g;const m=gn(w==null?void 0:w.property,r);if(!i&&(w==null?void 0:w.static)){const h=gn(w.static,r);u=zn({},u,h)}if(m&&Array.isArray(m)){for(const h of m)u[h]=g;continue}if(m){m==="&"&&Zt(g)?u=zn({},u,g):u[m]=g;continue}if(Zt(g)){u=zn({},u,g);continue}u[p]=g}return u};return o}const cw=e=>t=>a4({theme:t,pseudos:ba,configs:ah})(e);function Se(e){return{definePartsStyle(t){return t},defineMultiStyleConfig(t){return{parts:e,...t}}}}function i4(e,t){if(Array.isArray(e))return e;if(Zt(e))return t(e);if(e!=null)return[e]}function s4(e,t){for(let n=t+1;n<e.length;n++)if(e[n]!=null)return n;return-1}function l4(e){const t=e.__breakpoints;return function(r,o,a,i){var f,p;if(!t)return;const s={},l=i4(a,t.toArrayValue);if(!l)return s;const u=l.length,c=u===1,d=!!r.parts;for(let v=0;v<u;v++){const b=t.details[v],w=t.details[s4(l,v)],g=qi(b.minW,w==null?void 0:w._minW),m=gn((f=r[o])==null?void 0:f[l[v]],i);if(!!m){if(d){(p=r.parts)==null||p.forEach(h=>{zn(s,{[h]:c?m[h]:{[g]:m[h]}})});continue}if(!d){c?zn(s,m):s[g]=m;continue}s[g]=m}}return s}}function u4(e){return t=>{var i;const{variant:n,size:r,theme:o}=t,a=l4(o);return zn({},gn((i=e.baseStyle)!=null?i:{},t),a(e,"sizes",r,t),a(e,"variants",n,t))}}function Dt(e){return rw(e,["styleConfig","size","variant","colorScheme"])}function dw(e){return Zt(e)&&e.reference?e.reference:String(e)}const $c=(e,...t)=>t.map(dw).join(` ${e} `).replace(/calc/g,""),U0=(...e)=>`calc(${$c("+",...e)})`,G0=(...e)=>`calc(${$c("-",...e)})`,mp=(...e)=>`calc(${$c("*",...e)})`,K0=(...e)=>`calc(${$c("/",...e)})`,Y0=e=>{const t=dw(e);return t!=null&&!Number.isNaN(parseFloat(t))?String(t).startsWith("-")?String(t).slice(1):`-${t}`:mp(t,-1)},Qn=Object.assign(e=>({add:(...t)=>Qn(U0(e,...t)),subtract:(...t)=>Qn(G0(e,...t)),multiply:(...t)=>Qn(mp(e,...t)),divide:(...t)=>Qn(K0(e,...t)),negate:()=>Qn(Y0(e)),toString:()=>e.toString()}),{add:U0,subtract:G0,multiply:mp,divide:K0,negate:Y0});function c4(e,t="-"){return e.replace(/\s+/g,t)}function d4(e){const t=c4(e.toString());return p4(f4(t))}function f4(e){return e.includes("\\.")?e:!Number.isInteger(parseFloat(e.toString()))?e.replace(".","\\."):e}function p4(e){return e.replace(/[!-,/:-@[-^`{-~]/g,"\\$&")}function m4(e,t=""){return[t,e].filter(Boolean).join("-")}function h4(e,t){return`var(${e}${t?`, ${t}`:""})`}function g4(e,t=""){return d4(`--${m4(e,t)}`)}function V(e,t,n){const r=g4(e,n);return{variable:r,reference:h4(r,t)}}function y4(e,t){const n={};for(const r of t){if(Array.isArray(r)){const[o,a]=r;n[o]=V(`${e}-${o}`,a);continue}n[r]=V(`${e}-${r}`)}return n}const b4=["colors","borders","borderWidths","borderStyles","fonts","fontSizes","fontWeights","gradients","letterSpacings","lineHeights","radii","space","shadows","sizes","zIndices","transition","blur","breakpoints"];function v4(e){return i6(e,b4)}function w4(e){return e.semanticTokens}function x4(e){const{__cssMap:t,__cssVars:n,__breakpoints:r,...o}=e;return o}function S4(e){const t=v4(e),n=w4(e),r=a=>sw.includes(a)||a==="default",o={};return W0(t,(a,i)=>{a!=null&&(o[i.join(".")]={isSemantic:!1,value:a})}),W0(n,(a,i)=>{a!=null&&(o[i.join(".")]={isSemantic:!0,value:a})},{stop:a=>Object.keys(a).every(r)}),o}function X0(e,t){return V(String(e).replace(/\./g,"-"),void 0,t)}function C4(e){var i;const t=S4(e),n=(i=e.config)==null?void 0:i.cssVarPrefix;let r={};const o={};function a(s,l){const c=[String(s).split(".")[0],l].join(".");if(!t[c])return l;const{reference:f}=X0(c,n);return f}for(const[s,l]of Object.entries(t)){const{isSemantic:u,value:c}=l,{variable:d,reference:f}=X0(s,n);if(!u){if(s.startsWith("space")){const v=s.split("."),[b,...w]=v,g=`${b}.-${w.join(".")}`,m=Qn.negate(c),h=Qn.negate(f);o[g]={value:m,var:d,varRef:h}}r[d]=c,o[s]={value:c,var:d,varRef:f};continue}const p=Zt(c)?c:{default:c};r=zn(r,Object.entries(p).reduce((v,[b,w])=>{var h;if(!w)return v;const g=a(s,`${w}`);if(b==="default")return v[d]=g,v;const m=(h=ba==null?void 0:ba[b])!=null?h:b;return v[m]={[d]:g},v},{})),o[s]={value:f,var:d,varRef:f}}return{cssVars:r,cssMap:o}}function k4(e){const t=x4(e),{cssMap:n,cssVars:r}=C4(t);return Object.assign(t,{__cssVars:{...{"--chakra-ring-inset":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-ring-offset-width":"0px","--chakra-ring-offset-color":"#fff","--chakra-ring-color":"rgba(66, 153, 225, 0.6)","--chakra-ring-offset-shadow":"0 0 #0000","--chakra-ring-shadow":"0 0 #0000","--chakra-space-x-reverse":"0","--chakra-space-y-reverse":"0"},...r},__cssMap:n,__breakpoints:RC(t.breakpoints)}),t}function me(e,t={}){let n=!1;function r(){if(!n){n=!0;return}throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?")}function o(...c){r();for(const d of c)t[d]=l(d);return me(e,t)}function a(...c){for(const d of c)d in t||(t[d]=l(d));return me(e,t)}function i(){return Object.fromEntries(Object.entries(t).map(([d,f])=>[d,f.selector]))}function s(){return Object.fromEntries(Object.entries(t).map(([d,f])=>[d,f.className]))}function l(c){const p=`chakra-${(["container","root"].includes(c!=null?c:"")?[e]:[e,c]).filter(Boolean).join("__")}`;return{className:p,selector:`.${p}`,toString:()=>c}}return{parts:o,toPart:l,extend:a,selectors:i,classnames:s,get keys(){return Object.keys(t)},__type:{}}}const F4=me("accordion").parts("root","container","button","panel","icon"),T4=me("alert").parts("title","description","container","icon","spinner"),_4=me("avatar").parts("label","badge","container","excessLabel","group"),E4=me("breadcrumb").parts("link","item","container","separator");me("button").parts();const P4=me("checkbox").parts("control","icon","container","label");me("progress").parts("track","filledTrack","label");const A4=me("drawer").parts("overlay","dialogContainer","dialog","header","closeButton","body","footer"),R4=me("editable").parts("preview","input","textarea"),I4=me("form").parts("container","requiredIndicator","helperText"),q4=me("formError").parts("text","icon"),z4=me("input").parts("addon","field","element","group"),O4=me("list").parts("container","item","icon"),M4=me("menu").parts("button","list","item","groupTitle","icon","command","divider"),$4=me("modal").parts("overlay","dialogContainer","dialog","header","closeButton","body","footer"),L4=me("numberinput").parts("root","field","stepperGroup","stepper");me("pininput").parts("field");const D4=me("popover").parts("content","header","body","footer","popper","arrow","closeButton"),N4=me("progress").parts("label","filledTrack","track"),B4=me("radio").parts("container","control","label"),j4=me("select").parts("field","icon"),V4=me("slider").parts("container","track","thumb","filledTrack","mark"),W4=me("stat").parts("container","label","helpText","number","icon"),H4=me("switch").parts("container","track","thumb","label"),U4=me("table").parts("table","thead","tbody","tr","th","td","tfoot","caption"),G4=me("tabs").parts("root","tab","tablist","tabpanel","tabpanels","indicator"),K4=me("tag").parts("container","label","closeButton"),Y4=me("card").parts("container","header","body","footer");me("stepper").parts("stepper","step","title","description","indicator","separator","icon","number");const{definePartsStyle:X4,defineMultiStyleConfig:Z4}=Se(F4.keys),Q4={borderTopWidth:"1px",borderColor:"inherit",_last:{borderBottomWidth:"1px"}},J4={transitionProperty:"common",transitionDuration:"normal",fontSize:"md",_focusVisible:{boxShadow:"outline"},_hover:{bg:"blackAlpha.50"},_disabled:{opacity:.4,cursor:"not-allowed"},px:"4",py:"2"},ek={pt:"2",px:"4",pb:"5"},tk={fontSize:"1.25em"},nk=X4({container:Q4,button:J4,panel:ek,icon:tk}),rk=Z4({baseStyle:nk});function uo(e,t,n){return Math.min(Math.max(e,n),t)}class ok extends Error{constructor(t){super(`Failed to parse color: "${t}"`)}}var zi=ok;function ih(e){if(typeof e!="string")throw new zi(e);if(e.trim().toLowerCase()==="transparent")return[0,0,0,0];let t=e.trim();t=fk.test(e)?sk(e):e;const n=lk.exec(t);if(n){const i=Array.from(n).slice(1);return[...i.slice(0,3).map(s=>parseInt(bs(s,2),16)),parseInt(bs(i[3]||"f",2),16)/255]}const r=uk.exec(t);if(r){const i=Array.from(r).slice(1);return[...i.slice(0,3).map(s=>parseInt(s,16)),parseInt(i[3]||"ff",16)/255]}const o=ck.exec(t);if(o){const i=Array.from(o).slice(1);return[...i.slice(0,3).map(s=>parseInt(s,10)),parseFloat(i[3]||"1")]}const a=dk.exec(t);if(a){const[i,s,l,u]=Array.from(a).slice(1).map(parseFloat);if(uo(0,100,s)!==s)throw new zi(e);if(uo(0,100,l)!==l)throw new zi(e);return[...pk(i,s,l),Number.isNaN(u)?1:u]}throw new zi(e)}function ak(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0)%2341}const Z0=e=>parseInt(e.replace(/_/g,""),36),ik="1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e,t)=>{const n=Z0(t.substring(0,3)),r=Z0(t.substring(3)).toString(16);let o="";for(let a=0;a<6-r.length;a++)o+="0";return e[n]=`${o}${r}`,e},{});function sk(e){const t=e.toLowerCase().trim(),n=ik[ak(t)];if(!n)throw new zi(e);return`#${n}`}const bs=(e,t)=>Array.from(Array(t)).map(()=>e).join(""),lk=new RegExp(`^#${bs("([a-f0-9])",3)}([a-f0-9])?$`,"i"),uk=new RegExp(`^#${bs("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`,"i"),ck=new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${bs(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i"),dk=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,fk=/^[a-z]+$/i,Q0=e=>Math.round(e*255),pk=(e,t,n)=>{let r=n/100;if(t===0)return[r,r,r].map(Q0);const o=(e%360+360)%360/60,a=(1-Math.abs(2*r-1))*(t/100),i=a*(1-Math.abs(o%2-1));let s=0,l=0,u=0;o>=0&&o<1?(s=a,l=i):o>=1&&o<2?(s=i,l=a):o>=2&&o<3?(l=a,u=i):o>=3&&o<4?(l=i,u=a):o>=4&&o<5?(s=i,u=a):o>=5&&o<6&&(s=a,u=i);const c=r-a/2,d=s+c,f=l+c,p=u+c;return[d,f,p].map(Q0)};function mk(e,t,n,r){return`rgba(${uo(0,255,e).toFixed()}, ${uo(0,255,t).toFixed()}, ${uo(0,255,n).toFixed()}, ${parseFloat(uo(0,1,r).toFixed(3))})`}function hk(e,t){const[n,r,o,a]=ih(e);return mk(n,r,o,a-t)}function gk(e){const[t,n,r,o]=ih(e);let a=i=>{const s=uo(0,255,i).toString(16);return s.length===1?`0${s}`:s};return`#${a(t)}${a(n)}${a(r)}${o<1?a(Math.round(o*255)):""}`}const yk=e=>Object.keys(e).length===0;function bk(e,t,n,r,o){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:o;return e===o?n:e}const ft=(e,t,n)=>{const r=bk(e,`colors.${t}`,t);try{return gk(r),r}catch{return n!=null?n:"#000000"}},vk=e=>{const[t,n,r]=ih(e);return(t*299+n*587+r*114)/1e3},wk=e=>t=>{const n=ft(t,e);return vk(n)<128?"dark":"light"},xk=e=>t=>wk(e)(t)==="dark",Ma=(e,t)=>n=>{const r=ft(n,e);return hk(r,1-t)};function J0(e="1rem",t="rgba(255, 255, 255, 0.15)"){return{backgroundImage:`linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,backgroundSize:`${e} ${e}`}}const Sk=()=>`#${Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0")}`;function Ck(e){const t=Sk();return!e||yk(e)?t:e.string&&e.colors?Fk(e.string,e.colors):e.string&&!e.colors?kk(e.string):e.colors&&!e.string?Tk(e.colors):t}function kk(e){let t=0;if(e.length===0)return t.toString();for(let r=0;r<e.length;r+=1)t=e.charCodeAt(r)+((t<<5)-t),t=t&t;let n="#";for(let r=0;r<3;r+=1){const o=t>>r*8&255;n+=`00${o.toString(16)}`.substr(-2)}return n}function Fk(e,t){let n=0;if(e.length===0)return t[0];for(let r=0;r<e.length;r+=1)n=e.charCodeAt(r)+((n<<5)-n),n=n&n;return n=(n%t.length+t.length)%t.length,t[n]}function Tk(e){return e[Math.floor(Math.random()*e.length)]}function j(e,t){return n=>n.colorMode==="dark"?t:e}function sh(e){const{orientation:t,vertical:n,horizontal:r}=e;return t?t==="vertical"?n:r:{}}function fw(e){return Zt(e)&&e.reference?e.reference:String(e)}const Lc=(e,...t)=>t.map(fw).join(` ${e} `).replace(/calc/g,""),ey=(...e)=>`calc(${Lc("+",...e)})`,ty=(...e)=>`calc(${Lc("-",...e)})`,hp=(...e)=>`calc(${Lc("*",...e)})`,ny=(...e)=>`calc(${Lc("/",...e)})`,ry=e=>{const t=fw(e);return t!=null&&!Number.isNaN(parseFloat(t))?String(t).startsWith("-")?String(t).slice(1):`-${t}`:hp(t,-1)},Jn=Object.assign(e=>({add:(...t)=>Jn(ey(e,...t)),subtract:(...t)=>Jn(ty(e,...t)),multiply:(...t)=>Jn(hp(e,...t)),divide:(...t)=>Jn(ny(e,...t)),negate:()=>Jn(ry(e)),toString:()=>e.toString()}),{add:ey,subtract:ty,multiply:hp,divide:ny,negate:ry});function _k(e){return!Number.isInteger(parseFloat(e.toString()))}function Ek(e,t="-"){return e.replace(/\s+/g,t)}function pw(e){const t=Ek(e.toString());return t.includes("\\.")?e:_k(e)?t.replace(".","\\."):e}function Pk(e,t=""){return[t,pw(e)].filter(Boolean).join("-")}function Ak(e,t){return`var(${pw(e)}${t?`, ${t}`:""})`}function Rk(e,t=""){return`--${Pk(e,t)}`}function Ke(e,t){const n=Rk(e,t==null?void 0:t.prefix);return{variable:n,reference:Ak(n,Ik(t==null?void 0:t.fallback))}}function Ik(e){return typeof e=="string"?e:e==null?void 0:e.reference}const{definePartsStyle:tl,defineMultiStyleConfig:qk}=Se(T4.keys),qt=V("alert-fg"),lr=V("alert-bg"),zk=tl({container:{bg:lr.reference,px:"4",py:"3"},title:{fontWeight:"bold",lineHeight:"6",marginEnd:"2"},description:{lineHeight:"6"},icon:{color:qt.reference,flexShrink:0,marginEnd:"3",w:"5",h:"6"},spinner:{color:qt.reference,flexShrink:0,marginEnd:"3",w:"5",h:"5"}});function lh(e){const{theme:t,colorScheme:n}=e,r=Ma(`${n}.200`,.16)(t);return{light:`colors.${n}.100`,dark:r}}const Ok=tl(e=>{const{colorScheme:t}=e,n=lh(e);return{container:{[qt.variable]:`colors.${t}.600`,[lr.variable]:n.light,_dark:{[qt.variable]:`colors.${t}.200`,[lr.variable]:n.dark}}}}),Mk=tl(e=>{const{colorScheme:t}=e,n=lh(e);return{container:{[qt.variable]:`colors.${t}.600`,[lr.variable]:n.light,_dark:{[qt.variable]:`colors.${t}.200`,[lr.variable]:n.dark},paddingStart:"3",borderStartWidth:"4px",borderStartColor:qt.reference}}}),$k=tl(e=>{const{colorScheme:t}=e,n=lh(e);return{container:{[qt.variable]:`colors.${t}.600`,[lr.variable]:n.light,_dark:{[qt.variable]:`colors.${t}.200`,[lr.variable]:n.dark},pt:"2",borderTopWidth:"4px",borderTopColor:qt.reference}}}),Lk=tl(e=>{const{colorScheme:t}=e;return{container:{[qt.variable]:"colors.white",[lr.variable]:`colors.${t}.600`,_dark:{[qt.variable]:"colors.gray.900",[lr.variable]:`colors.${t}.200`},color:qt.reference}}}),Dk={subtle:Ok,"left-accent":Mk,"top-accent":$k,solid:Lk},Nk=qk({baseStyle:zk,variants:Dk,defaultProps:{variant:"subtle",colorScheme:"blue"}}),mw={px:"1px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},Bk={max:"max-content",min:"min-content",full:"100%","3xs":"14rem","2xs":"16rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem","8xl":"90rem",prose:"60ch"},jk={sm:"640px",md:"768px",lg:"1024px",xl:"1280px"},hw={...mw,...Bk,container:jk},Vk=e=>typeof e=="function";function pt(e,...t){return Vk(e)?e(...t):e}const{definePartsStyle:gw,defineMultiStyleConfig:Wk}=Se(_4.keys),va=V("avatar-border-color"),Hi=V("avatar-bg"),vs=V("avatar-font-size"),$a=V("avatar-size"),Hk={borderRadius:"full",border:"0.2em solid",borderColor:va.reference,[va.variable]:"white",_dark:{[va.variable]:"colors.gray.800"}},Uk={bg:Hi.reference,fontSize:vs.reference,width:$a.reference,height:$a.reference,lineHeight:"1",[Hi.variable]:"colors.gray.200",_dark:{[Hi.variable]:"colors.whiteAlpha.400"}},Gk=e=>{const{name:t,theme:n}=e,r=t?Ck({string:t}):"colors.gray.400",o=xk(r)(n);let a="white";return o||(a="gray.800"),{bg:Hi.reference,fontSize:vs.reference,color:a,borderColor:va.reference,verticalAlign:"top",width:$a.reference,height:$a.reference,"&:not([data-loaded])":{[Hi.variable]:r},[va.variable]:"colors.white",_dark:{[va.variable]:"colors.gray.800"}}},Kk={fontSize:vs.reference,lineHeight:"1"},Yk=gw(e=>({badge:pt(Hk,e),excessLabel:pt(Uk,e),container:pt(Gk,e),label:Kk}));function vr(e){const t=e!=="100%"?hw[e]:void 0;return gw({container:{[$a.variable]:t!=null?t:e,[vs.variable]:`calc(${t!=null?t:e} / 2.5)`},excessLabel:{[$a.variable]:t!=null?t:e,[vs.variable]:`calc(${t!=null?t:e} / 2.5)`}})}const Xk={"2xs":vr(4),xs:vr(6),sm:vr(8),md:vr(12),lg:vr(16),xl:vr(24),"2xl":vr(32),full:vr("100%")},Zk=Wk({baseStyle:Yk,sizes:Xk,defaultProps:{size:"md"}}),Ne=y4("badge",["bg","color","shadow"]),Qk={px:1,textTransform:"uppercase",fontSize:"xs",borderRadius:"sm",fontWeight:"bold",bg:Ne.bg.reference,color:Ne.color.reference,boxShadow:Ne.shadow.reference},Jk=e=>{const{colorScheme:t,theme:n}=e,r=Ma(`${t}.500`,.6)(n);return{[Ne.bg.variable]:`colors.${t}.500`,[Ne.color.variable]:"colors.white",_dark:{[Ne.bg.variable]:r,[Ne.color.variable]:"colors.whiteAlpha.800"}}},e7=e=>{const{colorScheme:t,theme:n}=e,r=Ma(`${t}.200`,.16)(n);return{[Ne.bg.variable]:`colors.${t}.100`,[Ne.color.variable]:`colors.${t}.800`,_dark:{[Ne.bg.variable]:r,[Ne.color.variable]:`colors.${t}.200`}}},t7=e=>{const{colorScheme:t,theme:n}=e,r=Ma(`${t}.200`,.8)(n);return{[Ne.color.variable]:`colors.${t}.500`,_dark:{[Ne.color.variable]:r},[Ne.shadow.variable]:`inset 0 0 0px 1px ${Ne.color.reference}`}},n7={solid:Jk,subtle:e7,outline:t7},Ui={baseStyle:Qk,variants:n7,defaultProps:{variant:"subtle",colorScheme:"gray"}},{defineMultiStyleConfig:r7,definePartsStyle:o7}=Se(E4.keys),Gd=V("breadcrumb-link-decor"),a7={transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",outline:"none",color:"inherit",textDecoration:Gd.reference,[Gd.variable]:"none","&:not([aria-current=page])":{cursor:"pointer",_hover:{[Gd.variable]:"underline"},_focusVisible:{boxShadow:"outline"}}},i7=o7({link:a7}),s7=r7({baseStyle:i7}),l7={lineHeight:"1.2",borderRadius:"md",fontWeight:"semibold",transitionProperty:"common",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{_disabled:{bg:"initial"}}},yw=e=>{const{colorScheme:t,theme:n}=e;if(t==="gray")return{color:j("gray.800","whiteAlpha.900")(e),_hover:{bg:j("gray.100","whiteAlpha.200")(e)},_active:{bg:j("gray.200","whiteAlpha.300")(e)}};const r=Ma(`${t}.200`,.12)(n),o=Ma(`${t}.200`,.24)(n);return{color:j(`${t}.600`,`${t}.200`)(e),bg:"transparent",_hover:{bg:j(`${t}.50`,r)(e)},_active:{bg:j(`${t}.100`,o)(e)}}},u7=e=>{const{colorScheme:t}=e,n=j("gray.200","whiteAlpha.300")(e);return{border:"1px solid",borderColor:t==="gray"?n:"currentColor",".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":{marginEnd:"-1px"},".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":{marginBottom:"-1px"},...pt(yw,e)}},c7={yellow:{bg:"yellow.400",color:"black",hoverBg:"yellow.500",activeBg:"yellow.600"},cyan:{bg:"cyan.400",color:"black",hoverBg:"cyan.500",activeBg:"cyan.600"}},d7=e=>{var s;const{colorScheme:t}=e;if(t==="gray"){const l=j("gray.100","whiteAlpha.200")(e);return{bg:l,color:j("gray.800","whiteAlpha.900")(e),_hover:{bg:j("gray.200","whiteAlpha.300")(e),_disabled:{bg:l}},_active:{bg:j("gray.300","whiteAlpha.400")(e)}}}const{bg:n=`${t}.500`,color:r="white",hoverBg:o=`${t}.600`,activeBg:a=`${t}.700`}=(s=c7[t])!=null?s:{},i=j(n,`${t}.200`)(e);return{bg:i,color:j(r,"gray.800")(e),_hover:{bg:j(o,`${t}.300`)(e),_disabled:{bg:i}},_active:{bg:j(a,`${t}.400`)(e)}}},f7=e=>{const{colorScheme:t}=e;return{padding:0,height:"auto",lineHeight:"normal",verticalAlign:"baseline",color:j(`${t}.500`,`${t}.200`)(e),_hover:{textDecoration:"underline",_disabled:{textDecoration:"none"}},_active:{color:j(`${t}.700`,`${t}.500`)(e)}}},p7={bg:"none",color:"inherit",display:"inline",lineHeight:"inherit",m:"0",p:"0"},m7={ghost:yw,outline:u7,solid:d7,link:f7,unstyled:p7},h7={lg:{h:"12",minW:"12",fontSize:"lg",px:"6"},md:{h:"10",minW:"10",fontSize:"md",px:"4"},sm:{h:"8",minW:"8",fontSize:"sm",px:"3"},xs:{h:"6",minW:"6",fontSize:"xs",px:"2"}},g7={baseStyle:l7,variants:m7,sizes:h7,defaultProps:{variant:"solid",size:"md",colorScheme:"gray"}},{definePartsStyle:go,defineMultiStyleConfig:y7}=Se(Y4.keys),Uu=V("card-bg"),or=V("card-padding"),bw=V("card-shadow"),mu=V("card-radius"),vw=V("card-border-width","0"),ww=V("card-border-color"),b7=go({container:{[Uu.variable]:"colors.chakra-body-bg",backgroundColor:Uu.reference,boxShadow:bw.reference,borderRadius:mu.reference,color:"chakra-body-text",borderWidth:vw.reference,borderColor:ww.reference},body:{padding:or.reference,flex:"1 1 0%"},header:{padding:or.reference},footer:{padding:or.reference}}),v7={sm:go({container:{[mu.variable]:"radii.base",[or.variable]:"space.3"}}),md:go({container:{[mu.variable]:"radii.md",[or.variable]:"space.5"}}),lg:go({container:{[mu.variable]:"radii.xl",[or.variable]:"space.7"}})},w7={elevated:go({container:{[bw.variable]:"shadows.base",_dark:{[Uu.variable]:"colors.gray.700"}}}),outline:go({container:{[vw.variable]:"1px",[ww.variable]:"colors.chakra-border-color"}}),filled:go({container:{[Uu.variable]:"colors.chakra-subtle-bg"}}),unstyled:{body:{[or.variable]:0},header:{[or.variable]:0},footer:{[or.variable]:0}}},x7=y7({baseStyle:b7,variants:w7,sizes:v7,defaultProps:{variant:"elevated",size:"md"}}),{definePartsStyle:hu,defineMultiStyleConfig:S7}=Se(P4.keys),Gi=V("checkbox-size"),C7=e=>{const{colorScheme:t}=e;return{w:Gi.reference,h:Gi.reference,transitionProperty:"box-shadow",transitionDuration:"normal",border:"2px solid",borderRadius:"sm",borderColor:"inherit",color:"white",_checked:{bg:j(`${t}.500`,`${t}.200`)(e),borderColor:j(`${t}.500`,`${t}.200`)(e),color:j("white","gray.900")(e),_hover:{bg:j(`${t}.600`,`${t}.300`)(e),borderColor:j(`${t}.600`,`${t}.300`)(e)},_disabled:{borderColor:j("gray.200","transparent")(e),bg:j("gray.200","whiteAlpha.300")(e),color:j("gray.500","whiteAlpha.500")(e)}},_indeterminate:{bg:j(`${t}.500`,`${t}.200`)(e),borderColor:j(`${t}.500`,`${t}.200`)(e),color:j("white","gray.900")(e)},_disabled:{bg:j("gray.100","whiteAlpha.100")(e),borderColor:j("gray.100","transparent")(e)},_focusVisible:{boxShadow:"outline"},_invalid:{borderColor:j("red.500","red.300")(e)}}},k7={_disabled:{cursor:"not-allowed"}},F7={userSelect:"none",_disabled:{opacity:.4}},T7={transitionProperty:"transform",transitionDuration:"normal"},_7=hu(e=>({icon:T7,container:k7,control:pt(C7,e),label:F7})),E7={sm:hu({control:{[Gi.variable]:"sizes.3"},label:{fontSize:"sm"},icon:{fontSize:"3xs"}}),md:hu({control:{[Gi.variable]:"sizes.4"},label:{fontSize:"md"},icon:{fontSize:"2xs"}}),lg:hu({control:{[Gi.variable]:"sizes.5"},label:{fontSize:"lg"},icon:{fontSize:"2xs"}})},Cr=S7({baseStyle:_7,sizes:E7,defaultProps:{size:"md",colorScheme:"blue"}}),Ki=Ke("close-button-size"),hi=Ke("close-button-bg"),P7={w:[Ki.reference],h:[Ki.reference],borderRadius:"md",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{[hi.variable]:"colors.blackAlpha.100",_dark:{[hi.variable]:"colors.whiteAlpha.100"}},_active:{[hi.variable]:"colors.blackAlpha.200",_dark:{[hi.variable]:"colors.whiteAlpha.200"}},_focusVisible:{boxShadow:"outline"},bg:hi.reference},A7={lg:{[Ki.variable]:"sizes.10",fontSize:"md"},md:{[Ki.variable]:"sizes.8",fontSize:"xs"},sm:{[Ki.variable]:"sizes.6",fontSize:"2xs"}},R7={baseStyle:P7,sizes:A7,defaultProps:{size:"md"}},{variants:I7,defaultProps:q7}=Ui,z7={fontFamily:"mono",fontSize:"sm",px:"0.2em",borderRadius:"sm",bg:Ne.bg.reference,color:Ne.color.reference,boxShadow:Ne.shadow.reference},O7={baseStyle:z7,variants:I7,defaultProps:q7},M7={w:"100%",mx:"auto",maxW:"prose",px:"4"},$7={baseStyle:M7},L7={opacity:.6,borderColor:"inherit"},D7={borderStyle:"solid"},N7={borderStyle:"dashed"},B7={solid:D7,dashed:N7},j7={baseStyle:L7,variants:B7,defaultProps:{variant:"solid"}},{definePartsStyle:gp,defineMultiStyleConfig:V7}=Se(A4.keys),Kd=V("drawer-bg"),Yd=V("drawer-box-shadow");function Wo(e){return gp(e==="full"?{dialog:{maxW:"100vw",h:"100vh"}}:{dialog:{maxW:e}})}const W7={bg:"blackAlpha.600",zIndex:"modal"},H7={display:"flex",zIndex:"modal",justifyContent:"center"},U7=e=>{const{isFullHeight:t}=e;return{...t&&{height:"100vh"},zIndex:"modal",maxH:"100vh",color:"inherit",[Kd.variable]:"colors.white",[Yd.variable]:"shadows.lg",_dark:{[Kd.variable]:"colors.gray.700",[Yd.variable]:"shadows.dark-lg"},bg:Kd.reference,boxShadow:Yd.reference}},G7={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},K7={position:"absolute",top:"2",insetEnd:"3"},Y7={px:"6",py:"2",flex:"1",overflow:"auto"},X7={px:"6",py:"4"},Z7=gp(e=>({overlay:W7,dialogContainer:H7,dialog:pt(U7,e),header:G7,closeButton:K7,body:Y7,footer:X7})),Q7={xs:Wo("xs"),sm:Wo("md"),md:Wo("lg"),lg:Wo("2xl"),xl:Wo("4xl"),full:Wo("full")},J7=V7({baseStyle:Z7,sizes:Q7,defaultProps:{size:"xs"}}),{definePartsStyle:e8,defineMultiStyleConfig:t8}=Se(R4.keys),n8={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal"},r8={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}},o8={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}},a8=e8({preview:n8,input:r8,textarea:o8}),i8=t8({baseStyle:a8}),{definePartsStyle:s8,defineMultiStyleConfig:l8}=Se(I4.keys),wa=V("form-control-color"),u8={marginStart:"1",[wa.variable]:"colors.red.500",_dark:{[wa.variable]:"colors.red.300"},color:wa.reference},c8={mt:"2",[wa.variable]:"colors.gray.600",_dark:{[wa.variable]:"colors.whiteAlpha.600"},color:wa.reference,lineHeight:"normal",fontSize:"sm"},d8=s8({container:{width:"100%",position:"relative"},requiredIndicator:u8,helperText:c8}),f8=l8({baseStyle:d8}),{definePartsStyle:p8,defineMultiStyleConfig:m8}=Se(q4.keys),xa=V("form-error-color"),h8={[xa.variable]:"colors.red.500",_dark:{[xa.variable]:"colors.red.300"},color:xa.reference,mt:"2",fontSize:"sm",lineHeight:"normal"},g8={marginEnd:"0.5em",[xa.variable]:"colors.red.500",_dark:{[xa.variable]:"colors.red.300"},color:xa.reference},y8=p8({text:h8,icon:g8}),b8=m8({baseStyle:y8}),v8={fontSize:"md",marginEnd:"3",mb:"2",fontWeight:"medium",transitionProperty:"common",transitionDuration:"normal",opacity:1,_disabled:{opacity:.4}},w8={baseStyle:v8},x8={fontFamily:"heading",fontWeight:"bold"},S8={"4xl":{fontSize:["6xl",null,"7xl"],lineHeight:1},"3xl":{fontSize:["5xl",null,"6xl"],lineHeight:1},"2xl":{fontSize:["4xl",null,"5xl"],lineHeight:[1.2,null,1]},xl:{fontSize:["3xl",null,"4xl"],lineHeight:[1.33,null,1.2]},lg:{fontSize:["2xl",null,"3xl"],lineHeight:[1.33,null,1.2]},md:{fontSize:"xl",lineHeight:1.2},sm:{fontSize:"md",lineHeight:1.2},xs:{fontSize:"sm",lineHeight:1.2}},C8={baseStyle:x8,sizes:S8,defaultProps:{size:"xl"}},{definePartsStyle:tr,defineMultiStyleConfig:k8}=Se(z4.keys),Zo=V("input-height"),Qo=V("input-font-size"),Jo=V("input-padding"),ea=V("input-border-radius"),F8=tr({addon:{height:Zo.reference,fontSize:Qo.reference,px:Jo.reference,borderRadius:ea.reference},field:{width:"100%",height:Zo.reference,fontSize:Qo.reference,px:Jo.reference,borderRadius:ea.reference,minWidth:0,outline:0,position:"relative",appearance:"none",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed"}}}),wr={lg:{[Qo.variable]:"fontSizes.lg",[Jo.variable]:"space.4",[ea.variable]:"radii.md",[Zo.variable]:"sizes.12"},md:{[Qo.variable]:"fontSizes.md",[Jo.variable]:"space.4",[ea.variable]:"radii.md",[Zo.variable]:"sizes.10"},sm:{[Qo.variable]:"fontSizes.sm",[Jo.variable]:"space.3",[ea.variable]:"radii.sm",[Zo.variable]:"sizes.8"},xs:{[Qo.variable]:"fontSizes.xs",[Jo.variable]:"space.2",[ea.variable]:"radii.sm",[Zo.variable]:"sizes.6"}},T8={lg:tr({field:wr.lg,group:wr.lg}),md:tr({field:wr.md,group:wr.md}),sm:tr({field:wr.sm,group:wr.sm}),xs:tr({field:wr.xs,group:wr.xs})};function uh(e){const{focusBorderColor:t,errorBorderColor:n}=e;return{focusBorderColor:t||j("blue.500","blue.300")(e),errorBorderColor:n||j("red.500","red.300")(e)}}const _8=tr(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=uh(e);return{field:{border:"1px solid",borderColor:"inherit",bg:"inherit",_hover:{borderColor:j("gray.300","whiteAlpha.400")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:ft(t,r),boxShadow:`0 0 0 1px ${ft(t,r)}`},_focusVisible:{zIndex:1,borderColor:ft(t,n),boxShadow:`0 0 0 1px ${ft(t,n)}`}},addon:{border:"1px solid",borderColor:j("inherit","whiteAlpha.50")(e),bg:j("gray.100","whiteAlpha.300")(e)}}}),E8=tr(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=uh(e);return{field:{border:"2px solid",borderColor:"transparent",bg:j("gray.100","whiteAlpha.50")(e),_hover:{bg:j("gray.200","whiteAlpha.100")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:ft(t,r)},_focusVisible:{bg:"transparent",borderColor:ft(t,n)}},addon:{border:"2px solid",borderColor:"transparent",bg:j("gray.100","whiteAlpha.50")(e)}}}),P8=tr(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=uh(e);return{field:{borderBottom:"1px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent",_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:ft(t,r),boxShadow:`0px 1px 0px 0px ${ft(t,r)}`},_focusVisible:{borderColor:ft(t,n),boxShadow:`0px 1px 0px 0px ${ft(t,n)}`}},addon:{borderBottom:"2px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent"}}}),A8=tr({field:{bg:"transparent",px:"0",height:"auto"},addon:{bg:"transparent",px:"0",height:"auto"}}),R8={outline:_8,filled:E8,flushed:P8,unstyled:A8},pe=k8({baseStyle:F8,sizes:T8,variants:R8,defaultProps:{size:"md",variant:"outline"}}),Xd=V("kbd-bg"),I8={[Xd.variable]:"colors.gray.100",_dark:{[Xd.variable]:"colors.whiteAlpha.100"},bg:Xd.reference,borderRadius:"md",borderWidth:"1px",borderBottomWidth:"3px",fontSize:"0.8em",fontWeight:"bold",lineHeight:"normal",px:"0.4em",whiteSpace:"nowrap"},q8={baseStyle:I8},z8={transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",cursor:"pointer",textDecoration:"none",outline:"none",color:"inherit",_hover:{textDecoration:"underline"},_focusVisible:{boxShadow:"outline"}},O8={baseStyle:z8},{defineMultiStyleConfig:M8,definePartsStyle:$8}=Se(O4.keys),L8={marginEnd:"2",display:"inline",verticalAlign:"text-bottom"},D8=$8({icon:L8}),N8=M8({baseStyle:D8}),{defineMultiStyleConfig:B8,definePartsStyle:j8}=Se(M4.keys),En=V("menu-bg"),Zd=V("menu-shadow"),V8={[En.variable]:"#fff",[Zd.variable]:"shadows.sm",_dark:{[En.variable]:"colors.gray.700",[Zd.variable]:"shadows.dark-lg"},color:"inherit",minW:"3xs",py:"2",zIndex:"dropdown",borderRadius:"md",borderWidth:"1px",bg:En.reference,boxShadow:Zd.reference},W8={py:"1.5",px:"3",transitionProperty:"background",transitionDuration:"ultra-fast",transitionTimingFunction:"ease-in",_focus:{[En.variable]:"colors.gray.100",_dark:{[En.variable]:"colors.whiteAlpha.100"}},_active:{[En.variable]:"colors.gray.200",_dark:{[En.variable]:"colors.whiteAlpha.200"}},_expanded:{[En.variable]:"colors.gray.100",_dark:{[En.variable]:"colors.whiteAlpha.100"}},_disabled:{opacity:.4,cursor:"not-allowed"},bg:En.reference},H8={mx:4,my:2,fontWeight:"semibold",fontSize:"sm"},U8={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},G8={opacity:.6},K8={border:0,borderBottom:"1px solid",borderColor:"inherit",my:"2",opacity:.6},Y8={transitionProperty:"common",transitionDuration:"normal"},X8=j8({button:Y8,list:V8,item:W8,groupTitle:H8,icon:U8,command:G8,divider:K8}),Z8=B8({baseStyle:X8}),{defineMultiStyleConfig:Q8,definePartsStyle:yp}=Se($4.keys),Qd=V("modal-bg"),Jd=V("modal-shadow"),J8={bg:"blackAlpha.600",zIndex:"modal"},eF=e=>{const{isCentered:t,scrollBehavior:n}=e;return{display:"flex",zIndex:"modal",justifyContent:"center",alignItems:t?"center":"flex-start",overflow:n==="inside"?"hidden":"auto",overscrollBehaviorY:"none"}},tF=e=>{const{isCentered:t,scrollBehavior:n}=e;return{borderRadius:"md",color:"inherit",my:t?"auto":"16",mx:t?"auto":void 0,zIndex:"modal",maxH:n==="inside"?"calc(100% - 7.5rem)":void 0,[Qd.variable]:"colors.white",[Jd.variable]:"shadows.lg",_dark:{[Qd.variable]:"colors.gray.700",[Jd.variable]:"shadows.dark-lg"},bg:Qd.reference,boxShadow:Jd.reference}},nF={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},rF={position:"absolute",top:"2",insetEnd:"3"},oF=e=>{const{scrollBehavior:t}=e;return{px:"6",py:"2",flex:"1",overflow:t==="inside"?"auto":void 0}},aF={px:"6",py:"4"},iF=yp(e=>({overlay:J8,dialogContainer:pt(eF,e),dialog:pt(tF,e),header:nF,closeButton:rF,body:pt(oF,e),footer:aF}));function ln(e){return yp(e==="full"?{dialog:{maxW:"100vw",minH:"$100vh",my:"0",borderRadius:"0"}}:{dialog:{maxW:e}})}const sF={xs:ln("xs"),sm:ln("sm"),md:ln("md"),lg:ln("lg"),xl:ln("xl"),"2xl":ln("2xl"),"3xl":ln("3xl"),"4xl":ln("4xl"),"5xl":ln("5xl"),"6xl":ln("6xl"),full:ln("full")},lF=Q8({baseStyle:iF,sizes:sF,defaultProps:{size:"md"}}),xw={letterSpacings:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeights:{normal:"normal",none:1,shorter:1.25,short:1.375,base:1.5,tall:1.625,taller:"2",3:".75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem"},fontWeights:{hairline:100,thin:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},fonts:{heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'},fontSizes:{"3xs":"0.45rem","2xs":"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem","8xl":"6rem","9xl":"8rem"}},{defineMultiStyleConfig:uF,definePartsStyle:Sw}=Se(L4.keys),ch=Ke("number-input-stepper-width"),Cw=Ke("number-input-input-padding"),cF=Jn(ch).add("0.5rem").toString(),ef=Ke("number-input-bg"),tf=Ke("number-input-color"),nf=Ke("number-input-border-color"),dF={[ch.variable]:"sizes.6",[Cw.variable]:cF},fF=e=>{var t,n;return(n=(t=pt(pe.baseStyle,e))==null?void 0:t.field)!=null?n:{}},pF={width:ch.reference},mF={borderStart:"1px solid",borderStartColor:nf.reference,color:tf.reference,bg:ef.reference,[tf.variable]:"colors.chakra-body-text",[nf.variable]:"colors.chakra-border-color",_dark:{[tf.variable]:"colors.whiteAlpha.800",[nf.variable]:"colors.whiteAlpha.300"},_active:{[ef.variable]:"colors.gray.200",_dark:{[ef.variable]:"colors.whiteAlpha.300"}},_disabled:{opacity:.4,cursor:"not-allowed"}},hF=Sw(e=>{var t;return{root:dF,field:(t=pt(fF,e))!=null?t:{},stepperGroup:pF,stepper:mF}});function Rl(e){var a,i,s;const t=(a=pe.sizes)==null?void 0:a[e],n={lg:"md",md:"md",sm:"sm",xs:"sm"},r=(s=(i=t.field)==null?void 0:i.fontSize)!=null?s:"md",o=xw.fontSizes[r];return Sw({field:{...t.field,paddingInlineEnd:Cw.reference,verticalAlign:"top"},stepper:{fontSize:Jn(o).multiply(.75).toString(),_first:{borderTopEndRadius:n[e]},_last:{borderBottomEndRadius:n[e],mt:"-1px",borderTopWidth:1}}})}const gF={xs:Rl("xs"),sm:Rl("sm"),md:Rl("md"),lg:Rl("lg")},yF=uF({baseStyle:hF,sizes:gF,variants:pe.variants,defaultProps:pe.defaultProps});var yv;const bF={...(yv=pe.baseStyle)==null?void 0:yv.field,textAlign:"center"},vF={lg:{fontSize:"lg",w:12,h:12,borderRadius:"md"},md:{fontSize:"md",w:10,h:10,borderRadius:"md"},sm:{fontSize:"sm",w:8,h:8,borderRadius:"sm"},xs:{fontSize:"xs",w:6,h:6,borderRadius:"sm"}};var bv,vv;const wF={outline:e=>{var t,n,r;return(r=(n=pt((t=pe.variants)==null?void 0:t.outline,e))==null?void 0:n.field)!=null?r:{}},flushed:e=>{var t,n,r;return(r=(n=pt((t=pe.variants)==null?void 0:t.flushed,e))==null?void 0:n.field)!=null?r:{}},filled:e=>{var t,n,r;return(r=(n=pt((t=pe.variants)==null?void 0:t.filled,e))==null?void 0:n.field)!=null?r:{}},unstyled:(vv=(bv=pe.variants)==null?void 0:bv.unstyled.field)!=null?vv:{}},xF={baseStyle:bF,sizes:vF,variants:wF,defaultProps:pe.defaultProps},{defineMultiStyleConfig:SF,definePartsStyle:CF}=Se(D4.keys),Il=Ke("popper-bg"),kF=Ke("popper-arrow-bg"),oy=Ke("popper-arrow-shadow-color"),FF={zIndex:"popover"},TF={[Il.variable]:"colors.white",bg:Il.reference,[kF.variable]:Il.reference,[oy.variable]:"colors.gray.200",_dark:{[Il.variable]:"colors.gray.700",[oy.variable]:"colors.whiteAlpha.300"},width:"xs",border:"1px solid",borderColor:"inherit",borderRadius:"md",boxShadow:"sm",zIndex:"inherit",_focusVisible:{outline:0,boxShadow:"outline"}},_F={px:3,py:2,borderBottomWidth:"1px"},EF={px:3,py:2},PF={px:3,py:2,borderTopWidth:"1px"},AF={position:"absolute",borderRadius:"md",top:1,insetEnd:2,padding:2},RF=CF({popper:FF,content:TF,header:_F,body:EF,footer:PF,closeButton:AF}),IF=SF({baseStyle:RF}),{defineMultiStyleConfig:qF,definePartsStyle:Oi}=Se(N4.keys),zF=e=>{const{colorScheme:t,theme:n,isIndeterminate:r,hasStripe:o}=e,a=j(J0(),J0("1rem","rgba(0,0,0,0.1)"))(e),i=j(`${t}.500`,`${t}.200`)(e),s=`linear-gradient(
    to right,
    transparent 0%,
    ${ft(n,i)} 50%,
    transparent 100%
  )`;return{...!r&&o&&a,...r?{bgImage:s}:{bgColor:i}}},OF={lineHeight:"1",fontSize:"0.25em",fontWeight:"bold",color:"white"},MF=e=>({bg:j("gray.100","whiteAlpha.300")(e)}),$F=e=>({transitionProperty:"common",transitionDuration:"slow",...zF(e)}),LF=Oi(e=>({label:OF,filledTrack:$F(e),track:MF(e)})),DF={xs:Oi({track:{h:"1"}}),sm:Oi({track:{h:"2"}}),md:Oi({track:{h:"3"}}),lg:Oi({track:{h:"4"}})},NF=qF({sizes:DF,baseStyle:LF,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:BF,definePartsStyle:gu}=Se(B4.keys),jF=e=>{var n;const t=(n=pt(Cr.baseStyle,e))==null?void 0:n.control;return{...t,borderRadius:"full",_checked:{...t==null?void 0:t._checked,_before:{content:'""',display:"inline-block",pos:"relative",w:"50%",h:"50%",borderRadius:"50%",bg:"currentColor"}}}},VF=gu(e=>{var t,n;return{label:(t=Cr.baseStyle)==null?void 0:t.call(Cr,e).label,container:(n=Cr.baseStyle)==null?void 0:n.call(Cr,e).container,control:jF(e)}}),WF={md:gu({control:{w:"4",h:"4"},label:{fontSize:"md"}}),lg:gu({control:{w:"5",h:"5"},label:{fontSize:"lg"}}),sm:gu({control:{width:"3",height:"3"},label:{fontSize:"sm"}})},HF=BF({baseStyle:VF,sizes:WF,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:UF,definePartsStyle:GF}=Se(j4.keys),ql=V("select-bg");var wv;const KF={...(wv=pe.baseStyle)==null?void 0:wv.field,appearance:"none",paddingBottom:"1px",lineHeight:"normal",bg:ql.reference,[ql.variable]:"colors.white",_dark:{[ql.variable]:"colors.gray.700"},"> option, > optgroup":{bg:ql.reference}},YF={width:"6",height:"100%",insetEnd:"2",position:"relative",color:"currentColor",fontSize:"xl",_disabled:{opacity:.5}},XF=GF({field:KF,icon:YF}),zl={paddingInlineEnd:"8"};var xv,Sv,Cv,kv,Fv,Tv,_v,Ev;const ZF={lg:{...(xv=pe.sizes)==null?void 0:xv.lg,field:{...(Sv=pe.sizes)==null?void 0:Sv.lg.field,...zl}},md:{...(Cv=pe.sizes)==null?void 0:Cv.md,field:{...(kv=pe.sizes)==null?void 0:kv.md.field,...zl}},sm:{...(Fv=pe.sizes)==null?void 0:Fv.sm,field:{...(Tv=pe.sizes)==null?void 0:Tv.sm.field,...zl}},xs:{...(_v=pe.sizes)==null?void 0:_v.xs,field:{...(Ev=pe.sizes)==null?void 0:Ev.xs.field,...zl},icon:{insetEnd:"1"}}},QF=UF({baseStyle:XF,sizes:ZF,variants:pe.variants,defaultProps:pe.defaultProps}),rf=V("skeleton-start-color"),of=V("skeleton-end-color"),JF={[rf.variable]:"colors.gray.100",[of.variable]:"colors.gray.400",_dark:{[rf.variable]:"colors.gray.800",[of.variable]:"colors.gray.600"},background:rf.reference,borderColor:of.reference,opacity:.7,borderRadius:"sm"},eT={baseStyle:JF},af=V("skip-link-bg"),tT={borderRadius:"md",fontWeight:"semibold",_focusVisible:{boxShadow:"outline",padding:"4",position:"fixed",top:"6",insetStart:"6",[af.variable]:"colors.white",_dark:{[af.variable]:"colors.gray.700"},bg:af.reference}},nT={baseStyle:tT},{defineMultiStyleConfig:rT,definePartsStyle:Dc}=Se(V4.keys),Co=V("slider-thumb-size"),ws=V("slider-track-size"),_r=V("slider-bg"),oT=e=>{const{orientation:t}=e;return{display:"inline-block",position:"relative",cursor:"pointer",_disabled:{opacity:.6,cursor:"default",pointerEvents:"none"},...sh({orientation:t,vertical:{h:"100%",px:Qn(Co.reference).divide(2).toString()},horizontal:{w:"100%",py:Qn(Co.reference).divide(2).toString()}})}},aT=e=>({...sh({orientation:e.orientation,horizontal:{h:ws.reference},vertical:{w:ws.reference}}),overflow:"hidden",borderRadius:"sm",[_r.variable]:"colors.gray.200",_dark:{[_r.variable]:"colors.whiteAlpha.200"},_disabled:{[_r.variable]:"colors.gray.300",_dark:{[_r.variable]:"colors.whiteAlpha.300"}},bg:_r.reference}),iT=e=>{const{orientation:t}=e;return{...sh({orientation:t,vertical:{left:"50%"},horizontal:{top:"50%"}}),w:Co.reference,h:Co.reference,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",outline:0,zIndex:1,borderRadius:"full",bg:"white",boxShadow:"base",border:"1px solid",borderColor:"transparent",transitionProperty:"transform",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_active:{"--slider-thumb-scale":"1.15"},_disabled:{bg:"gray.300"}}},sT=e=>{const{colorScheme:t}=e;return{width:"inherit",height:"inherit",[_r.variable]:`colors.${t}.500`,_dark:{[_r.variable]:`colors.${t}.200`},bg:_r.reference}},lT=Dc(e=>({container:oT(e),track:aT(e),thumb:iT(e),filledTrack:sT(e)})),uT=Dc({container:{[Co.variable]:"sizes.4",[ws.variable]:"sizes.1"}}),cT=Dc({container:{[Co.variable]:"sizes.3.5",[ws.variable]:"sizes.1"}}),dT=Dc({container:{[Co.variable]:"sizes.2.5",[ws.variable]:"sizes.0.5"}}),fT={lg:uT,md:cT,sm:dT},pT=rT({baseStyle:lT,sizes:fT,defaultProps:{size:"md",colorScheme:"blue"}}),lo=Ke("spinner-size"),mT={width:[lo.reference],height:[lo.reference]},hT={xs:{[lo.variable]:"sizes.3"},sm:{[lo.variable]:"sizes.4"},md:{[lo.variable]:"sizes.6"},lg:{[lo.variable]:"sizes.8"},xl:{[lo.variable]:"sizes.12"}},gT={baseStyle:mT,sizes:hT,defaultProps:{size:"md"}},{defineMultiStyleConfig:yT,definePartsStyle:kw}=Se(W4.keys),bT={fontWeight:"medium"},vT={opacity:.8,marginBottom:"2"},wT={verticalAlign:"baseline",fontWeight:"semibold"},xT={marginEnd:1,w:"3.5",h:"3.5",verticalAlign:"middle"},ST=kw({container:{},label:bT,helpText:vT,number:wT,icon:xT}),CT={md:kw({label:{fontSize:"sm"},helpText:{fontSize:"sm"},number:{fontSize:"2xl"}})},kT=yT({baseStyle:ST,sizes:CT,defaultProps:{size:"md"}}),{defineMultiStyleConfig:FT,definePartsStyle:Mi}=Se(["stepper","step","title","description","indicator","separator","icon","number"]),er=V("stepper-indicator-size"),ta=V("stepper-icon-size"),na=V("stepper-title-font-size"),$i=V("stepper-description-font-size"),gi=V("stepper-accent-color"),TT=Mi(({colorScheme:e})=>({stepper:{display:"flex",justifyContent:"space-between",gap:"4","&[data-orientation=vertical]":{flexDirection:"column",alignItems:"flex-start"},"&[data-orientation=horizontal]":{flexDirection:"row",alignItems:"center"},[gi.variable]:`colors.${e}.500`,_dark:{[gi.variable]:`colors.${e}.200`}},title:{fontSize:na.reference,fontWeight:"medium"},description:{fontSize:$i.reference,color:"chakra-subtle-text"},number:{fontSize:na.reference},step:{flexShrink:0,position:"relative",display:"flex",gap:"2","&[data-orientation=horizontal]":{alignItems:"center"},flex:"1","&:last-of-type:not([data-stretch])":{flex:"initial"}},icon:{flexShrink:0,width:ta.reference,height:ta.reference},indicator:{flexShrink:0,borderRadius:"full",width:er.reference,height:er.reference,display:"flex",justifyContent:"center",alignItems:"center","&[data-status=active]":{borderWidth:"2px",borderColor:gi.reference},"&[data-status=complete]":{bg:gi.reference,color:"chakra-inverse-text"},"&[data-status=incomplete]":{borderWidth:"2px"}},separator:{bg:"chakra-border-color",flex:"1","&[data-status=complete]":{bg:gi.reference},"&[data-orientation=horizontal]":{width:"100%",height:"2px",marginStart:"2"},"&[data-orientation=vertical]":{width:"2px",position:"absolute",height:"100%",maxHeight:`calc(100% - ${er.reference} - 8px)`,top:`calc(${er.reference} + 4px)`,insetStart:`calc(${er.reference} / 2 - 1px)`}}})),_T=FT({baseStyle:TT,sizes:{xs:Mi({stepper:{[er.variable]:"sizes.4",[ta.variable]:"sizes.3",[na.variable]:"fontSizes.xs",[$i.variable]:"fontSizes.xs"}}),sm:Mi({stepper:{[er.variable]:"sizes.6",[ta.variable]:"sizes.4",[na.variable]:"fontSizes.sm",[$i.variable]:"fontSizes.xs"}}),md:Mi({stepper:{[er.variable]:"sizes.8",[ta.variable]:"sizes.5",[na.variable]:"fontSizes.md",[$i.variable]:"fontSizes.sm"}}),lg:Mi({stepper:{[er.variable]:"sizes.10",[ta.variable]:"sizes.6",[na.variable]:"fontSizes.lg",[$i.variable]:"fontSizes.md"}})},defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:ET,definePartsStyle:yu}=Se(H4.keys),Yi=Ke("switch-track-width"),yo=Ke("switch-track-height"),sf=Ke("switch-track-diff"),PT=Jn.subtract(Yi,yo),bp=Ke("switch-thumb-x"),yi=Ke("switch-bg"),AT=e=>{const{colorScheme:t}=e;return{borderRadius:"full",p:"0.5",width:[Yi.reference],height:[yo.reference],transitionProperty:"common",transitionDuration:"fast",[yi.variable]:"colors.gray.300",_dark:{[yi.variable]:"colors.whiteAlpha.400"},_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed"},_checked:{[yi.variable]:`colors.${t}.500`,_dark:{[yi.variable]:`colors.${t}.200`}},bg:yi.reference}},RT={bg:"white",transitionProperty:"transform",transitionDuration:"normal",borderRadius:"inherit",width:[yo.reference],height:[yo.reference],_checked:{transform:`translateX(${bp.reference})`}},IT=yu(e=>({container:{[sf.variable]:PT,[bp.variable]:sf.reference,_rtl:{[bp.variable]:Jn(sf).negate().toString()}},track:AT(e),thumb:RT})),qT={sm:yu({container:{[Yi.variable]:"1.375rem",[yo.variable]:"sizes.3"}}),md:yu({container:{[Yi.variable]:"1.875rem",[yo.variable]:"sizes.4"}}),lg:yu({container:{[Yi.variable]:"2.875rem",[yo.variable]:"sizes.6"}})},zT=ET({baseStyle:IT,sizes:qT,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:OT,definePartsStyle:Sa}=Se(U4.keys),MT=Sa({table:{fontVariantNumeric:"lining-nums tabular-nums",borderCollapse:"collapse",width:"full"},th:{fontFamily:"heading",fontWeight:"bold",textTransform:"uppercase",letterSpacing:"wider",textAlign:"start"},td:{textAlign:"start"},caption:{mt:4,fontFamily:"heading",textAlign:"center",fontWeight:"medium"}}),Gu={"&[data-is-numeric=true]":{textAlign:"end"}},$T=Sa(e=>{const{colorScheme:t}=e;return{th:{color:j("gray.600","gray.400")(e),borderBottom:"1px",borderColor:j(`${t}.100`,`${t}.700`)(e),...Gu},td:{borderBottom:"1px",borderColor:j(`${t}.100`,`${t}.700`)(e),...Gu},caption:{color:j("gray.600","gray.100")(e)},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),LT=Sa(e=>{const{colorScheme:t}=e;return{th:{color:j("gray.600","gray.400")(e),borderBottom:"1px",borderColor:j(`${t}.100`,`${t}.700`)(e),...Gu},td:{borderBottom:"1px",borderColor:j(`${t}.100`,`${t}.700`)(e),...Gu},caption:{color:j("gray.600","gray.100")(e)},tbody:{tr:{"&:nth-of-type(odd)":{"th, td":{borderBottomWidth:"1px",borderColor:j(`${t}.100`,`${t}.700`)(e)},td:{background:j(`${t}.100`,`${t}.700`)(e)}}}},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),DT={simple:$T,striped:LT,unstyled:{}},NT={sm:Sa({th:{px:"4",py:"1",lineHeight:"4",fontSize:"xs"},td:{px:"4",py:"2",fontSize:"sm",lineHeight:"4"},caption:{px:"4",py:"2",fontSize:"xs"}}),md:Sa({th:{px:"6",py:"3",lineHeight:"4",fontSize:"xs"},td:{px:"6",py:"4",lineHeight:"5"},caption:{px:"6",py:"2",fontSize:"sm"}}),lg:Sa({th:{px:"8",py:"4",lineHeight:"5",fontSize:"sm"},td:{px:"8",py:"5",lineHeight:"6"},caption:{px:"6",py:"2",fontSize:"md"}})},BT=OT({baseStyle:MT,variants:DT,sizes:NT,defaultProps:{variant:"simple",size:"md",colorScheme:"gray"}}),wt=V("tabs-color"),hn=V("tabs-bg"),Ol=V("tabs-border-color"),{defineMultiStyleConfig:jT,definePartsStyle:On}=Se(G4.keys),VT=e=>{const{orientation:t}=e;return{display:t==="vertical"?"flex":"block"}},WT=e=>{const{isFitted:t}=e;return{flex:t?1:void 0,transitionProperty:"common",transitionDuration:"normal",_focusVisible:{zIndex:1,boxShadow:"outline"},_disabled:{cursor:"not-allowed",opacity:.4}}},HT=e=>{const{align:t="start",orientation:n}=e;return{justifyContent:{end:"flex-end",center:"center",start:"flex-start"}[t],flexDirection:n==="vertical"?"column":"row"}},UT={p:4},GT=On(e=>({root:VT(e),tab:WT(e),tablist:HT(e),tabpanel:UT})),KT={sm:On({tab:{py:1,px:4,fontSize:"sm"}}),md:On({tab:{fontSize:"md",py:2,px:4}}),lg:On({tab:{fontSize:"lg",py:3,px:4}})},YT=On(e=>{const{colorScheme:t,orientation:n}=e,r=n==="vertical",o=r?"borderStart":"borderBottom",a=r?"marginStart":"marginBottom";return{tablist:{[o]:"2px solid",borderColor:"inherit"},tab:{[o]:"2px solid",borderColor:"transparent",[a]:"-2px",_selected:{[wt.variable]:`colors.${t}.600`,_dark:{[wt.variable]:`colors.${t}.300`},borderColor:"currentColor"},_active:{[hn.variable]:"colors.gray.200",_dark:{[hn.variable]:"colors.whiteAlpha.300"}},_disabled:{_active:{bg:"none"}},color:wt.reference,bg:hn.reference}}}),XT=On(e=>{const{colorScheme:t}=e;return{tab:{borderTopRadius:"md",border:"1px solid",borderColor:"transparent",mb:"-1px",[Ol.variable]:"transparent",_selected:{[wt.variable]:`colors.${t}.600`,[Ol.variable]:"colors.white",_dark:{[wt.variable]:`colors.${t}.300`,[Ol.variable]:"colors.gray.800"},borderColor:"inherit",borderBottomColor:Ol.reference},color:wt.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),ZT=On(e=>{const{colorScheme:t}=e;return{tab:{border:"1px solid",borderColor:"inherit",[hn.variable]:"colors.gray.50",_dark:{[hn.variable]:"colors.whiteAlpha.50"},mb:"-1px",_notLast:{marginEnd:"-1px"},_selected:{[hn.variable]:"colors.white",[wt.variable]:`colors.${t}.600`,_dark:{[hn.variable]:"colors.gray.800",[wt.variable]:`colors.${t}.300`},borderColor:"inherit",borderTopColor:"currentColor",borderBottomColor:"transparent"},color:wt.reference,bg:hn.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),QT=On(e=>{const{colorScheme:t,theme:n}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",color:"gray.600",_selected:{color:ft(n,`${t}.700`),bg:ft(n,`${t}.100`)}}}}),JT=On(e=>{const{colorScheme:t}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",[wt.variable]:"colors.gray.600",_dark:{[wt.variable]:"inherit"},_selected:{[wt.variable]:"colors.white",[hn.variable]:`colors.${t}.600`,_dark:{[wt.variable]:"colors.gray.800",[hn.variable]:`colors.${t}.300`}},color:wt.reference,bg:hn.reference}}}),e_=On({}),t_={line:YT,enclosed:XT,"enclosed-colored":ZT,"soft-rounded":QT,"solid-rounded":JT,unstyled:e_},n_=jT({baseStyle:GT,sizes:KT,variants:t_,defaultProps:{size:"md",variant:"line",colorScheme:"blue"}}),{defineMultiStyleConfig:r_,definePartsStyle:bo}=Se(K4.keys),ay=V("tag-bg"),iy=V("tag-color"),lf=V("tag-shadow"),bu=V("tag-min-height"),vu=V("tag-min-width"),wu=V("tag-font-size"),xu=V("tag-padding-inline"),o_={fontWeight:"medium",lineHeight:1.2,outline:0,[iy.variable]:Ne.color.reference,[ay.variable]:Ne.bg.reference,[lf.variable]:Ne.shadow.reference,color:iy.reference,bg:ay.reference,boxShadow:lf.reference,borderRadius:"md",minH:bu.reference,minW:vu.reference,fontSize:wu.reference,px:xu.reference,_focusVisible:{[lf.variable]:"shadows.outline"}},a_={lineHeight:1.2,overflow:"visible"},i_={fontSize:"lg",w:"5",h:"5",transitionProperty:"common",transitionDuration:"normal",borderRadius:"full",marginStart:"1.5",marginEnd:"-1",opacity:.5,_disabled:{opacity:.4},_focusVisible:{boxShadow:"outline",bg:"rgba(0, 0, 0, 0.14)"},_hover:{opacity:.8},_active:{opacity:1}},s_=bo({container:o_,label:a_,closeButton:i_}),l_={sm:bo({container:{[bu.variable]:"sizes.5",[vu.variable]:"sizes.5",[wu.variable]:"fontSizes.xs",[xu.variable]:"space.2"},closeButton:{marginEnd:"-2px",marginStart:"0.35rem"}}),md:bo({container:{[bu.variable]:"sizes.6",[vu.variable]:"sizes.6",[wu.variable]:"fontSizes.sm",[xu.variable]:"space.2"}}),lg:bo({container:{[bu.variable]:"sizes.8",[vu.variable]:"sizes.8",[wu.variable]:"fontSizes.md",[xu.variable]:"space.3"}})},u_={subtle:bo(e=>{var t;return{container:(t=Ui.variants)==null?void 0:t.subtle(e)}}),solid:bo(e=>{var t;return{container:(t=Ui.variants)==null?void 0:t.solid(e)}}),outline:bo(e=>{var t;return{container:(t=Ui.variants)==null?void 0:t.outline(e)}})},c_=r_({variants:u_,baseStyle:s_,sizes:l_,defaultProps:{size:"md",variant:"subtle",colorScheme:"gray"}});var Pv;const d_={...(Pv=pe.baseStyle)==null?void 0:Pv.field,paddingY:"2",minHeight:"20",lineHeight:"short",verticalAlign:"top"};var Av,Rv;const f_={outline:e=>{var t,n;return(n=(t=pe.variants)==null?void 0:t.outline(e).field)!=null?n:{}},flushed:e=>{var t,n;return(n=(t=pe.variants)==null?void 0:t.flushed(e).field)!=null?n:{}},filled:e=>{var t,n;return(n=(t=pe.variants)==null?void 0:t.filled(e).field)!=null?n:{}},unstyled:(Rv=(Av=pe.variants)==null?void 0:Av.unstyled.field)!=null?Rv:{}};var Iv,qv,zv,Ov,Mv,$v,Lv,Dv;const p_={xs:(qv=(Iv=pe.sizes)==null?void 0:Iv.xs.field)!=null?qv:{},sm:(Ov=(zv=pe.sizes)==null?void 0:zv.sm.field)!=null?Ov:{},md:($v=(Mv=pe.sizes)==null?void 0:Mv.md.field)!=null?$v:{},lg:(Dv=(Lv=pe.sizes)==null?void 0:Lv.lg.field)!=null?Dv:{}},m_={baseStyle:d_,sizes:p_,variants:f_,defaultProps:{size:"md",variant:"outline"}},Ml=Ke("tooltip-bg"),uf=Ke("tooltip-fg"),h_=Ke("popper-arrow-bg"),g_={bg:Ml.reference,color:uf.reference,[Ml.variable]:"colors.gray.700",[uf.variable]:"colors.whiteAlpha.900",_dark:{[Ml.variable]:"colors.gray.300",[uf.variable]:"colors.gray.900"},[h_.variable]:Ml.reference,px:"2",py:"0.5",borderRadius:"sm",fontWeight:"medium",fontSize:"sm",boxShadow:"md",maxW:"xs",zIndex:"tooltip"},y_={baseStyle:g_},b_={Accordion:rk,Alert:Nk,Avatar:Zk,Badge:Ui,Breadcrumb:s7,Button:g7,Checkbox:Cr,CloseButton:R7,Code:O7,Container:$7,Divider:j7,Drawer:J7,Editable:i8,Form:f8,FormError:b8,FormLabel:w8,Heading:C8,Input:pe,Kbd:q8,Link:O8,List:N8,Menu:Z8,Modal:lF,NumberInput:yF,PinInput:xF,Popover:IF,Progress:NF,Radio:HF,Select:QF,Skeleton:eT,SkipLink:nT,Slider:pT,Spinner:gT,Stat:kT,Switch:zT,Table:BT,Tabs:n_,Tag:c_,Textarea:m_,Tooltip:y_,Card:x7,Stepper:_T},v_={none:0,"1px":"1px solid","2px":"2px solid","4px":"4px solid","8px":"8px solid"},w_={base:"0em",sm:"30em",md:"48em",lg:"62em",xl:"80em","2xl":"96em"},x_={transparent:"transparent",current:"currentColor",black:"#000000",white:"#FFFFFF",whiteAlpha:{50:"rgba(255, 255, 255, 0.04)",100:"rgba(255, 255, 255, 0.06)",200:"rgba(255, 255, 255, 0.08)",300:"rgba(255, 255, 255, 0.16)",400:"rgba(255, 255, 255, 0.24)",500:"rgba(255, 255, 255, 0.36)",600:"rgba(255, 255, 255, 0.48)",700:"rgba(255, 255, 255, 0.64)",800:"rgba(255, 255, 255, 0.80)",900:"rgba(255, 255, 255, 0.92)"},blackAlpha:{50:"rgba(0, 0, 0, 0.04)",100:"rgba(0, 0, 0, 0.06)",200:"rgba(0, 0, 0, 0.08)",300:"rgba(0, 0, 0, 0.16)",400:"rgba(0, 0, 0, 0.24)",500:"rgba(0, 0, 0, 0.36)",600:"rgba(0, 0, 0, 0.48)",700:"rgba(0, 0, 0, 0.64)",800:"rgba(0, 0, 0, 0.80)",900:"rgba(0, 0, 0, 0.92)"},gray:{50:"#F7FAFC",100:"#EDF2F7",200:"#E2E8F0",300:"#CBD5E0",400:"#A0AEC0",500:"#718096",600:"#4A5568",700:"#2D3748",800:"#1A202C",900:"#171923"},red:{50:"#FFF5F5",100:"#FED7D7",200:"#FEB2B2",300:"#FC8181",400:"#F56565",500:"#E53E3E",600:"#C53030",700:"#9B2C2C",800:"#822727",900:"#63171B"},orange:{50:"#FFFAF0",100:"#FEEBC8",200:"#FBD38D",300:"#F6AD55",400:"#ED8936",500:"#DD6B20",600:"#C05621",700:"#9C4221",800:"#7B341E",900:"#652B19"},yellow:{50:"#FFFFF0",100:"#FEFCBF",200:"#FAF089",300:"#F6E05E",400:"#ECC94B",500:"#D69E2E",600:"#B7791F",700:"#975A16",800:"#744210",900:"#5F370E"},green:{50:"#F0FFF4",100:"#C6F6D5",200:"#9AE6B4",300:"#68D391",400:"#48BB78",500:"#38A169",600:"#2F855A",700:"#276749",800:"#22543D",900:"#1C4532"},teal:{50:"#E6FFFA",100:"#B2F5EA",200:"#81E6D9",300:"#4FD1C5",400:"#38B2AC",500:"#319795",600:"#2C7A7B",700:"#285E61",800:"#234E52",900:"#1D4044"},blue:{50:"#ebf8ff",100:"#bee3f8",200:"#90cdf4",300:"#63b3ed",400:"#4299e1",500:"#3182ce",600:"#2b6cb0",700:"#2c5282",800:"#2a4365",900:"#1A365D"},cyan:{50:"#EDFDFD",100:"#C4F1F9",200:"#9DECF9",300:"#76E4F7",400:"#0BC5EA",500:"#00B5D8",600:"#00A3C4",700:"#0987A0",800:"#086F83",900:"#065666"},purple:{50:"#FAF5FF",100:"#E9D8FD",200:"#D6BCFA",300:"#B794F4",400:"#9F7AEA",500:"#805AD5",600:"#6B46C1",700:"#553C9A",800:"#44337A",900:"#322659"},pink:{50:"#FFF5F7",100:"#FED7E2",200:"#FBB6CE",300:"#F687B3",400:"#ED64A6",500:"#D53F8C",600:"#B83280",700:"#97266D",800:"#702459",900:"#521B41"}},S_={none:"0",sm:"0.125rem",base:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},C_={xs:"0 0 0 1px rgba(0, 0, 0, 0.05)",sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",base:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",outline:"0 0 0 3px rgba(66, 153, 225, 0.6)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.06)",none:"none","dark-lg":"rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"},k_={common:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",colors:"background-color, border-color, color, fill, stroke",dimensions:"width, height",position:"left, right, top, bottom",background:"background-color, background-image, background-position"},F_={"ease-in":"cubic-bezier(0.4, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.2, 1)","ease-in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},T_={"ultra-fast":"50ms",faster:"100ms",fast:"150ms",normal:"200ms",slow:"300ms",slower:"400ms","ultra-slow":"500ms"},__={property:k_,easing:F_,duration:T_},E_={hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800},P_={none:0,sm:"4px",base:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},Fw={breakpoints:w_,zIndices:E_,radii:S_,blur:P_,colors:x_,...xw,sizes:hw,shadows:C_,space:mw,borders:v_,transition:__},Tw={colors:{"chakra-body-text":{_light:"gray.800",_dark:"whiteAlpha.900"},"chakra-body-bg":{_light:"white",_dark:"gray.800"},"chakra-border-color":{_light:"gray.200",_dark:"whiteAlpha.300"},"chakra-inverse-text":{_light:"white",_dark:"gray.800"},"chakra-subtle-bg":{_light:"gray.100",_dark:"gray.700"},"chakra-subtle-text":{_light:"gray.600",_dark:"gray.400"},"chakra-placeholder-color":{_light:"gray.500",_dark:"whiteAlpha.400"}}},_w={global:{body:{fontFamily:"body",color:"chakra-body-text",bg:"chakra-body-bg",transitionProperty:"background-color",transitionDuration:"normal",lineHeight:"base"},"*::placeholder":{color:"chakra-placeholder-color"},"*, *::before, &::after":{borderColor:"chakra-border-color"}}},Ew="ltr",Pw={useSystemColorMode:!1,initialColorMode:"light",cssVarPrefix:"chakra"},A_={semanticTokens:Tw,direction:Ew,...Fw,components:b_,styles:_w,config:Pw};({...Fw});var Nc={exports:{}},Bc={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_=y.exports,I_=Symbol.for("react.element"),q_=Symbol.for("react.fragment"),z_=Object.prototype.hasOwnProperty,O_=R_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M_={key:!0,ref:!0,__self:!0,__source:!0};function Aw(e,t,n){var r,o={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)z_.call(t,r)&&!M_.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:I_,type:e,key:a,ref:i,props:o,_owner:O_.current}}Bc.Fragment=q_;Bc.jsx=Aw;Bc.jsxs=Aw;(function(e){e.exports=Bc})(Nc);const ko=Nc.exports.Fragment,x=Nc.exports.jsx,N=Nc.exports.jsxs;var $_=!1;function L_(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function D_(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var N_=function(){function e(n){var r=this;this._insertTag=function(o){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,a),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!$_:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(D_(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var a=L_(o);try{a.insertRule(r,a.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var o;return(o=r.parentNode)==null?void 0:o.removeChild(r)}),this.tags=[],this.ctr=0},e}(),at="-ms-",Ku="-moz-",de="-webkit-",Rw="comm",dh="rule",fh="decl",B_="@import",Iw="@keyframes",j_="@layer",V_=Math.abs,jc=String.fromCharCode,W_=Object.assign;function H_(e,t){return Je(e,0)^45?(((t<<2^Je(e,0))<<2^Je(e,1))<<2^Je(e,2))<<2^Je(e,3):0}function qw(e){return e.trim()}function U_(e,t){return(e=t.exec(e))?e[0]:e}function fe(e,t,n){return e.replace(t,n)}function vp(e,t){return e.indexOf(t)}function Je(e,t){return e.charCodeAt(t)|0}function xs(e,t,n){return e.slice(t,n)}function Pn(e){return e.length}function ph(e){return e.length}function $l(e,t){return t.push(e),e}function G_(e,t){return e.map(t).join("")}var Vc=1,La=1,zw=0,Et=0,je=0,ri="";function Wc(e,t,n,r,o,a,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:Vc,column:La,length:i,return:""}}function bi(e,t){return W_(Wc("",null,null,"",null,null,0),e,{length:-e.length},t)}function K_(){return je}function Y_(){return je=Et>0?Je(ri,--Et):0,La--,je===10&&(La=1,Vc--),je}function zt(){return je=Et<zw?Je(ri,Et++):0,La++,je===10&&(La=1,Vc++),je}function Mn(){return Je(ri,Et)}function Su(){return Et}function nl(e,t){return xs(ri,e,t)}function Ss(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ow(e){return Vc=La=1,zw=Pn(ri=e),Et=0,[]}function Mw(e){return ri="",e}function Cu(e){return qw(nl(Et-1,wp(e===91?e+2:e===40?e+1:e)))}function X_(e){for(;(je=Mn())&&je<33;)zt();return Ss(e)>2||Ss(je)>3?"":" "}function Z_(e,t){for(;--t&&zt()&&!(je<48||je>102||je>57&&je<65||je>70&&je<97););return nl(e,Su()+(t<6&&Mn()==32&&zt()==32))}function wp(e){for(;zt();)switch(je){case e:return Et;case 34:case 39:e!==34&&e!==39&&wp(je);break;case 40:e===41&&wp(e);break;case 92:zt();break}return Et}function Q_(e,t){for(;zt()&&e+je!==47+10;)if(e+je===42+42&&Mn()===47)break;return"/*"+nl(t,Et-1)+"*"+jc(e===47?e:zt())}function J_(e){for(;!Ss(Mn());)zt();return nl(e,Et)}function eE(e){return Mw(ku("",null,null,null,[""],e=Ow(e),0,[0],e))}function ku(e,t,n,r,o,a,i,s,l){for(var u=0,c=0,d=i,f=0,p=0,v=0,b=1,w=1,g=1,m=0,h="",S=o,k=a,E=r,F=h;w;)switch(v=m,m=zt()){case 40:if(v!=108&&Je(F,d-1)==58){vp(F+=fe(Cu(m),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:F+=Cu(m);break;case 9:case 10:case 13:case 32:F+=X_(v);break;case 92:F+=Z_(Su()-1,7);continue;case 47:switch(Mn()){case 42:case 47:$l(tE(Q_(zt(),Su()),t,n),l);break;default:F+="/"}break;case 123*b:s[u++]=Pn(F)*g;case 125*b:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+c:g==-1&&(F=fe(F,/\f/g,"")),p>0&&Pn(F)-d&&$l(p>32?ly(F+";",r,n,d-1):ly(fe(F," ","")+";",r,n,d-2),l);break;case 59:F+=";";default:if($l(E=sy(F,t,n,u,c,o,s,h,S=[],k=[],d),a),m===123)if(c===0)ku(F,t,E,E,S,a,d,s,k);else switch(f===99&&Je(F,3)===110?100:f){case 100:case 108:case 109:case 115:ku(e,E,E,r&&$l(sy(e,E,E,0,0,o,s,h,o,S=[],d),k),o,k,d,s,r?S:k);break;default:ku(F,E,E,E,[""],k,0,s,k)}}u=c=p=0,b=g=1,h=F="",d=i;break;case 58:d=1+Pn(F),p=v;default:if(b<1){if(m==123)--b;else if(m==125&&b++==0&&Y_()==125)continue}switch(F+=jc(m),m*b){case 38:g=c>0?1:(F+="\f",-1);break;case 44:s[u++]=(Pn(F)-1)*g,g=1;break;case 64:Mn()===45&&(F+=Cu(zt())),f=Mn(),c=d=Pn(h=F+=J_(Su())),m++;break;case 45:v===45&&Pn(F)==2&&(b=0)}}return a}function sy(e,t,n,r,o,a,i,s,l,u,c){for(var d=o-1,f=o===0?a:[""],p=ph(f),v=0,b=0,w=0;v<r;++v)for(var g=0,m=xs(e,d+1,d=V_(b=i[v])),h=e;g<p;++g)(h=qw(b>0?f[g]+" "+m:fe(m,/&\f/g,f[g])))&&(l[w++]=h);return Wc(e,t,n,o===0?dh:s,l,u,c)}function tE(e,t,n){return Wc(e,t,n,Rw,jc(K_()),xs(e,2,-2),0)}function ly(e,t,n,r){return Wc(e,t,n,fh,xs(e,0,r),xs(e,r+1,-1),r)}function Ca(e,t){for(var n="",r=ph(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function nE(e,t,n,r){switch(e.type){case j_:if(e.children.length)break;case B_:case fh:return e.return=e.return||e.value;case Rw:return"";case Iw:return e.return=e.value+"{"+Ca(e.children,r)+"}";case dh:e.value=e.props.join(",")}return Pn(n=Ca(e.children,r))?e.return=e.value+"{"+n+"}":""}function rE(e){var t=ph(e);return function(n,r,o,a){for(var i="",s=0;s<t;s++)i+=e[s](n,r,o,a)||"";return i}}function oE(e){return function(t){t.root||(t=t.return)&&e(t)}}var uy=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var o=t(r);return n.set(r,o),o}};function $w(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var aE=function(t,n,r){for(var o=0,a=0;o=a,a=Mn(),o===38&&a===12&&(n[r]=1),!Ss(a);)zt();return nl(t,Et)},iE=function(t,n){var r=-1,o=44;do switch(Ss(o)){case 0:o===38&&Mn()===12&&(n[r]=1),t[r]+=aE(Et-1,n,r);break;case 2:t[r]+=Cu(o);break;case 4:if(o===44){t[++r]=Mn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=jc(o)}while(o=zt());return t},sE=function(t,n){return Mw(iE(Ow(t),n))},cy=new WeakMap,lE=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!cy.get(r))&&!o){cy.set(t,!0);for(var a=[],i=sE(n,a),s=r.props,l=0,u=0;l<i.length;l++)for(var c=0;c<s.length;c++,u++)t.props[u]=a[l]?i[l].replace(/&\f/g,s[c]):s[c]+" "+i[l]}}},uE=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Lw(e,t){switch(H_(e,t)){case 5103:return de+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return de+e+Ku+e+at+e+e;case 6828:case 4268:return de+e+at+e+e;case 6165:return de+e+at+"flex-"+e+e;case 5187:return de+e+fe(e,/(\w+).+(:[^]+)/,de+"box-$1$2"+at+"flex-$1$2")+e;case 5443:return de+e+at+"flex-item-"+fe(e,/flex-|-self/,"")+e;case 4675:return de+e+at+"flex-line-pack"+fe(e,/align-content|flex-|-self/,"")+e;case 5548:return de+e+at+fe(e,"shrink","negative")+e;case 5292:return de+e+at+fe(e,"basis","preferred-size")+e;case 6060:return de+"box-"+fe(e,"-grow","")+de+e+at+fe(e,"grow","positive")+e;case 4554:return de+fe(e,/([^-])(transform)/g,"$1"+de+"$2")+e;case 6187:return fe(fe(fe(e,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),e,"")+e;case 5495:case 3959:return fe(e,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return fe(fe(e,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+at+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+e+e;case 4095:case 3583:case 4068:case 2532:return fe(e,/(.+)-inline(.+)/,de+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pn(e)-1-t>6)switch(Je(e,t+1)){case 109:if(Je(e,t+4)!==45)break;case 102:return fe(e,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+Ku+(Je(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~vp(e,"stretch")?Lw(fe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Je(e,t+1)!==115)break;case 6444:switch(Je(e,Pn(e)-3-(~vp(e,"!important")&&10))){case 107:return fe(e,":",":"+de)+e;case 101:return fe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+de+(Je(e,14)===45?"inline-":"")+"box$3$1"+de+"$2$3$1"+at+"$2box$3")+e}break;case 5936:switch(Je(e,t+11)){case 114:return de+e+at+fe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return de+e+at+fe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return de+e+at+fe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return de+e+at+e+e}return e}var cE=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case fh:t.return=Lw(t.value,t.length);break;case Iw:return Ca([bi(t,{value:fe(t.value,"@","@"+de)})],o);case dh:if(t.length)return G_(t.props,function(a){switch(U_(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ca([bi(t,{props:[fe(a,/:(read-\w+)/,":"+Ku+"$1")]})],o);case"::placeholder":return Ca([bi(t,{props:[fe(a,/:(plac\w+)/,":"+de+"input-$1")]}),bi(t,{props:[fe(a,/:(plac\w+)/,":"+Ku+"$1")]}),bi(t,{props:[fe(a,/:(plac\w+)/,at+"input-$1")]})],o)}return""})}},dE=[cE],fE=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(b){var w=b.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(b),b.setAttribute("data-s",""))})}var o=t.stylisPlugins||dE,a={},i,s=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(b){for(var w=b.getAttribute("data-emotion").split(" "),g=1;g<w.length;g++)a[w[g]]=!0;s.push(b)});var l,u=[lE,uE];{var c,d=[nE,oE(function(b){c.insert(b)})],f=rE(u.concat(o,d)),p=function(w){return Ca(eE(w),f)};l=function(w,g,m,h){c=m,p(w?w+"{"+g.styles+"}":g.styles),h&&(v.inserted[g.name]=!0)}}var v={key:n,sheet:new N_({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:l};return v.sheet.hydrate(s),v};function Da(){return Da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Da.apply(null,arguments)}var Dw={exports:{}},ye={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ze=typeof Symbol=="function"&&Symbol.for,mh=Ze?Symbol.for("react.element"):60103,hh=Ze?Symbol.for("react.portal"):60106,Hc=Ze?Symbol.for("react.fragment"):60107,Uc=Ze?Symbol.for("react.strict_mode"):60108,Gc=Ze?Symbol.for("react.profiler"):60114,Kc=Ze?Symbol.for("react.provider"):60109,Yc=Ze?Symbol.for("react.context"):60110,gh=Ze?Symbol.for("react.async_mode"):60111,Xc=Ze?Symbol.for("react.concurrent_mode"):60111,Zc=Ze?Symbol.for("react.forward_ref"):60112,Qc=Ze?Symbol.for("react.suspense"):60113,pE=Ze?Symbol.for("react.suspense_list"):60120,Jc=Ze?Symbol.for("react.memo"):60115,ed=Ze?Symbol.for("react.lazy"):60116,mE=Ze?Symbol.for("react.block"):60121,hE=Ze?Symbol.for("react.fundamental"):60117,gE=Ze?Symbol.for("react.responder"):60118,yE=Ze?Symbol.for("react.scope"):60119;function Nt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case mh:switch(e=e.type,e){case gh:case Xc:case Hc:case Gc:case Uc:case Qc:return e;default:switch(e=e&&e.$$typeof,e){case Yc:case Zc:case ed:case Jc:case Kc:return e;default:return t}}case hh:return t}}}function Nw(e){return Nt(e)===Xc}ye.AsyncMode=gh;ye.ConcurrentMode=Xc;ye.ContextConsumer=Yc;ye.ContextProvider=Kc;ye.Element=mh;ye.ForwardRef=Zc;ye.Fragment=Hc;ye.Lazy=ed;ye.Memo=Jc;ye.Portal=hh;ye.Profiler=Gc;ye.StrictMode=Uc;ye.Suspense=Qc;ye.isAsyncMode=function(e){return Nw(e)||Nt(e)===gh};ye.isConcurrentMode=Nw;ye.isContextConsumer=function(e){return Nt(e)===Yc};ye.isContextProvider=function(e){return Nt(e)===Kc};ye.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===mh};ye.isForwardRef=function(e){return Nt(e)===Zc};ye.isFragment=function(e){return Nt(e)===Hc};ye.isLazy=function(e){return Nt(e)===ed};ye.isMemo=function(e){return Nt(e)===Jc};ye.isPortal=function(e){return Nt(e)===hh};ye.isProfiler=function(e){return Nt(e)===Gc};ye.isStrictMode=function(e){return Nt(e)===Uc};ye.isSuspense=function(e){return Nt(e)===Qc};ye.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Hc||e===Xc||e===Gc||e===Uc||e===Qc||e===pE||typeof e=="object"&&e!==null&&(e.$$typeof===ed||e.$$typeof===Jc||e.$$typeof===Kc||e.$$typeof===Yc||e.$$typeof===Zc||e.$$typeof===hE||e.$$typeof===gE||e.$$typeof===yE||e.$$typeof===mE)};ye.typeOf=Nt;(function(e){e.exports=ye})(Dw);var Bw=Dw.exports,bE={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jw={};jw[Bw.ForwardRef]=bE;jw[Bw.Memo]=vE;var wE=!0;function Vw(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(r+=o+" ")}),r}var yh=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||wE===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},bh=function(t,n,r){yh(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+o:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function xE(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var SE={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},CE=!1,kE=/[A-Z]|^ms/g,FE=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ww=function(t){return t.charCodeAt(1)===45},dy=function(t){return t!=null&&typeof t!="boolean"},cf=$w(function(e){return Ww(e)?e:e.replace(kE,"-$&").toLowerCase()}),fy=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(FE,function(r,o,a){return An={name:o,styles:a,next:An},o})}return SE[t]!==1&&!Ww(t)&&typeof n=="number"&&n!==0?n+"px":n},TE="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function Cs(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var o=n;if(o.anim===1)return An={name:o.name,styles:o.styles,next:An},o.name;var a=n;if(a.styles!==void 0){var i=a.next;if(i!==void 0)for(;i!==void 0;)An={name:i.name,styles:i.styles,next:An},i=i.next;var s=a.styles+";";return s}return _E(e,t,n)}case"function":{if(e!==void 0){var l=An,u=n(e);return An=l,Cs(e,t,u)}break}}var c=n;if(t==null)return c;var d=t[c];return d!==void 0?d:c}function _E(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Cs(e,t,n[o])+";";else for(var a in n){var i=n[a];if(typeof i!="object"){var s=i;t!=null&&t[s]!==void 0?r+=a+"{"+t[s]+"}":dy(s)&&(r+=cf(a)+":"+fy(a,s)+";")}else{if(a==="NO_COMPONENT_SELECTOR"&&CE)throw new Error(TE);if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var l=0;l<i.length;l++)dy(i[l])&&(r+=cf(a)+":"+fy(a,i[l])+";");else{var u=Cs(e,t,i);switch(a){case"animation":case"animationName":{r+=cf(a)+":"+u+";";break}default:r+=a+"{"+u+"}"}}}}return r}var py=/label:\s*([^\s;{]+)\s*(;|$)/g,An;function td(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,o="";An=void 0;var a=e[0];if(a==null||a.raw===void 0)r=!1,o+=Cs(n,t,a);else{var i=a;o+=i[0]}for(var s=1;s<e.length;s++)if(o+=Cs(n,t,e[s]),r){var l=a;o+=l[s]}py.lastIndex=0;for(var u="",c;(c=py.exec(o))!==null;)u+="-"+c[1];var d=xE(o)+u;return{name:d,styles:o,next:An}}var EE=function(t){return t()},Hw=V0["useInsertionEffect"]?V0["useInsertionEffect"]:!1,Uw=Hw||EE,my=Hw||y.exports.useLayoutEffect,PE=!1,vh=y.exports.createContext(typeof HTMLElement<"u"?fE({key:"css"}):null);vh.Provider;var AE=function(){return y.exports.useContext(vh)},wh=function(t){return y.exports.forwardRef(function(n,r){var o=y.exports.useContext(vh);return t(n,o,r)})},Na=y.exports.createContext({}),RE=function(t,n){if(typeof n=="function"){var r=n(t);return r}return Da({},t,n)},IE=uy(function(e){return uy(function(t){return RE(e,t)})}),qE=function(t){var n=y.exports.useContext(Na);return t.theme!==n&&(n=IE(n)(t.theme)),x(Na.Provider,{value:n,children:t.children})},xh={}.hasOwnProperty,xp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",zE=function(t,n){var r={};for(var o in n)xh.call(n,o)&&(r[o]=n[o]);return r[xp]=t,r},OE=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return yh(n,r,o),Uw(function(){return bh(n,r,o)}),null},ME=wh(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[xp],a=[r],i="";typeof e.className=="string"?i=Vw(t.registered,a,e.className):e.className!=null&&(i=e.className+" ");var s=td(a,void 0,y.exports.useContext(Na));i+=t.key+"-"+s.name;var l={};for(var u in e)xh.call(e,u)&&u!=="css"&&u!==xp&&!PE&&(l[u]=e[u]);return l.className=i,n&&(l.ref=n),N(ko,{children:[x(OE,{cache:t,serialized:s,isStringTag:typeof o=="string"}),x(o,{...l})]})}),$E=ME,hy=function(t,n){var r=arguments;if(n==null||!xh.call(n,"css"))return y.exports.createElement.apply(void 0,r);var o=r.length,a=new Array(o);a[0]=$E,a[1]=zE(t,n);for(var i=2;i<o;i++)a[i]=r[i];return y.exports.createElement.apply(null,a)};(function(e){var t;(function(n){})(t||(t=e.JSX||(e.JSX={})))})(hy||(hy={}));var nd=wh(function(e,t){var n=e.styles,r=td([n],void 0,y.exports.useContext(Na)),o=y.exports.useRef();return my(function(){var a=t.key+"-global",i=new t.sheet.constructor({key:a,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),s=!1,l=document.querySelector('style[data-emotion="'+a+" "+r.name+'"]');return t.sheet.tags.length&&(i.before=t.sheet.tags[0]),l!==null&&(s=!0,l.setAttribute("data-emotion",a),i.hydrate([l])),o.current=[i,s],function(){i.flush()}},[t]),my(function(){var a=o.current,i=a[0],s=a[1];if(s){a[1]=!1;return}if(r.next!==void 0&&bh(t,r.next,!0),i.tags.length){var l=i.tags[i.tags.length-1].nextElementSibling;i.before=l,i.flush()}t.insert("",r,i,!1)},[t,r.name]),null});function LE(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return td(t)}function DE(){var e=LE.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}const Sh=y.exports.createContext({});Sh.displayName="ColorModeContext";function Ch(){const e=y.exports.useContext(Sh);if(e===void 0)throw new Error("useColorMode must be used within a ColorModeProvider");return e}const Ll={light:"chakra-ui-light",dark:"chakra-ui-dark"};function NE(e={}){const{preventTransition:t=!0,nonce:n}=e,r={setDataset:o=>{const a=t?r.preventTransition():void 0;document.documentElement.dataset.theme=o,document.documentElement.style.colorScheme=o,a==null||a()},setClassName(o){document.body.classList.add(o?Ll.dark:Ll.light),document.body.classList.remove(o?Ll.light:Ll.dark)},query(){return window.matchMedia("(prefers-color-scheme: dark)")},getSystemTheme(o){var i;return((i=r.query().matches)!=null?i:o==="dark")?"dark":"light"},addListener(o){const a=r.query(),i=s=>{o(s.matches?"dark":"light")};return typeof a.addListener=="function"?a.addListener(i):a.addEventListener("change",i),()=>{typeof a.removeListener=="function"?a.removeListener(i):a.removeEventListener("change",i)}},preventTransition(){const o=document.createElement("style");return o.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),n!==void 0&&(o.nonce=n),document.head.appendChild(o),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(o)})})}}};return r}const BE="chakra-ui-color-mode";function jE(e){return{ssr:!1,type:"localStorage",get(t){if(!(globalThis!=null&&globalThis.document))return t;let n;try{n=localStorage.getItem(e)||t}catch{}return n||t},set(t){try{localStorage.setItem(e,t)}catch{}}}}const VE=jE(BE),gy=()=>{},WE=xC()?y.exports.useLayoutEffect:y.exports.useEffect;function yy(e,t){return e.type==="cookie"&&e.ssr?e.get(t):t}const Gw=function(t){const{value:n,children:r,options:{useSystemColorMode:o,initialColorMode:a,disableTransitionOnChange:i}={},colorModeManager:s=VE}=t,l=AE(),u=a==="dark"?"dark":"light",[c,d]=y.exports.useState(()=>yy(s,u)),[f,p]=y.exports.useState(()=>yy(s)),{getSystemTheme:v,setClassName:b,setDataset:w,addListener:g}=y.exports.useMemo(()=>NE({preventTransition:i,nonce:l==null?void 0:l.nonce}),[i,l==null?void 0:l.nonce]),m=a==="system"&&!c?f:c,h=y.exports.useCallback(E=>{const F=E==="system"?v():E;d(F),b(F==="dark"),w(F),s.set(F)},[s,v,b,w]);WE(()=>{a==="system"&&p(v())},[]),y.exports.useEffect(()=>{const E=s.get();if(E){h(E);return}if(a==="system"){h("system");return}h(u)},[s,u,a,h]);const S=y.exports.useCallback(()=>{h(m==="dark"?"light":"dark")},[m,h]);y.exports.useEffect(()=>{if(!!o)return g(h)},[o,g,h]);const k=y.exports.useMemo(()=>({colorMode:n!=null?n:m,toggleColorMode:n?gy:S,setColorMode:n?gy:h,forced:n!==void 0}),[m,S,h,n]);return x(Sh.Provider,{value:k,children:r})};Gw.displayName="ColorModeProvider";const Kw=String.raw,Yw=Kw`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,HE=()=>x(nd,{styles:Yw}),UE=({scope:e=""})=>x(nd,{styles:Kw`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${Yw}
    `});function GE(e){const{cssVarsRoot:t,theme:n,children:r}=e,o=y.exports.useMemo(()=>k4(n),[n]);return N(qE,{theme:o,children:[x(KE,{root:t}),r]})}function KE({root:e=":host, :root"}){const t=[e,"[data-theme]"].join(",");return x(nd,{styles:n=>({[t]:n.__cssVars})})}nt({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function YE(){const{colorMode:e}=Ch();return x(nd,{styles:t=>{const n=nw(t,"styles.global"),r=gn(n,{theme:t,colorMode:e});return r?cw(r)(t):void 0}})}const[XE,ZE]=nt({strict:!1,name:"PortalManagerContext"});function Xw(e){const{children:t,zIndex:n}=e;return x(XE,{value:{zIndex:n},children:t})}Xw.displayName="PortalManager";const Zw=y.exports.createContext({getDocument(){return document},getWindow(){return window}});Zw.displayName="EnvironmentContext";function Qw(e){const{children:t,environment:n,disabled:r}=e,o=y.exports.useRef(null),a=y.exports.useMemo(()=>n||{getDocument:()=>{var s,l;return(l=(s=o.current)==null?void 0:s.ownerDocument)!=null?l:document},getWindow:()=>{var s,l;return(l=(s=o.current)==null?void 0:s.ownerDocument.defaultView)!=null?l:window}},[n]),i=!r||!n;return N(Zw.Provider,{value:a,children:[t,i&&x("span",{id:"__chakra_env",hidden:!0,ref:o})]})}Qw.displayName="EnvironmentProvider";const QE=e=>{const{children:t,colorModeManager:n,portalZIndex:r,resetScope:o,resetCSS:a=!0,theme:i={},environment:s,cssVarsRoot:l,disableEnvironment:u,disableGlobalStyle:c}=e,d=x(Qw,{environment:s,disabled:u,children:t});return x(GE,{theme:i,cssVarsRoot:l,children:N(Gw,{colorModeManager:n,options:i.config,children:[a?x(UE,{scope:o}):x(HE,{}),!c&&x(YE,{}),r?x(Xw,{zIndex:r,children:d}):d]})})},kh=y.exports.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),rd=y.exports.createContext({});function JE(){return y.exports.useContext(rd).visualElement}const oi=y.exports.createContext(null),Io=typeof document<"u",Xi=Io?y.exports.useLayoutEffect:y.exports.useEffect,Jw=y.exports.createContext({strict:!1});function eP(e,t,n,r){const o=JE(),a=y.exports.useContext(Jw),i=y.exports.useContext(oi),s=y.exports.useContext(kh).reducedMotion,l=y.exports.useRef();r=r||a.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:o,props:n,presenceId:i?i.id:void 0,blockInitialAnimation:i?i.initial===!1:!1,reducedMotionConfig:s}));const u=l.current;return Xi(()=>{u&&u.render()}),Xi(()=>{u&&u.animationState&&u.animationState.animateChanges()}),Xi(()=>()=>u&&u.notify("Unmount"),[]),u}function ra(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function tP(e,t,n){return y.exports.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):ra(n)&&(n.current=r))},[t])}function ks(e){return typeof e=="string"||Array.isArray(e)}function od(e){return typeof e=="object"&&typeof e.start=="function"}const nP=["initial","animate","exit","whileHover","whileDrag","whileTap","whileFocus","whileInView"];function ad(e){return od(e.animate)||nP.some(t=>ks(e[t]))}function e2(e){return Boolean(ad(e)||e.variants)}function rP(e,t){if(ad(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ks(n)?n:void 0,animate:ks(r)?r:void 0}}return e.inherit!==!1?t:{}}function oP(e){const{initial:t,animate:n}=rP(e,y.exports.useContext(rd));return y.exports.useMemo(()=>({initial:t,animate:n}),[by(t),by(n)])}function by(e){return Array.isArray(e)?e.join(" "):e}const Yn=e=>({isEnabled:t=>e.some(n=>!!t[n])}),Fs={measureLayout:Yn(["layout","layoutId","drag"]),animation:Yn(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"]),exit:Yn(["exit"]),drag:Yn(["drag","dragControls"]),focus:Yn(["whileFocus"]),hover:Yn(["whileHover","onHoverStart","onHoverEnd"]),tap:Yn(["whileTap","onTap","onTapStart","onTapCancel"]),pan:Yn(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),inView:Yn(["whileInView","onViewportEnter","onViewportLeave"])};function aP(e){for(const t in e)t==="projectionNodeConstructor"?Fs.projectionNodeConstructor=e[t]:Fs[t].Component=e[t]}function id(e){const t=y.exports.useRef(null);return t.current===null&&(t.current=e()),t.current}const Zi={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let iP=1;function sP(){return id(()=>{if(Zi.hasEverUpdated)return iP++})}const Fh=y.exports.createContext({});class lP extends ho.Component{getSnapshotBeforeUpdate(){const{visualElement:t,props:n}=this.props;return t&&t.setProps(n),null}componentDidUpdate(){}render(){return this.props.children}}const t2=y.exports.createContext({}),uP=Symbol.for("motionComponentSymbol");function cP({preloadedFeatures:e,createVisualElement:t,projectionNodeConstructor:n,useRender:r,useVisualState:o,Component:a}){e&&aP(e);function i(l,u){const c={...y.exports.useContext(kh),...l,layoutId:dP(l)},{isStatic:d}=c;let f=null;const p=oP(l),v=d?void 0:sP(),b=o(l,d);if(!d&&Io){p.visualElement=eP(a,b,c,t);const w=y.exports.useContext(Jw).strict,g=y.exports.useContext(t2);p.visualElement&&(f=p.visualElement.loadFeatures(c,w,e,v,n||Fs.projectionNodeConstructor,g))}return N(lP,{visualElement:p.visualElement,props:c,children:[f,x(rd.Provider,{value:p,children:r(a,l,v,tP(b,p.visualElement,u),b,d,p.visualElement)})]})}const s=y.exports.forwardRef(i);return s[uP]=a,s}function dP({layoutId:e}){const t=y.exports.useContext(Fh).id;return t&&e!==void 0?t+"-"+e:e}function fP(e){function t(r,o={}){return cP(e(r,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const pP=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Th(e){return typeof e!="string"||e.includes("-")?!1:!!(pP.indexOf(e)>-1||/[A-Z]/.test(e))}const Yu={};function mP(e){Object.assign(Yu,e)}const Xu=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],qo=new Set(Xu);function n2(e,{layout:t,layoutId:n}){return qo.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Yu[e]||e==="opacity")}const Bn=e=>!!(e!=null&&e.getVelocity),hP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},gP=(e,t)=>Xu.indexOf(e)-Xu.indexOf(t);function yP({transform:e,transformKeys:t},{enableHardwareAcceleration:n=!0,allowTransformNone:r=!0},o,a){let i="";t.sort(gP);for(const s of t)i+=`${hP[s]||s}(${e[s]}) `;return n&&!e.z&&(i+="translateZ(0)"),i=i.trim(),a?i=a(e,o?"":i):r&&o&&(i="none"),i}function r2(e){return e.startsWith("--")}const bP=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Ba=(e,t,n)=>Math.min(Math.max(n,e),t),zo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Qi={...zo,transform:e=>Ba(0,1,e)},Dl={...zo,default:1},Ji=e=>Math.round(e*1e5)/1e5,Ts=/(-)?([\d]*\.?[\d])+/g,Sp=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,vP=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function rl(e){return typeof e=="string"}const ol=e=>({test:t=>rl(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Sr=ol("deg"),$n=ol("%"),H=ol("px"),wP=ol("vh"),xP=ol("vw"),vy={...$n,parse:e=>$n.parse(e)/100,transform:e=>$n.transform(e*100)},wy={...zo,transform:Math.round},o2={borderWidth:H,borderTopWidth:H,borderRightWidth:H,borderBottomWidth:H,borderLeftWidth:H,borderRadius:H,radius:H,borderTopLeftRadius:H,borderTopRightRadius:H,borderBottomRightRadius:H,borderBottomLeftRadius:H,width:H,maxWidth:H,height:H,maxHeight:H,size:H,top:H,right:H,bottom:H,left:H,padding:H,paddingTop:H,paddingRight:H,paddingBottom:H,paddingLeft:H,margin:H,marginTop:H,marginRight:H,marginBottom:H,marginLeft:H,rotate:Sr,rotateX:Sr,rotateY:Sr,rotateZ:Sr,scale:Dl,scaleX:Dl,scaleY:Dl,scaleZ:Dl,skew:Sr,skewX:Sr,skewY:Sr,distance:H,translateX:H,translateY:H,translateZ:H,x:H,y:H,z:H,perspective:H,transformPerspective:H,opacity:Qi,originX:vy,originY:vy,originZ:H,zIndex:wy,fillOpacity:Qi,strokeOpacity:Qi,numOctaves:wy};function _h(e,t,n,r){const{style:o,vars:a,transform:i,transformKeys:s,transformOrigin:l}=e;s.length=0;let u=!1,c=!1,d=!0;for(const f in t){const p=t[f];if(r2(f)){a[f]=p;continue}const v=o2[f],b=bP(p,v);if(qo.has(f)){if(u=!0,i[f]=b,s.push(f),!d)continue;p!==(v.default||0)&&(d=!1)}else f.startsWith("origin")?(c=!0,l[f]=b):o[f]=b}if(t.transform||(u||r?o.transform=yP(e,n,d,r):o.transform&&(o.transform="none")),c){const{originX:f="50%",originY:p="50%",originZ:v=0}=l;o.transformOrigin=`${f} ${p} ${v}`}}const Eh=()=>({style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}});function a2(e,t,n){for(const r in t)!Bn(t[r])&&!n2(r,n)&&(e[r]=t[r])}function SP({transformTemplate:e},t,n){return y.exports.useMemo(()=>{const r=Eh();return _h(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function CP(e,t,n){const r=e.style||{},o={};return a2(o,r,e),Object.assign(o,SP(e,t,n)),e.transformValues?e.transformValues(o):o}function kP(e,t,n){const r={},o=CP(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),r.style=o,r}const FP=["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"],TP=["whileTap","onTap","onTapStart","onTapCancel"],_P=["onPan","onPanStart","onPanSessionStart","onPanEnd"],EP=["whileInView","onViewportEnter","onViewportLeave","viewport"],PP=new Set(["initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","onHoverStart","onHoverEnd","layoutScroll",...EP,...TP,...FP,..._P]);function Zu(e){return PP.has(e)}let i2=e=>!Zu(e);function AP(e){!e||(i2=t=>t.startsWith("on")?!Zu(t):e(t))}try{AP(require("@emotion/is-prop-valid").default)}catch{}function RP(e,t,n){const r={};for(const o in e)(i2(o)||n===!0&&Zu(o)||!t&&!Zu(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function xy(e,t,n){return typeof e=="string"?e:H.transform(t+n*e)}function IP(e,t,n){const r=xy(t,e.x,e.width),o=xy(n,e.y,e.height);return`${r} ${o}`}const qP={offset:"stroke-dashoffset",array:"stroke-dasharray"},zP={offset:"strokeDashoffset",array:"strokeDasharray"};function OP(e,t,n=1,r=0,o=!0){e.pathLength=1;const a=o?qP:zP;e[a.offset]=H.transform(-r);const i=H.transform(t),s=H.transform(n);e[a.array]=`${i} ${s}`}function Ph(e,{attrX:t,attrY:n,originX:r,originY:o,pathLength:a,pathSpacing:i=1,pathOffset:s=0,...l},u,c,d){if(_h(e,l,u,d),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:p,dimensions:v}=e;f.transform&&(v&&(p.transform=f.transform),delete f.transform),v&&(r!==void 0||o!==void 0||p.transform)&&(p.transformOrigin=IP(v,r!==void 0?r:.5,o!==void 0?o:.5)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),a!==void 0&&OP(f,a,i,s,!1)}const s2=()=>({...Eh(),attrs:{}}),Ah=e=>typeof e=="string"&&e.toLowerCase()==="svg";function MP(e,t,n,r){const o=y.exports.useMemo(()=>{const a=s2();return Ph(a,t,{enableHardwareAcceleration:!1},Ah(r),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};a2(a,e.style,e),o.style={...a,...o.style}}return o}function $P(e=!1){return(n,r,o,a,{latestValues:i},s)=>{const u=(Th(n)?MP:kP)(r,i,s,n),d={...RP(r,typeof n=="string",e),...u,ref:a};return o&&(d["data-projection-id"]=o),y.exports.createElement(n,d)}}const Rh=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function l2(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const u2=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function c2(e,t,n,r){l2(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(u2.has(o)?o:Rh(o),t.attrs[o])}function Ih(e){const{style:t}=e,n={};for(const r in t)(Bn(t[r])||n2(r,e))&&(n[r]=t[r]);return n}function d2(e){const t=Ih(e);for(const n in e)if(Bn(e[n])){const r=n==="x"||n==="y"?"attr"+n.toUpperCase():n;t[r]=e[n]}return t}function qh(e,t,n,r={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),t}const Qu=e=>Array.isArray(e),LP=e=>Boolean(e&&typeof e=="object"&&e.mix&&e.toValue),DP=e=>Qu(e)?e[e.length-1]||0:e;function Fu(e){const t=Bn(e)?e.get():e;return LP(t)?t.toValue():t}function NP({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,a){const i={latestValues:BP(r,o,a,e),renderState:t()};return n&&(i.mount=s=>n(r,s,i)),i}const f2=e=>(t,n)=>{const r=y.exports.useContext(rd),o=y.exports.useContext(oi),a=()=>NP(e,t,r,o);return n?a():id(a)};function BP(e,t,n,r){const o={},a=r(e);for(const f in a)o[f]=Fu(a[f]);let{initial:i,animate:s}=e;const l=ad(e),u=e2(e);t&&u&&!l&&e.inherit!==!1&&(i===void 0&&(i=t.initial),s===void 0&&(s=t.animate));let c=n?n.initial===!1:!1;c=c||i===!1;const d=c?s:i;return d&&typeof d!="boolean"&&!od(d)&&(Array.isArray(d)?d:[d]).forEach(p=>{const v=qh(e,p);if(!v)return;const{transitionEnd:b,transition:w,...g}=v;for(const m in g){let h=g[m];if(Array.isArray(h)){const S=c?h.length-1:0;h=h[S]}h!==null&&(o[m]=h)}for(const m in b)o[m]=b[m]}),o}const jP={useVisualState:f2({scrapeMotionValuesFromProps:d2,createRenderState:s2,onMount:(e,t,{renderState:n,latestValues:r})=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}Ph(n,r,{enableHardwareAcceleration:!1},Ah(t.tagName),e.transformTemplate),c2(t,n)}})},VP={useVisualState:f2({scrapeMotionValuesFromProps:Ih,createRenderState:Eh})};function WP(e,{forwardMotionProps:t=!1},n,r,o){return{...Th(e)?jP:VP,preloadedFeatures:n,useRender:$P(t),createVisualElement:r,projectionNodeConstructor:o,Component:e}}var we;(function(e){e.Animate="animate",e.Hover="whileHover",e.Tap="whileTap",e.Drag="whileDrag",e.Focus="whileFocus",e.InView="whileInView",e.Exit="exit"})(we||(we={}));function sd(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Cp(e,t,n,r){y.exports.useEffect(()=>{const o=e.current;if(n&&o)return sd(o,t,n,r)},[e,t,n,r])}function HP({whileFocus:e,visualElement:t}){const{animationState:n}=t,r=()=>{n&&n.setActive(we.Focus,!0)},o=()=>{n&&n.setActive(we.Focus,!1)};Cp(t,"focus",e?r:void 0),Cp(t,"blur",e?o:void 0)}function p2(e){return typeof PointerEvent<"u"&&e instanceof PointerEvent?e.pointerType==="mouse":e instanceof MouseEvent}function m2(e){return!!e.touches}function UP(e){return t=>{const n=t instanceof MouseEvent;(!n||n&&t.button===0)&&e(t)}}const GP={pageX:0,pageY:0};function KP(e,t="page"){const r=e.touches[0]||e.changedTouches[0]||GP;return{x:r[t+"X"],y:r[t+"Y"]}}function YP(e,t="page"){return{x:e[t+"X"],y:e[t+"Y"]}}function zh(e,t="page"){return{point:m2(e)?KP(e,t):YP(e,t)}}const h2=(e,t=!1)=>{const n=r=>e(r,zh(r));return t?UP(n):n},XP=()=>Io&&window.onpointerdown===null,ZP=()=>Io&&window.ontouchstart===null,QP=()=>Io&&window.onmousedown===null,JP={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},eA={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function g2(e){return XP()?e:ZP()?eA[e]:QP()?JP[e]:e}function ka(e,t,n,r){return sd(e,g2(t),h2(n,t==="pointerdown"),r)}function Ju(e,t,n,r){return Cp(e,g2(t),n&&h2(n,t==="pointerdown"),r)}function y2(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Sy=y2("dragHorizontal"),Cy=y2("dragVertical");function b2(e){let t=!1;if(e==="y")t=Cy();else if(e==="x")t=Sy();else{const n=Sy(),r=Cy();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function v2(){const e=b2(!0);return e?(e(),!1):!0}function ky(e,t,n){return(r,o)=>{!p2(r)||v2()||(e.animationState&&e.animationState.setActive(we.Hover,t),n&&n(r,o))}}function tA({onHoverStart:e,onHoverEnd:t,whileHover:n,visualElement:r}){Ju(r,"pointerenter",e||n?ky(r,!0,e):void 0,{passive:!e}),Ju(r,"pointerleave",t||n?ky(r,!1,t):void 0,{passive:!t})}const w2=(e,t)=>t?e===t?!0:w2(e,t.parentElement):!1;function Oh(e){return y.exports.useEffect(()=>()=>e(),[])}const nA=(e,t)=>n=>t(e(n)),ld=(...e)=>e.reduce(nA);function rA({onTap:e,onTapStart:t,onTapCancel:n,whileTap:r,visualElement:o}){const a=e||t||n||r,i=y.exports.useRef(!1),s=y.exports.useRef(null),l={passive:!(t||e||n||p)};function u(){s.current&&s.current(),s.current=null}function c(){return u(),i.current=!1,o.animationState&&o.animationState.setActive(we.Tap,!1),!v2()}function d(v,b){!c()||(w2(o.current,v.target)?e&&e(v,b):n&&n(v,b))}function f(v,b){!c()||n&&n(v,b)}function p(v,b){u(),!i.current&&(i.current=!0,s.current=ld(ka(window,"pointerup",d,l),ka(window,"pointercancel",f,l)),o.animationState&&o.animationState.setActive(we.Tap,!0),t&&t(v,b))}Ju(o,"pointerdown",a?p:void 0,l),Oh(u)}const oA="production",x2=typeof process>"u"||process.env===void 0?oA:"production",Fy=new Set;function S2(e,t,n){e||Fy.has(t)||(console.warn(t),n&&console.warn(n),Fy.add(t))}const kp=new WeakMap,df=new WeakMap,aA=e=>{const t=kp.get(e.target);t&&t(e)},iA=e=>{e.forEach(aA)};function sA({root:e,...t}){const n=e||document;df.has(n)||df.set(n,{});const r=df.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(iA,{root:e,...t})),r[o]}function lA(e,t,n){const r=sA(t);return kp.set(e,n),r.observe(e),()=>{kp.delete(e),r.unobserve(e)}}function uA({visualElement:e,whileInView:t,onViewportEnter:n,onViewportLeave:r,viewport:o={}}){const a=y.exports.useRef({hasEnteredView:!1,isInView:!1});let i=Boolean(t||n||r);o.once&&a.current.hasEnteredView&&(i=!1),(typeof IntersectionObserver>"u"?fA:dA)(i,a.current,e,o)}const cA={some:0,all:1};function dA(e,t,n,{root:r,margin:o,amount:a="some",once:i}){y.exports.useEffect(()=>{if(!e||!n.current)return;const s={root:r==null?void 0:r.current,rootMargin:o,threshold:typeof a=="number"?a:cA[a]},l=u=>{const{isIntersecting:c}=u;if(t.isInView===c||(t.isInView=c,i&&!c&&t.hasEnteredView))return;c&&(t.hasEnteredView=!0),n.animationState&&n.animationState.setActive(we.InView,c);const d=n.getProps(),f=c?d.onViewportEnter:d.onViewportLeave;f&&f(u)};return lA(n.current,s,l)},[e,r,o,a])}function fA(e,t,n,{fallback:r=!0}){y.exports.useEffect(()=>{!e||!r||(x2!=="production"&&S2(!1,"IntersectionObserver not available on this device. whileInView animations will trigger on mount."),requestAnimationFrame(()=>{t.hasEnteredView=!0;const{onViewportEnter:o}=n.getProps();o&&o(null),n.animationState&&n.animationState.setActive(we.InView,!0)}))},[e])}const Ar=e=>t=>(e(t),null),pA={inView:Ar(uA),tap:Ar(rA),focus:Ar(HP),hover:Ar(tA)};function Mh(){const e=y.exports.useContext(oi);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,o=y.exports.useId();return y.exports.useEffect(()=>r(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}function mA(){return hA(y.exports.useContext(oi))}function hA(e){return e===null?!0:e.isPresent}function C2(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const gA=e=>/^\-?\d*\.?\d+$/.test(e),yA=e=>/^0[^.\s]+$/.test(e),ar={delta:0,timestamp:0},k2=1/60*1e3,bA=typeof performance<"u"?()=>performance.now():()=>Date.now(),F2=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(bA()),k2);function vA(e){let t=[],n=[],r=0,o=!1,a=!1;const i=new WeakSet,s={schedule:(l,u=!1,c=!1)=>{const d=c&&o,f=d?t:n;return u&&i.add(l),f.indexOf(l)===-1&&(f.push(l),d&&o&&(r=t.length)),l},cancel:l=>{const u=n.indexOf(l);u!==-1&&n.splice(u,1),i.delete(l)},process:l=>{if(o){a=!0;return}if(o=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let u=0;u<r;u++){const c=t[u];c(l),i.has(c)&&(s.schedule(c),e())}o=!1,a&&(a=!1,s.process(l))}};return s}const wA=40;let Fp=!0,_s=!1,Tp=!1;const al=["read","update","preRender","render","postRender"],ud=al.reduce((e,t)=>(e[t]=vA(()=>_s=!0),e),{}),St=al.reduce((e,t)=>{const n=ud[t];return e[t]=(r,o=!1,a=!1)=>(_s||SA(),n.schedule(r,o,a)),e},{}),Br=al.reduce((e,t)=>(e[t]=ud[t].cancel,e),{}),ff=al.reduce((e,t)=>(e[t]=()=>ud[t].process(ar),e),{}),xA=e=>ud[e].process(ar),T2=e=>{_s=!1,ar.delta=Fp?k2:Math.max(Math.min(e-ar.timestamp,wA),1),ar.timestamp=e,Tp=!0,al.forEach(xA),Tp=!1,_s&&(Fp=!1,F2(T2))},SA=()=>{_s=!0,Fp=!0,Tp||F2(T2)};function $h(e,t){e.indexOf(t)===-1&&e.push(t)}function Lh(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Dh{constructor(){this.subscriptions=[]}add(t){return $h(this.subscriptions,t),()=>Lh(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(!!o)if(o===1)this.subscriptions[0](t,n,r);else for(let a=0;a<o;a++){const i=this.subscriptions[a];i&&i(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Nh(e,t){return t?e*(1e3/t):0}const CA=e=>!isNaN(parseFloat(e));class kA{constructor(t,n={}){this.version="7.10.3",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,o=!0)=>{this.prev=this.current,this.current=r;const{delta:a,timestamp:i}=ar;this.lastUpdated!==i&&(this.timeDelta=a,this.lastUpdated=i,St.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>St.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=CA(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){return this.events[t]||(this.events[t]=new Dh),this.events[t].add(n)}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t){this.passiveEffect=t}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Nh(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.stopAnimation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.stopAnimation&&(this.stopAnimation(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.clearListeners(),this.stop()}}function ja(e,t){return new kA(e,t)}const Bh=(e,t)=>n=>Boolean(rl(n)&&vP.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),_2=(e,t,n)=>r=>{if(!rl(r))return r;const[o,a,i,s]=r.match(Ts);return{[e]:parseFloat(o),[t]:parseFloat(a),[n]:parseFloat(i),alpha:s!==void 0?parseFloat(s):1}},FA=e=>Ba(0,255,e),pf={...zo,transform:e=>Math.round(FA(e))},co={test:Bh("rgb","red"),parse:_2("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+pf.transform(e)+", "+pf.transform(t)+", "+pf.transform(n)+", "+Ji(Qi.transform(r))+")"};function TA(e){let t="",n="",r="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const _p={test:Bh("#"),parse:TA,transform:co.transform},oa={test:Bh("hsl","hue"),parse:_2("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+$n.transform(Ji(t))+", "+$n.transform(Ji(n))+", "+Ji(Qi.transform(r))+")"},ct={test:e=>co.test(e)||_p.test(e)||oa.test(e),parse:e=>co.test(e)?co.parse(e):oa.test(e)?oa.parse(e):_p.parse(e),transform:e=>rl(e)?e:e.hasOwnProperty("red")?co.transform(e):oa.transform(e)},E2="${c}",P2="${n}";function _A(e){var t,n;return isNaN(e)&&rl(e)&&(((t=e.match(Ts))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Sp))===null||n===void 0?void 0:n.length)||0)>0}function ec(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0,r=0;const o=e.match(Sp);o&&(n=o.length,e=e.replace(Sp,E2),t.push(...o.map(ct.parse)));const a=e.match(Ts);return a&&(r=a.length,e=e.replace(Ts,P2),t.push(...a.map(zo.parse))),{values:t,numColors:n,numNumbers:r,tokenised:e}}function A2(e){return ec(e).values}function R2(e){const{values:t,numColors:n,tokenised:r}=ec(e),o=t.length;return a=>{let i=r;for(let s=0;s<o;s++)i=i.replace(s<n?E2:P2,s<n?ct.transform(a[s]):Ji(a[s]));return i}}const EA=e=>typeof e=="number"?0:e;function PA(e){const t=A2(e);return R2(e)(t.map(EA))}const jr={test:_A,parse:A2,createTransformer:R2,getAnimatableNone:PA},AA=new Set(["brightness","contrast","saturate","opacity"]);function RA(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Ts)||[];if(!r)return e;const o=n.replace(r,"");let a=AA.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+o+")"}const IA=/([a-z-]*)\(.*?\)/g,Ep={...jr,getAnimatableNone:e=>{const t=e.match(IA);return t?t.map(RA).join(" "):e}},qA={...o2,color:ct,backgroundColor:ct,outlineColor:ct,fill:ct,stroke:ct,borderColor:ct,borderTopColor:ct,borderRightColor:ct,borderBottomColor:ct,borderLeftColor:ct,filter:Ep,WebkitFilter:Ep},jh=e=>qA[e];function Vh(e,t){var n;let r=jh(e);return r!==Ep&&(r=jr),(n=r.getAnimatableNone)===null||n===void 0?void 0:n.call(r,t)}const I2=e=>t=>t.test(e),zA={test:e=>e==="auto",parse:e=>e},q2=[zo,H,$n,Sr,xP,wP,zA],vi=e=>q2.find(I2(e)),OA=[...q2,ct,jr],MA=e=>OA.find(I2(e));function $A(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function LA(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function cd(e,t,n){const r=e.getProps();return qh(r,t,n!==void 0?n:r.custom,$A(e),LA(e))}function DA(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ja(n))}function NA(e,t){const n=cd(e,t);let{transitionEnd:r={},transition:o={},...a}=n?e.makeTargetAnimatable(n,!1):{};a={...a,...r};for(const i in a){const s=DP(a[i]);DA(e,i,s)}}function BA(e,t,n){var r,o;const a=Object.keys(t).filter(s=>!e.hasValue(s)),i=a.length;if(!!i)for(let s=0;s<i;s++){const l=a[s],u=t[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(o=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&o!==void 0?o:t[l]),c!=null&&(typeof c=="string"&&(gA(c)||yA(c))?c=parseFloat(c):!MA(c)&&jr.test(u)&&(c=Vh(l,u)),e.addValue(l,ja(c,{owner:e})),n[l]===void 0&&(n[l]=c),c!==null&&e.setBaseTarget(l,c))}}function jA(e,t){return t?(t[e]||t.default||t).from:void 0}function VA(e,t,n){var r;const o={};for(const a in e){const i=jA(a,t);o[a]=i!==void 0?i:(r=n.getValue(a))===null||r===void 0?void 0:r.get()}return o}function tc(e){return Boolean(Bn(e)&&e.add)}const WA=(e,t)=>`${e}: ${t}`;function HA(e,t){const{MotionAppearAnimations:n}=window,r=WA(e,qo.has(t)?"transform":t),o=n&&n.get(r);return o?(St.render(()=>{try{o.cancel(),n.delete(r)}catch{}}),o.currentTime||0):0}const UA="framerAppearId",GA="data-"+Rh(UA);var KA=function(){},nc=function(){};const Tu=e=>e*1e3,YA={current:!1},Wh=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Hh=e=>t=>1-e(1-t),Uh=e=>e*e,XA=Hh(Uh),Gh=Wh(Uh),Me=(e,t,n)=>-n*e+n*t+e;function mf(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ZA({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,a=0,i=0;if(!t)o=a=i=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;o=mf(l,s,e+1/3),a=mf(l,s,e),i=mf(l,s,e-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(i*255),alpha:r}}const hf=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},QA=[_p,co,oa],JA=e=>QA.find(t=>t.test(e));function Ty(e){const t=JA(e);let n=t.parse(e);return t===oa&&(n=ZA(n)),n}const z2=(e,t)=>{const n=Ty(e),r=Ty(t),o={...n};return a=>(o.red=hf(n.red,r.red,a),o.green=hf(n.green,r.green,a),o.blue=hf(n.blue,r.blue,a),o.alpha=Me(n.alpha,r.alpha,a),co.transform(o))};function O2(e,t){return typeof e=="number"?n=>Me(e,t,n):ct.test(e)?z2(e,t):$2(e,t)}const M2=(e,t)=>{const n=[...e],r=n.length,o=e.map((a,i)=>O2(a,t[i]));return a=>{for(let i=0;i<r;i++)n[i]=o[i](a);return n}},eR=(e,t)=>{const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=O2(e[o],t[o]));return o=>{for(const a in r)n[a]=r[a](o);return n}},$2=(e,t)=>{const n=jr.createTransformer(t),r=ec(e),o=ec(t);return r.numColors===o.numColors&&r.numNumbers>=o.numNumbers?ld(M2(r.values,o.values),n):i=>`${i>0?t:e}`},rc=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},_y=(e,t)=>n=>Me(e,t,n);function tR(e){return typeof e=="number"?_y:typeof e=="string"?ct.test(e)?z2:$2:Array.isArray(e)?M2:typeof e=="object"?eR:_y}function nR(e,t,n){const r=[],o=n||tR(e[0]),a=e.length-1;for(let i=0;i<a;i++){let s=o(e[i],e[i+1]);if(t){const l=Array.isArray(t)?t[i]:t;s=ld(l,s)}r.push(s)}return r}function L2(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const a=e.length;nc(a===t.length),nc(!r||!Array.isArray(r)||r.length===a-1),e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const i=nR(t,r,o),s=i.length,l=u=>{let c=0;if(s>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=rc(e[c],e[c+1],u);return i[c](d)};return n?u=>l(Ba(e[0],e[a-1],u)):l}const Kh=e=>e,D2=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,rR=1e-7,oR=12;function aR(e,t,n,r,o){let a,i,s=0;do i=t+(n-t)/2,a=D2(i,r,o)-e,a>0?n=i:t=i;while(Math.abs(a)>rR&&++s<oR);return i}function N2(e,t,n,r){if(e===t&&n===r)return Kh;const o=a=>aR(a,0,1,e,n);return a=>a===0||a===1?a:D2(o(a),t,r)}const B2=e=>1-Math.sin(Math.acos(e)),Yh=Hh(B2),iR=Wh(Yh),j2=N2(.33,1.53,.69,.99),Xh=Hh(j2),sR=Wh(Xh),lR=e=>(e*=2)<1?.5*Xh(e):.5*(2-Math.pow(2,-10*(e-1))),uR={linear:Kh,easeIn:Uh,easeInOut:Gh,easeOut:XA,circIn:B2,circInOut:iR,circOut:Yh,backIn:Xh,backInOut:sR,backOut:j2,anticipate:lR},Ey=e=>{if(Array.isArray(e)){nc(e.length===4);const[t,n,r,o]=e;return N2(t,n,r,o)}else if(typeof e=="string")return uR[e];return e},cR=e=>Array.isArray(e)&&typeof e[0]!="number";function dR(e,t){return e.map(()=>t||Gh).splice(0,e.length-1)}function fR(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function pR(e,t){return e.map(n=>n*t)}function oc({keyframes:e,ease:t=Gh,times:n,duration:r=300}){e=[...e];const o=oc[0],a=cR(t)?t.map(Ey):Ey(t),i={done:!1,value:o},s=pR(n&&n.length===oc.length?n:fR(e),r);function l(){return L2(s,e,{ease:Array.isArray(a)?a:dR(e,a)})}let u=l();return{next:c=>(i.value=u(c),i.done=c>=r,i),flipTarget:()=>{e.reverse(),u=l()}}}const gf=.001,mR=.01,Py=10,hR=.05,gR=1;function yR({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,a;KA(e<=Py*1e3);let i=1-t;i=Ba(hR,gR,i),e=Ba(mR,Py,e/1e3),i<1?(o=u=>{const c=u*i,d=c*e,f=c-n,p=Pp(u,i),v=Math.exp(-d);return gf-f/p*v},a=u=>{const d=u*i*e,f=d*n+n,p=Math.pow(i,2)*Math.pow(u,2)*e,v=Math.exp(-d),b=Pp(Math.pow(u,2),i);return(-o(u)+gf>0?-1:1)*((f-p)*v)/b}):(o=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-gf+c*d},a=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const s=5/e,l=vR(o,a,s);if(e=e*1e3,isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:i*2*Math.sqrt(r*u),duration:e}}}const bR=12;function vR(e,t,n){let r=n;for(let o=1;o<bR;o++)r=r-e(r)/t(r);return r}function Pp(e,t){return e*Math.sqrt(1-t*t)}const wR=["duration","bounce"],xR=["stiffness","damping","mass"];function Ay(e,t){return t.some(n=>e[n]!==void 0)}function SR(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Ay(e,xR)&&Ay(e,wR)){const n=yR(e);t={...t,...n,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}const CR=5;function V2({keyframes:e,restSpeed:t=2,restDelta:n=.01,...r}){let o=e[0],a=e[e.length-1];const i={done:!1,value:o},{stiffness:s,damping:l,mass:u,velocity:c,duration:d,isResolvedFromDuration:f}=SR(r);let p=kR,v=c?-(c/1e3):0;const b=l/(2*Math.sqrt(s*u));function w(){const g=a-o,m=Math.sqrt(s/u)/1e3;if(n===void 0&&(n=Math.min(Math.abs(a-o)/100,.4)),b<1){const h=Pp(m,b);p=S=>{const k=Math.exp(-b*m*S);return a-k*((v+b*m*g)/h*Math.sin(h*S)+g*Math.cos(h*S))}}else if(b===1)p=h=>a-Math.exp(-m*h)*(g+(v+m*g)*h);else{const h=m*Math.sqrt(b*b-1);p=S=>{const k=Math.exp(-b*m*S),E=Math.min(h*S,300);return a-k*((v+b*m*g)*Math.sinh(E)+h*g*Math.cosh(E))/h}}}return w(),{next:g=>{const m=p(g);if(f)i.done=g>=d;else{let h=v;if(g!==0)if(b<1){const E=Math.max(0,g-CR);h=Nh(m-p(E),g-E)}else h=0;const S=Math.abs(h)<=t,k=Math.abs(a-m)<=n;i.done=S&&k}return i.value=i.done?a:m,i},flipTarget:()=>{v=-v,[o,a]=[a,o],w()}}}V2.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const kR=e=>0;function FR({keyframes:e=[0],velocity:t=0,power:n=.8,timeConstant:r=350,restDelta:o=.5,modifyTarget:a}){const i=e[0],s={done:!1,value:i};let l=n*t;const u=i+l,c=a===void 0?u:a(u);return c!==u&&(l=c-i),{next:d=>{const f=-l*Math.exp(-d/r);return s.done=!(f>o||f<-o),s.value=s.done?c:c+f,s},flipTarget:()=>{}}}const TR={decay:FR,keyframes:oc,tween:oc,spring:V2};function W2(e,t,n=0){return e-t-n}function _R(e,t=0,n=0,r=!0){return r?W2(t+-e,t,n):t-(e-t)+n}function ER(e,t,n,r){return r?e>=t+n:e<=-n}const PR=e=>{const t=({delta:n})=>e(n);return{start:()=>St.update(t,!0),stop:()=>Br.update(t)}};function ac({duration:e,driver:t=PR,elapsed:n=0,repeat:r=0,repeatType:o="loop",repeatDelay:a=0,keyframes:i,autoplay:s=!0,onPlay:l,onStop:u,onComplete:c,onRepeat:d,onUpdate:f,type:p="keyframes",...v}){var b,w;let g,m=0,h=e,S,k=!1,E=!0,F;const P=TR[i.length>2?"keyframes":p],I=i[0],R=i[i.length-1];!((w=(b=P).needsInterpolation)===null||w===void 0)&&w.call(b,I,R)&&(F=L2([0,100],[I,R],{clamp:!1}),i=[0,100]);const M=P({...v,duration:e,keyframes:i});function te(){m++,o==="reverse"?(E=m%2===0,n=_R(n,h,a,E)):(n=W2(n,h,a),o==="mirror"&&M.flipTarget()),k=!1,d&&d()}function K(){g.stop(),c&&c()}function Y(X){if(E||(X=-X),n+=X,!k){const O=M.next(Math.max(0,n));S=O.value,F&&(S=F(S)),k=E?O.done:n<=0}f&&f(S),k&&(m===0&&(h=h!==void 0?h:n),m<r?ER(n,h,a,E)&&te():K())}function J(){l&&l(),g=t(Y),g.start()}return s&&J(),{stop:()=>{u&&u(),g.stop()},sample:X=>M.next(Math.max(0,X))}}function AR(e){return!e||Array.isArray(e)||typeof e=="string"&&H2[e]}const Li=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,H2={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Li([0,.65,.55,1]),circOut:Li([.55,0,1,.45]),backIn:Li([.31,.01,.66,-.59]),backOut:Li([.33,1.53,.69,.99])};function RR(e){if(!!e)return Array.isArray(e)?Li(e):H2[e]}function IR(e,t,n,{delay:r=0,duration:o,repeat:a=0,repeatType:i="loop",ease:s,times:l}={}){return e.animate({[t]:n,offset:l},{delay:r,duration:o,easing:RR(s),fill:"both",iterations:a+1,direction:i==="reverse"?"alternate":"normal"})}const Nl=10;function qR(e,t,{onUpdate:n,onComplete:r,...o}){let{keyframes:a,duration:i=.3,elapsed:s=0,ease:l}=o;if(o.type==="spring"||!AR(o.ease)){const c=ac(o);let d={done:!1,value:a[0]};const f=[];let p=0;for(;!d.done;)d=c.sample(p),f.push(d.value),p+=Nl;a=f,i=p-Nl,l="linear"}const u=IR(e.owner.current,t,a,{...o,delay:-s,duration:i,ease:l});return u.onfinish=()=>{e.set(a[a.length-1]),r&&r()},()=>{const{currentTime:c}=u;if(c){const d=ac(o);e.setWithVelocity(d.sample(c-Nl).value,d.sample(c).value,Nl)}St.update(()=>u.cancel())}}function U2(e,t){const n=performance.now(),r=({timestamp:o})=>{const a=o-n;a>=t&&(Br.read(r),e(a-t))};return St.read(r,!0),()=>Br.read(r)}function zR({keyframes:e,elapsed:t,onUpdate:n,onComplete:r}){const o=()=>(n&&n(e[e.length-1]),r&&r(),()=>{});return t?U2(o,-t):o()}function OR({keyframes:e,velocity:t=0,min:n,max:r,power:o=.8,timeConstant:a=750,bounceStiffness:i=500,bounceDamping:s=10,restDelta:l=1,modifyTarget:u,driver:c,onUpdate:d,onComplete:f,onStop:p}){const v=e[0];let b;function w(S){return n!==void 0&&S<n||r!==void 0&&S>r}function g(S){return n===void 0?r:r===void 0||Math.abs(n-S)<Math.abs(r-S)?n:r}function m(S){b==null||b.stop(),b=ac({keyframes:[0,1],velocity:0,...S,driver:c,onUpdate:k=>{var E;d==null||d(k),(E=S.onUpdate)===null||E===void 0||E.call(S,k)},onComplete:f,onStop:p})}function h(S){m({type:"spring",stiffness:i,damping:s,restDelta:l,...S})}if(w(v))h({velocity:t,keyframes:[v,g(v)]});else{let S=o*t+v;typeof u<"u"&&(S=u(S));const k=g(S),E=k===n?-1:1;let F,P;const I=R=>{F=P,P=R,t=Nh(R-F,ar.delta),(E===1&&R>k||E===-1&&R<k)&&h({keyframes:[R,k],velocity:t})};m({type:"decay",keyframes:[v,0],velocity:t,timeConstant:a,power:o,restDelta:l,modifyTarget:u,onUpdate:w(S)?I:void 0})}return{stop:()=>b==null?void 0:b.stop()}}const ro=()=>({type:"spring",stiffness:500,damping:25,restSpeed:10}),Bl=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),yf=()=>({type:"keyframes",ease:"linear",duration:.3}),MR={type:"keyframes",duration:.8},Ry={x:ro,y:ro,z:ro,rotate:ro,rotateX:ro,rotateY:ro,rotateZ:ro,scaleX:Bl,scaleY:Bl,scale:Bl,opacity:yf,backgroundColor:yf,color:yf,default:Bl},$R=(e,{keyframes:t})=>t.length>2?MR:(Ry[e]||Ry.default)(t[1]),Ap=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&jr.test(t)&&!t.startsWith("url("));function LR({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:a,repeatType:i,repeatDelay:s,from:l,...u}){return!!Object.keys(u).length}function Iy(e){return e===0||typeof e=="string"&&parseFloat(e)===0&&e.indexOf(" ")===-1}function qy(e){return typeof e=="number"?0:Vh("",e)}function G2(e,t){return e[t]||e.default||e}function DR(e,t,n,r){const o=Ap(t,n);let a=r.from!==void 0?r.from:e.get();return a==="none"&&o&&typeof n=="string"?a=Vh(t,n):Iy(a)&&typeof n=="string"?a=qy(n):!Array.isArray(n)&&Iy(n)&&typeof a=="string"&&(n=qy(a)),Array.isArray(n)?(n[0]===null&&(n[0]=a),n):[a,n]}const zy={waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate")},bf={},K2={};for(const e in zy)K2[e]=()=>(bf[e]===void 0&&(bf[e]=zy[e]()),bf[e]);const NR=new Set(["opacity"]),Zh=(e,t,n,r={})=>o=>{const a=G2(r,e)||{},i=a.delay||r.delay||0;let{elapsed:s=0}=r;s=s-Tu(i);const l=DR(t,e,n,a),u=l[0],c=l[l.length-1],d=Ap(e,u),f=Ap(e,c);let p={keyframes:l,velocity:t.getVelocity(),...a,elapsed:s,onUpdate:g=>{t.set(g),a.onUpdate&&a.onUpdate(g)},onComplete:()=>{o(),a.onComplete&&a.onComplete()}};if(!d||!f||YA.current||a.type===!1)return zR(p);if(a.type==="inertia"){const g=OR(p);return()=>g.stop()}LR(a)||(p={...p,...$R(e,p)}),p.duration&&(p.duration=Tu(p.duration)),p.repeatDelay&&(p.repeatDelay=Tu(p.repeatDelay));const v=t.owner,b=v&&v.current;if(K2.waapi()&&NR.has(e)&&!p.repeatDelay&&p.repeatType!=="mirror"&&p.damping!==0&&v&&b instanceof HTMLElement&&!v.getProps().onUpdate)return qR(t,e,p);{const g=ac(p);return()=>g.stop()}};function BR(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(a=>Rp(e,a,n));r=Promise.all(o)}else if(typeof t=="string")r=Rp(e,t,n);else{const o=typeof t=="function"?cd(e,t,n.custom):t;r=Y2(e,o,n)}return r.then(()=>e.notify("AnimationComplete",t))}function Rp(e,t,n={}){var r;const o=cd(e,t,n.custom);let{transition:a=e.getDefaultTransition()||{}}=o||{};n.transitionOverride&&(a=n.transitionOverride);const i=o?()=>Y2(e,o,n):()=>Promise.resolve(),s=!((r=e.variantChildren)===null||r===void 0)&&r.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=a;return jR(e,t,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=a;if(l){const[u,c]=l==="beforeChildren"?[i,s]:[s,i];return u().then(c)}else return Promise.all([i(),s(n.delay)])}function Y2(e,t,{delay:n=0,transitionOverride:r,type:o}={}){var a;let{transition:i=e.getDefaultTransition(),transitionEnd:s,...l}=e.makeTargetAnimatable(t);const u=e.getValue("willChange");r&&(i=r);const c=[],d=o&&((a=e.animationState)===null||a===void 0?void 0:a.getState()[o]);for(const f in l){const p=e.getValue(f),v=l[f];if(!p||v===void 0||d&&WR(d,f))continue;let b={delay:n,elapsed:0,...i};if(e.shouldReduceMotion&&qo.has(f)&&(b={...b,type:!1,delay:0}),!p.hasAnimated){const g=e.getProps()[GA];g&&(b.elapsed=HA(g,f))}let w=p.start(Zh(f,p,v,b));tc(u)&&(u.add(f),w=w.then(()=>u.remove(f))),c.push(w)}return Promise.all(c).then(()=>{s&&NA(e,s)})}function jR(e,t,n=0,r=0,o=1,a){const i=[],s=(e.variantChildren.size-1)*r,l=o===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(VR).forEach((u,c)=>{i.push(Rp(u,t,{...a,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(i)}function VR(e,t){return e.sortNodePosition(t)}function WR({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}const Qh=[we.Animate,we.InView,we.Focus,we.Hover,we.Tap,we.Drag,we.Exit],HR=[...Qh].reverse(),UR=Qh.length;function GR(e){return t=>Promise.all(t.map(({animation:n,options:r})=>BR(e,n,r)))}function KR(e){let t=GR(e);const n=XR();let r=!0;const o=(l,u)=>{const c=cd(e,u);if(c){const{transition:d,transitionEnd:f,...p}=c;l={...l,...p,...f}}return l};function a(l){t=l(e)}function i(l,u){const c=e.getProps(),d=e.getVariantContext(!0)||{},f=[],p=new Set;let v={},b=1/0;for(let g=0;g<UR;g++){const m=HR[g],h=n[m],S=c[m]!==void 0?c[m]:d[m],k=ks(S),E=m===u?h.isActive:null;E===!1&&(b=g);let F=S===d[m]&&S!==c[m]&&k;if(F&&r&&e.manuallyAnimateOnMount&&(F=!1),h.protectedKeys={...v},!h.isActive&&E===null||!S&&!h.prevProp||od(S)||typeof S=="boolean")continue;const P=YR(h.prevProp,S);let I=P||m===u&&h.isActive&&!F&&k||g>b&&k;const R=Array.isArray(S)?S:[S];let M=R.reduce(o,{});E===!1&&(M={});const{prevResolvedValues:te={}}=h,K={...te,...M},Y=J=>{I=!0,p.delete(J),h.needsAnimating[J]=!0};for(const J in K){const X=M[J],O=te[J];v.hasOwnProperty(J)||(X!==O?Qu(X)&&Qu(O)?!C2(X,O)||P?Y(J):h.protectedKeys[J]=!0:X!==void 0?Y(J):p.add(J):X!==void 0&&p.has(J)?Y(J):h.protectedKeys[J]=!0)}h.prevProp=S,h.prevResolvedValues=M,h.isActive&&(v={...v,...M}),r&&e.blockInitialAnimation&&(I=!1),I&&!F&&f.push(...R.map(J=>({animation:J,options:{type:m,...l}})))}if(p.size){const g={};p.forEach(m=>{const h=e.getBaseTarget(m);h!==void 0&&(g[m]=h)}),f.push({animation:g})}let w=Boolean(f.length);return r&&c.initial===!1&&!e.manuallyAnimateOnMount&&(w=!1),r=!1,w?t(f):Promise.resolve()}function s(l,u,c){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var v;return(v=p.animationState)===null||v===void 0?void 0:v.setActive(l,u)}),n[l].isActive=u;const f=i(c,l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:i,setActive:s,setAnimateFunction:a,getState:()=>n}}function YR(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!C2(t,e):!1}function oo(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function XR(){return{[we.Animate]:oo(!0),[we.InView]:oo(),[we.Hover]:oo(),[we.Tap]:oo(),[we.Drag]:oo(),[we.Focus]:oo(),[we.Exit]:oo()}}const ZR={animation:Ar(({visualElement:e,animate:t})=>{e.animationState||(e.animationState=KR(e)),od(t)&&y.exports.useEffect(()=>t.subscribe(e),[t])}),exit:Ar(e=>{const{custom:t,visualElement:n}=e,[r,o]=Mh(),a=y.exports.useContext(oi);y.exports.useEffect(()=>{n.isPresent=r;const i=n.animationState&&n.animationState.setActive(we.Exit,!r,{custom:a&&a.custom||t});i&&!r&&i.then(o)},[r])})},Oy=(e,t)=>Math.abs(e-t);function QR(e,t){const n=Oy(e.x,t.x),r=Oy(e.y,t.y);return Math.sqrt(n**2+r**2)}class X2{constructor(t,n,{transformPagePoint:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=wf(this.lastMoveEventInfo,this.history),c=this.startEvent!==null,d=QR(u.offset,{x:0,y:0})>=3;if(!c&&!d)return;const{point:f}=u,{timestamp:p}=ar;this.history.push({...f,timestamp:p});const{onStart:v,onMove:b}=this.handlers;c||(v&&v(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),b&&b(this.lastMoveEvent,u)},this.handlePointerMove=(u,c)=>{if(this.lastMoveEvent=u,this.lastMoveEventInfo=vf(c,this.transformPagePoint),p2(u)&&u.buttons===0){this.handlePointerUp(u,c);return}St.update(this.updatePoint,!0)},this.handlePointerUp=(u,c)=>{this.end();const{onEnd:d,onSessionEnd:f}=this.handlers,p=wf(vf(c,this.transformPagePoint),this.history);this.startEvent&&d&&d(u,p),f&&f(u,p)},m2(t)&&t.touches.length>1)return;this.handlers=n,this.transformPagePoint=r;const o=zh(t),a=vf(o,this.transformPagePoint),{point:i}=a,{timestamp:s}=ar;this.history=[{...i,timestamp:s}];const{onSessionStart:l}=n;l&&l(t,wf(a,this.history)),this.removeListeners=ld(ka(window,"pointermove",this.handlePointerMove),ka(window,"pointerup",this.handlePointerUp),ka(window,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Br.update(this.updatePoint)}}function vf(e,t){return t?{point:t(e.point)}:e}function My(e,t){return{x:e.x-t.x,y:e.y-t.y}}function wf({point:e},t){return{point:e,delta:My(e,Z2(t)),offset:My(e,JR(t)),velocity:eI(t,.1)}}function JR(e){return e[0]}function Z2(e){return e[e.length-1]}function eI(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=Z2(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>Tu(t)));)n--;if(!r)return{x:0,y:0};const a=(o.timestamp-r.timestamp)/1e3;if(a===0)return{x:0,y:0};const i={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return i.x===1/0&&(i.x=0),i.y===1/0&&(i.y=0),i}function Mt(e){return e.max-e.min}function Ip(e,t=0,n=.01){return Math.abs(e-t)<=n}function $y(e,t,n,r=.5){e.origin=r,e.originPoint=Me(t.min,t.max,e.origin),e.scale=Mt(n)/Mt(t),(Ip(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=Me(n.min,n.max,e.origin)-e.originPoint,(Ip(e.translate)||isNaN(e.translate))&&(e.translate=0)}function es(e,t,n,r){$y(e.x,t.x,n.x,r==null?void 0:r.originX),$y(e.y,t.y,n.y,r==null?void 0:r.originY)}function Ly(e,t,n){e.min=n.min+t.min,e.max=e.min+Mt(t)}function tI(e,t,n){Ly(e.x,t.x,n.x),Ly(e.y,t.y,n.y)}function Dy(e,t,n){e.min=t.min-n.min,e.max=e.min+Mt(t)}function ts(e,t,n){Dy(e.x,t.x,n.x),Dy(e.y,t.y,n.y)}function nI(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Me(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Me(n,e,r.max):Math.min(e,n)),e}function Ny(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function rI(e,{top:t,left:n,bottom:r,right:o}){return{x:Ny(e.x,n,o),y:Ny(e.y,t,r)}}function By(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function oI(e,t){return{x:By(e.x,t.x),y:By(e.y,t.y)}}function aI(e,t){let n=.5;const r=Mt(e),o=Mt(t);return o>r?n=rc(t.min,t.max-r,e.min):r>o&&(n=rc(e.min,e.max-o,t.min)),Ba(0,1,n)}function iI(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const qp=.35;function sI(e=qp){return e===!1?e=0:e===!0&&(e=qp),{x:jy(e,"left","right"),y:jy(e,"top","bottom")}}function jy(e,t,n){return{min:Vy(e,t),max:Vy(e,n)}}function Vy(e,t){return typeof e=="number"?e:e[t]||0}const Wy=()=>({translate:0,scale:1,origin:0,originPoint:0}),ns=()=>({x:Wy(),y:Wy()}),Hy=()=>({min:0,max:0}),He=()=>({x:Hy(),y:Hy()});function Tn(e){return[e("x"),e("y")]}function Q2({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function lI({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function uI(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function xf(e){return e===void 0||e===1}function zp({scale:e,scaleX:t,scaleY:n}){return!xf(e)||!xf(t)||!xf(n)}function ao(e){return zp(e)||J2(e)||e.z||e.rotate||e.rotateX||e.rotateY}function J2(e){return Uy(e.x)||Uy(e.y)}function Uy(e){return e&&e!=="0%"}function ic(e,t,n){const r=e-n,o=t*r;return n+o}function Gy(e,t,n,r,o){return o!==void 0&&(e=ic(e,o,r)),ic(e,n,r)+t}function Op(e,t=0,n=1,r,o){e.min=Gy(e.min,t,n,r,o),e.max=Gy(e.max,t,n,r,o)}function ex(e,{x:t,y:n}){Op(e.x,t.translate,t.scale,t.originPoint),Op(e.y,n.translate,n.scale,n.originPoint)}function cI(e,t,n,r=!1){var o,a;const i=n.length;if(!i)return;t.x=t.y=1;let s,l;for(let u=0;u<i;u++)s=n[u],l=s.projectionDelta,((a=(o=s.instance)===null||o===void 0?void 0:o.style)===null||a===void 0?void 0:a.display)!=="contents"&&(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&aa(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),l&&(t.x*=l.x.scale,t.y*=l.y.scale,ex(e,l)),r&&ao(s.latestValues)&&aa(e,s.latestValues));t.x=Ky(t.x),t.y=Ky(t.y)}function Ky(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function kr(e,t){e.min=e.min+t,e.max=e.max+t}function Yy(e,t,[n,r,o]){const a=t[o]!==void 0?t[o]:.5,i=Me(e.min,e.max,a);Op(e,t[n],t[r],i,t.scale)}const dI=["x","scaleX","originX"],fI=["y","scaleY","originY"];function aa(e,t){Yy(e.x,t,dI),Yy(e.y,t,fI)}function tx(e,t){return Q2(uI(e.getBoundingClientRect(),t))}function pI(e,t,n){const r=tx(e,n),{scroll:o}=t;return o&&(kr(r.x,o.offset.x),kr(r.y,o.offset.y)),r}const mI=new WeakMap;class hI{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=He(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){if(this.visualElement.isPresent===!1)return;const r=s=>{this.stopAnimation(),n&&this.snapToCursor(zh(s,"page").point)},o=(s,l)=>{var u;const{drag:c,dragPropagation:d,onDragStart:f}=this.getProps();c&&!d&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=b2(c),!this.openGlobalLock)||(this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Tn(p=>{var v,b;let w=this.getAxisMotionValue(p).get()||0;if($n.test(w)){const g=(b=(v=this.visualElement.projection)===null||v===void 0?void 0:v.layout)===null||b===void 0?void 0:b.layoutBox[p];g&&(w=Mt(g)*(parseFloat(w)/100))}this.originPoint[p]=w}),f==null||f(s,l),(u=this.visualElement.animationState)===null||u===void 0||u.setActive(we.Drag,!0))},a=(s,l)=>{const{dragPropagation:u,dragDirectionLock:c,onDirectionLock:d,onDrag:f}=this.getProps();if(!u&&!this.openGlobalLock)return;const{offset:p}=l;if(c&&this.currentDirection===null){this.currentDirection=gI(p),this.currentDirection!==null&&(d==null||d(this.currentDirection));return}this.updateAxis("x",l.point,p),this.updateAxis("y",l.point,p),this.visualElement.render(),f==null||f(s,l)},i=(s,l)=>this.stop(s,l);this.panSession=new X2(t,{onSessionStart:r,onStart:o,onMove:a,onSessionEnd:i},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a==null||a(t,n)}cancel(){var t,n;this.isDragging=!1,this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!1),(t=this.panSession)===null||t===void 0||t.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),(n=this.visualElement.animationState)===null||n===void 0||n.setActive(we.Drag,!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!jl(t,o,this.currentDirection))return;const a=this.getAxisMotionValue(t);let i=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(i=nI(i,this.constraints[t],this.elastic[t])),a.set(i)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),{layout:r}=this.visualElement.projection||{},o=this.constraints;t&&ra(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=rI(r.layoutBox,t):this.constraints=!1,this.elastic=sI(n),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Tn(a=>{this.getAxisMotionValue(a)&&(this.constraints[a]=iI(r.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ra(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=pI(r,o.root,this.visualElement.getTransformPagePoint());let i=oI(o.layout.layoutBox,a);if(n){const s=n(lI(i));this.hasMutatedConstraints=!!s,s&&(i=Q2(s))}return i}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:i,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},u=Tn(c=>{if(!jl(c,n,this.currentDirection))return;let d=(l==null?void 0:l[c])||{};i&&(d={min:0,max:0});const f=o?200:1e6,p=o?40:1e7,v={type:"inertia",velocity:r?t[c]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...a,...d};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Zh(t,r,0,n))}stopAnimation(){Tn(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){var n;const r="_drag"+t.toUpperCase(),o=this.visualElement.getProps()[r];return o||this.visualElement.getValue(t,((n=this.visualElement.getProps().initial)===null||n===void 0?void 0:n[t])||0)}snapToCursor(t){Tn(n=>{const{drag:r}=this.getProps();if(!jl(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(n);if(o&&o.layout){const{min:i,max:s}=o.layout.layoutBox[n];a.set(t[n]-Me(i,s,.5))}})}scalePositionWithinConstraints(){var t;if(!this.visualElement.current)return;const{drag:n,dragConstraints:r}=this.getProps(),{projection:o}=this.visualElement;if(!ra(r)||!o||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};Tn(s=>{const l=this.getAxisMotionValue(s);if(l){const u=l.get();a[s]=aI({min:u,max:u},this.constraints[s])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",(t=o.root)===null||t===void 0||t.updateScroll(),o.updateLayout(),this.resolveConstraints(),Tn(s=>{if(!jl(s,n,null))return;const l=this.getAxisMotionValue(s),{min:u,max:c}=this.constraints[s];l.set(Me(u,c,a[s]))})}addListeners(){var t;if(!this.visualElement.current)return;mI.set(this.visualElement,this);const n=this.visualElement.current,r=ka(n,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(u)}),o=()=>{const{dragConstraints:u}=this.getProps();ra(u)&&(this.constraints=this.resolveRefConstraints())},{projection:a}=this.visualElement,i=a.addEventListener("measure",o);a&&!a.layout&&((t=a.root)===null||t===void 0||t.updateScroll(),a.updateLayout()),o();const s=sd(window,"resize",()=>this.scalePositionWithinConstraints()),l=a.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(Tn(d=>{const f=this.getAxisMotionValue(d);!f||(this.originPoint[d]+=u[d].translate,f.set(f.get()+u[d].translate))}),this.visualElement.render())});return()=>{s(),r(),i(),l==null||l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:i=qp,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:i,dragMomentum:s}}}function jl(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function gI(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}function yI(e){const{dragControls:t,visualElement:n}=e,r=id(()=>new hI(n));y.exports.useEffect(()=>t&&t.subscribe(r),[r,t]),y.exports.useEffect(()=>r.addListeners(),[r])}function bI({onPan:e,onPanStart:t,onPanEnd:n,onPanSessionStart:r,visualElement:o}){const a=e||t||n||r,i=y.exports.useRef(null),{transformPagePoint:s}=y.exports.useContext(kh),l={onSessionStart:r,onStart:t,onMove:e,onEnd:(c,d)=>{i.current=null,n&&n(c,d)}};y.exports.useEffect(()=>{i.current!==null&&i.current.updateHandlers(l)});function u(c){i.current=new X2(c,l,{transformPagePoint:s})}Ju(o,"pointerdown",a&&u),Oh(()=>i.current&&i.current.end())}const vI={pan:Ar(bI),drag:Ar(yI)};function Mp(e){return typeof e=="string"&&e.startsWith("var(--")}const nx=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function wI(e){const t=nx.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function $p(e,t,n=1){const[r,o]=wI(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);return a?a.trim():Mp(o)?$p(o,t,n+1):o}function xI(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(o=>{const a=o.get();if(!Mp(a))return;const i=$p(a,r);i&&o.set(i)});for(const o in t){const a=t[o];if(!Mp(a))continue;const i=$p(a,r);!i||(t[o]=i,n&&n[o]===void 0&&(n[o]=a))}return{target:t,transitionEnd:n}}const SI=new Set(["width","height","top","left","right","bottom","x","y"]),rx=e=>SI.has(e),CI=e=>Object.keys(e).some(rx),ox=(e,t)=>{e.set(t,!1),e.set(t)},Xy=e=>e===zo||e===H;var Zy;(function(e){e.width="width",e.height="height",e.left="left",e.right="right",e.top="top",e.bottom="bottom"})(Zy||(Zy={}));const Qy=(e,t)=>parseFloat(e.split(", ")[t]),Jy=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/);if(o)return Qy(o[1],t);{const a=r.match(/^matrix\((.+)\)$/);return a?Qy(a[1],e):0}},kI=new Set(["x","y","z"]),FI=Xu.filter(e=>!kI.has(e));function TI(e){const t=[];return FI.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const eb={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Jy(4,13),y:Jy(5,14)},_I=(e,t,n)=>{const r=t.measureViewportBox(),o=t.current,a=getComputedStyle(o),{display:i}=a,s={};i==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{s[u]=eb[u](r,a)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const c=t.getValue(u);ox(c,s[u]),e[u]=eb[u](l,a)}),e},EI=(e,t,n={},r={})=>{t={...t},r={...r};const o=Object.keys(t).filter(rx);let a=[],i=!1;const s=[];if(o.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let c=n[l],d=vi(c);const f=t[l];let p;if(Qu(f)){const v=f.length,b=f[0]===null?1:0;c=f[b],d=vi(c);for(let w=b;w<v;w++)p?nc(vi(f[w])===p):p=vi(f[w])}else p=vi(f);if(d!==p)if(Xy(d)&&Xy(p)){const v=u.get();typeof v=="string"&&u.set(parseFloat(v)),typeof f=="string"?t[l]=parseFloat(f):Array.isArray(f)&&p===H&&(t[l]=f.map(parseFloat))}else(d==null?void 0:d.transform)&&(p==null?void 0:p.transform)&&(c===0||f===0)?c===0?u.set(p.transform(c)):t[l]=d.transform(f):(i||(a=TI(e),i=!0),s.push(l),r[l]=r[l]!==void 0?r[l]:t[l],ox(u,f))}),s.length){const l=s.indexOf("height")>=0?window.pageYOffset:null,u=_I(t,e,s);return a.length&&a.forEach(([c,d])=>{e.getValue(c).set(d)}),e.render(),Io&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function PI(e,t,n,r){return CI(t)?EI(e,t,n,r):{target:t,transitionEnd:r}}const AI=(e,t,n,r)=>{const o=xI(e,t,r);return t=o.target,r=o.transitionEnd,PI(e,t,n,r)},Lp={current:null},ax={current:!1};function RI(){if(ax.current=!0,!!Io)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Lp.current=e.matches;e.addListener(t),t()}else Lp.current=!1}function II(e,t,n){const{willChange:r}=t;for(const o in t){const a=t[o],i=n[o];if(Bn(a))e.addValue(o,a),tc(r)&&r.add(o);else if(Bn(i))e.addValue(o,ja(a,{owner:e})),tc(r)&&r.remove(o);else if(i!==a)if(e.hasValue(o)){const s=e.getValue(o);!s.hasAnimated&&s.set(a)}else{const s=e.getStaticValue(o);e.addValue(o,ja(s!==void 0?s:a))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const ix=Object.keys(Fs),qI=ix.length,tb=["AnimationStart","AnimationComplete","Update","Unmount","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class zI{constructor({parent:t,props:n,reducedMotionConfig:r,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.isPresent=!0,this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{!this.current||(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>St.render(this.render,!1,!0);const{latestValues:i,renderState:s}=o;this.latestValues=i,this.baseTarget={...i},this.initialValues=n.initial?{...i}:{},this.renderState=s,this.parent=t,this.props=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.isControllingVariants=ad(n),this.isVariantNode=e2(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:l,...u}=this.scrapeMotionValuesFromProps(n);for(const c in u){const d=u[c];i[c]!==void 0&&Bn(d)&&(d.set(i[c],!1),tc(l)&&l.add(c))}}scrapeMotionValuesFromProps(t){return{}}mount(t){var n;this.current=t,this.projection&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=(n=this.parent)===null||n===void 0?void 0:n.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),ax.current||RI(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Lp.current,this.parent&&this.parent.children.add(this),this.setProps(this.props)}unmount(){var t,n,r;(t=this.projection)===null||t===void 0||t.unmount(),Br.update(this.notifyUpdate),Br.render(this.render),this.valueSubscriptions.forEach(o=>o()),(n=this.removeFromVariantTree)===null||n===void 0||n.call(this),(r=this.parent)===null||r===void 0||r.children.delete(this);for(const o in this.events)this.events[o].clear();this.current=null}bindToMotionValue(t,n){const r=qo.has(t),o=n.on("change",i=>{this.latestValues[t]=i,this.props.onUpdate&&St.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),a()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures(t,n,r,o,a,i){const s=[];for(let l=0;l<qI;l++){const u=ix[l],{isEnabled:c,Component:d}=Fs[u];c(t)&&d&&s.push(y.exports.createElement(d,{key:u,...t,visualElement:this}))}if(!this.projection&&a){this.projection=new a(o,this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:c,dragConstraints:d,layoutScroll:f}=t;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:Boolean(c)||d&&ra(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:i,layoutScroll:f})}return s}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):He()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}setProps(t){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.props=t;for(let n=0;n<tb.length;n++){const r=tb[n];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const o=t["on"+r];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=II(this,this.scrapeMotionValuesFromProps(t),this.prevMotionValues)}getProps(){return this.props}getVariant(t){var n;return(n=this.props.variants)===null||n===void 0?void 0:n[t]}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){var t;return this.isVariantNode?this:(t=this.parent)===null||t===void 0?void 0:t.getClosestVariantNode()}getVariantContext(t=!1){var n,r;if(t)return(n=this.parent)===null||n===void 0?void 0:n.getVariantContext();if(!this.isControllingVariants){const a=((r=this.parent)===null||r===void 0?void 0:r.getVariantContext())||{};return this.props.initial!==void 0&&(a.initial=this.props.initial),a}const o={};for(let a=0;a<OI;a++){const i=sx[a],s=this.props[i];(ks(s)||s===!1)&&(o[i]=s)}return o}addVariantChild(t){var n;const r=this.getClosestVariantNode();if(r)return(n=r.variantChildren)===null||n===void 0||n.add(t),()=>r.variantChildren.delete(t)}addValue(t,n){this.hasValue(t)&&this.removeValue(t),this.values.set(t,n),this.latestValues[t]=n.get(),this.bindToMotionValue(t,n)}removeValue(t){var n;this.values.delete(t),(n=this.valueSubscriptions.get(t))===null||n===void 0||n(),this.valueSubscriptions.delete(t),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=ja(n,{owner:this}),this.addValue(t,r)),r}readValue(t){return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,o=typeof r=="string"||typeof r=="object"?(n=qh(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!Bn(a)?a:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Dh),this.events[t].add(n)}notify(t,...n){var r;(r=this.events[t])===null||r===void 0||r.notify(...n)}}const sx=["initial",...Qh],OI=sx.length;class lx extends zI{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){var r;return(r=t.style)===null||r===void 0?void 0:r[n]}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:o},a){let i=VA(r,t||{},this);if(o&&(n&&(n=o(n)),r&&(r=o(r)),i&&(i=o(i))),a){BA(this,r,i);const s=AI(this,r,i,n);n=s.transitionEnd,r=s.target}return{transition:t,transitionEnd:n,...r}}}function MI(e){return window.getComputedStyle(e)}class $I extends lx{readValueFromInstance(t,n){if(qo.has(n)){const r=jh(n);return r&&r.default||0}else{const r=MI(t),o=(r2(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return tx(t,n)}build(t,n,r,o){_h(t,n,r,o.transformTemplate)}scrapeMotionValuesFromProps(t){return Ih(t)}renderInstance(t,n,r,o){l2(t,n,r,o)}}class LI extends lx{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){var r;return qo.has(n)?((r=jh(n))===null||r===void 0?void 0:r.default)||0:(n=u2.has(n)?n:Rh(n),t.getAttribute(n))}measureInstanceViewportBox(){return He()}scrapeMotionValuesFromProps(t){return d2(t)}build(t,n,r,o){Ph(t,n,r,this.isSVGTag,o.transformTemplate)}renderInstance(t,n,r,o){c2(t,n,r,o)}mount(t){this.isSVGTag=Ah(t.tagName),super.mount(t)}}const DI=(e,t)=>Th(e)?new LI(t,{enableHardwareAcceleration:!1}):new $I(t,{enableHardwareAcceleration:!0});function nb(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const wi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(H.test(e))e=parseFloat(e);else return e;const n=nb(e,t.target.x),r=nb(e,t.target.y);return`${n}% ${r}%`}},rb="_$css",NI={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=e.includes("var("),a=[];o&&(e=e.replace(nx,p=>(a.push(p),rb)));const i=jr.parse(e);if(i.length>5)return r;const s=jr.createTransformer(e),l=typeof i[0]!="number"?1:0,u=n.x.scale*t.x,c=n.y.scale*t.y;i[0+l]/=u,i[1+l]/=c;const d=Me(u,c,.5);typeof i[2+l]=="number"&&(i[2+l]/=d),typeof i[3+l]=="number"&&(i[3+l]/=d);let f=s(i);if(o){let p=0;f=f.replace(rb,()=>{const v=a[p];return p++,v})}return f}};class BI extends ho.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=t;mP(VI),a&&(n.group&&n.group.add(a),r&&r.register&&o&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),Zi.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:a}=this.props,i=r.projection;return i&&(i.isPresent=a,o||t.layoutDependency!==n||n===void 0?i.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?i.promote():i.relegate()||St.postRender(()=>{var s;!((s=i.getStack())===null||s===void 0)&&s.members.length||this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),!t.currentAnimation&&t.isLead()&&this.safeToRemove())}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n!=null&&n.group&&n.group.remove(o),r!=null&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t==null||t()}render(){return null}}function jI(e){const[t,n]=Mh(),r=y.exports.useContext(Fh);return x(BI,{...e,layoutGroup:r,switchLayoutGroup:y.exports.useContext(t2),isPresent:t,safeToRemove:n})}const VI={borderRadius:{...wi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:wi,borderTopRightRadius:wi,borderBottomLeftRadius:wi,borderBottomRightRadius:wi,boxShadow:NI},WI={measureLayout:jI};function HI(e,t,n={}){const r=Bn(e)?e:ja(e);return r.start(Zh("",r,t,n)),{stop:()=>r.stop(),isAnimating:()=>r.isAnimating()}}const ux=["TopLeft","TopRight","BottomLeft","BottomRight"],UI=ux.length,ob=e=>typeof e=="string"?parseFloat(e):e,ab=e=>typeof e=="number"||H.test(e);function GI(e,t,n,r,o,a){o?(e.opacity=Me(0,n.opacity!==void 0?n.opacity:1,KI(r)),e.opacityExit=Me(t.opacity!==void 0?t.opacity:1,0,YI(r))):a&&(e.opacity=Me(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let i=0;i<UI;i++){const s=`border${ux[i]}Radius`;let l=ib(t,s),u=ib(n,s);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||ab(l)===ab(u)?(e[s]=Math.max(Me(ob(l),ob(u),r),0),($n.test(u)||$n.test(l))&&(e[s]+="%")):e[s]=u}(t.rotate||n.rotate)&&(e.rotate=Me(t.rotate||0,n.rotate||0,r))}function ib(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const KI=cx(0,.5,Yh),YI=cx(.5,.95,Kh);function cx(e,t,n){return r=>r<e?0:r>t?1:n(rc(e,t,r))}function sb(e,t){e.min=t.min,e.max=t.max}function un(e,t){sb(e.x,t.x),sb(e.y,t.y)}function lb(e,t,n,r,o){return e-=t,e=ic(e,1/n,r),o!==void 0&&(e=ic(e,1/o,r)),e}function XI(e,t=0,n=1,r=.5,o,a=e,i=e){if($n.test(t)&&(t=parseFloat(t),t=Me(i.min,i.max,t/100)-i.min),typeof t!="number")return;let s=Me(a.min,a.max,r);e===a&&(s-=t),e.min=lb(e.min,t,n,s,o),e.max=lb(e.max,t,n,s,o)}function ub(e,t,[n,r,o],a,i){XI(e,t[n],t[r],t[o],t.scale,a,i)}const ZI=["x","scaleX","originX"],QI=["y","scaleY","originY"];function cb(e,t,n,r){ub(e.x,t,ZI,n==null?void 0:n.x,r==null?void 0:r.x),ub(e.y,t,QI,n==null?void 0:n.y,r==null?void 0:r.y)}function db(e){return e.translate===0&&e.scale===1}function dx(e){return db(e.x)&&db(e.y)}function fx(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function fb(e){return Mt(e.x)/Mt(e.y)}class JI{constructor(){this.members=[]}add(t){$h(this.members,t),t.scheduleRender()}remove(t){if(Lh(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){var r;const o=this.lead;if(t!==o&&(this.prevLead=o,this.lead=t,t.show(),o)){o.instance&&o.scheduleRender(),t.scheduleRender(),t.resumeFrom=o,n&&(t.resumeFrom.preserveOpacity=!0),o.snapshot&&(t.snapshot=o.snapshot,t.snapshot.latestValues=o.animationValues||o.latestValues),!((r=t.root)===null||r===void 0)&&r.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:a}=t.options;a===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,o,a,i;(r=(n=t.options).onExitComplete)===null||r===void 0||r.call(n),(i=(o=t.resumingFrom)===null||o===void 0?void 0:(a=o.options).onExitComplete)===null||i===void 0||i.call(a)})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function pb(e,t,n){let r="";const o=e.x.translate/t.x,a=e.y.translate/t.y;if((o||a)&&(r=`translate3d(${o}px, ${a}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),c&&(r+=`rotateY(${c}deg) `)}const i=e.x.scale*t.x,s=e.y.scale*t.y;return(i!==1||s!==1)&&(r+=`scale(${i}, ${s})`),r||"none"}const eq=(e,t)=>e.depth-t.depth;class tq{constructor(){this.children=[],this.isDirty=!1}add(t){$h(this.children,t),this.isDirty=!0}remove(t){Lh(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(eq),this.isDirty=!1,this.children.forEach(t)}}const mb=["","X","Y","Z"],hb=1e3;let nq=0;function px({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(i,s={},l=t==null?void 0:t()){this.id=nq++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isTransformDirty=!1,this.isProjectionDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.nodes.forEach(aq),this.nodes.forEach(lq),this.nodes.forEach(uq)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.elementId=i,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0,i&&this.root.registerPotentialNode(i,this);for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new tq)}addEventListener(i,s){return this.eventHandlers.has(i)||this.eventHandlers.set(i,new Dh),this.eventHandlers.get(i).add(s)}notifyListeners(i,...s){const l=this.eventHandlers.get(i);l==null||l.notify(...s)}hasListeners(i){return this.eventHandlers.has(i)}registerPotentialNode(i,s){this.potentialNodes.set(i,s)}mount(i,s=!1){var l;if(this.instance)return;this.isSVG=i instanceof SVGElement&&i.tagName!=="svg",this.instance=i;const{layoutId:u,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(i),this.root.nodes.add(this),(l=this.parent)===null||l===void 0||l.children.add(this),this.elementId&&this.root.potentialNodes.delete(this.elementId),s&&(c||u)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(i,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=U2(p,250),Zi.hasAnimatedSinceResize&&(Zi.hasAnimatedSinceResize=!1,this.nodes.forEach(yb))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&d&&(u||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:v,layout:b})=>{var w,g,m,h,S;if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const k=(g=(w=this.options.transition)!==null&&w!==void 0?w:d.getDefaultTransition())!==null&&g!==void 0?g:mq,{onLayoutAnimationStart:E,onLayoutAnimationComplete:F}=d.getProps(),P=!this.targetLayout||!fx(this.targetLayout,b)||v,I=!p&&v;if(((m=this.resumeFrom)===null||m===void 0?void 0:m.instance)||I||p&&(P||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,I);const R={...G2(k,"layout"),onPlay:E,onComplete:F};d.shouldReduceMotion&&(R.delay=0,R.type=!1),this.startAnimation(R)}else!p&&this.animationProgress===0&&yb(this),this.isLead()&&((S=(h=this.options).onExitComplete)===null||S===void 0||S.call(h));this.targetLayout=b})}unmount(){var i,s;this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this),(i=this.getStack())===null||i===void 0||i.remove(this),(s=this.parent)===null||s===void 0||s.children.delete(this),this.instance=void 0,Br.preRender(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){var i;return this.isAnimationBlocked||((i=this.parent)===null||i===void 0?void 0:i.isTreeAnimationBlocked())||!1}startUpdate(){var i;this.isUpdateBlocked()||(this.isUpdating=!0,(i=this.nodes)===null||i===void 0||i.forEach(cq),this.animationId++)}willUpdate(i=!0){var s,l,u;if(this.root.isUpdateBlocked()){(l=(s=this.options).onExitComplete)===null||l===void 0||l.call(s);return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const v=this.path[p];v.shouldResetTransform=!0,v.updateScroll("snapshot")}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const f=(u=this.options.visualElement)===null||u===void 0?void 0:u.getProps().transformTemplate;this.prevTransformTemplateValue=f==null?void 0:f(this.latestValues,""),this.updateSnapshot(),i&&this.notifyListeners("willUpdate")}didUpdate(){if(this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(gb);return}!this.isUpdating||(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(hq),this.potentialNodes.clear()),this.nodes.forEach(sq),this.nodes.forEach(rq),this.nodes.forEach(oq),this.clearAllSnapshots(),ff.update(),ff.preRender(),ff.render())}clearAllSnapshots(){this.nodes.forEach(iq),this.sharedNodes.forEach(dq)}scheduleUpdateProjection(){St.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){St.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){var i;if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=He(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox),(i=this.options.visualElement)===null||i===void 0||i.notify("LayoutMeasure",this.layout.layoutBox,s==null?void 0:s.layoutBox)}updateScroll(i="measure"){let s=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===i&&(s=!1),s&&(this.scroll={animationId:this.root.animationId,phase:i,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){var i;if(!o)return;const s=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!dx(this.projectionDelta),u=(i=this.options.visualElement)===null||i===void 0?void 0:i.getProps().transformTemplate,c=u==null?void 0:u(this.latestValues,""),d=c!==this.prevTransformTemplateValue;s&&(l||ao(this.latestValues)||d)&&(o(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(i=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return i&&(l=this.removeTransform(l)),gq(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:i}=this.options;if(!i)return He();const s=i.measureViewportBox(),{scroll:l}=this.root;return l&&(kr(s.x,l.offset.x),kr(s.y,l.offset.y)),s}removeElementScroll(i){const s=He();un(s,i);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;if(u!==this.root&&c&&d.layoutScroll){if(c.isRoot){un(s,i);const{scroll:f}=this.root;f&&(kr(s.x,-f.offset.x),kr(s.y,-f.offset.y))}kr(s.x,c.offset.x),kr(s.y,c.offset.y)}}return s}applyTransform(i,s=!1){const l=He();un(l,i);for(let u=0;u<this.path.length;u++){const c=this.path[u];!s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&aa(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),ao(c.latestValues)&&aa(l,c.latestValues)}return ao(this.latestValues)&&aa(l,this.latestValues),l}removeTransform(i){var s;const l=He();un(l,i);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!c.instance||!ao(c.latestValues))continue;zp(c.latestValues)&&c.updateSnapshot();const d=He(),f=c.measurePageBox();un(d,f),cb(l,c.latestValues,(s=c.snapshot)===null||s===void 0?void 0:s.layoutBox,d)}return ao(this.latestValues)&&cb(l,this.latestValues),l}setTargetDelta(i){this.targetDelta=i,this.isProjectionDirty=!0,this.root.scheduleUpdateProjection()}setOptions(i){this.options={...this.options,...i,crossfade:i.crossfade!==void 0?i.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}resolveTargetDelta(){var i;const s=this.getLead();if(this.isProjectionDirty||(this.isProjectionDirty=s.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=s.isTransformDirty),!this.isProjectionDirty&&!this.attemptToResolveRelativeTarget)return;const{layout:l,layoutId:u}=this.options;if(!(!this.layout||!(l||u))){if(!this.targetDelta&&!this.relativeTarget){const c=this.getClosestProjectingParent();c&&c.layout?(this.relativeParent=c,this.relativeTarget=He(),this.relativeTargetOrigin=He(),ts(this.relativeTargetOrigin,this.layout.layoutBox,c.layout.layoutBox),un(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=He(),this.targetWithTransforms=He()),this.relativeTarget&&this.relativeTargetOrigin&&((i=this.relativeParent)===null||i===void 0?void 0:i.target)?tI(this.target,this.relativeTarget,this.relativeParent.target):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):un(this.target,this.layout.layoutBox),ex(this.target,this.targetDelta)):un(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const c=this.getClosestProjectingParent();c&&Boolean(c.resumingFrom)===Boolean(this.resumingFrom)&&!c.options.layoutScroll&&c.target?(this.relativeParent=c,this.relativeTarget=He(),this.relativeTargetOrigin=He(),ts(this.relativeTargetOrigin,this.target,c.target),un(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||zp(this.parent.latestValues)||J2(this.parent.latestValues)))return(this.parent.relativeTarget||this.parent.targetDelta)&&this.parent.layout?this.parent:this.parent.getClosestProjectingParent()}calcProjection(){var i;const{isProjectionDirty:s,isTransformDirty:l}=this;this.isProjectionDirty=this.isTransformDirty=!1;const u=this.getLead(),c=Boolean(this.resumingFrom)||this!==u;let d=!0;if(s&&(d=!1),c&&l&&(d=!1),d)return;const{layout:f,layoutId:p}=this.options;if(this.isTreeAnimating=Boolean(((i=this.parent)===null||i===void 0?void 0:i.isTreeAnimating)||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||p))return;un(this.layoutCorrected,this.layout.layoutBox),cI(this.layoutCorrected,this.treeScale,this.path,c);const{target:v}=u;if(!v)return;this.projectionDelta||(this.projectionDelta=ns(),this.projectionDeltaWithTransform=ns());const b=this.treeScale.x,w=this.treeScale.y,g=this.projectionTransform;es(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=pb(this.projectionDelta,this.treeScale),(this.projectionTransform!==g||this.treeScale.x!==b||this.treeScale.y!==w)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(i=!0){var s,l,u;(l=(s=this.options).scheduleRender)===null||l===void 0||l.call(s),i&&((u=this.getStack())===null||u===void 0||u.scheduleRender()),this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(i,s=!1){var l,u;const c=this.snapshot,d=(c==null?void 0:c.latestValues)||{},f={...this.latestValues},p=ns();this.relativeTarget=this.relativeTargetOrigin=void 0,this.attemptToResolveRelativeTarget=!s;const v=He(),b=(c==null?void 0:c.source)!==((l=this.layout)===null||l===void 0?void 0:l.source),w=(((u=this.getStack())===null||u===void 0?void 0:u.members.length)||0)<=1,g=Boolean(b&&!w&&this.options.crossfade===!0&&!this.path.some(pq));this.animationProgress=0,this.mixTargetDelta=m=>{var h;const S=m/1e3;bb(p.x,i.x,S),bb(p.y,i.y,S),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&((h=this.relativeParent)===null||h===void 0?void 0:h.layout)&&(ts(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),fq(this.relativeTarget,this.relativeTargetOrigin,v,S)),b&&(this.animationValues=f,GI(f,d,this.latestValues,S,g,w)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(0)}startAnimation(i){var s,l;this.notifyListeners("animationStart"),(s=this.currentAnimation)===null||s===void 0||s.stop(),this.resumingFrom&&((l=this.resumingFrom.currentAnimation)===null||l===void 0||l.stop()),this.pendingAnimation&&(Br.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=St.update(()=>{Zi.hasAnimatedSinceResize=!0,this.currentAnimation=HI(0,hb,{...i,onUpdate:u=>{var c;this.mixTargetDelta(u),(c=i.onUpdate)===null||c===void 0||c.call(i,u)},onComplete:()=>{var u;(u=i.onComplete)===null||u===void 0||u.call(i),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){var i;this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0),(i=this.getStack())===null||i===void 0||i.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){var i;this.currentAnimation&&((i=this.mixTargetDelta)===null||i===void 0||i.call(this,hb),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const i=this.getLead();let{targetWithTransforms:s,target:l,layout:u,latestValues:c}=i;if(!(!s||!l||!u)){if(this!==i&&this.layout&&u&&mx(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||He();const d=Mt(this.layout.layoutBox.x);l.x.min=i.target.x.min,l.x.max=l.x.min+d;const f=Mt(this.layout.layoutBox.y);l.y.min=i.target.y.min,l.y.max=l.y.min+f}un(s,l),aa(s,c),es(this.projectionDeltaWithTransform,this.layoutCorrected,s,c)}}registerSharedNode(i,s){var l,u,c;this.sharedNodes.has(i)||this.sharedNodes.set(i,new JI),this.sharedNodes.get(i).add(s),s.promote({transition:(l=s.options.initialPromotionConfig)===null||l===void 0?void 0:l.transition,preserveFollowOpacity:(c=(u=s.options.initialPromotionConfig)===null||u===void 0?void 0:u.shouldPreserveFollowOpacity)===null||c===void 0?void 0:c.call(u,s)})}isLead(){const i=this.getStack();return i?i.lead===this:!0}getLead(){var i;const{layoutId:s}=this.options;return s?((i=this.getStack())===null||i===void 0?void 0:i.lead)||this:this}getPrevLead(){var i;const{layoutId:s}=this.options;return s?(i=this.getStack())===null||i===void 0?void 0:i.prevLead:void 0}getStack(){const{layoutId:i}=this.options;if(i)return this.root.sharedNodes.get(i)}promote({needsReset:i,transition:s,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),i&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const i=this.getStack();return i?i.relegate(this):!1}resetRotation(){const{visualElement:i}=this.options;if(!i)return;let s=!1;const{latestValues:l}=i;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(s=!0),!s)return;const u={};for(let c=0;c<mb.length;c++){const d="rotate"+mb[c];l[d]&&(u[d]=l[d],i.setStaticValue(d,0))}i==null||i.render();for(const c in u)i.setStaticValue(c,u[c]);i.scheduleRender()}getProjectionStyles(i={}){var s,l,u;const c={};if(!this.instance||this.isSVG)return c;if(this.isVisible)c.visibility="";else return{visibility:"hidden"};const d=(s=this.options.visualElement)===null||s===void 0?void 0:s.getProps().transformTemplate;if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Fu(i.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=Fu(i.pointerEvents)||""),this.hasProjected&&!ao(this.latestValues)&&(w.transform=d?d({},""):"none",this.hasProjected=!1),w}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=pb(this.projectionDeltaWithTransform,this.treeScale,p),d&&(c.transform=d(p,c.transform));const{x:v,y:b}=this.projectionDelta;c.transformOrigin=`${v.origin*100}% ${b.origin*100}% 0`,f.animationValues?c.opacity=f===this?(u=(l=p.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&u!==void 0?u:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const w in Yu){if(p[w]===void 0)continue;const{correct:g,applyTo:m}=Yu[w],h=g(p[w],f);if(m){const S=m.length;for(let k=0;k<S;k++)c[m[k]]=h}else c[w]=h}return this.options.layoutId&&(c.pointerEvents=f===this?Fu(i.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(i=>{var s;return(s=i.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(gb),this.root.sharedNodes.clear()}}}function rq(e){e.updateLayout()}function oq(e){var t,n,r;const o=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&o&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:i}=e.layout,{animationType:s}=e.options,l=o.source!==e.layout.source;s==="size"?Tn(p=>{const v=l?o.measuredBox[p]:o.layoutBox[p],b=Mt(v);v.min=a[p].min,v.max=v.min+b}):mx(s,o.layoutBox,a)&&Tn(p=>{const v=l?o.measuredBox[p]:o.layoutBox[p],b=Mt(a[p]);v.max=v.min+b});const u=ns();es(u,a,o.layoutBox);const c=ns();l?es(c,e.applyTransform(i,!0),o.measuredBox):es(c,a,o.layoutBox);const d=!dx(u);let f=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:v,layout:b}=p;if(v&&b){const w=He();ts(w,o.layoutBox,v.layoutBox);const g=He();ts(g,a,b.layoutBox),fx(w,g)||(f=!0)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:o,delta:c,layoutDelta:u,hasLayoutChanged:d,hasRelativeTargetChanged:f})}else e.isLead()&&((r=(n=e.options).onExitComplete)===null||r===void 0||r.call(n));e.options.transition=void 0}function aq(e){e.isProjectionDirty||(e.isProjectionDirty=Boolean(e.parent&&e.parent.isProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=Boolean(e.parent&&e.parent.isTransformDirty))}function iq(e){e.clearSnapshot()}function gb(e){e.clearMeasurements()}function sq(e){const{visualElement:t}=e.options;t!=null&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function yb(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0}function lq(e){e.resolveTargetDelta()}function uq(e){e.calcProjection()}function cq(e){e.resetRotation()}function dq(e){e.removeLeadSnapshot()}function bb(e,t,n){e.translate=Me(t.translate,0,n),e.scale=Me(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function vb(e,t,n,r){e.min=Me(t.min,n.min,r),e.max=Me(t.max,n.max,r)}function fq(e,t,n,r){vb(e.x,t.x,n.x,r),vb(e.y,t.y,n.y,r)}function pq(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const mq={duration:.45,ease:[.4,0,.1,1]};function hq(e,t){let n=e.root;for(let a=e.path.length-1;a>=0;a--)if(Boolean(e.path[a].instance)){n=e.path[a];break}const o=(n&&n!==e.root?n.instance:document).querySelector(`[data-projection-id="${t}"]`);o&&e.mount(o,!0)}function wb(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function gq(e){wb(e.x),wb(e.y)}function mx(e,t,n){return e==="position"||e==="preserve-aspect"&&!Ip(fb(t),fb(n),.2)}const yq=px({attachResizeListener:(e,t)=>sd(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Sf={current:void 0},bq=px({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Sf.current){const e=new yq(0,{});e.mount(window),e.setOptions({layoutScroll:!0}),Sf.current=e}return Sf.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>Boolean(window.getComputedStyle(e).position==="fixed")}),vq={...ZR,...pA,...vI,...WI},il=fP((e,t)=>WP(e,t,vq,DI,bq));function hx(){const e=y.exports.useRef(!1);return Xi(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function wq(){const e=hx(),[t,n]=y.exports.useState(0),r=y.exports.useCallback(()=>{e.current&&n(t+1)},[t]);return[y.exports.useCallback(()=>St.postRender(r),[r]),t]}class xq extends y.exports.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Sq({children:e,isPresent:t}){const n=y.exports.useId(),r=y.exports.useRef(null),o=y.exports.useRef({width:0,height:0,top:0,left:0});return y.exports.useInsertionEffect(()=>{const{width:a,height:i,top:s,left:l}=o.current;if(t||!r.current||!a||!i)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${i}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),x(xq,{isPresent:t,childRef:r,sizeRef:o,children:y.exports.cloneElement(e,{ref:r})})}const Cf=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:i})=>{const s=id(Cq),l=y.exports.useId(),u=y.exports.useMemo(()=>({id:l,initial:t,isPresent:n,custom:o,onExitComplete:c=>{s.set(c,!0);for(const d of s.values())if(!d)return;r&&r()},register:c=>(s.set(c,!1),()=>s.delete(c))}),a?void 0:[n]);return y.exports.useMemo(()=>{s.forEach((c,d)=>s.set(d,!1))},[n]),y.exports.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),i==="popLayout"&&(e=x(Sq,{isPresent:n,children:e})),x(oi.Provider,{value:u,children:e})};function Cq(){return new Map}const Xo=e=>e.key||"";function kq(e,t){e.forEach(n=>{const r=Xo(n);t.set(r,n)})}function Fq(e){const t=[];return y.exports.Children.forEach(e,n=>{y.exports.isValidElement(n)&&t.push(n)}),t}const dd=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:o,presenceAffectsLayout:a=!0,mode:i="sync"})=>{o&&(i="wait",S2(!1,"Replace exitBeforeEnter with mode='wait'"));let[s]=wq();const l=y.exports.useContext(Fh).forceRender;l&&(s=l);const u=hx(),c=Fq(e);let d=c;const f=new Set,p=y.exports.useRef(d),v=y.exports.useRef(new Map).current,b=y.exports.useRef(!0);if(Xi(()=>{b.current=!1,kq(c,v),p.current=d}),Oh(()=>{b.current=!0,v.clear(),f.clear()}),b.current)return x(ko,{children:d.map(h=>x(Cf,{isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:a,mode:i,children:h},Xo(h)))});d=[...d];const w=p.current.map(Xo),g=c.map(Xo),m=w.length;for(let h=0;h<m;h++){const S=w[h];g.indexOf(S)===-1&&f.add(S)}return i==="wait"&&f.size&&(d=[]),f.forEach(h=>{if(g.indexOf(h)!==-1)return;const S=v.get(h);if(!S)return;const k=w.indexOf(h),E=()=>{v.delete(h),f.delete(h);const F=p.current.findIndex(P=>P.key===h);if(p.current.splice(F,1),!f.size){if(p.current=c,u.current===!1)return;s(),r&&r()}};d.splice(k,0,x(Cf,{isPresent:!1,onExitComplete:E,custom:t,presenceAffectsLayout:a,mode:i,children:S},Xo(S)))}),d=d.map(h=>{const S=h.key;return f.has(S)?h:x(Cf,{isPresent:!0,presenceAffectsLayout:a,mode:i,children:h},Xo(h))}),x2!=="production"&&i==="wait"&&d.length>1&&console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`),x(ko,{children:f.size?d:d.map(h=>y.exports.cloneElement(h))})};var Rn=function(){return Rn=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Rn.apply(this,arguments)};function gx(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function Tq(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}const _q=(e,t)=>e.find(n=>n.id===t);function xb(e,t){const n=yx(e,t),r=n?e[n].findIndex(o=>o.id===t):-1;return{position:n,index:r}}function yx(e,t){for(const[n,r]of Object.entries(e))if(_q(r,t))return n}function Eq(e){const t=e.includes("right"),n=e.includes("left");let r="center";return t&&(r="flex-end"),n&&(r="flex-start"),{display:"flex",flexDirection:"column",alignItems:r}}function Pq(e){const n=e==="top"||e==="bottom"?"0 auto":void 0,r=e.includes("top")?"env(safe-area-inset-top, 0px)":void 0,o=e.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,a=e.includes("left")?void 0:"env(safe-area-inset-right, 0px)",i=e.includes("right")?void 0:"env(safe-area-inset-left, 0px)";return{position:"fixed",zIndex:"var(--toast-z-index, 5500)",pointerEvents:"none",display:"flex",flexDirection:"column",margin:n,top:r,bottom:o,right:a,left:i}}var Aq=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Rq=$w(function(e){return Aq.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Iq=!1,qq=Rq,zq=function(t){return t!=="theme"},Sb=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?qq:zq},Cb=function(t,n,r){var o;if(n){var a=n.shouldForwardProp;o=t.__emotion_forwardProp&&a?function(i){return t.__emotion_forwardProp(i)&&a(i)}:a}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},Oq=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return yh(n,r,o),Uw(function(){return bh(n,r,o)}),null},Mq=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,a,i;n!==void 0&&(a=n.label,i=n.target);var s=Cb(t,n,r),l=s||Sb(o),u=!l("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push("label:"+a+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{var f=c[0];d.push(f[0]);for(var p=c.length,v=1;v<p;v++)d.push(c[v],f[v])}var b=wh(function(w,g,m){var h=u&&w.as||o,S="",k=[],E=w;if(w.theme==null){E={};for(var F in w)E[F]=w[F];E.theme=y.exports.useContext(Na)}typeof w.className=="string"?S=Vw(g.registered,k,w.className):w.className!=null&&(S=w.className+" ");var P=td(d.concat(k),g.registered,E);S+=g.key+"-"+P.name,i!==void 0&&(S+=" "+i);var I=u&&s===void 0?Sb(h):l,R={};for(var M in w)u&&M==="as"||I(M)&&(R[M]=w[M]);return R.className=S,m&&(R.ref=m),N(ko,{children:[x(Oq,{cache:g,serialized:P,isStringTag:typeof h=="string"}),x(h,{...R})]})});return b.displayName=a!==void 0?a:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",b.defaultProps=t.defaultProps,b.__emotion_real=b,b.__emotion_base=o,b.__emotion_styles=d,b.__emotion_forwardProp=s,Object.defineProperty(b,"toString",{value:function(){return i===void 0&&Iq?"NO_COMPONENT_SELECTOR":"."+i}}),b.withComponent=function(w,g){var m=e(w,Da({},n,g,{shouldForwardProp:Cb(b,g,!0)}));return m.apply(void 0,d)},b}},$q=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Dp=Mq.bind(null);$q.forEach(function(e){Dp[e]=Dp(e)});const Lq=new Set([...Z6,"textStyle","layerStyle","apply","noOfLines","focusBorderColor","errorBorderColor","as","__css","css","sx"]),Dq=new Set(["htmlWidth","htmlHeight","htmlSize","htmlTranslate"]);function Nq(e){return(Dq.has(e)||!Lq.has(e))&&e[0]!=="_"}const Bq=o6(Dp),jq=({baseStyle:e})=>t=>{const{theme:n,css:r,__css:o,sx:a,...i}=t,[s]=l6(i,J6),l=gn(e,t),u=TC({},o,l,Jv(s),a),c=cw(u)(t.theme);return r?[c,r]:c};function kf(e,t){const{baseStyle:n,...r}=t!=null?t:{};r.shouldForwardProp||(r.shouldForwardProp=Nq);const o=jq({baseStyle:n}),a=Bq(e,r)(o);return y.exports.forwardRef(function(l,u){const{children:c,...d}=l,{colorMode:f,forced:p}=Ch(),v=p?f:void 0;return y.exports.createElement(a,{ref:u,"data-theme":v,...d},c)})}function Vq(){const e=new Map;return new Proxy(kf,{apply(t,n,r){return kf(...r)},get(t,n){return e.has(n)||e.set(n,kf(n)),e.get(n)}})}const U=Vq(),Wq={initial:e=>{const{position:t}=e,n=["top","bottom"].includes(t)?"y":"x";let r=["top-right","bottom-right"].includes(t)?1:-1;return t==="bottom"&&(r=1),{opacity:0,[n]:r*24}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},bx=y.exports.memo(e=>{const{id:t,message:n,onCloseComplete:r,onRequestRemove:o,requestClose:a=!1,position:i="bottom",duration:s=5e3,containerStyle:l,motionVariants:u=Wq,toastSpacing:c="0.5rem"}=e,[d,f]=y.exports.useState(s),p=mA();ys(()=>{p||r==null||r()},[p]),ys(()=>{f(s)},[s]);const v=()=>f(null),b=()=>f(s),w=()=>{p&&o()};y.exports.useEffect(()=>{p&&a&&o()},[p,a,o]),b6(w,d);const g=y.exports.useMemo(()=>({pointerEvents:"auto",maxWidth:560,minWidth:300,margin:c,...l}),[l,c]),m=y.exports.useMemo(()=>Eq(i),[i]);return x(il.div,{layout:!0,className:"chakra-toast",variants:u,initial:"initial",animate:"animate",exit:"exit",onHoverStart:v,onHoverEnd:b,custom:{position:i},style:m,children:x(U.div,{role:"status","aria-atomic":"true",className:"chakra-toast__inner",__css:g,children:gn(n,{id:t,onClose:w})})})});bx.displayName="ToastComponent";function G(e){return y.exports.forwardRef(e)}var Hq=typeof Element<"u",Uq=typeof Map=="function",Gq=typeof Set=="function",Kq=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function _u(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!_u(e[r],t[r]))return!1;return!0}var a;if(Uq&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;for(a=e.entries();!(r=a.next()).done;)if(!_u(r.value[1],t.get(r.value[0])))return!1;return!0}if(Gq&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(Kq&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(Hq&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!_u(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}var Yq=function(t,n){try{return _u(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};function fd(){const e=y.exports.useContext(Na);if(!e)throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");return e}function Xq(){const e=Ch(),t=fd();return{...e,theme:t}}function Zq(e,t,n){var o,a;if(t==null)return t;const r=i=>{var s,l;return(l=(s=e.__breakpoints)==null?void 0:s.asArray)==null?void 0:l[i]};return(a=(o=r(t))!=null?o:r(n))!=null?a:n}function Qq(e,t,n){var o,a;if(t==null)return t;const r=i=>{var s,l;return(l=(s=e.__cssMap)==null?void 0:s[i])==null?void 0:l.value};return(a=(o=r(t))!=null?o:r(n))!=null?a:n}function Jq(e,t,n){const r=Array.isArray(t)?t:[t],o=Array.isArray(n)?n:[n];return a=>{const i=o.filter(Boolean),s=r.map((l,u)=>{var d,f;if(e==="breakpoints")return Zq(a,l,(d=i[u])!=null?d:l);const c=`${e}.${l}`;return Qq(a,c,(f=i[u])!=null?f:l)});return Array.isArray(t)?s:s[0]}}function ez(e){return Object.fromEntries(Object.entries(e).filter(([t,n])=>n!==void 0&&t!=="children"&&!y.exports.isValidElement(n)))}function vx(e,t={}){var c;const{styleConfig:n,...r}=t,{theme:o,colorMode:a}=Xq(),i=e?nw(o,`components.${e}`):void 0,s=n||i,l=zn({theme:o,colorMode:a},(c=s==null?void 0:s.defaultProps)!=null?c:{},ez(r),(d,f)=>d?void 0:f),u=y.exports.useRef({});if(s){const f=u4(s)(l);Yq(u.current,f)||(u.current=f)}return u.current}function Hr(e,t={}){return vx(e,t)}function Oo(e,t={}){return vx(e,t)}const kb={path:N("g",{stroke:"currentColor",strokeWidth:"1.5",children:[x("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),x("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),x("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]}),viewBox:"0 0 24 24"},Vn=G((e,t)=>{const{as:n,viewBox:r,color:o="currentColor",focusable:a=!1,children:i,className:s,__css:l,...u}=e,c=ge("chakra-icon",s),d=Hr("Icon",e),f={w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:o,...l,...d},p={ref:t,focusable:a,className:c,__css:f},v=r!=null?r:kb.viewBox;if(n&&typeof n!="string")return x(U.svg,{as:n,...p,...u});const b=i!=null?i:kb.path;return x(U.svg,{verticalAlign:"middle",viewBox:v,...p,...u,children:b})});Vn.displayName="Icon";function tz(e){return x(Vn,{viewBox:"0 0 24 24",...e,children:x("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})})}function nz(e){return x(Vn,{viewBox:"0 0 24 24",...e,children:x("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})})}function Fb(e){return x(Vn,{viewBox:"0 0 24 24",...e,children:x("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}const rz=DE({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),Jh=G((e,t)=>{const n=Hr("Spinner",e),{label:r="Loading...",thickness:o="2px",speed:a="0.45s",emptyColor:i="transparent",className:s,...l}=Dt(e),u=ge("chakra-spinner",s),c={display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:o,borderBottomColor:i,borderLeftColor:i,animation:`${rz} ${a} linear infinite`,...n};return x(U.div,{ref:t,__css:c,className:u,...l,children:r&&x(U.span,{srOnly:!0,children:r})})});Jh.displayName="Spinner";const[oz,eg]=nt({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[az,tg]=nt({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),wx={info:{icon:nz,colorScheme:"blue"},warning:{icon:Fb,colorScheme:"orange"},success:{icon:tz,colorScheme:"green"},error:{icon:Fb,colorScheme:"red"},loading:{icon:Jh,colorScheme:"blue"}};function iz(e){return wx[e].colorScheme}function sz(e){return wx[e].icon}const xx=G(function(t,n){var u;const{status:r="info",addRole:o=!0,...a}=Dt(t),i=(u=t.colorScheme)!=null?u:iz(r),s=Oo("Alert",{...t,colorScheme:i}),l={width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",...s.container};return x(oz,{value:{status:r},children:x(az,{value:s,children:x(U.div,{"data-status":r,role:o?"alert":void 0,ref:n,...a,className:ge("chakra-alert",t.className),__css:l})})})});xx.displayName="Alert";function Sx(e){const{status:t}=eg(),n=sz(t),r=tg(),o=t==="loading"?r.spinner:r.icon;return x(U.span,{display:"inherit","data-status":t,...e,className:ge("chakra-alert__icon",e.className),__css:o,children:e.children||x(n,{h:"100%",w:"100%"})})}Sx.displayName="AlertIcon";const Cx=G(function(t,n){const r=tg(),{status:o}=eg();return x(U.div,{ref:n,"data-status":o,...t,className:ge("chakra-alert__title",t.className),__css:r.title})});Cx.displayName="AlertTitle";const kx=G(function(t,n){const{status:r}=eg(),o=tg(),a={display:"inline",...o.description};return x(U.div,{ref:n,"data-status":r,...t,className:ge("chakra-alert__desc",t.className),__css:a})});kx.displayName="AlertDescription";function lz(e){return x(Vn,{focusable:"false","aria-hidden":!0,...e,children:x("path",{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"})})}const ng=G(function(t,n){const r=Hr("CloseButton",t),{children:o,isDisabled:a,__css:i,...s}=Dt(t),l={outline:0,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0};return x(U.button,{type:"button","aria-label":"Close",ref:n,disabled:a,__css:{...l,...r,...i},...s,children:o||x(lz,{width:"1em",height:"1em"})})});ng.displayName="CloseButton";const uz=e=>{const{status:t,variant:n="solid",id:r,title:o,isClosable:a,onClose:i,description:s,colorScheme:l,icon:u}=e,c=r?{root:`toast-${r}`,title:`toast-${r}-title`,description:`toast-${r}-description`}:void 0;return N(xx,{addRole:!1,status:t,variant:n,id:c==null?void 0:c.root,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto",colorScheme:l,children:[x(Sx,{children:u}),N(U.div,{flex:"1",maxWidth:"100%",children:[o&&x(Cx,{id:c==null?void 0:c.title,children:o}),s&&x(kx,{id:c==null?void 0:c.description,display:"block",children:s})]}),a&&x(ng,{size:"sm",onClick:i,position:"absolute",insetEnd:1,top:1})]})};function cz(e={}){const{render:t,toastComponent:n=uz}=e;return o=>typeof t=="function"?t({...o,...e}):x(n,{...o,...e})}const dz={top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]},rs=fz(dz);function fz(e){let t=e;const n=new Set,r=o=>{t=o(t),n.forEach(a=>a())};return{getState:()=>t,subscribe:o=>(n.add(o),()=>{r(()=>e),n.delete(o)}),removeToast:(o,a)=>{r(i=>({...i,[a]:i[a].filter(s=>s.id!=o)}))},notify:(o,a)=>{const i=pz(o,a),{position:s,id:l}=i;return r(u=>{var f,p;const d=s.includes("top")?[i,...(f=u[s])!=null?f:[]]:[...(p=u[s])!=null?p:[],i];return{...u,[s]:d}}),l},update:(o,a)=>{!o||r(i=>{const s={...i},{position:l,index:u}=xb(s,o);return l&&u!==-1&&(s[l][u]={...s[l][u],...a,message:cz(a)}),s})},closeAll:({positions:o}={})=>{r(a=>{const i=["bottom","bottom-right","bottom-left","top","top-left","top-right"];return(o!=null?o:i).reduce((l,u)=>(l[u]=a[u].map(c=>({...c,requestClose:!0})),l),{...a})})},close:o=>{r(a=>{const i=yx(a,o);return i?{...a,[i]:a[i].map(s=>s.id==o?{...s,requestClose:!0}:s)}:a})},isActive:o=>Boolean(xb(rs.getState(),o).position)}}let Tb=0;function pz(e,t={}){var o,a;Tb+=1;const n=(o=t.id)!=null?o:Tb,r=(a=t.position)!=null?a:"bottom";return{id:n,message:e,position:r,duration:t.duration,onCloseComplete:t.onCloseComplete,onRequestRemove:()=>rs.removeToast(String(n),r),status:t.status,requestClose:!1,containerStyle:t.containerStyle}}var pd={exports:{}},Bt={},Fx={exports:{}},Tx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,D){var W=z.length;z.push(D);e:for(;0<W;){var ie=W-1>>>1,le=z[ie];if(0<o(le,D))z[ie]=D,z[W]=le,W=ie;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var D=z[0],W=z.pop();if(W!==D){z[0]=W;e:for(var ie=0,le=z.length,B=le>>>1;ie<B;){var oe=2*(ie+1)-1,ve=z[oe],ue=oe+1,Be=z[ue];if(0>o(ve,W))ue<le&&0>o(Be,ve)?(z[ie]=Be,z[ue]=W,ie=ue):(z[ie]=ve,z[oe]=W,ie=oe);else if(ue<le&&0>o(Be,W))z[ie]=Be,z[ue]=W,ie=ue;else break e}}return D}function o(z,D){var W=z.sortIndex-D.sortIndex;return W!==0?W:z.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],u=[],c=1,d=null,f=3,p=!1,v=!1,b=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(z){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=z)r(u),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(u)}}function S(z){if(b=!1,h(z),!v)if(n(l)!==null)v=!0,X(k);else{var D=n(u);D!==null&&O(S,D.startTime-z)}}function k(z,D){v=!1,b&&(b=!1,g(P),P=-1),p=!0;var W=f;try{for(h(D),d=n(l);d!==null&&(!(d.expirationTime>D)||z&&!M());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,f=d.priorityLevel;var le=ie(d.expirationTime<=D);D=e.unstable_now(),typeof le=="function"?d.callback=le:d===n(l)&&r(l),h(D)}else r(l);d=n(l)}if(d!==null)var B=!0;else{var oe=n(u);oe!==null&&O(S,oe.startTime-D),B=!1}return B}finally{d=null,f=W,p=!1}}var E=!1,F=null,P=-1,I=5,R=-1;function M(){return!(e.unstable_now()-R<I)}function te(){if(F!==null){var z=e.unstable_now();R=z;var D=!0;try{D=F(!0,z)}finally{D?K():(E=!1,F=null)}}else E=!1}var K;if(typeof m=="function")K=function(){m(te)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,J=Y.port2;Y.port1.onmessage=te,K=function(){J.postMessage(null)}}else K=function(){w(te,0)};function X(z){F=z,E||(E=!0,K())}function O(z,D){P=w(function(){z(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){v||p||(v=!0,X(k))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(z){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var W=f;f=D;try{return z()}finally{f=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,D){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var W=f;f=z;try{return D()}finally{f=W}},e.unstable_scheduleCallback=function(z,D,W){var ie=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ie+W:ie):W=ie,z){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=W+le,z={id:c++,callback:D,priorityLevel:z,startTime:W,expirationTime:le,sortIndex:-1},W>ie?(z.sortIndex=W,t(u,z),n(l)===null&&z===n(u)&&(b?(g(P),P=-1):b=!0,O(S,W-ie))):(z.sortIndex=le,t(l,z),v||p||(v=!0,X(k))),z},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(z){var D=f;return function(){var W=f;f=D;try{return z.apply(this,arguments)}finally{f=W}}}})(Tx);(function(e){e.exports=Tx})(Fx);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mz=y.exports,$t=Fx.exports;function q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _x=new Set,Es={};function Mo(e,t){Va(e,t),Va(e+"Capture",t)}function Va(e,t){for(Es[e]=t,e=0;e<t.length;e++)_x.add(t[e])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Np=Object.prototype.hasOwnProperty,hz=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_b={},Eb={};function gz(e){return Np.call(Eb,e)?!0:Np.call(_b,e)?!1:hz.test(e)?Eb[e]=!0:(_b[e]=!0,!1)}function yz(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bz(e,t,n,r){if(t===null||typeof t>"u"||yz(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function gt(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){tt[e]=new gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];tt[t]=new gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){tt[e]=new gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){tt[e]=new gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){tt[e]=new gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){tt[e]=new gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){tt[e]=new gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){tt[e]=new gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){tt[e]=new gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var rg=/[\-:]([a-z])/g;function og(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(rg,og);tt[t]=new gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(rg,og);tt[t]=new gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(rg,og);tt[t]=new gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){tt[e]=new gt(e,1,!1,e.toLowerCase(),null,!1,!1)});tt.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){tt[e]=new gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ag(e,t,n,r){var o=tt.hasOwnProperty(t)?tt[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(bz(t,n,o,r)&&(n=null),r||o===null?gz(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var hr=mz.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vl=Symbol.for("react.element"),ia=Symbol.for("react.portal"),sa=Symbol.for("react.fragment"),ig=Symbol.for("react.strict_mode"),Bp=Symbol.for("react.profiler"),Ex=Symbol.for("react.provider"),Px=Symbol.for("react.context"),sg=Symbol.for("react.forward_ref"),jp=Symbol.for("react.suspense"),Vp=Symbol.for("react.suspense_list"),lg=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),Ax=Symbol.for("react.offscreen"),Pb=Symbol.iterator;function xi(e){return e===null||typeof e!="object"?null:(e=Pb&&e[Pb]||e["@@iterator"],typeof e=="function"?e:null)}var qe=Object.assign,Ff;function Di(e){if(Ff===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ff=t&&t[1]||""}return`
`+Ff+e}var Tf=!1;function _f(e,t){if(!e||Tf)return"";Tf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,s=a.length-1;1<=i&&0<=s&&o[i]!==a[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==a[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==a[s]){var l=`
`+o[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{Tf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Di(e):""}function vz(e){switch(e.tag){case 5:return Di(e.type);case 16:return Di("Lazy");case 13:return Di("Suspense");case 19:return Di("SuspenseList");case 0:case 2:case 15:return e=_f(e.type,!1),e;case 11:return e=_f(e.type.render,!1),e;case 1:return e=_f(e.type,!0),e;default:return""}}function Wp(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case sa:return"Fragment";case ia:return"Portal";case Bp:return"Profiler";case ig:return"StrictMode";case jp:return"Suspense";case Vp:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Px:return(e.displayName||"Context")+".Consumer";case Ex:return(e._context.displayName||"Context")+".Provider";case sg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lg:return t=e.displayName||null,t!==null?t:Wp(e.type)||"Memo";case Fr:t=e._payload,e=e._init;try{return Wp(e(t))}catch{}}return null}function wz(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wp(t);case 8:return t===ig?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xz(e){var t=Rx(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wl(e){e._valueTracker||(e._valueTracker=xz(e))}function Ix(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rx(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function sc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hp(e,t){var n=t.checked;return qe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Ab(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Vr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qx(e,t){t=t.checked,t!=null&&ag(e,"checked",t,!1)}function Up(e,t){qx(e,t);var n=Vr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gp(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gp(e,t.type,Vr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Rb(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gp(e,t,n){(t!=="number"||sc(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ni=Array.isArray;function Fa(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vr(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Kp(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(q(91));return qe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ib(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(q(92));if(Ni(n)){if(1<n.length)throw Error(q(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Vr(n)}}function zx(e,t){var n=Vr(t.value),r=Vr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qb(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ox(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yp(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ox(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hl,Mx=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hl=Hl||document.createElement("div"),Hl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ps(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sz=["Webkit","ms","Moz","O"];Object.keys(os).forEach(function(e){Sz.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),os[t]=os[e]})});function $x(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||os.hasOwnProperty(e)&&os[e]?(""+t).trim():t+"px"}function Lx(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=$x(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Cz=qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xp(e,t){if(t){if(Cz[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(q(62))}}function Zp(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qp=null;function ug(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jp=null,Ta=null,_a=null;function zb(e){if(e=ul(e)){if(typeof Jp!="function")throw Error(q(280));var t=e.stateNode;t&&(t=bd(t),Jp(e.stateNode,e.type,t))}}function Dx(e){Ta?_a?_a.push(e):_a=[e]:Ta=e}function Nx(){if(Ta){var e=Ta,t=_a;if(_a=Ta=null,zb(e),t)for(e=0;e<t.length;e++)zb(t[e])}}function Bx(e,t){return e(t)}function jx(){}var Ef=!1;function Vx(e,t,n){if(Ef)return e(t,n);Ef=!0;try{return Bx(e,t,n)}finally{Ef=!1,(Ta!==null||_a!==null)&&(jx(),Nx())}}function As(e,t){var n=e.stateNode;if(n===null)return null;var r=bd(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(q(231,t,typeof n));return n}var em=!1;if(ur)try{var Si={};Object.defineProperty(Si,"passive",{get:function(){em=!0}}),window.addEventListener("test",Si,Si),window.removeEventListener("test",Si,Si)}catch{em=!1}function kz(e,t,n,r,o,a,i,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var as=!1,lc=null,uc=!1,tm=null,Fz={onError:function(e){as=!0,lc=e}};function Tz(e,t,n,r,o,a,i,s,l){as=!1,lc=null,kz.apply(Fz,arguments)}function _z(e,t,n,r,o,a,i,s,l){if(Tz.apply(this,arguments),as){if(as){var u=lc;as=!1,lc=null}else throw Error(q(198));uc||(uc=!0,tm=u)}}function $o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ob(e){if($o(e)!==e)throw Error(q(188))}function Ez(e){var t=e.alternate;if(!t){if(t=$o(e),t===null)throw Error(q(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return Ob(o),e;if(a===r)return Ob(o),t;a=a.sibling}throw Error(q(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=a;break}if(s===r){i=!0,r=o,n=a;break}s=s.sibling}if(!i){for(s=a.child;s;){if(s===n){i=!0,n=a,r=o;break}if(s===r){i=!0,r=a,n=o;break}s=s.sibling}if(!i)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?e:t}function Hx(e){return e=Ez(e),e!==null?Ux(e):null}function Ux(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ux(e);if(t!==null)return t;e=e.sibling}return null}var Gx=$t.unstable_scheduleCallback,Mb=$t.unstable_cancelCallback,Pz=$t.unstable_shouldYield,Az=$t.unstable_requestPaint,De=$t.unstable_now,Rz=$t.unstable_getCurrentPriorityLevel,cg=$t.unstable_ImmediatePriority,Kx=$t.unstable_UserBlockingPriority,cc=$t.unstable_NormalPriority,Iz=$t.unstable_LowPriority,Yx=$t.unstable_IdlePriority,md=null,Ln=null;function qz(e){if(Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(md,e,void 0,(e.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:Mz,zz=Math.log,Oz=Math.LN2;function Mz(e){return e>>>=0,e===0?32:31-(zz(e)/Oz|0)|0}var Ul=64,Gl=4194304;function Bi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function dc(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=Bi(s):(a&=i,a!==0&&(r=Bi(a)))}else i=n&~o,i!==0?r=Bi(i):a!==0&&(r=Bi(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bn(t),o=1<<n,r|=e[n],t&=~o;return r}function $z(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lz(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-bn(a),s=1<<i,l=o[i];l===-1?((s&n)===0||(s&r)!==0)&&(o[i]=$z(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function nm(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xx(){var e=Ul;return Ul<<=1,(Ul&4194240)===0&&(Ul=64),e}function Pf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bn(t),e[t]=n}function Dz(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-bn(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function dg(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var he=0;function Zx(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Qx,fg,Jx,e5,t5,rm=!1,Kl=[],qr=null,zr=null,Or=null,Rs=new Map,Is=new Map,Er=[],Nz="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $b(e,t){switch(e){case"focusin":case"focusout":qr=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":Rs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Is.delete(t.pointerId)}}function Ci(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=ul(t),t!==null&&fg(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Bz(e,t,n,r,o){switch(t){case"focusin":return qr=Ci(qr,e,t,n,r,o),!0;case"dragenter":return zr=Ci(zr,e,t,n,r,o),!0;case"mouseover":return Or=Ci(Or,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Rs.set(a,Ci(Rs.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Is.set(a,Ci(Is.get(a)||null,e,t,n,r,o)),!0}return!1}function n5(e){var t=fo(e.target);if(t!==null){var n=$o(t);if(n!==null){if(t=n.tag,t===13){if(t=Wx(n),t!==null){e.blockedOn=t,t5(e.priority,function(){Jx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Eu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=om(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qp=r,n.target.dispatchEvent(r),Qp=null}else return t=ul(n),t!==null&&fg(t),e.blockedOn=n,!1;t.shift()}return!0}function Lb(e,t,n){Eu(e)&&n.delete(t)}function jz(){rm=!1,qr!==null&&Eu(qr)&&(qr=null),zr!==null&&Eu(zr)&&(zr=null),Or!==null&&Eu(Or)&&(Or=null),Rs.forEach(Lb),Is.forEach(Lb)}function ki(e,t){e.blockedOn===t&&(e.blockedOn=null,rm||(rm=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,jz)))}function qs(e){function t(o){return ki(o,e)}if(0<Kl.length){ki(Kl[0],e);for(var n=1;n<Kl.length;n++){var r=Kl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qr!==null&&ki(qr,e),zr!==null&&ki(zr,e),Or!==null&&ki(Or,e),Rs.forEach(t),Is.forEach(t),n=0;n<Er.length;n++)r=Er[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Er.length&&(n=Er[0],n.blockedOn===null);)n5(n),n.blockedOn===null&&Er.shift()}var Ea=hr.ReactCurrentBatchConfig,fc=!0;function Vz(e,t,n,r){var o=he,a=Ea.transition;Ea.transition=null;try{he=1,pg(e,t,n,r)}finally{he=o,Ea.transition=a}}function Wz(e,t,n,r){var o=he,a=Ea.transition;Ea.transition=null;try{he=4,pg(e,t,n,r)}finally{he=o,Ea.transition=a}}function pg(e,t,n,r){if(fc){var o=om(e,t,n,r);if(o===null)Df(e,t,r,pc,n),$b(e,r);else if(Bz(o,e,t,n,r))r.stopPropagation();else if($b(e,r),t&4&&-1<Nz.indexOf(e)){for(;o!==null;){var a=ul(o);if(a!==null&&Qx(a),a=om(e,t,n,r),a===null&&Df(e,t,r,pc,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else Df(e,t,r,null,n)}}var pc=null;function om(e,t,n,r){if(pc=null,e=ug(r),e=fo(e),e!==null)if(t=$o(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pc=e,null}function r5(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rz()){case cg:return 1;case Kx:return 4;case cc:case Iz:return 16;case Yx:return 536870912;default:return 16}default:return 16}}var Rr=null,mg=null,Pu=null;function o5(){if(Pu)return Pu;var e,t=mg,n=t.length,r,o="value"in Rr?Rr.value:Rr.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return Pu=o.slice(e,1<r?1-r:void 0)}function Au(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yl(){return!0}function Db(){return!1}function jt(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Yl:Db,this.isPropagationStopped=Db,this}return qe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yl)},persist:function(){},isPersistent:Yl}),t}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hg=jt(ai),ll=qe({},ai,{view:0,detail:0}),Hz=jt(ll),Af,Rf,Fi,hd=qe({},ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fi&&(Fi&&e.type==="mousemove"?(Af=e.screenX-Fi.screenX,Rf=e.screenY-Fi.screenY):Rf=Af=0,Fi=e),Af)},movementY:function(e){return"movementY"in e?e.movementY:Rf}}),Nb=jt(hd),Uz=qe({},hd,{dataTransfer:0}),Gz=jt(Uz),Kz=qe({},ll,{relatedTarget:0}),If=jt(Kz),Yz=qe({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),Xz=jt(Yz),Zz=qe({},ai,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qz=jt(Zz),Jz=qe({},ai,{data:0}),Bb=jt(Jz),eO={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tO={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nO={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rO(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nO[e])?!!t[e]:!1}function gg(){return rO}var oO=qe({},ll,{key:function(e){if(e.key){var t=eO[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Au(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tO[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gg,charCode:function(e){return e.type==="keypress"?Au(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Au(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),aO=jt(oO),iO=qe({},hd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jb=jt(iO),sO=qe({},ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gg}),lO=jt(sO),uO=qe({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),cO=jt(uO),dO=qe({},hd,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fO=jt(dO),pO=[9,13,27,32],yg=ur&&"CompositionEvent"in window,is=null;ur&&"documentMode"in document&&(is=document.documentMode);var mO=ur&&"TextEvent"in window&&!is,a5=ur&&(!yg||is&&8<is&&11>=is),Vb=String.fromCharCode(32),Wb=!1;function i5(e,t){switch(e){case"keyup":return pO.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s5(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var la=!1;function hO(e,t){switch(e){case"compositionend":return s5(t);case"keypress":return t.which!==32?null:(Wb=!0,Vb);case"textInput":return e=t.data,e===Vb&&Wb?null:e;default:return null}}function gO(e,t){if(la)return e==="compositionend"||!yg&&i5(e,t)?(e=o5(),Pu=mg=Rr=null,la=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return a5&&t.locale!=="ko"?null:t.data;default:return null}}var yO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hb(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yO[e.type]:t==="textarea"}function l5(e,t,n,r){Dx(r),t=mc(t,"onChange"),0<t.length&&(n=new hg("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ss=null,zs=null;function bO(e){v5(e,0)}function gd(e){var t=da(e);if(Ix(t))return e}function vO(e,t){if(e==="change")return t}var u5=!1;if(ur){var qf;if(ur){var zf="oninput"in document;if(!zf){var Ub=document.createElement("div");Ub.setAttribute("oninput","return;"),zf=typeof Ub.oninput=="function"}qf=zf}else qf=!1;u5=qf&&(!document.documentMode||9<document.documentMode)}function Gb(){ss&&(ss.detachEvent("onpropertychange",c5),zs=ss=null)}function c5(e){if(e.propertyName==="value"&&gd(zs)){var t=[];l5(t,zs,e,ug(e)),Vx(bO,t)}}function wO(e,t,n){e==="focusin"?(Gb(),ss=t,zs=n,ss.attachEvent("onpropertychange",c5)):e==="focusout"&&Gb()}function xO(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gd(zs)}function SO(e,t){if(e==="click")return gd(t)}function CO(e,t){if(e==="input"||e==="change")return gd(t)}function kO(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wn=typeof Object.is=="function"?Object.is:kO;function Os(e,t){if(wn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Np.call(t,o)||!wn(e[o],t[o]))return!1}return!0}function Kb(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yb(e,t){var n=Kb(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kb(n)}}function d5(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?d5(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function f5(){for(var e=window,t=sc();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=sc(e.document)}return t}function bg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function FO(e){var t=f5(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&d5(n.ownerDocument.documentElement,n)){if(r!==null&&bg(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Yb(n,a);var i=Yb(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var TO=ur&&"documentMode"in document&&11>=document.documentMode,ua=null,am=null,ls=null,im=!1;function Xb(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;im||ua==null||ua!==sc(r)||(r=ua,"selectionStart"in r&&bg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ls&&Os(ls,r)||(ls=r,r=mc(am,"onSelect"),0<r.length&&(t=new hg("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ua)))}function Xl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ca={animationend:Xl("Animation","AnimationEnd"),animationiteration:Xl("Animation","AnimationIteration"),animationstart:Xl("Animation","AnimationStart"),transitionend:Xl("Transition","TransitionEnd")},Of={},p5={};ur&&(p5=document.createElement("div").style,"AnimationEvent"in window||(delete ca.animationend.animation,delete ca.animationiteration.animation,delete ca.animationstart.animation),"TransitionEvent"in window||delete ca.transitionend.transition);function yd(e){if(Of[e])return Of[e];if(!ca[e])return e;var t=ca[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in p5)return Of[e]=t[n];return e}var m5=yd("animationend"),h5=yd("animationiteration"),g5=yd("animationstart"),y5=yd("transitionend"),b5=new Map,Zb="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(e,t){b5.set(e,t),Mo(t,[e])}for(var Mf=0;Mf<Zb.length;Mf++){var $f=Zb[Mf],_O=$f.toLowerCase(),EO=$f[0].toUpperCase()+$f.slice(1);Ur(_O,"on"+EO)}Ur(m5,"onAnimationEnd");Ur(h5,"onAnimationIteration");Ur(g5,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(y5,"onTransitionEnd");Va("onMouseEnter",["mouseout","mouseover"]);Va("onMouseLeave",["mouseout","mouseover"]);Va("onPointerEnter",["pointerout","pointerover"]);Va("onPointerLeave",["pointerout","pointerover"]);Mo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PO=new Set("cancel close invalid load scroll toggle".split(" ").concat(ji));function Qb(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_z(r,t,void 0,e),e.currentTarget=null}function v5(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&o.isPropagationStopped())break e;Qb(o,s,u),a=l}else for(i=0;i<r.length;i++){if(s=r[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&o.isPropagationStopped())break e;Qb(o,s,u),a=l}}}if(uc)throw e=tm,uc=!1,tm=null,e}function Ce(e,t){var n=t[dm];n===void 0&&(n=t[dm]=new Set);var r=e+"__bubble";n.has(r)||(w5(t,e,2,!1),n.add(r))}function Lf(e,t,n){var r=0;t&&(r|=4),w5(n,e,r,t)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function Ms(e){if(!e[Zl]){e[Zl]=!0,_x.forEach(function(n){n!=="selectionchange"&&(PO.has(n)||Lf(n,!1,e),Lf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zl]||(t[Zl]=!0,Lf("selectionchange",!1,t))}}function w5(e,t,n,r){switch(r5(t)){case 1:var o=Vz;break;case 4:o=Wz;break;default:o=pg}n=o.bind(null,t,n,e),o=void 0,!em||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Df(e,t,n,r,o){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;i=i.return}for(;s!==null;){if(i=fo(s),i===null)return;if(l=i.tag,l===5||l===6){r=a=i;continue e}s=s.parentNode}}r=r.return}Vx(function(){var u=a,c=ug(n),d=[];e:{var f=b5.get(e);if(f!==void 0){var p=hg,v=e;switch(e){case"keypress":if(Au(n)===0)break e;case"keydown":case"keyup":p=aO;break;case"focusin":v="focus",p=If;break;case"focusout":v="blur",p=If;break;case"beforeblur":case"afterblur":p=If;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Nb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Gz;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=lO;break;case m5:case h5:case g5:p=Xz;break;case y5:p=cO;break;case"scroll":p=Hz;break;case"wheel":p=fO;break;case"copy":case"cut":case"paste":p=Qz;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=jb}var b=(t&4)!==0,w=!b&&e==="scroll",g=b?f!==null?f+"Capture":null:f;b=[];for(var m=u,h;m!==null;){h=m;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,g!==null&&(S=As(m,g),S!=null&&b.push($s(m,S,h)))),w)break;m=m.return}0<b.length&&(f=new p(f,v,null,n,c),d.push({event:f,listeners:b}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==Qp&&(v=n.relatedTarget||n.fromElement)&&(fo(v)||v[cr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?fo(v):null,v!==null&&(w=$o(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(b=Nb,S="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(b=jb,S="onPointerLeave",g="onPointerEnter",m="pointer"),w=p==null?f:da(p),h=v==null?f:da(v),f=new b(S,m+"leave",p,n,c),f.target=w,f.relatedTarget=h,S=null,fo(c)===u&&(b=new b(g,m+"enter",v,n,c),b.target=h,b.relatedTarget=w,S=b),w=S,p&&v)t:{for(b=p,g=v,m=0,h=b;h;h=Ho(h))m++;for(h=0,S=g;S;S=Ho(S))h++;for(;0<m-h;)b=Ho(b),m--;for(;0<h-m;)g=Ho(g),h--;for(;m--;){if(b===g||g!==null&&b===g.alternate)break t;b=Ho(b),g=Ho(g)}b=null}else b=null;p!==null&&Jb(d,f,p,b,!1),v!==null&&w!==null&&Jb(d,w,v,b,!0)}}e:{if(f=u?da(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var k=vO;else if(Hb(f))if(u5)k=CO;else{k=xO;var E=wO}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=SO);if(k&&(k=k(e,u))){l5(d,k,n,c);break e}E&&E(e,f,u),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&Gp(f,"number",f.value)}switch(E=u?da(u):window,e){case"focusin":(Hb(E)||E.contentEditable==="true")&&(ua=E,am=u,ls=null);break;case"focusout":ls=am=ua=null;break;case"mousedown":im=!0;break;case"contextmenu":case"mouseup":case"dragend":im=!1,Xb(d,n,c);break;case"selectionchange":if(TO)break;case"keydown":case"keyup":Xb(d,n,c)}var F;if(yg)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else la?i5(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(a5&&n.locale!=="ko"&&(la||P!=="onCompositionStart"?P==="onCompositionEnd"&&la&&(F=o5()):(Rr=c,mg="value"in Rr?Rr.value:Rr.textContent,la=!0)),E=mc(u,P),0<E.length&&(P=new Bb(P,e,null,n,c),d.push({event:P,listeners:E}),F?P.data=F:(F=s5(n),F!==null&&(P.data=F)))),(F=mO?hO(e,n):gO(e,n))&&(u=mc(u,"onBeforeInput"),0<u.length&&(c=new Bb("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=F))}v5(d,t)})}function $s(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mc(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=As(e,n),a!=null&&r.unshift($s(e,a,o)),a=As(e,t),a!=null&&r.push($s(e,a,o))),e=e.return}return r}function Ho(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Jb(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=As(n,a),l!=null&&i.unshift($s(n,l,s))):o||(l=As(n,a),l!=null&&i.push($s(n,l,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var AO=/\r\n?/g,RO=/\u0000|\uFFFD/g;function e1(e){return(typeof e=="string"?e:""+e).replace(AO,`
`).replace(RO,"")}function Ql(e,t,n){if(t=e1(t),e1(e)!==t&&n)throw Error(q(425))}function hc(){}var sm=null,lm=null;function um(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cm=typeof setTimeout=="function"?setTimeout:void 0,IO=typeof clearTimeout=="function"?clearTimeout:void 0,t1=typeof Promise=="function"?Promise:void 0,qO=typeof queueMicrotask=="function"?queueMicrotask:typeof t1<"u"?function(e){return t1.resolve(null).then(e).catch(zO)}:cm;function zO(e){setTimeout(function(){throw e})}function Nf(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),qs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);qs(t)}function Mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function n1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ii=Math.random().toString(36).slice(2),In="__reactFiber$"+ii,Ls="__reactProps$"+ii,cr="__reactContainer$"+ii,dm="__reactEvents$"+ii,OO="__reactListeners$"+ii,MO="__reactHandles$"+ii;function fo(e){var t=e[In];if(t)return t;for(var n=e.parentNode;n;){if(t=n[cr]||n[In]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=n1(e);e!==null;){if(n=e[In])return n;e=n1(e)}return t}e=n,n=e.parentNode}return null}function ul(e){return e=e[In]||e[cr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function da(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(q(33))}function bd(e){return e[Ls]||null}var fm=[],fa=-1;function Gr(e){return{current:e}}function Te(e){0>fa||(e.current=fm[fa],fm[fa]=null,fa--)}function xe(e,t){fa++,fm[fa]=e.current,e.current=t}var Wr={},st=Gr(Wr),Ct=Gr(!1),Fo=Wr;function Wa(e,t){var n=e.type.contextTypes;if(!n)return Wr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function kt(e){return e=e.childContextTypes,e!=null}function gc(){Te(Ct),Te(st)}function r1(e,t,n){if(st.current!==Wr)throw Error(q(168));xe(st,t),xe(Ct,n)}function x5(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(q(108,wz(e)||"Unknown",o));return qe({},n,r)}function yc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wr,Fo=st.current,xe(st,e),xe(Ct,Ct.current),!0}function o1(e,t,n){var r=e.stateNode;if(!r)throw Error(q(169));n?(e=x5(e,t,Fo),r.__reactInternalMemoizedMergedChildContext=e,Te(Ct),Te(st),xe(st,e)):Te(Ct),xe(Ct,n)}var Zn=null,vd=!1,Bf=!1;function S5(e){Zn===null?Zn=[e]:Zn.push(e)}function $O(e){vd=!0,S5(e)}function Kr(){if(!Bf&&Zn!==null){Bf=!0;var e=0,t=he;try{var n=Zn;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Zn=null,vd=!1}catch(o){throw Zn!==null&&(Zn=Zn.slice(e+1)),Gx(cg,Kr),o}finally{he=t,Bf=!1}}return null}var pa=[],ma=0,bc=null,vc=0,Kt=[],Yt=0,To=null,nr=1,rr="";function io(e,t){pa[ma++]=vc,pa[ma++]=bc,bc=e,vc=t}function C5(e,t,n){Kt[Yt++]=nr,Kt[Yt++]=rr,Kt[Yt++]=To,To=e;var r=nr;e=rr;var o=32-bn(r)-1;r&=~(1<<o),n+=1;var a=32-bn(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,nr=1<<32-bn(t)+o|n<<o|r,rr=a+e}else nr=1<<a|n<<o|r,rr=e}function vg(e){e.return!==null&&(io(e,1),C5(e,1,0))}function wg(e){for(;e===bc;)bc=pa[--ma],pa[ma]=null,vc=pa[--ma],pa[ma]=null;for(;e===To;)To=Kt[--Yt],Kt[Yt]=null,rr=Kt[--Yt],Kt[Yt]=null,nr=Kt[--Yt],Kt[Yt]=null}var Ot=null,It=null,Pe=!1,mn=null;function k5(e,t){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function a1(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ot=e,It=Mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ot=e,It=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=To!==null?{id:nr,overflow:rr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ot=e,It=null,!0):!1;default:return!1}}function pm(e){return(e.mode&1)!==0&&(e.flags&128)===0}function mm(e){if(Pe){var t=It;if(t){var n=t;if(!a1(e,t)){if(pm(e))throw Error(q(418));t=Mr(n.nextSibling);var r=Ot;t&&a1(e,t)?k5(r,n):(e.flags=e.flags&-4097|2,Pe=!1,Ot=e)}}else{if(pm(e))throw Error(q(418));e.flags=e.flags&-4097|2,Pe=!1,Ot=e}}}function i1(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ot=e}function Jl(e){if(e!==Ot)return!1;if(!Pe)return i1(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!um(e.type,e.memoizedProps)),t&&(t=It)){if(pm(e))throw F5(),Error(q(418));for(;t;)k5(e,t),t=Mr(t.nextSibling)}if(i1(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){It=Mr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}It=null}}else It=Ot?Mr(e.stateNode.nextSibling):null;return!0}function F5(){for(var e=It;e;)e=Mr(e.nextSibling)}function Ha(){It=Ot=null,Pe=!1}function xg(e){mn===null?mn=[e]:mn.push(e)}var LO=hr.ReactCurrentBatchConfig;function Ti(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var s=o.refs;i===null?delete s[a]:s[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,e))}return e}function eu(e,t){throw e=Object.prototype.toString.call(t),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function s1(e){var t=e._init;return t(e._payload)}function T5(e){function t(g,m){if(e){var h=g.deletions;h===null?(g.deletions=[m],g.flags|=16):h.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function o(g,m){return g=Nr(g,m),g.index=0,g.sibling=null,g}function a(g,m,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<m?(g.flags|=2,m):h):(g.flags|=2,m)):(g.flags|=1048576,m)}function i(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,m,h,S){return m===null||m.tag!==6?(m=Kf(h,g.mode,S),m.return=g,m):(m=o(m,h),m.return=g,m)}function l(g,m,h,S){var k=h.type;return k===sa?c(g,m,h.props.children,S,h.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Fr&&s1(k)===m.type)?(S=o(m,h.props),S.ref=Ti(g,m,h),S.return=g,S):(S=$u(h.type,h.key,h.props,null,g.mode,S),S.ref=Ti(g,m,h),S.return=g,S)}function u(g,m,h,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==h.containerInfo||m.stateNode.implementation!==h.implementation?(m=Yf(h,g.mode,S),m.return=g,m):(m=o(m,h.children||[]),m.return=g,m)}function c(g,m,h,S,k){return m===null||m.tag!==7?(m=wo(h,g.mode,S,k),m.return=g,m):(m=o(m,h),m.return=g,m)}function d(g,m,h){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Kf(""+m,g.mode,h),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Vl:return h=$u(m.type,m.key,m.props,null,g.mode,h),h.ref=Ti(g,null,m),h.return=g,h;case ia:return m=Yf(m,g.mode,h),m.return=g,m;case Fr:var S=m._init;return d(g,S(m._payload),h)}if(Ni(m)||xi(m))return m=wo(m,g.mode,h,null),m.return=g,m;eu(g,m)}return null}function f(g,m,h,S){var k=m!==null?m.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:s(g,m,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Vl:return h.key===k?l(g,m,h,S):null;case ia:return h.key===k?u(g,m,h,S):null;case Fr:return k=h._init,f(g,m,k(h._payload),S)}if(Ni(h)||xi(h))return k!==null?null:c(g,m,h,S,null);eu(g,h)}return null}function p(g,m,h,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(h)||null,s(m,g,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Vl:return g=g.get(S.key===null?h:S.key)||null,l(m,g,S,k);case ia:return g=g.get(S.key===null?h:S.key)||null,u(m,g,S,k);case Fr:var E=S._init;return p(g,m,h,E(S._payload),k)}if(Ni(S)||xi(S))return g=g.get(h)||null,c(m,g,S,k,null);eu(m,S)}return null}function v(g,m,h,S){for(var k=null,E=null,F=m,P=m=0,I=null;F!==null&&P<h.length;P++){F.index>P?(I=F,F=null):I=F.sibling;var R=f(g,F,h[P],S);if(R===null){F===null&&(F=I);break}e&&F&&R.alternate===null&&t(g,F),m=a(R,m,P),E===null?k=R:E.sibling=R,E=R,F=I}if(P===h.length)return n(g,F),Pe&&io(g,P),k;if(F===null){for(;P<h.length;P++)F=d(g,h[P],S),F!==null&&(m=a(F,m,P),E===null?k=F:E.sibling=F,E=F);return Pe&&io(g,P),k}for(F=r(g,F);P<h.length;P++)I=p(F,g,P,h[P],S),I!==null&&(e&&I.alternate!==null&&F.delete(I.key===null?P:I.key),m=a(I,m,P),E===null?k=I:E.sibling=I,E=I);return e&&F.forEach(function(M){return t(g,M)}),Pe&&io(g,P),k}function b(g,m,h,S){var k=xi(h);if(typeof k!="function")throw Error(q(150));if(h=k.call(h),h==null)throw Error(q(151));for(var E=k=null,F=m,P=m=0,I=null,R=h.next();F!==null&&!R.done;P++,R=h.next()){F.index>P?(I=F,F=null):I=F.sibling;var M=f(g,F,R.value,S);if(M===null){F===null&&(F=I);break}e&&F&&M.alternate===null&&t(g,F),m=a(M,m,P),E===null?k=M:E.sibling=M,E=M,F=I}if(R.done)return n(g,F),Pe&&io(g,P),k;if(F===null){for(;!R.done;P++,R=h.next())R=d(g,R.value,S),R!==null&&(m=a(R,m,P),E===null?k=R:E.sibling=R,E=R);return Pe&&io(g,P),k}for(F=r(g,F);!R.done;P++,R=h.next())R=p(F,g,P,R.value,S),R!==null&&(e&&R.alternate!==null&&F.delete(R.key===null?P:R.key),m=a(R,m,P),E===null?k=R:E.sibling=R,E=R);return e&&F.forEach(function(te){return t(g,te)}),Pe&&io(g,P),k}function w(g,m,h,S){if(typeof h=="object"&&h!==null&&h.type===sa&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Vl:e:{for(var k=h.key,E=m;E!==null;){if(E.key===k){if(k=h.type,k===sa){if(E.tag===7){n(g,E.sibling),m=o(E,h.props.children),m.return=g,g=m;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Fr&&s1(k)===E.type){n(g,E.sibling),m=o(E,h.props),m.ref=Ti(g,E,h),m.return=g,g=m;break e}n(g,E);break}else t(g,E);E=E.sibling}h.type===sa?(m=wo(h.props.children,g.mode,S,h.key),m.return=g,g=m):(S=$u(h.type,h.key,h.props,null,g.mode,S),S.ref=Ti(g,m,h),S.return=g,g=S)}return i(g);case ia:e:{for(E=h.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===h.containerInfo&&m.stateNode.implementation===h.implementation){n(g,m.sibling),m=o(m,h.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Yf(h,g.mode,S),m.return=g,g=m}return i(g);case Fr:return E=h._init,w(g,m,E(h._payload),S)}if(Ni(h))return v(g,m,h,S);if(xi(h))return b(g,m,h,S);eu(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,m!==null&&m.tag===6?(n(g,m.sibling),m=o(m,h),m.return=g,g=m):(n(g,m),m=Kf(h,g.mode,S),m.return=g,g=m),i(g)):n(g,m)}return w}var Ua=T5(!0),_5=T5(!1),wc=Gr(null),xc=null,ha=null,Sg=null;function Cg(){Sg=ha=xc=null}function kg(e){var t=wc.current;Te(wc),e._currentValue=t}function hm(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pa(e,t){xc=e,Sg=ha=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(xt=!0),e.firstContext=null)}function tn(e){var t=e._currentValue;if(Sg!==e)if(e={context:e,memoizedValue:t,next:null},ha===null){if(xc===null)throw Error(q(308));ha=e,xc.dependencies={lanes:0,firstContext:e}}else ha=ha.next=e;return t}var po=null;function Fg(e){po===null?po=[e]:po.push(e)}function E5(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Fg(t)):(n.next=o.next,o.next=n),t.interleaved=n,dr(e,r)}function dr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tr=!1;function Tg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function P5(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ir(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $r(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(se&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,dr(e,n)}return o=r.interleaved,o===null?(t.next=t,Fg(r)):(t.next=o.next,o.next=t),r.interleaved=t,dr(e,n)}function Ru(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dg(e,n)}}function l1(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Sc(e,t,n,r){var o=e.updateQueue;Tr=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?a=u:i.next=u,i=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==i&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=o.baseState;i=0,c=u=l=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,b=s;switch(f=t,p=n,b.tag){case 1:if(v=b.payload,typeof v=="function"){d=v.call(p,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,f=typeof v=="function"?v.call(p,d,f):v,f==null)break e;d=qe({},d,f);break e;case 2:Tr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,i|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(c===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Eo|=i,e.lanes=i,e.memoizedState=d}}function u1(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(q(191,o));o.call(r)}}}var cl={},Dn=Gr(cl),Ds=Gr(cl),Ns=Gr(cl);function mo(e){if(e===cl)throw Error(q(174));return e}function _g(e,t){switch(xe(Ns,t),xe(Ds,e),xe(Dn,cl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Yp(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Yp(t,e)}Te(Dn),xe(Dn,t)}function Ga(){Te(Dn),Te(Ds),Te(Ns)}function A5(e){mo(Ns.current);var t=mo(Dn.current),n=Yp(t,e.type);t!==n&&(xe(Ds,e),xe(Dn,n))}function Eg(e){Ds.current===e&&(Te(Dn),Te(Ds))}var Ae=Gr(0);function Cc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jf=[];function Pg(){for(var e=0;e<jf.length;e++)jf[e]._workInProgressVersionPrimary=null;jf.length=0}var Iu=hr.ReactCurrentDispatcher,Vf=hr.ReactCurrentBatchConfig,_o=0,Re=null,Ue=null,Ye=null,kc=!1,us=!1,Bs=0,DO=0;function rt(){throw Error(q(321))}function Ag(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wn(e[n],t[n]))return!1;return!0}function Rg(e,t,n,r,o,a){if(_o=a,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Iu.current=e===null||e.memoizedState===null?VO:WO,e=n(r,o),us){a=0;do{if(us=!1,Bs=0,25<=a)throw Error(q(301));a+=1,Ye=Ue=null,t.updateQueue=null,Iu.current=HO,e=n(r,o)}while(us)}if(Iu.current=Fc,t=Ue!==null&&Ue.next!==null,_o=0,Ye=Ue=Re=null,kc=!1,t)throw Error(q(300));return e}function Ig(){var e=Bs!==0;return Bs=0,e}function _n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Re.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function nn(){if(Ue===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=Ye===null?Re.memoizedState:Ye.next;if(t!==null)Ye=t,Ue=e;else{if(e===null)throw Error(q(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ye===null?Re.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function js(e,t){return typeof t=="function"?t(e):t}function Wf(e){var t=nn(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var r=Ue,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var s=i=null,l=null,u=a;do{var c=u.lane;if((_o&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,i=r):l=l.next=d,Re.lanes|=c,Eo|=c}u=u.next}while(u!==null&&u!==a);l===null?i=r:l.next=s,wn(r,t.memoizedState)||(xt=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,Re.lanes|=a,Eo|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hf(e){var t=nn(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);wn(a,t.memoizedState)||(xt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function R5(){}function I5(e,t){var n=Re,r=nn(),o=t(),a=!wn(r.memoizedState,o);if(a&&(r.memoizedState=o,xt=!0),r=r.queue,qg(O5.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Vs(9,z5.bind(null,n,r,o,t),void 0,null),Xe===null)throw Error(q(349));(_o&30)!==0||q5(n,t,o)}return o}function q5(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function z5(e,t,n,r){t.value=n,t.getSnapshot=r,M5(t)&&$5(e)}function O5(e,t,n){return n(function(){M5(t)&&$5(e)})}function M5(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wn(e,n)}catch{return!0}}function $5(e){var t=dr(e,1);t!==null&&vn(t,e,1,-1)}function c1(e){var t=_n();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:js,lastRenderedState:e},t.queue=e,e=e.dispatch=jO.bind(null,Re,e),[t.memoizedState,e]}function Vs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function L5(){return nn().memoizedState}function qu(e,t,n,r){var o=_n();Re.flags|=e,o.memoizedState=Vs(1|t,n,void 0,r===void 0?null:r)}function wd(e,t,n,r){var o=nn();r=r===void 0?null:r;var a=void 0;if(Ue!==null){var i=Ue.memoizedState;if(a=i.destroy,r!==null&&Ag(r,i.deps)){o.memoizedState=Vs(t,n,a,r);return}}Re.flags|=e,o.memoizedState=Vs(1|t,n,a,r)}function d1(e,t){return qu(8390656,8,e,t)}function qg(e,t){return wd(2048,8,e,t)}function D5(e,t){return wd(4,2,e,t)}function N5(e,t){return wd(4,4,e,t)}function B5(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function j5(e,t,n){return n=n!=null?n.concat([e]):null,wd(4,4,B5.bind(null,t,e),n)}function zg(){}function V5(e,t){var n=nn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ag(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function W5(e,t){var n=nn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ag(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function H5(e,t,n){return(_o&21)===0?(e.baseState&&(e.baseState=!1,xt=!0),e.memoizedState=n):(wn(n,t)||(n=Xx(),Re.lanes|=n,Eo|=n,e.baseState=!0),t)}function NO(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=Vf.transition;Vf.transition={};try{e(!1),t()}finally{he=n,Vf.transition=r}}function U5(){return nn().memoizedState}function BO(e,t,n){var r=Dr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},G5(e))K5(t,n);else if(n=E5(e,t,n,r),n!==null){var o=mt();vn(n,e,r,o),Y5(n,t,r)}}function jO(e,t,n){var r=Dr(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(G5(e))K5(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,s=a(i,n);if(o.hasEagerState=!0,o.eagerState=s,wn(s,i)){var l=t.interleaved;l===null?(o.next=o,Fg(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=E5(e,t,o,r),n!==null&&(o=mt(),vn(n,e,r,o),Y5(n,t,r))}}function G5(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function K5(e,t){us=kc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Y5(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dg(e,n)}}var Fc={readContext:tn,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},VO={readContext:tn,useCallback:function(e,t){return _n().memoizedState=[e,t===void 0?null:t],e},useContext:tn,useEffect:d1,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qu(4194308,4,B5.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qu(4194308,4,e,t)},useInsertionEffect:function(e,t){return qu(4,2,e,t)},useMemo:function(e,t){var n=_n();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_n();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=BO.bind(null,Re,e),[r.memoizedState,e]},useRef:function(e){var t=_n();return e={current:e},t.memoizedState=e},useState:c1,useDebugValue:zg,useDeferredValue:function(e){return _n().memoizedState=e},useTransition:function(){var e=c1(!1),t=e[0];return e=NO.bind(null,e[1]),_n().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Re,o=_n();if(Pe){if(n===void 0)throw Error(q(407));n=n()}else{if(n=t(),Xe===null)throw Error(q(349));(_o&30)!==0||q5(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,d1(O5.bind(null,r,a,e),[e]),r.flags|=2048,Vs(9,z5.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=_n(),t=Xe.identifierPrefix;if(Pe){var n=rr,r=nr;n=(r&~(1<<32-bn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Bs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=DO++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},WO={readContext:tn,useCallback:V5,useContext:tn,useEffect:qg,useImperativeHandle:j5,useInsertionEffect:D5,useLayoutEffect:N5,useMemo:W5,useReducer:Wf,useRef:L5,useState:function(){return Wf(js)},useDebugValue:zg,useDeferredValue:function(e){var t=nn();return H5(t,Ue.memoizedState,e)},useTransition:function(){var e=Wf(js)[0],t=nn().memoizedState;return[e,t]},useMutableSource:R5,useSyncExternalStore:I5,useId:U5,unstable_isNewReconciler:!1},HO={readContext:tn,useCallback:V5,useContext:tn,useEffect:qg,useImperativeHandle:j5,useInsertionEffect:D5,useLayoutEffect:N5,useMemo:W5,useReducer:Hf,useRef:L5,useState:function(){return Hf(js)},useDebugValue:zg,useDeferredValue:function(e){var t=nn();return Ue===null?t.memoizedState=e:H5(t,Ue.memoizedState,e)},useTransition:function(){var e=Hf(js)[0],t=nn().memoizedState;return[e,t]},useMutableSource:R5,useSyncExternalStore:I5,useId:U5,unstable_isNewReconciler:!1};function fn(e,t){if(e&&e.defaultProps){t=qe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function gm(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:qe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xd={isMounted:function(e){return(e=e._reactInternals)?$o(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mt(),o=Dr(e),a=ir(r,o);a.payload=t,n!=null&&(a.callback=n),t=$r(e,a,o),t!==null&&(vn(t,e,o,r),Ru(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mt(),o=Dr(e),a=ir(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=$r(e,a,o),t!==null&&(vn(t,e,o,r),Ru(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mt(),r=Dr(e),o=ir(n,r);o.tag=2,t!=null&&(o.callback=t),t=$r(e,o,r),t!==null&&(vn(t,e,r,n),Ru(t,e,r))}};function f1(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!Os(n,r)||!Os(o,a):!0}function X5(e,t,n){var r=!1,o=Wr,a=t.contextType;return typeof a=="object"&&a!==null?a=tn(a):(o=kt(t)?Fo:st.current,r=t.contextTypes,a=(r=r!=null)?Wa(e,o):Wr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xd,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function p1(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xd.enqueueReplaceState(t,t.state,null)}function ym(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Tg(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=tn(a):(a=kt(t)?Fo:st.current,o.context=Wa(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(gm(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&xd.enqueueReplaceState(o,o.state,null),Sc(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ka(e,t){try{var n="",r=t;do n+=vz(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function Uf(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function bm(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var UO=typeof WeakMap=="function"?WeakMap:Map;function Z5(e,t,n){n=ir(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_c||(_c=!0,Em=r),bm(e,t)},n}function Q5(e,t,n){n=ir(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){bm(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){bm(e,t),typeof r!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function m1(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new UO;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=iM.bind(null,e,t,n),t.then(e,e))}function h1(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function g1(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ir(-1,1),t.tag=2,$r(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var GO=hr.ReactCurrentOwner,xt=!1;function dt(e,t,n,r){t.child=e===null?_5(t,null,n,r):Ua(t,e.child,n,r)}function y1(e,t,n,r,o){n=n.render;var a=t.ref;return Pa(t,o),r=Rg(e,t,n,r,a,o),n=Ig(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,fr(e,t,o)):(Pe&&n&&vg(t),t.flags|=1,dt(e,t,r,o),t.child)}function b1(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!jg(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,J5(e,t,a,r,o)):(e=$u(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:Os,n(i,r)&&e.ref===t.ref)return fr(e,t,o)}return t.flags|=1,e=Nr(a,r),e.ref=t.ref,e.return=t,t.child=e}function J5(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(Os(a,r)&&e.ref===t.ref)if(xt=!1,t.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(xt=!0);else return t.lanes=e.lanes,fr(e,t,o)}return vm(e,t,n,r,o)}function e3(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(ya,At),At|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,xe(ya,At),At|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,xe(ya,At),At|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,xe(ya,At),At|=r;return dt(e,t,o,n),t.child}function t3(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function vm(e,t,n,r,o){var a=kt(n)?Fo:st.current;return a=Wa(t,a),Pa(t,o),n=Rg(e,t,n,r,a,o),r=Ig(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,fr(e,t,o)):(Pe&&r&&vg(t),t.flags|=1,dt(e,t,n,o),t.child)}function v1(e,t,n,r,o){if(kt(n)){var a=!0;yc(t)}else a=!1;if(Pa(t,o),t.stateNode===null)zu(e,t),X5(t,n,r),ym(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var l=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=tn(u):(u=kt(n)?Fo:st.current,u=Wa(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||l!==u)&&p1(t,i,r,u),Tr=!1;var f=t.memoizedState;i.state=f,Sc(t,r,i,o),l=t.memoizedState,s!==r||f!==l||Ct.current||Tr?(typeof c=="function"&&(gm(t,n,c,r),l=t.memoizedState),(s=Tr||f1(t,n,s,r,f,l,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),i.props=r,i.state=l,i.context=u,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,P5(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:fn(t.type,s),i.props=u,d=t.pendingProps,f=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=tn(l):(l=kt(n)?Fo:st.current,l=Wa(t,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==d||f!==l)&&p1(t,i,r,l),Tr=!1,f=t.memoizedState,i.state=f,Sc(t,r,i,o);var v=t.memoizedState;s!==d||f!==v||Ct.current||Tr?(typeof p=="function"&&(gm(t,n,p,r),v=t.memoizedState),(u=Tr||f1(t,n,u,r,f,v,l)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,v,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,v,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),i.props=r,i.state=v,i.context=l,r=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return wm(e,t,n,r,a,o)}function wm(e,t,n,r,o,a){t3(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&o1(t,n,!1),fr(e,t,a);r=t.stateNode,GO.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Ua(t,e.child,null,a),t.child=Ua(t,null,s,a)):dt(e,t,s,a),t.memoizedState=r.state,o&&o1(t,n,!0),t.child}function n3(e){var t=e.stateNode;t.pendingContext?r1(e,t.pendingContext,t.pendingContext!==t.context):t.context&&r1(e,t.context,!1),_g(e,t.containerInfo)}function w1(e,t,n,r,o){return Ha(),xg(o),t.flags|=256,dt(e,t,n,r),t.child}var xm={dehydrated:null,treeContext:null,retryLane:0};function Sm(e){return{baseLanes:e,cachePool:null,transitions:null}}function r3(e,t,n){var r=t.pendingProps,o=Ae.current,a=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),xe(Ae,o&1),e===null)return mm(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=i):a=kd(i,r,0,null),e=wo(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Sm(n),t.memoizedState=xm,e):Og(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return KO(e,t,i,r,s,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Nr(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?a=Nr(s,a):(a=wo(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?Sm(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=xm,r}return a=e.child,e=a.sibling,r=Nr(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Og(e,t){return t=kd({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function tu(e,t,n,r){return r!==null&&xg(r),Ua(t,e.child,null,n),e=Og(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function KO(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=Uf(Error(q(422))),tu(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=kd({mode:"visible",children:r.children},o,0,null),a=wo(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&Ua(t,e.child,null,i),t.child.memoizedState=Sm(i),t.memoizedState=xm,a);if((t.mode&1)===0)return tu(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(q(419)),r=Uf(a,r,void 0),tu(e,t,i,r)}if(s=(i&e.childLanes)!==0,xt||s){if(r=Xe,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,dr(e,o),vn(r,e,o,-1))}return Bg(),r=Uf(Error(q(421))),tu(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=sM.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,It=Mr(o.nextSibling),Ot=t,Pe=!0,mn=null,e!==null&&(Kt[Yt++]=nr,Kt[Yt++]=rr,Kt[Yt++]=To,nr=e.id,rr=e.overflow,To=t),t=Og(t,r.children),t.flags|=4096,t)}function x1(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),hm(e.return,t,n)}function Gf(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function o3(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(dt(e,t,r.children,n),r=Ae.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&x1(e,n,t);else if(e.tag===19)x1(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(xe(Ae,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Cc(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Gf(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Cc(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Gf(t,!0,n,null,a);break;case"together":Gf(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zu(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function fr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Eo|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(q(153));if(t.child!==null){for(e=t.child,n=Nr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function YO(e,t,n){switch(t.tag){case 3:n3(t),Ha();break;case 5:A5(t);break;case 1:kt(t.type)&&yc(t);break;case 4:_g(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;xe(wc,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(xe(Ae,Ae.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?r3(e,t,n):(xe(Ae,Ae.current&1),e=fr(e,t,n),e!==null?e.sibling:null);xe(Ae,Ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return o3(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),xe(Ae,Ae.current),r)break;return null;case 22:case 23:return t.lanes=0,e3(e,t,n)}return fr(e,t,n)}var a3,Cm,i3,s3;a3=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cm=function(){};i3=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,mo(Dn.current);var a=null;switch(n){case"input":o=Hp(e,o),r=Hp(e,r),a=[];break;case"select":o=qe({},o,{value:void 0}),r=qe({},r,{value:void 0}),a=[];break;case"textarea":o=Kp(e,o),r=Kp(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hc)}Xp(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Es.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Es.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ce("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};s3=function(e,t,n,r){n!==r&&(t.flags|=4)};function _i(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function XO(e,t,n){var r=t.pendingProps;switch(wg(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(t),null;case 1:return kt(t.type)&&gc(),ot(t),null;case 3:return r=t.stateNode,Ga(),Te(Ct),Te(st),Pg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Jl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,mn!==null&&(Rm(mn),mn=null))),Cm(e,t),ot(t),null;case 5:Eg(t);var o=mo(Ns.current);if(n=t.type,e!==null&&t.stateNode!=null)i3(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(q(166));return ot(t),null}if(e=mo(Dn.current),Jl(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[In]=t,r[Ls]=a,e=(t.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(o=0;o<ji.length;o++)Ce(ji[o],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":Ab(r,a),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ce("invalid",r);break;case"textarea":Ib(r,a),Ce("invalid",r)}Xp(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Ql(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Ql(r.textContent,s,e),o=["children",""+s]):Es.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Ce("scroll",r)}switch(n){case"input":Wl(r),Rb(r,a,!0);break;case"textarea":Wl(r),qb(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=hc)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ox(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[In]=t,e[Ls]=r,a3(e,t,!1,!1),t.stateNode=e;e:{switch(i=Zp(n,r),n){case"dialog":Ce("cancel",e),Ce("close",e),o=r;break;case"iframe":case"object":case"embed":Ce("load",e),o=r;break;case"video":case"audio":for(o=0;o<ji.length;o++)Ce(ji[o],e);o=r;break;case"source":Ce("error",e),o=r;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),o=r;break;case"details":Ce("toggle",e),o=r;break;case"input":Ab(e,r),o=Hp(e,r),Ce("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=qe({},r,{value:void 0}),Ce("invalid",e);break;case"textarea":Ib(e,r),o=Kp(e,r),Ce("invalid",e);break;default:o=r}Xp(n,o),s=o;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Lx(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mx(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ps(e,l):typeof l=="number"&&Ps(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Es.hasOwnProperty(a)?l!=null&&a==="onScroll"&&Ce("scroll",e):l!=null&&ag(e,a,l,i))}switch(n){case"input":Wl(e),Rb(e,r,!1);break;case"textarea":Wl(e),qb(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vr(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Fa(e,!!r.multiple,a,!1):r.defaultValue!=null&&Fa(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=hc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ot(t),null;case 6:if(e&&t.stateNode!=null)s3(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(q(166));if(n=mo(Ns.current),mo(Dn.current),Jl(t)){if(r=t.stateNode,n=t.memoizedProps,r[In]=t,(a=r.nodeValue!==n)&&(e=Ot,e!==null))switch(e.tag){case 3:Ql(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ql(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[In]=t,t.stateNode=r}return ot(t),null;case 13:if(Te(Ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&It!==null&&(t.mode&1)!==0&&(t.flags&128)===0)F5(),Ha(),t.flags|=98560,a=!1;else if(a=Jl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(q(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(q(317));a[In]=t}else Ha(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ot(t),a=!1}else mn!==null&&(Rm(mn),mn=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ae.current&1)!==0?Ge===0&&(Ge=3):Bg())),t.updateQueue!==null&&(t.flags|=4),ot(t),null);case 4:return Ga(),Cm(e,t),e===null&&Ms(t.stateNode.containerInfo),ot(t),null;case 10:return kg(t.type._context),ot(t),null;case 17:return kt(t.type)&&gc(),ot(t),null;case 19:if(Te(Ae),a=t.memoizedState,a===null)return ot(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)_i(a,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Cc(e),i!==null){for(t.flags|=128,_i(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return xe(Ae,Ae.current&1|2),t.child}e=e.sibling}a.tail!==null&&De()>Ya&&(t.flags|=128,r=!0,_i(a,!1),t.lanes=4194304)}else{if(!r)if(e=Cc(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_i(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Pe)return ot(t),null}else 2*De()-a.renderingStartTime>Ya&&n!==1073741824&&(t.flags|=128,r=!0,_i(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=De(),t.sibling=null,n=Ae.current,xe(Ae,r?n&1|2:n&1),t):(ot(t),null);case 22:case 23:return Ng(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(At&1073741824)!==0&&(ot(t),t.subtreeFlags&6&&(t.flags|=8192)):ot(t),null;case 24:return null;case 25:return null}throw Error(q(156,t.tag))}function ZO(e,t){switch(wg(t),t.tag){case 1:return kt(t.type)&&gc(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ga(),Te(Ct),Te(st),Pg(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Eg(t),null;case 13:if(Te(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(q(340));Ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Te(Ae),null;case 4:return Ga(),null;case 10:return kg(t.type._context),null;case 22:case 23:return Ng(),null;case 24:return null;default:return null}}var nu=!1,it=!1,QO=typeof WeakSet=="function"?WeakSet:Set,L=null;function ga(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function km(e,t,n){try{n()}catch(r){Oe(e,t,r)}}var S1=!1;function JO(e,t){if(sm=fc,e=f5(),bg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,s=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var p;d!==n||o!==0&&d.nodeType!==3||(s=i+o),d!==a||r!==0&&d.nodeType!==3||(l=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break t;if(f===n&&++u===o&&(s=i),f===a&&++c===r&&(l=i),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lm={focusedElem:e,selectionRange:n},fc=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var v=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,w=v.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:fn(t.type,b),w);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(S){Oe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return v=S1,S1=!1,v}function cs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&km(t,n,a)}o=o.next}while(o!==r)}}function Sd(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fm(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function l3(e){var t=e.alternate;t!==null&&(e.alternate=null,l3(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[In],delete t[Ls],delete t[dm],delete t[OO],delete t[MO])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function u3(e){return e.tag===5||e.tag===3||e.tag===4}function C1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||u3(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tm(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hc));else if(r!==4&&(e=e.child,e!==null))for(Tm(e,t,n),e=e.sibling;e!==null;)Tm(e,t,n),e=e.sibling}function _m(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_m(e,t,n),e=e.sibling;e!==null;)_m(e,t,n),e=e.sibling}var Qe=null,pn=!1;function xr(e,t,n){for(n=n.child;n!==null;)c3(e,t,n),n=n.sibling}function c3(e,t,n){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(md,n)}catch{}switch(n.tag){case 5:it||ga(n,t);case 6:var r=Qe,o=pn;Qe=null,xr(e,t,n),Qe=r,pn=o,Qe!==null&&(pn?(e=Qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(pn?(e=Qe,n=n.stateNode,e.nodeType===8?Nf(e.parentNode,n):e.nodeType===1&&Nf(e,n),qs(e)):Nf(Qe,n.stateNode));break;case 4:r=Qe,o=pn,Qe=n.stateNode.containerInfo,pn=!0,xr(e,t,n),Qe=r,pn=o;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&((a&2)!==0||(a&4)!==0)&&km(n,t,i),o=o.next}while(o!==r)}xr(e,t,n);break;case 1:if(!it&&(ga(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Oe(n,t,s)}xr(e,t,n);break;case 21:xr(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,xr(e,t,n),it=r):xr(e,t,n);break;default:xr(e,t,n)}}function k1(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new QO),t.forEach(function(r){var o=lM.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function cn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:Qe=s.stateNode,pn=!1;break e;case 3:Qe=s.stateNode.containerInfo,pn=!0;break e;case 4:Qe=s.stateNode.containerInfo,pn=!0;break e}s=s.return}if(Qe===null)throw Error(q(160));c3(a,i,o),Qe=null,pn=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){Oe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)d3(t,e),t=t.sibling}function d3(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(t,e),Fn(e),r&4){try{cs(3,e,e.return),Sd(3,e)}catch(b){Oe(e,e.return,b)}try{cs(5,e,e.return)}catch(b){Oe(e,e.return,b)}}break;case 1:cn(t,e),Fn(e),r&512&&n!==null&&ga(n,n.return);break;case 5:if(cn(t,e),Fn(e),r&512&&n!==null&&ga(n,n.return),e.flags&32){var o=e.stateNode;try{Ps(o,"")}catch(b){Oe(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&qx(o,a),Zp(s,i);var u=Zp(s,a);for(i=0;i<l.length;i+=2){var c=l[i],d=l[i+1];c==="style"?Lx(o,d):c==="dangerouslySetInnerHTML"?Mx(o,d):c==="children"?Ps(o,d):ag(o,c,d,u)}switch(s){case"input":Up(o,a);break;case"textarea":zx(o,a);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?Fa(o,!!a.multiple,p,!1):f!==!!a.multiple&&(a.defaultValue!=null?Fa(o,!!a.multiple,a.defaultValue,!0):Fa(o,!!a.multiple,a.multiple?[]:"",!1))}o[Ls]=a}catch(b){Oe(e,e.return,b)}}break;case 6:if(cn(t,e),Fn(e),r&4){if(e.stateNode===null)throw Error(q(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(b){Oe(e,e.return,b)}}break;case 3:if(cn(t,e),Fn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qs(t.containerInfo)}catch(b){Oe(e,e.return,b)}break;case 4:cn(t,e),Fn(e);break;case 13:cn(t,e),Fn(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Lg=De())),r&4&&k1(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(it=(u=it)||c,cn(t,e),it=u):cn(t,e),Fn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(L=e,c=e.child;c!==null;){for(d=L=c;L!==null;){switch(f=L,p=f.child,f.tag){case 0:case 11:case 14:case 15:cs(4,f,f.return);break;case 1:ga(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(b){Oe(r,n,b)}}break;case 5:ga(f,f.return);break;case 22:if(f.memoizedState!==null){T1(d);continue}}p!==null?(p.return=f,L=p):T1(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=$x("display",i))}catch(b){Oe(e,e.return,b)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(b){Oe(e,e.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:cn(t,e),Fn(e),r&4&&k1(e);break;case 21:break;default:cn(t,e),Fn(e)}}function Fn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(u3(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ps(o,""),r.flags&=-33);var a=C1(e);_m(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=C1(e);Tm(e,s,i);break;default:throw Error(q(161))}}catch(l){Oe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function eM(e,t,n){L=e,f3(e)}function f3(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||nu;if(!i){var s=o.alternate,l=s!==null&&s.memoizedState!==null||it;s=nu;var u=it;if(nu=i,(it=l)&&!u)for(L=o;L!==null;)i=L,l=i.child,i.tag===22&&i.memoizedState!==null?_1(o):l!==null?(l.return=i,L=l):_1(o);for(;a!==null;)L=a,f3(a),a=a.sibling;L=o,nu=s,it=u}F1(e)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,L=a):F1(e)}}function F1(e){for(;L!==null;){var t=L;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:it||Sd(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:fn(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&u1(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}u1(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&qs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}it||t.flags&512&&Fm(t)}catch(f){Oe(t,t.return,f)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function T1(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function _1(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sd(4,t)}catch(l){Oe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){Oe(t,o,l)}}var a=t.return;try{Fm(t)}catch(l){Oe(t,a,l)}break;case 5:var i=t.return;try{Fm(t)}catch(l){Oe(t,i,l)}}}catch(l){Oe(t,t.return,l)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var tM=Math.ceil,Tc=hr.ReactCurrentDispatcher,Mg=hr.ReactCurrentOwner,Qt=hr.ReactCurrentBatchConfig,se=0,Xe=null,Ve=null,et=0,At=0,ya=Gr(0),Ge=0,Ws=null,Eo=0,Cd=0,$g=0,ds=null,vt=null,Lg=0,Ya=1/0,Xn=null,_c=!1,Em=null,Lr=null,ru=!1,Ir=null,Ec=0,fs=0,Pm=null,Ou=-1,Mu=0;function mt(){return(se&6)!==0?De():Ou!==-1?Ou:Ou=De()}function Dr(e){return(e.mode&1)===0?1:(se&2)!==0&&et!==0?et&-et:LO.transition!==null?(Mu===0&&(Mu=Xx()),Mu):(e=he,e!==0||(e=window.event,e=e===void 0?16:r5(e.type)),e)}function vn(e,t,n,r){if(50<fs)throw fs=0,Pm=null,Error(q(185));sl(e,n,r),((se&2)===0||e!==Xe)&&(e===Xe&&((se&2)===0&&(Cd|=n),Ge===4&&Pr(e,et)),Ft(e,r),n===1&&se===0&&(t.mode&1)===0&&(Ya=De()+500,vd&&Kr()))}function Ft(e,t){var n=e.callbackNode;Lz(e,t);var r=dc(e,e===Xe?et:0);if(r===0)n!==null&&Mb(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Mb(n),t===1)e.tag===0?$O(E1.bind(null,e)):S5(E1.bind(null,e)),qO(function(){(se&6)===0&&Kr()}),n=null;else{switch(Zx(r)){case 1:n=cg;break;case 4:n=Kx;break;case 16:n=cc;break;case 536870912:n=Yx;break;default:n=cc}n=w3(n,p3.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function p3(e,t){if(Ou=-1,Mu=0,(se&6)!==0)throw Error(q(327));var n=e.callbackNode;if(Aa()&&e.callbackNode!==n)return null;var r=dc(e,e===Xe?et:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Pc(e,r);else{t=r;var o=se;se|=2;var a=h3();(Xe!==e||et!==t)&&(Xn=null,Ya=De()+500,vo(e,t));do try{oM();break}catch(s){m3(e,s)}while(1);Cg(),Tc.current=a,se=o,Ve!==null?t=0:(Xe=null,et=0,t=Ge)}if(t!==0){if(t===2&&(o=nm(e),o!==0&&(r=o,t=Am(e,o))),t===1)throw n=Ws,vo(e,0),Pr(e,r),Ft(e,De()),n;if(t===6)Pr(e,r);else{if(o=e.current.alternate,(r&30)===0&&!nM(o)&&(t=Pc(e,r),t===2&&(a=nm(e),a!==0&&(r=a,t=Am(e,a))),t===1))throw n=Ws,vo(e,0),Pr(e,r),Ft(e,De()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(q(345));case 2:so(e,vt,Xn);break;case 3:if(Pr(e,r),(r&130023424)===r&&(t=Lg+500-De(),10<t)){if(dc(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){mt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=cm(so.bind(null,e,vt,Xn),t);break}so(e,vt,Xn);break;case 4:if(Pr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-bn(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tM(r/1960))-r,10<r){e.timeoutHandle=cm(so.bind(null,e,vt,Xn),r);break}so(e,vt,Xn);break;case 5:so(e,vt,Xn);break;default:throw Error(q(329))}}}return Ft(e,De()),e.callbackNode===n?p3.bind(null,e):null}function Am(e,t){var n=ds;return e.current.memoizedState.isDehydrated&&(vo(e,t).flags|=256),e=Pc(e,t),e!==2&&(t=vt,vt=n,t!==null&&Rm(t)),e}function Rm(e){vt===null?vt=e:vt.push.apply(vt,e)}function nM(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!wn(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pr(e,t){for(t&=~$g,t&=~Cd,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bn(t),r=1<<n;e[n]=-1,t&=~r}}function E1(e){if((se&6)!==0)throw Error(q(327));Aa();var t=dc(e,0);if((t&1)===0)return Ft(e,De()),null;var n=Pc(e,t);if(e.tag!==0&&n===2){var r=nm(e);r!==0&&(t=r,n=Am(e,r))}if(n===1)throw n=Ws,vo(e,0),Pr(e,t),Ft(e,De()),n;if(n===6)throw Error(q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,so(e,vt,Xn),Ft(e,De()),null}function Dg(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Ya=De()+500,vd&&Kr())}}function Po(e){Ir!==null&&Ir.tag===0&&(se&6)===0&&Aa();var t=se;se|=1;var n=Qt.transition,r=he;try{if(Qt.transition=null,he=1,e)return e()}finally{he=r,Qt.transition=n,se=t,(se&6)===0&&Kr()}}function Ng(){At=ya.current,Te(ya)}function vo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,IO(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(wg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gc();break;case 3:Ga(),Te(Ct),Te(st),Pg();break;case 5:Eg(r);break;case 4:Ga();break;case 13:Te(Ae);break;case 19:Te(Ae);break;case 10:kg(r.type._context);break;case 22:case 23:Ng()}n=n.return}if(Xe=e,Ve=e=Nr(e.current,null),et=At=t,Ge=0,Ws=null,$g=Cd=Eo=0,vt=ds=null,po!==null){for(t=0;t<po.length;t++)if(n=po[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}po=null}return e}function m3(e,t){do{var n=Ve;try{if(Cg(),Iu.current=Fc,kc){for(var r=Re.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}kc=!1}if(_o=0,Ye=Ue=Re=null,us=!1,Bs=0,Mg.current=null,n===null||n.return===null){Ge=1,Ws=t,Ve=null;break}e:{var a=e,i=n.return,s=n,l=t;if(t=et,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=h1(i);if(p!==null){p.flags&=-257,g1(p,i,s,a,t),p.mode&1&&m1(a,u,t),t=p,l=u;var v=t.updateQueue;if(v===null){var b=new Set;b.add(l),t.updateQueue=b}else v.add(l);break e}else{if((t&1)===0){m1(a,u,t),Bg();break e}l=Error(q(426))}}else if(Pe&&s.mode&1){var w=h1(i);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),g1(w,i,s,a,t),xg(Ka(l,s));break e}}a=l=Ka(l,s),Ge!==4&&(Ge=2),ds===null?ds=[a]:ds.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=Z5(a,l,t);l1(a,g);break e;case 1:s=l;var m=a.type,h=a.stateNode;if((a.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Lr===null||!Lr.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=Q5(a,s,t);l1(a,S);break e}}a=a.return}while(a!==null)}y3(n)}catch(k){t=k,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(1)}function h3(){var e=Tc.current;return Tc.current=Fc,e===null?Fc:e}function Bg(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Xe===null||(Eo&268435455)===0&&(Cd&268435455)===0||Pr(Xe,et)}function Pc(e,t){var n=se;se|=2;var r=h3();(Xe!==e||et!==t)&&(Xn=null,vo(e,t));do try{rM();break}catch(o){m3(e,o)}while(1);if(Cg(),se=n,Tc.current=r,Ve!==null)throw Error(q(261));return Xe=null,et=0,Ge}function rM(){for(;Ve!==null;)g3(Ve)}function oM(){for(;Ve!==null&&!Pz();)g3(Ve)}function g3(e){var t=v3(e.alternate,e,At);e.memoizedProps=e.pendingProps,t===null?y3(e):Ve=t,Mg.current=null}function y3(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=XO(n,t,At),n!==null){Ve=n;return}}else{if(n=ZO(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,Ve=null;return}}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Ge===0&&(Ge=5)}function so(e,t,n){var r=he,o=Qt.transition;try{Qt.transition=null,he=1,aM(e,t,n,r)}finally{Qt.transition=o,he=r}return null}function aM(e,t,n,r){do Aa();while(Ir!==null);if((se&6)!==0)throw Error(q(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(q(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Dz(e,a),e===Xe&&(Ve=Xe=null,et=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ru||(ru=!0,w3(cc,function(){return Aa(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=Qt.transition,Qt.transition=null;var i=he;he=1;var s=se;se|=4,Mg.current=null,JO(e,n),d3(n,e),FO(lm),fc=!!sm,lm=sm=null,e.current=n,eM(n),Az(),se=s,he=i,Qt.transition=a}else e.current=n;if(ru&&(ru=!1,Ir=e,Ec=o),a=e.pendingLanes,a===0&&(Lr=null),qz(n.stateNode),Ft(e,De()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(_c)throw _c=!1,e=Em,Em=null,e;return(Ec&1)!==0&&e.tag!==0&&Aa(),a=e.pendingLanes,(a&1)!==0?e===Pm?fs++:(fs=0,Pm=e):fs=0,Kr(),null}function Aa(){if(Ir!==null){var e=Zx(Ec),t=Qt.transition,n=he;try{if(Qt.transition=null,he=16>e?16:e,Ir===null)var r=!1;else{if(e=Ir,Ir=null,Ec=0,(se&6)!==0)throw Error(q(331));var o=se;for(se|=4,L=e.current;L!==null;){var a=L,i=a.child;if((L.flags&16)!==0){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:cs(8,c,a)}var d=c.child;if(d!==null)d.return=c,L=d;else for(;L!==null;){c=L;var f=c.sibling,p=c.return;if(l3(c),c===u){L=null;break}if(f!==null){f.return=p,L=f;break}L=p}}}var v=a.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var w=b.sibling;b.sibling=null,b=w}while(b!==null)}}L=a}}if((a.subtreeFlags&2064)!==0&&i!==null)i.return=a,L=i;else e:for(;L!==null;){if(a=L,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:cs(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,L=g;break e}L=a.return}}var m=e.current;for(L=m;L!==null;){i=L;var h=i.child;if((i.subtreeFlags&2064)!==0&&h!==null)h.return=i,L=h;else e:for(i=m;L!==null;){if(s=L,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Sd(9,s)}}catch(k){Oe(s,s.return,k)}if(s===i){L=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,L=S;break e}L=s.return}}if(se=o,Kr(),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(md,e)}catch{}r=!0}return r}finally{he=n,Qt.transition=t}}return!1}function P1(e,t,n){t=Ka(n,t),t=Z5(e,t,1),e=$r(e,t,1),t=mt(),e!==null&&(sl(e,1,t),Ft(e,t))}function Oe(e,t,n){if(e.tag===3)P1(e,e,n);else for(;t!==null;){if(t.tag===3){P1(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lr===null||!Lr.has(r))){e=Ka(n,e),e=Q5(t,e,1),t=$r(t,e,1),e=mt(),t!==null&&(sl(t,1,e),Ft(t,e));break}}t=t.return}}function iM(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=mt(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(et&n)===n&&(Ge===4||Ge===3&&(et&130023424)===et&&500>De()-Lg?vo(e,0):$g|=n),Ft(e,t)}function b3(e,t){t===0&&((e.mode&1)===0?t=1:(t=Gl,Gl<<=1,(Gl&130023424)===0&&(Gl=4194304)));var n=mt();e=dr(e,t),e!==null&&(sl(e,t,n),Ft(e,n))}function sM(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),b3(e,n)}function lM(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(t),b3(e,n)}var v3;v3=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ct.current)xt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return xt=!1,YO(e,t,n);xt=(e.flags&131072)!==0}else xt=!1,Pe&&(t.flags&1048576)!==0&&C5(t,vc,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zu(e,t),e=t.pendingProps;var o=Wa(t,st.current);Pa(t,n),o=Rg(null,t,r,e,o,n);var a=Ig();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,kt(r)?(a=!0,yc(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Tg(t),o.updater=xd,t.stateNode=o,o._reactInternals=t,ym(t,r,e,n),t=wm(null,t,r,!0,a,n)):(t.tag=0,Pe&&a&&vg(t),dt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zu(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=cM(r),e=fn(r,e),o){case 0:t=vm(null,t,r,e,n);break e;case 1:t=v1(null,t,r,e,n);break e;case 11:t=y1(null,t,r,e,n);break e;case 14:t=b1(null,t,r,fn(r.type,e),n);break e}throw Error(q(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:fn(r,o),vm(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:fn(r,o),v1(e,t,r,o,n);case 3:e:{if(n3(t),e===null)throw Error(q(387));r=t.pendingProps,a=t.memoizedState,o=a.element,P5(e,t),Sc(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Ka(Error(q(423)),t),t=w1(e,t,r,n,o);break e}else if(r!==o){o=Ka(Error(q(424)),t),t=w1(e,t,r,n,o);break e}else for(It=Mr(t.stateNode.containerInfo.firstChild),Ot=t,Pe=!0,mn=null,n=_5(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ha(),r===o){t=fr(e,t,n);break e}dt(e,t,r,n)}t=t.child}return t;case 5:return A5(t),e===null&&mm(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,um(r,o)?i=null:a!==null&&um(r,a)&&(t.flags|=32),t3(e,t),dt(e,t,i,n),t.child;case 6:return e===null&&mm(t),null;case 13:return r3(e,t,n);case 4:return _g(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):dt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:fn(r,o),y1(e,t,r,o,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,xe(wc,r._currentValue),r._currentValue=i,a!==null)if(wn(a.value,i)){if(a.children===o.children&&!Ct.current){t=fr(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){i=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=ir(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),hm(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(q(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),hm(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}dt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Pa(t,n),o=tn(o),r=r(o),t.flags|=1,dt(e,t,r,n),t.child;case 14:return r=t.type,o=fn(r,t.pendingProps),o=fn(r.type,o),b1(e,t,r,o,n);case 15:return J5(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:fn(r,o),zu(e,t),t.tag=1,kt(r)?(e=!0,yc(t)):e=!1,Pa(t,n),X5(t,r,o),ym(t,r,o,n),wm(null,t,r,!0,e,n);case 19:return o3(e,t,n);case 22:return e3(e,t,n)}throw Error(q(156,t.tag))};function w3(e,t){return Gx(e,t)}function uM(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(e,t,n,r){return new uM(e,t,n,r)}function jg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cM(e){if(typeof e=="function")return jg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sg)return 11;if(e===lg)return 14}return 2}function Nr(e,t){var n=e.alternate;return n===null?(n=Xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $u(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")jg(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case sa:return wo(n.children,o,a,t);case ig:i=8,o|=8;break;case Bp:return e=Xt(12,n,t,o|2),e.elementType=Bp,e.lanes=a,e;case jp:return e=Xt(13,n,t,o),e.elementType=jp,e.lanes=a,e;case Vp:return e=Xt(19,n,t,o),e.elementType=Vp,e.lanes=a,e;case Ax:return kd(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ex:i=10;break e;case Px:i=9;break e;case sg:i=11;break e;case lg:i=14;break e;case Fr:i=16,r=null;break e}throw Error(q(130,e==null?e:typeof e,""))}return t=Xt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function wo(e,t,n,r){return e=Xt(7,e,r,t),e.lanes=n,e}function kd(e,t,n,r){return e=Xt(22,e,r,t),e.elementType=Ax,e.lanes=n,e.stateNode={isHidden:!1},e}function Kf(e,t,n){return e=Xt(6,e,null,t),e.lanes=n,e}function Yf(e,t,n){return t=Xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dM(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pf(0),this.expirationTimes=Pf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pf(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Vg(e,t,n,r,o,a,i,s,l){return e=new dM(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Xt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tg(a),e}function fM(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ia,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function x3(e){if(!e)return Wr;e=e._reactInternals;e:{if($o(e)!==e||e.tag!==1)throw Error(q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(kt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(q(171))}if(e.tag===1){var n=e.type;if(kt(n))return x5(e,n,t)}return t}function S3(e,t,n,r,o,a,i,s,l){return e=Vg(n,r,!0,e,o,a,i,s,l),e.context=x3(null),n=e.current,r=mt(),o=Dr(n),a=ir(r,o),a.callback=t!=null?t:null,$r(n,a,o),e.current.lanes=o,sl(e,o,r),Ft(e,r),e}function Fd(e,t,n,r){var o=t.current,a=mt(),i=Dr(o);return n=x3(n),t.context===null?t.context=n:t.pendingContext=n,t=ir(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$r(o,t,i),e!==null&&(vn(e,o,i,a),Ru(e,o,i)),i}function Ac(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function A1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wg(e,t){A1(e,t),(e=e.alternate)&&A1(e,t)}function pM(){return null}var C3=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hg(e){this._internalRoot=e}Td.prototype.render=Hg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(q(409));Fd(e,t,null,null)};Td.prototype.unmount=Hg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Po(function(){Fd(null,e,null,null)}),t[cr]=null}};function Td(e){this._internalRoot=e}Td.prototype.unstable_scheduleHydration=function(e){if(e){var t=e5();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Er.length&&t!==0&&t<Er[n].priority;n++);Er.splice(n,0,e),n===0&&n5(e)}};function Ug(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function R1(){}function mM(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=Ac(i);a.call(u)}}var i=S3(t,r,e,0,null,!1,!1,"",R1);return e._reactRootContainer=i,e[cr]=i.current,Ms(e.nodeType===8?e.parentNode:e),Po(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Ac(l);s.call(u)}}var l=Vg(e,0,!1,null,null,!1,!1,"",R1);return e._reactRootContainer=l,e[cr]=l.current,Ms(e.nodeType===8?e.parentNode:e),Po(function(){Fd(t,l,n,r)}),l}function Ed(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var s=o;o=function(){var l=Ac(i);s.call(l)}}Fd(t,i,e,o)}else i=mM(n,t,e,o,r);return Ac(i)}Qx=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bi(t.pendingLanes);n!==0&&(dg(t,n|1),Ft(t,De()),(se&6)===0&&(Ya=De()+500,Kr()))}break;case 13:Po(function(){var r=dr(e,1);if(r!==null){var o=mt();vn(r,e,1,o)}}),Wg(e,1)}};fg=function(e){if(e.tag===13){var t=dr(e,134217728);if(t!==null){var n=mt();vn(t,e,134217728,n)}Wg(e,134217728)}};Jx=function(e){if(e.tag===13){var t=Dr(e),n=dr(e,t);if(n!==null){var r=mt();vn(n,e,t,r)}Wg(e,t)}};e5=function(){return he};t5=function(e,t){var n=he;try{return he=e,t()}finally{he=n}};Jp=function(e,t,n){switch(t){case"input":if(Up(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=bd(r);if(!o)throw Error(q(90));Ix(r),Up(r,o)}}}break;case"textarea":zx(e,n);break;case"select":t=n.value,t!=null&&Fa(e,!!n.multiple,t,!1)}};Bx=Dg;jx=Po;var hM={usingClientEntryPoint:!1,Events:[ul,da,bd,Dx,Nx,Dg]},Ei={findFiberByHostInstance:fo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gM={bundleType:Ei.bundleType,version:Ei.version,rendererPackageName:Ei.rendererPackageName,rendererConfig:Ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hx(e),e===null?null:e.stateNode},findFiberByHostInstance:Ei.findFiberByHostInstance||pM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{md=ou.inject(gM),Ln=ou}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hM;Bt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ug(t))throw Error(q(200));return fM(e,t,null,n)};Bt.createRoot=function(e,t){if(!Ug(e))throw Error(q(299));var n=!1,r="",o=C3;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Vg(e,1,!1,null,null,n,!1,r,o),e[cr]=t.current,Ms(e.nodeType===8?e.parentNode:e),new Hg(t)};Bt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=Hx(t),e=e===null?null:e.stateNode,e};Bt.flushSync=function(e){return Po(e)};Bt.hydrate=function(e,t,n){if(!_d(t))throw Error(q(200));return Ed(null,e,t,!0,n)};Bt.hydrateRoot=function(e,t,n){if(!Ug(e))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=C3;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=S3(t,null,e,1,n!=null?n:null,o,!1,a,i),e[cr]=t.current,Ms(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Td(t)};Bt.render=function(e,t,n){if(!_d(t))throw Error(q(200));return Ed(null,e,t,!1,n)};Bt.unmountComponentAtNode=function(e){if(!_d(e))throw Error(q(40));return e._reactRootContainer?(Po(function(){Ed(null,null,e,!1,function(){e._reactRootContainer=null,e[cr]=null})}),!0):!1};Bt.unstable_batchedUpdates=Dg;Bt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_d(n))throw Error(q(200));if(e==null||e._reactInternals===void 0)throw Error(q(38));return Ed(e,t,n,!1,r)};Bt.version="18.3.1-next-f1338f8080-20240426";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Bt})(pd);const[k3,yM]=nt({strict:!1,name:"PortalContext"}),Gg="chakra-portal",bM=".chakra-portal",vM=e=>x("div",{className:"chakra-portal-zIndex",style:{position:"absolute",zIndex:e.zIndex,top:0,left:0,right:0},children:e.children}),wM=e=>{const{appendToParentPortal:t,children:n}=e,[r,o]=y.exports.useState(null),a=y.exports.useRef(null),[,i]=y.exports.useState({});y.exports.useEffect(()=>i({}),[]);const s=yM(),l=ZE();Wu(()=>{if(!r)return;const c=r.ownerDocument,d=t&&s!=null?s:c.body;if(!d)return;a.current=c.createElement("div"),a.current.className=Gg,d.appendChild(a.current),i({});const f=a.current;return()=>{d.contains(f)&&d.removeChild(f)}},[r]);const u=l!=null&&l.zIndex?x(vM,{zIndex:l==null?void 0:l.zIndex,children:n}):n;return a.current?pd.exports.createPortal(x(k3,{value:a.current,children:u}),a.current):x("span",{ref:c=>{c&&o(c)}})},xM=e=>{const{children:t,containerRef:n,appendToParentPortal:r}=e,o=n.current,a=o!=null?o:typeof window<"u"?document.body:void 0,i=y.exports.useMemo(()=>{const l=o==null?void 0:o.ownerDocument.createElement("div");return l&&(l.className=Gg),l},[o]),[,s]=y.exports.useState({});return Wu(()=>s({}),[]),Wu(()=>{if(!(!i||!a))return a.appendChild(i),()=>{a.removeChild(i)}},[i,a]),a&&i?pd.exports.createPortal(x(k3,{value:r?i:null,children:t}),i):null};function dl(e){const t={appendToParentPortal:!0,...e},{containerRef:n,...r}=t;return n?x(xM,{containerRef:n,...r}):x(wM,{...r})}dl.className=Gg;dl.selector=bM;dl.displayName="Portal";const[SM,Xj]=nt({name:"ToastOptionsContext",strict:!1}),CM=e=>{const t=y.exports.useSyncExternalStore(rs.subscribe,rs.getState,rs.getState),{motionVariants:n,component:r=bx,portalProps:o,animatePresenceProps:a}=e,s=Object.keys(t).map(l=>{const u=t[l];return x("div",{role:"region","aria-live":"polite","aria-label":`Notifications-${l}`,id:`chakra-toast-manager-${l}`,style:Pq(l),children:x(dd,{...a,initial:!1,children:u.map(c=>x(r,{motionVariants:n,...c},c.id))})},l)});return x(dl,{...o,children:s})},kM=e=>function({children:n,theme:r=e,toastOptions:o,...a}){return N(QE,{theme:r,...a,children:[x(SM,{value:o==null?void 0:o.defaultOptions,children:n}),x(CM,{...o})]})},FM=kM(A_);function I1(e){return e.sort((t,n)=>{const r=t.compareDocumentPosition(n);if(r&Node.DOCUMENT_POSITION_FOLLOWING||r&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(r&Node.DOCUMENT_POSITION_PRECEDING||r&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(r&Node.DOCUMENT_POSITION_DISCONNECTED||r&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const TM=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function q1(e,t,n){let r=e+1;return n&&r>=t&&(r=0),r}function z1(e,t,n){let r=e-1;return n&&r<0&&(r=t),r}const Xf=typeof window<"u"?y.exports.useLayoutEffect:y.exports.useEffect,O1=e=>e;var _M=Object.defineProperty,EM=(e,t,n)=>t in e?_M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ze=(e,t,n)=>(EM(e,typeof t!="symbol"?t+"":t,n),n);class PM{constructor(){ze(this,"descendants",new Map),ze(this,"register",t=>{if(t!=null)return TM(t)?this.registerNode(t):n=>{this.registerNode(n,t)}}),ze(this,"unregister",t=>{this.descendants.delete(t);const n=I1(Array.from(this.descendants.keys()));this.assignIndex(n)}),ze(this,"destroy",()=>{this.descendants.clear()}),ze(this,"assignIndex",t=>{this.descendants.forEach(n=>{const r=t.indexOf(n.node);n.index=r,n.node.dataset.index=n.index.toString()})}),ze(this,"count",()=>this.descendants.size),ze(this,"enabledCount",()=>this.enabledValues().length),ze(this,"values",()=>Array.from(this.descendants.values()).sort((n,r)=>n.index-r.index)),ze(this,"enabledValues",()=>this.values().filter(t=>!t.disabled)),ze(this,"item",t=>{if(this.count()!==0)return this.values()[t]}),ze(this,"enabledItem",t=>{if(this.enabledCount()!==0)return this.enabledValues()[t]}),ze(this,"first",()=>this.item(0)),ze(this,"firstEnabled",()=>this.enabledItem(0)),ze(this,"last",()=>this.item(this.descendants.size-1)),ze(this,"lastEnabled",()=>{const t=this.enabledValues().length-1;return this.enabledItem(t)}),ze(this,"indexOf",t=>{var n,r;return t&&(r=(n=this.descendants.get(t))==null?void 0:n.index)!=null?r:-1}),ze(this,"enabledIndexOf",t=>t==null?-1:this.enabledValues().findIndex(n=>n.node.isSameNode(t))),ze(this,"next",(t,n=!0)=>{const r=q1(t,this.count(),n);return this.item(r)}),ze(this,"nextEnabled",(t,n=!0)=>{const r=this.item(t);if(!r)return;const o=this.enabledIndexOf(r.node),a=q1(o,this.enabledCount(),n);return this.enabledItem(a)}),ze(this,"prev",(t,n=!0)=>{const r=z1(t,this.count()-1,n);return this.item(r)}),ze(this,"prevEnabled",(t,n=!0)=>{const r=this.item(t);if(!r)return;const o=this.enabledIndexOf(r.node),a=z1(o,this.enabledCount()-1,n);return this.enabledItem(a)}),ze(this,"registerNode",(t,n)=>{if(!t||this.descendants.has(t))return;const r=Array.from(this.descendants.keys()).concat(t),o=I1(r);n!=null&&n.disabled&&(n.disabled=!!n.disabled);const a={node:t,index:-1,...n};this.descendants.set(t,a),this.assignIndex(o)})}}function AM(){const[e,t]=nt({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});return[e,t,()=>{const o=y.exports.useRef(new PM);return Xf(()=>()=>o.current.destroy()),o.current},o=>{const a=t(),[i,s]=y.exports.useState(-1),l=y.exports.useRef(null);Xf(()=>()=>{!l.current||a.unregister(l.current)},[]),Xf(()=>{if(!l.current)return;const c=Number(l.current.dataset.index);i!=c&&!Number.isNaN(c)&&s(c)});const u=O1(o?a.register(o):a.register);return{descendants:a,index:i,enabledIndex:a.enabledIndexOf(l.current),register:en(u,l)}}]}const Im={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},Pi={scale:{enter:{scale:1},exit:{scale:.95}},fade:{enter:{opacity:1},exit:{opacity:0}},pushLeft:{enter:{x:"100%"},exit:{x:"-30%"}},pushRight:{enter:{x:"-100%"},exit:{x:"30%"}},pushUp:{enter:{y:"100%"},exit:{y:"-30%"}},pushDown:{enter:{y:"-100%"},exit:{y:"30%"}},slideLeft:{position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},slideRight:{position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},slideUp:{position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},slideDown:{position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}}};function qm(e){var n;switch((n=e==null?void 0:e.direction)!=null?n:"right"){case"right":return Pi.slideRight;case"left":return Pi.slideLeft;case"bottom":return Pi.slideDown;case"top":return Pi.slideUp;default:return Pi.slideRight}}const M1={enter:{duration:.2,ease:Im.easeOut},exit:{duration:.1,ease:Im.easeIn}},Rc={enter:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.enter}),exit:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.exit})};function RM(e){const{loading:t,src:n,srcSet:r,onLoad:o,onError:a,crossOrigin:i,sizes:s,ignoreFallback:l}=e,[u,c]=y.exports.useState("pending");y.exports.useEffect(()=>{c(n?"loading":"pending")},[n]);const d=y.exports.useRef(null),f=y.exports.useCallback(()=>{if(!n)return;p();const v=new Image;v.src=n,i&&(v.crossOrigin=i),r&&(v.srcset=r),s&&(v.sizes=s),t&&(v.loading=t),v.onload=b=>{p(),c("loaded"),o==null||o(b)},v.onerror=b=>{p(),c("failed"),a==null||a(b)},d.current=v},[n,i,r,s,o,a,t]),p=()=>{d.current&&(d.current.onload=null,d.current.onerror=null,d.current=null)};return Wu(()=>{if(!l)return u==="loading"&&f(),()=>{p()}},[u,f,l]),l?"loaded":u}const IM=(e,t)=>e!=="loaded"&&t==="beforeLoadOrError"||e==="failed"&&t==="onError",Q=U("div");Q.displayName="Box";const[Zj,qM]=nt({strict:!1,name:"ButtonGroupContext"});function Vi(e){const{children:t,className:n,...r}=e,o=y.exports.isValidElement(t)?y.exports.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,a=ge("chakra-button__icon",n);return x(U.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...r,className:a,children:o})}Vi.displayName="ButtonIcon";function zm(e){const{label:t,placement:n,spacing:r="0.5rem",children:o=x(Jh,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:i,...s}=e,l=ge("chakra-button__spinner",a),u=n==="start"?"marginEnd":"marginStart",c=y.exports.useMemo(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[u]:t?r:0,fontSize:"1em",lineHeight:"normal",...i}),[i,t,u,r]);return x(U.div,{className:l,...s,__css:c,children:o})}zm.displayName="ButtonSpinner";function zM(e){const[t,n]=y.exports.useState(!e);return{ref:y.exports.useCallback(a=>{!a||n(a.tagName==="BUTTON")},[]),type:t?"button":void 0}}const ut=G((e,t)=>{const n=qM(),r=Hr("Button",{...n,...e}),{isDisabled:o=n==null?void 0:n.isDisabled,isLoading:a,isActive:i,children:s,leftIcon:l,rightIcon:u,loadingText:c,iconSpacing:d="0.5rem",type:f,spinner:p,spinnerPlacement:v="start",className:b,as:w,shouldWrapChildren:g,...m}=Dt(e),h=y.exports.useMemo(()=>{const F={...r==null?void 0:r._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...r,...!!n&&{_focus:F}}},[r,n]),{ref:S,type:k}=zM(w),E={rightIcon:u,leftIcon:l,iconSpacing:d,children:s,shouldWrapChildren:g};return N(U.button,{disabled:o||a,ref:g6(t,S),as:w,type:f!=null?f:k,"data-active":Gt(i),"data-loading":Gt(a),__css:h,className:ge("chakra-button",b),...m,children:[a&&v==="start"&&x(zm,{className:"chakra-button__spinner--start",label:c,placement:"start",spacing:d,children:p}),a?c||x(U.span,{opacity:0,children:x($1,{...E})}):x($1,{...E}),a&&v==="end"&&x(zm,{className:"chakra-button__spinner--end",label:c,placement:"end",spacing:d,children:p})]})});ut.displayName="Button";function $1(e){const{leftIcon:t,rightIcon:n,children:r,iconSpacing:o,shouldWrapChildren:a}=e;return a?N("span",{style:{display:"contents"},children:[t&&x(Vi,{marginEnd:o,children:t}),r,n&&x(Vi,{marginStart:o,children:n})]}):N(ko,{children:[t&&x(Vi,{marginEnd:o,children:t}),r,n&&x(Vi,{marginStart:o,children:n})]})}const F3=G((e,t)=>{const{icon:n,children:r,isRound:o,"aria-label":a,...i}=e,s=n||r,l=y.exports.isValidElement(s)?y.exports.cloneElement(s,{"aria-hidden":!0,focusable:!1}):null;return x(ut,{px:"0",py:"0",borderRadius:o?"full":void 0,ref:t,"aria-label":a,...i,children:l})});F3.displayName="IconButton";const[OM,MM]=nt({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[$M,T3]=nt({strict:!1,name:"FormControlContext"});function LM(e){const{id:t,isRequired:n,isInvalid:r,isDisabled:o,isReadOnly:a,...i}=e,s=y.exports.useId(),l=t||`field-${s}`,u=`${l}-label`,c=`${l}-feedback`,d=`${l}-helptext`,[f,p]=y.exports.useState(!1),[v,b]=y.exports.useState(!1),[w,g]=y.exports.useState(!1),m=y.exports.useCallback((F={},P=null)=>({id:d,...F,ref:en(P,I=>{!I||b(!0)})}),[d]),h=y.exports.useCallback((F={},P=null)=>({...F,ref:P,"data-focus":Gt(w),"data-disabled":Gt(o),"data-invalid":Gt(r),"data-readonly":Gt(a),id:F.id!==void 0?F.id:u,htmlFor:F.htmlFor!==void 0?F.htmlFor:l}),[l,o,w,r,a,u]),S=y.exports.useCallback((F={},P=null)=>({id:c,...F,ref:en(P,I=>{!I||p(!0)}),"aria-live":"polite"}),[c]),k=y.exports.useCallback((F={},P=null)=>({...F,...i,ref:P,role:"group","data-focus":Gt(w),"data-disabled":Gt(o),"data-invalid":Gt(r),"data-readonly":Gt(a)}),[i,o,w,r,a]),E=y.exports.useCallback((F={},P=null)=>({...F,ref:P,role:"presentation","aria-hidden":!0,children:F.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!a,isDisabled:!!o,isFocused:!!w,onFocus:()=>g(!0),onBlur:()=>g(!1),hasFeedbackText:f,setHasFeedbackText:p,hasHelpText:v,setHasHelpText:b,id:l,labelId:u,feedbackId:c,helpTextId:d,htmlProps:i,getHelpTextProps:m,getErrorMessageProps:S,getRootProps:k,getLabelProps:h,getRequiredIndicatorProps:E}}const DM=G(function(t,n){const r=Oo("Form",t),o=Dt(t),{getRootProps:a,htmlProps:i,...s}=LM(o),l=ge("chakra-form-control",t.className);return x($M,{value:s,children:x(OM,{value:r,children:x(U.div,{...a({},n),className:l,__css:r.container})})})});DM.displayName="FormControl";const NM=G(function(t,n){const r=T3(),o=MM(),a=ge("chakra-form__helper-text",t.className);return x(U.div,{...r==null?void 0:r.getHelpTextProps(t,n),__css:o.helperText,className:a})});NM.displayName="FormHelperText";function BM(e){const{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:o,...a}=jM(e);return{...a,disabled:t,readOnly:r,required:o,"aria-invalid":Vd(n),"aria-required":Vd(o),"aria-readonly":Vd(r)}}function jM(e){var v,b,w;const t=T3(),{id:n,disabled:r,readOnly:o,required:a,isRequired:i,isInvalid:s,isReadOnly:l,isDisabled:u,onFocus:c,onBlur:d,...f}=e,p=e["aria-describedby"]?[e["aria-describedby"]]:[];return(t==null?void 0:t.hasFeedbackText)&&(t==null?void 0:t.isInvalid)&&p.push(t.feedbackId),t!=null&&t.hasHelpText&&p.push(t.helpTextId),{...f,"aria-describedby":p.join(" ")||void 0,id:n!=null?n:t==null?void 0:t.id,isDisabled:(v=r!=null?r:u)!=null?v:t==null?void 0:t.isDisabled,isReadOnly:(b=o!=null?o:l)!=null?b:t==null?void 0:t.isReadOnly,isRequired:(w=a!=null?a:i)!=null?w:t==null?void 0:t.isRequired,isInvalid:s!=null?s:t==null?void 0:t.isInvalid,onFocus:qn(t==null?void 0:t.onFocus,c),onBlur:qn(t==null?void 0:t.onBlur,d)}}const Hs=G(function(t,n){const{className:r,centerContent:o,...a}=Dt(t),i=Hr("Container",t);return x(U.div,{ref:n,className:ge("chakra-container",r),...a,__css:{...i,...o&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});Hs.displayName="Container";const yn=G(function(t,n){const{direction:r,align:o,justify:a,wrap:i,basis:s,grow:l,shrink:u,...c}=t,d={display:"flex",flexDirection:r,alignItems:o,justifyContent:a,flexWrap:i,flexBasis:s,flexGrow:l,flexShrink:u};return x(U.div,{ref:n,__css:d,...c})});yn.displayName="Flex";function VM(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var Le={exports:{}},WM="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",HM=WM,UM=HM;function _3(){}function E3(){}E3.resetWarningCache=_3;var GM=function(){function e(r,o,a,i,s,l){if(l!==UM){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:E3,resetWarningCache:_3};return n.PropTypes=n,n};Le.exports=GM();var Om="data-focus-lock",P3="data-focus-lock-disabled",KM="data-no-focus-lock",YM="data-autofocus-inside",XM="data-no-autofocus";function Zf(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function ZM(e,t){var n=y.exports.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var QM=typeof window<"u"?y.exports.useLayoutEffect:y.exports.useEffect,L1=new WeakMap;function A3(e,t){var n=ZM(t||null,function(r){return e.forEach(function(o){return Zf(o,r)})});return QM(function(){var r=L1.get(n);if(r){var o=new Set(r),a=new Set(e),i=n.current;o.forEach(function(s){a.has(s)||Zf(s,null)}),a.forEach(function(s){o.has(s)||Zf(s,i)})}L1.set(n,e)},[e]),n}var Qf={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"};function R3(e){return e}function I3(e,t){t===void 0&&(t=R3);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var i=t(a,r);return n.push(i),function(){n=n.filter(function(s){return s!==i})}},assignSyncMedium:function(a){for(r=!0;n.length;){var i=n;n=[],i.forEach(a)}n={push:function(s){return a(s)},filter:function(){return n}}},assignMedium:function(a){r=!0;var i=[];if(n.length){var s=n;n=[],s.forEach(a),i=n}var l=function(){var c=i;i=[],c.forEach(a)},u=function(){return Promise.resolve().then(l)};u(),n={push:function(c){i.push(c),u()},filter:function(c){return i=i.filter(c),n}}}};return o}function Kg(e,t){return t===void 0&&(t=R3),I3(e,t)}function q3(e){e===void 0&&(e={});var t=I3(null);return t.options=Rn({async:!0,ssr:!1},e),t}var z3=function(e){var t=e.sideCar,n=gx(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return x(r,{...Rn({},n)})};z3.isSideCarExport=!0;function JM(e,t){return e.useMedium(t),z3}var O3=Kg({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),M3=Kg(),e$=Kg(),t$=q3({async:!0,ssr:typeof document<"u"}),n$=y.exports.createContext(void 0),r$=[],$3=y.exports.forwardRef(function(t,n){var r,o=y.exports.useState(),a=o[0],i=o[1],s=y.exports.useRef(),l=y.exports.useRef(!1),u=y.exports.useRef(null),c=y.exports.useState({}),d=c[1],f=t.children,p=t.disabled,v=p===void 0?!1:p,b=t.noFocusGuards,w=b===void 0?!1:b,g=t.persistentFocus,m=g===void 0?!1:g,h=t.crossFrame,S=h===void 0?!0:h,k=t.autoFocus,E=k===void 0?!0:k;t.allowTextSelection;var F=t.group,P=t.className,I=t.whiteList,R=t.hasPositiveIndices,M=t.shards,te=M===void 0?r$:M,K=t.as,Y=K===void 0?"div":K,J=t.lockProps,X=J===void 0?{}:J,O=t.sideCar,z=t.returnFocus,D=z===void 0?!1:z,W=t.focusOptions,ie=t.onActivation,le=t.onDeactivation,B=y.exports.useState({}),oe=B[0],ve=y.exports.useCallback(function(yt){var an=yt.captureFocusRestore;if(!u.current){var Sn,sn=(Sn=document)==null?void 0:Sn.activeElement;u.current=sn,sn!==document.body&&(u.current=an(sn))}s.current&&ie&&ie(s.current),l.current=!0,d()},[ie]),ue=y.exports.useCallback(function(){l.current=!1,le&&le(s.current),d()},[le]),Be=y.exports.useCallback(function(yt){var an=u.current;if(an){var Sn=(typeof an=="function"?an():an)||document.body,sn=typeof D=="function"?D(Sn):D;if(sn){var lt=typeof sn=="object"?sn:void 0;u.current=null,yt?Promise.resolve().then(function(){return Sn.focus(lt)}):Sn.focus(lt)}}},[D]),$e=y.exports.useCallback(function(yt){l.current&&O3.useMedium(yt)},[]),gr=M3.useMedium,Xr=y.exports.useCallback(function(yt){s.current!==yt&&(s.current=yt,i(yt))},[]),yr=Da((r={},r[P3]=v&&"disabled",r[Om]=F,r),X),Zr=w!==!0,No=Zr&&w!=="tail",ui=A3([n,Xr]),ci=y.exports.useMemo(function(){return{observed:s,shards:te,enabled:!v,active:l.current}},[v,l.current,te,a]);return ho.createElement(y.exports.Fragment,null,Zr&&[x("div",{"data-focus-guard":!0,tabIndex:v?-1:0,style:Qf},"guard-first"),R?x("div",{"data-focus-guard":!0,tabIndex:v?-1:1,style:Qf},"guard-nearest"):null],!v&&x(O,{id:oe,sideCar:t$,observed:a,disabled:v,persistentFocus:m,crossFrame:S,autoFocus:E,whiteList:I,shards:te,onActivation:ve,onDeactivation:ue,returnFocus:Be,focusOptions:W,noFocusGuards:w}),ho.createElement(Y,Da({ref:ui},yr,{className:P,onBlur:gr,onFocus:$e}),ho.createElement(n$.Provider,{value:ci},f)),No&&x("div",{"data-focus-guard":!0,tabIndex:v?-1:0,style:Qf}))});$3.propTypes={};const L3=$3;function Mm(e,t){return Mm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Mm(e,t)}function o$(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Mm(e,t)}function Us(e){return Us=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Us(e)}function a$(e,t){if(Us(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Us(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function i$(e){var t=a$(e,"string");return Us(t)=="symbol"?t:t+""}function s$(e,t,n){return(t=i$(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l$(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var a=[],i;function s(){i=e(a.map(function(u){return u.props})),t(i)}var l=function(u){o$(c,u);function c(){return u.apply(this,arguments)||this}c.peek=function(){return i};var d=c.prototype;return d.componentDidMount=function(){a.push(this),s()},d.componentDidUpdate=function(){s()},d.componentWillUnmount=function(){var p=a.indexOf(this);a.splice(p,1),s()},d.render=function(){return x(o,{...this.props})},c}(y.exports.PureComponent);return s$(l,"displayName","SideEffect("+n(o)+")"),l}}var Wn=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},Ao=function(e){return Array.isArray(e)?e:[e]},D3=function(e){return Array.isArray(e)?e[0]:e},u$=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},N3=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},B3=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},c$=function(e){return e.hasAttribute("inert")},d$=function(e,t){return!e||B3(e)||!u$(e)&&!c$(e)&&t(N3(e))},j3=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=d$(t,j3.bind(void 0,e));return e.set(t,r),r},f$=function(e,t){return e&&!B3(e)?h$(e)?t(N3(e)):!1:!0},V3=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=f$(t,V3.bind(void 0,e));return e.set(t,r),r},W3=function(e){return e.dataset},p$=function(e){return e.tagName==="BUTTON"},H3=function(e){return e.tagName==="INPUT"},U3=function(e){return H3(e)&&e.type==="radio"},m$=function(e){return!((H3(e)||p$(e))&&(e.type==="hidden"||e.disabled))},h$=function(e){var t=e.getAttribute(XM);return![!0,"true",""].includes(t)},Yg=function(e){var t;return Boolean(e&&((t=W3(e))===null||t===void 0?void 0:t.focusGuard))},$m=function(e){return!Yg(e)},g$=function(e){return Boolean(e)},y$=function(e,t){var n=Math.max(0,e.tabIndex),r=Math.max(0,t.tabIndex),o=n-r,a=e.index-t.index;if(o){if(!n)return 1;if(!r)return-1}return o||a},b$=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},Xg=function(e,t,n){return Wn(e).map(function(r,o){var a=b$(r);return{node:r,index:o,tabIndex:n&&a===-1?(r.dataset||{}).focusGuard?0:-1:a}}).filter(function(r){return!t||r.tabIndex>=0}).sort(y$)},v$=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],Zg=v$.join(","),w$="".concat(Zg,", [data-focus-guard]"),G3=function(e,t){return Wn((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?w$:Zg)?[r]:[],G3(r))},[])},x$=function(e,t){var n;return e instanceof HTMLIFrameElement&&((n=e.contentDocument)===null||n===void 0?void 0:n.body)?Xa([e.contentDocument.body],t):[e]},Xa=function(e,t){return e.reduce(function(n,r){var o,a=G3(r,t),i=(o=[]).concat.apply(o,a.map(function(s){return x$(s,t)}));return n.concat(i,r.parentNode?Wn(r.parentNode.querySelectorAll(Zg)).filter(function(s){return s===r}):[])},[])},S$=function(e){var t=e.querySelectorAll("[".concat(YM,"]"));return Wn(t).map(function(n){return Xa([n])}).reduce(function(n,r){return n.concat(r)},[])},Qg=function(e,t){return Wn(e).filter(function(n){return j3(t,n)}).filter(function(n){return m$(n)})},D1=function(e,t){return t===void 0&&(t=new Map),Wn(e).filter(function(n){return V3(t,n)})},Jg=function(e,t,n){return Xg(Qg(Xa(e,n),t),!0,n)},Gs=function(e,t){return Xg(Qg(Xa(e),t),!1)},C$=function(e,t){return Qg(S$(e),t)},xo=function(e,t){return e.shadowRoot?xo(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:Wn(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var o=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return o?xo(o,t):!1}return xo(n,t)})},k$=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(i,s){return!t.has(s)})},K3=function(e){return e.parentNode?K3(e.parentNode):e},e0=function(e){var t=Ao(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(Om);return n.push.apply(n,o?k$(Wn(K3(r).querySelectorAll("[".concat(Om,'="').concat(o,'"]:not([').concat(P3,'="disabled"])')))):[r]),n},[])},F$=function(e){try{return e()}catch{return}},Ks=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?Ks(t.shadowRoot):t instanceof HTMLIFrameElement&&F$(function(){return t.contentWindow.document})?Ks(t.contentWindow.document):t}},T$=function(e,t){return e===t},_$=function(e,t){return Boolean(Wn(e.querySelectorAll("iframe")).some(function(n){return T$(n,t)}))},Y3=function(e,t){return t===void 0&&(t=Ks(D3(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:e0(e).some(function(n){return xo(n,t)||_$(n,t)})},E$=function(e){e===void 0&&(e=document);var t=Ks(e);return t?Wn(e.querySelectorAll("[".concat(KM,"]"))).some(function(n){return xo(n,t)}):!1},P$=function(e,t){return t.filter(U3).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},t0=function(e,t){return U3(e)&&e.name?P$(e,t):e},A$=function(e){var t=new Set;return e.forEach(function(n){return t.add(t0(n,e))}),e.filter(function(n){return t.has(n)})},N1=function(e){return e[0]&&e.length>1?t0(e[0],e):e[0]},B1=function(e,t){return e.indexOf(t0(t,e))},Lm="NEW_FOCUS",R$=function(e,t,n,r,o){var a=e.length,i=e[0],s=e[a-1],l=Yg(r);if(!(r&&e.indexOf(r)>=0)){var u=r!==void 0?n.indexOf(r):-1,c=o?n.indexOf(o):u,d=o?e.indexOf(o):-1;if(u===-1)return d!==-1?d:Lm;if(d===-1)return Lm;var f=u-c,p=n.indexOf(i),v=n.indexOf(s),b=A$(n),w=r!==void 0?b.indexOf(r):-1,g=o?b.indexOf(o):w,m=b.filter(function(P){return P.tabIndex>=0}),h=r!==void 0?m.indexOf(r):-1,S=o?m.indexOf(o):h,k=h>=0&&S>=0?S-h:g-w;if(!f&&d>=0||t.length===0)return d;var E=B1(e,t[0]),F=B1(e,t[t.length-1]);if(u<=p&&l&&Math.abs(f)>1)return F;if(u>=v&&l&&Math.abs(f)>1)return E;if(f&&Math.abs(k)>1)return d;if(u<=p)return F;if(u>v)return E;if(f)return Math.abs(f)>1?d:(a+d+f)%a}},I$=function(e){return function(t){var n,r=(n=W3(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},j1=function(e,t,n){var r=e.map(function(a){var i=a.node;return i}),o=D1(r.filter(I$(n)));return o&&o.length?N1(o):N1(D1(t))},Dm=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&Dm(e.parentNode.host||e.parentNode,t),t},Jf=function(e,t){for(var n=Dm(e),r=Dm(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},X3=function(e,t,n){var r=Ao(e),o=Ao(t),a=r[0],i=!1;return o.filter(Boolean).forEach(function(s){i=Jf(i||s,s)||i,n.filter(Boolean).forEach(function(l){var u=Jf(a,l);u&&(!i||xo(u,i)?i=u:i=Jf(u,i))})}),i},V1=function(e,t){return e.reduce(function(n,r){return n.concat(C$(r,t))},[])},q$=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(g$)},z$=function(e,t){var n=Ks(Ao(e).length>0?document:D3(e).ownerDocument),r=e0(e).filter($m),o=X3(n||e,e,r),a=new Map,i=Gs(r,a),s=i.filter(function(v){var b=v.node;return $m(b)});if(!!s[0]){var l=Gs([o],a).map(function(v){var b=v.node;return b}),u=q$(l,s),c=u.map(function(v){var b=v.node;return b}),d=u.filter(function(v){var b=v.tabIndex;return b>=0}).map(function(v){var b=v.node;return b}),f=R$(c,d,l,n,t);if(f===Lm){var p=j1(i,d,V1(r,a))||j1(i,c,V1(r,a));if(p)return{node:p};console.warn("focus-lock: cannot find any node to move focus into");return}return f===void 0?f:u[f]}},O$=function(e){var t=e0(e).filter($m),n=X3(e,e,t),r=Xg(Xa([n],!0),!0,!0),o=Xa(t,!1);return r.map(function(a){var i=a.node,s=a.index;return{node:i,index:s,lockItem:o.indexOf(i)>=0,guard:Yg(i)}})},n0=function(e,t){!e||("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},ep=0,tp=!1,Z3=function(e,t,n){n===void 0&&(n={});var r=z$(e,t);if(!tp&&r){if(ep>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),tp=!0,setTimeout(function(){tp=!1},1);return}ep++,n0(r.node,n.focusOptions),ep--}};function Ai(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var t=e?new WeakRef(e):null;return function(){return(t==null?void 0:t.deref())||null}}var M$=function(e){if(!e)return null;for(var t=[],n=e;n&&n!==document.body;)t.push({current:Ai(n),parent:Ai(n.parentElement),left:Ai(n.previousElementSibling),right:Ai(n.nextElementSibling)}),n=n.parentElement;return{element:Ai(e),stack:t,ownerDocument:e.ownerDocument}},$$=function(e){var t,n,r,o,a;if(!!e)for(var i=e.stack,s=e.ownerDocument,l=new Map,u=0,c=i;u<c.length;u++){var d=c[u],f=(t=d.parent)===null||t===void 0?void 0:t.call(d);if(f&&s.contains(f)){for(var p=(n=d.left)===null||n===void 0?void 0:n.call(d),v=d.current(),b=f.contains(v)?v:void 0,w=(r=d.right)===null||r===void 0?void 0:r.call(d),g=Jg([f],l),m=(a=(o=b!=null?b:p==null?void 0:p.nextElementSibling)!==null&&o!==void 0?o:w)!==null&&a!==void 0?a:p;m;){for(var h=0,S=g;h<S.length;h++){var k=S[h];if(m!=null&&m.contains(k.node))return k.node}m=m.nextElementSibling}if(g.length)return g[0].node}}},Q3=function(e){var t=M$(e);return function(){return $$(t)}},L$=function(e,t,n){if(!e||!t)return console.error("no element or scope given"),{};var r=Ao(t);if(r.every(function(i){return!xo(i,e)}))return console.error("Active element is not contained in the scope"),{};var o=n?Jg(r,new Map):Gs(r,new Map),a=o.findIndex(function(i){var s=i.node;return s===e});if(a!==-1)return{prev:o[a-1],next:o[a+1],first:o[0],last:o[o.length-1]}},D$=function(e,t){var n=t?Jg(Ao(e),new Map):Gs(Ao(e),new Map);return{first:n[0],last:n[n.length-1]}},N$=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},J3=function(e,t,n){t===void 0&&(t={});var r=N$(t),o=L$(e,r.scope,r.onlyTabbable);if(!!o){var a=n(o,r.cycle);a&&n0(a.node,r.focusOptions)}},B$=function(e,t){t===void 0&&(t={}),J3(e,t,function(n,r){var o=n.next,a=n.first;return o||r&&a})},j$=function(e,t){t===void 0&&(t={}),J3(e,t,function(n,r){var o=n.prev,a=n.last;return o||r&&a})},eS=function(e,t,n){var r,o=D$(e,(r=t.onlyTabbable)!==null&&r!==void 0?r:!0),a=o[n];a&&n0(a.node,t.focusOptions)},V$=function(e,t){t===void 0&&(t={}),eS(e,t,"first")},W$=function(e,t){t===void 0&&(t={}),eS(e,t,"last")};function r0(e){setTimeout(e,1)}var H$=function(t){return t&&"current"in t?t.current:t},tS=function(){return document&&document.activeElement===document.body},U$=function(){return tS()||E$()},Ra=null,bt=null,W1=function(){return null},Ia=null,Ys=!1,o0=!1,G$=function(){return!0},K$=function(t){return(Ra.whiteList||G$)(t)},Y$=function(t,n){Ia={observerNode:t,portaledElement:n}},X$=function(t){return Ia&&Ia.portaledElement===t};function H1(e,t,n,r){var o=null,a=e;do{var i=r[a];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var Z$=function(t){return t?Boolean(Ys):Ys==="meanwhile"},Q$=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},J$=function(t,n){return n.some(function(r){return Q$(t,r,r)})},nS=function(t){return Gs(t,new Map)},eL=function(t){return!nS([t.parentNode]).some(function(n){return n.node===t})},Ic=function(){var t=!1;if(Ra){var n=Ra,r=n.observed,o=n.persistentFocus,a=n.autoFocus,i=n.shards,s=n.crossFrame,l=n.focusOptions,u=n.noFocusGuards,c=r||Ia&&Ia.portaledElement;if(tS()&&bt&&bt!==document.body&&(!document.body.contains(bt)||eL(bt))){var d=W1();d&&d.focus()}var f=document&&document.activeElement;if(c){var p=[c].concat(i.map(H$).filter(Boolean)),v=function(){if(!Z$(s)||!u||!bt||o0)return!1;var h=nS(p),S=h.findIndex(function(k){var E=k.node;return E===bt});return S===0||S===h.length-1};if((!f||K$(f))&&(o||v()||!U$()||!bt&&a)&&(c&&!(Y3(p)||f&&J$(f,p)||X$(f))&&(document&&!bt&&f&&!a?(f.blur&&f.blur(),document.body.focus()):(t=Z3(p,bt,{focusOptions:l}),Ia={})),bt=document&&document.activeElement,bt!==document.body&&(W1=Q3(bt)),Ys=!1),document&&f!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var b=document&&document.activeElement,w=O$(p),g=w.map(function(m){var h=m.node;return h}).indexOf(b);g>-1&&(w.filter(function(m){var h=m.guard,S=m.node;return h&&S.dataset.focusAutoGuard}).forEach(function(m){var h=m.node;return h.removeAttribute("tabIndex")}),H1(g,w.length,1,w),H1(g,-1,-1,w))}}}return t},rS=function(t){Ic()&&t&&(t.stopPropagation(),t.preventDefault())},a0=function(){return r0(Ic)},tL=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||Y$(r,n)},nL=function(){return null},oS=function(){o0=!0},aS=function(){o0=!1,Ys="just",r0(function(){Ys="meanwhile"})},rL=function(){document.addEventListener("focusin",rS),document.addEventListener("focusout",a0),window.addEventListener("focus",oS),window.addEventListener("blur",aS)},oL=function(){document.removeEventListener("focusin",rS),document.removeEventListener("focusout",a0),window.removeEventListener("focus",oS),window.removeEventListener("blur",aS)};function aL(e){return e.filter(function(t){var n=t.disabled;return!n})}var iS={moveFocusInside:Z3,focusInside:Y3,focusNextElement:B$,focusPrevElement:j$,focusFirstElement:V$,focusLastElement:W$,captureFocusRestore:Q3};function iL(e){var t=e.slice(-1)[0];t&&!Ra&&rL();var n=Ra,r=n&&t&&t.id===n.id;Ra=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var a=o.id;return a===n.id}).length||n.returnFocus(!t)),t?(bt=null,(!r||n.observed!==t.observed)&&t.onActivation(iS),Ic(),r0(Ic)):(oL(),bt=null)}O3.assignSyncMedium(tL);M3.assignMedium(a0);e$.assignMedium(function(e){return e(iS)});const sL=l$(aL,iL)(nL);var sS=y.exports.forwardRef(function(t,n){return x(L3,{sideCar:sL,ref:n,...t})}),lS=L3.propTypes||{};lS.sideCar;VM(lS,["sideCar"]);sS.propTypes={};const U1=sS;var Nv;const lL=(Nv=U1.default)!=null?Nv:U1,uS=e=>{const{initialFocusRef:t,finalFocusRef:n,contentRef:r,restoreFocus:o,children:a,isDisabled:i,autoFocus:s,persistentFocus:l,lockFocusAcrossFrames:u}=e,c=y.exports.useCallback(()=>{t!=null&&t.current?t.current.focus():r!=null&&r.current&&t6(r.current).length===0&&requestAnimationFrame(()=>{var v;(v=r.current)==null||v.focus()})},[t,r]),d=y.exports.useCallback(()=>{var p;(p=n==null?void 0:n.current)==null||p.focus()},[n]);return x(lL,{crossFrame:u,persistentFocus:l,autoFocus:s,disabled:i,onActivation:c,onDeactivation:d,returnFocus:o&&!n,children:a})};uS.displayName="FocusLock";const cS=G(function(t,n){const{templateAreas:r,gap:o,rowGap:a,columnGap:i,column:s,row:l,autoFlow:u,autoRows:c,templateRows:d,autoColumns:f,templateColumns:p,...v}=t,b={display:"grid",gridTemplateAreas:r,gridGap:o,gridRowGap:a,gridColumnGap:i,gridAutoColumns:f,gridColumn:s,gridRow:l,gridAutoFlow:u,gridAutoRows:c,gridTemplateRows:d,gridTemplateColumns:p};return x(U.div,{ref:n,__css:b,...v})});cS.displayName="Grid";const dS=G(function(t,n){const{columns:r,spacingX:o,spacingY:a,spacing:i,minChildWidth:s,...l}=t,u=fd(),c=s?cL(s,u):dL(r);return x(cS,{ref:n,gap:i,columnGap:o,rowGap:a,templateColumns:c,...l})});dS.displayName="SimpleGrid";function uL(e){return typeof e=="number"?`${e}px`:e}function cL(e,t){return rh(e,n=>{const r=Jq("sizes",n,uL(n))(t);return n===null?null:`repeat(auto-fit, minmax(${r}, 1fr))`})}function dL(e){return rh(e,t=>t===null?null:`repeat(${t}, minmax(0, 1fr))`)}function fS(e){const{viewBox:t="0 0 24 24",d:n,displayName:r,defaultProps:o={}}=e,a=y.exports.Children.toArray(e.path),i=G((s,l)=>x(Vn,{ref:l,viewBox:t,...o,...s,children:a.length?a:x("path",{fill:"currentColor",d:n})}));return i.displayName=r,i}const Nm=G(function(t,n){const{htmlWidth:r,htmlHeight:o,alt:a,...i}=t;return x("img",{width:r,height:o,ref:n,alt:a,...i})});Nm.displayName="NativeImage";const fl=G(function(t,n){const{fallbackSrc:r,fallback:o,src:a,srcSet:i,align:s,fit:l,loading:u,ignoreFallback:c,crossOrigin:d,fallbackStrategy:f="beforeLoadOrError",referrerPolicy:p,...v}=t,b=r!==void 0||o!==void 0,w=u!=null||c||!b,g=RM({...t,crossOrigin:d,ignoreFallback:w}),m=IM(g,f),h={ref:n,objectFit:l,objectPosition:s,...w?v:rw(v,["onError","onLoad"])};return m?o||x(U.img,{as:Nm,className:"chakra-image__placeholder",src:r,...h}):x(U.img,{as:Nm,src:a,srcSet:i,crossOrigin:d,loading:u,referrerPolicy:p,className:"chakra-image",...h})});fl.displayName="Image";const qc=G(function(t,n){const{htmlSize:r,...o}=t,a=Oo("Input",o),i=Dt(o),s=BM(i),l=ge("chakra-input",t.className);return x(U.input,{size:r,...s,__css:a.field,ref:n,className:l})});qc.displayName="Input";qc.id="Input";const dn=G(function(t,n){const r=Hr("Link",t),{className:o,isExternal:a,...i}=Dt(t);return x(U.a,{target:a?"_blank":void 0,rel:a?"noopener":void 0,ref:n,className:ge("chakra-link",o),...i,__css:r})});dn.displayName="Link";const[fL,pS]=nt({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),i0=G(function(t,n){const r=Oo("List",t),{children:o,styleType:a="none",stylePosition:i,spacing:s,...l}=Dt(t),u=Qv(o),d=s?{["& > *:not(style) ~ *:not(style)"]:{mt:s}}:{};return x(fL,{value:r,children:x(U.ul,{ref:n,listStyleType:a,listStylePosition:i,role:"list",__css:{...r.container,...d},...l,children:u})})});i0.displayName="List";const pL=G((e,t)=>{const{as:n,...r}=e;return x(i0,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...r})});pL.displayName="OrderedList";const mS=G(function(t,n){const{as:r,...o}=t;return x(i0,{ref:n,as:"ul",styleType:"initial",marginStart:"1em",...o})});mS.displayName="UnorderedList";const hS=G(function(t,n){const r=pS();return x(U.li,{ref:n,...t,__css:r.item})});hS.displayName="ListItem";const mL=G(function(t,n){const r=pS();return x(Vn,{ref:n,role:"presentation",...t,__css:r.icon})});mL.displayName="ListIcon";function hL(e,t,n,r){if(t==null)return r;if(!r)return e.find(i=>n(i).toLowerCase().startsWith(t.toLowerCase()));const o=e.filter(a=>n(a).toLowerCase().startsWith(t.toLowerCase()));if(o.length>0){let a;return o.includes(r)?(a=o.indexOf(r)+1,a===o.length&&(a=0),o[a]):(a=e.indexOf(o[0]),e[a])}return r}function gL(e){const{key:t}=e;return t.length===1||t.length>1&&/[^a-zA-Z0-9]/.test(t)}function yL(e={}){const{timeout:t=300,preventDefault:n=()=>!0}=e,[r,o]=y.exports.useState([]),a=y.exports.useRef(void 0),i=()=>{a.current&&(clearTimeout(a.current),a.current=null)},s=()=>{i(),a.current=setTimeout(()=>{o([]),a.current=null},t)};y.exports.useEffect(()=>i,[]);function l(u){return c=>{if(c.key==="Backspace"){const d=[...r];d.pop(),o(d);return}if(gL(c)){const d=r.concat(c.key);n(c)&&(c.preventDefault(),c.stopPropagation()),o(d),u(d.join("")),s()}}}return l}var Tt="top",rn="bottom",on="right",_t="left",s0="auto",pl=[Tt,rn,on,_t],Za="start",Xs="end",bL="clippingParents",gS="viewport",Ri="popper",vL="reference",G1=pl.reduce(function(e,t){return e.concat([t+"-"+Za,t+"-"+Xs])},[]),yS=[].concat(pl,[s0]).reduce(function(e,t){return e.concat([t,t+"-"+Za,t+"-"+Xs])},[]),wL="beforeRead",xL="read",SL="afterRead",CL="beforeMain",kL="main",FL="afterMain",TL="beforeWrite",_L="write",EL="afterWrite",PL=[wL,xL,SL,CL,kL,FL,TL,_L,EL];function jn(e){return e?(e.nodeName||"").toLowerCase():null}function Lt(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Ro(e){var t=Lt(e).Element;return e instanceof t||e instanceof Element}function Jt(e){var t=Lt(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function l0(e){if(typeof ShadowRoot>"u")return!1;var t=Lt(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function AL(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},o=t.attributes[n]||{},a=t.elements[n];!Jt(a)||!jn(a)||(Object.assign(a.style,r),Object.keys(o).forEach(function(i){var s=o[i];s===!1?a.removeAttribute(i):a.setAttribute(i,s===!0?"":s)}))})}function RL(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var o=t.elements[r],a=t.attributes[r]||{},i=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),s=i.reduce(function(l,u){return l[u]="",l},{});!Jt(o)||!jn(o)||(Object.assign(o.style,s),Object.keys(a).forEach(function(l){o.removeAttribute(l)}))})}}const IL={name:"applyStyles",enabled:!0,phase:"write",fn:AL,effect:RL,requires:["computeStyles"]};function Nn(e){return e.split("-")[0]}var So=Math.max,zc=Math.min,Qa=Math.round;function Bm(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function bS(){return!/^((?!chrome|android).)*safari/i.test(Bm())}function Ja(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),o=1,a=1;t&&Jt(e)&&(o=e.offsetWidth>0&&Qa(r.width)/e.offsetWidth||1,a=e.offsetHeight>0&&Qa(r.height)/e.offsetHeight||1);var i=Ro(e)?Lt(e):window,s=i.visualViewport,l=!bS()&&n,u=(r.left+(l&&s?s.offsetLeft:0))/o,c=(r.top+(l&&s?s.offsetTop:0))/a,d=r.width/o,f=r.height/a;return{width:d,height:f,top:c,right:u+d,bottom:c+f,left:u,x:u,y:c}}function u0(e){var t=Ja(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function vS(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&l0(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function pr(e){return Lt(e).getComputedStyle(e)}function qL(e){return["table","td","th"].indexOf(jn(e))>=0}function Yr(e){return((Ro(e)?e.ownerDocument:e.document)||window.document).documentElement}function Pd(e){return jn(e)==="html"?e:e.assignedSlot||e.parentNode||(l0(e)?e.host:null)||Yr(e)}function K1(e){return!Jt(e)||pr(e).position==="fixed"?null:e.offsetParent}function zL(e){var t=/firefox/i.test(Bm()),n=/Trident/i.test(Bm());if(n&&Jt(e)){var r=pr(e);if(r.position==="fixed")return null}var o=Pd(e);for(l0(o)&&(o=o.host);Jt(o)&&["html","body"].indexOf(jn(o))<0;){var a=pr(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function ml(e){for(var t=Lt(e),n=K1(e);n&&qL(n)&&pr(n).position==="static";)n=K1(n);return n&&(jn(n)==="html"||jn(n)==="body"&&pr(n).position==="static")?t:n||zL(e)||t}function c0(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ps(e,t,n){return So(e,zc(t,n))}function OL(e,t,n){var r=ps(e,t,n);return r>n?n:r}function wS(){return{top:0,right:0,bottom:0,left:0}}function xS(e){return Object.assign({},wS(),e)}function SS(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var ML=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,xS(typeof t!="number"?t:SS(t,pl))};function $L(e){var t,n=e.state,r=e.name,o=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,s=Nn(n.placement),l=c0(s),u=[_t,on].indexOf(s)>=0,c=u?"height":"width";if(!(!a||!i)){var d=ML(o.padding,n),f=u0(a),p=l==="y"?Tt:_t,v=l==="y"?rn:on,b=n.rects.reference[c]+n.rects.reference[l]-i[l]-n.rects.popper[c],w=i[l]-n.rects.reference[l],g=ml(a),m=g?l==="y"?g.clientHeight||0:g.clientWidth||0:0,h=b/2-w/2,S=d[p],k=m-f[c]-d[v],E=m/2-f[c]/2+h,F=ps(S,E,k),P=l;n.modifiersData[r]=(t={},t[P]=F,t.centerOffset=F-E,t)}}function LL(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||!vS(t.elements.popper,o)||(t.elements.arrow=o))}const DL={name:"arrow",enabled:!0,phase:"main",fn:$L,effect:LL,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ei(e){return e.split("-")[1]}var NL={top:"auto",right:"auto",bottom:"auto",left:"auto"};function BL(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:Qa(n*o)/o||0,y:Qa(r*o)/o||0}}function Y1(e){var t,n=e.popper,r=e.popperRect,o=e.placement,a=e.variation,i=e.offsets,s=e.position,l=e.gpuAcceleration,u=e.adaptive,c=e.roundOffsets,d=e.isFixed,f=i.x,p=f===void 0?0:f,v=i.y,b=v===void 0?0:v,w=typeof c=="function"?c({x:p,y:b}):{x:p,y:b};p=w.x,b=w.y;var g=i.hasOwnProperty("x"),m=i.hasOwnProperty("y"),h=_t,S=Tt,k=window;if(u){var E=ml(n),F="clientHeight",P="clientWidth";if(E===Lt(n)&&(E=Yr(n),pr(E).position!=="static"&&s==="absolute"&&(F="scrollHeight",P="scrollWidth")),E=E,o===Tt||(o===_t||o===on)&&a===Xs){S=rn;var I=d&&E===k&&k.visualViewport?k.visualViewport.height:E[F];b-=I-r.height,b*=l?1:-1}if(o===_t||(o===Tt||o===rn)&&a===Xs){h=on;var R=d&&E===k&&k.visualViewport?k.visualViewport.width:E[P];p-=R-r.width,p*=l?1:-1}}var M=Object.assign({position:s},u&&NL),te=c===!0?BL({x:p,y:b},Lt(n)):{x:p,y:b};if(p=te.x,b=te.y,l){var K;return Object.assign({},M,(K={},K[S]=m?"0":"",K[h]=g?"0":"",K.transform=(k.devicePixelRatio||1)<=1?"translate("+p+"px, "+b+"px)":"translate3d("+p+"px, "+b+"px, 0)",K))}return Object.assign({},M,(t={},t[S]=m?b+"px":"",t[h]=g?p+"px":"",t.transform="",t))}function jL(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,a=n.adaptive,i=a===void 0?!0:a,s=n.roundOffsets,l=s===void 0?!0:s,u={placement:Nn(t.placement),variation:ei(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Y1(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Y1(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const VL={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:jL,data:{}};var au={passive:!0};function WL(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,a=o===void 0?!0:o,i=r.resize,s=i===void 0?!0:i,l=Lt(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach(function(c){c.addEventListener("scroll",n.update,au)}),s&&l.addEventListener("resize",n.update,au),function(){a&&u.forEach(function(c){c.removeEventListener("scroll",n.update,au)}),s&&l.removeEventListener("resize",n.update,au)}}const HL={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:WL,data:{}};var UL={left:"right",right:"left",bottom:"top",top:"bottom"};function Lu(e){return e.replace(/left|right|bottom|top/g,function(t){return UL[t]})}var GL={start:"end",end:"start"};function X1(e){return e.replace(/start|end/g,function(t){return GL[t]})}function d0(e){var t=Lt(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function f0(e){return Ja(Yr(e)).left+d0(e).scrollLeft}function KL(e,t){var n=Lt(e),r=Yr(e),o=n.visualViewport,a=r.clientWidth,i=r.clientHeight,s=0,l=0;if(o){a=o.width,i=o.height;var u=bS();(u||!u&&t==="fixed")&&(s=o.offsetLeft,l=o.offsetTop)}return{width:a,height:i,x:s+f0(e),y:l}}function YL(e){var t,n=Yr(e),r=d0(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=So(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=So(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+f0(e),l=-r.scrollTop;return pr(o||n).direction==="rtl"&&(s+=So(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:i,x:s,y:l}}function p0(e){var t=pr(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function CS(e){return["html","body","#document"].indexOf(jn(e))>=0?e.ownerDocument.body:Jt(e)&&p0(e)?e:CS(Pd(e))}function ms(e,t){var n;t===void 0&&(t=[]);var r=CS(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),a=Lt(r),i=o?[a].concat(a.visualViewport||[],p0(r)?r:[]):r,s=t.concat(i);return o?s:s.concat(ms(Pd(i)))}function jm(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function XL(e,t){var n=Ja(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Z1(e,t,n){return t===gS?jm(KL(e,n)):Ro(t)?XL(t,n):jm(YL(Yr(e)))}function ZL(e){var t=ms(Pd(e)),n=["absolute","fixed"].indexOf(pr(e).position)>=0,r=n&&Jt(e)?ml(e):e;return Ro(r)?t.filter(function(o){return Ro(o)&&vS(o,r)&&jn(o)!=="body"}):[]}function QL(e,t,n,r){var o=t==="clippingParents"?ZL(e):[].concat(t),a=[].concat(o,[n]),i=a[0],s=a.reduce(function(l,u){var c=Z1(e,u,r);return l.top=So(c.top,l.top),l.right=zc(c.right,l.right),l.bottom=zc(c.bottom,l.bottom),l.left=So(c.left,l.left),l},Z1(e,i,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function kS(e){var t=e.reference,n=e.element,r=e.placement,o=r?Nn(r):null,a=r?ei(r):null,i=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,l;switch(o){case Tt:l={x:i,y:t.y-n.height};break;case rn:l={x:i,y:t.y+t.height};break;case on:l={x:t.x+t.width,y:s};break;case _t:l={x:t.x-n.width,y:s};break;default:l={x:t.x,y:t.y}}var u=o?c0(o):null;if(u!=null){var c=u==="y"?"height":"width";switch(a){case Za:l[u]=l[u]-(t[c]/2-n[c]/2);break;case Xs:l[u]=l[u]+(t[c]/2-n[c]/2);break}}return l}function Zs(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,a=n.strategy,i=a===void 0?e.strategy:a,s=n.boundary,l=s===void 0?bL:s,u=n.rootBoundary,c=u===void 0?gS:u,d=n.elementContext,f=d===void 0?Ri:d,p=n.altBoundary,v=p===void 0?!1:p,b=n.padding,w=b===void 0?0:b,g=xS(typeof w!="number"?w:SS(w,pl)),m=f===Ri?vL:Ri,h=e.rects.popper,S=e.elements[v?m:f],k=QL(Ro(S)?S:S.contextElement||Yr(e.elements.popper),l,c,i),E=Ja(e.elements.reference),F=kS({reference:E,element:h,strategy:"absolute",placement:o}),P=jm(Object.assign({},h,F)),I=f===Ri?P:E,R={top:k.top-I.top+g.top,bottom:I.bottom-k.bottom+g.bottom,left:k.left-I.left+g.left,right:I.right-k.right+g.right},M=e.modifiersData.offset;if(f===Ri&&M){var te=M[o];Object.keys(R).forEach(function(K){var Y=[on,rn].indexOf(K)>=0?1:-1,J=[Tt,rn].indexOf(K)>=0?"y":"x";R[K]+=te[J]*Y})}return R}function JL(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,i=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,u=l===void 0?yS:l,c=ei(r),d=c?s?G1:G1.filter(function(v){return ei(v)===c}):pl,f=d.filter(function(v){return u.indexOf(v)>=0});f.length===0&&(f=d);var p=f.reduce(function(v,b){return v[b]=Zs(e,{placement:b,boundary:o,rootBoundary:a,padding:i})[Nn(b)],v},{});return Object.keys(p).sort(function(v,b){return p[v]-p[b]})}function eD(e){if(Nn(e)===s0)return[];var t=Lu(e);return[X1(e),t,X1(t)]}function tD(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,a=o===void 0?!0:o,i=n.altAxis,s=i===void 0?!0:i,l=n.fallbackPlacements,u=n.padding,c=n.boundary,d=n.rootBoundary,f=n.altBoundary,p=n.flipVariations,v=p===void 0?!0:p,b=n.allowedAutoPlacements,w=t.options.placement,g=Nn(w),m=g===w,h=l||(m||!v?[Lu(w)]:eD(w)),S=[w].concat(h).reduce(function(oe,ve){return oe.concat(Nn(ve)===s0?JL(t,{placement:ve,boundary:c,rootBoundary:d,padding:u,flipVariations:v,allowedAutoPlacements:b}):ve)},[]),k=t.rects.reference,E=t.rects.popper,F=new Map,P=!0,I=S[0],R=0;R<S.length;R++){var M=S[R],te=Nn(M),K=ei(M)===Za,Y=[Tt,rn].indexOf(te)>=0,J=Y?"width":"height",X=Zs(t,{placement:M,boundary:c,rootBoundary:d,altBoundary:f,padding:u}),O=Y?K?on:_t:K?rn:Tt;k[J]>E[J]&&(O=Lu(O));var z=Lu(O),D=[];if(a&&D.push(X[te]<=0),s&&D.push(X[O]<=0,X[z]<=0),D.every(function(oe){return oe})){I=M,P=!1;break}F.set(M,D)}if(P)for(var W=v?3:1,ie=function(ve){var ue=S.find(function(Be){var $e=F.get(Be);if($e)return $e.slice(0,ve).every(function(gr){return gr})});if(ue)return I=ue,"break"},le=W;le>0;le--){var B=ie(le);if(B==="break")break}t.placement!==I&&(t.modifiersData[r]._skip=!0,t.placement=I,t.reset=!0)}}const nD={name:"flip",enabled:!0,phase:"main",fn:tD,requiresIfExists:["offset"],data:{_skip:!1}};function Q1(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function J1(e){return[Tt,on,rn,_t].some(function(t){return e[t]>=0})}function rD(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,i=Zs(t,{elementContext:"reference"}),s=Zs(t,{altBoundary:!0}),l=Q1(i,r),u=Q1(s,o,a),c=J1(l),d=J1(u);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":d})}const oD={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:rD};function aD(e,t,n){var r=Nn(e),o=[_t,Tt].indexOf(r)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,i=a[0],s=a[1];return i=i||0,s=(s||0)*o,[_t,on].indexOf(r)>=0?{x:s,y:i}:{x:i,y:s}}function iD(e){var t=e.state,n=e.options,r=e.name,o=n.offset,a=o===void 0?[0,0]:o,i=yS.reduce(function(c,d){return c[d]=aD(d,t.rects,a),c},{}),s=i[t.placement],l=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=i}const sD={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:iD};function lD(e){var t=e.state,n=e.name;t.modifiersData[n]=kS({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const uD={name:"popperOffsets",enabled:!0,phase:"read",fn:lD,data:{}};function cD(e){return e==="x"?"y":"x"}function dD(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,a=o===void 0?!0:o,i=n.altAxis,s=i===void 0?!1:i,l=n.boundary,u=n.rootBoundary,c=n.altBoundary,d=n.padding,f=n.tether,p=f===void 0?!0:f,v=n.tetherOffset,b=v===void 0?0:v,w=Zs(t,{boundary:l,rootBoundary:u,padding:d,altBoundary:c}),g=Nn(t.placement),m=ei(t.placement),h=!m,S=c0(g),k=cD(S),E=t.modifiersData.popperOffsets,F=t.rects.reference,P=t.rects.popper,I=typeof b=="function"?b(Object.assign({},t.rects,{placement:t.placement})):b,R=typeof I=="number"?{mainAxis:I,altAxis:I}:Object.assign({mainAxis:0,altAxis:0},I),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,te={x:0,y:0};if(!!E){if(a){var K,Y=S==="y"?Tt:_t,J=S==="y"?rn:on,X=S==="y"?"height":"width",O=E[S],z=O+w[Y],D=O-w[J],W=p?-P[X]/2:0,ie=m===Za?F[X]:P[X],le=m===Za?-P[X]:-F[X],B=t.elements.arrow,oe=p&&B?u0(B):{width:0,height:0},ve=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:wS(),ue=ve[Y],Be=ve[J],$e=ps(0,F[X],oe[X]),gr=h?F[X]/2-W-$e-ue-R.mainAxis:ie-$e-ue-R.mainAxis,Xr=h?-F[X]/2+W+$e+Be+R.mainAxis:le+$e+Be+R.mainAxis,yr=t.elements.arrow&&ml(t.elements.arrow),Zr=yr?S==="y"?yr.clientTop||0:yr.clientLeft||0:0,No=(K=M==null?void 0:M[S])!=null?K:0,ui=O+gr-No-Zr,ci=O+Xr-No,yt=ps(p?zc(z,ui):z,O,p?So(D,ci):D);E[S]=yt,te[S]=yt-O}if(s){var an,Sn=S==="x"?Tt:_t,sn=S==="x"?rn:on,lt=E[k],br=k==="y"?"height":"width",Qr=lt+w[Sn],Vt=lt-w[sn],Bo=[Tt,_t].indexOf(g)!==-1,di=(an=M==null?void 0:M[k])!=null?an:0,xl=Bo?Qr:lt-F[br]-P[br]-di+R.altAxis,Sl=Bo?lt+F[br]+P[br]-di-R.altAxis:Vt,Jr=p&&Bo?OL(xl,lt,Sl):ps(p?xl:Qr,lt,p?Sl:Vt);E[k]=Jr,te[k]=Jr-lt}t.modifiersData[r]=te}}const fD={name:"preventOverflow",enabled:!0,phase:"main",fn:dD,requiresIfExists:["offset"]};function pD(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function mD(e){return e===Lt(e)||!Jt(e)?d0(e):pD(e)}function hD(e){var t=e.getBoundingClientRect(),n=Qa(t.width)/e.offsetWidth||1,r=Qa(t.height)/e.offsetHeight||1;return n!==1||r!==1}function gD(e,t,n){n===void 0&&(n=!1);var r=Jt(t),o=Jt(t)&&hD(t),a=Yr(t),i=Ja(e,o,n),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((jn(t)!=="body"||p0(a))&&(s=mD(t)),Jt(t)?(l=Ja(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=f0(a))),{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}}function yD(e){var t=new Map,n=new Set,r=[];e.forEach(function(a){t.set(a.name,a)});function o(a){n.add(a.name);var i=[].concat(a.requires||[],a.requiresIfExists||[]);i.forEach(function(s){if(!n.has(s)){var l=t.get(s);l&&o(l)}}),r.push(a)}return e.forEach(function(a){n.has(a.name)||o(a)}),r}function bD(e){var t=yD(e);return PL.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function vD(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function wD(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var ev={placement:"bottom",modifiers:[],strategy:"absolute"};function tv(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function xD(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,a=o===void 0?ev:o;return function(s,l,u){u===void 0&&(u=a);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},ev,a),modifiersData:{},elements:{reference:s,popper:l},attributes:{},styles:{}},d=[],f=!1,p={state:c,setOptions:function(g){var m=typeof g=="function"?g(c.options):g;b(),c.options=Object.assign({},a,c.options,m),c.scrollParents={reference:Ro(s)?ms(s):s.contextElement?ms(s.contextElement):[],popper:ms(l)};var h=bD(wD([].concat(r,c.options.modifiers)));return c.orderedModifiers=h.filter(function(S){return S.enabled}),v(),p.update()},forceUpdate:function(){if(!f){var g=c.elements,m=g.reference,h=g.popper;if(!!tv(m,h)){c.rects={reference:gD(m,ml(h),c.options.strategy==="fixed"),popper:u0(h)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(R){return c.modifiersData[R.name]=Object.assign({},R.data)});for(var S=0;S<c.orderedModifiers.length;S++){if(c.reset===!0){c.reset=!1,S=-1;continue}var k=c.orderedModifiers[S],E=k.fn,F=k.options,P=F===void 0?{}:F,I=k.name;typeof E=="function"&&(c=E({state:c,options:P,name:I,instance:p})||c)}}}},update:vD(function(){return new Promise(function(w){p.forceUpdate(),w(c)})}),destroy:function(){b(),f=!0}};if(!tv(s,l))return p;p.setOptions(u).then(function(w){!f&&u.onFirstUpdate&&u.onFirstUpdate(w)});function v(){c.orderedModifiers.forEach(function(w){var g=w.name,m=w.options,h=m===void 0?{}:m,S=w.effect;if(typeof S=="function"){var k=S({state:c,name:g,instance:p,options:h}),E=function(){};d.push(k||E)}})}function b(){d.forEach(function(w){return w()}),d=[]}return p}}var SD=[HL,uD,VL,IL,sD,nD,fD,DL,oD],CD=xD({defaultModifiers:SD});const Uo=(e,t)=>({var:e,varRef:t?`var(${e}, ${t})`:`var(${e})`}),Rt={arrowShadowColor:Uo("--popper-arrow-shadow-color"),arrowSize:Uo("--popper-arrow-size","8px"),arrowSizeHalf:Uo("--popper-arrow-size-half"),arrowBg:Uo("--popper-arrow-bg"),transformOrigin:Uo("--popper-transform-origin"),arrowOffset:Uo("--popper-arrow-offset")};function kD(e){if(e.includes("top"))return"1px 1px 0px 0 var(--popper-arrow-shadow-color)";if(e.includes("bottom"))return"-1px -1px 0px 0 var(--popper-arrow-shadow-color)";if(e.includes("right"))return"-1px 1px 0px 0 var(--popper-arrow-shadow-color)";if(e.includes("left"))return"1px -1px 0px 0 var(--popper-arrow-shadow-color)"}const FD={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},TD=e=>FD[e],nv={scroll:!0,resize:!0};function _D(e){let t;return typeof e=="object"?t={enabled:!0,options:{...nv,...e}}:t={enabled:e,options:nv},t}const ED={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:({state:e})=>{e.styles.popper.width=`${e.rects.reference.width}px`},effect:({state:e})=>()=>{const t=e.elements.reference;e.elements.popper.style.width=`${t.offsetWidth}px`}},PD={name:"transformOrigin",enabled:!0,phase:"write",fn:({state:e})=>{rv(e)},effect:({state:e})=>()=>{rv(e)}},rv=e=>{e.elements.popper.style.setProperty(Rt.transformOrigin.var,TD(e.placement))},AD={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:({state:e})=>{RD(e)}},RD=e=>{var n;if(!e.placement)return;const t=ID(e.placement);if(((n=e.elements)==null?void 0:n.arrow)&&t){Object.assign(e.elements.arrow.style,{[t.property]:t.value,width:Rt.arrowSize.varRef,height:Rt.arrowSize.varRef,zIndex:-1});const r={[Rt.arrowSizeHalf.var]:`calc(${Rt.arrowSize.varRef} / 2 - 1px)`,[Rt.arrowOffset.var]:`calc(${Rt.arrowSizeHalf.varRef} * -1)`};for(const o in r)e.elements.arrow.style.setProperty(o,r[o])}},ID=e=>{if(e.startsWith("top"))return{property:"bottom",value:Rt.arrowOffset.varRef};if(e.startsWith("bottom"))return{property:"top",value:Rt.arrowOffset.varRef};if(e.startsWith("left"))return{property:"right",value:Rt.arrowOffset.varRef};if(e.startsWith("right"))return{property:"left",value:Rt.arrowOffset.varRef}},qD={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:({state:e})=>{ov(e)},effect:({state:e})=>()=>{ov(e)}},ov=e=>{if(!e.elements.arrow)return;const t=e.elements.arrow.querySelector("[data-popper-arrow-inner]");if(!t)return;const n=kD(e.placement);n&&t.style.setProperty("--popper-arrow-default-shadow",n),Object.assign(t.style,{transform:"rotate(45deg)",background:Rt.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:"var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"})},zD={"start-start":{ltr:"left-start",rtl:"right-start"},"start-end":{ltr:"left-end",rtl:"right-end"},"end-start":{ltr:"right-start",rtl:"left-start"},"end-end":{ltr:"right-end",rtl:"left-end"},start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}},OD={"auto-start":"auto-end","auto-end":"auto-start","top-start":"top-end","top-end":"top-start","bottom-start":"bottom-end","bottom-end":"bottom-start"};function MD(e,t="ltr"){var r,o;const n=((r=zD[e])==null?void 0:r[t])||e;return t==="ltr"?n:(o=OD[e])!=null?o:n}function $D(e={}){const{enabled:t=!0,modifiers:n,placement:r="bottom",strategy:o="absolute",arrowPadding:a=8,eventListeners:i=!0,offset:s,gutter:l=8,flip:u=!0,boundary:c="clippingParents",preventOverflow:d=!0,matchWidth:f,direction:p="ltr"}=e,v=y.exports.useRef(null),b=y.exports.useRef(null),w=y.exports.useRef(null),g=MD(r,p),m=y.exports.useRef(()=>{}),h=y.exports.useCallback(()=>{var R;!t||!v.current||!b.current||((R=m.current)==null||R.call(m),w.current=CD(v.current,b.current,{placement:g,modifiers:[qD,AD,PD,{...ED,enabled:!!f},{name:"eventListeners",..._D(i)},{name:"arrow",options:{padding:a}},{name:"offset",options:{offset:s!=null?s:[0,l]}},{name:"flip",enabled:!!u,options:{padding:8}},{name:"preventOverflow",enabled:!!d,options:{boundary:c}},...n!=null?n:[]],strategy:o}),w.current.forceUpdate(),m.current=w.current.destroy)},[g,t,n,f,i,a,s,l,u,d,c,o]);y.exports.useEffect(()=>()=>{var R;!v.current&&!b.current&&((R=w.current)==null||R.destroy(),w.current=null)},[]);const S=y.exports.useCallback(R=>{v.current=R,h()},[h]),k=y.exports.useCallback((R={},M=null)=>({...R,ref:en(S,M)}),[S]),E=y.exports.useCallback(R=>{b.current=R,h()},[h]),F=y.exports.useCallback((R={},M=null)=>({...R,ref:en(E,M),style:{...R.style,position:o,minWidth:f?void 0:"max-content",inset:"0 auto auto 0"}}),[o,E,f]),P=y.exports.useCallback((R={},M=null)=>{const{size:te,shadowColor:K,bg:Y,style:J,...X}=R;return{...X,ref:M,"data-popper-arrow":"",style:LD(R)}},[]),I=y.exports.useCallback((R={},M=null)=>({...R,ref:M,"data-popper-arrow-inner":""}),[]);return{update(){var R;(R=w.current)==null||R.update()},forceUpdate(){var R;(R=w.current)==null||R.forceUpdate()},transformOrigin:Rt.transformOrigin.varRef,referenceRef:S,popperRef:E,getPopperProps:F,getArrowProps:P,getArrowInnerProps:I,getReferenceProps:k}}function LD(e){const{size:t,shadowColor:n,bg:r,style:o}=e,a={...o,position:"absolute"};return t&&(a["--popper-arrow-size"]=t),n&&(a["--popper-arrow-shadow-color"]=n),r&&(a["--popper-arrow-bg"]=r),a}function DD(){const e=y.exports.useRef(new Map),t=e.current,n=y.exports.useCallback((o,a,i,s)=>{e.current.set(i,{type:a,el:o,options:s}),o.addEventListener(a,i,s)},[]),r=y.exports.useCallback((o,a,i,s)=>{o.removeEventListener(a,i,s),e.current.delete(i)},[]);return y.exports.useEffect(()=>()=>{t.forEach((o,a)=>{r(o.el,o.type,a,o.options)})},[r,t]),{add:n,remove:r}}function np(e){var o,a,i;const t=(i=(a=(o=e.composedPath)==null?void 0:o.call(e))==null?void 0:a[0])!=null?i:e.target,{tagName:n,isContentEditable:r}=t;return n!=="INPUT"&&n!=="TEXTAREA"&&r!==!0}function ND(e={}){const{ref:t,isDisabled:n,isFocusable:r,clickOnEnter:o=!0,clickOnSpace:a=!0,onMouseDown:i,onMouseUp:s,onClick:l,onKeyDown:u,onKeyUp:c,tabIndex:d,onMouseOver:f,onMouseLeave:p,...v}=e,[b,w]=y.exports.useState(!0),[g,m]=y.exports.useState(!1),h=DD(),S=O=>{!O||O.tagName!=="BUTTON"&&w(!1)},k=b?d:d||0,E=n&&!r,F=y.exports.useCallback(O=>{if(n){O.stopPropagation(),O.preventDefault();return}O.currentTarget.focus(),l==null||l(O)},[n,l]),P=y.exports.useCallback(O=>{g&&np(O)&&(O.preventDefault(),O.stopPropagation(),m(!1),h.remove(document,"keyup",P,!1))},[g,h]),I=y.exports.useCallback(O=>{if(u==null||u(O),n||O.defaultPrevented||O.metaKey||!np(O.nativeEvent)||b)return;const z=o&&O.key==="Enter";a&&O.key===" "&&(O.preventDefault(),m(!0)),z&&(O.preventDefault(),O.currentTarget.click()),h.add(document,"keyup",P,!1)},[n,b,u,o,a,h,P]),R=y.exports.useCallback(O=>{if(c==null||c(O),n||O.defaultPrevented||O.metaKey||!np(O.nativeEvent)||b)return;a&&O.key===" "&&(O.preventDefault(),m(!1),O.currentTarget.click())},[a,b,n,c]),M=y.exports.useCallback(O=>{O.button===0&&(m(!1),h.remove(document,"mouseup",M,!1))},[h]),te=y.exports.useCallback(O=>{if(O.button!==0)return;if(n){O.stopPropagation(),O.preventDefault();return}b||m(!0),O.currentTarget.focus({preventScroll:!0}),h.add(document,"mouseup",M,!1),i==null||i(O)},[n,b,i,h,M]),K=y.exports.useCallback(O=>{O.button===0&&(b||m(!1),s==null||s(O))},[s,b]),Y=y.exports.useCallback(O=>{if(n){O.preventDefault();return}f==null||f(O)},[n,f]),J=y.exports.useCallback(O=>{g&&(O.preventDefault(),m(!1)),p==null||p(O)},[g,p]),X=en(t,S);return b?{...v,ref:X,type:"button","aria-disabled":E?void 0:n,disabled:E,onClick:F,onMouseDown:i,onMouseUp:s,onKeyUp:c,onKeyDown:u,onMouseOver:f,onMouseLeave:p}:{...v,ref:X,role:"button","data-active":Gt(g),"aria-disabled":n?"true":void 0,tabIndex:E?void 0:k,onClick:F,onMouseDown:te,onMouseUp:K,onKeyUp:R,onKeyDown:I,onMouseOver:Y,onMouseLeave:J}}const[BD,jD,VD,WD]=AM(),[HD,hl]=nt({strict:!1,name:"MenuContext"});function FS(e){var t;return(t=e==null?void 0:e.ownerDocument)!=null?t:document}function UD(e){return FS(e).activeElement===e}function GD(e={}){const{id:t,closeOnSelect:n=!0,closeOnBlur:r=!0,initialFocusRef:o,autoSelect:a=!0,isLazy:i,isOpen:s,defaultIsOpen:l,onClose:u,onOpen:c,placement:d="bottom-start",lazyBehavior:f="unmount",direction:p,computePositionOnMount:v=!1,...b}=e,w=y.exports.useRef(null),g=y.exports.useRef(null),m=y.exports.useRef(!0),h=VD(),S=y.exports.useCallback(()=>{requestAnimationFrame(()=>{var B;(B=w.current)==null||B.focus({preventScroll:!1})})},[]),k=y.exports.useCallback(()=>{const B=setTimeout(()=>{var oe,ve;if(o)(oe=o.current)==null||oe.focus();else if(!h.count())(ve=w.current)==null||ve.focus({preventScroll:!1});else{const ue=h.firstEnabled();ue&&Y(ue.index)}});D.current.add(B)},[h,o]),E=y.exports.useCallback(()=>{const B=setTimeout(()=>{var oe;if(!h.count())(oe=w.current)==null||oe.focus({preventScroll:!1});else{const ve=h.lastEnabled();ve&&Y(ve.index)}});D.current.add(B)},[h]),F=y.exports.useCallback(()=>{c==null||c(),a?k():S()},[a,k,S,c]),{isOpen:P,onOpen:I,onClose:R,onToggle:M}=ow({isOpen:s,defaultIsOpen:l,onClose:u,onOpen:F});y6({enabled:P&&r,ref:w,handler:B=>{var ve,ue,Be,$e;const oe=(Be=(ue=(ve=B.composedPath)==null?void 0:ve.call(B))==null?void 0:ue[0])!=null?Be:B.target;($e=g.current)!=null&&$e.contains(oe)||R()}});const te=$D({...b,enabled:P||v,placement:d,direction:p}),[K,Y]=y.exports.useState(-1);f6(w,{focusRef:g,visible:P,shouldFocus:!0});const J=c6({isOpen:P,ref:w}),[X,O]=m6(t,"menu-button","menu-list"),z=y.exports.useCallback(()=>{I(),S()},[I,S]),D=y.exports.useRef(new Set([]));y.exports.useEffect(()=>{const B=D.current;return()=>{B.forEach(oe=>clearTimeout(oe)),B.clear()}},[]),ys(()=>{var B;P||(Y(-1),(B=w.current)==null||B.scrollTo(0,0))},[P]),ys(()=>{!P||K===-1&&S()},[K,P]),y.exports.useEffect(()=>{var oe;if(!P)return;const B=h.item(K);(oe=B==null?void 0:B.node)==null||oe.focus({preventScroll:!m.current})},[h,K,P]);const W=y.exports.useCallback(()=>{I(),k()},[k,I]),ie=y.exports.useCallback(()=>{m.current=!0,I(),E()},[I,E]),le=y.exports.useCallback(()=>{var Be,$e;const B=FS(w.current),oe=(Be=w.current)==null?void 0:Be.contains(B.activeElement);if(!(P&&!oe))return;const ue=($e=h.item(K))==null?void 0:$e.node;ue==null||ue.focus({preventScroll:!m.current})},[P,K,h]);return{openAndFocusMenu:z,openAndFocusFirstItem:W,openAndFocusLastItem:ie,onTransitionEnd:le,unstable__animationState:J,descendants:h,popper:te,buttonId:X,menuId:O,forceUpdate:te.forceUpdate,orientation:"vertical",isOpen:P,onToggle:M,onOpen:I,onClose:R,menuRef:w,buttonRef:g,focusedIndex:K,closeOnSelect:n,closeOnBlur:r,autoSelect:a,setFocusedIndex:Y,isLazy:i,lazyBehavior:f,initialFocusRef:o,scrollIntoViewRef:m}}function KD(e={},t=null){const n=hl(),{onToggle:r,popper:o,openAndFocusFirstItem:a,openAndFocusLastItem:i,scrollIntoViewRef:s}=n,l=y.exports.useCallback(u=>{const c=u.key,f={Enter:a,ArrowDown:a,ArrowUp:i}[c];f&&(s.current=!0,u.preventDefault(),u.stopPropagation(),f(u))},[a,i,s]);return{...e,ref:en(n.buttonRef,t,o.referenceRef),id:n.buttonId,"data-active":Gt(n.isOpen),"aria-expanded":n.isOpen,"aria-haspopup":"menu","aria-controls":n.menuId,onClick:qn(e.onClick,r),onKeyDown:qn(e.onKeyDown,l)}}function Vm(e){var t;return QD(e)&&!!((t=e==null?void 0:e.getAttribute("role"))!=null&&t.startsWith("menuitem"))}function YD(e={},t=null){const n=hl();if(!n)throw new Error("useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>");const{focusedIndex:r,setFocusedIndex:o,menuRef:a,isOpen:i,onClose:s,menuId:l,isLazy:u,lazyBehavior:c,scrollIntoViewRef:d,unstable__animationState:f}=n,p=jD(),v=yL({preventDefault:m=>m.key!==" "&&Vm(m.target)}),b=y.exports.useCallback(m=>{if(!m.currentTarget.contains(m.target))return;const h=m.key,k={Tab:F=>F.preventDefault(),Escape:F=>{F.stopPropagation(),s()},ArrowDown:()=>{var P;d.current=!0;const F=(P=p.nextEnabled(r))!=null?P:p.firstEnabled();F&&o(F.index)},ArrowUp:()=>{var P;d.current=!0;const F=(P=p.prevEnabled(r))!=null?P:p.firstEnabled();F&&o(F.index)}}[h];if(k){m.preventDefault(),k(m);return}const E=v(F=>{const P=hL(p.values(),F,I=>{var R,M;return(M=(R=I==null?void 0:I.node)==null?void 0:R.textContent)!=null?M:""},p.item(r));if(P){const I=p.indexOf(P.node);o(I)}});Vm(m.target)&&E(m)},[p,r,v,s,o,d]),w=y.exports.useRef(!1);i&&(w.current=!0);const g=a6({wasSelected:w.current,enabled:u,mode:c,isSelected:f.present});return{...e,ref:en(a,t),children:g?e.children:null,tabIndex:-1,role:"menu",id:l,style:{...e.style,transformOrigin:"var(--popper-transform-origin)"},"aria-orientation":"vertical",onKeyDown:qn(e.onKeyDown,b)}}function XD(e={}){const{popper:t,isOpen:n}=hl();return t.getPopperProps({...e,style:{visibility:n?"visible":"hidden",...e.style}})}function ZD(e={},t=null){const{onMouseEnter:n,onMouseMove:r,onMouseLeave:o,onClick:a,onFocus:i,isDisabled:s,isFocusable:l,closeOnSelect:u,type:c,...d}=e,f=hl(),{setFocusedIndex:p,focusedIndex:v,closeOnSelect:b,onClose:w,menuId:g,scrollIntoViewRef:m}=f,h=y.exports.useRef(null),S=`${g}-menuitem-${y.exports.useId()}`,{index:k,register:E}=WD({disabled:s&&!l}),F=y.exports.useCallback(Y=>{n==null||n(Y),!s&&(m.current=!1,p(k))},[p,k,s,n,m]),P=y.exports.useCallback(Y=>{r==null||r(Y),h.current&&!UD(h.current)&&F(Y)},[F,r]),I=y.exports.useCallback(Y=>{o==null||o(Y),!s&&p(-1)},[p,s,o]),R=y.exports.useCallback(Y=>{a==null||a(Y),!!Vm(Y.currentTarget)&&(u!=null?u:b)&&w()},[w,a,b,u]),M=y.exports.useCallback(Y=>{i==null||i(Y),p(k)},[p,i,k]),te=k===v,K=ND({onClick:R,onFocus:M,onMouseEnter:F,onMouseMove:P,onMouseLeave:I,ref:en(E,h,t),isDisabled:s,isFocusable:l});return{...d,...K,type:c!=null?c:K.type,id:S,role:"menuitem",tabIndex:te?0:-1}}function QD(e){var n;if(!JD(e))return!1;const t=(n=e.ownerDocument.defaultView)!=null?n:window;return e instanceof t.HTMLElement}function JD(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}const[eN,gl]=nt({name:"MenuStylesContext",errorMessage:`useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `}),TS=e=>{const{children:t}=e,n=Oo("Menu",e),r=Dt(e),{direction:o}=fd(),{descendants:a,...i}=GD({...r,direction:o}),s=y.exports.useMemo(()=>i,[i]),{isOpen:l,onClose:u,forceUpdate:c}=s;return x(BD,{value:a,children:x(HD,{value:s,children:x(eN,{value:n,children:gn(t,{isOpen:l,onClose:u,forceUpdate:c})})})})};TS.displayName="Menu";const tN=G((e,t)=>{const n=gl();return x(U.button,{ref:t,...e,__css:{display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...n.button}})}),_S=G((e,t)=>{const{children:n,as:r,...o}=e,a=KD(o,t);return x(r||tN,{...a,className:ge("chakra-menu__menu-button",e.className),children:x(U.span,{__css:{pointerEvents:"none",flex:"1 1 auto",minW:0},children:e.children})})});_S.displayName="MenuButton";const ES=G((e,t)=>{const n=gl();return x(U.span,{ref:t,...e,__css:n.command,className:"chakra-menu__command"})});ES.displayName="MenuCommand";const PS=e=>{const{className:t,children:n,...r}=e,o=gl(),a=y.exports.Children.only(n),i=y.exports.isValidElement(a)?y.exports.cloneElement(a,{focusable:"false","aria-hidden":!0,className:ge("chakra-menu__icon",a.props.className)}):null,s=ge("chakra-menu__icon-wrapper",t);return x(U.span,{className:s,...r,__css:o.icon,children:i})};PS.displayName="MenuIcon";const nN=G((e,t)=>{const{type:n,...r}=e,o=gl(),a=r.as||n?n!=null?n:void 0:"button",i=y.exports.useMemo(()=>({textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,...o.item}),[o.item]);return x(U.button,{ref:t,type:a,...r,__css:i})}),Z=G((e,t)=>{const{icon:n,iconSpacing:r="0.75rem",command:o,commandSpacing:a="0.75rem",children:i,...s}=e,l=ZD(s,t),c=n||o?x("span",{style:{pointerEvents:"none",flex:1},children:i}):i;return N(nN,{...l,className:ge("chakra-menu__menuitem",l.className),children:[n&&x(PS,{fontSize:"0.8em",marginEnd:r,children:n}),c,o&&x(ES,{marginStart:a,children:o})]})});Z.displayName="MenuItem";const rN={enter:{visibility:"visible",opacity:1,scale:1,transition:{duration:.2,ease:[.4,0,.2,1]}},exit:{transitionEnd:{visibility:"hidden"},opacity:0,scale:.8,transition:{duration:.1,easings:"easeOut"}}},oN=U(il.div),AS=G(function(t,n){var f,p;const{rootProps:r,motionProps:o,...a}=t,{isOpen:i,onTransitionEnd:s,unstable__animationState:l}=hl(),u=YD(a,n),c=XD(r),d=gl();return x(U.div,{...c,__css:{zIndex:(p=t.zIndex)!=null?p:(f=d.list)==null?void 0:f.zIndex},children:x(oN,{variants:rN,initial:!1,animate:i?"enter":"exit",__css:{outline:0,...d.list},...o,...u,className:ge("chakra-menu__menu-list",u.className),onUpdate:s,onAnimationComplete:IC(l.onComplete,u.onAnimationComplete)})})});AS.displayName="MenuList";var aN=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Go=new WeakMap,iu=new WeakMap,su={},rp=0,RS=function(e){return e&&(e.host||RS(e.parentNode))},iN=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=RS(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return Boolean(n)})},sN=function(e,t,n,r){var o=iN(t,Array.isArray(e)?e:[e]);su[n]||(su[n]=new WeakMap);var a=su[n],i=[],s=new Set,l=new Set(o),u=function(d){!d||s.has(d)||(s.add(d),u(d.parentNode))};o.forEach(u);var c=function(d){!d||l.has(d)||Array.prototype.forEach.call(d.children,function(f){if(s.has(f))c(f);else try{var p=f.getAttribute(r),v=p!==null&&p!=="false",b=(Go.get(f)||0)+1,w=(a.get(f)||0)+1;Go.set(f,b),a.set(f,w),i.push(f),b===1&&v&&iu.set(f,!0),w===1&&f.setAttribute(n,"true"),v||f.setAttribute(r,"true")}catch(g){console.error("aria-hidden: cannot operate on ",f,g)}})};return c(t),s.clear(),rp++,function(){i.forEach(function(d){var f=Go.get(d)-1,p=a.get(d)-1;Go.set(d,f),a.set(d,p),f||(iu.has(d)||d.removeAttribute(r),iu.delete(d)),p||d.removeAttribute(n)}),rp--,rp||(Go=new WeakMap,Go=new WeakMap,iu=new WeakMap,su={})}},lN=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||aN(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live], script"))),sN(r,o,n,"aria-hidden")):function(){return null}},uN=Object.defineProperty,cN=(e,t,n)=>t in e?uN(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,dN=(e,t,n)=>(cN(e,typeof t!="symbol"?t+"":t,n),n);class fN{constructor(){dN(this,"modals"),this.modals=new Set}add(t){return this.modals.add(t),this.modals.size}remove(t){this.modals.delete(t)}isTopModal(t){if(!t)return!1;const n=Array.from(this.modals)[this.modals.size-1];return t===n}}const Wm=new fN;function IS(e,t){const[n,r]=y.exports.useState(0);return y.exports.useEffect(()=>{const o=e.current;if(!!o){if(t){const a=Wm.add(o);r(a)}return()=>{Wm.remove(o),r(0)}}},[t,e]),n}function pN(e){const{isOpen:t,onClose:n,id:r,closeOnOverlayClick:o=!0,closeOnEsc:a=!0,useInert:i=!0,onOverlayClick:s,onEsc:l}=e,u=y.exports.useRef(null),c=y.exports.useRef(null),[d,f,p]=hN(r,"chakra-modal","chakra-modal--header","chakra-modal--body");mN(u,t&&i);const v=IS(u,t),b=y.exports.useRef(null),w=y.exports.useCallback(I=>{b.current=I.target},[]),g=y.exports.useCallback(I=>{I.key==="Escape"&&(I.stopPropagation(),a&&(n==null||n()),l==null||l())},[a,n,l]),[m,h]=y.exports.useState(!1),[S,k]=y.exports.useState(!1),E=y.exports.useCallback((I={},R=null)=>({role:"dialog",...I,ref:en(R,u),id:d,tabIndex:-1,"aria-modal":!0,"aria-labelledby":m?f:void 0,"aria-describedby":S?p:void 0,onClick:qn(I.onClick,M=>M.stopPropagation())}),[p,S,d,f,m]),F=y.exports.useCallback(I=>{I.stopPropagation(),b.current===I.target&&(!Wm.isTopModal(u.current)||(o&&(n==null||n()),s==null||s()))},[n,o,s]),P=y.exports.useCallback((I={},R=null)=>({...I,ref:en(R,c),onClick:qn(I.onClick,F),onKeyDown:qn(I.onKeyDown,g),onMouseDown:qn(I.onMouseDown,w)}),[g,w,F]);return{isOpen:t,onClose:n,headerId:f,bodyId:p,setBodyMounted:k,setHeaderMounted:h,dialogRef:u,overlayRef:c,getDialogProps:E,getDialogContainerProps:P,index:v}}function mN(e,t){const n=e.current;y.exports.useEffect(()=>{if(!(!e.current||!t))return lN(e.current)},[t,e,n])}function hN(e,...t){const n=y.exports.useId(),r=e||n;return y.exports.useMemo(()=>t.map(o=>`${o}-${r}`),[r,t])}const[gN,yl]=nt({name:"ModalStylesContext",errorMessage:`useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),[yN,si]=nt({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),qS=e=>{var h;const t={scrollBehavior:"outside",autoFocus:!0,trapFocus:!0,returnFocusOnClose:!0,blockScrollOnMount:!0,allowPinchZoom:!1,preserveScrollBarGap:!0,motionPreset:"scale",...e,lockFocusAcrossFrames:(h=e.lockFocusAcrossFrames)!=null?h:!0},{portalProps:n,children:r,autoFocus:o,trapFocus:a,initialFocusRef:i,finalFocusRef:s,returnFocusOnClose:l,blockScrollOnMount:u,allowPinchZoom:c,preserveScrollBarGap:d,motionPreset:f,lockFocusAcrossFrames:p,animatePresenceProps:v,onCloseComplete:b}=t,w=Oo("Modal",t),m={...pN(t),autoFocus:o,trapFocus:a,initialFocusRef:i,finalFocusRef:s,returnFocusOnClose:l,blockScrollOnMount:u,allowPinchZoom:c,preserveScrollBarGap:d,motionPreset:f,lockFocusAcrossFrames:p};return x(yN,{value:m,children:x(gN,{value:w,children:x(dd,{...v,onExitComplete:b,children:m.isOpen&&x(dl,{...n,children:r})})})})};qS.displayName="Modal";var Du="right-scroll-bar-position",Nu="width-before-scroll-bar",bN="with-scroll-bars-hidden",vN="--removed-body-scroll-bar-size",zS=q3(),op=function(){},Ad=y.exports.forwardRef(function(e,t){var n=y.exports.useRef(null),r=y.exports.useState({onScrollCapture:op,onWheelCapture:op,onTouchMoveCapture:op}),o=r[0],a=r[1],i=e.forwardProps,s=e.children,l=e.className,u=e.removeScrollBar,c=e.enabled,d=e.shards,f=e.sideCar,p=e.noRelative,v=e.noIsolation,b=e.inert,w=e.allowPinchZoom,g=e.as,m=g===void 0?"div":g,h=e.gapMode,S=gx(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),k=f,E=A3([n,t]),F=Rn(Rn({},S),o);return N(ko,{children:[c&&x(k,{sideCar:zS,removeScrollBar:u,shards:d,noRelative:p,noIsolation:v,inert:b,setCallbacks:a,allowPinchZoom:!!w,lockRef:n,gapMode:h}),i?y.exports.cloneElement(y.exports.Children.only(s),Rn(Rn({},F),{ref:E})):x(m,{...Rn({},F,{className:l,ref:E}),children:s})]})});Ad.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Ad.classNames={fullWidth:Nu,zeroRight:Du};var wN=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function xN(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=wN();return t&&e.setAttribute("nonce",t),e}function SN(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function CN(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var kN=function(){var e=0,t=null;return{add:function(n){e==0&&(t=xN())&&(SN(t,n),CN(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},FN=function(){var e=kN();return function(t,n){y.exports.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},OS=function(){var e=FN(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},TN={left:0,top:0,right:0,gap:0},ap=function(e){return parseInt(e||"",10)||0},_N=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[ap(n),ap(r),ap(o)]},EN=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return TN;var t=_N(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},PN=OS(),qa="data-scroll-locked",AN=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(bN,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body[`).concat(qa,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Du,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(Nu,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(Du," .").concat(Du,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Nu," .").concat(Nu,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(qa,`] {
    `).concat(vN,": ").concat(s,`px;
  }
`)},av=function(){var e=parseInt(document.body.getAttribute(qa)||"0",10);return isFinite(e)?e:0},RN=function(){y.exports.useEffect(function(){return document.body.setAttribute(qa,(av()+1).toString()),function(){var e=av()-1;e<=0?document.body.removeAttribute(qa):document.body.setAttribute(qa,e.toString())}},[])},IN=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;RN();var a=y.exports.useMemo(function(){return EN(o)},[o]);return x(PN,{styles:AN(a,!t,o,n?"":"!important")})},Hm=!1;if(typeof window<"u")try{var lu=Object.defineProperty({},"passive",{get:function(){return Hm=!0,!0}});window.addEventListener("test",lu,lu),window.removeEventListener("test",lu,lu)}catch{Hm=!1}var Ko=Hm?{passive:!1}:!1,qN=function(e){return e.tagName==="TEXTAREA"},MS=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!qN(e)&&n[t]==="visible")},zN=function(e){return MS(e,"overflowY")},ON=function(e){return MS(e,"overflowX")},iv=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=$S(e,r);if(o){var a=LS(e,r),i=a[1],s=a[2];if(i>s)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},MN=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},$N=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},$S=function(e,t){return e==="v"?zN(t):ON(t)},LS=function(e,t){return e==="v"?MN(t):$N(t)},LN=function(e,t){return e==="h"&&t==="rtl"?-1:1},DN=function(e,t,n,r,o){var a=LN(e,window.getComputedStyle(t).direction),i=a*r,s=n.target,l=t.contains(s),u=!1,c=i>0,d=0,f=0;do{if(!s)break;var p=LS(e,s),v=p[0],b=p[1],w=p[2],g=b-w-a*v;(v||g)&&$S(e,s)&&(d+=g,f+=v);var m=s.parentNode;s=m&&m.nodeType===Node.DOCUMENT_FRAGMENT_NODE?m.host:m}while(!l&&s!==document.body||l&&(t.contains(s)||t===s));return(c&&(o&&Math.abs(d)<1||!o&&i>d)||!c&&(o&&Math.abs(f)<1||!o&&-i>f))&&(u=!0),u},uu=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},sv=function(e){return[e.deltaX,e.deltaY]},lv=function(e){return e&&"current"in e?e.current:e},NN=function(e,t){return e[0]===t[0]&&e[1]===t[1]},BN=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},jN=0,Yo=[];function VN(e){var t=y.exports.useRef([]),n=y.exports.useRef([0,0]),r=y.exports.useRef(),o=y.exports.useState(jN++)[0],a=y.exports.useState(OS)[0],i=y.exports.useRef(e);y.exports.useEffect(function(){i.current=e},[e]),y.exports.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var b=Tq([e.lockRef.current],(e.shards||[]).map(lv),!0).filter(Boolean);return b.forEach(function(w){return w.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),b.forEach(function(w){return w.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=y.exports.useCallback(function(b,w){if("touches"in b&&b.touches.length===2||b.type==="wheel"&&b.ctrlKey)return!i.current.allowPinchZoom;var g=uu(b),m=n.current,h="deltaX"in b?b.deltaX:m[0]-g[0],S="deltaY"in b?b.deltaY:m[1]-g[1],k,E=b.target,F=Math.abs(h)>Math.abs(S)?"h":"v";if("touches"in b&&F==="h"&&E.type==="range")return!1;var P=iv(F,E);if(!P)return!0;if(P?k=F:(k=F==="v"?"h":"v",P=iv(F,E)),!P)return!1;if(!r.current&&"changedTouches"in b&&(h||S)&&(r.current=k),!k)return!0;var I=r.current||k;return DN(I,w,b,I==="h"?h:S,!0)},[]),l=y.exports.useCallback(function(b){var w=b;if(!(!Yo.length||Yo[Yo.length-1]!==a)){var g="deltaY"in w?sv(w):uu(w),m=t.current.filter(function(k){return k.name===w.type&&(k.target===w.target||w.target===k.shadowParent)&&NN(k.delta,g)})[0];if(m&&m.should){w.cancelable&&w.preventDefault();return}if(!m){var h=(i.current.shards||[]).map(lv).filter(Boolean).filter(function(k){return k.contains(w.target)}),S=h.length>0?s(w,h[0]):!i.current.noIsolation;S&&w.cancelable&&w.preventDefault()}}},[]),u=y.exports.useCallback(function(b,w,g,m){var h={name:b,delta:w,target:g,should:m,shadowParent:WN(g)};t.current.push(h),setTimeout(function(){t.current=t.current.filter(function(S){return S!==h})},1)},[]),c=y.exports.useCallback(function(b){n.current=uu(b),r.current=void 0},[]),d=y.exports.useCallback(function(b){u(b.type,sv(b),b.target,s(b,e.lockRef.current))},[]),f=y.exports.useCallback(function(b){u(b.type,uu(b),b.target,s(b,e.lockRef.current))},[]);y.exports.useEffect(function(){return Yo.push(a),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",l,Ko),document.addEventListener("touchmove",l,Ko),document.addEventListener("touchstart",c,Ko),function(){Yo=Yo.filter(function(b){return b!==a}),document.removeEventListener("wheel",l,Ko),document.removeEventListener("touchmove",l,Ko),document.removeEventListener("touchstart",c,Ko)}},[]);var p=e.removeScrollBar,v=e.inert;return N(ko,{children:[v?x(a,{styles:BN(o)}):null,p?x(IN,{noRelative:e.noRelative,gapMode:e.gapMode}):null]})}function WN(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const HN=JM(zS,VN);var DS=y.exports.forwardRef(function(e,t){return x(Ad,{...Rn({},e,{ref:t,sideCar:HN})})});DS.classNames=Ad.classNames;const UN=DS;function GN(e){const{autoFocus:t,trapFocus:n,dialogRef:r,initialFocusRef:o,blockScrollOnMount:a,allowPinchZoom:i,finalFocusRef:s,returnFocusOnClose:l,preserveScrollBarGap:u,lockFocusAcrossFrames:c,isOpen:d}=si(),[f,p]=Mh();y.exports.useEffect(()=>{!f&&p&&setTimeout(p)},[f,p]);const v=IS(r,d);return x(uS,{autoFocus:t,isDisabled:!n,initialFocusRef:o,finalFocusRef:s,restoreFocus:l,contentRef:r,lockFocusAcrossFrames:c,children:x(UN,{removeScrollBar:!u,allowPinchZoom:i,enabled:v===1&&a,forwardProps:!0,children:e.children})})}const NS=G((e,t)=>{const{className:n,...r}=e,{bodyId:o,setBodyMounted:a}=si();y.exports.useEffect(()=>(a(!0),()=>a(!1)),[a]);const i=ge("chakra-modal__body",n),s=yl();return x(U.div,{ref:t,className:i,id:o,...r,__css:s.body})});NS.displayName="ModalBody";const BS=G((e,t)=>{const{onClick:n,className:r,...o}=e,{onClose:a}=si(),i=ge("chakra-modal__close-btn",r),s=yl();return x(ng,{ref:t,__css:s.closeButton,className:i,onClick:qn(n,l=>{l.stopPropagation(),a()}),...o})});BS.displayName="ModalCloseButton";const jS=G((e,t)=>{const{className:n,...r}=e,{headerId:o,setHeaderMounted:a}=si();y.exports.useEffect(()=>(a(!0),()=>a(!1)),[a]);const i=ge("chakra-modal__header",n),s=yl(),l={flex:0,...s.header};return x(U.header,{ref:t,className:i,id:o,...r,__css:l})});jS.displayName="ModalHeader";const KN={enter:({transition:e,transitionEnd:t,delay:n}={})=>{var r;return{opacity:1,transition:(r=e==null?void 0:e.enter)!=null?r:Rc.enter(M1.enter,n),transitionEnd:t==null?void 0:t.enter}},exit:({transition:e,transitionEnd:t,delay:n}={})=>{var r;return{opacity:0,transition:(r=e==null?void 0:e.exit)!=null?r:Rc.exit(M1.exit,n),transitionEnd:t==null?void 0:t.exit}}},VS={initial:"exit",animate:"enter",exit:"exit",variants:KN},YN=y.exports.forwardRef(function(t,n){const{unmountOnExit:r,in:o,className:a,transition:i,transitionEnd:s,delay:l,animatePresenceProps:u,...c}=t,d=o||r?"enter":"exit",f=r?o&&r:!0,p={transition:i,transitionEnd:s,delay:l};return x(dd,{...u,custom:p,children:f&&x(il.div,{ref:n,className:ge("chakra-fade",a),custom:p,...VS,animate:d,...c})})});YN.displayName="Fade";const XN=U(il.div),WS=G((e,t)=>{const{className:n,transition:r,motionProps:o,...a}=e,i=ge("chakra-modal__overlay",n),l={pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh",...yl().overlay},{motionPreset:u}=si();return x(XN,{...o||(u==="none"?{}:VS),__css:l,ref:t,className:i,...a})});WS.displayName="ModalOverlay";const[ZN,QN]=nt(),JN={start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}};function eB(e,t){var n,r;if(!!e)return(r=(n=JN[e])==null?void 0:n[t])!=null?r:e}function tB(e){var u;const{isOpen:t,onClose:n,placement:r="right",children:o,...a}=e,i=fd(),s=(u=i.components)==null?void 0:u.Drawer,l=eB(r,i.direction);return x(ZN,{value:{placement:l},children:x(qS,{isOpen:t,onClose:n,styleConfig:s,...a,children:o})})}const uv={exit:{duration:.15,ease:Im.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},nB={exit:({direction:e,transition:t,transitionEnd:n,delay:r})=>{var a;const{exit:o}=qm({direction:e});return{...o,transition:(a=t==null?void 0:t.exit)!=null?a:Rc.exit(uv.exit,r),transitionEnd:n==null?void 0:n.exit}},enter:({direction:e,transitionEnd:t,transition:n,delay:r})=>{var a;const{enter:o}=qm({direction:e});return{...o,transition:(a=n==null?void 0:n.enter)!=null?a:Rc.enter(uv.enter,r),transitionEnd:t==null?void 0:t.enter}}},HS=y.exports.forwardRef(function(t,n){const{direction:r="right",style:o,unmountOnExit:a,in:i,className:s,transition:l,transitionEnd:u,delay:c,motionProps:d,animatePresenceProps:f,...p}=t,v=qm({direction:r}),b=Object.assign({position:"fixed"},v.position,o),w=a?i&&a:!0,g=i||a?"enter":"exit",m={transitionEnd:u,transition:l,direction:r,delay:c};return x(dd,{...f,custom:m,children:w&&x(il.div,{...p,ref:n,initial:"exit",className:ge("chakra-slide",s),animate:g,exit:"exit",custom:m,variants:nB,style:b,...d})})});HS.displayName="Slide";const rB=U(HS),US=G((e,t)=>{const{className:n,children:r,motionProps:o,containerProps:a,...i}=e,{getDialogProps:s,getDialogContainerProps:l,isOpen:u}=si(),c=s(i,t),d=l(a),f=ge("chakra-modal__content",n),p=yl(),v={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...p.dialog},b={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...p.dialogContainer},{placement:w}=QN();return x(GN,{children:x(U.div,{...d,className:"chakra-modal__content-container",__css:b,children:x(rB,{motionProps:o,direction:w,in:u,className:f,...c,__css:v,children:r})})})});US.displayName="DrawerContent";const GS=e=>x(U.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});GS.displayName="StackItem";function oB(e){const{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":rh(n,o=>r[o])}}const za=G((e,t)=>{const{isInline:n,direction:r,align:o,justify:a,spacing:i="0.5rem",wrap:s,children:l,divider:u,className:c,shouldWrapChildren:d,...f}=e,p=n?"row":r!=null?r:"column",v=y.exports.useMemo(()=>oB({spacing:i,direction:p}),[i,p]),b=!!u,w=!d&&!b,g=y.exports.useMemo(()=>{const h=Qv(l);return w?h:h.map((S,k)=>{const E=typeof S.key<"u"?S.key:k,F=k+1===h.length,I=d?x(GS,{children:S},E):S;if(!b)return I;const R=y.exports.cloneElement(u,{__css:v}),M=F?null:R;return N(y.exports.Fragment,{children:[I,M]},E)})},[u,v,b,w,d,l]),m=ge("chakra-stack",c);return x(U.div,{ref:t,display:"flex",alignItems:o,justifyContent:a,flexDirection:p,flexWrap:s,gap:b?void 0:i,className:m,...f,children:g})});za.displayName="Stack";const Oc=G((e,t)=>x(za,{align:"center",...e,direction:"row",ref:t}));Oc.displayName="HStack";const m0=G((e,t)=>x(za,{align:"center",...e,direction:"column",ref:t}));m0.displayName="VStack";const[aB,KS]=nt({name:"TagStylesContext",errorMessage:`useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `}),Oa=G((e,t)=>{const n=Oo("Tag",e),r=Dt(e),o={display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%",...n.container};return x(aB,{value:n,children:x(U.span,{ref:t,...r,__css:o})})});Oa.displayName="Tag";const iB=G((e,t)=>{const n=KS();return x(U.span,{ref:t,noOfLines:1,...e,__css:n.label})});iB.displayName="TagLabel";const sB=G((e,t)=>x(Vn,{ref:t,verticalAlign:"top",marginEnd:"0.5rem",...e}));sB.displayName="TagLeftIcon";const lB=G((e,t)=>x(Vn,{ref:t,verticalAlign:"top",marginStart:"0.5rem",...e}));lB.displayName="TagRightIcon";const YS=e=>x(Vn,{verticalAlign:"inherit",viewBox:"0 0 512 512",...e,children:x("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})});YS.displayName="TagCloseIcon";const uB=G((e,t)=>{const{isDisabled:n,children:r,...o}=e,i={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...KS().closeButton};return x(U.button,{ref:t,"aria-label":"close",...o,type:"button",disabled:n,__css:i,children:r||x(YS,{})})});uB.displayName="TagCloseButton";const Bu=G(function(t,n){const r=Hr("Heading",t),{className:o,...a}=Dt(t);return x(U.h2,{ref:n,className:ge("chakra-heading",t.className),...a,__css:r})});Bu.displayName="Heading";const Fe=G(function(t,n){const r=Hr("Text",t),{className:o,align:a,decoration:i,casing:s,...l}=Dt(t),u=Jv({textAlign:t.align,textDecoration:t.decoration,textTransform:t.casing});return x(U.p,{ref:n,className:ge("chakra-text",t.className),...u,...l,__css:r})});Fe.displayName="Text";var Um={},cv=pd.exports;Um.createRoot=cv.createRoot,Um.hydrateRoot=cv.hydrateRoot;const cB="modulepreload",dB=function(e){return"/Recipes/"+e},dv={},fB=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=dB(a),a in dv)return;dv[a]=!0;const i=a.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(!!r)for(let c=o.length-1;c>=0;c--){const d=o[c];if(d.href===a&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${s}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":cB,i||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),i)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())};var fv="popstate";function pB(e={}){function t(o,a){let{pathname:i="/",search:s="",hash:l=""}=Lo(o.location.hash.substring(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),Gm("",{pathname:i,search:s,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(o,a){let i=o.document.querySelector("base"),s="";if(i&&i.getAttribute("href")){let l=o.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof a=="string"?a:Qs(a))}function r(o,a){xn(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(a)})`)}return hB(t,n,r,e)}function Ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function mB(){return Math.random().toString(36).substring(2,10)}function pv(e,t){return{usr:e.state,key:e.key,idx:t}}function Gm(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Lo(t):t,state:n,key:t&&t.key||r||mB()}}function Qs({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Lo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function hB(e,t,n,r={}){let{window:o=document.defaultView,v5Compat:a=!1}=r,i=o.history,s="POP",l=null,u=c();u==null&&(u=0,i.replaceState({...i.state,idx:u},""));function c(){return(i.state||{idx:null}).idx}function d(){s="POP";let w=c(),g=w==null?null:w-u;u=w,l&&l({action:s,location:b.location,delta:g})}function f(w,g){s="PUSH";let m=Gm(b.location,w,g);n&&n(m,w),u=c()+1;let h=pv(m,u),S=b.createHref(m);try{i.pushState(h,"",S)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(S)}a&&l&&l({action:s,location:b.location,delta:1})}function p(w,g){s="REPLACE";let m=Gm(b.location,w,g);n&&n(m,w),u=c();let h=pv(m,u),S=b.createHref(m);i.replaceState(h,"",S),a&&l&&l({action:s,location:b.location,delta:0})}function v(w){return gB(w)}let b={get action(){return s},get location(){return e(o,i)},listen(w){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(fv,d),l=w,()=>{o.removeEventListener(fv,d),l=null}},createHref(w){return t(o,w)},createURL:v,encodeLocation(w){let g=v(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:p,go(w){return i.go(w)}};return b}function gB(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ie(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:Qs(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function XS(e,t,n="/"){return yB(e,t,n,!1)}function yB(e,t,n,r){let o=typeof t=="string"?Lo(t):t,a=mr(o.pathname||"/",n);if(a==null)return null;let i=ZS(e);bB(i);let s=null;for(let l=0;s==null&&l<i.length;++l){let u=PB(a);s=_B(i[l],u,r)}return s}function ZS(e,t=[],n=[],r="",o=!1){let a=(i,s,l=o,u)=>{let c={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};if(c.relativePath.startsWith("/")){if(!c.relativePath.startsWith(r)&&l)return;Ie(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let d=sr([r,c.relativePath]),f=n.concat(c);i.children&&i.children.length>0&&(Ie(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),ZS(i.children,t,f,d,l)),!(i.path==null&&!i.index)&&t.push({path:d,score:FB(d,i.index),routesMeta:f})};return e.forEach((i,s)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,s);else for(let u of QS(i.path))a(i,s,!0,u)}),t}function QS(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let i=QS(r.join("/")),s=[];return s.push(...i.map(l=>l===""?a:[a,l].join("/"))),o&&s.push(...i),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function bB(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:TB(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var vB=/^:[\w-]+$/,wB=3,xB=2,SB=1,CB=10,kB=-2,mv=e=>e==="*";function FB(e,t){let n=e.split("/"),r=n.length;return n.some(mv)&&(r+=kB),t&&(r+=xB),n.filter(o=>!mv(o)).reduce((o,a)=>o+(vB.test(a)?wB:a===""?SB:CB),r)}function TB(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function _B(e,t,n=!1){let{routesMeta:r}=e,o={},a="/",i=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,c=a==="/"?t:t.slice(a.length)||"/",d=Mc({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),f=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Mc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!d)return null;Object.assign(o,d.params),i.push({params:o,pathname:sr([a,d.pathname]),pathnameBase:qB(sr([a,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(a=sr([a,d.pathnameBase]))}return i}function Mc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=EB(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,{paramName:c,isOptional:d},f)=>{if(c==="*"){let v=s[f]||"";i=a.slice(0,a.length-v.length).replace(/(.)\/+$/,"$1")}const p=s[f];return d&&!p?u[c]=void 0:u[c]=(p||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:i,pattern:e}}function EB(e,t=!1,n=!0){xn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function PB(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return xn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function mr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function AB(e,t="/"){let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Lo(e):e;return{pathname:n?n.startsWith("/")?n:RB(n,t):t,search:zB(r),hash:OB(o)}}function RB(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ip(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function IB(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function JS(e){let t=IB(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function e9(e,t,n,r=!1){let o;typeof e=="string"?o=Lo(e):(o={...e},Ie(!o.pathname||!o.pathname.includes("?"),ip("?","pathname","search",o)),Ie(!o.pathname||!o.pathname.includes("#"),ip("#","pathname","hash",o)),Ie(!o.search||!o.search.includes("#"),ip("#","search","hash",o)));let a=e===""||o.pathname==="",i=a?"/":o.pathname,s;if(i==null)s=n;else{let d=t.length-1;if(!r&&i.startsWith("..")){let f=i.split("/");for(;f[0]==="..";)f.shift(),d-=1;o.pathname=f.join("/")}s=d>=0?t[d]:"/"}let l=AB(o,s),u=i&&i!=="/"&&i.endsWith("/"),c=(a||i===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}var sr=e=>e.join("/").replace(/\/\/+/g,"/"),qB=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),zB=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,OB=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function MB(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var $B=["POST","PUT","PATCH","DELETE"];[...$B];var li=y.exports.createContext(null);li.displayName="DataRouter";var Rd=y.exports.createContext(null);Rd.displayName="DataRouterState";y.exports.createContext(!1);var t9=y.exports.createContext({isTransitioning:!1});t9.displayName="ViewTransition";var LB=y.exports.createContext(new Map);LB.displayName="Fetchers";var DB=y.exports.createContext(null);DB.displayName="Await";var Hn=y.exports.createContext(null);Hn.displayName="Navigation";var bl=y.exports.createContext(null);bl.displayName="Location";var Un=y.exports.createContext({outlet:null,matches:[],isDataRoute:!1});Un.displayName="Route";var h0=y.exports.createContext(null);h0.displayName="RouteError";function NB(e,{relative:t}={}){Ie(vl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=y.exports.useContext(Hn),{hash:o,pathname:a,search:i}=wl(e,{relative:t}),s=a;return n!=="/"&&(s=a==="/"?n:sr([n,a])),r.createHref({pathname:s,search:i,hash:o})}function vl(){return y.exports.useContext(bl)!=null}function Do(){return Ie(vl(),"useLocation() may be used only in the context of a <Router> component."),y.exports.useContext(bl).location}var n9="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function r9(e){y.exports.useContext(Hn).static||y.exports.useLayoutEffect(e)}function o9(){let{isDataRoute:e}=y.exports.useContext(Un);return e?ej():BB()}function BB(){Ie(vl(),"useNavigate() may be used only in the context of a <Router> component.");let e=y.exports.useContext(li),{basename:t,navigator:n}=y.exports.useContext(Hn),{matches:r}=y.exports.useContext(Un),{pathname:o}=Do(),a=JSON.stringify(JS(r)),i=y.exports.useRef(!1);return r9(()=>{i.current=!0}),y.exports.useCallback((l,u={})=>{if(xn(i.current,n9),!i.current)return;if(typeof l=="number"){n.go(l);return}let c=e9(l,JSON.parse(a),o,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:sr([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,a,o,e])}y.exports.createContext(null);function jB(){let{matches:e}=y.exports.useContext(Un),t=e[e.length-1];return t?t.params:{}}function wl(e,{relative:t}={}){let{matches:n}=y.exports.useContext(Un),{pathname:r}=Do(),o=JSON.stringify(JS(n));return y.exports.useMemo(()=>e9(e,JSON.parse(o),r,t==="path"),[e,o,r,t])}function VB(e,t){return a9(e,t)}function a9(e,t,n,r,o){var m;Ie(vl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=y.exports.useContext(Hn),{matches:i}=y.exports.useContext(Un),s=i[i.length-1],l=s?s.params:{},u=s?s.pathname:"/",c=s?s.pathnameBase:"/",d=s&&s.route;{let h=d&&d.path||"";i9(u,!d||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let f=Do(),p;if(t){let h=typeof t=="string"?Lo(t):t;Ie(c==="/"||((m=h.pathname)==null?void 0:m.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${h.pathname}" was given in the \`location\` prop.`),p=h}else p=f;let v=p.pathname||"/",b=v;if(c!=="/"){let h=c.replace(/^\//,"").split("/");b="/"+v.replace(/^\//,"").split("/").slice(h.length).join("/")}let w=XS(e,{pathname:b});xn(d||w!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),xn(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=KB(w&&w.map(h=>Object.assign({},h,{params:Object.assign({},l,h.params),pathname:sr([c,a.encodeLocation?a.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?c:sr([c,a.encodeLocation?a.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),i,n,r,o);return t&&g?y.exports.createElement(bl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},g):g}function WB(){let e=JB(),t=MB(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},i=null;return console.error("Error handled by React Router default ErrorBoundary:",e),i=y.exports.createElement(y.exports.Fragment,null,y.exports.createElement("p",null,"\u{1F4BF} Hey developer \u{1F44B}"),y.exports.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.exports.createElement("code",{style:a},"ErrorBoundary")," or"," ",y.exports.createElement("code",{style:a},"errorElement")," prop on your route.")),y.exports.createElement(y.exports.Fragment,null,y.exports.createElement("h2",null,"Unexpected Application Error!"),y.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.exports.createElement("pre",{style:o},n):null,i)}var HB=y.exports.createElement(WB,null),UB=class extends y.exports.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?y.exports.createElement(Un.Provider,{value:this.props.routeContext},y.exports.createElement(h0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function GB({routeContext:e,match:t,children:n}){let r=y.exports.useContext(li);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),y.exports.createElement(Un.Provider,{value:e},n)}function KB(e,t=[],n=null,r=null,o=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,i=n==null?void 0:n.errors;if(i!=null){let u=a.findIndex(c=>c.route.id&&(i==null?void 0:i[c.route.id])!==void 0);Ie(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),a=a.slice(0,Math.min(a.length,u+1))}let s=!1,l=-1;if(n)for(let u=0;u<a.length;u++){let c=a[u];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(l=u),c.route.id){let{loaderData:d,errors:f}=n,p=c.route.loader&&!d.hasOwnProperty(c.route.id)&&(!f||f[c.route.id]===void 0);if(c.route.lazy||p){s=!0,l>=0?a=a.slice(0,l+1):a=[a[0]];break}}}return a.reduceRight((u,c,d)=>{let f,p=!1,v=null,b=null;n&&(f=i&&c.route.id?i[c.route.id]:void 0,v=c.route.errorElement||HB,s&&(l<0&&d===0?(i9("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,b=null):l===d&&(p=!0,b=c.route.hydrateFallbackElement||null)));let w=t.concat(a.slice(0,d+1)),g=()=>{let m;return f?m=v:p?m=b:c.route.Component?m=y.exports.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=u,y.exports.createElement(GB,{match:c,routeContext:{outlet:u,matches:w,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?y.exports.createElement(UB,{location:n.location,revalidation:n.revalidation,component:v,error:f,children:g(),routeContext:{outlet:null,matches:w,isDataRoute:!0},unstable_onError:r}):g()},null)}function g0(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function YB(e){let t=y.exports.useContext(li);return Ie(t,g0(e)),t}function XB(e){let t=y.exports.useContext(Rd);return Ie(t,g0(e)),t}function ZB(e){let t=y.exports.useContext(Un);return Ie(t,g0(e)),t}function y0(e){let t=ZB(e),n=t.matches[t.matches.length-1];return Ie(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function QB(){return y0("useRouteId")}function JB(){var r;let e=y.exports.useContext(h0),t=XB("useRouteError"),n=y0("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function ej(){let{router:e}=YB("useNavigate"),t=y0("useNavigate"),n=y.exports.useRef(!1);return r9(()=>{n.current=!0}),y.exports.useCallback(async(o,a={})=>{xn(n.current,n9),n.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...a}))},[e,t])}var hv={};function i9(e,t,n){!t&&!hv[e]&&(hv[e]=!0,xn(!1,n))}y.exports.memo(tj);function tj({routes:e,future:t,state:n,unstable_onError:r}){return a9(e,void 0,n,r,t)}function Km(e){Ie(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nj({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:o,static:a=!1}){Ie(!vl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let i=e.replace(/^\/*/,"/"),s=y.exports.useMemo(()=>({basename:i,navigator:o,static:a,future:{}}),[i,o,a]);typeof n=="string"&&(n=Lo(n));let{pathname:l="/",search:u="",hash:c="",state:d=null,key:f="default"}=n,p=y.exports.useMemo(()=>{let v=mr(l,i);return v==null?null:{location:{pathname:v,search:u,hash:c,state:d,key:f},navigationType:r}},[i,l,u,c,d,f,r]);return xn(p!=null,`<Router basename="${i}"> is not able to match the URL "${l}${u}${c}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:y.exports.createElement(Hn.Provider,{value:s},y.exports.createElement(bl.Provider,{children:t,value:p}))}function rj({children:e,location:t}){return VB(Ym(e),t)}function Ym(e,t=[]){let n=[];return y.exports.Children.forEach(e,(r,o)=>{if(!y.exports.isValidElement(r))return;let a=[...t,o];if(r.type===y.exports.Fragment){n.push.apply(n,Ym(r.props.children,a));return}Ie(r.type===Km,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ie(!r.props.index||!r.props.children,"An index route cannot have child routes.");let i={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=Ym(r.props.children,a)),n.push(i)}),n}var ju="get",Vu="application/x-www-form-urlencoded";function Id(e){return e!=null&&typeof e.tagName=="string"}function oj(e){return Id(e)&&e.tagName.toLowerCase()==="button"}function aj(e){return Id(e)&&e.tagName.toLowerCase()==="form"}function ij(e){return Id(e)&&e.tagName.toLowerCase()==="input"}function sj(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function lj(e,t){return e.button===0&&(!t||t==="_self")&&!sj(e)}var cu=null;function uj(){if(cu===null)try{new FormData(document.createElement("form"),0),cu=!1}catch{cu=!0}return cu}var cj=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function sp(e){return e!=null&&!cj.has(e)?(xn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vu}"`),null):e}function dj(e,t){let n,r,o,a,i;if(aj(e)){let s=e.getAttribute("action");r=s?mr(s,t):null,n=e.getAttribute("method")||ju,o=sp(e.getAttribute("enctype"))||Vu,a=new FormData(e)}else if(oj(e)||ij(e)&&(e.type==="submit"||e.type==="image")){let s=e.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||s.getAttribute("action");if(r=l?mr(l,t):null,n=e.getAttribute("formmethod")||s.getAttribute("method")||ju,o=sp(e.getAttribute("formenctype"))||sp(s.getAttribute("enctype"))||Vu,a=new FormData(s,e),!uj()){let{name:u,type:c,value:d}=e;if(c==="image"){let f=u?`${u}.`:"";a.append(`${f}x`,"0"),a.append(`${f}y`,"0")}else u&&a.append(u,d)}}else{if(Id(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ju,r=null,o=Vu,i=e}return a&&o==="text/plain"&&(i=a,a=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:a,body:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function b0(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function fj(e,t,n){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${n}`:t&&mr(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function pj(e,t){if(e.id in t)return t[e.id];try{let n=await fB(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function mj(e){return e!=null&&typeof e.page=="string"}function hj(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function gj(e,t,n){let r=await Promise.all(e.map(async o=>{let a=t.routes[o.route.id];if(a){let i=await pj(a,n);return i.links?i.links():[]}return[]}));return wj(r.flat(1).filter(hj).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function gv(e,t,n,r,o,a){let i=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,s=(l,u)=>{var c;return n[u].pathname!==l.pathname||((c=n[u].route.path)==null?void 0:c.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return a==="assets"?t.filter((l,u)=>i(l,u)||s(l,u)):a==="data"?t.filter((l,u)=>{var d;let c=r.routes[l.route.id];if(!c||!c.hasLoader)return!1;if(i(l,u)||s(l,u))return!0;if(l.route.shouldRevalidate){let f=l.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function yj(e,t,{includeHydrateFallback:n}={}){return bj(e.map(r=>{let o=t.routes[r.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function bj(e){return[...new Set(e)]}function vj(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function wj(e,t){let n=new Set,r=new Set(t);return e.reduce((o,a)=>{if(t&&!mj(a)&&a.as==="script"&&a.href&&r.has(a.href))return o;let s=JSON.stringify(vj(a));return n.has(s)||(n.add(s),o.push({key:s,link:a})),o},[])}function s9(){let e=y.exports.useContext(li);return b0(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function xj(){let e=y.exports.useContext(Rd);return b0(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var v0=y.exports.createContext(void 0);v0.displayName="FrameworkContext";function l9(){let e=y.exports.useContext(v0);return b0(e,"You must render this element inside a <HydratedRouter> element"),e}function Sj(e,t){let n=y.exports.useContext(v0),[r,o]=y.exports.useState(!1),[a,i]=y.exports.useState(!1),{onFocus:s,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:d}=t,f=y.exports.useRef(null);y.exports.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let b=g=>{g.forEach(m=>{i(m.isIntersecting)})},w=new IntersectionObserver(b,{threshold:.5});return f.current&&w.observe(f.current),()=>{w.disconnect()}}},[e]),y.exports.useEffect(()=>{if(r){let b=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(b)}}},[r]);let p=()=>{o(!0)},v=()=>{o(!1),i(!1)};return n?e!=="intent"?[a,f,{}]:[a,f,{onFocus:Ii(s,p),onBlur:Ii(l,v),onMouseEnter:Ii(u,p),onMouseLeave:Ii(c,v),onTouchStart:Ii(d,p)}]:[!1,f,{}]}function Ii(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Cj({page:e,...t}){let{router:n}=s9(),r=y.exports.useMemo(()=>XS(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?y.exports.createElement(Fj,{page:e,matches:r,...t}):null}function kj(e){let{manifest:t,routeModules:n}=l9(),[r,o]=y.exports.useState([]);return y.exports.useEffect(()=>{let a=!1;return gj(e,t,n).then(i=>{a||o(i)}),()=>{a=!0}},[e,t,n]),r}function Fj({page:e,matches:t,...n}){let r=Do(),{manifest:o,routeModules:a}=l9(),{basename:i}=s9(),{loaderData:s,matches:l}=xj(),u=y.exports.useMemo(()=>gv(e,t,l,o,r,"data"),[e,t,l,o,r]),c=y.exports.useMemo(()=>gv(e,t,l,o,r,"assets"),[e,t,l,o,r]),d=y.exports.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let v=new Set,b=!1;if(t.forEach(g=>{var h;let m=o.routes[g.route.id];!m||!m.hasLoader||(!u.some(S=>S.route.id===g.route.id)&&g.route.id in s&&((h=a[g.route.id])==null?void 0:h.shouldRevalidate)||m.hasClientLoader?b=!0:v.add(g.route.id))}),v.size===0)return[];let w=fj(e,i,"data");return b&&v.size>0&&w.searchParams.set("_routes",t.filter(g=>v.has(g.route.id)).map(g=>g.route.id).join(",")),[w.pathname+w.search]},[i,s,r,o,u,t,e,a]),f=y.exports.useMemo(()=>yj(c,o),[c,o]),p=kj(c);return y.exports.createElement(y.exports.Fragment,null,d.map(v=>y.exports.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),f.map(v=>y.exports.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),p.map(({key:v,link:b})=>y.exports.createElement("link",{key:v,nonce:n.nonce,...b})))}function Tj(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var u9=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{u9&&(window.__reactRouterVersion="7.9.1")}catch{}function _j({basename:e,children:t,window:n}){let r=y.exports.useRef();r.current==null&&(r.current=pB({window:n,v5Compat:!0}));let o=r.current,[a,i]=y.exports.useState({action:o.action,location:o.location}),s=y.exports.useCallback(l=>{y.exports.startTransition(()=>i(l))},[i]);return y.exports.useLayoutEffect(()=>o.listen(s),[o,s]),y.exports.createElement(nj,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o})}var c9=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Js=y.exports.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:o,reloadDocument:a,replace:i,state:s,target:l,to:u,preventScrollReset:c,viewTransition:d,...f},p){let{basename:v}=y.exports.useContext(Hn),b=typeof u=="string"&&c9.test(u),w,g=!1;if(typeof u=="string"&&b&&(w=u,u9))try{let I=new URL(window.location.href),R=u.startsWith("//")?new URL(I.protocol+u):new URL(u),M=mr(R.pathname,v);R.origin===I.origin&&M!=null?u=M+R.search+R.hash:g=!0}catch{xn(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let m=NB(u,{relative:o}),[h,S,k]=Sj(r,f),E=Rj(u,{replace:i,state:s,target:l,preventScrollReset:c,relative:o,viewTransition:d});function F(I){t&&t(I),I.defaultPrevented||E(I)}let P=y.exports.createElement("a",{...f,...k,href:w||m,onClick:g||a?t:F,ref:Tj(p,S),target:l,"data-discover":!b&&n==="render"?"true":void 0});return h&&!b?y.exports.createElement(y.exports.Fragment,null,P,y.exports.createElement(Cj,{page:m})):P});Js.displayName="Link";var Ej=y.exports.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:o=!1,style:a,to:i,viewTransition:s,children:l,...u},c){let d=wl(i,{relative:u.relative}),f=Do(),p=y.exports.useContext(Rd),{navigator:v,basename:b}=y.exports.useContext(Hn),w=p!=null&&Mj(d)&&s===!0,g=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,m=f.pathname,h=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(m=m.toLowerCase(),h=h?h.toLowerCase():null,g=g.toLowerCase()),h&&b&&(h=mr(h,b)||h);const S=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let k=m===g||!o&&m.startsWith(g)&&m.charAt(S)==="/",E=h!=null&&(h===g||!o&&h.startsWith(g)&&h.charAt(g.length)==="/"),F={isActive:k,isPending:E,isTransitioning:w},P=k?t:void 0,I;typeof r=="function"?I=r(F):I=[r,k?"active":null,E?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let R=typeof a=="function"?a(F):a;return y.exports.createElement(Js,{...u,"aria-current":P,className:I,ref:c,style:R,to:i,viewTransition:s},typeof l=="function"?l(F):l)});Ej.displayName="NavLink";var Pj=y.exports.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:o,state:a,method:i=ju,action:s,onSubmit:l,relative:u,preventScrollReset:c,viewTransition:d,...f},p)=>{let v=zj(),b=Oj(s,{relative:u}),w=i.toLowerCase()==="get"?"get":"post",g=typeof s=="string"&&c9.test(s),m=h=>{if(l&&l(h),h.defaultPrevented)return;h.preventDefault();let S=h.nativeEvent.submitter,k=(S==null?void 0:S.getAttribute("formmethod"))||i;v(S||h.currentTarget,{fetcherKey:t,method:k,navigate:n,replace:o,state:a,relative:u,preventScrollReset:c,viewTransition:d})};return y.exports.createElement("form",{ref:p,method:w,action:b,onSubmit:r?l:m,...f,"data-discover":!g&&e==="render"?"true":void 0})});Pj.displayName="Form";function Aj(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function d9(e){let t=y.exports.useContext(li);return Ie(t,Aj(e)),t}function Rj(e,{target:t,replace:n,state:r,preventScrollReset:o,relative:a,viewTransition:i}={}){let s=o9(),l=Do(),u=wl(e,{relative:a});return y.exports.useCallback(c=>{if(lj(c,t)){c.preventDefault();let d=n!==void 0?n:Qs(l)===Qs(u);s(e,{replace:d,state:r,preventScrollReset:o,relative:a,viewTransition:i})}},[l,s,u,n,r,t,e,o,a,i])}var Ij=0,qj=()=>`__${String(++Ij)}__`;function zj(){let{router:e}=d9("useSubmit"),{basename:t}=y.exports.useContext(Hn),n=QB();return y.exports.useCallback(async(r,o={})=>{let{action:a,method:i,encType:s,formData:l,body:u}=dj(r,t);if(o.navigate===!1){let c=o.fetcherKey||qj();await e.fetch(c,n,o.action||a,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||i,formEncType:o.encType||s,flushSync:o.flushSync})}else await e.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||i,formEncType:o.encType||s,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,n])}function Oj(e,{relative:t}={}){let{basename:n}=y.exports.useContext(Hn),r=y.exports.useContext(Un);Ie(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),a={...wl(e||".",{relative:t})},i=Do();if(e==null){a.search=i.search;let s=new URLSearchParams(a.search),l=s.getAll("index");if(l.some(c=>c==="")){s.delete("index"),l.filter(d=>d).forEach(d=>s.append("index",d));let c=s.toString();a.search=c?`?${c}`:""}}return(!e||e===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:sr([n,a.pathname])),Qs(a)}function Mj(e,{relative:t}={}){let n=y.exports.useContext(t9);Ie(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=d9("useViewTransitionState"),o=wl(e,{relative:t});if(!n.isTransitioning)return!1;let a=mr(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=mr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Mc(o.pathname,i)!=null||Mc(o.pathname,a)!=null}const f9=JSON.parse(`{
  "from": 1,
  "to": 20,
  "count": 10000,
  "_links": {},
  "hits": [
    {
      "recipe": {
        "label": "Paleo Chocolate Covered Caramels",
        "image": "https://media.wincacademy.nl/react/images/final-project/chocolate-caramel.jpeg",
        "url": "http://ourfineday.com/happy-birthday-travis-and-a-recipe-for-chocolate-covered-chocolates/",
        "yield": 12,
        "dietLabels": [
          "Low-Sodium"
        ],
        "healthLabels": [
          "Low Potassium",
          "Kidney-Friendly",
          "Vegetarian",
          "Gluten-Free",
          "Wheat-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Tree-Nuts",
          "Sulfites"
        ],
        "ingredientLines": [
          "1/2 cup honey",
          "1 1/2 Tbsp almond butter",
          "3 tsp butter or coconut butter for dairy free",
          "1 tsp water",
          "1/2 tsp vanilla",
          "1 cup chocolate chips",
          "1/2 tsp coconut oil"
        ],
        "ingredients": [
          {
            "text": "1/2 cup honey",
            "quantity": 0.5,
            "measure": "cup",
            "food": "honey",
            "weight": 169.5,
            "foodCategory": null,
            "foodId": "food_bn6aoj9atkqx8fbkli859bbbxx62",
            "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
          },
          {
            "text": "1 1/2 Tbsp almond butter",
            "quantity": 1.5,
            "measure": "tablespoon",
            "food": "almond butter",
            "weight": 24,
            "foodCategory": "plant-based protein",
            "foodId": "food_ae9575obgo01yta6szkvqab50hhl",
            "image": "https://www.edamam.com/food-img/5dd/5ddf70b59f27c03902b5d5a3c4574b37.png"
          },
          {
            "text": "3 tsp butter or coconut butter for dairy free",
            "quantity": 3,
            "measure": "teaspoon",
            "food": "coconut butter",
            "weight": 14.000000000710095,
            "foodCategory": null,
            "foodId": "food_bkx1ggcaouz8qob002t72ay33jbo",
            "image": "https://www.edamam.com/food-img/0d0/0d0a27d667f0b7930bdda17da8ea7dc7.jpg"
          },
          {
            "text": "1 tsp water",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "water",
            "weight": 4.928921594,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "1/2 tsp vanilla",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "vanilla",
            "weight": 2.1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
            "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
          },
          {
            "text": "1 cup chocolate chips",
            "quantity": 1,
            "measure": "cup",
            "food": "chocolate chips",
            "weight": 224,
            "foodCategory": "chocolate",
            "foodId": "food_b0camz2asgzienbko2epvbzzv6qj",
            "image": "https://www.edamam.com/food-img/36c/36ce336d10d51259f365ec2dbc1e28c4.jpg"
          },
          {
            "text": "1/2 tsp coconut oil",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "coconut oil",
            "weight": 2.25,
            "foodCategory": "Oils",
            "foodId": "food_b40ubq8a0enoidbcr1tmfbwgs6aw",
            "image": "https://www.edamam.com/food-img/3c9/3c97284c57e76e16093d51572b558be8.jpg"
          }
        ],
        "calories": 1912.5630000050721,
        "totalWeight": 440.7789215947101,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "desserts"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1912.5630000050721,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 76.8976600004565,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 35.34678,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.4121600000000001,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 7.917509999999998,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.307704,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 301.1664500001775,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 290.8074500001014,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 10.359000000076083,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 280.61185,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 279.283,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 17.247360000050723,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 33.6,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 168.71615686414296,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 353.66886764782004,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 70.65128921593998,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 270.768,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 4.668120000018259,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 1.1653028921594002,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 128.826,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 2.1915,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.010071,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.291765,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.97122,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.065946,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 16.11,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 16.11,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.812424999999999,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 0.01125,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 38.766272672406004,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Grilled Pork Chops with Chipotle Sauce",
        "image": "https://media.wincacademy.nl/react/images/final-project/Grilled-Pork-Chop-with-Chipotle-Sauce.jpeg",
        "url": "https://grumpyshoneybunch.com/2009/07/grilled-pork-chops-chipotle-sauce.html",
        "yield": 8,
        "dietLabels": [
          "Low-Carb"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Keto-Friendly",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "* 8 pork chops",
          "* 1/2 cup sugar free ketchup",
          "* 1/3 cup Seasoned Rice Vinegar, original",
          "* 1/3 cup Swerve Brown Sweetener",
          "* 1 Tablespoon ground cumin",
          "* 1 teaspoons chipotle chili powder"
        ],
        "ingredients": [
          {
            "text": "* 8 pork chops",
            "quantity": 8,
            "measure": "<unit>",
            "food": "pork chops",
            "weight": 1592,
            "foodCategory": "meats",
            "foodId": "food_a6yuw2wan806yxaem8uqza91rjmb",
            "image": "https://www.edamam.com/food-img/499/49977aabc381bd3889ad9100978e1bb6.jpg"
          },
          {
            "text": "* 1/2 cup sugar free ketchup",
            "quantity": 0.5,
            "measure": "cup",
            "food": "ketchup",
            "weight": 120,
            "foodCategory": "condiments and sauces",
            "foodId": "food_au7jthtab0n3era9uue8pauakroe",
            "image": "https://www.edamam.com/food-img/257/257207c446011b849001ae596390341c.jpeg"
          },
          {
            "text": "* 1/3 cup Seasoned Rice Vinegar, original",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "Seasoned Rice Vinegar",
            "weight": 79.66666666666666,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bhk02bwbp4x7kkbeajj2pbnj15cp",
            "image": "https://www.edamam.com/food-img/c7d/c7dbd1846c5d08e9739930d70a404d50.jpg"
          },
          {
            "text": "* 1/3 cup Swerve Brown Sweetener",
            "quantity": 0.3333333333333333,
            "measure": "<unit>",
            "food": "Sweetener",
            "weight": 0.3333333333333333,
            "foodCategory": "sugars",
            "foodId": "food_b3755atafogvz2ac74adra225skl",
            "image": "https://www.edamam.com/food-img/0e3/0e3edc39fe123b516c4c758f4f09e99f.jpg"
          },
          {
            "text": "* 1 Tablespoon ground cumin",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "cumin",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
            "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
          },
          {
            "text": "* 1 teaspoons chipotle chili powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 2.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          }
        ],
        "calories": 2875.644,
        "totalWeight": 1800.7,
        "totalTime": 0,
        "cuisineType": [
          "mexican"
        ],
        "mealType": [
          "snack"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2875.644,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 145.59936,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 47.823934,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.46464,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 57.431257,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 19.406902,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 37.914233333333335,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 35.984633333333335,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 1.9296,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 26.455763333333334,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0.28396666666666665,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 332.3863533333334,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1098.48,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2056.899,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 390.8266666666667,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 443.5663333333334,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 6015.86,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 15.057766666666668,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 28.8184,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3402.8933333333334,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 106.92099999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 5.400899999999999,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 7.77883,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.25308,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 107.68321999999998,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 11.368478,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 12.155999999999999,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 12.155999999999999,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 8.4376,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 7.96,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 4.89198,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 6.7779,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1267.3743166666668,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Slow Cooker Turkey Dip Sandwiches recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/turkey-sandwich.jpeg",
        "url": "http://www.bobbiskozykitchen.com/2015/03/slow-cooker-turkey-dip-sandwiches.html",
        "yield": 4,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "7 tablespoons room temperature unsalted butter, divided",
          "3 tablespoons fresh thyme leaves, chopped",
          "4 cloves garlic, minced",
          "1 lemon, zested",
          "kosher salt",
          "cracked black pepper",
          "1 large onion, chopped",
          "1/2 cup chicken stock",
          "3 tablespoons Worcestershire sauce",
          "1 (4-pound) bone-in turkey breast",
          "4 demi French baguettes, sliced in half",
          "12 slices Swiss Cheese"
        ],
        "ingredients": [
          {
            "text": "7 tablespoons room temperature unsalted butter, divided",
            "quantity": 7,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 99.39999999999999,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "3 tablespoons fresh thyme leaves, chopped",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "fresh thyme",
            "weight": 7.19999999951308,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
            "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
          },
          {
            "text": "4 cloves garlic, minced",
            "quantity": 4,
            "measure": "clove",
            "food": "garlic",
            "weight": 12,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 lemon, zested",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lemon",
            "weight": 58,
            "foodCategory": "fruit",
            "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
            "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
          },
          {
            "text": "kosher salt",
            "quantity": 0,
            "measure": null,
            "food": "kosher salt",
            "weight": 23.087816879997078,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "cracked black pepper",
            "quantity": 0,
            "measure": null,
            "food": "black pepper",
            "weight": 11.543908439998539,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 large onion, chopped",
            "quantity": 1,
            "measure": "<unit>",
            "food": "onion",
            "weight": 150,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/2 cup chicken stock",
            "quantity": 0.5,
            "measure": "cup",
            "food": "chicken stock",
            "weight": 120,
            "foodCategory": "canned soup",
            "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
            "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
          },
          {
            "text": "3 tablespoons Worcestershire sauce",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "Worcestershire sauce",
            "weight": 51,
            "foodCategory": "canned soup",
            "foodId": "food_ahb8mscbejo58ubexo0itam1i74g",
            "image": "https://www.edamam.com/food-img/072/072b61dd1ad5bb641f05b14f716ba6d0.jpg"
          },
          {
            "text": "1 (4-pound) bone-in turkey breast",
            "quantity": 4,
            "measure": "pound",
            "food": "turkey breast",
            "weight": 1814.36948,
            "foodCategory": "Poultry",
            "foodId": "food_aijy334arptsr3b4zwpdrajqapl8",
            "image": "https://www.edamam.com/food-img/3d8/3d80f3f4fcb0efcf54d094c857d74926.jpg"
          },
          {
            "text": "4 demi French baguettes, sliced in half",
            "quantity": 4,
            "measure": "<unit>",
            "food": "baguettes",
            "weight": 1200,
            "foodCategory": "bread, rolls and tortillas",
            "foodId": "food_bz1n7y8bupmgp0anvyqmda9dwufz",
            "image": "https://www.edamam.com/food-img/470/47053c77e167539c64fef3f2a3249bb2.jpg"
          },
          {
            "text": "12 slices Swiss Cheese",
            "quantity": 12,
            "measure": "slice",
            "food": "Swiss Cheese",
            "weight": 336,
            "foodCategory": "Cheese",
            "foodId": "food_am9c0zybyfhgn9brc0imabzslets",
            "image": "https://www.edamam.com/food-img/419/419f6ce36db411c072d0dbf6c8510897.jpg"
          }
        ],
        "calories": 8031.129285423905,
        "totalWeight": 3859.513388439512,
        "totalTime": 375,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "sandwiches"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 8031.129285423905,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 320.02449516153575,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 149.01005856668252,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 3.318332,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 93.9322608345712,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 44.1734542374286,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 687.3825694472602,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 652.6279606120087,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 34.75460883525146,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 74.95002101401599,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 585.4535633416888,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1587.8361458,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 9117.120975567957,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 3727.6667435472214,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 970.9018911116184,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 7255.567006164616,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 73.40638389343889,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 53.81769326282717,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 6386.241884854681,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1476.3375059176406,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 63.98119999922044,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 9.893574289674964,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 8.318519446989704,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 145.90443453746033,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 9.910386927158704,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 2227.9697416745803,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 859.9697416745806,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 804,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 18.2496966344,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 3.171,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.426336647775984,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 44.209378116277605,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2031.4894896573069,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Blueberry Basil Margarita Cocktail recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/blueberry-margarita.jpeg",
        "url": "http://drinkwire.liquor.com/post/blueberry-basil-margarita-cocktail-recipe/",
        "yield": 4,
        "dietLabels": [
          "Low-Fat",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Low Potassium",
          "Kidney-Friendly",
          "Keto-Friendly",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "No oil added",
          "Sulfite-Free",
          "Kosher",
          "Alcohol-Cocktail"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "2.0 oz. Tres Agaves Blanco Tequila",
          "1.0 oz. agave nectar",
          "12-15 blueberries",
          "1 lime squeezed",
          "A couple sprigs of basil"
        ],
        "ingredients": [
          {
            "text": "2.0 oz. Tres Agaves Blanco Tequila",
            "quantity": 2,
            "measure": "ounce",
            "food": "Tequila",
            "weight": 56.69904625,
            "foodCategory": "liquors and cocktails",
            "foodId": "food_ajguqpia53yz3oah6w2frad3tz65",
            "image": "https://www.edamam.com/food-img/c7f/c7fcc63de96b349534aade3de3f9fa7d.jpg"
          },
          {
            "text": "1.0 oz. agave nectar",
            "quantity": 1,
            "measure": "ounce",
            "food": "agave nectar",
            "weight": 28.349523125,
            "foodCategory": "sugar syrups",
            "foodId": "food_bj8pkd1bgey1rlbp58zagbjhpfi0",
            "image": "https://www.edamam.com/food-img/3b5/3b5425ed8e35a486b4138cc8720ae9e4.jpg"
          },
          {
            "text": "12-15 blueberries",
            "quantity": 13.5,
            "measure": "<unit>",
            "food": "blueberries",
            "weight": 18.360000000000003,
            "foodCategory": "fruit",
            "foodId": "food_bgkl0cuasoeomtbolalmcauhha54",
            "image": "https://www.edamam.com/food-img/f55/f55705a2a9ea9f7abf449a05fa968139.png"
          },
          {
            "text": "1 lime squeezed",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lime",
            "weight": 67,
            "foodCategory": "fruit",
            "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
            "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
          },
          {
            "text": "A couple sprigs of basil",
            "quantity": 2,
            "measure": "sprig",
            "food": "basil",
            "weight": 4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
            "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
          }
        ],
        "calories": 243.539632975,
        "totalWeight": 174.408569375,
        "totalTime": 15,
        "cuisineType": [
          "world"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "alcohol cocktail"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 243.539632975,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 0.22018800000000005,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 0.0215208,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 0.0248792,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 0.07921560000000001,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 31.37380157500001,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 27.57568541875001,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 3.7981161562500003,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 23.101117418750007,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 20.128161418750004,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 0.7308640000000001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2.2505904625000004,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 30.291600000000003,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 7.681600000000001,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 95.41118092500001,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 0.6028876185,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.1581556185,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 18.771161850000006,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 12.450800000000001,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 21.997920000000004,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.031655142775000006,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.026235561850000005,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.25419567601250004,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.0451241904625,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 9.181600000000001,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 9.181600000000001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 0.28405199999999997,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 20.537480000000002,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 116.03912080250001,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Potato Gratin",
        "image": "https://media.wincacademy.nl/react/images/final-project/potatoes-gratin.webp",
        "url": "http://www.cookstr.com/recipes/potato-gratin-2",
        "yield": 12,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegetarian",
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "1 cup milk",
          "1 cup heavy cream",
          "2 cups finely sliced leeks, white part only",
          "1 tablespoon roasted garlic pur\xE9e (see note)",
          "1 tablespoon chopped rosemary leaves",
          "Pinch freshly ground nutmeg",
          "Coarse salt and freshly ground white pepper to taste",
          "5 tablespoons unsalted butter, at room temperature",
          "4 large Yukon Gold potatoes, peeled and cut, crosswise, into 1/8-inch-thick slices"
        ],
        "ingredients": [
          {
            "text": "1 cup milk",
            "quantity": 1,
            "measure": "cup",
            "food": "milk",
            "weight": 244,
            "foodCategory": "Milk",
            "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
            "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
          },
          {
            "text": "1 cup heavy cream",
            "quantity": 1,
            "measure": "cup",
            "food": "heavy cream",
            "weight": 238,
            "foodCategory": "Dairy",
            "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
            "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
          },
          {
            "text": "2 cups finely sliced leeks, white part only",
            "quantity": 2,
            "measure": "cup",
            "food": "leeks",
            "weight": 178,
            "foodCategory": "vegetables",
            "foodId": "food_a27jevnb06c1m9ax7k41xbbcwcuo",
            "image": "https://www.edamam.com/food-img/4ae/4ae9e09d029a28e0e2c64bdfdbf3f6ae.jpg"
          },
          {
            "text": "1 tablespoon roasted garlic pur\xE9e (see note)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "garlic",
            "weight": 8.499999999856291,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 tablespoon chopped rosemary leaves",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "rosemary",
            "weight": 1.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6tm2t2blxi7okaeiv91wb8bmygq",
            "image": "https://www.edamam.com/food-img/0ac/0ac8f7cf6f2d0ad7b1a2f9900fae44f3.jpg"
          },
          {
            "text": "Pinch freshly ground nutmeg",
            "quantity": 1,
            "measure": "pinch",
            "food": "ground nutmeg",
            "weight": 0.14583333352071937,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aa8vp2kadkkiiubgpp48fazrqiq2",
            "image": "https://www.edamam.com/food-img/b9e/b9e54f78ae18cf99a6504b472ba25e7b.jpg"
          },
          {
            "text": "Coarse salt and freshly ground white pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "Coarse salt",
            "weight": 13.304075000000262,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "Coarse salt and freshly ground white pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "white pepper",
            "weight": 0,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a443px0bncpqa5avv80p3anrp26k",
            "image": "https://www.edamam.com/food-img/4f0/4f0e35fe6c042996408b337fb550324a.jpg"
          },
          {
            "text": "5 tablespoons unsalted butter, at room temperature",
            "quantity": 5,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 71,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "4 large Yukon Gold potatoes, peeled and cut, crosswise, into 1/8-inch-thick slices",
            "quantity": 4,
            "measure": "<unit>",
            "food": "Yukon Gold potatoes",
            "weight": 1476,
            "foodCategory": "vegetables",
            "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
            "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
          }
        ],
        "calories": 2739.76762500077,
        "totalWeight": 2229.800431236176,
        "totalTime": 120,
        "cuisineType": [
          "french"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2739.76762500077,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 155.63557208340066,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 96.38664016671514,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 2.32738,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 42.400860833339344,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 6.873602416666964,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 304.67288125004484,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 268.54834791667554,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 36.12453333336929,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 37.54896041667083,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 46.259086666668466,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 503.11,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5156.393388500102,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 753.6314368300897,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 435.86342097933505,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 7098.92778449897,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 15.712683506415825,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.138100014571826,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1287.6176250001793,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1726.289291666676,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 316.5869749999608,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.4738665833336944,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.2360371249999487,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 16.685738375001428,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 5.0317103333318585,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 376.14883333347143,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 376.14883333347143,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.6471,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 5.9030000000000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.132799999999884,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 125.16649999999754,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1690.0881846123998,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Seafood Casserole",
        "image": "https://media.wincacademy.nl/react/images/final-project/seafood-casserol.jpeg",
        "url": "http://www.bigoven.com/recipe/Seafood-Casserole/296427",
        "yield": 6,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "6 oz pasta or noodles",
          "1/2 cup mayonnaise or salad dressing",
          "1/2 cup white wine",
          "1 can condensed cream of mushroom soup",
          "1 cup cheddar cheese",
          "1/2 tsp dry mustard",
          "8 oz, can tuna, shrimp or crab",
          "1 cup breadcrumbs"
        ],
        "ingredients": [
          {
            "text": "6 oz pasta or noodles",
            "quantity": 6,
            "measure": "ounce",
            "food": "pasta",
            "weight": 170.09713875,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "1/2 cup mayonnaise or salad dressing",
            "quantity": 0.5,
            "measure": "cup",
            "food": "salad dressing",
            "weight": 125,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a67f1v3boelh4wasob4qib34t5bv",
            "image": "https://www.edamam.com/food-img/241/24178db68d42001caf980f8f209534cb.jpg"
          },
          {
            "text": "1/2 cup white wine",
            "quantity": 0.5,
            "measure": "cup",
            "food": "white wine",
            "weight": 117.6,
            "foodCategory": "wines",
            "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
            "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
          },
          {
            "text": "1 can condensed cream of mushroom soup",
            "quantity": 1,
            "measure": "can",
            "food": "condensed cream of mushroom soup",
            "weight": 303,
            "foodCategory": "canned soup",
            "foodId": "food_b628l7bbpw7rnqa1ri8egb0xetpn",
            "image": "https://www.edamam.com/food-img/545/545d0db4311588977bed0aabfa530c58.jpg"
          },
          {
            "text": "1 cup cheddar cheese",
            "quantity": 1,
            "measure": "cup",
            "food": "cheddar cheese",
            "weight": 132,
            "foodCategory": "Cheese",
            "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
            "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
          },
          {
            "text": "1/2 tsp dry mustard",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "dry mustard",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b0xqxo3a93nsz8a6ppdilau4ujwt",
            "image": "https://www.edamam.com/food-img/9ff/9ff9e6d04cbc71ff884f3212afa0adfd.jpg"
          },
          {
            "text": "8 oz, can tuna, shrimp or crab",
            "quantity": 8,
            "measure": "ounce",
            "food": "can tuna",
            "weight": 226.796185,
            "foodCategory": "canned seafood",
            "foodId": "food_a0jj77zb6yprvtasct45abh6qkxp",
            "image": "https://www.edamam.com/food-img/b53/b53adeb03d265a094fb598dd89f33450.jpg"
          },
          {
            "text": "1 cup breadcrumbs",
            "quantity": 1,
            "measure": "cup",
            "food": "breadcrumbs",
            "weight": 108,
            "foodCategory": "bread, rolls and tortillas",
            "foodId": "food_ata1dxza443wfda7jb4e5b3zwt9p",
            "image": "https://www.edamam.com/food-img/349/349f852497885b9d9c0b195ad0d0db8f.jpg"
          }
        ],
        "calories": 2690.7571038625,
        "totalWeight": 1183.49332375,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2690.7571038625,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 134.158510171125,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 42.130519024687494,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.6305059237000001,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 35.1820880252125,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 44.719843295,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 233.57303350462502,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 221.026925064625,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 12.546108440000001,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 17.141053604625,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 116.85426525700001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 216.28662660000003,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4312.022405275,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1212.5197505875,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 248.9446060875,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1392.0777905625002,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 12.290660619250001,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 10.592083332875001,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1541.4582893875,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 391.79535145,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.071,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.351416280375,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.3694170786500002,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 34.31560067035,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.2685977671750002,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 259.985332375,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 109.86533237500001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 88.56,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 7.322902717500002,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 4.11955422,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 9.379734263125,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 194.99208950874998,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 668.15201569525,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Green coconut curry with salmon",
        "image": "https://media.wincacademy.nl/react/images/final-project/coconut-curry-salmon.jpeg",
        "url": "http://www.aliceincookingland.com/recipe/green-coconut-curry-salmon/",
        "yield": 18,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Pescatarian",
          "Dairy-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Tree-Nuts",
          "Shellfish",
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "1 1/2 lb salmon",
          "1 zuchinni finely chopped",
          "2 green peppers",
          "2 cloves garlic diced",
          "1 lb mushrooms sliced",
          "2 heads baby bok choy cut into fourths",
          "3 tsp ginger finely grated",
          "4 tbsp grapeseed oil",
          "2 14-oz cans coconut milk",
          "4 tbsp green curry paste",
          "2 tbsp fish sauce",
          "1 lime juiced",
          "1/2 cup fresh basil chopped",
          "2 green onions sliced",
          "1 tsp salt",
          "1 tsp pepper",
          "1 package Aisian noodles we used Soba"
        ],
        "ingredients": [
          {
            "text": "1 1/2 lb salmon",
            "quantity": 1.5,
            "measure": "pound",
            "food": "salmon",
            "weight": 680.388555,
            "foodCategory": "seafood",
            "foodId": "food_bhncugnadgibupafbeeapbislbom",
            "image": "https://www.edamam.com/food-img/9a0/9a0f38422e9f21dcedbc2dca0d8209ac.jpg"
          },
          {
            "text": "1 zuchinni finely chopped",
            "quantity": 1,
            "measure": "<unit>",
            "food": "zuchinni",
            "weight": 196,
            "foodCategory": "vegetables",
            "foodId": "food_avpihljbuwpd8ibbmahcabaros5s",
            "image": "https://www.edamam.com/food-img/f63/f637280594e4a731eccc1199194a8847.jpg"
          },
          {
            "text": "2 green peppers",
            "quantity": 2,
            "measure": "<unit>",
            "food": "green peppers",
            "weight": 232.57777777777778,
            "foodCategory": "vegetables",
            "foodId": "food_bz8rcwobbzm7zhb3wh2n7aznivou",
            "image": "https://www.edamam.com/food-img/629/629dc9fddc1f8aec27fa337dd6ce2b7c.jpg"
          },
          {
            "text": "2 cloves garlic diced",
            "quantity": 2,
            "measure": "clove",
            "food": "garlic",
            "weight": 6,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 lb mushrooms sliced",
            "quantity": 1,
            "measure": "pound",
            "food": "mushrooms",
            "weight": 453.59237,
            "foodCategory": "vegetables",
            "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
            "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
          },
          {
            "text": "2 heads baby bok choy cut into fourths",
            "quantity": 2,
            "measure": "head",
            "food": "bok choy",
            "weight": 151.99999999999983,
            "foodCategory": "vegetables",
            "foodId": "food_bq7w3usaxapk30b8utp6lasy79lv",
            "image": "https://www.edamam.com/food-img/c76/c7698a4dc6baecd186476820b6b91cdc.jpg"
          },
          {
            "text": "3 tsp ginger finely grated",
            "quantity": 3,
            "measure": "teaspoon",
            "food": "ginger",
            "weight": 6,
            "foodCategory": "vegetables",
            "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
            "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
          },
          {
            "text": "4 tbsp grapeseed oil",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "grapeseed oil",
            "weight": 54.4,
            "foodCategory": "Oils",
            "foodId": "food_br8vwihb5tm7wybd4ppzjaox5089",
            "image": "https://www.edamam.com/food-img/88b/88bb3399c7bf214d2bce6bd86780eaf2.jpg"
          },
          {
            "text": "2 14-oz cans coconut milk",
            "quantity": 28,
            "measure": "ounce",
            "food": "coconut milk",
            "weight": 793.7866475000001,
            "foodCategory": "non-dairy beverages",
            "foodId": "food_by1k6v2adj7drhbq9w1rpbpen9ms",
            "image": "https://www.edamam.com/food-img/671/671f7528eadb1b01efb53243d0ef0f80.JPG"
          },
          {
            "text": "4 tbsp green curry paste",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "curry paste",
            "weight": 64,
            "foodCategory": "condiments and sauces",
            "foodId": "food_aojdol2are6zg7af2nincbe87jot",
            "image": "https://www.edamam.com/food-img/b6a/b6a9ebae5850f42eca0253827603ef9c.jpg"
          },
          {
            "text": "2 tbsp fish sauce",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "fish sauce",
            "weight": 36,
            "foodCategory": "canned soup",
            "foodId": "food_ahlu6u3ab8bu1wap7cbqua3s1quk",
            "image": "https://www.edamam.com/food-img/7b5/7b58b769d8bf7b79acf12a76b79ea9bc.jpg"
          },
          {
            "text": "1 lime juiced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lime",
            "weight": 67,
            "foodCategory": "fruit",
            "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
            "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
          },
          {
            "text": "1/2 cup fresh basil chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "fresh basil",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
            "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
          },
          {
            "text": "2 green onions sliced",
            "quantity": 2,
            "measure": "<unit>",
            "food": "green onions",
            "weight": 30,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          },
          {
            "text": "1 tsp salt",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 tsp pepper",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "pepper",
            "weight": 2.9,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 package Aisian noodles we used Soba",
            "quantity": 1,
            "measure": "package",
            "food": "noodles",
            "weight": 340,
            "foodCategory": "grains",
            "foodId": "food_aefg3gqa71nrtpbhjfo3yb36kd81",
            "image": "https://www.edamam.com/food-img/800/800c9c0d7cef6b5474723682ffa2878d.jpg"
          }
        ],
        "calories": 5112.068417170556,
        "totalWeight": 3132.645350277778,
        "totalTime": 0,
        "cuisineType": [
          "nordic"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 5112.068417170556,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 336.96978048289225,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 181.28297571055614,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.2074,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 47.68709068526722,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 73.26260006699724,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 328.1063749712389,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 297.98885939653667,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 30.11751557470222,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 32.25989848546667,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 230.65632545302884,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 665.70150452552,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 6120.048996514333,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 673.4619165553777,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 988.5084524161775,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 8413.89930292511,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 51.18356467470444,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 18.335398636711112,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3885.2424455315554,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 246.90042395519998,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 345.5847355913334,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 6.220408624813333,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 4.799611279027777,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 114.07125079756834,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 7.403383890282219,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 1891.6150528181777,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 732.2150528181777,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 683.4000000000001,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 23.33407684378,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.9271847400000002,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 44.03291935599778,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 218.48374043807544,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2193.2876144164557,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Vegan Herb Crackers recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/herb-crackers.jpeg",        
        "url": "https://elanaspantry.com/herb-crackers/",
        "yield": 15,
        "dietLabels": [
          "Low-Carb",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Keto-Friendly",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Mediterranean",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "FODMAP-Free",
          "Kosher"
        ],
        "cautions": [
          "FODMAP"
        ],
        "ingredientLines": [
          "2 cups blanched almond flour (not almond meal)",
          "\xBE teaspoon celtic sea salt",
          "2 tablespoons herbes de provence",
          "1 tablespoon olive oil",
          "2 tablespoons water"
        ],
        "ingredients": [
          {
            "text": "2 cups blanched almond flour (not almond meal)",
            "quantity": 2,
            "measure": "cup",
            "food": "blanched almond flour",
            "weight": 224,
            "foodCategory": "grains",
            "foodId": "food_aquymekalw81cfbcaho71btv3lnt",
            "image": "https://www.edamam.com/food-img/4ce/4ce26863cf14ffeb473cc6f9edcc60f0.jpg"
          },
          {
            "text": "\xBE teaspoon celtic sea salt",
            "quantity": 0.75,
            "measure": "teaspoon",
            "food": "sea salt",
            "weight": 3.6406250001846567,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "2 tablespoons herbes de provence",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "herbes de provence",
            "weight": 5.4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "1 tablespoon olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "2 tablespoons water",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "water",
            "weight": 29.573529562,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          }
        ],
        "calories": 1445.316,
        "totalWeight": 274.08661383452016,
        "totalTime": 30,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "breakfast"
        ],
        "dishType": [
          "starter"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1445.316,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 125.81162,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 9.739500000000001,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 9.875115000000001,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 1.484865,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 46.10236,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 20.920359999999995,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 25.182000000000002,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 7.8203400000000025,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 50.60074000000001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 633.6317435258399,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 260.2693461122648,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 12.191866138345203,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1675.5672467418017,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 9.174523178099317,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.33829043722872015,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1074.4284000000002,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 10.260000000000002,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 2.7,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.027702000000000004,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.021546000000000003,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.26676000000000005,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.029700000000000008,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 14.796000000000001,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 14.796000000000001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.34117,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 100.71000000000001,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 29.967842200983043,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Baked Chicken Parm",
        "image": "https://media.wincacademy.nl/react/images/final-project/baked-chicken-parm.jpeg",
        "url": "https://food52.com/recipes/17016-baked-chicken-parm",
        "yield": 4,
        "dietLabels": [
          "High-Fiber",
          "Low-Fat"
        ],
        "healthLabels": [
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 tablespoon oil",
          "1 1/2 cup panko",
          "1/2 cup grated parmesan cheese",
          "1/4 teaspoon salt",
          "1/4 teaspoon ground black pepper",
          "1/8 teaspoon garlic powder",
          "1 teaspoon dried italian seasoning",
          "2 large eggs",
          "2 large boneless, skinless chicken breast halves",
          "1/2 cup grated sharp cheddar cheese or grated mozzarella cheese",
          "2 cups purchased marinara sauce",
          "4 servings angel hair pasta, prepared according to package instructions"
        ],
        "ingredients": [
          {
            "text": "1 tablespoon oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "oil",
            "weight": 14,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          },
          {
            "text": "1 1/2 cup panko",
            "quantity": 1.5,
            "measure": "cup",
            "food": "panko",
            "weight": 90,
            "foodCategory": "grains",
            "foodId": "food_a9tnk2lbj0xkckbytqnx1ajhpqbp",
            "image": null
          },
          {
            "text": "1/2 cup grated parmesan cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "parmesan cheese",
            "weight": 74.353125,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          },
          {
            "text": "1/4 teaspoon salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/4 teaspoon ground black pepper",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "black pepper",
            "weight": 0.575,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1/8 teaspoon garlic powder",
            "quantity": 0.125,
            "measure": "teaspoon",
            "food": "garlic powder",
            "weight": 0.3875,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_boq94r1a036492bdup9u1beyph0l",
            "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
          },
          {
            "text": "1 teaspoon dried italian seasoning",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "italian seasoning",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "2 large eggs",
            "quantity": 2,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 100,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "2 large boneless, skinless chicken breast halves",
            "quantity": 2,
            "measure": "half",
            "food": "boneless, skinless chicken breast",
            "weight": 217.5,
            "foodCategory": "Poultry",
            "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
            "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
          },
          {
            "text": "1/2 cup grated sharp cheddar cheese or grated mozzarella cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "cheddar cheese",
            "weight": 66,
            "foodCategory": "Cheese",
            "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
            "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
          },
          {
            "text": "2 cups purchased marinara sauce",
            "quantity": 2,
            "measure": "cup",
            "food": "marinara sauce",
            "weight": 528,
            "foodCategory": "canned soup",
            "foodId": "food_a7hv5mybkkrs3ub78yhtxafs67bu",
            "image": "https://www.edamam.com/food-img/08b/08b3bb49c006689a458a8b9c4a4e0057.jpg"
          },
          {
            "text": "4 servings angel hair pasta, prepared according to package instructions",
            "quantity": 4,
            "measure": "serving",
            "food": "angel hair pasta",
            "weight": 1200,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          }
        ],
        "calories": 6118.390125,
        "totalWeight": 2293.315625,
        "totalTime": 116,
        "cuisineType": [
          "mediterranean"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 6118.390125,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 99.64538593750002,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 34.6237216875,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.913065,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 29.21728721875,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 17.610497531249997,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 1004.0793118749999,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 952.744961875,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 51.33435000000001,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 65.13982125000001,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 276.6349159375,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 659.2151250000001,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4683.3015000000005,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1981.3793750000002,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 857.972,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 5363.8595000000005,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 25.297121875000002,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 25.1352396875,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3941.5084375,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 679.0112187500001,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 11.06465,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.5054243437500001,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.42291875,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 62.323053718749996,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 4.66494884375,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 376.59959375,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 376.59959375,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.8197875000000003,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.767765625,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 19.466153125,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 106.57482812500001,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 863.4466100000002,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Parmesan grissini",
        "image": "https://media.wincacademy.nl/react/images/final-project/parmesan-grissini.jpeg",
        "url": "https://www.goodfood.com.au/recipes/parmesan-grissini-20121001-33zi8",
        "yield": 6,
        "dietLabels": [
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Vegetarian",
          "Pescatarian",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 teaspoon (3 g) instant dried yeast",
          "a pinch of caster (superfine) sugar",
          "1 tablespoon extra virgin olive oil",
          "250 g (9 oz/2 cups) white strong flour",
          "60 g (2\xBC oz/\u2154 cup) grated parmesan cheese"
        ],
        "ingredients": [
          {
            "text": "1 teaspoon (3 g) instant dried yeast",
            "quantity": 3,
            "measure": "gram",
            "food": "yeast",
            "weight": 3,
            "foodCategory": "condiments and sauces",
            "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
            "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
          },
          {
            "text": "a pinch of caster (superfine) sugar",
            "quantity": 1,
            "measure": "pinch",
            "food": "sugar",
            "weight": 0.2604166669968817,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1 tablespoon extra virgin olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "extra virgin olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "250 g (9 oz/2 cups) white strong flour",
            "quantity": 250,
            "measure": "gram",
            "food": "flour",
            "weight": 250,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "60 g (2\xBC oz/\u2154 cup) grated parmesan cheese",
            "quantity": 60,
            "measure": "gram",
            "food": "parmesan cheese",
            "weight": 60,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          }
        ],
        "calories": 1275.297812501278,
        "totalWeight": 326.7604166669969,
        "totalTime": 90,
        "cuisineType": [
          "french"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "biscuits and cookies"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1275.297812501278,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 31.676299999999998,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 12.12761,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 14.705504999999999,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 2.7950150000000002,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 194.2039645836635,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 186.64696458366348,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 7.557,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 1.414895833662888,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0.25989583366288793,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 48.48819999999999,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 40.8,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 832.40260416667,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 748.93760416667,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 83.02,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 351.4902083333399,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 3.557830208333498,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 3.6382260416667,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 705.51,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 124.19999999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.009,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.6530999999999999,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.4192494791667294,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 4.4936,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.20959999999999995,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 139.39999999999998,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 139.39999999999998,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.7221,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.3,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.21925,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 9.909,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 47.4484520833334,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Easy Chili Almonds recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/easy-chili-almonds.jpeg",
        "url": "http://www.pumpkinnspice.com/2017/02/05/easy-chili-almonds/",
        "yield": 2,
        "dietLabels": [
          "High-Fiber",
          "Low-Carb"
        ],
        "healthLabels": [
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Mediterranean",
          "DASH",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 cups California Almonds",
          "1 tablespoon olive oil",
          "1 1/2 teaspoons chili powder",
          "1 tablespoon kosher salt",
          "2 tablespoons fresh cilantro, chopped"
        ],
        "ingredients": [
          {
            "text": "2 cups California Almonds",
            "quantity": 2,
            "measure": "cup",
            "food": "Almonds",
            "weight": 286,
            "foodCategory": "plant-based protein",
            "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
            "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
          },
          {
            "text": "1 tablespoon olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 1/2 teaspoons chili powder",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 4.050000000000001,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          },
          {
            "text": "1 tablespoon kosher salt",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "kosher salt",
            "weight": 14.562499999753793,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "2 tablespoons fresh cilantro, chopped",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "cilantro",
            "weight": 1.999999999966186,
            "foodCategory": "vegetables",
            "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
            "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
          }
        ],
        "calories": 1787.160999999992,
        "totalWeight": 307.0732646524249,
        "totalTime": 10,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1787.160999999992,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 156.88853999999984,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 12.837790999999994,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.042899999999999994,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 100.22114049999989,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 37.00658799999999,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 63.71924999999876,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 26.50384999999971,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 37.21539999999905,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.749594999999704,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 61.07672999999927,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 710.5504139999216,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 784.5455835165673,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 778.7697326465158,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2186.0318611720204,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.427276773352515,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9.108873264652289,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1388.7699999999836,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 66.80149999988606,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.5683499999908702,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.5977649999999773,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.2959899999999447,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 10.839559999999622,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.47960699999994966,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 128.21399999997902,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 128.21399999997902,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 76.83371999999916,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 18.60784999989518,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 14.895221529273739,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Korean Seasoned Potatoes (\uAC10\uC790 \uC870&",
        "image": "https://media.wincacademy.nl/react/images/final-project/korean-potatoes.webp",
        "url": "http://www.food.com/recipe/korean-seasoned-potatoes-44048-51088-51312-390718",
        "yield": 4,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Dairy-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 medium potatoes",
          "2 tablespoons soy sauce",
          "2 teaspoons sugar (or sweetener of your choice)",
          "1 teaspoon garlic, minced",
          "2 teaspoons sesame seeds",
          "1 -2 teaspoon sesame seed oil",
          "4 tablespoons scallions, minced"
        ],
        "ingredients": [
          {
            "text": "2 medium potatoes",
            "quantity": 2,
            "measure": "<unit>",
            "food": "potatoes",
            "weight": 426,
            "foodCategory": "vegetables",
            "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
            "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
          },
          {
            "text": "2 tablespoons soy sauce",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "soy sauce",
            "weight": 32,
            "foodCategory": "plant-based protein",
            "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
            "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
          },
          {
            "text": "2 teaspoons sugar (or sweetener of your choice)",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "sugar",
            "weight": 8.4,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1 teaspoon garlic, minced",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "garlic",
            "weight": 2.8,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "2 teaspoons sesame seeds",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "sesame seeds",
            "weight": 6.000000000304327,
            "foodCategory": "plant-based protein",
            "foodId": "food_bvxfnx8bwz2q3abs04kd6bbuf9w8",
            "image": "https://www.edamam.com/food-img/291/291b355a7a0948716243164427697279.jpg"
          },
          {
            "text": "1 -2 teaspoon sesame seed oil",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "oil",
            "weight": 6.75,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          },
          {
            "text": "4 tablespoons scallions, minced",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "scallions",
            "weight": 24,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          }
        ],
        "calories": 483.3900000017438,
        "totalWeight": 505.9500000003043,
        "totalTime": 20,
        "cuisineType": [
          "south east asian",
          "korean"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 483.3900000017438,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 10.35560000015116,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 1.058849500021172,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.026662500000000002,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 5.440138000057089,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.498037000066261,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 88.49240000007136,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 77.47360000003545,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.018800000035911,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.439200000000914,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 8.3832,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 12.891080000053957,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1788.3800000000335,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 142.6120000029672,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 148.2200000010682,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2038.376000001424,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 5.06680000004428,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 2.105720000023585,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 346.8440000019142,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 12,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 89.3076,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.41762000000240723,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.22781600000075167,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 5.60926000001374,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.4006800000024042,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 93.9040000002952,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 93.9040000002952,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 1.3703900000007612,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 62.63435,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 384.2389200000143,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Oven Baked Mexican Rice recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/mexican-rice.webp",
        "url": "http://keciasflavorbreakthrough.com/oven-baked-mexican-rice/",
        "yield": 4,
        "dietLabels": [],
        "healthLabels": [
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 cup whole grain rice",
          "2 cup chicken or vegetable broth",
          "1 cup tomato sauce",
          "6 scallions chopped, divided",
          "1 jalapeno pepper, seeds, veins removed and diced",
          "\xBD bell pepper diced",
          "1 clove garlic minced",
          "\xBD cup frozen sweet corn kernels, thawed",
          "1 tsp cilantro",
          "2 tsp cumin",
          "1 tsp chili powder",
          "2 tsp salt",
          "1/2 cup shredded cheddar or Mexican blend cheese"
        ],
        "ingredients": [
          {
            "text": "1 cup whole grain rice",
            "quantity": 1,
            "measure": "cup",
            "food": "whole grain rice",
            "weight": 190,
            "foodCategory": "grains",
            "foodId": "food_aro09r9avsklizbsberuoaegj0uh",
            "image": "https://www.edamam.com/food-img/c45/c453c255234a6f7f798d3f2aaa74bbcd.jpg"
          },
          {
            "text": "2 cup chicken or vegetable broth",
            "quantity": 2,
            "measure": "cup",
            "food": "vegetable broth",
            "weight": 454,
            "foodCategory": "Vegan products",
            "foodId": "food_bb2qjrjamst0vmam39stubtkmrs4",
            "image": "https://www.edamam.com/food-img/e61/e6184a8681b772e5198ef0ca1919e1b7.jpg"
          },
          {
            "text": "1 cup tomato sauce",
            "quantity": 1,
            "measure": "cup",
            "food": "tomato sauce",
            "weight": 245,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "6 scallions chopped, divided",
            "quantity": 6,
            "measure": "<unit>",
            "food": "scallions",
            "weight": 90,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          },
          {
            "text": "1 jalapeno pepper, seeds, veins removed and diced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "jalapeno pepper",
            "weight": 14,
            "foodCategory": "vegetables",
            "foodId": "food_b7txsnbadj6plsbq27zvwah80r6y",
            "image": "https://www.edamam.com/food-img/0df/0df9aa459870a6d477b0925c1fdb6d4c.jpg"
          },
          {
            "text": "\xBD bell pepper diced",
            "quantity": 0.5,
            "measure": "<unit>",
            "food": "bell pepper",
            "weight": 59.5,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1 clove garlic minced",
            "quantity": 1,
            "measure": "clove",
            "food": "garlic",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "\xBD cup frozen sweet corn kernels, thawed",
            "quantity": 0.5,
            "measure": "cup",
            "food": "corn kernels",
            "weight": 70.5,
            "foodCategory": "vegetables",
            "foodId": "food_bljsxw8akb9zr5aj5dahpay2gxsb",
            "image": "https://www.edamam.com/food-img/34c/34c09c7af85efb3a2025167cc38af8d1.jpg"
          },
          {
            "text": "1 tsp cilantro",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "cilantro",
            "weight": 0.33333333335024,
            "foodCategory": "vegetables",
            "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
            "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
          },
          {
            "text": "2 tsp cumin",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "cumin",
            "weight": 4.2,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
            "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
          },
          {
            "text": "1 tsp chili powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 2.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          },
          {
            "text": "2 tsp salt",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/2 cup shredded cheddar or Mexican blend cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Mexican blend cheese",
            "weight": 56,
            "foodCategory": "Cheese",
            "foodId": "food_ari4tsrahqllsdap5f2rkb5g60ng",
            "image": "https://www.edamam.com/food-img/8ee/8ee24c655103a961f2c48054b672a9db.jpg"
          }
        ],
        "calories": 1123.0241452052305,
        "totalWeight": 1192.4077378998313,
        "totalTime": 50,
        "cuisineType": [
          "mexican"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1123.0241452052305,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 24.70364773767342,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 10.97607104170667,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 7.384159168186714,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.43750068367334,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 192.94110791691398,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 175.34687236822018,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 17.594235548693803,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 17.516731647060148,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 36.73504390126037,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 53.2,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2765.5383320000396,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 612.3098797637601,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 393.489078675556,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2051.7486483513735,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.424348741549686,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 7.386391343193232,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 969.6826463092882,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 365.3858809112703,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 129.28132405812454,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.0456329733333447,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.6373697849600275,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 13.972286409053524,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.7363836725666917,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 160.10624152709713,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 186.89624152709712,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.6890773940000001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.28166164000000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.9083901328137545,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 211.47728196646577,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 922.7590471832152,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Swedish Pancakes",
        "image": "https://media.wincacademy.nl/react/images/final-project/swedish-pancakes.webp",
        "url": "http://scratchthiswithsandy.com/2014/01/19/swedish-pancakes/",
        "yield": 6,
        "dietLabels": [
          "Balanced",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Kidney-Friendly",
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "* 4 egg",
          "* 2 cup milk",
          "* 3/4 cup flour",
          "* 1 tbl sugar",
          "* pinch of salt",
          "* 2 tbl melted butter"
        ],
        "ingredients": [
          {
            "text": "* 4 egg",
            "quantity": 4,
            "measure": "<unit>",
            "food": "egg",
            "weight": 172,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "* 2 cup milk",
            "quantity": 2,
            "measure": "cup",
            "food": "milk",
            "weight": 488,
            "foodCategory": "Milk",
            "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
            "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
          },
          {
            "text": "* 3/4 cup flour",
            "quantity": 0.75,
            "measure": "cup",
            "food": "flour",
            "weight": 93.75,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "* 1 tbl sugar",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "sugar",
            "weight": 12.4999999997887,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "* pinch of salt",
            "quantity": 1,
            "measure": "pinch",
            "food": "salt",
            "weight": 0.380208333815447,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "* 2 tbl melted butter",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "butter",
            "weight": 28.4,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          }
        ],
        "calories": 1136.8929999991822,
        "totalWeight": 795.030208333604,
        "totalTime": 0,
        "cuisineType": [
          "nordic"
        ],
        "mealType": [
          "breakfast"
        ],
        "dishType": [
          "pancake"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1136.8929999991822,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 56.171189999999996,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 29.211744500000002,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.9963119999999999,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 16.3058465,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 5.489919499999999,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 108.71756499978872,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 106.18631499978872,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 2.53125,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 38.02556499978912,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 12.474999999789123,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 46.900975,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 749.6999999999999,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 606.5651460201889,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 668.8547500001135,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 90.63680208333815,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 988.9289166667011,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 4.266459687501484,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 4.707840208333794,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 858.546,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 693.9359999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.40719999999999995,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.66029099999996,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 1.747123,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.5101819999999999,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 130.467,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 130.467,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 3.77508,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 10.21,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.86273,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 4.24925,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 577.3256204166676,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Pizza with taleggio, prosciutto and pear",
        "image": "https://media.wincacademy.nl/react/images/final-project/pizza-pear.jpeg",
        "url": "https://www.goodfood.com.au/recipes/pizza-with-taleggio-prosciutto-and-pear-20111018-29wks",
        "yield": 12,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "500g flour",
          "1 tbsp instant yeast",
          "1 tsp salt",
          "300ml warm water",
          "2 tbsp olive oil",
          "For the topping",
          "1-2 tbsp olive oil",
          "300g taleggio",
          "8 slices prosciutto",
          "2 pears, finely sliced",
          "handful fresh rocket"
        ],
        "ingredients": [
          {
            "text": "500g flour",
            "quantity": 500,
            "measure": "gram",
            "food": "flour",
            "weight": 500,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "1 tbsp instant yeast",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "yeast",
            "weight": 12,
            "foodCategory": "condiments and sauces",
            "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
            "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
          },
          {
            "text": "1 tsp salt",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "300ml warm water",
            "quantity": 300,
            "measure": "milliliter",
            "food": "water",
            "weight": 300,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 tbsp olive oil",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 27,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1-2 tbsp olive oil",
            "quantity": 1.5,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 20.25,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "300g taleggio",
            "quantity": 300,
            "measure": "gram",
            "food": "taleggio",
            "weight": 300,
            "foodCategory": "Cheese",
            "foodId": "food_b6s9dpea421339bjgiudnaoxh7nl",
            "image": "https://www.edamam.com/food-img/419/419fc950e8f2a589a11d63efb28b8bef.jpg"
          },
          {
            "text": "8 slices prosciutto",
            "quantity": 8,
            "measure": "slice",
            "food": "prosciutto",
            "weight": 120,
            "foodCategory": "cured meats",
            "foodId": "food_au1dzjfa990c8yap79k4nawq65y9",
            "image": "https://www.edamam.com/food-img/802/8029e7b80cce92694182b85a1ebd1822.jpg"
          },
          {
            "text": "2 pears, finely sliced",
            "quantity": 2,
            "measure": "<unit>",
            "food": "pears",
            "weight": 372.8888888888889,
            "foodCategory": "fruit",
            "foodId": "food_bq6stkiaxkwhxia9q4v7wanjnew0",
            "image": "https://www.edamam.com/food-img/65a/65aec51d264db28bbe27117c9fdaaca7.jpg"
          },
          {
            "text": "handful fresh rocket",
            "quantity": 1,
            "measure": "handful",
            "food": "rocket",
            "weight": 2.5,
            "foodCategory": "vegetables",
            "foodId": "food_a8z1kzrawhksuzav2g1irb6zf4zc",
            "image": "https://www.edamam.com/food-img/fa7/fa761a311efc0ec361a5eba4ed71870e.jpeg"
          }
        ],
        "calories": 3623.8616666666667,
        "totalWeight": 1654.638888888889,
        "totalTime": 120,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 3623.8616666666667,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 136.36574444444446,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 56.61658555555556,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 61.39480416666666,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 10.733648055555555,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 445.1186277777778,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 416.7910722222223,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 28.327555555555556,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 39.137916666666676,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 150.66970000000003,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 300,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5793.4688888888895,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1301.6325,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 236.75722222222225,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2264.848611111111,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 9.404700000000002,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 15.379438888888888,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2085.086666666667,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 729.7038888888889,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 16.445222222222224,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.729046666666667,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.533501111111111,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 18.229176111111112,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.6949627777777776,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 631.3272222222222,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 631.3272222222222,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.9644,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.2800000000000002,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 8.504591666666666,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 55.11461111111112,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 897.795861111111,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Strawberry Cheesecake recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/strawberry-cheesecake.webp",
        "url": "http://allrecipes.com/recipe/222588/strawberry-cheesecake/",
        "yield": 12,
        "dietLabels": [],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Gluten",
          "Wheat",
          "Sulfites"
        ],
        "ingredientLines": [
          "1 1/4 cups graham cracker crumbs",
          "1/4 cup white sugar",
          "2 teaspoons ground cinnamon",
          "1/3 cup butter, melted",
          "2 (10 ounce) packages frozen sweetened sliced strawberries, thawed and drained",
          "1 tablespoon cornstarch",
          "3 (8 ounce) packages cream cheese, softened",
          "1 (14 ounce) can sweetened condensed milk",
          "1/4 cup lemon juice",
          "1/2 teaspoon vanilla extract",
          "3 eggs",
          "1 tablespoon water (optional)"
        ],
        "ingredients": [
          {
            "text": "1 1/4 cups graham cracker crumbs",
            "quantity": 1.25,
            "measure": "cup",
            "food": "cracker crumbs",
            "weight": 65,
            "foodCategory": "crackers",
            "foodId": "food_bngjmfmb13ckgcaefl7gta8r5zx5",
            "image": "https://www.edamam.com/food-img/533/5335c3d911793785012a46379a6ad2d3.jpg"
          },
          {
            "text": "1/4 cup white sugar",
            "quantity": 0.25,
            "measure": "cup",
            "food": "white sugar",
            "weight": 50,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "2 teaspoons ground cinnamon",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "ground cinnamon",
            "weight": 5.2,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_atjxtznauw5zabaixm24xa787onz",
            "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
          },
          {
            "text": "1/3 cup butter, melted",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "butter",
            "weight": 75.66666666666666,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "2 (10 ounce) packages frozen sweetened sliced strawberries, thawed and drained",
            "quantity": 20,
            "measure": "ounce",
            "food": "strawberries",
            "weight": 566.9904625,
            "foodCategory": "fruit",
            "foodId": "food_b4s2ibkbrrucmbabbaxhfau8ay42",
            "image": "https://www.edamam.com/food-img/00c/00c8851e401bf7975be7f73499b4b573.jpg"
          },
          {
            "text": "1 tablespoon cornstarch",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "cornstarch",
            "weight": 7.999999999864745,
            "foodCategory": null,
            "foodId": "food_bevnfkfbvjm45pbbgj9nsb3ypntm",
            "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
          },
          {
            "text": "3 (8 ounce) packages cream cheese, softened",
            "quantity": 24,
            "measure": "ounce",
            "food": "cream cheese",
            "weight": 680.388555,
            "foodCategory": "Cheese",
            "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
            "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
          },
          {
            "text": "1 (14 ounce) can sweetened condensed milk",
            "quantity": 14,
            "measure": "ounce",
            "food": "sweetened condensed milk",
            "weight": 396.89332375000004,
            "foodCategory": "Milk",
            "foodId": "food_a89byenbz1jssabxmx7i6aa77jz1",
            "image": "https://www.edamam.com/food-img/bc9/bc97e9aa15ccef74dbad4d6267e30e3f.jpg"
          },
          {
            "text": "1/4 cup lemon juice",
            "quantity": 0.25,
            "measure": "cup",
            "food": "lemon juice",
            "weight": 61,
            "foodCategory": "100% juice",
            "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
            "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
          },
          {
            "text": "1/2 teaspoon vanilla extract",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "vanilla extract",
            "weight": 2.1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
            "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
          },
          {
            "text": "3 eggs",
            "quantity": 3,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 129,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "1 tablespoon water (optional)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "water",
            "weight": 14.786764781,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          }
        ],
        "calories": 5097.185375336985,
        "totalWeight": 2055.0257726975315,
        "totalTime": 645,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "desserts"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 5097.185375336985,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 360.2325051190833,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 199.67873967423336,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 3.2287733333333333,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 93.42800230728746,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 25.31875591992914,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 393.92277982837663,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 378.0717705783778,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 15.851009249998782,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 323.13166435175,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 49.9,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 97.1447459855413,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1525.9344739083335,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 3659.6764554620613,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 2110.1749002934275,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 274.24919523113937,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 3641.375844637496,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.102928053707698,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 10.184514197728019,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2305.5836883874827,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 3514.3330755000006,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 367.5142183675,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.9711577467083332,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.5607334889666666,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 7.099651569875,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.0063791067374999,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 427.49071766249995,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 335.1907176625,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 54.599999999999994,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.724035345333334,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 8.5911179775,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 9.544035135416665,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 86.93748487916668,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1181.137699732458,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Mushroom and Spinach Ravioli",
        "image": "https://media.wincacademy.nl/react/images/final-project/spinach-ravioli.jpeg",
        "url": "http://ourlifetastesgood.blogspot.com/2012/07/mushroom-and-spinach-ravioli-with-chive.html",
        "yield": 2,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 teaspoon olive oil",
          "1 1/2 teaspoons water (or more as needed)",
          "2 eggs",
          "2 cups all-purpose flour (or more as needed)",
          "1/4 teaspoon salt",
          "1 teaspoon olive oil",
          "1 clove garlic, minced",
          "1/2 chopped onion",
          "1 (8 ounce) package fresh mushrooms, chopped",
          "4 ounces cream cheese softened",
          "1/3 cup grated Parmesan Cheese",
          "1/2 cup Mozzarella Cheese",
          "1/2 cup frozen spinach, thawed and drained",
          "1 tablespoon chopped fresh chives",
          "1 tablespoon fresh parsley",
          "1/2 teaspoon ground cayenne pepper",
          "salt",
          "pepper",
          "1 egg white beaten",
          "3 tablespoons unsalted butter",
          "1 1/2 teaspoons chopped fresh chives"
        ],
        "ingredients": [
          {
            "text": "1 teaspoon olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 1/2 teaspoons water (or more as needed)",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "water",
            "weight": 7.393382391,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 eggs",
            "quantity": 2,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 86,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "2 cups all-purpose flour (or more as needed)",
            "quantity": 2,
            "measure": "cup",
            "food": "all-purpose flour",
            "weight": 250,
            "foodCategory": "grains",
            "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
            "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
          },
          {
            "text": "1/4 teaspoon salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 clove garlic, minced",
            "quantity": 1,
            "measure": "clove",
            "food": "garlic",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1/2 chopped onion",
            "quantity": 0.5,
            "measure": "<unit>",
            "food": "onion",
            "weight": 62.5,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1 (8 ounce) package fresh mushrooms, chopped",
            "quantity": 8,
            "measure": "ounce",
            "food": "mushrooms",
            "weight": 226.796185,
            "foodCategory": "vegetables",
            "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
            "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
          },
          {
            "text": "4 ounces cream cheese softened",
            "quantity": 4,
            "measure": "ounce",
            "food": "cream cheese",
            "weight": 113.3980925,
            "foodCategory": "Cheese",
            "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
            "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
          },
          {
            "text": "1/3 cup grated Parmesan Cheese",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "Parmesan Cheese",
            "weight": 49.56875,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          },
          {
            "text": "1/2 cup Mozzarella Cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Mozzarella Cheese",
            "weight": 129.9375,
            "foodCategory": "Cheese",
            "foodId": "food_acjhpy7bkl7a9qboztipaa2i9e4m",
            "image": "https://www.edamam.com/food-img/92d/92d92d4a4dfe8c025cea407c9ce764c3.jpg"
          },
          {
            "text": "1/2 cup frozen spinach, thawed and drained",
            "quantity": 0.5,
            "measure": "cup",
            "food": "spinach",
            "weight": 15,
            "foodCategory": "vegetables",
            "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
            "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
          },
          {
            "text": "1 tablespoon chopped fresh chives",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "chives",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
            "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
          },
          {
            "text": "1 tablespoon fresh parsley",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "parsley",
            "weight": 3.8,
            "foodCategory": "vegetables",
            "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
            "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
          },
          {
            "text": "1/2 teaspoon ground cayenne pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "cayenne pepper",
            "weight": 0.9,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8iooz3aris8gba605l07brngnrx",
            "image": "https://www.edamam.com/food-img/374/3742b9434a0fb66a45e0dd6d227ba669.jpg"
          },
          {
            "text": "salt",
            "quantity": 0,
            "measure": null,
            "food": "salt",
            "weight": 6.193763459345999,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "pepper",
            "quantity": 0,
            "measure": null,
            "food": "pepper",
            "weight": 3.0968817296729996,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 egg white beaten",
            "quantity": 1,
            "measure": "<unit>",
            "food": "egg white",
            "weight": 26.4,
            "foodCategory": "Eggs",
            "foodId": "food_a7hurbpb20zs42bnwg2p8bca3ihs",
            "image": "https://www.edamam.com/food-img/b30/b304a020501418f9a63cf7f9359bc99d.jpg"
          },
          {
            "text": "3 tablespoons unsalted butter",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 42.599999999999994,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "1 1/2 teaspoons chopped fresh chives",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "chives",
            "weight": 1.5,
            "foodCategory": "vegetables",
            "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
            "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
          }
        ],
        "calories": 2523.210560191479,
        "totalWeight": 1034.356009510093,
        "totalTime": 75,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "snack"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2523.210560191479,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 139.10042037038735,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 76.66771694127705,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.4291079999999998,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 41.58860721698228,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.370521302387136,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 218.72712386187592,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 206.98745093426865,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.739672927607268,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 14.017192025319906,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 101.38330313846303,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 685.5990267500001,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2404.2923580980423,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1609.214281027642,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 178.172863735545,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1740.9563865685082,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 16.68506486148633,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9.56972100746163,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1691.469395282883,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1318.3283641170117,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 22.894819885000004,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.306116973118047,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.3985371664384116,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 23.86636554774516,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.8420161031083486,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 888.1944240190444,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 233.19442401904442,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 385,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.77916245525,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 4.3905121750000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.1493016567386,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 167.2074463239747,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 561.1935454974051,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Cajun Pork Pinwheels",
        "image": "https://media.wincacademy.nl/react/images/final-project/cayun-pork-pinwheel.jpeg",
        "url": "https://www.bigoven.com/recipe/cajun-pork-pinwheels/158806",
        "yield": 6,
        "dietLabels": [
          "High-Protein",
          "Low-Carb",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Keto-Friendly",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 pork tenderloins ; about 1 pound each",
          "1 tablespoon Vegetable oil",
          "1 cup red bell pepper ; finely chopped",
          "1/2 cup Onion ; finely chopped",
          "1/2 cup celery ; finely chopped",
          "1 teaspoon dried thyme leaves ; crushed",
          "1/4 teaspoon Garlic salt",
          "1/2 teaspoon Ground red pepper",
          "1/2 teaspoon Paprika",
          "1 tablespoon fennel seed ; crushed",
          "1 teaspoon lemon-pepper seasoning ; (up to 3 teaspoons)"
        ],
        "ingredients": [
          {
            "text": "2 pork tenderloins ; about 1 pound each",
            "quantity": 2,
            "measure": "pound",
            "food": "pork tenderloins",
            "weight": 907.18474,
            "foodCategory": "meats",
            "foodId": "food_bgd2x5qbzpcbz0apfim52a8wr97x",
            "image": "https://www.edamam.com/food-img/4df/4dfc18749ffa490e3d4daf9dd2ea4d34.jpg"
          },
          {
            "text": "1 tablespoon Vegetable oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "Vegetable oil",
            "weight": 14,
            "foodCategory": "Oils",
            "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
            "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
          },
          {
            "text": "1 cup red bell pepper ; finely chopped",
            "quantity": 1,
            "measure": "cup",
            "food": "red bell pepper",
            "weight": 149,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1/2 cup Onion ; finely chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Onion",
            "weight": 80,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/2 cup celery ; finely chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "celery",
            "weight": 50.5,
            "foodCategory": "vegetables",
            "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
            "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
          },
          {
            "text": "1 teaspoon dried thyme leaves ; crushed",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "dried thyme",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "1/4 teaspoon Garlic salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "Garlic salt",
            "weight": 0.775,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_boq94r1a036492bdup9u1beyph0l",
            "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
          },
          {
            "text": "1/2 teaspoon Ground red pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "red pepper",
            "weight": 1.5520833334120565,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1/2 teaspoon Paprika",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "Paprika",
            "weight": 1.15,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
            "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
          },
          {
            "text": "1 tablespoon fennel seed ; crushed",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "fennel seed",
            "weight": 5.8,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a7gzoswb5qrepsa8xcla8bxm5wla",
            "image": "https://www.edamam.com/food-img/a40/a4059150e503052ae5a390af6e666873.jpg"
          },
          {
            "text": "1 teaspoon lemon-pepper seasoning ; (up to 3 teaspoons)",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "seasoning",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aj7w3xab0epj7cbgkbkpwadysovd",
            "image": "https://www.edamam.com/food-img/c23/c23e20823b442067307aa436969358f1.jpg"
          }
        ],
        "calories": 1277.8849994333577,
        "totalWeight": 1212.4618233334124,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1277.8849994333577,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 46.243549005900235,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 11.316188002930023,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.41763718108000003,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 22.405505878150002,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 7.625709285193389,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 23.89075312500475,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 15.242159375003098,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 8.648593750001652,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 10.573730000003305,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 182.1281044945008,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 560.18657695,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 505.07734489333643,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 207.30192601333886,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 294.8478858100095,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 4104.8568726235,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 12.403798837433673,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 17.090634614433537,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2208.340013956687,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 280.087270833457,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 201.65816041676715,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 8.631749814460042,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.1252729659434006,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 59.261679644134105,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 7.2544416604502295,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 108.37170833336955,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 108.37170833336955,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.481492615600001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.585476509,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 7.9135315232679115,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 52.6461020833372,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 905.3225831408392,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Fire Roasted Tomato Soup recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/tomato-soup.jpeg",
        "url": "http://therecipecritic.com/2013/02/fire-roasted-tomato-soup/",
        "yield": 8,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Mediterranean",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 medium onion, diced",
          "3 cloves garlic, minced",
          "1 T olive oil",
          "8 oz can tomato sauce",
          "6 oz can tomato paste",
          "28 oz can whole tomatoes",
          "2 14 oz cans fire roasted diced tomatoes",
          "2 cups water",
          "2 cups chicken broth",
          "2 tsp salt",
          "1/2 tsp pepper",
          "1 1/2 cups heavy cream",
          "1/4 cup parmesan cheese"
        ],
        "ingredients": [
          {
            "text": "1 medium onion, diced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "onion",
            "weight": 110,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "3 cloves garlic, minced",
            "quantity": 3,
            "measure": "clove",
            "food": "garlic",
            "weight": 9,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 T olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "8 oz can tomato sauce",
            "quantity": 8,
            "measure": "ounce",
            "food": "tomato sauce",
            "weight": 226.796185,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "6 oz can tomato paste",
            "quantity": 6,
            "measure": "ounce",
            "food": "tomato paste",
            "weight": 170.09713875,
            "foodCategory": "canned vegetables",
            "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
            "image": "https://www.edamam.com/food-img/aef/aef4e029118da71388e526086506053a.jpg"
          },
          {
            "text": "28 oz can whole tomatoes",
            "quantity": 28,
            "measure": "ounce",
            "food": "whole tomatoes",
            "weight": 793.7866475000001,
            "foodCategory": "canned vegetables",
            "foodId": "food_bnmkkwqa9h2p87bz171eoby0bsey",
            "image": "https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg"
          },
          {
            "text": "2 14 oz cans fire roasted diced tomatoes",
            "quantity": 28,
            "measure": "ounce",
            "food": "diced tomatoes",
            "weight": 793.7866475000001,
            "foodCategory": "canned vegetables",
            "foodId": "food_bnmkkwqa9h2p87bz171eoby0bsey",
            "image": "https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg"
          },
          {
            "text": "2 cups water",
            "quantity": 2,
            "measure": "cup",
            "food": "water",
            "weight": 474,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 cups chicken broth",
            "quantity": 2,
            "measure": "cup",
            "food": "chicken broth",
            "weight": 480,
            "foodCategory": "canned soup",
            "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
            "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
          },
          {
            "text": "2 tsp salt",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/2 tsp pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "pepper",
            "weight": 1.45,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 1/2 cups heavy cream",
            "quantity": 1.5,
            "measure": "cup",
            "food": "heavy cream",
            "weight": 357,
            "foodCategory": "Dairy",
            "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
            "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
          },
          {
            "text": "1/4 cup parmesan cheese",
            "quantity": 0.25,
            "measure": "cup",
            "food": "parmesan cheese",
            "weight": 37.1765625,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          }
        ],
        "calories": 2098.9340903750003,
        "totalWeight": 3463.8814151342513,
        "totalTime": 55,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "soup"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2098.9340903750003,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 157.603754438375,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 91.36432640115001,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 47.8967418560875,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.816557503037501,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 141.57510001012503,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 98.60943194137502,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 42.96566806875,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 91.87988720825001,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 57.249755738250016,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 528.7700625,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 8040.563791133251,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1367.2937993322207,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 345.2976253638426,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 6453.095646035741,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 18.285999876568027,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.353450237759252,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1129.2093990125002,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 2046.1006295250002,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 267.21124150624996,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 9.616240673275,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.2471676422875,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 26.833612026075002,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 3.018696610325001,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 230.128036275,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 230.128036275,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.0887187500000002,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.6848828125,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 24.64674290825,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 85.70992423,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 3072.464483754519,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Homemade Sweet Spaghetti Sauce",
        "image": "https://media.wincacademy.nl/react/images/final-project/sweet-spaghetti-sauce.jpeg",
        "url": "https://www.recipezazz.com/recipe/homemade-sweet-spaghetti-sauce-4752",
        "yield": 8,
        "dietLabels": [],
        "healthLabels": [
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 tablespoon olive oil (or coconut oil)",
          "1 to 2 garlic cloves, minced",
          "1 pound ground turkey (or 1 pound lean ground beef, optional)",
          "1 can (32 ounce) tomato sauce (no-salt-added)",
          "8 ounces red wine",
          "24 ounces water (or use all water and no wine)",
          "3 cans (6 ounce) tomato paste",
          "3 to 4 tablespoons instant minced onion",
          "1/4 cup granulated sugar (more less to your taste)",
          "1/2 to 1 teaspoon salt (or 1/2 - 1 teaspoon salt substitute)",
          "1 teaspoon dried basil (see note)",
          "1/2 teaspoon dried oregano",
          "1 teaspoon onion powder"
        ],
        "ingredients": [
          {
            "text": "1 tablespoon olive oil (or coconut oil)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 to 2 garlic cloves, minced",
            "quantity": 1.5,
            "measure": "clove",
            "food": "garlic",
            "weight": 4.5,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 pound ground turkey (or 1 pound lean ground beef, optional)",
            "quantity": 1,
            "measure": "pound",
            "food": "ground turkey",
            "weight": 453.59237,
            "foodCategory": "Poultry",
            "foodId": "food_av7gav4bs6txmfb85t0ruapws8if",
            "image": "https://www.edamam.com/food-img/c1a/c1a1663042ef7f4d6d50f1f6418aaac6.jpg"
          },
          {
            "text": "1 can (32 ounce) tomato sauce (no-salt-added)",
            "quantity": 32,
            "measure": "ounce",
            "food": "tomato sauce",
            "weight": 907.18474,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "8 ounces red wine",
            "quantity": 8,
            "measure": "ounce",
            "food": "red wine",
            "weight": 226.796185,
            "foodCategory": "wines",
            "foodId": "food_b5q0xv2ba8la5hbzdfzdgaca3fwu",
            "image": "https://www.edamam.com/food-img/82b/82b8d0db2d5c38fc7498a657c0afc4ee.JPG"
          },
          {
            "text": "24 ounces water (or use all water and no wine)",
            "quantity": 24,
            "measure": "ounce",
            "food": "water",
            "weight": 680.388555,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "3 cans (6 ounce) tomato paste",
            "quantity": 6,
            "measure": "ounce",
            "food": "tomato paste",
            "weight": 170.09713875,
            "foodCategory": "canned vegetables",
            "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
            "image": "https://www.edamam.com/food-img/aef/aef4e029118da71388e526086506053a.jpg"
          },
          {
            "text": "3 to 4 tablespoons instant minced onion",
            "quantity": 3.5,
            "measure": "tablespoon",
            "food": "onion",
            "weight": 35,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/4 cup granulated sugar (more less to your taste)",
            "quantity": 0.25,
            "measure": "cup",
            "food": "granulated sugar",
            "weight": 50,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1/2 to 1 teaspoon salt (or 1/2 - 1 teaspoon salt substitute)",
            "quantity": 0.75,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 4.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon dried basil (see note)",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "dried basil",
            "weight": 0.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_abrithza96sev8ae5za0paqf42o0",
            "image": "https://www.edamam.com/food-img/49a/49a878702f9b654e1a965f2f2618a341.jpg"
          },
          {
            "text": "1/2 teaspoon dried oregano",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "dried oregano",
            "weight": 0.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bkkw6v3bdf0sqiazmzyuiax7i8jr",
            "image": "https://www.edamam.com/food-img/1b0/1b0eaffb1c261606e0d82fed8e9747a7.jpg"
          },
          {
            "text": "1 teaspoon onion powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "onion powder",
            "weight": 2.4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bmv8z27b1o25vcbu41ooyawd2zj4",
            "image": "https://www.edamam.com/food-img/1e7/1e73e6f5dd96bb233abc0fcc05fb0ec8.jpg"
          }
        ],
        "calories": 1565.9824562250003,
        "totalWeight": 2544.6589887499995,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "snack",
          "lunch/dinner"
        ],
        "dishType": [
          "condiments and sauces"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1565.9824562250003,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 51.898536314125,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 11.633647450949999,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.4672001411,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 22.346231165462502,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 12.825390744512502,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 143.58068906012502,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 121.46823527137502,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 22.112453788749995,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 106.04028459075,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 49.9,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 108.69633054550003,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 312.97873530000004,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5948.538027925,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 362.68973530000005,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 359.52818212500006,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 5900.798736575001,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 20.922087522749997,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 14.389442611625002,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1372.8893675125003,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 420.25694225000007,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 105.32690518625,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.6680063943000001,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.6646896178375001,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 45.40809048785001,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 4.07339265715,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 147.753711,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 147.753711,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.535923700000001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.8143694800000003,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 22.906400355250003,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 69.2513312775,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2191.2693134367505,
            "unit": "g"
          }
        }
      }
    }
  ]
}`),$j=fS({displayName:"ChevronDownIcon",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),Lj=fS({displayName:"HamburgerIcon",viewBox:"0 0 24 24",d:"M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"}),hs={primary:{gold:"#FFD700",goldHover:"#FFC107",red:"#E53E3E",redDark:"#C53030",redDarker:"#9B2C2C"},white:"#FFFFFF",black:"#000000",background:{main:"#FFD700",card:"#FFFFFF"}},Dj={hero:"linear-gradient(135deg, #E53E3E 0%, #C53030 50%, #9B2C2C 100%)",redGlass:"rgba(229, 62, 62, 0.8)"},ti={navbar:{height:{mobile:"120px",desktop:"80px"}},card:{height:"450px",imageHeight:"220px"},menu:{dropdown:{maxHeight:"500px",maxWidth:"300px"}}},Xm={card:"0 0 15px rgba(255, 215, 0, 0.4)",cardHover:"0 0 25px rgba(255, 215, 0, 0.7)",navbar:"0 4px 16px rgba(0, 0, 0, 0.1)",logo:"drop-shadow(4px 4px 8px rgba(255, 255, 255, 0.9))"},Nj={navbar:1e3,modal:2e3,tooltip:3e3},Bj=[{emoji:"\u{1F373}",label:"Breakfast",type:"search",value:"breakfast"},{emoji:"\u{1F96A}",label:"Lunch",type:"search",value:"lunch"},{emoji:"\u{1F37D}\uFE0F",label:"Dinner",type:"search",value:"dinner"},{emoji:"\u{1F370}",label:"Desserts",type:"search",value:"dessert"},{emoji:"\u{1F379}",label:"Drinks",type:"search",value:"drink"},{emoji:"\u{1F372}",label:"Soup",type:"search",value:"soup"},{emoji:"\u{1F35D}",label:"Pasta",type:"search",value:"pasta"},{emoji:"\u{1F957}",label:"Salad",type:"search",value:"salad"},{emoji:"\u{1F331}",label:"Vegetarian",type:"diet",value:"Vegetarian"},{emoji:"\u{1F96C}",label:"Vegan",type:"diet",value:"Vegan"},{emoji:"\u{1F951}",label:"Keto",type:"search",value:"keto"},{emoji:"\u{1F983}",label:"Thanksgiving",type:"search",value:"thanksgiving"},{emoji:"\u{1F384}",label:"Christmas",type:"search",value:"christmas"},{emoji:"\u{1F383}",label:"Halloween",type:"search",value:"halloween"},{emoji:"\u{1F32E}",label:"Mexican",type:"category",value:"mexican"},{emoji:"\u{1F355}",label:"Italian",type:"category",value:"italian"},{emoji:"\u{1F961}",label:"Chinese",type:"category",value:"chinese"},{emoji:"\u{1F35B}",label:"Indian",type:"category",value:"indian"},{emoji:"\u{1F35C}",label:"Thai",type:"category",value:"thai"},{emoji:"\u{1F371}",label:"Japanese",type:"category",value:"japanese"}],w0=({searchTerm:e,setSearchTerm:t,selectedDiet:n,setSelectedDiet:r,selectedCategory:o,setSelectedCategory:a})=>{const{isOpen:i,onOpen:s,onClose:l}=ow(),u=()=>{t(""),r(""),a("")};return N(Q,{as:"header",bg:"rgba(229, 62, 62, 0.8)",backdropFilter:"blur(10px)",sx:{WebkitBackdropFilter:"blur(10px)"},px:{base:2,lg:6},py:{base:2,md:2.5},boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)",position:"fixed",top:"0",left:"0",right:"0",zIndex:Nj.navbar,borderBottom:"1px solid white",children:[N(yn,{align:"center",justify:"space-between",display:{base:"none",lg:"flex"},position:"relative",children:[x(Js,{to:"/",onClick:u,children:x(fl,{src:"/Recipes/recipes-logo.svg",alt:"Recipes Logo",h:"60px",filter:"drop-shadow(4px 4px 8px rgba(255, 255, 255, 0.9))"})}),x(qc,{value:e,onChange:c=>t(c.target.value),placeholder:"Search recipes\u2026",size:"sm",maxW:ti.menu.dropdown.maxWidth,position:"absolute",left:"50%",transform:"translateX(-50%)",bg:"white",_placeholder:{color:"#E53E3E",fontWeight:"bold"},borderWidth:"2px",borderColor:"#FFD700","aria-label":"Search recipes by name"}),x(Q,{mr:16,children:N(TS,{children:[x(_S,{as:ut,size:"sm",bg:"#FFD700",color:"#E53E3E",rightIcon:x($j,{}),"aria-label":"Browse recipe categories",children:o||"Categories"}),N(AS,{bg:"white",maxH:ti.menu.dropdown.maxHeight,overflowY:"auto",py:2,border:"2px solid #FFD700",boxShadow:"0 8px 24px rgba(229, 62, 62, 0.15)",children:[x(Z,{onClick:()=>{a(""),t(""),r("")},bg:"#FFD700",color:"#E53E3E",fontWeight:"bold",_hover:{bg:"#FFC107"},mb:2,mx:2,borderRadius:"md",children:"\u2728 All Recipes"}),x(Z,{fontWeight:"bold",isDisabled:!0,color:"#E53E3E",fontSize:"sm",bg:"rgba(255, 215, 0, 0.1)",px:3,py:2,mb:1,children:"\u{1F30D} WORLD CUISINES"}),x(Z,{onClick:()=>{a("mexican"),t(""),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F32E} Mexican"}),x(Z,{onClick:()=>{a("italian"),t(""),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F355} Italian"}),x(Z,{onClick:()=>{a("indian"),t(""),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F35B} Indian"}),x(Z,{onClick:()=>{a("thai"),t(""),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F35C} Thai"}),x(Z,{onClick:()=>{a("korean"),t(""),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F958} Korean"}),x(Z,{onClick:()=>{a("chinese"),t(""),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F961} Chinese"}),x(Z,{onClick:()=>{a("japanese"),t(""),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F371} Japanese"}),x(Z,{onClick:()=>{a("french"),t(""),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F950} French"}),x(Z,{onClick:()=>{a("american"),t(""),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F354} American"}),x(Z,{fontWeight:"bold",isDisabled:!0,color:"#E53E3E",fontSize:"sm",bg:"rgba(255, 215, 0, 0.1)",px:3,py:2,mt:2,mb:1,children:"\u{1F525} POPULAR"}),x(Z,{onClick:()=>{a(""),t("soup"),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F372} Soup Recipes"}),x(Z,{onClick:()=>{a(""),t("chili"),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F336}\uFE0F Chili Recipes"}),x(Z,{onClick:()=>{a(""),t("pasta"),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F35D} Pasta Recipes"}),x(Z,{onClick:()=>{a(""),t("salad"),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F957} Salad Recipes"}),x(Z,{onClick:()=>{a(""),t("bread"),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F35E} Bread Recipes"}),x(Z,{onClick:()=>{a(""),t("cookie"),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F36A} Cookie Recipes"}),x(Z,{fontWeight:"bold",isDisabled:!0,color:"#E53E3E",fontSize:"sm",bg:"rgba(255, 215, 0, 0.1)",px:3,py:2,mt:2,mb:1,children:"\u{1F957} HEALTHY & DIET"}),x(Z,{onClick:()=>{a(""),t("keto"),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F951} Keto Recipes"}),x(Z,{onClick:()=>{a(""),t("healthy"),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F49A} Healthy Recipes"}),x(Z,{onClick:()=>{a(""),r("Vegetarian"),t("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F331} Vegetarian Recipes"}),x(Z,{onClick:()=>{a(""),r("Vegan"),t("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F96C} Vegan Recipes"}),x(Z,{onClick:()=>{a(""),r("Pescatarian"),t("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F41F} Pescatarian Recipes"}),x(Z,{onClick:()=>{a(""),t("gluten free"),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F33E} Gluten-Free Recipes"}),x(Z,{fontWeight:"bold",isDisabled:!0,color:"#E53E3E",fontSize:"sm",bg:"rgba(255, 215, 0, 0.1)",px:3,py:2,mt:2,mb:1,children:"\u{1F389} HOLIDAYS"}),x(Z,{onClick:()=>{a(""),t("thanksgiving"),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F983} Thanksgiving"}),x(Z,{onClick:()=>{a(""),t("christmas"),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F384} Christmas"}),x(Z,{onClick:()=>{a(""),t("halloween"),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F383} Halloween"}),x(Z,{onClick:()=>{a(""),t("easter"),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F430} Easter"}),x(Z,{onClick:()=>{a(""),t("valentine"),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F49D} Valentine's Day"}),x(Z,{fontWeight:"bold",isDisabled:!0,color:"#E53E3E",fontSize:"sm",bg:"rgba(255, 215, 0, 0.1)",px:3,py:2,mt:2,mb:1,children:"\u{1F37D}\uFE0F MEAL TYPES"}),x(Z,{onClick:()=>{a(""),t("breakfast"),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F373} Breakfast"}),x(Z,{onClick:()=>{a(""),t("lunch"),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F96A} Lunch"}),x(Z,{onClick:()=>{a(""),t("dinner"),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F37D}\uFE0F Dinner"}),x(Z,{onClick:()=>{a(""),t("dessert"),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F370} Desserts"}),x(Z,{onClick:()=>{a(""),t("drink"),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F379} Drinks"}),x(Z,{onClick:()=>{a(""),t("snack"),r("")},_hover:{bg:"rgba(255, 215, 0, 0.2)"},pl:6,children:"\u{1F37F} Snacks"})]})]})})]}),N(Q,{display:{base:"block",lg:"none"},children:[N(yn,{align:"center",justify:"center",mb:2,position:"relative",children:[x(Js,{to:"/",onClick:u,children:x(Q,{as:"img",src:"/Recipes/recipes-logo.svg",alt:"Recipes",h:{base:"70px",sm:"75px"},cursor:"pointer",filter:"drop-shadow(4px 4px 8px rgba(255, 255, 255, 0.9))"})}),x(F3,{icon:x(Lj,{}),onClick:s,bg:"#FFD700",color:"#E53E3E",size:"sm","aria-label":"Open menu",position:"absolute",right:"0"})]}),x(qc,{value:e,onChange:c=>t(c.target.value),placeholder:"Search recipes\u2026",h:"38px",fontSize:"16px",bg:"white",_placeholder:{color:"#E53E3E",fontWeight:"bold"},borderWidth:"2px",borderColor:"#FFD700"})]}),N(tB,{isOpen:i,placement:"right",onClose:l,children:[x(WS,{}),N(US,{bg:"#E53E3E",color:"white",children:[x(BS,{color:"#FFD700"}),x(jS,{borderBottomWidth:"1px",borderColor:"#FFD700",children:"Menu"}),x(NS,{overflowY:"auto",children:N(m0,{spacing:4,align:"stretch",children:[x(Q,{children:x(ut,{w:"100%",mb:2,bg:"#FFD700",color:"#E53E3E",_hover:{bg:"#FFC107"},onClick:()=>{a(""),t(""),r(""),l()},children:"All Recipes"})}),N(Q,{borderTop:"1px solid #FFD700",pt:4,children:[x(Q,{mb:2,fontSize:"sm",color:"#FFD700",fontWeight:"bold",children:"\u{1F30D} World Cuisines"}),["mexican","italian","indian","thai","korean","chinese","japanese","french","american"].map(c=>x(ut,{w:"100%",mb:2,variant:o===c?"solid":"outline",bg:o===c?"#FFD700":"transparent",color:o===c?"#E53E3E":"#FFD700",borderColor:"#FFD700",_hover:{bg:o===c?"#FFC107":"rgba(255, 215, 0, 0.1)"},onClick:()=>{a(c),t(""),r(""),l()},children:c.charAt(0).toUpperCase()+c.slice(1)},c))]}),N(Q,{borderTop:"1px solid #FFD700",pt:4,children:[x(Q,{mb:2,fontSize:"sm",color:"#FFD700",fontWeight:"bold",children:"\u{1F525} Popular"}),[{label:"Soup Recipes",value:"soup"},{label:"Chili Recipes",value:"chili"},{label:"Pasta Recipes",value:"pasta"},{label:"Salad Recipes",value:"salad"},{label:"Bread Recipes",value:"bread"},{label:"Cookie Recipes",value:"cookie"}].map(c=>x(ut,{w:"100%",mb:2,variant:"outline",color:"#FFD700",borderColor:"#FFD700",_hover:{bg:"rgba(255, 215, 0, 0.1)"},onClick:()=>{a(""),t(c.value),r(""),l()},children:c.label},c.value))]}),N(Q,{borderTop:"1px solid #FFD700",pt:4,children:[x(Q,{mb:2,fontSize:"sm",color:"#FFD700",fontWeight:"bold",children:"\u{1F957} Healthy & Diet"}),x(ut,{w:"100%",mb:2,variant:"outline",color:"#FFD700",borderColor:"#FFD700",_hover:{bg:"rgba(255, 215, 0, 0.1)"},onClick:()=>{a(""),t("keto"),r(""),l()},children:"Keto Recipes"}),x(ut,{w:"100%",mb:2,variant:"outline",color:"#FFD700",borderColor:"#FFD700",_hover:{bg:"rgba(255, 215, 0, 0.1)"},onClick:()=>{a(""),t("healthy"),r(""),l()},children:"Healthy Recipes"}),["Vegetarian","Vegan","Pescatarian"].map(c=>N(ut,{w:"100%",mb:2,variant:n===c?"solid":"outline",bg:n===c?"#FFD700":"transparent",color:n===c?"#E53E3E":"#FFD700",borderColor:"#FFD700",_hover:{bg:n===c?"#FFC107":"rgba(255, 215, 0, 0.1)"},onClick:()=>{a(""),r(c),t(""),l()},children:[c," Recipes"]},c)),x(ut,{w:"100%",mb:2,variant:"outline",color:"#FFD700",borderColor:"#FFD700",_hover:{bg:"rgba(255, 215, 0, 0.1)"},onClick:()=>{a(""),t("gluten free"),r(""),l()},children:"Gluten-Free Recipes"})]}),N(Q,{borderTop:"1px solid #FFD700",pt:4,children:[x(Q,{mb:2,fontSize:"sm",color:"#FFD700",fontWeight:"bold",children:"\u{1F389} Holidays"}),[{label:"Thanksgiving",value:"thanksgiving"},{label:"Christmas",value:"christmas"},{label:"Halloween",value:"halloween"},{label:"Easter",value:"easter"},{label:"Valentine's Day",value:"valentine"}].map(c=>x(ut,{w:"100%",mb:2,variant:"outline",color:"#FFD700",borderColor:"#FFD700",_hover:{bg:"rgba(255, 215, 0, 0.1)"},onClick:()=>{a(""),t(c.value),r(""),l()},children:c.label},c.value))]}),N(Q,{borderTop:"1px solid #FFD700",pt:4,children:[x(Q,{mb:2,fontSize:"sm",color:"#FFD700",fontWeight:"bold",children:"\u{1F37D}\uFE0F Meal Types"}),[{label:"Breakfast",value:"breakfast"},{label:"Lunch",value:"lunch"},{label:"Dinner",value:"dinner"},{label:"Desserts",value:"dessert"},{label:"Drinks",value:"drink"},{label:"Snacks",value:"snack"}].map(c=>x(ut,{w:"100%",mb:2,variant:"outline",color:"#FFD700",borderColor:"#FFD700",_hover:{bg:"rgba(255, 215, 0, 0.1)"},onClick:()=>{a(""),t(c.value),r(""),l()},children:c.label},c.value))]}),N(Q,{borderTop:"1px solid #FFD700",pt:4,pb:4,children:[x(Q,{mb:2,fontSize:"sm",color:"#FFD700",fontWeight:"bold",children:"\u{1F331} Additional Diet Filters"}),x(ut,{w:"100%",mb:2,variant:n==="Pescatarian"?"solid":"outline",bg:n==="Pescatarian"?"#FFD700":"transparent",color:n==="Pescatarian"?"#E53E3E":"#FFD700",borderColor:"#FFD700",_hover:{bg:n==="Pescatarian"?"#FFC107":"rgba(255, 215, 0, 0.1)"},onClick:()=>{a(""),r(n==="Pescatarian"?"":"Pescatarian"),t(""),l()},children:"Pescatarian"})]})]})})]})]})]})};w0.propTypes={searchTerm:Le.exports.string.isRequired,setSearchTerm:Le.exports.func.isRequired,selectedDiet:Le.exports.string.isRequired,setSelectedDiet:Le.exports.func.isRequired,selectedCategory:Le.exports.string.isRequired,setSelectedCategory:Le.exports.func.isRequired};const p9=e=>e.toLowerCase().trim().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-"),m9=({recipe:e})=>{var n,r,o,a;const t=p9(e.label);return x(Js,{to:`/recipe/${t}`,children:N(Q,{bg:hs.white,borderRadius:"xl",overflow:"hidden",transition:"all .2s",display:"flex",flexDir:"column",border:`3px solid ${hs.white}`,boxShadow:Xm.card,_hover:{transform:"scale(1.02)",boxShadow:Xm.cardHover},h:ti.card.height,w:"100%",children:[x(Q,{position:"relative",children:x(fl,{src:e.image,alt:e.label,loading:"lazy",w:"100%",h:ti.card.imageHeight,objectFit:"cover"})}),N(Q,{p:4,display:"flex",flexDir:"column",gap:2,children:[x(Fe,{fontSize:"2xl",fontWeight:"semibold",noOfLines:2,children:e.label}),N(Oc,{spacing:3,children:[x(Fe,{fontWeight:"bold",children:"Meal:"}),x(Fe,{noOfLines:1,children:((n=e.mealType)==null?void 0:n[0])||"\u2014"})]}),N(Oc,{spacing:3,children:[x(Fe,{fontWeight:"bold",children:"Dish:"}),x(Fe,{noOfLines:1,children:((r=e.dishType)==null?void 0:r[0])||"\u2014"})]}),((o=e.dietLabels)==null?void 0:o.length)>0&&x(yn,{gap:2,wrap:"wrap",children:e.dietLabels.map(i=>x(Oa,{colorScheme:"green",size:"sm",children:i},i))}),((a=e.cautions)==null?void 0:a.length)>0&&x(yn,{gap:2,wrap:"wrap",children:e.cautions.map(i=>x(Oa,{colorScheme:"red",size:"sm",children:i},i))})]})]})})};m9.propTypes={recipe:Le.exports.shape({label:Le.exports.string.isRequired,image:Le.exports.string.isRequired,mealType:Le.exports.arrayOf(Le.exports.string),dishType:Le.exports.arrayOf(Le.exports.string),dietLabels:Le.exports.arrayOf(Le.exports.string),cautions:Le.exports.arrayOf(Le.exports.string)}).isRequired};const jj=y.exports.memo(m9),Vj=()=>{const e=new Date().getFullYear();return x(Q,{as:"footer",bg:"linear-gradient(135deg, #E53E3E 0%, #C53030 50%, #9B2C2C 100%)",color:"white",py:8,mt:"auto",children:N(Hs,{maxW:"container.xl",children:[N(yn,{direction:{base:"column",md:"row"},justify:"space-between",align:{base:"center",md:"flex-start"},gap:6,children:[N(Q,{textAlign:{base:"center",md:"left"},children:[x(Fe,{fontSize:"2xl",fontWeight:"bold",color:"#FFD700",mb:2,children:"\u{1F373} Recipes"}),x(Fe,{fontSize:"sm",maxW:"300px",children:"Discover amazing recipes from around the world. Cook, share, and enjoy!"})]}),N(za,{spacing:2,textAlign:{base:"center",md:"left"},children:[x(Fe,{fontWeight:"bold",color:"#FFD700",mb:1,children:"Quick Links"}),x(dn,{href:"#",_hover:{color:"#FFD700",textDecoration:"none"},children:"Home"}),x(dn,{href:"#",_hover:{color:"#FFD700",textDecoration:"none"},children:"About Us"}),x(dn,{href:"#",_hover:{color:"#FFD700",textDecoration:"none"},children:"Contact"})]}),N(za,{spacing:2,textAlign:{base:"center",md:"left"},children:[x(Fe,{fontWeight:"bold",color:"#FFD700",mb:1,children:"Popular Categories"}),x(dn,{href:"#",_hover:{color:"#FFD700",textDecoration:"none"},children:"World Cuisines"}),x(dn,{href:"#",_hover:{color:"#FFD700",textDecoration:"none"},children:"Healthy Recipes"}),x(dn,{href:"#",_hover:{color:"#FFD700",textDecoration:"none"},children:"Holiday Specials"})]}),N(za,{spacing:2,textAlign:{base:"center",md:"left"},children:[x(Fe,{fontWeight:"bold",color:"#FFD700",mb:1,children:"Connect With Us"}),x(Fe,{fontSize:"sm",children:"\u{1F4E7} info@recipes.com"}),x(Fe,{fontSize:"sm",children:"\u{1F4F1} Follow us on social media"}),N(yn,{gap:3,justify:{base:"center",md:"flex-start"},mt:2,children:[x(dn,{href:"#",fontSize:"xl",_hover:{color:"#FFD700"},children:"\u{1F4D8}"}),x(dn,{href:"#",fontSize:"xl",_hover:{color:"#FFD700"},children:"\u{1F4F7}"}),x(dn,{href:"#",fontSize:"xl",_hover:{color:"#FFD700"},children:"\u{1F426}"})]})]})]}),x(Q,{mt:8,pt:6,borderTop:"1px solid rgba(255, 215, 0, 0.3)",textAlign:"center",children:N(Fe,{fontSize:"sm",color:"rgba(255, 255, 255, 0.8)",children:["\xA9 ",e," Recipes. All rights reserved. Made with \u2764\uFE0F for food lovers."]})})]})})},h9=({emoji:e,label:t,onClick:n})=>N(Fe,{bg:"rgba(255,255,255,0.2)",px:3,py:1,borderRadius:"full",cursor:"pointer",transition:"all 0.3s",_hover:{bg:"rgba(255,255,255,0.3)",transform:"translateY(-2px)"},onClick:n,role:"button",tabIndex:0,onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),n())},"aria-label":`Filter by ${t}`,children:[e," ",t]});h9.propTypes={emoji:Le.exports.string.isRequired,label:Le.exports.string.isRequired,onClick:Le.exports.func.isRequired};const Wj=y.exports.memo(h9),Hj=()=>{const[e,t]=y.exports.useState(""),[n,r]=y.exports.useState(""),[o,a]=y.exports.useState(""),i=y.exports.useMemo(()=>{const l=e.toLowerCase().replace("-"," ").trim();return f9.hits.filter(({recipe:u})=>{const c=u.label.toLowerCase(),d=!l||c.includes(l)||(u.cuisineType||[]).some(v=>v.toLowerCase().includes(l))||(u.healthLabels||[]).some(v=>v.toLowerCase().includes(l))||(u.dietLabels||[]).some(v=>v.toLowerCase().includes(l)),f=!n||(u.healthLabels||[]).includes(n)||(u.dietLabels||[]).includes(n),p=!o||(u.cuisineType||[]).some(v=>v.toLowerCase().includes(o.toLowerCase()));return d&&f&&p})},[e,n,o]),s=y.exports.useCallback(l=>()=>{switch(a(""),r(""),t(""),l.type){case"search":t(l.value);break;case"diet":r(l.value);break;case"category":a(l.value);break}},[]);return N(Q,{bg:hs.primary.gold,minH:"100vh",children:[x(w0,{searchTerm:e,setSearchTerm:t,selectedDiet:n,setSelectedDiet:r,selectedCategory:o,setSelectedCategory:a}),N(Q,{bg:Dj.hero,color:hs.white,py:{base:6,md:8},mt:{base:ti.navbar.height.mobile,lg:ti.navbar.height.desktop},position:"relative",overflow:"hidden",children:[x(Q,{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",opacity:"0.1",bgImage:"radial-gradient(circle at 20% 80%, white 2px, transparent 2px), radial-gradient(circle at 80% 20%, white 2px, transparent 2px), radial-gradient(circle at 40% 40%, white 1px, transparent 1px)",bgSize:"50px 50px, 30px 30px, 20px 20px","aria-hidden":"true"}),x(Hs,{maxW:"container.xl",position:"relative",zIndex:"1",children:N(Q,{textAlign:"center",maxW:"800px",mx:"auto",children:[x(Fe,{as:"h1",fontSize:{base:"xl",sm:"2xl",md:"3xl",lg:"4xl"},fontWeight:"bold",mb:1,textShadow:"2px 2px 4px rgba(0,0,0,0.3)",style:{WebkitTextStroke:"1px rgba(255,255,255,0.5)",textStroke:"1px rgba(255,255,255,0.5)"},ml:{base:0,md:-10},children:"\u{1F373} Discover Amazing"}),x(Q,{display:"flex",justifyContent:"center",mb:1,children:x(fl,{src:"/Recipes/recipes-logo.svg",alt:"Recipes Logo",h:{base:"60px",sm:"70px",md:"80px",lg:"90px"},filter:Xm.logo})}),x(Fe,{fontSize:{base:"md",sm:"lg",md:"xl"},mb:4,opacity:"0.9",maxW:"600px",mx:"auto",lineHeight:"1.4",children:"Explore thousands of delicious recipes from around the world. Find the perfect dish for any occasion, dietary preference, or cuisine type."}),x(Q,{display:"flex",justifyContent:"center",gap:3,flexWrap:"wrap",fontSize:{base:"xs",sm:"sm"},role:"group","aria-label":"Recipe categories",children:Bj.map(l=>x(Wj,{emoji:l.emoji,label:l.label,onClick:s(l)},l.label))})]})})]}),x(Hs,{maxW:"container.xl",py:4,children:i.length===0?N(Q,{textAlign:"center",py:12,bg:hs.white,borderRadius:"xl",boxShadow:"lg",children:[x(Fe,{fontSize:"2xl",fontWeight:"bold",mb:2,children:"No recipes found \u{1F615}"}),x(Fe,{color:"gray.600",children:"Try adjusting your search or filters"})]}):x(dS,{columns:[1,2,3,4],spacing:6,children:i.map((l,u)=>x(jj,{recipe:l.recipe},`${l.recipe.label}-${u}`))})}),x(Vj,{})]})},Uj=e=>{var t,n,r;return{"@context":"https://schema.org","@type":"Recipe",name:e.label,image:[e.image],description:`${e.label} \u2013 ingredients and labels.`,recipeIngredient:e.ingredientLines,recipeCuisine:(t=e.cuisineType)==null?void 0:t[0],recipeCategory:(n=e.dishType)==null?void 0:n[0],suitableForDiet:(r=e.dietLabels)==null?void 0:r.join(", "),recipeYield:e.yield}},Gj=()=>{var a,i,s,l,u;const{id:e}=jB(),t=o9(),n=f9.hits.find(c=>p9(c.recipe.label)===e),r=n==null?void 0:n.recipe;if(!r)return x(Q,{minH:"100vh",display:"grid",placeItems:"center",bg:"gray.50",children:x(Bu,{children:"Recipe not found"})});const o=Uj(r);return N(Q,{bg:"#FFD700",minH:"100vh",children:[x(w0,{searchTerm:"",setSearchTerm:()=>{},selectedDiet:"",setSelectedDiet:()=>{},selectedCategory:"",setSelectedCategory:()=>{}}),N(Hs,{maxW:"container.xl",pt:{base:"130px",lg:"100px"},pb:4,children:[N(Oc,{mb:3,justify:"space-between",children:[x(ut,{onClick:()=>t(-1),colorScheme:"red",variant:"solid",size:"sm",bg:"#E53E3E",color:"white",_hover:{bg:"#C53030"},children:"\u2190 Back"}),x(dn,{href:r.url,isExternal:!0,children:x(ut,{colorScheme:"red",size:"sm",children:"View Source Recipe"})})]}),x(Q,{bg:"white",borderRadius:"xl",overflow:"hidden",p:{base:6,md:4},children:x(m0,{spacing:{base:4,md:3},align:"stretch",children:N(yn,{direction:{base:"column",md:"row"},gap:{base:6,md:4},children:[x(fl,{src:r.image,alt:r.label,loading:"lazy",borderRadius:"xl",maxW:{base:"100%",md:"40%"},maxH:{md:"300px"},objectFit:"cover"}),N(Q,{flex:"1",children:[x(Fe,{color:"gray.500",fontSize:"sm",mb:1,textTransform:"uppercase",children:((a=r.mealType)==null?void 0:a[0])||"MEAL"}),x(Bu,{as:"h1",size:{base:"xl",md:"lg"},mb:2,children:r.label}),N(Fe,{fontSize:"md",mb:1,children:["Total Time:"," ",r.totalTime?`${r.totalTime} min`:"Unknown"]}),N(Fe,{fontSize:"md",mb:3,children:["Servings: ",(i=r.yield)!=null?i:"\u2014"]}),N(Q,{mb:4,children:[x(Bu,{as:"h2",size:"sm",mb:2,children:"Ingredients"}),x(mS,{spacing:1,fontSize:"sm",children:r.ingredientLines.map((c,d)=>x(hS,{children:c},d))})]}),((s=r.healthLabels)==null?void 0:s.length)>0&&N(Q,{mb:2,children:[x(Fe,{fontWeight:"bold",mb:1,fontSize:"sm",children:"Health labels"}),x(yn,{wrap:"wrap",gap:1,children:r.healthLabels.map(c=>x(Oa,{colorScheme:"purple",size:"sm",children:c},c))})]}),((l=r.dietLabels)==null?void 0:l.length)>0&&N(Q,{mb:2,children:[x(Fe,{fontWeight:"bold",mb:1,fontSize:"sm",children:"Diet"}),x(yn,{wrap:"wrap",gap:1,children:r.dietLabels.map(c=>x(Oa,{colorScheme:"green",size:"sm",children:c},c))})]}),((u=r.cautions)==null?void 0:u.length)>0&&N(Q,{children:[x(Fe,{fontWeight:"bold",mb:1,fontSize:"sm",children:"Cautions"}),x(yn,{wrap:"wrap",gap:1,children:r.cautions.map(c=>x(Oa,{colorScheme:"red",size:"sm",children:c},c))})]})]})]})})}),x("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o)}})]})]})},Kj=()=>x(_j,{children:N(rj,{children:[x(Km,{path:"/",element:x(Hj,{})}),x(Km,{path:"/recipe/:id",element:x(Gj,{})})]})});Um.createRoot(document.getElementById("root")).render(x(ho.StrictMode,{children:x(FM,{children:x(Kj,{})})}));
