(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}})();var am=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xa={exports:{}},ro={},Ka={exports:{}},E={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr=Symbol.for("react.element"),gc=Symbol.for("react.portal"),xc=Symbol.for("react.fragment"),vc=Symbol.for("react.strict_mode"),Sc=Symbol.for("react.profiler"),Cc=Symbol.for("react.provider"),wc=Symbol.for("react.context"),Rc=Symbol.for("react.forward_ref"),bc=Symbol.for("react.suspense"),Tc=Symbol.for("react.memo"),kc=Symbol.for("react.lazy"),_i=Symbol.iterator;function Oc(e){return e===null||typeof e!="object"?null:(e=_i&&e[_i]||e["@@iterator"],typeof e=="function"?e:null)}var qa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Za=Object.assign,Ja={};function ir(e,t,r){this.props=e,this.context=t,this.refs=Ja,this.updater=r||qa}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function es(){}es.prototype=ir.prototype;function Ul(e,t,r){this.props=e,this.context=t,this.refs=Ja,this.updater=r||qa}var $l=Ul.prototype=new es;$l.constructor=Ul;Za($l,ir.prototype);$l.isPureReactComponent=!0;var Bi=Array.isArray,ts=Object.prototype.hasOwnProperty,Wl={current:null},rs={key:!0,ref:!0,__self:!0,__source:!0};function ns(e,t,r){var n,o={},l=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)ts.call(t,n)&&!rs.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(s===1)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)o[n]===void 0&&(o[n]=s[n]);return{$$typeof:Xr,type:e,key:l,ref:i,props:o,_owner:Wl.current}}function Ic(e,t){return{$$typeof:Xr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xr}function jc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var zi=/\/+/g;function wo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jc(""+e.key):t.toString(36)}function Sn(e,t,r,n,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Xr:case gc:i=!0}}if(i)return i=e,o=o(i),e=n===""?"."+wo(i,0):n,Bi(o)?(r="",e!=null&&(r=e.replace(zi,"$&/")+"/"),Sn(o,t,r,"",function(c){return c})):o!=null&&(Hl(o)&&(o=Ic(o,r+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(zi,"$&/")+"/")+e)),t.push(o)),1;if(i=0,n=n===""?".":n+":",Bi(e))for(var s=0;s<e.length;s++){l=e[s];var u=n+wo(l,s);i+=Sn(l,t,r,u,o)}else if(u=Oc(e),typeof u=="function")for(e=u.call(e),s=0;!(l=e.next()).done;)l=l.value,u=n+wo(l,s++),i+=Sn(l,t,r,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function rn(e,t,r){if(e==null)return e;var n=[],o=0;return Sn(e,n,"","",function(l){return t.call(r,l,o++)}),n}function Nc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Cn={transition:null},Ec={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Cn,ReactCurrentOwner:Wl};function os(){throw Error("act(...) is not supported in production builds of React.")}E.Children={map:rn,forEach:function(e,t,r){rn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return rn(e,function(){t++}),t},toArray:function(e){return rn(e,function(t){return t})||[]},only:function(e){if(!Hl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};E.Component=ir;E.Fragment=xc;E.Profiler=Sc;E.PureComponent=Ul;E.StrictMode=vc;E.Suspense=bc;E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ec;E.act=os;E.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Za({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Wl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ts.call(t,u)&&!rs.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];n.children=s}return{$$typeof:Xr,type:e.type,key:o,ref:l,props:n,_owner:i}};E.createContext=function(e){return e={$$typeof:wc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cc,_context:e},e.Consumer=e};E.createElement=ns;E.createFactory=function(e){var t=ns.bind(null,e);return t.type=e,t};E.createRef=function(){return{current:null}};E.forwardRef=function(e){return{$$typeof:Rc,render:e}};E.isValidElement=Hl;E.lazy=function(e){return{$$typeof:kc,_payload:{_status:-1,_result:e},_init:Nc}};E.memo=function(e,t){return{$$typeof:Tc,type:e,compare:t===void 0?null:t}};E.startTransition=function(e){var t=Cn.transition;Cn.transition={};try{e()}finally{Cn.transition=t}};E.unstable_act=os;E.useCallback=function(e,t){return ue.current.useCallback(e,t)};E.useContext=function(e){return ue.current.useContext(e)};E.useDebugValue=function(){};E.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};E.useEffect=function(e,t){return ue.current.useEffect(e,t)};E.useId=function(){return ue.current.useId()};E.useImperativeHandle=function(e,t,r){return ue.current.useImperativeHandle(e,t,r)};E.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};E.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};E.useMemo=function(e,t){return ue.current.useMemo(e,t)};E.useReducer=function(e,t,r){return ue.current.useReducer(e,t,r)};E.useRef=function(e){return ue.current.useRef(e)};E.useState=function(e){return ue.current.useState(e)};E.useSyncExternalStore=function(e,t,r){return ue.current.useSyncExternalStore(e,t,r)};E.useTransition=function(){return ue.current.useTransition()};E.version="18.3.1";Ka.exports=E;var B=Ka.exports;const Pc=yc(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc=B,Ac=Symbol.for("react.element"),Dc=Symbol.for("react.fragment"),_c=Object.prototype.hasOwnProperty,Bc=Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zc={key:!0,ref:!0,__self:!0,__source:!0};function ls(e,t,r){var n,o={},l=null,i=null;r!==void 0&&(l=""+r),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)_c.call(t,n)&&!zc.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:Ac,type:e,key:l,ref:i,props:o,_owner:Bc.current}}ro.Fragment=Dc;ro.jsx=ls;ro.jsxs=ls;Xa.exports=ro;var a=Xa.exports,Go={},is={exports:{}},Se={},as={exports:{}},ss={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,I){var j=b.length;b.push(I);e:for(;0<j;){var Y=j-1>>>1,q=b[Y];if(0<o(q,I))b[Y]=I,b[j]=q,j=Y;else break e}}function r(b){return b.length===0?null:b[0]}function n(b){if(b.length===0)return null;var I=b[0],j=b.pop();if(j!==I){b[0]=j;e:for(var Y=0,q=b.length,en=q>>>1;Y<en;){var xt=2*(Y+1)-1,Co=b[xt],vt=xt+1,tn=b[vt];if(0>o(Co,j))vt<q&&0>o(tn,Co)?(b[Y]=tn,b[vt]=j,Y=vt):(b[Y]=Co,b[xt]=j,Y=xt);else if(vt<q&&0>o(tn,j))b[Y]=tn,b[vt]=j,Y=vt;else break e}}return I}function o(b,I){var j=b.sortIndex-I.sortIndex;return j!==0?j:b.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],c=[],p=1,h=null,y=3,C=!1,g=!1,x=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(b){for(var I=r(c);I!==null;){if(I.callback===null)n(c);else if(I.startTime<=b)n(c),I.sortIndex=I.expirationTime,t(u,I);else break;I=r(c)}}function v(b){if(x=!1,m(b),!g)if(r(u)!==null)g=!0,vo(R);else{var I=r(c);I!==null&&So(v,I.startTime-b)}}function R(b,I){g=!1,x&&(x=!1,f(O),O=-1),C=!0;var j=y;try{for(m(I),h=r(u);h!==null&&(!(h.expirationTime>I)||b&&!Ie());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,y=h.priorityLevel;var q=Y(h.expirationTime<=I);I=e.unstable_now(),typeof q=="function"?h.callback=q:h===r(u)&&n(u),m(I)}else n(u);h=r(u)}if(h!==null)var en=!0;else{var xt=r(c);xt!==null&&So(v,xt.startTime-I),en=!1}return en}finally{h=null,y=j,C=!1}}var T=!1,k=null,O=-1,V=5,P=-1;function Ie(){return!(e.unstable_now()-P<V)}function ur(){if(k!==null){var b=e.unstable_now();P=b;var I=!0;try{I=k(!0,b)}finally{I?cr():(T=!1,k=null)}}else T=!1}var cr;if(typeof d=="function")cr=function(){d(ur)};else if(typeof MessageChannel<"u"){var Di=new MessageChannel,hc=Di.port2;Di.port1.onmessage=ur,cr=function(){hc.postMessage(null)}}else cr=function(){N(ur,0)};function vo(b){k=b,T||(T=!0,cr())}function So(b,I){O=N(function(){b(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){g||C||(g=!0,vo(R))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(b){switch(y){case 1:case 2:case 3:var I=3;break;default:I=y}var j=y;y=I;try{return b()}finally{y=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,I){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var j=y;y=b;try{return I()}finally{y=j}},e.unstable_scheduleCallback=function(b,I,j){var Y=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Y+j:Y):j=Y,b){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=j+q,b={id:p++,callback:I,priorityLevel:b,startTime:j,expirationTime:q,sortIndex:-1},j>Y?(b.sortIndex=j,t(c,b),r(u)===null&&b===r(c)&&(x?(f(O),O=-1):x=!0,So(v,j-Y))):(b.sortIndex=q,t(u,b),g||C||(g=!0,vo(R))),b},e.unstable_shouldYield=Ie,e.unstable_wrapCallback=function(b){var I=y;return function(){var j=y;y=I;try{return b.apply(this,arguments)}finally{y=j}}}})(ss);as.exports=ss;var Fc=as.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc=B,ve=Fc;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var us=new Set,Pr={};function Pt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(Pr[e]=t,e=0;e<t.length;e++)us.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xo=Object.prototype.hasOwnProperty,Uc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fi={},Mi={};function $c(e){return Xo.call(Mi,e)?!0:Xo.call(Fi,e)?!1:Uc.test(e)?Mi[e]=!0:(Fi[e]=!0,!1)}function Wc(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hc(e,t,r,n){if(t===null||typeof t>"u"||Wc(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,r,n,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vl=/[\-:]([a-z])/g;function Yl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vl,Yl);re[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vl,Yl);re[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vl,Yl);re[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ql(e,t,r,n){var o=re.hasOwnProperty(t)?re[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hc(t,r,o,n)&&(r=null),n||o===null?$c(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Ke=Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nn=Symbol.for("react.element"),Dt=Symbol.for("react.portal"),_t=Symbol.for("react.fragment"),Gl=Symbol.for("react.strict_mode"),Ko=Symbol.for("react.profiler"),cs=Symbol.for("react.provider"),ds=Symbol.for("react.context"),Xl=Symbol.for("react.forward_ref"),qo=Symbol.for("react.suspense"),Zo=Symbol.for("react.suspense_list"),Kl=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),fs=Symbol.for("react.offscreen"),Ui=Symbol.iterator;function dr(e){return e===null||typeof e!="object"?null:(e=Ui&&e[Ui]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Ro;function vr(e){if(Ro===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ro=t&&t[1]||""}return`
`+Ro+e}var bo=!1;function To(e,t){if(!e||bo)return"";bo=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=n.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var u=`
`+o[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{bo=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?vr(e):""}function Vc(e){switch(e.tag){case 5:return vr(e.type);case 16:return vr("Lazy");case 13:return vr("Suspense");case 19:return vr("SuspenseList");case 0:case 2:case 15:return e=To(e.type,!1),e;case 11:return e=To(e.type.render,!1),e;case 1:return e=To(e.type,!0),e;default:return""}}function Jo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _t:return"Fragment";case Dt:return"Portal";case Ko:return"Profiler";case Gl:return"StrictMode";case qo:return"Suspense";case Zo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ds:return(e.displayName||"Context")+".Consumer";case cs:return(e._context.displayName||"Context")+".Provider";case Xl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Kl:return t=e.displayName||null,t!==null?t:Jo(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return Jo(e(t))}catch{}}return null}function Yc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jo(t);case 8:return t===Gl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ps(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qc(e){var t=ps(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){n=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function on(e){e._valueTracker||(e._valueTracker=Qc(e))}function ms(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ps(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Pn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function el(e,t){var r=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function $i(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=ft(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hs(e,t){t=t.checked,t!=null&&Ql(e,"checked",t,!1)}function tl(e,t){hs(e,t);var r=ft(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?rl(e,t.type,r):t.hasOwnProperty("defaultValue")&&rl(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wi(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function rl(e,t,r){(t!=="number"||Pn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Sr=Array.isArray;function Qt(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+ft(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function nl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hi(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(S(92));if(Sr(r)){if(1<r.length)throw Error(S(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ft(r)}}function ys(e,t){var r=ft(t.value),n=ft(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Vi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ol(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ln,xs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ln=ln||document.createElement("div"),ln.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ln.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gc=["Webkit","ms","Moz","O"];Object.keys(Rr).forEach(function(e){Gc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rr[t]=Rr[e]})});function vs(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Rr.hasOwnProperty(e)&&Rr[e]?(""+t).trim():t+"px"}function Ss(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=vs(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var Xc=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ll(e,t){if(t){if(Xc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var al=null;function ql(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sl=null,Gt=null,Xt=null;function Yi(e){if(e=Zr(e)){if(typeof sl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=ao(t),sl(e.stateNode,e.type,t))}}function Cs(e){Gt?Xt?Xt.push(e):Xt=[e]:Gt=e}function ws(){if(Gt){var e=Gt,t=Xt;if(Xt=Gt=null,Yi(e),t)for(e=0;e<t.length;e++)Yi(t[e])}}function Rs(e,t){return e(t)}function bs(){}var ko=!1;function Ts(e,t,r){if(ko)return e(t,r);ko=!0;try{return Rs(e,t,r)}finally{ko=!1,(Gt!==null||Xt!==null)&&(bs(),ws())}}function Ar(e,t){var r=e.stateNode;if(r===null)return null;var n=ao(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(S(231,t,typeof r));return r}var ul=!1;if(Ye)try{var fr={};Object.defineProperty(fr,"passive",{get:function(){ul=!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{ul=!1}function Kc(e,t,r,n,o,l,i,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(p){this.onError(p)}}var br=!1,Ln=null,An=!1,cl=null,qc={onError:function(e){br=!0,Ln=e}};function Zc(e,t,r,n,o,l,i,s,u){br=!1,Ln=null,Kc.apply(qc,arguments)}function Jc(e,t,r,n,o,l,i,s,u){if(Zc.apply(this,arguments),br){if(br){var c=Ln;br=!1,Ln=null}else throw Error(S(198));An||(An=!0,cl=c)}}function Lt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ks(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qi(e){if(Lt(e)!==e)throw Error(S(188))}function ed(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var l=o.alternate;if(l===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===r)return Qi(o),e;if(l===n)return Qi(o),t;l=l.sibling}throw Error(S(188))}if(r.return!==n.return)r=o,n=l;else{for(var i=!1,s=o.child;s;){if(s===r){i=!0,r=o,n=l;break}if(s===n){i=!0,n=o,r=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===r){i=!0,r=l,n=o;break}if(s===n){i=!0,n=l,r=o;break}s=s.sibling}if(!i)throw Error(S(189))}}if(r.alternate!==n)throw Error(S(190))}if(r.tag!==3)throw Error(S(188));return r.stateNode.current===r?e:t}function Os(e){return e=ed(e),e!==null?Is(e):null}function Is(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Is(e);if(t!==null)return t;e=e.sibling}return null}var js=ve.unstable_scheduleCallback,Gi=ve.unstable_cancelCallback,td=ve.unstable_shouldYield,rd=ve.unstable_requestPaint,Q=ve.unstable_now,nd=ve.unstable_getCurrentPriorityLevel,Zl=ve.unstable_ImmediatePriority,Ns=ve.unstable_UserBlockingPriority,Dn=ve.unstable_NormalPriority,od=ve.unstable_LowPriority,Es=ve.unstable_IdlePriority,no=null,Fe=null;function ld(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(no,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:sd,id=Math.log,ad=Math.LN2;function sd(e){return e>>>=0,e===0?32:31-(id(e)/ad|0)|0}var an=64,sn=4194304;function Cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _n(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,l=e.pingedLanes,i=r&268435455;if(i!==0){var s=i&~o;s!==0?n=Cr(s):(l&=i,l!==0&&(n=Cr(l)))}else i=r&~o,i!==0?n=Cr(i):l!==0&&(n=Cr(l));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Le(t),o=1<<r,n|=e[r],t&=~o;return n}function ud(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cd(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Le(l),s=1<<i,u=o[i];u===-1?(!(s&r)||s&n)&&(o[i]=ud(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}}function dl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ps(){var e=an;return an<<=1,!(an&4194240)&&(an=64),e}function Oo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Kr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=r}function dd(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-Le(r),l=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~l}}function Jl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Le(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var A=0;function Ls(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var As,ei,Ds,_s,Bs,fl=!1,un=[],ot=null,lt=null,it=null,Dr=new Map,_r=new Map,et=[],fd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xi(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Dr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(t.pointerId)}}function pr(e,t,r,n,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Zr(t),t!==null&&ei(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function pd(e,t,r,n,o){switch(t){case"focusin":return ot=pr(ot,e,t,r,n,o),!0;case"dragenter":return lt=pr(lt,e,t,r,n,o),!0;case"mouseover":return it=pr(it,e,t,r,n,o),!0;case"pointerover":var l=o.pointerId;return Dr.set(l,pr(Dr.get(l)||null,e,t,r,n,o)),!0;case"gotpointercapture":return l=o.pointerId,_r.set(l,pr(_r.get(l)||null,e,t,r,n,o)),!0}return!1}function zs(e){var t=wt(e.target);if(t!==null){var r=Lt(t);if(r!==null){if(t=r.tag,t===13){if(t=ks(r),t!==null){e.blockedOn=t,Bs(e.priority,function(){Ds(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=pl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);al=n,r.target.dispatchEvent(n),al=null}else return t=Zr(r),t!==null&&ei(t),e.blockedOn=r,!1;t.shift()}return!0}function Ki(e,t,r){wn(e)&&r.delete(t)}function md(){fl=!1,ot!==null&&wn(ot)&&(ot=null),lt!==null&&wn(lt)&&(lt=null),it!==null&&wn(it)&&(it=null),Dr.forEach(Ki),_r.forEach(Ki)}function mr(e,t){e.blockedOn===t&&(e.blockedOn=null,fl||(fl=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,md)))}function Br(e){function t(o){return mr(o,e)}if(0<un.length){mr(un[0],e);for(var r=1;r<un.length;r++){var n=un[r];n.blockedOn===e&&(n.blockedOn=null)}}for(ot!==null&&mr(ot,e),lt!==null&&mr(lt,e),it!==null&&mr(it,e),Dr.forEach(t),_r.forEach(t),r=0;r<et.length;r++)n=et[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<et.length&&(r=et[0],r.blockedOn===null);)zs(r),r.blockedOn===null&&et.shift()}var Kt=Ke.ReactCurrentBatchConfig,Bn=!0;function hd(e,t,r,n){var o=A,l=Kt.transition;Kt.transition=null;try{A=1,ti(e,t,r,n)}finally{A=o,Kt.transition=l}}function yd(e,t,r,n){var o=A,l=Kt.transition;Kt.transition=null;try{A=4,ti(e,t,r,n)}finally{A=o,Kt.transition=l}}function ti(e,t,r,n){if(Bn){var o=pl(e,t,r,n);if(o===null)Bo(e,t,n,zn,r),Xi(e,n);else if(pd(o,e,t,r,n))n.stopPropagation();else if(Xi(e,n),t&4&&-1<fd.indexOf(e)){for(;o!==null;){var l=Zr(o);if(l!==null&&As(l),l=pl(e,t,r,n),l===null&&Bo(e,t,n,zn,r),l===o)break;o=l}o!==null&&n.stopPropagation()}else Bo(e,t,n,null,r)}}var zn=null;function pl(e,t,r,n){if(zn=null,e=ql(n),e=wt(e),e!==null)if(t=Lt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ks(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zn=e,null}function Fs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nd()){case Zl:return 1;case Ns:return 4;case Dn:case od:return 16;case Es:return 536870912;default:return 16}default:return 16}}var rt=null,ri=null,Rn=null;function Ms(){if(Rn)return Rn;var e,t=ri,r=t.length,n,o="value"in rt?rt.value:rt.textContent,l=o.length;for(e=0;e<r&&t[e]===o[e];e++);var i=r-e;for(n=1;n<=i&&t[r-n]===o[l-n];n++);return Rn=o.slice(e,1<n?1-n:void 0)}function bn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cn(){return!0}function qi(){return!1}function Ce(e){function t(r,n,o,l,i){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?cn:qi,this.isPropagationStopped=qi,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=cn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=cn)},persist:function(){},isPersistent:cn}),t}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ni=Ce(ar),qr=W({},ar,{view:0,detail:0}),gd=Ce(qr),Io,jo,hr,oo=W({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hr&&(hr&&e.type==="mousemove"?(Io=e.screenX-hr.screenX,jo=e.screenY-hr.screenY):jo=Io=0,hr=e),Io)},movementY:function(e){return"movementY"in e?e.movementY:jo}}),Zi=Ce(oo),xd=W({},oo,{dataTransfer:0}),vd=Ce(xd),Sd=W({},qr,{relatedTarget:0}),No=Ce(Sd),Cd=W({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),wd=Ce(Cd),Rd=W({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bd=Ce(Rd),Td=W({},ar,{data:0}),Ji=Ce(Td),kd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Od={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Id={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Id[e])?!!t[e]:!1}function oi(){return jd}var Nd=W({},qr,{key:function(e){if(e.key){var t=kd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Od[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oi,charCode:function(e){return e.type==="keypress"?bn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ed=Ce(Nd),Pd=W({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ea=Ce(Pd),Ld=W({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oi}),Ad=Ce(Ld),Dd=W({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),_d=Ce(Dd),Bd=W({},oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zd=Ce(Bd),Fd=[9,13,27,32],li=Ye&&"CompositionEvent"in window,Tr=null;Ye&&"documentMode"in document&&(Tr=document.documentMode);var Md=Ye&&"TextEvent"in window&&!Tr,Us=Ye&&(!li||Tr&&8<Tr&&11>=Tr),ta=" ",ra=!1;function $s(e,t){switch(e){case"keyup":return Fd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ws(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bt=!1;function Ud(e,t){switch(e){case"compositionend":return Ws(t);case"keypress":return t.which!==32?null:(ra=!0,ta);case"textInput":return e=t.data,e===ta&&ra?null:e;default:return null}}function $d(e,t){if(Bt)return e==="compositionend"||!li&&$s(e,t)?(e=Ms(),Rn=ri=rt=null,Bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Us&&t.locale!=="ko"?null:t.data;default:return null}}var Wd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wd[e.type]:t==="textarea"}function Hs(e,t,r,n){Cs(n),t=Fn(t,"onChange"),0<t.length&&(r=new ni("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var kr=null,zr=null;function Hd(e){tu(e,0)}function lo(e){var t=Mt(e);if(ms(t))return e}function Vd(e,t){if(e==="change")return t}var Vs=!1;if(Ye){var Eo;if(Ye){var Po="oninput"in document;if(!Po){var oa=document.createElement("div");oa.setAttribute("oninput","return;"),Po=typeof oa.oninput=="function"}Eo=Po}else Eo=!1;Vs=Eo&&(!document.documentMode||9<document.documentMode)}function la(){kr&&(kr.detachEvent("onpropertychange",Ys),zr=kr=null)}function Ys(e){if(e.propertyName==="value"&&lo(zr)){var t=[];Hs(t,zr,e,ql(e)),Ts(Hd,t)}}function Yd(e,t,r){e==="focusin"?(la(),kr=t,zr=r,kr.attachEvent("onpropertychange",Ys)):e==="focusout"&&la()}function Qd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lo(zr)}function Gd(e,t){if(e==="click")return lo(t)}function Xd(e,t){if(e==="input"||e==="change")return lo(t)}function Kd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Kd;function Fr(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!Xo.call(t,o)||!De(e[o],t[o]))return!1}return!0}function ia(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function aa(e,t){var r=ia(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ia(r)}}function Qs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gs(){for(var e=window,t=Pn();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Pn(e.document)}return t}function ii(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qd(e){var t=Gs(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Qs(r.ownerDocument.documentElement,r)){if(n!==null&&ii(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,l=Math.min(n.start,o);n=n.end===void 0?l:Math.min(n.end,o),!e.extend&&l>n&&(o=n,n=l,l=o),o=aa(r,l);var i=aa(r,n);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zd=Ye&&"documentMode"in document&&11>=document.documentMode,zt=null,ml=null,Or=null,hl=!1;function sa(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;hl||zt==null||zt!==Pn(n)||(n=zt,"selectionStart"in n&&ii(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Or&&Fr(Or,n)||(Or=n,n=Fn(ml,"onSelect"),0<n.length&&(t=new ni("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=zt)))}function dn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Ft={animationend:dn("Animation","AnimationEnd"),animationiteration:dn("Animation","AnimationIteration"),animationstart:dn("Animation","AnimationStart"),transitionend:dn("Transition","TransitionEnd")},Lo={},Xs={};Ye&&(Xs=document.createElement("div").style,"AnimationEvent"in window||(delete Ft.animationend.animation,delete Ft.animationiteration.animation,delete Ft.animationstart.animation),"TransitionEvent"in window||delete Ft.transitionend.transition);function io(e){if(Lo[e])return Lo[e];if(!Ft[e])return e;var t=Ft[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Xs)return Lo[e]=t[r];return e}var Ks=io("animationend"),qs=io("animationiteration"),Zs=io("animationstart"),Js=io("transitionend"),eu=new Map,ua="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){eu.set(e,t),Pt(t,[e])}for(var Ao=0;Ao<ua.length;Ao++){var Do=ua[Ao],Jd=Do.toLowerCase(),ef=Do[0].toUpperCase()+Do.slice(1);ht(Jd,"on"+ef)}ht(Ks,"onAnimationEnd");ht(qs,"onAnimationIteration");ht(Zs,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(Js,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tf=new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));function ca(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Jc(n,t,void 0,e),e.currentTarget=null}function tu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var i=n.length-1;0<=i;i--){var s=n[i],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==l&&o.isPropagationStopped())break e;ca(o,s,c),l=u}else for(i=0;i<n.length;i++){if(s=n[i],u=s.instance,c=s.currentTarget,s=s.listener,u!==l&&o.isPropagationStopped())break e;ca(o,s,c),l=u}}}if(An)throw e=cl,An=!1,cl=null,e}function _(e,t){var r=t[Sl];r===void 0&&(r=t[Sl]=new Set);var n=e+"__bubble";r.has(n)||(ru(t,e,2,!1),r.add(n))}function _o(e,t,r){var n=0;t&&(n|=4),ru(r,e,n,t)}var fn="_reactListening"+Math.random().toString(36).slice(2);function Mr(e){if(!e[fn]){e[fn]=!0,us.forEach(function(r){r!=="selectionchange"&&(tf.has(r)||_o(r,!1,e),_o(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fn]||(t[fn]=!0,_o("selectionchange",!1,t))}}function ru(e,t,r,n){switch(Fs(t)){case 1:var o=hd;break;case 4:o=yd;break;default:o=ti}r=o.bind(null,t,r,e),o=void 0,!ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Bo(e,t,r,n,o){var l=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var s=n.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=n.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;i=i.return}for(;s!==null;){if(i=wt(s),i===null)return;if(u=i.tag,u===5||u===6){n=l=i;continue e}s=s.parentNode}}n=n.return}Ts(function(){var c=l,p=ql(r),h=[];e:{var y=eu.get(e);if(y!==void 0){var C=ni,g=e;switch(e){case"keypress":if(bn(r)===0)break e;case"keydown":case"keyup":C=Ed;break;case"focusin":g="focus",C=No;break;case"focusout":g="blur",C=No;break;case"beforeblur":case"afterblur":C=No;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Zi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=vd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Ad;break;case Ks:case qs:case Zs:C=wd;break;case Js:C=_d;break;case"scroll":C=gd;break;case"wheel":C=zd;break;case"copy":case"cut":case"paste":C=bd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=ea}var x=(t&4)!==0,N=!x&&e==="scroll",f=x?y!==null?y+"Capture":null:y;x=[];for(var d=c,m;d!==null;){m=d;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,f!==null&&(v=Ar(d,f),v!=null&&x.push(Ur(d,v,m)))),N)break;d=d.return}0<x.length&&(y=new C(y,g,null,r,p),h.push({event:y,listeners:x}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",y&&r!==al&&(g=r.relatedTarget||r.fromElement)&&(wt(g)||g[Qe]))break e;if((C||y)&&(y=p.window===p?p:(y=p.ownerDocument)?y.defaultView||y.parentWindow:window,C?(g=r.relatedTarget||r.toElement,C=c,g=g?wt(g):null,g!==null&&(N=Lt(g),g!==N||g.tag!==5&&g.tag!==6)&&(g=null)):(C=null,g=c),C!==g)){if(x=Zi,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=ea,v="onPointerLeave",f="onPointerEnter",d="pointer"),N=C==null?y:Mt(C),m=g==null?y:Mt(g),y=new x(v,d+"leave",C,r,p),y.target=N,y.relatedTarget=m,v=null,wt(p)===c&&(x=new x(f,d+"enter",g,r,p),x.target=m,x.relatedTarget=N,v=x),N=v,C&&g)t:{for(x=C,f=g,d=0,m=x;m;m=At(m))d++;for(m=0,v=f;v;v=At(v))m++;for(;0<d-m;)x=At(x),d--;for(;0<m-d;)f=At(f),m--;for(;d--;){if(x===f||f!==null&&x===f.alternate)break t;x=At(x),f=At(f)}x=null}else x=null;C!==null&&da(h,y,C,x,!1),g!==null&&N!==null&&da(h,N,g,x,!0)}}e:{if(y=c?Mt(c):window,C=y.nodeName&&y.nodeName.toLowerCase(),C==="select"||C==="input"&&y.type==="file")var R=Vd;else if(na(y))if(Vs)R=Xd;else{R=Qd;var T=Yd}else(C=y.nodeName)&&C.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(R=Gd);if(R&&(R=R(e,c))){Hs(h,R,r,p);break e}T&&T(e,y,c),e==="focusout"&&(T=y._wrapperState)&&T.controlled&&y.type==="number"&&rl(y,"number",y.value)}switch(T=c?Mt(c):window,e){case"focusin":(na(T)||T.contentEditable==="true")&&(zt=T,ml=c,Or=null);break;case"focusout":Or=ml=zt=null;break;case"mousedown":hl=!0;break;case"contextmenu":case"mouseup":case"dragend":hl=!1,sa(h,r,p);break;case"selectionchange":if(Zd)break;case"keydown":case"keyup":sa(h,r,p)}var k;if(li)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Bt?$s(e,r)&&(O="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(O="onCompositionStart");O&&(Us&&r.locale!=="ko"&&(Bt||O!=="onCompositionStart"?O==="onCompositionEnd"&&Bt&&(k=Ms()):(rt=p,ri="value"in rt?rt.value:rt.textContent,Bt=!0)),T=Fn(c,O),0<T.length&&(O=new Ji(O,e,null,r,p),h.push({event:O,listeners:T}),k?O.data=k:(k=Ws(r),k!==null&&(O.data=k)))),(k=Md?Ud(e,r):$d(e,r))&&(c=Fn(c,"onBeforeInput"),0<c.length&&(p=new Ji("onBeforeInput","beforeinput",null,r,p),h.push({event:p,listeners:c}),p.data=k))}tu(h,t)})}function Ur(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Fn(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Ar(e,r),l!=null&&n.unshift(Ur(e,l,o)),l=Ar(e,t),l!=null&&n.push(Ur(e,l,o))),e=e.return}return n}function At(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function da(e,t,r,n,o){for(var l=t._reactName,i=[];r!==null&&r!==n;){var s=r,u=s.alternate,c=s.stateNode;if(u!==null&&u===n)break;s.tag===5&&c!==null&&(s=c,o?(u=Ar(r,l),u!=null&&i.unshift(Ur(r,u,s))):o||(u=Ar(r,l),u!=null&&i.push(Ur(r,u,s)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var rf=/\r\n?/g,nf=/\u0000|\uFFFD/g;function fa(e){return(typeof e=="string"?e:""+e).replace(rf,`
`).replace(nf,"")}function pn(e,t,r){if(t=fa(t),fa(e)!==t&&r)throw Error(S(425))}function Mn(){}var yl=null,gl=null;function xl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vl=typeof setTimeout=="function"?setTimeout:void 0,of=typeof clearTimeout=="function"?clearTimeout:void 0,pa=typeof Promise=="function"?Promise:void 0,lf=typeof queueMicrotask=="function"?queueMicrotask:typeof pa<"u"?function(e){return pa.resolve(null).then(e).catch(af)}:vl;function af(e){setTimeout(function(){throw e})}function zo(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Br(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Br(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ma(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var sr=Math.random().toString(36).slice(2),ze="__reactFiber$"+sr,$r="__reactProps$"+sr,Qe="__reactContainer$"+sr,Sl="__reactEvents$"+sr,sf="__reactListeners$"+sr,uf="__reactHandles$"+sr;function wt(e){var t=e[ze];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Qe]||r[ze]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ma(e);e!==null;){if(r=e[ze])return r;e=ma(e)}return t}e=r,r=e.parentNode}return null}function Zr(e){return e=e[ze]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ao(e){return e[$r]||null}var Cl=[],Ut=-1;function yt(e){return{current:e}}function z(e){0>Ut||(e.current=Cl[Ut],Cl[Ut]=null,Ut--)}function D(e,t){Ut++,Cl[Ut]=e.current,e.current=t}var pt={},ie=yt(pt),pe=yt(!1),Ot=pt;function er(e,t){var r=e.type.contextTypes;if(!r)return pt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in r)o[l]=t[l];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function me(e){return e=e.childContextTypes,e!=null}function Un(){z(pe),z(ie)}function ha(e,t,r){if(ie.current!==pt)throw Error(S(168));D(ie,t),D(pe,r)}function nu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(S(108,Yc(e)||"Unknown",o));return W({},r,n)}function $n(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,Ot=ie.current,D(ie,e),D(pe,pe.current),!0}function ya(e,t,r){var n=e.stateNode;if(!n)throw Error(S(169));r?(e=nu(e,t,Ot),n.__reactInternalMemoizedMergedChildContext=e,z(pe),z(ie),D(ie,e)):z(pe),D(pe,r)}var $e=null,so=!1,Fo=!1;function ou(e){$e===null?$e=[e]:$e.push(e)}function cf(e){so=!0,ou(e)}function gt(){if(!Fo&&$e!==null){Fo=!0;var e=0,t=A;try{var r=$e;for(A=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}$e=null,so=!1}catch(o){throw $e!==null&&($e=$e.slice(e+1)),js(Zl,gt),o}finally{A=t,Fo=!1}}return null}var $t=[],Wt=0,Wn=null,Hn=0,we=[],Re=0,It=null,We=1,He="";function St(e,t){$t[Wt++]=Hn,$t[Wt++]=Wn,Wn=e,Hn=t}function lu(e,t,r){we[Re++]=We,we[Re++]=He,we[Re++]=It,It=e;var n=We;e=He;var o=32-Le(n)-1;n&=~(1<<o),r+=1;var l=32-Le(t)+o;if(30<l){var i=o-o%5;l=(n&(1<<i)-1).toString(32),n>>=i,o-=i,We=1<<32-Le(t)+o|r<<o|n,He=l+e}else We=1<<l|r<<o|n,He=e}function ai(e){e.return!==null&&(St(e,1),lu(e,1,0))}function si(e){for(;e===Wn;)Wn=$t[--Wt],$t[Wt]=null,Hn=$t[--Wt],$t[Wt]=null;for(;e===It;)It=we[--Re],we[Re]=null,He=we[--Re],we[Re]=null,We=we[--Re],we[Re]=null}var xe=null,ge=null,F=!1,Pe=null;function iu(e,t){var r=be(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ga(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ge=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=It!==null?{id:We,overflow:He}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=be(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,xe=e,ge=null,!0):!1;default:return!1}}function wl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rl(e){if(F){var t=ge;if(t){var r=t;if(!ga(e,t)){if(wl(e))throw Error(S(418));t=at(r.nextSibling);var n=xe;t&&ga(e,t)?iu(n,r):(e.flags=e.flags&-4097|2,F=!1,xe=e)}}else{if(wl(e))throw Error(S(418));e.flags=e.flags&-4097|2,F=!1,xe=e}}}function xa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function mn(e){if(e!==xe)return!1;if(!F)return xa(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xl(e.type,e.memoizedProps)),t&&(t=ge)){if(wl(e))throw au(),Error(S(418));for(;t;)iu(e,t),t=at(t.nextSibling)}if(xa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ge=at(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=xe?at(e.stateNode.nextSibling):null;return!0}function au(){for(var e=ge;e;)e=at(e.nextSibling)}function tr(){ge=xe=null,F=!1}function ui(e){Pe===null?Pe=[e]:Pe.push(e)}var df=Ke.ReactCurrentBatchConfig;function yr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(S(309));var n=r.stateNode}if(!n)throw Error(S(147,e));var o=n,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!r._owner)throw Error(S(290,e))}return e}function hn(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function va(e){var t=e._init;return t(e._payload)}function su(e){function t(f,d){if(e){var m=f.deletions;m===null?(f.deletions=[d],f.flags|=16):m.push(d)}}function r(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function n(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=dt(f,d),f.index=0,f.sibling=null,f}function l(f,d,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<d?(f.flags|=2,d):m):(f.flags|=2,d)):(f.flags|=1048576,d)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,m,v){return d===null||d.tag!==6?(d=Yo(m,f.mode,v),d.return=f,d):(d=o(d,m),d.return=f,d)}function u(f,d,m,v){var R=m.type;return R===_t?p(f,d,m.props.children,v,m.key):d!==null&&(d.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ze&&va(R)===d.type)?(v=o(d,m.props),v.ref=yr(f,d,m),v.return=f,v):(v=En(m.type,m.key,m.props,null,f.mode,v),v.ref=yr(f,d,m),v.return=f,v)}function c(f,d,m,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Qo(m,f.mode,v),d.return=f,d):(d=o(d,m.children||[]),d.return=f,d)}function p(f,d,m,v,R){return d===null||d.tag!==7?(d=kt(m,f.mode,v,R),d.return=f,d):(d=o(d,m),d.return=f,d)}function h(f,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Yo(""+d,f.mode,m),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case nn:return m=En(d.type,d.key,d.props,null,f.mode,m),m.ref=yr(f,null,d),m.return=f,m;case Dt:return d=Qo(d,f.mode,m),d.return=f,d;case Ze:var v=d._init;return h(f,v(d._payload),m)}if(Sr(d)||dr(d))return d=kt(d,f.mode,m,null),d.return=f,d;hn(f,d)}return null}function y(f,d,m,v){var R=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return R!==null?null:s(f,d,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case nn:return m.key===R?u(f,d,m,v):null;case Dt:return m.key===R?c(f,d,m,v):null;case Ze:return R=m._init,y(f,d,R(m._payload),v)}if(Sr(m)||dr(m))return R!==null?null:p(f,d,m,v,null);hn(f,m)}return null}function C(f,d,m,v,R){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(m)||null,s(d,f,""+v,R);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case nn:return f=f.get(v.key===null?m:v.key)||null,u(d,f,v,R);case Dt:return f=f.get(v.key===null?m:v.key)||null,c(d,f,v,R);case Ze:var T=v._init;return C(f,d,m,T(v._payload),R)}if(Sr(v)||dr(v))return f=f.get(m)||null,p(d,f,v,R,null);hn(d,v)}return null}function g(f,d,m,v){for(var R=null,T=null,k=d,O=d=0,V=null;k!==null&&O<m.length;O++){k.index>O?(V=k,k=null):V=k.sibling;var P=y(f,k,m[O],v);if(P===null){k===null&&(k=V);break}e&&k&&P.alternate===null&&t(f,k),d=l(P,d,O),T===null?R=P:T.sibling=P,T=P,k=V}if(O===m.length)return r(f,k),F&&St(f,O),R;if(k===null){for(;O<m.length;O++)k=h(f,m[O],v),k!==null&&(d=l(k,d,O),T===null?R=k:T.sibling=k,T=k);return F&&St(f,O),R}for(k=n(f,k);O<m.length;O++)V=C(k,f,O,m[O],v),V!==null&&(e&&V.alternate!==null&&k.delete(V.key===null?O:V.key),d=l(V,d,O),T===null?R=V:T.sibling=V,T=V);return e&&k.forEach(function(Ie){return t(f,Ie)}),F&&St(f,O),R}function x(f,d,m,v){var R=dr(m);if(typeof R!="function")throw Error(S(150));if(m=R.call(m),m==null)throw Error(S(151));for(var T=R=null,k=d,O=d=0,V=null,P=m.next();k!==null&&!P.done;O++,P=m.next()){k.index>O?(V=k,k=null):V=k.sibling;var Ie=y(f,k,P.value,v);if(Ie===null){k===null&&(k=V);break}e&&k&&Ie.alternate===null&&t(f,k),d=l(Ie,d,O),T===null?R=Ie:T.sibling=Ie,T=Ie,k=V}if(P.done)return r(f,k),F&&St(f,O),R;if(k===null){for(;!P.done;O++,P=m.next())P=h(f,P.value,v),P!==null&&(d=l(P,d,O),T===null?R=P:T.sibling=P,T=P);return F&&St(f,O),R}for(k=n(f,k);!P.done;O++,P=m.next())P=C(k,f,O,P.value,v),P!==null&&(e&&P.alternate!==null&&k.delete(P.key===null?O:P.key),d=l(P,d,O),T===null?R=P:T.sibling=P,T=P);return e&&k.forEach(function(ur){return t(f,ur)}),F&&St(f,O),R}function N(f,d,m,v){if(typeof m=="object"&&m!==null&&m.type===_t&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case nn:e:{for(var R=m.key,T=d;T!==null;){if(T.key===R){if(R=m.type,R===_t){if(T.tag===7){r(f,T.sibling),d=o(T,m.props.children),d.return=f,f=d;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ze&&va(R)===T.type){r(f,T.sibling),d=o(T,m.props),d.ref=yr(f,T,m),d.return=f,f=d;break e}r(f,T);break}else t(f,T);T=T.sibling}m.type===_t?(d=kt(m.props.children,f.mode,v,m.key),d.return=f,f=d):(v=En(m.type,m.key,m.props,null,f.mode,v),v.ref=yr(f,d,m),v.return=f,f=v)}return i(f);case Dt:e:{for(T=m.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){r(f,d.sibling),d=o(d,m.children||[]),d.return=f,f=d;break e}else{r(f,d);break}else t(f,d);d=d.sibling}d=Qo(m,f.mode,v),d.return=f,f=d}return i(f);case Ze:return T=m._init,N(f,d,T(m._payload),v)}if(Sr(m))return g(f,d,m,v);if(dr(m))return x(f,d,m,v);hn(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(r(f,d.sibling),d=o(d,m),d.return=f,f=d):(r(f,d),d=Yo(m,f.mode,v),d.return=f,f=d),i(f)):r(f,d)}return N}var rr=su(!0),uu=su(!1),Vn=yt(null),Yn=null,Ht=null,ci=null;function di(){ci=Ht=Yn=null}function fi(e){var t=Vn.current;z(Vn),e._currentValue=t}function bl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function qt(e,t){Yn=e,ci=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function ke(e){var t=e._currentValue;if(ci!==e)if(e={context:e,memoizedValue:t,next:null},Ht===null){if(Yn===null)throw Error(S(308));Ht=e,Yn.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return t}var Rt=null;function pi(e){Rt===null?Rt=[e]:Rt.push(e)}function cu(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,pi(t)):(r.next=o.next,o.next=r),t.interleaved=r,Ge(e,n)}function Ge(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Je=!1;function mi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function du(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ve(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function st(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,L&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Ge(e,r)}return o=n.interleaved,o===null?(t.next=t,pi(n)):(t.next=o.next,o.next=t),n.interleaved=t,Ge(e,r)}function Tn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Jl(e,r)}}function Sa(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?o=l=i:l=l.next=i,r=r.next}while(r!==null);l===null?o=l=t:l=l.next=t}else o=l=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Qn(e,t,r,n){var o=e.updateQueue;Je=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,c=u.next;u.next=null,i===null?l=c:i.next=c,i=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==i&&(s===null?p.firstBaseUpdate=c:s.next=c,p.lastBaseUpdate=u))}if(l!==null){var h=o.baseState;i=0,p=c=u=null,s=l;do{var y=s.lane,C=s.eventTime;if((n&y)===y){p!==null&&(p=p.next={eventTime:C,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,x=s;switch(y=t,C=r,x.tag){case 1:if(g=x.payload,typeof g=="function"){h=g.call(C,h,y);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,y=typeof g=="function"?g.call(C,h,y):g,y==null)break e;h=W({},h,y);break e;case 2:Je=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=o.effects,y===null?o.effects=[s]:y.push(s))}else C={eventTime:C,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(c=p=C,u=h):p=p.next=C,i|=y;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;y=s,s=y.next,y.next=null,o.lastBaseUpdate=y,o.shared.pending=null}}while(!0);if(p===null&&(u=h),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Nt|=i,e.lanes=i,e.memoizedState=h}}function Ca(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(S(191,o));o.call(n)}}}var Jr={},Me=yt(Jr),Wr=yt(Jr),Hr=yt(Jr);function bt(e){if(e===Jr)throw Error(S(174));return e}function hi(e,t){switch(D(Hr,t),D(Wr,e),D(Me,Jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ol(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ol(t,e)}z(Me),D(Me,t)}function nr(){z(Me),z(Wr),z(Hr)}function fu(e){bt(Hr.current);var t=bt(Me.current),r=ol(t,e.type);t!==r&&(D(Wr,e),D(Me,r))}function yi(e){Wr.current===e&&(z(Me),z(Wr))}var M=yt(0);function Gn(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mo=[];function gi(){for(var e=0;e<Mo.length;e++)Mo[e]._workInProgressVersionPrimary=null;Mo.length=0}var kn=Ke.ReactCurrentDispatcher,Uo=Ke.ReactCurrentBatchConfig,jt=0,$=null,X=null,Z=null,Xn=!1,Ir=!1,Vr=0,ff=0;function ne(){throw Error(S(321))}function xi(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!De(e[r],t[r]))return!1;return!0}function vi(e,t,r,n,o,l){if(jt=l,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,kn.current=e===null||e.memoizedState===null?yf:gf,e=r(n,o),Ir){l=0;do{if(Ir=!1,Vr=0,25<=l)throw Error(S(301));l+=1,Z=X=null,t.updateQueue=null,kn.current=xf,e=r(n,o)}while(Ir)}if(kn.current=Kn,t=X!==null&&X.next!==null,jt=0,Z=X=$=null,Xn=!1,t)throw Error(S(300));return e}function Si(){var e=Vr!==0;return Vr=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?$.memoizedState=Z=e:Z=Z.next=e,Z}function Oe(){if(X===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=Z===null?$.memoizedState:Z.next;if(t!==null)Z=t,X=e;else{if(e===null)throw Error(S(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},Z===null?$.memoizedState=Z=e:Z=Z.next=e}return Z}function Yr(e,t){return typeof t=="function"?t(e):t}function $o(e){var t=Oe(),r=t.queue;if(r===null)throw Error(S(311));r.lastRenderedReducer=e;var n=X,o=n.baseQueue,l=r.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}n.baseQueue=o=l,r.pending=null}if(o!==null){l=o.next,n=n.baseState;var s=i=null,u=null,c=l;do{var p=c.lane;if((jt&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=h,i=n):u=u.next=h,$.lanes|=p,Nt|=p}c=c.next}while(c!==null&&c!==l);u===null?i=n:u.next=s,De(n,t.memoizedState)||(fe=!0),t.memoizedState=n,t.baseState=i,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do l=o.lane,$.lanes|=l,Nt|=l,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Wo(e){var t=Oe(),r=t.queue;if(r===null)throw Error(S(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,l=t.memoizedState;if(o!==null){r.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);De(l,t.memoizedState)||(fe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,n]}function pu(){}function mu(e,t){var r=$,n=Oe(),o=t(),l=!De(n.memoizedState,o);if(l&&(n.memoizedState=o,fe=!0),n=n.queue,Ci(gu.bind(null,r,n,e),[e]),n.getSnapshot!==t||l||Z!==null&&Z.memoizedState.tag&1){if(r.flags|=2048,Qr(9,yu.bind(null,r,n,o,t),void 0,null),J===null)throw Error(S(349));jt&30||hu(r,t,o)}return o}function hu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function yu(e,t,r,n){t.value=r,t.getSnapshot=n,xu(t)&&vu(e)}function gu(e,t,r){return r(function(){xu(t)&&vu(e)})}function xu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!De(e,r)}catch{return!0}}function vu(e){var t=Ge(e,1);t!==null&&Ae(t,e,1,-1)}function wa(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:e},t.queue=e,e=e.dispatch=hf.bind(null,$,e),[t.memoizedState,e]}function Qr(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Su(){return Oe().memoizedState}function On(e,t,r,n){var o=Be();$.flags|=e,o.memoizedState=Qr(1|t,r,void 0,n===void 0?null:n)}function uo(e,t,r,n){var o=Oe();n=n===void 0?null:n;var l=void 0;if(X!==null){var i=X.memoizedState;if(l=i.destroy,n!==null&&xi(n,i.deps)){o.memoizedState=Qr(t,r,l,n);return}}$.flags|=e,o.memoizedState=Qr(1|t,r,l,n)}function Ra(e,t){return On(8390656,8,e,t)}function Ci(e,t){return uo(2048,8,e,t)}function Cu(e,t){return uo(4,2,e,t)}function wu(e,t){return uo(4,4,e,t)}function Ru(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bu(e,t,r){return r=r!=null?r.concat([e]):null,uo(4,4,Ru.bind(null,t,e),r)}function wi(){}function Tu(e,t){var r=Oe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&xi(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function ku(e,t){var r=Oe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&xi(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Ou(e,t,r){return jt&21?(De(r,t)||(r=Ps(),$.lanes|=r,Nt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=r)}function pf(e,t){var r=A;A=r!==0&&4>r?r:4,e(!0);var n=Uo.transition;Uo.transition={};try{e(!1),t()}finally{A=r,Uo.transition=n}}function Iu(){return Oe().memoizedState}function mf(e,t,r){var n=ct(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},ju(e))Nu(t,r);else if(r=cu(e,t,r,n),r!==null){var o=se();Ae(r,e,n,o),Eu(r,t,n)}}function hf(e,t,r){var n=ct(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(ju(e))Nu(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,r);if(o.hasEagerState=!0,o.eagerState=s,De(s,i)){var u=t.interleaved;u===null?(o.next=o,pi(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}r=cu(e,t,o,n),r!==null&&(o=se(),Ae(r,e,n,o),Eu(r,t,n))}}function ju(e){var t=e.alternate;return e===$||t!==null&&t===$}function Nu(e,t){Ir=Xn=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Eu(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Jl(e,r)}}var Kn={readContext:ke,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},yf={readContext:ke,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:ke,useEffect:Ra,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,On(4194308,4,Ru.bind(null,t,e),r)},useLayoutEffect:function(e,t){return On(4194308,4,e,t)},useInsertionEffect:function(e,t){return On(4,2,e,t)},useMemo:function(e,t){var r=Be();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Be();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=mf.bind(null,$,e),[n.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:wa,useDebugValue:wi,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=wa(!1),t=e[0];return e=pf.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=$,o=Be();if(F){if(r===void 0)throw Error(S(407));r=r()}else{if(r=t(),J===null)throw Error(S(349));jt&30||hu(n,t,r)}o.memoizedState=r;var l={value:r,getSnapshot:t};return o.queue=l,Ra(gu.bind(null,n,l,e),[e]),n.flags|=2048,Qr(9,yu.bind(null,n,l,r,t),void 0,null),r},useId:function(){var e=Be(),t=J.identifierPrefix;if(F){var r=He,n=We;r=(n&~(1<<32-Le(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Vr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=ff++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gf={readContext:ke,useCallback:Tu,useContext:ke,useEffect:Ci,useImperativeHandle:bu,useInsertionEffect:Cu,useLayoutEffect:wu,useMemo:ku,useReducer:$o,useRef:Su,useState:function(){return $o(Yr)},useDebugValue:wi,useDeferredValue:function(e){var t=Oe();return Ou(t,X.memoizedState,e)},useTransition:function(){var e=$o(Yr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:pu,useSyncExternalStore:mu,useId:Iu,unstable_isNewReconciler:!1},xf={readContext:ke,useCallback:Tu,useContext:ke,useEffect:Ci,useImperativeHandle:bu,useInsertionEffect:Cu,useLayoutEffect:wu,useMemo:ku,useReducer:Wo,useRef:Su,useState:function(){return Wo(Yr)},useDebugValue:wi,useDeferredValue:function(e){var t=Oe();return X===null?t.memoizedState=e:Ou(t,X.memoizedState,e)},useTransition:function(){var e=Wo(Yr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:pu,useSyncExternalStore:mu,useId:Iu,unstable_isNewReconciler:!1};function Ne(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Tl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:W({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var co={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=se(),o=ct(e),l=Ve(n,o);l.payload=t,r!=null&&(l.callback=r),t=st(e,l,o),t!==null&&(Ae(t,e,o,n),Tn(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=se(),o=ct(e),l=Ve(n,o);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=st(e,l,o),t!==null&&(Ae(t,e,o,n),Tn(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=se(),n=ct(e),o=Ve(r,n);o.tag=2,t!=null&&(o.callback=t),t=st(e,o,n),t!==null&&(Ae(t,e,n,r),Tn(t,e,n))}};function ba(e,t,r,n,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,i):t.prototype&&t.prototype.isPureReactComponent?!Fr(r,n)||!Fr(o,l):!0}function Pu(e,t,r){var n=!1,o=pt,l=t.contextType;return typeof l=="object"&&l!==null?l=ke(l):(o=me(t)?Ot:ie.current,n=t.contextTypes,l=(n=n!=null)?er(e,o):pt),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=co,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ta(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&co.enqueueReplaceState(t,t.state,null)}function kl(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},mi(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=ke(l):(l=me(t)?Ot:ie.current,o.context=er(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Tl(e,t,l,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&co.enqueueReplaceState(o,o.state,null),Qn(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t){try{var r="",n=t;do r+=Vc(n),n=n.return;while(n);var o=r}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Ho(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ol(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var vf=typeof WeakMap=="function"?WeakMap:Map;function Lu(e,t,r){r=Ve(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Zn||(Zn=!0,Bl=n),Ol(e,t)},r}function Au(e,t,r){r=Ve(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){Ol(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){Ol(e,t),typeof n!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function ka(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new vf;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=Lf.bind(null,e,t,r),t.then(e,e))}function Oa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ia(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ve(-1,1),t.tag=2,st(r,t,1))),r.lanes|=1),e)}var Sf=Ke.ReactCurrentOwner,fe=!1;function ae(e,t,r,n){t.child=e===null?uu(t,null,r,n):rr(t,e.child,r,n)}function ja(e,t,r,n,o){r=r.render;var l=t.ref;return qt(t,o),n=vi(e,t,r,n,l,o),r=Si(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Xe(e,t,o)):(F&&r&&ai(t),t.flags|=1,ae(e,t,n,o),t.child)}function Na(e,t,r,n,o){if(e===null){var l=r.type;return typeof l=="function"&&!Ni(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,Du(e,t,l,n,o)):(e=En(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(r=r.compare,r=r!==null?r:Fr,r(i,n)&&e.ref===t.ref)return Xe(e,t,o)}return t.flags|=1,e=dt(l,n),e.ref=t.ref,e.return=t,t.child=e}function Du(e,t,r,n,o){if(e!==null){var l=e.memoizedProps;if(Fr(l,n)&&e.ref===t.ref)if(fe=!1,t.pendingProps=n=l,(e.lanes&o)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Xe(e,t,o)}return Il(e,t,r,n,o)}function _u(e,t,r){var n=t.pendingProps,o=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Yt,ye),ye|=r;else{if(!(r&1073741824))return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Yt,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:r,D(Yt,ye),ye|=n}else l!==null?(n=l.baseLanes|r,t.memoizedState=null):n=r,D(Yt,ye),ye|=n;return ae(e,t,o,r),t.child}function Bu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Il(e,t,r,n,o){var l=me(r)?Ot:ie.current;return l=er(t,l),qt(t,o),r=vi(e,t,r,n,l,o),n=Si(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Xe(e,t,o)):(F&&n&&ai(t),t.flags|=1,ae(e,t,r,o),t.child)}function Ea(e,t,r,n,o){if(me(r)){var l=!0;$n(t)}else l=!1;if(qt(t,o),t.stateNode===null)In(e,t),Pu(t,r,n),kl(t,r,n,o),n=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,c=r.contextType;typeof c=="object"&&c!==null?c=ke(c):(c=me(r)?Ot:ie.current,c=er(t,c));var p=r.getDerivedStateFromProps,h=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==n||u!==c)&&Ta(t,i,n,c),Je=!1;var y=t.memoizedState;i.state=y,Qn(t,n,i,o),u=t.memoizedState,s!==n||y!==u||pe.current||Je?(typeof p=="function"&&(Tl(t,r,p,n),u=t.memoizedState),(s=Je||ba(t,r,s,n,y,u,c))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),i.props=n,i.state=u,i.context=c,n=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,du(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ne(t.type,s),i.props=c,h=t.pendingProps,y=i.context,u=r.contextType,typeof u=="object"&&u!==null?u=ke(u):(u=me(r)?Ot:ie.current,u=er(t,u));var C=r.getDerivedStateFromProps;(p=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==h||y!==u)&&Ta(t,i,n,u),Je=!1,y=t.memoizedState,i.state=y,Qn(t,n,i,o);var g=t.memoizedState;s!==h||y!==g||pe.current||Je?(typeof C=="function"&&(Tl(t,r,C,n),g=t.memoizedState),(c=Je||ba(t,r,c,n,y,g,u)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,g,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,g,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=g),i.props=n,i.state=g,i.context=u,n=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),n=!1)}return jl(e,t,r,n,l,o)}function jl(e,t,r,n,o,l){Bu(e,t);var i=(t.flags&128)!==0;if(!n&&!i)return o&&ya(t,r,!1),Xe(e,t,l);n=t.stateNode,Sf.current=t;var s=i&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&i?(t.child=rr(t,e.child,null,l),t.child=rr(t,null,s,l)):ae(e,t,s,l),t.memoizedState=n.state,o&&ya(t,r,!0),t.child}function zu(e){var t=e.stateNode;t.pendingContext?ha(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ha(e,t.context,!1),hi(e,t.containerInfo)}function Pa(e,t,r,n,o){return tr(),ui(o),t.flags|=256,ae(e,t,r,n),t.child}var Nl={dehydrated:null,treeContext:null,retryLane:0};function El(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fu(e,t,r){var n=t.pendingProps,o=M.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),D(M,o&1),e===null)return Rl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=n.children,e=n.fallback,l?(n=t.mode,l=t.child,i={mode:"hidden",children:i},!(n&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=mo(i,n,0,null),e=kt(e,n,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=El(r),t.memoizedState=Nl,e):Ri(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Cf(e,t,i,n,s,o,r);if(l){l=n.fallback,i=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:n.children};return!(i&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=dt(o,u),n.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=dt(s,l):(l=kt(l,i,r,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,i=e.child.memoizedState,i=i===null?El(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~r,t.memoizedState=Nl,n}return l=e.child,e=l.sibling,n=dt(l,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Ri(e,t){return t=mo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yn(e,t,r,n){return n!==null&&ui(n),rr(t,e.child,null,r),e=Ri(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cf(e,t,r,n,o,l,i){if(r)return t.flags&256?(t.flags&=-257,n=Ho(Error(S(422))),yn(e,t,i,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=n.fallback,o=t.mode,n=mo({mode:"visible",children:n.children},o,0,null),l=kt(l,o,i,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,t.mode&1&&rr(t,e.child,null,i),t.child.memoizedState=El(i),t.memoizedState=Nl,l);if(!(t.mode&1))return yn(e,t,i,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var s=n.dgst;return n=s,l=Error(S(419)),n=Ho(l,n,void 0),yn(e,t,i,n)}if(s=(i&e.childLanes)!==0,fe||s){if(n=J,n!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Ge(e,o),Ae(n,e,o,-1))}return ji(),n=Ho(Error(S(421))),yn(e,t,i,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Af.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,ge=at(o.nextSibling),xe=t,F=!0,Pe=null,e!==null&&(we[Re++]=We,we[Re++]=He,we[Re++]=It,We=e.id,He=e.overflow,It=t),t=Ri(t,n.children),t.flags|=4096,t)}function La(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),bl(e.return,t,r)}function Vo(e,t,r,n,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=r,l.tailMode=o)}function Mu(e,t,r){var n=t.pendingProps,o=n.revealOrder,l=n.tail;if(ae(e,t,n.children,r),n=M.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&La(e,r,t);else if(e.tag===19)La(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(D(M,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&Gn(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Vo(t,!1,o,r,l);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Gn(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Vo(t,!0,r,null,l);break;case"together":Vo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function In(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Nt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,r=dt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=dt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function wf(e,t,r){switch(t.tag){case 3:zu(t),tr();break;case 5:fu(t);break;case 1:me(t.type)&&$n(t);break;case 4:hi(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;D(Vn,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(D(M,M.current&1),t.flags|=128,null):r&t.child.childLanes?Fu(e,t,r):(D(M,M.current&1),e=Xe(e,t,r),e!==null?e.sibling:null);D(M,M.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Mu(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),D(M,M.current),n)break;return null;case 22:case 23:return t.lanes=0,_u(e,t,r)}return Xe(e,t,r)}var Uu,Pl,$u,Wu;Uu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Pl=function(){};$u=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,bt(Me.current);var l=null;switch(r){case"input":o=el(e,o),n=el(e,n),l=[];break;case"select":o=W({},o,{value:void 0}),n=W({},n,{value:void 0}),l=[];break;case"textarea":o=nl(e,o),n=nl(e,n),l=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Mn)}ll(r,n);var i;r=null;for(c in o)if(!n.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(i in s)s.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Pr.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in n){var u=n[c];if(s=o!=null?o[c]:void 0,n.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(r||(r={}),r[i]=u[i])}else r||(l||(l=[]),l.push(c,r)),r=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Pr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&_("scroll",e),l||s===u||(l=[])):(l=l||[]).push(c,u))}r&&(l=l||[]).push("style",r);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};Wu=function(e,t,r,n){r!==n&&(t.flags|=4)};function gr(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Rf(e,t,r){var n=t.pendingProps;switch(si(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return me(t.type)&&Un(),oe(t),null;case 3:return n=t.stateNode,nr(),z(pe),z(ie),gi(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(mn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pe!==null&&(Ml(Pe),Pe=null))),Pl(e,t),oe(t),null;case 5:yi(t);var o=bt(Hr.current);if(r=t.type,e!==null&&t.stateNode!=null)$u(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(S(166));return oe(t),null}if(e=bt(Me.current),mn(t)){n=t.stateNode,r=t.type;var l=t.memoizedProps;switch(n[ze]=t,n[$r]=l,e=(t.mode&1)!==0,r){case"dialog":_("cancel",n),_("close",n);break;case"iframe":case"object":case"embed":_("load",n);break;case"video":case"audio":for(o=0;o<wr.length;o++)_(wr[o],n);break;case"source":_("error",n);break;case"img":case"image":case"link":_("error",n),_("load",n);break;case"details":_("toggle",n);break;case"input":$i(n,l),_("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},_("invalid",n);break;case"textarea":Hi(n,l),_("invalid",n)}ll(r,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?n.textContent!==s&&(l.suppressHydrationWarning!==!0&&pn(n.textContent,s,e),o=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&pn(n.textContent,s,e),o=["children",""+s]):Pr.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&_("scroll",n)}switch(r){case"input":on(n),Wi(n,l,!0);break;case"textarea":on(n),Vi(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=Mn)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gs(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=i.createElement(r,{is:n.is}):(e=i.createElement(r),r==="select"&&(i=e,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):e=i.createElementNS(e,r),e[ze]=t,e[$r]=n,Uu(e,t,!1,!1),t.stateNode=e;e:{switch(i=il(r,n),r){case"dialog":_("cancel",e),_("close",e),o=n;break;case"iframe":case"object":case"embed":_("load",e),o=n;break;case"video":case"audio":for(o=0;o<wr.length;o++)_(wr[o],e);o=n;break;case"source":_("error",e),o=n;break;case"img":case"image":case"link":_("error",e),_("load",e),o=n;break;case"details":_("toggle",e),o=n;break;case"input":$i(e,n),o=el(e,n),_("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=W({},n,{value:void 0}),_("invalid",e);break;case"textarea":Hi(e,n),o=nl(e,n),_("invalid",e);break;default:o=n}ll(r,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?Ss(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&xs(e,u)):l==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&Lr(e,u):typeof u=="number"&&Lr(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Pr.hasOwnProperty(l)?u!=null&&l==="onScroll"&&_("scroll",e):u!=null&&Ql(e,l,u,i))}switch(r){case"input":on(e),Wi(e,n,!1);break;case"textarea":on(e),Vi(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ft(n.value));break;case"select":e.multiple=!!n.multiple,l=n.value,l!=null?Qt(e,!!n.multiple,l,!1):n.defaultValue!=null&&Qt(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Mn)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Wu(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(S(166));if(r=bt(Hr.current),bt(Me.current),mn(t)){if(n=t.stateNode,r=t.memoizedProps,n[ze]=t,(l=n.nodeValue!==r)&&(e=xe,e!==null))switch(e.tag){case 3:pn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pn(n.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[ze]=t,t.stateNode=n}return oe(t),null;case 13:if(z(M),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&ge!==null&&t.mode&1&&!(t.flags&128))au(),tr(),t.flags|=98560,l=!1;else if(l=mn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[ze]=t}else tr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),l=!1}else Pe!==null&&(Ml(Pe),Pe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||M.current&1?K===0&&(K=3):ji())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return nr(),Pl(e,t),e===null&&Mr(t.stateNode.containerInfo),oe(t),null;case 10:return fi(t.type._context),oe(t),null;case 17:return me(t.type)&&Un(),oe(t),null;case 19:if(z(M),l=t.memoizedState,l===null)return oe(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)gr(l,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Gn(e),i!==null){for(t.flags|=128,gr(l,!1),n=i.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)l=r,e=n,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return D(M,M.current&1|2),t.child}e=e.sibling}l.tail!==null&&Q()>lr&&(t.flags|=128,n=!0,gr(l,!1),t.lanes=4194304)}else{if(!n)if(e=Gn(i),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),gr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!F)return oe(t),null}else 2*Q()-l.renderingStartTime>lr&&r!==1073741824&&(t.flags|=128,n=!0,gr(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(r=l.last,r!==null?r.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Q(),t.sibling=null,r=M.current,D(M,n?r&1|2:r&1),t):(oe(t),null);case 22:case 23:return Ii(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?ye&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function bf(e,t){switch(si(t),t.tag){case 1:return me(t.type)&&Un(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nr(),z(pe),z(ie),gi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yi(t),null;case 13:if(z(M),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(M),null;case 4:return nr(),null;case 10:return fi(t.type._context),null;case 22:case 23:return Ii(),null;case 24:return null;default:return null}}var gn=!1,le=!1,Tf=typeof WeakSet=="function"?WeakSet:Set,w=null;function Vt(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){H(e,t,n)}else r.current=null}function Ll(e,t,r){try{r()}catch(n){H(e,t,n)}}var Aa=!1;function kf(e,t){if(yl=Bn,e=Gs(),ii(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var i=0,s=-1,u=-1,c=0,p=0,h=e,y=null;t:for(;;){for(var C;h!==r||o!==0&&h.nodeType!==3||(s=i+o),h!==l||n!==0&&h.nodeType!==3||(u=i+n),h.nodeType===3&&(i+=h.nodeValue.length),(C=h.firstChild)!==null;)y=h,h=C;for(;;){if(h===e)break t;if(y===r&&++c===o&&(s=i),y===l&&++p===n&&(u=i),(C=h.nextSibling)!==null)break;h=y,y=h.parentNode}h=C}r=s===-1||u===-1?null:{start:s,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(gl={focusedElem:e,selectionRange:r},Bn=!1,w=t;w!==null;)if(t=w,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,w=e;else for(;w!==null;){t=w;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,N=g.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ne(t.type,x),N);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){H(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,w=e;break}w=t.return}return g=Aa,Aa=!1,g}function jr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Ll(t,r,l)}o=o.next}while(o!==n)}}function fo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Al(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Hu(e){var t=e.alternate;t!==null&&(e.alternate=null,Hu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ze],delete t[$r],delete t[Sl],delete t[sf],delete t[uf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vu(e){return e.tag===5||e.tag===3||e.tag===4}function Da(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Dl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Mn));else if(n!==4&&(e=e.child,e!==null))for(Dl(e,t,r),e=e.sibling;e!==null;)Dl(e,t,r),e=e.sibling}function _l(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(_l(e,t,r),e=e.sibling;e!==null;)_l(e,t,r),e=e.sibling}var ee=null,Ee=!1;function qe(e,t,r){for(r=r.child;r!==null;)Yu(e,t,r),r=r.sibling}function Yu(e,t,r){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(no,r)}catch{}switch(r.tag){case 5:le||Vt(r,t);case 6:var n=ee,o=Ee;ee=null,qe(e,t,r),ee=n,Ee=o,ee!==null&&(Ee?(e=ee,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ee.removeChild(r.stateNode));break;case 18:ee!==null&&(Ee?(e=ee,r=r.stateNode,e.nodeType===8?zo(e.parentNode,r):e.nodeType===1&&zo(e,r),Br(e)):zo(ee,r.stateNode));break;case 4:n=ee,o=Ee,ee=r.stateNode.containerInfo,Ee=!0,qe(e,t,r),ee=n,Ee=o;break;case 0:case 11:case 14:case 15:if(!le&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Ll(r,t,i),o=o.next}while(o!==n)}qe(e,t,r);break;case 1:if(!le&&(Vt(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){H(r,t,s)}qe(e,t,r);break;case 21:qe(e,t,r);break;case 22:r.mode&1?(le=(n=le)||r.memoizedState!==null,qe(e,t,r),le=n):qe(e,t,r);break;default:qe(e,t,r)}}function _a(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Tf),t.forEach(function(n){var o=Df.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function je(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,Ee=!1;break e;case 3:ee=s.stateNode.containerInfo,Ee=!0;break e;case 4:ee=s.stateNode.containerInfo,Ee=!0;break e}s=s.return}if(ee===null)throw Error(S(160));Yu(l,i,o),ee=null,Ee=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){H(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qu(t,e),t=t.sibling}function Qu(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(je(t,e),_e(e),n&4){try{jr(3,e,e.return),fo(3,e)}catch(x){H(e,e.return,x)}try{jr(5,e,e.return)}catch(x){H(e,e.return,x)}}break;case 1:je(t,e),_e(e),n&512&&r!==null&&Vt(r,r.return);break;case 5:if(je(t,e),_e(e),n&512&&r!==null&&Vt(r,r.return),e.flags&32){var o=e.stateNode;try{Lr(o,"")}catch(x){H(e,e.return,x)}}if(n&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=r!==null?r.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&hs(o,l),il(s,i);var c=il(s,l);for(i=0;i<u.length;i+=2){var p=u[i],h=u[i+1];p==="style"?Ss(o,h):p==="dangerouslySetInnerHTML"?xs(o,h):p==="children"?Lr(o,h):Ql(o,p,h,c)}switch(s){case"input":tl(o,l);break;case"textarea":ys(o,l);break;case"select":var y=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var C=l.value;C!=null?Qt(o,!!l.multiple,C,!1):y!==!!l.multiple&&(l.defaultValue!=null?Qt(o,!!l.multiple,l.defaultValue,!0):Qt(o,!!l.multiple,l.multiple?[]:"",!1))}o[$r]=l}catch(x){H(e,e.return,x)}}break;case 6:if(je(t,e),_e(e),n&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(x){H(e,e.return,x)}}break;case 3:if(je(t,e),_e(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Br(t.containerInfo)}catch(x){H(e,e.return,x)}break;case 4:je(t,e),_e(e);break;case 13:je(t,e),_e(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(ki=Q())),n&4&&_a(e);break;case 22:if(p=r!==null&&r.memoizedState!==null,e.mode&1?(le=(c=le)||p,je(t,e),le=c):je(t,e),_e(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(w=e,p=e.child;p!==null;){for(h=w=p;w!==null;){switch(y=w,C=y.child,y.tag){case 0:case 11:case 14:case 15:jr(4,y,y.return);break;case 1:Vt(y,y.return);var g=y.stateNode;if(typeof g.componentWillUnmount=="function"){n=y,r=y.return;try{t=n,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(x){H(n,r,x)}}break;case 5:Vt(y,y.return);break;case 22:if(y.memoizedState!==null){za(h);continue}}C!==null?(C.return=y,w=C):za(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,u=h.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=vs("display",i))}catch(x){H(e,e.return,x)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){H(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:je(t,e),_e(e),n&4&&_a(e);break;case 21:break;default:je(t,e),_e(e)}}function _e(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Vu(r)){var n=r;break e}r=r.return}throw Error(S(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(Lr(o,""),n.flags&=-33);var l=Da(e);_l(e,l,o);break;case 3:case 4:var i=n.stateNode.containerInfo,s=Da(e);Dl(e,s,i);break;default:throw Error(S(161))}}catch(u){H(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Of(e,t,r){w=e,Gu(e)}function Gu(e,t,r){for(var n=(e.mode&1)!==0;w!==null;){var o=w,l=o.child;if(o.tag===22&&n){var i=o.memoizedState!==null||gn;if(!i){var s=o.alternate,u=s!==null&&s.memoizedState!==null||le;s=gn;var c=le;if(gn=i,(le=u)&&!c)for(w=o;w!==null;)i=w,u=i.child,i.tag===22&&i.memoizedState!==null?Fa(o):u!==null?(u.return=i,w=u):Fa(o);for(;l!==null;)w=l,Gu(l),l=l.sibling;w=o,gn=s,le=c}Ba(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,w=l):Ba(e)}}function Ba(e){for(;w!==null;){var t=w;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||fo(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!le)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:Ne(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ca(t,l,n);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Ca(t,i,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Br(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}le||t.flags&512&&Al(t)}catch(y){H(t,t.return,y)}}if(t===e){w=null;break}if(r=t.sibling,r!==null){r.return=t.return,w=r;break}w=t.return}}function za(e){for(;w!==null;){var t=w;if(t===e){w=null;break}var r=t.sibling;if(r!==null){r.return=t.return,w=r;break}w=t.return}}function Fa(e){for(;w!==null;){var t=w;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{fo(4,t)}catch(u){H(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(u){H(t,o,u)}}var l=t.return;try{Al(t)}catch(u){H(t,l,u)}break;case 5:var i=t.return;try{Al(t)}catch(u){H(t,i,u)}}}catch(u){H(t,t.return,u)}if(t===e){w=null;break}var s=t.sibling;if(s!==null){s.return=t.return,w=s;break}w=t.return}}var If=Math.ceil,qn=Ke.ReactCurrentDispatcher,bi=Ke.ReactCurrentOwner,Te=Ke.ReactCurrentBatchConfig,L=0,J=null,G=null,te=0,ye=0,Yt=yt(0),K=0,Gr=null,Nt=0,po=0,Ti=0,Nr=null,de=null,ki=0,lr=1/0,Ue=null,Zn=!1,Bl=null,ut=null,xn=!1,nt=null,Jn=0,Er=0,zl=null,jn=-1,Nn=0;function se(){return L&6?Q():jn!==-1?jn:jn=Q()}function ct(e){return e.mode&1?L&2&&te!==0?te&-te:df.transition!==null?(Nn===0&&(Nn=Ps()),Nn):(e=A,e!==0||(e=window.event,e=e===void 0?16:Fs(e.type)),e):1}function Ae(e,t,r,n){if(50<Er)throw Er=0,zl=null,Error(S(185));Kr(e,r,n),(!(L&2)||e!==J)&&(e===J&&(!(L&2)&&(po|=r),K===4&&tt(e,te)),he(e,n),r===1&&L===0&&!(t.mode&1)&&(lr=Q()+500,so&&gt()))}function he(e,t){var r=e.callbackNode;cd(e,t);var n=_n(e,e===J?te:0);if(n===0)r!==null&&Gi(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Gi(r),t===1)e.tag===0?cf(Ma.bind(null,e)):ou(Ma.bind(null,e)),lf(function(){!(L&6)&&gt()}),r=null;else{switch(Ls(n)){case 1:r=Zl;break;case 4:r=Ns;break;case 16:r=Dn;break;case 536870912:r=Es;break;default:r=Dn}r=rc(r,Xu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Xu(e,t){if(jn=-1,Nn=0,L&6)throw Error(S(327));var r=e.callbackNode;if(Zt()&&e.callbackNode!==r)return null;var n=_n(e,e===J?te:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=eo(e,n);else{t=n;var o=L;L|=2;var l=qu();(J!==e||te!==t)&&(Ue=null,lr=Q()+500,Tt(e,t));do try{Ef();break}catch(s){Ku(e,s)}while(!0);di(),qn.current=l,L=o,G!==null?t=0:(J=null,te=0,t=K)}if(t!==0){if(t===2&&(o=dl(e),o!==0&&(n=o,t=Fl(e,o))),t===1)throw r=Gr,Tt(e,0),tt(e,n),he(e,Q()),r;if(t===6)tt(e,n);else{if(o=e.current.alternate,!(n&30)&&!jf(o)&&(t=eo(e,n),t===2&&(l=dl(e),l!==0&&(n=l,t=Fl(e,l))),t===1))throw r=Gr,Tt(e,0),tt(e,n),he(e,Q()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(S(345));case 2:Ct(e,de,Ue);break;case 3:if(tt(e,n),(n&130023424)===n&&(t=ki+500-Q(),10<t)){if(_n(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){se(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=vl(Ct.bind(null,e,de,Ue),t);break}Ct(e,de,Ue);break;case 4:if(tt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var i=31-Le(n);l=1<<i,i=t[i],i>o&&(o=i),n&=~l}if(n=o,n=Q()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*If(n/1960))-n,10<n){e.timeoutHandle=vl(Ct.bind(null,e,de,Ue),n);break}Ct(e,de,Ue);break;case 5:Ct(e,de,Ue);break;default:throw Error(S(329))}}}return he(e,Q()),e.callbackNode===r?Xu.bind(null,e):null}function Fl(e,t){var r=Nr;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=eo(e,t),e!==2&&(t=de,de=r,t!==null&&Ml(t)),e}function Ml(e){de===null?de=e:de.push.apply(de,e)}function jf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],l=o.getSnapshot;o=o.value;try{if(!De(l(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~Ti,t&=~po,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Le(t),n=1<<r;e[r]=-1,t&=~n}}function Ma(e){if(L&6)throw Error(S(327));Zt();var t=_n(e,0);if(!(t&1))return he(e,Q()),null;var r=eo(e,t);if(e.tag!==0&&r===2){var n=dl(e);n!==0&&(t=n,r=Fl(e,n))}if(r===1)throw r=Gr,Tt(e,0),tt(e,t),he(e,Q()),r;if(r===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ct(e,de,Ue),he(e,Q()),null}function Oi(e,t){var r=L;L|=1;try{return e(t)}finally{L=r,L===0&&(lr=Q()+500,so&&gt())}}function Et(e){nt!==null&&nt.tag===0&&!(L&6)&&Zt();var t=L;L|=1;var r=Te.transition,n=A;try{if(Te.transition=null,A=1,e)return e()}finally{A=n,Te.transition=r,L=t,!(L&6)&&gt()}}function Ii(){ye=Yt.current,z(Yt)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,of(r)),G!==null)for(r=G.return;r!==null;){var n=r;switch(si(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Un();break;case 3:nr(),z(pe),z(ie),gi();break;case 5:yi(n);break;case 4:nr();break;case 13:z(M);break;case 19:z(M);break;case 10:fi(n.type._context);break;case 22:case 23:Ii()}r=r.return}if(J=e,G=e=dt(e.current,null),te=ye=t,K=0,Gr=null,Ti=po=Nt=0,de=Nr=null,Rt!==null){for(t=0;t<Rt.length;t++)if(r=Rt[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,l=r.pending;if(l!==null){var i=l.next;l.next=o,n.next=i}r.pending=n}Rt=null}return e}function Ku(e,t){do{var r=G;try{if(di(),kn.current=Kn,Xn){for(var n=$.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}Xn=!1}if(jt=0,Z=X=$=null,Ir=!1,Vr=0,bi.current=null,r===null||r.return===null){K=1,Gr=t,G=null;break}e:{var l=e,i=r.return,s=r,u=t;if(t=te,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=s,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var y=p.alternate;y?(p.updateQueue=y.updateQueue,p.memoizedState=y.memoizedState,p.lanes=y.lanes):(p.updateQueue=null,p.memoizedState=null)}var C=Oa(i);if(C!==null){C.flags&=-257,Ia(C,i,s,l,t),C.mode&1&&ka(l,c,t),t=C,u=c;var g=t.updateQueue;if(g===null){var x=new Set;x.add(u),t.updateQueue=x}else g.add(u);break e}else{if(!(t&1)){ka(l,c,t),ji();break e}u=Error(S(426))}}else if(F&&s.mode&1){var N=Oa(i);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Ia(N,i,s,l,t),ui(or(u,s));break e}}l=u=or(u,s),K!==4&&(K=2),Nr===null?Nr=[l]:Nr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Lu(l,u,t);Sa(l,f);break e;case 1:s=u;var d=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ut===null||!ut.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=Au(l,s,t);Sa(l,v);break e}}l=l.return}while(l!==null)}Ju(r)}catch(R){t=R,G===r&&r!==null&&(G=r=r.return);continue}break}while(!0)}function qu(){var e=qn.current;return qn.current=Kn,e===null?Kn:e}function ji(){(K===0||K===3||K===2)&&(K=4),J===null||!(Nt&268435455)&&!(po&268435455)||tt(J,te)}function eo(e,t){var r=L;L|=2;var n=qu();(J!==e||te!==t)&&(Ue=null,Tt(e,t));do try{Nf();break}catch(o){Ku(e,o)}while(!0);if(di(),L=r,qn.current=n,G!==null)throw Error(S(261));return J=null,te=0,K}function Nf(){for(;G!==null;)Zu(G)}function Ef(){for(;G!==null&&!td();)Zu(G)}function Zu(e){var t=tc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?Ju(e):G=t,bi.current=null}function Ju(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=bf(r,t),r!==null){r.flags&=32767,G=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,G=null;return}}else if(r=Rf(r,t,ye),r!==null){G=r;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);K===0&&(K=5)}function Ct(e,t,r){var n=A,o=Te.transition;try{Te.transition=null,A=1,Pf(e,t,r,n)}finally{Te.transition=o,A=n}return null}function Pf(e,t,r,n){do Zt();while(nt!==null);if(L&6)throw Error(S(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(dd(e,l),e===J&&(G=J=null,te=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||xn||(xn=!0,rc(Dn,function(){return Zt(),null})),l=(r.flags&15990)!==0,r.subtreeFlags&15990||l){l=Te.transition,Te.transition=null;var i=A;A=1;var s=L;L|=4,bi.current=null,kf(e,r),Qu(r,e),qd(gl),Bn=!!yl,gl=yl=null,e.current=r,Of(r),rd(),L=s,A=i,Te.transition=l}else e.current=r;if(xn&&(xn=!1,nt=e,Jn=o),l=e.pendingLanes,l===0&&(ut=null),ld(r.stateNode),he(e,Q()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(Zn)throw Zn=!1,e=Bl,Bl=null,e;return Jn&1&&e.tag!==0&&Zt(),l=e.pendingLanes,l&1?e===zl?Er++:(Er=0,zl=e):Er=0,gt(),null}function Zt(){if(nt!==null){var e=Ls(Jn),t=Te.transition,r=A;try{if(Te.transition=null,A=16>e?16:e,nt===null)var n=!1;else{if(e=nt,nt=null,Jn=0,L&6)throw Error(S(331));var o=L;for(L|=4,w=e.current;w!==null;){var l=w,i=l.child;if(w.flags&16){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(w=c;w!==null;){var p=w;switch(p.tag){case 0:case 11:case 15:jr(8,p,l)}var h=p.child;if(h!==null)h.return=p,w=h;else for(;w!==null;){p=w;var y=p.sibling,C=p.return;if(Hu(p),p===c){w=null;break}if(y!==null){y.return=C,w=y;break}w=C}}}var g=l.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var N=x.sibling;x.sibling=null,x=N}while(x!==null)}}w=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,w=i;else e:for(;w!==null;){if(l=w,l.flags&2048)switch(l.tag){case 0:case 11:case 15:jr(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,w=f;break e}w=l.return}}var d=e.current;for(w=d;w!==null;){i=w;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,w=m;else e:for(i=d;w!==null;){if(s=w,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:fo(9,s)}}catch(R){H(s,s.return,R)}if(s===i){w=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,w=v;break e}w=s.return}}if(L=o,gt(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(no,e)}catch{}n=!0}return n}finally{A=r,Te.transition=t}}return!1}function Ua(e,t,r){t=or(r,t),t=Lu(e,t,1),e=st(e,t,1),t=se(),e!==null&&(Kr(e,1,t),he(e,t))}function H(e,t,r){if(e.tag===3)Ua(e,e,r);else for(;t!==null;){if(t.tag===3){Ua(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ut===null||!ut.has(n))){e=or(r,e),e=Au(t,e,1),t=st(t,e,1),e=se(),t!==null&&(Kr(t,1,e),he(t,e));break}}t=t.return}}function Lf(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&r,J===e&&(te&r)===r&&(K===4||K===3&&(te&130023424)===te&&500>Q()-ki?Tt(e,0):Ti|=r),he(e,t)}function ec(e,t){t===0&&(e.mode&1?(t=sn,sn<<=1,!(sn&130023424)&&(sn=4194304)):t=1);var r=se();e=Ge(e,t),e!==null&&(Kr(e,t,r),he(e,r))}function Af(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),ec(e,r)}function Df(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(S(314))}n!==null&&n.delete(t),ec(e,r)}var tc;tc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return fe=!1,wf(e,t,r);fe=!!(e.flags&131072)}else fe=!1,F&&t.flags&1048576&&lu(t,Hn,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;In(e,t),e=t.pendingProps;var o=er(t,ie.current);qt(t,r),o=vi(null,t,n,e,o,r);var l=Si();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(n)?(l=!0,$n(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,mi(t),o.updater=co,t.stateNode=o,o._reactInternals=t,kl(t,n,e,r),t=jl(null,t,n,!0,l,r)):(t.tag=0,F&&l&&ai(t),ae(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(In(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=Bf(n),e=Ne(n,e),o){case 0:t=Il(null,t,n,e,r);break e;case 1:t=Ea(null,t,n,e,r);break e;case 11:t=ja(null,t,n,e,r);break e;case 14:t=Na(null,t,n,Ne(n.type,e),r);break e}throw Error(S(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ne(n,o),Il(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ne(n,o),Ea(e,t,n,o,r);case 3:e:{if(zu(t),e===null)throw Error(S(387));n=t.pendingProps,l=t.memoizedState,o=l.element,du(e,t),Qn(t,n,null,r);var i=t.memoizedState;if(n=i.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=or(Error(S(423)),t),t=Pa(e,t,n,r,o);break e}else if(n!==o){o=or(Error(S(424)),t),t=Pa(e,t,n,r,o);break e}else for(ge=at(t.stateNode.containerInfo.firstChild),xe=t,F=!0,Pe=null,r=uu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(tr(),n===o){t=Xe(e,t,r);break e}ae(e,t,n,r)}t=t.child}return t;case 5:return fu(t),e===null&&Rl(t),n=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,xl(n,o)?i=null:l!==null&&xl(n,l)&&(t.flags|=32),Bu(e,t),ae(e,t,i,r),t.child;case 6:return e===null&&Rl(t),null;case 13:return Fu(e,t,r);case 4:return hi(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=rr(t,null,n,r):ae(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ne(n,o),ja(e,t,n,o,r);case 7:return ae(e,t,t.pendingProps,r),t.child;case 8:return ae(e,t,t.pendingProps.children,r),t.child;case 12:return ae(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,D(Vn,n._currentValue),n._currentValue=i,l!==null)if(De(l.value,i)){if(l.children===o.children&&!pe.current){t=Xe(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var u=s.firstContext;u!==null;){if(u.context===n){if(l.tag===1){u=Ve(-1,r&-r),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}l.lanes|=r,u=l.alternate,u!==null&&(u.lanes|=r),bl(l.return,r,t),s.lanes|=r;break}u=u.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(S(341));i.lanes|=r,s=i.alternate,s!==null&&(s.lanes|=r),bl(i,r,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}ae(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,qt(t,r),o=ke(o),n=n(o),t.flags|=1,ae(e,t,n,r),t.child;case 14:return n=t.type,o=Ne(n,t.pendingProps),o=Ne(n.type,o),Na(e,t,n,o,r);case 15:return Du(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ne(n,o),In(e,t),t.tag=1,me(n)?(e=!0,$n(t)):e=!1,qt(t,r),Pu(t,n,o),kl(t,n,o,r),jl(null,t,n,!0,e,r);case 19:return Mu(e,t,r);case 22:return _u(e,t,r)}throw Error(S(156,t.tag))};function rc(e,t){return js(e,t)}function _f(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,r,n){return new _f(e,t,r,n)}function Ni(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bf(e){if(typeof e=="function")return Ni(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xl)return 11;if(e===Kl)return 14}return 2}function dt(e,t){var r=e.alternate;return r===null?(r=be(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function En(e,t,r,n,o,l){var i=2;if(n=e,typeof e=="function")Ni(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case _t:return kt(r.children,o,l,t);case Gl:i=8,o|=8;break;case Ko:return e=be(12,r,t,o|2),e.elementType=Ko,e.lanes=l,e;case qo:return e=be(13,r,t,o),e.elementType=qo,e.lanes=l,e;case Zo:return e=be(19,r,t,o),e.elementType=Zo,e.lanes=l,e;case fs:return mo(r,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cs:i=10;break e;case ds:i=9;break e;case Xl:i=11;break e;case Kl:i=14;break e;case Ze:i=16,n=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=be(i,r,t,o),t.elementType=e,t.type=n,t.lanes=l,t}function kt(e,t,r,n){return e=be(7,e,n,t),e.lanes=r,e}function mo(e,t,r,n){return e=be(22,e,n,t),e.elementType=fs,e.lanes=r,e.stateNode={isHidden:!1},e}function Yo(e,t,r){return e=be(6,e,null,t),e.lanes=r,e}function Qo(e,t,r){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zf(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oo(0),this.expirationTimes=Oo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oo(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ei(e,t,r,n,o,l,i,s,u){return e=new zf(e,t,r,s,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=be(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},mi(l),e}function Ff(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dt,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function nc(e){if(!e)return pt;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var r=e.type;if(me(r))return nu(e,r,t)}return t}function oc(e,t,r,n,o,l,i,s,u){return e=Ei(r,n,!0,e,o,l,i,s,u),e.context=nc(null),r=e.current,n=se(),o=ct(r),l=Ve(n,o),l.callback=t??null,st(r,l,o),e.current.lanes=o,Kr(e,o,n),he(e,n),e}function ho(e,t,r,n){var o=t.current,l=se(),i=ct(o);return r=nc(r),t.context===null?t.context=r:t.pendingContext=r,t=Ve(l,i),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=st(o,t,i),e!==null&&(Ae(e,o,i,l),Tn(e,o,i)),i}function to(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $a(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Pi(e,t){$a(e,t),(e=e.alternate)&&$a(e,t)}function Mf(){return null}var lc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Li(e){this._internalRoot=e}yo.prototype.render=Li.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));ho(e,t,null,null)};yo.prototype.unmount=Li.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Et(function(){ho(null,e,null,null)}),t[Qe]=null}};function yo(e){this._internalRoot=e}yo.prototype.unstable_scheduleHydration=function(e){if(e){var t=_s();e={blockedOn:null,target:e,priority:t};for(var r=0;r<et.length&&t!==0&&t<et[r].priority;r++);et.splice(r,0,e),r===0&&zs(e)}};function Ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wa(){}function Uf(e,t,r,n,o){if(o){if(typeof n=="function"){var l=n;n=function(){var c=to(i);l.call(c)}}var i=oc(t,n,e,0,null,!1,!1,"",Wa);return e._reactRootContainer=i,e[Qe]=i.current,Mr(e.nodeType===8?e.parentNode:e),Et(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var s=n;n=function(){var c=to(u);s.call(c)}}var u=Ei(e,0,!1,null,null,!1,!1,"",Wa);return e._reactRootContainer=u,e[Qe]=u.current,Mr(e.nodeType===8?e.parentNode:e),Et(function(){ho(t,u,r,n)}),u}function xo(e,t,r,n,o){var l=r._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var u=to(i);s.call(u)}}ho(t,i,e,o)}else i=Uf(r,t,e,o,n);return to(i)}As=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Cr(t.pendingLanes);r!==0&&(Jl(t,r|1),he(t,Q()),!(L&6)&&(lr=Q()+500,gt()))}break;case 13:Et(function(){var n=Ge(e,1);if(n!==null){var o=se();Ae(n,e,1,o)}}),Pi(e,1)}};ei=function(e){if(e.tag===13){var t=Ge(e,134217728);if(t!==null){var r=se();Ae(t,e,134217728,r)}Pi(e,134217728)}};Ds=function(e){if(e.tag===13){var t=ct(e),r=Ge(e,t);if(r!==null){var n=se();Ae(r,e,t,n)}Pi(e,t)}};_s=function(){return A};Bs=function(e,t){var r=A;try{return A=e,t()}finally{A=r}};sl=function(e,t,r){switch(t){case"input":if(tl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=ao(n);if(!o)throw Error(S(90));ms(n),tl(n,o)}}}break;case"textarea":ys(e,r);break;case"select":t=r.value,t!=null&&Qt(e,!!r.multiple,t,!1)}};Rs=Oi;bs=Et;var $f={usingClientEntryPoint:!1,Events:[Zr,Mt,ao,Cs,ws,Oi]},xr={findFiberByHostInstance:wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wf={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Os(e),e===null?null:e.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||Mf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vn.isDisabled&&vn.supportsFiber)try{no=vn.inject(Wf),Fe=vn}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$f;Se.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ai(t))throw Error(S(200));return Ff(e,t,null,r)};Se.createRoot=function(e,t){if(!Ai(e))throw Error(S(299));var r=!1,n="",o=lc;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ei(e,1,!1,null,null,r,!1,n,o),e[Qe]=t.current,Mr(e.nodeType===8?e.parentNode:e),new Li(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Os(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Et(e)};Se.hydrate=function(e,t,r){if(!go(t))throw Error(S(200));return xo(null,e,t,!0,r)};Se.hydrateRoot=function(e,t,r){if(!Ai(e))throw Error(S(405));var n=r!=null&&r.hydratedSources||null,o=!1,l="",i=lc;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=oc(t,null,e,1,r??null,o,!1,l,i),e[Qe]=t.current,Mr(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new yo(t)};Se.render=function(e,t,r){if(!go(t))throw Error(S(200));return xo(null,e,t,!1,r)};Se.unmountComponentAtNode=function(e){if(!go(e))throw Error(S(40));return e._reactRootContainer?(Et(function(){xo(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};Se.unstable_batchedUpdates=Oi;Se.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!go(r))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return xo(e,t,r,!1,n)};Se.version="18.3.1-next-f1338f8080-20240426";function ic(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ic)}catch(e){console.error(e)}}ic(),is.exports=Se;var Hf=is.exports,Ha=Hf;Go.createRoot=Ha.createRoot,Go.hydrateRoot=Ha.hydrateRoot;const ac={indigo:{primary:"#4F46E5",primaryLight:"#818CF8",primaryDark:"#3730A3",bgAccent:"rgba(79,70,229,0.10)"},blue:{primary:"#2563EB",primaryLight:"#60A5FA",primaryDark:"#1D4ED8",bgAccent:"rgba(37,99,235,0.10)"},cyan:{primary:"#0891B2",primaryLight:"#67E8F9",primaryDark:"#0E7490",bgAccent:"rgba(8,145,178,0.10)"},teal:{primary:"#0D9488",primaryLight:"#5EEAD4",primaryDark:"#0F766E",bgAccent:"rgba(13,148,136,0.10)"},emerald:{primary:"#059669",primaryLight:"#6EE7B7",primaryDark:"#047857",bgAccent:"rgba(5,150,105,0.10)"},purple:{primary:"#7C3AED",primaryLight:"#C4B5FD",primaryDark:"#6D28D9",bgAccent:"rgba(124,58,237,0.10)"},pink:{primary:"#DB2777",primaryLight:"#F9A8D4",primaryDark:"#BE185D",bgAccent:"rgba(219,39,119,0.10)"},rose:{primary:"#E11D48",primaryLight:"#FDA4AF",primaryDark:"#BE123C",bgAccent:"rgba(225,29,72,0.10)"},orange:{primary:"#EA580C",primaryLight:"#FED7AA",primaryDark:"#C2410C",bgAccent:"rgba(234,88,12,0.10)"},amber:{primary:"#D97706",primaryLight:"#FDE68A",primaryDark:"#B45309",bgAccent:"rgba(217,119,6,0.10)"},slate:{primary:"#475569",primaryLight:"#94A3B8",primaryDark:"#334155",bgAccent:"rgba(71,85,105,0.10)"}},Vf=[{id:"Inter",label:"Inter",category:"Modern Sans-Serif",sample:"Design with clarity"},{id:"Poppins",label:"Poppins",category:"Geometric & Friendly",sample:"Design with clarity"},{id:"DM Sans",label:"DM Sans",category:"Minimal & Clean",sample:"Design with clarity"},{id:"Nunito",label:"Nunito",category:"Rounded & Warm",sample:"Design with clarity"},{id:"Outfit",label:"Outfit",category:"Contemporary",sample:"Design with clarity"},{id:"Plus Jakarta Sans",label:"Plus Jakarta Sans",category:"Professional",sample:"Design with clarity"}],sc=[{id:"sharp",label:"Sharp",value:0,description:"Enterprise / Serious"},{id:"sm",label:"Slight",value:4,description:"Professional / Subtle"},{id:"default",label:"Default",value:8,description:"Modern / Balanced"},{id:"lg",label:"Rounded",value:12,description:"Friendly / Approachable"},{id:"xl",label:"Soft",value:16,description:"Playful / Casual"}],uc=[{id:"compact",label:"Compact",unit:6,description:"Dense, information-heavy (u=6px)"},{id:"standard",label:"Standard",unit:8,description:"Balanced, recommended (u=8px)"},{id:"relaxed",label:"Relaxed",unit:10,description:"Breathable, editorial (u=10px)"},{id:"spacious",label:"Spacious",unit:12,description:"Premium, luxurious (u=12px)"}],Yf=[{id:"none",label:"Flat",description:"No elevation — flat design"},{id:"subtle",label:"Subtle",description:"Barely-there depth"},{id:"medium",label:"Medium",description:"Clear elevation (recommended)"},{id:"strong",label:"Strong",description:"Bold, dramatic depth"}],cc=[{id:"saas",label:"SaaS / Product",icon:"⚡",description:"Clean, focused, trustworthy",palette:"indigo",font:"Inter",radius:"default",spacing:"standard",shadow:"subtle"},{id:"ecommerce",label:"E-Commerce",icon:"🛍️",description:"Bold, inviting, conversion-focused",palette:"purple",font:"Poppins",radius:"lg",spacing:"standard",shadow:"medium"},{id:"healthcare",label:"Healthcare",icon:"🏥",description:"Calm, accessible, trustworthy",palette:"teal",font:"DM Sans",radius:"default",spacing:"relaxed",shadow:"subtle"},{id:"finance",label:"Finance / Banking",icon:"💼",description:"Authoritative, precise, secure",palette:"slate",font:"Inter",radius:"sm",spacing:"compact",shadow:"none"},{id:"creative",label:"Creative / Agency",icon:"🎨",description:"Vibrant, expressive, bold",palette:"orange",font:"Outfit",radius:"xl",spacing:"relaxed",shadow:"strong"},{id:"social",label:"Social / Consumer",icon:"💬",description:"Friendly, engaging, fun",palette:"pink",font:"Nunito",radius:"lg",spacing:"standard",shadow:"medium"}];function dc(e){const t=ac[e.palette],r=sc.find(o=>o.id===e.radius),n=uc.find(o=>o.id===e.spacing);return{industry:e.id,colors:{palette:e.palette,primary:t.primary,primaryLight:t.primaryLight,primaryDark:t.primaryDark,bgAccent:t.bgAccent,neutral50:"#F9FAFB",neutral100:"#F3F4F6",neutral200:"#E5E7EB",neutral300:"#D1D5DB",neutral400:"#9CA3AF",neutral500:"#6B7280",neutral600:"#4B5563",neutral700:"#374151",neutral800:"#1F2937",neutral900:"#111827",success:"#10B981",error:"#EF4444",warning:"#F59E0B",info:"#3B82F6",bgPrimary:"#FFFFFF",bgSecondary:"#F9FAFB",bgTertiary:"#F3F4F6",textPrimary:"#111827",textSecondary:"#6B7280",textTertiary:"#9CA3AF",textInverse:"#FFFFFF",border:"#E5E7EB"},typography:{fontFamily:e.font},borders:{radiusId:e.radius,radius:(r==null?void 0:r.value)??8},spacing:{unitId:e.spacing,unit:(n==null?void 0:n.unit)??8},shadows:{style:e.shadow}}}const Qf=dc(cc[0]);function Gf({preferences:e,updatePreferences:t}){const r=n=>{const o=dc(n);t(o)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[a.jsx("p",{style:{fontSize:13,color:"var(--text-2)",lineHeight:1.6},children:"Pick your industry to auto-fill all design preferences with battle-tested defaults. You can fine-tune every setting in the next steps."}),a.jsx("div",{className:"industry-grid",children:cc.map(n=>a.jsxs("button",{className:`industry-card${e.industry===n.id?" selected":""}`,onClick:()=>r(n),children:[a.jsx("div",{className:"industry-icon",children:n.icon}),a.jsx("div",{className:"industry-name",children:n.label}),a.jsx("div",{className:"industry-desc",children:n.description})]},n.id))}),a.jsx("div",{style:{padding:"12px 14px",borderRadius:8,background:"var(--accent-light)",border:"1px solid rgba(99,102,241,0.2)",fontSize:12,color:"var(--accent-text)",lineHeight:1.6},children:"💡 Each preset follows real-world UI conventions for that industry — colors, type, spacing, and shadow are all considered together."})]})}const Xf=Object.entries(ac),Kf={indigo:"Indigo",blue:"Blue",cyan:"Cyan",teal:"Teal",emerald:"Emerald",purple:"Purple",pink:"Pink",rose:"Rose",orange:"Orange",amber:"Amber",slate:"Slate"};function qf({preferences:e,updatePreferences:t}){const{colors:r}=e,n=(l,i)=>{t({colors:{...r,palette:l,primary:i.primary,primaryLight:i.primaryLight,primaryDark:i.primaryDark,bgAccent:i.bgAccent}})},o=l=>{const i=l.target.value;t({colors:{...r,palette:"custom",primary:i,primaryLight:fc(i,35),primaryDark:Zf(i),bgAccent:i+"1a"}})};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[a.jsxs("div",{children:[a.jsx("div",{className:"field-label",children:"Current palette"}),a.jsxs("div",{className:"color-preview-bar",children:[[r.primaryDark,r.primary,r.primaryLight,r.bgAccent.replace("rgba","rgb").replace(/,[\d.]+\)/,")")].map((l,i)=>a.jsx("div",{className:"color-preview-segment",style:{backgroundColor:i===3?r.primary+"33":l}},i)),["#10B981","#F59E0B","#EF4444"].map((l,i)=>a.jsx("div",{className:"color-preview-segment",style:{backgroundColor:l}},`s${i}`))]})]}),a.jsxs("div",{children:[a.jsx("div",{className:"field-label",children:"Brand color"}),a.jsxs("div",{className:"palette-grid",children:[Xf.map(([l,i])=>a.jsx("div",{className:`palette-swatch${r.palette===l?" selected":""}`,style:{backgroundColor:i.primary},title:Kf[l],onClick:()=>n(l,i)},l)),a.jsxs("label",{title:"Custom color",style:{width:36,height:36,borderRadius:8,cursor:"pointer",border:"2px dashed var(--border-light)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:"var(--text-3)",flexShrink:0,position:"relative",overflow:"hidden"},children:["+",a.jsx("input",{type:"color",value:r.primary,onChange:o,style:{position:"absolute",opacity:0,width:"100%",height:"100%",cursor:"pointer"}})]})]}),a.jsxs("div",{className:"field-hint",children:["Selected: ",a.jsx("span",{style:{color:r.primary,fontWeight:600},children:r.primary})]})]}),a.jsxs("div",{children:[a.jsx("div",{className:"field-label",children:"Neutral scale (fixed)"}),a.jsx("div",{style:{display:"flex",gap:4},children:["#F9FAFB","#F3F4F6","#E5E7EB","#D1D5DB","#9CA3AF","#6B7280","#4B5563","#374151","#1F2937","#111827"].map((l,i)=>a.jsx("div",{style:{flex:1,height:24,backgroundColor:l,borderRadius:i===0?"6px 0 0 6px":i===9?"0 6px 6px 0":0}},i))})]}),a.jsxs("div",{children:[a.jsx("div",{className:"field-label",children:"Semantic colors (fixed)"}),a.jsx("div",{style:{display:"flex",gap:8},children:[{label:"Success",color:"#10B981"},{label:"Warning",color:"#F59E0B"},{label:"Error",color:"#EF4444"},{label:"Info",color:"#3B82F6"}].map(({label:l,color:i})=>a.jsxs("div",{style:{flex:1,textAlign:"center"},children:[a.jsx("div",{style:{height:28,backgroundColor:i,borderRadius:6,marginBottom:4}}),a.jsx("span",{style:{fontSize:10,color:"var(--text-3)",fontWeight:500},children:l})]},l))})]})]})}function fc(e,t){const r=parseInt(e.replace("#",""),16),n=Math.min(255,(r>>16)+t),o=Math.min(255,(r>>8&255)+t),l=Math.min(255,(r&255)+t);return"#"+[n,o,l].map(i=>i.toString(16).padStart(2,"0")).join("")}function Zf(e,t){return fc(e,-20)}const Jf=[{name:"h1",size:48,weight:700},{name:"h2",size:36,weight:700},{name:"h3",size:24,weight:600},{name:"h4",size:20,weight:600},{name:"body lg",size:17,weight:400},{name:"body",size:15,weight:400},{name:"small",size:13,weight:400},{name:"caption",size:11,weight:400}];function ep({preferences:e,updatePreferences:t}){const r=e.typography.fontFamily,n=o=>{t({typography:{fontFamily:o}})};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[a.jsxs("div",{children:[a.jsx("div",{className:"field-label",children:"Font family"}),a.jsx("div",{className:"font-grid",children:Vf.map(o=>a.jsxs("button",{className:`font-card${r===o.id?" selected":""}`,onClick:()=>n(o.id),children:[a.jsx("span",{className:"font-sample",style:{fontFamily:`'${o.id}', sans-serif`},children:o.sample}),a.jsxs("div",{className:"font-meta",children:[a.jsx("div",{className:"font-name",children:o.label}),a.jsx("div",{className:"font-category",children:o.category})]})]},o.id))})]}),a.jsxs("div",{children:[a.jsx("div",{className:"field-label",children:"Type scale preview"}),a.jsx("div",{style:{background:"var(--bg-2)",borderRadius:10,padding:"12px 16px",display:"flex",flexDirection:"column",gap:0},children:Jf.map(({name:o,size:l,weight:i})=>a.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:12,paddingBlock:5,borderBottom:"1px solid var(--border)"},children:[a.jsx("span",{style:{fontSize:10,color:"var(--text-3)",width:48,flexShrink:0,fontWeight:500},children:o}),a.jsx("span",{style:{fontSize:Math.min(l*.6,28),fontWeight:i,color:"var(--text-1)",fontFamily:`'${r}', sans-serif`,lineHeight:1.3},children:o==="h1"||o==="h2"?"Hello World":"The quick brown fox"}),a.jsxs("span",{style:{fontSize:10,color:"var(--text-3)",marginLeft:"auto"},children:[l,"px / ",i]})]},o))})]}),a.jsx("div",{style:{padding:"10px 14px",borderRadius:8,background:"var(--bg-3)",border:"1px solid var(--border)",fontSize:12,color:"var(--text-3)",lineHeight:1.6},children:"All font weights (300–800) are loaded via Google Fonts. The generated code uses platform-specific font family names for React Native."})]})}const tp={none:"none",subtle:"0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.05)",medium:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",strong:"0 10px 25px -5px rgba(0,0,0,0.18), 0 4px 6px -2px rgba(0,0,0,0.08)"};function rp({preferences:e,updatePreferences:t}){const{borders:r,shadows:n}=e,o=i=>{t({borders:{...r,radiusId:i.id,radius:i.value}})},l=i=>{t({shadows:{style:i.id}})};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[a.jsxs("div",{children:[a.jsx("div",{className:"field-label",children:"Border radius"}),a.jsx("div",{className:"option-grid",children:sc.map(i=>a.jsxs("button",{className:`option-row${r.radiusId===i.id?" selected":""}`,onClick:()=>o(i),children:[a.jsx("div",{className:"option-visual",children:a.jsx("div",{style:{width:36,height:24,backgroundColor:e.colors.primary,borderRadius:i.value,opacity:.85}})}),a.jsxs("div",{className:"option-text",children:[a.jsx("div",{className:"option-label",children:i.label}),a.jsxs("div",{className:"option-desc",children:[i.description," — ",i.value,"px"]})]}),r.radiusId===i.id&&a.jsx("span",{style:{color:"var(--accent-text)",fontSize:14},children:"✓"})]},i.id))})]}),a.jsxs("div",{children:[a.jsx("div",{className:"field-label",children:"Elevation / Shadow"}),a.jsx("div",{className:"option-grid",children:Yf.map(i=>a.jsxs("button",{className:`option-row${n.style===i.id?" selected":""}`,onClick:()=>l(i),children:[a.jsx("div",{className:"option-visual",children:a.jsx("div",{style:{width:36,height:24,backgroundColor:"#ffffff",borderRadius:6,boxShadow:tp[i.id],border:"1px solid #e5e7eb"}})}),a.jsxs("div",{className:"option-text",children:[a.jsx("div",{className:"option-label",children:i.label}),a.jsx("div",{className:"option-desc",children:i.description})]}),n.style===i.id&&a.jsx("span",{style:{color:"var(--accent-text)",fontSize:14},children:"✓"})]},i.id))})]})]})}function np({preferences:e,updatePreferences:t}){const{spacing:r,colors:n}=e,o=l=>{t({spacing:{unitId:l.id,unit:l.unit}})};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[a.jsxs("div",{children:[a.jsx("div",{className:"field-label",children:"Spacing unit"}),a.jsxs("p",{style:{fontSize:12,color:"var(--text-3)",lineHeight:1.6,marginBottom:12},children:["The base unit (u) drives all margins and paddings. ",a.jsx("code",{style:{color:"var(--accent-text)"},children:"m1"})," = 1u, ",a.jsx("code",{style:{color:"var(--accent-text)"},children:"m2"})," = 2u, etc."]}),a.jsx("div",{className:"option-grid",children:uc.map(l=>a.jsxs("button",{className:`option-row${r.unitId===l.id?" selected":""}`,onClick:()=>o(l),children:[a.jsx("div",{className:"option-visual",children:a.jsx("div",{style:{display:"flex",gap:2,alignItems:"flex-end"},children:[1,2,3,4].map(i=>a.jsx("div",{style:{width:i*l.unit*.55,height:i*l.unit*.55,backgroundColor:n.primary,borderRadius:2,opacity:.7+i*.075}},i))})}),a.jsxs("div",{className:"option-text",children:[a.jsx("div",{className:"option-label",children:l.label}),a.jsx("div",{className:"option-desc",children:l.description})]}),r.unitId===l.id&&a.jsx("span",{style:{color:"var(--accent-text)",fontSize:14},children:"✓"})]},l.id))})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"field-label",children:["Scale preview (u = ",r.unit,"px)"]}),a.jsx("div",{className:"spacing-rows",children:[0,1,2,3,4,5,6,7,8].map(l=>a.jsxs("div",{className:"spacing-row",children:[a.jsxs("span",{className:"spacing-label",children:["m",l]}),a.jsx("div",{className:"spacing-bar-wrap",children:a.jsx("div",{className:"spacing-bar",style:{width:Math.max(3,l*r.unit*3),backgroundColor:n.primary+"33",borderLeftColor:n.primary}})}),a.jsxs("span",{className:"spacing-value",children:[l*r.unit,"px"]})]},l))})]}),a.jsxs("div",{style:{padding:"12px 14px",borderRadius:8,background:"var(--bg-3)",border:"1px solid var(--border)",fontSize:12,color:"var(--text-3)",lineHeight:1.6},children:["The unit is passed to ",a.jsx("code",{style:{color:"var(--accent-text)"},children:"createBase()"})," as ",a.jsx("code",{style:{color:"var(--accent-text)"},children:"tokens.unit"})," and automatically generates all margin/padding shorthand props."]})]})}const op=[Gf,qf,ep,rp,np],lp=["Industry","Colors","Typography","Shape & Shadows","Spacing"];function ip({currentStep:e,setCurrentStep:t,preferences:r,updatePreferences:n,onDownload:o,totalSteps:l}){const i=op[e],s=e===0,u=e===l-1;return a.jsxs("aside",{className:"wizard-panel",children:[a.jsxs("div",{className:"wizard-content",children:[a.jsxs("div",{className:"step-header",children:[a.jsxs("span",{className:"step-number",children:["Step ",e+1," of ",l]}),a.jsx("h2",{className:"step-title",children:lp[e]})]}),a.jsx("div",{className:"step-body",children:a.jsx(i,{preferences:r,updatePreferences:n})})]}),a.jsxs("div",{className:"wizard-footer",children:[!s&&a.jsx("button",{className:"btn-wizard btn-back",onClick:()=>t(c=>c-1),children:"← Back"}),u?a.jsx("button",{className:"btn-wizard btn-download",onClick:o,children:"↓ Download Design System"}):a.jsx("button",{className:"btn-wizard btn-next",onClick:()=>t(c=>c+1),children:"Next →"})]})]})}const ap="modulepreload",sp=function(e){return"/"+e},Va={},Ya=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.allSettled(r.map(u=>{if(u=sp(u),u in Va)return;Va[u]=!0;const c=u.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":ap,c||(h.as="script"),h.crossOrigin="",h.href=u,s&&h.setAttribute("nonce",s),document.head.appendChild(h),c)return new Promise((y,C)=>{h.addEventListener("load",y),h.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${u}`)))})}))}function l(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return o.then(i=>{for(const s of i||[])s.status==="rejected"&&l(s.reason);return t().catch(l)})},Qa={Inter:{regular:"Inter-Regular",medium:"Inter-Medium",semiBold:"Inter-SemiBold",bold:"Inter-Bold"},Poppins:{regular:"Poppins-Regular",medium:"Poppins-Medium",semiBold:"Poppins-SemiBold",bold:"Poppins-Bold"},"DM Sans":{regular:"DMSans-Regular",medium:"DMSans-Medium",semiBold:"DMSans-SemiBold",bold:"DMSans-Bold"},Nunito:{regular:"Nunito-Regular",medium:"Nunito-Medium",semiBold:"Nunito-SemiBold",bold:"Nunito-Bold"},Outfit:{regular:"Outfit-Regular",medium:"Outfit-Medium",semiBold:"Outfit-SemiBold",bold:"Outfit-Bold"},"Plus Jakarta Sans":{regular:"PlusJakartaSans-Regular",medium:"PlusJakartaSans-Medium",semiBold:"PlusJakartaSans-SemiBold",bold:"PlusJakartaSans-Bold"}},pc={none:null,subtle:{shadowColor:"#000",shadowOffset:{width:0,height:1},shadowOpacity:.08,shadowRadius:3,elevation:2},medium:{shadowColor:"#000",shadowOffset:{width:0,height:4},shadowOpacity:.1,shadowRadius:6,elevation:4},strong:{shadowColor:"#000",shadowOffset:{width:0,height:10},shadowOpacity:.18,shadowRadius:25,elevation:8}};function up(e){const{colors:t,borders:{radius:r},spacing:{unit:n}}=e,o=Qa[e.typography.fontFamily]??Qa.Inter;return`// Auto-generated by quickly-react Design System Studio
// Edit this file to customise your design tokens.

export const COLOR = {
  PRIMARY:       '${t.primary}',
  PRIMARY_LIGHT: '${t.primaryLight}',
  PRIMARY_DARK:  '${t.primaryDark}',
  BG_ACCENT:     '${t.bgAccent}',

  NEUTRAL_50:  '${t.neutral50}',
  NEUTRAL_100: '${t.neutral100}',
  NEUTRAL_200: '${t.neutral200}',
  NEUTRAL_300: '${t.neutral300}',
  NEUTRAL_400: '${t.neutral400}',
  NEUTRAL_500: '${t.neutral500}',
  NEUTRAL_600: '${t.neutral600}',
  NEUTRAL_700: '${t.neutral700}',
  NEUTRAL_800: '${t.neutral800}',
  NEUTRAL_900: '${t.neutral900}',

  SUCCESS: '${t.success}',
  WARNING: '${t.warning}',
  ERROR:   '${t.error}',
  INFO:    '${t.info}',

  BG_PRIMARY:   '${t.bgPrimary}',
  BG_SECONDARY: '${t.bgSecondary}',
  BG_TERTIARY:  '${t.bgTertiary}',
  BORDER:       '${t.border}',

  TEXT_PRIMARY:   '${t.textPrimary}',
  TEXT_SECONDARY: '${t.textSecondary}',
  TEXT_TERTIARY:  '${t.textTertiary}',
  TEXT_INVERSE:   '${t.textInverse}',

  WHITE: '#FFFFFF',
  BLACK: '#000000',
} as const;

export const FONT_FAMILY = {
  regular:  '${o.regular}',
  medium:   '${o.medium}',
  semiBold: '${o.semiBold}',
  bold:     '${o.bold}',
} as const;

export const RADIUS = {
  none: 0,
  sm:   ${Math.round(r*.5)},
  md:   ${r},
  lg:   ${Math.round(r*1.5)},
  xl:   ${r*2},
  full: 9999,
} as const;

export const UNIT = ${n}; // Base spacing unit in px. m1=1×UNIT, m2=2×UNIT, etc.
`}function cp(e){const{colors:t}=e;return`// Auto-generated by quickly-react Design System Studio
import { Platform } from 'react-native';
import { IStyleProps, TCommonPropStyle } from 'quickly-react';
import { TextProps } from 'react-native';
import { COLOR, FONT_FAMILY } from './tokens';

type TPropParam = { propName: string; obj: any; isDefault?: boolean };

const FONT_WEB = "'${e.typography.fontFamily}', sans-serif";

export const textProps: Array<TPropParam> = [
  // ── Weight variants ───────────────────────────────────────
  {
    propName: 'regular',
    obj: { style: { fontWeight: '400', fontFamily: Platform.OS === 'web' ? FONT_WEB : FONT_FAMILY.regular } },
    isDefault: true,
  },
  {
    propName: 'medium',
    obj: { style: { fontWeight: '500', fontFamily: Platform.OS === 'web' ? FONT_WEB : FONT_FAMILY.medium } },
  },
  {
    propName: 'semiBold',
    obj: { style: { fontWeight: '600', fontFamily: Platform.OS === 'web' ? FONT_WEB : FONT_FAMILY.semiBold } },
  },
  {
    propName: 'bold',
    obj: { style: { fontWeight: '700', fontFamily: Platform.OS === 'web' ? FONT_WEB : FONT_FAMILY.bold } },
  },

  // ── Heading scale ─────────────────────────────────────────
  { propName: 'h1', obj: { style: { fontSize: 48, lineHeight: 58, fontWeight: '700', fontFamily: Platform.OS === 'web' ? FONT_WEB : FONT_FAMILY.bold } } },
  { propName: 'h2', obj: { style: { fontSize: 36, lineHeight: 44, fontWeight: '700', fontFamily: Platform.OS === 'web' ? FONT_WEB : FONT_FAMILY.bold } } },
  { propName: 'h3', obj: { style: { fontSize: 24, lineHeight: 30, fontWeight: '600', fontFamily: Platform.OS === 'web' ? FONT_WEB : FONT_FAMILY.semiBold } } },
  { propName: 'h4', obj: { style: { fontSize: 20, lineHeight: 26, fontWeight: '600', fontFamily: Platform.OS === 'web' ? FONT_WEB : FONT_FAMILY.semiBold } } },
  { propName: 'h5', obj: { style: { fontSize: 17, lineHeight: 22, fontWeight: '600', fontFamily: Platform.OS === 'web' ? FONT_WEB : FONT_FAMILY.semiBold } } },
  { propName: 'h6', obj: { style: { fontSize: 15, lineHeight: 20, fontWeight: '600', fontFamily: Platform.OS === 'web' ? FONT_WEB : FONT_FAMILY.semiBold } } },

  // ── Body scale ────────────────────────────────────────────
  { propName: 'bodyLg',  obj: { style: { fontSize: 17, lineHeight: 26 } } },
  { propName: 'body',    obj: { style: { fontSize: 15, lineHeight: 22 } }, isDefault: true },
  { propName: 'bodySm',  obj: { style: { fontSize: 13, lineHeight: 20 } } },
  { propName: 'caption', obj: { style: { fontSize: 11, lineHeight: 16 } } },

  // ── Alignment ─────────────────────────────────────────────
  { propName: 'center', obj: { style: { textAlign: 'center' } } },
  { propName: 'right',  obj: { style: { textAlign: 'right'  } } },

  // ── Color variants ────────────────────────────────────────
  {
    propName: 'colorDefault',
    obj: { theme: { light: { color: COLOR.TEXT_PRIMARY }, dark: { color: COLOR.WHITE } } },
    isDefault: true,
  },
  {
    propName: 'colorMuted',
    obj: { theme: { light: { color: COLOR.TEXT_SECONDARY }, dark: { color: COLOR.NEUTRAL_400 } } },
  },
  { propName: 'colorPrimary',   obj: { style: { color: COLOR.PRIMARY } } },
  { propName: 'colorSuccess',   obj: { style: { color: COLOR.SUCCESS } } },
  { propName: 'colorError',     obj: { style: { color: COLOR.ERROR   } } },
  { propName: 'colorWarning',   obj: { style: { color: COLOR.WARNING } } },
  { propName: 'colorWhite',     obj: { style: { color: COLOR.WHITE   } } },
  { propName: 'colorInverse',   obj: { style: { color: COLOR.TEXT_INVERSE } } },
];

export interface ITextProps extends TextProps, IStyleProps, TCommonPropStyle {
  // Weight
  regular?: boolean;
  medium?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  // Scale
  h1?: boolean; h2?: boolean; h3?: boolean; h4?: boolean; h5?: boolean; h6?: boolean;
  bodyLg?: boolean; body?: boolean; bodySm?: boolean; caption?: boolean;
  // Alignment
  center?: boolean; right?: boolean;
  // Color
  colorDefault?: boolean; colorMuted?: boolean; colorPrimary?: boolean;
  colorSuccess?: boolean; colorError?: boolean; colorWarning?: boolean;
  colorWhite?: boolean; colorInverse?: boolean;
}
`}function dp(e){const{colors:t,borders:{radius:r},shadows:{style:n}}=e,o=pc[n];return`// Auto-generated by quickly-react Design System Studio
import { IStyleProps, TCommonPropStyle } from 'quickly-react';
import { ViewProps } from 'react-native';
import { COLOR, RADIUS } from './tokens';

type TPropParam = { propName: string; obj: any; isDefault?: boolean };

export const viewProps: Array<TPropParam> = [
  // ── Theme-aware backgrounds ───────────────────────────────
  {
    propName: 'bgSurface',
    obj: { theme: { light: { backgroundColor: COLOR.BG_PRIMARY   }, dark: { backgroundColor: '#1A1A1A' } } },
    isDefault: true,
  },
  {
    propName: 'bgSurface2',
    obj: { theme: { light: { backgroundColor: COLOR.BG_SECONDARY }, dark: { backgroundColor: '#242424' } } },
  },
  {
    propName: 'bgSurface3',
    obj: { theme: { light: { backgroundColor: COLOR.BG_TERTIARY  }, dark: { backgroundColor: '#2E2E2E' } } },
  },

  // ── Brand backgrounds ─────────────────────────────────────
  { propName: 'bgPrimary',      obj: { style: { backgroundColor: COLOR.PRIMARY      } } },
  { propName: 'bgPrimaryLight', obj: { style: { backgroundColor: COLOR.PRIMARY_LIGHT } } },
  { propName: 'bgAccent',       obj: { style: { backgroundColor: COLOR.BG_ACCENT    } } },

  // ── Semantic backgrounds ──────────────────────────────────
  { propName: 'bgSuccess', obj: { style: { backgroundColor: 'rgba(16,185,129,0.12)'  } } },
  { propName: 'bgError',   obj: { style: { backgroundColor: 'rgba(239,68,68,0.12)'   } } },
  { propName: 'bgWarning', obj: { style: { backgroundColor: 'rgba(245,158,11,0.12)'  } } },
  { propName: 'bgInfo',    obj: { style: { backgroundColor: 'rgba(59,130,246,0.12)'  } } },

  // ── Border radius ─────────────────────────────────────────
  { propName: 'roundNone', obj: { style: { borderRadius: RADIUS.none } } },
  { propName: 'roundSm',   obj: { style: { borderRadius: RADIUS.sm   } } },
  { propName: 'roundMd',   obj: { style: { borderRadius: RADIUS.md   } } },
  { propName: 'roundLg',   obj: { style: { borderRadius: RADIUS.lg   } } },
  { propName: 'roundXl',   obj: { style: { borderRadius: RADIUS.xl   } } },
  { propName: 'roundFull', obj: { style: { borderRadius: RADIUS.full } } },

  // ── Borders ───────────────────────────────────────────────
  { propName: 'bordered',       obj: { style: { borderWidth: 1,   borderColor: COLOR.BORDER,   borderStyle: 'solid' } } },
  { propName: 'borderedPrimary',obj: { style: { borderWidth: 1.5, borderColor: COLOR.PRIMARY,  borderStyle: 'solid' } } },
  { propName: 'borderedError',  obj: { style: { borderWidth: 1.5, borderColor: COLOR.ERROR,    borderStyle: 'solid' } } },

  // ── Elevation / shadows ───────────────────────────────────
  { propName: 'elevated', obj: { style: ${o?`{ shadowColor: '${o.shadowColor}', shadowOffset: { width: ${o.shadowOffset.width}, height: ${o.shadowOffset.height} }, shadowOpacity: ${o.shadowOpacity}, shadowRadius: ${o.shadowRadius}, elevation: ${o.elevation} }`:"{}"} } },
];

export interface IViewProps {
  bgSurface?: boolean; bgSurface2?: boolean; bgSurface3?: boolean;
  bgPrimary?: boolean; bgPrimaryLight?: boolean; bgAccent?: boolean;
  bgSuccess?: boolean; bgError?: boolean; bgWarning?: boolean; bgInfo?: boolean;
  roundNone?: boolean; roundSm?: boolean; roundMd?: boolean; roundLg?: boolean; roundXl?: boolean; roundFull?: boolean;
  bordered?: boolean; borderedPrimary?: boolean; borderedError?: boolean;
  elevated?: boolean;
}
`}function fp(e){const{colors:t,spacing:{unit:r}}=e;return`// Auto-generated by quickly-react Design System Studio
import { createBase, IStyleProps, TCommonPropStyle } from 'quickly-react';
import * as RN from 'react-native';
import {
  ViewProps, TouchableOpacityProps, PressableProps, TextProps,
  ScrollViewProps,
} from 'react-native';
import { textProps, ITextProps } from './textProps';
import { viewProps, IViewProps } from './viewProps';
import { COLOR, UNIT } from './tokens';

export interface IColProps
  extends ViewProps, PressableProps, IStyleProps, TCommonPropStyle, IViewProps {
  style?: any;
  children?: any;
}
export interface IRowProps extends IColProps {}

const BaseDS = createBase<IColProps, IRowProps, ITextProps>({
  RN,
  addTextProps: textProps,
  addViewProps:  viewProps,
  commonStyles:  {},
  tokens: {
    borderColor:        COLOR.BORDER,
    textColorPrimary:   COLOR.TEXT_PRIMARY,
    textColorSecondary: COLOR.TEXT_SECONDARY,
    textColorTertiary:  COLOR.TEXT_TERTIARY,
    bgColorPrimary:     COLOR.BG_PRIMARY,
    bgColorSecondary:   COLOR.BG_SECONDARY,
    mainColor:          COLOR.PRIMARY,
    unit:               UNIT,
  },
});

export const Col      = BaseDS.Col;
export const Row      = BaseDS.Row;
export const Text     = BaseDS.Text;
export const Grid     = BaseDS.Grid;
export const RatioCol = BaseDS.RatioCol;

export * from './tokens';
export * from './textProps';
export * from './viewProps';
`}function pp(e){const{borders:{radius:t},spacing:{unit:r}}=e;return`// Auto-generated by quickly-react Design System Studio
import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { Col, Row, Text } from '../index';
import { COLOR, RADIUS, UNIT } from '../tokens';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface IButtonProps {
  title: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const VARIANT: Record<ButtonVariant, { container: any; textColor: string }> = {
  primary:     { container: { backgroundColor: COLOR.PRIMARY,      borderWidth: 0    }, textColor: COLOR.TEXT_INVERSE },
  secondary:   { container: { backgroundColor: COLOR.BG_ACCENT,    borderWidth: 1.5, borderColor: COLOR.PRIMARY }, textColor: COLOR.PRIMARY },
  ghost:       { container: { backgroundColor: 'transparent',       borderWidth: 1.5, borderColor: COLOR.BORDER  }, textColor: COLOR.TEXT_PRIMARY },
  destructive: { container: { backgroundColor: COLOR.ERROR,         borderWidth: 0    }, textColor: COLOR.WHITE },
};

const SIZE: Record<ButtonSize, { ph: number; pv: number; fs: number }> = {
  sm: { ph: UNIT * 2,   pv: UNIT * 0.875, fs: 13 },
  md: { ph: UNIT * 2.5, pv: UNIT * 1.25,  fs: 14 },
  lg: { ph: UNIT * 3.5, pv: UNIT * 1.625, fs: 16 },
};

export const Button = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
}: IButtonProps) => {
  const v = VARIANT[variant];
  const s = SIZE[size];

  return (
    <TouchableOpacity
      onPress={disabled || loading ? undefined : onPress}
      activeOpacity={0.75}
      style={fullWidth ? { alignSelf: 'stretch' } : undefined}
    >
      <Row
        middle
        style={[
          v.container,
          {
            paddingHorizontal: s.ph,
            paddingVertical:   s.pv,
            borderRadius:      RADIUS.md,
            justifyContent:    'center',
            alignSelf:         fullWidth ? 'stretch' : 'flex-start',
            opacity:           disabled ? 0.5 : 1,
          },
        ]}
      >
        {loading ? (
          <ActivityIndicator
            size="small"
            color={variant === 'primary' || variant === 'destructive' ? COLOR.WHITE : COLOR.PRIMARY}
          />
        ) : (
          <>
            {leftIcon  && <Col style={{ marginRight: UNIT * 0.75 }}>{leftIcon}</Col>}
            <Text semiBold style={{ fontSize: s.fs, color: v.textColor }}>
              {title}
            </Text>
            {rightIcon && <Col style={{ marginLeft:  UNIT * 0.75 }}>{rightIcon}</Col>}
          </>
        )}
      </Row>
    </TouchableOpacity>
  );
};
`}function mp(e){return`// Auto-generated by quickly-react Design System Studio
import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { Col, Row, Text } from '../index';
import { COLOR, RADIUS, UNIT } from '../tokens';

export interface IInputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  hint?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerStyle?: any;
}

export const Input = ({
  label,
  hint,
  error,
  leftIcon,
  rightIcon,
  containerStyle,
  onFocus,
  onBlur,
  ...props
}: IInputProps) => {
  const [focused, setFocused] = useState(false);
  const hasError = !!error;

  const borderColor = hasError ? COLOR.ERROR
    : focused ? COLOR.PRIMARY
    : COLOR.BORDER;

  const ringColor = hasError ? 'rgba(239,68,68,0.12)'
    : focused ? COLOR.BG_ACCENT
    : 'transparent';

  return (
    <Col style={containerStyle}>
      {label && (
        <Text bodySm semiBold colorMuted style={{ marginBottom: UNIT * 0.75 }}>
          {label}
        </Text>
      )}
      <Row
        middle
        style={{
          borderWidth:   1.5,
          borderColor,
          borderRadius:  RADIUS.md,
          backgroundColor: COLOR.BG_PRIMARY,
          paddingHorizontal: UNIT * 1.5,
          shadowColor:   borderColor,
          shadowOffset:  { width: 0, height: 0 },
          shadowOpacity: focused || hasError ? 1 : 0,
          shadowRadius:  3,
          elevation:     0,
        }}
      >
        {leftIcon && <Col style={{ marginRight: UNIT }}>{leftIcon}</Col>}
        <TextInput
          {...props}
          onFocus={(e) => { setFocused(true);  onFocus?.(e); }}
          onBlur={(e)  => { setFocused(false); onBlur?.(e);  }}
          placeholderTextColor={COLOR.TEXT_TERTIARY}
          style={{
            flex: 1,
            paddingVertical: UNIT * 1.25,
            fontSize: 14,
            color: COLOR.TEXT_PRIMARY,
          }}
        />
        {rightIcon && <Col style={{ marginLeft: UNIT }}>{rightIcon}</Col>}
      </Row>
      {(hint || error) && (
        <Text caption style={{ marginTop: UNIT * 0.75, color: hasError ? COLOR.ERROR : COLOR.TEXT_TERTIARY }}>
          {error ?? hint}
        </Text>
      )}
    </Col>
  );
};
`}function hp(e){const{shadows:{style:t}}=e,r=pc[t],n=r?`shadowColor: '${r.shadowColor}', shadowOffset: { width: ${r.shadowOffset.width}, height: ${r.shadowOffset.height} }, shadowOpacity: ${r.shadowOpacity}, shadowRadius: ${r.shadowRadius}, elevation: ${r.elevation}`:"";return`// Auto-generated by quickly-react Design System Studio
import React from 'react';
import { Col, Row, Text } from '../index';
import { COLOR, RADIUS, UNIT } from '../tokens';

export interface ICardProps {
  title?: string;
  subtitle?: string;
  badge?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  elevated?: boolean;
  style?: any;
}

export const Card = ({
  title,
  subtitle,
  badge,
  footer,
  children,
  elevated = false,
  style,
}: ICardProps) => (
  <Col
    style={[
      {
        backgroundColor: COLOR.BG_PRIMARY,
        borderRadius:    RADIUS.lg,
        borderWidth:     1,
        borderColor:     COLOR.BORDER,
        padding:         UNIT * 3,
        ${n?n+",":""}
      },
      elevated && {
        shadowOpacity: 0.18,
        shadowRadius:  25,
        elevation:     8,
        borderWidth:   0,
      },
      style,
    ]}
  >
    {(title || badge) && (
      <Row middle style={{ marginBottom: UNIT * 1.5, justifyContent: 'space-between' }}>
        <Col flex1>
          {title && <Text h5 colorDefault>{title}</Text>}
          {subtitle && <Text bodySm colorMuted style={{ marginTop: 4 }}>{subtitle}</Text>}
        </Col>
        {badge && <Col style={{ marginLeft: UNIT }}>{badge}</Col>}
      </Row>
    )}
    {children}
    {footer && (
      <Col style={{ marginTop: UNIT * 2, paddingTop: UNIT * 2, borderTopWidth: 1, borderTopColor: COLOR.BORDER }}>
        {footer}
      </Col>
    )}
  </Col>
);
`}function yp(e){const{borders:{radius:t}}=e;return`// Auto-generated by quickly-react Design System Studio
import React from 'react';
import { Row, Text } from '../index';
import { COLOR, UNIT } from '../tokens';

export type BadgeVariant = 'success' | 'error' | 'warning' | 'info' | 'neutral' | 'primary';
export type BadgeSize    = 'sm' | 'md';

const VARIANT_CONFIG: Record<BadgeVariant, { bg: string; color: string }> = {
  success: { bg: 'rgba(16,185,129,0.12)',  color: '#059669' },
  error:   { bg: 'rgba(239,68,68,0.12)',   color: '#DC2626' },
  warning: { bg: 'rgba(245,158,11,0.12)',  color: '#D97706' },
  info:    { bg: 'rgba(59,130,246,0.12)',  color: '#2563EB' },
  neutral: { bg: COLOR.NEUTRAL_100,         color: COLOR.NEUTRAL_600 },
  primary: { bg: COLOR.BG_ACCENT,           color: COLOR.PRIMARY_DARK },
};

export interface IBadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
}

export const Badge = ({ label, variant = 'neutral', size = 'md', dot = false }: IBadgeProps) => {
  const config = VARIANT_CONFIG[variant];
  const fontSize = size === 'sm' ? 10 : 12;
  const ph = size === 'sm' ? UNIT * 0.75 : UNIT;
  const pv = size === 'sm' ? UNIT * 0.375 : UNIT * 0.5;

  return (
    <Row
      middle
      style={{
        paddingHorizontal: ph,
        paddingVertical:   pv,
        backgroundColor:   config.bg,
        borderRadius:      ${t===0?0:9999},
        alignSelf:         'flex-start',
      }}
    >
      {dot && (
        <Row style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: config.color, marginRight: 5 }} />
      )}
      <Text semiBold style={{ fontSize, color: config.color, lineHeight: fontSize * 1.3 }}>
        {label}
      </Text>
    </Row>
  );
};
`}function gp(e){return`// Auto-generated by quickly-react Design System Studio
import React, { useState } from 'react';
import { Modal, TouchableOpacity, FlatList } from 'react-native';
import { Col, Row, Text } from '../index';
import { COLOR, RADIUS, UNIT } from '../tokens';

export interface IDropdownOption { label: string; value: string; }

export interface IDropdownProps {
  options: IDropdownOption[];
  value?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  onChange?: (option: IDropdownOption) => void;
}

export const Dropdown = ({ options, value, placeholder = 'Select…', label, error, onChange }: IDropdownProps) => {
  const [open, setOpen] = useState(false);
  const selected = options.find(o => o.value === value);

  return (
    <Col>
      {label && <Text bodySm semiBold colorMuted style={{ marginBottom: UNIT * 0.75 }}>{label}</Text>}
      <TouchableOpacity onPress={() => setOpen(true)} activeOpacity={0.8}>
        <Row middle style={{ borderWidth: 1.5, borderColor: error ? COLOR.ERROR : open ? COLOR.PRIMARY : COLOR.BORDER, borderRadius: RADIUS.md, backgroundColor: COLOR.BG_PRIMARY, paddingHorizontal: UNIT * 1.5, paddingVertical: UNIT * 1.25, justifyContent: 'space-between' }}>
          <Text body style={{ flex: 1, color: selected ? COLOR.TEXT_PRIMARY : COLOR.TEXT_TERTIARY }}>
            {selected ? selected.label : placeholder}
          </Text>
          <Text body colorMuted style={{ marginLeft: UNIT * 0.5 }}>▾</Text>
        </Row>
      </TouchableOpacity>
      {error && <Text caption style={{ marginTop: UNIT * 0.75, color: COLOR.ERROR }}>{error}</Text>}

      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        {/* Outer layer closes on backdrop tap */}
        <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'flex-end' }} activeOpacity={1} onPress={() => setOpen(false)}>
          {/* Inner panel absorbs taps so they don't reach the backdrop */}
          <TouchableOpacity activeOpacity={1} onPress={() => {}}>
            <Col style={{ margin: UNIT * 2, marginBottom: UNIT * 3, backgroundColor: COLOR.BG_PRIMARY, borderRadius: RADIUS.lg, overflow: 'hidden', maxHeight: 320 }}>
              <Row style={{ padding: UNIT * 2, borderBottomWidth: 1, borderBottomColor: COLOR.BORDER }}>
                <Text h6 colorDefault style={{ flex: 1 }}>{label ?? 'Select'}</Text>
                <TouchableOpacity onPress={() => setOpen(false)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                  <Text body colorMuted>✕</Text>
                </TouchableOpacity>
              </Row>
              <FlatList
                data={options}
                keyExtractor={item => item.value}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => { onChange?.(item); setOpen(false); }} activeOpacity={0.7}>
                    <Row middle style={{ paddingHorizontal: UNIT * 2, paddingVertical: UNIT * 1.5, borderBottomWidth: 1, borderBottomColor: COLOR.BORDER, backgroundColor: item.value === value ? COLOR.BG_ACCENT : 'transparent', justifyContent: 'space-between' }}>
                      <Text body style={{ color: item.value === value ? COLOR.PRIMARY : COLOR.TEXT_PRIMARY, fontWeight: item.value === value ? '600' : '400' }}>
                        {item.label}
                      </Text>
                      {item.value === value && <Text body colorPrimary>✓</Text>}
                    </Row>
                  </TouchableOpacity>
                )}
              />
            </Col>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </Col>
  );
};
`}function xp(e){return`// Auto-generated by quickly-react Design System Studio
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Col } from '../index';
import { COLOR, RADIUS, UNIT } from '../tokens';

export type IconButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';
export type IconButtonSize    = 'sm' | 'md' | 'lg';

export interface IIconButtonProps {
  icon: React.ReactNode;
  onPress?: () => void;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  disabled?: boolean;
  rounded?: boolean;
  accessibilityLabel?: string;
}

const VARIANT_STYLES: Record<IconButtonVariant, any> = {
  primary:     { backgroundColor: COLOR.PRIMARY,   borderWidth: 0 },
  secondary:   { backgroundColor: COLOR.BG_ACCENT, borderWidth: 1.5, borderColor: COLOR.PRIMARY },
  ghost:       { backgroundColor: 'transparent',    borderWidth: 1.5, borderColor: COLOR.BORDER },
  destructive: { backgroundColor: COLOR.ERROR,      borderWidth: 0 },
};

const SIZE_MAP: Record<IconButtonSize, number> = { sm: 32, md: 40, lg: 48 };

export const IconButton = ({
  icon, onPress, variant = 'ghost', size = 'md', disabled = false, rounded = false, accessibilityLabel,
}: IIconButtonProps) => {
  const dim = SIZE_MAP[size];
  return (
    <TouchableOpacity onPress={disabled ? undefined : onPress} activeOpacity={0.75} accessibilityLabel={accessibilityLabel} accessibilityRole="button">
      <Col style={[VARIANT_STYLES[variant], { width: dim, height: dim, borderRadius: rounded ? dim / 2 : RADIUS.md, alignItems: 'center', justifyContent: 'center', opacity: disabled ? 0.5 : 1 }]}>
        {icon}
      </Col>
    </TouchableOpacity>
  );
};
`}function vp(e){return`// Auto-generated by quickly-react Design System Studio
import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { Col, Text } from '../index';
import { COLOR, RADIUS, UNIT } from '../tokens';

export interface ITextareaProps extends Omit<TextInputProps, 'multiline' | 'style'> {
  label?: string;
  hint?: string;
  error?: string;
  rows?: number;
  containerStyle?: any;
}

export const Textarea = ({ label, hint, error, rows = 4, containerStyle, onFocus, onBlur, ...props }: ITextareaProps) => {
  const [focused, setFocused] = useState(false);
  const hasError = !!error;
  return (
    <Col style={containerStyle}>
      {label && <Text bodySm semiBold colorMuted style={{ marginBottom: UNIT * 0.75 }}>{label}</Text>}
      <TextInput
        {...props}
        multiline
        numberOfLines={rows}
        textAlignVertical="top"
        onFocus={e => { setFocused(true); onFocus?.(e); }}
        onBlur={e  => { setFocused(false); onBlur?.(e); }}
        placeholderTextColor={COLOR.TEXT_TERTIARY}
        style={{
          borderWidth: 1.5,
          borderColor: hasError ? COLOR.ERROR : focused ? COLOR.PRIMARY : COLOR.BORDER,
          borderRadius: RADIUS.md,
          backgroundColor: COLOR.BG_PRIMARY,
          paddingHorizontal: UNIT * 1.5,
          paddingVertical:   UNIT * 1.25,
          fontSize: 14,
          color: COLOR.TEXT_PRIMARY,
          minHeight: rows * 24,
          shadowColor:   hasError ? COLOR.ERROR : COLOR.PRIMARY,
          shadowOffset:  { width: 0, height: 0 },
          shadowOpacity: focused || hasError ? 0.2 : 0,
          shadowRadius:  4,
          elevation:     0,
        }}
      />
      {(hint || error) && (
        <Text caption style={{ marginTop: UNIT * 0.75, color: hasError ? COLOR.ERROR : COLOR.TEXT_TERTIARY }}>
          {error ?? hint}
        </Text>
      )}
    </Col>
  );
};
`}function Sp(e){return`// Auto-generated by quickly-react Design System Studio
import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import { Col, Row, Text } from '../index';
import { COLOR, RADIUS, UNIT } from '../tokens';

export interface ICheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  indeterminate?: boolean;
}

export const Checkbox = ({ checked = false, onChange, label, hint, error, disabled = false, indeterminate = false }: ICheckboxProps) => {
  const scale = useRef(new Animated.Value(checked || indeterminate ? 1 : 0)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: checked || indeterminate ? 1 : 0,
      useNativeDriver: true,
      tension: 300,
      friction: 20,
    }).start();
  }, [checked, indeterminate]);

  const active = checked || indeterminate;

  return (
    <TouchableOpacity onPress={() => !disabled && onChange?.(!checked)} activeOpacity={0.7} accessibilityRole="checkbox">
      <Row middle style={{ gap: UNIT * 1.25, opacity: disabled ? 0.5 : 1 }}>
        <Col style={{ width: 20, height: 20, borderRadius: RADIUS.sm, borderWidth: 2, borderColor: active ? COLOR.PRIMARY : error ? COLOR.ERROR : COLOR.NEUTRAL_300, backgroundColor: active ? COLOR.PRIMARY : 'transparent', alignItems: 'center', justifyContent: 'center' }}>
          <Animated.Text style={{ color: COLOR.WHITE, fontSize: indeterminate ? 14 : 11, fontWeight: '800', lineHeight: 14, transform: [{ scale }] }}>
            {indeterminate ? '−' : '✓'}
          </Animated.Text>
        </Col>
        {label && (
          <Col flex1>
            <Text body style={{ color: error ? COLOR.ERROR : COLOR.TEXT_PRIMARY }}>{label}</Text>
            {hint && <Text caption colorMuted style={{ marginTop: 2 }}>{hint}</Text>}
          </Col>
        )}
      </Row>
      {error && !label && <Text caption style={{ marginTop: UNIT * 0.5, color: COLOR.ERROR }}>{error}</Text>}
    </TouchableOpacity>
  );
};
`}function Cp(e){return`// Auto-generated by quickly-react Design System Studio
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Col, Row, Text } from '../index';
import { COLOR, UNIT } from '../tokens';

export interface IRadioOption { label: string; value: string; hint?: string; }

export interface IRadioGroupProps {
  options: IRadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  error?: string;
  disabled?: boolean;
  direction?: 'vertical' | 'horizontal';
}

export const RadioGroup = ({ options, value, onChange, label, error, disabled = false, direction = 'vertical' }: IRadioGroupProps) => (
  <Col>
    {label && <Text bodySm semiBold colorMuted style={{ marginBottom: UNIT }}>{label}</Text>}
    <Col style={direction === 'horizontal' ? { flexDirection: 'row', flexWrap: 'wrap', gap: UNIT * 2 } : { gap: UNIT * 1.25 }}>
      {options.map(option => {
        const active = option.value === value;
        return (
          <TouchableOpacity key={option.value} onPress={() => !disabled && onChange?.(option.value)} activeOpacity={0.7} accessibilityRole="radio">
            <Row middle style={{ gap: UNIT * 1.25, opacity: disabled ? 0.5 : 1 }}>
              <Col style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: active ? COLOR.PRIMARY : error ? COLOR.ERROR : COLOR.NEUTRAL_300, alignItems: 'center', justifyContent: 'center' }}>
                {active && <Col style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: COLOR.PRIMARY }} />}
              </Col>
              <Col>
                <Text body style={{ color: COLOR.TEXT_PRIMARY }}>{option.label}</Text>
                {option.hint && <Text caption colorMuted style={{ marginTop: 2 }}>{option.hint}</Text>}
              </Col>
            </Row>
          </TouchableOpacity>
        );
      })}
    </Col>
    {error && <Text caption style={{ marginTop: UNIT * 0.75, color: COLOR.ERROR }}>{error}</Text>}
  </Col>
);
`}function wp(e){return`// Auto-generated by quickly-react Design System Studio
import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import { Col, Row, Text } from '../index';
import { COLOR, UNIT } from '../tokens';

export interface ISwitchProps {
  value?: boolean;
  onChange?: (v: boolean) => void;
  label?: string;
  hint?: string;
  disabled?: boolean;
  size?: 'sm' | 'md';
}

export const Switch = ({ value = false, onChange, label, hint, disabled = false, size = 'md' }: ISwitchProps) => {
  const trackW   = size === 'sm' ? 36 : 44;
  const trackH   = size === 'sm' ? 20 : 24;
  const thumbSz  = size === 'sm' ? 16 : 20;
  const travel   = trackW - thumbSz - 4;

  const tx    = useRef(new Animated.Value(value ? travel : 0)).current;
  const color = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(tx,    { toValue: value ? travel : 0, useNativeDriver: true,  tension: 300, friction: 20 }),
      Animated.timing(color, { toValue: value ? 1 : 0,       useNativeDriver: false, duration: 150 }),
    ]).start();
  }, [value]);

  const trackBg = color.interpolate({ inputRange: [0, 1], outputRange: [COLOR.NEUTRAL_200, COLOR.PRIMARY] });

  return (
    <TouchableOpacity onPress={() => !disabled && onChange?.(!value)} activeOpacity={0.8} accessibilityRole="switch">
      <Row middle style={{ gap: UNIT * 1.25, opacity: disabled ? 0.5 : 1 }}>
        <Animated.View style={{ width: trackW, height: trackH, borderRadius: trackH / 2, backgroundColor: trackBg, padding: 2, justifyContent: 'center' }}>
          <Animated.View style={{ width: thumbSz, height: thumbSz, borderRadius: thumbSz / 2, backgroundColor: COLOR.WHITE, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.15, shadowRadius: 2, elevation: 2, transform: [{ translateX: tx }] }} />
        </Animated.View>
        {(label || hint) && (
          <Col>
            {label && <Text body style={{ color: COLOR.TEXT_PRIMARY }}>{label}</Text>}
            {hint  && <Text caption colorMuted style={{ marginTop: 2 }}>{hint}</Text>}
          </Col>
        )}
      </Row>
    </TouchableOpacity>
  );
};
`}function Rp(){return`// Auto-generated by quickly-react Design System Studio
import React from 'react';
import { Row, Text } from '../index';
import { COLOR, UNIT } from '../tokens';

export interface ILabelProps {
  children: React.ReactNode;
  required?: boolean;
  optional?: boolean;
  style?: any;
}

export const Label = ({ children, required, optional, style }: ILabelProps) => (
  <Row middle style={[{ gap: UNIT * 0.5 }, style]}>
    <Text bodySm semiBold colorDefault>{children}</Text>
    {required && <Text caption style={{ color: COLOR.ERROR }}>*</Text>}
    {optional && <Text caption colorMuted>(optional)</Text>}
  </Row>
);
`}function bp(){return`// Auto-generated by quickly-react Design System Studio
import React from 'react';
import { Text } from '../index';
import { COLOR, UNIT } from '../tokens';

export type HelperVariant = 'default' | 'error' | 'success' | 'warning';

export interface IHelperTextProps {
  children: React.ReactNode;
  variant?: HelperVariant;
  style?: any;
}

const COLOR_MAP: Record<HelperVariant, string> = {
  default: COLOR.TEXT_TERTIARY,
  error:   COLOR.ERROR,
  success: COLOR.SUCCESS,
  warning: COLOR.WARNING,
};

const ICON_MAP: Record<HelperVariant, string> = {
  default: '',
  error:   '⚠ ',
  success: '✓ ',
  warning: '! ',
};

export const HelperText = ({ children, variant = 'default', style }: IHelperTextProps) => (
  <Text caption style={[{ color: COLOR_MAP[variant], marginTop: UNIT * 0.75 }, style]}>
    {ICON_MAP[variant]}{children}
  </Text>
);
`}function Tp(){return`// Auto-generated by quickly-react Design System Studio
import React from 'react';
import { Col } from '../index';
import { Label } from './Label';
import { HelperText } from './HelperText';
import { UNIT } from '../tokens';

export interface IFormFieldProps {
  label?: string;
  required?: boolean;
  optional?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
  style?: any;
}

export const FormField = ({ label, required, optional, hint, error, children, style }: IFormFieldProps) => (
  <Col style={[{ gap: UNIT * 0.75 }, style]}>
    {label && <Label required={required} optional={optional}>{label}</Label>}
    {children}
    {(error || hint) && <HelperText variant={error ? 'error' : 'default'}>{error ?? hint}</HelperText>}
  </Col>
);
`}function kp(e){return`// Auto-generated by quickly-react Design System Studio
import React, { useState } from 'react';
import { TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import { Col, Row, Text } from '../index';
import { COLOR, RADIUS, UNIT } from '../tokens';

export interface ISearchBarProps extends Omit<TextInputProps, 'style'> {
  value?: string;
  onChangeText?: (text: string) => void;
  onClear?: () => void;
  containerStyle?: any;
}

export const SearchBar = ({ value = '', onChangeText, onClear, containerStyle, ...props }: ISearchBarProps) => {
  const [focused, setFocused] = useState(false);
  return (
    <Row middle style={[{ borderWidth: 1.5, borderColor: focused ? COLOR.PRIMARY : COLOR.BORDER, borderRadius: RADIUS.full, backgroundColor: COLOR.BG_SECONDARY, paddingHorizontal: UNIT * 1.5, paddingVertical: UNIT, gap: UNIT, shadowColor: COLOR.PRIMARY, shadowOffset: { width: 0, height: 0 }, shadowOpacity: focused ? 0.15 : 0, shadowRadius: 4, elevation: 0 }, containerStyle]}>
      <Text body style={{ color: COLOR.TEXT_TERTIARY, fontSize: 16 }}>🔍</Text>
      <TextInput
        {...props}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor={COLOR.TEXT_TERTIARY}
        returnKeyType="search"
        style={{ flex: 1, fontSize: 15, color: COLOR.TEXT_PRIMARY }}
      />
      {!!value && (
        <TouchableOpacity onPress={() => { onChangeText?.(''); onClear?.(); }} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
          <Col style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: COLOR.NEUTRAL_300, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: COLOR.WHITE, fontSize: 10, fontWeight: '700' }}>✕</Text>
          </Col>
        </TouchableOpacity>
      )}
    </Row>
  );
};
`}function Op(e){return`// Auto-generated by quickly-react Design System Studio
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { Col, Row, Text } from '../index';
import { COLOR, RADIUS, UNIT } from '../tokens';

// ─── InfoBox — inline alert banner ───────────────────────────

export type AlertVariant = 'success' | 'warning' | 'error' | 'info';

export interface IInfoBoxProps {
  variant?: AlertVariant;
  title?: string;
  message: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  action?: { label: string; onPress: () => void };
}

const ALERT: Record<AlertVariant, { bg: string; border: string; icon: string; text: string }> = {
  success: { bg: 'rgba(16,185,129,0.08)',  border: '#10B981', icon: '✓', text: '#059669' },
  warning: { bg: 'rgba(245,158,11,0.08)',  border: '#F59E0B', icon: '!',       text: '#D97706' },
  error:   { bg: 'rgba(239,68,68,0.08)',   border: '#EF4444', icon: '✕',  text: '#DC2626' },
  info:    { bg: 'rgba(59,130,246,0.08)',  border: '#3B82F6', icon: 'i',       text: '#2563EB' },
};

export const InfoBox = ({ variant = 'info', title, message, dismissible = false, onDismiss, action }: IInfoBoxProps) => {
  const c = ALERT[variant];
  return (
    <Row style={{ backgroundColor: c.bg, borderWidth: 1, borderColor: c.border + '40', borderLeftWidth: 3, borderLeftColor: c.border, borderRadius: RADIUS.md, padding: UNIT * 1.5, gap: UNIT * 1.25, alignItems: 'flex-start' }}>
      <Col style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: c.border, alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
        <Text style={{ color: COLOR.WHITE, fontSize: 11, fontWeight: '800', lineHeight: 14 }}>{c.icon}</Text>
      </Col>
      <Col flex1>
        {title && <Text body semiBold style={{ color: c.text, marginBottom: 2 }}>{title}</Text>}
        <Text body style={{ color: c.text, lineHeight: 22 }}>{message}</Text>
        {action && (
          <TouchableOpacity onPress={action.onPress} style={{ marginTop: UNIT }}>
            <Text bodySm semiBold style={{ color: c.border }}>{action.label} →</Text>
          </TouchableOpacity>
        )}
      </Col>
      {dismissible && (
        <TouchableOpacity onPress={onDismiss} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
          <Text body style={{ color: c.text, opacity: 0.6 }}>✕</Text>
        </TouchableOpacity>
      )}
    </Row>
  );
};

// ─── Toast system ─────────────────────────────────────────────

export interface IToast { id: string; variant: AlertVariant; message: string; title?: string; duration?: number; }

const ToastItem = ({ toast, onDismiss }: { toast: IToast; onDismiss: (id: string) => void }) => {
  const ty      = useRef(new Animated.Value(-60)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const c       = ALERT[toast.variant];

  const dismiss = useCallback(() => {
    Animated.parallel([
      Animated.timing(ty,      { toValue: -60, duration: 220, useNativeDriver: true }),
      Animated.timing(opacity, { toValue: 0,   duration: 220, useNativeDriver: true }),
    ]).start(() => onDismiss(toast.id));
  }, []);

  useEffect(() => {
    Animated.parallel([
      Animated.spring(ty,      { toValue: 0, useNativeDriver: true,  tension: 200, friction: 20 }),
      Animated.timing(opacity, { toValue: 1, useNativeDriver: true,  duration: 200 }),
    ]).start();
    const t = setTimeout(dismiss, toast.duration ?? 3500);
    return () => clearTimeout(t);
  }, []);

  return (
    <Animated.View style={{ transform: [{ translateY: ty }], opacity, marginBottom: UNIT }}>
      <Row style={{ backgroundColor: COLOR.BG_PRIMARY, borderRadius: RADIUS.lg, borderWidth: 1, borderColor: c.border + '40', borderLeftWidth: 3, borderLeftColor: c.border, padding: UNIT * 1.5, gap: UNIT, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.12, shadowRadius: 8, elevation: 6 }}>
        <Col style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: c.border, alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Text style={{ color: COLOR.WHITE, fontSize: 10, fontWeight: '800' }}>{c.icon}</Text>
        </Col>
        <Col flex1>
          {toast.title && <Text bodySm semiBold style={{ color: c.text }}>{toast.title}</Text>}
          <Text bodySm style={{ color: COLOR.TEXT_PRIMARY }}>{toast.message}</Text>
        </Col>
        <TouchableOpacity onPress={dismiss} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
          <Text body colorMuted>✕</Text>
        </TouchableOpacity>
      </Row>
    </Animated.View>
  );
};

export const ToastContainer = ({ toasts, onDismiss, position = 'top' }: { toasts: IToast[]; onDismiss: (id: string) => void; position?: 'top' | 'bottom' }) => (
  <Col style={{ position: 'absolute', left: UNIT * 2, right: UNIT * 2, ...(position === 'top' ? { top: UNIT * 6 } : { bottom: UNIT * 10 }), zIndex: 9999 }} pointerEvents="box-none">
    {toasts.map(t => <ToastItem key={t.id} toast={t} onDismiss={onDismiss} />)}
  </Col>
);

export const useToast = () => {
  const [toasts, setToasts] = useState<IToast[]>([]);
  const dismiss = useCallback((id: string) => setToasts(p => p.filter(t => t.id !== id)), []);
  const show = useCallback((variant: AlertVariant, message: string, opts?: { title?: string; duration?: number }) => {
    setToasts(p => [...p, { id: Math.random().toString(36).slice(2), variant, message, ...opts }]);
  }, []);
  return {
    toasts, dismiss,
    success: (msg: string, opts?: any) => show('success', msg, opts),
    warning: (msg: string, opts?: any) => show('warning', msg, opts),
    error:   (msg: string, opts?: any) => show('error',   msg, opts),
    info:    (msg: string, opts?: any) => show('info',    msg, opts),
  };
};
`}function Ip(e){return`// Auto-generated by quickly-react Design System Studio
import React, { useState } from 'react';
import { TouchableOpacity, Platform, UIManager, LayoutAnimation } from 'react-native';
import { Col, Row, Text } from '../index';
import { COLOR, RADIUS, UNIT } from '../tokens';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export interface IAccordionItem { key: string; title: string; content: React.ReactNode; subtitle?: string; }

export interface IAccordionProps {
  items: IAccordionItem[];
  multiple?: boolean;
  defaultOpen?: string[];
}

export const Accordion = ({ items, multiple = false, defaultOpen = [] }: IAccordionProps) => {
  const [openKeys, setOpenKeys] = useState<string[]>(defaultOpen);

  const toggle = (key: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpenKeys(prev =>
      multiple
        ? prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
        : prev.includes(key) ? [] : [key]
    );
  };

  return (
    <Col style={{ borderWidth: 1, borderColor: COLOR.BORDER, borderRadius: RADIUS.lg, overflow: 'hidden' }}>
      {items.map((item, i) => {
        const isOpen = openKeys.includes(item.key);
        return (
          <Col key={item.key} style={i < items.length - 1 ? { borderBottomWidth: 1, borderBottomColor: COLOR.BORDER } : undefined}>
            <TouchableOpacity onPress={() => toggle(item.key)} activeOpacity={0.7}>
              <Row middle style={{ paddingHorizontal: UNIT * 2, paddingVertical: UNIT * 1.75, backgroundColor: isOpen ? COLOR.BG_SECONDARY : COLOR.BG_PRIMARY, justifyContent: 'space-between', gap: UNIT }}>
                <Col flex1>
                  <Text body semiBold colorDefault>{item.title}</Text>
                  {item.subtitle && <Text caption colorMuted style={{ marginTop: 2 }}>{item.subtitle}</Text>}
                </Col>
                <Text body colorMuted style={{ fontSize: 11, transform: [{ rotate: isOpen ? '180deg' : '0deg' }] }}>▼</Text>
              </Row>
            </TouchableOpacity>
            {isOpen && (
              <Col style={{ paddingHorizontal: UNIT * 2, paddingVertical: UNIT * 2, backgroundColor: COLOR.BG_PRIMARY, borderTopWidth: 1, borderTopColor: COLOR.BORDER }}>
                {item.content}
              </Col>
            )}
          </Col>
        );
      })}
    </Col>
  );
};
`}function jp(){return`// Auto-generated by quickly-react Design System Studio
import React from 'react';
import { Modal, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { Col, Row, Text } from '../index';
import { COLOR, RADIUS, UNIT } from '../tokens';

export type DialogSize = 'sm' | 'md' | 'lg' | 'full';

export interface IDialogProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  size?: DialogSize;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  dismissible?: boolean;
}

const WIDTH: Record<DialogSize, any> = { sm: 340, md: 480, lg: 600, full: '95%' };

export const Dialog = ({ visible, onClose, title, size = 'md', children, footer, dismissible = true }: IDialogProps) => (
  <Modal visible={visible} transparent animationType="fade" statusBarTranslucent onRequestClose={dismissible ? onClose : undefined}>
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {/* Backdrop — closes dialog when tapped if dismissible */}
      <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center', padding: UNIT * 2 }} activeOpacity={1} onPress={dismissible ? onClose : undefined}>
        {/* Panel — absorbs taps so they don't reach the backdrop */}
        <TouchableOpacity activeOpacity={1} onPress={() => {}} style={{ width: WIDTH[size], maxWidth: '100%' }}>
          <Col style={{ backgroundColor: COLOR.BG_PRIMARY, borderRadius: RADIUS.xl, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 20 }, shadowOpacity: 0.25, shadowRadius: 40, elevation: 20 }}>
            {/* Header */}
            {title && (
              <Row middle style={{ paddingHorizontal: UNIT * 3, paddingVertical: UNIT * 2.5, borderBottomWidth: 1, borderBottomColor: COLOR.BORDER, justifyContent: 'space-between' }}>
                <Text h5 colorDefault style={{ flex: 1 }}>{title}</Text>
                <TouchableOpacity onPress={onClose} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                  <Col style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: COLOR.NEUTRAL_100, alignItems: 'center', justifyContent: 'center' }}>
                    <Text body colorMuted style={{ fontSize: 12 }}>✕</Text>
                  </Col>
                </TouchableOpacity>
              </Row>
            )}
            {/* Body */}
            <ScrollView><Col style={{ padding: UNIT * 3 }}>{children}</Col></ScrollView>
            {/* Footer */}
            {footer && (
              <Row middle style={{ paddingHorizontal: UNIT * 3, paddingVertical: UNIT * 2, borderTopWidth: 1, borderTopColor: COLOR.BORDER, justifyContent: 'flex-end', gap: UNIT }}>
                {footer}
              </Row>
            )}
          </Col>
        </TouchableOpacity>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  </Modal>
);
`}function Np(){return`// Auto-generated by quickly-react Design System Studio
import React, { useState, useRef } from 'react';
import { TouchableOpacity, Modal, View } from 'react-native';
import { Col, Text } from '../index';
import { COLOR, RADIUS, UNIT } from '../tokens';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface ITooltipProps {
  content: string;
  position?: TooltipPosition;
  children: React.ReactNode;
  maxWidth?: number;
}

export const Tooltip = ({ content, position = 'top', children, maxWidth = 200 }: ITooltipProps) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0, w: 0, h: 0 });
  const ref = useRef<View>(null);

  const show = () => {
    ref.current?.measure((_fx, _fy, w, h, px, py) => {
      setCoords({ x: px, y: py, w, h });
      setVisible(true);
    });
  };

  const pos = (): any => {
    const g = 8;
    switch (position) {
      case 'top':    return { bottom: coords.y - g, left: coords.x + coords.w / 2 - maxWidth / 2 };
      case 'bottom': return { top: coords.y + coords.h + g, left: coords.x + coords.w / 2 - maxWidth / 2 };
      case 'left':   return { top: coords.y + coords.h / 2 - 14, right: coords.x - g };
      case 'right':  return { top: coords.y + coords.h / 2 - 14, left: coords.x + coords.w + g };
    }
  };

  return (
    <>
      <TouchableOpacity ref={ref as any} onPress={show} activeOpacity={0.8}>{children}</TouchableOpacity>
      <Modal visible={visible} transparent animationType="none" onRequestClose={() => setVisible(false)}>
        <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={() => setVisible(false)}>
          <Col style={{ position: 'absolute', ...pos(), maxWidth, backgroundColor: COLOR.NEUTRAL_900, borderRadius: RADIUS.sm, paddingHorizontal: UNIT * 1.25, paddingVertical: UNIT * 0.75, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.15, shadowRadius: 4, elevation: 10 }}>
            <Text caption style={{ color: COLOR.WHITE, lineHeight: 18 }}>{content}</Text>
          </Col>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
`}function Ep(){return`// Auto-generated by quickly-react Design System Studio
import React, { useState, useRef } from 'react';
import { TouchableOpacity, Modal, View } from 'react-native';
import { Col, Row, Text } from '../index';
import { COLOR, RADIUS, UNIT } from '../tokens';

export type PopoverPosition = 'top' | 'bottom' | 'left' | 'right';

export interface IPopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  title?: string;
  position?: PopoverPosition;
  width?: number;
}

export const Popover = ({ trigger, content, title, position = 'bottom', width = 260 }: IPopoverProps) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0, w: 0, h: 0 });
  const ref = useRef<View>(null);

  const show = () => {
    ref.current?.measure((_fx, _fy, w, h, px, py) => {
      setCoords({ x: px, y: py, w, h });
      setVisible(true);
    });
  };

  const pos = (): any => {
    const g = 8;
    switch (position) {
      case 'top':    return { bottom: coords.y - g,             left: coords.x };
      case 'bottom': return { top: coords.y + coords.h + g,     left: coords.x };
      case 'left':   return { top: coords.y,                    right: coords.x - g };
      case 'right':  return { top: coords.y,                    left: coords.x + coords.w + g };
    }
  };

  return (
    <>
      <TouchableOpacity ref={ref as any} onPress={show} activeOpacity={0.8}>{trigger}</TouchableOpacity>
      <Modal visible={visible} transparent animationType="fade" onRequestClose={() => setVisible(false)}>
        <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={() => setVisible(false)}>
          {/* Panel absorbs taps */}
          <TouchableOpacity activeOpacity={1} onPress={() => {}} style={{ position: 'absolute', ...pos(), width }}>
            <Col style={{ backgroundColor: COLOR.BG_PRIMARY, borderRadius: RADIUS.lg, borderWidth: 1, borderColor: COLOR.BORDER, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.15, shadowRadius: 20, elevation: 12 }}>
              {title && (
                <Row middle style={{ paddingHorizontal: UNIT * 2, paddingVertical: UNIT * 1.5, borderBottomWidth: 1, borderBottomColor: COLOR.BORDER, justifyContent: 'space-between' }}>
                  <Text bodySm semiBold colorDefault>{title}</Text>
                  <TouchableOpacity onPress={() => setVisible(false)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                    <Text body colorMuted style={{ fontSize: 12 }}>✕</Text>
                  </TouchableOpacity>
                </Row>
              )}
              <Col style={{ padding: UNIT * 2 }}>{content}</Col>
            </Col>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
`}function Pp(){return`// Auto-generated by quickly-react Design System Studio
import React from 'react';
import { Col, Row, Text } from '../index';
import { COLOR, UNIT } from '../tokens';

export interface ISectionProps {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
  children?: React.ReactNode;
  padded?: boolean;
  style?: any;
}

export const Section = ({
  title,
  subtitle,
  action,
  children,
  padded = true,
  style,
}: ISectionProps) => (
  <Col
    bgSurface2
    style={[padded && { paddingHorizontal: UNIT * 2, paddingVertical: UNIT * 3 }, style]}
  >
    {(title || action) && (
      <Row middle style={{ justifyContent: 'space-between', marginBottom: UNIT * 2.5 }}>
        <Col flex1>
          {title && <Text h5 colorDefault>{title}</Text>}
          {subtitle && <Text bodySm colorMuted style={{ marginTop: 4 }}>{subtitle}</Text>}
        </Col>
        {action && <Col style={{ marginLeft: UNIT }}>{action}</Col>}
      </Row>
    )}
    {children}
  </Col>
);
`}function Lp(){return`// Auto-generated by quickly-react Design System Studio
import React from 'react';
import { ScrollView } from 'react-native';
import { Col, Row, Text } from '../index';
import { COLOR, RADIUS, UNIT } from '../tokens';

export interface ISidebarItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
}

export interface ILeftSidebarProps {
  items: ISidebarItem[];
  activeKey?: string;
  onSelect?: (key: string) => void;
  logo?: React.ReactNode;
  footerSlot?: React.ReactNode;
  children?: React.ReactNode;
  sidebarWidth?: number;
}

export const LeftSidebar = ({
  items,
  activeKey,
  onSelect,
  logo,
  footerSlot,
  children,
  sidebarWidth = 220,
}: ILeftSidebarProps) => (
  <Row style={{ flex: 1 }}>
    {/* Sidebar */}
    <Col
      style={{
        width: sidebarWidth,
        backgroundColor: COLOR.NEUTRAL_900,
        paddingHorizontal: UNIT,
        paddingVertical: UNIT * 1.5,
      }}
    >
      {logo && (
        <Col style={{ paddingHorizontal: UNIT * 0.5, paddingVertical: UNIT, marginBottom: UNIT }}>
          {logo}
        </Col>
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        {items.map(item => {
          const active = item.key === activeKey;
          return (
            <Col
              key={item.key}
              onPress={() => onSelect?.(item.key)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: UNIT,
                paddingHorizontal: UNIT * 1.5,
                paddingVertical: UNIT * 0.875,
                borderRadius: RADIUS.md,
                marginBottom: 2,
                backgroundColor: active ? COLOR.PRIMARY : 'transparent',
              }}
            >
              {item.icon && (
                <Col style={{ opacity: active ? 1 : 0.6 }}>{item.icon}</Col>
              )}
              <Text
                bodySm
                style={{
                  color: active ? COLOR.WHITE : 'rgba(255,255,255,0.55)',
                  fontWeight: active ? '600' : '400',
                }}
              >
                {item.label}
              </Text>
            </Col>
          );
        })}
      </ScrollView>
      {footerSlot && (
        <Col style={{ paddingHorizontal: UNIT * 0.5, paddingTop: UNIT }}>
          {footerSlot}
        </Col>
      )}
    </Col>
    {/* Main content */}
    <Col flex1 bgSurface2>
      {children}
    </Col>
  </Row>
);
`}function Ap(){return`// Auto-generated by quickly-react Design System Studio
import React from 'react';
import { Col, Row } from '../index';
import { COLOR } from '../tokens';

export interface IMasterDetailProps {
  master: React.ReactNode;
  detail: React.ReactNode;
  detailWidth?: number;
  showDetail?: boolean;
}

export const MasterDetail = ({
  master,
  detail,
  detailWidth = 300,
  showDetail = true,
}: IMasterDetailProps) => (
  <Row style={{ flex: 1 }}>
    <Col
      flex1
      bgSurface
      style={showDetail ? { borderRightWidth: 1, borderRightColor: COLOR.BORDER } : undefined}
    >
      {master}
    </Col>
    {showDetail && (
      <Col style={{ width: detailWidth }} bgSurface2>
        {detail}
      </Col>
    )}
  </Row>
);
`}function Dp(){return`// Auto-generated by quickly-react Design System Studio
import React, { useState } from 'react';
import { Modal, TouchableOpacity, StatusBar } from 'react-native';
import { Col, Row, Text } from '../index';
import { COLOR, RADIUS, UNIT } from '../tokens';

export interface IHeaderProps {
  title?: string;
  logo?: React.ReactNode;
  rightSlot?: React.ReactNode;
  drawerContent?: React.ReactNode;
  onMenuPress?: () => void;
}

export const Header = ({
  title = 'App',
  logo,
  rightSlot,
  drawerContent,
  onMenuPress,
}: IHeaderProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Row
        middle
        bgSurface
        style={{
          height: 52,
          paddingHorizontal: UNIT * 2,
          borderBottomWidth: 1,
          borderBottomColor: COLOR.BORDER,
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity
          onPress={drawerContent ? () => setDrawerOpen(true) : onMenuPress}
          activeOpacity={0.7}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Col style={{ gap: 5, paddingVertical: 4 }}>
            {[0, 1, 2].map(i => (
              <Col key={i} style={{ width: 20, height: 2, backgroundColor: COLOR.TEXT_PRIMARY, borderRadius: 1 }} />
            ))}
          </Col>
        </TouchableOpacity>

        <Col style={{ position: 'absolute', left: 0, right: 0, alignItems: 'center', pointerEvents: 'none' }}>
          {logo ?? <Text h6 colorDefault>{title}</Text>}
        </Col>

        <Col style={{ marginLeft: 'auto' }}>{rightSlot}</Col>
      </Row>

      {drawerContent && (
        <Modal
          visible={drawerOpen}
          transparent
          animationType="slide"
          onRequestClose={() => setDrawerOpen(false)}
        >
          <Row style={{ flex: 1 }}>
            <Col
              style={{
                width: 280,
                backgroundColor: COLOR.NEUTRAL_900,
                paddingTop: StatusBar.currentHeight ?? 44,
              }}
            >
              {drawerContent}
            </Col>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}
              activeOpacity={1}
              onPress={() => setDrawerOpen(false)}
            />
          </Row>
        </Modal>
      )}
    </>
  );
};
`}function _p(){return`// Auto-generated by quickly-react Design System Studio
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Col, Row, Text } from '../index';
import { COLOR, UNIT } from '../tokens';

export interface IBottomNavTab {
  key: string;
  label: string;
  icon: React.ReactNode;
  badge?: number;
}

export interface IBottomNavProps {
  tabs: IBottomNavTab[];
  activeKey?: string;
  onSelect?: (key: string) => void;
}

export const BottomNav = ({ tabs, activeKey, onSelect }: IBottomNavProps) => (
  <Row
    middle
    bgSurface
    style={{
      height: 60,
      borderTopWidth: 1,
      borderTopColor: COLOR.BORDER,
      paddingBottom: UNIT,
    }}
  >
    {tabs.map(tab => {
      const active = tab.key === activeKey;
      return (
        <TouchableOpacity
          key={tab.key}
          style={{ flex: 1, alignItems: 'center', paddingTop: UNIT * 0.75 }}
          onPress={() => onSelect?.(tab.key)}
          activeOpacity={0.7}
        >
          <Col style={{ position: 'relative' }}>
            {tab.icon}
            {!!tab.badge && tab.badge > 0 && (
              <Col
                style={{
                  position: 'absolute',
                  top: -4,
                  right: -8,
                  minWidth: 16,
                  height: 16,
                  borderRadius: 8,
                  backgroundColor: COLOR.ERROR,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 3,
                }}
              >
                <Text style={{ fontSize: 9, fontWeight: '700', color: COLOR.WHITE }}>
                  {tab.badge > 99 ? '99+' : tab.badge}
                </Text>
              </Col>
            )}
          </Col>
          <Text
            style={{
              marginTop: 3,
              fontSize: 10,
              color: active ? COLOR.PRIMARY : COLOR.TEXT_TERTIARY,
              fontWeight: active ? '600' : '400',
            }}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      );
    })}
  </Row>
);
`}function Bp(){return`// Auto-generated by quickly-react Design System Studio
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Col, Row, Text } from '../index';
import { COLOR, RADIUS, UNIT } from '../tokens';

export type TabsVariant = 'underline' | 'pill' | 'solid';

export interface ITab {
  key: string;
  label: string;
  content?: React.ReactNode;
}

export interface ITabsProps {
  tabs: ITab[];
  activeKey?: string;
  onSelect?: (key: string) => void;
  variant?: TabsVariant;
  scrollable?: boolean;
}

export const Tabs = ({
  tabs,
  activeKey,
  onSelect,
  variant = 'underline',
  scrollable = false,
}: ITabsProps) => {
  const TabBar = scrollable
    ? ({ children }: any) => (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Row>{children}</Row>
        </ScrollView>
      )
    : ({ children }: any) => <Row>{children}</Row>;

  return (
    <Col>
      {/* Tab bar */}
      <Col
        style={
          variant === 'pill'
            ? { flexDirection: 'row', padding: UNIT * 0.75, backgroundColor: COLOR.BG_TERTIARY, borderRadius: RADIUS.md + 4 }
            : variant === 'underline'
            ? { borderBottomWidth: 1.5, borderBottomColor: COLOR.BORDER }
            : undefined
        }
      >
        <TabBar>
          {tabs.map(tab => {
            const active = tab.key === activeKey;
            return (
              <TouchableOpacity
                key={tab.key}
                onPress={() => onSelect?.(tab.key)}
                activeOpacity={0.7}
                style={[
                  {
                    paddingVertical: variant === 'pill' ? UNIT * 0.625 : UNIT,
                    paddingHorizontal: variant === 'pill' ? UNIT * 1.5 : UNIT * 2,
                  },
                  variant === 'underline' && {
                    borderBottomWidth: 2,
                    borderBottomColor: active ? COLOR.PRIMARY : 'transparent',
                    marginBottom: -1.5,
                  },
                  variant === 'pill' && {
                    borderRadius: RADIUS.md,
                    backgroundColor: active ? COLOR.BG_PRIMARY : 'transparent',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: active ? 0.08 : 0,
                    shadowRadius: 3,
                    elevation: active ? 2 : 0,
                  },
                  variant === 'solid' && {
                    borderRadius: RADIUS.md,
                    borderWidth: 1,
                    borderColor: active ? COLOR.PRIMARY : COLOR.BORDER,
                    backgroundColor: active ? COLOR.PRIMARY : 'transparent',
                    marginRight: UNIT * 0.5,
                  },
                ]}
              >
                <Text
                  bodySm
                  style={{
                    fontWeight: active ? '600' : '400',
                    color:
                      variant === 'solid' && active
                        ? COLOR.WHITE
                        : active
                        ? COLOR.PRIMARY
                        : COLOR.TEXT_SECONDARY,
                  }}
                >
                  {tab.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </TabBar>
      </Col>

      {/* Active tab content */}
      {tabs.map(tab =>
        tab.key === activeKey && tab.content ? (
          <Col key={tab.key} style={{ marginTop: UNIT * 2 }}>
            {tab.content}
          </Col>
        ) : null
      )}
    </Col>
  );
};
`}function zp(e){const{typography:{fontFamily:t},borders:{radius:r},spacing:{unit:n},shadows:{style:o},colors:l}=e;return`# Design System

Auto-generated by [quickly-react Design System Studio](https://github.com/lequanghuylc/quickly-react).

## Settings used

| Token        | Value         |
|--------------|---------------|
| Brand color  | \`${l.primary}\` |
| Font family  | ${t} |
| Border radius| ${r}px   |
| Spacing unit | ${n}px     |
| Shadow style | ${o}|

## Setup

### 1. Install dependencies

\`\`\`bash
npm install quickly-react react-native
# or
yarn add quickly-react react-native
\`\`\`

### 2. Load fonts

In your Expo project, install and load the **${t}** font family.

\`\`\`bash
npx expo install @expo-google-fonts/${t.toLowerCase().replace(/ /g,"-")}
\`\`\`

Then in your \`App.tsx\`:
\`\`\`tsx
import { useFonts, ${t.replace(/ /g,"_")}_400Regular, ... } from '@expo-google-fonts/${t.toLowerCase().replace(/ /g,"-")}';

export default function App() {
  const [fontsLoaded] = useFonts({ '${t.replace(/ /g,"")}-Regular': ${t.replace(/ /g,"_")}_400Regular, ... });
  if (!fontsLoaded) return null;
  return <YourApp />;
}
\`\`\`

### 3. Use components

\`\`\`tsx
import { Col, Row, Text, Grid } from './design-system';
import { Button } from './design-system/components/Button';
import { Input  } from './design-system/components/Input';
import { Card   } from './design-system/components/Card';
import { Badge  } from './design-system/components/Badge';

export default function Example() {
  return (
    <Col flex1 bgSurface p4>
      <Text h3 colorDefault bold>Hello World</Text>
      <Text body colorMuted mt1>Built with quickly-react</Text>

      <Button title="Get Started" onPress={() => {}} />

      <Card title="My Card" subtitle="Subtitle here">
        <Text body colorDefault>Card content goes here.</Text>
      </Card>

      <Row mt2 style={{ gap: 8 }}>
        <Badge label="Active"  variant="success" dot />
        <Badge label="Draft"   variant="neutral" />
        <Badge label="Pending" variant="warning" dot />
      </Row>
    </Col>
  );
}
\`\`\`

## File structure

\`\`\`
design-system/
├── tokens.ts              ← All design tokens (colors, fonts, radii, spacing)
├── textProps.ts           ← Typography prop definitions
├── viewProps.ts           ← Layout & visual prop definitions
├── index.tsx              ← createBase() call — exports Col, Row, Text, Grid
├── components/
│   ├── Button.tsx         ← Button (primary, secondary, ghost, destructive, sizes)
│   ├── Input.tsx          ← Text input with label, error, icons
│   ├── Card.tsx           ← Card with title, badge, footer slots
│   ├── Badge.tsx          ← Status badge (success, error, warning, info…)
│   ├── Dropdown.tsx       ← Modal-based dropdown/select
│   └── Section.tsx        ← Page section container with title + action slot
└── layouts/
    ├── LeftSidebar.tsx    ← Dark sidebar + main content area
    ├── MasterDetail.tsx   ← List-detail split layout
    ├── Header.tsx         ← App header with hamburger + sliding drawer
    ├── BottomNav.tsx      ← Mobile bottom tab bar with badge support
    └── Tabs.tsx           ← Tabs (underline / pill / solid variants)
\`\`\`

Modify \`tokens.ts\` to adjust the design system, then re-run the Studio to regenerate components.
`}function mc(e){return{"tokens.ts":up(e),"textProps.ts":cp(e),"viewProps.ts":dp(e),"index.tsx":fp(e),"README.md":zp(e),"Button.tsx":pp(e),"IconButton.tsx":xp(),"Input.tsx":mp(),"Textarea.tsx":vp(),"Card.tsx":hp(e),"Badge.tsx":yp(e),"Dropdown.tsx":gp(),"Section.tsx":Pp(),"Checkbox.tsx":Sp(),"Radio.tsx":Cp(),"Switch.tsx":wp(),"Label.tsx":Rp(),"HelperText.tsx":bp(),"FormField.tsx":Tp(),"SearchBar.tsx":kp(),"Toast.tsx":Op(),"Accordion.tsx":Ip(),"LeftSidebar.tsx":Lp(),"MasterDetail.tsx":Ap(),"Header.tsx":Dp(),"BottomNav.tsx":_p(),"Tabs.tsx":Bp(),"Dialog.tsx":jp(),"Tooltip.tsx":Np(),"Popover.tsx":Ep()}}async function Fp(e){const[{default:t},{saveAs:r}]=await Promise.all([Ya(()=>import("./jszip.min-DHDWSrDY.js").then(c=>c.j),[]),Ya(()=>import("./FileSaver.min-DlGxcO8T.js").then(c=>c.F),[])]),n=mc(e),o=new t,l=o.folder("design-system"),i=l.folder("components"),s=l.folder("layouts");l.file("tokens.ts",n["tokens.ts"]),l.file("textProps.ts",n["textProps.ts"]),l.file("viewProps.ts",n["viewProps.ts"]),l.file("index.tsx",n["index.tsx"]),l.file("README.md",n["README.md"]),i.file("Button.tsx",n["Button.tsx"]),i.file("IconButton.tsx",n["IconButton.tsx"]),i.file("Input.tsx",n["Input.tsx"]),i.file("Textarea.tsx",n["Textarea.tsx"]),i.file("Card.tsx",n["Card.tsx"]),i.file("Badge.tsx",n["Badge.tsx"]),i.file("Dropdown.tsx",n["Dropdown.tsx"]),i.file("Section.tsx",n["Section.tsx"]),i.file("Checkbox.tsx",n["Checkbox.tsx"]),i.file("Radio.tsx",n["Radio.tsx"]),i.file("Switch.tsx",n["Switch.tsx"]),i.file("Label.tsx",n["Label.tsx"]),i.file("HelperText.tsx",n["HelperText.tsx"]),i.file("FormField.tsx",n["FormField.tsx"]),i.file("SearchBar.tsx",n["SearchBar.tsx"]),i.file("Toast.tsx",n["Toast.tsx"]),i.file("Accordion.tsx",n["Accordion.tsx"]),s.file("LeftSidebar.tsx",n["LeftSidebar.tsx"]),s.file("MasterDetail.tsx",n["MasterDetail.tsx"]),s.file("Header.tsx",n["Header.tsx"]),s.file("BottomNav.tsx",n["BottomNav.tsx"]),s.file("Tabs.tsx",n["Tabs.tsx"]),s.file("Dialog.tsx",n["Dialog.tsx"]),s.file("Tooltip.tsx",n["Tooltip.tsx"]),s.file("Popover.tsx",n["Popover.tsx"]);const u=await o.generateAsync({type:"blob"});r(u,"design-system.zip")}const mt={none:"none",subtle:"0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.05)",medium:"0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -1px rgba(0,0,0,0.06)",strong:"0 10px 25px -5px rgba(0,0,0,0.18), 0 4px 6px -2px rgba(0,0,0,0.09)"};function Mp(e){return B.useMemo(()=>{const{colors:t,typography:{fontFamily:r},borders:{radius:n},spacing:{unit:o},shadows:{style:l}}=e,i=mt[l],s=Math.round(n*1.5);return{colors:t,fontFamily:r,radius:n,unit:o,shadow:i,cardRadius:s,btn:u=>{const c={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6,borderRadius:n,border:"none",cursor:"pointer",fontFamily:`'${r}', sans-serif`,fontWeight:600,fontSize:14,paddingInline:o*2.5,paddingBlock:o*1.25,lineHeight:1},p={primary:{...c,backgroundColor:t.primary,color:t.textInverse,boxShadow:l!=="none"?i:"none"},secondary:{...c,backgroundColor:t.bgAccent,color:t.primary,border:`1.5px solid ${t.primary}`},ghost:{...c,backgroundColor:"transparent",color:t.textPrimary,border:`1.5px solid ${t.border}`},destructive:{...c,backgroundColor:t.error,color:"#fff"},disabled:{...c,backgroundColor:t.neutral200,color:t.neutral400,cursor:"not-allowed"},sm:{...c,paddingInline:o*1.75,paddingBlock:o*.875,fontSize:12,backgroundColor:t.primary,color:t.textInverse},lg:{...c,paddingInline:o*3.5,paddingBlock:o*1.625,fontSize:16,backgroundColor:t.primary,color:t.textInverse}};return p[u]??p.primary},input:(u="default")=>({width:"100%",display:"block",paddingInline:o*1.5,paddingBlock:o*1.25,backgroundColor:t.bgPrimary,color:t.textPrimary,borderRadius:n,fontSize:14,fontFamily:`'${r}', sans-serif`,outline:"none",border:u==="focused"?`1.5px solid ${t.primary}`:u==="error"?`1.5px solid ${t.error}`:`1.5px solid ${t.border}`,boxShadow:u==="focused"?`0 0 0 3px ${t.bgAccent}`:u==="error"?"0 0 0 3px rgba(239,68,68,0.12)":"none"}),card:(u=!1)=>({backgroundColor:t.bgPrimary,borderRadius:s,border:`1px solid ${t.border}`,padding:o*3,boxShadow:u?mt.strong:i}),badge:u=>{const c={success:{bg:"rgba(16,185,129,0.12)",text:"#059669"},error:{bg:"rgba(239,68,68,0.12)",text:"#DC2626"},warning:{bg:"rgba(245,158,11,0.12)",text:"#D97706"},info:{bg:"rgba(59,130,246,0.12)",text:"#2563EB"},neutral:{bg:t.neutral100,text:t.neutral600},primary:{bg:t.bgAccent,text:t.primaryDark}}[u]??{bg:t.neutral100,text:t.neutral600};return{display:"inline-flex",alignItems:"center",gap:4,paddingInline:o,paddingBlock:o*.5,backgroundColor:c.bg,color:c.text,borderRadius:n===0?0:9999,fontFamily:`'${r}', sans-serif`,fontSize:12,fontWeight:600,lineHeight:1}}}},[e])}function U({title:e,children:t}){return a.jsxs("div",{className:"preview-section",children:[a.jsx("div",{className:"preview-section-title",children:e}),t]})}function Up({ds:e,preferences:t}){const{colors:r,fontFamily:n,unit:o,shadow:l,cardRadius:i}=e,s=(u=400,c=14)=>({fontFamily:`'${n}', sans-serif`,fontWeight:u,fontSize:c});return a.jsxs("div",{children:[a.jsxs(U,{title:"Buttons",children:[a.jsxs("div",{className:"preview-row",style:{marginBottom:10},children:[a.jsx("button",{style:e.btn("primary"),children:"Primary"}),a.jsx("button",{style:e.btn("secondary"),children:"Secondary"}),a.jsx("button",{style:e.btn("ghost"),children:"Ghost"}),a.jsx("button",{style:e.btn("destructive"),children:"Destructive"}),a.jsx("button",{style:e.btn("disabled"),disabled:!0,children:"Disabled"})]}),a.jsxs("div",{className:"preview-row",children:[a.jsx("button",{style:e.btn("sm"),children:"Small"}),a.jsx("button",{style:e.btn("primary"),children:"Medium"}),a.jsx("button",{style:e.btn("lg"),children:"Large"})]})]}),a.jsx(U,{title:"Inputs",children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,maxWidth:480},children:[a.jsxs("div",{children:[a.jsx("div",{style:{...s(500,13),color:r.textSecondary,marginBottom:6},children:"Default"}),a.jsx("input",{readOnly:!0,placeholder:"you@example.com",style:e.input("default")})]}),a.jsxs("div",{children:[a.jsx("div",{style:{...s(500,13),color:r.textSecondary,marginBottom:6},children:"Focused state"}),a.jsx("input",{readOnly:!0,defaultValue:"user@example.com",style:e.input("focused")})]}),a.jsxs("div",{children:[a.jsx("div",{style:{...s(500,13),color:r.error,marginBottom:6},children:"Error state"}),a.jsx("input",{readOnly:!0,defaultValue:"invalid-email",style:e.input("error")}),a.jsx("div",{style:{...s(400,12),color:r.error,marginTop:5},children:"Please enter a valid email address."})]}),a.jsxs("div",{children:[a.jsx("div",{style:{...s(500,13),color:r.textSecondary,marginBottom:6},children:"Search combo"}),a.jsxs("div",{style:{display:"flex",border:`1.5px solid ${r.border}`,borderRadius:e.radius,overflow:"hidden",backgroundColor:r.bgPrimary},children:[a.jsx("input",{readOnly:!0,placeholder:"Search…",style:{...e.input(),border:"none",boxShadow:"none",flex:1}}),a.jsx("button",{style:{...e.btn("primary"),borderRadius:0,paddingInline:o*2},children:"Search"})]})]})]})}),a.jsx(U,{title:"Cards",children:a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:16},children:[a.jsxs("div",{style:e.card(),children:[a.jsx("div",{style:{...s(600,16),color:r.textPrimary,marginBottom:6},children:"Simple Card"}),a.jsx("div",{style:{...s(400,14),color:r.textSecondary,lineHeight:1.6,marginBottom:16},children:"A clean card component with consistent padding and border styling."}),a.jsx("button",{style:e.btn("primary"),children:"Action"})]}),a.jsxs("div",{style:e.card(),children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[a.jsx("div",{style:{...s(500,13),color:r.textSecondary},children:"Monthly Revenue"}),a.jsx("span",{style:e.badge("success"),children:"↑ 12%"})]}),a.jsx("div",{style:{...s(700,28),color:r.textPrimary,marginBottom:4},children:"$48,295"}),a.jsx("div",{style:{...s(400,13),color:r.textTertiary},children:"Compared to last month"})]}),a.jsxs("div",{style:e.card(!0),children:[a.jsx("div",{style:{width:40,height:40,borderRadius:e.radius,backgroundColor:r.bgAccent,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,marginBottom:12},children:"⚡"}),a.jsx("div",{style:{...s(600,15),color:r.textPrimary,marginBottom:6},children:"Elevated Card"}),a.jsx("div",{style:{...s(400,13),color:r.textSecondary,lineHeight:1.6},children:"Uses stronger shadow to indicate higher elevation in the visual hierarchy."})]})]})}),a.jsxs(U,{title:"Badges & Status",children:[a.jsx("div",{className:"preview-row",style:{flexWrap:"wrap",marginBottom:10},children:["success","error","warning","info","neutral","primary"].map(u=>a.jsx("span",{style:e.badge(u),children:u.charAt(0).toUpperCase()+u.slice(1)},u))}),a.jsxs("div",{className:"preview-row",children:[a.jsx("span",{style:{...e.badge("success"),fontSize:11},children:"● Active"}),a.jsx("span",{style:{...e.badge("error"),fontSize:11},children:"● Offline"}),a.jsx("span",{style:{...e.badge("warning"),fontSize:11},children:"● Pending"}),a.jsx("span",{style:{...e.badge("neutral"),fontSize:11},children:"● Draft"}),a.jsx("span",{style:{...e.badge("primary"),fontSize:11},children:"★ Featured"})]})]}),a.jsx(U,{title:"Dropdown / Select",children:a.jsxs("div",{style:{maxWidth:280},children:[a.jsx("div",{style:{...s(500,13),color:r.textSecondary,marginBottom:6},children:"Category"}),a.jsxs("div",{style:{...e.input(),display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"},children:[a.jsx("span",{style:{color:r.textPrimary},children:"Select an option…"}),a.jsx("span",{style:{color:r.textTertiary,fontSize:12},children:"▾"})]}),a.jsx("div",{style:{marginTop:4,backgroundColor:r.bgPrimary,borderRadius:e.radius,border:`1.5px solid ${r.primary}`,boxShadow:mt.medium,overflow:"hidden"},children:["Design System","Components","Tokens","Documentation"].map((u,c)=>a.jsxs("div",{style:{padding:`${o}px ${o*1.5}px`,fontSize:14,fontFamily:`'${n}', sans-serif`,color:c===0?r.primary:r.textPrimary,backgroundColor:c===0?r.bgAccent:"transparent",fontWeight:c===0?600:400,borderBottom:c<3?`1px solid ${r.border}`:"none",cursor:"pointer"},children:[c===0&&a.jsx("span",{style:{marginRight:8},children:"✓"}),u]},u))})]})}),a.jsx(U,{title:"Section / Container",children:a.jsxs("div",{style:{backgroundColor:r.bgSecondary,borderRadius:i,padding:o*4,border:`1px solid ${r.border}`},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:o*3},children:[a.jsxs("div",{children:[a.jsx("div",{style:{...s(700,20),color:r.textPrimary,marginBottom:4},children:"Section Title"}),a.jsx("div",{style:{...s(400,13),color:r.textSecondary},children:"Section description or subtitle here."})]}),a.jsx("button",{style:e.btn("secondary"),children:"View all"})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:o*2},children:["Item One","Item Two","Item Three"].map(u=>a.jsxs("div",{style:{...e.card(),padding:o*2},children:[a.jsx("div",{style:{...s(600,13),color:r.textPrimary},children:u}),a.jsx("div",{style:{...s(400,12),color:r.textTertiary,marginTop:4},children:"Sub-item content"})]},u))})]})}),a.jsx($p,{ds:e}),a.jsx(Wp,{ds:e}),a.jsx(Hp,{ds:e}),a.jsx(Vp,{ds:e}),a.jsx(Yp,{ds:e}),a.jsx(Qp,{ds:e})]})}function $p({ds:e}){const{colors:t,fontFamily:r,unit:n,radius:o}=e,l=(s,u)=>({fontFamily:`'${r}', sans-serif`,fontWeight:s,fontSize:u}),i=(s="primary",u=36)=>{const c={width:u,height:u,borderRadius:o,border:"none",cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:Math.round(u*.44)};return s==="primary"?{...c,backgroundColor:t.primary,color:"#fff"}:s==="secondary"?{...c,backgroundColor:t.bgAccent,color:t.primary,border:`1.5px solid ${t.primary}`}:s==="ghost"?{...c,backgroundColor:"transparent",color:t.textPrimary,border:`1.5px solid ${t.border}`}:s==="danger"?{...c,backgroundColor:"rgba(239,68,68,0.1)",color:t.error}:c};return a.jsx(U,{title:"Icon Button",children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[a.jsxs("div",{children:[a.jsx("div",{style:{...l(500,12),color:t.textTertiary,marginBottom:8},children:"Variants"}),a.jsx("div",{className:"preview-row",children:["primary","secondary","ghost","danger"].map(s=>a.jsx("button",{style:i(s),title:s,children:"★"},s))})]}),a.jsxs("div",{children:[a.jsx("div",{style:{...l(500,12),color:t.textTertiary,marginBottom:8},children:"Sizes (sm / md / lg)"}),a.jsxs("div",{className:"preview-row",style:{alignItems:"center"},children:[a.jsx("button",{style:i("primary",28),children:"✎"}),a.jsx("button",{style:i("primary",36),children:"✎"}),a.jsx("button",{style:i("primary",44),children:"✎"})]})]}),a.jsxs("div",{children:[a.jsx("div",{style:{...l(500,12),color:t.textTertiary,marginBottom:8},children:"Round variant"}),a.jsx("div",{className:"preview-row",children:["primary","secondary","ghost"].map(s=>a.jsx("button",{style:{...i(s),borderRadius:9999},children:"+"},s))})]})]})})}function Wp({ds:e}){const{colors:t,fontFamily:r,unit:n,radius:o}=e,l=(s,u)=>({fontFamily:`'${r}', sans-serif`,fontWeight:s,fontSize:u}),i={width:"100%",borderRadius:o,fontSize:14,fontFamily:`'${r}', sans-serif`,padding:`${n*1.25}px ${n*1.5}px`,resize:"vertical",minHeight:80,outline:"none",backgroundColor:t.bgPrimary,color:t.textPrimary};return a.jsx(U,{title:"Textarea",children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:480},children:[a.jsxs("div",{children:[a.jsx("div",{style:{...l(500,13),color:t.textSecondary,marginBottom:6},children:"Default"}),a.jsx("textarea",{readOnly:!0,placeholder:"Write a message…",style:{...i,border:`1.5px solid ${t.border}`}})]}),a.jsxs("div",{children:[a.jsx("div",{style:{...l(500,13),color:t.textSecondary,marginBottom:6},children:"Focused"}),a.jsx("textarea",{readOnly:!0,defaultValue:"I'm focused and ready for input.",style:{...i,border:`1.5px solid ${t.primary}`,boxShadow:`0 0 0 3px ${t.bgAccent}`}})]}),a.jsxs("div",{children:[a.jsx("div",{style:{...l(500,13),color:t.error,marginBottom:6},children:"Error"}),a.jsx("textarea",{readOnly:!0,defaultValue:"This field has an error.",style:{...i,border:`1.5px solid ${t.error}`,boxShadow:"0 0 0 3px rgba(239,68,68,0.12)"}})]})]})})}function Hp({ds:e}){const{colors:t,fontFamily:r,unit:n,radius:o}=e,l=(x,N)=>({fontFamily:`'${r}', sans-serif`,fontWeight:x,fontSize:N}),[i,s]=B.useState({a:!0,b:!1,c:!0}),[u,c]=B.useState("b"),[p,h]=B.useState({x:!0,y:!1,z:!0}),y=x=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,cursor:"pointer"},onClick:()=>s(N=>({...N,[x]:!N[x]})),children:[a.jsx("div",{style:{width:18,height:18,borderRadius:Math.min(o,4),border:`2px solid ${i[x]?t.primary:t.border}`,backgroundColor:i[x]?t.primary:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.15s"},children:i[x]&&a.jsx("span",{style:{color:"#fff",fontSize:11,fontWeight:700,lineHeight:1},children:"✓"})}),a.jsxs("span",{style:{...l(400,14),color:t.textPrimary},children:["Option ",x.toUpperCase()]})]},x),C=(x,N)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,cursor:"pointer"},onClick:()=>c(x),children:[a.jsx("div",{style:{width:18,height:18,borderRadius:"50%",border:`2px solid ${u===x?t.primary:t.border}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:u===x&&a.jsx("div",{style:{width:8,height:8,borderRadius:"50%",backgroundColor:t.primary}})}),a.jsx("span",{style:{...l(400,14),color:t.textPrimary},children:N})]},x),g=(x,N)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,cursor:"pointer"},onClick:()=>h(f=>({...f,[x]:!f[x]})),children:[a.jsx("div",{style:{width:44,height:24,borderRadius:12,backgroundColor:p[x]?t.primary:t.neutral300,position:"relative",transition:"background 0.2s",flexShrink:0},children:a.jsx("div",{style:{position:"absolute",top:3,left:p[x]?23:3,width:18,height:18,borderRadius:"50%",backgroundColor:"#fff",boxShadow:"0 1px 3px rgba(0,0,0,0.15)",transition:"left 0.2s"}})}),a.jsx("span",{style:{...l(400,14),color:t.textPrimary},children:N})]},x);return a.jsxs(U,{title:"Form Controls (Checkbox · Radio · Switch)",children:[a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:24},children:[a.jsxs("div",{children:[a.jsx("div",{style:{...l(600,13),color:t.textSecondary,marginBottom:12},children:"Checkbox"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:["a","b","c"].map(x=>y(x))})]}),a.jsxs("div",{children:[a.jsx("div",{style:{...l(600,13),color:t.textSecondary,marginBottom:12},children:"Radio"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[["a","Option A"],["b","Option B"],["c","Option C"]].map(([x,N])=>C(x,N))})]}),a.jsxs("div",{children:[a.jsx("div",{style:{...l(600,13),color:t.textSecondary,marginBottom:12},children:"Switch"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[["x","Notifications"],["y","Dark mode"],["z","Auto-save"]].map(([x,N])=>g(x,N))})]})]}),a.jsxs("div",{style:{marginTop:20},children:[a.jsx("div",{style:{...l(600,13),color:t.textSecondary,marginBottom:12},children:"Form Field (Label + Input + Helper)"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:480},children:[a.jsxs("div",{children:[a.jsxs("label",{style:{...l(500,13),color:t.textPrimary,display:"block",marginBottom:6},children:["Email address ",a.jsx("span",{style:{color:t.error},children:"*"})]}),a.jsx("input",{readOnly:!0,placeholder:"you@example.com",style:e.input("default")}),a.jsx("div",{style:{...l(400,12),color:t.textTertiary,marginTop:5},children:"We'll never share your email with anyone."})]}),a.jsxs("div",{children:[a.jsx("label",{style:{...l(500,13),color:t.error,display:"block",marginBottom:6},children:"Username"}),a.jsx("input",{readOnly:!0,defaultValue:"user 123",style:e.input("error")}),a.jsx("div",{style:{...l(400,12),color:t.error,marginTop:5},children:"Username can only contain letters, numbers, and underscores."})]})]})]})]})}function Vp({ds:e}){const{colors:t,fontFamily:r,unit:n,radius:o}=e,l=(p,h)=>({fontFamily:`'${r}', sans-serif`,fontWeight:p,fontSize:h}),[i,s]=B.useState(""),c=i?["Dashboard","Analytics","Components","Documentation","Settings","Team","Billing"].filter(p=>p.toLowerCase().includes(i.toLowerCase())):[];return a.jsx(U,{title:"Search Bar",children:a.jsxs("div",{style:{maxWidth:360,position:"relative"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,paddingInline:n*1.5,paddingBlock:n*1.125,backgroundColor:t.bgPrimary,borderRadius:o,border:`1.5px solid ${i?t.primary:t.border}`,boxShadow:i?`0 0 0 3px ${t.bgAccent}`:"none"},children:[a.jsx("span",{style:{color:t.textTertiary,fontSize:14},children:"🔍"}),a.jsx("input",{value:i,onChange:p=>s(p.target.value),placeholder:"Search…",style:{flex:1,border:"none",outline:"none",backgroundColor:"transparent",fontSize:14,fontFamily:`'${r}', sans-serif`,color:t.textPrimary}}),i&&a.jsx("span",{onClick:()=>s(""),style:{color:t.textTertiary,cursor:"pointer",fontSize:16,lineHeight:1},children:"×"})]}),c.length>0&&a.jsx("div",{style:{position:"absolute",top:"100%",left:0,right:0,marginTop:4,backgroundColor:t.bgPrimary,borderRadius:o,border:`1.5px solid ${t.border}`,boxShadow:mt.medium,overflow:"hidden",zIndex:10},children:c.map((p,h)=>a.jsxs("div",{onClick:()=>s(p),style:{padding:`${n}px ${n*1.5}px`,fontSize:14,fontFamily:`'${r}', sans-serif`,color:t.textPrimary,cursor:"pointer",borderBottom:h<c.length-1?`1px solid ${t.border}`:"none"},children:[a.jsx("span",{style:{color:t.textTertiary,marginRight:8},children:"🔍"}),p]},p))}),i&&c.length===0&&a.jsxs("div",{style:{marginTop:8,...l(400,13),color:t.textTertiary},children:['No results for "',i,'"']}),!i&&a.jsx("div",{style:{marginTop:8,...l(400,12),color:t.textTertiary},children:'Type to search — try "dash" or "comp"'})]})})}function Yp({ds:e}){const{colors:t,fontFamily:r,unit:n,radius:o}=e,l=(c,p)=>({fontFamily:`'${r}', sans-serif`,fontWeight:c,fontSize:p}),[i,s]=B.useState({}),u=[{id:"success",type:"success",icon:"✓",title:"Saved successfully",body:"Your changes have been saved.",bg:"rgba(16,185,129,0.10)",border:"#10B981",titleColor:"#065F46"},{id:"error",type:"error",icon:"✕",title:"Something went wrong",body:"Please try again or contact support.",bg:"rgba(239,68,68,0.10)",border:"#EF4444",titleColor:"#991B1B"},{id:"warning",type:"warning",icon:"⚠",title:"Heads up",body:"This action cannot be undone.",bg:"rgba(245,158,11,0.10)",border:"#F59E0B",titleColor:"#92400E"},{id:"info",type:"info",icon:"ℹ",title:"New feature available",body:"Check out what's new in v2.0.",bg:"rgba(59,130,246,0.10)",border:"#3B82F6",titleColor:"#1E40AF"}];return a.jsx(U,{title:"Toast / Info Box",children:a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10,maxWidth:440},children:u.map(c=>i[c.id]?a.jsxs("div",{onClick:()=>s(p=>({...p,[c.id]:!1})),style:{...l(400,12),color:t.textTertiary,cursor:"pointer",padding:"4px 8px"},children:["↩ Show ",c.type," toast"]},c.id):a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:12,padding:`${n*1.25}px ${n*1.5}px`,borderRadius:o,backgroundColor:c.bg,border:`1px solid ${c.border}30`,borderLeft:`3px solid ${c.border}`},children:[a.jsx("span",{style:{fontSize:15,marginTop:1,color:c.border},children:c.icon}),a.jsxs("div",{style:{flex:1},children:[a.jsx("div",{style:{...l(600,13),color:c.titleColor,marginBottom:2},children:c.title}),a.jsx("div",{style:{...l(400,12),color:t.textSecondary},children:c.body})]}),a.jsx("span",{onClick:()=>s(p=>({...p,[c.id]:!0})),style:{color:t.textTertiary,cursor:"pointer",fontSize:16,lineHeight:1,marginTop:2},children:"×"})]},c.id))})})}function Qp({ds:e}){const{colors:t,fontFamily:r,unit:n,radius:o}=e,l=(c,p)=>({fontFamily:`'${r}', sans-serif`,fontWeight:c,fontSize:p}),[i,s]=B.useState(0),u=[{q:"What is a design system?",a:"A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications."},{q:"How do I customize the tokens?",a:"Edit tokens.ts to change colors, spacing, radius, and typography. All components reference these tokens so changes propagate instantly."},{q:"Does it support dark mode?",a:"Yes — the token system supports dark variants. Pass a dark color set to createBase() and components will adapt automatically."}];return a.jsx(U,{title:"Accordion",children:a.jsx("div",{style:{maxWidth:480,border:`1px solid ${t.border}`,borderRadius:o,overflow:"hidden"},children:u.map((c,p)=>a.jsxs("div",{style:{borderBottom:p<u.length-1?`1px solid ${t.border}`:"none"},children:[a.jsxs("div",{onClick:()=>s(i===p?-1:p),style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:`${n*1.5}px ${n*2}px`,cursor:"pointer",backgroundColor:i===p?t.bgSecondary:t.bgPrimary},children:[a.jsx("span",{style:{...l(600,14),color:t.textPrimary},children:c.q}),a.jsx("span",{style:{color:t.textTertiary,fontSize:16,transition:"transform 0.2s",transform:i===p?"rotate(180deg)":"none"},children:"▾"})]}),i===p&&a.jsx("div",{style:{padding:`${n}px ${n*2}px ${n*1.5}px`,...l(400,14),color:t.textSecondary,lineHeight:1.7,backgroundColor:t.bgPrimary},children:c.a})]},p))})})}function Gp({ds:e}){const{colors:t,fontFamily:r,radius:n,unit:o}=e,l=(c,p)=>({fontFamily:`'${r}', sans-serif`,fontWeight:c,fontSize:p}),[i,s]=B.useState(0),u=[{icon:"⊞",label:"Dashboard"},{icon:"📈",label:"Analytics"},{icon:"📁",label:"Projects"},{icon:"👥",label:"Team"},{icon:"⚙️",label:"Settings"}];return a.jsxs("div",{style:{display:"flex",height:220,borderRadius:n,border:`1px solid ${t.border}`,overflow:"hidden",boxShadow:e.shadow},children:[a.jsxs("div",{style:{width:150,backgroundColor:t.neutral900,padding:`${o*1.5}px ${o}px`,display:"flex",flexDirection:"column",gap:2},children:[a.jsxs("div",{style:{padding:`${o*.75}px ${o}px`,marginBottom:o,display:"flex",alignItems:"center",gap:8},children:[a.jsx("div",{style:{width:24,height:24,borderRadius:6,backgroundColor:t.primary,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12},children:"⚡"}),a.jsx("span",{style:{...l(700,13),color:"#fff"},children:"MyApp"})]}),u.map((c,p)=>a.jsxs("div",{onClick:()=>s(p),style:{display:"flex",alignItems:"center",gap:8,padding:`${o*.75}px ${o}px`,borderRadius:n,backgroundColor:p===i?t.primary:"transparent",color:p===i?"#fff":"rgba(255,255,255,0.5)",cursor:"pointer",...l(p===i?600:400,12)},children:[a.jsx("span",{style:{fontSize:13},children:c.icon}),a.jsx("span",{children:c.label})]},c.label))]}),a.jsxs("div",{style:{flex:1,backgroundColor:t.bgSecondary,padding:o*2,display:"flex",flexDirection:"column",gap:o*1.5},children:[a.jsx("div",{style:{...l(700,15),color:t.textPrimary},children:u[i].label}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:o},children:[["24","Projects"],["8.4k","Members"]].map(([c,p])=>a.jsxs("div",{style:{backgroundColor:t.bgPrimary,borderRadius:n,padding:`${o}px ${o*1.5}px`,border:`1px solid ${t.border}`},children:[a.jsx("div",{style:{...l(700,18),color:t.textPrimary},children:c}),a.jsx("div",{style:{...l(400,11),color:t.textTertiary},children:p})]},p))}),[70,50,85].map((c,p)=>a.jsx("div",{style:{height:8,width:`${c}%`,backgroundColor:t.neutral200,borderRadius:4}},p))]})]})}function Xp({ds:e}){const{colors:t,fontFamily:r,radius:n,unit:o}=e,l=(u,c)=>({fontFamily:`'${r}', sans-serif`,fontWeight:u,fontSize:c}),[i,s]=B.useState(1);return a.jsxs("div",{style:{display:"flex",height:220,borderRadius:n,border:`1px solid ${t.border}`,overflow:"hidden",boxShadow:e.shadow},children:[a.jsxs("div",{style:{flex:1,backgroundColor:t.bgPrimary,padding:o*2,display:"flex",flexDirection:"column",gap:o*1.25},children:[a.jsx("div",{style:{...l(700,15),color:t.textPrimary},children:"Inbox"}),["Project update from Alex","New comment on #design","Weekly report ready","Server alert resolved"].map((u,c)=>a.jsxs("div",{onClick:()=>s(c),style:{display:"flex",alignItems:"center",gap:o,padding:`${o*.75}px ${o}px`,borderRadius:n,backgroundColor:c===i?t.bgAccent:"transparent",cursor:"pointer",border:c===i?`1px solid ${t.primary}30`:"1px solid transparent"},children:[a.jsx("div",{style:{width:28,height:28,borderRadius:"50%",backgroundColor:[t.primary,t.success,t.warning,t.neutral300][c],flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:"#fff",fontWeight:700},children:["A","D","R","S"][c]}),a.jsx("span",{style:{...l(c===i?600:400,12),color:t.textPrimary},children:u})]},c))]}),a.jsxs("div",{style:{width:160,backgroundColor:t.bgSecondary,borderLeft:`1px solid ${t.border}`,padding:o*1.5,display:"flex",flexDirection:"column",gap:o},children:[a.jsx("div",{style:{...l(600,12),color:t.textPrimary},children:"Message details"}),a.jsx("div",{style:{width:36,height:36,borderRadius:"50%",backgroundColor:[t.primary,t.success,t.warning,t.neutral300][i],display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,color:"#fff",fontWeight:700},children:["A","D","R","S"][i]}),a.jsx("div",{style:{...l(600,12),color:t.textPrimary},children:"Alex Brown"}),a.jsx("div",{style:{...l(400,11),color:t.textTertiary,lineHeight:1.6},children:"Sent 2 hours ago via email"}),a.jsx("div",{style:{marginTop:"auto"},children:a.jsx("button",{style:{...e.btn("primary"),width:"100%",fontSize:12,paddingBlock:o*.75},children:"Reply"})})]})]})}function Kp({ds:e}){const{colors:t,fontFamily:r,radius:n,unit:o}=e,l=(c,p)=>({fontFamily:`'${r}', sans-serif`,fontWeight:c,fontSize:p}),[i,s]=B.useState(!1),u=[{icon:"🏠",label:"Home"},{icon:"🔍",label:"Explore"},{icon:"🔔",label:"Notifications"},{icon:"👤",label:"Profile"}];return a.jsxs("div",{style:{display:"flex",gap:24,alignItems:"flex-start",flexWrap:"wrap"},children:[a.jsxs("div",{style:{position:"relative",width:220,height:340,borderRadius:20,border:`2px solid ${t.neutral300}`,overflow:"hidden",backgroundColor:t.bgPrimary,boxShadow:mt.medium,flexShrink:0},children:[a.jsxs("div",{style:{height:28,backgroundColor:t.primary,display:"flex",alignItems:"center",justifyContent:"space-between",paddingInline:12},children:[a.jsx("span",{style:{...l(600,10),color:"#fff"},children:"9:41"}),a.jsx("span",{style:{...l(600,10),color:"#fff"},children:"●●● 100%"})]}),a.jsxs("div",{style:{height:48,backgroundColor:t.bgPrimary,display:"flex",alignItems:"center",justifyContent:"space-between",paddingInline:14,borderBottom:`1px solid ${t.border}`},children:[a.jsx("button",{onClick:()=>s(!0),style:{background:"none",border:"none",cursor:"pointer",padding:4,display:"flex",flexDirection:"column",gap:4},children:[0,1,2].map(c=>a.jsx("div",{style:{width:18,height:2,backgroundColor:t.textPrimary,borderRadius:1}},c))}),a.jsx("span",{style:{...l(700,14),color:t.textPrimary},children:"MyApp"}),a.jsx("div",{style:{width:28,height:28,borderRadius:"50%",backgroundColor:t.primary,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"#fff",fontWeight:700},children:"H"})]}),a.jsxs("div",{style:{padding:14,display:"flex",flexDirection:"column",gap:10},children:[[90,70,80,60,85].map((c,p)=>a.jsx("div",{style:{height:10,width:`${c}%`,backgroundColor:t.neutral200,borderRadius:4}},p)),a.jsx("div",{style:{height:60,backgroundColor:t.bgAccent,borderRadius:n,marginTop:4}})]}),i&&a.jsxs("div",{style:{position:"absolute",inset:0,display:"flex"},onClick:()=>s(!1),children:[a.jsxs("div",{style:{width:160,height:"100%",backgroundColor:t.neutral900,padding:`${o*2}px ${o}px`,display:"flex",flexDirection:"column",gap:4},onClick:c=>c.stopPropagation(),children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:`${o}px ${o}px`,marginBottom:o},children:[a.jsx("div",{style:{width:32,height:32,borderRadius:"50%",backgroundColor:t.primary,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,color:"#fff",fontWeight:700},children:"H"}),a.jsxs("div",{children:[a.jsx("div",{style:{...l(600,12),color:"#fff"},children:"Huy Le"}),a.jsx("div",{style:{...l(400,10),color:"rgba(255,255,255,0.5)"},children:"Admin"})]})]}),u.map(c=>a.jsxs("div",{onClick:()=>s(!1),style:{display:"flex",alignItems:"center",gap:8,padding:`${o*.875}px ${o}px`,borderRadius:n,color:"rgba(255,255,255,0.75)",cursor:"pointer",...l(400,12)},children:[a.jsx("span",{children:c.icon}),a.jsx("span",{children:c.label})]},c.label)),a.jsx("div",{style:{marginTop:"auto",padding:`${o*.875}px ${o}px`,...l(400,12),color:"rgba(255,255,255,0.4)"},children:"v1.0.0"})]}),a.jsx("div",{style:{flex:1,backgroundColor:"rgba(0,0,0,0.4)"}})]}),a.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:52,backgroundColor:t.bgPrimary,borderTop:`1px solid ${t.border}`,display:"flex",alignItems:"center"},children:u.map((c,p)=>a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2,cursor:"pointer"},children:[a.jsx("span",{style:{fontSize:16},children:c.icon}),a.jsx("span",{style:{...l(p===0?600:400,9),color:p===0?t.primary:t.textTertiary},children:c.label})]},c.label))})]}),a.jsxs("div",{style:{flex:1,minWidth:200,display:"flex",flexDirection:"column",gap:12},children:[a.jsxs("div",{style:{padding:"12px 16px",backgroundColor:"#fff",borderRadius:10,border:`1px solid ${t.border}`},children:[a.jsx("div",{style:{...l(600,13),color:t.textPrimary,marginBottom:4},children:"Burger + Drawer"}),a.jsxs("div",{style:{...l(400,12),color:t.textSecondary,lineHeight:1.7},children:["Tap the ",a.jsx("strong",{children:"☰"})," hamburger icon to open the side drawer. Tap the overlay to close it.",a.jsx("br",{}),a.jsx("br",{}),"In quickly-react: ",a.jsx("code",{style:{backgroundColor:t.bgAccent,color:t.primary,padding:"1px 5px",borderRadius:4,fontSize:11},children:"<Col absoluteFill bgOverlay>"})]})]}),a.jsxs("div",{style:{padding:"12px 16px",backgroundColor:"#fff",borderRadius:10,border:`1px solid ${t.border}`},children:[a.jsx("div",{style:{...l(600,13),color:t.textPrimary,marginBottom:4},children:"Bottom Navigation"}),a.jsxs("div",{style:{...l(400,12),color:t.textSecondary,lineHeight:1.7},children:["A standard mobile bottom tab bar using ",a.jsx("code",{style:{backgroundColor:t.bgAccent,color:t.primary,padding:"1px 5px",borderRadius:4,fontSize:11},children:"<Row middle>"})," for the container."]})]})]})]})}function qp({ds:e}){const{colors:t,fontFamily:r,radius:n,unit:o}=e,l=(g,x)=>({fontFamily:`'${r}', sans-serif`,fontWeight:g,fontSize:x}),[i,s]=B.useState(0),[u,c]=B.useState("underline"),p=["Overview","Analytics","Reports","Settings"],h=[{title:"Overview",text:"Your project at a glance. Recent activity, key metrics, and quick actions are surfaced here."},{title:"Analytics",text:"Deep-dive into traffic, conversion rates, and user behavior across all channels."},{title:"Reports",text:"Download detailed reports or schedule automated exports to your data warehouse."},{title:"Settings",text:"Configure notifications, permissions, integrations, and display preferences."}],C={underline:{bar:{display:"flex",borderBottom:`1.5px solid ${t.border}`,gap:0},tab:g=>({padding:`${o}px ${o*2}px`,background:"none",border:"none",borderBottom:g===i?`2px solid ${t.primary}`:"2px solid transparent",color:g===i?t.primary:t.textSecondary,...l(g===i?600:400,13),cursor:"pointer",marginBottom:-1.5})},pill:{bar:{display:"flex",gap:6,padding:`${o*.75}px`,backgroundColor:t.bgTertiary,borderRadius:n+4},tab:g=>({padding:`${o*.625}px ${o*1.5}px`,background:g===i?t.bgPrimary:"none",border:"none",borderRadius:n,color:g===i?t.primary:t.textSecondary,...l(g===i?600:400,13),cursor:"pointer",boxShadow:g===i?"0 1px 3px rgba(0,0,0,0.08)":"none"})},solid:{bar:{display:"flex",gap:2},tab:g=>({padding:`${o*.75}px ${o*1.75}px`,background:g===i?t.primary:"transparent",border:`1px solid ${g===i?t.primary:t.border}`,borderRadius:n,color:g===i?"#fff":t.textSecondary,...l(g===i?600:400,13),cursor:"pointer"})}}[u];return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[a.jsx("span",{style:{...l(500,12),color:t.textTertiary},children:"Style:"}),["underline","pill","solid"].map(g=>a.jsx("button",{onClick:()=>c(g),style:{padding:"4px 12px",borderRadius:6,border:`1px solid ${u===g?t.primary:t.border}`,background:u===g?t.bgAccent:"transparent",color:u===g?t.primary:t.textSecondary,...l(u===g?600:400,12),cursor:"pointer"},children:g.charAt(0).toUpperCase()+g.slice(1)},g))]}),a.jsxs("div",{style:{backgroundColor:t.bgPrimary,borderRadius:n,border:`1px solid ${t.border}`,overflow:"hidden",boxShadow:e.shadow},children:[a.jsx("div",{style:{padding:`${o*1.5}px ${o*2}px 0`,backgroundColor:t.bgPrimary},children:a.jsx("div",{style:C.bar,children:p.map((g,x)=>a.jsx("button",{style:C.tab(x),onClick:()=>s(x),children:g},g))})}),a.jsxs("div",{style:{padding:o*2.5},children:[a.jsx("div",{style:{...l(700,16),color:t.textPrimary,marginBottom:o},children:h[i].title}),a.jsx("div",{style:{...l(400,14),color:t.textSecondary,lineHeight:1.7,marginBottom:o*2},children:h[i].text}),a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("button",{style:e.btn("primary"),children:"Primary Action"}),a.jsx("button",{style:e.btn("ghost"),children:"Secondary"})]})]})]})]})}function Zp({ds:e}){const{colors:t,fontFamily:r,unit:n,radius:o}=e,l=(u,c)=>({fontFamily:`'${r}', sans-serif`,fontWeight:u,fontSize:c}),[i,s]=B.useState(!1);return a.jsxs("div",{style:{position:"relative"},children:[a.jsx("button",{style:e.btn("primary"),onClick:()=>s(!0),children:"Open Dialog"}),i&&a.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0,0,0,0.45)"},onClick:()=>s(!1),children:a.jsxs("div",{style:{backgroundColor:t.bgPrimary,borderRadius:o*1.5,boxShadow:mt.strong,padding:n*3,maxWidth:380,width:"90%",border:`1px solid ${t.border}`},onClick:u=>u.stopPropagation(),children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:n*2},children:[a.jsx("div",{style:{...l(700,17),color:t.textPrimary},children:"Confirm Action"}),a.jsx("span",{onClick:()=>s(!1),style:{cursor:"pointer",color:t.textTertiary,fontSize:20,lineHeight:1,marginTop:-2},children:"×"})]}),a.jsx("div",{style:{...l(400,14),color:t.textSecondary,lineHeight:1.7,marginBottom:n*3},children:"Are you sure you want to delete this item? This action cannot be undone and all associated data will be permanently removed."}),a.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[a.jsx("button",{style:e.btn("ghost"),onClick:()=>s(!1),children:"Cancel"}),a.jsx("button",{style:e.btn("destructive"),onClick:()=>s(!1),children:"Delete"})]})]})})]})}function Jp({ds:e}){const{colors:t,fontFamily:r,unit:n,radius:o}=e,l=(c,p)=>({fontFamily:`'${r}', sans-serif`,fontWeight:c,fontSize:p}),[i,s]=B.useState(null),u=[{label:"Edit",tip:"Edit this item"},{label:"Share",tip:"Share with team"},{label:"Delete",tip:"Permanently delete"}];return a.jsx("div",{style:{display:"flex",gap:20,flexWrap:"wrap",paddingTop:8},children:u.map(({label:c,tip:p})=>a.jsxs("div",{style:{position:"relative",display:"inline-block"},onMouseEnter:()=>s(c),onMouseLeave:()=>s(null),children:[a.jsx("button",{style:e.btn("ghost"),children:c}),i===c&&a.jsxs("div",{style:{position:"absolute",bottom:"calc(100% + 8px)",left:"50%",transform:"translateX(-50%)",backgroundColor:t.neutral900,color:"#fff",borderRadius:Math.min(o,6),padding:`${n*.5}px ${n}px`,whiteSpace:"nowrap",...l(500,12),pointerEvents:"none",zIndex:100,boxShadow:mt.medium},children:[p,a.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderWidth:5,borderStyle:"solid",borderColor:`${t.neutral900} transparent transparent transparent`}})]})]},c))})}function em({ds:e}){const{colors:t,fontFamily:r,unit:n,radius:o}=e,l=(u,c)=>({fontFamily:`'${r}', sans-serif`,fontWeight:u,fontSize:c}),[i,s]=B.useState(!1);return a.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[a.jsx("button",{style:e.btn("secondary"),onClick:()=>s(u=>!u),children:"Filter options ▾"}),i&&a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{position:"fixed",inset:0,zIndex:99},onClick:()=>s(!1)}),a.jsxs("div",{style:{position:"absolute",top:"calc(100% + 8px)",left:0,zIndex:100,backgroundColor:t.bgPrimary,borderRadius:o,border:`1.5px solid ${t.border}`,boxShadow:mt.medium,padding:n*1.5,minWidth:220},children:[a.jsx("div",{style:{...l(600,13),color:t.textPrimary,marginBottom:n},children:"Filter by status"}),["All items","Active","Pending","Archived"].map((u,c)=>a.jsxs("div",{onClick:()=>s(!1),style:{display:"flex",alignItems:"center",gap:8,padding:`${n*.75}px ${n}px`,borderRadius:Math.min(o,6),cursor:"pointer",color:c===0?t.primary:t.textPrimary,fontWeight:c===0?600:400,...l(c===0?600:400,13),backgroundColor:c===0?t.bgAccent:"transparent"},children:[c===0&&a.jsx("span",{style:{fontSize:11},children:"✓"}),u]},u)),a.jsx("div",{style:{height:1,backgroundColor:t.border,marginBlock:n}}),a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("button",{style:{...e.btn("ghost"),flex:1,fontSize:12,paddingBlock:n*.625},onClick:()=>s(!1),children:"Reset"}),a.jsx("button",{style:{...e.btn("primary"),flex:1,fontSize:12,paddingBlock:n*.625},onClick:()=>s(!1),children:"Apply"})]})]})]})]})}function tm({ds:e,preferences:t}){return a.jsxs("div",{children:[a.jsx(U,{title:"Left Sidebar",children:a.jsx(Gp,{ds:e})}),a.jsx(U,{title:"Right Sidebar (Master-Detail)",children:a.jsx(Xp,{ds:e})}),a.jsx(U,{title:"Mobile: Header + Burger Drawer + Bottom Nav",children:a.jsx(Kp,{ds:e})}),a.jsx(U,{title:"Tabs (3 styles)",children:a.jsx(qp,{ds:e})}),a.jsx(U,{title:"Modal / Dialog",children:a.jsx(Zp,{ds:e})}),a.jsx(U,{title:"Tooltip",children:a.jsx(Jp,{ds:e})}),a.jsx(U,{title:"Popover",children:a.jsx(em,{ds:e})})]})}function rm({preferences:e}){const{colors:t,typography:{fontFamily:r},borders:{radius:n},spacing:{unit:o}}=e,l=[{label:"Brand",swatches:[{name:"Primary",color:t.primary},{name:"Light",color:t.primaryLight},{name:"Dark",color:t.primaryDark},{name:"Bg tint",color:t.bgAccent.startsWith("rgba")?t.primary:t.bgAccent,opacity:.15}]},{label:"Semantic",swatches:[{name:"Success",color:t.success},{name:"Warning",color:t.warning},{name:"Error",color:t.error},{name:"Info",color:t.info}]},{label:"Neutrals",swatches:[{name:"50",color:t.neutral50},{name:"100",color:t.neutral100},{name:"200",color:t.neutral200},{name:"300",color:t.neutral300},{name:"400",color:t.neutral400},{name:"500",color:t.neutral500},{name:"600",color:t.neutral600},{name:"700",color:t.neutral700},{name:"800",color:t.neutral800},{name:"900",color:t.neutral900}]},{label:"Surfaces",swatches:[{name:"Surface 1",color:t.bgPrimary},{name:"Surface 2",color:t.bgSecondary},{name:"Surface 3",color:t.bgTertiary},{name:"Border",color:t.border}]},{label:"Text",swatches:[{name:"Primary",color:t.textPrimary},{name:"Secondary",color:t.textSecondary},{name:"Tertiary",color:t.textTertiary},{name:"Inverse",color:t.textInverse}]}],i=[{name:"h1",size:48,weight:700},{name:"h2",size:36,weight:700},{name:"h3",size:24,weight:600},{name:"h4",size:20,weight:600},{name:"h5",size:17,weight:600},{name:"h6",size:15,weight:600},{name:"body lg",size:17,weight:400},{name:"body",size:15,weight:400},{name:"small",size:13,weight:400},{name:"caption",size:11,weight:400}];return a.jsxs("div",{children:[a.jsx(U,{title:"Color Tokens",children:a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:l.map(s=>a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#a1a1aa",marginBottom:8},children:s.label}),a.jsx("div",{className:"token-grid",children:s.swatches.map(({name:u,color:c,opacity:p})=>a.jsxs("div",{className:"token-swatch",children:[a.jsx("div",{className:"swatch-color",style:{backgroundColor:c,opacity:p??1,outline:c==="#FFFFFF"||c===t.textInverse?"1px solid #e4e4e7":"none",outlineOffset:-1}}),a.jsx("div",{className:"swatch-label",children:u}),a.jsx("div",{style:{fontSize:9,color:"#a1a1aa",textAlign:"center",fontFamily:"monospace",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:c})]},u))})]},s.label))})}),a.jsx(U,{title:"Typography Scale",children:a.jsx("div",{style:{background:"#fff",borderRadius:10,padding:"4px 20px",border:"1px solid #e4e4e7"},children:i.map(({name:s,size:u,weight:c})=>a.jsxs("div",{className:"type-scale-row",children:[a.jsx("span",{className:"type-scale-label",children:s}),a.jsxs("span",{className:"type-scale-meta",children:[u,"/",c]}),a.jsx("span",{style:{fontSize:Math.min(u,32),fontWeight:c,fontFamily:`'${r}', sans-serif`,color:t.textPrimary,lineHeight:1.2},children:u>=36?"The quick brown fox":"The quick brown fox jumps over the lazy dog"})]},s))})}),a.jsx(U,{title:`Spacing Scale (unit = ${o}px)`,children:a.jsx("div",{style:{background:"#fff",borderRadius:10,padding:20,border:"1px solid #e4e4e7"},children:a.jsx("div",{className:"spacing-rows",children:[0,1,2,3,4,5,6,8].map(s=>a.jsxs("div",{className:"spacing-row",children:[a.jsxs("span",{className:"spacing-label",style:{color:"#71717a"},children:["m",s]}),a.jsx("div",{className:"spacing-bar-wrap",children:a.jsx("div",{className:"spacing-bar",style:{width:Math.max(4,s*o*4),backgroundColor:t.primary+"28",borderLeftColor:t.primary}})}),a.jsxs("span",{className:"spacing-value",style:{color:"#71717a"},children:[s*o,"px"]})]},s))})})}),a.jsx(U,{title:"Border Radius Scale",children:a.jsx("div",{style:{background:"#fff",borderRadius:10,padding:20,border:"1px solid #e4e4e7",display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"},children:[{label:"none",r:0},{label:"sm",r:Math.round(n*.5)},{label:"md",r:n},{label:"lg",r:n*1.5},{label:"xl",r:n*2},{label:"full",r:9999}].map(({label:s,r:u})=>a.jsxs("div",{style:{textAlign:"center"},children:[a.jsx("div",{style:{width:48,height:32,backgroundColor:t.primary,borderRadius:u,marginBottom:6}}),a.jsx("div",{style:{fontSize:10,color:"#71717a",fontWeight:500},children:s}),a.jsx("div",{style:{fontSize:9,color:"#a1a1aa",fontFamily:"monospace"},children:u===9999?"∞":u+"px"})]},s))})})]})}const nm=["tokens.ts","textProps.ts","viewProps.ts","index.tsx","Button.tsx","IconButton.tsx","Input.tsx","Textarea.tsx","Card.tsx","Badge.tsx","Dropdown.tsx","Section.tsx","Checkbox.tsx","Radio.tsx","Switch.tsx","Label.tsx","HelperText.tsx","FormField.tsx","SearchBar.tsx","Toast.tsx","Accordion.tsx","LeftSidebar.tsx","MasterDetail.tsx","Header.tsx","BottomNav.tsx","Tabs.tsx","Dialog.tsx","Tooltip.tsx","Popover.tsx"];function om({preferences:e}){const[t,r]=B.useState("tokens.ts"),n=B.useMemo(()=>mc(e),[e]);return a.jsxs("div",{className:"code-container",children:[a.jsxs("div",{style:{fontSize:12,color:"#71717a",marginBottom:4},children:["Generated code — ready to drop into your React Native project. Click ",a.jsx("strong",{style:{color:"#3f3f46"},children:"↓ Download Code"})," in the header to get the full zip."]}),a.jsx("div",{className:"code-file-tabs",children:nm.map(o=>a.jsx("button",{className:`code-file-tab${t===o?" active":""}`,onClick:()=>r(o),children:o},o))}),a.jsx("div",{className:"code-block",children:a.jsx("pre",{children:n[t]??"// File not found"})})]})}function lm({preferences:e}){const[t,r]=B.useState("components"),n=Mp(e),o=[{id:"components",label:"Components"},{id:"layout",label:"Layout"},{id:"tokens",label:"Tokens"},{id:"code",label:"Code"}];return a.jsxs("div",{className:"preview-panel",children:[a.jsxs("div",{className:"preview-tabs",children:[o.map(l=>a.jsx("button",{className:`preview-tab${t===l.id?" active":""}`,onClick:()=>r(l.id),children:l.label},l.id)),a.jsx("div",{style:{flex:1}}),a.jsxs("div",{style:{fontSize:12,color:"#a1a1aa",paddingBottom:10,paddingRight:4},children:[a.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",backgroundColor:e.colors.primary,marginRight:6,verticalAlign:"middle"}}),e.typography.fontFamily," · r",e.borders.radius," · u",e.spacing.unit]})]}),a.jsxs("div",{className:"preview-scroll",children:[t==="components"&&a.jsx(Up,{ds:n,preferences:e}),t==="layout"&&a.jsx(tm,{ds:n,preferences:e}),t==="tokens"&&a.jsx(rm,{preferences:e}),t==="code"&&a.jsx(om,{preferences:e})]})]})}const Ga=["Industry","Colors","Typography","Shape","Spacing"];function im(){const[e,t]=B.useState(0),[r,n]=B.useState(Qf),o=B.useCallback(i=>{n(s=>({...s,...i}))},[]),l=B.useCallback(()=>{Fp(r)},[r]);return a.jsxs("div",{className:"studio-app",children:[a.jsxs("header",{className:"studio-header",children:[a.jsxs("div",{className:"studio-logo",children:[a.jsx("span",{className:"logo-icon",children:"⚡"}),a.jsx("span",{className:"logo-text",children:"Design System Studio"}),a.jsx("span",{className:"logo-badge",children:"quickly-react"})]}),a.jsx("div",{className:"header-steps",children:Ga.map((i,s)=>a.jsx("button",{className:`step-pill${s===e?" active":""}${s<e?" done":""}`,onClick:()=>t(s),children:s<e?`✓ ${i}`:`${s+1}. ${i}`},s))}),a.jsx("button",{className:"download-btn",onClick:l,children:"↓ Download Code"})]}),a.jsxs("div",{className:"studio-body",children:[a.jsx(ip,{currentStep:e,setCurrentStep:t,preferences:r,updatePreferences:o,onDownload:l,totalSteps:Ga.length}),a.jsx(lm,{preferences:r})]})]})}Go.createRoot(document.getElementById("root")).render(a.jsx(Pc.StrictMode,{children:a.jsx(im,{})}));export{am as c,yc as g};
