function d5(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function f5(){return Boolean(globalThis==null?void 0:globalThis.document)}function p5(e,...t){if(e==null)throw new TypeError("Cannot convert undefined or null to object");const n={...e};for(const r of t)if(r!=null)for(const o in r)!Object.prototype.hasOwnProperty.call(r,o)||(o in n&&delete n[o],n[o]=r[o]);return n}const Jt=e=>e?"":void 0,ac=e=>e?!0:void 0;function m5(e){return Array.isArray(e)}function Et(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!m5(e)}function h5(e){const t=e==null?0:e.length;return t?e[t-1]:void 0}function g5(e){const t=parseFloat(e.toString()),n=e.toString().replace(String(t),"");return{unitless:!n,value:t,unit:n}}function fd(e){if(e==null)return e;const{unitless:t}=g5(e);return t||typeof e=="number"?`${e}px`:e}const Wy=(e,t)=>parseInt(e[1],10)>parseInt(t[1],10)?1:-1,Wf=e=>Object.fromEntries(Object.entries(e).sort(Wy));function yh(e){const t=Wf(e);return Object.assign(Object.values(t),t)}function y5(e){const t=Object.keys(Wf(e));return new Set(t)}function bh(e){var n;if(!e)return e;e=(n=fd(e))!=null?n:e;const t=-.02;return typeof e=="number"?`${e+t}`:e.replace(/(\d+\.?\d*)/u,r=>`${parseFloat(r)+t}`)}function Ca(e,t){const n=["@media screen"];return e&&n.push("and",`(min-width: ${fd(e)})`),t&&n.push("and",`(max-width: ${fd(t)})`),n.join(" ")}function b5(e){var a;if(!e)return null;e.base=(a=e.base)!=null?a:"0px";const t=yh(e),n=Object.entries(e).sort(Wy).map(([i,s],l,u)=>{var d;let[,c]=(d=u[l+1])!=null?d:[];return c=parseFloat(c)>0?bh(c):void 0,{_minW:bh(s),breakpoint:i,minW:s,maxW:c,maxWQuery:Ca(null,c),minWQuery:Ca(s),minMaxQuery:Ca(s,c)}}),r=y5(e),o=Array.from(r.values());return{keys:r,normalized:t,isResponsive(i){const s=Object.keys(i);return s.length>0&&s.every(l=>r.has(l))},asObject:Wf(e),asArray:yh(e),details:n,get(i){return n.find(s=>s.breakpoint===i)},media:[null,...t.map(i=>Ca(i)).slice(1)],toArrayValue(i){if(!Et(i))throw new Error("toArrayValue: value must be an object");const s=o.map(l=>{var u;return(u=i[l])!=null?u:null});for(;h5(s)===null;)s.pop();return s},toObjectValue(i){if(!Array.isArray(i))throw new Error("toObjectValue: value must be an array");return i.reduce((s,l,u)=>{const c=o[u];return c!=null&&l!=null&&(s[c]=l),s},{})}}}function vh(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}var ts=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function v5(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var v={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ii=Symbol.for("react.element"),w5=Symbol.for("react.portal"),x5=Symbol.for("react.fragment"),S5=Symbol.for("react.strict_mode"),C5=Symbol.for("react.profiler"),k5=Symbol.for("react.provider"),T5=Symbol.for("react.context"),_5=Symbol.for("react.forward_ref"),F5=Symbol.for("react.suspense"),P5=Symbol.for("react.memo"),A5=Symbol.for("react.lazy"),wh=Symbol.iterator;function E5(e){return e===null||typeof e!="object"?null:(e=wh&&e[wh]||e["@@iterator"],typeof e=="function"?e:null)}var Hy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uy=Object.assign,Gy={};function Zo(e,t,n){this.props=e,this.context=t,this.refs=Gy,this.updater=n||Hy}Zo.prototype.isReactComponent={};Zo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ky(){}Ky.prototype=Zo.prototype;function Hf(e,t,n){this.props=e,this.context=t,this.refs=Gy,this.updater=n||Hy}var Uf=Hf.prototype=new Ky;Uf.constructor=Hf;Uy(Uf,Zo.prototype);Uf.isPureReactComponent=!0;var xh=Array.isArray,Yy=Object.prototype.hasOwnProperty,Gf={current:null},Xy={key:!0,ref:!0,__self:!0,__source:!0};function Zy(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)Yy.call(t,r)&&!Xy.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Ii,type:e,key:a,ref:i,props:o,_owner:Gf.current}}function q5(e,t){return{$$typeof:Ii,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Kf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ii}function R5(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Sh=/\/+/g;function ic(e,t){return typeof e=="object"&&e!==null&&e.key!=null?R5(""+e.key):t.toString(36)}function Is(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Ii:case w5:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+ic(i,0):r,xh(o)?(n="",e!=null&&(n=e.replace(Sh,"$&/")+"/"),Is(o,t,n,"",function(u){return u})):o!=null&&(Kf(o)&&(o=q5(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Sh,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",xh(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+ic(a,s);i+=Is(a,t,n,l,o)}else if(l=E5(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+ic(a,s++),i+=Is(a,t,n,l,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function ns(e,t,n){if(e==null)return e;var r=[],o=0;return Is(e,r,"","",function(a){return t.call(n,a,o++)}),r}function I5(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qe={current:null},zs={transition:null},z5={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:zs,ReactCurrentOwner:Gf};function Qy(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:ns,forEach:function(e,t,n){ns(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ns(e,function(){t++}),t},toArray:function(e){return ns(e,function(t){return t})||[]},only:function(e){if(!Kf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Zo;O.Fragment=x5;O.Profiler=C5;O.PureComponent=Hf;O.StrictMode=S5;O.Suspense=F5;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z5;O.act=Qy;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Uy({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=Gf.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Yy.call(t,l)&&!Xy.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ii,type:e.type,key:o,ref:a,props:r,_owner:i}};O.createContext=function(e){return e={$$typeof:T5,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:k5,_context:e},e.Consumer=e};O.createElement=Zy;O.createFactory=function(e){var t=Zy.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:_5,render:e}};O.isValidElement=Kf;O.lazy=function(e){return{$$typeof:A5,_payload:{_status:-1,_result:e},_init:I5}};O.memo=function(e,t){return{$$typeof:P5,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=zs.transition;zs.transition={};try{e()}finally{zs.transition=t}};O.unstable_act=Qy;O.useCallback=function(e,t){return Qe.current.useCallback(e,t)};O.useContext=function(e){return Qe.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Qe.current.useDeferredValue(e)};O.useEffect=function(e,t){return Qe.current.useEffect(e,t)};O.useId=function(){return Qe.current.useId()};O.useImperativeHandle=function(e,t,n){return Qe.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return Qe.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return Qe.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return Qe.current.useMemo(e,t)};O.useReducer=function(e,t,n){return Qe.current.useReducer(e,t,n)};O.useRef=function(e){return Qe.current.useRef(e)};O.useState=function(e){return Qe.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return Qe.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return Qe.current.useTransition()};O.version="18.3.1";(function(e){e.exports=O})(v);const Jl=v5(v.exports),Ch=d5({__proto__:null,default:Jl},[v.exports]);function Jy(e){return v.exports.Children.toArray(e).filter(t=>v.exports.isValidElement(t))}function e1(e){const t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function $5(e,t){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function Ut(e={}){const{name:t,strict:n=!0,hookName:r="useContext",providerName:o="Provider",errorMessage:a,defaultValue:i}=e,s=v.exports.createContext(i);s.displayName=t;function l(){var c;const u=v.exports.useContext(s);if(!u&&n){const d=new Error(a!=null?a:$5(r,o));throw d.name="ContextError",(c=Error.captureStackTrace)==null||c.call(Error,d,l),d}return u}return[s.Provider,l,s]}const Ue=(...e)=>e.filter(Boolean).join(" ");function L5(e,t,n,r){const o=typeof t=="string"?t.split("."):[t];for(r=0;r<o.length&&e;r+=1)e=e[o[r]];return e===void 0?n:e}const M5=e=>{const t=new WeakMap;return(r,o,a,i)=>{if(typeof r>"u")return e(r,o,a);t.has(r)||t.set(r,new Map);const s=t.get(r);if(s.has(o))return s.get(o);const l=e(r,o,a,i);return s.set(o,l),l}},t1=M5(L5),V5=e=>e.default||e;function n1(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}function j5(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}Object.freeze(["base","sm","md","lg","xl","2xl"]);function Yf(e,t){return Array.isArray(e)?e.map(n=>n===null?null:t(n)):Et(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):e!=null?t(e):null}const B5=e=>typeof e=="function";function sn(e,...t){return B5(e)?e(...t):e}function N5(e,...t){const n=Object.getOwnPropertyDescriptors(e),r=Object.keys(n),o=i=>{const s={};for(let l=0;l<i.length;l++){const u=i[l];n[u]&&(Object.defineProperty(s,u,n[u]),delete n[u])}return s},a=i=>o(Array.isArray(i)?i:r.filter(i));return t.map(a).concat(o(r))}function kh(e,t,n={}){const{stop:r,getKey:o}=n;function a(i,s=[]){var l;if(Et(i)||Array.isArray(i)){const u={};for(const[c,d]of Object.entries(i)){const f=(l=o==null?void 0:o(c))!=null?l:c,p=[...s,f];if(r!=null&&r(i,p))return t(i,s);u[f]=a(d,p)}return u}return t(i,s)}return a(e)}var pd={exports:{}};(function(e,t){var n=200,r="__lodash_hash_undefined__",o=800,a=16,i=9007199254740991,s="[object Arguments]",l="[object Array]",u="[object AsyncFunction]",c="[object Boolean]",d="[object Date]",f="[object Error]",p="[object Function]",y="[object GeneratorFunction]",b="[object Map]",x="[object Number]",m="[object Null]",h="[object Object]",g="[object Proxy]",S="[object RegExp]",P="[object Set]",A="[object String]",F="[object Undefined]",q="[object WeakMap]",L="[object ArrayBuffer]",R="[object DataView]",G="[object Float32Array]",St="[object Float64Array]",zt="[object Int8Array]",Kt="[object Int16Array]",Se="[object Int32Array]",Le="[object Uint8Array]",Ct="[object Uint8ClampedArray]",z="[object Uint16Array]",B="[object Uint32Array]",N=/[\\^$.*+?()[\]{}|]/g,he=/^\[object .+?Constructor\]$/,Te=/^(?:0|[1-9]\d*)$/,ne={};ne[G]=ne[St]=ne[zt]=ne[Kt]=ne[Se]=ne[Le]=ne[Ct]=ne[z]=ne[B]=!0,ne[s]=ne[l]=ne[L]=ne[c]=ne[R]=ne[d]=ne[f]=ne[p]=ne[b]=ne[x]=ne[h]=ne[S]=ne[P]=ne[A]=ne[q]=!1;var Yt=typeof ts=="object"&&ts&&ts.Object===Object&&ts,ra=typeof self=="object"&&self&&self.Object===Object&&self,ut=Yt||ra||Function("return this")(),gr=t&&!t.nodeType&&t,oa=gr&&!0&&e&&!e.nodeType&&e,Ym=oa&&oa.exports===gr,Gu=Ym&&Yt.process,Xm=function(){try{var w=oa&&oa.require&&oa.require("util").types;return w||Gu&&Gu.binding&&Gu.binding("util")}catch{}}(),Zm=Xm&&Xm.isTypedArray;function Qw(w,k,_){switch(_.length){case 0:return w.call(k);case 1:return w.call(k,_[0]);case 2:return w.call(k,_[0],_[1]);case 3:return w.call(k,_[0],_[1],_[2])}return w.apply(k,_)}function Jw(w,k){for(var _=-1,I=Array(w);++_<w;)I[_]=k(_);return I}function e3(w){return function(k){return w(k)}}function t3(w,k){return w==null?void 0:w[k]}function n3(w,k){return function(_){return w(k(_))}}var r3=Array.prototype,o3=Function.prototype,Gi=Object.prototype,Ku=ut["__core-js_shared__"],Ki=o3.toString,yn=Gi.hasOwnProperty,Qm=function(){var w=/[^.]+$/.exec(Ku&&Ku.keys&&Ku.keys.IE_PROTO||"");return w?"Symbol(src)_1."+w:""}(),Jm=Gi.toString,a3=Ki.call(Object),i3=RegExp("^"+Ki.call(yn).replace(N,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Yi=Ym?ut.Buffer:void 0,eh=ut.Symbol,th=ut.Uint8Array,nh=Yi?Yi.allocUnsafe:void 0,rh=n3(Object.getPrototypeOf,Object),oh=Object.create,s3=Gi.propertyIsEnumerable,l3=r3.splice,yr=eh?eh.toStringTag:void 0,Xi=function(){try{var w=Zu(Object,"defineProperty");return w({},"",{}),w}catch{}}(),u3=Yi?Yi.isBuffer:void 0,ah=Math.max,c3=Date.now,ih=Zu(ut,"Map"),aa=Zu(Object,"create"),d3=function(){function w(){}return function(k){if(!vr(k))return{};if(oh)return oh(k);w.prototype=k;var _=new w;return w.prototype=void 0,_}}();function br(w){var k=-1,_=w==null?0:w.length;for(this.clear();++k<_;){var I=w[k];this.set(I[0],I[1])}}function f3(){this.__data__=aa?aa(null):{},this.size=0}function p3(w){var k=this.has(w)&&delete this.__data__[w];return this.size-=k?1:0,k}function m3(w){var k=this.__data__;if(aa){var _=k[w];return _===r?void 0:_}return yn.call(k,w)?k[w]:void 0}function h3(w){var k=this.__data__;return aa?k[w]!==void 0:yn.call(k,w)}function g3(w,k){var _=this.__data__;return this.size+=this.has(w)?0:1,_[w]=aa&&k===void 0?r:k,this}br.prototype.clear=f3,br.prototype.delete=p3,br.prototype.get=m3,br.prototype.has=h3,br.prototype.set=g3;function bn(w){var k=-1,_=w==null?0:w.length;for(this.clear();++k<_;){var I=w[k];this.set(I[0],I[1])}}function y3(){this.__data__=[],this.size=0}function b3(w){var k=this.__data__,_=Zi(k,w);if(_<0)return!1;var I=k.length-1;return _==I?k.pop():l3.call(k,_,1),--this.size,!0}function v3(w){var k=this.__data__,_=Zi(k,w);return _<0?void 0:k[_][1]}function w3(w){return Zi(this.__data__,w)>-1}function x3(w,k){var _=this.__data__,I=Zi(_,w);return I<0?(++this.size,_.push([w,k])):_[I][1]=k,this}bn.prototype.clear=y3,bn.prototype.delete=b3,bn.prototype.get=v3,bn.prototype.has=w3,bn.prototype.set=x3;function Zr(w){var k=-1,_=w==null?0:w.length;for(this.clear();++k<_;){var I=w[k];this.set(I[0],I[1])}}function S3(){this.size=0,this.__data__={hash:new br,map:new(ih||bn),string:new br}}function C3(w){var k=Ji(this,w).delete(w);return this.size-=k?1:0,k}function k3(w){return Ji(this,w).get(w)}function T3(w){return Ji(this,w).has(w)}function _3(w,k){var _=Ji(this,w),I=_.size;return _.set(w,k),this.size+=_.size==I?0:1,this}Zr.prototype.clear=S3,Zr.prototype.delete=C3,Zr.prototype.get=k3,Zr.prototype.has=T3,Zr.prototype.set=_3;function Qr(w){var k=this.__data__=new bn(w);this.size=k.size}function F3(){this.__data__=new bn,this.size=0}function P3(w){var k=this.__data__,_=k.delete(w);return this.size=k.size,_}function A3(w){return this.__data__.get(w)}function E3(w){return this.__data__.has(w)}function q3(w,k){var _=this.__data__;if(_ instanceof bn){var I=_.__data__;if(!ih||I.length<n-1)return I.push([w,k]),this.size=++_.size,this;_=this.__data__=new Zr(I)}return _.set(w,k),this.size=_.size,this}Qr.prototype.clear=F3,Qr.prototype.delete=P3,Qr.prototype.get=A3,Qr.prototype.has=E3,Qr.prototype.set=q3;function R3(w,k){var _=ec(w),I=!_&&Ju(w),U=!_&&!I&&dh(w),ae=!_&&!I&&!U&&ph(w),fe=_||I||U||ae,D=fe?Jw(w.length,String):[],pe=D.length;for(var kt in w)(k||yn.call(w,kt))&&!(fe&&(kt=="length"||U&&(kt=="offset"||kt=="parent")||ae&&(kt=="buffer"||kt=="byteLength"||kt=="byteOffset")||uh(kt,pe)))&&D.push(kt);return D}function Yu(w,k,_){(_!==void 0&&!es(w[k],_)||_===void 0&&!(k in w))&&Xu(w,k,_)}function I3(w,k,_){var I=w[k];(!(yn.call(w,k)&&es(I,_))||_===void 0&&!(k in w))&&Xu(w,k,_)}function Zi(w,k){for(var _=w.length;_--;)if(es(w[_][0],k))return _;return-1}function Xu(w,k,_){k=="__proto__"&&Xi?Xi(w,k,{configurable:!0,enumerable:!0,value:_,writable:!0}):w[k]=_}var z3=G3();function Qi(w){return w==null?w===void 0?F:m:yr&&yr in Object(w)?K3(w):e5(w)}function sh(w){return ia(w)&&Qi(w)==s}function $3(w){if(!vr(w)||Q3(w))return!1;var k=nc(w)?i3:he;return k.test(o5(w))}function L3(w){return ia(w)&&fh(w.length)&&!!ne[Qi(w)]}function M3(w){if(!vr(w))return J3(w);var k=ch(w),_=[];for(var I in w)I=="constructor"&&(k||!yn.call(w,I))||_.push(I);return _}function lh(w,k,_,I,U){w!==k&&z3(k,function(ae,fe){if(U||(U=new Qr),vr(ae))V3(w,k,fe,_,lh,I,U);else{var D=I?I(Qu(w,fe),ae,fe+"",w,k,U):void 0;D===void 0&&(D=ae),Yu(w,fe,D)}},mh)}function V3(w,k,_,I,U,ae,fe){var D=Qu(w,_),pe=Qu(k,_),kt=fe.get(pe);if(kt){Yu(w,_,kt);return}var ct=ae?ae(D,pe,_+"",w,k,fe):void 0,sa=ct===void 0;if(sa){var rc=ec(pe),oc=!rc&&dh(pe),gh=!rc&&!oc&&ph(pe);ct=pe,rc||oc||gh?ec(D)?ct=D:a5(D)?ct=W3(D):oc?(sa=!1,ct=N3(pe,!0)):gh?(sa=!1,ct=D3(pe,!0)):ct=[]:i5(pe)||Ju(pe)?(ct=D,Ju(D)?ct=s5(D):(!vr(D)||nc(D))&&(ct=Y3(pe))):sa=!1}sa&&(fe.set(pe,ct),U(ct,pe,I,ae,fe),fe.delete(pe)),Yu(w,_,ct)}function j3(w,k){return n5(t5(w,k,hh),w+"")}var B3=Xi?function(w,k){return Xi(w,"toString",{configurable:!0,enumerable:!1,value:u5(k),writable:!0})}:hh;function N3(w,k){if(k)return w.slice();var _=w.length,I=nh?nh(_):new w.constructor(_);return w.copy(I),I}function O3(w){var k=new w.constructor(w.byteLength);return new th(k).set(new th(w)),k}function D3(w,k){var _=k?O3(w.buffer):w.buffer;return new w.constructor(_,w.byteOffset,w.length)}function W3(w,k){var _=-1,I=w.length;for(k||(k=Array(I));++_<I;)k[_]=w[_];return k}function H3(w,k,_,I){var U=!_;_||(_={});for(var ae=-1,fe=k.length;++ae<fe;){var D=k[ae],pe=I?I(_[D],w[D],D,_,w):void 0;pe===void 0&&(pe=w[D]),U?Xu(_,D,pe):I3(_,D,pe)}return _}function U3(w){return j3(function(k,_){var I=-1,U=_.length,ae=U>1?_[U-1]:void 0,fe=U>2?_[2]:void 0;for(ae=w.length>3&&typeof ae=="function"?(U--,ae):void 0,fe&&X3(_[0],_[1],fe)&&(ae=U<3?void 0:ae,U=1),k=Object(k);++I<U;){var D=_[I];D&&w(k,D,I,ae)}return k})}function G3(w){return function(k,_,I){for(var U=-1,ae=Object(k),fe=I(k),D=fe.length;D--;){var pe=fe[w?D:++U];if(_(ae[pe],pe,ae)===!1)break}return k}}function Ji(w,k){var _=w.__data__;return Z3(k)?_[typeof k=="string"?"string":"hash"]:_.map}function Zu(w,k){var _=t3(w,k);return $3(_)?_:void 0}function K3(w){var k=yn.call(w,yr),_=w[yr];try{w[yr]=void 0;var I=!0}catch{}var U=Jm.call(w);return I&&(k?w[yr]=_:delete w[yr]),U}function Y3(w){return typeof w.constructor=="function"&&!ch(w)?d3(rh(w)):{}}function uh(w,k){var _=typeof w;return k=k==null?i:k,!!k&&(_=="number"||_!="symbol"&&Te.test(w))&&w>-1&&w%1==0&&w<k}function X3(w,k,_){if(!vr(_))return!1;var I=typeof k;return(I=="number"?tc(_)&&uh(k,_.length):I=="string"&&k in _)?es(_[k],w):!1}function Z3(w){var k=typeof w;return k=="string"||k=="number"||k=="symbol"||k=="boolean"?w!=="__proto__":w===null}function Q3(w){return!!Qm&&Qm in w}function ch(w){var k=w&&w.constructor,_=typeof k=="function"&&k.prototype||Gi;return w===_}function J3(w){var k=[];if(w!=null)for(var _ in Object(w))k.push(_);return k}function e5(w){return Jm.call(w)}function t5(w,k,_){return k=ah(k===void 0?w.length-1:k,0),function(){for(var I=arguments,U=-1,ae=ah(I.length-k,0),fe=Array(ae);++U<ae;)fe[U]=I[k+U];U=-1;for(var D=Array(k+1);++U<k;)D[U]=I[U];return D[k]=_(fe),Qw(w,this,D)}}function Qu(w,k){if(!(k==="constructor"&&typeof w[k]=="function")&&k!="__proto__")return w[k]}var n5=r5(B3);function r5(w){var k=0,_=0;return function(){var I=c3(),U=a-(I-_);if(_=I,U>0){if(++k>=o)return arguments[0]}else k=0;return w.apply(void 0,arguments)}}function o5(w){if(w!=null){try{return Ki.call(w)}catch{}try{return w+""}catch{}}return""}function es(w,k){return w===k||w!==w&&k!==k}var Ju=sh(function(){return arguments}())?sh:function(w){return ia(w)&&yn.call(w,"callee")&&!s3.call(w,"callee")},ec=Array.isArray;function tc(w){return w!=null&&fh(w.length)&&!nc(w)}function a5(w){return ia(w)&&tc(w)}var dh=u3||c5;function nc(w){if(!vr(w))return!1;var k=Qi(w);return k==p||k==y||k==u||k==g}function fh(w){return typeof w=="number"&&w>-1&&w%1==0&&w<=i}function vr(w){var k=typeof w;return w!=null&&(k=="object"||k=="function")}function ia(w){return w!=null&&typeof w=="object"}function i5(w){if(!ia(w)||Qi(w)!=h)return!1;var k=rh(w);if(k===null)return!0;var _=yn.call(k,"constructor")&&k.constructor;return typeof _=="function"&&_ instanceof _&&Ki.call(_)==a3}var ph=Zm?e3(Zm):L3;function s5(w){return H3(w,mh(w))}function mh(w){return tc(w)?R3(w,!0):M3(w)}var l5=U3(function(w,k,_,I){lh(w,k,_,I)});function u5(w){return function(){return w}}function hh(w){return w}function c5(){return!1}e.exports=l5})(pd,pd.exports);const ln=pd.exports;function O5(e,t=[]){const n=v.exports.useRef(e);return v.exports.useEffect(()=>{n.current=e}),v.exports.useCallback((...r)=>{var o;return(o=n.current)==null?void 0:o.call(n,...r)},t)}const cl=Boolean(globalThis==null?void 0:globalThis.document)?v.exports.useLayoutEffect:v.exports.useEffect,Th=(e,t)=>{const n=v.exports.useRef(!1),r=v.exports.useRef(!1);v.exports.useEffect(()=>{if(n.current&&r.current)return e();r.current=!0},t),v.exports.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[])};function D5(e,t){if(e!=null){if(typeof e=="function"){e(t);return}try{e.current=t}catch{throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function md(...e){return t=>{e.forEach(n=>{D5(n,t)})}}function W5(...e){return v.exports.useMemo(()=>md(...e),e)}function H5(e,t){const n=O5(e);v.exports.useEffect(()=>{if(t==null)return;let r=null;return r=window.setTimeout(()=>{n()},t),()=>{r&&window.clearTimeout(r)}},[t,n])}const Pe={open:(e,t)=>`${e}[data-open], ${e}[open], ${e}[data-state=open] ${t}`,closed:(e,t)=>`${e}[data-closed], ${e}[data-state=closed] ${t}`,hover:(e,t)=>`${e}:hover ${t}, ${e}[data-hover] ${t}`,focus:(e,t)=>`${e}:focus ${t}, ${e}[data-focus] ${t}`,focusVisible:(e,t)=>`${e}:focus-visible ${t}`,focusWithin:(e,t)=>`${e}:focus-within ${t}`,active:(e,t)=>`${e}:active ${t}, ${e}[data-active] ${t}`,disabled:(e,t)=>`${e}:disabled ${t}, ${e}[data-disabled] ${t}`,invalid:(e,t)=>`${e}:invalid ${t}, ${e}[data-invalid] ${t}`,checked:(e,t)=>`${e}:checked ${t}, ${e}[data-checked] ${t}`,indeterminate:(e,t)=>`${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,readOnly:(e,t)=>`${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,expanded:(e,t)=>`${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,placeholderShown:(e,t)=>`${e}:placeholder-shown ${t}`},Xt=e=>r1(t=>e(t,"&"),"[role=group]","[data-group]",".group"),vn=e=>r1(t=>e(t,"~ &"),"[data-peer]",".peer"),r1=(e,...t)=>t.map(e).join(", "),ko={_hover:"&:hover, &[data-hover]",_active:"&:active, &[data-active]",_focus:"&:focus, &[data-focus]",_highlighted:"&[data-highlighted]",_focusWithin:"&:focus-within, &[data-focus-within]",_focusVisible:"&:focus-visible, &[data-focus-visible]",_disabled:"&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",_readOnly:"&[aria-readonly=true], &[readonly], &[data-readonly]",_before:"&::before",_after:"&::after",_empty:"&:empty, &[data-empty]",_expanded:"&[aria-expanded=true], &[data-expanded], &[data-state=expanded]",_checked:"&[aria-checked=true], &[data-checked], &[data-state=checked]",_grabbed:"&[aria-grabbed=true], &[data-grabbed]",_pressed:"&[aria-pressed=true], &[data-pressed]",_invalid:"&[aria-invalid=true], &[data-invalid]",_valid:"&[data-valid], &[data-state=valid]",_loading:"&[data-loading], &[aria-busy=true]",_selected:"&[aria-selected=true], &[data-selected]",_hidden:"&[hidden], &[data-hidden]",_autofill:"&:-webkit-autofill",_even:"&:nth-of-type(even)",_odd:"&:nth-of-type(odd)",_first:"&:first-of-type",_firstLetter:"&::first-letter",_last:"&:last-of-type",_notFirst:"&:not(:first-of-type)",_notLast:"&:not(:last-of-type)",_visited:"&:visited",_activeLink:"&[aria-current=page]",_activeStep:"&[aria-current=step]",_indeterminate:"&:indeterminate, &[aria-checked=mixed], &[data-indeterminate], &[data-state=indeterminate]",_groupOpen:Xt(Pe.open),_groupClosed:Xt(Pe.closed),_groupHover:Xt(Pe.hover),_peerHover:vn(Pe.hover),_groupFocus:Xt(Pe.focus),_peerFocus:vn(Pe.focus),_groupFocusVisible:Xt(Pe.focusVisible),_peerFocusVisible:vn(Pe.focusVisible),_groupActive:Xt(Pe.active),_peerActive:vn(Pe.active),_groupDisabled:Xt(Pe.disabled),_peerDisabled:vn(Pe.disabled),_groupInvalid:Xt(Pe.invalid),_peerInvalid:vn(Pe.invalid),_groupChecked:Xt(Pe.checked),_peerChecked:vn(Pe.checked),_groupFocusWithin:Xt(Pe.focusWithin),_peerFocusWithin:vn(Pe.focusWithin),_peerPlaceholderShown:vn(Pe.placeholderShown),_placeholder:"&::placeholder, &[data-placeholder]",_placeholderShown:"&:placeholder-shown, &[data-placeholder-shown]",_fullScreen:"&:fullscreen, &[data-fullscreen]",_selection:"&::selection",_rtl:"[dir=rtl] &, &[dir=rtl]",_ltr:"[dir=ltr] &, &[dir=ltr]",_mediaDark:"@media (prefers-color-scheme: dark)",_mediaReduceMotion:"@media (prefers-reduced-motion: reduce)",_dark:".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",_light:".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",_horizontal:"&[data-orientation=horizontal]",_vertical:"&[data-orientation=vertical]",_open:"&[data-open], &[open], &[data-state=open]",_closed:"&[data-closed], &[data-state=closed]",_complete:"&[data-complete]",_incomplete:"&[data-incomplete]",_current:"&[data-current]"},o1=Object.keys(ko),U5=e=>/!(important)?$/.test(e),_h=e=>typeof e=="string"?e.replace(/!(important)?$/,"").trim():e,G5=(e,t)=>n=>{const r=String(t),o=U5(r),a=_h(r),i=e?`${e}.${a}`:a;let s=Et(n.__cssMap)&&i in n.__cssMap?n.__cssMap[i].varRef:t;return s=_h(s),o?`${s} !important`:s};function Xf(e){const{scale:t,transform:n,compose:r}=e;return(a,i)=>{var u;const s=G5(t,a)(i);let l=(u=n==null?void 0:n(s,i))!=null?u:s;return r&&(l=r(l,i)),l}}const rs=(...e)=>t=>e.reduce((n,r)=>r(n),t);function Tt(e,t){return n=>{const r={property:n,scale:e};return r.transform=Xf({scale:e,transform:t}),r}}const K5=({rtl:e,ltr:t})=>n=>n.direction==="rtl"?e:t;function Y5(e){const{property:t,scale:n,transform:r}=e;return{scale:n,property:K5(t),transform:n?Xf({scale:n,compose:r}):r}}const a1=["rotate(var(--chakra-rotate, 0))","scaleX(var(--chakra-scale-x, 1))","scaleY(var(--chakra-scale-y, 1))","skewX(var(--chakra-skew-x, 0))","skewY(var(--chakra-skew-y, 0))"];function X5(){return["translateX(var(--chakra-translate-x, 0))","translateY(var(--chakra-translate-y, 0))",...a1].join(" ")}function Z5(){return["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",...a1].join(" ")}const Q5={"--chakra-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-sepia":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-drop-shadow":"var(--chakra-empty,/*!*/ /*!*/)",filter:["var(--chakra-blur)","var(--chakra-brightness)","var(--chakra-contrast)","var(--chakra-grayscale)","var(--chakra-hue-rotate)","var(--chakra-invert)","var(--chakra-saturate)","var(--chakra-sepia)","var(--chakra-drop-shadow)"].join(" ")},J5={backdropFilter:["var(--chakra-backdrop-blur)","var(--chakra-backdrop-brightness)","var(--chakra-backdrop-contrast)","var(--chakra-backdrop-grayscale)","var(--chakra-backdrop-hue-rotate)","var(--chakra-backdrop-invert)","var(--chakra-backdrop-opacity)","var(--chakra-backdrop-saturate)","var(--chakra-backdrop-sepia)"].join(" "),"--chakra-backdrop-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-opacity":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-sepia":"var(--chakra-empty,/*!*/ /*!*/)"};function e9(e){return{"--chakra-ring-offset-shadow":"var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)","--chakra-ring-shadow":"var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)","--chakra-ring-width":e,boxShadow:["var(--chakra-ring-offset-shadow)","var(--chakra-ring-shadow)","var(--chakra-shadow, 0 0 #0000)"].join(", ")}}const t9={"row-reverse":{space:"--chakra-space-x-reverse",divide:"--chakra-divide-x-reverse"},"column-reverse":{space:"--chakra-space-y-reverse",divide:"--chakra-divide-y-reverse"}},hd={"to-t":"to top","to-tr":"to top right","to-r":"to right","to-br":"to bottom right","to-b":"to bottom","to-bl":"to bottom left","to-l":"to left","to-tl":"to top left"},n9=new Set(Object.values(hd)),gd=new Set(["none","-moz-initial","inherit","initial","revert","unset"]),r9=e=>e.trim();function o9(e,t){if(e==null||gd.has(e))return e;if(!(yd(e)||gd.has(e)))return`url('${e}')`;const o=/(^[a-z-A-Z]+)\((.*)\)/g.exec(e),a=o==null?void 0:o[1],i=o==null?void 0:o[2];if(!a||!i)return e;const s=a.includes("-gradient")?a:`${a}-gradient`,[l,...u]=i.split(",").map(r9).filter(Boolean);if((u==null?void 0:u.length)===0)return e;const c=l in hd?hd[l]:l;u.unshift(c);const d=u.map(f=>{if(n9.has(f))return f;const p=f.indexOf(" "),[y,b]=p!==-1?[f.substr(0,p),f.substr(p+1)]:[f],x=yd(b)?b:b&&b.split(" "),m=`colors.${y}`,h=m in t.__cssMap?t.__cssMap[m].varRef:y;return x?[h,...Array.isArray(x)?x:[x]].join(" "):h});return`${s}(${d.join(", ")})`}const yd=e=>typeof e=="string"&&e.includes("(")&&e.includes(")"),a9=(e,t)=>o9(e,t!=null?t:{});function i9(e){return/^var\(--.+\)$/.test(e)}const s9=e=>{const t=parseFloat(e.toString()),n=e.toString().replace(String(t),"");return{unitless:!n,value:t,unit:n}},Zt=e=>t=>`${e}(${t})`,W={filter(e){return e!=="auto"?e:Q5},backdropFilter(e){return e!=="auto"?e:J5},ring(e){return e9(W.px(e))},bgClip(e){return e==="text"?{color:"transparent",backgroundClip:"text"}:{backgroundClip:e}},transform(e){return e==="auto"?X5():e==="auto-gpu"?Z5():e},vh(e){return e==="$100vh"?"var(--chakra-vh)":e},px(e){if(e==null)return e;const{unitless:t}=s9(e);return t||typeof e=="number"?`${e}px`:e},fraction(e){return typeof e!="number"||e>1?e:`${e*100}%`},float(e,t){const n={left:"right",right:"left"};return t.direction==="rtl"?n[e]:e},degree(e){if(i9(e)||e==null)return e;const t=typeof e=="string"&&!e.endsWith("deg");return typeof e=="number"||t?`${e}deg`:e},gradient:a9,blur:Zt("blur"),opacity:Zt("opacity"),brightness:Zt("brightness"),contrast:Zt("contrast"),dropShadow:Zt("drop-shadow"),grayscale:Zt("grayscale"),hueRotate:e=>Zt("hue-rotate")(W.degree(e)),invert:Zt("invert"),saturate:Zt("saturate"),sepia:Zt("sepia"),bgImage(e){return e==null||yd(e)||gd.has(e)?e:`url(${e})`},outline(e){const t=String(e)==="0"||String(e)==="none";return e!==null&&t?{outline:"2px solid transparent",outlineOffset:"2px"}:{outline:e}},flexDirection(e){var o;const{space:t,divide:n}=(o=t9[e])!=null?o:{},r={flexDirection:e};return t&&(r[t]=1),n&&(r[n]=1),r}},C={borderWidths:Tt("borderWidths"),borderStyles:Tt("borderStyles"),colors:Tt("colors"),borders:Tt("borders"),gradients:Tt("gradients",W.gradient),radii:Tt("radii",W.px),space:Tt("space",rs(W.vh,W.px)),spaceT:Tt("space",rs(W.vh,W.px)),degreeT(e){return{property:e,transform:W.degree}},prop(e,t,n){return{property:e,scale:t,...t&&{transform:Xf({scale:t,transform:n})}}},propT(e,t){return{property:e,transform:t}},sizes:Tt("sizes",rs(W.vh,W.px)),sizesT:Tt("sizes",rs(W.vh,W.fraction)),shadows:Tt("shadows"),logical:Y5,blur:Tt("blur",W.blur)},$s={background:C.colors("background"),backgroundColor:C.colors("backgroundColor"),backgroundImage:C.gradients("backgroundImage"),backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundAttachment:!0,backgroundClip:{transform:W.bgClip},bgSize:C.prop("backgroundSize"),bgPosition:C.prop("backgroundPosition"),bg:C.colors("background"),bgColor:C.colors("backgroundColor"),bgPos:C.prop("backgroundPosition"),bgRepeat:C.prop("backgroundRepeat"),bgAttachment:C.prop("backgroundAttachment"),bgGradient:C.gradients("backgroundImage"),bgClip:{transform:W.bgClip}};Object.assign($s,{bgImage:$s.backgroundImage,bgImg:$s.backgroundImage});const Z={border:C.borders("border"),borderWidth:C.borderWidths("borderWidth"),borderStyle:C.borderStyles("borderStyle"),borderColor:C.colors("borderColor"),borderRadius:C.radii("borderRadius"),borderTop:C.borders("borderTop"),borderBlockStart:C.borders("borderBlockStart"),borderTopLeftRadius:C.radii("borderTopLeftRadius"),borderStartStartRadius:C.logical({scale:"radii",property:{ltr:"borderTopLeftRadius",rtl:"borderTopRightRadius"}}),borderEndStartRadius:C.logical({scale:"radii",property:{ltr:"borderBottomLeftRadius",rtl:"borderBottomRightRadius"}}),borderTopRightRadius:C.radii("borderTopRightRadius"),borderStartEndRadius:C.logical({scale:"radii",property:{ltr:"borderTopRightRadius",rtl:"borderTopLeftRadius"}}),borderEndEndRadius:C.logical({scale:"radii",property:{ltr:"borderBottomRightRadius",rtl:"borderBottomLeftRadius"}}),borderRight:C.borders("borderRight"),borderInlineEnd:C.borders("borderInlineEnd"),borderBottom:C.borders("borderBottom"),borderBlockEnd:C.borders("borderBlockEnd"),borderBottomLeftRadius:C.radii("borderBottomLeftRadius"),borderBottomRightRadius:C.radii("borderBottomRightRadius"),borderLeft:C.borders("borderLeft"),borderInlineStart:{property:"borderInlineStart",scale:"borders"},borderInlineStartRadius:C.logical({scale:"radii",property:{ltr:["borderTopLeftRadius","borderBottomLeftRadius"],rtl:["borderTopRightRadius","borderBottomRightRadius"]}}),borderInlineEndRadius:C.logical({scale:"radii",property:{ltr:["borderTopRightRadius","borderBottomRightRadius"],rtl:["borderTopLeftRadius","borderBottomLeftRadius"]}}),borderX:C.borders(["borderLeft","borderRight"]),borderInline:C.borders("borderInline"),borderY:C.borders(["borderTop","borderBottom"]),borderBlock:C.borders("borderBlock"),borderTopWidth:C.borderWidths("borderTopWidth"),borderBlockStartWidth:C.borderWidths("borderBlockStartWidth"),borderTopColor:C.colors("borderTopColor"),borderBlockStartColor:C.colors("borderBlockStartColor"),borderTopStyle:C.borderStyles("borderTopStyle"),borderBlockStartStyle:C.borderStyles("borderBlockStartStyle"),borderBottomWidth:C.borderWidths("borderBottomWidth"),borderBlockEndWidth:C.borderWidths("borderBlockEndWidth"),borderBottomColor:C.colors("borderBottomColor"),borderBlockEndColor:C.colors("borderBlockEndColor"),borderBottomStyle:C.borderStyles("borderBottomStyle"),borderBlockEndStyle:C.borderStyles("borderBlockEndStyle"),borderLeftWidth:C.borderWidths("borderLeftWidth"),borderInlineStartWidth:C.borderWidths("borderInlineStartWidth"),borderLeftColor:C.colors("borderLeftColor"),borderInlineStartColor:C.colors("borderInlineStartColor"),borderLeftStyle:C.borderStyles("borderLeftStyle"),borderInlineStartStyle:C.borderStyles("borderInlineStartStyle"),borderRightWidth:C.borderWidths("borderRightWidth"),borderInlineEndWidth:C.borderWidths("borderInlineEndWidth"),borderRightColor:C.colors("borderRightColor"),borderInlineEndColor:C.colors("borderInlineEndColor"),borderRightStyle:C.borderStyles("borderRightStyle"),borderInlineEndStyle:C.borderStyles("borderInlineEndStyle"),borderTopRadius:C.radii(["borderTopLeftRadius","borderTopRightRadius"]),borderBottomRadius:C.radii(["borderBottomLeftRadius","borderBottomRightRadius"]),borderLeftRadius:C.radii(["borderTopLeftRadius","borderBottomLeftRadius"]),borderRightRadius:C.radii(["borderTopRightRadius","borderBottomRightRadius"])};Object.assign(Z,{rounded:Z.borderRadius,roundedTop:Z.borderTopRadius,roundedTopLeft:Z.borderTopLeftRadius,roundedTopRight:Z.borderTopRightRadius,roundedTopStart:Z.borderStartStartRadius,roundedTopEnd:Z.borderStartEndRadius,roundedBottom:Z.borderBottomRadius,roundedBottomLeft:Z.borderBottomLeftRadius,roundedBottomRight:Z.borderBottomRightRadius,roundedBottomStart:Z.borderEndStartRadius,roundedBottomEnd:Z.borderEndEndRadius,roundedLeft:Z.borderLeftRadius,roundedRight:Z.borderRightRadius,roundedStart:Z.borderInlineStartRadius,roundedEnd:Z.borderInlineEndRadius,borderStart:Z.borderInlineStart,borderEnd:Z.borderInlineEnd,borderTopStartRadius:Z.borderStartStartRadius,borderTopEndRadius:Z.borderStartEndRadius,borderBottomStartRadius:Z.borderEndStartRadius,borderBottomEndRadius:Z.borderEndEndRadius,borderStartRadius:Z.borderInlineStartRadius,borderEndRadius:Z.borderInlineEndRadius,borderStartWidth:Z.borderInlineStartWidth,borderEndWidth:Z.borderInlineEndWidth,borderStartColor:Z.borderInlineStartColor,borderEndColor:Z.borderInlineEndColor,borderStartStyle:Z.borderInlineStartStyle,borderEndStyle:Z.borderInlineEndStyle});const l9={color:C.colors("color"),textColor:C.colors("color"),fill:C.colors("fill"),stroke:C.colors("stroke"),accentColor:C.colors("accentColor"),textFillColor:C.colors("textFillColor")},dl={alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:{transform:W.flexDirection},flex:!0,flexFlow:!0,flexGrow:!0,flexShrink:!0,flexBasis:C.sizes("flexBasis"),justifySelf:!0,alignSelf:!0,order:!0,placeItems:!0,placeContent:!0,placeSelf:!0,gap:C.space("gap"),rowGap:C.space("rowGap"),columnGap:C.space("columnGap")};Object.assign(dl,{flexDir:dl.flexDirection});const _t={width:C.sizesT("width"),inlineSize:C.sizesT("inlineSize"),height:C.sizes("height"),blockSize:C.sizes("blockSize"),boxSize:C.sizes(["width","height"]),minWidth:C.sizes("minWidth"),minInlineSize:C.sizes("minInlineSize"),minHeight:C.sizes("minHeight"),minBlockSize:C.sizes("minBlockSize"),maxWidth:C.sizes("maxWidth"),maxInlineSize:C.sizes("maxInlineSize"),maxHeight:C.sizes("maxHeight"),maxBlockSize:C.sizes("maxBlockSize"),overflow:!0,overflowX:!0,overflowY:!0,overscrollBehavior:!0,overscrollBehaviorX:!0,overscrollBehaviorY:!0,display:!0,aspectRatio:!0,hideFrom:{scale:"breakpoints",transform:(e,t)=>{var o,a,i;return{[`@media screen and (min-width: ${(i=(a=(o=t.__breakpoints)==null?void 0:o.get(e))==null?void 0:a.minW)!=null?i:e})`]:{display:"none"}}}},hideBelow:{scale:"breakpoints",transform:(e,t)=>{var o,a,i;return{[`@media screen and (max-width: ${(i=(a=(o=t.__breakpoints)==null?void 0:o.get(e))==null?void 0:a._minW)!=null?i:e})`]:{display:"none"}}}},verticalAlign:!0,boxSizing:!0,boxDecorationBreak:!0,float:C.propT("float",W.float),objectFit:!0,objectPosition:!0,visibility:!0,isolation:!0};Object.assign(_t,{w:_t.width,h:_t.height,minW:_t.minWidth,maxW:_t.maxWidth,minH:_t.minHeight,maxH:_t.maxHeight,overscroll:_t.overscrollBehavior,overscrollX:_t.overscrollBehaviorX,overscrollY:_t.overscrollBehaviorY});const u9={filter:{transform:W.filter},blur:C.blur("--chakra-blur"),brightness:C.propT("--chakra-brightness",W.brightness),contrast:C.propT("--chakra-contrast",W.contrast),hueRotate:C.propT("--chakra-hue-rotate",W.hueRotate),invert:C.propT("--chakra-invert",W.invert),saturate:C.propT("--chakra-saturate",W.saturate),dropShadow:C.propT("--chakra-drop-shadow",W.dropShadow),backdropFilter:{transform:W.backdropFilter},backdropBlur:C.blur("--chakra-backdrop-blur"),backdropBrightness:C.propT("--chakra-backdrop-brightness",W.brightness),backdropContrast:C.propT("--chakra-backdrop-contrast",W.contrast),backdropHueRotate:C.propT("--chakra-backdrop-hue-rotate",W.hueRotate),backdropInvert:C.propT("--chakra-backdrop-invert",W.invert),backdropSaturate:C.propT("--chakra-backdrop-saturate",W.saturate)},c9={ring:{transform:W.ring},ringColor:C.colors("--chakra-ring-color"),ringOffset:C.prop("--chakra-ring-offset-width"),ringOffsetColor:C.colors("--chakra-ring-offset-color"),ringInset:C.prop("--chakra-ring-inset")},d9={appearance:!0,cursor:!0,resize:!0,userSelect:!0,pointerEvents:!0,outline:{transform:W.outline},outlineOffset:!0,outlineColor:C.colors("outlineColor")},i1={gridGap:C.space("gridGap"),gridColumnGap:C.space("gridColumnGap"),gridRowGap:C.space("gridRowGap"),gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridColumnStart:!0,gridColumnEnd:!0,gridRowStart:!0,gridRowEnd:!0,gridAutoRows:!0,gridTemplate:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0};function f9(e,t,n,r){const o=typeof t=="string"?t.split("."):[t];for(r=0;r<o.length&&e;r+=1)e=e[o[r]];return e===void 0?n:e}const p9=e=>{const t=new WeakMap;return(r,o,a,i)=>{if(typeof r>"u")return e(r,o,a);t.has(r)||t.set(r,new Map);const s=t.get(r);if(s.has(o))return s.get(o);const l=e(r,o,a,i);return s.set(o,l),l}},m9=p9(f9),h9={border:"0px",clip:"rect(0, 0, 0, 0)",width:"1px",height:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},g9={position:"static",width:"auto",height:"auto",clip:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal"},sc=(e,t,n)=>{const r={},o=m9(e,t,{});for(const a in o)a in n&&n[a]!=null||(r[a]=o[a]);return r},y9={srOnly:{transform(e){return e===!0?h9:e==="focusable"?g9:{}}},layerStyle:{processResult:!0,transform:(e,t,n)=>sc(t,`layerStyles.${e}`,n)},textStyle:{processResult:!0,transform:(e,t,n)=>sc(t,`textStyles.${e}`,n)},apply:{processResult:!0,transform:(e,t,n)=>sc(t,e,n)}},za={position:!0,pos:C.prop("position"),zIndex:C.prop("zIndex","zIndices"),inset:C.spaceT("inset"),insetX:C.spaceT(["left","right"]),insetInline:C.spaceT("insetInline"),insetY:C.spaceT(["top","bottom"]),insetBlock:C.spaceT("insetBlock"),top:C.spaceT("top"),insetBlockStart:C.spaceT("insetBlockStart"),bottom:C.spaceT("bottom"),insetBlockEnd:C.spaceT("insetBlockEnd"),left:C.spaceT("left"),insetInlineStart:C.logical({scale:"space",property:{ltr:"left",rtl:"right"}}),right:C.spaceT("right"),insetInlineEnd:C.logical({scale:"space",property:{ltr:"right",rtl:"left"}})};Object.assign(za,{insetStart:za.insetInlineStart,insetEnd:za.insetInlineEnd});const bd={boxShadow:C.shadows("boxShadow"),mixBlendMode:!0,blendMode:C.prop("mixBlendMode"),backgroundBlendMode:!0,bgBlendMode:C.prop("backgroundBlendMode"),opacity:!0};Object.assign(bd,{shadow:bd.boxShadow});const ce={margin:C.spaceT("margin"),marginTop:C.spaceT("marginTop"),marginBlockStart:C.spaceT("marginBlockStart"),marginRight:C.spaceT("marginRight"),marginInlineEnd:C.spaceT("marginInlineEnd"),marginBottom:C.spaceT("marginBottom"),marginBlockEnd:C.spaceT("marginBlockEnd"),marginLeft:C.spaceT("marginLeft"),marginInlineStart:C.spaceT("marginInlineStart"),marginX:C.spaceT(["marginInlineStart","marginInlineEnd"]),marginInline:C.spaceT("marginInline"),marginY:C.spaceT(["marginTop","marginBottom"]),marginBlock:C.spaceT("marginBlock"),padding:C.space("padding"),paddingTop:C.space("paddingTop"),paddingBlockStart:C.space("paddingBlockStart"),paddingRight:C.space("paddingRight"),paddingBottom:C.space("paddingBottom"),paddingBlockEnd:C.space("paddingBlockEnd"),paddingLeft:C.space("paddingLeft"),paddingInlineStart:C.space("paddingInlineStart"),paddingInlineEnd:C.space("paddingInlineEnd"),paddingX:C.space(["paddingInlineStart","paddingInlineEnd"]),paddingInline:C.space("paddingInline"),paddingY:C.space(["paddingTop","paddingBottom"]),paddingBlock:C.space("paddingBlock")};Object.assign(ce,{m:ce.margin,mt:ce.marginTop,mr:ce.marginRight,me:ce.marginInlineEnd,marginEnd:ce.marginInlineEnd,mb:ce.marginBottom,ml:ce.marginLeft,ms:ce.marginInlineStart,marginStart:ce.marginInlineStart,mx:ce.marginX,my:ce.marginY,p:ce.padding,pt:ce.paddingTop,py:ce.paddingY,px:ce.paddingX,pb:ce.paddingBottom,pl:ce.paddingLeft,ps:ce.paddingInlineStart,paddingStart:ce.paddingInlineStart,pr:ce.paddingRight,pe:ce.paddingInlineEnd,paddingEnd:ce.paddingInlineEnd});const b9={scrollBehavior:!0,scrollSnapAlign:!0,scrollSnapStop:!0,scrollSnapType:!0,scrollMargin:C.spaceT("scrollMargin"),scrollMarginTop:C.spaceT("scrollMarginTop"),scrollMarginBottom:C.spaceT("scrollMarginBottom"),scrollMarginLeft:C.spaceT("scrollMarginLeft"),scrollMarginRight:C.spaceT("scrollMarginRight"),scrollMarginX:C.spaceT(["scrollMarginLeft","scrollMarginRight"]),scrollMarginY:C.spaceT(["scrollMarginTop","scrollMarginBottom"]),scrollPadding:C.spaceT("scrollPadding"),scrollPaddingTop:C.spaceT("scrollPaddingTop"),scrollPaddingBottom:C.spaceT("scrollPaddingBottom"),scrollPaddingLeft:C.spaceT("scrollPaddingLeft"),scrollPaddingRight:C.spaceT("scrollPaddingRight"),scrollPaddingX:C.spaceT(["scrollPaddingLeft","scrollPaddingRight"]),scrollPaddingY:C.spaceT(["scrollPaddingTop","scrollPaddingBottom"])},v9={fontFamily:C.prop("fontFamily","fonts"),fontSize:C.prop("fontSize","fontSizes",W.px),fontWeight:C.prop("fontWeight","fontWeights"),lineHeight:C.prop("lineHeight","lineHeights"),letterSpacing:C.prop("letterSpacing","letterSpacings"),textAlign:!0,fontStyle:!0,textIndent:!0,wordBreak:!0,overflowWrap:!0,textOverflow:!0,textTransform:!0,whiteSpace:!0,isTruncated:{transform(e){if(e===!0)return{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}},noOfLines:{static:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"var(--chakra-line-clamp)"},property:"--chakra-line-clamp"}},w9={textDecorationColor:C.colors("textDecorationColor"),textDecoration:!0,textDecor:{property:"textDecoration"},textDecorationLine:!0,textDecorationStyle:!0,textDecorationThickness:!0,textUnderlineOffset:!0,textShadow:C.shadows("textShadow")},x9={clipPath:!0,transform:C.propT("transform",W.transform),transformOrigin:!0,translateX:C.spaceT("--chakra-translate-x"),translateY:C.spaceT("--chakra-translate-y"),skewX:C.degreeT("--chakra-skew-x"),skewY:C.degreeT("--chakra-skew-y"),scaleX:C.prop("--chakra-scale-x"),scaleY:C.prop("--chakra-scale-y"),scale:C.prop(["--chakra-scale-x","--chakra-scale-y"]),rotate:C.degreeT("--chakra-rotate")},S9={listStyleType:!0,listStylePosition:!0,listStylePos:C.prop("listStylePosition"),listStyleImage:!0,listStyleImg:C.prop("listStyleImage")},C9={transition:!0,transitionDelay:!0,animation:!0,willChange:!0,transitionDuration:C.prop("transitionDuration","transition.duration"),transitionProperty:C.prop("transitionProperty","transition.property"),transitionTimingFunction:C.prop("transitionTimingFunction","transition.easing")},Zf=ln({},$s,Z,l9,dl,_t,u9,c9,d9,i1,y9,za,bd,ce,b9,v9,w9,x9,S9,C9);Object.assign({},ce,_t,dl,i1,za);const k9=[...Object.keys(Zf),...o1],T9={...Zf,...ko},_9=e=>e in T9,F9=e=>t=>{if(!t.__breakpoints)return e;const{isResponsive:n,toArrayValue:r,media:o}=t.__breakpoints,a={};for(const i in e){let s=sn(e[i],t);if(s==null)continue;if(s=Et(s)&&n(s)?r(s):s,!Array.isArray(s)){a[i]=s;continue}const l=s.slice(0,o.length).length;for(let u=0;u<l;u+=1){const c=o==null?void 0:o[u];if(!c){a[i]=s[u];continue}a[c]=a[c]||{},s[u]!=null&&(a[c][i]=s[u])}}return a};function P9(e){const t=[];let n="",r=!1;for(let o=0;o<e.length;o++){const a=e[o];a==="("?(r=!0,n+=a):a===")"?(r=!1,n+=a):a===","&&!r?(t.push(n),n=""):n+=a}return n=n.trim(),n&&t.push(n),t}function A9(e){return/^var\(--.+\)$/.test(e)}const E9=(e,t)=>e.startsWith("--")&&typeof t=="string"&&!A9(t),q9=(e,t)=>{var i,s;if(t==null)return t;const n=l=>{var u,c;return(c=(u=e.__cssMap)==null?void 0:u[l])==null?void 0:c.varRef},r=l=>{var u;return(u=n(l))!=null?u:l},[o,a]=P9(t);return t=(s=(i=n(o))!=null?i:r(a))!=null?s:r(t),t};function R9(e){const{configs:t={},pseudos:n={},theme:r}=e,o=(a,i=!1)=>{var c,d,f;const s=sn(a,r),l=F9(s)(r);let u={};for(let p in l){const y=l[p];let b=sn(y,r);p in n&&(p=n[p]),E9(p,b)&&(b=q9(r,b));let x=t[p];if(x===!0&&(x={property:p}),Et(b)){u[p]=(c=u[p])!=null?c:{},u[p]=ln({},u[p],o(b,!0));continue}let m=(f=(d=x==null?void 0:x.transform)==null?void 0:d.call(x,b,r,s))!=null?f:b;m=x!=null&&x.processResult?o(m,!0):m;const h=sn(x==null?void 0:x.property,r);if(!i&&(x==null?void 0:x.static)){const g=sn(x.static,r);u=ln({},u,g)}if(h&&Array.isArray(h)){for(const g of h)u[g]=m;continue}if(h){h==="&"&&Et(m)?u=ln({},u,m):u[h]=m;continue}if(Et(m)){u=ln({},u,m);continue}u[p]=m}return u};return o}const s1=e=>t=>R9({theme:t,pseudos:ko,configs:Zf})(e);function le(e){return{definePartsStyle(t){return t},defineMultiStyleConfig(t){return{parts:e,...t}}}}function I9(e,t){if(Array.isArray(e))return e;if(Et(e))return t(e);if(e!=null)return[e]}function z9(e,t){for(let n=t+1;n<e.length;n++)if(e[n]!=null)return n;return-1}function $9(e){const t=e.__breakpoints;return function(r,o,a,i){var f,p;if(!t)return;const s={},l=I9(a,t.toArrayValue);if(!l)return s;const u=l.length,c=u===1,d=!!r.parts;for(let y=0;y<u;y++){const b=t.details[y],x=t.details[z9(l,y)],m=Ca(b.minW,x==null?void 0:x._minW),h=sn((f=r[o])==null?void 0:f[l[y]],i);if(!!h){if(d){(p=r.parts)==null||p.forEach(g=>{ln(s,{[g]:c?h[g]:{[m]:h[g]}})});continue}if(!d){c?ln(s,h):s[m]=h;continue}s[m]=h}}return s}}function L9(e){return t=>{var i;const{variant:n,size:r,theme:o}=t,a=$9(o);return ln({},sn((i=e.baseStyle)!=null?i:{},t),a(e,"sizes",r,t),a(e,"variants",n,t))}}function Gt(e){return n1(e,["styleConfig","size","variant","colorScheme"])}function l1(e){return Et(e)&&e.reference?e.reference:String(e)}const eu=(e,...t)=>t.map(l1).join(` ${e} `).replace(/calc/g,""),Fh=(...e)=>`calc(${eu("+",...e)})`,Ph=(...e)=>`calc(${eu("-",...e)})`,vd=(...e)=>`calc(${eu("*",...e)})`,Ah=(...e)=>`calc(${eu("/",...e)})`,Eh=e=>{const t=l1(e);return t!=null&&!Number.isNaN(parseFloat(t))?String(t).startsWith("-")?String(t).slice(1):`-${t}`:vd(t,-1)},Cn=Object.assign(e=>({add:(...t)=>Cn(Fh(e,...t)),subtract:(...t)=>Cn(Ph(e,...t)),multiply:(...t)=>Cn(vd(e,...t)),divide:(...t)=>Cn(Ah(e,...t)),negate:()=>Cn(Eh(e)),toString:()=>e.toString()}),{add:Fh,subtract:Ph,multiply:vd,divide:Ah,negate:Eh});function M9(e,t="-"){return e.replace(/\s+/g,t)}function V9(e){const t=M9(e.toString());return B9(j9(t))}function j9(e){return e.includes("\\.")?e:!Number.isInteger(parseFloat(e.toString()))?e.replace(".","\\."):e}function B9(e){return e.replace(/[!-,/:-@[-^`{-~]/g,"\\$&")}function N9(e,t=""){return[t,e].filter(Boolean).join("-")}function O9(e,t){return`var(${e}${t?`, ${t}`:""})`}function D9(e,t=""){return V9(`--${N9(e,t)}`)}function V(e,t,n){const r=D9(e,n);return{variable:r,reference:O9(r,t)}}function W9(e,t){const n={};for(const r of t){if(Array.isArray(r)){const[o,a]=r;n[o]=V(`${e}-${o}`,a);continue}n[r]=V(`${e}-${r}`)}return n}const H9=["colors","borders","borderWidths","borderStyles","fonts","fontSizes","fontWeights","gradients","letterSpacings","lineHeights","radii","space","shadows","sizes","zIndices","transition","blur","breakpoints"];function U9(e){return j5(e,H9)}function G9(e){return e.semanticTokens}function K9(e){const{__cssMap:t,__cssVars:n,__breakpoints:r,...o}=e;return o}function Y9(e){const t=U9(e),n=G9(e),r=a=>o1.includes(a)||a==="default",o={};return kh(t,(a,i)=>{a!=null&&(o[i.join(".")]={isSemantic:!1,value:a})}),kh(n,(a,i)=>{a!=null&&(o[i.join(".")]={isSemantic:!0,value:a})},{stop:a=>Object.keys(a).every(r)}),o}function qh(e,t){return V(String(e).replace(/\./g,"-"),void 0,t)}function X9(e){var i;const t=Y9(e),n=(i=e.config)==null?void 0:i.cssVarPrefix;let r={};const o={};function a(s,l){const c=[String(s).split(".")[0],l].join(".");if(!t[c])return l;const{reference:f}=qh(c,n);return f}for(const[s,l]of Object.entries(t)){const{isSemantic:u,value:c}=l,{variable:d,reference:f}=qh(s,n);if(!u){if(s.startsWith("space")){const y=s.split("."),[b,...x]=y,m=`${b}.-${x.join(".")}`,h=Cn.negate(c),g=Cn.negate(f);o[m]={value:h,var:d,varRef:g}}r[d]=c,o[s]={value:c,var:d,varRef:f};continue}const p=Et(c)?c:{default:c};r=ln(r,Object.entries(p).reduce((y,[b,x])=>{var g;if(!x)return y;const m=a(s,`${x}`);if(b==="default")return y[d]=m,y;const h=(g=ko==null?void 0:ko[b])!=null?g:b;return y[h]={[d]:m},y},{})),o[s]={value:f,var:d,varRef:f}}return{cssVars:r,cssMap:o}}function Z9(e){const t=K9(e),{cssMap:n,cssVars:r}=X9(t);return Object.assign(t,{__cssVars:{...{"--chakra-ring-inset":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-ring-offset-width":"0px","--chakra-ring-offset-color":"#fff","--chakra-ring-color":"rgba(66, 153, 225, 0.6)","--chakra-ring-offset-shadow":"0 0 #0000","--chakra-ring-shadow":"0 0 #0000","--chakra-space-x-reverse":"0","--chakra-space-y-reverse":"0"},...r},__cssMap:n,__breakpoints:b5(t.breakpoints)}),t}function te(e,t={}){let n=!1;function r(){if(!n){n=!0;return}throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?")}function o(...c){r();for(const d of c)t[d]=l(d);return te(e,t)}function a(...c){for(const d of c)d in t||(t[d]=l(d));return te(e,t)}function i(){return Object.fromEntries(Object.entries(t).map(([d,f])=>[d,f.selector]))}function s(){return Object.fromEntries(Object.entries(t).map(([d,f])=>[d,f.className]))}function l(c){const p=`chakra-${(["container","root"].includes(c!=null?c:"")?[e]:[e,c]).filter(Boolean).join("__")}`;return{className:p,selector:`.${p}`,toString:()=>c}}return{parts:o,toPart:l,extend:a,selectors:i,classnames:s,get keys(){return Object.keys(t)},__type:{}}}const Q9=te("accordion").parts("root","container","button","panel","icon"),J9=te("alert").parts("title","description","container","icon","spinner"),ex=te("avatar").parts("label","badge","container","excessLabel","group"),tx=te("breadcrumb").parts("link","item","container","separator");te("button").parts();const nx=te("checkbox").parts("control","icon","container","label");te("progress").parts("track","filledTrack","label");const rx=te("drawer").parts("overlay","dialogContainer","dialog","header","closeButton","body","footer"),ox=te("editable").parts("preview","input","textarea"),ax=te("form").parts("container","requiredIndicator","helperText"),ix=te("formError").parts("text","icon"),sx=te("input").parts("addon","field","element","group"),lx=te("list").parts("container","item","icon"),ux=te("menu").parts("button","list","item","groupTitle","icon","command","divider"),cx=te("modal").parts("overlay","dialogContainer","dialog","header","closeButton","body","footer"),dx=te("numberinput").parts("root","field","stepperGroup","stepper");te("pininput").parts("field");const fx=te("popover").parts("content","header","body","footer","popper","arrow","closeButton"),px=te("progress").parts("label","filledTrack","track"),mx=te("radio").parts("container","control","label"),hx=te("select").parts("field","icon"),gx=te("slider").parts("container","track","thumb","filledTrack","mark"),yx=te("stat").parts("container","label","helpText","number","icon"),bx=te("switch").parts("container","track","thumb","label"),vx=te("table").parts("table","thead","tbody","tr","th","td","tfoot","caption"),wx=te("tabs").parts("root","tab","tablist","tabpanel","tabpanels","indicator"),xx=te("tag").parts("container","label","closeButton"),Sx=te("card").parts("container","header","body","footer");te("stepper").parts("stepper","step","title","description","indicator","separator","icon","number");const{definePartsStyle:Cx,defineMultiStyleConfig:kx}=le(Q9.keys),Tx={borderTopWidth:"1px",borderColor:"inherit",_last:{borderBottomWidth:"1px"}},_x={transitionProperty:"common",transitionDuration:"normal",fontSize:"md",_focusVisible:{boxShadow:"outline"},_hover:{bg:"blackAlpha.50"},_disabled:{opacity:.4,cursor:"not-allowed"},px:"4",py:"2"},Fx={pt:"2",px:"4",pb:"5"},Px={fontSize:"1.25em"},Ax=Cx({container:Tx,button:_x,panel:Fx,icon:Px}),Ex=kx({baseStyle:Ax});function _r(e,t,n){return Math.min(Math.max(e,n),t)}class qx extends Error{constructor(t){super(`Failed to parse color: "${t}"`)}}var ka=qx;function Qf(e){if(typeof e!="string")throw new ka(e);if(e.trim().toLowerCase()==="transparent")return[0,0,0,0];let t=e.trim();t=jx.test(e)?zx(e):e;const n=$x.exec(t);if(n){const i=Array.from(n).slice(1);return[...i.slice(0,3).map(s=>parseInt(oi(s,2),16)),parseInt(oi(i[3]||"f",2),16)/255]}const r=Lx.exec(t);if(r){const i=Array.from(r).slice(1);return[...i.slice(0,3).map(s=>parseInt(s,16)),parseInt(i[3]||"ff",16)/255]}const o=Mx.exec(t);if(o){const i=Array.from(o).slice(1);return[...i.slice(0,3).map(s=>parseInt(s,10)),parseFloat(i[3]||"1")]}const a=Vx.exec(t);if(a){const[i,s,l,u]=Array.from(a).slice(1).map(parseFloat);if(_r(0,100,s)!==s)throw new ka(e);if(_r(0,100,l)!==l)throw new ka(e);return[...Bx(i,s,l),Number.isNaN(u)?1:u]}throw new ka(e)}function Rx(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0)%2341}const Rh=e=>parseInt(e.replace(/_/g,""),36),Ix="1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e,t)=>{const n=Rh(t.substring(0,3)),r=Rh(t.substring(3)).toString(16);let o="";for(let a=0;a<6-r.length;a++)o+="0";return e[n]=`${o}${r}`,e},{});function zx(e){const t=e.toLowerCase().trim(),n=Ix[Rx(t)];if(!n)throw new ka(e);return`#${n}`}const oi=(e,t)=>Array.from(Array(t)).map(()=>e).join(""),$x=new RegExp(`^#${oi("([a-f0-9])",3)}([a-f0-9])?$`,"i"),Lx=new RegExp(`^#${oi("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`,"i"),Mx=new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${oi(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i"),Vx=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,jx=/^[a-z]+$/i,Ih=e=>Math.round(e*255),Bx=(e,t,n)=>{let r=n/100;if(t===0)return[r,r,r].map(Ih);const o=(e%360+360)%360/60,a=(1-Math.abs(2*r-1))*(t/100),i=a*(1-Math.abs(o%2-1));let s=0,l=0,u=0;o>=0&&o<1?(s=a,l=i):o>=1&&o<2?(s=i,l=a):o>=2&&o<3?(l=a,u=i):o>=3&&o<4?(l=i,u=a):o>=4&&o<5?(s=i,u=a):o>=5&&o<6&&(s=a,u=i);const c=r-a/2,d=s+c,f=l+c,p=u+c;return[d,f,p].map(Ih)};function Nx(e,t,n,r){return`rgba(${_r(0,255,e).toFixed()}, ${_r(0,255,t).toFixed()}, ${_r(0,255,n).toFixed()}, ${parseFloat(_r(0,1,r).toFixed(3))})`}function Ox(e,t){const[n,r,o,a]=Qf(e);return Nx(n,r,o,a-t)}function Dx(e){const[t,n,r,o]=Qf(e);let a=i=>{const s=_r(0,255,i).toString(16);return s.length===1?`0${s}`:s};return`#${a(t)}${a(n)}${a(r)}${o<1?a(Math.round(o*255)):""}`}const Wx=e=>Object.keys(e).length===0;function Hx(e,t,n,r,o){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:o;return e===o?n:e}const Ye=(e,t,n)=>{const r=Hx(e,`colors.${t}`,t);try{return Dx(r),r}catch{return n!=null?n:"#000000"}},Ux=e=>{const[t,n,r]=Qf(e);return(t*299+n*587+r*114)/1e3},Gx=e=>t=>{const n=Ye(t,e);return Ux(n)<128?"dark":"light"},Kx=e=>t=>Gx(e)(t)==="dark",Vo=(e,t)=>n=>{const r=Ye(n,e);return Ox(r,1-t)};function zh(e="1rem",t="rgba(255, 255, 255, 0.15)"){return{backgroundImage:`linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,backgroundSize:`${e} ${e}`}}const Yx=()=>`#${Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0")}`;function Xx(e){const t=Yx();return!e||Wx(e)?t:e.string&&e.colors?Qx(e.string,e.colors):e.string&&!e.colors?Zx(e.string):e.colors&&!e.string?Jx(e.colors):t}function Zx(e){let t=0;if(e.length===0)return t.toString();for(let r=0;r<e.length;r+=1)t=e.charCodeAt(r)+((t<<5)-t),t=t&t;let n="#";for(let r=0;r<3;r+=1){const o=t>>r*8&255;n+=`00${o.toString(16)}`.substr(-2)}return n}function Qx(e,t){let n=0;if(e.length===0)return t[0];for(let r=0;r<e.length;r+=1)n=e.charCodeAt(r)+((n<<5)-n),n=n&n;return n=(n%t.length+t.length)%t.length,t[n]}function Jx(e){return e[Math.floor(Math.random()*e.length)]}function M(e,t){return n=>n.colorMode==="dark"?t:e}function Jf(e){const{orientation:t,vertical:n,horizontal:r}=e;return t?t==="vertical"?n:r:{}}function u1(e){return Et(e)&&e.reference?e.reference:String(e)}const tu=(e,...t)=>t.map(u1).join(` ${e} `).replace(/calc/g,""),$h=(...e)=>`calc(${tu("+",...e)})`,Lh=(...e)=>`calc(${tu("-",...e)})`,wd=(...e)=>`calc(${tu("*",...e)})`,Mh=(...e)=>`calc(${tu("/",...e)})`,Vh=e=>{const t=u1(e);return t!=null&&!Number.isNaN(parseFloat(t))?String(t).startsWith("-")?String(t).slice(1):`-${t}`:wd(t,-1)},kn=Object.assign(e=>({add:(...t)=>kn($h(e,...t)),subtract:(...t)=>kn(Lh(e,...t)),multiply:(...t)=>kn(wd(e,...t)),divide:(...t)=>kn(Mh(e,...t)),negate:()=>kn(Vh(e)),toString:()=>e.toString()}),{add:$h,subtract:Lh,multiply:wd,divide:Mh,negate:Vh});function e6(e){return!Number.isInteger(parseFloat(e.toString()))}function t6(e,t="-"){return e.replace(/\s+/g,t)}function c1(e){const t=t6(e.toString());return t.includes("\\.")?e:e6(e)?t.replace(".","\\."):e}function n6(e,t=""){return[t,c1(e)].filter(Boolean).join("-")}function r6(e,t){return`var(${c1(e)}${t?`, ${t}`:""})`}function o6(e,t=""){return`--${n6(e,t)}`}function Re(e,t){const n=o6(e,t==null?void 0:t.prefix);return{variable:n,reference:r6(n,a6(t==null?void 0:t.fallback))}}function a6(e){return typeof e=="string"?e:e==null?void 0:e.reference}const{definePartsStyle:zi,defineMultiStyleConfig:i6}=le(J9.keys),mt=V("alert-fg"),In=V("alert-bg"),s6=zi({container:{bg:In.reference,px:"4",py:"3"},title:{fontWeight:"bold",lineHeight:"6",marginEnd:"2"},description:{lineHeight:"6"},icon:{color:mt.reference,flexShrink:0,marginEnd:"3",w:"5",h:"6"},spinner:{color:mt.reference,flexShrink:0,marginEnd:"3",w:"5",h:"5"}});function ep(e){const{theme:t,colorScheme:n}=e,r=Vo(`${n}.200`,.16)(t);return{light:`colors.${n}.100`,dark:r}}const l6=zi(e=>{const{colorScheme:t}=e,n=ep(e);return{container:{[mt.variable]:`colors.${t}.600`,[In.variable]:n.light,_dark:{[mt.variable]:`colors.${t}.200`,[In.variable]:n.dark}}}}),u6=zi(e=>{const{colorScheme:t}=e,n=ep(e);return{container:{[mt.variable]:`colors.${t}.600`,[In.variable]:n.light,_dark:{[mt.variable]:`colors.${t}.200`,[In.variable]:n.dark},paddingStart:"3",borderStartWidth:"4px",borderStartColor:mt.reference}}}),c6=zi(e=>{const{colorScheme:t}=e,n=ep(e);return{container:{[mt.variable]:`colors.${t}.600`,[In.variable]:n.light,_dark:{[mt.variable]:`colors.${t}.200`,[In.variable]:n.dark},pt:"2",borderTopWidth:"4px",borderTopColor:mt.reference}}}),d6=zi(e=>{const{colorScheme:t}=e;return{container:{[mt.variable]:"colors.white",[In.variable]:`colors.${t}.600`,_dark:{[mt.variable]:"colors.gray.900",[In.variable]:`colors.${t}.200`},color:mt.reference}}}),f6={subtle:l6,"left-accent":u6,"top-accent":c6,solid:d6},p6=i6({baseStyle:s6,variants:f6,defaultProps:{variant:"subtle",colorScheme:"blue"}}),d1={px:"1px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},m6={max:"max-content",min:"min-content",full:"100%","3xs":"14rem","2xs":"16rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem","8xl":"90rem",prose:"60ch"},h6={sm:"640px",md:"768px",lg:"1024px",xl:"1280px"},f1={...d1,...m6,container:h6},g6=e=>typeof e=="function";function Xe(e,...t){return g6(e)?e(...t):e}const{definePartsStyle:p1,defineMultiStyleConfig:y6}=le(ex.keys),To=V("avatar-border-color"),$a=V("avatar-bg"),ai=V("avatar-font-size"),jo=V("avatar-size"),b6={borderRadius:"full",border:"0.2em solid",borderColor:To.reference,[To.variable]:"white",_dark:{[To.variable]:"colors.gray.800"}},v6={bg:$a.reference,fontSize:ai.reference,width:jo.reference,height:jo.reference,lineHeight:"1",[$a.variable]:"colors.gray.200",_dark:{[$a.variable]:"colors.whiteAlpha.400"}},w6=e=>{const{name:t,theme:n}=e,r=t?Xx({string:t}):"colors.gray.400",o=Kx(r)(n);let a="white";return o||(a="gray.800"),{bg:$a.reference,fontSize:ai.reference,color:a,borderColor:To.reference,verticalAlign:"top",width:jo.reference,height:jo.reference,"&:not([data-loaded])":{[$a.variable]:r},[To.variable]:"colors.white",_dark:{[To.variable]:"colors.gray.800"}}},x6={fontSize:ai.reference,lineHeight:"1"},S6=p1(e=>({badge:Xe(b6,e),excessLabel:Xe(v6,e),container:Xe(w6,e),label:x6}));function Nn(e){const t=e!=="100%"?f1[e]:void 0;return p1({container:{[jo.variable]:t!=null?t:e,[ai.variable]:`calc(${t!=null?t:e} / 2.5)`},excessLabel:{[jo.variable]:t!=null?t:e,[ai.variable]:`calc(${t!=null?t:e} / 2.5)`}})}const C6={"2xs":Nn(4),xs:Nn(6),sm:Nn(8),md:Nn(12),lg:Nn(16),xl:Nn(24),"2xl":Nn(32),full:Nn("100%")},k6=y6({baseStyle:S6,sizes:C6,defaultProps:{size:"md"}}),ke=W9("badge",["bg","color","shadow"]),T6={px:1,textTransform:"uppercase",fontSize:"xs",borderRadius:"sm",fontWeight:"bold",bg:ke.bg.reference,color:ke.color.reference,boxShadow:ke.shadow.reference},_6=e=>{const{colorScheme:t,theme:n}=e,r=Vo(`${t}.500`,.6)(n);return{[ke.bg.variable]:`colors.${t}.500`,[ke.color.variable]:"colors.white",_dark:{[ke.bg.variable]:r,[ke.color.variable]:"colors.whiteAlpha.800"}}},F6=e=>{const{colorScheme:t,theme:n}=e,r=Vo(`${t}.200`,.16)(n);return{[ke.bg.variable]:`colors.${t}.100`,[ke.color.variable]:`colors.${t}.800`,_dark:{[ke.bg.variable]:r,[ke.color.variable]:`colors.${t}.200`}}},P6=e=>{const{colorScheme:t,theme:n}=e,r=Vo(`${t}.200`,.8)(n);return{[ke.color.variable]:`colors.${t}.500`,_dark:{[ke.color.variable]:r},[ke.shadow.variable]:`inset 0 0 0px 1px ${ke.color.reference}`}},A6={solid:_6,subtle:F6,outline:P6},La={baseStyle:T6,variants:A6,defaultProps:{variant:"subtle",colorScheme:"gray"}},{defineMultiStyleConfig:E6,definePartsStyle:q6}=le(tx.keys),lc=V("breadcrumb-link-decor"),R6={transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",outline:"none",color:"inherit",textDecoration:lc.reference,[lc.variable]:"none","&:not([aria-current=page])":{cursor:"pointer",_hover:{[lc.variable]:"underline"},_focusVisible:{boxShadow:"outline"}}},I6=q6({link:R6}),z6=E6({baseStyle:I6}),$6={lineHeight:"1.2",borderRadius:"md",fontWeight:"semibold",transitionProperty:"common",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{_disabled:{bg:"initial"}}},m1=e=>{const{colorScheme:t,theme:n}=e;if(t==="gray")return{color:M("gray.800","whiteAlpha.900")(e),_hover:{bg:M("gray.100","whiteAlpha.200")(e)},_active:{bg:M("gray.200","whiteAlpha.300")(e)}};const r=Vo(`${t}.200`,.12)(n),o=Vo(`${t}.200`,.24)(n);return{color:M(`${t}.600`,`${t}.200`)(e),bg:"transparent",_hover:{bg:M(`${t}.50`,r)(e)},_active:{bg:M(`${t}.100`,o)(e)}}},L6=e=>{const{colorScheme:t}=e,n=M("gray.200","whiteAlpha.300")(e);return{border:"1px solid",borderColor:t==="gray"?n:"currentColor",".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":{marginEnd:"-1px"},".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":{marginBottom:"-1px"},...Xe(m1,e)}},M6={yellow:{bg:"yellow.400",color:"black",hoverBg:"yellow.500",activeBg:"yellow.600"},cyan:{bg:"cyan.400",color:"black",hoverBg:"cyan.500",activeBg:"cyan.600"}},V6=e=>{var s;const{colorScheme:t}=e;if(t==="gray"){const l=M("gray.100","whiteAlpha.200")(e);return{bg:l,color:M("gray.800","whiteAlpha.900")(e),_hover:{bg:M("gray.200","whiteAlpha.300")(e),_disabled:{bg:l}},_active:{bg:M("gray.300","whiteAlpha.400")(e)}}}const{bg:n=`${t}.500`,color:r="white",hoverBg:o=`${t}.600`,activeBg:a=`${t}.700`}=(s=M6[t])!=null?s:{},i=M(n,`${t}.200`)(e);return{bg:i,color:M(r,"gray.800")(e),_hover:{bg:M(o,`${t}.300`)(e),_disabled:{bg:i}},_active:{bg:M(a,`${t}.400`)(e)}}},j6=e=>{const{colorScheme:t}=e;return{padding:0,height:"auto",lineHeight:"normal",verticalAlign:"baseline",color:M(`${t}.500`,`${t}.200`)(e),_hover:{textDecoration:"underline",_disabled:{textDecoration:"none"}},_active:{color:M(`${t}.700`,`${t}.500`)(e)}}},B6={bg:"none",color:"inherit",display:"inline",lineHeight:"inherit",m:"0",p:"0"},N6={ghost:m1,outline:L6,solid:V6,link:j6,unstyled:B6},O6={lg:{h:"12",minW:"12",fontSize:"lg",px:"6"},md:{h:"10",minW:"10",fontSize:"md",px:"4"},sm:{h:"8",minW:"8",fontSize:"sm",px:"3"},xs:{h:"6",minW:"6",fontSize:"xs",px:"2"}},D6={baseStyle:$6,variants:N6,sizes:O6,defaultProps:{variant:"solid",size:"md",colorScheme:"gray"}},{definePartsStyle:Rr,defineMultiStyleConfig:W6}=le(Sx.keys),fl=V("card-bg"),An=V("card-padding"),h1=V("card-shadow"),Ls=V("card-radius"),g1=V("card-border-width","0"),y1=V("card-border-color"),H6=Rr({container:{[fl.variable]:"colors.chakra-body-bg",backgroundColor:fl.reference,boxShadow:h1.reference,borderRadius:Ls.reference,color:"chakra-body-text",borderWidth:g1.reference,borderColor:y1.reference},body:{padding:An.reference,flex:"1 1 0%"},header:{padding:An.reference},footer:{padding:An.reference}}),U6={sm:Rr({container:{[Ls.variable]:"radii.base",[An.variable]:"space.3"}}),md:Rr({container:{[Ls.variable]:"radii.md",[An.variable]:"space.5"}}),lg:Rr({container:{[Ls.variable]:"radii.xl",[An.variable]:"space.7"}})},G6={elevated:Rr({container:{[h1.variable]:"shadows.base",_dark:{[fl.variable]:"colors.gray.700"}}}),outline:Rr({container:{[g1.variable]:"1px",[y1.variable]:"colors.chakra-border-color"}}),filled:Rr({container:{[fl.variable]:"colors.chakra-subtle-bg"}}),unstyled:{body:{[An.variable]:0},header:{[An.variable]:0},footer:{[An.variable]:0}}},K6=W6({baseStyle:H6,variants:G6,sizes:U6,defaultProps:{variant:"elevated",size:"md"}}),{definePartsStyle:Ms,defineMultiStyleConfig:Y6}=le(nx.keys),Ma=V("checkbox-size"),X6=e=>{const{colorScheme:t}=e;return{w:Ma.reference,h:Ma.reference,transitionProperty:"box-shadow",transitionDuration:"normal",border:"2px solid",borderRadius:"sm",borderColor:"inherit",color:"white",_checked:{bg:M(`${t}.500`,`${t}.200`)(e),borderColor:M(`${t}.500`,`${t}.200`)(e),color:M("white","gray.900")(e),_hover:{bg:M(`${t}.600`,`${t}.300`)(e),borderColor:M(`${t}.600`,`${t}.300`)(e)},_disabled:{borderColor:M("gray.200","transparent")(e),bg:M("gray.200","whiteAlpha.300")(e),color:M("gray.500","whiteAlpha.500")(e)}},_indeterminate:{bg:M(`${t}.500`,`${t}.200`)(e),borderColor:M(`${t}.500`,`${t}.200`)(e),color:M("white","gray.900")(e)},_disabled:{bg:M("gray.100","whiteAlpha.100")(e),borderColor:M("gray.100","transparent")(e)},_focusVisible:{boxShadow:"outline"},_invalid:{borderColor:M("red.500","red.300")(e)}}},Z6={_disabled:{cursor:"not-allowed"}},Q6={userSelect:"none",_disabled:{opacity:.4}},J6={transitionProperty:"transform",transitionDuration:"normal"},eS=Ms(e=>({icon:J6,container:Z6,control:Xe(X6,e),label:Q6})),tS={sm:Ms({control:{[Ma.variable]:"sizes.3"},label:{fontSize:"sm"},icon:{fontSize:"3xs"}}),md:Ms({control:{[Ma.variable]:"sizes.4"},label:{fontSize:"md"},icon:{fontSize:"2xs"}}),lg:Ms({control:{[Ma.variable]:"sizes.5"},label:{fontSize:"lg"},icon:{fontSize:"2xs"}})},Hn=Y6({baseStyle:eS,sizes:tS,defaultProps:{size:"md",colorScheme:"blue"}}),Va=Re("close-button-size"),la=Re("close-button-bg"),nS={w:[Va.reference],h:[Va.reference],borderRadius:"md",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{[la.variable]:"colors.blackAlpha.100",_dark:{[la.variable]:"colors.whiteAlpha.100"}},_active:{[la.variable]:"colors.blackAlpha.200",_dark:{[la.variable]:"colors.whiteAlpha.200"}},_focusVisible:{boxShadow:"outline"},bg:la.reference},rS={lg:{[Va.variable]:"sizes.10",fontSize:"md"},md:{[Va.variable]:"sizes.8",fontSize:"xs"},sm:{[Va.variable]:"sizes.6",fontSize:"2xs"}},oS={baseStyle:nS,sizes:rS,defaultProps:{size:"md"}},{variants:aS,defaultProps:iS}=La,sS={fontFamily:"mono",fontSize:"sm",px:"0.2em",borderRadius:"sm",bg:ke.bg.reference,color:ke.color.reference,boxShadow:ke.shadow.reference},lS={baseStyle:sS,variants:aS,defaultProps:iS},uS={w:"100%",mx:"auto",maxW:"prose",px:"4"},cS={baseStyle:uS},dS={opacity:.6,borderColor:"inherit"},fS={borderStyle:"solid"},pS={borderStyle:"dashed"},mS={solid:fS,dashed:pS},hS={baseStyle:dS,variants:mS,defaultProps:{variant:"solid"}},{definePartsStyle:xd,defineMultiStyleConfig:gS}=le(rx.keys),uc=V("drawer-bg"),cc=V("drawer-box-shadow");function Jr(e){return xd(e==="full"?{dialog:{maxW:"100vw",h:"100vh"}}:{dialog:{maxW:e}})}const yS={bg:"blackAlpha.600",zIndex:"modal"},bS={display:"flex",zIndex:"modal",justifyContent:"center"},vS=e=>{const{isFullHeight:t}=e;return{...t&&{height:"100vh"},zIndex:"modal",maxH:"100vh",color:"inherit",[uc.variable]:"colors.white",[cc.variable]:"shadows.lg",_dark:{[uc.variable]:"colors.gray.700",[cc.variable]:"shadows.dark-lg"},bg:uc.reference,boxShadow:cc.reference}},wS={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},xS={position:"absolute",top:"2",insetEnd:"3"},SS={px:"6",py:"2",flex:"1",overflow:"auto"},CS={px:"6",py:"4"},kS=xd(e=>({overlay:yS,dialogContainer:bS,dialog:Xe(vS,e),header:wS,closeButton:xS,body:SS,footer:CS})),TS={xs:Jr("xs"),sm:Jr("md"),md:Jr("lg"),lg:Jr("2xl"),xl:Jr("4xl"),full:Jr("full")},_S=gS({baseStyle:kS,sizes:TS,defaultProps:{size:"xs"}}),{definePartsStyle:FS,defineMultiStyleConfig:PS}=le(ox.keys),AS={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal"},ES={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}},qS={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}},RS=FS({preview:AS,input:ES,textarea:qS}),IS=PS({baseStyle:RS}),{definePartsStyle:zS,defineMultiStyleConfig:$S}=le(ax.keys),_o=V("form-control-color"),LS={marginStart:"1",[_o.variable]:"colors.red.500",_dark:{[_o.variable]:"colors.red.300"},color:_o.reference},MS={mt:"2",[_o.variable]:"colors.gray.600",_dark:{[_o.variable]:"colors.whiteAlpha.600"},color:_o.reference,lineHeight:"normal",fontSize:"sm"},VS=zS({container:{width:"100%",position:"relative"},requiredIndicator:LS,helperText:MS}),jS=$S({baseStyle:VS}),{definePartsStyle:BS,defineMultiStyleConfig:NS}=le(ix.keys),Fo=V("form-error-color"),OS={[Fo.variable]:"colors.red.500",_dark:{[Fo.variable]:"colors.red.300"},color:Fo.reference,mt:"2",fontSize:"sm",lineHeight:"normal"},DS={marginEnd:"0.5em",[Fo.variable]:"colors.red.500",_dark:{[Fo.variable]:"colors.red.300"},color:Fo.reference},WS=BS({text:OS,icon:DS}),HS=NS({baseStyle:WS}),US={fontSize:"md",marginEnd:"3",mb:"2",fontWeight:"medium",transitionProperty:"common",transitionDuration:"normal",opacity:1,_disabled:{opacity:.4}},GS={baseStyle:US},KS={fontFamily:"heading",fontWeight:"bold"},YS={"4xl":{fontSize:["6xl",null,"7xl"],lineHeight:1},"3xl":{fontSize:["5xl",null,"6xl"],lineHeight:1},"2xl":{fontSize:["4xl",null,"5xl"],lineHeight:[1.2,null,1]},xl:{fontSize:["3xl",null,"4xl"],lineHeight:[1.33,null,1.2]},lg:{fontSize:["2xl",null,"3xl"],lineHeight:[1.33,null,1.2]},md:{fontSize:"xl",lineHeight:1.2},sm:{fontSize:"md",lineHeight:1.2},xs:{fontSize:"sm",lineHeight:1.2}},XS={baseStyle:KS,sizes:YS,defaultProps:{size:"xl"}},{definePartsStyle:_n,defineMultiStyleConfig:ZS}=le(sx.keys),no=V("input-height"),ro=V("input-font-size"),oo=V("input-padding"),ao=V("input-border-radius"),QS=_n({addon:{height:no.reference,fontSize:ro.reference,px:oo.reference,borderRadius:ao.reference},field:{width:"100%",height:no.reference,fontSize:ro.reference,px:oo.reference,borderRadius:ao.reference,minWidth:0,outline:0,position:"relative",appearance:"none",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed"}}}),On={lg:{[ro.variable]:"fontSizes.lg",[oo.variable]:"space.4",[ao.variable]:"radii.md",[no.variable]:"sizes.12"},md:{[ro.variable]:"fontSizes.md",[oo.variable]:"space.4",[ao.variable]:"radii.md",[no.variable]:"sizes.10"},sm:{[ro.variable]:"fontSizes.sm",[oo.variable]:"space.3",[ao.variable]:"radii.sm",[no.variable]:"sizes.8"},xs:{[ro.variable]:"fontSizes.xs",[oo.variable]:"space.2",[ao.variable]:"radii.sm",[no.variable]:"sizes.6"}},JS={lg:_n({field:On.lg,group:On.lg}),md:_n({field:On.md,group:On.md}),sm:_n({field:On.sm,group:On.sm}),xs:_n({field:On.xs,group:On.xs})};function tp(e){const{focusBorderColor:t,errorBorderColor:n}=e;return{focusBorderColor:t||M("blue.500","blue.300")(e),errorBorderColor:n||M("red.500","red.300")(e)}}const e4=_n(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=tp(e);return{field:{border:"1px solid",borderColor:"inherit",bg:"inherit",_hover:{borderColor:M("gray.300","whiteAlpha.400")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Ye(t,r),boxShadow:`0 0 0 1px ${Ye(t,r)}`},_focusVisible:{zIndex:1,borderColor:Ye(t,n),boxShadow:`0 0 0 1px ${Ye(t,n)}`}},addon:{border:"1px solid",borderColor:M("inherit","whiteAlpha.50")(e),bg:M("gray.100","whiteAlpha.300")(e)}}}),t4=_n(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=tp(e);return{field:{border:"2px solid",borderColor:"transparent",bg:M("gray.100","whiteAlpha.50")(e),_hover:{bg:M("gray.200","whiteAlpha.100")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Ye(t,r)},_focusVisible:{bg:"transparent",borderColor:Ye(t,n)}},addon:{border:"2px solid",borderColor:"transparent",bg:M("gray.100","whiteAlpha.50")(e)}}}),n4=_n(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=tp(e);return{field:{borderBottom:"1px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent",_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Ye(t,r),boxShadow:`0px 1px 0px 0px ${Ye(t,r)}`},_focusVisible:{borderColor:Ye(t,n),boxShadow:`0px 1px 0px 0px ${Ye(t,n)}`}},addon:{borderBottom:"2px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent"}}}),r4=_n({field:{bg:"transparent",px:"0",height:"auto"},addon:{bg:"transparent",px:"0",height:"auto"}}),o4={outline:e4,filled:t4,flushed:n4,unstyled:r4},ee=ZS({baseStyle:QS,sizes:JS,variants:o4,defaultProps:{size:"md",variant:"outline"}}),dc=V("kbd-bg"),a4={[dc.variable]:"colors.gray.100",_dark:{[dc.variable]:"colors.whiteAlpha.100"},bg:dc.reference,borderRadius:"md",borderWidth:"1px",borderBottomWidth:"3px",fontSize:"0.8em",fontWeight:"bold",lineHeight:"normal",px:"0.4em",whiteSpace:"nowrap"},i4={baseStyle:a4},s4={transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",cursor:"pointer",textDecoration:"none",outline:"none",color:"inherit",_hover:{textDecoration:"underline"},_focusVisible:{boxShadow:"outline"}},l4={baseStyle:s4},{defineMultiStyleConfig:u4,definePartsStyle:c4}=le(lx.keys),d4={marginEnd:"2",display:"inline",verticalAlign:"text-bottom"},f4=c4({icon:d4}),p4=u4({baseStyle:f4}),{defineMultiStyleConfig:m4,definePartsStyle:h4}=le(ux.keys),nn=V("menu-bg"),fc=V("menu-shadow"),g4={[nn.variable]:"#fff",[fc.variable]:"shadows.sm",_dark:{[nn.variable]:"colors.gray.700",[fc.variable]:"shadows.dark-lg"},color:"inherit",minW:"3xs",py:"2",zIndex:"dropdown",borderRadius:"md",borderWidth:"1px",bg:nn.reference,boxShadow:fc.reference},y4={py:"1.5",px:"3",transitionProperty:"background",transitionDuration:"ultra-fast",transitionTimingFunction:"ease-in",_focus:{[nn.variable]:"colors.gray.100",_dark:{[nn.variable]:"colors.whiteAlpha.100"}},_active:{[nn.variable]:"colors.gray.200",_dark:{[nn.variable]:"colors.whiteAlpha.200"}},_expanded:{[nn.variable]:"colors.gray.100",_dark:{[nn.variable]:"colors.whiteAlpha.100"}},_disabled:{opacity:.4,cursor:"not-allowed"},bg:nn.reference},b4={mx:4,my:2,fontWeight:"semibold",fontSize:"sm"},v4={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},w4={opacity:.6},x4={border:0,borderBottom:"1px solid",borderColor:"inherit",my:"2",opacity:.6},S4={transitionProperty:"common",transitionDuration:"normal"},C4=h4({button:S4,list:g4,item:y4,groupTitle:b4,icon:v4,command:w4,divider:x4}),k4=m4({baseStyle:C4}),{defineMultiStyleConfig:T4,definePartsStyle:Sd}=le(cx.keys),pc=V("modal-bg"),mc=V("modal-shadow"),_4={bg:"blackAlpha.600",zIndex:"modal"},F4=e=>{const{isCentered:t,scrollBehavior:n}=e;return{display:"flex",zIndex:"modal",justifyContent:"center",alignItems:t?"center":"flex-start",overflow:n==="inside"?"hidden":"auto",overscrollBehaviorY:"none"}},P4=e=>{const{isCentered:t,scrollBehavior:n}=e;return{borderRadius:"md",color:"inherit",my:t?"auto":"16",mx:t?"auto":void 0,zIndex:"modal",maxH:n==="inside"?"calc(100% - 7.5rem)":void 0,[pc.variable]:"colors.white",[mc.variable]:"shadows.lg",_dark:{[pc.variable]:"colors.gray.700",[mc.variable]:"shadows.dark-lg"},bg:pc.reference,boxShadow:mc.reference}},A4={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},E4={position:"absolute",top:"2",insetEnd:"3"},q4=e=>{const{scrollBehavior:t}=e;return{px:"6",py:"2",flex:"1",overflow:t==="inside"?"auto":void 0}},R4={px:"6",py:"4"},I4=Sd(e=>({overlay:_4,dialogContainer:Xe(F4,e),dialog:Xe(P4,e),header:A4,closeButton:E4,body:Xe(q4,e),footer:R4}));function $t(e){return Sd(e==="full"?{dialog:{maxW:"100vw",minH:"$100vh",my:"0",borderRadius:"0"}}:{dialog:{maxW:e}})}const z4={xs:$t("xs"),sm:$t("sm"),md:$t("md"),lg:$t("lg"),xl:$t("xl"),"2xl":$t("2xl"),"3xl":$t("3xl"),"4xl":$t("4xl"),"5xl":$t("5xl"),"6xl":$t("6xl"),full:$t("full")},$4=T4({baseStyle:I4,sizes:z4,defaultProps:{size:"md"}}),b1={letterSpacings:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeights:{normal:"normal",none:1,shorter:1.25,short:1.375,base:1.5,tall:1.625,taller:"2",3:".75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem"},fontWeights:{hairline:100,thin:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},fonts:{heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'},fontSizes:{"3xs":"0.45rem","2xs":"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem","8xl":"6rem","9xl":"8rem"}},{defineMultiStyleConfig:L4,definePartsStyle:v1}=le(dx.keys),np=Re("number-input-stepper-width"),w1=Re("number-input-input-padding"),M4=kn(np).add("0.5rem").toString(),hc=Re("number-input-bg"),gc=Re("number-input-color"),yc=Re("number-input-border-color"),V4={[np.variable]:"sizes.6",[w1.variable]:M4},j4=e=>{var t,n;return(n=(t=Xe(ee.baseStyle,e))==null?void 0:t.field)!=null?n:{}},B4={width:np.reference},N4={borderStart:"1px solid",borderStartColor:yc.reference,color:gc.reference,bg:hc.reference,[gc.variable]:"colors.chakra-body-text",[yc.variable]:"colors.chakra-border-color",_dark:{[gc.variable]:"colors.whiteAlpha.800",[yc.variable]:"colors.whiteAlpha.300"},_active:{[hc.variable]:"colors.gray.200",_dark:{[hc.variable]:"colors.whiteAlpha.300"}},_disabled:{opacity:.4,cursor:"not-allowed"}},O4=v1(e=>{var t;return{root:V4,field:(t=Xe(j4,e))!=null?t:{},stepperGroup:B4,stepper:N4}});function os(e){var a,i,s;const t=(a=ee.sizes)==null?void 0:a[e],n={lg:"md",md:"md",sm:"sm",xs:"sm"},r=(s=(i=t.field)==null?void 0:i.fontSize)!=null?s:"md",o=b1.fontSizes[r];return v1({field:{...t.field,paddingInlineEnd:w1.reference,verticalAlign:"top"},stepper:{fontSize:kn(o).multiply(.75).toString(),_first:{borderTopEndRadius:n[e]},_last:{borderBottomEndRadius:n[e],mt:"-1px",borderTopWidth:1}}})}const D4={xs:os("xs"),sm:os("sm"),md:os("md"),lg:os("lg")},W4=L4({baseStyle:O4,sizes:D4,variants:ee.variants,defaultProps:ee.defaultProps});var xy;const H4={...(xy=ee.baseStyle)==null?void 0:xy.field,textAlign:"center"},U4={lg:{fontSize:"lg",w:12,h:12,borderRadius:"md"},md:{fontSize:"md",w:10,h:10,borderRadius:"md"},sm:{fontSize:"sm",w:8,h:8,borderRadius:"sm"},xs:{fontSize:"xs",w:6,h:6,borderRadius:"sm"}};var Sy,Cy;const G4={outline:e=>{var t,n,r;return(r=(n=Xe((t=ee.variants)==null?void 0:t.outline,e))==null?void 0:n.field)!=null?r:{}},flushed:e=>{var t,n,r;return(r=(n=Xe((t=ee.variants)==null?void 0:t.flushed,e))==null?void 0:n.field)!=null?r:{}},filled:e=>{var t,n,r;return(r=(n=Xe((t=ee.variants)==null?void 0:t.filled,e))==null?void 0:n.field)!=null?r:{}},unstyled:(Cy=(Sy=ee.variants)==null?void 0:Sy.unstyled.field)!=null?Cy:{}},K4={baseStyle:H4,sizes:U4,variants:G4,defaultProps:ee.defaultProps},{defineMultiStyleConfig:Y4,definePartsStyle:X4}=le(fx.keys),as=Re("popper-bg"),Z4=Re("popper-arrow-bg"),jh=Re("popper-arrow-shadow-color"),Q4={zIndex:"popover"},J4={[as.variable]:"colors.white",bg:as.reference,[Z4.variable]:as.reference,[jh.variable]:"colors.gray.200",_dark:{[as.variable]:"colors.gray.700",[jh.variable]:"colors.whiteAlpha.300"},width:"xs",border:"1px solid",borderColor:"inherit",borderRadius:"md",boxShadow:"sm",zIndex:"inherit",_focusVisible:{outline:0,boxShadow:"outline"}},eC={px:3,py:2,borderBottomWidth:"1px"},tC={px:3,py:2},nC={px:3,py:2,borderTopWidth:"1px"},rC={position:"absolute",borderRadius:"md",top:1,insetEnd:2,padding:2},oC=X4({popper:Q4,content:J4,header:eC,body:tC,footer:nC,closeButton:rC}),aC=Y4({baseStyle:oC}),{defineMultiStyleConfig:iC,definePartsStyle:Ta}=le(px.keys),sC=e=>{const{colorScheme:t,theme:n,isIndeterminate:r,hasStripe:o}=e,a=M(zh(),zh("1rem","rgba(0,0,0,0.1)"))(e),i=M(`${t}.500`,`${t}.200`)(e),s=`linear-gradient(
    to right,
    transparent 0%,
    ${Ye(n,i)} 50%,
    transparent 100%
  )`;return{...!r&&o&&a,...r?{bgImage:s}:{bgColor:i}}},lC={lineHeight:"1",fontSize:"0.25em",fontWeight:"bold",color:"white"},uC=e=>({bg:M("gray.100","whiteAlpha.300")(e)}),cC=e=>({transitionProperty:"common",transitionDuration:"slow",...sC(e)}),dC=Ta(e=>({label:lC,filledTrack:cC(e),track:uC(e)})),fC={xs:Ta({track:{h:"1"}}),sm:Ta({track:{h:"2"}}),md:Ta({track:{h:"3"}}),lg:Ta({track:{h:"4"}})},pC=iC({sizes:fC,baseStyle:dC,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:mC,definePartsStyle:Vs}=le(mx.keys),hC=e=>{var n;const t=(n=Xe(Hn.baseStyle,e))==null?void 0:n.control;return{...t,borderRadius:"full",_checked:{...t==null?void 0:t._checked,_before:{content:'""',display:"inline-block",pos:"relative",w:"50%",h:"50%",borderRadius:"50%",bg:"currentColor"}}}},gC=Vs(e=>{var t,n;return{label:(t=Hn.baseStyle)==null?void 0:t.call(Hn,e).label,container:(n=Hn.baseStyle)==null?void 0:n.call(Hn,e).container,control:hC(e)}}),yC={md:Vs({control:{w:"4",h:"4"},label:{fontSize:"md"}}),lg:Vs({control:{w:"5",h:"5"},label:{fontSize:"lg"}}),sm:Vs({control:{width:"3",height:"3"},label:{fontSize:"sm"}})},bC=mC({baseStyle:gC,sizes:yC,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:vC,definePartsStyle:wC}=le(hx.keys),is=V("select-bg");var ky;const xC={...(ky=ee.baseStyle)==null?void 0:ky.field,appearance:"none",paddingBottom:"1px",lineHeight:"normal",bg:is.reference,[is.variable]:"colors.white",_dark:{[is.variable]:"colors.gray.700"},"> option, > optgroup":{bg:is.reference}},SC={width:"6",height:"100%",insetEnd:"2",position:"relative",color:"currentColor",fontSize:"xl",_disabled:{opacity:.5}},CC=wC({field:xC,icon:SC}),ss={paddingInlineEnd:"8"};var Ty,_y,Fy,Py,Ay,Ey,qy,Ry;const kC={lg:{...(Ty=ee.sizes)==null?void 0:Ty.lg,field:{...(_y=ee.sizes)==null?void 0:_y.lg.field,...ss}},md:{...(Fy=ee.sizes)==null?void 0:Fy.md,field:{...(Py=ee.sizes)==null?void 0:Py.md.field,...ss}},sm:{...(Ay=ee.sizes)==null?void 0:Ay.sm,field:{...(Ey=ee.sizes)==null?void 0:Ey.sm.field,...ss}},xs:{...(qy=ee.sizes)==null?void 0:qy.xs,field:{...(Ry=ee.sizes)==null?void 0:Ry.xs.field,...ss},icon:{insetEnd:"1"}}},TC=vC({baseStyle:CC,sizes:kC,variants:ee.variants,defaultProps:ee.defaultProps}),bc=V("skeleton-start-color"),vc=V("skeleton-end-color"),_C={[bc.variable]:"colors.gray.100",[vc.variable]:"colors.gray.400",_dark:{[bc.variable]:"colors.gray.800",[vc.variable]:"colors.gray.600"},background:bc.reference,borderColor:vc.reference,opacity:.7,borderRadius:"sm"},FC={baseStyle:_C},wc=V("skip-link-bg"),PC={borderRadius:"md",fontWeight:"semibold",_focusVisible:{boxShadow:"outline",padding:"4",position:"fixed",top:"6",insetStart:"6",[wc.variable]:"colors.white",_dark:{[wc.variable]:"colors.gray.700"},bg:wc.reference}},AC={baseStyle:PC},{defineMultiStyleConfig:EC,definePartsStyle:nu}=le(gx.keys),Mr=V("slider-thumb-size"),ii=V("slider-track-size"),Yn=V("slider-bg"),qC=e=>{const{orientation:t}=e;return{display:"inline-block",position:"relative",cursor:"pointer",_disabled:{opacity:.6,cursor:"default",pointerEvents:"none"},...Jf({orientation:t,vertical:{h:"100%",px:Cn(Mr.reference).divide(2).toString()},horizontal:{w:"100%",py:Cn(Mr.reference).divide(2).toString()}})}},RC=e=>({...Jf({orientation:e.orientation,horizontal:{h:ii.reference},vertical:{w:ii.reference}}),overflow:"hidden",borderRadius:"sm",[Yn.variable]:"colors.gray.200",_dark:{[Yn.variable]:"colors.whiteAlpha.200"},_disabled:{[Yn.variable]:"colors.gray.300",_dark:{[Yn.variable]:"colors.whiteAlpha.300"}},bg:Yn.reference}),IC=e=>{const{orientation:t}=e;return{...Jf({orientation:t,vertical:{left:"50%"},horizontal:{top:"50%"}}),w:Mr.reference,h:Mr.reference,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",outline:0,zIndex:1,borderRadius:"full",bg:"white",boxShadow:"base",border:"1px solid",borderColor:"transparent",transitionProperty:"transform",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_active:{"--slider-thumb-scale":"1.15"},_disabled:{bg:"gray.300"}}},zC=e=>{const{colorScheme:t}=e;return{width:"inherit",height:"inherit",[Yn.variable]:`colors.${t}.500`,_dark:{[Yn.variable]:`colors.${t}.200`},bg:Yn.reference}},$C=nu(e=>({container:qC(e),track:RC(e),thumb:IC(e),filledTrack:zC(e)})),LC=nu({container:{[Mr.variable]:"sizes.4",[ii.variable]:"sizes.1"}}),MC=nu({container:{[Mr.variable]:"sizes.3.5",[ii.variable]:"sizes.1"}}),VC=nu({container:{[Mr.variable]:"sizes.2.5",[ii.variable]:"sizes.0.5"}}),jC={lg:LC,md:MC,sm:VC},BC=EC({baseStyle:$C,sizes:jC,defaultProps:{size:"md",colorScheme:"blue"}}),Tr=Re("spinner-size"),NC={width:[Tr.reference],height:[Tr.reference]},OC={xs:{[Tr.variable]:"sizes.3"},sm:{[Tr.variable]:"sizes.4"},md:{[Tr.variable]:"sizes.6"},lg:{[Tr.variable]:"sizes.8"},xl:{[Tr.variable]:"sizes.12"}},DC={baseStyle:NC,sizes:OC,defaultProps:{size:"md"}},{defineMultiStyleConfig:WC,definePartsStyle:x1}=le(yx.keys),HC={fontWeight:"medium"},UC={opacity:.8,marginBottom:"2"},GC={verticalAlign:"baseline",fontWeight:"semibold"},KC={marginEnd:1,w:"3.5",h:"3.5",verticalAlign:"middle"},YC=x1({container:{},label:HC,helpText:UC,number:GC,icon:KC}),XC={md:x1({label:{fontSize:"sm"},helpText:{fontSize:"sm"},number:{fontSize:"2xl"}})},ZC=WC({baseStyle:YC,sizes:XC,defaultProps:{size:"md"}}),{defineMultiStyleConfig:QC,definePartsStyle:_a}=le(["stepper","step","title","description","indicator","separator","icon","number"]),Tn=V("stepper-indicator-size"),io=V("stepper-icon-size"),so=V("stepper-title-font-size"),Fa=V("stepper-description-font-size"),ua=V("stepper-accent-color"),JC=_a(({colorScheme:e})=>({stepper:{display:"flex",justifyContent:"space-between",gap:"4","&[data-orientation=vertical]":{flexDirection:"column",alignItems:"flex-start"},"&[data-orientation=horizontal]":{flexDirection:"row",alignItems:"center"},[ua.variable]:`colors.${e}.500`,_dark:{[ua.variable]:`colors.${e}.200`}},title:{fontSize:so.reference,fontWeight:"medium"},description:{fontSize:Fa.reference,color:"chakra-subtle-text"},number:{fontSize:so.reference},step:{flexShrink:0,position:"relative",display:"flex",gap:"2","&[data-orientation=horizontal]":{alignItems:"center"},flex:"1","&:last-of-type:not([data-stretch])":{flex:"initial"}},icon:{flexShrink:0,width:io.reference,height:io.reference},indicator:{flexShrink:0,borderRadius:"full",width:Tn.reference,height:Tn.reference,display:"flex",justifyContent:"center",alignItems:"center","&[data-status=active]":{borderWidth:"2px",borderColor:ua.reference},"&[data-status=complete]":{bg:ua.reference,color:"chakra-inverse-text"},"&[data-status=incomplete]":{borderWidth:"2px"}},separator:{bg:"chakra-border-color",flex:"1","&[data-status=complete]":{bg:ua.reference},"&[data-orientation=horizontal]":{width:"100%",height:"2px",marginStart:"2"},"&[data-orientation=vertical]":{width:"2px",position:"absolute",height:"100%",maxHeight:`calc(100% - ${Tn.reference} - 8px)`,top:`calc(${Tn.reference} + 4px)`,insetStart:`calc(${Tn.reference} / 2 - 1px)`}}})),e8=QC({baseStyle:JC,sizes:{xs:_a({stepper:{[Tn.variable]:"sizes.4",[io.variable]:"sizes.3",[so.variable]:"fontSizes.xs",[Fa.variable]:"fontSizes.xs"}}),sm:_a({stepper:{[Tn.variable]:"sizes.6",[io.variable]:"sizes.4",[so.variable]:"fontSizes.sm",[Fa.variable]:"fontSizes.xs"}}),md:_a({stepper:{[Tn.variable]:"sizes.8",[io.variable]:"sizes.5",[so.variable]:"fontSizes.md",[Fa.variable]:"fontSizes.sm"}}),lg:_a({stepper:{[Tn.variable]:"sizes.10",[io.variable]:"sizes.6",[so.variable]:"fontSizes.lg",[Fa.variable]:"fontSizes.md"}})},defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:t8,definePartsStyle:js}=le(bx.keys),ja=Re("switch-track-width"),Ir=Re("switch-track-height"),xc=Re("switch-track-diff"),n8=kn.subtract(ja,Ir),Cd=Re("switch-thumb-x"),ca=Re("switch-bg"),r8=e=>{const{colorScheme:t}=e;return{borderRadius:"full",p:"0.5",width:[ja.reference],height:[Ir.reference],transitionProperty:"common",transitionDuration:"fast",[ca.variable]:"colors.gray.300",_dark:{[ca.variable]:"colors.whiteAlpha.400"},_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed"},_checked:{[ca.variable]:`colors.${t}.500`,_dark:{[ca.variable]:`colors.${t}.200`}},bg:ca.reference}},o8={bg:"white",transitionProperty:"transform",transitionDuration:"normal",borderRadius:"inherit",width:[Ir.reference],height:[Ir.reference],_checked:{transform:`translateX(${Cd.reference})`}},a8=js(e=>({container:{[xc.variable]:n8,[Cd.variable]:xc.reference,_rtl:{[Cd.variable]:kn(xc).negate().toString()}},track:r8(e),thumb:o8})),i8={sm:js({container:{[ja.variable]:"1.375rem",[Ir.variable]:"sizes.3"}}),md:js({container:{[ja.variable]:"1.875rem",[Ir.variable]:"sizes.4"}}),lg:js({container:{[ja.variable]:"2.875rem",[Ir.variable]:"sizes.6"}})},s8=t8({baseStyle:a8,sizes:i8,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:l8,definePartsStyle:Po}=le(vx.keys),u8=Po({table:{fontVariantNumeric:"lining-nums tabular-nums",borderCollapse:"collapse",width:"full"},th:{fontFamily:"heading",fontWeight:"bold",textTransform:"uppercase",letterSpacing:"wider",textAlign:"start"},td:{textAlign:"start"},caption:{mt:4,fontFamily:"heading",textAlign:"center",fontWeight:"medium"}}),pl={"&[data-is-numeric=true]":{textAlign:"end"}},c8=Po(e=>{const{colorScheme:t}=e;return{th:{color:M("gray.600","gray.400")(e),borderBottom:"1px",borderColor:M(`${t}.100`,`${t}.700`)(e),...pl},td:{borderBottom:"1px",borderColor:M(`${t}.100`,`${t}.700`)(e),...pl},caption:{color:M("gray.600","gray.100")(e)},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),d8=Po(e=>{const{colorScheme:t}=e;return{th:{color:M("gray.600","gray.400")(e),borderBottom:"1px",borderColor:M(`${t}.100`,`${t}.700`)(e),...pl},td:{borderBottom:"1px",borderColor:M(`${t}.100`,`${t}.700`)(e),...pl},caption:{color:M("gray.600","gray.100")(e)},tbody:{tr:{"&:nth-of-type(odd)":{"th, td":{borderBottomWidth:"1px",borderColor:M(`${t}.100`,`${t}.700`)(e)},td:{background:M(`${t}.100`,`${t}.700`)(e)}}}},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),f8={simple:c8,striped:d8,unstyled:{}},p8={sm:Po({th:{px:"4",py:"1",lineHeight:"4",fontSize:"xs"},td:{px:"4",py:"2",fontSize:"sm",lineHeight:"4"},caption:{px:"4",py:"2",fontSize:"xs"}}),md:Po({th:{px:"6",py:"3",lineHeight:"4",fontSize:"xs"},td:{px:"6",py:"4",lineHeight:"5"},caption:{px:"6",py:"2",fontSize:"sm"}}),lg:Po({th:{px:"8",py:"4",lineHeight:"5",fontSize:"sm"},td:{px:"8",py:"5",lineHeight:"6"},caption:{px:"6",py:"2",fontSize:"md"}})},m8=l8({baseStyle:u8,variants:f8,sizes:p8,defaultProps:{variant:"simple",size:"md",colorScheme:"gray"}}),nt=V("tabs-color"),Nt=V("tabs-bg"),ls=V("tabs-border-color"),{defineMultiStyleConfig:h8,definePartsStyle:un}=le(wx.keys),g8=e=>{const{orientation:t}=e;return{display:t==="vertical"?"flex":"block"}},y8=e=>{const{isFitted:t}=e;return{flex:t?1:void 0,transitionProperty:"common",transitionDuration:"normal",_focusVisible:{zIndex:1,boxShadow:"outline"},_disabled:{cursor:"not-allowed",opacity:.4}}},b8=e=>{const{align:t="start",orientation:n}=e;return{justifyContent:{end:"flex-end",center:"center",start:"flex-start"}[t],flexDirection:n==="vertical"?"column":"row"}},v8={p:4},w8=un(e=>({root:g8(e),tab:y8(e),tablist:b8(e),tabpanel:v8})),x8={sm:un({tab:{py:1,px:4,fontSize:"sm"}}),md:un({tab:{fontSize:"md",py:2,px:4}}),lg:un({tab:{fontSize:"lg",py:3,px:4}})},S8=un(e=>{const{colorScheme:t,orientation:n}=e,r=n==="vertical",o=r?"borderStart":"borderBottom",a=r?"marginStart":"marginBottom";return{tablist:{[o]:"2px solid",borderColor:"inherit"},tab:{[o]:"2px solid",borderColor:"transparent",[a]:"-2px",_selected:{[nt.variable]:`colors.${t}.600`,_dark:{[nt.variable]:`colors.${t}.300`},borderColor:"currentColor"},_active:{[Nt.variable]:"colors.gray.200",_dark:{[Nt.variable]:"colors.whiteAlpha.300"}},_disabled:{_active:{bg:"none"}},color:nt.reference,bg:Nt.reference}}}),C8=un(e=>{const{colorScheme:t}=e;return{tab:{borderTopRadius:"md",border:"1px solid",borderColor:"transparent",mb:"-1px",[ls.variable]:"transparent",_selected:{[nt.variable]:`colors.${t}.600`,[ls.variable]:"colors.white",_dark:{[nt.variable]:`colors.${t}.300`,[ls.variable]:"colors.gray.800"},borderColor:"inherit",borderBottomColor:ls.reference},color:nt.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),k8=un(e=>{const{colorScheme:t}=e;return{tab:{border:"1px solid",borderColor:"inherit",[Nt.variable]:"colors.gray.50",_dark:{[Nt.variable]:"colors.whiteAlpha.50"},mb:"-1px",_notLast:{marginEnd:"-1px"},_selected:{[Nt.variable]:"colors.white",[nt.variable]:`colors.${t}.600`,_dark:{[Nt.variable]:"colors.gray.800",[nt.variable]:`colors.${t}.300`},borderColor:"inherit",borderTopColor:"currentColor",borderBottomColor:"transparent"},color:nt.reference,bg:Nt.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),T8=un(e=>{const{colorScheme:t,theme:n}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",color:"gray.600",_selected:{color:Ye(n,`${t}.700`),bg:Ye(n,`${t}.100`)}}}}),_8=un(e=>{const{colorScheme:t}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",[nt.variable]:"colors.gray.600",_dark:{[nt.variable]:"inherit"},_selected:{[nt.variable]:"colors.white",[Nt.variable]:`colors.${t}.600`,_dark:{[nt.variable]:"colors.gray.800",[Nt.variable]:`colors.${t}.300`}},color:nt.reference,bg:Nt.reference}}}),F8=un({}),P8={line:S8,enclosed:C8,"enclosed-colored":k8,"soft-rounded":T8,"solid-rounded":_8,unstyled:F8},A8=h8({baseStyle:w8,sizes:x8,variants:P8,defaultProps:{size:"md",variant:"line",colorScheme:"blue"}}),{defineMultiStyleConfig:E8,definePartsStyle:zr}=le(xx.keys),Bh=V("tag-bg"),Nh=V("tag-color"),Sc=V("tag-shadow"),Bs=V("tag-min-height"),Ns=V("tag-min-width"),Os=V("tag-font-size"),Ds=V("tag-padding-inline"),q8={fontWeight:"medium",lineHeight:1.2,outline:0,[Nh.variable]:ke.color.reference,[Bh.variable]:ke.bg.reference,[Sc.variable]:ke.shadow.reference,color:Nh.reference,bg:Bh.reference,boxShadow:Sc.reference,borderRadius:"md",minH:Bs.reference,minW:Ns.reference,fontSize:Os.reference,px:Ds.reference,_focusVisible:{[Sc.variable]:"shadows.outline"}},R8={lineHeight:1.2,overflow:"visible"},I8={fontSize:"lg",w:"5",h:"5",transitionProperty:"common",transitionDuration:"normal",borderRadius:"full",marginStart:"1.5",marginEnd:"-1",opacity:.5,_disabled:{opacity:.4},_focusVisible:{boxShadow:"outline",bg:"rgba(0, 0, 0, 0.14)"},_hover:{opacity:.8},_active:{opacity:1}},z8=zr({container:q8,label:R8,closeButton:I8}),$8={sm:zr({container:{[Bs.variable]:"sizes.5",[Ns.variable]:"sizes.5",[Os.variable]:"fontSizes.xs",[Ds.variable]:"space.2"},closeButton:{marginEnd:"-2px",marginStart:"0.35rem"}}),md:zr({container:{[Bs.variable]:"sizes.6",[Ns.variable]:"sizes.6",[Os.variable]:"fontSizes.sm",[Ds.variable]:"space.2"}}),lg:zr({container:{[Bs.variable]:"sizes.8",[Ns.variable]:"sizes.8",[Os.variable]:"fontSizes.md",[Ds.variable]:"space.3"}})},L8={subtle:zr(e=>{var t;return{container:(t=La.variants)==null?void 0:t.subtle(e)}}),solid:zr(e=>{var t;return{container:(t=La.variants)==null?void 0:t.solid(e)}}),outline:zr(e=>{var t;return{container:(t=La.variants)==null?void 0:t.outline(e)}})},M8=E8({variants:L8,baseStyle:z8,sizes:$8,defaultProps:{size:"md",variant:"subtle",colorScheme:"gray"}});var Iy;const V8={...(Iy=ee.baseStyle)==null?void 0:Iy.field,paddingY:"2",minHeight:"20",lineHeight:"short",verticalAlign:"top"};var zy,$y;const j8={outline:e=>{var t,n;return(n=(t=ee.variants)==null?void 0:t.outline(e).field)!=null?n:{}},flushed:e=>{var t,n;return(n=(t=ee.variants)==null?void 0:t.flushed(e).field)!=null?n:{}},filled:e=>{var t,n;return(n=(t=ee.variants)==null?void 0:t.filled(e).field)!=null?n:{}},unstyled:($y=(zy=ee.variants)==null?void 0:zy.unstyled.field)!=null?$y:{}};var Ly,My,Vy,jy,By,Ny,Oy,Dy;const B8={xs:(My=(Ly=ee.sizes)==null?void 0:Ly.xs.field)!=null?My:{},sm:(jy=(Vy=ee.sizes)==null?void 0:Vy.sm.field)!=null?jy:{},md:(Ny=(By=ee.sizes)==null?void 0:By.md.field)!=null?Ny:{},lg:(Dy=(Oy=ee.sizes)==null?void 0:Oy.lg.field)!=null?Dy:{}},N8={baseStyle:V8,sizes:B8,variants:j8,defaultProps:{size:"md",variant:"outline"}},us=Re("tooltip-bg"),Cc=Re("tooltip-fg"),O8=Re("popper-arrow-bg"),D8={bg:us.reference,color:Cc.reference,[us.variable]:"colors.gray.700",[Cc.variable]:"colors.whiteAlpha.900",_dark:{[us.variable]:"colors.gray.300",[Cc.variable]:"colors.gray.900"},[O8.variable]:us.reference,px:"2",py:"0.5",borderRadius:"sm",fontWeight:"medium",fontSize:"sm",boxShadow:"md",maxW:"xs",zIndex:"tooltip"},W8={baseStyle:D8},H8={Accordion:Ex,Alert:p6,Avatar:k6,Badge:La,Breadcrumb:z6,Button:D6,Checkbox:Hn,CloseButton:oS,Code:lS,Container:cS,Divider:hS,Drawer:_S,Editable:IS,Form:jS,FormError:HS,FormLabel:GS,Heading:XS,Input:ee,Kbd:i4,Link:l4,List:p4,Menu:k4,Modal:$4,NumberInput:W4,PinInput:K4,Popover:aC,Progress:pC,Radio:bC,Select:TC,Skeleton:FC,SkipLink:AC,Slider:BC,Spinner:DC,Stat:ZC,Switch:s8,Table:m8,Tabs:A8,Tag:M8,Textarea:N8,Tooltip:W8,Card:K6,Stepper:e8},U8={none:0,"1px":"1px solid","2px":"2px solid","4px":"4px solid","8px":"8px solid"},G8={base:"0em",sm:"30em",md:"48em",lg:"62em",xl:"80em","2xl":"96em"},K8={transparent:"transparent",current:"currentColor",black:"#000000",white:"#FFFFFF",whiteAlpha:{50:"rgba(255, 255, 255, 0.04)",100:"rgba(255, 255, 255, 0.06)",200:"rgba(255, 255, 255, 0.08)",300:"rgba(255, 255, 255, 0.16)",400:"rgba(255, 255, 255, 0.24)",500:"rgba(255, 255, 255, 0.36)",600:"rgba(255, 255, 255, 0.48)",700:"rgba(255, 255, 255, 0.64)",800:"rgba(255, 255, 255, 0.80)",900:"rgba(255, 255, 255, 0.92)"},blackAlpha:{50:"rgba(0, 0, 0, 0.04)",100:"rgba(0, 0, 0, 0.06)",200:"rgba(0, 0, 0, 0.08)",300:"rgba(0, 0, 0, 0.16)",400:"rgba(0, 0, 0, 0.24)",500:"rgba(0, 0, 0, 0.36)",600:"rgba(0, 0, 0, 0.48)",700:"rgba(0, 0, 0, 0.64)",800:"rgba(0, 0, 0, 0.80)",900:"rgba(0, 0, 0, 0.92)"},gray:{50:"#F7FAFC",100:"#EDF2F7",200:"#E2E8F0",300:"#CBD5E0",400:"#A0AEC0",500:"#718096",600:"#4A5568",700:"#2D3748",800:"#1A202C",900:"#171923"},red:{50:"#FFF5F5",100:"#FED7D7",200:"#FEB2B2",300:"#FC8181",400:"#F56565",500:"#E53E3E",600:"#C53030",700:"#9B2C2C",800:"#822727",900:"#63171B"},orange:{50:"#FFFAF0",100:"#FEEBC8",200:"#FBD38D",300:"#F6AD55",400:"#ED8936",500:"#DD6B20",600:"#C05621",700:"#9C4221",800:"#7B341E",900:"#652B19"},yellow:{50:"#FFFFF0",100:"#FEFCBF",200:"#FAF089",300:"#F6E05E",400:"#ECC94B",500:"#D69E2E",600:"#B7791F",700:"#975A16",800:"#744210",900:"#5F370E"},green:{50:"#F0FFF4",100:"#C6F6D5",200:"#9AE6B4",300:"#68D391",400:"#48BB78",500:"#38A169",600:"#2F855A",700:"#276749",800:"#22543D",900:"#1C4532"},teal:{50:"#E6FFFA",100:"#B2F5EA",200:"#81E6D9",300:"#4FD1C5",400:"#38B2AC",500:"#319795",600:"#2C7A7B",700:"#285E61",800:"#234E52",900:"#1D4044"},blue:{50:"#ebf8ff",100:"#bee3f8",200:"#90cdf4",300:"#63b3ed",400:"#4299e1",500:"#3182ce",600:"#2b6cb0",700:"#2c5282",800:"#2a4365",900:"#1A365D"},cyan:{50:"#EDFDFD",100:"#C4F1F9",200:"#9DECF9",300:"#76E4F7",400:"#0BC5EA",500:"#00B5D8",600:"#00A3C4",700:"#0987A0",800:"#086F83",900:"#065666"},purple:{50:"#FAF5FF",100:"#E9D8FD",200:"#D6BCFA",300:"#B794F4",400:"#9F7AEA",500:"#805AD5",600:"#6B46C1",700:"#553C9A",800:"#44337A",900:"#322659"},pink:{50:"#FFF5F7",100:"#FED7E2",200:"#FBB6CE",300:"#F687B3",400:"#ED64A6",500:"#D53F8C",600:"#B83280",700:"#97266D",800:"#702459",900:"#521B41"}},Y8={none:"0",sm:"0.125rem",base:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},X8={xs:"0 0 0 1px rgba(0, 0, 0, 0.05)",sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",base:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",outline:"0 0 0 3px rgba(66, 153, 225, 0.6)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.06)",none:"none","dark-lg":"rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"},Z8={common:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",colors:"background-color, border-color, color, fill, stroke",dimensions:"width, height",position:"left, right, top, bottom",background:"background-color, background-image, background-position"},Q8={"ease-in":"cubic-bezier(0.4, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.2, 1)","ease-in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},J8={"ultra-fast":"50ms",faster:"100ms",fast:"150ms",normal:"200ms",slow:"300ms",slower:"400ms","ultra-slow":"500ms"},e7={property:Z8,easing:Q8,duration:J8},t7={hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800},n7={none:0,sm:"4px",base:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},S1={breakpoints:G8,zIndices:t7,radii:Y8,blur:n7,colors:K8,...b1,sizes:f1,shadows:X8,space:d1,borders:U8,transition:e7},C1={colors:{"chakra-body-text":{_light:"gray.800",_dark:"whiteAlpha.900"},"chakra-body-bg":{_light:"white",_dark:"gray.800"},"chakra-border-color":{_light:"gray.200",_dark:"whiteAlpha.300"},"chakra-inverse-text":{_light:"white",_dark:"gray.800"},"chakra-subtle-bg":{_light:"gray.100",_dark:"gray.700"},"chakra-subtle-text":{_light:"gray.600",_dark:"gray.400"},"chakra-placeholder-color":{_light:"gray.500",_dark:"whiteAlpha.400"}}},k1={global:{body:{fontFamily:"body",color:"chakra-body-text",bg:"chakra-body-bg",transitionProperty:"background-color",transitionDuration:"normal",lineHeight:"base"},"*::placeholder":{color:"chakra-placeholder-color"},"*, *::before, &::after":{borderColor:"chakra-border-color"}}},T1="ltr",_1={useSystemColorMode:!1,initialColorMode:"light",cssVarPrefix:"chakra"},r7={semanticTokens:C1,direction:T1,...S1,components:H8,styles:k1,config:_1};({...S1});var ru={exports:{}},ou={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o7=v.exports,a7=Symbol.for("react.element"),i7=Symbol.for("react.fragment"),s7=Object.prototype.hasOwnProperty,l7=o7.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u7={key:!0,ref:!0,__self:!0,__source:!0};function F1(e,t,n){var r,o={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)s7.call(t,r)&&!u7.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:a7,type:e,key:a,ref:i,props:o,_owner:l7.current}}ou.Fragment=i7;ou.jsx=F1;ou.jsxs=F1;(function(e){e.exports=ou})(ru);const si=ru.exports.Fragment,T=ru.exports.jsx,K=ru.exports.jsxs;var c7=!1;function d7(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function f7(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var p7=function(){function e(n){var r=this;this._insertTag=function(o){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,a),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!c7:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(f7(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var a=d7(o);try{a.insertRule(r,a.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var o;return(o=r.parentNode)==null?void 0:o.removeChild(r)}),this.tags=[],this.ctr=0},e}(),De="-ms-",ml="-moz-",Q="-webkit-",P1="comm",rp="rule",op="decl",m7="@import",A1="@keyframes",h7="@layer",g7=Math.abs,au=String.fromCharCode,y7=Object.assign;function b7(e,t){return Ve(e,0)^45?(((t<<2^Ve(e,0))<<2^Ve(e,1))<<2^Ve(e,2))<<2^Ve(e,3):0}function E1(e){return e.trim()}function v7(e,t){return(e=t.exec(e))?e[0]:e}function J(e,t,n){return e.replace(t,n)}function kd(e,t){return e.indexOf(t)}function Ve(e,t){return e.charCodeAt(t)|0}function li(e,t,n){return e.slice(t,n)}function rn(e){return e.length}function ap(e){return e.length}function cs(e,t){return t.push(e),e}function w7(e,t){return e.map(t).join("")}var iu=1,Bo=1,q1=0,lt=0,_e=0,Qo="";function su(e,t,n,r,o,a,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:iu,column:Bo,length:i,return:""}}function da(e,t){return y7(su("",null,null,"",null,null,0),e,{length:-e.length},t)}function x7(){return _e}function S7(){return _e=lt>0?Ve(Qo,--lt):0,Bo--,_e===10&&(Bo=1,iu--),_e}function ht(){return _e=lt<q1?Ve(Qo,lt++):0,Bo++,_e===10&&(Bo=1,iu++),_e}function cn(){return Ve(Qo,lt)}function Ws(){return lt}function $i(e,t){return li(Qo,e,t)}function ui(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function R1(e){return iu=Bo=1,q1=rn(Qo=e),lt=0,[]}function I1(e){return Qo="",e}function Hs(e){return E1($i(lt-1,Td(e===91?e+2:e===40?e+1:e)))}function C7(e){for(;(_e=cn())&&_e<33;)ht();return ui(e)>2||ui(_e)>3?"":" "}function k7(e,t){for(;--t&&ht()&&!(_e<48||_e>102||_e>57&&_e<65||_e>70&&_e<97););return $i(e,Ws()+(t<6&&cn()==32&&ht()==32))}function Td(e){for(;ht();)switch(_e){case e:return lt;case 34:case 39:e!==34&&e!==39&&Td(_e);break;case 40:e===41&&Td(e);break;case 92:ht();break}return lt}function T7(e,t){for(;ht()&&e+_e!==47+10;)if(e+_e===42+42&&cn()===47)break;return"/*"+$i(t,lt-1)+"*"+au(e===47?e:ht())}function _7(e){for(;!ui(cn());)ht();return $i(e,lt)}function F7(e){return I1(Us("",null,null,null,[""],e=R1(e),0,[0],e))}function Us(e,t,n,r,o,a,i,s,l){for(var u=0,c=0,d=i,f=0,p=0,y=0,b=1,x=1,m=1,h=0,g="",S=o,P=a,A=r,F=g;x;)switch(y=h,h=ht()){case 40:if(y!=108&&Ve(F,d-1)==58){kd(F+=J(Hs(h),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:F+=Hs(h);break;case 9:case 10:case 13:case 32:F+=C7(y);break;case 92:F+=k7(Ws()-1,7);continue;case 47:switch(cn()){case 42:case 47:cs(P7(T7(ht(),Ws()),t,n),l);break;default:F+="/"}break;case 123*b:s[u++]=rn(F)*m;case 125*b:case 59:case 0:switch(h){case 0:case 125:x=0;case 59+c:m==-1&&(F=J(F,/\f/g,"")),p>0&&rn(F)-d&&cs(p>32?Dh(F+";",r,n,d-1):Dh(J(F," ","")+";",r,n,d-2),l);break;case 59:F+=";";default:if(cs(A=Oh(F,t,n,u,c,o,s,g,S=[],P=[],d),a),h===123)if(c===0)Us(F,t,A,A,S,a,d,s,P);else switch(f===99&&Ve(F,3)===110?100:f){case 100:case 108:case 109:case 115:Us(e,A,A,r&&cs(Oh(e,A,A,0,0,o,s,g,o,S=[],d),P),o,P,d,s,r?S:P);break;default:Us(F,A,A,A,[""],P,0,s,P)}}u=c=p=0,b=m=1,g=F="",d=i;break;case 58:d=1+rn(F),p=y;default:if(b<1){if(h==123)--b;else if(h==125&&b++==0&&S7()==125)continue}switch(F+=au(h),h*b){case 38:m=c>0?1:(F+="\f",-1);break;case 44:s[u++]=(rn(F)-1)*m,m=1;break;case 64:cn()===45&&(F+=Hs(ht())),f=cn(),c=d=rn(g=F+=_7(Ws())),h++;break;case 45:y===45&&rn(F)==2&&(b=0)}}return a}function Oh(e,t,n,r,o,a,i,s,l,u,c){for(var d=o-1,f=o===0?a:[""],p=ap(f),y=0,b=0,x=0;y<r;++y)for(var m=0,h=li(e,d+1,d=g7(b=i[y])),g=e;m<p;++m)(g=E1(b>0?f[m]+" "+h:J(h,/&\f/g,f[m])))&&(l[x++]=g);return su(e,t,n,o===0?rp:s,l,u,c)}function P7(e,t,n){return su(e,t,n,P1,au(x7()),li(e,2,-2),0)}function Dh(e,t,n,r){return su(e,t,n,op,li(e,0,r),li(e,r+1,-1),r)}function Ao(e,t){for(var n="",r=ap(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function A7(e,t,n,r){switch(e.type){case h7:if(e.children.length)break;case m7:case op:return e.return=e.return||e.value;case P1:return"";case A1:return e.return=e.value+"{"+Ao(e.children,r)+"}";case rp:e.value=e.props.join(",")}return rn(n=Ao(e.children,r))?e.return=e.value+"{"+n+"}":""}function E7(e){var t=ap(e);return function(n,r,o,a){for(var i="",s=0;s<t;s++)i+=e[s](n,r,o,a)||"";return i}}function q7(e){return function(t){t.root||(t=t.return)&&e(t)}}var Wh=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var o=t(r);return n.set(r,o),o}};function z1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var R7=function(t,n,r){for(var o=0,a=0;o=a,a=cn(),o===38&&a===12&&(n[r]=1),!ui(a);)ht();return $i(t,lt)},I7=function(t,n){var r=-1,o=44;do switch(ui(o)){case 0:o===38&&cn()===12&&(n[r]=1),t[r]+=R7(lt-1,n,r);break;case 2:t[r]+=Hs(o);break;case 4:if(o===44){t[++r]=cn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=au(o)}while(o=ht());return t},z7=function(t,n){return I1(I7(R1(t),n))},Hh=new WeakMap,$7=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Hh.get(r))&&!o){Hh.set(t,!0);for(var a=[],i=z7(n,a),s=r.props,l=0,u=0;l<i.length;l++)for(var c=0;c<s.length;c++,u++)t.props[u]=a[l]?i[l].replace(/&\f/g,s[c]):s[c]+" "+i[l]}}},L7=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function $1(e,t){switch(b7(e,t)){case 5103:return Q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Q+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Q+e+ml+e+De+e+e;case 6828:case 4268:return Q+e+De+e+e;case 6165:return Q+e+De+"flex-"+e+e;case 5187:return Q+e+J(e,/(\w+).+(:[^]+)/,Q+"box-$1$2"+De+"flex-$1$2")+e;case 5443:return Q+e+De+"flex-item-"+J(e,/flex-|-self/,"")+e;case 4675:return Q+e+De+"flex-line-pack"+J(e,/align-content|flex-|-self/,"")+e;case 5548:return Q+e+De+J(e,"shrink","negative")+e;case 5292:return Q+e+De+J(e,"basis","preferred-size")+e;case 6060:return Q+"box-"+J(e,"-grow","")+Q+e+De+J(e,"grow","positive")+e;case 4554:return Q+J(e,/([^-])(transform)/g,"$1"+Q+"$2")+e;case 6187:return J(J(J(e,/(zoom-|grab)/,Q+"$1"),/(image-set)/,Q+"$1"),e,"")+e;case 5495:case 3959:return J(e,/(image-set\([^]*)/,Q+"$1$`$1");case 4968:return J(J(e,/(.+:)(flex-)?(.*)/,Q+"box-pack:$3"+De+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Q+e+e;case 4095:case 3583:case 4068:case 2532:return J(e,/(.+)-inline(.+)/,Q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rn(e)-1-t>6)switch(Ve(e,t+1)){case 109:if(Ve(e,t+4)!==45)break;case 102:return J(e,/(.+:)(.+)-([^]+)/,"$1"+Q+"$2-$3$1"+ml+(Ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~kd(e,"stretch")?$1(J(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ve(e,t+1)!==115)break;case 6444:switch(Ve(e,rn(e)-3-(~kd(e,"!important")&&10))){case 107:return J(e,":",":"+Q)+e;case 101:return J(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Q+(Ve(e,14)===45?"inline-":"")+"box$3$1"+Q+"$2$3$1"+De+"$2box$3")+e}break;case 5936:switch(Ve(e,t+11)){case 114:return Q+e+De+J(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Q+e+De+J(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Q+e+De+J(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Q+e+De+e+e}return e}var M7=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case op:t.return=$1(t.value,t.length);break;case A1:return Ao([da(t,{value:J(t.value,"@","@"+Q)})],o);case rp:if(t.length)return w7(t.props,function(a){switch(v7(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ao([da(t,{props:[J(a,/:(read-\w+)/,":"+ml+"$1")]})],o);case"::placeholder":return Ao([da(t,{props:[J(a,/:(plac\w+)/,":"+Q+"input-$1")]}),da(t,{props:[J(a,/:(plac\w+)/,":"+ml+"$1")]}),da(t,{props:[J(a,/:(plac\w+)/,De+"input-$1")]})],o)}return""})}},V7=[M7],j7=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(b){var x=b.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(b),b.setAttribute("data-s",""))})}var o=t.stylisPlugins||V7,a={},i,s=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(b){for(var x=b.getAttribute("data-emotion").split(" "),m=1;m<x.length;m++)a[x[m]]=!0;s.push(b)});var l,u=[$7,L7];{var c,d=[A7,q7(function(b){c.insert(b)})],f=E7(u.concat(o,d)),p=function(x){return Ao(F7(x),f)};l=function(x,m,h,g){c=h,p(x?x+"{"+m.styles+"}":m.styles),g&&(y.inserted[m.name]=!0)}}var y={key:n,sheet:new p7({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:l};return y.sheet.hydrate(s),y};function hl(){return hl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hl.apply(null,arguments)}var L1={exports:{}},oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $e=typeof Symbol=="function"&&Symbol.for,ip=$e?Symbol.for("react.element"):60103,sp=$e?Symbol.for("react.portal"):60106,lu=$e?Symbol.for("react.fragment"):60107,uu=$e?Symbol.for("react.strict_mode"):60108,cu=$e?Symbol.for("react.profiler"):60114,du=$e?Symbol.for("react.provider"):60109,fu=$e?Symbol.for("react.context"):60110,lp=$e?Symbol.for("react.async_mode"):60111,pu=$e?Symbol.for("react.concurrent_mode"):60111,mu=$e?Symbol.for("react.forward_ref"):60112,hu=$e?Symbol.for("react.suspense"):60113,B7=$e?Symbol.for("react.suspense_list"):60120,gu=$e?Symbol.for("react.memo"):60115,yu=$e?Symbol.for("react.lazy"):60116,N7=$e?Symbol.for("react.block"):60121,O7=$e?Symbol.for("react.fundamental"):60117,D7=$e?Symbol.for("react.responder"):60118,W7=$e?Symbol.for("react.scope"):60119;function vt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ip:switch(e=e.type,e){case lp:case pu:case lu:case cu:case uu:case hu:return e;default:switch(e=e&&e.$$typeof,e){case fu:case mu:case yu:case gu:case du:return e;default:return t}}case sp:return t}}}function M1(e){return vt(e)===pu}oe.AsyncMode=lp;oe.ConcurrentMode=pu;oe.ContextConsumer=fu;oe.ContextProvider=du;oe.Element=ip;oe.ForwardRef=mu;oe.Fragment=lu;oe.Lazy=yu;oe.Memo=gu;oe.Portal=sp;oe.Profiler=cu;oe.StrictMode=uu;oe.Suspense=hu;oe.isAsyncMode=function(e){return M1(e)||vt(e)===lp};oe.isConcurrentMode=M1;oe.isContextConsumer=function(e){return vt(e)===fu};oe.isContextProvider=function(e){return vt(e)===du};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ip};oe.isForwardRef=function(e){return vt(e)===mu};oe.isFragment=function(e){return vt(e)===lu};oe.isLazy=function(e){return vt(e)===yu};oe.isMemo=function(e){return vt(e)===gu};oe.isPortal=function(e){return vt(e)===sp};oe.isProfiler=function(e){return vt(e)===cu};oe.isStrictMode=function(e){return vt(e)===uu};oe.isSuspense=function(e){return vt(e)===hu};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===lu||e===pu||e===cu||e===uu||e===hu||e===B7||typeof e=="object"&&e!==null&&(e.$$typeof===yu||e.$$typeof===gu||e.$$typeof===du||e.$$typeof===fu||e.$$typeof===mu||e.$$typeof===O7||e.$$typeof===D7||e.$$typeof===W7||e.$$typeof===N7)};oe.typeOf=vt;(function(e){e.exports=oe})(L1);var V1=L1.exports,H7={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},U7={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},j1={};j1[V1.ForwardRef]=H7;j1[V1.Memo]=U7;var G7=!0;function B1(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(r+=o+" ")}),r}var up=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||G7===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},cp=function(t,n,r){up(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+o:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function K7(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Y7={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},X7=!1,Z7=/[A-Z]|^ms/g,Q7=/_EMO_([^_]+?)_([^]*?)_EMO_/g,N1=function(t){return t.charCodeAt(1)===45},Uh=function(t){return t!=null&&typeof t!="boolean"},kc=z1(function(e){return N1(e)?e:e.replace(Z7,"-$&").toLowerCase()}),Gh=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Q7,function(r,o,a){return on={name:o,styles:a,next:on},o})}return Y7[t]!==1&&!N1(t)&&typeof n=="number"&&n!==0?n+"px":n},J7="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function ci(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var o=n;if(o.anim===1)return on={name:o.name,styles:o.styles,next:on},o.name;var a=n;if(a.styles!==void 0){var i=a.next;if(i!==void 0)for(;i!==void 0;)on={name:i.name,styles:i.styles,next:on},i=i.next;var s=a.styles+";";return s}return ek(e,t,n)}case"function":{if(e!==void 0){var l=on,u=n(e);return on=l,ci(e,t,u)}break}}var c=n;if(t==null)return c;var d=t[c];return d!==void 0?d:c}function ek(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=ci(e,t,n[o])+";";else for(var a in n){var i=n[a];if(typeof i!="object"){var s=i;t!=null&&t[s]!==void 0?r+=a+"{"+t[s]+"}":Uh(s)&&(r+=kc(a)+":"+Gh(a,s)+";")}else{if(a==="NO_COMPONENT_SELECTOR"&&X7)throw new Error(J7);if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var l=0;l<i.length;l++)Uh(i[l])&&(r+=kc(a)+":"+Gh(a,i[l])+";");else{var u=ci(e,t,i);switch(a){case"animation":case"animationName":{r+=kc(a)+":"+u+";";break}default:r+=a+"{"+u+"}"}}}}return r}var Kh=/label:\s*([^\s;{]+)\s*(;|$)/g,on;function bu(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,o="";on=void 0;var a=e[0];if(a==null||a.raw===void 0)r=!1,o+=ci(n,t,a);else{var i=a;o+=i[0]}for(var s=1;s<e.length;s++)if(o+=ci(n,t,e[s]),r){var l=a;o+=l[s]}Kh.lastIndex=0;for(var u="",c;(c=Kh.exec(o))!==null;)u+="-"+c[1];var d=K7(o)+u;return{name:d,styles:o,next:on}}var tk=function(t){return t()},O1=Ch["useInsertionEffect"]?Ch["useInsertionEffect"]:!1,D1=O1||tk,Yh=O1||v.exports.useLayoutEffect,nk=!1,dp=v.exports.createContext(typeof HTMLElement<"u"?j7({key:"css"}):null);dp.Provider;var rk=function(){return v.exports.useContext(dp)},fp=function(t){return v.exports.forwardRef(function(n,r){var o=v.exports.useContext(dp);return t(n,o,r)})},No=v.exports.createContext({}),ok=function(t,n){if(typeof n=="function"){var r=n(t);return r}return hl({},t,n)},ak=Wh(function(e){return Wh(function(t){return ok(e,t)})}),ik=function(t){var n=v.exports.useContext(No);return t.theme!==n&&(n=ak(n)(t.theme)),T(No.Provider,{value:n,children:t.children})},pp={}.hasOwnProperty,_d="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",sk=function(t,n){var r={};for(var o in n)pp.call(n,o)&&(r[o]=n[o]);return r[_d]=t,r},lk=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return up(n,r,o),D1(function(){return cp(n,r,o)}),null},uk=fp(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[_d],a=[r],i="";typeof e.className=="string"?i=B1(t.registered,a,e.className):e.className!=null&&(i=e.className+" ");var s=bu(a,void 0,v.exports.useContext(No));i+=t.key+"-"+s.name;var l={};for(var u in e)pp.call(e,u)&&u!=="css"&&u!==_d&&!nk&&(l[u]=e[u]);return l.className=i,n&&(l.ref=n),K(si,{children:[T(lk,{cache:t,serialized:s,isStringTag:typeof o=="string"}),T(o,{...l})]})}),ck=uk,Xh=function(t,n){var r=arguments;if(n==null||!pp.call(n,"css"))return v.exports.createElement.apply(void 0,r);var o=r.length,a=new Array(o);a[0]=ck,a[1]=sk(t,n);for(var i=2;i<o;i++)a[i]=r[i];return v.exports.createElement.apply(null,a)};(function(e){var t;(function(n){})(t||(t=e.JSX||(e.JSX={})))})(Xh||(Xh={}));var vu=fp(function(e,t){var n=e.styles,r=bu([n],void 0,v.exports.useContext(No)),o=v.exports.useRef();return Yh(function(){var a=t.key+"-global",i=new t.sheet.constructor({key:a,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),s=!1,l=document.querySelector('style[data-emotion="'+a+" "+r.name+'"]');return t.sheet.tags.length&&(i.before=t.sheet.tags[0]),l!==null&&(s=!0,l.setAttribute("data-emotion",a),i.hydrate([l])),o.current=[i,s],function(){i.flush()}},[t]),Yh(function(){var a=o.current,i=a[0],s=a[1];if(s){a[1]=!1;return}if(r.next!==void 0&&cp(t,r.next,!0),i.tags.length){var l=i.tags[i.tags.length-1].nextElementSibling;i.before=l,i.flush()}t.insert("",r,i,!1)},[t,r.name]),null});function dk(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return bu(t)}function fk(){var e=dk.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}const mp=v.exports.createContext({});mp.displayName="ColorModeContext";function hp(){const e=v.exports.useContext(mp);if(e===void 0)throw new Error("useColorMode must be used within a ColorModeProvider");return e}const ds={light:"chakra-ui-light",dark:"chakra-ui-dark"};function pk(e={}){const{preventTransition:t=!0,nonce:n}=e,r={setDataset:o=>{const a=t?r.preventTransition():void 0;document.documentElement.dataset.theme=o,document.documentElement.style.colorScheme=o,a==null||a()},setClassName(o){document.body.classList.add(o?ds.dark:ds.light),document.body.classList.remove(o?ds.light:ds.dark)},query(){return window.matchMedia("(prefers-color-scheme: dark)")},getSystemTheme(o){var i;return((i=r.query().matches)!=null?i:o==="dark")?"dark":"light"},addListener(o){const a=r.query(),i=s=>{o(s.matches?"dark":"light")};return typeof a.addListener=="function"?a.addListener(i):a.addEventListener("change",i),()=>{typeof a.removeListener=="function"?a.removeListener(i):a.removeEventListener("change",i)}},preventTransition(){const o=document.createElement("style");return o.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),n!==void 0&&(o.nonce=n),document.head.appendChild(o),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(o)})})}}};return r}const mk="chakra-ui-color-mode";function hk(e){return{ssr:!1,type:"localStorage",get(t){if(!(globalThis!=null&&globalThis.document))return t;let n;try{n=localStorage.getItem(e)||t}catch{}return n||t},set(t){try{localStorage.setItem(e,t)}catch{}}}}const gk=hk(mk),Zh=()=>{},yk=f5()?v.exports.useLayoutEffect:v.exports.useEffect;function Qh(e,t){return e.type==="cookie"&&e.ssr?e.get(t):t}const W1=function(t){const{value:n,children:r,options:{useSystemColorMode:o,initialColorMode:a,disableTransitionOnChange:i}={},colorModeManager:s=gk}=t,l=rk(),u=a==="dark"?"dark":"light",[c,d]=v.exports.useState(()=>Qh(s,u)),[f,p]=v.exports.useState(()=>Qh(s)),{getSystemTheme:y,setClassName:b,setDataset:x,addListener:m}=v.exports.useMemo(()=>pk({preventTransition:i,nonce:l==null?void 0:l.nonce}),[i,l==null?void 0:l.nonce]),h=a==="system"&&!c?f:c,g=v.exports.useCallback(A=>{const F=A==="system"?y():A;d(F),b(F==="dark"),x(F),s.set(F)},[s,y,b,x]);yk(()=>{a==="system"&&p(y())},[]),v.exports.useEffect(()=>{const A=s.get();if(A){g(A);return}if(a==="system"){g("system");return}g(u)},[s,u,a,g]);const S=v.exports.useCallback(()=>{g(h==="dark"?"light":"dark")},[h,g]);v.exports.useEffect(()=>{if(!!o)return m(g)},[o,m,g]);const P=v.exports.useMemo(()=>({colorMode:n!=null?n:h,toggleColorMode:n?Zh:S,setColorMode:n?Zh:g,forced:n!==void 0}),[h,S,g,n]);return T(mp.Provider,{value:P,children:r})};W1.displayName="ColorModeProvider";const H1=String.raw,U1=H1`
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
`,bk=()=>T(vu,{styles:U1}),vk=({scope:e=""})=>T(vu,{styles:H1`
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

      ${U1}
    `});function wk(e){const{cssVarsRoot:t,theme:n,children:r}=e,o=v.exports.useMemo(()=>Z9(n),[n]);return K(ik,{theme:o,children:[T(xk,{root:t}),r]})}function xk({root:e=":host, :root"}){const t=[e,"[data-theme]"].join(",");return T(vu,{styles:n=>({[t]:n.__cssVars})})}Ut({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function Sk(){const{colorMode:e}=hp();return T(vu,{styles:t=>{const n=t1(t,"styles.global"),r=sn(n,{theme:t,colorMode:e});return r?s1(r)(t):void 0}})}const[Ck,kk]=Ut({strict:!1,name:"PortalManagerContext"});function G1(e){const{children:t,zIndex:n}=e;return T(Ck,{value:{zIndex:n},children:t})}G1.displayName="PortalManager";const K1=v.exports.createContext({getDocument(){return document},getWindow(){return window}});K1.displayName="EnvironmentContext";function Y1(e){const{children:t,environment:n,disabled:r}=e,o=v.exports.useRef(null),a=v.exports.useMemo(()=>n||{getDocument:()=>{var s,l;return(l=(s=o.current)==null?void 0:s.ownerDocument)!=null?l:document},getWindow:()=>{var s,l;return(l=(s=o.current)==null?void 0:s.ownerDocument.defaultView)!=null?l:window}},[n]),i=!r||!n;return K(K1.Provider,{value:a,children:[t,i&&T("span",{id:"__chakra_env",hidden:!0,ref:o})]})}Y1.displayName="EnvironmentProvider";const Tk=e=>{const{children:t,colorModeManager:n,portalZIndex:r,resetScope:o,resetCSS:a=!0,theme:i={},environment:s,cssVarsRoot:l,disableEnvironment:u,disableGlobalStyle:c}=e,d=T(Y1,{environment:s,disabled:u,children:t});return T(wk,{theme:i,cssVarsRoot:l,children:K(W1,{colorModeManager:n,options:i.config,children:[a?T(vk,{scope:o}):T(bk,{}),!c&&T(Sk,{}),r?T(G1,{zIndex:r,children:d}):d]})})},gp=v.exports.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),wu=v.exports.createContext({});function _k(){return v.exports.useContext(wu).visualElement}const Jo=v.exports.createContext(null),Dr=typeof document<"u",Ba=Dr?v.exports.useLayoutEffect:v.exports.useEffect,X1=v.exports.createContext({strict:!1});function Fk(e,t,n,r){const o=_k(),a=v.exports.useContext(X1),i=v.exports.useContext(Jo),s=v.exports.useContext(gp).reducedMotion,l=v.exports.useRef();r=r||a.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:o,props:n,presenceId:i?i.id:void 0,blockInitialAnimation:i?i.initial===!1:!1,reducedMotionConfig:s}));const u=l.current;return Ba(()=>{u&&u.render()}),Ba(()=>{u&&u.animationState&&u.animationState.animateChanges()}),Ba(()=>()=>u&&u.notify("Unmount"),[]),u}function lo(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Pk(e,t,n){return v.exports.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):lo(n)&&(n.current=r))},[t])}function di(e){return typeof e=="string"||Array.isArray(e)}function xu(e){return typeof e=="object"&&typeof e.start=="function"}const Ak=["initial","animate","exit","whileHover","whileDrag","whileTap","whileFocus","whileInView"];function Su(e){return xu(e.animate)||Ak.some(t=>di(e[t]))}function Z1(e){return Boolean(Su(e)||e.variants)}function Ek(e,t){if(Su(e)){const{initial:n,animate:r}=e;return{initial:n===!1||di(n)?n:void 0,animate:di(r)?r:void 0}}return e.inherit!==!1?t:{}}function qk(e){const{initial:t,animate:n}=Ek(e,v.exports.useContext(wu));return v.exports.useMemo(()=>({initial:t,animate:n}),[Jh(t),Jh(n)])}function Jh(e){return Array.isArray(e)?e.join(" "):e}const wn=e=>({isEnabled:t=>e.some(n=>!!t[n])}),fi={measureLayout:wn(["layout","layoutId","drag"]),animation:wn(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"]),exit:wn(["exit"]),drag:wn(["drag","dragControls"]),focus:wn(["whileFocus"]),hover:wn(["whileHover","onHoverStart","onHoverEnd"]),tap:wn(["whileTap","onTap","onTapStart","onTapCancel"]),pan:wn(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),inView:wn(["whileInView","onViewportEnter","onViewportLeave"])};function Rk(e){for(const t in e)t==="projectionNodeConstructor"?fi.projectionNodeConstructor=e[t]:fi[t].Component=e[t]}function Cu(e){const t=v.exports.useRef(null);return t.current===null&&(t.current=e()),t.current}const Na={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let Ik=1;function zk(){return Cu(()=>{if(Na.hasEverUpdated)return Ik++})}const yp=v.exports.createContext({});class $k extends Jl.Component{getSnapshotBeforeUpdate(){const{visualElement:t,props:n}=this.props;return t&&t.setProps(n),null}componentDidUpdate(){}render(){return this.props.children}}const Q1=v.exports.createContext({}),Lk=Symbol.for("motionComponentSymbol");function Mk({preloadedFeatures:e,createVisualElement:t,projectionNodeConstructor:n,useRender:r,useVisualState:o,Component:a}){e&&Rk(e);function i(l,u){const c={...v.exports.useContext(gp),...l,layoutId:Vk(l)},{isStatic:d}=c;let f=null;const p=qk(l),y=d?void 0:zk(),b=o(l,d);if(!d&&Dr){p.visualElement=Fk(a,b,c,t);const x=v.exports.useContext(X1).strict,m=v.exports.useContext(Q1);p.visualElement&&(f=p.visualElement.loadFeatures(c,x,e,y,n||fi.projectionNodeConstructor,m))}return K($k,{visualElement:p.visualElement,props:c,children:[f,T(wu.Provider,{value:p,children:r(a,l,y,Pk(b,p.visualElement,u),b,d,p.visualElement)})]})}const s=v.exports.forwardRef(i);return s[Lk]=a,s}function Vk({layoutId:e}){const t=v.exports.useContext(yp).id;return t&&e!==void 0?t+"-"+e:e}function jk(e){function t(r,o={}){return Mk(e(r,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const Bk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function bp(e){return typeof e!="string"||e.includes("-")?!1:!!(Bk.indexOf(e)>-1||/[A-Z]/.test(e))}const gl={};function Nk(e){Object.assign(gl,e)}const yl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Wr=new Set(yl);function J1(e,{layout:t,layoutId:n}){return Wr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!gl[e]||e==="opacity")}const mn=e=>!!(e!=null&&e.getVelocity),Ok={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Dk=(e,t)=>yl.indexOf(e)-yl.indexOf(t);function Wk({transform:e,transformKeys:t},{enableHardwareAcceleration:n=!0,allowTransformNone:r=!0},o,a){let i="";t.sort(Dk);for(const s of t)i+=`${Ok[s]||s}(${e[s]}) `;return n&&!e.z&&(i+="translateZ(0)"),i=i.trim(),a?i=a(e,o?"":i):r&&o&&(i="none"),i}function eb(e){return e.startsWith("--")}const Hk=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Oo=(e,t,n)=>Math.min(Math.max(n,e),t),Hr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Oa={...Hr,transform:e=>Oo(0,1,e)},fs={...Hr,default:1},Da=e=>Math.round(e*1e5)/1e5,pi=/(-)?([\d]*\.?[\d])+/g,Fd=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Uk=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Li(e){return typeof e=="string"}const Mi=e=>({test:t=>Li(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Wn=Mi("deg"),dn=Mi("%"),j=Mi("px"),Gk=Mi("vh"),Kk=Mi("vw"),eg={...dn,parse:e=>dn.parse(e)/100,transform:e=>dn.transform(e*100)},tg={...Hr,transform:Math.round},tb={borderWidth:j,borderTopWidth:j,borderRightWidth:j,borderBottomWidth:j,borderLeftWidth:j,borderRadius:j,radius:j,borderTopLeftRadius:j,borderTopRightRadius:j,borderBottomRightRadius:j,borderBottomLeftRadius:j,width:j,maxWidth:j,height:j,maxHeight:j,size:j,top:j,right:j,bottom:j,left:j,padding:j,paddingTop:j,paddingRight:j,paddingBottom:j,paddingLeft:j,margin:j,marginTop:j,marginRight:j,marginBottom:j,marginLeft:j,rotate:Wn,rotateX:Wn,rotateY:Wn,rotateZ:Wn,scale:fs,scaleX:fs,scaleY:fs,scaleZ:fs,skew:Wn,skewX:Wn,skewY:Wn,distance:j,translateX:j,translateY:j,translateZ:j,x:j,y:j,z:j,perspective:j,transformPerspective:j,opacity:Oa,originX:eg,originY:eg,originZ:j,zIndex:tg,fillOpacity:Oa,strokeOpacity:Oa,numOctaves:tg};function vp(e,t,n,r){const{style:o,vars:a,transform:i,transformKeys:s,transformOrigin:l}=e;s.length=0;let u=!1,c=!1,d=!0;for(const f in t){const p=t[f];if(eb(f)){a[f]=p;continue}const y=tb[f],b=Hk(p,y);if(Wr.has(f)){if(u=!0,i[f]=b,s.push(f),!d)continue;p!==(y.default||0)&&(d=!1)}else f.startsWith("origin")?(c=!0,l[f]=b):o[f]=b}if(t.transform||(u||r?o.transform=Wk(e,n,d,r):o.transform&&(o.transform="none")),c){const{originX:f="50%",originY:p="50%",originZ:y=0}=l;o.transformOrigin=`${f} ${p} ${y}`}}const wp=()=>({style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}});function nb(e,t,n){for(const r in t)!mn(t[r])&&!J1(r,n)&&(e[r]=t[r])}function Yk({transformTemplate:e},t,n){return v.exports.useMemo(()=>{const r=wp();return vp(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function Xk(e,t,n){const r=e.style||{},o={};return nb(o,r,e),Object.assign(o,Yk(e,t,n)),e.transformValues?e.transformValues(o):o}function Zk(e,t,n){const r={},o=Xk(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),r.style=o,r}const Qk=["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"],Jk=["whileTap","onTap","onTapStart","onTapCancel"],eT=["onPan","onPanStart","onPanSessionStart","onPanEnd"],tT=["whileInView","onViewportEnter","onViewportLeave","viewport"],nT=new Set(["initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","onHoverStart","onHoverEnd","layoutScroll",...tT,...Jk,...Qk,...eT]);function bl(e){return nT.has(e)}let rb=e=>!bl(e);function rT(e){!e||(rb=t=>t.startsWith("on")?!bl(t):e(t))}try{rT(require("@emotion/is-prop-valid").default)}catch{}function oT(e,t,n){const r={};for(const o in e)(rb(o)||n===!0&&bl(o)||!t&&!bl(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function ng(e,t,n){return typeof e=="string"?e:j.transform(t+n*e)}function aT(e,t,n){const r=ng(t,e.x,e.width),o=ng(n,e.y,e.height);return`${r} ${o}`}const iT={offset:"stroke-dashoffset",array:"stroke-dasharray"},sT={offset:"strokeDashoffset",array:"strokeDasharray"};function lT(e,t,n=1,r=0,o=!0){e.pathLength=1;const a=o?iT:sT;e[a.offset]=j.transform(-r);const i=j.transform(t),s=j.transform(n);e[a.array]=`${i} ${s}`}function xp(e,{attrX:t,attrY:n,originX:r,originY:o,pathLength:a,pathSpacing:i=1,pathOffset:s=0,...l},u,c,d){if(vp(e,l,u,d),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:p,dimensions:y}=e;f.transform&&(y&&(p.transform=f.transform),delete f.transform),y&&(r!==void 0||o!==void 0||p.transform)&&(p.transformOrigin=aT(y,r!==void 0?r:.5,o!==void 0?o:.5)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),a!==void 0&&lT(f,a,i,s,!1)}const ob=()=>({...wp(),attrs:{}}),Sp=e=>typeof e=="string"&&e.toLowerCase()==="svg";function uT(e,t,n,r){const o=v.exports.useMemo(()=>{const a=ob();return xp(a,t,{enableHardwareAcceleration:!1},Sp(r),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};nb(a,e.style,e),o.style={...a,...o.style}}return o}function cT(e=!1){return(n,r,o,a,{latestValues:i},s)=>{const u=(bp(n)?uT:Zk)(r,i,s,n),d={...oT(r,typeof n=="string",e),...u,ref:a};return o&&(d["data-projection-id"]=o),v.exports.createElement(n,d)}}const Cp=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function ab(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const ib=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function sb(e,t,n,r){ab(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(ib.has(o)?o:Cp(o),t.attrs[o])}function kp(e){const{style:t}=e,n={};for(const r in t)(mn(t[r])||J1(r,e))&&(n[r]=t[r]);return n}function lb(e){const t=kp(e);for(const n in e)if(mn(e[n])){const r=n==="x"||n==="y"?"attr"+n.toUpperCase():n;t[r]=e[n]}return t}function Tp(e,t,n,r={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),t}const vl=e=>Array.isArray(e),dT=e=>Boolean(e&&typeof e=="object"&&e.mix&&e.toValue),fT=e=>vl(e)?e[e.length-1]||0:e;function Gs(e){const t=mn(e)?e.get():e;return dT(t)?t.toValue():t}function pT({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,a){const i={latestValues:mT(r,o,a,e),renderState:t()};return n&&(i.mount=s=>n(r,s,i)),i}const ub=e=>(t,n)=>{const r=v.exports.useContext(wu),o=v.exports.useContext(Jo),a=()=>pT(e,t,r,o);return n?a():Cu(a)};function mT(e,t,n,r){const o={},a=r(e);for(const f in a)o[f]=Gs(a[f]);let{initial:i,animate:s}=e;const l=Su(e),u=Z1(e);t&&u&&!l&&e.inherit!==!1&&(i===void 0&&(i=t.initial),s===void 0&&(s=t.animate));let c=n?n.initial===!1:!1;c=c||i===!1;const d=c?s:i;return d&&typeof d!="boolean"&&!xu(d)&&(Array.isArray(d)?d:[d]).forEach(p=>{const y=Tp(e,p);if(!y)return;const{transitionEnd:b,transition:x,...m}=y;for(const h in m){let g=m[h];if(Array.isArray(g)){const S=c?g.length-1:0;g=g[S]}g!==null&&(o[h]=g)}for(const h in b)o[h]=b[h]}),o}const hT={useVisualState:ub({scrapeMotionValuesFromProps:lb,createRenderState:ob,onMount:(e,t,{renderState:n,latestValues:r})=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}xp(n,r,{enableHardwareAcceleration:!1},Sp(t.tagName),e.transformTemplate),sb(t,n)}})},gT={useVisualState:ub({scrapeMotionValuesFromProps:kp,createRenderState:wp})};function yT(e,{forwardMotionProps:t=!1},n,r,o){return{...bp(e)?hT:gT,preloadedFeatures:n,useRender:cT(t),createVisualElement:r,projectionNodeConstructor:o,Component:e}}var ie;(function(e){e.Animate="animate",e.Hover="whileHover",e.Tap="whileTap",e.Drag="whileDrag",e.Focus="whileFocus",e.InView="whileInView",e.Exit="exit"})(ie||(ie={}));function ku(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Pd(e,t,n,r){v.exports.useEffect(()=>{const o=e.current;if(n&&o)return ku(o,t,n,r)},[e,t,n,r])}function bT({whileFocus:e,visualElement:t}){const{animationState:n}=t,r=()=>{n&&n.setActive(ie.Focus,!0)},o=()=>{n&&n.setActive(ie.Focus,!1)};Pd(t,"focus",e?r:void 0),Pd(t,"blur",e?o:void 0)}function cb(e){return typeof PointerEvent<"u"&&e instanceof PointerEvent?e.pointerType==="mouse":e instanceof MouseEvent}function db(e){return!!e.touches}function vT(e){return t=>{const n=t instanceof MouseEvent;(!n||n&&t.button===0)&&e(t)}}const wT={pageX:0,pageY:0};function xT(e,t="page"){const r=e.touches[0]||e.changedTouches[0]||wT;return{x:r[t+"X"],y:r[t+"Y"]}}function ST(e,t="page"){return{x:e[t+"X"],y:e[t+"Y"]}}function _p(e,t="page"){return{point:db(e)?xT(e,t):ST(e,t)}}const fb=(e,t=!1)=>{const n=r=>e(r,_p(r));return t?vT(n):n},CT=()=>Dr&&window.onpointerdown===null,kT=()=>Dr&&window.ontouchstart===null,TT=()=>Dr&&window.onmousedown===null,_T={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},FT={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function pb(e){return CT()?e:kT()?FT[e]:TT()?_T[e]:e}function Eo(e,t,n,r){return ku(e,pb(t),fb(n,t==="pointerdown"),r)}function wl(e,t,n,r){return Pd(e,pb(t),n&&fb(n,t==="pointerdown"),r)}function mb(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const rg=mb("dragHorizontal"),og=mb("dragVertical");function hb(e){let t=!1;if(e==="y")t=og();else if(e==="x")t=rg();else{const n=rg(),r=og();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function gb(){const e=hb(!0);return e?(e(),!1):!0}function ag(e,t,n){return(r,o)=>{!cb(r)||gb()||(e.animationState&&e.animationState.setActive(ie.Hover,t),n&&n(r,o))}}function PT({onHoverStart:e,onHoverEnd:t,whileHover:n,visualElement:r}){wl(r,"pointerenter",e||n?ag(r,!0,e):void 0,{passive:!e}),wl(r,"pointerleave",t||n?ag(r,!1,t):void 0,{passive:!t})}const yb=(e,t)=>t?e===t?!0:yb(e,t.parentElement):!1;function Fp(e){return v.exports.useEffect(()=>()=>e(),[])}const AT=(e,t)=>n=>t(e(n)),Tu=(...e)=>e.reduce(AT);function ET({onTap:e,onTapStart:t,onTapCancel:n,whileTap:r,visualElement:o}){const a=e||t||n||r,i=v.exports.useRef(!1),s=v.exports.useRef(null),l={passive:!(t||e||n||p)};function u(){s.current&&s.current(),s.current=null}function c(){return u(),i.current=!1,o.animationState&&o.animationState.setActive(ie.Tap,!1),!gb()}function d(y,b){!c()||(yb(o.current,y.target)?e&&e(y,b):n&&n(y,b))}function f(y,b){!c()||n&&n(y,b)}function p(y,b){u(),!i.current&&(i.current=!0,s.current=Tu(Eo(window,"pointerup",d,l),Eo(window,"pointercancel",f,l)),o.animationState&&o.animationState.setActive(ie.Tap,!0),t&&t(y,b))}wl(o,"pointerdown",a?p:void 0,l),Fp(u)}const qT="production",bb=typeof process>"u"||process.env===void 0?qT:"production",ig=new Set;function vb(e,t,n){e||ig.has(t)||(console.warn(t),n&&console.warn(n),ig.add(t))}const Ad=new WeakMap,Tc=new WeakMap,RT=e=>{const t=Ad.get(e.target);t&&t(e)},IT=e=>{e.forEach(RT)};function zT({root:e,...t}){const n=e||document;Tc.has(n)||Tc.set(n,{});const r=Tc.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(IT,{root:e,...t})),r[o]}function $T(e,t,n){const r=zT(t);return Ad.set(e,n),r.observe(e),()=>{Ad.delete(e),r.unobserve(e)}}function LT({visualElement:e,whileInView:t,onViewportEnter:n,onViewportLeave:r,viewport:o={}}){const a=v.exports.useRef({hasEnteredView:!1,isInView:!1});let i=Boolean(t||n||r);o.once&&a.current.hasEnteredView&&(i=!1),(typeof IntersectionObserver>"u"?jT:VT)(i,a.current,e,o)}const MT={some:0,all:1};function VT(e,t,n,{root:r,margin:o,amount:a="some",once:i}){v.exports.useEffect(()=>{if(!e||!n.current)return;const s={root:r==null?void 0:r.current,rootMargin:o,threshold:typeof a=="number"?a:MT[a]},l=u=>{const{isIntersecting:c}=u;if(t.isInView===c||(t.isInView=c,i&&!c&&t.hasEnteredView))return;c&&(t.hasEnteredView=!0),n.animationState&&n.animationState.setActive(ie.InView,c);const d=n.getProps(),f=c?d.onViewportEnter:d.onViewportLeave;f&&f(u)};return $T(n.current,s,l)},[e,r,o,a])}function jT(e,t,n,{fallback:r=!0}){v.exports.useEffect(()=>{!e||!r||(bb!=="production"&&vb(!1,"IntersectionObserver not available on this device. whileInView animations will trigger on mount."),requestAnimationFrame(()=>{t.hasEnteredView=!0;const{onViewportEnter:o}=n.getProps();o&&o(null),n.animationState&&n.animationState.setActive(ie.InView,!0)}))},[e])}const Qn=e=>t=>(e(t),null),BT={inView:Qn(LT),tap:Qn(ET),focus:Qn(bT),hover:Qn(PT)};function wb(){const e=v.exports.useContext(Jo);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,o=v.exports.useId();return v.exports.useEffect(()=>r(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}function NT(){return OT(v.exports.useContext(Jo))}function OT(e){return e===null?!0:e.isPresent}function xb(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const DT=e=>/^\-?\d*\.?\d+$/.test(e),WT=e=>/^0[^.\s]+$/.test(e),En={delta:0,timestamp:0},Sb=1/60*1e3,HT=typeof performance<"u"?()=>performance.now():()=>Date.now(),Cb=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(HT()),Sb);function UT(e){let t=[],n=[],r=0,o=!1,a=!1;const i=new WeakSet,s={schedule:(l,u=!1,c=!1)=>{const d=c&&o,f=d?t:n;return u&&i.add(l),f.indexOf(l)===-1&&(f.push(l),d&&o&&(r=t.length)),l},cancel:l=>{const u=n.indexOf(l);u!==-1&&n.splice(u,1),i.delete(l)},process:l=>{if(o){a=!0;return}if(o=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let u=0;u<r;u++){const c=t[u];c(l),i.has(c)&&(s.schedule(c),e())}o=!1,a&&(a=!1,s.process(l))}};return s}const GT=40;let Ed=!0,mi=!1,qd=!1;const Vi=["read","update","preRender","render","postRender"],_u=Vi.reduce((e,t)=>(e[t]=UT(()=>mi=!0),e),{}),ot=Vi.reduce((e,t)=>{const n=_u[t];return e[t]=(r,o=!1,a=!1)=>(mi||YT(),n.schedule(r,o,a)),e},{}),ur=Vi.reduce((e,t)=>(e[t]=_u[t].cancel,e),{}),_c=Vi.reduce((e,t)=>(e[t]=()=>_u[t].process(En),e),{}),KT=e=>_u[e].process(En),kb=e=>{mi=!1,En.delta=Ed?Sb:Math.max(Math.min(e-En.timestamp,GT),1),En.timestamp=e,qd=!0,Vi.forEach(KT),qd=!1,mi&&(Ed=!1,Cb(kb))},YT=()=>{mi=!0,Ed=!0,qd||Cb(kb)};function Pp(e,t){e.indexOf(t)===-1&&e.push(t)}function Ap(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Ep{constructor(){this.subscriptions=[]}add(t){return Pp(this.subscriptions,t),()=>Ap(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(!!o)if(o===1)this.subscriptions[0](t,n,r);else for(let a=0;a<o;a++){const i=this.subscriptions[a];i&&i(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function qp(e,t){return t?e*(1e3/t):0}const XT=e=>!isNaN(parseFloat(e));class ZT{constructor(t,n={}){this.version="7.10.3",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,o=!0)=>{this.prev=this.current,this.current=r;const{delta:a,timestamp:i}=En;this.lastUpdated!==i&&(this.timeDelta=a,this.lastUpdated=i,ot.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ot.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=XT(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){return this.events[t]||(this.events[t]=new Ep),this.events[t].add(n)}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t){this.passiveEffect=t}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?qp(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.stopAnimation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.stopAnimation&&(this.stopAnimation(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.clearListeners(),this.stop()}}function Do(e,t){return new ZT(e,t)}const Rp=(e,t)=>n=>Boolean(Li(n)&&Uk.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Tb=(e,t,n)=>r=>{if(!Li(r))return r;const[o,a,i,s]=r.match(pi);return{[e]:parseFloat(o),[t]:parseFloat(a),[n]:parseFloat(i),alpha:s!==void 0?parseFloat(s):1}},QT=e=>Oo(0,255,e),Fc={...Hr,transform:e=>Math.round(QT(e))},Fr={test:Rp("rgb","red"),parse:Tb("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Fc.transform(e)+", "+Fc.transform(t)+", "+Fc.transform(n)+", "+Da(Oa.transform(r))+")"};function JT(e){let t="",n="",r="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Rd={test:Rp("#"),parse:JT,transform:Fr.transform},uo={test:Rp("hsl","hue"),parse:Tb("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+dn.transform(Da(t))+", "+dn.transform(Da(n))+", "+Da(Oa.transform(r))+")"},Ge={test:e=>Fr.test(e)||Rd.test(e)||uo.test(e),parse:e=>Fr.test(e)?Fr.parse(e):uo.test(e)?uo.parse(e):Rd.parse(e),transform:e=>Li(e)?e:e.hasOwnProperty("red")?Fr.transform(e):uo.transform(e)},_b="${c}",Fb="${n}";function e_(e){var t,n;return isNaN(e)&&Li(e)&&(((t=e.match(pi))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Fd))===null||n===void 0?void 0:n.length)||0)>0}function xl(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0,r=0;const o=e.match(Fd);o&&(n=o.length,e=e.replace(Fd,_b),t.push(...o.map(Ge.parse)));const a=e.match(pi);return a&&(r=a.length,e=e.replace(pi,Fb),t.push(...a.map(Hr.parse))),{values:t,numColors:n,numNumbers:r,tokenised:e}}function Pb(e){return xl(e).values}function Ab(e){const{values:t,numColors:n,tokenised:r}=xl(e),o=t.length;return a=>{let i=r;for(let s=0;s<o;s++)i=i.replace(s<n?_b:Fb,s<n?Ge.transform(a[s]):Da(a[s]));return i}}const t_=e=>typeof e=="number"?0:e;function n_(e){const t=Pb(e);return Ab(e)(t.map(t_))}const cr={test:e_,parse:Pb,createTransformer:Ab,getAnimatableNone:n_},r_=new Set(["brightness","contrast","saturate","opacity"]);function o_(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(pi)||[];if(!r)return e;const o=n.replace(r,"");let a=r_.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+o+")"}const a_=/([a-z-]*)\(.*?\)/g,Id={...cr,getAnimatableNone:e=>{const t=e.match(a_);return t?t.map(o_).join(" "):e}},i_={...tb,color:Ge,backgroundColor:Ge,outlineColor:Ge,fill:Ge,stroke:Ge,borderColor:Ge,borderTopColor:Ge,borderRightColor:Ge,borderBottomColor:Ge,borderLeftColor:Ge,filter:Id,WebkitFilter:Id},Ip=e=>i_[e];function zp(e,t){var n;let r=Ip(e);return r!==Id&&(r=cr),(n=r.getAnimatableNone)===null||n===void 0?void 0:n.call(r,t)}const Eb=e=>t=>t.test(e),s_={test:e=>e==="auto",parse:e=>e},qb=[Hr,j,dn,Wn,Kk,Gk,s_],fa=e=>qb.find(Eb(e)),l_=[...qb,Ge,cr],u_=e=>l_.find(Eb(e));function c_(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function d_(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Fu(e,t,n){const r=e.getProps();return Tp(r,t,n!==void 0?n:r.custom,c_(e),d_(e))}function f_(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Do(n))}function p_(e,t){const n=Fu(e,t);let{transitionEnd:r={},transition:o={},...a}=n?e.makeTargetAnimatable(n,!1):{};a={...a,...r};for(const i in a){const s=fT(a[i]);f_(e,i,s)}}function m_(e,t,n){var r,o;const a=Object.keys(t).filter(s=>!e.hasValue(s)),i=a.length;if(!!i)for(let s=0;s<i;s++){const l=a[s],u=t[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(o=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&o!==void 0?o:t[l]),c!=null&&(typeof c=="string"&&(DT(c)||WT(c))?c=parseFloat(c):!u_(c)&&cr.test(u)&&(c=zp(l,u)),e.addValue(l,Do(c,{owner:e})),n[l]===void 0&&(n[l]=c),c!==null&&e.setBaseTarget(l,c))}}function h_(e,t){return t?(t[e]||t.default||t).from:void 0}function g_(e,t,n){var r;const o={};for(const a in e){const i=h_(a,t);o[a]=i!==void 0?i:(r=n.getValue(a))===null||r===void 0?void 0:r.get()}return o}function Sl(e){return Boolean(mn(e)&&e.add)}const y_=(e,t)=>`${e}: ${t}`;function b_(e,t){const{MotionAppearAnimations:n}=window,r=y_(e,Wr.has(t)?"transform":t),o=n&&n.get(r);return o?(ot.render(()=>{try{o.cancel(),n.delete(r)}catch{}}),o.currentTime||0):0}const v_="framerAppearId",w_="data-"+Cp(v_);var x_=function(){},Cl=function(){};const Ks=e=>e*1e3,S_={current:!1},$p=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Lp=e=>t=>1-e(1-t),Mp=e=>e*e,C_=Lp(Mp),Vp=$p(Mp),xe=(e,t,n)=>-n*e+n*t+e;function Pc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function k_({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,a=0,i=0;if(!t)o=a=i=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;o=Pc(l,s,e+1/3),a=Pc(l,s,e),i=Pc(l,s,e-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(i*255),alpha:r}}const Ac=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},T_=[Rd,Fr,uo],__=e=>T_.find(t=>t.test(e));function sg(e){const t=__(e);let n=t.parse(e);return t===uo&&(n=k_(n)),n}const Rb=(e,t)=>{const n=sg(e),r=sg(t),o={...n};return a=>(o.red=Ac(n.red,r.red,a),o.green=Ac(n.green,r.green,a),o.blue=Ac(n.blue,r.blue,a),o.alpha=xe(n.alpha,r.alpha,a),Fr.transform(o))};function Ib(e,t){return typeof e=="number"?n=>xe(e,t,n):Ge.test(e)?Rb(e,t):$b(e,t)}const zb=(e,t)=>{const n=[...e],r=n.length,o=e.map((a,i)=>Ib(a,t[i]));return a=>{for(let i=0;i<r;i++)n[i]=o[i](a);return n}},F_=(e,t)=>{const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=Ib(e[o],t[o]));return o=>{for(const a in r)n[a]=r[a](o);return n}},$b=(e,t)=>{const n=cr.createTransformer(t),r=xl(e),o=xl(t);return r.numColors===o.numColors&&r.numNumbers>=o.numNumbers?Tu(zb(r.values,o.values),n):i=>`${i>0?t:e}`},kl=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},lg=(e,t)=>n=>xe(e,t,n);function P_(e){return typeof e=="number"?lg:typeof e=="string"?Ge.test(e)?Rb:$b:Array.isArray(e)?zb:typeof e=="object"?F_:lg}function A_(e,t,n){const r=[],o=n||P_(e[0]),a=e.length-1;for(let i=0;i<a;i++){let s=o(e[i],e[i+1]);if(t){const l=Array.isArray(t)?t[i]:t;s=Tu(l,s)}r.push(s)}return r}function Lb(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const a=e.length;Cl(a===t.length),Cl(!r||!Array.isArray(r)||r.length===a-1),e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const i=A_(t,r,o),s=i.length,l=u=>{let c=0;if(s>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=kl(e[c],e[c+1],u);return i[c](d)};return n?u=>l(Oo(e[0],e[a-1],u)):l}const jp=e=>e,Mb=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,E_=1e-7,q_=12;function R_(e,t,n,r,o){let a,i,s=0;do i=t+(n-t)/2,a=Mb(i,r,o)-e,a>0?n=i:t=i;while(Math.abs(a)>E_&&++s<q_);return i}function Vb(e,t,n,r){if(e===t&&n===r)return jp;const o=a=>R_(a,0,1,e,n);return a=>a===0||a===1?a:Mb(o(a),t,r)}const jb=e=>1-Math.sin(Math.acos(e)),Bp=Lp(jb),I_=$p(Bp),Bb=Vb(.33,1.53,.69,.99),Np=Lp(Bb),z_=$p(Np),$_=e=>(e*=2)<1?.5*Np(e):.5*(2-Math.pow(2,-10*(e-1))),L_={linear:jp,easeIn:Mp,easeInOut:Vp,easeOut:C_,circIn:jb,circInOut:I_,circOut:Bp,backIn:Np,backInOut:z_,backOut:Bb,anticipate:$_},ug=e=>{if(Array.isArray(e)){Cl(e.length===4);const[t,n,r,o]=e;return Vb(t,n,r,o)}else if(typeof e=="string")return L_[e];return e},M_=e=>Array.isArray(e)&&typeof e[0]!="number";function V_(e,t){return e.map(()=>t||Vp).splice(0,e.length-1)}function j_(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function B_(e,t){return e.map(n=>n*t)}function Tl({keyframes:e,ease:t=Vp,times:n,duration:r=300}){e=[...e];const o=Tl[0],a=M_(t)?t.map(ug):ug(t),i={done:!1,value:o},s=B_(n&&n.length===Tl.length?n:j_(e),r);function l(){return Lb(s,e,{ease:Array.isArray(a)?a:V_(e,a)})}let u=l();return{next:c=>(i.value=u(c),i.done=c>=r,i),flipTarget:()=>{e.reverse(),u=l()}}}const Ec=.001,N_=.01,cg=10,O_=.05,D_=1;function W_({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,a;x_(e<=cg*1e3);let i=1-t;i=Oo(O_,D_,i),e=Oo(N_,cg,e/1e3),i<1?(o=u=>{const c=u*i,d=c*e,f=c-n,p=zd(u,i),y=Math.exp(-d);return Ec-f/p*y},a=u=>{const d=u*i*e,f=d*n+n,p=Math.pow(i,2)*Math.pow(u,2)*e,y=Math.exp(-d),b=zd(Math.pow(u,2),i);return(-o(u)+Ec>0?-1:1)*((f-p)*y)/b}):(o=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-Ec+c*d},a=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const s=5/e,l=U_(o,a,s);if(e=e*1e3,isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:i*2*Math.sqrt(r*u),duration:e}}}const H_=12;function U_(e,t,n){let r=n;for(let o=1;o<H_;o++)r=r-e(r)/t(r);return r}function zd(e,t){return e*Math.sqrt(1-t*t)}const G_=["duration","bounce"],K_=["stiffness","damping","mass"];function dg(e,t){return t.some(n=>e[n]!==void 0)}function Y_(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!dg(e,K_)&&dg(e,G_)){const n=W_(e);t={...t,...n,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}const X_=5;function Nb({keyframes:e,restSpeed:t=2,restDelta:n=.01,...r}){let o=e[0],a=e[e.length-1];const i={done:!1,value:o},{stiffness:s,damping:l,mass:u,velocity:c,duration:d,isResolvedFromDuration:f}=Y_(r);let p=Z_,y=c?-(c/1e3):0;const b=l/(2*Math.sqrt(s*u));function x(){const m=a-o,h=Math.sqrt(s/u)/1e3;if(n===void 0&&(n=Math.min(Math.abs(a-o)/100,.4)),b<1){const g=zd(h,b);p=S=>{const P=Math.exp(-b*h*S);return a-P*((y+b*h*m)/g*Math.sin(g*S)+m*Math.cos(g*S))}}else if(b===1)p=g=>a-Math.exp(-h*g)*(m+(y+h*m)*g);else{const g=h*Math.sqrt(b*b-1);p=S=>{const P=Math.exp(-b*h*S),A=Math.min(g*S,300);return a-P*((y+b*h*m)*Math.sinh(A)+g*m*Math.cosh(A))/g}}}return x(),{next:m=>{const h=p(m);if(f)i.done=m>=d;else{let g=y;if(m!==0)if(b<1){const A=Math.max(0,m-X_);g=qp(h-p(A),m-A)}else g=0;const S=Math.abs(g)<=t,P=Math.abs(a-h)<=n;i.done=S&&P}return i.value=i.done?a:h,i},flipTarget:()=>{y=-y,[o,a]=[a,o],x()}}}Nb.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Z_=e=>0;function Q_({keyframes:e=[0],velocity:t=0,power:n=.8,timeConstant:r=350,restDelta:o=.5,modifyTarget:a}){const i=e[0],s={done:!1,value:i};let l=n*t;const u=i+l,c=a===void 0?u:a(u);return c!==u&&(l=c-i),{next:d=>{const f=-l*Math.exp(-d/r);return s.done=!(f>o||f<-o),s.value=s.done?c:c+f,s},flipTarget:()=>{}}}const J_={decay:Q_,keyframes:Tl,tween:Tl,spring:Nb};function Ob(e,t,n=0){return e-t-n}function eF(e,t=0,n=0,r=!0){return r?Ob(t+-e,t,n):t-(e-t)+n}function tF(e,t,n,r){return r?e>=t+n:e<=-n}const nF=e=>{const t=({delta:n})=>e(n);return{start:()=>ot.update(t,!0),stop:()=>ur.update(t)}};function _l({duration:e,driver:t=nF,elapsed:n=0,repeat:r=0,repeatType:o="loop",repeatDelay:a=0,keyframes:i,autoplay:s=!0,onPlay:l,onStop:u,onComplete:c,onRepeat:d,onUpdate:f,type:p="keyframes",...y}){var b,x;let m,h=0,g=e,S,P=!1,A=!0,F;const q=J_[i.length>2?"keyframes":p],L=i[0],R=i[i.length-1];!((x=(b=q).needsInterpolation)===null||x===void 0)&&x.call(b,L,R)&&(F=Lb([0,100],[L,R],{clamp:!1}),i=[0,100]);const G=q({...y,duration:e,keyframes:i});function St(){h++,o==="reverse"?(A=h%2===0,n=eF(n,g,a,A)):(n=Ob(n,g,a),o==="mirror"&&G.flipTarget()),P=!1,d&&d()}function zt(){m.stop(),c&&c()}function Kt(Le){if(A||(Le=-Le),n+=Le,!P){const Ct=G.next(Math.max(0,n));S=Ct.value,F&&(S=F(S)),P=A?Ct.done:n<=0}f&&f(S),P&&(h===0&&(g=g!==void 0?g:n),h<r?tF(n,g,a,A)&&St():zt())}function Se(){l&&l(),m=t(Kt),m.start()}return s&&Se(),{stop:()=>{u&&u(),m.stop()},sample:Le=>G.next(Math.max(0,Le))}}function rF(e){return!e||Array.isArray(e)||typeof e=="string"&&Db[e]}const Pa=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Db={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Pa([0,.65,.55,1]),circOut:Pa([.55,0,1,.45]),backIn:Pa([.31,.01,.66,-.59]),backOut:Pa([.33,1.53,.69,.99])};function oF(e){if(!!e)return Array.isArray(e)?Pa(e):Db[e]}function aF(e,t,n,{delay:r=0,duration:o,repeat:a=0,repeatType:i="loop",ease:s,times:l}={}){return e.animate({[t]:n,offset:l},{delay:r,duration:o,easing:oF(s),fill:"both",iterations:a+1,direction:i==="reverse"?"alternate":"normal"})}const ps=10;function iF(e,t,{onUpdate:n,onComplete:r,...o}){let{keyframes:a,duration:i=.3,elapsed:s=0,ease:l}=o;if(o.type==="spring"||!rF(o.ease)){const c=_l(o);let d={done:!1,value:a[0]};const f=[];let p=0;for(;!d.done;)d=c.sample(p),f.push(d.value),p+=ps;a=f,i=p-ps,l="linear"}const u=aF(e.owner.current,t,a,{...o,delay:-s,duration:i,ease:l});return u.onfinish=()=>{e.set(a[a.length-1]),r&&r()},()=>{const{currentTime:c}=u;if(c){const d=_l(o);e.setWithVelocity(d.sample(c-ps).value,d.sample(c).value,ps)}ot.update(()=>u.cancel())}}function Wb(e,t){const n=performance.now(),r=({timestamp:o})=>{const a=o-n;a>=t&&(ur.read(r),e(a-t))};return ot.read(r,!0),()=>ur.read(r)}function sF({keyframes:e,elapsed:t,onUpdate:n,onComplete:r}){const o=()=>(n&&n(e[e.length-1]),r&&r(),()=>{});return t?Wb(o,-t):o()}function lF({keyframes:e,velocity:t=0,min:n,max:r,power:o=.8,timeConstant:a=750,bounceStiffness:i=500,bounceDamping:s=10,restDelta:l=1,modifyTarget:u,driver:c,onUpdate:d,onComplete:f,onStop:p}){const y=e[0];let b;function x(S){return n!==void 0&&S<n||r!==void 0&&S>r}function m(S){return n===void 0?r:r===void 0||Math.abs(n-S)<Math.abs(r-S)?n:r}function h(S){b==null||b.stop(),b=_l({keyframes:[0,1],velocity:0,...S,driver:c,onUpdate:P=>{var A;d==null||d(P),(A=S.onUpdate)===null||A===void 0||A.call(S,P)},onComplete:f,onStop:p})}function g(S){h({type:"spring",stiffness:i,damping:s,restDelta:l,...S})}if(x(y))g({velocity:t,keyframes:[y,m(y)]});else{let S=o*t+y;typeof u<"u"&&(S=u(S));const P=m(S),A=P===n?-1:1;let F,q;const L=R=>{F=q,q=R,t=qp(R-F,En.delta),(A===1&&R>P||A===-1&&R<P)&&g({keyframes:[R,P],velocity:t})};h({type:"decay",keyframes:[y,0],velocity:t,timeConstant:a,power:o,restDelta:l,modifyTarget:u,onUpdate:x(S)?L:void 0})}return{stop:()=>b==null?void 0:b.stop()}}const wr=()=>({type:"spring",stiffness:500,damping:25,restSpeed:10}),ms=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),qc=()=>({type:"keyframes",ease:"linear",duration:.3}),uF={type:"keyframes",duration:.8},fg={x:wr,y:wr,z:wr,rotate:wr,rotateX:wr,rotateY:wr,rotateZ:wr,scaleX:ms,scaleY:ms,scale:ms,opacity:qc,backgroundColor:qc,color:qc,default:ms},cF=(e,{keyframes:t})=>t.length>2?uF:(fg[e]||fg.default)(t[1]),$d=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&cr.test(t)&&!t.startsWith("url("));function dF({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:a,repeatType:i,repeatDelay:s,from:l,...u}){return!!Object.keys(u).length}function pg(e){return e===0||typeof e=="string"&&parseFloat(e)===0&&e.indexOf(" ")===-1}function mg(e){return typeof e=="number"?0:zp("",e)}function Hb(e,t){return e[t]||e.default||e}function fF(e,t,n,r){const o=$d(t,n);let a=r.from!==void 0?r.from:e.get();return a==="none"&&o&&typeof n=="string"?a=zp(t,n):pg(a)&&typeof n=="string"?a=mg(n):!Array.isArray(n)&&pg(n)&&typeof a=="string"&&(n=mg(a)),Array.isArray(n)?(n[0]===null&&(n[0]=a),n):[a,n]}const hg={waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate")},Rc={},Ub={};for(const e in hg)Ub[e]=()=>(Rc[e]===void 0&&(Rc[e]=hg[e]()),Rc[e]);const pF=new Set(["opacity"]),Op=(e,t,n,r={})=>o=>{const a=Hb(r,e)||{},i=a.delay||r.delay||0;let{elapsed:s=0}=r;s=s-Ks(i);const l=fF(t,e,n,a),u=l[0],c=l[l.length-1],d=$d(e,u),f=$d(e,c);let p={keyframes:l,velocity:t.getVelocity(),...a,elapsed:s,onUpdate:m=>{t.set(m),a.onUpdate&&a.onUpdate(m)},onComplete:()=>{o(),a.onComplete&&a.onComplete()}};if(!d||!f||S_.current||a.type===!1)return sF(p);if(a.type==="inertia"){const m=lF(p);return()=>m.stop()}dF(a)||(p={...p,...cF(e,p)}),p.duration&&(p.duration=Ks(p.duration)),p.repeatDelay&&(p.repeatDelay=Ks(p.repeatDelay));const y=t.owner,b=y&&y.current;if(Ub.waapi()&&pF.has(e)&&!p.repeatDelay&&p.repeatType!=="mirror"&&p.damping!==0&&y&&b instanceof HTMLElement&&!y.getProps().onUpdate)return iF(t,e,p);{const m=_l(p);return()=>m.stop()}};function mF(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(a=>Ld(e,a,n));r=Promise.all(o)}else if(typeof t=="string")r=Ld(e,t,n);else{const o=typeof t=="function"?Fu(e,t,n.custom):t;r=Gb(e,o,n)}return r.then(()=>e.notify("AnimationComplete",t))}function Ld(e,t,n={}){var r;const o=Fu(e,t,n.custom);let{transition:a=e.getDefaultTransition()||{}}=o||{};n.transitionOverride&&(a=n.transitionOverride);const i=o?()=>Gb(e,o,n):()=>Promise.resolve(),s=!((r=e.variantChildren)===null||r===void 0)&&r.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=a;return hF(e,t,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=a;if(l){const[u,c]=l==="beforeChildren"?[i,s]:[s,i];return u().then(c)}else return Promise.all([i(),s(n.delay)])}function Gb(e,t,{delay:n=0,transitionOverride:r,type:o}={}){var a;let{transition:i=e.getDefaultTransition(),transitionEnd:s,...l}=e.makeTargetAnimatable(t);const u=e.getValue("willChange");r&&(i=r);const c=[],d=o&&((a=e.animationState)===null||a===void 0?void 0:a.getState()[o]);for(const f in l){const p=e.getValue(f),y=l[f];if(!p||y===void 0||d&&yF(d,f))continue;let b={delay:n,elapsed:0,...i};if(e.shouldReduceMotion&&Wr.has(f)&&(b={...b,type:!1,delay:0}),!p.hasAnimated){const m=e.getProps()[w_];m&&(b.elapsed=b_(m,f))}let x=p.start(Op(f,p,y,b));Sl(u)&&(u.add(f),x=x.then(()=>u.remove(f))),c.push(x)}return Promise.all(c).then(()=>{s&&p_(e,s)})}function hF(e,t,n=0,r=0,o=1,a){const i=[],s=(e.variantChildren.size-1)*r,l=o===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(gF).forEach((u,c)=>{i.push(Ld(u,t,{...a,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(i)}function gF(e,t){return e.sortNodePosition(t)}function yF({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}const Dp=[ie.Animate,ie.InView,ie.Focus,ie.Hover,ie.Tap,ie.Drag,ie.Exit],bF=[...Dp].reverse(),vF=Dp.length;function wF(e){return t=>Promise.all(t.map(({animation:n,options:r})=>mF(e,n,r)))}function xF(e){let t=wF(e);const n=CF();let r=!0;const o=(l,u)=>{const c=Fu(e,u);if(c){const{transition:d,transitionEnd:f,...p}=c;l={...l,...p,...f}}return l};function a(l){t=l(e)}function i(l,u){const c=e.getProps(),d=e.getVariantContext(!0)||{},f=[],p=new Set;let y={},b=1/0;for(let m=0;m<vF;m++){const h=bF[m],g=n[h],S=c[h]!==void 0?c[h]:d[h],P=di(S),A=h===u?g.isActive:null;A===!1&&(b=m);let F=S===d[h]&&S!==c[h]&&P;if(F&&r&&e.manuallyAnimateOnMount&&(F=!1),g.protectedKeys={...y},!g.isActive&&A===null||!S&&!g.prevProp||xu(S)||typeof S=="boolean")continue;const q=SF(g.prevProp,S);let L=q||h===u&&g.isActive&&!F&&P||m>b&&P;const R=Array.isArray(S)?S:[S];let G=R.reduce(o,{});A===!1&&(G={});const{prevResolvedValues:St={}}=g,zt={...St,...G},Kt=Se=>{L=!0,p.delete(Se),g.needsAnimating[Se]=!0};for(const Se in zt){const Le=G[Se],Ct=St[Se];y.hasOwnProperty(Se)||(Le!==Ct?vl(Le)&&vl(Ct)?!xb(Le,Ct)||q?Kt(Se):g.protectedKeys[Se]=!0:Le!==void 0?Kt(Se):p.add(Se):Le!==void 0&&p.has(Se)?Kt(Se):g.protectedKeys[Se]=!0)}g.prevProp=S,g.prevResolvedValues=G,g.isActive&&(y={...y,...G}),r&&e.blockInitialAnimation&&(L=!1),L&&!F&&f.push(...R.map(Se=>({animation:Se,options:{type:h,...l}})))}if(p.size){const m={};p.forEach(h=>{const g=e.getBaseTarget(h);g!==void 0&&(m[h]=g)}),f.push({animation:m})}let x=Boolean(f.length);return r&&c.initial===!1&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(f):Promise.resolve()}function s(l,u,c){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var y;return(y=p.animationState)===null||y===void 0?void 0:y.setActive(l,u)}),n[l].isActive=u;const f=i(c,l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:i,setActive:s,setAnimateFunction:a,getState:()=>n}}function SF(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!xb(t,e):!1}function xr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function CF(){return{[ie.Animate]:xr(!0),[ie.InView]:xr(),[ie.Hover]:xr(),[ie.Tap]:xr(),[ie.Drag]:xr(),[ie.Focus]:xr(),[ie.Exit]:xr()}}const kF={animation:Qn(({visualElement:e,animate:t})=>{e.animationState||(e.animationState=xF(e)),xu(t)&&v.exports.useEffect(()=>t.subscribe(e),[t])}),exit:Qn(e=>{const{custom:t,visualElement:n}=e,[r,o]=wb(),a=v.exports.useContext(Jo);v.exports.useEffect(()=>{n.isPresent=r;const i=n.animationState&&n.animationState.setActive(ie.Exit,!r,{custom:a&&a.custom||t});i&&!r&&i.then(o)},[r])})},gg=(e,t)=>Math.abs(e-t);function TF(e,t){const n=gg(e.x,t.x),r=gg(e.y,t.y);return Math.sqrt(n**2+r**2)}class Kb{constructor(t,n,{transformPagePoint:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=zc(this.lastMoveEventInfo,this.history),c=this.startEvent!==null,d=TF(u.offset,{x:0,y:0})>=3;if(!c&&!d)return;const{point:f}=u,{timestamp:p}=En;this.history.push({...f,timestamp:p});const{onStart:y,onMove:b}=this.handlers;c||(y&&y(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),b&&b(this.lastMoveEvent,u)},this.handlePointerMove=(u,c)=>{if(this.lastMoveEvent=u,this.lastMoveEventInfo=Ic(c,this.transformPagePoint),cb(u)&&u.buttons===0){this.handlePointerUp(u,c);return}ot.update(this.updatePoint,!0)},this.handlePointerUp=(u,c)=>{this.end();const{onEnd:d,onSessionEnd:f}=this.handlers,p=zc(Ic(c,this.transformPagePoint),this.history);this.startEvent&&d&&d(u,p),f&&f(u,p)},db(t)&&t.touches.length>1)return;this.handlers=n,this.transformPagePoint=r;const o=_p(t),a=Ic(o,this.transformPagePoint),{point:i}=a,{timestamp:s}=En;this.history=[{...i,timestamp:s}];const{onSessionStart:l}=n;l&&l(t,zc(a,this.history)),this.removeListeners=Tu(Eo(window,"pointermove",this.handlePointerMove),Eo(window,"pointerup",this.handlePointerUp),Eo(window,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),ur.update(this.updatePoint)}}function Ic(e,t){return t?{point:t(e.point)}:e}function yg(e,t){return{x:e.x-t.x,y:e.y-t.y}}function zc({point:e},t){return{point:e,delta:yg(e,Yb(t)),offset:yg(e,_F(t)),velocity:FF(t,.1)}}function _F(e){return e[0]}function Yb(e){return e[e.length-1]}function FF(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=Yb(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>Ks(t)));)n--;if(!r)return{x:0,y:0};const a=(o.timestamp-r.timestamp)/1e3;if(a===0)return{x:0,y:0};const i={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return i.x===1/0&&(i.x=0),i.y===1/0&&(i.y=0),i}function yt(e){return e.max-e.min}function Md(e,t=0,n=.01){return Math.abs(e-t)<=n}function bg(e,t,n,r=.5){e.origin=r,e.originPoint=xe(t.min,t.max,e.origin),e.scale=yt(n)/yt(t),(Md(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=xe(n.min,n.max,e.origin)-e.originPoint,(Md(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Wa(e,t,n,r){bg(e.x,t.x,n.x,r==null?void 0:r.originX),bg(e.y,t.y,n.y,r==null?void 0:r.originY)}function vg(e,t,n){e.min=n.min+t.min,e.max=e.min+yt(t)}function PF(e,t,n){vg(e.x,t.x,n.x),vg(e.y,t.y,n.y)}function wg(e,t,n){e.min=t.min-n.min,e.max=e.min+yt(t)}function Ha(e,t,n){wg(e.x,t.x,n.x),wg(e.y,t.y,n.y)}function AF(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?xe(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?xe(n,e,r.max):Math.min(e,n)),e}function xg(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function EF(e,{top:t,left:n,bottom:r,right:o}){return{x:xg(e.x,n,o),y:xg(e.y,t,r)}}function Sg(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function qF(e,t){return{x:Sg(e.x,t.x),y:Sg(e.y,t.y)}}function RF(e,t){let n=.5;const r=yt(e),o=yt(t);return o>r?n=kl(t.min,t.max-r,e.min):r>o&&(n=kl(e.min,e.max-o,t.min)),Oo(0,1,n)}function IF(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Vd=.35;function zF(e=Vd){return e===!1?e=0:e===!0&&(e=Vd),{x:Cg(e,"left","right"),y:Cg(e,"top","bottom")}}function Cg(e,t,n){return{min:kg(e,t),max:kg(e,n)}}function kg(e,t){return typeof e=="number"?e:e[t]||0}const Tg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ua=()=>({x:Tg(),y:Tg()}),_g=()=>({min:0,max:0}),Ae=()=>({x:_g(),y:_g()});function en(e){return[e("x"),e("y")]}function Xb({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function $F({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function LF(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function $c(e){return e===void 0||e===1}function jd({scale:e,scaleX:t,scaleY:n}){return!$c(e)||!$c(t)||!$c(n)}function Sr(e){return jd(e)||Zb(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Zb(e){return Fg(e.x)||Fg(e.y)}function Fg(e){return e&&e!=="0%"}function Fl(e,t,n){const r=e-n,o=t*r;return n+o}function Pg(e,t,n,r,o){return o!==void 0&&(e=Fl(e,o,r)),Fl(e,n,r)+t}function Bd(e,t=0,n=1,r,o){e.min=Pg(e.min,t,n,r,o),e.max=Pg(e.max,t,n,r,o)}function Qb(e,{x:t,y:n}){Bd(e.x,t.translate,t.scale,t.originPoint),Bd(e.y,n.translate,n.scale,n.originPoint)}function MF(e,t,n,r=!1){var o,a;const i=n.length;if(!i)return;t.x=t.y=1;let s,l;for(let u=0;u<i;u++)s=n[u],l=s.projectionDelta,((a=(o=s.instance)===null||o===void 0?void 0:o.style)===null||a===void 0?void 0:a.display)!=="contents"&&(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&co(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),l&&(t.x*=l.x.scale,t.y*=l.y.scale,Qb(e,l)),r&&Sr(s.latestValues)&&co(e,s.latestValues));t.x=Ag(t.x),t.y=Ag(t.y)}function Ag(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Un(e,t){e.min=e.min+t,e.max=e.max+t}function Eg(e,t,[n,r,o]){const a=t[o]!==void 0?t[o]:.5,i=xe(e.min,e.max,a);Bd(e,t[n],t[r],i,t.scale)}const VF=["x","scaleX","originX"],jF=["y","scaleY","originY"];function co(e,t){Eg(e.x,t,VF),Eg(e.y,t,jF)}function Jb(e,t){return Xb(LF(e.getBoundingClientRect(),t))}function BF(e,t,n){const r=Jb(e,n),{scroll:o}=t;return o&&(Un(r.x,o.offset.x),Un(r.y,o.offset.y)),r}const NF=new WeakMap;class OF{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ae(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){if(this.visualElement.isPresent===!1)return;const r=s=>{this.stopAnimation(),n&&this.snapToCursor(_p(s,"page").point)},o=(s,l)=>{var u;const{drag:c,dragPropagation:d,onDragStart:f}=this.getProps();c&&!d&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=hb(c),!this.openGlobalLock)||(this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),en(p=>{var y,b;let x=this.getAxisMotionValue(p).get()||0;if(dn.test(x)){const m=(b=(y=this.visualElement.projection)===null||y===void 0?void 0:y.layout)===null||b===void 0?void 0:b.layoutBox[p];m&&(x=yt(m)*(parseFloat(x)/100))}this.originPoint[p]=x}),f==null||f(s,l),(u=this.visualElement.animationState)===null||u===void 0||u.setActive(ie.Drag,!0))},a=(s,l)=>{const{dragPropagation:u,dragDirectionLock:c,onDirectionLock:d,onDrag:f}=this.getProps();if(!u&&!this.openGlobalLock)return;const{offset:p}=l;if(c&&this.currentDirection===null){this.currentDirection=DF(p),this.currentDirection!==null&&(d==null||d(this.currentDirection));return}this.updateAxis("x",l.point,p),this.updateAxis("y",l.point,p),this.visualElement.render(),f==null||f(s,l)},i=(s,l)=>this.stop(s,l);this.panSession=new Kb(t,{onSessionStart:r,onStart:o,onMove:a,onSessionEnd:i},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a==null||a(t,n)}cancel(){var t,n;this.isDragging=!1,this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!1),(t=this.panSession)===null||t===void 0||t.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),(n=this.visualElement.animationState)===null||n===void 0||n.setActive(ie.Drag,!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!hs(t,o,this.currentDirection))return;const a=this.getAxisMotionValue(t);let i=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(i=AF(i,this.constraints[t],this.elastic[t])),a.set(i)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),{layout:r}=this.visualElement.projection||{},o=this.constraints;t&&lo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=EF(r.layoutBox,t):this.constraints=!1,this.elastic=zF(n),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&en(a=>{this.getAxisMotionValue(a)&&(this.constraints[a]=IF(r.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!lo(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=BF(r,o.root,this.visualElement.getTransformPagePoint());let i=qF(o.layout.layoutBox,a);if(n){const s=n($F(i));this.hasMutatedConstraints=!!s,s&&(i=Xb(s))}return i}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:i,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},u=en(c=>{if(!hs(c,n,this.currentDirection))return;let d=(l==null?void 0:l[c])||{};i&&(d={min:0,max:0});const f=o?200:1e6,p=o?40:1e7,y={type:"inertia",velocity:r?t[c]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...a,...d};return this.startAxisValueAnimation(c,y)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Op(t,r,0,n))}stopAnimation(){en(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){var n;const r="_drag"+t.toUpperCase(),o=this.visualElement.getProps()[r];return o||this.visualElement.getValue(t,((n=this.visualElement.getProps().initial)===null||n===void 0?void 0:n[t])||0)}snapToCursor(t){en(n=>{const{drag:r}=this.getProps();if(!hs(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(n);if(o&&o.layout){const{min:i,max:s}=o.layout.layoutBox[n];a.set(t[n]-xe(i,s,.5))}})}scalePositionWithinConstraints(){var t;if(!this.visualElement.current)return;const{drag:n,dragConstraints:r}=this.getProps(),{projection:o}=this.visualElement;if(!lo(r)||!o||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};en(s=>{const l=this.getAxisMotionValue(s);if(l){const u=l.get();a[s]=RF({min:u,max:u},this.constraints[s])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",(t=o.root)===null||t===void 0||t.updateScroll(),o.updateLayout(),this.resolveConstraints(),en(s=>{if(!hs(s,n,null))return;const l=this.getAxisMotionValue(s),{min:u,max:c}=this.constraints[s];l.set(xe(u,c,a[s]))})}addListeners(){var t;if(!this.visualElement.current)return;NF.set(this.visualElement,this);const n=this.visualElement.current,r=Eo(n,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(u)}),o=()=>{const{dragConstraints:u}=this.getProps();lo(u)&&(this.constraints=this.resolveRefConstraints())},{projection:a}=this.visualElement,i=a.addEventListener("measure",o);a&&!a.layout&&((t=a.root)===null||t===void 0||t.updateScroll(),a.updateLayout()),o();const s=ku(window,"resize",()=>this.scalePositionWithinConstraints()),l=a.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(en(d=>{const f=this.getAxisMotionValue(d);!f||(this.originPoint[d]+=u[d].translate,f.set(f.get()+u[d].translate))}),this.visualElement.render())});return()=>{s(),r(),i(),l==null||l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:i=Vd,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:i,dragMomentum:s}}}function hs(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function DF(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}function WF(e){const{dragControls:t,visualElement:n}=e,r=Cu(()=>new OF(n));v.exports.useEffect(()=>t&&t.subscribe(r),[r,t]),v.exports.useEffect(()=>r.addListeners(),[r])}function HF({onPan:e,onPanStart:t,onPanEnd:n,onPanSessionStart:r,visualElement:o}){const a=e||t||n||r,i=v.exports.useRef(null),{transformPagePoint:s}=v.exports.useContext(gp),l={onSessionStart:r,onStart:t,onMove:e,onEnd:(c,d)=>{i.current=null,n&&n(c,d)}};v.exports.useEffect(()=>{i.current!==null&&i.current.updateHandlers(l)});function u(c){i.current=new Kb(c,l,{transformPagePoint:s})}wl(o,"pointerdown",a&&u),Fp(()=>i.current&&i.current.end())}const UF={pan:Qn(HF),drag:Qn(WF)};function Nd(e){return typeof e=="string"&&e.startsWith("var(--")}const ev=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function GF(e){const t=ev.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Od(e,t,n=1){const[r,o]=GF(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);return a?a.trim():Nd(o)?Od(o,t,n+1):o}function KF(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(o=>{const a=o.get();if(!Nd(a))return;const i=Od(a,r);i&&o.set(i)});for(const o in t){const a=t[o];if(!Nd(a))continue;const i=Od(a,r);!i||(t[o]=i,n&&n[o]===void 0&&(n[o]=a))}return{target:t,transitionEnd:n}}const YF=new Set(["width","height","top","left","right","bottom","x","y"]),tv=e=>YF.has(e),XF=e=>Object.keys(e).some(tv),nv=(e,t)=>{e.set(t,!1),e.set(t)},qg=e=>e===Hr||e===j;var Rg;(function(e){e.width="width",e.height="height",e.left="left",e.right="right",e.top="top",e.bottom="bottom"})(Rg||(Rg={}));const Ig=(e,t)=>parseFloat(e.split(", ")[t]),zg=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/);if(o)return Ig(o[1],t);{const a=r.match(/^matrix\((.+)\)$/);return a?Ig(a[1],e):0}},ZF=new Set(["x","y","z"]),QF=yl.filter(e=>!ZF.has(e));function JF(e){const t=[];return QF.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const $g={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:zg(4,13),y:zg(5,14)},eP=(e,t,n)=>{const r=t.measureViewportBox(),o=t.current,a=getComputedStyle(o),{display:i}=a,s={};i==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{s[u]=$g[u](r,a)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const c=t.getValue(u);nv(c,s[u]),e[u]=$g[u](l,a)}),e},tP=(e,t,n={},r={})=>{t={...t},r={...r};const o=Object.keys(t).filter(tv);let a=[],i=!1;const s=[];if(o.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let c=n[l],d=fa(c);const f=t[l];let p;if(vl(f)){const y=f.length,b=f[0]===null?1:0;c=f[b],d=fa(c);for(let x=b;x<y;x++)p?Cl(fa(f[x])===p):p=fa(f[x])}else p=fa(f);if(d!==p)if(qg(d)&&qg(p)){const y=u.get();typeof y=="string"&&u.set(parseFloat(y)),typeof f=="string"?t[l]=parseFloat(f):Array.isArray(f)&&p===j&&(t[l]=f.map(parseFloat))}else(d==null?void 0:d.transform)&&(p==null?void 0:p.transform)&&(c===0||f===0)?c===0?u.set(p.transform(c)):t[l]=d.transform(f):(i||(a=JF(e),i=!0),s.push(l),r[l]=r[l]!==void 0?r[l]:t[l],nv(u,f))}),s.length){const l=s.indexOf("height")>=0?window.pageYOffset:null,u=eP(t,e,s);return a.length&&a.forEach(([c,d])=>{e.getValue(c).set(d)}),e.render(),Dr&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function nP(e,t,n,r){return XF(t)?tP(e,t,n,r):{target:t,transitionEnd:r}}const rP=(e,t,n,r)=>{const o=KF(e,t,r);return t=o.target,r=o.transitionEnd,nP(e,t,n,r)},Dd={current:null},rv={current:!1};function oP(){if(rv.current=!0,!!Dr)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Dd.current=e.matches;e.addListener(t),t()}else Dd.current=!1}function aP(e,t,n){const{willChange:r}=t;for(const o in t){const a=t[o],i=n[o];if(mn(a))e.addValue(o,a),Sl(r)&&r.add(o);else if(mn(i))e.addValue(o,Do(a,{owner:e})),Sl(r)&&r.remove(o);else if(i!==a)if(e.hasValue(o)){const s=e.getValue(o);!s.hasAnimated&&s.set(a)}else{const s=e.getStaticValue(o);e.addValue(o,Do(s!==void 0?s:a))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const ov=Object.keys(fi),iP=ov.length,Lg=["AnimationStart","AnimationComplete","Update","Unmount","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class sP{constructor({parent:t,props:n,reducedMotionConfig:r,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.isPresent=!0,this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{!this.current||(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ot.render(this.render,!1,!0);const{latestValues:i,renderState:s}=o;this.latestValues=i,this.baseTarget={...i},this.initialValues=n.initial?{...i}:{},this.renderState=s,this.parent=t,this.props=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.isControllingVariants=Su(n),this.isVariantNode=Z1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:l,...u}=this.scrapeMotionValuesFromProps(n);for(const c in u){const d=u[c];i[c]!==void 0&&mn(d)&&(d.set(i[c],!1),Sl(l)&&l.add(c))}}scrapeMotionValuesFromProps(t){return{}}mount(t){var n;this.current=t,this.projection&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=(n=this.parent)===null||n===void 0?void 0:n.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),rv.current||oP(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Dd.current,this.parent&&this.parent.children.add(this),this.setProps(this.props)}unmount(){var t,n,r;(t=this.projection)===null||t===void 0||t.unmount(),ur.update(this.notifyUpdate),ur.render(this.render),this.valueSubscriptions.forEach(o=>o()),(n=this.removeFromVariantTree)===null||n===void 0||n.call(this),(r=this.parent)===null||r===void 0||r.children.delete(this);for(const o in this.events)this.events[o].clear();this.current=null}bindToMotionValue(t,n){const r=Wr.has(t),o=n.on("change",i=>{this.latestValues[t]=i,this.props.onUpdate&&ot.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),a()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures(t,n,r,o,a,i){const s=[];for(let l=0;l<iP;l++){const u=ov[l],{isEnabled:c,Component:d}=fi[u];c(t)&&d&&s.push(v.exports.createElement(d,{key:u,...t,visualElement:this}))}if(!this.projection&&a){this.projection=new a(o,this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:c,dragConstraints:d,layoutScroll:f}=t;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:Boolean(c)||d&&lo(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:i,layoutScroll:f})}return s}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ae()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}setProps(t){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.props=t;for(let n=0;n<Lg.length;n++){const r=Lg[n];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const o=t["on"+r];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=aP(this,this.scrapeMotionValuesFromProps(t),this.prevMotionValues)}getProps(){return this.props}getVariant(t){var n;return(n=this.props.variants)===null||n===void 0?void 0:n[t]}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){var t;return this.isVariantNode?this:(t=this.parent)===null||t===void 0?void 0:t.getClosestVariantNode()}getVariantContext(t=!1){var n,r;if(t)return(n=this.parent)===null||n===void 0?void 0:n.getVariantContext();if(!this.isControllingVariants){const a=((r=this.parent)===null||r===void 0?void 0:r.getVariantContext())||{};return this.props.initial!==void 0&&(a.initial=this.props.initial),a}const o={};for(let a=0;a<lP;a++){const i=av[a],s=this.props[i];(di(s)||s===!1)&&(o[i]=s)}return o}addVariantChild(t){var n;const r=this.getClosestVariantNode();if(r)return(n=r.variantChildren)===null||n===void 0||n.add(t),()=>r.variantChildren.delete(t)}addValue(t,n){this.hasValue(t)&&this.removeValue(t),this.values.set(t,n),this.latestValues[t]=n.get(),this.bindToMotionValue(t,n)}removeValue(t){var n;this.values.delete(t),(n=this.valueSubscriptions.get(t))===null||n===void 0||n(),this.valueSubscriptions.delete(t),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Do(n,{owner:this}),this.addValue(t,r)),r}readValue(t){return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,o=typeof r=="string"||typeof r=="object"?(n=Tp(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!mn(a)?a:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Ep),this.events[t].add(n)}notify(t,...n){var r;(r=this.events[t])===null||r===void 0||r.notify(...n)}}const av=["initial",...Dp],lP=av.length;class iv extends sP{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){var r;return(r=t.style)===null||r===void 0?void 0:r[n]}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:o},a){let i=g_(r,t||{},this);if(o&&(n&&(n=o(n)),r&&(r=o(r)),i&&(i=o(i))),a){m_(this,r,i);const s=rP(this,r,i,n);n=s.transitionEnd,r=s.target}return{transition:t,transitionEnd:n,...r}}}function uP(e){return window.getComputedStyle(e)}class cP extends iv{readValueFromInstance(t,n){if(Wr.has(n)){const r=Ip(n);return r&&r.default||0}else{const r=uP(t),o=(eb(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Jb(t,n)}build(t,n,r,o){vp(t,n,r,o.transformTemplate)}scrapeMotionValuesFromProps(t){return kp(t)}renderInstance(t,n,r,o){ab(t,n,r,o)}}class dP extends iv{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){var r;return Wr.has(n)?((r=Ip(n))===null||r===void 0?void 0:r.default)||0:(n=ib.has(n)?n:Cp(n),t.getAttribute(n))}measureInstanceViewportBox(){return Ae()}scrapeMotionValuesFromProps(t){return lb(t)}build(t,n,r,o){xp(t,n,r,this.isSVGTag,o.transformTemplate)}renderInstance(t,n,r,o){sb(t,n,r,o)}mount(t){this.isSVGTag=Sp(t.tagName),super.mount(t)}}const fP=(e,t)=>bp(e)?new dP(t,{enableHardwareAcceleration:!1}):new cP(t,{enableHardwareAcceleration:!0});function Mg(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const pa={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(j.test(e))e=parseFloat(e);else return e;const n=Mg(e,t.target.x),r=Mg(e,t.target.y);return`${n}% ${r}%`}},Vg="_$css",pP={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=e.includes("var("),a=[];o&&(e=e.replace(ev,p=>(a.push(p),Vg)));const i=cr.parse(e);if(i.length>5)return r;const s=cr.createTransformer(e),l=typeof i[0]!="number"?1:0,u=n.x.scale*t.x,c=n.y.scale*t.y;i[0+l]/=u,i[1+l]/=c;const d=xe(u,c,.5);typeof i[2+l]=="number"&&(i[2+l]/=d),typeof i[3+l]=="number"&&(i[3+l]/=d);let f=s(i);if(o){let p=0;f=f.replace(Vg,()=>{const y=a[p];return p++,y})}return f}};class mP extends Jl.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=t;Nk(gP),a&&(n.group&&n.group.add(a),r&&r.register&&o&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),Na.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:a}=this.props,i=r.projection;return i&&(i.isPresent=a,o||t.layoutDependency!==n||n===void 0?i.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?i.promote():i.relegate()||ot.postRender(()=>{var s;!((s=i.getStack())===null||s===void 0)&&s.members.length||this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),!t.currentAnimation&&t.isLead()&&this.safeToRemove())}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n!=null&&n.group&&n.group.remove(o),r!=null&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t==null||t()}render(){return null}}function hP(e){const[t,n]=wb(),r=v.exports.useContext(yp);return T(mP,{...e,layoutGroup:r,switchLayoutGroup:v.exports.useContext(Q1),isPresent:t,safeToRemove:n})}const gP={borderRadius:{...pa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:pa,borderTopRightRadius:pa,borderBottomLeftRadius:pa,borderBottomRightRadius:pa,boxShadow:pP},yP={measureLayout:hP};function bP(e,t,n={}){const r=mn(e)?e:Do(e);return r.start(Op("",r,t,n)),{stop:()=>r.stop(),isAnimating:()=>r.isAnimating()}}const sv=["TopLeft","TopRight","BottomLeft","BottomRight"],vP=sv.length,jg=e=>typeof e=="string"?parseFloat(e):e,Bg=e=>typeof e=="number"||j.test(e);function wP(e,t,n,r,o,a){o?(e.opacity=xe(0,n.opacity!==void 0?n.opacity:1,xP(r)),e.opacityExit=xe(t.opacity!==void 0?t.opacity:1,0,SP(r))):a&&(e.opacity=xe(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let i=0;i<vP;i++){const s=`border${sv[i]}Radius`;let l=Ng(t,s),u=Ng(n,s);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Bg(l)===Bg(u)?(e[s]=Math.max(xe(jg(l),jg(u),r),0),(dn.test(u)||dn.test(l))&&(e[s]+="%")):e[s]=u}(t.rotate||n.rotate)&&(e.rotate=xe(t.rotate||0,n.rotate||0,r))}function Ng(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const xP=lv(0,.5,Bp),SP=lv(.5,.95,jp);function lv(e,t,n){return r=>r<e?0:r>t?1:n(kl(e,t,r))}function Og(e,t){e.min=t.min,e.max=t.max}function Lt(e,t){Og(e.x,t.x),Og(e.y,t.y)}function Dg(e,t,n,r,o){return e-=t,e=Fl(e,1/n,r),o!==void 0&&(e=Fl(e,1/o,r)),e}function CP(e,t=0,n=1,r=.5,o,a=e,i=e){if(dn.test(t)&&(t=parseFloat(t),t=xe(i.min,i.max,t/100)-i.min),typeof t!="number")return;let s=xe(a.min,a.max,r);e===a&&(s-=t),e.min=Dg(e.min,t,n,s,o),e.max=Dg(e.max,t,n,s,o)}function Wg(e,t,[n,r,o],a,i){CP(e,t[n],t[r],t[o],t.scale,a,i)}const kP=["x","scaleX","originX"],TP=["y","scaleY","originY"];function Hg(e,t,n,r){Wg(e.x,t,kP,n==null?void 0:n.x,r==null?void 0:r.x),Wg(e.y,t,TP,n==null?void 0:n.y,r==null?void 0:r.y)}function Ug(e){return e.translate===0&&e.scale===1}function uv(e){return Ug(e.x)&&Ug(e.y)}function cv(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function Gg(e){return yt(e.x)/yt(e.y)}class _P{constructor(){this.members=[]}add(t){Pp(this.members,t),t.scheduleRender()}remove(t){if(Ap(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){var r;const o=this.lead;if(t!==o&&(this.prevLead=o,this.lead=t,t.show(),o)){o.instance&&o.scheduleRender(),t.scheduleRender(),t.resumeFrom=o,n&&(t.resumeFrom.preserveOpacity=!0),o.snapshot&&(t.snapshot=o.snapshot,t.snapshot.latestValues=o.animationValues||o.latestValues),!((r=t.root)===null||r===void 0)&&r.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:a}=t.options;a===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,o,a,i;(r=(n=t.options).onExitComplete)===null||r===void 0||r.call(n),(i=(o=t.resumingFrom)===null||o===void 0?void 0:(a=o.options).onExitComplete)===null||i===void 0||i.call(a)})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Kg(e,t,n){let r="";const o=e.x.translate/t.x,a=e.y.translate/t.y;if((o||a)&&(r=`translate3d(${o}px, ${a}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),c&&(r+=`rotateY(${c}deg) `)}const i=e.x.scale*t.x,s=e.y.scale*t.y;return(i!==1||s!==1)&&(r+=`scale(${i}, ${s})`),r||"none"}const FP=(e,t)=>e.depth-t.depth;class PP{constructor(){this.children=[],this.isDirty=!1}add(t){Pp(this.children,t),this.isDirty=!0}remove(t){Ap(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(FP),this.isDirty=!1,this.children.forEach(t)}}const Yg=["","X","Y","Z"],Xg=1e3;let AP=0;function dv({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(i,s={},l=t==null?void 0:t()){this.id=AP++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isTransformDirty=!1,this.isProjectionDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.nodes.forEach(RP),this.nodes.forEach($P),this.nodes.forEach(LP)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.elementId=i,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0,i&&this.root.registerPotentialNode(i,this);for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new PP)}addEventListener(i,s){return this.eventHandlers.has(i)||this.eventHandlers.set(i,new Ep),this.eventHandlers.get(i).add(s)}notifyListeners(i,...s){const l=this.eventHandlers.get(i);l==null||l.notify(...s)}hasListeners(i){return this.eventHandlers.has(i)}registerPotentialNode(i,s){this.potentialNodes.set(i,s)}mount(i,s=!1){var l;if(this.instance)return;this.isSVG=i instanceof SVGElement&&i.tagName!=="svg",this.instance=i;const{layoutId:u,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(i),this.root.nodes.add(this),(l=this.parent)===null||l===void 0||l.children.add(this),this.elementId&&this.root.potentialNodes.delete(this.elementId),s&&(c||u)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(i,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=Wb(p,250),Na.hasAnimatedSinceResize&&(Na.hasAnimatedSinceResize=!1,this.nodes.forEach(Qg))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&d&&(u||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:y,layout:b})=>{var x,m,h,g,S;if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const P=(m=(x=this.options.transition)!==null&&x!==void 0?x:d.getDefaultTransition())!==null&&m!==void 0?m:NP,{onLayoutAnimationStart:A,onLayoutAnimationComplete:F}=d.getProps(),q=!this.targetLayout||!cv(this.targetLayout,b)||y,L=!p&&y;if(((h=this.resumeFrom)===null||h===void 0?void 0:h.instance)||L||p&&(q||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,L);const R={...Hb(P,"layout"),onPlay:A,onComplete:F};d.shouldReduceMotion&&(R.delay=0,R.type=!1),this.startAnimation(R)}else!p&&this.animationProgress===0&&Qg(this),this.isLead()&&((S=(g=this.options).onExitComplete)===null||S===void 0||S.call(g));this.targetLayout=b})}unmount(){var i,s;this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this),(i=this.getStack())===null||i===void 0||i.remove(this),(s=this.parent)===null||s===void 0||s.children.delete(this),this.instance=void 0,ur.preRender(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){var i;return this.isAnimationBlocked||((i=this.parent)===null||i===void 0?void 0:i.isTreeAnimationBlocked())||!1}startUpdate(){var i;this.isUpdateBlocked()||(this.isUpdating=!0,(i=this.nodes)===null||i===void 0||i.forEach(MP),this.animationId++)}willUpdate(i=!0){var s,l,u;if(this.root.isUpdateBlocked()){(l=(s=this.options).onExitComplete)===null||l===void 0||l.call(s);return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const y=this.path[p];y.shouldResetTransform=!0,y.updateScroll("snapshot")}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const f=(u=this.options.visualElement)===null||u===void 0?void 0:u.getProps().transformTemplate;this.prevTransformTemplateValue=f==null?void 0:f(this.latestValues,""),this.updateSnapshot(),i&&this.notifyListeners("willUpdate")}didUpdate(){if(this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Zg);return}!this.isUpdating||(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(OP),this.potentialNodes.clear()),this.nodes.forEach(zP),this.nodes.forEach(EP),this.nodes.forEach(qP),this.clearAllSnapshots(),_c.update(),_c.preRender(),_c.render())}clearAllSnapshots(){this.nodes.forEach(IP),this.sharedNodes.forEach(VP)}scheduleUpdateProjection(){ot.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){ot.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){var i;if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ae(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox),(i=this.options.visualElement)===null||i===void 0||i.notify("LayoutMeasure",this.layout.layoutBox,s==null?void 0:s.layoutBox)}updateScroll(i="measure"){let s=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===i&&(s=!1),s&&(this.scroll={animationId:this.root.animationId,phase:i,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){var i;if(!o)return;const s=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!uv(this.projectionDelta),u=(i=this.options.visualElement)===null||i===void 0?void 0:i.getProps().transformTemplate,c=u==null?void 0:u(this.latestValues,""),d=c!==this.prevTransformTemplateValue;s&&(l||Sr(this.latestValues)||d)&&(o(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(i=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return i&&(l=this.removeTransform(l)),DP(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:i}=this.options;if(!i)return Ae();const s=i.measureViewportBox(),{scroll:l}=this.root;return l&&(Un(s.x,l.offset.x),Un(s.y,l.offset.y)),s}removeElementScroll(i){const s=Ae();Lt(s,i);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;if(u!==this.root&&c&&d.layoutScroll){if(c.isRoot){Lt(s,i);const{scroll:f}=this.root;f&&(Un(s.x,-f.offset.x),Un(s.y,-f.offset.y))}Un(s.x,c.offset.x),Un(s.y,c.offset.y)}}return s}applyTransform(i,s=!1){const l=Ae();Lt(l,i);for(let u=0;u<this.path.length;u++){const c=this.path[u];!s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&co(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Sr(c.latestValues)&&co(l,c.latestValues)}return Sr(this.latestValues)&&co(l,this.latestValues),l}removeTransform(i){var s;const l=Ae();Lt(l,i);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!c.instance||!Sr(c.latestValues))continue;jd(c.latestValues)&&c.updateSnapshot();const d=Ae(),f=c.measurePageBox();Lt(d,f),Hg(l,c.latestValues,(s=c.snapshot)===null||s===void 0?void 0:s.layoutBox,d)}return Sr(this.latestValues)&&Hg(l,this.latestValues),l}setTargetDelta(i){this.targetDelta=i,this.isProjectionDirty=!0,this.root.scheduleUpdateProjection()}setOptions(i){this.options={...this.options,...i,crossfade:i.crossfade!==void 0?i.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}resolveTargetDelta(){var i;const s=this.getLead();if(this.isProjectionDirty||(this.isProjectionDirty=s.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=s.isTransformDirty),!this.isProjectionDirty&&!this.attemptToResolveRelativeTarget)return;const{layout:l,layoutId:u}=this.options;if(!(!this.layout||!(l||u))){if(!this.targetDelta&&!this.relativeTarget){const c=this.getClosestProjectingParent();c&&c.layout?(this.relativeParent=c,this.relativeTarget=Ae(),this.relativeTargetOrigin=Ae(),Ha(this.relativeTargetOrigin,this.layout.layoutBox,c.layout.layoutBox),Lt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ae(),this.targetWithTransforms=Ae()),this.relativeTarget&&this.relativeTargetOrigin&&((i=this.relativeParent)===null||i===void 0?void 0:i.target)?PF(this.target,this.relativeTarget,this.relativeParent.target):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Lt(this.target,this.layout.layoutBox),Qb(this.target,this.targetDelta)):Lt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const c=this.getClosestProjectingParent();c&&Boolean(c.resumingFrom)===Boolean(this.resumingFrom)&&!c.options.layoutScroll&&c.target?(this.relativeParent=c,this.relativeTarget=Ae(),this.relativeTargetOrigin=Ae(),Ha(this.relativeTargetOrigin,this.target,c.target),Lt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||jd(this.parent.latestValues)||Zb(this.parent.latestValues)))return(this.parent.relativeTarget||this.parent.targetDelta)&&this.parent.layout?this.parent:this.parent.getClosestProjectingParent()}calcProjection(){var i;const{isProjectionDirty:s,isTransformDirty:l}=this;this.isProjectionDirty=this.isTransformDirty=!1;const u=this.getLead(),c=Boolean(this.resumingFrom)||this!==u;let d=!0;if(s&&(d=!1),c&&l&&(d=!1),d)return;const{layout:f,layoutId:p}=this.options;if(this.isTreeAnimating=Boolean(((i=this.parent)===null||i===void 0?void 0:i.isTreeAnimating)||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||p))return;Lt(this.layoutCorrected,this.layout.layoutBox),MF(this.layoutCorrected,this.treeScale,this.path,c);const{target:y}=u;if(!y)return;this.projectionDelta||(this.projectionDelta=Ua(),this.projectionDeltaWithTransform=Ua());const b=this.treeScale.x,x=this.treeScale.y,m=this.projectionTransform;Wa(this.projectionDelta,this.layoutCorrected,y,this.latestValues),this.projectionTransform=Kg(this.projectionDelta,this.treeScale),(this.projectionTransform!==m||this.treeScale.x!==b||this.treeScale.y!==x)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(i=!0){var s,l,u;(l=(s=this.options).scheduleRender)===null||l===void 0||l.call(s),i&&((u=this.getStack())===null||u===void 0||u.scheduleRender()),this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(i,s=!1){var l,u;const c=this.snapshot,d=(c==null?void 0:c.latestValues)||{},f={...this.latestValues},p=Ua();this.relativeTarget=this.relativeTargetOrigin=void 0,this.attemptToResolveRelativeTarget=!s;const y=Ae(),b=(c==null?void 0:c.source)!==((l=this.layout)===null||l===void 0?void 0:l.source),x=(((u=this.getStack())===null||u===void 0?void 0:u.members.length)||0)<=1,m=Boolean(b&&!x&&this.options.crossfade===!0&&!this.path.some(BP));this.animationProgress=0,this.mixTargetDelta=h=>{var g;const S=h/1e3;Jg(p.x,i.x,S),Jg(p.y,i.y,S),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&((g=this.relativeParent)===null||g===void 0?void 0:g.layout)&&(Ha(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox),jP(this.relativeTarget,this.relativeTargetOrigin,y,S)),b&&(this.animationValues=f,wP(f,d,this.latestValues,S,m,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(0)}startAnimation(i){var s,l;this.notifyListeners("animationStart"),(s=this.currentAnimation)===null||s===void 0||s.stop(),this.resumingFrom&&((l=this.resumingFrom.currentAnimation)===null||l===void 0||l.stop()),this.pendingAnimation&&(ur.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ot.update(()=>{Na.hasAnimatedSinceResize=!0,this.currentAnimation=bP(0,Xg,{...i,onUpdate:u=>{var c;this.mixTargetDelta(u),(c=i.onUpdate)===null||c===void 0||c.call(i,u)},onComplete:()=>{var u;(u=i.onComplete)===null||u===void 0||u.call(i),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){var i;this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0),(i=this.getStack())===null||i===void 0||i.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){var i;this.currentAnimation&&((i=this.mixTargetDelta)===null||i===void 0||i.call(this,Xg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const i=this.getLead();let{targetWithTransforms:s,target:l,layout:u,latestValues:c}=i;if(!(!s||!l||!u)){if(this!==i&&this.layout&&u&&fv(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Ae();const d=yt(this.layout.layoutBox.x);l.x.min=i.target.x.min,l.x.max=l.x.min+d;const f=yt(this.layout.layoutBox.y);l.y.min=i.target.y.min,l.y.max=l.y.min+f}Lt(s,l),co(s,c),Wa(this.projectionDeltaWithTransform,this.layoutCorrected,s,c)}}registerSharedNode(i,s){var l,u,c;this.sharedNodes.has(i)||this.sharedNodes.set(i,new _P),this.sharedNodes.get(i).add(s),s.promote({transition:(l=s.options.initialPromotionConfig)===null||l===void 0?void 0:l.transition,preserveFollowOpacity:(c=(u=s.options.initialPromotionConfig)===null||u===void 0?void 0:u.shouldPreserveFollowOpacity)===null||c===void 0?void 0:c.call(u,s)})}isLead(){const i=this.getStack();return i?i.lead===this:!0}getLead(){var i;const{layoutId:s}=this.options;return s?((i=this.getStack())===null||i===void 0?void 0:i.lead)||this:this}getPrevLead(){var i;const{layoutId:s}=this.options;return s?(i=this.getStack())===null||i===void 0?void 0:i.prevLead:void 0}getStack(){const{layoutId:i}=this.options;if(i)return this.root.sharedNodes.get(i)}promote({needsReset:i,transition:s,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),i&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const i=this.getStack();return i?i.relegate(this):!1}resetRotation(){const{visualElement:i}=this.options;if(!i)return;let s=!1;const{latestValues:l}=i;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(s=!0),!s)return;const u={};for(let c=0;c<Yg.length;c++){const d="rotate"+Yg[c];l[d]&&(u[d]=l[d],i.setStaticValue(d,0))}i==null||i.render();for(const c in u)i.setStaticValue(c,u[c]);i.scheduleRender()}getProjectionStyles(i={}){var s,l,u;const c={};if(!this.instance||this.isSVG)return c;if(this.isVisible)c.visibility="";else return{visibility:"hidden"};const d=(s=this.options.visualElement)===null||s===void 0?void 0:s.getProps().transformTemplate;if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Gs(i.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Gs(i.pointerEvents)||""),this.hasProjected&&!Sr(this.latestValues)&&(x.transform=d?d({},""):"none",this.hasProjected=!1),x}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=Kg(this.projectionDeltaWithTransform,this.treeScale,p),d&&(c.transform=d(p,c.transform));const{x:y,y:b}=this.projectionDelta;c.transformOrigin=`${y.origin*100}% ${b.origin*100}% 0`,f.animationValues?c.opacity=f===this?(u=(l=p.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&u!==void 0?u:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in gl){if(p[x]===void 0)continue;const{correct:m,applyTo:h}=gl[x],g=m(p[x],f);if(h){const S=h.length;for(let P=0;P<S;P++)c[h[P]]=g}else c[x]=g}return this.options.layoutId&&(c.pointerEvents=f===this?Gs(i.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(i=>{var s;return(s=i.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(Zg),this.root.sharedNodes.clear()}}}function EP(e){e.updateLayout()}function qP(e){var t,n,r;const o=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&o&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:i}=e.layout,{animationType:s}=e.options,l=o.source!==e.layout.source;s==="size"?en(p=>{const y=l?o.measuredBox[p]:o.layoutBox[p],b=yt(y);y.min=a[p].min,y.max=y.min+b}):fv(s,o.layoutBox,a)&&en(p=>{const y=l?o.measuredBox[p]:o.layoutBox[p],b=yt(a[p]);y.max=y.min+b});const u=Ua();Wa(u,a,o.layoutBox);const c=Ua();l?Wa(c,e.applyTransform(i,!0),o.measuredBox):Wa(c,a,o.layoutBox);const d=!uv(u);let f=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:y,layout:b}=p;if(y&&b){const x=Ae();Ha(x,o.layoutBox,y.layoutBox);const m=Ae();Ha(m,a,b.layoutBox),cv(x,m)||(f=!0)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:o,delta:c,layoutDelta:u,hasLayoutChanged:d,hasRelativeTargetChanged:f})}else e.isLead()&&((r=(n=e.options).onExitComplete)===null||r===void 0||r.call(n));e.options.transition=void 0}function RP(e){e.isProjectionDirty||(e.isProjectionDirty=Boolean(e.parent&&e.parent.isProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=Boolean(e.parent&&e.parent.isTransformDirty))}function IP(e){e.clearSnapshot()}function Zg(e){e.clearMeasurements()}function zP(e){const{visualElement:t}=e.options;t!=null&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Qg(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0}function $P(e){e.resolveTargetDelta()}function LP(e){e.calcProjection()}function MP(e){e.resetRotation()}function VP(e){e.removeLeadSnapshot()}function Jg(e,t,n){e.translate=xe(t.translate,0,n),e.scale=xe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function e0(e,t,n,r){e.min=xe(t.min,n.min,r),e.max=xe(t.max,n.max,r)}function jP(e,t,n,r){e0(e.x,t.x,n.x,r),e0(e.y,t.y,n.y,r)}function BP(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const NP={duration:.45,ease:[.4,0,.1,1]};function OP(e,t){let n=e.root;for(let a=e.path.length-1;a>=0;a--)if(Boolean(e.path[a].instance)){n=e.path[a];break}const o=(n&&n!==e.root?n.instance:document).querySelector(`[data-projection-id="${t}"]`);o&&e.mount(o,!0)}function t0(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function DP(e){t0(e.x),t0(e.y)}function fv(e,t,n){return e==="position"||e==="preserve-aspect"&&!Md(Gg(t),Gg(n),.2)}const WP=dv({attachResizeListener:(e,t)=>ku(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Lc={current:void 0},HP=dv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Lc.current){const e=new WP(0,{});e.mount(window),e.setOptions({layoutScroll:!0}),Lc.current=e}return Lc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>Boolean(window.getComputedStyle(e).position==="fixed")}),UP={...kF,...BT,...UF,...yP},GP=jk((e,t)=>yT(e,t,UP,fP,HP));function pv(){const e=v.exports.useRef(!1);return Ba(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function KP(){const e=pv(),[t,n]=v.exports.useState(0),r=v.exports.useCallback(()=>{e.current&&n(t+1)},[t]);return[v.exports.useCallback(()=>ot.postRender(r),[r]),t]}class YP extends v.exports.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function XP({children:e,isPresent:t}){const n=v.exports.useId(),r=v.exports.useRef(null),o=v.exports.useRef({width:0,height:0,top:0,left:0});return v.exports.useInsertionEffect(()=>{const{width:a,height:i,top:s,left:l}=o.current;if(t||!r.current||!a||!i)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${i}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),T(YP,{isPresent:t,childRef:r,sizeRef:o,children:v.exports.cloneElement(e,{ref:r})})}const Mc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:i})=>{const s=Cu(ZP),l=v.exports.useId(),u=v.exports.useMemo(()=>({id:l,initial:t,isPresent:n,custom:o,onExitComplete:c=>{s.set(c,!0);for(const d of s.values())if(!d)return;r&&r()},register:c=>(s.set(c,!1),()=>s.delete(c))}),a?void 0:[n]);return v.exports.useMemo(()=>{s.forEach((c,d)=>s.set(d,!1))},[n]),v.exports.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),i==="popLayout"&&(e=T(XP,{isPresent:n,children:e})),T(Jo.Provider,{value:u,children:e})};function ZP(){return new Map}const to=e=>e.key||"";function QP(e,t){e.forEach(n=>{const r=to(n);t.set(r,n)})}function JP(e){const t=[];return v.exports.Children.forEach(e,n=>{v.exports.isValidElement(n)&&t.push(n)}),t}const eA=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:o,presenceAffectsLayout:a=!0,mode:i="sync"})=>{o&&(i="wait",vb(!1,"Replace exitBeforeEnter with mode='wait'"));let[s]=KP();const l=v.exports.useContext(yp).forceRender;l&&(s=l);const u=pv(),c=JP(e);let d=c;const f=new Set,p=v.exports.useRef(d),y=v.exports.useRef(new Map).current,b=v.exports.useRef(!0);if(Ba(()=>{b.current=!1,QP(c,y),p.current=d}),Fp(()=>{b.current=!0,y.clear(),f.clear()}),b.current)return T(si,{children:d.map(g=>T(Mc,{isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:a,mode:i,children:g},to(g)))});d=[...d];const x=p.current.map(to),m=c.map(to),h=x.length;for(let g=0;g<h;g++){const S=x[g];m.indexOf(S)===-1&&f.add(S)}return i==="wait"&&f.size&&(d=[]),f.forEach(g=>{if(m.indexOf(g)!==-1)return;const S=y.get(g);if(!S)return;const P=x.indexOf(g),A=()=>{y.delete(g),f.delete(g);const F=p.current.findIndex(q=>q.key===g);if(p.current.splice(F,1),!f.size){if(p.current=c,u.current===!1)return;s(),r&&r()}};d.splice(P,0,T(Mc,{isPresent:!1,onExitComplete:A,custom:t,presenceAffectsLayout:a,mode:i,children:S},to(S)))}),d=d.map(g=>{const S=g.key;return f.has(S)?g:T(Mc,{isPresent:!0,presenceAffectsLayout:a,mode:i,children:g},to(g))}),bb!=="production"&&i==="wait"&&d.length>1&&console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`),T(si,{children:f.size?d:d.map(g=>v.exports.cloneElement(g))})},tA=(e,t)=>e.find(n=>n.id===t);function n0(e,t){const n=mv(e,t),r=n?e[n].findIndex(o=>o.id===t):-1;return{position:n,index:r}}function mv(e,t){for(const[n,r]of Object.entries(e))if(tA(r,t))return n}function nA(e){const t=e.includes("right"),n=e.includes("left");let r="center";return t&&(r="flex-end"),n&&(r="flex-start"),{display:"flex",flexDirection:"column",alignItems:r}}function rA(e){const n=e==="top"||e==="bottom"?"0 auto":void 0,r=e.includes("top")?"env(safe-area-inset-top, 0px)":void 0,o=e.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,a=e.includes("left")?void 0:"env(safe-area-inset-right, 0px)",i=e.includes("right")?void 0:"env(safe-area-inset-left, 0px)";return{position:"fixed",zIndex:"var(--toast-z-index, 5500)",pointerEvents:"none",display:"flex",flexDirection:"column",margin:n,top:r,bottom:o,right:a,left:i}}var oA=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,aA=z1(function(e){return oA.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),iA=!1,sA=aA,lA=function(t){return t!=="theme"},r0=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?sA:lA},o0=function(t,n,r){var o;if(n){var a=n.shouldForwardProp;o=t.__emotion_forwardProp&&a?function(i){return t.__emotion_forwardProp(i)&&a(i)}:a}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},uA=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return up(n,r,o),D1(function(){return cp(n,r,o)}),null},cA=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,a,i;n!==void 0&&(a=n.label,i=n.target);var s=o0(t,n,r),l=s||r0(o),u=!l("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push("label:"+a+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{var f=c[0];d.push(f[0]);for(var p=c.length,y=1;y<p;y++)d.push(c[y],f[y])}var b=fp(function(x,m,h){var g=u&&x.as||o,S="",P=[],A=x;if(x.theme==null){A={};for(var F in x)A[F]=x[F];A.theme=v.exports.useContext(No)}typeof x.className=="string"?S=B1(m.registered,P,x.className):x.className!=null&&(S=x.className+" ");var q=bu(d.concat(P),m.registered,A);S+=m.key+"-"+q.name,i!==void 0&&(S+=" "+i);var L=u&&s===void 0?r0(g):l,R={};for(var G in x)u&&G==="as"||L(G)&&(R[G]=x[G]);return R.className=S,h&&(R.ref=h),K(si,{children:[T(uA,{cache:m,serialized:q,isStringTag:typeof g=="string"}),T(g,{...R})]})});return b.displayName=a!==void 0?a:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",b.defaultProps=t.defaultProps,b.__emotion_real=b,b.__emotion_base=o,b.__emotion_styles=d,b.__emotion_forwardProp=s,Object.defineProperty(b,"toString",{value:function(){return i===void 0&&iA?"NO_COMPONENT_SELECTOR":"."+i}}),b.withComponent=function(x,m){var h=e(x,hl({},n,m,{shouldForwardProp:o0(b,m,!0)}));return h.apply(void 0,d)},b}},dA=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Wd=cA.bind(null);dA.forEach(function(e){Wd[e]=Wd(e)});const fA=new Set([...k9,"textStyle","layerStyle","apply","noOfLines","focusBorderColor","errorBorderColor","as","__css","css","sx"]),pA=new Set(["htmlWidth","htmlHeight","htmlSize","htmlTranslate"]);function mA(e){return(pA.has(e)||!fA.has(e))&&e[0]!=="_"}const hA=V5(Wd),gA=({baseStyle:e})=>t=>{const{theme:n,css:r,__css:o,sx:a,...i}=t,[s]=N5(i,_9),l=sn(e,t),u=p5({},o,l,e1(s),a),c=s1(u)(t.theme);return r?[c,r]:c};function Vc(e,t){const{baseStyle:n,...r}=t!=null?t:{};r.shouldForwardProp||(r.shouldForwardProp=mA);const o=gA({baseStyle:n}),a=hA(e,r)(o);return v.exports.forwardRef(function(l,u){const{children:c,...d}=l,{colorMode:f,forced:p}=hp(),y=p?f:void 0;return v.exports.createElement(a,{ref:u,"data-theme":y,...d},c)})}function yA(){const e=new Map;return new Proxy(Vc,{apply(t,n,r){return Vc(...r)},get(t,n){return e.has(n)||e.set(n,Vc(n)),e.get(n)}})}const H=yA(),bA={initial:e=>{const{position:t}=e,n=["top","bottom"].includes(t)?"y":"x";let r=["top-right","bottom-right"].includes(t)?1:-1;return t==="bottom"&&(r=1),{opacity:0,[n]:r*24}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},hv=v.exports.memo(e=>{const{id:t,message:n,onCloseComplete:r,onRequestRemove:o,requestClose:a=!1,position:i="bottom",duration:s=5e3,containerStyle:l,motionVariants:u=bA,toastSpacing:c="0.5rem"}=e,[d,f]=v.exports.useState(s),p=NT();Th(()=>{p||r==null||r()},[p]),Th(()=>{f(s)},[s]);const y=()=>f(null),b=()=>f(s),x=()=>{p&&o()};v.exports.useEffect(()=>{p&&a&&o()},[p,a,o]),H5(x,d);const m=v.exports.useMemo(()=>({pointerEvents:"auto",maxWidth:560,minWidth:300,margin:c,...l}),[l,c]),h=v.exports.useMemo(()=>nA(i),[i]);return T(GP.div,{layout:!0,className:"chakra-toast",variants:u,initial:"initial",animate:"animate",exit:"exit",onHoverStart:y,onHoverEnd:b,custom:{position:i},style:h,children:T(H.div,{role:"status","aria-atomic":"true",className:"chakra-toast__inner",__css:m,children:sn(n,{id:t,onClose:x})})})});hv.displayName="ToastComponent";function X(e){return v.exports.forwardRef(e)}var vA=typeof Element<"u",wA=typeof Map=="function",xA=typeof Set=="function",SA=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ys(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Ys(e[r],t[r]))return!1;return!0}var a;if(wA&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;for(a=e.entries();!(r=a.next()).done;)if(!Ys(r.value[1],t.get(r.value[0])))return!1;return!0}if(xA&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(SA&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(vA&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!Ys(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}var CA=function(t,n){try{return Ys(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};function gv(){const e=v.exports.useContext(No);if(!e)throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");return e}function kA(){const e=hp(),t=gv();return{...e,theme:t}}function TA(e,t,n){var o,a;if(t==null)return t;const r=i=>{var s,l;return(l=(s=e.__breakpoints)==null?void 0:s.asArray)==null?void 0:l[i]};return(a=(o=r(t))!=null?o:r(n))!=null?a:n}function _A(e,t,n){var o,a;if(t==null)return t;const r=i=>{var s,l;return(l=(s=e.__cssMap)==null?void 0:s[i])==null?void 0:l.value};return(a=(o=r(t))!=null?o:r(n))!=null?a:n}function FA(e,t,n){const r=Array.isArray(t)?t:[t],o=Array.isArray(n)?n:[n];return a=>{const i=o.filter(Boolean),s=r.map((l,u)=>{var d,f;if(e==="breakpoints")return TA(a,l,(d=i[u])!=null?d:l);const c=`${e}.${l}`;return _A(a,c,(f=i[u])!=null?f:l)});return Array.isArray(t)?s:s[0]}}function PA(e){return Object.fromEntries(Object.entries(e).filter(([t,n])=>n!==void 0&&t!=="children"&&!v.exports.isValidElement(n)))}function yv(e,t={}){var c;const{styleConfig:n,...r}=t,{theme:o,colorMode:a}=kA(),i=e?t1(o,`components.${e}`):void 0,s=n||i,l=ln({theme:o,colorMode:a},(c=s==null?void 0:s.defaultProps)!=null?c:{},PA(r),(d,f)=>d?void 0:f),u=v.exports.useRef({});if(s){const f=L9(s)(l);CA(u.current,f)||(u.current=f)}return u.current}function Ur(e,t={}){return yv(e,t)}function ji(e,t={}){return yv(e,t)}const a0={path:K("g",{stroke:"currentColor",strokeWidth:"1.5",children:[T("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),T("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),T("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]}),viewBox:"0 0 24 24"},jn=X((e,t)=>{const{as:n,viewBox:r,color:o="currentColor",focusable:a=!1,children:i,className:s,__css:l,...u}=e,c=Ue("chakra-icon",s),d=Ur("Icon",e),f={w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:o,...l,...d},p={ref:t,focusable:a,className:c,__css:f},y=r!=null?r:a0.viewBox;if(n&&typeof n!="string")return T(H.svg,{as:n,...p,...u});const b=i!=null?i:a0.path;return T(H.svg,{verticalAlign:"middle",viewBox:y,...p,...u,children:b})});jn.displayName="Icon";function AA(e){return T(jn,{viewBox:"0 0 24 24",...e,children:T("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})})}function EA(e){return T(jn,{viewBox:"0 0 24 24",...e,children:T("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})})}function i0(e){return T(jn,{viewBox:"0 0 24 24",...e,children:T("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}const qA=fk({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),Wp=X((e,t)=>{const n=Ur("Spinner",e),{label:r="Loading...",thickness:o="2px",speed:a="0.45s",emptyColor:i="transparent",className:s,...l}=Gt(e),u=Ue("chakra-spinner",s),c={display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:o,borderBottomColor:i,borderLeftColor:i,animation:`${qA} ${a} linear infinite`,...n};return T(H.div,{ref:t,__css:c,className:u,...l,children:r&&T(H.span,{srOnly:!0,children:r})})});Wp.displayName="Spinner";const[RA,Hp]=Ut({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[IA,Up]=Ut({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),bv={info:{icon:EA,colorScheme:"blue"},warning:{icon:i0,colorScheme:"orange"},success:{icon:AA,colorScheme:"green"},error:{icon:i0,colorScheme:"red"},loading:{icon:Wp,colorScheme:"blue"}};function zA(e){return bv[e].colorScheme}function $A(e){return bv[e].icon}const vv=X(function(t,n){var u;const{status:r="info",addRole:o=!0,...a}=Gt(t),i=(u=t.colorScheme)!=null?u:zA(r),s=ji("Alert",{...t,colorScheme:i}),l={width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",...s.container};return T(RA,{value:{status:r},children:T(IA,{value:s,children:T(H.div,{"data-status":r,role:o?"alert":void 0,ref:n,...a,className:Ue("chakra-alert",t.className),__css:l})})})});vv.displayName="Alert";function wv(e){const{status:t}=Hp(),n=$A(t),r=Up(),o=t==="loading"?r.spinner:r.icon;return T(H.span,{display:"inherit","data-status":t,...e,className:Ue("chakra-alert__icon",e.className),__css:o,children:e.children||T(n,{h:"100%",w:"100%"})})}wv.displayName="AlertIcon";const xv=X(function(t,n){const r=Up(),{status:o}=Hp();return T(H.div,{ref:n,"data-status":o,...t,className:Ue("chakra-alert__title",t.className),__css:r.title})});xv.displayName="AlertTitle";const Sv=X(function(t,n){const{status:r}=Hp(),o=Up(),a={display:"inline",...o.description};return T(H.div,{ref:n,"data-status":r,...t,className:Ue("chakra-alert__desc",t.className),__css:a})});Sv.displayName="AlertDescription";function LA(e){return T(jn,{focusable:"false","aria-hidden":!0,...e,children:T("path",{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"})})}const Cv=X(function(t,n){const r=Ur("CloseButton",t),{children:o,isDisabled:a,__css:i,...s}=Gt(t),l={outline:0,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0};return T(H.button,{type:"button","aria-label":"Close",ref:n,disabled:a,__css:{...l,...r,...i},...s,children:o||T(LA,{width:"1em",height:"1em"})})});Cv.displayName="CloseButton";const MA=e=>{const{status:t,variant:n="solid",id:r,title:o,isClosable:a,onClose:i,description:s,colorScheme:l,icon:u}=e,c=r?{root:`toast-${r}`,title:`toast-${r}-title`,description:`toast-${r}-description`}:void 0;return K(vv,{addRole:!1,status:t,variant:n,id:c==null?void 0:c.root,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto",colorScheme:l,children:[T(wv,{children:u}),K(H.div,{flex:"1",maxWidth:"100%",children:[o&&T(xv,{id:c==null?void 0:c.title,children:o}),s&&T(Sv,{id:c==null?void 0:c.description,display:"block",children:s})]}),a&&T(Cv,{size:"sm",onClick:i,position:"absolute",insetEnd:1,top:1})]})};function VA(e={}){const{render:t,toastComponent:n=MA}=e;return o=>typeof t=="function"?t({...o,...e}):T(n,{...o,...e})}const jA={top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]},Ga=BA(jA);function BA(e){let t=e;const n=new Set,r=o=>{t=o(t),n.forEach(a=>a())};return{getState:()=>t,subscribe:o=>(n.add(o),()=>{r(()=>e),n.delete(o)}),removeToast:(o,a)=>{r(i=>({...i,[a]:i[a].filter(s=>s.id!=o)}))},notify:(o,a)=>{const i=NA(o,a),{position:s,id:l}=i;return r(u=>{var f,p;const d=s.includes("top")?[i,...(f=u[s])!=null?f:[]]:[...(p=u[s])!=null?p:[],i];return{...u,[s]:d}}),l},update:(o,a)=>{!o||r(i=>{const s={...i},{position:l,index:u}=n0(s,o);return l&&u!==-1&&(s[l][u]={...s[l][u],...a,message:VA(a)}),s})},closeAll:({positions:o}={})=>{r(a=>{const i=["bottom","bottom-right","bottom-left","top","top-left","top-right"];return(o!=null?o:i).reduce((l,u)=>(l[u]=a[u].map(c=>({...c,requestClose:!0})),l),{...a})})},close:o=>{r(a=>{const i=mv(a,o);return i?{...a,[i]:a[i].map(s=>s.id==o?{...s,requestClose:!0}:s)}:a})},isActive:o=>Boolean(n0(Ga.getState(),o).position)}}let s0=0;function NA(e,t={}){var o,a;s0+=1;const n=(o=t.id)!=null?o:s0,r=(a=t.position)!=null?a:"bottom";return{id:n,message:e,position:r,duration:t.duration,onCloseComplete:t.onCloseComplete,onRequestRemove:()=>Ga.removeToast(String(n),r),status:t.status,requestClose:!1,containerStyle:t.containerStyle}}var Pu={exports:{}},wt={},kv={exports:{}},Tv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,B){var N=z.length;z.push(B);e:for(;0<N;){var he=N-1>>>1,Te=z[he];if(0<o(Te,B))z[he]=B,z[N]=Te,N=he;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var B=z[0],N=z.pop();if(N!==B){z[0]=N;e:for(var he=0,Te=z.length,ne=Te>>>1;he<ne;){var Yt=2*(he+1)-1,ra=z[Yt],ut=Yt+1,gr=z[ut];if(0>o(ra,N))ut<Te&&0>o(gr,ra)?(z[he]=gr,z[ut]=N,he=ut):(z[he]=ra,z[Yt]=N,he=Yt);else if(ut<Te&&0>o(gr,N))z[he]=gr,z[ut]=N,he=ut;else break e}}return B}function o(z,B){var N=z.sortIndex-B.sortIndex;return N!==0?N:z.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],u=[],c=1,d=null,f=3,p=!1,y=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(z){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=z)r(u),B.sortIndex=B.expirationTime,t(l,B);else break;B=n(u)}}function S(z){if(b=!1,g(z),!y)if(n(l)!==null)y=!0,Le(P);else{var B=n(u);B!==null&&Ct(S,B.startTime-z)}}function P(z,B){y=!1,b&&(b=!1,m(q),q=-1),p=!0;var N=f;try{for(g(B),d=n(l);d!==null&&(!(d.expirationTime>B)||z&&!G());){var he=d.callback;if(typeof he=="function"){d.callback=null,f=d.priorityLevel;var Te=he(d.expirationTime<=B);B=e.unstable_now(),typeof Te=="function"?d.callback=Te:d===n(l)&&r(l),g(B)}else r(l);d=n(l)}if(d!==null)var ne=!0;else{var Yt=n(u);Yt!==null&&Ct(S,Yt.startTime-B),ne=!1}return ne}finally{d=null,f=N,p=!1}}var A=!1,F=null,q=-1,L=5,R=-1;function G(){return!(e.unstable_now()-R<L)}function St(){if(F!==null){var z=e.unstable_now();R=z;var B=!0;try{B=F(!0,z)}finally{B?zt():(A=!1,F=null)}}else A=!1}var zt;if(typeof h=="function")zt=function(){h(St)};else if(typeof MessageChannel<"u"){var Kt=new MessageChannel,Se=Kt.port2;Kt.port1.onmessage=St,zt=function(){Se.postMessage(null)}}else zt=function(){x(St,0)};function Le(z){F=z,A||(A=!0,zt())}function Ct(z,B){q=x(function(){z(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){y||p||(y=!0,Le(P))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(z){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var N=f;f=B;try{return z()}finally{f=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,B){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var N=f;f=z;try{return B()}finally{f=N}},e.unstable_scheduleCallback=function(z,B,N){var he=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?he+N:he):N=he,z){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=N+Te,z={id:c++,callback:B,priorityLevel:z,startTime:N,expirationTime:Te,sortIndex:-1},N>he?(z.sortIndex=N,t(u,z),n(l)===null&&z===n(u)&&(b?(m(q),q=-1):b=!0,Ct(S,N-he))):(z.sortIndex=Te,t(l,z),y||p||(y=!0,Le(P))),z},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(z){var B=f;return function(){var N=f;f=B;try{return z.apply(this,arguments)}finally{f=N}}}})(Tv);(function(e){e.exports=Tv})(kv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OA=v.exports,bt=kv.exports;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _v=new Set,hi={};function Gr(e,t){Wo(e,t),Wo(e+"Capture",t)}function Wo(e,t){for(hi[e]=t,e=0;e<t.length;e++)_v.add(t[e])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hd=Object.prototype.hasOwnProperty,DA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,l0={},u0={};function WA(e){return Hd.call(u0,e)?!0:Hd.call(l0,e)?!1:DA.test(e)?u0[e]=!0:(l0[e]=!0,!1)}function HA(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function UA(e,t,n,r){if(t===null||typeof t>"u"||HA(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gp=/[\-:]([a-z])/g;function Kp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gp,Kp);Be[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gp,Kp);Be[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gp,Kp);Be[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yp(e,t,n,r){var o=Be.hasOwnProperty(t)?Be[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(UA(t,n,o,r)&&(n=null),r||o===null?WA(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bn=OA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gs=Symbol.for("react.element"),fo=Symbol.for("react.portal"),po=Symbol.for("react.fragment"),Xp=Symbol.for("react.strict_mode"),Ud=Symbol.for("react.profiler"),Fv=Symbol.for("react.provider"),Pv=Symbol.for("react.context"),Zp=Symbol.for("react.forward_ref"),Gd=Symbol.for("react.suspense"),Kd=Symbol.for("react.suspense_list"),Qp=Symbol.for("react.memo"),Gn=Symbol.for("react.lazy"),Av=Symbol.for("react.offscreen"),c0=Symbol.iterator;function ma(e){return e===null||typeof e!="object"?null:(e=c0&&e[c0]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,jc;function Aa(e){if(jc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);jc=t&&t[1]||""}return`
`+jc+e}var Bc=!1;function Nc(e,t){if(!e||Bc)return"";Bc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,s=a.length-1;1<=i&&0<=s&&o[i]!==a[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==a[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==a[s]){var l=`
`+o[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{Bc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Aa(e):""}function GA(e){switch(e.tag){case 5:return Aa(e.type);case 16:return Aa("Lazy");case 13:return Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 2:case 15:return e=Nc(e.type,!1),e;case 11:return e=Nc(e.type.render,!1),e;case 1:return e=Nc(e.type,!0),e;default:return""}}function Yd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case po:return"Fragment";case fo:return"Portal";case Ud:return"Profiler";case Xp:return"StrictMode";case Gd:return"Suspense";case Kd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pv:return(e.displayName||"Context")+".Consumer";case Fv:return(e._context.displayName||"Context")+".Provider";case Zp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qp:return t=e.displayName||null,t!==null?t:Yd(e.type)||"Memo";case Gn:t=e._payload,e=e._init;try{return Yd(e(t))}catch{}}return null}function KA(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yd(t);case 8:return t===Xp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ev(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function YA(e){var t=Ev(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ys(e){e._valueTracker||(e._valueTracker=YA(e))}function qv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ev(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xd(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function d0(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rv(e,t){t=t.checked,t!=null&&Yp(e,"checked",t,!1)}function Zd(e,t){Rv(e,t);var n=dr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Qd(e,t.type,n):t.hasOwnProperty("defaultValue")&&Qd(e,t.type,dr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function f0(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Qd(e,t,n){(t!=="number"||Pl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ea=Array.isArray;function qo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dr(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Jd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function p0(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Ea(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dr(n)}}function Iv(e,t){var n=dr(t.value),r=dr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function m0(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ef(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bs,$v=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bs=bs||document.createElement("div"),bs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ka={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},XA=["Webkit","ms","Moz","O"];Object.keys(Ka).forEach(function(e){XA.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ka[t]=Ka[e]})});function Lv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ka.hasOwnProperty(e)&&Ka[e]?(""+t).trim():t+"px"}function Mv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Lv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var ZA=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tf(e,t){if(t){if(ZA[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function nf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rf=null;function Jp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var of=null,Ro=null,Io=null;function h0(e){if(e=Oi(e)){if(typeof of!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Iu(t),of(e.stateNode,e.type,t))}}function Vv(e){Ro?Io?Io.push(e):Io=[e]:Ro=e}function jv(){if(Ro){var e=Ro,t=Io;if(Io=Ro=null,h0(e),t)for(e=0;e<t.length;e++)h0(t[e])}}function Bv(e,t){return e(t)}function Nv(){}var Oc=!1;function Ov(e,t,n){if(Oc)return e(t,n);Oc=!0;try{return Bv(e,t,n)}finally{Oc=!1,(Ro!==null||Io!==null)&&(Nv(),jv())}}function yi(e,t){var n=e.stateNode;if(n===null)return null;var r=Iu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var af=!1;if(zn)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){af=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{af=!1}function QA(e,t,n,r,o,a,i,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ya=!1,Al=null,El=!1,sf=null,JA={onError:function(e){Ya=!0,Al=e}};function eE(e,t,n,r,o,a,i,s,l){Ya=!1,Al=null,QA.apply(JA,arguments)}function tE(e,t,n,r,o,a,i,s,l){if(eE.apply(this,arguments),Ya){if(Ya){var u=Al;Ya=!1,Al=null}else throw Error(E(198));El||(El=!0,sf=u)}}function Kr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Dv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g0(e){if(Kr(e)!==e)throw Error(E(188))}function nE(e){var t=e.alternate;if(!t){if(t=Kr(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return g0(o),e;if(a===r)return g0(o),t;a=a.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=a;break}if(s===r){i=!0,r=o,n=a;break}s=s.sibling}if(!i){for(s=a.child;s;){if(s===n){i=!0,n=a,r=o;break}if(s===r){i=!0,r=a,n=o;break}s=s.sibling}if(!i)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Wv(e){return e=nE(e),e!==null?Hv(e):null}function Hv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hv(e);if(t!==null)return t;e=e.sibling}return null}var Uv=bt.unstable_scheduleCallback,y0=bt.unstable_cancelCallback,rE=bt.unstable_shouldYield,oE=bt.unstable_requestPaint,Ce=bt.unstable_now,aE=bt.unstable_getCurrentPriorityLevel,em=bt.unstable_ImmediatePriority,Gv=bt.unstable_UserBlockingPriority,ql=bt.unstable_NormalPriority,iE=bt.unstable_LowPriority,Kv=bt.unstable_IdlePriority,Au=null,fn=null;function sE(e){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(Au,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:cE,lE=Math.log,uE=Math.LN2;function cE(e){return e>>>=0,e===0?32:31-(lE(e)/uE|0)|0}var vs=64,ws=4194304;function qa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Rl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=qa(s):(a&=i,a!==0&&(r=qa(a)))}else i=n&~o,i!==0?r=qa(i):a!==0&&(r=qa(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),o=1<<n,r|=e[n],t&=~o;return r}function dE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-Ot(a),s=1<<i,l=o[i];l===-1?((s&n)===0||(s&r)!==0)&&(o[i]=dE(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function lf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yv(){var e=vs;return vs<<=1,(vs&4194240)===0&&(vs=64),e}function Dc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function pE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ot(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function tm(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var re=0;function Xv(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Zv,nm,Qv,Jv,e2,uf=!1,xs=[],tr=null,nr=null,rr=null,bi=new Map,vi=new Map,Xn=[],mE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function b0(e,t){switch(e){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(t.pointerId)}}function ga(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Oi(t),t!==null&&nm(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function hE(e,t,n,r,o){switch(t){case"focusin":return tr=ga(tr,e,t,n,r,o),!0;case"dragenter":return nr=ga(nr,e,t,n,r,o),!0;case"mouseover":return rr=ga(rr,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return bi.set(a,ga(bi.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,vi.set(a,ga(vi.get(a)||null,e,t,n,r,o)),!0}return!1}function t2(e){var t=Pr(e.target);if(t!==null){var n=Kr(t);if(n!==null){if(t=n.tag,t===13){if(t=Dv(n),t!==null){e.blockedOn=t,e2(e.priority,function(){Qv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=cf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rf=r,n.target.dispatchEvent(r),rf=null}else return t=Oi(n),t!==null&&nm(t),e.blockedOn=n,!1;t.shift()}return!0}function v0(e,t,n){Xs(e)&&n.delete(t)}function gE(){uf=!1,tr!==null&&Xs(tr)&&(tr=null),nr!==null&&Xs(nr)&&(nr=null),rr!==null&&Xs(rr)&&(rr=null),bi.forEach(v0),vi.forEach(v0)}function ya(e,t){e.blockedOn===t&&(e.blockedOn=null,uf||(uf=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,gE)))}function wi(e){function t(o){return ya(o,e)}if(0<xs.length){ya(xs[0],e);for(var n=1;n<xs.length;n++){var r=xs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(tr!==null&&ya(tr,e),nr!==null&&ya(nr,e),rr!==null&&ya(rr,e),bi.forEach(t),vi.forEach(t),n=0;n<Xn.length;n++)r=Xn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)t2(n),n.blockedOn===null&&Xn.shift()}var zo=Bn.ReactCurrentBatchConfig,Il=!0;function yE(e,t,n,r){var o=re,a=zo.transition;zo.transition=null;try{re=1,rm(e,t,n,r)}finally{re=o,zo.transition=a}}function bE(e,t,n,r){var o=re,a=zo.transition;zo.transition=null;try{re=4,rm(e,t,n,r)}finally{re=o,zo.transition=a}}function rm(e,t,n,r){if(Il){var o=cf(e,t,n,r);if(o===null)Jc(e,t,r,zl,n),b0(e,r);else if(hE(o,e,t,n,r))r.stopPropagation();else if(b0(e,r),t&4&&-1<mE.indexOf(e)){for(;o!==null;){var a=Oi(o);if(a!==null&&Zv(a),a=cf(e,t,n,r),a===null&&Jc(e,t,r,zl,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else Jc(e,t,r,null,n)}}var zl=null;function cf(e,t,n,r){if(zl=null,e=Jp(r),e=Pr(e),e!==null)if(t=Kr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Dv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zl=e,null}function n2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aE()){case em:return 1;case Gv:return 4;case ql:case iE:return 16;case Kv:return 536870912;default:return 16}default:return 16}}var Jn=null,om=null,Zs=null;function r2(){if(Zs)return Zs;var e,t=om,n=t.length,r,o="value"in Jn?Jn.value:Jn.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return Zs=o.slice(e,1<r?1-r:void 0)}function Qs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ss(){return!0}function w0(){return!1}function xt(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ss:w0,this.isPropagationStopped=w0,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ss)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ss)},persist:function(){},isPersistent:Ss}),t}var ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},am=xt(ea),Ni=ve({},ea,{view:0,detail:0}),vE=xt(Ni),Wc,Hc,ba,Eu=ve({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:im,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ba&&(ba&&e.type==="mousemove"?(Wc=e.screenX-ba.screenX,Hc=e.screenY-ba.screenY):Hc=Wc=0,ba=e),Wc)},movementY:function(e){return"movementY"in e?e.movementY:Hc}}),x0=xt(Eu),wE=ve({},Eu,{dataTransfer:0}),xE=xt(wE),SE=ve({},Ni,{relatedTarget:0}),Uc=xt(SE),CE=ve({},ea,{animationName:0,elapsedTime:0,pseudoElement:0}),kE=xt(CE),TE=ve({},ea,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_E=xt(TE),FE=ve({},ea,{data:0}),S0=xt(FE),PE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},EE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=EE[e])?!!t[e]:!1}function im(){return qE}var RE=ve({},Ni,{key:function(e){if(e.key){var t=PE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?AE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:im,charCode:function(e){return e.type==="keypress"?Qs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),IE=xt(RE),zE=ve({},Eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),C0=xt(zE),$E=ve({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:im}),LE=xt($E),ME=ve({},ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),VE=xt(ME),jE=ve({},Eu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),BE=xt(jE),NE=[9,13,27,32],sm=zn&&"CompositionEvent"in window,Xa=null;zn&&"documentMode"in document&&(Xa=document.documentMode);var OE=zn&&"TextEvent"in window&&!Xa,o2=zn&&(!sm||Xa&&8<Xa&&11>=Xa),k0=String.fromCharCode(32),T0=!1;function a2(e,t){switch(e){case"keyup":return NE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function i2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mo=!1;function DE(e,t){switch(e){case"compositionend":return i2(t);case"keypress":return t.which!==32?null:(T0=!0,k0);case"textInput":return e=t.data,e===k0&&T0?null:e;default:return null}}function WE(e,t){if(mo)return e==="compositionend"||!sm&&a2(e,t)?(e=r2(),Zs=om=Jn=null,mo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return o2&&t.locale!=="ko"?null:t.data;default:return null}}var HE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!HE[e.type]:t==="textarea"}function s2(e,t,n,r){Vv(r),t=$l(t,"onChange"),0<t.length&&(n=new am("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Za=null,xi=null;function UE(e){b2(e,0)}function qu(e){var t=yo(e);if(qv(t))return e}function GE(e,t){if(e==="change")return t}var l2=!1;if(zn){var Gc;if(zn){var Kc="oninput"in document;if(!Kc){var F0=document.createElement("div");F0.setAttribute("oninput","return;"),Kc=typeof F0.oninput=="function"}Gc=Kc}else Gc=!1;l2=Gc&&(!document.documentMode||9<document.documentMode)}function P0(){Za&&(Za.detachEvent("onpropertychange",u2),xi=Za=null)}function u2(e){if(e.propertyName==="value"&&qu(xi)){var t=[];s2(t,xi,e,Jp(e)),Ov(UE,t)}}function KE(e,t,n){e==="focusin"?(P0(),Za=t,xi=n,Za.attachEvent("onpropertychange",u2)):e==="focusout"&&P0()}function YE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qu(xi)}function XE(e,t){if(e==="click")return qu(t)}function ZE(e,t){if(e==="input"||e==="change")return qu(t)}function QE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wt=typeof Object.is=="function"?Object.is:QE;function Si(e,t){if(Wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Hd.call(t,o)||!Wt(e[o],t[o]))return!1}return!0}function A0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function E0(e,t){var n=A0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=A0(n)}}function c2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?c2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function d2(){for(var e=window,t=Pl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pl(e.document)}return t}function lm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function JE(e){var t=d2(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&c2(n.ownerDocument.documentElement,n)){if(r!==null&&lm(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=E0(n,a);var i=E0(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var eq=zn&&"documentMode"in document&&11>=document.documentMode,ho=null,df=null,Qa=null,ff=!1;function q0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ff||ho==null||ho!==Pl(r)||(r=ho,"selectionStart"in r&&lm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qa&&Si(Qa,r)||(Qa=r,r=$l(df,"onSelect"),0<r.length&&(t=new am("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ho)))}function Cs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var go={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionend:Cs("Transition","TransitionEnd")},Yc={},f2={};zn&&(f2=document.createElement("div").style,"AnimationEvent"in window||(delete go.animationend.animation,delete go.animationiteration.animation,delete go.animationstart.animation),"TransitionEvent"in window||delete go.transitionend.transition);function Ru(e){if(Yc[e])return Yc[e];if(!go[e])return e;var t=go[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in f2)return Yc[e]=t[n];return e}var p2=Ru("animationend"),m2=Ru("animationiteration"),h2=Ru("animationstart"),g2=Ru("transitionend"),y2=new Map,R0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(e,t){y2.set(e,t),Gr(t,[e])}for(var Xc=0;Xc<R0.length;Xc++){var Zc=R0[Xc],tq=Zc.toLowerCase(),nq=Zc[0].toUpperCase()+Zc.slice(1);pr(tq,"on"+nq)}pr(p2,"onAnimationEnd");pr(m2,"onAnimationIteration");pr(h2,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(g2,"onTransitionEnd");Wo("onMouseEnter",["mouseout","mouseover"]);Wo("onMouseLeave",["mouseout","mouseover"]);Wo("onPointerEnter",["pointerout","pointerover"]);Wo("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rq=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function I0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,tE(r,t,void 0,e),e.currentTarget=null}function b2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&o.isPropagationStopped())break e;I0(o,s,u),a=l}else for(i=0;i<r.length;i++){if(s=r[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&o.isPropagationStopped())break e;I0(o,s,u),a=l}}}if(El)throw e=sf,El=!1,sf=null,e}function ue(e,t){var n=t[yf];n===void 0&&(n=t[yf]=new Set);var r=e+"__bubble";n.has(r)||(v2(t,e,2,!1),n.add(r))}function Qc(e,t,n){var r=0;t&&(r|=4),v2(n,e,r,t)}var ks="_reactListening"+Math.random().toString(36).slice(2);function Ci(e){if(!e[ks]){e[ks]=!0,_v.forEach(function(n){n!=="selectionchange"&&(rq.has(n)||Qc(n,!1,e),Qc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ks]||(t[ks]=!0,Qc("selectionchange",!1,t))}}function v2(e,t,n,r){switch(n2(t)){case 1:var o=yE;break;case 4:o=bE;break;default:o=rm}n=o.bind(null,t,n,e),o=void 0,!af||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Jc(e,t,n,r,o){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;i=i.return}for(;s!==null;){if(i=Pr(s),i===null)return;if(l=i.tag,l===5||l===6){r=a=i;continue e}s=s.parentNode}}r=r.return}Ov(function(){var u=a,c=Jp(n),d=[];e:{var f=y2.get(e);if(f!==void 0){var p=am,y=e;switch(e){case"keypress":if(Qs(n)===0)break e;case"keydown":case"keyup":p=IE;break;case"focusin":y="focus",p=Uc;break;case"focusout":y="blur",p=Uc;break;case"beforeblur":case"afterblur":p=Uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=x0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=xE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=LE;break;case p2:case m2:case h2:p=kE;break;case g2:p=VE;break;case"scroll":p=vE;break;case"wheel":p=BE;break;case"copy":case"cut":case"paste":p=_E;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=C0}var b=(t&4)!==0,x=!b&&e==="scroll",m=b?f!==null?f+"Capture":null:f;b=[];for(var h=u,g;h!==null;){g=h;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,m!==null&&(S=yi(h,m),S!=null&&b.push(ki(h,S,g)))),x)break;h=h.return}0<b.length&&(f=new p(f,y,null,n,c),d.push({event:f,listeners:b}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==rf&&(y=n.relatedTarget||n.fromElement)&&(Pr(y)||y[$n]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?Pr(y):null,y!==null&&(x=Kr(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(b=x0,S="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(b=C0,S="onPointerLeave",m="onPointerEnter",h="pointer"),x=p==null?f:yo(p),g=y==null?f:yo(y),f=new b(S,h+"leave",p,n,c),f.target=x,f.relatedTarget=g,S=null,Pr(c)===u&&(b=new b(m,h+"enter",y,n,c),b.target=g,b.relatedTarget=x,S=b),x=S,p&&y)t:{for(b=p,m=y,h=0,g=b;g;g=eo(g))h++;for(g=0,S=m;S;S=eo(S))g++;for(;0<h-g;)b=eo(b),h--;for(;0<g-h;)m=eo(m),g--;for(;h--;){if(b===m||m!==null&&b===m.alternate)break t;b=eo(b),m=eo(m)}b=null}else b=null;p!==null&&z0(d,f,p,b,!1),y!==null&&x!==null&&z0(d,x,y,b,!0)}}e:{if(f=u?yo(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var P=GE;else if(_0(f))if(l2)P=ZE;else{P=YE;var A=KE}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=XE);if(P&&(P=P(e,u))){s2(d,P,n,c);break e}A&&A(e,f,u),e==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Qd(f,"number",f.value)}switch(A=u?yo(u):window,e){case"focusin":(_0(A)||A.contentEditable==="true")&&(ho=A,df=u,Qa=null);break;case"focusout":Qa=df=ho=null;break;case"mousedown":ff=!0;break;case"contextmenu":case"mouseup":case"dragend":ff=!1,q0(d,n,c);break;case"selectionchange":if(eq)break;case"keydown":case"keyup":q0(d,n,c)}var F;if(sm)e:{switch(e){case"compositionstart":var q="onCompositionStart";break e;case"compositionend":q="onCompositionEnd";break e;case"compositionupdate":q="onCompositionUpdate";break e}q=void 0}else mo?a2(e,n)&&(q="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(q="onCompositionStart");q&&(o2&&n.locale!=="ko"&&(mo||q!=="onCompositionStart"?q==="onCompositionEnd"&&mo&&(F=r2()):(Jn=c,om="value"in Jn?Jn.value:Jn.textContent,mo=!0)),A=$l(u,q),0<A.length&&(q=new S0(q,e,null,n,c),d.push({event:q,listeners:A}),F?q.data=F:(F=i2(n),F!==null&&(q.data=F)))),(F=OE?DE(e,n):WE(e,n))&&(u=$l(u,"onBeforeInput"),0<u.length&&(c=new S0("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=F))}b2(d,t)})}function ki(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $l(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=yi(e,n),a!=null&&r.unshift(ki(e,a,o)),a=yi(e,t),a!=null&&r.push(ki(e,a,o))),e=e.return}return r}function eo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function z0(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=yi(n,a),l!=null&&i.unshift(ki(n,l,s))):o||(l=yi(n,a),l!=null&&i.push(ki(n,l,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var oq=/\r\n?/g,aq=/\u0000|\uFFFD/g;function $0(e){return(typeof e=="string"?e:""+e).replace(oq,`
`).replace(aq,"")}function Ts(e,t,n){if(t=$0(t),$0(e)!==t&&n)throw Error(E(425))}function Ll(){}var pf=null,mf=null;function hf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gf=typeof setTimeout=="function"?setTimeout:void 0,iq=typeof clearTimeout=="function"?clearTimeout:void 0,L0=typeof Promise=="function"?Promise:void 0,sq=typeof queueMicrotask=="function"?queueMicrotask:typeof L0<"u"?function(e){return L0.resolve(null).then(e).catch(lq)}:gf;function lq(e){setTimeout(function(){throw e})}function ed(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),wi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);wi(t)}function or(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function M0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ta=Math.random().toString(36).slice(2),an="__reactFiber$"+ta,Ti="__reactProps$"+ta,$n="__reactContainer$"+ta,yf="__reactEvents$"+ta,uq="__reactListeners$"+ta,cq="__reactHandles$"+ta;function Pr(e){var t=e[an];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$n]||n[an]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=M0(e);e!==null;){if(n=e[an])return n;e=M0(e)}return t}e=n,n=e.parentNode}return null}function Oi(e){return e=e[an]||e[$n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Iu(e){return e[Ti]||null}var bf=[],bo=-1;function mr(e){return{current:e}}function de(e){0>bo||(e.current=bf[bo],bf[bo]=null,bo--)}function se(e,t){bo++,bf[bo]=e.current,e.current=t}var fr={},He=mr(fr),at=mr(!1),Vr=fr;function Ho(e,t){var n=e.type.contextTypes;if(!n)return fr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function it(e){return e=e.childContextTypes,e!=null}function Ml(){de(at),de(He)}function V0(e,t,n){if(He.current!==fr)throw Error(E(168));se(He,t),se(at,n)}function w2(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,KA(e)||"Unknown",o));return ve({},n,r)}function Vl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fr,Vr=He.current,se(He,e),se(at,at.current),!0}function j0(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=w2(e,t,Vr),r.__reactInternalMemoizedMergedChildContext=e,de(at),de(He),se(He,e)):de(at),se(at,n)}var Sn=null,zu=!1,td=!1;function x2(e){Sn===null?Sn=[e]:Sn.push(e)}function dq(e){zu=!0,x2(e)}function hr(){if(!td&&Sn!==null){td=!0;var e=0,t=re;try{var n=Sn;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Sn=null,zu=!1}catch(o){throw Sn!==null&&(Sn=Sn.slice(e+1)),Uv(em,hr),o}finally{re=t,td=!1}}return null}var vo=[],wo=0,jl=null,Bl=0,Ft=[],Pt=0,jr=null,Fn=1,Pn="";function Cr(e,t){vo[wo++]=Bl,vo[wo++]=jl,jl=e,Bl=t}function S2(e,t,n){Ft[Pt++]=Fn,Ft[Pt++]=Pn,Ft[Pt++]=jr,jr=e;var r=Fn;e=Pn;var o=32-Ot(r)-1;r&=~(1<<o),n+=1;var a=32-Ot(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Fn=1<<32-Ot(t)+o|n<<o|r,Pn=a+e}else Fn=1<<a|n<<o|r,Pn=e}function um(e){e.return!==null&&(Cr(e,1),S2(e,1,0))}function cm(e){for(;e===jl;)jl=vo[--wo],vo[wo]=null,Bl=vo[--wo],vo[wo]=null;for(;e===jr;)jr=Ft[--Pt],Ft[Pt]=null,Pn=Ft[--Pt],Ft[Pt]=null,Fn=Ft[--Pt],Ft[Pt]=null}var gt=null,pt=null,me=!1,Bt=null;function C2(e,t){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function B0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,gt=e,pt=or(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,gt=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jr!==null?{id:Fn,overflow:Pn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,gt=e,pt=null,!0):!1;default:return!1}}function vf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wf(e){if(me){var t=pt;if(t){var n=t;if(!B0(e,t)){if(vf(e))throw Error(E(418));t=or(n.nextSibling);var r=gt;t&&B0(e,t)?C2(r,n):(e.flags=e.flags&-4097|2,me=!1,gt=e)}}else{if(vf(e))throw Error(E(418));e.flags=e.flags&-4097|2,me=!1,gt=e}}}function N0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;gt=e}function _s(e){if(e!==gt)return!1;if(!me)return N0(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hf(e.type,e.memoizedProps)),t&&(t=pt)){if(vf(e))throw k2(),Error(E(418));for(;t;)C2(e,t),t=or(t.nextSibling)}if(N0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=or(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=gt?or(e.stateNode.nextSibling):null;return!0}function k2(){for(var e=pt;e;)e=or(e.nextSibling)}function Uo(){pt=gt=null,me=!1}function dm(e){Bt===null?Bt=[e]:Bt.push(e)}var fq=Bn.ReactCurrentBatchConfig;function va(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var s=o.refs;i===null?delete s[a]:s[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Fs(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function O0(e){var t=e._init;return t(e._payload)}function T2(e){function t(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function o(m,h){return m=lr(m,h),m.index=0,m.sibling=null,m}function a(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,h,g,S){return h===null||h.tag!==6?(h=ld(g,m.mode,S),h.return=m,h):(h=o(h,g),h.return=m,h)}function l(m,h,g,S){var P=g.type;return P===po?c(m,h,g.props.children,S,g.key):h!==null&&(h.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Gn&&O0(P)===h.type)?(S=o(h,g.props),S.ref=va(m,h,g),S.return=m,S):(S=al(g.type,g.key,g.props,null,m.mode,S),S.ref=va(m,h,g),S.return=m,S)}function u(m,h,g,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=ud(g,m.mode,S),h.return=m,h):(h=o(h,g.children||[]),h.return=m,h)}function c(m,h,g,S,P){return h===null||h.tag!==7?(h=Lr(g,m.mode,S,P),h.return=m,h):(h=o(h,g),h.return=m,h)}function d(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ld(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case gs:return g=al(h.type,h.key,h.props,null,m.mode,g),g.ref=va(m,null,h),g.return=m,g;case fo:return h=ud(h,m.mode,g),h.return=m,h;case Gn:var S=h._init;return d(m,S(h._payload),g)}if(Ea(h)||ma(h))return h=Lr(h,m.mode,g,null),h.return=m,h;Fs(m,h)}return null}function f(m,h,g,S){var P=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:s(m,h,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case gs:return g.key===P?l(m,h,g,S):null;case fo:return g.key===P?u(m,h,g,S):null;case Gn:return P=g._init,f(m,h,P(g._payload),S)}if(Ea(g)||ma(g))return P!==null?null:c(m,h,g,S,null);Fs(m,g)}return null}function p(m,h,g,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(g)||null,s(h,m,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case gs:return m=m.get(S.key===null?g:S.key)||null,l(h,m,S,P);case fo:return m=m.get(S.key===null?g:S.key)||null,u(h,m,S,P);case Gn:var A=S._init;return p(m,h,g,A(S._payload),P)}if(Ea(S)||ma(S))return m=m.get(g)||null,c(h,m,S,P,null);Fs(h,S)}return null}function y(m,h,g,S){for(var P=null,A=null,F=h,q=h=0,L=null;F!==null&&q<g.length;q++){F.index>q?(L=F,F=null):L=F.sibling;var R=f(m,F,g[q],S);if(R===null){F===null&&(F=L);break}e&&F&&R.alternate===null&&t(m,F),h=a(R,h,q),A===null?P=R:A.sibling=R,A=R,F=L}if(q===g.length)return n(m,F),me&&Cr(m,q),P;if(F===null){for(;q<g.length;q++)F=d(m,g[q],S),F!==null&&(h=a(F,h,q),A===null?P=F:A.sibling=F,A=F);return me&&Cr(m,q),P}for(F=r(m,F);q<g.length;q++)L=p(F,m,q,g[q],S),L!==null&&(e&&L.alternate!==null&&F.delete(L.key===null?q:L.key),h=a(L,h,q),A===null?P=L:A.sibling=L,A=L);return e&&F.forEach(function(G){return t(m,G)}),me&&Cr(m,q),P}function b(m,h,g,S){var P=ma(g);if(typeof P!="function")throw Error(E(150));if(g=P.call(g),g==null)throw Error(E(151));for(var A=P=null,F=h,q=h=0,L=null,R=g.next();F!==null&&!R.done;q++,R=g.next()){F.index>q?(L=F,F=null):L=F.sibling;var G=f(m,F,R.value,S);if(G===null){F===null&&(F=L);break}e&&F&&G.alternate===null&&t(m,F),h=a(G,h,q),A===null?P=G:A.sibling=G,A=G,F=L}if(R.done)return n(m,F),me&&Cr(m,q),P;if(F===null){for(;!R.done;q++,R=g.next())R=d(m,R.value,S),R!==null&&(h=a(R,h,q),A===null?P=R:A.sibling=R,A=R);return me&&Cr(m,q),P}for(F=r(m,F);!R.done;q++,R=g.next())R=p(F,m,q,R.value,S),R!==null&&(e&&R.alternate!==null&&F.delete(R.key===null?q:R.key),h=a(R,h,q),A===null?P=R:A.sibling=R,A=R);return e&&F.forEach(function(St){return t(m,St)}),me&&Cr(m,q),P}function x(m,h,g,S){if(typeof g=="object"&&g!==null&&g.type===po&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case gs:e:{for(var P=g.key,A=h;A!==null;){if(A.key===P){if(P=g.type,P===po){if(A.tag===7){n(m,A.sibling),h=o(A,g.props.children),h.return=m,m=h;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Gn&&O0(P)===A.type){n(m,A.sibling),h=o(A,g.props),h.ref=va(m,A,g),h.return=m,m=h;break e}n(m,A);break}else t(m,A);A=A.sibling}g.type===po?(h=Lr(g.props.children,m.mode,S,g.key),h.return=m,m=h):(S=al(g.type,g.key,g.props,null,m.mode,S),S.ref=va(m,h,g),S.return=m,m=S)}return i(m);case fo:e:{for(A=g.key;h!==null;){if(h.key===A)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=o(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=ud(g,m.mode,S),h.return=m,m=h}return i(m);case Gn:return A=g._init,x(m,h,A(g._payload),S)}if(Ea(g))return y(m,h,g,S);if(ma(g))return b(m,h,g,S);Fs(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=o(h,g),h.return=m,m=h):(n(m,h),h=ld(g,m.mode,S),h.return=m,m=h),i(m)):n(m,h)}return x}var Go=T2(!0),_2=T2(!1),Nl=mr(null),Ol=null,xo=null,fm=null;function pm(){fm=xo=Ol=null}function mm(e){var t=Nl.current;de(Nl),e._currentValue=t}function xf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $o(e,t){Ol=e,fm=xo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(rt=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if(fm!==e)if(e={context:e,memoizedValue:t,next:null},xo===null){if(Ol===null)throw Error(E(308));xo=e,Ol.dependencies={lanes:0,firstContext:e}}else xo=xo.next=e;return t}var Ar=null;function hm(e){Ar===null?Ar=[e]:Ar.push(e)}function F2(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,hm(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ln(e,r)}function Ln(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kn=!1;function gm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function P2(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ar(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Y&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ln(e,n)}return o=r.interleaved,o===null?(t.next=t,hm(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ln(e,n)}function Js(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tm(e,n)}}function D0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Dl(e,t,n,r){var o=e.updateQueue;Kn=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?a=u:i.next=u,i=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==i&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=o.baseState;i=0,c=u=l=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,b=s;switch(f=t,p=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){d=y.call(p,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,f=typeof y=="function"?y.call(p,d,f):y,f==null)break e;d=ve({},d,f);break e;case 2:Kn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,i|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(c===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Nr|=i,e.lanes=i,e.memoizedState=d}}function W0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var Di={},pn=mr(Di),_i=mr(Di),Fi=mr(Di);function Er(e){if(e===Di)throw Error(E(174));return e}function ym(e,t){switch(se(Fi,t),se(_i,e),se(pn,Di),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ef(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ef(t,e)}de(pn),se(pn,t)}function Ko(){de(pn),de(_i),de(Fi)}function A2(e){Er(Fi.current);var t=Er(pn.current),n=ef(t,e.type);t!==n&&(se(_i,e),se(pn,n))}function bm(e){_i.current===e&&(de(pn),de(_i))}var ge=mr(0);function Wl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nd=[];function vm(){for(var e=0;e<nd.length;e++)nd[e]._workInProgressVersionPrimary=null;nd.length=0}var el=Bn.ReactCurrentDispatcher,rd=Bn.ReactCurrentBatchConfig,Br=0,ye=null,Ee=null,Ie=null,Hl=!1,Ja=!1,Pi=0,pq=0;function Ne(){throw Error(E(321))}function wm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wt(e[n],t[n]))return!1;return!0}function xm(e,t,n,r,o,a){if(Br=a,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,el.current=e===null||e.memoizedState===null?yq:bq,e=n(r,o),Ja){a=0;do{if(Ja=!1,Pi=0,25<=a)throw Error(E(301));a+=1,Ie=Ee=null,t.updateQueue=null,el.current=vq,e=n(r,o)}while(Ja)}if(el.current=Ul,t=Ee!==null&&Ee.next!==null,Br=0,Ie=Ee=ye=null,Hl=!1,t)throw Error(E(300));return e}function Sm(){var e=Pi!==0;return Pi=0,e}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?ye.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function It(){if(Ee===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Ie===null?ye.memoizedState:Ie.next;if(t!==null)Ie=t,Ee=e;else{if(e===null)throw Error(E(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ie===null?ye.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function Ai(e,t){return typeof t=="function"?t(e):t}function od(e){var t=It(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=Ee,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var s=i=null,l=null,u=a;do{var c=u.lane;if((Br&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,i=r):l=l.next=d,ye.lanes|=c,Nr|=c}u=u.next}while(u!==null&&u!==a);l===null?i=r:l.next=s,Wt(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,ye.lanes|=a,Nr|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ad(e){var t=It(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);Wt(a,t.memoizedState)||(rt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function E2(){}function q2(e,t){var n=ye,r=It(),o=t(),a=!Wt(r.memoizedState,o);if(a&&(r.memoizedState=o,rt=!0),r=r.queue,Cm(z2.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,Ei(9,I2.bind(null,n,r,o,t),void 0,null),ze===null)throw Error(E(349));(Br&30)!==0||R2(n,t,o)}return o}function R2(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function I2(e,t,n,r){t.value=n,t.getSnapshot=r,$2(t)&&L2(e)}function z2(e,t,n){return n(function(){$2(t)&&L2(e)})}function $2(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wt(e,n)}catch{return!0}}function L2(e){var t=Ln(e,1);t!==null&&Dt(t,e,1,-1)}function H0(e){var t=tn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ai,lastRenderedState:e},t.queue=e,e=e.dispatch=gq.bind(null,ye,e),[t.memoizedState,e]}function Ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function M2(){return It().memoizedState}function tl(e,t,n,r){var o=tn();ye.flags|=e,o.memoizedState=Ei(1|t,n,void 0,r===void 0?null:r)}function $u(e,t,n,r){var o=It();r=r===void 0?null:r;var a=void 0;if(Ee!==null){var i=Ee.memoizedState;if(a=i.destroy,r!==null&&wm(r,i.deps)){o.memoizedState=Ei(t,n,a,r);return}}ye.flags|=e,o.memoizedState=Ei(1|t,n,a,r)}function U0(e,t){return tl(8390656,8,e,t)}function Cm(e,t){return $u(2048,8,e,t)}function V2(e,t){return $u(4,2,e,t)}function j2(e,t){return $u(4,4,e,t)}function B2(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function N2(e,t,n){return n=n!=null?n.concat([e]):null,$u(4,4,B2.bind(null,t,e),n)}function km(){}function O2(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wm(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function D2(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wm(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function W2(e,t,n){return(Br&21)===0?(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n):(Wt(n,t)||(n=Yv(),ye.lanes|=n,Nr|=n,e.baseState=!0),t)}function mq(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=rd.transition;rd.transition={};try{e(!1),t()}finally{re=n,rd.transition=r}}function H2(){return It().memoizedState}function hq(e,t,n){var r=sr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},U2(e))G2(t,n);else if(n=F2(e,t,n,r),n!==null){var o=Ze();Dt(n,e,r,o),K2(n,t,r)}}function gq(e,t,n){var r=sr(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(U2(e))G2(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,s=a(i,n);if(o.hasEagerState=!0,o.eagerState=s,Wt(s,i)){var l=t.interleaved;l===null?(o.next=o,hm(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=F2(e,t,o,r),n!==null&&(o=Ze(),Dt(n,e,r,o),K2(n,t,r))}}function U2(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function G2(e,t){Ja=Hl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function K2(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tm(e,n)}}var Ul={readContext:Rt,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},yq={readContext:Rt,useCallback:function(e,t){return tn().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:U0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,tl(4194308,4,B2.bind(null,t,e),n)},useLayoutEffect:function(e,t){return tl(4194308,4,e,t)},useInsertionEffect:function(e,t){return tl(4,2,e,t)},useMemo:function(e,t){var n=tn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hq.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=tn();return e={current:e},t.memoizedState=e},useState:H0,useDebugValue:km,useDeferredValue:function(e){return tn().memoizedState=e},useTransition:function(){var e=H0(!1),t=e[0];return e=mq.bind(null,e[1]),tn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,o=tn();if(me){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),ze===null)throw Error(E(349));(Br&30)!==0||R2(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,U0(z2.bind(null,r,a,e),[e]),r.flags|=2048,Ei(9,I2.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=tn(),t=ze.identifierPrefix;if(me){var n=Pn,r=Fn;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pq++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bq={readContext:Rt,useCallback:O2,useContext:Rt,useEffect:Cm,useImperativeHandle:N2,useInsertionEffect:V2,useLayoutEffect:j2,useMemo:D2,useReducer:od,useRef:M2,useState:function(){return od(Ai)},useDebugValue:km,useDeferredValue:function(e){var t=It();return W2(t,Ee.memoizedState,e)},useTransition:function(){var e=od(Ai)[0],t=It().memoizedState;return[e,t]},useMutableSource:E2,useSyncExternalStore:q2,useId:H2,unstable_isNewReconciler:!1},vq={readContext:Rt,useCallback:O2,useContext:Rt,useEffect:Cm,useImperativeHandle:N2,useInsertionEffect:V2,useLayoutEffect:j2,useMemo:D2,useReducer:ad,useRef:M2,useState:function(){return ad(Ai)},useDebugValue:km,useDeferredValue:function(e){var t=It();return Ee===null?t.memoizedState=e:W2(t,Ee.memoizedState,e)},useTransition:function(){var e=ad(Ai)[0],t=It().memoizedState;return[e,t]},useMutableSource:E2,useSyncExternalStore:q2,useId:H2,unstable_isNewReconciler:!1};function Vt(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Sf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Lu={isMounted:function(e){return(e=e._reactInternals)?Kr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ze(),o=sr(e),a=qn(r,o);a.payload=t,n!=null&&(a.callback=n),t=ar(e,a,o),t!==null&&(Dt(t,e,o,r),Js(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ze(),o=sr(e),a=qn(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ar(e,a,o),t!==null&&(Dt(t,e,o,r),Js(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),r=sr(e),o=qn(n,r);o.tag=2,t!=null&&(o.callback=t),t=ar(e,o,r),t!==null&&(Dt(t,e,r,n),Js(t,e,r))}};function G0(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!Si(n,r)||!Si(o,a):!0}function Y2(e,t,n){var r=!1,o=fr,a=t.contextType;return typeof a=="object"&&a!==null?a=Rt(a):(o=it(t)?Vr:He.current,r=t.contextTypes,a=(r=r!=null)?Ho(e,o):fr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Lu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function K0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Lu.enqueueReplaceState(t,t.state,null)}function Cf(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},gm(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=Rt(a):(a=it(t)?Vr:He.current,o.context=Ho(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Sf(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Lu.enqueueReplaceState(o,o.state,null),Dl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Yo(e,t){try{var n="",r=t;do n+=GA(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function id(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function kf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var wq=typeof WeakMap=="function"?WeakMap:Map;function X2(e,t,n){n=qn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Kl||(Kl=!0,zf=r),kf(e,t)},n}function Z2(e,t,n){n=qn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){kf(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){kf(e,t),typeof r!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Y0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new wq;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=zq.bind(null,e,t,n),t.then(e,e))}function X0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Z0(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qn(-1,1),t.tag=2,ar(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var xq=Bn.ReactCurrentOwner,rt=!1;function Ke(e,t,n,r){t.child=e===null?_2(t,null,n,r):Go(t,e.child,n,r)}function Q0(e,t,n,r,o){n=n.render;var a=t.ref;return $o(t,o),r=xm(e,t,n,r,a,o),n=Sm(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Mn(e,t,o)):(me&&n&&um(t),t.flags|=1,Ke(e,t,r,o),t.child)}function J0(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!Rm(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Q2(e,t,a,r,o)):(e=al(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:Si,n(i,r)&&e.ref===t.ref)return Mn(e,t,o)}return t.flags|=1,e=lr(a,r),e.ref=t.ref,e.return=t,t.child=e}function Q2(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(Si(a,r)&&e.ref===t.ref)if(rt=!1,t.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(rt=!0);else return t.lanes=e.lanes,Mn(e,t,o)}return Tf(e,t,n,r,o)}function J2(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Co,dt),dt|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(Co,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,se(Co,dt),dt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,se(Co,dt),dt|=r;return Ke(e,t,o,n),t.child}function ew(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tf(e,t,n,r,o){var a=it(n)?Vr:He.current;return a=Ho(t,a),$o(t,o),n=xm(e,t,n,r,a,o),r=Sm(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Mn(e,t,o)):(me&&r&&um(t),t.flags|=1,Ke(e,t,n,o),t.child)}function ey(e,t,n,r,o){if(it(n)){var a=!0;Vl(t)}else a=!1;if($o(t,o),t.stateNode===null)nl(e,t),Y2(t,n,r),Cf(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var l=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rt(u):(u=it(n)?Vr:He.current,u=Ho(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||l!==u)&&K0(t,i,r,u),Kn=!1;var f=t.memoizedState;i.state=f,Dl(t,r,i,o),l=t.memoizedState,s!==r||f!==l||at.current||Kn?(typeof c=="function"&&(Sf(t,n,c,r),l=t.memoizedState),(s=Kn||G0(t,n,s,r,f,l,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),i.props=r,i.state=l,i.context=u,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,P2(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Vt(t.type,s),i.props=u,d=t.pendingProps,f=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rt(l):(l=it(n)?Vr:He.current,l=Ho(t,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==d||f!==l)&&K0(t,i,r,l),Kn=!1,f=t.memoizedState,i.state=f,Dl(t,r,i,o);var y=t.memoizedState;s!==d||f!==y||at.current||Kn?(typeof p=="function"&&(Sf(t,n,p,r),y=t.memoizedState),(u=Kn||G0(t,n,u,r,f,y,l)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,y,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,y,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),i.props=r,i.state=y,i.context=l,r=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return _f(e,t,n,r,a,o)}function _f(e,t,n,r,o,a){ew(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&j0(t,n,!1),Mn(e,t,a);r=t.stateNode,xq.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Go(t,e.child,null,a),t.child=Go(t,null,s,a)):Ke(e,t,s,a),t.memoizedState=r.state,o&&j0(t,n,!0),t.child}function tw(e){var t=e.stateNode;t.pendingContext?V0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&V0(e,t.context,!1),ym(e,t.containerInfo)}function ty(e,t,n,r,o){return Uo(),dm(o),t.flags|=256,Ke(e,t,n,r),t.child}var Ff={dehydrated:null,treeContext:null,retryLane:0};function Pf(e){return{baseLanes:e,cachePool:null,transitions:null}}function nw(e,t,n){var r=t.pendingProps,o=ge.current,a=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),se(ge,o&1),e===null)return wf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=i):a=ju(i,r,0,null),e=Lr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Pf(n),t.memoizedState=Ff,e):Tm(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Sq(e,t,i,r,s,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=lr(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?a=lr(s,a):(a=Lr(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?Pf(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=Ff,r}return a=e.child,e=a.sibling,r=lr(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Tm(e,t){return t=ju({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ps(e,t,n,r){return r!==null&&dm(r),Go(t,e.child,null,n),e=Tm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sq(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=id(Error(E(422))),Ps(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=ju({mode:"visible",children:r.children},o,0,null),a=Lr(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&Go(t,e.child,null,i),t.child.memoizedState=Pf(i),t.memoizedState=Ff,a);if((t.mode&1)===0)return Ps(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(E(419)),r=id(a,r,void 0),Ps(e,t,i,r)}if(s=(i&e.childLanes)!==0,rt||s){if(r=ze,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Ln(e,o),Dt(r,e,o,-1))}return qm(),r=id(Error(E(421))),Ps(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=$q.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,pt=or(o.nextSibling),gt=t,me=!0,Bt=null,e!==null&&(Ft[Pt++]=Fn,Ft[Pt++]=Pn,Ft[Pt++]=jr,Fn=e.id,Pn=e.overflow,jr=t),t=Tm(t,r.children),t.flags|=4096,t)}function ny(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),xf(e.return,t,n)}function sd(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function rw(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(Ke(e,t,r.children,n),r=ge.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ny(e,n,t);else if(e.tag===19)ny(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(ge,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Wl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),sd(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Wl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}sd(t,!0,n,null,a);break;case"together":sd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function nl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nr|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=lr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=lr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cq(e,t,n){switch(t.tag){case 3:tw(t),Uo();break;case 5:A2(t);break;case 1:it(t.type)&&Vl(t);break;case 4:ym(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;se(Nl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(ge,ge.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?nw(e,t,n):(se(ge,ge.current&1),e=Mn(e,t,n),e!==null?e.sibling:null);se(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return rw(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),se(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,J2(e,t,n)}return Mn(e,t,n)}var ow,Af,aw,iw;ow=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Af=function(){};aw=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Er(pn.current);var a=null;switch(n){case"input":o=Xd(e,o),r=Xd(e,r),a=[];break;case"select":o=ve({},o,{value:void 0}),r=ve({},r,{value:void 0}),a=[];break;case"textarea":o=Jd(e,o),r=Jd(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ll)}tf(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(hi.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(hi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ue("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};iw=function(e,t,n,r){n!==r&&(t.flags|=4)};function wa(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function kq(e,t,n){var r=t.pendingProps;switch(cm(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return it(t.type)&&Ml(),Oe(t),null;case 3:return r=t.stateNode,Ko(),de(at),de(He),vm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_s(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Bt!==null&&(Mf(Bt),Bt=null))),Af(e,t),Oe(t),null;case 5:bm(t);var o=Er(Fi.current);if(n=t.type,e!==null&&t.stateNode!=null)aw(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return Oe(t),null}if(e=Er(pn.current),_s(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[an]=t,r[Ti]=a,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(o=0;o<Ra.length;o++)ue(Ra[o],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":d0(r,a),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ue("invalid",r);break;case"textarea":p0(r,a),ue("invalid",r)}tf(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Ts(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Ts(r.textContent,s,e),o=["children",""+s]):hi.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&ue("scroll",r)}switch(n){case"input":ys(r),f0(r,a,!0);break;case"textarea":ys(r),m0(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ll)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[an]=t,e[Ti]=r,ow(e,t,!1,!1),t.stateNode=e;e:{switch(i=nf(n,r),n){case"dialog":ue("cancel",e),ue("close",e),o=r;break;case"iframe":case"object":case"embed":ue("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ra.length;o++)ue(Ra[o],e);o=r;break;case"source":ue("error",e),o=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),o=r;break;case"details":ue("toggle",e),o=r;break;case"input":d0(e,r),o=Xd(e,r),ue("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ve({},r,{value:void 0}),ue("invalid",e);break;case"textarea":p0(e,r),o=Jd(e,r),ue("invalid",e);break;default:o=r}tf(n,o),s=o;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Mv(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$v(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&gi(e,l):typeof l=="number"&&gi(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(hi.hasOwnProperty(a)?l!=null&&a==="onScroll"&&ue("scroll",e):l!=null&&Yp(e,a,l,i))}switch(n){case"input":ys(e),f0(e,r,!1);break;case"textarea":ys(e),m0(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dr(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?qo(e,!!r.multiple,a,!1):r.defaultValue!=null&&qo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ll)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)iw(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Er(Fi.current),Er(pn.current),_s(t)){if(r=t.stateNode,n=t.memoizedProps,r[an]=t,(a=r.nodeValue!==n)&&(e=gt,e!==null))switch(e.tag){case 3:Ts(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ts(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[an]=t,t.stateNode=r}return Oe(t),null;case 13:if(de(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&pt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)k2(),Uo(),t.flags|=98560,a=!1;else if(a=_s(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(E(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(E(317));a[an]=t}else Uo(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),a=!1}else Bt!==null&&(Mf(Bt),Bt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ge.current&1)!==0?qe===0&&(qe=3):qm())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return Ko(),Af(e,t),e===null&&Ci(t.stateNode.containerInfo),Oe(t),null;case 10:return mm(t.type._context),Oe(t),null;case 17:return it(t.type)&&Ml(),Oe(t),null;case 19:if(de(ge),a=t.memoizedState,a===null)return Oe(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)wa(a,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Wl(e),i!==null){for(t.flags|=128,wa(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(ge,ge.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ce()>Xo&&(t.flags|=128,r=!0,wa(a,!1),t.lanes=4194304)}else{if(!r)if(e=Wl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!me)return Oe(t),null}else 2*Ce()-a.renderingStartTime>Xo&&n!==1073741824&&(t.flags|=128,r=!0,wa(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ce(),t.sibling=null,n=ge.current,se(ge,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return Em(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(dt&1073741824)!==0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Tq(e,t){switch(cm(t),t.tag){case 1:return it(t.type)&&Ml(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ko(),de(at),de(He),vm(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return bm(t),null;case 13:if(de(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Uo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(ge),null;case 4:return Ko(),null;case 10:return mm(t.type._context),null;case 22:case 23:return Em(),null;case 24:return null;default:return null}}var As=!1,We=!1,_q=typeof WeakSet=="function"?WeakSet:Set,$=null;function So(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function Ef(e,t,n){try{n()}catch(r){we(e,t,r)}}var ry=!1;function Fq(e,t){if(pf=Il,e=d2(),lm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,s=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var p;d!==n||o!==0&&d.nodeType!==3||(s=i+o),d!==a||r!==0&&d.nodeType!==3||(l=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break t;if(f===n&&++u===o&&(s=i),f===a&&++c===r&&(l=i),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mf={focusedElem:e,selectionRange:n},Il=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,x=y.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:Vt(t.type,b),x);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(S){we(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return y=ry,ry=!1,y}function ei(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Ef(t,n,a)}o=o.next}while(o!==r)}}function Mu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function qf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sw(e){var t=e.alternate;t!==null&&(e.alternate=null,sw(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[an],delete t[Ti],delete t[yf],delete t[uq],delete t[cq])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lw(e){return e.tag===5||e.tag===3||e.tag===4}function oy(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lw(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ll));else if(r!==4&&(e=e.child,e!==null))for(Rf(e,t,n),e=e.sibling;e!==null;)Rf(e,t,n),e=e.sibling}function If(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(If(e,t,n),e=e.sibling;e!==null;)If(e,t,n),e=e.sibling}var Me=null,jt=!1;function Dn(e,t,n){for(n=n.child;n!==null;)uw(e,t,n),n=n.sibling}function uw(e,t,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(Au,n)}catch{}switch(n.tag){case 5:We||So(n,t);case 6:var r=Me,o=jt;Me=null,Dn(e,t,n),Me=r,jt=o,Me!==null&&(jt?(e=Me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(jt?(e=Me,n=n.stateNode,e.nodeType===8?ed(e.parentNode,n):e.nodeType===1&&ed(e,n),wi(e)):ed(Me,n.stateNode));break;case 4:r=Me,o=jt,Me=n.stateNode.containerInfo,jt=!0,Dn(e,t,n),Me=r,jt=o;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&((a&2)!==0||(a&4)!==0)&&Ef(n,t,i),o=o.next}while(o!==r)}Dn(e,t,n);break;case 1:if(!We&&(So(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){we(n,t,s)}Dn(e,t,n);break;case 21:Dn(e,t,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,Dn(e,t,n),We=r):Dn(e,t,n);break;default:Dn(e,t,n)}}function ay(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _q),t.forEach(function(r){var o=Lq.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:Me=s.stateNode,jt=!1;break e;case 3:Me=s.stateNode.containerInfo,jt=!0;break e;case 4:Me=s.stateNode.containerInfo,jt=!0;break e}s=s.return}if(Me===null)throw Error(E(160));uw(a,i,o),Me=null,jt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){we(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cw(t,e),t=t.sibling}function cw(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),Qt(e),r&4){try{ei(3,e,e.return),Mu(3,e)}catch(b){we(e,e.return,b)}try{ei(5,e,e.return)}catch(b){we(e,e.return,b)}}break;case 1:Mt(t,e),Qt(e),r&512&&n!==null&&So(n,n.return);break;case 5:if(Mt(t,e),Qt(e),r&512&&n!==null&&So(n,n.return),e.flags&32){var o=e.stateNode;try{gi(o,"")}catch(b){we(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Rv(o,a),nf(s,i);var u=nf(s,a);for(i=0;i<l.length;i+=2){var c=l[i],d=l[i+1];c==="style"?Mv(o,d):c==="dangerouslySetInnerHTML"?$v(o,d):c==="children"?gi(o,d):Yp(o,c,d,u)}switch(s){case"input":Zd(o,a);break;case"textarea":Iv(o,a);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?qo(o,!!a.multiple,p,!1):f!==!!a.multiple&&(a.defaultValue!=null?qo(o,!!a.multiple,a.defaultValue,!0):qo(o,!!a.multiple,a.multiple?[]:"",!1))}o[Ti]=a}catch(b){we(e,e.return,b)}}break;case 6:if(Mt(t,e),Qt(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(b){we(e,e.return,b)}}break;case 3:if(Mt(t,e),Qt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wi(t.containerInfo)}catch(b){we(e,e.return,b)}break;case 4:Mt(t,e),Qt(e);break;case 13:Mt(t,e),Qt(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Pm=Ce())),r&4&&ay(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(We=(u=We)||c,Mt(t,e),We=u):Mt(t,e),Qt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for($=e,c=e.child;c!==null;){for(d=$=c;$!==null;){switch(f=$,p=f.child,f.tag){case 0:case 11:case 14:case 15:ei(4,f,f.return);break;case 1:So(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(b){we(r,n,b)}}break;case 5:So(f,f.return);break;case 22:if(f.memoizedState!==null){sy(d);continue}}p!==null?(p.return=f,$=p):sy(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Lv("display",i))}catch(b){we(e,e.return,b)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(b){we(e,e.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Mt(t,e),Qt(e),r&4&&ay(e);break;case 21:break;default:Mt(t,e),Qt(e)}}function Qt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(lw(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(gi(o,""),r.flags&=-33);var a=oy(e);If(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=oy(e);Rf(e,s,i);break;default:throw Error(E(161))}}catch(l){we(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pq(e,t,n){$=e,dw(e)}function dw(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var o=$,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||As;if(!i){var s=o.alternate,l=s!==null&&s.memoizedState!==null||We;s=As;var u=We;if(As=i,(We=l)&&!u)for($=o;$!==null;)i=$,l=i.child,i.tag===22&&i.memoizedState!==null?ly(o):l!==null?(l.return=i,$=l):ly(o);for(;a!==null;)$=a,dw(a),a=a.sibling;$=o,As=s,We=u}iy(e)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,$=a):iy(e)}}function iy(e){for(;$!==null;){var t=$;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:We||Mu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!We)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Vt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&W0(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}W0(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&wi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}We||t.flags&512&&qf(t)}catch(f){we(t,t.return,f)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function sy(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function ly(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Mu(4,t)}catch(l){we(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){we(t,o,l)}}var a=t.return;try{qf(t)}catch(l){we(t,a,l)}break;case 5:var i=t.return;try{qf(t)}catch(l){we(t,i,l)}}}catch(l){we(t,t.return,l)}if(t===e){$=null;break}var s=t.sibling;if(s!==null){s.return=t.return,$=s;break}$=t.return}}var Aq=Math.ceil,Gl=Bn.ReactCurrentDispatcher,_m=Bn.ReactCurrentOwner,qt=Bn.ReactCurrentBatchConfig,Y=0,ze=null,Fe=null,je=0,dt=0,Co=mr(0),qe=0,qi=null,Nr=0,Vu=0,Fm=0,ti=null,tt=null,Pm=0,Xo=1/0,xn=null,Kl=!1,zf=null,ir=null,Es=!1,er=null,Yl=0,ni=0,$f=null,rl=-1,ol=0;function Ze(){return(Y&6)!==0?Ce():rl!==-1?rl:rl=Ce()}function sr(e){return(e.mode&1)===0?1:(Y&2)!==0&&je!==0?je&-je:fq.transition!==null?(ol===0&&(ol=Yv()),ol):(e=re,e!==0||(e=window.event,e=e===void 0?16:n2(e.type)),e)}function Dt(e,t,n,r){if(50<ni)throw ni=0,$f=null,Error(E(185));Bi(e,n,r),((Y&2)===0||e!==ze)&&(e===ze&&((Y&2)===0&&(Vu|=n),qe===4&&Zn(e,je)),st(e,r),n===1&&Y===0&&(t.mode&1)===0&&(Xo=Ce()+500,zu&&hr()))}function st(e,t){var n=e.callbackNode;fE(e,t);var r=Rl(e,e===ze?je:0);if(r===0)n!==null&&y0(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&y0(n),t===1)e.tag===0?dq(uy.bind(null,e)):x2(uy.bind(null,e)),sq(function(){(Y&6)===0&&hr()}),n=null;else{switch(Xv(r)){case 1:n=em;break;case 4:n=Gv;break;case 16:n=ql;break;case 536870912:n=Kv;break;default:n=ql}n=vw(n,fw.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fw(e,t){if(rl=-1,ol=0,(Y&6)!==0)throw Error(E(327));var n=e.callbackNode;if(Lo()&&e.callbackNode!==n)return null;var r=Rl(e,e===ze?je:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Xl(e,r);else{t=r;var o=Y;Y|=2;var a=mw();(ze!==e||je!==t)&&(xn=null,Xo=Ce()+500,$r(e,t));do try{Rq();break}catch(s){pw(e,s)}while(1);pm(),Gl.current=a,Y=o,Fe!==null?t=0:(ze=null,je=0,t=qe)}if(t!==0){if(t===2&&(o=lf(e),o!==0&&(r=o,t=Lf(e,o))),t===1)throw n=qi,$r(e,0),Zn(e,r),st(e,Ce()),n;if(t===6)Zn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Eq(o)&&(t=Xl(e,r),t===2&&(a=lf(e),a!==0&&(r=a,t=Lf(e,a))),t===1))throw n=qi,$r(e,0),Zn(e,r),st(e,Ce()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:kr(e,tt,xn);break;case 3:if(Zn(e,r),(r&130023424)===r&&(t=Pm+500-Ce(),10<t)){if(Rl(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=gf(kr.bind(null,e,tt,xn),t);break}kr(e,tt,xn);break;case 4:if(Zn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Ot(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Aq(r/1960))-r,10<r){e.timeoutHandle=gf(kr.bind(null,e,tt,xn),r);break}kr(e,tt,xn);break;case 5:kr(e,tt,xn);break;default:throw Error(E(329))}}}return st(e,Ce()),e.callbackNode===n?fw.bind(null,e):null}function Lf(e,t){var n=ti;return e.current.memoizedState.isDehydrated&&($r(e,t).flags|=256),e=Xl(e,t),e!==2&&(t=tt,tt=n,t!==null&&Mf(t)),e}function Mf(e){tt===null?tt=e:tt.push.apply(tt,e)}function Eq(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!Wt(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zn(e,t){for(t&=~Fm,t&=~Vu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function uy(e){if((Y&6)!==0)throw Error(E(327));Lo();var t=Rl(e,0);if((t&1)===0)return st(e,Ce()),null;var n=Xl(e,t);if(e.tag!==0&&n===2){var r=lf(e);r!==0&&(t=r,n=Lf(e,r))}if(n===1)throw n=qi,$r(e,0),Zn(e,t),st(e,Ce()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kr(e,tt,xn),st(e,Ce()),null}function Am(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(Xo=Ce()+500,zu&&hr())}}function Or(e){er!==null&&er.tag===0&&(Y&6)===0&&Lo();var t=Y;Y|=1;var n=qt.transition,r=re;try{if(qt.transition=null,re=1,e)return e()}finally{re=r,qt.transition=n,Y=t,(Y&6)===0&&hr()}}function Em(){dt=Co.current,de(Co)}function $r(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,iq(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(cm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ml();break;case 3:Ko(),de(at),de(He),vm();break;case 5:bm(r);break;case 4:Ko();break;case 13:de(ge);break;case 19:de(ge);break;case 10:mm(r.type._context);break;case 22:case 23:Em()}n=n.return}if(ze=e,Fe=e=lr(e.current,null),je=dt=t,qe=0,qi=null,Fm=Vu=Nr=0,tt=ti=null,Ar!==null){for(t=0;t<Ar.length;t++)if(n=Ar[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}Ar=null}return e}function pw(e,t){do{var n=Fe;try{if(pm(),el.current=Ul,Hl){for(var r=ye.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Hl=!1}if(Br=0,Ie=Ee=ye=null,Ja=!1,Pi=0,_m.current=null,n===null||n.return===null){qe=1,qi=t,Fe=null;break}e:{var a=e,i=n.return,s=n,l=t;if(t=je,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=X0(i);if(p!==null){p.flags&=-257,Z0(p,i,s,a,t),p.mode&1&&Y0(a,u,t),t=p,l=u;var y=t.updateQueue;if(y===null){var b=new Set;b.add(l),t.updateQueue=b}else y.add(l);break e}else{if((t&1)===0){Y0(a,u,t),qm();break e}l=Error(E(426))}}else if(me&&s.mode&1){var x=X0(i);if(x!==null){(x.flags&65536)===0&&(x.flags|=256),Z0(x,i,s,a,t),dm(Yo(l,s));break e}}a=l=Yo(l,s),qe!==4&&(qe=2),ti===null?ti=[a]:ti.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=X2(a,l,t);D0(a,m);break e;case 1:s=l;var h=a.type,g=a.stateNode;if((a.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ir===null||!ir.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=Z2(a,s,t);D0(a,S);break e}}a=a.return}while(a!==null)}gw(n)}catch(P){t=P,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(1)}function mw(){var e=Gl.current;return Gl.current=Ul,e===null?Ul:e}function qm(){(qe===0||qe===3||qe===2)&&(qe=4),ze===null||(Nr&268435455)===0&&(Vu&268435455)===0||Zn(ze,je)}function Xl(e,t){var n=Y;Y|=2;var r=mw();(ze!==e||je!==t)&&(xn=null,$r(e,t));do try{qq();break}catch(o){pw(e,o)}while(1);if(pm(),Y=n,Gl.current=r,Fe!==null)throw Error(E(261));return ze=null,je=0,qe}function qq(){for(;Fe!==null;)hw(Fe)}function Rq(){for(;Fe!==null&&!rE();)hw(Fe)}function hw(e){var t=bw(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?gw(e):Fe=t,_m.current=null}function gw(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=kq(n,t,dt),n!==null){Fe=n;return}}else{if(n=Tq(n,t),n!==null){n.flags&=32767,Fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{qe=6,Fe=null;return}}if(t=t.sibling,t!==null){Fe=t;return}Fe=t=e}while(t!==null);qe===0&&(qe=5)}function kr(e,t,n){var r=re,o=qt.transition;try{qt.transition=null,re=1,Iq(e,t,n,r)}finally{qt.transition=o,re=r}return null}function Iq(e,t,n,r){do Lo();while(er!==null);if((Y&6)!==0)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(pE(e,a),e===ze&&(Fe=ze=null,je=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Es||(Es=!0,vw(ql,function(){return Lo(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=qt.transition,qt.transition=null;var i=re;re=1;var s=Y;Y|=4,_m.current=null,Fq(e,n),cw(n,e),JE(mf),Il=!!pf,mf=pf=null,e.current=n,Pq(n),oE(),Y=s,re=i,qt.transition=a}else e.current=n;if(Es&&(Es=!1,er=e,Yl=o),a=e.pendingLanes,a===0&&(ir=null),sE(n.stateNode),st(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Kl)throw Kl=!1,e=zf,zf=null,e;return(Yl&1)!==0&&e.tag!==0&&Lo(),a=e.pendingLanes,(a&1)!==0?e===$f?ni++:(ni=0,$f=e):ni=0,hr(),null}function Lo(){if(er!==null){var e=Xv(Yl),t=qt.transition,n=re;try{if(qt.transition=null,re=16>e?16:e,er===null)var r=!1;else{if(e=er,er=null,Yl=0,(Y&6)!==0)throw Error(E(331));var o=Y;for(Y|=4,$=e.current;$!==null;){var a=$,i=a.child;if(($.flags&16)!==0){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:ei(8,c,a)}var d=c.child;if(d!==null)d.return=c,$=d;else for(;$!==null;){c=$;var f=c.sibling,p=c.return;if(sw(c),c===u){$=null;break}if(f!==null){f.return=p,$=f;break}$=p}}}var y=a.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var x=b.sibling;b.sibling=null,b=x}while(b!==null)}}$=a}}if((a.subtreeFlags&2064)!==0&&i!==null)i.return=a,$=i;else e:for(;$!==null;){if(a=$,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:ei(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,$=m;break e}$=a.return}}var h=e.current;for($=h;$!==null;){i=$;var g=i.child;if((i.subtreeFlags&2064)!==0&&g!==null)g.return=i,$=g;else e:for(i=h;$!==null;){if(s=$,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Mu(9,s)}}catch(P){we(s,s.return,P)}if(s===i){$=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,$=S;break e}$=s.return}}if(Y=o,hr(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(Au,e)}catch{}r=!0}return r}finally{re=n,qt.transition=t}}return!1}function cy(e,t,n){t=Yo(n,t),t=X2(e,t,1),e=ar(e,t,1),t=Ze(),e!==null&&(Bi(e,1,t),st(e,t))}function we(e,t,n){if(e.tag===3)cy(e,e,n);else for(;t!==null;){if(t.tag===3){cy(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){e=Yo(n,e),e=Z2(t,e,1),t=ar(t,e,1),e=Ze(),t!==null&&(Bi(t,1,e),st(t,e));break}}t=t.return}}function zq(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(je&n)===n&&(qe===4||qe===3&&(je&130023424)===je&&500>Ce()-Pm?$r(e,0):Fm|=n),st(e,t)}function yw(e,t){t===0&&((e.mode&1)===0?t=1:(t=ws,ws<<=1,(ws&130023424)===0&&(ws=4194304)));var n=Ze();e=Ln(e,t),e!==null&&(Bi(e,t,n),st(e,n))}function $q(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yw(e,n)}function Lq(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),yw(e,n)}var bw;bw=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)rt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return rt=!1,Cq(e,t,n);rt=(e.flags&131072)!==0}else rt=!1,me&&(t.flags&1048576)!==0&&S2(t,Bl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;nl(e,t),e=t.pendingProps;var o=Ho(t,He.current);$o(t,n),o=xm(null,t,r,e,o,n);var a=Sm();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(r)?(a=!0,Vl(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,gm(t),o.updater=Lu,t.stateNode=o,o._reactInternals=t,Cf(t,r,e,n),t=_f(null,t,r,!0,a,n)):(t.tag=0,me&&a&&um(t),Ke(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(nl(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Vq(r),e=Vt(r,e),o){case 0:t=Tf(null,t,r,e,n);break e;case 1:t=ey(null,t,r,e,n);break e;case 11:t=Q0(null,t,r,e,n);break e;case 14:t=J0(null,t,r,Vt(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Vt(r,o),Tf(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Vt(r,o),ey(e,t,r,o,n);case 3:e:{if(tw(t),e===null)throw Error(E(387));r=t.pendingProps,a=t.memoizedState,o=a.element,P2(e,t),Dl(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Yo(Error(E(423)),t),t=ty(e,t,r,n,o);break e}else if(r!==o){o=Yo(Error(E(424)),t),t=ty(e,t,r,n,o);break e}else for(pt=or(t.stateNode.containerInfo.firstChild),gt=t,me=!0,Bt=null,n=_2(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Uo(),r===o){t=Mn(e,t,n);break e}Ke(e,t,r,n)}t=t.child}return t;case 5:return A2(t),e===null&&wf(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,hf(r,o)?i=null:a!==null&&hf(r,a)&&(t.flags|=32),ew(e,t),Ke(e,t,i,n),t.child;case 6:return e===null&&wf(t),null;case 13:return nw(e,t,n);case 4:return ym(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Go(t,null,r,n):Ke(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Vt(r,o),Q0(e,t,r,o,n);case 7:return Ke(e,t,t.pendingProps,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,se(Nl,r._currentValue),r._currentValue=i,a!==null)if(Wt(a.value,i)){if(a.children===o.children&&!at.current){t=Mn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){i=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=qn(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),xf(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(E(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),xf(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}Ke(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,$o(t,n),o=Rt(o),r=r(o),t.flags|=1,Ke(e,t,r,n),t.child;case 14:return r=t.type,o=Vt(r,t.pendingProps),o=Vt(r.type,o),J0(e,t,r,o,n);case 15:return Q2(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Vt(r,o),nl(e,t),t.tag=1,it(r)?(e=!0,Vl(t)):e=!1,$o(t,n),Y2(t,r,o),Cf(t,r,o,n),_f(null,t,r,!0,e,n);case 19:return rw(e,t,n);case 22:return J2(e,t,n)}throw Error(E(156,t.tag))};function vw(e,t){return Uv(e,t)}function Mq(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,n,r){return new Mq(e,t,n,r)}function Rm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vq(e){if(typeof e=="function")return Rm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zp)return 11;if(e===Qp)return 14}return 2}function lr(e,t){var n=e.alternate;return n===null?(n=At(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function al(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")Rm(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case po:return Lr(n.children,o,a,t);case Xp:i=8,o|=8;break;case Ud:return e=At(12,n,t,o|2),e.elementType=Ud,e.lanes=a,e;case Gd:return e=At(13,n,t,o),e.elementType=Gd,e.lanes=a,e;case Kd:return e=At(19,n,t,o),e.elementType=Kd,e.lanes=a,e;case Av:return ju(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fv:i=10;break e;case Pv:i=9;break e;case Zp:i=11;break e;case Qp:i=14;break e;case Gn:i=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=At(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Lr(e,t,n,r){return e=At(7,e,r,t),e.lanes=n,e}function ju(e,t,n,r){return e=At(22,e,r,t),e.elementType=Av,e.lanes=n,e.stateNode={isHidden:!1},e}function ld(e,t,n){return e=At(6,e,null,t),e.lanes=n,e}function ud(e,t,n){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jq(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dc(0),this.expirationTimes=Dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dc(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Im(e,t,n,r,o,a,i,s,l){return e=new jq(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=At(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gm(a),e}function Bq(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fo,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ww(e){if(!e)return fr;e=e._reactInternals;e:{if(Kr(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(it(n))return w2(e,n,t)}return t}function xw(e,t,n,r,o,a,i,s,l){return e=Im(n,r,!0,e,o,a,i,s,l),e.context=ww(null),n=e.current,r=Ze(),o=sr(n),a=qn(r,o),a.callback=t!=null?t:null,ar(n,a,o),e.current.lanes=o,Bi(e,o,r),st(e,r),e}function Bu(e,t,n,r){var o=t.current,a=Ze(),i=sr(o);return n=ww(n),t.context===null?t.context=n:t.pendingContext=n,t=qn(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ar(o,t,i),e!==null&&(Dt(e,o,i,a),Js(e,o,i)),i}function Zl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zm(e,t){dy(e,t),(e=e.alternate)&&dy(e,t)}function Nq(){return null}var Sw=typeof reportError=="function"?reportError:function(e){console.error(e)};function $m(e){this._internalRoot=e}Nu.prototype.render=$m.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Bu(e,t,null,null)};Nu.prototype.unmount=$m.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Or(function(){Bu(null,e,null,null)}),t[$n]=null}};function Nu(e){this._internalRoot=e}Nu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xn.length&&t!==0&&t<Xn[n].priority;n++);Xn.splice(n,0,e),n===0&&t2(e)}};function Lm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fy(){}function Oq(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=Zl(i);a.call(u)}}var i=xw(t,r,e,0,null,!1,!1,"",fy);return e._reactRootContainer=i,e[$n]=i.current,Ci(e.nodeType===8?e.parentNode:e),Or(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Zl(l);s.call(u)}}var l=Im(e,0,!1,null,null,!1,!1,"",fy);return e._reactRootContainer=l,e[$n]=l.current,Ci(e.nodeType===8?e.parentNode:e),Or(function(){Bu(t,l,n,r)}),l}function Du(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var s=o;o=function(){var l=Zl(i);s.call(l)}}Bu(t,i,e,o)}else i=Oq(n,t,e,o,r);return Zl(i)}Zv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qa(t.pendingLanes);n!==0&&(tm(t,n|1),st(t,Ce()),(Y&6)===0&&(Xo=Ce()+500,hr()))}break;case 13:Or(function(){var r=Ln(e,1);if(r!==null){var o=Ze();Dt(r,e,1,o)}}),zm(e,1)}};nm=function(e){if(e.tag===13){var t=Ln(e,134217728);if(t!==null){var n=Ze();Dt(t,e,134217728,n)}zm(e,134217728)}};Qv=function(e){if(e.tag===13){var t=sr(e),n=Ln(e,t);if(n!==null){var r=Ze();Dt(n,e,t,r)}zm(e,t)}};Jv=function(){return re};e2=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};of=function(e,t,n){switch(t){case"input":if(Zd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Iu(r);if(!o)throw Error(E(90));qv(r),Zd(r,o)}}}break;case"textarea":Iv(e,n);break;case"select":t=n.value,t!=null&&qo(e,!!n.multiple,t,!1)}};Bv=Am;Nv=Or;var Dq={usingClientEntryPoint:!1,Events:[Oi,yo,Iu,Vv,jv,Am]},xa={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wq={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wv(e),e===null?null:e.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||Nq,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qs.isDisabled&&qs.supportsFiber)try{Au=qs.inject(Wq),fn=qs}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dq;wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lm(t))throw Error(E(200));return Bq(e,t,null,n)};wt.createRoot=function(e,t){if(!Lm(e))throw Error(E(299));var n=!1,r="",o=Sw;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Im(e,1,!1,null,null,n,!1,r,o),e[$n]=t.current,Ci(e.nodeType===8?e.parentNode:e),new $m(t)};wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Wv(t),e=e===null?null:e.stateNode,e};wt.flushSync=function(e){return Or(e)};wt.hydrate=function(e,t,n){if(!Ou(t))throw Error(E(200));return Du(null,e,t,!0,n)};wt.hydrateRoot=function(e,t,n){if(!Lm(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=Sw;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=xw(t,null,e,1,n!=null?n:null,o,!1,a,i),e[$n]=t.current,Ci(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Nu(t)};wt.render=function(e,t,n){if(!Ou(t))throw Error(E(200));return Du(null,e,t,!1,n)};wt.unmountComponentAtNode=function(e){if(!Ou(e))throw Error(E(40));return e._reactRootContainer?(Or(function(){Du(null,null,e,!1,function(){e._reactRootContainer=null,e[$n]=null})}),!0):!1};wt.unstable_batchedUpdates=Am;wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ou(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Du(e,t,n,!1,r)};wt.version="18.3.1-next-f1338f8080-20240426";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=wt})(Pu);const[Cw,Hq]=Ut({strict:!1,name:"PortalContext"}),Mm="chakra-portal",Uq=".chakra-portal",Gq=e=>T("div",{className:"chakra-portal-zIndex",style:{position:"absolute",zIndex:e.zIndex,top:0,left:0,right:0},children:e.children}),Kq=e=>{const{appendToParentPortal:t,children:n}=e,[r,o]=v.exports.useState(null),a=v.exports.useRef(null),[,i]=v.exports.useState({});v.exports.useEffect(()=>i({}),[]);const s=Hq(),l=kk();cl(()=>{if(!r)return;const c=r.ownerDocument,d=t&&s!=null?s:c.body;if(!d)return;a.current=c.createElement("div"),a.current.className=Mm,d.appendChild(a.current),i({});const f=a.current;return()=>{d.contains(f)&&d.removeChild(f)}},[r]);const u=l!=null&&l.zIndex?T(Gq,{zIndex:l==null?void 0:l.zIndex,children:n}):n;return a.current?Pu.exports.createPortal(T(Cw,{value:a.current,children:u}),a.current):T("span",{ref:c=>{c&&o(c)}})},Yq=e=>{const{children:t,containerRef:n,appendToParentPortal:r}=e,o=n.current,a=o!=null?o:typeof window<"u"?document.body:void 0,i=v.exports.useMemo(()=>{const l=o==null?void 0:o.ownerDocument.createElement("div");return l&&(l.className=Mm),l},[o]),[,s]=v.exports.useState({});return cl(()=>s({}),[]),cl(()=>{if(!(!i||!a))return a.appendChild(i),()=>{a.removeChild(i)}},[i,a]),a&&i?Pu.exports.createPortal(T(Cw,{value:r?i:null,children:t}),i):null};function Wu(e){const t={appendToParentPortal:!0,...e},{containerRef:n,...r}=t;return n?T(Yq,{containerRef:n,...r}):T(Kq,{...r})}Wu.className=Mm;Wu.selector=Uq;Wu.displayName="Portal";const[Xq,nz]=Ut({name:"ToastOptionsContext",strict:!1}),Zq=e=>{const t=v.exports.useSyncExternalStore(Ga.subscribe,Ga.getState,Ga.getState),{motionVariants:n,component:r=hv,portalProps:o,animatePresenceProps:a}=e,s=Object.keys(t).map(l=>{const u=t[l];return T("div",{role:"region","aria-live":"polite","aria-label":`Notifications-${l}`,id:`chakra-toast-manager-${l}`,style:rA(l),children:T(eA,{...a,initial:!1,children:u.map(c=>T(r,{motionVariants:n,...c},c.id))})},l)});return T(Wu,{...o,children:s})},Qq=e=>function({children:n,theme:r=e,toastOptions:o,...a}){return K(Tk,{theme:r,...a,children:[T(Xq,{value:o==null?void 0:o.defaultOptions,children:n}),T(Zq,{...o})]})},Jq=Qq(r7);function eR(e){const{loading:t,src:n,srcSet:r,onLoad:o,onError:a,crossOrigin:i,sizes:s,ignoreFallback:l}=e,[u,c]=v.exports.useState("pending");v.exports.useEffect(()=>{c(n?"loading":"pending")},[n]);const d=v.exports.useRef(null),f=v.exports.useCallback(()=>{if(!n)return;p();const y=new Image;y.src=n,i&&(y.crossOrigin=i),r&&(y.srcset=r),s&&(y.sizes=s),t&&(y.loading=t),y.onload=b=>{p(),c("loaded"),o==null||o(b)},y.onerror=b=>{p(),c("failed"),a==null||a(b)},d.current=y},[n,i,r,s,o,a,t]),p=()=>{d.current&&(d.current.onload=null,d.current.onerror=null,d.current=null)};return cl(()=>{if(!l)return u==="loading"&&f(),()=>{p()}},[u,f,l]),l?"loaded":u}const tR=(e,t)=>e!=="loaded"&&t==="beforeLoadOrError"||e==="failed"&&t==="onError",et=H("div");et.displayName="Box";const[rz,nR]=Ut({strict:!1,name:"ButtonGroupContext"});function Ia(e){const{children:t,className:n,...r}=e,o=v.exports.isValidElement(t)?v.exports.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,a=Ue("chakra-button__icon",n);return T(H.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...r,className:a,children:o})}Ia.displayName="ButtonIcon";function Vf(e){const{label:t,placement:n,spacing:r="0.5rem",children:o=T(Wp,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:i,...s}=e,l=Ue("chakra-button__spinner",a),u=n==="start"?"marginEnd":"marginStart",c=v.exports.useMemo(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[u]:t?r:0,fontSize:"1em",lineHeight:"normal",...i}),[i,t,u,r]);return T(H.div,{className:l,...s,__css:c,children:o})}Vf.displayName="ButtonSpinner";function rR(e){const[t,n]=v.exports.useState(!e);return{ref:v.exports.useCallback(a=>{!a||n(a.tagName==="BUTTON")},[]),type:t?"button":void 0}}const ri=X((e,t)=>{const n=nR(),r=Ur("Button",{...n,...e}),{isDisabled:o=n==null?void 0:n.isDisabled,isLoading:a,isActive:i,children:s,leftIcon:l,rightIcon:u,loadingText:c,iconSpacing:d="0.5rem",type:f,spinner:p,spinnerPlacement:y="start",className:b,as:x,shouldWrapChildren:m,...h}=Gt(e),g=v.exports.useMemo(()=>{const F={...r==null?void 0:r._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...r,...!!n&&{_focus:F}}},[r,n]),{ref:S,type:P}=rR(x),A={rightIcon:u,leftIcon:l,iconSpacing:d,children:s,shouldWrapChildren:m};return K(H.button,{disabled:o||a,ref:W5(t,S),as:x,type:f!=null?f:P,"data-active":Jt(i),"data-loading":Jt(a),__css:g,className:Ue("chakra-button",b),...h,children:[a&&y==="start"&&T(Vf,{className:"chakra-button__spinner--start",label:c,placement:"start",spacing:d,children:p}),a?c||T(H.span,{opacity:0,children:T(py,{...A})}):T(py,{...A}),a&&y==="end"&&T(Vf,{className:"chakra-button__spinner--end",label:c,placement:"end",spacing:d,children:p})]})});ri.displayName="Button";function py(e){const{leftIcon:t,rightIcon:n,children:r,iconSpacing:o,shouldWrapChildren:a}=e;return a?K("span",{style:{display:"contents"},children:[t&&T(Ia,{marginEnd:o,children:t}),r,n&&T(Ia,{marginStart:o,children:n})]}):K(si,{children:[t&&T(Ia,{marginEnd:o,children:t}),r,n&&T(Ia,{marginStart:o,children:n})]})}const kw=H("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});kw.displayName="Center";const oR={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};X(function(t,n){const{axis:r="both",...o}=t;return T(H.div,{ref:n,__css:oR[r],...o,position:"absolute"})});const[aR,iR]=Ut({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[sR,Tw]=Ut({strict:!1,name:"FormControlContext"});function lR(e){const{id:t,isRequired:n,isInvalid:r,isDisabled:o,isReadOnly:a,...i}=e,s=v.exports.useId(),l=t||`field-${s}`,u=`${l}-label`,c=`${l}-feedback`,d=`${l}-helptext`,[f,p]=v.exports.useState(!1),[y,b]=v.exports.useState(!1),[x,m]=v.exports.useState(!1),h=v.exports.useCallback((F={},q=null)=>({id:d,...F,ref:md(q,L=>{!L||b(!0)})}),[d]),g=v.exports.useCallback((F={},q=null)=>({...F,ref:q,"data-focus":Jt(x),"data-disabled":Jt(o),"data-invalid":Jt(r),"data-readonly":Jt(a),id:F.id!==void 0?F.id:u,htmlFor:F.htmlFor!==void 0?F.htmlFor:l}),[l,o,x,r,a,u]),S=v.exports.useCallback((F={},q=null)=>({id:c,...F,ref:md(q,L=>{!L||p(!0)}),"aria-live":"polite"}),[c]),P=v.exports.useCallback((F={},q=null)=>({...F,...i,ref:q,role:"group","data-focus":Jt(x),"data-disabled":Jt(o),"data-invalid":Jt(r),"data-readonly":Jt(a)}),[i,o,x,r,a]),A=v.exports.useCallback((F={},q=null)=>({...F,ref:q,role:"presentation","aria-hidden":!0,children:F.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!a,isDisabled:!!o,isFocused:!!x,onFocus:()=>m(!0),onBlur:()=>m(!1),hasFeedbackText:f,setHasFeedbackText:p,hasHelpText:y,setHasHelpText:b,id:l,labelId:u,feedbackId:c,helpTextId:d,htmlProps:i,getHelpTextProps:h,getErrorMessageProps:S,getRootProps:P,getLabelProps:g,getRequiredIndicatorProps:A}}const uR=X(function(t,n){const r=ji("Form",t),o=Gt(t),{getRootProps:a,htmlProps:i,...s}=lR(o),l=Ue("chakra-form-control",t.className);return T(sR,{value:s,children:T(aR,{value:r,children:T(H.div,{...a({},n),className:l,__css:r.container})})})});uR.displayName="FormControl";const cR=X(function(t,n){const r=Tw(),o=iR(),a=Ue("chakra-form__helper-text",t.className);return T(H.div,{...r==null?void 0:r.getHelpTextProps(t,n),__css:o.helperText,className:a})});cR.displayName="FormHelperText";function dR(e){const{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:o,...a}=fR(e);return{...a,disabled:t,readOnly:r,required:o,"aria-invalid":ac(n),"aria-required":ac(o),"aria-readonly":ac(r)}}function fR(e){var y,b,x;const t=Tw(),{id:n,disabled:r,readOnly:o,required:a,isRequired:i,isInvalid:s,isReadOnly:l,isDisabled:u,onFocus:c,onBlur:d,...f}=e,p=e["aria-describedby"]?[e["aria-describedby"]]:[];return(t==null?void 0:t.hasFeedbackText)&&(t==null?void 0:t.isInvalid)&&p.push(t.feedbackId),t!=null&&t.hasHelpText&&p.push(t.helpTextId),{...f,"aria-describedby":p.join(" ")||void 0,id:n!=null?n:t==null?void 0:t.id,isDisabled:(y=r!=null?r:u)!=null?y:t==null?void 0:t.isDisabled,isReadOnly:(b=o!=null?o:l)!=null?b:t==null?void 0:t.isReadOnly,isRequired:(x=a!=null?a:i)!=null?x:t==null?void 0:t.isRequired,isInvalid:s!=null?s:t==null?void 0:t.isInvalid,onFocus:vh(t==null?void 0:t.onFocus,c),onBlur:vh(t==null?void 0:t.onBlur,d)}}const Vm=X(function(t,n){const{className:r,centerContent:o,...a}=Gt(t),i=Ur("Container",t);return T(H.div,{ref:n,className:Ue("chakra-container",r),...a,__css:{...i,...o&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});Vm.displayName="Container";const qr=X(function(t,n){const{direction:r,align:o,justify:a,wrap:i,basis:s,grow:l,shrink:u,...c}=t,d={display:"flex",flexDirection:r,alignItems:o,justifyContent:a,flexWrap:i,flexBasis:s,flexGrow:l,flexShrink:u};return T(H.div,{ref:n,__css:d,...c})});qr.displayName="Flex";const _w=X(function(t,n){const{templateAreas:r,gap:o,rowGap:a,columnGap:i,column:s,row:l,autoFlow:u,autoRows:c,templateRows:d,autoColumns:f,templateColumns:p,...y}=t,b={display:"grid",gridTemplateAreas:r,gridGap:o,gridRowGap:a,gridColumnGap:i,gridAutoColumns:f,gridColumn:s,gridRow:l,gridAutoFlow:u,gridAutoRows:c,gridTemplateRows:d,gridTemplateColumns:p};return T(H.div,{ref:n,__css:b,...y})});_w.displayName="Grid";const Fw=X(function(t,n){const{columns:r,spacingX:o,spacingY:a,spacing:i,minChildWidth:s,...l}=t,u=gv(),c=s?mR(s,u):hR(r);return T(_w,{ref:n,gap:i,columnGap:o,rowGap:a,templateColumns:c,...l})});Fw.displayName="SimpleGrid";function pR(e){return typeof e=="number"?`${e}px`:e}function mR(e,t){return Yf(e,n=>{const r=FA("sizes",n,pR(n))(t);return n===null?null:`repeat(auto-fit, minmax(${r}, 1fr))`})}function hR(e){return Yf(e,t=>t===null?null:`repeat(${t}, minmax(0, 1fr))`)}const jf=X(function(t,n){const{htmlWidth:r,htmlHeight:o,alt:a,...i}=t;return T("img",{width:r,height:o,ref:n,alt:a,...i})});jf.displayName="NativeImage";const jm=X(function(t,n){const{fallbackSrc:r,fallback:o,src:a,srcSet:i,align:s,fit:l,loading:u,ignoreFallback:c,crossOrigin:d,fallbackStrategy:f="beforeLoadOrError",referrerPolicy:p,...y}=t,b=r!==void 0||o!==void 0,x=u!=null||c||!b,m=eR({...t,crossOrigin:d,ignoreFallback:x}),h=tR(m,f),g={ref:n,objectFit:l,objectPosition:s,...x?y:n1(y,["onError","onLoad"])};return h?o||T(H.img,{as:jf,className:"chakra-image__placeholder",src:r,...g}):T(H.img,{as:jf,src:a,srcSet:i,crossOrigin:d,loading:u,referrerPolicy:p,className:"chakra-image",...g})});jm.displayName="Image";const Bm=X(function(t,n){const{htmlSize:r,...o}=t,a=ji("Input",o),i=Gt(o),s=dR(i),l=Ue("chakra-input",t.className);return T(H.input,{size:r,...s,__css:a.field,ref:n,className:l})});Bm.displayName="Input";Bm.id="Input";const[gR,Pw]=Ut({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),Nm=X(function(t,n){const r=ji("List",t),{children:o,styleType:a="none",stylePosition:i,spacing:s,...l}=Gt(t),u=Jy(o),d=s?{["& > *:not(style) ~ *:not(style)"]:{mt:s}}:{};return T(gR,{value:r,children:T(H.ul,{ref:n,listStyleType:a,listStylePosition:i,role:"list",__css:{...r.container,...d},...l,children:u})})});Nm.displayName="List";const yR=X((e,t)=>{const{as:n,...r}=e;return T(Nm,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...r})});yR.displayName="OrderedList";const Aw=X(function(t,n){const{as:r,...o}=t;return T(Nm,{ref:n,as:"ul",styleType:"initial",marginStart:"1em",...o})});Aw.displayName="UnorderedList";const Ew=X(function(t,n){const r=Pw();return T(H.li,{ref:n,...t,__css:r.item})});Ew.displayName="ListItem";const bR=X(function(t,n){const r=Pw();return T(jn,{ref:n,role:"presentation",...t,__css:r.icon})});bR.displayName="ListIcon";const qw=e=>T(H.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});qw.displayName="StackItem";function vR(e){const{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":Yf(n,o=>r[o])}}const Om=X((e,t)=>{const{isInline:n,direction:r,align:o,justify:a,spacing:i="0.5rem",wrap:s,children:l,divider:u,className:c,shouldWrapChildren:d,...f}=e,p=n?"row":r!=null?r:"column",y=v.exports.useMemo(()=>vR({spacing:i,direction:p}),[i,p]),b=!!u,x=!d&&!b,m=v.exports.useMemo(()=>{const g=Jy(l);return x?g:g.map((S,P)=>{const A=typeof S.key<"u"?S.key:P,F=P+1===g.length,L=d?T(qw,{children:S},A):S;if(!b)return L;const R=v.exports.cloneElement(u,{__css:y}),G=F?null:R;return K(v.exports.Fragment,{children:[L,G]},A)})},[u,y,b,x,d,l]),h=Ue("chakra-stack",c);return T(H.div,{ref:t,display:"flex",alignItems:o,justifyContent:a,flexDirection:p,flexWrap:s,gap:b?void 0:i,className:h,...f,children:m})});Om.displayName="Stack";const il=X((e,t)=>T(Om,{align:"center",...e,direction:"row",ref:t}));il.displayName="HStack";const Rw=X((e,t)=>T(Om,{align:"center",...e,direction:"column",ref:t}));Rw.displayName="VStack";const[wR,Iw]=Ut({name:"TagStylesContext",errorMessage:`useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `}),Mo=X((e,t)=>{const n=ji("Tag",e),r=Gt(e),o={display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%",...n.container};return T(wR,{value:n,children:T(H.span,{ref:t,...r,__css:o})})});Mo.displayName="Tag";const xR=X((e,t)=>{const n=Iw();return T(H.span,{ref:t,noOfLines:1,...e,__css:n.label})});xR.displayName="TagLabel";const SR=X((e,t)=>T(jn,{ref:t,verticalAlign:"top",marginEnd:"0.5rem",...e}));SR.displayName="TagLeftIcon";const CR=X((e,t)=>T(jn,{ref:t,verticalAlign:"top",marginStart:"0.5rem",...e}));CR.displayName="TagRightIcon";const zw=e=>T(jn,{verticalAlign:"inherit",viewBox:"0 0 512 512",...e,children:T("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})});zw.displayName="TagCloseIcon";const kR=X((e,t)=>{const{isDisabled:n,children:r,...o}=e,i={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...Iw().closeButton};return T(H.button,{ref:t,"aria-label":"close",...o,type:"button",disabled:n,__css:i,children:r||T(zw,{})})});kR.displayName="TagCloseButton";const sl=X(function(t,n){const r=Ur("Heading",t),{className:o,...a}=Gt(t);return T(H.h2,{ref:n,className:Ue("chakra-heading",t.className),...a,__css:r})});sl.displayName="Heading";const ft=X(function(t,n){const r=Ur("Text",t),{className:o,align:a,decoration:i,casing:s,...l}=Gt(t),u=e1({textAlign:t.align,textDecoration:t.decoration,textTransform:t.casing});return T(H.p,{ref:n,className:Ue("chakra-text",t.className),...u,...l,__css:r})});ft.displayName="Text";var Bf={},my=Pu.exports;Bf.createRoot=my.createRoot,Bf.hydrateRoot=my.hydrateRoot;const TR="modulepreload",_R=function(e){return"/Recipes/"+e},hy={},FR=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=_R(a),a in hy)return;hy[a]=!0;const i=a.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(!!r)for(let c=o.length-1;c>=0;c--){const d=o[c];if(d.href===a&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${s}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":TR,i||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),i)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())};var gy="popstate";function PR(e={}){function t(o,a){let{pathname:i="/",search:s="",hash:l=""}=Yr(o.location.hash.substring(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),Nf("",{pathname:i,search:s,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(o,a){let i=o.document.querySelector("base"),s="";if(i&&i.getAttribute("href")){let l=o.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof a=="string"?a:Ri(a))}function r(o,a){Ht(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(a)})`)}return ER(t,n,r,e)}function be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ht(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function AR(){return Math.random().toString(36).substring(2,10)}function yy(e,t){return{usr:e.state,key:e.key,idx:t}}function Nf(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Yr(t):t,state:n,key:t&&t.key||r||AR()}}function Ri({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Yr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ER(e,t,n,r={}){let{window:o=document.defaultView,v5Compat:a=!1}=r,i=o.history,s="POP",l=null,u=c();u==null&&(u=0,i.replaceState({...i.state,idx:u},""));function c(){return(i.state||{idx:null}).idx}function d(){s="POP";let x=c(),m=x==null?null:x-u;u=x,l&&l({action:s,location:b.location,delta:m})}function f(x,m){s="PUSH";let h=Nf(b.location,x,m);n&&n(h,x),u=c()+1;let g=yy(h,u),S=b.createHref(h);try{i.pushState(g,"",S)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(S)}a&&l&&l({action:s,location:b.location,delta:1})}function p(x,m){s="REPLACE";let h=Nf(b.location,x,m);n&&n(h,x),u=c();let g=yy(h,u),S=b.createHref(h);i.replaceState(g,"",S),a&&l&&l({action:s,location:b.location,delta:0})}function y(x){return qR(x)}let b={get action(){return s},get location(){return e(o,i)},listen(x){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(gy,d),l=x,()=>{o.removeEventListener(gy,d),l=null}},createHref(x){return t(o,x)},createURL:y,encodeLocation(x){let m=y(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:p,go(x){return i.go(x)}};return b}function qR(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),be(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:Ri(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function $w(e,t,n="/"){return RR(e,t,n,!1)}function RR(e,t,n,r){let o=typeof t=="string"?Yr(t):t,a=Vn(o.pathname||"/",n);if(a==null)return null;let i=Lw(e);IR(i);let s=null;for(let l=0;s==null&&l<i.length;++l){let u=WR(a);s=OR(i[l],u,r)}return s}function Lw(e,t=[],n=[],r="",o=!1){let a=(i,s,l=o,u)=>{let c={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};if(c.relativePath.startsWith("/")){if(!c.relativePath.startsWith(r)&&l)return;be(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let d=Rn([r,c.relativePath]),f=n.concat(c);i.children&&i.children.length>0&&(be(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),Lw(i.children,t,f,d,l)),!(i.path==null&&!i.index)&&t.push({path:d,score:BR(d,i.index),routesMeta:f})};return e.forEach((i,s)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,s);else for(let u of Mw(i.path))a(i,s,!0,u)}),t}function Mw(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let i=Mw(r.join("/")),s=[];return s.push(...i.map(l=>l===""?a:[a,l].join("/"))),o&&s.push(...i),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function IR(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:NR(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var zR=/^:[\w-]+$/,$R=3,LR=2,MR=1,VR=10,jR=-2,by=e=>e==="*";function BR(e,t){let n=e.split("/"),r=n.length;return n.some(by)&&(r+=jR),t&&(r+=LR),n.filter(o=>!by(o)).reduce((o,a)=>o+(zR.test(a)?$R:a===""?MR:VR),r)}function NR(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function OR(e,t,n=!1){let{routesMeta:r}=e,o={},a="/",i=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,c=a==="/"?t:t.slice(a.length)||"/",d=Ql({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),f=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Ql({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!d)return null;Object.assign(o,d.params),i.push({params:o,pathname:Rn([a,d.pathname]),pathnameBase:KR(Rn([a,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(a=Rn([a,d.pathnameBase]))}return i}function Ql(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=DR(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,{paramName:c,isOptional:d},f)=>{if(c==="*"){let y=s[f]||"";i=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const p=s[f];return d&&!p?u[c]=void 0:u[c]=(p||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:i,pattern:e}}function DR(e,t=!1,n=!0){Ht(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function WR(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ht(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Vn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function HR(e,t="/"){let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Yr(e):e;return{pathname:n?n.startsWith("/")?n:UR(n,t):t,search:YR(r),hash:XR(o)}}function UR(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function cd(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function GR(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Vw(e){let t=GR(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function jw(e,t,n,r=!1){let o;typeof e=="string"?o=Yr(e):(o={...e},be(!o.pathname||!o.pathname.includes("?"),cd("?","pathname","search",o)),be(!o.pathname||!o.pathname.includes("#"),cd("#","pathname","hash",o)),be(!o.search||!o.search.includes("#"),cd("#","search","hash",o)));let a=e===""||o.pathname==="",i=a?"/":o.pathname,s;if(i==null)s=n;else{let d=t.length-1;if(!r&&i.startsWith("..")){let f=i.split("/");for(;f[0]==="..";)f.shift(),d-=1;o.pathname=f.join("/")}s=d>=0?t[d]:"/"}let l=HR(o,s),u=i&&i!=="/"&&i.endsWith("/"),c=(a||i===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}var Rn=e=>e.join("/").replace(/\/\/+/g,"/"),KR=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),YR=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,XR=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ZR(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var QR=["POST","PUT","PATCH","DELETE"];[...QR];var na=v.exports.createContext(null);na.displayName="DataRouter";var Hu=v.exports.createContext(null);Hu.displayName="DataRouterState";v.exports.createContext(!1);var Bw=v.exports.createContext({isTransitioning:!1});Bw.displayName="ViewTransition";var JR=v.exports.createContext(new Map);JR.displayName="Fetchers";var eI=v.exports.createContext(null);eI.displayName="Await";var hn=v.exports.createContext(null);hn.displayName="Navigation";var Wi=v.exports.createContext(null);Wi.displayName="Location";var gn=v.exports.createContext({outlet:null,matches:[],isDataRoute:!1});gn.displayName="Route";var Dm=v.exports.createContext(null);Dm.displayName="RouteError";function tI(e,{relative:t}={}){be(Hi(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=v.exports.useContext(hn),{hash:o,pathname:a,search:i}=Ui(e,{relative:t}),s=a;return n!=="/"&&(s=a==="/"?n:Rn([n,a])),r.createHref({pathname:s,search:i,hash:o})}function Hi(){return v.exports.useContext(Wi)!=null}function Xr(){return be(Hi(),"useLocation() may be used only in the context of a <Router> component."),v.exports.useContext(Wi).location}var Nw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ow(e){v.exports.useContext(hn).static||v.exports.useLayoutEffect(e)}function Dw(){let{isDataRoute:e}=v.exports.useContext(gn);return e?hI():nI()}function nI(){be(Hi(),"useNavigate() may be used only in the context of a <Router> component.");let e=v.exports.useContext(na),{basename:t,navigator:n}=v.exports.useContext(hn),{matches:r}=v.exports.useContext(gn),{pathname:o}=Xr(),a=JSON.stringify(Vw(r)),i=v.exports.useRef(!1);return Ow(()=>{i.current=!0}),v.exports.useCallback((l,u={})=>{if(Ht(i.current,Nw),!i.current)return;if(typeof l=="number"){n.go(l);return}let c=jw(l,JSON.parse(a),o,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Rn([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,a,o,e])}v.exports.createContext(null);function rI(){let{matches:e}=v.exports.useContext(gn),t=e[e.length-1];return t?t.params:{}}function Ui(e,{relative:t}={}){let{matches:n}=v.exports.useContext(gn),{pathname:r}=Xr(),o=JSON.stringify(Vw(n));return v.exports.useMemo(()=>jw(e,JSON.parse(o),r,t==="path"),[e,o,r,t])}function oI(e,t){return Ww(e,t)}function Ww(e,t,n,r,o){var h;be(Hi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=v.exports.useContext(hn),{matches:i}=v.exports.useContext(gn),s=i[i.length-1],l=s?s.params:{},u=s?s.pathname:"/",c=s?s.pathnameBase:"/",d=s&&s.route;{let g=d&&d.path||"";Hw(u,!d||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let f=Xr(),p;if(t){let g=typeof t=="string"?Yr(t):t;be(c==="/"||((h=g.pathname)==null?void 0:h.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${g.pathname}" was given in the \`location\` prop.`),p=g}else p=f;let y=p.pathname||"/",b=y;if(c!=="/"){let g=c.replace(/^\//,"").split("/");b="/"+y.replace(/^\//,"").split("/").slice(g.length).join("/")}let x=$w(e,{pathname:b});Ht(d||x!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),Ht(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let m=uI(x&&x.map(g=>Object.assign({},g,{params:Object.assign({},l,g.params),pathname:Rn([c,a.encodeLocation?a.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?c:Rn([c,a.encodeLocation?a.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,n,r,o);return t&&m?v.exports.createElement(Wi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},m):m}function aI(){let e=mI(),t=ZR(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},i=null;return console.error("Error handled by React Router default ErrorBoundary:",e),i=v.exports.createElement(v.exports.Fragment,null,v.exports.createElement("p",null,"\u{1F4BF} Hey developer \u{1F44B}"),v.exports.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.exports.createElement("code",{style:a},"ErrorBoundary")," or"," ",v.exports.createElement("code",{style:a},"errorElement")," prop on your route.")),v.exports.createElement(v.exports.Fragment,null,v.exports.createElement("h2",null,"Unexpected Application Error!"),v.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.exports.createElement("pre",{style:o},n):null,i)}var iI=v.exports.createElement(aI,null),sI=class extends v.exports.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?v.exports.createElement(gn.Provider,{value:this.props.routeContext},v.exports.createElement(Dm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function lI({routeContext:e,match:t,children:n}){let r=v.exports.useContext(na);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),v.exports.createElement(gn.Provider,{value:e},n)}function uI(e,t=[],n=null,r=null,o=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,i=n==null?void 0:n.errors;if(i!=null){let u=a.findIndex(c=>c.route.id&&(i==null?void 0:i[c.route.id])!==void 0);be(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),a=a.slice(0,Math.min(a.length,u+1))}let s=!1,l=-1;if(n)for(let u=0;u<a.length;u++){let c=a[u];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(l=u),c.route.id){let{loaderData:d,errors:f}=n,p=c.route.loader&&!d.hasOwnProperty(c.route.id)&&(!f||f[c.route.id]===void 0);if(c.route.lazy||p){s=!0,l>=0?a=a.slice(0,l+1):a=[a[0]];break}}}return a.reduceRight((u,c,d)=>{let f,p=!1,y=null,b=null;n&&(f=i&&c.route.id?i[c.route.id]:void 0,y=c.route.errorElement||iI,s&&(l<0&&d===0?(Hw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,b=null):l===d&&(p=!0,b=c.route.hydrateFallbackElement||null)));let x=t.concat(a.slice(0,d+1)),m=()=>{let h;return f?h=y:p?h=b:c.route.Component?h=v.exports.createElement(c.route.Component,null):c.route.element?h=c.route.element:h=u,v.exports.createElement(lI,{match:c,routeContext:{outlet:u,matches:x,isDataRoute:n!=null},children:h})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?v.exports.createElement(sI,{location:n.location,revalidation:n.revalidation,component:y,error:f,children:m(),routeContext:{outlet:null,matches:x,isDataRoute:!0},unstable_onError:r}):m()},null)}function Wm(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cI(e){let t=v.exports.useContext(na);return be(t,Wm(e)),t}function dI(e){let t=v.exports.useContext(Hu);return be(t,Wm(e)),t}function fI(e){let t=v.exports.useContext(gn);return be(t,Wm(e)),t}function Hm(e){let t=fI(e),n=t.matches[t.matches.length-1];return be(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function pI(){return Hm("useRouteId")}function mI(){var r;let e=v.exports.useContext(Dm),t=dI("useRouteError"),n=Hm("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function hI(){let{router:e}=cI("useNavigate"),t=Hm("useNavigate"),n=v.exports.useRef(!1);return Ow(()=>{n.current=!0}),v.exports.useCallback(async(o,a={})=>{Ht(n.current,Nw),n.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...a}))},[e,t])}var vy={};function Hw(e,t,n){!t&&!vy[e]&&(vy[e]=!0,Ht(!1,n))}v.exports.memo(gI);function gI({routes:e,future:t,state:n,unstable_onError:r}){return Ww(e,void 0,n,r,t)}function Of(e){be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function yI({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:o,static:a=!1}){be(!Hi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let i=e.replace(/^\/*/,"/"),s=v.exports.useMemo(()=>({basename:i,navigator:o,static:a,future:{}}),[i,o,a]);typeof n=="string"&&(n=Yr(n));let{pathname:l="/",search:u="",hash:c="",state:d=null,key:f="default"}=n,p=v.exports.useMemo(()=>{let y=Vn(l,i);return y==null?null:{location:{pathname:y,search:u,hash:c,state:d,key:f},navigationType:r}},[i,l,u,c,d,f,r]);return Ht(p!=null,`<Router basename="${i}"> is not able to match the URL "${l}${u}${c}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:v.exports.createElement(hn.Provider,{value:s},v.exports.createElement(Wi.Provider,{children:t,value:p}))}function bI({children:e,location:t}){return oI(Df(e),t)}function Df(e,t=[]){let n=[];return v.exports.Children.forEach(e,(r,o)=>{if(!v.exports.isValidElement(r))return;let a=[...t,o];if(r.type===v.exports.Fragment){n.push.apply(n,Df(r.props.children,a));return}be(r.type===Of,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),be(!r.props.index||!r.props.children,"An index route cannot have child routes.");let i={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=Df(r.props.children,a)),n.push(i)}),n}var ll="get",ul="application/x-www-form-urlencoded";function Uu(e){return e!=null&&typeof e.tagName=="string"}function vI(e){return Uu(e)&&e.tagName.toLowerCase()==="button"}function wI(e){return Uu(e)&&e.tagName.toLowerCase()==="form"}function xI(e){return Uu(e)&&e.tagName.toLowerCase()==="input"}function SI(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function CI(e,t){return e.button===0&&(!t||t==="_self")&&!SI(e)}var Rs=null;function kI(){if(Rs===null)try{new FormData(document.createElement("form"),0),Rs=!1}catch{Rs=!0}return Rs}var TI=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function dd(e){return e!=null&&!TI.has(e)?(Ht(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ul}"`),null):e}function _I(e,t){let n,r,o,a,i;if(wI(e)){let s=e.getAttribute("action");r=s?Vn(s,t):null,n=e.getAttribute("method")||ll,o=dd(e.getAttribute("enctype"))||ul,a=new FormData(e)}else if(vI(e)||xI(e)&&(e.type==="submit"||e.type==="image")){let s=e.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||s.getAttribute("action");if(r=l?Vn(l,t):null,n=e.getAttribute("formmethod")||s.getAttribute("method")||ll,o=dd(e.getAttribute("formenctype"))||dd(s.getAttribute("enctype"))||ul,a=new FormData(s,e),!kI()){let{name:u,type:c,value:d}=e;if(c==="image"){let f=u?`${u}.`:"";a.append(`${f}x`,"0"),a.append(`${f}y`,"0")}else u&&a.append(u,d)}}else{if(Uu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ll,r=null,o=ul,i=e}return a&&o==="text/plain"&&(i=a,a=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:a,body:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Um(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function FI(e,t,n){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${n}`:t&&Vn(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function PI(e,t){if(e.id in t)return t[e.id];try{let n=await FR(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function AI(e){return e!=null&&typeof e.page=="string"}function EI(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function qI(e,t,n){let r=await Promise.all(e.map(async o=>{let a=t.routes[o.route.id];if(a){let i=await PI(a,n);return i.links?i.links():[]}return[]}));return $I(r.flat(1).filter(EI).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function wy(e,t,n,r,o,a){let i=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,s=(l,u)=>{var c;return n[u].pathname!==l.pathname||((c=n[u].route.path)==null?void 0:c.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return a==="assets"?t.filter((l,u)=>i(l,u)||s(l,u)):a==="data"?t.filter((l,u)=>{var d;let c=r.routes[l.route.id];if(!c||!c.hasLoader)return!1;if(i(l,u)||s(l,u))return!0;if(l.route.shouldRevalidate){let f=l.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function RI(e,t,{includeHydrateFallback:n}={}){return II(e.map(r=>{let o=t.routes[r.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function II(e){return[...new Set(e)]}function zI(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function $I(e,t){let n=new Set,r=new Set(t);return e.reduce((o,a)=>{if(t&&!AI(a)&&a.as==="script"&&a.href&&r.has(a.href))return o;let s=JSON.stringify(zI(a));return n.has(s)||(n.add(s),o.push({key:s,link:a})),o},[])}function Uw(){let e=v.exports.useContext(na);return Um(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function LI(){let e=v.exports.useContext(Hu);return Um(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Gm=v.exports.createContext(void 0);Gm.displayName="FrameworkContext";function Gw(){let e=v.exports.useContext(Gm);return Um(e,"You must render this element inside a <HydratedRouter> element"),e}function MI(e,t){let n=v.exports.useContext(Gm),[r,o]=v.exports.useState(!1),[a,i]=v.exports.useState(!1),{onFocus:s,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:d}=t,f=v.exports.useRef(null);v.exports.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let b=m=>{m.forEach(h=>{i(h.isIntersecting)})},x=new IntersectionObserver(b,{threshold:.5});return f.current&&x.observe(f.current),()=>{x.disconnect()}}},[e]),v.exports.useEffect(()=>{if(r){let b=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(b)}}},[r]);let p=()=>{o(!0)},y=()=>{o(!1),i(!1)};return n?e!=="intent"?[a,f,{}]:[a,f,{onFocus:Sa(s,p),onBlur:Sa(l,y),onMouseEnter:Sa(u,p),onMouseLeave:Sa(c,y),onTouchStart:Sa(d,p)}]:[!1,f,{}]}function Sa(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function VI({page:e,...t}){let{router:n}=Uw(),r=v.exports.useMemo(()=>$w(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?v.exports.createElement(BI,{page:e,matches:r,...t}):null}function jI(e){let{manifest:t,routeModules:n}=Gw(),[r,o]=v.exports.useState([]);return v.exports.useEffect(()=>{let a=!1;return qI(e,t,n).then(i=>{a||o(i)}),()=>{a=!0}},[e,t,n]),r}function BI({page:e,matches:t,...n}){let r=Xr(),{manifest:o,routeModules:a}=Gw(),{basename:i}=Uw(),{loaderData:s,matches:l}=LI(),u=v.exports.useMemo(()=>wy(e,t,l,o,r,"data"),[e,t,l,o,r]),c=v.exports.useMemo(()=>wy(e,t,l,o,r,"assets"),[e,t,l,o,r]),d=v.exports.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let y=new Set,b=!1;if(t.forEach(m=>{var g;let h=o.routes[m.route.id];!h||!h.hasLoader||(!u.some(S=>S.route.id===m.route.id)&&m.route.id in s&&((g=a[m.route.id])==null?void 0:g.shouldRevalidate)||h.hasClientLoader?b=!0:y.add(m.route.id))}),y.size===0)return[];let x=FI(e,i,"data");return b&&y.size>0&&x.searchParams.set("_routes",t.filter(m=>y.has(m.route.id)).map(m=>m.route.id).join(",")),[x.pathname+x.search]},[i,s,r,o,u,t,e,a]),f=v.exports.useMemo(()=>RI(c,o),[c,o]),p=jI(c);return v.exports.createElement(v.exports.Fragment,null,d.map(y=>v.exports.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...n})),f.map(y=>v.exports.createElement("link",{key:y,rel:"modulepreload",href:y,...n})),p.map(({key:y,link:b})=>v.exports.createElement("link",{key:y,nonce:n.nonce,...b})))}function NI(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Kw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Kw&&(window.__reactRouterVersion="7.9.1")}catch{}function OI({basename:e,children:t,window:n}){let r=v.exports.useRef();r.current==null&&(r.current=PR({window:n,v5Compat:!0}));let o=r.current,[a,i]=v.exports.useState({action:o.action,location:o.location}),s=v.exports.useCallback(l=>{v.exports.startTransition(()=>i(l))},[i]);return v.exports.useLayoutEffect(()=>o.listen(s),[o,s]),v.exports.createElement(yI,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o})}var Yw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Km=v.exports.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:o,reloadDocument:a,replace:i,state:s,target:l,to:u,preventScrollReset:c,viewTransition:d,...f},p){let{basename:y}=v.exports.useContext(hn),b=typeof u=="string"&&Yw.test(u),x,m=!1;if(typeof u=="string"&&b&&(x=u,Kw))try{let L=new URL(window.location.href),R=u.startsWith("//")?new URL(L.protocol+u):new URL(u),G=Vn(R.pathname,y);R.origin===L.origin&&G!=null?u=G+R.search+R.hash:m=!0}catch{Ht(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let h=tI(u,{relative:o}),[g,S,P]=MI(r,f),A=UI(u,{replace:i,state:s,target:l,preventScrollReset:c,relative:o,viewTransition:d});function F(L){t&&t(L),L.defaultPrevented||A(L)}let q=v.exports.createElement("a",{...f,...P,href:x||h,onClick:m||a?t:F,ref:NI(p,S),target:l,"data-discover":!b&&n==="render"?"true":void 0});return g&&!b?v.exports.createElement(v.exports.Fragment,null,q,v.exports.createElement(VI,{page:h})):q});Km.displayName="Link";var DI=v.exports.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:o=!1,style:a,to:i,viewTransition:s,children:l,...u},c){let d=Ui(i,{relative:u.relative}),f=Xr(),p=v.exports.useContext(Hu),{navigator:y,basename:b}=v.exports.useContext(hn),x=p!=null&&ZI(d)&&s===!0,m=y.encodeLocation?y.encodeLocation(d).pathname:d.pathname,h=f.pathname,g=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(h=h.toLowerCase(),g=g?g.toLowerCase():null,m=m.toLowerCase()),g&&b&&(g=Vn(g,b)||g);const S=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let P=h===m||!o&&h.startsWith(m)&&h.charAt(S)==="/",A=g!=null&&(g===m||!o&&g.startsWith(m)&&g.charAt(m.length)==="/"),F={isActive:P,isPending:A,isTransitioning:x},q=P?t:void 0,L;typeof r=="function"?L=r(F):L=[r,P?"active":null,A?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let R=typeof a=="function"?a(F):a;return v.exports.createElement(Km,{...u,"aria-current":q,className:L,ref:c,style:R,to:i,viewTransition:s},typeof l=="function"?l(F):l)});DI.displayName="NavLink";var WI=v.exports.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:o,state:a,method:i=ll,action:s,onSubmit:l,relative:u,preventScrollReset:c,viewTransition:d,...f},p)=>{let y=YI(),b=XI(s,{relative:u}),x=i.toLowerCase()==="get"?"get":"post",m=typeof s=="string"&&Yw.test(s),h=g=>{if(l&&l(g),g.defaultPrevented)return;g.preventDefault();let S=g.nativeEvent.submitter,P=(S==null?void 0:S.getAttribute("formmethod"))||i;y(S||g.currentTarget,{fetcherKey:t,method:P,navigate:n,replace:o,state:a,relative:u,preventScrollReset:c,viewTransition:d})};return v.exports.createElement("form",{ref:p,method:x,action:b,onSubmit:r?l:h,...f,"data-discover":!m&&e==="render"?"true":void 0})});WI.displayName="Form";function HI(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xw(e){let t=v.exports.useContext(na);return be(t,HI(e)),t}function UI(e,{target:t,replace:n,state:r,preventScrollReset:o,relative:a,viewTransition:i}={}){let s=Dw(),l=Xr(),u=Ui(e,{relative:a});return v.exports.useCallback(c=>{if(CI(c,t)){c.preventDefault();let d=n!==void 0?n:Ri(l)===Ri(u);s(e,{replace:d,state:r,preventScrollReset:o,relative:a,viewTransition:i})}},[l,s,u,n,r,t,e,o,a,i])}var GI=0,KI=()=>`__${String(++GI)}__`;function YI(){let{router:e}=Xw("useSubmit"),{basename:t}=v.exports.useContext(hn),n=pI();return v.exports.useCallback(async(r,o={})=>{let{action:a,method:i,encType:s,formData:l,body:u}=_I(r,t);if(o.navigate===!1){let c=o.fetcherKey||KI();await e.fetch(c,n,o.action||a,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||i,formEncType:o.encType||s,flushSync:o.flushSync})}else await e.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||i,formEncType:o.encType||s,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,n])}function XI(e,{relative:t}={}){let{basename:n}=v.exports.useContext(hn),r=v.exports.useContext(gn);be(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),a={...Ui(e||".",{relative:t})},i=Xr();if(e==null){a.search=i.search;let s=new URLSearchParams(a.search),l=s.getAll("index");if(l.some(c=>c==="")){s.delete("index"),l.filter(d=>d).forEach(d=>s.append("index",d));let c=s.toString();a.search=c?`?${c}`:""}}return(!e||e===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:Rn([n,a.pathname])),Ri(a)}function ZI(e,{relative:t}={}){let n=v.exports.useContext(Bw);be(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Xw("useViewTransitionState"),o=Ui(e,{relative:t});if(!n.isTransitioning)return!1;let a=Vn(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=Vn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ql(o.pathname,i)!=null||Ql(o.pathname,a)!=null}const Zw=JSON.parse(`{
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
}`),QI=()=>{const[e,t]=v.exports.useState(""),[n,r]=v.exports.useState(""),o=Zw.hits.filter(a=>{const i=e.toLowerCase().replace("-"," "),s=a.recipe.label.toLowerCase().includes(i),l=a.recipe.healthLabels.some(d=>d.toLowerCase().includes(i)),u=a.recipe.dietLabels.some(d=>d.toLowerCase().includes(i)),c=!n||a.recipe.healthLabels.includes(n);return(e===""||s||l||u)&&c});return T(et,{bg:"#4299E1",minH:"100vh",py:8,children:K(Vm,{maxW:"container.xl",children:[K(kw,{mb:8,flexDir:"column",children:[T(Bm,{value:e,onChange:a=>t(a.target.value),placeholder:"Search recipes...",size:"lg",maxW:"md",bg:"white",borderRadius:"md",mb:4}),K(il,{spacing:4,children:[T(ri,{colorScheme:n==="Vegetarian"?"green":"gray",onClick:()=>r(n==="Vegetarian"?"":"Vegetarian"),children:"Vegetarian"}),T(ri,{colorScheme:n==="Vegan"?"green":"gray",onClick:()=>r(n==="Vegan"?"":"Vegan"),children:"Vegan"}),T(ri,{colorScheme:n==="Pescatarian"?"green":"gray",onClick:()=>r(n==="Pescatarian"?"":"Pescatarian"),children:"Pescatarian"})]})]}),o.length===0?T(et,{bg:"white",p:8,borderRadius:"xl",textAlign:"center",children:T(ft,{fontSize:"xl",children:"No recipes found. Please try a different search term."})}):T(Fw,{columns:[1,2,3,4],spacing:6,children:o.map(a=>{var i,s;return T(Km,{to:`/recipe/${a.recipe.label}`,children:K(et,{bg:"white",borderRadius:"xl",overflow:"hidden",transition:"transform 0.2s",_hover:{transform:"scale(1.02)"},height:"450px",display:"flex",flexDirection:"column",children:[T(jm,{src:a.recipe.image,alt:a.recipe.label,height:"200px",objectFit:"cover"}),K(et,{p:4,flex:"1",display:"flex",flexDirection:"column",children:[T(ft,{fontSize:"xl",fontWeight:"semibold",mb:2,noOfLines:2,children:a.recipe.label}),K(et,{flex:"1",children:[K(il,{mb:2,children:[T(ft,{fontWeight:"bold",children:"Meal Type:"}),T(ft,{noOfLines:1,children:((i=a.recipe.mealType)==null?void 0:i[0])||"Not specified"})]}),K(il,{mb:2,children:[T(ft,{fontWeight:"bold",children:"Dish Type:"}),T(ft,{noOfLines:1,children:((s=a.recipe.dishType)==null?void 0:s[0])||"Not specified"})]})]}),K(et,{children:[a.recipe.dietLabels.length>0&&T(qr,{gap:2,flexWrap:"wrap",mb:2,children:a.recipe.dietLabels.map(l=>T(Mo,{colorScheme:"green",size:"sm",children:l},l))}),a.recipe.cautions.length>0&&T(qr,{gap:2,flexWrap:"wrap",children:a.recipe.cautions.map(l=>T(Mo,{colorScheme:"red",size:"sm",children:l},l))})]})]})]})},a.recipe.label)})})]})})},JI=()=>{var r;const{id:e}=rI(),t=Dw(),n=Zw.hits.find(o=>o.recipe.label===e);return n?T(et,{bg:"#4299E1",minH:"100vh",py:8,children:K(Vm,{maxW:"container.xl",children:[T(ri,{onClick:()=>t(-1),mb:4,variant:"solid",bg:"white",children:"Back to Overview"}),T(et,{bg:"white",borderRadius:"xl",overflow:"hidden",p:8,children:T(Rw,{spacing:6,align:"stretch",children:K(qr,{direction:{base:"column",md:"row"},gap:8,children:[T(jm,{src:n.recipe.image,alt:n.recipe.label,borderRadius:"xl",maxW:{base:"100%",md:"50%"},objectFit:"cover"}),K(et,{flex:"1",children:[T(ft,{color:"gray.500",fontSize:"sm",mb:2,textTransform:"uppercase",children:((r=n.recipe.mealType)==null?void 0:r[0])||"MEAL"}),T(sl,{as:"h1",size:"xl",mb:4,children:n.recipe.label}),K(ft,{fontSize:"lg",mb:2,children:["Total Cooking Time: ",n.recipe.totalTime===0?"Unknown":`${n.recipe.totalTime} minutes`]}),K(ft,{fontSize:"lg",mb:4,children:["Servings: ",n.recipe.yield]}),K(et,{mb:6,children:[T(sl,{as:"h2",size:"md",mb:2,children:"Ingredients:"}),T(Aw,{spacing:2,children:n.recipe.ingredientLines.map((o,a)=>T(Ew,{children:o},a))})]}),K(et,{mb:4,children:[T(ft,{fontWeight:"bold",mb:2,children:"Health labels:"}),T(qr,{flexWrap:"wrap",gap:2,children:n.recipe.healthLabels.map(o=>T(Mo,{colorScheme:"purple",textTransform:"uppercase",size:"sm",children:o},o))})]}),K(et,{mb:4,children:[T(ft,{fontWeight:"bold",mb:2,children:"Diet:"}),T(qr,{flexWrap:"wrap",gap:2,children:n.recipe.dietLabels.map(o=>T(Mo,{colorScheme:"green",textTransform:"uppercase",size:"sm",children:o},o))})]}),n.recipe.cautions.length>0&&K(et,{children:[T(ft,{fontWeight:"bold",mb:2,children:"Cautions:"}),T(qr,{flexWrap:"wrap",gap:2,children:n.recipe.cautions.map(o=>T(Mo,{colorScheme:"red",textTransform:"uppercase",size:"sm",children:o},o))})]})]})]})})})]})}):T(Center,{h:"100vh",children:T(sl,{children:"Recipe not found!"})})},ez=()=>T(OI,{children:K(bI,{children:[T(Of,{path:"/",element:T(QI,{})}),T(Of,{path:"/recipe/:id",element:T(JI,{})})]})});Bf.createRoot(document.getElementById("root")).render(T(Jl.StrictMode,{children:T(Jq,{children:T(ez,{})})}));
