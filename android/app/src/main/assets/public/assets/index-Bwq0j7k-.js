(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Md={exports:{}},Ho={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fx;function Ab(){if(fx)return Ho;fx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var m in l)m!=="key"&&(c[m]=l[m])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=e,Ho.jsx=i,Ho.jsxs=i,Ho}var dx;function wb(){return dx||(dx=1,Md.exports=Ab()),Md.exports}var g=wb(),Ed={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx;function Cb(){if(hx)return dt;hx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,S={};function y(L,F,ie){this.props=L,this.context=F,this.refs=S,this.updater=ie||A}y.prototype.isReactComponent={},y.prototype.setState=function(L,F){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,F,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function U(){}U.prototype=y.prototype;function O(L,F,ie){this.props=L,this.context=F,this.refs=S,this.updater=ie||A}var w=O.prototype=new U;w.constructor=O,C(w,y.prototype),w.isPureReactComponent=!0;var I=Array.isArray;function P(){}var z={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(L,F,ie){var k=ie.ref;return{$$typeof:r,type:L,key:F,ref:k!==void 0?k:null,props:ie}}function V(L,F){return D(L.type,F,L.props)}function H(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function Y(L){var F={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ie){return F[ie]})}var fe=/\/+/g;function xe(L,F){return typeof L=="object"&&L!==null&&L.key!=null?Y(""+L.key):F.toString(36)}function te(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(P,P):(L.status="pending",L.then(function(F){L.status==="pending"&&(L.status="fulfilled",L.value=F)},function(F){L.status==="pending"&&(L.status="rejected",L.reason=F)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function G(L,F,ie,k,de){var W=typeof L;(W==="undefined"||W==="boolean")&&(L=null);var ae=!1;if(L===null)ae=!0;else switch(W){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(L.$$typeof){case r:case e:ae=!0;break;case v:return ae=L._init,G(ae(L._payload),F,ie,k,de)}}if(ae)return de=de(L),ae=k===""?"."+xe(L,0):k,I(de)?(ie="",ae!=null&&(ie=ae.replace(fe,"$&/")+"/"),G(de,F,ie,"",function(Te){return Te})):de!=null&&(H(de)&&(de=V(de,ie+(de.key==null||L&&L.key===de.key?"":(""+de.key).replace(fe,"$&/")+"/")+ae)),F.push(de)),1;ae=0;var ge=k===""?".":k+":";if(I(L))for(var Oe=0;Oe<L.length;Oe++)k=L[Oe],W=ge+xe(k,Oe),ae+=G(k,F,ie,W,de);else if(Oe=M(L),typeof Oe=="function")for(L=Oe.call(L),Oe=0;!(k=L.next()).done;)k=k.value,W=ge+xe(k,Oe++),ae+=G(k,F,ie,W,de);else if(W==="object"){if(typeof L.then=="function")return G(te(L),F,ie,k,de);throw F=String(L),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return ae}function X(L,F,ie){if(L==null)return L;var k=[],de=0;return G(L,k,"","",function(W){return F.call(ie,W,de++)}),k}function re(L){if(L._status===-1){var F=L._result;F=F(),F.then(function(ie){(L._status===0||L._status===-1)&&(L._status=1,L._result=ie)},function(ie){(L._status===0||L._status===-1)&&(L._status=2,L._result=ie)}),L._status===-1&&(L._status=0,L._result=F)}if(L._status===1)return L._result.default;throw L._result}var q=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},ee={map:X,forEach:function(L,F,ie){X(L,function(){F.apply(this,arguments)},ie)},count:function(L){var F=0;return X(L,function(){F++}),F},toArray:function(L){return X(L,function(F){return F})||[]},only:function(L){if(!H(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return dt.Activity=_,dt.Children=ee,dt.Component=y,dt.Fragment=i,dt.Profiler=l,dt.PureComponent=O,dt.StrictMode=s,dt.Suspense=p,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,dt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},dt.cache=function(L){return function(){return L.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(L,F,ie){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var k=C({},L.props),de=L.key;if(F!=null)for(W in F.key!==void 0&&(de=""+F.key),F)!E.call(F,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&F.ref===void 0||(k[W]=F[W]);var W=arguments.length-2;if(W===1)k.children=ie;else if(1<W){for(var ae=Array(W),ge=0;ge<W;ge++)ae[ge]=arguments[ge+2];k.children=ae}return D(L.type,de,k)},dt.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},dt.createElement=function(L,F,ie){var k,de={},W=null;if(F!=null)for(k in F.key!==void 0&&(W=""+F.key),F)E.call(F,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&(de[k]=F[k]);var ae=arguments.length-2;if(ae===1)de.children=ie;else if(1<ae){for(var ge=Array(ae),Oe=0;Oe<ae;Oe++)ge[Oe]=arguments[Oe+2];de.children=ge}if(L&&L.defaultProps)for(k in ae=L.defaultProps,ae)de[k]===void 0&&(de[k]=ae[k]);return D(L,W,de)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(L){return{$$typeof:m,render:L}},dt.isValidElement=H,dt.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:re}},dt.memo=function(L,F){return{$$typeof:h,type:L,compare:F===void 0?null:F}},dt.startTransition=function(L){var F=z.T,ie={};z.T=ie;try{var k=L(),de=z.S;de!==null&&de(ie,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(P,q)}catch(W){q(W)}finally{F!==null&&ie.types!==null&&(F.types=ie.types),z.T=F}},dt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},dt.use=function(L){return z.H.use(L)},dt.useActionState=function(L,F,ie){return z.H.useActionState(L,F,ie)},dt.useCallback=function(L,F){return z.H.useCallback(L,F)},dt.useContext=function(L){return z.H.useContext(L)},dt.useDebugValue=function(){},dt.useDeferredValue=function(L,F){return z.H.useDeferredValue(L,F)},dt.useEffect=function(L,F){return z.H.useEffect(L,F)},dt.useEffectEvent=function(L){return z.H.useEffectEvent(L)},dt.useId=function(){return z.H.useId()},dt.useImperativeHandle=function(L,F,ie){return z.H.useImperativeHandle(L,F,ie)},dt.useInsertionEffect=function(L,F){return z.H.useInsertionEffect(L,F)},dt.useLayoutEffect=function(L,F){return z.H.useLayoutEffect(L,F)},dt.useMemo=function(L,F){return z.H.useMemo(L,F)},dt.useOptimistic=function(L,F){return z.H.useOptimistic(L,F)},dt.useReducer=function(L,F,ie){return z.H.useReducer(L,F,ie)},dt.useRef=function(L){return z.H.useRef(L)},dt.useState=function(L){return z.H.useState(L)},dt.useSyncExternalStore=function(L,F,ie){return z.H.useSyncExternalStore(L,F,ie)},dt.useTransition=function(){return z.H.useTransition()},dt.version="19.2.8",dt}var px;function op(){return px||(px=1,Ed.exports=Cb()),Ed.exports}var Le=op(),Td={exports:{}},Vo={},Ad={exports:{}},wd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mx;function Rb(){return mx||(mx=1,(function(r){function e(G,X){var re=G.length;G.push(X);e:for(;0<re;){var q=re-1>>>1,ee=G[q];if(0<l(ee,X))G[q]=X,G[re]=ee,re=q;else break e}}function i(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var X=G[0],re=G.pop();if(re!==X){G[0]=re;e:for(var q=0,ee=G.length,L=ee>>>1;q<L;){var F=2*(q+1)-1,ie=G[F],k=F+1,de=G[k];if(0>l(ie,re))k<ee&&0>l(de,ie)?(G[q]=de,G[k]=re,q=k):(G[q]=ie,G[F]=re,q=F);else if(k<ee&&0>l(de,re))G[q]=de,G[k]=re,q=k;else break e}}return X}function l(G,X){var re=G.sortIndex-X.sortIndex;return re!==0?re:G.id-X.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,m=d.now();r.unstable_now=function(){return d.now()-m}}var p=[],h=[],v=1,_=null,x=3,M=!1,A=!1,C=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function w(G){for(var X=i(h);X!==null;){if(X.callback===null)s(h);else if(X.startTime<=G)s(h),X.sortIndex=X.expirationTime,e(p,X);else break;X=i(h)}}function I(G){if(C=!1,w(G),!A)if(i(p)!==null)A=!0,P||(P=!0,Y());else{var X=i(h);X!==null&&te(I,X.startTime-G)}}var P=!1,z=-1,E=5,D=-1;function V(){return S?!0:!(r.unstable_now()-D<E)}function H(){if(S=!1,P){var G=r.unstable_now();D=G;var X=!0;try{e:{A=!1,C&&(C=!1,U(z),z=-1),M=!0;var re=x;try{t:{for(w(G),_=i(p);_!==null&&!(_.expirationTime>G&&V());){var q=_.callback;if(typeof q=="function"){_.callback=null,x=_.priorityLevel;var ee=q(_.expirationTime<=G);if(G=r.unstable_now(),typeof ee=="function"){_.callback=ee,w(G),X=!0;break t}_===i(p)&&s(p),w(G)}else s(p);_=i(p)}if(_!==null)X=!0;else{var L=i(h);L!==null&&te(I,L.startTime-G),X=!1}}break e}finally{_=null,x=re,M=!1}X=void 0}}finally{X?Y():P=!1}}}var Y;if(typeof O=="function")Y=function(){O(H)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,xe=fe.port2;fe.port1.onmessage=H,Y=function(){xe.postMessage(null)}}else Y=function(){y(H,0)};function te(G,X){z=y(function(){G(r.unstable_now())},X)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(G){switch(x){case 1:case 2:case 3:var X=3;break;default:X=x}var re=x;x=X;try{return G()}finally{x=re}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(G,X){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var re=x;x=G;try{return X()}finally{x=re}},r.unstable_scheduleCallback=function(G,X,re){var q=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?q+re:q):re=q,G){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=re+ee,G={id:v++,callback:X,priorityLevel:G,startTime:re,expirationTime:ee,sortIndex:-1},re>q?(G.sortIndex=re,e(h,G),i(p)===null&&G===i(h)&&(C?(U(z),z=-1):C=!0,te(I,re-q))):(G.sortIndex=ee,e(p,G),A||M||(A=!0,P||(P=!0,Y()))),G},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(G){var X=x;return function(){var re=x;x=X;try{return G.apply(this,arguments)}finally{x=re}}}})(wd)),wd}var gx;function Nb(){return gx||(gx=1,Ad.exports=Rb()),Ad.exports}var Cd={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xx;function Db(){if(xx)return zn;xx=1;var r=op();function e(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,h,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:h,implementation:v}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,zn.createPortal=function(p,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(p,h,null,v)},zn.flushSync=function(p){var h=d.T,v=s.p;try{if(d.T=null,s.p=2,p)return p()}finally{d.T=h,s.p=v,s.d.f()}},zn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(p,h))},zn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},zn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var v=h.as,_=m(v,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?s.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):v==="script"&&s.d.X(p,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},zn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=m(h.as,h.crossOrigin);s.d.M(p,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(p)},zn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,_=m(v,h.crossOrigin);s.d.L(p,v,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},zn.preloadModule=function(p,h){if(typeof p=="string")if(h){var v=m(h.as,h.crossOrigin);s.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(p)},zn.requestFormReset=function(p){s.d.r(p)},zn.unstable_batchedUpdates=function(p,h){return p(h)},zn.useFormState=function(p,h,v){return d.H.useFormState(p,h,v)},zn.useFormStatus=function(){return d.H.useHostTransitionStatus()},zn.version="19.2.8",zn}var _x;function Ub(){if(_x)return Cd.exports;_x=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Cd.exports=Db(),Cd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vx;function Lb(){if(vx)return Vo;vx=1;var r=Nb(),e=op(),i=Ub();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),t;if(f===o)return p(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var b=!1,N=u.child;N;){if(N===a){b=!0,a=u,o=f;break}if(N===o){b=!0,o=u,a=f;break}N=N.sibling}if(!b){for(N=f.child;N;){if(N===a){b=!0,a=f,o=u;break}if(N===o){b=!0,o=f,a=u;break}N=N.sibling}if(!b)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),O=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Symbol.for("react.client.reference");function xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case I:return"Suspense";case P:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case O:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:xe(t.type)||"Memo";case E:n=t._payload,t=t._init;try{return xe(t(n))}catch{}}return null}var te=Array.isArray,G=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},q=[],ee=-1;function L(t){return{current:t}}function F(t){0>ee||(t.current=q[ee],q[ee]=null,ee--)}function ie(t,n){ee++,q[ee]=t.current,t.current=n}var k=L(null),de=L(null),W=L(null),ae=L(null);function ge(t,n){switch(ie(W,n),ie(de,t),ie(k,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Og(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Og(n),t=Pg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}F(k),ie(k,t)}function Oe(){F(k),F(de),F(W)}function Te(t){t.memoizedState!==null&&ie(ae,t);var n=k.current,a=Pg(n,t.type);n!==a&&(ie(de,t),ie(k,a))}function we(t){de.current===t&&(F(k),F(de)),ae.current===t&&(F(ae),zo._currentValue=re)}var et,Ve;function Re(t){if(et===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);et=n&&n[1]||"",Ve=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+et+t+Ve}var Xe=!1;function Je(t,n){if(!t||Xe)return"";Xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Ae=function(){throw Error()};if(Object.defineProperty(Ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ae,[])}catch(_e){var me=_e}Reflect.construct(t,[],Ae)}else{try{Ae.call()}catch(_e){me=_e}t.call(Ae.prototype)}}else{try{throw Error()}catch(_e){me=_e}(Ae=t())&&typeof Ae.catch=="function"&&Ae.catch(function(){})}}catch(_e){if(_e&&me&&typeof _e.stack=="string")return[_e.stack,me.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),b=f[0],N=f[1];if(b&&N){var j=b.split(`
`),le=N.split(`
`);for(u=o=0;o<j.length&&!j[o].includes("DetermineComponentFrameRoot");)o++;for(;u<le.length&&!le[u].includes("DetermineComponentFrameRoot");)u++;if(o===j.length||u===le.length)for(o=j.length-1,u=le.length-1;1<=o&&0<=u&&j[o]!==le[u];)u--;for(;1<=o&&0<=u;o--,u--)if(j[o]!==le[u]){if(o!==1||u!==1)do if(o--,u--,0>u||j[o]!==le[u]){var Se=`
`+j[o].replace(" at new "," at ");return t.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",t.displayName)),Se}while(1<=o&&0<=u);break}}}finally{Xe=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Re(a):""}function gt(t,n){switch(t.tag){case 26:case 27:case 5:return Re(t.type);case 16:return Re("Lazy");case 13:return t.child!==n&&n!==null?Re("Suspense Fallback"):Re("Suspense");case 19:return Re("SuspenseList");case 0:case 15:return Je(t.type,!1);case 11:return Je(t.type.render,!1);case 1:return Je(t.type,!0);case 31:return Re("Activity");default:return""}}function Ut(t){try{var n="",a=null;do n+=gt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var bt=Object.prototype.hasOwnProperty,un=r.unstable_scheduleCallback,Ft=r.unstable_cancelCallback,nn=r.unstable_shouldYield,J=r.unstable_requestPaint,Lt=r.unstable_now,zt=r.unstable_getCurrentPriorityLevel,B=r.unstable_ImmediatePriority,T=r.unstable_UserBlockingPriority,se=r.unstable_NormalPriority,he=r.unstable_LowPriority,ye=r.unstable_IdlePriority,Ne=r.log,Ie=r.unstable_setDisableYieldValue,ve=null,be=null;function Ue(t){if(typeof Ne=="function"&&Ie(t),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(ve,t)}catch{}}var je=Math.clz32?Math.clz32:it,Fe=Math.log,ze=Math.LN2;function it(t){return t>>>=0,t===0?32:31-(Fe(t)/ze|0)|0}var at=256,ft=262144,K=4194304;function De(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Me(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var N=o&134217727;return N!==0?(o=N&~f,o!==0?u=De(o):(b&=N,b!==0?u=De(b):a||(a=N&~t,a!==0&&(u=De(a))))):(N=o&~f,N!==0?u=De(N):b!==0?u=De(b):a||(a=o&~t,a!==0&&(u=De(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Pe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ke(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ce(){var t=K;return K<<=1,(K&62914560)===0&&(K=4194304),t}function $e(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ye(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function an(t,n,a,o,u,f){var b=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var N=t.entanglements,j=t.expirationTimes,le=t.hiddenUpdates;for(a=b&~a;0<a;){var Se=31-je(a),Ae=1<<Se;N[Se]=0,j[Se]=-1;var me=le[Se];if(me!==null)for(le[Se]=null,Se=0;Se<me.length;Se++){var _e=me[Se];_e!==null&&(_e.lane&=-536870913)}a&=~Ae}o!==0&&Ht(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(b&~n))}function Ht(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-je(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ti(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-je(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function ni(t,n){var a=n&-n;return a=(a&42)!==0?1:Kr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Kr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Qr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Jr(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:ax(t.type))}function Ys(t,n){var a=X.p;try{return X.p=t,n()}finally{X.p=a}}var Gi=Math.random().toString(36).slice(2),gn="__reactFiber$"+Gi,Nn="__reactProps$"+Gi,Wn="__reactContainer$"+Gi,ps="__reactEvents$"+Gi,ll="__reactListeners$"+Gi,cl="__reactHandles$"+Gi,ms="__reactResources$"+Gi,Da="__reactMarker$"+Gi;function Ua(t){delete t[gn],delete t[Nn],delete t[ps],delete t[ll],delete t[cl]}function ta(t){var n=t[gn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Wn]||a[gn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Vg(t);t!==null;){if(a=t[gn])return a;t=Vg(t)}return n}t=a,a=t.parentNode}return null}function na(t){if(t=t[gn]||t[Wn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function gs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function La(t){var n=t[ms];return n||(n=t[ms]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function xn(t){t[Da]=!0}var ul=new Set,R={};function $(t,n){pe(t,n),pe(t+"Capture",n)}function pe(t,n){for(R[t]=n,t=0;t<n.length;t++)ul.add(n[t])}var ce=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ue={},Ge={};function qe(t){return bt.call(Ge,t)?!0:bt.call(ue,t)?!1:ce.test(t)?Ge[t]=!0:(ue[t]=!0,!1)}function Be(t,n,a){if(qe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ke(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ze(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function st(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){a=""+b,f.call(this,b)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(b){a=""+b},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ot(t){if(!t._valueTracker){var n=pt(t)?"checked":"value";t._valueTracker=nt(t,n,""+t[n])}}function sn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=pt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vt=/[\n"\\]/g;function kt(t){return t.replace(Vt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function We(t,n,a,o,u,f,b,N){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),n!=null?b==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+st(n)):t.value!==""+st(n)&&(t.value=""+st(n)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),n!=null?St(t,b,st(n)):a!=null?St(t,b,st(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?t.name=""+st(N):t.removeAttribute("name")}function In(t,n,a,o,u,f,b,N){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ot(t);return}a=a!=null?""+st(a):"",n=n!=null?""+st(n):a,N||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=N?t.checked:!!o,t.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b),Ot(t)}function St(t,n,a){n==="number"&&Qt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Mn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+st(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ii(t,n,a){if(n!=null&&(n=""+st(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+st(a):""}function Ni(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(te(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=st(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Ot(t)}function ai(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Xt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Xt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Di(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&rn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&rn(t,f,n[f])}function Gt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Oa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xs(t){return Oa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ia(){}var vu=null;function yu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zs=null,Ks=null;function Lp(t){var n=na(t);if(n&&(t=n.stateNode)){var a=t[Nn]||null;e:switch(t=n.stateNode,n.type){case"input":if(We(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Nn]||null;if(!u)throw Error(s(90));We(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&sn(o)}break e;case"textarea":ii(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Mn(t,!!a.multiple,n,!1)}}}var bu=!1;function Op(t,n,a){if(bu)return t(n,a);bu=!0;try{var o=t(n);return o}finally{if(bu=!1,(Zs!==null||Ks!==null)&&(Ql(),Zs&&(n=Zs,t=Ks,Ks=Zs=null,Lp(n),t)))for(n=0;n<t.length;n++)Lp(t[n])}}function $r(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Nn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(aa)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Su=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Su=!1}var Pa=null,Mu=null,fl=null;function Pp(){if(fl)return fl;var t,n=Mu,a=n.length,o,u="value"in Pa?Pa.value:Pa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var b=a-t;for(o=1;o<=b&&n[a-o]===u[f-o];o++);return fl=u.slice(t,1<o?1-o:void 0)}function dl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function hl(){return!0}function Ip(){return!1}function qn(t){function n(a,o,u,f,b){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=b,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(a=t[N],this[N]=a?a(f):f[N]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?hl:Ip,this.isPropagationStopped=Ip,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),n}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=qn(_s),to=_({},_s,{view:0,detail:0}),Ev=qn(to),Eu,Tu,no,ml=_({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(Eu=t.screenX-no.screenX,Tu=t.screenY-no.screenY):Tu=Eu=0,no=t),Eu)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),zp=qn(ml),Tv=_({},ml,{dataTransfer:0}),Av=qn(Tv),wv=_({},to,{relatedTarget:0}),Au=qn(wv),Cv=_({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),Rv=qn(Cv),Nv=_({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dv=qn(Nv),Uv=_({},_s,{data:0}),Bp=qn(Uv),Lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ov={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Pv[t])?!!n[t]:!1}function wu(){return Iv}var zv=_({},to,{key:function(t){if(t.key){var n=Lv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ov[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bv=qn(zv),Fv=_({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=qn(Fv),Gv=_({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),Hv=qn(Gv),Vv=_({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),kv=qn(Vv),Xv=_({},ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jv=qn(Xv),Wv=_({},_s,{newState:0,oldState:0}),qv=qn(Wv),Yv=[9,13,27,32],Cu=aa&&"CompositionEvent"in window,io=null;aa&&"documentMode"in document&&(io=document.documentMode);var Zv=aa&&"TextEvent"in window&&!io,Gp=aa&&(!Cu||io&&8<io&&11>=io),Hp=" ",Vp=!1;function kp(t,n){switch(t){case"keyup":return Yv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qs=!1;function Kv(t,n){switch(t){case"compositionend":return Xp(n);case"keypress":return n.which!==32?null:(Vp=!0,Hp);case"textInput":return t=n.data,t===Hp&&Vp?null:t;default:return null}}function Qv(t,n){if(Qs)return t==="compositionend"||!Cu&&kp(t,n)?(t=Pp(),fl=Mu=Pa=null,Qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gp&&n.locale!=="ko"?null:n.data;default:return null}}var Jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Jv[t.type]:n==="textarea"}function Wp(t,n,a,o){Zs?Ks?Ks.push(o):Ks=[o]:Zs=o,n=ac(n,"onChange"),0<n.length&&(a=new pl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ao=null,so=null;function $v(t){Cg(t,0)}function gl(t){var n=gs(t);if(sn(n))return t}function qp(t,n){if(t==="change")return n}var Yp=!1;if(aa){var Ru;if(aa){var Nu="oninput"in document;if(!Nu){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),Nu=typeof Zp.oninput=="function"}Ru=Nu}else Ru=!1;Yp=Ru&&(!document.documentMode||9<document.documentMode)}function Kp(){ao&&(ao.detachEvent("onpropertychange",Qp),so=ao=null)}function Qp(t){if(t.propertyName==="value"&&gl(so)){var n=[];Wp(n,so,t,yu(t)),Op($v,n)}}function ey(t,n,a){t==="focusin"?(Kp(),ao=n,so=a,ao.attachEvent("onpropertychange",Qp)):t==="focusout"&&Kp()}function ty(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gl(so)}function ny(t,n){if(t==="click")return gl(n)}function iy(t,n){if(t==="input"||t==="change")return gl(n)}function ay(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var si=typeof Object.is=="function"?Object.is:ay;function ro(t,n){if(si(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!bt.call(n,u)||!si(t[u],n[u]))return!1}return!0}function Jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $p(t,n){var a=Jp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Jp(a)}}function em(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?em(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function tm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qt(t.document)}return n}function Du(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var sy=aa&&"documentMode"in document&&11>=document.documentMode,Js=null,Uu=null,oo=null,Lu=!1;function nm(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lu||Js==null||Js!==Qt(o)||(o=Js,"selectionStart"in o&&Du(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&ro(oo,o)||(oo=o,o=ac(Uu,"onSelect"),0<o.length&&(n=new pl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Js)))}function vs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var $s={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionrun:vs("Transition","TransitionRun"),transitionstart:vs("Transition","TransitionStart"),transitioncancel:vs("Transition","TransitionCancel"),transitionend:vs("Transition","TransitionEnd")},Ou={},im={};aa&&(im=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function ys(t){if(Ou[t])return Ou[t];if(!$s[t])return t;var n=$s[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in im)return Ou[t]=n[a];return t}var am=ys("animationend"),sm=ys("animationiteration"),rm=ys("animationstart"),ry=ys("transitionrun"),oy=ys("transitionstart"),ly=ys("transitioncancel"),om=ys("transitionend"),lm=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function Ui(t,n){lm.set(t,n),$(n,[t])}var xl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},gi=[],er=0,Iu=0;function _l(){for(var t=er,n=Iu=er=0;n<t;){var a=gi[n];gi[n++]=null;var o=gi[n];gi[n++]=null;var u=gi[n];gi[n++]=null;var f=gi[n];if(gi[n++]=null,o!==null&&u!==null){var b=o.pending;b===null?u.next=u:(u.next=b.next,b.next=u),o.pending=u}f!==0&&cm(a,u,f)}}function vl(t,n,a,o){gi[er++]=t,gi[er++]=n,gi[er++]=a,gi[er++]=o,Iu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function zu(t,n,a,o){return vl(t,n,a,o),yl(t)}function bs(t,n){return vl(t,null,null,n),yl(t)}function cm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-je(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function yl(t){if(50<No)throw No=0,qf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var tr={};function cy(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(t,n,a,o){return new cy(t,n,a,o)}function Bu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sa(t,n){var a=t.alternate;return a===null?(a=ri(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function um(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function bl(t,n,a,o,u,f){var b=0;if(o=t,typeof t=="function")Bu(t)&&(b=1);else if(typeof t=="string")b=pb(t,a,k.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=ri(31,a,n,u),t.elementType=D,t.lanes=f,t;case C:return Ss(a.children,u,f,n);case S:b=8,u|=24;break;case y:return t=ri(12,a,n,u|2),t.elementType=y,t.lanes=f,t;case I:return t=ri(13,a,n,u),t.elementType=I,t.lanes=f,t;case P:return t=ri(19,a,n,u),t.elementType=P,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:b=10;break e;case U:b=9;break e;case w:b=11;break e;case z:b=14;break e;case E:b=16,o=null;break e}b=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ri(b,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function Ss(t,n,a,o){return t=ri(7,t,o,n),t.lanes=a,t}function Fu(t,n,a){return t=ri(6,t,null,n),t.lanes=a,t}function fm(t){var n=ri(18,null,null,0);return n.stateNode=t,n}function Gu(t,n,a){return n=ri(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var dm=new WeakMap;function xi(t,n){if(typeof t=="object"&&t!==null){var a=dm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ut(n)},dm.set(t,n),n)}return{value:t,source:n,stack:Ut(n)}}var nr=[],ir=0,Sl=null,lo=0,_i=[],vi=0,Ia=null,Vi=1,ki="";function ra(t,n){nr[ir++]=lo,nr[ir++]=Sl,Sl=t,lo=n}function hm(t,n,a){_i[vi++]=Vi,_i[vi++]=ki,_i[vi++]=Ia,Ia=t;var o=Vi;t=ki;var u=32-je(o)-1;o&=~(1<<u),a+=1;var f=32-je(n)+u;if(30<f){var b=u-u%5;f=(o&(1<<b)-1).toString(32),o>>=b,u-=b,Vi=1<<32-je(n)+u|a<<u|o,ki=f+t}else Vi=1<<f|a<<u|o,ki=t}function Hu(t){t.return!==null&&(ra(t,1),hm(t,1,0))}function Vu(t){for(;t===Sl;)Sl=nr[--ir],nr[ir]=null,lo=nr[--ir],nr[ir]=null;for(;t===Ia;)Ia=_i[--vi],_i[vi]=null,ki=_i[--vi],_i[vi]=null,Vi=_i[--vi],_i[vi]=null}function pm(t,n){_i[vi++]=Vi,_i[vi++]=ki,_i[vi++]=Ia,Vi=n.id,ki=n.overflow,Ia=t}var Dn=null,$t=null,wt=!1,za=null,yi=!1,ku=Error(s(519));function Ba(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw co(xi(n,t)),ku}function mm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[gn]=t,n[Nn]=o,a){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(a=0;a<Uo.length;a++)Et(Uo[a],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),In(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),Ni(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Ug(n.textContent,a)?(o.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),o.onScroll!=null&&Et("scroll",n),o.onScrollEnd!=null&&Et("scrollend",n),o.onClick!=null&&(n.onclick=ia),n=!0):n=!1,n||Ba(t,!0)}function gm(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:Dn=Dn.return}}function ar(t){if(t!==Dn)return!1;if(!wt)return gm(t),wt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ld(t.type,t.memoizedProps)),a=!a),a&&$t&&Ba(t),gm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$t=Hg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$t=Hg(t)}else n===27?(n=$t,Ja(t.type)?(t=hd,hd=null,$t=t):$t=n):$t=Dn?Si(t.stateNode.nextSibling):null;return!0}function Ms(){$t=Dn=null,wt=!1}function Xu(){var t=za;return t!==null&&(Qn===null?Qn=t:Qn.push.apply(Qn,t),za=null),t}function co(t){za===null?za=[t]:za.push(t)}var ju=L(null),Es=null,oa=null;function Fa(t,n,a){ie(ju,n._currentValue),n._currentValue=a}function la(t){t._currentValue=ju.current,F(ju)}function Wu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function qu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var b=u.child;f=f.firstContext;e:for(;f!==null;){var N=f;f=u;for(var j=0;j<n.length;j++)if(N.context===n[j]){f.lanes|=a,N=f.alternate,N!==null&&(N.lanes|=a),Wu(f.return,a,t),o||(b=null);break e}f=N.next}}else if(u.tag===18){if(b=u.return,b===null)throw Error(s(341));b.lanes|=a,f=b.alternate,f!==null&&(f.lanes|=a),Wu(b,a,t),b=null}else b=u.child;if(b!==null)b.return=u;else for(b=u;b!==null;){if(b===t){b=null;break}if(u=b.sibling,u!==null){u.return=b.return,b=u;break}b=b.return}u=b}}function sr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var b=u.alternate;if(b===null)throw Error(s(387));if(b=b.memoizedProps,b!==null){var N=u.type;si(u.pendingProps.value,b.value)||(t!==null?t.push(N):t=[N])}}else if(u===ae.current){if(b=u.alternate,b===null)throw Error(s(387));b.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(zo):t=[zo])}u=u.return}t!==null&&qu(n,t,a,o),n.flags|=262144}function Ml(t){for(t=t.firstContext;t!==null;){if(!si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ts(t){Es=t,oa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Un(t){return xm(Es,t)}function El(t,n){return Es===null&&Ts(t),xm(t,n)}function xm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},oa===null){if(t===null)throw Error(s(308));oa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else oa=oa.next=n;return a}var uy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},fy=r.unstable_scheduleCallback,dy=r.unstable_NormalPriority,_n={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new uy,data:new Map,refCount:0}}function uo(t){t.refCount--,t.refCount===0&&fy(dy,function(){t.controller.abort()})}var fo=null,Zu=0,rr=0,or=null;function hy(t,n){if(fo===null){var a=fo=[];Zu=0,rr=$f(),or={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Zu++,n.then(_m,_m),n}function _m(){if(--Zu===0&&fo!==null){or!==null&&(or.status="fulfilled");var t=fo;fo=null,rr=0,or=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function py(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var vm=G.S;G.S=function(t,n){ng=Lt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&hy(t,n),vm!==null&&vm(t,n)};var As=L(null);function Ku(){var t=As.current;return t!==null?t:Jt.pooledCache}function Tl(t,n){n===null?ie(As,As.current):ie(As,n.pool)}function ym(){var t=Ku();return t===null?null:{parent:_n._currentValue,pool:t}}var lr=Error(s(460)),Qu=Error(s(474)),Al=Error(s(542)),wl={then:function(){}};function bm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Sm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ia,ia),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Em(t),t;default:if(typeof n.status=="string")n.then(ia,ia);else{if(t=Jt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Em(t),t}throw Cs=n,lr}}function ws(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Cs=a,lr):a}}var Cs=null;function Mm(){if(Cs===null)throw Error(s(459));var t=Cs;return Cs=null,t}function Em(t){if(t===lr||t===Al)throw Error(s(483))}var cr=null,ho=0;function Cl(t){var n=ho;return ho+=1,cr===null&&(cr=[]),Sm(cr,t,n)}function po(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Rl(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Tm(t){function n(ne,Z){if(t){var oe=ne.deletions;oe===null?(ne.deletions=[Z],ne.flags|=16):oe.push(Z)}}function a(ne,Z){if(!t)return null;for(;Z!==null;)n(ne,Z),Z=Z.sibling;return null}function o(ne){for(var Z=new Map;ne!==null;)ne.key!==null?Z.set(ne.key,ne):Z.set(ne.index,ne),ne=ne.sibling;return Z}function u(ne,Z){return ne=sa(ne,Z),ne.index=0,ne.sibling=null,ne}function f(ne,Z,oe){return ne.index=oe,t?(oe=ne.alternate,oe!==null?(oe=oe.index,oe<Z?(ne.flags|=67108866,Z):oe):(ne.flags|=67108866,Z)):(ne.flags|=1048576,Z)}function b(ne){return t&&ne.alternate===null&&(ne.flags|=67108866),ne}function N(ne,Z,oe,Ee){return Z===null||Z.tag!==6?(Z=Fu(oe,ne.mode,Ee),Z.return=ne,Z):(Z=u(Z,oe),Z.return=ne,Z)}function j(ne,Z,oe,Ee){var rt=oe.type;return rt===C?Se(ne,Z,oe.props.children,Ee,oe.key):Z!==null&&(Z.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===E&&ws(rt)===Z.type)?(Z=u(Z,oe.props),po(Z,oe),Z.return=ne,Z):(Z=bl(oe.type,oe.key,oe.props,null,ne.mode,Ee),po(Z,oe),Z.return=ne,Z)}function le(ne,Z,oe,Ee){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==oe.containerInfo||Z.stateNode.implementation!==oe.implementation?(Z=Gu(oe,ne.mode,Ee),Z.return=ne,Z):(Z=u(Z,oe.children||[]),Z.return=ne,Z)}function Se(ne,Z,oe,Ee,rt){return Z===null||Z.tag!==7?(Z=Ss(oe,ne.mode,Ee,rt),Z.return=ne,Z):(Z=u(Z,oe),Z.return=ne,Z)}function Ae(ne,Z,oe){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Fu(""+Z,ne.mode,oe),Z.return=ne,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case M:return oe=bl(Z.type,Z.key,Z.props,null,ne.mode,oe),po(oe,Z),oe.return=ne,oe;case A:return Z=Gu(Z,ne.mode,oe),Z.return=ne,Z;case E:return Z=ws(Z),Ae(ne,Z,oe)}if(te(Z)||Y(Z))return Z=Ss(Z,ne.mode,oe,null),Z.return=ne,Z;if(typeof Z.then=="function")return Ae(ne,Cl(Z),oe);if(Z.$$typeof===O)return Ae(ne,El(ne,Z),oe);Rl(ne,Z)}return null}function me(ne,Z,oe,Ee){var rt=Z!==null?Z.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return rt!==null?null:N(ne,Z,""+oe,Ee);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case M:return oe.key===rt?j(ne,Z,oe,Ee):null;case A:return oe.key===rt?le(ne,Z,oe,Ee):null;case E:return oe=ws(oe),me(ne,Z,oe,Ee)}if(te(oe)||Y(oe))return rt!==null?null:Se(ne,Z,oe,Ee,null);if(typeof oe.then=="function")return me(ne,Z,Cl(oe),Ee);if(oe.$$typeof===O)return me(ne,Z,El(ne,oe),Ee);Rl(ne,oe)}return null}function _e(ne,Z,oe,Ee,rt){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number"||typeof Ee=="bigint")return ne=ne.get(oe)||null,N(Z,ne,""+Ee,rt);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case M:return ne=ne.get(Ee.key===null?oe:Ee.key)||null,j(Z,ne,Ee,rt);case A:return ne=ne.get(Ee.key===null?oe:Ee.key)||null,le(Z,ne,Ee,rt);case E:return Ee=ws(Ee),_e(ne,Z,oe,Ee,rt)}if(te(Ee)||Y(Ee))return ne=ne.get(oe)||null,Se(Z,ne,Ee,rt,null);if(typeof Ee.then=="function")return _e(ne,Z,oe,Cl(Ee),rt);if(Ee.$$typeof===O)return _e(ne,Z,oe,El(Z,Ee),rt);Rl(Z,Ee)}return null}function Qe(ne,Z,oe,Ee){for(var rt=null,Pt=null,tt=Z,xt=Z=0,At=null;tt!==null&&xt<oe.length;xt++){tt.index>xt?(At=tt,tt=null):At=tt.sibling;var It=me(ne,tt,oe[xt],Ee);if(It===null){tt===null&&(tt=At);break}t&&tt&&It.alternate===null&&n(ne,tt),Z=f(It,Z,xt),Pt===null?rt=It:Pt.sibling=It,Pt=It,tt=At}if(xt===oe.length)return a(ne,tt),wt&&ra(ne,xt),rt;if(tt===null){for(;xt<oe.length;xt++)tt=Ae(ne,oe[xt],Ee),tt!==null&&(Z=f(tt,Z,xt),Pt===null?rt=tt:Pt.sibling=tt,Pt=tt);return wt&&ra(ne,xt),rt}for(tt=o(tt);xt<oe.length;xt++)At=_e(tt,ne,xt,oe[xt],Ee),At!==null&&(t&&At.alternate!==null&&tt.delete(At.key===null?xt:At.key),Z=f(At,Z,xt),Pt===null?rt=At:Pt.sibling=At,Pt=At);return t&&tt.forEach(function(is){return n(ne,is)}),wt&&ra(ne,xt),rt}function ot(ne,Z,oe,Ee){if(oe==null)throw Error(s(151));for(var rt=null,Pt=null,tt=Z,xt=Z=0,At=null,It=oe.next();tt!==null&&!It.done;xt++,It=oe.next()){tt.index>xt?(At=tt,tt=null):At=tt.sibling;var is=me(ne,tt,It.value,Ee);if(is===null){tt===null&&(tt=At);break}t&&tt&&is.alternate===null&&n(ne,tt),Z=f(is,Z,xt),Pt===null?rt=is:Pt.sibling=is,Pt=is,tt=At}if(It.done)return a(ne,tt),wt&&ra(ne,xt),rt;if(tt===null){for(;!It.done;xt++,It=oe.next())It=Ae(ne,It.value,Ee),It!==null&&(Z=f(It,Z,xt),Pt===null?rt=It:Pt.sibling=It,Pt=It);return wt&&ra(ne,xt),rt}for(tt=o(tt);!It.done;xt++,It=oe.next())It=_e(tt,ne,xt,It.value,Ee),It!==null&&(t&&It.alternate!==null&&tt.delete(It.key===null?xt:It.key),Z=f(It,Z,xt),Pt===null?rt=It:Pt.sibling=It,Pt=It);return t&&tt.forEach(function(Tb){return n(ne,Tb)}),wt&&ra(ne,xt),rt}function Kt(ne,Z,oe,Ee){if(typeof oe=="object"&&oe!==null&&oe.type===C&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case M:e:{for(var rt=oe.key;Z!==null;){if(Z.key===rt){if(rt=oe.type,rt===C){if(Z.tag===7){a(ne,Z.sibling),Ee=u(Z,oe.props.children),Ee.return=ne,ne=Ee;break e}}else if(Z.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===E&&ws(rt)===Z.type){a(ne,Z.sibling),Ee=u(Z,oe.props),po(Ee,oe),Ee.return=ne,ne=Ee;break e}a(ne,Z);break}else n(ne,Z);Z=Z.sibling}oe.type===C?(Ee=Ss(oe.props.children,ne.mode,Ee,oe.key),Ee.return=ne,ne=Ee):(Ee=bl(oe.type,oe.key,oe.props,null,ne.mode,Ee),po(Ee,oe),Ee.return=ne,ne=Ee)}return b(ne);case A:e:{for(rt=oe.key;Z!==null;){if(Z.key===rt)if(Z.tag===4&&Z.stateNode.containerInfo===oe.containerInfo&&Z.stateNode.implementation===oe.implementation){a(ne,Z.sibling),Ee=u(Z,oe.children||[]),Ee.return=ne,ne=Ee;break e}else{a(ne,Z);break}else n(ne,Z);Z=Z.sibling}Ee=Gu(oe,ne.mode,Ee),Ee.return=ne,ne=Ee}return b(ne);case E:return oe=ws(oe),Kt(ne,Z,oe,Ee)}if(te(oe))return Qe(ne,Z,oe,Ee);if(Y(oe)){if(rt=Y(oe),typeof rt!="function")throw Error(s(150));return oe=rt.call(oe),ot(ne,Z,oe,Ee)}if(typeof oe.then=="function")return Kt(ne,Z,Cl(oe),Ee);if(oe.$$typeof===O)return Kt(ne,Z,El(ne,oe),Ee);Rl(ne,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,Z!==null&&Z.tag===6?(a(ne,Z.sibling),Ee=u(Z,oe),Ee.return=ne,ne=Ee):(a(ne,Z),Ee=Fu(oe,ne.mode,Ee),Ee.return=ne,ne=Ee),b(ne)):a(ne,Z)}return function(ne,Z,oe,Ee){try{ho=0;var rt=Kt(ne,Z,oe,Ee);return cr=null,rt}catch(tt){if(tt===lr||tt===Al)throw tt;var Pt=ri(29,tt,null,ne.mode);return Pt.lanes=Ee,Pt.return=ne,Pt}finally{}}}var Rs=Tm(!0),Am=Tm(!1),Ga=!1;function Ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Va(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Bt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=yl(t),cm(t,null,a),n}return vl(t,o,n,a),yl(t)}function mo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ti(t,a)}}function ef(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=b:f=f.next=b,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var tf=!1;function go(){if(tf){var t=or;if(t!==null)throw t}}function xo(t,n,a,o){tf=!1;var u=t.updateQueue;Ga=!1;var f=u.firstBaseUpdate,b=u.lastBaseUpdate,N=u.shared.pending;if(N!==null){u.shared.pending=null;var j=N,le=j.next;j.next=null,b===null?f=le:b.next=le,b=j;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,N=Se.lastBaseUpdate,N!==b&&(N===null?Se.firstBaseUpdate=le:N.next=le,Se.lastBaseUpdate=j))}if(f!==null){var Ae=u.baseState;b=0,Se=le=j=null,N=f;do{var me=N.lane&-536870913,_e=me!==N.lane;if(_e?(Tt&me)===me:(o&me)===me){me!==0&&me===rr&&(tf=!0),Se!==null&&(Se=Se.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var Qe=t,ot=N;me=n;var Kt=a;switch(ot.tag){case 1:if(Qe=ot.payload,typeof Qe=="function"){Ae=Qe.call(Kt,Ae,me);break e}Ae=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=ot.payload,me=typeof Qe=="function"?Qe.call(Kt,Ae,me):Qe,me==null)break e;Ae=_({},Ae,me);break e;case 2:Ga=!0}}me=N.callback,me!==null&&(t.flags|=64,_e&&(t.flags|=8192),_e=u.callbacks,_e===null?u.callbacks=[me]:_e.push(me))}else _e={lane:me,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Se===null?(le=Se=_e,j=Ae):Se=Se.next=_e,b|=me;if(N=N.next,N===null){if(N=u.shared.pending,N===null)break;_e=N,N=_e.next,_e.next=null,u.lastBaseUpdate=_e,u.shared.pending=null}}while(!0);Se===null&&(j=Ae),u.baseState=j,u.firstBaseUpdate=le,u.lastBaseUpdate=Se,f===null&&(u.shared.lanes=0),qa|=b,t.lanes=b,t.memoizedState=Ae}}function wm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Cm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)wm(a[t],n)}var ur=L(null),Nl=L(0);function Rm(t,n){t=xa,ie(Nl,t),ie(ur,n),xa=t|n.baseLanes}function nf(){ie(Nl,xa),ie(ur,ur.current)}function af(){xa=Nl.current,F(ur),F(Nl)}var oi=L(null),bi=null;function ka(t){var n=t.alternate;ie(hn,hn.current&1),ie(oi,t),bi===null&&(n===null||ur.current!==null||n.memoizedState!==null)&&(bi=t)}function sf(t){ie(hn,hn.current),ie(oi,t),bi===null&&(bi=t)}function Nm(t){t.tag===22?(ie(hn,hn.current),ie(oi,t),bi===null&&(bi=t)):Xa()}function Xa(){ie(hn,hn.current),ie(oi,oi.current)}function li(t){F(oi),bi===t&&(bi=null),F(hn)}var hn=L(0);function Dl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fd(a)||dd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ca=0,mt=null,Yt=null,vn=null,Ul=!1,fr=!1,Ns=!1,Ll=0,_o=0,dr=null,my=0;function fn(){throw Error(s(321))}function rf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!si(t[a],n[a]))return!1;return!0}function of(t,n,a,o,u,f){return ca=f,mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,G.H=t===null||t.memoizedState===null?h0:Sf,Ns=!1,f=a(o,u),Ns=!1,fr&&(f=Um(n,a,o,u)),Dm(t),f}function Dm(t){G.H=bo;var n=Yt!==null&&Yt.next!==null;if(ca=0,vn=Yt=mt=null,Ul=!1,_o=0,dr=null,n)throw Error(s(300));t===null||yn||(t=t.dependencies,t!==null&&Ml(t)&&(yn=!0))}function Um(t,n,a,o){mt=t;var u=0;do{if(fr&&(dr=null),_o=0,fr=!1,25<=u)throw Error(s(301));if(u+=1,vn=Yt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}G.H=p0,f=n(a,o)}while(fr);return f}function gy(){var t=G.H,n=t.useState()[0];return n=typeof n.then=="function"?vo(n):n,t=t.useState()[0],(Yt!==null?Yt.memoizedState:null)!==t&&(mt.flags|=1024),n}function lf(){var t=Ll!==0;return Ll=0,t}function cf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function uf(t){if(Ul){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ul=!1}ca=0,vn=Yt=mt=null,fr=!1,_o=Ll=0,dr=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?mt.memoizedState=vn=t:vn=vn.next=t,vn}function pn(){if(Yt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var n=vn===null?mt.memoizedState:vn.next;if(n!==null)vn=n,Yt=t;else{if(t===null)throw mt.alternate===null?Error(s(467)):Error(s(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},vn===null?mt.memoizedState=vn=t:vn=vn.next=t}return vn}function Ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(t){var n=_o;return _o+=1,dr===null&&(dr=[]),t=Sm(dr,t,n),n=mt,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,G.H=n===null||n.memoizedState===null?h0:Sf),t}function Pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return vo(t);if(t.$$typeof===O)return Un(t)}throw Error(s(438,String(t)))}function ff(t){var n=null,a=mt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ol(),mt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=V;return n.index++,a}function ua(t,n){return typeof n=="function"?n(t):n}function Il(t){var n=pn();return df(n,Yt,t)}function df(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var b=u.next;u.next=f.next,f.next=b}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var N=b=null,j=null,le=n,Se=!1;do{var Ae=le.lane&-536870913;if(Ae!==le.lane?(Tt&Ae)===Ae:(ca&Ae)===Ae){var me=le.revertLane;if(me===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),Ae===rr&&(Se=!0);else if((ca&me)===me){le=le.next,me===rr&&(Se=!0);continue}else Ae={lane:0,revertLane:le.revertLane,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},j===null?(N=j=Ae,b=f):j=j.next=Ae,mt.lanes|=me,qa|=me;Ae=le.action,Ns&&a(f,Ae),f=le.hasEagerState?le.eagerState:a(f,Ae)}else me={lane:Ae,revertLane:le.revertLane,gesture:le.gesture,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},j===null?(N=j=me,b=f):j=j.next=me,mt.lanes|=Ae,qa|=Ae;le=le.next}while(le!==null&&le!==n);if(j===null?b=f:j.next=N,!si(f,t.memoizedState)&&(yn=!0,Se&&(a=or,a!==null)))throw a;t.memoizedState=f,t.baseState=b,t.baseQueue=j,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function hf(t){var n=pn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do f=t(f,b.action),b=b.next;while(b!==u);si(f,n.memoizedState)||(yn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Lm(t,n,a){var o=mt,u=pn(),f=wt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var b=!si((Yt||u).memoizedState,a);if(b&&(u.memoizedState=a,yn=!0),u=u.queue,gf(Im.bind(null,o,u,t),[t]),u.getSnapshot!==n||b||vn!==null&&vn.memoizedState.tag&1){if(o.flags|=2048,hr(9,{destroy:void 0},Pm.bind(null,o,u,a,n),null),Jt===null)throw Error(s(349));f||(ca&127)!==0||Om(o,n,a)}return a}function Om(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=mt.updateQueue,n===null?(n=Ol(),mt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Pm(t,n,a,o){n.value=a,n.getSnapshot=o,zm(n)&&Bm(t)}function Im(t,n,a){return a(function(){zm(n)&&Bm(t)})}function zm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!si(t,a)}catch{return!0}}function Bm(t){var n=bs(t,2);n!==null&&Jn(n,t,2)}function pf(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),Ns){Ue(!0);try{a()}finally{Ue(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},n}function Fm(t,n,a,o){return t.baseState=a,df(t,Yt,typeof o=="function"?o:ua)}function xy(t,n,a,o,u){if(Fl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){f.listeners.push(b)}};G.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Gm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Gm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=G.T,b={};G.T=b;try{var N=a(u,o),j=G.S;j!==null&&j(b,N),Hm(t,n,N)}catch(le){mf(t,n,le)}finally{f!==null&&b.types!==null&&(f.types=b.types),G.T=f}}else try{f=a(u,o),Hm(t,n,f)}catch(le){mf(t,n,le)}}function Hm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Vm(t,n,o)},function(o){return mf(t,n,o)}):Vm(t,n,a)}function Vm(t,n,a){n.status="fulfilled",n.value=a,km(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Gm(t,a)))}function mf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,km(n),n=n.next;while(n!==o)}t.action=null}function km(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Xm(t,n){return n}function jm(t,n){if(wt){var a=Jt.formState;if(a!==null){e:{var o=mt;if(wt){if($t){t:{for(var u=$t,f=yi;u.nodeType!==8;){if(!f){u=null;break t}if(u=Si(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){$t=Si(u.nextSibling),o=u.data==="F!";break e}}Ba(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xm,lastRenderedState:n},a.queue=o,a=u0.bind(null,mt,o),o.dispatch=a,o=pf(!1),f=bf.bind(null,mt,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=xy.bind(null,mt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Wm(t){var n=pn();return qm(n,Yt,t)}function qm(t,n,a){if(n=df(t,n,Xm)[0],t=Il(ua)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=vo(n)}catch(b){throw b===lr?Al:b}else o=n;n=pn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(mt.flags|=2048,hr(9,{destroy:void 0},_y.bind(null,u,a),null)),[o,f,t]}function _y(t,n){t.action=n}function Ym(t){var n=pn(),a=Yt;if(a!==null)return qm(n,a,t);pn(),n=n.memoizedState,a=pn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function hr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=mt.updateQueue,n===null&&(n=Ol(),mt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Zm(){return pn().memoizedState}function zl(t,n,a,o){var u=Hn();mt.flags|=t,u.memoizedState=hr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Bl(t,n,a,o){var u=pn();o=o===void 0?null:o;var f=u.memoizedState.inst;Yt!==null&&o!==null&&rf(o,Yt.memoizedState.deps)?u.memoizedState=hr(n,f,a,o):(mt.flags|=t,u.memoizedState=hr(1|n,f,a,o))}function Km(t,n){zl(8390656,8,t,n)}function gf(t,n){Bl(2048,8,t,n)}function vy(t){mt.flags|=4;var n=mt.updateQueue;if(n===null)n=Ol(),mt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Qm(t){var n=pn().memoizedState;return vy({ref:n,nextImpl:t}),function(){if((Bt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Jm(t,n){return Bl(4,2,t,n)}function $m(t,n){return Bl(4,4,t,n)}function e0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function t0(t,n,a){a=a!=null?a.concat([t]):null,Bl(4,4,e0.bind(null,n,t),a)}function xf(){}function n0(t,n){var a=pn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&rf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function i0(t,n){var a=pn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&rf(n,o[1]))return o[0];if(o=t(),Ns){Ue(!0);try{t()}finally{Ue(!1)}}return a.memoizedState=[o,n],o}function _f(t,n,a){return a===void 0||(ca&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=ag(),mt.lanes|=t,qa|=t,a)}function a0(t,n,a,o){return si(a,n)?a:ur.current!==null?(t=_f(t,a,o),si(t,n)||(yn=!0),t):(ca&42)===0||(ca&1073741824)!==0&&(Tt&261930)===0?(yn=!0,t.memoizedState=a):(t=ag(),mt.lanes|=t,qa|=t,n)}function s0(t,n,a,o,u){var f=X.p;X.p=f!==0&&8>f?f:8;var b=G.T,N={};G.T=N,bf(t,!1,n,a);try{var j=u(),le=G.S;if(le!==null&&le(N,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var Se=py(j,o);yo(t,n,Se,fi(t))}else yo(t,n,o,fi(t))}catch(Ae){yo(t,n,{then:function(){},status:"rejected",reason:Ae},fi())}finally{X.p=f,b!==null&&N.types!==null&&(b.types=N.types),G.T=b}}function yy(){}function vf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=r0(t).queue;s0(t,u,n,re,a===null?yy:function(){return o0(t),a(o)})}function r0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:re},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function o0(t){var n=r0(t);n.next===null&&(n=t.alternate.memoizedState),yo(t,n.next.queue,{},fi())}function yf(){return Un(zo)}function l0(){return pn().memoizedState}function c0(){return pn().memoizedState}function by(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=fi();t=Ha(a);var o=Va(n,t,a);o!==null&&(Jn(o,n,a),mo(o,n,a)),n={cache:Yu()},t.payload=n;return}n=n.return}}function Sy(t,n,a){var o=fi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fl(t)?f0(n,a):(a=zu(t,n,a,o),a!==null&&(Jn(a,t,o),d0(a,n,o)))}function u0(t,n,a){var o=fi();yo(t,n,a,o)}function yo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fl(t))f0(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var b=n.lastRenderedState,N=f(b,a);if(u.hasEagerState=!0,u.eagerState=N,si(N,b))return vl(t,n,u,0),Jt===null&&_l(),!1}catch{}finally{}if(a=zu(t,n,u,o),a!==null)return Jn(a,t,o),d0(a,n,o),!0}return!1}function bf(t,n,a,o){if(o={lane:2,revertLane:$f(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Fl(t)){if(n)throw Error(s(479))}else n=zu(t,a,o,2),n!==null&&Jn(n,t,2)}function Fl(t){var n=t.alternate;return t===mt||n!==null&&n===mt}function f0(t,n){fr=Ul=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function d0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ti(t,a)}}var bo={readContext:Un,use:Pl,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn};bo.useEffectEvent=fn;var h0={readContext:Un,use:Pl,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:Un,useEffect:Km,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,zl(4194308,4,e0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return zl(4194308,4,t,n)},useInsertionEffect:function(t,n){zl(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var o=t();if(Ns){Ue(!0);try{t()}finally{Ue(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(Ns){Ue(!0);try{a(n)}finally{Ue(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Sy.bind(null,mt,t),[o.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=pf(t);var n=t.queue,a=u0.bind(null,mt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:xf,useDeferredValue:function(t,n){var a=Hn();return _f(a,t,n)},useTransition:function(){var t=pf(!1);return t=s0.bind(null,mt,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=mt,u=Hn();if(wt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Jt===null)throw Error(s(349));(Tt&127)!==0||Om(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Km(Im.bind(null,o,f,t),[t]),o.flags|=2048,hr(9,{destroy:void 0},Pm.bind(null,o,f,a,n),null),a},useId:function(){var t=Hn(),n=Jt.identifierPrefix;if(wt){var a=ki,o=Vi;a=(o&~(1<<32-je(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ll++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=my++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:yf,useFormState:jm,useActionState:jm,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=bf.bind(null,mt,!0,a),a.dispatch=n,[t,n]},useMemoCache:ff,useCacheRefresh:function(){return Hn().memoizedState=by.bind(null,mt)},useEffectEvent:function(t){var n=Hn(),a={impl:t};return n.memoizedState=a,function(){if((Bt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Sf={readContext:Un,use:Pl,useCallback:n0,useContext:Un,useEffect:gf,useImperativeHandle:t0,useInsertionEffect:Jm,useLayoutEffect:$m,useMemo:i0,useReducer:Il,useRef:Zm,useState:function(){return Il(ua)},useDebugValue:xf,useDeferredValue:function(t,n){var a=pn();return a0(a,Yt.memoizedState,t,n)},useTransition:function(){var t=Il(ua)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:vo(t),n]},useSyncExternalStore:Lm,useId:l0,useHostTransitionStatus:yf,useFormState:Wm,useActionState:Wm,useOptimistic:function(t,n){var a=pn();return Fm(a,Yt,t,n)},useMemoCache:ff,useCacheRefresh:c0};Sf.useEffectEvent=Qm;var p0={readContext:Un,use:Pl,useCallback:n0,useContext:Un,useEffect:gf,useImperativeHandle:t0,useInsertionEffect:Jm,useLayoutEffect:$m,useMemo:i0,useReducer:hf,useRef:Zm,useState:function(){return hf(ua)},useDebugValue:xf,useDeferredValue:function(t,n){var a=pn();return Yt===null?_f(a,t,n):a0(a,Yt.memoizedState,t,n)},useTransition:function(){var t=hf(ua)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:vo(t),n]},useSyncExternalStore:Lm,useId:l0,useHostTransitionStatus:yf,useFormState:Ym,useActionState:Ym,useOptimistic:function(t,n){var a=pn();return Yt!==null?Fm(a,Yt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ff,useCacheRefresh:c0};p0.useEffectEvent=Qm;function Mf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ef={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=fi(),u=Ha(o);u.payload=n,a!=null&&(u.callback=a),n=Va(t,u,o),n!==null&&(Jn(n,t,o),mo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=fi(),u=Ha(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Va(t,u,o),n!==null&&(Jn(n,t,o),mo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=fi(),o=Ha(a);o.tag=2,n!=null&&(o.callback=n),n=Va(t,o,a),n!==null&&(Jn(n,t,a),mo(n,t,a))}};function m0(t,n,a,o,u,f,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,b):n.prototype&&n.prototype.isPureReactComponent?!ro(a,o)||!ro(u,f):!0}function g0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Ef.enqueueReplaceState(n,n.state,null)}function Ds(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function x0(t){xl(t)}function _0(t){console.error(t)}function v0(t){xl(t)}function Gl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function y0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tf(t,n,a){return a=Ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Gl(t,n)},a}function b0(t){return t=Ha(t),t.tag=3,t}function S0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){y0(n,a,o)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){y0(n,a,o),typeof u!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var N=o.stack;this.componentDidCatch(o.value,{componentStack:N!==null?N:""})})}function My(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&sr(n,a,u,!0),a=oi.current,a!==null){switch(a.tag){case 31:case 13:return bi===null?Jl():a.alternate===null&&dn===0&&(dn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Kf(t,o,u)),!1;case 22:return a.flags|=65536,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Kf(t,o,u)),!1}throw Error(s(435,a.tag))}return Kf(t,o,u),Jl(),!1}if(wt)return n=oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==ku&&(t=Error(s(422),{cause:o}),co(xi(t,a)))):(o!==ku&&(n=Error(s(423),{cause:o}),co(xi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=xi(o,a),u=Tf(t.stateNode,o,u),ef(t,u),dn!==4&&(dn=2)),!1;var f=Error(s(520),{cause:o});if(f=xi(f,a),Ro===null?Ro=[f]:Ro.push(f),dn!==4&&(dn=2),n===null)return!0;o=xi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Tf(a.stateNode,o,t),ef(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ya===null||!Ya.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=b0(u),S0(u,t,a,o),ef(a,u),!1}a=a.return}while(a!==null);return!1}var Af=Error(s(461)),yn=!1;function Ln(t,n,a,o){n.child=t===null?Am(n,null,a,o):Rs(n,t.child,a,o)}function M0(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var b={};for(var N in o)N!=="ref"&&(b[N]=o[N])}else b=o;return Ts(n),o=of(t,n,a,b,f,u),N=lf(),t!==null&&!yn?(cf(t,n,u),fa(t,n,u)):(wt&&N&&Hu(n),n.flags|=1,Ln(t,n,o,u),n.child)}function E0(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Bu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,T0(t,n,f,o,u)):(t=bl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Of(t,u)){var b=f.memoizedProps;if(a=a.compare,a=a!==null?a:ro,a(b,o)&&t.ref===n.ref)return fa(t,n,u)}return n.flags|=1,t=sa(f,o),t.ref=n.ref,t.return=n,n.child=t}function T0(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(ro(f,o)&&t.ref===n.ref)if(yn=!1,n.pendingProps=o=f,Of(t,u))(t.flags&131072)!==0&&(yn=!0);else return n.lanes=t.lanes,fa(t,n,u)}return wf(t,n,a,o,u)}function A0(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return w0(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Tl(n,f!==null?f.cachePool:null),f!==null?Rm(n,f):nf(),Nm(n);else return o=n.lanes=536870912,w0(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Tl(n,f.cachePool),Rm(n,f),Xa(),n.memoizedState=null):(t!==null&&Tl(n,null),nf(),Xa());return Ln(t,n,u,a),n.child}function So(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function w0(t,n,a,o,u){var f=Ku();return f=f===null?null:{parent:_n._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Tl(n,null),nf(),Nm(n),t!==null&&sr(t,n,o,!0),n.childLanes=u,null}function Hl(t,n){return n=kl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function C0(t,n,a){return Rs(n,t.child,null,a),t=Hl(n,n.pendingProps),t.flags|=2,li(n),n.memoizedState=null,t}function Ey(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(wt){if(o.mode==="hidden")return t=Hl(n,o),n.lanes=536870912,So(null,t);if(sf(n),(t=$t)?(t=Gg(t,yi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},a=fm(t),a.return=n,n.child=a,Dn=n,$t=null)):t=null,t===null)throw Ba(n);return n.lanes=536870912,null}return Hl(n,o)}var f=t.memoizedState;if(f!==null){var b=f.dehydrated;if(sf(n),u)if(n.flags&256)n.flags&=-257,n=C0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(yn||sr(t,n,a,!1),u=(a&t.childLanes)!==0,yn||u){if(o=Jt,o!==null&&(b=ni(o,a),b!==0&&b!==f.retryLane))throw f.retryLane=b,bs(t,b),Jn(o,t,b),Af;Jl(),n=C0(t,n,a)}else t=f.treeContext,$t=Si(b.nextSibling),Dn=n,wt=!0,za=null,yi=!1,t!==null&&pm(n,t),n=Hl(n,o),n.flags|=4096;return n}return t=sa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Vl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function wf(t,n,a,o,u){return Ts(n),a=of(t,n,a,o,void 0,u),o=lf(),t!==null&&!yn?(cf(t,n,u),fa(t,n,u)):(wt&&o&&Hu(n),n.flags|=1,Ln(t,n,a,u),n.child)}function R0(t,n,a,o,u,f){return Ts(n),n.updateQueue=null,a=Um(n,o,a,u),Dm(t),o=lf(),t!==null&&!yn?(cf(t,n,f),fa(t,n,f)):(wt&&o&&Hu(n),n.flags|=1,Ln(t,n,a,f),n.child)}function N0(t,n,a,o,u){if(Ts(n),n.stateNode===null){var f=tr,b=a.contextType;typeof b=="object"&&b!==null&&(f=Un(b)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ef,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ju(n),b=a.contextType,f.context=typeof b=="object"&&b!==null?Un(b):tr,f.state=n.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(Mf(n,a,b,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(b=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),b!==f.state&&Ef.enqueueReplaceState(f,f.state,null),xo(n,o,f,u),go(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var N=n.memoizedProps,j=Ds(a,N);f.props=j;var le=f.context,Se=a.contextType;b=tr,typeof Se=="object"&&Se!==null&&(b=Un(Se));var Ae=a.getDerivedStateFromProps;Se=typeof Ae=="function"||typeof f.getSnapshotBeforeUpdate=="function",N=n.pendingProps!==N,Se||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(N||le!==b)&&g0(n,f,o,b),Ga=!1;var me=n.memoizedState;f.state=me,xo(n,o,f,u),go(),le=n.memoizedState,N||me!==le||Ga?(typeof Ae=="function"&&(Mf(n,a,Ae,o),le=n.memoizedState),(j=Ga||m0(n,a,j,o,me,le,b))?(Se||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=b,o=j):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,$u(t,n),b=n.memoizedProps,Se=Ds(a,b),f.props=Se,Ae=n.pendingProps,me=f.context,le=a.contextType,j=tr,typeof le=="object"&&le!==null&&(j=Un(le)),N=a.getDerivedStateFromProps,(le=typeof N=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b!==Ae||me!==j)&&g0(n,f,o,j),Ga=!1,me=n.memoizedState,f.state=me,xo(n,o,f,u),go();var _e=n.memoizedState;b!==Ae||me!==_e||Ga||t!==null&&t.dependencies!==null&&Ml(t.dependencies)?(typeof N=="function"&&(Mf(n,a,N,o),_e=n.memoizedState),(Se=Ga||m0(n,a,Se,o,me,_e,j)||t!==null&&t.dependencies!==null&&Ml(t.dependencies))?(le||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,_e,j),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,_e,j)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||b===t.memoizedProps&&me===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&me===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=_e),f.props=o,f.state=_e,f.context=j,o=Se):(typeof f.componentDidUpdate!="function"||b===t.memoizedProps&&me===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&me===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Vl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Rs(n,t.child,null,u),n.child=Rs(n,null,a,u)):Ln(t,n,a,u),n.memoizedState=f.state,t=n.child):t=fa(t,n,u),t}function D0(t,n,a,o){return Ms(),n.flags|=256,Ln(t,n,a,o),n.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rf(t){return{baseLanes:t,cachePool:ym()}}function Nf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ui),t}function U0(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,b;if((b=f)||(b=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),b&&(u=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,t===null){if(wt){if(u?ka(n):Xa(),(t=$t)?(t=Gg(t,yi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},a=fm(t),a.return=n,n.child=a,Dn=n,$t=null)):t=null,t===null)throw Ba(n);return dd(t)?n.lanes=32:n.lanes=536870912,null}var N=o.children;return o=o.fallback,u?(Xa(),u=n.mode,N=kl({mode:"hidden",children:N},u),o=Ss(o,u,a,null),N.return=n,o.return=n,N.sibling=o,n.child=N,o=n.child,o.memoizedState=Rf(a),o.childLanes=Nf(t,b,a),n.memoizedState=Cf,So(null,o)):(ka(n),Df(n,N))}var j=t.memoizedState;if(j!==null&&(N=j.dehydrated,N!==null)){if(f)n.flags&256?(ka(n),n.flags&=-257,n=Uf(t,n,a)):n.memoizedState!==null?(Xa(),n.child=t.child,n.flags|=128,n=null):(Xa(),N=o.fallback,u=n.mode,o=kl({mode:"visible",children:o.children},u),N=Ss(N,u,a,null),N.flags|=2,o.return=n,N.return=n,o.sibling=N,n.child=o,Rs(n,t.child,null,a),o=n.child,o.memoizedState=Rf(a),o.childLanes=Nf(t,b,a),n.memoizedState=Cf,n=So(null,o));else if(ka(n),dd(N)){if(b=N.nextSibling&&N.nextSibling.dataset,b)var le=b.dgst;b=le,o=Error(s(419)),o.stack="",o.digest=b,co({value:o,source:null,stack:null}),n=Uf(t,n,a)}else if(yn||sr(t,n,a,!1),b=(a&t.childLanes)!==0,yn||b){if(b=Jt,b!==null&&(o=ni(b,a),o!==0&&o!==j.retryLane))throw j.retryLane=o,bs(t,o),Jn(b,t,o),Af;fd(N)||Jl(),n=Uf(t,n,a)}else fd(N)?(n.flags|=192,n.child=t.child,n=null):(t=j.treeContext,$t=Si(N.nextSibling),Dn=n,wt=!0,za=null,yi=!1,t!==null&&pm(n,t),n=Df(n,o.children),n.flags|=4096);return n}return u?(Xa(),N=o.fallback,u=n.mode,j=t.child,le=j.sibling,o=sa(j,{mode:"hidden",children:o.children}),o.subtreeFlags=j.subtreeFlags&65011712,le!==null?N=sa(le,N):(N=Ss(N,u,a,null),N.flags|=2),N.return=n,o.return=n,o.sibling=N,n.child=o,So(null,o),o=n.child,N=t.child.memoizedState,N===null?N=Rf(a):(u=N.cachePool,u!==null?(j=_n._currentValue,u=u.parent!==j?{parent:j,pool:j}:u):u=ym(),N={baseLanes:N.baseLanes|a,cachePool:u}),o.memoizedState=N,o.childLanes=Nf(t,b,a),n.memoizedState=Cf,So(t.child,o)):(ka(n),a=t.child,t=a.sibling,a=sa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(b=n.deletions,b===null?(n.deletions=[t],n.flags|=16):b.push(t)),n.child=a,n.memoizedState=null,a)}function Df(t,n){return n=kl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function kl(t,n){return t=ri(22,t,null,n),t.lanes=0,t}function Uf(t,n,a){return Rs(n,t.child,null,a),t=Df(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function L0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Wu(t.return,n,a)}function Lf(t,n,a,o,u,f){var b=t.memoizedState;b===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(b.isBackwards=n,b.rendering=null,b.renderingStartTime=0,b.last=o,b.tail=a,b.tailMode=u,b.treeForkCount=f)}function O0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var b=hn.current,N=(b&2)!==0;if(N?(b=b&1|2,n.flags|=128):b&=1,ie(hn,b),Ln(t,n,o,a),o=wt?lo:0,!N&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&L0(t,a,n);else if(t.tag===19)L0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Dl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Lf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Dl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Lf(n,!0,a,null,f,o);break;case"together":Lf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function fa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),qa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(sr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=sa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=sa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ml(t)))}function Ty(t,n,a){switch(n.tag){case 3:ge(n,n.stateNode.containerInfo),Fa(n,_n,t.memoizedState.cache),Ms();break;case 27:case 5:Te(n);break;case 4:ge(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,sf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ka(n),n.flags|=128,null):(a&n.child.childLanes)!==0?U0(t,n,a):(ka(n),t=fa(t,n,a),t!==null?t.sibling:null);ka(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(sr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return O0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ie(hn,hn.current),o)break;return null;case 22:return n.lanes=0,A0(t,n,a,n.pendingProps);case 24:Fa(n,_n,t.memoizedState.cache)}return fa(t,n,a)}function P0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)yn=!0;else{if(!Of(t,a)&&(n.flags&128)===0)return yn=!1,Ty(t,n,a);yn=(t.flags&131072)!==0}else yn=!1,wt&&(n.flags&1048576)!==0&&hm(n,lo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=ws(n.elementType),n.type=t,typeof t=="function")Bu(t)?(o=Ds(t,o),n.tag=1,n=N0(null,n,t,o,a)):(n.tag=0,n=wf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=M0(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=E0(null,n,t,o,a);break e}}throw n=xe(t)||t,Error(s(306,n,""))}}return n;case 0:return wf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ds(o,n.pendingProps),N0(t,n,o,u,a);case 3:e:{if(ge(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,$u(t,n),xo(n,o,null,a);var b=n.memoizedState;if(o=b.cache,Fa(n,_n,o),o!==f.cache&&qu(n,[_n],a,!0),go(),o=b.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=D0(t,n,o,a);break e}else if(o!==u){u=xi(Error(s(424)),n),co(u),n=D0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=Si(t.firstChild),Dn=n,wt=!0,za=null,yi=!0,a=Am(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ms(),o===u){n=fa(t,n,a);break e}Ln(t,n,o,a)}n=n.child}return n;case 26:return Vl(t,n),t===null?(a=Wg(n.type,null,n.pendingProps,null))?n.memoizedState=a:wt||(a=n.type,t=n.pendingProps,o=sc(W.current).createElement(a),o[gn]=n,o[Nn]=t,On(o,a,t),xn(o),n.stateNode=o):n.memoizedState=Wg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Te(n),t===null&&wt&&(o=n.stateNode=kg(n.type,n.pendingProps,W.current),Dn=n,yi=!0,u=$t,Ja(n.type)?(hd=u,$t=Si(o.firstChild)):$t=u),Ln(t,n,n.pendingProps.children,a),Vl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&wt&&((u=o=$t)&&(o=tb(o,n.type,n.pendingProps,yi),o!==null?(n.stateNode=o,Dn=n,$t=Si(o.firstChild),yi=!1,u=!0):u=!1),u||Ba(n)),Te(n),u=n.type,f=n.pendingProps,b=t!==null?t.memoizedProps:null,o=f.children,ld(u,f)?o=null:b!==null&&ld(u,b)&&(n.flags|=32),n.memoizedState!==null&&(u=of(t,n,gy,null,null,a),zo._currentValue=u),Vl(t,n),Ln(t,n,o,a),n.child;case 6:return t===null&&wt&&((t=a=$t)&&(a=nb(a,n.pendingProps,yi),a!==null?(n.stateNode=a,Dn=n,$t=null,t=!0):t=!1),t||Ba(n)),null;case 13:return U0(t,n,a);case 4:return ge(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Rs(n,null,o,a):Ln(t,n,o,a),n.child;case 11:return M0(t,n,n.type,n.pendingProps,a);case 7:return Ln(t,n,n.pendingProps,a),n.child;case 8:return Ln(t,n,n.pendingProps.children,a),n.child;case 12:return Ln(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Fa(n,n.type,o.value),Ln(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ts(n),u=Un(u),o=o(u),n.flags|=1,Ln(t,n,o,a),n.child;case 14:return E0(t,n,n.type,n.pendingProps,a);case 15:return T0(t,n,n.type,n.pendingProps,a);case 19:return O0(t,n,a);case 31:return Ey(t,n,a);case 22:return A0(t,n,a,n.pendingProps);case 24:return Ts(n),o=Un(_n),t===null?(u=Ku(),u===null&&(u=Jt,f=Yu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Ju(n),Fa(n,_n,u)):((t.lanes&a)!==0&&($u(t,n),xo(n,null,null,a),go()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Fa(n,_n,o)):(o=f.cache,Fa(n,_n,o),o!==u.cache&&qu(n,[_n],a,!0))),Ln(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function da(t){t.flags|=4}function Pf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(lg())t.flags|=8192;else throw Cs=wl,Qu}else t.flags&=-16777217}function I0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Qg(n))if(lg())t.flags|=8192;else throw Cs=wl,Qu}function Xl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ce():536870912,t.lanes|=n,xr|=n)}function Mo(t,n){if(!wt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Ay(t,n,a){var o=n.pendingProps;switch(Vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),la(_n),Oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ar(n)?da(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Xu())),en(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(da(n),f!==null?(en(n),I0(n,f)):(en(n),Pf(n,u,null,o,a))):f?f!==t.memoizedState?(da(n),en(n),I0(n,f)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&da(n),en(n),Pf(n,u,t,o,a)),null;case 27:if(we(n),a=W.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}t=k.current,ar(n)?mm(n):(t=kg(u,o,a),n.stateNode=t,da(n))}return en(n),null;case 5:if(we(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}if(f=k.current,ar(n))mm(n);else{var b=sc(W.current);switch(f){case 1:f=b.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=b.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=b.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?b.createElement("select",{is:o.is}):b.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?b.createElement(u,{is:o.is}):b.createElement(u)}}f[gn]=n,f[Nn]=o;e:for(b=n.child;b!==null;){if(b.tag===5||b.tag===6)f.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===n)break e;for(;b.sibling===null;){if(b.return===null||b.return===n)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}n.stateNode=f;e:switch(On(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&da(n)}}return en(n),Pf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&da(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=W.current,ar(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[gn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ug(t.nodeValue,a)),t||Ba(n,!0)}else t=sc(t).createTextNode(o),t[gn]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=ar(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[gn]=n}else Ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=Xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(li(n),n):(li(n),null);if((n.flags&128)!==0)throw Error(s(558))}return en(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ar(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[gn]=n}else Ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=Xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(li(n),n):(li(n),null)}return li(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Xl(n,n.updateQueue),en(n),null);case 4:return Oe(),t===null&&id(n.stateNode.containerInfo),en(n),null;case 10:return la(n.type),en(n),null;case 19:if(F(hn),o=n.memoizedState,o===null)return en(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Mo(o,!1);else{if(dn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Dl(t),f!==null){for(n.flags|=128,Mo(o,!1),t=f.updateQueue,n.updateQueue=t,Xl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)um(a,t),a=a.sibling;return ie(hn,hn.current&1|2),wt&&ra(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Lt()>Zl&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Dl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Xl(n,t),Mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!wt)return en(n),null}else 2*Lt()-o.renderingStartTime>Zl&&a!==536870912&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Lt(),t.sibling=null,a=hn.current,ie(hn,u?a&1|2:a&1),wt&&ra(n,o.treeForkCount),t):(en(n),null);case 22:case 23:return li(n),af(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&Xl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&F(As),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),la(_n),en(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function wy(t,n){switch(Vu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return la(_n),Oe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return we(n),null;case 31:if(n.memoizedState!==null){if(li(n),n.alternate===null)throw Error(s(340));Ms()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(li(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ms()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return F(hn),null;case 4:return Oe(),null;case 10:return la(n.type),null;case 22:case 23:return li(n),af(),t!==null&&F(As),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return la(_n),null;case 25:return null;default:return null}}function z0(t,n){switch(Vu(n),n.tag){case 3:la(_n),Oe();break;case 26:case 27:case 5:we(n);break;case 4:Oe();break;case 31:n.memoizedState!==null&&li(n);break;case 13:li(n);break;case 19:F(hn);break;case 10:la(n.type);break;case 22:case 23:li(n),af(),t!==null&&F(As);break;case 24:la(_n)}}function Eo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,b=a.inst;o=f(),b.destroy=o}a=a.next}while(a!==u)}}catch(N){Wt(n,n.return,N)}}function ja(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var b=o.inst,N=b.destroy;if(N!==void 0){b.destroy=void 0,u=n;var j=a,le=N;try{le()}catch(Se){Wt(u,j,Se)}}}o=o.next}while(o!==f)}}catch(Se){Wt(n,n.return,Se)}}function B0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Cm(n,a)}catch(o){Wt(t,t.return,o)}}}function F0(t,n,a){a.props=Ds(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Wt(t,n,o)}}function To(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Wt(t,n,u)}}function Xi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Wt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Wt(t,n,u)}else a.current=null}function G0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Wt(t,t.return,u)}}function If(t,n,a){try{var o=t.stateNode;Zy(o,t.type,a,n),o[Nn]=n}catch(u){Wt(t,t.return,u)}}function H0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ja(t.type)||t.tag===4}function zf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||H0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ia));else if(o!==4&&(o===27&&Ja(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Bf(t,n,a),t=t.sibling;t!==null;)Bf(t,n,a),t=t.sibling}function jl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ja(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(jl(t,n,a),t=t.sibling;t!==null;)jl(t,n,a),t=t.sibling}function V0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);On(n,o,a),n[gn]=t,n[Nn]=a}catch(f){Wt(t,t.return,f)}}var ha=!1,bn=!1,Ff=!1,k0=typeof WeakSet=="function"?WeakSet:Set,wn=null;function Cy(t,n){if(t=t.containerInfo,rd=dc,t=tm(t),Du(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var b=0,N=-1,j=-1,le=0,Se=0,Ae=t,me=null;t:for(;;){for(var _e;Ae!==a||u!==0&&Ae.nodeType!==3||(N=b+u),Ae!==f||o!==0&&Ae.nodeType!==3||(j=b+o),Ae.nodeType===3&&(b+=Ae.nodeValue.length),(_e=Ae.firstChild)!==null;)me=Ae,Ae=_e;for(;;){if(Ae===t)break t;if(me===a&&++le===u&&(N=b),me===f&&++Se===o&&(j=b),(_e=Ae.nextSibling)!==null)break;Ae=me,me=Ae.parentNode}Ae=_e}a=N===-1||j===-1?null:{start:N,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(od={focusedElem:t,selectionRange:a},dc=!1,wn=n;wn!==null;)if(n=wn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,wn=t;else for(;wn!==null;){switch(n=wn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Qe=Ds(a.type,u);t=o.getSnapshotBeforeUpdate(Qe,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Wt(a,a.return,ot)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ud(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ud(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,wn=t;break}wn=n.return}}function X0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ma(t,a),o&4&&Eo(5,a);break;case 1:if(ma(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(b){Wt(a,a.return,b)}else{var u=Ds(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(b){Wt(a,a.return,b)}}o&64&&B0(a),o&512&&To(a,a.return);break;case 3:if(ma(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Cm(t,n)}catch(b){Wt(a,a.return,b)}}break;case 27:n===null&&o&4&&V0(a);case 26:case 5:ma(t,a),n===null&&o&4&&G0(a),o&512&&To(a,a.return);break;case 12:ma(t,a);break;case 31:ma(t,a),o&4&&q0(t,a);break;case 13:ma(t,a),o&4&&Y0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=zy.bind(null,a),ib(t,a))));break;case 22:if(o=a.memoizedState!==null||ha,!o){n=n!==null&&n.memoizedState!==null||bn,u=ha;var f=bn;ha=o,(bn=n)&&!f?ga(t,a,(a.subtreeFlags&8772)!==0):ma(t,a),ha=u,bn=f}break;case 30:break;default:ma(t,a)}}function j0(t){var n=t.alternate;n!==null&&(t.alternate=null,j0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ua(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,Yn=!1;function pa(t,n,a){for(a=a.child;a!==null;)W0(t,n,a),a=a.sibling}function W0(t,n,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(ve,a)}catch{}switch(a.tag){case 26:bn||Xi(a,n),pa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:bn||Xi(a,n);var o=on,u=Yn;Ja(a.type)&&(on=a.stateNode,Yn=!1),pa(t,n,a),Oo(a.stateNode),on=o,Yn=u;break;case 5:bn||Xi(a,n);case 6:if(o=on,u=Yn,on=null,pa(t,n,a),on=o,Yn=u,on!==null)if(Yn)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(a.stateNode)}catch(f){Wt(a,n,f)}else try{on.removeChild(a.stateNode)}catch(f){Wt(a,n,f)}break;case 18:on!==null&&(Yn?(t=on,Bg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Tr(t)):Bg(on,a.stateNode));break;case 4:o=on,u=Yn,on=a.stateNode.containerInfo,Yn=!0,pa(t,n,a),on=o,Yn=u;break;case 0:case 11:case 14:case 15:ja(2,a,n),bn||ja(4,a,n),pa(t,n,a);break;case 1:bn||(Xi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&F0(a,n,o)),pa(t,n,a);break;case 21:pa(t,n,a);break;case 22:bn=(o=bn)||a.memoizedState!==null,pa(t,n,a),bn=o;break;default:pa(t,n,a)}}function q0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Tr(t)}catch(a){Wt(n,n.return,a)}}}function Y0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Tr(t)}catch(a){Wt(n,n.return,a)}}function Ry(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new k0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new k0),n;default:throw Error(s(435,t.tag))}}function Wl(t,n){var a=Ry(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=By.bind(null,t,o);o.then(u,u)}})}function Zn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,b=n,N=b;e:for(;N!==null;){switch(N.tag){case 27:if(Ja(N.type)){on=N.stateNode,Yn=!1;break e}break;case 5:on=N.stateNode,Yn=!1;break e;case 3:case 4:on=N.stateNode.containerInfo,Yn=!0;break e}N=N.return}if(on===null)throw Error(s(160));W0(f,b,u),on=null,Yn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Z0(n,t),n=n.sibling}var Li=null;function Z0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Zn(n,t),Kn(t),o&4&&(ja(3,t,t.return),Eo(3,t),ja(5,t,t.return));break;case 1:Zn(n,t),Kn(t),o&512&&(bn||a===null||Xi(a,a.return)),o&64&&ha&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Li;if(Zn(n,t),Kn(t),o&512&&(bn||a===null||Xi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Da]||f[gn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),On(f,o,a),f[gn]=t,xn(f),o=f;break e;case"link":var b=Zg("link","href",u).get(o+(a.href||""));if(b){for(var N=0;N<b.length;N++)if(f=b[N],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(N,1);break t}}f=u.createElement(o),On(f,o,a),u.head.appendChild(f);break;case"meta":if(b=Zg("meta","content",u).get(o+(a.content||""))){for(N=0;N<b.length;N++)if(f=b[N],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(N,1);break t}}f=u.createElement(o),On(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[gn]=t,xn(f),o=f}t.stateNode=o}else Kg(u,t.type,t.stateNode);else t.stateNode=Yg(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Kg(u,t.type,t.stateNode):Yg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&If(t,t.memoizedProps,a.memoizedProps)}break;case 27:Zn(n,t),Kn(t),o&512&&(bn||a===null||Xi(a,a.return)),a!==null&&o&4&&If(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Zn(n,t),Kn(t),o&512&&(bn||a===null||Xi(a,a.return)),t.flags&32){u=t.stateNode;try{ai(u,"")}catch(Qe){Wt(t,t.return,Qe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,If(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Ff=!0);break;case 6:if(Zn(n,t),Kn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Qe){Wt(t,t.return,Qe)}}break;case 3:if(lc=null,u=Li,Li=rc(n.containerInfo),Zn(n,t),Li=u,Kn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Tr(n.containerInfo)}catch(Qe){Wt(t,t.return,Qe)}Ff&&(Ff=!1,K0(t));break;case 4:o=Li,Li=rc(t.stateNode.containerInfo),Zn(n,t),Kn(t),Li=o;break;case 12:Zn(n,t),Kn(t);break;case 31:Zn(n,t),Kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wl(t,o)));break;case 13:Zn(n,t),Kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yl=Lt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wl(t,o)));break;case 22:u=t.memoizedState!==null;var j=a!==null&&a.memoizedState!==null,le=ha,Se=bn;if(ha=le||u,bn=Se||j,Zn(n,t),bn=Se,ha=le,Kn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||j||ha||bn||Us(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){j=a=n;try{if(f=j.stateNode,u)b=f.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{N=j.stateNode;var Ae=j.memoizedProps.style,me=Ae!=null&&Ae.hasOwnProperty("display")?Ae.display:null;N.style.display=me==null||typeof me=="boolean"?"":(""+me).trim()}}catch(Qe){Wt(j,j.return,Qe)}}}else if(n.tag===6){if(a===null){j=n;try{j.stateNode.nodeValue=u?"":j.memoizedProps}catch(Qe){Wt(j,j.return,Qe)}}}else if(n.tag===18){if(a===null){j=n;try{var _e=j.stateNode;u?Fg(_e,!0):Fg(j.stateNode,!1)}catch(Qe){Wt(j,j.return,Qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Wl(t,a))));break;case 19:Zn(n,t),Kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wl(t,o)));break;case 30:break;case 21:break;default:Zn(n,t),Kn(t)}}function Kn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(H0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=zf(t);jl(t,f,u);break;case 5:var b=a.stateNode;a.flags&32&&(ai(b,""),a.flags&=-33);var N=zf(t);jl(t,N,b);break;case 3:case 4:var j=a.stateNode.containerInfo,le=zf(t);Bf(t,le,j);break;default:throw Error(s(161))}}catch(Se){Wt(t,t.return,Se)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function K0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;K0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ma(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)X0(t,n.alternate,n),n=n.sibling}function Us(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ja(4,n,n.return),Us(n);break;case 1:Xi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&F0(n,n.return,a),Us(n);break;case 27:Oo(n.stateNode);case 26:case 5:Xi(n,n.return),Us(n);break;case 22:n.memoizedState===null&&Us(n);break;case 30:Us(n);break;default:Us(n)}t=t.sibling}}function ga(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,b=f.flags;switch(f.tag){case 0:case 11:case 15:ga(u,f,a),Eo(4,f);break;case 1:if(ga(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(le){Wt(o,o.return,le)}if(o=f,u=o.updateQueue,u!==null){var N=o.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)wm(j[u],N)}catch(le){Wt(o,o.return,le)}}a&&b&64&&B0(f),To(f,f.return);break;case 27:V0(f);case 26:case 5:ga(u,f,a),a&&o===null&&b&4&&G0(f),To(f,f.return);break;case 12:ga(u,f,a);break;case 31:ga(u,f,a),a&&b&4&&q0(u,f);break;case 13:ga(u,f,a),a&&b&4&&Y0(u,f);break;case 22:f.memoizedState===null&&ga(u,f,a),To(f,f.return);break;case 30:break;default:ga(u,f,a)}n=n.sibling}}function Gf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&uo(a))}function Hf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t))}function Oi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Q0(t,n,a,o),n=n.sibling}function Q0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Oi(t,n,a,o),u&2048&&Eo(9,n);break;case 1:Oi(t,n,a,o);break;case 3:Oi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t)));break;case 12:if(u&2048){Oi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,b=f.id,N=f.onPostCommit;typeof N=="function"&&N(b,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(j){Wt(n,n.return,j)}}else Oi(t,n,a,o);break;case 31:Oi(t,n,a,o);break;case 13:Oi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,b=n.alternate,n.memoizedState!==null?f._visibility&2?Oi(t,n,a,o):Ao(t,n):f._visibility&2?Oi(t,n,a,o):(f._visibility|=2,pr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Gf(b,n);break;case 24:Oi(t,n,a,o),u&2048&&Hf(n.alternate,n);break;default:Oi(t,n,a,o)}}function pr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,b=n,N=a,j=o,le=b.flags;switch(b.tag){case 0:case 11:case 15:pr(f,b,N,j,u),Eo(8,b);break;case 23:break;case 22:var Se=b.stateNode;b.memoizedState!==null?Se._visibility&2?pr(f,b,N,j,u):Ao(f,b):(Se._visibility|=2,pr(f,b,N,j,u)),u&&le&2048&&Gf(b.alternate,b);break;case 24:pr(f,b,N,j,u),u&&le&2048&&Hf(b.alternate,b);break;default:pr(f,b,N,j,u)}n=n.sibling}}function Ao(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ao(a,o),u&2048&&Gf(o.alternate,o);break;case 24:Ao(a,o),u&2048&&Hf(o.alternate,o);break;default:Ao(a,o)}n=n.sibling}}var wo=8192;function mr(t,n,a){if(t.subtreeFlags&wo)for(t=t.child;t!==null;)J0(t,n,a),t=t.sibling}function J0(t,n,a){switch(t.tag){case 26:mr(t,n,a),t.flags&wo&&t.memoizedState!==null&&mb(a,Li,t.memoizedState,t.memoizedProps);break;case 5:mr(t,n,a);break;case 3:case 4:var o=Li;Li=rc(t.stateNode.containerInfo),mr(t,n,a),Li=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=wo,wo=16777216,mr(t,n,a),wo=o):mr(t,n,a));break;default:mr(t,n,a)}}function $0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Co(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,tg(o,t)}$0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)eg(t),t=t.sibling}function eg(t){switch(t.tag){case 0:case 11:case 15:Co(t),t.flags&2048&&ja(9,t,t.return);break;case 3:Co(t);break;case 12:Co(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ql(t)):Co(t);break;default:Co(t)}}function ql(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,tg(o,t)}$0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ja(8,n,n.return),ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ql(n));break;default:ql(n)}t=t.sibling}}function tg(t,n){for(;wn!==null;){var a=wn;switch(a.tag){case 0:case 11:case 15:ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,wn=o;else e:for(a=t;wn!==null;){o=wn;var u=o.sibling,f=o.return;if(j0(o),o===a){wn=null;break e}if(u!==null){u.return=f,wn=u;break e}wn=f}}}var Ny={getCacheForType:function(t){var n=Un(_n),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Un(_n).controller.signal}},Dy=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Jt=null,Mt=null,Tt=0,jt=0,ci=null,Wa=!1,gr=!1,Vf=!1,xa=0,dn=0,qa=0,Ls=0,kf=0,ui=0,xr=0,Ro=null,Qn=null,Xf=!1,Yl=0,ng=0,Zl=1/0,Kl=null,Ya=null,En=0,Za=null,_r=null,_a=0,jf=0,Wf=null,ig=null,No=0,qf=null;function fi(){return(Bt&2)!==0&&Tt!==0?Tt&-Tt:G.T!==null?$f():Jr()}function ag(){if(ui===0)if((Tt&536870912)===0||wt){var t=ft;ft<<=1,(ft&3932160)===0&&(ft=262144),ui=t}else ui=536870912;return t=oi.current,t!==null&&(t.flags|=32),ui}function Jn(t,n,a){(t===Jt&&(jt===2||jt===9)||t.cancelPendingCommit!==null)&&(vr(t,0),Ka(t,Tt,ui,!1)),Ye(t,a),((Bt&2)===0||t!==Jt)&&(t===Jt&&((Bt&2)===0&&(Ls|=a),dn===4&&Ka(t,Tt,ui,!1)),ji(t))}function sg(t,n,a){if((Bt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Pe(t,n),u=o?Oy(t,n):Zf(t,n,!0),f=o;do{if(u===0){gr&&!o&&Ka(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Uy(a)){u=Zf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;e:{var N=t;u=Ro;var j=N.current.memoizedState.isDehydrated;if(j&&(vr(N,b).flags|=256),b=Zf(N,b,!1),b!==2){if(Vf&&!j){N.errorRecoveryDisabledLanes|=f,Ls|=f,u=4;break e}f=Qn,Qn=u,f!==null&&(Qn===null?Qn=f:Qn.push.apply(Qn,f))}u=b}if(f=!1,u!==2)continue}}if(u===1){vr(t,0),Ka(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ka(o,n,ui,!Wa);break e;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Yl+300-Lt(),10<u)){if(Ka(o,n,ui,!Wa),Me(o,0,!0)!==0)break e;_a=n,o.timeoutHandle=Ig(rg.bind(null,o,a,Qn,Kl,Xf,n,ui,Ls,xr,Wa,f,"Throttled",-0,0),u);break e}rg(o,a,Qn,Kl,Xf,n,ui,Ls,xr,Wa,f,null,-0,0)}}break}while(!0);ji(t)}function rg(t,n,a,o,u,f,b,N,j,le,Se,Ae,me,_e){if(t.timeoutHandle=-1,Ae=n.subtreeFlags,Ae&8192||(Ae&16785408)===16785408){Ae={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ia},J0(n,f,Ae);var Qe=(f&62914560)===f?Yl-Lt():(f&4194048)===f?ng-Lt():0;if(Qe=gb(Ae,Qe),Qe!==null){_a=f,t.cancelPendingCommit=Qe(pg.bind(null,t,n,f,a,o,u,b,N,j,Se,Ae,null,me,_e)),Ka(t,f,b,!le);return}}pg(t,n,f,a,o,u,b,N,j)}function Uy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!si(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ka(t,n,a,o){n&=~kf,n&=~Ls,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-je(u),b=1<<f;o[f]=-1,u&=~b}a!==0&&Ht(t,a,n)}function Ql(){return(Bt&6)===0?(Do(0),!1):!0}function Yf(){if(Mt!==null){if(jt===0)var t=Mt.return;else t=Mt,oa=Es=null,uf(t),cr=null,ho=0,t=Mt;for(;t!==null;)z0(t.alternate,t),t=t.return;Mt=null}}function vr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Jy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),_a=0,Yf(),Jt=t,Mt=a=sa(t.current,null),Tt=n,jt=0,ci=null,Wa=!1,gr=Pe(t,n),Vf=!1,xr=ui=kf=Ls=qa=dn=0,Qn=Ro=null,Xf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-je(o),f=1<<u;n|=t[u],o&=~f}return xa=n,_l(),a}function og(t,n){mt=null,G.H=bo,n===lr||n===Al?(n=Mm(),jt=3):n===Qu?(n=Mm(),jt=4):jt=n===Af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ci=n,Mt===null&&(dn=1,Gl(t,xi(n,t.current)))}function lg(){var t=oi.current;return t===null?!0:(Tt&4194048)===Tt?bi===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===bi:!1}function cg(){var t=G.H;return G.H=bo,t===null?bo:t}function ug(){var t=G.A;return G.A=Ny,t}function Jl(){dn=4,Wa||(Tt&4194048)!==Tt&&oi.current!==null||(gr=!0),(qa&134217727)===0&&(Ls&134217727)===0||Jt===null||Ka(Jt,Tt,ui,!1)}function Zf(t,n,a){var o=Bt;Bt|=2;var u=cg(),f=ug();(Jt!==t||Tt!==n)&&(Kl=null,vr(t,n)),n=!1;var b=dn;e:do try{if(jt!==0&&Mt!==null){var N=Mt,j=ci;switch(jt){case 8:Yf(),b=6;break e;case 3:case 2:case 9:case 6:oi.current===null&&(n=!0);var le=jt;if(jt=0,ci=null,yr(t,N,j,le),a&&gr){b=0;break e}break;default:le=jt,jt=0,ci=null,yr(t,N,j,le)}}Ly(),b=dn;break}catch(Se){og(t,Se)}while(!0);return n&&t.shellSuspendCounter++,oa=Es=null,Bt=o,G.H=u,G.A=f,Mt===null&&(Jt=null,Tt=0,_l()),b}function Ly(){for(;Mt!==null;)fg(Mt)}function Oy(t,n){var a=Bt;Bt|=2;var o=cg(),u=ug();Jt!==t||Tt!==n?(Kl=null,Zl=Lt()+500,vr(t,n)):gr=Pe(t,n);e:do try{if(jt!==0&&Mt!==null){n=Mt;var f=ci;t:switch(jt){case 1:jt=0,ci=null,yr(t,n,f,1);break;case 2:case 9:if(bm(f)){jt=0,ci=null,dg(n);break}n=function(){jt!==2&&jt!==9||Jt!==t||(jt=7),ji(t)},f.then(n,n);break e;case 3:jt=7;break e;case 4:jt=5;break e;case 7:bm(f)?(jt=0,ci=null,dg(n)):(jt=0,ci=null,yr(t,n,f,7));break;case 5:var b=null;switch(Mt.tag){case 26:b=Mt.memoizedState;case 5:case 27:var N=Mt;if(b?Qg(b):N.stateNode.complete){jt=0,ci=null;var j=N.sibling;if(j!==null)Mt=j;else{var le=N.return;le!==null?(Mt=le,$l(le)):Mt=null}break t}}jt=0,ci=null,yr(t,n,f,5);break;case 6:jt=0,ci=null,yr(t,n,f,6);break;case 8:Yf(),dn=6;break e;default:throw Error(s(462))}}Py();break}catch(Se){og(t,Se)}while(!0);return oa=Es=null,G.H=o,G.A=u,Bt=a,Mt!==null?0:(Jt=null,Tt=0,_l(),dn)}function Py(){for(;Mt!==null&&!nn();)fg(Mt)}function fg(t){var n=P0(t.alternate,t,xa);t.memoizedProps=t.pendingProps,n===null?$l(t):Mt=n}function dg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=R0(a,n,n.pendingProps,n.type,void 0,Tt);break;case 11:n=R0(a,n,n.pendingProps,n.type.render,n.ref,Tt);break;case 5:uf(n);default:z0(a,n),n=Mt=um(n,xa),n=P0(a,n,xa)}t.memoizedProps=t.pendingProps,n===null?$l(t):Mt=n}function yr(t,n,a,o){oa=Es=null,uf(n),cr=null,ho=0;var u=n.return;try{if(My(t,u,n,a,Tt)){dn=1,Gl(t,xi(a,t.current)),Mt=null;return}}catch(f){if(u!==null)throw Mt=u,f;dn=1,Gl(t,xi(a,t.current)),Mt=null;return}n.flags&32768?(wt||o===1?t=!0:gr||(Tt&536870912)!==0?t=!1:(Wa=t=!0,(o===2||o===9||o===3||o===6)&&(o=oi.current,o!==null&&o.tag===13&&(o.flags|=16384))),hg(n,t)):$l(n)}function $l(t){var n=t;do{if((n.flags&32768)!==0){hg(n,Wa);return}t=n.return;var a=Ay(n.alternate,n,xa);if(a!==null){Mt=a;return}if(n=n.sibling,n!==null){Mt=n;return}Mt=n=t}while(n!==null);dn===0&&(dn=5)}function hg(t,n){do{var a=wy(t.alternate,t);if(a!==null){a.flags&=32767,Mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Mt=t;return}Mt=t=a}while(t!==null);dn=6,Mt=null}function pg(t,n,a,o,u,f,b,N,j){t.cancelPendingCommit=null;do ec();while(En!==0);if((Bt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Iu,an(t,a,f,b,N,j),t===Jt&&(Mt=Jt=null,Tt=0),_r=n,Za=t,_a=a,jf=f,Wf=u,ig=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Fy(se,function(){return vg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=G.T,G.T=null,u=X.p,X.p=2,b=Bt,Bt|=4;try{Cy(t,n,a)}finally{Bt=b,X.p=u,G.T=o}}En=1,mg(),gg(),xg()}}function mg(){if(En===1){En=0;var t=Za,n=_r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=G.T,G.T=null;var o=X.p;X.p=2;var u=Bt;Bt|=4;try{Z0(n,t);var f=od,b=tm(t.containerInfo),N=f.focusedElem,j=f.selectionRange;if(b!==N&&N&&N.ownerDocument&&em(N.ownerDocument.documentElement,N)){if(j!==null&&Du(N)){var le=j.start,Se=j.end;if(Se===void 0&&(Se=le),"selectionStart"in N)N.selectionStart=le,N.selectionEnd=Math.min(Se,N.value.length);else{var Ae=N.ownerDocument||document,me=Ae&&Ae.defaultView||window;if(me.getSelection){var _e=me.getSelection(),Qe=N.textContent.length,ot=Math.min(j.start,Qe),Kt=j.end===void 0?ot:Math.min(j.end,Qe);!_e.extend&&ot>Kt&&(b=Kt,Kt=ot,ot=b);var ne=$p(N,ot),Z=$p(N,Kt);if(ne&&Z&&(_e.rangeCount!==1||_e.anchorNode!==ne.node||_e.anchorOffset!==ne.offset||_e.focusNode!==Z.node||_e.focusOffset!==Z.offset)){var oe=Ae.createRange();oe.setStart(ne.node,ne.offset),_e.removeAllRanges(),ot>Kt?(_e.addRange(oe),_e.extend(Z.node,Z.offset)):(oe.setEnd(Z.node,Z.offset),_e.addRange(oe))}}}}for(Ae=[],_e=N;_e=_e.parentNode;)_e.nodeType===1&&Ae.push({element:_e,left:_e.scrollLeft,top:_e.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<Ae.length;N++){var Ee=Ae[N];Ee.element.scrollLeft=Ee.left,Ee.element.scrollTop=Ee.top}}dc=!!rd,od=rd=null}finally{Bt=u,X.p=o,G.T=a}}t.current=n,En=2}}function gg(){if(En===2){En=0;var t=Za,n=_r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=G.T,G.T=null;var o=X.p;X.p=2;var u=Bt;Bt|=4;try{X0(t,n.alternate,n)}finally{Bt=u,X.p=o,G.T=a}}En=3}}function xg(){if(En===4||En===3){En=0,J();var t=Za,n=_r,a=_a,o=ig;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,_r=Za=null,_g(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ya=null),Qr(a),n=n.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(ve,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=G.T,u=X.p,X.p=2,G.T=null;try{for(var f=t.onRecoverableError,b=0;b<o.length;b++){var N=o[b];f(N.value,{componentStack:N.stack})}}finally{G.T=n,X.p=u}}(_a&3)!==0&&ec(),ji(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===qf?No++:(No=0,qf=t):No=0,Do(0)}}function _g(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,uo(n)))}function ec(){return mg(),gg(),xg(),vg()}function vg(){if(En!==5)return!1;var t=Za,n=jf;jf=0;var a=Qr(_a),o=G.T,u=X.p;try{X.p=32>a?32:a,G.T=null,a=Wf,Wf=null;var f=Za,b=_a;if(En=0,_r=Za=null,_a=0,(Bt&6)!==0)throw Error(s(331));var N=Bt;if(Bt|=4,eg(f.current),Q0(f,f.current,b,a),Bt=N,Do(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(ve,f)}catch{}return!0}finally{X.p=u,G.T=o,_g(t,n)}}function yg(t,n,a){n=xi(a,n),n=Tf(t.stateNode,n,2),t=Va(t,n,2),t!==null&&(Ye(t,2),ji(t))}function Wt(t,n,a){if(t.tag===3)yg(t,t,a);else for(;n!==null;){if(n.tag===3){yg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ya===null||!Ya.has(o))){t=xi(a,t),a=b0(2),o=Va(n,a,2),o!==null&&(S0(a,o,n,t),Ye(o,2),ji(o));break}}n=n.return}}function Kf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Dy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Vf=!0,u.add(a),t=Iy.bind(null,t,n,a),n.then(t,t))}function Iy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Jt===t&&(Tt&a)===a&&(dn===4||dn===3&&(Tt&62914560)===Tt&&300>Lt()-Yl?(Bt&2)===0&&vr(t,0):kf|=a,xr===Tt&&(xr=0)),ji(t)}function bg(t,n){n===0&&(n=Ce()),t=bs(t,n),t!==null&&(Ye(t,n),ji(t))}function zy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),bg(t,a)}function By(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),bg(t,a)}function Fy(t,n){return un(t,n)}var tc=null,br=null,Qf=!1,nc=!1,Jf=!1,Qa=0;function ji(t){t!==br&&t.next===null&&(br===null?tc=br=t:br=br.next=t),nc=!0,Qf||(Qf=!0,Hy())}function Do(t,n){if(!Jf&&nc){Jf=!0;do for(var a=!1,o=tc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var b=o.suspendedLanes,N=o.pingedLanes;f=(1<<31-je(42|t)+1)-1,f&=u&~(b&~N),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Tg(o,f))}else f=Tt,f=Me(o,o===Jt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Pe(o,f)||(a=!0,Tg(o,f));o=o.next}while(a);Jf=!1}}function Gy(){Sg()}function Sg(){nc=Qf=!1;var t=0;Qa!==0&&Qy()&&(t=Qa);for(var n=Lt(),a=null,o=tc;o!==null;){var u=o.next,f=Mg(o,n);f===0?(o.next=null,a===null?tc=u:a.next=u,u===null&&(br=a)):(a=o,(t!==0||(f&3)!==0)&&(nc=!0)),o=u}En!==0&&En!==5||Do(t),Qa!==0&&(Qa=0)}function Mg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var b=31-je(f),N=1<<b,j=u[b];j===-1?((N&a)===0||(N&o)!==0)&&(u[b]=ke(N,n)):j<=n&&(t.expiredLanes|=N),f&=~N}if(n=Jt,a=Tt,a=Me(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(jt===2||jt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ft(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Pe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ft(o),Qr(a)){case 2:case 8:a=T;break;case 32:a=se;break;case 268435456:a=ye;break;default:a=se}return o=Eg.bind(null,t),a=un(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ft(o),t.callbackPriority=2,t.callbackNode=null,2}function Eg(t,n){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ec()&&t.callbackNode!==a)return null;var o=Tt;return o=Me(t,t===Jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(sg(t,o,n),Mg(t,Lt()),t.callbackNode!=null&&t.callbackNode===a?Eg.bind(null,t):null)}function Tg(t,n){if(ec())return null;sg(t,n,!0)}function Hy(){$y(function(){(Bt&6)!==0?un(B,Gy):Sg()})}function $f(){if(Qa===0){var t=rr;t===0&&(t=at,at<<=1,(at&261888)===0&&(at=256)),Qa=t}return Qa}function Ag(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:xs(""+t)}function wg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Vy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Ag((u[Nn]||null).action),b=o.submitter;b&&(n=(n=b[Nn]||null)?Ag(n.formAction):b.getAttribute("formAction"),n!==null&&(f=n,b=null));var N=new pl("action","action",null,o,u);t.push({event:N,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Qa!==0){var j=b?wg(u,b):new FormData(u);vf(a,{pending:!0,data:j,method:u.method,action:f},null,j)}}else typeof f=="function"&&(N.preventDefault(),j=b?wg(u,b):new FormData(u),vf(a,{pending:!0,data:j,method:u.method,action:f},f,j))},currentTarget:u}]})}}for(var ed=0;ed<Pu.length;ed++){var td=Pu[ed],ky=td.toLowerCase(),Xy=td[0].toUpperCase()+td.slice(1);Ui(ky,"on"+Xy)}Ui(am,"onAnimationEnd"),Ui(sm,"onAnimationIteration"),Ui(rm,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(ry,"onTransitionRun"),Ui(oy,"onTransitionStart"),Ui(ly,"onTransitionCancel"),Ui(om,"onTransitionEnd"),pe("onMouseEnter",["mouseout","mouseover"]),pe("onMouseLeave",["mouseout","mouseover"]),pe("onPointerEnter",["pointerout","pointerover"]),pe("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function Cg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var b=o.length-1;0<=b;b--){var N=o[b],j=N.instance,le=N.currentTarget;if(N=N.listener,j!==f&&u.isPropagationStopped())break e;f=N,u.currentTarget=le;try{f(u)}catch(Se){xl(Se)}u.currentTarget=null,f=j}else for(b=0;b<o.length;b++){if(N=o[b],j=N.instance,le=N.currentTarget,N=N.listener,j!==f&&u.isPropagationStopped())break e;f=N,u.currentTarget=le;try{f(u)}catch(Se){xl(Se)}u.currentTarget=null,f=j}}}}function Et(t,n){var a=n[ps];a===void 0&&(a=n[ps]=new Set);var o=t+"__bubble";a.has(o)||(Rg(n,t,2,!1),a.add(o))}function nd(t,n,a){var o=0;n&&(o|=4),Rg(a,t,o,n)}var ic="_reactListening"+Math.random().toString(36).slice(2);function id(t){if(!t[ic]){t[ic]=!0,ul.forEach(function(a){a!=="selectionchange"&&(jy.has(a)||nd(a,!1,t),nd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ic]||(n[ic]=!0,nd("selectionchange",!1,n))}}function Rg(t,n,a,o){switch(ax(n)){case 2:var u=vb;break;case 8:u=yb;break;default:u=_d}a=u.bind(null,n,a,t),u=void 0,!Su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ad(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var N=o.stateNode.containerInfo;if(N===u)break;if(b===4)for(b=o.return;b!==null;){var j=b.tag;if((j===3||j===4)&&b.stateNode.containerInfo===u)return;b=b.return}for(;N!==null;){if(b=ta(N),b===null)return;if(j=b.tag,j===5||j===6||j===26||j===27){o=f=b;continue e}N=N.parentNode}}o=o.return}Op(function(){var le=f,Se=yu(a),Ae=[];e:{var me=lm.get(t);if(me!==void 0){var _e=pl,Qe=t;switch(t){case"keypress":if(dl(a)===0)break e;case"keydown":case"keyup":_e=Bv;break;case"focusin":Qe="focus",_e=Au;break;case"focusout":Qe="blur",_e=Au;break;case"beforeblur":case"afterblur":_e=Au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_e=zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_e=Av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_e=Hv;break;case am:case sm:case rm:_e=Rv;break;case om:_e=kv;break;case"scroll":case"scrollend":_e=Ev;break;case"wheel":_e=jv;break;case"copy":case"cut":case"paste":_e=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_e=Fp;break;case"toggle":case"beforetoggle":_e=qv}var ot=(n&4)!==0,Kt=!ot&&(t==="scroll"||t==="scrollend"),ne=ot?me!==null?me+"Capture":null:me;ot=[];for(var Z=le,oe;Z!==null;){var Ee=Z;if(oe=Ee.stateNode,Ee=Ee.tag,Ee!==5&&Ee!==26&&Ee!==27||oe===null||ne===null||(Ee=$r(Z,ne),Ee!=null&&ot.push(Lo(Z,Ee,oe))),Kt)break;Z=Z.return}0<ot.length&&(me=new _e(me,Qe,null,a,Se),Ae.push({event:me,listeners:ot}))}}if((n&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",_e=t==="mouseout"||t==="pointerout",me&&a!==vu&&(Qe=a.relatedTarget||a.fromElement)&&(ta(Qe)||Qe[Wn]))break e;if((_e||me)&&(me=Se.window===Se?Se:(me=Se.ownerDocument)?me.defaultView||me.parentWindow:window,_e?(Qe=a.relatedTarget||a.toElement,_e=le,Qe=Qe?ta(Qe):null,Qe!==null&&(Kt=c(Qe),ot=Qe.tag,Qe!==Kt||ot!==5&&ot!==27&&ot!==6)&&(Qe=null)):(_e=null,Qe=le),_e!==Qe)){if(ot=zp,Ee="onMouseLeave",ne="onMouseEnter",Z="mouse",(t==="pointerout"||t==="pointerover")&&(ot=Fp,Ee="onPointerLeave",ne="onPointerEnter",Z="pointer"),Kt=_e==null?me:gs(_e),oe=Qe==null?me:gs(Qe),me=new ot(Ee,Z+"leave",_e,a,Se),me.target=Kt,me.relatedTarget=oe,Ee=null,ta(Se)===le&&(ot=new ot(ne,Z+"enter",Qe,a,Se),ot.target=oe,ot.relatedTarget=Kt,Ee=ot),Kt=Ee,_e&&Qe)t:{for(ot=Wy,ne=_e,Z=Qe,oe=0,Ee=ne;Ee;Ee=ot(Ee))oe++;Ee=0;for(var rt=Z;rt;rt=ot(rt))Ee++;for(;0<oe-Ee;)ne=ot(ne),oe--;for(;0<Ee-oe;)Z=ot(Z),Ee--;for(;oe--;){if(ne===Z||Z!==null&&ne===Z.alternate){ot=ne;break t}ne=ot(ne),Z=ot(Z)}ot=null}else ot=null;_e!==null&&Ng(Ae,me,_e,ot,!1),Qe!==null&&Kt!==null&&Ng(Ae,Kt,Qe,ot,!0)}}e:{if(me=le?gs(le):window,_e=me.nodeName&&me.nodeName.toLowerCase(),_e==="select"||_e==="input"&&me.type==="file")var Pt=qp;else if(jp(me))if(Yp)Pt=iy;else{Pt=ty;var tt=ey}else _e=me.nodeName,!_e||_e.toLowerCase()!=="input"||me.type!=="checkbox"&&me.type!=="radio"?le&&Gt(le.elementType)&&(Pt=qp):Pt=ny;if(Pt&&(Pt=Pt(t,le))){Wp(Ae,Pt,a,Se);break e}tt&&tt(t,me,le),t==="focusout"&&le&&me.type==="number"&&le.memoizedProps.value!=null&&St(me,"number",me.value)}switch(tt=le?gs(le):window,t){case"focusin":(jp(tt)||tt.contentEditable==="true")&&(Js=tt,Uu=le,oo=null);break;case"focusout":oo=Uu=Js=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,nm(Ae,a,Se);break;case"selectionchange":if(sy)break;case"keydown":case"keyup":nm(Ae,a,Se)}var xt;if(Cu)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else Qs?kp(t,a)&&(At="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(At="onCompositionStart");At&&(Gp&&a.locale!=="ko"&&(Qs||At!=="onCompositionStart"?At==="onCompositionEnd"&&Qs&&(xt=Pp()):(Pa=Se,Mu="value"in Pa?Pa.value:Pa.textContent,Qs=!0)),tt=ac(le,At),0<tt.length&&(At=new Bp(At,t,null,a,Se),Ae.push({event:At,listeners:tt}),xt?At.data=xt:(xt=Xp(a),xt!==null&&(At.data=xt)))),(xt=Zv?Kv(t,a):Qv(t,a))&&(At=ac(le,"onBeforeInput"),0<At.length&&(tt=new Bp("onBeforeInput","beforeinput",null,a,Se),Ae.push({event:tt,listeners:At}),tt.data=xt)),Vy(Ae,t,le,a,Se)}Cg(Ae,n)})}function Lo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ac(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=$r(t,a),u!=null&&o.unshift(Lo(t,u,f)),u=$r(t,n),u!=null&&o.push(Lo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function Wy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ng(t,n,a,o,u){for(var f=n._reactName,b=[];a!==null&&a!==o;){var N=a,j=N.alternate,le=N.stateNode;if(N=N.tag,j!==null&&j===o)break;N!==5&&N!==26&&N!==27||le===null||(j=le,u?(le=$r(a,f),le!=null&&b.unshift(Lo(a,le,j))):u||(le=$r(a,f),le!=null&&b.push(Lo(a,le,j)))),a=a.return}b.length!==0&&t.push({event:n,listeners:b})}var qy=/\r\n?/g,Yy=/\u0000|\uFFFD/g;function Dg(t){return(typeof t=="string"?t:""+t).replace(qy,`
`).replace(Yy,"")}function Ug(t,n){return n=Dg(n),Dg(t)===n}function Zt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ai(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ai(t,""+o);break;case"className":Ke(t,"class",o);break;case"tabIndex":Ke(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ke(t,a,o);break;case"style":Di(t,o,f);break;case"data":if(n!=="object"){Ke(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xs(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Zt(t,n,"name",u.name,u,null),Zt(t,n,"formEncType",u.formEncType,u,null),Zt(t,n,"formMethod",u.formMethod,u,null),Zt(t,n,"formTarget",u.formTarget,u,null)):(Zt(t,n,"encType",u.encType,u,null),Zt(t,n,"method",u.method,u,null),Zt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xs(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ia);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=xs(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Et("beforetoggle",t),Et("toggle",t),Be(t,"popover",o);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Be(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Hi.get(a)||a,Be(t,a,o))}}function sd(t,n,a,o,u,f){switch(a){case"style":Di(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ai(t,o):(typeof o=="number"||typeof o=="bigint")&&ai(t,""+o);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ia);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Nn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Be(t,a,o)}}}function On(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var b=a[f];if(b!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Zt(t,n,f,b,a,null)}}u&&Zt(t,n,"srcSet",a.srcSet,a,null),o&&Zt(t,n,"src",a.src,a,null);return;case"input":Et("invalid",t);var N=f=b=u=null,j=null,le=null;for(o in a)if(a.hasOwnProperty(o)){var Se=a[o];if(Se!=null)switch(o){case"name":u=Se;break;case"type":b=Se;break;case"checked":j=Se;break;case"defaultChecked":le=Se;break;case"value":f=Se;break;case"defaultValue":N=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(s(137,n));break;default:Zt(t,n,o,Se,a,null)}}In(t,f,N,j,le,b,u,!1);return;case"select":Et("invalid",t),o=b=f=null;for(u in a)if(a.hasOwnProperty(u)&&(N=a[u],N!=null))switch(u){case"value":f=N;break;case"defaultValue":b=N;break;case"multiple":o=N;default:Zt(t,n,u,N,a,null)}n=f,a=b,t.multiple=!!o,n!=null?Mn(t,!!o,n,!1):a!=null&&Mn(t,!!o,a,!0);return;case"textarea":Et("invalid",t),f=u=o=null;for(b in a)if(a.hasOwnProperty(b)&&(N=a[b],N!=null))switch(b){case"value":o=N;break;case"defaultValue":u=N;break;case"children":f=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(91));break;default:Zt(t,n,b,N,a,null)}Ni(t,o,u,f);return;case"option":for(j in a)if(a.hasOwnProperty(j)&&(o=a[j],o!=null))switch(j){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Zt(t,n,j,o,a,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(o=0;o<Uo.length;o++)Et(Uo[o],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(le in a)if(a.hasOwnProperty(le)&&(o=a[le],o!=null))switch(le){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Zt(t,n,le,o,a,null)}return;default:if(Gt(n)){for(Se in a)a.hasOwnProperty(Se)&&(o=a[Se],o!==void 0&&sd(t,n,Se,o,a,void 0));return}}for(N in a)a.hasOwnProperty(N)&&(o=a[N],o!=null&&Zt(t,n,N,o,a,null))}function Zy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,b=null,N=null,j=null,le=null,Se=null;for(_e in a){var Ae=a[_e];if(a.hasOwnProperty(_e)&&Ae!=null)switch(_e){case"checked":break;case"value":break;case"defaultValue":j=Ae;default:o.hasOwnProperty(_e)||Zt(t,n,_e,null,o,Ae)}}for(var me in o){var _e=o[me];if(Ae=a[me],o.hasOwnProperty(me)&&(_e!=null||Ae!=null))switch(me){case"type":f=_e;break;case"name":u=_e;break;case"checked":le=_e;break;case"defaultChecked":Se=_e;break;case"value":b=_e;break;case"defaultValue":N=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(s(137,n));break;default:_e!==Ae&&Zt(t,n,me,_e,o,Ae)}}We(t,b,N,j,le,Se,f,u);return;case"select":_e=b=N=me=null;for(f in a)if(j=a[f],a.hasOwnProperty(f)&&j!=null)switch(f){case"value":break;case"multiple":_e=j;default:o.hasOwnProperty(f)||Zt(t,n,f,null,o,j)}for(u in o)if(f=o[u],j=a[u],o.hasOwnProperty(u)&&(f!=null||j!=null))switch(u){case"value":me=f;break;case"defaultValue":N=f;break;case"multiple":b=f;default:f!==j&&Zt(t,n,u,f,o,j)}n=N,a=b,o=_e,me!=null?Mn(t,!!a,me,!1):!!o!=!!a&&(n!=null?Mn(t,!!a,n,!0):Mn(t,!!a,a?[]:"",!1));return;case"textarea":_e=me=null;for(N in a)if(u=a[N],a.hasOwnProperty(N)&&u!=null&&!o.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:Zt(t,n,N,null,o,u)}for(b in o)if(u=o[b],f=a[b],o.hasOwnProperty(b)&&(u!=null||f!=null))switch(b){case"value":me=u;break;case"defaultValue":_e=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Zt(t,n,b,u,o,f)}ii(t,me,_e);return;case"option":for(var Qe in a)if(me=a[Qe],a.hasOwnProperty(Qe)&&me!=null&&!o.hasOwnProperty(Qe))switch(Qe){case"selected":t.selected=!1;break;default:Zt(t,n,Qe,null,o,me)}for(j in o)if(me=o[j],_e=a[j],o.hasOwnProperty(j)&&me!==_e&&(me!=null||_e!=null))switch(j){case"selected":t.selected=me&&typeof me!="function"&&typeof me!="symbol";break;default:Zt(t,n,j,me,o,_e)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in a)me=a[ot],a.hasOwnProperty(ot)&&me!=null&&!o.hasOwnProperty(ot)&&Zt(t,n,ot,null,o,me);for(le in o)if(me=o[le],_e=a[le],o.hasOwnProperty(le)&&me!==_e&&(me!=null||_e!=null))switch(le){case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:Zt(t,n,le,me,o,_e)}return;default:if(Gt(n)){for(var Kt in a)me=a[Kt],a.hasOwnProperty(Kt)&&me!==void 0&&!o.hasOwnProperty(Kt)&&sd(t,n,Kt,void 0,o,me);for(Se in o)me=o[Se],_e=a[Se],!o.hasOwnProperty(Se)||me===_e||me===void 0&&_e===void 0||sd(t,n,Se,me,o,_e);return}}for(var ne in a)me=a[ne],a.hasOwnProperty(ne)&&me!=null&&!o.hasOwnProperty(ne)&&Zt(t,n,ne,null,o,me);for(Ae in o)me=o[Ae],_e=a[Ae],!o.hasOwnProperty(Ae)||me===_e||me==null&&_e==null||Zt(t,n,Ae,me,o,_e)}function Lg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ky(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,b=u.initiatorType,N=u.duration;if(f&&N&&Lg(b)){for(b=0,N=u.responseEnd,o+=1;o<a.length;o++){var j=a[o],le=j.startTime;if(le>N)break;var Se=j.transferSize,Ae=j.initiatorType;Se&&Lg(Ae)&&(j=j.responseEnd,b+=Se*(j<N?1:(N-le)/(j-le)))}if(--o,n+=8*(f+b)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var rd=null,od=null;function sc(t){return t.nodeType===9?t:t.ownerDocument}function Og(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ld(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cd=null;function Qy(){var t=window.event;return t&&t.type==="popstate"?t===cd?!1:(cd=t,!0):(cd=null,!1)}var Ig=typeof setTimeout=="function"?setTimeout:void 0,Jy=typeof clearTimeout=="function"?clearTimeout:void 0,zg=typeof Promise=="function"?Promise:void 0,$y=typeof queueMicrotask=="function"?queueMicrotask:typeof zg<"u"?function(t){return zg.resolve(null).then(t).catch(eb)}:Ig;function eb(t){setTimeout(function(){throw t})}function Ja(t){return t==="head"}function Bg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Tr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Oo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Oo(a);for(var f=a.firstChild;f;){var b=f.nextSibling,N=f.nodeName;f[Da]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=b}}else a==="body"&&Oo(t.ownerDocument.body);a=u}while(a);Tr(n)}function Fg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function ud(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ud(a),Ua(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function tb(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Da])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Si(t.nextSibling),t===null)break}return null}function nb(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Si(t.nextSibling),t===null))return null;return t}function Gg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Si(t.nextSibling),t===null))return null;return t}function fd(t){return t.data==="$?"||t.data==="$~"}function dd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ib(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var hd=null;function Hg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Si(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Vg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function kg(t,n,a){switch(n=sc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Oo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ua(t)}var Mi=new Map,Xg=new Set;function rc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var va=X.d;X.d={f:ab,r:sb,D:rb,C:ob,L:lb,m:cb,X:fb,S:ub,M:db};function ab(){var t=va.f(),n=Ql();return t||n}function sb(t){var n=na(t);n!==null&&n.tag===5&&n.type==="form"?o0(n):va.r(t)}var Sr=typeof document>"u"?null:document;function jg(t,n,a){var o=Sr;if(o&&typeof n=="string"&&n){var u=kt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Xg.has(u)||(Xg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),On(n,"link",t),xn(n),o.head.appendChild(n)))}}function rb(t){va.D(t),jg("dns-prefetch",t,null)}function ob(t,n){va.C(t,n),jg("preconnect",t,n)}function lb(t,n,a){va.L(t,n,a);var o=Sr;if(o&&t&&n){var u='link[rel="preload"][as="'+kt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+kt(a.imageSizes)+'"]')):u+='[href="'+kt(t)+'"]';var f=u;switch(n){case"style":f=Mr(t);break;case"script":f=Er(t)}Mi.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Mi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Po(f))||n==="script"&&o.querySelector(Io(f))||(n=o.createElement("link"),On(n,"link",t),xn(n),o.head.appendChild(n)))}}function cb(t,n){va.m(t,n);var a=Sr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+kt(o)+'"][href="'+kt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Er(t)}if(!Mi.has(f)&&(t=_({rel:"modulepreload",href:t},n),Mi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(f)))return}o=a.createElement("link"),On(o,"link",t),xn(o),a.head.appendChild(o)}}}function ub(t,n,a){va.S(t,n,a);var o=Sr;if(o&&t){var u=La(o).hoistableStyles,f=Mr(t);n=n||"default";var b=u.get(f);if(!b){var N={loading:0,preload:null};if(b=o.querySelector(Po(f)))N.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Mi.get(f))&&pd(t,a);var j=b=o.createElement("link");xn(j),On(j,"link",t),j._p=new Promise(function(le,Se){j.onload=le,j.onerror=Se}),j.addEventListener("load",function(){N.loading|=1}),j.addEventListener("error",function(){N.loading|=2}),N.loading|=4,oc(b,n,o)}b={type:"stylesheet",instance:b,count:1,state:N},u.set(f,b)}}}function fb(t,n){va.X(t,n);var a=Sr;if(a&&t){var o=La(a).hoistableScripts,u=Er(t),f=o.get(u);f||(f=a.querySelector(Io(u)),f||(t=_({src:t,async:!0},n),(n=Mi.get(u))&&md(t,n),f=a.createElement("script"),xn(f),On(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function db(t,n){va.M(t,n);var a=Sr;if(a&&t){var o=La(a).hoistableScripts,u=Er(t),f=o.get(u);f||(f=a.querySelector(Io(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=Mi.get(u))&&md(t,n),f=a.createElement("script"),xn(f),On(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Wg(t,n,a,o){var u=(u=W.current)?rc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Mr(a.href),a=La(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Mr(a.href);var f=La(u).hoistableStyles,b=f.get(t);if(b||(u=u.ownerDocument||u,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,b),(f=u.querySelector(Po(t)))&&!f._p&&(b.instance=f,b.state.loading=5),Mi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mi.set(t,a),f||hb(u,t,a,b.state))),n&&o===null)throw Error(s(528,""));return b}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Er(a),a=La(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Mr(t){return'href="'+kt(t)+'"'}function Po(t){return'link[rel="stylesheet"]['+t+"]"}function qg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function hb(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),On(n,"link",a),xn(n),t.head.appendChild(n))}function Er(t){return'[src="'+kt(t)+'"]'}function Io(t){return"script[async]"+t}function Yg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+kt(a.href)+'"]');if(o)return n.instance=o,xn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),xn(o),On(o,"style",u),oc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Mr(a.href);var f=t.querySelector(Po(u));if(f)return n.state.loading|=4,n.instance=f,xn(f),f;o=qg(a),(u=Mi.get(u))&&pd(o,u),f=(t.ownerDocument||t).createElement("link"),xn(f);var b=f;return b._p=new Promise(function(N,j){b.onload=N,b.onerror=j}),On(f,"link",o),n.state.loading|=4,oc(f,a.precedence,t),n.instance=f;case"script":return f=Er(a.src),(u=t.querySelector(Io(f)))?(n.instance=u,xn(u),u):(o=a,(u=Mi.get(f))&&(o=_({},a),md(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),xn(u),On(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,oc(o,a.precedence,t));return n.instance}function oc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,b=0;b<o.length;b++){var N=o[b];if(N.dataset.precedence===n)f=N;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function pd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var lc=null;function Zg(t,n,a){if(lc===null){var o=new Map,u=lc=new Map;u.set(a,o)}else u=lc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Da]||f[gn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var b=f.getAttribute(n)||"";b=t+b;var N=o.get(b);N?N.push(f):o.set(b,[f])}}return o}function Kg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function pb(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Qg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function mb(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Mr(o.href),f=n.querySelector(Po(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=cc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,xn(f);return}f=n.ownerDocument||n,o=qg(o),(u=Mi.get(u))&&pd(o,u),f=f.createElement("link"),xn(f);var b=f;b._p=new Promise(function(N,j){b.onload=N,b.onerror=j}),On(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=cc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var gd=0;function gb(t,n){return t.stylesheets&&t.count===0&&fc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&fc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&gd===0&&(gd=62500*Ky());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&fc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>gd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function cc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var uc=null;function fc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,uc=new Map,n.forEach(xb,t),uc=null,cc.call(t))}function xb(t,n){if(!(n.state.loading&4)){var a=uc.get(t);if(a)var o=a.get(null);else{a=new Map,uc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var b=u[f];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),o=b)}o&&a.set(null,o)}u=n.instance,b=u.getAttribute("data-precedence"),f=a.get(b)||o,f===o&&a.set(null,u),a.set(b,u),this.count++,o=cc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var zo={$$typeof:O,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function _b(t,n,a,o,u,f,b,N,j){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function Jg(t,n,a,o,u,f,b,N,j,le,Se,Ae){return t=new _b(t,n,a,b,j,le,Se,Ae,N),n=1,f===!0&&(n|=24),f=ri(3,null,null,n),t.current=f,f.stateNode=t,n=Yu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ju(f),t}function $g(t){return t?(t=tr,t):tr}function ex(t,n,a,o,u,f){u=$g(u),o.context===null?o.context=u:o.pendingContext=u,o=Ha(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Va(t,o,n),a!==null&&(Jn(a,t,n),mo(a,t,n))}function tx(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function xd(t,n){tx(t,n),(t=t.alternate)&&tx(t,n)}function nx(t){if(t.tag===13||t.tag===31){var n=bs(t,67108864);n!==null&&Jn(n,t,67108864),xd(t,67108864)}}function ix(t){if(t.tag===13||t.tag===31){var n=fi();n=Kr(n);var a=bs(t,n);a!==null&&Jn(a,t,n),xd(t,n)}}var dc=!0;function vb(t,n,a,o){var u=G.T;G.T=null;var f=X.p;try{X.p=2,_d(t,n,a,o)}finally{X.p=f,G.T=u}}function yb(t,n,a,o){var u=G.T;G.T=null;var f=X.p;try{X.p=8,_d(t,n,a,o)}finally{X.p=f,G.T=u}}function _d(t,n,a,o){if(dc){var u=vd(o);if(u===null)ad(t,n,o,hc,a),sx(t,o);else if(Sb(u,t,n,a,o))o.stopPropagation();else if(sx(t,o),n&4&&-1<bb.indexOf(t)){for(;u!==null;){var f=na(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var b=De(f.pendingLanes);if(b!==0){var N=f;for(N.pendingLanes|=2,N.entangledLanes|=2;b;){var j=1<<31-je(b);N.entanglements[1]|=j,b&=~j}ji(f),(Bt&6)===0&&(Zl=Lt()+500,Do(0))}}break;case 31:case 13:N=bs(f,2),N!==null&&Jn(N,f,2),Ql(),xd(f,2)}if(f=vd(o),f===null&&ad(t,n,o,hc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else ad(t,n,o,null,a)}}function vd(t){return t=yu(t),yd(t)}var hc=null;function yd(t){if(hc=null,t=ta(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=m(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return hc=t,null}function ax(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zt()){case B:return 2;case T:return 8;case se:case he:return 32;case ye:return 268435456;default:return 32}default:return 32}}var bd=!1,$a=null,es=null,ts=null,Bo=new Map,Fo=new Map,ns=[],bb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sx(t,n){switch(t){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":es=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function Go(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=na(n),n!==null&&nx(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Sb(t,n,a,o,u){switch(n){case"focusin":return $a=Go($a,t,n,a,o,u),!0;case"dragenter":return es=Go(es,t,n,a,o,u),!0;case"mouseover":return ts=Go(ts,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Bo.set(f,Go(Bo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Fo.set(f,Go(Fo.get(f)||null,t,n,a,o,u)),!0}return!1}function rx(t){var n=ta(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Ys(t.priority,function(){ix(a)});return}}else if(n===31){if(n=m(a),n!==null){t.blockedOn=n,Ys(t.priority,function(){ix(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=vd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);vu=o,a.target.dispatchEvent(o),vu=null}else return n=na(a),n!==null&&nx(n),t.blockedOn=a,!1;n.shift()}return!0}function ox(t,n,a){pc(t)&&a.delete(n)}function Mb(){bd=!1,$a!==null&&pc($a)&&($a=null),es!==null&&pc(es)&&(es=null),ts!==null&&pc(ts)&&(ts=null),Bo.forEach(ox),Fo.forEach(ox)}function mc(t,n){t.blockedOn===n&&(t.blockedOn=null,bd||(bd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Mb)))}var gc=null;function lx(t){gc!==t&&(gc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){gc===t&&(gc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(yd(o||a)===null)continue;break}var f=na(a);f!==null&&(t.splice(n,3),n-=3,vf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Tr(t){function n(j){return mc(j,t)}$a!==null&&mc($a,t),es!==null&&mc(es,t),ts!==null&&mc(ts,t),Bo.forEach(n),Fo.forEach(n);for(var a=0;a<ns.length;a++){var o=ns[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ns.length&&(a=ns[0],a.blockedOn===null);)rx(a),a.blockedOn===null&&ns.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],b=u[Nn]||null;if(typeof f=="function")b||lx(a);else if(b){var N=null;if(f&&f.hasAttribute("formAction")){if(u=f,b=f[Nn]||null)N=b.formAction;else if(yd(u)!==null)continue}else N=b.action;typeof N=="function"?a[o+1]=N:(a.splice(o,3),o-=3),lx(a)}}}function cx(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(b){return u=b})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Sd(t){this._internalRoot=t}xc.prototype.render=Sd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=fi();ex(a,o,t,n,null,null)},xc.prototype.unmount=Sd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ex(t.current,2,null,t,null,null),Ql(),n[Wn]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Jr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ns.length&&n!==0&&n<ns[a].priority;a++);ns.splice(a,0,t),a===0&&rx(t)}};var ux=e.version;if(ux!=="19.2.8")throw Error(s(527,ux,"19.2.8"));X.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Eb={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{ve=_c.inject(Eb),be=_c}catch{}}return Vo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=x0,f=_0,b=v0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError)),n=Jg(t,1,!1,null,null,a,o,null,u,f,b,cx),t[Wn]=n.current,id(t),new Sd(n)},Vo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=x0,b=_0,N=v0,j=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(N=a.onRecoverableError),a.formState!==void 0&&(j=a.formState)),n=Jg(t,1,!0,n,a??null,o,u,j,f,b,N,cx),n.context=$g(null),a=n.current,o=fi(),o=Kr(o),u=Ha(o),u.callback=null,Va(a,u,o),a=o,n.current.lanes=a,Ye(n,a),ji(n),t[Wn]=n.current,id(t),new xc(n)},Vo.version="19.2.8",Vo}var yx;function Ob(){if(yx)return Td.exports;yx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Td.exports=Lb(),Td.exports}var Pb=Ob();const uh=[{id:"midnight_noir_mystery",title:"Midnight Noir: The Shadow Case",description:"A rain-slicked detective thriller. Search for clues, leap across city rooftops, interrogate suspects, and crack the Syndicate murder mystery with your detective partner.",genre:"mystery_crime",ageRating:"mature_mystery",weather:"rain_storm",gravity:24,musicMood:"noir_jazz",fogDensity:.035,ambientLightColor:"#1a2238",sunColor:"#4f709c",playerSpawn:[0,1.5,0],targetObjective:"Discover all 3 hidden crime clues and reach the rooftop extraction portal.",companion:{name:"Agent Evelyn Cross",title:"Senior Forensics Detective",archetype:"detective_partner",skinTone:"#f5d0b5",hairStyle:"bob",hairColor:"#1e1b18",outfitColor:"#2b2d42",accentColor:"#d90429",combatRole:"tactical_vanguard",dialogueGreet:"Rain's heavy tonight, partner. Keep your eyes sharp—the Syndicate left evidence scattered across these alleys.",dialogueCombat:"Cover me! Taking down the perimeter enforcers!",dialogueClueFound:"Good eye! That matches the encrypted ledger from the warehouse."},objects:[{id:"p1",name:"Alleyway Asphalt",type:"platform_stone",category:"platforms",position:[0,0,0],rotation:[0,0,0],scale:[8,.8,8],color:"#2b2d42"},{id:"p2",name:"Fire Escape Steps",type:"platform_metal",category:"platforms",position:[0,2,7],rotation:[0,0,0],scale:[4,.5,3],color:"#4a4e69"},{id:"p3",name:"Rooftop Pier",type:"platform_stone",category:"platforms",position:[0,4.5,14],rotation:[0,0,0],scale:[6,.8,6],color:"#22223b"},{id:"p_move1",name:"Window Washer Lift",type:"moving_platform",category:"platforms",position:[6,4.5,14],rotation:[0,0,0],scale:[3,.4,3],color:"#fca311",isMoving:!0,moveAxis:"x",moveDistance:6,moveSpeed:2},{id:"p4",name:"Clocktower Ledge",type:"platform_stone",category:"platforms",position:[15,6,14],rotation:[0,0,0],scale:[7,.8,7],color:"#1a1a2e"},{id:"p_bounce",name:"Awning Trampoline",type:"bouncy_pad",category:"platforms",position:[15,6.8,9],rotation:[0,0,0],scale:[2,.4,2],color:"#e63946"},{id:"p5",name:"Helipad Extraction",type:"platform_neon",category:"platforms",position:[15,11,2],rotation:[0,0,0],scale:[8,.8,8],color:"#0f3460"},{id:"hz1",name:"Exposed High Voltage Wire",type:"hazard_spikes",category:"hazards",position:[0,5,13],rotation:[0,0,0],scale:[1.5,.3,1.5],color:"#ff0055"},{id:"hz2",name:"Laser Tripwire",type:"hazard_laser",category:"hazards",position:[15,6.6,16],rotation:[0,0,0],scale:[4,.2,.2],color:"#ff0055"},{id:"clue1",name:"Torn Encrypted Dossier",type:"clue_document",category:"mystery",position:[2,1,2],rotation:[0,0,0],scale:[.8,.8,.8],color:"#ffb703",mysteryClueTitle:"Burned Shipping Ledger",mysteryClueDescription:'Lists midnight shipments to Dock 4 under code "Cerberus".'},{id:"clue2",name:"Drop-off Cipher Keycard",type:"keycard",category:"mystery",position:[0,5.5,15],rotation:[0,0,0],scale:[.8,.8,.8],color:"#06d6a0",mysteryClueTitle:"Executive Penthouse Key",mysteryClueDescription:"Contains fingerprint residue matching the prime suspect."},{id:"clue3",name:"Discarded Revolver",type:"clue_weapon_drop",category:"mystery",position:[17,7,14],rotation:[0,0,0],scale:[.8,.8,.8],color:"#e76f51",mysteryClueTitle:"Custom Snub-Nose Revolver",mysteryClueDescription:"Fired twice. Serial number scratched off, but barrel rifling is distinct."},{id:"en1",name:"Syndicate Enforcer",type:"enemy_guard",category:"characters",position:[0,5.5,12],rotation:[0,0,0],scale:[1,1.8,1],color:"#7209b7",hp:40,maxHp:40},{id:"en2",name:"Patrol Drone",type:"enemy_drone",category:"characters",position:[14,8,14],rotation:[0,0,0],scale:[1,1,1],color:"#d00000",hp:25,maxHp:25},{id:"lt1",name:"Street Lamp Amber",type:"street_lamp",category:"lights",position:[-3,2,-2],rotation:[0,0,0],scale:[.6,3,.6],color:"#ffb703"},{id:"lt2",name:"Neon Rooftop Sign",type:"torch_light",category:"lights",position:[3,6,14],rotation:[0,0,0],scale:[.6,2,.6],color:"#4cc9f0"},{id:"exit1",name:"Police Extraction VTOL",type:"portal_exit",category:"items",position:[15,12,2],rotation:[0,0,0],scale:[2,2.5,2],color:"#00f5d4"}],storyNodes:[{id:"node_start",speaker:"Agent Evelyn Cross",text:"The rain won't wash away what happened here. The victim was an informant for Internal Affairs. We have three minutes before backup units get diverted.",choices:[{text:"Let's inspect the alleyway first. Check for discarded documents.",nextNodeId:"node_alley"},{text:"Where did the suspect flee?",nextNodeId:"node_rooftop"}]},{id:"node_alley",speaker:"Agent Evelyn Cross",text:"Look over near the dumpster—there is a burned paper glowing under the sodium lamp. Let's grab it!",choices:[{text:"On it. Lead the way up the fire escape.",nextNodeId:"node_rooftop"}]},{id:"node_rooftop",speaker:"Agent Evelyn Cross",text:"They jumped across the rooftops toward the high-voltage relay. Watch your step, and punch through anyone blocking our route!",choices:[{text:"We'll take them down together.",nextNodeId:"node_climax"}]},{id:"node_climax",speaker:"Agent Evelyn Cross",text:"All clues lead to the helipad. Once you recover the weapon and ledger, our VTOL will extract us with the case closed.",choices:[{text:"Time to wrap this up.",nextNodeId:"node_start"}]}],initialNodeId:"node_start"},{id:"cyber_action_rush",title:"Neon Overdrive: Data Heist",description:"High-speed cyberpunk action platformer. Navigate shifting holographic platforms, dodge laser grids, smash rogue security bots, and upload the master core.",genre:"cyber_action",ageRating:"teen_adventure",weather:"neon_night",gravity:28,musicMood:"synth_action",fogDensity:.02,ambientLightColor:"#0a0f24",sunColor:"#00f0ff",playerSpawn:[0,1.5,0],targetObjective:"Infiltrate the Central Server tower, neutralize rogue security bots, and extract the Neural Core.",companion:{name:"Kira Neo",title:"Neural Net Runner",archetype:"cyber_operative",skinTone:"#f8d7c4",hairStyle:"short_pixie",hairColor:"#00f0ff",outfitColor:"#121629",accentColor:"#ff0055",combatRole:"scout_sniper",dialogueGreet:"Grid security is overclocked! Stay light on your feet and watch out for the laser sweeps!",dialogueCombat:"Hacking their combat subroutines now—strikers, engage!",dialogueClueFound:"Sub-node breached! Encryption key deciphered."},objects:[{id:"cp1",name:"Grid Node Alpha",type:"platform_neon",category:"platforms",position:[0,0,0],rotation:[0,0,0],scale:[7,.6,7],color:"#16213e"},{id:"cp2",name:"Floating Server Deck",type:"moving_platform",category:"platforms",position:[0,2,7],rotation:[0,0,0],scale:[3.5,.4,3.5],color:"#00f0ff",isMoving:!0,moveAxis:"z",moveDistance:5,moveSpeed:3},{id:"cp3",name:"Core Firewall Platform",type:"platform_metal",category:"platforms",position:[0,4.5,17],rotation:[0,0,0],scale:[6,.6,6],color:"#1a1a2e"},{id:"cp_laser",name:"Security Grid Laser",type:"hazard_laser",category:"hazards",position:[0,5.2,16],rotation:[0,0,0],scale:[5,.2,.2],color:"#ff0055"},{id:"cp_bounce",name:"Magnetic Kinetic Pad",type:"bouncy_pad",category:"platforms",position:[0,5.2,18],rotation:[0,0,0],scale:[2,.4,2],color:"#7209b7"},{id:"cp4",name:"Mainframe Apex",type:"platform_neon",category:"platforms",position:[0,10,18],rotation:[0,0,0],scale:[6,.8,6],color:"#ff0055"},{id:"cp_gem",name:"Neural Core Data Shard",type:"gem_rare",category:"items",position:[0,11,18],rotation:[0,0,0],scale:[1,1,1],color:"#00f0ff"},{id:"cp_bot1",name:"Sentry Drone 01",type:"enemy_drone",category:"characters",position:[0,6,17],rotation:[0,0,0],scale:[1,1,1],color:"#ff0055",hp:30,maxHp:30},{id:"cp_exit",name:"Data Uplink Portal",type:"portal_exit",category:"items",position:[0,11.5,15],rotation:[0,0,0],scale:[2,2.5,2],color:"#00f0ff"}],storyNodes:[{id:"node_start",speaker:"Kira Neo",text:"We're inside the mainframe perimeter. The firewall lasers are cycling every three seconds. Grab the Data Shard on the apex!",choices:[{text:"Synchronize jumps with the floating platforms.",nextNodeId:"node_ready"}]},{id:"node_ready",speaker:"Kira Neo",text:"I'll cover you from the uplink node. Jump, strike the patrol drones, and don't look down!",choices:[{text:"Let's crack this mainframe!",nextNodeId:"node_start"}]}],initialNodeId:"node_start"},{id:"sunny_meadow_bounce",title:"Cloud Kingdom: Meadow Quest",description:"A cheerful, all-ages 3D platformer suitable for children and families. Bounce on cloud trampolines, collect golden coins, and reach the Rainbow Castle.",genre:"all_ages_platformer",ageRating:"all_ages",weather:"clear_day",gravity:22,musicMood:"playful_bounce",fogDensity:.005,ambientLightColor:"#fffae6",sunColor:"#fff275",playerSpawn:[0,1.5,0],targetObjective:"Collect 5 gold coins and bounce across the cloud stepping stones to the finish castle!",companion:{name:"Pip the Sprite",title:"Meadow Guide",archetype:"adventurer",skinTone:"#fed0bb",hairStyle:"ponytail",hairColor:"#ff9f1c",outfitColor:"#2ec4b6",accentColor:"#e71d36",combatRole:"support_medic",dialogueGreet:"Yay, welcome to Cloud Kingdom! The bouncy pads will send you super high into the sky!",dialogueCombat:"Cheering you on! You can do it!",dialogueClueFound:"Woohoo! Shiny star found!"},objects:[{id:"sp1",name:"Green Meadow Island",type:"platform_wood",category:"platforms",position:[0,0,0],rotation:[0,0,0],scale:[8,1,8],color:"#55a630"},{id:"sp_c1",name:"Gold Coin 1",type:"coin_collectible",category:"items",position:[0,1.5,2],rotation:[0,0,0],scale:[.7,.7,.7],color:"#ffd166"},{id:"sp_c2",name:"Gold Coin 2",type:"coin_collectible",category:"items",position:[2,1.5,0],rotation:[0,0,0],scale:[.7,.7,.7],color:"#ffd166"},{id:"sp_bounce1",name:"Sunflower Bouncer",type:"bouncy_pad",category:"platforms",position:[0,.8,4],rotation:[0,0,0],scale:[2,.5,2],color:"#ffb703"},{id:"sp2",name:"Floating Cloud Island",type:"platform_stone",category:"platforms",position:[0,4,9],rotation:[0,0,0],scale:[5,.8,5],color:"#a0c4ff"},{id:"sp_c3",name:"Gold Coin 3",type:"coin_collectible",category:"items",position:[0,5.2,9],rotation:[0,0,0],scale:[.7,.7,.7],color:"#ffd166"},{id:"sp_move",name:"Rainbow Breeze Tram",type:"moving_platform",category:"platforms",position:[0,5,14],rotation:[0,0,0],scale:[3,.4,3],color:"#ffc6ff",isMoving:!0,moveAxis:"x",moveDistance:5,moveSpeed:2},{id:"sp3",name:"Castle Clouds",type:"platform_wood",category:"platforms",position:[0,7.5,20],rotation:[0,0,0],scale:[7,1,7],color:"#fdffb6"},{id:"sp_chest",name:"Star Treasure Chest",type:"chest_loot",category:"items",position:[0,8.8,20],rotation:[0,0,0],scale:[1.2,1,1.2],color:"#ffb703"},{id:"sp_exit",name:"Rainbow Castle Goal",type:"portal_exit",category:"items",position:[0,9,22],rotation:[0,0,0],scale:[2,2.5,2],color:"#48cae4"}],storyNodes:[{id:"node_start",speaker:"Pip the Sprite",text:"Hop onto the bouncy pads and float across to the castle in the clouds! Watch out for dizzy spins!",choices:[{text:"Let's go bounce!",nextNodeId:"node_start"}]}],initialNodeId:"node_start"}];class Ib{constructor(){this.ctx=null,this.rainNode=null,this.isMuted=!1}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(e){this.isMuted=e}playJump(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.createOscillator(),i=this.ctx.createGain(),s=this.ctx.currentTime;e.type="sine",e.frequency.setValueAtTime(150,s),e.frequency.exponentialRampToValueAtTime(450,s+.18),i.gain.setValueAtTime(.2,s),i.gain.exponentialRampToValueAtTime(.01,s+.2),e.connect(i),i.connect(this.ctx.destination),e.start(s),e.stop(s+.2)}playStep(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.createOscillator(),i=this.ctx.createGain(),s=this.ctx.currentTime;e.type="triangle",e.frequency.setValueAtTime(80,s),e.frequency.exponentialRampToValueAtTime(30,s+.05),i.gain.setValueAtTime(.08,s),i.gain.exponentialRampToValueAtTime(.001,s+.05),e.connect(i),i.connect(this.ctx.destination),e.start(s),e.stop(s+.05)}playAttack(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.createOscillator(),i=this.ctx.createGain(),s=this.ctx.currentTime;e.type="sawtooth",e.frequency.setValueAtTime(320,s),e.frequency.exponentialRampToValueAtTime(80,s+.15),i.gain.setValueAtTime(.25,s),i.gain.exponentialRampToValueAtTime(.01,s+.16),e.connect(i),i.connect(this.ctx.destination),e.start(s),e.stop(s+.16)}playHit(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.createOscillator(),i=this.ctx.createGain(),s=this.ctx.currentTime;e.type="square",e.frequency.setValueAtTime(140,s),e.frequency.exponentialRampToValueAtTime(40,s+.12),i.gain.setValueAtTime(.3,s),i.gain.exponentialRampToValueAtTime(.01,s+.14),e.connect(i),i.connect(this.ctx.destination),e.start(s),e.stop(s+.14)}playCoin(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.createOscillator(),i=this.ctx.createGain(),s=this.ctx.currentTime;e.type="sine",e.frequency.setValueAtTime(987.77,s),e.frequency.setValueAtTime(1318.51,s+.08),i.gain.setValueAtTime(.18,s),i.gain.exponentialRampToValueAtTime(.01,s+.3),e.connect(i),i.connect(this.ctx.destination),e.start(s),e.stop(s+.3)}playClueFound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime;[293.66,349.23,440,523.25].forEach((s,l)=>{if(!this.ctx)return;const c=this.ctx.createOscillator(),d=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(s,e+l*.06),d.gain.setValueAtTime(.15,e+l*.06),d.gain.exponentialRampToValueAtTime(.001,e+l*.06+.7),c.connect(d),d.connect(this.ctx.destination),c.start(e+l*.06),c.stop(e+l*.06+.7)})}playVictory(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime;[440,554.37,659.25,880].forEach((s,l)=>{if(!this.ctx)return;const c=this.ctx.createOscillator(),d=this.ctx.createGain();c.type="triangle",c.frequency.setValueAtTime(s,e+l*.1),d.gain.setValueAtTime(.2,e+l*.1),d.gain.exponentialRampToValueAtTime(.01,e+l*.1+.5),c.connect(d),d.connect(this.ctx.destination),c.start(e+l*.1),c.stop(e+l*.1+.5)})}toggleRainAmbient(e){var i,s;if(!e){if(this.rainNode){try{(s=(i=this.rainNode).stop)==null||s.call(i)}catch{}this.rainNode=null}return}if(!(this.rainNode||this.isMuted)&&(this.initContext(),!!this.ctx))try{const l=this.ctx.sampleRate*2,c=this.ctx.createBuffer(1,l,this.ctx.sampleRate),d=c.getChannelData(0);for(let v=0;v<l;v++)d[v]=(Math.random()*2-1)*.04;const m=this.ctx.createBufferSource();m.buffer=c,m.loop=!0;const p=this.ctx.createBiquadFilter();p.type="lowpass",p.frequency.value=1e3;const h=this.ctx.createGain();h.gain.value=.05,m.connect(p),p.connect(h),h.connect(this.ctx.destination),m.start(),this.rainNode=m}catch{}}}const kn=new Ib;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lp="185",zb=0,bx=1,Bb=2,Yc=1,L_=2,Qo=3,ds=0,ei=1,Ci=2,wa=0,Gr=1,Sx=2,Mx=3,Ex=4,Fb=5,Fs=100,Gb=101,Hb=102,Vb=103,kb=104,Xb=200,jb=201,Wb=202,qb=203,fh=204,dh=205,Yb=206,Zb=207,Kb=208,Qb=209,Jb=210,$b=211,eS=212,tS=213,nS=214,hh=0,ph=1,mh=2,kr=3,gh=4,xh=5,_h=6,vh=7,O_=0,iS=1,aS=2,Qi=0,P_=1,I_=2,z_=3,cp=4,B_=5,F_=6,G_=7,H_=300,Xs=301,Xr=302,Rd=303,Nd=304,pu=306,yh=1e3,Aa=1001,bh=1002,Pn=1003,sS=1004,vc=1005,Gn=1006,Dd=1007,Hs=1008,mi=1009,V_=1010,k_=1011,il=1012,up=1013,$i=1014,Zi=1015,Ra=1016,fp=1017,dp=1018,al=1020,X_=35902,j_=35899,W_=1021,q_=1022,Bi=1023,Na=1026,Vs=1027,Y_=1028,hp=1029,js=1030,pp=1031,mp=1033,Zc=33776,Kc=33777,Qc=33778,Jc=33779,Sh=35840,Mh=35841,Eh=35842,Th=35843,Ah=36196,wh=37492,Ch=37496,Rh=37488,Nh=37489,tu=37490,Dh=37491,Uh=37808,Lh=37809,Oh=37810,Ph=37811,Ih=37812,zh=37813,Bh=37814,Fh=37815,Gh=37816,Hh=37817,Vh=37818,kh=37819,Xh=37820,jh=37821,Wh=36492,qh=36494,Yh=36495,Zh=36283,Kh=36284,nu=36285,Qh=36286,rS=3200,Jh=0,oS=1,us="",wi="srgb",iu="srgb-linear",au="linear",qt="srgb",Ar=7680,Tx=519,lS=512,cS=513,uS=514,gp=515,fS=516,dS=517,xp=518,hS=519,Ax=35044,wx="300 es",Ki=2e3,sl=2001;function pS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function su(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mS(){const r=su("canvas");return r.style.display="block",r}const Cx={};function Rx(...r){const e="THREE."+r.shift();console.log(e,...r)}function Z_(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ut(...r){r=Z_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Dt(...r){r=Z_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function Hr(...r){const e=r.join(" ");e in Cx||(Cx[e]=!0,ut(...r))}function gS(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const xS={[hh]:ph,[mh]:_h,[gh]:vh,[kr]:xh,[ph]:hh,[_h]:mh,[vh]:gh,[xh]:kr};class Ws{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$c=Math.PI/180,$h=180/Math.PI;function rl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]).toLowerCase()}function Rt(r,e,i){return Math.max(e,Math.min(i,r))}function _S(r,e){return(r%e+e)%e}function Ud(r,e,i){return(1-i)*r+i*e}function ko(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $n(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Cp=class Cp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Rt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cp.prototype.isVector2=!0;let _t=Cp;class qr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,m){let p=s[l+0],h=s[l+1],v=s[l+2],_=s[l+3],x=c[d+0],M=c[d+1],A=c[d+2],C=c[d+3];if(_!==C||p!==x||h!==M||v!==A){let S=p*x+h*M+v*A+_*C;S<0&&(x=-x,M=-M,A=-A,C=-C,S=-S);let y=1-m;if(S<.9995){const U=Math.acos(S),O=Math.sin(U);y=Math.sin(y*U)/O,m=Math.sin(m*U)/O,p=p*y+x*m,h=h*y+M*m,v=v*y+A*m,_=_*y+C*m}else{p=p*y+x*m,h=h*y+M*m,v=v*y+A*m,_=_*y+C*m;const U=1/Math.sqrt(p*p+h*h+v*v+_*_);p*=U,h*=U,v*=U,_*=U}}e[i]=p,e[i+1]=h,e[i+2]=v,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,c,d){const m=s[l],p=s[l+1],h=s[l+2],v=s[l+3],_=c[d],x=c[d+1],M=c[d+2],A=c[d+3];return e[i]=m*A+v*_+p*M-h*x,e[i+1]=p*A+v*x+h*_-m*M,e[i+2]=h*A+v*M+m*x-p*_,e[i+3]=v*A-m*_-p*x-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,m=Math.cos,p=Math.sin,h=m(s/2),v=m(l/2),_=m(c/2),x=p(s/2),M=p(l/2),A=p(c/2);switch(d){case"XYZ":this._x=x*v*_+h*M*A,this._y=h*M*_-x*v*A,this._z=h*v*A+x*M*_,this._w=h*v*_-x*M*A;break;case"YXZ":this._x=x*v*_+h*M*A,this._y=h*M*_-x*v*A,this._z=h*v*A-x*M*_,this._w=h*v*_+x*M*A;break;case"ZXY":this._x=x*v*_-h*M*A,this._y=h*M*_+x*v*A,this._z=h*v*A+x*M*_,this._w=h*v*_-x*M*A;break;case"ZYX":this._x=x*v*_-h*M*A,this._y=h*M*_+x*v*A,this._z=h*v*A-x*M*_,this._w=h*v*_+x*M*A;break;case"YZX":this._x=x*v*_+h*M*A,this._y=h*M*_+x*v*A,this._z=h*v*A-x*M*_,this._w=h*v*_-x*M*A;break;case"XZY":this._x=x*v*_-h*M*A,this._y=h*M*_-x*v*A,this._z=h*v*A+x*M*_,this._w=h*v*_+x*M*A;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],m=i[5],p=i[9],h=i[2],v=i[6],_=i[10],x=s+m+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-p)*M,this._y=(c-h)*M,this._z=(d-l)*M}else if(s>m&&s>_){const M=2*Math.sqrt(1+s-m-_);this._w=(v-p)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+h)/M}else if(m>_){const M=2*Math.sqrt(1+m-s-_);this._w=(c-h)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+_-s-m);this._w=(d-l)/M,this._x=(c+h)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,m=i._x,p=i._y,h=i._z,v=i._w;return this._x=s*v+d*m+l*h-c*p,this._y=l*v+d*p+c*m-s*h,this._z=c*v+d*h+s*p-l*m,this._w=d*v-s*m-l*p-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,m=this.dot(e);m<0&&(s=-s,l=-l,c=-c,d=-d,m=-m);let p=1-i;if(m<.9995){const h=Math.acos(m),v=Math.sin(h);p=Math.sin(p*h)/v,i=Math.sin(i*h)/v,this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Rp=class Rp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Nx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Nx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,m=e.z,p=e.w,h=2*(d*l-m*s),v=2*(m*i-c*l),_=2*(c*s-d*i);return this.x=i+p*h+d*_-m*v,this.y=s+p*v+m*h-c*_,this.z=l+p*_+c*v-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,m=i.y,p=i.z;return this.x=l*p-c*m,this.y=c*d-s*p,this.z=s*m-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ld.copy(this).projectOnVector(e),this.sub(Ld)}reflect(e){return this.sub(Ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Rt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rp.prototype.isVector3=!0;let Q=Rp;const Ld=new Q,Nx=new qr,Np=class Np{constructor(e,i,s,l,c,d,m,p,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,m,p,h)}set(e,i,s,l,c,d,m,p,h){const v=this.elements;return v[0]=e,v[1]=l,v[2]=m,v[3]=i,v[4]=c,v[5]=p,v[6]=s,v[7]=d,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],m=s[3],p=s[6],h=s[1],v=s[4],_=s[7],x=s[2],M=s[5],A=s[8],C=l[0],S=l[3],y=l[6],U=l[1],O=l[4],w=l[7],I=l[2],P=l[5],z=l[8];return c[0]=d*C+m*U+p*I,c[3]=d*S+m*O+p*P,c[6]=d*y+m*w+p*z,c[1]=h*C+v*U+_*I,c[4]=h*S+v*O+_*P,c[7]=h*y+v*w+_*z,c[2]=x*C+M*U+A*I,c[5]=x*S+M*O+A*P,c[8]=x*y+M*w+A*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],m=e[5],p=e[6],h=e[7],v=e[8];return i*d*v-i*m*h-s*c*v+s*m*p+l*c*h-l*d*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],m=e[5],p=e[6],h=e[7],v=e[8],_=v*d-m*h,x=m*p-v*c,M=h*c-d*p,A=i*_+s*x+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=_*C,e[1]=(l*h-v*s)*C,e[2]=(m*s-l*d)*C,e[3]=x*C,e[4]=(v*i-l*p)*C,e[5]=(l*c-m*i)*C,e[6]=M*C,e[7]=(s*p-h*i)*C,e[8]=(d*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,m){const p=Math.cos(c),h=Math.sin(c);return this.set(s*p,s*h,-s*(p*d+h*m)+d+e,-l*h,l*p,-l*(-h*d+p*m)+m+i,0,0,1),this}scale(e,i){return Hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Od.makeScale(e,i)),this}rotate(e){return Hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Od.makeRotation(-e)),this}translate(e,i){return Hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Od.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Np.prototype.isMatrix3=!0;let ht=Np;const Od=new ht,Dx=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ux=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vS(){const r={enabled:!0,workingColorSpace:iu,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===qt&&(l.r=Ca(l.r),l.g=Ca(l.g),l.b=Ca(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qt&&(l.r=Vr(l.r),l.g=Vr(l.g),l.b=Vr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===us?au:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[iu]:{primaries:e,whitePoint:s,transfer:au,toXYZ:Dx,fromXYZ:Ux,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:wi},outputColorSpaceConfig:{drawingBufferColorSpace:wi}},[wi]:{primaries:e,whitePoint:s,transfer:qt,toXYZ:Dx,fromXYZ:Ux,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:wi}}}),r}const Ct=vS();function Ca(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let wr;class yS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{wr===void 0&&(wr=su("canvas")),wr.width=e.width,wr.height=e.height;const l=wr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=wr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=su("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Ca(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ca(i[s]/255)*255):i[s]=Ca(i[s]);return{data:i,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bS=0;class _p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=rl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,m=l.length;d<m;d++)l[d].isDataTexture?c.push(Pd(l[d].image)):c.push(Pd(l[d]))}else c=Pd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Pd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?yS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let SS=0;const Id=new Q;class jn extends Ws{constructor(e=jn.DEFAULT_IMAGE,i=jn.DEFAULT_MAPPING,s=Aa,l=Aa,c=Gn,d=Hs,m=Bi,p=mi,h=jn.DEFAULT_ANISOTROPY,v=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=rl(),this.name="",this.source=new _p(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=m,this.internalFormat=null,this.type=p,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Id).x}get height(){return this.source.getSize(Id).y}get depth(){return this.source.getSize(Id).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==H_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yh:e.x=e.x-Math.floor(e.x);break;case Aa:e.x=e.x<0?0:1;break;case bh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yh:e.y=e.y-Math.floor(e.y);break;case Aa:e.y=e.y<0?0:1;break;case bh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=H_;jn.DEFAULT_ANISOTROPY=1;const Dp=class Dp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const p=e.elements,h=p[0],v=p[4],_=p[8],x=p[1],M=p[5],A=p[9],C=p[2],S=p[6],y=p[10];if(Math.abs(v-x)<.01&&Math.abs(_-C)<.01&&Math.abs(A-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+C)<.1&&Math.abs(A+S)<.1&&Math.abs(h+M+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(h+1)/2,w=(M+1)/2,I=(y+1)/2,P=(v+x)/4,z=(_+C)/4,E=(A+S)/4;return O>w&&O>I?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=P/s,c=z/s):w>I?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=P/l,c=E/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=z/c,l=E/c),this.set(s,l,c,i),this}let U=Math.sqrt((S-A)*(S-A)+(_-C)*(_-C)+(x-v)*(x-v));return Math.abs(U)<.001&&(U=1),this.x=(S-A)/U,this.y=(_-C)/U,this.z=(x-v)/U,this.w=Math.acos((h+M+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this.w=Rt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this.w=Rt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dp.prototype.isVector4=!0;let cn=Dp;class MS extends Ws{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,e,i),this.scissorTest=!1,this.viewport=new cn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new jn(l),d=s.count;for(let m=0;m<d;m++)this.textures[m]=c.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new _p(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends MS{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class K_ extends jn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ES extends jn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hu=class hu{constructor(e,i,s,l,c,d,m,p,h,v,_,x,M,A,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,m,p,h,v,_,x,M,A,C,S)}set(e,i,s,l,c,d,m,p,h,v,_,x,M,A,C,S){const y=this.elements;return y[0]=e,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=d,y[9]=m,y[13]=p,y[2]=h,y[6]=v,y[10]=_,y[14]=x,y[3]=M,y[7]=A,y[11]=C,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Cr.setFromMatrixColumn(e,0).length(),c=1/Cr.setFromMatrixColumn(e,1).length(),d=1/Cr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),m=Math.sin(s),p=Math.cos(l),h=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=d*v,M=d*_,A=m*v,C=m*_;i[0]=p*v,i[4]=-p*_,i[8]=h,i[1]=M+A*h,i[5]=x-C*h,i[9]=-m*p,i[2]=C-x*h,i[6]=A+M*h,i[10]=d*p}else if(e.order==="YXZ"){const x=p*v,M=p*_,A=h*v,C=h*_;i[0]=x+C*m,i[4]=A*m-M,i[8]=d*h,i[1]=d*_,i[5]=d*v,i[9]=-m,i[2]=M*m-A,i[6]=C+x*m,i[10]=d*p}else if(e.order==="ZXY"){const x=p*v,M=p*_,A=h*v,C=h*_;i[0]=x-C*m,i[4]=-d*_,i[8]=A+M*m,i[1]=M+A*m,i[5]=d*v,i[9]=C-x*m,i[2]=-d*h,i[6]=m,i[10]=d*p}else if(e.order==="ZYX"){const x=d*v,M=d*_,A=m*v,C=m*_;i[0]=p*v,i[4]=A*h-M,i[8]=x*h+C,i[1]=p*_,i[5]=C*h+x,i[9]=M*h-A,i[2]=-h,i[6]=m*p,i[10]=d*p}else if(e.order==="YZX"){const x=d*p,M=d*h,A=m*p,C=m*h;i[0]=p*v,i[4]=C-x*_,i[8]=A*_+M,i[1]=_,i[5]=d*v,i[9]=-m*v,i[2]=-h*v,i[6]=M*_+A,i[10]=x-C*_}else if(e.order==="XZY"){const x=d*p,M=d*h,A=m*p,C=m*h;i[0]=p*v,i[4]=-_,i[8]=h*v,i[1]=x*_+C,i[5]=d*v,i[9]=M*_-A,i[2]=A*_-M,i[6]=m*v,i[10]=C*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TS,e,AS)}lookAt(e,i,s){const l=this.elements;return di.subVectors(e,i),di.lengthSq()===0&&(di.z=1),di.normalize(),as.crossVectors(s,di),as.lengthSq()===0&&(Math.abs(s.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),as.crossVectors(s,di)),as.normalize(),yc.crossVectors(di,as),l[0]=as.x,l[4]=yc.x,l[8]=di.x,l[1]=as.y,l[5]=yc.y,l[9]=di.y,l[2]=as.z,l[6]=yc.z,l[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],m=s[4],p=s[8],h=s[12],v=s[1],_=s[5],x=s[9],M=s[13],A=s[2],C=s[6],S=s[10],y=s[14],U=s[3],O=s[7],w=s[11],I=s[15],P=l[0],z=l[4],E=l[8],D=l[12],V=l[1],H=l[5],Y=l[9],fe=l[13],xe=l[2],te=l[6],G=l[10],X=l[14],re=l[3],q=l[7],ee=l[11],L=l[15];return c[0]=d*P+m*V+p*xe+h*re,c[4]=d*z+m*H+p*te+h*q,c[8]=d*E+m*Y+p*G+h*ee,c[12]=d*D+m*fe+p*X+h*L,c[1]=v*P+_*V+x*xe+M*re,c[5]=v*z+_*H+x*te+M*q,c[9]=v*E+_*Y+x*G+M*ee,c[13]=v*D+_*fe+x*X+M*L,c[2]=A*P+C*V+S*xe+y*re,c[6]=A*z+C*H+S*te+y*q,c[10]=A*E+C*Y+S*G+y*ee,c[14]=A*D+C*fe+S*X+y*L,c[3]=U*P+O*V+w*xe+I*re,c[7]=U*z+O*H+w*te+I*q,c[11]=U*E+O*Y+w*G+I*ee,c[15]=U*D+O*fe+w*X+I*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],m=e[5],p=e[9],h=e[13],v=e[2],_=e[6],x=e[10],M=e[14],A=e[3],C=e[7],S=e[11],y=e[15],U=p*M-h*x,O=m*M-h*_,w=m*x-p*_,I=d*M-h*v,P=d*x-p*v,z=d*_-m*v;return i*(C*U-S*O+y*w)-s*(A*U-S*I+y*P)+l*(A*O-C*I+y*z)-c*(A*w-C*P+S*z)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],d=e[5],m=e[9],p=e[2],h=e[6],v=e[10];return i*(d*v-m*h)-s*(c*v-m*p)+l*(c*h-d*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],m=e[5],p=e[6],h=e[7],v=e[8],_=e[9],x=e[10],M=e[11],A=e[12],C=e[13],S=e[14],y=e[15],U=i*m-s*d,O=i*p-l*d,w=i*h-c*d,I=s*p-l*m,P=s*h-c*m,z=l*h-c*p,E=v*C-_*A,D=v*S-x*A,V=v*y-M*A,H=_*S-x*C,Y=_*y-M*C,fe=x*y-M*S,xe=U*fe-O*Y+w*H+I*V-P*D+z*E;if(xe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const te=1/xe;return e[0]=(m*fe-p*Y+h*H)*te,e[1]=(l*Y-s*fe-c*H)*te,e[2]=(C*z-S*P+y*I)*te,e[3]=(x*P-_*z-M*I)*te,e[4]=(p*V-d*fe-h*D)*te,e[5]=(i*fe-l*V+c*D)*te,e[6]=(S*w-A*z-y*O)*te,e[7]=(v*z-x*w+M*O)*te,e[8]=(d*Y-m*V+h*E)*te,e[9]=(s*V-i*Y-c*E)*te,e[10]=(A*P-C*w+y*U)*te,e[11]=(_*w-v*P-M*U)*te,e[12]=(m*D-d*H-p*E)*te,e[13]=(i*H-s*D+l*E)*te,e[14]=(C*O-A*I-S*U)*te,e[15]=(v*I-_*O+x*U)*te,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,m=e.y,p=e.z,h=c*d,v=c*m;return this.set(h*d+s,h*m-l*p,h*p+l*m,0,h*m+l*p,v*m+s,v*p-l*d,0,h*p-l*m,v*p+l*d,c*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,m=i._z,p=i._w,h=c+c,v=d+d,_=m+m,x=c*h,M=c*v,A=c*_,C=d*v,S=d*_,y=m*_,U=p*h,O=p*v,w=p*_,I=s.x,P=s.y,z=s.z;return l[0]=(1-(C+y))*I,l[1]=(M+w)*I,l[2]=(A-O)*I,l[3]=0,l[4]=(M-w)*P,l[5]=(1-(x+y))*P,l[6]=(S+U)*P,l[7]=0,l[8]=(A+O)*z,l[9]=(S-U)*z,l[10]=(1-(x+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Cr.set(l[0],l[1],l[2]).length();const m=Cr.set(l[4],l[5],l[6]).length(),p=Cr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Pi.copy(this);const h=1/d,v=1/m,_=1/p;return Pi.elements[0]*=h,Pi.elements[1]*=h,Pi.elements[2]*=h,Pi.elements[4]*=v,Pi.elements[5]*=v,Pi.elements[6]*=v,Pi.elements[8]*=_,Pi.elements[9]*=_,Pi.elements[10]*=_,i.setFromRotationMatrix(Pi),s.x=d,s.y=m,s.z=p,this}makePerspective(e,i,s,l,c,d,m=Ki,p=!1){const h=this.elements,v=2*c/(i-e),_=2*c/(s-l),x=(i+e)/(i-e),M=(s+l)/(s-l);let A,C;if(p)A=c/(d-c),C=d*c/(d-c);else if(m===Ki)A=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(m===sl)A=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return h[0]=v,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=_,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=A,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,d,m=Ki,p=!1){const h=this.elements,v=2/(i-e),_=2/(s-l),x=-(i+e)/(i-e),M=-(s+l)/(s-l);let A,C;if(p)A=1/(d-c),C=d/(d-c);else if(m===Ki)A=-2/(d-c),C=-(d+c)/(d-c);else if(m===sl)A=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return h[0]=v,h[4]=0,h[8]=0,h[12]=x,h[1]=0,h[5]=_,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=A,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};hu.prototype.isMatrix4=!0;let tn=hu;const Cr=new Q,Pi=new tn,TS=new Q(0,0,0),AS=new Q(1,1,1),as=new Q,yc=new Q,di=new Q,Lx=new tn,Ox=new qr;class hs{constructor(e=0,i=0,s=0,l=hs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],m=l[8],p=l[1],h=l[5],v=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(m,M),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Rt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Rt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(m,M));break;case"XZY":this._z=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(m,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Lx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lx,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Ox.setFromEuler(this),this.setFromQuaternion(Ox,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hs.DEFAULT_ORDER="XYZ";class vp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wS=0;const Px=new Q,Rr=new qr,ya=new tn,bc=new Q,Xo=new Q,CS=new Q,RS=new qr,Ix=new Q(1,0,0),zx=new Q(0,1,0),Bx=new Q(0,0,1),Fx={type:"added"},NS={type:"removed"},Nr={type:"childadded",child:null},zd={type:"childremoved",child:null};class Rn extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new Q,i=new hs,s=new qr,l=new Q(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new ht}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Rr.setFromAxisAngle(e,i),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,i){return Rr.setFromAxisAngle(e,i),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(Ix,e)}rotateY(e){return this.rotateOnAxis(zx,e)}rotateZ(e){return this.rotateOnAxis(Bx,e)}translateOnAxis(e,i){return Px.copy(e).applyQuaternion(this.quaternion),this.position.add(Px.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Ix,e)}translateY(e){return this.translateOnAxis(zx,e)}translateZ(e){return this.translateOnAxis(Bx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?bc.copy(e):bc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(Xo,bc,this.up):ya.lookAt(bc,Xo,this.up),this.quaternion.setFromRotationMatrix(ya),l&&(ya.extractRotation(l.matrixWorld),Rr.setFromRotationMatrix(ya),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fx),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(NS),zd.child=e,this.dispatchEvent(zd),zd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ya.multiply(e.parent.matrixWorld)),e.applyMatrix4(ya),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fx),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,CS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,RS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let d=0,m=c.length;d<m;d++)c[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(m,p){return m[p.uuid]===void 0&&(m[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const p=m.shapes;if(Array.isArray(p))for(let h=0,v=p.length;h<v;h++){const _=p[h];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let p=0,h=this.material.length;p<h;p++)m.push(c(e.materials,this.material[p]));l.material=m}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const p=this.animations[m];l.animations.push(c(e.animations,p))}}if(i){const m=d(e.geometries),p=d(e.materials),h=d(e.textures),v=d(e.images),_=d(e.shapes),x=d(e.skeletons),M=d(e.animations),A=d(e.nodes);m.length>0&&(s.geometries=m),p.length>0&&(s.materials=p),h.length>0&&(s.textures=h),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(m){const p=[];for(const h in m){const v=m[h];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Rn.DEFAULT_UP=new Q(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ks extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DS={type:"move"};class Bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const m=this._targetRay,p=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const C of e.hand.values()){const S=i.getJointPose(C,s),y=this._getHandJoint(h,C);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const v=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],x=v.position.distanceTo(_.position),M=.02,A=.005;h.inputState.pinching&&x>M+A?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&x<=M-A&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));m!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(DS)))}return m!==null&&(m.visible=l!==null),p!==null&&(p.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new ks;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Q_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Fd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class lt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=wi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ct.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ct.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ct.workingColorSpace){if(e=_S(e,1),i=Rt(i,0,1),s=Rt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Fd(d,c,e+1/3),this.g=Fd(d,c,e),this.b=Fd(d,c,e-1/3)}return Ct.colorSpaceToWorking(this,l),this}setStyle(e,i=wi){function s(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],m=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ut("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=wi){const s=Q_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wi){return Ct.workingToColorSpace(Fn.copy(this),e),Math.round(Rt(Fn.r*255,0,255))*65536+Math.round(Rt(Fn.g*255,0,255))*256+Math.round(Rt(Fn.b*255,0,255))}getHexString(e=wi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ct.workingColorSpace){Ct.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,d=Math.max(s,l,c),m=Math.min(s,l,c);let p,h;const v=(m+d)/2;if(m===d)p=0,h=0;else{const _=d-m;switch(h=v<=.5?_/(d+m):_/(2-d-m),d){case s:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-s)/_+2;break;case c:p=(s-l)/_+4;break}p/=6}return e.h=p,e.s=h,e.l=v,e}getRGB(e,i=Ct.workingColorSpace){return Ct.workingToColorSpace(Fn.copy(this),i),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=wi){Ct.workingToColorSpace(Fn.copy(this),e);const i=Fn.r,s=Fn.g,l=Fn.b;return e!==wi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+i,ss.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ss),e.getHSL(Sc);const s=Ud(ss.h,Sc.h,i),l=Ud(ss.s,Sc.s,i),c=Ud(ss.l,Sc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new lt;lt.NAMES=Q_;class yp{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new lt(e),this.density=i}clone(){return new yp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class US extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hs,this.environmentIntensity=1,this.environmentRotation=new hs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ii=new Q,ba=new Q,Gd=new Q,Sa=new Q,Dr=new Q,Ur=new Q,Gx=new Q,Hd=new Q,Vd=new Q,kd=new Q,Xd=new cn,jd=new cn,Wd=new cn;class Ri{constructor(e=new Q,i=new Q,s=new Q){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ii.subVectors(e,i),l.cross(Ii);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ii.subVectors(l,i),ba.subVectors(s,i),Gd.subVectors(e,i);const d=Ii.dot(Ii),m=Ii.dot(ba),p=Ii.dot(Gd),h=ba.dot(ba),v=ba.dot(Gd),_=d*h-m*m;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(h*p-m*v)*x,A=(d*v-m*p)*x;return c.set(1-M-A,A,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(e,i,s,l,c,d,m,p){return this.getBarycoord(e,i,s,l,Sa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Sa.x),p.addScaledVector(d,Sa.y),p.addScaledVector(m,Sa.z),p)}static getInterpolatedAttribute(e,i,s,l,c,d){return Xd.setScalar(0),jd.setScalar(0),Wd.setScalar(0),Xd.fromBufferAttribute(e,i),jd.fromBufferAttribute(e,s),Wd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Xd,c.x),d.addScaledVector(jd,c.y),d.addScaledVector(Wd,c.z),d}static isFrontFacing(e,i,s,l){return Ii.subVectors(s,i),ba.subVectors(e,i),Ii.cross(ba).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),Ii.cross(ba).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ri.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ri.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,m;Dr.subVectors(l,s),Ur.subVectors(c,s),Hd.subVectors(e,s);const p=Dr.dot(Hd),h=Ur.dot(Hd);if(p<=0&&h<=0)return i.copy(s);Vd.subVectors(e,l);const v=Dr.dot(Vd),_=Ur.dot(Vd);if(v>=0&&_<=v)return i.copy(l);const x=p*_-v*h;if(x<=0&&p>=0&&v<=0)return d=p/(p-v),i.copy(s).addScaledVector(Dr,d);kd.subVectors(e,c);const M=Dr.dot(kd),A=Ur.dot(kd);if(A>=0&&M<=A)return i.copy(c);const C=M*h-p*A;if(C<=0&&h>=0&&A<=0)return m=h/(h-A),i.copy(s).addScaledVector(Ur,m);const S=v*A-M*_;if(S<=0&&_-v>=0&&M-A>=0)return Gx.subVectors(c,l),m=(_-v)/(_-v+(M-A)),i.copy(l).addScaledVector(Gx,m);const y=1/(S+C+x);return d=C*y,m=x*y,i.copy(s).addScaledVector(Dr,d).addScaledVector(Ur,m)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Yr{constructor(e=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(zi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(zi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=zi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,m=c.count;d<m;d++)e.isMesh===!0?e.getVertexPosition(d,zi):zi.fromBufferAttribute(c,d),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Mc.copy(s.boundingBox)),Mc.applyMatrix4(e.matrixWorld),this.union(Mc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Ec.subVectors(this.max,jo),Lr.subVectors(e.a,jo),Or.subVectors(e.b,jo),Pr.subVectors(e.c,jo),rs.subVectors(Or,Lr),os.subVectors(Pr,Or),Os.subVectors(Lr,Pr);let i=[0,-rs.z,rs.y,0,-os.z,os.y,0,-Os.z,Os.y,rs.z,0,-rs.x,os.z,0,-os.x,Os.z,0,-Os.x,-rs.y,rs.x,0,-os.y,os.x,0,-Os.y,Os.x,0];return!qd(i,Lr,Or,Pr,Ec)||(i=[1,0,0,0,1,0,0,0,1],!qd(i,Lr,Or,Pr,Ec))?!1:(Tc.crossVectors(rs,os),i=[Tc.x,Tc.y,Tc.z],qd(i,Lr,Or,Pr,Ec))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ma=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],zi=new Q,Mc=new Yr,Lr=new Q,Or=new Q,Pr=new Q,rs=new Q,os=new Q,Os=new Q,jo=new Q,Ec=new Q,Tc=new Q,Ps=new Q;function qd(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Ps.fromArray(r,c);const m=l.x*Math.abs(Ps.x)+l.y*Math.abs(Ps.y)+l.z*Math.abs(Ps.z),p=e.dot(Ps),h=i.dot(Ps),v=s.dot(Ps);if(Math.max(-Math.max(p,h,v),Math.min(p,h,v))>m)return!1}return!0}const Sn=new Q,Ac=new _t;let LS=0;class Fi extends Ws{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Ax,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ac.fromBufferAttribute(this,i),Ac.applyMatrix3(e),this.setXY(i,Ac.x,Ac.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix3(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix4(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyNormalMatrix(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.transformDirection(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=ko(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=$n(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ko(i,this.array)),i}setX(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ko(i,this.array)),i}setY(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ko(i,this.array)),i}setZ(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ko(i,this.array)),i}setW(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array),l=$n(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array),l=$n(l,this.array),c=$n(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ax&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class J_ extends Fi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class $_ extends Fi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Nt extends Fi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const OS=new Yr,Wo=new Q,Yd=new Q;class ol{constructor(e=new Q,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):OS.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const i=Wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Wo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Yd)),this.expandByPoint(Wo.copy(e.center).sub(Yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let PS=0;const Ei=new tn,Zd=new Rn,Ir=new Q,hi=new Yr,qo=new Yr,Cn=new Q;class mn extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pS(e)?$_:J_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ht().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,i,s){return Ei.makeTranslation(e,i,s),this.applyMatrix4(Ei),this}scale(e,i,s){return Ei.makeScale(e,i,s),this.applyMatrix4(Ei),this}lookAt(e){return Zd.lookAt(e),Zd.updateMatrix(),this.applyMatrix4(Zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Nt(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];hi.setFromBufferAttribute(c),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ol);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const s=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const m=i[c];qo.setFromBufferAttribute(m),this.morphTargetsRelative?(Cn.addVectors(hi.min,qo.min),hi.expandByPoint(Cn),Cn.addVectors(hi.max,qo.max),hi.expandByPoint(Cn)):(hi.expandByPoint(qo.min),hi.expandByPoint(qo.max))}hi.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)Cn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Cn));if(i)for(let c=0,d=i.length;c<d;c++){const m=i[c],p=this.morphTargetsRelative;for(let h=0,v=m.count;h<v;h++)Cn.fromBufferAttribute(m,h),p&&(Ir.fromBufferAttribute(e,h),Cn.add(Ir)),l=Math.max(l,s.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Fi(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const m=[],p=[];for(let E=0;E<s.count;E++)m[E]=new Q,p[E]=new Q;const h=new Q,v=new Q,_=new Q,x=new _t,M=new _t,A=new _t,C=new Q,S=new Q;function y(E,D,V){h.fromBufferAttribute(s,E),v.fromBufferAttribute(s,D),_.fromBufferAttribute(s,V),x.fromBufferAttribute(c,E),M.fromBufferAttribute(c,D),A.fromBufferAttribute(c,V),v.sub(h),_.sub(h),M.sub(x),A.sub(x);const H=1/(M.x*A.y-A.x*M.y);isFinite(H)&&(C.copy(v).multiplyScalar(A.y).addScaledVector(_,-M.y).multiplyScalar(H),S.copy(_).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(H),m[E].add(C),m[D].add(C),m[V].add(C),p[E].add(S),p[D].add(S),p[V].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let E=0,D=U.length;E<D;++E){const V=U[E],H=V.start,Y=V.count;for(let fe=H,xe=H+Y;fe<xe;fe+=3)y(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const O=new Q,w=new Q,I=new Q,P=new Q;function z(E){I.fromBufferAttribute(l,E),P.copy(I);const D=m[E];O.copy(D),O.sub(I.multiplyScalar(I.dot(D))).normalize(),w.crossVectors(P,D);const H=w.dot(p[E])<0?-1:1;d.setXYZW(E,O.x,O.y,O.z,H)}for(let E=0,D=U.length;E<D;++E){const V=U[E],H=V.start,Y=V.count;for(let fe=H,xe=H+Y;fe<xe;fe+=3)z(e.getX(fe+0)),z(e.getX(fe+1)),z(e.getX(fe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Fi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new Q,c=new Q,d=new Q,m=new Q,p=new Q,h=new Q,v=new Q,_=new Q;if(e)for(let x=0,M=e.count;x<M;x+=3){const A=e.getX(x+0),C=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,S),v.subVectors(d,c),_.subVectors(l,c),v.cross(_),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,C),h.fromBufferAttribute(s,S),m.add(v),p.add(v),h.add(v),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(C,p.x,p.y,p.z),s.setXYZ(S,h.x,h.y,h.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),v.subVectors(d,c),_.subVectors(l,c),v.cross(_),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Cn.fromBufferAttribute(e,i),Cn.normalize(),e.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(m,p){const h=m.array,v=m.itemSize,_=m.normalized,x=new h.constructor(p.length*v);let M=0,A=0;for(let C=0,S=p.length;C<S;C++){m.isInterleavedBufferAttribute?M=p[C]*m.data.stride+m.offset:M=p[C]*v;for(let y=0;y<v;y++)x[A++]=h[M++]}return new Fi(x,v,_)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new mn,s=this.index.array,l=this.attributes;for(const m in l){const p=l[m],h=e(p,s);i.setAttribute(m,h)}const c=this.morphAttributes;for(const m in c){const p=[],h=c[m];for(let v=0,_=h.length;v<_;v++){const x=h[v],M=e(x,s);p.push(M)}i.morphAttributes[m]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let m=0,p=d.length;m<p;m++){const h=d[m];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const h=s[p];e.data.attributes[p]=h.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],v=[];for(let _=0,x=h.length;_<x;_++){const M=h[_];v.push(M.toJSON(e.data))}v.length>0&&(l[p]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const m=this.boundingSphere;return m!==null&&(e.data.boundingSphere=m.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const v=l[h];this.setAttribute(h,v.clone(i))}const c=e.morphAttributes;for(const h in c){const v=[],_=c[h];for(let x=0,M=_.length;x<M;x++)v.push(_[x].clone(i));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,v=d.length;h<v;h++){const _=d[h];this.addGroup(_.start,_.count,_.materialIndex)}const m=e.boundingBox;m!==null&&(this.boundingBox=m.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let IS=0;class qs extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=Gr,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=dh,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(s.blending=this.blending),this.side!==ds&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==fh&&(s.blendSrc=this.blendSrc),this.blendDst!==dh&&(s.blendDst=this.blendDst),this.blendEquation!==Fs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const m in c){const p=c[m];delete p.metadata,d.push(p)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new _t().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _t().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ea=new Q,Kd=new Q,wc=new Q,ls=new Q,Qd=new Q,Cc=new Q,Jd=new Q;class mu{constructor(e=new Q,i=new Q(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ea)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ea.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ea.copy(this.origin).addScaledVector(this.direction,i),Ea.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Kd.copy(e).add(i).multiplyScalar(.5),wc.copy(i).sub(e).normalize(),ls.copy(this.origin).sub(Kd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(wc),m=ls.dot(this.direction),p=-ls.dot(wc),h=ls.lengthSq(),v=Math.abs(1-d*d);let _,x,M,A;if(v>0)if(_=d*p-m,x=d*m-p,A=c*v,_>=0)if(x>=-A)if(x<=A){const C=1/v;_*=C,x*=C,M=_*(_+d*x+2*m)+x*(d*_+x+2*p)+h}else x=c,_=Math.max(0,-(d*x+m)),M=-_*_+x*(x+2*p)+h;else x=-c,_=Math.max(0,-(d*x+m)),M=-_*_+x*(x+2*p)+h;else x<=-A?(_=Math.max(0,-(-d*c+m)),x=_>0?-c:Math.min(Math.max(-c,-p),c),M=-_*_+x*(x+2*p)+h):x<=A?(_=0,x=Math.min(Math.max(-c,-p),c),M=x*(x+2*p)+h):(_=Math.max(0,-(d*c+m)),x=_>0?c:Math.min(Math.max(-c,-p),c),M=-_*_+x*(x+2*p)+h);else x=d>0?-c:c,_=Math.max(0,-(d*x+m)),M=-_*_+x*(x+2*p)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Kd).addScaledVector(wc,x),M}intersectSphere(e,i){Ea.subVectors(e.center,this.origin);const s=Ea.dot(this.direction),l=Ea.dot(Ea)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),m=s-d,p=s+d;return p<0?null:m<0?this.at(p,i):this.at(m,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,m,p;const h=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return h>=0?(s=(e.min.x-x.x)*h,l=(e.max.x-x.x)*h):(s=(e.max.x-x.x)*h,l=(e.min.x-x.x)*h),v>=0?(c=(e.min.y-x.y)*v,d=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,d=(e.min.y-x.y)*v),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),_>=0?(m=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(m=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),s>p||m>l)||((m>s||s!==s)&&(s=m),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ea)!==null}intersectTriangle(e,i,s,l,c){Qd.subVectors(i,e),Cc.subVectors(s,e),Jd.crossVectors(Qd,Cc);let d=this.direction.dot(Jd),m;if(d>0){if(l)return null;m=1}else if(d<0)m=-1,d=-d;else return null;ls.subVectors(this.origin,e);const p=m*this.direction.dot(Cc.crossVectors(ls,Cc));if(p<0)return null;const h=m*this.direction.dot(Qd.cross(ls));if(h<0||p+h>d)return null;const v=-m*ls.dot(Jd);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ti extends qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.combine=O_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hx=new tn,Is=new mu,Rc=new ol,Vx=new Q,Nc=new Q,Dc=new Q,Uc=new Q,$d=new Q,Lc=new Q,kx=new Q,Oc=new Q;class ct extends Rn{constructor(e=new mn,i=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const m=this.morphTargetInfluences;if(c&&m){Lc.set(0,0,0);for(let p=0,h=c.length;p<h;p++){const v=m[p],_=c[p];v!==0&&($d.fromBufferAttribute(_,e),d?Lc.addScaledVector($d,v):Lc.addScaledVector($d.sub(i),v))}i.add(Lc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(c),Is.copy(e.ray).recast(e.near),!(Rc.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Rc,Vx)===null||Is.origin.distanceToSquared(Vx)>(e.far-e.near)**2))&&(Hx.copy(c).invert(),Is.copy(e.ray).applyMatrix4(Hx),!(s.boundingBox!==null&&Is.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Is)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,m=c.index,p=c.attributes.position,h=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(m!==null)if(Array.isArray(d))for(let A=0,C=x.length;A<C;A++){const S=x[A],y=d[S.materialIndex],U=Math.max(S.start,M.start),O=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let w=U,I=O;w<I;w+=3){const P=m.getX(w),z=m.getX(w+1),E=m.getX(w+2);l=Pc(this,y,e,s,h,v,_,P,z,E),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let S=A,y=C;S<y;S+=3){const U=m.getX(S),O=m.getX(S+1),w=m.getX(S+2);l=Pc(this,d,e,s,h,v,_,U,O,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let A=0,C=x.length;A<C;A++){const S=x[A],y=d[S.materialIndex],U=Math.max(S.start,M.start),O=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let w=U,I=O;w<I;w+=3){const P=w,z=w+1,E=w+2;l=Pc(this,y,e,s,h,v,_,P,z,E),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let S=A,y=C;S<y;S+=3){const U=S,O=S+1,w=S+2;l=Pc(this,d,e,s,h,v,_,U,O,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function zS(r,e,i,s,l,c,d,m){let p;if(e.side===ei?p=s.intersectTriangle(d,c,l,!0,m):p=s.intersectTriangle(l,c,d,e.side===ds,m),p===null)return null;Oc.copy(m),Oc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Oc);return h<i.near||h>i.far?null:{distance:h,point:Oc.clone(),object:r}}function Pc(r,e,i,s,l,c,d,m,p,h){r.getVertexPosition(m,Nc),r.getVertexPosition(p,Dc),r.getVertexPosition(h,Uc);const v=zS(r,e,i,s,Nc,Dc,Uc,kx);if(v){const _=new Q;Ri.getBarycoord(kx,Nc,Dc,Uc,_),l&&(v.uv=Ri.getInterpolatedAttribute(l,m,p,h,_,new _t)),c&&(v.uv1=Ri.getInterpolatedAttribute(c,m,p,h,_,new _t)),d&&(v.normal=Ri.getInterpolatedAttribute(d,m,p,h,_,new Q),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:m,b:p,c:h,normal:new Q,materialIndex:0};Ri.getNormal(Nc,Dc,Uc,x.normal),v.face=x,v.barycoord=_}return v}class BS extends jn{constructor(e=null,i=1,s=1,l,c,d,m,p,h=Pn,v=Pn,_,x){super(null,d,m,p,h,v,l,c,_,x),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eh=new Q,FS=new Q,GS=new ht;class Bs{constructor(e=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=eh.subVectors(s,i).cross(FS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(eh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||GS.getNormalMatrix(e),l=this.coplanarPoint(eh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new ol,HS=new _t(.5,.5),Ic=new Q;class bp{constructor(e=new Bs,i=new Bs,s=new Bs,l=new Bs,c=new Bs,d=new Bs){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const m=this.planes;return m[0].copy(e),m[1].copy(i),m[2].copy(s),m[3].copy(l),m[4].copy(c),m[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Ki,s=!1){const l=this.planes,c=e.elements,d=c[0],m=c[1],p=c[2],h=c[3],v=c[4],_=c[5],x=c[6],M=c[7],A=c[8],C=c[9],S=c[10],y=c[11],U=c[12],O=c[13],w=c[14],I=c[15];if(l[0].setComponents(h-d,M-v,y-A,I-U).normalize(),l[1].setComponents(h+d,M+v,y+A,I+U).normalize(),l[2].setComponents(h+m,M+_,y+C,I+O).normalize(),l[3].setComponents(h-m,M-_,y-C,I-O).normalize(),s)l[4].setComponents(p,x,S,w).normalize(),l[5].setComponents(h-p,M-x,y-S,I-w).normalize();else if(l[4].setComponents(h-p,M-x,y-S,I-w).normalize(),i===Ki)l[5].setComponents(h+p,M+x,y+S,I+w).normalize();else if(i===sl)l[5].setComponents(p,x,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);const i=HS.distanceTo(e.center);return zs.radius=.7071067811865476+i,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ic.x=l.normal.x>0?e.max.x:e.min.x,Ic.y=l.normal.y>0?e.max.y:e.min.y,Ic.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sp extends qs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ru=new Q,ou=new Q,Xx=new tn,Yo=new mu,zc=new ol,th=new Q,jx=new Q;class VS extends Rn{constructor(e=new mn,i=new Sp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)ru.fromBufferAttribute(i,l-1),ou.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=ru.distanceTo(ou);e.setAttribute("lineDistance",new Nt(s,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),zc.copy(s.boundingSphere),zc.applyMatrix4(l),zc.radius+=c,e.ray.intersectsSphere(zc)===!1)return;Xx.copy(l).invert(),Yo.copy(e.ray).applyMatrix4(Xx);const m=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=m*m,h=this.isLineSegments?2:1,v=s.index,x=s.attributes.position;if(v!==null){const M=Math.max(0,d.start),A=Math.min(v.count,d.start+d.count);for(let C=M,S=A-1;C<S;C+=h){const y=v.getX(C),U=v.getX(C+1),O=Bc(this,e,Yo,p,y,U,C);O&&i.push(O)}if(this.isLineLoop){const C=v.getX(A-1),S=v.getX(M),y=Bc(this,e,Yo,p,C,S,A-1);y&&i.push(y)}}else{const M=Math.max(0,d.start),A=Math.min(x.count,d.start+d.count);for(let C=M,S=A-1;C<S;C+=h){const y=Bc(this,e,Yo,p,C,C+1,C);y&&i.push(y)}if(this.isLineLoop){const C=Bc(this,e,Yo,p,A-1,M,A-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}}function Bc(r,e,i,s,l,c,d){const m=r.geometry.attributes.position;if(ru.fromBufferAttribute(m,l),ou.fromBufferAttribute(m,c),i.distanceSqToSegment(ru,ou,th,jx)>s)return;th.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(th);if(!(h<e.near||h>e.far))return{distance:h,point:jx.clone().applyMatrix4(r.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:r}}const Wx=new Q,qx=new Q;class ev extends VS{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Wx.fromBufferAttribute(i,l),qx.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Wx.distanceTo(qx);e.setAttribute("lineDistance",new Nt(s,1))}else ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tv extends qs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yx=new tn,ep=new mu,Fc=new ol,Gc=new Q;class kS extends Rn{constructor(e=new mn,i=new tv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Fc.copy(s.boundingSphere),Fc.applyMatrix4(l),Fc.radius+=c,e.ray.intersectsSphere(Fc)===!1)return;Yx.copy(l).invert(),ep.copy(e.ray).applyMatrix4(Yx);const m=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=m*m,h=s.index,_=s.attributes.position;if(h!==null){const x=Math.max(0,d.start),M=Math.min(h.count,d.start+d.count);for(let A=x,C=M;A<C;A++){const S=h.getX(A);Gc.fromBufferAttribute(_,S),Zx(Gc,S,p,l,e,i,this)}}else{const x=Math.max(0,d.start),M=Math.min(_.count,d.start+d.count);for(let A=x,C=M;A<C;A++)Gc.fromBufferAttribute(_,A),Zx(Gc,A,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}}function Zx(r,e,i,s,l,c,d){const m=ep.distanceSqToPoint(r);if(m<i){const p=new Q;ep.closestPointToPoint(r,p),p.applyMatrix4(s);const h=l.ray.origin.distanceTo(p);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(m),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class nv extends jn{constructor(e=[],i=Xs,s,l,c,d,m,p,h,v){super(e,i,s,l,c,d,m,p,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jr extends jn{constructor(e,i,s=$i,l,c,d,m=Pn,p=Pn,h,v=Na,_=1){if(v!==Na&&v!==Vs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:_};super(x,l,c,d,m,p,v,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _p(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class XS extends jr{constructor(e,i=$i,s=Xs,l,c,d=Pn,m=Pn,p,h=Na){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,i,s,l,c,d,m,p,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class iv extends jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xn extends mn{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const m=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const p=[],h=[],v=[],_=[];let x=0,M=0;A("z","y","x",-1,-1,s,i,e,d,c,0),A("z","y","x",1,-1,s,i,-e,d,c,1),A("x","z","y",1,1,e,s,i,l,d,2),A("x","z","y",1,-1,e,s,-i,l,d,3),A("x","y","z",1,-1,e,i,s,l,c,4),A("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Nt(h,3)),this.setAttribute("normal",new Nt(v,3)),this.setAttribute("uv",new Nt(_,2));function A(C,S,y,U,O,w,I,P,z,E,D){const V=w/z,H=I/E,Y=w/2,fe=I/2,xe=P/2,te=z+1,G=E+1;let X=0,re=0;const q=new Q;for(let ee=0;ee<G;ee++){const L=ee*H-fe;for(let F=0;F<te;F++){const ie=F*V-Y;q[C]=ie*U,q[S]=L*O,q[y]=xe,h.push(q.x,q.y,q.z),q[C]=0,q[S]=0,q[y]=P>0?1:-1,v.push(q.x,q.y,q.z),_.push(F/z),_.push(1-ee/E),X+=1}}for(let ee=0;ee<E;ee++)for(let L=0;L<z;L++){const F=x+L+te*ee,ie=x+L+te*(ee+1),k=x+(L+1)+te*(ee+1),de=x+(L+1)+te*ee;p.push(F,ie,de),p.push(ie,k,de),re+=6}m.addGroup(M,re,D),M+=re,x+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class el extends mn{constructor(e=1,i=1,s=4,l=8,c=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:i,capSegments:s,radialSegments:l,heightSegments:c},i=Math.max(0,i),s=Math.max(1,Math.floor(s)),l=Math.max(3,Math.floor(l)),c=Math.max(1,Math.floor(c));const d=[],m=[],p=[],h=[],v=i/2,_=Math.PI/2*e,x=i,M=2*_+x,A=s*2+c,C=l+1,S=new Q,y=new Q;for(let U=0;U<=A;U++){let O=0,w=0,I=0,P=0;if(U<=s){const D=U/s,V=D*Math.PI/2;w=-v-e*Math.cos(V),I=e*Math.sin(V),P=-e*Math.cos(V),O=D*_}else if(U<=s+c){const D=(U-s)/c;w=-v+D*i,I=e,P=0,O=_+D*x}else{const D=(U-s-c)/s,V=D*Math.PI/2;w=v+e*Math.sin(V),I=e*Math.cos(V),P=e*Math.sin(V),O=_+x+D*_}const z=Math.max(0,Math.min(1,O/M));let E=0;U===0?E=.5/l:U===A&&(E=-.5/l);for(let D=0;D<=l;D++){const V=D/l,H=V*Math.PI*2,Y=Math.sin(H),fe=Math.cos(H);y.x=-I*fe,y.y=w,y.z=I*Y,m.push(y.x,y.y,y.z),S.set(-I*fe,P,I*Y),S.normalize(),p.push(S.x,S.y,S.z),h.push(V+E,z)}if(U>0){const D=(U-1)*C;for(let V=0;V<l;V++){const H=D+V,Y=D+V+1,fe=U*C+V,xe=U*C+V+1;d.push(H,Y,fe),d.push(Y,xe,fe)}}}this.setIndex(d),this.setAttribute("position",new Nt(m,3)),this.setAttribute("normal",new Nt(p,3)),this.setAttribute("uv",new Nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Mp extends mn{constructor(e=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const c=[],d=[],m=[],p=[],h=new Q,v=new _t;d.push(0,0,0),m.push(0,0,1),p.push(.5,.5);for(let _=0,x=3;_<=i;_++,x+=3){const M=s+_/i*l;h.x=e*Math.cos(M),h.y=e*Math.sin(M),d.push(h.x,h.y,h.z),m.push(0,0,1),v.x=(d[x]/e+1)/2,v.y=(d[x+1]/e+1)/2,p.push(v.x,v.y)}for(let _=1;_<=i;_++)c.push(_,_+1,0);this.setIndex(c),this.setAttribute("position",new Nt(d,3)),this.setAttribute("normal",new Nt(m,3)),this.setAttribute("uv",new Nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ai extends mn{constructor(e=1,i=1,s=1,l=32,c=1,d=!1,m=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:m,thetaLength:p};const h=this;l=Math.floor(l),c=Math.floor(c);const v=[],_=[],x=[],M=[];let A=0;const C=[],S=s/2;let y=0;U(),d===!1&&(e>0&&O(!0),i>0&&O(!1)),this.setIndex(v),this.setAttribute("position",new Nt(_,3)),this.setAttribute("normal",new Nt(x,3)),this.setAttribute("uv",new Nt(M,2));function U(){const w=new Q,I=new Q;let P=0;const z=(i-e)/s;for(let E=0;E<=c;E++){const D=[],V=E/c,H=V*(i-e)+e;for(let Y=0;Y<=l;Y++){const fe=Y/l,xe=fe*p+m,te=Math.sin(xe),G=Math.cos(xe);I.x=H*te,I.y=-V*s+S,I.z=H*G,_.push(I.x,I.y,I.z),w.set(te,z,G).normalize(),x.push(w.x,w.y,w.z),M.push(fe,1-V),D.push(A++)}C.push(D)}for(let E=0;E<l;E++)for(let D=0;D<c;D++){const V=C[D][E],H=C[D+1][E],Y=C[D+1][E+1],fe=C[D][E+1];(e>0||D!==0)&&(v.push(V,H,fe),P+=3),(i>0||D!==c-1)&&(v.push(H,Y,fe),P+=3)}h.addGroup(y,P,0),y+=P}function O(w){const I=A,P=new _t,z=new Q;let E=0;const D=w===!0?e:i,V=w===!0?1:-1;for(let Y=1;Y<=l;Y++)_.push(0,S*V,0),x.push(0,V,0),M.push(.5,.5),A++;const H=A;for(let Y=0;Y<=l;Y++){const xe=Y/l*p+m,te=Math.cos(xe),G=Math.sin(xe);z.x=D*G,z.y=S*V,z.z=D*te,_.push(z.x,z.y,z.z),x.push(0,V,0),P.x=te*.5+.5,P.y=G*.5*V+.5,M.push(P.x,P.y),A++}for(let Y=0;Y<l;Y++){const fe=I+Y,xe=H+Y;w===!0?v.push(xe,xe+1,fe):v.push(xe+1,xe,fe),E+=3}h.addGroup(y,E,w===!0?1:2),y+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lu extends Ai{constructor(e=1,i=1,s=32,l=1,c=!1,d=0,m=Math.PI*2){super(0,e,i,s,l,c,d,m),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:m}}static fromJSON(e){return new lu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ep extends mn{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const c=[],d=[];m(l),h(s),v(),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(c.slice(),3)),this.setAttribute("uv",new Nt(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function m(U){const O=new Q,w=new Q,I=new Q;for(let P=0;P<i.length;P+=3)M(i[P+0],O),M(i[P+1],w),M(i[P+2],I),p(O,w,I,U)}function p(U,O,w,I){const P=I+1,z=[];for(let E=0;E<=P;E++){z[E]=[];const D=U.clone().lerp(w,E/P),V=O.clone().lerp(w,E/P),H=P-E;for(let Y=0;Y<=H;Y++)Y===0&&E===P?z[E][Y]=D:z[E][Y]=D.clone().lerp(V,Y/H)}for(let E=0;E<P;E++)for(let D=0;D<2*(P-E)-1;D++){const V=Math.floor(D/2);D%2===0?(x(z[E][V+1]),x(z[E+1][V]),x(z[E][V])):(x(z[E][V+1]),x(z[E+1][V+1]),x(z[E+1][V]))}}function h(U){const O=new Q;for(let w=0;w<c.length;w+=3)O.x=c[w+0],O.y=c[w+1],O.z=c[w+2],O.normalize().multiplyScalar(U),c[w+0]=O.x,c[w+1]=O.y,c[w+2]=O.z}function v(){const U=new Q;for(let O=0;O<c.length;O+=3){U.x=c[O+0],U.y=c[O+1],U.z=c[O+2];const w=S(U)/2/Math.PI+.5,I=y(U)/Math.PI+.5;d.push(w,1-I)}A(),_()}function _(){for(let U=0;U<d.length;U+=6){const O=d[U+0],w=d[U+2],I=d[U+4],P=Math.max(O,w,I),z=Math.min(O,w,I);P>.9&&z<.1&&(O<.2&&(d[U+0]+=1),w<.2&&(d[U+2]+=1),I<.2&&(d[U+4]+=1))}}function x(U){c.push(U.x,U.y,U.z)}function M(U,O){const w=U*3;O.x=e[w+0],O.y=e[w+1],O.z=e[w+2]}function A(){const U=new Q,O=new Q,w=new Q,I=new Q,P=new _t,z=new _t,E=new _t;for(let D=0,V=0;D<c.length;D+=9,V+=6){U.set(c[D+0],c[D+1],c[D+2]),O.set(c[D+3],c[D+4],c[D+5]),w.set(c[D+6],c[D+7],c[D+8]),P.set(d[V+0],d[V+1]),z.set(d[V+2],d[V+3]),E.set(d[V+4],d[V+5]),I.copy(U).add(O).add(w).divideScalar(3);const H=S(I);C(P,V+0,U,H),C(z,V+2,O,H),C(E,V+4,w,H)}}function C(U,O,w,I){I<0&&U.x===1&&(d[O]=U.x-1),w.x===0&&w.z===0&&(d[O]=I/2/Math.PI+.5)}function S(U){return Math.atan2(U.z,-U.x)}function y(U){return Math.atan2(-U.y,Math.sqrt(U.x*U.x+U.z*U.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ep(e.vertices,e.indices,e.radius,e.detail)}}const Hc=new Q,Vc=new Q,nh=new Q,kc=new Ri;class jS extends mn{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),c=Math.cos($c*i),d=e.getIndex(),m=e.getAttribute("position"),p=d?d.count:m.count,h=[0,0,0],v=["a","b","c"],_=new Array(3),x={},M=[];for(let A=0;A<p;A+=3){d?(h[0]=d.getX(A),h[1]=d.getX(A+1),h[2]=d.getX(A+2)):(h[0]=A,h[1]=A+1,h[2]=A+2);const{a:C,b:S,c:y}=kc;if(C.fromBufferAttribute(m,h[0]),S.fromBufferAttribute(m,h[1]),y.fromBufferAttribute(m,h[2]),kc.getNormal(nh),_[0]=`${Math.round(C.x*l)},${Math.round(C.y*l)},${Math.round(C.z*l)}`,_[1]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,_[2]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let U=0;U<3;U++){const O=(U+1)%3,w=_[U],I=_[O],P=kc[v[U]],z=kc[v[O]],E=`${w}_${I}`,D=`${I}_${w}`;D in x&&x[D]?(nh.dot(x[D].normal)<=c&&(M.push(P.x,P.y,P.z),M.push(z.x,z.y,z.z)),x[D]=null):E in x||(x[E]={index0:h[U],index1:h[O],normal:nh.clone()})}}for(const A in x)if(x[A]){const{index0:C,index1:S}=x[A];Hc.fromBufferAttribute(m,C),Vc.fromBufferAttribute(m,S),M.push(Hc.x,Hc.y,Hc.z),M.push(Vc.x,Vc.y,Vc.z)}this.setAttribute("position",new Nt(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Tp extends Ep{constructor(e=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,l,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Tp(e.radius,e.detail)}}class gu extends mn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,m=Math.floor(s),p=Math.floor(l),h=m+1,v=p+1,_=e/m,x=i/p,M=[],A=[],C=[],S=[];for(let y=0;y<v;y++){const U=y*x-d;for(let O=0;O<h;O++){const w=O*_-c;A.push(w,-U,0),C.push(0,0,1),S.push(O/m),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let U=0;U<m;U++){const O=U+h*y,w=U+h*(y+1),I=U+1+h*(y+1),P=U+1+h*y;M.push(O,w,P),M.push(w,I,P)}this.setIndex(M),this.setAttribute("position",new Nt(A,3)),this.setAttribute("normal",new Nt(C,3)),this.setAttribute("uv",new Nt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gu(e.width,e.height,e.widthSegments,e.heightSegments)}}class cu extends mn{constructor(e=.5,i=1,s=32,l=1,c=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:d},s=Math.max(3,s),l=Math.max(1,l);const m=[],p=[],h=[],v=[];let _=e;const x=(i-e)/l,M=new Q,A=new _t;for(let C=0;C<=l;C++){for(let S=0;S<=s;S++){const y=c+S/s*d;M.x=_*Math.cos(y),M.y=_*Math.sin(y),p.push(M.x,M.y,M.z),h.push(0,0,1),A.x=(M.x/i+1)/2,A.y=(M.y/i+1)/2,v.push(A.x,A.y)}_+=x}for(let C=0;C<l;C++){const S=C*(s+1);for(let y=0;y<s;y++){const U=y+S,O=U,w=U+s+1,I=U+s+2,P=U+1;m.push(O,w,P),m.push(w,I,P)}}this.setIndex(m),this.setAttribute("position",new Nt(p,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ta extends mn{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,d=0,m=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:m},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(d+m,Math.PI);let h=0;const v=[],_=new Q,x=new Q,M=[],A=[],C=[],S=[];for(let y=0;y<=s;y++){const U=[],O=y/s,w=d+O*m,I=e*Math.cos(w),P=Math.sqrt(e*e-I*I);let z=0;y===0&&d===0?z=.5/i:y===s&&p===Math.PI&&(z=-.5/i);for(let E=0;E<=i;E++){const D=E/i,V=l+D*c;_.x=-P*Math.cos(V),_.y=I,_.z=P*Math.sin(V),A.push(_.x,_.y,_.z),x.copy(_).normalize(),C.push(x.x,x.y,x.z),S.push(D+z,1-O),U.push(h++)}v.push(U)}for(let y=0;y<s;y++)for(let U=0;U<i;U++){const O=v[y][U+1],w=v[y][U],I=v[y+1][U],P=v[y+1][U+1];(y!==0||d>0)&&M.push(O,w,P),(y!==s-1||p<Math.PI)&&M.push(w,I,P)}this.setIndex(M),this.setAttribute("position",new Nt(A,3)),this.setAttribute("normal",new Nt(C,3)),this.setAttribute("uv",new Nt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tl extends mn{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2,d=0,m=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:d,thetaLength:m},s=Math.floor(s),l=Math.floor(l);const p=[],h=[],v=[],_=[],x=new Q,M=new Q,A=new Q;for(let C=0;C<=s;C++){const S=d+C/s*m;for(let y=0;y<=l;y++){const U=y/l*c;M.x=(e+i*Math.cos(S))*Math.cos(U),M.y=(e+i*Math.cos(S))*Math.sin(U),M.z=i*Math.sin(S),h.push(M.x,M.y,M.z),x.x=e*Math.cos(U),x.y=e*Math.sin(U),A.subVectors(M,x).normalize(),v.push(A.x,A.y,A.z),_.push(y/l),_.push(C/s)}}for(let C=1;C<=s;C++)for(let S=1;S<=l;S++){const y=(l+1)*C+S-1,U=(l+1)*(C-1)+S-1,O=(l+1)*(C-1)+S,w=(l+1)*C+S;p.push(y,U,w),p.push(U,O,w)}this.setIndex(p),this.setAttribute("position",new Nt(h,3)),this.setAttribute("normal",new Nt(v,3)),this.setAttribute("uv",new Nt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Wr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(Kx(l))l.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Kx(l[0])){const c=[];for(let d=0,m=l.length;d<m;d++)c[d]=l[d].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Vn(r){const e={};for(let i=0;i<r.length;i++){const s=Wr(r[i]);for(const l in s)e[l]=s[l]}return e}function Kx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function WS(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function av(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const qS={clone:Wr,merge:Vn};var YS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ea extends qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YS,this.fragmentShader=ZS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=WS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new lt().setHex(l.value);break;case"v2":this.uniforms[s].value=new _t().fromArray(l.value);break;case"v3":this.uniforms[s].value=new Q().fromArray(l.value);break;case"v4":this.uniforms[s].value=new cn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new ht().fromArray(l.value);break;case"m4":this.uniforms[s].value=new tn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class KS extends ea{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ln extends qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jh,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class QS extends qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JS extends qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ap extends Rn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const ih=new tn,Qx=new Q,Jx=new Q;class sv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bp,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Qx.setFromMatrixPosition(e.matrixWorld),i.position.copy(Qx),Jx.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Jx),i.updateMatrixWorld(),ih.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===sl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ih)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xc=new Q,jc=new qr,Wi=new Q;class rv extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xc,jc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,jc,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(Xc,jc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,jc,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cs=new Q,$x=new _t,e_=new _t;class pi extends rv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=$h*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $h*2*Math.atan(Math.tan($c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,i){return this.getViewBounds(e,$x,e_),i.subVectors(e_,$x)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan($c*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/p,i-=d.offsetY*s/h,l*=d.width/p,s*=d.height/h}const m=this.filmOffset;m!==0&&(c+=e*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class $S extends sv{constructor(){super(new pi(90,1,.5,500)),this.isPointLightShadow=!0}}class eM extends Ap{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new $S}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class wp extends rv{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,m=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,m-=v*this.view.offsetY,p=m-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,m,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class tM extends sv{constructor(){super(new wp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nM extends Ap{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new tM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class iM extends Ap{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const zr=-90,Br=1;class aM extends Rn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(zr,Br,e,i);l.layers=this.layers,this.add(l);const c=new pi(zr,Br,e,i);c.layers=this.layers,this.add(c);const d=new pi(zr,Br,e,i);d.layers=this.layers,this.add(d);const m=new pi(zr,Br,e,i);m.layers=this.layers,this.add(m);const p=new pi(zr,Br,e,i);p.layers=this.layers,this.add(p);const h=new pi(zr,Br,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,m,p]=i;for(const h of i)this.remove(h);if(e===Ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===sl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,m,p,h,v]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(_,x,M),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class sM extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const t_=new tn;class rM{constructor(e,i,s=0,l=1/0){this.ray=new mu(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new vp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Dt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return t_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(t_),this}intersectObject(e,i=!0,s=[]){return tp(e,this,s,i),s.sort(n_),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)tp(e[l],this,s,i);return s.sort(n_),s}}function n_(r,e){return r.distance-e.distance}function tp(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let d=0,m=c.length;d<m;d++)tp(c[d],e,i,!0)}}class oM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ut("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const Up=class Up{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Up.prototype.isMatrix2=!0;let i_=Up;class lM extends ev{constructor(e=10,i=10,s=4473924,l=8947848){s=new lt(s),l=new lt(l);const c=i/2,d=e/i,m=e/2,p=[],h=[];for(let x=0,M=0,A=-m;x<=i;x++,A+=d){p.push(-m,0,A,m,0,A),p.push(A,0,-m,A,0,m);const C=x===c?s:l;C.toArray(h,M),M+=3,C.toArray(h,M),M+=3,C.toArray(h,M),M+=3,C.toArray(h,M),M+=3}const v=new mn;v.setAttribute("position",new Nt(p,3)),v.setAttribute("color",new Nt(h,3));const _=new Sp({vertexColors:!0,toneMapped:!1});super(v,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function a_(r,e,i,s){const l=cM(s);switch(i){case W_:return r*e;case Y_:return r*e/l.components*l.byteLength;case hp:return r*e/l.components*l.byteLength;case js:return r*e*2/l.components*l.byteLength;case pp:return r*e*2/l.components*l.byteLength;case q_:return r*e*3/l.components*l.byteLength;case Bi:return r*e*4/l.components*l.byteLength;case mp:return r*e*4/l.components*l.byteLength;case Zc:case Kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Qc:case Jc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mh:case Th:return Math.max(r,16)*Math.max(e,8)/4;case Sh:case Eh:return Math.max(r,8)*Math.max(e,8)/2;case Ah:case wh:case Rh:case Nh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ch:case tu:case Dh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case zh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case kh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case jh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Wh:case qh:case Yh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Zh:case Kh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case nu:case Qh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function cM(r){switch(r){case mi:case V_:return{byteLength:1,components:1};case il:case k_:case Ra:return{byteLength:2,components:1};case fp:case dp:return{byteLength:2,components:4};case $i:case up:case Zi:return{byteLength:4,components:1};case X_:case j_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lp}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ov(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function uM(r){const e=new WeakMap;function i(m,p){const h=m.array,v=m.usage,_=h.byteLength,x=r.createBuffer();r.bindBuffer(p,x),r.bufferData(p,h,v),m.onUploadCallback();let M;if(h instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=r.HALF_FLOAT;else if(h instanceof Uint16Array)m.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=r.SHORT;else if(h instanceof Uint32Array)M=r.UNSIGNED_INT;else if(h instanceof Int32Array)M=r.INT;else if(h instanceof Int8Array)M=r.BYTE;else if(h instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:m.version,size:_}}function s(m,p,h){const v=p.array,_=p.updateRanges;if(r.bindBuffer(h,m),_.length===0)r.bufferSubData(h,0,v);else{_.sort((M,A)=>M.start-A.start);let x=0;for(let M=1;M<_.length;M++){const A=_[x],C=_[M];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++x,_[x]=C)}_.length=x+1;for(let M=0,A=_.length;M<A;M++){const C=_[M];r.bufferSubData(h,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),e.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const p=e.get(m);p&&(r.deleteBuffer(p.buffer),e.delete(m))}function d(m,p){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const v=e.get(m);(!v||v.version<m.version)&&e.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const h=e.get(m);if(h===void 0)e.set(m,i(m,p));else if(h.version<m.version){if(h.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,m,p),h.version=m.version}}return{get:l,remove:c,update:d}}var fM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_M=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,EM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,DM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,UM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,LM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,OM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,PM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,IM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HM="gl_FragColor = linearToOutputTexel( gl_FragColor );",VM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,i1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,a1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,c1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,u1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,f1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,d1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,p1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,b1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,C1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,O1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,P1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,H1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,K1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_E=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,IE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:fM,alphahash_pars_fragment:dM,alphamap_fragment:hM,alphamap_pars_fragment:pM,alphatest_fragment:mM,alphatest_pars_fragment:gM,aomap_fragment:xM,aomap_pars_fragment:_M,batching_pars_vertex:vM,batching_vertex:yM,begin_vertex:bM,beginnormal_vertex:SM,bsdfs:MM,iridescence_fragment:EM,bumpmap_pars_fragment:TM,clipping_planes_fragment:AM,clipping_planes_pars_fragment:wM,clipping_planes_pars_vertex:CM,clipping_planes_vertex:RM,color_fragment:NM,color_pars_fragment:DM,color_pars_vertex:UM,color_vertex:LM,common:OM,cube_uv_reflection_fragment:PM,defaultnormal_vertex:IM,displacementmap_pars_vertex:zM,displacementmap_vertex:BM,emissivemap_fragment:FM,emissivemap_pars_fragment:GM,colorspace_fragment:HM,colorspace_pars_fragment:VM,envmap_fragment:kM,envmap_common_pars_fragment:XM,envmap_pars_fragment:jM,envmap_pars_vertex:WM,envmap_physical_pars_fragment:i1,envmap_vertex:qM,fog_vertex:YM,fog_pars_vertex:ZM,fog_fragment:KM,fog_pars_fragment:QM,gradientmap_pars_fragment:JM,lightmap_pars_fragment:$M,lights_lambert_fragment:e1,lights_lambert_pars_fragment:t1,lights_pars_begin:n1,lights_toon_fragment:a1,lights_toon_pars_fragment:s1,lights_phong_fragment:r1,lights_phong_pars_fragment:o1,lights_physical_fragment:l1,lights_physical_pars_fragment:c1,lights_fragment_begin:u1,lights_fragment_maps:f1,lights_fragment_end:d1,lightprobes_pars_fragment:h1,logdepthbuf_fragment:p1,logdepthbuf_pars_fragment:m1,logdepthbuf_pars_vertex:g1,logdepthbuf_vertex:x1,map_fragment:_1,map_pars_fragment:v1,map_particle_fragment:y1,map_particle_pars_fragment:b1,metalnessmap_fragment:S1,metalnessmap_pars_fragment:M1,morphinstance_vertex:E1,morphcolor_vertex:T1,morphnormal_vertex:A1,morphtarget_pars_vertex:w1,morphtarget_vertex:C1,normal_fragment_begin:R1,normal_fragment_maps:N1,normal_pars_fragment:D1,normal_pars_vertex:U1,normal_vertex:L1,normalmap_pars_fragment:O1,clearcoat_normal_fragment_begin:P1,clearcoat_normal_fragment_maps:I1,clearcoat_pars_fragment:z1,iridescence_pars_fragment:B1,opaque_fragment:F1,packing:G1,premultiplied_alpha_fragment:H1,project_vertex:V1,dithering_fragment:k1,dithering_pars_fragment:X1,roughnessmap_fragment:j1,roughnessmap_pars_fragment:W1,shadowmap_pars_fragment:q1,shadowmap_pars_vertex:Y1,shadowmap_vertex:Z1,shadowmask_pars_fragment:K1,skinbase_vertex:Q1,skinning_pars_vertex:J1,skinning_vertex:$1,skinnormal_vertex:eE,specularmap_fragment:tE,specularmap_pars_fragment:nE,tonemapping_fragment:iE,tonemapping_pars_fragment:aE,transmission_fragment:sE,transmission_pars_fragment:rE,uv_pars_fragment:oE,uv_pars_vertex:lE,uv_vertex:cE,worldpos_vertex:uE,background_vert:fE,background_frag:dE,backgroundCube_vert:hE,backgroundCube_frag:pE,cube_vert:mE,cube_frag:gE,depth_vert:xE,depth_frag:_E,distance_vert:vE,distance_frag:yE,equirect_vert:bE,equirect_frag:SE,linedashed_vert:ME,linedashed_frag:EE,meshbasic_vert:TE,meshbasic_frag:AE,meshlambert_vert:wE,meshlambert_frag:CE,meshmatcap_vert:RE,meshmatcap_frag:NE,meshnormal_vert:DE,meshnormal_frag:UE,meshphong_vert:LE,meshphong_frag:OE,meshphysical_vert:PE,meshphysical_frag:IE,meshtoon_vert:zE,meshtoon_frag:BE,points_vert:FE,points_frag:GE,shadow_vert:HE,shadow_frag:VE,sprite_vert:kE,sprite_frag:XE},He={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Yi={basic:{uniforms:Vn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Vn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Vn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Vn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Vn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new lt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Vn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Vn([He.points,He.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Vn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Vn([He.common,He.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Vn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Vn([He.sprite,He.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:Vn([He.common,He.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:Vn([He.lights,He.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Yi.physical={uniforms:Vn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Wc={r:0,b:0,g:0},jE=new tn,lv=new ht;lv.set(-1,0,0,0,1,0,0,0,1);function WE(r,e,i,s,l,c){const d=new lt(0);let m=l===!0?0:1,p,h,v=null,_=0,x=null;function M(U){let O=U.isScene===!0?U.background:null;if(O&&O.isTexture){const w=U.backgroundBlurriness>0;O=e.get(O,w)}return O}function A(U){let O=!1;const w=M(U);w===null?S(d,m):w&&w.isColor&&(S(w,1),O=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||O)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(U,O){const w=M(O);w&&(w.isCubeTexture||w.mapping===pu)?(h===void 0&&(h=new ct(new Xn(1,1,1),new ea({name:"BackgroundCubeMaterial",uniforms:Wr(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,P,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jE.makeRotationFromEuler(O.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(lv),h.material.toneMapped=Ct.getTransfer(w.colorSpace)!==qt,(v!==w||_!==w.version||x!==r.toneMapping)&&(h.material.needsUpdate=!0,v=w,_=w.version,x=r.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new ct(new gu(2,2),new ea({name:"BackgroundMaterial",uniforms:Wr(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(w.colorSpace)!==qt,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(v!==w||_!==w.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,v=w,_=w.version,x=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function S(U,O){U.getRGB(Wc,av(r)),i.buffers.color.setClear(Wc.r,Wc.g,Wc.b,O,c)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,O=1){d.set(U),m=O,S(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,S(d,m)},render:A,addToRenderList:C,dispose:y}}function qE(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,d=!1;function m(H,Y,fe,xe,te){let G=!1;const X=_(H,xe,fe,Y);c!==X&&(c=X,h(c.object)),G=M(H,xe,fe,te),G&&A(H,xe,fe,te),te!==null&&e.update(te,r.ELEMENT_ARRAY_BUFFER),(G||d)&&(d=!1,w(H,Y,fe,xe),te!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function p(){return r.createVertexArray()}function h(H){return r.bindVertexArray(H)}function v(H){return r.deleteVertexArray(H)}function _(H,Y,fe,xe){const te=xe.wireframe===!0;let G=s[Y.id];G===void 0&&(G={},s[Y.id]=G);const X=H.isInstancedMesh===!0?H.id:0;let re=G[X];re===void 0&&(re={},G[X]=re);let q=re[fe.id];q===void 0&&(q={},re[fe.id]=q);let ee=q[te];return ee===void 0&&(ee=x(p()),q[te]=ee),ee}function x(H){const Y=[],fe=[],xe=[];for(let te=0;te<i;te++)Y[te]=0,fe[te]=0,xe[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:fe,attributeDivisors:xe,object:H,attributes:{},index:null}}function M(H,Y,fe,xe){const te=c.attributes,G=Y.attributes;let X=0;const re=fe.getAttributes();for(const q in re)if(re[q].location>=0){const L=te[q];let F=G[q];if(F===void 0&&(q==="instanceMatrix"&&H.instanceMatrix&&(F=H.instanceMatrix),q==="instanceColor"&&H.instanceColor&&(F=H.instanceColor)),L===void 0||L.attribute!==F||F&&L.data!==F.data)return!0;X++}return c.attributesNum!==X||c.index!==xe}function A(H,Y,fe,xe){const te={},G=Y.attributes;let X=0;const re=fe.getAttributes();for(const q in re)if(re[q].location>=0){let L=G[q];L===void 0&&(q==="instanceMatrix"&&H.instanceMatrix&&(L=H.instanceMatrix),q==="instanceColor"&&H.instanceColor&&(L=H.instanceColor));const F={};F.attribute=L,L&&L.data&&(F.data=L.data),te[q]=F,X++}c.attributes=te,c.attributesNum=X,c.index=xe}function C(){const H=c.newAttributes;for(let Y=0,fe=H.length;Y<fe;Y++)H[Y]=0}function S(H){y(H,0)}function y(H,Y){const fe=c.newAttributes,xe=c.enabledAttributes,te=c.attributeDivisors;fe[H]=1,xe[H]===0&&(r.enableVertexAttribArray(H),xe[H]=1),te[H]!==Y&&(r.vertexAttribDivisor(H,Y),te[H]=Y)}function U(){const H=c.newAttributes,Y=c.enabledAttributes;for(let fe=0,xe=Y.length;fe<xe;fe++)Y[fe]!==H[fe]&&(r.disableVertexAttribArray(fe),Y[fe]=0)}function O(H,Y,fe,xe,te,G,X){X===!0?r.vertexAttribIPointer(H,Y,fe,te,G):r.vertexAttribPointer(H,Y,fe,xe,te,G)}function w(H,Y,fe,xe){C();const te=xe.attributes,G=fe.getAttributes(),X=Y.defaultAttributeValues;for(const re in G){const q=G[re];if(q.location>=0){let ee=te[re];if(ee===void 0&&(re==="instanceMatrix"&&H.instanceMatrix&&(ee=H.instanceMatrix),re==="instanceColor"&&H.instanceColor&&(ee=H.instanceColor)),ee!==void 0){const L=ee.normalized,F=ee.itemSize,ie=e.get(ee);if(ie===void 0)continue;const k=ie.buffer,de=ie.type,W=ie.bytesPerElement,ae=de===r.INT||de===r.UNSIGNED_INT||ee.gpuType===up;if(ee.isInterleavedBufferAttribute){const ge=ee.data,Oe=ge.stride,Te=ee.offset;if(ge.isInstancedInterleavedBuffer){for(let we=0;we<q.locationSize;we++)y(q.location+we,ge.meshPerAttribute);H.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let we=0;we<q.locationSize;we++)S(q.location+we);r.bindBuffer(r.ARRAY_BUFFER,k);for(let we=0;we<q.locationSize;we++)O(q.location+we,F/q.locationSize,de,L,Oe*W,(Te+F/q.locationSize*we)*W,ae)}else{if(ee.isInstancedBufferAttribute){for(let ge=0;ge<q.locationSize;ge++)y(q.location+ge,ee.meshPerAttribute);H.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ge=0;ge<q.locationSize;ge++)S(q.location+ge);r.bindBuffer(r.ARRAY_BUFFER,k);for(let ge=0;ge<q.locationSize;ge++)O(q.location+ge,F/q.locationSize,de,L,F*W,F/q.locationSize*ge*W,ae)}}else if(X!==void 0){const L=X[re];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(q.location,L);break;case 3:r.vertexAttrib3fv(q.location,L);break;case 4:r.vertexAttrib4fv(q.location,L);break;default:r.vertexAttrib1fv(q.location,L)}}}}U()}function I(){D();for(const H in s){const Y=s[H];for(const fe in Y){const xe=Y[fe];for(const te in xe){const G=xe[te];for(const X in G)v(G[X].object),delete G[X];delete xe[te]}}delete s[H]}}function P(H){if(s[H.id]===void 0)return;const Y=s[H.id];for(const fe in Y){const xe=Y[fe];for(const te in xe){const G=xe[te];for(const X in G)v(G[X].object),delete G[X];delete xe[te]}}delete s[H.id]}function z(H){for(const Y in s){const fe=s[Y];for(const xe in fe){const te=fe[xe];if(te[H.id]===void 0)continue;const G=te[H.id];for(const X in G)v(G[X].object),delete G[X];delete te[H.id]}}}function E(H){for(const Y in s){const fe=s[Y],xe=H.isInstancedMesh===!0?H.id:0,te=fe[xe];if(te!==void 0){for(const G in te){const X=te[G];for(const re in X)v(X[re].object),delete X[re];delete te[G]}delete fe[xe],Object.keys(fe).length===0&&delete s[Y]}}}function D(){V(),d=!0,c!==l&&(c=l,h(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:D,resetDefaultState:V,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:E,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:S,disableUnusedAttributes:U}}function YE(r,e,i){let s;function l(p){s=p}function c(p,h){r.drawArrays(s,p,h),i.update(h,s,1)}function d(p,h,v){v!==0&&(r.drawArraysInstanced(s,p,h,v),i.update(h,s,v))}function m(p,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,h,0,v);let x=0;for(let M=0;M<v;M++)x+=h[M];i.update(x,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=m}function ZE(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Bi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(z){const E=z===Ra&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==mi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Zi&&!E)}function p(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const v=p(h);v!==h&&(ut("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&x===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),P=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:m,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:U,maxVaryings:O,maxFragmentUniforms:w,maxSamples:I,samples:P}}function KE(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new Bs,m=new ht,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||s!==0||l;return l=x,s=_.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=v(_,x,0)},this.setState=function(_,x,M){const A=_.clippingPlanes,C=_.clipIntersection,S=_.clipShadows,y=r.get(_);if(!l||A===null||A.length===0||c&&!S)c?v(null):h();else{const U=c?0:s,O=U*4;let w=y.clippingState||null;p.value=w,w=v(A,x,O,M);for(let I=0;I!==O;++I)w[I]=i[I];y.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function h(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(_,x,M,A){const C=_!==null?_.length:0;let S=null;if(C!==0){if(S=p.value,A!==!0||S===null){const y=M+C*4,U=x.matrixWorldInverse;m.getNormalMatrix(U),(S===null||S.length<y)&&(S=new Float32Array(y));for(let O=0,w=M;O!==C;++O,w+=4)d.copy(_[O]).applyMatrix4(U,m),d.normal.toArray(S,w),S[w+3]=d.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const fs=4,s_=[.125,.215,.35,.446,.526,.582],Gs=20,QE=256,Zo=new wp,r_=new lt;let ah=null,sh=0,rh=0,oh=!1;const JE=new Q;class o_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:m=JE}=c;ah=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,m),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,sh,rh),this._renderer.xr.enabled=oh,e.scissorTest=!1,Fr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Xs||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Ra,format:Bi,colorSpace:iu,depthBuffer:!1},l=l_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=l_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$E(c)),this._blurMaterial=tT(c,e,i),this._ggxMaterial=eT(c,e,i)}return l}_compileMaterial(e){const i=new ct(new mn,e);this._renderer.compile(i,Zo)}_sceneToCubeUV(e,i,s,l,c){const p=new pi(90,1,i,s),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(r_),_.toneMapping=Qi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ct(new Xn,new Ti({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let y=!1;const U=e.background;U?U.isColor&&(S.color.copy(U),e.background=null,y=!0):(S.color.copy(r_),y=!0);for(let O=0;O<6;O++){const w=O%3;w===0?(p.up.set(0,h[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[O],c.y,c.z)):w===1?(p.up.set(0,0,h[O]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[O],c.z)):(p.up.set(0,h[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[O]));const I=this._cubeSize;Fr(l,w*I,O>2?I:0,I,I),_.setRenderTarget(l),y&&_.render(C,p),_.render(e,p)}_.toneMapping=M,_.autoClear=x,e.background=U}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Xs||e.mapping===Xr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=u_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const m=c.uniforms;m.envMap.value=e;const p=this._cubeSize;Fr(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(d,Zo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,m=this._lodMeshes[s];m.material=d;const p=d.uniforms,h=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-v*v),x=0+h*1.25,M=_*x,{_lodMax:A}=this,C=this._sizeLods[s],S=3*C*(s>A-fs?s-A+fs:0),y=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=A-i,Fr(c,S,y,3*C,2*C),l.setRenderTarget(c),l.render(m,Zo),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=A-s,Fr(e,S,y,3*C,2*C),l.setRenderTarget(e),l.render(m,Zo)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,m){const p=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=h;const x=h.uniforms,M=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Gs-1),C=c/A,S=isFinite(c)?1+Math.floor(v*C):Gs;S>Gs&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Gs}`);const y=[];let U=0;for(let z=0;z<Gs;++z){const E=z/C,D=Math.exp(-E*E/2);y.push(D),z===0?U+=D:z<S&&(U+=2*D)}for(let z=0;z<y.length;z++)y[z]=y[z]/U;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=y,x.latitudinal.value=d==="latitudinal",m&&(x.poleAxis.value=m);const{_lodMax:O}=this;x.dTheta.value=A,x.mipInt.value=O-s;const w=this._sizeLods[l],I=3*w*(l>O-fs?l-O+fs:0),P=4*(this._cubeSize-w);Fr(i,I,P,3*w,2*w),p.setRenderTarget(i),p.render(_,Zo)}}function $E(r){const e=[],i=[],s=[];let l=r;const c=r-fs+1+s_.length;for(let d=0;d<c;d++){const m=Math.pow(2,l);e.push(m);let p=1/m;d>r-fs?p=s_[d-r+fs-1]:d===0&&(p=0),i.push(p);const h=1/(m-2),v=-h,_=1+h,x=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,A=6,C=3,S=2,y=1,U=new Float32Array(C*A*M),O=new Float32Array(S*A*M),w=new Float32Array(y*A*M);for(let P=0;P<M;P++){const z=P%3*2/3-1,E=P>2?0:-1,D=[z,E,0,z+2/3,E,0,z+2/3,E+1,0,z,E,0,z+2/3,E+1,0,z,E+1,0];U.set(D,C*A*P),O.set(x,S*A*P);const V=[P,P,P,P,P,P];w.set(V,y*A*P)}const I=new mn;I.setAttribute("position",new Fi(U,C)),I.setAttribute("uv",new Fi(O,S)),I.setAttribute("faceIndex",new Fi(w,y)),s.push(new ct(I,null)),l>fs&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function l_(r,e,i){const s=new Ji(r,e,i);return s.texture.mapping=pu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Fr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function eT(r,e,i){return new ea({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function tT(r,e,i){const s=new Float32Array(Gs),l=new Q(0,1,0);return new ea({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function c_(){return new ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function u_(){return new ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function xu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class cv extends Ji{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new nv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Xn(5,5,5),c=new ea({name:"CubemapFromEquirect",uniforms:Wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ei,blending:wa});c.uniforms.tEquirect.value=i;const d=new ct(l,c),m=i.minFilter;return i.minFilter===Hs&&(i.minFilter=Gn),new aM(1,10,this).update(e,d),i.minFilter=m,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function nT(r){let e=new WeakMap,i=new WeakMap,s=null;function l(x,M=!1){return x==null?null:M?d(x):c(x)}function c(x){if(x&&x.isTexture){const M=x.mapping;if(M===Rd||M===Nd)if(e.has(x)){const A=e.get(x).texture;return m(A,x.mapping)}else{const A=x.image;if(A&&A.height>0){const C=new cv(A.height);return C.fromEquirectangularTexture(r,x),e.set(x,C),x.addEventListener("dispose",h),m(C.texture,x.mapping)}else return null}}return x}function d(x){if(x&&x.isTexture){const M=x.mapping,A=M===Rd||M===Nd,C=M===Xs||M===Xr;if(A||C){let S=i.get(x);const y=S!==void 0?S.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==y)return s===null&&(s=new o_(r)),S=A?s.fromEquirectangular(x,S):s.fromCubemap(x,S),S.texture.pmremVersion=x.pmremVersion,i.set(x,S),S.texture;if(S!==void 0)return S.texture;{const U=x.image;return A&&U&&U.height>0||C&&U&&p(U)?(s===null&&(s=new o_(r)),S=A?s.fromEquirectangular(x):s.fromCubemap(x),S.texture.pmremVersion=x.pmremVersion,i.set(x,S),x.addEventListener("dispose",v),S.texture):null}}}return x}function m(x,M){return M===Rd?x.mapping=Xs:M===Nd&&(x.mapping=Xr),x}function p(x){let M=0;const A=6;for(let C=0;C<A;C++)x[C]!==void 0&&M++;return M===A}function h(x){const M=x.target;M.removeEventListener("dispose",h);const A=e.get(M);A!==void 0&&(e.delete(M),A.dispose())}function v(x){const M=x.target;M.removeEventListener("dispose",v);const A=i.get(M);A!==void 0&&(i.delete(M),A.dispose())}function _(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function iT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Hr("WebGLRenderer: "+s+" extension not supported."),l}}}function aT(r,e,i,s){const l={},c=new WeakMap;function d(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",d),delete l[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function m(_,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function p(_){const x=_.attributes;for(const M in x)e.update(x[M],r.ARRAY_BUFFER)}function h(_){const x=[],M=_.index,A=_.attributes.position;let C=0;if(A===void 0)return;if(M!==null){const U=M.array;C=M.version;for(let O=0,w=U.length;O<w;O+=3){const I=U[O+0],P=U[O+1],z=U[O+2];x.push(I,P,P,z,z,I)}}else{const U=A.array;C=A.version;for(let O=0,w=U.length/3-1;O<w;O+=3){const I=O+0,P=O+1,z=O+2;x.push(I,P,P,z,z,I)}}const S=new(A.count>=65535?$_:J_)(x,1);S.version=C;const y=c.get(_);y&&e.remove(y),c.set(_,S)}function v(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&h(_)}else h(_);return c.get(_)}return{get:m,update:p,getWireframeAttribute:v}}function sT(r,e,i){let s;function l(_){s=_}let c,d;function m(_){c=_.type,d=_.bytesPerElement}function p(_,x){r.drawElements(s,x,c,_*d),i.update(x,s,1)}function h(_,x,M){M!==0&&(r.drawElementsInstanced(s,x,c,_*d,M),i.update(x,s,M))}function v(_,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,_,0,M);let C=0;for(let S=0;S<M;S++)C+=x[S];i.update(C,s,1)}this.setMode=l,this.setIndex=m,this.render=p,this.renderInstances=h,this.renderMultiDraw=v}function rT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,m){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=m*(c/3);break;case r.LINES:i.lines+=m*(c/2);break;case r.LINE_STRIP:i.lines+=m*(c-1);break;case r.LINE_LOOP:i.lines+=m*c;break;case r.POINTS:i.points+=m*c;break;default:Dt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function oT(r,e,i){const s=new WeakMap,l=new cn;function c(d,m,p){const h=d.morphTargetInfluences,v=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,_=v!==void 0?v.length:0;let x=s.get(m);if(x===void 0||x.count!==_){let V=function(){E.dispose(),s.delete(m),m.removeEventListener("dispose",V)};var M=V;x!==void 0&&x.texture.dispose();const A=m.morphAttributes.position!==void 0,C=m.morphAttributes.normal!==void 0,S=m.morphAttributes.color!==void 0,y=m.morphAttributes.position||[],U=m.morphAttributes.normal||[],O=m.morphAttributes.color||[];let w=0;A===!0&&(w=1),C===!0&&(w=2),S===!0&&(w=3);let I=m.attributes.position.count*w,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const z=new Float32Array(I*P*4*_),E=new K_(z,I,P,_);E.type=Zi,E.needsUpdate=!0;const D=w*4;for(let H=0;H<_;H++){const Y=y[H],fe=U[H],xe=O[H],te=I*P*4*H;for(let G=0;G<Y.count;G++){const X=G*D;A===!0&&(l.fromBufferAttribute(Y,G),z[te+X+0]=l.x,z[te+X+1]=l.y,z[te+X+2]=l.z,z[te+X+3]=0),C===!0&&(l.fromBufferAttribute(fe,G),z[te+X+4]=l.x,z[te+X+5]=l.y,z[te+X+6]=l.z,z[te+X+7]=0),S===!0&&(l.fromBufferAttribute(xe,G),z[te+X+8]=l.x,z[te+X+9]=l.y,z[te+X+10]=l.z,z[te+X+11]=xe.itemSize===4?l.w:1)}}x={count:_,texture:E,size:new _t(I,P)},s.set(m,x),m.addEventListener("dispose",V)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let A=0;for(let S=0;S<h.length;S++)A+=h[S];const C=m.morphTargetsRelative?1:1-A;p.getUniforms().setValue(r,"morphTargetBaseInfluence",C),p.getUniforms().setValue(r,"morphTargetInfluences",h)}p.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function lT(r,e,i,s,l){let c=new WeakMap;function d(h){const v=l.render.frame,_=h.geometry,x=e.get(h,_);if(c.get(x)!==v&&(e.update(x),c.set(x,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),c.get(h)!==v&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,v))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==v&&(M.update(),c.set(M,v))}return x}function m(){c=new WeakMap}function p(h){const v=h.target;v.removeEventListener("dispose",p),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:d,dispose:m}}const cT={[P_]:"LINEAR_TONE_MAPPING",[I_]:"REINHARD_TONE_MAPPING",[z_]:"CINEON_TONE_MAPPING",[cp]:"ACES_FILMIC_TONE_MAPPING",[F_]:"AGX_TONE_MAPPING",[G_]:"NEUTRAL_TONE_MAPPING",[B_]:"CUSTOM_TONE_MAPPING"};function uT(r,e,i,s,l,c){const d=new Ji(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new jr(e,i):void 0}),m=new Ji(e,i,{type:Ra,depthBuffer:!1,stencilBuffer:!1}),p=new mn;p.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Nt([0,2,0,0,2,0],2));const h=new KS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new ct(p,h),_=new wp(-1,1,1,-1,0,1);let x=null,M=null,A=!1,C,S=null,y=[],U=!1;this.setSize=function(O,w){d.setSize(O,w),m.setSize(O,w);for(let I=0;I<y.length;I++){const P=y[I];P.setSize&&P.setSize(O,w)}},this.setEffects=function(O){y=O,U=y.length>0&&y[0].isRenderPass===!0;const w=d.width,I=d.height;for(let P=0;P<y.length;P++){const z=y[P];z.setSize&&z.setSize(w,I)}},this.begin=function(O,w){if(A||O.toneMapping===Qi&&y.length===0)return!1;if(S=w,w!==null){const I=w.width,P=w.height;(d.width!==I||d.height!==P)&&this.setSize(I,P)}return U===!1&&O.setRenderTarget(d),C=O.toneMapping,O.toneMapping=Qi,!0},this.hasRenderPass=function(){return U},this.end=function(O,w){O.toneMapping=C,A=!0;let I=d,P=m;for(let z=0;z<y.length;z++){const E=y[z];if(E.enabled!==!1&&(E.render(O,P,I,w),E.needsSwap!==!1)){const D=I;I=P,P=D}}if(x!==O.outputColorSpace||M!==O.toneMapping){x=O.outputColorSpace,M=O.toneMapping,h.defines={},Ct.getTransfer(x)===qt&&(h.defines.SRGB_TRANSFER="");const z=cT[M];z&&(h.defines[z]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=I.texture,O.setRenderTarget(S),O.render(v,_),S=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),m.dispose(),p.dispose(),h.dispose()}}const uv=new jn,np=new jr(1,1),fv=new K_,dv=new ES,hv=new nv,f_=[],d_=[],h_=new Float32Array(16),p_=new Float32Array(9),m_=new Float32Array(4);function Zr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=f_[l];if(c===void 0&&(c=new Float32Array(l),f_[l]=c),e!==0){s.toArray(c,0);for(let d=1,m=0;d!==e;++d)m+=i,r[d].toArray(c,m)}return c}function Tn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function An(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function _u(r,e){let i=d_[e];i===void 0&&(i=new Int32Array(e),d_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function fT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function dT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;r.uniform2fv(this.addr,e),An(i,e)}}function hT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Tn(i,e))return;r.uniform3fv(this.addr,e),An(i,e)}}function pT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;r.uniform4fv(this.addr,e),An(i,e)}}function mT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,s))return;m_.set(s),r.uniformMatrix2fv(this.addr,!1,m_),An(i,s)}}function gT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,s))return;p_.set(s),r.uniformMatrix3fv(this.addr,!1,p_),An(i,s)}}function xT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,s))return;h_.set(s),r.uniformMatrix4fv(this.addr,!1,h_),An(i,s)}}function _T(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function vT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;r.uniform2iv(this.addr,e),An(i,e)}}function yT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;r.uniform3iv(this.addr,e),An(i,e)}}function bT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;r.uniform4iv(this.addr,e),An(i,e)}}function ST(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function MT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;r.uniform2uiv(this.addr,e),An(i,e)}}function ET(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;r.uniform3uiv(this.addr,e),An(i,e)}}function TT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;r.uniform4uiv(this.addr,e),An(i,e)}}function AT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(np.compareFunction=i.isReversedDepthBuffer()?xp:gp,c=np):c=uv,i.setTexture2D(e||c,l)}function wT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||dv,l)}function CT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||hv,l)}function RT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||fv,l)}function NT(r){switch(r){case 5126:return fT;case 35664:return dT;case 35665:return hT;case 35666:return pT;case 35674:return mT;case 35675:return gT;case 35676:return xT;case 5124:case 35670:return _T;case 35667:case 35671:return vT;case 35668:case 35672:return yT;case 35669:case 35673:return bT;case 5125:return ST;case 36294:return MT;case 36295:return ET;case 36296:return TT;case 35678:case 36198:case 36298:case 36306:case 35682:return AT;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return CT;case 36289:case 36303:case 36311:case 36292:return RT}}function DT(r,e){r.uniform1fv(this.addr,e)}function UT(r,e){const i=Zr(e,this.size,2);r.uniform2fv(this.addr,i)}function LT(r,e){const i=Zr(e,this.size,3);r.uniform3fv(this.addr,i)}function OT(r,e){const i=Zr(e,this.size,4);r.uniform4fv(this.addr,i)}function PT(r,e){const i=Zr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function IT(r,e){const i=Zr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function zT(r,e){const i=Zr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function BT(r,e){r.uniform1iv(this.addr,e)}function FT(r,e){r.uniform2iv(this.addr,e)}function GT(r,e){r.uniform3iv(this.addr,e)}function HT(r,e){r.uniform4iv(this.addr,e)}function VT(r,e){r.uniform1uiv(this.addr,e)}function kT(r,e){r.uniform2uiv(this.addr,e)}function XT(r,e){r.uniform3uiv(this.addr,e)}function jT(r,e){r.uniform4uiv(this.addr,e)}function WT(r,e,i){const s=this.cache,l=e.length,c=_u(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=np:d=uv;for(let m=0;m!==l;++m)i.setTexture2D(e[m]||d,c[m])}function qT(r,e,i){const s=this.cache,l=e.length,c=_u(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||dv,c[d])}function YT(r,e,i){const s=this.cache,l=e.length,c=_u(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||hv,c[d])}function ZT(r,e,i){const s=this.cache,l=e.length,c=_u(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||fv,c[d])}function KT(r){switch(r){case 5126:return DT;case 35664:return UT;case 35665:return LT;case 35666:return OT;case 35674:return PT;case 35675:return IT;case 35676:return zT;case 5124:case 35670:return BT;case 35667:case 35671:return FT;case 35668:case 35672:return GT;case 35669:case 35673:return HT;case 5125:return VT;case 36294:return kT;case 36295:return XT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return WT;case 35679:case 36299:case 36307:return qT;case 35680:case 36300:case 36308:case 36293:return YT;case 36289:case 36303:case 36311:case 36292:return ZT}}class QT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=NT(i.type)}}class JT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=KT(i.type)}}class $T{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const m=l[c];m.setValue(e,i[m.id],s)}}}const lh=/(\w+)(\])?(\[|\.)?/g;function g_(r,e){r.seq.push(e),r.map[e.id]=e}function eA(r,e,i){const s=r.name,l=s.length;for(lh.lastIndex=0;;){const c=lh.exec(s),d=lh.lastIndex;let m=c[1];const p=c[2]==="]",h=c[3];if(p&&(m=m|0),h===void 0||h==="["&&d+2===l){g_(i,h===void 0?new QT(m,r,e):new JT(m,r,e));break}else{let _=i.map[m];_===void 0&&(_=new $T(m),g_(i,_)),i=_}}}class eu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const m=e.getActiveUniform(i,d),p=e.getUniformLocation(i,m.name);eA(m,p,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const m=i[c],p=s[m.id];p.needsUpdate!==!1&&m.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function x_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const tA=37297;let nA=0;function iA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const m=d+1;s.push(`${m===e?">":" "} ${m}: ${i[d]}`)}return s.join(`
`)}const __=new ht;function aA(r){Ct._getMatrix(__,Ct.workingColorSpace,r);const e=`mat3( ${__.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(r)){case au:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function v_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const m=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+iA(r.getShaderSource(e),m)}else return c}function sA(r,e){const i=aA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const rA={[P_]:"Linear",[I_]:"Reinhard",[z_]:"Cineon",[cp]:"ACESFilmic",[F_]:"AgX",[G_]:"Neutral",[B_]:"Custom"};function oA(r,e){const i=rA[e];return i===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const qc=new Q;function lA(){Ct.getLuminanceCoefficients(qc);const r=qc.x.toFixed(4),e=qc.y.toFixed(4),i=qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function uA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function fA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let m=1;c.type===r.FLOAT_MAT2&&(m=2),c.type===r.FLOAT_MAT3&&(m=3),c.type===r.FLOAT_MAT4&&(m=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:m}}return i}function Jo(r){return r!==""}function y_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function b_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(r){return r.replace(dA,pA)}const hA=new Map;function pA(r,e){let i=vt[e];if(i===void 0){const s=hA.get(e);if(s!==void 0)i=vt[s],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ip(i)}const mA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S_(r){return r.replace(mA,gA)}function gA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function M_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const xA={[Yc]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function _A(r){return xA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vA={[Xs]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE",[pu]:"ENVMAP_TYPE_CUBE_UV"};function yA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":vA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const bA={[Xr]:"ENVMAP_MODE_REFRACTION"};function SA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":bA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const MA={[O_]:"ENVMAP_BLENDING_MULTIPLY",[iS]:"ENVMAP_BLENDING_MIX",[aS]:"ENVMAP_BLENDING_ADD"};function EA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":MA[r.combine]||"ENVMAP_BLENDING_NONE"}function TA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function AA(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,m=i.fragmentShader;const p=_A(i),h=yA(i),v=SA(i),_=EA(i),x=TA(i),M=cA(i),A=uA(c),C=l.createProgram();let S,y,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Jo).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Jo).join(`
`),y.length>0&&(y+=`
`)):(S=[M_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),y=[M_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Qi?"#define TONE_MAPPING":"",i.toneMapping!==Qi?vt.tonemapping_pars_fragment:"",i.toneMapping!==Qi?oA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,sA("linearToOutputTexel",i.outputColorSpace),lA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Jo).join(`
`)),d=ip(d),d=y_(d,i),d=b_(d,i),m=ip(m),m=y_(m,i),m=b_(m,i),d=S_(d),m=S_(m),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",i.glslVersion===wx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===wx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const O=U+S+d,w=U+y+m,I=x_(l,l.VERTEX_SHADER,O),P=x_(l,l.FRAGMENT_SHADER,w);l.attachShader(C,I),l.attachShader(C,P),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(H){if(r.debug.checkShaderErrors){const Y=l.getProgramInfoLog(C)||"",fe=l.getShaderInfoLog(I)||"",xe=l.getShaderInfoLog(P)||"",te=Y.trim(),G=fe.trim(),X=xe.trim();let re=!0,q=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(re=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,I,P);else{const ee=v_(l,I,"vertex"),L=v_(l,P,"fragment");Dt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+te+`
`+ee+`
`+L)}else te!==""?ut("WebGLProgram: Program Info Log:",te):(G===""||X==="")&&(q=!1);q&&(H.diagnostics={runnable:re,programLog:te,vertexShader:{log:G,prefix:S},fragmentShader:{log:X,prefix:y}})}l.deleteShader(I),l.deleteShader(P),E=new eu(l,C),D=fA(l,C)}let E;this.getUniforms=function(){return E===void 0&&z(this),E};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let V=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=l.getProgramParameter(C,tA)),V},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=nA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=P,this}let wA=0;class CA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new RA(e),i.set(e,s)),s}}class RA{constructor(e){this.id=wA++,this.code=e,this.usedTimes=0}}function NA(r){return r===js||r===tu||r===nu}function DA(r,e,i,s,l,c){const d=new vp,m=new CA,p=new Set,h=[],v=new Map,_=s.logarithmicDepthBuffer;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(E){return p.add(E),E===0?"uv":`uv${E}`}function C(E,D,V,H,Y,fe){const xe=H.fog,te=Y.geometry,G=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,X=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,re=e.get(E.envMap||G,X),q=re&&re.mapping===pu?re.image.height:null,ee=M[E.type];E.precision!==null&&(x=s.getMaxPrecision(E.precision),x!==E.precision&&ut("WebGLProgram.getParameters:",E.precision,"not supported, using",x,"instead."));const L=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,F=L!==void 0?L.length:0;let ie=0;te.morphAttributes.position!==void 0&&(ie=1),te.morphAttributes.normal!==void 0&&(ie=2),te.morphAttributes.color!==void 0&&(ie=3);let k,de,W,ae;if(ee){const Ye=Yi[ee];k=Ye.vertexShader,de=Ye.fragmentShader}else{k=E.vertexShader,de=E.fragmentShader;const Ye=m.getVertexShaderStage(E),an=m.getFragmentShaderStage(E);m.update(E,Ye,an),W=Ye.id,ae=an.id}const ge=r.getRenderTarget(),Oe=r.state.buffers.depth.getReversed(),Te=Y.isInstancedMesh===!0,we=Y.isBatchedMesh===!0,et=!!E.map,Ve=!!E.matcap,Re=!!re,Xe=!!E.aoMap,Je=!!E.lightMap,gt=!!E.bumpMap&&E.wireframe===!1,Ut=!!E.normalMap,bt=!!E.displacementMap,un=!!E.emissiveMap,Ft=!!E.metalnessMap,nn=!!E.roughnessMap,J=E.anisotropy>0,Lt=E.clearcoat>0,zt=E.dispersion>0,B=E.iridescence>0,T=E.sheen>0,se=E.transmission>0,he=J&&!!E.anisotropyMap,ye=Lt&&!!E.clearcoatMap,Ne=Lt&&!!E.clearcoatNormalMap,Ie=Lt&&!!E.clearcoatRoughnessMap,ve=B&&!!E.iridescenceMap,be=B&&!!E.iridescenceThicknessMap,Ue=T&&!!E.sheenColorMap,je=T&&!!E.sheenRoughnessMap,Fe=!!E.specularMap,ze=!!E.specularColorMap,it=!!E.specularIntensityMap,at=se&&!!E.transmissionMap,ft=se&&!!E.thicknessMap,K=!!E.gradientMap,De=!!E.alphaMap,Me=E.alphaTest>0,Pe=!!E.alphaHash,ke=!!E.extensions;let Ce=Qi;E.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ce=r.toneMapping);const $e={shaderID:ee,shaderType:E.type,shaderName:E.name,vertexShader:k,fragmentShader:de,defines:E.defines,customVertexShaderID:W,customFragmentShaderID:ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:x,batching:we,batchingColor:we&&Y._colorsTexture!==null,instancing:Te,instancingColor:Te&&Y.instanceColor!==null,instancingMorph:Te&&Y.morphTexture!==null,outputColorSpace:ge===null?r.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:et,matcap:Ve,envMap:Re,envMapMode:Re&&re.mapping,envMapCubeUVHeight:q,aoMap:Xe,lightMap:Je,bumpMap:gt,normalMap:Ut,displacementMap:bt,emissiveMap:un,normalMapObjectSpace:Ut&&E.normalMapType===oS,normalMapTangentSpace:Ut&&E.normalMapType===Jh,packedNormalMap:Ut&&E.normalMapType===Jh&&NA(E.normalMap.format),metalnessMap:Ft,roughnessMap:nn,anisotropy:J,anisotropyMap:he,clearcoat:Lt,clearcoatMap:ye,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Ie,dispersion:zt,iridescence:B,iridescenceMap:ve,iridescenceThicknessMap:be,sheen:T,sheenColorMap:Ue,sheenRoughnessMap:je,specularMap:Fe,specularColorMap:ze,specularIntensityMap:it,transmission:se,transmissionMap:at,thicknessMap:ft,gradientMap:K,opaque:E.transparent===!1&&E.blending===Gr&&E.alphaToCoverage===!1,alphaMap:De,alphaTest:Me,alphaHash:Pe,combine:E.combine,mapUv:et&&A(E.map.channel),aoMapUv:Xe&&A(E.aoMap.channel),lightMapUv:Je&&A(E.lightMap.channel),bumpMapUv:gt&&A(E.bumpMap.channel),normalMapUv:Ut&&A(E.normalMap.channel),displacementMapUv:bt&&A(E.displacementMap.channel),emissiveMapUv:un&&A(E.emissiveMap.channel),metalnessMapUv:Ft&&A(E.metalnessMap.channel),roughnessMapUv:nn&&A(E.roughnessMap.channel),anisotropyMapUv:he&&A(E.anisotropyMap.channel),clearcoatMapUv:ye&&A(E.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&A(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&A(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&A(E.iridescenceMap.channel),iridescenceThicknessMapUv:be&&A(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&A(E.sheenColorMap.channel),sheenRoughnessMapUv:je&&A(E.sheenRoughnessMap.channel),specularMapUv:Fe&&A(E.specularMap.channel),specularColorMapUv:ze&&A(E.specularColorMap.channel),specularIntensityMapUv:it&&A(E.specularIntensityMap.channel),transmissionMapUv:at&&A(E.transmissionMap.channel),thicknessMapUv:ft&&A(E.thicknessMap.channel),alphaMapUv:De&&A(E.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Ut||J),vertexNormals:!!te.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!te.attributes.uv&&(et||De),fog:!!xe,useFog:E.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||te.attributes.normal===void 0&&Ut===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Oe,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:te.attributes.position!==void 0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ie,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:fe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ce,decodeVideoTexture:et&&E.map.isVideoTexture===!0&&Ct.getTransfer(E.map.colorSpace)===qt,decodeVideoTextureEmissive:un&&E.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(E.emissiveMap.colorSpace)===qt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ci,flipSided:E.side===ei,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ke&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&E.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return $e.vertexUv1s=p.has(1),$e.vertexUv2s=p.has(2),$e.vertexUv3s=p.has(3),p.clear(),$e}function S(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)D.push(V),D.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(y(D,E),U(D,E),D.push(r.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function y(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function U(E,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),D.packedNormalMap&&d.enable(22),D.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),D.numLightProbeGrids>0&&d.enable(22),D.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function O(E){const D=M[E.type];let V;if(D){const H=Yi[D];V=qS.clone(H.uniforms)}else V=E.uniforms;return V}function w(E,D){let V=v.get(D);return V!==void 0?++V.usedTimes:(V=new AA(r,D,E,l),h.push(V),v.set(D,V)),V}function I(E){if(--E.usedTimes===0){const D=h.indexOf(E);h[D]=h[h.length-1],h.pop(),v.delete(E.cacheKey),E.destroy()}}function P(E){m.remove(E)}function z(){m.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:O,acquireProgram:w,releaseProgram:I,releaseShaderCache:P,programs:h,dispose:z}}function UA(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let m=r.get(d);return m===void 0&&(m={},r.set(d,m)),m}function s(d){r.delete(d)}function l(d,m,p){r.get(d)[m]=p}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function LA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function E_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function T_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function m(x,M,A,C,S,y){let U=r[e];return U===void 0?(U={id:x.id,object:x,geometry:M,material:A,materialVariant:d(x),groupOrder:C,renderOrder:x.renderOrder,z:S,group:y},r[e]=U):(U.id=x.id,U.object=x,U.geometry=M,U.material=A,U.materialVariant=d(x),U.groupOrder=C,U.renderOrder=x.renderOrder,U.z=S,U.group=y),e++,U}function p(x,M,A,C,S,y){const U=m(x,M,A,C,S,y);A.transmission>0?s.push(U):A.transparent===!0?l.push(U):i.push(U)}function h(x,M,A,C,S,y){const U=m(x,M,A,C,S,y);A.transmission>0?s.unshift(U):A.transparent===!0?l.unshift(U):i.unshift(U)}function v(x,M,A){i.length>1&&i.sort(x||LA),s.length>1&&s.sort(M||E_),l.length>1&&l.sort(M||E_),A&&(i.reverse(),s.reverse(),l.reverse())}function _(){for(let x=e,M=r.length;x<M;x++){const A=r[x];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:p,unshift:h,finish:_,sort:v}}function OA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new T_,r.set(s,[d])):l>=c.length?(d=new T_,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function PA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Q,color:new lt};break;case"SpotLight":i={position:new Q,direction:new Q,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":i={color:new lt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[e.id]=i,i}}}function IA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let zA=0;function BA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function FA(r){const e=new PA,i=IA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new Q);const l=new Q,c=new tn,d=new tn;function m(h){let v=0,_=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,A=0,C=0,S=0,y=0,U=0,O=0,w=0,I=0,P=0,z=0;h.sort(BA);for(let D=0,V=h.length;D<V;D++){const H=h[D],Y=H.color,fe=H.intensity,xe=H.distance;let te=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===js?te=H.shadow.map.texture:te=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=Y.r*fe,_+=Y.g*fe,x+=Y.b*fe;else if(H.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(H.sh.coefficients[G],fe);z++}else if(H.isDirectionalLight){const G=e.get(H);if(G.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const X=H.shadow,re=i.get(H);re.shadowIntensity=X.intensity,re.shadowBias=X.bias,re.shadowNormalBias=X.normalBias,re.shadowRadius=X.radius,re.shadowMapSize=X.mapSize,s.directionalShadow[M]=re,s.directionalShadowMap[M]=te,s.directionalShadowMatrix[M]=H.shadow.matrix,U++}s.directional[M]=G,M++}else if(H.isSpotLight){const G=e.get(H);G.position.setFromMatrixPosition(H.matrixWorld),G.color.copy(Y).multiplyScalar(fe),G.distance=xe,G.coneCos=Math.cos(H.angle),G.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),G.decay=H.decay,s.spot[C]=G;const X=H.shadow;if(H.map&&(s.spotLightMap[I]=H.map,I++,X.updateMatrices(H),H.castShadow&&P++),s.spotLightMatrix[C]=X.matrix,H.castShadow){const re=i.get(H);re.shadowIntensity=X.intensity,re.shadowBias=X.bias,re.shadowNormalBias=X.normalBias,re.shadowRadius=X.radius,re.shadowMapSize=X.mapSize,s.spotShadow[C]=re,s.spotShadowMap[C]=te,w++}C++}else if(H.isRectAreaLight){const G=e.get(H);G.color.copy(Y).multiplyScalar(fe),G.halfWidth.set(H.width*.5,0,0),G.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=G,S++}else if(H.isPointLight){const G=e.get(H);if(G.color.copy(H.color).multiplyScalar(H.intensity),G.distance=H.distance,G.decay=H.decay,H.castShadow){const X=H.shadow,re=i.get(H);re.shadowIntensity=X.intensity,re.shadowBias=X.bias,re.shadowNormalBias=X.normalBias,re.shadowRadius=X.radius,re.shadowMapSize=X.mapSize,re.shadowCameraNear=X.camera.near,re.shadowCameraFar=X.camera.far,s.pointShadow[A]=re,s.pointShadowMap[A]=te,s.pointShadowMatrix[A]=H.shadow.matrix,O++}s.point[A]=G,A++}else if(H.isHemisphereLight){const G=e.get(H);G.skyColor.copy(H.color).multiplyScalar(fe),G.groundColor.copy(H.groundColor).multiplyScalar(fe),s.hemi[y]=G,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=He.LTC_FLOAT_1,s.rectAreaLTC2=He.LTC_FLOAT_2):(s.rectAreaLTC1=He.LTC_HALF_1,s.rectAreaLTC2=He.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=x;const E=s.hash;(E.directionalLength!==M||E.pointLength!==A||E.spotLength!==C||E.rectAreaLength!==S||E.hemiLength!==y||E.numDirectionalShadows!==U||E.numPointShadows!==O||E.numSpotShadows!==w||E.numSpotMaps!==I||E.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=S,s.point.length=A,s.hemi.length=y,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=w+I-P,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=z,E.directionalLength=M,E.pointLength=A,E.spotLength=C,E.rectAreaLength=S,E.hemiLength=y,E.numDirectionalShadows=U,E.numPointShadows=O,E.numSpotShadows=w,E.numSpotMaps=I,E.numLightProbes=z,s.version=zA++)}function p(h,v){let _=0,x=0,M=0,A=0,C=0;const S=v.matrixWorldInverse;for(let y=0,U=h.length;y<U;y++){const O=h[y];if(O.isDirectionalLight){const w=s.directional[_];w.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),_++}else if(O.isSpotLight){const w=s.spot[M];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),M++}else if(O.isRectAreaLight){const w=s.rectArea[A];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(S),d.identity(),c.copy(O.matrixWorld),c.premultiply(S),d.extractRotation(c),w.halfWidth.set(O.width*.5,0,0),w.halfHeight.set(0,O.height*.5,0),w.halfWidth.applyMatrix4(d),w.halfHeight.applyMatrix4(d),A++}else if(O.isPointLight){const w=s.point[x];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(S),x++}else if(O.isHemisphereLight){const w=s.hemi[C];w.direction.setFromMatrixPosition(O.matrixWorld),w.direction.transformDirection(S),C++}}}return{setup:m,setupView:p,state:s}}function A_(r){const e=new FA(r),i=[],s=[],l=[];function c(x){_.camera=x,i.length=0,s.length=0,l.length=0}function d(x){i.push(x)}function m(x){s.push(x)}function p(x){l.push(x)}function h(){e.setup(i)}function v(x){e.setupView(i,x)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:h,setupLightsView:v,pushLight:d,pushShadow:m,pushLightProbeGrid:p}}function GA(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let m;return d===void 0?(m=new A_(r),e.set(l,[m])):c>=d.length?(m=new A_(r),d.push(m)):m=d[c],m}function s(){e=new WeakMap}return{get:i,dispose:s}}const HA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kA=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],XA=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],w_=new tn,Ko=new Q,ch=new Q;function jA(r,e,i){let s=new bp;const l=new _t,c=new _t,d=new cn,m=new QS,p=new JS,h={},v=i.maxTextureSize,_={[ds]:ei,[ei]:ds,[Ci]:Ci},x=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:HA,fragmentShader:VA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const A=new mn;A.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ct(A,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let y=this.type;this.render=function(P,z,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;this.type===L_&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yc);const D=r.getRenderTarget(),V=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(wa),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const fe=y!==this.type;fe&&z.traverse(function(xe){xe.material&&(Array.isArray(xe.material)?xe.material.forEach(te=>te.needsUpdate=!0):xe.material.needsUpdate=!0)});for(let xe=0,te=P.length;xe<te;xe++){const G=P[xe],X=G.shadow;if(X===void 0){ut("WebGLShadowMap:",G,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const re=X.getFrameExtents();l.multiply(re),c.copy(X.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/re.x),l.x=c.x*re.x,X.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/re.y),l.y=c.y*re.y,X.mapSize.y=c.y));const q=r.state.buffers.depth.getReversed();if(X.camera._reversedDepth=q,X.map===null||fe===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Qo){if(G.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ji(l.x,l.y,{format:js,type:Ra,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),X.map.texture.name=G.name+".shadowMap",X.map.depthTexture=new jr(l.x,l.y,Zi),X.map.depthTexture.name=G.name+".shadowMapDepth",X.map.depthTexture.format=Na,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Pn,X.map.depthTexture.magFilter=Pn}else G.isPointLight?(X.map=new cv(l.x),X.map.depthTexture=new XS(l.x,$i)):(X.map=new Ji(l.x,l.y),X.map.depthTexture=new jr(l.x,l.y,$i)),X.map.depthTexture.name=G.name+".shadowMap",X.map.depthTexture.format=Na,this.type===Yc?(X.map.depthTexture.compareFunction=q?xp:gp,X.map.depthTexture.minFilter=Gn,X.map.depthTexture.magFilter=Gn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Pn,X.map.depthTexture.magFilter=Pn);X.camera.updateProjectionMatrix()}const ee=X.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<ee;L++){if(X.map.isWebGLCubeRenderTarget)r.setRenderTarget(X.map,L),r.clear();else{L===0&&(r.setRenderTarget(X.map),r.clear());const F=X.getViewport(L);d.set(c.x*F.x,c.y*F.y,c.x*F.z,c.y*F.w),Y.viewport(d)}if(G.isPointLight){const F=X.camera,ie=X.matrix,k=G.distance||F.far;k!==F.far&&(F.far=k,F.updateProjectionMatrix()),Ko.setFromMatrixPosition(G.matrixWorld),F.position.copy(Ko),ch.copy(F.position),ch.add(kA[L]),F.up.copy(XA[L]),F.lookAt(ch),F.updateMatrixWorld(),ie.makeTranslation(-Ko.x,-Ko.y,-Ko.z),w_.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),X._frustum.setFromProjectionMatrix(w_,F.coordinateSystem,F.reversedDepth)}else X.updateMatrices(G);s=X.getFrustum(),w(z,E,X.camera,G,this.type)}X.isPointLightShadow!==!0&&this.type===Qo&&U(X,E),X.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(D,V,H)};function U(P,z){const E=e.update(C);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ji(l.x,l.y,{format:js,type:Ra})),x.uniforms.shadow_pass.value=P.map.depthTexture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(z,null,E,x,C,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(z,null,E,M,C,null)}function O(P,z,E,D){let V=null;const H=E.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)V=H;else if(V=E.isPointLight===!0?p:m,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Y=V.uuid,fe=z.uuid;let xe=h[Y];xe===void 0&&(xe={},h[Y]=xe);let te=xe[fe];te===void 0&&(te=V.clone(),xe[fe]=te,z.addEventListener("dispose",I)),V=te}if(V.visible=z.visible,V.wireframe=z.wireframe,D===Qo?V.side=z.shadowSide!==null?z.shadowSide:z.side:V.side=z.shadowSide!==null?z.shadowSide:_[z.side],V.alphaMap=z.alphaMap,V.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,V.map=z.map,V.clipShadows=z.clipShadows,V.clippingPlanes=z.clippingPlanes,V.clipIntersection=z.clipIntersection,V.displacementMap=z.displacementMap,V.displacementScale=z.displacementScale,V.displacementBias=z.displacementBias,V.wireframeLinewidth=z.wireframeLinewidth,V.linewidth=z.linewidth,E.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const Y=r.properties.get(V);Y.light=E}return V}function w(P,z,E,D,V){if(P.visible===!1)return;if(P.layers.test(z.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&V===Qo)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,P.matrixWorld);const fe=e.update(P),xe=P.material;if(Array.isArray(xe)){const te=fe.groups;for(let G=0,X=te.length;G<X;G++){const re=te[G],q=xe[re.materialIndex];if(q&&q.visible){const ee=O(P,q,D,V);P.onBeforeShadow(r,P,z,E,fe,ee,re),r.renderBufferDirect(E,null,fe,ee,P,re),P.onAfterShadow(r,P,z,E,fe,ee,re)}}}else if(xe.visible){const te=O(P,xe,D,V);P.onBeforeShadow(r,P,z,E,fe,te,null),r.renderBufferDirect(E,null,fe,te,P,null),P.onAfterShadow(r,P,z,E,fe,te,null)}}const Y=P.children;for(let fe=0,xe=Y.length;fe<xe;fe++)w(Y[fe],z,E,D,V)}function I(P){P.target.removeEventListener("dispose",I);for(const E in h){const D=h[E],V=P.target.uuid;V in D&&(D[V].dispose(),delete D[V])}}}function WA(r,e){function i(){let K=!1;const De=new cn;let Me=null;const Pe=new cn(0,0,0,0);return{setMask:function(ke){Me!==ke&&!K&&(r.colorMask(ke,ke,ke,ke),Me=ke)},setLocked:function(ke){K=ke},setClear:function(ke,Ce,$e,Ye,an){an===!0&&(ke*=Ye,Ce*=Ye,$e*=Ye),De.set(ke,Ce,$e,Ye),Pe.equals(De)===!1&&(r.clearColor(ke,Ce,$e,Ye),Pe.copy(De))},reset:function(){K=!1,Me=null,Pe.set(-1,0,0,0)}}}function s(){let K=!1,De=!1,Me=null,Pe=null,ke=null;return{setReversed:function(Ce){if(De!==Ce){const $e=e.get("EXT_clip_control");Ce?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),De=Ce;const Ye=ke;ke=null,this.setClear(Ye)}},getReversed:function(){return De},setTest:function(Ce){Ce?ge(r.DEPTH_TEST):Oe(r.DEPTH_TEST)},setMask:function(Ce){Me!==Ce&&!K&&(r.depthMask(Ce),Me=Ce)},setFunc:function(Ce){if(De&&(Ce=xS[Ce]),Pe!==Ce){switch(Ce){case hh:r.depthFunc(r.NEVER);break;case ph:r.depthFunc(r.ALWAYS);break;case mh:r.depthFunc(r.LESS);break;case kr:r.depthFunc(r.LEQUAL);break;case gh:r.depthFunc(r.EQUAL);break;case xh:r.depthFunc(r.GEQUAL);break;case _h:r.depthFunc(r.GREATER);break;case vh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Pe=Ce}},setLocked:function(Ce){K=Ce},setClear:function(Ce){ke!==Ce&&(ke=Ce,De&&(Ce=1-Ce),r.clearDepth(Ce))},reset:function(){K=!1,Me=null,Pe=null,ke=null,De=!1}}}function l(){let K=!1,De=null,Me=null,Pe=null,ke=null,Ce=null,$e=null,Ye=null,an=null;return{setTest:function(Ht){K||(Ht?ge(r.STENCIL_TEST):Oe(r.STENCIL_TEST))},setMask:function(Ht){De!==Ht&&!K&&(r.stencilMask(Ht),De=Ht)},setFunc:function(Ht,ti,ni){(Me!==Ht||Pe!==ti||ke!==ni)&&(r.stencilFunc(Ht,ti,ni),Me=Ht,Pe=ti,ke=ni)},setOp:function(Ht,ti,ni){(Ce!==Ht||$e!==ti||Ye!==ni)&&(r.stencilOp(Ht,ti,ni),Ce=Ht,$e=ti,Ye=ni)},setLocked:function(Ht){K=Ht},setClear:function(Ht){an!==Ht&&(r.clearStencil(Ht),an=Ht)},reset:function(){K=!1,De=null,Me=null,Pe=null,ke=null,Ce=null,$e=null,Ye=null,an=null}}}const c=new i,d=new s,m=new l,p=new WeakMap,h=new WeakMap;let v={},_={},x={},M=new WeakMap,A=[],C=null,S=!1,y=null,U=null,O=null,w=null,I=null,P=null,z=null,E=new lt(0,0,0),D=0,V=!1,H=null,Y=null,fe=null,xe=null,te=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,re=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=re>=1):q.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=re>=2);let ee=null,L={};const F=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),k=new cn().fromArray(F),de=new cn().fromArray(ie);function W(K,De,Me,Pe){const ke=new Uint8Array(4),Ce=r.createTexture();r.bindTexture(K,Ce),r.texParameteri(K,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(K,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $e=0;$e<Me;$e++)K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?r.texImage3D(De,0,r.RGBA,1,1,Pe,0,r.RGBA,r.UNSIGNED_BYTE,ke):r.texImage2D(De+$e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ke);return Ce}const ae={};ae[r.TEXTURE_2D]=W(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=W(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=W(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=W(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),m.setClear(0),ge(r.DEPTH_TEST),d.setFunc(kr),gt(!1),Ut(bx),ge(r.CULL_FACE),Xe(wa);function ge(K){v[K]!==!0&&(r.enable(K),v[K]=!0)}function Oe(K){v[K]!==!1&&(r.disable(K),v[K]=!1)}function Te(K,De){return x[K]!==De?(r.bindFramebuffer(K,De),x[K]=De,K===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=De),K===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=De),!0):!1}function we(K,De){let Me=A,Pe=!1;if(K){Me=M.get(De),Me===void 0&&(Me=[],M.set(De,Me));const ke=K.textures;if(Me.length!==ke.length||Me[0]!==r.COLOR_ATTACHMENT0){for(let Ce=0,$e=ke.length;Ce<$e;Ce++)Me[Ce]=r.COLOR_ATTACHMENT0+Ce;Me.length=ke.length,Pe=!0}}else Me[0]!==r.BACK&&(Me[0]=r.BACK,Pe=!0);Pe&&r.drawBuffers(Me)}function et(K){return C!==K?(r.useProgram(K),C=K,!0):!1}const Ve={[Fs]:r.FUNC_ADD,[Gb]:r.FUNC_SUBTRACT,[Hb]:r.FUNC_REVERSE_SUBTRACT};Ve[Vb]=r.MIN,Ve[kb]=r.MAX;const Re={[Xb]:r.ZERO,[jb]:r.ONE,[Wb]:r.SRC_COLOR,[fh]:r.SRC_ALPHA,[Jb]:r.SRC_ALPHA_SATURATE,[Kb]:r.DST_COLOR,[Yb]:r.DST_ALPHA,[qb]:r.ONE_MINUS_SRC_COLOR,[dh]:r.ONE_MINUS_SRC_ALPHA,[Qb]:r.ONE_MINUS_DST_COLOR,[Zb]:r.ONE_MINUS_DST_ALPHA,[$b]:r.CONSTANT_COLOR,[eS]:r.ONE_MINUS_CONSTANT_COLOR,[tS]:r.CONSTANT_ALPHA,[nS]:r.ONE_MINUS_CONSTANT_ALPHA};function Xe(K,De,Me,Pe,ke,Ce,$e,Ye,an,Ht){if(K===wa){S===!0&&(Oe(r.BLEND),S=!1);return}if(S===!1&&(ge(r.BLEND),S=!0),K!==Fb){if(K!==y||Ht!==V){if((U!==Fs||I!==Fs)&&(r.blendEquation(r.FUNC_ADD),U=Fs,I=Fs),Ht)switch(K){case Gr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sx:r.blendFunc(r.ONE,r.ONE);break;case Mx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ex:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Dt("WebGLState: Invalid blending: ",K);break}else switch(K){case Gr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Mx:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ex:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",K);break}O=null,w=null,P=null,z=null,E.set(0,0,0),D=0,y=K,V=Ht}return}ke=ke||De,Ce=Ce||Me,$e=$e||Pe,(De!==U||ke!==I)&&(r.blendEquationSeparate(Ve[De],Ve[ke]),U=De,I=ke),(Me!==O||Pe!==w||Ce!==P||$e!==z)&&(r.blendFuncSeparate(Re[Me],Re[Pe],Re[Ce],Re[$e]),O=Me,w=Pe,P=Ce,z=$e),(Ye.equals(E)===!1||an!==D)&&(r.blendColor(Ye.r,Ye.g,Ye.b,an),E.copy(Ye),D=an),y=K,V=!1}function Je(K,De){K.side===Ci?Oe(r.CULL_FACE):ge(r.CULL_FACE);let Me=K.side===ei;De&&(Me=!Me),gt(Me),K.blending===Gr&&K.transparent===!1?Xe(wa):Xe(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),d.setFunc(K.depthFunc),d.setTest(K.depthTest),d.setMask(K.depthWrite),c.setMask(K.colorWrite);const Pe=K.stencilWrite;m.setTest(Pe),Pe&&(m.setMask(K.stencilWriteMask),m.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),m.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),un(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?ge(r.SAMPLE_ALPHA_TO_COVERAGE):Oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function gt(K){H!==K&&(K?r.frontFace(r.CW):r.frontFace(r.CCW),H=K)}function Ut(K){K!==zb?(ge(r.CULL_FACE),K!==Y&&(K===bx?r.cullFace(r.BACK):K===Bb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Oe(r.CULL_FACE),Y=K}function bt(K){K!==fe&&(X&&r.lineWidth(K),fe=K)}function un(K,De,Me){K?(ge(r.POLYGON_OFFSET_FILL),(xe!==De||te!==Me)&&(xe=De,te=Me,d.getReversed()&&(De=-De),r.polygonOffset(De,Me))):Oe(r.POLYGON_OFFSET_FILL)}function Ft(K){K?ge(r.SCISSOR_TEST):Oe(r.SCISSOR_TEST)}function nn(K){K===void 0&&(K=r.TEXTURE0+G-1),ee!==K&&(r.activeTexture(K),ee=K)}function J(K,De,Me){Me===void 0&&(ee===null?Me=r.TEXTURE0+G-1:Me=ee);let Pe=L[Me];Pe===void 0&&(Pe={type:void 0,texture:void 0},L[Me]=Pe),(Pe.type!==K||Pe.texture!==De)&&(ee!==Me&&(r.activeTexture(Me),ee=Me),r.bindTexture(K,De||ae[K]),Pe.type=K,Pe.texture=De)}function Lt(){const K=L[ee];K!==void 0&&K.type!==void 0&&(r.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function zt(){try{r.compressedTexImage2D(...arguments)}catch(K){Dt("WebGLState:",K)}}function B(){try{r.compressedTexImage3D(...arguments)}catch(K){Dt("WebGLState:",K)}}function T(){try{r.texSubImage2D(...arguments)}catch(K){Dt("WebGLState:",K)}}function se(){try{r.texSubImage3D(...arguments)}catch(K){Dt("WebGLState:",K)}}function he(){try{r.compressedTexSubImage2D(...arguments)}catch(K){Dt("WebGLState:",K)}}function ye(){try{r.compressedTexSubImage3D(...arguments)}catch(K){Dt("WebGLState:",K)}}function Ne(){try{r.texStorage2D(...arguments)}catch(K){Dt("WebGLState:",K)}}function Ie(){try{r.texStorage3D(...arguments)}catch(K){Dt("WebGLState:",K)}}function ve(){try{r.texImage2D(...arguments)}catch(K){Dt("WebGLState:",K)}}function be(){try{r.texImage3D(...arguments)}catch(K){Dt("WebGLState:",K)}}function Ue(K){return _[K]!==void 0?_[K]:r.getParameter(K)}function je(K,De){_[K]!==De&&(r.pixelStorei(K,De),_[K]=De)}function Fe(K){k.equals(K)===!1&&(r.scissor(K.x,K.y,K.z,K.w),k.copy(K))}function ze(K){de.equals(K)===!1&&(r.viewport(K.x,K.y,K.z,K.w),de.copy(K))}function it(K,De){let Me=h.get(De);Me===void 0&&(Me=new WeakMap,h.set(De,Me));let Pe=Me.get(K);Pe===void 0&&(Pe=r.getUniformBlockIndex(De,K.name),Me.set(K,Pe))}function at(K,De){const Pe=h.get(De).get(K);p.get(De)!==Pe&&(r.uniformBlockBinding(De,Pe,K.__bindingPointIndex),p.set(De,Pe))}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},_={},ee=null,L={},x={},M=new WeakMap,A=[],C=null,S=!1,y=null,U=null,O=null,w=null,I=null,P=null,z=null,E=new lt(0,0,0),D=0,V=!1,H=null,Y=null,fe=null,xe=null,te=null,k.set(0,0,r.canvas.width,r.canvas.height),de.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),m.reset()}return{buffers:{color:c,depth:d,stencil:m},enable:ge,disable:Oe,bindFramebuffer:Te,drawBuffers:we,useProgram:et,setBlending:Xe,setMaterial:Je,setFlipSided:gt,setCullFace:Ut,setLineWidth:bt,setPolygonOffset:un,setScissorTest:Ft,activeTexture:nn,bindTexture:J,unbindTexture:Lt,compressedTexImage2D:zt,compressedTexImage3D:B,texImage2D:ve,texImage3D:be,pixelStorei:je,getParameter:Ue,updateUBOMapping:it,uniformBlockBinding:at,texStorage2D:Ne,texStorage3D:Ie,texSubImage2D:T,texSubImage3D:se,compressedTexSubImage2D:he,compressedTexSubImage3D:ye,scissor:Fe,viewport:ze,reset:ft}}function qA(r,e,i,s,l,c,d){const m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new _t,v=new WeakMap,_=new Set;let x;const M=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(B,T){return A?new OffscreenCanvas(B,T):su("canvas")}function S(B,T,se){let he=1;const ye=zt(B);if((ye.width>se||ye.height>se)&&(he=se/Math.max(ye.width,ye.height)),he<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Ne=Math.floor(he*ye.width),Ie=Math.floor(he*ye.height);x===void 0&&(x=C(Ne,Ie));const ve=T?C(Ne,Ie):x;return ve.width=Ne,ve.height=Ie,ve.getContext("2d").drawImage(B,0,0,Ne,Ie),ut("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+Ne+"x"+Ie+")."),ve}else return"data"in B&&ut("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),B;return B}function y(B){return B.generateMipmaps}function U(B){r.generateMipmap(B)}function O(B){return B.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?r.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(B,T,se,he,ye,Ne=!1){if(B!==null){if(r[B]!==void 0)return r[B];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Ie;he&&(Ie=e.get("EXT_texture_norm16"),Ie||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=T;if(T===r.RED&&(se===r.FLOAT&&(ve=r.R32F),se===r.HALF_FLOAT&&(ve=r.R16F),se===r.UNSIGNED_BYTE&&(ve=r.R8),se===r.UNSIGNED_SHORT&&Ie&&(ve=Ie.R16_EXT),se===r.SHORT&&Ie&&(ve=Ie.R16_SNORM_EXT)),T===r.RED_INTEGER&&(se===r.UNSIGNED_BYTE&&(ve=r.R8UI),se===r.UNSIGNED_SHORT&&(ve=r.R16UI),se===r.UNSIGNED_INT&&(ve=r.R32UI),se===r.BYTE&&(ve=r.R8I),se===r.SHORT&&(ve=r.R16I),se===r.INT&&(ve=r.R32I)),T===r.RG&&(se===r.FLOAT&&(ve=r.RG32F),se===r.HALF_FLOAT&&(ve=r.RG16F),se===r.UNSIGNED_BYTE&&(ve=r.RG8),se===r.UNSIGNED_SHORT&&Ie&&(ve=Ie.RG16_EXT),se===r.SHORT&&Ie&&(ve=Ie.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(se===r.UNSIGNED_BYTE&&(ve=r.RG8UI),se===r.UNSIGNED_SHORT&&(ve=r.RG16UI),se===r.UNSIGNED_INT&&(ve=r.RG32UI),se===r.BYTE&&(ve=r.RG8I),se===r.SHORT&&(ve=r.RG16I),se===r.INT&&(ve=r.RG32I)),T===r.RGB_INTEGER&&(se===r.UNSIGNED_BYTE&&(ve=r.RGB8UI),se===r.UNSIGNED_SHORT&&(ve=r.RGB16UI),se===r.UNSIGNED_INT&&(ve=r.RGB32UI),se===r.BYTE&&(ve=r.RGB8I),se===r.SHORT&&(ve=r.RGB16I),se===r.INT&&(ve=r.RGB32I)),T===r.RGBA_INTEGER&&(se===r.UNSIGNED_BYTE&&(ve=r.RGBA8UI),se===r.UNSIGNED_SHORT&&(ve=r.RGBA16UI),se===r.UNSIGNED_INT&&(ve=r.RGBA32UI),se===r.BYTE&&(ve=r.RGBA8I),se===r.SHORT&&(ve=r.RGBA16I),se===r.INT&&(ve=r.RGBA32I)),T===r.RGB&&(se===r.UNSIGNED_SHORT&&Ie&&(ve=Ie.RGB16_EXT),se===r.SHORT&&Ie&&(ve=Ie.RGB16_SNORM_EXT),se===r.UNSIGNED_INT_5_9_9_9_REV&&(ve=r.RGB9_E5),se===r.UNSIGNED_INT_10F_11F_11F_REV&&(ve=r.R11F_G11F_B10F)),T===r.RGBA){const be=Ne?au:Ct.getTransfer(ye);se===r.FLOAT&&(ve=r.RGBA32F),se===r.HALF_FLOAT&&(ve=r.RGBA16F),se===r.UNSIGNED_BYTE&&(ve=be===qt?r.SRGB8_ALPHA8:r.RGBA8),se===r.UNSIGNED_SHORT&&Ie&&(ve=Ie.RGBA16_EXT),se===r.SHORT&&Ie&&(ve=Ie.RGBA16_SNORM_EXT),se===r.UNSIGNED_SHORT_4_4_4_4&&(ve=r.RGBA4),se===r.UNSIGNED_SHORT_5_5_5_1&&(ve=r.RGB5_A1)}return(ve===r.R16F||ve===r.R32F||ve===r.RG16F||ve===r.RG32F||ve===r.RGBA16F||ve===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function I(B,T){let se;return B?T===null||T===$i||T===al?se=r.DEPTH24_STENCIL8:T===Zi?se=r.DEPTH32F_STENCIL8:T===il&&(se=r.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===$i||T===al?se=r.DEPTH_COMPONENT24:T===Zi?se=r.DEPTH_COMPONENT32F:T===il&&(se=r.DEPTH_COMPONENT16),se}function P(B,T){return y(B)===!0||B.isFramebufferTexture&&B.minFilter!==Pn&&B.minFilter!==Gn?Math.log2(Math.max(T.width,T.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?T.mipmaps.length:1}function z(B){const T=B.target;T.removeEventListener("dispose",z),D(T),T.isVideoTexture&&v.delete(T),T.isHTMLTexture&&_.delete(T)}function E(B){const T=B.target;T.removeEventListener("dispose",E),H(T)}function D(B){const T=s.get(B);if(T.__webglInit===void 0)return;const se=B.source,he=M.get(se);if(he){const ye=he[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&V(B),Object.keys(he).length===0&&M.delete(se)}s.remove(B)}function V(B){const T=s.get(B);r.deleteTexture(T.__webglTexture);const se=B.source,he=M.get(se);delete he[T.__cacheKey],d.memory.textures--}function H(B){const T=s.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),s.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(T.__webglFramebuffer[he]))for(let ye=0;ye<T.__webglFramebuffer[he].length;ye++)r.deleteFramebuffer(T.__webglFramebuffer[he][ye]);else r.deleteFramebuffer(T.__webglFramebuffer[he]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[he])}else{if(Array.isArray(T.__webglFramebuffer))for(let he=0;he<T.__webglFramebuffer.length;he++)r.deleteFramebuffer(T.__webglFramebuffer[he]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let he=0;he<T.__webglColorRenderbuffer.length;he++)T.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[he]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const se=B.textures;for(let he=0,ye=se.length;he<ye;he++){const Ne=s.get(se[he]);Ne.__webglTexture&&(r.deleteTexture(Ne.__webglTexture),d.memory.textures--),s.remove(se[he])}s.remove(B)}let Y=0;function fe(){Y=0}function xe(){return Y}function te(B){Y=B}function G(){const B=Y;return B>=l.maxTextures&&ut("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),Y+=1,B}function X(B){const T=[];return T.push(B.wrapS),T.push(B.wrapT),T.push(B.wrapR||0),T.push(B.magFilter),T.push(B.minFilter),T.push(B.anisotropy),T.push(B.internalFormat),T.push(B.format),T.push(B.type),T.push(B.generateMipmaps),T.push(B.premultiplyAlpha),T.push(B.flipY),T.push(B.unpackAlignment),T.push(B.colorSpace),T.join()}function re(B,T){const se=s.get(B);if(B.isVideoTexture&&J(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&se.__version!==B.version){const he=B.image;if(he===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(se,B,T);return}}else B.isExternalTexture&&(se.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,se.__webglTexture,r.TEXTURE0+T)}function q(B,T){const se=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&se.__version!==B.version){Oe(se,B,T);return}else B.isExternalTexture&&(se.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,se.__webglTexture,r.TEXTURE0+T)}function ee(B,T){const se=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&se.__version!==B.version){Oe(se,B,T);return}i.bindTexture(r.TEXTURE_3D,se.__webglTexture,r.TEXTURE0+T)}function L(B,T){const se=s.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&se.__version!==B.version){Te(se,B,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture,r.TEXTURE0+T)}const F={[yh]:r.REPEAT,[Aa]:r.CLAMP_TO_EDGE,[bh]:r.MIRRORED_REPEAT},ie={[Pn]:r.NEAREST,[sS]:r.NEAREST_MIPMAP_NEAREST,[vc]:r.NEAREST_MIPMAP_LINEAR,[Gn]:r.LINEAR,[Dd]:r.LINEAR_MIPMAP_NEAREST,[Hs]:r.LINEAR_MIPMAP_LINEAR},k={[lS]:r.NEVER,[hS]:r.ALWAYS,[cS]:r.LESS,[gp]:r.LEQUAL,[uS]:r.EQUAL,[xp]:r.GEQUAL,[fS]:r.GREATER,[dS]:r.NOTEQUAL};function de(B,T){if(T.type===Zi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Gn||T.magFilter===Dd||T.magFilter===vc||T.magFilter===Hs||T.minFilter===Gn||T.minFilter===Dd||T.minFilter===vc||T.minFilter===Hs)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(B,r.TEXTURE_WRAP_S,F[T.wrapS]),r.texParameteri(B,r.TEXTURE_WRAP_T,F[T.wrapT]),(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)&&r.texParameteri(B,r.TEXTURE_WRAP_R,F[T.wrapR]),r.texParameteri(B,r.TEXTURE_MAG_FILTER,ie[T.magFilter]),r.texParameteri(B,r.TEXTURE_MIN_FILTER,ie[T.minFilter]),T.compareFunction&&(r.texParameteri(B,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(B,r.TEXTURE_COMPARE_FUNC,k[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Pn||T.minFilter!==vc&&T.minFilter!==Hs||T.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");r.texParameterf(B,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function W(B,T){let se=!1;B.__webglInit===void 0&&(B.__webglInit=!0,T.addEventListener("dispose",z));const he=T.source;let ye=M.get(he);ye===void 0&&(ye={},M.set(he,ye));const Ne=X(T);if(Ne!==B.__cacheKey){ye[Ne]===void 0&&(ye[Ne]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,se=!0),ye[Ne].usedTimes++;const Ie=ye[B.__cacheKey];Ie!==void 0&&(ye[B.__cacheKey].usedTimes--,Ie.usedTimes===0&&V(T)),B.__cacheKey=Ne,B.__webglTexture=ye[Ne].texture}return se}function ae(B,T,se){return Math.floor(Math.floor(B/se)/T)}function ge(B,T,se,he){const Ne=B.updateRanges;if(Ne.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,se,he,T.data);else{Ne.sort((je,Fe)=>je.start-Fe.start);let Ie=0;for(let je=1;je<Ne.length;je++){const Fe=Ne[Ie],ze=Ne[je],it=Fe.start+Fe.count,at=ae(ze.start,T.width,4),ft=ae(Fe.start,T.width,4);ze.start<=it+1&&at===ft&&ae(ze.start+ze.count-1,T.width,4)===at?Fe.count=Math.max(Fe.count,ze.start+ze.count-Fe.start):(++Ie,Ne[Ie]=ze)}Ne.length=Ie+1;const ve=i.getParameter(r.UNPACK_ROW_LENGTH),be=i.getParameter(r.UNPACK_SKIP_PIXELS),Ue=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let je=0,Fe=Ne.length;je<Fe;je++){const ze=Ne[je],it=Math.floor(ze.start/4),at=Math.ceil(ze.count/4),ft=it%T.width,K=Math.floor(it/T.width),De=at,Me=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ft),i.pixelStorei(r.UNPACK_SKIP_ROWS,K),i.texSubImage2D(r.TEXTURE_2D,0,ft,K,De,Me,se,he,T.data)}B.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ve),i.pixelStorei(r.UNPACK_SKIP_PIXELS,be),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ue)}}function Oe(B,T,se){let he=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=r.TEXTURE_3D);const ye=W(B,T),Ne=T.source;i.bindTexture(he,B.__webglTexture,r.TEXTURE0+se);const Ie=s.get(Ne);if(Ne.version!==Ie.__version||ye===!0){if(i.activeTexture(r.TEXTURE0+se),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Me=Ct.getPrimaries(Ct.workingColorSpace),Pe=T.colorSpace===us?null:Ct.getPrimaries(T.colorSpace),ke=T.colorSpace===us||Me===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}i.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let be=S(T.image,!1,l.maxTextureSize);be=Lt(T,be);const Ue=c.convert(T.format,T.colorSpace),je=c.convert(T.type);let Fe=w(T.internalFormat,Ue,je,T.normalized,T.colorSpace,T.isVideoTexture);de(he,T);let ze;const it=T.mipmaps,at=T.isVideoTexture!==!0,ft=Ie.__version===void 0||ye===!0,K=Ne.dataReady,De=P(T,be);if(T.isDepthTexture)Fe=I(T.format===Vs,T.type),ft&&(at?i.texStorage2D(r.TEXTURE_2D,1,Fe,be.width,be.height):i.texImage2D(r.TEXTURE_2D,0,Fe,be.width,be.height,0,Ue,je,null));else if(T.isDataTexture)if(it.length>0){at&&ft&&i.texStorage2D(r.TEXTURE_2D,De,Fe,it[0].width,it[0].height);for(let Me=0,Pe=it.length;Me<Pe;Me++)ze=it[Me],at?K&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,ze.width,ze.height,Ue,je,ze.data):i.texImage2D(r.TEXTURE_2D,Me,Fe,ze.width,ze.height,0,Ue,je,ze.data);T.generateMipmaps=!1}else at?(ft&&i.texStorage2D(r.TEXTURE_2D,De,Fe,be.width,be.height),K&&ge(T,be,Ue,je)):i.texImage2D(r.TEXTURE_2D,0,Fe,be.width,be.height,0,Ue,je,be.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){at&&ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,De,Fe,it[0].width,it[0].height,be.depth);for(let Me=0,Pe=it.length;Me<Pe;Me++)if(ze=it[Me],T.format!==Bi)if(Ue!==null)if(at){if(K)if(T.layerUpdates.size>0){const ke=a_(ze.width,ze.height,T.format,T.type);for(const Ce of T.layerUpdates){const $e=ze.data.subarray(Ce*ke/ze.data.BYTES_PER_ELEMENT,(Ce+1)*ke/ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,Ce,ze.width,ze.height,1,Ue,$e)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,ze.width,ze.height,be.depth,Ue,ze.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,Fe,ze.width,ze.height,be.depth,0,ze.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?K&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,ze.width,ze.height,be.depth,Ue,je,ze.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Me,Fe,ze.width,ze.height,be.depth,0,Ue,je,ze.data)}else{at&&ft&&i.texStorage2D(r.TEXTURE_2D,De,Fe,it[0].width,it[0].height);for(let Me=0,Pe=it.length;Me<Pe;Me++)ze=it[Me],T.format!==Bi?Ue!==null?at?K&&i.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,ze.width,ze.height,Ue,ze.data):i.compressedTexImage2D(r.TEXTURE_2D,Me,Fe,ze.width,ze.height,0,ze.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?K&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,ze.width,ze.height,Ue,je,ze.data):i.texImage2D(r.TEXTURE_2D,Me,Fe,ze.width,ze.height,0,Ue,je,ze.data)}else if(T.isDataArrayTexture)if(at){if(ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,De,Fe,be.width,be.height,be.depth),K)if(T.layerUpdates.size>0){const Me=a_(be.width,be.height,T.format,T.type);for(const Pe of T.layerUpdates){const ke=be.data.subarray(Pe*Me/be.data.BYTES_PER_ELEMENT,(Pe+1)*Me/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Pe,be.width,be.height,1,Ue,je,ke)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ue,je,be.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,be.width,be.height,be.depth,0,Ue,je,be.data);else if(T.isData3DTexture)at?(ft&&i.texStorage3D(r.TEXTURE_3D,De,Fe,be.width,be.height,be.depth),K&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ue,je,be.data)):i.texImage3D(r.TEXTURE_3D,0,Fe,be.width,be.height,be.depth,0,Ue,je,be.data);else if(T.isFramebufferTexture){if(ft)if(at)i.texStorage2D(r.TEXTURE_2D,De,Fe,be.width,be.height);else{let Me=be.width,Pe=be.height;for(let ke=0;ke<De;ke++)i.texImage2D(r.TEXTURE_2D,ke,Fe,Me,Pe,0,Ue,je,null),Me>>=1,Pe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){const Me=r.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),be.parentNode!==Me){Me.appendChild(be),_.add(T),Me.onpaint=Pe=>{const ke=Pe.changedElements;for(const Ce of _)ke.includes(Ce.image)&&(Ce.needsUpdate=!0)},Me.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,be);else{const ke=r.RGBA,Ce=r.RGBA,$e=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ke,Ce,$e,be)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(it.length>0){if(at&&ft){const Me=zt(it[0]);i.texStorage2D(r.TEXTURE_2D,De,Fe,Me.width,Me.height)}for(let Me=0,Pe=it.length;Me<Pe;Me++)ze=it[Me],at?K&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ue,je,ze):i.texImage2D(r.TEXTURE_2D,Me,Fe,Ue,je,ze);T.generateMipmaps=!1}else if(at){if(ft){const Me=zt(be);i.texStorage2D(r.TEXTURE_2D,De,Fe,Me.width,Me.height)}K&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ue,je,be)}else i.texImage2D(r.TEXTURE_2D,0,Fe,Ue,je,be);y(T)&&U(he),Ie.__version=Ne.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function Te(B,T,se){if(T.image.length!==6)return;const he=W(B,T),ye=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+se);const Ne=s.get(ye);if(ye.version!==Ne.__version||he===!0){i.activeTexture(r.TEXTURE0+se);const Ie=Ct.getPrimaries(Ct.workingColorSpace),ve=T.colorSpace===us?null:Ct.getPrimaries(T.colorSpace),be=T.colorSpace===us||Ie===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ue=T.isCompressedTexture||T.image[0].isCompressedTexture,je=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let Ce=0;Ce<6;Ce++)!Ue&&!je?Fe[Ce]=S(T.image[Ce],!0,l.maxCubemapSize):Fe[Ce]=je?T.image[Ce].image:T.image[Ce],Fe[Ce]=Lt(T,Fe[Ce]);const ze=Fe[0],it=c.convert(T.format,T.colorSpace),at=c.convert(T.type),ft=w(T.internalFormat,it,at,T.normalized,T.colorSpace),K=T.isVideoTexture!==!0,De=Ne.__version===void 0||he===!0,Me=ye.dataReady;let Pe=P(T,ze);de(r.TEXTURE_CUBE_MAP,T);let ke;if(Ue){K&&De&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,ft,ze.width,ze.height);for(let Ce=0;Ce<6;Ce++){ke=Fe[Ce].mipmaps;for(let $e=0;$e<ke.length;$e++){const Ye=ke[$e];T.format!==Bi?it!==null?K?Me&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,$e,0,0,Ye.width,Ye.height,it,Ye.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,$e,ft,Ye.width,Ye.height,0,Ye.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,$e,0,0,Ye.width,Ye.height,it,at,Ye.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,$e,ft,Ye.width,Ye.height,0,it,at,Ye.data)}}}else{if(ke=T.mipmaps,K&&De){ke.length>0&&Pe++;const Ce=zt(Fe[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,ft,Ce.width,Ce.height)}for(let Ce=0;Ce<6;Ce++)if(je){K?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,Fe[Ce].width,Fe[Ce].height,it,at,Fe[Ce].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ft,Fe[Ce].width,Fe[Ce].height,0,it,at,Fe[Ce].data);for(let $e=0;$e<ke.length;$e++){const an=ke[$e].image[Ce].image;K?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,$e+1,0,0,an.width,an.height,it,at,an.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,$e+1,ft,an.width,an.height,0,it,at,an.data)}}else{K?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,it,at,Fe[Ce]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ft,it,at,Fe[Ce]);for(let $e=0;$e<ke.length;$e++){const Ye=ke[$e];K?Me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,$e+1,0,0,it,at,Ye.image[Ce]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,$e+1,ft,it,at,Ye.image[Ce])}}}y(T)&&U(r.TEXTURE_CUBE_MAP),Ne.__version=ye.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function we(B,T,se,he,ye,Ne){const Ie=c.convert(se.format,se.colorSpace),ve=c.convert(se.type),be=w(se.internalFormat,Ie,ve,se.normalized,se.colorSpace),Ue=s.get(T),je=s.get(se);if(je.__renderTarget=T,!Ue.__hasExternalTextures){const Fe=Math.max(1,T.width>>Ne),ze=Math.max(1,T.height>>Ne);ye===r.TEXTURE_3D||ye===r.TEXTURE_2D_ARRAY?i.texImage3D(ye,Ne,be,Fe,ze,T.depth,0,Ie,ve,null):i.texImage2D(ye,Ne,be,Fe,ze,0,Ie,ve,null)}i.bindFramebuffer(r.FRAMEBUFFER,B),nn(T)?m.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,ye,je.__webglTexture,0,Ft(T)):(ye===r.TEXTURE_2D||ye>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,ye,je.__webglTexture,Ne),i.bindFramebuffer(r.FRAMEBUFFER,null)}function et(B,T,se){if(r.bindRenderbuffer(r.RENDERBUFFER,B),T.depthBuffer){const he=T.depthTexture,ye=he&&he.isDepthTexture?he.type:null,Ne=I(T.stencilBuffer,ye),Ie=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;nn(T)?m.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ft(T),Ne,T.width,T.height):se?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft(T),Ne,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ne,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ie,r.RENDERBUFFER,B)}else{const he=T.textures;for(let ye=0;ye<he.length;ye++){const Ne=he[ye],Ie=c.convert(Ne.format,Ne.colorSpace),ve=c.convert(Ne.type),be=w(Ne.internalFormat,Ie,ve,Ne.normalized,Ne.colorSpace);nn(T)?m.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ft(T),be,T.width,T.height):se?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft(T),be,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,be,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ve(B,T,se){const he=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,B),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ye=s.get(T.depthTexture);if(ye.__renderTarget=T,(!ye.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,T.depthTexture.addEventListener("dispose",z)),ye.__webglTexture===void 0){ye.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ye.__webglTexture),de(r.TEXTURE_CUBE_MAP,T.depthTexture);const Ue=c.convert(T.depthTexture.format),je=c.convert(T.depthTexture.type);let Fe;T.depthTexture.format===Na?Fe=r.DEPTH_COMPONENT24:T.depthTexture.format===Vs&&(Fe=r.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Fe,T.width,T.height,0,Ue,je,null)}}else re(T.depthTexture,0);const Ne=ye.__webglTexture,Ie=Ft(T),ve=he?r.TEXTURE_CUBE_MAP_POSITIVE_X+se:r.TEXTURE_2D,be=T.depthTexture.format===Vs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Na)nn(T)?m.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,be,ve,Ne,0,Ie):r.framebufferTexture2D(r.FRAMEBUFFER,be,ve,Ne,0);else if(T.depthTexture.format===Vs)nn(T)?m.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,be,ve,Ne,0,Ie):r.framebufferTexture2D(r.FRAMEBUFFER,be,ve,Ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Re(B){const T=s.get(B),se=B.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==B.depthTexture){const he=B.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),he){const ye=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",ye)};he.addEventListener("dispose",ye),T.__depthDisposeCallback=ye}T.__boundDepthTexture=he}if(B.depthTexture&&!T.__autoAllocateDepthBuffer)if(se)for(let he=0;he<6;he++)Ve(T.__webglFramebuffer[he],B,he);else{const he=B.texture.mipmaps;he&&he.length>0?Ve(T.__webglFramebuffer[0],B,0):Ve(T.__webglFramebuffer,B,0)}else if(se){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=r.createRenderbuffer(),et(T.__webglDepthbuffer[he],B,!1);else{const ye=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=T.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,Ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,Ne)}}else{const he=B.texture.mipmaps;if(he&&he.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),et(T.__webglDepthbuffer,B,!1);else{const ye=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,Ne)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Xe(B,T,se){const he=s.get(B);T!==void 0&&we(he.__webglFramebuffer,B,B.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),se!==void 0&&Re(B)}function Je(B){const T=B.texture,se=s.get(B),he=s.get(T);B.addEventListener("dispose",E);const ye=B.textures,Ne=B.isWebGLCubeRenderTarget===!0,Ie=ye.length>1;if(Ie||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=T.version,d.memory.textures++),Ne){se.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(T.mipmaps&&T.mipmaps.length>0){se.__webglFramebuffer[ve]=[];for(let be=0;be<T.mipmaps.length;be++)se.__webglFramebuffer[ve][be]=r.createFramebuffer()}else se.__webglFramebuffer[ve]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){se.__webglFramebuffer=[];for(let ve=0;ve<T.mipmaps.length;ve++)se.__webglFramebuffer[ve]=r.createFramebuffer()}else se.__webglFramebuffer=r.createFramebuffer();if(Ie)for(let ve=0,be=ye.length;ve<be;ve++){const Ue=s.get(ye[ve]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=r.createTexture(),d.memory.textures++)}if(B.samples>0&&nn(B)===!1){se.__webglMultisampledFramebuffer=r.createFramebuffer(),se.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let ve=0;ve<ye.length;ve++){const be=ye[ve];se.__webglColorRenderbuffer[ve]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,se.__webglColorRenderbuffer[ve]);const Ue=c.convert(be.format,be.colorSpace),je=c.convert(be.type),Fe=w(be.internalFormat,Ue,je,be.normalized,be.colorSpace,B.isXRRenderTarget===!0),ze=Ft(B);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,Fe,B.width,B.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,se.__webglColorRenderbuffer[ve])}r.bindRenderbuffer(r.RENDERBUFFER,null),B.depthBuffer&&(se.__webglDepthRenderbuffer=r.createRenderbuffer(),et(se.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ne){i.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),de(r.TEXTURE_CUBE_MAP,T);for(let ve=0;ve<6;ve++)if(T.mipmaps&&T.mipmaps.length>0)for(let be=0;be<T.mipmaps.length;be++)we(se.__webglFramebuffer[ve][be],B,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,be);else we(se.__webglFramebuffer[ve],B,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);y(T)&&U(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ie){for(let ve=0,be=ye.length;ve<be;ve++){const Ue=ye[ve],je=s.get(Ue);let Fe=r.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Fe=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Fe,je.__webglTexture),de(Fe,Ue),we(se.__webglFramebuffer,B,Ue,r.COLOR_ATTACHMENT0+ve,Fe,0),y(Ue)&&U(Fe)}i.unbindTexture()}else{let ve=r.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(ve=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ve,he.__webglTexture),de(ve,T),T.mipmaps&&T.mipmaps.length>0)for(let be=0;be<T.mipmaps.length;be++)we(se.__webglFramebuffer[be],B,T,r.COLOR_ATTACHMENT0,ve,be);else we(se.__webglFramebuffer,B,T,r.COLOR_ATTACHMENT0,ve,0);y(T)&&U(ve),i.unbindTexture()}B.depthBuffer&&Re(B)}function gt(B){const T=B.textures;for(let se=0,he=T.length;se<he;se++){const ye=T[se];if(y(ye)){const Ne=O(B),Ie=s.get(ye).__webglTexture;i.bindTexture(Ne,Ie),U(Ne),i.unbindTexture()}}}const Ut=[],bt=[];function un(B){if(B.samples>0){if(nn(B)===!1){const T=B.textures,se=B.width,he=B.height;let ye=r.COLOR_BUFFER_BIT;const Ne=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ie=s.get(B),ve=T.length>1;if(ve)for(let Ue=0;Ue<T.length;Ue++)i.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const be=B.texture.mipmaps;be&&be.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ue=0;Ue<T.length;Ue++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(ye|=r.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(ye|=r.STENCIL_BUFFER_BIT)),ve){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ue]);const je=s.get(T[Ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,je,0)}r.blitFramebuffer(0,0,se,he,0,0,se,he,ye,r.NEAREST),p===!0&&(Ut.length=0,bt.length=0,Ut.push(r.COLOR_ATTACHMENT0+Ue),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Ut.push(Ne),bt.push(Ne),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,bt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ut))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ve)for(let Ue=0;Ue<T.length;Ue++){i.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ue]);const je=s.get(T[Ue]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,je,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&p){const T=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Ft(B){return Math.min(l.maxSamples,B.samples)}function nn(B){const T=s.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function J(B){const T=d.render.frame;v.get(B)!==T&&(v.set(B,T),B.update())}function Lt(B,T){const se=B.colorSpace,he=B.format,ye=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||se!==iu&&se!==us&&(Ct.getTransfer(se)===qt?(he!==Bi||ye!==mi)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",se)),T}function zt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=G,this.resetTextureUnits=fe,this.getTextureUnits=xe,this.setTextureUnits=te,this.setTexture2D=re,this.setTexture2DArray=q,this.setTexture3D=ee,this.setTextureCube=L,this.rebindTextures=Xe,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=we,this.useMultisampledRTT=nn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function YA(r,e){function i(s,l=us){let c;const d=Ct.getTransfer(l);if(s===mi)return r.UNSIGNED_BYTE;if(s===fp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===dp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===X_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===j_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===V_)return r.BYTE;if(s===k_)return r.SHORT;if(s===il)return r.UNSIGNED_SHORT;if(s===up)return r.INT;if(s===$i)return r.UNSIGNED_INT;if(s===Zi)return r.FLOAT;if(s===Ra)return r.HALF_FLOAT;if(s===W_)return r.ALPHA;if(s===q_)return r.RGB;if(s===Bi)return r.RGBA;if(s===Na)return r.DEPTH_COMPONENT;if(s===Vs)return r.DEPTH_STENCIL;if(s===Y_)return r.RED;if(s===hp)return r.RED_INTEGER;if(s===js)return r.RG;if(s===pp)return r.RG_INTEGER;if(s===mp)return r.RGBA_INTEGER;if(s===Zc||s===Kc||s===Qc||s===Jc)if(d===qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sh||s===Mh||s===Eh||s===Th)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Sh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Eh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Th)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ah||s===wh||s===Ch||s===Rh||s===Nh||s===tu||s===Dh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ah||s===wh)return d===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ch)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Rh)return c.COMPRESSED_R11_EAC;if(s===Nh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===tu)return c.COMPRESSED_RG11_EAC;if(s===Dh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Uh||s===Lh||s===Oh||s===Ph||s===Ih||s===zh||s===Bh||s===Fh||s===Gh||s===Hh||s===Vh||s===kh||s===Xh||s===jh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Uh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Lh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Oh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ph)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ih)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===jh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wh||s===qh||s===Yh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Wh)return d===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zh||s===Kh||s===nu||s===Qh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Zh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Kh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===nu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===al?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const ZA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new iv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ea({vertexShader:ZA,fragmentShader:KA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ct(new gu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JA extends Ws{constructor(e,i){super();const s=this;let l=null,c=1,d=null,m="local-floor",p=1,h=null,v=null,_=null,x=null,M=null,A=null;const C=typeof XRWebGLBinding<"u",S=new QA,y={},U=i.getContextAttributes();let O=null,w=null;const I=[],P=[],z=new _t;let E=null;const D=new pi;D.viewport=new cn;const V=new pi;V.viewport=new cn;const H=[D,V],Y=new sM;let fe=null,xe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ae=I[W];return ae===void 0&&(ae=new Bd,I[W]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(W){let ae=I[W];return ae===void 0&&(ae=new Bd,I[W]=ae),ae.getGripSpace()},this.getHand=function(W){let ae=I[W];return ae===void 0&&(ae=new Bd,I[W]=ae),ae.getHandSpace()};function te(W){const ae=P.indexOf(W.inputSource);if(ae===-1)return;const ge=I[ae];ge!==void 0&&(ge.update(W.inputSource,W.frame,h||d),ge.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){l.removeEventListener("select",te),l.removeEventListener("selectstart",te),l.removeEventListener("selectend",te),l.removeEventListener("squeeze",te),l.removeEventListener("squeezestart",te),l.removeEventListener("squeezeend",te),l.removeEventListener("end",G),l.removeEventListener("inputsourceschange",X);for(let W=0;W<I.length;W++){const ae=P[W];ae!==null&&(P[W]=null,I[W].disconnect(ae))}fe=null,xe=null,S.reset();for(const W in y)delete y[W];e.setRenderTarget(O),M=null,x=null,_=null,l=null,w=null,de.stop(),s.isPresenting=!1,e.setPixelRatio(E),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,s.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){m=W,s.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(W){h=W},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",te),l.addEventListener("selectstart",te),l.addEventListener("selectend",te),l.addEventListener("squeeze",te),l.addEventListener("squeezestart",te),l.addEventListener("squeezeend",te),l.addEventListener("end",G),l.addEventListener("inputsourceschange",X),U.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Oe=null,Te=null;U.depth&&(Te=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ge=U.stencil?Vs:Na,Oe=U.stencil?al:$i);const we={colorFormat:i.RGBA8,depthFormat:Te,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(we),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),w=new Ji(x.textureWidth,x.textureHeight,{format:Bi,type:mi,depthTexture:new jr(x.textureWidth,x.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ge={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ge),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new Ji(M.framebufferWidth,M.framebufferHeight,{format:Bi,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(p),h=null,d=await l.requestReferenceSpace(m),de.setContext(l),de.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function X(W){for(let ae=0;ae<W.removed.length;ae++){const ge=W.removed[ae],Oe=P.indexOf(ge);Oe>=0&&(P[Oe]=null,I[Oe].disconnect(ge))}for(let ae=0;ae<W.added.length;ae++){const ge=W.added[ae];let Oe=P.indexOf(ge);if(Oe===-1){for(let we=0;we<I.length;we++)if(we>=P.length){P.push(ge),Oe=we;break}else if(P[we]===null){P[we]=ge,Oe=we;break}if(Oe===-1)break}const Te=I[Oe];Te&&Te.connect(ge)}}const re=new Q,q=new Q;function ee(W,ae,ge){re.setFromMatrixPosition(ae.matrixWorld),q.setFromMatrixPosition(ge.matrixWorld);const Oe=re.distanceTo(q),Te=ae.projectionMatrix.elements,we=ge.projectionMatrix.elements,et=Te[14]/(Te[10]-1),Ve=Te[14]/(Te[10]+1),Re=(Te[9]+1)/Te[5],Xe=(Te[9]-1)/Te[5],Je=(Te[8]-1)/Te[0],gt=(we[8]+1)/we[0],Ut=et*Je,bt=et*gt,un=Oe/(-Je+gt),Ft=un*-Je;if(ae.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ft),W.translateZ(un),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Te[10]===-1)W.projectionMatrix.copy(ae.projectionMatrix),W.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const nn=et+un,J=Ve+un,Lt=Ut-Ft,zt=bt+(Oe-Ft),B=Re*Ve/J*nn,T=Xe*Ve/J*nn;W.projectionMatrix.makePerspective(Lt,zt,B,T,nn,J),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function L(W,ae){ae===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ae.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let ae=W.near,ge=W.far;S.texture!==null&&(S.depthNear>0&&(ae=S.depthNear),S.depthFar>0&&(ge=S.depthFar)),Y.near=V.near=D.near=ae,Y.far=V.far=D.far=ge,(fe!==Y.near||xe!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),fe=Y.near,xe=Y.far),Y.layers.mask=W.layers.mask|6,D.layers.mask=Y.layers.mask&-5,V.layers.mask=Y.layers.mask&-3;const Oe=W.parent,Te=Y.cameras;L(Y,Oe);for(let we=0;we<Te.length;we++)L(Te[we],Oe);Te.length===2?ee(Y,D,V):Y.projectionMatrix.copy(D.projectionMatrix),F(W,Y,Oe)};function F(W,ae,ge){ge===null?W.matrix.copy(ae.matrixWorld):(W.matrix.copy(ge.matrixWorld),W.matrix.invert(),W.matrix.multiply(ae.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ae.projectionMatrix),W.projectionMatrixInverse.copy(ae.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=$h*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(W){p=W,x!==null&&(x.fixedFoveation=W),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=W)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Y)},this.getCameraTexture=function(W){return y[W]};let ie=null;function k(W,ae){if(v=ae.getViewerPose(h||d),A=ae,v!==null){const ge=v.views;M!==null&&(e.setRenderTargetFramebuffer(w,M.framebuffer),e.setRenderTarget(w));let Oe=!1;ge.length!==Y.cameras.length&&(Y.cameras.length=0,Oe=!0);for(let Ve=0;Ve<ge.length;Ve++){const Re=ge[Ve];let Xe=null;if(M!==null)Xe=M.getViewport(Re);else{const gt=_.getViewSubImage(x,Re);Xe=gt.viewport,Ve===0&&(e.setRenderTargetTextures(w,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(w))}let Je=H[Ve];Je===void 0&&(Je=new pi,Je.layers.enable(Ve),Je.viewport=new cn,H[Ve]=Je),Je.matrix.fromArray(Re.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(Re.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ve===0&&(Y.matrix.copy(Je.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Oe===!0&&Y.cameras.push(Je)}const Te=l.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=s.getBinding();const Ve=_.getDepthInformation(ge[0]);Ve&&Ve.isValid&&Ve.texture&&S.init(Ve,l.renderState)}if(Te&&Te.includes("camera-access")&&C){e.state.unbindTexture(),_=s.getBinding();for(let Ve=0;Ve<ge.length;Ve++){const Re=ge[Ve].camera;if(Re){let Xe=y[Re];Xe||(Xe=new iv,y[Re]=Xe);const Je=_.getCameraImage(Re);Xe.sourceTexture=Je}}}}for(let ge=0;ge<I.length;ge++){const Oe=P[ge],Te=I[ge];Oe!==null&&Te!==void 0&&Te.update(Oe,ae,h||d)}ie&&ie(W,ae),ae.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ae}),A=null}const de=new ov;de.setAnimationLoop(k),this.setAnimationLoop=function(W){ie=W},this.dispose=function(){}}}const $A=new tn,pv=new ht;pv.set(-1,0,0,0,1,0,0,0,1);function e2(r,e){function i(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function s(S,y){y.color.getRGB(S.fogColor.value,av(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function l(S,y,U,O,w){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(S,y):y.isMeshLambertMaterial?(c(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(S,y),_(S,y)):y.isMeshPhongMaterial?(c(S,y),v(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(S,y),x(S,y),y.isMeshPhysicalMaterial&&M(S,y,w)):y.isMeshMatcapMaterial?(c(S,y),A(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),C(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(d(S,y),y.isLineDashedMaterial&&m(S,y)):y.isPointsMaterial?p(S,y,U,O):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,i(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ei&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,i(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ei&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,i(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,i(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const U=e.get(y),O=U.envMap,w=U.envMapRotation;O&&(S.envMap.value=O,S.envMapRotation.value.setFromMatrix4($A.makeRotationFromEuler(w)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(pv),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,S.aoMapTransform))}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform))}function m(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,U,O){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*U,S.scale.value=O*.5,y.map&&(S.map.value=y.map,i(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function v(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function x(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function M(S,y,U){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ei&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,y){y.matcap&&(S.matcap.value=y.matcap)}function C(S,y){const U=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function t2(r,e,i,s){let l={},c={},d=[];const m=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,I){const P=I.program;s.uniformBlockBinding(w,P)}function h(w,I){let P=l[w.id];P===void 0&&(S(w),P=v(w),l[w.id]=P,w.addEventListener("dispose",U));const z=I.program;s.updateUBOMapping(w,z);const E=e.render.frame;c[w.id]!==E&&(x(w),c[w.id]=E)}function v(w){const I=_();w.__bindingPointIndex=I;const P=r.createBuffer(),z=w.__size,E=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,z,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,P),P}function _(){for(let w=0;w<m;w++)if(d.indexOf(w)===-1)return d.push(w),w;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(w){const I=l[w.id],P=w.uniforms,z=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let E=0,D=P.length;E<D;E++){const V=P[E];if(Array.isArray(V))for(let H=0,Y=V.length;H<Y;H++)M(V[H],E,H,z);else M(V,E,0,z)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(w,I,P,z){if(C(w,I,P,z)===!0){const E=w.__offset,D=w.value;if(Array.isArray(D)){let V=0;for(let H=0;H<D.length;H++){const Y=D[H],fe=y(Y);A(Y,w.__data,V),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(V+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(D,w.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,w.__data)}}function A(w,I,P){typeof w=="number"||typeof w=="boolean"?I[0]=w:w.isMatrix3?(I[0]=w.elements[0],I[1]=w.elements[1],I[2]=w.elements[2],I[3]=0,I[4]=w.elements[3],I[5]=w.elements[4],I[6]=w.elements[5],I[7]=0,I[8]=w.elements[6],I[9]=w.elements[7],I[10]=w.elements[8],I[11]=0):ArrayBuffer.isView(w)?I.set(new w.constructor(w.buffer,w.byteOffset,I.length)):w.toArray(I,P)}function C(w,I,P,z){const E=w.value,D=I+"_"+P;if(z[D]===void 0)return typeof E=="number"||typeof E=="boolean"?z[D]=E:ArrayBuffer.isView(E)?z[D]=E.slice():z[D]=E.clone(),!0;{const V=z[D];if(typeof E=="number"||typeof E=="boolean"){if(V!==E)return z[D]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(V.equals(E)===!1)return V.copy(E),!0}}return!1}function S(w){const I=w.uniforms;let P=0;const z=16;for(let D=0,V=I.length;D<V;D++){const H=Array.isArray(I[D])?I[D]:[I[D]];for(let Y=0,fe=H.length;Y<fe;Y++){const xe=H[Y],te=Array.isArray(xe.value)?xe.value:[xe.value];for(let G=0,X=te.length;G<X;G++){const re=te[G],q=y(re),ee=P%z,L=ee%q.boundary,F=ee+L;P+=L,F!==0&&z-F<q.storage&&(P+=z-F),xe.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),xe.__offset=P,P+=q.storage}}}const E=P%z;return E>0&&(P+=z-E),w.__size=P,w.__cache={},this}function y(w){const I={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(I.boundary=4,I.storage=4):w.isVector2?(I.boundary=8,I.storage=8):w.isVector3||w.isColor?(I.boundary=16,I.storage=12):w.isVector4?(I.boundary=16,I.storage=16):w.isMatrix3?(I.boundary=48,I.storage=48):w.isMatrix4?(I.boundary=64,I.storage=64):w.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(I.boundary=16,I.storage=w.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",w),I}function U(w){const I=w.target;I.removeEventListener("dispose",U);const P=d.indexOf(I.__bindingPointIndex);d.splice(P,1),r.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function O(){for(const w in l)r.deleteBuffer(l[w]);d=[],l={},c={}}return{bind:p,update:h,dispose:O}}const n2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function i2(){return qi===null&&(qi=new BS(n2,16,16,js,Ra),qi.name="DFG_LUT",qi.minFilter=Gn,qi.magFilter=Gn,qi.wrapS=Aa,qi.wrapT=Aa,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class a2{constructor(e={}){const{canvas:i=mS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:m=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:M=mi}=e;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=d;const C=M,S=new Set([mp,pp,hp]),y=new Set([mi,$i,il,al,fp,dp]),U=new Uint32Array(4),O=new Int32Array(4),w=new Q;let I=null,P=null;const z=[],E=[];let D=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let H=!1,Y=null,fe=null,xe=null,te=null;this._outputColorSpace=wi;let G=0,X=0,re=null,q=-1,ee=null;const L=new cn,F=new cn;let ie=null;const k=new lt(0);let de=0,W=i.width,ae=i.height,ge=1,Oe=null,Te=null;const we=new cn(0,0,W,ae),et=new cn(0,0,W,ae);let Ve=!1;const Re=new bp;let Xe=!1,Je=!1;const gt=new tn,Ut=new Q,bt=new cn,un={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function nn(){return re===null?ge:1}let J=s;function Lt(R,$){return i.getContext(R,$)}try{const R={alpha:!0,depth:l,stencil:c,antialias:m,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${lp}`),i.addEventListener("webglcontextlost",an,!1),i.addEventListener("webglcontextrestored",Ht,!1),i.addEventListener("webglcontextcreationerror",ti,!1),J===null){const $="webgl2";if(J=Lt($,R),J===null)throw Lt($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Dt("WebGLRenderer: "+R.message),R}let zt,B,T,se,he,ye,Ne,Ie,ve,be,Ue,je,Fe,ze,it,at,ft,K,De,Me,Pe,ke,Ce;function $e(){zt=new iT(J),zt.init(),Pe=new YA(J,zt),B=new ZE(J,zt,e,Pe),T=new WA(J,zt),B.reversedDepthBuffer&&x&&T.buffers.depth.setReversed(!0),fe=J.createFramebuffer(),xe=J.createFramebuffer(),te=J.createFramebuffer(),se=new rT(J),he=new UA,ye=new qA(J,zt,T,he,B,Pe,se),Ne=new nT(V),Ie=new uM(J),ke=new qE(J,Ie),ve=new aT(J,Ie,se,ke),be=new lT(J,ve,Ie,ke,se),K=new oT(J,B,ye),it=new KE(he),Ue=new DA(V,Ne,zt,B,ke,it),je=new e2(V,he),Fe=new OA,ze=new GA(zt),ft=new WE(V,Ne,T,be,A,p),at=new jA(V,be,B),Ce=new t2(J,se,B,T),De=new YE(J,zt,se),Me=new sT(J,zt,se),se.programs=Ue.programs,V.capabilities=B,V.extensions=zt,V.properties=he,V.renderLists=Fe,V.shadowMap=at,V.state=T,V.info=se}$e(),C!==mi&&(D=new uT(C,i.width,i.height,m,l,c));const Ye=new JA(V,J);this.xr=Ye,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const R=zt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=zt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(R){R!==void 0&&(ge=R,this.setSize(W,ae,!1))},this.getSize=function(R){return R.set(W,ae)},this.setSize=function(R,$,pe=!0){if(Ye.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,ae=$,i.width=Math.floor(R*ge),i.height=Math.floor($*ge),pe===!0&&(i.style.width=R+"px",i.style.height=$+"px"),D!==null&&D.setSize(i.width,i.height),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(W*ge,ae*ge).floor()},this.setDrawingBufferSize=function(R,$,pe){W=R,ae=$,ge=pe,i.width=Math.floor(R*pe),i.height=Math.floor($*pe),this.setViewport(0,0,R,$)},this.setEffects=function(R){if(C===mi){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let $=0;$<R.length;$++)if(R[$].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(we)},this.setViewport=function(R,$,pe,ce){R.isVector4?we.set(R.x,R.y,R.z,R.w):we.set(R,$,pe,ce),T.viewport(L.copy(we).multiplyScalar(ge).round())},this.getScissor=function(R){return R.copy(et)},this.setScissor=function(R,$,pe,ce){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,$,pe,ce),T.scissor(F.copy(et).multiplyScalar(ge).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(R){T.setScissorTest(Ve=R)},this.setOpaqueSort=function(R){Oe=R},this.setTransparentSort=function(R){Te=R},this.getClearColor=function(R){return R.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(R=!0,$=!0,pe=!0){let ce=0;if(R){let ue=!1;if(re!==null){const Ge=re.texture.format;ue=S.has(Ge)}if(ue){const Ge=re.texture.type,qe=y.has(Ge),Be=ft.getClearColor(),Ke=ft.getClearAlpha(),Ze=Be.r,st=Be.g,pt=Be.b;qe?(U[0]=Ze,U[1]=st,U[2]=pt,U[3]=Ke,J.clearBufferuiv(J.COLOR,0,U)):(O[0]=Ze,O[1]=st,O[2]=pt,O[3]=Ke,J.clearBufferiv(J.COLOR,0,O))}else ce|=J.COLOR_BUFFER_BIT}$&&(ce|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(ce|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&J.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Y=R},this.dispose=function(){i.removeEventListener("webglcontextlost",an,!1),i.removeEventListener("webglcontextrestored",Ht,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),ft.dispose(),Fe.dispose(),ze.dispose(),he.dispose(),Ne.dispose(),be.dispose(),ke.dispose(),Ce.dispose(),Ue.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",gn),Ye.removeEventListener("sessionend",Nn),Wn.stop()};function an(R){R.preventDefault(),Rx("WebGLRenderer: Context Lost."),H=!0}function Ht(){Rx("WebGLRenderer: Context Restored."),H=!1;const R=se.autoReset,$=at.enabled,pe=at.autoUpdate,ce=at.needsUpdate,ue=at.type;$e(),se.autoReset=R,at.enabled=$,at.autoUpdate=pe,at.needsUpdate=ce,at.type=ue}function ti(R){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ni(R){const $=R.target;$.removeEventListener("dispose",ni),Kr($)}function Kr(R){Qr(R),he.remove(R)}function Qr(R){const $=he.get(R).programs;$!==void 0&&($.forEach(function(pe){Ue.releaseProgram(pe)}),R.isShaderMaterial&&Ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,pe,ce,ue,Ge){$===null&&($=un);const qe=ue.isMesh&&ue.matrixWorld.determinantAffine()<0,Be=La(R,$,pe,ce,ue);T.setMaterial(ce,qe);let Ke=pe.index,Ze=1;if(ce.wireframe===!0){if(Ke=ve.getWireframeAttribute(pe),Ke===void 0)return;Ze=2}const st=pe.drawRange,pt=pe.attributes.position;let nt=st.start*Ze,Ot=(st.start+st.count)*Ze;Ge!==null&&(nt=Math.max(nt,Ge.start*Ze),Ot=Math.min(Ot,(Ge.start+Ge.count)*Ze)),Ke!==null?(nt=Math.max(nt,0),Ot=Math.min(Ot,Ke.count)):pt!=null&&(nt=Math.max(nt,0),Ot=Math.min(Ot,pt.count));const sn=Ot-nt;if(sn<0||sn===1/0)return;ke.setup(ue,ce,Be,pe,Ke);let Qt,Vt=De;if(Ke!==null&&(Qt=Ie.get(Ke),Vt=Me,Vt.setIndex(Qt)),ue.isMesh)ce.wireframe===!0?(T.setLineWidth(ce.wireframeLinewidth*nn()),Vt.setMode(J.LINES)):Vt.setMode(J.TRIANGLES);else if(ue.isLine){let kt=ce.linewidth;kt===void 0&&(kt=1),T.setLineWidth(kt*nn()),ue.isLineSegments?Vt.setMode(J.LINES):ue.isLineLoop?Vt.setMode(J.LINE_LOOP):Vt.setMode(J.LINE_STRIP)}else ue.isPoints?Vt.setMode(J.POINTS):ue.isSprite&&Vt.setMode(J.TRIANGLES);if(ue.isBatchedMesh)if(zt.get("WEBGL_multi_draw"))Vt.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{const kt=ue._multiDrawStarts,We=ue._multiDrawCounts,In=ue._multiDrawCount,St=Ke?Ie.get(Ke).bytesPerElement:1,Mn=he.get(ce).currentProgram.getUniforms();for(let ii=0;ii<In;ii++)Mn.setValue(J,"_gl_DrawID",ii),Vt.render(kt[ii]/St,We[ii])}else if(ue.isInstancedMesh)Vt.renderInstances(nt,sn,ue.count);else if(pe.isInstancedBufferGeometry){const kt=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,We=Math.min(pe.instanceCount,kt);Vt.renderInstances(nt,sn,We)}else Vt.render(nt,sn)};function Jr(R,$,pe){R.transparent===!0&&R.side===Ci&&R.forceSinglePass===!1?(R.side=ei,R.needsUpdate=!0,Ua(R,$,pe),R.side=ds,R.needsUpdate=!0,Ua(R,$,pe),R.side=Ci):Ua(R,$,pe)}this.compile=function(R,$,pe=null){pe===null&&(pe=R),P=ze.get(pe),P.init($),E.push(P),pe.traverseVisible(function(ue){ue.isLight&&ue.layers.test($.layers)&&(P.pushLight(ue),ue.castShadow&&P.pushShadow(ue))}),R!==pe&&R.traverseVisible(function(ue){ue.isLight&&ue.layers.test($.layers)&&(P.pushLight(ue),ue.castShadow&&P.pushShadow(ue))}),P.setupLights();const ce=new Set;return R.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;const Ge=ue.material;if(Ge)if(Array.isArray(Ge))for(let qe=0;qe<Ge.length;qe++){const Be=Ge[qe];Jr(Be,pe,ue),ce.add(Be)}else Jr(Ge,pe,ue),ce.add(Ge)}),P=E.pop(),ce},this.compileAsync=function(R,$,pe=null){const ce=this.compile(R,$,pe);return new Promise(ue=>{function Ge(){if(ce.forEach(function(qe){he.get(qe).currentProgram.isReady()&&ce.delete(qe)}),ce.size===0){ue(R);return}setTimeout(Ge,10)}zt.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let Ys=null;function Gi(R){Ys&&Ys(R)}function gn(){Wn.stop()}function Nn(){Wn.start()}const Wn=new ov;Wn.setAnimationLoop(Gi),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(R){Ys=R,Ye.setAnimationLoop(R),R===null?Wn.stop():Wn.start()},Ye.addEventListener("sessionstart",gn),Ye.addEventListener("sessionend",Nn),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;Y!==null&&Y.renderStart(R,$);const pe=Ye.enabled===!0&&Ye.isPresenting===!0,ce=D!==null&&(re===null||pe)&&D.begin(V,re);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera($),$=Ye.getCamera()),R.isScene===!0&&R.onBeforeRender(V,R,$,re),P=ze.get(R,E.length),P.init($),P.state.textureUnits=ye.getTextureUnits(),E.push(P),gt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Re.setFromProjectionMatrix(gt,Ki,$.reversedDepth),Je=this.localClippingEnabled,Xe=it.init(this.clippingPlanes,Je),I=Fe.get(R,z.length),I.init(),z.push(I),Ye.enabled===!0&&Ye.isPresenting===!0){const qe=V.xr.getDepthSensingMesh();qe!==null&&ps(qe,$,-1/0,V.sortObjects)}ps(R,$,0,V.sortObjects),I.finish(),V.sortObjects===!0&&I.sort(Oe,Te,$.reversedDepth),Ft=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,Ft&&ft.addToRenderList(I,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&it.beginShadows();const ue=P.state.shadowsArray;if(at.render(ue,R,$),Xe===!0&&it.endShadows(),(ce&&D.hasRenderPass())===!1){const qe=I.opaque,Be=I.transmissive;if(P.setupLights(),$.isArrayCamera){const Ke=$.cameras;if(Be.length>0)for(let Ze=0,st=Ke.length;Ze<st;Ze++){const pt=Ke[Ze];cl(qe,Be,R,pt)}Ft&&ft.render(R);for(let Ze=0,st=Ke.length;Ze<st;Ze++){const pt=Ke[Ze];ll(I,R,pt,pt.viewport)}}else Be.length>0&&cl(qe,Be,R,$),Ft&&ft.render(R),ll(I,R,$)}re!==null&&X===0&&(ye.updateMultisampleRenderTarget(re),ye.updateRenderTargetMipmap(re)),ce&&D.end(V),R.isScene===!0&&R.onAfterRender(V,R,$),ke.resetDefaultState(),q=-1,ee=null,E.pop(),E.length>0?(P=E[E.length-1],ye.setTextureUnits(P.state.textureUnits),Xe===!0&&it.setGlobalState(V.clippingPlanes,P.state.camera)):P=null,z.pop(),z.length>0?I=z[z.length-1]:I=null,Y!==null&&Y.renderEnd()};function ps(R,$,pe,ce){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)pe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLightProbeGrid)P.pushLightProbeGrid(R);else if(R.isLight)P.pushLight(R),R.castShadow&&P.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Re.intersectsSprite(R)){ce&&bt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(gt);const qe=be.update(R),Be=R.material;Be.visible&&I.push(R,qe,Be,pe,bt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Re.intersectsObject(R))){const qe=be.update(R),Be=R.material;if(ce&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),bt.copy(R.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),bt.copy(qe.boundingSphere.center)),bt.applyMatrix4(R.matrixWorld).applyMatrix4(gt)),Array.isArray(Be)){const Ke=qe.groups;for(let Ze=0,st=Ke.length;Ze<st;Ze++){const pt=Ke[Ze],nt=Be[pt.materialIndex];nt&&nt.visible&&I.push(R,qe,nt,pe,bt.z,pt)}}else Be.visible&&I.push(R,qe,Be,pe,bt.z,null)}}const Ge=R.children;for(let qe=0,Be=Ge.length;qe<Be;qe++)ps(Ge[qe],$,pe,ce)}function ll(R,$,pe,ce){const{opaque:ue,transmissive:Ge,transparent:qe}=R;P.setupLightsView(pe),Xe===!0&&it.setGlobalState(V.clippingPlanes,pe),ce&&T.viewport(L.copy(ce)),ue.length>0&&ms(ue,$,pe),Ge.length>0&&ms(Ge,$,pe),qe.length>0&&ms(qe,$,pe),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function cl(R,$,pe,ce){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ce.id]===void 0){const nt=zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ce.id]=new Ji(1,1,{generateMipmaps:!0,type:nt?Ra:mi,minFilter:Hs,samples:Math.max(4,B.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Ge=P.state.transmissionRenderTarget[ce.id],qe=ce.viewport||L;Ge.setSize(qe.z*V.transmissionResolutionScale,qe.w*V.transmissionResolutionScale);const Be=V.getRenderTarget(),Ke=V.getActiveCubeFace(),Ze=V.getActiveMipmapLevel();V.setRenderTarget(Ge),V.getClearColor(k),de=V.getClearAlpha(),de<1&&V.setClearColor(16777215,.5),V.clear(),Ft&&ft.render(pe);const st=V.toneMapping;V.toneMapping=Qi;const pt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),P.setupLightsView(ce),Xe===!0&&it.setGlobalState(V.clippingPlanes,ce),ms(R,pe,ce),ye.updateMultisampleRenderTarget(Ge),ye.updateRenderTargetMipmap(Ge),zt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Ot=0,sn=$.length;Ot<sn;Ot++){const Qt=$[Ot],{object:Vt,geometry:kt,material:We,group:In}=Qt;if(We.side===Ci&&Vt.layers.test(ce.layers)){const St=We.side;We.side=ei,We.needsUpdate=!0,Da(Vt,pe,ce,kt,We,In),We.side=St,We.needsUpdate=!0,nt=!0}}nt===!0&&(ye.updateMultisampleRenderTarget(Ge),ye.updateRenderTargetMipmap(Ge))}V.setRenderTarget(Be,Ke,Ze),V.setClearColor(k,de),pt!==void 0&&(ce.viewport=pt),V.toneMapping=st}function ms(R,$,pe){const ce=$.isScene===!0?$.overrideMaterial:null;for(let ue=0,Ge=R.length;ue<Ge;ue++){const qe=R[ue],{object:Be,geometry:Ke,group:Ze}=qe;let st=qe.material;st.allowOverride===!0&&ce!==null&&(st=ce),Be.layers.test(pe.layers)&&Da(Be,$,pe,Ke,st,Ze)}}function Da(R,$,pe,ce,ue,Ge){R.onBeforeRender(V,$,pe,ce,ue,Ge),R.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ue.onBeforeRender(V,$,pe,ce,R,Ge),ue.transparent===!0&&ue.side===Ci&&ue.forceSinglePass===!1?(ue.side=ei,ue.needsUpdate=!0,V.renderBufferDirect(pe,$,ce,ue,R,Ge),ue.side=ds,ue.needsUpdate=!0,V.renderBufferDirect(pe,$,ce,ue,R,Ge),ue.side=Ci):V.renderBufferDirect(pe,$,ce,ue,R,Ge),R.onAfterRender(V,$,pe,ce,ue,Ge)}function Ua(R,$,pe){$.isScene!==!0&&($=un);const ce=he.get(R),ue=P.state.lights,Ge=P.state.shadowsArray,qe=ue.state.version,Be=Ue.getParameters(R,ue.state,Ge,$,pe,P.state.lightProbeGridArray),Ke=Ue.getProgramCacheKey(Be);let Ze=ce.programs;ce.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?$.environment:null,ce.fog=$.fog;const st=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ce.envMap=Ne.get(R.envMap||ce.environment,st),ce.envMapRotation=ce.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,Ze===void 0&&(R.addEventListener("dispose",ni),Ze=new Map,ce.programs=Ze);let pt=Ze.get(Ke);if(pt!==void 0){if(ce.currentProgram===pt&&ce.lightsStateVersion===qe)return na(R,Be),pt}else Be.uniforms=Ue.getUniforms(R),Y!==null&&R.isNodeMaterial&&Y.build(R,pe,Be),R.onBeforeCompile(Be,V),pt=Ue.acquireProgram(Be,Ke),Ze.set(Ke,pt),ce.uniforms=Be.uniforms;const nt=ce.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(nt.clippingPlanes=it.uniform),na(R,Be),ce.needsLights=ul(R),ce.lightsStateVersion=qe,ce.needsLights&&(nt.ambientLightColor.value=ue.state.ambient,nt.lightProbe.value=ue.state.probe,nt.directionalLights.value=ue.state.directional,nt.directionalLightShadows.value=ue.state.directionalShadow,nt.spotLights.value=ue.state.spot,nt.spotLightShadows.value=ue.state.spotShadow,nt.rectAreaLights.value=ue.state.rectArea,nt.ltc_1.value=ue.state.rectAreaLTC1,nt.ltc_2.value=ue.state.rectAreaLTC2,nt.pointLights.value=ue.state.point,nt.pointLightShadows.value=ue.state.pointShadow,nt.hemisphereLights.value=ue.state.hemi,nt.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,nt.spotLightMatrix.value=ue.state.spotLightMatrix,nt.spotLightMap.value=ue.state.spotLightMap,nt.pointShadowMatrix.value=ue.state.pointShadowMatrix),ce.lightProbeGrid=P.state.lightProbeGridArray.length>0,ce.currentProgram=pt,ce.uniformsList=null,pt}function ta(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=eu.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function na(R,$){const pe=he.get(R);pe.outputColorSpace=$.outputColorSpace,pe.batching=$.batching,pe.batchingColor=$.batchingColor,pe.instancing=$.instancing,pe.instancingColor=$.instancingColor,pe.instancingMorph=$.instancingMorph,pe.skinning=$.skinning,pe.morphTargets=$.morphTargets,pe.morphNormals=$.morphNormals,pe.morphColors=$.morphColors,pe.morphTargetsCount=$.morphTargetsCount,pe.numClippingPlanes=$.numClippingPlanes,pe.numIntersection=$.numClipIntersection,pe.vertexAlphas=$.vertexAlphas,pe.vertexTangents=$.vertexTangents,pe.toneMapping=$.toneMapping}function gs(R,$){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;w.setFromMatrixPosition($.matrixWorld);for(let pe=0,ce=R.length;pe<ce;pe++){const ue=R[pe];if(ue.texture!==null&&ue.boundingBox.containsPoint(w))return ue}return null}function La(R,$,pe,ce,ue){$.isScene!==!0&&($=un),ye.resetTextureUnits();const Ge=$.fog,qe=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?$.environment:null,Be=re===null?V.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ct.workingColorSpace,Ke=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,Ze=Ne.get(ce.envMap||qe,Ke),st=ce.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pt=!!pe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),nt=!!pe.morphAttributes.position,Ot=!!pe.morphAttributes.normal,sn=!!pe.morphAttributes.color;let Qt=Qi;ce.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Qt=V.toneMapping);const Vt=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,kt=Vt!==void 0?Vt.length:0,We=he.get(ce),In=P.state.lights;if(Xe===!0&&(Je===!0||R!==ee)){const Gt=R===ee&&ce.id===q;it.setState(ce,R,Gt)}let St=!1;ce.version===We.__version?(We.needsLights&&We.lightsStateVersion!==In.state.version||We.outputColorSpace!==Be||ue.isBatchedMesh&&We.batching===!1||!ue.isBatchedMesh&&We.batching===!0||ue.isBatchedMesh&&We.batchingColor===!0&&ue.colorTexture===null||ue.isBatchedMesh&&We.batchingColor===!1&&ue.colorTexture!==null||ue.isInstancedMesh&&We.instancing===!1||!ue.isInstancedMesh&&We.instancing===!0||ue.isSkinnedMesh&&We.skinning===!1||!ue.isSkinnedMesh&&We.skinning===!0||ue.isInstancedMesh&&We.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&We.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&We.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&We.instancingMorph===!1&&ue.morphTexture!==null||We.envMap!==Ze||ce.fog===!0&&We.fog!==Ge||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==it.numPlanes||We.numIntersection!==it.numIntersection)||We.vertexAlphas!==st||We.vertexTangents!==pt||We.morphTargets!==nt||We.morphNormals!==Ot||We.morphColors!==sn||We.toneMapping!==Qt||We.morphTargetsCount!==kt||!!We.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,We.__version=ce.version);let Mn=We.currentProgram;St===!0&&(Mn=Ua(ce,$,ue),Y&&ce.isNodeMaterial&&Y.onUpdateProgram(ce,Mn,We));let ii=!1,Ni=!1,ai=!1;const Xt=Mn.getUniforms(),rn=We.uniforms;if(T.useProgram(Mn.program)&&(ii=!0,Ni=!0,ai=!0),ce.id!==q&&(q=ce.id,Ni=!0),We.needsLights){const Gt=gs(P.state.lightProbeGridArray,ue);We.lightProbeGrid!==Gt&&(We.lightProbeGrid=Gt,Ni=!0)}if(ii||ee!==R){T.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Xt.setValue(J,"projectionMatrix",R.projectionMatrix),Xt.setValue(J,"viewMatrix",R.matrixWorldInverse);const Hi=Xt.map.cameraPosition;Hi!==void 0&&Hi.setValue(J,Ut.setFromMatrixPosition(R.matrixWorld)),B.logarithmicDepthBuffer&&Xt.setValue(J,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Xt.setValue(J,"isOrthographic",R.isOrthographicCamera===!0),ee!==R&&(ee=R,Ni=!0,ai=!0)}if(We.needsLights&&(In.state.directionalShadowMap.length>0&&Xt.setValue(J,"directionalShadowMap",In.state.directionalShadowMap,ye),In.state.spotShadowMap.length>0&&Xt.setValue(J,"spotShadowMap",In.state.spotShadowMap,ye),In.state.pointShadowMap.length>0&&Xt.setValue(J,"pointShadowMap",In.state.pointShadowMap,ye)),ue.isSkinnedMesh){Xt.setOptional(J,ue,"bindMatrix"),Xt.setOptional(J,ue,"bindMatrixInverse");const Gt=ue.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Xt.setValue(J,"boneTexture",Gt.boneTexture,ye))}ue.isBatchedMesh&&(Xt.setOptional(J,ue,"batchingTexture"),Xt.setValue(J,"batchingTexture",ue._matricesTexture,ye),Xt.setOptional(J,ue,"batchingIdTexture"),Xt.setValue(J,"batchingIdTexture",ue._indirectTexture,ye),Xt.setOptional(J,ue,"batchingColorTexture"),ue._colorsTexture!==null&&Xt.setValue(J,"batchingColorTexture",ue._colorsTexture,ye));const Di=pe.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&K.update(ue,pe,Mn),(Ni||We.receiveShadow!==ue.receiveShadow)&&(We.receiveShadow=ue.receiveShadow,Xt.setValue(J,"receiveShadow",ue.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&$.environment!==null&&(rn.envMapIntensity.value=$.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=i2()),Ni){if(Xt.setValue(J,"toneMappingExposure",V.toneMappingExposure),We.needsLights&&xn(rn,ai),Ge&&ce.fog===!0&&je.refreshFogUniforms(rn,Ge),je.refreshMaterialUniforms(rn,ce,ge,ae,P.state.transmissionRenderTarget[R.id]),We.needsLights&&We.lightProbeGrid){const Gt=We.lightProbeGrid;rn.probesSH.value=Gt.texture,rn.probesMin.value.copy(Gt.boundingBox.min),rn.probesMax.value.copy(Gt.boundingBox.max),rn.probesResolution.value.copy(Gt.resolution)}eu.upload(J,ta(We),rn,ye)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(eu.upload(J,ta(We),rn,ye),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Xt.setValue(J,"center",ue.center),Xt.setValue(J,"modelViewMatrix",ue.modelViewMatrix),Xt.setValue(J,"normalMatrix",ue.normalMatrix),Xt.setValue(J,"modelMatrix",ue.matrixWorld),ce.uniformsGroups!==void 0){const Gt=ce.uniformsGroups;for(let Hi=0,Oa=Gt.length;Hi<Oa;Hi++){const xs=Gt[Hi];Ce.update(xs,Mn),Ce.bind(xs,Mn)}}return Mn}function xn(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function ul(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(R,$,pe){const ce=he.get(R);ce.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),he.get(R.texture).__webglTexture=$,he.get(R.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:pe,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,$){const pe=he.get(R);pe.__webglFramebuffer=$,pe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(R,$=0,pe=0){re=R,G=$,X=pe;let ce=null,ue=!1,Ge=!1;if(R){const Be=he.get(R);if(Be.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(J.FRAMEBUFFER,Be.__webglFramebuffer),L.copy(R.viewport),F.copy(R.scissor),ie=R.scissorTest,T.viewport(L),T.scissor(F),T.setScissorTest(ie),q=-1;return}else if(Be.__webglFramebuffer===void 0)ye.setupRenderTarget(R);else if(Be.__hasExternalTextures)ye.rebindTextures(R,he.get(R.texture).__webglTexture,he.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const st=R.depthTexture;if(Be.__boundDepthTexture!==st){if(st!==null&&he.has(st)&&(R.width!==st.image.width||R.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(R)}}const Ke=R.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ge=!0);const Ze=he.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[$])?ce=Ze[$][pe]:ce=Ze[$],ue=!0):R.samples>0&&ye.useMultisampledRTT(R)===!1?ce=he.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?ce=Ze[pe]:ce=Ze,L.copy(R.viewport),F.copy(R.scissor),ie=R.scissorTest}else L.copy(we).multiplyScalar(ge).floor(),F.copy(et).multiplyScalar(ge).floor(),ie=Ve;if(pe!==0&&(ce=fe),T.bindFramebuffer(J.FRAMEBUFFER,ce)&&T.drawBuffers(R,ce),T.viewport(L),T.scissor(F),T.setScissorTest(ie),ue){const Be=he.get(R.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+$,Be.__webglTexture,pe)}else if(Ge){const Be=$;for(let Ke=0;Ke<R.textures.length;Ke++){const Ze=he.get(R.textures[Ke]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Ke,Ze.__webglTexture,pe,Be)}}else if(R!==null&&pe!==0){const Be=he.get(R.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Be.__webglTexture,pe)}q=-1},this.readRenderTargetPixels=function(R,$,pe,ce,ue,Ge,qe,Be=0){if(!(R&&R.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=he.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qe!==void 0&&(Ke=Ke[qe]),Ke){T.bindFramebuffer(J.FRAMEBUFFER,Ke);try{const Ze=R.textures[Be],st=Ze.format,pt=Ze.type;if(R.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Be),!B.textureFormatReadable(st)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(pt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-ce&&pe>=0&&pe<=R.height-ue&&J.readPixels($,pe,ce,ue,Pe.convert(st),Pe.convert(pt),Ge)}finally{const Ze=re!==null?he.get(re).__webglFramebuffer:null;T.bindFramebuffer(J.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(R,$,pe,ce,ue,Ge,qe,Be=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=he.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qe!==void 0&&(Ke=Ke[qe]),Ke)if($>=0&&$<=R.width-ce&&pe>=0&&pe<=R.height-ue){T.bindFramebuffer(J.FRAMEBUFFER,Ke);const Ze=R.textures[Be],st=Ze.format,pt=Ze.type;if(R.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Be),!B.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,nt),J.bufferData(J.PIXEL_PACK_BUFFER,Ge.byteLength,J.STREAM_READ),J.readPixels($,pe,ce,ue,Pe.convert(st),Pe.convert(pt),0);const Ot=re!==null?he.get(re).__webglFramebuffer:null;T.bindFramebuffer(J.FRAMEBUFFER,Ot);const sn=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await gS(J,sn,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,nt),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,Ge),J.deleteBuffer(nt),J.deleteSync(sn),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,$=null,pe=0){const ce=Math.pow(2,-pe),ue=Math.floor(R.image.width*ce),Ge=Math.floor(R.image.height*ce),qe=$!==null?$.x:0,Be=$!==null?$.y:0;ye.setTexture2D(R,0),J.copyTexSubImage2D(J.TEXTURE_2D,pe,0,0,qe,Be,ue,Ge),T.unbindTexture()},this.copyTextureToTexture=function(R,$,pe=null,ce=null,ue=0,Ge=0){let qe,Be,Ke,Ze,st,pt,nt,Ot,sn;const Qt=R.isCompressedTexture?R.mipmaps[Ge]:R.image;if(pe!==null)qe=pe.max.x-pe.min.x,Be=pe.max.y-pe.min.y,Ke=pe.isBox3?pe.max.z-pe.min.z:1,Ze=pe.min.x,st=pe.min.y,pt=pe.isBox3?pe.min.z:0;else{const rn=Math.pow(2,-ue);qe=Math.floor(Qt.width*rn),Be=Math.floor(Qt.height*rn),R.isDataArrayTexture?Ke=Qt.depth:R.isData3DTexture?Ke=Math.floor(Qt.depth*rn):Ke=1,Ze=0,st=0,pt=0}ce!==null?(nt=ce.x,Ot=ce.y,sn=ce.z):(nt=0,Ot=0,sn=0);const Vt=Pe.convert($.format),kt=Pe.convert($.type);let We;$.isData3DTexture?(ye.setTexture3D($,0),We=J.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ye.setTexture2DArray($,0),We=J.TEXTURE_2D_ARRAY):(ye.setTexture2D($,0),We=J.TEXTURE_2D),T.activeTexture(J.TEXTURE0),T.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,$.flipY),T.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),T.pixelStorei(J.UNPACK_ALIGNMENT,$.unpackAlignment);const In=T.getParameter(J.UNPACK_ROW_LENGTH),St=T.getParameter(J.UNPACK_IMAGE_HEIGHT),Mn=T.getParameter(J.UNPACK_SKIP_PIXELS),ii=T.getParameter(J.UNPACK_SKIP_ROWS),Ni=T.getParameter(J.UNPACK_SKIP_IMAGES);T.pixelStorei(J.UNPACK_ROW_LENGTH,Qt.width),T.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Qt.height),T.pixelStorei(J.UNPACK_SKIP_PIXELS,Ze),T.pixelStorei(J.UNPACK_SKIP_ROWS,st),T.pixelStorei(J.UNPACK_SKIP_IMAGES,pt);const ai=R.isDataArrayTexture||R.isData3DTexture,Xt=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){const rn=he.get(R),Di=he.get($),Gt=he.get(rn.__renderTarget),Hi=he.get(Di.__renderTarget);T.bindFramebuffer(J.READ_FRAMEBUFFER,Gt.__webglFramebuffer),T.bindFramebuffer(J.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Oa=0;Oa<Ke;Oa++)ai&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,he.get(R).__webglTexture,ue,pt+Oa),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,he.get($).__webglTexture,Ge,sn+Oa)),J.blitFramebuffer(Ze,st,qe,Be,nt,Ot,qe,Be,J.DEPTH_BUFFER_BIT,J.NEAREST);T.bindFramebuffer(J.READ_FRAMEBUFFER,null),T.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(ue!==0||R.isRenderTargetTexture||he.has(R)){const rn=he.get(R),Di=he.get($);T.bindFramebuffer(J.READ_FRAMEBUFFER,xe),T.bindFramebuffer(J.DRAW_FRAMEBUFFER,te);for(let Gt=0;Gt<Ke;Gt++)ai?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,rn.__webglTexture,ue,pt+Gt):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,rn.__webglTexture,ue),Xt?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Di.__webglTexture,Ge,sn+Gt):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Di.__webglTexture,Ge),ue!==0?J.blitFramebuffer(Ze,st,qe,Be,nt,Ot,qe,Be,J.COLOR_BUFFER_BIT,J.NEAREST):Xt?J.copyTexSubImage3D(We,Ge,nt,Ot,sn+Gt,Ze,st,qe,Be):J.copyTexSubImage2D(We,Ge,nt,Ot,Ze,st,qe,Be);T.bindFramebuffer(J.READ_FRAMEBUFFER,null),T.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Xt?R.isDataTexture||R.isData3DTexture?J.texSubImage3D(We,Ge,nt,Ot,sn,qe,Be,Ke,Vt,kt,Qt.data):$.isCompressedArrayTexture?J.compressedTexSubImage3D(We,Ge,nt,Ot,sn,qe,Be,Ke,Vt,Qt.data):J.texSubImage3D(We,Ge,nt,Ot,sn,qe,Be,Ke,Vt,kt,Qt):R.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,Ge,nt,Ot,qe,Be,Vt,kt,Qt.data):R.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,Ge,nt,Ot,Qt.width,Qt.height,Vt,Qt.data):J.texSubImage2D(J.TEXTURE_2D,Ge,nt,Ot,qe,Be,Vt,kt,Qt);T.pixelStorei(J.UNPACK_ROW_LENGTH,In),T.pixelStorei(J.UNPACK_IMAGE_HEIGHT,St),T.pixelStorei(J.UNPACK_SKIP_PIXELS,Mn),T.pixelStorei(J.UNPACK_SKIP_ROWS,ii),T.pixelStorei(J.UNPACK_SKIP_IMAGES,Ni),Ge===0&&$.generateMipmaps&&J.generateMipmap(We),T.unbindTexture()},this.initRenderTarget=function(R){he.get(R).__webglFramebuffer===void 0&&ye.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ye.setTextureCube(R,0):R.isData3DTexture?ye.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ye.setTexture2DArray(R,0):ye.setTexture2D(R,0),T.unbindTexture()},this.resetState=function(){G=0,X=0,re=null,T.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ct._getUnpackColorSpace()}}const s2=({level:r,mode:e,selectedObjectId:i,onSelectObject:s,onUpdateObject:l,onClueDiscovered:c,onCoinsCollected:d,onEnemyDefeated:m,onLevelComplete:p,onGameOver:h,playerHp:v,onPlayerDamage:_,touchInput:x,companionSpeech:M})=>{const A=Le.useRef(null),C=Le.useRef(null),S=Le.useRef(null),y=Le.useRef(null),U=Le.useRef(new Map),O=Le.useRef(null),w=Le.useRef(null),I=Le.useRef(null),P=Le.useRef(null),z=Le.useRef(null),E=Le.useRef(null),D=Le.useRef({pos:new Q(...r.playerSpawn),vel:new Q(0,0,0),isGrounded:!1,isDashing:!1,dashTimer:0,isAttacking:!1,attackTimer:0,isGripping:!1,isCrouching:!1,collectedItems:new Set,rotationY:0}),V=Le.useRef({distance:24,theta:Math.PI/4,phi:Math.PI/3,target:new Q(0,3,0),isDragging:!1,dragButton:0,lastMouseX:0,lastMouseY:0}),H=Le.useRef({});Le.useEffect(()=>{if(!A.current)return;const q=A.current.clientWidth,ee=A.current.clientHeight,L=new US;C.current=L;const F=new pi(60,q/ee,.1,1e3);S.current=F,F.position.set(0,15,25),F.lookAt(0,3,0);const ie=new a2({antialias:!0,alpha:!1,powerPreference:"high-performance"});ie.setSize(q,ee),ie.setPixelRatio(Math.min(window.devicePixelRatio,2)),ie.shadowMap.enabled=!0,ie.shadowMap.type=L_,ie.toneMapping=cp,ie.toneMappingExposure=1.1,A.current.appendChild(ie.domElement),y.current=ie;const k=new iM(16777215,.8);L.add(k),z.current=k;const de=new nM(16775917,1.4);de.position.set(20,40,20),de.castShadow=!0,de.shadow.mapSize.width=2048,de.shadow.mapSize.height=2048,de.shadow.camera.near=.5,de.shadow.camera.far=150;const W=35;de.shadow.camera.left=-W,de.shadow.camera.right=W,de.shadow.camera.top=W,de.shadow.camera.bottom=-W,L.add(de),P.current=de;const ae=new lM(60,60,5032432,3804323);ae.position.y=-.01,L.add(ae),E.current=ae;const ge=new ResizeObserver(we=>{for(const et of we){const{width:Ve,height:Re}=et.contentRect;Ve>0&&Re>0&&S.current&&y.current&&(S.current.aspect=Ve/Re,S.current.updateProjectionMatrix(),y.current.setSize(Ve,Re))}});ge.observe(A.current);const Oe=we=>{H.current[we.code]=!0,we.code==="KeyF"&&(D.current.isAttacking=!0,D.current.attackTimer=.3,kn.playAttack()),we.code==="Space"&&D.current.isGrounded&&kn.playJump()},Te=we=>{H.current[we.code]=!1};return window.addEventListener("keydown",Oe),window.addEventListener("keyup",Te),()=>{ge.disconnect(),window.removeEventListener("keydown",Oe),window.removeEventListener("keyup",Te),kn.toggleRainAmbient(!1),y.current&&A.current&&(A.current.removeChild(y.current.domElement),y.current.dispose())}},[]),Le.useEffect(()=>{const q=C.current;if(!q)return;let ee=1712172,L=1712172,F=r.fogDensity||.02,ie=1.2,k=16775917,de=.8,W=!1,ae=!1;switch(r.weather){case"clear_day":ee=8900331,L=12968950,ie=1.6,k=16774048,de=.9;break;case"golden_hour":ee=16743168,L=16755290,ie=1.4,k=16758531,de=.8;break;case"neon_night":ee=461593,L=1054517,F=.025,ie=.6,k=61695,de=.6;break;case"rain_storm":ee=1976635,L=3359061,F=.038,ie=.7,k=9741240,de=.6,W=!0;break;case"heavy_snow":ee=14412542,L=14870768,F=.03,ie=1.1,k=16777215,de=.85,ae=!0;break;case"mystery_fog":ee=1579035,L=2565930,F=.055,ie=.5,k=10592682,de=.5;break;case"crimson_twilight":ee=4853271,L=8392495,ie=1,k=16731501,de=.7;break}if(q.background=new lt(ee),q.fog=new yp(L,F),P.current&&(P.current.color=new lt(k),P.current.intensity=ie),z.current&&(z.current.color=new lt(r.ambientLightColor||"#ffffff"),z.current.intensity=de),kn.toggleRainAmbient(W),I.current&&(q.remove(I.current),I.current.geometry.dispose(),I.current=null),W||ae){const ge=W?2500:1800,Oe=new mn,Te=new Float32Array(ge*3);for(let Ve=0;Ve<ge;Ve++)Te[Ve*3]=(Math.random()-.5)*80,Te[Ve*3+1]=Math.random()*40,Te[Ve*3+2]=(Math.random()-.5)*80;Oe.setAttribute("position",new Fi(Te,3));const we=new tv({color:W?9684477:16777215,size:W?.22:.35,transparent:!0,opacity:W?.6:.85}),et=new kS(Oe,we);q.add(et),I.current=et}},[r.weather,r.fogDensity,r.ambientLightColor]);const Y=Le.useCallback(()=>{const q=new ks,ee=new Ai(.35,.28,.9,12),L=new ln({color:2450411,roughness:.4}),F=new ct(ee,L);F.position.y=.85,F.castShadow=!0,q.add(F);const ie=new Ta(.32,16,16),k=new ln({color:16765363,roughness:.5}),de=new ct(ie,k);de.position.y=1.5,de.castShadow=!0,q.add(de);const W=new Xn(.68,.25,.65),ae=new ln({color:1976635,roughness:.8}),ge=new ct(W,ae);ge.position.set(0,1.68,-.05),q.add(ge);const Oe=new tl(.38,.05,8,24),Te=new Ti({color:61695}),we=new ct(Oe,Te);we.rotation.x=Math.PI/2,we.position.y=.5,q.add(we);const et=new el(.1,.45,4,8),Ve=new ln({color:1920728}),Re=new ct(et,Ve);Re.position.set(-.48,.85,0),Re.name="leftArm",q.add(Re);const Xe=new ct(et,Ve);Xe.position.set(.48,.85,0),Xe.name="rightArm",q.add(Xe);const Je=new el(.12,.5,4,8),gt=new ln({color:988970}),Ut=new ct(Je,gt);Ut.position.set(-.2,.35,0),Ut.name="leftLeg",q.add(Ut);const bt=new ct(Je,gt);return bt.position.set(.2,.35,0),bt.name="rightLeg",q.add(bt),q},[]),fe=Le.useCallback(q=>{const ee=new ks,L=new Ai(.3,.24,.85,12),F=new ln({color:new lt(q.outfitColor||"#2b2d42"),roughness:.35}),ie=new ct(L,F);ie.position.y=.8,ie.castShadow=!0,ee.add(ie);const k=new Ta(.3,16,16),de=new ln({color:new lt(q.skinTone||"#f5d0b5"),roughness:.5}),W=new ct(k,de);W.position.y=1.42,W.castShadow=!0,ee.add(W);const ae=new ln({color:new lt(q.hairColor||"#1e1b18"),roughness:.6});if(q.hairStyle==="bob"){const Re=new Ta(.35,16,16,0,Math.PI*2,0,Math.PI*.65),Xe=new ct(Re,ae);Xe.position.set(0,1.48,0),ee.add(Xe)}else if(q.hairStyle==="ponytail"){const Re=new Ta(.33,16,16),Xe=new ct(Re,ae);Xe.position.set(0,1.48,0),ee.add(Xe);const Je=new lu(.12,.45,8),gt=new ct(Je,ae);gt.position.set(0,1.4,-.35),gt.rotation.x=-Math.PI/3,ee.add(gt)}else{const Re=new Xn(.65,.35,.65),Xe=new ct(Re,ae);Xe.position.set(0,1.55,0),ee.add(Xe)}const ge=new tl(.32,.04,6,16),Oe=new Ti({color:new lt(q.accentColor||"#d90429")}),Te=new ct(ge,Oe);Te.position.set(0,.95,0),Te.rotation.x=Math.PI/2,ee.add(Te);const we=new cu(.2,.28,16),et=new Ti({color:new lt(q.accentColor||"#00f0ff"),side:Ci}),Ve=new ct(we,et);return Ve.position.set(0,1.9,0),Ve.rotation.x=Math.PI/2,ee.add(Ve),ee},[]);Le.useEffect(()=>{const q=C.current;if(!q)return;O.current&&q.remove(O.current);const ee=Y();ee.position.set(...r.playerSpawn),q.add(ee),O.current=ee,D.current.pos.set(...r.playerSpawn),D.current.vel.set(0,0,0),w.current&&q.remove(w.current);const L=fe(r.companion);L.position.set(r.playerSpawn[0]+1.8,r.playerSpawn[1],r.playerSpawn[2]+1),q.add(L),w.current=L},[r.playerSpawn,r.companion,Y,fe]);const xe=Le.useCallback(q=>{const ee=new ks;ee.name=q.id,ee.position.set(...q.position),ee.rotation.set(...q.rotation);const L=q.color?new lt(q.color):new lt(3900150);switch(q.type){case"platform_stone":case"platform_wood":case"platform_metal":case"platform_neon":{const F=new Xn(q.scale[0],q.scale[1],q.scale[2]),ie=q.type==="platform_neon",k=new ln({color:L,roughness:q.type==="platform_metal"?.2:.7,metalness:q.type==="platform_metal"?.8:.1,emissive:ie?L:new lt(0),emissiveIntensity:ie?.5:0}),de=new ct(F,k);de.castShadow=!0,de.receiveShadow=!0,ee.add(de);const W=new jS(F),ae=new ev(W,new Sp({color:ie?65535:1120295}));ee.add(ae);break}case"moving_platform":{const F=new Xn(q.scale[0],q.scale[1],q.scale[2]),ie=new ln({color:L,metalness:.5,roughness:.3,emissive:new lt(16753920),emissiveIntensity:.25}),k=new ct(F,ie);k.castShadow=!0,k.receiveShadow=!0,ee.add(k);const de=new Ai(.1,.1,q.scale[0]*.7,8),W=new Ti({color:16768256}),ae=new ct(de,W);ae.rotation.z=Math.PI/2,ae.position.y=q.scale[1]/2+.05,ee.add(ae);break}case"bouncy_pad":{const F=new Ai(q.scale[0]*.5,q.scale[0]*.55,q.scale[1],16),ie=new ln({color:3359061,roughness:.5}),k=new ct(F,ie);ee.add(k);const de=new Ai(q.scale[0]*.42,q.scale[0]*.42,.2,16),W=new ln({color:L,emissive:L,emissiveIntensity:.6}),ae=new ct(de,W);ae.position.y=q.scale[1]/2+.1,ee.add(ae);break}case"hazard_spikes":{for(let ie=0;ie<4;ie++){const k=new lu(.25,.8,6),de=new ln({color:14222377,roughness:.3}),W=new ct(k,de),ae=(ie-1.5)*.4;W.position.set(ae,.4,0),W.castShadow=!0,ee.add(W)}break}case"hazard_laser":{const F=new Xn(.3,.3,.3),ie=new ln({color:1120295}),k=new ct(F,ie);k.position.set(-q.scale[0]/2,0,0);const de=new ct(F,ie);de.position.set(q.scale[0]/2,0,0),ee.add(k),ee.add(de);const W=new Ai(.06,.06,q.scale[0],8),ae=new Ti({color:16711765,transparent:!0,opacity:.85}),ge=new ct(W,ae);ge.rotation.z=Math.PI/2,ee.add(ge);break}case"coin_collectible":{const F=new Ai(.35,.35,.08,16),ie=new ln({color:16765286,metalness:.9,roughness:.2,emissive:16758531,emissiveIntensity:.4}),k=new ct(F,ie);k.rotation.x=Math.PI/2,ee.add(k);break}case"gem_rare":{const F=new Tp(.45,0),ie=new ln({color:61695,metalness:.2,roughness:.1,emissive:61695,emissiveIntensity:.7}),k=new ct(F,ie);ee.add(k);break}case"clue_document":case"clue_fingerprint":case"clue_weapon_drop":case"keycard":{const F=new Xn(.4,.5,.08),ie=new ln({color:L,emissive:L,emissiveIntensity:.6}),k=new ct(F,ie);ee.add(k);const de=new cu(.4,.5,16),W=new Ti({color:16768256,side:Ci,transparent:!0,opacity:.6}),ae=new ct(de,W);ae.position.y=.5,ee.add(ae);break}case"enemy_guard":case"enemy_drone":{const F=q.type==="enemy_drone",ie=F?new Ta(.5,12,12):new el(.35,.9,4,8),k=new ln({color:L,roughness:.4,emissive:new lt(15680580),emissiveIntensity:.3}),de=new ct(ie,k);de.castShadow=!0,ee.add(de);const W=new Ta(.12,8,8),ae=new Ti({color:16711680}),ge=new ct(W,ae);ge.position.set(0,F?0:.5,.35),ee.add(ge);break}case"chest_loot":{const F=new Xn(.8,.6,.6),ie=new ln({color:11817737,roughness:.6}),k=new ct(F,ie);ee.add(k);const de=new Xn(.82,.1,.62),W=new ln({color:16096779,metalness:.8}),ae=new ct(de,W);ee.add(ae);break}case"portal_exit":{const F=new tl(1,.15,16,32),ie=new ln({color:L,emissive:L,emissiveIntensity:.9}),k=new ct(F,ie);ee.add(k);const de=new Mp(.9,24),W=new Ti({color:62932,transparent:!0,opacity:.65,side:Ci}),ae=new ct(de,W);ee.add(ae);break}case"street_lamp":case"torch_light":{const F=new Ai(.08,.1,q.scale[1],8),ie=new ln({color:2042167}),k=new ct(F,ie);k.position.y=q.scale[1]/2,ee.add(k);const de=new Ta(.25,12,12),W=new Ti({color:L}),ae=new ct(de,W);ae.position.y=q.scale[1],ee.add(ae);const ge=new eM(L,1.5,10);ge.position.y=q.scale[1],ee.add(ge);break}default:{const F=new Xn(q.scale[0],q.scale[1],q.scale[2]),ie=new ln({color:L}),k=new ct(F,ie);ee.add(k);break}}return ee},[]);Le.useEffect(()=>{const q=C.current;if(!q)return;const ee=new Set(r.objects.map(L=>L.id));U.current.forEach((L,F)=>{ee.has(F)||(q.remove(L),U.current.delete(F))}),r.objects.forEach(L=>{let F=U.current.get(L.id);F?(F.position.set(...L.position),F.rotation.set(...L.rotation)):(F=xe(L),q.add(F),U.current.set(L.id,F));const ie=e==="build"&&i===L.id;let k=F.getObjectByName("selectionOutline");if(ie&&!k){const de=new Yr().setFromObject(F),W=new Q;de.getSize(W);const ae=new Xn(W.x*1.05,W.y*1.05,W.z*1.05),ge=new Ti({color:3718648,wireframe:!0});k=new ct(ae,ge),k.name="selectionOutline",F.add(k)}else!ie&&k&&F.remove(k)})},[r.objects,e,i,xe]),Le.useEffect(()=>{E.current&&(E.current.visible=e==="build")},[e]),Le.useEffect(()=>{let q,ee=new oM;const L=()=>{q=requestAnimationFrame(L);const F=Math.min(ee.getDelta(),.1),ie=ee.getElapsedTime();if(I.current){const k=I.current.geometry.attributes.position.array,de=k.length/3,W=r.weather==="rain_storm";for(let ae=0;ae<de;ae++)k[ae*3+1]-=(W?25:8)*F,k[ae*3+1]<0&&(k[ae*3+1]=35);I.current.geometry.attributes.position.needsUpdate=!0}if(r.objects.forEach(k=>{const de=U.current.get(k.id);if(de){if(k.isMoving&&k.moveAxis&&k.moveDistance){const W=k.moveSpeed||2,ae=Math.sin(ie*W)*(k.moveDistance/2),ge=k.position;k.moveAxis==="x"&&(de.position.x=ge[0]+ae),k.moveAxis==="y"&&(de.position.y=ge[1]+ae),k.moveAxis==="z"&&(de.position.z=ge[2]+ae)}if((k.type==="coin_collectible"||k.type==="gem_rare"||k.type==="clue_document"||k.type==="keycard"||k.type==="clue_weapon_drop")&&(de.rotation.y+=1.8*F,de.position.y=k.position[1]+Math.sin(ie*3+Number(k.id.charCodeAt(0)||0))*.15),k.type==="hazard_laser"){const W=(Math.sin(ie*6)+1)*.5,ae=de.children.find(ge=>ge instanceof ct&&ge.geometry instanceof Ai);ae&&ae instanceof ct&&(ae.material.opacity=.4+W*.5)}}}),e==="play"){const k=D.current,de=O.current,W=w.current;let ae=0,ge=0;(H.current.KeyA||H.current.ArrowLeft)&&(ae-=1),(H.current.KeyD||H.current.ArrowRight)&&(ae+=1),(H.current.KeyW||H.current.ArrowUp)&&(ge-=1),(H.current.KeyS||H.current.ArrowDown)&&(ge+=1),ae+=x.moveX,ge+=x.moveZ;const Oe=Math.abs(ae)>.05||Math.abs(ge)>.05,we=H.current.ShiftLeft||H.current.ShiftRight||x.isDashing?12:6.5;if(Oe){const Re=Math.atan2(ae,ge);k.rotationY=Re,k.vel.x=Math.sin(Re)*we,k.vel.z=Math.cos(Re)*we}else k.vel.x=0,k.vel.z=0;(H.current.Space||x.isJumping)&&k.isGrounded&&(k.vel.y=11,k.isGrounded=!1,kn.playJump());const Ve=r.gravity||24;if(k.vel.y-=Ve*F,k.pos.x+=k.vel.x*F,k.pos.y+=k.vel.y*F,k.pos.z+=k.vel.z*F,k.isGrounded=!1,r.objects.forEach(Re=>{const Xe=U.current.get(Re.id),Je=Xe?Xe.position:new Q(...Re.position),gt=Re.scale[0]/2,Ut=Re.scale[1]/2,bt=Re.scale[2]/2;if(Re.category==="platforms"||Re.type.startsWith("platform")||Re.type==="moving_platform"||Re.type==="bouncy_pad"){const nn=k.pos.x>=Je.x-gt&&k.pos.x<=Je.x+gt,J=k.pos.z>=Je.z-bt&&k.pos.z<=Je.z+bt;if(nn&&J){const Lt=Je.y+Ut;k.pos.y>=Lt-.5&&k.pos.y<=Lt+.8&&k.vel.y<=0&&(k.pos.y=Lt,k.vel.y=0,k.isGrounded=!0,Re.type==="bouncy_pad"&&(k.vel.y=18,k.isGrounded=!1,kn.playJump()))}}const Ft=k.pos.distanceTo(Je);Ft<1.5&&!k.collectedItems.has(Re.id)&&(Re.type==="coin_collectible"||Re.type==="gem_rare"?(k.collectedItems.add(Re.id),kn.playCoin(),d(1),Xe&&(Xe.visible=!1)):Re.type==="clue_document"||Re.type==="clue_fingerprint"||Re.type==="clue_weapon_drop"||Re.type==="keycard"?(k.collectedItems.add(Re.id),kn.playClueFound(),c(Re.mysteryClueTitle||Re.name,Re.mysteryClueDescription||"A critical piece of evidence has been recorded in your dossier."),Xe&&(Xe.visible=!1)):Re.type==="portal_exit"&&(kn.playVictory(),p())),Re.category==="hazards"&&Ft<1.2&&(_(15*F),kn.playHit()),k.isAttacking&&(Re.type==="enemy_guard"||Re.type==="enemy_drone")&&Ft<2&&Re.hp&&Re.hp>0&&(Re.hp-=35*F,kn.playHit(),Xe&&(Xe.position.x+=(Math.random()-.5)*.1),Re.hp<=0&&(kn.playCoin(),m(Re.id),Xe&&(Xe.visible=!1)))}),k.pos.y<-15&&(h(),k.pos.set(...r.playerSpawn),k.vel.set(0,0,0)),de){de.position.copy(k.pos),de.rotation.y=k.rotationY,k.attackTimer>0&&(k.attackTimer-=F,k.attackTimer<=0&&(k.isAttacking=!1));const Re=H.current.KeyC||x.isCrouching;de.scale.y=Re?.6:1;const Xe=de.getObjectByName("leftArm"),Je=de.getObjectByName("rightArm"),gt=de.getObjectByName("leftLeg"),Ut=de.getObjectByName("rightLeg");if(Oe){const bt=Math.sin(ie*12)*.6;Xe&&(Xe.rotation.x=bt),Je&&(Je.rotation.x=-bt),gt&&(gt.rotation.x=-bt),Ut&&(Ut.rotation.x=bt)}else if(k.isAttacking)Je&&(Je.rotation.x=-Math.PI/2),Xe&&(Xe.rotation.x=Math.PI/4);else{const bt=Math.sin(ie*2.5)*.05;Xe&&(Xe.rotation.x=bt),Je&&(Je.rotation.x=-bt),gt&&(gt.rotation.x=0),Ut&&(Ut.rotation.x=0)}}if(W&&de){const Re=new Q(k.pos.x+Math.sin(k.rotationY+Math.PI*.75)*1.8,k.pos.y,k.pos.z+Math.cos(k.rotationY+Math.PI*.75)*1.8);W.position.lerp(Re,.08),W.lookAt(k.pos.x,W.position.y,k.pos.z)}if(S.current){const Re=new Q(0,4.5,9);Re.applyAxisAngle(new Q(0,1,0),k.rotationY*.3);const Xe=k.pos.clone().add(Re);S.current.position.lerp(Xe,.1),S.current.lookAt(k.pos.x,k.pos.y+1.2,k.pos.z)}}else{const k=V.current;if(S.current){const de=k.target.x+k.distance*Math.sin(k.phi)*Math.sin(k.theta),W=k.target.y+k.distance*Math.cos(k.phi),ae=k.target.z+k.distance*Math.sin(k.phi)*Math.cos(k.theta);S.current.position.set(de,W,ae),S.current.lookAt(k.target)}}y.current&&C.current&&S.current&&y.current.render(C.current,S.current)};return q=requestAnimationFrame(L),()=>cancelAnimationFrame(q)},[e,r,d,c,m,h,p,_,x]);const te=q=>{if(e==="play")return;const ee=V.current;if(ee.isDragging=!0,ee.dragButton=q.button,ee.lastMouseX=q.clientX,ee.lastMouseY=q.clientY,A.current&&S.current&&C.current&&q.button===0){const L=A.current.getBoundingClientRect(),F=new _t((q.clientX-L.left)/L.width*2-1,-((q.clientY-L.top)/L.height)*2+1),ie=new rM;ie.setFromCamera(F,S.current);const k=[];U.current.forEach(W=>k.push(...W.children));const de=ie.intersectObjects(k,!1);if(de.length>0){let W=de[0].object;for(;W&&!U.current.has(W.name)&&W.parent;)W=W.parent;if(W&&U.current.has(W.name)){s(W.name);return}}s(null)}},G=q=>{if(e==="play")return;const ee=V.current;if(!ee.isDragging)return;const L=q.clientX-ee.lastMouseX,F=q.clientY-ee.lastMouseY;if(ee.lastMouseX=q.clientX,ee.lastMouseY=q.clientY,ee.dragButton===0)ee.theta-=L*.008,ee.phi=Math.max(.1,Math.min(Math.PI/2-.05,ee.phi-F*.008));else if(ee.dragButton===2){const ie=.03*(ee.distance/20);ee.target.x-=L*ie,ee.target.z+=F*ie}},X=()=>{V.current.isDragging=!1},re=q=>{if(e==="play")return;const ee=V.current;ee.distance=Math.max(5,Math.min(80,ee.distance+q.deltaY*.03))};return g.jsx("div",{ref:A,id:"three-viewport-container",className:"relative w-full h-full select-none overflow-hidden touch-none",onPointerDown:te,onPointerMove:G,onPointerUp:X,onWheel:re,onContextMenu:q=>q.preventDefault(),children:M&&g.jsxs("div",{className:"absolute top-4 left-1/2 transform -translate-x-1/2 max-w-md bg-slate-900/90 text-amber-300 border border-amber-500/40 px-4 py-2.5 rounded-xl shadow-xl backdrop-blur-md flex items-center space-x-3 pointer-events-none z-20 transition-all animate-in fade-in slide-in-from-top-2",children:[g.jsx("div",{className:"w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center font-bold text-xs text-amber-300",children:r.companion.name.charAt(0)}),g.jsxs("div",{children:[g.jsxs("div",{className:"text-[11px] uppercase tracking-wider text-slate-400 font-semibold",children:[r.companion.name," (",r.companion.title,")"]}),g.jsx("p",{className:"text-sm font-medium text-slate-100",children:M})]})]})})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o2=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),C_=r=>{const e=o2(r);return e.charAt(0).toUpperCase()+e.slice(1)},mv=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),l2=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=Le.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...m},p)=>Le.createElement("svg",{ref:p,...c2,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:mv("lucide",l),...!c&&!l2(m)&&{"aria-hidden":"true"},...m},[...d.map(([h,v])=>Le.createElement(h,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=(r,e)=>{const i=Le.forwardRef(({className:s,...l},c)=>Le.createElement(u2,{ref:c,iconNode:e,className:mv(`lucide-${r2(C_(r))}`,`lucide-${r}`,s),...l}));return i.displayName=C_(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],d2=yt("arrow-up",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],R_=yt("award",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],m2=yt("box",p2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],gv=yt("check",g2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],_2=yt("chevron-down",x2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],y2=yt("chevron-right",v2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],nl=yt("circle-check",b2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 17H7",key:"pygtm1"}],["path",{d:"M17 21H9",key:"1u2q02"}]],M2=yt("cloud-fog",S2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]],N_=yt("cloud-rain",E2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],uu=yt("copy",T2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],ap=yt("download",A2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],C2=yt("file-text",w2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],N2=yt("folder-open",R2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],U2=yt("git-branch",D2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]],xv=yt("git-fork",L2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],_v=yt("heart",O2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],I2=yt("message-square",P2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],D_=yt("moon",z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],vv=yt("play",B2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],sp=yt("plus",F2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],yv=yt("rotate-ccw",G2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],V2=yt("search",H2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],fu=yt("shield",k2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],$o=yt("smartphone",X2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],du=yt("sparkles",j2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],q2=yt("square",W2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],U_=yt("sun",Y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"m11 19-6-6",key:"s7kpr"}],["path",{d:"m5 21-2-2",key:"1kw20b"}],["path",{d:"m8 16-4 4",key:"1oqv8h"}],["path",{d:"M9.5 17.5 21 6V3h-3L6.5 14.5",key:"pkxemp"}]],K2=yt("sword",Z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],J2=yt("terminal",Q2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],rp=yt("trash-2",$2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],tw=yt("triangle-alert",ew);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],iw=yt("user",nw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],bv=yt("users",aw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],rw=yt("volume-2",sw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],lw=yt("volume-x",ow);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],uw=yt("wifi",cw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Sv=yt("x",fw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Mv=yt("zap",dw),hw=({mode:r,onToggleMode:e,level:i,onUpdateLevel:s,onAddObject:l,onOpenCompanionCustomizer:c,onOpenStoryEditor:d,onOpenMultiplayer:m,onResetLevel:p,isMuted:h,onToggleMute:v,onExport:_,onImport:x,onOpenMobileAppModal:M})=>{const A=[{id:"rain_storm",label:"Rain Storm",icon:N_},{id:"neon_night",label:"Neon Cyber Night",icon:D_},{id:"mystery_fog",label:"Eerie Mystery Fog",icon:M2},{id:"clear_day",label:"Sunny Day",icon:U_},{id:"golden_hour",label:"Golden Hour",icon:U_},{id:"heavy_snow",label:"Heavy Snow",icon:N_},{id:"crimson_twilight",label:"Crimson Twilight",icon:D_}];return g.jsxs("header",{className:"h-14 bg-slate-900/95 border-b border-slate-800 px-4 flex items-center justify-between text-slate-200 z-40 backdrop-blur-md",children:[g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-black text-white shadow-lg text-sm",children:"3D"}),g.jsx("div",{className:"hidden sm:block",children:g.jsxs("h1",{className:"text-sm font-bold text-slate-100 flex items-center space-x-2",children:[g.jsx("span",{children:"OmniCraft Studio"}),g.jsx("span",{className:"text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",children:i.genre.replace("_"," ")})]})}),g.jsx("button",{onClick:e,className:`flex items-center space-x-2 px-4 py-1.5 rounded-xl font-bold text-xs shadow-lg transition-all ${r==="play"?"bg-rose-600 hover:bg-rose-500 text-white animate-pulse":"bg-emerald-600 hover:bg-emerald-500 text-white"}`,children:r==="play"?g.jsxs(g.Fragment,{children:[g.jsx(q2,{className:"w-3.5 h-3.5 fill-white"}),g.jsx("span",{children:"EXIT PLAY"})]}):g.jsxs(g.Fragment,{children:[g.jsx(vv,{className:"w-3.5 h-3.5 fill-white"}),g.jsx("span",{children:"TEST PLAY"})]})})]}),g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx("div",{className:"hidden md:flex items-center space-x-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800",children:A.slice(0,4).map(C=>{const S=C.icon,y=i.weather===C.id;return g.jsxs("button",{onClick:()=>s({weather:C.id}),title:C.label,className:`px-2.5 py-1 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition-all ${y?"bg-cyan-600/30 text-cyan-300 border border-cyan-500/40":"text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:[g.jsx(S,{className:"w-3.5 h-3.5"}),g.jsx("span",{className:"hidden lg:inline",children:C.label})]},C.id)})}),g.jsxs("button",{onClick:c,className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 transition-all shadow",children:[g.jsx(du,{className:"w-3.5 h-3.5 text-cyan-400"}),g.jsxs("span",{className:"hidden sm:inline",children:["Companion (",i.companion.name.split(" ")[0],")"]})]}),g.jsxs("button",{onClick:d,className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 transition-all shadow",children:[g.jsx(xv,{className:"w-3.5 h-3.5 text-rose-400"}),g.jsx("span",{className:"hidden sm:inline",children:"Narrative Tree"})]}),g.jsxs("button",{onClick:m,className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-emerald-300 transition-all shadow",children:[g.jsx(bv,{className:"w-3.5 h-3.5 text-emerald-400"}),g.jsx("span",{className:"hidden sm:inline",children:"Co-op Mission"})]})]}),g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx("button",{onClick:v,title:h?"Unmute Audio":"Mute Audio",className:"p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-all",children:h?g.jsx(lw,{className:"w-4 h-4 text-rose-400"}):g.jsx(rw,{className:"w-4 h-4 text-cyan-400"})}),g.jsx("button",{onClick:p,title:"Reset Player & Stage",className:"p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-all",children:g.jsx(yv,{className:"w-4 h-4"})}),g.jsx("button",{onClick:_,title:"Export Game Project JSON",className:"p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-all",children:g.jsx(ap,{className:"w-4 h-4"})}),g.jsxs("button",{onClick:M,className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg transition-all hover:scale-105",title:"Build & Install APK on Android Phone",children:[g.jsx($o,{className:"w-3.5 h-3.5"}),g.jsx("span",{className:"hidden sm:inline",children:"Get APK / Phone"})]})]})]})},pw=[{type:"platform_stone",name:"Stone Platform",category:"platforms",color:"#3b82f6",desc:"Solid terrain block"},{type:"platform_neon",name:"Neon Cyber Deck",category:"platforms",color:"#00f0ff",desc:"Glowing sci-fi platform"},{type:"platform_metal",name:"Metal Scaffold",category:"platforms",color:"#64748b",desc:"Industrial steel bridge"},{type:"moving_platform",name:"Moving Platform",category:"platforms",color:"#f59e0b",desc:"Oscillating hover pad"},{type:"bouncy_pad",name:"Bouncy Trampoline",category:"platforms",color:"#ec4899",desc:"Launches player skyward"},{type:"hazard_spikes",name:"Spike Hazard",category:"hazards",color:"#ef4444",desc:"Causes damage on touch"},{type:"hazard_laser",name:"Laser Tripwire",category:"hazards",color:"#dc2626",desc:"Pulsing security beam"},{type:"clue_document",name:"Burned Ledger Clue",category:"mystery",color:"#fbbf24",desc:"Crime investigation document"},{type:"keycard",name:"Cipher Keycard",category:"mystery",color:"#10b981",desc:"Opens restricted doors"},{type:"clue_weapon_drop",name:"Discarded Weapon",category:"mystery",color:"#f97316",desc:"Ballistics forensics clue"},{type:"coin_collectible",name:"Gold Coin",category:"items",color:"#eab308",desc:"Score collectible"},{type:"gem_rare",name:"Rare Energy Gem",category:"items",color:"#06b6d4",desc:"High-value power core"},{type:"chest_loot",name:"Treasure Chest",category:"items",color:"#d97706",desc:"Secret cache"},{type:"portal_exit",name:"Extraction Portal",category:"items",color:"#14b8a6",desc:"Mission completion goal"},{type:"enemy_guard",name:"Syndicate Guard",category:"characters",color:"#8b5cf6",desc:"Combat patrol enforcer"},{type:"enemy_drone",name:"Security Drone",category:"characters",color:"#f43f5e",desc:"Hovering surveillance bot"},{type:"street_lamp",name:"Street Lamp Amber",category:"lights",color:"#f59e0b",desc:"Point light source"}],mw=({selectedObject:r,onUpdateObject:e,onDeleteObject:i,onDuplicateObject:s,onAddObject:l})=>{const[c,d]=Le.useState("all"),m=pw.filter(p=>c==="all"||p.category===c);return g.jsxs("aside",{className:"w-80 bg-slate-900/95 border-l border-slate-800 flex flex-col h-[calc(100vh-3.5rem)] text-slate-200 z-30 overflow-hidden select-none backdrop-blur-md",children:[g.jsxs("div",{className:"p-4 border-b border-slate-800 bg-slate-950/40",children:[g.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-1",children:r?"Object Properties":"Drag & Place 3D Catalog"}),g.jsx("p",{className:"text-[11px] text-slate-500",children:r?"Modify position, movement, and mystery parameters":"Click to spawn elements anywhere in your 3D level"})]}),r?g.jsxs("div",{className:"p-4 overflow-y-auto space-y-4 flex-1 text-xs",children:[g.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-800",children:[g.jsxs("div",{children:[g.jsx("span",{className:"font-bold text-white text-sm block",children:r.name}),g.jsx("span",{className:"text-[10px] font-mono text-cyan-400 uppercase",children:r.type})]}),g.jsxs("div",{className:"flex items-center space-x-1",children:[g.jsx("button",{onClick:()=>s(r),title:"Duplicate Object",className:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300",children:g.jsx(uu,{className:"w-3.5 h-3.5"})}),g.jsx("button",{onClick:()=>i(r.id),title:"Delete Object",className:"p-1.5 rounded-lg bg-rose-900/30 hover:bg-rose-900/60 text-rose-400",children:g.jsx(rp,{className:"w-3.5 h-3.5"})})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[11px] font-semibold text-slate-400 uppercase mb-1.5",children:"Position (X, Y, Z)"}),g.jsx("div",{className:"grid grid-cols-3 gap-2",children:["X","Y","Z"].map((p,h)=>g.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-lg px-2 py-1 flex items-center",children:[g.jsx("span",{className:"text-slate-500 font-bold mr-1.5 text-[10px]",children:p}),g.jsx("input",{type:"number",step:"0.5",value:Math.round(r.position[h]*10)/10,onChange:v=>{const _=[...r.position];_[h]=parseFloat(v.target.value)||0,e({...r,position:_})},className:"w-full bg-transparent text-white focus:outline-none text-right font-mono"})]},p))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[11px] font-semibold text-slate-400 uppercase mb-1.5",children:"Dimensions (W, H, D)"}),g.jsx("div",{className:"grid grid-cols-3 gap-2",children:["W","H","D"].map((p,h)=>g.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-lg px-2 py-1 flex items-center",children:[g.jsx("span",{className:"text-slate-500 font-bold mr-1.5 text-[10px]",children:p}),g.jsx("input",{type:"number",step:"0.5",min:"0.2",value:Math.round(r.scale[h]*10)/10,onChange:v=>{const _=[...r.scale];_[h]=Math.max(.2,parseFloat(v.target.value)||1),e({...r,scale:_})},className:"w-full bg-transparent text-white focus:outline-none text-right font-mono"})]},p))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[11px] font-semibold text-slate-400 uppercase mb-1.5",children:"Material Tint"}),g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx("input",{type:"color",value:r.color||"#3b82f6",onChange:p=>e({...r,color:p.target.value}),className:"w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"}),g.jsx("span",{className:"font-mono text-slate-300",children:r.color||"#3b82f6"})]})]}),r.type==="moving_platform"&&g.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5",children:[g.jsx("span",{className:"font-bold text-amber-400 text-xs block",children:"Oscillation Mechanics"}),g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("span",{className:"text-slate-400",children:"Movement Axis:"}),g.jsxs("select",{value:r.moveAxis||"x",onChange:p=>e({...r,moveAxis:p.target.value,isMoving:!0}),className:"bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-200",children:[g.jsx("option",{value:"x",children:"X (Horizontal)"}),g.jsx("option",{value:"y",children:"Y (Elevator)"}),g.jsx("option",{value:"z",children:"Z (Forward/Back)"})]})]}),g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("span",{className:"text-slate-400",children:"Distance:"}),g.jsx("input",{type:"number",min:"1",max:"20",value:r.moveDistance||5,onChange:p=>e({...r,moveDistance:parseFloat(p.target.value)||5,isMoving:!0}),className:"w-16 bg-slate-900 border border-slate-700 rounded px-2 py-0.5 text-right"})]})]}),(r.category==="mystery"||r.type.startsWith("clue"))&&g.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[g.jsx("span",{className:"font-bold text-amber-400 text-xs block",children:"Crime & Forensics Metadata"}),g.jsxs("div",{children:[g.jsx("span",{className:"text-[10px] text-slate-400 block mb-0.5",children:"Clue Title"}),g.jsx("input",{type:"text",value:r.mysteryClueTitle||"",onChange:p=>e({...r,mysteryClueTitle:p.target.value}),placeholder:"e.g. Scratched Ballistics Casing",className:"w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-200"})]}),g.jsxs("div",{children:[g.jsx("span",{className:"text-[10px] text-slate-400 block mb-0.5",children:"Forensic Findings"}),g.jsx("textarea",{rows:2,value:r.mysteryClueDescription||"",onChange:p=>e({...r,mysteryClueDescription:p.target.value}),placeholder:"Describes what the detective discovers...",className:"w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200"})]})]})]}):g.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[g.jsx("div",{className:"p-3 border-b border-slate-800 flex flex-wrap gap-1.5 bg-slate-950/20",children:["all","platforms","hazards","mystery","items","characters","lights"].map(p=>g.jsx("button",{onClick:()=>d(p),className:`px-2 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider transition-all ${c===p?"bg-cyan-600 text-white shadow":"bg-slate-800/80 text-slate-400 hover:text-white"}`,children:p},p))}),g.jsx("div",{className:"p-3 overflow-y-auto space-y-2 flex-1",children:m.map(p=>g.jsxs("div",{onClick:()=>l(p.type),className:"p-2.5 rounded-xl border border-slate-800 bg-slate-850 hover:bg-slate-800 hover:border-cyan-500/50 cursor-pointer flex items-center justify-between group transition-all",children:[g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx("div",{className:"w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-inner font-bold text-xs",style:{backgroundColor:p.color},children:g.jsx(m2,{className:"w-4 h-4"})}),g.jsxs("div",{children:[g.jsx("span",{className:"font-semibold text-xs text-white group-hover:text-cyan-300 transition-colors block",children:p.name}),g.jsx("span",{className:"text-[10px] text-slate-400",children:p.desc})]})]}),g.jsx(y2,{className:"w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors"})]},p.type))})]})]})},gw=({onInputChange:r,onAttackPress:e,onJumpPress:i,onInteractPress:s})=>{const[l,c]=Le.useState({x:0,y:0}),[d,m]=Le.useState(!1),[p,h]=Le.useState(!1),[v,_]=Le.useState(!1),[x,M]=Le.useState(!1),[A,C]=Le.useState(!1),[S,y]=Le.useState(!1),U=Le.useRef(null),O=Le.useRef(null),w=Le.useCallback((E,D,V,H,Y,fe,xe)=>{r({moveX:E,moveZ:-D,isJumping:V,isAttacking:H,isDashing:Y,isCrouching:fe,isGripping:xe,isInteracting:!1})},[r]),I=E=>{if(O.current!==null)return;const D=E.changedTouches[0];O.current=D.identifier,m(!0),P(E)},P=E=>{if(!(!U.current||O.current===null))for(let D=0;D<E.changedTouches.length;D++){const V=E.changedTouches[D];if(V.identifier===O.current){const H=U.current.getBoundingClientRect(),Y=H.left+H.width/2,fe=H.top+H.height/2,xe=H.width/2;let te=V.clientX-Y,G=V.clientY-fe;const X=Math.hypot(te,G);X>xe&&(te=te/X*xe,G=G/X*xe);const re=te/xe,q=-G/xe;c({x:te,y:G}),w(re,q,p,v,x,A,S);break}}},z=E=>{for(let D=0;D<E.changedTouches.length;D++)if(E.changedTouches[D].identifier===O.current){O.current=null,m(!1),c({x:0,y:0}),w(0,0,p,v,x,A,S);break}};return g.jsxs("div",{className:"absolute inset-0 pointer-events-none z-30 select-none",children:[g.jsx("div",{className:"absolute bottom-8 left-8 pointer-events-auto",children:g.jsx("div",{ref:U,id:"virtual-joystick-base",onTouchStart:I,onTouchMove:P,onTouchEnd:z,onTouchCancel:z,className:"w-32 h-32 rounded-full bg-slate-900/50 border-2 border-slate-700/60 backdrop-blur-md relative flex items-center justify-center shadow-2xl active:border-cyan-500/80",children:g.jsx("div",{className:"w-14 h-14 rounded-full bg-cyan-500/80 border border-cyan-300/80 shadow-lg pointer-events-none transition-transform duration-75",style:{transform:`translate(${l.x}px, ${l.y}px)`},children:g.jsx("div",{className:"w-full h-full rounded-full flex items-center justify-center",children:g.jsx("div",{className:"w-4 h-4 rounded-full bg-white/70"})})})})}),g.jsxs("div",{className:"absolute bottom-8 right-8 pointer-events-auto flex flex-col items-end space-y-3",children:[g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx("button",{id:"touch-crouch-btn",onTouchStart:()=>{C(!0),w(l.x,l.y,p,v,x,!0,S)},onTouchEnd:()=>{C(!1),w(l.x,l.y,p,v,x,!1,S)},className:`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs shadow-lg backdrop-blur-md transition-all ${A?"bg-amber-500 text-black scale-95":"bg-slate-800/80 text-amber-300 border border-amber-500/40"}`,children:g.jsx(_2,{className:"w-5 h-5"})}),g.jsx("button",{id:"touch-grip-btn",onTouchStart:()=>{y(!0),w(l.x,l.y,p,v,x,A,!0)},onTouchEnd:()=>{y(!1),w(l.x,l.y,p,v,x,A,!1)},className:`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs shadow-lg backdrop-blur-md transition-all ${S?"bg-emerald-500 text-black scale-95":"bg-slate-800/80 text-emerald-300 border border-emerald-500/40"}`,children:g.jsx(fu,{className:"w-5 h-5"})}),g.jsx("button",{id:"touch-dash-btn",onTouchStart:()=>{M(!0),w(l.x,l.y,p,v,!0,A,S)},onTouchEnd:()=>{M(!1),w(l.x,l.y,p,v,!1,A,S)},className:`w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm shadow-xl backdrop-blur-md transition-all ${x?"bg-purple-500 text-white scale-95":"bg-slate-800/80 text-purple-300 border border-purple-500/40"}`,children:g.jsx(Mv,{className:"w-6 h-6"})})]}),g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx("button",{id:"touch-attack-btn",onTouchStart:()=>{_(!0),e(),w(l.x,l.y,p,!0,x,A,S)},onTouchEnd:()=>{_(!1),w(l.x,l.y,p,!1,x,A,S)},className:"w-16 h-16 rounded-full bg-rose-600/90 text-white font-black text-sm flex items-center justify-center border border-rose-400 shadow-2xl active:scale-90 active:bg-rose-500 transition-all",children:"STRIKE"}),g.jsx("button",{id:"touch-jump-btn",onTouchStart:()=>{h(!0),i(),w(l.x,l.y,!0,v,x,A,S)},onTouchEnd:()=>{h(!1),w(l.x,l.y,!1,v,x,A,S)},className:"w-18 h-18 rounded-full bg-cyan-600/90 text-white font-black text-base flex items-center justify-center border-2 border-cyan-300 shadow-2xl active:scale-90 active:bg-cyan-500 transition-all",children:g.jsx(d2,{className:"w-8 h-8"})})]})]})]})},xw=({level:r,playerHp:e,maxHp:i,coinsCount:s,clues:l,isGameOver:c,isVictory:d,onRestart:m,onExitPlay:p})=>{const[h,v]=Le.useState(!1),_=Math.max(0,Math.min(100,e/i*100));return g.jsxs("div",{className:"absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-4 select-none",children:[g.jsxs("div",{className:"flex items-start justify-between",children:[g.jsxs("div",{className:"bg-slate-900/85 backdrop-blur-md border border-slate-700/70 rounded-2xl p-3.5 shadow-2xl pointer-events-auto min-w-[240px]",children:[g.jsxs("div",{className:"flex items-center justify-between mb-2",children:[g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx(_v,{className:`w-4 h-4 ${_<30?"text-rose-500 animate-ping":"text-rose-400"}`}),g.jsx("span",{className:"text-xs font-bold text-slate-200",children:"OPERATIVE HEALTH"})]}),g.jsxs("span",{className:"text-xs font-mono font-bold text-slate-300",children:[Math.round(e)," / ",i]})]}),g.jsx("div",{className:"w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800",children:g.jsx("div",{className:`h-full transition-all duration-300 ${_>50?"bg-gradient-to-r from-emerald-500 to-cyan-500":_>25?"bg-amber-500":"bg-rose-600"}`,style:{width:`${_}%`}})}),g.jsxs("div",{className:"mt-3 flex items-center justify-between pt-2 border-t border-slate-800 text-xs",children:[g.jsxs("div",{className:"flex items-center space-x-1.5 text-amber-400 font-bold",children:[g.jsx(R_,{className:"w-3.5 h-3.5"}),g.jsxs("span",{children:[s," Coins"]})]}),g.jsxs("button",{onClick:()=>v(!0),className:"flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 text-cyan-300 font-semibold text-[11px] transition-all",children:[g.jsx(V2,{className:"w-3 h-3"}),g.jsxs("span",{children:["Dossier (",l.length,")"]})]})]})]}),g.jsxs("div",{className:"bg-slate-900/85 backdrop-blur-md border border-slate-700/70 rounded-2xl px-5 py-2.5 shadow-2xl max-w-md text-center hidden md:block",children:[g.jsx("span",{className:"text-[10px] uppercase font-bold text-amber-400 tracking-wider block",children:"Active Mission Goal"}),g.jsx("p",{className:"text-xs text-slate-200 font-medium",children:r.targetObjective})]}),g.jsx("button",{onClick:p,className:"pointer-events-auto bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white px-3 py-1.5 rounded-xl text-xs font-semibold shadow-lg backdrop-blur-md transition-all",children:"Exit Play"})]}),g.jsxs("div",{className:"self-center bg-slate-950/70 border border-slate-800/80 px-4 py-1.5 rounded-full text-[11px] text-slate-400 hidden sm:flex items-center space-x-4 backdrop-blur-md",children:[g.jsxs("span",{children:[g.jsx("strong",{className:"text-cyan-300",children:"WASD:"})," Move"]}),g.jsxs("span",{children:[g.jsx("strong",{className:"text-cyan-300",children:"Space:"})," Jump"]}),g.jsxs("span",{children:[g.jsx("strong",{className:"text-cyan-300",children:"Shift:"})," Dash"]}),g.jsxs("span",{children:[g.jsx("strong",{className:"text-cyan-300",children:"F:"})," Combat Strike"]}),g.jsxs("span",{children:[g.jsx("strong",{className:"text-cyan-300",children:"C:"})," Crouch/Squeeze"]})]}),h&&g.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 pointer-events-auto",children:g.jsxs("div",{className:"bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-md p-6 shadow-2xl text-slate-200",children:[g.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4",children:[g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx(C2,{className:"w-5 h-5 text-amber-400"}),g.jsx("h3",{className:"font-bold text-white text-base",children:"Forensics Evidence Dossier"})]}),g.jsx("button",{onClick:()=>v(!1),className:"text-slate-400 hover:text-white",children:g.jsx(Sv,{className:"w-4 h-4"})})]}),l.length===0?g.jsx("p",{className:"text-xs text-slate-400 italic py-6 text-center",children:"No clues discovered yet. Explore the platforms and investigate glowing evidence markers!"}):g.jsx("div",{className:"space-y-3 max-h-60 overflow-y-auto pr-1",children:l.map((x,M)=>g.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800",children:[g.jsxs("div",{className:"flex items-center justify-between mb-1",children:[g.jsx("span",{className:"font-bold text-amber-400 text-xs",children:x.title}),g.jsx("span",{className:"text-[10px] text-slate-500",children:x.time})]}),g.jsx("p",{className:"text-xs text-slate-300",children:x.desc})]},M))}),g.jsx("button",{onClick:()=>v(!1),className:"mt-5 w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold",children:"Resume Investigation"})]})}),c&&g.jsx("div",{className:"fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 pointer-events-auto animate-in fade-in",children:g.jsxs("div",{className:"bg-slate-900 border border-rose-500/50 rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl",children:[g.jsx("div",{className:"w-12 h-12 rounded-full bg-rose-950/80 border border-rose-500 flex items-center justify-center mx-auto mb-3 text-rose-400",children:g.jsx(tw,{className:"w-6 h-6"})}),g.jsx("h3",{className:"text-xl font-black text-rose-400 mb-1",children:"MISSION FAILED"}),g.jsx("p",{className:"text-xs text-slate-300 mb-6",children:"Operative fell from the grid or sustained critical hazard damage."}),g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsxs("button",{onClick:m,className:"flex-1 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-xs shadow-lg transition-all flex items-center justify-center space-x-1.5",children:[g.jsx(yv,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Retry Level"})]}),g.jsx("button",{onClick:p,className:"py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl text-xs",children:"Back to Studio"})]})]})}),d&&g.jsx("div",{className:"fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 pointer-events-auto animate-in zoom-in-95",children:g.jsxs("div",{className:"bg-slate-900 border border-cyan-500/50 rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl",children:[g.jsx("div",{className:"w-12 h-12 rounded-full bg-cyan-950/80 border border-cyan-400 flex items-center justify-center mx-auto mb-3 text-cyan-300",children:g.jsx(R_,{className:"w-6 h-6"})}),g.jsx("h3",{className:"text-xl font-black text-cyan-300 mb-1",children:"EXTRACTION COMPLETE!"}),g.jsx("p",{className:"text-xs text-slate-300 mb-4",children:"You solved the case and reached the extraction zone successfully!"}),g.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 mb-6 flex justify-around",children:[g.jsxs("div",{children:[g.jsx("span",{className:"block text-[10px] text-slate-500 uppercase",children:"Clues Found"}),g.jsx("span",{className:"font-bold text-amber-400 text-sm",children:l.length})]}),g.jsxs("div",{children:[g.jsx("span",{className:"block text-[10px] text-slate-500 uppercase",children:"Coins Collected"}),g.jsx("span",{className:"font-bold text-emerald-400 text-sm",children:s})]})]}),g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx("button",{onClick:m,className:"flex-1 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl text-xs shadow-lg transition-all",children:"Replay Mission"}),g.jsx("button",{onClick:p,className:"py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl text-xs",children:"Studio Edit"})]})]})})]})},_w=[{name:"Porcelain",hex:"#fdf0d5"},{name:"Warm Beige",hex:"#f5d0b5"},{name:"Golden Honey",hex:"#e0a96d"},{name:"Olive Bronze",hex:"#c68b59"},{name:"Deep Espresso",hex:"#5c3d2e"}],vw=[{name:"Midnight Jet",hex:"#1e1b18"},{name:"Chestnut Brown",hex:"#582f0e"},{name:"Platinum Silver",hex:"#e2e8f0"},{name:"Auburn Ember",hex:"#b7094c"},{name:"Cyber Cyan",hex:"#00f0ff"},{name:"Golden Blonde",hex:"#ffb703"}],yw=[{name:"Noir Trench",hex:"#2b2d42",accent:"#d90429"},{name:"Cyberpunk Stealth",hex:"#0f172a",accent:"#00f0ff"},{name:"Field Operative",hex:"#334155",accent:"#22c55e"},{name:"Crimson Velvet",hex:"#4a0404",accent:"#f59e0b"},{name:"Arctic Ranger",hex:"#e2e8f0",accent:"#3b82f6"}],bw=({companion:r,onSaveCompanion:e,onClose:i})=>{const[s,l]=Le.useState({...r}),[c,d]=Le.useState("appearance"),m=()=>{e(s),i()};return g.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[g.jsxs("div",{className:"px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60",children:[g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white shadow-lg",children:g.jsx(du,{className:"w-5 h-5"})}),g.jsxs("div",{children:[g.jsx("h2",{className:"text-lg font-bold text-slate-100",children:"Companion & Partner Studio"}),g.jsx("p",{className:"text-xs text-slate-400",children:"Personalize your realistic co-op ally, stats, appearance and AI responses"})]})]}),g.jsx("button",{onClick:i,className:"text-slate-400 hover:text-white text-sm px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800",children:"Cancel"})]}),g.jsxs("div",{className:"flex border-b border-slate-800 px-6 bg-slate-950/30",children:[g.jsxs("button",{onClick:()=>d("appearance"),className:`py-3 px-4 text-sm font-semibold border-b-2 flex items-center space-x-2 transition-all ${c==="appearance"?"border-cyan-400 text-cyan-300":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[g.jsx(iw,{className:"w-4 h-4"}),g.jsx("span",{children:"Appearance & Style"})]}),g.jsxs("button",{onClick:()=>d("role"),className:`py-3 px-4 text-sm font-semibold border-b-2 flex items-center space-x-2 transition-all ${c==="role"?"border-cyan-400 text-cyan-300":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[g.jsx(fu,{className:"w-4 h-4"}),g.jsx("span",{children:"Combat Role & Archetype"})]}),g.jsxs("button",{onClick:()=>d("dialogue"),className:`py-3 px-4 text-sm font-semibold border-b-2 flex items-center space-x-2 transition-all ${c==="dialogue"?"border-cyan-400 text-cyan-300":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[g.jsx(I2,{className:"w-4 h-4"}),g.jsx("span",{children:"Voice & Dialogue Lines"})]})]}),g.jsxs("div",{className:"p-6 overflow-y-auto space-y-6 flex-1 text-slate-200",children:[c==="appearance"&&g.jsxs("div",{className:"space-y-5",children:[g.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5",children:"Companion Name"}),g.jsx("input",{type:"text",value:s.name,onChange:p=>l({...s,name:p.target.value}),className:"w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5",children:"Title / Specialty"}),g.jsx("input",{type:"text",value:s.title,onChange:p=>l({...s,title:p.target.value}),className:"w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Hair Style"}),g.jsx("div",{className:"grid grid-cols-4 gap-2.5",children:["bob","long_waves","ponytail","short_pixie"].map(p=>g.jsx("button",{onClick:()=>l({...s,hairStyle:p}),className:`px-3 py-2 rounded-xl text-xs font-semibold capitalize border transition-all ${s.hairStyle===p?"bg-cyan-600/30 border-cyan-400 text-cyan-200 shadow-md":"bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800"}`,children:p.replace("_"," ")},p))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Hair Tone"}),g.jsx("div",{className:"flex flex-wrap gap-2.5",children:vw.map(p=>g.jsxs("button",{onClick:()=>l({...s,hairColor:p.hex}),className:`flex items-center space-x-2 px-3 py-1.5 rounded-lg border text-xs font-medium ${s.hairColor===p.hex?"border-cyan-400 ring-2 ring-cyan-500/30":"border-slate-700"}`,children:[g.jsx("span",{className:"w-3.5 h-3.5 rounded-full border border-white/20 shadow",style:{backgroundColor:p.hex}}),g.jsx("span",{children:p.name})]},p.name))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Complexion Tone"}),g.jsx("div",{className:"flex flex-wrap gap-2.5",children:_w.map(p=>g.jsxs("button",{onClick:()=>l({...s,skinTone:p.hex}),className:`flex items-center space-x-2 px-3 py-1.5 rounded-lg border text-xs font-medium ${s.skinTone===p.hex?"border-cyan-400 ring-2 ring-cyan-500/30":"border-slate-700"}`,children:[g.jsx("span",{className:"w-3.5 h-3.5 rounded-full border border-white/20 shadow",style:{backgroundColor:p.hex}}),g.jsx("span",{children:p.name})]},p.name))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Attire & Armor Theme"}),g.jsx("div",{className:"grid grid-cols-3 gap-2.5",children:yw.map(p=>g.jsxs("button",{onClick:()=>l({...s,outfitColor:p.hex,accentColor:p.accent}),className:`p-2.5 rounded-xl border text-left flex items-center space-x-2.5 text-xs font-medium transition-all ${s.outfitColor===p.hex?"border-cyan-400 bg-cyan-950/20 shadow-md":"border-slate-700 bg-slate-800/60"}`,children:[g.jsxs("div",{className:"flex -space-x-1",children:[g.jsx("span",{className:"w-4 h-4 rounded-full border border-white/20",style:{backgroundColor:p.hex}}),g.jsx("span",{className:"w-4 h-4 rounded-full border border-white/20",style:{backgroundColor:p.accent}})]}),g.jsx("span",{className:"truncate",children:p.name})]},p.name))})]})]}),c==="role"&&g.jsxs("div",{className:"space-y-4",children:[g.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider",children:"Tactical Specialty"}),g.jsx("div",{className:"grid grid-cols-2 gap-3",children:[{id:"tactical_vanguard",name:"Tactical Vanguard",desc:"Leads from the front, draws enemy patrol aggro, provides defensive barriers.",icon:fu},{id:"scout_sniper",name:"Scout Specialist",desc:"Highlights distant clues, disarms laser traps, reveals hidden routes.",icon:K2},{id:"support_medic",name:"Support Field Medic",desc:"Periodically restores player HP and boosts dash regeneration.",icon:_v},{id:"infiltrator",name:"Shadow Infiltrator",desc:"Unlocks cipher terminals, hacks surveillance drones, and gathers secrets.",icon:du}].map(p=>{const h=p.icon,v=s.combatRole===p.id;return g.jsxs("div",{onClick:()=>l({...s,combatRole:p.id}),className:`p-4 rounded-xl border cursor-pointer transition-all ${v?"border-cyan-400 bg-cyan-950/40 shadow-lg":"border-slate-700 bg-slate-800/50 hover:bg-slate-800"}`,children:[g.jsxs("div",{className:"flex items-center space-x-2.5 mb-1.5",children:[g.jsx(h,{className:`w-5 h-5 ${v?"text-cyan-400":"text-slate-400"}`}),g.jsx("span",{className:"text-sm font-bold text-white",children:p.name})]}),g.jsx("p",{className:"text-xs text-slate-300",children:p.desc})]},p.id)})})]}),c==="dialogue"&&g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5",children:"Mission Start Greeting"}),g.jsx("textarea",{rows:2,value:s.dialogueGreet,onChange:p=>l({...s,dialogueGreet:p.target.value}),className:"w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5",children:"Combat Action Callout"}),g.jsx("textarea",{rows:2,value:s.dialogueCombat,onChange:p=>l({...s,dialogueCombat:p.target.value}),className:"w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5",children:"Mystery Clue Discovered Line"}),g.jsx("textarea",{rows:2,value:s.dialogueClueFound,onChange:p=>l({...s,dialogueClueFound:p.target.value}),className:"w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500"})]})]})]}),g.jsxs("div",{className:"p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between",children:[g.jsxs("div",{className:"text-xs text-slate-400",children:["Active Companion: ",g.jsx("span",{className:"text-cyan-300 font-semibold",children:s.name})," (",s.title,")"]}),g.jsxs("button",{onClick:m,className:"flex items-center space-x-2 px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm shadow-lg transition-all",children:[g.jsx(gv,{className:"w-4 h-4"}),g.jsx("span",{children:"Apply Companion"})]})]})]})})},Sw=({level:r,onSaveStory:e,onClose:i})=>{var y,U;const[s,l]=Le.useState(JSON.parse(JSON.stringify(r.storyNodes||[]))),[c,d]=Le.useState(r.initialNodeId||((y=s[0])==null?void 0:y.id)||""),[m,p]=Le.useState(r.initialNodeId||((U=s[0])==null?void 0:U.id)||""),h=s.find(O=>O.id===m)||s[0],v=()=>{const O=`node_${Date.now()}`,w={id:O,speaker:"Agent Evelyn Cross",text:"New discovery node. State your investigative findings here.",choices:[{text:"Investigate further",nextNodeId:O}]};l([...s,w]),p(O)},_=O=>{if(s.length<=1)return;const w=s.filter(I=>I.id!==O);l(w),m===O&&p(w[0].id)},x=O=>{h&&l(s.map(w=>w.id===h.id?{...w,...O}:w))},M=()=>{var w;if(!h)return;const O={text:"New choice option",nextNodeId:((w=s[0])==null?void 0:w.id)||h.id};x({choices:[...h.choices,O]})},A=(O,w,I)=>{if(!h)return;const P=h.choices.map((z,E)=>E===O?{...z,[w]:I}:z);x({choices:P})},C=O=>{if(!h)return;const w=h.choices.filter((I,P)=>P!==O);x({choices:w})},S=()=>{e(s,c),i()};return g.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[g.jsxs("div",{className:"px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60",children:[g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-amber-600 flex items-center justify-center text-white shadow-lg",children:g.jsx(xv,{className:"w-5 h-5"})}),g.jsxs("div",{children:[g.jsx("h2",{className:"text-lg font-bold text-slate-100",children:"Branching Narrative & Mystery Tree"}),g.jsx("p",{className:"text-xs text-slate-400",children:"Design crime thriller interrogations, clue deductions, and RPG quest branches"})]})]}),g.jsx("button",{onClick:i,className:"text-slate-400 hover:text-white text-sm px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800",children:"Close"})]}),g.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[g.jsxs("div",{className:"w-1/3 border-r border-slate-800 p-4 overflow-y-auto space-y-2 bg-slate-950/30",children:[g.jsxs("div",{className:"flex items-center justify-between mb-2",children:[g.jsx("span",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:"Story Dialogue Nodes"}),g.jsxs("button",{onClick:v,className:"flex items-center space-x-1 px-2.5 py-1 bg-cyan-600/30 hover:bg-cyan-600 text-cyan-300 hover:text-white rounded-lg text-xs font-semibold transition-all border border-cyan-500/40",children:[g.jsx(sp,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Add Node"})]})]}),s.map(O=>{const w=O.id===(h==null?void 0:h.id),I=O.id===c;return g.jsxs("div",{onClick:()=>p(O.id),className:`p-3 rounded-xl border text-left cursor-pointer transition-all ${w?"border-cyan-400 bg-cyan-950/40 shadow-md":"border-slate-800 bg-slate-850 hover:bg-slate-800/60"}`,children:[g.jsxs("div",{className:"flex items-center justify-between mb-1",children:[g.jsx("span",{className:"text-xs font-bold text-cyan-300 truncate max-w-[130px]",children:O.speaker}),I&&g.jsx("span",{className:"text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-1.5 py-0.5 rounded",children:"START"})]}),g.jsx("p",{className:"text-xs text-slate-300 line-clamp-2",children:O.text}),g.jsxs("div",{className:"mt-1.5 flex items-center justify-between text-[11px] text-slate-500",children:[g.jsxs("span",{children:[O.choices.length," Choice Branch",O.choices.length!==1?"es":""]}),g.jsx("span",{className:"font-mono text-[10px]",children:O.id})]})]},O.id)})]}),h?g.jsxs("div",{className:"w-2/3 p-6 overflow-y-auto space-y-5 text-slate-200",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsxs("span",{className:"text-xs font-mono bg-slate-800 text-slate-400 px-2 py-1 rounded",children:["ID: ",h.id]}),h.id!==c&&g.jsx("button",{onClick:()=>d(h.id),className:"text-xs text-amber-400 hover:text-amber-300 underline font-medium",children:"Set as Opening Dialogue"})]}),s.length>1&&g.jsxs("button",{onClick:()=>_(h.id),className:"flex items-center space-x-1 text-xs text-rose-400 hover:text-rose-300",children:[g.jsx(rp,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Delete Node"})]})]}),g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1",children:"Speaker Name"}),g.jsx("input",{type:"text",value:h.speaker,onChange:O=>x({speaker:O.target.value}),className:"w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500",placeholder:"e.g. Agent Evelyn Cross, Suspect Vance, Chief Miller"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1",children:"Dialogue / Narrative Beat"}),g.jsx("textarea",{rows:3,value:h.text,onChange:O=>x({text:O.target.value}),className:"w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500",placeholder:"Enter what this character says or the mystery revelation..."})]})]}),g.jsxs("div",{className:"space-y-3 pt-2",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("label",{className:"block text-xs font-semibold text-slate-300 uppercase tracking-wider",children:["Interactive Player Choices (",h.choices.length,")"]}),g.jsxs("button",{onClick:M,className:"flex items-center space-x-1 text-xs text-cyan-400 hover:text-cyan-300 font-semibold",children:[g.jsx(sp,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Add Choice"})]})]}),h.choices.map((O,w)=>g.jsxs("div",{className:"p-3.5 rounded-xl border border-slate-700/80 bg-slate-800/60 space-y-3",children:[g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx("span",{className:"w-5 h-5 rounded-full bg-cyan-600/30 text-cyan-300 flex items-center justify-center text-xs font-bold",children:w+1}),g.jsx("input",{type:"text",value:O.text,onChange:I=>A(w,"text",I.target.value),className:"flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-500",placeholder:"Player choice response button..."}),g.jsx("button",{onClick:()=>C(w),className:"text-slate-400 hover:text-rose-400 p-1",children:g.jsx(rp,{className:"w-4 h-4"})})]}),g.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs",children:[g.jsxs("div",{children:[g.jsx("span",{className:"text-slate-400 mb-1 block",children:"Routes to Next Node:"}),g.jsx("select",{value:O.nextNodeId,onChange:I=>A(w,"nextNodeId",I.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500",children:s.map(I=>g.jsxs("option",{value:I.id,children:[I.speaker,": ",I.text.slice(0,24),"..."]},I.id))})]}),g.jsxs("div",{children:[g.jsx("span",{className:"text-slate-400 mb-1 block",children:"Unlocks Clue / Action (Optional):"}),g.jsx("input",{type:"text",value:O.givesClue||"",onChange:I=>A(w,"givesClue",I.target.value),placeholder:"e.g. Murder Weapon Found",className:"w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"})]})]})]},w))]})]}):null]}),g.jsxs("div",{className:"p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between",children:[g.jsxs("div",{className:"text-xs text-slate-400",children:["Total Story Nodes: ",g.jsx("span",{className:"text-cyan-300 font-semibold",children:s.length})]}),g.jsxs("button",{onClick:S,className:"flex items-center space-x-2 px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm shadow-lg transition-all",children:[g.jsx(gv,{className:"w-4 h-4"}),g.jsx("span",{children:"Apply Story Tree"})]})]})]})})},Mw=({level:r,onLaunchCoop:e,onClose:i})=>{const[s,l]=Le.useState("NOVA-7821"),[c,d]=Le.useState("host"),[m,p]=Le.useState(!1),[h,v]=Le.useState("connected"),_=()=>{var x;(x=navigator.clipboard)==null||x.writeText(s),p(!0),setTimeout(()=>p(!1),2e3)};return g.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden flex flex-col",children:[g.jsxs("div",{className:"px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60",children:[g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-cyan-600 flex items-center justify-center text-white shadow-lg",children:g.jsx(bv,{className:"w-5 h-5"})}),g.jsxs("div",{children:[g.jsx("h2",{className:"text-lg font-bold text-slate-100",children:"Co-op Mission Operations"}),g.jsx("p",{className:"text-xs text-slate-400",children:"Team up for synchronized platforming, mystery solving, and tactical combat"})]})]}),g.jsx("button",{onClick:i,className:"text-slate-400 hover:text-white text-sm px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800",children:"Close"})]}),g.jsxs("div",{className:"p-6 space-y-6 text-slate-200",children:[g.jsxs("div",{className:"bg-slate-950/60 border border-slate-800 rounded-xl p-4 flex items-center justify-between",children:[g.jsxs("div",{children:[g.jsx("span",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1",children:"Encrypted Room Code"}),g.jsx("span",{className:"text-xl font-mono font-black text-cyan-400 tracking-wider",children:s})]}),g.jsxs("button",{onClick:_,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-xs font-semibold text-slate-200 transition-all",children:[g.jsx(uu,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:m?"Copied!":"Copy Code"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5",children:"Mission Roster (2-Player Co-op)"}),g.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[g.jsxs("div",{onClick:()=>d("host"),className:`p-4 rounded-xl border cursor-pointer transition-all ${c==="host"?"border-cyan-400 bg-cyan-950/30 ring-1 ring-cyan-500/50":"border-slate-800 bg-slate-850 hover:bg-slate-800"}`,children:[g.jsxs("div",{className:"flex items-center justify-between mb-2",children:[g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx(fu,{className:"w-4 h-4 text-cyan-400"}),g.jsx("span",{className:"text-sm font-bold text-white",children:"Player 1 (Lead)"})]}),g.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"})]}),g.jsx("p",{className:"text-xs text-slate-300",children:"Controls protagonist, leads platforming routes & interacts with clues."})]}),g.jsxs("div",{onClick:()=>d("client"),className:`p-4 rounded-xl border cursor-pointer transition-all ${c==="client"?"border-cyan-400 bg-cyan-950/30 ring-1 ring-cyan-500/50":"border-slate-800 bg-slate-850 hover:bg-slate-800"}`,children:[g.jsxs("div",{className:"flex items-center justify-between mb-2",children:[g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx(Mv,{className:"w-4 h-4 text-emerald-400"}),g.jsxs("span",{className:"text-sm font-bold text-white",children:["Player 2 (",r.companion.name,")"]})]}),g.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"})]}),g.jsx("p",{className:"text-xs text-slate-300",children:"Controls companion ally, handles combat vanguard & barrier support."})]})]})]}),g.jsxs("div",{className:"bg-slate-850 border border-slate-800 rounded-xl p-4 space-y-2",children:[g.jsx("span",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1",children:"Active Co-op Mission Goals"}),g.jsxs("div",{className:"flex items-start space-x-2.5 text-xs text-slate-300",children:[g.jsx(nl,{className:"w-4 h-4 text-emerald-400 mt-0.5 shrink-0"}),g.jsxs("span",{children:[g.jsx("strong",{children:"Primary:"})," ",r.targetObjective]})]}),g.jsxs("div",{className:"flex items-start space-x-2.5 text-xs text-slate-300",children:[g.jsx(nl,{className:"w-4 h-4 text-cyan-400 mt-0.5 shrink-0"}),g.jsxs("span",{children:[g.jsx("strong",{children:"Co-op Synergy:"})," P1 and P2 share a combined combo attack meter and revives on fall!"]})]})]})]}),g.jsxs("div",{className:"p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center space-x-2 text-xs text-emerald-400",children:[g.jsx(uw,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Low Latency Netcode (18ms)"})]}),g.jsxs("button",{onClick:()=>{e(c),i()},className:"flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all",children:[g.jsx(vv,{className:"w-4 h-4 fill-white"}),g.jsx("span",{children:"Launch Co-op Session"})]})]})]})})},Ew=({currentLevelId:r,onSelectTemplate:e,onNewBlank:i,onClose:s})=>g.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[g.jsxs("div",{className:"px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60",children:[g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-lg",children:g.jsx(N2,{className:"w-5 h-5"})}),g.jsxs("div",{children:[g.jsx("h2",{className:"text-lg font-bold text-slate-100",children:"Game Worlds & Templates"}),g.jsx("p",{className:"text-xs text-slate-400",children:"Load ready-to-play 3D platformers or start a fresh world"})]})]}),g.jsx("button",{onClick:s,className:"text-slate-400 hover:text-white text-sm px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800",children:"Close"})]}),g.jsxs("div",{className:"p-6 overflow-y-auto space-y-4",children:[g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:uh.map(l=>{const c=l.id===r;return g.jsxs("div",{onClick:()=>{e(l),s()},className:`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${c?"border-cyan-400 bg-cyan-950/30 ring-1 ring-cyan-500/40 shadow-lg":"border-slate-800 bg-slate-850 hover:bg-slate-800 hover:border-slate-700"}`,children:[g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center justify-between mb-2",children:[g.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700",children:l.genre.replace("_"," ")}),g.jsx("span",{className:"text-[10px] font-semibold text-cyan-400",children:l.weather.replace("_"," ")})]}),g.jsx("h3",{className:"font-bold text-white text-sm mb-1",children:l.title}),g.jsx("p",{className:"text-xs text-slate-400 line-clamp-2 mb-3",children:l.description})]}),g.jsxs("div",{className:"pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400",children:[g.jsxs("span",{children:["Partner: ",g.jsx("strong",{className:"text-slate-200",children:l.companion.name})]}),g.jsx("span",{className:"font-semibold text-cyan-300",children:c?"Current":"Load Level"})]})]},l.id)})}),g.jsxs("div",{onClick:()=>{i(),s()},className:"p-4 rounded-2xl border-2 border-dashed border-slate-700 hover:border-cyan-500 bg-slate-900/40 hover:bg-cyan-950/20 cursor-pointer flex items-center justify-center space-x-3 transition-all text-slate-300 hover:text-white",children:[g.jsx(sp,{className:"w-5 h-5 text-cyan-400"}),g.jsx("span",{className:"font-bold text-sm",children:"Create New Blank 3D Level"})]})]})]})});function Tw(){const[r,e]=Le.useState(null),[i,s]=Le.useState(!1),[l,c]=Le.useState(!1),[d,m]=Le.useState(!1);return Le.useEffect(()=>{const h=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0;s(h);const v=window.navigator.userAgent.toLowerCase(),_=/iphone|ipad|ipod/.test(v),x=/android/.test(v);m(_),c(_||x||window.innerWidth<768);const M=C=>{C.preventDefault(),e(C)},A=()=>{s(!0),e(null)};return window.addEventListener("beforeinstallprompt",M),window.addEventListener("appinstalled",A),()=>{window.removeEventListener("beforeinstallprompt",M),window.removeEventListener("appinstalled",A)}},[]),{isInstallable:!!r,isInstalled:i,isMobile:l,isIOS:d,install:async()=>{if(!r)return!1;await r.prompt();const{outcome:h}=await r.userChoice;return h==="accepted"?(s(!0),e(null),!0):!1}}}const Aw=({onClose:r})=>{const{isInstallable:e,isInstalled:i,isIOS:s,install:l}=Tw(),[c,d]=Le.useState("workflow"),[m,p]=Le.useState(null),h=(x,M)=>{navigator.clipboard.writeText(x),p(M),setTimeout(()=>p(null),2500)},v=`git add .
git commit -m "Configure GitHub Actions APK build"
git push origin main`,_="npm run build:apk";return g.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]",children:[g.jsxs("div",{className:"px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/70",children:[g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-emerald-500 flex items-center justify-center text-white shadow-lg",children:g.jsx($o,{className:"w-5 h-5"})}),g.jsxs("div",{children:[g.jsxs("h2",{className:"text-lg font-bold text-slate-100 flex items-center space-x-2",children:[g.jsx("span",{children:"Android APK & Phone Setup"}),g.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 font-mono font-semibold",children:"GitHub CI/CD Ready"})]}),g.jsx("p",{className:"text-xs text-slate-400",children:"Automated GitHub Actions workflow to build .apk for your phone"})]})]}),g.jsx("button",{onClick:r,className:"text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 transition-colors",children:g.jsx(Sv,{className:"w-4 h-4"})})]}),g.jsxs("div",{className:"flex border-b border-slate-800 bg-slate-950/40 px-6 pt-2 space-x-2",children:[g.jsxs("button",{onClick:()=>d("workflow"),className:`pb-2.5 px-3 text-xs font-semibold flex items-center space-x-2 border-b-2 transition-all ${c==="workflow"?"border-cyan-400 text-cyan-300":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[g.jsx(U2,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"GitHub Actions Workflow (APK)"})]}),g.jsxs("button",{onClick:()=>d("install_phone"),className:`pb-2.5 px-3 text-xs font-semibold flex items-center space-x-2 border-b-2 transition-all ${c==="install_phone"?"border-cyan-400 text-cyan-300":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[g.jsx($o,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Direct Phone Install (Instant)"})]}),g.jsxs("button",{onClick:()=>d("local"),className:`pb-2.5 px-3 text-xs font-semibold flex items-center space-x-2 border-b-2 transition-all ${c==="local"?"border-cyan-400 text-cyan-300":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[g.jsx(J2,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Terminal / Gradle Build"})]})]}),g.jsxs("div",{className:"p-6 overflow-y-auto space-y-5 text-slate-200 text-sm",children:[c==="workflow"&&g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-start space-x-3",children:[g.jsx(du,{className:"w-5 h-5 text-cyan-400 shrink-0 mt-0.5"}),g.jsxs("div",{children:[g.jsx("h4",{className:"font-bold text-cyan-300 text-xs",children:"Workflow File Generated"}),g.jsxs("p",{className:"text-xs text-slate-300 mt-0.5",children:["Your GitHub Actions workflow is saved at ",g.jsx("code",{className:"bg-slate-900 px-1.5 py-0.5 rounded text-cyan-200 border border-slate-700",children:".github/workflows/build-apk.yml"})," and configured with Capacitor + Gradle."]})]})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsxs("div",{className:"flex items-center space-x-2 font-bold text-xs text-slate-100",children:[g.jsx("span",{className:"w-5 h-5 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[10px]",children:"1"}),g.jsx("span",{children:"Push Changes to your GitHub Repository"})]}),g.jsxs("p",{className:"text-xs text-slate-400 pl-7",children:["Commit and push your project files (including the ",g.jsx("code",{className:"text-slate-300",children:"android/"})," directory and GitHub workflow) to GitHub:"]}),g.jsx("div",{className:"pl-7",children:g.jsxs("div",{className:"relative rounded-xl bg-slate-950 border border-slate-800 p-3 font-mono text-xs text-emerald-400",children:[g.jsx("pre",{children:v}),g.jsx("button",{onClick:()=>h(v,"git"),className:"absolute top-2 right-2 p-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition-colors",title:"Copy command",children:m==="git"?g.jsx(nl,{className:"w-3.5 h-3.5 text-emerald-400"}):g.jsx(uu,{className:"w-3.5 h-3.5"})})]})})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsxs("div",{className:"flex items-center space-x-2 font-bold text-xs text-slate-100",children:[g.jsx("span",{className:"w-5 h-5 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[10px]",children:"2"}),g.jsx("span",{children:'Trigger "Run workflow" or Auto-Trigger on Push'})]}),g.jsxs("div",{className:"pl-7 space-y-1.5 text-xs text-slate-300",children:[g.jsx("p",{children:"1. Open your repository on GitHub in your web browser."}),g.jsxs("p",{children:["2. Click on the ",g.jsx("strong",{children:"Actions"})," tab at the top."]}),g.jsxs("p",{children:["3. In the left sidebar, click ",g.jsx("strong",{children:'"Build Android APK"'}),"."]}),g.jsxs("p",{children:["4. Click ",g.jsx("strong",{children:'"Run workflow"'})," dropdown button and select ",g.jsx("strong",{children:'"Run workflow"'})," (Build Type: debug)."]})]})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsxs("div",{className:"flex items-center space-x-2 font-bold text-xs text-slate-100",children:[g.jsx("span",{className:"w-5 h-5 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[10px]",children:"3"}),g.jsx("span",{children:"Download APK and Install on Your Android Phone"})]}),g.jsxs("div",{className:"pl-7 space-y-2 text-xs text-slate-300",children:[g.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800",children:[g.jsxs("div",{className:"flex items-center space-x-2 text-amber-400 font-semibold mb-1",children:[g.jsx(ap,{className:"w-4 h-4"}),g.jsx("span",{children:"Download Artifact"})]}),g.jsxs("p",{className:"text-slate-400",children:["When the GitHub Action completes green (~2 mins), click into the run, scroll to the ",g.jsx("strong",{children:"Artifacts"})," section at the bottom, and click ",g.jsx("strong",{children:"OmniCraft-3D-Studio-APK"}),"."]})]}),g.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800",children:[g.jsxs("div",{className:"flex items-center space-x-2 text-cyan-400 font-semibold mb-1",children:[g.jsx($o,{className:"w-4 h-4"}),g.jsx("span",{children:"Installing on Android"})]}),g.jsxs("ul",{className:"list-disc pl-4 space-y-1 text-slate-400",children:[g.jsxs("li",{children:["Transfer or download the ",g.jsx("code",{className:"text-slate-200",children:".apk"})," file onto your phone."]}),g.jsxs("li",{children:["Tap the file in your phone's ",g.jsx("strong",{children:"Downloads"})," or ",g.jsx("strong",{children:"Files"})," app."]}),g.jsxs("li",{children:["If asked, enable ",g.jsx("em",{children:'"Allow from this source / Install unknown apps"'})," in Android Settings."]}),g.jsxs("li",{children:["Tap ",g.jsx("strong",{children:"Install"})," to enjoy the native 3D platformer game engine!"]})]})]})]})]})]}),c==="install_phone"&&g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{className:"p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-start space-x-3",children:[g.jsx($o,{className:"w-5 h-5 text-indigo-400 shrink-0 mt-0.5"}),g.jsxs("div",{children:[g.jsx("h4",{className:"font-bold text-indigo-300 text-xs",children:"Instant Mobile Installation (PWA / WebAPK)"}),g.jsx("p",{className:"text-xs text-slate-300 mt-1",children:"You can also install OmniCraft 3D Studio directly to your phone's home screen right now without downloading APK files or waiting for GitHub Actions!"})]})]}),i?g.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center space-x-3 text-emerald-300 text-xs",children:[g.jsx(nl,{className:"w-5 h-5"}),g.jsx("span",{children:"OmniCraft 3D is already installed in standalone fullscreen mode on this device!"})]}):e?g.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-3",children:[g.jsx("p",{className:"text-xs text-slate-300",children:"Your browser supports direct 1-tap installation:"}),g.jsxs("button",{onClick:l,className:"w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl flex items-center justify-center space-x-2 transition-all hover:scale-[1.01]",children:[g.jsx(ap,{className:"w-4 h-4"}),g.jsx("span",{children:"Install OmniCraft 3D on Phone"})]})]}):s?g.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2",children:[g.jsx("h4",{className:"font-bold text-amber-400",children:"iOS Safari Installation Instructions"}),g.jsxs("p",{className:"text-slate-300",children:["1. Tap the ",g.jsx("strong",{children:"Share"})," button (square with arrow) in Safari."]}),g.jsxs("p",{className:"text-slate-300",children:["2. Scroll down and tap ",g.jsx("strong",{children:"Add to Home Screen"}),"."]}),g.jsxs("p",{className:"text-slate-300",children:["3. Tap ",g.jsx("strong",{children:"Add"})," in the top-right corner to launch with native fullscreen 3D controls."]})]}):g.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2.5",children:[g.jsx("h4",{className:"font-bold text-cyan-300",children:"Android Chrome / Mobile Browser Instructions:"}),g.jsxs("ol",{className:"list-decimal pl-4 space-y-1.5 text-slate-300",children:[g.jsxs("li",{children:["Open this URL on your phone's ",g.jsx("strong",{children:"Google Chrome"})," or ",g.jsx("strong",{children:"Samsung Internet"}),"."]}),g.jsxs("li",{children:["Tap the ",g.jsx("strong",{children:"three dots menu (⋮)"})," in the top-right corner."]}),g.jsxs("li",{children:["Tap ",g.jsx("strong",{children:'"Install app"'})," or ",g.jsx("strong",{children:'"Add to Home Screen"'}),"."]}),g.jsx("li",{children:"The app will install as an Android WebAPK with its custom 3D icon and offline support!"})]})]}),g.jsxs("div",{className:"p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-400",children:[g.jsx("span",{className:"text-slate-300 font-semibold block mb-1",children:"Mobile Features Included:"}),"• On-screen analog touch joystick with 360-degree precision",g.jsx("br",{}),"• Touch action buttons for Jump, Combat Strike, Dash, Crouch, and Grip",g.jsx("br",{}),"• Fullscreen landscape/portrait auto-adaptation"]})]}),c==="local"&&g.jsxs("div",{className:"space-y-4",children:[g.jsx("p",{className:"text-xs text-slate-300",children:"If you have Android Studio or the Android SDK installed locally on your machine, you can also compile the APK locally in one command:"}),g.jsxs("div",{className:"relative rounded-xl bg-slate-950 border border-slate-800 p-3 font-mono text-xs text-cyan-300",children:[g.jsx("pre",{children:_}),g.jsx("button",{onClick:()=>h(_,"local"),className:"absolute top-2 right-2 p-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition-colors",title:"Copy command",children:m==="local"?g.jsx(nl,{className:"w-3.5 h-3.5 text-emerald-400"}):g.jsx(uu,{className:"w-3.5 h-3.5"})})]}),g.jsxs("div",{className:"space-y-2 text-xs text-slate-400",children:[g.jsx("p",{children:"This script executes:"}),g.jsxs("code",{className:"block p-2 rounded bg-slate-950 border border-slate-800 text-slate-300",children:["1. vite build (bundles React app into dist/)",g.jsx("br",{}),"2. cap sync android (updates web assets in android/app/src/main/assets)",g.jsx("br",{}),"3. cd android && ./gradlew assembleDebug (builds app-debug.apk)"]}),g.jsxs("p",{className:"pt-1",children:["The compiled APK will be located at:",g.jsx("br",{}),g.jsx("code",{className:"text-cyan-300",children:"android/app/build/outputs/apk/debug/app-debug.apk"})]})]})]})]}),g.jsxs("div",{className:"px-6 py-3 border-t border-slate-800 bg-slate-950/70 flex items-center justify-between text-xs text-slate-400",children:[g.jsxs("span",{children:["App ID: ",g.jsx("code",{className:"text-slate-300 font-mono",children:"com.omnicraft.gamestudio"})]}),g.jsx("button",{onClick:r,className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-colors",children:"Close"})]})]})})};function ww(){const[r,e]=Le.useState(uh[0]),[i,s]=Le.useState("build"),[l,c]=Le.useState(null),[d,m]=Le.useState(!1),[p,h]=Le.useState(!1),[v,_]=Le.useState(!1),[x,M]=Le.useState(!1),[A,C]=Le.useState(!1),[S,y]=Le.useState(100),[U,O]=Le.useState(0),[w,I]=Le.useState([]),[P,z]=Le.useState(!1),[E,D]=Le.useState(!1),[V,H]=Le.useState(!1),[Y,fe]=Le.useState(r.companion.dialogueGreet),[xe,te]=Le.useState({moveX:0,moveZ:0,isJumping:!1,isAttacking:!1,isDashing:!1,isCrouching:!1,isGripping:!1,isInteracting:!1}),G=r.objects.find(Te=>Te.id===l)||null,X=Le.useCallback(()=>{H(Te=>{const we=!Te;return kn.setMuted(we),we})},[]),re=Le.useCallback(Te=>{e(we=>({...we,objects:we.objects.map(et=>et.id===Te.id?Te:et)}))},[]),q=Le.useCallback(Te=>{e(we=>({...we,objects:we.objects.filter(et=>et.id!==Te)})),c(null)},[]),ee=Le.useCallback(Te=>{const we=`obj_${Date.now()}`,et={...Te,id:we,name:`${Te.name} (Copy)`,position:[Te.position[0]+1.5,Te.position[1],Te.position[2]+1.5]};e(Ve=>({...Ve,objects:[...Ve.objects,et]})),c(we)},[]),L=Le.useCallback(Te=>{const we=`obj_${Date.now()}`;let et="platforms",Ve=[4,.6,4],Re="#3b82f6";Te.startsWith("platform")||Te==="moving_platform"||Te==="bouncy_pad"?(et="platforms",Te==="moving_platform"&&(Re="#f59e0b"),Te==="bouncy_pad"&&(Ve=[2,.4,2],Re="#ec4899")):Te.startsWith("hazard")?(et="hazards",Ve=[2,.4,2],Re="#ef4444"):Te.startsWith("clue")||Te==="keycard"?(et="mystery",Ve=[.8,.8,.8],Re="#fbbf24"):Te.startsWith("enemy")?(et="characters",Ve=[1,1.8,1],Re="#8b5cf6"):Te.includes("lamp")||Te.includes("torch")?(et="lights",Ve=[.6,3,.6],Re="#f59e0b"):(et="items",Ve=[1,1,1],Re="#14b8a6");const Xe={id:we,name:Te.replace(/_/g," ").replace(/\b\w/g,Je=>Je.toUpperCase()),type:Te,category:et,position:[0,2,8],rotation:[0,0,0],scale:Ve,color:Re};e(Je=>({...Je,objects:[...Je.objects,Xe]})),c(we)},[]),F=Le.useCallback(()=>{y(100),O(0),I([]),z(!1),D(!1),fe(r.companion.dialogueGreet)},[r.companion.dialogueGreet]),ie=Le.useCallback(()=>{s(Te=>{const we=Te==="build"?"play":"build";return we==="play"?(F(),fe(r.companion.dialogueGreet),setTimeout(()=>fe(null),5e3)):fe(null),we})},[F,r.companion.dialogueGreet]),k=Le.useCallback((Te,we)=>{const et=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});I(Ve=>[{title:Te,desc:we,time:et},...Ve]),fe(r.companion.dialogueClueFound),setTimeout(()=>fe(null),4e3)},[r.companion.dialogueClueFound]),de=Le.useCallback(Te=>{O(we=>we+Te)},[]),W=Le.useCallback(Te=>{fe(r.companion.dialogueCombat),setTimeout(()=>fe(null),3e3)},[r.companion.dialogueCombat]),ae=Le.useCallback(Te=>{y(we=>{const et=we-Te;return et<=0?(z(!0),0):et})},[]),ge=Le.useCallback(()=>{const Te="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(r,null,2)),we=document.createElement("a");we.setAttribute("href",Te),we.setAttribute("download",`${r.id}_project.json`),document.body.appendChild(we),we.click(),we.remove()},[r]),Oe=Le.useCallback(()=>{const Te=document.createElement("input");Te.type="file",Te.accept=".json",Te.onchange=we=>{var Re;const et=(Re=we.target.files)==null?void 0:Re[0];if(!et)return;const Ve=new FileReader;Ve.onload=Xe=>{var Je;try{const gt=JSON.parse((Je=Xe.target)==null?void 0:Je.result);gt.objects&&gt.companion&&(e(gt),F())}catch{alert("Invalid project file format.")}},Ve.readAsText(et)},Te.click()},[F]);return g.jsxs("div",{className:"w-screen h-screen flex flex-col bg-slate-950 text-slate-100 overflow-hidden font-sans select-none",children:[g.jsx(hw,{mode:i,onToggleMode:ie,level:r,onUpdateLevel:Te=>e(we=>({...we,...Te})),onAddObject:L,onOpenCompanionCustomizer:()=>m(!0),onOpenStoryEditor:()=>h(!0),onOpenMultiplayer:()=>_(!0),onResetLevel:F,isMuted:V,onToggleMute:X,onExport:ge,onImport:Oe,onOpenMobileAppModal:()=>C(!0)}),g.jsxs("div",{className:"flex-1 flex relative overflow-hidden",children:[g.jsxs("main",{className:"flex-1 relative h-full",children:[g.jsx(s2,{level:r,mode:i,selectedObjectId:l,onSelectObject:c,onUpdateObject:re,onClueDiscovered:k,onCoinsCollected:de,onEnemyDefeated:W,onLevelComplete:()=>D(!0),onGameOver:()=>z(!0),playerHp:S,onPlayerDamage:ae,touchInput:xe,companionSpeech:Y}),i==="play"&&g.jsxs(g.Fragment,{children:[g.jsx(xw,{level:r,playerHp:S,maxHp:100,coinsCount:U,clues:w,isGameOver:P,isVictory:E,onRestart:F,onExitPlay:()=>s("build")}),g.jsx(gw,{onInputChange:te,onAttackPress:()=>kn.playAttack(),onJumpPress:()=>kn.playJump(),onInteractPress:()=>{}})]}),i==="build"&&g.jsxs("button",{onClick:()=>M(!0),className:"absolute bottom-5 left-5 z-20 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-slate-700/80 text-xs font-semibold text-cyan-300 shadow-xl backdrop-blur-md flex items-center space-x-2 transition-all hover:scale-105",children:[g.jsx("span",{children:"Explore Templates"}),g.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"})]})]}),i==="build"&&g.jsx(mw,{selectedObject:G,onUpdateObject:re,onDeleteObject:q,onDuplicateObject:ee,onAddObject:L})]}),d&&g.jsx(bw,{companion:r.companion,onSaveCompanion:Te=>e(we=>({...we,companion:Te})),onClose:()=>m(!1)}),p&&g.jsx(Sw,{level:r,onSaveStory:(Te,we)=>e(et=>({...et,storyNodes:Te,initialNodeId:we})),onClose:()=>h(!1)}),v&&g.jsx(Mw,{level:r,onLaunchCoop:Te=>{s("play"),F()},onClose:()=>_(!1)}),x&&g.jsx(Ew,{currentLevelId:r.id,onSelectTemplate:Te=>{e(Te),F()},onNewBlank:()=>{e({...uh[0],id:`custom_${Date.now()}`,title:"New Blank 3D Level",description:"Empty platformer stage ready for custom layout and hazards.",objects:[{id:"floor_start",name:"Start Platform",type:"platform_stone",category:"platforms",position:[0,0,0],rotation:[0,0,0],scale:[8,.8,8],color:"#3b82f6"}]}),F()},onClose:()=>M(!1)}),A&&g.jsx(Aw,{onClose:()=>C(!1)})]})}Pb.createRoot(document.getElementById("root")).render(g.jsx(Le.StrictMode,{children:g.jsx(ww,{})}));
