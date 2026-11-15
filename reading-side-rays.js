(()=>{var D3=Object.create;var JS=Object.defineProperty;var U3=Object.getOwnPropertyDescriptor;var O3=Object.getOwnPropertyNames;var L3=Object.getPrototypeOf,N3=Object.prototype.hasOwnProperty;var ms=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var P3=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of O3(t))!N3.call(e,r)&&r!==n&&JS(e,r,{get:()=>t[r],enumerable:!(i=U3(t,r))||i.enumerable});return e};var hn=(e,t,n)=>(n=e!=null?D3(L3(e)):{},P3(t||!e||!e.__esModule?JS(n,"default",{value:e,enumerable:!0}):n,e));var lM=ms(de=>{"use strict";var u_=Symbol.for("react.transitional.element"),I3=Symbol.for("react.portal"),B3=Symbol.for("react.fragment"),F3=Symbol.for("react.strict_mode"),z3=Symbol.for("react.profiler"),H3=Symbol.for("react.consumer"),V3=Symbol.for("react.context"),G3=Symbol.for("react.forward_ref"),k3=Symbol.for("react.suspense"),X3=Symbol.for("react.memo"),tM=Symbol.for("react.lazy"),W3=Symbol.for("react.activity"),Y3=Symbol.for("react.view_transition"),KS=Symbol.iterator;function q3(e){return e===null||typeof e!="object"?null:(e=KS&&e[KS]||e["@@iterator"],typeof e=="function"?e:null)}var eM={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nM=Object.assign,iM={};function jl(e,t,n){this.props=e,this.context=t,this.refs=iM,this.updater=n||eM}jl.prototype.isReactComponent={};jl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rM(){}rM.prototype=jl.prototype;function c_(e,t,n){this.props=e,this.context=t,this.refs=iM,this.updater=n||eM}var f_=c_.prototype=new rM;f_.constructor=c_;nM(f_,jl.prototype);f_.isPureReactComponent=!0;var QS=Array.isArray;function l_(){}var je={H:null,A:null,T:null,S:null},sM=Object.prototype.hasOwnProperty;function h_(e,t,n){var i=n.ref;return{$$typeof:u_,type:e,key:t,ref:i!==void 0?i:null,props:n}}function Z3(e,t){return h_(e.type,t,e.props)}function d_(e){return typeof e=="object"&&e!==null&&e.$$typeof===u_}function J3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jS=/\/+/g;function o_(e,t){return typeof e=="object"&&e!==null&&e.key!=null?J3(""+e.key):t.toString(36)}function K3(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(l_,l_):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ql(e,t,n,i,r){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"bigint":case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case u_:case I3:a=!0;break;case tM:return a=e._init,Ql(a(e._payload),t,n,i,r)}}if(a)return r=r(e),a=i===""?"."+o_(e,0):i,QS(r)?(n="",a!=null&&(n=a.replace(jS,"$&/")+"/"),Ql(r,t,n,"",function(u){return u})):r!=null&&(d_(r)&&(r=Z3(r,n+(r.key==null||e&&e.key===r.key?"":(""+r.key).replace(jS,"$&/")+"/")+a)),t.push(r)),1;a=0;var o=i===""?".":i+":";if(QS(e))for(var l=0;l<e.length;l++)i=e[l],s=o+o_(i,l),a+=Ql(i,t,n,s,r);else if(l=q3(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+o_(i,l++),a+=Ql(i,t,n,s,r);else if(s==="object"){if(typeof e.then=="function")return Ql(K3(e),t,n,i,r);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return a}function bd(e,t,n){if(e==null)return e;var i=[],r=0;return Ql(e,i,"","",function(s){return t.call(n,s,r++)}),i}function Q3(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var $S=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function aM(e){var t=je.T,n={};n.types=t!==null?t.types:null,je.T=n;try{var i=e(),r=je.S;r!==null&&r(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(l_,$S)}catch(s){$S(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),je.T=t}}function oM(e){var t=je.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else aM(oM.bind(null,e))}var j3={map:bd,forEach:function(e,t,n){bd(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bd(e,function(){t++}),t},toArray:function(e){return bd(e,function(t){return t})||[]},only:function(e){if(!d_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};de.Activity=W3;de.Children=j3;de.Component=jl;de.Fragment=B3;de.Profiler=z3;de.PureComponent=c_;de.StrictMode=F3;de.Suspense=k3;de.ViewTransition=Y3;de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=je;de.__COMPILER_RUNTIME={__proto__:null,c:function(e){return je.H.useMemoCache(e)}};de.addTransitionType=oM;de.cache=function(e){return function(){return e.apply(null,arguments)}};de.cacheSignal=function(){return null};de.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=nM({},e.props),r=e.key;if(t!=null)for(s in t.key!==void 0&&(r=""+t.key),t)!sM.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),o=0;o<s;o++)a[o]=arguments[o+2];i.children=a}return h_(e.type,r,i)};de.createContext=function(e){return e={$$typeof:V3,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:H3,_context:e},e};de.createElement=function(e,t,n){var i,r={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)sM.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(r[i]=t[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),l=0;l<a;l++)o[l]=arguments[l+2];r.children=o}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return h_(e,s,r)};de.createRef=function(){return{current:null}};de.forwardRef=function(e){return{$$typeof:G3,render:e}};de.isValidElement=d_;de.lazy=function(e){return{$$typeof:tM,_payload:{_status:-1,_result:e},_init:Q3}};de.memo=function(e,t){return{$$typeof:X3,type:e,compare:t===void 0?null:t}};de.startTransition=aM;de.unstable_useCacheRefresh=function(){return je.H.useCacheRefresh()};de.use=function(e){return je.H.use(e)};de.useActionState=function(e,t,n){return je.H.useActionState(e,t,n)};de.useCallback=function(e,t){return je.H.useCallback(e,t)};de.useContext=function(e){return je.H.useContext(e)};de.useDebugValue=function(){};de.useDeferredValue=function(e,t){return je.H.useDeferredValue(e,t)};de.useEffect=function(e,t){return je.H.useEffect(e,t)};de.useEffectEvent=function(e){return je.H.useEffectEvent(e)};de.useId=function(){return je.H.useId()};de.useImperativeHandle=function(e,t,n){return je.H.useImperativeHandle(e,t,n)};de.useInsertionEffect=function(e,t){return je.H.useInsertionEffect(e,t)};de.useLayoutEffect=function(e,t){return je.H.useLayoutEffect(e,t)};de.useMemo=function(e,t){return je.H.useMemo(e,t)};de.useOptimistic=function(e,t){return je.H.useOptimistic(e,t)};de.useReducer=function(e,t,n){return je.H.useReducer(e,t,n)};de.useRef=function(e){return je.H.useRef(e)};de.useState=function(e){return je.H.useState(e)};de.useSyncExternalStore=function(e,t,n){return je.H.useSyncExternalStore(e,t,n)};de.useTransition=function(){return je.H.useTransition()};de.version="19.3.1"});var gs=ms((P5,uM)=>{"use strict";uM.exports=lM()});var yM=ms(rn=>{"use strict";function __(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,r=e[i];if(0<Td(r,t))e[i]=t,e[n]=r,n=i;else break t}}function _s(e){return e.length===0?null:e[0]}function Ad(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,r=e.length,s=r>>>1;i<s;){var a=2*(i+1)-1,o=e[a],l=a+1,u=e[l];if(0>Td(o,n))l<r&&0>Td(u,o)?(e[i]=u,e[l]=n,i=l):(e[i]=o,e[a]=n,i=a);else if(l<r&&0>Td(u,n))e[i]=u,e[l]=n,i=l;else break t}}return t}function Td(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}rn.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(cM=performance,rn.unstable_now=function(){return cM.now()}):(p_=Date,fM=p_.now(),rn.unstable_now=function(){return p_.now()-fM});var cM,p_,fM,Zs=[],Oa=[],$3=1,Dr=null,ri=3,v_=!1,Jc=!1,Kc=!1,y_=!1,pM=typeof setTimeout=="function"?setTimeout:null,mM=typeof clearTimeout=="function"?clearTimeout:null,hM=typeof setImmediate<"u"?setImmediate:null;function Ed(e){for(var t=_s(Oa);t!==null;){if(t.callback===null)Ad(Oa);else if(t.startTime<=e)Ad(Oa),t.sortIndex=t.expirationTime,__(Zs,t);else break;t=_s(Oa)}}function x_(e){if(Kc=!1,Ed(e),!Jc)if(_s(Zs)!==null)Jc=!0,tu||(tu=!0,$l());else{var t=_s(Oa);t!==null&&S_(x_,t.startTime-e)}}var tu=!1,Qc=-1,gM=5,_M=-1;function vM(){return y_?!0:!(rn.unstable_now()-_M<gM)}function m_(){if(y_=!1,tu){var e=rn.unstable_now();_M=e;var t=!0;try{t:{Jc=!1,Kc&&(Kc=!1,mM(Qc),Qc=-1),v_=!0;var n=ri;try{e:{for(Ed(e),Dr=_s(Zs);Dr!==null&&!(Dr.expirationTime>e&&vM());){var i=Dr.callback;if(typeof i=="function"){Dr.callback=null,ri=Dr.priorityLevel;var r=i(Dr.expirationTime<=e);if(e=rn.unstable_now(),typeof r=="function"){Dr.callback=r,Ed(e),t=!0;break e}Dr===_s(Zs)&&Ad(Zs),Ed(e)}else Ad(Zs);Dr=_s(Zs)}if(Dr!==null)t=!0;else{var s=_s(Oa);s!==null&&S_(x_,s.startTime-e),t=!1}}break t}finally{Dr=null,ri=n,v_=!1}t=void 0}}finally{t?$l():tu=!1}}}var $l;typeof hM=="function"?$l=function(){hM(m_)}:typeof MessageChannel<"u"?(g_=new MessageChannel,dM=g_.port2,g_.port1.onmessage=m_,$l=function(){dM.postMessage(null)}):$l=function(){pM(m_,0)};var g_,dM;function S_(e,t){Qc=pM(function(){e(rn.unstable_now())},t)}rn.unstable_IdlePriority=5;rn.unstable_ImmediatePriority=1;rn.unstable_LowPriority=4;rn.unstable_NormalPriority=3;rn.unstable_Profiling=null;rn.unstable_UserBlockingPriority=2;rn.unstable_cancelCallback=function(e){e.callback=null};rn.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):gM=0<e?Math.floor(1e3/e):5};rn.unstable_getCurrentPriorityLevel=function(){return ri};rn.unstable_next=function(e){switch(ri){case 1:case 2:case 3:var t=3;break;default:t=ri}var n=ri;ri=t;try{return e()}finally{ri=n}};rn.unstable_requestPaint=function(){y_=!0};rn.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=ri;ri=e;try{return t()}finally{ri=n}};rn.unstable_scheduleCallback=function(e,t,n){var i=rn.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,e={id:$3++,callback:t,priorityLevel:e,startTime:n,expirationTime:r,sortIndex:-1},n>i?(e.sortIndex=n,__(Oa,e),_s(Zs)===null&&e===_s(Oa)&&(Kc?(mM(Qc),Qc=-1):Kc=!0,S_(x_,n-i))):(e.sortIndex=r,__(Zs,e),Jc||v_||(Jc=!0,tu||(tu=!0,$l()))),e};rn.unstable_shouldYield=vM;rn.unstable_wrapCallback=function(e){var t=ri;return function(){var n=ri;ri=t;try{return e.apply(this,arguments)}finally{ri=n}}}});var SM=ms((B5,xM)=>{"use strict";xM.exports=yM()});var TM=ms(si=>{"use strict";var tD=gs();function bM(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function La(){}var Si={d:{f:La,r:function(){throw Error(bM(522))},D:La,C:La,L:La,m:La,X:La,S:La,M:La},p:0,findDOMNode:null},eD=Symbol.for("react.portal"),nD=Symbol.for("react.recoverable"),MM=Symbol.for("react.optimistic_key");function iD(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:eD,key:i==null?null:i===MM?MM:""+i,children:e,containerInfo:t,implementation:n}}var jc=tD.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function wd(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}si.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Si;si.browser=function(e){return{$$typeof:nD,_reason:e}};si.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(bM(299));return iD(e,t,null,n)};si.flushSync=function(e){var t=jc.T,n=Si.p;try{if(jc.T=null,Si.p=2,e)return e()}finally{jc.T=t,Si.p=n,Si.d.f()}};si.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Si.d.C(e,t))};si.prefetchDNS=function(e){typeof e=="string"&&Si.d.D(e)};si.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=wd(n,t.crossOrigin),r=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Si.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:r,fetchPriority:s}):n==="script"&&Si.d.X(e,{crossOrigin:i,integrity:r,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};si.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=wd(t.as,t.crossOrigin);Si.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Si.d.M(e)};si.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=wd(n,t.crossOrigin);Si.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};si.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=wd(t.as,t.crossOrigin);Si.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Si.d.m(e)};si.requestFormReset=function(e){Si.d.r(e)};si.unstable_batchedUpdates=function(e,t){return e(t)};si.useFormState=function(e,t,n){return jc.H.useFormState(e,t,n)};si.useFormStatus=function(){return jc.H.useHostTransitionStatus()};si.version="19.3.1"});var wM=ms((z5,AM)=>{"use strict";function EM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(EM)}catch(e){console.error(e)}}EM(),AM.exports=TM()});var dw=ms(lm=>{"use strict";var Ln=SM(),hT=gs(),rD=wM();function vt(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function dT(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hf(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function pT(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mT(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function RM(e){if(Hf(e)!==e)throw Error(vt(188))}function sD(e){var t=e.alternate;if(!t){if(t=Hf(e),t===null)throw Error(vt(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return RM(r),e;if(s===i)return RM(r),t;s=s.sibling}throw Error(vt(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(vt(189))}}if(n.alternate!==i)throw Error(vt(190))}if(n.tag!==3)throw Error(vt(188));return n.stateNode.current===n?e:t}function gT(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=gT(e),t!==null)return t;e=e.sibling}return null}function Xi(e,t,n,i,r,s){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,r,s)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&Xi(e.child,t,n,i,r,s))return!0;e=e.sibling}return!1}function ll(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function CM(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function _T(e){var t=[null,null],n=ll(e);return n===null||vT(t,e,n.child,{foundSelf:!1}),t}function vT(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&vT(e,t,n.child,i))return!0;n=n.sibling}return!1}function On(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(vt(559))}}var ou=null,$_=null;function aD(e,t,n){return e===n?!0:e===t?(ou=e,!0):!1}function oD(e,t,n){return e===n?($_=e,!1):e===t?($_!==null&&(ou=e),!0):!1}function DM(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function tv(e,t,n){for(var i=0,r=e;r;r=n(r))i++;r=0;for(var s=t;s;s=n(s))r++;for(;0<i-r;)e=n(e),i--;for(;0<r-i;)t=n(t),r--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Je=Object.assign,lD=Symbol.for("react.element"),Rd=Symbol.for("react.transitional.element"),af=Symbol.for("react.portal"),lu=Symbol.for("react.fragment"),yT=Symbol.for("react.strict_mode"),ev=Symbol.for("react.profiler"),xT=Symbol.for("react.consumer"),bs=Symbol.for("react.context"),cy=Symbol.for("react.forward_ref"),nv=Symbol.for("react.suspense"),iv=Symbol.for("react.suspense_list"),fy=Symbol.for("react.memo"),Ba=Symbol.for("react.lazy"),rv=Symbol.for("react.activity"),uD=Symbol.for("react.legacy_hidden"),cD=Symbol.for("react.memo_cache_sentinel"),sv=Symbol.for("react.view_transition"),fD=Symbol.for("react.recoverable"),UM=Symbol.iterator;function $c(e){return e===null||typeof e!="object"?null:(e=UM&&e[UM]||e["@@iterator"],typeof e=="function"?e:null)}var hD=Symbol.for("react.client.reference");function av(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===hD?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lu:return"Fragment";case ev:return"Profiler";case yT:return"StrictMode";case nv:return"Suspense";case iv:return"SuspenseList";case rv:return"Activity";case sv:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case af:return"Portal";case bs:return e.displayName||"Context";case xT:return(e._context.displayName||"Context")+".Consumer";case cy:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fy:return t=e.displayName||null,t!==null?t:av(e.type)||"Memo";case Ba:t=e._payload,e=e._init;try{return av(e(t))}catch{}}return null}var of=Array.isArray,he=hT.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ie=rD.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Jo={pending:!1,data:null,method:null,action:null},ov=[],uu=-1;function Ds(e){return{current:e}}function Kn(e){0>uu||(e.current=ov[uu],ov[uu]=null,uu--)}function en(e,t){uu++,ov[uu]=e.current,e.current=t}var ws=Ds(null),Tf=Ds(null),Ya=Ds(null),pp=Ds(null);function mp(e,t){switch(en(Ya,t),en(Tf,e),en(ws,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Wb(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Wb(t),e=GA(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Kn(ws),en(ws,e)}function Cu(){Kn(ws),Kn(Tf),Kn(Ya)}function lv(e){var t=e.memoizedState;t!==null&&(zu._currentValue=t.memoizedState,en(pp,e)),t=ws.current;var n=GA(t,e.type);t!==n&&(en(Tf,e),en(ws,n))}function gp(e){Tf.current===e&&(Kn(ws),Kn(Tf)),pp.current===e&&(Kn(pp),zu._currentValue=Jo)}var M_,OM;function Pa(e){if(M_===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);M_=t&&t[1]||"",OM=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+M_+e+OM}var b_=!1;function T_(e,t){if(!e||b_)return"";b_=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(g){var f=g}Reflect.construct(e,[],d)}else{try{d.call()}catch(g){f=g}d=!1;try{var h=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),d=!0,new e}finally{d&&(h!==void 0?Object.defineProperty(e.prototype,"props",h):delete e.prototype.props)}}}else{try{throw Error()}catch(g){f=g}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(g){if(g&&f&&typeof g.stack=="string")return[g.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),a=s[0],o=s[1];if(a&&o){var l=a.split(`
`),u=o.split(`
`);for(r=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;r<u.length&&!u[r].includes("DetermineComponentFrameRoot");)r++;if(i===l.length||r===u.length)for(i=l.length-1,r=u.length-1;1<=i&&0<=r&&l[i]!==u[r];)r--;for(;1<=i&&0<=r;i--,r--)if(l[i]!==u[r]){if(i!==1||r!==1)do if(i--,r--,0>r||l[i]!==u[r]){var c=`
`+l[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=r);break}}}finally{b_=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Pa(n):""}function dD(e,t){switch(e.tag){case 26:case 27:case 5:return Pa(e.type);case 16:return Pa("Lazy");case 13:return e.child!==t&&t!==null?Pa("Suspense Fallback"):Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 15:return T_(e.type,!1);case 11:return T_(e.type.render,!1);case 1:return T_(e.type,!0);case 31:return Pa("Activity");case 30:return Pa("ViewTransition");default:return""}}function LM(e){try{var t="",n=null;do t+=dD(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var uv=Object.prototype.hasOwnProperty,hy=Ln.unstable_scheduleCallback,E_=Ln.unstable_cancelCallback,pD=Ln.unstable_shouldYield,mD=Ln.unstable_requestPaint,or=Ln.unstable_now,gD=Ln.unstable_getCurrentPriorityLevel,ST=Ln.unstable_ImmediatePriority,MT=Ln.unstable_UserBlockingPriority,_p=Ln.unstable_NormalPriority,_D=Ln.unstable_LowPriority,bT=Ln.unstable_IdlePriority,vD=Ln.log,yD=Ln.unstable_setDisableYieldValue,Vf=null,lr=null;function Ha(e){if(typeof vD=="function"&&yD(e),lr&&typeof lr.setStrictMode=="function")try{lr.setStrictMode(Vf,e)}catch{}}var ur=Math.clz32?Math.clz32:MD,xD=Math.log,SD=Math.LN2;function MD(e){return e>>>=0,e===0?32:31-(xD(e)/SD|0)|0}var Cd=256,Dd=262144,Ud=4194304;function Xo(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function kp(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,s=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?r=Xo(i):(a&=o,a!==0?r=Xo(a):n||(n=o&~e,n!==0&&(r=Xo(n))))):(o=i&~s,o!==0?r=Xo(o):a!==0?r=Xo(a):n||(n=i&~e,n!==0&&(r=Xo(n)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:r}function Gf(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function TT(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-ur(n),r=1<<i;t|=e[i],n&=~r}return t}function bD(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ET(){var e=Ud;return Ud<<=1,(Ud&62914560)===0&&(Ud=4194304),e}function A_(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function kf(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function TD(e,t,n,i,r,s){var a=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,u=e.hiddenUpdates;for(n=a&~n;0<n;){var c=31-ur(n),d=1<<c;o[c]=0,l[c]=-1;var f=u[c];if(f!==null)for(u[c]=null,c=0;c<f.length;c++){var h=f[c];h!==null&&(h.lane&=-536870913)}n&=~d}i!==0&&AT(e,i,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(a&~t))}function AT(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ur(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function wT(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ur(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function RT(e,t){var n=t&-t;return n=(n&42)!==0?1:dy(n),(n&(e.suspendedLanes|t))!==0?0:n}function dy(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function py(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function CT(){var e=Ie.p;return e!==0?e:(e=window.event,e===void 0?32:cw(e.type))}function NM(e,t){var n=Ie.p;try{return Ie.p=e,t()}finally{Ie.p=n}}var oa=Math.random().toString(36).slice(2),Zn="__reactFiber$"+oa,Wi="__reactProps$"+oa,Gu="__reactContainer$"+oa,PM="__reactEvents$"+oa,ED="__reactListeners$"+oa,AD="__reactHandles$"+oa,IM="__reactResources$"+oa,Xf="__reactMarker$"+oa,vp="__reactLoad$"+oa;function Xp(e){delete e[Zn],delete e[Wi],delete e[ED],delete e[AD]}function qo(e){var t;if(t=e[Zn])return t;for(var n=e.parentNode;n;){if(t=n[Gu]||n[Zn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$b(e);e!==null;){if(n=e[Zn])return n;e=$b(e)}return t}e=n,n=e.parentNode}return null}function ku(e){if(e=e[Zn]||e[Gu]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function lf(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(vt(33))}function yu(e){var t=e[IM];return t||(t=e[IM]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Hn(e){e[Xf]=!0}function DT(e){e[vp]=void 0}var UT=new Set,OT={};function ul(e,t){Du(e,t),Du(e+"Capture",t)}function Du(e,t){for(OT[e]=t,e=0;e<t.length;e++)UT.add(t[e])}var wD=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),BM={},FM={};function RD(e){return uv.call(FM,e)?!0:uv.call(BM,e)?!1:wD.test(e)?FM[e]=!0:(BM[e]=!0,!1)}var Ne=!1;function zM(){var e=Ne;return Ne=!1,e}function Jd(e,t,n){if(RD(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Od(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Js(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function ir(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function LT(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function CD(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(a){n=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cv(e){if(!e._valueTracker){var t=LT(e)?"checked":"value";e._valueTracker=CD(e,t,""+e[t])}}function NT(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=LT(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var DD=/[\n"\\]/g;function Pr(e){return e.replace(DD,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function fv(e,t,n,i,r,s,a,o){e.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?e.type=a:e.removeAttribute("type"),t!=null?a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ir(t)):e.value!==""+ir(t)&&(e.value=""+ir(t)):a!=="submit"&&a!=="reset"||e.removeAttribute("value"),t!=null?a==="number"&&e.value==t?w_(e,ir(e.value)):w_(e,ir(t)):n!=null?w_(e,ir(n)):i!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ir(o):e.removeAttribute("name")}function PT(e,t,n,i,r,s,a,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){cv(e);return}n=n!=null?""+ir(n):"",t=t!=null?""+ir(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.name=a),cv(e)}function w_(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function xu(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ir(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function IT(e,t,n){if(t!=null&&(t=""+ir(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ir(n):""}function BT(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(vt(92));if(of(i)){if(1<i.length)throw Error(vt(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ir(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),cv(e)}function Uu(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var UD=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function HM(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||UD.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function FT(e,t,n){if(t!=null&&typeof t!="object")throw Error(vt(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",Ne=!0);for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&(HM(e,r,i),Ne=!0)}else for(var s in t)t.hasOwnProperty(s)&&HM(e,s,t[s])}function my(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var OD=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),LD=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kd(e){return LD.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ts(){}var hv=null;function gy(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cu=null,Su=null;function VM(e){var t=ku(e);if(t&&(e=t.stateNode)){var n=e[Wi]||null;t:switch(e=t.stateNode,t.type){case"input":if(fv(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Pr(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[Wi]||null;if(!r)throw Error(vt(90));fv(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&NT(i)}break t;case"textarea":IT(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&xu(e,!!n.multiple,t,!1)}}}var R_=!1;function zT(e,t,n){if(R_)return e(t,n);R_=!0;try{var i=e(t);return i}finally{if(R_=!1,(cu!==null||Su!==null)&&(rm(),cu&&(t=cu,e=Su,Su=cu=null,VM(t),e)))for(t=0;t<e.length;t++)VM(e[t])}}function Ef(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Wi]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(vt(231,t,typeof n));return n}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dv=!1;if(ea)try{eu={},Object.defineProperty(eu,"passive",{get:function(){dv=!0}}),window.addEventListener("test",eu,eu),window.removeEventListener("test",eu,eu)}catch{dv=!1}var eu,Va=null,_y=null,Qd=null;function HT(){if(Qd)return Qd;var e,t=_y,n=t.length,i,r="value"in Va?Va.value:Va.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var a=n-e;for(i=1;i<=a&&t[n-i]===r[s-i];i++);return Qd=r.slice(e,1<i?1-i:void 0)}function jd(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ld(){return!0}function GM(){return!1}function Ei(e){function t(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ld:GM,this.isPropagationStopped=GM,this}return Je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ld)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ld)},persist:function(){},isPersistent:Ld}),t}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wp=Ei(oo),Wf=Je({},oo,{view:0,detail:0}),ND=Ei(Wf),C_,D_,tf,Yp=Je({},Wf,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vy,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tf&&(tf&&e.type==="mousemove"?(C_=e.screenX-tf.screenX,D_=e.screenY-tf.screenY):D_=C_=0,tf=e),C_)},movementY:function(e){return"movementY"in e?e.movementY:D_}}),kM=Ei(Yp),PD=Je({},Yp,{dataTransfer:0}),ID=Ei(PD),BD=Je({},Wf,{relatedTarget:0}),U_=Ei(BD),FD=Je({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),zD=Ei(FD),HD=Je({},oo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),VD=Ei(HD),GD=Je({},oo,{data:0}),XM=Ei(GD),kD={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XD={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WD={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YD(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=WD[e])?!!t[e]:!1}function vy(){return YD}var qD=Je({},Wf,{key:function(e){if(e.key){var t=kD[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jd(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?XD[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vy,charCode:function(e){return e.type==="keypress"?jd(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jd(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ZD=Ei(qD),JD=Je({},Yp,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),WM=Ei(JD),KD=Je({},oo,{submitter:0}),QD=Ei(KD),jD=Je({},Wf,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vy}),$D=Ei(jD),tU=Je({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),eU=Ei(tU),nU=Je({},Yp,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),iU=Ei(nU),rU=Je({},oo,{newState:0,oldState:0,source:0}),sU=Ei(rU),aU=[9,13,27,32],yy=ea&&"CompositionEvent"in window,ff=null;ea&&"documentMode"in document&&(ff=document.documentMode);var oU=ea&&"TextEvent"in window&&!ff,VT=ea&&(!yy||ff&&8<ff&&11>=ff),YM=" ",qM=!1;function GT(e,t){switch(e){case"keyup":return aU.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kT(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fu=!1;function lU(e,t){switch(e){case"compositionend":return kT(t);case"keypress":return t.which!==32?null:(qM=!0,YM);case"textInput":return e=t.data,e===YM&&qM?null:e;default:return null}}function uU(e,t){if(fu)return e==="compositionend"||!yy&&GT(e,t)?(e=HT(),Qd=_y=Va=null,fu=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return VT&&t.locale!=="ko"?null:t.data;default:return null}}var cU={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ZM(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cU[e.type]:t==="textarea"}function XT(e,t,n,i){cu?Su?Su.push(i):Su=[i]:cu=i,t=Hp(t,"onChange"),0<t.length&&(n=new Wp("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var hf=null,Af=null;function fU(e){zA(e,0)}function qp(e){var t=lf(e);if(NT(t))return e}function JM(e,t){if(e==="change")return t}var WT=!1;ea&&(ea?(Pd="oninput"in document,Pd||(O_=document.createElement("div"),O_.setAttribute("oninput","return;"),Pd=typeof O_.oninput=="function"),Nd=Pd):Nd=!1,WT=Nd&&(!document.documentMode||9<document.documentMode));var Nd,Pd,O_;function KM(){hf&&(hf.detachEvent("onpropertychange",YT),Af=hf=null)}function YT(e){if(e.propertyName==="value"&&qp(Af)){var t=[];XT(t,Af,e,gy(e)),zT(fU,t)}}function hU(e,t,n){e==="focusin"?(KM(),hf=t,Af=n,hf.attachEvent("onpropertychange",YT)):e==="focusout"&&KM()}function dU(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qp(Af)}function pU(e,t){if(e==="click")return qp(t)}function mU(e,t){if(e==="input"||e==="change")return qp(t)}function gU(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var fr=typeof Object.is=="function"?Object.is:gU;function wf(e,t){if(fr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!uv.call(t,r)||!fr(e[r],t[r]))return!1}return!0}function pv(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function QM(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jM(e,t){var n=QM(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=QM(n)}}function qT(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qT(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ZT(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pv(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pv(e.document)}return t}function xy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var _U=ea&&"documentMode"in document&&11>=document.documentMode,hu=null,mv=null,df=null,gv=!1;function $M(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gv||hu==null||hu!==pv(i)||(i=hu,"selectionStart"in i&&xy(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),df&&wf(df,i)||(df=i,i=Hp(mv,"onSelect"),0<i.length&&(t=new Wp("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=hu)))}function Go(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var du={animationend:Go("Animation","AnimationEnd"),animationiteration:Go("Animation","AnimationIteration"),animationstart:Go("Animation","AnimationStart"),transitionrun:Go("Transition","TransitionRun"),transitionstart:Go("Transition","TransitionStart"),transitioncancel:Go("Transition","TransitionCancel"),transitionend:Go("Transition","TransitionEnd")},L_={},JT={};ea&&(JT=document.createElement("div").style,"AnimationEvent"in window||(delete du.animationend.animation,delete du.animationiteration.animation,delete du.animationstart.animation),"TransitionEvent"in window||delete du.transitionend.transition);function cl(e){if(L_[e])return L_[e];if(!du[e])return e;var t=du[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in JT)return L_[e]=t[n];return e}var KT=cl("animationend"),QT=cl("animationiteration"),jT=cl("animationstart"),vU=cl("transitionrun"),yU=cl("transitionstart"),xU=cl("transitioncancel"),$T=cl("transitionend"),tE=new Map,_v="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_v.push("scrollEnd");function is(e,t){tE.set(e,t),ul(t,[e])}var SU=0;function na(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=ns.identifierPrefix;var n=SU++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function tb(e){if(e==null||typeof e=="string")return e;var t=null,n=Ru;if(n!==null)for(var i=0;i<n.length;i++){var r=e[n[i]];if(r!=null){if(r==="none")return"none";t=t==null?r:t+(" "+r)}}return t??e.default}function la(e,t){return e=tb(e),t=tb(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var yp=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Or=[],pu=0,Sy=0;function Zp(){for(var e=pu,t=Sy=pu=0;t<e;){var n=Or[t];Or[t++]=null;var i=Or[t];Or[t++]=null;var r=Or[t];Or[t++]=null;var s=Or[t];if(Or[t++]=null,i!==null&&r!==null){var a=i.pending;a===null?r.next=r:(r.next=a.next,a.next=r),i.pending=r}s!==0&&eE(n,r,s)}}function Jp(e,t,n,i){Or[pu++]=e,Or[pu++]=t,Or[pu++]=n,Or[pu++]=i,Sy|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function My(e,t,n,i){return Jp(e,t,n,i),xp(e)}function fl(e,t){return Jp(e,null,null,t),xp(e)}function eE(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var r=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-ur(n),e=s.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=n|536870912),s):null}function xp(e){if(50<bf)throw bf=0,lp=null,Error(vt(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mu={};function MU(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gi(e,t,n,i){return new MU(e,t,n,i)}function by(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $s(e,t){var n=e.alternate;return n===null?(n=Gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function nE(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function $d(e,t,n,i,r,s){var a=0;if(i=e,typeof i=="function")by(i)&&(a=1);else if(typeof i=="string")a=ZO(e,n,ws.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case rv:return e=Gi(31,n,t,r),e.elementType=rv,e.lanes=s,e;case lu:return Ko(n.children,r,s,t);case yT:a=8,r|=24;break;case ev:return e=Gi(12,n,t,r|2),e.elementType=ev,e.lanes=s,e;case nv:return e=Gi(13,n,t,r),e.elementType=nv,e.lanes=s,e;case iv:return e=Gi(19,n,t,r),e.elementType=iv,e.lanes=s,e;case uD:case sv:return e=r|32,e=Gi(30,n,t,e),e.elementType=sv,e.lanes=s,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case bs:a=10;break t;case xT:a=9;break t;case cy:a=11;break t;case fy:a=14;break t;case Ba:a=16,i=null;break t}a=29,n=Error(vt(130,e===null?"null":typeof e,"")),i=null}return t=Gi(a,n,t,r),t.elementType=e,t.type=i,t.lanes=s,t}function Ko(e,t,n,i){return e=Gi(7,e,i,t),e.lanes=n,e}function N_(e,t,n){return e=Gi(6,e,null,t),e.lanes=n,e}function iE(e){var t=Gi(18,null,null,0);return t.stateNode=e,t}function P_(e,t,n){return t=Gi(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var eb=new WeakMap;function Ir(e,t){if(typeof e=="object"&&e!==null){var n=eb.get(e);return n!==void 0?n:(t={value:e,source:t,stack:LM(t)},eb.set(e,t),t)}return{value:e,source:t,stack:LM(t)}}var gu=[],_u=0,Sp=null,Rf=0,Lr=[],Nr=0,no=null,Es=1,As="";function Qs(e,t){gu[_u++]=Rf,gu[_u++]=Sp,Sp=e,Rf=t}function rE(e,t,n){Lr[Nr++]=Es,Lr[Nr++]=As,Lr[Nr++]=no,no=e;var i=Es;e=As;var r=32-ur(i)-1;i&=~(1<<r),n+=1;var s=32-ur(t)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Es=1<<32-ur(t)+r|n<<r|i,As=s+e}else Es=1<<s|n<<r|i,As=e}function Kp(e){e.return!==null&&(Qs(e,1),rE(e,1,0))}function Ty(e){for(;e===Sp;)Sp=gu[--_u],gu[_u]=null,Rf=gu[--_u],gu[_u]=null;for(;e===no;)no=Lr[--Nr],Lr[Nr]=null,As=Lr[--Nr],Lr[Nr]=null,Es=Lr[--Nr],Lr[Nr]=null}function sE(e,t){Lr[Nr++]=Es,Lr[Nr++]=As,Lr[Nr++]=no,Es=t.id,As=t.overflow,no=e}var Vn=null,tn=null,Se=!1,qa=null,Br=!1,vv=Error(vt(519));function io(e){var t=Error(vt(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Cf(Ir(t,e)),vv}function nb(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Zn]=e,t[Wi]=i,n){case"dialog":Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":case"embed":Ee("load",t);break;case"video":case"audio":for(n=0;n<Lf.length;n++)Ee(Lf[n],t);break;case"source":Ee("error",t);break;case"img":case"image":case"link":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"input":Ee("invalid",t),PT(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Ee("invalid",t);break;case"textarea":Ee("invalid",t),BT(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||VA(t.textContent,n)?(i.popover!=null&&(Ee("beforetoggle",t),Ee("toggle",t)),i.onScroll!=null&&Ee("scroll",t),i.onScrollEnd!=null&&Ee("scrollend",t),i.onClick!=null&&(t.onclick=Ts),t=!0):t=!1,t||io(e,!0)}function Mp(e){for(Vn=e.return;Vn;)switch(Vn.tag){case 5:case 31:case 13:Br=!1;return;case 27:case 3:Br=!0;return;default:Vn=Vn.return}}function nu(e){if(e!==Vn)return!1;if(!Se)return Mp(e),Se=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ny(e.type,e.memoizedProps)),n=!n),n&&tn&&io(e),Mp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(vt(317));tn=jb(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(vt(317));tn=jb(e)}else t===27?(t=tn,lo(e.type)?(e=ay,ay=null,tn=e):tn=t):tn=Vn?Fr(e.stateNode.nextSibling):null;return!0}function tl(){tn=Vn=null,Se=!1}function I_(){var e=qa;return e!==null&&(Hi===null?Hi=e:Hi.push.apply(Hi,e),qa=null),e}function Cf(e){qa===null?qa=[e]:qa.push(e)}var yv=Ds(null),hl=null,js=null;function Ga(e,t,n){en(yv,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=yv.current,Kn(yv)}function tp(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function xv(e,t,n,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var a=r.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=r;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),tp(s.return,n,e),i||(a=null);break t}s=o.next}}else if(r.tag===18){if(a=r.return,a===null)throw Error(vt(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),tp(a,n,e),a=null}else r.tag===13&&r.memoizedState!==null&&r.memoizedState.dehydrated===null?(r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),tp(r.return,n,e),a=r.child,a=a!==null?a.sibling:null):a=r.child;if(a!==null)a.return=r;else for(a=r;a!==null;){if(a===e){a=null;break}if(r=a.sibling,r!==null){r.return=a.return,a=r;break}a=a.return}r=a}}function el(e,t,n,i){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var a=r.alternate;if(a===null)throw Error(vt(387));if(a=a.memoizedProps,a!==null){var o=r.type;fr(r.pendingProps.value,a.value)||(e!==null?e.push(o):e=[o])}}else if(r===pp.current){if(a=r.alternate,a===null)throw Error(vt(387));a.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(zu):e=[zu])}r=r.return}return e!==null&&xv(t,e,n,i),t.flags|=262144,e!==null}function bp(e){for(e=e.firstContext;e!==null;){if(!fr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function nl(e){hl=e,js=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Jn(e){return aE(hl,e)}function Id(e,t){return hl===null&&nl(e),aE(e,t)}function aE(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},js===null){if(e===null)throw Error(vt(308));js=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else js=js.next=t;return n}var bU=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},TU=Ln.unstable_scheduleCallback,EU=Ln.unstable_NormalPriority,En={$$typeof:bs,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ey(){return{controller:new bU,data:new Map,refCount:0}}function Yf(e){e.refCount--,e.refCount===0&&TU(EU,function(){e.controller.abort()})}function ib(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var uf=null;function AU(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var pf=null,Sv=0,il=0,Mu=null;function wU(e,t){if(pf===null){var n=pf=[];Sv=0,il=$y(),Mu={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Sv++,t.then(rb,rb),t}function rb(){if(--Sv===0&&(uf=null,pf!==null)){Mu!==null&&(Mu.status="fulfilled");var e=pf;pf=null,il=0,Mu=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function RU(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var sb=he.S;he.S=function(e,t){if(TA=or(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&wU(e,t),uf!==null)for(var n=Iu;n!==null;)ib(n,uf),n=n.next;if(n=e.types,n!==null){for(var i=Iu;i!==null;)ib(i,n),i=i.next;if(il!==0){i=uf,i===null&&(i=uf=[]);for(var r=0;r<n.length;r++){var s=n[r];i.indexOf(s)===-1&&i.push(s)}}}sb!==null&&sb(e,t)};var Qo=Ds(null);function Ay(){var e=Qo.current;return e!==null?e:Ze.pooledCache}function ep(e,t){t===null?en(Qo,Qo.current):en(Qo,t.pool)}function oE(){var e=Ay();return e===null?null:{parent:En._currentValue,pool:e}}var Xu=Error(vt(460)),wy=Error(vt(474)),Qp=Error(vt(542)),Tp={then:function(){}};function ab(e){return e=e.status,e==="fulfilled"||e==="rejected"}function lE(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ts,Ts),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lb(e),e===void 0&&!("reason"in t)?Error(vt(600)):e;default:if(typeof t.status=="string")t.then(Ts,Ts);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(vt(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lb(e),e}throw jo=t,Xu}}function Wo(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(jo=n,Xu):n}}var jo=null;function ob(){if(jo===null)throw Error(vt(459));var e=jo;return jo=null,e}function lb(e){if(e===Xu||e===Qp)throw Error(vt(483))}var bu=null,Df=0;function Bd(e){var t=Df;return Df+=1,bu===null&&(bu=[]),lE(bu,e,t)}function Na(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fd(e,t){throw t.$$typeof===lD?Error(vt(525)):(e=Object.prototype.toString.call(t),Error(vt(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function uE(e){function t(p,y){if(e){var S=p.deletions;S===null?(p.deletions=[y],p.flags|=16):S.push(y)}}function n(p,y){if(!e)return null;for(;y!==null;)t(p,y),y=y.sibling;return null}function i(p){for(var y=new Map;p!==null;)p.key===null?y.set(p.index,p):y.set(p.key,p),p=p.sibling;return y}function r(p,y){return p=$s(p,y),p.index=0,p.sibling=null,p}function s(p,y,S){return p.index=S,e?(S=p.alternate,S!==null?(S=S.index,S<y?(p.flags|=2,y):S):(p.flags|=134217730,y)):(p.flags|=1048576,y)}function a(p){return e&&p.alternate===null&&(p.flags|=134217730),p}function o(p,y,S,x){return y===null||y.tag!==6?(y=N_(S,p.mode,x),y.return=p,y):(y=r(y,S),y.return=p,y)}function l(p,y,S,x){var E=S.type;return E===lu?(p=c(p,y,S.props.children,x,S.key),Na(p,S),p):y!==null&&(y.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ba&&Wo(E)===y.type)?(y=r(y,S.props),Na(y,S),y.return=p,y):(y=$d(S.type,S.key,S.props,null,p.mode,x),Na(y,S),y.return=p,y)}function u(p,y,S,x){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=P_(S,p.mode,x),y.return=p,y):(y=r(y,S.children||[]),y.return=p,y)}function c(p,y,S,x,E){return y===null||y.tag!==7?(y=Ko(S,p.mode,x,E),y.return=p,y):(y=r(y,S),y.return=p,y)}function d(p,y,S){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=N_(""+y,p.mode,S),y.return=p,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Rd:return S=$d(y.type,y.key,y.props,null,p.mode,S),Na(S,y),S.return=p,S;case af:return y=P_(y,p.mode,S),y.return=p,y;case Ba:return y=Wo(y),d(p,y,S)}if(of(y)||$c(y))return y=Ko(y,p.mode,S,null),y.return=p,y;if(typeof y.then=="function")return d(p,Bd(y),S);if(y.$$typeof===bs)return d(p,Id(p,y),S);Fd(p,y)}return null}function f(p,y,S,x){var E=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return E!==null?null:o(p,y,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Rd:return S.key===E?l(p,y,S,x):null;case af:return S.key===E?u(p,y,S,x):null;case Ba:return S=Wo(S),f(p,y,S,x)}if(of(S)||$c(S))return E!==null?null:c(p,y,S,x,null);if(typeof S.then=="function")return f(p,y,Bd(S),x);if(S.$$typeof===bs)return f(p,y,Id(p,S),x);Fd(p,S)}return null}function h(p,y,S,x,E){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return p=p.get(S)||null,o(y,p,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Rd:return p=p.get(x.key===null?S:x.key)||null,l(y,p,x,E);case af:return p=p.get(x.key===null?S:x.key)||null,u(y,p,x,E);case Ba:return x=Wo(x),h(p,y,S,x,E)}if(of(x)||$c(x))return p=p.get(S)||null,c(y,p,x,E,null);if(typeof x.then=="function")return h(p,y,S,Bd(x),E);if(x.$$typeof===bs)return h(p,y,S,Id(y,x),E);Fd(y,x)}return null}function g(p,y,S,x){for(var E=null,R=null,A=y,C=y=0,v=null;A!==null&&C<S.length;C++){A.index>C?(v=A,A=null):v=A.sibling;var M=f(p,A,S[C],x);if(M===null){A===null&&(A=v);break}e&&A&&M.alternate===null&&t(p,A),y=s(M,y,C),R===null?E=M:R.sibling=M,R=M,A=v}if(C===S.length)return n(p,A),Se&&Qs(p,C),E;if(A===null){for(;C<S.length;C++)A=d(p,S[C],x),A!==null&&(y=s(A,y,C),R===null?E=A:R.sibling=A,R=A);return Se&&Qs(p,C),E}for(A=i(A);C<S.length;C++)v=h(A,p,C,S[C],x),v!==null&&(e&&(M=v.alternate,M!==null&&A.delete(M.key===null?C:M.key)),y=s(v,y,C),R===null?E=v:R.sibling=v,R=v);return e&&A.forEach(function(P){return t(p,P)}),Se&&Qs(p,C),E}function _(p,y,S,x){if(S==null)throw Error(vt(151));for(var E=null,R=null,A=y,C=y=0,v=null,M=S.next();A!==null&&!M.done;C++,M=S.next()){A.index>C?(v=A,A=null):v=A.sibling;var P=f(p,A,M.value,x);if(P===null){A===null&&(A=v);break}e&&A&&P.alternate===null&&t(p,A),y=s(P,y,C),R===null?E=P:R.sibling=P,R=P,A=v}if(M.done)return n(p,A),Se&&Qs(p,C),E;if(A===null){for(;!M.done;C++,M=S.next())M=d(p,M.value,x),M!==null&&(y=s(M,y,C),R===null?E=M:R.sibling=M,R=M);return Se&&Qs(p,C),E}for(A=i(A);!M.done;C++,M=S.next())M=h(A,p,C,M.value,x),M!==null&&(e&&(v=M.alternate,v!==null&&A.delete(v.key===null?C:v.key)),y=s(M,y,C),R===null?E=M:R.sibling=M,R=M);return e&&A.forEach(function(L){return t(p,L)}),Se&&Qs(p,C),E}function m(p,y,S,x){if(typeof S=="object"&&S!==null&&S.type===lu&&S.key===null&&S.props.ref===void 0&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Rd:t:{for(var E=S.key;y!==null;){if(y.key===E){if(E=S.type,E===lu){if(y.tag===7){n(p,y.sibling),x=r(y,S.props.children),Na(x,S),x.return=p,p=x;break t}}else if(y.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ba&&Wo(E)===y.type){n(p,y.sibling),x=r(y,S.props),Na(x,S),x.return=p,p=x;break t}n(p,y);break}else t(p,y);y=y.sibling}S.type===lu?(x=Ko(S.props.children,p.mode,x,S.key),Na(x,S),x.return=p,p=x):(x=$d(S.type,S.key,S.props,null,p.mode,x),Na(x,S),x.return=p,p=x)}return a(p);case af:t:{for(E=S.key;y!==null;){if(y.key===E)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){n(p,y.sibling),x=r(y,S.children||[]),x.return=p,p=x;break t}else{n(p,y);break}else t(p,y);y=y.sibling}x=P_(S,p.mode,x),x.return=p,p=x}return a(p);case Ba:return S=Wo(S),m(p,y,S,x)}if(of(S))return g(p,y,S,x);if($c(S)){if(E=$c(S),typeof E!="function")throw Error(vt(150));return S=E.call(S),_(p,y,S,x)}if(typeof S.then=="function")return m(p,y,Bd(S),x);if(S.$$typeof===bs)return m(p,y,Id(p,S),x);Fd(p,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,y!==null&&y.tag===6?(n(p,y.sibling),x=r(y,S),x.return=p,p=x):(n(p,y),x=N_(S,p.mode,x),x.return=p,p=x),a(p)):n(p,y)}return function(p,y,S,x){try{Df=0;var E=m(p,y,S,x);return bu=null,E}catch(A){if(A===Xu||A===Qp)throw A;var R=Gi(29,A,null,p.mode);return R.lanes=x,R.return=p,R}}}var rl=uE(!0),cE=uE(!1),Fa=!1;function Ry(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Pe&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=xp(e),eE(e,null,n),t}return Jp(e,i,t,n),xp(e)}function mf(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,wT(e,n)}}function B_(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var bv=!1;function gf(){if(bv){var e=Mu;if(e!==null)throw e}}function _f(e,t,n,i){bv=!1;var r=e.updateQueue;Fa=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==a&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,c=u=l=null,o=s;do{var f=o.lane&-536870913,h=f!==o.lane;if(h?(Re&f)===f:(i&f)===f){f!==0&&f===il&&(bv=!0),c!==null&&(c=c.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=e,_=o;f=t;var m=n;switch(_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(m,d,f);break t}d=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(m,d,f):g,f==null)break t;d=Je({},d,f);break t;case 2:Fa=!0}}f=o.callback,f!==null&&(e.flags|=64,h&&(e.flags|=8192),h=r.callbacks,h===null?r.callbacks=[f]:h.push(f))}else h={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=h,l=d):c=c.next=h,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,s===null&&(r.shared.lanes=0),ao|=a,e.lanes=a,e.memoizedState=d}}function fE(e,t){if(typeof e!="function")throw Error(vt(191,e));e.call(t)}function hE(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)fE(n[e],t)}var ro=Ds(null),Ep=Ds(0);function ub(e,t){e=aa,en(Ep,e),en(ro,t),aa=e|t.baseLanes}function Tv(){en(Ep,aa),en(ro,ro.current)}function Cy(){aa=Ep.current,Kn(ro),Kn(Ep)}var $n=Ds(null),ai=null;function Ka(e){var t=e.alternate;en(Qn,Qn.current&1),en($n,e),ai===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(ai=e)}function Ev(e){en(Qn,Qn.current),en($n,e),ai===null&&(ai=e)}function dE(e){e.tag===22?(en(Qn,Qn.current),en($n,e),ai===null&&(ai=e)):Qa()}function Qa(){en(Qn,Qn.current),en($n,$n.current)}function rr(e){Kn($n),ai===e&&(ai=null),Kn(Qn)}var Qn=Ds(0);function Uf(e,t){en($n,$n.current),en(Qn,t)}function Dy(e){Kn(Qn),Kn($n),ai===e&&(ai=null)}function Ap(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||sy(n)||ix(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ia=0,me=null,Ye=null,Tn=null,wp=!1,Tu=!1,sl=!1,Rp=0,Of=0,Eu=null,CU=0;function dn(){throw Error(vt(321))}function Uy(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!fr(e[n],t[n]))return!1;return!0}function Oy(e,t,n,i,r,s){return ia=s,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,he.H=e===null||e.memoizedState===null?XE:WE,sl=!1,s=n(i,r),sl=!1,Tu&&(s=mE(t,n,i,r)),pE(e),s}function pE(e){he.H=Cp;var t=Ye!==null&&Ye.next!==null;if(ia=0,Tn=Ye=me=null,wp=!1,Of=0,Eu=null,t)throw Error(vt(300));e===null||An||(e=e.dependencies,e!==null&&bp(e)&&(An=!0))}function mE(e,t,n,i){me=e;var r=0;do{if(Tu&&(Eu=null),Of=0,Tu=!1,25<=r)throw Error(vt(301));if(r+=1,Tn=Ye=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}he.H=BU,s=t(n,i)}while(Tu);return s}function DU(){var e=he.H,t=e.useState()[0];return t=typeof t.then=="function"?qf(t):t,e=e.useState()[0],(Ye!==null?Ye.memoizedState:null)!==e&&(me.flags|=1024),t}function Ly(){var e=Rp!==0;return Rp=0,e}function Ny(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Py(e){if(wp){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}wp=!1}ia=0,Tn=Ye=me=null,Tu=!1,Of=Rp=0,Eu=null}function Ti(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?me.memoizedState=Tn=e:Tn=Tn.next=e,Tn}function xn(){if(Ye===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=Tn===null?me.memoizedState:Tn.next;if(t!==null)Tn=t,Ye=e;else{if(e===null)throw me.alternate===null?Error(vt(467)):Error(vt(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},Tn===null?me.memoizedState=Tn=e:Tn=Tn.next=e}return Tn}function jp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qf(e){var t=Of;return Of+=1,Eu===null&&(Eu=[]),e=lE(Eu,e,t),t=me,(Tn===null?t.memoizedState:Tn.next)===null&&(t=t.alternate,he.H=t===null||t.memoizedState===null?XE:WE),e}function $p(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return qf(e);if(e.$$typeof===fD)return;if(e.$$typeof===bs)return Jn(e)}throw Error(vt(438,String(e)))}function Iy(e){var t=null,n=me.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=me.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=jp(),me.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=cD;return t.index++,n}function ra(e,t){return typeof t=="function"?t(e):t}function np(e){var t=xn();return By(t,Ye,e)}function By(e,t,n){var i=e.queue;if(i===null)throw Error(vt(311));i.lastRenderedReducer=n;var r=e.baseQueue,s=i.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}t.baseQueue=r=s,i.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var o=a=null,l=null,u=t,c=!1;do{var d=u.lane&-536870913;if(d!==u.lane?(Re&d)===d:(ia&d)===d){var f=u.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),d===il&&(c=!0);else if((ia&f)===f){u=u.next,f===il&&(c=!0);continue}else d={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=d,a=s):l=l.next=d,me.lanes|=f,ao|=f;d=u.action,sl&&n(s,d),s=u.hasEagerState?u.eagerState:n(s,d)}else f={lane:d,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=f,a=s):l=l.next=f,me.lanes|=d,ao|=d;u=u.next}while(u!==null&&u!==t);if(l===null?a=s:l.next=o,!fr(s,e.memoizedState)&&(An=!0,c&&(n=Mu,n!==null)))throw n;e.memoizedState=s,e.baseState=a,e.baseQueue=l,i.lastRenderedState=s}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function F_(e){var t=xn(),n=t.queue;if(n===null)throw Error(vt(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=e(s,a.action),a=a.next;while(a!==r);fr(s,t.memoizedState)||(An=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function gE(e,t,n){var i=me,r=xn(),s=Se;if(s){if(n===void 0)throw Error(vt(407));n=n()}else n=t();var a=!fr((Ye||r).memoizedState,n);if(a&&(r.memoizedState=n,An=!0),r=r.queue,Fy(yE.bind(null,i,r,e),[e]),e=r.getSnapshot!==t||a||Tn!==null&&(Tn.memoizedState.tag&1)!==0,Ou(e?9:8,{destroy:void 0},vE.bind(null,i,r,n,t),null),e){if(i.flags|=2048,Ze===null)throw Error(vt(349));s||(ia&127)!==0||_E(i,t,n)}return n}function _E(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t=jp(),me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vE(e,t,n,i){t.value=n,t.getSnapshot=i,xE(t)&&SE(e)}function yE(e,t,n){return n(function(){xE(t)&&SE(e)})}function xE(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!fr(e,n)}catch{return!0}}function SE(e){var t=fl(e,2);t!==null&&ki(t,e,2)}function Av(e){var t=Ti();if(typeof e=="function"){var n=e;if(e=n(),sl){Ha(!0);try{n()}finally{Ha(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},t}function ME(e,t,n,i){return e.baseState=n,By(e,Ye,typeof i=="function"?i:ra)}function UU(e,t,n,i,r){if(em(e))throw Error(vt(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){s.listeners.push(a)}};he.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,bE(t,s)):(s.next=n.next,t.pending=n.next=s)}}function bE(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var s=he.T,a={};a.types=s!==null?s.types:null,he.T=a;try{var o=n(r,i),l=he.S;l!==null&&l(a,o),cb(e,t,o)}catch(u){wv(e,t,u)}finally{s!==null&&a.types!==null&&(s.types=a.types),he.T=s}}else try{s=n(r,i),cb(e,t,s)}catch(u){wv(e,t,u)}}function cb(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){fb(e,t,i)},function(i){return wv(e,t,i)}):fb(e,t,n)}function fb(e,t,n){t.status="fulfilled",t.value=n,TE(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,bE(e,n)))}function wv(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,TE(t),t=t.next;while(t!==i)}e.action=null}function TE(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function EE(e,t){return t}function hb(e,t){if(Se){var n=Ze.formState;if(n!==null){t:{var i=me;if(Se){if(tn){e:{for(var r=tn,s=Br;r.nodeType!==8;){if(!s){r=null;break e}if(r=Fr(r.nextSibling),r===null){r=null;break e}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){tn=Fr(r.nextSibling),i=r.data==="F!";break t}}io(i)}i=!1}i&&(t=n[0])}}return n=Ti(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:EE,lastRenderedState:t},n.queue=i,n=VE.bind(null,me,i),i.dispatch=n,i=Av(!1),s=Gy.bind(null,me,!1,i.queue),i=Ti(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,n=UU.bind(null,me,r,s,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function db(e){var t=xn();return AE(t,Ye,e)}function AE(e,t,n){if(t=By(e,t,EE)[0],e=np(ra)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=qf(t)}catch(a){throw a===Xu?Qp:a}else i=t;t=xn();var r=t.queue,s=r.dispatch;return n!==t.memoizedState&&(me.flags|=2048,Ou(9,{destroy:void 0},OU.bind(null,r,n),null)),[i,s,e]}function OU(e,t){e.action=t}function pb(e){var t=xn(),n=Ye;if(n!==null)return AE(t,n,e);xn(),t=t.memoizedState,n=xn();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ou(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=me.updateQueue,t===null&&(t=jp(),me.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function wE(){return xn().memoizedState}function ip(e,t,n,i){var r=Ti();me.flags|=e,r.memoizedState=Ou(1|t,{destroy:void 0},n,i===void 0?null:i)}function tm(e,t,n,i){var r=xn();i=i===void 0?null:i;var s=r.memoizedState.inst;Ye!==null&&i!==null&&Uy(i,Ye.memoizedState.deps)?r.memoizedState=Ou(t,s,n,i):(me.flags|=e,r.memoizedState=Ou(1|t,s,n,i))}function mb(e,t){ip(8390656,8,e,t)}function Fy(e,t){tm(2048,8,e,t)}function LU(e){me.flags|=4;var t=me.updateQueue;if(t===null)t=jp(),me.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function RE(e){var t=xn().memoizedState;return LU({ref:t,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(vt(440));return t.impl.apply(void 0,arguments)}}function CE(e,t){return tm(4,2,e,t)}function DE(e,t){return tm(4,4,e,t)}function UE(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function OE(e,t,n){n=n!=null?n.concat([e]):null,tm(4,4,UE.bind(null,t,e),n)}function zy(){}function LE(e,t){var n=xn();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Uy(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function NE(e,t){var n=xn();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Uy(t,i[1]))return i[0];if(i=e(),sl){Ha(!0);try{e()}finally{Ha(!1)}}return n.memoizedState=[i,t],i}function Hy(e,t,n){return n===void 0||(ia&1073741824)!==0&&(Re&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=AA(),me.lanes|=e,ao|=e,n)}function PE(e,t,n,i){return fr(n,t)?n:ro.current!==null?(e=Hy(e,n,i),fr(e,t)||(An=!0),e):(ia&106)===0||(ia&1073741824)!==0&&(Re&261930)===0?(An=!0,e.memoizedState=n):(e=AA(),me.lanes|=e,ao|=e,t)}function IE(e,t,n,i,r){var s=Ie.p;Ie.p=s!==0&&8>s?s:8;var a=he.T,o={};o.types=a!==null?a.types:null,he.T=o,Gy(e,!1,t,n);try{var l=r(),u=he.S;if(u!==null&&u(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=RU(l,i);vf(e,t,c,cr(e))}else vf(e,t,i,cr(e))}catch(d){vf(e,t,{then:function(){},status:"rejected",reason:d},cr())}finally{Ie.p=s,a!==null&&o.types!==null&&(a.types=o.types),he.T=a}}function NU(){}function Rv(e,t,n,i){if(e.tag!==5)throw Error(vt(476));var r=BE(e).queue;IE(e,r,t,Jo,n===null?NU:function(){return FE(e),n(i)})}function BE(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Jo,baseState:Jo,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:Jo},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function FE(e){var t=BE(e);t.next===null&&(t=e.alternate.memoizedState),vf(e,t.next.queue,{},cr())}function Vy(){return Jn(zu)}function zE(){return xn().memoizedState}function HE(){return xn().memoizedState}function PU(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=cr();e=Za(n);var i=Ja(t,e,n);i!==null&&(ki(i,t,n),mf(i,t,n)),t={cache:Ey()},e.payload=t;return}t=t.return}}function IU(e,t,n){var i=cr();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},em(e)?GE(t,n):(n=My(e,t,n,i),n!==null&&(ki(n,e,i),kE(n,t,i)))}function VE(e,t,n){var i=cr();vf(e,t,n,i)}function vf(e,t,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(em(e))GE(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,fr(o,a))return Jp(e,t,r,0),Ze===null&&Zp(),!1}catch{}if(n=My(e,t,r,i),n!==null)return ki(n,e,i),kE(n,t,i),!0}return!1}function Gy(e,t,n,i){if(i={lane:2,revertLane:$y(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},em(e)){if(t)throw Error(vt(479))}else t=My(e,n,i,2),t!==null&&ki(t,e,2)}function em(e){var t=e.alternate;return e===me||t!==null&&t===me}function GE(e,t){Tu=wp=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kE(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,wT(e,n)}}var Cp={readContext:Jn,use:$p,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useLayoutEffect:dn,useInsertionEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useSyncExternalStore:dn,useId:dn,useHostTransitionStatus:dn,useFormState:dn,useActionState:dn,useOptimistic:dn,useMemoCache:dn,useCacheRefresh:dn,useEffectEvent:dn},XE={readContext:Jn,use:$p,useCallback:function(e,t){return Ti().memoizedState=[e,t===void 0?null:t],e},useContext:Jn,useEffect:mb,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ip(4194308,4,UE.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ip(4194308,4,e,t)},useInsertionEffect:function(e,t){ip(4,2,e,t)},useMemo:function(e,t){var n=Ti();t=t===void 0?null:t;var i=e();if(sl){Ha(!0);try{e()}finally{Ha(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Ti();if(n!==void 0){var r=n(t);if(sl){Ha(!0);try{n(t)}finally{Ha(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=IU.bind(null,me,e),[i.memoizedState,e]},useRef:function(e){var t=Ti();return e={current:e},t.memoizedState=e},useState:function(e){e=Av(e);var t=e.queue,n=VE.bind(null,me,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:zy,useDeferredValue:function(e,t){var n=Ti();return Hy(n,e,t)},useTransition:function(){var e=Av(!1);return e=IE.bind(null,me,e.queue,!0,!1),Ti().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=me,r=Ti();if(Se){if(n===void 0)throw Error(vt(407));n=n()}else{if(n=t(),Ze===null)throw Error(vt(349));(Re&127)!==0||_E(i,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,mb(yE.bind(null,i,s,e),[e]),i.flags|=2048,Ou(9,{destroy:void 0},vE.bind(null,i,s,n,t),null),n},useId:function(){var e=Ti(),t=Ze.identifierPrefix;if(Se){var n=As,i=Es;n=(i&~(1<<32-ur(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Rp++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=CU++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Vy,useFormState:hb,useActionState:hb,useOptimistic:function(e){var t=Ti();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Gy.bind(null,me,!0,n),n.dispatch=t,[e,t]},useMemoCache:Iy,useCacheRefresh:function(){return Ti().memoizedState=PU.bind(null,me)},useEffectEvent:function(e){var t=Ti(),n={impl:e};return t.memoizedState=n,function(){if((Pe&2)!==0)throw Error(vt(440));return n.impl.apply(void 0,arguments)}}},WE={readContext:Jn,use:$p,useCallback:LE,useContext:Jn,useEffect:Fy,useImperativeHandle:OE,useInsertionEffect:CE,useLayoutEffect:DE,useMemo:NE,useReducer:np,useRef:wE,useState:function(){return np(ra)},useDebugValue:zy,useDeferredValue:function(e,t){var n=xn();return PE(n,Ye.memoizedState,e,t)},useTransition:function(){var e=np(ra)[0],t=xn().memoizedState;return[typeof e=="boolean"?e:qf(e),t]},useSyncExternalStore:gE,useId:zE,useHostTransitionStatus:Vy,useFormState:db,useActionState:db,useOptimistic:function(e,t){var n=xn();return ME(n,Ye,e,t)},useMemoCache:Iy,useCacheRefresh:HE,useEffectEvent:RE},BU={readContext:Jn,use:$p,useCallback:LE,useContext:Jn,useEffect:Fy,useImperativeHandle:OE,useInsertionEffect:CE,useLayoutEffect:DE,useMemo:NE,useReducer:F_,useRef:wE,useState:function(){return F_(ra)},useDebugValue:zy,useDeferredValue:function(e,t){var n=xn();return Ye===null?Hy(n,e,t):PE(n,Ye.memoizedState,e,t)},useTransition:function(){var e=F_(ra)[0],t=xn().memoizedState;return[typeof e=="boolean"?e:qf(e),t]},useSyncExternalStore:gE,useId:zE,useHostTransitionStatus:Vy,useFormState:pb,useActionState:pb,useOptimistic:function(e,t){var n=xn();return Ye!==null?ME(n,Ye,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Iy,useCacheRefresh:HE,useEffectEvent:RE};function z_(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cv={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=cr(),r=Za(i);r.payload=t,n!=null&&(r.callback=n),t=Ja(e,r,i),t!==null&&(ki(t,e,i),mf(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=cr(),r=Za(i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Ja(e,r,i),t!==null&&(ki(t,e,i),mf(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=cr(),i=Za(n);i.tag=2,t!=null&&(i.callback=t),t=Ja(e,i,n),t!==null&&(ki(t,e,n),mf(t,e,n))}};function gb(e,t,n,i,r,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,a):t.prototype&&t.prototype.isPureReactComponent?!wf(n,i)||!wf(r,s):!0}function _b(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Cv.enqueueReplaceState(t,t.state,null)}function al(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Je({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function YE(e){yp(e)}function qE(e){console.error(e)}function ZE(e){yp(e)}function Dp(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function vb(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Dv(e,t,n){return n=Za(n),n.tag=3,n.payload={element:null},n.callback=function(){Dp(e,t)},n}function JE(e){return e=Za(e),e.tag=3,e}function KE(e,t,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var s=i.value;e.payload=function(){return r(s)},e.callback=function(){vb(t,n,i)}}var a=n.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(e.callback=function(){vb(t,n,i),typeof r!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function FU(e,t,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&el(t,n,r,!0),n=$n.current,n!==null){switch(n.tag){case 31:case 13:case 19:return ai===null?Fp():n.alternate===null&&pn===0&&(pn=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===Tp?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Y_(e,i,r)),!1;case 22:return n.flags|=65536,i===Tp?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Y_(e,i,r)),!1}throw Error(vt(435,n.tag))}return Y_(e,i,r),Fp(),!1}if(Se)return t=$n.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==vv&&(e=Error(vt(422),{cause:i}),Cf(Ir(e,n)))):(i!==vv&&(t=Error(vt(423),{cause:i}),Cf(Ir(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=Ir(i,n),r=Dv(e.stateNode,i,r),B_(e,r),pn!==4&&(pn=2)),!1;var s=Error(vt(520),{cause:i});if(s=Ir(s,n),Mf===null?Mf=[s]:Mf.push(s),pn!==4&&(pn=2),t===null)return!0;i=Ir(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=Dv(n.stateNode,i,e),B_(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ja===null||!ja.has(s))))return n.flags|=65536,r&=-r,n.lanes|=r,r=JE(r),KE(r,e,n,i),B_(n,r),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var ky=Error(vt(461)),An=!1;function Un(e,t,n,i){t.child=e===null?cE(t,null,n,i):rl(t,e.child,n,i)}function yb(e,t,n,i,r){n=n.render;var s=t.ref;if("ref"in i){var a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}else a=i;return nl(t),i=Oy(e,t,n,a,s,r),o=Ly(),e!==null&&!An?(Ny(e,t,r),sa(e,t,r)):(Se&&o&&Kp(t),t.flags|=1,Un(e,t,i,r),t.child)}function xb(e,t,n,i,r){if(e===null){var s=n.type;return typeof s=="function"&&!by(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,QE(e,t,s,i,r)):(e=$d(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Wy(e,r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:wf,n(a,i)&&e.ref===t.ref)return sa(e,t,r)}return t.flags|=1,e=$s(s,i),e.ref=t.ref,e.return=t,t.child=e}function QE(e,t,n,i,r){if(e!==null){var s=e.memoizedProps;if(wf(s,i)&&e.ref===t.ref)if(An=!1,t.pendingProps=i=s,Wy(e,r))(e.flags&131072)!==0&&(An=!0);else return t.lanes=e.lanes,sa(e,t,r)}return Uv(e,t,n,i,r)}function jE(e,t,n,i){var r=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~s}else i=0,t.child=null;return Sb(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ep(t,s!==null?s.cachePool:null),s!==null?ub(t,s):Tv(),dE(t);else return i=t.lanes=536870912,Sb(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(ep(t,s.cachePool),ub(t,s),Qa(),t.memoizedState=null):(e!==null&&ep(t,null),Tv(),Qa());return Un(e,t,r,n),t.child}function yf(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Sb(e,t,n,i,r){var s=Ay();return s=s===null?null:{parent:En._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&ep(t,null),Tv(),dE(t),e!==null&&el(e,t,i,!0),t.childLanes=r,null}function rp(e,t){return t=nm({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Mb(e,t,n){return rl(t,e.child,null,n),e=rp(t,t.pendingProps),e.flags|=2,rr(t),t.memoizedState=null,e}function zU(e,t,n){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Se){if(i.mode==="hidden")return e=rp(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},yf(null,e);if(Ev(t),(e=tn)?(e=jA(e,Br),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:no!==null?{id:Es,overflow:As}:null,retryLane:536870912,hydrationErrors:null},n=iE(e),n.return=t,t.child=n,Vn=t,tn=null)):e=null,e===null)throw io(t);return t.lanes=536870912,null}return rp(t,i)}var s=e.memoizedState;if(s!==null){var a=s.dehydrated;if(Ev(t),r)if(t.flags&256)t.flags&=-257,t=Mb(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(vt(558));else if(An||el(e,t,n,!1),r=(n&e.childLanes)!==0,An||r){if(ro.current===null){if(i=Ze,i!==null&&(a=RT(i,n),a!==0&&a!==s.retryLane))throw s.retryLane=a,fl(e,a),ki(i,e,a),ky;Fp()}t=Mb(e,t,n)}else e=s.treeContext,tn=Fr(a.nextSibling),Vn=t,Se=!0,qa=null,Br=!1,e!==null&&sE(t,e),t=rp(t,i),t.flags|=134221824;return t}return e=$s(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ru(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(vt(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Uv(e,t,n,i,r){return nl(t),n=Oy(e,t,n,i,void 0,r),i=Ly(),e!==null&&!An?(Ny(e,t,r),sa(e,t,r)):(Se&&i&&Kp(t),t.flags|=1,Un(e,t,n,r),t.child)}function bb(e,t,n,i,r,s){return nl(t),t.updateQueue=null,n=mE(t,i,n,r),pE(e),i=Ly(),e!==null&&!An?(Ny(e,t,s),sa(e,t,s)):(Se&&i&&Kp(t),t.flags|=1,Un(e,t,n,s),t.child)}function Tb(e,t,n,i,r){if(nl(t),t.stateNode===null){var s=mu,a=n.contextType;typeof a=="object"&&a!==null&&(s=Jn(a)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Cv,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},Ry(t),a=n.contextType,s.context=typeof a=="object"&&a!==null?Jn(a):mu,s.state=t.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(z_(t,n,a,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(a=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),a!==s.state&&Cv.enqueueReplaceState(s,s.state,null),_f(t,i,s,r),gf(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=al(n,o);s.props=l;var u=s.context,c=n.contextType;a=mu,typeof c=="object"&&c!==null&&(a=Jn(c));var d=n.getDerivedStateFromProps;c=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||u!==a)&&_b(t,s,i,a),Fa=!1;var f=t.memoizedState;s.state=f,_f(t,i,s,r),gf(),u=t.memoizedState,o||f!==u||Fa?(typeof d=="function"&&(z_(t,n,d,i),u=t.memoizedState),(l=Fa||gb(t,n,l,i,f,u,a))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=u),s.props=i,s.state=u,s.context=a,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Mv(e,t),a=t.memoizedProps,c=al(n,a),s.props=c,d=t.pendingProps,f=s.context,u=n.contextType,l=mu,typeof u=="object"&&u!==null&&(l=Jn(u)),o=n.getDerivedStateFromProps,(u=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&_b(t,s,i,l),Fa=!1,f=t.memoizedState,s.state=f,_f(t,i,s,r),gf();var h=t.memoizedState;a!==d||f!==h||Fa||e!==null&&e.dependencies!==null&&bp(e.dependencies)?(typeof o=="function"&&(z_(t,n,o,i),h=t.memoizedState),(c=Fa||gb(t,n,c,i,f,h,l)||e!==null&&e.dependencies!==null&&bp(e.dependencies))?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,h,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,h,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=h),s.props=i,s.state=h,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,ru(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=rl(t,e.child,null,r),t.child=rl(t,null,n,r)):Un(e,t,n,r),t.memoizedState=s.state,e=t.child):e=sa(e,t,r),e}function Eb(e,t,n,i){return tl(),t.flags|=256,Un(e,t,n,i),t.child}var Ov={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lv(e){return{baseLanes:e,cachePool:oE()}}function Nv(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ar),e}function $E(e,t,n){var i=t.pendingProps,r=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(Qn.current&2)!==0),a&&(r=!0,t.flags&=-129),a=(t.flags&32)!==0,t.flags&=-33,e===null){if(Se){if(r?Ka(t):Qa(),(e=tn)?(e=jA(e,Br),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:no!==null?{id:Es,overflow:As}:null,retryLane:536870912,hydrationErrors:null},n=iE(e),n.return=t,t.child=n,Vn=t,tn=null)):e=null,e===null)throw io(t);return ix(e)?t.lanes=32:t.lanes=536870912,null}return s=i.children,i=i.fallback,r?(Qa(),r=t.mode,s=nm({mode:"hidden",children:s},r),i=Ko(i,r,n,null),s.return=t,i.return=t,s.sibling=i,t.child=s,i=t.child,i.memoizedState=Lv(n),i.childLanes=Nv(e,a,n),t.memoizedState=Ov,yf(null,i)):(Ka(t),Xy(t,s))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return HU(e,t,s,a,i,l,o,n)}return r?(Qa(),r=i.fallback,s=t.mode,o=e.child,l=o.sibling,i=$s(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?r=$s(l,r):(r=Ko(r,s,n,null),r.flags|=2),r.return=t,i.return=t,i.sibling=r,t.child=i,yf(null,i),i=t.child,r=e.child.memoizedState,r===null?r=Lv(n):(s=r.cachePool,s!==null?(o=En._currentValue,s=s.parent!==o?{parent:o,pool:o}:s):s=oE(),r={baseLanes:r.baseLanes|n,cachePool:s}),i.memoizedState=r,i.childLanes=Nv(e,a,n),t.memoizedState=Ov,yf(e.child,i)):(Ka(t),n=e.child,e=n.sibling,n=$s(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=n,t.memoizedState=null,n)}function Xy(e,t){return t=nm({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function nm(e,t){return e=Gi(22,e,null,t),e.lanes=0,e}function zd(e,t,n){return rl(t,e.child,null,n),e=Xy(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function HU(e,t,n,i,r,s,a,o){if(n)return t.flags&256?(Ka(t),t.flags&=-257,zd(e,t,o)):t.memoizedState!==null?(Qa(),t.child=e.child,t.flags|=128,null):(Qa(),s=r.fallback,a=t.mode,r=nm({mode:"visible",children:r.children},a),s=Ko(s,a,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,rl(t,e.child,null,o),r=t.child,r.memoizedState=Lv(o),r.childLanes=Nv(e,i,o),t.memoizedState=Ov,yf(null,r));if(Ka(t),ix(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(r=Error(vt(419)),r.stack="",r.digest=i,Cf({value:r,source:null,stack:null})),zd(e,t,o)}if(An||el(e,t,o,!1),i=(o&e.childLanes)!==0,An||i){if(ro.current!==null)return zd(e,t,o);if(i=Ze,i!==null&&(r=RT(i,o),r!==0&&r!==a.retryLane))throw a.retryLane=r,fl(e,r),ki(i,e,r),ky;return sy(s)||Fp(),zd(e,t,o)}return sy(s)?(t.flags|=192,t.child=e.child,null):(e=a.treeContext,tn=Fr(s.nextSibling),Vn=t,Se=!0,qa=null,Br=!1,e!==null&&sE(t,e),t=Xy(t,r.children),t.flags|=134221824,t)}function Ab(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),tp(e.return,t,n)}function wb(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Ap(n)===null&&(t=e),e=e.sibling}return t}function Hd(e,t,n,i,r,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r,a.treeForkCount=s)}function H_(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Pv(e,t,n){var i=t.pendingProps,r=i.revealOrder,s=i.tail;i=i.children;var a=Qn.current;if(t.flags&128)return Uf(t,a),null;var o=(a&2)!==0;if(o?(a=a&1|2,t.flags|=128):a&=1,Uf(t,a),r==="backwards"&&e!==null?(H_(e),Un(e,t,i,n),H_(e)):Un(e,t,i,n),i=Se?Rf:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ab(e,n,t);else if(e.tag===19)Ab(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"backwards":n=wb(t.child),n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null,H_(t)),Hd(t,!0,r,null,s,i);break;case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Ap(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Hd(t,!0,n,null,s,i);break;case"together":Hd(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=wb(t.child),n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Hd(t,!1,r,n,s,i)}return t.child}function Rb(e,t,n){var i=t.pendingProps;return Ga(t,t.type,i.value),Un(e,t,i.children,n),t.child}function sa(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ao|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(el(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(vt(153));if(t.child!==null){for(e=t.child,n=$s(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$s(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wy(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&bp(e)))}function VU(e,t,n){switch(t.tag){case 3:mp(t,t.stateNode.containerInfo),Ga(t,En,e.memoizedState.cache),tl();break;case 27:case 5:lv(t);break;case 4:mp(t,t.stateNode.containerInfo);break;case 10:Ga(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ev(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return Ka(t),t.flags|=128,null;i=el(e,t,n,!1);var r=t.child.childLanes;return i||(n&r)!==0?$E(e,t,n):(Ka(t),e=sa(e,t,n),e!==null?e.sibling:null)}Ka(t);break;case 19:if(t.flags&128)return Pv(e,t,n);if(r=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(el(e,t,n,!1),i=(n&t.childLanes)!==0),r){if(i)return Pv(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Uf(t,Qn.current),i)break;return null;case 22:return t.lanes=0,jE(e,t,n,t.pendingProps);case 24:Ga(t,En,e.memoizedState.cache)}return sa(e,t,n)}function tA(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)An=!0;else{if(!Wy(e,n)&&(t.flags&128)===0)return An=!1,VU(e,t,n);An=(e.flags&131072)!==0}else An=!1,Se&&(t.flags&1048576)!==0&&rE(t,Rf,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Wo(t.elementType),t.type=e,typeof e=="function")by(e)?(i=al(e,i),t.tag=1,t=Tb(null,t,e,i,n)):(t.tag=0,t=Uv(null,t,e,i,n));else{if(e!=null){var r=e.$$typeof;if(r===cy){t.tag=11,t=yb(null,t,e,i,n);break t}else if(r===fy){t.tag=14,t=xb(null,t,e,i,n);break t}else if(r===bs){t.tag=10,t.type=e,t=Rb(null,t,n);break t}}throw t=av(e)||e,Error(vt(306,t,""))}}return t;case 0:return Uv(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,r=al(i,t.pendingProps),Tb(e,t,i,r,n);case 3:t:{if(mp(t,t.stateNode.containerInfo),e===null)throw Error(vt(387));i=t.pendingProps;var s=t.memoizedState;r=s.element,Mv(e,t),_f(t,i,null,n);var a=t.memoizedState;if(i=a.cache,Ga(t,En,i),i!==s.cache&&xv(t,[En],n,!0),gf(),i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Eb(e,t,i,n);break t}else if(i!==r){r=Ir(Error(vt(424)),t),Cf(r),t=Eb(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,tn=Fr(e.firstChild),Vn=t,Se=!0,qa=null,Br=!0,n=cE(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(tl(),i===r){t=sa(e,t,n);break t}Un(e,t,i,n)}t=t.child}return t;case 26:return ru(e,t),e===null?(n=eT(t.type,null,t.pendingProps,null))?t.memoizedState=n:Se||(t.stateNode=kA(t.type,t.pendingProps,Ya.current,t)):t.memoizedState=eT(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return lv(t),e===null&&Se&&(i=t.stateNode=$A(t.type,t.pendingProps,Ya.current),Vn=t,Br=!0,r=tn,lo(t.type)?(ay=r,tn=Fr(i.firstChild)):tn=r),Un(e,t,t.pendingProps.children,n),ru(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Se&&((r=i=tn)&&(i=LO(i,t.type,t.pendingProps,Br),i!==null?(t.stateNode=i,Vn=t,tn=Fr(i.firstChild),Br=!1,r=!0):r=!1),r||io(t)),lv(t),r=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,i=s.children,ny(r,s)?i=null:a!==null&&ny(r,a)&&(t.flags|=32),t.memoizedState!==null&&(r=Oy(e,t,DU,null,null,n),zu._currentValue=r),ru(e,t),Un(e,t,i,n),t.child;case 6:return e===null&&Se&&((e=n=tn)&&(n=NO(n,t.pendingProps,Br),n!==null?(t.stateNode=n,Vn=t,tn=null,e=!0):e=!1),e||io(t)),null;case 13:return $E(e,t,n);case 4:return mp(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=rl(t,null,i,n):Un(e,t,i,n),t.child;case 11:return yb(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,ru(e,t),Un(e,t,i,n),t.child;case 8:return Un(e,t,t.pendingProps.children,n),t.child;case 12:return Un(e,t,t.pendingProps.children,n),t.child;case 10:return Rb(e,t,n);case 9:return r=t.type._context,i=t.pendingProps.children,nl(t),r=Jn(r),i=i(r),t.flags|=1,Un(e,t,i,n),t.child;case 14:return xb(e,t,t.type,t.pendingProps,n);case 15:return QE(e,t,t.type,t.pendingProps,n);case 19:return Pv(e,t,n);case 31:return zU(e,t,n);case 22:return jE(e,t,n,t.pendingProps);case 24:return nl(t),i=Jn(En),e===null?(r=Ay(),r===null&&(r=Ze,s=Ey(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=n),r=s),t.memoizedState={parent:i,cache:r},Ry(t),Ga(t,En,r)):((e.lanes&n)!==0&&(Mv(e,t),_f(t,null,null,n),gf()),r=e.memoizedState,s=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Ga(t,En,i)):(i=s.cache,Ga(t,En,i),i!==r.cache&&xv(t,[En],n,!0))),Un(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:Se&&Kp(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:ru(e,t),Un(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(vt(156,t.tag))}function Ks(e){e.flags|=4}function V_(e,t,n,i,r){var s;if((s=(e.mode&32)!==0)&&(s=n===null?rT(t,i):rT(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),s){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(CA())e.flags|=8192;else throw jo=Tp,wy}else e.flags&=-16777217}function Cb(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!iw(t))if(CA())e.flags|=8192;else throw jo=Tp,wy}function Vd(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ET():536870912,e.lanes|=t,Lu|=t)}function ef(e,t){if(!Se)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&1206910976,i|=r.flags&1206910976,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function GU(e,t,n){var i=t.pendingProps;switch(Ty(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return $e(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ta(En),Cu(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(nu(t)?Ks(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,I_())),$e(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(Ks(t),s!==null?($e(t),Cb(t,s)):($e(t),V_(t,r,null,i,n))):s?s!==e.memoizedState?(Ks(t),$e(t),Cb(t,s)):($e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ks(t),$e(t),V_(t,r,e,i,n)),null;case 27:if(gp(t),n=Ya.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ks(t);else{if(!i){if(t.stateNode===null)throw Error(vt(166));return $e(t),t.subtreeFlags&=-33554433,null}e=ws.current,nu(t)?nb(t,e):(e=$A(r,i,n),t.stateNode=e,Ks(t))}return $e(t),t.subtreeFlags&=-33554433,null;case 5:if(gp(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ks(t);else{if(!i){if(t.stateNode===null)throw Error(vt(166));return $e(t),t.subtreeFlags&=-33554433,null}if(s=ws.current,nu(t))nb(t,s);else{var a=Pf(Ya.current);switch(s){case 1:s=a.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=a.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=a.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=a.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=a.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?a.createElement(r,{is:i.is}):a.createElement(r)}}s[Zn]=t,s[Wi]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)s.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=s;t:switch(jn(s,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ks(t)}}return $e(t),t.subtreeFlags&=-33554433,V_(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ks(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(vt(166));if(e=Ya.current,nu(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,r=Vn,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[Zn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||VA(e.nodeValue,n)),e||io(t,!0)}else e=Pf(e).createTextNode(i),e[Zn]=t,t.stateNode=e}return $e(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=nu(t),n!==null){if(e===null){if(!i)throw Error(vt(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(vt(557));e[Zn]=t}else tl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),e=!1}else n=I_(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(rr(t),t):(rr(t),null);if((t.flags&128)!==0)throw Error(vt(558))}return $e(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=nu(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(vt(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(vt(317));r[Zn]=t}else tl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),r=!1}else r=I_(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(rr(t),t):(rr(t),null)}return rr(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==r&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Vd(t,t.updateQueue),$e(t),null);case 4:return Cu(),e===null&&tx(t.stateNode.containerInfo),t.flags|=67108864,$e(t),null;case 10:return ta(t.type),$e(t),null;case 19:if(Dy(t),i=t.memoizedState,i===null)return $e(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)ef(i,!1);else{if(pn!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Ap(e),s!==null){for(t.flags|=128,ef(i,!1),e=s.updateQueue,t.updateQueue=e,Vd(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)nE(n,e),n=n.sibling;return Uf(t,Qn.current&1|2),Se&&Qs(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&or()>Ip&&(t.flags|=128,r=!0,ef(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ap(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Vd(t,e),ef(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!s.alternate&&!Se)return $e(t),null}else 2*or()-i.renderingStartTime>Ip&&n!==536870912&&(t.flags|=128,r=!0,ef(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=or(),e.sibling=null,s=Qn.current,s=r?s&1|2:s&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Se?Uf(t,s):(n=s,en($n,t),en(Qn,n),ai===null&&(ai=t)),Se&&Qs(t,i.treeForkCount),e}return $e(t),null;case 22:case 23:return rr(t),Cy(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),n=t.updateQueue,n!==null&&Vd(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Kn(Qo),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(En),$e(t),null;case 25:return null;case 30:return t.flags|=33554432,$e(t),null}throw Error(vt(156,t.tag))}function kU(e,t){switch(Ty(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(En),Cu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return gp(t),null;case 31:if(t.memoizedState!==null){if(rr(t),t.alternate===null)throw Error(vt(340));tl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(rr(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(vt(340));tl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Dy(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Cu(),null;case 10:return ta(t.type),null;case 22:case 23:return rr(t),Cy(),e!==null&&Kn(Qo),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(En),null;case 25:return null;default:return null}}function eA(e,t){switch(Ty(t),t.tag){case 3:ta(En),Cu();break;case 26:case 27:case 5:gp(t);break;case 4:Cu();break;case 31:t.memoizedState!==null&&rr(t);break;case 13:rr(t);break;case 19:Dy(t);break;case 10:ta(t.type);break;case 22:case 23:rr(t),Cy(),e!==null&&Kn(Qo);break;case 24:ta(En)}}function Zf(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var s=n.create,a=n.inst;i=s(),a.destroy=i}n=n.next}while(n!==r)}}catch(o){ke(t,t.return,o)}}function so(e,t,n){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var s=r.next;i=s;do{if((i.tag&e)===e){var a=i.inst,o=a.destroy;if(o!==void 0){a.destroy=void 0,r=t;var l=n,u=o;try{u()}catch(c){ke(r,l,c)}}}i=i.next}while(i!==s)}}catch(c){ke(t,t.return,c)}}function nA(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{hE(t,n)}catch(i){ke(e,e.return,i)}}}function iA(e,t,n){n.props=al(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ke(e,t,i)}}function Ss(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var r=e.stateNode,s=na(e.memoizedProps,r);(r.ref===null||r.ref.name!==s)&&(r.ref=qA(s)),i=r.ref;break;case 7:if(e.stateNode===null){var a=new hr(e);Xi(e.child,!1,UO,a,void 0,void 0),e.stateNode=a}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){ke(e,t,o)}}function qn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){ke(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){ke(e,t,r)}else n.current=null}function Up(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)QA(e.stateNode,t[n])}function Db(e){for(var t=e.return;t!==null&&(qy(t)&&QA(e.stateNode,t.stateNode),!Yy(t));)t=t.return}function xf(e){for(var t=e.return;t!==null&&(qy(t)&&OO(e.stateNode,t.stateNode),!Yy(t));)t=t.return}function Yy(e){return e.tag===5||e.tag===3||e.tag===27}function qy(e){return e&&e.tag===7&&e.stateNode!==null}function Iv(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){ke(e,e.return,r)}}function G_(e,t,n){try{var i=e.stateNode;dO(i,e.type,n,t),i[Wi]=t}catch(r){ke(e,e.return,r)}}function rA(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&lo(e.type)||e.tag===4}function k_(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||rA(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&lo(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bv(e,t,n,i){var r=e.tag;if(r===5||r===6)r=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(r,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(r),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ts)),Up(e,i),Ne=!0;else if(r!==4&&(r===27&&(Up(e,i),i=null,lo(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Bv(e,t,n,i),e=e.sibling;e!==null;)Bv(e,t,n,i),e=e.sibling}function Op(e,t,n,i){var r=e.tag;if(r===5||r===6)r=e.stateNode,t?n.insertBefore(r,t):n.appendChild(r),Up(e,i),Ne=!0;else if(r!==4&&(r===27&&(Up(e,i),i=null,lo(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Op(e,t,n,i),e=e.sibling;e!==null;)Op(e,t,n,i),e=e.sibling}function sA(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);jn(t,i,n),t[Zn]=e,t[Wi]=n}catch(s){ke(e,e.return,s)}}var Lp=!1,sr=null;function Ub(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Lp=!0)}var Ms=null;function Ob(){var e=Ms;return Ms=null,e}var Vi=0;function Wu(e,t,n,i,r){return Vi=0,aA(e.child,t,n,i,r)}function aA(e,t,n,i,r){for(var s=!1;e!==null;){if(e.tag===5){var a=e.stateNode;if(i!==null){var o=iy(a);i.push(o),o.view&&(s=!0)}else s||iy(a).view&&(s=!0);Lp=!0,XA(a,Vi===0?t:t+"_"+Vi,n),Vi++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&r||aA(e.child,t,n,i,r)&&(s=!0));e=e.sibling}return s}function Cs(e,t){for(;e!==null;)e.tag===5?WA(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Cs(e.child,t)),e=e.sibling}function sp(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(sp(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(vt(544));var n=t.name;t=la(t.default,t.share),t!=="none"&&(Wu(e,n,t,null,!1)||Cs(e.child,!1))}e=e.sibling}}function Fv(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,r=na(i,n),s=la(i.default,n.paired?i.share:i.enter);s!=="none"?Wu(e,r,s,null,!1)?(sp(e),n.paired||t||Nu(e,i.onEnter)):Cs(e.child,!1):sp(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Fv(e,t),e=e.sibling;else sp(e)}function zv(e){if(sr!==null&&sr.size!==0){var t=sr;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var r=t.get(i);if(r!==void 0){var s=la(n.default,n.share);if(s!=="none"&&(Wu(e,i,s,null,!1)?(s=e.stateNode,r.paired=s,s.paired=r,Nu(e,n.onShare)):Cs(e.child,!1)),t.delete(i),t.size===0)break}}}zv(e)}e=e.sibling}}}function Hv(e){if(e.tag===30){var t=e.memoizedProps,n=na(t,e.stateNode),i=sr!==null?sr.get(n):void 0,r=la(t.default,i!==void 0?t.share:t.exit);r!=="none"&&(Wu(e,n,r,null,!1)?i!==void 0?(r=e.stateNode,i.paired=r,r.paired=i,sr.delete(n),Nu(e,t.onShare)):Nu(e,t.onExit):Cs(e.child,!1)),sr!==null&&zv(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Hv(e),e=e.sibling;else sr!==null&&zv(e)}function oA(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=na(t,e.stateNode);t=la(t.default,t.update),e.flags&=-5,t!=="none"&&Wu(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&oA(e);e=e.sibling}}function Vv(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Cs(e.child,!1))}Vv(e)}e=e.sibling}}function ap(e){if(e.tag===30)e.stateNode.paired=null,Cs(e.child,!1),Vv(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ap(e),e=e.sibling;else Vv(e)}function lA(e){for(e=e.child;e!==null;)e.tag===30?Cs(e.child,!1):(e.subtreeFlags&33554432)!==0&&lA(e),e=e.sibling}function Zy(e,t,n,i,r,s,a){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(s!==null&&Vi<s.length){var u=s[Vi],c=iy(l);(u.view||c.view)&&(o=!0);var d;if(d=(e.flags&4)===0)if(c.clip)d=!0;else{d=u.rect;var f=c.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}d&&(e.flags|=4),c.abs?c=!u.abs:(u=u.rect,c=c.rect,c=u.height!==c.height||u.width!==c.width),c&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&XA(l,Vi===0?n:n+"_"+Vi,r),o&&(e.flags&4)!==0||(Ms===null&&(Ms=[]),Ms.push(l,Vi===0?i:i+"_"+Vi,t.memoizedProps)),Vi++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&a?e.flags|=t.flags&32:Zy(e,t.child,n,i,r,s,a)&&(o=!0));t=t.sibling}return o}function uA(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,r=na(n,i),s=la(n.default,n.update);if(t){i=i.clones;var a=i===null?null:i.map(yO)}else a=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Vi=0,r=Zy(i,o,r,r,s,a,!1),(e.flags&4)!==0&&r&&(t||Nu(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&uA(e,t);e=e.sibling}}var Fn=!1,Fe=!1,vs=!1,X_=!1,Lb=typeof WeakSet=="function"?WeakSet:Set,zn=null,ys=!1,cf=!1,Np=!1,Gv=!1;function XU(e,t,n){if(e=e.containerInfo,ty=Hu,e=ZT(e),xy(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var r=i.getSelection&&i.getSelection();if(r&&r.rangeCount!==0){i=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{i.nodeType,a.nodeType}catch{i=null;break t}var o=0,l=-1,u=-1,c=0,d=0,f=e,h=null;e:for(;;){for(var g;f!==i||s!==0&&f.nodeType!==3||(l=o+s),f!==a||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break e;if(h===i&&++c===s&&(l=o),h===a&&++d===r&&(u=o),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}i=l===-1||u===-1?null:{start:l,end:u}}else i=null}i=i||{start:0,end:0}}else i=null;for(ey={focusedElem:e,selectionRange:i},Hu=!1,n=(n&335544064)===n,zn=t,t=n?9270:1024;zn!==null;){if(e=zn,n&&(i=e.deletions,i!==null))for(s=0;s<i.length;s++)n&&Hv(i[s]);if(e.alternate===null&&(e.flags&2)!==0)n&&Ub(e),Gd(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Hv(i),Gd(n);continue}else if(i!==null&&i.memoizedState!==null){n&&Ub(e),Gd(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,zn=i):(n&&oA(e),Gd(n))}}sr=null}function Gd(e){for(;zn!==null;){var t=zn,n=e,i=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((r&1024)!==0&&i!==null){n=void 0,r=i.memoizedProps,i=i.memoizedState;var s=t.stateNode;try{var a=al(t.type,r);n=s.getSnapshotBeforeUpdate(a,i),s.__reactInternalSnapshotBeforeUpdate=n}catch(o){ke(t,t.return,o)}}break;case 3:if((r&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)ry(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":ry(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=na(i.memoizedProps,i.stateNode),r=t.memoizedProps,r=la(r.default,r.update),r!=="none"&&Wu(i,n,r,i.memoizedState=[],!0));break;default:if((r&1024)!==0)throw Error(vt(163))}if(i=t.sibling,i!==null){i.return=t.return,zn=i;break}zn=t.return}}function cA(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:xs(e,n),i&4&&Zf(5,n);break;case 1:if(xs(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(a){ke(n,n.return,a)}else{var r=al(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(a){ke(n,n.return,a)}}i&64&&nA(n),i&512&&Ss(n,n.return);break;case 3:if(xs(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{hE(e,t)}catch(a){ke(n,n.return,a)}}break;case 27:t===null&&i&4&&sA(n);case 26:case 5:xs(e,n),t===null&&i&4&&Iv(n),i&512&&Ss(n,n.return);break;case 12:xs(e,n);break;case 31:xs(e,n),i&4&&pA(e,n);break;case 13:xs(e,n),i&4&&mA(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=nO.bind(null,n),PO(e,n))));break;case 22:if(i=n.memoizedState!==null||Fn,!i){var s=t!==null&&t.memoizedState!==null||Fe;t=Fn,r=Fe,Fn=i,(Fe=s)&&!r?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),$r(e,n,i)):xs(e,n),Fn=t,Fe=r}break;case 30:xs(e,n),i&512&&Ss(n,n.return);break;case 7:i&512&&Ss(n,n.return);default:xs(e,n)}}function kv(e,t){for(e=e.child;e!==null;)fA(e,t),e=e.sibling}function fA(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var r=e.stateNode,s=e.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null;r.style.display=a==null||typeof a=="boolean"?"":(""+a).trim()}}catch(l){ke(e,e.return,l)}Xv(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Ne=!0}catch(l){ke(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?Jb(o,!0):Jb(e.stateNode,!1)}catch(l){ke(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&kv(e,t);break;default:kv(e,t)}}function Xv(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:fA(n,i);break t;case 22:n.memoizedState===null&&Xv(n,i);break t;default:Xv(n,i)}}e=e.sibling}}function hA(e){var t=e.alternate;t!==null&&(e.alternate=null,hA(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Xp(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sn=null,zi=!1;function jr(e,t,n){for(n=n.child;n!==null;)dA(e,t,n),n=n.sibling}function dA(e,t,n){if(lr&&typeof lr.onCommitFiberUnmount=="function")try{lr.onCommitFiberUnmount(Vf,n)}catch{}switch(n.tag){case 26:Fe||qn(n,t),jr(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Fe&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Fe||qn(n,t),xf(n);var i=sn,r=zi;lo(n.type)&&(sn=n.stateNode,zi=!1),jr(e,t,n),tw(n.stateNode,n.type,n.memoizedProps),sn=i,zi=r;break;case 5:Fe||qn(n,t),xf(n);case 6:if(n.tag===6&&xf(n),i=sn,r=zi,sn=null,jr(e,t,n),sn=i,zi=r,sn!==null)if(zi)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(n.stateNode),Ne=!0}catch(s){ke(n,t,s)}else try{sn.removeChild(n.stateNode),Ne=!0}catch(s){ke(n,t,s)}break;case 18:sn!==null&&(zi?(e=sn,Zb(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Vu(e)):Zb(sn,n.stateNode));break;case 4:i=sn,r=zi,sn=n.stateNode.containerInfo,zi=!0,jr(e,t,n),sn=i,zi=r;break;case 0:case 11:case 14:case 15:so(2,n,t),Fe||so(4,n,t),jr(e,t,n);break;case 1:Fe||(qn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&iA(n,t,i)),jr(e,t,n);break;case 21:jr(e,t,n);break;case 22:Fe=(i=Fe)||n.memoizedState!==null,jr(e,t,n),Fe=i;break;case 30:qn(n,t),jr(e,t,n);break;case 7:Fe||qn(n,t),jr(e,t,n);break;default:jr(e,t,n)}}function pA(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Vu(e)}catch(n){ke(t,t.return,n)}}}function mA(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Vu(e)}catch(n){ke(t,t.return,n)}}function WU(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Lb),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Lb),t;default:throw Error(vt(435,e.tag))}}function kd(e,t){var n=WU(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var r=iO.bind(null,e,i);i.then(r,r)}})}function Mi(e,t,n){var i=t.deletions;if(i!==null)for(var r=0;r<i.length;r++){var s=i[r],a=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(lo(l.type)){sn=l.stateNode,zi=!1;break t}break;case 5:sn=l.stateNode,zi=!1;break t;case 3:case 4:sn=l.stateNode.containerInfo,zi=!0;break t}l=l.return}if(sn===null)throw Error(vt(160));dA(a,o,s),sn=null,zi=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)gA(t,e,n),t=t.sibling}var ts=null;function gA(e,t,n){var i=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(r&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var s=0;s<i.length;s++){var a=i[s];a.ref.impl=a.nextImpl}Mi(t,e,n),bi(e),r&4&&(so(3,e,e.return),Zf(3,e),so(5,e,e.return));break;case 1:Mi(t,e,n),bi(e),r&512&&(Fe||i===null||qn(i,i.return)),r&64&&Fn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(s=ts,Mi(t,e,n),bi(e),r&512&&(Fe||i===null||qn(i,i.return)),r&4)if(r=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(Fn)e.stateNode=kA(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,r=s.ownerDocument||s;e:switch(t){case"title":i=r.getElementsByTagName("title")[0],(!i||i[Xf]||i[Zn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=r.createElement(t),r.head.insertBefore(i,r.querySelector("head > title"))),jn(i,t,n),i[Zn]=e,Hn(i),t=i;break t;case"link":if(s=iT("link","href",r).get(t+(n.href||""))){for(a=0;a<s.length;a++)if(i=s[a],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(a,1);break e}}i=r.createElement(t),jn(i,t,n),r.head.appendChild(i);break;case"meta":if(s=iT("meta","content",r).get(t+(n.content||""))){for(a=0;a<s.length;a++)if(i=s[a],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(a,1);break e}}i=r.createElement(t),jn(i,t,n),r.head.appendChild(i);break;default:throw Error(vt(468,t))}i[Zn]=e,Hn(i),t=i}e.stateNode=t}else Fn||oy(s,e.type,e.stateNode);else e.stateNode=nT(s,n,e.memoizedProps);else r!==n?(r===null?(t=i.stateNode,t===null||Fe||t.parentNode.removeChild(t)):r.count--,n===null?Fn||oy(s,e.type,e.stateNode):nT(s,n,e.memoizedProps)):n===null&&e.stateNode!==null&&G_(e,e.memoizedProps,i.memoizedProps);break;case 27:Mi(t,e,n),bi(e),r&512&&(Fe||i===null||qn(i,i.return)),i!==null&&r&4&&G_(e,e.memoizedProps,i.memoizedProps);break;case 5:if(s=vs,vs=!1,Mi(t,e,n),vs=s,bi(e),r&512&&(Fe||i===null||qn(i,i.return)),e.flags&32){t=e.stateNode;try{Uu(t,""),Ne=!0}catch(c){ke(e,e.return,c)}}r&4&&e.stateNode!=null&&(t=e.memoizedProps,G_(e,t,i!==null?i.memoizedProps:t)),r&1024&&(X_=!0);break;case 6:if(Mi(t,e,n),bi(e),r&4){if(e.stateNode===null)throw Error(vt(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Ne=!0}catch(c){ke(e,e.return,c)}}break;case 3:if(Ne=!1,cp=null,s=ts,ts=If(t.containerInfo),Mi(t,e,n),ts=s,bi(e),r&4&&i!==null&&i.memoizedState.isDehydrated)try{Vu(t.containerInfo)}catch(c){ke(e,e.return,c)}X_&&(X_=!1,_A(e)),Ne=!1;break;case 4:r=vs,vs=Fn,i=zM(),s=ts,ts=If(e.stateNode.containerInfo),Mi(t,e,n),bi(e),ts=s,Ne&&cf&&(Np=!0),Ne=i,vs=r;break;case 12:Mi(t,e,n),bi(e);break;case 31:Mi(t,e,n),bi(e),r&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,kd(e,t)));break;case 13:Mi(t,e,n),bi(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(im=or()),r&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,kd(e,t)));break;case 22:s=e.memoizedState!==null,a=i!==null&&i.memoizedState!==null;var o=Fn,l=Fe,u=vs;Fn=o||s,vs=u||s,Fe=l||a,Mi(t,e,n),Fe=l,vs=u,Fn=o,bi(e),r&8192&&(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,!s||i===null||a||Fn||Fe||(t=a||Fe,n=Fn,i=Fe,Fn=s||Fn,Fe=t,Ia(e,2),Fn=n,Fe=i),!s&&vs||kv(e,s)),r&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,kd(e,n))));break;case 19:Mi(t,e,n),bi(e),r&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,kd(e,t)));break;case 30:r&512&&(Fe||i===null||qn(i,i.return)),r=zM(),s=cf,a=(n&335544064)===n,o=e.memoizedProps,cf=a&&la(o.default,o.update)!=="none",Mi(t,e,n),bi(e),a&&i!==null&&Ne&&(e.flags|=4),cf=s,Ne=r;break;case 21:break;case 7:r&512&&(Fe||i===null||qn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Mi(t,e,n),bi(e)}}function bi(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(rA(i)){n=i;break}i=i.return}i=null;for(var r=e.return;r!==null;){if(qy(r)){var s=r.stateNode;i===null?i=[s]:i.push(s)}if(Yy(r))break;r=r.return}var a=i;if(n==null)throw Error(vt(160));switch(n.tag){case 27:var o=n.stateNode,l=k_(e);Op(e,l,o,a);break;case 5:var u=n.stateNode;n.flags&32&&(Uu(u,""),n.flags&=-33);var c=k_(e);Op(e,c,u,a);break;case 3:case 4:var d=n.stateNode.containerInfo,f=k_(e);Bv(e,f,d,a);break;default:throw Error(vt(161))}}catch(h){ke(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _A(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;_A(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Hu=!0,t.reset(),Hu=!1),e=e.sibling}}function iu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)vA(t,e),t=t.sibling;else uA(t,!1)}function vA(e,t){var n=e.alternate;if(n===null)Fv(e,!1);else switch(e.tag){case 3:if(Gv=ys=!1,Ob(),iu(t,e),!ys&&!Np){if(e=Ms,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var r=e[i+1];WA(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+r+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Gv=!0}Ms=null;break;case 5:iu(t,e);break;case 4:i=ys,ys=!1,iu(t,e),ys&&(Np=!0),ys=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Fv(e,!1):iu(t,e));break;case 30:i=ys,r=Ob(),ys=!1,iu(t,e),ys&&(e.flags|=4);var s=e.memoizedProps,a=e.stateNode;t=na(s,a),a=na(n.memoizedProps,a);var o=la(s.default,s.update);o==="none"?t=!1:(s=n.memoizedState,n.memoizedState=null,n=e.child,Vi=0,t=Zy(e,n,t,a,o,s,!0),Vi!==(s===null?0:s.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Nu(e,e.memoizedProps.onUpdate),Ms=r):r!==null&&(r.push.apply(r,Ms),Ms=r),ys=(e.flags&32)!==0?!0:i;break;default:iu(t,e)}}function xs(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cA(e,t.alternate,t),t=t.sibling}function Ia(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:so(4,n,n.return),Ia(n,i);break;case 1:qn(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&iA(n,n.return,r),Ia(n,i);break;case 27:(i&2)!==0&&tw(n.stateNode,n.type,n.memoizedProps);case 5:qn(n,n.return),n.tag!==5&&n.tag!==27||xf(n),Ia(n,i);break;case 6:xf(n);break;case 26:qn(n,n.return),r=n.stateNode,n.memoizedState!==null||r===null||Fe||r.parentNode.removeChild(r),Ia(n,i);break;case 22:n.memoizedState===null&&Ia(n,i);break;case 30:qn(n,n.return),Ia(n,i);break;case 7:qn(n,n.return);default:Ia(n,i)}e=e.sibling}}function $r(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,r=e,s=t,a=s.flags,o=(n&1)!==0;switch(s.tag){case 0:case 11:case 15:$r(r,s,n),Zf(4,s);break;case 1:if($r(r,s,n),i=s,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(c){ke(i,i.return,c)}if(i=s,r=i.updateQueue,r!==null){var l=i.stateNode;try{var u=r.shared.hiddenCallbacks;if(u!==null)for(r.shared.hiddenCallbacks=null,r=0;r<u.length;r++)fE(u[r],l)}catch(c){ke(i,i.return,c)}}o&&a&64&&nA(s),Ss(s,s.return);break;case 27:(n&2)!==0&&sA(s);case 5:s.tag!==5&&s.tag!==27||Db(s),$r(r,s,n),o&&i===null&&a&4&&Iv(s),Ss(s,s.return);break;case 6:Db(s);break;case 26:l=s.stateNode,s.memoizedState!==null||l===null||Fn||oy(If(l.ownerDocument),s.type,l),$r(r,s,n),o&&i===null&&a&4&&Iv(s),Ss(s,s.return);break;case 12:$r(r,s,n);break;case 31:$r(r,s,n),o&&a&4&&pA(r,s);break;case 13:$r(r,s,n),o&&a&4&&mA(r,s);break;case 22:s.memoizedState===null&&$r(r,s,n),Ss(s,s.return);break;case 30:$r(r,s,n),Ss(s,s.return);break;case 7:Ss(s,s.return);default:$r(r,s,n)}t=t.sibling}}function Jy(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Yf(n))}function Ky(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yf(e))}function Ur(e,t,n,i){var r=(n&335544064)===n;if(t.subtreeFlags&(r?10262:10256))for(t=t.child;t!==null;)yA(e,t,n,i),t=t.sibling;else r&&lA(t)}function yA(e,t,n,i){var r=(n&335544064)===n;r&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ap(t);var s=t.flags;switch(t.tag){case 0:case 11:case 15:Ur(e,t,n,i),s&2048&&Zf(9,t);break;case 1:Ur(e,t,n,i);break;case 3:Ur(e,t,n,i),r&&Gv&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),s&2048&&(s=null,t.alternate!==null&&(s=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==s&&(t.refCount++,s!=null&&Yf(s)));break;case 12:if(s&2048){Ur(e,t,n,i),s=t.stateNode;try{var a=t.memoizedProps,o=a.id,l=a.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(u){ke(t,t.return,u)}}else Ur(e,t,n,i);break;case 31:Ur(e,t,n,i);break;case 13:Ur(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState!==null?(r&&o!==null&&o.memoizedState===null&&ap(o),a._visibility&2?Ur(e,t,n,i):Sf(e,t)):(r&&o!==null&&o.memoizedState!==null&&ap(t),a._visibility&2?Ur(e,t,n,i):(a._visibility|=2,su(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),s&2048&&Jy(o,t);break;case 24:Ur(e,t,n,i),s&2048&&Ky(t.alternate,t);break;case 30:r&&(s=t.alternate,s!==null&&(Cs(s.child,!0),Cs(t.child,!0))),Ur(e,t,n,i);break;default:Ur(e,t,n,i)}}function su(e,t,n,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,a=t,o=n,l=i,u=a.flags;switch(a.tag){case 0:case 11:case 15:su(s,a,o,l,r),Zf(8,a);break;case 23:break;case 22:var c=a.stateNode;a.memoizedState!==null?c._visibility&2?su(s,a,o,l,r):Sf(s,a):(c._visibility|=2,su(s,a,o,l,r)),r&&u&2048&&Jy(a.alternate,a);break;case 24:su(s,a,o,l,r),r&&u&2048&&Ky(a.alternate,a);break;default:su(s,a,o,l,r)}t=t.sibling}}function Sf(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:Sf(n,i),r&2048&&Jy(i.alternate,i);break;case 24:Sf(n,i),r&2048&&Ky(i.alternate,i);break;default:Sf(n,i)}t=t.sibling}}var Yo=8192;function ko(e,t,n){if(e.subtreeFlags&Yo)for(e=e.child;e!==null;)xA(e,t,n),e=e.sibling}function xA(e,t,n){switch(e.tag){case 26:ko(e,t,n),e.flags&Yo&&(e.memoizedState!==null?JO(n,ts,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&sT(n,e)));break;case 5:ko(e,t,n),e.flags&Yo&&(e=e.stateNode,(t&335544128)===t&&sT(n,e));break;case 3:case 4:var i=ts;ts=If(e.stateNode.containerInfo),ko(e,t,n),ts=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Yo,Yo=16777216,ko(e,t,n),Yo=i):ko(e,t,n));break;case 30:if((e.flags&Yo)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var r=e.stateNode;r.paired=null,sr===null&&(sr=new Map),sr.set(i,r)}ko(e,t,n);break;default:ko(e,t,n)}}function SA(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function nf(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];zn=i,bA(i,e)}SA(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)MA(e),e=e.sibling}function MA(e){switch(e.tag){case 0:case 11:case 15:nf(e),e.flags&2048&&so(9,e,e.return);break;case 3:nf(e);break;case 12:nf(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,op(e)):nf(e);break;default:nf(e)}}function op(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];zn=i,bA(i,e)}SA(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:so(8,t,t.return),op(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,op(t));break;default:op(t)}e=e.sibling}}function bA(e,t){for(;zn!==null;){var n=zn;switch(n.tag){case 0:case 11:case 15:so(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Yf(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,zn=i;else t:for(n=e;zn!==null;){i=zn;var r=i.sibling,s=i.return;if(hA(i),i===n){zn=null;break t}if(r!==null){r.return=s,zn=r;break t}zn=s}}}var YU={getCacheForType:function(e){var t=Jn(En),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Jn(En).controller.signal}},qU=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ze=null,Ae=null,Re=0,Ve=0,nr=null,ka=!1,Yu=!1,Qy=!1,aa=0,pn=0,ao=0,$o=0,Pp=0,ar=0,Lu=0,Mf=null,Hi=null,Wv=!1,im=0,TA=0,Ip=1/0,Bp=null,ja=null,ln=0,ns=null,ol=null,Rs=0,Yv=0,qv=null,EA=null,Au=null,wu=null,Ru=null,bf=0,lp=null;function cr(){return(Pe&2)!==0&&Re!==0?Re&-Re:he.T!==null?$y():CT()}function AA(){if(ar===0)if((Re&536870912)===0||Se){var e=Dd;Dd<<=1,(Dd&3932160)===0&&(Dd=262144),ar=e}else ar=536870912;return e=$n.current,e!==null&&(e.flags|=32),ar}function Nu(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=qA(na(e.memoizedProps,n))),wu===null&&(wu=[]),wu.push(t.bind(null,i))}}function ki(e,t,n){(e===Ze&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)&&(Pu(e,0),Xa(e,Re,ar,!1)),kf(e,n),((Pe&2)===0||e!==Ze)&&(e===Ze&&((Pe&2)===0&&($o|=n),pn===4&&Xa(e,Re,ar,!1)),Us(e))}function wA(e,t,n){if((Pe&6)!==0)throw Error(vt(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Gf(e,t),r=i?KU(e,t):W_(e,t,!0),s=i;do{if(r===0){Yu&&!i&&Xa(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!ZU(n)){r=W_(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var a=0;else a=e.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){t=a;t:{var o=e;r=Mf;var l=o.current.memoizedState.isDehydrated;if(l&&(Pu(o,a).flags|=256),a=W_(o,a,!1),a!==2&&a!==6){if(Qy&&!l){o.errorRecoveryDisabledLanes|=s,$o|=s,r=4;break t}s=Hi,Hi=r,s!==null&&(Hi===null?Hi=s:Hi.push.apply(Hi,s))}r=a}if(s=!1,r!==2)continue}}if(r===1){Pu(e,0),Xa(e,t,0,!0);break}t:{switch(i=e,s=r,s){case 0:case 1:throw Error(vt(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Xa(i,t,ar,!ka);break t;case 2:Hi=null;break;case 3:case 5:break;default:throw Error(vt(329))}if((t&62914560)===t&&(r=im+300-or(),10<r)){if(Xa(i,t,ar,!ka),kp(i,0,!0)!==0)break t;Rs=t,i.timeoutHandle=ex(Nb.bind(null,i,n,Hi,Bp,Wv,t,ar,$o,Lu,ka,s,"Throttled",-0,0),r);break t}Nb(i,n,Hi,Bp,Wv,t,ar,$o,Lu,ka,s,null,-0,0)}}break}while(!0);Us(e)}function Nb(e,t,n,i,r,s,a,o,l,u,c,d,f,h){e.timeoutHandle=-1;var g=t.subtreeFlags,_=(s&335544064)===s;if(d=null,(_||g&8192||(g&16785408)===16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ts},sr=null,xA(t,s,d),_&&(g=d,_=e.containerInfo,_=(_.nodeType===9?_:_.ownerDocument).__reactViewTransition,_!=null&&(g.count++,g.waitingForViewTransition=!0,g=Bf.bind(g),_.finished.then(g,g))),g=(s&62914560)===s?im-or():(s&4194048)===s?TA-or():0,g=KO(d,g),g!==null)){Rs=s,e.cancelPendingCommit=g(Ib.bind(null,e,t,s,n,i,r,a,o,l,u,c,d,null,f,h)),Xa(e,s,a,!u);return}Ib(e,t,s,n,i,r,a,o,l,u,c,d)}function ZU(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!fr(s(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xa(e,t,n,i){t=TT(e,t),t&=~Pp,t&=~$o,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var s=31-ur(r),a=1<<s;i[s]=-1,r&=~a}n!==0&&AT(e,n,t)}function rm(){return(Pe&6)===0?(Jf(0,!1),!1):!0}function jy(){if(Ae!==null){if(Ve===0)var e=Ae.return;else e=Ae,js=hl=null,Py(e),bu=null,Df=0,e=Ae;for(;e!==null;)eA(e.alternate,e),e=e.return;Ae=null}}function Pu(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,gO(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Rs=0,jy(),Ze=e,Ae=n=$s(e.current,null),Re=t,Ve=0,nr=null,ka=!1,Yu=Gf(e,t),Qy=!1,Lu=ar=Pp=$o=ao=pn=0,Hi=Mf=null,Wv=!1,aa=TT(e,t),Zp(),n}function RA(e,t){me=null,he.H=Cp,t===Xu||t===Qp?(t=ob(),Ve=3):t===wy?(t=ob(),Ve=4):Ve=t===ky?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nr=t,Ae===null&&(pn=1,Dp(e,Ir(t,e.current)))}function CA(){var e=$n.current;return e===null?!0:(Re&4194048)===Re?ai===null:(Re&62914560)===Re||(Re&536870912)!==0?e===ai:!1}function DA(){var e=he.H;return he.H=Cp,e===null?Cp:e}function UA(){var e=he.A;return he.A=YU,e}function Fp(){pn=4,ka||(Re&4194048)!==Re&&$n.current!==null||(Yu=!0),(ao&134217727)===0&&($o&134217727)===0||Ze===null||Xa(Ze,Re,ar,!1)}function W_(e,t,n){var i=Pe;Pe|=2;var r=DA(),s=UA();(Ze!==e||Re!==t)&&(Bp=null,Pu(e,t)),t=!1;var a=pn;t:do try{if(Ve!==0&&Ae!==null){var o=Ae,l=nr;switch(Ve){case 8:jy(),a=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(t=!0);var u=Ve;if(Ve=0,nr=null,vu(e,o,l,u),n&&Yu){a=0;break t}break;default:u=Ve,Ve=0,nr=null,vu(e,o,l,u)}}JU(),a=pn;break}catch(c){RA(e,c)}while(!0);return t&&e.shellSuspendCounter++,js=hl=null,Pe=i,he.H=r,he.A=s,Ae===null&&(Ze=null,Re=0,Zp()),a}function JU(){for(;Ae!==null;)OA(Ae)}function KU(e,t){var n=Pe;Pe|=2;var i=DA(),r=UA();Ze!==e||Re!==t?(Bp=null,Ip=or()+500,Pu(e,t)):Yu=Gf(e,t);t:do try{if(Ve!==0&&Ae!==null){t=Ae;var s=nr;e:switch(Ve){case 1:Ve=0,nr=null,vu(e,t,s,1);break;case 2:case 9:if(ab(s)){Ve=0,nr=null,Pb(t);break}t=function(){Ve!==2&&Ve!==9||Ze!==e||(Ve=7),Us(e)},s.then(t,t);break t;case 3:Ve=7;break t;case 4:Ve=5;break t;case 7:ab(s)?(Ve=0,nr=null,Pb(t)):(Ve=0,nr=null,vu(e,t,s,7));break;case 5:var a=null;switch(Ae.tag){case 26:a=Ae.memoizedState;case 5:case 27:var o=Ae;if(a?iw(a):o.stateNode.complete){Ve=0,nr=null;var l=o.sibling;if(l!==null)Ae=l;else{var u=o.return;u!==null?(Ae=u,sm(u)):Ae=null}break e}}Ve=0,nr=null,vu(e,t,s,5);break;case 6:Ve=0,nr=null,vu(e,t,s,6);break;case 8:jy(),pn=6;break t;default:throw Error(vt(462))}}QU();break}catch(c){RA(e,c)}while(!0);return js=hl=null,he.H=i,he.A=r,Pe=n,Ae!==null?0:(Ze=null,Re=0,Zp(),pn)}function QU(){for(;Ae!==null&&!pD();)OA(Ae)}function OA(e){var t=tA(e.alternate,e,aa);e.memoizedProps=e.pendingProps,t===null?sm(e):Ae=t}function Pb(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bb(n,t,t.pendingProps,t.type,void 0,Re);break;case 11:t=bb(n,t,t.pendingProps,t.type.render,t.ref,Re);break;case 5:Py(t);var i=t;i===Vn&&(Se?(Mp(i),i.tag===5&&i.stateNode!=null&&(tn=i.stateNode)):(Mp(i),Se=!0));default:eA(n,t),t=Ae=nE(t,aa),t=tA(n,t,aa)}e.memoizedProps=e.pendingProps,t===null?sm(e):Ae=t}function vu(e,t,n,i){js=hl=null,Py(t),bu=null,Df=0;var r=t.return;try{if(FU(e,r,t,n,Re)){pn=1,Dp(e,Ir(n,e.current)),Ae=null;return}}catch(s){if(r!==null)throw Ae=r,s;pn=1,Dp(e,Ir(n,e.current)),Ae=null;return}t.flags&32768?(Se||i===1?e=!0:Yu||(Re&536870912)!==0?e=!1:(ka=e=!0,(i===2||i===9||i===3||i===6)&&(i=$n.current,i!==null&&i.tag===13&&(i.flags|=16384))),LA(t,e)):sm(t)}function sm(e){var t=e;do{if((t.flags&32768)!==0){LA(t,ka);return}e=t.return;var n=GU(t.alternate,t,aa);if(n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);pn===0&&(pn=5)}function LA(e,t){do{var n=kU(e.alternate,e);if(n!==null){n.flags&=32767,Ae=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=n}while(e!==null);pn=6,Ae=null}function Ib(e,t,n,i,r,s,a,o,l,u,c,d){e.cancelPendingCommit=null;do am();while(ln!==0);if((Pe&6)!==0)throw Error(vt(327));if(t!==null){if(t===e.current)throw Error(vt(177));e===Ze&&(Ae=Ze=null,Re=0),ol=t,ns=e,Rs=n,qv=r,EA=i,jU(e,t,n,a,o,l,d)}}function jU(e,t,n,i,r,s,a){var o=t.lanes|t.childLanes;if(Yv=o,o|=Sy,TD(e,n,o,i,r,s),wu=null,(n&335544064)===n?(Ru=AU(e),i=10262):(Ru=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,rO(_p,function(){return Qv(),null})):(e.callbackNode=null,e.callbackPriority=0),Lp=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=he.T,he.T=null,r=Ie.p,Ie.p=2,s=Pe,Pe|=4;try{XU(e,t,n)}finally{Pe=s,Ie.p=r,he.T=i}}ln=1,Lp?Au=MO(a,e.containerInfo,Ru,Zv,Jv,tO,Kv,Qv,$U,null,null):(Zv(),Jv(),Kv())}function $U(e){if(ln!==0){var t=ns.onRecoverableError;t(e,{componentStack:null})}}function tO(){ln===3&&(ln=0,vA(ol,ns),ln=4)}function Zv(){if(ln===1){ln=0;var e=ns,t=ol,n=Rs,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=he.T,he.T=null;var r=Ie.p;Ie.p=2;var s=Pe;Pe|=4;try{cf=Np=!1,gA(t,e,n),n=ey;var a=ZT(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(a!==o&&o&&o.ownerDocument&&qT(o.ownerDocument.documentElement,o)){if(l!==null&&xy(o)){var u=l.start,c=l.end;if(c===void 0&&(c=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(c,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var h=f.getSelection(),g=o.textContent.length,_=Math.min(l.start,g),m=l.end===void 0?_:Math.min(l.end,g);!h.extend&&_>m&&(a=m,m=_,_=a);var p=jM(o,_),y=jM(o,m);if(p&&y&&(h.rangeCount!==1||h.anchorNode!==p.node||h.anchorOffset!==p.offset||h.focusNode!==y.node||h.focusOffset!==y.offset)){var S=d.createRange();S.setStart(p.node,p.offset),h.removeAllRanges(),_>m?(h.addRange(S),h.extend(y.node,y.offset)):(S.setEnd(y.node,y.offset),h.addRange(S))}}}}for(d=[],h=o;h=h.parentNode;)h.nodeType===1&&d.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var x=d[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Hu=!!ty,ey=ty=null}finally{Pe=s,Ie.p=r,he.T=i}}e.current=t,ln=2}}function Jv(){if(ln===2){ln=0;var e=ns,t=ol,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=he.T,he.T=null;var i=Ie.p;Ie.p=2;var r=Pe;Pe|=4;try{cA(e,t.alternate,t)}finally{Pe=r,Ie.p=i,he.T=n}}ln=3}}function Kv(){if(ln===4||ln===3){ln=0;var e=Au;Au=null,mD();var t=ns,n=ol,i=Rs,r=EA,s=(i&335544064)===i?10262:10256;if((n.subtreeFlags&s)!==0||(n.flags&s)!==0?ln=5:(ln=0,ol=ns=null,NA(t,t.pendingLanes)),s=t.pendingLanes,s===0&&(ja=null),py(i),n=n.stateNode,lr&&typeof lr.onCommitFiberRoot=="function")try{lr.onCommitFiberRoot(Vf,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=he.T,s=Ie.p,Ie.p=2,he.T=null;try{for(var a=t.onRecoverableError,o=0;o<r.length;o++){var l=r[o];a(l.value,{componentStack:l.stack})}}finally{he.T=n,Ie.p=s}}if(r=wu,a=Ru,Ru=null,r!==null&&(wu=null,a===null&&(a=[]),e!==null))for(l=0;l<r.length;l++)n=(0,r[l])(a),n!==void 0&&e.finished.finally(n);(Rs&3)!==0&&am(),Us(t),s=t.pendingLanes,(i&261930)!==0&&(s&42)!==0?t===lp?bf++:(bf=0,lp=t):(bf=0,lp=null),Jf(0,!1)}}function NA(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yf(t)))}function am(){return Au!==null&&(Au.skipTransition(),Au=null),Zv(),Jv(),Kv(),Qv()}function Qv(){if(ln!==5)return!1;var e=ns,t=Yv;Yv=0;var n=py(Rs),i=he.T,r=Ie.p;try{Ie.p=32>n?32:n,he.T=null,n=qv,qv=null;var s=ns,a=Rs;if(ln=0,ol=ns=null,Rs=0,(Pe&6)!==0)throw Error(vt(331));var o=Pe;if(Pe|=4,MA(s.current),yA(s,s.current,a,n),Pe=o,Jf(0,!1),lr&&typeof lr.onPostCommitFiberRoot=="function")try{lr.onPostCommitFiberRoot(Vf,s)}catch{}return!0}finally{Ie.p=r,he.T=i,NA(e,t)}}function Bb(e,t,n){t=Ir(n,t),t=Dv(e.stateNode,t,2),e=Ja(e,t,2),e!==null&&(kf(e,2),Us(e))}function ke(e,t,n){if(e.tag===3)Bb(e,e,n);else for(;t!==null;){if(t.tag===3){Bb(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ja===null||!ja.has(i))){e=Ir(n,e),n=JE(2),i=Ja(t,n,2),i!==null&&(KE(n,i,t,e),kf(i,2),Us(i));break}}t=t.return}}function Y_(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new qU;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(Qy=!0,r.add(n),e=eO.bind(null,e,t,n),t.then(e,e))}function eO(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ze===e&&(Re&n)===n&&((pn===4||pn===3&&(Re&62914560)===Re&&300>or()-im)&&(Pe&2)===0?Pu(e,0):Pp|=n,Lu===Re&&(Lu=0)),Us(e)}function PA(e,t){t===0&&(t=ET()),e=fl(e,t),e!==null&&(kf(e,t),Us(e))}function nO(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),PA(e,n)}function iO(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(vt(314))}i!==null&&i.delete(t),PA(e,n)}function rO(e,t){return hy(e,t)}var Iu=null,au=null,jv=!1,zp=!1,q_=!1,Wa=0;function Us(e){e!==au&&e.next===null&&(au===null?Iu=au=e:au=au.next=e),zp=!0,jv||(jv=!0,aO())}function Jf(e,t){if(!q_&&zp){q_=!0;do for(var n=!1,i=Iu;i!==null;){if(!t)if(e!==0){var r=i.pendingLanes;if(r===0)var s=0;else{var a=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-ur(42|e)+1)-1,s&=r&~(a&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Fb(i,s))}else s=Re,s=kp(i,i===Ze?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||Gf(i,s)||(n=!0,Fb(i,s));i=i.next}while(n);q_=!1}}function sO(){IA()}function IA(){zp=jv=!1;var e=0;Wa!==0&&mO()&&(e=Wa);for(var t=or(),n=null,i=Iu;i!==null;){var r=i.next,s=BA(i,t);s===0?(i.next=null,n===null?Iu=r:n.next=r,r===null&&(au=n)):(n=i,(e!==0||(s&3)!==0)&&(zp=!0)),i=r}ln!==0&&ln!==5||Jf(e,!1),Wa!==0&&(Wa=0)}function BA(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var a=31-ur(s),o=1<<a,l=r[a];l===-1?((o&n)===0||(o&i)!==0)&&(r[a]=bD(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=Ze,n=Re,n=kp(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&E_(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Gf(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&E_(i),py(n)){case 2:case 8:n=MT;break;case 32:n=_p;break;case 268435456:n=bT;break;default:n=_p}return i=FA.bind(null,e),n=hy(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&E_(i),e.callbackPriority=2,e.callbackNode=null,2}function FA(e,t){if(ln!==0&&ln!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(am()&&e.callbackNode!==n)return null;var i=Re;return i=kp(e,e===Ze?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(wA(e,i,t),BA(e,or()),e.callbackNode!=null&&e.callbackNode===n?FA.bind(null,e):null)}function Fb(e,t){if(am())return null;wA(e,t,!0)}function aO(){_O(function(){(Pe&6)!==0?hy(ST,sO):IA()})}function $y(){if(Wa===0){var e=il;e===0&&(e=Cd,Cd<<=1,(Cd&261888)===0&&(Cd=256)),Wa=e}return Wa}function zb(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kd(e)}function oO(e,t,n,i,r){if(t==="submit"&&n&&n.stateNode===r){var s=zb((r[Wi]||null).action),a=i.submitter;a&&(t=(t=a[Wi]||null)?zb(t.formAction):a.getAttribute("formAction"),t!==null&&(s=t,a=null));var o=new Wp("action","action",null,i,r);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Wa!==0){var l=new FormData(r,a);Rv(n,{pending:!0,data:l,method:r.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=new FormData(r,a),Rv(n,{pending:!0,data:l,method:r.method,action:s},s,l))},currentTarget:r}]})}}for(Xd=0;Xd<_v.length;Xd++)Wd=_v[Xd],Hb=Wd.toLowerCase(),Vb=Wd[0].toUpperCase()+Wd.slice(1),is(Hb,"on"+Vb);var Wd,Hb,Vb,Xd;is(KT,"onAnimationEnd");is(QT,"onAnimationIteration");is(jT,"onAnimationStart");is("dblclick","onDoubleClick");is("focusin","onFocus");is("focusout","onBlur");is(vU,"onTransitionRun");is(yU,"onTransitionStart");is(xU,"onTransitionCancel");is($T,"onTransitionEnd");Du("onMouseEnter",["mouseout","mouseover"]);Du("onMouseLeave",["mouseout","mouseover"]);Du("onPointerEnter",["pointerout","pointerover"]);Du("onPointerLeave",["pointerout","pointerover"]);ul("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ul("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ul("onBeforeInput",["compositionend","keypress","textInput","paste"]);ul("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ul("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ul("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lO=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lf));function zA(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break t;s=o,r.currentTarget=u;try{s(r)}catch(c){yp(c)}r.currentTarget=null,s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break t;s=o,r.currentTarget=u;try{s(r)}catch(c){yp(c)}r.currentTarget=null,s=l}}}}function Ee(e,t){var n=t[PM];n===void 0&&(n=t[PM]=new Set);var i=e+"__bubble";n.has(i)||(HA(t,e,2,!1),n.add(i))}function Z_(e,t,n){var i=0;t&&(i|=4),HA(n,e,i,t)}var Yd="_reactListening"+Math.random().toString(36).slice(2);function tx(e){if(!e[Yd]){e[Yd]=!0,UT.forEach(function(n){n!=="selectionchange"&&(lO.has(n)||Z_(n,!1,e),Z_(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yd]||(t[Yd]=!0,Z_("selectionchange",!1,t))}}function HA(e,t,n,i){switch(cw(t)){case 2:var r=tL;break;case 8:r=eL;break;default:r=ox}n=r.bind(null,t,n,e),r=void 0,!dv||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function J_(e,t,n,i,r){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&a.stateNode.containerInfo===r)return;a=a.return}for(;o!==null;){if(a=qo(o),a===null)return;if(l=a.tag,l===5||l===6||l===26||l===27){i=s=a;continue t}o=o.parentNode}}i=i.return}zT(function(){var u=s,c=gy(n),d=[];t:{var f=tE.get(e);if(f!==void 0){var h=Wp,g=e;switch(e){case"keypress":if(jd(n)===0)break t;case"keydown":case"keyup":h=ZD;break;case"focusin":g="focus",h=U_;break;case"focusout":g="blur",h=U_;break;case"beforeblur":case"afterblur":h=U_;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=kM;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=ID;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=$D;break;case KT:case QT:case jT:h=zD;break;case $T:h=eU;break;case"scroll":case"scrollend":h=ND;break;case"wheel":h=iU;break;case"copy":case"cut":case"paste":h=VD;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=WM;break;case"submit":h=QD;break;case"toggle":case"beforetoggle":h=sU}var _=(t&4)!==0,m=!_&&(e==="scroll"||e==="scrollend"),p=_?f!==null?f+"Capture":null:f;_=[];for(var y=u,S;y!==null;){var x=y;if(S=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||S===null||p===null||(x=Ef(y,p),x!=null&&_.push(Nf(y,x,S))),m)break;y=y.return}0<_.length&&(f=new h(f,g,null,n,c),d.push({event:f,listeners:_}))}}if((t&7)===0){t:{if(h=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",h&&n!==hv&&(g=n.relatedTarget||n.fromElement)&&(qo(g)||g[Gu]))break t;(f||h)&&(g=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,f?(h=n.relatedTarget||n.toElement,f=u,h=h?qo(h):null,h!==null&&(m=Hf(h),_=h.tag,h!==m||_!==5&&_!==27&&_!==6)&&(h=null)):(f=null,h=u),f!==h&&(_=kM,x="onMouseLeave",p="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(_=WM,x="onPointerLeave",p="onPointerEnter",y="pointer"),m=f==null?g:lf(f),S=h==null?g:lf(h),g=new _(x,y+"leave",f,n,c),g.target=m,g.relatedTarget=S,x=null,qo(c)===u&&(_=new _(p,y+"enter",h,n,c),_.target=S,_.relatedTarget=m,x=_),m=x,_=f&&h?tv(f,h,uO):null,f!==null&&Gb(d,g,f,_,!1),h!==null&&m!==null&&Gb(d,m,h,_,!0)))}t:{if(f=u?lf(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var E=JM;else if(ZM(f))if(WT)E=mU;else{E=dU;var R=hU}else h=f.nodeName,!h||h.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?u&&my(u.elementType)&&(E=JM):E=pU;if(E&&(E=E(e,u))){XT(d,E,n,c);break t}R&&R(e,f,u)}switch(R=u?lf(u):window,e){case"focusin":(ZM(R)||R.contentEditable==="true")&&(hu=R,mv=u,df=null);break;case"focusout":df=mv=hu=null;break;case"mousedown":gv=!0;break;case"contextmenu":case"mouseup":case"dragend":gv=!1,$M(d,n,c);break;case"selectionchange":if(_U)break;case"keydown":case"keyup":$M(d,n,c)}var A;if(yy)t:{switch(e){case"compositionstart":var C="onCompositionStart";break t;case"compositionend":C="onCompositionEnd";break t;case"compositionupdate":C="onCompositionUpdate";break t}C=void 0}else fu?GT(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(VT&&n.locale!=="ko"&&(fu||C!=="onCompositionStart"?C==="onCompositionEnd"&&fu&&(A=HT()):(Va=c,_y="value"in Va?Va.value:Va.textContent,fu=!0)),R=Hp(u,C),0<R.length&&(C=new XM(C,e,null,n,c),d.push({event:C,listeners:R}),A?C.data=A:(A=kT(n),A!==null&&(C.data=A)))),(A=oU?lU(e,n):uU(e,n))&&(C=Hp(u,"onBeforeInput"),0<C.length&&(R=new XM("onBeforeInput","beforeinput",null,n,c),d.push({event:R,listeners:C}),R.data=A)),oO(d,e,u,n,c)}zA(d,t)})}function Nf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hp(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=Ef(e,n),r!=null&&i.unshift(Nf(e,r,s)),r=Ef(e,t),r!=null&&i.push(Nf(e,r,s))),e.tag===3)return i;e=e.return}return[]}function uO(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gb(e,t,n,i,r){for(var s=t._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||u===null||(l=u,r?(u=Ef(n,s),u!=null&&a.unshift(Nf(n,u,l))):r||(u=Ef(n,s),u!=null&&a.push(Nf(n,u,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var cO=/\r\n?/g,fO=/\u0000|\uFFFD/g;function kb(e){return(typeof e=="string"?e:""+e).replace(cO,`
`).replace(fO,"")}function VA(e,t){return t=kb(t),kb(e)===t}function Ge(e,t,n,i,r,s){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||Uu(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&Uu(e,""+i);else return;break;case"className":Od(e,"class",i);break;case"tabIndex":Od(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Od(e,n,i);break;case"style":FT(e,i,s);return;case"data":if(t!=="object"){Od(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Kd(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Ge(e,t,"name",r.name,r,null),Ge(e,t,"formEncType",r.formEncType,r,null),Ge(e,t,"formMethod",r.formMethod,r,null),Ge(e,t,"formTarget",r.formTarget,r,null)):(Ge(e,t,"encType",r.encType,r,null),Ge(e,t,"method",r.method,r,null),Ge(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Kd(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ts);return;case"onScroll":i!=null&&Ee("scroll",e);return;case"onScrollEnd":i!=null&&Ee("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(vt(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(vt(60));s?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Kd(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Jd(e,"popover",i);break;case"xlinkActuate":Js(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Js(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Js(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Js(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Js(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Js(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Js(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Js(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Js(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Jd(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=OD.get(n)||n,Jd(e,n,i);else return}Ne=!0}function $v(e,t,n,i,r,s){switch(n){case"style":FT(e,i,s);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(vt(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(vt(60));s?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")Uu(e,i);else if(typeof i=="number"||typeof i=="bigint")Uu(e,""+i);else return;break;case"onScroll":i!=null&&Ee("scroll",e);return;case"onScrollEnd":i!=null&&Ee("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Ts);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!OT.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),s=n.slice(2,r?n.length-7:void 0),t=e[Wi]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(s,t,r),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(s,i,r);break t}Ne=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):Jd(e,n,i)}return}Ne=!0}function jn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var i=!1,r=!1,s;for(s in n)if(n.hasOwnProperty(s)){var a=n[s];if(a!=null)switch(s){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(vt(137,t));default:Ge(e,t,s,a,n,null)}}r&&Ge(e,t,"srcSet",n.srcSet,n,null),i&&Ge(e,t,"src",n.src,n,null);return;case"input":Ee("invalid",e);var o=s=a=r=null,l=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var c=n[i];if(c!=null)switch(i){case"name":r=c;break;case"type":a=c;break;case"checked":l=c;break;case"defaultChecked":u=c;break;case"value":s=c;break;case"defaultValue":o=c;break;case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(vt(137,t));break;default:Ge(e,t,i,c,n,null)}}PT(e,s,o,l,u,a,r,!1);return;case"select":Ee("invalid",e),i=a=s=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":s=o;break;case"defaultValue":a=o;break;case"multiple":i=o;default:Ge(e,t,r,o,n,null)}t=s,n=a,e.multiple=!!i,t!=null?xu(e,!!i,t,!1):n!=null&&xu(e,!!i,n,!0);return;case"textarea":Ee("invalid",e),s=r=i=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":i=o;break;case"defaultValue":r=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(vt(91));break;default:Ge(e,t,a,o,n,null)}BT(e,i,r,s);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ge(e,t,l,i,n,null));return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(i=0;i<Lf.length;i++)Ee(Lf[i],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(vt(137,t));default:Ge(e,t,u,i,n,null)}return;default:if(my(t)){for(c in n)n.hasOwnProperty(c)&&(i=n[c],i!==void 0&&$v(e,t,c,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Ge(e,t,o,i,n,null))}var hO={};function dO(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,a=null,o=null,l=null,u=null,c=null;for(h in n){var d=n[h];if(n.hasOwnProperty(h)&&d!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(h)||Ge(e,t,h,null,i,d)}}for(var f in i){var h=i[f];if(d=n[f],i.hasOwnProperty(f)&&(h!=null||d!=null))switch(f){case"type":h!==d&&(Ne=!0),s=h;break;case"name":h!==d&&(Ne=!0),r=h;break;case"checked":h!==d&&(Ne=!0),u=h;break;case"defaultChecked":h!==d&&(Ne=!0),c=h;break;case"value":h!==d&&(Ne=!0),a=h;break;case"defaultValue":h!==d&&(Ne=!0),o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(vt(137,t));break;default:h!==d&&Ge(e,t,f,h,i,d)}}fv(e,a,o,l,u,c,s,r);return;case"select":h=a=o=f=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":h=l;default:i.hasOwnProperty(s)||Ge(e,t,s,null,i,l)}for(r in i)if(s=i[r],l=n[r],i.hasOwnProperty(r)&&(s!=null||l!=null))switch(r){case"value":s!==l&&(Ne=!0),f=s;break;case"defaultValue":s!==l&&(Ne=!0),o=s;break;case"multiple":s!==l&&(Ne=!0),a=s;default:s!==l&&Ge(e,t,r,s,i,l)}t=o,n=a,i=h,f!=null?xu(e,!!n,f,!1):!!i!=!!n&&(t!=null?xu(e,!!n,t,!0):xu(e,!!n,n?[]:"",!1));return;case"textarea":h=f=null;for(o in n)if(r=n[o],n.hasOwnProperty(o)&&r!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Ge(e,t,o,null,i,r)}for(a in i)if(r=i[a],s=n[a],i.hasOwnProperty(a)&&(r!=null||s!=null))switch(a){case"value":r!==s&&(Ne=!0),f=r;break;case"defaultValue":r!==s&&(Ne=!0),h=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(vt(91));break;default:r!==s&&Ge(e,t,a,r,i,s)}IT(e,f,h);return;case"option":for(var g in n)f=n[g],n.hasOwnProperty(g)&&f!=null&&!i.hasOwnProperty(g)&&(g==="selected"?e.selected=!1:Ge(e,t,g,null,i,f));for(l in i)f=i[l],h=n[l],i.hasOwnProperty(l)&&f!==h&&(f!=null||h!=null)&&(l==="selected"?(f!==h&&(Ne=!0),e.selected=f&&typeof f!="function"&&typeof f!="symbol"):Ge(e,t,l,f,i,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in n)f=n[_],n.hasOwnProperty(_)&&f!=null&&!i.hasOwnProperty(_)&&Ge(e,t,_,null,i,f);for(u in i)if(f=i[u],h=n[u],i.hasOwnProperty(u)&&f!==h&&(f!=null||h!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(vt(137,t));break;default:Ge(e,t,u,f,i,h)}return;default:if(my(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&$v(e,t,m,void 0,i,f);for(c in i)f=i[c],h=n[c],!i.hasOwnProperty(c)||f===h||f===void 0&&h===void 0||$v(e,t,c,f,i,h);return}}for(var p in n)f=n[p],n.hasOwnProperty(p)&&f!=null&&!i.hasOwnProperty(p)&&Ge(e,t,p,null,i,f);for(d in i)f=i[d],h=n[d],!i.hasOwnProperty(d)||f===h||f==null&&h==null||Ge(e,t,d,f,i,h)}function Xb(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function pO(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],s=r.transferSize,a=r.initiatorType,o=r.duration;if(s&&o&&Xb(a)){for(a=0,o=r.responseEnd,i+=1;i<n.length;i++){var l=n[i],u=l.startTime;if(u>o)break;var c=l.transferSize,d=l.initiatorType;c&&Xb(d)&&(l=l.responseEnd,a+=c*(l<o?1:(o-u)/(l-u)))}if(--i,t+=8*(s+a)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ty=null,ey=null;function Pf(e){return e.nodeType===9?e:e.ownerDocument}function Wb(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function GA(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function kA(e,t,n,i){return n=Pf(n).createElement(e),n[Zn]=i,n[Wi]=t,jn(n,e,t),Hn(n),n}function ny(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var K_=null;function mO(){var e=window.event;return e&&e.type==="popstate"?e===K_?!1:(K_=e,!0):(K_=null,!1)}var ex=typeof setTimeout=="function"?setTimeout:void 0,gO=typeof clearTimeout=="function"?clearTimeout:void 0,Yb=typeof Promise=="function"?Promise:void 0,qb=typeof requestAnimationFrame=="function"?requestAnimationFrame:ex,_O=typeof queueMicrotask=="function"?queueMicrotask:typeof Yb<"u"?function(e){return Yb.resolve(null).then(e).catch(vO)}:ex;function vO(e){setTimeout(function(){throw e})}function lo(e){return e==="head"}function Zb(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(r),Vu(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")j_(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,j_(n);for(var s=n.firstChild;s;){var a=s.nextSibling,o=s.nodeName;s[Xf]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=a}}else n==="body"&&j_(e.ownerDocument.body);n=r}while(n);Vu(t)}function Jb(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function XA(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var r=i=0;r<t.length;r++){var s=t[r];0<s.width&&0<s.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function WA(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function YA(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function iy(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return YA(t,n,e)}function yO(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return YA(t,n,e)}function xO(e){return e.documentElement.clientHeight}function SO(e){this.addEventListener("load",e),this.addEventListener("error",e)}function MO(e,t,n,i,r,s,a,o,l){var u=t.nodeType===9?t:t.ownerDocument;try{var c=u.startViewTransition({update:function(){var f=u.defaultView,h=f.navigation&&f.navigation.transition,g=u.fonts.status;i();var _=[];if(g==="loaded"&&(xO(u),u.fonts.status==="loading"&&_.push(u.fonts.ready)),g=_.length,e!==null)for(var m=e.suspenseyImages,p=0,y=0;y<m.length;y++){var S=m[y];if(!S.complete){var x=S.getBoundingClientRect();if(0<x.bottom&&0<x.right&&x.top<f.innerHeight&&x.left<f.innerWidth){if(p+=rw(S),p>fp){_.length=g;break}S=new Promise(SO.bind(S)),_.push(S)}}}if(0<_.length)return f=Promise.race([Promise.all(_),new Promise(function(E){return setTimeout(E,500)})]).then(r,r),(h?Promise.allSettled([h.finished,f]):f).then(s,s);if(r(),h)return h.finished.then(s,s);s()},types:n});u.__reactViewTransition=c;var d=[];return c.ready.then(function(){for(var f=u.documentElement.getAnimations({subtree:!0}),h=0;h<f.length;h++){var g=f[h],_=g.effect,m=_.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){d.push(g),g=_.getKeyframes();for(var p=m=void 0,y=!0,S=0;S<g.length;S++){var x=g[S],E=x.width;if(m===void 0)m=E;else if(m!==E){y=!1;break}if(E=x.height,p===void 0)p=E;else if(p!==E){y=!1;break}delete x.width,delete x.height,x.transform==="none"&&delete x.transform}y&&m!==void 0&&p!==void 0&&(_.setKeyframes(g),y=getComputedStyle(_.target,_.pseudoElement),y.width!==m||y.height!==p)&&(y=g[0],y.width=m,y.height=p,y=g[g.length-1],y.width=m,y.height=p,_.setKeyframes(g))}}a()},function(f){u.__reactViewTransition===c&&(u.__reactViewTransition=null);try{typeof f=="object"&&f!==null&&f.name==="InvalidStateError"&&(f.message==="View transition was skipped because document visibility state is hidden."||f.message==="Skipping view transition because document visibility state has become hidden."||f.message==="Skipping view transition because viewport size changed."||f.message==="Transition was aborted because of invalid state")&&(f=null),f!==null&&l(f)}finally{i(),r(),a()}}),c.finished.finally(function(){for(var f=0;f<d.length;f++)d[f].cancel();u.__reactViewTransition===c&&(u.__reactViewTransition=null),o()}),c}catch{return i(),r(),a(),null}}function Zo(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Zo.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Je({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};Zo.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],r=0;r<n.length;r++){var s=n[r].effect;s!==null&&s.target===e&&s.pseudoElement===t&&i.push(n[r])}return i};Zo.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function qA(e){return{name:e,group:new Zo("group",e),imagePair:new Zo("image-pair",e),old:new Zo("old",e),new:new Zo("new",e)}}function hr(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}hr.prototype.addEventListener=function(e,t,n){var i=null,r=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var s=this._eventListeners;if(ZA(s,e,t,n)===-1){var a=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){a.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(r=a.removeEventListener.bind(a,e,t,n),i.addEventListener("abort",r,{once:!0}),r=i.removeEventListener.bind(i,"abort",r)),i=Bu(n),s.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:r}),Xi(this._fragmentFiber.child,!1,bO,e,o,i)}this._eventListeners=s}};function bO(e,t,n,i){return On(e).addEventListener(t,n,i),!1}hr.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=ZA(i,e,t,n),t!==-1)){var r=i[t];n=r.attachedListener;var s=r.cleanup;r=Bu(r.optionsOrUseCapture),Xi(this._fragmentFiber.child,!1,TO,e,n,r),i.splice(t,1),s!==null&&s()}};function TO(e,t,n,i){return On(e).removeEventListener(t,n,i),!1}function Bu(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Kb(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function ZA(e,t,n,i){if(e.length===0)return-1;i=Kb(i);for(var r=0;r<e.length;r++){var s=e[r];if(s.type===t&&s.listener===n&&Kb(s.optionsOrUseCapture)===i)return r}return-1}hr.prototype.dispatchEvent=function(e){var t=ll(this._fragmentFiber);if(t===null)return!0;t=On(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var r=0;r<n.length;r++){var s=n[r];i.addEventListener(s.type,s.attachedListener,Bu(s.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(r=0;r<n.length;r++)s=n[r],i.removeEventListener(s.type,s.attachedListener,Bu(s.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};hr.prototype.focus=function(e){Xi(this._fragmentFiber.child,!0,JA,e,void 0,void 0)};function JA(e,t){return e.tag===6?!1:(e=On(e),IO(e,t))}hr.prototype.focusLast=function(e){var t=[];Xi(this._fragmentFiber.child,!0,nx,t,void 0,void 0);for(var n=t.length-1;0<=n&&!JA(t[n],e);n--);};function nx(e,t){return t.push(e),!1}hr.prototype.blur=function(){var e=ll(this._fragmentFiber);e!==null&&(e=On(e),e=Pf(e).activeElement,e!==null&&Xi(this._fragmentFiber.child,!1,EO,e,void 0,void 0))};function EO(e,t){return e.tag===6?!1:(e=On(e),e===t||e.contains(t)?(t.blur(),!0):!1)}hr.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),Xi(this._fragmentFiber.child,!1,AO,e,void 0,void 0)};function AO(e,t){return e.tag===6||(e=On(e),t.observe(e)),!1}hr.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Xi(this._fragmentFiber.child,!1,wO,e,void 0,void 0);for(var n=t=0;n<es.length;n++){var i=es[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):es[t++]=i}es.length=t}};function wO(e,t){return e.tag===6||(e=On(e),t.unobserve(e)),!1}var es=[],Q_=!1;function RO(e,t,n){es.push({fragmentInstance:e,observer:t,instance:n}),Q_||(Q_=!0,BO(function(){Q_=!1;var i=es;es=[];for(var r=0;r<i.length;r++){var s=i[r];s.observer.unobserve(s.instance)}}))}hr.prototype.getClientRects=function(){var e=[];return Xi(this._fragmentFiber.child,!1,CO,e,void 0,void 0),e};function CO(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=On(e),t.push.apply(t,e.getClientRects());return!1}hr.prototype.getRootNode=function(e){var t=ll(this._fragmentFiber);return t===null?this:On(t).getRootNode(e)};hr.prototype.compareDocumentPosition=function(e){var t=ll(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Xi(this._fragmentFiber.child,!1,nx,n,void 0,void 0);var i=On(t);if(n.length===0){if(n=i,CM(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var r=i=n.compareDocumentPosition(e);return n===e?r=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=_T(t)[1],n===null?r=Node.DOCUMENT_POSITION_PRECEDING:(e=On(n).compareDocumentPosition(e),r=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),r|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=On(n[0]),r=On(n[n.length-1]);var s=CM(this._fragmentFiber)?t.parentElement:i;if(s==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=s.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,s=s.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_CONTAINED_BY;var a=t.compareDocumentPosition(e),o=r.compareDocumentPosition(e),l=a&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&s&&a&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||s&&r===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!s&&r===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:a,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||DO(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function DO(e,t,n,i,r){var s=qo(r);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!s)t:{for(;s!==null;){if(s.tag===7&&(s===t||s.alternate===t)){n=!0;break t}s=s.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(s===null)return s=r.ownerDocument,r===s||r===s.documentElement||r===s.body;t:{for(s=t,t=ll(t);s!==null;){if(!(s.tag!==5&&s.tag!==3&&s.tag!==27||s!==t&&s.alternate!==t)){s=!0;break t}s=s.return}s=!1}return s}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!s)&&!(t=s===n)&&(t=tv(n,s,DM),t===null?t=!1:(Xi(t,!0,aD,s,n),s=ou,ou=null,t=s!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!s)&&!(t=s===i)&&(t=tv(i,s,DM),t===null?t=!1:(Xi(t,!0,oD,s,i),s=ou,$_=ou=null,t=s!==null)),t):!1}function Qb(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}hr.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(vt(566));var t=[];Xi(this._fragmentFiber.child,!1,nx,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=_T(this._fragmentFiber);if(i=n?i[1]||i[0]||ll(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=On(i),Qb(e,n);return}if(i=On(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var r=t[i];r.tag===6?(r=On(r),Qb(r,n)):On(r).scrollIntoView(e),i+=n?-1:1}};function UO(e,t){return e=On(e),KA(e,t),!1}function KA(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function QA(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];e.addEventListener(r.type,r.attachedListener,Bu(r.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(s){for(var a=0,o=0;o<es.length;o++){var l=es[o];(l.fragmentInstance!==t||l.observer!==s||l.instance!==e)&&(es[a++]=l)}es.length=a,s.observe(e)}),KA(e,t))}function OO(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];e.removeEventListener(r.type,r.attachedListener,Bu(r.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(s){typeof s.rootMargin=="string"?RO(t,s,e):s.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function ry(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ry(n),Xp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function LO(e,t,n,i){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Xf])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Fr(e.nextSibling),e===null)break}return null}function NO(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Fr(e.nextSibling),e===null))return null;return e}function jA(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Fr(e.nextSibling),e===null))return null;return e}function sy(e){return e.data==="$?"||e.data==="$~"}function ix(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function PO(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Fr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ay=null;function jb(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Fr(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function $b(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function IO(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function BO(e){qb(function(){qb(function(t){return e(t)})})}function $A(e,t,n){switch(t=Pf(n),e){case"html":if(e=t.documentElement,!e)throw Error(vt(452));return e;case"head":if(e=t.head,!e)throw Error(vt(453));return e;case"body":if(e=t.body,!e)throw Error(vt(454));return e;default:throw Error(vt(451))}}function tw(e,t,n){for(var i in n){var r=n[i];n.hasOwnProperty(i)&&r!=null&&Ge(e,t,i,null,hO,r)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Ts&&(e.onclick=null),Xp(e)}function j_(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Xp(e)}var zr=new Map,tT=new Set;function If(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var ua=Ie.d;Ie.d={f:FO,r:zO,D:HO,C:VO,L:GO,m:kO,X:WO,S:XO,M:YO};function FO(){var e=ua.f(),t=rm();return e||t}function zO(e){var t=ku(e);t!==null&&t.tag===5&&t.type==="form"?FE(t):ua.r(e)}var qu=typeof document>"u"?null:document;function ew(e,t,n){var i=qu;if(i&&typeof t=="string"&&t){var r=Pr(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),tT.has(r)||(tT.add(r),e={rel:e,crossOrigin:n,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),jn(t,"link",e),Hn(t),i.head.appendChild(t)))}}function HO(e){ua.D(e),ew("dns-prefetch",e,null)}function VO(e,t){ua.C(e,t),ew("preconnect",e,t)}function GO(e,t,n){ua.L(e,t,n);var i=qu;if(i&&e&&t){var r='link[rel="preload"][as="'+Pr(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Pr(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Pr(n.imageSizes)+'"]')):r+='[href="'+Pr(e)+'"]';var s=r;switch(t){case"style":s=Fu(e);break;case"script":s=Zu(e)}if(!(zr.has(s)||(e=Je({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),zr.set(s,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(Kf(s))||t==="script"&&i.querySelector(Qf(s))))){var a=i.createElement("link");jn(a,"link",e),t==="style"&&(a[vp]=!0,a.onload=a.onerror=function(){DT(a)}),Hn(a),i.head.appendChild(a)}}}function kO(e,t){ua.m(e,t);var n=qu;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Pr(i)+'"][href="'+Pr(e)+'"]',s=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Zu(e)}if(!zr.has(s)&&(e=Je({rel:"modulepreload",href:e},t),zr.set(s,e),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Qf(s)))return}i=n.createElement("link"),jn(i,"link",e),Hn(i),n.head.appendChild(i)}}}function XO(e,t,n){ua.S(e,t,n);var i=qu;if(i&&e){var r=yu(i).hoistableStyles,s=Fu(e);t=t||"default";var a=r.get(s);if(!a){var o={loading:0,preload:null};if(a=i.querySelector(Kf(s)))o.loading=5;else{e=Je({rel:"stylesheet",href:e,"data-precedence":t},n),(n=zr.get(s))&&rx(e,n);var l=a=i.createElement("link");Hn(l),jn(l,"link",e),l._p=new Promise(function(u,c){l.onload=u,l.onerror=c}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,up(a,t,i)}a={type:"stylesheet",instance:a,count:1,state:o},r.set(s,a)}}}function WO(e,t){ua.X(e,t);var n=qu;if(n&&e){var i=yu(n).hoistableScripts,r=Zu(e),s=i.get(r);s||(s=n.querySelector(Qf(r)),s||(e=Je({src:e,async:!0},t),(t=zr.get(r))&&sx(e,t),s=n.createElement("script"),Hn(s),jn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function YO(e,t){ua.M(e,t);var n=qu;if(n&&e){var i=yu(n).hoistableScripts,r=Zu(e),s=i.get(r);s||(s=n.querySelector(Qf(r)),s||(e=Je({src:e,async:!0,type:"module"},t),(t=zr.get(r))&&sx(e,t),s=n.createElement("script"),Hn(s),jn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function eT(e,t,n,i){var r=(r=Ya.current)?If(r):null;if(!r)throw Error(vt(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Fu(n.href),t=yu(r).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Fu(n.href);var s=yu(r).hoistableStyles,a=s.get(e);if(a||(r=r.ownerDocument||r,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,a),(s=r.querySelector(Kf(e)))?s._p||(a.instance=s,a.state.loading=5):(s=zr.get(e),s||(s={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},zr.set(e,s)),qO(r,e,s,a.state))),t&&i===null)throw Error(vt(528,""));return a}if(t&&i!==null)throw Error(vt(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Zu(n),t=yu(r).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(vt(444,e))}}function Fu(e){return'href="'+Pr(e)+'"'}function Kf(e){return'link[rel="stylesheet"]['+e+"]"}function nw(e){return Je({},e,{"data-precedence":e.precedence,precedence:null})}function qO(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[vp]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[vp]=!0,t.onload=t.onerror=DT.bind(null,t),jn(t,"link",n),Hn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Zu(e){return'[src="'+Pr(e)+'"]'}function Qf(e){return"script[async]"+e}function nT(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Pr(n.href)+'"]');if(i)return t.instance=i,Hn(i),i;var r=Je({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Hn(i),jn(i,"style",r),up(i,n.precedence,e),t.instance=i;case"stylesheet":r=Fu(n.href);var s=e.querySelector(Kf(r));if(s)return t.state.loading|=4,t.instance=s,Hn(s),s;i=nw(n),(r=zr.get(r))&&rx(i,r),s=(e.ownerDocument||e).createElement("link"),Hn(s);var a=s;return a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),jn(s,"link",i),t.state.loading|=4,up(s,n.precedence,e),t.instance=s;case"script":return s=Zu(n.src),(r=e.querySelector(Qf(s)))?(t.instance=r,Hn(r),r):(i=n,(r=zr.get(s))&&(i=Je({},n),sx(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),Hn(r),jn(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(vt(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,up(i,n.precedence,e));return t.instance}function up(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,s=r,a=0;a<i.length;a++){var o=i[a];if(o.dataset.precedence===t)s=o;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function rx(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function sx(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var cp=null;function iT(e,t,n){if(cp===null){var i=new Map,r=cp=new Map;r.set(n,i)}else r=cp,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var s=n[r];if(!(s[Xf]||s[Zn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var a=s.getAttribute(t)||"";a=e+a;var o=i.get(a);o?o.push(s):i.set(a,[s])}}return i}function oy(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ZO(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function rT(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function iw(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function rw(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function sT(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=rw(t),e.suspenseyImages.push(t)),e=QO.bind(e),t.decode().then(e,e))}function JO(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=Fu(i.href),s=t.querySelector(Kf(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Bf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,Hn(s);return}s=t.ownerDocument||t,i=nw(i),(r=zr.get(r))&&rx(i,r),s=s.createElement("link"),Hn(s);var a=s;a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),jn(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Bf.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var fp=0;function KO(e,t){return e.stylesheets&&e.count===0&&hp(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&hp(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&fp===0&&(fp=62500*pO());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hp(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>fp?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function sw(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)hp(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Bf(){this.count--,sw(this)}function QO(){this.imgCount--,sw(this)}var Vp=null;function hp(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vp=new Map,t.forEach(jO,e),Vp=null,Bf.call(e))}function jO(e,t){if(!(t.state.loading&4)){var n=Vp.get(e);if(n)var i=n.get(null);else{n=new Map,Vp.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var a=r[s];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(n.set(a.dataset.precedence,a),i=a)}i&&n.set(null,i)}r=t.instance,a=r.getAttribute("data-precedence"),s=n.get(a)||i,s===i&&n.set(null,r),n.set(a,r),this.count++,i=Bf.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var zu={$$typeof:bs,Provider:null,Consumer:null,_currentValue:Jo,_currentValue2:Jo,_threadCount:0};function $O(e,t,n,i,r,s,a,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=A_(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=A_(0),this.hiddenUpdates=A_(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function aw(e,t,n,i,r,s,a,o,l,u,c,d){return e=new $O(e,t,n,a,l,u,c,d,o),t=1,s===!0&&(t|=24),s=Gi(3,null,null,t),e.current=s,s.stateNode=e,t=Ey(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},Ry(s),e}function ow(e){return e?(e=mu,e):mu}function lw(e,t,n,i,r,s){r=ow(r),i.context===null?i.context=r:i.pendingContext=r,i=Za(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Ja(e,i,t),n!==null&&(ki(n,e,t),mf(n,e,t))}function aT(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ax(e,t){aT(e,t),(e=e.alternate)&&aT(e,t)}function uw(e){if(e.tag===13||e.tag===31){var t=fl(e,67108864);t!==null&&ki(t,e,67108864),ax(e,67108864)}}function oT(e){if(e.tag===13||e.tag===31){var t=cr();t=dy(t);var n=fl(e,t);n!==null&&ki(n,e,t),ax(e,t)}}var Hu=!0;function tL(e,t,n,i){var r=he.T;he.T=null;var s=Ie.p;try{Ie.p=2,ox(e,t,n,i)}finally{Ie.p=s,he.T=r}}function eL(e,t,n,i){var r=he.T;he.T=null;var s=Ie.p;try{Ie.p=8,ox(e,t,n,i)}finally{Ie.p=s,he.T=r}}function ox(e,t,n,i){if(Hu){var r=ly(i);if(r===null)J_(e,t,i,Gp,n),lT(e,i);else if(iL(r,e,t,n,i))i.stopPropagation();else if(lT(e,i),t&4&&-1<nL.indexOf(e)){for(;r!==null;){var s=ku(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var a=Xo(s.pendingLanes);if(a!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;a;){var l=1<<31-ur(a);o.entanglements[1]|=l,a&=~l}Us(s),(Pe&6)===0&&(Ip=or()+500,Jf(0,!1))}}break;case 31:case 13:o=fl(s,2),o!==null&&ki(o,s,2),rm(),ax(s,2)}if(s=ly(i),s===null&&J_(e,t,i,Gp,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else J_(e,t,i,null,n)}}function ly(e){return e=gy(e),lx(e)}var Gp=null;function lx(e){if(Gp=null,e=qo(e),e!==null){var t=Hf(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=pT(t),e!==null)return e;e=null}else if(n===31){if(e=mT(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Gp=e,null}function cw(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gD()){case ST:return 2;case MT:return 8;case _p:case _D:return 32;case bT:return 268435456;default:return 32}default:return 32}}var uy=!1,$a=null,to=null,eo=null,Ff=new Map,zf=new Map,za=[],nL="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lT(e,t){switch(e){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":to=null;break;case"mouseover":case"mouseout":eo=null;break;case"pointerover":case"pointerout":Ff.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zf.delete(t.pointerId)}}function rf(e,t,n,i,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},t!==null&&(t=ku(t),t!==null&&uw(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function iL(e,t,n,i,r){switch(t){case"focusin":return $a=rf($a,e,t,n,i,r),!0;case"dragenter":return to=rf(to,e,t,n,i,r),!0;case"mouseover":return eo=rf(eo,e,t,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ff.set(s,rf(Ff.get(s)||null,e,t,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,zf.set(s,rf(zf.get(s)||null,e,t,n,i,r)),!0}return!1}function fw(e){var t=qo(e.target);if(t!==null){var n=Hf(t);if(n!==null){if(t=n.tag,t===13){if(t=pT(n),t!==null){e.blockedOn=t,NM(e.priority,function(){oT(n)});return}}else if(t===31){if(t=mT(n),t!==null){e.blockedOn=t,NM(e.priority,function(){oT(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ly(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);hv=i,n.target.dispatchEvent(i),hv=null}else return t=ku(n),t!==null&&uw(t),e.blockedOn=n,!1;t.shift()}return!0}function uT(e,t,n){dp(e)&&n.delete(t)}function rL(){uy=!1,$a!==null&&dp($a)&&($a=null),to!==null&&dp(to)&&(to=null),eo!==null&&dp(eo)&&(eo=null),Ff.forEach(uT),zf.forEach(uT)}function qd(e,t){e.blockedOn===t&&(e.blockedOn=null,uy||(uy=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,rL)))}var Zd=null;function cT(e){Zd!==e&&(Zd=e,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,function(){Zd===e&&(Zd=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(lx(i||n)===null)continue;break}var s=ku(n);s!==null&&(e.splice(t,3),t-=3,Rv(s,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function Vu(e){function t(l){return qd(l,e)}$a!==null&&qd($a,e),to!==null&&qd(to,e),eo!==null&&qd(eo,e),Ff.forEach(t),zf.forEach(t);for(var n=0;n<za.length;n++){var i=za[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<za.length&&(n=za[0],n.blockedOn===null);)fw(n),n.blockedOn===null&&za.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],s=n[i+1],a=r[Wi]||null;if(typeof s=="function")a||cT(n);else if(a){var o=null;if(s&&s.hasAttribute("formAction")){if(r=s,a=s[Wi]||null)o=a.formAction;else if(lx(r)!==null)continue}else o=a.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),cT(n)}}}function hw(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(a){return r=a})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function ux(e){this._internalRoot=e}om.prototype.render=ux.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(vt(409));var n=t.current,i=cr();lw(n,i,e,t,null,null)};om.prototype.unmount=ux.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lw(e.current,2,null,e,null,null),rm(),t[Gu]=null}};function om(e){this._internalRoot=e}om.prototype.unstable_scheduleHydration=function(e){if(e){var t=CT();e={blockedOn:null,target:e,priority:t};for(var n=0;n<za.length&&t!==0&&t<za[n].priority;n++);za.splice(n,0,e),n===0&&fw(e)}};var fT=hT.version;if(fT!=="19.3.1")throw Error(vt(527,fT,"19.3.1"));Ie.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(vt(188)):(e=Object.keys(e).join(","),Error(vt(268,e)));return e=sD(t),e=e!==null?gT(e):null,e=e===null?null:e.stateNode,e};var sL={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:he,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(sf=__REACT_DEVTOOLS_GLOBAL_HOOK__,!sf.isDisabled&&sf.supportsFiber))try{Vf=sf.inject(sL),lr=sf}catch{}var sf;lm.createRoot=function(e,t){if(!dT(e))throw Error(vt(299));var n=!1,i="",r=YE,s=qE,a=ZE;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=aw(e,1,!1,null,null,n,i,null,r,s,a,hw),e[Gu]=t.current,tx(e),new ux(t)};lm.hydrateRoot=function(e,t,n){if(!dT(e))throw Error(vt(299));var i=!1,r="",s=YE,a=qE,o=ZE,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=aw(e,1,!0,t,n??null,i,r,l,s,a,o,hw),t.context=ow(null),n=t.current,i=cr(),i=dy(i),r=Za(i),r.callback=null,Ja(n,r,i),n=i,t.current.lanes=n,kf(t,n),Us(t),e[Gu]=t.current,tx(e),new om(t)};lm.version="19.3.1"});var gw=ms((V5,mw)=>{"use strict";function pw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pw)}catch(e){console.error(e)}}pw(),mw.exports=dw()});var vw=ms(um=>{"use strict";var aL=Symbol.for("react.transitional.element"),oL=Symbol.for("react.fragment");function _w(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var r in t)r!=="key"&&(n[r]=t[r])}else n=t;return t=n.ref,{$$typeof:aL,type:e,key:i,ref:t!==void 0?t:null,props:n}}um.Fragment=oL;um.jsx=_w;um.jsxs=_w});var Ai=ms((W5,yw)=>{"use strict";yw.exports=vw()});var Yk=hn(gs()),Kl=hn(gw());var Os=hn(gs());var fx=hn(Ai()),lL=24e5,cx=Math.PI*2,xw={"top-right":{flipX:0,flipY:0,side:0},"top-left":{flipX:1,flipY:0,side:0},"bottom-right":{flipX:0,flipY:1,side:0},"bottom-left":{flipX:1,flipY:1,side:0},right:{flipX:0,flipY:0,side:1},left:{flipX:1,flipY:0,side:1}},uL=`#version 300 es
const vec2 corners[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
void main() {
  gl_Position = vec4(corners[gl_VertexID], 0.0, 1.0);
}`,cL=`#version 300 es
precision highp float;
uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uBlend;
uniform float uIntensity;
uniform float uSpread;
uniform float uDensity;
uniform float uSharpness;
uniform float uFalloff;
uniform float uGlow;
uniform float uSaturation;
uniform float uDust;
uniform float uOpacity;
uniform float uReveal;
uniform float uLight;
uniform vec3 uFrame;
uniform float uAim;
uniform vec3 uFocus;
uniform float uSway;
out vec4 fragColor;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = p - i;
  vec2 w = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, w.x), mix(c, d, w.x), w.y);
}

float shafts(float u, float t, float seed, float aa) {
  float sway = (0.4 * sin(t * 0.31 + seed) + 0.24 * sin(t * 0.17 + seed * 2.3)) * uSway;
  float n = 0.7 * noise(vec2(u + sway + seed, t * 0.3)) + 0.3 * noise(vec2(u * 2.4 + sway * 1.5 + seed * 1.7, t * 0.45 + 3.0));
  float width = mix(0.5, 0.1, uSharpness);
  float s = mix(smoothstep(0.5 - width, 0.5 + width, n), 0.5, aa);
  return mix(0.05, 1.0, s);
}

float motes(vec2 p, float cell, float t, float seed) {
  p += vec2(t * 0.021, -t * 0.013) + seed * 7.31;
  vec2 grid = p / cell;
  vec2 id = floor(grid);
  vec2 f = grid - id;
  float h = hash(id + seed);
  if (h > 0.5) return 0.0;
  vec2 center = 0.25 + 0.5 * vec2(hash(id + 1.7 + seed), hash(id + 3.1 + seed));
  center += 0.1 * vec2(sin(t * 0.7 + h * 31.0), cos(t * 0.6 + h * 23.0));
  float size = mix(0.035, 0.09, hash(id + 5.3 + seed));
  float edge = length(fwidth(grid)) * 0.7;
  float twinkle = 0.55 + 0.45 * sin(t * 1.9 + h * 41.0);
  return (1.0 - smoothstep(size - edge, size + edge, length(f - center))) * twinkle;
}

void main() {
  float aspect = uResolution.x / uResolution.y;
  vec2 q = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;
  if (uFrame.x > 0.5) q.x = -q.x;
  if (uFrame.y > 0.5) q.y = -q.y;
  vec2 source = uFrame.z > 0.5 ? vec2(aspect * 0.5 + 0.42, 0.3) : vec2(aspect * 0.5 + 0.1, 0.62);
  float heading = (uFrame.z > 0.5 ? 3.42 : -2.48) + uAim + 0.035 * sin(uTime * 0.21) * uSway;
  vec2 v = q - source;
  float r = length(v);
  float angle = mod(atan(v.y, v.x) - heading + 3.14159265, 6.28318531) - 3.14159265;
  float t = uTime;
  float u = angle * uDensity;
  float aa = smoothstep(0.12, 0.45, fwidth(u));
  float offset = uSpread * 0.22;
  float fanA = exp(-pow((angle + offset) / uSpread, 2.0) * 1.4);
  float fanB = exp(-pow((angle - offset) / (uSpread * 1.15), 2.0) * 1.4);
  float focus = 1.0 + uFocus.z * exp(-pow((angle - uFocus.x) / uFocus.y, 2.0));
  float lightA = fanA * shafts(u, t, 0.0, aa) * focus;
  float lightB = fanB * shafts(u * 0.83, t * 0.6, 17.0, aa) * focus;
  float reach = 1.0 / (1.0 + pow(r / 0.4, uFalloff));
  vec3 glowColor = mix(uColorA, uColorB, uBlend);
  vec3 light = (uColorA * lightA * (1.0 - uBlend) + uColorB * lightB * uBlend) * 2.0 * reach;
  light += glowColor * uGlow * exp(-pow(r / 0.4, 2.0));
  if (uDust > 0.0) {
    float sparkle = motes(q, 0.06, t, 0.0) + 0.7 * motes(q, 0.038, t * 0.8, 9.0);
    light += mix(glowColor, vec3(1.0), 0.6) * sparkle * (lightA + lightB) * reach * uDust * 2.5;
  }
  light *= uIntensity * (1.0 - smoothstep(uReveal * 2.6 - 0.45, uReveal * 2.6, r)) * smoothstep(0.0, 0.35, uReveal);
  float gray = dot(light, vec3(0.2126, 0.7152, 0.0722));
  light = max(mix(vec3(gray), light, uSaturation), 0.0);
  float peak = max(light.r, max(light.g, light.b));
  float grain = (fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) - 0.5) / 255.0;
  if (uLight > 0.5) {
    vec3 ink = pow(light / max(peak, 1e-4), vec3(2.0)) * 0.75;
    float alpha = clamp(pow(1.0 - exp(-peak * 2.6), 2.5) * 0.9 * uOpacity + grain, 0.0, 1.0);
    fragColor = vec4(pow(ink, vec3(1.0 / 2.2)) * alpha, alpha);
    return;
  }
  float mapped = 1.0 - exp(-peak);
  vec3 tone = light * (mapped / max(peak, 1e-4));
  tone = mix(tone, vec3(mapped), smoothstep(0.7, 1.0, mapped) * 0.55);
  vec3 shown = clamp(tone * uOpacity, 0.0, 1.0);
  float alpha = max(shown.r, max(shown.g, shown.b));
  vec3 color = clamp(shown * alpha + grain, 0.0, 1.0);
  fragColor = vec4(min(color, vec3(alpha)), alpha);
}`,Yi=(e,t,n)=>Math.min(n,Math.max(t,e)),fL=e=>((e+Math.PI)%cx+cx)%cx-Math.PI,Sw=e=>{let t=String(e||"").trim(),n=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(t);if(n){let r=n[1].length===3?n[1].replace(/./g,s=>s+s):n[1];return[0,2,4].map(s=>parseInt(r.slice(s,s+2),16)/255)}let i=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(t);return i?[i[1],i[2],i[3]].map(r=>Yi(parseFloat(r)/255,0,1)):[1,1,1]},hL=(e,t)=>({source:e.side?[t*.5+.42,.3]:[t*.5+.1,.62],heading:e.side?3.42:-2.48}),Mw=(e,t,n)=>{let i=e.createShader(t);return i?(e.shaderSource(i,n),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS)?i:(console.error(e.getShaderInfoLog(i)),e.deleteShader(i),null)):null},dL=e=>{let t=Mw(e,e.VERTEX_SHADER,uL),n=Mw(e,e.FRAGMENT_SHADER,cL),i=t&&n?e.createProgram():null;if(!t||!n||!i)return t&&e.deleteShader(t),n&&e.deleteShader(n),null;if(e.attachShader(i,t),e.attachShader(i,n),e.linkProgram(i),e.deleteShader(t),e.deleteShader(n),!e.getProgramParameter(i,e.LINK_STATUS))return console.error(e.getProgramInfoLog(i)),e.deleteProgram(i),null;let r={},s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let a=0;a<s;a++){let o=e.getActiveUniform(i,a);o&&(r[o.name]=e.getUniformLocation(i,o.name))}return{program:i,uniforms:r}},pL=({rayColor1:e="#FFC46B",rayColor2:t="#96c8ff",blend:n=.6,origin:i="top-right",speed:r=2.5,intensity:s=2,spread:a=2,density:o=5,sharpness:l=.5,tilt:u=0,falloff:c=1.6,glow:d=1,saturation:f=1,dust:h=0,followMouse:g=!0,mouseInfluence:_=.5,intro:m=!0,lightMode:p=!1,opacity:y=1,maxDevicePixelRatio:S=2,className:x="",style:E})=>{let R=(0,Os.useRef)(null),A=(0,Os.useRef)(null),C=(0,Os.useRef)(null),[v,M]=(0,Os.useState)(0),P={colorA:Sw(e),colorB:Sw(t),blend:Yi(n,0,1),frame:xw[i]??xw["top-right"],speed:Math.max(0,r)*.4,intensity:Math.max(0,s)*.75,spread:Yi(a,.1,8)*.225,density:Yi(o,1,40),sharpness:Yi(l,0,1),tilt:Yi(u,-180,180)*Math.PI/180,falloff:Yi(c,.2,6),glow:Math.max(0,d)*1.2,saturation:Math.max(0,f),dust:Yi(h,0,1),followMouse:g,mouseInfluence:Yi(_,0,1),intro:m,light:p,opacity:Yi(y,0,1),maxRatio:Yi(S,.5,3)},L=(0,Os.useRef)(P);return L.current=P,(0,Os.useEffect)(()=>{C.current?.()}),(0,Os.useEffect)(()=>{let Y=R.current,V=A.current;if(!Y||!V)return;let w=V.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"high-performance"}),Z=w?dL(w):null;if(!w||!Z)return;let tt=window.matchMedia("(prefers-reduced-motion: reduce)").matches,I=w.createVertexArray(),ct={width:1,height:1},N={x:0,y:0,inside:!1},ht={value:0,velocity:0},St={angle:0,strength:0},W=Math.random()*100,Rt=L.current.intro&&!tt&&v===0?0:1,xt=0,nt=0,ot=!0,wt=document.visibilityState!=="hidden",Bt=!1,zt=!1,Xt=()=>{let T=L.current,B=Y.getBoundingClientRect(),J=Math.max(1,B.width),Q=Math.max(1,B.height),$=Math.min(window.devicePixelRatio||1,T.maxRatio,Math.sqrt(lL/(J*Q))),Ot=Math.max(1,Math.round(J*$)),pt=Math.max(1,Math.round(Q*$));(V.width!==Ot||V.height!==pt)&&(V.width=Ot,V.height=pt),ct.width=J,ct.height=Q},Vt=()=>{zt=!0,Et()},U=T=>{let B=(N.x-ct.width/2)/ct.height,J=(ct.height/2-N.y)/ct.height;T.frame.flipX&&(B=-B),T.frame.flipY&&(J=-J);let{source:Q,heading:$}=hL(T.frame,ct.width/ct.height);return fL(Math.atan2(J-Q[1],B-Q[0])-$-T.tilt)},Ft=T=>{if(xt=0,zt&&(zt=!1,Xt()),Bt)return;let B=L.current,J=Yi((T-nt)/1e3||0,0,.05);nt=Math.max(nt,T),W+=J*B.speed*(tt?.3:1),Rt<1&&(Rt=Math.min(1,Rt+J/1.6));let Q=B.followMouse&&N.inside&&!tt,$=Q?U(B):0,Ot=Q?Yi($,-B.spread,B.spread)*B.mouseInfluence:0,pt=Q?B.mouseInfluence:0,Ht=1-Math.exp(-J*6);Q&&(St.angle+=(Yi($-ht.value,-B.spread*1.5,B.spread*1.5)-St.angle)*Ht),St.strength+=(pt-St.strength)*Ht;let Dt=18,bt=2*Math.sqrt(Dt);ht.velocity+=((Ot-ht.value)*Dt-ht.velocity*bt)*J,ht.value+=ht.velocity*J,w.viewport(0,0,V.width,V.height),w.useProgram(Z.program),w.bindVertexArray(I);let mt=Z.uniforms;w.uniform2f(mt.uResolution,V.width,V.height),w.uniform1f(mt.uTime,W),w.uniform3f(mt.uColorA,B.colorA[0],B.colorA[1],B.colorA[2]),w.uniform3f(mt.uColorB,B.colorB[0],B.colorB[1],B.colorB[2]),w.uniform1f(mt.uBlend,B.blend),w.uniform1f(mt.uIntensity,B.intensity),w.uniform1f(mt.uSpread,B.spread),w.uniform1f(mt.uDensity,B.density),w.uniform1f(mt.uSharpness,B.sharpness),w.uniform1f(mt.uFalloff,B.falloff),w.uniform1f(mt.uGlow,B.glow),w.uniform1f(mt.uSaturation,B.saturation),w.uniform1f(mt.uDust,B.dust),w.uniform1f(mt.uOpacity,B.opacity),w.uniform1f(mt.uReveal,1-Math.pow(1-Rt,3)),w.uniform1f(mt.uLight,B.light?1:0),w.uniform3f(mt.uFrame,B.frame.flipX,B.frame.flipY,B.frame.side),w.uniform1f(mt.uAim,B.tilt+ht.value),w.uniform3f(mt.uFocus,St.angle,Math.max(.06,B.spread*.25),St.strength*1.4),w.uniform1f(mt.uSway,tt?0:1),w.drawArrays(w.TRIANGLES,0,3);let k=Math.abs(Ot-ht.value)>1e-4||Math.abs(ht.velocity)>1e-4||Math.abs(pt-St.strength)>.001;(B.speed>0&&!tt||Rt<1||k)&&ot&&wt&&(xt=requestAnimationFrame(Ft))},Et=()=>{xt||Bt||!ot||!wt||(nt=performance.now(),xt=requestAnimationFrame(Ft))};C.current=()=>{Vt(),Et()};let Mt=T=>{let B=Y.getBoundingClientRect();N.x=T.clientX-B.left,N.y=T.clientY-B.top,N.inside=T.clientX>=B.left&&T.clientX<=B.right&&T.clientY>=B.top&&T.clientY<=B.bottom,Et()},z=()=>{N.inside=!1,Et()},Qt=T=>{T.pointerType!=="mouse"&&z()};window.addEventListener("pointermove",Mt,{passive:!0}),window.addEventListener("pointerup",Qt,{passive:!0}),window.addEventListener("pointercancel",Qt,{passive:!0}),document.documentElement.addEventListener("pointerleave",z);let Nt=T=>{T.preventDefault(),Bt=!0,cancelAnimationFrame(xt),xt=0},It=()=>M(T=>T+1);V.addEventListener("webglcontextlost",Nt),V.addEventListener("webglcontextrestored",It);let ie=new ResizeObserver(()=>{Vt(),Et()});ie.observe(Y);let Gt=new IntersectionObserver(T=>{ot=T.some(B=>B.isIntersecting),Et()});Gt.observe(Y);let D=()=>{wt=document.visibilityState!=="hidden",Et()};return document.addEventListener("visibilitychange",D),Vt(),Et(),()=>{cancelAnimationFrame(xt),C.current=null,ie.disconnect(),Gt.disconnect(),window.removeEventListener("pointermove",Mt),window.removeEventListener("pointerup",Qt),window.removeEventListener("pointercancel",Qt),document.documentElement.removeEventListener("pointerleave",z),document.removeEventListener("visibilitychange",D),V.removeEventListener("webglcontextlost",Nt),V.removeEventListener("webglcontextrestored",It),w.isContextLost()||(w.deleteVertexArray(I),w.deleteProgram(Z.program))}},[v]),(0,fx.jsx)("div",{ref:R,className:`side-rays${x?` ${x}`:""}`,style:E,children:(0,fx.jsx)("canvas",{ref:A,className:"side-rays__canvas","aria-hidden":"true"})})},bw=pL;var Pi=hn(gs());function ca(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ow(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var Ki={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ih={duration:.5,overwrite:!1,delay:0},wx,ti,an,Vr=1e8,qe=1/Vr,yx=Math.PI*2,mL=yx/4,gL=0,Lw=Math.sqrt,_L=Math.cos,vL=Math.sin,Nn=function(t){return typeof t=="string"},mn=function(t){return typeof t=="function"},ha=function(t){return typeof t=="number"},Sm=function(t){return typeof t>"u"},Ps=function(t){return typeof t=="object"},Ji=function(t){return t!==!1},Rx=function(){return typeof window<"u"},cm=function(t){return mn(t)||Nn(t)},Nw=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},li=Array.isArray,yL=/random\([^)]+\)/g,xL=/,\s*/g,Tw=/(?:-?\.?\d|\.)+/gi,Cx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,gl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,hx=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Dx=/[+-]=-?[.\d]+/,SL=/[^,'"\[\]\s]+/gi,ML=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,cn,Ls,xx,Ux,pr={},pm={},Pw,Iw=function(t){return(pm=Ku(t,pr))&&ui},Mm=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},rh=function(t,n){return!n&&console.warn(t)},Bw=function(t,n){return t&&(pr[t]=n)&&pm&&(pm[t]=n)||pr},sh=function(){return 0},bL={suppressEvents:!0,isStart:!0,kill:!1},fm={suppressEvents:!0,kill:!1},TL={suppressEvents:!0},Ox={},co=[],Sx={},Fw,qi={},dx={},Ew=30,hm=[],Lx="",Nx=function(t){var n=t[0],i,r;if(Ps(n)||mn(n)||(t=[t]),!(i=(n._gsap||{}).harness)){for(r=hm.length;r--&&!hm[r].targetTest(n););i=hm[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Fx(t[r],i)))||t.splice(r,1);return t},fo=function(t){return t._gsap||Nx(Gr(t))[0]._gsap},Px=function(t,n,i){return(i=t[n])&&mn(i)?t[n]():Sm(i)&&t.getAttribute&&t.getAttribute(n)||i},wi=function(t,n){return(t=t.split(",")).forEach(n)||t},gn=function(t){return Math.round(t*1e5)/1e5||0},un=function(t){return Math.round(t*1e7)/1e7||0},_l=function(t,n){var i=n.charAt(0),r=parseFloat(n.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},EL=function(t,n){for(var i=n.length,r=0;t.indexOf(n[r])<0&&++r<i;);return r<i},mm=function(){var t=co.length,n=co.slice(0),i,r;for(Sx={},co.length=0,i=0;i<t;i++)r=n[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ix=function(t){return!!(t._initted||t._startAt||t.add)},zw=function(t,n,i,r){co.length&&!ti&&mm(),t.render(n,i,r||!!(ti&&n<0&&Ix(t))),co.length&&!ti&&mm()},Hw=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(SL).length<2?n:Nn(t)?t.trim():t},Vw=function(t){return t},mr=function(t,n){for(var i in n)i in t||(t[i]=n[i]);return t},AL=function(t){return function(n,i){for(var r in i)r in n||r==="duration"&&t||r==="ease"||(n[r]=i[r])}},Ku=function(t,n){for(var i in n)t[i]=n[i];return t},Aw=function e(t,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Ps(n[i])?e(t[i]||(t[i]={}),n[i]):n[i]);return t},gm=function(t,n){var i={},r;for(r in t)r in n||(i[r]=t[r]);return i},th=function(t){var n=t.parent||cn,i=t.keyframes?AL(li(t.keyframes)):mr;if(Ji(t.inherit))for(;n;)i(t,n.vars.defaults),n=n.parent||n._dp;return t},wL=function(t,n){for(var i=t.length,r=i===n.length;r&&i--&&t[i]===n[i];);return i<0},Gw=function(t,n,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var a=t[r],o;if(s)for(o=n[s];a&&a[s]>o;)a=a._prev;return a?(n._next=a._next,a._next=n):(n._next=t[i],t[i]=n),n._next?n._next._prev=n:t[r]=n,n._prev=a,n.parent=n._dp=t,n},bm=function(t,n,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=n._prev,a=n._next;s?s._next=a:t[i]===n&&(t[i]=a),a?a._prev=s:t[r]===n&&(t[r]=s),n._next=n._prev=n.parent=null},ho=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},dl=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},RL=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},Mx=function(t,n,i,r){return t._startAt&&(ti?t._startAt.revert(fm):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,r))},CL=function e(t){return!t||t._ts&&e(t.parent)},ww=function(t){return t._repeat?Qu(t._tTime,t=t.duration()+t._rDelay)*t:0},Qu=function(t,n){var i=Math.floor(t=un(t/n));return t&&i===t?i-1:i},_m=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Tm=function(t){return t._end=un(t._start+(t._tDur/Math.abs(t._ts||t._rts||qe)||0))},Em=function(t,n){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=un(i._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),Tm(t),i._dirty||dl(i,t)),t},kw=function(t,n){var i;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(i=_m(t.rawTime(),n),(!n._dur||uh(0,n.totalDuration(),i)-n._tTime>qe)&&n.render(i,!0)),dl(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-qe}},Ns=function(t,n,i,r){return n.parent&&ho(n),n._start=un((ha(i)?i:!i&&vm(n)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:i||t!==cn?Hr(t,i,n):t._time)+n._delay),n._end=un(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),Gw(t,n,"_first","_last",t._sort?"_start":0),vm(n)||(t._recent=n),r||kw(t,n),t._ts<0&&Em(t,t._tTime),t},Xw=function(t,n){return(pr.ScrollTrigger||Mm("scrollTrigger",n))&&pr.ScrollTrigger.create(n,t)},Ww=function(t,n,i,r,s){if(Vx(t,n,s),!t._initted)return 1;if(!i&&t._pt&&!ti&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Fw!==Zi.frame)return co.push(t),t._lazy=[s,r],1},DL=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},vm=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},UL=function(t,n,i,r){var s=t.ratio,a=n<0||!n&&(!t._start&&DL(t)&&!(!t._initted&&vm(t))||(t._ts<0||t._dp._ts<0)&&!vm(t))?0:1,o=t._rDelay,l=0,u,c,d;if(o&&t._repeat&&(l=uh(0,t._tDur,n),c=Qu(l,o),t._yoyo&&c&1&&(a=1-a),c!==Qu(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||ti||r||t._zTime===qe||!n&&t._zTime){if(!t._initted&&Ww(t,n,r,i,l))return;for(d=t._zTime,t._zTime=n||(i?qe:0),i||(i=n&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,u=t._pt;u;)u.r(a,u.d),u=u._next;n<0&&Mx(t,n,i,!0),t._onUpdate&&!i&&dr(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&dr(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===a&&(a&&ho(t,1),!i&&!ti&&(dr(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},OL=function(t,n,i){var r;if(i>n)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},ju=function(t,n,i,r){var s=t._repeat,a=un(n)||0,o=t._tTime/t._tDur;return o&&!r&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:un(a*(s+1)+t._rDelay*s):a,o>0&&!r&&Em(t,t._tTime=t._tDur*o),t.parent&&Tm(t),i||dl(t.parent,t),t},Rw=function(t){return t instanceof oi?dl(t):ju(t,t._dur)},LL={_start:0,endTime:sh,totalDuration:sh},Hr=function e(t,n,i){var r=t.labels,s=t._recent||LL,a=t.duration()>=Vr?s.endTime(!1):t._dur,o,l,u;return Nn(n)&&(isNaN(n)||n in r)?(l=n.charAt(0),u=n.substr(-1)==="%",o=n.indexOf("="),l==="<"||l===">"?(o>=0&&(n=n.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(o<0?s:i).totalDuration()/100:1)):o<0?(n in r||(r[n]=a),r[n]):(l=parseFloat(n.charAt(o-1)+n.substr(o+1)),u&&i&&(l=l/100*(li(i)?i[0]:i).totalDuration()),o>1?e(t,n.substr(0,o-1),i)+l:a+l)):n==null?a:+n},eh=function(t,n,i){var r=ha(n[1]),s=(r?2:1)+(t<2?0:1),a=n[s],o,l;if(r&&(a.duration=n[1]),a.parent=i,t){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ji(l.vars.inherit)&&l.parent;a.immediateRender=Ji(o.immediateRender),t<2?a.runBackwards=1:a.startAt=n[s-1]}return new Sn(n[0],a,n[s+1])},po=function(t,n){return t||t===0?n(t):n},uh=function(t,n,i){return i<t?t:i>n?n:i},ei=function(t,n){return!Nn(t)||!(n=ML.exec(t))?"":n[1]},NL=function(t,n,i){return po(i,function(r){return uh(t,n,r)})},bx=[].slice,Yw=function(t,n){return t&&Ps(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&Ps(t[0]))&&!t.nodeType&&t!==Ls},PL=function(t,n,i){return i===void 0&&(i=[]),t.forEach(function(r){var s;return Nn(r)&&!n||Yw(r,1)?(s=i).push.apply(s,Gr(r)):i.push(r)})||i},Gr=function(t,n,i){return an&&!n&&an.selector?an.selector(t):Nn(t)&&!i&&(xx||!$u())?bx.call((n||Ux).querySelectorAll(t),0):li(t)?PL(t,i):Yw(t)?bx.call(t,0):t?[t]:[]},Tx=function(t){return t=Gr(t)[0]||rh("Invalid scope")||{},function(n){var i=t.current||t.nativeElement||t;return Gr(n,i.querySelectorAll?i:i===t?rh("Invalid scope")||Ux.createElement("div"):t)}},qw=function(t){return t.sort(function(){return .5-Math.random()})},Zw=function(t){if(mn(t))return t;var n=Ps(t)?t:{each:t},i=pl(n.ease),r=n.from||0,s=parseFloat(n.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,u=n.axis,c=r,d=r;return Nn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(c=r[0],d=r[1]),function(f,h,g){var _=(g||n).length,m=a[_],p,y,S,x,E,R,A,C,v;if(!m){if(v=n.grid==="auto"?0:(n.grid||[1,Vr])[1],!v){for(A=-Vr;A<(A=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=a[_]=[],p=l?Math.min(v,_)*c-.5:r%v,y=v===Vr?0:l?_*d/v-.5:r/v|0,A=0,C=Vr,R=0;R<_;R++)S=R%v-p,x=y-(R/v|0),m[R]=E=u?Math.abs(u==="y"?x:S):Lw(S*S+x*x),E>A&&(A=E),E<C&&(C=E);r==="random"&&qw(m),m.max=A-C,m.min=C,m.v=_=(parseFloat(n.amount)||parseFloat(n.each)*(v>_?_-1:u?u==="y"?_/v:v:Math.max(v,_/v))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=ei(n.amount||n.each)||0,i=i&&_<0?ZL(i):i}return _=(m[f]-m.min)/m.max||0,un(m.b+(i?i(_):_)*m.v)+m.u}},Ex=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=un(Math.round(parseFloat(i)/t)*t*n);return(r-r%1)/n+(ha(i)?0:ei(i))}},Jw=function(t,n){var i=li(t),r,s;return!i&&Ps(t)&&(r=i=t.radius||Vr,t.values?(t=Gr(t.values),(s=!ha(t[0]))&&(r*=r)):t=Ex(t.increment)),po(n,i?mn(t)?function(a){return s=t(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),u=Vr,c=0,d=t.length,f,h;d--;)s?(f=t[d].x-o,h=t[d].y-l,f=f*f+h*h):f=Math.abs(t[d]-o),f<u&&(u=f,c=d);return c=!r||u<=r?t[c]:a,s||c===a||ha(a)?c:c+ei(a)}:Ex(t))},Kw=function(t,n,i,r){return po(li(t)?!n:i===!0?!!(i=0):!r,function(){return li(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(n-t+i*.99))/i)*i*r)/r})},IL=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return function(r){return n.reduce(function(s,a){return a(s)},r)}},BL=function(t,n){return function(i){return t(parseFloat(i))+(n||ei(i))}},FL=function(t,n,i){return jw(t,n,0,1,i)},Qw=function(t,n,i){return po(i,function(r){return t[~~n(r)]})},zL=function e(t,n,i){var r=n-t;return li(t)?Qw(t,e(0,t.length),n):po(i,function(s){return(r+(s-t)%r)%r+t})},HL=function e(t,n,i){var r=n-t,s=r*2;return li(t)?Qw(t,e(0,t.length-1),n):po(i,function(a){return a=(s+(a-t)%s)%s||0,t+(a>r?s-a:a)})},tc=function(t){return t.replace(yL,function(n){var i=n.indexOf("[")+1,r=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(xL);return Kw(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},jw=function(t,n,i,r,s){var a=n-t,o=r-i;return po(s,function(l){return i+((l-t)/a*o||0)})},VL=function e(t,n,i,r){var s=isNaN(t+n)?0:function(h){return(1-h)*t+h*n};if(!s){var a=Nn(t),o={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),a)t={p:t},n={p:n};else if(li(t)&&!li(n)){for(c=[],d=t.length,f=d-2,u=1;u<d;u++)c.push(e(t[u-1],t[u]));d--,s=function(g){g*=d;var _=Math.min(f,~~g);return c[_](g-_)},i=n}else r||(t=Ku(li(t)?[]:{},t));if(!c){for(l in n)zx.call(o,t,l,"get",n[l]);s=function(g){return Xx(g,o)||(a?t.p:t)}}}return po(i,s)},Cw=function(t,n,i){var r=t.labels,s=Vr,a,o,l;for(a in r)o=r[a]-n,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},dr=function(t,n,i){var r=t.vars,s=r[n],a=an,o=t._ctx,l,u,c;if(s)return l=r[n+"Params"],u=r.callbackScope||t,i&&co.length&&mm(),o&&(an=o),c=l?s.apply(u,l):s.call(u),an=a,c},jf=function(t){return ho(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ti),t.progress()<1&&dr(t,"onInterrupt"),t},Ju,$w=[],tR=function(t){if(t)if(t=!t.name&&t.default||t,Rx()||t.headless){var n=t.name,i=mn(t),r=n&&!i&&t.init?function(){this._props=[]}:t,s={init:sh,render:Xx,add:zx,kill:rN,modifier:iN,rawVars:0},a={targetTest:0,get:0,getSetter:Am,aliases:{},register:0};if($u(),t!==r){if(qi[n])return;mr(r,mr(gm(t,s),a)),Ku(r.prototype,Ku(s,gm(t,a))),qi[r.prop=n]=r,t.targetTest&&(hm.push(r),Ox[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Bw(n,r),t.register&&t.register(ui,r,Ri)}else $w.push(t)},Ke=255,$f={aqua:[0,Ke,Ke],lime:[0,Ke,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ke],navy:[0,0,128],white:[Ke,Ke,Ke],olive:[128,128,0],yellow:[Ke,Ke,0],orange:[Ke,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ke,0,0],pink:[Ke,192,203],cyan:[0,Ke,Ke],transparent:[Ke,Ke,Ke,0]},px=function(t,n,i){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(i-n)*t*6:t<.5?i:t*3<2?n+(i-n)*(2/3-t)*6:n)*Ke+.5|0},eR=function(t,n,i){var r=t?ha(t)?[t>>16,t>>8&Ke,t&Ke]:0:$f.black,s,a,o,l,u,c,d,f,h,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),$f[t])r=$f[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&Ke,r&Ke,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&Ke,t&Ke]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(Tw),!n)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,a=c<=.5?c*(u+1):c+u-c*u,s=c*2-a,r.length>3&&(r[3]*=1),r[0]=px(l+1/3,s,a),r[1]=px(l,s,a),r[2]=px(l-1/3,s,a);else if(~t.indexOf("="))return r=t.match(Cx),i&&r.length<4&&(r[3]=1),r}else r=t.match(Tw)||$f.transparent;r=r.map(Number)}return n&&!g&&(s=r[0]/Ke,a=r[1]/Ke,o=r[2]/Ke,d=Math.max(s,a,o),f=Math.min(s,a,o),c=(d+f)/2,d===f?l=u=0:(h=d-f,u=c>.5?h/(2-d-f):h/(d+f),l=d===s?(a-o)/h+(a<o?6:0):d===a?(o-s)/h+2:(s-a)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},nR=function(t){var n=[],i=[],r=-1;return t.split(fa).forEach(function(s){var a=s.match(gl)||[];n.push.apply(n,a),i.push(r+=a.length+1)}),n.c=i,n},Dw=function(t,n,i){var r="",s=(t+r).match(fa),a=n?"hsla(":"rgba(",o=0,l,u,c,d;if(!s)return t;if(s=s.map(function(f){return(f=eR(f,n,1))&&a+(n?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=nR(t),l=i.c,l.join(r)!==c.c.join(r)))for(u=t.replace(fa,"1").split(gl),d=u.length-1;o<d;o++)r+=u[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=t.split(fa),d=u.length-1;o<d;o++)r+=u[o]+s[o];return r+u[d]},fa=(function(){var e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in $f)e+="|"+t+"\\b";return new RegExp(e+")","gi")})(),GL=/hsl[a]?\(/,Bx=function(t){var n=t.join(" "),i;if(fa.lastIndex=0,fa.test(n))return i=GL.test(n),t[1]=Dw(t[1],i),t[0]=Dw(t[0],i,nR(t[1])),!0},ah,Zi=(function(){var e=Date.now,t=500,n=33,i=e(),r=i,s=1e3/240,a=s,o=[],l,u,c,d,f,h,g=function _(m){var p=e()-r,y=m===!0,S,x,E,R;if((p>t||p<0)&&(i+=p-n),r+=p,E=r-i,S=E-a,(S>0||y)&&(R=++d.frame,f=E-d.time*1e3,d.time=E=E/1e3,a+=S+(S>=s?0:s-S),x=1),y||(l=u(_)),x)for(h=0;h<o.length;h++)o[h](E,f,R,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Pw&&(!xx&&Rx()&&(Ls=xx=window,Ux=Ls.document||{},pr.gsap=ui,(Ls.gsapVersions||(Ls.gsapVersions=[])).push(ui.version),Iw(pm||Ls.GreenSockGlobals||!Ls.gsap&&Ls||{}),$w.forEach(tR)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,a-d.time*1e3+1|0)},ah=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),ah=0,u=sh},lagSmoothing:function(m,p){t=m||1/0,n=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,p,y){var S=p?function(x,E,R,A){m(x,E,R,A),d.remove(S)}:m;return d.remove(m),o[y?"unshift":"push"](S),$u(),S},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&h>=p&&h--},_listeners:o},d})(),$u=function(){return!ah&&Zi.wake()},Ce={},kL=/^[\d.\-M][\d.\-,\s]/,XL=/["']/g,WL=function(t){for(var n={},i=t.substr(1,t.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,u;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,u=l.substr(0,o),n[r]=isNaN(u)?u.replace(XL,"").trim():+u,r=l.substr(o+1).trim();return n},YL=function(t){var n=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",n);return t.substring(n,~r&&r<i?t.indexOf(")",i+1):i)},qL=function(t){var n=(t+"").split("("),i=Ce[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[WL(n[1])]:YL(t).split(",").map(Hw)):Ce._CE&&kL.test(t)?Ce._CE("",t):i},ZL=function(t){return function(n){return 1-t(1-n)}},pl=function(t,n){return t&&(mn(t)?t:Ce[t]||qL(t))||n},vl=function(t,n,i,r){i===void 0&&(i=function(l){return 1-n(1-l)}),r===void 0&&(r=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var s={easeIn:n,easeOut:i,easeInOut:r},a;return wi(t,function(o){Ce[o]=pr[o]=s,Ce[a=o.toLowerCase()]=i;for(var l in s)Ce[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ce[o+"."+l]=s[l]}),s},iR=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},mx=function e(t,n,i){var r=n>=1?n:1,s=(i||(t?.3:.45))/(n<1?n:1),a=s/yx*(Math.asin(1/r)||0),o=function(c){return c===1?1:r*Math.pow(2,-10*c)*vL((c-a)*s)+1},l=t==="out"?o:t==="in"?function(u){return 1-o(1-u)}:iR(o);return s=yx/s,l.config=function(u,c){return e(t,u,c)},l},gx=function e(t,n){n===void 0&&(n=1.70158);var i=function(a){return a?--a*a*((n+1)*a+n)+1:0},r=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:iR(i);return r.config=function(s){return e(t,s)},r};wi("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,t){var n=t<5?t+1:t;vl(e+",Power"+(n-1),t?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});Ce.Linear.easeNone=Ce.none=Ce.Linear.easeIn;vl("Elastic",mx("in"),mx("out"),mx());(function(e,t){var n=1/t,i=2*n,r=2.5*n,s=function(o){return o<n?e*o*o:o<i?e*Math.pow(o-1.5/t,2)+.75:o<r?e*(o-=2.25/t)*o+.9375:e*Math.pow(o-2.625/t,2)+.984375};vl("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);vl("Expo",function(e){return Math.pow(2,10*(e-1))*e+e*e*e*e*e*e*(1-e)});vl("Circ",function(e){return-(Lw(1-e*e)-1)});vl("Sine",function(e){return e===1?1:-_L(e*mL)+1});vl("Back",gx("in"),gx("out"),gx());Ce.SteppedEase=Ce.steps=pr.SteppedEase={config:function(t,n){t===void 0&&(t=1);var i=1/t,r=t+(n?0:1),s=n?1:0,a=1-qe;return function(o){return((r*uh(0,a,o)|0)+s)*i}}};ih.ease=Ce["quad.out"];wi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return Lx+=e+","+e+"Params,"});var Fx=function(t,n){this.id=gL++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:Px,this.set=n?n.getSetter:Am},oh=(function(){function e(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,ju(this,+n.duration,1,1),this.data=n.data,an&&(this._ctx=an,an.data.push(this)),ah||Zi.wake()}var t=e.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,ju(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if($u(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Em(this,i),!s._dp||s.parent||kw(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ns(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===qe||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),zw(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+ww(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+ww(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Qu(this._tTime,s)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-qe?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?_m(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+i||0,this._ts=this._ps||i===-qe?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(uh(-Math.abs(this._delay),o,s),r!==!1),Tm(this),RL(this)},t.paused=function(i){if(!arguments.length)return this._ps;if(this._ps!==i)if(this._ps=i,i)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{$u(),this._ts=this._rts;var r=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==qe,a;if(s)for(this._tTime-=qe,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=r+qe){s=!1;break}a=a._next}this.totalTime(r,s)}return this},t.startTime=function(i){if(arguments.length){this._start=un(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ns(r,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Ji(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_m(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=TL);var r=ti;return ti=i,Ix(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ti=r,this},t.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Rw(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Rw(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(Hr(this,i),Ji(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Ji(r)),this._dur||(this._zTime=-qe),this},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-qe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-qe,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-qe)},t.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},t.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=mn(i)?i:Vw,l=function(){var c=r.then;r.then=null,s&&s(),mn(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),a(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){jf(this)},e})();mr(oh.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-qe,_prom:0,_ps:!1,_rts:1});var oi=(function(e){Ow(t,e);function t(i,r){var s;return i===void 0&&(i={}),s=e.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Ji(i.sortChildren),cn&&Ns(i.parent||cn,ca(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Xw(ca(s),i.scrollTrigger),s}var n=t.prototype;return n.to=function(r,s,a){return eh(0,arguments,this),this},n.from=function(r,s,a){return eh(1,arguments,this),this},n.fromTo=function(r,s,a,o){return eh(2,arguments,this),this},n.set=function(r,s,a){return s.duration=0,s.parent=this,th(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Sn(r,s,Hr(this,a),1),this},n.call=function(r,s,a){return Ns(this,Sn.delayedCall(0,r,s),a)},n.staggerTo=function(r,s,a,o,l,u,c){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=u,a.onCompleteParams=c,a.parent=this,new Sn(r,a,Hr(this,l)),this},n.staggerFrom=function(r,s,a,o,l,u,c){return a.runBackwards=1,th(a).immediateRender=Ji(a.immediateRender),this.staggerTo(r,s,a,o,l,u,c)},n.staggerFromTo=function(r,s,a,o,l,u,c,d){return o.startAt=a,th(o).immediateRender=Ji(o.immediateRender),this.staggerTo(r,s,o,l,u,c,d)},n.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:un(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,h,g,_,m,p,y,S,x,E,R,A;if(this!==cn&&c>l&&r>=0&&(c=l),c!==this._tTime||a||d){if(o!==this._time&&u&&(c+=this._time-o,r+=this._time-o),f=c,x=this._start,S=this._ts,p=!S,d&&(u||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(f=un(c%m),c===l?(_=this._repeat,f=u):(E=un(c/m),_=~~E,_&&_===E&&(f=u,_--),f>u&&(f=u)),E=Qu(this._tTime,m),!o&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),R&&_&1&&(f=u-f,A=1),_!==E&&!this._lock){var C=R&&E&1,v=C===(R&&_&1);if(_<E&&(C=!C),o=C?0:c%u?u:c,this._lock=1,this.render(o||(A?0:un(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&dr(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,E=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,v&&(this._lock=2,o=C?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=OL(this,un(o),un(f)),y&&(c-=f-(f=y._start))),this._tTime=c,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&c&&u&&!s&&!E&&(dr(this,"onStart"),this._tTime!==c))return this;if(f>=o&&r>=0)for(h=this._first;h;){if(g=h._next,(h._act||f>=h._start)&&h._ts&&y!==h){if(h.parent!==this)return this.render(r,s,a);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,a),f!==this._time||!this._ts&&!p){y=0,g&&(c+=this._zTime=-qe);break}}h=g}else{h=this._last;for(var M=r<0?r:f;h;){if(g=h._prev,(h._act||M<=h._end)&&h._ts&&y!==h){if(h.parent!==this)return this.render(r,s,a);if(h.render(h._ts>0?(M-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(M-h._start)*h._ts,s,a||ti&&Ix(h)),f!==this._time||!this._ts&&!p){y=0,g&&(c+=this._zTime=M?-qe:qe);break}}h=g}}if(y&&!s&&(this.pause(),y.render(f>=o?0:-qe)._zTime=f>=o?1:-1,this._ts))return this._start=x,Tm(this),this.render(r,s,a);this._onUpdate&&!s&&dr(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&o)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&ho(this,1),!s&&!(r<0&&!o)&&(c||o||!l)&&(dr(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,s){var a=this;if(ha(s)||(s=Hr(this,s,r)),!(r instanceof oh)){if(li(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Nn(r))return this.addLabel(r,s);if(mn(r))r=Sn.delayedCall(0,r);else return this}return this!==r?Ns(this,r,s):this},n.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Vr);for(var l=[],u=this._first;u;)u._start>=o&&(u instanceof Sn?s&&l.push(u):(a&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,a)))),u=u._next;return l},n.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},n.remove=function(r){return Nn(r)?this.removeLabel(r):mn(r)?this.killTweensOf(r):(r.parent===this&&bm(this,r),r===this._recent&&(this._recent=this._last),dl(this))},n.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=un(Zi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),e.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},n.addLabel=function(r,s){return this.labels[r]=Hr(this,s),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,s,a){var o=Sn.delayedCall(0,s||sh,a);return o.data="isPause",this._hasPause=1,Ns(this,o,Hr(this,r))},n.removePause=function(r){var s=this._first;for(r=Hr(this,r);s;)s._start===r&&s.data==="isPause"&&ho(s),s=s._next},n.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)uo!==o[l]&&o[l].kill(r,s);return this},n.getTweensOf=function(r,s){for(var a=[],o=Gr(r),l=this._first,u=ha(s),c;l;)l instanceof Sn?EL(l._targets,o)&&(u?(!uo||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(c=l.getTweensOf(o,s)).length&&a.push.apply(a,c),l=l._next;return a},n.tweenTo=function(r,s){s=s||{};var a=this,o=Hr(a,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,h,g=Sn.to(a,mr({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale())||qe,onStart:function(){if(a.pause(),!h){var m=s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale());g._dur!==m&&ju(g,m,0,1).render(g._time,!0,!0),h=1}c&&c.apply(g,d||[])}},s));return f?g.render(0):g},n.tweenFromTo=function(r,s,a){return this.tweenTo(s,mr({startAt:{time:Hr(this,r)}},a))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),Cw(this,Hr(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),Cw(this,Hr(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+qe)},n.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,u;for(r=un(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(u in l)l[u]>=a&&(l[u]+=r);return dl(this)},n.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return e.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),dl(this)},n.totalDuration=function(r){var s=0,a=this,o=a._last,l=Vr,u,c,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ns(a,o,c-o._delay,1)._lock=0):l=c,c<0&&o._ts&&(s-=c,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=un(c/a._ts),a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=u;ju(a,a===cn&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(r){if(cn._ts&&(zw(cn,_m(r,cn)),Fw=Zi.frame),Zi.frame>=Ew){Ew+=Ki.autoSleep||120;var s=cn._first;if((!s||!s._ts)&&Ki.autoSleep&&Zi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Zi.sleep()}}},t})(oh);mr(oi.prototype,{_lock:0,_hasPause:0,_forcing:0});var JL=function(t,n,i,r,s,a,o){var l=new Ri(this._pt,t,n,0,1,kx,null,s),u=0,c=0,d,f,h,g,_,m,p,y;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=tc(r)),a&&(y=[i,r],a(y,t,n),i=y[0],r=y[1]),f=i.match(hx)||[];d=hx.exec(r);)g=d[0],_=r.substring(u,d.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?_l(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},u=hx.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=o,(Dx.test(r)||p)&&(l.e=0),this._pt=l,l},zx=function(t,n,i,r,s,a,o,l,u,c){mn(r)&&(r=r(s||0,t,a));var d=t[n],f=i!=="get"?i:mn(d)?u?t[n.indexOf("set")||!mn(t["get"+n.substr(3)])?n:"get"+n.substr(3)](u):t[n]():d,h=mn(d)?u?tN:sR:Gx,g;if(Nn(r)&&(~r.indexOf("random(")&&(r=tc(r)),r.charAt(1)==="="&&(g=_l(f,r)+(ei(f)||0),(g||g===0)&&(r=g))),!c||f!==r||Ax)return!isNaN(f*r)&&r!==""?(g=new Ri(this._pt,t,n,+f||0,r-(f||0),typeof d=="boolean"?nN:aR,0,h),u&&(g.fp=u),o&&g.modifier(o,this,t),this._pt=g):(!d&&!(n in t)&&Mm(n,r),JL.call(this,t,n,f,r,h,l||Ki.stringFilter,u))},KL=function(t,n,i,r,s){if(mn(t)&&(t=nh(t,s,n,i,r)),!Ps(t)||t.style&&t.nodeType||li(t)||Nw(t))return Nn(t)?nh(t,s,n,i,r):t;var a={},o;for(o in t)a[o]=nh(t[o],s,n,i,r);return a},Hx=function(t,n,i,r,s,a){var o,l,u,c;if(qi[t]&&(o=new qi[t]).init(s,o.rawVars?n[t]:KL(n[t],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new Ri(i._pt,s,t,0,1,o.render,o,0,o.priority),i!==Ju))for(u=i._ptLookup[i._targets.indexOf(s)],c=o._props.length;c--;)u[o._props[c]]=l;return o},uo,Ax,Vx=function e(t,n,i){var r=t.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,h=r.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:m,S=t._overwrite==="auto"&&!wx,x=t.timeline,E=r.easeReverse||d,R,A,C,v,M,P,L,Y,V,w,Z,tt,I;if(x&&(!f||!s)&&(s="none"),t._ease=pl(s,ih.ease),t._rEase=E&&(pl(E)||t._ease),t._from=!x&&!!r.runBackwards,t._from&&(t.ratio=1),!x||f&&!r.stagger){if(Y=m[0]?fo(m[0]).harness:0,tt=Y&&r[Y.prop],R=gm(r,Ox),_&&(_._zTime<0&&_.progress(1),n<0&&c&&o&&!h?_.render(-1,!0):_.revert(c&&g?fm:bL),_._lazy=0),a){if(ho(t._startAt=Sn.set(m,mr({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Ji(l),startAt:null,delay:0,onUpdate:u&&function(){return dr(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(ti||!o&&!h)&&t._startAt.revert(fm),o&&g&&n<=0&&i<=0){n&&(t._zTime=n);return}}else if(c&&g&&!_){if(n&&(o=!1),C=mr({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Ji(l),immediateRender:o,stagger:0,parent:p},R),tt&&(C[Y.prop]=tt),ho(t._startAt=Sn.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(ti?t._startAt.revert(fm):t._startAt.render(-1,!0)),t._zTime=n,!o)e(t._startAt,qe,qe);else if(!n)return}for(t._pt=t._ptCache=0,l=g&&Ji(l)||l&&!g,A=0;A<m.length;A++){if(M=m[A],L=M._gsap||Nx(m)[A]._gsap,t._ptLookup[A]=w={},Sx[L.id]&&co.length&&mm(),Z=y===m?A:y.indexOf(M),Y&&(V=new Y).init(M,tt||R,t,Z,y)!==!1&&(t._pt=v=new Ri(t._pt,M,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(ct){w[ct]=v}),V.priority&&(P=1)),!Y||tt)for(C in R)qi[C]&&(V=Hx(C,R,t,Z,M,y))?V.priority&&(P=1):w[C]=v=zx.call(t,M,C,"get",R[C],Z,y,0,r.stringFilter);t._op&&t._op[A]&&t.kill(M,t._op[A]),S&&t._pt&&(uo=t,cn.killTweensOf(M,w,t.globalTime(n)),I=!t.parent,uo=0),t._pt&&l&&(Sx[L.id]=1)}P&&Wx(t),t._onInit&&t._onInit(t)}t._onUpdate=u,t._initted=(!t._op||t._pt)&&!I,f&&n<=0&&x.render(Vr,!0,!0)},QL=function(t,n,i,r,s,a,o,l){var u=(t._pt&&t._ptCache||(t._ptCache={}))[n],c,d,f,h;if(!u)for(u=t._ptCache[n]=[],f=t._ptLookup,h=t._targets.length;h--;){if(c=f[h][n],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==n&&c.fp!==n;)c=c._next;if(!c)return Ax=1,t.vars[n]="+=0",Vx(t,o),Ax=0,l?rh(n+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(h=u.length;h--;)d=u[h],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+a*c.c,c.c=i-c.s,d.e&&(d.e=gn(i)+ei(d.e)),d.b&&(d.b=c.s+ei(d.b))},jL=function(t,n){var i=t[0]?fo(t[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return n;s=Ku({},n);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},$L=function(t,n,i,r){var s=n.ease||r||"power1.inOut",a,o;if(li(n))o=i[t]||(i[t]=[]),n.forEach(function(l,u){return o.push({t:u/(n.length-1)*100,v:l,e:s})});else for(a in n)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:n[a],e:s})},nh=function(t,n,i,r,s){return mn(t)?t.call(n,i,r,s):Nn(t)&&~t.indexOf("random(")?tc(t):t},ym=Lx+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",rR={};wi(ym+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return rR[e]=1});ym=ym.split(",");var Sn=(function(e){Ow(t,e);function t(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=e.call(this,a?r:th(r))||this;var l=o.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=r.parent||cn,y=(li(i)||Nw(i)?ha(i[0]):"length"in r)?[i]:Gr(i),S,x,E,R,A,C,v,M;if(o._targets=y.length?Nx(y):rh("GSAP target "+i+" not found. https://gsap.com",!Ki.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,g||f||cm(u)||cm(c)){r=o.vars;var P=r.easeReverse||r.yoyoEase;if(S=o.timeline=new oi({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:y}),S.kill(),S.parent=S._dp=ca(o),S._start=0,f||cm(u)||cm(c)){if(R=y.length,v=f&&Zw(f),Ps(f))for(A in f)~ym.indexOf(A)&&(M||(M={}),M[A]=f[A]);for(x=0;x<R;x++)E=gm(r,rR),E.stagger=0,P&&(E.easeReverse=P),M&&Ku(E,M),C=y[x],E.duration=+nh(u,ca(o),x,C,y),E.delay=(+nh(c,ca(o),x,C,y)||0)-o._delay,!f&&R===1&&E.delay&&(o._delay=c=E.delay,o._start+=c,E.delay=0),S.to(C,E,v?v(x,C,y):0),S._ease=Ce.none;S.duration()?u=c=0:o.timeline=0}else if(g){th(mr(S.vars.defaults,{ease:"none"})),S._ease=pl(g.ease||r.ease||"none");var L=0,Y,V,w;if(li(g))g.forEach(function(Z){return S.to(y,Z,">")}),S.duration();else{E={};for(A in g)A==="ease"||A==="easeEach"||$L(A,g[A],E,g.easeEach);for(A in E)for(Y=E[A].sort(function(Z,tt){return Z.t-tt.t}),L=0,x=0;x<Y.length;x++)V=Y[x],w={ease:V.e,duration:(V.t-(x?Y[x-1].t:0))/100*u},w[A]=V.v,S.to(y,w,L),L+=w.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||o.duration(u=S.duration())}else o.timeline=0;return h===!0&&!wx&&(uo=ca(o),cn.killTweensOf(y),uo=0),Ns(p,ca(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!u&&!g&&o._start===un(p._time)&&Ji(d)&&CL(ca(o))&&p.data!=="nested")&&(o._tTime=-qe,o.render(Math.max(0,-c)||0)),m&&Xw(ca(o),m),o}var n=t.prototype;return n.render=function(r,s,a){var o=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-qe&&!c?l:r<qe?0:r,f,h,g,_,m,p,y,S;if(!u)UL(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,S=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,a);if(f=un(d%_),d===l?(g=this._repeat,f=u):(m=un(d/_),g=~~m,g&&g===m?(f=u,g--):f>u&&(f=u)),p=this._yoyo&&g&1,p&&(f=u-f),m=Qu(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(un(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Ww(this,c?r:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,a)}if(this._rEase){var x=f<o;if(x!==this._inv){var E=x?o:u-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(x?-1:1)/E:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(f/u);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!m&&(dr(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(y,h.d),h=h._next;S&&S.render(r<0?r:S._dur*S._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Mx(this,r,s,a),dr(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&dr(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Mx(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ho(this,1),!s&&!(c&&!o)&&(d||o||p)&&(dr(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),e.prototype.invalidate.call(this,r)},n.resetTo=function(r,s,a,o,l){ah||Zi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Vx(this,u),c=this._ease(u/this._dur),QL(this,r,s,a,o,c,u,l)?this.resetTo(r,s,a,o,1):(Em(this,0),this.parent||Gw(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?jf(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ti),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,uo&&uo.vars.overwrite!==!0)._first||jf(this),this.parent&&a!==this.timeline.totalDuration()&&ju(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Gr(r):o,u=this._ptLookup,c=this._pt,d,f,h,g,_,m,p;if((!s||s==="all")&&wL(o,l))return s==="all"&&(this._pt=0),jf(this);for(d=this._op=this._op||[],s!=="all"&&(Nn(s)&&(_={},wi(s,function(y){return _[y]=1}),s=_),s=jL(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=u[p],s==="all"?(d[p]=s,g=f,h={}):(h=d[p]=d[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&bm(this,m,"_pt"),delete f[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&c&&jf(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return eh(1,arguments)},t.delayedCall=function(r,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(r,s,a){return eh(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,a){return cn.killTweensOf(r,s,a)},t})(oh);mr(Sn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wi("staggerTo,staggerFrom,staggerFromTo",function(e){Sn[e]=function(){var t=new oi,n=bx.call(arguments,0);return n.splice(e==="staggerFromTo"?5:4,0,0),t[e].apply(t,n)}});var Gx=function(t,n,i){return t[n]=i},sR=function(t,n,i){return t[n](i)},tN=function(t,n,i,r){return t[n](r.fp,i)},eN=function(t,n,i){return t.setAttribute(n,i)},Am=function(t,n){return mn(t[n])?sR:Sm(t[n])&&t.setAttribute?eN:Gx},aR=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},nN=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},kx=function(t,n){var i=n._pt,r="";if(!t&&n.b)r=n.b;else if(t===1&&n.e)r=n.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=n.c}n.set(n.t,n.p,r,n)},Xx=function(t,n){for(var i=n._pt;i;)i.r(t,i.d),i=i._next},iN=function(t,n,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(t,n,i),s=a},rN=function(t){for(var n=this._pt,i,r;n;)r=n._next,n.p===t&&!n.op||n.op===t?bm(this,n,"_pt"):n.dep||(i=1),n=r;return!i},sN=function(t,n,i,r){r.mSet(t,n,r.m.call(r.tween,i,r.mt),r)},Wx=function(t){for(var n=t._pt,i,r,s,a;n;){for(i=n._next,r=s;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:a)?n._prev._next=n:s=n,(n._next=r)?r._prev=n:a=n,n=i}t._pt=s},Ri=(function(){function e(n,i,r,s,a,o,l,u,c){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||aR,this.d=l||this,this.set=u||Gx,this.pr=c||0,this._next=n,n&&(n._prev=this)}var t=e.prototype;return t.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=sN,this.m=i,this.mt=s,this.tween=r},e})();wi(Lx+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(e){return Ox[e]=1});pr.TweenMax=pr.TweenLite=Sn;pr.TimelineLite=pr.TimelineMax=oi;cn=new oi({sortChildren:!1,defaults:ih,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ki.stringFilter=Bx;var ml=[],dm={},aN=[],Uw=0,oN=0,_x=function(t){return(dm[t]||aN).map(function(n){return n()})},lh=function(){var t=Date.now(),n=[];t-Uw>2&&(_x("matchMediaInit"),ml.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,u;for(o in r)a=Ls.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,u=1);u&&(i.revert(),l&&n.push(i))}),_x("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Uw=t,_x("matchMedia"))},oR=(function(){function e(n,i){this.selector=i&&Tx(i),this.data=[],this._r=[],this.isReverted=!1,this.id=oN++,n&&this.add(n)}var t=e.prototype;return t.add=function(i,r,s){mn(i)&&(s=r,r=i,i=mn);var a=this,o=function(){var u=an,c=a.selector,d;return u&&u!==a&&u.data.push(a),s&&(a.selector=Tx(s)),an=a,d=r.apply(a,arguments),mn(d)&&a._r.push(d),an=u,a.selector=c,a.isReverted=!1,d};return a.last=o,i===mn?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},t.ignore=function(i){var r=an;an=null,i(this),an=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof e?i.push.apply(i,r.getTweens()):r instanceof Sn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var s=this;if(i?(function(){for(var o=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}));for(o.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof oi?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Sn)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r){for(var a=ml.length;a--;)ml[a].id===this.id&&ml.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(lh):o.removeEventListener("change",lh)}),this._mqs=null}},t.revert=function(i){this.kill(i||{})},e})(),lN=(function(){function e(n){this.contexts=[],this.scope=n,an&&an.data.push(this)}var t=e.prototype;return t.add=function(i,r,s){Ps(i)||(i={matches:i});var a=new oR(0,s||this.scope),o=a.conditions={},l,u,c;an&&!a.selector&&(a.selector=an.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(u in i)u==="all"?c=1:(l=Ls.matchMedia(i[u]),l&&(ml.indexOf(a)<0&&ml.push(a),(o[u]=l.matches)&&(c=1),l.addListener?l.addListener(lh):l.addEventListener("change",lh),(a._mqs||(a._mqs=[])).push(l)));return c&&r(a,function(d){return a.add(null,d)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},e})(),xm={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];n.forEach(function(r){return tR(r)})},timeline:function(t){return new oi(t)},getTweensOf:function(t,n){return cn.getTweensOf(t,n)},getProperty:function(t,n,i,r){Nn(t)&&(t=Gr(t)[0]);var s=fo(t||{}).get,a=i?Vw:Hw;return i==="native"&&(i=""),t&&(n?a((qi[n]&&qi[n].get||s)(t,n,i,r)):function(o,l,u){return a((qi[o]&&qi[o].get||s)(t,o,l,u))})},quickSetter:function(t,n,i){if(t=Gr(t),t.length>1){var r=t.map(function(c){return ui.quickSetter(c,n,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}t=t[0]||{};var a=qi[n],o=fo(t),l=o.harness&&(o.harness.aliases||{})[n]||n,u=a?function(c){var d=new a;Ju._pt=0,d.init(t,i?c+i:c,Ju,0,[t]),d.render(1,d),Ju._pt&&Xx(1,Ju)}:o.set(t,l);return a?u:function(c){return u(t,l,i?c+i:c,o,1)}},quickTo:function(t,n,i){var r,s=ui.to(t,mr((r={},r[n]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,u,c){return s.resetTo(n,l,u,c)};return a.tween=s,a},isTweening:function(t){return cn.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=pl(t.ease,ih.ease)),Aw(ih,t||{})},config:function(t){return Aw(Ki,t||{})},registerEffect:function(t){var n=t.name,i=t.effect,r=t.plugins,s=t.defaults,a=t.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!qi[o]&&!pr[o]&&rh(n+" effect requires "+o+" plugin.")}),dx[n]=function(o,l,u){return i(Gr(o),mr(l||{},s),u)},a&&(oi.prototype[n]=function(o,l,u){return this.add(dx[n](o,Ps(l)?l:(u=l)&&{},this),u)})},registerEase:function(t,n){Ce[t]=pl(n)},parseEase:function(t,n){return arguments.length?pl(t,n):Ce},getById:function(t){return cn.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var i=new oi(t),r,s;for(i.smoothChildTiming=Ji(t.smoothChildTiming),cn.remove(i),i._dp=0,i._time=i._tTime=cn._time,r=cn._first;r;)s=r._next,(n||!(!r._dur&&r instanceof Sn&&r.vars.onComplete===r._targets[0]))&&Ns(i,r,r._start-r._delay),r=s;return Ns(cn,i,0),i},context:function(t,n){return t?new oR(t,n):an},matchMedia:function(t){return new lN(t)},matchMediaRefresh:function(){return ml.forEach(function(t){var n=t.conditions,i,r;for(r in n)n[r]&&(n[r]=!1,i=1);i&&t.revert()})||lh()},addEventListener:function(t,n){var i=dm[t]||(dm[t]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(t,n){var i=dm[t],r=i&&i.indexOf(n);r>=0&&i.splice(r,1)},utils:{wrap:zL,wrapYoyo:HL,distribute:Zw,random:Kw,snap:Jw,normalize:FL,getUnit:ei,clamp:NL,splitColor:eR,toArray:Gr,selector:Tx,mapRange:jw,pipe:IL,unitize:BL,interpolate:VL,shuffle:qw},install:Iw,effects:dx,ticker:Zi,updateRoot:oi.updateRoot,plugins:qi,globalTimeline:cn,core:{PropTween:Ri,globals:Bw,Tween:Sn,Timeline:oi,Animation:oh,getCache:fo,_removeLinkedListItem:bm,reverting:function(){return ti},context:function(t){return t&&an&&(an.data.push(t),t._ctx=an),an},suppressOverwrites:function(t){return wx=t}}};wi("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return xm[e]=Sn[e]});Zi.add(oi.updateRoot);Ju=xm.to({},{duration:0});var uN=function(t,n){for(var i=t._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},cN=function(t,n){var i=t._targets,r,s,a;for(r in n)for(s=i.length;s--;)a=t._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=uN(a,r)),a&&a.modifier&&a.modifier(n[r],t,i[s],r))},vx=function(t,n){return{name:t,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,u;if(Nn(s)&&(l={},wi(s,function(c){return l[c]=1}),s=l),n){l={};for(u in s)l[u]=n(s[u]);s=l}cN(o,s)}}}},ui=xm.registerPlugin({name:"attr",init:function(t,n,i,r,s){var a,o,l;this.tween=i;for(a in n)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",n[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,n){for(var i=n._pt;i;)ti?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,n){for(var i=n.length;i--;)this.add(t,i,t[i]||0,n[i],0,0,0,0,0,1)}},vx("roundProps",Ex),vx("modifiers"),vx("snap",Jw))||xm;Sn.version=oi.version=ui.version="3.15.1";Pw=1;Rx()&&$u();var fN=Ce.Power0,hN=Ce.Power1,dN=Ce.Power2,pN=Ce.Power3,mN=Ce.Power4,gN=Ce.Linear,_N=Ce.Quad,vN=Ce.Cubic,yN=Ce.Quart,xN=Ce.Quint,SN=Ce.Strong,MN=Ce.Elastic,bN=Ce.Back,TN=Ce.SteppedEase,EN=Ce.Bounce,AN=Ce.Sine,wN=Ce.Expo,RN=Ce.Circ;var lR,mo,nc,Qx,Ml,CN,uR,jx,DN=function(){return typeof window<"u"},pa={},Sl=180/Math.PI,ic=Math.PI/180,ec=Math.atan2,cR=1e8,$x=/([A-Z])/g,UN=/(left|right|width|margin|padding|x)/i,ON=/[\s,\(]\S/,Is={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},qx=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},LN=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},NN=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},PN=function(t,n){return n.set(n.t,n.p,t===1?n.e:t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},IN=function(t,n){var i=n.s+n.c*t;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},vR=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},yR=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},BN=function(t,n,i){return t.style[n]=i},FN=function(t,n,i){return t.style.setProperty(n,i)},zN=function(t,n,i){return t._gsap[n]=i},HN=function(t,n,i){return t._gsap.scaleX=t._gsap.scaleY=i},VN=function(t,n,i,r,s){var a=t._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},GN=function(t,n,i,r,s){var a=t._gsap;a[n]=i,a.renderTransform(s,a)},fn="transform",Qi=fn+"Origin",kN=function e(t,n){var i=this,r=this.target,s=r.style,a=r._gsap;if(t in pa&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Is[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=da(r,o)}):this.tfm[t]=a.x?a[t]:da(r,t),t===Qi&&(this.tfm.zOrigin=a.zOrigin);else return Is.transform.split(",").forEach(function(o){return e.call(i,o,n)});if(this.props.indexOf(fn)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Qi,n,"")),t=fn}(s||n)&&this.props.push(t,n,s[t])},xR=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},XN=function(){var t=this.props,n=this.target,i=n.style,r=n._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?n[t[s]](t[s+2]):n[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace($x,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),s=jx(),(!s||!s.isStart)&&!i[fn]&&(xR(i),r.zOrigin&&i[Qi]&&(i[Qi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},SR=function(t,n){var i={target:t,props:[],revert:XN,save:kN};return t._gsap||ui.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(r){return i.save(r)}),i},MR,Zx=function(t,n){var i=mo.createElementNS?mo.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):mo.createElement(t);return i&&i.style?i:mo.createElement(t)},gr=function e(t,n,i){var r=getComputedStyle(t);return r[n]||r.getPropertyValue(n.replace($x,"-$1").toLowerCase())||r.getPropertyValue(n)||!i&&e(t,rc(n)||n,1)||""},fR="O,Moz,ms,Ms,Webkit".split(","),rc=function(t,n,i){var r=n||Ml,s=r.style,a=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(fR[a]+t in s););return a<0?null:(a===3?"ms":a>=0?fR[a]:"")+t},Jx=function(){DN()&&window.document&&(lR=window,mo=lR.document,nc=mo.documentElement,Ml=Zx("div")||{style:{}},CN=Zx("div"),fn=rc(fn),Qi=fn+"Origin",Ml.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",MR=!!rc("perspective"),jx=ui.core.reverting,Qx=1)},hR=function(t){var n=t.ownerSVGElement,i=Zx("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",i.appendChild(r),nc.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),nc.removeChild(i),s},dR=function(t,n){for(var i=n.length;i--;)if(t.hasAttribute(n[i]))return t.getAttribute(n[i])},bR=function(t){var n,i;try{n=t.getBBox()}catch{n=hR(t),i=1}return n&&(n.width||n.height)||i||(n=hR(t)),n&&!n.width&&!n.x&&!n.y?{x:+dR(t,["x","cx","x1"])||0,y:+dR(t,["y","cy","y1"])||0,width:0,height:0}:n},TR=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&bR(t))},_o=function(t,n){if(n){var i=t.style,r;n in pa&&n!==Qi&&(n=fn),i.removeProperty?(r=n.substr(0,2),(r==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(r==="--"?n:n.replace($x,"-$1").toLowerCase())):i.removeAttribute(n)}},go=function(t,n,i,r,s,a){var o=new Ri(t._pt,n,i,0,1,a?yR:vR);return t._pt=o,o.b=r,o.e=s,t._props.push(i),o},pR={deg:1,rad:1,turn:1},WN={grid:1,flex:1},vo=function e(t,n,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Ml.style,l=UN.test(n),u=t.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",h=r==="%",g,_,m,p;if(r===a||!s||pR[r]||pR[a])return s;if(a!=="px"&&!f&&(s=e(t,n,i,"px")),p=t.getCTM&&TR(t),(h||a==="%")&&(pa[n]||~n.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[c],gn(h?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(f?a:r),_=r!=="rem"&&~n.indexOf("adius")||r==="em"&&t.appendChild&&!u?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===mo||!_.appendChild)&&(_=mo.body),m=_._gsap,m&&h&&m.width&&l&&m.time===Zi.time&&!m.uncache)return gn(s/m.width*d);if(h&&(n==="height"||n==="width")){var y=t.style[n];t.style[n]=d+r,g=t[c],y?t.style[n]=y:_o(t,n)}else(h||a==="%")&&!WN[gr(_,"display")]&&(o.position=gr(t,"position")),_===t&&(o.position="static"),_.appendChild(Ml),g=Ml[c],_.removeChild(Ml),o.position="absolute";return l&&h&&(m=fo(_),m.time=Zi.time,m.width=_[c]),gn(f?g*s/d:g&&s?d/g*s:0)},da=function(t,n,i,r){var s;return Qx||Jx(),n in Is&&n!=="transform"&&(n=Is[n],~n.indexOf(",")&&(n=n.split(",")[0])),pa[n]&&n!=="transform"?(s=hh(t,r),s=n!=="transformOrigin"?s[n]:s.svg?s.origin:Rm(gr(t,Qi))+" "+s.zOrigin+"px"):(s=t.style[n],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=wm[n]&&wm[n](t,n,i)||gr(t,n)||Px(t,n)||(n==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?vo(t,n,s,i)+i:s},YN=function(t,n,i,r){if(!i||i==="none"){var s=rc(n,t,1),a=s&&gr(t,s,1);a&&a!==i?(n=s,i=a):n==="borderColor"&&(i=gr(t,"borderTopColor"))}var o=new Ri(this._pt,t.style,n,0,1,kx),l=0,u=0,c,d,f,h,g,_,m,p,y,S,x,E;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=gr(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=t.style[n],t.style[n]=r,r=gr(t,n)||r,_?t.style[n]=_:_o(t,n)),c=[i,r],Bx(c),i=c[0],r=c[1],f=i.match(gl)||[],E=r.match(gl)||[],E.length){for(;d=gl.exec(r);)m=d[0],y=r.substring(l,d.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=f[u++]||"")&&(h=parseFloat(_)||0,x=_.substr((h+"").length),m.charAt(1)==="="&&(m=_l(h,m)+x),p=parseFloat(m),S=m.substr((p+"").length),l=gl.lastIndex-S.length,S||(S=S||Ki.units[n]||x,l===r.length&&(r+=S,o.e+=S)),x!==S&&(h=vo(t,n,_,S)||0),o._pt={_next:o._pt,p:y||u===1?y:",",s:h,c:p-h,m:g&&g<4||n==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=n==="display"&&r==="none"?yR:vR;return Dx.test(r)&&(o.e=0),this._pt=o,o},mR={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},qN=function(t){var n=t.split(" "),i=n[0],r=n[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),n[0]=mR[i]||i,n[1]=mR[r]||r,n.join(" ")},ZN=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,r=i.style,s=n.u,a=i._gsap,o,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)o=s[u],pa[o]&&(l=1,o=o==="transformOrigin"?Qi:fn),_o(i,o);l&&(_o(i,fn),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",hh(i,1),a.uncache=1,xR(r)))}},wm={clearProps:function(t,n,i,r,s){if(s.data!=="isFromStart"){var a=t._pt=new Ri(t._pt,n,i,0,0,ZN);return a.u=r,a.pr=-10,a.tween=s,t._props.push(i),1}}},fh=[1,0,0,1,0,0],ER={},AR=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},gR=function(t){var n=gr(t,fn);return AR(n)?fh:n.substr(7).match(Cx).map(gn)},t1=function(t,n){var i=t._gsap||fo(t),r=t.style,s=gR(t),a,o,l,u;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?fh:s):(s===fh&&!t.offsetParent&&t!==nc&&!i.svg&&(l=r.display,r.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(u=1,o=t.nextElementSibling,nc.appendChild(t)),s=gR(t),l?r.display=l:_o(t,"display"),u&&(o?a.insertBefore(t,o):a?a.appendChild(t):nc.removeChild(t))),n&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Kx=function(t,n,i,r,s,a){var o=t._gsap,l=s||t1(t,!0),u=o.xOrigin||0,c=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,h=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],S=n.split(" "),x=parseFloat(S[0])||0,E=parseFloat(S[1])||0,R,A,C,v;i?l!==fh&&(A=h*m-g*_)&&(C=x*(m/A)+E*(-_/A)+(_*y-m*p)/A,v=x*(-g/A)+E*(h/A)-(h*y-g*p)/A,x=C,E=v):(R=bR(t),x=R.x+(~S[0].indexOf("%")?x/100*R.width:x),E=R.y+(~(S[1]||S[0]).indexOf("%")?E/100*R.height:E)),r||r!==!1&&o.smooth?(p=x-u,y=E-c,o.xOffset=d+(p*h+y*_)-p,o.yOffset=f+(p*g+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=E,o.smooth=!!r,o.origin=n,o.originIsAbsolute=!!i,t.style[Qi]="0px 0px",a&&(go(a,o,"xOrigin",u,x),go(a,o,"yOrigin",c,E),go(a,o,"xOffset",d,o.xOffset),go(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+E)},hh=function(t,n){var i=t._gsap||new Fx(t);if("x"in i&&!n&&!i.uncache)return i;var r=t.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(t),u=gr(t,Qi)||"0",c,d,f,h,g,_,m,p,y,S,x,E,R,A,C,v,M,P,L,Y,V,w,Z,tt,I,ct,N,ht,St,W,Rt,xt;return c=d=f=_=m=p=y=S=x=0,h=g=1,i.svg=!!(t.getCTM&&TR(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[fn]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[fn]!=="none"?l[fn]:"")),r.scale=r.rotate=r.translate="none"),A=t1(t,i.svg),i.svg&&(i.uncache?(I=t.getBBox(),u=i.xOrigin-I.x+"px "+(i.yOrigin-I.y)+"px",tt=""):tt=!n&&t.getAttribute("data-svg-origin"),Kx(t,tt||u,!!tt||i.originIsAbsolute,i.smooth!==!1,A)),E=i.xOrigin||0,R=i.yOrigin||0,A!==fh&&(P=A[0],L=A[1],Y=A[2],V=A[3],c=w=A[4],d=Z=A[5],A.length===6?(h=Math.sqrt(P*P+L*L),g=Math.sqrt(V*V+Y*Y),_=P||L?ec(L,P)*Sl:0,y=Y||V?ec(Y,V)*Sl+_:0,y&&(g*=Math.abs(Math.cos(y*ic))),i.svg&&(c-=E-(E*P+R*Y),d-=R-(E*L+R*V))):(xt=A[6],W=A[7],N=A[8],ht=A[9],St=A[10],Rt=A[11],c=A[12],d=A[13],f=A[14],C=ec(xt,St),m=C*Sl,C&&(v=Math.cos(-C),M=Math.sin(-C),tt=w*v+N*M,I=Z*v+ht*M,ct=xt*v+St*M,N=w*-M+N*v,ht=Z*-M+ht*v,St=xt*-M+St*v,Rt=W*-M+Rt*v,w=tt,Z=I,xt=ct),C=ec(-Y,St),p=C*Sl,C&&(v=Math.cos(-C),M=Math.sin(-C),tt=P*v-N*M,I=L*v-ht*M,ct=Y*v-St*M,Rt=V*M+Rt*v,P=tt,L=I,Y=ct),C=ec(L,P),_=C*Sl,C&&(v=Math.cos(C),M=Math.sin(C),tt=P*v+L*M,I=w*v+Z*M,L=L*v-P*M,Z=Z*v-w*M,P=tt,w=I),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),h=gn(Math.sqrt(P*P+L*L+Y*Y)),g=gn(Math.sqrt(Z*Z+xt*xt)),C=ec(w,Z),y=Math.abs(C)>2e-4?C*Sl:0,x=Rt?1/(Rt<0?-Rt:Rt):0),i.svg&&(tt=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!AR(gr(t,fn)),tt&&t.setAttribute("transform",tt))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(h*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),n=n||i.uncache,i.x=c-((i.xPercent=c&&(!n&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+a,i.y=d-((i.yPercent=d&&(!n&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=gn(h),i.scaleY=gn(g),i.rotation=gn(_)+o,i.rotationX=gn(m)+o,i.rotationY=gn(p)+o,i.skewX=y+o,i.skewY=S+o,i.transformPerspective=x+a,(i.zOrigin=parseFloat(u.split(" ")[2])||!n&&i.zOrigin||0)&&(r[Qi]=Rm(u)),i.xOffset=i.yOffset=0,i.force3D=Ki.force3D,i.renderTransform=i.svg?KN:MR?wR:JN,i.uncache=0,i},Rm=function(t){return(t=t.split(" "))[0]+" "+t[1]},Yx=function(t,n,i){var r=ei(n);return gn(parseFloat(n)+parseFloat(vo(t,"x",i+"px",r)))+r},JN=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,wR(t,n)},yl="0deg",ch="0px",xl=") ",wR=function(t,n){var i=n||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,h=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,y=i.target,S=i.zOrigin,x="",E=p==="auto"&&t&&t!==1||p===!0;if(S&&(d!==yl||c!==yl)){var R=parseFloat(c)*ic,A=Math.sin(R),C=Math.cos(R),v;R=parseFloat(d)*ic,v=Math.cos(R),a=Yx(y,a,A*v*-S),o=Yx(y,o,-Math.sin(R)*-S),l=Yx(y,l,C*v*-S+S)}m!==ch&&(x+="perspective("+m+xl),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(E||a!==ch||o!==ch||l!==ch)&&(x+=l!==ch||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+xl),u!==yl&&(x+="rotate("+u+xl),c!==yl&&(x+="rotateY("+c+xl),d!==yl&&(x+="rotateX("+d+xl),(f!==yl||h!==yl)&&(x+="skew("+f+", "+h+xl),(g!==1||_!==1)&&(x+="scale("+g+", "+_+xl),y.style[fn]=x||"translate(0, 0)"},KN=function(t,n){var i=n||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,h=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,y=i.forceCSS,S=parseFloat(a),x=parseFloat(o),E,R,A,C,v;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=ic,u*=ic,E=Math.cos(l)*d,R=Math.sin(l)*d,A=Math.sin(l-u)*-f,C=Math.cos(l-u)*f,u&&(c*=ic,v=Math.tan(u-c),v=Math.sqrt(1+v*v),A*=v,C*=v,c&&(v=Math.tan(c),v=Math.sqrt(1+v*v),E*=v,R*=v)),E=gn(E),R=gn(R),A=gn(A),C=gn(C)):(E=d,C=f,R=A=0),(S&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(S=vo(h,"x",a,"px"),x=vo(h,"y",o,"px")),(g||_||m||p)&&(S=gn(S+g-(g*E+_*A)+m),x=gn(x+_-(g*R+_*C)+p)),(r||s)&&(v=h.getBBox(),S=gn(S+r/100*v.width),x=gn(x+s/100*v.height)),v="matrix("+E+","+R+","+A+","+C+","+S+","+x+")",h.setAttribute("transform",v),y&&(h.style[fn]=v)},QN=function(t,n,i,r,s){var a=360,o=Nn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Sl:1),u=l-r,c=r+u+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),d==="cw"&&u<0?u=(u+a*cR)%a-~~(u/a)*a:d==="ccw"&&u>0&&(u=(u-a*cR)%a-~~(u/a)*a)),t._pt=f=new Ri(t._pt,n,i,r,u,LN),f.e=c,f.u="deg",t._props.push(i),f},_R=function(t,n){for(var i in n)t[i]=n[i];return t},jN=function(t,n,i){var r=_R({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,u,c,d,f,h,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),a[fn]=n,o=hh(i,1),_o(i,fn),i.setAttribute("transform",u)):(u=getComputedStyle(i)[fn],a[fn]=n,o=hh(i,1),a[fn]=u);for(l in pa)u=r[l],c=o[l],u!==c&&s.indexOf(l)<0&&(h=ei(u),g=ei(c),d=h!==g?vo(i,l,u,g):parseFloat(u),f=parseFloat(c),t._pt=new Ri(t._pt,o,l,d,f-d,qx),t._pt.u=g||0,t._props.push(l));_R(o,r)};wi("padding,margin,Width,Radius",function(e,t){var n="Top",i="Right",r="Bottom",s="Left",a=(t<3?[n,i,r,s]:[n+s,n+i,r+i,r+s]).map(function(o){return t<2?e+o:"border"+o+e});wm[t>1?"border"+e:e]=function(o,l,u,c,d){var f,h;if(arguments.length<4)return f=a.map(function(g){return da(o,g,u)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(c+"").split(" "),h={},a.forEach(function(g,_){return h[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,h,d)}});var e1={name:"css",register:Jx,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,i,r,s){var a=this._props,o=t.style,l=i.vars.startAt,u,c,d,f,h,g,_,m,p,y,S,x,E,R,A,C,v;Qx||Jx(),this.styles=this.styles||SR(t),C=this.styles.props,this.tween=i;for(_ in n)if(_!=="autoRound"&&(c=n[_],!(qi[_]&&Hx(_,n,i,r,t,s)))){if(h=typeof c,g=wm[_],h==="function"&&(c=c.call(i,r,t,s),h=typeof c),h==="string"&&~c.indexOf("random(")&&(c=tc(c)),g)g(this,t,_,c,i)&&(A=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(t).getPropertyValue(_)+"").trim(),c+="",fa.lastIndex=0,fa.test(u)||(m=ei(u),p=ei(c),p?m!==p&&(u=vo(t,_,u,p)+p):m&&(c+=m)),this.add(o,"setProperty",u,c,r,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(h!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,t,s):l[_],Nn(u)&&~u.indexOf("random(")&&(u=tc(u)),ei(u+"")||u==="auto"||(u+=Ki.units[_]||ei(da(t,_))||""),(u+"").charAt(1)==="="&&(u=da(t,_))):u=da(t,_),f=parseFloat(u),y=h==="string"&&c.charAt(1)==="="&&c.substr(0,2),y&&(c=c.substr(2)),d=parseFloat(c),_ in Is&&(_==="autoAlpha"&&(f===1&&da(t,"visibility")==="hidden"&&d&&(f=0),C.push("visibility",0,o.visibility),go(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Is[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in pa,S){if(this.styles.save(_),v=c,h==="string"&&c.substring(0,6)==="var(--"){if(c=gr(t,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var M=t.style.perspective;t.style.perspective=c,c=gr(t,"perspective"),M?t.style.perspective=M:_o(t,"perspective")}d=parseFloat(c)}if(x||(E=t._gsap,E.renderTransform&&!n.parseTransform||hh(t,n.parseTransform),R=n.smoothOrigin!==!1&&E.smooth,x=this._pt=new Ri(this._pt,o,fn,0,1,E.renderTransform,E,0,-1),x.dep=1),_==="scale")this._pt=new Ri(this._pt,E,"scaleY",E.scaleY,(y?_l(E.scaleY,y+d):d)-E.scaleY||0,qx),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Qi,0,o[Qi]),c=qN(c),E.svg?Kx(t,c,0,R,0,this):(p=parseFloat(c.split(" ")[2])||0,p!==E.zOrigin&&go(this,E,"zOrigin",E.zOrigin,p),go(this,o,_,Rm(u),Rm(c)));continue}else if(_==="svgOrigin"){Kx(t,c,1,R,0,this);continue}else if(_ in ER){QN(this,E,_,f,y?_l(f,y+c):c);continue}else if(_==="smoothOrigin"){go(this,E,"smooth",E.smooth,c);continue}else if(_==="force3D"){E[_]=c;continue}else if(_==="transform"){jN(this,c,t);continue}}else _ in o||(_=rc(_)||_);if(S||(d||d===0)&&(f||f===0)&&!ON.test(c)&&_ in o)m=(u+"").substr((f+"").length),d||(d=0),p=ei(c)||(_ in Ki.units?Ki.units[_]:m),m!==p&&(f=vo(t,_,u,p)),this._pt=new Ri(this._pt,S?E:o,_,f,(y?_l(f,y+d):d)-f,!S&&(p==="px"||_==="zIndex")&&n.autoRound!==!1?IN:qx),this._pt.u=p||0,S&&v!==c?(this._pt.b=u,this._pt.e=v,this._pt.r=PN):m!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=NN);else if(_ in o)YN.call(this,t,_,u,y?y+c:c);else if(_ in t)this.add(t,_,u||t[_],y?y+c:c,r,s);else if(_!=="parseTransform"){Mm(_,c);continue}S||(_ in o?C.push(_,0,o[_]):typeof t[_]=="function"?C.push(_,2,t[_]()):C.push(_,1,u||t[_])),a.push(_)}}A&&Wx(this)},render:function(t,n){if(n.tween._time||!jx())for(var i=n._pt;i;)i.r(t,i.d),i=i._next;else n.styles.revert()},get:da,aliases:Is,getSetter:function(t,n,i){var r=Is[n];return r&&r.indexOf(",")<0&&(n=r),n in pa&&n!==Qi&&(t._gsap.x||da(t,"x"))?i&&uR===i?n==="scale"?HN:zN:(uR=i||{})&&(n==="scale"?VN:GN):t.style&&!Sm(t.style[n])?BN:~n.indexOf("-")?FN:Am(t,n)},core:{_removeProperty:_o,_getMatrix:t1}};ui.utils.checkPrefix=rc;ui.core.getStyleSaver=SR;(function(e,t,n,i){var r=wi(e+","+t+","+n,function(s){pa[s]=1});wi(t,function(s){Ki.units[s]="deg",ER[s]=1}),Is[r[13]]=e+","+t,wi(i,function(s){var a=s.split(":");Is[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){Ki.units[e]="px"});ui.registerPlugin(e1);var wn=ui.registerPlugin(e1)||ui,eH=wn.core.Tween;function RR(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function $N(e,t,n){return t&&RR(e.prototype,t),n&&RR(e,n),e}var ni,Um,tP,ji,yo,xo,ac,DR,bl,oc,UR,ma,rs,OR,LR=function(){return ni||typeof window<"u"&&(ni=window.gsap)&&ni.registerPlugin&&ni},NR=1,sc=[],ye=[],ss=[],ph=Date.now,n1=function(t,n){return n},eP=function(){var t=oc.core,n=t.bridge||{},i=t._scrollers,r=t._proxies;i.push.apply(i,ye),r.push.apply(r,ss),ye=i,ss=r,n1=function(a,o){return n[a](o)}},_a=function(t,n){return~ss.indexOf(t)&&ss[ss.indexOf(t)+1][n]},mh=function(t){return!!~UR.indexOf(t)},Di=function(t,n,i,r,s){return t.addEventListener(n,i,{passive:r!==!1,capture:!!s})},Ci=function(t,n,i,r){return t.removeEventListener(n,i,!!r)},Cm="scrollLeft",Dm="scrollTop",i1=function(){return ma&&ma.isPressed||ye.cache++},Om=function(t,n){var i=function r(s){if(s||s===0){NR&&ji.history.scrollRestoration!=="manual"&&(ji.history.scrollRestoration="manual");var a=ma&&ma.isPressed;s=r.v=Math.round(s)||(ma&&ma.iOS?1:0),t(s),r.cacheID=ye.cache,a&&n1("ss",s)}else(n||ye.cache!==r.cacheID||n1("ref"))&&(r.cacheID=ye.cache,r.v=t());return r.v+r.offset};return i.offset=0,t&&i},ci={s:Cm,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Om(function(e){return arguments.length?ji.scrollTo(e,Rn.sc()):ji.pageXOffset||yo[Cm]||xo[Cm]||ac[Cm]||0})},Rn={s:Dm,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ci,sc:Om(function(e){return arguments.length?ji.scrollTo(ci.sc(),e):ji.pageYOffset||yo[Dm]||xo[Dm]||ac[Dm]||0})},Ui=function(t,n){return(n&&n._ctx&&n._ctx.selector||ni.utils.toArray)(t)[0]||(typeof t=="string"&&ni.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},nP=function(t,n){for(var i=n.length;i--;)if(n[i]===t||n[i].contains(t))return!0;return!1},ga=function(t,n){var i=n.s,r=n.sc;mh(t)&&(t=yo.scrollingElement||xo);var s=ye.indexOf(t),a=r===Rn.sc?1:2;!~s&&(s=ye.push(t)-1),ye[s+a]||Di(t,"scroll",i1);var o=ye[s+a],l=o||(ye[s+a]=Om(_a(t,i),!0)||(mh(t)?r:Om(function(u){return arguments.length?t[i]=u:t[i]})));return l.target=t,o||(l.smooth=ni.getProperty(t,"scrollBehavior")==="smooth"),l},Lm=function(t,n,i){var r=t,s=t,a=ph(),o=a,l=n||50,u=Math.max(500,l*3),c=function(g,_){var m=ph();_||m-a>l?(s=r,r=g,o=a,a=m):i?r+=g:r=s+(g-s)/(m-o)*(a-o)},d=function(){s=r=i?0:r,o=a=0},f=function(g){var _=o,m=s,p=ph();return(g||g===0)&&g!==r&&c(g),a===o||p-o>u?0:(r+(i?m:-m))/((i?p:a)-_)*1e3};return{update:c,reset:d,getVelocity:f}},dh=function(t,n){return n&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},CR=function(t){var n=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(n)>=Math.abs(i)?n:i},PR=function(){oc=ni.core.globals().ScrollTrigger,oc&&oc.core&&eP()},IR=function(t){return ni=t||LR(),!Um&&ni&&typeof document<"u"&&document.body&&(ji=window,yo=document,xo=yo.documentElement,ac=yo.body,UR=[ji,yo,xo,ac],tP=ni.utils.clamp,OR=ni.core.context||function(){},bl="onpointerenter"in ac?"pointer":"mouse",DR=_n.isTouch=ji.matchMedia&&ji.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ji||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,rs=_n.eventTypes=("ontouchstart"in xo?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in xo?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return NR=0},500),Um=1),oc||PR(),Um};ci.op=Rn;ye.cache=0;var _n=(function(){function e(n){this.init(n)}var t=e.prototype;return t.init=function(i){Um||IR(ni)||console.warn("Please gsap.registerPlugin(Observer)"),oc||PR();var r=i.tolerance,s=i.dragMinimum,a=i.type,o=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,h=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,p=i.onDragEnd,y=i.onDrag,S=i.onPress,x=i.onRelease,E=i.onRight,R=i.onLeft,A=i.onUp,C=i.onDown,v=i.onChangeX,M=i.onChangeY,P=i.onChange,L=i.onToggleX,Y=i.onToggleY,V=i.onHover,w=i.onHoverEnd,Z=i.onMove,tt=i.ignoreCheck,I=i.isNormalizer,ct=i.onGestureStart,N=i.onGestureEnd,ht=i.onWheel,St=i.onEnable,W=i.onDisable,Rt=i.onClick,xt=i.scrollSpeed,nt=i.capture,ot=i.allowClicks,wt=i.lockAxis,Bt=i.onLockAxis;this.target=o=Ui(o)||xo,this.vars=i,h&&(h=ni.utils.toArray(h)),r=r||1e-9,s=s||0,g=g||1,xt=xt||1,a=a||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(ji.getComputedStyle(ac).lineHeight)||22);var zt,Xt,Vt,U,Ft,Et,Mt,z=this,Qt=0,Nt=0,It=i.passive||!c&&i.passive!==!1,ie=ga(o,ci),Gt=ga(o,Rn),D=ie(),T=Gt(),B=~a.indexOf("touch")&&!~a.indexOf("pointer")&&rs[0]==="pointerdown",J=mh(o),Q=o.ownerDocument||yo,$=[0,0,0],Ot=[0,0,0],pt=0,Ht=function(){return pt=ph()},Dt=function(st,yt){return(z.event=st)&&h&&nP(st.target,h)||yt&&B&&st.pointerType!=="touch"||tt&&tt(st,yt)},bt=function(){z._vx.reset(),z._vy.reset(),Xt.pause(),d&&d(z)},mt=function(){var st=z.deltaX=CR($),yt=z.deltaY=CR(Ot),ft=Math.abs(st)>=r,Ut=Math.abs(yt)>=r;P&&(ft||Ut)&&P(z,st,yt,$,Ot),ft&&(E&&z.deltaX>0&&E(z),R&&z.deltaX<0&&R(z),v&&v(z),L&&z.deltaX<0!=Qt<0&&L(z),Qt=z.deltaX,$[0]=$[1]=$[2]=0),Ut&&(C&&z.deltaY>0&&C(z),A&&z.deltaY<0&&A(z),M&&M(z),Y&&z.deltaY<0!=Nt<0&&Y(z),Nt=z.deltaY,Ot[0]=Ot[1]=Ot[2]=0),(U||Vt)&&(Z&&Z(z),Vt&&(m&&Vt===1&&m(z),y&&y(z),Vt=0),U=!1),Et&&!(Et=!1)&&Bt&&Bt(z),Ft&&(ht(z),Ft=!1),zt=0},k=function(st,yt,ft){$[ft]+=st,Ot[ft]+=yt,z._vx.update(st),z._vy.update(yt),u?zt||(zt=requestAnimationFrame(mt)):mt()},H=function(st,yt){wt&&!Mt&&(z.axis=Mt=Math.abs(st)>Math.abs(yt)?"x":"y",Et=!0),Mt!=="y"&&($[2]+=st,z._vx.update(st,!0)),Mt!=="x"&&(Ot[2]+=yt,z._vy.update(yt,!0)),u?zt||(zt=requestAnimationFrame(mt)):mt()},G=function(st){if(!Dt(st,1)){st=dh(st,c);var yt=st.clientX,ft=st.clientY,Ut=yt-z.x,Ct=ft-z.y,At=z.isDragging;z.x=yt,z.y=ft,(At||(Ut||Ct)&&(Math.abs(z.startX-yt)>=s||Math.abs(z.startY-ft)>=s))&&(Vt||(Vt=At?2:1),At||(z.isDragging=!0),H(Ut,Ct))}},it=z.onPress=function(Tt){Dt(Tt,1)||Tt&&Tt.button||(z.axis=Mt=null,Xt.pause(),z.isPressed=!0,Tt=dh(Tt),Qt=Nt=0,z.startX=z.x=Tt.clientX,z.startY=z.y=Tt.clientY,z._vx.reset(),z._vy.reset(),Di(I?o:Q,rs[1],G,It,!0),z.deltaX=z.deltaY=0,S&&S(z))},O=z.onRelease=function(Tt){if(!Dt(Tt,1)){Ci(I?o:Q,rs[1],G,!0);var st=!isNaN(z.y-z.startY),yt=z.isDragging,ft=yt&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Ut=dh(Tt);!ft&&st&&(z._vx.reset(),z._vy.reset(),c&&ot&&ni.delayedCall(.08,function(){if(ph()-pt>300&&!Tt.defaultPrevented){if(Tt.target.click)Tt.target.click();else if(Q.createEvent){var Ct=Q.createEvent("MouseEvents");Ct.initMouseEvent("click",!0,!0,ji,1,Ut.screenX,Ut.screenY,Ut.clientX,Ut.clientY,!1,!1,!1,!1,0,null),Tt.target.dispatchEvent(Ct)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,d&&yt&&!I&&Xt.restart(!0),Vt&&mt(),p&&yt&&p(z),x&&x(z,ft)}},et=function(st){return st.touches&&st.touches.length>1&&(z.isGesturing=!0)&&ct(st,z.isDragging)},ut=function(){return(z.isGesturing=!1)||N(z)},dt=function(st){if(!Dt(st)){var yt=ie(),ft=Gt();k((yt-D)*xt,(ft-T)*xt,1),D=yt,T=ft,d&&Xt.restart(!0)}},at=function(st){if(!Dt(st)){st=dh(st,c),ht&&(Ft=!0);var yt=(st.deltaMode===1?l:st.deltaMode===2?ji.innerHeight:1)*g;k(st.deltaX*yt,st.deltaY*yt,0),d&&!I&&Xt.restart(!0)}},rt=function(st){if(!Dt(st)){var yt=st.clientX,ft=st.clientY,Ut=yt-z.x,Ct=ft-z.y;z.x=yt,z.y=ft,U=!0,d&&Xt.restart(!0),(Ut||Ct)&&H(Ut,Ct)}},gt=function(st){z.event=st,V(z)},lt=function(st){z.event=st,w(z)},Yt=function(st){return Dt(st)||dh(st,c)&&Rt(z)};Xt=z._dc=ni.delayedCall(f||.25,bt).pause(),z.deltaX=z.deltaY=0,z._vx=Lm(0,50,!0),z._vy=Lm(0,50,!0),z.scrollX=ie,z.scrollY=Gt,z.isDragging=z.isGesturing=z.isPressed=!1,OR(this),z.enable=function(Tt){return z.isEnabled||(Di(J?Q:o,"scroll",i1),a.indexOf("scroll")>=0&&Di(J?Q:o,"scroll",dt,It,nt),a.indexOf("wheel")>=0&&Di(o,"wheel",at,It,nt),(a.indexOf("touch")>=0&&DR||a.indexOf("pointer")>=0)&&(Di(o,rs[0],it,It,nt),Di(Q,rs[2],O),Di(Q,rs[3],O),ot&&Di(o,"click",Ht,!0,!0),Rt&&Di(o,"click",Yt),ct&&Di(Q,"gesturestart",et),N&&Di(Q,"gestureend",ut),V&&Di(o,bl+"enter",gt),w&&Di(o,bl+"leave",lt),Z&&Di(o,bl+"move",rt)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=U=Vt=!1,z._vx.reset(),z._vy.reset(),D=ie(),T=Gt(),Tt&&Tt.type&&it(Tt),St&&St(z)),z},z.disable=function(){z.isEnabled&&(sc.filter(function(Tt){return Tt!==z&&mh(Tt.target)}).length||Ci(J?Q:o,"scroll",i1),z.isPressed&&(z._vx.reset(),z._vy.reset(),Ci(I?o:Q,rs[1],G,!0)),Ci(J?Q:o,"scroll",dt,nt),Ci(o,"wheel",at,nt),Ci(o,rs[0],it,nt),Ci(Q,rs[2],O),Ci(Q,rs[3],O),Ci(o,"click",Ht,!0),Ci(o,"click",Yt),Ci(Q,"gesturestart",et),Ci(Q,"gestureend",ut),Ci(o,bl+"enter",gt),Ci(o,bl+"leave",lt),Ci(o,bl+"move",rt),z.isEnabled=z.isPressed=z.isDragging=!1,W&&W(z))},z.kill=z.revert=function(){z.disable();var Tt=sc.indexOf(z);Tt>=0&&sc.splice(Tt,1),ma===z&&(ma=0)},sc.push(z),I&&mh(o)&&(ma=z),z.enable(_)},$N(e,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),e})();_n.version="3.15.1";_n.create=function(e){return new _n(e)};_n.register=IR;_n.getAll=function(){return sc.slice()};_n.getById=function(e){return sc.filter(function(t){return t.vars.id===e})[0]};LR()&&ni.registerPlugin(_n);var ee,fc,be,Xe,yr,ze,_1,Jm,Rh,Mh,_h,Nm,fi,jm,c1,Li,BR,FR,hc,t2,r1,e2,Oi,f1,n2,i2,So,h1,v1,dc,y1,Mo,d1,s1,Pm=1,hi=Date.now,a1=hi(),Wr=0,vh=0,zR=function(t,n,i){var r=vr(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+n+"Clamp"]=r,r?t.substr(6,t.length-7):t},HR=function(t,n){return n&&(!vr(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},iP=function e(){return vh&&requestAnimationFrame(e)},VR=function(){return jm=1},GR=function(){return jm=0},Bs=function(t){return t},yh=function(t){return Math.round(t*1e5)/1e5||0},r2=function(){return typeof window<"u"},s2=function(){return ee||r2()&&(ee=window.gsap)&&ee.registerPlugin&&ee},Cl=function(t){return!!~_1.indexOf(t)},a2=function(t){return(t==="Height"?y1:be["inner"+t])||yr["client"+t]||ze["client"+t]},o2=function(t){return _a(t,"getBoundingClientRect")||(Cl(t)?function(){return Zm.width=be.innerWidth,Zm.height=y1,Zm}:function(){return va(t)})},rP=function(t,n,i){var r=i.d,s=i.d2,a=i.a;return(a=_a(t,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(n?a2(s):t["client"+s])||0}},sP=function(t,n){return!n||~ss.indexOf(t)?o2(t):function(){return Zm}},Fs=function(t,n){var i=n.s,r=n.d2,s=n.d,a=n.a;return Math.max(0,(i="scroll"+r)&&(a=_a(t,i))?a()-o2(t)()[s]:Cl(t)?(yr[i]||ze[i])-a2(r):t[i]-t["offset"+r])},Im=function(t,n){for(var i=0;i<hc.length;i+=3)(!n||~n.indexOf(hc[i+1]))&&t(hc[i],hc[i+1],hc[i+2])},vr=function(t){return typeof t=="string"},di=function(t){return typeof t=="function"},xh=function(t){return typeof t=="number"},Tl=function(t){return typeof t=="object"},gh=function(t,n,i){return t&&t.progress(n?0:1)&&i&&t.pause()},lc=function(t,n,i){if(t.enabled){var r=t._ctx?t._ctx.add(function(){return n(t,i)}):n(t,i);r&&r.totalTime&&(t.callbackAnimation=r)}},uc=Math.abs,l2="left",u2="top",x1="right",S1="bottom",Al="width",wl="height",bh="Right",Th="Left",Eh="Top",Ah="Bottom",Cn="padding",kr="margin",mc="Width",M1="Height",Pn="px",Xr=function(t){return be.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},aP=function(t){var n=Xr(t).position;t.style.position=n==="absolute"||n==="fixed"?n:"relative"},kR=function(t,n){for(var i in n)i in t||(t[i]=n[i]);return t},va=function(t,n){var i=n&&Xr(t)[c1]!=="matrix(1, 0, 0, 1, 0, 0)"&&ee.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},Km=function(t,n){var i=n.d2;return t["offset"+i]||t["client"+i]||0},c2=function(t){var n=[],i=t.labels,r=t.duration(),s;for(s in i)n.push(i[s]/r);return n},oP=function(t){return function(n){return ee.utils.snap(c2(t),n)}},b1=function(t){var n=ee.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(r,s){return r-s});return i?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return n(r);if(s>0){for(r-=a,o=0;o<i.length;o++)if(i[o]>=r)return i[o];return i[o-1]}else for(o=i.length,r+=a;o--;)if(i[o]<=r)return i[o];return i[0]}:function(r,s,a){a===void 0&&(a=.001);var o=n(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:n(s<0?r-t:r+t)}},lP=function(t){return function(n,i){return b1(c2(t))(n,i.direction)}},Bm=function(t,n,i,r){return i.split(",").forEach(function(s){return t(n,s,r)})},kn=function(t,n,i,r,s){return t.addEventListener(n,i,{passive:!r,capture:!!s})},Gn=function(t,n,i,r){return t.removeEventListener(n,i,!!r)},Fm=function(t,n,i){i=i&&i.wheelHandler,i&&(t(n,"wheel",i),t(n,"touchmove",i))},XR={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},zm={toggleActions:"play",anticipatePin:0},Qm={top:0,left:0,center:.5,bottom:1,right:1},Xm=function(t,n){if(vr(t)){var i=t.indexOf("="),r=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(r*=n/100),t=t.substr(0,i-1)),t=r+(t in Qm?Qm[t]*n:~t.indexOf("%")?parseFloat(t)*n/100:parseFloat(t)||0)}return t},Hm=function(t,n,i,r,s,a,o,l){var u=s.startColor,c=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,g=Xe.createElement("div"),_=Cl(i)||_a(i,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=_?ze:i.tagName==="IFRAME"?i.contentDocument.body:i,y=t.indexOf("start")!==-1,S=y?u:c,x="border-color:"+S+";font-size:"+d+";color:"+S+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(r===Rn?x1:S1)+":"+(a+parseFloat(f))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+t+(n?" marker-"+n:"")),g.style.cssText=x,g.innerText=n||n===0?t+"-"+n:t,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],Wm(g,0,r,y),g},Wm=function(t,n,i,r){var s={display:"block"},a=i[r?"os2":"p2"],o=i[r?"p2":"os2"];t._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+a+mc]=1,s["border"+o+mc]=0,s[i.p]=n+"px",ee.set(t,s)},Me=[],p1={},Ch,WR=function(){return hi()-Wr>34&&(Ch||(Ch=requestAnimationFrame(ya)))},cc=function(){(!Oi||!Oi.isPressed||Oi.startX>ze.clientWidth)&&(ye.cache++,Oi?Ch||(Ch=requestAnimationFrame(ya)):ya(),Wr||Ul("scrollStart"),Wr=hi())},o1=function(){i2=be.innerWidth,n2=be.innerHeight},Sh=function(t){ye.cache++,(t===!0||!fi&&!e2&&!Xe.fullscreenElement&&!Xe.webkitFullscreenElement&&(!f1||i2!==be.innerWidth||Math.abs(be.innerHeight-n2)>be.innerHeight*.25))&&Jm.restart(!0)},Dl={},uP=[],f2=function e(){return Gn(Te,"scrollEnd",e)||El(!0)},Ul=function(t){return Dl[t]&&Dl[t].map(function(n){return n()})||uP},_r=[],h2=function(t){for(var n=0;n<_r.length;n+=5)(!t||_r[n+4]&&_r[n+4].query===t)&&(_r[n].style.cssText=_r[n+1],_r[n].getBBox&&_r[n].setAttribute("transform",_r[n+2]||""),_r[n+3].uncache=1)},d2=function(){ye.cache++,ye.forEach(function(t){return di(t)&&(t.rec=t())})},T1=function(t,n){var i;for(Li=0;Li<Me.length;Li++)i=Me[Li],i&&(!n||i._ctx===n)&&(t?i.kill(1):i.revert(!0,!0));Mo=!0,n&&h2(n),n||Ul("revert")},p2=function(t,n){ye.cache++,(n||!Ni)&&ye.forEach(function(i){return di(i)&&i.cacheID++&&(i.rec=0)}),vr(t)&&(v1=t,be.history.scrollRestoration!==t&&(be.history.scrollRestoration=t))},Ni,Rl=0,YR,cP=function(){if(YR!==Rl){var t=YR=Rl;requestAnimationFrame(function(){return t===Rl&&El(!0)})}},m2=function(){ze.appendChild(dc),y1=!Oi&&dc.offsetHeight||be.innerHeight,ze.removeChild(dc)},qR=function(t){return Rh(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=t?"none":"block"})},El=function(t,n){if(yr=Xe.documentElement,ze=Xe.body,_1=[be,Xe,yr,ze],Wr&&!t&&!Mo){kn(Te,"scrollEnd",f2);return}m2(),Ni=Te.isRefreshing=!0,Mo||d2();var i=Ul("refreshInit");t2&&Te.sort(),n||T1(),ye.forEach(function(r){di(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Me.slice(0).forEach(function(r){return r.refresh()}),Mo=!1,Me.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),d1=1,qR(!0),Me.forEach(function(r){var s=Fs(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),qR(!1),d1=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ye.forEach(function(r){di(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),p2(v1,1),Jm.pause(),Rl++,Ni=2,ya(2),Me.forEach(function(r){return di(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Ni=Te.isRefreshing=!1,Ul("refresh")},m1=0,Ym=1,wh,ya=function(t){if(t===2||!Ni&&!Mo){Te.isUpdating=!0,wh&&wh.update(0);var n=Me.length,i=hi(),r=i-a1>=50,s=n&&Me[0].scroll();if(Ym=m1>s?-1:1,Ni||(m1=s),r&&(Wr&&!jm&&i-Wr>200&&(Wr=0,Ul("scrollEnd")),_h=a1,a1=i),Ym<0){for(Li=n;Li-- >0;)Me[Li]&&Me[Li].update(0,r);Ym=1}else for(Li=0;Li<n;Li++)Me[Li]&&Me[Li].update(0,r);Te.isUpdating=!1}Ch=0},g1=[l2,u2,S1,x1,kr+Ah,kr+bh,kr+Eh,kr+Th,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],qm=g1.concat([Al,wl,"boxSizing","max"+mc,"max"+M1,"position",kr,Cn,Cn+Eh,Cn+bh,Cn+Ah,Cn+Th]),fP=function(t,n,i){pc(i);var r=t._gsap;if(r.spacerIsNative)pc(r.spacerState);else if(t._gsap.swappedIn){var s=n.parentNode;s&&(s.insertBefore(t,n),s.removeChild(n))}t._gsap.swappedIn=!1},l1=function(t,n,i,r){if(!t._gsap.swappedIn){for(var s=g1.length,a=n.style,o=t.style,l;s--;)l=g1[s],a[l]=i[l];a.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(a.display="inline-block"),o[S1]=o[x1]="auto",a.flexBasis=i.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Al]=Km(t,ci)+Pn,a[wl]=Km(t,Rn)+Pn,a[Cn]=o[kr]=o[u2]=o[l2]="0",pc(r),o[Al]=o["max"+mc]=i[Al],o[wl]=o["max"+M1]=i[wl],o[Cn]=i[Cn],t.parentNode!==n&&(t.parentNode.insertBefore(n,t),n.appendChild(t)),t._gsap.swappedIn=!0}},hP=/([A-Z])/g,pc=function(t){if(t){var n=t.t.style,i=t.length,r=0,s,a;for((t.t._gsap||ee.core.getCache(t.t)).uncache=1;r<i;r+=2)a=t[r+1],s=t[r],a?n[s]=a:n[s]&&n.removeProperty(s.replace(hP,"-$1").toLowerCase())}},Vm=function(t){for(var n=qm.length,i=t.style,r=[],s=0;s<n;s++)r.push(qm[s],i[qm[s]]);return r.t=t,r},dP=function(t,n,i){for(var r=[],s=t.length,a=i?8:0,o;a<s;a+=2)o=t[a],r.push(o,o in n?n[o]:t[a+1]);return r.t=t.t,r},Zm={left:0,top:0},ZR=function(t,n,i,r,s,a,o,l,u,c,d,f,h,g){di(t)&&(t=t(l)),vr(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Xm("0"+t.substr(3),i):0));var _=h?h.time():0,m,p,y;if(h&&h.seek(0),isNaN(t)||(t=+t),xh(t))h&&(t=ee.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,t)),o&&Wm(o,i,r,!0);else{di(n)&&(n=n(l));var S=(t||"0").split(" "),x,E,R,A;y=Ui(n,l)||ze,x=va(y)||{},(!x||!x.left&&!x.top)&&Xr(y).display==="none"&&(A=y.style.display,y.style.display="block",x=va(y),A?y.style.display=A:y.style.removeProperty("display")),E=Xm(S[0],x[r.d]),R=Xm(S[1]||"0",i),t=x[r.p]-u[r.p]-c+E+s-R,o&&Wm(o,R,r,i-R<20||o._isStart&&R>20),i-=i-R}if(g&&(l[g]=t||-.001,t<0&&(t=0)),a){var C=t+i,v=a._isStart;m="scroll"+r.d2,Wm(a,C,r,v&&C>20||!v&&(d?Math.max(ze[m],yr[m]):a.parentNode[m])<=C+1),d&&(u=va(o),d&&(a.style[r.op.p]=u[r.op.p]-r.op.m-a._offset+Pn))}return h&&y&&(m=va(y),h.seek(f),p=va(y),h._caScrollDist=m[r.p]-p[r.p],t=t/h._caScrollDist*f),h&&h.seek(_),h?t:Math.round(t)},pP=/(webkit|moz|length|cssText|inset)/i,JR=function(t,n,i,r){if(t.parentNode!==n){var s=t.style,a,o;if(n===ze){t._stOrig=s.cssText,o=Xr(t);for(a in o)!+a&&!pP.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=i,s.left=r}else s.cssText=t._stOrig;ee.core.getCache(t).uncache=1,n.appendChild(t)}},g2=function(t,n,i){var r=n,s=r;return function(a){var o=Math.round(t());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,i&&i()),s=r,r=Math.round(a),r}},Gm=function(t,n,i){var r={};r[n.p]="+="+i,ee.set(t,r)},KR=function(t,n){var i=ga(t,n),r="_scroll"+n.p2,s=function a(o,l,u,c,d){var f=a.tween,h=l.onComplete,g={};u=u||i();var _=g2(i,u,function(){f.kill(),a.tween=0});return d=c&&d||0,c=c||o-u,f&&f.kill(),l[r]=o,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(u+c*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){ye.cache++,a.tween&&ya()},l.onComplete=function(){a.tween=0,h&&h.call(f)},f=a.tween=ee.to(t,l),f};return t[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},kn(t,"wheel",i.wheelHandler),Te.isTouch&&kn(t,"touchmove",i.wheelHandler),s},Te=(function(){function e(n,i){fc||e.register(ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),h1(this),this.init(n,i)}var t=e.prototype;return t.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!vh){this.update=this.refresh=this.kill=Bs;return}i=kR(vr(i)||xh(i)||i.nodeType?{trigger:i}:i,zm);var s=i,a=s.onUpdate,o=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,S=s.once,x=s.snap,E=s.pinReparent,R=s.pinSpacer,A=s.containerAnimation,C=s.fastScrollEnd,v=s.preventOverlaps,M=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ci:Rn,P=!d&&d!==0,L=Ui(i.scroller||be),Y=ee.core.getCache(L),V=Cl(L),w=("pinType"in i?i.pinType:_a(L,"pinType")||V&&"fixed")==="fixed",Z=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],tt=P&&i.toggleActions.split(" "),I="markers"in i?i.markers:zm.markers,ct=V?0:parseFloat(Xr(L)["border"+M.p2+mc])||0,N=this,ht=i.onRefreshInit&&function(){return i.onRefreshInit(N)},St=rP(L,V,M),W=sP(L,V),Rt=0,xt=0,nt=0,ot=ga(L,M),wt,Bt,zt,Xt,Vt,U,Ft,Et,Mt,z,Qt,Nt,It,ie,Gt,D,T,B,J,Q,$,Ot,pt,Ht,Dt,bt,mt,k,H,G,it,O,et,ut,dt,at,rt,gt,lt;if(N._startClamp=N._endClamp=!1,N._dir=M,m*=45,N.scroller=L,N.scroll=A?A.time.bind(A):ot,Xt=ot(),Mo&&ot.rec==null&&(ot.rec=Xt),N.vars=i,r=r||i.animation,"refreshPriority"in i&&(t2=1,i.refreshPriority===-9999&&(wh=N)),Y.tweenScroll=Y.tweenScroll||{top:KR(L,Rn),left:KR(L,ci)},N.tweenTo=wt=Y.tweenScroll[M.p],N.scrubDuration=function(ft){et=xh(ft)&&ft,et?O?O.duration(ft):O=ee.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:et,paused:!0,onComplete:function(){return p&&p(N)}}):(O&&O.progress(1).kill(),O=0)},r&&(r.vars.lazy=!1,r._initted&&!N.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),N.animation=r.pause(),r.scrollTrigger=N,N.scrubDuration(d),G=0,l||(l=r.vars.id)),x&&((!Tl(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in ze.style&&ee.set(V?[ze,yr]:L,{scrollBehavior:"auto"}),ye.forEach(function(ft){return di(ft)&&ft.target===(V?Xe.scrollingElement||yr:L)&&(ft.smooth=!1)}),zt=di(x.snapTo)?x.snapTo:x.snapTo==="labels"?oP(r):x.snapTo==="labelsDirectional"?lP(r):x.directional!==!1?function(ft,Ut){return b1(x.snapTo)(ft,hi()-xt<500?0:Ut.direction)}:ee.utils.snap(x.snapTo),ut=x.duration||{min:.1,max:2},ut=Tl(ut)?Mh(ut.min,ut.max):Mh(ut,ut),dt=ee.delayedCall(x.delay||et/2||.1,function(){var ft=ot(),Ut=hi()-xt<500,Ct=wt.tween;if((Ut||Math.abs(N.getVelocity())<10)&&!Ct&&!jm&&Rt!==ft){var At=(ft-U)/ie,ae=r&&!P?r.totalProgress():At,ne=Ut?0:(ae-it)/(hi()-_h)*1e3||0,jt=ee.utils.clamp(-At,1-At,uc(ne/2)*ne/.185),ce=At+(x.inertia===!1?0:jt),oe,fe,re=x,De=re.onStart,ve=re.onInterrupt,Le=re.onComplete;if(oe=zt(ce,N),xh(oe)||(oe=ce),fe=Math.max(0,Math.round(U+oe*ie)),ft<=Ft&&ft>=U&&fe!==ft){if(Ct&&!Ct._initted&&Ct.data<=uc(fe-ft))return;x.inertia===!1&&(jt=oe-At),wt(fe,{duration:ut(uc(Math.max(uc(ce-ae),uc(oe-ae))*.185/ne/.05||0)),ease:x.ease||"power3",data:uc(fe-ft),onInterrupt:function(){return dt.restart(!0)&&ve&&lc(N,ve)},onComplete:function(){N.update(),Rt=ot(),r&&!P&&(O?O.resetTo("totalProgress",oe,r._tTime/r._tDur):r.progress(oe)),G=it=r&&!P?r.totalProgress():N.progress,y&&y(N),Le&&lc(N,Le)}},ft,jt*ie,fe-ft-jt*ie),De&&lc(N,De,wt.tween)}}else N.isActive&&Rt!==ft&&dt.restart(!0)}).pause()),l&&(p1[l]=N),f=N.trigger=Ui(f||h!==!0&&h),lt=f&&f._gsap&&f._gsap.stRevert,lt&&(lt=lt(N)),h=h===!0?f:Ui(h),vr(o)&&(o={targets:f,className:o}),h&&(g===!1||g===kr||(g=!g&&h.parentNode&&h.parentNode.style&&Xr(h.parentNode).display==="flex"?!1:Cn),N.pin=h,Bt=ee.core.getCache(h),Bt.spacer?Gt=Bt.pinState:(R&&(R=Ui(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Bt.spacerIsNative=!!R,R&&(Bt.spacerState=Vm(R))),Bt.spacer=B=R||Xe.createElement("div"),B.classList.add("pin-spacer"),l&&B.classList.add("pin-spacer-"+l),Bt.pinState=Gt=Vm(h)),i.force3D!==!1&&ee.set(h,{force3D:!0}),N.spacer=B=Bt.spacer,H=Xr(h),Ht=H[g+M.os2],Q=ee.getProperty(h),$=ee.quickSetter(h,M.a,Pn),l1(h,B,H),T=Vm(h)),I){Nt=Tl(I)?kR(I,XR):XR,z=Hm("scroller-start",l,L,M,Nt,0),Qt=Hm("scroller-end",l,L,M,Nt,0,z),J=z["offset"+M.op.d2];var Yt=Ui(_a(L,"content")||L);Et=this.markerStart=Hm("start",l,Yt,M,Nt,J,0,A),Mt=this.markerEnd=Hm("end",l,Yt,M,Nt,J,0,A),A&&(gt=ee.quickSetter([Et,Mt],M.a,Pn)),!w&&!(ss.length&&_a(L,"fixedMarkers")===!0)&&(aP(V?ze:L),ee.set([z,Qt],{force3D:!0}),bt=ee.quickSetter(z,M.a,Pn),k=ee.quickSetter(Qt,M.a,Pn))}if(A){var Tt=A.vars.onUpdate,st=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){N.update(0,0,1),Tt&&Tt.apply(A,st||[])})}if(N.previous=function(){return Me[Me.indexOf(N)-1]},N.next=function(){return Me[Me.indexOf(N)+1]},N.revert=function(ft,Ut){if(!Ut)return N.kill(!0);var Ct=ft!==!1||!N.enabled,At=fi;Ct!==N.isReverted&&(Ct&&(at=Math.max(ot(),N.scroll.rec||0),nt=N.progress,rt=r&&r.progress()),Et&&[Et,Mt,z,Qt].forEach(function(ae){return ae.style.display=Ct?"none":"block"}),Ct&&(fi=N,N.update(Ct)),h&&(!E||!N.isActive)&&(Ct?fP(h,B,Gt):l1(h,B,Xr(h),Dt)),Ct||N.update(Ct),fi=At,N.isReverted=Ct)},N.refresh=function(ft,Ut,Ct,At){if(!((fi||!N.enabled)&&!Ut)){if(h&&ft&&Wr){kn(e,"scrollEnd",f2);return}!Ni&&ht&&ht(N),fi=N,wt.tween&&!Ct&&(wt.tween.kill(),wt.tween=0),O&&O.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Zt){return Zt.vars.immediateRender&&Zt.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var ae=St(),ne=W(),jt=A?A.duration():Fs(L,M),ce=ie<=.01||!ie,oe=0,fe=At||0,re=Tl(Ct)?Ct.end:i.end,De=i.endTrigger||f,ve=Tl(Ct)?Ct.start:i.start||(i.start===0||!f?0:h?"0 0":"0 100%"),Le=N.pinnedContainer=i.pinnedContainer&&Ui(i.pinnedContainer,N),vn=f&&Math.max(0,Me.indexOf(N))||0,Lt=vn,b,F,K,j,X,_t,Pt,qt,kt,Jt,$t,Kt,le;for(I&&Tl(Ct)&&(Kt=ee.getProperty(z,M.p),le=ee.getProperty(Qt,M.p));Lt-- >0;)_t=Me[Lt],_t.end||_t.refresh(0,1)||(fi=N),Pt=_t.pin,Pt&&(Pt===f||Pt===h||Pt===Le)&&!_t.isReverted&&(Jt||(Jt=[]),Jt.unshift(_t),_t.revert(!0,!0)),_t!==Me[Lt]&&(vn--,Lt--);for(di(ve)&&(ve=ve(N)),ve=zR(ve,"start",N),U=ZR(ve,f,ae,M,ot(),Et,z,N,ne,ct,w,jt,A,N._startClamp&&"_startClamp")||(h?-.001:0),di(re)&&(re=re(N)),vr(re)&&!re.indexOf("+=")&&(~re.indexOf(" ")?re=(vr(ve)?ve.split(" ")[0]:"")+re:(oe=Xm(re.substr(2),ae),re=vr(ve)?ve:(A?ee.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,U):U)+oe,De=f)),re=zR(re,"end",N),Ft=Math.max(U,ZR(re||(De?"100% 0":jt),De,ae,M,ot()+oe,Mt,Qt,N,ne,ct,w,jt,A,N._endClamp&&"_endClamp"))||-.001,oe=0,Lt=vn;Lt--;)_t=Me[Lt]||{},Pt=_t.pin,Pt&&_t.start-_t._pinPush<=U&&!A&&_t.end>0&&(b=_t.end-(N._startClamp?Math.max(0,_t.start):_t.start),(Pt===f&&_t.start-_t._pinPush<U||Pt===Le)&&isNaN(ve)&&(oe+=b*(1-_t.progress)),Pt===h&&(fe+=b));if(U+=oe,Ft+=oe,N._startClamp&&(N._startClamp+=oe),N._endClamp&&!Ni&&(N._endClamp=Ft||-.001,Ft=Math.min(Ft,Fs(L,M))),ie=Ft-U||(U-=.01)&&.001,ce&&(nt=ee.utils.clamp(0,1,ee.utils.normalize(U,Ft,at))),N._pinPush=fe,Et&&oe&&(b={},b[M.a]="+="+oe,Le&&(b[M.p]="-="+ot()),ee.set([Et,Mt],b)),h&&!(d1&&N.end>=Fs(L,M)))b=Xr(h),j=M===Rn,K=ot(),Ot=parseFloat(Q(M.a))+fe,!jt&&Ft>1&&($t=(V?Xe.scrollingElement||yr:L).style,$t={style:$t,value:$t["overflow"+M.a.toUpperCase()]},V&&Xr(ze)["overflow"+M.a.toUpperCase()]!=="scroll"&&($t.style["overflow"+M.a.toUpperCase()]="scroll")),l1(h,B,b),T=Vm(h),F=va(h,!0),qt=w&&ga(L,j?ci:Rn)(),g?(Dt=[g+M.os2,ie+fe+Pn],Dt.t=B,Lt=g===Cn?Km(h,M)+ie+fe:0,Lt&&(Dt.push(M.d,Lt+Pn),B.style.flexBasis!=="auto"&&(B.style.flexBasis=Lt+Pn)),pc(Dt),Le&&Me.forEach(function(Zt){Zt.pin===Le&&Zt.vars.pinSpacing!==!1&&(Zt._subPinOffset=!0)}),w&&ot(at)):(Lt=Km(h,M),Lt&&B.style.flexBasis!=="auto"&&(B.style.flexBasis=Lt+Pn)),w&&(X={top:F.top+(j?K-U:qt)+Pn,left:F.left+(j?qt:K-U)+Pn,boxSizing:"border-box",position:"fixed"},X[Al]=X["max"+mc]=Math.ceil(F.width)+Pn,X[wl]=X["max"+M1]=Math.ceil(F.height)+Pn,X[kr]=X[kr+Eh]=X[kr+bh]=X[kr+Ah]=X[kr+Th]="0",X[Cn]=b[Cn],X[Cn+Eh]=b[Cn+Eh],X[Cn+bh]=b[Cn+bh],X[Cn+Ah]=b[Cn+Ah],X[Cn+Th]=b[Cn+Th],D=dP(Gt,X,E),Ni&&ot(0)),r?(kt=r._initted,r1(1),r.render(r.duration(),!0,!0),pt=Q(M.a)-Ot+ie+fe,mt=Math.abs(ie-pt)>1,w&&mt&&D.splice(D.length-2,2),r.render(0,!0,!0),kt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),r1(0)):pt=ie,$t&&($t.value?$t.style["overflow"+M.a.toUpperCase()]=$t.value:$t.style.removeProperty("overflow-"+M.a));else if(f&&ot()&&!A)for(F=f.parentNode;F&&F!==ze;)F._pinOffset&&(U-=F._pinOffset,Ft-=F._pinOffset),F=F.parentNode;Jt&&Jt.forEach(function(Zt){return Zt.revert(!1,!0)}),N.start=U,N.end=Ft,Xt=Vt=Ni?at:ot(),!A&&!Ni&&!Mo&&(Xt<at&&ot(at),N.scroll.rec=0),N.revert(!1,!0),xt=hi(),dt&&(Rt=-1,dt.restart(!0)),fi=0,r&&P&&(r._initted||rt)&&r.progress()!==rt&&r.progress(rt||0,!0).render(r.time(),!0,!0),(ce||nt!==N.progress||A||_||r&&!r._initted)&&(r&&!P&&(r._initted||nt||r.vars.immediateRender!==!1)&&r.totalProgress(A&&U<-.001&&!nt?ee.utils.normalize(U,Ft,0):nt,!0),N.progress=ce||(Xt-U)/ie===nt?0:nt),h&&g&&(B._pinOffset=Math.round(N.progress*pt)),O&&O.invalidate(),isNaN(Kt)||(Kt-=ee.getProperty(z,M.p),le-=ee.getProperty(Qt,M.p),Gm(z,M,Kt),Gm(Et,M,Kt-(At||0)),Gm(Qt,M,le),Gm(Mt,M,le-(At||0))),ce&&!Ni&&N.update(),c&&!Ni&&!It&&(It=!0,c(N),It=!1)}},N.getVelocity=function(){return(ot()-Vt)/(hi()-_h)*1e3||0},N.endAnimation=function(){gh(N.callbackAnimation),r&&(O?O.progress(1):r.paused()?P||gh(r,N.direction<0,1):gh(r,r.reversed()))},N.labelToScroll=function(ft){return r&&r.labels&&(U||N.refresh()||U)+r.labels[ft]/r.duration()*ie||0},N.getTrailing=function(ft){var Ut=Me.indexOf(N),Ct=N.direction>0?Me.slice(0,Ut).reverse():Me.slice(Ut+1);return(vr(ft)?Ct.filter(function(At){return At.vars.preventOverlaps===ft}):Ct).filter(function(At){return N.direction>0?At.end<=U:At.start>=Ft})},N.update=function(ft,Ut,Ct){if(!(A&&!Ct&&!ft)){var At=Ni===!0?at:N.scroll(),ae=ft?0:(At-U)/ie,ne=ae<0?0:ae>1?1:ae||0,jt=N.progress,ce,oe,fe,re,De,ve,Le,vn;if(Ut&&(Vt=Xt,Xt=A?ot():At,x&&(it=G,G=r&&!P?r.totalProgress():ne)),m&&h&&!fi&&!Pm&&Wr&&(!ne&&U<At+(At-Vt)/(hi()-_h)*m?ne=1e-4:ne===1&&Ft>At+(At-Vt)/(hi()-_h)*m&&(ne=.9999)),ne!==jt&&N.enabled){if(ce=N.isActive=!!ne&&ne<1,oe=!!jt&&jt<1,ve=ce!==oe,De=ve||!!ne!=!!jt,N.direction=ne>jt?1:-1,N.progress=ne,De&&!fi&&(fe=ne&&!jt?0:ne===1?1:jt===1?2:3,P&&(re=!ve&&tt[fe+1]!=="none"&&tt[fe+1]||tt[fe],vn=r&&(re==="complete"||re==="reset"||re in r))),v&&(ve||vn)&&(vn||d||!r)&&(di(v)?v(N):N.getTrailing(v).forEach(function(K){return K.endAnimation()})),P||(O&&!fi&&!Pm?(O._dp._time-O._start!==O._time&&O.render(O._dp._time-O._start),O.resetTo?O.resetTo("totalProgress",ne,r._tTime/r._tDur):(O.vars.totalProgress=ne,O.invalidate().restart())):r&&r.totalProgress(ne,!!(fi&&(xt||ft)))),h){if(ft&&g&&(B.style[g+M.os2]=Ht),!w)$(yh(Ot+pt*ne));else if(De){if(Le=!ft&&ne>jt&&Ft+1>At&&At+1>=Fs(L,M),E)if(!ft&&(ce||Le)){var Lt=va(h,!0),b=At-U;JR(h,ze,Lt.top+(M===Rn?b:0)+Pn,Lt.left+(M===Rn?0:b)+Pn)}else JR(h,B);pc(ce||Le?D:T),mt&&ne<1&&ce||$(Ot+(ne===1&&!Le?pt:0))}}x&&!wt.tween&&!fi&&!Pm&&dt.restart(!0),o&&(ve||S&&ne&&(ne<1||!s1))&&Rh(o.targets).forEach(function(K){return K.classList[ce||S?"add":"remove"](o.className)}),a&&!P&&!ft&&a(N),De&&!fi?(P&&(vn&&(re==="complete"?r.pause().totalProgress(1):re==="reset"?r.restart(!0).pause():re==="restart"?r.restart(!0):r[re]()),a&&a(N)),(ve||!s1)&&(u&&ve&&lc(N,u),Z[fe]&&lc(N,Z[fe]),S&&(ne===1?N.kill(!1,1):Z[fe]=0),ve||(fe=ne===1?1:3,Z[fe]&&lc(N,Z[fe]))),C&&!ce&&Math.abs(N.getVelocity())>(xh(C)?C:2500)&&(gh(N.callbackAnimation),O?O.progress(1):gh(r,re==="reverse"?1:!ne,1))):P&&a&&!fi&&a(N)}if(k){var F=A?At/A.duration()*(A._caScrollDist||0):At;bt(F+(z._isFlipped?1:0)),k(F)}gt&&gt(-At/A.duration()*(A._caScrollDist||0))}},N.enable=function(ft,Ut){N.enabled||(N.enabled=!0,kn(L,"resize",Sh),V||kn(L,"scroll",cc),ht&&kn(e,"refreshInit",ht),ft!==!1&&(N.progress=nt=0,Xt=Vt=Rt=ot()),Ut!==!1&&N.refresh())},N.getTween=function(ft){return ft&&wt?wt.tween:O},N.setPositions=function(ft,Ut,Ct,At){if(A){var ae=A.scrollTrigger,ne=A.duration(),jt=ae.end-ae.start;ft=ae.start+jt*ft/ne,Ut=ae.start+jt*Ut/ne}N.refresh(!1,!1,{start:HR(ft,Ct&&!!N._startClamp),end:HR(Ut,Ct&&!!N._endClamp)},At),N.update()},N.adjustPinSpacing=function(ft){if(Dt&&ft){var Ut=Dt.indexOf(M.d)+1;Dt[Ut]=parseFloat(Dt[Ut])+ft+Pn,Dt[1]=parseFloat(Dt[1])+ft+Pn,pc(Dt)}},N.disable=function(ft,Ut){if(ft!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,Ut||O&&O.pause(),at=0,Bt&&(Bt.uncache=1),ht&&Gn(e,"refreshInit",ht),dt&&(dt.pause(),wt.tween&&wt.tween.kill()&&(wt.tween=0)),!V)){for(var Ct=Me.length;Ct--;)if(Me[Ct].scroller===L&&Me[Ct]!==N)return;Gn(L,"resize",Sh),V||Gn(L,"scroll",cc)}},N.kill=function(ft,Ut){N.disable(ft,Ut),O&&!Ut&&O.kill(),l&&delete p1[l];var Ct=Me.indexOf(N);Ct>=0&&Me.splice(Ct,1),Ct===Li&&Ym>0&&Li--,Ct=0,Me.forEach(function(At){return At.scroller===N.scroller&&(Ct=1)}),Ct||Ni||Mo||(N.scroll.rec=0),r&&(r.scrollTrigger=null,ft&&r.revert({kill:!1}),Ut||r.kill()),Et&&[Et,Mt,z,Qt].forEach(function(At){return At.parentNode&&At.parentNode.removeChild(At)}),wh===N&&(wh=0),h&&(Bt&&(Bt.uncache=1),Ct=0,Me.forEach(function(At){return At.pin===h&&Ct++}),Ct||(Bt.spacer=0)),i.onKill&&i.onKill(N)},Me.push(N),N.enable(!1,!1),lt&&lt(N),r&&r.add&&!ie){var yt=N.update;N.update=function(){N.update=yt,ye.cache++,U||Ft||N.refresh()},ee.delayedCall(.01,N.update),ie=.01,U=Ft=0}else N.refresh();h&&cP()},e.register=function(i){return fc||(ee=i||s2(),r2()&&window.document&&e.enable(),fc=vh),fc},e.defaults=function(i){if(i)for(var r in i)zm[r]=i[r];return zm},e.disable=function(i,r){vh=0,Me.forEach(function(a){return a[r?"kill":"disable"](i)}),Gn(be,"wheel",cc),Gn(Xe,"scroll",cc),clearInterval(Nm),Gn(Xe,"touchcancel",Bs),Gn(ze,"touchstart",Bs),Bm(Gn,Xe,"pointerdown,touchstart,mousedown",VR),Bm(Gn,Xe,"pointerup,touchend,mouseup",GR),Jm.kill(),Im(Gn);for(var s=0;s<ye.length;s+=3)Fm(Gn,ye[s],ye[s+1]),Fm(Gn,ye[s],ye[s+2])},e.enable=function(){if(be=window,Xe=document,yr=Xe.documentElement,ze=Xe.body,ee){if(Rh=ee.utils.toArray,Mh=ee.utils.clamp,h1=ee.core.context||Bs,r1=ee.core.suppressOverwrites||Bs,v1=be.history.scrollRestoration||"auto",m1=be.pageYOffset||0,ee.core.globals("ScrollTrigger",e),ze){vh=1,dc=document.createElement("div"),dc.style.height="100vh",dc.style.position="absolute",m2(),iP(),_n.register(ee),e.isTouch=_n.isTouch,So=_n.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),f1=_n.isTouch===1,kn(be,"wheel",cc),_1=[be,Xe,yr,ze],ee.matchMedia?(e.matchMedia=function(c){var d=ee.matchMedia(),f;for(f in c)d.add(f,c[f]);return d},ee.addEventListener("matchMediaInit",function(){d2(),T1()}),ee.addEventListener("matchMediaRevert",function(){return h2()}),ee.addEventListener("matchMedia",function(){El(0,1),Ul("matchMedia")}),ee.matchMedia().add("(orientation: portrait)",function(){return o1(),o1})):console.warn("Requires GSAP 3.11.0 or later"),o1(),kn(Xe,"scroll",cc);var i=ze.hasAttribute("style"),r=ze.style,s=r.borderTopStyle,a=ee.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=va(ze),Rn.m=Math.round(o.top+Rn.sc())||0,ci.m=Math.round(o.left+ci.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(ze.setAttribute("style",""),ze.removeAttribute("style")),Nm=setInterval(WR,250),ee.delayedCall(.5,function(){return Pm=0}),kn(Xe,"touchcancel",Bs),kn(ze,"touchstart",Bs),Bm(kn,Xe,"pointerdown,touchstart,mousedown",VR),Bm(kn,Xe,"pointerup,touchend,mouseup",GR),c1=ee.utils.checkPrefix("transform"),qm.push(c1),fc=hi(),Jm=ee.delayedCall(.2,El).pause(),hc=[Xe,"visibilitychange",function(){var c=be.innerWidth,d=be.innerHeight;Xe.hidden?(BR=c,FR=d):(BR!==c||FR!==d)&&Sh()},Xe,"DOMContentLoaded",El,be,"load",El,be,"resize",Sh],Im(kn),Me.forEach(function(c){return c.enable(0,1)}),l=0;l<ye.length;l+=3)Fm(Gn,ye[l],ye[l+1]),Fm(Gn,ye[l],ye[l+2])}else if(Xe){var u=function c(){e.enable(),Xe.removeEventListener("DOMContentLoaded",c)};Xe.addEventListener("DOMContentLoaded",u)}}},e.config=function(i){"limitCallbacks"in i&&(s1=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Nm)||(Nm=r)&&setInterval(WR,r),"ignoreMobileResize"in i&&(f1=e.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Im(Gn)||Im(kn,i.autoRefreshEvents||"none"),e2=(i.autoRefreshEvents+"").indexOf("resize")===-1)},e.scrollerProxy=function(i,r){var s=Ui(i),a=ye.indexOf(s),o=Cl(s);~a&&ye.splice(a,o?6:2),r&&(o?ss.unshift(be,r,ze,r,yr,r):ss.unshift(s,r))},e.clearMatchMedia=function(i){Me.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},e.isInViewport=function(i,r,s){var a=(vr(i)?Ui(i):i).getBoundingClientRect(),o=a[s?Al:wl]*r||0;return s?a.right-o>0&&a.left+o<be.innerWidth:a.bottom-o>0&&a.top+o<be.innerHeight},e.positionInViewport=function(i,r,s){vr(i)&&(i=Ui(i));var a=i.getBoundingClientRect(),o=a[s?Al:wl],l=r==null?o/2:r in Qm?Qm[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/be.innerWidth:(a.top+l)/be.innerHeight},e.killAll=function(i){if(Me.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Dl.killAll||[];Dl={},r.forEach(function(s){return s()})}},e})();Te.version="3.15.1";Te.saveStyles=function(e){return e?Rh(e).forEach(function(t){if(t&&t.style){var n=_r.indexOf(t);n>=0&&_r.splice(n,5),_r.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),ee.core.getCache(t),h1())}}):_r};Te.revert=function(e,t){return T1(!e,t)};Te.create=function(e,t){return new Te(e,t)};Te.refresh=function(e){return e?Sh(!0):(fc||Te.register())&&El(!0)};Te.update=function(e){return++ye.cache&&ya(e===!0?2:0)};Te.clearScrollMemory=p2;Te.maxScroll=function(e,t){return Fs(e,t?ci:Rn)};Te.getScrollFunc=function(e,t){return ga(Ui(e),t?ci:Rn)};Te.getById=function(e){return p1[e]};Te.getAll=function(){return Me.filter(function(e){return e.vars.id!=="ScrollSmoother"})};Te.isScrolling=function(){return!!Wr};Te.snapDirectional=b1;Te.addEventListener=function(e,t){var n=Dl[e]||(Dl[e]=[]);~n.indexOf(t)||n.push(t)};Te.removeEventListener=function(e,t){var n=Dl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)};Te.batch=function(e,t){var n=[],i={},r=t.interval||.016,s=t.batchMax||1e9,a=function(u,c){var d=[],f=[],h=ee.delayedCall(r,function(){c(d,f),d=[],f=[]}).pause();return function(g){d.length||h.restart(!0),d.push(g.trigger),f.push(g),s<=d.length&&h.progress(1)}},o;for(o in t)i[o]=o.substr(0,2)==="on"&&di(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return di(s)&&(s=s(),kn(Te,"refresh",function(){return s=t.batchMax()})),Rh(e).forEach(function(l){var u={};for(o in i)u[o]=i[o];u.trigger=l,n.push(Te.create(u))}),n};var QR=function(t,n,i,r){return n>r?t(r):n<0&&t(0),i>r?(r-n)/(i-n):i<0?n/(n-i):1},u1=function e(t,n){n===!0?t.style.removeProperty("touch-action"):t.style.touchAction=n===!0?"auto":n?"pan-"+n+(_n.isTouch?" pinch-zoom":""):"none",t===yr&&e(ze,n)},km={auto:1,scroll:1},mP=function(t){var n=t.event,i=t.target,r=t.axis,s=(n.changedTouches?n.changedTouches[0]:n).target,a=s._gsap||ee.core.getCache(s),o=hi(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==ze&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(km[(l=Xr(s)).overflowY]||km[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==i&&!Cl(s)&&(km[(l=Xr(s)).overflowY]||km[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},_2=function(t,n,i,r){return _n.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:r=r&&mP,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&kn(Xe,_n.eventTypes[0],$R,!1,!0)},onDisable:function(){return Gn(Xe,_n.eventTypes[0],$R,!0)}})},gP=/(input|label|select|textarea)/i,jR,$R=function(t){var n=gP.test(t.target.tagName);(n||jR)&&(t._gsapAllow=!0,jR=n)},_P=function(t){Tl(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var n=t,i=n.normalizeScrollX,r=n.momentum,s=n.allowNestedScroll,a=n.onRelease,o,l,u=Ui(t.target)||yr,c=ee.core.globals().ScrollSmoother,d=c&&c.get(),f=So&&(t.content&&Ui(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),h=ga(u,Rn),g=ga(u,ci),_=1,m=(_n.isTouch&&be.visualViewport?be.visualViewport.scale*be.visualViewport.width:be.outerWidth)/be.innerWidth,p=0,y=di(r)?function(){return r(o)}:function(){return r||2.8},S,x,E=_2(u,t.type,!0,s),R=function(){return x=!1},A=Bs,C=Bs,v=function(){l=Fs(u,Rn),C=Mh(So?1:0,l),i&&(A=Mh(0,Fs(u,ci))),S=Rl},M=function(){f._gsap.y=yh(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},P=function(){if(x){requestAnimationFrame(R);var I=yh(o.deltaY/2),ct=C(h.v-I);if(f&&ct!==h.v+h.offset){h.offset=ct-h.v;var N=yh((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",f._gsap.y=N+"px",h.cacheID=ye.cache,ya()}return!0}h.offset&&M(),x=!0},L,Y,V,w,Z=function(){v(),L.isActive()&&L.vars.scrollY>l&&(h()>l?L.progress(1)&&h(l):L.resetTo("scrollY",l))};return f&&ee.set(f,{y:"+=0"}),t.ignoreCheck=function(tt){return So&&tt.type==="touchmove"&&P(tt)||_>1.05&&tt.type!=="touchstart"||o.isGesturing||tt.touches&&tt.touches.length>1},t.onPress=function(){x=!1;var tt=_;_=yh((be.visualViewport&&be.visualViewport.scale||1)/m),L.pause(),tt!==_&&u1(u,_>1.01?!0:i?!1:"x"),Y=g(),V=h(),v(),S=Rl},t.onRelease=t.onGestureStart=function(tt,I){if(h.offset&&M(),!I)w.restart(!0);else{ye.cache++;var ct=y(),N,ht;i&&(N=g(),ht=N+ct*.05*-tt.velocityX/.227,ct*=QR(g,N,ht,Fs(u,ci)),L.vars.scrollX=A(ht)),N=h(),ht=N+ct*.05*-tt.velocityY/.227,ct*=QR(h,N,ht,Fs(u,Rn)),L.vars.scrollY=C(ht),L.invalidate().duration(ct).play(.01),(So&&L.vars.scrollY>=l||N>=l-1)&&ee.to({},{onUpdate:Z,duration:ct})}a&&a(tt)},t.onWheel=function(){L._ts&&L.pause(),hi()-p>1e3&&(S=0,p=hi())},t.onChange=function(tt,I,ct,N,ht){if(Rl!==S&&v(),I&&i&&g(A(N[2]===I?Y+(tt.startX-tt.x):g()+I-N[1])),ct){h.offset&&M();var St=ht[2]===ct,W=St?V+tt.startY-tt.y:h()+ct-ht[1],Rt=C(W);St&&W!==Rt&&(V+=Rt-W),h(Rt)}(ct||I)&&ya()},t.onEnable=function(){u1(u,i?!1:"x"),Te.addEventListener("refresh",Z),kn(be,"resize",Z),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),E.enable()},t.onDisable=function(){u1(u,!0),Gn(be,"resize",Z),Te.removeEventListener("refresh",Z),E.kill()},t.lockAxis=t.lockAxis!==!1,o=new _n(t),o.iOS=So,So&&!h()&&h(1),So&&ee.ticker.add(Bs),w=o._dc,L=ee.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:g2(h,h(),function(){return L.pause()})},onUpdate:ya,onComplete:w.vars.onComplete}),o};Te.sort=function(e){if(di(e))return Me.sort(e);var t=be.pageYOffset||0;return Te.getAll().forEach(function(n){return n._sortY=n.trigger?t+n.trigger.getBoundingClientRect().top:n.start+be.innerHeight}),Me.sort(e||function(n,i){return(n.vars.refreshPriority||0)*-1e6+(n.vars.containerAnimation?1e6:n._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Te.observe=function(e){return new _n(e)};Te.normalizeScroll=function(e){if(typeof e>"u")return Oi;if(e===!0&&Oi)return Oi.enable();if(e===!1){Oi&&Oi.kill(),Oi=e;return}var t=e instanceof _n?e:_P(e);return Oi&&Oi.target===t.target&&Oi.kill(),Cl(t.target)&&(Oi=t),t};Te.core={_getVelocityProp:Lm,_inputObserver:_2,_scrollers:ye,_proxies:ss,bridge:{ss:function(){Wr||Ul("scrollStart"),Wr=hi()},ref:function(){return fi}}};s2()&&ee.registerPlugin(Te);var Mn=hn(Ai());typeof window<"u"&&wn.registerPlugin(Te);var vP="Draw Attention",v2=.5,y2=(e,t)=>{let n={x:e.x,y:e.y,width:e.width,height:e.height};return t==="right"?{start:{...n,x:e.x+e.width,width:0},end:n}:t==="top"?{start:{...n,height:0},end:n}:t==="bottom"?{start:{...n,y:e.y+e.height,height:0},end:n}:{start:{...n,width:0},end:n}},yP=(e,t,n)=>{let i=Math.max(Number(n)||0,.1),r=Math.max(Number(t)||0,1);if(e==="dotted"){let s=Math.max(r,i*1.8);return{array:`0 ${s}`,period:s}}if(e==="dashed"){let s=Math.max(r-i,.5),a=r*.6+i;return{array:`${s} ${a}`,period:s+a}}return null},xP=({text:e=vP,strokeColor:t="#A78BFA",fillColor:n="currentColor",strokeWidth:i=1.4,drawDuration:r=1.6,fillDelay:s=.2,stagger:a=.05,ease:o="power2.out",trigger:l="mount",fillMode:u="wipe",wipeFrom:c="left",fontSize:d=128,fontWeight:f=800,fontFamily:h="inherit",letterSpacing:g=-4,reverse:_=!1,strokeStyle:m="solid",dashLength:p=10,marching:y=!1,hoverRedraw:S=!1,shadow:x=!1,shadowColor:E,className:R="",style:A={}})=>{let C=(0,Pi.useRef)(null),v=(0,Pi.useRef)(null),M=(0,Pi.useRef)(null),P=(0,Pi.useRef)(null),[L,Y]=(0,Pi.useState)(null),V=(0,Pi.useId)().replace(/[^a-zA-Z0-9_-]/g,""),w=`stroke-text-wipe-${V}`,Z=`stroke-text-reveal-${V}`,tt=`stroke-text-erode-${V}`,I=`stroke-text-shadow-${V}`,ct=(0,Pi.useMemo)(()=>Array.from(String(e??"")),[e]),N=Math.max(d*7,200),ht=yP(m,p,i),St=ht?ht.array:null,W=ht?ht.period:0,Rt=d*.06,xt=d*.016,nt=x&&u!=="none",ot=(0,Pi.useMemo)(()=>({fontFamily:h,fontSize:`${d}px`,fontWeight:f,letterSpacing:`${g}px`}),[h,d,f,g]);(0,Pi.useLayoutEffect)(()=>{let Vt=C.current;if(!Vt||!v.current)return;let U=!1,Ft=()=>{if(U||!v.current)return;let Mt;try{Mt=v.current.getBBox()}catch{return}if(!Mt||!Mt.width)return;let z=Math.max(Number(i)||1,d*.1),Qt={x:Mt.x-z,y:Mt.y-z,width:Mt.width+z*2,height:Mt.height+z*2};Y(Nt=>Nt&&Math.abs(Nt.x-Qt.x)<.5&&Math.abs(Nt.width-Qt.width)<.5&&Math.abs(Nt.y-Qt.y)<.5&&Math.abs(Nt.height-Qt.height)<.5?Nt:Qt)};Ft(),document.fonts?.ready?.then(Ft).catch(()=>{});let Et=typeof ResizeObserver>"u"?null:new ResizeObserver(Ft);return Et?.observe(Vt),()=>{U=!0,Et?.disconnect()}},[ct,h,d,f,g,i]),(0,Pi.useLayoutEffect)(()=>{let Vt=C.current;if(typeof window>"u"||!Vt||!L)return;let U=wn.utils.toArray(Vt.querySelectorAll("[data-stroke-char]")),Ft=wn.utils.toArray(Vt.querySelectorAll("[data-fill-char]")),Et=M.current,Mt=v.current,z=P.current;if(!U.length)return;let Qt=u!=="none",Nt=Qt&&u==="wipe",It=Math.max(.4,r*.5),ie=_?{each:a,from:"end"}:a,Gt=y2(L,c),D={dx:Rt,dy:Rt,"flood-opacity":v2},T={dx:0,dy:0,"flood-opacity":0},B=[...U,...Ft,Et,z].filter(Boolean),J=()=>{wn.killTweensOf(B),wn.set(U,{strokeDasharray:N,strokeDashoffset:N,strokeOpacity:1}),wn.set(Ft,{opacity:Nt?1:0}),Et&&wn.set(Et,{attr:Gt.start}),z&&wn.set(z,{attr:T})},Q=()=>{wn.killTweensOf(B),wn.set(U,{strokeDasharray:N,strokeDashoffset:0,strokeOpacity:1}),wn.set(Ft,{opacity:Qt?1:0}),Et&&wn.set(Et,{attr:Qt?Gt.end:Gt.start}),z&&wn.set(z,{attr:Qt?D:T})};if(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return Q(),()=>wn.killTweensOf(B);let Ot=()=>{J();let H=l==="loop",G=wn.timeline({paused:!0,repeat:H?-1:0,repeatDelay:H?.9:0,yoyo:H,defaults:{overwrite:"auto"}});return G.to(U,{strokeDashoffset:0,duration:r,ease:o,stagger:ie},0),Nt&&Et?G.to(Et,{attr:Gt.end,duration:It,ease:"power2.inOut"},r+s):Qt&&G.to(Ft,{opacity:1,duration:It,ease:"power2.out",stagger:ie},r+s),z&&Qt&&G.to(z,{attr:D,duration:It*1.4,ease:"power3.out"},r+s+It*.3),G},pt=null,Ht=null,Dt=null,bt=[],mt=H=>{Vt.addEventListener("pointerenter",H),bt.push(H)};l==="hover"?(Q(),mt(()=>{pt?.kill(),pt=Ot(),pt.play(0)})):(pt=Ot(),l==="scroll"?Ht=Te.create({trigger:Vt,start:"top 82%",once:!0,onEnter:()=>pt?.play(0)}):pt.play(0),S&&l!=="loop"&&mt(()=>{!pt||pt.progress()<1||Dt?.isActive()||(Dt?.kill(),Dt=wn.timeline().to(U,{strokeOpacity:0,duration:.2,ease:"power1.out"}).set(U,{strokeDashoffset:N,strokeOpacity:1}).to(U,{strokeDashoffset:0,duration:r*.8,ease:o,stagger:ie}))}));let k=St&&y&&Mt?wn.fromTo(Mt,{strokeDashoffset:0},{strokeDashoffset:-W,duration:W/(d*.22),ease:"none",repeat:-1}):null;return()=>{bt.forEach(H=>Vt.removeEventListener("pointerenter",H)),Ht?.kill(),pt?.kill(),Dt?.kill(),k?.kill(),wn.killTweensOf(B)}},[L,N,r,s,a,o,l,u,c,_,St,W,y,S,nt,Rt,d]);let wt=L?`${L.x} ${L.y} ${L.width} ${L.height}`:`0 ${-d} 600 ${d*1.3}`,Bt=L?y2(L,c).start:null,zt=L?{x:L.x-d,y:L.y-d,width:L.width+d*2,height:L.height+d*2}:{},Xt=(0,Mn.jsx)("text",{ref:v,className:"stroke-text__stroke",x:"0",y:"0",fill:"none",stroke:t,strokeWidth:i,strokeLinejoin:"round",strokeLinecap:"round",strokeDasharray:St||void 0,mask:St?`url(#${Z})`:void 0,style:ot,children:ct.map((Vt,U)=>(0,Mn.jsx)("tspan",{"data-stroke-char":St?void 0:!0,children:Vt},`s-${U}`))},St?"pattern":"solid");return(0,Mn.jsx)("span",{ref:C,className:`stroke-text ${l==="hover"?"stroke-text--hover":""} ${R}`.trim(),style:{...A,"--stroke-text-width":`${L?L.width:600}px`},role:"img","aria-label":String(e??""),children:(0,Mn.jsxs)("svg",{className:"stroke-text__svg",viewBox:wt,preserveAspectRatio:"xMidYMid meet","aria-hidden":"true",style:L?void 0:{visibility:"hidden"},children:[(0,Mn.jsxs)("defs",{children:[u==="wipe"&&Bt&&(0,Mn.jsx)("clipPath",{id:w,clipPathUnits:"userSpaceOnUse",children:(0,Mn.jsx)("rect",{ref:M,x:Bt.x,y:Bt.y,width:Bt.width,height:Bt.height})}),St&&(0,Mn.jsx)("filter",{id:tt,filterUnits:"userSpaceOnUse",...zt,children:(0,Mn.jsx)("feMorphology",{operator:"erode",radius:(Number(i)||1)/2+.75})}),St&&(0,Mn.jsxs)("mask",{id:Z,maskUnits:"userSpaceOnUse",...zt,children:[(0,Mn.jsx)("text",{x:"0",y:"0",fill:"none",stroke:"#fff",strokeWidth:(Number(i)||1)+2,strokeLinejoin:"round",strokeLinecap:"round",style:ot,children:ct.map((Vt,U)=>(0,Mn.jsx)("tspan",{"data-stroke-char":!0,children:Vt},`m-${U}`))}),(0,Mn.jsx)("text",{x:"0",y:"0",fill:"#000",stroke:"none",filter:`url(#${tt})`,style:ot,children:ct.map((Vt,U)=>(0,Mn.jsx)("tspan",{children:Vt},`e-${U}`))})]}),nt&&(0,Mn.jsx)("filter",{id:I,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",...zt,children:(0,Mn.jsx)("feDropShadow",{ref:P,dx:Rt,dy:Rt,stdDeviation:xt,floodColor:E||t,floodOpacity:v2})})]}),!St&&Xt,(0,Mn.jsx)("g",{filter:nt?`url(#${I})`:void 0,children:(0,Mn.jsx)("text",{className:"stroke-text__fill",x:"0",y:"0",fill:n,stroke:"none",style:ot,clipPath:u==="wipe"&&Bt?`url(#${w})`:void 0,children:ct.map((Vt,U)=>(0,Mn.jsx)("tspan",{"data-fill-char":!0,children:Vt},`f-${U}`))})}),St&&Xt]})})},x2=xP;var bo=hn(gs());var A1=hn(Ai()),SP={circle:0,square:1,ring:2,sparkle:3},MP={parallax:0,repel:1,attract:2},bP={none:0,up:1,down:2,forward:3},TP=2e4,S2=900,M2=9e3,Dh=4,$m=10,t0=1/Math.tan(7.5*Math.PI/180),A2=.1,Ol=100,EP=1.8,E1=1.5,w2=520,R2=46,AP=`#version 300 es
precision highp float;
layout(location = 0) in vec2 aCorner;
layout(location = 1) in vec3 aPosition;
layout(location = 2) in vec4 aRandom;
layout(location = 3) in vec3 aColor;
uniform mat3 uRotation;
uniform vec3 uOffset;
uniform float uSpread;
uniform float uTime;
uniform float uCamera;
uniform float uAspect;
uniform vec2 uView;
uniform vec3 uDepthColors[2];
uniform vec2 uPageDepth;
uniform float uRatio;
uniform float uSize;
uniform float uRandomness;
uniform float uBlur;
uniform float uFocus;
uniform float uGlow;
uniform float uTwinkle;
uniform int uShape;
uniform int uDrift;
uniform float uTravel;
uniform vec4 uPointer;
uniform int uEffect;
uniform float uStrength;
uniform vec4 uBursts[${Dh}];
uniform int uBurstCount;
uniform float uReveal;
out vec2 vLocal;
out float vRadius;
out float vBlur;
out float vAlpha;
out float vHalo;
out float vSeed;
out vec3 vColor;

vec3 bob(vec4 r, float t) {
  return vec3(
    sin(t * r.z + 6.28 * r.w) * mix(0.1, 1.5, r.x),
    sin(t * r.y + 6.28 * r.x) * mix(0.1, 1.5, r.w),
    sin(t * r.w + 6.28 * r.y) * mix(0.1, 1.5, r.z)
  );
}

void main() {
  vec3 pos = aPosition * uSpread;
  pos.z *= ${$m.toFixed(1)};
  vec3 wobble = bob(aRandom, uTime);
  vec3 world = uRotation * pos + uOffset + wobble;
  float edge = 1.0;
  if (uDrift == 1 || uDrift == 2) {
    float span = uSpread * 2.0 + 3.0;
    float k = mod(aRandom.w * span + uOffset.y + wobble.y + (uDrift == 1 ? uTravel : -uTravel), span);
    world.y = k - span * 0.5;
    edge = smoothstep(0.0, span * 0.12, k) * smoothstep(span, span * 0.88, k);
  } else if (uDrift == 3) {
    float span = uSpread * ${$m.toFixed(1)} * 2.0 + 3.0;
    float k = mod(aRandom.y * span + uOffset.z + wobble.z + uTravel, span);
    world.z = k - span * 0.5;
    edge = smoothstep(0.0, span * 0.1, k);
  }
  vec3 view = world - vec3(0.0, 0.0, uCamera);
  float dist = length(view);
  float ahead = -view.z;
  if (ahead < ${A2.toFixed(2)} || ahead > ${Ol.toFixed(1)}) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }
  edge *= smoothstep(1.0, 4.0, ahead);
  vec2 ndc = vec2(view.x * ${t0.toFixed(6)} / uAspect, view.y * ${t0.toFixed(6)}) / ahead;
  vec2 screen = (ndc * 0.5 + 0.5) * uView;

  vec2 shift = vec2(0.0);
  float flash = 0.0;
  if (uEffect != 0 && uPointer.z > 0.001) {
    vec2 delta = screen - uPointer.xy;
    float reach = length(delta);
    float falloff = exp(-dot(delta, delta) / (uPointer.w * uPointer.w));
    vec2 away = reach > 0.001 ? delta / reach : vec2(0.0);
    shift += (uEffect == 1 ? away * uPointer.w * 0.5 : -delta * 0.6) * falloff * uStrength * uPointer.z;
  }
  for (int i = 0; i < ${Dh}; i++) {
    if (i >= uBurstCount) break;
    vec4 burst = uBursts[i];
    vec2 delta = screen - burst.xy;
    float reach = length(delta);
    float wave = exp(-pow((reach - burst.z * ${w2.toFixed(1)}) / ${R2.toFixed(1)}, 2.0));
    vec2 away = reach > 0.001 ? delta / reach : vec2(0.0);
    float fade = (1.0 - burst.z) * (1.0 - burst.z) * burst.w;
    shift += away * wave * fade * 56.0 * smoothstep(0.0, 30.0, reach);
    flash += wave * fade;
  }
  screen += shift;

  float diameter = (uRandomness <= 0.0 ? uSize : uSize * (1.0 + uRandomness * (aRandom.x - 0.5)) / dist) * (1.0 + min(flash, 1.0) * 0.6);
  float device = diameter * uRatio;
  float radius = max(diameter, 1.0 / uRatio) * 0.5;
  float coverage = min(1.0, device * device);
  float blur = uBlur * max(uFocus - dist, 0.0) / max(dist, 1.0);
  float halo = uGlow > 0.0 ? radius * 2.5 + 2.0 : 0.0;
  float extent = radius * (uShape == 3 ? 1.6 : 1.0) + blur + halo + 1.5;

  float twinkle = 1.0 - uTwinkle * 0.6 * (0.5 + 0.5 * sin(uTime * (6.0 + aRandom.y * 14.0) + aRandom.w * 40.0));
  float far = smoothstep(${Ol.toFixed(1)}, ${(Ol*.9).toFixed(1)}, ahead);
  float focus = radius / (radius + blur);
  float reveal = clamp(uReveal * 1.6 - aRandom.z * 0.6, 0.0, 1.0);

  vLocal = aCorner * extent;
  vRadius = radius;
  vBlur = blur;
  vHalo = halo;
  vSeed = aRandom.y;
  vAlpha = min(1.0, coverage * twinkle * (1.0 + flash * 1.4)) * far * edge * max(focus, 0.35) * reveal * reveal;
  float depth = clamp(uPageDepth.x + (1.0 - screen.y / uView.y) * uPageDepth.y, 0.0, 1.0);
  vColor = mix(uDepthColors[0], uDepthColors[1], depth);
  gl_Position = vec4((screen + aCorner * extent) / uView * 2.0 - 1.0, 0.0, 1.0);
}`,wP=`#version 300 es
precision highp float;
precision highp int;
uniform int uShape;
uniform float uGlow;
uniform float uRatio;
uniform float uTime;
uniform float uSoft;
uniform float uShimmer;
uniform float uOpacity;
in vec2 vLocal;
in float vRadius;
in float vBlur;
in float vAlpha;
in float vHalo;
in float vSeed;
in vec3 vColor;
out vec4 outColor;

float ray(vec2 q, float aa) {
  float width = 0.14 * max(0.0, 1.0 - q.x);
  return (1.0 - smoothstep(width - aa, width + aa, q.y)) * step(q.x, 1.0);
}

void main() {
  float soft = vBlur + 0.7 / uRatio + vRadius * uSoft;
  float d = length(vLocal);
  float shape;
  if (uShape == 1) {
    float box = max(abs(vLocal.x), abs(vLocal.y));
    shape = 1.0 - smoothstep(vRadius * 0.86 - soft, vRadius * 0.86 + soft, box);
  } else if (uShape == 2) {
    float edge = max(vRadius * 0.22, 0.6 / uRatio);
    shape = 1.0 - smoothstep(edge - soft, edge + soft, abs(d - vRadius * 0.8));
  } else if (uShape == 3) {
    float reach = vRadius * 1.6;
    vec2 q = abs(vLocal) / max(reach, 0.0001);
    float aa = soft / max(reach, 0.0001);
    shape = max(max(ray(q, aa), ray(q.yx, aa)), 1.0 - smoothstep(vRadius * 0.32 - soft, vRadius * 0.32 + soft, d));
  } else {
    shape = 1.0 - smoothstep(vRadius - soft, vRadius + soft, d);
  }
  float halo = vHalo > 0.0 ? exp(-d / (vHalo * 0.35)) * uGlow * 0.4 : 0.0;
  float alpha = clamp(shape + halo * (1.0 - shape), 0.0, 1.0) * vAlpha * uOpacity * (1.0 - uSoft);
  if (alpha < 0.002) discard;
  vec2 uv = vLocal / max(vRadius * 2.0, 0.0001) + 0.5;
  vec3 color = clamp(vColor + uShimmer * 0.2 * sin(uv.yxx + uTime + vSeed * 6.28), 0.0, 1.0);
  outColor = vec4(color * alpha, alpha);
}`,RP=`#version 300 es
precision highp float;
layout(location = 0) in vec2 aCorner;
layout(location = 1) in vec4 aEnds;
layout(location = 2) in vec4 aTint;
uniform vec2 uView;
uniform float uRatio;
uniform float uWidth;
out float vAcross;
out float vHalf;
out vec4 vTint;

void main() {
  vec2 a = aEnds.xy;
  vec2 b = aEnds.zw;
  vec2 along = b - a;
  float span = max(length(along), 0.0001);
  vec2 normal = vec2(-along.y, along.x) / span;
  float reach = uWidth * 0.5 + 1.0 / uRatio;
  vec2 point = mix(a, b, aCorner.x * 0.5 + 0.5) + normal * aCorner.y * reach;
  vAcross = aCorner.y * reach;
  vHalf = uWidth * 0.5;
  vTint = aTint;
  gl_Position = vec4(point / uView * 2.0 - 1.0, 0.0, 1.0);
}`,CP=`#version 300 es
precision highp float;
uniform float uRatio;
uniform float uOpacity;
in float vAcross;
in float vHalf;
in vec4 vTint;
out vec4 outColor;

void main() {
  float edge = 0.6 / uRatio;
  float cover = 1.0 - smoothstep(vHalf - edge, vHalf + edge, abs(vAcross));
  float alpha = cover * vTint.a * uOpacity;
  outColor = vec4(vTint.rgb * alpha, alpha);
}`,xr=(e,t,n)=>Math.min(n,Math.max(t,e)),b2=(e,t,n)=>{let i=e.createShader(t);return i?(e.shaderSource(i,n),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS)?i:(e.deleteShader(i),null)):null},T2=(e,t,n)=>{let i=b2(e,e.VERTEX_SHADER,t),r=b2(e,e.FRAGMENT_SHADER,n),s=e.createProgram();if(!i||!r||!s)return null;if(e.attachShader(s,i),e.attachShader(s,r),e.linkProgram(s),e.deleteShader(i),e.deleteShader(r),!e.getProgramParameter(s,e.LINK_STATUS))return e.deleteProgram(s),null;let a={},o=e.getProgramParameter(s,e.ACTIVE_UNIFORMS);for(let l=0;l<o;l++){let u=e.getActiveUniform(s,l);u&&(a[u.name.replace("[0]","")]=e.getUniformLocation(s,u.name))}return{program:s,uniforms:a}},DP=e=>{let t=e>>>0;return()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}},UP=e=>1-Math.pow(1-xr(e,0,1),3),E2=(e,t)=>(e%t+t)%t,OP=({particleCount:e=200,particleSpread:t=10,speed:n=.1,particleColors:i=["#ffffff"],moveParticlesOnHover:r=!0,particleHoverFactor:s=1,alphaParticles:a=!1,particleBaseSize:o=100,sizeRandomness:l=1,cameraDistance:u=20,disableRotation:c=!1,pixelRatio:d,shape:f="circle",glow:h=.5,twinkle:g=.3,depthOfField:_=0,connections:m=!1,connectionDistance:p=110,hoverEffect:y="parallax",hoverRadius:S=140,clickBurst:x=!0,drift:E="none",driftSpeed:R=1,variation:A=0,intro:C=!0,opacity:v=1,lightMode:M=!1,paused:P=!1,pageDepthRef:L,className:Y="",style:V})=>{let w=(0,bo.useRef)(null),Z=(0,bo.useRef)(null),tt=(0,bo.useRef)(null),I=(Array.isArray(i)?i:[i]).filter(Boolean).map(String),ct={pageDepthRef:L,count:xr(Math.round(e),1,TP),spread:Math.max(.1,t),speed:n,colors:I.length?I:["#ffffff"],mouse:r,hoverFactor:Math.max(0,s),soft:a,size:Math.max(0,o),randomness:Math.max(0,l),camera:Math.max(1,u),rotate:!c,dpr:d,shape:SP[f]??0,glow:Math.max(0,h),twinkle:xr(g,0,1),depthOfField:Math.max(0,_),connections:m,connectionDistance:Math.max(10,p),hoverEffect:MP[y]??0,hoverRadius:Math.max(20,S),clickBurst:x,drift:bP[E]??0,driftSpeed:R,variation:Math.max(0,Math.round(A)),intro:C,opacity:xr(v,0,1),lightMode:M,paused:P},N=(0,bo.useRef)(ct);return N.current=ct,(0,bo.useEffect)(()=>{let ht=w.current,St=Z.current,W=St?.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!ht||!St||!W)return;let Rt=T2(W,AP,wP),xt=T2(W,RP,CP);if(!Rt||!xt)return;let nt=W.createBuffer();W.bindBuffer(W.ARRAY_BUFFER,nt),W.bufferData(W.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),W.STATIC_DRAW);let ot=W.createBuffer(),wt=W.createBuffer(),Bt=W.createBuffer(),zt=W.createVertexArray();W.bindVertexArray(zt),W.bindBuffer(W.ARRAY_BUFFER,nt),W.enableVertexAttribArray(0),W.vertexAttribPointer(0,2,W.FLOAT,!1,0,0);let Xt=(st,yt,ft)=>{W.bindBuffer(W.ARRAY_BUFFER,st),W.enableVertexAttribArray(yt),W.vertexAttribPointer(yt,ft,W.FLOAT,!1,0,0),W.vertexAttribDivisor(yt,1)};Xt(ot,1,3),Xt(wt,2,4),Xt(Bt,3,3);let Vt=W.createBuffer(),U=new Float32Array(M2*8),Ft=W.createVertexArray();W.bindVertexArray(Ft),W.bindBuffer(W.ARRAY_BUFFER,nt),W.enableVertexAttribArray(0),W.vertexAttribPointer(0,2,W.FLOAT,!1,0,0),W.bindBuffer(W.ARRAY_BUFFER,Vt),W.bufferData(W.ARRAY_BUFFER,U.byteLength,W.DYNAMIC_DRAW),W.enableVertexAttribArray(1),W.vertexAttribPointer(1,4,W.FLOAT,!1,32,0),W.vertexAttribDivisor(1,1),W.enableVertexAttribArray(2),W.vertexAttribPointer(2,4,W.FLOAT,!1,32,16),W.vertexAttribDivisor(2,1),W.bindVertexArray(null);let Et=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Mt=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,z=new Map,Qt=st=>{if(z.has(st))return z.get(st);let yt=[1,1,1];if(Et){Et.clearRect(0,0,1,1),Et.fillStyle="#ffffff",Et.fillStyle=st,Et.fillRect(0,0,1,1);let[ft,Ut,Ct]=Et.getImageData(0,0,1,1).data;yt=[ft/255,Ut/255,Ct/255]}return z.set(st,yt),yt},Nt=st=>{let yt=st.map(Ct=>Math.pow(Ct,2.2)),ft=.2126*yt[0]+.7152*yt[1]+.0722*yt[2],Ut=Math.min(1,.06/Math.max(ft,1e-4));return yt.map(Ct=>Math.pow(Ct*Ut,1/2.2))},It={width:1,height:1,ratio:1},ie=new Float32Array([...Qt("#a5e7ff"),...Qt("#1743ad")]),Gt={x:0,y:0,sx:0,sy:0,nx:0,ny:0,inside:!1,active:0},D={clock:0,spin:0,travel:0,offsetX:0,offsetY:0,reveal:N.current.intro&&!Mt?0:1},T=[],B=new Float32Array(Dh*4),J={key:"",count:0,positions:new Float32Array(0),randoms:new Float32Array(0),colors:new Float32Array(0)},Q={x:new Float32Array(0),y:new Float32Array(0),ahead:new Float32Array(0),alpha:new Float32Array(0)},$=0,Ot=0,pt=!0,Ht=st=>{let yt=`${st.count}|${st.variation}|${st.colors.join(",")}|${st.lightMode?1:0}`;if(yt===J.key)return;J.key=yt;let ft=DP(st.variation*7919+1),Ut=st.count,Ct=new Float32Array(Ut*3),At=new Float32Array(Ut*4),ae=new Float32Array(Ut*3),ne=st.colors.map(ce=>st.lightMode?Nt(Qt(ce)):Qt(ce));for(let ce=0;ce<Ut;ce++){let oe,fe,re,De;do oe=ft()*2-1,fe=ft()*2-1,re=ft()*2-1,De=oe*oe+fe*fe+re*re;while(De>1||De===0);let ve=Math.cbrt(ft());Ct.set([oe*ve,fe*ve,re*ve],ce*3),At.set([ft(),ft(),ft(),ft()],ce*4),ae.set(ne[Math.floor(ft()*ne.length)],ce*3)}J.count=Ut,J.positions=Ct,J.randoms=At,J.colors=ae;let jt=Math.min(Ut,S2);Q.x=new Float32Array(jt),Q.y=new Float32Array(jt),Q.ahead=new Float32Array(jt),Q.alpha=new Float32Array(jt),W.bindBuffer(W.ARRAY_BUFFER,ot),W.bufferData(W.ARRAY_BUFFER,Ct,W.STATIC_DRAW),W.bindBuffer(W.ARRAY_BUFFER,wt),W.bufferData(W.ARRAY_BUFFER,At,W.STATIC_DRAW),W.bindBuffer(W.ARRAY_BUFFER,Bt),W.bufferData(W.ARRAY_BUFFER,ae,W.STATIC_DRAW)},Dt=st=>{let yt=D.clock*1e3,ft=st.rotate?Math.sin(yt*2e-4)*.1:0,Ut=st.rotate?Math.cos(yt*5e-4)*.15:0,Ct=st.rotate?D.spin:0,[At,ae,ne,jt,ce,oe]=[Math.sin(ft),Math.cos(ft),Math.sin(Ut),Math.cos(Ut),Math.sin(Ct),Math.cos(Ct)];return[jt*oe+ne*At*ce,ae*ce,-ne*oe+jt*At*ce,-jt*ce+ne*At*oe,ae*oe,ne*ce+jt*At*oe,ne*ae,-At,jt*ae]},bt=()=>[D.offsetX,D.offsetY,-(1-UP(D.reveal))*70],mt=(st,yt)=>{let ft=Math.min(J.count,S2),[Ut,Ct,At]=bt(),ae=It.width/It.height,ne=D.clock,jt=st.hoverRadius,ce=st.hoverEffect!==0?Gt.active:0,oe=st.spread*2+3,fe=st.spread*$m*2+3;for(let re=0;re<ft;re++){let De=J.positions[re*3]*st.spread,ve=J.positions[re*3+1]*st.spread,Le=J.positions[re*3+2]*st.spread*$m,vn=J.randoms[re*4],Lt=J.randoms[re*4+1],b=J.randoms[re*4+2],F=J.randoms[re*4+3],K=Math.sin(ne*b+6.28*F)*(.1+1.4*vn),j=Math.sin(ne*Lt+6.28*vn)*(.1+1.4*F),X=Math.sin(ne*F+6.28*Lt)*(.1+1.4*b),_t=yt[0]*De+yt[3]*ve+yt[6]*Le+Ut+K,Pt=yt[1]*De+yt[4]*ve+yt[7]*Le+Ct+j,qt=yt[2]*De+yt[5]*ve+yt[8]*Le+At+X,kt=1;if(st.drift===1||st.drift===2){let te=E2(F*oe+Ct+j+(st.drift===1?D.travel:-D.travel),oe);Pt=te-oe/2;let _e=xr(te/(oe*.12),0,1),pe=xr((oe-te)/(oe*.12),0,1);kt=_e*_e*(3-2*_e)*pe*pe*(3-2*pe)}else if(st.drift===3){let te=E2(Lt*fe+At+X+D.travel,fe);qt=te-fe/2;let _e=xr(te/(fe*.1),0,1);kt=_e*_e*(3-2*_e)}let Jt=st.camera-qt;if(Jt<A2||Jt>Ol){Q.alpha[re]=0;continue}let $t=xr((Jt-1)/3,0,1);kt*=$t*$t*(3-2*$t);let Kt=_t*t0/ae/Jt*.5*It.width+It.width/2,le=Pt*t0/Jt*.5*It.height+It.height/2,Zt=0,se=0;if(ce>.001){let te=Kt-Gt.sx,_e=le-Gt.sy,pe=Math.hypot(te,_e),yn=Math.exp(-(te*te+_e*_e)/(jt*jt))*st.hoverFactor*ce;st.hoverEffect===1&&pe>.001?(Zt+=te/pe*jt*.5*yn,se+=_e/pe*jt*.5*yn):st.hoverEffect===2&&(Zt-=te*.6*yn,se-=_e*.6*yn)}for(let te of T){let _e=te.age/E1,pe=Kt-te.x,yn=le-te.y,wr=Math.hypot(pe,yn);if(wr<.001)continue;let yi=Math.exp(-Math.pow((wr-_e*w2)/R2,2)),qs=xr(wr/30,0,1),Qe=yi*(1-_e)*(1-_e)*56*qs*qs*(3-2*qs);Zt+=pe/wr*Qe,se+=yn/wr*Qe}Kt+=Zt,le+=se;let He=xr((Ol-Jt)/(Ol-Ol*.9),0,1),Be=xr(D.reveal*1.6-b*.6,0,1);Q.x[re]=Kt,Q.y[re]=le,Q.ahead[re]=Jt,Q.alpha[re]=He*He*(3-2*He)*kt*Be*Be}return ft},k=(st,yt)=>{let ft=mt(st,yt),Ut=st.connectionDistance,Ct=Math.max(1,Math.ceil(It.width/Ut)+2),At=new Map;for(let jt=0;jt<ft;jt++){if(Q.alpha[jt]<.02)continue;let ce=(Math.floor(Q.y[jt]/Ut)+1)*Ct+Math.floor(Q.x[jt]/Ut)+1,oe=At.get(ce);oe?oe.push(jt):At.set(ce,[jt])}let ae=0,ne=Ut*Ut;for(let[jt,ce]of At)for(let oe of[0,1,Ct-1,Ct,Ct+1]){let fe=oe===0?ce:At.get(jt+oe);if(fe)for(let re=0;re<ce.length;re++){let De=ce[re];for(let ve=oe===0?re+1:0;ve<fe.length;ve++){let Le=fe[ve],vn=Q.x[De]-Q.x[Le],Lt=Q.y[De]-Q.y[Le],b=vn*vn+Lt*Lt;if(b>ne)continue;let F=xr(1-Math.abs(Q.ahead[De]-Q.ahead[Le])/18,0,1);if(F<=0)continue;if(ae>=M2)return ae;let K=1-Math.sqrt(b)/Ut,j=ae*8;U[j]=Q.x[De],U[j+1]=Q.y[De],U[j+2]=Q.x[Le],U[j+3]=Q.y[Le],U[j+4]=(J.colors[De*3]+J.colors[Le*3])/2,U[j+5]=(J.colors[De*3+1]+J.colors[Le*3+1])/2,U[j+6]=(J.colors[De*3+2]+J.colors[Le*3+2])/2,U[j+7]=K*K*F*.7*Math.min(Q.alpha[De],Q.alpha[Le]),ae++}}}return ae},H=()=>{let st=N.current;Ht(st);let yt=Dt(st),[ft,Ut,Ct]=bt();if(W.viewport(0,0,St.width,St.height),W.clearColor(0,0,0,0),W.clear(W.COLOR_BUFFER_BIT),W.enable(W.BLEND),W.blendFunc(W.ONE,W.ONE_MINUS_SRC_ALPHA),st.connections){let jt=k(st,yt);jt&&(W.useProgram(xt.program),W.bindVertexArray(Ft),W.bindBuffer(W.ARRAY_BUFFER,Vt),W.bufferSubData(W.ARRAY_BUFFER,0,U.subarray(0,jt*8)),W.uniform2f(xt.uniforms.uView,It.width,It.height),W.uniform1f(xt.uniforms.uRatio,It.ratio),W.uniform1f(xt.uniforms.uWidth,1),W.uniform1f(xt.uniforms.uOpacity,st.opacity),W.drawArraysInstanced(W.TRIANGLE_STRIP,0,4,jt))}let At=Rt.uniforms,ae=0;for(let jt=T.length-1;jt>=0&&ae<Dh;jt--)B.set([T[jt].x,T[jt].y,T[jt].age/E1,1],ae*4),ae++;W.useProgram(Rt.program),W.bindVertexArray(zt),W.uniformMatrix3fv(At.uRotation,!1,yt),W.uniform3f(At.uOffset,ft,Ut,Ct),W.uniform1f(At.uSpread,st.spread),W.uniform1f(At.uTime,D.clock),W.uniform1f(At.uCamera,st.camera),W.uniform1f(At.uAspect,It.width/It.height),W.uniform2f(At.uView,It.width,It.height);let ne=st.pageDepthRef?.current??[0,1];W.uniform2f(At.uPageDepth,ne[0],ne[1]),W.uniform3fv(At.uDepthColors,ie),W.uniform1f(At.uRatio,It.ratio),W.uniform1f(At.uSize,st.size),W.uniform1f(At.uRandomness,st.randomness),W.uniform1f(At.uBlur,st.depthOfField*14),W.uniform1f(At.uFocus,st.camera+14),W.uniform1f(At.uGlow,st.lightMode?st.glow*.3:st.glow),W.uniform1f(At.uTwinkle,st.twinkle),W.uniform1i(At.uShape,st.shape),W.uniform1i(At.uDrift,st.drift),W.uniform1f(At.uTravel,D.travel),W.uniform4f(At.uPointer,Gt.sx,Gt.sy,Gt.active,st.hoverRadius),W.uniform1i(At.uEffect,st.hoverEffect),W.uniform1f(At.uStrength,st.hoverFactor),W.uniform4fv(At.uBursts,B),W.uniform1i(At.uBurstCount,ae),W.uniform1f(At.uReveal,D.reveal),W.uniform1f(At.uSoft,st.soft?.2:0),W.uniform1f(At.uShimmer,st.lightMode?0:.15),W.uniform1f(At.uOpacity,st.opacity),W.drawArraysInstanced(W.TRIANGLE_STRIP,0,4,J.count),W.bindVertexArray(null)},G=st=>{if($=0,!pt||document.hidden)return;let yt=N.current,ft=Ot?xr((st-Ot)/1e3,5e-4,.05):1/60;if(Ot=st,yt.paused){D.reveal=1,H(),Ot=0;return}let Ut=Mt?0:1,Ct=ft*yt.speed*Ut;D.clock+=Ct,yt.rotate&&(D.spin+=Ct*.6),D.travel+=ft*yt.driftSpeed*Ut*(yt.drift===3?6:.9);let At=yt.mouse&&Gt.inside&&!Mt,ae=1-Math.exp(-ft/.35),ne=At&&yt.hoverEffect===0?yt.hoverFactor:0;D.offsetX+=(-Gt.nx*ne-D.offsetX)*ae,D.offsetY+=(-Gt.ny*ne-D.offsetY)*ae,Gt.sx+=(Gt.x-Gt.sx)*(1-Math.exp(-ft/.06)),Gt.sy+=(Gt.y-Gt.sy)*(1-Math.exp(-ft/.06)),Gt.active+=((At?1:0)-Gt.active)*(1-Math.exp(-ft/.2));for(let jt=T.length-1;jt>=0;jt--)T[jt].age+=ft,T[jt].age>=E1&&T.splice(jt,1);!yt.intro||Mt?D.reveal=1:D.reveal<1&&(D.reveal=Math.min(1,D.reveal+ft/EP)),H(),$=requestAnimationFrame(G)},it=()=>{!$&&pt&&!document.hidden&&($=requestAnimationFrame(G))},O=()=>{let st=N.current,yt=Math.max(1,ht.clientWidth),ft=Math.max(1,ht.clientHeight),Ut=Math.min(st.dpr||window.devicePixelRatio||1,2);It.width=yt,It.height=ft,St.width=Math.max(1,Math.round(yt*Ut)),St.height=Math.max(1,Math.round(ft*Ut)),It.ratio=St.width/yt,H(),it()},et=st=>{let yt=ht.getBoundingClientRect(),ft=st.clientX-yt.left,Ut=st.clientY-yt.top,Ct=Gt.inside;Gt.inside=ft>=0&&Ut>=0&&ft<=yt.width&&Ut<=yt.height,Gt.x=ft,Gt.y=yt.height-Ut,Gt.nx=ft/Math.max(1,yt.width)*2-1,Gt.ny=-(Ut/Math.max(1,yt.height)*2-1),Gt.inside&&!Ct&&(Gt.sx=Gt.x,Gt.sy=Gt.y)},ut=st=>{et(st),N.current.paused||it()},dt=st=>{let yt=N.current;et(st),!(!Gt.inside||!yt.clickBurst||yt.paused||Mt)&&(T.push({x:Gt.x,y:Gt.y,age:0}),T.length>Dh&&T.shift(),it())},at=st=>{st.pointerType!=="mouse"&&(Gt.inside=!1)},rt=()=>{Gt.inside=!1},gt=()=>{Ot=0,it()},lt=new ResizeObserver(O);lt.observe(ht);let Yt=new IntersectionObserver(st=>{pt=st.some(yt=>yt.isIntersecting),pt&&(Ot=0,it())});Yt.observe(ht),window.addEventListener("pointermove",ut,{passive:!0}),window.addEventListener("pointerdown",dt,{passive:!0}),window.addEventListener("pointerup",at,{passive:!0}),window.addEventListener("pointercancel",at,{passive:!0}),document.documentElement.addEventListener("pointerleave",rt),document.addEventListener("visibilitychange",gt),O();let Tt=N.current.dpr;return tt.current=()=>{let st=N.current;if(st.dpr!==Tt){Tt=st.dpr,O();return}$||H(),it()},()=>{cancelAnimationFrame($),tt.current=null,lt.disconnect(),Yt.disconnect(),window.removeEventListener("pointermove",ut),window.removeEventListener("pointerdown",dt),window.removeEventListener("pointerup",at),window.removeEventListener("pointercancel",at),document.documentElement.removeEventListener("pointerleave",rt),document.removeEventListener("visibilitychange",gt),W.deleteProgram(Rt.program),W.deleteProgram(xt.program),[nt,ot,wt,Bt,Vt].forEach(st=>W.deleteBuffer(st)),W.deleteVertexArray(zt),W.deleteVertexArray(Ft),St.isConnected||W.getExtension("WEBGL_lose_context")?.loseContext()}},[]),(0,bo.useEffect)(()=>{tt.current?.()}),(0,A1.jsx)("div",{ref:w,className:`particles-container${Y?` ${Y}`:""}`,style:V,children:(0,A1.jsx)("canvas",{ref:Z,className:"particles-canvas","aria-hidden":"true"})})},C2=OP;var gc=hn(gs());var Uh=hn(Ai()),LP=`#version 300 es
in vec2 aPosition;
uniform vec2 uTexel;
out vec2 vUv;
out vec2 vL;
out vec2 vR;
out vec2 vT;
out vec2 vB;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  vL = vUv - vec2(uTexel.x, 0.0);
  vR = vUv + vec2(uTexel.x, 0.0);
  vT = vUv + vec2(0.0, uTexel.y);
  vB = vUv - vec2(0.0, uTexel.y);
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,as=`#version 300 es
precision highp float;
precision highp sampler2D;
in vec2 vUv;
in vec2 vL;
in vec2 vR;
in vec2 vT;
in vec2 vB;
out vec4 outColor;
`,NP=`${as}
uniform sampler2D uTarget;
uniform float uAspect;
uniform vec2 uA;
uniform vec2 uB;
uniform float uRadius;
uniform float uWide;
uniform vec3 uValue;
uniform float uMode;
uniform float uStrength;
float erf(float x) {
  float x2 = x * x;
  float a = 0.147;
  return sign(x) * sqrt(1.0 - exp(-x2 * (1.2732395 + a * x2) / (1.0 + a * x2)));
}
float sweep(float along, float length, float across, float radius) {
  return exp(-across * across / (radius * radius)) * 0.5 * (erf(along / radius) - erf((along - length) / radius));
}
void main() {
  vec2 p = vec2(vUv.x * uAspect, vUv.y);
  vec2 a = vec2(uA.x * uAspect, uA.y);
  vec2 ab = vec2(uB.x * uAspect, uB.y) - a;
  float len = length(ab);
  vec2 dir = len > 1e-6 ? ab / len : vec2(1.0, 0.0);
  vec2 ap = p - a;
  vec3 base = texture(uTarget, vUv).xyz;
  if (uMode > 1.5) {
    float along = dot(ap, dir);
    float across = dot(ap, vec2(-dir.y, dir.x));
    if (uMode > 2.5) {
      outColor = vec4(mix(base, uValue, sweep(along, len, across, uRadius) * uStrength), 1.0);
      return;
    }
    vec3 add = vec3(uValue.xy * sweep(along, len, across, uRadius), uValue.z * sweep(along, len, across, uWide));
    outColor = vec4(base + add, 1.0);
    return;
  }
  float h = clamp(dot(ap, ab) / max(dot(ab, ab), 1e-9), 0.0, 1.0);
  vec2 d = ap - ab * h;
  float r2 = dot(d, d);
  float falloff = exp(-r2 / (uRadius * uRadius));
  float wide = exp(-r2 / (uWide * uWide));
  vec3 result = uMode > 0.5 ? mix(base, uValue, falloff * uStrength) : base + vec3(uValue.xy * falloff, uValue.z * wide);
  outColor = vec4(result, 1.0);
}`,PP=`${as}
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 uVelocityTexel;
uniform float uDt;
uniform vec4 uDecay;
void main() {
  vec2 coord = vUv - uDt * texture(uVelocity, vUv).xy * uVelocityTexel;
  outColor = texture(uSource, coord) * uDecay;
}`,IP=`${as}
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform sampler2D uForward;
uniform sampler2D uBack;
uniform vec2 uVelocityTexel;
uniform vec2 uSourceTexel;
uniform float uDt;
uniform vec4 uDecay;
void main() {
  vec2 coord = vUv - uDt * texture(uVelocity, vUv).xy * uVelocityTexel;
  vec4 forward = texture(uForward, vUv);
  vec4 corrected = forward + 0.5 * (texture(uSource, vUv) - texture(uBack, vUv));
  vec2 base = (floor(coord / uSourceTexel - 0.5) + 0.5) * uSourceTexel;
  vec4 a = texture(uSource, base);
  vec4 b = texture(uSource, base + vec2(uSourceTexel.x, 0.0));
  vec4 c = texture(uSource, base + vec2(0.0, uSourceTexel.y));
  vec4 d = texture(uSource, base + uSourceTexel);
  vec4 low = min(min(a, b), min(c, d));
  vec4 high = max(max(a, b), max(c, d));
  outColor = clamp(corrected, low, high) * uDecay;
}`,BP=`${as}
uniform sampler2D uVelocity;
void main() {
  float left = texture(uVelocity, vL).x;
  float right = texture(uVelocity, vR).x;
  float top = texture(uVelocity, vT).y;
  float bottom = texture(uVelocity, vB).y;
  vec2 center = texture(uVelocity, vUv).xy;
  if (vL.x < 0.0) left = -center.x;
  if (vR.x > 1.0) right = -center.x;
  if (vT.y > 1.0) top = -center.y;
  if (vB.y < 0.0) bottom = -center.y;
  outColor = vec4(0.5 * (right - left + top - bottom), 0.0, 0.0, 1.0);
}`,FP=`${as}
uniform sampler2D uSource;
uniform float uValue;
void main() {
  outColor = texture(uSource, vUv) * uValue;
}`,zP=`${as}
uniform sampler2D uPressure;
uniform sampler2D uDivergence;
void main() {
  float left = texture(uPressure, vL).x;
  float right = texture(uPressure, vR).x;
  float top = texture(uPressure, vT).x;
  float bottom = texture(uPressure, vB).x;
  float divergence = texture(uDivergence, vUv).x;
  outColor = vec4((left + right + bottom + top - divergence) * 0.25, 0.0, 0.0, 1.0);
}`,HP=`${as}
uniform sampler2D uPressure;
uniform sampler2D uVelocity;
void main() {
  float left = texture(uPressure, vL).x;
  float right = texture(uPressure, vR).x;
  float top = texture(uPressure, vT).x;
  float bottom = texture(uPressure, vB).x;
  vec2 velocity = texture(uVelocity, vUv).xy - vec2(right - left, top - bottom);
  outColor = vec4(velocity, 0.0, 1.0);
}`,L2=`
uniform vec3 uColor;
uniform vec3 uSecondary;
uniform float uIntensity;
uniform float uHotspot;
vec3 shade(vec3 dye) {
  float energy = max(dye.x, 0.0);
  float heat = clamp(dye.y, 0.0, energy);
  float gas = max(dye.z, 0.0);
  float fresh = heat / max(energy, 0.0001);
  vec3 tint = mix(uSecondary, uColor, fresh);
  return (tint * energy + uSecondary * gas + vec3(heat * heat * 0.3 * uHotspot)) * uIntensity;
}
`,VP=`${as}${L2}
uniform sampler2D uDye;
uniform vec2 uDyeTexel;
void main() {
  vec2 o = uDyeTexel * 0.5;
  vec3 light = shade(texture(uDye, vUv + vec2(-o.x, -o.y)).xyz);
  light += shade(texture(uDye, vUv + vec2(o.x, -o.y)).xyz);
  light += shade(texture(uDye, vUv + vec2(-o.x, o.y)).xyz);
  light += shade(texture(uDye, vUv + vec2(o.x, o.y)).xyz);
  outColor = vec4(light * 0.25, 1.0);
}`,GP=`${as}
uniform sampler2D uSource;
uniform vec2 uSourceTexel;
void main() {
  vec2 o = uSourceTexel;
  vec3 color = texture(uSource, vUv).rgb * 4.0;
  color += texture(uSource, vUv + vec2(-o.x, -o.y)).rgb;
  color += texture(uSource, vUv + vec2(o.x, -o.y)).rgb;
  color += texture(uSource, vUv + vec2(-o.x, o.y)).rgb;
  color += texture(uSource, vUv + vec2(o.x, o.y)).rgb;
  outColor = vec4(color / 8.0, 1.0);
}`,kP=`${as}
uniform sampler2D uSource;
uniform vec2 uSourceTexel;
void main() {
  vec2 o = uSourceTexel;
  vec3 color = texture(uSource, vUv + vec2(-o.x * 2.0, 0.0)).rgb;
  color += texture(uSource, vUv + vec2(o.x * 2.0, 0.0)).rgb;
  color += texture(uSource, vUv + vec2(0.0, -o.y * 2.0)).rgb;
  color += texture(uSource, vUv + vec2(0.0, o.y * 2.0)).rgb;
  color += texture(uSource, vUv + vec2(-o.x, -o.y)).rgb * 2.0;
  color += texture(uSource, vUv + vec2(o.x, -o.y)).rgb * 2.0;
  color += texture(uSource, vUv + vec2(-o.x, o.y)).rgb * 2.0;
  color += texture(uSource, vUv + vec2(o.x, o.y)).rgb * 2.0;
  outColor = vec4(color / 12.0, 1.0);
}`,XP=`${as}${L2}
uniform sampler2D uDye;
uniform sampler2D uBloom;
uniform float uGlow;
uniform float uGrain;
uniform float uTime;
uniform float uLight;
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
void main() {
  vec3 dye = texture(uDye, vUv).xyz;
  vec3 light = shade(dye);
  vec3 bloom = texture(uBloom, vUv).rgb * uGlow;
  float edge = smoothstep(0.0, 0.02, min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y)));
  float grain = 1.0 + (hash(gl_FragCoord.xy + fract(uTime * 13.7) * 97.0) - 0.5) * uGrain * 2.0;
  if (uLight > 0.5) {
    float energy = max(dye.x, 0.0);
    float heat = clamp(dye.y, 0.0, energy);
    float gas = max(dye.z, 0.0);
    float fresh = heat / max(energy, 0.0001);
    vec3 tint = mix(uSecondary, uColor, fresh);
    float halo = dot(bloom, vec3(0.2126, 0.7152, 0.0722));
    float density = 1.0 - exp(-((energy * 1.1 + gas * 0.8) * uIntensity + halo * 0.25));
    float tone = dot(tint, vec3(0.2126, 0.7152, 0.0722));
    vec3 ink = tint * min(1.0, 0.5 / max(tone, 0.001)) * mix(0.95, 0.72, smoothstep(0.5, 3.0, energy));
    ink = mix(ink, vec3(1.0), clamp(heat * heat * 0.05 * uHotspot, 0.0, 0.45));
    density = clamp(density * grain, 0.0, 1.0) * edge;
    outColor = vec4(ink * density, density);
  } else {
    vec3 color = 1.0 - exp(-(light + bloom) * grain);
    color *= edge;
    outColor = vec4(color, max(color.r, max(color.g, color.b)));
  }
}`,D2={low:{sim:96,dye:384},medium:{sim:128,dye:576},high:{sim:160,dye:768}},WP=20,YP=.75,U2=5,w1=(e,t,n)=>Math.min(n,Math.max(t,e)),O2=(e,t,n)=>{let i=e.createShader(t);return i?(e.shaderSource(i,n),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS)?i:(e.deleteShader(i),null)):null},qP=([e,t,n])=>{let i=Math.max(e,t,n),r=Math.min(e,t,n),s=i-r,a=0;return s>0&&(i===e?a=(t-n)/s%6:i===t?a=(n-e)/s+2:a=(e-t)/s+4),[(a*60+360)%360,i>0?s/i:0,i]},ZP=(e,t,n)=>{let i=(e%360+360)%360/60,r=n*t,s=r*(1-Math.abs(i%2-1)),a=n-r,[o,l,u]=i<1?[r,s,0]:i<2?[s,r,0]:i<3?[0,r,s]:i<4?[0,s,r]:i<5?[s,0,r]:[r,0,s];return[o+a,l+a,u+a]},JP=({color:e="#5f8bff",secondaryColor:t,intensity:n=1.3,trailWidth:i=3,linger:r=1.4,glow:s=1.2,hotspot:a=.8,followSpeed:o=.6,grain:l=0,clickBurst:u=!0,quality:c="high",theme:d="dark",blendMode:f,maxDevicePixelRatio:h=2,enabled:g=!0,children:_,className:m="",style:p,...y})=>{let S=(0,gc.useRef)(null),x=(0,gc.useRef)(null),E=(0,gc.useRef)(null);E.current={color:String(e),secondaryColor:t?String(t):"",intensity:Math.max(0,n),trailWidth:w1(i,.5,40),linger:w1(r,.1,10),glow:Math.max(0,s),hotspot:Math.max(0,a),followSpeed:w1(o,0,1),grain:Math.max(0,l),clickBurst:u,quality:D2[c]?c:"high",theme:d,maxDevicePixelRatio:h,enabled:g},(0,gc.useEffect)(()=>{let A=S.current,C=x.current,v=C?.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!A||!C||!v||!v.getExtension("EXT_color_buffer_float"))return;let M=O2(v,v.VERTEX_SHADER,LP);if(!M)return;let P=k=>{let H=O2(v,v.FRAGMENT_SHADER,k),G=v.createProgram();if(!H||!G)return null;if(v.attachShader(G,M),v.attachShader(G,H),v.bindAttribLocation(G,0,"aPosition"),v.linkProgram(G),v.deleteShader(H),!v.getProgramParameter(G,v.LINK_STATUS))return v.deleteProgram(G),null;let it={},O=v.getProgramParameter(G,v.ACTIVE_UNIFORMS);for(let et=0;et<O;et++){let ut=v.getActiveUniform(G,et);ut&&(it[ut.name]=v.getUniformLocation(G,ut.name))}return{program:G,uniforms:it}},L={splat:P(NP),advect:P(PP),maccormack:P(IP),divergence:P(BP),scale:P(FP),pressure:P(zP),gradient:P(HP),prefilter:P(VP),down:P(GP),up:P(kP),display:P(XP)};if(Object.values(L).some(k=>!k))return;let Y=v.createVertexArray(),V=v.createBuffer();v.bindVertexArray(Y),v.bindBuffer(v.ARRAY_BUFFER,V),v.bufferData(v.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),v.STATIC_DRAW),v.enableVertexAttribArray(0),v.vertexAttribPointer(0,2,v.FLOAT,!1,0,0);let w=document.createElement("canvas");w.width=1,w.height=1;let Z=w.getContext("2d",{willReadFrequently:!0}),tt=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,I={width:1,height:1,ratio:1,colorKey:"",color:[.37,.55,1],secondary:[.25,.3,1],pointer:{x:0,y:0,inside:!1},emitter:{x:0,y:0,vx:0,vy:0,px:0,py:0,travelled:0},ready:!1,bursts:[],active:-1/0,time:0,allocated:"",targets:null},ct=0,N=0,ht=!0,St=!0,W=(k,H)=>{if(!Z||!k)return H;let G=/^[0-9a-f]{3,8}$/i.test(k)?`#${k}`:k;Z.clearRect(0,0,1,1),Z.fillStyle="#000000",Z.fillStyle=G,Z.fillRect(0,0,1,1);let[it,O,et]=Z.getImageData(0,0,1,1).data;return[it/255,O/255,et/255]},Rt=k=>{let H=`${k.color}|${k.secondaryColor}`;if(H!==I.colorKey)if(I.colorKey=H,I.color=W(k.color,[.37,.55,1]),k.secondaryColor)I.secondary=W(k.secondaryColor,I.color);else{let[G,it,O]=qP(I.color);I.secondary=ZP(G+8,Math.min(1,it*1.1+.05),O)}},xt=(k,H,G,it,O)=>{let et=v.createTexture();v.bindTexture(v.TEXTURE_2D,et),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MIN_FILTER,O),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MAG_FILTER,O),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_S,v.CLAMP_TO_EDGE),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_T,v.CLAMP_TO_EDGE),v.texImage2D(v.TEXTURE_2D,0,G,k,H,0,it,v.HALF_FLOAT,null);let ut=v.createFramebuffer();return v.bindFramebuffer(v.FRAMEBUFFER,ut),v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,et,0),v.viewport(0,0,k,H),v.clearColor(0,0,0,0),v.clear(v.COLOR_BUFFER_BIT),{texture:et,fbo:ut,width:k,height:H,texel:[1/k,1/H]}},nt=(k,H,G,it,O)=>{let et=xt(k,H,G,it,O),ut=xt(k,H,G,it,O);return{get read(){return et},get write(){return ut},swap(){let dt=et;et=ut,ut=dt},targets(){return[et,ut]}}},ot=k=>{v.deleteTexture(k.texture),v.deleteFramebuffer(k.fbo)},wt=()=>{let k=I.targets;k&&([...k.velocity.targets(),...k.dye.targets(),...k.pressure.targets(),k.divergence,k.forward,k.back,...k.bloom].forEach(ot),I.targets=null)},Bt=()=>{let k=I.targets;k&&(v.clearColor(0,0,0,0),[...k.velocity.targets(),...k.dye.targets(),...k.pressure.targets()].forEach(H=>{v.bindFramebuffer(v.FRAMEBUFFER,H.fbo),v.clear(v.COLOR_BUFFER_BIT)}))},zt=()=>{let k=E.current,H=`${k.quality}|${I.width}|${I.height}|${C.width}|${C.height}`;if(H===I.allocated&&I.targets)return;wt(),I.allocated=H;let G=D2[k.quality],it=I.width/I.height,O=Tt=>it>=1?[Math.round(Tt*it),Tt]:[Tt,Math.round(Tt/it)],[et,ut]=O(G.sim),[dt,at]=O(G.dye),rt=Math.min(1,C.width/dt,C.height/at);dt=Math.max(2,Math.round(dt*rt)),at=Math.max(2,Math.round(at*rt));let gt=[],lt=dt>>1,Yt=at>>1;for(let Tt=0;Tt<U2;Tt++)gt.push(xt(Math.max(1,lt),Math.max(1,Yt),v.RGBA16F,v.RGBA,v.LINEAR)),lt>>=1,Yt>>=1;I.targets={velocity:nt(et,ut,v.RG16F,v.RG,v.LINEAR),dye:nt(dt,at,v.RGBA16F,v.RGBA,v.LINEAR),forward:xt(dt,at,v.RGBA16F,v.RGBA,v.LINEAR),back:xt(dt,at,v.RGBA16F,v.RGBA,v.LINEAR),pressure:nt(et,ut,v.R16F,v.RED,v.NEAREST),divergence:xt(et,ut,v.R16F,v.RED,v.NEAREST),bloom:gt}},Xt=!1,Vt=()=>{let k=E.current,H=Math.max(1,A.clientWidth),G=Math.max(1,A.clientHeight),it=Math.min(window.devicePixelRatio||1,Math.max(.5,k.maxDevicePixelRatio||2)),O=Math.max(1,Math.round(H*it)),et=Math.max(1,Math.round(G*it));(C.width!==O||C.height!==et)&&(C.width=O,C.height=et),I.width=H,I.height=G,I.ratio=it,zt()},U=()=>{Xt=!0,$()},Ft=k=>{k?(v.bindFramebuffer(v.FRAMEBUFFER,k.fbo),v.viewport(0,0,k.width,k.height)):(v.bindFramebuffer(v.FRAMEBUFFER,null),v.viewport(0,0,C.width,C.height)),v.drawArrays(v.TRIANGLES,0,3)},Et=(k,H)=>(v.useProgram(k.program),k.uniforms.uTexel&&v.uniform2f(k.uniforms.uTexel,H[0],H[1]),k.uniforms),Mt=(k,H)=>(v.activeTexture(v.TEXTURE0+k),v.bindTexture(v.TEXTURE_2D,H.texture),k),z=(k,H,G,it,O,et,ut,dt,at,rt=et)=>{let gt=Et(L.splat,k.read.texel);v.uniform1i(gt.uTarget,Mt(0,k.read)),v.uniform1f(gt.uAspect,I.width/I.height),v.uniform2f(gt.uA,H/I.width,1-G/I.height),v.uniform2f(gt.uB,it/I.width,1-O/I.height),v.uniform1f(gt.uRadius,et/I.height),v.uniform1f(gt.uWide,rt/I.height),v.uniform3f(gt.uValue,ut[0],ut[1],ut[2]),v.uniform1f(gt.uMode,dt),v.uniform1f(gt.uStrength,at),Ft(k.write),k.swap()},Qt=(k,H)=>{let{velocity:G}=I.targets;return[k*G.read.width/I.width,-H*G.read.height/I.height]},Nt=k=>Math.max(k.trailWidth*.5,I.height/I.targets.dye.read.height*.9),It=(k,H,G)=>{let{emitter:it,pointer:O}=I,{velocity:et,dye:ut}=I.targets;if(it.px=it.x,it.py=it.y,tt||k.followSpeed>=1)it.x=O.x,it.y=O.y;else{let lt=10+k.followSpeed*50,Yt=Math.max(1,Math.ceil(H/.004)),Tt=H/Yt;for(let st=0;st<Yt;st++)it.vx+=(lt*lt*(O.x-it.x)-2*lt*it.vx)*Tt,it.vy+=(lt*lt*(O.y-it.y)-2*lt*it.vy)*Tt,it.x+=it.vx*Tt,it.y+=it.vy*Tt}let dt=it.x-it.px,at=it.y-it.py;if(Math.hypot(dt,at)<.05||!k.enabled)return;let gt=Nt(k);if(!tt){let lt=Qt(dt/Math.max(H,.001),at/Math.max(H,.001));z(et,it.px,it.py,it.x,it.y,gt*4+18,[lt[0],lt[1],0],3,YP*.6)}z(ut,it.px,it.py,it.x,it.y,gt,[5.6,5.6,.7],2,1,gt*5+6),I.active=G},ie=(k,H,G,it)=>{let{velocity:O,dye:et}=I.targets,ut=Nt(k),dt=6,at=Math.random()*Math.PI*2;for(let rt=0;rt<dt;rt++){let gt=at+rt/dt*Math.PI*2+(Math.random()-.5)*.5,lt=Math.cos(gt),Yt=Math.sin(gt),Tt=20+Math.random()*14,st=H+lt*3,yt=G+Yt*3,ft=H+lt*Tt,Ut=G+Yt*Tt;if(!tt){let Ct=Qt(Math.cos(gt+.6)*760,Math.sin(gt+.6)*760);z(O,st,yt,ft,Ut,18,[Ct[0],Ct[1],0],1,.9)}z(et,st,yt,ft,Ut,ut*1.1,[2.4,2.4,.3],0,1,ut*5+6)}z(et,H,G,H+.01,G,ut*2.2,[1.8,1.8,.4],0,1,ut*7+10),I.active=it},Gt=(k,H)=>{let{velocity:G,dye:it,pressure:O,divergence:et}=I.targets;if(!tt){let gt=Et(L.divergence,G.read.texel);v.uniform1i(gt.uVelocity,Mt(0,G.read)),Ft(et),gt=Et(L.scale,O.read.texel),v.uniform1i(gt.uSource,Mt(0,O.read)),v.uniform1f(gt.uValue,.8),Ft(O.write),O.swap(),gt=Et(L.pressure,O.read.texel),v.uniform1i(gt.uDivergence,Mt(1,et));for(let Yt=0;Yt<WP;Yt++)v.uniform1i(gt.uPressure,Mt(0,O.read)),Ft(O.write),O.swap();gt=Et(L.gradient,G.read.texel),v.uniform1i(gt.uPressure,Mt(0,O.read)),v.uniform1i(gt.uVelocity,Mt(1,G.read)),Ft(G.write),G.swap(),gt=Et(L.advect,G.read.texel),v.uniform2f(gt.uVelocityTexel,G.read.texel[0],G.read.texel[1]),v.uniform1i(gt.uVelocity,Mt(0,G.read)),v.uniform1i(gt.uSource,Mt(0,G.read)),v.uniform1f(gt.uDt,H);let lt=Math.exp(-H*1.2);v.uniform4f(gt.uDecay,lt,lt,1,1),Ft(G.write),G.swap()}let ut=[Math.exp(-H*4.6/(k.linger*.8)),Math.exp(-H*4.6/(k.linger*.2)),Math.exp(-H*4.6/(k.linger*1.2)),1],{forward:dt,back:at}=I.targets;if(tt){let gt=Et(L.advect,it.read.texel);v.uniform2f(gt.uVelocityTexel,G.read.texel[0],G.read.texel[1]),v.uniform1i(gt.uVelocity,Mt(0,G.read)),v.uniform1i(gt.uSource,Mt(1,it.read)),v.uniform1f(gt.uDt,0),v.uniform4f(gt.uDecay,ut[0],ut[1],ut[2],ut[3]),Ft(it.write),it.swap();return}let rt=Et(L.advect,it.read.texel);v.uniform2f(rt.uVelocityTexel,G.read.texel[0],G.read.texel[1]),v.uniform1i(rt.uVelocity,Mt(0,G.read)),v.uniform1i(rt.uSource,Mt(1,it.read)),v.uniform1f(rt.uDt,H),v.uniform4f(rt.uDecay,1,1,1,1),Ft(dt),v.uniform1i(rt.uSource,Mt(1,dt)),v.uniform1f(rt.uDt,-H),Ft(at),rt=Et(L.maccormack,it.read.texel),v.uniform2f(rt.uVelocityTexel,G.read.texel[0],G.read.texel[1]),v.uniform2f(rt.uSourceTexel,it.read.texel[0],it.read.texel[1]),v.uniform1i(rt.uVelocity,Mt(0,G.read)),v.uniform1i(rt.uSource,Mt(1,it.read)),v.uniform1i(rt.uForward,Mt(2,dt)),v.uniform1i(rt.uBack,Mt(3,at)),v.uniform1f(rt.uDt,H),v.uniform4f(rt.uDecay,ut[0],ut[1],ut[2],ut[3]),Ft(it.write),it.swap()},D=(k,H)=>{v.uniform3f(k.uColor,I.color[0],I.color[1],I.color[2]),v.uniform3f(k.uSecondary,I.secondary[0],I.secondary[1],I.secondary[2]),v.uniform1f(k.uIntensity,H.intensity),v.uniform1f(k.uHotspot,H.hotspot)},T=k=>{let{dye:H,bloom:G}=I.targets;if(k.glow>0){let O=Et(L.prefilter,G[0].texel);v.uniform1i(O.uDye,Mt(0,H.read)),v.uniform2f(O.uDyeTexel,H.read.texel[0],H.read.texel[1]),D(O,k),Ft(G[0]),O=Et(L.down,G[0].texel);for(let et=1;et<G.length;et++)v.uniform1i(O.uSource,Mt(0,G[et-1])),v.uniform2f(O.uSourceTexel,G[et-1].texel[0],G[et-1].texel[1]),Ft(G[et]);v.enable(v.BLEND),v.blendFunc(v.ONE,v.ONE),O=Et(L.up,G[0].texel);for(let et=G.length-1;et>0;et--)v.uniform1i(O.uSource,Mt(0,G[et])),v.uniform2f(O.uSourceTexel,G[et].texel[0],G[et].texel[1]),Ft(G[et-1]);v.disable(v.BLEND)}let it=Et(L.display,[1/C.width,1/C.height]);v.uniform1i(it.uDye,Mt(0,H.read)),v.uniform1i(it.uBloom,Mt(1,G[0])),D(it,k),v.uniform1f(it.uGlow,k.glow>0?k.glow*1.4/U2:0),v.uniform1f(it.uGrain,k.grain),v.uniform1f(it.uTime,I.time),v.uniform1f(it.uLight,k.theme==="light"?1:0),Ft(null)},B=()=>{v.bindFramebuffer(v.FRAMEBUFFER,null),v.viewport(0,0,C.width,C.height),v.clearColor(0,0,0,0),v.clear(v.COLOR_BUFFER_BIT)},J=!0,Q=k=>{if(ct=0,Xt&&(Xt=!1,Vt()),!ht||!St||document.hidden)return;let H=E.current,G=N?Math.min(1/30,(k-N)/1e3):1/60;N=k,I.time+=G;let it=Math.min(window.devicePixelRatio||1,Math.max(.5,H.maxDevicePixelRatio||2));for(Math.abs(it-I.ratio)>.01&&Vt(),zt(),Rt(H),v.bindVertexArray(Y),v.disable(v.BLEND),I.ready&&It(H,G,k);I.bursts.length;){let[ut,dt]=I.bursts.shift();ie(H,ut,dt,k)}let O=k-I.active>H.linger*1200+900,et=Math.hypot(I.emitter.vx,I.emitter.vy)<1;if(O&&et){J||(Bt(),B()),J=!0,N=0;return}J=!1,Gt(H,G),T(H),ct=requestAnimationFrame(Q)},$=()=>{!ct&&ht&&St&&!document.hidden&&(ct=requestAnimationFrame(Q))},Ot=k=>{let H=A.getBoundingClientRect(),G=k.clientX-H.left,it=k.clientY-H.top;if(!(G>=0&&it>=0&&G<=H.width&&it<=H.height)){I.pointer.inside&&(I.pointer.inside=!1,I.ready=!1,$());return}I.ready||(I.emitter.x=G,I.emitter.y=it,I.emitter.px=G,I.emitter.py=it,I.emitter.vx=0,I.emitter.vy=0,I.ready=!0),I.pointer.x=G,I.pointer.y=it,I.pointer.inside=!0,$()},pt=k=>{let H=E.current;if(!H.clickBurst||!H.enabled)return;let G=A.getBoundingClientRect(),it=k.clientX-G.left,O=k.clientY-G.top;it<0||O<0||it>G.width||O>G.height||(I.bursts.push([it,O]),$())},Ht=()=>{I.pointer.inside=!1,I.ready=!1,$()},Dt=()=>{N=0,$()},bt=new ResizeObserver(()=>{U(),$()});bt.observe(A);let mt=new IntersectionObserver(k=>{St=k.some(H=>H.isIntersecting),St&&(N=0,$())});return mt.observe(A),window.addEventListener("pointermove",Ot,{passive:!0}),window.addEventListener("pointerdown",pt,{passive:!0}),document.documentElement.addEventListener("pointerleave",Ht),document.addEventListener("visibilitychange",Dt),U(),B(),()=>{ht=!1,cancelAnimationFrame(ct),bt.disconnect(),mt.disconnect(),window.removeEventListener("pointermove",Ot),window.removeEventListener("pointerdown",pt),document.documentElement.removeEventListener("pointerleave",Ht),document.removeEventListener("visibilitychange",Dt),wt(),Object.values(L).forEach(k=>v.deleteProgram(k.program)),v.deleteShader(M),v.deleteBuffer(V),v.deleteVertexArray(Y)}},[]);let R=f??(d==="light"?"normal":"screen");return(0,Uh.jsxs)("div",{ref:S,className:`glow-cursor${m?` ${m}`:""}`,style:p,...y,children:[(0,Uh.jsx)("canvas",{ref:x,className:"glow-cursor__canvas",style:{mixBlendMode:R},"aria-hidden":"true"}),_&&(0,Uh.jsx)("div",{className:"glow-cursor__content",children:_})]})},R1=JP;var Zc=hn(gs());var nC=0,lS=1,iC=2;var uS=1,rC=2,Gs=3,Aa=0,Ii=1,ks=2,ds=0,wa=1,ld=2,cS=3,fS=4,ud=5,Oo=100,sC=101,aC=102,oC=103,lC=104,ng=200,ps=201,uC=202,cC=203,b0=204,zl=205,fC=206,hC=207,dC=208,pC=209,mC=210,gC=211,_C=212,vC=213,yC=214,ig=0,rg=1,sg=2,Hl=3,ag=4,og=5,lg=6,ug=7,hS=0,xC=1,SC=2,Da=0,MC=1,bC=2,TC=3,EC=4,AC=5,wC=6,RC=7;var dS=300,kl=301,Xl=302,cg=303,fg=304,cd=306,T0=1e3,Uo=1001,E0=1002,qr=1003,CC=1004;var fd=1005;var fs=1006,hg=1007;var Fo=1008;var Kr=1009,pS=1010,mS=1011,Fc=1012,dg=1013,zo=1014,Xs=1015,Ho=1016,pg=1017,mg=1018,zc=1020,gS=35902,_S=35899,vS=1021,yS=1022,Qr=1023,Dc=1026,Hc=1027,xS=1028,gg=1029,SS=1030,_g=1031;var vg=1033,hd=33776,dd=33777,pd=33778,md=33779,yg=35840,xg=35841,Sg=35842,Mg=35843,bg=36196,Tg=37492,Eg=37496,Ag=37808,wg=37809,Rg=37810,Cg=37811,Dg=37812,Ug=37813,Og=37814,Lg=37815,Ng=37816,Pg=37817,Ig=37818,Bg=37819,Fg=37820,zg=37821,Hg=36492,Vg=36494,Gg=36495,kg=36283,Xg=36284,Wg=36285,Yg=36286;var Hh=2300,A0=2301,M0=2302,nS=2400,iS=2401,rS=2402;var DC=3200,UC=3201;var OC=0,LC=1,Ua="",br="srgb",Hs="srgb-linear",Vh="linear",We="srgb";var Bl=7680;var sS=519,NC=512,PC=513,IC=514,MS=515,BC=516,FC=517,zC=518,HC=519,aS=35044;var bS="300 es",cs=2e3,Gh=2001;var Ra=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}},pi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var C1=Math.PI/180,w0=180/Math.PI;function gd(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pi[e&255]+pi[e>>8&255]+pi[e>>16&255]+pi[e>>24&255]+"-"+pi[t&255]+pi[t>>8&255]+"-"+pi[t>>16&15|64]+pi[t>>24&255]+"-"+pi[n&63|128]+pi[n>>8&255]+"-"+pi[n>>16&255]+pi[n>>24&255]+pi[i&255]+pi[i>>8&255]+pi[i>>16&255]+pi[i>>24&255]).toLowerCase()}function we(e,t,n){return Math.max(t,Math.min(n,e))}function KP(e,t){return(e%t+t)%t}function D1(e,t,n){return(1-n)*e+n*t}function Oh(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function $i(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var ue=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=we(this.x,t.x,n.x),this.y=we(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=we(this.x,t,n),this.y=we(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(we(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ca=class{constructor(t=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=r}static slerpFlat(t,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[n+0]=l,t[n+1]=u,t[n+2]=c,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=h,t[n+2]=g,t[n+3]=_;return}if(d!==_||l!==f||u!==h||c!==g){let m=1-o,p=l*f+u*h+c*g+d*_,y=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let E=Math.sqrt(S),R=Math.atan2(E,p*y);m=Math.sin(m*R)/E,o=Math.sin(o*R)/E}let x=o*y;if(l=l*m+f*x,u=u*m+h*x,c=c*m+g*x,d=d*m+_*x,m===1-o){let E=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=E,u*=E,c*=E,d*=E}}t[n]=l,t[n+1]=u,t[n+2]=c,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,r,s,a){let o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[a],f=s[a+1],h=s[a+2],g=s[a+3];return t[n]=o*g+c*d+l*h-u*f,t[n+1]=l*g+c*f+u*d-o*h,t[n+2]=u*g+c*h+o*f-l*d,t[n+3]=c*g-o*d-l*f-u*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),d=o(s/2),f=l(i/2),h=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*c*d+u*h*g,this._y=u*h*d-f*c*g,this._z=u*c*g+f*h*d,this._w=u*c*d-f*h*g;break;case"YXZ":this._x=f*c*d+u*h*g,this._y=u*h*d-f*c*g,this._z=u*c*g-f*h*d,this._w=u*c*d+f*h*g;break;case"ZXY":this._x=f*c*d-u*h*g,this._y=u*h*d+f*c*g,this._z=u*c*g+f*h*d,this._w=u*c*d-f*h*g;break;case"ZYX":this._x=f*c*d-u*h*g,this._y=u*h*d+f*c*g,this._z=u*c*g-f*h*d,this._w=u*c*d+f*h*g;break;case"YZX":this._x=f*c*d+u*h*g,this._y=u*h*d+f*c*g,this._z=u*c*g-f*h*d,this._w=u*c*d-f*h*g;break;case"XZY":this._x=f*c*d-u*h*g,this._y=u*h*d-f*c*g,this._z=u*c*g+f*h*d,this._w=u*c*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+o+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(c-l)*h,this._y=(s-u)*h,this._z=(a-r)*h}else if(i>o&&i>d){let h=2*Math.sqrt(1+i-o-d);this._w=(c-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+u)/h}else if(o>d){let h=2*Math.sqrt(1+o-i-d);this._w=(s-u)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+c)/h}else{let h=2*Math.sqrt(1+d-i-o);this._w=(a-r)/h,this._x=(s+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,r=t._y,s=t._z,a=t._w,o=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let h=1-n;return this._w=h*a+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}let u=Math.sqrt(l),c=Math.atan2(u,o),d=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(N2.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(N2.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){let n=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,u=2*(a*r-o*i),c=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*u+a*d-o*c,this.y=i+l*c+o*u-s*d,this.z=r+l*d+s*c-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=we(this.x,t.x,n.x),this.y=we(this.y,t.y,n.y),this.z=we(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=we(this.x,t,n),this.y=we(this.y,t,n),this.z=we(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(we(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,r=t.y,s=t.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return U1.copy(this).projectOnVector(t),this.sub(U1)}reflect(t){return this.sub(U1.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},U1=new q,N2=new Ca,ge=class e{constructor(t,n,i,r,s,a,o,l,u){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,a,o,l,u)}set(t,n,i,r,s,a,o,l,u){let c=this.elements;return c[0]=t,c[1]=r,c[2]=o,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],y=r[1],S=r[4],x=r[7],E=r[2],R=r[5],A=r[8];return s[0]=a*_+o*y+l*E,s[3]=a*m+o*S+l*R,s[6]=a*p+o*x+l*A,s[1]=u*_+c*y+d*E,s[4]=u*m+c*S+d*R,s[7]=u*p+c*x+d*A,s[2]=f*_+h*y+g*E,s[5]=f*m+h*S+g*R,s[8]=f*p+h*x+g*A,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],c=t[8];return n*a*c-n*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){let t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],c=t[8],d=c*a-o*u,f=o*l-c*s,h=u*s-a*l,g=n*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(r*u-c*i)*_,t[2]=(o*i-r*a)*_,t[3]=f*_,t[4]=(c*n-r*l)*_,t[5]=(r*s-o*n)*_,t[6]=h*_,t[7]=(i*l-u*n)*_,t[8]=(a*n-i*s)*_,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,s,a,o){let l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+t,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(O1.makeScale(t,n)),this}rotate(t){return this.premultiply(O1.makeRotation(-t)),this}translate(t,n){return this.premultiply(O1.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},O1=new ge;function TS(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function kh(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function VC(){let e=kh("canvas");return e.style.display="block",e}var P2={};function Uc(e){e in P2||(P2[e]=!0,console.warn(e))}function GC(e,t,n){return new Promise(function(i,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var I2=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),B2=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QP(){let e={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===We&&(r.r=Ea(r.r),r.g=Ea(r.g),r.b=Ea(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===We&&(r.r=Cc(r.r),r.g=Cc(r.g),r.b=Cc(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ua?Vh:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Uc("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Uc("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Hs]:{primaries:t,whitePoint:i,transfer:Vh,toXYZ:I2,fromXYZ:B2,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:br},outputColorSpaceConfig:{drawingBufferColorSpace:br}},[br]:{primaries:t,whitePoint:i,transfer:We,toXYZ:I2,fromXYZ:B2,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:br}}}),e}var Oe=QP();function Ea(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Cc(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var _c,R0=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{_c===void 0&&(_c=kh("canvas")),_c.width=t.width,_c.height=t.height;let r=_c.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=_c}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=kh("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ea(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ea(n[i]/255)*255):n[i]=Ea(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jP=0,Oc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jP++}),this.uuid=gd(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(L1(r[a].image)):s.push(L1(r[a]))}else s=L1(r);i.url=s}return n||(t.images[this.uuid]=i),i}};function L1(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?R0.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $P=0,N1=new q,Tr=class e extends Ra{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Uo,r=Uo,s=fs,a=Fo,o=Qr,l=Kr,u=e.DEFAULT_ANISOTROPY,c=Ua){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$P++}),this.uuid=gd(),this.name="",this.source=new Oc(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(N1).x}get height(){return this.source.getSize(N1).y}get depth(){return this.source.getSize(N1).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case T0:t.x=t.x-Math.floor(t.x);break;case Uo:t.x=t.x<0?0:1;break;case E0:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case T0:t.y=t.y-Math.floor(t.y);break;case Uo:t.y=t.y<0?0:1;break;case E0:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Tr.DEFAULT_IMAGE=null;Tr.DEFAULT_MAPPING=dS;Tr.DEFAULT_ANISOTROPY=1;var on=class e{constructor(t=0,n=0,i=0,r=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,s,l=t.elements,u=l[0],c=l[4],d=l[8],f=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(u+1)/2,x=(h+1)/2,E=(p+1)/2,R=(c+f)/4,A=(d+_)/4,C=(g+m)/4;return S>x&&S>E?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=R/i,s=A/i):x>E?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=R/r,s=C/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=A/s,r=C/s),this.set(i,r,s,n),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-c)*(f-c));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(f-c)/y,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=we(this.x,t.x,n.x),this.y=we(this.y,t.y,n.y),this.z=we(this.z,t.z,n.z),this.w=we(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=we(this.x,t,n),this.y=we(this.y,t,n),this.z=we(this.z,t,n),this.w=we(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(we(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},C0=class extends Ra{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fs,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new on(0,0,t,n),this.scissorTest=!1,this.viewport=new on(0,0,t,n);let r={width:t,height:n,depth:i.depth},s=new Tr(r);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:fs,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let r=Object.assign({},t.textures[n].image);this.textures[n].source=new Oc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zr=class extends C0{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Xh=class extends Tr{constructor(t=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=qr,this.minFilter=qr,this.wrapR=Uo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var D0=class extends Tr{constructor(t=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=qr,this.minFilter=qr,this.wrapR=Uo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Lo=class{constructor(t=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(os.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(os.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=os.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,os):os.fromBufferAttribute(s,a),os.applyMatrix4(t.matrixWorld),this.expandByPoint(os);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),e0.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),e0.copy(i.boundingBox)),e0.applyMatrix4(t.matrixWorld),this.union(e0)}let r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,os),os.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lh),n0.subVectors(this.max,Lh),vc.subVectors(t.a,Lh),yc.subVectors(t.b,Lh),xc.subVectors(t.c,Lh),To.subVectors(yc,vc),Eo.subVectors(xc,yc),Ll.subVectors(vc,xc);let n=[0,-To.z,To.y,0,-Eo.z,Eo.y,0,-Ll.z,Ll.y,To.z,0,-To.x,Eo.z,0,-Eo.x,Ll.z,0,-Ll.x,-To.y,To.x,0,-Eo.y,Eo.x,0,-Ll.y,Ll.x,0];return!P1(n,vc,yc,xc,n0)||(n=[1,0,0,0,1,0,0,0,1],!P1(n,vc,yc,xc,n0))?!1:(i0.crossVectors(To,Eo),n=[i0.x,i0.y,i0.z],P1(n,vc,yc,xc,n0))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,os).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(os).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xa=[new q,new q,new q,new q,new q,new q,new q,new q],os=new q,e0=new Lo,vc=new q,yc=new q,xc=new q,To=new q,Eo=new q,Ll=new q,Lh=new q,n0=new q,i0=new q,Nl=new q;function P1(e,t,n,i,r){for(let s=0,a=e.length-3;s<=a;s+=3){Nl.fromArray(e,s);let o=r.x*Math.abs(Nl.x)+r.y*Math.abs(Nl.y)+r.z*Math.abs(Nl.z),l=t.dot(Nl),u=n.dot(Nl),c=i.dot(Nl);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}var tI=new Lo,Nh=new q,I1=new q,Vl=class{constructor(t=new q,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):tI.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nh.subVectors(t,this.center);let n=Nh.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Nh,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(I1.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nh.copy(t.center).add(I1)),this.expandByPoint(Nh.copy(t.center).sub(I1))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Sa=new q,B1=new q,r0=new q,Ao=new q,F1=new q,s0=new q,z1=new q,Wh=class{constructor(t=new q,n=new q(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Sa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Sa.copy(this.origin).addScaledVector(this.direction,n),Sa.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){B1.copy(t).add(n).multiplyScalar(.5),r0.copy(n).sub(t).normalize(),Ao.copy(this.origin).sub(B1);let s=t.distanceTo(n)*.5,a=-this.direction.dot(r0),o=Ao.dot(this.direction),l=-Ao.dot(r0),u=Ao.lengthSq(),c=Math.abs(1-a*a),d,f,h,g;if(c>0)if(d=a*l-o,f=a*o-l,g=s*c,d>=0)if(f>=-g)if(f<=g){let _=1/c;d*=_,f*=_,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+u}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+u;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+u):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+u):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+u);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(B1).addScaledVector(r0,f),h}intersectSphere(t,n){Sa.subVectors(t.center,this.origin);let i=Sa.dot(this.direction),r=Sa.dot(Sa)-i*i,s=t.radius*t.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,s,a,o,l,u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(t.min.x-f.x)*u,r=(t.max.x-f.x)*u):(i=(t.max.x-f.x)*u,r=(t.min.x-f.x)*u),c>=0?(s=(t.min.y-f.y)*c,a=(t.max.y-f.y)*c):(s=(t.max.y-f.y)*c,a=(t.min.y-f.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,Sa)!==null}intersectTriangle(t,n,i,r,s){F1.subVectors(n,t),s0.subVectors(i,t),z1.crossVectors(F1,s0);let a=this.direction.dot(z1),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ao.subVectors(this.origin,t);let l=o*this.direction.dot(s0.crossVectors(Ao,s0));if(l<0)return null;let u=o*this.direction.dot(F1.cross(Ao));if(u<0||l+u>a)return null;let c=-o*Ao.dot(z1);return c<0?null:this.at(c/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bn=class e{constructor(t,n,i,r,s,a,o,l,u,c,d,f,h,g,_,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,a,o,l,u,c,d,f,h,g,_,m)}set(t,n,i,r,s,a,o,l,u,c,d,f,h,g,_,m){let p=this.elements;return p[0]=t,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=u,p[6]=c,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,r=1/Sc.setFromMatrixColumn(t,0).length(),s=1/Sc.setFromMatrixColumn(t,1).length(),a=1/Sc.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let f=a*c,h=a*d,g=o*c,_=o*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=h+g*u,n[5]=f-_*u,n[9]=-o*l,n[2]=_-f*u,n[6]=g+h*u,n[10]=a*l}else if(t.order==="YXZ"){let f=l*c,h=l*d,g=u*c,_=u*d;n[0]=f+_*o,n[4]=g*o-h,n[8]=a*u,n[1]=a*d,n[5]=a*c,n[9]=-o,n[2]=h*o-g,n[6]=_+f*o,n[10]=a*l}else if(t.order==="ZXY"){let f=l*c,h=l*d,g=u*c,_=u*d;n[0]=f-_*o,n[4]=-a*d,n[8]=g+h*o,n[1]=h+g*o,n[5]=a*c,n[9]=_-f*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(t.order==="ZYX"){let f=a*c,h=a*d,g=o*c,_=o*d;n[0]=l*c,n[4]=g*u-h,n[8]=f*u+_,n[1]=l*d,n[5]=_*u+f,n[9]=h*u-g,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(t.order==="YZX"){let f=a*l,h=a*u,g=o*l,_=o*u;n[0]=l*c,n[4]=_-f*d,n[8]=g*d+h,n[1]=d,n[5]=a*c,n[9]=-o*c,n[2]=-u*c,n[6]=h*d+g,n[10]=f-_*d}else if(t.order==="XZY"){let f=a*l,h=a*u,g=o*l,_=o*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+_,n[5]=a*c,n[9]=h*d-g,n[2]=g*d-h,n[6]=o*c,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eI,t,nI)}lookAt(t,n,i){let r=this.elements;return Sr.subVectors(t,n),Sr.lengthSq()===0&&(Sr.z=1),Sr.normalize(),wo.crossVectors(i,Sr),wo.lengthSq()===0&&(Math.abs(i.z)===1?Sr.x+=1e-4:Sr.z+=1e-4,Sr.normalize(),wo.crossVectors(i,Sr)),wo.normalize(),a0.crossVectors(Sr,wo),r[0]=wo.x,r[4]=a0.x,r[8]=Sr.x,r[1]=wo.y,r[5]=a0.y,r[9]=Sr.y,r[2]=wo.z,r[6]=a0.z,r[10]=Sr.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],S=i[7],x=i[11],E=i[15],R=r[0],A=r[4],C=r[8],v=r[12],M=r[1],P=r[5],L=r[9],Y=r[13],V=r[2],w=r[6],Z=r[10],tt=r[14],I=r[3],ct=r[7],N=r[11],ht=r[15];return s[0]=a*R+o*M+l*V+u*I,s[4]=a*A+o*P+l*w+u*ct,s[8]=a*C+o*L+l*Z+u*N,s[12]=a*v+o*Y+l*tt+u*ht,s[1]=c*R+d*M+f*V+h*I,s[5]=c*A+d*P+f*w+h*ct,s[9]=c*C+d*L+f*Z+h*N,s[13]=c*v+d*Y+f*tt+h*ht,s[2]=g*R+_*M+m*V+p*I,s[6]=g*A+_*P+m*w+p*ct,s[10]=g*C+_*L+m*Z+p*N,s[14]=g*v+_*Y+m*tt+p*ht,s[3]=y*R+S*M+x*V+E*I,s[7]=y*A+S*P+x*w+E*ct,s[11]=y*C+S*L+x*Z+E*N,s[15]=y*v+S*Y+x*tt+E*ht,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],u=t[13],c=t[2],d=t[6],f=t[10],h=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*d-r*u*d-s*o*f+i*u*f+r*o*h-i*l*h)+_*(+n*l*h-n*u*f+s*a*f-r*a*h+r*u*c-s*l*c)+m*(+n*u*d-n*o*h-s*a*d+i*a*h+s*o*c-i*u*c)+p*(-r*o*c-n*l*d+n*o*f+r*a*d-i*a*f+i*l*c)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],c=t[8],d=t[9],f=t[10],h=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=d*m*u-_*f*u+_*l*h-o*m*h-d*l*p+o*f*p,S=g*f*u-c*m*u-g*l*h+a*m*h+c*l*p-a*f*p,x=c*_*u-g*d*u+g*o*h-a*_*h-c*o*p+a*d*p,E=g*d*l-c*_*l-g*o*f+a*_*f+c*o*m-a*d*m,R=n*y+i*S+r*x+s*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/R;return t[0]=y*A,t[1]=(_*f*s-d*m*s-_*r*h+i*m*h+d*r*p-i*f*p)*A,t[2]=(o*m*s-_*l*s+_*r*u-i*m*u-o*r*p+i*l*p)*A,t[3]=(d*l*s-o*f*s-d*r*u+i*f*u+o*r*h-i*l*h)*A,t[4]=S*A,t[5]=(c*m*s-g*f*s+g*r*h-n*m*h-c*r*p+n*f*p)*A,t[6]=(g*l*s-a*m*s-g*r*u+n*m*u+a*r*p-n*l*p)*A,t[7]=(a*f*s-c*l*s+c*r*u-n*f*u-a*r*h+n*l*h)*A,t[8]=x*A,t[9]=(g*d*s-c*_*s-g*i*h+n*_*h+c*i*p-n*d*p)*A,t[10]=(a*_*s-g*o*s+g*i*u-n*_*u-a*i*p+n*o*p)*A,t[11]=(c*o*s-a*d*s-c*i*u+n*d*u+a*i*h-n*o*h)*A,t[12]=E*A,t[13]=(c*_*r-g*d*r+g*i*f-n*_*f-c*i*m+n*d*m)*A,t[14]=(g*o*r-a*_*r-g*i*l+n*_*l+a*i*m-n*o*m)*A,t[15]=(a*d*r-c*o*r+c*i*l-n*d*l-a*i*f+n*o*f)*A,this}scale(t){let n=this.elements,i=t.x,r=t.y,s=t.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,a=t.x,o=t.y,l=t.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){let r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,c=a+a,d=o+o,f=s*u,h=s*c,g=s*d,_=a*c,m=a*d,p=o*d,y=l*u,S=l*c,x=l*d,E=i.x,R=i.y,A=i.z;return r[0]=(1-(_+p))*E,r[1]=(h+x)*E,r[2]=(g-S)*E,r[3]=0,r[4]=(h-x)*R,r[5]=(1-(f+p))*R,r[6]=(m+y)*R,r[7]=0,r[8]=(g+S)*A,r[9]=(m-y)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){let r=this.elements,s=Sc.set(r[0],r[1],r[2]).length(),a=Sc.set(r[4],r[5],r[6]).length(),o=Sc.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],ls.copy(this);let u=1/s,c=1/a,d=1/o;return ls.elements[0]*=u,ls.elements[1]*=u,ls.elements[2]*=u,ls.elements[4]*=c,ls.elements[5]*=c,ls.elements[6]*=c,ls.elements[8]*=d,ls.elements[9]*=d,ls.elements[10]*=d,n.setFromRotationMatrix(ls),i.x=s,i.y=a,i.z=o,this}makePerspective(t,n,i,r,s,a,o=cs,l=!1){let u=this.elements,c=2*s/(n-t),d=2*s/(i-r),f=(n+t)/(n-t),h=(i+r)/(i-r),g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===cs)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Gh)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,n,i,r,s,a,o=cs,l=!1){let u=this.elements,c=2/(n-t),d=2/(i-r),f=-(n+t)/(n-t),h=-(i+r)/(i-r),g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===cs)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Gh)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=g,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Sc=new q,ls=new bn,eI=new q(0,0,0),nI=new q(1,1,1),wo=new q,a0=new q,Sr=new q,F2=new bn,z2=new Ca,Vs=class e{constructor(t=0,n=0,i=0,r=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-we(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(we(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return F2.makeRotationFromQuaternion(t),this.setFromRotationMatrix(F2,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return z2.setFromEuler(this),this.setFromQuaternion(z2,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vs.DEFAULT_ORDER="XYZ";var Yh=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},iI=0,H2=new q,Mc=new Ca,Ma=new bn,o0=new q,Ph=new q,rI=new q,sI=new Ca,V2=new q(1,0,0),G2=new q(0,1,0),k2=new q(0,0,1),X2={type:"added"},aI={type:"removed"},bc={type:"childadded",child:null},H1={type:"childremoved",child:null},Er=class e extends Ra{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iI++}),this.uuid=gd(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new Vs,i=new Ca,r=new q(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bn},normalMatrix:{value:new ge}}),this.matrix=new bn,this.matrixWorld=new bn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Mc.setFromAxisAngle(t,n),this.quaternion.multiply(Mc),this}rotateOnWorldAxis(t,n){return Mc.setFromAxisAngle(t,n),this.quaternion.premultiply(Mc),this}rotateX(t){return this.rotateOnAxis(V2,t)}rotateY(t){return this.rotateOnAxis(G2,t)}rotateZ(t){return this.rotateOnAxis(k2,t)}translateOnAxis(t,n){return H2.copy(t).applyQuaternion(this.quaternion),this.position.add(H2.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(V2,t)}translateY(t){return this.translateOnAxis(G2,t)}translateZ(t){return this.translateOnAxis(k2,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?o0.copy(t):o0.set(t,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Ph.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(Ph,o0,this.up):Ma.lookAt(o0,Ph,this.up),this.quaternion.setFromRotationMatrix(Ma),r&&(Ma.extractRotation(r.matrixWorld),Mc.setFromRotationMatrix(Ma),this.quaternion.premultiply(Mc.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(X2),bc.child=t,this.dispatchEvent(bc),bc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(aI),H1.child=t,this.dispatchEvent(H1),H1.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(X2),bc.child=t,this.dispatchEvent(bc),bc.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ph,t,rI),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ph,sI,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){let d=l[u];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(t.animations,l))}}if(n){let o=a(t.geometries),l=a(t.materials),u=a(t.textures),c=a(t.images),d=a(t.shapes),f=a(t.skeletons),h=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){let l=[];for(let u in o){let c=o[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}};Er.DEFAULT_UP=new q(0,1,0);Er.DEFAULT_MATRIX_AUTO_UPDATE=!0;Er.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var us=new q,ba=new q,V1=new q,Ta=new q,Tc=new q,Ec=new q,W2=new q,G1=new q,k1=new q,X1=new q,W1=new on,Y1=new on,q1=new on,Do=class e{constructor(t=new q,n=new q,i=new q){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),us.subVectors(t,n),r.cross(us);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,n,i,r,s){us.subVectors(r,n),ba.subVectors(i,n),V1.subVectors(t,n);let a=us.dot(us),o=us.dot(ba),l=us.dot(V1),u=ba.dot(ba),c=ba.dot(V1),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(u*l-o*c)*f,g=(a*c-o*l)*f;return s.set(1-h-g,g,h)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,Ta)===null?!1:Ta.x>=0&&Ta.y>=0&&Ta.x+Ta.y<=1}static getInterpolation(t,n,i,r,s,a,o,l){return this.getBarycoord(t,n,i,r,Ta)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ta.x),l.addScaledVector(a,Ta.y),l.addScaledVector(o,Ta.z),l)}static getInterpolatedAttribute(t,n,i,r,s,a){return W1.setScalar(0),Y1.setScalar(0),q1.setScalar(0),W1.fromBufferAttribute(t,n),Y1.fromBufferAttribute(t,i),q1.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(W1,s.x),a.addScaledVector(Y1,s.y),a.addScaledVector(q1,s.z),a}static isFrontFacing(t,n,i,r){return us.subVectors(i,n),ba.subVectors(t,n),us.cross(ba).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return us.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),us.cross(ba).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,r,s){return e.getInterpolation(t,this.a,this.b,this.c,n,i,r,s)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,r=this.b,s=this.c,a,o;Tc.subVectors(r,i),Ec.subVectors(s,i),G1.subVectors(t,i);let l=Tc.dot(G1),u=Ec.dot(G1);if(l<=0&&u<=0)return n.copy(i);k1.subVectors(t,r);let c=Tc.dot(k1),d=Ec.dot(k1);if(c>=0&&d<=c)return n.copy(r);let f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return a=l/(l-c),n.copy(i).addScaledVector(Tc,a);X1.subVectors(t,s);let h=Tc.dot(X1),g=Ec.dot(X1);if(g>=0&&h<=g)return n.copy(s);let _=h*u-l*g;if(_<=0&&u>=0&&g<=0)return o=u/(u-g),n.copy(i).addScaledVector(Ec,o);let m=c*g-h*d;if(m<=0&&d-c>=0&&h-g>=0)return W2.subVectors(s,r),o=(d-c)/(d-c+(h-g)),n.copy(r).addScaledVector(W2,o);let p=1/(m+_+f);return a=_*p,o=f*p,n.copy(i).addScaledVector(Tc,a).addScaledVector(Ec,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kC={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ro={h:0,s:0,l:0},l0={h:0,s:0,l:0};function Z1(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Ue=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=br){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.colorSpaceToWorking(this,n),this}setRGB(t,n,i,r=Oe.workingColorSpace){return this.r=t,this.g=n,this.b=i,Oe.colorSpaceToWorking(this,r),this}setHSL(t,n,i,r=Oe.workingColorSpace){if(t=KP(t,1),n=we(n,0,1),i=we(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Z1(a,s,t+1/3),this.g=Z1(a,s,t),this.b=Z1(a,s,t-1/3)}return Oe.colorSpaceToWorking(this,r),this}setStyle(t,n=br){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=br){let i=kC[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ea(t.r),this.g=Ea(t.g),this.b=Ea(t.b),this}copyLinearToSRGB(t){return this.r=Cc(t.r),this.g=Cc(t.g),this.b=Cc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=br){return Oe.workingToColorSpace(mi.copy(this),t),Math.round(we(mi.r*255,0,255))*65536+Math.round(we(mi.g*255,0,255))*256+Math.round(we(mi.b*255,0,255))}getHexString(t=br){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Oe.workingColorSpace){Oe.workingToColorSpace(mi.copy(this),n);let i=mi.r,r=mi.g,s=mi.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,u,c=(o+a)/2;if(o===a)l=0,u=0;else{let d=a-o;switch(u=c<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,n=Oe.workingColorSpace){return Oe.workingToColorSpace(mi.copy(this),n),t.r=mi.r,t.g=mi.g,t.b=mi.b,t}getStyle(t=br){Oe.workingToColorSpace(mi.copy(this),t);let n=mi.r,i=mi.g,r=mi.b;return t!==br?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,n,i){return this.getHSL(Ro),this.setHSL(Ro.h+t,Ro.s+n,Ro.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ro),t.getHSL(l0);let i=D1(Ro.h,l0.h,n),r=D1(Ro.s,l0.s,n),s=D1(Ro.l,l0.l,n);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mi=new Ue;Ue.NAMES=kC;var oI=0,No=class extends Ra{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oI++}),this.uuid=gd(),this.name="",this.type="Material",this.blending=wa,this.side=Aa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=b0,this.blendDst=zl,this.blendEquation=Oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Hl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bl,this.stencilZFail=Bl,this.stencilZPass=Bl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wa&&(i.blending=this.blending),this.side!==Aa&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==b0&&(i.blendSrc=this.blendSrc),this.blendDst!==zl&&(i.blendDst=this.blendDst),this.blendEquation!==Oo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sS&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bl&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bl&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bl&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n){let s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},qh=class extends No{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vs,this.combine=hS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Dn=new q,u0=new ue,lI=0,Wn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lI++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=aS,this.updateRanges=[],this.gpuType=Xs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=n.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)u0.fromBufferAttribute(this,n),u0.applyMatrix3(t),this.setXY(n,u0.x,u0.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dn.fromBufferAttribute(this,n),Dn.applyMatrix3(t),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Dn.fromBufferAttribute(this,n),Dn.applyMatrix4(t),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Dn.fromBufferAttribute(this,n),Dn.applyNormalMatrix(t),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Dn.fromBufferAttribute(this,n),Dn.transformDirection(t),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Oh(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=$i(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Oh(n,this.array)),n}setX(t,n){return this.normalized&&(n=$i(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Oh(n,this.array)),n}setY(t,n){return this.normalized&&(n=$i(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Oh(n,this.array)),n}setZ(t,n){return this.normalized&&(n=$i(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Oh(n,this.array)),n}setW(t,n){return this.normalized&&(n=$i(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=$i(n,this.array),i=$i(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=$i(n,this.array),i=$i(i,this.array),r=$i(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,n,i,r,s){return t*=this.itemSize,this.normalized&&(n=$i(n,this.array),i=$i(i,this.array),r=$i(r,this.array),s=$i(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==aS&&(t.usage=this.usage),t}};var Zh=class extends Wn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Jh=class extends Wn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Yn=class extends Wn{constructor(t,n,i){super(new Float32Array(t),n,i)}},uI=0,Yr=new bn,J1=new Er,Ac=new q,Mr=new Lo,Ih=new Lo,Xn=new q,tr=class e extends Ra{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uI++}),this.uuid=gd(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(TS(t)?Jh:Zh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ge().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Yr.makeRotationFromQuaternion(t),this.applyMatrix4(Yr),this}rotateX(t){return Yr.makeRotationX(t),this.applyMatrix4(Yr),this}rotateY(t){return Yr.makeRotationY(t),this.applyMatrix4(Yr),this}rotateZ(t){return Yr.makeRotationZ(t),this.applyMatrix4(Yr),this}translate(t,n,i){return Yr.makeTranslation(t,n,i),this.applyMatrix4(Yr),this}scale(t,n,i){return Yr.makeScale(t,n,i),this.applyMatrix4(Yr),this}lookAt(t){return J1.lookAt(t),J1.updateMatrix(),this.applyMatrix4(J1.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ac).negate(),this.translate(Ac.x,Ac.y,Ac.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let r=0,s=t.length;r<s;r++){let a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yn(i,3))}else{let i=Math.min(t.length,n.count);for(let r=0;r<i;r++){let s=t[r];n.setXYZ(r,s.x,s.y,s.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];Mr.setFromBufferAttribute(s),this.morphTargetsRelative?(Xn.addVectors(this.boundingBox.min,Mr.min),this.boundingBox.expandByPoint(Xn),Xn.addVectors(this.boundingBox.max,Mr.max),this.boundingBox.expandByPoint(Xn)):(this.boundingBox.expandByPoint(Mr.min),this.boundingBox.expandByPoint(Mr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vl);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let i=this.boundingSphere.center;if(Mr.setFromBufferAttribute(t),n)for(let s=0,a=n.length;s<a;s++){let o=n[s];Ih.setFromBufferAttribute(o),this.morphTargetsRelative?(Xn.addVectors(Mr.min,Ih.min),Mr.expandByPoint(Xn),Xn.addVectors(Mr.max,Ih.max),Mr.expandByPoint(Xn)):(Mr.expandByPoint(Ih.min),Mr.expandByPoint(Ih.max))}Mr.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Xn.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Xn));if(n)for(let s=0,a=n.length;s<a;s++){let o=n[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Xn.fromBufferAttribute(o,u),l&&(Ac.fromBufferAttribute(t,u),Xn.add(Ac)),r=Math.max(r,i.distanceToSquared(Xn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new q,l[C]=new q;let u=new q,c=new q,d=new q,f=new ue,h=new ue,g=new ue,_=new q,m=new q;function p(C,v,M){u.fromBufferAttribute(i,C),c.fromBufferAttribute(i,v),d.fromBufferAttribute(i,M),f.fromBufferAttribute(s,C),h.fromBufferAttribute(s,v),g.fromBufferAttribute(s,M),c.sub(u),d.sub(u),h.sub(f),g.sub(f);let P=1/(h.x*g.y-g.x*h.y);isFinite(P)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(P),m.copy(d).multiplyScalar(h.x).addScaledVector(c,-g.x).multiplyScalar(P),o[C].add(_),o[v].add(_),o[M].add(_),l[C].add(m),l[v].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,v=y.length;C<v;++C){let M=y[C],P=M.start,L=M.count;for(let Y=P,V=P+L;Y<V;Y+=3)p(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}let S=new q,x=new q,E=new q,R=new q;function A(C){E.fromBufferAttribute(r,C),R.copy(E);let v=o[C];S.copy(v),S.sub(E.multiplyScalar(E.dot(v))).normalize(),x.crossVectors(R,v);let P=x.dot(l[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,P)}for(let C=0,v=y.length;C<v;++C){let M=y[C],P=M.start,L=M.count;for(let Y=P,V=P+L;Y<V;Y+=3)A(t.getX(Y+0)),A(t.getX(Y+1)),A(t.getX(Y+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new q,s=new q,a=new q,o=new q,l=new q,u=new q,c=new q,d=new q;if(t)for(let f=0,h=t.count;f<h;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,h=n.count;f<h;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Xn.fromBufferAttribute(t,n),Xn.normalize(),t.setXYZ(n,Xn.x,Xn.y,Xn.z)}toNonIndexed(){function t(o,l){let u=o.array,c=o.itemSize,d=o.normalized,f=new u.constructor(l.length*c),h=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*c;for(let p=0;p<c;p++)f[g++]=u[h++]}return new Wn(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,r=this.attributes;for(let o in r){let l=r[o],u=t(l,i);n.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let l=[],u=s[o];for(let c=0,d=u.length;c<d;c++){let f=u[c],h=t(f,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let u=i[l];t.data.attributes[l]=u.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){let h=u[d];c.push(h.toJSON(t.data))}c.length>0&&(r[l]=c,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let r=t.attributes;for(let u in r){let c=r[u];this.setAttribute(u,c.clone(n))}let s=t.morphAttributes;for(let u in s){let c=[],d=s[u];for(let f=0,h=d.length;f<h;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let u=0,c=a.length;u<c;u++){let d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Y2=new bn,Pl=new Wh,c0=new Vl,q2=new q,f0=new q,h0=new q,d0=new q,K1=new q,p0=new q,Z2=new q,m0=new q,ii=class extends Er{constructor(t=new tr,n=new qh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,t);let o=this.morphTargetInfluences;if(s&&o){p0.set(0,0,0);for(let l=0,u=s.length;l<u;l++){let c=o[l],d=s[l];c!==0&&(K1.fromBufferAttribute(d,t),a?p0.addScaledVector(K1,c):p0.addScaledVector(K1.sub(n),c))}n.add(p0)}return n}raycast(t,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),c0.copy(i.boundingSphere),c0.applyMatrix4(s),Pl.copy(t.ray).recast(t.near),!(c0.containsPoint(Pl.origin)===!1&&(Pl.intersectSphere(c0,q2)===null||Pl.origin.distanceToSquared(q2)>(t.far-t.near)**2))&&(Y2.copy(s).invert(),Pl.copy(t.ray).applyMatrix4(Y2),!(i.boundingBox!==null&&Pl.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Pl)))}_computeIntersections(t,n,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,h.start),S=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let x=y,E=S;x<E;x+=3){let R=o.getX(x),A=o.getX(x+1),C=o.getX(x+2);r=g0(this,p,t,i,u,c,d,R,A,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{let g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){let y=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);r=g0(this,a,t,i,u,c,d,y,S,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,h.start),S=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let x=y,E=S;x<E;x+=3){let R=x,A=x+1,C=x+2;r=g0(this,p,t,i,u,c,d,R,A,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{let g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){let y=m,S=m+1,x=m+2;r=g0(this,a,t,i,u,c,d,y,S,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}};function cI(e,t,n,i,r,s,a,o){let l;if(t.side===Ii?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Aa,o),l===null)return null;m0.copy(o),m0.applyMatrix4(e.matrixWorld);let u=n.ray.origin.distanceTo(m0);return u<n.near||u>n.far?null:{distance:u,point:m0.clone(),object:e}}function g0(e,t,n,i,r,s,a,o,l,u){e.getVertexPosition(o,f0),e.getVertexPosition(l,h0),e.getVertexPosition(u,d0);let c=cI(e,t,n,i,f0,h0,d0,Z2);if(c){let d=new q;Do.getBarycoord(Z2,f0,h0,d0,d),r&&(c.uv=Do.getInterpolatedAttribute(r,o,l,u,d,new ue)),s&&(c.uv1=Do.getInterpolatedAttribute(s,o,l,u,d,new ue)),a&&(c.normal=Do.getInterpolatedAttribute(a,o,l,u,d,new q),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let f={a:o,b:l,c:u,normal:new q,materialIndex:0};Do.getNormal(f0,h0,d0,f.normal),c.face=f,c.barycoord=d}return c}var Lc=class e extends tr{constructor(t=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],u=[],c=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,n,t,a,s,0),g("z","y","x",1,-1,i,n,-t,a,s,1),g("x","z","y",1,1,t,i,n,r,a,2),g("x","z","y",1,-1,t,i,-n,r,a,3),g("x","y","z",1,-1,t,n,i,r,s,4),g("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Yn(u,3)),this.setAttribute("normal",new Yn(c,3)),this.setAttribute("uv",new Yn(d,2));function g(_,m,p,y,S,x,E,R,A,C,v){let M=x/A,P=E/C,L=x/2,Y=E/2,V=R/2,w=A+1,Z=C+1,tt=0,I=0,ct=new q;for(let N=0;N<Z;N++){let ht=N*P-Y;for(let St=0;St<w;St++){let W=St*M-L;ct[_]=W*y,ct[m]=ht*S,ct[p]=V,u.push(ct.x,ct.y,ct.z),ct[_]=0,ct[m]=0,ct[p]=R>0?1:-1,c.push(ct.x,ct.y,ct.z),d.push(St/A),d.push(1-N/C),tt+=1}}for(let N=0;N<C;N++)for(let ht=0;ht<A;ht++){let St=f+ht+w*N,W=f+ht+w*(N+1),Rt=f+(ht+1)+w*(N+1),xt=f+(ht+1)+w*N;l.push(St,W,xt),l.push(W,Rt,xt),I+=6}o.addGroup(h,I,v),h+=I,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Wl(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function _i(e){let t={};for(let n=0;n<e.length;n++){let i=Wl(e[n]);for(let r in i)t[r]=i[r]}return t}function fI(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ES(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Oe.workingColorSpace}var XC={clone:Wl,merge:_i},hI=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dI=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,er=class extends No{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hI,this.fragmentShader=dI,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wl(t.uniforms),this.uniformsGroups=fI(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Kh=class extends Er{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bn,this.projectionMatrix=new bn,this.projectionMatrixInverse=new bn,this.coordinateSystem=cs,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Co=new q,J2=new ue,K2=new ue,gi=class extends Kh{constructor(t=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=w0*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(C1*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return w0*2*Math.atan(Math.tan(C1*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Co.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Co.x,Co.y).multiplyScalar(-t/Co.z),Co.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Co.x,Co.y).multiplyScalar(-t/Co.z)}getViewSize(t,n){return this.getViewBounds(t,J2,K2),n.subVectors(K2,J2)}setViewOffset(t,n,i,r,s,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(C1*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},wc=-90,Rc=1,U0=class extends Er{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new gi(wc,Rc,t,n);r.layers=this.layers,this.add(r);let s=new gi(wc,Rc,t,n);s.layers=this.layers,this.add(s);let a=new gi(wc,Rc,t,n);a.layers=this.layers,this.add(a);let o=new gi(wc,Rc,t,n);o.layers=this.layers,this.add(o);let l=new gi(wc,Rc,t,n);l.layers=this.layers,this.add(l);let u=new gi(wc,Rc,t,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(let u of n)this.remove(u);if(t===cs)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Gh)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of n)this.add(u),u.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,u,c]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(n,s),t.setRenderTarget(i,1,r),t.render(n,a),t.setRenderTarget(i,2,r),t.render(n,o),t.setRenderTarget(i,3,r),t.render(n,l),t.setRenderTarget(i,4,r),t.render(n,u),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(n,c),t.setRenderTarget(d,f,h),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Qh=class extends Tr{constructor(t=[],n=kl,i,r,s,a,o,l,u,c){super(t,n,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},O0=class extends Zr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Qh(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Lc(5,5,5),s=new er({name:"CubemapFromEquirect",uniforms:Wl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ii,blending:ds});s.uniforms.tEquirect.value=n;let a=new ii(r,s),o=n.minFilter;return n.minFilter===Fo&&(n.minFilter=fs),new U0(1,10,this).update(t,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,n=!0,i=!0,r=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,r);t.setRenderTarget(s)}},Fl=class extends Er{constructor(){super(),this.isGroup=!0,this.type="Group"}},pI={type:"move"},Nc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,u=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(let _ of t.hand.values()){let m=n.getJointPose(_,i),p=this._getHandJoint(u,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),h=.02,g=.005;u.inputState.pinching&&f>h+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=h-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pI)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Fl;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var Pc=class extends Er{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vs,this.environmentIntensity=1,this.environmentRotation=new Vs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var hs=class extends Wn{constructor(t,n,i,r=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var Q1=new q,mI=new q,gI=new ge,zs=class{constructor(t=new q(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let r=Q1.subVectors(i,n).cross(mI.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(Q1),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||gI.getNormalMatrix(t),r=this.coplanarPoint(Q1).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Il=new Vl,_I=new ue(.5,.5),_0=new q,jh=class{constructor(t=new zs,n=new zs,i=new zs,r=new zs,s=new zs,a=new zs){this.planes=[t,n,i,r,s,a]}set(t,n,i,r,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=cs,i=!1){let r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],u=s[3],c=s[4],d=s[5],f=s[6],h=s[7],g=s[8],_=s[9],m=s[10],p=s[11],y=s[12],S=s[13],x=s[14],E=s[15];if(r[0].setComponents(u-a,h-c,p-g,E-y).normalize(),r[1].setComponents(u+a,h+c,p+g,E+y).normalize(),r[2].setComponents(u+o,h+d,p+_,E+S).normalize(),r[3].setComponents(u-o,h-d,p-_,E-S).normalize(),i)r[4].setComponents(l,f,m,x).normalize(),r[5].setComponents(u-l,h-f,p-m,E-x).normalize();else if(r[4].setComponents(u-l,h-f,p-m,E-x).normalize(),n===cs)r[5].setComponents(u+l,h+f,p+m,E+x).normalize();else if(n===Gh)r[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Il.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Il.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Il)}intersectsSprite(t){Il.center.set(0,0,0);let n=_I.distanceTo(t.center);return Il.radius=.7071067811865476+n,Il.applyMatrix4(t.matrixWorld),this.intersectsSphere(Il)}intersectsSphere(t){let n=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(_0.x=r.normal.x>0?t.max.x:t.min.x,_0.y=r.normal.y>0?t.max.y:t.min.y,_0.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(_0)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var L0=class extends No{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},N0=new q,P0=new q,Q2=new bn,Bh=new Wh,v0=new Vl,j1=new q,j2=new q,I0=class extends Er{constructor(t=new tr,n=new L0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)N0.fromBufferAttribute(n,r-1),P0.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=N0.distanceTo(P0);t.setAttribute("lineDistance",new Yn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){let i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),v0.copy(i.boundingSphere),v0.applyMatrix4(r),v0.radius+=s,t.ray.intersectsSphere(v0)===!1)return;Q2.copy(r).invert(),Bh.copy(t.ray).applyMatrix4(Q2);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=u){let p=c.getX(_),y=c.getX(_+1),S=y0(this,t,Bh,l,p,y,_);S&&n.push(S)}if(this.isLineLoop){let _=c.getX(g-1),m=c.getX(h),p=y0(this,t,Bh,l,_,m,g-1);p&&n.push(p)}}else{let h=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=u){let p=y0(this,t,Bh,l,_,_+1,_);p&&n.push(p)}if(this.isLineLoop){let _=y0(this,t,Bh,l,g-1,h,g-1);_&&n.push(_)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function y0(e,t,n,i,r,s,a){let o=e.geometry.attributes.position;if(N0.fromBufferAttribute(o,r),P0.fromBufferAttribute(o,s),n.distanceSqToSegment(N0,P0,j1,j2)>i)return;j1.applyMatrix4(e.matrixWorld);let u=t.ray.origin.distanceTo(j1);if(!(u<t.near||u>t.far))return{distance:u,point:j2.clone().applyMatrix4(e.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:e}}var $2=new q,tC=new q,$h=class extends I0{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)$2.fromBufferAttribute(n,r),tC.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+$2.distanceTo(tC);t.setAttribute("lineDistance",new Yn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var td=class extends Tr{constructor(t,n,i=zo,r,s,a,o=qr,l=qr,u,c=Dc,d=1){if(c!==Dc&&c!==Hc)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:n,depth:d};super(f,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Oc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},ed=class extends Tr{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var nd=class e extends tr{constructor(t=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let u=this;r=Math.floor(r),s=Math.floor(s);let c=[],d=[],f=[],h=[],g=0,_=[],m=i/2,p=0;y(),a===!1&&(t>0&&S(!0),n>0&&S(!1)),this.setIndex(c),this.setAttribute("position",new Yn(d,3)),this.setAttribute("normal",new Yn(f,3)),this.setAttribute("uv",new Yn(h,2));function y(){let x=new q,E=new q,R=0,A=(n-t)/i;for(let C=0;C<=s;C++){let v=[],M=C/s,P=M*(n-t)+t;for(let L=0;L<=r;L++){let Y=L/r,V=Y*l+o,w=Math.sin(V),Z=Math.cos(V);E.x=P*w,E.y=-M*i+m,E.z=P*Z,d.push(E.x,E.y,E.z),x.set(w,A,Z).normalize(),f.push(x.x,x.y,x.z),h.push(Y,1-M),v.push(g++)}_.push(v)}for(let C=0;C<r;C++)for(let v=0;v<s;v++){let M=_[v][C],P=_[v+1][C],L=_[v+1][C+1],Y=_[v][C+1];(t>0||v!==0)&&(c.push(M,P,Y),R+=3),(n>0||v!==s-1)&&(c.push(P,L,Y),R+=3)}u.addGroup(p,R,0),p+=R}function S(x){let E=g,R=new ue,A=new q,C=0,v=x===!0?t:n,M=x===!0?1:-1;for(let L=1;L<=r;L++)d.push(0,m*M,0),f.push(0,M,0),h.push(.5,.5),g++;let P=g;for(let L=0;L<=r;L++){let V=L/r*l+o,w=Math.cos(V),Z=Math.sin(V);A.x=v*Z,A.y=m*M,A.z=v*w,d.push(A.x,A.y,A.z),f.push(0,M,0),R.x=w*.5+.5,R.y=Z*.5*M+.5,h.push(R.x,R.y),g++}for(let L=0;L<r;L++){let Y=E+L,V=P+L;x===!0?c.push(V,V+1,Y):c.push(V+1,V,Y),C+=3}u.addGroup(p,C,x===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Jr=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),r=0,s=i.length,a;n?a=n:a=t*i[s-1];let o=0,l=s-1,u;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),u=i[r]-a,u<0)o=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);let c=i[r],f=i[r+1]-c,h=(a-c)/f;return(r+h)/(s-1)}getTangent(t,n){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new ue:new q);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new q,r=[],s=[],a=[],o=new q,l=new bn;for(let h=0;h<=t;h++){let g=h/t;r[h]=this.getTangentAt(g,new q)}s[0]=new q,a[0]=new q;let u=Number.MAX_VALUE,c=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),d<=u&&(u=d,i.set(0,1,0)),f<=u&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(r[h-1],r[h]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(we(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(o,g))}a[h].crossVectors(r[h],s[h])}if(n===!0){let h=Math.acos(we(s[0].dot(s[t]),-1,1));h/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(h=-h);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],h*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},id=class extends Jr{constructor(t=0,n=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,n=new ue){let i=n,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=u-this.aY;l=f*c-h*d+this.aX,u=f*d+h*c+this.aY}return i.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},B0=class extends id{constructor(t,n,i,r,s,a){super(t,n,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function AS(){let e=0,t=0,n=0,i=0;function r(s,a,o,l){e=s,t=o,n=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,u){r(a,o,u*(o-s),u*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,u,c,d){let f=(a-s)/u-(o-s)/(u+c)+(o-a)/c,h=(o-a)/c-(l-a)/(c+d)+(l-o)/d;f*=c,h*=c,r(a,o,f,h)},calc:function(s){let a=s*s,o=a*s;return e+t*s+n*a+i*o}}}var x0=new q,$1=new AS,tS=new AS,eS=new AS,F0=class extends Jr{constructor(t=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=r}getPoint(t,n=new q){let i=n,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let u,c;this.closed||o>0?u=r[(o-1)%s]:(x0.subVectors(r[0],r[1]).add(r[0]),u=x0);let d=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?c=r[(o+2)%s]:(x0.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=x0),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,g=Math.pow(u.distanceToSquared(d),h),_=Math.pow(d.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(c),h);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),$1.initNonuniformCatmullRom(u.x,d.x,f.x,c.x,g,_,m),tS.initNonuniformCatmullRom(u.y,d.y,f.y,c.y,g,_,m),eS.initNonuniformCatmullRom(u.z,d.z,f.z,c.z,g,_,m)}else this.curveType==="catmullrom"&&($1.initCatmullRom(u.x,d.x,f.x,c.x,this.tension),tS.initCatmullRom(u.y,d.y,f.y,c.y,this.tension),eS.initCatmullRom(u.z,d.z,f.z,c.z,this.tension));return i.set($1.calc(l),tS.calc(l),eS.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let r=t.points[n];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let r=this.points[n];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let r=t.points[n];this.points.push(new q().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function eC(e,t,n,i,r){let s=(i-t)*.5,a=(r-n)*.5,o=e*e,l=e*o;return(2*n-2*i+s+a)*l+(-3*n+3*i-2*s-a)*o+s*e+n}function vI(e,t){let n=1-e;return n*n*t}function yI(e,t){return 2*(1-e)*e*t}function xI(e,t){return e*e*t}function Fh(e,t,n,i){return vI(e,t)+yI(e,n)+xI(e,i)}function SI(e,t){let n=1-e;return n*n*n*t}function MI(e,t){let n=1-e;return 3*n*n*e*t}function bI(e,t){return 3*(1-e)*e*e*t}function TI(e,t){return e*e*e*t}function zh(e,t,n,i,r){return SI(e,t)+MI(e,n)+bI(e,i)+TI(e,r)}var z0=class extends Jr{constructor(t=new ue,n=new ue,i=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=r}getPoint(t,n=new ue){let i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(zh(t,r.x,s.x,a.x,o.x),zh(t,r.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},H0=class extends Jr{constructor(t=new q,n=new q,i=new q,r=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=r}getPoint(t,n=new q){let i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(zh(t,r.x,s.x,a.x,o.x),zh(t,r.y,s.y,a.y,o.y),zh(t,r.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},V0=class extends Jr{constructor(t=new ue,n=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new ue){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new ue){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ic=class extends Jr{constructor(t=new q,n=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new q){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new q){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},G0=class extends Jr{constructor(t=new ue,n=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new ue){let i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(Fh(t,r.x,s.x,a.x),Fh(t,r.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rd=class extends Jr{constructor(t=new q,n=new q,i=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new q){let i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(Fh(t,r.x,s.x,a.x),Fh(t,r.y,s.y,a.y),Fh(t,r.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},k0=class extends Jr{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new ue){let i=n,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],u=r[a],c=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return i.set(eC(o,l.x,u.x,c.x,d.x),eC(o,l.y,u.y,c.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let r=t.points[n];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let r=this.points[n];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let r=t.points[n];this.points.push(new ue().fromArray(r))}return this}},EI=Object.freeze({__proto__:null,ArcCurve:B0,CatmullRomCurve3:F0,CubicBezierCurve:z0,CubicBezierCurve3:H0,EllipseCurve:id,LineCurve:V0,LineCurve3:Ic,QuadraticBezierCurve:G0,QuadraticBezierCurve3:rd,SplineCurve:k0});var Po=class e extends tr{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};let s=t/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,d=t/o,f=n/l,h=[],g=[],_=[],m=[];for(let p=0;p<c;p++){let y=p*f-a;for(let S=0;S<u;S++){let x=S*d-s;g.push(x,-y,0),_.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let S=y+u*p,x=y+u*(p+1),E=y+1+u*(p+1),R=y+1+u*p;h.push(S,x,R),h.push(x,E,R)}this.setIndex(h),this.setAttribute("position",new Yn(g,3)),this.setAttribute("normal",new Yn(_,3)),this.setAttribute("uv",new Yn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var sd=class e extends tr{constructor(t=new rd(new q(-1,-1,0),new q(-1,1,0),new q(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:i,radialSegments:r,closed:s};let a=t.computeFrenetFrames(n,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new q,l=new q,u=new ue,c=new q,d=[],f=[],h=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Yn(d,3)),this.setAttribute("normal",new Yn(f,3)),this.setAttribute("uv",new Yn(h,2));function _(){for(let S=0;S<n;S++)m(S);m(s===!1?n:0),y(),p()}function m(S){c=t.getPointAt(S/n,c);let x=a.normals[S],E=a.binormals[S];for(let R=0;R<=r;R++){let A=R/r*Math.PI*2,C=Math.sin(A),v=-Math.cos(A);l.x=v*x.x+C*E.x,l.y=v*x.y+C*E.y,l.z=v*x.z+C*E.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=c.x+i*l.x,o.y=c.y+i*l.y,o.z=c.z+i*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let S=1;S<=n;S++)for(let x=1;x<=r;x++){let E=(r+1)*(S-1)+(x-1),R=(r+1)*S+(x-1),A=(r+1)*S+x,C=(r+1)*(S-1)+x;g.push(E,R,C),g.push(R,A,C)}}function y(){for(let S=0;S<=n;S++)for(let x=0;x<=r;x++)u.x=S/n,u.y=x/r,h.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new e(new EI[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var X0=class extends No{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},W0=class extends No{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function S0(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function AI(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Gl=class{constructor(t,n,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];t:{e:{let a;n:{i:if(!(t<r)){for(let o=i+2;;){if(r===void 0){if(t<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=n[++i],t<r)break e}a=n.length;break n}if(!(t>=s)){let o=n[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],t>=s)break e}a=i,i=0;break n}break t}for(;i<a;){let o=i+a>>>1;t<n[o]?a=o:i=o+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=t*r;for(let a=0;a!==r;++a)n[a]=i[s+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Y0=class extends Gl{constructor(t,n,i,r){super(t,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nS,endingEnd:nS}}intervalChanged_(t,n,i){let r=this.parameterPositions,s=t-2,a=t+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case iS:s=t,o=2*n-i;break;case rS:s=r.length-2,o=n+r[s]-r[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case iS:a=t,l=2*i-n;break;case rS:a=1,l=i+r[1]-r[0];break;default:a=t-1,l=n}let u=(i-n)*.5,c=this.valueSize;this._weightPrev=u/(n-o),this._weightNext=u/(l-i),this._offsetPrev=s*c,this._offsetNext=a*c}interpolate_(t,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,u=l-o,c=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-n)/(r-n),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,S=(-1-h)*m+(1.5+h)*_+.5*g,x=h*m-h*_;for(let E=0;E!==o;++E)s[E]=p*a[c+E]+y*a[u+E]+S*a[l+E]+x*a[d+E];return s}},q0=class extends Gl{constructor(t,n,i,r){super(t,n,i,r)}interpolate_(t,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,u=l-o,c=(i-n)/(r-n),d=1-c;for(let f=0;f!==o;++f)s[f]=a[u+f]*d+a[l+f]*c;return s}},Z0=class extends Gl{constructor(t,n,i,r){super(t,n,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Ar=class{constructor(t,n,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=S0(n,this.TimeBufferType),this.values=S0(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:S0(t.times,Array),values:S0(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Z0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new q0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Y0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Hh:n=this.InterpolantFactoryMethodDiscrete;break;case A0:n=this.InterpolantFactoryMethodLinear;break;case M0:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hh;case this.InterpolantFactoryMethodLinear:return A0;case this.InterpolantFactoryMethodSmooth:return M0}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=t}return this}trim(t,n){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<t;)++s;for(;a!==-1&&i[a]>n;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(r!==void 0&&AI(r))for(let o=0,l=r.length;o!==l;++o){let u=r[o];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===M0,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,u=t[o],c=t[o+1];if(u!==c&&(o!==1||u!==t[0]))if(r)l=!0;else{let d=o*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let _=n[d+g];if(_!==n[f+g]||_!==n[h+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,f=a*i;for(let h=0;h!==i;++h)n[f+h]=n[d+h]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,u=0;u!==i;++u)n[l+u]=n[o+u];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=n.slice(0,a*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,t,n);return r.createInterpolant=this.createInterpolant,r}};Ar.prototype.ValueTypeName="";Ar.prototype.TimeBufferType=Float32Array;Ar.prototype.ValueBufferType=Float32Array;Ar.prototype.DefaultInterpolation=A0;var Io=class extends Ar{constructor(t,n,i){super(t,n,i)}};Io.prototype.ValueTypeName="bool";Io.prototype.ValueBufferType=Array;Io.prototype.DefaultInterpolation=Hh;Io.prototype.InterpolantFactoryMethodLinear=void 0;Io.prototype.InterpolantFactoryMethodSmooth=void 0;var J0=class extends Ar{constructor(t,n,i,r){super(t,n,i,r)}};J0.prototype.ValueTypeName="color";var K0=class extends Ar{constructor(t,n,i,r){super(t,n,i,r)}};K0.prototype.ValueTypeName="number";var Q0=class extends Gl{constructor(t,n,i,r){super(t,n,i,r)}interpolate_(t,n,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-n)/(r-n),u=t*o;for(let c=u+o;u!==c;u+=4)Ca.slerpFlat(s,0,a,u-o,a,u,l);return s}},ad=class extends Ar{constructor(t,n,i,r){super(t,n,i,r)}InterpolantFactoryMethodLinear(t){return new Q0(this.times,this.values,this.getValueSize(),t)}};ad.prototype.ValueTypeName="quaternion";ad.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends Ar{constructor(t,n,i){super(t,n,i)}};Bo.prototype.ValueTypeName="string";Bo.prototype.ValueBufferType=Array;Bo.prototype.DefaultInterpolation=Hh;Bo.prototype.InterpolantFactoryMethodLinear=void 0;Bo.prototype.InterpolantFactoryMethodSmooth=void 0;var j0=class extends Ar{constructor(t,n,i,r){super(t,n,i,r)}};j0.prototype.ValueTypeName="vector";var $0=class{constructor(t,n,i){let r=this,s=!1,a=0,o=0,l,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(c){o++,s===!1&&r.onStart!==void 0&&r.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,r.onProgress!==void 0&&r.onProgress(c,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){let d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){let h=u[d],g=u[d+1];if(h.global&&(h.lastIndex=0),h.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},WC=new $0,tg=class{constructor(t){this.manager=t!==void 0?t:WC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(r,s){i.load(t,r,n,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};tg.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bc=class extends Kh{constructor(t=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-t,a=i+t,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var od=class extends tr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var eg=class extends gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var wS="\\[\\]\\.:\\/",wI=new RegExp("["+wS+"]","g"),RS="[^"+wS+"]",RI="[^"+wS.replace("\\.","")+"]",CI=/((?:WC+[\/:])*)/.source.replace("WC",RS),DI=/(WCOD+)?/.source.replace("WCOD",RI),UI=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",RS),OI=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",RS),LI=new RegExp("^"+CI+DI+UI+OI+"$"),NI=["material","materials","bones","map"],oS=class{constructor(t,n,i){let r=i||nn.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,r)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},nn=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(wI,"")}static parseTrackName(t){let n=LI.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);NI.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[n++]=i[r]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===u){u=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[r];if(a===void 0){let u=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nn.Composite=oS;nn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nn.prototype.GetterByBindingType=[nn.prototype._getValue_direct,nn.prototype._getValue_array,nn.prototype._getValue_arrayElement,nn.prototype._getValue_toArray];nn.prototype.SetterByBindingTypeAndVersioning=[[nn.prototype._setValue_direct,nn.prototype._setValue_direct_setNeedsUpdate,nn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_array,nn.prototype._setValue_array_setNeedsUpdate,nn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_arrayElement,nn.prototype._setValue_arrayElement_setNeedsUpdate,nn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_fromArray,nn.prototype._setValue_fromArray_setNeedsUpdate,nn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xH=new Float32Array(1);function CS(e,t,n,i){let r=PI(i);switch(n){case vS:return e*t;case xS:return e*t/r.components*r.byteLength;case gg:return e*t/r.components*r.byteLength;case SS:return e*t*2/r.components*r.byteLength;case _g:return e*t*2/r.components*r.byteLength;case yS:return e*t*3/r.components*r.byteLength;case Qr:return e*t*4/r.components*r.byteLength;case vg:return e*t*4/r.components*r.byteLength;case hd:case dd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case pd:case md:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xg:case Mg:return Math.max(e,16)*Math.max(t,8)/4;case yg:case Sg:return Math.max(e,8)*Math.max(t,8)/2;case bg:case Tg:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Eg:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ag:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case wg:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Rg:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Cg:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Dg:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ug:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Og:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Lg:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ng:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Pg:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ig:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Bg:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Fg:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case zg:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Hg:case Vg:case Gg:return Math.ceil(e/4)*Math.ceil(t/4)*16;case kg:case Xg:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Wg:case Yg:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function PI(e){switch(e){case Kr:case pS:return{byteLength:1,components:1};case Fc:case mS:case Ho:return{byteLength:2,components:1};case pg:case mg:return{byteLength:2,components:4};case zo:case dg:case Xs:return{byteLength:4,components:1};case gS:case _S:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function m3(){let e=null,t=!1,n=null,i=null;function r(s,a){n(s,a),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function BI(e){let t=new WeakMap;function n(o,l){let u=o.array,c=o.usage,d=u.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,u,c),o.onUploadCallback();let h;if(u instanceof Float32Array)h=e.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=e.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?h=e.HALF_FLOAT:h=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=e.SHORT;else if(u instanceof Uint32Array)h=e.UNSIGNED_INT;else if(u instanceof Int32Array)h=e.INT;else if(u instanceof Int8Array)h=e.BYTE;else if(u instanceof Uint8Array)h=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){let c=l.array,d=l.updateRanges;if(e.bindBuffer(u,o),d.length===0)e.bufferSubData(u,0,c);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],_=d[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let _=d[h];e.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=t.get(o);if(u===void 0)t.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var FI=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zI=`#ifdef USE_ALPHAHASH
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
#endif`,HI=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VI=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GI=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kI=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XI=`#ifdef USE_AOMAP
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
#endif`,WI=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YI=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qI=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZI=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JI=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KI=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QI=`#ifdef USE_IRIDESCENCE
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
#endif`,jI=`#ifdef USE_BUMPMAP
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
#endif`,$I=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tB=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eB=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nB=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iB=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rB=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sB=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,aB=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,oB=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,lB=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uB=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cB=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fB=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hB=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dB=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pB="gl_FragColor = linearToOutputTexel( gl_FragColor );",mB=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gB=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_B=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vB=`#ifdef USE_ENVMAP
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
#endif`,yB=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xB=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,SB=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MB=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bB=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TB=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EB=`#ifdef USE_GRADIENTMAP
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
}`,AB=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wB=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RB=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CB=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,DB=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,UB=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OB=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LB=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NB=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PB=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,IB=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BB=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FB=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,zB=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HB=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VB=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GB=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kB=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XB=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WB=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YB=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qB=`#if defined( USE_POINTS_UV )
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
#endif`,ZB=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JB=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KB=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QB=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jB=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$B=`#ifdef USE_MORPHTARGETS
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
#endif`,tF=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eF=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nF=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sF=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aF=`#ifdef USE_NORMALMAP
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
#endif`,oF=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lF=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uF=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cF=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fF=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hF=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dF=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pF=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mF=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gF=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_F=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vF=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yF=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SF=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,MF=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,bF=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TF=`#ifdef USE_SKINNING
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
#endif`,EF=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AF=`#ifdef USE_SKINNING
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
#endif`,wF=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RF=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CF=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DF=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UF=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OF=`#ifdef USE_TRANSMISSION
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
#endif`,LF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IF=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,BF=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FF=`uniform sampler2D t2D;
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
}`,zF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HF=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GF=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kF=`#include <common>
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
}`,XF=`#if DEPTH_PACKING == 3200
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
}`,WF=`#define DISTANCE
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
}`,YF=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZF=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JF=`uniform float scale;
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
}`,KF=`uniform vec3 diffuse;
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
}`,QF=`#include <common>
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
}`,jF=`uniform vec3 diffuse;
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
}`,$F=`#define LAMBERT
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
}`,tz=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,ez=`#define MATCAP
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
}`,nz=`#define MATCAP
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
}`,iz=`#define NORMAL
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
}`,rz=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sz=`#define PHONG
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
}`,az=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,oz=`#define STANDARD
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
}`,lz=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,uz=`#define TOON
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
}`,cz=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,fz=`uniform float size;
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
}`,hz=`uniform vec3 diffuse;
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
}`,dz=`#include <common>
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
}`,pz=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,mz=`uniform float rotation;
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
}`,gz=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:FI,alphahash_pars_fragment:zI,alphamap_fragment:HI,alphamap_pars_fragment:VI,alphatest_fragment:GI,alphatest_pars_fragment:kI,aomap_fragment:XI,aomap_pars_fragment:WI,batching_pars_vertex:YI,batching_vertex:qI,begin_vertex:ZI,beginnormal_vertex:JI,bsdfs:KI,iridescence_fragment:QI,bumpmap_pars_fragment:jI,clipping_planes_fragment:$I,clipping_planes_pars_fragment:tB,clipping_planes_pars_vertex:eB,clipping_planes_vertex:nB,color_fragment:iB,color_pars_fragment:rB,color_pars_vertex:sB,color_vertex:aB,common:oB,cube_uv_reflection_fragment:lB,defaultnormal_vertex:uB,displacementmap_pars_vertex:cB,displacementmap_vertex:fB,emissivemap_fragment:hB,emissivemap_pars_fragment:dB,colorspace_fragment:pB,colorspace_pars_fragment:mB,envmap_fragment:gB,envmap_common_pars_fragment:_B,envmap_pars_fragment:vB,envmap_pars_vertex:yB,envmap_physical_pars_fragment:DB,envmap_vertex:xB,fog_vertex:SB,fog_pars_vertex:MB,fog_fragment:bB,fog_pars_fragment:TB,gradientmap_pars_fragment:EB,lightmap_pars_fragment:AB,lights_lambert_fragment:wB,lights_lambert_pars_fragment:RB,lights_pars_begin:CB,lights_toon_fragment:UB,lights_toon_pars_fragment:OB,lights_phong_fragment:LB,lights_phong_pars_fragment:NB,lights_physical_fragment:PB,lights_physical_pars_fragment:IB,lights_fragment_begin:BB,lights_fragment_maps:FB,lights_fragment_end:zB,logdepthbuf_fragment:HB,logdepthbuf_pars_fragment:VB,logdepthbuf_pars_vertex:GB,logdepthbuf_vertex:kB,map_fragment:XB,map_pars_fragment:WB,map_particle_fragment:YB,map_particle_pars_fragment:qB,metalnessmap_fragment:ZB,metalnessmap_pars_fragment:JB,morphinstance_vertex:KB,morphcolor_vertex:QB,morphnormal_vertex:jB,morphtarget_pars_vertex:$B,morphtarget_vertex:tF,normal_fragment_begin:eF,normal_fragment_maps:nF,normal_pars_fragment:iF,normal_pars_vertex:rF,normal_vertex:sF,normalmap_pars_fragment:aF,clearcoat_normal_fragment_begin:oF,clearcoat_normal_fragment_maps:lF,clearcoat_pars_fragment:uF,iridescence_pars_fragment:cF,opaque_fragment:fF,packing:hF,premultiplied_alpha_fragment:dF,project_vertex:pF,dithering_fragment:mF,dithering_pars_fragment:gF,roughnessmap_fragment:_F,roughnessmap_pars_fragment:vF,shadowmap_pars_fragment:yF,shadowmap_pars_vertex:xF,shadowmap_vertex:SF,shadowmask_pars_fragment:MF,skinbase_vertex:bF,skinning_pars_vertex:TF,skinning_vertex:EF,skinnormal_vertex:AF,specularmap_fragment:wF,specularmap_pars_fragment:RF,tonemapping_fragment:CF,tonemapping_pars_fragment:DF,transmission_fragment:UF,transmission_pars_fragment:OF,uv_pars_fragment:LF,uv_pars_vertex:NF,uv_vertex:PF,worldpos_vertex:IF,background_vert:BF,background_frag:FF,backgroundCube_vert:zF,backgroundCube_frag:HF,cube_vert:VF,cube_frag:GF,depth_vert:kF,depth_frag:XF,distanceRGBA_vert:WF,distanceRGBA_frag:YF,equirect_vert:qF,equirect_frag:ZF,linedashed_vert:JF,linedashed_frag:KF,meshbasic_vert:QF,meshbasic_frag:jF,meshlambert_vert:$F,meshlambert_frag:tz,meshmatcap_vert:ez,meshmatcap_frag:nz,meshnormal_vert:iz,meshnormal_frag:rz,meshphong_vert:sz,meshphong_frag:az,meshphysical_vert:oz,meshphysical_frag:lz,meshtoon_vert:uz,meshtoon_frag:cz,points_vert:fz,points_frag:hz,shadow_vert:dz,shadow_frag:pz,sprite_vert:mz,sprite_frag:gz},Wt={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Ws={basic:{uniforms:_i([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:_i([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:_i([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:_i([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:_i([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:_i([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:_i([Wt.points,Wt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:_i([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:_i([Wt.common,Wt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:_i([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:_i([Wt.sprite,Wt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:_i([Wt.common,Wt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:_i([Wt.lights,Wt.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Ws.physical={uniforms:_i([Ws.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};var qg={r:0,b:0,g:0},Yl=new Vs,_z=new bn;function vz(e,t,n,i,r,s,a){let o=new Ue(0),l=s===!0?0:1,u,c,d=null,f=0,h=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?n:t).get(x)),x}function _(S){let x=!1,E=g(S);E===null?p(o,l):E&&E.isColor&&(p(E,1),x=!0);let R=e.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(e.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(S,x){let E=g(x);E&&(E.isCubeTexture||E.mapping===cd)?(c===void 0&&(c=new ii(new Lc(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Wl(Ws.backgroundCube.uniforms),vertexShader:Ws.backgroundCube.vertexShader,fragmentShader:Ws.backgroundCube.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Yl.copy(x.backgroundRotation),Yl.x*=-1,Yl.y*=-1,Yl.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Yl.y*=-1,Yl.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_z.makeRotationFromEuler(Yl)),c.material.toneMapped=Oe.getTransfer(E.colorSpace)!==We,(d!==E||f!==E.version||h!==e.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,h=e.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new ii(new Po(2,2),new er({name:"BackgroundMaterial",uniforms:Wl(Ws.background.uniforms),vertexShader:Ws.background.vertexShader,fragmentShader:Ws.background.fragmentShader,side:Aa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=Oe.getTransfer(E.colorSpace)!==We,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||h!==e.toneMapping)&&(u.material.needsUpdate=!0,d=E,f=E.version,h=e.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null))}function p(S,x){S.getRGB(qg,ES(e)),i.buffers.color.setClear(qg.r,qg.g,qg.b,x,a)}function y(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:_,addToRenderList:m,dispose:y}}function yz(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,a=!1;function o(M,P,L,Y,V){let w=!1,Z=d(Y,L,P);s!==Z&&(s=Z,u(s.object)),w=h(M,Y,L,V),w&&g(M,Y,L,V),V!==null&&t.update(V,e.ELEMENT_ARRAY_BUFFER),(w||a)&&(a=!1,x(M,P,L,Y),V!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return e.createVertexArray()}function u(M){return e.bindVertexArray(M)}function c(M){return e.deleteVertexArray(M)}function d(M,P,L){let Y=L.wireframe===!0,V=i[M.id];V===void 0&&(V={},i[M.id]=V);let w=V[P.id];w===void 0&&(w={},V[P.id]=w);let Z=w[Y];return Z===void 0&&(Z=f(l()),w[Y]=Z),Z}function f(M){let P=[],L=[],Y=[];for(let V=0;V<n;V++)P[V]=0,L[V]=0,Y[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:Y,object:M,attributes:{},index:null}}function h(M,P,L,Y){let V=s.attributes,w=P.attributes,Z=0,tt=L.getAttributes();for(let I in tt)if(tt[I].location>=0){let N=V[I],ht=w[I];if(ht===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor)),N===void 0||N.attribute!==ht||ht&&N.data!==ht.data)return!0;Z++}return s.attributesNum!==Z||s.index!==Y}function g(M,P,L,Y){let V={},w=P.attributes,Z=0,tt=L.getAttributes();for(let I in tt)if(tt[I].location>=0){let N=w[I];N===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(N=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(N=M.instanceColor));let ht={};ht.attribute=N,N&&N.data&&(ht.data=N.data),V[I]=ht,Z++}s.attributes=V,s.attributesNum=Z,s.index=Y}function _(){let M=s.newAttributes;for(let P=0,L=M.length;P<L;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){let L=s.newAttributes,Y=s.enabledAttributes,V=s.attributeDivisors;L[M]=1,Y[M]===0&&(e.enableVertexAttribArray(M),Y[M]=1),V[M]!==P&&(e.vertexAttribDivisor(M,P),V[M]=P)}function y(){let M=s.newAttributes,P=s.enabledAttributes;for(let L=0,Y=P.length;L<Y;L++)P[L]!==M[L]&&(e.disableVertexAttribArray(L),P[L]=0)}function S(M,P,L,Y,V,w,Z){Z===!0?e.vertexAttribIPointer(M,P,L,V,w):e.vertexAttribPointer(M,P,L,Y,V,w)}function x(M,P,L,Y){_();let V=Y.attributes,w=L.getAttributes(),Z=P.defaultAttributeValues;for(let tt in w){let I=w[tt];if(I.location>=0){let ct=V[tt];if(ct===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),ct!==void 0){let N=ct.normalized,ht=ct.itemSize,St=t.get(ct);if(St===void 0)continue;let W=St.buffer,Rt=St.type,xt=St.bytesPerElement,nt=Rt===e.INT||Rt===e.UNSIGNED_INT||ct.gpuType===dg;if(ct.isInterleavedBufferAttribute){let ot=ct.data,wt=ot.stride,Bt=ct.offset;if(ot.isInstancedInterleavedBuffer){for(let zt=0;zt<I.locationSize;zt++)p(I.location+zt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let zt=0;zt<I.locationSize;zt++)m(I.location+zt);e.bindBuffer(e.ARRAY_BUFFER,W);for(let zt=0;zt<I.locationSize;zt++)S(I.location+zt,ht/I.locationSize,Rt,N,wt*xt,(Bt+ht/I.locationSize*zt)*xt,nt)}else{if(ct.isInstancedBufferAttribute){for(let ot=0;ot<I.locationSize;ot++)p(I.location+ot,ct.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ot=0;ot<I.locationSize;ot++)m(I.location+ot);e.bindBuffer(e.ARRAY_BUFFER,W);for(let ot=0;ot<I.locationSize;ot++)S(I.location+ot,ht/I.locationSize,Rt,N,ht*xt,ht/I.locationSize*ot*xt,nt)}}else if(Z!==void 0){let N=Z[tt];if(N!==void 0)switch(N.length){case 2:e.vertexAttrib2fv(I.location,N);break;case 3:e.vertexAttrib3fv(I.location,N);break;case 4:e.vertexAttrib4fv(I.location,N);break;default:e.vertexAttrib1fv(I.location,N)}}}}y()}function E(){C();for(let M in i){let P=i[M];for(let L in P){let Y=P[L];for(let V in Y)c(Y[V].object),delete Y[V];delete P[L]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;let P=i[M.id];for(let L in P){let Y=P[L];for(let V in Y)c(Y[V].object),delete Y[V];delete P[L]}delete i[M.id]}function A(M){for(let P in i){let L=i[P];if(L[M.id]===void 0)continue;let Y=L[M.id];for(let V in Y)c(Y[V].object),delete Y[V];delete L[M.id]}}function C(){v(),a=!0,s!==r&&(s=r,u(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:v,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function xz(e,t,n){let i;function r(u){i=u}function s(u,c){e.drawArrays(i,u,c),n.update(c,i,1)}function a(u,c,d){d!==0&&(e.drawArraysInstanced(i,u,c,d),n.update(c,i,d))}function o(u,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let h=0;for(let g=0;g<d;g++)h+=c[g];n.update(h,i,1)}function l(u,c,d,f){if(d===0)return;let h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<u.length;g++)a(u[g],c[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=c[_]*f[_];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Sz(e,t,n,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Qr&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let C=A===Ho&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Kr&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Xs&&!C)}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp",c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:E,maxSamples:R}}function Mz(e){let t=this,n=null,i=0,r=!1,s=!1,a=new zs,o=new ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=e.get(d);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{let y=s?0:i,S=y*4,x=p.clippingState||null;l.value=x,x=c(g,f,S,h);for(let E=0;E!==S;++E)x[E]=n[E];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(d,f,h,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=h+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=h;S!==_;++S,x+=4)a.copy(d[S]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function bz(e){let t=new WeakMap;function n(a,o){return o===cg?a.mapping=kl:o===fg&&(a.mapping=Xl),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===cg||o===fg)if(t.has(a)){let l=t.get(a).texture;return n(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let u=new O0(l.height);return u.fromEquirectangularTexture(e,a),t.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var Gc=4,YC=[.125,.215,.35,.446,.526,.582],Jl=20,DS=new Bc,qC=new Ue,US=null,OS=0,LS=0,NS=!1,Zl=(1+Math.sqrt(5))/2,Vc=1/Zl,ZC=[new q(-Zl,Vc,0),new q(Zl,Vc,0),new q(-Vc,0,Zl),new q(Vc,0,Zl),new q(0,Zl,-Vc),new q(0,Zl,Vc),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],Tz=new q,Kg=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100,s={}){let{size:a=256,position:o=Tz}=s;US=this._renderer.getRenderTarget(),OS=this._renderer.getActiveCubeFace(),LS=this._renderer.getActiveMipmapLevel(),NS=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=QC(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=KC(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(US,OS,LS),this._renderer.xr.enabled=NS,t.scissorTest=!1,Zg(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===kl||t.mapping===Xl?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),US=this._renderer.getRenderTarget(),OS=this._renderer.getActiveCubeFace(),LS=this._renderer.getActiveMipmapLevel(),NS=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:fs,minFilter:fs,generateMipmaps:!1,type:Ho,format:Qr,colorSpace:Hs,depthBuffer:!1},r=JC(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=JC(t,n,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ez(s)),this._blurMaterial=Az(s,t,n)}return r}_compileMaterial(t){let n=new ii(this._lodPlanes[0],t);this._renderer.compile(n,DS)}_sceneToCubeUV(t,n,i,r,s){let l=new gi(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(qC),d.toneMapping=Da,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));let _=new qh({name:"PMREM.Background",side:Ii,depthWrite:!1,depthTest:!1}),m=new ii(new Lc,_),p=!1,y=t.background;y?y.isColor&&(_.color.copy(y),t.background=null,p=!0):(_.color.copy(qC),p=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(l.up.set(0,u[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[S],s.y,s.z)):x===1?(l.up.set(0,0,u[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[S],s.z)):(l.up.set(0,u[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[S]));let E=this._cubeSize;Zg(r,x*E,S>2?E:0,E,E),d.setRenderTarget(r),p&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=f,t.background=y}_textureToCubeUV(t,n){let i=this._renderer,r=t.mapping===kl||t.mapping===Xl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=QC()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=KC());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new ii(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;Zg(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,DS)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ZC[(r-s-1)%ZC.length];this._blur(t,s-1,s,a,o)}n.autoClear=i}_blur(t,n,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,n,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,n,i,r,s,a,o){let l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,d=new ii(this._lodPlanes[r],u),f=u.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Jl-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):Jl;m>Jl&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jl}`);let p=[],y=0;for(let A=0;A<Jl;++A){let C=A/_,v=Math.exp(-C*C/2);p.push(v),A===0?y+=v:A<m&&(y+=2*v)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;let x=this._sizeLods[r],E=3*x*(r>S-Gc?r-S+Gc:0),R=4*(this._cubeSize-x);Zg(n,E,R,3*x,2*x),l.setRenderTarget(n),l.render(d,DS)}};function Ez(e){let t=[],n=[],i=[],r=e,s=e-Gc+1+YC.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);n.push(o);let l=1/o;a>e-Gc?l=YC[a-e+Gc-1]:a===0&&(l=0),i.push(l);let u=1/(o-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],h=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*h),S=new Float32Array(m*g*h),x=new Float32Array(p*g*h);for(let R=0;R<h;R++){let A=R%3*2/3-1,C=R>2?0:-1,v=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];y.set(v,_*g*R),S.set(f,m*g*R);let M=[R,R,R,R,R,R];x.set(M,p*g*R)}let E=new tr;E.setAttribute("position",new Wn(y,_)),E.setAttribute("uv",new Wn(S,m)),E.setAttribute("faceIndex",new Wn(x,p)),t.push(E),r>Gc&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function JC(e,t,n){let i=new Zr(e,t,n);return i.texture.mapping=cd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zg(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function Az(e,t,n){let i=new Float32Array(Jl),r=new q(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:Jl,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:XS(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function KC(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:XS(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function QC(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:XS(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function XS(){return`

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
	`}function wz(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,u=l===cg||l===fg,c=l===kl||l===Xl;if(u||c){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new Kg(e)),d=u?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let h=o.image;return u&&h&&h.height>0||c&&h&&r(h)?(n===null&&(n=new Kg(e)),d=u?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0,u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){let l=o.target;l.removeEventListener("dispose",s);let u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function a(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function Rz(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&Uc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Cz(e,t,n,i){let r={},s=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];let h=s.get(f);h&&(t.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(d){let f=d.attributes;for(let h in f)t.update(f[h],e.ARRAY_BUFFER)}function u(d){let f=[],h=d.index,g=d.attributes.position,_=0;if(h!==null){let y=h.array;_=h.version;for(let S=0,x=y.length;S<x;S+=3){let E=y[S+0],R=y[S+1],A=y[S+2];f.push(E,R,R,A,A,E)}}else if(g!==void 0){let y=g.array;_=g.version;for(let S=0,x=y.length/3-1;S<x;S+=3){let E=S+0,R=S+1,A=S+2;f.push(E,R,R,A,A,E)}}else return;let m=new(TS(f)?Jh:Zh)(f,1);m.version=_;let p=s.get(d);p&&t.remove(p),s.set(d,m)}function c(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function Dz(e,t,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){e.drawElements(i,h,s,f*a),n.update(h,i,1)}function u(f,h,g){g!==0&&(e.drawElementsInstanced(i,h,s,f*a,g),n.update(h,i,g))}function c(f,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];n.update(m,i,1)}function d(f,h,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)u(f[p]/a,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=h[y]*_[y];n.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function Uz(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Oz(e,t,n){let i=new WeakMap,r=new on;function s(a,o,l){let u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0,f=i.get(o);if(f===void 0||f.count!==d){let v=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();let h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],S=0;h===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let x=o.attributes.position.count*S,E=1;x>t.maxTextureSize&&(E=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let R=new Float32Array(x*E*4*d),A=new Xh(R,x,E,d);A.type=Xs,A.needsUpdate=!0;let C=S*4;for(let M=0;M<d;M++){let P=m[M],L=p[M],Y=y[M],V=x*E*4*M;for(let w=0;w<P.count;w++){let Z=w*C;h===!0&&(r.fromBufferAttribute(P,w),R[V+Z+0]=r.x,R[V+Z+1]=r.y,R[V+Z+2]=r.z,R[V+Z+3]=0),g===!0&&(r.fromBufferAttribute(L,w),R[V+Z+4]=r.x,R[V+Z+5]=r.y,R[V+Z+6]=r.z,R[V+Z+7]=0),_===!0&&(r.fromBufferAttribute(Y,w),R[V+Z+8]=r.x,R[V+Z+9]=r.y,R[V+Z+10]=r.z,R[V+Z+11]=Y.itemSize===4?r.w:1)}}f={count:d,texture:A,size:new ue(x,E)},i.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let h=0;for(let _=0;_<u.length;_++)h+=u[_];let g=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",u)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:s}}function Lz(e,t,n,i){let r=new WeakMap;function s(l){let u=i.render.frame,c=l.geometry,d=t.get(l,c);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function o(l){let u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}var g3=new Tr,jC=new td(1,1),_3=new Xh,v3=new D0,y3=new Qh,$C=[],t3=[],e3=new Float32Array(16),n3=new Float32Array(9),i3=new Float32Array(4);function Xc(e,t,n){let i=e[0];if(i<=0||i>0)return e;let r=t*n,s=$C[r];if(s===void 0&&(s=new Float32Array(r),$C[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(s,o)}return s}function In(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Bn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function jg(e,t){let n=t3[t];n===void 0&&(n=new Int32Array(t),t3[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Nz(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Pz(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(In(n,t))return;e.uniform2fv(this.addr,t),Bn(n,t)}}function Iz(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(In(n,t))return;e.uniform3fv(this.addr,t),Bn(n,t)}}function Bz(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(In(n,t))return;e.uniform4fv(this.addr,t),Bn(n,t)}}function Fz(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(In(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Bn(n,t)}else{if(In(n,i))return;i3.set(i),e.uniformMatrix2fv(this.addr,!1,i3),Bn(n,i)}}function zz(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(In(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Bn(n,t)}else{if(In(n,i))return;n3.set(i),e.uniformMatrix3fv(this.addr,!1,n3),Bn(n,i)}}function Hz(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(In(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Bn(n,t)}else{if(In(n,i))return;e3.set(i),e.uniformMatrix4fv(this.addr,!1,e3),Bn(n,i)}}function Vz(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Gz(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(In(n,t))return;e.uniform2iv(this.addr,t),Bn(n,t)}}function kz(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(In(n,t))return;e.uniform3iv(this.addr,t),Bn(n,t)}}function Xz(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(In(n,t))return;e.uniform4iv(this.addr,t),Bn(n,t)}}function Wz(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Yz(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(In(n,t))return;e.uniform2uiv(this.addr,t),Bn(n,t)}}function qz(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(In(n,t))return;e.uniform3uiv(this.addr,t),Bn(n,t)}}function Zz(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(In(n,t))return;e.uniform4uiv(this.addr,t),Bn(n,t)}}function Jz(e,t,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let s;this.type===e.SAMPLER_2D_SHADOW?(jC.compareFunction=MS,s=jC):s=g3,n.setTexture2D(t||s,r)}function Kz(e,t,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||v3,r)}function Qz(e,t,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||y3,r)}function jz(e,t,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||_3,r)}function $z(e){switch(e){case 5126:return Nz;case 35664:return Pz;case 35665:return Iz;case 35666:return Bz;case 35674:return Fz;case 35675:return zz;case 35676:return Hz;case 5124:case 35670:return Vz;case 35667:case 35671:return Gz;case 35668:case 35672:return kz;case 35669:case 35673:return Xz;case 5125:return Wz;case 36294:return Yz;case 36295:return qz;case 36296:return Zz;case 35678:case 36198:case 36298:case 36306:case 35682:return Jz;case 35679:case 36299:case 36307:return Kz;case 35680:case 36300:case 36308:case 36293:return Qz;case 36289:case 36303:case 36311:case 36292:return jz}}function t4(e,t){e.uniform1fv(this.addr,t)}function e4(e,t){let n=Xc(t,this.size,2);e.uniform2fv(this.addr,n)}function n4(e,t){let n=Xc(t,this.size,3);e.uniform3fv(this.addr,n)}function i4(e,t){let n=Xc(t,this.size,4);e.uniform4fv(this.addr,n)}function r4(e,t){let n=Xc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function s4(e,t){let n=Xc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function a4(e,t){let n=Xc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function o4(e,t){e.uniform1iv(this.addr,t)}function l4(e,t){e.uniform2iv(this.addr,t)}function u4(e,t){e.uniform3iv(this.addr,t)}function c4(e,t){e.uniform4iv(this.addr,t)}function f4(e,t){e.uniform1uiv(this.addr,t)}function h4(e,t){e.uniform2uiv(this.addr,t)}function d4(e,t){e.uniform3uiv(this.addr,t)}function p4(e,t){e.uniform4uiv(this.addr,t)}function m4(e,t,n){let i=this.cache,r=t.length,s=jg(n,r);In(i,s)||(e.uniform1iv(this.addr,s),Bn(i,s));for(let a=0;a!==r;++a)n.setTexture2D(t[a]||g3,s[a])}function g4(e,t,n){let i=this.cache,r=t.length,s=jg(n,r);In(i,s)||(e.uniform1iv(this.addr,s),Bn(i,s));for(let a=0;a!==r;++a)n.setTexture3D(t[a]||v3,s[a])}function _4(e,t,n){let i=this.cache,r=t.length,s=jg(n,r);In(i,s)||(e.uniform1iv(this.addr,s),Bn(i,s));for(let a=0;a!==r;++a)n.setTextureCube(t[a]||y3,s[a])}function v4(e,t,n){let i=this.cache,r=t.length,s=jg(n,r);In(i,s)||(e.uniform1iv(this.addr,s),Bn(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(t[a]||_3,s[a])}function y4(e){switch(e){case 5126:return t4;case 35664:return e4;case 35665:return n4;case 35666:return i4;case 35674:return r4;case 35675:return s4;case 35676:return a4;case 5124:case 35670:return o4;case 35667:case 35671:return l4;case 35668:case 35672:return u4;case 35669:case 35673:return c4;case 5125:return f4;case 36294:return h4;case 36295:return d4;case 36296:return p4;case 35678:case 36198:case 36298:case 36306:case 35682:return m4;case 35679:case 36299:case 36307:return g4;case 35680:case 36300:case 36308:case 36293:return _4;case 36289:case 36303:case 36311:case 36292:return v4}}var IS=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$z(n.type)}},BS=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=y4(n.type)}},FS=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(t,n[o.id],i)}}},PS=/(\w+)(\])?(\[|\.)?/g;function r3(e,t){e.seq.push(t),e.map[t.id]=t}function x4(e,t,n){let i=e.name,r=i.length;for(PS.lastIndex=0;;){let s=PS.exec(i),a=PS.lastIndex,o=s[1],l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){r3(n,u===void 0?new IS(o,e,t):new BS(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new FS(o),r3(n,d)),n=d}}}var kc=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=t.getActiveUniform(n,r),a=t.getUniformLocation(n,s.name);x4(s,a,this)}}setValue(t,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(t,i,r)}setOptional(t,n,i){let r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let s=0,a=n.length;s!==a;++s){let o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,n){let i=[];for(let r=0,s=t.length;r!==s;++r){let a=t[r];a.id in n&&i.push(a)}return i}};function s3(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var S4=37297,M4=0;function b4(e,t){let n=e.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var a3=new ge;function T4(e){Oe._getMatrix(a3,Oe.workingColorSpace,e);let t=`mat3( ${a3.elements.map(n=>n.toFixed(4))} )`;switch(Oe.getTransfer(e)){case Vh:return[t,"LinearTransferOETF"];case We:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function o3(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+b4(e.getShaderSource(t),o)}else return s}function E4(e,t){let n=T4(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function A4(e,t){let n;switch(t){case MC:n="Linear";break;case bC:n="Reinhard";break;case TC:n="Cineon";break;case EC:n="ACESFilmic";break;case wC:n="AgX";break;case RC:n="Neutral";break;case AC:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Jg=new q;function w4(){Oe.getLuminanceCoefficients(Jg);let e=Jg.x.toFixed(4),t=Jg.y.toFixed(4),n=Jg.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R4(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_d).join(`
`)}function C4(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function D4(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=e.getActiveAttrib(t,r),a=s.name,o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function _d(e){return e!==""}function l3(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function u3(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var U4=/^[ \t]*#include +<([\w\d./]+)>/gm;function zS(e){return e.replace(U4,L4)}var O4=new Map;function L4(e,t){let n=xe[t];if(n===void 0){let i=O4.get(t);if(i!==void 0)n=xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return zS(n)}var N4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c3(e){return e.replace(N4,P4)}function P4(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function f3(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function I4(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===uS?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===rC?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Gs&&(t="SHADOWMAP_TYPE_VSM"),t}function B4(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case kl:case Xl:t="ENVMAP_TYPE_CUBE";break;case cd:t="ENVMAP_TYPE_CUBE_UV";break}return t}function F4(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Xl&&(t="ENVMAP_MODE_REFRACTION"),t}function z4(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case hS:t="ENVMAP_BLENDING_MULTIPLY";break;case xC:t="ENVMAP_BLENDING_MIX";break;case SC:t="ENVMAP_BLENDING_ADD";break}return t}function H4(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function V4(e,t,n,i){let r=e.getContext(),s=n.defines,a=n.vertexShader,o=n.fragmentShader,l=I4(n),u=B4(n),c=F4(n),d=z4(n),f=H4(n),h=R4(n),g=C4(s),_=r.createProgram(),m,p,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(_d).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(_d).join(`
`),p.length>0&&(p+=`
`)):(m=[f3(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_d).join(`
`),p=[f3(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Da?"#define TONE_MAPPING":"",n.toneMapping!==Da?xe.tonemapping_pars_fragment:"",n.toneMapping!==Da?A4("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,E4("linearToOutputTexel",n.outputColorSpace),w4(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_d).join(`
`)),a=zS(a),a=l3(a,n),a=u3(a,n),o=zS(o),o=l3(o,n),o=u3(o,n),a=c3(a),o=c3(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===bS?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=y+m+a,x=y+p+o,E=s3(r,r.VERTEX_SHADER,S),R=s3(r,r.FRAGMENT_SHADER,x);r.attachShader(_,E),r.attachShader(_,R),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(P){if(e.debug.checkShaderErrors){let L=r.getProgramInfoLog(_)||"",Y=r.getShaderInfoLog(E)||"",V=r.getShaderInfoLog(R)||"",w=L.trim(),Z=Y.trim(),tt=V.trim(),I=!0,ct=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(I=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,_,E,R);else{let N=o3(r,E,"vertex"),ht=o3(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+w+`
`+N+`
`+ht)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(Z===""||tt==="")&&(ct=!1);ct&&(P.diagnostics={runnable:I,programLog:w,vertexShader:{log:Z,prefix:m},fragmentShader:{log:tt,prefix:p}})}r.deleteShader(E),r.deleteShader(R),C=new kc(r,_),v=D4(r,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,S4)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=M4++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=R,this}var G4=0,HS=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new VS(t),n.set(t,i)),i}},VS=class{constructor(t){this.id=G4++,this.code=t,this.usedTimes=0}};function k4(e,t,n,i,r,s,a){let o=new Yh,l=new HS,u=new Set,c=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return u.add(v),v===0?"uv":`uv${v}`}function m(v,M,P,L,Y){let V=L.fog,w=Y.geometry,Z=v.isMeshStandardMaterial?L.environment:null,tt=(v.isMeshStandardMaterial?n:t).get(v.envMap||Z),I=tt&&tt.mapping===cd?tt.image.height:null,ct=g[v.type];v.precision!==null&&(h=r.getMaxPrecision(v.precision),h!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let N=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,ht=N!==void 0?N.length:0,St=0;w.morphAttributes.position!==void 0&&(St=1),w.morphAttributes.normal!==void 0&&(St=2),w.morphAttributes.color!==void 0&&(St=3);let W,Rt,xt,nt;if(ct){let Tt=Ws[ct];W=Tt.vertexShader,Rt=Tt.fragmentShader}else W=v.vertexShader,Rt=v.fragmentShader,l.update(v),xt=l.getVertexShaderID(v),nt=l.getFragmentShaderID(v);let ot=e.getRenderTarget(),wt=e.state.buffers.depth.getReversed(),Bt=Y.isInstancedMesh===!0,zt=Y.isBatchedMesh===!0,Xt=!!v.map,Vt=!!v.matcap,U=!!tt,Ft=!!v.aoMap,Et=!!v.lightMap,Mt=!!v.bumpMap,z=!!v.normalMap,Qt=!!v.displacementMap,Nt=!!v.emissiveMap,It=!!v.metalnessMap,ie=!!v.roughnessMap,Gt=v.anisotropy>0,D=v.clearcoat>0,T=v.dispersion>0,B=v.iridescence>0,J=v.sheen>0,Q=v.transmission>0,$=Gt&&!!v.anisotropyMap,Ot=D&&!!v.clearcoatMap,pt=D&&!!v.clearcoatNormalMap,Ht=D&&!!v.clearcoatRoughnessMap,Dt=B&&!!v.iridescenceMap,bt=B&&!!v.iridescenceThicknessMap,mt=J&&!!v.sheenColorMap,k=J&&!!v.sheenRoughnessMap,H=!!v.specularMap,G=!!v.specularColorMap,it=!!v.specularIntensityMap,O=Q&&!!v.transmissionMap,et=Q&&!!v.thicknessMap,ut=!!v.gradientMap,dt=!!v.alphaMap,at=v.alphaTest>0,rt=!!v.alphaHash,gt=!!v.extensions,lt=Da;v.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(lt=e.toneMapping);let Yt={shaderID:ct,shaderType:v.type,shaderName:v.name,vertexShader:W,fragmentShader:Rt,defines:v.defines,customVertexShaderID:xt,customFragmentShaderID:nt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:zt,batchingColor:zt&&Y._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&Y.instanceColor!==null,instancingMorph:Bt&&Y.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?e.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Hs,alphaToCoverage:!!v.alphaToCoverage,map:Xt,matcap:Vt,envMap:U,envMapMode:U&&tt.mapping,envMapCubeUVHeight:I,aoMap:Ft,lightMap:Et,bumpMap:Mt,normalMap:z,displacementMap:f&&Qt,emissiveMap:Nt,normalMapObjectSpace:z&&v.normalMapType===LC,normalMapTangentSpace:z&&v.normalMapType===OC,metalnessMap:It,roughnessMap:ie,anisotropy:Gt,anisotropyMap:$,clearcoat:D,clearcoatMap:Ot,clearcoatNormalMap:pt,clearcoatRoughnessMap:Ht,dispersion:T,iridescence:B,iridescenceMap:Dt,iridescenceThicknessMap:bt,sheen:J,sheenColorMap:mt,sheenRoughnessMap:k,specularMap:H,specularColorMap:G,specularIntensityMap:it,transmission:Q,transmissionMap:O,thicknessMap:et,gradientMap:ut,opaque:v.transparent===!1&&v.blending===wa&&v.alphaToCoverage===!1,alphaMap:dt,alphaTest:at,alphaHash:rt,combine:v.combine,mapUv:Xt&&_(v.map.channel),aoMapUv:Ft&&_(v.aoMap.channel),lightMapUv:Et&&_(v.lightMap.channel),bumpMapUv:Mt&&_(v.bumpMap.channel),normalMapUv:z&&_(v.normalMap.channel),displacementMapUv:Qt&&_(v.displacementMap.channel),emissiveMapUv:Nt&&_(v.emissiveMap.channel),metalnessMapUv:It&&_(v.metalnessMap.channel),roughnessMapUv:ie&&_(v.roughnessMap.channel),anisotropyMapUv:$&&_(v.anisotropyMap.channel),clearcoatMapUv:Ot&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:pt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:k&&_(v.sheenRoughnessMap.channel),specularMapUv:H&&_(v.specularMap.channel),specularColorMapUv:G&&_(v.specularColorMap.channel),specularIntensityMapUv:it&&_(v.specularIntensityMap.channel),transmissionMapUv:O&&_(v.transmissionMap.channel),thicknessMapUv:et&&_(v.thicknessMap.channel),alphaMapUv:dt&&_(v.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(z||Gt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!w.attributes.uv&&(Xt||dt),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:wt,skinning:Y.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:St,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&P.length>0,shadowMapType:e.shadowMap.type,toneMapping:lt,decodeVideoTexture:Xt&&v.map.isVideoTexture===!0&&Oe.getTransfer(v.map.colorSpace)===We,decodeVideoTextureEmissive:Nt&&v.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(v.emissiveMap.colorSpace)===We,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ks,flipSided:v.side===Ii,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:gt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&v.extensions.multiDraw===!0||zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Yt.vertexUv1s=u.has(1),Yt.vertexUv2s=u.has(2),Yt.vertexUv3s=u.has(3),u.clear(),Yt}function p(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)M.push(P),M.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(y(M,v),S(M,v),M.push(e.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function y(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function S(v,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),v.push(o.mask)}function x(v){let M=g[v.type],P;if(M){let L=Ws[M];P=XC.clone(L.uniforms)}else P=v.uniforms;return P}function E(v,M){let P;for(let L=0,Y=c.length;L<Y;L++){let V=c[L];if(V.cacheKey===M){P=V,++P.usedTimes;break}}return P===void 0&&(P=new V4(e,M,v,s),c.push(P)),P}function R(v){if(--v.usedTimes===0){let M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:E,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:C}}function X4(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function i(a){e.delete(a)}function r(a,o,l){e.get(a)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:r,dispose:s}}function W4(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function h3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function d3(){let e=[],t=0,n=[],i=[],r=[];function s(){t=0,n.length=0,i.length=0,r.length=0}function a(d,f,h,g,_,m){let p=e[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},e[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function o(d,f,h,g,_,m){let p=a(d,f,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(d,f,h,g,_,m){let p=a(d,f,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function u(d,f){n.length>1&&n.sort(d||W4),i.length>1&&i.sort(f||h3),r.length>1&&r.sort(f||h3)}function c(){for(let d=t,f=e.length;d<f;d++){let h=e[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function Y4(){let e=new WeakMap;function t(i,r){let s=e.get(i),a;return s===void 0?(a=new d3,e.set(i,[a])):r>=s.length?(a=new d3,s.push(a)):a=s[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function q4(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new q,color:new Ue};break;case"SpotLight":n={position:new q,direction:new q,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":n={color:new Ue,position:new q,halfWidth:new q,halfHeight:new q};break}return e[t.id]=n,n}}}function Z4(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var J4=0;function K4(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Q4(e){let t=new q4,n=Z4(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new q);let r=new q,s=new bn,a=new bn;function o(u){let c=0,d=0,f=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,y=0,S=0,x=0,E=0,R=0,A=0;u.sort(K4);for(let v=0,M=u.length;v<M;v++){let P=u[v],L=P.color,Y=P.intensity,V=P.distance,w=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=L.r*Y,d+=L.g*Y,f+=L.b*Y;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],Y);A++}else if(P.isDirectionalLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let tt=P.shadow,I=n.get(P);I.shadowIntensity=tt.intensity,I.shadowBias=tt.bias,I.shadowNormalBias=tt.normalBias,I.shadowRadius=tt.radius,I.shadowMapSize=tt.mapSize,i.directionalShadow[h]=I,i.directionalShadowMap[h]=w,i.directionalShadowMatrix[h]=P.shadow.matrix,y++}i.directional[h]=Z,h++}else if(P.isSpotLight){let Z=t.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(L).multiplyScalar(Y),Z.distance=V,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[_]=Z;let tt=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,tt.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[_]=tt.matrix,P.castShadow){let I=n.get(P);I.shadowIntensity=tt.intensity,I.shadowBias=tt.bias,I.shadowNormalBias=tt.normalBias,I.shadowRadius=tt.radius,I.shadowMapSize=tt.mapSize,i.spotShadow[_]=I,i.spotShadowMap[_]=w,x++}_++}else if(P.isRectAreaLight){let Z=t.get(P);Z.color.copy(L).multiplyScalar(Y),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Z,m++}else if(P.isPointLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){let tt=P.shadow,I=n.get(P);I.shadowIntensity=tt.intensity,I.shadowBias=tt.bias,I.shadowNormalBias=tt.normalBias,I.shadowRadius=tt.radius,I.shadowMapSize=tt.mapSize,I.shadowCameraNear=tt.camera.near,I.shadowCameraFar=tt.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=w,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=Z,g++}else if(P.isHemisphereLight){let Z=t.get(P);Z.skyColor.copy(P.color).multiplyScalar(Y),Z.groundColor.copy(P.groundColor).multiplyScalar(Y),i.hemi[p]=Z,p++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Wt.LTC_FLOAT_1,i.rectAreaLTC2=Wt.LTC_FLOAT_2):(i.rectAreaLTC1=Wt.LTC_HALF_1,i.rectAreaLTC2=Wt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;let C=i.hash;(C.directionalLength!==h||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==S||C.numSpotShadows!==x||C.numSpotMaps!==E||C.numLightProbes!==A)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+E-R,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,C.directionalLength=h,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=S,C.numSpotShadows=x,C.numSpotMaps=E,C.numLightProbes=A,i.version=J4++)}function l(u,c){let d=0,f=0,h=0,g=0,_=0,m=c.matrixWorldInverse;for(let p=0,y=u.length;p<y;p++){let S=u[p];if(S.isDirectionalLight){let x=i.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(S.isSpotLight){let x=i.spot[h];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(S.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let x=i.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function p3(e){let t=new Q4(e),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function a(c){i.push(c)}function o(){t.setup(n)}function l(c){t.setupView(n,c)}let u={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function j4(e){let t=new WeakMap;function n(r,s=0){let a=t.get(r),o;return a===void 0?(o=new p3(e),t.set(r,[o])):s>=a.length?(o=new p3(e),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var $4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t5=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function e5(e,t,n){let i=new jh,r=new ue,s=new ue,a=new on,o=new X0({depthPacking:UC}),l=new W0,u={},c=n.maxTextureSize,d={[Aa]:Ii,[Ii]:Aa,[ks]:ks},f=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:$4,fragmentShader:t5}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new tr;g.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ii(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uS;let p=this.type;this.render=function(R,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let v=e.getRenderTarget(),M=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),L=e.state;L.setBlending(ds),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let Y=p!==Gs&&this.type===Gs,V=p===Gs&&this.type!==Gs;for(let w=0,Z=R.length;w<Z;w++){let tt=R[w],I=tt.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);let ct=I.getFrameExtents();if(r.multiply(ct),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ct.x),r.x=s.x*ct.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ct.y),r.y=s.y*ct.y,I.mapSize.y=s.y)),I.map===null||Y===!0||V===!0){let ht=this.type!==Gs?{minFilter:qr,magFilter:qr}:{};I.map!==null&&I.map.dispose(),I.map=new Zr(r.x,r.y,ht),I.map.texture.name=tt.name+".shadowMap",I.camera.updateProjectionMatrix()}e.setRenderTarget(I.map),e.clear();let N=I.getViewportCount();for(let ht=0;ht<N;ht++){let St=I.getViewport(ht);a.set(s.x*St.x,s.y*St.y,s.x*St.z,s.y*St.w),L.viewport(a),I.updateMatrices(tt,ht),i=I.getFrustum(),x(A,C,I.camera,tt,this.type)}I.isPointLightShadow!==!0&&this.type===Gs&&y(I,C),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,e.setRenderTarget(v,M,P)};function y(R,A){let C=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Zr(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(A,null,C,f,_,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(A,null,C,h,_,null)}function S(R,A,C,v){let M=null,P=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=M.uuid,Y=A.uuid,V=u[L];V===void 0&&(V={},u[L]=V);let w=V[Y];w===void 0&&(w=M.clone(),V[Y]=w,A.addEventListener("dispose",E)),M=w}if(M.visible=A.visible,M.wireframe=A.wireframe,v===Gs?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let L=e.properties.get(M);L.light=C}return M}function x(R,A,C,v,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Gs)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);let Y=t.update(R),V=R.material;if(Array.isArray(V)){let w=Y.groups;for(let Z=0,tt=w.length;Z<tt;Z++){let I=w[Z],ct=V[I.materialIndex];if(ct&&ct.visible){let N=S(R,ct,v,M);R.onBeforeShadow(e,R,A,C,Y,N,I),e.renderBufferDirect(C,null,Y,N,R,I),R.onAfterShadow(e,R,A,C,Y,N,I)}}}else if(V.visible){let w=S(R,V,v,M);R.onBeforeShadow(e,R,A,C,Y,w,null),e.renderBufferDirect(C,null,Y,w,R,null),R.onAfterShadow(e,R,A,C,Y,w,null)}}let L=R.children;for(let Y=0,V=L.length;Y<V;Y++)x(L[Y],A,C,v,M)}function E(R){R.target.removeEventListener("dispose",E);for(let C in u){let v=u[C],M=R.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}var n5={[ig]:rg,[sg]:lg,[ag]:ug,[Hl]:og,[rg]:ig,[lg]:sg,[ug]:ag,[og]:Hl};function i5(e,t){function n(){let O=!1,et=new on,ut=null,dt=new on(0,0,0,0);return{setMask:function(at){ut!==at&&!O&&(e.colorMask(at,at,at,at),ut=at)},setLocked:function(at){O=at},setClear:function(at,rt,gt,lt,Yt){Yt===!0&&(at*=lt,rt*=lt,gt*=lt),et.set(at,rt,gt,lt),dt.equals(et)===!1&&(e.clearColor(at,rt,gt,lt),dt.copy(et))},reset:function(){O=!1,ut=null,dt.set(-1,0,0,0)}}}function i(){let O=!1,et=!1,ut=null,dt=null,at=null;return{setReversed:function(rt){if(et!==rt){let gt=t.get("EXT_clip_control");rt?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),et=rt;let lt=at;at=null,this.setClear(lt)}},getReversed:function(){return et},setTest:function(rt){rt?ot(e.DEPTH_TEST):wt(e.DEPTH_TEST)},setMask:function(rt){ut!==rt&&!O&&(e.depthMask(rt),ut=rt)},setFunc:function(rt){if(et&&(rt=n5[rt]),dt!==rt){switch(rt){case ig:e.depthFunc(e.NEVER);break;case rg:e.depthFunc(e.ALWAYS);break;case sg:e.depthFunc(e.LESS);break;case Hl:e.depthFunc(e.LEQUAL);break;case ag:e.depthFunc(e.EQUAL);break;case og:e.depthFunc(e.GEQUAL);break;case lg:e.depthFunc(e.GREATER);break;case ug:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}dt=rt}},setLocked:function(rt){O=rt},setClear:function(rt){at!==rt&&(et&&(rt=1-rt),e.clearDepth(rt),at=rt)},reset:function(){O=!1,ut=null,dt=null,at=null,et=!1}}}function r(){let O=!1,et=null,ut=null,dt=null,at=null,rt=null,gt=null,lt=null,Yt=null;return{setTest:function(Tt){O||(Tt?ot(e.STENCIL_TEST):wt(e.STENCIL_TEST))},setMask:function(Tt){et!==Tt&&!O&&(e.stencilMask(Tt),et=Tt)},setFunc:function(Tt,st,yt){(ut!==Tt||dt!==st||at!==yt)&&(e.stencilFunc(Tt,st,yt),ut=Tt,dt=st,at=yt)},setOp:function(Tt,st,yt){(rt!==Tt||gt!==st||lt!==yt)&&(e.stencilOp(Tt,st,yt),rt=Tt,gt=st,lt=yt)},setLocked:function(Tt){O=Tt},setClear:function(Tt){Yt!==Tt&&(e.clearStencil(Tt),Yt=Tt)},reset:function(){O=!1,et=null,ut=null,dt=null,at=null,rt=null,gt=null,lt=null,Yt=null}}}let s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap,c={},d={},f=new WeakMap,h=[],g=null,_=!1,m=null,p=null,y=null,S=null,x=null,E=null,R=null,A=new Ue(0,0,0),C=0,v=!1,M=null,P=null,L=null,Y=null,V=null,w=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,tt=0,I=e.getParameter(e.VERSION);I.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(I)[1]),Z=tt>=1):I.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),Z=tt>=2);let ct=null,N={},ht=e.getParameter(e.SCISSOR_BOX),St=e.getParameter(e.VIEWPORT),W=new on().fromArray(ht),Rt=new on().fromArray(St);function xt(O,et,ut,dt){let at=new Uint8Array(4),rt=e.createTexture();e.bindTexture(O,rt),e.texParameteri(O,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(O,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let gt=0;gt<ut;gt++)O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY?e.texImage3D(et,0,e.RGBA,1,1,dt,0,e.RGBA,e.UNSIGNED_BYTE,at):e.texImage2D(et+gt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,at);return rt}let nt={};nt[e.TEXTURE_2D]=xt(e.TEXTURE_2D,e.TEXTURE_2D,1),nt[e.TEXTURE_CUBE_MAP]=xt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[e.TEXTURE_2D_ARRAY]=xt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),nt[e.TEXTURE_3D]=xt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(e.DEPTH_TEST),a.setFunc(Hl),Mt(!1),z(lS),ot(e.CULL_FACE),Ft(ds);function ot(O){c[O]!==!0&&(e.enable(O),c[O]=!0)}function wt(O){c[O]!==!1&&(e.disable(O),c[O]=!1)}function Bt(O,et){return d[O]!==et?(e.bindFramebuffer(O,et),d[O]=et,O===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=et),O===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=et),!0):!1}function zt(O,et){let ut=h,dt=!1;if(O){ut=f.get(et),ut===void 0&&(ut=[],f.set(et,ut));let at=O.textures;if(ut.length!==at.length||ut[0]!==e.COLOR_ATTACHMENT0){for(let rt=0,gt=at.length;rt<gt;rt++)ut[rt]=e.COLOR_ATTACHMENT0+rt;ut.length=at.length,dt=!0}}else ut[0]!==e.BACK&&(ut[0]=e.BACK,dt=!0);dt&&e.drawBuffers(ut)}function Xt(O){return g!==O?(e.useProgram(O),g=O,!0):!1}let Vt={[Oo]:e.FUNC_ADD,[sC]:e.FUNC_SUBTRACT,[aC]:e.FUNC_REVERSE_SUBTRACT};Vt[oC]=e.MIN,Vt[lC]=e.MAX;let U={[ng]:e.ZERO,[ps]:e.ONE,[uC]:e.SRC_COLOR,[b0]:e.SRC_ALPHA,[mC]:e.SRC_ALPHA_SATURATE,[dC]:e.DST_COLOR,[fC]:e.DST_ALPHA,[cC]:e.ONE_MINUS_SRC_COLOR,[zl]:e.ONE_MINUS_SRC_ALPHA,[pC]:e.ONE_MINUS_DST_COLOR,[hC]:e.ONE_MINUS_DST_ALPHA,[gC]:e.CONSTANT_COLOR,[_C]:e.ONE_MINUS_CONSTANT_COLOR,[vC]:e.CONSTANT_ALPHA,[yC]:e.ONE_MINUS_CONSTANT_ALPHA};function Ft(O,et,ut,dt,at,rt,gt,lt,Yt,Tt){if(O===ds){_===!0&&(wt(e.BLEND),_=!1);return}if(_===!1&&(ot(e.BLEND),_=!0),O!==ud){if(O!==m||Tt!==v){if((p!==Oo||x!==Oo)&&(e.blendEquation(e.FUNC_ADD),p=Oo,x=Oo),Tt)switch(O){case wa:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ld:e.blendFunc(e.ONE,e.ONE);break;case cS:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case fS:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case wa:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ld:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case cS:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fS:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,S=null,E=null,R=null,A.set(0,0,0),C=0,m=O,v=Tt}return}at=at||et,rt=rt||ut,gt=gt||dt,(et!==p||at!==x)&&(e.blendEquationSeparate(Vt[et],Vt[at]),p=et,x=at),(ut!==y||dt!==S||rt!==E||gt!==R)&&(e.blendFuncSeparate(U[ut],U[dt],U[rt],U[gt]),y=ut,S=dt,E=rt,R=gt),(lt.equals(A)===!1||Yt!==C)&&(e.blendColor(lt.r,lt.g,lt.b,Yt),A.copy(lt),C=Yt),m=O,v=!1}function Et(O,et){O.side===ks?wt(e.CULL_FACE):ot(e.CULL_FACE);let ut=O.side===Ii;et&&(ut=!ut),Mt(ut),O.blending===wa&&O.transparent===!1?Ft(ds):Ft(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);let dt=O.stencilWrite;o.setTest(dt),dt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Nt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ot(e.SAMPLE_ALPHA_TO_COVERAGE):wt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(O){M!==O&&(O?e.frontFace(e.CW):e.frontFace(e.CCW),M=O)}function z(O){O!==nC?(ot(e.CULL_FACE),O!==P&&(O===lS?e.cullFace(e.BACK):O===iC?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):wt(e.CULL_FACE),P=O}function Qt(O){O!==L&&(Z&&e.lineWidth(O),L=O)}function Nt(O,et,ut){O?(ot(e.POLYGON_OFFSET_FILL),(Y!==et||V!==ut)&&(e.polygonOffset(et,ut),Y=et,V=ut)):wt(e.POLYGON_OFFSET_FILL)}function It(O){O?ot(e.SCISSOR_TEST):wt(e.SCISSOR_TEST)}function ie(O){O===void 0&&(O=e.TEXTURE0+w-1),ct!==O&&(e.activeTexture(O),ct=O)}function Gt(O,et,ut){ut===void 0&&(ct===null?ut=e.TEXTURE0+w-1:ut=ct);let dt=N[ut];dt===void 0&&(dt={type:void 0,texture:void 0},N[ut]=dt),(dt.type!==O||dt.texture!==et)&&(ct!==ut&&(e.activeTexture(ut),ct=ut),e.bindTexture(O,et||nt[O]),dt.type=O,dt.texture=et)}function D(){let O=N[ct];O!==void 0&&O.type!==void 0&&(e.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function T(){try{e.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function B(){try{e.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{e.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{e.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{e.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ot(){try{e.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(){try{e.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ht(){try{e.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{e.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{e.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(O){W.equals(O)===!1&&(e.scissor(O.x,O.y,O.z,O.w),W.copy(O))}function k(O){Rt.equals(O)===!1&&(e.viewport(O.x,O.y,O.z,O.w),Rt.copy(O))}function H(O,et){let ut=u.get(et);ut===void 0&&(ut=new WeakMap,u.set(et,ut));let dt=ut.get(O);dt===void 0&&(dt=e.getUniformBlockIndex(et,O.name),ut.set(O,dt))}function G(O,et){let dt=u.get(et).get(O);l.get(et)!==dt&&(e.uniformBlockBinding(et,dt,O.__bindingPointIndex),l.set(et,dt))}function it(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},ct=null,N={},d={},f=new WeakMap,h=[],g=null,_=!1,m=null,p=null,y=null,S=null,x=null,E=null,R=null,A=new Ue(0,0,0),C=0,v=!1,M=null,P=null,L=null,Y=null,V=null,W.set(0,0,e.canvas.width,e.canvas.height),Rt.set(0,0,e.canvas.width,e.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ot,disable:wt,bindFramebuffer:Bt,drawBuffers:zt,useProgram:Xt,setBlending:Ft,setMaterial:Et,setFlipSided:Mt,setCullFace:z,setLineWidth:Qt,setPolygonOffset:Nt,setScissorTest:It,activeTexture:ie,bindTexture:Gt,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:B,texImage2D:Dt,texImage3D:bt,updateUBOMapping:H,uniformBlockBinding:G,texStorage2D:pt,texStorage3D:Ht,texSubImage2D:J,texSubImage3D:Q,compressedTexSubImage2D:$,compressedTexSubImage3D:Ot,scissor:mt,viewport:k,reset:it}}function r5(e,t,n,i,r,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ue,c=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,T){return h?new OffscreenCanvas(D,T):kh("canvas")}function _(D,T,B){let J=1,Q=Gt(D);if((Q.width>B||Q.height>B)&&(J=B/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let $=Math.floor(J*Q.width),Ot=Math.floor(J*Q.height);d===void 0&&(d=g($,Ot));let pt=T?g($,Ot):d;return pt.width=$,pt.height=Ot,pt.getContext("2d").drawImage(D,0,0,$,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+Ot+")."),pt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){e.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?e.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(D,T,B,J,Q=!1){if(D!==null){if(e[D]!==void 0)return e[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let $=T;if(T===e.RED&&(B===e.FLOAT&&($=e.R32F),B===e.HALF_FLOAT&&($=e.R16F),B===e.UNSIGNED_BYTE&&($=e.R8)),T===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&($=e.R8UI),B===e.UNSIGNED_SHORT&&($=e.R16UI),B===e.UNSIGNED_INT&&($=e.R32UI),B===e.BYTE&&($=e.R8I),B===e.SHORT&&($=e.R16I),B===e.INT&&($=e.R32I)),T===e.RG&&(B===e.FLOAT&&($=e.RG32F),B===e.HALF_FLOAT&&($=e.RG16F),B===e.UNSIGNED_BYTE&&($=e.RG8)),T===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&($=e.RG8UI),B===e.UNSIGNED_SHORT&&($=e.RG16UI),B===e.UNSIGNED_INT&&($=e.RG32UI),B===e.BYTE&&($=e.RG8I),B===e.SHORT&&($=e.RG16I),B===e.INT&&($=e.RG32I)),T===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&($=e.RGB8UI),B===e.UNSIGNED_SHORT&&($=e.RGB16UI),B===e.UNSIGNED_INT&&($=e.RGB32UI),B===e.BYTE&&($=e.RGB8I),B===e.SHORT&&($=e.RGB16I),B===e.INT&&($=e.RGB32I)),T===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&($=e.RGBA8UI),B===e.UNSIGNED_SHORT&&($=e.RGBA16UI),B===e.UNSIGNED_INT&&($=e.RGBA32UI),B===e.BYTE&&($=e.RGBA8I),B===e.SHORT&&($=e.RGBA16I),B===e.INT&&($=e.RGBA32I)),T===e.RGB&&(B===e.UNSIGNED_INT_5_9_9_9_REV&&($=e.RGB9_E5),B===e.UNSIGNED_INT_10F_11F_11F_REV&&($=e.R11F_G11F_B10F)),T===e.RGBA){let Ot=Q?Vh:Oe.getTransfer(J);B===e.FLOAT&&($=e.RGBA32F),B===e.HALF_FLOAT&&($=e.RGBA16F),B===e.UNSIGNED_BYTE&&($=Ot===We?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT_4_4_4_4&&($=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&($=e.RGB5_A1)}return($===e.R16F||$===e.R32F||$===e.RG16F||$===e.RG32F||$===e.RGBA16F||$===e.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(D,T){let B;return D?T===null||T===zo||T===zc?B=e.DEPTH24_STENCIL8:T===Xs?B=e.DEPTH32F_STENCIL8:T===Fc&&(B=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===zo||T===zc?B=e.DEPTH_COMPONENT24:T===Xs?B=e.DEPTH_COMPONENT32F:T===Fc&&(B=e.DEPTH_COMPONENT16),B}function E(D,T){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==qr&&D.minFilter!==fs?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function R(D){let T=D.target;T.removeEventListener("dispose",R),C(T),T.isVideoTexture&&c.delete(T)}function A(D){let T=D.target;T.removeEventListener("dispose",A),M(T)}function C(D){let T=i.get(D);if(T.__webglInit===void 0)return;let B=D.source,J=f.get(B);if(J){let Q=J[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(D),Object.keys(J).length===0&&f.delete(B)}i.remove(D)}function v(D){let T=i.get(D);e.deleteTexture(T.__webglTexture);let B=D.source,J=f.get(B);delete J[T.__cacheKey],a.memory.textures--}function M(D){let T=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let Q=0;Q<T.__webglFramebuffer[J].length;Q++)e.deleteFramebuffer(T.__webglFramebuffer[J][Q]);else e.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)e.deleteFramebuffer(T.__webglFramebuffer[J]);else e.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&e.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&e.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&e.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let B=D.textures;for(let J=0,Q=B.length;J<Q;J++){let $=i.get(B[J]);$.__webglTexture&&(e.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(B[J])}i.remove(D)}let P=0;function L(){P=0}function Y(){let D=P;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),P+=1,D}function V(D){let T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function w(D,T){let B=i.get(D);if(D.isVideoTexture&&It(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&B.__version!==D.version){let J=D.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(B,D,T);return}}else D.isExternalTexture&&(B.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+T)}function Z(D,T){let B=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&B.__version!==D.version){nt(B,D,T);return}n.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+T)}function tt(D,T){let B=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&B.__version!==D.version){nt(B,D,T);return}n.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+T)}function I(D,T){let B=i.get(D);if(D.version>0&&B.__version!==D.version){ot(B,D,T);return}n.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+T)}let ct={[T0]:e.REPEAT,[Uo]:e.CLAMP_TO_EDGE,[E0]:e.MIRRORED_REPEAT},N={[qr]:e.NEAREST,[CC]:e.NEAREST_MIPMAP_NEAREST,[fd]:e.NEAREST_MIPMAP_LINEAR,[fs]:e.LINEAR,[hg]:e.LINEAR_MIPMAP_NEAREST,[Fo]:e.LINEAR_MIPMAP_LINEAR},ht={[NC]:e.NEVER,[HC]:e.ALWAYS,[PC]:e.LESS,[MS]:e.LEQUAL,[IC]:e.EQUAL,[zC]:e.GEQUAL,[BC]:e.GREATER,[FC]:e.NOTEQUAL};function St(D,T){if(T.type===Xs&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===fs||T.magFilter===hg||T.magFilter===fd||T.magFilter===Fo||T.minFilter===fs||T.minFilter===hg||T.minFilter===fd||T.minFilter===Fo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(D,e.TEXTURE_WRAP_S,ct[T.wrapS]),e.texParameteri(D,e.TEXTURE_WRAP_T,ct[T.wrapT]),(D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY)&&e.texParameteri(D,e.TEXTURE_WRAP_R,ct[T.wrapR]),e.texParameteri(D,e.TEXTURE_MAG_FILTER,N[T.magFilter]),e.texParameteri(D,e.TEXTURE_MIN_FILTER,N[T.minFilter]),T.compareFunction&&(e.texParameteri(D,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(D,e.TEXTURE_COMPARE_FUNC,ht[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===qr||T.minFilter!==fd&&T.minFilter!==Fo||T.type===Xs&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");e.texParameterf(D,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function W(D,T){let B=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",R));let J=T.source,Q=f.get(J);Q===void 0&&(Q={},f.set(J,Q));let $=V(T);if($!==D.__cacheKey){Q[$]===void 0&&(Q[$]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[$].usedTimes++;let Ot=Q[D.__cacheKey];Ot!==void 0&&(Q[D.__cacheKey].usedTimes--,Ot.usedTimes===0&&v(T)),D.__cacheKey=$,D.__webglTexture=Q[$].texture}return B}function Rt(D,T,B){return Math.floor(Math.floor(D/B)/T)}function xt(D,T,B,J){let $=D.updateRanges;if($.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,T.width,T.height,B,J,T.data);else{$.sort((bt,mt)=>bt.start-mt.start);let Ot=0;for(let bt=1;bt<$.length;bt++){let mt=$[Ot],k=$[bt],H=mt.start+mt.count,G=Rt(k.start,T.width,4),it=Rt(mt.start,T.width,4);k.start<=H+1&&G===it&&Rt(k.start+k.count-1,T.width,4)===G?mt.count=Math.max(mt.count,k.start+k.count-mt.start):(++Ot,$[Ot]=k)}$.length=Ot+1;let pt=e.getParameter(e.UNPACK_ROW_LENGTH),Ht=e.getParameter(e.UNPACK_SKIP_PIXELS),Dt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,T.width);for(let bt=0,mt=$.length;bt<mt;bt++){let k=$[bt],H=Math.floor(k.start/4),G=Math.ceil(k.count/4),it=H%T.width,O=Math.floor(H/T.width),et=G,ut=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,it),e.pixelStorei(e.UNPACK_SKIP_ROWS,O),n.texSubImage2D(e.TEXTURE_2D,0,it,O,et,ut,B,J,T.data)}D.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,pt),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ht),e.pixelStorei(e.UNPACK_SKIP_ROWS,Dt)}}function nt(D,T,B){let J=e.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=e.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=e.TEXTURE_3D);let Q=W(D,T),$=T.source;n.bindTexture(J,D.__webglTexture,e.TEXTURE0+B);let Ot=i.get($);if($.version!==Ot.__version||Q===!0){n.activeTexture(e.TEXTURE0+B);let pt=Oe.getPrimaries(Oe.workingColorSpace),Ht=T.colorSpace===Ua?null:Oe.getPrimaries(T.colorSpace),Dt=T.colorSpace===Ua||pt===Ht?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let bt=_(T.image,!1,r.maxTextureSize);bt=ie(T,bt);let mt=s.convert(T.format,T.colorSpace),k=s.convert(T.type),H=S(T.internalFormat,mt,k,T.colorSpace,T.isVideoTexture);St(J,T);let G,it=T.mipmaps,O=T.isVideoTexture!==!0,et=Ot.__version===void 0||Q===!0,ut=$.dataReady,dt=E(T,bt);if(T.isDepthTexture)H=x(T.format===Hc,T.type),et&&(O?n.texStorage2D(e.TEXTURE_2D,1,H,bt.width,bt.height):n.texImage2D(e.TEXTURE_2D,0,H,bt.width,bt.height,0,mt,k,null));else if(T.isDataTexture)if(it.length>0){O&&et&&n.texStorage2D(e.TEXTURE_2D,dt,H,it[0].width,it[0].height);for(let at=0,rt=it.length;at<rt;at++)G=it[at],O?ut&&n.texSubImage2D(e.TEXTURE_2D,at,0,0,G.width,G.height,mt,k,G.data):n.texImage2D(e.TEXTURE_2D,at,H,G.width,G.height,0,mt,k,G.data);T.generateMipmaps=!1}else O?(et&&n.texStorage2D(e.TEXTURE_2D,dt,H,bt.width,bt.height),ut&&xt(T,bt,mt,k)):n.texImage2D(e.TEXTURE_2D,0,H,bt.width,bt.height,0,mt,k,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){O&&et&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,H,it[0].width,it[0].height,bt.depth);for(let at=0,rt=it.length;at<rt;at++)if(G=it[at],T.format!==Qr)if(mt!==null)if(O){if(ut)if(T.layerUpdates.size>0){let gt=CS(G.width,G.height,T.format,T.type);for(let lt of T.layerUpdates){let Yt=G.data.subarray(lt*gt/G.data.BYTES_PER_ELEMENT,(lt+1)*gt/G.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,at,0,0,lt,G.width,G.height,1,mt,Yt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,at,0,0,0,G.width,G.height,bt.depth,mt,G.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,at,H,G.width,G.height,bt.depth,0,G.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ut&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,at,0,0,0,G.width,G.height,bt.depth,mt,k,G.data):n.texImage3D(e.TEXTURE_2D_ARRAY,at,H,G.width,G.height,bt.depth,0,mt,k,G.data)}else{O&&et&&n.texStorage2D(e.TEXTURE_2D,dt,H,it[0].width,it[0].height);for(let at=0,rt=it.length;at<rt;at++)G=it[at],T.format!==Qr?mt!==null?O?ut&&n.compressedTexSubImage2D(e.TEXTURE_2D,at,0,0,G.width,G.height,mt,G.data):n.compressedTexImage2D(e.TEXTURE_2D,at,H,G.width,G.height,0,G.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ut&&n.texSubImage2D(e.TEXTURE_2D,at,0,0,G.width,G.height,mt,k,G.data):n.texImage2D(e.TEXTURE_2D,at,H,G.width,G.height,0,mt,k,G.data)}else if(T.isDataArrayTexture)if(O){if(et&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,H,bt.width,bt.height,bt.depth),ut)if(T.layerUpdates.size>0){let at=CS(bt.width,bt.height,T.format,T.type);for(let rt of T.layerUpdates){let gt=bt.data.subarray(rt*at/bt.data.BYTES_PER_ELEMENT,(rt+1)*at/bt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,rt,bt.width,bt.height,1,mt,k,gt)}T.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,mt,k,bt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,H,bt.width,bt.height,bt.depth,0,mt,k,bt.data);else if(T.isData3DTexture)O?(et&&n.texStorage3D(e.TEXTURE_3D,dt,H,bt.width,bt.height,bt.depth),ut&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,mt,k,bt.data)):n.texImage3D(e.TEXTURE_3D,0,H,bt.width,bt.height,bt.depth,0,mt,k,bt.data);else if(T.isFramebufferTexture){if(et)if(O)n.texStorage2D(e.TEXTURE_2D,dt,H,bt.width,bt.height);else{let at=bt.width,rt=bt.height;for(let gt=0;gt<dt;gt++)n.texImage2D(e.TEXTURE_2D,gt,H,at,rt,0,mt,k,null),at>>=1,rt>>=1}}else if(it.length>0){if(O&&et){let at=Gt(it[0]);n.texStorage2D(e.TEXTURE_2D,dt,H,at.width,at.height)}for(let at=0,rt=it.length;at<rt;at++)G=it[at],O?ut&&n.texSubImage2D(e.TEXTURE_2D,at,0,0,mt,k,G):n.texImage2D(e.TEXTURE_2D,at,H,mt,k,G);T.generateMipmaps=!1}else if(O){if(et){let at=Gt(bt);n.texStorage2D(e.TEXTURE_2D,dt,H,at.width,at.height)}ut&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,mt,k,bt)}else n.texImage2D(e.TEXTURE_2D,0,H,mt,k,bt);m(T)&&p(J),Ot.__version=$.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ot(D,T,B){if(T.image.length!==6)return;let J=W(D,T),Q=T.source;n.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture,e.TEXTURE0+B);let $=i.get(Q);if(Q.version!==$.__version||J===!0){n.activeTexture(e.TEXTURE0+B);let Ot=Oe.getPrimaries(Oe.workingColorSpace),pt=T.colorSpace===Ua?null:Oe.getPrimaries(T.colorSpace),Ht=T.colorSpace===Ua||Ot===pt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let Dt=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,mt=[];for(let rt=0;rt<6;rt++)!Dt&&!bt?mt[rt]=_(T.image[rt],!0,r.maxCubemapSize):mt[rt]=bt?T.image[rt].image:T.image[rt],mt[rt]=ie(T,mt[rt]);let k=mt[0],H=s.convert(T.format,T.colorSpace),G=s.convert(T.type),it=S(T.internalFormat,H,G,T.colorSpace),O=T.isVideoTexture!==!0,et=$.__version===void 0||J===!0,ut=Q.dataReady,dt=E(T,k);St(e.TEXTURE_CUBE_MAP,T);let at;if(Dt){O&&et&&n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,it,k.width,k.height);for(let rt=0;rt<6;rt++){at=mt[rt].mipmaps;for(let gt=0;gt<at.length;gt++){let lt=at[gt];T.format!==Qr?H!==null?O?ut&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt,0,0,lt.width,lt.height,H,lt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt,it,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ut&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt,0,0,lt.width,lt.height,H,G,lt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt,it,lt.width,lt.height,0,H,G,lt.data)}}}else{if(at=T.mipmaps,O&&et){at.length>0&&dt++;let rt=Gt(mt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,it,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(bt){O?ut&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,mt[rt].width,mt[rt].height,H,G,mt[rt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,it,mt[rt].width,mt[rt].height,0,H,G,mt[rt].data);for(let gt=0;gt<at.length;gt++){let Yt=at[gt].image[rt].image;O?ut&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt+1,0,0,Yt.width,Yt.height,H,G,Yt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt+1,it,Yt.width,Yt.height,0,H,G,Yt.data)}}else{O?ut&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,H,G,mt[rt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,it,H,G,mt[rt]);for(let gt=0;gt<at.length;gt++){let lt=at[gt];O?ut&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt+1,0,0,H,G,lt.image[rt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,gt+1,it,H,G,lt.image[rt])}}}m(T)&&p(e.TEXTURE_CUBE_MAP),$.__version=Q.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function wt(D,T,B,J,Q,$){let Ot=s.convert(B.format,B.colorSpace),pt=s.convert(B.type),Ht=S(B.internalFormat,Ot,pt,B.colorSpace),Dt=i.get(T),bt=i.get(B);if(bt.__renderTarget=T,!Dt.__hasExternalTextures){let mt=Math.max(1,T.width>>$),k=Math.max(1,T.height>>$);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?n.texImage3D(Q,$,Ht,mt,k,T.depth,0,Ot,pt,null):n.texImage2D(Q,$,Ht,mt,k,0,Ot,pt,null)}n.bindFramebuffer(e.FRAMEBUFFER,D),Nt(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,Q,bt.__webglTexture,0,Qt(T)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,J,Q,bt.__webglTexture,$),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Bt(D,T,B){if(e.bindRenderbuffer(e.RENDERBUFFER,D),T.depthBuffer){let J=T.depthTexture,Q=J&&J.isDepthTexture?J.type:null,$=x(T.stencilBuffer,Q),Ot=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pt=Qt(T);Nt(T)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,pt,$,T.width,T.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,pt,$,T.width,T.height):e.renderbufferStorage(e.RENDERBUFFER,$,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Ot,e.RENDERBUFFER,D)}else{let J=T.textures;for(let Q=0;Q<J.length;Q++){let $=J[Q],Ot=s.convert($.format,$.colorSpace),pt=s.convert($.type),Ht=S($.internalFormat,Ot,pt,$.colorSpace),Dt=Qt(T);B&&Nt(T)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Dt,Ht,T.width,T.height):Nt(T)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Dt,Ht,T.width,T.height):e.renderbufferStorage(e.RENDERBUFFER,Ht,T.width,T.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function zt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(T.depthTexture);J.__renderTarget=T,(!J.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),w(T.depthTexture,0);let Q=J.__webglTexture,$=Qt(T);if(T.depthTexture.format===Dc)Nt(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0,$):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0);else if(T.depthTexture.format===Hc)Nt(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0,$):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Xt(D){let T=i.get(D),B=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){let J=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),J){let Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=J}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");let J=D.texture.mipmaps;J&&J.length>0?zt(T.__webglFramebuffer[0],D):zt(T.__webglFramebuffer,D)}else if(B){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]===void 0)T.__webglDepthbuffer[J]=e.createRenderbuffer(),Bt(T.__webglDepthbuffer[J],D,!1);else{let Q=D.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[J];e.bindRenderbuffer(e.RENDERBUFFER,$),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,$)}}else{let J=D.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=e.createRenderbuffer(),Bt(T.__webglDepthbuffer,D,!1);else{let Q=D.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,$),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,$)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Vt(D,T,B){let J=i.get(D);T!==void 0&&wt(J.__webglFramebuffer,D,D.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&Xt(D)}function U(D){let T=D.texture,B=i.get(D),J=i.get(T);D.addEventListener("dispose",A);let Q=D.textures,$=D.isWebGLCubeRenderTarget===!0,Ot=Q.length>1;if(Ot||(J.__webglTexture===void 0&&(J.__webglTexture=e.createTexture()),J.__version=T.version,a.memory.textures++),$){B.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[pt]=[];for(let Ht=0;Ht<T.mipmaps.length;Ht++)B.__webglFramebuffer[pt][Ht]=e.createFramebuffer()}else B.__webglFramebuffer[pt]=e.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let pt=0;pt<T.mipmaps.length;pt++)B.__webglFramebuffer[pt]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(Ot)for(let pt=0,Ht=Q.length;pt<Ht;pt++){let Dt=i.get(Q[pt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=e.createTexture(),a.memory.textures++)}if(D.samples>0&&Nt(D)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pt=0;pt<Q.length;pt++){let Ht=Q[pt];B.__webglColorRenderbuffer[pt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[pt]);let Dt=s.convert(Ht.format,Ht.colorSpace),bt=s.convert(Ht.type),mt=S(Ht.internalFormat,Dt,bt,Ht.colorSpace,D.isXRRenderTarget===!0),k=Qt(D);e.renderbufferStorageMultisample(e.RENDERBUFFER,k,mt,D.width,D.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+pt,e.RENDERBUFFER,B.__webglColorRenderbuffer[pt])}e.bindRenderbuffer(e.RENDERBUFFER,null),D.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),Bt(B.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if($){n.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture),St(e.TEXTURE_CUBE_MAP,T);for(let pt=0;pt<6;pt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ht=0;Ht<T.mipmaps.length;Ht++)wt(B.__webglFramebuffer[pt][Ht],D,T,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ht);else wt(B.__webglFramebuffer[pt],D,T,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(T)&&p(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ot){for(let pt=0,Ht=Q.length;pt<Ht;pt++){let Dt=Q[pt],bt=i.get(Dt),mt=e.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(mt=D.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(mt,bt.__webglTexture),St(mt,Dt),wt(B.__webglFramebuffer,D,Dt,e.COLOR_ATTACHMENT0+pt,mt,0),m(Dt)&&p(mt)}n.unbindTexture()}else{let pt=e.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(pt=D.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(pt,J.__webglTexture),St(pt,T),T.mipmaps&&T.mipmaps.length>0)for(let Ht=0;Ht<T.mipmaps.length;Ht++)wt(B.__webglFramebuffer[Ht],D,T,e.COLOR_ATTACHMENT0,pt,Ht);else wt(B.__webglFramebuffer,D,T,e.COLOR_ATTACHMENT0,pt,0);m(T)&&p(pt),n.unbindTexture()}D.depthBuffer&&Xt(D)}function Ft(D){let T=D.textures;for(let B=0,J=T.length;B<J;B++){let Q=T[B];if(m(Q)){let $=y(D),Ot=i.get(Q).__webglTexture;n.bindTexture($,Ot),p($),n.unbindTexture()}}}let Et=[],Mt=[];function z(D){if(D.samples>0){if(Nt(D)===!1){let T=D.textures,B=D.width,J=D.height,Q=e.COLOR_BUFFER_BIT,$=D.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ot=i.get(D),pt=T.length>1;if(pt)for(let Dt=0;Dt<T.length;Dt++)n.bindFramebuffer(e.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Ot.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);let Ht=D.texture.mipmaps;Ht&&Ht.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Dt=0;Dt<T.length;Dt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),pt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ot.__webglColorRenderbuffer[Dt]);let bt=i.get(T[Dt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,bt,0)}e.blitFramebuffer(0,0,B,J,0,0,B,J,Q,e.NEAREST),l===!0&&(Et.length=0,Mt.length=0,Et.push(e.COLOR_ATTACHMENT0+Dt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Et.push($),Mt.push($),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Mt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Et))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),pt)for(let Dt=0;Dt<T.length;Dt++){n.bindFramebuffer(e.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.RENDERBUFFER,Ot.__webglColorRenderbuffer[Dt]);let bt=i.get(T[Dt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Ot.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.TEXTURE_2D,bt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let T=D.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[T])}}}function Qt(D){return Math.min(r.maxSamples,D.samples)}function Nt(D){let T=i.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function It(D){let T=a.render.frame;c.get(D)!==T&&(c.set(D,T),D.update())}function ie(D,T){let B=D.colorSpace,J=D.format,Q=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||B!==Hs&&B!==Ua&&(Oe.getTransfer(B)===We?(J!==Qr||Q!==Kr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}function Gt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=Y,this.resetTextureUnits=L,this.setTexture2D=w,this.setTexture2DArray=Z,this.setTexture3D=tt,this.setTextureCube=I,this.rebindTextures=Vt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Nt}function s5(e,t){function n(i,r=Ua){let s,a=Oe.getTransfer(r);if(i===Kr)return e.UNSIGNED_BYTE;if(i===pg)return e.UNSIGNED_SHORT_4_4_4_4;if(i===mg)return e.UNSIGNED_SHORT_5_5_5_1;if(i===gS)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===_S)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===pS)return e.BYTE;if(i===mS)return e.SHORT;if(i===Fc)return e.UNSIGNED_SHORT;if(i===dg)return e.INT;if(i===zo)return e.UNSIGNED_INT;if(i===Xs)return e.FLOAT;if(i===Ho)return e.HALF_FLOAT;if(i===vS)return e.ALPHA;if(i===yS)return e.RGB;if(i===Qr)return e.RGBA;if(i===Dc)return e.DEPTH_COMPONENT;if(i===Hc)return e.DEPTH_STENCIL;if(i===xS)return e.RED;if(i===gg)return e.RED_INTEGER;if(i===SS)return e.RG;if(i===_g)return e.RG_INTEGER;if(i===vg)return e.RGBA_INTEGER;if(i===hd||i===dd||i===pd||i===md)if(a===We)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===hd)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===md)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===hd)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dd)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pd)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===md)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yg||i===xg||i===Sg||i===Mg)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yg)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xg)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sg)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mg)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bg||i===Tg||i===Eg)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===bg||i===Tg)return a===We?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Eg)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ag||i===wg||i===Rg||i===Cg||i===Dg||i===Ug||i===Og||i===Lg||i===Ng||i===Pg||i===Ig||i===Bg||i===Fg||i===zg)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ag)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wg)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rg)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cg)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dg)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ug)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Og)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lg)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ng)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pg)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ig)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bg)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fg)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zg)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hg||i===Vg||i===Gg)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Hg)return a===We?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vg)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gg)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kg||i===Xg||i===Wg||i===Yg)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===kg)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wg)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zc?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var a5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o5=`
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

}`,GS=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new ed(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new er({vertexShader:a5,fragmentShader:o5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ii(new Po(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kS=class extends Ra{constructor(t,n){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,d=null,f=null,h=null,g=null,_=typeof XRWebGLBinding<"u",m=new GS,p={},y=n.getContextAttributes(),S=null,x=null,E=[],R=[],A=new ue,C=null,v=new gi;v.viewport=new on;let M=new gi;M.viewport=new on;let P=[v,M],L=new eg,Y=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ot=E[nt];return ot===void 0&&(ot=new Nc,E[nt]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(nt){let ot=E[nt];return ot===void 0&&(ot=new Nc,E[nt]=ot),ot.getGripSpace()},this.getHand=function(nt){let ot=E[nt];return ot===void 0&&(ot=new Nc,E[nt]=ot),ot.getHandSpace()};function w(nt){let ot=R.indexOf(nt.inputSource);if(ot===-1)return;let wt=E[ot];wt!==void 0&&(wt.update(nt.inputSource,nt.frame,u||a),wt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function Z(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",tt);for(let nt=0;nt<E.length;nt++){let ot=R[nt];ot!==null&&(R[nt]=null,E[nt].disconnect(ot))}Y=null,V=null,m.reset();for(let nt in p)delete p[nt];t.setRenderTarget(S),h=null,f=null,d=null,r=null,x=null,xt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){s=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){o=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(nt){u=nt},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(nt){if(r=nt,r!==null){if(S=t.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",tt),y.xrCompatible!==!0&&await n.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Bt=null,zt=null;y.depth&&(zt=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,wt=y.stencil?Hc:Dc,Bt=y.stencil?zc:zo);let Xt={colorFormat:n.RGBA8,depthFormat:zt,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Xt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Zr(f.textureWidth,f.textureHeight,{format:Qr,type:Kr,depthTexture:new td(f.textureWidth,f.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let wt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,wt),r.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new Zr(h.framebufferWidth,h.framebufferHeight,{format:Qr,type:Kr,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),xt.setContext(r),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(nt){for(let ot=0;ot<nt.removed.length;ot++){let wt=nt.removed[ot],Bt=R.indexOf(wt);Bt>=0&&(R[Bt]=null,E[Bt].disconnect(wt))}for(let ot=0;ot<nt.added.length;ot++){let wt=nt.added[ot],Bt=R.indexOf(wt);if(Bt===-1){for(let Xt=0;Xt<E.length;Xt++)if(Xt>=R.length){R.push(wt),Bt=Xt;break}else if(R[Xt]===null){R[Xt]=wt,Bt=Xt;break}if(Bt===-1)break}let zt=E[Bt];zt&&zt.connect(wt)}}let I=new q,ct=new q;function N(nt,ot,wt){I.setFromMatrixPosition(ot.matrixWorld),ct.setFromMatrixPosition(wt.matrixWorld);let Bt=I.distanceTo(ct),zt=ot.projectionMatrix.elements,Xt=wt.projectionMatrix.elements,Vt=zt[14]/(zt[10]-1),U=zt[14]/(zt[10]+1),Ft=(zt[9]+1)/zt[5],Et=(zt[9]-1)/zt[5],Mt=(zt[8]-1)/zt[0],z=(Xt[8]+1)/Xt[0],Qt=Vt*Mt,Nt=Vt*z,It=Bt/(-Mt+z),ie=It*-Mt;if(ot.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(ie),nt.translateZ(It),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),zt[10]===-1)nt.projectionMatrix.copy(ot.projectionMatrix),nt.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let Gt=Vt+It,D=U+It,T=Qt-ie,B=Nt+(Bt-ie),J=Ft*U/D*Gt,Q=Et*U/D*Gt;nt.projectionMatrix.makePerspective(T,B,J,Q,Gt,D),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function ht(nt,ot){ot===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ot.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(r===null)return;let ot=nt.near,wt=nt.far;m.texture!==null&&(m.depthNear>0&&(ot=m.depthNear),m.depthFar>0&&(wt=m.depthFar)),L.near=M.near=v.near=ot,L.far=M.far=v.far=wt,(Y!==L.near||V!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),Y=L.near,V=L.far),L.layers.mask=nt.layers.mask|6,v.layers.mask=L.layers.mask&3,M.layers.mask=L.layers.mask&5;let Bt=nt.parent,zt=L.cameras;ht(L,Bt);for(let Xt=0;Xt<zt.length;Xt++)ht(zt[Xt],Bt);zt.length===2?N(L,v,M):L.projectionMatrix.copy(v.projectionMatrix),St(nt,L,Bt)};function St(nt,ot,wt){wt===null?nt.matrix.copy(ot.matrixWorld):(nt.matrix.copy(wt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ot.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ot.projectionMatrix),nt.projectionMatrixInverse.copy(ot.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=w0*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(nt){l=nt,f!==null&&(f.fixedFoveation=nt),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=nt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(nt){return p[nt]};let W=null;function Rt(nt,ot){if(c=ot.getViewerPose(u||a),g=ot,c!==null){let wt=c.views;h!==null&&(t.setRenderTargetFramebuffer(x,h.framebuffer),t.setRenderTarget(x));let Bt=!1;wt.length!==L.cameras.length&&(L.cameras.length=0,Bt=!0);for(let U=0;U<wt.length;U++){let Ft=wt[U],Et=null;if(h!==null)Et=h.getViewport(Ft);else{let z=d.getViewSubImage(f,Ft);Et=z.viewport,U===0&&(t.setRenderTargetTextures(x,z.colorTexture,z.depthStencilTexture),t.setRenderTarget(x))}let Mt=P[U];Mt===void 0&&(Mt=new gi,Mt.layers.enable(U),Mt.viewport=new on,P[U]=Mt),Mt.matrix.fromArray(Ft.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(Ft.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Et.x,Et.y,Et.width,Et.height),U===0&&(L.matrix.copy(Mt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Bt===!0&&L.cameras.push(Mt)}let zt=r.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let U=d.getDepthInformation(wt[0]);U&&U.isValid&&U.texture&&m.init(U,r.renderState)}if(zt&&zt.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let U=0;U<wt.length;U++){let Ft=wt[U].camera;if(Ft){let Et=p[Ft];Et||(Et=new ed,p[Ft]=Et);let Mt=d.getCameraImage(Ft);Et.sourceTexture=Mt}}}}for(let wt=0;wt<E.length;wt++){let Bt=R[wt],zt=E[wt];Bt!==null&&zt!==void 0&&zt.update(Bt,ot,u||a)}W&&W(nt,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),g=null}let xt=new m3;xt.setAnimationLoop(Rt),this.setAnimationLoop=function(nt){W=nt},this.dispose=function(){}}},ql=new Vs,l5=new bn;function u5(e,t){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ES(e)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ii&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ii&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),S=y.envMap,x=y.envMapRotation;S&&(m.envMap.value=S,ql.copy(x),ql.x*=-1,ql.y*=-1,ql.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ql.y*=-1,ql.z*=-1),m.envMapRotation.value.setFromMatrix4(l5.makeRotationFromEuler(ql)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ii&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function c5(e,t,n,i){let r={},s={},a=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let x=S.program;i.uniformBlockBinding(y,x)}function u(y,S){let x=r[y.id];x===void 0&&(g(y),x=c(y),r[y.id]=x,y.addEventListener("dispose",m));let E=S.program;i.updateUBOMapping(y,E);let R=t.render.frame;s[y.id]!==R&&(f(y),s[y.id]=R)}function c(y){let S=d();y.__bindingPointIndex=S;let x=e.createBuffer(),E=y.__size,R=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,E,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,S,x),x}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let S=r[y.id],x=y.uniforms,E=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,S);for(let R=0,A=x.length;R<A;R++){let C=Array.isArray(x[R])?x[R]:[x[R]];for(let v=0,M=C.length;v<M;v++){let P=C[v];if(h(P,R,v,E)===!0){let L=P.__offset,Y=Array.isArray(P.value)?P.value:[P.value],V=0;for(let w=0;w<Y.length;w++){let Z=Y[w],tt=_(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,e.bufferSubData(e.UNIFORM_BUFFER,L+V,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,V),V+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,L,P.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(y,S,x,E){let R=y.value,A=S+"_"+x;if(E[A]===void 0)return typeof R=="number"||typeof R=="boolean"?E[A]=R:E[A]=R.clone(),!0;{let C=E[A];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return E[A]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function g(y){let S=y.uniforms,x=0,E=16;for(let A=0,C=S.length;A<C;A++){let v=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,P=v.length;M<P;M++){let L=v[M],Y=Array.isArray(L.value)?L.value:[L.value];for(let V=0,w=Y.length;V<w;V++){let Z=Y[V],tt=_(Z),I=x%E,ct=I%tt.boundary,N=I+ct;x+=ct,N!==0&&E-N<tt.storage&&(x+=E-N),L.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=tt.storage}}}let R=x%E;return R>0&&(x+=E-R),y.__size=x,y.__cache={},this}function _(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){let S=y.target;S.removeEventListener("dispose",m);let x=a.indexOf(S.__bindingPointIndex);a.splice(x,1),e.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(let y in r)e.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:u,dispose:p}}var Qg=class{constructor(t={}){let{canvas:n=VC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,y=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Da,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,E=!1;this._outputColorSpace=br;let R=0,A=0,C=null,v=-1,M=null,P=new on,L=new on,Y=null,V=new Ue(0),w=0,Z=n.width,tt=n.height,I=1,ct=null,N=null,ht=new on(0,0,Z,tt),St=new on(0,0,Z,tt),W=!1,Rt=new jh,xt=!1,nt=!1,ot=new bn,wt=new q,Bt=new on,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xt=!1;function Vt(){return C===null?I:1}let U=i;function Ft(b,F){return n.getContext(b,F)}try{let b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",ut,!1),n.addEventListener("webglcontextrestored",dt,!1),n.addEventListener("webglcontextcreationerror",at,!1),U===null){let F="webgl2";if(U=Ft(F,b),U===null)throw Ft(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Et,Mt,z,Qt,Nt,It,ie,Gt,D,T,B,J,Q,$,Ot,pt,Ht,Dt,bt,mt,k,H,G,it;function O(){Et=new Rz(U),Et.init(),H=new s5(U,Et),Mt=new Sz(U,Et,t,H),z=new i5(U,Et),Mt.reversedDepthBuffer&&f&&z.buffers.depth.setReversed(!0),Qt=new Uz(U),Nt=new X4,It=new r5(U,Et,z,Nt,Mt,H,Qt),ie=new bz(x),Gt=new wz(x),D=new BI(U),G=new yz(U,D),T=new Cz(U,D,Qt,G),B=new Lz(U,T,D,Qt),bt=new Oz(U,Mt,It),pt=new Mz(Nt),J=new k4(x,ie,Gt,Et,Mt,G,pt),Q=new u5(x,Nt),$=new Y4,Ot=new j4(Et),Dt=new vz(x,ie,Gt,z,B,h,l),Ht=new e5(x,B,Mt),it=new c5(U,Qt,Mt,z),mt=new xz(U,Et,Qt),k=new Dz(U,Et,Qt),Qt.programs=J.programs,x.capabilities=Mt,x.extensions=Et,x.properties=Nt,x.renderLists=$,x.shadowMap=Ht,x.state=z,x.info=Qt}O();let et=new kS(x,U);this.xr=et,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=Et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(b){b!==void 0&&(I=b,this.setSize(Z,tt,!1))},this.getSize=function(b){return b.set(Z,tt)},this.setSize=function(b,F,K=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,tt=F,n.width=Math.floor(b*I),n.height=Math.floor(F*I),K===!0&&(n.style.width=b+"px",n.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(Z*I,tt*I).floor()},this.setDrawingBufferSize=function(b,F,K){Z=b,tt=F,I=K,n.width=Math.floor(b*K),n.height=Math.floor(F*K),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(ht)},this.setViewport=function(b,F,K,j){b.isVector4?ht.set(b.x,b.y,b.z,b.w):ht.set(b,F,K,j),z.viewport(P.copy(ht).multiplyScalar(I).round())},this.getScissor=function(b){return b.copy(St)},this.setScissor=function(b,F,K,j){b.isVector4?St.set(b.x,b.y,b.z,b.w):St.set(b,F,K,j),z.scissor(L.copy(St).multiplyScalar(I).round())},this.getScissorTest=function(){return W},this.setScissorTest=function(b){z.setScissorTest(W=b)},this.setOpaqueSort=function(b){ct=b},this.setTransparentSort=function(b){N=b},this.getClearColor=function(b){return b.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,K=!0){let j=0;if(b){let X=!1;if(C!==null){let _t=C.texture.format;X=_t===vg||_t===_g||_t===gg}if(X){let _t=C.texture.type,Pt=_t===Kr||_t===zo||_t===Fc||_t===zc||_t===pg||_t===mg,qt=Dt.getClearColor(),kt=Dt.getClearAlpha(),Jt=qt.r,$t=qt.g,Kt=qt.b;Pt?(g[0]=Jt,g[1]=$t,g[2]=Kt,g[3]=kt,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Jt,_[1]=$t,_[2]=Kt,_[3]=kt,U.clearBufferiv(U.COLOR,0,_))}else j|=U.COLOR_BUFFER_BIT}F&&(j|=U.DEPTH_BUFFER_BIT),K&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ut,!1),n.removeEventListener("webglcontextrestored",dt,!1),n.removeEventListener("webglcontextcreationerror",at,!1),Dt.dispose(),$.dispose(),Ot.dispose(),Nt.dispose(),ie.dispose(),Gt.dispose(),B.dispose(),G.dispose(),it.dispose(),J.dispose(),et.dispose(),et.removeEventListener("sessionstart",yt),et.removeEventListener("sessionend",ft),Ut.stop()};function ut(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let b=Qt.autoReset,F=Ht.enabled,K=Ht.autoUpdate,j=Ht.needsUpdate,X=Ht.type;O(),Qt.autoReset=b,Ht.enabled=F,Ht.autoUpdate=K,Ht.needsUpdate=j,Ht.type=X}function at(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function rt(b){let F=b.target;F.removeEventListener("dispose",rt),gt(F)}function gt(b){lt(b),Nt.remove(b)}function lt(b){let F=Nt.get(b).programs;F!==void 0&&(F.forEach(function(K){J.releaseProgram(K)}),b.isShaderMaterial&&J.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,K,j,X,_t){F===null&&(F=zt);let Pt=X.isMesh&&X.matrixWorld.determinant()<0,qt=re(b,F,K,j,X);z.setMaterial(j,Pt);let kt=K.index,Jt=1;if(j.wireframe===!0){if(kt=T.getWireframeAttribute(K),kt===void 0)return;Jt=2}let $t=K.drawRange,Kt=K.attributes.position,le=$t.start*Jt,Zt=($t.start+$t.count)*Jt;_t!==null&&(le=Math.max(le,_t.start*Jt),Zt=Math.min(Zt,(_t.start+_t.count)*Jt)),kt!==null?(le=Math.max(le,0),Zt=Math.min(Zt,kt.count)):Kt!=null&&(le=Math.max(le,0),Zt=Math.min(Zt,Kt.count));let se=Zt-le;if(se<0||se===1/0)return;G.setup(X,j,qt,K,kt);let He,Be=mt;if(kt!==null&&(He=D.get(kt),Be=k,Be.setIndex(He)),X.isMesh)j.wireframe===!0?(z.setLineWidth(j.wireframeLinewidth*Vt()),Be.setMode(U.LINES)):Be.setMode(U.TRIANGLES);else if(X.isLine){let te=j.linewidth;te===void 0&&(te=1),z.setLineWidth(te*Vt()),X.isLineSegments?Be.setMode(U.LINES):X.isLineLoop?Be.setMode(U.LINE_LOOP):Be.setMode(U.LINE_STRIP)}else X.isPoints?Be.setMode(U.POINTS):X.isSprite&&Be.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Uc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Be.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))Be.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let te=X._multiDrawStarts,_e=X._multiDrawCounts,pe=X._multiDrawCount,yn=kt?D.get(kt).bytesPerElement:1,wr=Nt.get(j).currentProgram.getUniforms();for(let yi=0;yi<pe;yi++)wr.setValue(U,"_gl_DrawID",yi),Be.render(te[yi]/yn,_e[yi])}else if(X.isInstancedMesh)Be.renderInstances(le,se,X.count);else if(K.isInstancedBufferGeometry){let te=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,_e=Math.min(K.instanceCount,te);Be.renderInstances(le,se,_e)}else Be.render(le,se)};function Yt(b,F,K){b.transparent===!0&&b.side===ks&&b.forceSinglePass===!1?(b.side=Ii,b.needsUpdate=!0,ce(b,F,K),b.side=Aa,b.needsUpdate=!0,ce(b,F,K),b.side=ks):ce(b,F,K)}this.compile=function(b,F,K=null){K===null&&(K=b),p=Ot.get(K),p.init(F),S.push(p),K.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),b!==K&&b.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let j=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let _t=X.material;if(_t)if(Array.isArray(_t))for(let Pt=0;Pt<_t.length;Pt++){let qt=_t[Pt];Yt(qt,K,X),j.add(qt)}else Yt(_t,K,X),j.add(_t)}),p=S.pop(),j},this.compileAsync=function(b,F,K=null){let j=this.compile(b,F,K);return new Promise(X=>{function _t(){if(j.forEach(function(Pt){Nt.get(Pt).currentProgram.isReady()&&j.delete(Pt)}),j.size===0){X(b);return}setTimeout(_t,10)}Et.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Tt=null;function st(b){Tt&&Tt(b)}function yt(){Ut.stop()}function ft(){Ut.start()}let Ut=new m3;Ut.setAnimationLoop(st),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(b){Tt=b,et.setAnimationLoop(b),b===null?Ut.stop():Ut.start()},et.addEventListener("sessionstart",yt),et.addEventListener("sessionend",ft),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(F),F=et.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,F,C),p=Ot.get(b,S.length),p.init(F),S.push(p),ot.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Rt.setFromProjectionMatrix(ot,cs,F.reversedDepth),nt=this.localClippingEnabled,xt=pt.init(this.clippingPlanes,nt),m=$.get(b,y.length),m.init(),y.push(m),et.enabled===!0&&et.isPresenting===!0){let _t=x.xr.getDepthSensingMesh();_t!==null&&Ct(_t,F,-1/0,x.sortObjects)}Ct(b,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ct,N),Xt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Xt&&Dt.addToRenderList(m,b),this.info.render.frame++,xt===!0&&pt.beginShadows();let K=p.state.shadowsArray;Ht.render(K,b,F),xt===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=m.opaque,X=m.transmissive;if(p.setupLights(),F.isArrayCamera){let _t=F.cameras;if(X.length>0)for(let Pt=0,qt=_t.length;Pt<qt;Pt++){let kt=_t[Pt];ae(j,X,b,kt)}Xt&&Dt.render(b);for(let Pt=0,qt=_t.length;Pt<qt;Pt++){let kt=_t[Pt];At(m,b,kt,kt.viewport)}}else X.length>0&&ae(j,X,b,F),Xt&&Dt.render(b),At(m,b,F);C!==null&&A===0&&(It.updateMultisampleRenderTarget(C),It.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(x,b,F),G.resetDefaultState(),v=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],xt===!0&&pt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ct(b,F,K,j){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Rt.intersectsSprite(b)){j&&Bt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ot);let Pt=B.update(b),qt=b.material;qt.visible&&m.push(b,Pt,qt,K,Bt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Rt.intersectsObject(b))){let Pt=B.update(b),qt=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Bt.copy(b.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Bt.copy(Pt.boundingSphere.center)),Bt.applyMatrix4(b.matrixWorld).applyMatrix4(ot)),Array.isArray(qt)){let kt=Pt.groups;for(let Jt=0,$t=kt.length;Jt<$t;Jt++){let Kt=kt[Jt],le=qt[Kt.materialIndex];le&&le.visible&&m.push(b,Pt,le,K,Bt.z,Kt)}}else qt.visible&&m.push(b,Pt,qt,K,Bt.z,null)}}let _t=b.children;for(let Pt=0,qt=_t.length;Pt<qt;Pt++)Ct(_t[Pt],F,K,j)}function At(b,F,K,j){let X=b.opaque,_t=b.transmissive,Pt=b.transparent;p.setupLightsView(K),xt===!0&&pt.setGlobalState(x.clippingPlanes,K),j&&z.viewport(P.copy(j)),X.length>0&&ne(X,F,K),_t.length>0&&ne(_t,F,K),Pt.length>0&&ne(Pt,F,K),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function ae(b,F,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Zr(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float")?Ho:Kr,minFilter:Fo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));let _t=p.state.transmissionRenderTarget[j.id],Pt=j.viewport||P;_t.setSize(Pt.z*x.transmissionResolutionScale,Pt.w*x.transmissionResolutionScale);let qt=x.getRenderTarget(),kt=x.getActiveCubeFace(),Jt=x.getActiveMipmapLevel();x.setRenderTarget(_t),x.getClearColor(V),w=x.getClearAlpha(),w<1&&x.setClearColor(16777215,.5),x.clear(),Xt&&Dt.render(K);let $t=x.toneMapping;x.toneMapping=Da;let Kt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),xt===!0&&pt.setGlobalState(x.clippingPlanes,j),ne(b,K,j),It.updateMultisampleRenderTarget(_t),It.updateRenderTargetMipmap(_t),Et.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Zt=0,se=F.length;Zt<se;Zt++){let He=F[Zt],Be=He.object,te=He.geometry,_e=He.material,pe=He.group;if(_e.side===ks&&Be.layers.test(j.layers)){let yn=_e.side;_e.side=Ii,_e.needsUpdate=!0,jt(Be,K,j,te,_e,pe),_e.side=yn,_e.needsUpdate=!0,le=!0}}le===!0&&(It.updateMultisampleRenderTarget(_t),It.updateRenderTargetMipmap(_t))}x.setRenderTarget(qt,kt,Jt),x.setClearColor(V,w),Kt!==void 0&&(j.viewport=Kt),x.toneMapping=$t}function ne(b,F,K){let j=F.isScene===!0?F.overrideMaterial:null;for(let X=0,_t=b.length;X<_t;X++){let Pt=b[X],qt=Pt.object,kt=Pt.geometry,Jt=Pt.group,$t=Pt.material;$t.allowOverride===!0&&j!==null&&($t=j),qt.layers.test(K.layers)&&jt(qt,F,K,kt,$t,Jt)}}function jt(b,F,K,j,X,_t){b.onBeforeRender(x,F,K,j,X,_t),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(x,F,K,j,b,_t),X.transparent===!0&&X.side===ks&&X.forceSinglePass===!1?(X.side=Ii,X.needsUpdate=!0,x.renderBufferDirect(K,F,j,X,b,_t),X.side=Aa,X.needsUpdate=!0,x.renderBufferDirect(K,F,j,X,b,_t),X.side=ks):x.renderBufferDirect(K,F,j,X,b,_t),b.onAfterRender(x,F,K,j,X,_t)}function ce(b,F,K){F.isScene!==!0&&(F=zt);let j=Nt.get(b),X=p.state.lights,_t=p.state.shadowsArray,Pt=X.state.version,qt=J.getParameters(b,X.state,_t,F,K),kt=J.getProgramCacheKey(qt),Jt=j.programs;j.environment=b.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(b.isMeshStandardMaterial?Gt:ie).get(b.envMap||j.environment),j.envMapRotation=j.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Jt===void 0&&(b.addEventListener("dispose",rt),Jt=new Map,j.programs=Jt);let $t=Jt.get(kt);if($t!==void 0){if(j.currentProgram===$t&&j.lightsStateVersion===Pt)return fe(b,qt),$t}else qt.uniforms=J.getUniforms(b),b.onBeforeCompile(qt,x),$t=J.acquireProgram(qt,kt),Jt.set(kt,$t),j.uniforms=qt.uniforms;let Kt=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Kt.clippingPlanes=pt.uniform),fe(b,qt),j.needsLights=ve(b),j.lightsStateVersion=Pt,j.needsLights&&(Kt.ambientLightColor.value=X.state.ambient,Kt.lightProbe.value=X.state.probe,Kt.directionalLights.value=X.state.directional,Kt.directionalLightShadows.value=X.state.directionalShadow,Kt.spotLights.value=X.state.spot,Kt.spotLightShadows.value=X.state.spotShadow,Kt.rectAreaLights.value=X.state.rectArea,Kt.ltc_1.value=X.state.rectAreaLTC1,Kt.ltc_2.value=X.state.rectAreaLTC2,Kt.pointLights.value=X.state.point,Kt.pointLightShadows.value=X.state.pointShadow,Kt.hemisphereLights.value=X.state.hemi,Kt.directionalShadowMap.value=X.state.directionalShadowMap,Kt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Kt.spotShadowMap.value=X.state.spotShadowMap,Kt.spotLightMatrix.value=X.state.spotLightMatrix,Kt.spotLightMap.value=X.state.spotLightMap,Kt.pointShadowMap.value=X.state.pointShadowMap,Kt.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=$t,j.uniformsList=null,$t}function oe(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=kc.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function fe(b,F){let K=Nt.get(b);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function re(b,F,K,j,X){F.isScene!==!0&&(F=zt),It.resetTextureUnits();let _t=F.fog,Pt=j.isMeshStandardMaterial?F.environment:null,qt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Hs,kt=(j.isMeshStandardMaterial?Gt:ie).get(j.envMap||Pt),Jt=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,$t=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Kt=!!K.morphAttributes.position,le=!!K.morphAttributes.normal,Zt=!!K.morphAttributes.color,se=Da;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(se=x.toneMapping);let He=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Be=He!==void 0?He.length:0,te=Nt.get(j),_e=p.state.lights;if(xt===!0&&(nt===!0||b!==M)){let xi=b===M&&j.id===v;pt.setState(j,b,xi)}let pe=!1;j.version===te.__version?(te.needsLights&&te.lightsStateVersion!==_e.state.version||te.outputColorSpace!==qt||X.isBatchedMesh&&te.batching===!1||!X.isBatchedMesh&&te.batching===!0||X.isBatchedMesh&&te.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&te.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&te.instancing===!1||!X.isInstancedMesh&&te.instancing===!0||X.isSkinnedMesh&&te.skinning===!1||!X.isSkinnedMesh&&te.skinning===!0||X.isInstancedMesh&&te.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&te.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&te.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&te.instancingMorph===!1&&X.morphTexture!==null||te.envMap!==kt||j.fog===!0&&te.fog!==_t||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==pt.numPlanes||te.numIntersection!==pt.numIntersection)||te.vertexAlphas!==Jt||te.vertexTangents!==$t||te.morphTargets!==Kt||te.morphNormals!==le||te.morphColors!==Zt||te.toneMapping!==se||te.morphTargetsCount!==Be)&&(pe=!0):(pe=!0,te.__version=j.version);let yn=te.currentProgram;pe===!0&&(yn=ce(j,F,X));let wr=!1,yi=!1,qs=!1,Qe=yn.getUniforms(),Rr=te.uniforms;if(z.useProgram(yn.program)&&(wr=!0,yi=!0,qs=!0),j.id!==v&&(v=j.id,yi=!0),wr||M!==b){z.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Qe.setValue(U,"projectionMatrix",b.projectionMatrix),Qe.setValue(U,"viewMatrix",b.matrixWorldInverse);let Fi=Qe.map.cameraPosition;Fi!==void 0&&Fi.setValue(U,wt.setFromMatrixPosition(b.matrixWorld)),Mt.logarithmicDepthBuffer&&Qe.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Qe.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,yi=!0,qs=!0)}if(X.isSkinnedMesh){Qe.setOptional(U,X,"bindMatrix"),Qe.setOptional(U,X,"bindMatrixInverse");let xi=X.skeleton;xi&&(xi.boneTexture===null&&xi.computeBoneTexture(),Qe.setValue(U,"boneTexture",xi.boneTexture,It))}X.isBatchedMesh&&(Qe.setOptional(U,X,"batchingTexture"),Qe.setValue(U,"batchingTexture",X._matricesTexture,It),Qe.setOptional(U,X,"batchingIdTexture"),Qe.setValue(U,"batchingIdTexture",X._indirectTexture,It),Qe.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&Qe.setValue(U,"batchingColorTexture",X._colorsTexture,It));let Cr=K.morphAttributes;if((Cr.position!==void 0||Cr.normal!==void 0||Cr.color!==void 0)&&bt.update(X,K,yn),(yi||te.receiveShadow!==X.receiveShadow)&&(te.receiveShadow=X.receiveShadow,Qe.setValue(U,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Rr.envMap.value=kt,Rr.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(Rr.envMapIntensity.value=F.environmentIntensity),yi&&(Qe.setValue(U,"toneMappingExposure",x.toneMappingExposure),te.needsLights&&De(Rr,qs),_t&&j.fog===!0&&Q.refreshFogUniforms(Rr,_t),Q.refreshMaterialUniforms(Rr,j,I,tt,p.state.transmissionRenderTarget[b.id]),kc.upload(U,oe(te),Rr,It)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(kc.upload(U,oe(te),Rr,It),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Qe.setValue(U,"center",X.center),Qe.setValue(U,"modelViewMatrix",X.modelViewMatrix),Qe.setValue(U,"normalMatrix",X.normalMatrix),Qe.setValue(U,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let xi=j.uniformsGroups;for(let Fi=0,a_=xi.length;Fi<a_;Fi++){let Vo=xi[Fi];it.update(Vo,yn),it.bind(Vo,yn)}}return yn}function De(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function ve(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,F,K){let j=Nt.get(b);j.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Nt.get(b.texture).__webglTexture=F,Nt.get(b.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let K=Nt.get(b);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0};let Le=U.createFramebuffer();this.setRenderTarget=function(b,F=0,K=0){C=b,R=F,A=K;let j=!0,X=null,_t=!1,Pt=!1;if(b){let kt=Nt.get(b);if(kt.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(U.FRAMEBUFFER,null),j=!1;else if(kt.__webglFramebuffer===void 0)It.setupRenderTarget(b);else if(kt.__hasExternalTextures)It.rebindTextures(b,Nt.get(b.texture).__webglTexture,Nt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Kt=b.depthTexture;if(kt.__boundDepthTexture!==Kt){if(Kt!==null&&Nt.has(Kt)&&(b.width!==Kt.image.width||b.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");It.setupDepthRenderbuffer(b)}}let Jt=b.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Pt=!0);let $t=Nt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray($t[F])?X=$t[F][K]:X=$t[F],_t=!0):b.samples>0&&It.useMultisampledRTT(b)===!1?X=Nt.get(b).__webglMultisampledFramebuffer:Array.isArray($t)?X=$t[K]:X=$t,P.copy(b.viewport),L.copy(b.scissor),Y=b.scissorTest}else P.copy(ht).multiplyScalar(I).floor(),L.copy(St).multiplyScalar(I).floor(),Y=W;if(K!==0&&(X=Le),z.bindFramebuffer(U.FRAMEBUFFER,X)&&j&&z.drawBuffers(b,X),z.viewport(P),z.scissor(L),z.setScissorTest(Y),_t){let kt=Nt.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,kt.__webglTexture,K)}else if(Pt){let kt=F;for(let Jt=0;Jt<b.textures.length;Jt++){let $t=Nt.get(b.textures[Jt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Jt,$t.__webglTexture,K,kt)}}else if(b!==null&&K!==0){let kt=Nt.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,kt.__webglTexture,K)}v=-1},this.readRenderTargetPixels=function(b,F,K,j,X,_t,Pt,qt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(kt=kt[Pt]),kt){z.bindFramebuffer(U.FRAMEBUFFER,kt);try{let Jt=b.textures[qt],$t=Jt.format,Kt=Jt.type;if(!Mt.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-j&&K>=0&&K<=b.height-X&&(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+qt),U.readPixels(F,K,j,X,H.convert($t),H.convert(Kt),_t))}finally{let Jt=C!==null?Nt.get(C).__webglFramebuffer:null;z.bindFramebuffer(U.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(b,F,K,j,X,_t,Pt,qt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(kt=kt[Pt]),kt)if(F>=0&&F<=b.width-j&&K>=0&&K<=b.height-X){z.bindFramebuffer(U.FRAMEBUFFER,kt);let Jt=b.textures[qt],$t=Jt.format,Kt=Jt.type;if(!Mt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let le=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,le),U.bufferData(U.PIXEL_PACK_BUFFER,_t.byteLength,U.STREAM_READ),b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+qt),U.readPixels(F,K,j,X,H.convert($t),H.convert(Kt),0);let Zt=C!==null?Nt.get(C).__webglFramebuffer:null;z.bindFramebuffer(U.FRAMEBUFFER,Zt);let se=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await GC(U,se,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,le),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,_t),U.deleteBuffer(le),U.deleteSync(se),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,K=0){let j=Math.pow(2,-K),X=Math.floor(b.image.width*j),_t=Math.floor(b.image.height*j),Pt=F!==null?F.x:0,qt=F!==null?F.y:0;It.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,Pt,qt,X,_t),z.unbindTexture()};let vn=U.createFramebuffer(),Lt=U.createFramebuffer();this.copyTextureToTexture=function(b,F,K=null,j=null,X=0,_t=null){_t===null&&(X!==0?(Uc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=X,X=0):_t=0);let Pt,qt,kt,Jt,$t,Kt,le,Zt,se,He=b.isCompressedTexture?b.mipmaps[_t]:b.image;if(K!==null)Pt=K.max.x-K.min.x,qt=K.max.y-K.min.y,kt=K.isBox3?K.max.z-K.min.z:1,Jt=K.min.x,$t=K.min.y,Kt=K.isBox3?K.min.z:0;else{let Cr=Math.pow(2,-X);Pt=Math.floor(He.width*Cr),qt=Math.floor(He.height*Cr),b.isDataArrayTexture?kt=He.depth:b.isData3DTexture?kt=Math.floor(He.depth*Cr):kt=1,Jt=0,$t=0,Kt=0}j!==null?(le=j.x,Zt=j.y,se=j.z):(le=0,Zt=0,se=0);let Be=H.convert(F.format),te=H.convert(F.type),_e;F.isData3DTexture?(It.setTexture3D(F,0),_e=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(It.setTexture2DArray(F,0),_e=U.TEXTURE_2D_ARRAY):(It.setTexture2D(F,0),_e=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let pe=U.getParameter(U.UNPACK_ROW_LENGTH),yn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),wr=U.getParameter(U.UNPACK_SKIP_PIXELS),yi=U.getParameter(U.UNPACK_SKIP_ROWS),qs=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,He.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,He.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Jt),U.pixelStorei(U.UNPACK_SKIP_ROWS,$t),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Kt);let Qe=b.isDataArrayTexture||b.isData3DTexture,Rr=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let Cr=Nt.get(b),xi=Nt.get(F),Fi=Nt.get(Cr.__renderTarget),a_=Nt.get(xi.__renderTarget);z.bindFramebuffer(U.READ_FRAMEBUFFER,Fi.__webglFramebuffer),z.bindFramebuffer(U.DRAW_FRAMEBUFFER,a_.__webglFramebuffer);for(let Vo=0;Vo<kt;Vo++)Qe&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Nt.get(b).__webglTexture,X,Kt+Vo),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Nt.get(F).__webglTexture,_t,se+Vo)),U.blitFramebuffer(Jt,$t,Pt,qt,le,Zt,Pt,qt,U.DEPTH_BUFFER_BIT,U.NEAREST);z.bindFramebuffer(U.READ_FRAMEBUFFER,null),z.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||Nt.has(b)){let Cr=Nt.get(b),xi=Nt.get(F);z.bindFramebuffer(U.READ_FRAMEBUFFER,vn),z.bindFramebuffer(U.DRAW_FRAMEBUFFER,Lt);for(let Fi=0;Fi<kt;Fi++)Qe?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Cr.__webglTexture,X,Kt+Fi):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Cr.__webglTexture,X),Rr?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xi.__webglTexture,_t,se+Fi):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xi.__webglTexture,_t),X!==0?U.blitFramebuffer(Jt,$t,Pt,qt,le,Zt,Pt,qt,U.COLOR_BUFFER_BIT,U.NEAREST):Rr?U.copyTexSubImage3D(_e,_t,le,Zt,se+Fi,Jt,$t,Pt,qt):U.copyTexSubImage2D(_e,_t,le,Zt,Jt,$t,Pt,qt);z.bindFramebuffer(U.READ_FRAMEBUFFER,null),z.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Rr?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(_e,_t,le,Zt,se,Pt,qt,kt,Be,te,He.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(_e,_t,le,Zt,se,Pt,qt,kt,Be,He.data):U.texSubImage3D(_e,_t,le,Zt,se,Pt,qt,kt,Be,te,He):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,_t,le,Zt,Pt,qt,Be,te,He.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,_t,le,Zt,He.width,He.height,Be,He.data):U.texSubImage2D(U.TEXTURE_2D,_t,le,Zt,Pt,qt,Be,te,He);U.pixelStorei(U.UNPACK_ROW_LENGTH,pe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,yn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,wr),U.pixelStorei(U.UNPACK_SKIP_ROWS,yi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,qs),_t===0&&F.generateMipmaps&&U.generateMipmap(_e),z.unbindTexture()},this.initRenderTarget=function(b){Nt.get(b).__webglFramebuffer===void 0&&It.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?It.setTextureCube(b,0):b.isData3DTexture?It.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?It.setTexture2DArray(b,0):It.setTexture2D(b,0),z.unbindTexture()},this.resetState=function(){R=0,A=0,C=null,z.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(t),n.unpackColorSpace=Oe._getUnpackColorSpace()}};var E3=hn(Ai()),vd=400,Wc=160,yd=80,xd=1500,Md=8,x3=["straight","gentle","winding","hills","racing","deep"],S3={dark:{background:"transparent",road:"#08080a",lines:"#25252d",tail:["#d856bf","#6750a2","#c247ac"],head:["#03b3c3","#0e5ea5","#324555"],poles:["#03b3c3"],dust:"#ffffff"},light:{background:"transparent",road:"#efeff2",lines:"#d0d0d7",tail:["#d856bf","#6750a2","#c247ac"],head:["#03b3c3","#0e5ea5","#324555"],poles:["#03b3c3"],dust:"#18181b"}},i_=`
  uniform float uTime;
  uniform float uCurvature;
  uniform vec4 uCurveA;
  uniform float uCurveB;
  uniform float uFogNear;
  uniform float uFogFar;
  uniform float uPixel;
  #define PI 3.14159265358979
  float nsin(float v) { return sin(v) * 0.5 + 0.5; }
  vec3 gentle(float p) {
    return vec3(
      cos(p * PI * 5.0 + uTime) * 25.0 - cos(0.02 * PI * 5.0 + uTime) * 25.0,
      sin(p * PI * 2.0 + PI * 0.5 + uTime) * 15.0 - sin(0.02 * PI * 2.0 + PI * 0.5 + uTime) * 15.0,
      0.0
    );
  }
  float windX(float p) { return cos(PI * p * 4.0 + uTime) * 25.0 + pow(cos(PI * p * 8.0 + uTime * 2.0), 2.0) * 5.0; }
  float windY(float p) { return -nsin(PI * p * 8.0 + uTime) * 10.0 - pow(nsin(PI * p + uTime / 8.0), 5.0) * 10.0; }
  vec3 winding(float p) { return vec3(windX(p) - windX(0.0125), windY(p) - windY(0.0125), 0.0); }
  vec3 hills(float p) {
    return vec3(
      cos(p * PI * 3.0 + uTime) * 30.0 - cos(0.02 * PI * 3.0 + uTime) * 30.0,
      nsin(p * PI * 6.0 + uTime) * 30.0 - nsin(0.02 * PI * 6.0 + uTime) * 30.0,
      nsin(p * PI * 10.0 + uTime) * 20.0 - nsin(0.02 * PI * 10.0 + uTime) * 20.0
    );
  }
  vec3 racing(float p) {
    return vec3(
      sin(p * PI * 2.0 + uTime) * 35.0 - sin(0.0125 * PI * 2.0 + uTime) * 35.0,
      sin(p * PI * 3.0 + uTime) * 10.0 - sin(0.0125 * PI * 3.0 + uTime) * 10.0,
      0.0
    );
  }
  float deepX(float p) { return sin(p * PI * 4.0 + uTime) * 10.0; }
  float deepY(float p) { return pow(abs(p * 10.0), 2.0) + sin(p * PI * 8.0 + uTime) * 20.0; }
  vec3 deep(float p) { return vec3(deepX(p) - deepX(0.02), deepY(p) - deepY(0.02), 0.0); }
  vec3 bend(float p) {
    vec3 d = gentle(p) * uCurveA.x + winding(p) * uCurveA.y + hills(p) * uCurveA.z + racing(p) * uCurveA.w + deep(p) * uCurveB;
    return d * uCurvature;
  }
`,h5=`
  ${i_}
  attribute vec4 aSeedA;
  attribute vec4 aSeedB;
  attribute float aPair;
  attribute float aTone;
  uniform float uTravel;
  uniform float uRoadX;
  uniform float uRoadWidth;
  uniform float uLanes;
  uniform float uDirection;
  uniform vec2 uSpeedRange;
  uniform float uTrail;
  uniform float uStretch;
  uniform float uSize;
  uniform float uRadiusScale;
  uniform float uMirror;
  uniform vec3 uColors[${Md}];
  uniform float uColorCount;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec3 vColor;
  varying float vFog;
  varying float vAbove;
  varying float vThin;
  void main() {
    float laneWidth = uRoadWidth / uLanes;
    float lane = min(floor(aSeedA.x * uLanes), uLanes - 1.0);
    float laneX = (lane + 0.5) * laneWidth - uRoadWidth * 0.5 + (aSeedA.y - 0.5) * 0.5 * laneWidth;
    float carWidth = mix(0.3, 0.5, aSeedA.z) * laneWidth;
    float radius = mix(0.05, 0.14, aSeedA.w) * uSize;
    float len = mix(0.03, 0.2, aSeedB.x) * uTravel * uTrail * (1.0 + uStretch);
    float speed = mix(uSpeedRange.x, uSpeedRange.y, aSeedB.y) * uDirection;
    vec3 center = vec3(
      uRoadX + laneX + aPair * carWidth,
      aSeedB.w * 0.8 + radius * 1.3,
      position.z * len + len - mod(uTime * speed + aSeedB.z * uTravel, uTravel)
    );
    vAbove = center.y;
    center.y = mix(center.y, -center.y * 1.8, uMirror);
    center += bend(abs(center.z / uTravel));
    float depth = max(0.1, -(modelViewMatrix * vec4(center, 1.0)).z);
    float wanted = radius * uRadiusScale;
    float shown = max(wanted, depth * uPixel * 0.75);
    vThin = wanted / shown;
    vec3 p = center + vec3(position.x * shown, position.y * shown * mix(1.0, 2.2, uMirror), 0.0);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    vec3 n = normal;
    n.y *= 1.0 - 2.0 * uMirror;
    vNormal = normalize(normalMatrix * n);
    vView = -mv.xyz;
    vUv = uv;
    vColor = uColors[int(min(floor(aTone * uColorCount), uColorCount - 1.0))];
    vFog = smoothstep(uFogNear, uFogFar, -mv.z);
  }
`,d5=`
  uniform vec2 uFade;
  uniform float uIntensity;
  uniform float uSharp;
  uniform float uCore;
  uniform float uMirror;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec3 vColor;
  varying float vFog;
  varying float vAbove;
  varying float vThin;
  void main() {
    float facing = abs(dot(normalize(vNormal), normalize(vView)));
    float alpha = pow(facing, uSharp) * smoothstep(uFade.x, uFade.y, vUv.x) * uIntensity * vThin * (1.0 - vFog);
    alpha *= mix(1.0, exp(-vAbove * 0.9), uMirror);
    // Break each perspective trail into discrete luminous beads.
    float bead = abs(fract(vUv.x * 22.0) - 0.5);
    alpha *= 1.0 - smoothstep(0.16, 0.33, bead);
    if (alpha < 0.003) discard;
    gl_FragColor = vec4(mix(vColor, vec3(1.0), pow(facing, 12.0) * uCore), min(alpha, 1.0));
  }
`,p5=`
  ${i_}
  attribute vec4 aSeed;
  attribute float aIndex;
  attribute float aSide;
  uniform float uTravel;
  uniform float uCount;
  uniform float uEdge;
  uniform float uHeight;
  uniform float uRadiusScale;
  uniform float uMirror;
  uniform vec3 uColors[${Md}];
  uniform float uColorCount;
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec3 vColor;
  varying float vFog;
  varying float vAbove;
  varying float vHeight;
  varying float vThin;
  void main() {
    vHeight = position.y + 0.5;
    float width = mix(0.08, 0.22, aSeed.y);
    float height = mix(1.3, 1.9, aSeed.z) * uHeight;
    float spacing = uTravel / max(uCount, 1.0);
    vec3 center = vec3(
      aSide * uEdge,
      vHeight * height,
      -uTravel + mod(uTime * 120.0 + (aIndex + aSeed.x * 0.6) * spacing, uTravel)
    );
    vAbove = center.y;
    center.y = mix(center.y, -center.y * 1.6, uMirror);
    center += bend(abs(center.z / uTravel));
    float depth = max(0.1, -(modelViewMatrix * vec4(center, 1.0)).z);
    float wanted = width * uRadiusScale;
    float shown = max(wanted, depth * uPixel * 0.75);
    vThin = wanted / shown;
    vec3 p = center + vec3(position.x * shown, 0.0, position.z * shown);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    vNormal = normalize(normalMatrix * normal);
    vView = -mv.xyz;
    vColor = uColors[int(min(floor(aSeed.w * uColorCount), uColorCount - 1.0))];
    vFog = smoothstep(uFogNear, uFogFar, -mv.z);
  }
`,m5=`
  uniform float uIntensity;
  uniform float uSharp;
  uniform float uCore;
  uniform float uMirror;
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec3 vColor;
  varying float vFog;
  varying float vAbove;
  varying float vHeight;
  varying float vThin;
  void main() {
    float facing = abs(dot(normalize(vNormal), normalize(vView)));
    float ends = smoothstep(0.0, 0.08, vHeight) * smoothstep(1.0, 0.9, vHeight);
    float alpha = pow(facing, uSharp) * ends * uIntensity * vThin * (1.0 - vFog);
    alpha *= mix(1.0, exp(-vAbove * 0.6), uMirror);
    if (alpha < 0.003) discard;
    gl_FragColor = vec4(mix(vColor, vec3(1.0), pow(facing, 12.0) * uCore), min(alpha, 1.0));
  }
`,g5=`
  ${i_}
  attribute vec4 aSeed;
  attribute float aEnd;
  uniform float uTravel;
  uniform float uStretch;
  uniform float uSpread;
  varying float vAlpha;
  void main() {
    float x = (aSeed.x - 0.5) * uSpread;
    float y = mix(1.0, 42.0, aSeed.y * aSeed.y);
    float speed = mix(140.0, 260.0, aSeed.w);
    float z = -uTravel + mod(uTime * speed + aSeed.z * uTravel, uTravel);
    float len = (0.6 + uStretch * 7.0) * mix(0.6, 1.4, aSeed.w);
    vec3 p = vec3(x, y, z + aEnd * len);
    p += bend(abs(p.z / uTravel));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    vAlpha = aEnd * (1.0 - smoothstep(uFogNear, uFogFar, -mv.z));
  }
`,_5=`
  uniform vec3 uColor;
  uniform float uIntensity;
  varying float vAlpha;
  void main() {
    gl_FragColor = vec4(uColor, vAlpha * uIntensity);
  }
`,v5=`
  ${i_}
  uniform float uTravel;
  uniform float uWidth;
  varying vec2 vRoad;
  varying float vFog;
  void main() {
    vec3 p = position;
    p.x *= uWidth;
    vRoad = vec2(p.x, p.z);
    p += bend(abs(p.z / uTravel));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    vFog = smoothstep(uFogNear, uFogFar, -mv.z);
  }
`,y5=`
  uniform float uTime;
  uniform vec3 uRoadColor;
  uniform vec3 uLineColor;
  uniform vec3 uBackground;
  uniform float uRoadWidth;
  uniform float uMedian;
  uniform float uLanes;
  uniform float uTransparent;
  uniform float uOpacity;
  varying vec2 vRoad;
  varying float vFog;
  float stripe(float d, float w) {
    float aa = fwidth(d) * 1.2;
    return 1.0 - smoothstep(w - aa, w + aa, d);
  }
  void main() {
    float rx = abs(vRoad.x) - uMedian * 0.5;
    vec3 color = rx < 0.0 ? mix(uRoadColor, uLineColor, 0.12) : uRoadColor;
    if (rx >= 0.0) {
      float laneWidth = uRoadWidth / uLanes;
      float shoulder = max(stripe(abs(rx - 0.3), 0.07), stripe(abs(rx - (uRoadWidth - 0.3)), 0.07));
      float nearest = floor(rx / laneWidth + 0.5);
      float inner = step(0.5, nearest) * step(nearest, uLanes - 0.5);
      float dash = step(0.5, fract((vRoad.y - uTime * 120.0) / 14.0));
      float marks = max(shoulder, stripe(abs(rx - nearest * laneWidth), 0.06) * inner * dash);
      color = mix(color, uLineColor, marks);
    }
    float alpha = mix(1.0, 1.0 - vFog, uTransparent) * uOpacity;
    gl_FragColor = vec4(mix(color, uBackground, vFog * (1.0 - uTransparent)), alpha);
  }
`,x5=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,S5=`
  uniform sampler2D uTexture;
  uniform vec2 uTexel;
  varying vec2 vUv;
  vec4 tap(vec2 offset) {
    return min(texture2D(uTexture, vUv + uTexel * offset), vec4(1.0));
  }
  void main() {
    vec4 sum = tap(vec2(0.0)) * 4.0 + tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0));
    gl_FragColor = sum * 0.125;
  }
`,b3=`
  uniform sampler2D uTexture;
  uniform vec2 uTexel;
  varying vec2 vUv;
  vec4 tent() {
    vec4 sum = texture2D(uTexture, vUv + uTexel * vec2(-1.0, 0.0));
    sum += texture2D(uTexture, vUv + uTexel * vec2(1.0, 0.0));
    sum += texture2D(uTexture, vUv + uTexel * vec2(0.0, -1.0));
    sum += texture2D(uTexture, vUv + uTexel * vec2(0.0, 1.0));
    sum += texture2D(uTexture, vUv + uTexel * vec2(-0.5, -0.5)) * 2.0;
    sum += texture2D(uTexture, vUv + uTexel * vec2(0.5, -0.5)) * 2.0;
    sum += texture2D(uTexture, vUv + uTexel * vec2(-0.5, 0.5)) * 2.0;
    sum += texture2D(uTexture, vUv + uTexel * vec2(0.5, 0.5)) * 2.0;
    return sum / 12.0;
  }
`,M5=`
  ${b3}
  void main() {
    gl_FragColor = tent();
  }
`,b5=`
  ${b3}
  uniform float uStrength;
  uniform float uCeiling;
  uniform float uLight;
  void main() {
    vec4 color = tent() * uStrength;
    float peak = max(uLight > 0.5 ? color.a : max(color.r, max(color.g, color.b)), 0.0001);
    color *= uCeiling * (1.0 - exp(-peak / uCeiling)) / peak;
    gl_FragColor = uLight > 0.5 ? color : vec4(color.rgb, 0.0);
  }
`,Yc=null,Sd=e=>{if(Yc=Yc??document.createElement("canvas").getContext("2d"),!Yc)return[1,1,1];Yc.fillStyle="#000000",Yc.fillStyle=e;let t=String(Yc.fillStyle);if(t.startsWith("#")){let i=parseInt(t.slice(1,7),16);return[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}let n=t.match(/[\d.]+/g)?.map(Number)??[0,0,0];return[n[0]/255,n[1]/255,n[2]/255]},WS=(e,t,n)=>{let i=n.length?n:["#ffffff"];for(let r=0;r<Md;r++)e.value[r].fromArray(Sd(i[r%i.length]));t.value=Math.min(i.length,Md)},M3=e=>{let t=new od;return t.setIndex(e.index),Object.entries(e.attributes).forEach(([n,i])=>t.setAttribute(n,i)),t},qc=e=>Math.sin(e)*.5+.5,$g=(e,t)=>Math.cos(Math.PI*e*4+t)*25+Math.cos(Math.PI*e*8+t*2)**2*5,t_=(e,t)=>-qc(Math.PI*e*8+t)*10-qc(Math.PI*e+t/8)**5*10,e_=(e,t)=>Math.sin(e*Math.PI*4+t)*10,n_=(e,t)=>Math.abs(e*10)**2+Math.sin(e*Math.PI*8+t)*20,T5=(e,t)=>{let{PI:n,cos:i,sin:r}=Math;return[[i(e*n*5+t)*25-i(.02*n*5+t)*25,r(e*n*2+n*.5+t)*15-r(.02*n*2+n*.5+t)*15,0],[$g(e,t)-$g(.0125,t),t_(e,t)-t_(.0125,t),0],[i(e*n*3+t)*30-i(.02*n*3+t)*30,qc(e*n*6+t)*30-qc(.02*n*6+t)*30,qc(e*n*10+t)*20-qc(.02*n*10+t)*20],[r(e*n*2+t)*35-r(.0125*n*2+t)*35,r(e*n*3+t)*10-r(.0125*n*3+t)*10,0],[e_(e,t)-e_(.02,t),n_(e,t)-n_(.02,t),0]]},E5=(e,t)=>{let[i,,r,s]=T5(.025,e);return[[i[0]*t*2,i[1]*t*.4,-3],[($g(.025,e)-$g(.025+.007,e))*t*-2,(t_(.025,e)-t_(.025+.007,e))*t*-5,-10],[r[0]*t*2,r[1]*t*2,r[2]*t*2-5],[s[0]*t,s[1]*t,-5],[(e_(.025,e)-e_(.025+.01,e))*t*-2,(n_(.025,e)-n_(.025+.01,e))*t*-4,-10]]},A5=({curve:e="winding",curvature:t=1,speed:n=1,boost:i=3,fov:r=90,boostFov:s=130,lanes:a=3,roadWidth:o=10,medianWidth:l=2,density:u=40,trailLength:c=1,lightSize:d=1,poles:f=20,poleHeight:h=1,dust:g=100,glow:_=.6,reflections:m=.5,steer:p=.35,tailColors:y,headColors:S,poleColors:x,roadColor:E,roadOpacity:R=.1,lineColor:A,background:C,theme:v="dark",interactive:M=!0,boosting:P=!1,onBoostStart:L,onBoostEnd:Y,className:V="",style:w})=>{let Z=(0,Zc.useRef)(null),tt=S3[v]??S3.dark,I={light:v==="light",curve:x3.includes(e)?e:"winding",curvature:Math.max(0,t),speed:Math.max(0,n),boost:Math.max(1,i),fov:Math.min(170,Math.max(20,r)),boostFov:Math.min(170,Math.max(20,s)),lanes:Math.max(1,Math.round(a)),roadWidth:Math.max(1,o),medianWidth:Math.max(0,l),density:Math.min(Wc,Math.max(0,Math.round(u))),trailLength:Math.max(.05,c),lightSize:Math.max(.1,d),poles:Math.min(yd,Math.max(0,Math.round(f))),poleHeight:Math.max(.1,h),dust:Math.min(xd,Math.max(0,Math.round(g))),glow:Math.max(0,_),reflections:Math.max(0,m),steer:Math.max(0,p),tailColors:y?.length?y:tt.tail,headColors:S?.length?S:tt.head,poleColors:x?.length?x:tt.poles,roadColor:E??tt.road,roadOpacity:Math.min(1,Math.max(0,R)),lineColor:A??tt.lines,background:C??tt.background,dustColor:tt.dust,interactive:M,boosting:P},ct=(0,Zc.useRef)(I);ct.current=I;let N=(0,Zc.useRef)({onBoostStart:L,onBoostEnd:Y});return N.current={onBoostStart:L,onBoostEnd:Y},(0,Zc.useEffect)(()=>{let ht=Z.current;if(!ht)return;let St=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,W=new Qg({antialias:!0,alpha:!0,powerPreference:"high-performance"});W.outputColorSpace=Hs,W.autoClear=!1,W.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),ht.appendChild(W.domElement);let Rt=new Pc,xt=new gi(ct.current.fov,1,.1,1e4);xt.position.set(0,8,-5);let nt={uTime:{value:0},uCurvature:{value:1},uCurveA:{value:new on},uCurveB:{value:0},uFogNear:{value:vd*.22},uFogFar:{value:vd*.95},uTravel:{value:vd},uStretch:{value:0},uPixel:{value:.001}},ot=[],wt=[],Bt=(Lt,b,F,K={})=>{let j=new er({vertexShader:Lt,fragmentShader:b,uniforms:{...nt,...F},transparent:!0,depthWrite:!1,...K});return ot.push(j),j},zt=()=>({value:Array.from({length:Md},()=>new q(1,1,1))}),Xt=new Po(1,vd,1,220);Xt.rotateX(-Math.PI/2),Xt.translate(0,0,-vd/2),ot.push(Xt);let Vt={uWidth:{value:1},uRoadColor:{value:new q},uLineColor:{value:new q},uBackground:{value:new q},uRoadWidth:{value:10},uMedian:{value:2},uLanes:{value:3},uTransparent:{value:0},uOpacity:{value:1}},U=Bt(v5,y5,Vt,{transparent:!0,depthWrite:!0}),Ft=new ii(Xt,U);Ft.frustumCulled=!1,Ft.renderOrder=0,Ft.layers.enable(1),Rt.add(Ft);let Et=new sd(new Ic(new q(0,0,0),new q(0,0,-1)),24,1,7,!1);ot.push(Et);let Mt=(Lt,b,F)=>{let K=M3(Et),j=new Float32Array(Wc*2*4),X=new Float32Array(Wc*2*4),_t=new Float32Array(Wc*2),Pt=new Float32Array(Wc*2);for(let Jt=0;Jt<Wc;Jt++){let $t=[Math.random(),Math.random(),Math.random(),Math.random()],Kt=[Math.random(),Math.random(),Math.random(),Math.random()*Math.random()],le=Math.random();for(let Zt=0;Zt<2;Zt++){let se=Jt*2+Zt;j.set($t,se*4),X.set(Kt,se*4),_t[se]=Zt?.5:-.5,Pt[se]=le}}K.setAttribute("aSeedA",new hs(j,4)),K.setAttribute("aSeedB",new hs(X,4)),K.setAttribute("aPair",new hs(_t,1)),K.setAttribute("aTone",new hs(Pt,1)),K.instanceCount=0,ot.push(K);let qt={uRoadX:{value:0},uRoadWidth:{value:10},uLanes:{value:3},uDirection:{value:Lt},uSpeedRange:{value:new ue(...F)},uTrail:{value:1},uSize:{value:1},uColors:zt(),uColorCount:{value:1},uFade:{value:new ue(...b)}},kt=(Jt,$t,Kt,le)=>{let Zt=Bt(h5,d5,{...qt,uRadiusScale:{value:Jt},uSharp:{value:$t},uMirror:{value:Kt},uIntensity:{value:1},uCore:{value:0}},{depthTest:!Kt});wt.push(Zt);let se=new ii(K,Zt);return se.frustumCulled=!1,se.renderOrder=le,Kt||se.layers.enable(1),Rt.add(se),Zt};return{geometry:K,uniforms:qt,reflection:kt(2.1,1.2,1,1),core:kt(1,.85,0,3)}},z=Mt(1,[0,.6],[60,80]),Qt=Mt(-1,[1,.4],[120,160]),Nt=new nd(1,1,1,8,1,!0);ot.push(Nt);let It=M3(Nt),ie=new Float32Array(yd*2*4),Gt=new Float32Array(yd*2),D=new Float32Array(yd*2);for(let Lt=0;Lt<yd;Lt++)for(let b=0;b<2;b++){let F=Lt*2+b;ie.set([Math.random(),Math.random(),Math.random(),Math.random()],F*4),Gt[F]=Lt+(b?.5:0),D[F]=b?1:-1}It.setAttribute("aSeed",new hs(ie,4)),It.setAttribute("aIndex",new hs(Gt,1)),It.setAttribute("aSide",new hs(D,1)),It.instanceCount=0,ot.push(It);let T={uCount:{value:20},uEdge:{value:11},uHeight:{value:1},uColors:zt(),uColorCount:{value:1}},B=(Lt,b,F,K)=>{let j=Bt(p5,m5,{...T,uRadiusScale:{value:Lt},uSharp:{value:b},uMirror:{value:F},uIntensity:{value:1},uCore:{value:0}},{depthTest:!F});wt.push(j);let X=new ii(It,j);return X.frustumCulled=!1,X.renderOrder=K,F||X.layers.enable(1),Rt.add(X),j},J={reflection:B(2.4,1.2,1,1),core:B(1,.8,0,3)},Q=new tr,$=new Float32Array(xd*2*4),Ot=new Float32Array(xd*2);for(let Lt=0;Lt<xd;Lt++){let b=[Math.random(),Math.random(),Math.random(),Math.random()];$.set(b,Lt*8),$.set(b,Lt*8+4),Ot[Lt*2+1]=1}Q.setAttribute("position",new Wn(new Float32Array(xd*2*3),3)),Q.setAttribute("aSeed",new Wn($,4)),Q.setAttribute("aEnd",new Wn(Ot,1)),Q.setDrawRange(0,0),ot.push(Q);let pt={uSpread:{value:140},uColor:{value:new q(1,1,1)},uIntensity:{value:.5}},Ht=Bt(g5,_5,pt);wt.push(Ht);let Dt=new $h(Q,Ht);Dt.frustumCulled=!1,Dt.renderOrder=4,Rt.add(Dt);let bt=W.extensions.has("EXT_color_buffer_float")||W.extensions.has("EXT_color_buffer_half_float"),mt=Array.from({length:5},(Lt,b)=>{let F=new Zr(1,1,{type:bt?Ho:Kr,depthBuffer:b===0});return ot.push(F),F}),k=new Pc,H=new Bc(-1,1,1,-1,0,1),G=new Po(2,2);ot.push(G);let it=new ii(G);it.frustumCulled=!1,k.add(it);let O=(Lt,b)=>{let F=new er({vertexShader:x5,fragmentShader:Lt,uniforms:{uTexture:{value:null},uTexel:{value:new ue},uStrength:{value:1},uCeiling:{value:1},uLight:{value:0}},depthTest:!1,depthWrite:!1,...b});return ot.push(F),F},et=O(S5,{blending:ds}),ut=O(M5,{blending:ud,blendSrc:ps,blendDst:ps,blendSrcAlpha:ps,blendDstAlpha:ps}),dt=O(b5,{blending:ud,blendSrc:ps}),at=(Lt,b,F)=>{it.material=Lt,Lt.uniforms.uTexture.value=b.texture,Lt.uniforms.uTexel.value.set(1/b.width,1/b.height),W.setRenderTarget(F),W.render(k,H)},rt=new Ue,gt=0,lt={boost:0,held:!1,boosted:!1,fov:ct.current.fov,fovVelocity:0,steerX:0,steerY:0,pointerX:0,pointerY:0,weights:[0,0,0,0,0],visible:!0},Yt={tail:"",head:"",poles:"",surface:"",light:null},Tt=new q,st=0,yt=performance.now(),ft=!0,Ut=Lt=>{let b=Lt.tailColors.join();b!==Yt.tail&&(Yt.tail=b,WS(z.uniforms.uColors,z.uniforms.uColorCount,Lt.tailColors));let F=Lt.headColors.join();F!==Yt.head&&(Yt.head=F,WS(Qt.uniforms.uColors,Qt.uniforms.uColorCount,Lt.headColors));let K=Lt.poleColors.join();K!==Yt.poles&&(Yt.poles=K,WS(T.uColors,T.uColorCount,Lt.poleColors));let j=[Lt.roadColor,Lt.lineColor,Lt.background,Lt.dustColor].join();if(j!==Yt.surface){Yt.surface=j,Vt.uRoadColor.value.fromArray(Sd(Lt.roadColor)),Vt.uLineColor.value.fromArray(Sd(Lt.lineColor)),pt.uColor.value.fromArray(Sd(Lt.dustColor));let X=Lt.background==="transparent",_t=X?[0,0,0]:Sd(Lt.background);Vt.uBackground.value.fromArray(_t),Vt.uTransparent.value=X?1:0,rt.setRGB(..._t,Hs),gt=X?0:1}Yt.light!==Lt.light&&(Yt.light=Lt.light,wt.forEach(X=>{X.blending=Lt.light?wa:ld,X.needsUpdate=!0}),dt.blendDst=Lt.light?zl:ps,dt.blendSrcAlpha=Lt.light?ps:ng,dt.blendDstAlpha=Lt.light?zl:ps,dt.uniforms.uLight.value=Lt.light?1:0)},Ct=!1,At=()=>{if(!ht.clientWidth||!ht.clientHeight)return;let Lt=Math.max(1,ht.clientWidth),b=Math.max(1,ht.clientHeight);W.setSize(Lt,b,!1),mt.forEach((F,K)=>F.setSize(Math.max(1,Math.round(Lt/2**(K+1))),Math.max(1,Math.round(b/2**(K+1))))),xt.aspect=Lt/b,xt.updateProjectionMatrix()},ae=()=>{Ct=!0,jt()},ne=Lt=>{if(st=0,Ct&&(Ct=!1,At()),!ft)return;let b=ct.current,F=Math.min(.05,Math.max(.001,(Lt-yt)/1e3));yt=Lt,Ut(b);let K=lt.held&&b.interactive||b.boosting?1:0;lt.boost+=(K-lt.boost)*(1-Math.exp(-F/(K>lt.boost?.28:.85)));let j=b.speed*(St?.3:1)*(1+(b.boost-1)*lt.boost);nt.uTime.value+=F*j,nt.uStretch.value=lt.boost*1.1,nt.uCurvature.value=b.curvature;let X=x3.indexOf(b.curve)-1,_t=1-Math.exp(-F/.6);lt.weights=lt.weights.map((Zt,se)=>Zt+((se===X?1:0)-Zt)*_t),nt.uCurveA.value.set(lt.weights[0],lt.weights[1],lt.weights[2],lt.weights[3]),nt.uCurveB.value=lt.weights[4];let Pt=b.roadWidth/2+b.medianWidth/2,qt=.45+.55*b.roadOpacity;[z,Qt].forEach((Zt,se)=>{Zt.geometry.instanceCount=b.density*2,Zt.uniforms.uRoadX.value=se?Pt:-Pt,Zt.uniforms.uRoadWidth.value=b.roadWidth,Zt.uniforms.uLanes.value=b.lanes,Zt.uniforms.uTrail.value=b.trailLength,Zt.uniforms.uSize.value=b.lightSize,Zt.core.uniforms.uIntensity.value=b.light?.95:1+.35*lt.boost,Zt.core.uniforms.uCore.value=b.light?0:.75,Zt.reflection.uniforms.uIntensity.value=b.reflections*(b.light?.22:.42)*qt}),It.instanceCount=b.poles*2,T.uCount.value=Math.max(1,b.poles),T.uEdge.value=b.roadWidth+b.medianWidth/2+.8,T.uHeight.value=b.poleHeight,J.core.uniforms.uIntensity.value=b.light?.9:1,J.core.uniforms.uCore.value=b.light?0:.6,J.reflection.uniforms.uIntensity.value=b.reflections*(b.light?.2:.38)*qt,Q.setDrawRange(0,b.dust*2),pt.uIntensity.value=(b.light?.35:.45)*(1+lt.boost),pt.uSpread.value=(b.roadWidth*2+b.medianWidth)*5,Vt.uWidth.value=b.roadWidth*2+b.medianWidth+3,Vt.uRoadWidth.value=b.roadWidth,Vt.uMedian.value=b.medianWidth,Vt.uLanes.value=b.lanes,Vt.uOpacity.value=b.roadOpacity,U.depthWrite=b.roadOpacity>.5;let kt=St?b.fov:b.fov+(b.boostFov-b.fov)*lt.boost;lt.fovVelocity+=((kt-lt.fov)*90-lt.fovVelocity*13)*F,lt.fov+=lt.fovVelocity*F,xt.fov=lt.fov,nt.uPixel.value=2*Math.tan(lt.fov*Math.PI/360)/Math.max(1,W.domElement.height);let Jt=1-Math.exp(-F/.35),$t=b.interactive?b.steer:0;lt.steerX+=(lt.pointerX*$t-lt.steerX)*Jt,lt.steerY+=(lt.pointerY*$t-lt.steerY)*Jt,xt.position.set(lt.steerX*b.roadWidth*.45,8-lt.steerY*2.5,-5);let Kt=E5(nt.uTime.value,b.curvature),le=1-lt.weights.reduce((Zt,se)=>Zt+se,0);if(Tt.set(0,0,-10*le),Kt.forEach((Zt,se)=>{Tt.x+=Zt[0]*lt.weights[se],Tt.y+=Zt[1]*lt.weights[se],Tt.z+=Zt[2]*lt.weights[se]}),Tt.x+=lt.steerX*2.5,Tt.add(xt.position),xt.lookAt(Tt),xt.updateProjectionMatrix(),W.setRenderTarget(null),W.setClearColor(rt,gt),W.clear(),W.render(Rt,xt),b.glow>0){let Zt=nt.uPixel.value;nt.uPixel.value=Zt*(W.domElement.height/mt[0].height),xt.layers.set(1),U.colorWrite=!1,W.setRenderTarget(mt[0]),W.setClearColor(0,0),W.clear(),W.render(Rt,xt),U.colorWrite=!0,xt.layers.set(0),nt.uPixel.value=Zt;for(let se=1;se<mt.length;se++)at(et,mt[se-1],mt[se]);for(let se=mt.length-1;se>1;se--)at(ut,mt[se],mt[se-1]);dt.uniforms.uStrength.value=b.glow*(b.light?.5:1.4),dt.uniforms.uCeiling.value=b.glow*(b.light?.3:.5),at(dt,mt[1],null)}lt.visible&&(st=requestAnimationFrame(ne))},jt=()=>{st||!ft||!lt.visible||(yt=performance.now(),st=requestAnimationFrame(ne))},ce=Lt=>{lt.held!==Lt&&(lt.held=Lt,ct.current.interactive&&(Lt?N.current.onBoostStart?.():N.current.onBoostEnd?.()))},oe=Lt=>{Lt.button!==0&&Lt.pointerType==="mouse"||ce(!0)},fe=()=>ce(!1),re=Lt=>{let b=ht.getBoundingClientRect();lt.pointerX=(Lt.clientX-b.left)/b.width*2-1,lt.pointerY=(Lt.clientY-b.top)/b.height*2-1},De=()=>{lt.pointerX=0,lt.pointerY=0},ve=Lt=>{ct.current.interactive&&Lt.preventDefault()},Le=new ResizeObserver(ae);Le.observe(ht);let vn=new IntersectionObserver(Lt=>{lt.visible=Lt.some(b=>b.isIntersecting),lt.visible&&jt()});return vn.observe(ht),ht.addEventListener("pointerdown",oe),ht.addEventListener("pointermove",re),ht.addEventListener("pointerleave",De),ht.addEventListener("contextmenu",ve),window.addEventListener("pointerup",fe),window.addEventListener("pointercancel",fe),window.addEventListener("blur",fe),ae(),()=>{ft=!1,cancelAnimationFrame(st),Le.disconnect(),vn.disconnect(),ht.removeEventListener("pointerdown",oe),ht.removeEventListener("pointermove",re),ht.removeEventListener("pointerleave",De),ht.removeEventListener("contextmenu",ve),window.removeEventListener("pointerup",fe),window.removeEventListener("pointercancel",fe),window.removeEventListener("blur",fe),ot.forEach(Lt=>Lt.dispose()),W.dispose(),W.domElement.remove()}},[]),(0,E3.jsx)("div",{ref:Z,className:`hyperspeed${V?` ${V}`:""}`,style:w})},T3=A5;var Ys=hn(gs());var ZS=hn(Ai()),w5=24e5,s_=4,A3=8,w3=90,R5=`#version 300 es
const vec2 corners[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
void main() {
  gl_Position = vec4(corners[gl_VertexID], 0.0, 1.0);
}`,C5=`#version 300 es
precision highp float;
uniform sampler2D uPrev;
uniform vec2 uSize;
uniform vec2 uCss;
uniform vec2 uFrom;
uniform vec2 uTo;
uniform vec2 uPush;
uniform float uRadius;
uniform float uDecay;
out vec4 fragColor;

void main() {
  vec2 cell = gl_FragCoord.xy / uSize;
  vec2 p = vec2(cell.x, 1.0 - cell.y) * uCss;
  vec2 seg = uTo - uFrom;
  float len2 = max(dot(seg, seg), 1e-6);
  float h = clamp(dot(p - uFrom, seg) / len2, 0.0, 1.0);
  vec2 gap = p - uFrom - seg * h;
  vec2 delta = uPush * exp(-dot(gap, gap) / (uRadius * uRadius));
  vec2 src = p - delta;
  vec2 prev = texture(uPrev, vec2(src.x / uCss.x, 1.0 - src.y / uCss.y)).xy;
  fragColor = vec4((prev + delta) * uDecay, 0.0, 1.0);
}`,D5=`#version 300 es
precision highp float;
uniform vec2 uCss;
uniform vec2 uCanvas;
uniform float uBlock;
uniform float uFlow;
uniform float uSpin;
uniform vec2 uOffset;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uContrast;
uniform float uLighting;
uniform float uSwirl;
uniform float uScale;
uniform int uDetail;
uniform sampler2D uField;
uniform float uFieldOn;
uniform vec4 uTwirls[${s_}];
uniform float uReveal;
uniform float uLight;
uniform float uOpacity;
out vec4 fragColor;

vec3 paint(vec2 screenSize, vec2 coords) {
  vec2 uv = (coords - 0.5 * screenSize) / length(screenSize) - uOffset;
  float radius = length(uv);
  float speed = uSpin + 302.2;
  float angle = atan(uv.y, uv.x) + speed - 20.0 * (uSwirl * radius + (1.0 - uSwirl));
  vec2 mid = (screenSize / length(screenSize)) / 2.0;
  uv = vec2(radius * cos(angle) + mid.x, radius * sin(angle) + mid.y) - mid;

  uv *= 30.0 / uScale;
  speed = uFlow;
  vec2 uv2 = vec2(uv.x + uv.y);
  for (int i = 0; i < 8; i++) {
    if (i >= uDetail) break;
    uv2 += sin(max(uv.x, uv.y)) + uv;
    uv += 0.5 * vec2(cos(5.1123314 + 0.353 * uv2.y + speed * 0.131121), sin(uv2.x - 0.113 * speed));
    uv -= cos(uv.x + uv.y) - sin(uv.x * 0.711 - uv.y);
  }

  float contrastMod = 0.25 * uContrast + 0.5 * uSwirl + 1.2;
  float amount = min(2.0, max(0.0, length(uv) * 0.035 * contrastMod));
  float c1 = max(0.0, 1.0 - contrastMod * abs(1.0 - amount));
  float c2 = max(0.0, 1.0 - contrastMod * abs(amount));
  float c3 = 1.0 - min(1.0, c1 + c2);
  float light = (uLighting - 0.2) * max(c1 * 5.0 - 4.0, 0.0) + uLighting * max(c2 * 5.0 - 4.0, 0.0);
  vec3 gap = uLight > 0.5 ? mix(uColor3, vec3(1.0), 0.9) : uColor3;
  float base = 0.3 / uContrast;
  vec3 color = base * uColor1 + (1.0 - base) * (uColor1 * c1 + uColor2 * c2 + gap * c3) + light;
  return mix(gap, color, uReveal);
}

void main() {
  vec2 cell = floor(gl_FragCoord.xy) + 0.5;
  vec2 p = vec2(cell.x, uCanvas.y - cell.y) * uBlock;
  if (uFieldOn > 0.5) {
    p -= texture(uField, vec2(p.x / uCss.x, 1.0 - p.y / uCss.y)).xy;
  }
  for (int i = 0; i < ${s_}; i++) {
    vec4 twirl = uTwirls[i];
    if (twirl.w <= 0.0) continue;
    vec2 rel = p - twirl.xy;
    float turn = twirl.z * exp(-dot(rel, rel) / (twirl.w * twirl.w));
    float c = cos(turn);
    float s = sin(turn);
    p = twirl.xy + vec2(c * rel.x - s * rel.y, s * rel.x + c * rel.y);
  }
  vec3 color = paint(uCss, vec2(p.x, uCss.y - p.y));
  float grain = (fract(52.9829189 * fract(dot(cell, vec2(0.06711056, 0.00583715)))) - 0.5) / 255.0;
  color = clamp(color + grain, 0.0, 1.0);
  fragColor = vec4(color * uOpacity, uOpacity);
}`,U5=`#version 300 es
precision highp float;
uniform sampler2D uPaint;
uniform vec2 uCanvas;
uniform vec2 uSource;
uniform float uDevice;
uniform float uCrt;
out vec4 fragColor;

float smoother(float edge0, float edge1, float x) {
  float t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

void main() {
  vec2 device = vec2(gl_FragCoord.x, uCanvas.y - gl_FragCoord.y);
  vec2 cell = floor(device / uDevice);
  vec4 texel = texture(uPaint, vec2((cell.x + 0.5) / uSource.x, 1.0 - (cell.y + 0.5) / uSource.y));
  vec3 color = texel.rgb;
  float glow = dot(color, vec3(0.2126, 0.7152, 0.0722));
  float period = max(uDevice, 3.0);
  float row = fract(device.y / period);
  float line = smoother(0.5, 0.92, row) * (1.0 - smoother(0.92, 1.0, row));
  color *= 1.0 - uCrt * 0.34 * line * (1.0 - 0.7 * glow);
  vec2 screen = gl_FragCoord.xy / uCanvas;
  float edge = smoother(0.0, 0.18, screen.x) * smoother(0.0, 0.18, 1.0 - screen.x);
  edge *= smoother(0.0, 0.24, screen.y) * smoother(0.0, 0.24, 1.0 - screen.y);
  color *= mix(1.0, 0.78 + 0.22 * edge, uCrt);
  color *= 1.0 + uCrt * 0.1;
  fragColor = vec4(min(color, vec3(texel.a)), texel.a);
}`,vi=(e,t,n)=>Math.min(n,Math.max(t,e)),YS=e=>{let t=String(e||"").trim(),n=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(t);if(n){let r=n[1].length===3?n[1].replace(/./g,s=>s+s):n[1];return[0,2,4].map(s=>parseInt(r.slice(s,s+2),16)/255)}let i=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(t);return i?[i[1],i[2],i[3]].map(r=>vi(parseFloat(r)/255,0,1)):null},R3=(e,t,n)=>{let i=e.createShader(t);return i?(e.shaderSource(i,n),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS)?i:(console.error(e.getShaderInfoLog(i)),e.deleteShader(i),null)):null},qS=(e,t)=>{let n=R3(e,e.VERTEX_SHADER,R5),i=R3(e,e.FRAGMENT_SHADER,t),r=n&&i?e.createProgram():null;if(!n||!i||!r)return n&&e.deleteShader(n),i&&e.deleteShader(i),null;if(e.attachShader(r,n),e.attachShader(r,i),e.linkProgram(r),e.deleteShader(n),e.deleteShader(i),!e.getProgramParameter(r,e.LINK_STATUS))return console.error(e.getProgramInfoLog(r)),e.deleteProgram(r),null;let s={},a=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let o=0;o<a;o++){let l=e.getActiveUniform(r,o);l&&(s[l.name.replace(/\[0\]$/,"")]=e.getUniformLocation(r,l.name))}return{program:r,uniforms:s}},r_=e=>{let t=vi(e,0,1);return t*t*t*(t*(t*6-15)+10)},O5=({color1:e="#DE443B",color2:t="#006BB4",color3:n="#162325",contrast:i=3.5,lighting:r=.4,swirl:s=.25,speed:a=1,rotationSpeed:o=0,scale:l=1,detail:u=5,offset:c=[0,0],pixelSize:d=1.5,crt:f=0,mouseInteraction:h=!0,mouseStrength:g=1,clickSwirl:_=!0,intro:m=!0,lightMode:p=!1,opacity:y=1,maxDevicePixelRatio:S=2,className:x="",style:E})=>{let R=(0,Ys.useRef)(null),A=(0,Ys.useRef)(null),C=(0,Ys.useRef)(null),[v,M]=(0,Ys.useState)(0),P={color1:YS(e)||[.871,.267,.231],color2:YS(t)||[0,.42,.706],color3:YS(n)||[.086,.137,.145],contrast:vi(i,.5,10),lighting:vi(r,0,1.5),swirl:vi(s,0,1),speed:Math.max(0,a),rotation:vi(o,-10,10),scale:vi(l,.2,5),detail:vi(Math.round(u),1,8),offset:Array.isArray(c)?[Number(c[0])||0,Number(c[1])||0]:[0,0],pixelSize:vi(d,0,24),crt:vi(f,0,1),mouse:h,strength:vi(g,0,3),clickSwirl:_,intro:m,light:p,opacity:vi(y,0,1),maxRatio:vi(S,.5,3)},L=(0,Ys.useRef)(P);return L.current=P,(0,Ys.useEffect)(()=>{C.current?.()}),(0,Ys.useEffect)(()=>{let Y=R.current,V=A.current;if(!Y||!V)return;let w=V.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"high-performance"}),Z=w?qS(w,D5):null,tt=w?qS(w,U5):null;if(!w||!Z||!tt)return;let ct=!!(w.getExtension("EXT_color_buffer_float")||w.getExtension("EXT_color_buffer_half_float"))?qS(w,C5):null,N=window.matchMedia("(prefers-reduced-motion: reduce)").matches,ht=w.createVertexArray(),St={cssWidth:1,cssHeight:1,block:1,device:1,width:1,height:1,crt:!1},W={texture:w.createTexture(),framebuffer:w.createFramebuffer(),width:0,height:0},Rt={width:0,height:0,targets:[],energy:0},xt={x:0,y:0,lastX:0,lastY:0,vx:0,inside:!1,ready:!1},nt={value:0},ot=[],wt=new Float32Array(s_*4),Bt=14,zt=0,Xt=L.current.intro&&!N&&v===0?0:1,Vt=0,U=0,Ft=!0,Et=document.visibilityState!=="hidden",Mt=!1,z=(k,H)=>{let G=w.createTexture();w.bindTexture(w.TEXTURE_2D,G),w.texImage2D(w.TEXTURE_2D,0,w.RG16F,k,H,0,w.RG,w.HALF_FLOAT,null),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_MIN_FILTER,w.LINEAR),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_MAG_FILTER,w.LINEAR),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_WRAP_S,w.CLAMP_TO_EDGE),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_WRAP_T,w.CLAMP_TO_EDGE);let it=w.createFramebuffer();return w.bindFramebuffer(w.FRAMEBUFFER,it),w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,G,0),w.clearColor(0,0,0,0),w.clear(w.COLOR_BUFFER_BIT),w.bindFramebuffer(w.FRAMEBUFFER,null),{texture:G,framebuffer:it}},Qt=()=>{Rt.targets.forEach(k=>{w.deleteTexture(k.texture),w.deleteFramebuffer(k.framebuffer)}),Rt.targets=[],Rt.width=0,Rt.height=0,Rt.energy=0},Nt=!1,It=()=>{if(!Y.clientWidth||!Y.clientHeight)return;let k=L.current,H=Math.max(1,Y.clientWidth),G=Math.max(1,Y.clientHeight),it=Math.min(window.devicePixelRatio||1,k.maxRatio),O=Math.ceil(Math.sqrt(H*G*it*it/w5)-.05),et=Math.max(k.pixelSize>0?Math.round(k.pixelSize*it):1,O,1),ut=Math.max(1,Math.ceil(H*it/et)),dt=Math.max(1,Math.ceil(G*it/et)),at=k.crt>0,rt=at?ut*et:ut,gt=at?dt*et:dt;if((V.width!==rt||V.height!==gt)&&(V.width=rt,V.height=gt),V.style.width=`${ut*et/it}px`,V.style.height=`${dt*et/it}px`,V.style.imageRendering=!at&&k.pixelSize>0&&et>=2?"pixelated":"auto",at&&(W.width!==ut||W.height!==dt)&&(w.bindTexture(w.TEXTURE_2D,W.texture),w.texImage2D(w.TEXTURE_2D,0,w.RGBA8,ut,dt,0,w.RGBA,w.UNSIGNED_BYTE,null),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_MIN_FILTER,w.NEAREST),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_MAG_FILTER,w.NEAREST),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_WRAP_S,w.CLAMP_TO_EDGE),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_WRAP_T,w.CLAMP_TO_EDGE),w.bindFramebuffer(w.FRAMEBUFFER,W.framebuffer),w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,W.texture,0),w.bindFramebuffer(w.FRAMEBUFFER,null),W.width=ut,W.height=dt),St.cssWidth=H,St.cssHeight=G,St.block=et/it,St.device=et,St.width=ut,St.height=dt,St.crt=at,!ct)return;let lt=vi(Math.ceil(H/A3),8,320),Yt=vi(Math.ceil(G/A3),8,320);lt===Rt.width&&Yt===Rt.height||(Qt(),Rt.width=lt,Rt.height=Yt,Rt.targets=[z(lt,Yt),z(lt,Yt)])},ie=()=>{Nt=!0,T()},Gt=(k,H,G,it,O,et,ut)=>{if(!ct)return;let[dt,at]=Rt.targets;w.bindFramebuffer(w.FRAMEBUFFER,at.framebuffer),w.viewport(0,0,Rt.width,Rt.height),w.useProgram(ct.program),w.activeTexture(w.TEXTURE0),w.bindTexture(w.TEXTURE_2D,dt.texture);let rt=ct.uniforms;w.uniform1i(rt.uPrev,0),w.uniform2f(rt.uSize,Rt.width,Rt.height),w.uniform2f(rt.uCss,St.cssWidth,St.cssHeight),w.uniform2f(rt.uFrom,k,H),w.uniform2f(rt.uTo,G,it),w.uniform2f(rt.uPush,O,et),w.uniform1f(rt.uRadius,w3),w.uniform1f(rt.uDecay,ut),w.drawArrays(w.TRIANGLES,0,3),Rt.targets=[at,dt]},D=k=>{if(Vt=0,Nt&&(Nt=!1,It()),Mt)return;let H=L.current,G=vi((k-U)/1e3||0,0,.05);U=Math.max(U,k);let it=N?.2:1;Bt+=G*H.speed*7*it,zt+=G*H.rotation*.2*it,Xt<1&&(Xt=Math.min(1,Xt+G/2.2));let O=H.mouse&&xt.inside,et=O?(xt.x/St.cssWidth-.5)*.35*H.strength:0;if(nt.value+=(et-nt.value)*(1-Math.exp(-G/.8)),w.bindVertexArray(ht),ct&&Rt.targets.length){let lt=xt.x-xt.lastX,Yt=xt.y-xt.lastY,Tt=O&&xt.ready&&(lt!==0||Yt!==0),st=Math.exp(-G/1.6);if(Tt||Rt.energy>.05){let yt=.85*H.strength*(N?.4:1),ft=Tt?Math.hypot(lt,Yt)*yt:0,Ut=Math.max(1,Math.ceil(ft/(w3*.3)));for(let Ct=0;Ct<Ut;Ct++){let At=Ct/Ut,ae=(Ct+1)/Ut;Gt(xt.lastX+lt*At,xt.lastY+Yt*At,xt.lastX+lt*ae,xt.lastY+Yt*ae,Tt?lt*(ae-At)*yt:0,Tt?Yt*(ae-At)*yt:0,Ct===Ut-1?st:1)}Rt.energy=Rt.energy*st+ft,Rt.energy<=.05&&Rt.targets.forEach(Ct=>{w.bindFramebuffer(w.FRAMEBUFFER,Ct.framebuffer),w.clearColor(0,0,0,0),w.clear(w.COLOR_BUFFER_BIT)})}}xt.lastX=xt.x,xt.lastY=xt.y;for(let lt=ot.length-1;lt>=0;lt--)ot[lt].age+=G,ot[lt].age>=3.2&&ot.splice(lt,1);wt.fill(0),ot.forEach((lt,Yt)=>{let Tt=lt.age,st=r_(Tt/.25),yt=1-r_((Tt-.25)/2.95);wt[Yt*4]=lt.x,wt[Yt*4+1]=lt.y,wt[Yt*4+2]=lt.direction*1.9*st*yt,wt[Yt*4+3]=150*(1+.6*r_(Tt/3.2))});let dt=1-(1-Math.pow(1-Xt,3));w.bindFramebuffer(w.FRAMEBUFFER,St.crt?W.framebuffer:null),w.viewport(0,0,St.width,St.height),w.useProgram(Z.program);let at=Z.uniforms;if(w.activeTexture(w.TEXTURE0),w.bindTexture(w.TEXTURE_2D,Rt.targets.length?Rt.targets[0].texture:null),w.uniform1i(at.uField,0),w.uniform1f(at.uFieldOn,Rt.targets.length&&Rt.energy>.05?1:0),w.uniform2f(at.uCss,St.cssWidth,St.cssHeight),w.uniform2f(at.uCanvas,St.width,St.height),w.uniform1f(at.uBlock,St.block),w.uniform1f(at.uFlow,Bt),w.uniform1f(at.uSpin,-.4+zt+nt.value+2.6*dt*dt),w.uniform2f(at.uOffset,H.offset[0],H.offset[1]),w.uniform3f(at.uColor1,H.color1[0],H.color1[1],H.color1[2]),w.uniform3f(at.uColor2,H.color2[0],H.color2[1],H.color2[2]),w.uniform3f(at.uColor3,H.color3[0],H.color3[1],H.color3[2]),w.uniform1f(at.uContrast,H.contrast),w.uniform1f(at.uLighting,H.lighting),w.uniform1f(at.uSwirl,Math.min(1,H.swirl+.55*dt)),w.uniform1f(at.uScale,H.scale),w.uniform1i(at.uDetail,H.detail),w.uniform4fv(at.uTwirls,wt),w.uniform1f(at.uReveal,r_(Xt/.45)),w.uniform1f(at.uLight,H.light?1:0),w.uniform1f(at.uOpacity,H.opacity),w.drawArrays(w.TRIANGLES,0,3),St.crt){w.bindFramebuffer(w.FRAMEBUFFER,null),w.viewport(0,0,V.width,V.height),w.useProgram(tt.program);let lt=tt.uniforms;w.activeTexture(w.TEXTURE0),w.bindTexture(w.TEXTURE_2D,W.texture),w.uniform1i(lt.uPaint,0),w.uniform2f(lt.uCanvas,V.width,V.height),w.uniform2f(lt.uSource,St.width,St.height),w.uniform1f(lt.uDevice,St.device),w.uniform1f(lt.uCrt,H.crt),w.drawArrays(w.TRIANGLES,0,3)}let rt=Math.abs(et-nt.value)>5e-4||Rt.energy>.05||ot.length>0;(H.speed>0||H.rotation!==0||Xt<1||rt)&&Ft&&Et&&(Vt=requestAnimationFrame(D))},T=()=>{Vt||Mt||!Ft||!Et||(U=performance.now(),Vt=requestAnimationFrame(D))};C.current=()=>{ie(),T()};let B=k=>{let H=Y.getBoundingClientRect();return{x:k.clientX-H.left,y:k.clientY-H.top,inside:k.clientX>=H.left&&k.clientX<=H.right&&k.clientY>=H.top&&k.clientY<=H.bottom}},J=k=>{let H=B(k);(!xt.ready||!xt.inside)&&(xt.lastX=H.x,xt.lastY=H.y),xt.vx=H.x-xt.x,xt.x=H.x,xt.y=H.y,xt.inside=H.inside,xt.ready=!0,T()},Q=k=>{let H=L.current,G=B(k);!G.inside||!H.clickSwirl||N||(ot.push({x:G.x,y:G.y,age:0,direction:xt.vx<0?1:-1}),ot.length>s_&&ot.shift(),T())},$=()=>{xt.inside=!1,T()},Ot=k=>{k.pointerType!=="mouse"&&$()};window.addEventListener("pointermove",J,{passive:!0}),window.addEventListener("pointerdown",Q,{passive:!0}),window.addEventListener("pointerup",Ot,{passive:!0}),window.addEventListener("pointercancel",Ot,{passive:!0}),document.documentElement.addEventListener("pointerleave",$);let pt=k=>{k.preventDefault(),Mt=!0,cancelAnimationFrame(Vt),Vt=0},Ht=()=>M(k=>k+1);V.addEventListener("webglcontextlost",pt),V.addEventListener("webglcontextrestored",Ht);let Dt=new ResizeObserver(()=>{ie(),T()});Dt.observe(Y);let bt=new IntersectionObserver(k=>{Ft=k.some(H=>H.isIntersecting),T()});bt.observe(Y);let mt=()=>{Et=document.visibilityState!=="hidden",T()};return document.addEventListener("visibilitychange",mt),ie(),T(),()=>{cancelAnimationFrame(Vt),C.current=null,Dt.disconnect(),bt.disconnect(),window.removeEventListener("pointermove",J),window.removeEventListener("pointerdown",Q),window.removeEventListener("pointerup",Ot),window.removeEventListener("pointercancel",Ot),document.documentElement.removeEventListener("pointerleave",$),document.removeEventListener("visibilitychange",mt),V.removeEventListener("webglcontextlost",pt),V.removeEventListener("webglcontextrestored",Ht),w.isContextLost()||(Qt(),w.deleteTexture(W.texture),w.deleteFramebuffer(W.framebuffer),w.deleteVertexArray(ht),w.deleteProgram(Z.program),w.deleteProgram(tt.program),ct&&w.deleteProgram(ct.program))}},[v]),(0,ZS.jsx)("div",{ref:R,className:`balatro${x?` ${x}`:""}`,style:E,children:(0,ZS.jsx)("canvas",{ref:A,className:"balatro__canvas","aria-hidden":"true"})})},C3=O5;var Bi=hn(Ai());window.mountReadingSideRays=e=>{(0,Kl.createRoot)(e).render((0,Bi.jsx)(bw,{origin:"top-left",dust:1}))};window.mountReadingStrokeText=(e,t,n,i,r)=>{let s=(0,Kl.createRoot)(e);return s.render((0,Bi.jsx)(x2,{text:t,fontSize:n,fontWeight:600,fontFamily:"Microsoft YaHei, sans-serif",letterSpacing:0,strokeColor:i,fillColor:"#ffffff",strokeWidth:.65,drawDuration:.32,fillDelay:.04,stagger:.025,wipeFrom:r?"right":"left",reverse:r})),()=>s.unmount()};window.mountWorldGlowCursor=e=>{(0,Kl.createRoot)(e).render((0,Bi.jsx)(R1,{color:"#69e6f1",secondaryColor:"#335dce",quality:"medium",maxDevicePixelRatio:1}))};window.mountReadingOceanEffects=(e,t,n)=>{let i=(0,Kl.createRoot)(e),r=(0,Kl.createRoot)(t);return i.render((0,Bi.jsx)(C2,{particleCount:innerWidth<=760?6500:14e3,particleSpread:12,particleBaseSize:54,alphaParticles:!0,pixelRatio:1,hoverEffect:"repel",particleHoverFactor:1.1,pageDepthRef:n})),r.render((0,Bi.jsx)(R1,{color:"#69e6f1",secondaryColor:"#335dce",quality:"medium",maxDevicePixelRatio:1})),()=>{i.unmount(),r.unmount()}};window.mountReadingPortalTransition=e=>{let t=(0,Kl.createRoot)(e);return t.render((0,Bi.jsxs)(Bi.Fragment,{children:[(0,Bi.jsx)(T3,{boosting:!0,boost:2.3,speed:1.4,density:72,trailLength:.8,lightSize:1.3,poles:0,dust:120,glow:.65,reflections:0,roadOpacity:0,tailColors:["#69e6f1","#3176da","#c6ffff"],headColors:["#b9ffff","#529eff","#48d1ee"]}),(0,Bi.jsxs)("div",{className:"reading-portal",children:[(0,Bi.jsx)("div",{className:"reading-portal-water",children:(0,Bi.jsx)(C3,{color1:"#76f6fa",color2:"#264eac",color3:"#060d25",swirl:.48,rotationSpeed:4.2,speed:2.2,intro:!1,mouseInteraction:!1,clickSwirl:!1,maxDevicePixelRatio:1})}),(0,Bi.jsx)("div",{className:"reading-portal-rim"})]})]})),()=>t.unmount()};})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
