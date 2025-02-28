var U=s=>{throw TypeError(s)};var F=(s,e,t)=>e.has(s)||U("Cannot "+t);var r=(s,e,t)=>(F(s,e,"read from private field"),t?t.call(s):e.get(s)),o=(s,e,t)=>e.has(s)?U("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),c=(s,e,t,i)=>(F(s,e,"write to private field"),i?i.call(s,t):e.set(s,t),t),V=(s,e,t)=>(F(s,e,"access private method"),t);import{t as K,a as I}from"../chunks/C6p06w7n.js";import"../chunks/DO7ZJr0j.js";import{I as A,ar as Y,K as y,ay as Z,av as tt,B as j,p as et,c as v,s as E,t as st,a as rt,r as u,E as it,$ as nt,ax as at}from"../chunks/z56nQwSQ.js";import{h as ot}from"../chunks/C1zaSlLS.js";import{s as O}from"../chunks/CLjKYyUb.js";import{d as ct,s as q}from"../chunks/DDcz2SsJ.js";const mt=()=>performance.now(),l={tick:s=>requestAnimationFrame(s),now:()=>mt(),tasks:new Set};function W(){const s=l.now();l.tasks.forEach(e=>{e.c(s)||(l.tasks.delete(e),e.f())}),l.tasks.size!==0&&l.tick(W)}function ht(s){let e;return l.tasks.size===0&&l.tick(W),{promise:new Promise(t=>{l.tasks.add(e={c:s,f:t})}),abort(){l.tasks.delete(e)}}}const lt=!0,jt=Object.freeze(Object.defineProperty({__proto__:null,prerender:lt},Symbol.toStringTag,{value:"Module"}));function N(s){return Object.prototype.toString.call(s)==="[object Date]"}function P(s,e,t,i){if(typeof t=="number"||N(t)){const a=i-t,n=(t-e)/(s.dt||1/60),h=s.opts.stiffness*a,d=s.opts.damping*n,b=(h-d)*s.inv_mass,f=(n+b)*s.dt;return Math.abs(f)<s.opts.precision&&Math.abs(a)<s.opts.precision?i:(s.settled=!1,N(t)?new Date(t.getTime()+f):t+f)}else{if(Array.isArray(t))return t.map((a,n)=>P(s,e[n],t[n],i[n]));if(typeof t=="object"){const a={};for(const n in t)a[n]=P(s,e[n],t[n],i[n]);return a}else throw new Error(`Cannot spring ${typeof t} values`)}}var w,x,k,m,g,M,$,_,z,p,L,C,G;const R=class R{constructor(e,t={}){o(this,C);o(this,w,A(.15));o(this,x,A(.8));o(this,k,A(.01));o(this,m,A(void 0));o(this,g,A(void 0));o(this,M);o(this,$,0);o(this,_,1);o(this,z,0);o(this,p,null);o(this,L,null);r(this,m).v=r(this,g).v=e,typeof t.stiffness=="number"&&(r(this,w).v=B(t.stiffness,0,1)),typeof t.damping=="number"&&(r(this,x).v=B(t.damping,0,1)),typeof t.precision=="number"&&(r(this,k).v=t.precision)}static of(e,t){const i=new R(e(),t);return Y(()=>{i.set(e())}),i}set(e,t){var a,n;if((a=r(this,L))==null||a.reject(new Error("Aborted")),t!=null&&t.instant||r(this,m).v===void 0)return(n=r(this,p))==null||n.abort(),c(this,p,null),y(r(this,m),y(r(this,g),e)),c(this,M,e),Promise.resolve();t!=null&&t.preserveMomentum&&(c(this,_,0),c(this,z,t.preserveMomentum));var i=c(this,L,Z());return i.promise.catch(tt),V(this,C,G).call(this,e).then(()=>{i===r(this,L)&&i.resolve(void 0)}),i.promise}get current(){return j(r(this,m))}get damping(){return j(r(this,x))}set damping(e){y(r(this,x),B(e,0,1))}get precision(){return j(r(this,k))}set precision(e){y(r(this,k),e)}get stiffness(){return j(r(this,w))}set stiffness(e){y(r(this,w),B(e,0,1))}get target(){return j(r(this,g))}set target(e){this.set(e)}};w=new WeakMap,x=new WeakMap,k=new WeakMap,m=new WeakMap,g=new WeakMap,M=new WeakMap,$=new WeakMap,_=new WeakMap,z=new WeakMap,p=new WeakMap,L=new WeakMap,C=new WeakSet,G=function(e){var i;if(y(r(this,g),e),(i=r(this,m)).v??(i.v=e),r(this,M)??c(this,M,r(this,m).v),!r(this,p)){c(this,$,l.now());var t=1e3/(r(this,z)*60);r(this,p)??c(this,p,ht(a=>{c(this,_,Math.min(r(this,_)+t,1));const n=Math.min(a-r(this,$),1e3/30),h={inv_mass:r(this,_),opts:{stiffness:r(this,w).v,damping:r(this,x).v,precision:r(this,k).v},settled:!0,dt:n*60/1e3};var d=P(h,r(this,M),r(this,m).v,r(this,g).v);return c(this,M,r(this,m).v),c(this,$,a),y(r(this,m),d),h.settled&&c(this,p,null),!h.settled}))}return r(this,p).promise};let H=R;function B(s,e,t){return Math.max(e,Math.min(t,s))}var dt=K('<div class="counter svelte-y96mxt"><button aria-label="Decrease the counter by one" class="svelte-y96mxt"><svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-y96mxt"><path d="M0,0.5 L1,0.5" class="svelte-y96mxt"></path></svg></button> <div class="counter-viewport svelte-y96mxt"><div class="counter-digits svelte-y96mxt"><strong class="hidden svelte-y96mxt" aria-hidden="true"> </strong> <strong class="svelte-y96mxt"> </strong></div></div> <button aria-label="Increase the counter by one" class="svelte-y96mxt"><svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-y96mxt"><path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" class="svelte-y96mxt"></path></svg></button></div>');function ft(s,e){et(e,!0);const t=new H(0),i=it(()=>a(t.current,1));function a(D,S){return(D%S+S)%S}var n=dt(),h=v(n);h.__click=()=>t.target-=1;var d=E(h,2),b=v(d),f=v(b),J=v(f,!0);u(f);var T=E(f,2),Q=v(T,!0);u(T),u(b),u(d);var X=E(d,2);X.__click=()=>t.target+=1,u(n),st((D,S)=>{O(b,"style",`transform: translate(0, ${100*j(i)}%)`),q(J,D),q(Q,S)},[()=>Math.floor(t.current+1),()=>Math.floor(t.current)]),I(s,n),rt()}ct(["click"]);const pt=""+new URL("../assets/svelte-welcome.0pIiHnVF.webp",import.meta.url).href,vt=""+new URL("../assets/svelte-welcome.VNiyy3gC.png",import.meta.url).href;var ut=K('<meta name="description" content="Svelte demo app">'),gt=K('<section class="svelte-19xx0bt"><h1 class="svelte-19xx0bt"><span class="welcome svelte-19xx0bt"><picture><source type="image/webp"> <img alt="Welcome" class="svelte-19xx0bt"></picture></span> to your new<br>SvelteKit app</h1> <h2>try editing <strong>src/routes/+page.svelte</strong></h2> <!></section>');function $t(s){var e=gt();ot(b=>{var f=ut();nt.title="Home",I(b,f)});var t=v(e),i=v(t),a=v(i),n=v(a);O(n,"srcset",pt);var h=E(n,2);O(h,"src",vt),u(a),u(i),at(3),u(t);var d=E(t,4);ft(d,{}),u(e),I(s,e)}export{$t as component,jt as universal};
