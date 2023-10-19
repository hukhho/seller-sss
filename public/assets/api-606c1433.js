import{m as kt}from"./index-57d11ccb.js";function Et(t,e){return function(){return t.apply(e,arguments)}}const{toString:Tt}=Object.prototype,{getPrototypeOf:Y}=Object,Z=(t=>e=>{const n=Tt.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),$=t=>(t=t.toLowerCase(),e=>Z(e)===t),I=t=>e=>typeof e===t,{isArray:C}=Array,D=I("undefined");function Gt(t){return t!==null&&!D(t)&&t.constructor!==null&&!D(t.constructor)&&g(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const St=$("ArrayBuffer");function It(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&St(t.buffer),e}const Ht=I("string"),g=I("function"),Ot=I("number"),tt=t=>t!==null&&typeof t=="object",vt=t=>t===!0||t===!1,_=t=>{if(Z(t)!=="object")return!1;const e=Y(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Mt=$("Date"),qt=$("File"),zt=$("Blob"),Jt=$("FileList"),Vt=t=>tt(t)&&g(t.pipe),Wt=t=>{const e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||Tt.call(t)===e||g(t.toString)&&t.toString()===e)},Kt=$("URLSearchParams"),Xt=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function L(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),C(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const o=n?Object.getOwnPropertyNames(t):Object.keys(t),i=o.length;let l;for(r=0;r<i;r++)l=o[r],e.call(null,t[l],l,t)}}function yt(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const wt=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),bt=t=>!D(t)&&t!==wt;function W(){const{caseless:t}=bt(this)&&this||{},e={},n=(r,s)=>{const o=t&&yt(e,s)||s;_(e[o])&&_(r)?e[o]=W(e[o],r):_(r)?e[o]=W({},r):C(r)?e[o]=r.slice():e[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&L(arguments[r],n);return e}const Qt=(t,e,n,{allOwnKeys:r}={})=>(L(e,(s,o)=>{n&&g(s)?t[o]=Et(s,n):t[o]=s},{allOwnKeys:r}),t),Yt=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Zt=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},te=(t,e,n,r)=>{let s,o,i;const l={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),o=s.length;o-- >0;)i=s[o],(!r||r(i,t,e))&&!l[i]&&(e[i]=t[i],l[i]=!0);t=n!==!1&&Y(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},ee=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},ne=t=>{if(!t)return null;if(C(t))return t;let e=t.length;if(!Ot(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},re=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Y(Uint8Array)),se=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const o=s.value;e.call(t,o[0],o[1])}},oe=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},ie=$("HTMLFormElement"),ae=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ot=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),ce=$("RegExp"),Pt=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};L(n,(s,o)=>{e(s,o,t)!==!1&&(r[o]=s)}),Object.defineProperties(t,r)},ue=t=>{Pt(t,(e,n)=>{if(g(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(g(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},le=(t,e)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return C(t)?r(t):r(String(t).split(e)),n},de=()=>{},pe=(t,e)=>(t=+t,Number.isFinite(t)?t:e),q="abcdefghijklmnopqrstuvwxyz",it="0123456789",$t={DIGIT:it,ALPHA:q,ALPHA_DIGIT:q+q.toUpperCase()+it},fe=(t=16,e=$t.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function he(t){return!!(t&&g(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const me=t=>{const e=new Array(10),n=(r,s)=>{if(tt(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const o=C(r)?[]:{};return L(r,(i,l)=>{const f=n(i,s+1);!D(f)&&(o[l]=f)}),e[s]=void 0,o}}return r};return n(t,0)},c={isArray:C,isArrayBuffer:St,isBuffer:Gt,isFormData:Wt,isArrayBufferView:It,isString:Ht,isNumber:Ot,isBoolean:vt,isObject:tt,isPlainObject:_,isUndefined:D,isDate:Mt,isFile:qt,isBlob:zt,isRegExp:ce,isFunction:g,isStream:Vt,isURLSearchParams:Kt,isTypedArray:re,isFileList:Jt,forEach:L,merge:W,extend:Qt,trim:Xt,stripBOM:Yt,inherits:Zt,toFlatObject:te,kindOf:Z,kindOfTest:$,endsWith:ee,toArray:ne,forEachEntry:se,matchAll:oe,isHTMLForm:ie,hasOwnProperty:ot,hasOwnProp:ot,reduceDescriptors:Pt,freezeMethods:ue,toObjectSet:le,toCamelCase:ae,noop:de,toFiniteNumber:pe,findKey:yt,global:wt,isContextDefined:bt,ALPHABET:$t,generateString:fe,isSpecCompliantForm:he,toJSONObject:me};function E(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}c.inherits(E,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:c.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Rt=E.prototype,gt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{gt[t]={value:t}});Object.defineProperties(E,gt);Object.defineProperty(Rt,"isAxiosError",{value:!0});E.from=(t,e,n,r,s,o)=>{const i=Object.create(Rt);return c.toFlatObject(t,i,function(f){return f!==Error.prototype},l=>l!=="isAxiosError"),E.call(i,t.message,e,n,r,s),i.cause=t,i.name=t.name,o&&Object.assign(i,o),i};const Ee=null;function K(t){return c.isPlainObject(t)||c.isArray(t)}function At(t){return c.endsWith(t,"[]")?t.slice(0,-2):t}function at(t,e,n){return t?t.concat(e).map(function(s,o){return s=At(s),!n&&o?"["+s+"]":s}).join(n?".":""):e}function Te(t){return c.isArray(t)&&!t.some(K)}const Se=c.toFlatObject(c,{},null,function(e){return/^is[A-Z]/.test(e)});function H(t,e,n){if(!c.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=c.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,b){return!c.isUndefined(b[m])});const r=n.metaTokens,s=n.visitor||d,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&c.isSpecCompliantForm(e);if(!c.isFunction(s))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(c.isDate(p))return p.toISOString();if(!f&&c.isBlob(p))throw new E("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(p)||c.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function d(p,m,b){let y=p;if(p&&!b&&typeof p=="object"){if(c.endsWith(m,"{}"))m=r?m:m.slice(0,-2),p=JSON.stringify(p);else if(c.isArray(p)&&Te(p)||(c.isFileList(p)||c.endsWith(m,"[]"))&&(y=c.toArray(p)))return m=At(m),y.forEach(function(j,Ut){!(c.isUndefined(j)||j===null)&&e.append(i===!0?at([m],Ut,o):i===null?m:m+"[]",u(j))}),!1}return K(p)?!0:(e.append(at(b,m,o),u(p)),!1)}const h=[],O=Object.assign(Se,{defaultVisitor:d,convertValue:u,isVisitable:K});function T(p,m){if(!c.isUndefined(p)){if(h.indexOf(p)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(p),c.forEach(p,function(y,A){(!(c.isUndefined(y)||y===null)&&s.call(e,y,c.isString(A)?A.trim():A,m,O))===!0&&T(y,m?m.concat(A):[A])}),h.pop()}}if(!c.isObject(t))throw new TypeError("data must be an object");return T(t),e}function ct(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function et(t,e){this._pairs=[],t&&H(t,this,e)}const Nt=et.prototype;Nt.append=function(e,n){this._pairs.push([e,n])};Nt.toString=function(e){const n=e?function(r){return e.call(this,r,ct)}:ct;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Oe(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ct(t,e,n){if(!e)return t;const r=n&&n.encode||Oe,s=n&&n.serialize;let o;if(s?o=s(e,n):o=c.isURLSearchParams(e)?e.toString():new et(e,n).toString(r),o){const i=t.indexOf("#");i!==-1&&(t=t.slice(0,i)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class ye{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){c.forEach(this.handlers,function(r){r!==null&&e(r)})}}const ut=ye,xt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},we=typeof URLSearchParams<"u"?URLSearchParams:et,be=typeof FormData<"u"?FormData:null,Pe=typeof Blob<"u"?Blob:null,$e=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Re=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),w={isBrowser:!0,classes:{URLSearchParams:we,FormData:be,Blob:Pe},isStandardBrowserEnv:$e,isStandardBrowserWebWorkerEnv:Re,protocols:["http","https","file","blob","url","data"]};function ge(t,e){return H(t,new w.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return w.isNode&&c.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}function Ae(t){return c.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Ne(t){const e={},n=Object.keys(t);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],e[o]=t[o];return e}function Dt(t){function e(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),f=o>=n.length;return i=!i&&c.isArray(s)?s.length:i,f?(c.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!c.isObject(s[i]))&&(s[i]=[]),e(n,r,s[i],o)&&c.isArray(s[i])&&(s[i]=Ne(s[i])),!l)}if(c.isFormData(t)&&c.isFunction(t.entries)){const n={};return c.forEachEntry(t,(r,s)=>{e(Ae(r),s,n,0)}),n}return null}const Ce={"Content-Type":void 0};function xe(t,e,n){if(c.isString(t))try{return(e||JSON.parse)(t),c.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const v={transitional:xt,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=c.isObject(e);if(o&&c.isHTMLForm(e)&&(e=new FormData(e)),c.isFormData(e))return s&&s?JSON.stringify(Dt(e)):e;if(c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e))return e;if(c.isArrayBufferView(e))return e.buffer;if(c.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ge(e,this.formSerializer).toString();if((l=c.isFileList(e))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return H(l?{"files[]":e}:e,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),xe(e)):e}],transformResponse:[function(e){const n=this.transitional||v.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&c.isString(e)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(l){if(i)throw l.name==="SyntaxError"?E.from(l,E.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:w.classes.FormData,Blob:w.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){v.headers[e]={}});c.forEach(["post","put","patch"],function(e){v.headers[e]=c.merge(Ce)});const nt=v,De=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Le=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||e[n]&&De[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},lt=Symbol("internals");function x(t){return t&&String(t).trim().toLowerCase()}function B(t){return t===!1||t==null?t:c.isArray(t)?t.map(B):String(t)}function Fe(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}function je(t){return/^[-_a-zA-Z]+$/.test(t.trim())}function z(t,e,n,r,s){if(c.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!c.isString(e)){if(c.isString(r))return e.indexOf(r)!==-1;if(c.isRegExp(r))return r.test(e)}}function _e(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Be(t,e){const n=c.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,o,i){return this[r].call(this,e,s,o,i)},configurable:!0})})}class M{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function o(l,f,u){const d=x(f);if(!d)throw new Error("header name must be a non-empty string");const h=c.findKey(s,d);(!h||s[h]===void 0||u===!0||u===void 0&&s[h]!==!1)&&(s[h||f]=B(l))}const i=(l,f)=>c.forEach(l,(u,d)=>o(u,d,f));return c.isPlainObject(e)||e instanceof this.constructor?i(e,n):c.isString(e)&&(e=e.trim())&&!je(e)?i(Le(e),n):e!=null&&o(n,e,r),this}get(e,n){if(e=x(e),e){const r=c.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return Fe(s);if(c.isFunction(n))return n.call(this,s,r);if(c.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=x(e),e){const r=c.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||z(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function o(i){if(i=x(i),i){const l=c.findKey(r,i);l&&(!n||z(r,r[l],l,n))&&(delete r[l],s=!0)}}return c.isArray(e)?e.forEach(o):o(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!e||z(this,this[o],o,e,!0))&&(delete this[o],s=!0)}return s}normalize(e){const n=this,r={};return c.forEach(this,(s,o)=>{const i=c.findKey(r,o);if(i){n[i]=B(s),delete n[o];return}const l=e?_e(o):String(o).trim();l!==o&&delete n[o],n[l]=B(s),r[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return c.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&c.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[lt]=this[lt]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=x(i);r[l]||(Be(s,i),r[l]=!0)}return c.isArray(e)?e.forEach(o):o(e),this}}M.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);c.freezeMethods(M.prototype);c.freezeMethods(M);const P=M;function J(t,e){const n=this||nt,r=e||n,s=P.from(r.headers);let o=r.data;return c.forEach(t,function(l){o=l.call(n,o,s.normalize(),e?e.status:void 0)}),s.normalize(),o}function Lt(t){return!!(t&&t.__CANCEL__)}function F(t,e,n){E.call(this,t??"canceled",E.ERR_CANCELED,e,n),this.name="CanceledError"}c.inherits(F,E,{__CANCEL__:!0});function Ue(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new E("Request failed with status code "+n.status,[E.ERR_BAD_REQUEST,E.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const ke=w.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const f=[];f.push(n+"="+encodeURIComponent(r)),c.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),c.isString(o)&&f.push("path="+o),c.isString(i)&&f.push("domain="+i),l===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Ge(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Ie(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Ft(t,e){return t&&!Ge(e)?Ie(t,e):e}const He=w.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return e&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=c.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function ve(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Me(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,o=0,i;return e=e!==void 0?e:1e3,function(f){const u=Date.now(),d=r[o];i||(i=u),n[s]=f,r[s]=u;let h=o,O=0;for(;h!==s;)O+=n[h++],h=h%t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),u-i<e)return;const T=d&&u-d;return T?Math.round(O*1e3/T):void 0}}function dt(t,e){let n=0;const r=Me(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,f=r(l),u=o<=i;n=o;const d={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:f||void 0,estimated:f&&i&&u?(i-o)/f:void 0,event:s};d[e?"download":"upload"]=!0,t(d)}}const qe=typeof XMLHttpRequest<"u",ze=qe&&function(t){return new Promise(function(n,r){let s=t.data;const o=P.from(t.headers).normalize(),i=t.responseType;let l;function f(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}c.isFormData(s)&&(w.isStandardBrowserEnv||w.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let u=new XMLHttpRequest;if(t.auth){const T=t.auth.username||"",p=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.set("Authorization","Basic "+btoa(T+":"+p))}const d=Ft(t.baseURL,t.url);u.open(t.method.toUpperCase(),Ct(d,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function h(){if(!u)return;const T=P.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),m={data:!i||i==="text"||i==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:T,config:t,request:u};Ue(function(y){n(y),f()},function(y){r(y),f()},m),u=null}if("onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(h)},u.onabort=function(){u&&(r(new E("Request aborted",E.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new E("Network Error",E.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let p=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const m=t.transitional||xt;t.timeoutErrorMessage&&(p=t.timeoutErrorMessage),r(new E(p,m.clarifyTimeoutError?E.ETIMEDOUT:E.ECONNABORTED,t,u)),u=null},w.isStandardBrowserEnv){const T=(t.withCredentials||He(d))&&t.xsrfCookieName&&ke.read(t.xsrfCookieName);T&&o.set(t.xsrfHeaderName,T)}s===void 0&&o.setContentType(null),"setRequestHeader"in u&&c.forEach(o.toJSON(),function(p,m){u.setRequestHeader(m,p)}),c.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),i&&i!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",dt(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",dt(t.onUploadProgress)),(t.cancelToken||t.signal)&&(l=T=>{u&&(r(!T||T.type?new F(null,t,u):T),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l)));const O=ve(d);if(O&&w.protocols.indexOf(O)===-1){r(new E("Unsupported protocol "+O+":",E.ERR_BAD_REQUEST,t));return}u.send(s||null)})},U={http:Ee,xhr:ze};c.forEach(U,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Je={getAdapter:t=>{t=c.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let s=0;s<e&&(n=t[s],!(r=c.isString(n)?U[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new E(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(c.hasOwnProp(U,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!c.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:U};function V(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new F(null,t)}function pt(t){return V(t),t.headers=P.from(t.headers),t.data=J.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Je.getAdapter(t.adapter||nt.adapter)(t).then(function(r){return V(t),r.data=J.call(t,t.transformResponse,r),r.headers=P.from(r.headers),r},function(r){return Lt(r)||(V(t),r&&r.response&&(r.response.data=J.call(t,t.transformResponse,r.response),r.response.headers=P.from(r.response.headers))),Promise.reject(r)})}const ft=t=>t instanceof P?t.toJSON():t;function N(t,e){e=e||{};const n={};function r(u,d,h){return c.isPlainObject(u)&&c.isPlainObject(d)?c.merge.call({caseless:h},u,d):c.isPlainObject(d)?c.merge({},d):c.isArray(d)?d.slice():d}function s(u,d,h){if(c.isUndefined(d)){if(!c.isUndefined(u))return r(void 0,u,h)}else return r(u,d,h)}function o(u,d){if(!c.isUndefined(d))return r(void 0,d)}function i(u,d){if(c.isUndefined(d)){if(!c.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function l(u,d,h){if(h in e)return r(u,d);if(h in t)return r(void 0,u)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(u,d)=>s(ft(u),ft(d),!0)};return c.forEach(Object.keys(t).concat(Object.keys(e)),function(d){const h=f[d]||s,O=h(t[d],e[d],d);c.isUndefined(O)&&h!==l||(n[d]=O)}),n}const jt="1.3.4",rt={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{rt[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const ht={};rt.transitional=function(e,n,r){function s(o,i){return"[Axios v"+jt+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(e===!1)throw new E(s(i," has been removed"+(n?" in "+n:"")),E.ERR_DEPRECATED);return n&&!ht[i]&&(ht[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(o,i,l):!0}};function Ve(t,e,n){if(typeof t!="object")throw new E("options must be an object",E.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const o=r[s],i=e[o];if(i){const l=t[o],f=l===void 0||i(l,o,t);if(f!==!0)throw new E("option "+o+" must be "+f,E.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new E("Unknown option "+o,E.ERR_BAD_OPTION)}}const X={assertOptions:Ve,validators:rt},R=X.validators;class G{constructor(e){this.defaults=e,this.interceptors={request:new ut,response:new ut}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=N(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&X.assertOptions(r,{silentJSONParsing:R.transitional(R.boolean),forcedJSONParsing:R.transitional(R.boolean),clarifyTimeoutError:R.transitional(R.boolean)},!1),s!==void 0&&X.assertOptions(s,{encode:R.function,serialize:R.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&c.merge(o.common,o[n.method]),i&&c.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=P.concat(i,o);const l=[];let f=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(f=f&&m.synchronous,l.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let d,h=0,O;if(!f){const p=[pt.bind(this),void 0];for(p.unshift.apply(p,l),p.push.apply(p,u),O=p.length,d=Promise.resolve(n);h<O;)d=d.then(p[h++],p[h++]);return d}O=l.length;let T=n;for(h=0;h<O;){const p=l[h++],m=l[h++];try{T=p(T)}catch(b){m.call(this,b);break}}try{d=pt.call(this,T)}catch(p){return Promise.reject(p)}for(h=0,O=u.length;h<O;)d=d.then(u[h++],u[h++]);return d}getUri(e){e=N(this.defaults,e);const n=Ft(e.baseURL,e.url);return Ct(n,e.params,e.paramsSerializer)}}c.forEach(["delete","get","head","options"],function(e){G.prototype[e]=function(n,r){return this.request(N(r||{},{method:e,url:n,data:(r||{}).data}))}});c.forEach(["post","put","patch"],function(e){function n(r){return function(o,i,l){return this.request(N(l||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}G.prototype[e]=n(),G.prototype[e+"Form"]=n(!0)});const k=G;class st{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},e(function(o,i,l){r.reason||(r.reason=new F(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new st(function(s){e=s}),cancel:e}}}const We=st;function Ke(t){return function(n){return t.apply(null,n)}}function Xe(t){return c.isObject(t)&&t.isAxiosError===!0}const Q={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Q).forEach(([t,e])=>{Q[e]=t});const Qe=Q;function _t(t){const e=new k(t),n=Et(k.prototype.request,e);return c.extend(n,k.prototype,e,{allOwnKeys:!0}),c.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return _t(N(t,s))},n}const S=_t(nt);S.Axios=k;S.CanceledError=F;S.CancelToken=We;S.isCancel=Lt;S.VERSION=jt;S.toFormData=H;S.AxiosError=E;S.Cancel=S.CanceledError;S.all=function(e){return Promise.all(e)};S.spread=Ke;S.isAxiosError=Xe;S.mergeConfig=N;S.AxiosHeaders=P;S.formToJSON=t=>Dt(c.isHTMLForm(t)?new FormData(t):t);S.HttpStatusCode=Qe;S.default=S;const Ye=S,Ze=Ye.create({baseURL:kt});function a(t,e="",n={}){return Ze({method:t,withCredentials:!0,url:e,data:n,json:!0})}const mt=t=>Object.entries(t).reduce((e,[n,r])=>(r&&(e[n]=r),e),{}),Bt=(t,e="")=>Object.entries(t).map(([n,r])=>typeof r=="object"?Bt(r,n):`${e?`${e}[${n}]`:`${n}`}=${r}`).join("&"),en={returnReasons:{retrieve(t){const e=`/admin/return-reasons/${t}`;return a("GET",e)},list(){return a("GET","/admin/return-reasons")},create(t){return a("POST","/admin/return-reasons",t)},update(t,e){const n=`/admin/return-reasons/${t}`;return a("POST",n,e)},delete(t){const e=`/admin/return-reasons/${t}`;return a("DELETE",e)}},apps:{authorize(t){return a("POST","/admin/apps/authorizations",t)},list(){return a("GET","/admin/apps")}},auth:{session(){return a("GET","/admin/auth")},authenticate(t){return a("POST","/admin/auth",t)},token(t){const e="/admin/auth/token";return console.log("Calling token function with details:",t),a("POST",e,t)},batch(){const t="/admin/batch-jobs?limit=100";return console.log("Calling batch job function"),a("GET",t)},deauthenticate(t){return a("DELETE","/admin/auth")}},notifications:{list(t={}){const e=Object.keys(t).map(r=>`${r}=${t[r]}`).join("&"),n=`/admin/notifications${e&&`?${e}`}`;return a("GET",n)},resend(t,e){const n=`/admin/notifications/${t}/resend`;return a("POST",n,e)}},notes:{listByResource(t){const e=`/admin/notes?resource_id=${t}`;return a("GET",e)},async create(t,e,n){return a("POST","/admin/notes/",{resource_id:t,resource_type:e,value:n})},update(t,e){const n=`admin/notes/${t}`;return a("POST",n,{value:e})},delete(t){const e=`admin/notes/${t}`;return a("DELETE",e)}},customers:{retrieve(t){const e=`/admin/customers/${t}`;return a("GET",e)},list(t=""){const e=`/admin/customers${t}`;return a("GET",e)},update(t,e){const n=`admin/customers/${t}`;return a("POST",n,e)}},store:{retrieve(){return a("GET","/admin/store")},update(t){return a("POST","/admin/store",t)},addCurrency(t){const e=`/admin/store/currencies/${t}`;return a("POST",e)},removeCurrency(t){const e=`/admin/store/currencies/${t}`;return a("DELETE",e)},listPaymentProviders(){return a("GET","/admin/store/payment-providers")}},shippingProfiles:{list(){return a("GET","/admin/shipping-profiles")},create(t){return a("POST","/admin/shipping-profiles",t)},retrieve(t){const e=`/admin/shipping-profiles/${t}`;return a("GET",e)},update(t,e){const n=`/admin/shipping-profiles/${t}`;return a("POST",n,e)}},giftCards:{create(t){return a("POST","/admin/gift-cards",t)},retrieve(t){const e=`/admin/gift-cards/${t}`;return a("GET",e)},list(t={}){const e=Object.keys(t).map(r=>`${r}=${t[r]}`).join("&"),n=`/admin/gift-cards${e&&`?${e}`}`;return a("GET",n)},update(t,e){const n=`/admin/gift-cards/${t}`;return a("POST",n,e)},delete(t){const e=`/admin/gift-cards/${t}`;return a("DELETE",e)}},variants:{list(t={}){const e=Object.keys(t).map(r=>`${r}=${t[r]}`).join("&"),n=`/admin/variants${e&&`?${e}`}`;return a("GET",n)}},products:{create(t){return a("POST","/admin/products",t)},retrieve(t){const e=`/admin/products/${t}`;return a("GET",e)},update(t,e){const n=`/admin/products/${t}`;return a("POST",n,e)},delete(t){const e=`/admin/products/${t}`;return a("DELETE",e)},list(t={}){const e=Object.keys(t).map(r=>`${r}=${t[r]}`).join("&"),n=`/admin/products${e&&`?${e}`}`;return a("GET",n)},listTypes(){return a("GET","/admin/products/types")},listTagsByUsage(){return a("GET","/admin/products/tag-usage")},variants:{create(t,e){const n=`/admin/products/${t}/variants`;return a("POST",n,e)},retrieve(t,e){const n=`/admin/products/${t}/variants/${e}`;return a("GET",n)},update(t,e,n){const r=`/admin/products/${t}/variants/${e}`;return a("POST",r,n)},delete(t,e){const n=`/admin/products/${t}/variants/${e}`;return a("DELETE",n)},list(t){const e=`/admin/products/${t}/variants`;return a("GET",e)}},options:{create(t,e){const n=`/admin/products/${t}/options`;return a("POST",n,e)},delete(t,e){const n=`/admin/products/${t}/options/${e}`;return a("DELETE",n)},update(t,e,n){const r=`/admin/products/${t}/options/${e}`;return a("POST",r,n)}}},swaps:{retrieve(t){const e=`/admin/swaps/${t}`;return a("GET",e)},update(t,e){const n=`/admin/orders/${t}`;return a("POST",n,e)},list(t={}){const e=Object.keys(t).map(r=>t[r]===""||t[r]===null?null:`${r}=${t[r]}`).filter(r=>!!r).join("&"),n=`/admin/swaps${e&&`?${e}`}`;return a("GET",n)}},returns:{list(t={}){const e=mt(t),n=Object.keys(e).map(s=>`${s}=${t[s]}`).filter(s=>!!s).join("&"),r=`/admin/returns${n&&`?${n}`}`;return a("GET",r)}},collections:{create(t){return a("POST","/admin/collections",t)},retrieve(t){const e=`/admin/collections/${t}`;return a("GET",e)},list(t={}){return a("GET","/admin/collections")},addProducts(t,e){const n=`/admin/collections/${t}/products/batch`;return a("POST",n,e)},removeProducts(t,e){const n=`/admin/collections/${t}/products/batch`;return a("DELETE",n,e)}},orders:{create(t){return a("POST","/admin/orders",t)},async receiveReturn(t,e){var o,i,l,f,u;const n=`/admin/returns/${t}/receive`,r=await a("POST",n,e);let s;return(o=r.data.return)!=null&&o.order_id&&(s=r.data.return.order_id),(l=(i=r.data.return)==null?void 0:i.swap)!=null&&l.id&&(s=(u=(f=r.data.return)==null?void 0:f.swap)==null?void 0:u.order_id),this.retrieve(s)},cancelReturn(t){const e=`/admin/returns/${t}/cancel`;return a("POST",e)},retrieve(t,e={}){const n=Object.keys(e).map(s=>e[s]===""||e[s]===null?null:`${s}=${e[s]}`).filter(s=>!!s).join("&"),r=`/admin/orders/${t}${n&&`?${n}`}`;return a("GET",r)},update(t,e){const n=`/admin/orders/${t}`;return a("POST",n,e)},list(t={}){const e=mt(t),n=Object.keys(e).map(s=>`${s}=${t[s]}`).filter(s=>!!s).join("&"),r=`/admin/orders${n&&`?${n}`}`;return a("GET",r)},complete(t){const e=`/admin/orders/${t}/complete`;return a("POST",e,{})},archive(t){const e=`/admin/orders/${t}/archive`;return a("POST",e,{})},capturePayment(t){const e=`/admin/orders/${t}/capture`;return a("POST",e,{})},createShipment(t,e){const n=`/admin/orders/${t}/shipment`;return a("POST",n,e)},updateClaim(t,e,n){const r=`/admin/orders/${t}/claims/${e}`;return a("POST",r,n)},createSwap(t,e){const n=`/admin/orders/${t}/swaps`;return a("POST",n,e)},cancelSwap(t,e){const n=`/admin/orders/${t}/swaps/${e}/cancel`;return a("POST",n)},createClaim(t,e){const n=`/admin/orders/${t}/claims`;return a("POST",n,e)},cancelClaim(t,e){const n=`/admin/orders/${t}/claims/${e}/cancel`;return a("POST",n)},fulfillClaim(t,e,n){const r=`/admin/orders/${t}/claims/${e}/fulfillments`;return a("POST",r,n)},cancelClaimFulfillment(t,e,n){const r=`/admin/orders/${t}/claims/${e}/fulfillments/${n}/cancel`;return a("POST",r)},createClaimShipment(t,e,n){const r=`/admin/orders/${t}/claims/${e}/shipments`;return a("POST",r,n)},createSwapShipment(t,e,n){const r=`/admin/orders/${t}/swaps/${e}/shipments`;return a("POST",r,n)},fulfillSwap(t,e,n){const r=`/admin/orders/${t}/swaps/${e}/fulfillments`;return a("POST",r,n)},cancelSwapFulfillment(t,e,n){const r=`/admin/orders/${t}/swaps/${e}/fulfillments/${n}/cancel`;return a("POST",r)},processSwapPayment(t,e){const n=`/admin/orders/${t}/swaps/${e}/process-payment`;return a("POST",n)},createFulfillment(t,e){const n=`/admin/orders/${t}/fulfillment`;return a("POST",n,e)},cancelFulfillment(t,e){const n=`/admin/orders/${t}/fulfillments/${e}/cancel`;return a("POST",n)},refund(t,e){const n=`/admin/orders/${t}/refund`;return a("POST",n,e)},requestReturn(t,e){const n=`/admin/orders/${t}/return`;return a("POST",n,e)},cancel(t){const e=`/admin/orders/${t}/cancel`;return a("POST",e,{})}},shippingOptions:{create(t){return a("POST","/admin/shipping-options",t)},retrieve(t){const e=`/admin/shipping-options/${t}`;return a("POST",e)},delete(t){const e=`/admin/shipping-options/${t}`;return a("DELETE",e)},list(t={}){const e=Object.keys(t).map(r=>`${r}=${t[r]}`).join("&"),n=`/admin/shipping-options${e&&`?${e}`}`;return a("GET",n)},update(t,e){const n=`/admin/shipping-options/${t}`;return a("POST",n,e)}},discounts:{create(t){return a("POST","/admin/discounts",t)},retrieve(t){const e=`/admin/discounts/${t}`;return a("GET",e)},update(t,e){const n=`/admin/discounts/${t}`;return a("POST",n,e)},delete(t){const e=`/admin/discounts/${t}`;return a("DELETE",e)},list(t={}){const e=Bt(t),n=`/admin/discounts${e&&`?${e}`}`;return a("GET",n)},retrieveByCode(t){const e=`/admin/discounts/code/${t}`;return a("GET",e)}},regions:{list(){return a("GET","/admin/regions")},retrieve(t){const e=`/admin/regions/${t}`;return a("GET",e)},create(t){return a("POST","/admin/regions",t)},update(t,e){const n=`/admin/regions/${t}`;return a("POST",n,e)},delete(t){const e=`/admin/regions/${t}`;return a("DELETE",e)},fulfillmentOptions:{list(t){const e=`/admin/regions/${t}/fulfillment-options`;return a("GET",e)}}},uploads:{create(t){const e=new FormData;for(const n of t)e.append("files",n);return a("POST","/admin/uploads",e)}},draftOrders:{create(t){return a("POST","/admin/draft-orders",t)},addLineItem(t,e){const n=`/admin/draft-orders/${t}/line-items`;return a("POST",n,e)},updateLineItem(t,e,n){const r=`/admin/draft-orders/${t}/line-items/${e}`;return a("POST",r,n)},deleteLineItem(t,e){const n=`/admin/draft-orders/${t}/line-items/${e}`;return a("DELETE",n)},retrieve(t){const e=`/admin/draft-orders/${t}`;return a("GET",e)},delete(t){const e=`/admin/draft-orders/${t}`;return a("DELETE",e)},update(t,e){const n=`/admin/draft-orders/${t}`;return a("POST",n,e)},registerSystemPayment(t){const e=`/admin/draft-orders/${t}/pay`;return a("POST",e)},list(t={}){const e=Object.keys(t).map(r=>t[r]===""||t[r]===null?null:`${r}=${t[r]}`).filter(r=>!!r).join("&"),n=`/admin/draft-orders${e&&`?${e}`}`;return a("GET",n)}},invites:{regis(t){return a("POST","/store/custom/register",t)},create(t){return a("POST","/admin/invites",t)},resend(t){const e=`/admin/invites/${t}/resend`;return a("POST",e)},delete(t){const e=`/admin/invites/${t}`;return a("DELETE",e)},list(){return a("GET","/admin/invites")},accept(t){return a("POST","/admin/invites/accept",t)}},users:{resetPasswordToken(t){return a("POST","/admin/users/password-token",t)},resetPassword(t){return a("POST","/admin/users/reset-password",t)},list(){return a("GET","/admin/users")},retrieve(t){const e=`/admin/users/${t}`;return a("GET",e)},update(t,e){const n=`/admin/users/${t}`;return a("POST",n,e)},delete(t){const e=`/admin/users/${t}`;return a("DELETE",e)}}};export{Ye as a,en as b};