import{n as k}from"./a-546c8ec5.js";import{i as O}from"./helpers-562b3d1f.js";import"./index-57d11ccb.js";import"./layout-b7c4d5e9.js";import"./use-notification-c643bd29.js";import"./index-46b0135f.js";import"./index-8073c274.js";import"./index.esm-47ffbe71.js";import"./index-7c35a557.js";import"./api-606c1433.js";function j(a,e){return Object.keys(e).reduce(function(i,t){if(t.startsWith(a)){var r=t.substr(a.length);i[r]=e[t]}return i},{})}function w(a,e){var i=document.createElement("a");i.href=e;var t=i.search.slice(1),r=t.split("&").reduce(function(d,P){var v=P.split("="),b=v[0],S=v[1];return d[b]=k(S),d},{}),s=[],m=r.ajs_uid,f=r.ajs_event,c=r.ajs_aid,o=O(a.options.useQueryString)?a.options.useQueryString:{},n=o.aid,l=n===void 0?/.+/:n,u=o.uid,A=u===void 0?/.+/:u;if(c){var _=Array.isArray(r.ajs_aid)?r.ajs_aid[0]:r.ajs_aid;l.test(_)&&a.setAnonymousId(_)}if(m){var p=Array.isArray(r.ajs_uid)?r.ajs_uid[0]:r.ajs_uid;if(A.test(p)){var h=j("ajs_trait_",r);s.push(a.identify(p,h))}}if(f){var y=Array.isArray(r.ajs_event)?r.ajs_event[0]:r.ajs_event,g=j("ajs_prop_",r);s.push(a.track(y,g))}return Promise.all(s)}export{w as queryString};
