var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function u(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function p(){return d("")}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function b(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let g;function $(t){g=t}function w(){if(!g)throw new Error("Function called outside component initialization");return g}function y(){const t=w();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function x(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t(n)))}const v=[],_=[],k=[],E=[],T=Promise.resolve();let C=!1;function L(){C||(C=!0,T.then(S))}function j(t){k.push(t)}let O=!1;const H=new Set;function S(){if(!O){O=!0;do{for(let t=0;t<v.length;t+=1){const n=v[t];$(n),A(n.$$)}for($(null),v.length=0;_.length;)_.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];H.has(n)||(H.add(n),n())}k.length=0}while(v.length);for(;E.length;)E.pop()();C=!1,O=!1,H.clear()}}function A(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const R=new Set;let M;function N(){M={r:0,c:[],p:M}}function q(){M.r||r(M.c),M=M.p}function D(t,n){t&&t.i&&(R.delete(t),t.i(n))}function U(t,n,e,o){if(t&&t.o){if(R.has(t))return;R.add(t),M.c.push((()=>{R.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function Y(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=n[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function F(t){return"object"==typeof t&&null!==t?t:{}}function I(t){t&&t.c()}function P(t,n,o){const{fragment:i,on_mount:c,on_destroy:u,after_update:l}=t.$$;i&&i.m(n,o),j((()=>{const n=c.map(e).filter(s);u?u.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(j)}function W(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function z(n,e,s,i,c,u,l=[-1]){const f=g;$(n);const d=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:l,skip_bound:!1};let h=!1;if(d.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&function(t,n){-1===t.$$.dirty[0]&&(v.push(t),L(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],d.update(),h=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(a)}else d.fragment&&d.fragment.c();e.intro&&D(n.$$.fragment),P(n,e.target,e.anchor),S()}$(f)}class B{$destroy(){W(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const X=[];function G(t,n){return{subscribe:J(t,n).subscribe}}function J(n,e=t){let o;const r=[];function s(t){if(i(n,t)&&(n=t,o)){const t=!X.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),X.push(e,n)}if(t){for(let t=0;t<X.length;t+=2)X[t][0](X[t+1]);X.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(i,c=t){const u=[i,c];return r.push(u),1===r.length&&(o=e(s)||t),i(n),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function K(n,e,o){const i=!Array.isArray(n),u=i?[n]:n,l=e.length<2;return G(o,(n=>{let o=!1;const a=[];let f=0,d=t;const h=()=>{if(f)return;d();const o=e(i?a[0]:a,n);l?n(o):d=s(o)?o:t},p=u.map(((t,n)=>c(t,(t=>{a[n]=t,f&=~(1<<n),o&&h()}),(()=>{f|=1<<n}))));return o=!0,h(),function(){r(p),d()}}))}function Q(t){let e,o,r;const s=[t[2]];var i=t[0];function c(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return i&&(e=new i(c()),e.$on("routeEvent",t[7])),{c(){e&&I(e.$$.fragment),o=p()},m(t,n){e&&P(e,t,n),l(t,o,n),r=!0},p(t,n){const r=4&n?Y(s,[F(t[2])]):{};if(i!==(i=t[0])){if(e){N();const t=e;U(t.$$.fragment,1,0,(()=>{W(t,1)})),q()}i?(e=new i(c()),e.$on("routeEvent",t[7]),I(e.$$.fragment),D(e.$$.fragment,1),P(e,o.parentNode,o)):e=null}else i&&e.$set(r)},i(t){r||(e&&D(e.$$.fragment,t),r=!0)},o(t){e&&U(e.$$.fragment,t),r=!1},d(t){t&&a(o),e&&W(e,t)}}}function V(t){let e,o,r;const s=[{params:t[1]},t[2]];var i=t[0];function c(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return i&&(e=new i(c()),e.$on("routeEvent",t[6])),{c(){e&&I(e.$$.fragment),o=p()},m(t,n){e&&P(e,t,n),l(t,o,n),r=!0},p(t,n){const r=6&n?Y(s,[2&n&&{params:t[1]},4&n&&F(t[2])]):{};if(i!==(i=t[0])){if(e){N();const t=e;U(t.$$.fragment,1,0,(()=>{W(t,1)})),q()}i?(e=new i(c()),e.$on("routeEvent",t[6]),I(e.$$.fragment),D(e.$$.fragment,1),P(e,o.parentNode,o)):e=null}else i&&e.$set(r)},i(t){r||(e&&D(e.$$.fragment,t),r=!0)},o(t){e&&U(e.$$.fragment,t),r=!1},d(t){t&&a(o),e&&W(e,t)}}}function Z(t){let n,e,o,r;const s=[V,Q],i=[];function c(t,n){return t[1]?0:1}return n=c(t),e=i[n]=s[n](t),{c(){e.c(),o=p()},m(t,e){i[n].m(t,e),l(t,o,e),r=!0},p(t,[r]){let u=n;n=c(t),n===u?i[n].p(t,r):(N(),U(i[u],1,1,(()=>{i[u]=null})),q(),e=i[n],e?e.p(t,r):(e=i[n]=s[n](t),e.c()),D(e,1),e.m(o.parentNode,o))},i(t){r||(D(e),r=!0)},o(t){U(e),r=!1},d(t){i[n].d(t),t&&a(o)}}}function tt(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const nt=G(null,(function(t){t(tt());const n=()=>{t(tt())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));function et(t,n,e){let{routes:o={}}=n,{prefix:r=""}=n,{restoreScrollState:s=!1}=n;class i{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:e,keys:o}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,r,s,i=[],c="",u=t.split("/");for(u[0]||u.shift();r=u.shift();)"*"===(e=r[0])?(i.push("wild"),c+="/(.*)"):":"===e?(o=r.indexOf("?",1),s=r.indexOf(".",1),i.push(r.substring(1,~o?o:~s?s:r.length)),c+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(c+=(~o?"?":"")+"\\"+r.substring(s))):c+="/"+r;return{keys:i,pattern:new RegExp("^"+c+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const n=t.match(r);if(!n||!n[0])return null;t=t.substr(n[0].length)||"/"}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;){try{e[this._keys[o]]=decodeURIComponent(n[o+1]||"")||null}catch(t){e[this._keys[o]]=null}o++}return e}async checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!await this.conditions[n](t))return!1;return!0}}const c=[];o instanceof Map?o.forEach(((t,n)=>{c.push(new i(n,t))})):Object.keys(o).forEach((t=>{c.push(new i(t,o[t]))}));let u=null,l=null,a={};const f=y();async function d(t,n){await(L(),T),f(t,n)}let h=null;var p;s&&(window.addEventListener("popstate",(t=>{h=t.state&&t.state.scrollY?t.state:null})),p=()=>{h?window.scrollTo(h.scrollX,h.scrollY):window.scrollTo(0,0)},w().$$.after_update.push(p));let m=null,b=null;return nt.subscribe((async t=>{m=t;let n=0;for(;n<c.length;){const o=c[n].match(t.location);if(!o){n++;continue}const r={route:c[n].path,location:t.location,querystring:t.querystring,userData:c[n].userData};if(!await c[n].checkConditions(r))return e(0,u=null),b=null,void d("conditionsFailed",r);d("routeLoading",Object.assign({},r));const s=c[n].component;if(b!=s){s.loading?(e(0,u=s.loading),b=s,e(1,l=s.loadingParams),e(2,a={}),d("routeLoaded",Object.assign({},r,{component:u,name:u.name}))):(e(0,u=null),b=null);const n=await s();if(t!=m)return;e(0,u=n&&n.default||n),b=s}return o&&"object"==typeof o&&Object.keys(o).length?e(1,l=o):e(1,l=null),e(2,a=c[n].props),void d("routeLoaded",Object.assign({},r,{component:u,name:u.name}))}e(0,u=null),b=null})),t.$$set=t=>{"routes"in t&&e(3,o=t.routes),"prefix"in t&&e(4,r=t.prefix),"restoreScrollState"in t&&e(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[u,l,a,o,r,s,function(n){x(t,n)},function(n){x(t,n)}]}K(nt,(t=>t.location)),K(nt,(t=>t.querystring));class ot extends B{constructor(t){super(),z(this,t,et,Z,i,{routes:3,prefix:4,restoreScrollState:5})}}function rt(n){let e,o,r,s,i,c,u;return{c(){e=f("h2"),e.textContent="Home component",o=h(),r=f("p"),r.innerHTML="This sample shows how to set up the router with minimum functionality. <br/>\n    The route definition object contains a number of routes (including some with parameters and a catch-all at the end).<br/>\n    The links below allow navigating between pages.",s=h(),i=f("p"),i.textContent="This is the Home component, which contains markup only.",c=h(),u=f("p"),u.innerHTML="<em>Hint:</em> Try navigating with the links below, then use your browser&#39;s back and forward buttons."},m(t,n){l(t,e,n),l(t,o,n),l(t,r,n),l(t,s,n),l(t,i,n),l(t,c,n),l(t,u,n)},p:t,i:t,o:t,d(t){t&&a(e),t&&a(o),t&&a(r),t&&a(s),t&&a(i),t&&a(c),t&&a(u)}}}function st(n){let e,o,r,s,i,c,u,p,g,$,w,y,x,v,_,k,E,T,C,L,j,O,H,S,A,R,M,N,q,D,U,Y,F,I,P,W=n[0].subscribe+"";return{c(){e=f("button"),e.textContent="Add two",o=f("br"),r=d("\n\n$my_store = "),s=d(n[3]),i=f("br"),c=h(),u=f("i"),u.textContent="- that's expected.",p=f("br"),g=f("br"),$=d("\n\nmy_store = "),w=d(n[0]),y=f("br"),x=h(),v=f("i"),v.textContent="- as expected at first, but what's the 22222's?.",_=f("br"),k=f("br"),E=d("\n\nmy_store.subscribe = "),T=d(W),C=f("br"),L=h(),j=f("i"),j.textContent="- as expected at first, then undefined after clicking the button.",O=f("br"),H=f("br"),S=d("\n\nmy_store_subscribe_method = "),A=d(n[1]),R=f("br"),M=f("br"),N=d("\n\nmy_store_subscribe_method2 = "),q=d(n[2]),D=f("br"),U=f("br"),Y=h(),F=f("a"),F.textContent="source",m(F,"href","https://github.com/koo5/understand_humans/blob/master/delogic/test1/src/test1.svelte")},m(t,a){var f,d,h,m;l(t,e,a),l(t,o,a),l(t,r,a),l(t,s,a),l(t,i,a),l(t,c,a),l(t,u,a),l(t,p,a),l(t,g,a),l(t,$,a),l(t,w,a),l(t,y,a),l(t,x,a),l(t,v,a),l(t,_,a),l(t,k,a),l(t,E,a),l(t,T,a),l(t,C,a),l(t,L,a),l(t,j,a),l(t,O,a),l(t,H,a),l(t,S,a),l(t,A,a),l(t,R,a),l(t,M,a),l(t,N,a),l(t,q,a),l(t,D,a),l(t,U,a),l(t,Y,a),l(t,F,a),I||(f=e,d="click",h=n[4],f.addEventListener(d,h,m),P=()=>f.removeEventListener(d,h,m),I=!0)},p(t,[n]){8&n&&b(s,t[3]),1&n&&b(w,t[0]),1&n&&W!==(W=t[0].subscribe+"")&&b(T,W),2&n&&b(A,t[1]),4&n&&b(q,t[2])},i:t,o:t,d(t){t&&a(e),t&&a(o),t&&a(r),t&&a(s),t&&a(i),t&&a(c),t&&a(u),t&&a(p),t&&a(g),t&&a($),t&&a(w),t&&a(y),t&&a(x),t&&a(v),t&&a(_),t&&a(k),t&&a(E),t&&a(T),t&&a(C),t&&a(L),t&&a(j),t&&a(O),t&&a(H),t&&a(S),t&&a(A),t&&a(R),t&&a(M),t&&a(N),t&&a(q),t&&a(D),t&&a(U),t&&a(Y),t&&a(F),I=!1,P()}}}function it(n,e,o){let r,s,i=t,u=()=>(i(),i=c(l,(t=>o(3,s=t))),l);n.$$.on_destroy.push((()=>i()));let l=J(0);u();let a=l.subscribe;return n.$$.update=()=>{1&n.$$.dirty&&o(2,r=l.subscribe)},[l,a,r,s,()=>{u(o(0,l+=2)),o(1,a=l.subscribe)}]}function ct(t){let n,e=t[0].last+"";return{c(){n=d(e)},m(t,e){l(t,n,e)},p(t,o){1&o&&e!==(e=t[0].last+"")&&b(n,e)},d(t){t&&a(n)}}}function ut(n){let e,o,r,s,i,c,p,m,g,$,w,y,x=n[0].first+"",v=n[0].last&&ct(n);return{c(){e=f("h2"),e.textContent="Hi there!",o=h(),r=f("p"),s=d("Your name is:\n    "),i=f("b"),c=d(x),p=h(),m=f("b"),v&&v.c(),g=h(),$=f("p"),$.innerHTML="This comes from the URL, matching <code>/hello/:first/:last?</code>, where the last name is optional.",w=h(),y=f("p"),y.innerHTML="<em>Hint:</em> Try changing the URL and add your name, e.g. <code>/hello/alex</code> or <code>/hello/jane/doe</code>"},m(t,n){l(t,e,n),l(t,o,n),l(t,r,n),u(r,s),u(r,i),u(i,c),u(r,p),u(r,m),v&&v.m(m,null),l(t,g,n),l(t,$,n),l(t,w,n),l(t,y,n)},p(t,[n]){1&n&&x!==(x=t[0].first+"")&&b(c,x),t[0].last?v?v.p(t,n):(v=ct(t),v.c(),v.m(m,null)):v&&(v.d(1),v=null)},i:t,o:t,d(t){t&&a(e),t&&a(o),t&&a(r),v&&v.d(),t&&a(g),t&&a($),t&&a(w),t&&a(y)}}}function lt(t,n,e){let{params:o={}}=n;return t.$$set=t=>{"params"in t&&e(0,o=t.params)},[o]}function at(n){let e,o,r,s,i,c,p,m=n[0].wild+"";return{c(){e=f("h2"),e.textContent="Wildcard",o=h(),r=f("p"),r.innerHTML="Anything in the URL after <code>/wild/</code> is shown below as message. That&#39;s found in the <code>params.wild</code> prop.",s=h(),i=f("p"),c=d("Your message is: "),p=d(m)},m(t,n){l(t,e,n),l(t,o,n),l(t,r,n),l(t,s,n),l(t,i,n),u(i,c),u(i,p)},p(t,[n]){1&n&&m!==(m=t[0].wild+"")&&b(p,m)},i:t,o:t,d(t){t&&a(e),t&&a(o),t&&a(r),t&&a(s),t&&a(i)}}}function ft(t,n,e){let{params:o={}}=n;return t.$$set=t=>{"params"in t&&e(0,o=t.params)},[o]}class dt extends B{constructor(t){super(),z(this,t,ft,at,i,{params:0})}}function ht(n){let e,o,r;return{c(){e=f("h2"),e.textContent="NotFound",o=h(),r=f("p"),r.textContent="Oops, this route doesn't exist!"},m(t,n){l(t,e,n),l(t,o,n),l(t,r,n)},p:t,i:t,o:t,d(t){t&&a(e),t&&a(o),t&&a(r)}}}var pt={"/":class extends B{constructor(t){super(),z(this,t,null,rt,i,{})}},"/test1":class extends B{constructor(t){super(),z(this,t,it,st,i,{})}},"/hello/:first/:last?":class extends B{constructor(t){super(),z(this,t,lt,ut,i,{params:0})}},"/wild":dt,"/wild/*":dt,"*":class extends B{constructor(t){super(),z(this,t,null,ht,i,{})}}};function mt(n){let e,o,r,s,i,c,u;return c=new ot({props:{routes:pt}}),{c(){e=f("ul"),e.innerHTML='<li class="svelte-a45w8f"><a href="#/" class="svelte-a45w8f">Home</a></li> \n    <li class="svelte-a45w8f"><a href="#/test1" class="svelte-a45w8f">Test1</a></li> \n    <li class="svelte-a45w8f"><a href="#/hello/svelte" class="svelte-a45w8f">Say hi!</a></li> \n    <li class="svelte-a45w8f"><a href="#/wild/card" class="svelte-a45w8f">Wildcard route</a></li>',o=h(),r=f("br"),s=f("hr"),i=h(),I(c.$$.fragment),m(e,"class","svelte-a45w8f")},m(t,n){l(t,e,n),l(t,o,n),l(t,r,n),l(t,s,n),l(t,i,n),P(c,t,n),u=!0},p:t,i(t){u||(D(c.$$.fragment,t),u=!0)},o(t){U(c.$$.fragment,t),u=!1},d(t){t&&a(e),t&&a(o),t&&a(r),t&&a(s),t&&a(i),W(c,t)}}}return new class extends B{constructor(t){super(),z(this,t,null,mt,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map